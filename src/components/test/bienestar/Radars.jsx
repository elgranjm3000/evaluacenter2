import React, { useState,useEffect } from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import { RoundSlider } from 'mz-react-round-slider';
import { Box, LinearProgress, Typography, useMediaQuery, useTheme,Fade,Modal } from '@mui/material';
import styles from '../../styles';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ObjectiveScreen from './ObjetiveScreen';
import Objective from './Objetive';
import { useTranslation } from 'react-i18next';


const ProgressBar = ({ value }) => {
  // Asegúrate de que el valor sea un número
  const numericValue = Number(value);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));  
  const classes = styles(isMobile);

  return (
    <Box display="flex" alignItems="center">      
      <Box width="100%" mr={1}>        
        <LinearProgress variant="determinate" value={numericValue} />
        <Typography variant="body1" paragraph style={classes.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        </Typography>
      </Box>
    </Box>
  );
};


const Radars = ({ profileData, steps, valueProgress,pointers,setPointers }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));  
  const classes = styles(isMobile);
  const labels = [0,0.5,1,1.5,2.5,3,3.5,4.5,5,5.5,6,6.5,7,7.5,8,8.5,9,9.5,10];
  const [valueOpen, setValueOpen] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [valueOpenObjetive, setValueOpenObjetive] = useState('');
  const [openModalObjetive, setOpenModalObjetive] = useState(false);
  const [size, setSize] = useState(400); 
  const { t } = useTranslation();

  useEffect(() => {
    function handleResize() {
      const newSize = Math.min(window.innerWidth * 0.8, 350);
      setSize(newSize);
    }

    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleOpen = () => {
     setOpenModal(true);
  } 
  const handleOpenObjetive = () => {
    setOpenModalObjetive(true);
 } 

  const handleClose = () => { setOpenModal(false); }
  const handleValuesOpen = (params) => setValueOpen(params) 


  const handleCloseObjetive = () => { setOpenModalObjetive(false); }
  const handleValuesOpenObjetive = (params) => setValueOpenObjetive(params) 

  return (
    <>
    <div>
      <Typography variant="h6" gutterBottom style={classes.moreDescription}>
        
          {(steps + 1) * 4} de 24
        </Typography>
        <ProgressBar value={valueProgress} />
      </div>
      


      <Typography variant="h6" gutterBottom style={classes.moreDescription}>        
            {t('state')} 
      </Typography>
  
      <Button variant="contained"  endIcon={<KeyboardArrowRightIcon />} style={{background:"#ffff",color:"black",marginBottom:"10px",width:"100%",textTransform:"none"}} onClick={handleOpen}>
        <span style={{ marginRight: "auto" }}>{valueOpen ? (<p>{valueOpen}</p>) : ( <p>Valorar </p>) } </span>
      </Button>


      <Typography variant="h6" gutterBottom style={classes.moreDescription}>        
          {t('stateForm')} 
      </Typography>
      <Button variant="contained"  endIcon={<KeyboardArrowRightIcon />} style={{background:"#ffff",color:"black",marginBottom:"10px",width:"100%",textTransform:"none"}} onClick={handleOpenObjetive}>
        <span style={{ marginRight: "auto" }}>{valueOpenObjetive ? (<p>{valueOpenObjetive}</p>) : ( <p>Valorar </p>) } </span>
      </Button>
      
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <ObjectiveScreen handleValuesOpen={handleValuesOpen} handleClose={handleClose}/>
        </Box>
      </Modal>

     
      <Modal
        open={openModalObjetive}
        onClose={handleCloseObjetive}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          <Objective handleValuesOpenObjetive={handleValuesOpenObjetive} handleCloseObjetive={handleCloseObjetive}/>
        </Box>
      </Modal>

    </>
  );
};


export default Radars;
