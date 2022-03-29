import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm, FormProvider  } from "react-hook-form";
import MyTextField from '../components/MyTextField';
import MyDropdown from '../components/MyDropdown';
import Password from '../components/Password';
import { tca_options,submitStyle,mainStyle } from '../store/constants';
import { infraActions } from '../store/infra';
import { yupResolver } from '@hookform/resolvers/yup';
import {tca_schema} from '../store/schemas';

var tca_map;
var dispatch_tca = {};



const Tca= () =>{

    const dispatch = useDispatch();
    const methods = useForm({
        resolver: yupResolver(tca_schema),
        defaultValues: 
        {
            tca_mgr_binary_path: '',
            tca_mgr_appliance_name: '',
            tca_mgr_host_name: '',
            tca_mgr_ssh_enable: '',
            tca_mgr_ipv4_addr : '',
            tca_mgr_ipv4_gateway_addr : '',
            tca_mgr_ipv4_prefix : '',
            tca_mgr_ipv4_dhcp_enable: '',
            tca_mgr_ipv6_addr : '',
            tca_mgr_ipv6_gateway_addr : '',
            tca_mgr_ipv6_prefix : '',
            tca_mgr_ipv6_dhcp_enable : '',
            tca_mgr_root_password : '',
            tca_mgr_cli_password : '',
            tca_mgr_static_addr_01 : '',
            tca_mgr_static_gateway_addr_01 : '',
            tca_mgr_static_prefix_01 : '',
            tca_mgr_static_addr_02 : '',
            tca_mgr_static_gateway_addr_02 : '',
            tca_mgr_static_prefix_02 : '',
            tca_mgr_dc_city: '',
            tca_mgr_dc_country: '',
            tca_mgr_dc_lat: '',
            tca_mgr_dc_lon: '',

        }
      });;
  

    
    const onSubmit = data => {
        
        tca_map  = new Map(Object.entries(data));

        dispatch_tca["TcaMgrOVAPath"] = tca_map.get("tca_mgr_binary_path")  ;
        dispatch_tca["TcaMgrApplianceName"] = tca_map.get("tca_mgr_appliance_name")  ;
        dispatch_tca["TcaMgrHostName"] = tca_map.get("tca_mgr_host_name")  ;
        dispatch_tca["TcaMgrSSHEnable"] = tca_map.get("tca_mgr_ssh_enable")  ;
        dispatch_tca["TcaMgrIpv4Address"] = tca_map.get("tca_mgr_ipv4_addr") ;
        dispatch_tca["TcaMgrIpv4GateWay"] = tca_map.get("tca_mgr_ipv4_gateway_addr") ;
        dispatch_tca["TcaMgrIpv4Prefix"] = tca_map.get("tca_mgr_ipv4_prefix") ;
        dispatch_tca["TcaMgrIpv4DHCPEnable"] = tca_map.get("tca_mgr_ipv4_dhcp_enable")  ;
        dispatch_tca["TcaMgrIpv6Address"] = tca_map.get("tca_mgr_ipv6_addr") ;
        dispatch_tca["TcaMgrIpv6GateWay"] = tca_map.get("tca_mgr_ipv6_gateway_addr");
        dispatch_tca["TcaMgrIpv6Prefix"] = tca_map.get("tca_mgr_ipv6_prefix");
        dispatch_tca["TcaMgrIpv6DHCPEnable"] = tca_map.get("tca_mgr_ipv6_dhcp_enable")  ;
        dispatch_tca["TcaMgrRootPassword"] = tca_map.get("tca_mgr_root_password") ;
        dispatch_tca["TcaMgrCliPassword"] = tca_map.get("tca_mgr_cli_password") ;
        dispatch_tca["TcaMgrStaticAddress01"] = tca_map.get("tca_mgr_static_addr_01") ;
        dispatch_tca["TcaMgrStaticGateway01"] = tca_map.get("tca_mgr_static_gateway_addr_01");
        dispatch_tca["TcaMgrStaticPrefix01"] = tca_map.get("tca_mgr_static_prefix_01");
        dispatch_tca["TcaMgrStaticAddress02"] = tca_map.get("tca_mgr_static_addr_02");
        dispatch_tca["TcaMgrStaticGateway02"] = tca_map.get("tca_mgr_static_gateway_addr_02");
        dispatch_tca["TcaMgrStaticPrefix02"] = tca_map.get("tca_mgr_static_prefix_02");
        dispatch_tca["TcaMgrDatacenterCity"] = tca_map.get("tca_mgr_dc_city")  ;
        dispatch_tca["TcaMgrDatacenterCountry"] = tca_map.get("tca_mgr_dc_country") ;
        dispatch_tca["TcaMgrDatacenterLatitude"] = tca_map.get("tca_mgr_dc_lat" ) ;
        dispatch_tca["TcaMgrDatacenterLongitude"] = tca_map.get("tca_mgr_dc_lon")  ;
       
        dispatch(infraActions.setConfig(dispatch_tca)); 
    }

    return (
        
      
        <FormProvider {...methods}>
        <form style={mainStyle} onSubmit={methods.handleSubmit(onSubmit)}>

            <br/><br/>
            <MyTextField label="TCA OVA Path" id="tca_mgr_binary_path"  />
            <MyTextField label="TCA Manager Applicance Name" id="tca_mgr_appliance_name"  />
            <MyTextField label="TCA Manager Host Name" id="tca_mgr_host_name"  />
            <MyDropdown  label="TCA Manager SSHenable" id="tca_mgr_ssh_enable"  options={tca_options} />
            <MyTextField label="TCA Manager IPV4 Address" id="tca_mgr_ipv4_addr" />
            <MyTextField label="TCA Manager IPV4 Gateway Address" id="tca_mgr_ipv4_gateway_addr" />
            <MyTextField label="TCA Manager IPv4 Prefix" id="tca_mgr_ipv4_prefix" />
            <MyDropdown  label="TCA Manager IPv4 DHCP enable" id="tca_mgr_ipv4_dhcp_enable"  options={tca_options} />
            <MyTextField label="TCA Manager IPV6 Address" id="tca_mgr_ipv6_addr" />
            <MyTextField label="TCA Manager IPV6 Gateway Address" id="tca_mgr_ipv6_gateway_addr" />
            <MyTextField label="TCA Manager IPv6 Prefix" id="tca_mgr_ipv6_prefix" />
            <MyDropdown  label="TCA Manager IPv6 DHCP enable" id="tca_mgr_ipv6_dhcp_enable"  options={tca_options} />
            <Password label="TCA Manager Root Password" id="tca_mgr_root_password" />
            <Password label="TCA Manager CLI Password" id="tca_mgr_cli_password" />

            <MyTextField label="TCA Manager Static Address 01 " id="tca_mgr_static_addr_01" />
            <MyTextField label="TCA Manager Static Gateway Address 01" id="tca_mgr_static_gateway_addr_01" />
            <MyTextField label="TCA Manager Static Prefix 01" id="tca_mgr_static_prefix_01" />
            <MyTextField label="TCA Manager Static Address 02 " id="tca_mgr_static_addr_02" />
            <MyTextField label="TCA Manager Static Gateway Address 02" id="tca_mgr_static_gateway_addr_02" />
            <MyTextField label="TCA Manager Static Prefix 02" id="tca_mgr_static_prefix_02" />

            <MyTextField label="TCA Manager Datacenter City" id="tca_mgr_dc_city"  />
            <MyTextField label="TCA Manager Datacenter Country" id="tca_mgr_dc_country"  />
            <MyTextField label="TCA Manager Datacenter Latitude" id="tca_mgr_dc_lat"  />
            <MyTextField label="TCA Manager Datacenter Longitude" id="tca_mgr_dc_lon"  />

            <input style={submitStyle} type="submit"/>

        
        </form>
        </FormProvider>
       

);
}; 

export default Tca;