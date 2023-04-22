import ProductList from '#/components/ProductList'

const PRODUCTS = Array.from(Array(16).keys()).map((key) => ({
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam cum sunt earum, voluptatem ratione nostrum libero accusamus vel officia pariatur nulla odit sed praesentium at quae obcaecati quod totam?',
  id: key.toString(),
  image: {
    url: 'http://localhost:3000/man.jpg',
  },
  name: 'Leather Long Wallet',
  price: 75,
}))

interface CategoryProps {
  params: {
    id: string
  }
}

export const revalidate = 0

export default function Category({params}: CategoryProps) {
  return (
    <div className="container">
      <h1 className="mb-8 border-b border-gray-100 py-16 text-center text-4xl font-bold">
        Man
      </h1>
      <ProductList products={PRODUCTS} />
    </div>
  )
}
