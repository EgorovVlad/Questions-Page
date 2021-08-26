import { createGlobalStyle } from 'styled-components';
// import garamondFont from "./Garamond/GaramondFont.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Garamond';
        src: local('Garamond'), local('Garamond');
        url('./Garamond/GaramondFont.ttf') format('trueTipe');
        font-weight: 300;
        font-style: normal;
    }
`;