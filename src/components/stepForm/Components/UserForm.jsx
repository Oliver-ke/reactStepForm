import React from 'react';
import FormUserDetail from './FormUserD';
import FormPersonalD from './FormPersonalD';
import Confarm from './Confarm';
import Success from './Success';


class UserForm extends React.Component{
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''

    }

    // proceed to next step
    nextStep = () =>{
        const {step} = this.state;
        this.setState({
            step: step + 1
        });
    }

    // previous step
    prevStep = () =>{
        const {step} = this.state;
        this.setState({
            step: step - 1
        });
    }

    // handle fields change
    handleChange = input => e =>{
        this.setState({[input]: e.target.value});
    }
    render(){
        const {step} = this.state;
        const {firstName, lastName, email, occupation, city, bio} = this.state;
        const values = {
            firstName, lastName, email, occupation, city, bio
        }
        switch (step){
            case 1: 
            return(
               <FormUserDetail nextStep = {this.nextStep}
               handleChange = {this.handleChange}
               values = {values} />
            )
            case 2:
            return (
             <FormPersonalD nextStep = {this.nextStep}
             handleChange = {this.handleChange}
             prevStep = {this.prevStep}
             values = {values} />
            )

            case 3:
            return(
               <Confarm values ={values}
               nextStep={this.nextStep}
               prevStep = {this.prevStep}
               />
            )

            case 4:
            return(
                <Success values
                />
            )
        }
    }
}

export default UserForm;
