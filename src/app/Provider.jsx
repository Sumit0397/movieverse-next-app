"use client";

import React from 'react'

import { ThemeProvider } from 'next-themes';

const Provider = ({children}) => {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
        <div>
            {children}
        </div>
    </ThemeProvider>
  )
}

export default Provider
