import { createGlobalStyle } from 'styled-components';

const Styles = createGlobalStyle`
  body {    
    background-color: #ffff;
   
  }

  #root{
    padding: 0rem !important;
  }

  .gray-button {
    background-color: gray;
    color: white;
  }
  
  .gray-button:hover {
    background-color: darkgray;
  }

  .custom-circular-slider .circular-slider-knob {
  background-color: #000; /* Color del botón */
  width: 24px; /* Ancho del botón */
  height: 24px; /* Altura del botón */
}

.custom-circular-slider .circular-slider-track {
  stroke-width: 10; /* Ancho de la pista */
}

.custom-circular-slider .circular-slider-progress {
  stroke-width: 10; /* Ancho del progreso */
}

.custom-circular-slider .circular-slider-label {
  font-size: 24px; /* Tamaño de la fuente de la etiqueta */
  color: red; /* Color de la etiqueta */
}
    
`;

export default Styles;