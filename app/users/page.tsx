import UserTables from "./UserTables";

interface Props {
    searchParams: {sortOrder: string}
}

const UsersPage = async ({searchParams:{sortOrder}}:Props) => {

   
    return (
        <>
        <h1>Userlist</h1>
        <UserTables  sortOrder={sortOrder} />
          
        </>
    );
};

export default UsersPage;
