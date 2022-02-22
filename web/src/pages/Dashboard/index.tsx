import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import Sidebar from "../../components/Sidebar";
import { useCart } from "../../hooks/useCart";
import api from "../../services/api";
import ReactStars from "react-stars";
import { Products } from "../../types";
import { formatPrice } from "../../util/format";

import {
  Container,
  Content,
  Catalog,
  AddButton,
  Image,
  Product,
  ProductInformation,
} from "./styles";

interface ProductFormatted extends Products {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const { addProduct, cart } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    sumAmount[product.id] = product.amount;

    return sumAmount;
  }, {} as CartItemsAmount);

  function handleAddProduct(id: number) {
    addProduct(id);
  }

  function handleChangeCategory(id: number) {
    if (id === 0) {
      loadProducts();
    }
    loadProductsByCategory(id);
  }

  async function loadProductsByCategory(id: number) {
    const response = await api.get(`/products/category/${id}`);
    const productsFormatted = response.data.content.map((product: Products) => {
      return {
        ...product,
        priceFormatted: formatPrice(product.price),
      };
    });

    setProducts(productsFormatted);
  }

  async function loadProducts() {
    const response = await api.get("products");
    const productsFormatted = response.data.content.map((product: Products) => {
      return {
        ...product,
        priceFormatted: formatPrice(product.price),
      };
    });

    setProducts(productsFormatted);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <Container>
      <Sidebar change={(data) => handleChangeCategory(data)} />
      <Content>
        <Catalog
          container
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          {products?.map((item) => (
            <Product key={item.id} item xs={12} sm={4} md={3} lg={3} xl={2}>
              <Image image={item.imgUrl} title={item.name} />
              <Typography
                variant="subtitle1"
                style={{ fontWeight: 600 }}
                gutterBottom
              >
                {item.name}
              </Typography>
              <ProductInformation>
                <Typography variant="subtitle2" gutterBottom>
                  {item.priceFormatted}
                </Typography>

                <ReactStars
                  count={5}
                  size={24}
                  value={(item.rateAverage * 5) / 10}
                  color2={"#ffd700"}
                  edit={false}
                />
              </ProductInformation>
              <AddButton
                type="button"
                data-testid="add-product-button"
                onClick={() => handleAddProduct(item.id)}
              >
                <div data-testid="cart-product-quantity">
                  <MdAddShoppingCart size={16} color="#FFF" />
                  {cartItemsAmount[item.id] || 0}
                </div>

                <span>ADICIONAR AO CARRINHO</span>
              </AddButton>
            </Product>
          ))}
        </Catalog>
      </Content>
    </Container>
  );
};

export default Dashboard;
