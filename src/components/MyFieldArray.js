import React, {useEffect} from 'react';
import TextField from '@mui/material/TextField';
import { useFormContext, Controller,useFieldArray} from "react-hook-form";
import {ipv4format} from '../store/constants';


//const ipv4format = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

const MyFieldArray = ({label, count,array_name}) => { 

  const { control,  formState :{errors}, watch, setValue} = useFormContext();
 
  const { fields, update,replace} = useFieldArray({control,name: array_name});


  var values=[]
  for(let i=0;i<count;i++){
      const element_id = array_name + "_" + i;
      const element_label = label + " " + (i+1); 
      values.push({n:element_id,l:element_label,value:''})
  }

  //console.log("field array values is ", values);
  //console.log("fields is ", fields);


  useEffect(()=>{
        
        replace(values)
    },[count]);
 
   // console.log("errors is", errors);



  const handleBlur = (index,event) =>{
    const value= event.target.value;
    if(index==0){
        if(value.match(ipv4format)){
          const pole = value.lastIndexOf(".");
          const last = parseInt(value.slice(pole+1)); 
          console.log("first ipv4 field is ",last);
          values[0].value=value;
          const prefix= value.slice(0,pole);
          for(let i=1;i<count;i++){
            const val = last + i;
            const ip = prefix + "." + val;
            const name= array_name + "_" + i;
            console.log("name and value is ", name,ip);
            setValue(name,ip);
          }
          //console.log("Values is",values);
          //replace(values);
        }
      }
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
                value={field.value || ""}
                onBlur={(event) => handleBlur(index,event)}
               /> 
             
             
            </div>
             
           
          )}
       />
        
        
        ))}
    </div>

);
};

export default MyFieldArray  ;

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
   /*const watchFieldArray = watch(array_name);
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index]
    };
  });*/


  //const watching =  useWatch({name:array_name,control})
   //console.log("controlled fields is", controlledFields);
  //console.log("watching is",watching);

    /*  const handleChange = (index,event) =>{
      const element_id = array_name + "_" + index;
      const element_label = label + " " + (index+1);
      const value= event.target.value;
      update(index,{n:element_id,l:element_label,value:value}) 
      }*/
