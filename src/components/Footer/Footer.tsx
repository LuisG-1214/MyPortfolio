import { styled, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import StyledButton from "../StyledButton/StyledButton";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SchoolIcon from '@mui/icons-material/School';
import { useNavigate } from "react-router-dom";

const Footer = () => {

    const year = (): number => {
        return new Date().getFullYear();
    }

    const navigate = useNavigate();

    const StyledFooter = styled("div") (({theme}) => ({
        //backgroundColor: theme.palette.primary.main,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }))

    const BackToTOP = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    return (
      <>
        <StyledFooter sx={{background: 'radial-gradient(ellipse at bottom, #000000 0%, #090A0F 100%)',}}>
          <Grid container>
            <Grid size={{xs:12, md:12}}>
                <Box 
                    sx={{                      
                        display: "flex",
                        gap: "10px",
                        padding: "20px",
                        "@media (max-width: 430px)": {
                           flexDirection: "column" 
                        }
                    }}
                >
                    
                    <StyledButton onClick={() => window.open("https://linktr.ee/LuisGustavoAlves1214")} customColor="#ffffff" customBorder="#000">
                        <AlternateEmailIcon />
                        <Typography>
                             Contatos
                        </Typography>
                    </StyledButton>  

                    <StyledButton onClick={BackToTOP} customColor="#ffffff" customBorder="#000">
                    <ArrowUpwardIcon />
                        Back to top
                    </StyledButton> 


                    <StyledButton onClick={() => navigate("/certificates")} customColor="#ffffff" customBorder="#000">
                        <SchoolIcon />
                        <Typography>
                             Certificados
                        </Typography>
                    </StyledButton>
                </Box>
            </Grid>

            <Grid size={{xs:12, md:12}}>
                <Box 
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        pb: "20px"
                    }}
                >
                    <Typography
                        sx={{
                            color: "#585858",
                            fontFamily: "'Lato', sans-serif",
                            textAlign: "center",
                        }}
                    >
                    © {year()} Luis Gustavo. All rights reserved.
                    </Typography>
                </Box>
            </Grid>
            
          </Grid>
        </StyledFooter>
      </>
    )
  }
  
export default Footer
  