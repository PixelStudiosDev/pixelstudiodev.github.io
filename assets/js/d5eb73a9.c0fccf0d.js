"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[692],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),f=o,g=m["".concat(s,".").concat(f)]||m[f]||d[f]||r;return t?i.createElement(g,a(a({ref:n},c),{},{components:t})):i.createElement(g,a({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,a=new Array(r);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<r;u++)a[u]=t[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3752:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var i=t(7462),o=(t(7294),t(3905));const r={},a="Menu Config",l={unversionedId:"guilds/configuration/menu-config",id:"guilds/configuration/menu-config",title:"Menu Config",description:"File location",source:"@site/docs/guilds/configuration/menu-config.md",sourceDirName:"guilds/configuration",slug:"/guilds/configuration/menu-config",permalink:"/guilds/configuration/menu-config",draft:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/guilds/configuration/menu-config.md",tags:[],version:"current",lastUpdatedAt:1689777153,formattedLastUpdatedAt:"Jul 19, 2023",frontMatter:{},sidebar:"guilds",previous:{title:"Main Config",permalink:"/guilds/configuration/main-config"},next:{title:"Ranks Config",permalink:"/guilds/configuration/rank-config"}},s={},u=[{value:"File location",id:"file-location",level:2},{value:"Editing the file",id:"editing-the-file",level:2}],c={toc:u},m="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(m,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"menu-config"},"Menu Config"),(0,o.kt)("h2",{id:"file-location"},"File location"),(0,o.kt)("p",null,"The menu configuration file is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins/Guilds/menu.yml"),"."),(0,o.kt)("h2",{id:"editing-the-file"},"Editing the file"),(0,o.kt)("p",null,"Here you can find all the information regarding the configuration of the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="menu.yml"',title:'"menu.yml"'},"# Guilds v1.1.3 made by [itz_leoo].\n# Dependencies: [].\n# SoftDependencies: [BedWars1058, BedWarsProxy, PlaceholderAPI, Vault].\n# Join my discord for support: https://discord.gg/dtwanz4GQg\n\nguilds:\n  \n  #Settings of each menu\n  #name -> Gui name\n  #slot -> Gui slots\n  #(optional) ...-slots -> slot used for variable gui items\n  inventory:\n    home:\n      name: '&8Guild'\n      slot: 45\n      players-slots: 27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,42,43,44\n    home-no-guild:\n      name: '&8Guild'\n      slot: 27\n    gsettings:\n      name: '&8Guild Settings'\n      slot: 36\n      status:\n        'on': '&aON'\n        'off': '&cOFF'\n    tag-color:\n      name: '&8Guild Tag Color'\n      slot: 36\n      tag-slots: 10,11,12,13,14,15,16,19,20,21,22,23,24,25\n    games:\n      name: '&8Select Guild Games'\n      slot: 36\n      game-slots: 10,11,12,13,14,15,16,19,20,21,22,23,24,25,28,29,30,31,32,33,34,35\n    psettings:\n      name: '&8Personal Guild Settings'\n      slot: 36\n    finder:\n      name: '&8Guild Finder'\n      slot: 54\n      guilds-slots: 0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35\n    permissions:\n      name: '&8Permission Menu'\n      slot: 45\n      rank-slots: 10,11,12,13,14,15\n      rank-items: EMERALD-0,DIAMOND-0,GOLD_INGOT-0,IRON_INGOT-0,REDSTONE-0,INK_SACK-3\n    rank:\n      name: '&8Rank Menu'\n      slot: 54\n    rank-delete:\n      name: '&8Delete Rank Menu'\n      slot: 27\n      \n  menu:\n    #Item menu name\n    home:\n      #Example of gui item\n      invite-player:\n        #Gui Slot\n        slot: 0\n        \n        #Item material\n        material: BOOK\n        \n        #Item name\n        name: '&aInvite Player'\n        \n        #Item lore\n        lore:\n          - '&7Click here to invite a player to'\n          - '&7your Guild.'\n            \n        #Item data\n        data: 0\n        \n        #Enchanted: false or true\n        enchanted: false\n        \n        #Command on click:\n        #if \"default-action\" -> default plugin action\n        #else command set\n        command: default-action\n")))}d.isMDXComponent=!0}}]);