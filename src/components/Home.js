import React from "react";
import style from "../css_modules/header.module.css";
import {HOME, urlGetFavorites, urlGetPosts} from "../utils/Constants";
import ScrollToTop from "./ScrollToTop";
import CardHome from "./CardHome";
import MiniCardPost from "./MiniCardPost";
import {FaPlus} from "react-icons/all";
import {BeatLoader} from 'react-spinners';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnPostsToggle: false,
            postsInfo: [],
            favoritePosts: [],
            insertLike: false,
            error: '',
            loading: true
        };
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
        fetch(`${urlGetPosts + '/' + HOME}`, {
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
                postsInfo: data
            }))

            .catch(error => alert('Failed to load posts!'));

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
                        <CardHome/>
                    </div>
                ) : (
                    <div>
                        <div className={`flex-container ${style.divInfo}`}>
                            <div className='row'>
                                <button className={`btn_animation col-3 offset-9 ${style.btnAdd1}`} onClick={this.addNew}><FaPlus/> Add new</button>
                                <div className='col-9'>
                                    <p className={`${style.gradient_text1}`}><strong> Share news about pets, their achievements, <br/>interesting stories with their participation and much more!</strong></p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ScrollToTop/>
                            {this.state.loading ? (
                                <div>
                                        <p className={style.loading}><strong>Loading</strong></p>
                                    <div className={style.loader}>
                                        <BeatLoader loading size={28} color='rgb(67, 185, 124)'/>
                                    </div>
                                </div>
                                ) : (
                            <div className={style.divPadding}>
                               {/* let postsHome = this.state.postsInfo.map(card => card.id);
                                let favorit = this.favoritePosts.map(card => card.id);
                                let isIdMatched = true;
                                postsHome.forEach((value, i) =>
                                {
                                    if (value !== favorit[i]) {
                                    isIdMatched = false;
                                }
                                });
                                if (isIdMatched) console.log(true);
                                else console.log(false);*/}
                                {this.state.postsInfo.map ((cardPost) => {
                                    if (this.state.insertLike === false) {
                                        return ;
                                    }
                                   /* let liked = favoritePosts.contains(cardPost.id);*/
                                    /*<MiniCardPost like={this.addLike} key={cardPost.id} postsInfo={cardPost}/>*/
                                    /*  <MiniCardPost like={this.state.likes} likeColor={this.state.likeColor} changeColor={this.changeColorLike} addLike={this.addLike} key={cardPost.id} postsInfo={cardPost}/>*/
                                        let liked = this.state.favoritePosts.some((favPost) => {
                                         return favPost.post.id === cardPost.id
                                    });
                                        let likedArray = this.state.favoritePosts.filter((element) => (element.post.id===cardPost.id));
                                        if (liked){
                                            return <MiniCardPost like={liked} key={cardPost.id} postsInfo={cardPost} idFav={likedArray[0].id} delete={this.deleteFavorite}/>
                                        } else{
                                            return <MiniCardPost like={liked} key={cardPost.id} postsInfo={cardPost} add={this.addFavorite}/>
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
export default Home;



/*liked: false*/

/*likes: sessionStorage.getItem('likes') | 0,
likeColor: sessionStorage.getItem('likeColor')*/
/*  likeColor: sessionStorage.getItem('likeColor') | 'lightgray'*/
/*  like: 0,
  color: 'lightgray'*/
/*this.changeColorLike = this.changeColorLike.bind(this);*/


/*handleClickLike = e => {
       this.setState({
           liked: !this.state.liked
       })
   };*/

/*addLike = () => {
    this.setState(({ likes }) => ({
            likes: likes + 1
        }), () => sessionStorage.setItem('likes', this.state.likes))
};

changeColorLike = () => {
    this.setState(({ likeColor }) => ({
        likeColor: "orangered"
    }), () => sessionStorage.setItem('likeColor', this.state.likeColor));
};*/

/* addLike = (event) => {
     this.setState({
         like: this.state.like + 1,
         color: "orangered"
     })
 };*/

/*handleLike = (event) => {
    let favoritePost = {};
    favoritePost.post = this.state.postsInfo;
    let token = localStorage.getItem('accessToken');
    fetch(`${urlGetFavorites}`, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(favoritePost)
    })
        .then(response => {
            if (response.ok) {
                return response.text();
            } else {
            /!*    window.location.replace('/');*!/
                throw new Error ();
            }})
        .then(favoritePost => {setUsername(data); return data})
        .then(data => localStorage.setItem('userName', data))

     .catch(error => alert('Error. Unable to like. Try again!'));
};*/


/*let likes = sessionStorage.getItem('likes');
       let favoritePost = {};
       favoritePost.post = this.state.postsInfo;
       fetch(`${urlGetFavorites}`, {
           method: 'GET',
           headers: {
               'Content-type': 'application/json',
               'Authorization': likes
           },
           body: JSON.stringify(favoritePost)
       })
           .then(response => {
               if (response.ok) {
                   return response.json();
               } else {
                   throw new Error ();
               }})
           .then(data => {this.setState({
               postsInfo: favoritePost
           })});
           sessionStorage.setItem('likes', favoritePost.post.id);
           /!*.then(data => sessionStorage.setItem('likes', favoritePost.id))*!/

           .catch(error => alert('Error. Unable to like. Try again!'));*/