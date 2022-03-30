import React, {useState}  from 'react';
import { useForm,FormProvider  } from "react-hook-form";
import MyTextField from '../components/MyTextField';
import NumberField from '../components/NumberField';
import MyFieldArray  from '../components/MyFieldArray';
import MyDropdown from '../components/MyDropdown';
import Password from '../components/Password';
import { useDispatch } from 'react-redux';
import { infraActions } from '../store/infra';
import { yupResolver } from '@hookform/resolvers/yup';

import {network_options,deployment_options,submitStyle,mainStyle } from '../store/constants';
import {nsx_schema} from '../store/schemas';

var nsx_map;
var dispatch_nsx = {};

const arrayMapper = (array_id,array_label) =>{

    const vals = nsx_map.get(array_id);

    for(let i=0;i<vals.length;i++){
      const e_label = array_label + (i+1);
      dispatch_nsx[e_label]=vals[i];
    }

}



const Nsx= () =>{
    

    const [showNsxEdge,setShowNsxEdge] = useState(false);
    
    const dispatch = useDispatch();
    const methods = useForm({
        resolver: yupResolver(nsx_schema),
        defaultValues: 
        {

            nsx_mgr_binary_path:'',
            nsx_mgr_appliance_name:'',
            nsx_mgr_host_name:'',
            nsx_mgr_ip_addr:'',
            nsx_mgr_gateway_addr:'',
            nsx_mgr_subnet_mask:'',
            nsx_mgr_prefix:'',
            nsx_mgr_root_password:'',
            nsx_mgr_cli_password:'',
            nsx_mgr_admin_password:'',
            nsx_mgr_audit_password:'',
            nsx_mgr_admin_name:'',
            nsx_mgr_audit_name:'',
            nsx_mgr_nw_type:'',
            nsx_mgr_form_size:'',
            nsx_mgr_license:'',
            nsx_mgr_email:'',
            nsx_edge_root_password:'',
            nsx_edge_cli_password:'',
            nsx_pool_start:'',
            nsx_pool_end:'',
            nsx_pool_cidr:'',
            nsx_overlay_tz_name:'',
            nsx_overlay_tz_host:'',
            nsx_overlay_tz_desc:'',
            nsx_vlan_tz_name:'',
            nsx_vlan_tz_host:'',
            nsx_vlan_tz_desc:'',
            nsx_edge_array:[],
            nsx_edge_count:0,
          
        }
    });
   

    const nsx_edge_count = methods.watch("infra_edge_count",0) 
    if (parseInt(nsx_edge_count)>0 && !showNsxEdge){
      setShowNsxEdge(true);
     
    }


    const onSubmit = data => {
        
       
        nsx_map = new Map(Object.entries(data));
        
        dispatch_nsx["NsxTMGROVAPath"]=nsx_map.get("nsx_mgr_binary_path")
        dispatch_nsx["NsxTMGRVMName"]=nsx_map.get("nsx_mgr_appliance_name")
        dispatch_nsx["NsxTMGRHostName="]=nsx_map.get("nsx_mgr_host_name")
        dispatch_nsx["NsxTMGRIpAddress"]=nsx_map.get("nsx_mgr_ip_addr")
        dispatch_nsx["NsxTGateWay"]=nsx_map.get("nsx_mgr_gateway_addr")
        dispatch_nsx["NsxTNetMask"]=nsx_map.get("nsx_mgr_subnet_mask")
        dispatch_nsx["NsxTPrefix"]=nsx_map.get("nsx_mgr_prefix")
        dispatch_nsx["NsxTRootPassword"]=nsx_map.get("nsx_mgr_root_password")
        dispatch_nsx["NsxTCliPassword"]=nsx_map.get("nsx_mgr_cli_password")
        dispatch_nsx["NsxTAdminPassword"]=nsx_map.get("nsx_mgr_admin_password")
        dispatch_nsx["NsxTAuditPassword"]=nsx_map.get("nsx_mgr_audit_password")
        dispatch_nsx["NsxTAdminUserName"]=nsx_map.get("nsx_mgr_admin_name")
        dispatch_nsx["NsxTAuditUserName"]=nsx_map.get("nsx_mgr_audit_name")
        dispatch_nsx["NsxTIpType"]=nsx_map.get("nsx_mgr_nw_type")
        dispatch_nsx["NsxTMGRDepSize"]=nsx_map.get("nsx_mgr_form_size")
        dispatch_nsx["NsxTLicense"]=nsx_map.get("nsx_mgr_license")


        dispatch_nsx["NSXTemailid"]=nsx_map.get("nsx_mgr_email")
       
        dispatch_nsx["EdgeRootPassword"]=nsx_map.get("nsx_edge_root_password")
        dispatch_nsx["EdgeCLIPassword"]=nsx_map.get("nsx_edge_cli_password")

        dispatch_nsx["NsxTIPPoolStartAddress"]=nsx_map.get("nsx_pool_start")
        dispatch_nsx["NsxTIPPoolEndAddress"]=nsx_map.get("nsx_pool_end")
        dispatch_nsx["NsxTIPPoolCIDR"]=nsx_map.get("nsx_pool_cidr")
        dispatch_nsx["Overlay_Transport_Zone_display_name"]=nsx_map.get("nsx_overlay_tz_name")
        dispatch_nsx["Overlay_Transport_Zone_host_switch_name"]=nsx_map.get("nsx_overlay_tz_host")
        dispatch_nsx["Overlay_Transport_Zone_description"]=nsx_map.get("nsx_overlay_tz_desc")
        dispatch_nsx["VLAN_Transport_Zone_display_name"]=nsx_map.get("nsx_vlan_tz_name")
        dispatch_nsx["VLAN_Transport_Zone_host_switch_name"]=nsx_map.get("nsx_vlan_tz_host")
        dispatch_nsx["VLAN_Transport_Zone_description"]=nsx_map.get("nsx_vlan_tz_desc")
        arrayMapper("nsx_edge_array","NsxTEdgeNodeIp");
        dispatch(infraActions.setConfig(dispatch_nsx))
       

    }
 




    
    return (
        
        <FormProvider {...methods}>
        <form style={mainStyle} onSubmit={methods.handleSubmit(onSubmit)}>
            <br/><br/>
       
            <MyTextField label="NSX Manager Binary Path" id="nsx_mgr_binary_path"  />
            <MyTextField label="NSX Manager Applicance Name" id="nsx_mgr_appliance_name"  />
            <MyTextField label="NSX Manager Host Name" id="nsx_mgr_host_name"  />
            <MyTextField label="NSX Manager IP Address" id="nsx_mgr_ip_addr" />
            <MyTextField label="NSX Manager Gateway Address" id="nsx_mgr_gateway_addr" />
            <MyTextField label="NSX Manager Subnet Mask" id="nsx_mgr_subnet_mask" />
            <MyTextField label="NSX Manager Network Prefix" id="nsx_mgr_prefix"  />
            <Password label="NSX Manager Root Password" id="nsx_mgr_root_password" />
            <Password label="NSX Manager CLI Password" id="nsx_mgr_cli_password" />
            <Password label="NSX Manager Admin Password" id="nsx_mgr_admin_password" />
            <Password label="NSX Manager Audit Password" id="nsx_mgr_audit_password" />

            <MyTextField label="NSX Manager Admin Username" id="nsx_mgr_admin_name"  />
            <MyTextField label="NSX Manager Audit Username" id="nsx_mgr_audit_name"  />
            <MyDropdown  label="NSX Manager Network Type " id="nsx_mgr_nw_type"  options={network_options} />
            <MyDropdown  label="NSX Manager Deployment Form" id="nsx_mgr_form_size"  options={deployment_options} />
            <MyTextField label="NSX-T License" id="nsx_mgr_license"  />
            <MyTextField label="NSX-T email id" id="nsx_mgr_email"  />

            <NumberField label= " Number of Edge Nodes" id="nsx_edge_count"  />
            {showNsxEdge && <MyFieldArray count={parseInt(nsx_edge_count)} label="NSXT Edge Node Ip" array_name="nsx_edge_array" />}
       
         
            <Password label="NSX-T Edge Root Password" id="nsx_edge_root_password" />
            <Password label="NSX-T Edge CLI Password" id="nsx_edge_cli_password" />
            
            <MyTextField label="NSX-T IP Pool Start Address" id="nsx_pool_start" />
            <MyTextField label="NSX-T IP Pool End Address" id="nsx_pool_end" />
            <MyTextField label="NSX-T IP Pool CIDR" id="nsx_pool_cidr"  />

            <MyTextField label="NSX-T Overlay Transport Zone Name" id="nsx_overlay_tz_name"  />
            <MyTextField label="NSX-T Overlay Transport Zone Host Switch" id="nsx_overlay_tz_host"  />
            <MyTextField label="NSX-T Overlay Transport Zone Description" id="nsx_overlay_tz_desc"  />

            <MyTextField label="NSX-T VLAN Transport Zone Name" id="nsx_vlan_tz_name"  />
            <MyTextField label="NSX-T VLAN Transport Zone Host Switch" id="nsx_vlan_tz_host"  />
            <MyTextField label="NSX-T VLAN Transport Zone Description" id="nsx_vlan_tz_desc"  />
            
            <input type="submit"  style={submitStyle} />

        
        </form>
        </FormProvider>
)
};

export default Nsx;