"use client";

import Link from "next/link";
import { useState } from "react";
import '../globals.css';

const Layout = () => {
    const [name, setName] = useState<string> ("");

    return (
        <div>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="border" /> <br />

            <Link className="bg-teal-300" href="/analytics/revenue">Revenue</Link> <br />
            <Link className="bg-teal-300" href="/analytics/stats">Stats</Link>
        </div>
    )
}

export default Layout