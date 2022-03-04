import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
    height: 21.2rem;
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 3.2rem 1.6rem ;
    
    button {
        padding: 1.2rem 3.2rem;
        border: none;
        color: var(--white);
        background: var(--blue-light);
        border-radius: .5rem;
        transition: 1s;
        
        &:hover{
            filter: brightness(.9);
        }
    }
`;