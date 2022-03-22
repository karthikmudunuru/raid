import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import TextField from '../components/MyTextField';
import { infraActions } from '../store/infra';



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


var tkg_map = new Map();
const Tkg= () =>{
    
    const dispatch = useDispatch();
    const fetchValueHandler = (data) => {
        const  {id,value} = data
        //console.log("This is " + id + " value: " + value)
        tkg_map.set(id, value)
    };
    
    useEffect(()=>{

        return () => {
            const temp_tkg= {}
            temp_tkg["TKGBaseImageOVAPath"] =tkg_map.get("tkg_binary_path")
            temp_tkg["TKGBaseImageVMName"] =tkg_map.get("tkg_template_name")
            temp_tkg["PhotonOS4OVAPath"] =tkg_map.get("tkg_photon_os")
            temp_tkg["AirgapServerApplianceName"] =tkg_map.get("airgap_appliance_name")
            temp_tkg["AirgapHostName"] =tkg_map.get("airgap_host_name")
           
            dispatch(infraActions.setConfig(temp_tkg))

        }
    },[]);


   
    
    
    return (
    
        <div style={myTextAreaStyle}>
            
                <TextField label="TKG Base Image OVF Path" id="tkg_binary_path"  getValue={(data)=> fetchValueHandler(data)}/>
                <TextField label="TKG Base Image VM Template Name" id="tkg_template_name"  getValue={(data)=> fetchValueHandler(data)}/>
                <TextField label="Photon OS 4 OVF Path" id="tkg_photon_os"  getValue={(data)=> fetchValueHandler(data)}/>
                <TextField label="Airgap Server Applicance Name" id="airgap_appliance_name"  getValue={(data)=> fetchValueHandler(data)}/>
                <TextField label="Airgap Server Host Name" id="airgap_host_name"  getValue={(data)=> fetchValueHandler(data)}/>
        
        </div>
    )
};

export default Tkg;