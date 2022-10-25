"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[4063],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=s,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7452:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=r(7462),s=r(3366),a=(r(7294),r(3905)),o=["components"],i={sidebar_label:"Messages"},l="Messages",u={unversionedId:"developers/wordle-messages",id:"developers/wordle-messages",title:"Messages",description:"Messages allow us to process and submit information to our specific module.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/developers/wordle-messages.md",sourceDirName:"developers",slug:"/developers/wordle-messages",permalink:"/pr-preview/pr-275/zh/developers/wordle-messages",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/wordle-messages.md",tags:[],version:"current",frontMatter:{sidebar_label:"Messages"},sidebar:"developers",previous:{title:"Module",permalink:"/pr-preview/pr-275/zh/developers/wordle-module"},next:{title:"Types",permalink:"/pr-preview/pr-275/zh/developers/wordle-types"}},p={},c=[{value:"Scaffolding A Message",id:"scaffolding-a-message",level:2}],d={toc:c};function m(e){var t=e.components,r=(0,s.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"messages"},"Messages"),(0,a.kt)("p",null,"Messages allow us to process and submit information to our specific module."),(0,a.kt)("p",null,"From the Cosmos-SDK docs, ",(0,a.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/master/building-modules/messages-and-queries.html#messages"},"messages"),"\nare:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"In the Cosmos SDK, messages are objects that are contained\nin transactions to trigger state transitions. Each Cosmos SDK\nmodule defines a list of messages and how to handle them.")),(0,a.kt)("p",null,"For messages for Wordle, given our initial design, we will\nmake 2 messages with ignite."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The first one is: ",(0,a.kt)("inlineCode",{parentName:"li"},"SubmitWordle")," and it only passes the Wordle of the Day."),(0,a.kt)("li",{parentName:"ul"},"The second one is: ",(0,a.kt)("inlineCode",{parentName:"li"},"SubmitGuess")," and it attempts to guess the submitted\nwordle. It also passes a word as a guess.")),(0,a.kt)("p",null,"With these initial designs, we can start creating our messages!"),(0,a.kt)("h2",{id:"scaffolding-a-message"},"Scaffolding A Message"),(0,a.kt)("p",null,"To create the ",(0,a.kt)("inlineCode",{parentName:"p"},"SubmitWordle")," message, we run the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ignite scaffold message submit-wordle word\n")),(0,a.kt)("p",null,"This creates the ",(0,a.kt)("inlineCode",{parentName:"p"},"submit-wordle")," message that takes in ",(0,a.kt)("inlineCode",{parentName:"p"},"word")," as a parameter."),(0,a.kt)("p",null,"We now create the final message, ",(0,a.kt)("inlineCode",{parentName:"p"},"SubmitGuess"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ignite scaffold message submit-guess word\n")),(0,a.kt)("p",null,"Here, we are passing a word as a guess with ",(0,a.kt)("inlineCode",{parentName:"p"},"submit-guess"),"."))}m.isMDXComponent=!0}}]);