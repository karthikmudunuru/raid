import React, {useState} from 'react';
import { useFormContext, Controller } from "react-hook-form";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';



const Password = ({id, label}) =>{ 
  
  const { control,  formState :{errors}} = useFormContext();
  const [showPassword ,setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(prevstate => !prevstate);
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
 

return (
    
 
  <div className='my-control-group'>
    <Controller
      name={id}
      control={control}
    
      render={({ field}) => (

          <TextField
          {...field}
            type={showPassword ? 'text' : 'password'}
            label={label}
            error={!!errors[id]}
            variant="outlined" 
            helperText={errors[id] ? errors[id]?.message : ''}
            InputProps={{
            endAdornment: 
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            
            </InputAdornment>,
          }}
          /> 
        

        
        )}
    />
  </div>

);
};

export default Password ;