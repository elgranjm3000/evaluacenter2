import React, { useState, useEffect } from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import { RoundSlider } from 'mz-react-round-slider';
import {
  Modal,
  Box,
  LinearProgress,
  Typography,
  useMediaQuery,
  useTheme,
  Fade,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  ListItemIcon
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';




import styles from '../../styles';
import { useTranslation } from 'react-i18next';


const ProgressBar = ({ value }) => {




  // Asegúrate de que el valor sea un número
  const numericValue = Number(value);

  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" value={numericValue} />
        <Typography variant="body1" paragraph style={{ textAlign: 'left', marginTop: '20px' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
        </Typography>
      </Box>
    </Box>
  );
};


function getStyles(name, personName, theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
    backgroundColor: personName.includes(name)
      ? '#E3FDDD'
      : 'transparent',
    color: personName.includes(name)
      ? '#1A2021'
      : '#000000',

  };
}


const Radars = ({ profileData, steps, valueProgress, pointers,option,comment, handleChange,handleChangeComment }) => {

  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [openObservation, setOpenObservation] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenObs = () => setOpenObservation(true);
  const handleCloseObs = () => setOpenObservation(false);

  const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = styles(isMobile);
  const labels = [0, 0.5, 1, 1.5, 2.5, 3, 3.5, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10];
  const [size, setSize] = useState(400);


  const handleChangeOption = (event) => {
    handleChange(event.target.value);
  };
  const handleChangeCommentOption = (event) => {
    handleChangeComment(event.target.value)
  };

  useEffect(() => {
    function handleResize() {
      const newSize = Math.min(window.innerWidth * 0.8, 350);
      setSize(newSize);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div>
        <Typography variant="h6" gutterBottom style={classes.moreDescription}>

          {(steps + 1) * 4} de 24
        </Typography>
        <ProgressBar value={valueProgress} />
      </div>


      <Typography variant="h6" gutterBottom style={classes.moreDescription} onClick={handleOpen}>
        {t('radares.appreciate')}
      </Typography>
      <Typography variant='h6'>
        {option}
      </Typography>

      <Box style={{ width: size, height: size, justifyContent: "center", alignItems: "center", display: "flex", margin: "0 auto" }}>


        <RoundSlider
          data={labels}
          textColor={'#8993B7'}
          textFontSize={24}
          textFontFamily={'IBM Plex Sans'}
          enableTicks={true}
          showTickValues={true}
          ticksGroupSize={1}
          pointers={[{ value: pointers.value }]}
          pathStartAngle={270}
          pathEndAngle={269.999}
          ticksColor={'#efefef'}
          tickValuesColor={'#6093a3'}
        />


      </Box>

      <Typography variant="h6" gutterBottom style={classes.moreDescription} onClick={handleOpenObs}>
        {t('radares.addcomment')}
      </Typography>
      <Typography variant='h6'>
        {comment}
      </Typography>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={classes.modalRadarObservadores}>
          <Typography id="modal-title" variant="h6" component="h2">
            {t('radares.appreciate')}
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }} style={{ paddingButtom: '120px' }}>
            <FormControl fullWidth >
              <InputLabel id="demo-simple-select-label">{t('option')}</InputLabel>
              <Select
                multiple
                displayEmpty
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={option}
                label={t('option')}
                onChange={handleChangeOption} 
              >
                {names.map((name) => (
                  <MenuItem                   
                    key={name}
                    value={name}
                    style={getStyles(name, option, theme)}
                  >
                    {name}                    
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Typography>

        </Box>
      </Modal>


      <Modal
        open={openObservation}
        onClose={handleCloseObs}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={classes.modalRadarObservadores}>
          <Typography id="modal-title" variant="h6" component="h2">
            {t('radares.addcomment')}
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2 }} style={{ paddingButtom: '120px' }}>
            <FormControl fullWidth >
              <TextField
                id="outlined-multiline-static"
                label={t('radares.addcomment')}
                multiline
                rows={4}
                onChange={handleChangeCommentOption}
                placeholder={t('radares.addcomment')}
              />
              <Button variant="contained" color="success" onClick={handleCloseObs}>Confirmar</Button>

            </FormControl>
          </Typography>

        </Box>
      </Modal>



    </>
  );
};


export default Radars;
