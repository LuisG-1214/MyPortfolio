import { Box, Container, Grid2, Typography } from "@mui/material";
import { motion } from "framer-motion";
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

// Importando as imagens das tecnologias
import js from "../../../../assets/Images/js.png";
import reactjs from "../../../../assets/Images/reactjs.png";
import nodejs from "../../../../assets/Images/nodejs.png";
import html from "../../../../assets/Images/html.png";
import bootstrap from "../../../../assets/Images/bootstrap.png";
import mui from "../../../../assets/Images/mui.jpg"; // Supondo que você tenha um ícone para o Material-UI
import git from "../../../../assets/Images/git.png"; // Supondo que você tenha um ícone para o Git
import mysql from "../../../../assets/Images/mysql.png"; // Supondo que você tenha um ícone para o MySQL

interface Skill {
  id: number;
  name: string;
  img: string;
}

const skills: Skill[] = [
  { id: 1, name: "JavaScript & TS", img: js },
  { id: 2, name: "React.js", img: reactjs },
  { id: 3, name: "Node.js", img: nodejs },
  { id: 4, name: "HTML & CSS", img: html },
  { id: 5, name: "BootStrap & Sass", img: bootstrap },
  { id: 6, name: "Material UI", img: mui },
  { id: 7, name: "Git & GitHub", img: git },
  { id: 8, name: "Mysql", img: mysql },
]

const About = () => {
    const divVariants = {
      hidden: (direction: string) => ({
        opacity: 0,
        x: direction === "left" ? "-50%" : "100%",
      }),
      visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8 },
      },
    };

    return (
      <>
        <Box sx={{ py: 6, backgroundColor: "primary.main.contrast" }} id="sobre">
            <Container maxWidth="lg">
              <Typography 
              variant="h3" 
              color="primary.main" 
              textAlign="center" 
              gutterBottom 
              fontFamily="montserrat"
              >
                Sobre
              </Typography>

              <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "center", gap: 4, my: 4 }}>
                <motion.div
                  custom= "left"
                  variants={divVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount:0.5}}
                >
                  <Box sx={{
                    p:4,
                    bgcolor: "primary.main.contrast",
                    boxShadow: 2,
                    borderRadius: 2,
                    textAlign: "center",
                  }}
                  >
                    <WorkspacePremiumIcon/>
                    <Typography 
                      variant = "h6" 
                      display="flex" 
                      justifyContent="center"
                    >
                      Experiencia
                    </Typography>
                    
                    <Typography 
                      display="flex" 
                      justifyContent="center"
                    >
                      1+ Ano
                    </Typography>
                    
                    <Typography 
                      display="flex" 
                      justifyContent="center" 
                    >
                      Desenvolvimento Web
                    </Typography>
                  </Box>
                </motion.div>

                <motion.div
                  custom= "right"
                  variants={divVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount:0.5}}
                >
                  <Box sx={{
                    p:4,
                    bgcolor: "primary.main.contrast",
                    boxShadow: 2,
                    borderRadius: 2,
                    textAlign: "center",
                  }}
                  >
                    <SchoolIcon/>
                    <Typography 
                      variant = "h6" 
                      display="flex" 
                      justifyContent="center"
                    >
                      Educação
                    </Typography>
                    
                    <Typography 
                      display="flex" 
                      justifyContent="center"
                    >
                      Graduação
                    </Typography>
                    
                    <Typography 
                      display="flex" 
                      justifyContent="center" 
                      mx={2}
                    >
                      Análise de sistemas
                    </Typography>
                  </Box>
                </motion.div>
              </Box>

              <Box textAlign="justify" my={4}>
                <Typography 
                  variant="body1" 
                  color="primary.main" 
                  fontFamily="montserrat"
                >
                  Desenvolvedor front-end com experiência em criação de interfaces intuitivas e visualmente atraentes. Possuo conhecimento em desenvolvimento web com JavaScript e frameworks, e linguagem python. Busco constantemente aprimorar minhas habilidades e aplicar as mais recentes tecnologias para garantir uma experiência de usuário excepcional.
                </Typography>

                <Box
                  component="hr"
                  sx={{
                    border: "none",
                    height:"1px",
                    bgcolor: "primary.main",
                    width: "100%",
                    mx: "auto",
                    mt: 2,
                  }} 
                >
                </Box>
                <Typography
                  variant="h3"
                  color="primary"
                  textAlign="center"
                  gutterBottom
                  fontFamily="montserrat"
                >
                  Skills
                </Typography>
                
                <Grid2 container spacing={3} justifyContent={"center"}>
                  {skills.map((skill) => (
                    <Grid2 size={{xs: 6, sm: 3}} key={skill.id}>
                      <Box
                        sx={{
                          position: 'relative', // Essencial para posicionar o badge
                          p: 2,
                          pb: 2, // Aumenta o padding inferior para dar espaço ao badge
                          bgcolor: "white",
                          boxShadow: 1,
                          borderRadius: 1,
                          textAlign: "center",
                          transition: 'all 0.3s ease-in-out',
                          "&:hover": {
                            cursor: "pointer",
                            borderColor: '#2196f3',
                            boxShadow: `0 8px 24px rgba(33, 150, 243, 0.3),  0 0 0 2px rgba(33, 150, 243, 0.1)`,
                            transform: 'translateY(-5px)',
                          },
                        }}
                      >
                        <Typography variant="subtitle1">{skill.name}</Typography>
                        <Box
                          component="img"
                          src={skill.img}
                          alt={skill.name}
                          sx={{
                            width: '36px',
                            height: '36px',
                            position: 'absolute',
                            bottom: '-10px', 
                            right: '10px',
                            border: 'none'
                          }}
                        />
                      </Box>
                    </Grid2>
                  ))}
                </Grid2>
              </Box>  
            </Container>
        </Box>
      </>
    );
}

export default About;