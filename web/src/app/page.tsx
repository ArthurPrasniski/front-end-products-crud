import Header from "@/components/header";
import ProductCard from "@/components/product_card";

interface IProduct {
  id: number;
  name: string;
  brand: string;
  price: number;
  image: string;
}

async function getProducts() {
  const response = await fetch("http://localhost:3000/api/v1/products");
  return response.json();
}

export default async function Home() {
  const data = await getProducts();
  
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="grid 2xl:grid-cols-5 2xl:p-32 2xl:gap-20 sm:gap-10 sm:grid-cols-2 sm:p-16 xs:grid-cols-1 xs:p-20 xs:gap-10 lg:grid-cols-3 xl:grid-cols-4 xl:gap-10">
        {data.map((product: IProduct) => (
          <ProductCard
            key={product.id}
            brandName={product.brand}
            image={product.image}
            price={product.price}
            productName={product.name}
          />
        ))}
      </div>
    </main>
  );
}
