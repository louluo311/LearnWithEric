import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Loi',
        address: 'Martial Art Dojo',
        age: 25
    }
    handleClick() {
        // console.log(event.target)
        console.log('My name is ', this.state.name)
    }

    handleOnMouseOver(event) {
        console.log(event.pageX)
    }
    render() {
        return (
            <div>
                my name is {this.state.name} and I'm from {this.state.address}
                <button onClick={this.handleClick}>Click Me</button>
                <button onMouseOver={this.handleOnMouseOver}>Hover Me</button>
            </div>
        );
    }
}

export default MyComponent;