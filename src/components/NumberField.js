import React from 'react';
import { useFormContext, Controller} from "react-hook-form";
import TextField from '@mui/material/TextField';



const NumberField =  ({id, label}) =>{ 
  const { control,  formState :{errors}} = useFormContext();
 
 
 
 

  return (
    
    <div className='my-control-group'>
      <Controller
        name={id}
        control={control}
      
        render={({ field}) => (
    
            <TextField
             {...field}
              label={label}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              error={!!errors[id]}
              variant="standard" 
              helperText={errors[id] ? errors[id]?.message : ''}
              margin="dense"
              sx={{
                bgcolor: 'white',
                boxShadow: 1,
                borderRadius: 2,
                minWidth: 300,
                margin: "8px",
                padding:"4px" 
              }}
             /> 
           
    
           
          )}
       />
    </div>

);
};

export default NumberField;