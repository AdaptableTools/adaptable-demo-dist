(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[283],{sBeA:function(e,n,t){"use strict";t.r(n);var a,r=t("q1tI"),o=t("o0o1"),i=t.n(o),s=t("HaE+"),l=(t("nX5y"),t("smsc")),u=t("ThKj"),c=t("rePB"),d=(t("PMha"),t("cUqQ"),t("5TJ6"),t("jWP/"),t("iMsr"),t("mbJ9")),p=t.n(d),m=t("mXS1");function f(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?f(Object(t),!0).forEach((function(n){Object(c.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g={Dashboard:{Tabs:[]},QuickSearch:{Style:{BackColor:"#ffff00",ForeColor:"#8b0000",FontStyle:"Italic"}}},O=function(){var e=Object(s.a)(i.a.mark((function e(n,t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={primaryKey:"OrderId",userName:"Demo User",adaptableId:"Quick Search Options Demo",searchOptions:{quickSearchPlaceholder:"Search Grid",excludeColumnFromQuickSearch:function(e){return"ContactName"===e.ColumnId},runQueryAfterQuickSearch:!0},predefinedConfig:g,vendorGrid:b(b({},{columnDefs:n,rowData:t,enableRangeSelection:!0,sideBar:!0,suppressMenuHide:!0,statusBar:{statusPanels:[{statusPanel:"agTotalRowCountComponent",align:"left"},{statusPanel:"agFilteredRowCountComponent"}]}}),{},{modules:m.a})},e.next=4,p.a.init(r);case 4:return a=e.sent,e.abrupt("return",{adaptableOptions:r,adaptableApi:a});case 6:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),y=Object(s.a)(i.a.mark((function e(){var n,t,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(n=new u.a).setUpAgGridLicence(),t=JSON.parse(JSON.stringify(l)),n.convertExcelData(t),a=n.getBasicNorthwindColumnSchema(),e.next=7,O(a,t);case 7:return r=e.sent,o=r.adaptableOptions,r.adaptableApi,o.vendorGrid.onGridReady=function(e){e.columnApi.autoSizeAllColumns(),setTimeout((function(){return e.columnApi.autoSizeAllColumns()}),1),e.api.addEventListener("newColumnsLoaded",(function(){e.columnApi.autoSizeAllColumns()})),e.api.closeToolPanel()},e.abrupt("return",{code:"import '@adaptabletools/adaptable/index.css';\nimport '@adaptabletools/adaptable/themes/dark.css';\nimport '@ag-grid-community/all-modules/dist/styles/ag-grid.css';\nimport '@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css';\nimport '@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css';\nimport Adaptable from '@adaptabletools/adaptable/agGrid';\nimport { GridOptions } from '@ag-grid-community/all-modules';\nimport {\n  AdaptableOptions,\n  PredefinedConfig,\n  AdaptableApi,\n  AdaptableColumn,\n} from '@adaptabletools/adaptable/types';\nimport { AllEnterpriseModules } from '@ag-grid-enterprise/all-modules';\n\nvar adaptableApi: AdaptableApi;\n\nconst demoConfig: PredefinedConfig = {\n  Dashboard: {\n    Tabs: [],\n  },\n  QuickSearch: {\n    Style: {\n      BackColor: '#ffff00',\n      ForeColor: '#8b0000',\n      FontStyle: 'Italic',\n    },\n  },\n} as PredefinedConfig;\n\nexport default async (columnDefs: any[], rowData: any[]) => {\n  const gridOptions: GridOptions = {\n    columnDefs,\n    rowData,\n    enableRangeSelection: true,\n    sideBar: true,\n    suppressMenuHide: true,\n    statusBar: {\n      statusPanels: [\n        { statusPanel: 'agTotalRowCountComponent', align: 'left' },\n        { statusPanel: 'agFilteredRowCountComponent' },\n      ],\n    },\n  };\n\n  const adaptableOptions: AdaptableOptions = {\n    primaryKey: 'OrderId',\n    userName: 'Demo User',\n    adaptableId: 'Quick Search Options Demo',\n    searchOptions: {\n      quickSearchPlaceholder: 'Search Grid',\n      excludeColumnFromQuickSearch: (column: AdaptableColumn) => {\n        if (column.ColumnId === 'ContactName') {\n          return true;\n        }\n        return false;\n      },\n      runQueryAfterQuickSearch: true,\n    },\n\n    predefinedConfig: demoConfig,\n    vendorGrid: { ...gridOptions, modules: AllEnterpriseModules },\n  };\n  adaptableApi = await Adaptable.init(adaptableOptions);\n\n  return { adaptableOptions, adaptableApi };\n};\n"});case 12:case"end":return e.stop()}}),e)})));n.default=function(e){return Object(r.useEffect)((function(){y().then((function(n){e.onReady&&e.onReady(n)}))}),[]),null}}}]);