
import React, { useState } from 'react'
import MadalCreateUser from './MadalCreateUser'
import { FcPlus } from 'react-icons/fc'

const ManageUser = () => {

    return (
        <div className='manage-user-container'>
            <div className="title">
                Manage users
            </div>
            <div className="users-content">
                <div className='btn-add-new'>
                    <button className='btn btn-primary'
                    ><FcPlus /><MadalCreateUser heading='Add new User' /></button>

                </div>
                <div className='table-users-container'>
                    table users
                </div>

            </div>
        </div>
    )
}

export default ManageUser