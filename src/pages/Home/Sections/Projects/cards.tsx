import { Box, Button, Container, Typography, styled } from "@mui/material";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Chip } from "@mui/material";
import { useState } from "react";
import palletebg from "../../../../assets/Images/palettebg.jpg";
import capa from "../../../../assets/Images/capa.jpg";
import petlife1 from "../../../../assets/Images/petlife1.jpg";
import frete1 from "../../../../assets/Images/frete1.jpg";
import InLp from "../../../../assets/Images/InLp.png";
import OneTap from "../../../../assets/Images/OneTap.jpg";

const projects = [
  {
    title: "Palette Creator",
    description:
      "Gerador de paletas de cores com manipulação de DOM, conversões HEX e HSL, e layout SPA responsivo.",
    image: palletebg,
    link: "https://linktr.ee/LuisGustavoAlves1214",
    techs: ["HTML", "CSS", "JavaScript"],
    id: 0,
  },
  {
    title: "Dev Burguer",
    description:
      "Sistema de cardápio com carrinho, feito com TailwindCSS, JavaScript e Mobile-First.",
    image: capa,
    link: "https://linktr.ee/LuisGustavoAlves1214",
    techs: ["HTML", "TailwindCSS", "JavaScript"],
    id: 1,
  },
  {
    title: "PetLife",
    description:
      "Landing page para clínica pet, moderna, responsiva e com elementos dinâmicos.",
    image: petlife1,
    link: "https://linktr.ee/LuisGustavoAlves1214",
    techs: ["HTML", "CSS", "JavaScript"],
    id: 2,
  },
  {
    title: "Frete Em Movimento",
    description:
      "Site institucional para empresa de transporte, com design responsivo e otimizado.",
    image: frete1,
    link: "https://freteemmovimento.com.br/",
    techs: ["HTML", "Tailwind CSS", "JavaScript"],
    id: 3,
  },
  {
    title: "Inconformados",
    description:
      "LandingPage para grupo de jovens da Igreja Metodista Londrina Sul, com design responsivo e otimizado.",
    image: InLp,
    link: "https://linktr.ee/LuisGustavoAlves1214",
    techs: ["ReactJS", "Material UI", "TypeScript"],
    id: 4,
  },
  {
    title: "OneTapPromos",
    description:
      "O OneTapPromos é uma ferramenta automática que reúne as melhores promoções de jogos, entregando diretamente no seu e-mail de forma simples, rápida e sem complicações.",
    image: OneTap,
    link: "https://linktr.ee/LuisGustavoAlves1214",
    techs: ["Python", "Selenium", "Pandas"],
    id: 5,
  }
];

const Image = styled("img")({
  width: "100%",
  height: "auto",
  display: "flex",
  zIndex: -1,
});


const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  inset: 0,
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  color: "#fff",
  opacity: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "1rem",
  transition: "opacity 0.3s ease",
}));

const Cards = () => {

    const [isChanging, setisChanging] = useState(false);

    const [indexes, setIndexes] = useState({
        left: 0,
        center: 5,
        right: 4,
    });

    const projectL = projects[indexes.left];
    const projectC = projects[indexes.center];  
    const projectR = projects[indexes.right];

    const chengeCardsNext = () => {
        setisChanging(true);
        setTimeout(() => {
        setIndexes({
           left: 1,
           center: 3,
           right: 2, 
        })
        setisChanging(false);
        }, 300);
    }

    const chengeCardsPrev = () => {
        setisChanging(true);
        setTimeout(() => {
        setIndexes({
           left: 0,
           center: 5,
           right: 4, 
        })
        setisChanging(false);
        }, 300);
    }

    return (
        <Container maxWidth="lg">
            <Typography 
              variant="h4" 
                sx={{ 
                    mt: 4, 
                    mb: 2, 
                }}
              color="white" 
              textAlign="center" 
              gutterBottom 
              fontFamily="montserrat"
              >
                Meus Projetos
              </Typography>

            <Box sx={{ 
                opacity: isChanging ? 0 : 1,
                transition: "opacity 0.3s ease",
                display: "flex", 
                flexDirection: { xs: "column", md: "row" }, 
                justifyContent: "center",
                alignItems: "center",
                height: "100vh", 
                textAlign: "center",
                gap: 4, 
                my: 4 
            }}>
                <Box sx={{
                    borderRadius: "12px",
                    position: "relative",
                    overflow: "hidden",
                    width: "300px",
                    height: "500px",
                    border: `1px solid #5ED3F3`,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                        transform: "scale(1.02)",
                        cursor: "pointer",
                    },
                    "&:hover .overlay": {
                        opacity: 1,
                    },
                }}>
                    <Typography sx={{
                        color:"white",
                        position: "absolute",
                        zIndex: 1,
                        top: "1rem",
                        fontFamily: "montserrat",
                        left: "50%",
                        transform: "translateX(-50%)",
                        }}
                    >
                        {/* {projectL.title} */}
                    </Typography> 
                    <Image src={projectL.image} alt={projectL.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />

                    <Overlay className="overlay">
                        <Typography
                            variant="h5"
                            fontFamily="montserrat"
                            mb={1}
                        >
                            {projectL.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            mb={2}
                            sx={{ opacity: 0.8 }}
                        >
                            {projectL.description}
                        </Typography>
                        <Box
                            display="flex"
                            gap={1}
                            flexWrap="wrap"
                            justifyContent="center"
                            mb={2}
                        >
                            {projectL.techs.map((tech, i) => (
                                <Chip
                                key={i}
                                label={tech}
                                size="small"
                                    sx={{
                                        backgroundColor: "#5ED3F3",
                                        color: "#000",
                                        fontWeight: "bold",
                                    }}
                                />
                            ))}
                        </Box>
                        <StyledButton
                            onClick={() => window.open(projectL.link)}
                            customBorder="#000"
                            customColor="#5ED3F3"
                        >
                            Ver Projeto
                            <ArrowOutwardIcon />
                        </StyledButton>
                    </Overlay>
                </Box>
                <Box sx={{
                    borderRadius: "12px",
                    position: "relative",
                    overflow: "hidden",
                    width: "400px",
                    height: "600px",
                    border: `1px solid #5ED3F3`,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                        transform: "scale(1.02)",
                        cursor: "pointer",
                    },
                    "&:hover .overlay": {
                        opacity: 1,
                    },
                }}>
                    <Typography sx={{
                        color:"white",
                        position: "absolute",
                        zIndex: 1,
                        top: "1rem",
                        fontFamily: "montserrat",
                        left: "50%",
                        transform: "translateX(-50%)",
                        }}
                    >
                        {/* {projectC.title} */}
                    </Typography> 
                    <Image src={projectC.image} alt={projectC.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />

                    <Overlay className="overlay">
                        <Typography
                            variant="h5"
                            fontFamily="montserrat"
                            mb={1}
                        >
                            {projectC.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            mb={2}
                            sx={{ opacity: 0.8 }}
                        >
                            {projectC.description}
                        </Typography>
                        <Box
                            display="flex"
                            gap={1}
                            flexWrap="wrap"
                            justifyContent="center"
                            mb={2}
                        >
                            {projectC.techs.map((tech, i) => (
                                <Chip
                                key={i}
                                label={tech}
                                size="small"
                                    sx={{
                                        backgroundColor: "#5ED3F3",
                                        color: "#000",
                                        fontWeight: "bold",
                                    }}
                                />
                            ))}
                        </Box>
                        <StyledButton
                            onClick={() => window.open(projectC.link)}
                            customBorder="#000"
                            customColor="#5ED3F3"
                        >
                            Ver Projeto
                            <ArrowOutwardIcon />
                        </StyledButton>
                    </Overlay>
                </Box>
                <Box sx={{
                    borderRadius: "12px",
                    position: "relative",
                    overflow: "hidden",
                    width: "300px",
                    height: "500px",
                    border: `1px solid #5ED3F3`,
                    transition: "transform 0.3s ease",
                    "&:hover": {
                        transform: "scale(1.02)",
                        cursor: "pointer",
                    },
                    "&:hover .overlay": {
                        opacity: 1,
                    },
                }}>
                    <Typography sx={{
                        color:"white",
                        position: "absolute",
                        zIndex: 1,
                        top: "1rem",
                        fontFamily: "montserrat",
                        left: "50%",
                        transform: "translateX(-50%)",
                        }}
                    >
                        {/* {projectR.title} */}
                    </Typography> 
                    <Image src={projectR.image} alt={projectR.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />

                    <Overlay className="overlay">
                        <Typography
                            variant="h5"
                            fontFamily="montserrat"
                            mb={1}
                        >
                            {projectR.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            mb={2}
                            sx={{ opacity: 0.8 }}
                        >
                            {projectR.description}
                        </Typography>
                        <Box
                            display="flex"
                            gap={1}
                            flexWrap="wrap"
                            justifyContent="center"
                            mb={2}
                        >
                            {projectR.techs.map((tech, i) => (
                                <Chip
                                key={i}
                                label={tech}
                                size="small"
                                    sx={{
                                        backgroundColor: "#5ED3F3",
                                        color: "#000",
                                        fontWeight: "bold",
                                    }}
                                />
                            ))}
                        </Box>
                        <StyledButton
                            onClick={() => window.open(projectR.link)}
                            customBorder="#000"
                            customColor="#5ED3F3"
                        >
                            Ver Projeto
                            <ArrowOutwardIcon />
                        </StyledButton>
                    </Overlay>        
                </Box>
            </Box>
            <Box 
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    maxWidth: "600px",
                    margin: "0 auto",
                    mb: 4,
                }}
            >
                <Button>
                    <StyledButton onClick={chengeCardsPrev} customColor="#ffffff" customBorder="#000">
                        <ArrowLeftIcon />
                    </StyledButton>  
                </Button> 
                <Typography
                    variant="body1"
                    color="white"
                    fontFamily="montserrat"
                >
                    Mais Projetos          
                </Typography>                 
                <Button>
                    <StyledButton onClick={chengeCardsNext} customColor="#ffffff" customBorder="#000">
                        <ArrowRightIcon />
                    </StyledButton>
                </Button>
            </Box>
        </Container>
    )
}

export default Cards;