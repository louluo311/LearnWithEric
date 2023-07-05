import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
import Cards from "./Cards"
import AddThingToDo from "./AddThingToDo";
import DisplayThingToDo from "./DisplayThingToDo";
import AddThingToDo2 from "./AddThingToDo2";
import ListGroup from "./ListGroup";

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: 'Hoi Dan IT', age: '15' },
        { id: 2, name: 'Mark', age: '47' },
        { id: 3, name: 'Al', age: '30' },
    ])

    const handleAddNewUser = (userObject) => {
        setListUsers([userObject, ...listUsers])
    }

    const handleDeleteUser = (userId) => {
        let listUserClone = [...listUsers];
        listUserClone = listUserClone.filter(item => item.id !== userId);
        setListUsers(listUserClone)

    }


    const [listThings, setListThings] = useState([
        { id: 1, thing: 'Coding' },
        { id: 2, thing: 'Martial Art' },
        { id: 3, thing: 'Meditation' },
    ])

    const handleAddNewThing = (userObject) => {
        setListThings([userObject, ...listThings])
    }

    const handleDeleteThing = (userId) => {
        let listThingsClone = [...listThings];
        listThingsClone = listThingsClone.filter(item => item.id !== userId);
        setListThings(listThingsClone)

    }

    // items of listgroup && props
    let items = ['Alameda', 'San Leandro', 'Oakland', 'San Jose'];



    let food = ['chicken', 'duck', 'lechon', 'xiu mai'];

    // select item from listgroup
    const handleSelectItem = (item: string) => {
        console.log(item)
    }
    return (
        < div >
            {/* <AddUserInfor
                handleAddNewUser={handleAddNewUser}
            />
            <br /><br />
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            /> */}
            {/* <Cards></Cards> */}
            <AddThingToDo
                handleAddNewThing={handleAddNewThing}>

            </AddThingToDo>
            <DisplayThingToDo
                listThings={listThings}
                handleDeleteThing={handleDeleteThing}
            />
            <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}></ListGroup>
            {/* <ListGroup items={food} heading='Food Menu' onSelectItem={handleSelectItem}></ListGroup> */}

        </div >
    )

}

export default MyComponent;