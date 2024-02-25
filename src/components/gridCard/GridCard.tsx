'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose } from "react-icons/io5"
import { HOME_CARDS } from '@/lib/constants'

import Button from "@/ui/Button"
import Image from "next/image"

const GridCard = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className='section container mx-auto'>
      <div className='data'>
        <h3 className='h3'>Summary</h3>
        <p className='text-muted-foreground pt-1'>The main blocks of my site, feel free to explore each of them!</p>
      </div>

      <motion.div className="flex items-center justify-center">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 w-full flex-col">
          {HOME_CARDS.map((item) => (
            <motion.div
              className={`w-full h-[220px] relative bg-no-repeat bg-cover rounded-md shadow-md p-2 cursor-pointer
                ${selectedId === item.id ? 'card-selected' : ''}
                ${item.wideCol === true ? 'col-span-2' : ''}
              `}
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              style={{ backgroundImage: `url(/home/home-card-${item.id}.jpg)` }}
              key={item.id}
            >
              <div className="absolute w-full h-full inset-0 bg-background/60 flex items-center justify-center bg-gradient-to-b from-transparent to-background">
                <motion.h2 className="text-prymari uppercase font-bold text-sm sm:text-xl md:text-2xl select-none">{item.title}</motion.h2>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div className="container mx-auto h-full absolute flex items-center justify-center">
              {HOME_CARDS.map((item) => (
                item.id === selectedId && (
                  <motion.div
                    className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl flex items-center justify-center bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/40 rounded-md p-4 shadow-md"
                    layoutId={`card-container-${item.id}`}
                    key={item.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <motion.div className="relative">
                      <motion.button
                        className="absolute top-0 right-0 rounded-full"
                        onClick={() => setSelectedId(null)}
                      >
                        <IoClose
                          className='text-primary text-2xl'
                        />
                      </motion.button>
                      <motion.h2 className="text-xl font-bold mb-2">{item.title}</motion.h2>
                      <motion.div
                        className="text-md"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <div className='lg:flex'>
                          <div>
                            <p className="mb-4 text-muted-foreground lg:mr-4">{item.description}</p>
                            <Button className="mb-4 lg:mb-0 w-full lg:w-auto" path={item.path} text="See more" />
                          </div>
                          <Image className="rounded-md w-full lg:w-[220px]" src={item.img} alt="image" width={320} height={320} style={{ objectFit: 'cover' }} />
                        </div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}

export default GridCard