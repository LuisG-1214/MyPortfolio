import {
  Box,
  Container,
  Typography,
  styled,
  Chip,
  Grid,
} from "@mui/material";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const projects = [
  {
    title: "Palette Creator",
    description:
      "Gerador de paletas de cores com manipulação de DOM, conversões HEX e HSL, e layout SPA responsivo.",
    image: "/src/assets/Images/palette1.jpg",
    link: "https://linktr.ee/LuisGustavoAlves1214",
    techs: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Dev Burguer",
    description:
      "Sistema de cardápio com carrinho, feito com TailwindCSS, JavaScript e Mobile-First.",
    image: "/src/assets/Images/capa.jpg",
    link: "https://linktr.ee/LuisGustavoAlves1214",
    techs: ["HTML", "TailwindCSS", "JavaScript"],
  },
  {
    title: "PetLife",
    description:
      "Landing page para clínica pet, moderna, responsiva e com elementos dinâmicos.",
    image: "/src/assets/Images/petlife1.jpg",
    link: "https://linktr.ee/LuisGustavoAlves1214",
    techs: ["HTML", "CSS", "JavaScript"],
  },
];

const StyledSection = styled("section")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  padding: "4rem 0",
}));

const CardContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  borderRadius: "12px",
  cursor: "pointer",
  border: `1px solid ${theme.palette.secondary.dark}`,
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
  },
  "&:hover .overlay": {
    opacity: 1,
  },
}));

const Image = styled("img")({
  width: "100%",
  height: "auto",
  display: "block",
});

const Overlay = styled(Box)(({  }) => ({
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

const Projects = () => {
  return (
    <StyledSection id="projects">
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          fontFamily="montserrat"
          textAlign="center"
          color="primary.contrastText"
          mb={5}
        >
          Projetos
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <CardContainer>
                <Image src={project.image} alt={project.title} />

                <Overlay className="overlay">
                  <Typography
                    variant="h5"
                    fontFamily="montserrat"
                    mb={1}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    mb={2}
                    sx={{ opacity: 0.8 }}
                  >
                    {project.description}
                  </Typography>
                  <Box
                    display="flex"
                    gap={1}
                    flexWrap="wrap"
                    justifyContent="center"
                    mb={2}
                  >
                    {project.techs.map((tech, i) => (
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
                    onClick={() => window.open(project.link)}
                    customBorder="#000"
                    customColor="#5ED3F3"
                  >
                    Ver Projeto
                    <ArrowOutwardIcon />
                  </StyledButton>
                </Overlay>
              </CardContainer>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledSection>
  );
};

export default Projects;
