// import { headers } from "next/headers";
// import { adminClient } from "better-auth/client/plugins"
// import { authClient } from "@/src/lib/auth-client";


// export const getUsersList = async () =>{
//     const users = await authClient.admin.listUsers({
//     query: {
//         sortBy: "createdAt",
//         sortDirection: "desc"
//     },
//      headers: await headers(),
// });
// console.log('users', users);

// return users;
// }



import { headers } from "next/headers";
import { auth } from "../auth";

export const getUsersList = async () => {
    // console.log('get Users List',1233);
    
    const users = await auth.api.listUsers({
        query: {
            sortBy: "createdAt",
            sortDirection: "desc"
        },
        // This endpoint requires session cookies.
        headers: await headers(),
    });
    // console.log('get Users List',users);
    
    return users;
}
