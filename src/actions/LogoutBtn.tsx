"use client"
import React from 'react'
import Logout from './Authentication'

const LogoutBtn = () => {

    const handleLogout = async () => {
        await Logout()
    }
    return (
        <span className='text-red-500  bg-transparent' onClick={handleLogout} >Logout</span>
    )
}

export default LogoutBtn
