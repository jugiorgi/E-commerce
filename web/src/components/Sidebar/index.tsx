import React, { useEffect, useState } from "react";

import { AiOutlineLayout } from "react-icons/ai";

import { Container, Title, Category } from "./styles";

interface CategoryProps {
  id: number;
  name: string;
}

const Sidebar: React.FC = () => {
  const [category, setCategory] = useState<CategoryProps>({ id: 0, name: "" });
  const categories = [
    { id: 1, name: "Books" },
    { id: 2, name: "Historic" },
    { id: 3, name: "Books" },
  ];

  return (
    <Container>
      <Title>
        <strong>Categorias</strong>
      </Title>
      {categories.map((item) => (
        <Category
          key={item.id}
          isSelected={item.id === category.id}
          onClick={() => setCategory(item)}
        >
          <AiOutlineLayout size={18} />
          <span>{item.name}</span>
        </Category>
      ))}
    </Container>
  );
};

export default Sidebar;
