import React from 'react'
import style from './index.module.css'
import FilledButton from '../../resuables/buttons/FilledButton'
import GhostButton from '../../resuables/buttons/GhostButton'
import Vector2 from '../../asserts/Vector 2.svg'
import Frame from '../../asserts/Frame 1000001716.svg'
import Ellipse from '../../asserts/Ellipse 1.png'
import Rectangle from '../../asserts/Rectangle 9.png'
import Vector3 from '../../asserts/Vector 3.png'

 

const Hero = () => {
    return(
        <div className={style.mainContainer}>
            <h3>Optimize Your Online Experience With Our <br />
            Advanced <span style={{color:"#005AE2"}}>URL Shortening </span>Solution</h3>
                <img src={Vector3} alt="long thick line" style={{position: "relative", top:"-115px", left: "20px"}} />
                <div className={style.content}>
                    <p style={{fontSize: "18px", lineHeight: "28px", position: "relative", bottom: "10px"}}>
                        Personalize your shortened URLs to align with your brand identity. 
                        Utilize custom slugs,<br />
                        branded links, and domain customization options to reinforce your brand presence and <br />
                        enhance user engagement.
                    </p>
                </div>    
            <div className={style.btn}>
                <FilledButton text="Sign Up" style={{width: "57px", height: "12px", fontFamily: "Gilroy-SemiBold", fontSize: "16px", lineHeight: "12px"}} />  
                <GhostButton text="Learn more" style={{width: "84px", height: "20px", fontFamily: "Gilroy-SemiBold", fontSize: "16px", lineHeight: "18.75", color: "blue"}}/>
            </div>

            <div className={style.vectorSection}>
                <img src={Vector2} alt="vector logo" className={style.vectorImage} />

                <div className={style.innerVectorSect}>
                    <img src={Frame} alt="frame" />
                    <p style={{fontFamily: "Gilroy-SemiBold",fontSize: "16px",lineHeight: "24px",letterSpacing: "0em", text: "center", position: "relative"}}>
                        Seamlessly transform your long URLS into concise <br />
                    and shareable links with just few clicks.</p>
                </div>
       
            </div>

            <div className={style.heroCenter}>
                <img src={Rectangle} alt="Rectangle" className={style.Rectangle} />
                <img src={Ellipse} alt="Elipse"className={style.ellipse} />
            </div>   
        </div>

    );
}
export default Hero;
