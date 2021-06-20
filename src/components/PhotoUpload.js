import React, {useCallback, useState} from "react";
import {useDropzone} from 'react-dropzone';
import {Image} from 'cloudinary-react';
import style from "../css_modules/photoUpload.module.css";
import {FaPlus} from "react-icons/all";
import {CLOUD_NAME, CLOUD_UPLOAD_PRESET} from "../utils/Constants";

const PhotoUpload = (props) => {

    const [uploadedFiles, setUploadedFiles] = useState([]);

    const onDrop = useCallback(async (acceptedFiles) => {
        console.log(acceptedFiles);
        const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;

        acceptedFiles.forEach(async (acceptedFile) => {
            const formData = new FormData();
            formData.append("file", acceptedFile);
            formData.append('upload_preset', CLOUD_UPLOAD_PRESET);

            const response = await fetch (url, {
                method: 'POST',
                body: formData
            });
            const data = await response.json();
            console.log(data);
            props.addImageUrl(data.secure_url);

            setUploadedFiles(old => [...old, data]);
        });
    }, []);

    const {getRootProps, getInputProps, isDragActive} = useDropzone({
        onDrop,
        accepts: "image/*",
        multiple: false
    });

    return (
        <>
            <div {...getRootProps()} className={`${style.dropzone} ${isDragActive ? style.active : null}`}>
                <input {...getInputProps()}/>
                <FaPlus/> Add photo
            </div>

            <ul className={style.addPhoto}>
                {uploadedFiles.map ((file) => (
                    <li className={style.liPhoto} key={file.public_id}>
                        <Image cloudName={CLOUD_NAME} publicId={file.public_id} width="300" crop="scale"/>
                    </li>
                ))}
            </ul>
        </>
    );


};

export default PhotoUpload;