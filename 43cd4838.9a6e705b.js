(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(92)),c={id:"core-concepts",title:"Core Concepts"},i={unversionedId:"core-concepts",id:"core-concepts",isDocsHomePage:!1,title:"Core Concepts",description:"This section covers the core concepts found in Synth.",source:"@site/docs/core-concepts.md",slug:"/core-concepts",permalink:"/synth/core-concepts",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/core-concepts.md",version:"current",sidebar:"docsSidebar",previous:{title:"Hello World",permalink:"/synth/hello-world"},next:{title:"Schema",permalink:"/synth/schema"}},s=[{value:"Workspaces",id:"workspaces",children:[]},{value:"Namespaces",id:"namespaces",children:[]},{value:"Collections",id:"collections",children:[]},{value:"Schema",id:"schema",children:[]},{value:"Field References",id:"field-references",children:[]},{value:"Importing Datasets",id:"importing-datasets",children:[]}],l={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This section covers the core concepts found in Synth."),Object(o.b)("h2",{id:"workspaces"},"Workspaces"),Object(o.b)("p",null,"Workspaces are marked by ",Object(o.b)("inlineCode",{parentName:"p"},".synth/")," subdirectory. A workspace represents a set of synthetic data namespaces managed by Synth."),Object(o.b)("p",null,"A workspace can have ",Object(o.b)("em",{parentName:"p"},"zero or more namespaces"),", where the namespaces are just represented as subdirectories (as well as some hidden state in ",Object(o.b)("inlineCode",{parentName:"p"},".synth/")," when using Synth in ",Object(o.b)("inlineCode",{parentName:"p"},"daemon")," mode). All information pertaining to a workspace is in its directory. "),Object(o.b)("p",null,"Below is an example directory structure for a workspace with a single namespace, ",Object(o.b)("inlineCode",{parentName:"p"},"my_namepace"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\u251c\u2500\u2500 .synth\n\u2502\xa0\xa0 \u251c\u2500\u2500 config.toml\n\u2502\xa0\xa0 \u2514\u2500\u2500 db.sqlite\n\u2514\u2500\u2500 my_namespace\n    \u251c\u2500\u2500 my_collection_1.json\n    \u2514\u2500\u2500 my_collection_2.json\n")),Object(o.b)("h2",{id:"namespaces"},"Namespaces"),Object(o.b)("p",null,"The ",Object(o.b)("strong",{parentName:"p"},"namespace")," is the top-level abstraction in Synth. Namespaces are the equivalent of ",Object(o.b)("em",{parentName:"p"},"Schemas")," in SQL-land. Fields in a namespace can refer to other fields in a namespace - but you cannot reference data across namespaces."),Object(o.b)("h2",{id:"collections"},"Collections"),Object(o.b)("p",null,"Every namespace has zero or more ",Object(o.b)("strong",{parentName:"p"},"collections"),". Collections are addressable by their name (for example ",Object(o.b)("inlineCode",{parentName:"p"},"my_collection"),") and correspond to tables in SQL-land. Strictly speaking, Collections are a super-set of tables as they are in fact arbitrarily deep document trees."),Object(o.b)("h2",{id:"schema"},"Schema"),Object(o.b)("p",null,"The schema is the core data structure that you need to understand to be productive with Synth. The schema represents your data model, it tells Synth exactly how to generate data, which fields we need, what types and so on. This is a little involved so there is a section devoted to just the ",Object(o.b)("a",{parentName:"p",href:"/synth/schema"},"Schema")),Object(o.b)("h2",{id:"field-references"},"Field References"),Object(o.b)("p",null,"Field References are a way to reference fields in the Schema. It's pretty intuitive."),Object(o.b)("p",null,"To reference the ",Object(o.b)("inlineCode",{parentName:"p"},"age")," field in ",Object(o.b)("inlineCode",{parentName:"p"},"users")," we simply write ",Object(o.b)("inlineCode",{parentName:"p"},"users.age"),". This can go arbitrarily deep, so we can do ",Object(o.b)("inlineCode",{parentName:"p"},"users.address.postcode")," and we can even go through array variants like this, for example ",Object(o.b)("inlineCode",{parentName:"p"},"users.friends.0"),"."),Object(o.b)("p",null,"Field references can also be used inside a schema to specify things like Foreign Keys (more on this later)."),Object(o.b)("h2",{id:"importing-datasets"},"Importing Datasets"),Object(o.b)("p",null,"Synth can ingest and build data models (aka Synth Schemas) on the fly - assuming it is fed a syntactically correct JSON object."),Object(o.b)("p",null,"You can use the ",Object(o.b)("inlineCode",{parentName:"p"},"synth import")," command to import data into a namespace."),Object(o.b)("p",null,"Not only will Synth automatically ",Object(o.b)("em",{parentName:"p"},"derive")," the Schema for you, inferring the types and topology of the content graph. Synth will also automatically adjust the Schema as new information is ingested. For more on this, refer to the ",Object(o.b)("a",{parentName:"p",href:"/synth/inference"},"inference")," page."))}p.isMDXComponent=!0},92:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,u=d["".concat(c,".").concat(m)]||d[m]||b[m]||o;return n?a.a.createElement(u,i(i({ref:t},l),{},{components:n})):a.a.createElement(u,i({ref:t},l))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);