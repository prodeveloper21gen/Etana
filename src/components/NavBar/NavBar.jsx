import { X } from "@mui/icons-material"
import { Box, IconButton } from "@mui/material"
import { Element } from "react-scroll"

const NavBar = () => {
    return (
        <Element name='header'>
            <Box sx={{ padding: '20px', display: 'flex', justifyContent: 'space-between' }}>
                <Box><img src="/src/assets/svg/etenaLogo.svg" alt="" /></Box>
                <Box sx={{ display: 'flex', gap: '10px', height: 'fit-content', zIndex: '50' }}>
                    <IconButton sx={{ color: 'white', borderRadius: '30px', backgroundColor: '#ffffff50' }}><img src="/src/assets/svg/diskord.svg" style={{ aspectRatio: '1' }} alt="" /></IconButton>
                    <IconButton sx={{ color: 'white', borderRadius: '30px', backgroundColor: '#ffffff50' }}><X /></IconButton>
                    <IconButton sx={{ color: 'white', borderRadius: '30px', backgroundColor: '#ffffff50' }}><img src="/src/assets/svg/subicon.svg" alt="" /></IconButton>
                </Box>
            </Box >
        </Element>
    )
}

export default NavBar