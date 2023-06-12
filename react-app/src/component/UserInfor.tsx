import React from 'react';

class UserInfor extends React.Component {
    
    state = {
        name: 'Loi',
        address: 'Martial Art Dojo',
        age: 25
    }


    handleSubmit(event) {
        event.preventDefault();
        console.log('Hello', this.state.name);
    }

    handleOnChangeName = (event) => {
        // console.log(event.target.value);
        this.setState({
            name: event.target.value,
        })
    }

    handleOnChangeAge = (event) => {
        // console.log(event.target.value);
        this.setState({
            age: event.target.value,
        })
    }

    render() {
        return (
            <div>
                my name is {this.state.name} and I'm from {this.state.address}. I'm {this.state.age}
                <button onClick={(event) => {this.handleClick(event)} }>Click Me</button>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <label>Your name:</label>
                    <br />
                    <input
                        value={this.state.name}
                        onChange={(event) => this.handleOnChangeName(event)}
                        type="text" />
                    <br /><br />
                    <label>Your age:</label>
                    <br />
                    <input
                        value={this.state.age}
                        onChange={(event) => this.handleOnChangeAge(event)}
                        type="text" />
                    <button>submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfor;