import React, { useState, useEffect } from 'react';
import {
  grayBg,
  almostWhite,
  center,
  evaluacenterTextColor,
  btnBgColor,
  evaluacenterFontRegular,
} from './globalSyles'

const inputBorderColor = '#e5e6e7';

const styles = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    container: {
      flex: 1,
      justifyContent: center,
      alignItems: center,
      backgroundColor: grayBg,
    },
    content: {
      marginTop: 60,
      flex: 8,
      justifyContent: center,
      alignItems: center,
    },
    evaluacenter: {
      marginTop: 20,
      marginBottom: 10,
    },
    messageError: {
      marginBottom: 20,
    },
    image: {
      height: 100,
      width: 100,
    },
    WrapperImage: {
      padding: 20,
    },
    input: {
      backgroundColor: almostWhite,
      borderRadius: 1,
      borderColor: inputBorderColor,
      borderWidth: 1,
      paddingVertical: 3,
      paddingHorizontal: 12,
      width: windowWidth - 90,
      marginTop: 15,
      fontSize: 14,
      color: evaluacenterTextColor,
      fontFamily: evaluacenterFontRegular,
    },
    btn: {
      flexDirection: 'row',
      backgroundColor: btnBgColor,
      alignItems: center,
      justifyContent: center,
      borderRadius: 3,
      paddingHorizontal: 12,
      paddingVertical: 6,
      width: windowWidth - 90,
      marginTop: 30,
    },
    spin: {
      marginLeft: 10,
    },
    company: {
      marginTop: 30,
    },
  };
};

export default styles;
