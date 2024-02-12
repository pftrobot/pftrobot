"use strict";exports.id=208,exports.ids=[208],exports.modules={7583:(e,t,s)=>{s.d(t,{dg:()=>a,pX:()=>n,s4:()=>o});var i=s(6689);function o(){let[e,t]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{t(!0)},[]),e}let a=()=>{let e=window.scrollY;document.body.style.position="fixed",document.body.style.top=`-${e}px`,document.body.style.left="0",document.body.style.right="0"},n=()=>{let e=document.body.style.top;document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",window.scrollTo(0,-1*parseInt(e||"0"))}},6208:(e,t,s)=>{s.a(e,async(e,i)=>{try{s.r(t),s.d(t,{SubContentCSS:()=>v,default:()=>y});var o=s(7101),a=s(6689),n=s(6405),r=s(1664),c=s.n(r),l=s(5675),d=s.n(l),p=s(2636),x=s.n(p),g=s(2450),m=s(3139),h=s(4579),u=s(7071),b=s(7583),f=e([o,m,h,u]);[o,m,h,u]=f.then?(await f)():f;let y=()=>{let e=(0,b.s4)(),[t,s]=(0,a.useState)(null),i=(0,a.useRef)(),r=(0,a.useRef)(),l=(0,a.useRef)(),p=(0,a.useRef)(),m=(0,a.useRef)(),u=(0,a.useRef)();(0,g.useGSAP)(()=>{e&&(x().set(m.current,{visibility:"hidden",alpha:0}),x().set(u.current,{x:"100%"}))},{dependencies:[e],scope:m});let f=e=>{e?(x().to(m.current,{duration:.3,visibility:"visible",alpha:1}),x().to(u.current,{duration:.3,x:0})):x().timeline().to(u.current,{duration:.3,x:"100%"},0).to(m.current,{duration:.3,alpha:0},0).to(m.current,{duration:.3,visibility:"hidden"},.2)};(0,g.useGSAP)(()=>{let e=x().timeline();e.set(i.current,{alpha:0}),e.set([r.current,l.current,p.current],{y:"80px",alpha:0}),e.to(i.current,{duration:.8,alpha:1},0).to(r.current,{duration:.8,y:0,alpha:1},0).to(l.current,{duration:.8,y:0,alpha:1},.2).to(p.current,{duration:.8,y:0,alpha:1},.3)});let y=e=>{t!==e&&s(e),(0,b.dg)(),f(!0)},j=()=>{(0,b.pX)(),f(!1)};return(0,o.jsxs)("div",{css:h.ContainerCSS,ref:i,children:[(0,o.jsxs)("div",{css:v,children:[o.jsx("p",{className:"title",ref:r,children:"Projects"}),o.jsx("div",{css:$,ref:l,children:[{title:"Solvook",summary:"디지털 교재 플랫폼 '쏠북'",desc:"선생님과 학생들이 디지털 문제자료를 저작권 걱정 없이 거래할 수 있는 마켓 플랫폼",desc2:"검색필터 페이지를 전면 리뉴얼하는 데에 코어 로직을 작업하였고, 기존 상태관리 라이브러리인 mobX를 zustand로 변경 도입하였습니다. cs 불편사항 개선을 통해 상세페이지 전환율이 18% 증가했습니다.",tech:["React","NextJs","Typescript","zustand","react-query","mobX","styled-components","mixpanel","antd"],media:[{type:"image",source:"/assets/solvook.jpg"},{type:"video",source:"/videos/solvook_search.mp4"}],url:"https://www.solvook.com"},{title:"ActionMan",summary:"방송 송출용 데스크탑 앱 ActionMan",desc:"버츄얼 유투버들이 특수장비 없이 휴대폰만으로 방송을 할 수 있는 앱",desc2:"Electron과 Socket 통신 기반으로, 백엔드, iOS, 안드로이드, 유니티 팀과 협업하여 데스크탑 앱을 개발하였습니다.",tech:["React","Electron","Typescript","mobX","styled-components","amplitude","antd","storybook"],media:[{type:"image",source:"/assets/actionman.jpg"},{type:"video",source:"/videos/nalbi_actionman.mp4"}],url:"https://www.actionman.ai/"},{title:"Solvook Note",summary:"디지털 자료로 수업 가능한 환경을 제공하는 서비스",desc:"PdfTron의 WebViewer 기반으로 canvas를 활용하여 필기서비스 '노트' 제작",tech:["PdfTron","React","NextJs","styled-components","mixpanel"],media:[{type:"video",source:"/videos/solvook_note.mp4"}]},{title:"Dashboard",summary:"쏠북 자료에 대해 법적조치를 할 수 있는 Admin",desc:"신탁사, 법률대리인 등 자교 저작권에 대한 법적 조치에 대한 활동을 할 수 있는 대시보드",desc2:"ASW(S3, cloudFront), github action으로 배포 환경을 구성하였습니다.",tech:["React","NextJS","Typescript","Zustand","React-query","emotion"],media:[{type:"image",source:"/assets/dashboard.jpg"},{type:"video",source:"/videos/solvook_dashboard.mp4"}],url:"https://dashboard.solvook.com/"},{title:"Galaxy S22 Metabus",summary:"Galaxy S22 시리즈를 엿볼 수 있는 메타버스 체험존",desc:"Galaxy S22 시리즈를 엿볼 수 있는 메타버스 체험존",desc2:"모션팀, 유니티 팀과 협업하여 webGL 기반의 맵에서 인터랙티브 채팅, 360 제품 체험 등을 구현하였습니다.",tech:["WebGL","JS"],media:[{type:"video",source:"/videos/does_galaxy-metabus.mp4"},{type:"video",source:"/videos/does_galaxy-metabus2.mp4"}]},{title:"HankookTire",summary:"한국타이어 브랜드 특화페이지",desc:"한국타이어 브랜드 특화페이지",desc2:"ScrollTrigger를 사용하여 이미지가 최대 2천 장인 브랜드 페이지에 스크롤 애니메이션을 구현하였습니다.",tech:["GSAP","scrollTrigger"],media:[{type:"video",source:"/videos/does_hankooktire.mp4"}],url:"https://www.hankooktire.com/global/ko/tires/ventus.html"},{title:"BandaiNamco Mall",summary:"반다이남코코리아 쇼핑몰 구축",desc:"반다이남코코리아 쇼핑몰 구축",desc2:"적응형 사이트로 세 개의 개발사와 협업하여 쇼핑몰에 필요한 UI를 작업했고, 어플리케이션화를 위한 지원을 진행했습니다.",tech:["HTML5","CSS3","JS"],media:[{type:"image",source:"/assets/bandai.jpg"}],url:"https://www.bnkrmall.co.kr/"},{title:"SK Magic 360",summary:"SK 매직의 제품을들 360 뷰로 둘러볼 수 있는 체험존",desc:"SK 매직의 제품을들 360 뷰로 둘러볼 수 있는 체험존",desc2:"생산성 향상을 위한 가이드 시스템을 구축했습니다. 디자인 가이드를 토대로 레이아웃, 폰트, 공통 컴포넌트로 분류 후 코드와 설명을 정리하여 사전작업 시간을 단축하는 데에 기여했습니다.",tech:["WebGL","JS"],media:[{type:"video",source:"/videos/does_skmagic.mp4"}],url:"https://company.skmagic.com/introduction/magicalwalk.do"}].map((e,t)=>{let s=e.media[0];return(0,o.jsxs)("div",{className:"item",onClick:()=>y(e),children:[o.jsx("div",{className:"media",children:"video"===s.type?o.jsx("video",{muted:!0,autoPlay:!0,loop:!0,children:o.jsx("source",{src:s.source,type:"video/mp4"})}):o.jsx(d(),{src:s.source,alt:"item image",width:500,height:500})}),(0,o.jsxs)("div",{className:"floating-area",children:[o.jsx("p",{className:"title",children:e.title}),o.jsx("p",{className:"desc",children:e.summary}),o.jsx("div",{className:"tech",css:k,children:e.tech.map((e,t)=>{if(!(t>3))return o.jsx("span",{children:e},`current-item_tech_${t}`)})})]})]},`project-item_${t}`)})}),o.jsx(c(),{href:"/contact",css:h.ButtonCSS,ref:p,children:"관심이 생겼다면 눌러주세요"})]}),e?(0,n.createPortal)((0,o.jsxs)("div",{css:w,ref:m,children:[o.jsx("div",{className:"back",onClick:()=>j()}),(0,o.jsxs)("div",{className:"content",ref:u,children:[o.jsx("button",{onClick:()=>j(),children:o.jsx("span",{children:"뒤로"})}),t&&(0,o.jsxs)(o.Fragment,{children:[o.jsx("p",{className:"title",children:t.title}),o.jsx("p",{className:"desc",children:t.desc}),o.jsx("div",{className:"media",children:t.media.map((e,s)=>o.jsx(a.Fragment,{children:"video"===e.type?o.jsx("video",{muted:!0,autoPlay:!0,loop:!0,children:o.jsx("source",{src:e.source,type:"video/mp4"})}):o.jsx(d(),{src:e.source,alt:"item image",width:500,height:500})},`current-item_media_${t.title}_${s}`))}),t.desc2&&(0,o.jsxs)(o.Fragment,{children:[o.jsx("p",{className:"section",children:"About"}),o.jsx("p",{className:"desc",children:t.desc2})]}),o.jsx("p",{className:"section",children:"Technologies"}),o.jsx("div",{className:"tech",css:k,children:t.tech.map((e,t)=>o.jsx("span",{children:e},`current-item_tech_${t}`))}),t.url&&(0,o.jsxs)(o.Fragment,{children:[o.jsx("p",{className:"section web",children:"Website"}),o.jsx(c(),{href:t.url,className:"url-box",children:t.url})]})," "]})]})]}),document.getElementById("overlay")):o.jsx(o.Fragment,{})]})},v=e=>m.css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${e.spacings.m}px;
  width: 100%;
  padding: ${e.sizes.gnb}px ${e.spacings.xxl}px ${2*e.sizes.gnb}px;

  & > .title {
    font-size: ${e.fontSizes.xxl};
    font-weight: 900;
  }

  & > .desc {
    font-size: ${e.fontSizes.hl};
  }

  ${(0,u.lk)((0,m.css)(`
          padding: ${e.spacings.l}px 0 ${e.spacings.xl}px;  
          gap: ${e.spacings.l}px;
          
          & > .title{
            width: 100%;
            font-size: ${e.fontSizes.l};
            text-align: center;
          }
      `))}
`,$=e=>m.css`
  column-count: 2;
  gap: ${e.spacings.m}px;
  width: 100%;

  ${(0,u.lk)((0,m.css)(`
      max-width: 360px;
      column-count: 1;
      margin: 0 auto; 
    `))}

  .item {
    overflow: hidden;
    position: relative;
    margin-bottom: ${e.spacings.m}px;
    border-radius: 8px;

    &:before {
      display: block;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgb(25, 25, 25);
      background: linear-gradient(
        0deg,
        rgba(25, 25, 25, 0.75) 0%,
        rgba(0, 0, 0, 0.45) 26%,
        rgba(0, 0, 0, 0) 99%
      );
      z-index: 1;

      ${(0,u.lk)((0,m.css)(`
          background: #191919;
          background: linear-gradient(
            0deg,
            rgba(25, 25, 25, 0.75) 0%,
            rgba(0, 0, 0, 0.45) 38%,
            rgba(0, 0, 0, 0) 100%
          );
        `))}
    }

    &:nth-of-type(even) {
      margin-left: auto;
    }

    .media {
      img {
        height: auto;
      }
      video {
        width: 100%;
        height: auto;
        max-width: 100%;
        max-height: 500px;
        object-fit: cover;

        ${(0,u.lk)((0,m.css)(`
            max-height: 360px; 
        `))}
      }
    }

    .floating-area {
      opacity: 0;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      color: #fff;
      padding: ${e.spacings.m}px;
      transition: all 0.3s;
      transform: translateY(50%);
      z-index: 5;

      .title {
        font-size: 28px;
        font-weight: 700;
      }

      .desc {
        font-size: ${e.fontSizes.hl};
        font-weight: 400;
        line-height: 1.3;
        margin-top: ${e.spacings.xxs}px;
      }

      .tech {
        margin-top: ${e.spacings.m}px;
      }

      ${(0,u.lk)((0,m.css)(`
          opacity: 1;
          transform: none;
          padding: ${e.spacings.m}px ${e.spacings.s}px;
          
          .title{
            font-size: ${e.fontSizes.m};
          }
          .desc{
            font-size: ${e.fontSizes.s};
            margin-top: ${e.spacings.xxxs}px;
          }
           .tech{
            display: none;
           }
        `))}
    }

    @media (hover: hover) {
      &:hover {
        &:before {
          background: #191919;
          background: linear-gradient(
            0deg,
            rgba(25, 25, 25, 0.75) 0%,
            rgba(0, 0, 0, 0.45) 38%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        .floating-area {
          opacity: 1;
          transform: translateY(0);
        }
      }
    }
  }
`,k=e=>m.css`
  display: flex;
  flex-wrap: wrap;
  gap: ${e.spacings.xxxs}px;

  span {
    font-size: ${e.fontSizes.xxs};
    font-weight: 400;
    color: #fff;
    padding: ${e.spacings.xxxxxs}px ${e.spacings.xxxs}px;
    border-radius: 16px;
    background-color: ${e.colors.gray700};
  }
`,w=e=>m.css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;

  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .content {
    overflow: auto;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 540px;
    max-height: 100vh;
    padding: ${e.spacings.hxl}px ${e.spacings.hxl}px
      ${e.spacings.xxxl}px;
    z-index: 1;
    background-color: ${e.colors.gray800};

    ${(0,u.lk)((0,m.css)(`
        width: 100%;
        padding: ${e.spacings.s}px ${e.spacings.s}px
      ${e.spacings.xxl}px;
      `))}

    &::-webkit-scrollbar {
      width: 6px;
      background-color: rgba(0, 0, 0, 0.05);
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background: rgba(255, 255, 255, 0.3);
    }

    button {
      position: relative;
      width: 20px;
      height: 20px;
      font-size: 0;
      border: solid 2px ${e.colors.gray780};
      border-radius: 50%;
      background: url('/icons/arrow_left.svg') no-repeat 30% 50%
        ${e.colors.gray800};
      background-size: 10px;
      transition: background-color 0.2s;

      &:before {
        display: block;
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 200%;
        height: 200%;
        transform: translate(-50%, -50%);
      }

      @media (hover: hover) {
        &:hover {
          background-color: ${e.colors.gray700};
        }
      }
    }

    .title {
      font-size: 22px;
      font-weight: 900;
      letter-spacing: -0.3px;
      padding-top: ${e.spacings.l}px;
      margin-top: ${e.spacings.s}px;
      border-top: solid 1px ${e.colors.gray750};

      ${(0,u.lk)((0,m.css)(`
          font-size: ${e.fontSizes.m}; 
          text-align: center;
          padding-top: ${e.spacings.m}px;
          margin-top: ${e.spacings.xxs}px;
        `))}
    }

    .desc {
      font-size: ${e.fontSizes.xxs};
      font-weight: 500;
      color: #727272;
      line-height: 1.3;
      margin-top: ${e.spacings.s}px;
    }

    .media {
      display: flex;
      flex-direction: column;
      gap: ${e.spacings.xxs}px;
      margin-top: ${e.spacings.m}px;

      img,
      video {
        overflow: hidden;
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 500px;
        margin: 0 auto;
        border: solid 1px ${e.colors.gray780};
        border-radius: 8px;

        ${(0,u.lk)((0,m.css)(`
            max-height: 360px;
          `))}
      }
    }

    .section {
      font-size: ${e.fontSizes.hl};
      font-weight: 600;
      letter-spacing: -0.3px;
      margin-top: ${e.spacings.hxl}px;

      ${(0,u.lk)((0,m.css)(`
          font-size: ${e.fontSizes.s}; 
        `))}
    }

    .web {
      &:before {
        display: inline-block;
        vertical-align: middle;
        content: '';
        width: 16px;
        height: 16px;
        margin-top: -${e.spacings.xxxxxxs}px;
        margin-right: ${e.spacings.xxxxs}px;
        background: url('/icons/www.svg') no-repeat 0 50%;
        background-size: 16px;

        ${(0,u.lk)((0,m.css)(`
          width: 14px;
          height: 14px;
        margin-top: -${e.spacings.xxxxxs}px;
          background-size: 14px;
        `))}
      }
    }

    .tech {
      margin-top: ${e.spacings.s}px;
    }

    .url-box {
      position: relative;
      display: inline-block;
      font-size: ${e.fontSizes.xxs};
      font-weight: 700;
      color: ${e.colors.gray700};
      margin-top: ${e.spacings.s}px;

      &:before {
        display: block;
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 1px;
        background-color: ${e.colors.gray700};
        transition: width 0.2s;
      }

      @media (hover: hover) {
        &:hover {
          &:before {
            width: 100%;
          }
        }
      }
    }
  }
`;i()}catch(e){i(e)}})}};