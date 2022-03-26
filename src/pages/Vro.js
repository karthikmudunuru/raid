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






const Vro= () =>{
    
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
            
                <MyTextField label="vRops Manager Ova Path " id="vrops_binary_path"  />
                <MyTextField label="vRops Manager Ip address" id="vrops_master_ip"  />
                <MyTextField label="vRops Replica Ip address" id="vrops_replica_ip"  />
                <MyTextField label="vRops Data Ip address" id="vrops_data_ip"  />
                <MyTextField label="vRops Master Node VM name" id="vrops_master_vm_name"  />
                <MyTextField label="vRops Replica Node VM name" id="vrops_replica_vm_name"  />
                <MyTextField label="vRops Data Node VM name" id="vrops_data_vm_name"  />
                <MyTextField label="vRops Node Gateway Address" id="vrops_gateway_addr"  />
                <MyTextField label="vRops Node Subnet Mask" id="vrops_subnet_mask" />
                <MyTextField label="vRops Node Username" id="vrops_username" />
                <Password label="vRops Manager Admin Password" id="vrops_admin_password" />
                <MyTextField label="vRops License Key" id="vrops_license_key"  />
                

                <input type="submit"  style={submitStyle} />


        
            </form>
            </FormProvider>
        </div>
    )
};

export default Vro;