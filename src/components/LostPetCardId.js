import React from "react";
import MiniCard from "./MiniCard";
import {urlGetLostPetById} from "../utils/Constants";

class LostPetCardId extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            petInfo: null
        }
    }

    componentDidMount() {
        let token = localStorage.getItem('accessToken');
        let id = this.props.match.params.petId;
        console.log(id);
        let urlWithId = urlGetLostPetById + '/' + id;
        console.log(urlWithId);
        fetch(urlWithId, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': token
            }
        })
            .then((response) => {
                if (response.ok) {
                    return response.json()
                } else {
                    throw new Error(response.statusText);
                }
            })
            .then(data => {
                this.setState({petInfo: data});
                console.log(data);
            })

            .catch(error => alert('ID not found!'));
    }


    render() {
        return (
            <div>
                <MiniCard petInfo={this.state.petInfo}/>
            </div>
        );
    }

}

export default LostPetCardId;