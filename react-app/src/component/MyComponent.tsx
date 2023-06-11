import React from "react";

class MyComponent extends React.Component {
    state = {
        name: 'Loi',
        address: 'Martial Art Dojo',
        age: 25
    }
    handleClick(event) {
        // console.log(event.target)
        console.log('My name is ', this.state.name);
        this.setState({
            name: 'Loi the Boy',
            age: Math.floor(Math.random() * 100 + 1)
        })
    }

    handleOnMouseOver(event) {
        console.log(event.pageX)
    }
    render() {
        return (
            <div>
                my name is {this.state.name} and I'm from {this.state.address}. I'm {this.state.age}
                <button onClick={(event) => {this.handleClick(event)} }>Click Me</button>
                <button onMouseOver={this.handleOnMouseOver}>Hover Me</button>
            </div>
        );
    }
}

export default MyComponent;