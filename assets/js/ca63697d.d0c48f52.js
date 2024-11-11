"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2500],{2730:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>o,contentTitle:()=>r,default:()=>x,frontMatter:()=>d,metadata:()=>c,toc:()=>l});var n=s(4848),t=s(8453);const d={sidebar_position:4},r="Conditions",c={id:"epicachievements/configuration/conditions",title:"Conditions",description:"Conditions are used to set requirements to progress in an achievement.",source:"@site/docs/epicachievements/configuration/conditions.md",sourceDirName:"epicachievements/configuration",slug:"/epicachievements/configuration/conditions",permalink:"/epicachievements/configuration/conditions",draft:!1,unlisted:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/epicachievements/configuration/conditions.md",tags:[],version:"current",lastUpdatedAt:1731352532e3,sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"epicachievements",previous:{title:"Categories",permalink:"/epicachievements/configuration/categories"},next:{title:"Rewards",permalink:"/epicachievements/configuration/rewards"}},o={},l=[{value:"Global Conditions",id:"global-conditions",level:3},{value:"Task-specific Conditions",id:"task-specific-conditions",level:3}];function h(e){const i={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"conditions",children:"Conditions"}),"\n",(0,n.jsxs)(i.p,{children:["Conditions are used to set requirements to progress in an achievement. ",(0,n.jsx)("br",{}),"\nBelow is a list of all the built-in conditions:"]}),"\n",(0,n.jsx)(i.admonition,{type:"tip",children:(0,n.jsxs)(i.p,{children:["Custom items and blocks from ItemsAdder, Oraxen and MMOItems are supported! ",(0,n.jsx)("br",{}),"\nDiscover more about it ",(0,n.jsx)(i.a,{href:"/item-format",children:"here"}),"."]})}),"\n",(0,n.jsx)(i.h3,{id:"global-conditions",children:"Global Conditions"}),"\n",(0,n.jsx)(i.p,{children:"Supported by all types of achievements."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Condition"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Examples"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"game-modes"})}),(0,n.jsx)(i.td,{children:"Allowed game modes"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"- SURVIVAL"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"worlds"})}),(0,n.jsx)(i.td,{children:"Allowed worlds"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:'- "world"'})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"item-in-hand"})}),(0,n.jsx)(i.td,{children:"Requires the player to have an item in hand"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"- <material>"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"item-equipped"})}),(0,n.jsx)(i.td,{children:"Requires the player to have an item equipped"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"- <material>"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"riding-entity"})}),(0,n.jsx)(i.td,{children:"Requires the player to ride an entity"}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"- ALL"}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"- <entity>"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"regions"})}),(0,n.jsxs)(i.td,{children:["A list of ",(0,n.jsx)(i.a,{href:"https://dev.bukkit.org/projects/worldguard",children:"WorldGuard"})," regions"]}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"- <region-id>"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"is-sneaking"})}),(0,n.jsx)(i.td,{children:"Requires the player to be sneaking"}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"true"})," ",(0,n.jsx)(i.code,{children:"false"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"is-sprinting"})}),(0,n.jsx)(i.td,{children:"Requires the player to be sprinting"}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"true"})," ",(0,n.jsx)(i.code,{children:"false"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"is-flying"})}),(0,n.jsx)(i.td,{children:"Requires the player to be flying"}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"true"})," ",(0,n.jsx)(i.code,{children:"false"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"has-open-inventory"})}),(0,n.jsxs)(i.td,{children:["Checks if the player has an inventory open.",(0,n.jsx)("br",{}),"It isn't possible to check if the player's own inventory is open."]}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"true"})," ",(0,n.jsx)(i.code,{children:"false"})]})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"task-specific-conditions",children:"Task-specific Conditions"}),"\n",(0,n.jsx)(i.p,{children:"Supported only by some types of achievements."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Condition"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Examples"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"entities"})}),(0,n.jsx)(i.td,{children:"A list of entities"}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"- CHICKEN"}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"- mythicmobs:<mob-id>"}),(0,n.jsx)("br",{}),(0,n.jsx)(i.code,{children:"- mm:<mob-id>"})]})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"items"})}),(0,n.jsx)(i.td,{children:"A list of items"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"- <material>"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"blocks"})}),(0,n.jsx)(i.td,{children:"A list of blocks"}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"- <material>"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"potion-effects"})}),(0,n.jsxs)(i.td,{children:["A list of ",(0,n.jsx)(i.a,{href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/potion/PotionType.html",children:"potion types"})]}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"- SWIFTNESS"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"crop-age"})}),(0,n.jsx)(i.td,{children:"Specify crop growth stages"}),(0,n.jsxs)(i.td,{children:[(0,n.jsx)(i.code,{children:"MAX"})," ",(0,n.jsx)(i.code,{children:"<age>"})]})]})]})]})]})}function x(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,i,s)=>{s.d(i,{R:()=>r,x:()=>c});var n=s(6540);const t={},d=n.createContext(t);function r(e){const i=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(d.Provider,{value:i},e.children)}}}]);