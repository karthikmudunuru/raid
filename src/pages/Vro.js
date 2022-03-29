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
import {vro_schema} from '../store/schemas';


var vro_map;
var dispatch_vro = {};

const arrayMapper = (array_id,array_label) =>{

    const vals = vro_map.get(array_id);

    for(let i=0;i<vals.length;i++){
      const e_label = array_label + (i+1);
      dispatch_vro[e_label]=vals[i];
    }

}


const Vro= () =>{
    
    const [showdata,setShowdata] = useState(false);

    const dispatch = useDispatch();
    const methods = useForm({
        resolver: yupResolver(vro_schema),
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
        
       
            vro_map = new Map(Object.entries(data));
            
            dispatch_vro["vRopsOVAPath"] = vro_map.get("vrops_binary_path");
            dispatch_vro["vRopsMasterNodeIp"] = vro_map.get("vrops_master_ip");
            dispatch_vro["vRopsReplicaNodeIp"] = vro_map.get("vrops_replica_ip");
            //dispatch_vro[""] = vro_map.get("vrops_data_count");
            dispatch_vro["vRopsMasterNodeVMName"] = vro_map.get("vrops_master_vm_name");
            dispatch_vro["vRopsReplicaNodeVMName"] = vro_map.get("vrops_replica_vm_name");
            dispatch_vro["vRopsDataNodeVMName"] = vro_map.get("vrops_data_vm_name");
            dispatch_vro["vRopsNodeGateway"] = vro_map.get("vrops_gateway_addr");
            dispatch_vro["vRopsNodeNetmask"] = vro_map.get("vrops_subnet_mask");
            dispatch_vro["vRopsNodeUserName"] = vro_map.get("vrops_username");
            dispatch_vro["vRopsNodeAdminPassword"] = vro_map.get("vrops_admin_password");
            dispatch_vro["vRopsLicenseKey"] = vro_map.get("vrops_license_key");
            arrayMapper("vrops_data_array","vRopsDataNodeIp");
            
            dispatch(infraActions.setConfig(dispatch_vro));
    
    
        }
        
    
    
    return (
    
        <FormProvider {...methods}>
        <form style={mainStyle} onSubmit={methods.handleSubmit(onSubmit)}>
                <br/><br/>
            
                <MyTextField label="vRops Manager Ova Path " id="vrops_binary_path"  />
                <MyTextField label="vRops Manager Ip address" id="vrops_master_ip"  />
                <MyTextField label="vRops Replica Ip address" id="vrops_replica_ip"  />
                <NumberField  label= " Number of Data Nodes" id="vrops_data_count" />
                {showdata && <MyFieldArray count={parseInt(data_count)}  label="vROPS Data Node IP"   array_name="vrops_data_array" />}
        
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
       
    )
};

export default Vro;