import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm, FormProvider  } from "react-hook-form";
import MyTextField from '../components/MyTextField';
import { infraActions } from '../store/infra';
import { submitStyle,mainStyle } from '../store/constants';
import {tkg_schema} from '../store/schemas';
import { yupResolver } from '@hookform/resolvers/yup';

var tkg_map;
var dispatch_tkg = {};


const Tkg= () =>{
    
    const dispatch = useDispatch();
    const methods = useForm({
        resolver: yupResolver(tkg_schema),
        defaultValues: 
        {

            tkg_binary_path : '',
            tkg_template_name  : '',
            tkg_photon_os  : '',
            airgap_appliance_name  : '',
            airgap_host_name : '',
        }
    });
    

   
    
   

    const onSubmit = data => {
        
       
        tkg_map = new Map(Object.entries(data));
        dispatch_tkg["TKGBaseImageOVAPath"] =tkg_map.get("tkg_binary_path")
        dispatch_tkg["TKGBaseImageVMName"] =tkg_map.get("tkg_template_name")
        dispatch_tkg["PhotonOS4OVAPath"] =tkg_map.get("tkg_photon_os")
        dispatch_tkg["AirgapServerApplianceName"] =tkg_map.get("airgap_appliance_name")
        dispatch_tkg["AirgapHostName"] =tkg_map.get("airgap_host_name")
        
        dispatch(infraActions.setConfig(dispatch_tkg))


    }
    
    
    return (
    
        
            <FormProvider {...methods}>
            <form style={mainStyle} onSubmit={methods.handleSubmit(onSubmit)}>
                <br/><br/>
            
                <MyTextField label="TKG Base Image OVF Path" id="tkg_binary_path" required />
                <MyTextField label="TKG Base Image VM Template Name" id="tkg_template_name" required />
                <MyTextField label="Photon OS 4 OVF Path" id="tkg_photon_os" required />
                <MyTextField label="Airgap Server Applicance Name" id="airgap_appliance_name" required />
                <MyTextField label="Airgap Server Host Name" id="airgap_host_name" required />

                <input type="submit"  style={submitStyle} />

        
            </form>
            </FormProvider>
       
    )
};

export default Tkg;