import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { saveAs } from 'file-saver';

const myTextAreaStyle= {
    height: '100%', 
    width:'100%', 
    marginLeft: '1em', 
    marginRight : '1em', 
    backgroundColor: 'ivory', 
    fontWeight :'bold', 
    fontSize:'larger' ,
    padding:'1em'
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
             
            <button onClick={downloadFile} style={{margin: '2em'}} >
            Download the file!
            </button>
            <textarea readOnly rows="500"  style={myTextAreaStyle}
                value={input}
             />

        </React.Fragment>
);
};

export default Download;