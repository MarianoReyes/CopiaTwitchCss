import React, { useState } from 'react';
import '/public/css/sidebar.css'
import SidebarNormal from './sidebar_normal.js';
import SiderbarCollapsed from './sidebar_colapsado.js'

export default function Sidebar (){

    const[collapsed,setCollapsed] = useState(false)

    const sidebarToggle = () => {
        setCollapsed(!collapsed)
    }
    
    if (collapsed){
        return(
            <SiderbarCollapsed sidebarToggle={sidebarToggle}/>
            

        )
    }

    return (
        
        <SidebarNormal sidebarToggle={sidebarToggle}/>

    );
}