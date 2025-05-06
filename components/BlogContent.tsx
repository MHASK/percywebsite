'use client'

interface BlogContentProps {
  content: string;
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <>
      <div 
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      
      <style jsx global>{`
        .blog-content h1 {
          font-size: 2.25rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.2;
        }
        .blog-content h2 {
          font-size: 1.875rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
          line-height: 1.3;
        }
        .blog-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.75rem;
        }
        .blog-content p {
          margin-bottom: 1.25rem;
          line-height: 1.7;
        }
        .blog-content ul, .blog-content ol {
          margin-left: 1.5rem;
          margin-bottom: 1.25rem;
        }
        .blog-content ul {
          list-style-type: disc;
        }
        .blog-content ol {
          list-style-type: decimal;
        }
        .blog-content li {
          margin-bottom: 0.5rem;
        }
        .blog-content a {
          color: #2563eb;
          text-decoration: none;
        }
        .blog-content a:hover {
          text-decoration: underline;
        }
        .blog-content blockquote {
          border-left: 4px solid #e5e7eb;
          padding-left: 1rem;
          margin: 1.5rem 0;
          font-style: italic;
          color: #4b5563;
        }
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
        }
        .blog-content th {
          background-color: #f9fafb;
          font-weight: 600;
          text-align: left;
          padding: 0.75rem 1rem;
          border: 1px solid #e5e7eb;
        }
        .blog-content td {
          padding: 0.75rem 1rem;
          border: 1px solid #e5e7eb;
        }
        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 1.5rem 0;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .blog-content strong {
          font-weight: 600;
        }
        .blog-content code {
          background-color: #f1f5f9;
          padding: 0.2rem 0.4rem;
          border-radius: 0.25rem;
          font-family: monospace;
          font-size: 0.875em;
        }
        .blog-content pre {
          background-color: #1e293b;
          color: #e2e8f0;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        .blog-content pre code {
          background-color: transparent;
          padding: 0;
          color: inherit;
        }
      `}</style>
    </>
  );
} 