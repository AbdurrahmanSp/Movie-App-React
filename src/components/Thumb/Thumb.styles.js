
import styled from 'styled-components';

export const Image = styled.img`
   width: 100%;
   max-width: 720px;
   transition: all 300ms;
   object-fit: cover;
   border-radius: 5px;
   box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
   transition: transform .2s;
   animation: animateThumb 500ms;

   :hover {
    transform: scale(1.03);
   }

    @keyframes animateThumb {
       from {
           opacity: 0;
       }
       to { 
           opacity: 1;
       }
    } 
`;