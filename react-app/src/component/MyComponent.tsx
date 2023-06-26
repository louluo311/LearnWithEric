import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    
    state = {
        listUsers: [
            { id: 1, name: 'Hoi Dan IT', age: '15' },
            {id: 2, name : 'Mark', age : '47' },
            {id: 3, name : 'Al', age : '30' },
        ]
    }

    handleAddNewUser = (userObject) => {
        // console.log('>>> Check data from parent ', userObject);
        this.setState({
            listUsers: [userObject, ...this.state.listUsers]
        })
    }

    handleDeleteUser = (userId) => {
        let listUserClone = [...this.state.listUsers];
        listUserClone = listUserClone.filter(item => item.id !== userId);
        this.setState({
            listUsers: listUserClone
        })
    }
    render() {
        //DRY -> 'DON'T REPEAT YOURSELF'
        return (
            <div>
                <AddUserInfor
                    handleAddNewUser={this.handleAddNewUser}
                />
                <br /><br />
                <DisplayInfor
                    listUsers={this.state.listUsers}
                    handleDeleteUser = {this.handleDeleteUser}
                />
            </div>
        );
    }
}

export default MyComponent;