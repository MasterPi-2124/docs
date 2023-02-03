"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3129],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,h=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(h,l(l({ref:t},m),{},{components:n})):a.createElement(h,l({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(7294),r=n(4334),o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},5488:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(3117),r=n(7294),o=n(4334),l=n(2389),c=n(7392),i=n(7094),s=n(2466),m="tabList__CuJ",u="tabItem_LNqP";function p(e){var t;const{lazy:n,block:l,defaultValue:p,values:d,groupId:h,className:v}=e,w=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??w.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,c.l)(f,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===p?p:p??(null==(t=w.find((e=>e.props.default)))?void 0:t.props.value)??w[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:g}=(0,i.U)(),[C,T]=(0,r.useState)(b),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=h){const e=k[h];null!=e&&e!==C&&f.some((t=>t.value===e))&&T(e)}const x=e=>{const t=e.currentTarget,n=N.indexOf(t),a=f[n].value;a!==C&&(O(t),T(a),null!=h&&g(h,String(a)))},D=e=>{var t;let n=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},v)},f.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>N.push(e),onKeyDown:D,onClick:x},l,{className:(0,o.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":C===t})}),n??t)}))),n?(0,r.cloneElement)(w.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},w.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function d(e){const t=(0,l.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},1138:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905)),o=n(5488),l=n(5162);const c={sidebar_label:"Contract Deployment"},i="Contract Deployment on CosmWasm with Rollmint",s={unversionedId:"developers/cosmwasm-contract-deployment",id:"developers/cosmwasm-contract-deployment",title:"Contract Deployment on CosmWasm with Rollmint",description:"Compile the Smart Contract",source:"@site/docs/developers/cosmwasm-contract-deployment.mdx",sourceDirName:"developers",slug:"/developers/cosmwasm-contract-deployment",permalink:"/pr-preview/pr-446/fr/developers/cosmwasm-contract-deployment",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/cosmwasm-contract-deployment.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Contract Deployment"},sidebar:"developers",previous:{title:"Setup Network Environment",permalink:"/pr-preview/pr-446/fr/developers/cosmwasm-environment"},next:{title:"Contract Interaction",permalink:"/pr-preview/pr-446/fr/developers/cosmwasm-contract-interaction"}},m={},u=[{value:"Compile the Smart Contract",id:"compile-the-smart-contract",level:2},{value:"Unit Tests",id:"unit-tests",level:2},{value:"Optimized Smart Contract",id:"optimized-smart-contract",level:2},{value:"AMD Machines",id:"amd-machines",level:3},{value:"ARM Machines",id:"arm-machines",level:3},{value:"Contract Deployment",id:"contract-deployment",level:2},{value:"AMD Machines",id:"amd-machines-1",level:3},{value:"ARM Machines",id:"arm-machines-1",level:3}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contract-deployment-on-cosmwasm-with-rollmint"},"Contract Deployment on CosmWasm with Rollmint"),(0,r.kt)("h2",{id:"compile-the-smart-contract"},"Compile the Smart Contract"),(0,r.kt)("p",null,"In a new terminal instance, we will run the following commands to pull down the\nNameservice smart contract and compile it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/InterWasm/cw-contracts\ncd cw-contracts\ncd contracts/nameservice\ncargo wasm\n")),(0,r.kt)("p",null,"The compiled contract is outputted to:\n",(0,r.kt)("inlineCode",{parentName:"p"},"target/wasm32-unknown-unknown/release/cw_nameservice.wasm"),"."),(0,r.kt)("h2",{id:"unit-tests"},"Unit Tests"),(0,r.kt)("p",null,"If we want to run tests, we can do so with the following command in the\n",(0,r.kt)("inlineCode",{parentName:"p"},"~/cw-contracts/contracts/nameservice")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cargo unit-test\n")),(0,r.kt)("h2",{id:"optimized-smart-contract"},"Optimized Smart Contract"),(0,r.kt)("p",null,"Because we are deploying the compiled smart contract to ",(0,r.kt)("inlineCode",{parentName:"p"},"wasmd"),",\nwe want it to be as small as possible."),(0,r.kt)("p",null,"The CosmWasm team provides a tool called ",(0,r.kt)("inlineCode",{parentName:"p"},"rust-optimizer")," which we need\n",(0,r.kt)("a",{parentName:"p",href:"/pr-preview/pr-446/fr/developers/cosmwasm-dependency#docker-installation"},"Docker")," for in order to compile."),(0,r.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"amd",label:"AMD",mdxType:"TabItem"},(0,r.kt)("h3",{id:"amd-machines"},"AMD Machines"),(0,r.kt)("p",null,"Run the following command in the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/cw-contracts/contracts/nameservice"),"\ndirectory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'sudo docker run --rm -v "$(pwd)":/code \\\n  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \\\n  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n  cosmwasm/rust-optimizer:0.12.6\n')),(0,r.kt)("p",null,"This will place the optimized Wasm bytecode at ",(0,r.kt)("inlineCode",{parentName:"p"},"artifacts/cw_nameservice.wasm"),".")),(0,r.kt)(l.Z,{value:"arm",label:"ARM",mdxType:"TabItem"},(0,r.kt)("h3",{id:"arm-machines"},"ARM Machines"),(0,r.kt)("p",null,"Run the following command in the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/cw-contracts/contracts/nameservice"),"\ndirectory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'sudo docker run --platform linux/arm64 --rm -v "$(pwd)":/code \\\n  --mount type=volume,source="$(basename "$(pwd)")_cache",target=/code/target \\\n  --mount type=volume,source=registry_cache,target=/usr/local/cargo/registry \\\n  cosmwasm/rust-optimizer-arm64:0.12.8\n')),(0,r.kt)("p",null,"This will place the optimized Wasm bytecode at ",(0,r.kt)("inlineCode",{parentName:"p"},"artifacts/cw_nameservice-aarch64.wasm"),"."))),(0,r.kt)("h2",{id:"contract-deployment"},"Contract Deployment"),(0,r.kt)("p",null,"Let's now deploy our smart contract!"),(0,r.kt)(o.Z,{groupId:"network",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"amd",label:"AMD",mdxType:"TabItem"},(0,r.kt)("h3",{id:"amd-machines-1"},"AMD Machines"),(0,r.kt)("p",null,"Run the following in the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/cw-contracts/contracts/nameservice")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"TX_HASH=$(wasmd tx wasm store artifacts/cw_nameservice.wasm --from celeswasm-key --keyring-backend test --chain-id celeswasm --gas-prices 0uwasm --gas auto --gas-adjustment 1.3 --node http://127.0.0.1:26657 --output json -y | jq -r '.txhash') && echo $TX_HASH\n"))),(0,r.kt)(l.Z,{value:"arm",label:"ARM",mdxType:"TabItem"},(0,r.kt)("h3",{id:"arm-machines-1"},"ARM Machines"),(0,r.kt)("p",null,"Run the following in the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/cw-contracts/contracts/nameservice")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"TX_HASH=$(wasmd tx wasm store artifacts/cw_nameservice-aarch64.wasm --from celeswasm-key --keyring-backend test --chain-id celeswasm --gas-prices 0uwasm --gas auto --gas-adjustment 1.3 --node http://127.0.0.1:26657 --output json -y | jq -r '.txhash') && echo $TX_HASH\n")))),(0,r.kt)("p",null,"This will get you the transaction hash for the smart contract deployment. Given\nwe are using Rollmint, there will be a delay on the transaction being included\ndue to Rollmint waiting on Celestia's Data Availability Layer to confirm the block\nhas been included before submitting a new block."),(0,r.kt)("admonition",{title:"important",type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"If you run into errors with variables on the previous command,\nor commands in the remainder of the tutorial, cross-reference\nthe variables in the command with the variables in the ",(0,r.kt)("inlineCode",{parentName:"p"},"init.sh")," script.")))}d.isMDXComponent=!0}}]);