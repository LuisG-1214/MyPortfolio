import { styled, Container, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import StyledButton from "../../components/StyledButton/StyledButton";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CertificateItem from "../../components/CertificateItem/CertificateItem";

const Certificates = () => {
    const navigate = useNavigate();

    const StyledHeader = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "20vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        
    }));


    return (
      <>
        <StyledHeader>
          <Container maxWidth="lg">
            <Grid container spacing={2} >
              <Grid 
                size={{xs:3, md:3}}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                  }}
                >
                  <StyledButton onClick={() => navigate("/")} customColor="#000" customBorder="none">
                      <ArrowBackIosNewIcon />
                      
                  </StyledButton>
                </Box> 
              </Grid>  
              <Grid size={{xs:9, md:9}}> 
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "25px",
                    paddingLeft: "12rem",
                    "@media (max-width: 1920px)": {
                        paddingLeft: "12rem",
                      },
                    "@media (max-width: 1440px)": {
                        paddingLeft: "15rem",
                      },
                      "@media (max-width: 1024px)": {
                        paddingLeft: "12rem",
                      },
                    "@media (max-width: 768px)": {
                        paddingLeft: "7rem",
                      },
                    "@media (max-width: 700px)": {
                        paddingLeft: "7rem",
                      },
                    "@media (max-width: 600px)": {
                        paddingLeft: "5rem",
                      },
                     "@media (max-width: 426px)": {
                        paddingLeft: "2.5rem",
                      }, 
                      "@media (max-width: 375px)": {
                        paddingLeft: "1.5rem",
                      }, 
                      "@media (max-width: 320px)": {
                        paddingLeft: "1rem",
                      },
                  }}  
                >          
                  <Typography
                    sx={{
                      color: "primary.contrastText",
                    }}
                    variant="h4"
                  >
                      Certificados
                  </Typography>
                </Box>
              </Grid>
            </Grid>   
          </Container>    
        </StyledHeader>

        <CertificateItem />

      </>  
    );
}

export default Certificates;
