import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  container: {
    display: "flex",
    width: "100%",
    margin: "auto",
  },
  content: {
    marginLeft: "200px",
    margin: "30px auto",
    width: "85%",
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));
