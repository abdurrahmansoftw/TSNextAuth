interface Props {
    params: {id:number, photoId: number}
}

const UserDetailPage = ({params: {id, photoId}}: Props) => {
    return (
        <div>
            <h1>UserDetailPage {id} {photoId} </h1>
        </div>
    );
};

export default UserDetailPage;