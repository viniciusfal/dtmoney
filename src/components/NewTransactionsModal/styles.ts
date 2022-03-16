import styled from 'styled-components';
import {darken,transparentize} from 'polished';

export const Container = styled.form`
    color:var(--title);
    font-size: 1.5rem;
    
    margin-bottom: 2rem;
    h2{
        margin-bottom: 1.5rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius:0.25rem;

        border:1px solid #d7d7d7;
        background: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;

        &::placeholder {
            color:var(--text);
        }
        & + input{
            margin-top: 1rem;
        }
    }

    button[type="submit"] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background: var(--green);
        color: var(--white);
        border-radius: 0.25rem;
        border: 0;
        font-size: 1rem;
        font-weight: 600;
        margin-top:1.5rem;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9)
        }
    }
`;

export const TransactionTypeContainer = styled.div`
    margin:1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;    
`;

interface RadioBoxProps {
    isActive:boolean;
    colorActive: 'red' | 'green';
}

const colors = {
    red: '#E62E4D',
    green: '#33CC95',
}

export const RadioBox = styled.div<RadioBoxProps>`
      height: 4rem;
        border:1px solid #d7d7d7;
        border-radius: 0.25rem;

        background: ${(props) => 
        props.isActive ? transparentize(0.9, colors[props.colorActive] )
        : 'transparent'};

        display:flex;
        align-items: center;
        justify-content: center;

        transition: border-color .2s;

        &:hover{
            border-color: ${darken(0.1, '#d7d7d7')};
            cursor: pointer;
        }

        img {
            height: 20px;
            width: 20px;
        }

        span {
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--title);
        }
`;