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
  }
  

});

export default styles;