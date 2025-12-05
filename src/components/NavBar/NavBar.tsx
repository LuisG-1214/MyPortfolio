import { AppBar, MenuItem, Toolbar, styled,} from "@mui/material"
//import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
        transition: "background-color 0.5s",   
    }))

const NavBar = () => {
   // const navigate = useNavigate();
    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                    <ScrollLink to="sobre" smooth={true} duration={500}>
                        <MenuItem>Sobre</MenuItem>
                    </ScrollLink>
                    <ScrollLink to="sobre" smooth={true} duration={500}>
                        <MenuItem>Skills</MenuItem>
                    </ScrollLink>
                    <ScrollLink to="projetos" smooth={true} duration={500}>
                        <MenuItem>Projetos</MenuItem>
                    </ScrollLink>
                    {/* <MenuItem onClick={() => navigate("/certificates")}>
                        <Typography>Certificados</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => window.open("https://linktr.ee/LuisGustavoAlves1214")}>
                        <Typography>Contatos</Typography>
                    </MenuItem> */}
                </StyledToobar>
            </AppBar>
        </>
    )
}

export default NavBar