import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 2rem;
  margin-top: -8rem;
  
  
  div{
      @media(max-width:700px) {
        padding: 1.5rem 1rem;
        width: 100%;
        
      }
      background: var(--white);
      padding: 1.5rem 2rem;
      border-radius: .25rem;
      
      color:var(--title);

      header {
          display: flex;
          align-items: center;
          justify-content: space-between;

      }
      strong{
          display: block ;
          margin-top: 1rem;
          font-size:2rem;
          font-weight: 500;
          line-height: 3rem;

          @media(max-width:700px){
              font-size: 1.5rem;
          }
      }
      &.highlight-background{
          background: var(--green);
          color:var(--white) ;
      }
  }

`;