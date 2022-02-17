import { Typography } from "@mui/material";
import React from "react";
import ReactStars from "react-stars";
import { Container, Image, ProductInformation } from "./styles";

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

const ProductCard: React.FC<ProductsProps> = (product: ProductsProps) => {
  return (
    <Container>
      <Image image={product.imgUrl} title={product.name} />
      <Typography variant="subtitle1" style={{ fontWeight: 600 }} gutterBottom>
        {product.name}
      </Typography>
      <ProductInformation>
        <Typography variant="subtitle2" gutterBottom>
          {product.priceFormatted}
        </Typography>

        <ReactStars
          count={5}
          size={24}
          value={(product.rateAverage * 5) / 10}
          color2={"#ffd700"}
          edit={false}
        />
      </ProductInformation>
    </Container>
  );
};

export default ProductCard;
