import React from "react";
import './DisplayInfor.scss'
import itachi from './../itachi1.jpg'
class DisplayInfor extends React.Component {
    constructor(props) {
        console.log(">>> call constructor: 1")
        super(props);
        this.state = {
            isShowListUser: true
        }
    }
    // state = {
    //     isShowListUser: true
    // }

    componentDidMount() {
        console.log('>>> Call me component did mount')
        setTimeout(() => {
            document.title = `What's your name?`
        }, 3000)
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log('>>> Call me component did update', this.props, prevProps)
        if (this.props.listUsers !== prevProps.listUsers) {
            if (this.props.listUsers.length === 5) {
                alert('You got 5 users')
            }
        }
    }

    // componentDidUpdate() {
    //     console.log('>>> Call me component did update')
    // }
        
    
    handleHideShowUser = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        console.log('>>> call me render')
        const { listUsers } = this.props;


        return (
            <div className="display-infor-container">
                {/* <img src={itachi} /> */}
                <div>
                    <span onClick={() => this.handleHideShowUser()}>{this.state.isShowListUser? 'Hide':'Show'} list user</span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user, index) => {
                            // console.log(listUsers)
                            return (
                                <div key={user.id} className={(+user.age > 18) ? 'red' : 'blue'}>
                                    <div>
                                        <div>My name's {user.name}</div>
                                        <div>My age's {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                </div>

                            )
                        
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default DisplayInfor;