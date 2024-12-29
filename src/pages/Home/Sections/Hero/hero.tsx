import {Container, styled, Typography, Box,} from "@mui/material"
import Grid from "@mui/material/Grid2"
import Avatar from "../../../../assets/images/FT.jpg"
import DownloadIcon from '@mui/icons-material/Download'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import StyledButton from "../../../../components/StyledButton/StyledButton"
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground.tsx";
import { motion} from "framer-motion";


const Hero = () => {
    
    const StyledHero = styled("div") (({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "120px",
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0",
            height: "100vh"
        }
    }))

    const StyledImg = styled("img") (({theme}) => ({
        width: "75%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        [theme.breakpoints.down('md')]: {
            width: "50%", 
        },
    }))

    const text = "Front-End Developer";

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const letterVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration:0.5 } },
    }; 

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                        <Grid size={{xs:12 , md:5}} >
                            <Box position="relative">
                                <Box position="absolute" width={"120%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>

                    <Grid size={{xs:12 , md:7}}>

                        <Typography 
                        sx={{ 
                            fontSize: {xs: "2.5rem", sm: "2rem", md: "4rem"},
                            pt: {xs: 2, sm: 4, md: 8},
                        }}
                        color="primary.contrastText" 
                        variant="h1" 
                        textAlign="center" 
                        pb={2}
                        > 
                            Luis Gustavo 
                        </Typography>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                textAlign: 'center',
                            }}
                        >
                                {text.split("").map((char, index) => (
                                    <motion.span key={index} variants={letterVariants} style={{ display: 'inline-block'}}>
                                        <Typography
                                        sx={{ fontSize: {xs: "1.5rem", sm: "2rem", md: "2.5rem"}}} 
                                        color="primary.contrastText" 
                                        variant="h3"
                                        >
                                            {char === " " ? "\u00A0" : char} {/* Adiciona espaço para caracteres vazios */}
                                        </Typography>
                                    </motion.span>
                                ))}
                            </motion.div>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid size={{xs:12 , md:4}} display="flex" justifyContent="center">    
                                    <StyledButton onClick={() => window.open("https://Google.com")}>
                                        <DownloadIcon />
                                        <Typography>
                                            Download CV
                                        </Typography>
                                    </StyledButton>
                            </Grid>
                            <Grid size={{xs:12 , md:4}} display="flex" justifyContent="center">    
                                    <StyledButton onClick={() => window.open("https://google.com")}>
                                        <AlternateEmailIcon />
                                        <Typography>
                                            Contact me
                                        </Typography>
                                    </StyledButton>
                            </Grid>    
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero
  