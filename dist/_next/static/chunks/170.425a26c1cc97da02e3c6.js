(window.webpackJsonp=window.webpackJsonp||[]).push([[170],{VNSg:function(e,a,n){"use strict";n.r(a);var o=n("q1tI"),t=n("mbJ9"),l=n.n(t),i=(n("PMha"),n("5TJ6"),n("jWP/"),n("LvDl")),r=n("mXS1"),s=(n("nX5y"),n("ThKj")),u={FlashingCell:{FlashingCells:[{ColumnId:"bid",DownColor:"#FF0000",FlashingCellDuration:500,IsLive:!0,UpColor:"#008000"},{ColumnId:"ask",DownColor:"#FF0000",FlashingCellDuration:500,IsLive:!0,UpColor:"#008000"},{ColumnId:"price",DownColor:"#FF0000",FlashingCellDuration:500,IsLive:!0,UpColor:"#008000"}]},PercentBar:{PercentBars:[{ColumnId:"changeOnYear",MaxValue:150,MinValue:-150,PositiveColor:"#006400",NegativeColor:"#a52a2a",ShowValue:!1,ShowToolTip:!1}]}},d=n("6OHV");a.default=function(e){return Object(o.useEffect)((function(){var a=function(){var e=new s.a;e.setUpAgGridLicence();var a=new d.a,n=e.getTradeSchema(),o=e.getTrades(1e5),t=e.getGridOptions(n,o);t.floatingFilter=!0,t.modules=r.a,t.statusBar={statusPanels:[{statusPanel:"agTotalRowCountComponent",align:"left"},{statusPanel:"agFilteredRowCountComponent"}]};var C={primaryKey:"tradeId",userName:"Demo User",adaptableId:"Big Data Demo",queryOptions:{maxColumnValueItemsDisplayed:1e3},vendorGrid:t,predefinedConfig:u},p=Object(i.cloneDeep)(C),g=l.a.init(C);return a.startTickingDataagGridTrade(g,t,20),{predefinedConfig:u,adaptableOptions:p}}();e.onReady&&e.onReady(a)}),[]),null}}}]);