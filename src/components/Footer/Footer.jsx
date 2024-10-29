import { Box, Button, Typography } from "@mui/material"
import Aos from "aos";
import { useEffect } from "react";
import { Link, Element } from "react-scroll";

const Footer = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  }, [Aos]);
  return (
    <Element name='footer'>
      <Box sx={{ paddingTop: { md: '600px', xs: '300px' } }}>
        <Box sx={{position:'relative', zIndex:'60', display:'flex', gap:'20px', flexDirection:'column', alignItems:'center', bottom:'25vw'}}>
          <Typography data-aos='zoom-in-up' variant="h3" sx={{ fontFamily: 'Kaushan Script', fontSize: { md: '40px', xs: '4vw' }, color: 'white' }}>Begin Your Adventure <br /> in the World of Etena.</Typography>
          <Button sx={{background:'linear-gradient(-145deg, #ff4b32, #fe7e24)', color:'white', fontSize:'17px', padding:'12px', borderRadius:'30px'}}>Inferno magic travel</Button>
        </Box>
        <img data-aos='fade-right' src="/assets/svg/etend.svg" style={{ maxWidth: '100%', filter: 'drop-shadow(0 0 60px #462a2d)', height: 'auto', bottom: '0', position: 'absolute', zIndex: '0' }} alt="" />
        <img src="/assets/img/image copy 28.png" style={{ maxWidth: '100%', filter: 'drop-shadow(0 0 60px #3a175d)', height: 'auto', bottom: '0', position: 'absolute', zIndex: '10' }} alt="" />
        <img src="/assets/svg/down.svg" style={{ maxWidth: '100%', height: 'auto', bottom: '0', position: 'absolute', zIndex: '50' }} alt="" />
        <Link to="header" smooth={true} duration={1500}>
          <img className='upAndDown' src="/assets/img/image copy 29.png" style={{ maxWidth: '30%', height: 'auto', bottom: '20px', position: 'absolute', zIndex: '50' }} alt="" />
        </Link>
        <img className='headDown' src="/assets/img/image copy 30.png" style={{ maxWidth: '30%', height: 'auto', bottom: '10px', right: '0', position: 'absolute', zIndex: '10' }} alt="" />
        <Box>
        </Box>
      </Box>
    </Element>
  )
}

export default Footer