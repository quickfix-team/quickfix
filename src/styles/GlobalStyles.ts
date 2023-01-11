import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle` 

    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600;700&display=swap');
  
    :root{
      --color-primary: #0B0D40;
      --color-secondary: #008BDA;
      --color-tertiary: #F7F7F7;
     
      --color-sucess: #168821;
      --color-negative: #E60000;
      --color-warning: #FFCD07;
      --color-information:#155BCB;

      --color-screen-modal:#008ada2a;

      --radius:1.875rem;

      --font-size-1: 1.375rem;
      --font-size-2: 1rem;
      --font-size-3: 0.875rem;
     
      --font-weight-1: 600;
      --font-weight-2: 700;

      --line-height: 150%;
    }
  
    body{
        font-family: 'Nunito', sans-serif;
        background-color: var(--color-tertiary);
    }
  
`;
