import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
    height: 16rem;
    
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 2rem 1rem ;
    
    button {
        padding: 1rem 2rem;
        border: none;
        color: var(--white);
        background: var(--blue-light);
        border-radius: .25rem;
        transition: 1s;
        
        &:hover{
            filter: brightness(.9);
        }
    }
`;