import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    
    render() {
        const myInfor= ['ab', 'c','d']
        return (
            <div>
                <UserInfor></UserInfor>
                <br /><br />
                <DisplayInfor name='Hoi Dan IT' age='27' />
                <hr />
                <DisplayInfor name='Loi Luong' age={30} myInfor={myInfor} />
            </div>
        );
    }
}

export default MyComponent;