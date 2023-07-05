import React, { useState } from 'react'

const AddThingToDo2 = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const [thing, setThing] = useState('')

    const handleOnChangeThing = (event) => {
        setThing(event.target.value);
    }
    return (
        <>
            <h1>To Do List</h1>
            <h2>I want to FOCUS ON today</h2>
            <form onSubmit={(event) => { handleSubmit(event) }}>
                <label>What I FOCUS ON today is {thing}</label>
                <br />
                <input
                    value={thing}
                    onChange={(event) => { handleOnChangeThing(event) }}
                    type="text" />
                <button>Submit</button>
            </form>
        </>
    )
}

export default AddThingToDo2