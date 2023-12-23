'use client'

import { useRouter } from "next/navigation";


const page = () => {
// eslint-disable-next-line react-hooks/rules-of-hooks
const router  = useRouter();
    return (
        <div>
           <button className="btn btn-primary" onClick={() => { router.push('/')} }> Create </button>
        </div>
    );
};

export default page;