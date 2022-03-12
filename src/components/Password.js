import React, {useImperativeHandle} from 'react';
import useInput from '../hooks/use-input';


 
const isNotEmpty = (value) => value.trim() !== '';

const Password=  React.forwardRef((props, ref) =>{
    const { value, isValid, hasError, valueChangeHandler, inputBlurHandler, reset} = useInput(isNotEmpty);
    
    useImperativeHandle(ref, () => {
      return {
        value:value,
        isValid:isValid,
        hasError:hasError,
        valueChangeHandler:valueChangeHandler,
        inputBlurHandler:inputBlurHandler,
        reset:reset
      };
    });
    const inputClasses = hasError ? 'my-form-control invalid' : 'my-form-control';
    
    if (isValid){
      props.getValue({'id':props.id, 'value':value})
    }
return (
    
    <div className='my-control-group'>
        <div className={inputClasses}>
          <label htmlFor={props.id}>{props.label}</label>
          <input
            type='password'
            id={props.id}
            value={value}
            onChange={valueChangeHandler}
            onBlur={inputBlurHandler}
          />
          {hasError && <p className="error-text"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please enter a valid {props.label}</p>}
        </div>
    </div>

);
});

export default Password;