import Link from "next/link";
import { Suspense } from "react";
import UserTables from "./UserTables";

interface Props {
    searchParams: {sortOrder: string}
}

const UsersPage = async ({searchParams:{sortOrder}}:Props) => {

   
    return (
        <>
        <h1>Userlist</h1>
        <Link href='/users/new' className="btn"> New User  </Link>
       
       <Suspense fallback={ <p>loading ....</p> }>
       <UserTables  sortOrder={sortOrder} />
       </Suspense>
          
        </>
    );
};

export default UsersPage; 
