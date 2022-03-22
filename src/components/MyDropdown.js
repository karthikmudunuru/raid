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
        render={({ field }) => <Select 
          {...field}
          label={label}
          labelId={`${label}${id}`} 
        
        >
          {menuItems}
        </Select>
        
        }
      />
    </div>

);
};

export default MyDropdown;