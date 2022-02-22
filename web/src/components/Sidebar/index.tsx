import React, { useEffect, useState } from "react";

import { AiOutlineLayout } from "react-icons/ai";
import api from "../../services/api";
import { Categories } from "../../types";

import { Container, Title, Category } from "./styles";

interface SidebarProps {
  change: (data: number) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ change }: SidebarProps) => {
  const [categories, setCategories] = useState<Categories[]>([]);
  const [category, setCategory] = useState<Categories>({
    id: 0,
    name: "",
  });

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get("categories");
      const { content } = response.data;
      content.unshift({ id: 0, name: "Todas as categorias" });
      setCategories(content);
    }

    loadCategories();
  }, []);

  useEffect(() => {
    change(category.id);
  }, [category]);

  return (
    <Container>
      <Title>
        <strong>Categorias</strong>
      </Title>
      {categories?.sort().map((item) => (
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
