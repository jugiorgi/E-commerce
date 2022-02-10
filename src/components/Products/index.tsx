import Grid from "@material-ui/core/Grid";
import Product from "../Product";

import useStyles from "./styles";

interface Props {
  products: any;
  handleAddToCart: (productId: string, quantity: number) => void;
}

const Products: React.FC<Props> = ({ products, handleAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={2} alignItems="stretch">
        {products.map((product: any) => (
          <Grid key={product.id} item xs={12} sm={4} md={3} lg={3} xl={2}>
            <Product product={product} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
