import React from "react";
import style from "../css_modules/header.module.css";
import {urlGetFavorites} from "../utils/Constants";
import ScrollToTop from "./ScrollToTop";
import MiniCardPost from "./MiniCardPost";
import {BeatLoader} from "react-spinners";

class Favorites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritePosts: [],
            error: '',
            loading: true
        }
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

    componentWillMount () {
         let token = localStorage.getItem('accessToken');
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
                 loading: false,
                 favoritePosts: data
             }))

             .catch(error => alert('Unable to display favorites. Try again!'));
    }

    render() {
        return (
            <div>
                        <div className={`flex-container ${style.divInfo}`}>
                                <div className='col-12'>
                                    <p className={`${style.gradient_text}`}><strong> Your favorites. Find them here anytime!</strong></p>
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
                                {this.state.favoritePosts.map ((favoritePost) => (
                                    <MiniCardPost key={favoritePost.id} postsInfo={favoritePost.post} like={true} idFav={favoritePost.id} delete={this.deleteFavorite}/>
                                ))
                                }
                            </div>
                                )}
                        </div>
                    </div>
        )
    }
}
export default Favorites;