import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm, FormProvider  } from "react-hook-form";
import MyTextField from '../components/MyTextField';
import Password from '../components/Password';
import { infraActions } from '../store/infra';
import { submitStyle,mainStyle } from '../store/constants'
import { yupResolver } from '@hookform/resolvers/yup';
import {vcd_schema} from '../store/schemas';


var vcd_map;
var dispatch_vcd = {};




const Vcd= () =>{
    
    const dispatch = useDispatch();
    const methods = useForm({
        resolver: yupResolver(vcd_schema),
        defaultValues:
        {
          
         

        }
    
    
    });
  

   
    
 

    const onSubmit = data => {
        
       
    vcd_map = new Map(Object.entries(data));
        
     
       
        
      dispatch(infraActions.setConfig(dispatch_vcd))


    }
    
    
    return (
    
        <FormProvider {...methods}>
        <form style={mainStyle} onSubmit={methods.handleSubmit(onSubmit)}>
            
            <br/><br/>
            
            <MyTextField label="VCD Binary Path" id="vcd_binary_path"  />
            <MyTextField label="VCD Applicance Name" id="vcd_appliance_name"  />
            <MyTextField label="VCD VIP Address" id="vcd_ip_addr" />
            <MyTextField label="VCD Gateway Address" id="vcd_gateway_addr" />
            <MyTextField label="VCD Subnet Mask" id="vcd_subnet_mask" />
            <MyTextField label="VCD Network Prefix" id="vcd_prefix"  />
            <Password label="VCD Root Password" id="vcd_root_password" />
            <MyTextField label="VCD Admin Username" id="vcd_admin_username"  />
            <MyTextField label="VCD Admin Full name" id="vcd_admin_fullname"  />
            <Password label="VCD Admin Password" id="vcd_admin_password" />
            <MyTextField label="VCD Admin Email" id="vcd_admin_email"  />
            <MyTextField label="VCD System name" id="vcd_system_name"  />
            <MyTextField label="VCD Install ID" id="vcd_install_id"  />
            <input type="submit"  style={submitStyle} />

        
        </form>
        </FormProvider>
      
    )
};

export default Vcd;