import React, { useEffect, useState } from "react";
import './DisplayInfor.scss'

// interface props {

// }
//Stateless
const DisplayInfor = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);
    const hangleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser)
    }
    console.log('>>> Call me render')
    useEffect(
        () => {
            if (listUsers.length === 0) {
                alert('You deleted all the user!')
            }
            setTimeout(() => {
                document.title = 'Loi the boy coding'
            }, 3000);
            console.log('>>> call me useEffect')
        }, [listUsers]
    )
    return (
        <div className="display-infor-container">
            <div>
                <span onClick={() => hangleShowHideListUser()}>{isShowHideListUser ? 'Hide' : 'Show'} list user</span>
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