import React from 'react';
import Slider, { Settings } from 'react-slick';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Button, 
  styled,
  //useTheme
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Importante: Importar o CSS do slick-carousel
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// --- 1. Definição dos Tipos ---
interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

// --- 2. Dados Mockados (Exemplo) ---
const projects: Project[] = [
  { id: 1, title: "Frete Em Movimento", description: "LandingPage projetada para captação de leads no setor de fretes.", link: "#" },
  { id: 2, title: "Devocionais Diárias", description: "API de devocionais diárias para sites de igrejas.", link: "#" },
  { id: 3, title: "ColorPalettes", description: "Gerador de paletas de cores dinâmicas.", link: "#" },
  { id: 4, title: "Cardápio Burguer", description: "Cardapio online para restaurante projeto desenvolvido durante curso de tailwind.", link: "#" },
  { id: 5, title: "Inconformados", description: "LandingPage desenvolvida para grupo de jovens da igreja metodista.", link: "#" },
];

const ProjectCarousel: React.FC = () => {
  //const theme = useTheme();

  // --- 3. Configurações do Carrossel (react-slick) ---
  const settings: Settings = {
    dots: true,
    infinite: true,       // Loop infinito
    speed: 500,
    slidesToShow: 3,      // 3 cards por vez
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 960, // Tablet
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 600, // Mobile
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const StyledContainer = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
    padding: theme.spacing(8),
    '.slick-prev:before, .slick-next:before': {
        color: theme.palette.primary.main,
    }
  }));

  return (
    <StyledContainer>
      <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4, fontWeight: 'bold', color: 'primary.main' }}>
        Projetos
      </Typography>

      {/* Box envolve o Slider para ajustar as margens laterais das setas */}
      <Box sx={{ px: { xs: 0, md: 2 } }}>
        <Slider {...settings}>
          {projects.map((project) => (
            // A div extra é necessária porque o Slider injeta props no filho direto
            <Box key={project.id} sx={{ p: 2 }}> 
              <Card 
                elevation={0} // Começa sem sombra padrão do Material
                sx={{
                  height: '300px', // Altura fixa para alinhamento
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: '16px',
                  border: '2px solid',
                  borderColor: 'grey.300', // Borda inicial cinza suave
                  backgroundColor: 'background.paper',
                  transition: 'all 0.3s ease-in-out', // Suavidade na animação
                  cursor: 'pointer',
                  
                  // --- A MÁGICA DO HOVER ---
                  '&:hover': {
                    borderColor: '#2196f3', // Azul Material (Main)
                    transform: 'translateY(-5px)', // Leve subida
                    boxShadow: `0 8px 24px rgba(33, 150, 243, 0.3), 
                                0 0 0 2px rgba(33, 150, 243, 0.1)`, // Glow azulado
                    
                    // Altera elementos filhos no hover do pai (opcional)
                    '& .project-btn': {
                      backgroundColor: '#2196f3',
                      color: '#fff'
                    }
                  }
                }}
              >
                <CardContent sx={{ px: 4 }}>
                  <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', mb: 2 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    {project.description}
                  </Typography>
                  
                  <Button 
                    className="project-btn" 
                    variant="outlined" 
                    endIcon={<ArrowForwardIcon />}
                    href={project.link}
                    sx={{ 
                      borderRadius: '20px',
                      textTransform: 'none',
                      transition: 'all 0.3s',
                      // Estilo padrão do botão
                      borderColor: '#2196f3',
                      color: '#2196f3'
                    }}
                  >
                    Acessar
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Slider>
      </Box>
    </StyledContainer>
  );
};

export default ProjectCarousel;