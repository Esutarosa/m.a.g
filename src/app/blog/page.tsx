import Link from 'next/link'
import type { FC } from 'react'

const Blog: FC = () => {
  return (
    <main className='flex items-center justify-center h-[80vh] container text-center'>
      <p className='text-muted-foreground'>
        Interesting information will appear here in the near future,
        but in the meantime you can follow me on {' '}
        <Link
          href='https://twitter.com/AndroidGyaru'
          className='underline underline-offset-4'
        >
          Twitter
        </Link>
      </p>
    </main>
  )
}

export default Blog