import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";


export default class InputAdornments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: "",
      token: "",
    };
  }

  TextFieldMobileChanged = e => {
    let code = this.props.code;
    this.setState(
      {
        mobileNumber: code + e.target.value,
      },
      () => this.props.getStateOfMobileNumber(this.state.mobileNumber)
    );
  };

  render() {
    return (
      <Box>
        <div className="">
          <TextField
            label="Mobile"
            onChange={this.TextFieldMobileChanged}
            id="standard-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  +{this.props.code}
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </div>
      </Box>
    );
  }
}
