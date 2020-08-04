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
        borderRadius: "10px",
        overflowY: 'scroll'
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
            date: new Date().toISOString().slice(0,10),
            checked: { 
                talented: false, 
                smart: false,
                creative: false 
            },
            color: "",
            dateTime: '',
            file: "", 
            hidden: "It's the secret of the hidden input!",
            number: 1, 
            password: '',
            radio: '',
            range: '',
            telephone: '', 
            url: ''
        })
    
    const handleChecked = (checkType) => {
            setForm({
                ...form,
                checked: {...form.checked, [checkType]: !form.checked[checkType]}
            })
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        console.log(e.target.name)
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(handleValidation() === true){
            props.handleClick()
        }
    }

    const [errors, setErrors] = useState({})

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

    const [hidden, setHidden] = useState(true)

    const onSecretClick = () => {
        setHidden(!hidden)
    }

    const [password, setPassword] = useState(false)
    const showPassword = () => {
        setPassword(!password)
    }

    console.log(form)
    return(
        <div style={form.color ? {...functionalStyle, ...{backgroundColor: form.color}} : functionalStyle}>
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


                    <label>Choose all that apply to you:</label>
                    <label htmlFor='talented' style={labelStyle}>
                        Talented: 
                    </label>
                    <input
                        style={inputStyle}
                        id='talented'
                        name='checkbox'
                        type='checkbox'
                        checked={form.checked.talented}
                        onChange={() => handleChecked('talented')}
                    />
                    <label htmlFor='smart' style={labelStyle}>
                        Smart: 
                    </label>
                    <input
                        style={inputStyle}
                        id='smart'
                        name='checkbox'
                        type='checkbox'
                        checked={form.checked.smart}
                        onChange={() => handleChecked('smart')}
                    />
                     <label htmlFor='creative' style={labelStyle}>
                        Creative:
                    </label>
                    <input
                        style={inputStyle}
                        id='creative'
                        name='checkbox'
                        type='checkbox'
                        checked={form.checked.creative}
                        onChange={() => handleChecked('creative')}
                    />

                    <label htmlFor='colorInput' style={labelStyle}>
                        Pick your Favorite Color: 
                    </label>
                    <input
                        style={inputStyle}
                        id='colorInput'
                        name='color'
                        type='color'
                        placeholder='Please type your favorite color'
                        value={form.color}
                        onChange={(e) => handleChange(e)}
                    />

                     <label htmlFor='dateTimeInput' style={labelStyle}>
                        Enter Your Birthday Date and Time of Birth:
                    </label>
                    <input
                        style={inputStyle}
                        id='dateTimeInput'
                        name='dateTime'
                        type='datetime-local'
                        value={form.dateTime}
                        onChange={(e) => handleChange(e)}
                    />

                     <label htmlFor='file' style={labelStyle}>
                        Click here to select an image:
                    </label>
                    <input
                        style={{...inputStyle, ...{display: 'none'}}}
                        id='file'
                        name='file'
                        type='file'
                        value={form.file}
                        onChange={(e) => handleChange(e)}
                    />
                    {form.file && <span>Your image has been uploaded!</span>}

                    <label htmlFor='hidden' style={labelStyle}>
                        I have a secret for you!:
                    </label>
                    <input
                        style={inputStyle}
                        id='hidden'
                        name='hidden'
                        type='hidden'
                        value={form.hidden}
                    />
                    <button onClick={onSecretClick}>{!hidden ? form.hidden : "Show Secret!"}</button>

                    <label htmlFor='number' style={labelStyle}>
                        Please pick an odd number from 1 to 9:
                    </label>
                    <input
                        style={inputStyle}
                        id='number'
                        name='number'
                        type='number'
                        min='1'
                        max='9'
                        step='2'
                        value={form.number}
                        onChange={(e) => handleChange(e)}
                    />

<                   label htmlFor='password' style={labelStyle}>
                        Please enter a fake password:
                    </label>
                    <input
                        style={inputStyle}
                        id='password'
                        name='password'
                        type={!password ? 'password' : 'text'}
                        value={form.password}
                        onChange={(e) => handleChange(e)}
                    />
                    <button onClick={() => showPassword()}>Show Password</button>
                    
                    <label style={labelStyle}> Please Select an Option:</label>
                    <label htmlFor='pretty awesome' style={labelStyle}>
                        Pretty Awesome
                    </label>
                    <input
                        style={inputStyle}
                        id='pretty awesome'
                        name='radio'
                        type='radio'
                        value="pretty awesome"
                        onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor='very awesome' style={labelStyle}>
                        Very Awesome
                    </label>
                    <input
                        style={inputStyle}
                        id='very awesome'
                        name='radio'
                        type='radio'
                        value="very awesome"
                        onChange={(e) => handleChange(e)}
                    />
                    <label htmlFor='range' style={labelStyle}>
                        Super Awesome
                    </label>
                    <input
                        style={inputStyle}
                        id='super awesome'
                        name='radio'
                        type='radio'
                        value="super awesome"
                        onChange={(e) => handleChange(e)}
                    />

                     <label htmlFor='range' style={labelStyle}>
                        How tall are you (in inches):
                    </label>
                    <input
                        style={inputStyle}
                        id='range'
                        name='range'
                        type='range'
                        min="1"
                        max="96"
                        value={form.range}
                        onChange={(e) => handleChange(e)}
                    />
                    <span>{form.range}</span>

                    <label htmlFor='telephone' style={labelStyle}>
                        Please enter your telephone number:
                    </label>
                    <input
                        style={inputStyle}
                        id='telephone'
                        name='telephone'
                        type='tel'
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="012-345-6789"
                        value={form.telephone}
                        onChange={(e) => handleChange(e)}
                    />

                    <label htmlFor='url' style={labelStyle}>
                        Please enter your favorite website:
                    </label>
                    <input
                        style={inputStyle}
                        id='url'
                        name='url'
                        type='url'
                        placeholder='https://www.reddit.com/'
                        value={form.url}
                        onChange={(e) => handleChange(e)}
                    />



                    
                    <br></br>
                    <button style={buttonStyle}>Submit</button>
                </form>
        </div>
    )
}

export default FunctionalComponentForm