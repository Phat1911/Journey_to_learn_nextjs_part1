import { redirect } from 'next/navigation'
import React from 'react'

const OldPage = () => {
    redirect("/new-page");

    return (
        <div>OldPage</div>
    )
}

export default OldPage