import React from "react";
import './DisplayInfor.scss'
class DisplayInfor extends React.Component {
    state = {
        isShowListUser: true
    }


    handleHideShowUser = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }
    render() {
        const { listUsers } = this.props;


        return (
            <div className="display-infor-container">
                <div>
                    <span onClick={() => this.handleHideShowUser()}>{this.state.isShowListUser? 'Hide':'Show'} list user</span>
                </div>
                {this.state.isShowListUser &&
                    <div>
                        {listUsers.map((user, index) => {
                            // console.log(listUsers)
                            return (
                                <div key={user.id} className={(+user.age > 18) ? 'red' : 'blue'}>
                                    <div>My name's {user.name}</div>
                                    <div>My age's {user.age}</div>
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