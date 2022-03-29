import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm, FormProvider  } from "react-hook-form";
import MyTextField from '../components/MyTextField';
import Password from '../components/Password';
import { infraActions } from '../store/infra';
import { submitStyle,mainStyle } from '../store/constants'
import { yupResolver } from '@hookform/resolvers/yup';
import {vio_schema} from '../store/schemas';


var vio_map;
var dispatch_vio = {};




const Vio= () =>{
    
    const dispatch = useDispatch();
    const methods = useForm({
        resolver: yupResolver(vio_schema),
        defaultValues:
        {
            vio_binary_path : '',
            vio_domain_name : '',
            vio_vm_name : '',
            vio_mgmt_ip : '',
            vio_start_mgmt_ip : '',
            vio_end_mgmt_ip : '',
            vio_gateway_addr : '',
            vio_subnet_mask : '',
            vio_username : '',
            vio_user_password : '',
         

        }
    
    
    });
  

   
    
 

    const onSubmit = data => {
        
       
        vio_map = new Map(Object.entries(data));
        
       dispatch_vio["VIOOVAPath"] = vio_map.get("vio_binary_path");
       dispatch_vio["VIODomainName"] = vio_map.get("vio_domain_name");
       dispatch_vio["VIOVMName"] = vio_map.get("vio_vm_name");
       dispatch_vio["VIOManagementIp"] = vio_map.get("vio_mgmt_ip");
       dispatch_vio["VIOMgmtNetworkStartIP"] = vio_map.get("vio_start_mgmt_ip");
       dispatch_vio["VIOMgmtNetworkEndIP"] = vio_map.get("vio_end_mgmt_ip");
       dispatch_vio["VIOGateway"] = vio_map.get("vio_gateway_addr");
       dispatch_vio["VIONetmask"] = vio_map.get("vio_subnet_mask");
       dispatch_vio["VIOUserName"] = vio_map.get("vio_username");
       dispatch_vio["VIOUserPassword"] = vio_map.get("vio_user_password");
       
        
      dispatch(infraActions.setConfig(dispatch_vio))


    }
    
    
    return (
    
        <FormProvider {...methods}>
        <form style={mainStyle} onSubmit={methods.handleSubmit(onSubmit)}>
                <br/><br/>
            
                <MyTextField label="VIO Ova Path " id="vio_binary_path"  />
                <MyTextField label="VIO Domain name" id="vio_domain_name"  />
                <MyTextField label="VIO VM name" id="vio_vm_name"  />
                <MyTextField label="VIO Management Ip address" id="vio_mgmt_ip"  />
                <MyTextField label="VIO Management Start Ip address" id="vio_start_mgmt_ip"  />
                <MyTextField label="VIO Management End Ip address" id="vio_end_mgmt_ip"  />
                <MyTextField label="VIO Management Gateway Address" id="vio_gateway_addr"  />
                <MyTextField label="VIO Management Subnet Mask" id="vio_subnet_mask" />
                <MyTextField label="VIO Node Username" id="vio_username" />
                <Password label="VIO User Password" id="vio_user_password" />
              
                

                <input type="submit"  style={submitStyle} />


        
            </form>
            </FormProvider>
      
    )
};

export default Vio;