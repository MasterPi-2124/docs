"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[8536],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>y});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),c=u(o),m=r,y=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return o?n.createElement(y,l(l({ref:t},s),{},{components:o})):n.createElement(y,l({ref:t},s))}));function y(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,l=new Array(i);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:r,l[1]=a;for(var u=2;u<i;u++)l[u]=o[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},9226:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var n=o(7462),r=(o(7294),o(3905));const i={},l="Deploy a sovereign rollup",a={unversionedId:"nodes/itn-deploy-rollup",id:"nodes/itn-deploy-rollup",title:"Deploy a sovereign rollup",description:"Description",source:"@site/docs/nodes/itn-deploy-rollup.md",sourceDirName:"nodes",slug:"/nodes/itn-deploy-rollup",permalink:"/pr-preview/pr-742/fr/nodes/itn-deploy-rollup",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/itn-deploy-rollup.md",tags:[],version:"current",frontMatter:{}},p={},u=[{value:"Description",id:"description",level:2},{value:"Direction",id:"direction",level:2},{value:"Judging criteria",id:"judging-criteria",level:2},{value:"Submission",id:"submission",level:2}],s={toc:u},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-a-sovereign-rollup"},"Deploy a sovereign rollup"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Deploy a Sovereign Rollup with Rollkit."),(0,r.kt)("p",null,"It can be a regular Cosmos-SDK rollup or an Ethermint Rollup.\nYou can find tutorials on deploying sovereign rollups with\nRollkit ",(0,r.kt)("a",{parentName:"p",href:"https://rollkit.dev/docs/tutorials/building-and-deploying-a-rollup"},"here"),"."),(0,r.kt)("h2",{id:"direction"},"Direction"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Submission is limited to only 1, do not submit more than\none."),(0,r.kt)("li",{parentName:"ol"},"Deploy your own sovereign rollup on top of the Blockspace Race network."),(0,r.kt)("li",{parentName:"ol"},"If deploying a Cosmos-SDK rollup, extra points are given if\nyour rollup has unique functionality."),(0,r.kt)("li",{parentName:"ol"},"If deploying an existing Cosmos-SDK app as a rollup on top of\nCelestia, that would be also great to see."),(0,r.kt)("li",{parentName:"ol"},"You can also deploy an Ethermint or Cosmwasm rollup with\na special application built on top of it.")),(0,r.kt)("h2",{id:"judging-criteria"},"Judging criteria"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Full points awarded for deploying your own unique rollup\nwith documentation. Extra points awarded if you can write up\na deployment script to allow anyone to deploy a Cosmos-SDK rollup\nwith Rollkit."),(0,r.kt)("li",{parentName:"ol"},"No points if deploying a vanilla rollup (like just copying what is\nin the docs). Furthermore, no points given if you don't provide a Github\nrepository.")),(0,r.kt)("h2",{id:"submission"},"Submission"),(0,r.kt)("p",null,"You need to submit both an open-sourced Github repository and a writeup\non what you built, either as a Medium post or a README on the Github repo."),(0,r.kt)("p",null,"Submission link can be found ",(0,r.kt)("a",{parentName:"p",href:"https://celestia.knack.com/theblockspacerace#testnet-portal"},"here"),"."))}d.isMDXComponent=!0}}]);