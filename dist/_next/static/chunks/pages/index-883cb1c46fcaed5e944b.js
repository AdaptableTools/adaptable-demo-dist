_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[144],{"/EDR":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),o=t.n(l),n=t("kiQV"),r=t("ml0Y"),s=o.a.createElement,i=n.version,d=(new Date).toISOString().slice(0,10);a.default=function(){return s(r.a,{pageTitle:"AdapTable Demos"},s("div",null,s("i",null,"Version:\xa0",i,"\xa0\xa0(",d,")"),s("br",null),s("p",null,s("h2",null,s("div",{style:{color:"red"}},"This demo site uses a pre-release version of"," ",s("a",{href:"https://docs.adaptabletools.com/docs/releases/version9/upgrade-guide-v9/",target:"_blank"},"Version 9")," ","of AdapTable")),s("h3",null,"AdapTable is the most advanced and powerful HTML5 Data Management Solution available today"),s("div",{style:{background:"lightgray",padding:"20px",margin:"10px"}},s("h3",null,s("a",{href:"https://us02web.zoom.us/webinar/register/6916219135348/WN_f6SCDosmSvOk5ent3_wBEQ",target:"_blank"},"Register today")," ","for the AdapTable / OpenFin Webinar which will showcase the many integrations between these 2 leading products")),s("b",null,"AdapTable provides all the functionality users need to manage data.")," ",s("br",null),"AdapTable allows users to control data easily, helping them to be productive and efficient, while replacing risk-laden, expensive, time-consuming and unique builds. ",s("br",null),"AdapTable sits on top of a number of HTML5 DataGrids, both vendor and open source, with which it integrates, allowing you to make the choices in underlying technologies that work for you.",s("br",null),"AdapTable is fully data-agnostic and can work with any data set, for any desk, in any team, in any organisation, in any location."),s("p",null,s("b",null,"The Demos")," ",s("br",null),"There is a very large number of"," ",s("a",{href:"/AdaptableDemoList",target:"_self"},"demos")," ","on this site, allowing you to look at whatever aspects of AdapTable most excite you. Each demo seeks to do one of four things:",s("ul",null,s("li",null,"Demonstrate how an AdapTable Module operates; these are sorted by type (e.g. Search, Edit etc.)"),s("li",null,"Show key UI elements (e.g. Dashboard, Tool Panel, Context and Column Menus etc.)"),s("li",null,"Illustrate some of the AdapTable Options on offer."),s("li",null,"Show-case key admin elements like Audit Log, Big Data, the AdapTable Api etc.")),"Each demo provides, below the grid, all the code that was used. This typically includes some Predefined Config and non-default"," ",s("i",null,"AdaptableOptions")," properties that were required for that specific example.",s("br",null),"The demos use the excellent, market-leading"," ",s("a",{href:"https://www.ag-grid.com/",target:"_blank"},"ag-Grid")," ","as the underlying DataGrid (which"," ",s("a",{href:"https://medium.com/ag-grid/getting-more-from-your-datagrid-introducing-adaptable-blotter-2be5debd7e46",target:"_blank"},"integrates very well")," ","with AdapTable), and dummy data from the Microsoft Northwind database (Orders table). ",s("br",null)),s("p",null,s("b",null,"Recently Added Demos")," ",s("br",null),"We continually add new demos to this site as we add additional features or in response to user queries. Demos added in the last few weeks include:",s("ul",null,s("li",null,s("a",{href:"./adaptablestate/adaptablestatekeyusage"},"Multiple Views")," ","- create different sets of Adaptable State and toggle between them")," ",s("li",null,s("a",{href:"./style/aggridgradientcolumndemo"},"Gradient Column")," - show column values as Gradients"),s("li",null,s("a",{href:"./edit/aggridservervalidationdemo"},"Server Validation")," ","- perform essential validation externally"),s("li",null,s("a",{href:"./menus/aggridcolumnmenudemo"},"Column Menu")," and"," ",s("a",{href:"./menus/aggridcontextmenudemo"},"Context Menu")," - add your own bespoke menu items."),s("li",null,s("a",{href:"./aggridfeatures/aggridtreegriddemo"},"Tree Data View")," - use AdapTable with data that has a natural tree structure."))),s("p",null,s("b",null,"Modules")," ",s("br",null),"AdapTable contains a large number of ",s("b",null,"Modules")," (e.g. Conditional Style, Bulk Update, Pie Chart etc). ",s("br",null),"Each Module has its own 'popup screen' and many also have their own toolbars or tool panels for easy access.",s("br",null),"All Modules are available to all users (depending on the"," ",s("a",{href:"./entitlements",target:"_blank"},s("b",null,"entitlements"))," ","you set). The combination of a selection from these Modules is what drives client problem solving.",s("br",null),"We can work with you to establish how the function set can help resolve your issues, creating the fastest, most easy to use applications delivering productivity and profit enhancements."),s("p",null,s("b",null,"Key Concepts")," ",s("br",null),"AdapTable offers full functionality out of the box, and can be up and running within your application within moments of being downloaded, using just a few lines of code. ",s("br",null),"When you release an application using AdapTable you will typically ship it with"," ",s("a",{href:"https://docs.adaptabletools.com/docs/predefined-config/predefined-config-overview",target:"_blank"},s("b",null,"Predefined Config"))," ","- objects that you have created at design time (eg. searches, layouts, styles, reports etc.) that you would like to be available when it first loads. ",s("br",null),"You set this Predefined Config as a property of"," ",s("a",{href:"https://docs.adaptabletools.com/docs/adaptable-options/adaptable-options-overview",target:"_blank"},s("b",null,"Adaptable Options"))," ","- the object that allows you set up AdapTable to meet your precise requirements. ",s("br",null),"AdaptableOptions is the only property required by AdapTable's constructor which returns the"," ",s("a",{href:"https://docs.adaptabletools.com/docs/adaptable-api/adaptable-api-overview",target:"_blank"},s("b",null,"Adaptable Api"))," ","giving you full run-time, code access to all AdapTable functionality and state. ",s("br",null),"Reads more at the"," ",s("a",{href:"https://docs.adaptabletools.com/docs/",target:"_blank"},s("b",null,"Getting Started Guide"))," "),s("p",null,s("b",null,"Installation and Integration"),s("br",null),"AdapTable is distributed via a"," ",s("a",{href:"https://registry.adaptabletools.com",target:"_blank"},"private npm registry"),".",s("br",null),"It is straightforward to set up AdapTable and can be done with very little code.",s("br",null),"See the"," ",s("a",{href:"https://docs.adaptabletools.com/docs/",target:"_blank"},"Gettting Start")," ","section of the documentation for more information on installation and integration, or take a look at"," ",s("a",{href:"./gettingstarted/aggridbasicsetupdemo",target:"_blank"},"the Basic Set Up demo"),".",s("br",null)),s("p",null,s("b",null,"Framework Wrappers"),s("br",null),"All the examples in this demo use the 'vanilla' JavaScript version of AdapTable.",s("br",null),"However, for those who prefer to implement the tool using a JavaScript Framework / Library we (currently) provide 2 options:",s("ul",null,s("li",null,s("a",{href:"https://docs.adaptabletools.com/docs/react-wrapper/react-wrapper-overview",target:"_blank"},"React Wrapper")),s("li",null,s("a",{href:"https://docs.adaptabletools.com/docs/angular-wrapper/angular-wrapper-overview",target:"_blank"},"Angular Wrapper")))),s("p",null,s("b",null,"Help"),s("br",null),"For more in depth information please visit the"," ",s("a",{href:"http://docs.adaptabletools.com",target:"_blank"},"developer documentation site"),"."),s("p",null,s("b",null,"Adaptable Tools"),s("br",null),"To learn more about Adaptable Tools and the other 'Adaptable' products we aim to bring to the market soon, please visit our"," ",s("a",{href:"http://adaptabletools.com",target:"_blank"},"website"),"."),s("p",null,s("b",null,"AdapTable Version"),s("br",null),"The demos on this site use ",s("b",null,"Version 8 of AdapTable"),". ",s("br",null),"See"," ",s("a",{href:"https://docs.adaptabletools.com/docs/releases/version8/upgrade-guide-v8",target:"_blank"},"Upgrade Guide")," ","for more details ."),s("p",null,s("b",null,"Custom Examples (on Github)"),s("br",null),"We have produced some custom examples to fit particular use cases that our users have requested. These include:"),s("ul",null,s("li",null,s("a",{href:"https://github.com/AdaptableTools/example-adaptable-angular-aggrid/tree/angular-10",target:"_blank"},"Using the Angular Wrapper (version 10)")," "),s("li",null,s("a",{href:"https://github.com/AdaptableTools/example-adaptable-angular-aggrid/tree/master",target:"_blank"},"Using the Angular Wrapper (version 9)")," "),s("li",null,s("a",{href:"https://github.com/AdaptableTools/example-adaptable-react-aggrid",target:"_blank"},"Using the React Wrapper")," "),s("li",null,s("a",{href:"https://github.com/AdaptableTools/example-adaptable-ipushpull-integration",target:"_blank"},"Integration with ipushpull")," "),s("li",null,s("a",{href:"https://github.com/AdaptableTools/openfin-demo",target:"_blank"},"Integration with OpenFin")," "),s("li",null,s("a",{href:"https://github.com/AdaptableTools/example-adaptable-nocode-aggrid",target:"_blank"},"No Code Version Example")," "),s("li",null,s("a",{href:"https://github.com/AdaptableTools/example-adaptableblotter-with-parceljs",target:"_blank"},"Using ParcelJS to build a minified file")," ")),s("p",null,s("b",null,"Licence and Pricing"),s("br",null),"AdapTable requires a commercial licence sold on an annual basis. This includes guaranteed quarterly (often monthly) updates together with full ongoing support.",s("br",null),"We provide a range of licence options to suit each use case, including: ",s("b",null,"End User"),", ",s("b",null,"Team"),", ",s("b",null,"Universal"),","," ",s("b",null,"Developer")," and ",s("b",null,"Trial"),".",s("br",null),s("b",null,"AdapTable licence does not include the underlying grid's licence, so if you plan to use AdapTable with a Grid that requires a commercial licence, you must pay for that separately."),s("br",null),"To find out more about various options on offer and how to join the AdapTable community, please"," ",s("a",{href:"mailto:sales@adaptabletools.com"},"email Adaptable Tools Sales"),"."),s("p",null,s("b",null,"Grid Gurus"),s("br",null),"To develop AdapTable, the Adaptable Tools Development Team learned everything there is to know (and more!) about all the DataGrids that we support, including the hugely popular ag-Grid.",s("br",null),"We researched multiple set up and configuration options, the different ways to get data into the grid, the various display modes, when and whether to use server or client, when to group, aggregate or pivot, how best to update data and much more.",s("br",null),"Through our"," ",s("b",null,s("i",null,"Grid Gurus' Service"))," ","you can deploy that unrivalled knowledge alongside your own team to help shape DataGrid projects and ensure that they meet your requirements as cost and time-effectively as possible. Adaptable Tools\u2019 Grid Gurus can work on-site or off-site to set up your Grid in a bespoke fashion so that it has optimal alignment to your use cases.",s("br",null),"This is particularly important at the start of the project when making the right architectural and design decisions can save money, time and support heartache down the line...",s("br",null),"See some of the general DataGrid-related questions we have received"," ",s("a",{href:"./gridgurus/asktheexperts"},"here"),"."),s("p",null,s("b",null,"Contibuting to our Source Code"),s("br",null),"We welcome - and value - the many contributions and pull requests we receive from the development community; if you want to get involved in the project please contact email"," ",s("a",{href:"mailto:support@adaptabletools.com"},"Adaptable Tools Support"))))}},kiQV:function(e){e.exports=JSON.parse('{"name":"adaptable-demo","version":"9.0.0-canary.9","description":"AdapTable Demo","main":"index.js","dependencies":{"@adaptabletools/adaptable":"9.0.0-canary.9","@adaptabletools/adaptable-plugin-charts":"9.0.0-canary.9","@adaptabletools/adaptable-plugin-finance":"9.0.0-canary.9","@adaptabletools/adaptable-plugin-finsemble":"9.0.0-canary.9","@adaptabletools/adaptable-plugin-glue42":"9.0.0-canary.9","@adaptabletools/adaptable-plugin-ipushpull":"9.0.0-canary.9","@adaptabletools/adaptable-plugin-openfin":"9.0.0-canary.9","@adaptabletools/adaptable-plugin-master-detail-aggrid":"9.0.0-canary.9","@adaptabletools/adaptable-plugin-nocode-aggrid":"9.0.0-canary.9","@ag-grid-community/all-modules":"25.0.1","@ag-grid-community/react":"25.0.1","@ag-grid-enterprise/all-modules":"25.0.1","@trendmicro/react-sidenav":"^0.4.5","@types/isomorphic-fetch":"0.0.35","@types/lodash":"^4.14.149","@types/react-redux":"^7.1.6","@zeit/next-typescript":"^1.1.1","babel-plugin-macros":"^2.8.0","moment":"2.24.0","moment-timezone":"0.5.28","mousetrap":"^1.6.5","convert-excel-to-json":"^1.6.1","copy-to-clipboard":"^3.2.0","firebase":"^7.10.0","ipushpull-js":"2.18.12","@glue42/desktop":"^4.6.3","@glue42/office":"^1.6.8","isomorphic-fetch":"^2.2.1","latest":"^0.2.0","normalize.css":"^8.0.1","prop-types":"^15.7.2","raw.macro":"^0.3.0","react":"^16.12.0","react-dom":"^16.12.0","uuid":"^7.0.2","date-fns":"2.16.1","lodash-es":"^4.17.15"},"devDependencies":{"@types/react":"^16.9.17","@types/react-dom":"^16.9.5","@types/mousetrap":"^1.6.3","@types/lodash":"^4.14.149","@zeit/next-css":"^1.0.1","@zeit/next-sass":"^1.0.1","dotenv-webpack":"^1.7.0","husky":">=1","lint-staged":">=8","next":"^9.4.0","next-compose-plugins":"^2.2.0","next-fonts":"^1.0.3","next-images":"^1.3.0","node-sass":"^4.12.0","prettier":"^1.19.1","redux":"^4.0.5","svg-url-loader":"^5.0.0","typescript":"^3.4.5","webpack":"^4.41.5"},"husky":{"hooks":{"pre-commit":"lint-staged"}},"lint-staged":{"**/*.{js,jsx,ts,tsx,json,css,scss}":["prettier --write","git add"]},"scripts":{"tsc":"node --max-old-space-size=4096 ./node_modules/.bin/tsc","pretty":"prettier --write \\"**/*.{js,jsx,ts,tsx,json,css,scss}\\"","buildDataSets":"node buildJsonDataset.js","openfin":"openfin -l -c app-dev.json","dev":"next","next":"next","build":"NODE_OPTIONS=\'--max-old-space-size=4096\' next build && NODE_OPTIONS=\'--max-old-space-size=4096\' next export -o dist && cp _headers dist && cp app-demo.json dist && cp -R ExtLibs dist && cp _redirects dist"},"repository":{"type":"git","url":"git+https://github.com/jonnyadaptabletools/adaptableblotter-demo.git"},"author":"","license":"ISC","bugs":{"url":"https://github.com/jonnyadaptabletools/adaptableblotter-demo/issues"},"homepage":"https://github.com/jonnyadaptabletools/adaptableblotter-demo#readme"}')}},[["/EDR",2,0,3,4,1]]]);