import { useState } from 'react'

import type { Entry } from '~/types'

import { CardProgram } from './CardProgram'
import { Modal } from './Modal'

interface ListProgramsProps {
  data: Entry[]
}

export function ListPrograms({ data }: ListProgramsProps) {
  const [currentEntry, setCurrentEntry] = useState<Entry | null>(null)
  const [showModal, setShowModal] = useState(false)

  const handleClick = (entry: Entry) => {
    setCurrentEntry(entry)
    setShowModal(true)
  }

  const onClose = () => {
    setCurrentEntry(null)
    setShowModal(false)
  }

  return (
    <section className="justify-center wrapper-items sm:justify-items-start">
      {data.map(item => (
        <CardProgram {...item} key={item.title} onClick={handleClick} />
      ))}
      {showModal && currentEntry ? (
        <Modal isOpen={showModal} onClose={onClose}>
          <div className="flex flex-col gap-4 sm:flex-row">
            <aside>
              <img
                alt={currentEntry.title}
                className="w-full max-w-xs"
                src={currentEntry.images['Poster Art'].url}
              />
            </aside>
            <aside className="flex flex-col justify-between gap-4">
              <div className="space-y-4">
                <h1 className="text-lg font-semibold">{currentEntry.title}</h1>
                <p className="text-sm max-w-prose sm:text-base">{currentEntry.description}</p>
              </div>
              <span>Release: {currentEntry.releaseYear || 'N/A'}</span>
            </aside>
          </div>
        </Modal>
      ) : null}
    </section>
  )
}
