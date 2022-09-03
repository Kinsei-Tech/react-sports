import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root{
 --color-green-primary: #93c335;
 --color-green-primary-hover:#6e9423;
 --color-green-primary-blur: rgba(110,148,35,0.77);
 --color-green-second: #4A6416;

 --color-yellow-primary: #f2cc50; 
 --color-yellow-primary-hover:#f0c126; 
 --color-yellow-second:#F1BA06;
 --color-yellow-primary-negative: #675722;


 --gray-0: #d9d9d9;
 --gray-1: #DAE3C8;
 --gray-2: #202020;
 --gray-2-blur: rgba(30, 30, 30, 0.71);

 --success: #26ff03;
 --error: #ff0303;
}


body {
    font-family: 'Inter', sans-serif;
    background-color: var(--gray-0);
    }

    h1,h2,h3{
        font-family: 'Inter', sans-serif;
        font-weight: bold;

    }

    p,span{
        font-family: 'Inter', sans-serif;
    }

    button {
        cursor: pointer;
    }

* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    }

`;
