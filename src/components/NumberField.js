import React, {useImperativeHandle, useRef, useEffect} from 'react';
import useInput from '../hooks/use-input';
import Ipv4Field from './Ipv4Field';

 
const isNotEmpty = (value) => value.toString().trim !=='' ? true : false;
var fields=[];
const NumberField = (props) =>{
    const { value, isValid, hasError, valueChangeHandler, inputBlurHandler,reset,setValue} = useInput(isNotEmpty);

   /* useImperativeHandle(ref, () => {
        return {
          value:value,
          isValid:isValid,
          hasError:hasError,
          valueChangeHandler:valueChangeHandler,
          inputBlurHandler:inputBlurHandler,
          reset:reset,
          setValue:setValue
        };
      })*/
   
  useEffect(() => {
        
      if(isValid){
            for (let i = 1; i <=value; i++) {
              const item_id = props.generate_id+ i;
              const item_label= props.generate_label + " " + i;
              let tag= <Ipv4Field id={item_id} key={item_id} label={item_label} />;
              console.log("Fields is " + tag);
              fields.push(tag);
            }
          }
    },[value,isValid]);
  
  const inputClasses = hasError ? 'my-form-control invalid' : 'my-form-control';

  return (
    
    <div className='my-control-group'>
        <div className={inputClasses}>
          <label htmlFor={props.id}>{props.label}</label>
          <input
            type='number'
            id={props.id}
            value={value}
            onChange={valueChangeHandler}
            onBlur={inputBlurHandler}
            min='0'
          />
          {!hasError && isValid && fields}
      </div>
    </div>

);
};

export default NumberField;