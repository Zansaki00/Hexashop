import React from "react"
import "./globals.css"
import Footer from './components/Footer/Footer'
import Navbar from './components/Nav/Navbar'
import { ThemeProvider } from "./context/ThemeContext"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&display=swap"
          rel="stylesheet"
        />
        
      </head>
      <body className="montserrat-font">
        <ThemeProvider>
          <div className="container">
            <Navbar />
            <div className="FullHeight"></div>
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

