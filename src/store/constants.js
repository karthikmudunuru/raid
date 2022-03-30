
export const ipv4format = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;


export const mainStyle={
    marginTop:'80px'
};

export const labelStyle={
    color: '#AA01FF',
    fontWeight:'bold',
    fontSize:'18px',
    letterSpacing:"1px"
}



export const submitStyle={
        border: 'none',
        color: 'white',
        backgroundColor:'#8d06ba',
        margin: '2em',
        padding: '1em',
        textAlign: 'center',
        transitionDuration: '0.4s',
        cursor: 'pointer',
        textTransform:'uppercase',
        letterSpacing:'5px',
        fontWeight:'bold',
        fontSize:'16px' 
   
};

export const myTextAreaStyle= {
        height: '100%', 
        width:'100%', 
        margin: '2em',
        padding: '2em',
        color:'white',
        fontWeight :'bold', 
        fontSize:'larger' ,
        padding:'1em',
        borderStyle: 'solid',
        borderColor: 'green'
    };

 export const migration_options=
    [ 
        {value : "N" ,text: "Yes"},  
        {value : "Y" ,text: "No"}
    ] ;
    
 export const pod_options=
    [ 
        {value : "2POD" ,text: "Two Pods"},  
        {value : "3POD" ,text: "Three Pods"}
    ] ;
    
export  const data_options =
    [ 
        {value : "vSAN" ,text: "vSAN"},  
        {value : "NFS" ,text: "NFS"},
        {value : "Local" ,text: "Local"},
    
    ] ;
    
 export const vsan_options = 
    [ 
        {value : "y" ,text: "Yes"},  
        {value : "n" ,text: "No"}
    ] ;

export const deployment_options=
    [ 
        {value : "small" ,text: "Small"},  
        {value : "medium" ,text: "Medium"},
        {value : "large" ,text: "Large"},
    
    ] ;
    
export const network_options=
    [ 
        {value : "IPv4" ,text: "IPv4"},  
        {value : "IPv6" ,text: "IPv6"}
    ] ;

export const tca_options=
    [ 
        {value : "True" ,text: "Yes"},  
        {value : "False" ,text: "No"}
    ] ;
    
    