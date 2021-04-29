export const login = 'Login';
export const registration = 'Registration';

export const profileData = 'ProfileData';
export const activities = 'Activities';

export const urlLogin = 'https://propets-gateway.herokuapp.com/auth/api/auth/signin';
export const urlRegistration = 'https://propets-gateway.herokuapp.com/auth/api/auth/signup';
export const profileName = 'https://propets-gateway.herokuapp.com/auth/api/auth/getProfileName';
export const urlResetPassword = 'https://propets-gateway.herokuapp.com/auth/api/auth/user/resetPassword';
export const urlChangePassword = 'https://propets-gateway.herokuapp.com/auth/api/auth/user/changePassword';
/*export const localChangePassword = 'http://192.168.31.25:8080/api/auth/user/changePassword';*/
export const authenticate = 'https://propets-gateway.herokuapp.com/auth/api/auth/authenticate';
export const urlUploadingPhoto = 'https://api.cloudinary.com/v1_1/dachgyj58/auto/upload';
export const urlSaveLostPet = 'https://propets-gateway.herokuapp.com/lostAndFound/saveLostPet';

/*export const urlLogin = 'https://propets-auth-service.herokuapp.com/api/auth/signin';
export const urlRegistration = 'https://propets-auth-service.herokuapp.com/api/auth/signup';
export const profileName = 'https://propets-auth-service.herokuapp.com/api/auth/getProfileName';
export const urlResetPassword = 'https://propets-auth-service.herokuapp.com/api/auth/user/resetPassword';
export const urlChangePassword = 'https://propets-auth-service.herokuapp.com/api/auth/user/changePassword';
/!*export const localChangePassword = 'http://192.168.31.25:8080/api/auth/user/changePassword';*!/
export const authenticate = 'https://propets-auth-service.herokuapp.com/api/auth/authenticate';
export const urlUploadingPhoto = 'https://api.cloudinary.com/v1_1/dachgyj58/auto/upload';*/
/*export const urlSaveLostPet = 'https://propets-lostandfoundservice.herokuapp.com/saveLostPet';  //разбудит lostandfoundservice*/

/*
accessToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaW5ldHNrSSIsImlhdCI6MTYxNzE0Mjk5OSwiZXhwIjoxNjE3MjI5Mzk5fQ.e4tsYk_MJVaEu3MDrSrvGmt5lHKftUXFyHFX7d4p4VqNLKogDQb6rVk5U9J8Ljj-hqPe4lD3-QiRvQLGVBcIPQ';
tokenType: "Bearer" */

/*
//from cloudinary
export default {
    cloud_name: 'dachgyj58',
    upload_preset: 'qkr2cecu' //Create an unsigned upload preset and update this
};
export const PHOTOS_FETCHED = 'PHOTOS_FETCHED';
export const PHOTOS_UPLOADED = 'PHOTOS_UPLOADED';
export const DELETE_UPLOADED_PHOTO = 'DELETE_UPLOADED_PHOTO';
export const UPDATE_UPLOADED_PHOTO = 'UPDATE_UPLOADED_PHOTO';*/

export const CLOUD_NAME = 'dachgyj58';
export const CLOUD_UPLOAD_PRESET = 'photoLi';
/*export const CLOUD_API_KEY = '371978636849623';*/
/*export const CLOUD_API_SECRET = 'eEEni1GWZ-2x-bPqgf1hiRHPwfE';*/

/*const cloudinary = require("cloudinary").v2;

export default async (_req, res) => {
    res.statusCode = 200;
    res.json({ signature: 'photo', timestamp: 12345 });
};*/
