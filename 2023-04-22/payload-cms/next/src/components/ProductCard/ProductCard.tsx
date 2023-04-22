import Image from 'next/image'
import Link from 'next/link'

import type {Product} from '#/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({product}: ProductCardProps) {
  return (
    <div className="group relative">
      <div className="relative h-80 w-full overflow-hidden rounded bg-gray-50">
        <Image
          alt={product.name}
          className="object-cover object-center group-hover:opacity-80"
          fill
          src={product.image.url}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-500">
        <Link href={`/products/${product.id}`}>
          <span className="absolute inset-0"></span>
          {product.name}
        </Link>
      </h3>
      <div className="mt-1 text-gray-700">${product.price}</div>
    </div>
  )
}
