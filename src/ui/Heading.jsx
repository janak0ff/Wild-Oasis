import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      color: var(--color-brand-500);
      font-size: 3rem;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      color: var(--color-brand-500);
      font-size: 1rem;
    `}


  ${(props) =>
    props.as === "h3" &&
    css`
      color: var(--color-brand-500);
      font-size: 1rem;
    `}

  line-height: 1;
`;

export default Heading;
