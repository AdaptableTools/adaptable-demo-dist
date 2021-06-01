_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[113],{"1tLe":function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/filters/aggridfilteroptionsdemo",function(){return t("ZcnB")}])},ZcnB:function(e,l,t){"use strict";t.r(l);var a=t("q1tI"),n=t.n(a),i=t("d3qH"),r=n.a.createElement;l.default=function(){return r(i.a,{demo:Promise.all([t.e(0),t.e(8),t.e(7),t.e(9),t.e(1),t.e(265)]).then(t.bind(null,"XZCT")),pageTitle:"Filter Options Demo",description:r("div",null,r("p",null,"There are many options available for managing Filters in AdapTable via the"," ",r("a",{href:"https://docs.adaptabletools.com/docs/adaptable-options/search-options",target:"_blank"},"Search Options")," ","class. These include:"),r("ul",null,r("li",null,r("b",null,"Auto Apply Filter"),r("p",null,"By default AdapTable will apply the column filters immediately after it is created or an in item in the filter value list is selected or unselected.")," ",r("p",null,"However sometimes this is not the desired behaviour, particularly if you are filtering on the server and want to make one call at the end after all filters have been selected."),r("p",null,"In this case, set ",r("b",null,"autoApplyFilter")," to false - as done here - and a button appears in each column filter: the filter is only applied when it is clicked.")),r("li",null,r("b",null,"Quick Filter Trigger"),r("p",null,"The Quick Filter menu will normally open when the mouse hovers over the menu on the left of any Quick Filter Bar column."),r("p",null,"If Filters are used rarely this can be distracting; setting"," ",r("b",null,"quickFilterTrigger")," to ",r("b",null,"'click'")," - as done here - ensures the menu only opens (and closes) when explicitly clicked.")),r("li",null,r("b",null,"sortColumnValuesInFilter"),r("p",null,"By default the Column Values that are listed in the Filter pane are the distinct values in that column sorted in a default way i.e. alphabetically, lowest to highest etc."),r("p",null,"Setting ",r("b",null,"sortColumnValuesInFilter")," to ",r("b",null,"true ")," will ensure that column values will display according to the current sorting set for that column."),r("p",null,"Here we set ",r("i",null,"Order Date")," to sort in descending order (newest to oldest); this same sorting order is reflecting in the filter form for the column that displays distinct values.")),r("li",null,r("b",null,"Clear Filters On StartUp"),r("p",null,"Column Filters - like all other changes made in AdapTable are automatically stored in AdapTable State and then available when the grid re-opens.")," ",r("p",null,"If this behaviour is not required, then setting"," ",r("b",null,"clearFiltersOnStartUp")," in to ",r("b",null,"true ")," will clear any Column Filters that have been saved."),r("p",null,"This has been done here - so if you create a column filter and reload the page the filter will not reappear when the page loads.")),r("li",null,r("b",null,"Default Filter Predicates"),r("p",null,"AdapTable sets default predicates to use for each column data type. These are the ones that appear when no filter is applied."," "),r("p",null,"By default they are: ",r("b",null,"Numeric Columns:")," 'Equals';"," ",r("b",null,"String Columns:")," 'Contains'; ",r("b",null,"Date Columns:"),"'On'."),r("p",null,"In this example we have set these 3 values to GreaterThan', 'StartsWith', and 'NotOn' respectively, and the Quick Filter changes accordingly."))),r("p",null)),helpResources:r("div",null,r("a",{href:"https://docs.adaptabletools.com/docs/adaptable-modules/filter-module",target:"_blank"},"Filter Module")," ","|"," ",r("a",{href:"https://docs.adaptabletools.com/docs/adaptable-options/search-options",target:"_blank"},"Search Options")," ","|"," ",r("a",{href:"https://docs.adaptabletools.com/docs/predefined-config/filter-config",target:"_blank"},"Filter Config")," ","|"," ",r("a",{href:"https://docs.adaptabletools.com/docs/adaptable-api/filter-api",target:"_blank"},"Filter Api")," ")})}}},[["1tLe",2,0,5,3,4,6,1]]]);