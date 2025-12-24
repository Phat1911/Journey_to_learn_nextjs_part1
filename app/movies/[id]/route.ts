import { movies } from "../db";

export async function GET (_req: Request, {params}: {params: {id: string}}) {
    const {id} = await params;
    const movie = movies.find(movie => movie.id === +id); // +id: convert id from string to number, can using Number(id) to replace
    return movie 
    ? new Response(JSON.stringify(movie))
    : new Response("Movie not found", {status: 404});
} 

export async function PATCH (req: Request, {params}: {params: {id: string}}) {
    try {
        const {id} = await params;
        const movie = movies.find(movie => movie.id === +id);

        if (!movie) return new Response("Movie not found", {status: 404});

        const body = await req.json();
        movies[+id] = {...movie, ...body};
        return new Response(JSON.stringify(movies), {status: 200});
    } catch(error) {
        return new Response(JSON.stringify({ error: "Failed to parse JSON" }), {status: 404});
    }
}

export async function DELETE (_req: Request, {params}: {params: {id: string}}) {
    try {
        const {id} = await params;
        const mId = movies.findIndex(movie => movie.id === +id);
        if (mId === -1) return new Response(JSON.stringify({error: "movie not found!"}), {status: 404});
        movies.splice(mId, 1);
        return new Response(JSON.stringify(movies), {status: 200});
    } catch (error) {
        return new Response(JSON.stringify({error: "Failed to parse JSON"}), {status: 404});
    }
}

