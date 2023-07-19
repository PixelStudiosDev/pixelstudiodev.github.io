"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,f=d["".concat(s,".").concat(m)]||d[m]||g[m]||o;return t?r.createElement(f,a(a({ref:n},u),{},{components:t})):r.createElement(f,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7795:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const o={},a="Main Config",l={unversionedId:"guilds/configuration/main-config",id:"guilds/configuration/main-config",title:"Main Config",description:"File location",source:"@site/docs/guilds/configuration/main-config.md",sourceDirName:"guilds/configuration",slug:"/guilds/configuration/main-config",permalink:"/guilds/configuration/main-config",draft:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/guilds/configuration/main-config.md",tags:[],version:"current",lastUpdatedAt:1689777153,formattedLastUpdatedAt:"Jul 19, 2023",frontMatter:{},sidebar:"guilds",previous:{title:"Language Config",permalink:"/guilds/configuration/language-config"},next:{title:"Menu Config",permalink:"/guilds/configuration/menu-config"}},s={},c=[{value:"File location",id:"file-location",level:2},{value:"Editing the file",id:"editing-the-file",level:2}],u={toc:c},d="wrapper";function g(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"main-config"},"Main Config"),(0,i.kt)("h2",{id:"file-location"},"File location"),(0,i.kt)("p",null,"The main configuration file is located in ",(0,i.kt)("inlineCode",{parentName:"p"},"plugins/Guilds/config.yml"),"."),(0,i.kt)("h2",{id:"editing-the-file"},"Editing the file"),(0,i.kt)("p",null,"Here you can find all the information regarding the configuration of the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yml"',title:'"config.yml"'},"# Guilds v1.1.3 made by [itz_leoo].\n# Dependencies: [].\n# SoftDependencies: [BedWars1058, BedWarsProxy, PlaceholderAPI, Vault].\n# Join my discord for support: https://discord.gg/dtwanz4GQg\n\n#database settings\nmysql:\n  #Set to:\n  #false -> SQLite\n  #true -> MySQL\n  enabled: false\n  host: localhost\n  port: 3306\n  name: guilds\n  username: root\n  password: ''\n  ssl: true\n\nguilds:\n  settings:\n    #Bungeecord settings\n    bungeecord:\n      #True if you are running the plugin on multiple servers\n      enabled: false\n      #Refresh rate in seconds of data between servers\n      refresh: 10\n\n    #True for printing in console of the plugin database actions and other things    \n    debug: false\n\n    guild-players:\n      #Max members in a guild\n      max-members: 125\n\n      #Symbol shown in members list message\n      online-offline-symbol: \u25cf\n\n    guild-name:\n      #Max characters allowed in a guild name \n      max-name-length: 10\n\n      #Allow characters in the guild name\n      #By default: alphabet letters, numbers and these chars \u2727 \u272a \u2716 \u2713 \u273f \u270c \u2764\n      #Don't modify it unless you know how it works\n      chars: ^[a-zA-Z0-9\u2727\u272a\u2716\u2713\u273f\u270c\u2764]*$\n\n    guild-tag:\n      #Tag colors of guild tag based on level\n      #Colors: GRAY, DARK_AQUA, DARK_GREEN, YELLOW, ORANGE, DARK_RED, RED, GREEN, AQUA, DARK_BLUE, BLUE, LIGHT_PURPLE, DARK_PURPLE, WHITE, DARK_GRAY, BLACK\n      #Format: minLevel-maxLevel:&colorNumber-colorValue:&colorNumber-colorDisplayName\n      tag:\n        - 0-14:&7-GRAY:&7-Gray\n        - 15-24:&3-DARK_AQUA:&3-Dark Acqua\n        - 25-44:&2-DARK_GREEN:&2-Dark Green\n        - 45-other:&e-YELLOW:&e-Yellow\n\n    guild-level:\n      #Xp requirements based on level\n      #Format: minLevel-maxLevel:xpAmount\n      xp-requirements:\n        - 0-0:10000\n        - 1-1:11000\n        - 2-2:12000\n        - 3-3:13000\n        - 4-4:14000\n        - 5-49:15000\n        - 50-other:20000\n\n      #Command executed on these events\n      #The events are based on the hook plugins\n      kill-reward: guild addxp {guild} 10\n      final-kill-reward: guild addxp {guild} 20\n      bed-destroy-reward: guild addxp {guild} 15\n      win-reward: guild addxp {guild} 200\n\n    boosters:\n      #Probability of playing a game with double xp\n      #Format: minLevel-maxLevel:probability\n      double-xp-start-probability:\n        - 0-1:1\n        - 2-3:2\n        - 4-4:3\n        - 5-6:4\n        - 7-7:5\n        - 8-9:6\n        - 10-10:7\n        - 11-12:8\n        - 13-13:9\n        - 14-15:10\n        - 16-16:12\n        - 17-18:12\n        - 19-19:13\n        - 20-other:14\n        \n    progress-bar:\n      #Bar character\n      char: '|'\n\n      #Bar characters count\n      chars-count: 40\n      \n      #Bar character unlocked color\n      locked-color: '&7'\n\n      #Bar character locked color\n      unlocked-color: '&6'\n      \n    guild-time:\n      #Guild time format\n      #Check https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html\n      format: yyyy-MM-dd HH:mm z\n      \n    guild-invite:\n      #Time of guild invite expire in minutes\n      time-in-minutes: 1\n      \n    guild-party:\n      #Command executed on /guild party command\n      party-command: party invite {player}\n      \n    guild-chat:\n      #Chat cooldown time\n      mute-time: 10\n      \n  permissions:\n    #Permission for creating a guild\n    create: guilds.create\n\n    #Permission for getting access to admin features\n    admin: guilds.admin\n")))}g.isMDXComponent=!0}}]);