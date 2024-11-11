"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1120],{2708:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var i=l(4848),d=l(8453);const s={},t="Working with Guilds Events",r={id:"guilds/developer-api/guilds-events",title:"Working with Guilds Events",description:"- Guilds provides a set of events that you can use to listen to guild-related actions.",source:"@site/docs/guilds/developer-api/guilds-events.md",sourceDirName:"guilds/developer-api",slug:"/guilds/developer-api/guilds-events",permalink:"/guilds/developer-api/guilds-events",draft:!1,unlisted:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/guilds/developer-api/guilds-events.md",tags:[],version:"current",lastUpdatedAt:1731352532e3,frontMatter:{},sidebar:"guilds",previous:{title:"Working with Guilds API",permalink:"/guilds/developer-api/guilds-api"}},a={},u=[{value:"Guilds",id:"guilds",level:3},{value:"Guild Level",id:"guild-level",level:3},{value:"Guild Player",id:"guild-player",level:3},{value:"Guild Rank",id:"guild-rank",level:3}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"working-with-guilds-events",children:"Working with Guilds Events"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Guilds provides a set of events that you can use to listen to guild-related actions."}),"\n",(0,i.jsx)(n.li,{children:"The events are related to guilds, levels, members and ranks."}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"guilds-events-list",children:"Guilds Events List"}),"\n",(0,i.jsx)(n.h3,{id:"guilds",children:"Guilds"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"GuildCreateEvent and GuildDeleteEvent events cannot be cancelled."})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GuildCreateEvent"}),": Called when a guild is created."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GuildDeleteEvent"}),": Called when a guild is deleted."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GuildRenameEvent"}),": Called when a guild is renamed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GuildTagEvent"}),": Called when a guild's tag is changed."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"guild-level",children:"Guild Level"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GuildLevelChangeEvent"}),": Called when the guild's level changes."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GuildXpChangeEvent"}),": Called when the guild's xp changes."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"guild-player",children:"Guild Player"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GuildDemoteEvent"}),": Called when a player is demoted in the guild."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GuildJoinEvent"}),": Called when a player joins a guild."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GuildKickEvent"}),": Called when a player is kicked from the guild."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GuildLeaveEvent"}),": Called when a player leaves a guild."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GuildMuteEvent"}),": Called when a player is muted in the guild."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GuildPromoteEvent"}),": Called when a player is promoted in the guild."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GuildTransferEvent"}),": Called when the guild is transferred to another player."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GuildUnmuteEvent"}),": Called when a player is unmuted in the guild."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"guild-rank",children:"Guild Rank"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GuildRankCreateEvent"}),": Called when a rank is created in the guild."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GuildRankDeleteEvent"}),": Called when a rank is deleted in the guild."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GuildRankPermissionEvent"}),": Called when a rank's permission is changed in the guild."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GuildRankRenameEvent"}),": Called when a rank is renamed in the guild."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"GuildRankTagEvent"}),": Called when a rank's tag is changed in the guild."]}),"\n"]}),"\n",(0,i.jsx)(n.h1,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",metastring:'title="ExampleListener.java"',children:'//Code to cancel the GuildTransferEvent if the new leader is not online.\n\n@EventHandler\npublic void onGuildTransfer(GuildTransferEvent event) {\n    Guild guild = event.getGuild();\n    GuildPlayer oldLeader = event.getOldLeader();\n    GuildPlayer newLeader = event.getNewLeader();\n\n    if (newLeader.getOnlinePlayer() == null) {\n        oldLeader.sendMessage("\xa7cThe new leader is not online.");\n\n        event.setCancelled(true);\n        return;\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>r});var i=l(6540);const d={},s=i.createContext(d);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);