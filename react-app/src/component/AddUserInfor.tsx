import React, { useState } from 'react';

const AddUserInfor = (props) => {

    const [name, setName] = useState('')
    const [address, setAddress] = useState('Martial Art Dojo')
    const [age, setAge] = useState('')
    // state = {
    //     name: '',
    //     address: 'Martial Art Dojo',
    //     age: ''
    // }


    const handleOnSubmit = (event) => {
        event.preventDefault();
        // props tu cha truyen xuong
        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100 + 1) + '-random',
            name: name,
            age: age
        })
    };
    // handleOnSubmit = (event) => {
    //     event.preventDefault();
    //     // console.log(this.state)

    //     this.props.handleAddNewUser({
    //         id: Math.floor(Math.random() * 100 + 1) + '-random',
    //         name: this.state.name,
    //         age: this.state.age
    //     });

    // }

    const handleOnChangeName = (event) => {
        setName(event.target.value)
        // this.setState({
        //     name: event.target.value,
        // })
    }

    const handleOnChangeAge = (event) => {
        // console.log(event.target.value);
        setAge(event.target.value)
        // this.setState({
        //     age: event.target.value,
        // })
    }

    return (
        <>
            my name is {name} and I'm from {address}. I'm {age}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name:</label>
                <br />
                <input
                    value={name}
                    onChange={(event) => handleOnChangeName(event)}
                    type="text" />
                <br /><br />
                <label>Your age:</label>
                <br />
                <input
                    value={age}
                    onChange={(event) => handleOnChangeAge(event)}
                    type="text" />
                <button>submit</button>
            </form>
        </>
    )
}



export default AddUserInfor;