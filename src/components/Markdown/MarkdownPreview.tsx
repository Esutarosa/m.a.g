import type { FC } from 'react';
import Markdown from 'react-markdown';
import { cn } from '@/lib/utils';

interface MarkdownPreviewProps {
  content: string
  className?: string
}

const MarkdownPreview: FC<MarkdownPreviewProps> = ({ content, className }) => {
  return (
    <Markdown
      className={cn('space-y-2', className)}
      components={{
        h1: ({ node, ...props }) => {
          return <h1 className='h1 font-bold' {...props} />
        },
        h2: ({ node, ...props }) => {
          return <h2 className='h2 font-bold' {...props} />
        },
        h3: ({ node, ...props }) => {
          return <h3 className='h3 font-bold' {...props} />
        },
        h4: ({ node, ...props }) => {
          return <h4 className='h4 font-bold' {...props} />
        },
        h5: ({ node, ...props }) => {
          return <h5 className='h5 font-bold' {...props} />
        },
        h6: ({ node, ...props }) => {
          return <h6 className='h6 font-bold' {...props} />
        },
        p: ({ node, ...props }) => {
          return <p className='p' {...props} />
        },
      }}
    >
      {content}
    </Markdown>
  );
}

export default MarkdownPreview;