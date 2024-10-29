import { X } from "@mui/icons-material"
import { Box, Button } from "@mui/material"
import { Element } from "react-scroll"

const NavBar = () => {
    return (
        <Element name='header'>
            <Box sx={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
                <Box><img src="src/assets/svg/etenaLogo.svg" alt="" /></Box>
                <Box sx={{ display: 'flex', gap: '10px', height: 'fit-content', zIndex: '50' }}>
                    <Button sx={{ color: 'white', borderRadius: '30px', backgroundColor: '#ffffff50' }}><img src="/src/assets/svg/diskord.svg" style={{ aspectRatio: '1' }} alt="" /></Button>
                    <Button sx={{ color: 'white', borderRadius: '30px', backgroundColor: '#ffffff50' }}><X /></Button>
                    <Button sx={{ color: 'white', borderRadius: '30px', backgroundColor: '#ffffff50' }}><img src="/src/assets/svg/subicon.svg" alt="" /></Button>
                </Box>
            </Box >
        </Element>
    )
}

export default NavBar