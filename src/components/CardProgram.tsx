import defaultImage from '~/assets/placeholder.png'
import type { Entry } from '~/types'

interface CardProgramProps extends Entry {
  onClick: (entry: Entry) => void
}

export function CardProgram({ onClick, ...rest }: CardProgramProps) {
  const { title, images } = rest


  return (
    <button
      className="relative flex flex-col items-center gap-2 p-1 border-2 border-transparent group w-44 h-72 hover:border-gray-300 "
      onClick={() => onClick(rest)}
    >

      <img
        alt={title}
        className="object-cover w-full h-full bg-cover bg-black/90"
        src={images['Poster Art'].url}
        onError={e => (e.currentTarget.src = defaultImage)}
      />


      
      <span className="block px-2 text-center truncate whitespace-nowrap w-44 text-medium">
        {title}
      </span>
    </button>
  )
}
