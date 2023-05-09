"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[3419],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(a),m=l,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},d),{},{components:a})):n.createElement(h,i({ref:t},d))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,i=new Array(o);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:l,i[1]=r;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3092:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=a(7462),l=(a(7294),a(3905));const o={sidebar_label:"Optimism & Celestia tutorial"},i="OP Stack and Celestia tutorial",r={unversionedId:"developers/optimism",id:"developers/optimism",title:"OP Stack and Celestia tutorial",description:"Optimism is a low-cost and lightning-fast Ethereum L2 blockchain, built with the OP Stack.",source:"@site/docs/developers/optimism.mdx",sourceDirName:"developers",slug:"/developers/optimism",permalink:"/pr-preview/pr-742/fr/developers/optimism",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/developers/optimism.mdx",tags:[],version:"current",frontMatter:{sidebar_label:"Optimism & Celestia tutorial"},sidebar:"developers",previous:{title:"Rollkit",permalink:"/pr-preview/pr-742/fr/developers/rollkit"},next:{title:"Full stack modular blockchain development guide",permalink:"/pr-preview/pr-742/fr/developers/full-stack-modular-development-guide"}},s={},c=[{value:"About the integration",id:"about-the-integration",level:2},{value:"Celestia + OP Stack repository",id:"celestia--op-stack-repository",level:2},{value:"What are Optimism and the OP Stack?",id:"what-are-optimism-and-the-op-stack",level:3},{value:"What is Celestia?",id:"what-is-celestia",level:3},{value:"OP Stack + Celestia",id:"op-stack--celestia",level:2},{value:"Dependency setup",id:"dependency-setup",level:2},{value:"Environment setup and Golang installation",id:"environment-setup-and-golang-installation",level:3},{value:"Clone repository",id:"clone-repository",level:3},{value:"asdf",id:"asdf",level:3},{value:"Node.js",id:"nodejs",level:3},{value:"Foundry",id:"foundry",level:3},{value:"Yarn",id:"yarn",level:3},{value:"Docker compose",id:"docker-compose",level:3},{value:"gcc &amp; libusb",id:"gcc--libusb",level:3},{value:"Build devnet",id:"build-devnet",level:2},{value:"Start devnet",id:"start-devnet",level:3},{value:"Stop devnet",id:"stop-devnet",level:3},{value:"Viewing containers",id:"viewing-containers",level:3},{value:"Find a transaction",id:"find-a-transaction",level:2},{value:"Read the transaction call data",id:"read-the-transaction-call-data",level:2},{value:"Find the data on Celestia",id:"find-the-data-on-celestia",level:2},{value:"Deploying a smart contract",id:"deploying-a-smart-contract",level:2},{value:"Update the frontend",id:"update-the-frontend",level:3},{value:"Interact with the frontend",id:"interact-with-the-frontend",level:3},{value:"Next steps",id:"next-steps",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"op-stack-and-celestia-tutorial"},"OP Stack and Celestia tutorial"),(0,l.kt)("div",{align:"center"},(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://optimism.io"},(0,l.kt)("img",{alt:"Optimism",src:"https://raw.githubusercontent.com/ethereum-optimism/brand-kit/main/assets/svg/OPTIMISM-R.svg",width:600})),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("br",null),(0,l.kt)("h3",null,(0,l.kt)("a",{href:"https://optimism.io"},"Optimism")," is a low-cost and lightning-fast Ethereum L2 blockchain, built with the OP Stack."),(0,l.kt)("br",null),(0,l.kt)("h3",null,"+"),(0,l.kt)("a",{href:"https://celestia.org"},(0,l.kt)("img",{alt:"Celestia",src:"https://raw.githubusercontent.com/celestiaorg/optimism/celestia-develop/docs/op-stack/src/assets/docs/understand/Celestia-logo-color-color.svg",width:600})),(0,l.kt)("h3",null,(0,l.kt)("a",{href:"https://celestia.org"},"Celestia")," is a modular consensus and data network, built to enable anyone to easily deploy their own blockchain with minimal overhead."),(0,l.kt)("br",null)),(0,l.kt)("h2",{id:"about-the-integration"},"About the integration"),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Discover how to integrate existing blockchain frameworks\nlike ",(0,l.kt)("a",{parentName:"em",href:"https://stack.optimism.io/"},"the OP Stack"),"\ncan integrate with Celestia in this tutorial")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Tested on a machine with 8GB RAM, 160 GB SSD,\nUbuntu 22.10, and a 4 core AMD CPU.")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.optimism.io/"},"Optimism")," uses Ethereum as\na data availability (DA) layer. Currently, settlement and DA for\nOptimism are on Ethereum, both on-chain. ",(0,l.kt)("inlineCode",{parentName:"p"},"op-batcher")," batches up\nrollup blocks and posts to Ethereum."),(0,l.kt)("h2",{id:"celestia--op-stack-repository"},"Celestia + OP Stack repository"),(0,l.kt)("p",null,"Find the repository for this integration ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/optimism/"},"here"),"!"),(0,l.kt)("h3",{id:"what-are-optimism-and-the-op-stack"},"What are Optimism and the OP Stack?"),(0,l.kt)("p",null,"Optimism, an Ethereum L2 blockchain, is powered by the OP Stack, which is also the foundation for the ",(0,l.kt)("a",{parentName:"p",href:"https://app.optimism.io/announcement"},"Optimism Collective")," committed to the ",(0,l.kt)("strong",{parentName:"p"},"impact=profit")," principle. This rewards individuals for their positive contributions to the collective."),(0,l.kt)("p",null,"Optimism addresses crypto ecosystem coordination failures, like funding public goods and infrastructure. The OP Stack fosters collaboration and prevents redundancy by creating a shared, open-source system for developing new L2 blockchains within the proposed Superchain ecosystem."),(0,l.kt)("p",null,"As Optimism evolves, the OP Stack will adapt to include components from blockchain infrastructure to governance systems. This software suite aims to simplify L2 blockchain creation and support the Optimism ecosystem's growth and development."),(0,l.kt)("p",null,"Learn more about Optimism ",(0,l.kt)("a",{parentName:"p",href:"https://www.optimism.io/"},"here"),"."),(0,l.kt)("h3",{id:"what-is-celestia"},"What is Celestia?"),(0,l.kt)("p",null,"Celestia is a modular consensus and data network, built to enable anyone to easily deploy their own blockchain with minimal overhead."),(0,l.kt)("p",null,"Celestia is a minimal blockchain that only orders and publishes transactions and does not execute them. By decoupling the consensus and application execution layers, Celestia modularizes the blockchain technology stack and unlocks new possibilities for decentralized application builders. Lean more at ",(0,l.kt)("a",{parentName:"p",href:"https://celestia.org"},"Celestia.org"),"."),(0,l.kt)("h2",{id:"op-stack--celestia"},"OP Stack + Celestia"),(0,l.kt)("p",null,"This tutorial will guide you through how start your own devnet with a\nmodified version of ",(0,l.kt)("inlineCode",{parentName:"p"},"optimism-bedrock")," that uses Celestia as a DA layer."),(0,l.kt)("p",null,"The handling of data is accomplished in two ways. First, data is written\nto the data availability (DA) layer i.e. in this case Celestia, then the\ndata commitment is written to the ",(0,l.kt)("inlineCode",{parentName:"p"},"op-batcher"),". When reading ",(0,l.kt)("inlineCode",{parentName:"p"},"op-node"),"\nsimply reads the data back from the DA layer by reading the\ndata commitment from the ",(0,l.kt)("inlineCode",{parentName:"p"},"op-batcher")," first, then reading the\ndata from the DA layer using the data commitment. Hence, while\npreviously ",(0,l.kt)("inlineCode",{parentName:"p"},"op-node")," was reading from calldata on Ethereum,\nbut now it reads data from Celestia."),(0,l.kt)("p",null,"There are a few tools involved in the data handling process. ",(0,l.kt)("inlineCode",{parentName:"p"},"op-batcher"),"\nbatches up rollup blocks and posts them to Ethereum. ",(0,l.kt)("inlineCode",{parentName:"p"},"op-geth")," handles\nexecution, while ",(0,l.kt)("inlineCode",{parentName:"p"},"op-proposer")," is responsible for state commitment\nsubmission."),(0,l.kt)("p",null,"By using Celestia as a DA layer, existing L2s can switch from posting\ntheir data as ",(0,l.kt)("inlineCode",{parentName:"p"},"calldata")," on Ethereum, to posting to Celestia.\nThe commitment to the block is posted on Celestia, which is\npurpose-built for data availability. This is a more scalable than\nthe traditional method of posting this data as ",(0,l.kt)("inlineCode",{parentName:"p"},"calldata")," on monolithic chains."),(0,l.kt)("p",null,"If you'd like to go modular, bedrock has\nmade it easy to swap this out!"),(0,l.kt)("h2",{id:"dependency-setup"},"Dependency setup"),(0,l.kt)("h3",{id:"environment-setup-and-golang-installation"},"Environment setup and Golang installation"),(0,l.kt)("p",null,"Install dependencies ",(0,l.kt)("a",{parentName:"p",href:"/pr-preview/pr-742/fr/nodes/environment"},"here"),"."),(0,l.kt)("h3",{id:"clone-repository"},"Clone repository"),(0,l.kt)("p",null,"Next, clone the repo:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ngit clone https://github.com/celestiaorg/optimism\ncd optimism\ngit checkout celestia-develop\n")),(0,l.kt)("h3",{id:"asdf"},"asdf"),(0,l.kt)("p",null,"Install ",(0,l.kt)("inlineCode",{parentName:"p"},"asdf")," to allow us to intall a specific version of node easily:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ngit clone https://github.com/asdf-vm/asdf.git ~/.asdf --branch v0.11.2\necho '. \"$HOME/.asdf/asdf.sh\"' >> ~/.bashrc\necho '. \"$HOME/.asdf/completions/asdf.bash\"' >> ~/.bashrc\n")),(0,l.kt)("p",null,"Set the path:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export PATH=$PATH:~/.asdf/bin/\n")),(0,l.kt)("p",null,"Check that it was installed:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"asdf\n")),(0,l.kt)("h3",{id:"nodejs"},"Node.js"),(0,l.kt)("p",null,"Install ",(0,l.kt)("inlineCode",{parentName:"p"},"nodejs 16.16.0"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"asdf plugin add nodejs\nasdf install nodejs 16.16.0\nasdf local nodejs 16.16.0\nsource ~/.bashrc\n")),(0,l.kt)("p",null,"Install ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apt install npm\n")),(0,l.kt)("p",null,"Update NPM to v9.6.5:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g npm@9.6.5\n")),(0,l.kt)("h3",{id:"foundry"},"Foundry"),(0,l.kt)("p",null,"Download the Foundry script execute it to set up environment:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"curl -L https://foundry.paradigm.xyz/ | bash\n")),(0,l.kt)("p",null,"Set path:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"source /root/.bashrc\n")),(0,l.kt)("p",null,"Run foundryup to install Foundry (",(0,l.kt)("inlineCode",{parentName:"p"},"forge"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"cast"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"anvil"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"chisel"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"source /root/.bashrc\n")),(0,l.kt)("h3",{id:"yarn"},"Yarn"),(0,l.kt)("p",null,"Install yarn:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g yarn\n")),(0,l.kt)("p",null,"Depending on the version installed,\nyou may need to update your version of NPM."),(0,l.kt)("h3",{id:"docker-compose"},"Docker compose"),(0,l.kt)("p",null,"Install docker-compose:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apt install docker-compose\n")),(0,l.kt)("h3",{id:"gcc--libusb"},"gcc & libusb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"apt install gcc libusb-1.0-0-dev \n")),(0,l.kt)("h2",{id:"build-devnet"},"Build devnet"),(0,l.kt)("p",null,"Build TypeScript definitions for TS dependencies:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ncd optimism\nmake build-ts\n")),(0,l.kt)("p",null,"Set environment variables to start network:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export SEQUENCER_BATCH_INBOX_ADDRESS=0xff00000000000000000000000000000000000000\nexport L2OO_ADDRESS=0x70997970C51812dc3A010C7d01b50e0d17dc79C8\n")),(0,l.kt)("h3",{id:"start-devnet"},"Start devnet"),(0,l.kt)("p",null,"Start the network by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make devnet-up \n")),(0,l.kt)("p",null,"This starts up the layer 1 (ETH), layer 2 (",(0,l.kt)("inlineCode",{parentName:"p"},"op-geth"),"), data availability\nlayer (Celestia), the sequencer (",(0,l.kt)("inlineCode",{parentName:"p"},"op-node"),"), batch submitter (",(0,l.kt)("inlineCode",{parentName:"p"},"op-batcher"),"),\nstate commitment service (",(0,l.kt)("inlineCode",{parentName:"p"},"op-proposer"),")."),(0,l.kt)("admonition",{title:"optional",type:"tip"},(0,l.kt)("h4",{parentName:"admonition",id:"lazydocker"},"lazydocker"),(0,l.kt)("p",{parentName:"admonition"},"You can install ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/jesseduffield/lazydocker"},"lazydocker"),"\nto view all of the components of your stack in one GUI by running:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"asdf plugin add lazydocker https://github.com/comdotlinux/asdf-lazydocker.git\nasdf list all lazydocker\nasdf install lazydocker 0.12\nasdf global lazydocker 0.12\n")),(0,l.kt)("p",{parentName:"admonition"},"And run the command:"),(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"lazydocker\n")),(0,l.kt)("p",{parentName:"admonition"},"If you do this, you can skip the ",(0,l.kt)("a",{parentName:"p",href:"#viewing-containers"},"viewing containers"),"\nsection and ",(0,l.kt)("a",{parentName:"p",href:"#find-a-transaction"},"find a transaction"),".")),(0,l.kt)("h3",{id:"stop-devnet"},"Stop devnet"),(0,l.kt)("p",null,"If you'd like to start the network over, use the following command\nto safely shut down all of the containers:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make devnet-down\n")),(0,l.kt)("p",null,"Then clean out the old config:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make devnet-clean\n")),(0,l.kt)("h3",{id:"viewing-containers"},"Viewing containers"),(0,l.kt)("p",null,"To view the containers running, send:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker ps\n")),(0,l.kt)("p",null,"Find the container ID of the ",(0,l.kt)("inlineCode",{parentName:"p"},"ops-bedrock_op-batcher_1"),"\nand run the following to follow the logs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f <container-id>\n")),(0,l.kt)("p",null,"In a new terminal, find the container ID of the\n",(0,l.kt)("inlineCode",{parentName:"p"},"ghcr.io/celestiaorg/local-celestia-devnet:main"),"\nand run the following to follow the logs:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"docker logs -f <container-id>\n")),(0,l.kt)("p",null,"You can do the same for other containers as you\nexplore the stack."),(0,l.kt)("h2",{id:"find-a-transaction"},"Find a transaction"),(0,l.kt)("p",null,"Now, we'll check for a recent transaction with:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cast block latest --rpc-url localhost:8545\n")),(0,l.kt)("p",null,"Output of a block that contains a transaction will look like this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"baseFeePerGas        7\ndifficulty           2\nextraData            0xd883010a16846765746888676f312e31382e35856c696e75780000000000000001749030eb8e51903cf49e2c8c21e7ff98aaa7d45e3ecd51b8594440c5c66e9931b70b18d1a629212074f3ef9188bd0a9079e094e414d287f73d40ea8392349600\ngasLimit             30000000\ngasUsed              21072\nhash                 0x9d764f5e3e2ccf5a334ae4fbe3827e7b80750f39aa671c958b5c09a9b67d9dfc\nlogsBloom            0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000\nminer                0x0000000000000000000000000000000000000000\nmixHash              0x0000000000000000000000000000000000000000000000000000000000000000\nnonce                0x0000000000000000\nnumber               1569\nparentHash           0x1a5100654617b565bf2a117c7487a57c54d0c61b99d94592518fbc07b3fec45d\nreceiptsRoot         0xa981da57b00630bb01a6eb02629212ea8b0c89281a07295ace6bb78c81193e68\nsealFields           []\nsha3Uncles           0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347\nsize                 740\nstateRoot            0x9d1e02cbf556997123676f47749a043b5bd9bebe629f5dbd3f256a7d5e37b665\ntimestamp            1677272382\ntotalDifficulty      3139\ntransactions:        [\n    0x40b79afe3dc05ff398c2142ab47eb94ac3759a03dd1322b2d97bcdc2d1c34934\n]\n")),(0,l.kt)("p",null,"And copy the transaction hash from ",(0,l.kt)("inlineCode",{parentName:"p"},"transactions: [<transaction-hash]")," and\nset it as a variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export TX_HASH=0xb8869dfecf9a5a0e26df6b13e64071b859f2cc0587b97cb4387abf9ddb2ff9a0\n")),(0,l.kt)("h2",{id:"read-the-transaction-call-data"},"Read the transaction call data"),(0,l.kt)("p",null,"Now read the transaction call data:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cast tx $TX_HASH --rpc-url localhost:8545\n")),(0,l.kt)("p",null,"The output will look similar to below:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"blockHash            0xce5691878b61e3b5bbae66317512365ef6bb1f597b4dfc11e585abf470cdf4dd\nblockNumber          1164\nfrom                 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC\ngas                  21072\ngasPrice             1000000007\nhash                 0xb8869dfecf9a5a0e26df6b13e64071b859f2cc0587b97cb4387abf9ddb2ff9a0\ninput                0x0000000000000c2a00000000\nnonce                318\nr                    0x9a32da65f4dabf0e1c6d2a86d52c7d6f868997cfc1183fc28c5f0a0615a5e678\ns                    0x4ce385cc70a178b86d95de05428763805183276a6fd418c44e346a3838a70144\nto                   0xfF00000000000000000000000000000000000000\ntransactionIndex     0\nv                    0\nvalue                0\n")),(0,l.kt)("p",null,"Now set the ",(0,l.kt)("inlineCode",{parentName:"p"},"input")," as the ",(0,l.kt)("inlineCode",{parentName:"p"},"INPUT")," variable, removing the ",(0,l.kt)("inlineCode",{parentName:"p"},"0x")," from the beginning:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export INPUT=0000000000000c2a00000000\n")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Remember to remove the ",(0,l.kt)("inlineCode",{parentName:"p"},"0x"),"!")),(0,l.kt)("h2",{id:"find-the-data-on-celestia"},"Find the data on Celestia"),(0,l.kt)("p",null,"Now navigate to ",(0,l.kt)("inlineCode",{parentName:"p"},"optimism/op-celestia")," and run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"go run main.go $INPUT\n")),(0,l.kt)("p",null,"Your result will look similar to the below!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"celestia block height: 3114; tx index: 0\n-----------------------------------------\noptimism block data on celestia: [00191cef8fb52cf322b77694ff5a92149800000000020b78dadae1c7f0c37b015fdd84970dfbe3ff4ab7abe8b9083c94aebe7df77e705bba47f8e72b762fadcecd6b62695920e9eee3e5369b3fd265726ebcfbfcbf3f5fcde3bd6960f53b7da1c147ae4fefe689b724ff54c83a0031ef93479f5a75f08e6a9bbd0b755c220e4ed8b3fd5c9cfc1b9ed0ca69dcabbf5cbd274aac793950f38ef6bd59e551e56d77fcf7aabd9287abd8af7b9de39cb3235732c58be7034774bf54134beb828c19b15f3553a74b64ffbd3a2fe0e8cbb77b0217dccb4f68de9774fbac5efaed040190797950f3e22bafc9d7884cf616d87db6a46ace99b277252dd36f9c7d5ebabfd46d5a71bec9872696b605173ccc153d4a7befbd69f64f6db25cc7dd59f86d5de586b457f7d759f73fe57fde0c32af006a5eebdcfb85d385b3ef3d158fbccaf263cb8b35cb2a58cc0f083f5cf3b742d555f3fe2362cd2b829a37c9c9446fedbf8d911f3f86cc79c335e960f26d5eef25e735f7dd9b926019dcf1ed5b134bfb02416e36be3b277635b757f36f2bff9260ddcf1f20132e5071afe8bcdd9ccdcffda440e69540cddbb548ecdd73863673ab122e2d36d69dfc8bd71be61dbae235cf63e3a9a0121141b726968e051d2b7ef076b11f3c9964b4fee0acfb93777fbd37d94dfdecfdd6836af39ebaaff58c07995706352fdf9259b773cfd42e0ed168914542c54ca28147969b18b7987ef233fcd41c1cde44ac79150700010000fffff649400701]\n")),(0,l.kt)("h2",{id:"deploying-a-smart-contract"},"Deploying a smart contract"),(0,l.kt)("p",null,"First, review the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/optimism/blob/celestia/specs/meta/devnet.md"},"devnet page"),"\nwith information about the faucet accounts. You will need a funded\naccount to deploy your smart contract."),(0,l.kt)("p",null,"Next, clone the ",(0,l.kt)("inlineCode",{parentName:"p"},"gm-portal")," from Github and start the frontend:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ngit clone https://github.com/jcstein/gm-portal.git\ncd gm-portal/frontend\nyarn && yarn dev\n")),(0,l.kt)("p",null,"In a new terminal instance, set the private key for the faucet as a variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export PRIVATE_KEY=ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80\n")),(0,l.kt)("p",null,"Now, change into the ",(0,l.kt)("inlineCode",{parentName:"p"},"gm-portal/contracts")," directory in the same terminal and deploy\nthe contract using Foundry:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME/gm-portal/contracts\nforge script script/WavePortal.s.sol:WavePortalScript --rpc-url http://localhost:9545 --private-key $PRIVATE_KEY --broadcast\n")),(0,l.kt)("p",null,"In the output of the deployment, find the contract address and set it as a variable:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export CONTRACT_ADDRESS=<your contract address from the output above>\n")),(0,l.kt)("p",null,"Next, you're ready to interact with the contract from your terminal!"),(0,l.kt)("p",null,'First, send a "gm" to the contract:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'cast send $CONTRACT_ADDRESS \\\n"wave(string)" "gm" \\\n--private-key $PRIVATE_KEY \\\n--rpc-url http://localhost:9545\n')),(0,l.kt)("p",null,'Now that you\'ve posted to the contract, you can read all "waves" (GMs) from the\ncontract with\nthis command:'),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'cast call $CONTRACT_ADDRESS "getAllWaves()" --rpc-url http://localhost:9545\n')),(0,l.kt)("p",null,"Next, query the total number of waves, which will be returned as a hex value:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'cast call $CONTRACT_ADDRESS "getTotalWaves()" --rpc-url http://localhost:9545\n')),(0,l.kt)("p",null,"In order to interact with the contract on the frontend, you'll need to fund an\naccount thatyou have in your Ethereum wallet. Transfer to an external account\nwith this command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"export RECEIVER=<receiver ETH address>\ncast send --private-key $PRIVATE_KEY $RECEIVER --value 1ether --rpc-url http://localhost:9545\n")),(0,l.kt)("p",null,"If you are in a different terminal than the one you set the private key in, you\nmay need to set it again."),(0,l.kt)("h3",{id:"update-the-frontend"},"Update the frontend"),(0,l.kt)("p",null,"Next, you will need to update a few things before you can interact with the\ncontract on the frontend:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Change the contract address on ",(0,l.kt)("inlineCode",{parentName:"li"},"gm-portal/frontend/src/App.tsx")," to your\ncontract address"),(0,l.kt)("li",{parentName:"ol"},"Match the chain info on ",(0,l.kt)("inlineCode",{parentName:"li"},"gm-portal/frontend/src/main.tsx")," with the chain\nconfig of your L2"),(0,l.kt)("li",{parentName:"ol"},"If you changed the contract, update the ABI in\n",(0,l.kt)("inlineCode",{parentName:"li"},"gm-portal/frontend/WavePortal.json")," from\n",(0,l.kt)("inlineCode",{parentName:"li"},"gm-portal/contracts/out/WavePortal.sol/WavePortal.json"),". This can be done with:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd $HOME\ncp gm-portal/contracts/out/WavePortal.sol/WavePortal.json gm-portal/frontend`\n")),(0,l.kt)("h3",{id:"interact-with-the-frontend"},"Interact with the frontend"),(0,l.kt)("p",null,"Now, login with your wallet that you funded, and post a GM on your GM portal!"),(0,l.kt)("h2",{id:"next-steps"},"Next steps"),(0,l.kt)("p",null,"There are many possibilities of what could be built with this stack.\nThese projects would be good to build on this stack:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"on-chain gaming"),(0,l.kt)("li",{parentName:"ul"},"decentralized social media"),(0,l.kt)("li",{parentName:"ul"},"an NFT ticketing rollup"),(0,l.kt)("li",{parentName:"ul"},"Optimism on CelOPstia"),(0,l.kt)("li",{parentName:"ul"},"OP Craft on Celestia")))}u.isMDXComponent=!0}}]);