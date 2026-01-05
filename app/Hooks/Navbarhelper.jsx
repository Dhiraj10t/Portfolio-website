"use client"
import React from 'react'
import { useContext,createContext,useEffect,useState } from 'react'
const navbarContext=createContext()
const Navbarhelper = ({children}) => {
    const [Navbar, setNavbar] = useState({
        up:true,right:false,down:false,left:false
    })
    const handleUp=(value)=>{
        if(value=="L"){
            setNavbar((prev)=>({
                ...prev,up:false,left:true
            }))
        }else if(value=="R"){
            setNavbar((prev)=>({
                ...prev,up:false,right:true
            }))
        }
    }
    const handleLeft=(value)=>{
        if(value=="U"){
            setNavbar((prev)=>({
                ...prev,up:true,left:false
            }))
        }else if(value=="D"){
            setNavbar((prev)=>({
                ...prev,down:true,left:false
            }))
        }
    }

    const handleDown=(value)=>{
        if(value=="L"){
            setNavbar((prev)=>({
                ...prev,down:false,left:true
            }))
        }else if(value=="R"){
            setNavbar((prev)=>({
                ...prev,down:false,right:true
            }))
        }
    }
    const handleRight=(value)=>{
        if(value=="U"){
            setNavbar((prev)=>({
                ...prev,up:true,right:false
            }))
        }else if(value=="D"){
            setNavbar((prev)=>({
                ...prev,down:true,right:false
            }))
        }
    }

  return (
        <navbarContext.Provider value={{handleDown,handleLeft,handleRight,handleUp,Navbar}}>
            {children}
        </navbarContext.Provider>
    )
}

export default Navbarhelper

export const useNavbar = () => useContext(navbarContext)
