import { useEffect } from "react";
import LoadingIndicator from "../../app/layout/LoadingIndicator";
import ProductList from "./ProductList";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";

export default function Catalog() {
  const products = useAppSelector(productSelectors.selectAll);
  const dispatch = useAppDispatch();
  const {productsLoaded, status} = useAppSelector(state => state.catalog);
  useEffect(() => {
    if (!productsLoaded) dispatch(fetchProductsAsync());
  }, [productsLoaded, dispatch])

  if (status.includes('pending')) return <LoadingIndicator message='Loading products...' />
  return (
    <>
      <ProductList products={products} />
    </>
  );
}
