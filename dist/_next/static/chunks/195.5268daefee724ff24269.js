(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{sd8m:function(e,n,o){"use strict";o.r(n);var a=o("q1tI"),r=o("9Jkg"),t=o.n(r),i=o("mbJ9"),l=o.n(i),s=(o("PMha"),o("cUqQ"),o("5TJ6"),o("jWP/"),o("iMsr"),o("LvDl")),d=(o("nX5y"),o("mXS1")),p=o("smsc"),C=o("ThKj"),u={Dashboard:{VisibleButtons:["ConditionalStyle"]},ConditionalStyle:{ConditionalStyles:[{ColumnId:"ChangeLastOrder",Style:{ForeColor:"#008000"},ConditionalStyleScope:"Column",Expression:{FilterExpressions:[{ColumnId:"ChangeLastOrder",Filters:["Positive"]}]}},{ColumnId:"ChangeLastOrder",Style:{ForeColor:"#ff0000"},ConditionalStyleScope:"Column",Expression:{FilterExpressions:[{ColumnId:"ChangeLastOrder",Filters:["Negative"]}]}},{Style:{BackColor:"#ffffcc",FontStyle:"Italic",ForeColor:"#000000"},ConditionalStyleScope:"Row",Expression:{RangeExpressions:[{ColumnId:"ItemCost",Ranges:[{Operand1:"80",Operand1Type:"Value",Operand2:"",Operand2Type:"Value",Operator:"GreaterThan"}]}]}},{ColumnId:"PackageCost",Style:{FontWeight:"Bold"},ConditionalStyleScope:"Row",Expression:{RangeExpressions:[{ColumnId:"PackageCost",Ranges:[{Operand1:"10",Operand1Type:"Value",Operand2:"",Operand2Type:"Value",Operator:"LessThan"}]}]}}]}};n.default=function(e){return Object(a.useEffect)((function(){var n=function(){var e=new C.a;e.setUpAgGridLicence();var n=JSON.parse(t()(p)),o=e.getConditionalstyleNorthwindColumnSchema(),a=e.getGridOptions(o,n);a.modules=d.a;var r={primaryKey:"OrderId",userName:"Demo User",adaptableId:"Conditional Style Demo",vendorGrid:a,predefinedConfig:u},i=Object(s.cloneDeep)(r);l.a.init(r);return{predefinedConfig:u,adaptableOptions:i}}();e.onReady&&e.onReady(n)}),[]),null}}}]);