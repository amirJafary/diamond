import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import iran from '../Assets/Images/iran.png';
import UAE from '../Assets/Images/UAE.png';
import qatar from '../Assets/Images/qatar.png';
import '../Assets/Scss/SignInAndSignUp.css'


export default class SelectVariants extends React.Component {
   
    constructor(props) {
        super(props);
        this.state={
            code:'98',
            countries:[
                {name:'Iran' , code:'98' ,flag:iran} ,
                {name:'Qatar' , code:'971' ,flag:qatar} ,
                {name:'UAE' , code:'974' ,flag:UAE} ,
            ]
        }
    }

    countriesClicked = (event) => {
        this.setState({
            code:event.target.value
        },()=>this.props.getSateOfCountries(this.state.code));
    };

    ItemClicked=(code)=>{
        this.setState({
            code:code
        })
    }

    render(){
        return (
            <div>
                <FormControl className='' variant="standard" >
                    <Select
                        className='me-1'
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={this.state.code}
                        onChange={this.countriesClicked}
                        label="Age"
                    >
                        {this.state.countries.map(country=>
                            <MenuItem onClick={()=>this.ItemClicked(country.code)} value={country.code} name={country.name}><img className='mb-1' alt='country' src={country.flag}></img></MenuItem>
                        )}
                    </Select>
                </FormControl>
            </div>
        );
    }
  
}
