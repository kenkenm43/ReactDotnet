import { Grid } from "@mui/material";
import { useAppSelector } from "../../app/store/configureStore";
import { Product } from "./../../app/models/product";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  const { productsLoaded } = useAppSelector((state) => state.catalog);
  return (
    <div>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={4} key={product.id}>
            {!productsLoaded ? (
              <ProductCardSkeleton />
            ) : (
              <ProductCard product={product} />
            )}
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
