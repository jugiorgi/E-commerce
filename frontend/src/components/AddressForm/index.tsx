import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";

const AddressForm: React.FC = () => {
  return (
    <>
      <ColorPicker
        name="color"
        defaultValue="#000"
        // value={this.state.color} - for controlled component
        onChange={(color) => console.log(color)}
      />
    </>
  );
};

export default AddressForm;
