'use client';

import { useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
    const {status, data: session} = useSession();
    
    return (
        <div className='flex p-5 space-x-3'>
            <Link href= '/' className="mr-5"> next.ts </Link>
            <Link href= '/users' className="mr-5"> Users </Link>

            {status === 'loading' && <div> Loading... </div>}

            {status === 'authenticated' && <div>
                {session.user!.name}

            <Link href='/api/auth/signout' className="ml-5">Sing Out</Link>
            </div>  }

            {status === 'unauthenticated' && <Link href= '/api/auth/signin' className="mr-5"> Login </Link>}
               
        </div>
    );
};

export default Navbar;