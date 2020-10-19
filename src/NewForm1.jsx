import React, { useState } from 'react';


const NewForm1 = () => {

    const[fullName, setFullName] = useState({
        fName: "",
        lName: "",
    });
    
    const InputEvent = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setFullName((preValue) => {
            if(name === "fName") {
                return {
                    fName: value,
                    lname: preValue.lName,
                };
            } else if(name === "lName") {
                return {
                    fName: preValue.fName,
                    lName: value,
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
                    <h1>Hello {fullName.fName} {fullName.lName}</h1>
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
                    <button type="submit"> Submit Me 👍 </button>
                </div>

                </form>
            </div>
        </>
    );
};

export default NewForm1;