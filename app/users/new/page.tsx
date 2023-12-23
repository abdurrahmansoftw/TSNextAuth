'use client'

import { useRouter } from "next/navigation";


const page = () => {
const router  = useRouter();
    return (
        <div>
           <button className="btn btn-primary" onClick={() => { router.push('/')} }> Create </button>
        </div>
    );
};

export default page;