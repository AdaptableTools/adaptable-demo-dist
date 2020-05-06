(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{Sr2Y:function(e,l,n){"use strict";n.r(l);var r=n("q1tI"),t=n.n(r),a=n("d3qH"),i=t.a.createElement;l.default=function(){return i(a.a,{demo:Promise.all([n.e(0),n.e(7),n.e(6),n.e(9),n.e(1),n.e(252)]).then(n.bind(null,"jZXt")),pageTitle:"Set Up Columns Demo",description:i("div",null,i("p",null,"When setting up columns in ag-Grid there are 2 ways to render data so that the display value in the cell differs from the 'raw' value:"),i("ul",null,i("li",null,i("a",{href:"https://www.ag-grid.com/javascript-grid-value-formatters/#value-formatters",target:"_blank"},i("b",null,"Value Formatters")),": enable formatting a column so the display value fits precise requirements (e.g. decimal places, showing a currency sign, negative numbers in brackets etc.)"),i("li",null,i("a",{href:"https://www.ag-grid.com/javascript-grid-cell-rendering-components/#cell-renderer",target:"_blank"},i("b",null,"Cell Renderers")),": designed for more complicated use cases (e.g. showing an image in the cell, rendering cells in complex ways)")),i("p",null,"AdapTable will recognise when either of these are being used to format the data and will allow you still to filter the column on the raw (i.e. underlying) values (e.g. in the quick filter bar)."),i("p",null,"The only difference is that when a Value Formatter is used the"," ",i("i",null,"Display Value")," is shown in the Filter dropdown, but for a Cell Renderer the ",i("i",null,"raw value")," is displayed."),i("p",null,"Note: AdapTable Functions like"," ",i("a",{href:"../style/aggridpercentbardemo"},"Percent Bar")," and"," ",i("a",{href:"../style/aggridgradientcolumndemo"},"Gradient Column")," ","effectively create advanced cell renderers on the fly for you."),i("p",null,"To format columns on the fly, or for more complicated date and numeric formats, use the AdaptTable"," ",i("a",{href:"../style/aggridformatcolumndemo"},"Format Column")," Function (as done below for ",i("b",null,"First Bought")," and ",i("b",null,"Price")," Columns)"),i("p",null,"In this demo we have created value formatters for the"," ",i("b",null,"Efficiency"),", ",i("b",null,"First Used")," and ",i("b",null,"Efficiency Rating")," ","columns and a Cell Renderer for the ",i("b",null,"Energy Rating")," column."),i("p",null,"Note also how we pass in the ",i("b",null,"columnTypes")," array to GridOptions and then reference the required column type when we create each column (e.g. 'abColDefNumber')")),helpResources:i("div",null)})}},qFFD:function(e,l,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gettingstarted/aggridsetupcolumnsdemo",function(){return n("Sr2Y")}])}},[["qFFD",2,0,5,3,4,8,1]]]);