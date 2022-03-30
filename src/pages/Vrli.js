import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm, FormProvider  } from "react-hook-form";
import MyTextField from '../components/MyTextField';
import Password from '../components/Password';
import { infraActions } from '../store/infra';
import { submitStyle,mainStyle} from '../store/constants';
import { yupResolver } from '@hookform/resolvers/yup';
import {vrli_schema} from '../store/schemas';



var vrli_map;
var dispatch_vrli = {};


const Vrli= () =>{
    
    
    
    const dispatch = useDispatch();
    const methods = useForm({
        resolver: yupResolver(vrli_schema),
        defaultValues: 
        {
            vrli_binary_path:'',
            vrli_ip_addr:'',
            vrli_vip_addr:'',
            vrli_host_name:'',
            vrli_appliance_name:'',
            vrli_virtual_fqdn:'',
            vrli_gateway_addr:'',
            vrli_subnet_mask:'',
            vrli_root_password:'',
            vrli_username:'',
            vrli_email:'',
            vrli_content_path:'',

           
        }
        });
    

   
    


    const onSubmit = data => {
        
       
        vrli_map = new Map(Object.entries(data));
        
        dispatch_vrli["LogInsightNodeOVAPath"]= vrli_map.get("vrli_binary_path");
        dispatch_vrli["LogInsightMNodeIpAddress"]= vrli_map.get("vrli_ip_addr");
        dispatch_vrli["LogInsightVIPAddress"]= vrli_map.get("vrli_vip_addr");
        dispatch_vrli["LogInsightMNodeDomainName"]= vrli_map.get("vrli_host_name");
        dispatch_vrli["LogInsightMNodeVMName"]= vrli_map.get("vrli_appliance_name");
        dispatch_vrli["LogInsightVIPFQDN"]= vrli_map.get("vrli_virtual_fqdn");
        dispatch_vrli["LogInsightNodeGateWay"]= vrli_map.get("vrli_gateway_addr");
        dispatch_vrli["LogInsightNodeNetMask"]= vrli_map.get("vrli_subnet_mask");
        dispatch_vrli["LogInsightNodeRootPassword"]= vrli_map.get("vrli_root_password");
        dispatch_vrli["LogInsightUserName"]= vrli_map.get("vrli_username");
        dispatch_vrli["LogInsightemailid"]= vrli_map.get("vrli_email");
        dispatch_vrli["ContentPackLocation"]= vrli_map.get("vrli_content_path");


        dispatch(infraActions.setConfig(dispatch_vrli));


    }
    
    
    
    return (
    
       
        <FormProvider {...methods}>
        <form style={mainStyle} onSubmit={methods.handleSubmit(onSubmit)}>
                <br/><br/>
                <MyTextField label="Log Insight Ova Path " id="vrli_binary_path"  required />
                <MyTextField label="Log Insight Ip address" id="vrli_ip_addr"  required />
                <MyTextField label="Log Insight Virtual Ip address" id="vrli_vip_addr" required  />
                <MyTextField label="Log Insight Host name" id="vrli_host_name"  required />
                <MyTextField label="Log Insight Applicance Name" id="vrli_appliance_name"   required />
                <MyTextField label="Log Insight Virtual FQDN" id="vrli_virtual_fqdn"   required />
                <MyTextField label="Log Insight Gateway Address" id="vrli_gateway_addr"  required />
                <MyTextField label="Log Insight Subnet Mask" id="vrli_subnet_mask" required />
                <Password label="Log Insight Root Password" id="vrli_root_password" required />
                <MyTextField label="Log Insight User Name" id="vrli_username"  required />
                <MyTextField label="Log Insight Email" id="vrli_email"  />
                <MyTextField label="Log Insight Content Path Location" id="vrli_content_path" />

                <input type="submit"  style={submitStyle} />


        
        </form>
        </FormProvider>
        
    )
};

export default Vrli;