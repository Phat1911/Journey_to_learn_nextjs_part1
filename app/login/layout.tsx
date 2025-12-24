import Link from 'next/link'
import React from 'react'

const Layout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div>
        <ul>
            <li><Link href='/login/Admin'>Login for admin</Link></li>
            <li><Link href='/login/User'>Login for regular user</Link></li>
        </ul>
        {children}
    </div>
  )
}

export default Layout