import React from "react";
import style from "../css_modules/miniCard.module.css";
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
        if (this.state.petInfo === null) {
            return <div></div>
        }
        let imgLength;
        if (this.state.petInfo.imageUrls.length === 0) {
            imgLength = <div></div>
        } else if (this.state.petInfo.imageUrls.length === 1) {
            imgLength = <Carousel indicators={false} interval={null} touch={true} nextIcon={<span className={`carousel-control-next-icon ${style.nextPrevIcons1}`}/>} prevIcon={<span className={`carousel-control-prev-icon ${style.nextPrevIcons1}`}/>}>
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
                    <div className='col-11 col-sm-10 col-md-4 offset-1 offset-sm-2 offset-md-0 pr-md-0'>
                        {imgLength}
                    </div>
                    <div className='col-8'>
                        <div className='col-6 col-md-10 col-xl-9 offset-6 offset-md-0'>
                        <p className={style.type}>{this.state.petInfo.type.toUpperCase()}</p>
                        </div>
                        <div className='row'>
                            <div className='col-6 col-md-4'>
                                <p className='mrgAndBreak'><span className={style.textPost}>Breed:</span> {this.state.petInfo.breed}</p>
                                <p className='mrgAndBreak'><span className={style.textPost}>Color:</span> {this.state.petInfo.color}</p>
                                <p className='mrgAndBreak'><span className={style.textPost}>Sex:</span> {this.state.petInfo.sex}</p>
                            </div>
                            <div className='col-6 col-md-4'>
                                <p className='mrgAndWrap1'><span className={style.textPost}>Location:</span> {this.state.petInfo.location}</p>
                                <p className='mrgLeftAndSpace'><span className={style.textPost}>Date:</span> {this.state.petInfo.date}</p>
                                <p className='mrgLeftAndSpace'><span className={style.textPost}>Phone number:</span> <span className={style.number} onClick={this.toggleNumber}>{this.state.showNumber ? this.state.petInfo.phone : 'show number'}</span></p>
                            </div>
                        </div>
                        <div className={style.emptyDiv}></div>
                        <div className='row'>
                            <div className='col-6 col-md-4'>
                                <p className='mrgAndBreak'><span className={style.textPost}>Distinctive features:</span> {this.state.petInfo.distinction}</p>
                            </div>
                            <div className='col-6 col-md-4'>
                                <p className='mrgAndWrap'><span className={style.textPost}>Description:</span> {this.state.petInfo.description}</p>
                            </div>

                            <span className={`col-5 col-sm-4 col-md-3 offset-7 offset-sm-8 offset-md-9 ${style.spanAvatar}`}><img src='https://icons.veryicon.com/png/o/business/wms-purchase-sale-and-storage-background/customer-5.png' className={style.avatar} alt='Avatar'/>{this.state.petInfo.nameProfile}</span>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default MiniCard;