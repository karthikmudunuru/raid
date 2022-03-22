import React, {useEffect, useRef} from 'react';
import Ipv4Field from '../components/Ipv4Field';
import TextField from '../components/MyTextField';
import MyDropdown from '../components/MyDropdown';
import NumberField from '../components/NumberField';
import Password from '../components/Password';
import { useDispatch } from 'react-redux';
import { infraActions } from '../store/infra';

var infra_map = new Map()

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


const migration_options=
[ 
    {value : "N" ,text: "Yes"},  
    {value : "Y" ,text: "No"}
] ;

const pod_options=
[ 
    {value : "2POD" ,text: "Two Pods"},  
    {value : "3POD" ,text: "Three Pods"}
] ;

const data_options =
[ 
    {value : "vSAN" ,text: "vSAN"},  
    {value : "NFS" ,text: "NFS"},
    {value : "Local" ,text: "Local"},

] ;

const vsan_options = 
[ 
    {value : "y" ,text: "Yes"},  
    {value : "n" ,text: "No"}
] ;

const Test = () => {
    
    
    const dispatch = useDispatch();
    const InfraDomainRef = useRef();
    const MgmtCountRef = useRef();
    const ResCountRef = useRef();
    const EdgeCountRef = useRef();

    const fetchValueHandler = (data) => {
        const  {id,value} = data
        //console.log("This is " + id + " value: " + value)
        infra_map.set(id, value)
    };

    useEffect(()=>{
        //InfraDomainRef.current.setValue("nfvra1.com");
        return () => {
            console.log("Infra.js Unmounted");
            const temp_infra = {}
            temp_infra["InfraNTPServer"]=infra_map.get("infra_ntp")
            temp_infra["InfraDNSServer"]=infra_map.get("infra_dns")
            temp_infra["InfraDomain"]=infra_map.get("infra_domain")
            temp_infra["Esxi_Mgmt_Network_Managed_by_VSS"]=infra_map.get("infra_migration")
            temp_infra["MgmtHostUser"]=infra_map.get("mgmt_host_user")
            temp_infra["MgmtHostPassword"]=infra_map.get("mgmt_host_password")
            temp_infra["ResHostUser"]=infra_map.get("res_host_user")
            temp_infra["ResHostPassword"]=infra_map.get("res_host_password")
            temp_infra["EdgeHostUser"]=infra_map.get("edge_host_user")
            temp_infra["EdgeHostPassword"]=infra_map.get("edge_host_password")
            temp_infra["AllFlashvSAN"]=infra_map.get("infra_allflash_vsan")
            temp_infra["MgmtDatastoreType"]=infra_map.get("mgmt_datastore")
            temp_infra["ResDatastoreType"]=infra_map.get("res_datastore")
            temp_infra["EdgeDatastoreType"]=infra_map.get("edge_datastore")
            temp_infra["PODDesign"]=infra_map.get("pod_design")
            temp_infra["NFSIp"]=infra_map.get("infra_nfs_ip")
            temp_infra["NFSMountPoint"]=infra_map.get("infra_nfs_mountpoint")
            temp_infra["NFSName"]=infra_map.get("infra_nfs_name")
            dispatch(infraActions.setConfig(temp_infra))

        }
    },[dispatch]);


 /*
     <NumberField label= "Number of Resource Hosts" id="infra_res_count"  ref={ResCountRef} generate_label="Resource Host Ip" generate_id="res_host_ip"/>
        <MyDropdown  label="Design" id="pod_design"  options={pod_options} getValue={(data)=> fetchValueHandler(data)}/>
        <NumberField label= "Number of Edge Hosts" id="infra_edge_count" ref={EdgeCountRef} generate_label="EdgeHost Ip" generate_id="edge_host_ip"/>
        ref={MgmtCountRef}
        */

    return (

     <div style={myTextAreaStyle}>
  
        <Ipv4Field label="DNS Server" id="infra_dns" getValue={(data)=> fetchValueHandler(data)}/>
        <Ipv4Field label="NTP Server" id="infra_ntp" getValue={(data)=> fetchValueHandler(data)}/>
        <TextField label="Infra Domain" id="infra_domain" ref={InfraDomainRef}  getValue={(data)=> fetchValueHandler(data)}/>
        <MyDropdown label="Migrate Esxi Management Network from VSS to VDS" id="infra_migration" options={migration_options} getValue={(data)=> fetchValueHandler(data)}/>
        <NumberField label= "Number of Management Hosts" id="infra_mgmt_count"  generate_label="Management Host Ip" generate_id="mgmt_host_ip"/>
      
    
        <TextField label="Management Host User" id="mgmt_host_user" getValue={(data)=> fetchValueHandler(data)}/>
        <Password label="Management Host Password" id="mgmt_host_password" getValue={(data)=> fetchValueHandler(data)}/>
        <TextField label="Resource Host User" id="res_host_user" getValue={(data)=> fetchValueHandler(data)}/>
        <Password label="Resource Host Password" id="res_host_password" getValue={(data)=> fetchValueHandler(data)}/>
        <TextField label="Edge Host User" id="edge_host_user" getValue={(data)=> fetchValueHandler(data)}/>
        <Password label="Edge Host Password" id="edge_host_password" getValue={(data)=> fetchValueHandler(data)}/>
        <MyDropdown  label="All Flash vSAN" id="infra_allflash_vsan"  options={vsan_options} getValue={(data)=> fetchValueHandler(data)}/>
        <MyDropdown  label="Management Datastore Type" id="mgmt_datastore"  options={data_options} getValue={(data)=> fetchValueHandler(data)}/>
        <MyDropdown  label="Resource Datastore Type" id="res_datastore"  options={data_options} getValue={(data)=> fetchValueHandler(data)}/>
        <MyDropdown  label="Edge Datastore Type" id="edge_datastore"  options={data_options} getValue={(data)=> fetchValueHandler(data)}/>
        
        <Ipv4Field label="NFS Ip Address" id="infra_nfs_ip" getValue={(data)=> fetchValueHandler(data)} getValue={(data)=> fetchValueHandler(data)}/>
        <TextField label="NFS Mount Point" id="infra_nfs_mountpoint" getValue={(data)=> fetchValueHandler(data)}/>
        <TextField label="NFS Name" id="infra_nfs_name" getValue={(data)=> fetchValueHandler(data)}/>
        
  </div>
    )
};

export default Test;