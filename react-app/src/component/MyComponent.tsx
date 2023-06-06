import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Loi',
        address: 'Martial Art Dojo',
        age: 25
    }
    render() {
        return (
            <div>
                my name is {this.state.name}
            </div>
        );
    }
}

export default MyComponent;