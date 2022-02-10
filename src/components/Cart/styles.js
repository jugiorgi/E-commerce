import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: { width: "85%" },
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "5%",
  },
  link: {
    textDecoration: "none",
  },
}));
