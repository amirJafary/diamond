import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import '../Assets/Scss/general.scss'


export default class AutoCompletePrintedSides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsOfPrintedSides: [
        { title: "Just Front", id: 1 },
        { title: "Back & Front", id: 2 },
      ],
      PrintedSides: "",
      IdOfPrintedSides: null,
    };
  }

  changeHandlerInputPrintedSides = e => {
    let valueOfPrintedSides = e.target.innerText;
    let filter = this.state.optionsOfPrintedSides.filter(
      item => item.title === valueOfPrintedSides
    );
    this.setState(
      {
        PrintedSides: e.target.innerText,
        IdOfPrintedSides: filter[0]?.id,
      },
      () =>
        this.props.getStatePrintedSides(
          this.state.PrintedSides,
          this.state.IdOfPrintedSides
        )
    );
    // console.info('this is value of filter ' , filter[0]?.id)
    // ,()=>this.props.getStateOfPrintedSides(this.state.PrintedSides , this.state.IdOfPrintedSides)
  };

  render() {
    let defaultProps = {
      options: this.state.optionsOfPrintedSides,
      getOptionLabel: option => option.title,
    };

    return (
      <Autocomplete
        style={{ marginTop: "-20px" }}
        {...defaultProps}
        id="disable-close-on-select"
        onChange={e => this.changeHandlerInputPrintedSides(e)}
        disableCloseOnSelect
        renderInput={params => (
          <TextField {...params} label="Printed Sides" variant="standard" />
        )}
      />
    );
  }
}
