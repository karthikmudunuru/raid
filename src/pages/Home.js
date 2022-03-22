import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { saveAs } from 'file-saver';
import {myTextAreaStyle} from '../store/constants'





const Home= () =>{
 
    return (
    
        <div style={myTextAreaStyle}>
             
          <p>This is Home</p>

        </div>
);
};

export default Home;