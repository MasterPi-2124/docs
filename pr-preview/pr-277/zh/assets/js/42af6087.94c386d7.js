"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9604],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3882:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_label:"Integrate Celestia"},l="Integrate Celestia",c={unversionedId:"developers/integrate-celestia",id:"developers/integrate-celestia",title:"Integrate Celestia",description:"This document is for third-party service providers, such as custodians and",source:"@site/docs/developers/integrate-celestia.md",sourceDirName:"developers",slug:"/developers/integrate-celestia",permalink:"/pr-preview/pr-277/zh/developers/integrate-celestia",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/integrate-celestia.md",tags:[],version:"current",frontMatter:{sidebar_label:"Integrate Celestia"},sidebar:"developers",previous:{title:"CosmWasm Resources",permalink:"/pr-preview/pr-277/zh/developers/cosmwasm-resources"}},d={},u=[{value:"Celestia Service Provider Notes",id:"celestia-service-provider-notes",level:2},{value:"Custody and Key Management",id:"custody-and-key-management",level:3},{value:"RPC and Querying",id:"rpc-and-querying",level:3},{value:"Compatibility",id:"compatibility",level:3},{value:"Syncing",id:"syncing",level:3},{value:"Notable exceptions relative to other blockchains",id:"notable-exceptions-relative-to-other-blockchains",level:3}],p={toc:u};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"integrate-celestia"},"Integrate Celestia"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This document is for third-party service providers, such as custodians and\nexplorers, integrating the Celestia network.")),(0,i.kt)("h2",{id:"celestia-service-provider-notes"},"Celestia Service Provider Notes"),(0,i.kt)("p",null,"Celestia is a fairly standard Cosmos-SDK based chain. We use the latest version\nof Tendermint and the Cosmos-SDK, with only minor modifications to each. This\nmeans that we are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Using the default Cosmos-SDK modules: auth, bank, distribution, staking,\nslashing, mint, crisis, ibchost, genutil, evidence, ibctransfer, params, gov\n(limited in some TBD capacities), upgrade, vesting, feegrant, capability, and\npayment."),(0,i.kt)("li",{parentName:"ul"},"Use the standard digital keys schemes provided by the Cosmos-SDK and\nTendermint, those being secp256k1 for user transactions, and tm-ed25519 for\nsigning and verifying consensus messages.")),(0,i.kt)("p",null,"While exactly which modules used is subject to change, Celestia aims to be as\nminimal as possible."),(0,i.kt)("h3",{id:"custody-and-key-management"},"Custody and Key Management"),(0,i.kt)("p",null,"Celestia supports many already existing key management systems, as we rely on\nthe Cosmos-SDK and Tendermint libraries for signing and verifying transactions.\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/master/basics/accounts.html#keys-accounts-addresses-and-signatures"},"Cosmos-SDK documentation")),(0,i.kt)("h3",{id:"rpc-and-querying"},"RPC and Querying"),(0,i.kt)("p",null,"In celestia-app, only the standard RPC endpoints for Tendermint and the\nCosmos-SDK are exposed. We do not currently add or subtract any core\nfunctionality, but this could change in the future. The same goes for querying\ndata from the chain."),(0,i.kt)("p",null,"In celestia-node, the Data Availability node client, there is a JSON-RPC API\nthat allows you to interact directly with Celestia's Data Availability layer.\nThe guide for it can be found ",(0,i.kt)("a",{parentName:"p",href:"https://docs.celestia.org/developers/node-tutorial"},"here"),"."),(0,i.kt)("h3",{id:"compatibility"},"Compatibility"),(0,i.kt)("p",null,"Linux, particularly Ubuntu 20.04 LTS, is the most well tested. Potentially\ncompatible with other OSs, but they are currently untested. Some of the\ncryptography libraries used for erasure data are not guaranteed to work on\nother platforms."),(0,i.kt)("h3",{id:"syncing"},"Syncing"),(0,i.kt)("p",null,"Since we utilize Tendermint and the Cosmos-SDK, syncing the chain can be\nperformed by any method that is supported by those libraries. This includes\nfast-sync, state sync, and quick sync."),(0,i.kt)("h3",{id:"notable-exceptions-relative-to-other-blockchains"},"Notable exceptions relative to other blockchains"),(0,i.kt)("p",null,"Relative to other Tendermint based chains, Celestia will have significantly\nlonger blocktimes of around 30* seconds. The reason behind this block time is to\noptimize the bandwidth used by light clients that are sampling the chain, and\nis not because we have modified Tendermint consensus in any meaningful way.\nValidators will likely download/upload relatively large blocks. It should be\nnoted that while these blocks are large, very little typical blockchain state\nexecution is actually occurring on Celestia. Meaning that the bandwidth\nrequirements will likely be larger than that of a typical Cosmos-SDK based\nblockchain full node, the computing requirements should be similar in\nmagnitude."),(0,i.kt)("p",null,"*Subject to Change"))}h.isMDXComponent=!0}}]);