"use client"
import React from "react"

export default function button() {
  return (
    <button className='styles.logout'
    onClick={()=>{console.log("LOGOUT")}}>
    Logout
    </button>
    )
}
