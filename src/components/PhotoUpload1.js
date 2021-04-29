/*
import React, {useState} from "react";

const PhotoUpload1 = (props) => {

    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState("");

    const uploadImage = async e => {
        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'photoLi');
        setLoading(true);

        const res = await fetch("https://api.cloudinary.com/v1_1/dachgyj58/image/upload",
            {
                method: 'POST',
                body: data
            });

        const file = await res.json();
        console.log(file);

        setImage(file.secure_url);
        setLoading(false);

    };

    return (
        <div>
            <h1>Upload Image</h1>
            <input type='file' name='file' placeholder='Upload an Image' onChange={uploadImage}/>

            {loading ? (<h3>Loading ...</h3>) : (<img src={image} style={{width: '300px'}}/>)}
        </div>
    )

};

export default PhotoUpload1;*/
