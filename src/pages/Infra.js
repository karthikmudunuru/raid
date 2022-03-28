import React, {useEffect , useState} from 'react';
import { useForm,FormProvider,useFieldArray,Controller } from "react-hook-form";
import MyTextField from '../components/MyTextField';
import NumberField from '../components/NumberField';
import MyFieldArray  from '../components/MyFieldArray';
import MyDropdown from '../components/MyDropdown';
import Password from '../components/Password';
import { useDispatch } from 'react-redux';
import { infraActions } from '../store/infra';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { myTextAreaStyle,submitStyle,migration_options,pod_options,data_options,vsan_options,mainStyle,ipv4format } from '../store/constants';

// mgmt_array_0: yup.string().required().matches(ipv4format,{message : "Enter a valid IP address"}),

const schema = yup.object({

    infra_dns: yup.string().required("This is a required field").matches(ipv4format,{message : "Enter a valid IP address"}),
    infra_ntp: yup.string().required("This is a required field").matches(ipv4format,{message : "Enter a valid IP address"}),
    infra_domain: yup.string().required("This is a required field"),
    infra_migration: yup.string(),
    infra_mgmt_count: yup.number().default(0),
    mgmt_host_user: yup.string().required("This is a required field"),
    mgmt_host_password: yup.string().required("This is a required field"),
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
    infra_res_count: yup.number().default(0),
    infra_edge_count: yup.number().default(0),
    mgmt_array: yup.array().of(yup.string("Enter a valid IP address").transform((value, originalValue) => value["value"]).required("This is a required field" ).matches(ipv4format,{message : "Enter a valid IP address"})),
    res_array: yup.array().of(yup.string("Enter a valid IP address").transform((value, originalValue) => value["value"]).required("This is a required field" ).matches(ipv4format,{message : "Enter a valid IP address"})),
    edge_array: yup.array().of(yup.string("Enter a valid IP address").transform((value, originalValue) => value["value"]).required("This is a required field").matches(ipv4format,{message : "Enter a valid IP address"})),
    pxe_array:  yup.array().of(yup.string("Enter a valid IP address").transform((value, originalValue) => value["value"]).required("This is a required field").matches(ipv4format,{message : "Enter a valid IP address"})),
   

  }).required();

var infra_map = new Map()





const Infra= () => {

    const [showmgmt,setShowmgmt] = useState(false);
    const [showres,setShowres] = useState(false);
    const [showedge,setShowedge] = useState(false);
    const [showpxe,setShowpxe] = useState(false);
    
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
            pod_design:'2POD',
            infra_nfs_ip:'',
            infra_nfs_mountpoint:'',
            infra_nfs_name:'',
            infra_res_count:0,
            infra_edge_count:0,
            infra_pxe_count:0,
            mgmt_array:[],
            res_array:[],
            edge_array:[],
            pxe_array:[]
        }
      });

      //const mgmt_array_methods= useFieldArray({control, name: "mgmt_array"});
      //const res_array_methods = useFieldArray({control, name: "res_array"});
      //const edge_array_methods = useFieldArray({control, name: "edge_array"});
    
    
   
 
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
   

    const pxe_count = methods.watch("infra_pxe_count",0) 
    //console.log("watching",mgmt_count);   
    if (parseInt(pxe_count)>0 && !showpxe){
      setShowpxe(true);
     
    }
    
    useEffect(()=>{
        
        
      
        

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

    const onSubmit = data => {console.log(data);}

   

 
    
       // <MyDropdown  label="Design" id="pod_design"  options={pod_options} getValue={(data)=> fetchValueHandler(data)}/>
      

      
       

    return (

   
     <FormProvider {...methods}>
   
     <form style={mainStyle} onSubmit={methods.handleSubmit(onSubmit)}>
        <br/><br/>
        <MyTextField label="DNS Server" id="infra_dns"  />
        <MyTextField  label="NTP Server" id="infra_ntp" />
        <MyTextField label="Infra Domain" id="infra_domain"  />
     
        <MyDropdown label="Migrate Esxi Mgmt Network from VSS to VDS" id="infra_migration" options={migration_options} />
        
        <NumberField  label= " Number of Management Hosts" id="infra_mgmt_count" />
        {showmgmt && <MyFieldArray count={parseInt(mgmt_count)}  label="Management Host Ip"   array_name="mgmt_array" />}
        <MyTextField label="Management Host User" id="mgmt_host_user" />
        <Password label="Management Host Password" id="mgmt_host_password" />
        
        <NumberField label= " Number of Resource Hosts" id="infra_res_count"  />
        {showres && <MyFieldArray count={parseInt(res_count)} label="Resource Host Ip"  array_name="res_array"/>}
        <MyTextField label="Resource Host User" id="res_host_user" />
        <Password label="Resource Host Password" id="res_host_password" />
        
        <NumberField label= " Number of Edge Hosts" id="infra_edge_count"  />
        {showedge && <MyFieldArray count={parseInt(edge_count)} label="EdgeHost Ip" array_name="edge_array" />}
        <MyTextField label="Edge Host User" id="edge_host_user" />
        <Password label="Edge Host Password" id="edge_host_password" />
        
        <MyDropdown  label="All Flash vSAN" id="infra_allflash_vsan"  options={vsan_options} />
        <MyDropdown  label="Management Datastore Type" id="mgmt_datastore"  options={data_options} />
        <MyDropdown  label="Resource Datastore Type" id="res_datastore"  options={data_options} />
        <MyDropdown  label="Edge Datastore Type" id="edge_datastore"  options={data_options} />
        
        <MyTextField  label="NFS Ip Address" id="infra_nfs_ip" />
        <MyTextField label="NFS Mount Point" id="infra_nfs_mountpoint" />
        <MyTextField label="NFS Name" id="infra_nfs_name" />

        <NumberField label= " Number of PXE Hosts" id="infra_pxe_count"  />
        {showpxe && <MyFieldArray count={parseInt(pxe_count)} label="PXE Server Ip" array_name="pxe_array" />}
        <MyTextField label="PXE Server Username" id="pxe_username" />
        <Password label="PXE Server Password" id="pxe_password" />

        <input type="submit"  style={submitStyle} />

       
  </form>

  </FormProvider>
 
    )
};

export default Infra;