import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    color: theme.palette.white,
    background: theme.palette.primary.main,
    marginTop: "60px",
  },
  listItem: {
    borderRight: "3px solid red",
  },
}));
