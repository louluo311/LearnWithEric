
import React from 'react'
import MadalCreateUser from './MadalCreateUser'

const ManageUser = () => {
    return (
        <div className='manage-user-container'>
            <div className="title">
                Manage users
            </div>
            <div className="users-content">
                <div>
                    <button>Add new users</button>

                </div>
                <div>
                    table users
                </div>
                <MadalCreateUser />
            </div>
        </div>
    )
}

export default ManageUser