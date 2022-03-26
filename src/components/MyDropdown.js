import React from 'react';
import { useFormContext, Controller } from "react-hook-form";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


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
          <div>
          <Select 
          {...field}
          label={label}
          labelId={`${label}${id}`}
          margin="dense"
          sx={{
                bgcolor: 'white',
                boxShadow: 1,
                borderRadius: 2,
                minWidth: 300,
                margin: "8px",
                padding:"4px" 
              }} 
        
        >
          {menuItems}
        </Select>
        <br/>
        </div>
        }
      />
    </div>

);
};

export default MyDropdown;