"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[6104],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7313:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={},s="Celestia Node Metrics",c={unversionedId:"developers/celestia-node-metrics",id:"developers/celestia-node-metrics",title:"Celestia Node Metrics",description:"This tutorial is for running metrics for your celestia-node Data",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developers/celestia-node-metrics.md",sourceDirName:"developers",slug:"/developers/celestia-node-metrics",permalink:"/pr-preview/pr-277/zh/developers/celestia-node-metrics",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/celestia-node-metrics.md",tags:[],version:"current",frontMatter:{},sidebar:"developers",previous:{title:"Node Video Tutorial",permalink:"/pr-preview/pr-277/zh/developers/light-node-video"},next:{title:"Node API",permalink:"/pr-preview/pr-277/zh/developers/node-api"}},p={},u=[{value:"Running metrics flags",id:"running-metrics-flags",level:2},{value:"Metrics endpoint design considerations",id:"metrics-endpoint-design-considerations",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"celestia-node-metrics"},"Celestia Node Metrics"),(0,i.kt)("p",null,"This tutorial is for running metrics for your celestia-node Data\nAvailability instance."),(0,i.kt)("p",null,"This tutorial will focus on running metrics for a light-node."),(0,i.kt)("p",null,"This tutorial assumes you have already setup your light node\nby following the tutorial in the ",(0,i.kt)("a",{parentName:"p",href:"/pr-preview/pr-277/zh/developers/node-tutorial"},"Node API tutorial"),"."),(0,i.kt)("h2",{id:"running-metrics-flags"},"Running metrics flags"),(0,i.kt)("p",null,"You can enable the celestia-node metric flags with the following\ncommand:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"celestia light start --core.ip <ip-address> --core.grpc.port <port> --metrics --metrics.endpoint <ip-address:port>\n")),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"--metrics")," flags enables metrics and expects\nan input into ",(0,i.kt)("inlineCode",{parentName:"p"},"--metrics.endpoint"),"."),(0,i.kt)("p",null,"We will go over what the endpoint will need to be in the following section."),(0,i.kt)("h2",{id:"metrics-endpoint-design-considerations"},"Metrics endpoint design considerations"),(0,i.kt)("p",null,"At the moment, the architecture of celestia-node metrics\nworks as specified in the following ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-node/blob/main/docs/adr/adr-010-incentivized-testnet-monitoring.md"},"ADR"),"."),(0,i.kt)("p",null,"Essentially, the design considerations here will necessitate\nrunning an OpenTelemetry (OTEL) collector that connects to Celestia\nLight Node."),(0,i.kt)("p",null,"For an overview of OTEL, check out the guide ",(0,i.kt)("a",{parentName:"p",href:"https://opentelemetry.io/docs/collector/"},"here"),"."),(0,i.kt)("p",null,"The ADR and the OTEL docs will help you run your collector on the metrics endpoint.\nThis will then allow you to process the data in the collector on a\nPrometheus server which can then be viewed on a Grafana dashboard."),(0,i.kt)("p",null,"In the future, we do want to open-source some developer toolings around\nthis infrastructure to allow for node operators to be able to monitor\ntheir Data Availability nodes."))}m.isMDXComponent=!0}}]);