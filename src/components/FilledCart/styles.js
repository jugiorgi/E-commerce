import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cardDetails: {
    display: "flex",
    margin: "50px auto",
    width: "100%",
    justifyContent: "space-between",
  },
  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
}));
