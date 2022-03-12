import React, {useState, useEffect}  from 'react';
import Ipv4Field from './Ipv4Field';
import useForceUpdate from 'use-force-update';

var fields=[
    <p key="example-key-1">Hello World</p>,
];
var refObj={};
var firstfield; 

const IpList = (props) => {
    
    const forceUpdate = useForceUpdate();
    const [show, setShow] = useState(false);

   
   // const {value,id, label} = props;
   
   useEffect(() => {
       
     for (let i = 1; i <=10; i++) {
       const item_id = props.id+ i;
       const item_label= props.label + " " + i;
       //let tag= <Ipv4Field id =item_id key= item_id label=item_label />;
       let tag= <p key="example-key-1">Hello World</p>;
       fields.push(tag);
       if (i==1){
         firstfield =refObj[item_id];
         console.log("first field is" + firstfield);
         }
       console.log("Fields is " + fields);
   }
        setShow(true);
        forceUpdate();

     console.log("IpList UseEffect");


},[]);


    const callbackHandler = (node, id) =>{
        console.log("node is " + String(node));
        console.log("idis " + id);
        if(node){
        refObj[id]=node;
        }
    };
//ref={el => callbackHandler(el,item_id) } 
   
    /*if (firstfield?.current?.valid){
     console.log("First field is " + firstfield?.current?.value);      
    }*/
    
    return (
    
        <div className='my-control-group'>
          {!show && <p>DUMMY</p>} 
         
        {fields}
       
        </div>

    
    );
    
};
    
export default IpList;

