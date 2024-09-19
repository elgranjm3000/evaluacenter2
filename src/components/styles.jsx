const fontFamily = 'IBM Plex Sans';

const styles = (isMobile) => ({
  pandingBox: {
    padding: isMobile ? "5px" : "50px", 
  },
  img: {
    width: 58, 
    height: 58, 
    objectFit: 'cover' 
  },
  boxMargin:{
    marginTop: isMobile ? "5px" : "30px", 
  },
  acceptCheck:{
    color:"black", 
    marginTop: isMobile ? "20px" : "100px", 
  },
  contentLetter:{
        textAlign:"left",
        fontSize:isMobile ? "10px" : "14px"
  },
  item:{
      padding: isMobile ? "5px" : "20px",
      fontSize: isMobile ? "10px" : "20px",
  },
  sortableList:{
    padding:isMobile ? "5px" : "20px",
  },
  moreDescription:{
    color:"black", 
    textAlign:"center", 
    marginTop:"10px",
    fontSize: isMobile ? "10px": "20px"
  },
  nextButton:{
    width: "100%",
    fontSize: isMobile ? "10px": "20px"
  },
  previousButton:{
    width: "100%",
    fontSize: isMobile ? "10px": "20px",
    marginTop: "15px"
  },
  titleLogin: {
    color: "#1A2021",
    fontSize: "20px",
    fontFamily: fontFamily,
    fontWeight: '700',    
    wordWrap: 'break-word',
  },
  subTitleLogin: {
    color: '#1A2021',
    fontSize: "12.80px",
    fontFamily: fontFamily,
    fontWeight: '400',  
    wordWrap: 'break-word',
    marginTop: "16px",
    marginBottom: "24px"
  },
  buttonLogin: {
    color: 'white',
    fontSize: '16px',
    fontFamily: fontFamily,
    fontWeight: '500',    
    wordWrap: 'break-word',
    textTransform: 'capitalize'
  },
  passwordLoginRecover:{
    color: '#1A2021',
    fontSize: "16px",
    fontFamily: fontFamily,
    fontWeight: '400',
    textDecoration: 'underline',    
    wordWrap: 'break-word'
  },
  urlDivPassword:{
    marginTop:"24px",
    marginBottom:"24px"
  },
  footer:{
    color: '#535859',
    fontSize: "12.80",
    fontFamily: 'IBM Plex Sans',
    fontWeight: '400',    
    wordWrap: 'break-word'
  },

  text:{
    textAlign:'left',
    marginTop:'20px',
    fontSize: isMobile ? "10px": "20px",
  },

  radar:{
    width: "80vw",
    height: "80vw",
    maxWidth: "400px",
    maxheight: "400px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  modalRadarObservadores: {
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translate(-50%, 0%)',
    width: '100%',
    maxWidth: 400,
    height:300,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: '8px 8px 0 0',
    p: 4,
  }




});

export default styles;