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

const Sidebar: React.FC = () => {
  const classes = useStyles();
  const [categories, setCategories] = useState({});

  useEffect(() => {}, []);

  return (
    <Box>
      <Drawer
        variant="permanent"
        anchor="left"
        PaperProps={{ style: { marginTop: "60px" } }}
      >
        <Toolbar>
          <Typography>Categorias</Typography>
        </Toolbar>
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxOutlined /> : <InboxOutlined />}
              </ListItemIcon> */}
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
