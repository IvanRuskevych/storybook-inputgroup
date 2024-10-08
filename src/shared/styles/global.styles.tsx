import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    /* You can add global styles to this file, and also import other style files */

    /* RESET STYLES */
    /* 1. Use a more-intuitive box-sizing model. */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* 2. Remove default margin */
    * {
        margin: 0;
    }

    /* Typographic tweaks!
      3. Add accessible line-height
      4. Improve text rendering
    */
    body {
        font-family: Inter, sans-serif;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 1.66667; /* 20px */
        -webkit-font-smoothing: antialiased;

        padding: 50px;

        background-color: ${({ theme }) => theme.colors.bgPlayground};
    }

    /* 5. Improve media defaults */
    img,
    picture,
    video,
    canvas,
    svg {
        display: block;
        max-width: 100%;
        height: auto;
    }

    /* 6. Remove built-in form typography styles */
    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    /* 7. Avoid text overflows */
    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
        hyphens: auto;
    }

    /* 8. Create a root stacking context */
    #root,
    #__next {
        isolation: isolate;
    }

    /* 9. Other reset styles */
    ul {
        list-style: none;
        padding: 0;
    }

    a {
        text-decoration: none;
        outline: 0;
        font-style: normal;
    }
`;
