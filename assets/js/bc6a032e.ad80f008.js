"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[717],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=n,v=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?a.createElement(v,i(i({ref:t},c),{},{components:r})):a.createElement(v,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8426:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:7},i="Developer API",l={unversionedId:"wool-wars/developer-api",id:"wool-wars/developer-api",title:"Developer API",description:"Getting started",source:"@site/docs/wool-wars/developer-api.md",sourceDirName:"wool-wars",slug:"/wool-wars/developer-api",permalink:"/wool-wars/developer-api",draft:!1,editUrl:"https://github.com/cubecrafter/cubecrafter.github.io/edit/master/docs/wool-wars/developer-api.md",tags:[],version:"current",lastUpdatedAt:1667581863,formattedLastUpdatedAt:"Nov 4, 2022",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Placeholders",permalink:"/wool-wars/placeholders"}},p={},s=[{value:"Getting started",id:"getting-started",level:2},{value:"Maven",id:"maven",level:3},{value:"Gradle",id:"gradle",level:3},{value:"Usage",id:"usage",level:2},{value:"Events",id:"events",level:3},{value:"Methods",id:"methods",level:3}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"developer-api"},"Developer API"),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("p",null,"Add WoolWars as dependency in your project:"),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Replace ",(0,n.kt)("inlineCode",{parentName:"p"},"Tag")," with the version number. You can find the available versions in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/CubeCrafter/WoolWars/releases/"},"Releases")," page.")),(0,n.kt)("h3",{id:"maven"},"Maven"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<repositories>\n    <repository>\n        <id>jitpack.io</id>\n        <url>https://jitpack.io</url>\n    </repository>\n</repositories>\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.github.CubeCrafter</groupId>\n    <artifactId>WoolWars</artifactId>\n    <version>Tag</version>\n    <scope>provided</scope>\n</dependency>\n")),(0,n.kt)("h3",{id:"gradle"},"Gradle"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-groovy"},"repositories {\n    maven { url 'https://jitpack.io' }\n}\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n    compileOnly 'com.github.CubeCrafter:WoolWars:Tag'\n}\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Remember to add ",(0,n.kt)("inlineCode",{parentName:"p"},"WoolWars")," as depend or softdepend in your ",(0,n.kt)("inlineCode",{parentName:"p"},"plugin.yml")," file.")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("h3",{id:"events"},"Events"),(0,n.kt)("p",null,"Here you can find all the events provided by the plugin: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/CubeCrafter/WoolWars/tree/master/src/main/java/me/cubecrafter/woolwars/api/events"},"Link")),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("p",null,"All the API methods are accessible through the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/CubeCrafter/WoolWars/blob/master/src/main/java/me/cubecrafter/woolwars/api/WoolWarsAPI.java"},"WoolWarsAPI")," class."))}d.isMDXComponent=!0}}]);