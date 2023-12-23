

interface Props {
    params: {id:number, photoId: number}

}

const PhotoPage = ({params: {id, photoId}}:Props) => {
    return (
        <div>
            <h1>Props {id}, {photoId}</h1>
        </div>
    );
};

export default PhotoPage;