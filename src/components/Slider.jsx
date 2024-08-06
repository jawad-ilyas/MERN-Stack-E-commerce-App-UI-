import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slider1 from '../assets/slider1.jpg'
import Slider2 from '../assets/slider2.jpg'
import Slider3 from '../assets/slider3.jpg'
import Slider4 from '../assets/slider5.jpg'
import Slider5 from '../assets/slider6.jpg'
import Slider6 from '../assets/slider7.jpg'
function Slider() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide:1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            <div>
                <img src={Slider1} />
            </div>
            <div>
                <img src={Slider2} />
            </div>
            <div>
                <img src={Slider3} />
            </div>
            <div>
                <img src={Slider4} />
            </div>
            <div>
                <img src={Slider5} />
            </div>
            <div>
                <img src={Slider6} />
            </div>

        </Carousel>
    )
}

export default Slider