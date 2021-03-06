import React from 'react';
import { useFormContext, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';


// {errors[id] && errors[id]?.message && <span>{errors[id].message}</span>}

const MyTextField = (props) =>{ 
  
  const { control,  formState :{errors}} = useFormContext();
  const {id,label} = props;

  if (props.required){
        
          return (
          
            <div className='my-control-group'>
              <Controller
                name={id}
                control={control}
              
                render={({ field}) => (
                
                    <TextField
                    {...field}
                      required
                      label={label}
                      error={!!errors[id]}
                      variant="outlined" 
                      helperText={errors[id] ? errors[id]?.message : ''}
                      margin="dense"
                      sx={{
                        bgcolor: 'white',
                        boxShadow: 1,
                        borderRadius: 2,
                        minWidth: 300,
                    
                      }}
                      
                      /> 
                  
                      
                  
                  )}
              />
            </div>
        
          );
  }
 
  return (
    
    <div className='my-control-group'>
      <Controller
        name={id}
        control={control}
      
        render={({ field}) => (
         
            <TextField
             {...field}
              label={label}
              error={!!errors[id]}
              variant="outlined" 
              helperText={errors[id] ? errors[id]?.message : ''}
              margin="dense"
              sx={{
                bgcolor: 'white',
                boxShadow: 1,
                borderRadius: 2,
                minWidth: 300,
            
              }}
              
              /> 
           
              
          
          )}
       />
    </div>

);
};

export default MyTextField ;