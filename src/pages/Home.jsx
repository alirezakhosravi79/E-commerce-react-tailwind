import { useContext } from "react";

//9 import product context
import { ProductContext } from "../context/ProductContext";
//13 import components
import Product from "../components/Product";
import Hero from "../components/Hero";

function Home() {
  //10 get products from product context
  const { products } = useContext(ProductContext);
  //11 get only mens & womens clothing category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
//   console.log(filteredProducts);

  return (
    <div>
      <Hero />
      {/* 12 map mizanim roy filteredProducts dar akhar style dehi mikonim */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
          xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product key={product.id} product={product}/>;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
