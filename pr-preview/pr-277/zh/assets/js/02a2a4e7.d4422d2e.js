"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[6154],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=o,v=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(v,i(i({ref:n},c),{},{components:t})):r.createElement(v,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6888:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={sidebar_label:"Overview"},s="Overview to running nodes on Celestia",u={unversionedId:"nodes/overview",id:"nodes/overview",title:"Overview to running nodes on Celestia",description:"There are many ways you can participate in the Celestia network.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/nodes/overview.md",sourceDirName:"nodes",slug:"/nodes/overview",permalink:"/pr-preview/pr-277/zh/nodes/overview",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/overview.md",tags:[],version:"current",frontMatter:{sidebar_label:"Overview"},sidebar:"nodes",next:{title:"Types of Nodes",permalink:"/pr-preview/pr-277/zh/category/types-of-nodes"}},c={},p=[],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview-to-running-nodes-on-celestia"},"Overview to running nodes on Celestia"),(0,a.kt)("p",null,"There are many ways you can participate in the Celestia network."),(0,a.kt)("p",null,"Celestia node operators can run several options on the network."),(0,a.kt)("p",null,"Consensus:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-277/zh/nodes/validator-node"},"Validator Node"),": This type of node participates\nin consensus by producing and voting on blocks."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-277/zh/nodes/consensus-full-node"},"Consensus Full Node"),": A Celestia-App Full Node\nto sync blockchain history.")),(0,a.kt)("p",null,"Data Availability:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-277/zh/nodes/bridge-node"},"Bridge Node"),": This node bridges blocks between the\nData-Availability network and the Consensus network."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-277/zh/nodes/full-storage-node"},"Full Storage Node"),": This node stores all\nthe data but does not connect to Consensus."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/pr-preview/pr-277/zh/nodes/light-node"},"Light Node"),": Light clients conduct data availability\nsampling on the Data Availability network.")),(0,a.kt)("p",null,"You can learn more about how to setup each different node by going through\neach tutorial guide."),(0,a.kt)("p",null,"Please provide any feedback on the tutorials and guides. If you notice\na bug or issue, feel free to make a Pull Request or write up a Github\nIssue ticket!"))}f.isMDXComponent=!0}}]);