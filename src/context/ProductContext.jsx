//2
import { createContext, useState, useEffect } from "react"

//3create context 
export const ProductContext = createContext();

//4children ro midim bhesh , returt miknim
function ProductProvider({children}) {
  //5 products state
  const [products, setProducts] = useState([])
  //6 fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();
      // console.log(data);
      //8 va value gharar midim products
      setProducts(data);
    }
    fetchProducts();
  }, [])
  return (
    //** */ value  ro bain 2 ta {} gharar bdim 
    <ProductContext.Provider value={{products}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider;