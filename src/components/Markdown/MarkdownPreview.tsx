import type { FC } from 'react';
import Markdown from 'react-markdown';
import { cn } from '@/lib/utils';
import remarkGfm from 'remark-gfm';

interface MarkdownPreviewProps {
  content: string
  className?: string
}

const MarkdownPreview: FC<MarkdownPreviewProps> = ({ content, className }) => {
  return (
    <Markdown
      className={cn('space-y-2', className)}
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ node, ...props }) => {
          return <h1 className='h1 font-bold pt-2' {...props} />
        },
        h2: ({ node, ...props }) => {
          return <h2 className='h2 font-bold pt-2' {...props} />
        },
        h3: ({ node, ...props }) => {
          return <h3 className='h3 font-bold pt-2' {...props} />
        },
        h4: ({ node, ...props }) => {
          return <h4 className='h4 font-bold pt-2' {...props} />
        },
        h5: ({ node, ...props }) => {
          return <h5 className='h5 font-bold pt-2' {...props} />
        },
        h6: ({ node, ...props }) => {
          return <h6 className='h6 font-bold pt-2' {...props} />
        },
        p: ({ node, ...props }) => {
          return <p className='p' {...props} />
        },
        ul: ({ node, ...props }) => {
          return <ul className='list-disc pl-6' {...props} />
        },
        ol: ({ node, ...props }) => {
          return <ol className='list-decimal pl-6' {...props} />
        },
        li: ({ node, ...props }) => {
          return <li className='list-item' {...props} />
        },
        blockquote: ({ node, ...props }) => {
          return <blockquote className='border-l-4 border-primary pl-4 italic text-muted-foreground/50' {...props} />
        },
        table: ({ node, ...props }) => {
          return <table className='table-auto w-full' {...props} />
        },
        thead: ({ node, ...props }) => {
          return <thead className='bg-background' {...props} />
        },
        tbody: ({ node, ...props }) => {
          return <tbody {...props} />
        },
        tr: ({ node, ...props }) => {
          return <tr {...props} />
        },
        th: ({ node, ...props }) => {
          return <th className='px-4 py-2 border' {...props} />
        },
        td: ({ node, ...props }) => {
          return <td className='px-4 py-2 border' {...props} />
        },
        a: ({ node, ...props }) => {
          return <a className='text-blue-600 underline' {...props} />
        },
        img: ({ node, ...props }) => {
          return <img className='max-w-full h-auto' {...props} />
        },
        strong: ({ node, ...props }) => {
          return <strong className='font-bold' {...props} />
        },
        em: ({ node, ...props }) => {
          return <em className='italic' {...props} />
        },
        del: ({ node, ...props }) => {
          return <del className='line-through text-blue' {...props} />
        },
        hr: ({ node, ...props }) => {
          return <hr className='my-4' {...props} />
        },
        pre: ({ node, ...props }) => {
          return <pre className='bg-muted/35 p p-4 rounded overflow-auto' {...props} />
        }
      }}
    >
      {content}
    </Markdown>
  );
}

export default MarkdownPreview;