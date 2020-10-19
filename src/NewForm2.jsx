import React, { useState } from 'react';


const NewForm2 = () => {

    const[fullName, setFullName] = useState({
        fName: "",
        lName: "",
        email: "",
        phone: "",
    });
    
    const InputEvent = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;

        const{value, name} = event.target;

        setFullName((preValue) => {
            if(name === "fName") {
                return {
                    fName: value,
                    lname: preValue.lName,
                    email: preValue.email,
                    phone: preValue.phone,
                };
            } else if(name === "lName") {
                return {
                    fName: preValue.fName,
                    lName: value,
                    email: preValue.email,
                    phone: preValue.phone,
                };
            } else if(name === "email") {
                return {
                    fName: preValue.fName,
                    lName: preValue.lName,
                    email: value,
                    phone: preValue.phone,
                };
            } else if(name === "phone") {
                return {
                    fName: preValue.fName,
                    lName: preValue.lName,
                    email: preValue.email,
                    phone: value,
                };
            }
        });
        

    };

  

    const onSubmits = (event) => {
        event.preventDefault();
        alert("Form Submitted");
    };

    return (
        <>
            <div className="main_div">
                <form onSubmit={onSubmits}>
                <div>
                    <h1>Hello {fullName.fName} {fullName.lName} </h1>
                    <p> {fullName.email} </p>
                    <p> {fullName.phone} </p>
                    <input 
                        type="text"
                        placeholder="Enter Your FirstName"
                        name="fName"
                        onChange={InputEvent}
                        value={fullName.fName}
                    />
                    <br />
                    <input 
                        type="text"
                        placeholder="Enter Your LastName"
                        name="lName"
                        onChange={InputEvent}
                        value={fullName.lName}
                    />
                    <br />
                    <input 
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        onChange={InputEvent}
                        value={fullName.email}
                        autoComplete="off"
                    />
                    <br />
                    <input 
                        type="number"
                        placeholder="Enter Your Mobile No."
                        name="phone"
                        onChange={InputEvent}
                        value={fullName.phone}
                    />
                    <br />
                    <button type="submit"> Submit Me 👍 </button>
                </div>

                </form>
            </div>
        </>
    );
};

export default NewForm2;