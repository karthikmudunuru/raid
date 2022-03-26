import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useForm, FormProvider  } from "react-hook-form";
import MyTextField from '../components/MyTextField';
import MyDropdown from '../components/MyDropdown';
import Password from '../components/Password';
import { infraActions } from '../store/infra';
import { myTextAreaStyle, submitStyle } from '../store/constants';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";






const Vrli= () =>{
    
    const methods = useForm();
    const dispatch = useDispatch();

   
    
    useEffect(()=>{

        return () => {
           

        }
    },[]);


    const onSubmit = data => console.log(data);
    
    
    return (
    
        <div style={myTextAreaStyle}>
            <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
            
                <MyTextField label="Log Insight Ova Path " id="vrli_binary_path"  />
                <MyTextField label="Log Insight Ip address" id="vrli_ip_addr"  />
                <MyTextField label="Log Insight Virtual Ip address" id="vrli_vip_addr"  />
                <MyTextField label="Log Insight Host name" id="vrli_host_name"  />
                <MyTextField label="Log Insight Applicance Name" id="vrli_appliance_name"  />
                <MyTextField label="Log Insight Virtual FQDN" id="vrli_virtual_fqdn"  />
                <MyTextField label="Log Insight Gateway Address" id="vrli_gateway_addr"  />
                <MyTextField label="Log Insight Subnet Mask" id="vrli_subnet_mask" />
                <Password label="Log Insight Root Password" id="vrli_root_password" />
                <MyTextField label="Log Insight User Name" id="vrli_username"  />
                <MyTextField label="Log Insight Email" id="vrli_email"  />
                <MyTextField label="Log Insight Content Path Location" id="vrli_content_path" />

                <input type="submit"  style={submitStyle} />


        
            </form>
            </FormProvider>
        </div>
    )
};

export default Vrli;