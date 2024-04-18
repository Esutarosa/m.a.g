import type { FC } from 'react'

const Home: FC = () => {
  return (
    <main className='flex items-center justify-center h-[80vh]'>
      <div className='text-center'>
        <h1 className='text-5xl'>Modernized Android Gyaru</h1>
        <p className='text-2xl mt-4 text-muted-foreground font-[100]'>Official website</p>
      </div>
    </main>
  )
}

export default Home