(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[195],{"345+":function(e,n,a){"use strict";a.r(n);var t,r=a("q1tI"),o=a("o0o1"),i=a.n(o),l=a("HaE+"),d=(a("nX5y"),a("ThKj")),u=a("rePB"),s=(a("PMha"),a("cUqQ"),a("5TJ6"),a("jWP/"),a("iMsr"),a("mbJ9")),p=a.n(s),c=a("mXS1");function g(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function f(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?g(Object(a),!0).forEach((function(n){Object(u.a)(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var m={Dashboard:{Tabs:[{Name:"Demo",Toolbars:["Layou","Export"]}]},ConditionalStyle:{ConditionalStyles:[{Scope:{All:!0},Expression:'[counterparty] IN ("Rabobank", "Nomura", "MUFJ", "RBS")',Style:{BackColor:"LightYellow"}}]},Layout:{CurrentLayout:"Data Source",Layouts:[{Columns:["tradeId","notional","country","counterparty","changeOnYear","price","currency","ask","bidOfferSpread","bid","sandpRating","deskId","bloombergAsk","lastUpdated","lastUpdatedBy"],ColumnSorts:[{ColumnId:"country",SortOrder:"Asc"},{ColumnId:"tradeId",SortOrder:"Desc"}],Name:"Data Source"}]},FlashingCell:{FlashingCells:[{ColumnId:"bid",DownColor:"#FF0000",FlashingCellDuration:500,IsLive:!0,UpColor:"#008000"},{ColumnId:"ask",DownColor:"#FF0000",FlashingCellDuration:500,IsLive:!0,UpColor:"#008000"},{ColumnId:"price",DownColor:"#FF0000",FlashingCellDuration:500,IsLive:!0,UpColor:"#008000"}]}},b=function(){var e=Object(l.a)(i.a.mark((function e(n,a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={primaryKey:"tradeId",userName:"Demo User",adaptableId:"Performance Demo",predefinedConfig:m,vendorGrid:f(f({},{columnDefs:n,rowData:a,enableRangeSelection:!0,sideBar:!0,suppressMenuHide:!0,statusBar:{statusPanels:[{statusPanel:"agTotalRowCountComponent",align:"left"},{statusPanel:"agFilteredRowCountComponent"}]},columnTypes:{abColDefNumber:{},abColDefString:{},abColDefBoolean:{},abColDefDate:{},abColDefObject:{},abColDefNumberArray:{}}}),{},{modules:c.a})},e.next=4,p.a.init(r);case 4:return t=e.sent,e.abrupt("return",{adaptableOptions:r,adaptableApi:t});case 6:case"end":return e.stop()}}),e)})));return function(n,a){return e.apply(this,arguments)}}(),D=a("6OHV"),v=Object(l.a)(i.a.mark((function e(){var n,a,t,r,o,l,u,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new d.a).setUpAgGridLicence(),a=new D.a,t=n.getTradeSchema(),r=2e4,o=n.getTrades(r),e.next=8,b(t,o);case 8:return l=e.sent,u=l.adaptableOptions,(s=l.adaptableApi).eventApi.on("AdaptableReady",(function(){a.startTickingDataagGridTradeBatchAddDeleteUpdate(s,u.vendorGrid,n,10,r,50,100)})),u.vendorGrid.onGridReady=function(e){e.columnApi.autoSizeAllColumns(),setTimeout((function(){return e.columnApi.autoSizeAllColumns()}),1),e.api.addEventListener("newColumnsLoaded",(function(){e.columnApi.autoSizeAllColumns()})),e.api.closeToolPanel()},e.abrupt("return",{unload:function(){a.turnOffTicking()},code:"import '@adaptabletools/adaptable/index.css';\nimport '@adaptabletools/adaptable/themes/dark.css';\nimport '@ag-grid-community/all-modules/dist/styles/ag-grid.css';\nimport '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';\nimport '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';\nimport Adaptable from '@adaptabletools/adaptable/agGrid';\nimport { GridOptions } from '@ag-grid-community/all-modules';\nimport {\n  AdaptableOptions,\n  PredefinedConfig,\n  AdaptableApi,\n} from '@adaptabletools/adaptable/types';\nimport { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';\nimport DemoBox from '../../../components/DemoBox';\n\nvar adaptableApi: AdaptableApi;\n\nconst demoConfig: PredefinedConfig = {\n  Dashboard: {\n    Tabs: [\n      {\n        Name: 'Demo',\n        Toolbars: ['Layou', 'Export'],\n      },\n    ],\n  },\n  ConditionalStyle: {\n    ConditionalStyles: [\n      {\n        Scope: {\n          All: true,\n        },\n        Expression: '[counterparty] IN (\"Rabobank\", \"Nomura\", \"MUFJ\", \"RBS\")',\n        Style: {\n          BackColor: 'LightYellow',\n        },\n      },\n    ],\n  },\n  Layout: {\n    CurrentLayout: 'Data Source',\n    Layouts: [\n      {\n        Columns: [\n          'tradeId',\n          'notional',\n          'country',\n          'counterparty',\n          'changeOnYear',\n          'price',\n          'currency',\n          'ask',\n          'bidOfferSpread',\n          'bid',\n          'sandpRating',\n          'deskId',\n          'bloombergAsk',\n          'lastUpdated',\n          'lastUpdatedBy',\n        ],\n        ColumnSorts: [\n          { ColumnId: 'country', SortOrder: 'Asc' },\n          { ColumnId: 'tradeId', SortOrder: 'Desc' },\n        ],\n        Name: 'Data Source',\n      },\n    ],\n  },\n  FlashingCell: {\n    FlashingCells: [\n      {\n        ColumnId: 'bid',\n        DownColor: '#FF0000',\n        FlashingCellDuration: 500,\n        IsLive: true,\n        UpColor: '#008000',\n      },\n      {\n        ColumnId: 'ask',\n        DownColor: '#FF0000',\n        FlashingCellDuration: 500,\n        IsLive: true,\n        UpColor: '#008000',\n      },\n      {\n        ColumnId: 'price',\n        DownColor: '#FF0000',\n        FlashingCellDuration: 500,\n        IsLive: true,\n        UpColor: '#008000',\n      },\n    ],\n  },\n} as PredefinedConfig;\n\nexport default async (columnDefs: any[], rowData: any[]) => {\n  const gridOptions: GridOptions = {\n    columnDefs,\n    rowData,\n    enableRangeSelection: true,\n    sideBar: true,\n    suppressMenuHide: true,\n    statusBar: {\n      statusPanels: [\n        { statusPanel: 'agTotalRowCountComponent', align: 'left' },\n        { statusPanel: 'agFilteredRowCountComponent' },\n      ],\n    },\n    columnTypes: {\n      abColDefNumber: {},\n      abColDefString: {},\n      abColDefBoolean: {},\n      abColDefDate: {},\n      abColDefObject: {},\n      abColDefNumberArray: {},\n    },\n  };\n\n  const adaptableOptions: AdaptableOptions = {\n    primaryKey: 'tradeId',\n    userName: 'Demo User',\n    adaptableId: 'Performance Demo',\n    predefinedConfig: demoConfig,\n    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },\n  };\n  adaptableApi = await Adaptable.init(adaptableOptions);\n\n  return { adaptableOptions, adaptableApi };\n};\n"});case 14:case"end":return e.stop()}}),e)})));n.default=function(e){return Object(r.useEffect)((function(){v().then((function(n){e.onReady&&e.onReady(n)}))}),[]),null}},"6OHV":function(e,n,a){"use strict";a.d(n,"a",(function(){return u}));var t=a("1OyB"),r=a("vuIU"),o=a("rePB"),i=a("ThKj");function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function d(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){Object(o.a)(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}var u=function(){function e(){Object(t.a)(this,e),Object(o.a)(this,"isTicking",!1)}return Object(r.a)(e,[{key:"testTickingDataagGrid",value:function(e,n,a,t){var r=this;if(null!=e&&null!=e.api){var o=new i.a;this.isTicking=!0,setInterval((function(){if(r.isTicking){var n=r.generateRandomInt(1,t),a=e.api.getRowNode(n),i=d({},e.rowData[n]),l=r.generateRandomInt(1,2),u=1==l?-.5:.5,s=1==l?-.01:.01,p=r.roundTo4Dp(i.price+u),c=i.bidOfferSpread,g=r.roundTo4Dp(p+c/2),f=r.roundTo4Dp(p-c/2),m=r.roundTo4Dp(g+s),b=r.roundTo4Dp(f-s),D=r.getRandomItem(o.getNotionals()),v=o.getMeaningfulDouble();false,a.setDataValue("price",p),a.setDataValue("bid",f),a.setDataValue("ask",g),a.setDataValue("bloombergAsk",m),a.setDataValue("bloombergBid",b),a.setDataValue("notional",D),a.setDataValue("changeOnYear",v),a.setDataValue("price",p),a.setDataValue("price",p)}}),a)}}},{key:"startTickingDataagGridOrders",value:function(e,n,a,t,r){var o=this,i=arguments.length>5&&void 0!==arguments[5]&&arguments[5];null!=e&&null!=e.api&&(this.isTicking=!0,setInterval((function(){if(o.isTicking){var a=o.generateRandomInt(t,r),l=e.api.getRowNode(a);if(l){var u=d({},l.data);if(u){if(i){var s=o.generateRandomInt(1,10),p=e.api.getValue("ItemCount",l);u.ItemCount=s<8?p+1:3*p}else{var c=1==o.generateRandomInt(1,2)?-.5:.5,g=e.api.getValue("ItemCost",l),f=o.roundTo4Dp(g+c);u.ItemCost=f;var m=e.api.getValue("ItemCount",l)*f;u.OrderCost=m;var b=m-e.api.getValue("PackageCost",l);u.InvoicedCost=b;var D=1==o.generateRandomInt(1,2)?-1:1,v=e.api.getValue("ChangeLastOrder",l);u.ChangeLastOrder=D+v,u.ItemCount=o.generateRandomInt(1,2e3)}n.gridApi.updateGridData([u])}}}}),a))}},{key:"startTickingDataagGridPivot",value:function(e,n,a){var t=this;null!=e&&null!=e.api&&(this.isTicking=!0,setInterval((function(){if(t.isTicking){var a=[10982,10949,10810,10620,10339][t.generateRandomInt(0,4)],r=e.api.getRowNode(a);if(r){var o=d({},r.data);if(o){var i=e.api.getValue("InvoicedCost",r);o.InvoicedCost=i+5,n.gridApi.updateGridData([o])}}}}),a))}},{key:"startTickingDataagGridTradesUpdateData",value:function(e,n,a,t){var r=this,o=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(null!=e&&null!=e.api){var l=new i.a;this.isTicking=!0,setInterval((function(){if(r.isTicking){var a,i=r.generateRandomInt(1,t),u=null===(a=e.api)||void 0===a?void 0:a.getRowNode(String(i));if(!u)return;var s=d({},u.data);if(o){var p=r.generateRandomInt(1,2),c=1==p?-.5:.5,g=1==p?-.01:.01,f=r.roundTo4Dp(s.price+c),m=s.bidOfferSpread,b=r.roundTo4Dp(f+m/2),D=r.roundTo4Dp(f-m/2);s.price=f,s.bid=D,s.ask=b,s.bloombergAsk=r.roundTo4Dp(b+g),s.bloombergBid=r.roundTo4Dp(D-g),s.notional=r.getRandomItem(l.getNotionals()),s.changeOnYear=l.getMeaningfulDouble()}else{var v=r.generateRandomInt(1,3);1==v?s.price=s.price+1:2==v?s.price=s.price-1:3==v&&(s.currency="JPY")}n.gridApi.updateGridData([s])}}),a)}}},{key:"startTickingDataagGridTrade",value:function(e,n,a,t){var r=this;if(null!=n&&null!=n.api){this.isTicking=!0;var o=new i.a;setInterval((function(){if(r.isTicking){var a=r.generateRandomInt(1,t),i=n.api.getRowNode(a);if(i){var l=i.data;if(l){var d=r.generateRandomInt(1,2),u=1==d?-.5:.5,s=1==d?-.01:.01,p=r.roundTo4Dp(l.price+u),c=l.bidOfferSpread,g=r.roundTo4Dp(p+c/2),f=r.roundTo4Dp(p-c/2);l.price=p,l.bid=f,l.ask=g,l.bloombergAsk=r.roundTo4Dp(g+s),l.bloombergBid=r.roundTo4Dp(f-s),l.changeOnYear=o.getMeaningfulDouble();e.gridApi.updateGridData([l],{runAsync:!0})}}}}),a)}}},{key:"startTickingDataagGridTradeBatch",value:function(e,n,a,t,r,o){var i=this;if(null!=n&&null!=n.api){var l=a.getCounterparties(),u=l.length-1,s=a.getCurrencies(),p=s.length-1,c=a.getCountries(),g=c.length-1,f=a.getNotionals(),m={runAsync:!0,callbackFn:function(){console.log("batch update occurred")}};setInterval((function(){for(var t=[],b=0;b<o;b++){var D,v=i.generateRandomInt(1,r),y=null===(D=n.api)||void 0===D?void 0:D.getRowNode(String(v));if(!y)return;var C=d({},y.data),I=i.generateRandomInt(1,2),h=l[i.generateRandomInt(0,u)],O=s[i.generateRandomInt(0,p)],T=c[i.generateRandomInt(0,g)],k=1==I?-.5:.5,w=i.roundTo4Dp(C.price+k),R=C.bidOfferSpread,A=i.roundTo4Dp(w+R/2),S=i.roundTo4Dp(w-R/2),j=i.getRandomItem(f),P=a.getMeaningfulDouble();C.price=w,C.bid=S,C.ask=A,C.bidOfferSpread=R,C.notional=j,C.changeOnYear=P,C.counterparty=String(h),C.currency=O,C.country=T,t.push(C)}e.gridApi.updateGridData(t,m)}),t)}}},{key:"startTickingDataagGridTradeBatchAddDeleteUpdate",value:function(e,n,a,t,r,o,i){var l=this;if(null!=n&&null!=n.api){var u=a.getCounterparties(),s=u.length-1,p=e.internalApi.getAdaptableInstance(),c={runAsync:!0};setInterval((function(){if(p.isInitialised){for(var a=[],t=n.api.getDisplayedRowCount(),r=0;r<o;r++){var i=l.generateRandomInt(0,t-1),g=n.api.getDisplayedRowAtIndex(i);if(!g)return;var f=d({},g.data),m=l.generateRandomInt(-1,1),b=u[l.generateRandomInt(0,s)],D=l.roundTo4Dp(f.price+m),v=f.bidOfferSpread,y=l.roundTo4Dp(D+v/2),C=l.roundTo4Dp(D-v/2);f.price=D,f.bid=C,f.ask=y,f.counterparty=String(b),a.push(f)}e.gridApi.updateGridData(a,c)}}),t);var g=!0,f=r;setInterval((function(){if(p.isInitialised){var t=l.generateRandomInt(-10,10),r=[],o=i+t;if(g){for(var d=0;d<o;d++){f++;var u=a.createTrade(f);u&&r.push(u)}e.gridApi.addGridData(r,c),g=!1}else{for(var s=n.api.getDisplayedRowCount(),m=0;m<o;m++){var b=l.generateRandomInt(0,s-1),D=n.api.getDisplayedRowAtIndex(b);if(D){var v=D.data;v&&r.push(v)}}e.gridApi.deleteGridData(r,c),g=!0}}}),3e3)}}},{key:"startTickingDataagGridAddRow",value:function(e,n,a,t){var r=this;if(null!=e&&null!=e.api&&void 0!=e.api&&null!=n){this.isTicking=!0;var o=e.api.getDisplayedRowCount()+1,l=new i.a;setInterval((function(){if(r.isTicking&&++o<t){var n=l.createTrade(o);n&&(console.log("adding row with Id: "+o),e.api.updateRowData({add:[n]}))}}),a)}}},{key:"startTickingDataagGridDeleteRow",value:function(e,n,a,t){var r=this;null!=e&&null!=e.api&&void 0!=e.api&&null!=n&&(this.isTicking=!0,setInterval((function(){if(r.isTicking){var n=e.api.getDisplayedRowCount();if(n>t){var a=r.generateRandomInt(0,n-1),o=e.api.getDisplayedRowAtIndex(a);if(o){var i=o.data;i&&(console.log("deleting row with Id:: "+i.tradeId),e.api.updateRowData({remove:[i]}))}}}}),a))}},{key:"useTickingDataTreeGrid",value:function(e,n){var a=this;if(null!=e&&null!=e.api){var t=[1,2,3,4,5,7,8,9,10,11,13,14,15,16,17,18,20,21,22,23,25,25,27,28,29,30,31,33,34,35,36,37];this.isTicking=!0,setInterval((function(){if(a.isTicking){var n=a.generateRandomInt(0,29),r=t[n],o=d({},e.rowData[r]);if(!o)return;var i=a.generateRandomInt(-5,5),l=o.staff+i,u=85*i,s=o.budget+u;o.staff=l,o.budget=s,e.api.updateRowData({update:[o]})}}),n)}}},{key:"turnOffTicking",value:function(){this.isTicking=!1}},{key:"getRandomItem",value:function(e,n){return n?e[this.generateRandomInt(0,Math.min(n,e.length-1))]:e[this.generateRandomInt(0,e.length-1)]}},{key:"generateRandomInt",value:function(e,n){return Math.floor(Math.random()*(n-e+1)+e)}},{key:"roundTo4Dp",value:function(e){return Math.round(1e4*e)/1e4}}]),e}()}}]);