import React from 'react'
import MultiActionAreaCard from './MultiActionCard'
import Carousel from 'react-bootstrap/Carousel'
import "./Carousel.css"


function CarouselComponent(props) {
    return (
        <div className='carousel'>
            <Carousel fade className='carousel_com' variant={props.color}>
                {/* <Carousel.Item className='carousel_item'>
                    <MultiActionAreaCard
                        title="Physics Semester"
                        img="https://images.pexels.com/photos/714698/pexels-photo-714698.jpeg?cs=srgb&dl=pexels-jeshootscom-714698.jpg&fm=jpg"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam consectetur quia, eaque ex exercitationem, eveniet quos natus autem iste, vitae tempora impedit doloribus perspiciatis voluptatem temporibus corrupti dolorem enim voluptatibus!"
                    />
                </Carousel.Item> */}

                {props.list.map((element) => {
                    // console.log(element);
                    return (<Carousel.Item key={element[0].key} className='carousel_item' style={{ backgroundColor: `${props.color === "white" ? "black" : "#c4c4c4c4"}` }}>
                        <h1 className='carousel_head' style={{ color: `${props.color === "white" ? "white" : "black"}` }} >{props.year}</h1>
                        <div className="carousel_flex">
                            <MultiActionAreaCard
                                title={element[0].title}
                                link={element[0].link}
                                description={element[0].description}
                                img={element[0].img}
                                className="carousel_card" />
                            <MultiActionAreaCard
                                title={element[1].title}
                                link={element[1].link}
                                description={element[1].description}
                                img={element[1].img}
                                className="carousel_card" />
                            <MultiActionAreaCard
                                title={element[2].title}
                                link={element[2].link}
                                description={element[2].description}
                                img={element[2].img}
                                className="carousel_card" />
                        </div>

                    </Carousel.Item>)
                })}
            </Carousel>
        </div>
    )
}

export default CarouselComponent
