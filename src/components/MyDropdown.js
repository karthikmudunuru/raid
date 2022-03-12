import React, {useImperativeHandle} from 'react';
import useInput from '../hooks/use-input';


 
const isNotEmpty = (value) => value.trim() !== '';

const MyDropdown= React.forwardRef((props, ref) =>{
    const {value, isValid, hasError, valueChangeHandler, inputBlurHandler, reset} = useInput(isNotEmpty);

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

    const Options = props.options.map((data) => <option value={data.value} key={props.id +data.value} > {data.text}  </option>)
    
    if (isValid){
        props.getValue({'id':props.id, 'value':value})
      }

return (
    
    <div className='my-control-group'>
        <div className={inputClasses}>
          <label htmlFor={props.id}>{props.label}</label>
          <select 
          id={props.id} 
          name={props.id} 
          value={value}
          onChange={valueChangeHandler}
          onBlur={inputBlurHandler}
          >
                    {Options}
          </select>
          {hasError && <p className="error-text"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please select a value</p>}
        </div>
    </div>

);
});

export default MyDropdown;