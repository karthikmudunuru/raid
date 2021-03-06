import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { saveAs } from 'file-saver';
import Button from '@mui/material/Button';

const myTextAreaStyle= {
    height: '100%', 
    width:'100%', 
    marginLeft: '1em', 
    marginRight : '1em', 
    backgroundColor: '#042341', 
    fontWeight :'bold', 
    fontSize:'larger' ,
    padding:'1em',
    color:'white',
    border: '1px solid #8d06ba',
};

const buttonStyle = {
    margin:'1em',
    marginTop:'100px',
    cursor: 'pointer',
    textTransform:'uppercase',
    letterSpacing:'5px',
    fontWeight:'bold',
    fontSize:'16px' 
};

const Download= () =>{
    const [input,setInput]= useState(" ");
    const params = useSelector((state) => state);
    
    
    const downloadFile = () => {
       
    var blob = new Blob([input], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "InputFile-NFVStack.txt");
    }
    
    useEffect(()=>{
        var displaytext = '';
        Object.entries(params).forEach((entry) => {
            const [key, value] = entry;
            displaytext+=`${key}=${value}\n`
            });
        setInput(displaytext);
    },[])
    
    return (
    
        <React.Fragment>
             
            <Button style={buttonStyle} onClick={downloadFile} variant='contained' color='secondary' size="large"> Download! </Button>
           <textarea readOnly rows="500"  style={myTextAreaStyle}
                value={input}
             />

        </React.Fragment>
);
};

export default Download;