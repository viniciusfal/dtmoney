import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem ;

    table {
        width:100% ;
        border-spacing: 0 0.5rem;

        th {
            padding: 1rem 2rem ;
            font-weight: 400 ;
            color: var(--text);
            line-height:1.5rem ;
            text-align: left;
        }

        td{
            padding:1rem 2rem;
            background: var(--white);
            color: var(--text);
            border: 0;

            &:first-child{
                color: var(--title)
            }
            

            &.deposit{
                color: var(--green);
            }
            &.withdraw{
                color:var(--red);
            }
        }
    }

`;