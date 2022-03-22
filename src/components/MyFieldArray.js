import React from 'react';
import MyTextField from './MyTextField';


// {errors[id] && errors[id]?.message && <span>{errors[id].message}</span>}

const MyFieldArray = ({id, label, count}) =>{ 

  var fields=[];
  for(let i=1;i<=count;i++){
      fields.push(i)
  }

return (
    
    <div className='my-control-group'>
       {fields.map((item) => (
        <MyTextField key={`${id}${item}`} label={`${label}${item}`} id={`${id}${item}`} />
        ))}
    </div>

);
};

export default MyFieldArray  ;