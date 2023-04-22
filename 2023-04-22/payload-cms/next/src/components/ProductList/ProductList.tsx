import ProductCard from '#/components/ProductCard'
import type {Product} from '#/types'

interface ProductListProps {
  products: Product[]
}

export default function ProductList({products}: ProductListProps) {
  return (
    <div className="grid grid-cols-4 gap-x-4 gap-y-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}
