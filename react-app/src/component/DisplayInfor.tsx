import React, { useState } from "react";
import './DisplayInfor.scss'
// Stateful
// class DisplayInfor extends React.Component {

//     render() {
//         console.log('>>> call me render')
//         const { listUsers } = this.props;


//         return (
//             <div className="display-infor-container">

//                 {true&&
//                     <div>
//                         {listUsers.map((user, index) => {
//                             // console.log(listUsers)
//                             return (
//                                 <div key={user.id} className={(+user.age > 18) ? 'red' : 'blue'}>
//                                     <div>
//                                         <div>My name's {user.name}</div>
//                                         <div>My age's {user.age}</div>
//                                     </div>
//                                     <div>
//                                         <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
//                                     </div>
//                                 </div>

//                             )
                        
//                         })}
//                     </div>
//                 }
//             </div>
//         )
//     }
// }

//Stateless
const DisplayInfor = (props) => {
    const { listUsers } = props;    
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const hangleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }
    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => hangleShowHideListUser()}>{isShowHideListUser? 'Hide':'Show' } list user</span>
                </div>
            {isShowHideListUser &&
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
                                        <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                    </div>
                                </div>

                            )
                        
                        })}
                    </div>
                }
            </div>
        )

}
export default DisplayInfor;