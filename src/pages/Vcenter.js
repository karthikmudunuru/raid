import React, {useEffect} from 'react';
import Ipv4Field from '../components/Ipv4Field';
import TextField from '../components/TextField';
import MyDropdown from '../components/MyDropdown';
import NumberField from '../components/NumberField';
import Password from '../components/Password';

const fetchValueHandler = (data) => {
    const  {id,value} = data
    console.log("This is " + id + " value: " + value)
};

const myTextAreaStyle= {
    height: '100%', 
    width:'100%', 
    margin: '2em',
    padding: '2em',
    backgroundColor: 'ivory', 
    fontWeight :'bold', 
    fontSize:'larger' ,
    padding:'1em',
    borderStyle: 'solid',
    borderColor: 'green'
};


const Vcenter= () =>{
    
    
    useEffect(()=>{

        return () => {
        
        }
    },[]);

    
 

    return (
        <div style={myTextAreaStyle}>
      
            <TextField label="vCenter Binary Path" id="vc_binary_path"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter Applicance Name" id="mgmt_vc_appliance_name"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter Host Name" id="mgmt_vc_host_name"  getValue={(data)=> fetchValueHandler(data)}/>
            <Ipv4Field label="Management vCenter IP Address" id="mgmt_vc_ip_addr" getValue={(data)=> fetchValueHandler(data)}/>
            <Ipv4Field label="Management vCenter Gateway Address" id="mgmt_vc_gateway_addr" getValue={(data)=> fetchValueHandler(data)}/>
            <Ipv4Field label="Management vCenter Subnet Mask" id="mgmt_vc_subnet_mask" getValue={(data)=> fetchValueHandler(data)}/>
            <Password label="Management vCenter Root Password" id="mgmt_vc_root_password" getValue={(data)=> fetchValueHandler(data)}/>
            <Password label="Management vCenter SSO Password" id="mgmt_vc_sso_password" getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter SSO Domain" id="mgmt_vc_sso_domain"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter User Name" id="mgmt_vc_username"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter Deployment Network Switch" id="mgmt_vc_mgmtvds"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter Datacenter" id="mgmt_vc_datacenter"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter Cluster" id="mgmt_vc_cluster"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter vSAN Datastore " id="mgmt_vc_vsan_name"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter Infra VDS Name" id="mgmt_vc_infra_vds"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter Tenant VDS Name" id="mgmt_vc_tenant_vds"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter vMotion Portgroup Name" id="mgmt_vc_vmotion_pg"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter vMotion VLAN" id="mgmt_vc_vmotion_vlan"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter vSAN Portgroup Name" id="mgmt_vc_vsan_pg"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter vSAN VLAN" id="mgmt_vc_vsan_vlan"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter Management Portgroup Name" id="mgmt_vc_mgmt_pg"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter Management VLAN" id="mgmt_vc_mgmt_vlan"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter Esxi Portgroup Name" id="mgmt_vc_esxi_pg"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter Esxi VLAN" id="mgmt_vc_esxi_vlan"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter VCHA Portgroup Name" id="mgmt_vc_vcha_pg"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter VCHA VLAN" id="mgmt_vc_vcha_vlan"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter External Network Portgroup Name" id="mgmt_vc_external_pg"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter External Network VLAN" id="mgmt_vc_external_vlan"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter Infra Backup Portgroup Name" id="mgmt_vc_infra_pg"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter Infra Backup VLAN" id="mgmt_vc_infra_vlan"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter Tenant Backup Portgroup Name" id="mgmt_vc_tenant_pg"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Management vCenter Tenant Backup VLAN" id="mgmt_vc_tenant_vlan"  getValue={(data)=> fetchValueHandler(data)}/>
           

                

            <TextField label="Resource vCenter Applicance Name" id="res_vc_appliance_name"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter Host Name" id="res_vc_host_name"  getValue={(data)=> fetchValueHandler(data)}/>
            <Ipv4Field label="Resource vCenter IP Address" id="res_vc_ip_addr" getValue={(data)=> fetchValueHandler(data)}/>
            <Ipv4Field label="Resource vCenter Gateway Address" id="res_vc_gateway_addr" getValue={(data)=> fetchValueHandler(data)}/>
            <Ipv4Field label="Resource vCenter Subnet Mask" id="res_vc_subnet_mask" getValue={(data)=> fetchValueHandler(data)}/>
            <Password label="Resource vCenter Root Password" id="res_vc_root_password" getValue={(data)=> fetchValueHandler(data)}/>
            <Password label="Resource vCenter SSO Password" id="res_vc_sso_password" getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter SSO Domain" id="res_vc_sso_domain"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter User Name" id="res_vc_username"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter Deployment Network Switch" id="res_vc_mgmtvds"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter Datacenter" id="res_vc_datacenter"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter Cluster" id="res_vc_cluster"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter vSAN Datastore " id="res_vc_vsan_name"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter Infra VDS Name" id="res_vc_infra_vds"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter Tenant VDS Name" id="res_vc_tenant_vds"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter vMotion Portgroup Name" id="res_vc_vmotion_pg"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter vMotion VLAN" id="res_vc_vmotion_vlan"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter vSAN Portgroup Name" id="res_vc_vsan_pg"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter vSAN VLAN" id="res_vc_vsan_vlan"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter Management Portgroup Name" id="res_vc_mgmt_pg"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter Management VLAN" id="res_vc_mgmt_vlan"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter Esxi Portgroup Name" id="res_vc_esxi_pg"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter Esxi VLAN" id="res_vc_esxi_vlan"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter VCHA Portgroup Name" id="res_vc_vcha_pg"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter VCHA VLAN" id="res_vc_vcha_vlan"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter External Network Portgroup Name" id="res_vc_external_pg"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter External Network VLAN" id="res_vc_external_vlan"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter Infra Backup Portgroup Name" id="res_vc_infra_pg"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter Infra Backup VLAN" id="res_vc_infra_vlan"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter Tenant Backup Portgroup Name" id="res_vc_tenant_pg"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="Resource vCenter Tenant Backup VLAN" id="res_vc_tenant_vlan"  getValue={(data)=> fetchValueHandler(data)}/>

           
   
        </div>
);
};

export default Vcenter;