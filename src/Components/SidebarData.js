import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import AddAlert from '@mui/icons-material/AddAlert';

export const SidebarData =  [

{
    title: "Home",
    icon: <HomeIcon/>,
    link: "/",
    number :  "1"
}
,
{
    title: "Add Doctor",
    icon: <MailIcon/>,
    link: "/adddoctor",
    number :  "2"
}
,
{
    title: "View Doctors",
    icon: <AirportShuttleIcon/>,
    link: "/viewdoctors",
    number :  "3"
}
,
{
    title: "Account",
    icon: <AccountCircleIcon/>,
    link: "/account",
    number :  "4"
},
{
    title: "Notification",
    icon: <AddAlert/>,
    link: "/notification",
    number :  "5"
}
,
{
    title: "Logout",
    icon: <LogoutIcon/>,
    link: "/logout",
    number :  "6"
}
]

