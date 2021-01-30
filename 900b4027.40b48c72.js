(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),o=(n(0),n(91)),l={id:"hello-world",title:"Hello World"},c={unversionedId:"hello-world",id:"hello-world",isDocsHomePage:!1,title:"Hello World",description:"Installation",source:"@site/docs/hello-world.md",slug:"/hello-world",permalink:"/hello-world",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/hello-world.md",version:"current",sidebar:"docsSidebar",previous:{title:"Synth",permalink:"/"},next:{title:"Core Concepts",permalink:"/core-concepts"}},i=[{value:"Installation",id:"installation",children:[]},{value:"Hello World",id:"hello-world",children:[]},{value:"Running Synth in Daemon mode",id:"running-synth-in-daemon-mode",children:[]},{value:"Examples",id:"examples",children:[]}],p={toc:i};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"To get started you need the Rust package manager ",Object(o.b)("inlineCode",{parentName:"p"},"cargo"),". If you don't have it, you can install Rust and Cargo using:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n")),Object(o.b)("p",null,"Next, clone the Synth repository:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ git clone https://github.com/openquery-io/synth\n")),Object(o.b)("p",null,"Finally, navigate to the ",Object(o.b)("inlineCode",{parentName:"p"},"synth")," source folder and run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ cd synth && cargo install\n")),Object(o.b)("p",null,"You should then be able to interact with the ",Object(o.b)("inlineCode",{parentName:"p"},"synth")," cli."),Object(o.b)("p",null,"Synth uses the Python ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pypi.org/project/Faker/"}),"Faker")," library to generate different flavours of dummy data. To install Faker, run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ pip3 install Faker\n")),Object(o.b)("h2",{id:"hello-world"},"Hello World"),Object(o.b)("p",null,"After install the Synth cli, the next step is to create a ",Object(o.b)("inlineCode",{parentName:"p"},"workspace"),". To do this create a directory and run ",Object(o.b)("inlineCode",{parentName:"p"},"synth init"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ mkdir my_synth_workspace && cd my_synth_workspace && synth init\n")),Object(o.b)("p",null,"This will create a ",Object(o.b)("inlineCode",{parentName:"p"},".synth")," subdirectory in ",Object(o.b)("inlineCode",{parentName:"p"},"my_synth_workspace"),". Currently, this directory acts as simply an anchor to tell Synth that this is a workspace."),Object(o.b)("p",null,"Next we create a namespace with a dummy collection:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ mkdir my_app \n")),Object(o.b)("p",null,"And then a file, ",Object(o.b)("inlineCode",{parentName:"p"},"my_app/dummy.json")," with the following content:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "type": "array",\n    "length": {\n        "type": "number",\n        "subtype": "u64",\n        "constant": 1\n    },\n   "content": {\n        "type": "string",\n        "pattern": "Hello world!"\n    }\n}\n')),Object(o.b)("p",null,"Finally, run ",Object(o.b)("inlineCode",{parentName:"p"},"synth generate my_app/")," to get a bunch of hello worlds!"),Object(o.b)("h2",{id:"running-synth-in-daemon-mode"},"Running Synth in Daemon mode"),Object(o.b)("p",null,"Synth comes can be run in Daemon mode using the subcommand ",Object(o.b)("inlineCode",{parentName:"p"},"synth-serve"),". "),Object(o.b)("p",null,"Synth exposes an HTTP RESTful API on port ",Object(o.b)("inlineCode",{parentName:"p"},"8182")," and create an internal state which is managed by a vesion controlled index."),Object(o.b)("p",null,"It is preferable to use Daemon mode in the context of a collaborating team and comes with this handy ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://openquery-io.github.io/synthpy/"}),"Python client")),Object(o.b)("p",null,"More information on Daemon mode can be found ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/command-line"}),"here"),". "),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("p",null,"For more complex examples, see the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/examples/bank"}),"examples section"),"."))}b.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),b=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=b(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=b(n),d=a,m=s["".concat(l,".").concat(d)]||s[d]||u[d]||o;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);