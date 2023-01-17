"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[2396],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,h=m["".concat(p,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(h,l(l({ref:t},u),{},{components:r})):n.createElement(h,l({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,l=new Array(i);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7040:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return i},metadata:function(){return a},toc:function(){return s}});var n=r(3117),o=(r(7294),r(3905));const i={sidebar_label:"Ethermint"},l="Ethermint",a={unversionedId:"developers/ethermint",id:"developers/ethermint",title:"Ethermint",description:"Ethermint is a Comsos-SDK library that integrates an EVM compiler",source:"@site/docs/developers/ethermint.md",sourceDirName:"developers",slug:"/developers/ethermint",permalink:"/pr-preview/pr-381/developers/ethermint",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/ethermint.md",tags:[],version:"current",frontMatter:{sidebar_label:"Ethermint"},sidebar:"developers",previous:{title:"Ethermint",permalink:"/pr-preview/pr-381/category/ethermint"},next:{title:"Ethermint Dependencies",permalink:"/pr-preview/pr-381/developers/ethermint-dependencies"}},p={},s=[],u={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ethermint"},"Ethermint"),(0,o.kt)("p",null,"Ethermint is a Comsos-SDK library that integrates an EVM compiler\nfrom Geth."),(0,o.kt)("p",null,"This would allow you to deploy Solidity or Vyper Ethereum smart contracts\nin order to build Ethereum-based applications."),(0,o.kt)("p",null,"In this tutorial, we will be going over how to use Rollmint to deploy\nan Ethereum-based sovereign rollup that uses Cosmos-SDK and Ethermint."),(0,o.kt)("p",null,"You can learn more about Ethermint ",(0,o.kt)("a",{parentName:"p",href:"https://docs.ethermint.zone/"},"here"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'NOTE: This tutorial will explore developing with Rollmint, which\nis still in Alpha stage. If you run into bugs, please write a Github\nIssue ticket or let us know in our Discord. Furthermore, while Rollmint\nallows you to build sovereign rollups on Celestia, it currently does not\nsupport fraud proofs yet and is therefore running in "pessimistic" mode,\nwhere nodes would need to re-execute the transactions to check the validity\nof the chain (i.e. a full node). Furthermore, Rollmint currently only supports\na single sequencer.')),(0,o.kt)("admonition",{title:"caution",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"The script for this tutorial is built for Mocha Testnet.\nIf you choose to use Arabica Devnet,\nyou will need to modify the script manually.")),(0,o.kt)("p",null,"In this tutorial, we will go over the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-381/developers/ethermint-dependencies"},"Setting Up Your Ethermint Dependencies")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-381/developers/rollmint-on-ethermint"},"Setting Up Rollmint on Ethermint")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-381/developers/instantiate-ethermint"},"Instantiate a local network for your Ethermint chain connected to Celestia")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/pr-preview/pr-381/developers/deploy-solidity-ethermint-foundry"},"Deploying an Ethereum smart contract on your Ethermint Rollup with Foundry"))))}c.isMDXComponent=!0}}]);