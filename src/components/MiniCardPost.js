import React from "react";
import style from "../css_modules/miniCard.module.css";
import {CLOUD_NAME} from "../utils/Constants";
import Carousel from 'react-bootstrap/Carousel';

class MiniCardPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            postInfo: props.postsInfo
        };
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.postInfo != prevProps.postInfo)
            this.setState({
                postInfo : this.props.postInfo
            })
    }

    render() {
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
                        (<div className={style.image}><img key={index} src={img} alt='PhotoPet' className={style.image}/></div>)
                )
                }
            </div>
        } else if (this.state.postInfo.imageUrls.length > 1) {
            imgLength = <Carousel indicators={true} interval={null} nextIcon={<span className={`carousel-control-next-icon ${style.nextPrevIcons}`}/>} prevIcon={<span className={`carousel-control-prev-icon ${style.nextPrevIcons}`}/>} touch={true}>
                {this.state.postInfo.imageUrls.map ((img, index) =>
                    <Carousel.Item key={index}>
                        <div className={style.image}>
                            <img
                                className={style.image}
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
                    <div className='col-4'>
                        <span className={`${style.spanAvatar}`}><img src='https://icons.veryicon.com/png/o/business/wms-purchase-sale-and-storage-background/customer-5.png' className={style.avatar} alt='Avatar'/>{this.state.postInfo.nameProfile}</span>
                        <p><span className={style.textPost}>Date: </span> {this.state.postInfo.date}</p>
                    </div>
                    <div className={style.emptyDiv}></div>
                    <div className='col-8'>
                        {imgLength}
                        <p>{this.state.postInfo.text}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default MiniCardPost;