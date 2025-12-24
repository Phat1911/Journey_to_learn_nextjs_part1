import React from 'react'

const Login = async ({params}: {params: {slug: string}}) => {
    const {slug} = await params;

    return (
        <div>Login as an {slug}</div>
    )
}

export default Login