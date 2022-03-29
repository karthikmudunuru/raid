import React from 'react';
import { useForm, FormProvider  } from "react-hook-form";
import MyTextField from '../components/MyTextField';
import Password from '../components/Password';
import { useDispatch } from 'react-redux';
import { infraActions } from '../store/infra';
import { yupResolver } from '@hookform/resolvers/yup';
import { submitStyle,mainStyle, } from '../store/constants';
import {vcenter_schema} from '../store/schemas';

var vc_map;
var dispatch_vc={};


const Vcenter= () =>{
    
    const dispatch = useDispatch();
    const methods = useForm({
        resolver: yupResolver(vcenter_schema),
        defaultValues:
        {
            vc_binary_path: '',
            mgmt_vc_appliance_name: '',
            mgmt_vc_host_name: '',
            mgmt_vc_ip_addr: '',
            mgmt_vc_gateway_addr: '',
            mgmt_vc_subnet_mask: '',
            mgmt_vc_root_password: '',
            mgmt_vc_sso_password: '',
            mgmt_vc_sso_domain: '',
            mgmt_vc_username: '',
            mgmt_vc_mgmt_switch: '',
            mgmt_vc_datacenter: '',
            mgmt_vc_cluster: '',
            mgmt_vc_vsan_name: '',
            mgmt_vc_infra_vds: '',
            mgmt_vc_tenant_vds: '',
            mgmt_vc_vmotion_pg: '',
            mgmt_vc_vmotion_vlan: '',
            mgmt_vc_vsan_pg: '',
            mgmt_vc_vsan_vlan: '',
            mgmt_vc_mgmt_pg: '',
            mgmt_vc_mgmt_vlan: '',
            mgmt_vc_esxi_pg: '',
            mgmt_vc_esxi_vlan: '',
            mgmt_vc_vcha_pg: '',
            mgmt_vc_vcha_vlan: '',
            mgmt_vc_external_pg: '',
            mgmt_vc_external_vlan: '',
            mgmt_vc_infra_pg: '',
            mgmt_vc_infra_vlan: '',
            mgmt_vc_tenant_pg: '',
            mgmt_vc_tenant_vlan: '',
            res_vc_appliance_name: '',
            res_vc_host_name: '',
            res_vc_ip_addr: '',
            res_vc_gateway_addr: '',
            res_vc_subnet_mask: '',
            res_vc_root_password: '',
            res_vc_sso_password: '',
            res_vc_sso_domain: '',
            res_vc_username: '',
            res_vc_mgmt_switch: '',
            res_vc_datacenter: '',
            res_vc_cluster: '',
            res_vc_vsan_name: '',
            res_vc_infra_vds: '',
            res_vc_tenant_vds: '',
            res_vc_vmotion_pg: '',
            res_vc_vmotion_vlan: '',
            res_vc_vsan_pg: '',
            res_vc_vsan_vlan: '',
            res_vc_mgmt_pg: '',
            res_vc_mgmt_vlan: '',
            res_vc_esxi_pg: '',
            res_vc_esxi_vlan: '',
            res_vc_external_pg: '',
            res_vc_overlay_pg: '',
            res_vc_nfs_pg: '',
          

        }
    });
   
    
  

    const onSubmit = data => { 
        
        //console.log(data);
        vc_map = new Map(Object.entries(data));
    
        dispatch_vc["vCenterBinaryPath"]=vc_map.get("vc_binary_path");
        dispatch_vc["MgmtVCHostname"]=vc_map.get("mgmt_vc_host_name");
        dispatch_vc["MgmtVCApplianceName"]=vc_map.get("mgmt_vc_appliance_name");
        dispatch_vc["MgmtVCName"]=vc_map.get("mgmt_vc_appliance_name");
        dispatch_vc["MgmtVCIpAddress"]=vc_map.get("mgmt_vc_ip_addr");
        dispatch_vc["MgmtVCGateway"]=vc_map.get("mgmt_vc_gateway_addr");
        dispatch_vc["MgmtVCSubnetMask"]=vc_map.get("mgmt_vc_subnet_mask");
        dispatch_vc["MgmtVCRootPassword"]=vc_map.get("mgmt_vc_root_password");
        dispatch_vc["MgmtVCSSOPassword"]=vc_map.get("mgmt_vc_sso_password");
        dispatch_vc["MgmtVCSSODomain"]=vc_map.get("mgmt_vc_sso_domain");
        dispatch_vc["MgmtVCUserName"]=vc_map.get("mgmt_vc_username");
        dispatch_vc["MgmtVCDeploymentNetworkSwitch"]=vc_map.get("mgmt_vc_mgmt_switch");
        dispatch_vc["MgmtDCName"]=vc_map.get("mgmt_vc_datacenter");
        dispatch_vc["MgmtClusterName"]=vc_map.get("mgmt_vc_cluster");
        dispatch_vc["MgmtvSANDatastoreName"]=vc_map.get("mgmt_vc_vsan_name");
        dispatch_vc["InfraDvSwitch"]=vc_map.get("mgmt_vc_infra_vds");
        dispatch_vc["TenantDvSwitch"]=vc_map.get("mgmt_vc_tenant_vds");
        dispatch_vc["MgmtPGvMotion"]=vc_map.get("mgmt_vc_vmotion_pg");
        dispatch_vc["MgmtPGvMotionVLANID"]=vc_map.get("mgmt_vc_vmotion_vlan");
        dispatch_vc["MgmtPGvSAN"]=vc_map.get("mgmt_vc_vsan_pg");
        dispatch_vc["MgmtPGvSANVLANID"]=vc_map.get("mgmt_vc_vsan_vlan");
        dispatch_vc["MgmtPGVMMgmt"]=vc_map.get("mgmt_vc_mgmt_pg");
        dispatch_vc["MgmtPGVMMgmtVLANID"]=vc_map.get("mgmt_vc_mgmt_vlan");
        dispatch_vc["MgmtPGESXi"]=vc_map.get("mgmt_vc_esxi_pg");
        dispatch_vc["MgmtPGESXiVLANID"]=vc_map.get("mgmt_vc_esxi_vlan");
        dispatch_vc["MgmtPGVCHA"]=vc_map.get("mgmt_vc_vcha_pg");
        dispatch_vc["MgmtPGVCHAVLANID"]=vc_map.get("mgmt_vc_vcha_vlan");
        dispatch_vc["MgmtPGExternal"]=vc_map.get("mgmt_vc_external_pg");
        dispatch_vc["MgmtPGExternalVLANID"]=vc_map.get("mgmt_vc_external_vlan");
        dispatch_vc["MgmtPGInfraBackup"]=vc_map.get("mgmt_vc_infra_pg");
        dispatch_vc["MgmtPGInfraBackupVLANID"]=vc_map.get("mgmt_vc_infra_vlan");
        dispatch_vc["MgmtPGTenantBackup"]=vc_map.get("mgmt_vc_tenant_pg");
        dispatch_vc["MgmtPGTenantBackupVLANID"]=vc_map.get("mgmt_vc_tenant_vlan");
        dispatch_vc["ResourceVCApplianceName"]=vc_map.get("res_vc_appliance_name");
        dispatch_vc["ResourceVCName"]=vc_map.get("res_vc_appliance_name");
        dispatch_vc["ResourceVCHostname"]=vc_map.get("res_vc_host_name");
        dispatch_vc["ResourceVCIpAddress"]=vc_map.get("res_vc_ip_addr");
        dispatch_vc["ResourceVCGateway"]=vc_map.get("res_vc_gateway_addr");
        dispatch_vc["ResourceVCSubnetMask"]=vc_map.get("res_vc_subnet_mask");
        dispatch_vc["ResourceVCRootPassword"]=vc_map.get("res_vc_root_password");
        dispatch_vc["ResourceVCSSOPassword"]=vc_map.get("res_vc_sso_password");
        dispatch_vc["ResourceVCSSODomain="]=vc_map.get("res_vc_sso_domain");
        dispatch_vc["ResourceVCUserName"]=vc_map.get("res_vc_username");
        //dispatch_vc[""]=vc_map.get("res_vc_mgmt_switch");
        dispatch_vc["ResDCName"]=vc_map.get("res_vc_datacenter");
        dispatch_vc["ResClusterName"]=vc_map.get("res_vc_cluster");
        dispatch_vc["ResvSANDatastoreName"]=vc_map.get("res_vc_vsan_name");
        dispatch_vc["ResInfraDvSwitch"]=vc_map.get("res_vc_infra_vds");
        dispatch_vc["ResTenantDvSwitch"]=vc_map.get("res_vc_tenant_vds");
        dispatch_vc["ResPGvMotion"]=vc_map.get("res_vc_vmotion_pg");
        dispatch_vc["ResPGvMotionVLANID"]=vc_map.get("res_vc_vmotion_vlan");
        dispatch_vc["ResPGvSAN"]=vc_map.get("res_vc_vsan_pg");
        dispatch_vc["ResPGvSANVLANID"]=vc_map.get("res_vc_vsan_vlan");
        dispatch_vc["ResPGVMMgmt"]=vc_map.get("res_vc_mgmt_pg");
        dispatch_vc["ResPGVMMgmtVLANID"]=vc_map.get("res_vc_mgmt_vlan");
        dispatch_vc["ResPGESXi"]=vc_map.get("res_vc_esxi_pg");
        dispatch_vc["ResPGESXiVLANID"]=vc_map.get("res_vc_esxi_vlan");
       // dispatch_vc[""]=vc_map.get("res_vc_vcha_pg");
       // dispatch_vc[""]=vc_map.get("res_vc_vcha_vlan");
        dispatch_vc["ResPGExternal"]=vc_map.get("res_vc_external_pg");
        dispatch_vc["ResPGNFS"]=vc_map.get("res_vc_nfs_pg");
        dispatch_vc["ResPGOverlay"]=vc_map.get("res_vc_overlay_pg");
       // dispatch_vc[""]=vc_map.get("res_vc_infra_vlan");
       // dispatch_vc[""]=vc_map.get("res_vc_tenant_pg");
       // dispatch_vc[""]=vc_map.get("res_vc_tenant_vlan");

       dispatch(infraActions.setConfig(dispatch_vc)); 
       
    }
           
            /*
            
            <MyTextField label="Resource vCenter Infra Backup VLAN" id="res_vc_infra_vlan"  />
            <MyTextField label="Resource vCenter Tenant Backup Portgroup Name" id="res_vc_tenant_pg"  />
            <MyTextField label="Resource vCenter Tenant Backup VLAN" id="res_vc_tenant_vlan"  />
            <MyTextField label="Resource vCenter External Network VLAN" id="res_vc_external_vlan"  />
            <MyTextField label="Resource vCenter VCHA Portgroup Name" id="res_vc_vcha_pg"  />
            <MyTextField label="Resource vCenter VCHA VLAN" id="res_vc_vcha_vlan"  />

            */

    return (
       
        <FormProvider {...methods}>
        
        <form style={mainStyle} onSubmit={methods.handleSubmit(onSubmit)}>
            <br/><br/>
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
            <MyTextField label="Management vCenter Deployment Network Switch" id="mgmt_vc_mgmt_switch"  />
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
            <MyTextField label="Resource vCenter Deployment Network Switch" id="res_vc_mgmt_switch"  />
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
            <MyTextField label="Resource vCenter External Network Portgroup Name" id="res_vc_external_pg"  />
            <MyTextField label="Resource vCenter Overlay Portgroup Name" id="res_vc_overlay_pg"  />
            <MyTextField label="Resource vCenter NFS Portgroup Name" id="res_vc_nfs_pg"  />
           

            <input type="submit"  style={submitStyle} />

        </form>
        </FormProvider>  
   
      
);
};

export default Vcenter;