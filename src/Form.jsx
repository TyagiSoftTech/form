import React, { useState } from 'react';


const Form = () => {

    const[name, setName] = useState("");
    const[lName, setLName] = useState("");
    const[fullName, setFullName] = useState("");
    const[fullLName, setFullLName] = useState("");

    const InputEvent = (event) => {
        setName(event.target.value);
        

    };

    const InputPass = (event) => {
        setLName(event.target.value);
    };

    const onSubmits = (event) => {
        event.preventDefault();
        setFullName(name);
        setFullLName(lName);
    };

    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmits}>
                <div>
                    <h1>Hello {fullName} {fullLName}</h1>
                    <input 
                        type="text"
                        placeholder="Enter Your FirstName"
                        onChange={InputEvent}
                        value={name}
                    />
                    <br />
                    <input 
                        type="text"
                        placeholder="Enter Your LastName"
                        onChange={InputPass}
                        value={lName}
                    />
                    <br />
                    <button type="submit"> Submit Me 👍 </button>
                </div>

                </form>
            </div>
        </>
    );
};

export default Form;