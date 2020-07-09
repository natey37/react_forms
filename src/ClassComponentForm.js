import React from 'react'
import './ClassComponentForm.css';

const emptyForm = {
    name: '', 
    email: '', 
    zipcode: '', 
    //changing the format of my new Date from Thu Jul 09 2020 15:18:17 GMT-0400 (Eastern Daylight Time) to 2020-07-09T19:18:45.240Z. CAREFUL this converts our date to UTC so it may not be accurate in some circumstances, for our purposes its fine. 
    date: new Date().toISOString().slice(0,10)
}

class ClassComponentForm extends React.Component {

    state = {}

    componentDidMount(){
        this.setState(emptyForm)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){

        return(
            <div id='classComponentForm'>
                <h2>
                    Please Enter Your Information - Class
                </h2>
                <form id='form'>
                    <label htmlFor='nameInput'>
                        Name:
                    </label>
                    <input
                        id='nameInput'
                        name='name'
                        type='text'
                        placeholder='Please type your name'
                        value={this.state.name}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <label htmlFor='emailInput'>
                        Email:
                    </label>
                    <input
                        id='emailInput'
                        name='email'
                        type='text'
                        placeholder='Please type your email'
                        value={this.state.email}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <label htmlFor='zipcodeInput'>
                        Zipcode:
                    </label>
                    <input
                        id='zipcodeInput'
                        name='zipcode'
                        type='text'
                        placeholder='Please type your zipcode'
                        value={this.state.zipcode}
                        onChange={(e) => this.handleChange(e)}
                    />
                    <label htmlFor='dateInput'>
                        Date:
                    </label>
                    <input
                        id='dateInput'
                        name='date'
                        type='date'
                        value={this.state.date}
                        onChange={(e) => this.handleChange(e)}
                    />
                </form>
            </div>
        )
    }
}

export default ClassComponentForm