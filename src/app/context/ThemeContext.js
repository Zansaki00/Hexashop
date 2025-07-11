"use client"
import React from "react"
import { createContext , useState } from "react"

export const ThemeContext=createContext()

export const ThemeProvider =({children})=>{
    const [mode,setmode]=useState('dark')

    const toggle =() =>{ 
        setmode(prev => (prev=== "dark"?"light":"dark"))
    }

    return(
        <ThemeContext.Provider value={{toggle, mode}}>
        <div className={`theme ${mode}`}>
            {children}
        </div>
        </ThemeContext.Provider>
    )

}