import styled from "styled-components";

  export const DetailsWrapper = styled.div`
        margin-top: 10rem;
        margin-bottom: 5rem;
        display: flex;

        .active {
            background: linear-gradient(35deg, #494949, #313131);
            color: white;
        }

        h2 {
            margin-bottom: 2rem;
        }

        li {
            font-size: 1.2rem;
            line-height: 2.5rem;
        }

        ul {
            margin-top: 2rem;
        }
`;

export const Button = styled.button`
        padding: 1rem 2rem;
        color: #313131;
        background: white;
        border: 2px solid black;
        margin-right: 2rem;
        font-weight: 600;
`;

export const Info = styled.div`
        margin-left: 10rem;
`;