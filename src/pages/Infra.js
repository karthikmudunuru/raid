import React, {useEffect , useState} from 'react';
import { useForm,FormProvider  } from "react-hook-form";
import MyTextField from '../components/MyTextField';
import MyFieldArray  from '../components/MyFieldArray';
import MyDropdown from '../components/MyDropdown';
import Password from '../components/Password';
import { useDispatch } from 'react-redux';
import { infraActions } from '../store/infra';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { myTextAreaStyle,submitStyle,migration_options,pod_options,data_options,vsan_options } from '../store/constants';

const ipv4format = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
const schema = yup.object({

    infra_dns: yup.string().required().matches(ipv4format,{message : "Enter a valid IP address"}),
    infra_ntp: yup.string().required().matches(ipv4format,{message : "Enter a valid IP address"}),
    infra_domain: yup.string().required(),
    infra_migration: yup.string(),
    infra_mgmt_count: yup.number().default(0),
    mgmt_host_user: yup.string().required(),
    mgmt_host_password: yup.string().required(),
    res_host_user: yup.string(),
    res_host_password: yup.string(),
    edge_host_user: yup.string(),
    edge_host_password: yup.string(),
    infra_allflash_vsan: yup.string(),
    mgmt_datastore: yup.string(),
    res_datastore: yup.string(),
    edge_datastore: yup.string(),
    pod_design: yup.string(),
    infra_nfs_ip: yup.string().matches(ipv4format,{message : "Enter a valid IP address"}),
    infra_nfs_mountpoint: yup.string(),
    infra_nfs_name: yup.string(),
    infra_res_count:yup.number().default(0),
    infra_edge_count:yup.number().default(0)

  }).required();

var infra_map = new Map()





const Infra= () => {

    const [showmgmt,setShowmgmt] = useState(false);
    const [showres,setShowres] = useState(false);
    const [showedge,setShowedge] = useState(false);
    
    const dispatch = useDispatch();
    const methods = useForm({
        resolver: yupResolver(schema),
        defaultValues: 
        {
            infra_dns: '',
            infra_ntp:'',
            infra_domain:'',
            infra_migration:'',
            infra_mgmt_count: 0,
            mgmt_host_user:'',
            mgmt_host_password:'',
            res_host_user:'',
            res_host_password:'',
            edge_host_user:'',
            edge_host_password:'',
            infra_allflash_vsan:'',
            mgmt_datastore:'',
            res_datastore:'',
            edge_datastore:'',
            pod_design:'',
            infra_nfs_ip:'',
            infra_nfs_mountpoint:'',
            infra_nfs_name:'',
            infra_res_count:0,
            infra_edge_count:0
        }
      });
    
   
 
    const fetchValueHandler = (data) => {
        const  {id,value} = data
        //console.log("This is " + id + " value: " + value)
        infra_map.set(id, value)
    };


    
    const mgmt_count = methods.watch("infra_mgmt_count",0) 
    console.log("watching",mgmt_count);   
    if (parseInt(mgmt_count)>0 && !showmgmt){
       setShowmgmt(true);
     
    }


    const res_count = methods.watch("infra_res_count",0) 
    //console.log("watching",mgmt_count);   
    if (parseInt(res_count)>0 && !showres){
       setShowres(true);
     
    }

    const edge_count = methods.watch("infra_edge_count",0) 
    //console.log("watching",mgmt_count);   
    if (parseInt(edge_count)>0 && !showedge){
      setShowedge(true);
     
    }
   

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
    },[dispatch,methods.watch]);

    const onSubmit = data => console.log(data);

   

 /*
    
        <MyDropdown  label="Design" id="pod_design"  options={pod_options} getValue={(data)=> fetchValueHandler(data)}/>
        <NumberField label= "Number of Edge Hosts" id="infra_edge_count" ref={EdgeCountRef} generate_label="EdgeHost Ip" generate_id="edge_host_ip"/>
        ref={MgmtCountRef}


      
        */

    return (

     <div style={myTextAreaStyle}>
     <FormProvider {...methods}>
     <form onSubmit={methods.handleSubmit(onSubmit)}>

        <MyTextField label="DNS Server" id="infra_dns"  />
        <MyTextField  label="NTP Server" id="infra_ntp" />
        <MyTextField label="Infra Domain" id="infra_domain"  />
        <MyDropdown label="Migrate Esxi Management Network from VSS to VDS" id="infra_migration" options={migration_options} />
        
        <MyTextField  label= "Number of Management Hosts" id="infra_mgmt_count" />
        {showmgmt && <MyFieldArray count={parseInt(mgmt_count)}  label="Management Host Ip" id="mgmt_host_ip" />}
        <MyTextField label="Management Host User" id="mgmt_host_user" />
        <Password label="Management Host Password" id="mgmt_host_password" />
        
        <MyTextField label= "Number of Resource Hosts" id="infra_res_count"  />
        {showres && <MyFieldArray count={parseInt(res_count)} label="Resource Host Ip" id="res_host_ip" />}
        <MyTextField label="Resource Host User" id="res_host_user" />
        <Password label="Resource Host Password" id="res_host_password" />
        
        <MyTextField label= "Number of Edge Hosts" id="infra_edge_count"  />
        {showedge && <MyFieldArray count={parseInt(edge_count)} label="EdgeHost Ip" id="edge_host_ip" />}
        <MyTextField label="Edge Host User" id="edge_host_user" />
        <Password label="Edge Host Password" id="edge_host_password" />
        
        <MyDropdown  label="All Flash vSAN" id="infra_allflash_vsan"  options={vsan_options} />
        <MyDropdown  label="Management Datastore Type" id="mgmt_datastore"  options={data_options} />
        <MyDropdown  label="Resource Datastore Type" id="res_datastore"  options={data_options} />
        <MyDropdown  label="Edge Datastore Type" id="edge_datastore"  options={data_options} />
        
        <MyTextField  label="NFS Ip Address" id="infra_nfs_ip" />
        <MyTextField label="NFS Mount Point" id="infra_nfs_mountpoint" />
        <MyTextField label="NFS Name" id="infra_nfs_name" />

        <input type="submit"  style={submitStyle} />

       
  </form>
  </FormProvider>
  </div>
    )
};

export default Infra;