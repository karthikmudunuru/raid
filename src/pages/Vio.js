import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useForm, FormProvider  } from "react-hook-form";
import MyTextField from '../components/MyTextField';
import { infraActions } from '../store/infra';
import { myTextAreaStyle, submitStyle } from '../store/constants';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";






const Vio= () =>{
    
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
            
                <MyTextField label="VIO Ova Path " id="vio_binary_path"  />
                <MyTextField label="VIO Domain name" id="vio_domain_name"  />
                <MyTextField label="VIO VM name" id="vio_vm_name"  />
                <MyTextField label="VIO Management Ip address" id="vio_mgmt_ip"  />
                <MyTextField label="VIO Management Start Ip address" id="vio_start_mgmt_ip"  />
                <MyTextField label="VIO Management End Ip address" id="vio_end_mgmt_ip"  />
                <MyTextField label="VIO Management Gateway Address" id="vio_gateway_addr"  />
                <MyTextField label="VIO Management Subnet Mask" id="vio_subnet_mask" />
                <MyTextField label="VIO Node Username" id="vio_username" />
                <Password label="VIO Manager Admin Password" id="vio_admin_password" />
                <MyTextField label="VIO License Key" id="vio_license_key"  />
                

                <input type="submit"  style={submitStyle} />


        
            </form>
            </FormProvider>
        </div>
    )
};

export default Vio;