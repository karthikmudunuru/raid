import React, {useEffect} from 'react';
import TextField from '@mui/material/TextField';
import { useFormContext, Controller,useFieldArray} from "react-hook-form";


const ipv4format = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

const MyFieldArray = ({label, count,array_name}) =>{ 

  const { control,  formState :{errors}, watch} = useFormContext();
 
  const { fields, append, update,replace} = useFieldArray({control,name: array_name});
  /*const watchFieldArray = watch(array_name);
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index]
    };
  });*/


  //const watching =  useWatch({name:array_name,control})


  var values=[]
  for(let i=0;i<count;i++){
      const element_id = array_name + "_" + i;
      const element_label = label + " " + (i+1); 
      values.push({n:element_id,l:element_label,value:''})
  }

  console.log("field array values is ", values);
  console.log("fields is ", fields);
  //console.log("controlled fields is", controlledFields);
  //console.log("watching is",watching);

  useEffect(()=>{

        for(let i=0;i<values.length;i++){
          update(i,values[i])
        }

    },[count]);
 
    console.log("errors is", errors);

  // <MyTextField key={`${id}${item}`} label={`${label}${item}`} id={`${id}${item}`} />
  //label={`${array_name}.${index}.label`}
// {errors[item.name]?.type === 'required' && <p> This field is required </p>}
//rules={{required :true, pattern: ipv4format}}
/*
<TextField
             {...field}
              key={field.id}
              label={item.l}
              error={!!errors[array_name]?.[index]}
              variant="outlined" 
              helperText={errors[array_name]?.[index] ? errors[array_name]?.[index]?.message : ''}
              margin="dense"
              sx={{
                bgcolor: 'white',
                boxShadow: 1,
                borderRadius: 2,
                minWidth: 300
              }}
              /> 
              <br/>
  */

    const handleChange = (index,event) =>{
      const element_id = array_name + "_" + index;
      const element_label = label + " " + (index+1);
      const value= event.target.value;
      update(index,{n:element_id,l:element_label,value:value}) 

    }

return (
    
    <div className='my-control-group'>
       {fields.map((item,index) => (
       
        <Controller
        name={item.n}
        control={control}
        key={item.id}
        render={({ field}) => (
            <div>
              <TextField
                {...field}
                key={item.id}
                label={item.l}
                error={!!errors[array_name]?.[index]}
                variant="outlined" 
                helperText={errors[array_name]?.[index] ? errors[array_name]?.[index]?.message : ''}
                margin="dense"
                sx={{
                  bgcolor: 'white',
                  boxShadow: 1,
                  borderRadius: 2,
                  minWidth: 300
                }}
                value={field.value|| ''}
               
               
                
                /> 
             
             
            </div>
             
           
          )}
       />
        
        
        ))}
    </div>

);
};

export default MyFieldArray  ;