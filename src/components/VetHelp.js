import React from "react";
import style from "../css_modules/header.module.css";
import {urlGetFavorites, urlGetPosts, VET_HELP} from "../utils/Constants";
import ScrollToTop from "./ScrollToTop";
import MiniCardPost from "./MiniCardPost";
import {FaPlus} from "react-icons/all";
import CardVetHelp from "./CardVetHelp";
import {BeatLoader} from "react-spinners";

class VetHelp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnPostsToggle: false,
            postsInfo: [],
            favoritePosts: [],
            insertLike: false,
            error: '',
            loading: true
        }
    };

    addNew = () => {
        this.setState({
            btnPostsToggle: true
        })
    };

    deleteFavorite = (idPost) => {
        for (let i = 0; i < this.state.favoritePosts.length; i++) {
            if (this.state.favoritePosts[i].post.id === idPost) {
                this.state.favoritePosts.splice(i, 1);
                break;
            }
        }
        this.setState({
            favoritePosts: this.state.favoritePosts
        })
    };

    addFavorite = (favoritePost) => {
        this.state.favoritePosts.push(favoritePost);
        this.setState({
            favoritePosts: this.state.favoritePosts
        })
    };

    componentWillMount () {
        let token = localStorage.getItem('accessToken');
        fetch(`${urlGetPosts + '/' + VET_HELP}`, {
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
            .then(data => this.setState({
                loading: false,
                postsInfo: data}))

            .catch(error => alert('Failed to load veterinary help service posts!'));

        fetch(`${urlGetFavorites}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': token
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error ();
                }})
            .then(data => this.setState({
                favoritePosts: data,
                insertLike: true                          //чтобы заново не прорисовывались лайки после постов в HOME, чтобы не блымкало
            }))

            .catch(error => alert('Unable to display favorites. Try again!'));
    }

    render() {
        return (
            <div>
                {this.state.btnPostsToggle ? (
                    <div>
                        <CardVetHelp/>
                    </div>
                ) : (
                    <div>
                        <div className={`flex-container ${style.divInfo}`}>
                            <div className='row'>
                                <button className={`btn_animation col-3 offset-9 ${style.btnAdd1}`} onClick={this.addNew}><FaPlus/> Add new</button>
                                <div className='col-9'>
                                    <p className={`${style.gradient_text1}`}><strong> Veterinary care is always needed and<br/> important for the life of a pet!</strong></p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ScrollToTop/>
                            {this.state.loading ? (
                                <div>
                                    <p className={`ml-5 ${style.loading}`}><strong>Loading</strong></p>
                                    <div className={`ml-5 ${style.loader}`}>
                                        <BeatLoader loading size={28} color='rgb(67, 185, 124)'/>
                                    </div>
                                </div>
                            ) : (
                            <div className={style.divPadding}>
                                {this.state.postsInfo.map((cardPost) => {
                                        if (this.state.insertLike === false) {
                                            return;
                                        }
                                        let liked = this.state.favoritePosts.some((favPost) => {
                                            return favPost.post.id === cardPost.id
                                        });
                                        let likedArray = this.state.favoritePosts.filter((element) => (element.post.id === cardPost.id));
                                        if (liked) {
                                            return <MiniCardPost like={liked} key={cardPost.id} postsInfo={cardPost}
                                                                 idFav={likedArray[0].id} delete={this.deleteFavorite}/>
                                        } else {
                                            return <MiniCardPost like={liked} key={cardPost.id} postsInfo={cardPost}
                                                                 add={this.addFavorite}/>
                                        }
                                    }
                                )
                                }
                            </div>
                                )}
                        </div>
                    </div>
                )
                }
            </div>
        )
    }
}
export default VetHelp;