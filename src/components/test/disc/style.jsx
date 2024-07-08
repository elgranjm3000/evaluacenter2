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
  }
  

});

export default styles;