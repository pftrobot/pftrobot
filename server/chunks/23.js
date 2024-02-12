"use strict";exports.id=23,exports.ids=[23],exports.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},4284:(e,t,r)=>{r.d(t,{Z:()=>s});let s={src:"/pftrobot/_next/static/media/dragon.080093be.svg",height:300,width:300,blurWidth:0,blurHeight:0}},7393:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>f});var a=r(7101),n=r(1664),o=r.n(n),i=r(5675),d=r.n(i),l=r(4284),c=r(6689),x=r(6597),u=r(3139),h=r(7071),p=e([a,x,u,h]);[a,x,u,h]=p.then?(await p)():p;let f=()=>{let{theme:e,setTheme:t}=(0,x.f)();return(0,c.useEffect)(()=>{t(window.__darkMode__?"dark":"light")},[t]),(0,a.jsxs)("div",{className:"gnb",css:g,children:[a.jsx(o(),{href:"/",className:"logo-area",children:a.jsx(d(),{src:l.Z,alt:"dragon image"})}),(0,a.jsxs)("div",{className:"menu",children:[a.jsx(o(),{href:"/projects",children:"Projects"}),a.jsx(o(),{href:"/contact",children:"Contact"}),(0,a.jsxs)("button",{onClick:()=>{t("dark"===e?"light":"dark")},children:["다크모드",a.jsx("span",{})]})]})]})},g=e=>u.css`
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
      ${(0,h.lk)((0,u.css)(`
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
`;s()}catch(e){s(e)}})},3459:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>d});var a=r(7101),n=r(3139),o=r(7393),i=e([a,n,o]);[a,n,o]=i.then?(await i)():i;let d=e=>(0,a.jsxs)("div",{css:l,children:[a.jsx(o.Z,{}),a.jsx("main",{children:e.children})]}),l=e=>n.css`
  min-height: 100%;

  main {
    min-height: calc(100vh - ${e.sizes.gnb}px);
  }
`;s()}catch(e){s(e)}})},5929:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Z:()=>h});var a=r(7101),n=r(6689),o=r(2450),i=r(4287),d=r.n(i),l=r(9258),c=r(3139),x=r(7071),u=e([a,c,x]);[a,c,x]=u.then?(await u)():u;let h=()=>{let[e,t]=(0,n.useState)(!0);(0,n.useRef)(),(0,n.useRef)();let r=(0,n.useRef)();(0,n.useRef)(),(0,n.useRef)(),(0,n.useRef)();let s=(0,n.useRef)(),i=(0,n.useRef)(),c=(0,n.useRef)(),u=(0,n.useRef)(),h=(0,n.useRef)(),f=(0,n.useRef)(),g=(0,n.useRef)(),b=(0,n.useRef)(),m=(0,n.useRef)(),y=(0,n.useRef)(),k=(0,n.useRef)(),j=(0,n.useRef)(),w=(0,n.useRef)(),v=(0,n.useRef)(),$=(0,n.useRef)(),S=(0,n.useRef)(),z=(0,n.useRef)(),R=(0,n.useRef)(),L=(0,n.useRef)(),G=[[u,h],[f,g,b,m],[y,k,j,w,v,$,S],[z,R,L]],P=()=>{t(!1)};return(0,o.useGSAP)(()=>{d().registerPlugin(l.DrawSVGPlugin);let e=window.innerWidth,t=d().timeline(),a=d().timeline();t.set(r.current,{backgroundColor:"#111",alpha:1}),t.set(s.current,{scale:1,x:0,y:0,alpha:1}),t.set(i.current,{scale:0,x:0,y:"50px"}),t.set(c.current,{scale:1,x:0,y:0}),t.to(i.current,{duration:.8,delay:1,scale:1,y:0,ease:"elastic.out(1,0.8)"},0).to(i.current,{duration:.05,delay:2,scaleY:0,y:"50px",ease:"ease.in"},1).to(i.current,{duration:.2,delay:2,scaleY:1,y:0,ease:"ease.out"},1.1).to(i.current,{duration:.05,delay:2,scaleY:0,y:"50px",ease:"ease.in"},1.3).to(i.current,{duration:.2,delay:2,scaleY:1,y:0,ease:"ease.out"},1.4).to(s.current,{duration:.2,delay:3,scale:"0.1 0.01",x:e<=x.Eg.mobile?"-60px":"-110px",y:e<=x.Eg.mobile?"-36px":"-80px",alpha:1},1.6).to(s.current,{duration:.2,delay:3,alpha:0},1.8),G.forEach((e,t)=>{e.forEach((e,t)=>{a.set(e.current,{drawSVG:0})})}),a.to(G[0][0].current,{duration:1,delay:4.8,drawSVG:"100%",ease:"expo.out"},0).to(G[0][1].current,{duration:1,delay:4.8,drawSVG:"100%",ease:"expo.out"},0).to(G[1][0].current,{duration:2.5,delay:4.88,drawSVG:"100%",ease:"expo.out"},.2).to(G[1][1].current,{duration:2.5,delay:4.88,drawSVG:"100%",ease:"expo.out"},.2).to(G[1][2].current,{duration:2.5,delay:4.88,drawSVG:"100%",ease:"expo.out"},.2).to(G[1][3].current,{duration:2.5,delay:4.88,drawSVG:"100%",ease:"expo.out"},.2).to(G[2][0].current,{duration:2.5,delay:4.96,drawSVG:"100%",ease:"expo.out"},.4).to(G[2][1].current,{duration:2.5,delay:4.96,drawSVG:"100%",ease:"expo.out"},.4).to(G[2][2].current,{duration:2.5,delay:4.96,drawSVG:"100%",ease:"expo.out"},.4).to(G[2][3].current,{duration:2.5,delay:4.96,drawSVG:"100%",ease:"expo.out"},.4).to(G[2][4].current,{duration:2.5,delay:4.96,drawSVG:"100%",ease:"expo.out"},.4).to(G[2][5].current,{duration:2.5,delay:4.96,drawSVG:"100%",ease:"expo.out"},.4).to(G[2][6].current,{duration:2.5,delay:4.96,drawSVG:"100%",ease:"expo.out"},.4).to(G[3][0].current,{duration:2.5,delay:5.04,drawSVG:"100%",ease:"expo.out"},.6).to(G[3][1].current,{duration:2.5,delay:5.04,drawSVG:"100%",ease:"expo.out"},.6).to(G[3][2].current,{duration:2.5,delay:5.04,drawSVG:"100%",ease:"expo.out"},.6).to(r.current,{duration:1.5,delay:6.140000000000001,alpha:0,onComplete:()=>P()},1).to(".gnb",{duration:.8,y:"0",delay:6.140000000000001},1.2).to(".title",{duration:.8,y:"0",alpha:1,delay:6.140000000000001},1.5).to(".desc",{duration:.8,y:"0",alpha:1,delay:6.140000000000001},1.7).to(".go-btn",{duration:.8,y:"0",alpha:1,delay:6.140000000000001},1.9)}),a.jsx(a.Fragment,{children:e&&(0,a.jsxs)("div",{className:"intro",css:p,ref:r,children:[a.jsx("div",{className:"blink",ref:s,children:a.jsx("div",{className:"circle",children:a.jsx("div",{className:"eye",ref:i,children:a.jsx("div",{className:"iris"})})})}),(0,a.jsxs)("svg",{id:"dragon",viewBox:"0 0 300 300",shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",ref:c,children:[a.jsx("path",{ref:u,d:"M85.802286,92.641137q0,12.89452-14.736593,17.499704Q74.749841,98.16736,85.802286,92.641137Z",transform:"translate(.000001 0)",fill:"none",stroke:"rgba(255,255,255,0.8)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{ref:h,d:"M42.974061,101.390989q1.381555,10.591927,7.828816,8.749852q1.842073-8.749852-7.828816-8.749852Z",fill:"none",stroke:"rgba(255,255,255,0.8)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{ref:f,d:"M55.868581,77.444025q2.302592,15.197112,6.447259,15.197112c4.144667,0,5.98674-5.526224,2.302592-17.039187s-3.22363-40.065115,70.919856-40.525633",transform:"translate(.000002 0.000001)",fill:"none",stroke:"rgba(255,255,255,0.8)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{ref:g,d:"M56.789618,78.82558q-1.842075,11.512964-3.684149,16.578668c-1.842074,5.065704-14.736592-4.605186-2.302592-23.486446s21.262816-37.223039,84.511782-35.841484",transform:"translate(-1-1)",fill:"none",stroke:"rgba(255,255,255,0.8)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{ref:b,d:"M85.802286,117.509138c0-.460519,1.381556-11.052445,9.210371-6.907778c2.302592,4.144666,4.144665,11.512963-12.434002,25.328519-2.763111,2.763111-5.065703,16.578667,1.381556,11.973482s11.052445-8.289333,15.197112-17.039186s9.670889-10.591926,9.670889-11.052445q0-.460519-9.670889.460518-.000001-7.368296,4.605185-14.736593c4.605186-7.368297,1.842075-13.355039,1.842075-13.815557s-17.499706,14.276076-16.11815,4.605186s5.80301-5.501243,8.105603-11.948503",transform:"translate(.000001 0.000001)",fill:"none",stroke:"rgba(255,255,255,0.8)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{ref:m,d:"M85.802286,117.969657q-12.434-2.302594-18.88126,3.223629c-6.44726,5.526223-6.907779,13.355037-6.907779,17.499704s-30.394226,36.380965,10.131407,68.156745",transform:"translate(.000002 0.000001)",fill:"none",stroke:"rgba(255,255,255,0.8)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{ref:y,d:"M168.235106,40.142022Q59.092209,10.208317,24.092801,92.641137C0.145836,139.614028,22.250726,246.454331,136.459325,265.79611",transform:"translate(.000001 0)",fill:"none",stroke:"rgba(255,255,255,0.8)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{ref:k,d:"M27.158505,113.364472c0-.460518-21.025927,82.893337,59.1043,110.52445c10.591926,3.22363,9.052445,7.368296,11.815556,12.894519s3.131679,12.336658,36.289014,28.915325",transform:"translate(2 0)",fill:"none",stroke:"rgba(255,255,255,0.8)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{ref:j,d:"M28.921616,112.982915q4.381555,2.22363,3,28.933706t3.684149,24.868001q-4.605186-16.578668,3.684148-31.315261t9.591926-15.276075q2.381557,2.381557,2.842075,7.907779c.921037,1.381555-36.841484,36.841483,18.736593,79.367115",fill:"none",stroke:"rgba(255,255,255,0.8)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{ref:w,d:"M168.695623,40.142022Q97.775767,29.550096,85.802286,62.707431c-.921038.460519,52.499112-32.696816,94.866819,1.381556s59.406893,80.590744,56.183263,122.958451",transform:"translate(.000001 0)",fill:"none",stroke:"rgba(255,255,255,0.8)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{ref:v,d:"M110.670288,63.628468c0-.460518-2.302593-5.065704,3.684148-5.065704s92.103708-16.118149,122.497932,127.563637",transform:"translate(.000001 0)",fill:"none",stroke:"rgba(255,255,255,0.8)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{ref:$,d:"M134.617252,87.575433q14.276074-14.276075,25.789038,2.763111c11.512964,17.039186,25.789039,43.288741,8.749853,80.590744-6.447261,11.512963-27.170596,18.881259-32.696818,34.53889",transform:"translate(.000001 0.000002)",fill:"none",stroke:"rgba(255,255,255,0.8)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{ref:S,d:"M97.53888,84.27284c0-.460519,10.368296-5.447259,20.499704,6.065704s20.723335,26.710075,9.67089,49.736002-47.433411,46.512374-7.828816,88.419561c18.651008,18.651008,90.261636,29.012668,121.116378,6.447259s35.459929-17.960223,47.893929-18.88126",transform:"translate(0 0.000001)",fill:"none",stroke:"rgba(255,255,255,0.8)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{ref:z,d:"M110.814954,64.010024q56.499114-2.22363,82.288153,51.65704c25.789039,53.88067-23.486445,112.366524-36.841483,107.30082c0-.46052,3.684148,6.907778,17.039186,5.526222s46.512372-5.68415,62.170003-13.973483c0-.000001-15.65763,8.907778-31.775779,14.894519.921039.000003,21.644371.921037,38.223039-6.44726s32.012668-7.670889,46.288743-6.749852",transform:"translate(0 0.000003)",fill:"none",stroke:"rgba(255,255,255,0.8)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{ref:R,d:"M134.657151,87.615141q21.604473,19.76259,20.222917,45.551628c-1.381556,25.789038-11.052445,51.578077-13.815557,53.420151.000001,1.381557-.460519-10.591926,1.842073-18.88126.000003-.921034-16.960224,19.197112-6.828816,37.157335",transform:"translate(.000002 0)",fill:"none",stroke:"rgba(255,255,255,0.8)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{ref:L,d:"M83.499693,124.416916q-13.355038-5.526223-12.894519,4.144667c.460519,9.67089,11.052445,19.802297,3.22363,25.32852s-13.815557,5.526222-12.434001,12.894519c0-.000001,2.223629-6.986741,11.894519-6.526223c5.986741,0,10.512964-8.289333,4.526223-23.025927s-.302593-11.434,5.684148-12.815556Z",transform:"translate(-3 0.000001)",fill:"none",stroke:"rgba(255,255,255,0.8)",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})]})})},p=e=>c.css`
  .blink {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);

    .circle {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
      width: 100%;
      max-width: 200px;
      overflow: hidden;
      margin: 0 auto;
      border-top-left-radius: 60%;
      border-top-right-radius: 0;
      ${(0,x.lk)((0,c.css)(`
            // max-width: 100px; 
            // border-top-left-radius: 30%;
        `))}

      .eye {
        width: 100%;
        height: 100%;
        position: relative;
        background-color: #f1f1f1;
        border-bottom-left-radius: 80%;
        border-bottom-right-radius: 120%;
        top: -50px;
        border-bottom: 8px inset #000;
        ${(0,x.lk)((0,c.css)(` 
              // border-bottom-left-radius: 40%;
              // border-bottom-right-radius: 60%;
          `))}
      }

      .iris {
        width: 50%;
        max-width: 300px;
        height: 300px;

        ${(0,x.lk)((0,c.css)(`
            // max-width: 150px;
            // height: 150px; 
          `))}

        &:before {
          content: '';
          width: 40%;
          height: 100%;
          position: absolute;
          left: 50%;
          top: 30%;
          background: black;
          transform: translate(-50%, -50%);
          border-top-left-radius: 10%;
          border-top-right-radius: 10%;
          border-bottom-left-radius: 40%;
          border-bottom-right-radius: 80%;
          ${(0,x.lk)((0,c.css)(` 
              // border-top-left-radius: 5%;
              // border-top-right-radius: 5%;
              // border-bottom-left-radius: 20%;
              // border-bottom-right-radius: 40%;
          `))}
        }

        &:after {
          content: '';
          width: 30%;
          height: 40%;
          border-radius: 50%;
          position: absolute;
          left: 20%;
          top: 20%;
          background: rgba(255, 255, 255, 0.2);
        }
      }
    }
  }

  @keyframes blink {
    78% {
      transform: none;
      animation-timing-function: ease-in;
    }
    81% {
      transform: translateY(50px) scaleY(0);
    }
    88% {
      transform: none;
      animation-timing-function: ease-in;
    }
    90% {
      transform: none;
      animation-timing-function: ease-in;
    }
    93% {
      transform: translateY(50px) scaleY(0);
    }
    100% {
      animation-timing-function: ease-out;
    }
  }

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #111;

  svg {
    max-width: 500px;
    margin: 0 auto;

    ${(0,x.lk)((0,c.css)(`
          max-width: 250px; 
      `))}
  }
`;s()}catch(e){s(e)}})},6597:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{f:()=>o});var a=r(6912),n=e([a]);a=(n.then?(await n)():n)[0];let o=(0,a.create)(e=>({theme:"light",setTheme:t=>e({theme:t})}));s()}catch(e){s(e)}})},1484:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>f});var a=r(7101),n=r(968),o=r.n(n),i=r(7370),d=r(6689),l=r(3139),c=r(8281),x=r(522),u=r(6597),h=r(3459),p=e([a,i,l,u,h]);[a,i,l,u,h]=p.then?(await p)():p;let f=({Component:e,pageProps:t})=>{let{theme:r}=(0,u.f)();return(0,a.jsxs)(d.Fragment,{children:[(0,a.jsxs)(o(),{children:[a.jsx("meta",{charSet:"utf-8"}),a.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"}),a.jsx("meta",{name:"description",content:"write descriptions here"}),a.jsx("title",{children:"포트폴리오"})]}),(0,a.jsxs)(l.ThemeProvider,{theme:"dark"===r?x.Z:c.Z,children:[i.W,a.jsx(h.Z,{children:a.jsx(e,{...t})})]}),a.jsx("div",{id:"overlay"})]})};s()}catch(e){s(e)}})},6100:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{default:()=>l});var a=r(7101),n=r(6859),o=r.n(n),i=e([a]);a=(i.then?(await i)():i)[0];class d extends o(){render(){return(0,a.jsxs)(n.Html,{lang:"ko",children:[a.jsx(n.Head,{children:a.jsx("link",{rel:"stylesheet",type:"text/css",href:"https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"})}),(0,a.jsxs)("body",{children:[a.jsx(n.Main,{}),a.jsx(n.NextScript,{})]})]})}}let l=d;s()}catch(e){s(e)}})},4579:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.r(t),r.d(t,{ButtonCSS:()=>m,ContainerCSS:()=>g,default:()=>f});var a=r(7101),n=r(6689),o=r(1664),i=r.n(o),d=r(4287),l=r.n(d),c=r(2450),x=r(3139),u=r(7071),h=r(5929),p=e([a,x,u,h]);[a,x,u,h]=p.then?(await p)():p;let f=()=>{let e=(0,n.useRef)(),t=(0,n.useRef)(),r=(0,n.useRef)(),s=(0,n.useRef)();return(0,c.useGSAP)(()=>{let a=l().timeline();a.set(e.current,{alpha:0}),a.set(".gnb",{y:"-80px"}),a.set([t.current,r.current,s.current],{y:"80px",alpha:0}),a.to(e.current,{duration:.8,alpha:1},0)}),a.jsx("div",{css:g,style:{},ref:e,children:(0,a.jsxs)("div",{css:b,children:[a.jsx(h.Z,{}),a.jsx("p",{className:"title",ref:t,children:"HI I'm Yiseul"}),(0,a.jsxs)("p",{className:"desc",ref:r,children:["5년차 프론트엔드 개발자 오이슬입니다 ",a.jsx("br",{}),"숫자와 계산하는 것을 좋아합니다 ",a.jsx("br",{}),"나와 다른 것에 편견이 없어 코딩 스타일이나 성향이 다른 사람과도 함께 어우러질 줄 압니다 ",a.jsx("br",{}),"일을 잘하는 것은 상대방이 일하기 편하게 해주는 것이라고 생각합니다"]}),a.jsx(i(),{href:"/projects",className:"go-btn",css:m,ref:s,children:"궁금하면 눌러주세요"})]})})},g=e=>x.css`
  opacity: 0;
  display: flex;
  flex-direction: column;
  max-width: ${e.layout.contents}px;
  min-height: calc(100vh - ${e.sizes.gnb}px);
  font-size: ${e.fontSizes.m};
  padding: 0 ${e.spacings.l}px;
  margin: 0 auto;

  ${(0,u.YA)(x.css`
    max-width: 100%;
  `)}

  ${(0,u.lk)((0,x.css)(`
      font-size: ${e.fontSizes.s}; 
      padding: 0 ${e.spacings.s}px;
  `))}
`,b=e=>x.css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${e.spacings.m}px;
  width: 100%;
  height: 100%;
  padding: ${e.sizes.gnb/2}px ${e.spacings.xxl}px ${e.sizes.gnb}px;
  margin-top: auto;
  margin-bottom: auto;

  .title {
    font-size: ${e.fontSizes.l};
    font-weight: 700;
  }

  .desc {
    font-size: ${e.fontSizes.s};
    line-height: 1.3;
  }

  ${(0,u.lk)((0,x.css)(`
      align-items: center;
      padding-left: 0;
      padding-right: 0;
      
      .title{
        // font-size: ${e.fontSizes.hl};
        text-align: center;
      }
      .desc{
        font-size: ${e.fontSizes.s};
        text-align: center; 
      }
  `))}
`,m=e=>x.css`
  position: relative;
  display: inline-block;
  font-size: ${e.fontSizes.s};
  font-weight: 500;
  padding: ${e.spacings.xxs}px ${e.spacings.s}px;
  margin-top: ${e.spacings.m}px;
  margin-left: -${e.spacings.s}px;

  &:before {
    overflow: hidden;
    display: block;
    content: '';
    position: absolute;
    right: 6px;
    top: 50%;
    width: 4px;
    height: 12px;
    transform: translate(100%, -50%);
    background: url('/icons/arrow_right_dark.svg') no-repeat 100% 50%;
    background-size: 20px;
    transition: width 0.3s;
  }
  @media (hover: hover) {
    &:hover {
      &:before {
        width: 20px;
      }
    }
  }

  ${(0,u.lk)((0,x.css)(`
          font-size: ${e.fontSizes.xxs};
          margin-left: 0;
          margin: 0 auto; 
      `))}
`;s()}catch(e){s(e)}})},7370:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{W:()=>i});var a=r(7101),n=r(3139),o=e([a,n]);[a,n]=o.then?(await o)():o;let i=a.jsx(n.Global,{styles:e=>n.css`
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
    `});s()}catch(e){s(e)}})},7071:(e,t,r)=>{r.a(e,async(e,s)=>{try{r.d(t,{Eg:()=>o,YA:()=>i,lk:()=>d});var a=r(3139),n=e([a]);a=(n.then?(await n)():n)[0];let o={desktop:1920,tablet:980,mobile:767},i=e=>a.css`
  @media all and (max-width: ${o.tablet}px) {
    ${e}
  }
`,d=e=>a.css`
  @media all and (max-width: ${o.mobile}px) {
    ${e}
  }
`;s()}catch(e){s(e)}})},8281:(e,t,r)=>{r.d(t,{Z:()=>s});let s={layout:{contents:1200},sizes:{gnb:72},fontSizes:{xxxxs:"10px",xxxs:"12px",xxs:"14px",xs:"15px",s:"16px",hl:"18px",m:"20px",l:"36px",xl:"48px",xxl:"56px"},fontWeights:{bold:700},colors:{white:"#fff",black:"#111",gray50:"#f1f1f1",gray100:"#eeeeee",gray400:"#9f9f9f",gray500:"",gray700:"#727272",gray750:"#666666",gray780:"#333333",gray800:"#2a2a2a",gray900:"#191919"},spacings:{xxxxxxs:2,xxxxxs:4,xxxxs:6,xxxs:8,xxs:12,xs:14,s:16,m:24,hxl:32,l:36,xl:64,xxl:72,xxxl:96}}},522:(e,t,r)=>{r.d(t,{Z:()=>s});let s={layout:{contents:1200},sizes:{gnb:72},fontSizes:{xxxxs:"10px",xxxs:"12px",xxs:"14px",xs:"15px",s:"16px",hl:"18px",m:"20px",l:"36px",xl:"48px",xxl:"56px"},fontWeights:{bold:700},colors:{white:"#111",black:"#fff",gray50:"#191919",gray100:"#2a2a2a",gray400:"#333333",gray500:"",gray700:"#666666",gray750:"#727272",gray780:"#9f9f9f",gray800:"#eeeeee",gray900:"#f1f1f1"},spacings:{xxxxxxs:2,xxxxxs:4,xxxxs:6,xxxs:8,xxs:12,xs:14,s:16,m:24,hxl:32,l:36,xl:64,xxl:72,xxxl:96}}},5244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))}};