import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    
    state = {
        listUsers: [
            { id: 1, name: 'Hoi Dan IT', age: '27' },
            {id: 2, name : 'Mark', age : '47' },
            {id: 3, name : 'Al', age : '37' },
        ]
    }

    render() {
        //DRY -> 'DON'T REPEAT YOURSELF'
        return (
            <div>
                <UserInfor></UserInfor>
                <br /><br />
                <DisplayInfor
                    listUsers={this.state.listUsers}

                />
            </div>
        );
    }
}

export default MyComponent;