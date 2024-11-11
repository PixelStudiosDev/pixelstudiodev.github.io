"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6838],{9786:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var t=i(4848),o=i(8453);const d={sidebar_position:7},s="Rewards Config",r={id:"guilds/configuration/rewards-config",title:"Rewards Config",description:"File location",source:"@site/docs/guilds/configuration/rewards-config.md",sourceDirName:"guilds/configuration",slug:"/guilds/configuration/rewards-config",permalink:"/guilds/configuration/rewards-config",draft:!1,unlisted:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/guilds/configuration/rewards-config.md",tags:[],version:"current",lastUpdatedAt:1731352532e3,sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"guilds",previous:{title:"Language Config",permalink:"/guilds/configuration/language-config"},next:{title:"Commands and Permissions",permalink:"/guilds/commands-and-permissions"}},a={},l=[{value:"File location",id:"file-location",level:2},{value:"Editing the file",id:"editing-the-file",level:2},{value:"Conditions",id:"conditions",level:2}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"rewards-config",children:"Rewards Config"}),"\n",(0,t.jsx)(n.h2,{id:"file-location",children:"File location"}),"\n",(0,t.jsxs)(n.p,{children:["The main configuration file is located in ",(0,t.jsx)(n.code,{children:"plugins/Guilds/rewards.yml"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"editing-the-file",children:"Editing the file"}),"\n",(0,t.jsx)(n.p,{children:"Here you can find all the information regarding the configuration of the file:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",metastring:'title="rewards.yml"',children:"tags:\n\n  # The ID are used to identify the rewards\n  red:\n\n    # The TAG color of the reward\n    color: RED\n\n    # The display name of the reward\n    display-name: '&cRed'\n\n    # The conditions to get the reward\n    # Format: <TYPE>:<VALUE>\n    #\n    # Below are the available conditions\n    conditions:\n      - RANK:MASTER\n      - MC_PERMISSION:guilds.mvp++\n\n  blue:\n    color: BLUE\n    display-name: '&1Blue'\n    conditions:\n      - RANK:admin\n      - MC_PERMISSION:guilds.mvp++\n"})}),"\n",(0,t.jsx)(n.h2,{id:"conditions",children:"Conditions"}),"\n",(0,t.jsxs)(n.p,{children:["The conditions are used to check if the player can get the reward. The format is ",(0,t.jsx)(n.code,{children:"<TYPE>:<VALUE>"}),".\nHere are the current available conditions:"]}),"\n",(0,t.jsxs)(n.p,{children:["Other conditions can be added in the future.\nIt's possible to request a new condition by joining our ",(0,t.jsx)(n.a,{href:"https://pixelstudios.dev/discord",children:"Discord"}),"."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Condition ID"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Example"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"RANK"}),(0,t.jsx)(n.td,{children:"Guild rank"}),(0,t.jsx)(n.td,{children:"MASTER / DEFAULT / admin"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MC_PERMISSION"}),(0,t.jsx)(n.td,{children:"Minecraft default permission"}),(0,t.jsx)(n.td,{children:"guilds.mvp++"})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var t=i(6540);const o={},d=t.createContext(o);function s(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);