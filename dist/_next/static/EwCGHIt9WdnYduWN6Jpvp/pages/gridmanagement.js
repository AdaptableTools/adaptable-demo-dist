(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{ApYb:function(e,n,t){"use strict";var r=t("q1tI"),a=t.n(r),i=t("YFqc"),o=t.n(i),c=a.a.createElement;n.a=function(e){var n=e.href,t=e.children;return c(o.a,{href:n},c("a",null,c("div",{className:"demo-box"},c("img",{src:"/images/Adaptable.png",style:{maxWidth:"80%",marginBottom:"5%"}}),c("div",null,t))))}},"OO/l":function(e,n,t){"use strict";var r=t("wx14"),a=t("rePB"),i=t("Ff2n"),o=t("q1tI"),c=t.n(o).a.createElement;function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}n.a=function(e){var n=e.children,t=Object(i.a)(e,["children"]),a=t.minBoxWidth||220;return c("div",Object(r.a)({},t,{style:l({display:"grid",padding:20,gridGap:20,gridTemplateColumns:"repeat(auto-fit, minmax(".concat(a,"px, 1fr))")},t.style)}),n)}},XcWe:function(e,n,t){"use strict";t.r(n);var r=t("q1tI"),a=t.n(r),i=t("ml0Y"),o=(t("hREP"),t("OO/l")),c=t("mN+X"),u=t("ApYb"),l=a.a.createElement;n.default=function(){var e=Object(c.a)().Categories.find((function(e){return"Grid Management"==e.CategoryName})).Pages,n=e.map((function(e){return l("li",null,l("b",null,e.Name,": ")," ",e.Description)})),t=e.map((function(e){var n=e.Name+" Demo";return l(u.a,{key:e.Name,href:e.Link},n)}));return l(i.a,{pageTitle:"Grid Management demos",description:l("div",null,l("h4",null,"Grid Management Functions"),l("p",null,"There are a many functions in AdapTable which let you set up the Grid and columns exactly how you want:"),l("ul",null,n),"Click on the buttons below to see a demo for our Grid Management functions.")},l(o.a,null,t))}},Zrpa:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gridmanagement",function(){return t("XcWe")}])},rePB:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.d(n,"a",(function(){return r}))}},[["Zrpa",2,0,3,4,1]]]);