import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingIndicator from "../../app/layout/LoadingIndicator";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";


export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading]= useState(true);
  useEffect(() => {
   agent.Catalog.list().then(products =>setProducts(products))
   .catch(error => console.log(error))
   .finally(()=> setLoading(false))
  }, []);
  if(loading) return <LoadingIndicator/>
  return (
    <>
      <ProductList products={products} />
    </>
  );
}
