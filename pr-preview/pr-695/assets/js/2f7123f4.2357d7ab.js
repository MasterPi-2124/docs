"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[1132],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,d=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_label:"Relayer"},i="Relaying",l={unversionedId:"nodes/relayer",id:"nodes/relayer",title:"Relaying",description:"Celestia uses IBC",source:"@site/docs/nodes/relayer.md",sourceDirName:"nodes",slug:"/nodes/relayer",permalink:"/pr-preview/pr-695/nodes/relayer",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/relayer.md",tags:[],version:"current",frontMatter:{sidebar_label:"Relayer"},sidebar:"nodes",previous:{title:"Consensus full node",permalink:"/pr-preview/pr-695/nodes/consensus-full-node"},next:{title:"Resources",permalink:"/pr-preview/pr-695/category/resources"}},s={},c=[{value:"Setup",id:"setup",level:2},{value:"Install",id:"install",level:3},{value:"Configure",id:"configure",level:3},{value:"Keys",id:"keys",level:3},{value:"Running",id:"running",level:3},{value:"Transfer",id:"transfer",level:2},{value:"Token filter",id:"token-filter",level:3}],p={toc:c},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"relaying"},"Relaying"),(0,a.kt)("p",null,"Celestia uses ",(0,a.kt)("a",{parentName:"p",href:"https://ibcprotocol.dev/"},"IBC"),"\n(Inter-Blockchain Communication protocol) to enable cross-chain\ntransfer of tokens. To support this capability it relies on\nrelayers, processes that can be run by anyone which constantly\nscan for outbound packets on one chain and submits these packets\nalongside corresponding proofs on the destination chain. This\nsection briefly describes how one can setup a relayer. There\nare two standard implementations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://hermes.informal.systems/"},"Hermes")," built in Rust"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/github.com/cosmos/relayer"},"Go Relayer")," built in Go")),(0,a.kt)("p",null,"For this guide, we will look just at Hermes."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("h3",{id:"install"},"Install"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the latest version of the binary from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/informalsystems/hermes/releases"},"Releases"),"."),(0,a.kt)("li",{parentName:"ol"},"Create the directory for the binary: ",(0,a.kt)("inlineCode",{parentName:"li"},"mkdir -p $HOME/.hermes/bin")),(0,a.kt)("li",{parentName:"ol"},"Extract the binary: ",(0,a.kt)("inlineCode",{parentName:"li"},"tar -C $HOME/.hermes/bin/ -vxzf $ARCHIVE_NAME")),(0,a.kt)("li",{parentName:"ol"},"Update ",(0,a.kt)("inlineCode",{parentName:"li"},"PATH")," to point to the binary, either in ",(0,a.kt)("inlineCode",{parentName:"li"},".bashrc")," or ",(0,a.kt)("inlineCode",{parentName:"li"},".zshrc"))),(0,a.kt)("p",null,"You should now have it installed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> hermes version\n\nhermes v1.3.0\n")),(0,a.kt)("h3",{id:"configure"},"Configure"),(0,a.kt)("p",null,"Hermes uses a ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml")," file to instruct the process.\nThis should be placed in ",(0,a.kt)("inlineCode",{parentName:"p"},"$HOME/.hermes/config.toml"),".\nYou can try to do this automatically by typing the command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"hermes config auto --chains cosmoshub testnets/celestiatestnet --output $HOME/.hermes/config.toml\n")),(0,a.kt)("p",null,"This takes information from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/chain-registry"},"chain-registry"),".\nIf the information is not there, you will have to enter it\nmanually by opening the ",(0,a.kt)("inlineCode",{parentName:"p"},"config.toml"),". You can read the\nself-documented example ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/informalsystems/hermes/blob/v1.3.0/config.toml"},"here"),".\nYou will be required to find RPC and gRPC endpoints."),(0,a.kt)("h3",{id:"keys"},"Keys"),(0,a.kt)("p",null,"Next step is to add keys for the accounts that will\nbe paying the fees to transfer the tokens across.\nAssuming you have an existing account with a known\nmnemonic, you can simply save the words into a file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"echo word1 ... word12or24 > mnemonic_file\n")),(0,a.kt)("p",null,"Next, run the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"hermes keys add --chain blockspacerace-1 --mnemonic-file mnemonic_file\n")),(0,a.kt)("p",null,"You can confirm the keys by executing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"hermes keys list --chain blockspacerace-1\n")),(0,a.kt)("p",null,"Make sure you have added the keys and have sufficient\nfunds for each chain you are relaying across."),(0,a.kt)("h3",{id:"running"},"Running"),(0,a.kt)("p",null,"Now, you should be able to start the process. As a quick\nsanity check, first run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"hermes config validate\n")),(0,a.kt)("p",null,"Then begin by running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"hermes start\n")),(0,a.kt)("p",null,"As with other processes, you can use ",(0,a.kt)("inlineCode",{parentName:"p"},"systemd")," to manage\nhermes in the background. For more information on setting\nup ",(0,a.kt)("inlineCode",{parentName:"p"},"clients"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"connections")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"channels"),", use the ",(0,a.kt)("inlineCode",{parentName:"p"},"help"),"\ncommand within the cli or refer to ",(0,a.kt)("a",{parentName:"p",href:"https://hermes.informal.systems"},"Hermes website"),"."),(0,a.kt)("h2",{id:"transfer"},"Transfer"),(0,a.kt)("p",null,"The Celestia state machine is built with the IBC transfer\nmodule, allowing for the native celestia token to be\ntransferred to any other IBC enabled chain. Transfer can\nbe initialized through the ",(0,a.kt)("inlineCode",{parentName:"p"},"celestia-appd")," CLI. Information\ncan be found via the help label as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"celestia-appd tx ibc-transfer transfer --help\n")),(0,a.kt)("h3",{id:"token-filter"},"Token filter"),(0,a.kt)("p",null,"The transfer module uses a token filter middleware which\nserves to prevent non-native Celestia tokens from being\non Celestia. If a user is to try to send a token from another\nchain across, it will be simply rejected and the token returned\nback to the user."))}m.isMDXComponent=!0}}]);