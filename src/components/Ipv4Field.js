import React, {useImperativeHandle} from 'react';
import useInput from '../hooks/use-input';
import './Ipv4Field.css';

const ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const isIpv4 = (value) => value.match(ipformat) ? true : false


const Ipv4Field= React.forwardRef((props, ref) =>{
    const { value, isValid, hasError, valueChangeHandler, inputBlurHandler, reset,setValue} = useInput(isIpv4);

    useImperativeHandle(ref, () => {
      return {
        value:value,
        isValid:isValid,
        hasError:hasError,
        valueChangeHandler:valueChangeHandler,
        inputBlurHandler:inputBlurHandler,
        reset:reset,
        setValue:setValue
      };
    });

    const inputClasses = hasError ? 'my-form-control invalid' : 'my-form-control';
    if (isValid && props.getValue){
      props.getValue({'id':props.id, 'value':value})
    }
return (
    
    <div className='my-control-group'>
        <div className={inputClasses}>
          <label htmlFor={props.id}>{props.label}</label>
          <input
            type='text'
            id={props.id}
            value={value}
            onChange={valueChangeHandler}
            onBlur={inputBlurHandler}
          />
          {hasError && <p className="error-text">&nbsp;&nbsp;&nbsp;  Please enter a valid Ip address</p>}
        </div>
    </div>

);
});

export default Ipv4Field;