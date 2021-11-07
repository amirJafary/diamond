/* eslint-disable no-use-before-define */

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import iran from '../Assets/Images/iran.png';
import UAE from '../Assets/Images/UAE.png';
import qatar from '../Assets/Images/qatar.png';
import '../Assets/Scss/SignInAndSignUp.css'
            
export default class CountrySelect extends React.Component {

    render(){

        const countries=[
            { code: 'AE', label: 'United Arab Emirates', phone: '971' , flag:{UAE} },
            { code: 'IR', label: 'Iran, Islamic Republic of', phone: '98' , flag:{iran} },
            { code: 'QA', label: 'Qatar', phone: '974' , flag:{qatar} },
        ];

        return (
            <Autocomplete
                id="country-select-demo"
                options={countries}
                autoHighlight
                getOptionLabel={(option) => option.code}
                renderOption={(props, option) => (
                <Box component="li" className='p-1' {...props}>
                    <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                    />
                       ({option.code}) +{option.phone}
                </Box>
                )}
                renderInput={(params) => (
                <TextField
                    {...params}
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                    }}
                />
                )}
            />
        );
    }
}


            
