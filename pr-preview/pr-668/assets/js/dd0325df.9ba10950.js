"use strict";(self.webpackChunkcelestia_docs=self.webpackChunkcelestia_docs||[]).push([[9013],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=d(a),u=n,m=h["".concat(l,".").concat(u)]||h[u]||c[u]||o;return a?r.createElement(m,s(s({ref:t},p),{},{components:a})):r.createElement(m,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9003:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=a(7462),n=(a(7294),a(3905));const o={},s="Orchestrator",i={unversionedId:"nodes/qgb-orchestrator",id:"nodes/qgb-orchestrator",title:"Orchestrator",description:"The role of the orchestrator is to sign attestations using its corresponding validator EVM private key. These attestations are generated within the QGB module of the Celestia-app state machine. To learn more about what attestations are, you can refer to this link.",source:"@site/docs/nodes/qgb-orchestrator.md",sourceDirName:"nodes",slug:"/nodes/qgb-orchestrator",permalink:"/pr-preview/pr-668/nodes/qgb-orchestrator",draft:!1,editUrl:"https://github.com/celestiaorg/docs/tree/main/docs/nodes/qgb-orchestrator.md",tags:[],version:"current",frontMatter:{},sidebar:"nodes",previous:{title:"QGB",permalink:"/pr-preview/pr-668/category/qgb"},next:{title:"Keys",permalink:"/pr-preview/pr-668/nodes/qgb-keys"}},l={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"How to run",id:"how-to-run",level:2},{value:"Install the QGB binary",id:"install-the-qgb-binary",level:3},{value:"Init the store",id:"init-the-store",level:3},{value:"Add keys",id:"add-keys",level:3},{value:"EVM key",id:"evm-key",level:4},{value:"Start the orchestrator",id:"start-the-orchestrator",level:3},{value:"Edit validator",id:"edit-validator",level:4}],p={toc:d},h="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"orchestrator"},"Orchestrator"),(0,n.kt)("p",null,"The role of the orchestrator is to sign attestations using its corresponding validator EVM private key. These attestations are generated within the QGB module of the Celestia-app state machine. To learn more about what attestations are, you can refer to this ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/celestia-app/tree/main/x/qgb"},"link"),"."),(0,n.kt)("h2",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"The orchestrator does the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Connect to a Celestia-app full node or validator node via RPC and gRPC and wait for new attestations"),(0,n.kt)("li",{parentName:"ol"},"Once an attestation is created inside the QGB state machine, the orchestrator queries it."),(0,n.kt)("li",{parentName:"ol"},"After getting the attestation, the orchestrator signs it using the provided EVM private key. The private key should correspond to the EVM address provided when creating the validator. More details in ",(0,n.kt)("a",{parentName:"li",href:"https://docs.celestia.org/nodes/validator-node/#setup-qgb-keys"},"here"),"."),(0,n.kt)("li",{parentName:"ol"},"Then, the orchestrator pushes its signature to the P2P network it is connected to, via adding it as a DHT value."),(0,n.kt)("li",{parentName:"ol"},"Listen for new attestations and go back to step 2.")),(0,n.kt)("h2",{id:"how-to-run"},"How to run"),(0,n.kt)("h3",{id:"install-the-qgb-binary"},"Install the QGB binary"),(0,n.kt)("p",null,"Make sure to have the QGB binary installed. Check ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/orchestrator-relayer/blob/main/README.md"},"here")," for more details."),(0,n.kt)("h3",{id:"init-the-store"},"Init the store"),(0,n.kt)("p",null,"Before starting the orchestrator, we will need to init the store:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator init\n")),(0,n.kt)("p",null,"By default, the store will be created under ",(0,n.kt)("inlineCode",{parentName:"p"},"~/.orchestrator"),". However, if you want to specify a custom location, you can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"--home")," flag. Or, you can use the following environment variable:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Variable"),(0,n.kt)("th",{parentName:"tr",align:null},"Explanation"),(0,n.kt)("th",{parentName:"tr",align:null},"Default value"),(0,n.kt)("th",{parentName:"tr",align:null},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"ORCHESTRATOR_HOME")),(0,n.kt)("td",{parentName:"tr",align:null},"Home directory for the orchestrator"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("inlineCode",{parentName:"td"},"~/.orchestrator")),(0,n.kt)("td",{parentName:"tr",align:null},"Optional")))),(0,n.kt)("h3",{id:"add-keys"},"Add keys"),(0,n.kt)("p",null,"In order for the orchestrator to start, it will need two private keys:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"EVM private key"),(0,n.kt)("li",{parentName:"ul"},"P2P private key")),(0,n.kt)("p",null,"The EVM private key is the most important one since it needs to correspond to the EVM address provided when creating the validator."),(0,n.kt)("p",null,"The P2P private key is optional, and a new one will be generated automatically on the start if none is provided."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"keys")," command will help you set up these keys:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator keys  --help\n")),(0,n.kt)("p",null,"To add an EVM private key, check the next section."),(0,n.kt)("h4",{id:"evm-key"},"EVM key"),(0,n.kt)("p",null,"Because EVM keys are important, we provide a keystore that will help manage them. The keystore uses a file system keystore protected by a passphrase to store and open private keys."),(0,n.kt)("p",null,"To import your EVM private key, there is the ",(0,n.kt)("inlineCode",{parentName:"p"},"import")," subcommand to assist you with that:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator keys evm import --help\n")),(0,n.kt)("p",null,"This subcommand allows you to either import a raw ECDSA private key provided as plaintext, or import it from a file. The files are JSON keystore files encrypted using a passphrase like in ",(0,n.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/docs/developers/dapp-developer/native-accounts"},"here"),"."),(0,n.kt)("p",null,"After adding the key, you can check that it's added via running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator keys evm list\n")),(0,n.kt)("p",null,"For more information about the ",(0,n.kt)("inlineCode",{parentName:"p"},"keys")," command, check the ",(0,n.kt)("inlineCode",{parentName:"p"},"keys")," documentation in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/celestiaorg/orchestrator-relayer/blob/main/docs/keys.md"},"here"),"."),(0,n.kt)("h3",{id:"start-the-orchestrator"},"Start the orchestrator"),(0,n.kt)("p",null,"Now that we have the store initialized, we can start the orchestrator. Make sure you have your Celestia-app node RPC and gRPC accessible, and able to connect to the P2P network bootstrappers."),(0,n.kt)("p",null,"The orchestrator accepts the following flags:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ssh"},'qgb orchestrator start --help\n\nStarts the QGB orchestrator to sign attestations\n\nUsage:\n  qgb orchestrator start <flags> [flags]\n\nFlags:\n  -c, --celes-grpc string          Specify the grpc address (default "localhost:9090")\n  -t, --celes-http-rpc string      Specify the rest rpc address (default "http://localhost:26657")\n  -d, --evm-address string         Specify the EVM account address to use for signing (Note: the private key should be in the keystore)\n  -h, --help                       help for start\n      --home string                The qgb orchestrator home directory\n  -b, --p2p-bootstrappers string   Comma-separated multiaddresses of p2p peers to connect to\n  -q, --p2p-listen-addr string     MultiAddr for the p2p peer to listen on (default "/ip4/0.0.0.0/tcp/30000")\n  -p, --p2p-nickname string        Nickname of the p2p private key to use (if not provided, an existing one from the p2p store or a newly generated one will be used)\n      --evm-passphrase string          the account passphrase (if not specified as a flag, it will be asked interactively)\n')),(0,n.kt)("p",null,"To start the orchestrator in the default home directory, run the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ssh"},"qgb orchestrator start \\\n    -c localhost:9090 \\\n    -t http://localhost:26657 \\\n    -d 0x966e6f22781EF6a6A82BBB4DB3df8E225DfD9488 \\\n    -b /ip4/127.0.0.1/tcp/30001/p2p/12D3KooWFFHahpcZcuqnUhpBoX5fJ68Qm5Hc8dxiBcX1oo46fLxh \\\n    -q /ip4/0.0.0.0/tcp/30000\n")),(0,n.kt)("p",null,'And, you will be prompted to enter your EVM key passphrase so that the orchestrator can use it to sign attestations. Make sure that it\'s the EVM address that was provided when creating the validator. If not, then the orchestrator will not sign, and you will keep seeing a "validator not part of valset" warning message. If you see such message, first verify that your validator is part of the active validator set. If so, then probably the EVM address provided to the orchestrator is not the right one, and you should check which EVM address is registered to your validator. Check the next section for more information.'),(0,n.kt)("p",null,"If you no longer have access to your EVM address, you could always edit your validator with a new EVM address. This can be done through the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit-validator")," command. Check the next section."),(0,n.kt)("h4",{id:"edit-validator"},"Edit validator"),(0,n.kt)("p",null,"If your validator was created using an EVM address that you don't have access to, you can always edit it using the ",(0,n.kt)("inlineCode",{parentName:"p"},"edit-validator")," command."),(0,n.kt)("p",null,"First, you should get your validator ",(0,n.kt)("inlineCode",{parentName:"p"},"valoper")," address. To do so, run the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ssh"},"celestia-appd keys show <validator_account> --bech val\n")),(0,n.kt)("p",null,"This assumes that you're using the default home directory, the default keystore etc. If not, make sure to add the flags that correspond to your situation."),(0,n.kt)("p",null,"Then, you should get your validator to verify which EVM address is attached to it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ssh"},"celestia-appd query staking validator <validator_valoper_address>\n")),(0,n.kt)("p",null,"And check the ",(0,n.kt)("inlineCode",{parentName:"p"},"evm_address")," field if it has an address that you want to use to sign attestations. If not, let's proceed to change it."),(0,n.kt)("p",null,"Note: Please double-check the parameters of the following command before running it, as it may have persistent effects."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ssh"},"celestia-appd tx staking edit-validator --evm-address=<new_evm_address> --from=<validator_account> --fees 210utia\n")),(0,n.kt)("p",null,"Example command output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ssh"},'auth_info:\n  fee:\n    amount:\n    - amount: "210"\n      denom: utia\n    gas_limit: "210000"\n    granter: ""\n    payer: ""\n  signer_infos: []\n  tip: null\nbody:\n  extension_options: []\n  memo: ""\n  messages:\n  - \'@type\': /cosmos.staking.v1beta1.MsgEditValidator\n    commission_rate: null\n    description:\n      details: \'[do-not-modify]\'\n      identity: \'[do-not-modify]\'\n      moniker: \'[do-not-modify]\'\n      security_contact: \'[do-not-modify]\'\n      website: \'[do-not-modify]\'\n    evm_address: 0x27a1F8CE94187E4b043f4D57548EF2348Ed556c7\n    min_self_delegation: null\n    validator_address: celestiavaloper1vr6j8mq6aaxr5mw9sld3a75afjr4rytp42zy6h\n  non_critical_extension_options: []\n  timeout_height: "0"\nsignatures: []\nconfirm transaction before signing and broadcasting [y/N]: y\ncode: 0\ncodespace: ""\ndata: ""\nevents: []\ngas_used: "0"\ngas_wanted: "0"\nheight: "0"\ninfo: ""\nlogs: []\nraw_log: \'[]\'\ntimestamp: ""\ntx: null\ntxhash: 25864170DDE40F51C0C38BCF5B22BBC015637F56AA1E2DFDA6CE51F2D5860579\n')),(0,n.kt)("p",null,"Now, you can verify that the EVM address has been updated using the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ssh"},"celestia-appd query staking validator <validator_valoper_address>\n")),(0,n.kt)("p",null,"Now, you can restart the orchestrator, and it should start signing."))}c.isMDXComponent=!0}}]);