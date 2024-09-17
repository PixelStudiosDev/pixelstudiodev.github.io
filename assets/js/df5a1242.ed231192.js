"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[224],{1743:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=a(4848),t=a(8453);const r={},i="Creating an Arena",s={id:"wool-wars/configuration/creating-an-arena",title:"Creating an Arena",description:"Interactive Setup",source:"@site/docs/wool-wars/configuration/creating-an-arena.md",sourceDirName:"wool-wars/configuration",slug:"/wool-wars/configuration/creating-an-arena",permalink:"/wool-wars/configuration/creating-an-arena",draft:!1,unlisted:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/wool-wars/configuration/creating-an-arena.md",tags:[],version:"current",lastUpdatedAt:1726604168e3,frontMatter:{},sidebar:"woolwars",previous:{title:"Commands and Permissions",permalink:"/wool-wars/commands-and-permissions"},next:{title:"Frequently Asked Questions",permalink:"/wool-wars/frequently-asked-questions"}},l={},c=[{value:"Interactive Setup",id:"interactive-setup",level:2},{value:"Manually editing an arena configuration",id:"manually-editing-an-arena-configuration",level:2}];function u(n){const e={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"creating-an-arena",children:"Creating an Arena"}),"\n",(0,o.jsx)(e.h2,{id:"interactive-setup",children:"Interactive Setup"}),"\n",(0,o.jsxs)(e.ol,{children:["\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["Run the command ",(0,o.jsx)(e.code,{children:"/woolwars setup <id>"})," to start the setup process."]}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["A GUI will open: ",(0,o.jsx)("br",{})]}),"\n",(0,o.jsx)(e.p,{children:(0,o.jsx)(e.img,{src:a(9814).A+"",width:"511",height:"268"})}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsx)(e.p,{children:"Complete all the steps and click the emerald block to save the arena."}),"\n"]}),"\n",(0,o.jsxs)(e.li,{children:["\n",(0,o.jsxs)(e.p,{children:["You can now join the arena using the command ",(0,o.jsx)(e.code,{children:"/woolwars join <id>"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(e.h2,{id:"manually-editing-an-arena-configuration",children:"Manually editing an arena configuration"}),"\n",(0,o.jsx)(e.p,{children:"Here you can find an explained version of an arena configuration file:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-yaml",metastring:'title="example.yml"',children:"# The displayed name of the arena\ndisplayname: Urban\n\n# The group of the arena. This is used for the /woolwars join <group> command and for some placeholders.\ngroup: 4v4\n\n# The location of the waiting lobby. (Format: world:x:y:z:yaw:pitch)\nlobby-location: urban:-10.246799445222704:35.0:7.537029879923992:90.62368:-1.4038824\n\n# The maximum amount of players allowed in a team.\nmax-players-per-team: 4\n\n# The minimum amount of players required to start a match.\nmin-players: 8\n\n# The amount of points required to win the match.\nwin-points: 3\n\n# The two opposite corners of the arena. (Format: world:x:y:z:yaw:pitch)\narena:\n  pos1: urban:45.18659910545357:75.26937512731548:-23.637419056945376:61.245728:13.4217415\n  pos2: urban:-68.06385957460992:17.16326849838637:34.48349152753095:244.38086:3.927539\n\n# The two opposite corners of the center area: where the wool is placed. (Format: world:x:y:z:yaw:pitch)\ncenter:\n  pos1: urban:-16.0:34.0:6.0\n  pos2: urban:-14.0:34.0:8.0\n\n\nteams:\n\n  # The team color. (Available colors: RED-BLUE-GREEN-YELLOW-AQUA-WHITE-PINK-GRAY-DARK_GREEN-PURPLE-ORANGE-DARK_GRAY-DARK_AQUA)\n  RED:\n\n    # The team name.\n    name: Red\n\n    # The spawn location of the team. (Format: world:x:y:z:yaw:pitch)\n    spawn-location: urban:19.726533254889375:35.0:7.535394896518646:90.1001:-0.19494508\n\n    # The two opposite corners of the team's barrier. (Format: world:x:y:z:yaw:pitch)\n    barrier:\n      pos1: urban:15.0:35.0:0.0\n      pos2: urban:15.0:50.0:14.0\n\n    # The two opposite corners of the team's base. (Format: world:x:y:z:yaw:pitch)\n    base:\n      pos1: urban:15.699999988079082:33.0:-1.537473589165458:270.99573:49.02512\n      pos2: urban:36.78390094835717:63.64437466524372:20.455237034269178:120.58618:26.289003\n\n  BLUE:\n    name: Blue\n    spawn-location: urban:-50.28451168147723:35.0:7.540310771710887:269.84784:-1.3192612\n    barrier:\n      pos1: urban:-45.0:51.0:14.0\n      pos2: urban:-45.0:35.0:0.0\n    base:\n      pos1: urban:-69.60219328899193:63.64437466524372:-9.262688721402766:307.1952:10.79843\n      pos2: urban:-44.69999998807907:33.0:16.410240841139277:89.48328:58.644215\n\n  # You aren't limited to 2 teams. You can add as many teams as you want.\t\t  \n\n# The locations of the powerups. (Format: world:x:y:z:yaw:pitch)\t  \npowerups:\n  - urban:-14.69482314273969:32.0:-2.676415134016782:187.81433:90.0\n  - urban:-14.591850157292582:32.0:17.59402242090085:6.083618:86.37721\n  - urban:-41.425202197928876:33.0:25.26048742644185:276.04462:90.0\n  - urban:-41.620314881907355:33.0:-10.559345699435298:187.34906:90.0\n  - urban:12.426240282389438:33.0:-10.539807015025715:277.92224:90.0\n  - urban:12.565456659400164:33.0:25.477387273628626:2.7470703:90.0\n"})})]})}function d(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},9814:(n,e,a)=>{a.d(e,{A:()=>o});const o=a.p+"assets/images/setup-7acb820d464497d868633b44983cad7e.png"},8453:(n,e,a)=>{a.d(e,{R:()=>i,x:()=>s});var o=a(6540);const t={},r=o.createContext(t);function i(n){const e=o.useContext(r);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),o.createElement(r.Provider,{value:e},n.children)}}}]);