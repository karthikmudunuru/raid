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
            vcd_binary_path: '',
            vcd_appliance_name: '',
            vcd_ip_addr: '',
            vcd_gateway_addr: '',
            vcd_subnet_mask: '',
            vcd_prefix: '',
            vcd_root_password: '',
            vcd_admin_username: '',
            vcd_admin_fullname: '',
            vcd_admin_password: '',
            vcd_admin_email: '',
            vcd_system_name: '',
            vcd_install_id: '',
        }
    
    
    });
  

   
    
 

    const onSubmit = data => {
        
       
    vcd_map = new Map(Object.entries(data));
        
    dispatch_vcd["vCDOVAPath"] = vcd_map.get("vcd_binary_path");
    dispatch_vcd["VCDVMName"] = vcd_map.get("vcd_appliance_name");
    dispatch_vcd["VCDVIP"] = vcd_map.get("vcd_ip_addr");
    dispatch_vcd["VCDGateway"] = vcd_map.get("vcd_gateway_addr");
    dispatch_vcd["VCDNetMask"] = vcd_map.get("vcd_subnet_mask");
    dispatch_vcd["VCDVIPPrefix"] = vcd_map.get("vcd_prefix");
    dispatch_vcd["vCDTRootPassword"] = vcd_map.get("vcd_root_password");
    dispatch_vcd["VCDAdminUserName"] = vcd_map.get("vcd_admin_username");
    dispatch_vcd["VCDAdminFullname"] = vcd_map.get("vcd_admin_fullname");
    dispatch_vcd["VCDAdminPassword"] = vcd_map.get("vcd_admin_password");
    dispatch_vcd["VCDAdminEmail"] = vcd_map.get("vcd_admin_email");
    dispatch_vcd["VCDSysName"] = vcd_map.get("vcd_system_name");
    dispatch_vcd["VCDInstallID"] = vcd_map.get("vcd_install_id");
       
        
      dispatch(infraActions.setConfig(dispatch_vcd))


    }
    
    
    return (
    
        <FormProvider {...methods}>
        <form style={mainStyle} onSubmit={methods.handleSubmit(onSubmit)}>
            
            <br/><br/>
            
            <MyTextField label="VCD Binary Path" id="vcd_binary_path"  required />
            <MyTextField label="VCD Applicance Name" id="vcd_appliance_name" required />
            <MyTextField label="VCD VIP Address" id="vcd_ip_addr" required />
            <MyTextField label="VCD Gateway Address" id="vcd_gateway_addr" required />
            <MyTextField label="VCD Subnet Mask" id="vcd_subnet_mask" required />
            <MyTextField label="VCD Network Prefix" id="vcd_prefix"  />
            <Password label="VCD Root Password" id="vcd_root_password" required />
            <MyTextField label="VCD Admin Username" id="vcd_admin_username"  required />
            <MyTextField label="VCD Admin Full name" id="vcd_admin_fullname"  />
            <Password label="VCD Admin Password" id="vcd_admin_password" required />
            <MyTextField label="VCD Admin Email" id="vcd_admin_email"  />
            <MyTextField label="VCD System name" id="vcd_system_name"  />
            <MyTextField label="VCD Install ID" id="vcd_install_id"  />
            <input type="submit"  style={submitStyle} />

        
        </form>
        </FormProvider>
      
    )
};

export default Vcd;