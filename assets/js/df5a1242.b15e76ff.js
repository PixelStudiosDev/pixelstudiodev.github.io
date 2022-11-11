"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[194],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>d});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(a),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return a?t.createElement(f,i(i({ref:n},c),{},{components:a})):t.createElement(f,i({ref:n},c))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9788:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=a(7462),r=(a(7294),a(3905));const o={},i="Creating an Arena",l={unversionedId:"wool-wars/configuration/creating-an-arena",id:"wool-wars/configuration/creating-an-arena",title:"Creating an Arena",description:"Interactive Setup",source:"@site/docs/wool-wars/configuration/creating-an-arena.md",sourceDirName:"wool-wars/configuration",slug:"/wool-wars/configuration/creating-an-arena",permalink:"/wool-wars/configuration/creating-an-arena",draft:!1,editUrl:"https://github.com/cubecrafter/cubecrafter.github.io/edit/master/docs/wool-wars/configuration/creating-an-arena.md",tags:[],version:"current",lastUpdatedAt:1668178991,formattedLastUpdatedAt:"Nov 11, 2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/wool-wars/installation"},next:{title:"Commands and Permissions",permalink:"/wool-wars/commands-and-permissions"}},p={},s=[{value:"Interactive Setup",id:"interactive-setup",level:2},{value:"Manually editing an arena configuration",id:"manually-editing-an-arena-configuration",level:2}],c={toc:s};function u(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"creating-an-arena"},"Creating an Arena"),(0,r.kt)("h2",{id:"interactive-setup"},"Interactive Setup"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the command ",(0,r.kt)("inlineCode",{parentName:"p"},"/woolwars setup <id>")," to start the setup process.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"A GUI will open: ",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(2712).Z,width:"511",height:"268"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Complete all the steps and click the emerald block to save the arena.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You can now join the arena using the command ",(0,r.kt)("inlineCode",{parentName:"p"},"/woolwars join <id>"),"."))),(0,r.kt)("h2",{id:"manually-editing-an-arena-configuration"},"Manually editing an arena configuration"),(0,r.kt)("p",null,"Here you can find an explained version of an arena configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="example.yml"',title:'"example.yml"'},"# The displayed name of the arena\ndisplayname: Urban\n\n# The group of the arena. This is used for the /woolwars join <group> command and for some placeholders.\ngroup: 4v4\n\n# The location of the waiting lobby. (Format: world,x,y,z,yaw,pitch)\nlobby-location: urban,-10.246799445222704,35.0,7.537029879923992,90.62368,-1.4038824\n\n# The maximum amount of players allowed in a team.\nmax-players-per-team: 4\n\n# The minimum amount of players required to start a match.\nmin-players: 8\n\n# The amount of points required to win the match.\nwin-points: 3\n\n# The two opposite corners of the arena. (Format: world,x,y,z,yaw,pitch)\narena:\n  pos1: urban,45.18659910545357,75.26937512731548,-23.637419056945376,61.245728,13.4217415\n  pos2: urban,-68.06385957460992,17.16326849838637,34.48349152753095,244.38086,3.927539\n\n# The two opposite corners of the center area, where the wool is placed. (Format: world,x,y,z,yaw,pitch)\ncenter:\n  pos1: urban,-16.0,34.0,6.0\n  pos2: urban,-14.0,34.0,8.0\n\n\nteams:\n\n  # The team color. (Available colors: RED, BLUE, GREEN, YELLOW, AQUA, WHITE, PINK, GRAY, DARK_GREEN, PURPLE, ORANGE, DARK_GRAY, DARK_AQUA)\n  RED:\n\n    # The team name.\n    name: Red\n\n    # The spawn location of the team. (Format: world,x,y,z,yaw,pitch)\n    spawn-location: urban,19.726533254889375,35.0,7.535394896518646,90.1001,-0.19494508\n\n    # The two opposite corners of the team's barrier. (Format: world,x,y,z,yaw,pitch)\n    barrier:\n      pos1: urban,15.0,35.0,0.0\n      pos2: urban,15.0,50.0,14.0\n\n    # The two opposite corners of the team's base. (Format: world,x,y,z,yaw,pitch)\n    base:\n      pos1: urban,15.699999988079082,33.0,-1.537473589165458,270.99573,49.02512\n      pos2: urban,36.78390094835717,63.64437466524372,20.455237034269178,120.58618,26.289003\n\n  BLUE:\n    name: Blue\n    spawn-location: urban,-50.28451168147723,35.0,7.540310771710887,269.84784,-1.3192612\n    barrier:\n      pos1: urban,-45.0,51.0,14.0\n      pos2: urban,-45.0,35.0,0.0\n    base:\n      pos1: urban,-69.60219328899193,63.64437466524372,-9.262688721402766,307.1952,10.79843\n      pos2: urban,-44.69999998807907,33.0,16.410240841139277,89.48328,58.644215\n\n  # You aren't limited to 2 teams. You can add as many teams as you want.         \n\n# The locations of the powerups. (Format: world,x,y,z,yaw,pitch)      \npowerups:\n- urban,-14.69482314273969,32.0,-2.676415134016782,187.81433,90.0\n- urban,-14.591850157292582,32.0,17.59402242090085,6.083618,86.37721\n- urban,-41.425202197928876,33.0,25.26048742644185,276.04462,90.0\n- urban,-41.620314881907355,33.0,-10.559345699435298,187.34906,90.0\n- urban,12.426240282389438,33.0,-10.539807015025715,277.92224,90.0\n- urban,12.565456659400164,33.0,25.477387273628626,2.7470703,90.0\n")))}u.isMDXComponent=!0},2712:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/setup-7acb820d464497d868633b44983cad7e.png"}}]);