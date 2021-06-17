import React from "react";
import MiniCard from "./MiniCard";
import {urlGetFoundPetById} from "../utils/Constants";

class FoundPetCardId extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            petInfo: null
        }
    }

    componentDidMount() {
        let token = localStorage.getItem('accessToken');
        let id = this.props.match.params.petId;
        let urlWithId = urlGetFoundPetById + '/' + id;
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

export default FoundPetCardId;