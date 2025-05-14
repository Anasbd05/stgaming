"use client"
import {Button} from '@/components/ui/button'
import React from 'react'
import Logout from './Authentication'

const LogoutBtn = () => {

    const handleLogout = async () => {
        await Logout()
    }
    return (
        <Button variant="destructive" onClick={handleLogout} >LogOut</Button>
    )
}

export default LogoutBtn
