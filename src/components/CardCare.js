import React from "react";
import style from "../css_modules/login.module.css";
import {
    FaPaw,
    MdClose
} from "react-icons/all";
import {CARE, urlSavePost} from "../utils/Constants";
import PhotoUpload from "./PhotoUpload";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

class CardCare extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            imageUrls: [],
            nameProfile: '',
            error: '',
            validationLabel: '',
            responseAfterCard: false
        };
        window.history.pushState("", "", '/main_page/services/care/card_care');
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.text !== prevState.text) {
            this.validation();
        }
    }

    handleText = (e) => {
        this.setState({
            text: e.target.value
        })
    };


    addImageUrl = (url) => {
        this.state.imageUrls.push(url);
        this.setState({
            imageUrls: this.state.imageUrls
        });
    };

    checkText = () => {
        if (this.state.text === '') {
            this.setState({
                validationLabel: <span className={style.labelLostFound}><strong className={style.requiredFields}>*</strong> Add text to the post!</span>
            });
            return false;
        } else {
            this.setState({
                validationLabel: ''
            });
            return true;
        }
    };

    validation = () => {
        if (this.checkText() === false) {
            return false;
        }
        return true;
    };

    handlePublish = (event) => {
        event.preventDefault();
        if (this.validation() === false) {
            return;
        }
        let postInfo = {};
        postInfo.type = CARE;
        postInfo.text = this.state.text;
        postInfo.nameProfile = localStorage.getItem('userName');
        postInfo.imageUrls = this.state.imageUrls;
        let token = localStorage.getItem('accessToken');
        fetch(`${urlSavePost}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(postInfo)
        })
            .then((response) => {
                this.setState({
                    responseAfterCard: true
                });
                if (response.ok) {
                    return response.text()
                } else {
                    throw new Error(response.statusText);
                }
            })

            .catch(error => alert('An error occurred while sending the post. Try again!'));
    };


    render() {
        return (
            <form name='post'>
                {this.state.responseAfterCard ? (
                    <div>
                        <p className={style.published}>Published</p>
                        <Button color='success' className={style.publishedOk} onClick={event => window.location.href='/main_page/services/care'}>OK</Button>
                    </div>
                ) : (
                    <div>
                        <fieldset>
                            <legend className={style.legendCard}><strong>Your new post! Simply text, add photos and publish!</strong></legend>
                            <div className={`flex-container ${style.divCard}`}>
                            <label htmlFor='textPost' className={style.label1}>Text: </label>
                            <textarea id='textPost' rows="1" maxlength="1500" name='textPost' title="Up to 1500 char" placeholder='Write something...' autoComplete='off' className={style.no_frame1} onChange={(event) => {this.handleText(event)}}/>
                            <br/>

                            <div>
                                <label htmlFor='photo' className={style.label}>Photos:</label>
                                <PhotoUpload addImageUrl={this.addImageUrl}/>
                            </div><br/>
                            </div>
                            <br/>

                            {this.state.validationLabel}

                            <button className={style.publish} onClick={this.handlePublish}><FaPaw/> Publish</button>

                            <Link to='/main_page/services/care'>
                                <button color="secondary" className={style.cancel} onClick={event => window.location.href='/main_page/services/care'}><MdClose/>Cancel</button>
                            </Link>
                        </fieldset>
                    </div>
                )}
            </form>
        );
    }
}
export default CardCare;