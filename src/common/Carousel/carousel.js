import React from "react";
import style from "./carousel.module.css"

function Carousel() {
    return (
        <section className={style.carousel}>
            <div className={style.carousel__box}>
                <img className={style.carousel__box__img} src="https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/Highlight-M365-Icon-Bounce-Word-Merch:VP5-1920x600" />
            </div>
        </section>
    )
}

export default Carousel;