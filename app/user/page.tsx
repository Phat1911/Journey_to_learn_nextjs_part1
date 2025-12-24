// import { redirect } from 'next/navigation';
export const metadata = {
    title: "User Page",
    description: "This is the users page",
};

const User = async () => {
    // redirect("/colors");
    // await new Promise((resolve) => {
    //     setTimeout(() => {
    //         resolve("");
    //     }, 4000);
    // })

    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const data = await res.json();

    return (
        <div>
            {/* {data && data[0].title} */}

        </div>
    )
}

export default User