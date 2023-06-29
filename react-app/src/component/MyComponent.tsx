import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
// import AddUserInfor2 from "./AddUserInfor2";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {

//     state = {
//         listUsers: [
//             { id: 1, name: 'Hoi Dan IT', age: '15' },
//             { id: 2, name: 'Mark', age: '47' },
//             { id: 3, name: 'Al', age: '30' },
//         ]
//     }

//     handleAddNewUser = (userObject) => {
//         // console.log('>>> Check data from parent ', userObject);
//         this.setState({
//             listUsers: [userObject, ...this.state.listUsers]
//         })
//     }

//     handleDeleteUser = (userId) => {
//         let listUserClone = [...this.state.listUsers];
//         listUserClone = listUserClone.filter(item => item.id !== userId);
//         this.setState({
//             listUsers: listUserClone
//         })
//     }
//     render() {
//         //DRY -> 'DON'T REPEAT YOURSELF'
//         return (
//             <div>
//                 <AddUserInfor
//                     handleAddNewUser={this.handleAddNewUser}
//                 />
//                 <AddUserInfor2></AddUserInfor2>
//                 <br /><br />
//                 <DisplayInfor
//                     listUsers={this.state.listUsers}
//                     handleDeleteUser={this.handleDeleteUser}
//                 />
//             </div>
//         );
//     }
// }

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

    return (
        < div >
            <AddUserInfor
                handleAddNewUser={handleAddNewUser}
            />
            <br /><br />
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </div >
    )

}

export default MyComponent;