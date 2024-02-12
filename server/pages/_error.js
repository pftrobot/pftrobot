"use strict";(()=>{var e={};e.id=820,e.ids=[820,888,660],e.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},4284:(e,t,r)=>{r.d(t,{Z:()=>a});let a={src:"/pftrobot/_next/static/media/dragon.080093be.svg",height:300,width:300,blurWidth:0,blurHeight:0}},6968:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{config:()=>u,default:()=>x,getServerSideProps:()=>g,getStaticPaths:()=>p,getStaticProps:()=>h,reportWebVitals:()=>f,routeModule:()=>w,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>v,unstable_getStaticParams:()=>y,unstable_getStaticPaths:()=>m,unstable_getStaticProps:()=>b});var s=r(7093),i=r(5244),o=r(1323),n=r(6100),l=r(1484),d=r(8539),c=e([n,l]);[n,l]=c.then?(await c)():c;let x=(0,o.l)(d,"default"),h=(0,o.l)(d,"getStaticProps"),p=(0,o.l)(d,"getStaticPaths"),g=(0,o.l)(d,"getServerSideProps"),u=(0,o.l)(d,"config"),f=(0,o.l)(d,"reportWebVitals"),b=(0,o.l)(d,"unstable_getStaticProps"),m=(0,o.l)(d,"unstable_getStaticPaths"),y=(0,o.l)(d,"unstable_getStaticParams"),j=(0,o.l)(d,"unstable_getServerProps"),v=(0,o.l)(d,"unstable_getServerSideProps"),w=new s.PagesRouteModule({definition:{kind:i.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:l.default,Document:n.default},userland:d});a()}catch(e){a(e)}})},7393:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>u});var s=r(7101),i=r(1664),o=r.n(i),n=r(5675),l=r.n(n),d=r(4284),c=r(6689),x=r(6597),h=r(3139),p=r(7071),g=e([s,x,h,p]);[s,x,h,p]=g.then?(await g)():g;let u=()=>{let{theme:e,setTheme:t}=(0,x.f)();return(0,c.useEffect)(()=>{t(window.__darkMode__?"dark":"light")},[t]),(0,s.jsxs)("div",{className:"gnb",css:f,children:[s.jsx(o(),{href:"/",className:"logo-area",children:s.jsx(l(),{src:d.Z,alt:"dragon image"})}),(0,s.jsxs)("div",{className:"menu",children:[s.jsx(o(),{href:"/projects",children:"Projects"}),s.jsx(o(),{href:"/contact",children:"Contact"}),(0,s.jsxs)("button",{onClick:()=>{t("dark"===e?"light":"dark")},children:["다크모드",s.jsx("span",{})]})]})]})},f=e=>h.css`
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
`;a()}catch(e){a(e)}})},3459:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>l});var s=r(7101),i=r(3139),o=r(7393),n=e([s,i,o]);[s,i,o]=n.then?(await n)():n;let l=e=>(0,s.jsxs)("div",{css:d,children:[s.jsx(o.Z,{}),s.jsx("main",{children:e.children})]}),d=e=>i.css`
  min-height: 100%;

  main {
    min-height: calc(100vh - ${e.sizes.gnb}px);
  }
`;a()}catch(e){a(e)}})},6597:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{f:()=>o});var s=r(6912),i=e([s]);s=(i.then?(await i)():i)[0];let o=(0,s.create)(e=>({theme:"light",setTheme:t=>e({theme:t})}));a()}catch(e){a(e)}})},8539:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return c}});let a=r(167),s=r(997),i=a._(r(6689)),o=a._(r(6665)),n={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function l(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let d={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class c extends i.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||n[e]||"An unexpected error has occurred";return(0,s.jsxs)("div",{style:d.error,children:[(0,s.jsx)(o.default,{children:(0,s.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,s.jsxs)("div",{style:d.desc,children:[(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,s.jsx)("h1",{className:"next-error-h1",style:d.h1,children:e}):null,(0,s.jsx)("div",{style:d.wrap,children:(0,s.jsxs)("h2",{style:d.h2,children:[this.props.title||e?r:(0,s.jsx)(s.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}c.displayName="ErrorPage",c.getInitialProps=l,c.origGetInitialProps=l,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1484:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>u});var s=r(7101),i=r(968),o=r.n(i),n=r(7370),l=r(6689),d=r(3139),c=r(8281),x=r(522),h=r(6597),p=r(3459),g=e([s,n,d,h,p]);[s,n,d,h,p]=g.then?(await g)():g;let u=({Component:e,pageProps:t})=>{let{theme:r}=(0,h.f)();return(0,s.jsxs)(l.Fragment,{children:[(0,s.jsxs)(o(),{children:[s.jsx("meta",{charSet:"utf-8"}),s.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"}),s.jsx("meta",{name:"description",content:"write descriptions here"}),s.jsx("title",{children:"포트폴리오"})]}),(0,s.jsxs)(d.ThemeProvider,{theme:"dark"===r?x.Z:c.Z,children:[n.W,s.jsx(p.Z,{children:s.jsx(e,{...t})})]}),s.jsx("div",{id:"overlay"})]})};a()}catch(e){a(e)}})},6100:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.r(t),r.d(t,{default:()=>d});var s=r(7101),i=r(6859),o=r.n(i),n=e([s]);s=(n.then?(await n)():n)[0];class l extends o(){render(){return(0,s.jsxs)(i.Html,{lang:"ko",children:[s.jsx(i.Head,{children:s.jsx("link",{rel:"stylesheet",type:"text/css",href:"https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"})}),(0,s.jsxs)("body",{children:[s.jsx(i.Main,{}),s.jsx(i.NextScript,{})]})]})}}let d=l;a()}catch(e){a(e)}})},7370:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{W:()=>n});var s=r(7101),i=r(3139),o=e([s,i]);[s,i]=o.then?(await o)():o;let n=s.jsx(i.Global,{styles:e=>i.css`
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
    `});a()}catch(e){a(e)}})},7071:(e,t,r)=>{r.a(e,async(e,a)=>{try{r.d(t,{Eg:()=>o,YA:()=>n,lk:()=>l});var s=r(3139),i=e([s]);s=(i.then?(await i)():i)[0];let o={desktop:1920,tablet:980,mobile:767},n=e=>s.css`
  @media all and (max-width: ${o.tablet}px) {
    ${e}
  }
`,l=e=>s.css`
  @media all and (max-width: ${o.mobile}px) {
    ${e}
  }
`;a()}catch(e){a(e)}})},8281:(e,t,r)=>{r.d(t,{Z:()=>a});let a={layout:{contents:1200},sizes:{gnb:72},fontSizes:{xxxxs:"10px",xxxs:"12px",xxs:"14px",xs:"15px",s:"16px",hl:"18px",m:"20px",l:"36px",xl:"48px",xxl:"56px"},fontWeights:{bold:700},colors:{white:"#fff",black:"#111",gray50:"#f1f1f1",gray100:"#eeeeee",gray400:"#9f9f9f",gray500:"",gray700:"#727272",gray750:"#666666",gray780:"#333333",gray800:"#2a2a2a",gray900:"#191919"},spacings:{xxxxxxs:2,xxxxxs:4,xxxxs:6,xxxs:8,xxs:12,xs:14,s:16,m:24,hxl:32,l:36,xl:64,xxl:72,xxxl:96}}},522:(e,t,r)=>{r.d(t,{Z:()=>a});let a={layout:{contents:1200},sizes:{gnb:72},fontSizes:{xxxxs:"10px",xxxs:"12px",xxs:"14px",xs:"15px",s:"16px",hl:"18px",m:"20px",l:"36px",xl:"48px",xxl:"56px"},fontWeights:{bold:700},colors:{white:"#111",black:"#fff",gray50:"#191919",gray100:"#2a2a2a",gray400:"#333333",gray500:"",gray700:"#666666",gray750:"#727272",gray780:"#9f9f9f",gray800:"#eeeeee",gray900:"#f1f1f1"},spacings:{xxxxxxs:2,xxxxxs:4,xxxxs:6,xxxs:8,xxs:12,xs:14,s:16,m:24,hxl:32,l:36,xl:64,xxl:72,xxxl:96}}},5244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},968:e=>{e.exports=require("next/head")},6689:e=>{e.exports=require("react")},6405:e=>{e.exports=require("react-dom")},997:e=>{e.exports=require("react/jsx-runtime")},3139:e=>{e.exports=import("@emotion/react")},7101:e=>{e.exports=import("@emotion/react/jsx-runtime")},6912:e=>{e.exports=import("zustand")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),a=t.X(0,[348,61,859],()=>r(6968));module.exports=a})();