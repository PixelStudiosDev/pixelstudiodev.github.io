"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8486],{1670:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=t(4848),s=t(8453);const i={sidebar_position:5},d="Rewards",c={id:"epicachievements/configuration/rewards",title:"Rewards",description:"EpicAchievements offers a bunch of built-in rewards.",source:"@site/docs/epicachievements/configuration/rewards.md",sourceDirName:"epicachievements/configuration",slug:"/epicachievements/configuration/rewards",permalink:"/epicachievements/configuration/rewards",draft:!1,unlisted:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/epicachievements/configuration/rewards.md",tags:[],version:"current",lastUpdatedAt:1724160702e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"epicachievements",previous:{title:"Conditions",permalink:"/epicachievements/configuration/conditions"},next:{title:"Internal Placeholders",permalink:"/epicachievements/placeholders/internal-placeholders"}},a={},o=[{value:"Reward leveling system",id:"reward-leveling-system",level:2}];function l(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"rewards",children:"Rewards"}),"\n",(0,r.jsxs)(n.p,{children:["EpicAchievements offers a bunch of built-in rewards. ",(0,r.jsx)("br",{}),"\nBelow is a list of them:"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"{player}"})," placeholder in all rewards."]})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Reward"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"BROADCAST"})}),(0,r.jsx)(n.td,{children:"Broadcast a message to the server"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"COMMAND"})}),(0,r.jsx)(n.td,{children:"Execute a console command"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"EXPERIENCE_LEVELS"})}),(0,r.jsx)(n.td,{children:"Give experience levels to a player"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"EXPERIENCE"})}),(0,r.jsx)(n.td,{children:"Give experience points to a player"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"MESSAGE"})}),(0,r.jsx)(n.td,{children:"Send a message to a player"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"VAULT"})}),(0,r.jsx)(n.td,{children:"Give money to a player"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"reward-leveling-system",children:"Reward leveling system"}),"\n",(0,r.jsxs)(n.p,{children:["Using the points earned by completing achievements, players can unlock rewards. ",(0,r.jsx)("br",{}),"\nBelow is an example configuration:"]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["You can use the ",(0,r.jsx)(n.code,{children:"{level}"})," placeholder to get the current level. ",(0,r.jsx)("br",{}),"\nMath expressions and functions are supported!"]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title="rewards.yml"',children:'rewards:\n  # Range of levels\n  1-100:\n    # Points required to unlock the reward. Math expressions are supported!\n    required-points: "{level} * 100"\n    # A list of rewards\n    rewards:\n      - "VAULT:{level} * 10"\n    # Item displayed when the reward is locked\n    locked-item:\n      material: "COAL"\n      name: "&cAchievement Reward"\n      lore:\n        - "&8Level {level}"\n        - "&7Required Points: &e{points}"\n        - ""\n        - "&7Reward:"\n        - "{rewards}"\n        - ""\n        - "{status}"\n    # Item displayed when the reward is unlocked\n    unlocked-item:\n      material: "GOLD_NUGGET"\n      name: "&aAchievement Reward"\n      lore:\n        - "&8Level {level}"\n        - "&7Required Points: &e{points}"\n        - ""\n        - "&7Reward:"\n        - "{rewards}"\n        - ""\n        - "{status}"\n  # Other levels can be added below\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var r=t(6540);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);