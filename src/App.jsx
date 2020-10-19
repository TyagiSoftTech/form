import React, { useState } from 'react';


const App = () => {

    // const name = "Hello ";
    const[name, setName] = useState();
    
    const[fullName,setFullName] = useState();

    const InputEvent = (event) => {
       
        setName(event.target.value);
    };

    const UpdateData = (event) => {
        event.preventDefault();
        setFullName(name);
    };

    return (
        <>
        <div>
        <form onSubmit={UpdateData}>
            <div>
                <h1> Hello {fullName} </h1>
                <input 
                type="text" 
                placeholder="Enter Your Name" 
                onChange={InputEvent}
                value={name}
                />
                <br />
                <button type="submit"> Submit Me 👍</button>
            </div>
        </form>
        </div>
        </>
    );
};

export default App;