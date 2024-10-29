import { Box } from "@mui/material";
import HeroSection from "../heroSection/HeroSection";
import { Link } from 'react-scroll';

const Header = () => {
  return (<Box sx={{ background: 'linear-gradient(145deg, #aadae7, #56aac7)', }}>
    <Link to="section2" smooth={true} duration={1000}>
      <HeroSection />
    </Link>
  </Box>)
}

export default Header