import React from 'react';
import Ipv4Field from '../components/Ipv4Field';
import TextField from '../components/MyTextField';
import MyDropdown from '../components/MyDropdown';
import NumberField from '../components/NumberField';
import Password from '../components/Password';


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


const tca_options=
[ 
    {value : "True" ,text: "Yes"},  
    {value : "False" ,text: "No"}
] ;



const fetchValueHandler = (data) => {
    const  {id,value} = data
    console.log("This is " + id + " value: " + value)
};



const Tca= () =>{
return (
    <div style={myTextAreaStyle}>
            <h3>This is Tca</h3>
            <TextField label="TCA OVA Path" id="tca_mgr_binary_path"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="TCA Manager Applicance Name" id="tca_mgr_appliance_name"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="TCA Manager Host Name" id="tca_mgr_host_name"  getValue={(data)=> fetchValueHandler(data)}/>
            <MyDropdown  label="TCA Manager SSHenable" id="tca_mgr_ssh_enable"  options={tca_options} getValue={(data)=> fetchValueHandler(data)}/>
            <Ipv4Field label="TCA Manager IPV4 Address" id="tca_mgr_ipv4_addr" getValue={(data)=> fetchValueHandler(data)}/>
            <Ipv4Field label="TCA Manager IPV4 Gateway Address" id="tca_mgr_ipv4_gateway_addr" getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="TCA Manager IPv4 Prefix" id="tca_mgr_ipv4_prefix" getValue={(data)=> fetchValueHandler(data)}/>
            <MyDropdown  label="TCA Manager IPv4 DHCP enable" id="tca_mgr_ipv4_dhcp_enable"  options={tca_options} getValue={(data)=> fetchValueHandler(data)}/>
            <Ipv4Field label="TCA Manager IPV6 Address" id="tca_mgr_ipv6_addr" getValue={(data)=> fetchValueHandler(data)}/>
            <Ipv4Field label="TCA Manager IPV6 Gateway Address" id="tca_mgr_ipv6_gateway_addr" getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="TCA Manager IPv6 Prefix" id="tca_mgr_ipv6_prefix" getValue={(data)=> fetchValueHandler(data)}/>
            <MyDropdown  label="TCA Manager IPv6 DHCP enable" id="tca_mgr_ipv6_dhcp_enable"  options={tca_options} getValue={(data)=> fetchValueHandler(data)}/>
            <Password label="TCA Manager Root Password" id="tca_mgr_root_password" getValue={(data)=> fetchValueHandler(data)}/>
            <Password label="TCA Manager CLI Password" id="tca_mgr_cli_password" getValue={(data)=> fetchValueHandler(data)}/>

            <Ipv4Field label="TCA Manager Static Address 01 " id="tca_mgr_static_addr_01" getValue={(data)=> fetchValueHandler(data)}/>
            <Ipv4Field label="TCA Manager Static Gateway Address 01" id="tca_mgr_static_gateway_addr_01" getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="TCA Manager Static Prefix 01" id="tca_mgr_static_prefix_01" getValue={(data)=> fetchValueHandler(data)}/>
            <Ipv4Field label="TCA Manager Static Address 02 " id="tca_mgr_static_addr_02" getValue={(data)=> fetchValueHandler(data)}/>
            <Ipv4Field label="TCA Manager Static Gateway Address 02" id="tca_mgr_static_gateway_addr_02" getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="TCA Manager Static Prefix 02" id="tca_mgr_static_prefix_02" getValue={(data)=> fetchValueHandler(data)}/>

            <TextField label="TCA Manager Datacenter City" id="tca_mgr_dc_city"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="TCA Manager Datacenter Country" id="tca_mgr_dc_country"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="TCA Manager Datacenter Latitude" id="tca_mgr_dc_lat"  getValue={(data)=> fetchValueHandler(data)}/>
            <TextField label="TCA Manager Datacenter Longitude" id="tca_mgr_dc_lon"  getValue={(data)=> fetchValueHandler(data)}/>


           

                

        </div>

);
};

export default Tca;