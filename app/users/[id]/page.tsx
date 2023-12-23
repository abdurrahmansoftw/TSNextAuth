import { notFound } from "next/navigation";

interface Props {
    params: {id:number, photoId: number}
}

const UserDetailPage = ({params: {id, photoId}}: Props) => {
    if (id > 10) notFound();
    return (
        <div>
            <h1>UserDetailPage {id} {photoId} </h1>
        </div>
    );
};

export default UserDetailPage;