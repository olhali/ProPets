import React from "react";
import style from "../css_modules/miniCard.module.css";
import Carousel from 'react-bootstrap/Carousel';
import {TiHeart} from "react-icons/all";
import {urlDeleteFavorite, urlSaveFavorite} from "../utils/Constants";
import ReadMore from "./ReadMore";

class MiniCardPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postInfo: props.postsInfo,
            liked: this.props.like
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.postsInfo != prevProps.postsInfo || this.props.like != prevProps.like)
            this.setState({
                postInfo : this.props.postsInfo,
                liked: this.props.like
            })
    }

    handleLike = (event) => {
        this.setState({
            liked: !this.state.liked
        });
        if (!this.state.liked) {
            let token = localStorage.getItem('accessToken');
            let favoritePost = {};
            favoritePost.post = this.state.postInfo;
            fetch(`${urlSaveFavorite}`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify(favoritePost)
            })
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error ();
                    }})
                .then(data => this.props.add(data))

                .catch(error => alert('Error. Unable to like. Try again!'));
        } else {
            let token = localStorage.getItem('accessToken');
            fetch(`${urlDeleteFavorite + '/' + this.props.idFav}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': token
                }
            })
                .then(response => {
                    if (response.ok) {
                        this.props.delete(this.props.postsInfo.id);
                        return;
                    } else {
                        throw new Error ();
                    }})
                .catch(error => alert('Error. Unable to unlike. Try again!'));
        }
    };

    render() {
        if (this.state.postInfo === null) {
            return <div></div>
        }
        let imgLength;
        if (this.state.postInfo.imageUrls.length === 0) {
            imgLength = <div></div>
        } else if (this.state.postInfo.imageUrls.length === 1) {
            imgLength = <div>
                {this.state.postInfo.imageUrls.map (
                    (img, index) =>
                        (<div className={style.image1}><img key={index} src={img} alt='PhotoPet' className={style.image1}/></div>)
                )
                }
            </div>
        } else if (this.state.postInfo.imageUrls.length > 1) {
            imgLength = <Carousel indicators={true} interval={null} nextIcon={<span className={`carousel-control-next-icon ${style.nextPrevIcons}`}/>} prevIcon={<span className={`carousel-control-prev-icon ${style.nextPrevIcons}`}/>} touch={true}>
                {this.state.postInfo.imageUrls.map ((img, index) =>
                    <Carousel.Item key={index}>
                        <div className={style.image1}>
                            <img
                                className={style.image1}
                                src={img}
                                alt="PhotoPet"
                            />
                        </div>
                    </Carousel.Item>
                )}
            </Carousel>
        }
        return (
            <div className={`flex-container ${style.divPost}`}>
                <div className='row'>
                    <div>
                        <span className={`${style.spanAvatar1}`}><img src='https://icons.veryicon.com/png/o/business/wms-purchase-sale-and-storage-background/customer-5.png' className={style.avatar1} alt='Avatar'/>{this.state.postInfo.nameProfile}</span>
                        <p><span className={style.textPost1}>Date: </span> {new Date(this.state.postInfo.date).toLocaleDateString() +' '+  new Date(this.state.postInfo.date).toLocaleTimeString()}</p>
                    </div>
                </div>

                <div className='col-11'>
                    <p className={style.textCard}>
                        <ReadMore>
                        {this.state.postInfo.text}
                        </ReadMore>
                    </p>
                </div>

                <div className='col-11 offset-1'>
                    {imgLength}
                </div>
                <br/>

                <div onClick={this.handleLike}>
                    {this.state.liked ? (
                        <TiHeart className={`col-2 ${style.heart1}`}/>
                    ) : (
                        <TiHeart className={`col-2 ${style.heart}`}/>
                    )}
                </div>
            </div>
        );
    }
}
export default MiniCardPost;