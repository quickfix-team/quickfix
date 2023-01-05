import { createGlobalStyle } from 'styled-components'; 

export const GlobalStyles = createGlobalStyle` 

    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&display=swap');
  
    :root{
      --color-primary-1: #0B0D40;
      --color-primary-2: #008BDA;
      --color-primary-3: #F7F7F7;
     
      --color-sucess: #168821;
      --color-negative: #E60000;
      --color-warning: #FFCD07;
      --color-information:#155BCB;

      --color-screen-modal:#008ada2a;

      --radius:30px;

      --font-size-1: 22px;
      --font-size-2: 16px;
      --font-size-3: 14px;
     
      --font-weight-1: 600;
      --font-weight-2: 700;

      --line-height: 150%;
    }
  
    body{
        font-family: 'Nunito', sans-serif;
    }
  
` 

