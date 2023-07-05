import React, { useState } from 'react'
import ListGroup from "./ListGroup";


const AddThingToDo = (props) => {
    const [thing, setThing] = useState('')

    const handleOnSubmit = (event) => {
        event.preventDefault();
        // props tu cha truyen xuong
        props.handleAddNewThing({
            id: Math.floor(Math.random() * 100 + 1) + '-random',
            // name: name,
            thing: thing,
        })
    };
    let todoList = ['Coding', 'Martial Art', 'Meditation']


    const handleOnChangeThing = (event) => {
        // setName(event.target.value)
        setThing(event.target.value)

        // this.setState({
        //     name: event.target.value,
        // })
    }

    const handleSelectItem = (item: string) => {
        console.log(item)
    }

    return (
        <>
            <h1>To Do List</h1>

            <h2>I want to Focus on {thing} today</h2>
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>What's your FOCUS ON today?</label>
                <br />
                <input
                    value={thing}
                    onChange={(event) => handleOnChangeThing(event)}
                    type="text" />
                <button>submit</button>
            </form>
            <ListGroup items={todoList} heading='Todo' onSelectItem={handleSelectItem}></ListGroup>

        </>
    )
}


export default AddThingToDo