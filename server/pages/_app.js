"use strict";(()=>{var e={};e.id=888,e.ids=[888],e.modules={4284:(e,t,a)=>{a.d(t,{Z:()=>s});let s={src:"/pftrobot/_next/static/media/dragon.080093be.svg",height:300,width:300,blurWidth:0,blurHeight:0}},7393:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>b});var i=a(7101),r=a(1664),o=a.n(r),n=a(5675),x=a.n(n),l=a(4284),c=a(6689),d=a(6597),h=a(3139),p=a(7071),g=e([i,d,h,p]);[i,d,h,p]=g.then?(await g)():g;let b=()=>{let{theme:e,setTheme:t}=(0,d.f)();return(0,c.useEffect)(()=>{t(window.__darkMode__?"dark":"light")},[t]),(0,i.jsxs)("div",{className:"gnb",css:m,children:[i.jsx(o(),{href:"/",className:"logo-area",children:i.jsx(x(),{src:l.Z,alt:"dragon image"})}),(0,i.jsxs)("div",{className:"menu",children:[i.jsx(o(),{href:"/projects",children:"Projects"}),i.jsx(o(),{href:"/contact",children:"Contact"}),(0,i.jsxs)("button",{onClick:()=>{t("dark"===e?"light":"dark")},children:["다크모드",i.jsx("span",{})]})]})]})},m=e=>h.css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${e.layout.contents}px;
  height: ${e.sizes.gnb}px;
  padding: 0 ${e.spacings.l}px;
  margin: 0 auto;

  .logo-area {
    display: block;
    max-width: 36px;
    padding: ${e.spacings.xxxs}px;
    margin-left: -${e.spacings.xxxs}px;
    box-sizing: content-box;

    img {
      width: 100%;
      height: auto;
    }
  }

  .menu {
    display: flex;
    align-items: center;
    gap: ${e.spacings.s}px;

    a,
    button {
      flex: 1;
    }
    a {
      font-size: ${e.fontSizes.s};
      font-weight: 600;
      padding: ${e.spacings.xxxs}px;
      ${(0,p.lk)((0,h.css)(`
          font-size: ${e.fontSizes.xxs}; 
        `))}
    }
    button {
      position: relative;
      width: 24px;
      height: 24px;
      font-size: 0;
      border: solid 2px #111;
      border-radius: 50%;
      background-color: ${e.colors.white};

      &:before {
        display: block;
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 200%;
        height: 200%;
        z-index: 1;
        transform: translate(-50%, -50%);
      }

      span {
        display: block;
        overflow: hidden;
        width: 100%;
        height: 100%;
        border-radius: 50%;

        &:after {
          display: block;
          content: '';
          width: 50%;
          height: 100%;
          background-color: ${e.colors.black};

          margin-left: auto;
        }
      }
    }
  }
`;s()}catch(e){s(e)}})},3459:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Z:()=>x});var i=a(7101),r=a(3139),o=a(7393),n=e([i,r,o]);[i,r,o]=n.then?(await n)():n;let x=e=>(0,i.jsxs)("div",{css:l,children:[i.jsx(o.Z,{}),i.jsx("main",{children:e.children})]}),l=e=>r.css`
  min-height: 100%;

  main {
    min-height: calc(100vh - ${e.sizes.gnb}px);
  }
`;s()}catch(e){s(e)}})},6597:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{f:()=>o});var i=a(6912),r=e([i]);i=(r.then?(await r)():r)[0];let o=(0,i.create)(e=>({theme:"light",setTheme:t=>e({theme:t})}));s()}catch(e){s(e)}})},1484:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{default:()=>b});var i=a(7101),r=a(968),o=a.n(r),n=a(7370),x=a(6689),l=a(3139),c=a(8281),d=a(522),h=a(6597),p=a(3459),g=e([i,n,l,h,p]);[i,n,l,h,p]=g.then?(await g)():g;let b=({Component:e,pageProps:t})=>{let{theme:a}=(0,h.f)();return(0,i.jsxs)(x.Fragment,{children:[(0,i.jsxs)(o(),{children:[i.jsx("meta",{charSet:"utf-8"}),i.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"}),i.jsx("meta",{name:"description",content:"write descriptions here"}),i.jsx("title",{children:"포트폴리오"})]}),(0,i.jsxs)(l.ThemeProvider,{theme:"dark"===a?d.Z:c.Z,children:[n.W,i.jsx(p.Z,{children:i.jsx(e,{...t})})]}),i.jsx("div",{id:"overlay"})]})};s()}catch(e){s(e)}})},7370:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{W:()=>n});var i=a(7101),r=a(3139),o=e([i,r]);[i,r]=o.then?(await o)():o;let n=i.jsx(r.Global,{styles:e=>r.css`
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
        color: ${e.colors.white};
        background-color: ${e.colors.black};
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
          color: ${e.colors.white};
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
    `});s()}catch(e){s(e)}})},7071:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.d(t,{Eg:()=>o,YA:()=>n,lk:()=>x});var i=a(3139),r=e([i]);i=(r.then?(await r)():r)[0];let o={desktop:1920,tablet:980,mobile:767},n=e=>i.css`
  @media all and (max-width: ${o.tablet}px) {
    ${e}
  }
`,x=e=>i.css`
  @media all and (max-width: ${o.mobile}px) {
    ${e}
  }
`;s()}catch(e){s(e)}})},8281:(e,t,a)=>{a.d(t,{Z:()=>s});let s={layout:{contents:1200},sizes:{gnb:72},fontSizes:{xxxxs:"10px",xxxs:"12px",xxs:"14px",xs:"15px",s:"16px",hl:"18px",m:"20px",l:"36px",xl:"48px",xxl:"56px"},fontWeights:{bold:700},colors:{white:"#fff",black:"#111",gray50:"#f1f1f1",gray100:"#eeeeee",gray400:"#9f9f9f",gray500:"",gray700:"#727272",gray750:"#666666",gray780:"#333333",gray800:"#2a2a2a",gray900:"#191919"},spacings:{xxxxxxs:2,xxxxxs:4,xxxxs:6,xxxs:8,xxs:12,xs:14,s:16,m:24,hxl:32,l:36,xl:64,xxl:72,xxxl:96}}},522:(e,t,a)=>{a.d(t,{Z:()=>s});let s={layout:{contents:1200},sizes:{gnb:72},fontSizes:{xxxxs:"10px",xxxs:"12px",xxs:"14px",xs:"15px",s:"16px",hl:"18px",m:"20px",l:"36px",xl:"48px",xxl:"56px"},fontWeights:{bold:700},colors:{white:"#111",black:"#fff",gray50:"#191919",gray100:"#2a2a2a",gray400:"#333333",gray500:"",gray700:"#666666",gray750:"#727272",gray780:"#9f9f9f",gray800:"#eeeeee",gray900:"#f1f1f1"},spacings:{xxxxxxs:2,xxxxxs:4,xxxxs:6,xxxs:8,xxs:12,xs:14,s:16,m:24,hxl:32,l:36,xl:64,xxl:72,xxxl:96}}},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},3139:e=>{e.exports=import("@emotion/react")},7101:e=>{e.exports=import("@emotion/react/jsx-runtime")},6912:e=>{e.exports=import("zustand")}};var t=require("../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[348,61],()=>a(1484));module.exports=s})();