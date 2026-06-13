'use server'

import { revalidatePath } from "next/cache"
import { serverMutation } from "../core/server"

export const createCompany = async (newCompanyData) =>{
    return await serverMutation('/api/companies', newCompanyData)
}

export const updateCompany = async (id, data) => {
    const result = await serverMutation(`/api/companies/${id}`, data, 'PATCH');
    revalidatePath('/dashboard/admin/companies');
    revalidatePath('/dashboard/recruiter/post-job');
    return result;
}




// export const createCompany = async (newCompanyData) => {
//     const res = await fetch(`${baseUrl}/api/companies`, {
//         method: 'POST',
//         headers: {
//             'content-Type' : 'application/json'
//         },
//         body: JSON.stringify(newCompanyData)
//     })
//     return res.json()
// }