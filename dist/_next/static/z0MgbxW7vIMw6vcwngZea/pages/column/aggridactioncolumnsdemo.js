(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{lml3:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/column/aggridactioncolumnsdemo",function(){return n("vDvH")}])},vDvH:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),o=n("d3qH"),i=l.a.createElement;t.default=function(){return i(o.a,{demo:Promise.all([n.e(0),n.e(7),n.e(9),n.e(10),n.e(1),n.e(166)]).then(n.bind(null,"/Kwv")),pageTitle:"Action Columns Demo",description:i("div",null,i("p",null,"AdapTable provides an Action Column function that allows you to specify (and optionally render) a button to be placed in a column."),i("p",null,"When the button is clicked an"," ",i("a",{href:"https://api.adaptabletools.com/interfaces/_src_api_eventapi_.eventapi.html",target:"_blank"},"On('ActionColumnClicked')")," ","event fires, providing details of which column was clicked and the current data in its row."," "),i("p",null,"You can subscribe to this event and perform any additional logic or functionality that is required."),i("p",null,"You can, also, provide 2 optional functions when creating an Action Column:",i("ul",null,i("li",null," ",i("b",null,i("a",{href:"https://api.adaptableblotter.com/interfaces/_predefinedconfig_actioncolumnstate_.actioncolumn.html#shouldrenderpredicate",target:"_blank"},"ShouldRenderPredicate")," ")," ","- this will return true or false to determine whether the button will be displayed."),i("li",null,i("b",null,i("a",{href:"https://api.adaptableblotter.com/interfaces/_predefinedconfig_actioncolumnstate_.actioncolumn.html#renderfunction",target:"_blank"},"RenderFunction")," ")," ","- this allows you to create a button that matches your style and requirements - and allows you to provide differently styled buttons depending on the data in each row."))),i("p",null,"Here we created ",i("b",null,"Plus")," and ",i("b",null,"Minus")," Action Columns; in the onActionColumnClicked event handler we update the ",i("i",null,"Item Count")," ","column (though we do also have a"," ",i("a",{href:"../../edit/aggridplusminusdemo",target:"_blank"},"Plus/Minus Function"),")."),i("p",null,"We also created a ",i("b",null,"Multiply")," Action Column which updates the"," ",i("i",null,"Item Cost")," column. We supplied a ",i("i",null,"ShouldRenderPredicate")," ","to say the button shouldn't appear if Employee is 'Margaret Peacock', and a ",i("i",null,"RenderFunction")," to say that we double if the Employee is 'Robert King' or 'Janet Leverling' and treble it otherwise."),i("p",null,"Lastly we created an Action column with the text ",i("b",null,"Delete Row")," ","and does exactly that."),i("p",null,"Note: the delete row and all the cell updates were performed by using various functions in the"," ",i("a",{href:"https://api.adaptabletools.com/interfaces/_src_api_gridapi_.gridapi.html",target:"_blank"},"gridApi")," ","section of AdaptableApi.")),helpResources:i("div",null,i("a",{href:"https://api.adaptabletools.com/interfaces/_src_predefinedconfig_actioncolumnstate_.actioncolumnstate.html",target:"_blank"},"Predefined Config"),","," ",i("a",{href:"https://api.adaptabletools.com/interfaces/_src_api_actioncolumnapi_.actioncolumnapi.html",target:"_blank"},"Adaptable API"),","," ",i("a",{href:"https://adaptabletools.zendesk.com/hc/en-us/articles/360002209498-Action-Column-FAQ",target:"_blank"},"FAQ"),","," ",i("a",{href:"https://adaptabletools.zendesk.com/hc/en-us/articles/360002204277-Action-Column-Videos",target:"_blank"},"Videos"),","," ",i("a",{href:"https://adaptabletools.zendesk.com/hc/en-us/articles/360003213038-Special-Column-Functions",target:"_blank"},"User Guide"),".")})}}},[["lml3",3,0,6,2,4,5,8,1]]]);