import React, {useState} from 'react';
import { useForm,FormProvider} from "react-hook-form";
import MyTextField from '../components/MyTextField';
import NumberField from '../components/NumberField';
import MyFieldArray  from '../components/MyFieldArray';
import MyDropdown from '../components/MyDropdown';
import Password from '../components/Password';
import { useDispatch } from 'react-redux';
import { infraActions } from '../store/infra';
import { yupResolver } from '@hookform/resolvers/yup';
import {submitStyle,migration_options,pod_options,data_options,vsan_options,mainStyle } from '../store/constants';
import {infra_schema} from '../store/schemas';

var infra_map;
var dispatch_infra = {}; 



const arrayMapper = (array_id,array_label) =>{

    const vals = infra_map.get(array_id);

    for(let i=0;i<vals.length;i++){
      const e_label = array_label + (i+1);
      dispatch_infra[e_label]=vals[i];
    }

}





const Infra= () => {

    const [showmgmt,setShowmgmt] = useState(false);
    const [showres,setShowres] = useState(false);
    const [showedge,setShowedge] = useState(false);
    const [showpxe,setShowpxe] = useState(false);
    
    const dispatch = useDispatch();
    const methods = useForm({
        resolver: yupResolver(infra_schema),
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
            pxe_array:[],
            pxe_username:'',
            pxe_password:''
        }
      });

    
   const mgmt_count = methods.watch("infra_mgmt_count",0) 
   if (parseInt(mgmt_count)>0 && !showmgmt){
       setShowmgmt(true);
     
    }


    const res_count = methods.watch("infra_res_count",0) 
    if (parseInt(res_count)>0 && !showres){
       setShowres(true);
     
    }

    const edge_count = methods.watch("infra_edge_count",0) 
    if (parseInt(edge_count)>0 && !showedge){
      setShowedge(true);
     
    }
   

    const pxe_count = methods.watch("infra_pxe_count",0) 
    if (parseInt(pxe_count)>0 && !showpxe){
      setShowpxe(true);
     
    }
    
  

    const onSubmit = data => {
      
      //console.log(typeof data);
      //console.log(data);
      infra_map  = new Map(Object.entries(data));
      //console.log("infra map is", infra_map);
      dispatch_infra["InfraNTPServer"]=infra_map.get("infra_ntp");
      dispatch_infra["InfraDNSServer"]=infra_map.get("infra_dns");
      dispatch_infra["InfraDomain"]=infra_map.get("infra_domain");
      dispatch_infra["Esxi_Mgmt_Network_Managed_by_VSS"]=infra_map.get("infra_migration");
      dispatch_infra["MgmtHostUser"]=infra_map.get("mgmt_host_user");
      dispatch_infra["MgmtHostPassword"]=infra_map.get("mgmt_host_password");
      dispatch_infra["ResHostUser"]=infra_map.get("res_host_user");
      dispatch_infra["ResHostPassword"]=infra_map.get("res_host_password");
      dispatch_infra["EdgeHostUser"]=infra_map.get("edge_host_user");
      dispatch_infra["EdgeHostPassword"]=infra_map.get("edge_host_password");
      dispatch_infra["AllFlashvSAN"]=infra_map.get("infra_allflash_vsan");
      dispatch_infra["MgmtDatastoreType"]=infra_map.get("mgmt_datastore");
      dispatch_infra["ResDatastoreType"]=infra_map.get("res_datastore");
      dispatch_infra["EdgeDatastoreType"]=infra_map.get("edge_datastore");
      dispatch_infra["PODDesign"]=infra_map.get("pod_design");
      dispatch_infra["NFSIp"]=infra_map.get("infra_nfs_ip");
      dispatch_infra["NFSMountPoint"]=infra_map.get("infra_nfs_mountpoint");
      dispatch_infra["NFSName"]=infra_map.get("infra_nfs_name");
      dispatch_infra["PXEServerPassword"]=infra_map.get("pxe_password");
      dispatch_infra["PXEServerUser"]=infra_map.get("pxe_username");
      dispatch_infra["PXEbootServerCount"]=infra_map.get("pxe_array").length;
      arrayMapper("mgmt_array","MgmtHostIp");
      arrayMapper("res_array","ResHostIp");
      arrayMapper("edge_array","EdgeHostIp");
      arrayMapper("pxe_array","PXEServerIP");
      
      dispatch(infraActions.setConfig(dispatch_infra)); 

    
    }

   

 
    
       // <MyDropdown  label="Design" id="pod_design"  options={pod_options} getValue={(data)=> fetchValueHandler(data)}/>
      

      
       

    return (

   
     <FormProvider {...methods}>
   
     <form style={mainStyle} onSubmit={methods.handleSubmit(onSubmit)}>
        <br/><br/>
        <MyTextField label="DNS Server" id="infra_dns" required />
        <MyTextField  label="NTP Server" id="infra_ntp" required />
        <MyTextField label="Infra Domain" id="infra_domain"  required />
     
        <MyDropdown label="Migrate Esxi Mgmt Network from VSS to VDS" id="infra_migration" options={migration_options} />
        
        <NumberField  label= " Number of Management Hosts" id="infra_mgmt_count" />
        {showmgmt && <MyFieldArray count={parseInt(mgmt_count)}  label="Management Host Ip"   array_name="mgmt_array" />}
        <MyTextField label="Management Host User" id="mgmt_host_user" required />
        <Password label="Management Host Password" id="mgmt_host_password" required />
        
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