import Image from 'next/image'
import Link from 'next/link'

import {faCheck as fasCheck} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

interface CategoryProps {
  params: {
    id: string
  }
}

export const revalidate = 0

export default async function Category({params}: CategoryProps) {
  return (
    <div className="container grid grid-cols-2 gap-x-16 py-24">
      <div>
        <div className="flex flex-col gap-y-4">
          <Link
            className="text-sm font-medium text-gray-500"
            href={`/categories/${1}`}
          >
            Travel
          </Link>
          <h1 className="text-4xl font-bold">Everyday Ruck Snack</h1>
          <div>$20</div>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime
            repudiandae quas excepturi saepe minus, nobis asperiores ex unde
            aspernatur autem iste recusandae temporibus, quasi facilis numquam a
            fuga tempore.
          </p>
          <div className="flex items-center gap-x-4">
            <FontAwesomeIcon className="text-green-500" icon={fasCheck} />
            In stock and ready to ship
          </div>
        </div>
        <button className="mt-8 flex h-12 w-full items-center justify-center rounded bg-indigo-500 px-4 text-white hover:bg-indigo-700">
          Add to bag
        </button>
      </div>
      <div className="aspect-h-16 aspect-w-16">
        <Image
          alt={''}
          className="absolute inset-0 h-full w-full rounded object-cover object-center"
          height={521}
          src={'/man.jpg'}
          width={512}
        />
      </div>
    </div>
  )
}
