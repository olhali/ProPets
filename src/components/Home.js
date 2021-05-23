import React from "react";
import style from "../css_modules/header.module.css";
import {HOME, urlGetPosts} from "../utils/Constants";
import ScrollToTop from "./ScrollToTop";
import CardHome from "./CardHome";
import MiniCardPost from "./MiniCardPost";
import {FaPlus} from "react-icons/all";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            btnPostsToggle: false,
            postsInfo: [],
            error: ''
        }
    };

    addNew = () => {
        this.setState({
            btnPostsToggle: true
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
            .then(data => this.setState({postsInfo: data}))

            .catch(error => alert('Failed to load posts!'));
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
                                <button className={`btn_animation col-3 col-sm-3 offset-9 ${style.btnAdd}`} onClick={this.addNew}><FaPlus/> Add new</button>
                            </div>
                        </div>
                        <div>
                            <ScrollToTop/>
                            <div className={style.divPadding}>
                                {this.state.postsInfo.map ((cardPost) => (
                                    <MiniCardPost key={cardPost.id} postsInfo={cardPost}/>
                                ))
                                }
                                {/*{this.state.postsInfo.filter((cardPost) => {
                                    if (cardPost.type.toLowerCase().includes(this.state.type.toLowerCase()) && cardPost.location.toLowerCase().includes(this.state.location.toLowerCase()) && cardPet.breed.toLowerCase().includes(this.state.breed.toLowerCase()) && cardPet.distinction.toLowerCase().includes(this.state.distinctive.toLowerCase())) {
                                        return true
                                    } else {
                                        return false
                                    }
                                }).map ((cardPost) => (
                                    <MiniCard key={cardPost.id} petInfo={cardPost}/>
                                ))
                                }*/}
                            </div>
                        </div>
                    </div>
                )
                }
            </div>
        )
    }
}
export default Home;