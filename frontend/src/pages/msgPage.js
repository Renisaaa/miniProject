import React, {useState, useEffect} from "react";
// import { MsgPage as SendbirdApp } from 'sendbird';
 




const MsgPage = () => {

//     const APP_ID = "A5308C8D-1DA4-42FC-82EE-F254B5028A69"
//  const USER_ID = "user1"

 

   const [state,setState] = useState({message: '', name: ''})
   const [chat,setChat] = useState([])


    const onTextChange = e =>{
        setState({...state, [e.target.name]: e.target.value})
    }
       
    // useEffect(() =>{
    //    socket.on('message', ({name, message}) => {
    //     setChat([...chat, {name, message}])
    //    })
    // })
    const onMessageSubmit = (e) => {
        e.preventdefault()
        const {name, message } = state
        // socket.emit('message', {name, message})
        setState({message: '', name})
    }


   const renderChat =()=> {
    return chat.map(({name, message}, index) =>(
        <div key={index}>
            <h3>
                {name}: <span>{message}</span>
             </h3>
         </div>
        ))
   }

    return(
        
      <div className="card">
         <form onSubmit={onMessageSubmit}> 
           <h1>Messanger</h1>

        <div className="name-field">
            <input
             name="name"
             onChange={e => onTextChange(e)} 
             value={state.name} 
             placeholder="Name"  
              />
         </div> 

         <div className="name-field-field">
            <input
             name="message"
             onChange={e => onTextChange(e)} 
             value={state.message} 
             id="outlined-multiline-static"
             variant="outlined"
             placeholder="Message"  
              />
         </div>
          
          <button>Send Message</button>

        </form> 
        
           <div className="render-chat">
                <h1>Chat Log</h1>
                {renderChat()}
           </div> 
           {/* <div>
              <SendbirdApp appId={APP_ID} userId={USER_ID} />
           </div>  */}

      </div>
      
    )
  }
    
  
  export default MsgPage 