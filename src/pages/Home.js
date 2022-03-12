import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { saveAs } from 'file-saver';

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



const Home= () =>{
 
    return (
    
        <div style={myTextAreaStyle}>
             
          <p>This is Home</p>

        </div>
);
};

export default Home;