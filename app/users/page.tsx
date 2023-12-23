import Link from "next/link";
import UserTables from "./UserTables";

interface Props {
    searchParams: {sortOrder: string}
}

const UsersPage = async ({searchParams:{sortOrder}}:Props) => {

   
    return (
        <>
        <h1>Userlist</h1>
        <Link href='/users/new' className="btn"> New User  </Link>
        <UserTables  sortOrder={sortOrder} />
          
        </>
    );
};

export default UsersPage; 
