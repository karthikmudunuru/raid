import * as yup from "yup";

export const required_string_schema = yup.string().required("This is a required field");


export const string_schema = yup.string();

export const vrli_schema = yup.object({
            
  

}).required();

export const vro_schema = yup.object({
            
  

}).required();

export const vio_schema = yup.object({
            
  

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
