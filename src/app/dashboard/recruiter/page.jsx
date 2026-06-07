'use client'
import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { useSession } from '@/lib/auth-client';
import { Briefcase, Persons, Thunderbolt, CircleCheck } from '@gravity-ui/icons';

const RecruiterPage = () => {
    const { data: session, isPending} = useSession();

    if (isPending) {
        return <div className='text-3xl flex justify-center items-center text-center'>Loading...</div>
    }

    const user = session?.user;
     console.log("Session data in RecruiterPage:", session);

     const recruiterStats = [
        { title: "Total Job Posts", value: "48", icon: Briefcase },
        { title: "Total Applicants", value: "1,284", icon: Persons },
        { title: "Active Jobs", value: "18", icon: Thunderbolt },
        { title: "Jobs Closed", value: "32", icon: CircleCheck },
    ];

    return (
        <div className='p-4'>
            <h2 className='text-2xl font-bold'>Welcome back, {user?.name}</h2>
            <DashboardStats statsData={recruiterStats} />
        </div>
    );
};

export default RecruiterPage;