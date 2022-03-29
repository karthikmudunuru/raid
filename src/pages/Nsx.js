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


const Nsx= () =>{
    

    const [showNsxEdge,setShowNsxEdge] = useState(false);
    
    const dispatch = useDispatch();
    const methods = useForm({
        resolver: yupResolver(nsx_schema),
        defaultValues: 
        {

          
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
        dispatch_nsx["NsxTEdgeNodeIp1"]=nsx_map.get("nsx_edge_01_addr")
        dispatch_nsx["NsxTEdgeNodeIp2"]=nsx_map.get("nsx_edge_02_addr")
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
       
            <MyTextField label="NSX-T Edge Node 01 IP Address" id="nsx_edge_01_addr" />
            <MyTextField label="NSX-T Edge Node 02 IP Address" id="nsx_edge_02_addr" />
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