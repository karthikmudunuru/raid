import React from 'react';
import { useFormContext, Controller } from "react-hook-form";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { labelStyle } from '../store/constants';




const MyRadio = ({id, label,options}) =>{ 
  
    const { control,  formState :{errors}} = useFormContext();
    

  const buttons =  options.map(item=> (
    <FormControlLabel value={item.value} control={<Radio />} label={
        <span style={labelStyle}> 
        {item.text}
        </span>
        } />
  ))


return (
    
   
      <Controller
        name={id}
        control={control}
        render={({ field}) => (
            <FormControl>
                <FormLabel id={`form_${label}`}>
                    <span style={labelStyle}> 
                    {label}
                    </span>
                    </FormLabel>
                <RadioGroup row aria-labelledby={`form_row_aria_${label}`} {...field}>
                {buttons}
                </RadioGroup>
        
        
            </FormControl>
            
            )}
       />
   

);
};

export default MyRadio;