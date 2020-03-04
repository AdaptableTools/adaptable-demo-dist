(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{pZuy:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/filters/aggridnamedfiltersdemo",function(){return a("uJZn")}])},uJZn:function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),i=a("d3qH"),o=n.a.createElement;t.default=function(){return o(i.a,{demo:Promise.all([a.e(0),a.e(7),a.e(9),a.e(10),a.e(1),a.e(184)]).then(a.bind(null,"sPCl")),pageTitle:"Named Filters Demo",description:o("div",null,o("p",null,"AdapTable has a range of powerful filter functions. These include Column Filters, System Filters and User Filters (that users create at run-time) and in most cases are sufficient for all needs."),o("p",null,"But occasionally you might want to filter a column based on other data in the row or using internal logic not available to the Grid or even using an external lookup."),o("p",null,"This is where ",o("b",null,"Named Filters")," come in. You can create at"," ",o("b",null,"design time")," a Named Filter and provide AdapTable with the Predicate function required to evaluate it."),o("p",null,"Named Filters operate either on a Single Column or all Columns of a DataType (e.g. Date). You provide this (together with the predicate function) in"," ",o("a",{href:"https://api.adaptabletools.com/interfaces/_src_predefinedconfig_namedfilterstate_.namedfilterstate.html",target:"_blank"},"Named Filters")," ","section of Config."),o("p",null,"In this example we created 4 Named Filters and associated Predicate Functions:"," "),o("ol",null,o("li",null,o("b",null,"High")," on ",o("i",null,"OrderId")," Column that evaluates based on data in ",o("i",null,"Invoiced")," and ",o("i",null,"ItemCount")," columns"),o("li",null,o("b",null,"New Starter")," on ",o("i",null,"Employee")," column which mimics a lookup to an internal CRM system (and which is also a column filter)"),o("li",null,o("b",null,"Post Takeover")," which operates on all Date columns and evaluates true if date in cell was after a putative takeover date."),o("li",null,o("b",null,"After Work")," which operates on the ",o("i",null,"LastUpdatedTime")," ","Column and returns any time after 5pm."))),helpResources:o("div",null,o("a",{href:"https://api.adaptabletools.com/interfaces/_src_predefinedconfig_namedfilterstate_.namedfilterstate.html",target:"_blank"},"Predefined Config"),","," ",o("a",{href:"https://api.adaptabletools.com/interfaces/_src_api_namedfilterapi_.namedfilterapi.html",target:"_blank"},"Adaptable API"),","," ",o("a",{href:"https://adaptabletools.zendesk.com/hc/en-us/articles/360029896011-Filter-FAQ",target:"_blank"},"FAQ"),","," ",o("a",{href:"https://adaptabletools.zendesk.com/hc/en-us/articles/360002179298-Named-Filters-Videos",target:"_blank"},"Videos"),","," ",o("a",{href:"https://adaptabletools.zendesk.com/hc/en-us/articles/360002755137-Search-Functions",target:"_blank"},"User Guide"),".")})}}},[["pZuy",3,0,6,2,4,5,8,1]]]);