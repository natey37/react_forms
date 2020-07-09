import React, { useState } from 'react'

const functionalStyle = {
        position: "absolute",
        textAlign: "left",
        width: "40%",
        height: "80%",
        backgroundColor: "#FCC42C",
        padding: 40,
        top: "5",
        left: "26%",
        border: "solid",
        borderColor: "black",
        borderWidth: "5px",
        borderRadius: "10px"
}

const formStyle = {
    display: "flex",
    flexDirection: "column", 
    justifyContent: "center",
    width: "100%"
}

const labelStyle = {
    fontWeight: "bold",
    textAlign: "left",
    paddingBottom: "20px",
    paddingTop: "20px"
}

const inputStyle = {
    width: "95%",
    height: "40px",
    fontSize: "20px",
    fontFamily: "Work Sans, sans-serif"
}


function FunctionalComponentForm(){

    const [form, setForm] = useState({
            name: '', 
            email: '', 
            zipcode: '', 
            //changing the format of my new Date from Thu Jul 09 2020 15:18:17 GMT-0400 (Eastern Daylight Time) to 2020-07-09T19:18:45.240Z. CAREFUL this converts our date to UTC so it may not be accurate in some circumstances, for our purposes its fine. 
            date: new Date().toISOString().slice(0,10)
        })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div style={functionalStyle}>
            <h2 style={{textAlign: 'center'}}>
                Please Enter Your Information - Functional
            </h2>
                <form style={formStyle}>
                    <label htmlFor='nameInput' style={labelStyle}>
                        Name:
                    </label>
                    <input
                        style={inputStyle}
                        id='nameInput'
                        name='name'
                        type='text'
                        placeholder='Please type your name'
                        value={form.name}
                        onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor='emailInput' style={labelStyle}>
                        Email:
                    </label>
                    <input
                        style={inputStyle}
                        id='emailInput'
                        name='email'
                        type='text'
                        placeholder='Please type your email'
                        value={form.email}
                        onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor='zipcodeInput' style={labelStyle}>
                        Zipcode:
                    </label>
                    <input
                        style={inputStyle}
                        id='zipcodeInput'
                        name='zipcode'
                        type='text'
                        placeholder='Please type your zipcode'
                        value={form.zipcode}
                        onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor='dateInput' style={labelStyle}>
                        Date:
                    </label>
                    <input
                        style={inputStyle}
                        id='dateInput'
                        name='date'
                        type='date'
                        value={form.date}
                        onChange={(e) => handleChange(e)}
                    />
                </form>
        </div>
    )
}

export default FunctionalComponentForm