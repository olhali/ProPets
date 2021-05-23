import React from "react";
import style from "../css_modules/miniCard.module.css";
import {CLOUD_NAME} from "../utils/Constants";
import Carousel from 'react-bootstrap/Carousel';

class MiniCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            petInfo: props.petInfo,
            showNumber: false
        };
    }

    toggleNumber = () => this.setState((currentState) => ({showNumber: !currentState.showNumber}));

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.petInfo != prevProps.petInfo)
        this.setState({
            petInfo : this.props.petInfo
        })
    }

    render() {
        if (this.state.petInfo === null) {          //для проверки на пустую карточку, нужно для отрисовки отдел.карточки по url
            return <div></div>
        }
        let imgLength;
        if (this.state.petInfo.imageUrls.length === 0) {
            imgLength = <div></div>
        } else if (this.state.petInfo.imageUrls.length === 1) {
            imgLength = <div>
                {this.state.petInfo.imageUrls.map (
                    (img, index) =>
                        (<div className={style.image}><img key={index} src={img} alt='PhotoPet' className={style.image}/></div>)
                                )
                }
            </div>
        } else if (this.state.petInfo.imageUrls.length > 1) {
            imgLength = <Carousel indicators={true} interval={null} nextIcon={<span className={`carousel-control-next-icon ${style.nextPrevIcons}`}/>} prevIcon={<span className={`carousel-control-prev-icon ${style.nextPrevIcons}`}/>} touch={true}>
                {this.state.petInfo.imageUrls.map ((img, index) =>
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
                        {imgLength}
                    </div>
                    <div className='col-8'>
                        <div className='col-9'>
                        <p className={style.type}>{this.state.petInfo.type.toUpperCase()}</p>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <p><span className={style.textPost}>Breed:</span> {this.state.petInfo.breed}</p>
                                <p><span className={style.textPost}>Color:</span> {this.state.petInfo.color}</p>
                                <p><span className={style.textPost}>Sex:</span> {this.state.petInfo.sex}</p>
                             {/*   <p><span className={style.textPost}>Height/ cm:</span> {this.state.petInfo.height}</p>*/}
                            </div>
                            <div className='col-6'>
                                <p><span className={style.textPost}>Location:</span> {this.state.petInfo.location}</p>
                                <p><span className={style.textPost}>Date:</span> {this.state.petInfo.date}</p>
                                <p><span className={style.textPost}>Phone number:</span> <span className={style.number} onClick={this.toggleNumber}>{this.state.showNumber ? this.state.petInfo.phone : 'show number'}</span></p>
                             {/*   <p><span className={style.textPost}>Phone number:</span> <span className={style.number} onClick={this.toggleNumber}>{this.state.showNumber ? 'hide number' : 'show number'}</span> {this.state.showNumber && <p>{this.state.petInfo.phone}</p>}</p>*/}
                            </div>
                        </div>
                        <div className={style.emptyDiv}></div>
                        <div className='row'>
                            <div className='col-6'>
                                <p><span className={style.textPost}>Distinctive features:</span> {this.state.petInfo.distinction}</p>
                            </div>
                            <div className='col-6'>
                                <p><span className={style.textPost}>Description:</span> {this.state.petInfo.description}</p>
                            </div>

                            <span className={`col-3 offset-9 ${style.spanAvatar}`}><img src='https://icons.veryicon.com/png/o/business/wms-purchase-sale-and-storage-background/customer-5.png' className={style.avatar} alt='Avatar'/>{this.state.petInfo.nameProfile}</span>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MiniCard;



/*
 imageUrls: props.petInfo.imageUrls.length

 const imageUrlsLength = this.state.imageUrls;
if (imageUrlsLength === 0) {
    <div></div>;
}
else if (imageUrlsLength === 1) {
    <div>
        {this.state.petInfo.imageUrls.map ((img, index) =>
            (<img key={index} src={img} alt='PhotoPet' className={style.image}/>)
        )}
    </div>;
} else {
    <Carousel indicators={true} interval={null} nextIcon={<span className={`carousel-control-next-icon ${style.nextPrevIcons}`}/>} prevIcon={<span className={`carousel-control-prev-icon ${style.nextPrevIcons}`}/>} touch={true}>
        {this.state.petInfo.imageUrls.map ((img, index) =>
            <Carousel.Item key={index}>
                <img
                    className={style.image}
                    src={img}
                    alt="PhotoPet"
                />
            </Carousel.Item>
        )}
    </Carousel>
}*/

/*<div className='row'>
    <div className='col-12'>
        <p className={style.type}>{this.state.petInfo.type.toUpperCase()}</p>
    </div>
    <Carousel className='col-4' indicators={true} interval={null} nextIcon={<span className={`carousel-control-next-icon ${style.nextPrevIcons}`}/>} prevIcon={<span className={`carousel-control-prev-icon ${style.nextPrevIcons}`}/>} touch={true}>
        {this.state.petInfo.imageUrls.map ((img, index) =>
            <Carousel.Item key={index}>
                <img
                    className={style.image}
                    src={img}
                    alt="PhotoPet"
                />
            </Carousel.Item>
        )}
    </Carousel>
    <div className='col-8'>
        <div className='row'>
            <div className='col-6'>
                <p><span className={style.textPost}>Color:</span> {this.state.petInfo.color}</p>
                <p><span className={style.textPost}>Sex:</span> {this.state.petInfo.sex}</p>
                <p><span className={style.textPost}>Height/ cm:</span> {this.state.petInfo.height}</p>
            </div>
            <div className='col-6'>
                <p><span className={style.textPost}>Location:</span> {this.state.petInfo.location}</p>
                <p><span className={style.textPost}>Date:</span> {this.state.petInfo.date}</p>
                <p><span className={style.textPost}>Phone number:</span> {this.state.petInfo.phone}</p>
            </div>
        </div>
        <div className={style.emptyDiv}></div>
        <div className='row'>
            <div className='col-6'>
                <p><span className={style.textPost}>Distinctive features:</span> {this.state.petInfo.distinction}</p>
            </div>
            <div className='col-6'>
                <p><span className={style.textPost}>Description:</span> {this.state.petInfo.description}</p>
            </div>
        </div>
    </div>
    {/!*<div className='col-4'></div>*!/}
    {/!* <div className='col-8'>
                            <p><span className={style.textPost}>Distinctive features:</span> {this.state.petInfo.distinction}</p>
                        </div>
                        <div className='col-4'>
                            <p><span className={style.textPost}>Description:</span> {this.state.petInfo.description}</p>
                        </div>*!/}
    {/!*   <p>Name profile: {this.state.petInfo.nameProfile}</p>*!/}
</div>*/

/*
<div className={`flex-container ${style.divPost}`}>
    <div className='row align-items-center'>
        <div className='col-12'>
            <p className={style.type}>{this.state.petInfo.type.toUpperCase()}</p>
        </div>
        <div className='col-12'>
            {/!*<img src='https://res.cloudinary.com/dachgyj58/image/upload/v1619564685/PhotoCloudinary/baqxubkrngiaamz7hd97.jpg' width={250} height={250} alt='PhotoPet'/>*!/}
            {/!*   <img src={this.state.petInfo.imageUrls.map()} width={250} height={250} alt='NO PHOTO'/>*!/}
            {this.state.petInfo.imageUrls.map ((img, index) =>
                (<img key={index} src={img} alt='PhotoPet' className={style.image}/>)
            )}
        </div>
        <div className='col-6'>
            <p><span className={style.textPost}>Color:</span> {this.state.petInfo.color}</p>
            <p><span className={style.textPost}>Sex:</span> {this.state.petInfo.sex}</p>
            <p><span className={style.textPost}>Height/ cm:</span> {this.state.petInfo.height}</p>
        </div>
        <div className='col-6'>
            <p><span className={style.textPost}>Distinctive features:</span> {this.state.petInfo.distinction}</p>
            <p><span className={style.textPost}>Location:</span> {this.state.petInfo.location}</p>
            <p><span className={style.textPost}>Date:</span> {this.state.petInfo.date}</p>
            <p><span className={style.textPost}>Phone number:</span> {this.state.petInfo.phone}</p>
        </div>
        <div className='col-12'>
            <p><span className={style.textPost}>Description:</span> {this.state.petInfo.description}</p>
        </div>
        {/!*   <p>Name profile: {this.state.petInfo.nameProfile}</p>*!/}
    </div>

</div>*/
