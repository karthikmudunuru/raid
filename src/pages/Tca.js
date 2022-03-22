import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm, FormProvider  } from "react-hook-form";
import MyTextField from '../components/MyTextField';
import MyDropdown from '../components/MyDropdown';
import Password from '../components/Password';
import { myTextAreaStyle,tca_options,submitStyle } from '../store/constants';






const fetchValueHandler = (data) => {
    const  {id,value} = data
    console.log("This is " + id + " value: " + value)
};



const Tca= () =>{

    const methods = useForm();
    const dispatch = useDispatch();

    
    const onSubmit = data => console.log(data);
    

    return (
        
        <div style={myTextAreaStyle}>
        <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>

            
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

            <input className="submit" type="submit"/>

        
        </form>
        </FormProvider>
        </div>

);
}; 

export default Tca;