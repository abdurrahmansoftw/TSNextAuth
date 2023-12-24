'use client';
import { CldUploadWidget } from 'next-cloudinary';


const UploadPage = () => {
    return (
        <div>
            <CldUploadWidget  uploadPreset='enijs2wf'>
                {({
                    open
                }) => <button className='btn btn-primary' onClick={() =>open()}>Upload files</button>}
            </CldUploadWidget>
        </div>
    );
};

export default UploadPage;