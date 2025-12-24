import { games } from '@/src/data/games';
import React from 'react'

type GameProps = {
    params: Promise<{ id: string }>;
};

export const generateMetadata = async ({params}: GameProps) => {
    const {id} = await params;
    return {title: `Game: ${id}`};
};

const Games = async ({ params }: GameProps) => {
    // const { all } = await params;
    // console.log("-------------", all);
    // const [slug, categories] = all;
    // const item = games.find(g => g.slug === slug && g.category === categories);

    // if (!item) return <h1>Game not found!</h1>
    const {id} = await params;

    return (
        <div> 
            {/* <img src={item.image} alt="" /> */}
            Game ID: {id}
        </div>
    )
}

export default Games