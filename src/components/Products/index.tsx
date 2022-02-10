import Grid from "@material-ui/core/Grid";
import Product from "../Product";

import useStyles from "./styles";

interface Props {
  products: any;
  onAddToCart: (productId: string, quantity: number) => void;
}

const Products: React.FC<Props> = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product: any) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
