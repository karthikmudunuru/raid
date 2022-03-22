import React, {useEffect} from 'react';
import { useForm,FormProvider  } from "react-hook-form";
import MyTextField from '../components/MyTextField';
import MyDropdown from '../components/MyDropdown';
import Password from '../components/Password';
import { useDispatch } from 'react-redux';
import { infraActions } from '../store/infra';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { myTextAreaStyle,network_options,deployment_options,submitStyle } from '../store/constants';





var nsx_map = new Map();

const Nsx= () =>{
    
    const methods = useForm();
    const dispatch = useDispatch();
    
    
    const fetchValueHandler = (data) => {
        const  {id,value} = data
        //console.log("This is " + id + " value: " + value)
        nsx_map.set(id, value)
    };

    useEffect(()=>{

        return () => {
            const temp_nsx = {}
            temp_nsx["NsxTMGROVAPath"]=nsx_map.get("nsx_mgr_binary_path")
            temp_nsx["NsxTMGRVMName"]=nsx_map.get("nsx_mgr_appliance_name")
            temp_nsx["NsxTMGRHostName="]=nsx_map.get("nsx_mgr_host_name")
            temp_nsx["NsxTMGRIpAddress"]=nsx_map.get("nsx_mgr_ip_addr")
            temp_nsx["NsxTGateWay"]=nsx_map.get("nsx_mgr_gateway_addr")
            temp_nsx["NsxTNetMask"]=nsx_map.get("nsx_mgr_subnet_mask")
            temp_nsx["NsxTPrefix"]=nsx_map.get("nsx_mgr_prefix")
            temp_nsx["NsxTRootPassword"]=nsx_map.get("nsx_mgr_root_password")
            temp_nsx["NsxTCliPassword"]=nsx_map.get("nsx_mgr_cli_password")
            temp_nsx["NsxTAdminPassword"]=nsx_map.get("nsx_mgr_admin_password")
            temp_nsx["NsxTAuditPassword"]=nsx_map.get("nsx_mgr_audit_password")
            temp_nsx["NsxTAdminUserName"]=nsx_map.get("nsx_mgr_admin_name")
            temp_nsx["NsxTAuditUserName"]=nsx_map.get("nsx_mgr_audit_name")
            temp_nsx["NsxTIpType"]=nsx_map.get("nsx_mgr_nw_type")
            temp_nsx["NsxTMGRDepSize"]=nsx_map.get("nsx_mgr_form_size")
            temp_nsx["NsxTLicense"]=nsx_map.get("nsx_mgr_license")
    
    
            temp_nsx["NSXTemailid"]=nsx_map.get("nsx_mgr_email")
            temp_nsx["NsxTEdgeNodeIp1"]=nsx_map.get("nsx_edge_01_addr")
            temp_nsx["NsxTEdgeNodeIp2"]=nsx_map.get("nsx_edge_02_addr")
            temp_nsx["EdgeRootPassword"]=nsx_map.get("nsx_edge_root_password")
            temp_nsx["EdgeCLIPassword"]=nsx_map.get("nsx_edge_cli_password")
    
            temp_nsx["NsxTIPPoolStartAddress"]=nsx_map.get("nsx_pool_start")
            temp_nsx["NsxTIPPoolEndAddress"]=nsx_map.get("nsx_pool_end")
            temp_nsx["NsxTIPPoolCIDR"]=nsx_map.get("nsx_pool_cidr")
            temp_nsx["Overlay_Transport_Zone_display_name"]=nsx_map.get("nsx_overlay_tz_name")
            temp_nsx["Overlay_Transport_Zone_host_switch_name"]=nsx_map.get("nsx_overlay_tz_host")
            temp_nsx["Overlay_Transport_Zone_description"]=nsx_map.get("nsx_overlay_tz_desc")
            temp_nsx["VLAN_Transport_Zone_display_name"]=nsx_map.get("nsx_vlan_tz_name")
            temp_nsx["VLAN_Transport_Zone_host_switch_name"]=nsx_map.get("nsx_vlan_tz_host")
            temp_nsx["VLAN_Transport_Zone_description"]=nsx_map.get("nsx_vlan_tz_desc")
            dispatch(infraActions.setConfig(temp_nsx))
    
        }
    },[]);


    const onSubmit = data => console.log(data);
 




    
    return (
        <div style={myTextAreaStyle}>
        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
       
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
            
            <input type="submit"/>

        
    </form>
    </FormProvider>
          



         </div>
)
};

export default Nsx;