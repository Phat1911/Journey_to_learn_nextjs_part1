"use client"

import { useRouter } from 'next/navigation';
import React from 'react'

interface Person {
    name: string;
    age: number;
    avt: string;
    job: string;
};

const People: Person[] = [
    { name: "phat", age: 18, avt: "https://avatars.githubusercontent.com/u/139056014?s=400&u=3749e90f1ed1e9b7a5309af3bb27efa0ae9dd454&v=4", job: "husband" },
    { name: "thu", age: 18, avt: "https://scontent.fhan5-7.fna.fbcdn.net/v/t39.30808-6/582323287_840249681986614_6806827314927573160_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=4Z2ifIbWhNgQ7kNvwGjY46K&_nc_oc=AdmPiGs2zjwdDnRjDj272apWzKRXzO1UriKGMcjDqN5RD9g9z0TpbaWSdkg2TeTN9HXtq1b1q2qH00nJ2irv1HNQ&_nc_zt=23&_nc_ht=scontent.fhan5-7.fna&_nc_gid=g9--yTMudigQ-OIzucjibg&oh=00_AfnKELDX0lJdYTcIH_2lKxL9Kf8_r8uakBxgT1hMK0F7oQ&oe=694E936B", job: "wife" }
];

const User = async ({ params }: { params: {user: string} }) => {
    const router = useRouter();
    const { user } = await params;
    const p: Person | undefined = People.find(p => p.name === user);

    return (
        <div> 
            <h1>Info about: {user}<br />
                {p &&
                    <div>
                        <img src={p.avt} alt="" width={100}/> <br />
                        <p>Name: {p.name}</p> <br />
                        <p>Age: {p.age}</p> <br />
                        <p>Job: {p.job}</p> 
                    </div>
                }
            </h1>
            <br />
            <button onClick={() => router.back()}>Back</button>
        </div>
    )
}

export default User