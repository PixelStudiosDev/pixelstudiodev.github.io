"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[407],{6203:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var i=t(4848),a=t(8453);const o={},c="Creating an Achievement",r={id:"epicachievements/configuration/achievements",title:"Creating an Achievement",description:"Interactive Setup",source:"@site/docs/epicachievements/configuration/achievements.md",sourceDirName:"epicachievements/configuration",slug:"/epicachievements/configuration/achievements",permalink:"/epicachievements/configuration/achievements",draft:!1,unlisted:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/epicachievements/configuration/achievements.md",tags:[],version:"current",lastUpdatedAt:1716821712e3,frontMatter:{},sidebar:"epicachievements",previous:{title:"Commands and Permissions",permalink:"/epicachievements/commands-and-permissions"},next:{title:"Categories Configuration",permalink:"/epicachievements/configuration/categories"}},s={},h=[{value:"Interactive Setup",id:"interactive-setup",level:2},{value:"Manually editing an arena configuration",id:"manually-editing-an-arena-configuration",level:2}];function d(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"creating-an-achievement",children:"Creating an Achievement"}),"\n",(0,i.jsx)(n.h2,{id:"interactive-setup",children:"Interactive Setup"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Run the command ",(0,i.jsx)(n.code,{children:"/achievement editor"})," to open the editor."]}),"\n",(0,i.jsx)(n.li,{children:"Select a category or create a new one."}),"\n",(0,i.jsxs)(n.li,{children:["Click on the ",(0,i.jsx)(n.code,{children:"Edit Achievements"})," button."]}),"\n",(0,i.jsxs)(n.li,{children:["Click on the ",(0,i.jsx)(n.code,{children:"Create Achievement"})," button."]}),"\n",(0,i.jsx)(n.li,{children:"Enter the achievement's name in the chat."}),"\n",(0,i.jsx)(n.li,{children:"Choose the achievement's task from the list in the chat."}),"\n",(0,i.jsx)(n.li,{children:"The achievement will be created and you can now edit it."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"manually-editing-an-arena-configuration",children:"Manually editing an arena configuration"}),"\n",(0,i.jsx)(n.p,{children:"Here you can find an explained version of an achievement configuration file:"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["You can find the achievement configuration files in the ",(0,i.jsx)(n.code,{children:"plugins/EpicAchievements/achievements/<category>"})," folder."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",metastring:'title="example.yml"',children:"eater:\n  # The displayed name of the achievement\n  name: Eater\n  \n  # The description of the achievement\n  description:\n    - '&fEat 5 apples'\n      \n    # The task type\n  type: CONSUME_ITEM\n  \n    # The permission required to view and progress in the achievement\n  permission: achievements.eater\n  \n  # Conditions that need to be met to progress in the achievement\n  \n  # The worlds where the achievement can be completed\n  worlds:\n    - world\n  \n  # Game modes where the achievement can be completed \n  game-modes:\n    - SURVIVAL\n\n  # Task-specific conditions\n  materials:\n    - APPLE\n      \n  # The tiers of the achievement\n  tiers:\n    \n    # The first tier of the achievement\n    '1':\n      # The amount of progress required to complete the tier\n      required-amount: 10\n      \n      # The amount of points the player will receive when completing the tier\n      points: 25\n      \n      # The rewards the player will receive when completing the tier\n      # Format: REWARD_TYPE:VALUE\n      # Check the rewards documentation for more information\n      rewards:\n        - COMMAND:say {player} has completed the Eater achievement!\n        - VAULT:100\n        - EXPERIENCE:50\n          \n    # Other tiers of the achievement can be added below     \n    '2':\n      required-amount: 15\n      points: 15\n"})})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var i=t(6540);const a={},o=i.createContext(a);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);