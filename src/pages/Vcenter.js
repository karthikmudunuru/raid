import React, {useEffect} from 'react';
import { useForm, FormProvider  } from "react-hook-form";
import MyTextField from '../components/MyTextField';
import Password from '../components/Password';
import { useDispatch } from 'react-redux';
import { infraActions } from '../store/infra';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { myTextAreaStyle,submitStyle } from '../store/constants';

const fetchValueHandler = (data) => {
    const  {id,value} = data
    console.log("This is " + id + " value: " + value)
};



const Vcenter= () =>{
    

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
      
            <MyTextField label="vCenter Binary Path" id="vc_binary_path"  />
            <MyTextField label="Management vCenter Applicance Name" id="mgmt_vc_appliance_name"  />
            <MyTextField label="Management vCenter Host Name" id="mgmt_vc_host_name"  />
            <MyTextField label="Management vCenter IP Address" id="mgmt_vc_ip_addr" />
            <MyTextField label="Management vCenter Gateway Address" id="mgmt_vc_gateway_addr" />
            <MyTextField label="Management vCenter Subnet Mask" id="mgmt_vc_subnet_mask" />
            <Password label="Management vCenter Root Password" id="mgmt_vc_root_password" />
            <Password label="Management vCenter SSO Password" id="mgmt_vc_sso_password" />
            <MyTextField label="Management vCenter SSO Domain" id="mgmt_vc_sso_domain"  />
            <MyTextField label="Management vCenter User Name" id="mgmt_vc_username"  />
            <MyTextField label="Management vCenter Deployment Network Switch" id="mgmt_vc_mgmtvds"  />
            <MyTextField label="Management vCenter Datacenter" id="mgmt_vc_datacenter"  />
            <MyTextField label="Management vCenter Cluster" id="mgmt_vc_cluster"  />
            <MyTextField label="Management vCenter vSAN Datastore " id="mgmt_vc_vsan_name"  />
            <MyTextField label="Management vCenter Infra VDS Name" id="mgmt_vc_infra_vds"  />
            <MyTextField label="Management vCenter Tenant VDS Name" id="mgmt_vc_tenant_vds"  />
            <MyTextField label="Management vCenter vMotion Portgroup Name" id="mgmt_vc_vmotion_pg"  />
            <MyTextField label="Management vCenter vMotion VLAN" id="mgmt_vc_vmotion_vlan"  />
            <MyTextField label="Management vCenter vSAN Portgroup Name" id="mgmt_vc_vsan_pg"  />
            <MyTextField label="Management vCenter vSAN VLAN" id="mgmt_vc_vsan_vlan"  />
            <MyTextField label="Management vCenter Management Portgroup Name" id="mgmt_vc_mgmt_pg"  />
            <MyTextField label="Management vCenter Management VLAN" id="mgmt_vc_mgmt_vlan"  />
            <MyTextField label="Management vCenter Esxi Portgroup Name" id="mgmt_vc_esxi_pg"  />
            <MyTextField label="Management vCenter Esxi VLAN" id="mgmt_vc_esxi_vlan"  />
            <MyTextField label="Management vCenter VCHA Portgroup Name" id="mgmt_vc_vcha_pg"  />
            <MyTextField label="Management vCenter VCHA VLAN" id="mgmt_vc_vcha_vlan"  />
            <MyTextField label="Management vCenter External Network Portgroup Name" id="mgmt_vc_external_pg"  />
            <MyTextField label="Management vCenter External Network VLAN" id="mgmt_vc_external_vlan"  />
            <MyTextField label="Management vCenter Infra Backup Portgroup Name" id="mgmt_vc_infra_pg"  />
            <MyTextField label="Management vCenter Infra Backup VLAN" id="mgmt_vc_infra_vlan"  />
            <MyTextField label="Management vCenter Tenant Backup Portgroup Name" id="mgmt_vc_tenant_pg"  />
            <MyTextField label="Management vCenter Tenant Backup VLAN" id="mgmt_vc_tenant_vlan"  />
           

                

            <MyTextField label="Resource vCenter Applicance Name" id="res_vc_appliance_name"  />
            <MyTextField label="Resource vCenter Host Name" id="res_vc_host_name"  />
            <MyTextField label="Resource vCenter IP Address" id="res_vc_ip_addr" />
            <MyTextField label="Resource vCenter Gateway Address" id="res_vc_gateway_addr" />
            <MyTextField label="Resource vCenter Subnet Mask" id="res_vc_subnet_mask" />
            <Password label="Resource vCenter Root Password" id="res_vc_root_password" />
            <Password label="Resource vCenter SSO Password" id="res_vc_sso_password" />
            <MyTextField label="Resource vCenter SSO Domain" id="res_vc_sso_domain"  />
            <MyTextField label="Resource vCenter User Name" id="res_vc_username"  />
            <MyTextField label="Resource vCenter Deployment Network Switch" id="res_vc_mgmtvds"  />
            <MyTextField label="Resource vCenter Datacenter" id="res_vc_datacenter"  />
            <MyTextField label="Resource vCenter Cluster" id="res_vc_cluster"  />
            <MyTextField label="Resource vCenter vSAN Datastore " id="res_vc_vsan_name"  />
            <MyTextField label="Resource vCenter Infra VDS Name" id="res_vc_infra_vds"  />
            <MyTextField label="Resource vCenter Tenant VDS Name" id="res_vc_tenant_vds"  />
            <MyTextField label="Resource vCenter vMotion Portgroup Name" id="res_vc_vmotion_pg"  />
            <MyTextField label="Resource vCenter vMotion VLAN" id="res_vc_vmotion_vlan"  />
            <MyTextField label="Resource vCenter vSAN Portgroup Name" id="res_vc_vsan_pg"  />
            <MyTextField label="Resource vCenter vSAN VLAN" id="res_vc_vsan_vlan"  />
            <MyTextField label="Resource vCenter Management Portgroup Name" id="res_vc_mgmt_pg"  />
            <MyTextField label="Resource vCenter Management VLAN" id="res_vc_mgmt_vlan"  />
            <MyTextField label="Resource vCenter Esxi Portgroup Name" id="res_vc_esxi_pg"  />
            <MyTextField label="Resource vCenter Esxi VLAN" id="res_vc_esxi_vlan"  />
            <MyTextField label="Resource vCenter VCHA Portgroup Name" id="res_vc_vcha_pg"  />
            <MyTextField label="Resource vCenter VCHA VLAN" id="res_vc_vcha_vlan"  />
            <MyTextField label="Resource vCenter External Network Portgroup Name" id="res_vc_external_pg"  />
            <MyTextField label="Resource vCenter External Network VLAN" id="res_vc_external_vlan"  />
            <MyTextField label="Resource vCenter Infra Backup Portgroup Name" id="res_vc_infra_pg"  />
            <MyTextField label="Resource vCenter Infra Backup VLAN" id="res_vc_infra_vlan"  />
            <MyTextField label="Resource vCenter Tenant Backup Portgroup Name" id="res_vc_tenant_pg"  />
            <MyTextField label="Resource vCenter Tenant Backup VLAN" id="res_vc_tenant_vlan"  />

            <input type="submit"/>

        </form>
        </FormProvider>  
   
        </div>
);
};

export default Vcenter;