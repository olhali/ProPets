import React, {useCallback, useState} from "react";
import {useDropzone} from 'react-dropzone';
import {Image, Video, Transformation} from 'cloudinary-react';
import style from "../css_modules/photoUpload.module.css";
import {FaPlus} from "react-icons/all";
import {CLOUD_API_KEY, CLOUD_NAME, CLOUD_UPLOAD_PRESET} from "../utils/Constants";

const PhotoUpload = (props) => {

    const [uploadedFiles, setUploadedFiles] = useState([
        /*{
            access_mode: "public",
            asset_id: "f017844e496bdc3ed5d349cc1d181566",
            bytes: 339492,
            created_at: "2021-04-22T21:46:11Z",
            etag: "949f63558b868f2d887ef73a08f8763a",
            format: "png",
            height: 496,
            original_filename: "pngwing.com",
            placeholder: false,
            public_id: "PhotoCloudinary/de73etsqpijocfc1cz3u",
            resource_type: "image",
            secure_url: "https://res.cloudinary.com/dachgyj58/image/upload/v1619127971/PhotoCloudinary/de73etsqpijocfc1cz3u.png",
            signature: "3d63c8cb3ba2a5b4367281f5bdb702c33890b34a",
            tags: [],
            type: "upload",
            url: "http://res.cloudinary.com/dachgyj58/image/upload/v1619127971/PhotoCloudinary/de73etsqpijocfc1cz3u.png",
            version: 1619127971,
            version_id: "f1cbcb64f178e32826c0f19030b902ec",
            width: 488
        }*/
    ]);

    const onDrop = useCallback(async (acceptedFiles) => {
        console.log(acceptedFiles);                               //[File] => {lastModifiedDate: Mon Aug 31 2020 15:48:44 GMT+0300 (Израиль, летнее время), name: "AVcCnGDxHO8.jpg", path: "AVcCnGDxHO8.jpg", size: 581167, type: "image/jpeg"...}
        const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`;

        acceptedFiles.forEach(async (acceptedFile) => {
            const formData = new FormData();
            formData.append("file", acceptedFile);
            formData.append('upload_preset', CLOUD_UPLOAD_PRESET);

            /*formData.append("signature", signature);
            formData.append("timestamp", timestamp);
            formData.append("api_key", CLOUD_API_KEY);*/

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
                        {/*{file.public_id}*/}
                        <Image cloudName={CLOUD_NAME} publicId={file.public_id} width="300" crop="scale"/>
                    </li>
                ))}
            </ul>
        </>
    );


};

export default PhotoUpload;