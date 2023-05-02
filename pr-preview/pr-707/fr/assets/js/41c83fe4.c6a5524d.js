"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[6433],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(g,a(a({ref:t},d),{},{components:r})):n.createElement(g,a({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const i={},a="Upgrade and Restart Your Bridge Node",l={unversionedId:"nodes/itn-upgrade-node-bridge",id:"nodes/itn-upgrade-node-bridge",title:"Upgrade and Restart Your Bridge Node",description:"Description",source:"@site/docs/nodes/itn-upgrade-node-bridge.md",sourceDirName:"nodes",slug:"/nodes/itn-upgrade-node-bridge",permalink:"/pr-preview/pr-707/fr/nodes/itn-upgrade-node-bridge",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-upgrade-node-bridge.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Description",id:"description",level:2},{value:"Directions",id:"directions",level:2},{value:"Judging Criteria",id:"judging-criteria",level:2},{value:"How to Submit",id:"how-to-submit",level:2}],d={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"upgrade-and-restart-your-bridge-node"},"Upgrade and Restart Your Bridge Node"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Update your Bridge node to the latest version release. You\ncan find the latest version release ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node/releases"},"here"),"."),(0,o.kt)("p",null,"Update your full consensus node to the latest release. You\ncan find the latest version release ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app/releases"},"here"),".\nNote that your Bridge node will not work without upgrading\nyour full consensus node."),(0,o.kt)("h2",{id:"directions"},"Directions"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Compile the latest celestia-node version release and\ncelestia-app version release."),(0,o.kt)("li",{parentName:"ol"},"Restart your nodes with the latest compiled releases.")),(0,o.kt)("h2",{id:"judging-criteria"},"Judging Criteria"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Full points if you are on the latest version release."),(0,o.kt)("li",{parentName:"ol"},"No points if you are not.")),(0,o.kt)("h2",{id:"how-to-submit"},"How to Submit"),(0,o.kt)("p",null,"Please submit a screenshot of your terminal, showing the\ncommand ",(0,o.kt)("inlineCode",{parentName:"p"},"celestia version")," and its output. The output looks\nlike this (note that there will be a different version for\nincentivized testnet):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"Semantic version: v0.3.0-rc1-7-g45f23d8\nCommit: 45f23d8ecab4c3526a7729cd4bc9a0ebe561846e\nBuild Date: Thu 26 May 2022 10:41:59 AM CEST\nSystem version: amd64/linux\nGolang version: go1.18.1\n")),(0,o.kt)("p",null,"Submission link can be found ",(0,o.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."))}p.isMDXComponent=!0}}]);