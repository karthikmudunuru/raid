import React, {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useForm, FormProvider  } from "react-hook-form";
import MyTextField from '../components/MyTextField';
import { infraActions } from '../store/infra';
import { myTextAreaStyle, submitStyle } from '../store/constants';





var tkg_map = new Map();
const Tkg= () =>{
    
    const methods = useForm();
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


    const onSubmit = data => console.log(data);
    
    
    return (
    
        <div style={myTextAreaStyle}>
            <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
            
                <MyTextField label="TKG Base Image OVF Path" id="tkg_binary_path"  />
                <MyTextField label="TKG Base Image VM Template Name" id="tkg_template_name"  />
                <MyTextField label="Photon OS 4 OVF Path" id="tkg_photon_os"  />
                <MyTextField label="Airgap Server Applicance Name" id="airgap_appliance_name"  />
                <MyTextField label="Airgap Server Host Name" id="airgap_host_name"  />

                <input type="submit"/>

        
            </form>
            </FormProvider>
        </div>
    )
};

export default Tkg;