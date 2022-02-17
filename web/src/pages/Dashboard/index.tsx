import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import Sidebar from "../../components/Sidebar";
import api from "../../services/api";

import { formatPrice } from "../../util/format";

import { Container, Content, Catalog } from "./styles";

interface ProductsProps {
  id: number;
  description: string;
  date: string;
  imgUrl: string;
  name: string;
  price: number;
  rateAverage: number;
  priceFormatted: number;
  categories: Array<CategoriesProps>;
}

interface CategoriesProps {
  id: number;
  name: string;
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Array<ProductsProps>>();

  useEffect(() => {
    api
      .get("products")
      .then((response) => {
        const data = response.data.content.map((product: ProductsProps) => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        }));
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <Sidebar />
      <Content>
        <Catalog
          container
          justifyContent="center"
          spacing={2}
          alignItems="stretch"
        >
          {products?.map((item) => (
            <Grid key={item.id} item xs={12} sm={4} md={3} lg={3} xl={2}>
              <ProductCard key={item.id} {...item} />
            </Grid>
          ))}
        </Catalog>
      </Content>
    </Container>
  );
};

export default Dashboard;
