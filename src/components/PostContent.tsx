'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';

interface PostContentProps {
  content: string;
}

export default function PostContent({ content }: PostContentProps) {
  return (
    <div className="post-content" style={{ 
      fontSize: '1rem',
      lineHeight: '1.7',
      color: 'var(--foreground)'
    }}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          h1: ({ node, ...props }) => (
            <h1 
              className="" 
              style={{ 
                fontSize: '2.5rem',
                fontWeight: 600,
                marginTop: 0,
                marginBottom: '1.5rem',
                color: 'var(--foreground)'
              }} 
              {...props} 
            />
          ),
          h2: ({ node, ...props }) => (
            <h2 
              className=""
              style={{ 
                fontSize: '2rem',
                fontWeight: 600,
                marginTop: '2.5rem',
                marginBottom: '1rem',
                color: 'var(--foreground)'
              }} 
              {...props} 
            />
          ),
          h3: ({ node, ...props }) => (
            <h3 
              className=""
              style={{ 
                fontSize: '1.5rem',
                fontWeight: 600,
                marginTop: '2rem',
                marginBottom: '0.75rem',
                color: 'var(--foreground)'
              }} 
              {...props} 
            />
          ),
          h4: ({ node, ...props }) => (
            <h4 
              className=""
              style={{ 
                fontSize: '1.25rem',
                fontWeight: 600,
                marginTop: '1.5rem',
                marginBottom: '0.5rem',
                color: 'var(--foreground)'
              }} 
              {...props} 
            />
          ),
          p: ({ node, ...props }) => (
            <p 
              className=""
              style={{ 
                fontSize: '1rem',
                lineHeight: '1.7',
                marginBottom: '1.25rem'
              }} 
              {...props} 
            />
          ),
          a: ({ node, ...props }) => (
            <a
              className=""
              style={{ 
                color: 'var(--accent)',
                textDecoration: 'none',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-hover)';
                e.currentTarget.style.textDecoration = 'underline';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.textDecoration = 'none';
              }}
              {...props}
            />
          ),
          strong: ({ node, ...props }) => (
            <strong 
              className=""
              style={{ fontWeight: 600 }}
              {...props} 
            />
          ),
          em: ({ node, ...props }) => (
            <em className="" {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote 
              className=""
              style={{ 
                borderLeft: '3px solid var(--accent)',
                paddingLeft: '1.25rem',
                margin: '1.5rem 0',
                color: 'var(--foreground-muted)',
                fontStyle: 'italic'
              }} 
              {...props} 
            />
          ),
          ul: ({ node, ...props }) => (
            <ul 
              className=""
              style={{ 
                margin: '1rem 0',
                paddingLeft: '1.5rem',
                lineHeight: '1.7'
              }} 
              {...props} 
            />
          ),
          ol: ({ node, ...props }) => (
            <ol 
              className=""
              style={{ 
                margin: '1rem 0',
                paddingLeft: '1.5rem',
                lineHeight: '1.7'
              }} 
              {...props} 
            />
          ),
          li: ({ node, ...props }) => (
            <li 
              className=""
              style={{ marginBottom: '0.5rem' }}
              {...props} 
            />
          ),
          code: ({ node, inline, className, children, ...props }: any) => (
            inline ? (
              <code 
                className=""
                style={{ 
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875em',
                  backgroundColor: 'var(--code-bg)',
                  color: 'var(--code-foreground)',
                  padding: '0.2em 0.4em',
                  borderRadius: '4px'
                }} 
                {...props}
              >
                {children}
              </code>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          ),
          pre: ({ node, ...props }) => (
            <pre 
              className=""
              style={{ 
                backgroundColor: 'var(--code-bg)',
                color: 'var(--code-foreground)',
                padding: '1.25rem',
                borderRadius: '8px',
                overflowX: 'auto',
                margin: '1.5rem 0',
                lineHeight: '1.6'
              }} 
              {...props} 
            />
          ),
          img: ({ node, ...props }) => (
            <img 
              className=""
              style={{ 
                maxWidth: '100%',
                height: 'auto',
                borderRadius: '8px',
                margin: '1.5rem 0'
              }} 
              {...props} 
            />
          ),
          table: ({ node, ...props }) => (
            <div 
              className=""
              style={{ 
                margin: '1.5rem 0',
                overflowX: 'auto'
              }}
            >
              <table 
                className=""
                style={{ 
                  width: '100%',
                  borderCollapse: 'collapse'
                }} 
                {...props} 
              />
            </div>
          ),
          th: ({ node, ...props }) => (
            <th 
              className=""
              style={{ 
                border: '1px solid var(--border)',
                padding: '0.75rem 1rem',
                textAlign: 'left',
                fontWeight: 600,
                backgroundColor: 'var(--background-alt)'
              }} 
              {...props} 
            />
          ),
          td: ({ node, ...props }) => (
            <td 
              className=""
              style={{ 
                border: '1px solid var(--border)',
                padding: '0.75rem 1rem'
              }} 
              {...props} 
            />
          ),
          hr: ({ node, ...props }) => (
            <hr 
              className=""
              style={{ 
                border: 'none',
                borderTop: '1px solid var(--border)',
                margin: '2rem 0'
              }} 
              {...props} 
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
