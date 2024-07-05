const fontFamily = 'IBM Plex Sans';

const styles = (isMobile) => ({
  pending: {
    color: "#1A2021",
    fontSize: '20px',
    fontFamily: fontFamily,
    fontWeight: '700',
    lineHeight: '28px'
  },
  subTitle: {
    color: '#1A2021',
    fontSize: '16px',
    fontFamily: fontFamily,
    fontWeight: '400',
    lineHeight: '24px',
    wordWrap: 'break-word'
  },
  imgPadding: {
    paddingTop: '40px'
  },
  buttonList: {
    color: 'white',
    fontSize: '16px',
    fontFamily: fontFamily,
    fontWeight: '500',
    lineHeight: '20px',
    wordWrap: 'break-word',
    backgroundColor: "#1787D8",
    borderRadius: "8px",
    marginTop: "20px",
    paddingLeft: "16px",
    paddingRight: "16px",
    width: "100%"
  },
  cardStyle: {
    padding: isMobile ? "2px" : "5px",
    border: '1px #DBDBDB solid',
    margin: '10px',
    borderRadius: '8px'
  },
  cardContent:{
      paddingLeft: isMobile ? "5px" : "10px",
      paddingTop: isMobile ? "2px" : "10px",
      paddingBottom: isMobile ? "2px" : "10px"
  },
  cardText:{
    fontWeight: 'bold', 
    fontSize: isMobile ? "12px" : "18px"
  },
  cardLink: {
    fontSize:isMobile ? "12px" : "18px"
  },
  cardContentList:{
      textAlign: 'left', 
      paddingLeft:isMobile ? "5px" : "10px", 
      paddingTop:isMobile ? "1px" : "5px",
      paddingBottom: isMobile ? "2px" : "10px"
  }

});

export default styles;