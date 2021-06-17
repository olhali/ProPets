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

          /*  favorites: []*/
            /*like: ''*/
          /*  likes: sessionStorage.getItem('likes') | false,
            likeColor: 'lightgray'*/
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
                /*  .then(data => {console.log(data); return data})*/
                /*    .then(data => this.setState({favoritePosts: data}))*/
                /*.then(data => sessionStorage.setItem('likes', favoritePost.post))*/

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
        /*const colorLike = this.state.liked ? <TiHeart className={`col-1 col-sm-1 offset-11 ${style.heart1}`}/> : <TiHeart className={`col-1 col-sm-1 offset-11 ${style.heart}`}/>;*/
        if (this.state.postInfo === null) {          //для проверки на пустую карточку, нужно для отрисовки отдел.карточки по url
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
                       {/* <div className='col-4'>*/}
                        <span className={`${style.spanAvatar1}`}><img src='https://icons.veryicon.com/png/o/business/wms-purchase-sale-and-storage-background/customer-5.png' className={style.avatar1} alt='Avatar'/>{this.state.postInfo.nameProfile}</span>
                        <p><span className={style.textPost1}>Date: </span> {new Date(this.state.postInfo.date).toLocaleDateString() +' '+  new Date(this.state.postInfo.date).toLocaleTimeString()}</p>
                    </div>
                </div>

                {/*<div className={style.emptyDiv}></div>*/}
                <div className='col-11'>
                    <p className={style.textCard}>
                        <ReadMore>
                        {this.state.postInfo.text}
                        </ReadMore>
                    </p>
                </div>

                <div className='col-11 offset-1'>
                    {/*<div className='col-11'>*/}
                    {imgLength}
                </div>

                {/*<div className='row' onClick={(event) => {this.handleClickLike(event)}} onChange={this.handleLike}>{colorLike}*/}
                {/*<div className='row' onClick={this.handleLike}>
                    {this.state.liked ? (
                        <TiHeart className={`col-1 col-sm-1 offset-11 ${style.heart1}`}/>
                    ) : (
                        <TiHeart className={`col-1 col-sm-1 offset-11 ${style.heart}`}/>
                    )}*/}
                <div onClick={this.handleLike}>
                    {this.state.liked ? (
                        <TiHeart className={`col-2 ${style.heart1}`}/>
                    ) : (
                        <TiHeart className={`col-2 ${style.heart}`}/>
                    )}
                {/*  {this.state.liked ? (
                            <TiHeart className={`col-1 col-sm-1 offset-11 ${style.heart1}`} onClick={this.handleLike}/>
                    ) : (
                            <TiHeart className={`col-1 col-sm-1 offset-11 ${style.heart}`} onClick={this.handleLike}/>
                    )}*/}
                </div>
            </div>
        );
    }
}
export default MiniCardPost;


/*<div className='col-1 col-sm-1 offset-11'>likes: </div>*!/}

   <div className='row' onClick={(event) => {this.props.changeColor(event)}}>
                         <TiHeart className={`col-1 col-sm-1 offset-11 ${style.heart}`} style={{color: this.state.like}} onClick={this.addLike}/>
                    <TiHeart className={`col-1 col-sm-1 offset-11 ${style.heart}`} style={{color: this.props.likeColor}} onClick={(event) => {this.props.addLike(event)}}/>
                </div>
                <div className='col-1 col-sm-1 offset-11'>likes: {this.props.like}</div>

   <TiHeart className={`col-1 col-sm-1 offset-11 ${style.heart}`} style={{color: this.state.likeColor}} onClick={this.addLike}/>
            </div>
            <div className='col-1 col-sm-1 offset-11'>{this.state.likes}</div>
  <div className={style.emptyDiv}></div>*/


/*  addLike = (event) => {
        this.setState({
            like: this.state.like + 1,
            likeColor: "orangered"
        })
    };*/
/*addLike = () => {
    this.setState(({ likes }) => ({
        likes: likes + 1,
            likeColor: "orangered"
    }),
        () => sessionStorage.setItem('likes', this.state.likes));
};*/

/*  handleLike = (event) => {
  let favoritePost = {};
  favoritePost.post = this.state.postInfo;
  /!*let postInfo = {};
  postInfo.type = HOME;
  postInfo.text = this.state.text;
  postInfo.nameProfile = localStorage.getItem('userName');
  postInfo.imageUrls = this.state.imageUrls;*!/
  let token = localStorage.getItem('accessToken');
  fetch(`${urlSaveFavorite}`, {
      method: 'POST',
      headers: {
          'Content-type': 'application/json',
          'Authorization': token
      },
      body: JSON.stringify(favoritePost)
  })
      .then((response) => {
          if (response.ok) {
              return response.json()
          } else {
              throw new Error(response.statusText);
          }})
      .then(data =>  {console.log(data.accessToken); return data})
      .then(data => localStorage.setItem('accessToken', data.tokenType+' '+data.accessToken))

      .catch(error => alert('Error. Unable to like. Try again!'));
};*/

/*handleLike = (event) => {
let token = localStorage.getItem('accessToken');
fetch(`${urlGetFavorites}`, {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
        'Authorization': token
    }})
    .then(response => {
        if (response.ok) {
            return response.text();
        } else {
            //alert('To perform this action - you must login again');
            window.location.replace('/');
            throw new Error ();
        }})
    .then(data => {setUsername(data); return data})
    .then(data => localStorage.setItem('userName', data))

// .catch(error => alert('To perform this action - you must login again'));
};*/