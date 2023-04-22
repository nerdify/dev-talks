import Image from 'next/image'
import Link from 'next/link'

import ProductList from '#/components/ProductList'

const PRODUCTS = Array.from(Array(4).keys()).map((key) => ({
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit quisquam cum sunt earum, voluptatem ratione nostrum libero accusamus vel officia pariatur nulla odit sed praesentium at quae obcaecati quod totam?',
  id: key.toString(),
  image: {
    url: 'http://localhost:3000/man.jpg',
  },
  name: 'Leather Long Wallet',
  price: 75,
}))

export default function Home() {
  return (
    <div className="container">
      <section>
        <h2 className="sr-only">Collections</h2>
        <div className="mt-16 grid grid-cols-3 gap-x-8">
          {[1, 2, 3].map((key) => (
            <div
              className="relative overflow-hidden rounded-lg shadow-lg"
              key={key}
            >
              <div className="relative h-[480px]">
                <Image
                  alt="Men"
                  className="object-cover object-center"
                  fill
                  src="/man.jpg"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-transparent to-black/50 p-4 hover:to-black/60">
                <div className="text-sm text-white">See the collection</div>
                <h3 className="mt-1 font-medium text-white">
                  <Link href="categories/men">
                    <span className="absolute inset-0"></span>Men
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-20">
        <h2 className="mb-8 text-2xl font-bold">Products</h2>
        <ProductList products={PRODUCTS} />
      </section>
    </div>
  )
}
