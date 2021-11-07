import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


export default class InputAdornments extends Component {

  constructor(props) {
    super(props);
    this.state={
      password: '',
      showPassword: false,
    }
  }

  passwordChanged=(e)=>{
    this.setState({
      password:e.target.value
    },()=>this.props.getStateOfPassword(this.state.password))
  }

  ShowPasswordClicked = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  render(){
    return (
      <div className='w-100'>
          <label className="label-password w-100" data-shrink="true">Password</label>
          <br/>
          <FormControl className='w-100'>
              <Input
                  label="Password"
                  id="standard-adornment-password"
                  type={this.state.showPassword ? 'text' : 'password'}
                  value={this.state.password}
                  onChange={this.passwordChanged}
                  endAdornment={
                      <InputAdornment position="end">
                          <IconButton
                              aria-label="toggle password visibility"
                              onClick={this.ShowPasswordClicked}
                              onMouseDown={this.handleMouseDownPassword}
                          >
                              {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                      </InputAdornment>
                  }
              />
          </FormControl>
      </div>
    );
  }
  
}
