(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{SegW:function(e,t,o){"use strict";o.r(t);var r=o("q1tI"),n=o("9Jkg"),a=o.n(n),m=o("mbJ9"),u=o.n(m),i=(o("PMha"),o("5TJ6"),o("jWP/"),o("LvDl")),s=o("mXS1"),d=(o("nX5y"),o("smsc")),l=o("ThKj"),C={CalculatedColumn:{CalculatedColumns:[{ColumnExpression:'Col("ItemCost") / Col("ItemCount")',ColumnId:"Avg Item Cost"}]},FreeTextColumn:{FreeTextColumns:[{ColumnId:"Comments",DefaultValue:"",FreeTextStoredValues:[{PrimaryKey:11137,FreeText:"Dispatch asap"},{PrimaryKey:11133,FreeText:"Angry customer"},{PrimaryKey:11128,FreeText:"Important order"}]}]},Layout:{Layouts:[{Columns:["Avg Item Cost","CustomerReference","CompanyName","ContactName","Comments","ShippedDate","OrderCost","PackageCost","OrderId","OrderDate","Freight","ArrivedOnTime","ShipName","ShipVia","ItemCost","ItemCount"],ColumnSorts:[],Name:"With Special Cols"}]}};t.default=function(e){return Object(r.useEffect)((function(){var t=function(){var e=new l.a;e.setUpAgGridLicence();var t=JSON.parse(a()(d)),o=e.getColumnGroupingNorthwindColumnSchema(),r=e.getGridOptions(o,t);r.groupIncludeTotalFooter=!0,r.modules=s.a;var n={primaryKey:"OrderId",userName:"Demo User",adaptableId:"Column Grouping Demo",vendorGrid:r,predefinedConfig:C},m=Object(i.cloneDeep)(n);return u.a.init(n),{predefinedConfig:C,adaptableOptions:m}}();e.onReady&&e.onReady(t)}),[]),null}}}]);