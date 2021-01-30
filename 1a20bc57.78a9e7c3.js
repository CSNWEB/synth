(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{67:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var i=t(3),r=t(7),a=(t(0),t(91)),o={id:"command-line",title:"Synth CLI"},c={unversionedId:"command-line",id:"command-line",isDocsHomePage:!1,title:"Synth CLI",description:"The Synth CLI (synth) is a Unix-y command line tool wrapped around the core synthetic data engine.",source:"@site/docs/cli.md",slug:"/command-line",permalink:"/command-line",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/cli.md",version:"current",sidebar:"docsSidebar",previous:{title:"Schema",permalink:"/schema"},next:{title:"How It Works",permalink:"/how-it-works"}},l=[{value:"Usage",id:"usage",children:[{value:"Command: init",id:"command-init",children:[]},{value:"Command: import",id:"command-import",children:[]},{value:"Command: generate",id:"command-generate",children:[]},{value:"Command: serve",id:"command-serve",children:[]}]}],s={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The Synth CLI (",Object(a.b)("inlineCode",{parentName:"p"},"synth"),") is a Unix-y command line tool wrapped around the core synthetic data engine. "),Object(a.b)("h2",{id:"usage"},"Usage"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"command-init"},"Command: init"),Object(a.b)("p",null,"Usage: ",Object(a.b)("inlineCode",{parentName:"p"},"synth init")),Object(a.b)("p",null,"This is the first command that should be run for any new or existing when starting out with Synth.\nThis initialises the workspace and  sets up all the local data necessary to run Synth.\nA ",Object(a.b)("inlineCode",{parentName:"p"},".synth/")," subdirectory is created that is typically not committed to version control."),Object(a.b)("p",null,"This command is always safe to run multiple times though subsequent runs\nmay give errors. This command will never erase your workspace."),Object(a.b)("hr",null),Object(a.b)("h3",{id:"command-import"},"Command: import"),Object(a.b)("p",null,"Usage: ",Object(a.b)("inlineCode",{parentName:"p"},"synth import [OPTIONS] <namespace>")),Object(a.b)("p",null,"Synth can create namespaces from different data sources using the ",Object(a.b)("inlineCode",{parentName:"p"},"synth import")," command.\nAccidentally running ",Object(a.b)("inlineCode",{parentName:"p"},"synth import")," on an existing namespace is safe - the operation will fail."),Object(a.b)("p",null,"If a subdirectory for a given namespace does not exist in your workspace, Synth will create it."),Object(a.b)("h4",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"--from <from>")," - The location from which to import. Synth supports multiple import strategies.\nImporting directly from a database will be supported in future versions."),Object(a.b)("p",{parentName:"li"},"Importing from a file: Currently we support importing from JSON files by specifying the path to\nthe file: ",Object(a.b)("inlineCode",{parentName:"p"},"/some/path/to/file.json"),"."),Object(a.b)("p",{parentName:"li"},"Importing from standard input: Not specifying ",Object(a.b)("inlineCode",{parentName:"p"},"from")," will accept JSON files from stdin."))),Object(a.b)("hr",null),Object(a.b)("h3",{id:"command-generate"},"Command: generate"),Object(a.b)("p",null,"Usage: ",Object(a.b)("inlineCode",{parentName:"p"},"synth generate [OPTIONS] <namespace>")),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"synth generate")," command will generate data for a given namespace. This will not mutate anything in the underlying configuration."),Object(a.b)("p",null,"If there is a misconfiguration in your schema (for example referring to a field that does not exist), ",Object(a.b)("inlineCode",{parentName:"p"},"synth generate")," will exit with a non-zero exit code and hopefully some error message helping you understand which part of the schema is misconfigured."),Object(a.b)("h4",{id:"options-1"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--collection <collection>")," - Specify a specific collection in a namespace if you don't want to generate data from all collections.  "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"--size <size>")," - The number of elements which should be generated per collection. This number is not guaranteed, it serves as a lower bound.")),Object(a.b)("hr",null),Object(a.b)("h3",{id:"command-serve"},"Command: serve"),Object(a.b)("p",null,"Usage: ",Object(a.b)("inlineCode",{parentName:"p"},"synth serve [OPTIONS]")),Object(a.b)("p",null,"Run Synth in Daemon mode. The Daemon exposes an HTTP RESTful API on port ",Object(a.b)("inlineCode",{parentName:"p"},"8182")," and creates an internal state which is managed by a version controlled index."),Object(a.b)("p",null,"Daemon mode is used when ",Object(a.b)("inlineCode",{parentName:"p"},"synth")," is used in the context of a collaborating team and comes with a very handy ",Object(a.b)("a",Object(i.a)({parentName:"p"},{href:"https://openquery-io.github.io/synthpy/"}),"Python client")),Object(a.b)("h4",{id:"options-2"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-b, --bind <bind> [default: 0.0.0.0:8182]")," - The endpoint on which the HTTP server should be exposed.  "),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-d, --data-directory <data-directory> [default: <workspace>/.synth/]")," - The directory which should host the index. (Default is fine in the context of a workspace)")))}p.isMDXComponent=!0},91:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return u}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),p=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=p(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},b=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),b=i,u=m["".concat(o,".").concat(b)]||m[b]||d[b]||a;return t?r.a.createElement(u,c(c({ref:n},s),{},{components:t})):r.a.createElement(u,c({ref:n},s))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=b;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);