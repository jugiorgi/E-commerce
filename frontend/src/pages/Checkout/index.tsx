import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";
import { useState } from "react";
import AddressForm from "../../components/AddressForm";
import Confirmation from "../../components/Confirmation";
import PaymentForm from "../../components/PaymentForm";
import useStyles from "./styles";

const steps = ["Shipping Address", "Payment Details"];

const Checkout: React.FC = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <>
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === 0 ? (
            <AddressForm />
          ) : activeStep === steps.length ? (
            <Confirmation />
          ) : (
            <PaymentForm />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
