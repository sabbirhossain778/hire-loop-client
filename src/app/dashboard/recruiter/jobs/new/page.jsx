import React from 'react';
import PostJobForm from './PostJobForm';
import { getLoggedInRecruiterCompany } from '@/lib/api/companies';

const jobPostPage = async () => {
    const company = await getLoggedInRecruiterCompany();
    console.log('jobPostPage', company);
    
    return (
        <div>
            <PostJobForm company={company}></PostJobForm>
        </div>
    );
};

export default jobPostPage;