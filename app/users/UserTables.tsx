import { sort } from "fast-sort";
import Link from "next/link";

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    sortOrder: string

}

const UserTables = async ({sortOrder} : Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/userss')
    const users: User[] = await res.json()

    const sortedUser = sort(users).asc(sortOrder === 'email' ? user => user.email : user => user.name )

    return (
       
              <table className="table table-bordered ">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>
                            <Link href="/users?sortOrders=name">Name </Link>
                        </th>
                        <th>
                            <Link href="/users?sortOrders=email">Email </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                {sortedUser.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
                </tbody>
               
            </table>
       
    );
};

export default UserTables;