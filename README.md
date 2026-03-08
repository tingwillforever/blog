# 个人博客

基于 Next.js 16 + TypeScript + Tailwind CSS 构建的现代化个人博客。

## ✨ 特性

- 🚀 **Next.js 16** - 最新的 React 全栈框架
- 📝 **Markdown 支持** - 使用 Markdown 编写文章
- 🎨 **Tailwind CSS** - 原子化 CSS，快速样式开发
- 🌙 **深色模式** - 自动/手动切换主题
- 📱 **响应式设计** - 完美适配各种设备
- 🔍 **SEO 友好** - 内置元标签和结构化数据
- ⚡ **高性能** - 服务端渲染 + 静态生成

## 📁 项目结构

```
blog/
├── content/posts/          # 博客文章（Markdown）
├── src/
│   ├── app/               # Next.js App Router 页面
│   │   ├── posts/[slug]/  # 文章详情页
│   │   ├── categories/    # 分类页面
│   │   ├── tags/          # 标签页面
│   │   ├── archive/       # 归档页面
│   │   └── about/         # 关于页面
│   ├── components/        # React 组件
│   ├── lib/              # 工具函数
│   └── types/            # TypeScript 类型定义
└── public/               # 静态资源
```

## 🚀 快速开始

### 环境要求

- Node.js 18.17 或更高版本
- npm / yarn / pnpm

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 📝 撰写文章

在 `content/posts/` 目录下创建 `.md` 文件：

```markdown
---
title: "文章标题"
description: "文章描述"
date: "2026-03-08"
draft: false
categories:
  - 技术
tags:
  - Next.js
  - 教程
author: 博主
---

文章内容...
```

### Frontmatter 字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| title | ✅ | 文章标题 |
| description | ✅ | 文章描述（用于 SEO） |
| date | ✅ | 发布日期（YYYY-MM-DD） |
| draft | ❌ | 是否为草稿（默认 false） |
| categories | ❌ | 分类数组 |
| tags | ❌ | 标签数组 |
| author | ❌ | 作者名（默认"博主"） |
| coverImage | ❌ | 封面图片路径 |
| updated | ❌ | 最后更新日期 |

## 🌐 部署指南

### 方式一：Vercel（推荐）

1. 安装 Vercel CLI：
   ```bash
   npm i -g vercel
   ```

2. 登录 Vercel：
   ```bash
   vercel login
   ```

3. 部署：
   ```bash
   vercel
   ```

4. 生产环境部署：
   ```bash
   vercel --prod
   ```

**Vercel 优势：**
- 零配置部署
- 自动 HTTPS
- 全球 CDN
- 自动预览部署
- 与 GitHub 集成

### 方式二：Docker 部署

1. 创建 `Dockerfile`：

```dockerfile
FROM node:18-alpine AS base

FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
```

2. 构建镜像：
   ```bash
   docker build -t my-blog .
   ```

3. 运行容器：
   ```bash
   docker run -p 3000:3000 my-blog
   ```

### 方式三：传统服务器部署

1. 本地构建：
   ```bash
   npm run build
   ```

2. 上传到服务器：
   ```bash
   scp -r .next/* user@server:/var/www/blog/.next/
   scp -r public/* user@server:/var/www/blog/public/
   scp -r node_modules/* user@server:/var/www/blog/node_modules/
   scp package.json user@server:/var/www/blog/
   ```

3. 在服务器上安装 PM2：
   ```bash
   npm i -g pm2
   ```

4. 启动服务：
   ```bash
   cd /var/www/blog
   pm2 start npm --name "blog" -- start
   pm2 save
   pm2 startup
   ```

5. 配置 Nginx：

```nginx
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## 🛠️ 可用脚本

```bash
# 开发
npm run dev

# 构建
npm run build

# 生产启动
npm start

# 代码检查
npm run lint
```

## 📦 依赖说明

### 核心依赖

- `next` - React 框架
- `react` / `react-dom` - UI 库
- `typescript` - 类型系统
- `tailwindcss` - CSS 框架

### 功能依赖

- `gray-matter` - Markdown Frontmatter 解析
- `react-markdown` - Markdown 渲染
- `remark-gfm` - GitHub Flavored Markdown 支持
- `rehype-highlight` - 代码高亮
- `lucide-react` - 图标库
- `next-themes` - 主题切换

## 🎨 自定义

### 修改站点信息

编辑 `src/app/layout.tsx` 中的 metadata：

```typescript
export const metadata = {
  title: '我的博客',
  description: '个人技术博客',
  // ...
};
```

### 修改主题色

编辑 `tailwind.config.ts` 或直接在 CSS 中定义。

### 添加新页面

在 `src/app/` 目录下创建新文件夹和 `page.tsx`。

## 📄 许可证

MIT License

## 🙏 致谢

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)

---

**Happy Blogging! 🎉**
