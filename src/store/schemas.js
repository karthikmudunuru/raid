import * as yup from "yup";
import { ipv4format } from "./constants";

export const required_string_schema = yup.string().required("This is a required field");


export const string_schema = yup.string();

export const ip_required_schema = yup.string().required("This is a required field").matches(ipv4format,{message : "Enter a valid IP address"});

export const ip_schema = yup.string().matches(ipv4format,{message : "Enter a valid IP address"});

export const array_ip_required_schema = yup.array().of(yup.string("Enter a valid IP address").required("This is a required field" ).transform((value, originalValue) => value["value"]).matches(ipv4format,{message : "Enter a valid IP address"}));

export const number_schema = yup.number().default(0);

export const vcd_schema = yup.object({
            
  

    
    }).required();


export const vrli_schema = yup.object({
            
    vrli_binary_path: required_string_schema,
    vrli_ip_addr: ip_required_schema,
    vrli_vip_addr: ip_required_schema,
    vrli_host_name: required_string_schema,
    vrli_appliance_name: required_string_schema,
    vrli_virtual_fqdn: required_string_schema,
    vrli_gateway_addr: ip_required_schema,
    vrli_subnet_mask: ip_required_schema,
    vrli_root_password: required_string_schema,
    vrli_username: required_string_schema,
    vrli_email: string_schema,
    vrli_content_path: string_schema,


    
    }).required();

export const vro_schema = yup.object({
            
  

    
    }).required();

export const vio_schema = yup.object({
            
    vio_binary_path : required_string_schema,
    vio_domain_name : required_string_schema,
    vio_vm_name : required_string_schema,
    vio_mgmt_ip : ip_required_schema,
    vio_start_mgmt_ip : ip_schema,
    vio_end_mgmt_ip : ip_schema,
    vio_gateway_addr : ip_required_schema,
    vio_subnet_mask : ip_required_schema,
    vio_username : required_string_schema,
    vio_user_password : required_string_schema,

    
    }).required();

export const nsx_schema = yup.object({
            

        nsx_mgr_binary_path: required_string_schema,
        nsx_mgr_appliance_name: required_string_schema,
        nsx_mgr_host_name: required_string_schema,
        nsx_mgr_ip_addr:  ip_required_schema,
        nsx_mgr_gateway_addr: ip_required_schema,
        nsx_mgr_subnet_mask: ip_required_schema,
        nsx_mgr_prefix: required_string_schema,
        nsx_mgr_root_password: required_string_schema,
        nsx_mgr_cli_password: required_string_schema,
        nsx_mgr_admin_password: required_string_schema,
        nsx_mgr_audit_password: string_schema,
        nsx_mgr_admin_name: required_string_schema,
        nsx_mgr_audit_name: string_schema,
        nsx_mgr_nw_type: string_schema,
        nsx_mgr_form_size: required_string_schema,
        nsx_mgr_license: string_schema,
        nsx_mgr_email: string_schema,
        nsx_edge_root_password: string_schema,
        nsx_edge_cli_password: string_schema,
        nsx_pool_start: ip_required_schema,
        nsx_pool_end: ip_required_schema,
        nsx_pool_cidr: string_schema,
        nsx_overlay_tz_name: string_schema,
        nsx_overlay_tz_host: string_schema,
        nsx_overlay_tz_desc: string_schema,
        nsx_vlan_tz_name: string_schema,
        nsx_vlan_tz_host: string_schema,
        nsx_vlan_tz_desc: string_schema,
        nsx_edge_array: array_ip_required_schema,
        nsx_edge_count: number_schema,

    
    }).required();



export const infra_schema = yup.object({

    infra_dns:  ip_required_schema,
    infra_ntp:  ip_required_schema,
    infra_domain: required_string_schema,
    infra_migration: string_schema,
    infra_mgmt_count: yup.number().default(0),
    mgmt_host_user: required_string_schema,
    mgmt_host_password: required_string_schema,
    res_host_user: string_schema,
    res_host_password: string_schema,
    edge_host_user: string_schema,
    edge_host_password: string_schema,
    infra_allflash_vsan: string_schema,
    mgmt_datastore: string_schema,
    res_datastore: string_schema,
    edge_datastore: string_schema,
    pod_design: string_schema,
    infra_nfs_ip: ip_schema,
    infra_nfs_mountpoint: string_schema,
    infra_nfs_name: string_schema,
    infra_res_count: yup.number().default(0),
    infra_edge_count: yup.number().default(0),
    mgmt_array: array_ip_required_schema,
    res_array: array_ip_required_schema,
    edge_array: array_ip_required_schema,
    pxe_array:  array_ip_required_schema,
    infra_pxe_count: yup.number().default(0),
    pxe_username: string_schema,
    pxe_password:  string_schema,

  }).required();






export const tkg_schema = yup.object({
            
            tkg_binary_path :  required_string_schema,
            tkg_template_name  :  required_string_schema,
            tkg_photon_os  :  required_string_schema,
            airgap_appliance_name  :  required_string_schema,
            airgap_host_name :  required_string_schema,

}).required();




export const tca_schema = yup.object({
    tca_mgr_binary_path: required_string_schema,
    tca_mgr_appliance_name: required_string_schema,
    tca_mgr_host_name: required_string_schema,
    tca_mgr_ssh_enable: string_schema,
    tca_mgr_ipv4_addr : required_string_schema,
    tca_mgr_ipv4_gateway_addr : required_string_schema,
    tca_mgr_ipv4_prefix :required_string_schema,
    tca_mgr_ipv4_dhcp_enable: string_schema,
    tca_mgr_ipv6_addr :string_schema,
    tca_mgr_ipv6_gateway_addr :string_schema,
    tca_mgr_ipv6_prefix :string_schema,
    tca_mgr_ipv6_dhcp_enable :string_schema,
    tca_mgr_root_password :required_string_schema,
    tca_mgr_cli_password :required_string_schema,
    tca_mgr_static_addr_01 :string_schema,
    tca_mgr_static_gateway_addr_01 :string_schema,
    tca_mgr_static_prefix_01 :string_schema,
    tca_mgr_static_addr_02 :string_schema,
    tca_mgr_static_gateway_addr_02 :string_schema,
    tca_mgr_static_prefix_02 :string_schema,
    tca_mgr_dc_city:string_schema,
    tca_mgr_dc_country:string_schema,
    tca_mgr_dc_lat:string_schema,
    tca_mgr_dc_lon:string_schema,


}).required();


export const vcenter_schema = yup.object({

    vc_binary_path: required_string_schema,
    mgmt_vc_appliance_name: required_string_schema,
    mgmt_vc_host_name: required_string_schema,
    mgmt_vc_ip_addr: required_string_schema,
    mgmt_vc_gateway_addr:required_string_schema, 
    mgmt_vc_subnet_mask: required_string_schema,
    mgmt_vc_root_password: required_string_schema,
    mgmt_vc_sso_password: required_string_schema,
    mgmt_vc_sso_domain: required_string_schema,
    mgmt_vc_username: required_string_schema,
    mgmt_vc_mgmt_switch: required_string_schema,
    mgmt_vc_datacenter: required_string_schema,
    mgmt_vc_cluster: required_string_schema,
    mgmt_vc_vsan_name: string_schema,
    mgmt_vc_infra_vds: string_schema,
    mgmt_vc_tenant_vds: string_schema,
    mgmt_vc_vmotion_pg: string_schema,
    mgmt_vc_vmotion_vlan: string_schema,
    mgmt_vc_vsan_pg: string_schema,
    mgmt_vc_vsan_vlan: string_schema,
    mgmt_vc_mgmt_pg: string_schema,
    mgmt_vc_mgmt_vlan: string_schema,
    mgmt_vc_esxi_pg: string_schema,
    mgmt_vc_esxi_vlan: string_schema,
    mgmt_vc_vcha_pg: string_schema,
    mgmt_vc_vcha_vlan: string_schema,
    mgmt_vc_external_pg: string_schema,
    mgmt_vc_external_vlan: string_schema,
    mgmt_vc_infra_pg: string_schema,
    mgmt_vc_infra_vlan: string_schema,
    mgmt_vc_tenant_pg: string_schema,
    mgmt_vc_tenant_vlan: string_schema,
    res_vc_appliance_name: required_string_schema,
    res_vc_host_name: required_string_schema,
    res_vc_ip_addr: required_string_schema,
    res_vc_gateway_addr: required_string_schema,
    res_vc_subnet_mask: required_string_schema,
    res_vc_root_password: required_string_schema,
    res_vc_sso_password: required_string_schema,
    res_vc_sso_domain: required_string_schema,
    res_vc_username: required_string_schema,
    res_vc_mgmt_switch: required_string_schema,
    res_vc_datacenter: required_string_schema,
    res_vc_cluster: required_string_schema,
    res_vc_vsan_name: string_schema,
    res_vc_infra_vds: string_schema,
    res_vc_tenant_vds: string_schema,
    res_vc_vmotion_pg: string_schema,
    res_vc_vmotion_vlan: string_schema,
    res_vc_vsan_pg: string_schema,
    res_vc_vsan_vlan: string_schema,
    res_vc_mgmt_pg: string_schema,
    res_vc_mgmt_vlan: string_schema,
    res_vc_esxi_pg: string_schema,
    res_vc_esxi_vlan: string_schema,
    res_vc_external_pg: string_schema,
    res_vc_overlay_pg: string_schema,
    res_vc_nfs_pg: string_schema,
  

    }).required();
