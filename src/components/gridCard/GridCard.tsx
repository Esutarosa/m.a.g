'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Proops {
  item: string
}

const items = [
  { id: "1", subtitle: "Subtitle 1", title: "Title 1" },
  { id: "2", subtitle: "Subtitle 2", title: "Title 2" },
  { id: "3", subtitle: "Subtitle 3", title: "Title 3" },
  { id: "4", subtitle: "Subtitle 4", title: "Title 4" },
]

const GridCard = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className='section'>
      <motion.div className="flex items-center justify-center">
        <div className="grid grid-cols-4 gap-4">
          {items.map((item) => (
            <motion.div
              className={`card bg-primary rounded-lg shadow-md px-12 py-2 cursor-pointer ${selectedId === item.id ? 'card-selected' : ''}`}
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              key={item.id}
            >
              <div className="card-content">
                <motion.h2 className="text-background mb-2">{item.title}</motion.h2>
                <motion.h5 className="text-background mb-1">{item.subtitle}</motion.h5>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && (
            <motion.div
              className="fixed inset-0 bg-background/60 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {items.map((item) => (
                item.id === selectedId && (
                  <motion.div
                    className="bg-white rounded-lg p-4 shadow-md max-w-lg mx-auto"
                    layoutId={`card-container-${item.id}`}
                    key={item.id}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <motion.div className="relative">
                      <motion.button
                        className="absolute top-2 right-2 py-1 px-2 text-center text-white bg-red-500 rounded-full"
                        onClick={() => setSelectedId(null)}
                      >
                        Close
                      </motion.button>
                      <motion.h2 className="text-xl font-bold mb-2 text-purple-600">{item.title}</motion.h2>
                      <motion.h5 className="text-sm font-bold mb-1 text-gray-700">{item.subtitle}</motion.h5>
                      <motion.p
                        className="text-md text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Additional content can go here!
                      </motion.p>
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