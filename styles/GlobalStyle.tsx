import { css, Global, Theme } from '@emotion/react'

export const globalStyles = (
  <Global
    styles={(theme: Theme) => css`
      html,
      body,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      div,
      p,
      span,
      span,
      blockquote,
      pre,
      ul,
      ol,
      dl,
      dt,
      dd,
      main,
      section,
      header,
      footer,
      nav,
      menu,
      a,
      address,
      article,
      aside,
      canvas,
      code,
      img,
      video,
      audio,
      table,
      input,
      textarea,
      label,
      figure,
      fieldset,
      figcaption {
        padding: 0;
        margin: 0;
        border: 0;
        box-sizing: border-box;
      }
      html,
      body,
      body > div {
        height: 100%;
      }
      html,
      input,
      textarea,
      button {
        font-family:
          'Pretendard',
          -apple-system,
          BlinkMacSystemFont,
          Segoe UI,
          Roboto,
          Oxygen,
          Ubuntu,
          Cantarell,
          Fira Sans,
          Droid Sans,
          Helvetica Neue,
          sans-serif,
          apple color emoji,
          segoe ui emoji,
          segoe ui symbol,
          noto color emoji,
          sans-serif;
        -webkit-font-smoothing: subpixel-antialiased;
        -webkit-text-size-adjust: 100%;
        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
      }
      body {
        line-height: 1;
        letter-spacing: -0.1px;
        color: ${theme.colors.white};
        background-color: ${theme.colors.black};
        transition: background-color 0.15s linear;
      }
      body::-webkit-scrollbar {
        width: 6px;
        background-color: rgba(0, 0, 0, 0.05);
      }

      body::-webkit-scrollbar-thumb {
        border-radius: 3px;
        background: rgba(27, 27, 41, 0.3);
      }
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: 1rem;
        font-weight: normal;
      }
      ol,
      ul,
      li {
        list-style: none;
      }
      table,
      th,
      td {
        border-spacing: 0;
        border-collapse: collapse;
      }
      a {
        &:hover,
        &:active,
        &:visited,
        &:focus,
        &:link {
          //color: #fff;
          color: ${theme.colors.white};
          text-decoration: none;
        }
      }
      button {
        padding: 0;
        border: 0;
        background-color: transparent;
        cursor: pointer;
      }
      img {
        width: 100%;
        border: 0;
      }
    `}
  />
)
