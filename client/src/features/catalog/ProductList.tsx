import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { useAppSelector } from "../../app/store/configureStore";


interface Props {
    products:Product[];
}
export default function ProductList({products} : Props){
    const { productsLoaded } = useAppSelector(state => state.catalog);
    return(
        <Grid container spacing={3}>
            {products.map(product=>(
                <Grid key={product.id} item xs={4}>
                {!productsLoaded ? (
                    <ProductCardSkeleton />
                ) : (
                    <ProductCard product={product} />
                )}
                </Grid>
            ))}
        </Grid>
    )
}