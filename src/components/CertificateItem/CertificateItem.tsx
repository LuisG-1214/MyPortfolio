import { useState } from "react";
import { Modal, Box, Container, Typography, IconButton } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { styled } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";

// Importando imagens dos ícones
import html from "../../assets/images/html.png";
import css from "../../assets/images/css.png";
import js from "../../assets/images/js.png";
import reactjs from "../../assets/images/reactjs.png";
import nodejs from "../../assets/images/nodejs.png";
import bootstrap from "../../assets/images/bootstrap.png";

// Importando imagens dos certificados
import certHtml from "../../assets/Images/CertHtml.jpg";
import certCss from "../../assets/Images/CertCss.jpg";
import certJs from "../../assets/Images/CertJs.jpg";
import certReact from "../../assets/Images/CertReact.jpg";
import certNode from "../../assets/Images/CertJs.jpg";
import certBootstrap from "../../assets/Images/CertBooststrap.jpg";

const StyledImg = styled("img")({
  height: "100%",
  width: "100%",
  transition: "transform 0.3s ease-in-out, filter 0.3s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(1.1)",
    filter: "brightness(1.5)",
  },
});

const ModalImage = styled("img")({
  maxWidth: "90%",
  maxHeight: "90%",
  borderRadius: "10px",
});

const ModalContent = styled(Box)({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
});

const CloseButton = styled(IconButton)({
  position: "absolute",
  top: 20,
  right: 20,
  color: "#fff",
});

const StyledBody = styled("div")({
  backgroundColor: "#212121",
  minHeight: "100vh",
  height: "auto",
  display: "flex",
  alignItems: "center",
});

const certificates = [
  { id: 1, title: "HTML", img: html, cert: certHtml },
  { id: 2, title: "CSS", img: css, cert: certCss },
  { id: 3, title: "JavaScript", img: js, cert: certJs },
  { id: 4, title: "ReactJs", img: reactjs, cert: certReact },
  { id: 5, title: "NodeJs", img: nodejs, cert: certNode },
  { id: 6, title: "Bootstrap", img: bootstrap, cert: certBootstrap },
];

const CertificateItem = () => {
  const [open, setOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  const handleOpen = (certImg: string) => {
    setSelectedCert(certImg);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCert(null);
  };

  return (
    <StyledBody>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            "@media (max-width: 900px)": {
              paddingTop: "2rem",
            },
          }}
        >
          {certificates.map((cert) => (
            <Grid
              size = {{xs:12,md:4}}
              key={cert.id}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "auto",
                  width: "10rem",
                  backgroundColor: "transparent",
                }}
              >
                <StyledImg src={cert.img} onClick={() => handleOpen(cert.cert)} />
                <Typography
                  sx={{
                    color: "#fff",
                    textAlign: "center",
                    paddingTop: "2rem",
                  }}
                  variant="h4"
                >
                  {cert.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Modal open={open} onClose={handleClose}>
        <ModalContent>
          
          <CloseButton onClick={handleClose}>
            <CloseIcon />
          </CloseButton>

          {selectedCert && <ModalImage src={selectedCert} alt="Certificado" />}
        </ModalContent>
      </Modal>
    </StyledBody>
  );
};

export default CertificateItem;
