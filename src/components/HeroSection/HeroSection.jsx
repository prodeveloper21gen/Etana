import { Box } from "@mui/material";
import NavBar from "../NavBar/NavBar";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

import etenaText from '/src/assets/svg/etenaText.svg';
import birdFlight from '/src/assets/img/image copy 4.png';
import upAndDown1 from '/src/assets/img/image copy 3.png';
import imageCopy5 from '/src/assets/img/image copy 5.png';
import mountainsDivider from '/src/assets/img/1-2 Mountains devider.png';
import backgroundImage from '/src/assets/img/image copy 17.png';

const HeroSection = () => {
    useEffect(() => {
        Aos.init({
            duration: 1000,
        });
    }, []);

    return (
        <Box className="bacPosCenter" sx={{ position: 'relative', backgroundSize: 'contain', backgroundImage: `url(${backgroundImage})`, backgroundRepeat: 'no-repeat' }}>
            <NavBar />
            <Link to="section2" smooth={true} duration={1000}>
                <Box sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                    <img className="textAnimation" src={etenaText} style={{ maxWidth: '100%', height: 'auto' }} alt="" />
                </Box>
                <img className="birdFlight" src={birdFlight} style={{ position: 'absolute', zIndex: '1', maxWidth: '30%' }} alt="" />
                <img className="upAndDown" src={upAndDown1} style={{ position: 'absolute', right: '50px', animationDuration: '5s', zIndex: '10', maxWidth: '15%' }} alt="" />
                <Box data-aos="fade-up" className="upAndDown" style={{ display: 'flex', filter: 'drop-shadow(0 0 10vw #77f)', padding: '20px', justifyContent: 'center', zIndex: '0', position: 'relative', top: '-20vw' }}>
                    <img src={imageCopy5} style={{ maxWidth: '100%', position: 'absolute', height: 'auto' }} alt="" />
                </Box>
                <Box data-aos="fade-up" className="upAndDown" style={{ zIndex: '100', animationDuration: '4s' }}>
                    <img src={mountainsDivider} style={{ maxWidth: '100%', filter: 'drop-shadow(0 40px 30px black)', zIndex: '40', height: 'auto' }} alt="" />
                </Box>
            </Link>
        </Box>
    );
}

export default HeroSection;
