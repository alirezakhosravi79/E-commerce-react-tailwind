import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { ProductContext } from "../context/ProductContext";

function ProductDetails() {
  const { id } = useParams();
  console.log(id);
  
  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
    </section>
  );
}

export default ProductDetails;
