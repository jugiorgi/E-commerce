import { Grid } from "@material-ui/core";
import Product from "../Product";

import useStyles from "./styles";

const Products: React.FC = () => {
  const classes = useStyles();

  const products = [
    {
      id: 1,
      name: "Shoes",
      price: "$109,20",
      description: "Running shoes.",
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2021/6/VR/DT/NJ/123686353/product-jpeg-250x250.jpg",
    },
    {
      id: 2,
      name: "Macbook",
      price: "$10.251,00",
      description: "Apple macbook.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRahgq02crE-dVbpdgS5-Fk6qa8ReA-ja6xezA9rE1QSYFAM__uZSdYm_CwH5ehZSDH4w4&usqp=CAU",
    },
  ];

  return (
    <main>
      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
