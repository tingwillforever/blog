---
title: "Next.js 14 App Router 入门指南"
description: "详细介绍 Next.js 14 的 App Router 特性，包括路由、布局、数据获取等核心概念。"
date: "2026-03-07"
draft: false
categories:
  - 技术
tags:
  - Next.js
  - React
  - 教程
author: 博主
---

## 什么是 App Router？

Next.js 14 引入了全新的 **App Router**，基于 React Server Components 构建，提供了更强大的路由和数据获取能力。

### 目录结构

```
app/
├── layout.tsx      # 根布局
├── page.tsx        # 首页
├── about/
│   └── page.tsx    # 关于页面
└── blog/
    └── [slug]/
        └── page.tsx # 动态路由
```

## 核心特性

### 1. 基于文件的路由

App Router 使用文件系统定义路由：

- `app/page.tsx` → `/`
- `app/about/page.tsx` → `/about`
- `app/blog/[slug]/page.tsx` → `/blog/:slug`

### 2. React Server Components

默认所有组件都是服务端组件：

```tsx
// 服务端组件（默认）
export default async function Page() {
  const data = await fetchData();
  return <div>{data}</div>;
}
```

### 3. 布局嵌套

布局可以嵌套，父布局会包裹子布局：

```tsx
// app/layout.tsx
export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

// app/blog/layout.tsx
export default function BlogLayout({ children }) {
  return <div className="blog">{children}</div>;
}
```

### 4. 数据获取

#### 服务端获取

```tsx
async function getData() {
  const res = await fetch('https://api.example.com/data');
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <main>{/* ... */}</main>;
}
```

#### 客户端获取

```tsx
'use client';

import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch('/api/data').then(res => res.json()).then(setData);
  }, []);
  
  return <main>{/* ... */}</main>;
}
```

## 实践建议

1. **优先使用服务端组件** - 减少客户端 JavaScript
2. **合理使用缓存** - 使用 `fetch` 的缓存选项
3. **流式渲染** - 使用 `Suspense` 分割加载单元
4. **错误处理** - 使用 `error.tsx` 捕获错误

## 总结

App Router 是 Next.js 的未来，它提供了更好的性能、更简洁的代码和更强大的功能。建议新项目直接使用 App Router。

---

**参考资料：**
- [Next.js 官方文档](https://nextjs.org/docs)
- [React Server Components](https://react.dev/blog/2020/12/21/data-fetching-with-react-server-components)
