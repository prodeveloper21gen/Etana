import { Box } from "@mui/material"
import Header from "./components/Header/Header"
import MainSection from "./components/MainSection/MainSection"

const App = () => {
  return (
    <Box sx={{maxWidth:'1440px', position:'relative', marginX:'auto'}}>
      <Header />
      <MainSection />
    </Box>
  )
}

export default App