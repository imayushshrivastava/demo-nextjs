import React from "react";
import Image from "next/image";

const Vender = ()=>{
    return(
        <>
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5 mb-5">
            <div className="bg-white">
                <div className="owl-carousel vendor-carousel" style={{display:'block'}}>
                    <Image src="/img/vendor-1.jpg" alt="" width={123} height={41} />
                    <Image src="/img/vendor-2.jpg" alt="" width={123} height={41} />
                    <Image src="/img/vendor-3.jpg" alt="" width={123} height={41} />
                    <Image src="/img/vendor-4.jpg" alt="" width={123} height={41} />
                    <Image src="/img/vendor-5.jpg" alt="" width={123} height={41} />
                    <Image src="/img/vendor-6.jpg" alt="" width={123} height={41} />
                    <Image src="/img/vendor-7.jpg" alt="" width={123} height={41} />
                    <Image src="/img/vendor-8.jpg" alt="" width={123} height={41} />
                    <Image src="/img/vendor-9.jpg" alt="" width={123} height={41} />
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default Vender