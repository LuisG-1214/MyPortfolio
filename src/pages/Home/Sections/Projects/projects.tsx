import React from 'react';
import { Box, CssBaseline,} from '@mui/material';
import { keyframes, styled } from '@mui/system';
import Cards from './cards';


const moveStars = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-2000px); }
`;

const generateBoxShadow = (count: number) => {
  let shadows = '';
  for (let i = 0; i < count; i++) {
    const x = Math.random() * 2000;
    const y = Math.random() * 2000;
    shadows += `${x}px ${y}px #FFF, `;
  }
  return shadows.slice(0, -2); // Remove a última vírgula
};

const StarLayer = styled(Box)<{ size: string; count: number; animationDuration: string }>(({ size, count, animationDuration }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: size,
  height: size,
  background: 'transparent',
  boxShadow: generateBoxShadow(count),
  animation: `${moveStars} ${animationDuration} linear infinite`,
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '2000px',
    width: size,
    height: size,
    background: 'transparent',
    boxShadow: generateBoxShadow(count),
  },
}));

// const Title = styled(Typography)({
//   position: 'absolute',
//   top: '50%',
//   left: '0',
//   right: '0',
//   color: '#FFF',
//   textAlign: 'center',
//   fontFamily: "'Lato', sans-serif",
//   fontWeight: 300,
//   fontSize: '50px',
//   letterSpacing: '10px',
//   marginTop: '-60px',
//   paddingLeft: '10px',
//   '& span': {
//     background: 'linear-gradient(to right, white, #38495a)',
//     WebkitBackgroundClip: 'text',
//     WebkitTextFillColor: 'transparent',
//   },
// });

const Projects: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ position: 'relative', minHeight: '100vh', background: 'radial-gradient(ellipse at bottom, #000000 0%, #090A0F 100%)', overflow: 'hidden' }} id="projetos">
        <StarLayer size="1px" count={500} animationDuration="15s" />
        <StarLayer size="2px" count={200} animationDuration="20s" />
        <StarLayer size="3px" count={100} animationDuration="25s" />

        <Cards />

      </Box>
    </>
  );
};

export default Projects;
