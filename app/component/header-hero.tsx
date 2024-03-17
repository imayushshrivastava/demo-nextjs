import React from "react";
import Image from "next/image";

const HeaderHero = ()=>{
    return(
<div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div className="carousel-inner">
        <div className="carousel-item active">
            {/* <img className="w-100" src="img/carousel-1.jpg" alt="Image"> */}
            <div className="cover-container">
            <Image
                src="/carousel-1.jpg"
                alt="Next.js Logo"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
            />
            </div>
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3">
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                    <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                    <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                </div>
            </div>
        </div>
        <div className="carousel-item">
            {/* <img className="w-100" src="img/carousel-2.jpg" alt="Image"> */}
            <Image
                className="w-100"
                src="/carousel-2.jpg"
                alt="Next.js Logo"
                width={100}
                height={900}
                priority
            />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3">
                    <h5 className="text-white text-uppercase mb-3 animated slideInDown">Creative & Innovative</h5>
                    <h1 className="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solution</h1>
                    <a href="quote.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Free Quote</a>
                    <a href="" className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
        data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
        data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
    </button>
</div>
)
}

export default HeaderHero