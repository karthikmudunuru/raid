import React from 'react';
import { useFormContext, Controller } from "react-hook-form";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


const MyDropdown = ({id, label,options}) =>{ 
  const { control,  formState :{errors}} = useFormContext();
 
  const menuItems =  options.map(item=> (
    <MenuItem  key={item.value} value={item.value}>
      {item.text}
    </MenuItem >
  ))

return (
    
    <div className='my-control-group'>
        <Controller
        name={id}
        control={control}
        render={({ field }) => 
        <FormControl sx={{ m: 1, minWidth: 400 }}>
              <InputLabel id={`${label}${id}`}>{label}</InputLabel>
              <Select 
              {...field}
              label={label}
              labelId={`${label}${id}`}
              margin="dense"
              sx={{
                    bgcolor: 'white',
                    boxShadow: 1,
                    borderRadius: 2,
                    minWidth: 400,
                    margin: "8px",
                    padding:"4px" 
                  }} 
            
            >
              {menuItems}
            </Select>
            <br/>
            </FormControl>
        }
      />
    </div>

);
};

export default MyDropdown;