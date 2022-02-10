import Grid from "@material-ui/core/Grid";
import Product from "../Product";

import useStyles from "./styles";

const Products = (products: any) => {
  const classes = useStyles();

  const data = products.products;

  if (!data.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justifyContent="center" spacing={4}>
        {data.map((product: any) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
