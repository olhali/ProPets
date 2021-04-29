import React from "react";
import style from "../css_modules/login.module.css";
import {urlSaveLostPet, urlUploadingPhoto} from "../utils/Constants";

class MiniCard extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {
            petInfo: {
                type: null,
                color: null,
                sex: null,
                height: null,
                distinction: null,
                description: null,
                location: null,
                nameProfile: null,
                date: null,
                phone: null,
                imageUrls: []
            },
            error: null
        }
    }

    getPetInfo = async (pet) => {
        try {
            const response = await fetch(`${urlSaveLostPet}`);
            const data = await response.json();
            this.setState({
                petInfo: {
                    type: data.type,
                    color: data.color,
                    sex: data.sex,
                    height: data.height,
                    distinction: data.distinction,
                    description: data.description,
                    location: data.location,
                    nameProfile: data.nameProfile,
                    date: data.date,
                    phone: data.phone,
                    imageUrls: data.imageUrls
                }
            });
        } catch (e) {
            this.setState({
                /!*petInfo: {
                    type: null,
                    color: null,
                    sex: null,
                    height: null,
                    distinction: null,
                    description: null,
                    location: null,
                    nameProfile: null,
                    date: null,
                    phone: null,
                    imageUrls: null
                },*!/
                error: alert('Please, fill in required fields!')
            })
        }
    };*/

    render() {
        return (
            <div>
                <p>Pet photo: </p>

               {/* <p>Type: {this.state.petInfo.type}</p>

                <p>Color: {this.state.petInfo.color}</p>
                <p>Sex: {this.state.petInfo.sex}</p>
                <p>Height/ cm: {this.state.petInfo.height}</p>

                <p>Distinctive features: {this.state.petInfo.distinction}</p>

                <p>Description: {this.state.petInfo.description}</p>

                <p>Location: {this.state.petInfo.location}</p>

                <p>Name profile: {this.state.petInfo.nameProfile}</p>
                <p>Date: {this.state.petInfo.date}</p>
                <p>Phone number: {this.state.petInfo.phone}</p>*/}

            </div>
        );
    }
}
export default MiniCard;