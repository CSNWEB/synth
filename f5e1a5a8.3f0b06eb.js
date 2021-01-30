(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{88:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var a=t(3),r=t(7),o=(t(0),t(91)),c={id:"same-as",title:"same_as"},i={unversionedId:"content/same-as",id:"content/same-as",isDocsHomePage:!1,title:"same_as",description:"Content Family: SameAs",source:"@site/docs/content/same-as.md",slug:"/content/same-as",permalink:"/content/same-as",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/content/same-as.md",version:"current",sidebar:"docsSidebar",previous:{title:"one_of",permalink:"/content/one-of"}},l=[{value:"Content Family: SameAs",id:"content-family-sameas",children:[]}],s={toc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"content-family-sameas"},"Content Family: SameAs"),Object(o.b)("h4",{id:"content-sameas"},"Content: SameAs"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"SameAs")," content let's the value of one field follow the value of another field in the Schema."),Object(o.b)("p",null,"It can be used to specify datasets with foreign keys. It can also be used (in rarer cases) to create data which is semantically duplicated like in the example below."),Object(o.b)("h6",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"field_a": {\n    "range": {\n        "high": 10,\n        "low": 0,\n        "step": 1\n    },\n    "subtype": "u64",\n    "type": "number"\n},\n"follow_a": {\n    "type": "same_as",\n    "ref": "transactions.content.field_a"\n}\n')),Object(o.b)("h6",{id:"example-output"},"Example Output"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'[\n    {\n      "field_a": 5,\n      "follow_a": 5\n    },\n    {\n      "field_a": 8,\n      "follow_a": 8\n    },\n    {\n      "field_a": 4,\n      "follow_a": 4\n    },\n    {\n      "field_a": 4,\n      "follow_a": 4\n    },\n    {\n      "field_a": 3,\n      "follow_a": 3\n    }\n  ]\n\n')))}u.isMDXComponent=!0},91:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,b=p["".concat(c,".").concat(m)]||p[m]||f[m]||o;return t?r.a.createElement(b,i(i({ref:n},s),{},{components:t})):r.a.createElement(b,i({ref:n},s))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=t[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);