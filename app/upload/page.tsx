'use client';

import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { useState, } from 'react';

interface CloudinaryUploadResult {
    public_id: string;
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState('');
    return (
        <>
        {publicId && <CldImage src={publicId} height={270} width={180} alt='img' />}

            <CldUploadWidget 
             uploadPreset='enijs2wf'
            onUpload={(result) => {
                if (result.event === 'success') return
                const info = result.info as CloudinaryUploadResult;
                setPublicId(info.public_id);
            }}
            >
                {({ open}) => <button className='btn btn-primary' onClick={() =>open()}>Upload files</button>}
            </CldUploadWidget>
        </>
    );
};

export default UploadPage; 