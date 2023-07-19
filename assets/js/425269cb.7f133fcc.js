"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[612],{3905:(e,n,t)=>{t.d(n,{Zo:()=>g,kt:()=>f});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),u=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},g=function(e){var n=u(e.components);return i.createElement(c.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},p=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),s=u(t),p=o,f=s["".concat(c,".").concat(p)]||s[p]||d[p]||a;return t?i.createElement(f,r(r({ref:n},g),{},{components:t})):i.createElement(f,r({ref:n},g))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[s]="string"==typeof e?e:o,r[1]=l;for(var u=2;u<a;u++)r[u]=t[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9858:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=t(7462),o=(t(7294),t(3905));const a={},r="Language Config",l={unversionedId:"guilds/configuration/language-config",id:"guilds/configuration/language-config",title:"Language Config",description:"File location",source:"@site/docs/guilds/configuration/language-config.md",sourceDirName:"guilds/configuration",slug:"/guilds/configuration/language-config",permalink:"/guilds/configuration/language-config",draft:!1,editUrl:"https://github.com/PixelStudiosDev/pixelstudiosdev.github.io/edit/master/docs/guilds/configuration/language-config.md",tags:[],version:"current",lastUpdatedAt:1689777153,formattedLastUpdatedAt:"Jul 19, 2023",frontMatter:{},sidebar:"guilds",previous:{title:"Installation",permalink:"/guilds/installation"},next:{title:"Main Config",permalink:"/guilds/configuration/main-config"}},c={},u=[{value:"File location",id:"file-location",level:2},{value:"Editing the file",id:"editing-the-file",level:2}],g={toc:u},s="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(s,(0,i.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"language-config"},"Language Config"),(0,o.kt)("h2",{id:"file-location"},"File location"),(0,o.kt)("p",null,"The language configuration file is located in ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins/Guilds/language.yml"),"."),(0,o.kt)("h2",{id:"editing-the-file"},"Editing the file"),(0,o.kt)("p",null,"Example of a guild command messages in the language file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yml"',title:'"config.yml"'},"#Command name (don't edit)\naccept:\n  #Message in /guild help\n  help: '&e/guild accept - &bAccepts a guild invitation'\n  \n  #Command set in chat on click in /guild help\n  hover-command: /guild accept\n\n  #Message shown in chat on hover in /guild help\n  hover-text: '&bAccepts a guild invitation'\n  \n  #Message sent when command usage is not correct\n  use: '&cUse: /guild accept'\n  \n  #Other messages of the command (depends on the command)\n  click-hover-message: '&eClick to accept!'\n  joined-broadcast:\n    - '&b&m-------------------------------------------------------------'\n    - '&7{player} &ejoined the guild!'\n    - '&b&m-------------------------------------------------------------'\n  joined-player:\n    - '&b&m-------------------------------------------------------------'\n    - '&eYou accepted the invite to &6{guild} &eguild!'\n    - '&b&m-------------------------------------------------------------'\n  not-invited:\n    - '&b&m-------------------------------------------------------------'\n    - '&eYou do not have invitation requests!'\n    - '&b&m-------------------------------------------------------------'\n")))}d.isMDXComponent=!0}}]);