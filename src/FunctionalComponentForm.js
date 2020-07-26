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

const errorStyle = {
    color: "red",
    fontWeight: 'bold',
    fontSize: '15px'
}

const buttonStyle = {
    fontSize: '20px',
    fontFamily: "Work Sans, sans-serif",
    backgroundColor: 'black',
    color: "#FCC42C"
}


function FunctionalComponentForm(props){

    const [form, setForm] = useState({
            name: '', 
            email: '', 
            zipcode: '', 
            //changing the format of my new Date from Thu Jul 09 2020 15:18:17 GMT-0400 (Eastern Daylight Time) to 2020-07-09T19:18:45.240Z. CAREFUL this converts our date to UTC so it may not be accurate in some circumstances, for our purposes its fine. 
            date: new Date().toISOString().slice(0,10)
        })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(handleValidation() === true){
            props.handleClick()
            setSubmitted(true)
        }
    }

    const handleValidation = () => {
        let errors = {}
        let isFormValid = true 

        if(!form.name){
            isFormValid = false 
            errors.name = "Name cannot be empty!"
        } else if(typeof(form.name) !== undefined){
            if(!form.name.match(/^[a-zA-Z ]+$/)){
                isFormValid = false 
                errors.name = "Name can only include letters!"
            }
        }

        if(!form.email){
            isFormValid = false
            errors.email = "Email cannot be empty!"
        } else if(typeof(form.email !== undefined)){
            if(!form.email.match(/\S+@\S+\.\S+/)){
                isFormValid = false 
                errors.email = "Email must be in the format example@example.com"
            }
        }

        if(!form.zipcode){
            isFormValid = false
            errors.zipcode = "Zipcode cannot be empty!"
        } else if(typeof(form.zipcode !== undefined)){
            if(!form.zipcode.match(/^[0-9\b]+$/)){
                isFormValid = false 
                errors.zipcode = "Zipcode must only include digits!"
            } else if(form.zipcode.length !== 5){
                isFormValid = false 
                errors.zipcode = "Zipcode must be 5 digits!"
            }
        }

        let todaysDate = new Date()
       
        if(form.date < new Date(todaysDate.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().slice(0,10)){
            isFormValid = false
            errors.date = `Please pick a date at least a week from today! ${new Date().toISOString().slice(0,10)}`
        } 
        
        setErrors(errors)
        return isFormValid
    }
 
    return(
        <div style={functionalStyle}>
            <h2 style={{textAlign: 'center'}}>
                Please Enter Your Information - Functional
            </h2>
                <form style={formStyle} onSubmit={handleSubmit}>
                    <label htmlFor='nameInput' style={labelStyle}>
                        Name: <span>*</span>
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
                    <span style={errorStyle}>{errors.name}</span>

                    <label htmlFor='emailInput' style={labelStyle}>
                        Email: <span>*</span>
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
                    <span style={errorStyle}>{errors.email}</span>

                    <label htmlFor='zipcodeInput' style={labelStyle}>
                        Zipcode: <span>*</span>
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
                    <span style={errorStyle}>{errors.zipcode}</span>

                    <label htmlFor='dateInput' style={labelStyle}>
                        Date: <span>*</span>
                    </label>
                    <input
                        style={inputStyle}
                        id='dateInput'
                        name='date'
                        type='date'
                        value={form.date}
                        onChange={(e) => handleChange(e)}
                    />
                    <span style={errorStyle}>{errors.date}</span>

                    <br></br>
                    <button style={buttonStyle}>Submit</button>
                </form>
        </div>
    )
}

export default FunctionalComponentForm