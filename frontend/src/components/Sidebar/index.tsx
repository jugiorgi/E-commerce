import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@material-ui/core";
import { InboxOutlined } from "@material-ui/icons";
import * as React from "react";

import useStyles from "./styles";
import api from "../../services/api";

interface CategoryProps {
  id: number;
  name: string;
}

const Sidebar: React.FC = () => {
  const classes = useStyles();
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(0);

  useEffect(() => {
    api.get("/categories").then((response) => {
      const { content } = response.data;
      setCategories(content);
    });
  }, []);

  function handleClicked(item: CategoryProps) {
    setCategory(item.id);
  }

  return (
    <Box color="primary">
      <Drawer
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.container }}
      >
        <Toolbar>
          <Typography>Categorias</Typography>
        </Toolbar>
        <List>
          {categories.map((item: CategoryProps, index) => (
            <ListItem
              className={`${category === item.id && classes.listItem}`}
              button
              key={index}
              alignItems="flex-start"
              onClick={() => handleClicked(item)}
            >
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
