"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3967],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),h=a,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},578:(e,t,r)=>{r.d(t,{Z:()=>n});const n=Object.freeze({golangNodeBSR:"1.20.2",golangNodeOther:"1.19.1",golangApp:"1.19.1",golangCore:"1.19.1",golang:"1.19.1",arabicaChainId:"arabica-6",rollkitVersion:"v0.7.3",localCelestiaDevnetVersion:"v0.8.2",golangQGB:"1.20.2"})},9833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=r(7462),a=r(7294),o=r(3905),l=r(578);const i=e=>{let{children:t,constant:r}=e;return a.createElement("span",{style:{display:"inline"}},t,r)},s={},p="Install the QGB binary",c={unversionedId:"nodes/qgb-binary",id:"nodes/qgb-binary",title:"Install the QGB binary",description:"The orchestrator is the software that signs the",source:"@site/docs/nodes/qgb-binary.mdx",sourceDirName:"nodes",slug:"/nodes/qgb-binary",permalink:"/pr-preview/pr-707/fr/nodes/qgb-binary",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/qgb-binary.mdx",tags:[],version:"current",frontMatter:{},sidebar:"nodes",previous:{title:"Quantum Gravity Bridge",permalink:"/pr-preview/pr-707/fr/nodes/qgb-intro"},next:{title:"QGB Orchestrator",permalink:"/pr-preview/pr-707/fr/nodes/qgb-orchestrator"}},u={},d=[{value:"Install",id:"install",level:2},{value:"Usage",id:"usage",level:2},{value:"How to run",id:"how-to-run",level:2}],h={toc:d},g="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(g,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-the-qgb-binary"},"Install the QGB binary"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"../qgb-orchestrator"},"orchestrator")," is the software that signs the\nQGB attestations, and the ",(0,o.kt)("a",{parentName:"p",href:"../qgb-relayer"},"relayer")," is the one that\nrelays them to the target EVM chain."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://go.dev/doc/install"},"Install Go")," ",(0,o.kt)(i,{constant:l.Z.golangQGB,mdxType:"InlineText"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Clone the ",(0,o.kt)("inlineCode",{parentName:"p"},"https://github.com/celestiaorg/orchestrator-relayer")," repository")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the QGB CLI"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"make install\n")))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Print help\nqgb --help\n")),(0,o.kt)("h2",{id:"how-to-run"},"How to run"),(0,o.kt)("p",null,"If you are a Celestia-app validator, all you need to do is run the\norchestrator. Check ",(0,o.kt)("a",{parentName:"p",href:"../qgb-orchestrator"},"here")," for more details."),(0,o.kt)("p",null,"If you want to post commitments on an EVM chain, you will need to deploy\na new QGB contract and run a relayer. Check ",(0,o.kt)("a",{parentName:"p",href:"../qgb-relayer"},"here")," for\nrelayer docs and ",(0,o.kt)("a",{parentName:"p",href:"../qgb-deploy"},"here")," for how to deploy a new QGB\ncontract."),(0,o.kt)("p",null,"Note: the QGB P2P network is a separate network than the consensus or\nthe data availability one. Thus, you will need its specific\nbootstrappers to be able to connect to it."))}m.isMDXComponent=!0}}]);