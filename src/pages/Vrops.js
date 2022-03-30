import React, {useState}  from 'react';
import { useDispatch } from 'react-redux';
import { useForm, FormProvider  } from "react-hook-form";
import MyTextField from '../components/MyTextField';
import NumberField from '../components/NumberField';
import MyFieldArray  from '../components/MyFieldArray';
import Password from '../components/Password';
import { infraActions } from '../store/infra';
import { submitStyle,mainStyle} from '../store/constants';
import { yupResolver } from '@hookform/resolvers/yup';
import {vrops_schema} from '../store/schemas';


var vrops_map;
var dispatch_vrops = {};

const arrayMapper = (array_id,array_label) =>{

    const vals = vrops_map.get(array_id);

    for(let i=0;i<vals.length;i++){
      const e_label = array_label + (i+1);
      dispatch_vrops[e_label]=vals[i];
    }

}


const Vrops= () =>{
    
    const [showdata,setShowdata] = useState(false);

    const dispatch = useDispatch();
    const methods = useForm({
        resolver: yupResolver(vrops_schema),
        defaultValues: 
        {
          
            vrops_binary_path : '',
            vrops_master_ip : '',
            vrops_replica_ip : '',
            vrops_data_count : 0,
            vrops_master_vm_name : '',
            vrops_replica_vm_name : '',
            vrops_data_vm_name : '',
            vrops_gateway_addr : '',
            vrops_subnet_mask : '',
            vrops_username : '',
            vrops_admin_password : '',
            vrops_license_key : '',
            vrops_data_array:[]
        }
        });
    

        const data_count = methods.watch("vrops_data_count",0) 
        if (parseInt(data_count)>0 && !showdata){
          setShowdata(true);
         
        }
    
  

        const onSubmit = data => {
        
       
            vrops_map = new Map(Object.entries(data));
            
            dispatch_vrops["vRopsOVAPath"] = vrops_map.get("vrops_binary_path");
            dispatch_vrops["vRopsMasterNodeIp"] = vrops_map.get("vrops_master_ip");
            dispatch_vrops["vRopsReplicaNodeIp"] = vrops_map.get("vrops_replica_ip");
            //dispatch_vrops[""] = vrops_map.get("vrops_data_count");
            dispatch_vrops["vRopsMasterNodeVMName"] = vrops_map.get("vrops_master_vm_name");
            dispatch_vrops["vRopsReplicaNodeVMName"] = vrops_map.get("vrops_replica_vm_name");
            dispatch_vrops["vRopsDataNodeVMName"] = vrops_map.get("vrops_data_vm_name");
            dispatch_vrops["vRopsNodeGateway"] = vrops_map.get("vrops_gateway_addr");
            dispatch_vrops["vRopsNodeNetmask"] = vrops_map.get("vrops_subnet_mask");
            dispatch_vrops["vRopsNodeUserName"] = vrops_map.get("vrops_username");
            dispatch_vrops["vRopsNodeAdminPassword"] = vrops_map.get("vrops_admin_password");
            dispatch_vrops["vRopsLicenseKey"] = vrops_map.get("vrops_license_key");
            arrayMapper("vrops_data_array","vRopsDataNodeIp");
            
            dispatch(infraActions.setConfig(dispatch_vrops));
    
    
        }
        
    
    
    return (
    
        <FormProvider {...methods}>
        <form style={mainStyle} onSubmit={methods.handleSubmit(onSubmit)}>
                <br/><br/>
            
                <MyTextField label="vRops Manager Ova Path " id="vrops_binary_path" required />
                <MyTextField label="vRops Manager Ip address" id="vrops_master_ip" required />
                <MyTextField label="vRops Replica Ip address" id="vrops_replica_ip"  />
                <NumberField  label= " Number of Data Nodes" id="vrops_data_count" />
                {showdata && <MyFieldArray count={parseInt(data_count)}  label="vROPS Data Node IP"   array_name="vrops_data_array" />}
        
                <MyTextField label="vRops Master Node VM name" id="vrops_master_vm_name" required />
                <MyTextField label="vRops Replica Node VM name" id="vrops_replica_vm_name"  />
                <MyTextField label="vRops Data Node VM name" id="vrops_data_vm_name"  />
                <MyTextField label="vRops Node Gateway Address" id="vrops_gateway_addr" required />
                <MyTextField label="vRops Node Subnet Mask" id="vrops_subnet_mask" required />
                <MyTextField label="vRops Node Username" id="vrops_username" required />
                <Password label="vRops Manager Admin Password" id="vrops_admin_password" required />
                <MyTextField label="vRops License Key" id="vrops_license_key"  />
                

                <input type="submit"  style={submitStyle} />


        
            </form>
            </FormProvider>
       
    )
};

export default Vrops;