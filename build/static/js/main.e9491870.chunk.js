(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{18:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),s=n.n(c),l=(n(18),n(4)),i=n(2),r=(n(19),n(20),n(0)),u=function(e){var t=function(e){return((new Date).getFullYear()-e).toString()};return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{onChange:function(t){var n=t.target.value||e.setInitialYearValues();e.onFilterDateChange(n)},value:e.selectedYear,children:[Object(r.jsx)("option",{value:t(-1),children:t(-1)}),Object(r.jsx)("option",{value:t(0),children:t(0)}),Object(r.jsx)("option",{value:t(1),children:t(1)}),Object(r.jsx)("option",{value:t(2),children:t(2)}),Object(r.jsx)("option",{value:t(3),children:t(3)})]})]})})},j=(n(22),function(e){var t="card ".concat(e.className);return Object(r.jsx)("div",{className:t,children:e.children})});n(23),n(24);var o=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.getFullYear(),a=e.date.toLocaleString("en-US",{day:"2-digit"});return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__year",children:n}),Object(r.jsx)("div",{className:"expense-date__day",children:a})]})},b=function(e){return Object(r.jsx)("li",{children:Object(r.jsxs)(j,{className:"expense-item",children:[Object(r.jsx)(o,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsxs)("div",{className:"expense-item__price",children:["RM",e.amount]})]})]})})};n(25);var d=function(e){return 0===e.filteredData.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"Found No Expenses!"}):Object(r.jsx)("ul",{className:"expenses-list",children:e.filteredData.map((function(e){return Object(r.jsx)(b,{title:e.title,amount:e.amount,date:e.date},e.id)}))})},x=n(8),O=(n(26),n(27),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),v=function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(l.a)(t));return Object(r.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(r.jsx)(O,{value:e.value,maxValue:n,label:e.label},e.label)}))})},h=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(r.jsx)(v,{dataPoints:n})},m=function(e){var t=function(){return(new Date).getFullYear().toString()},n=Object(a.useState)(t()),c=Object(i.a)(n,2),s=c[0],l=c[1],o=e.expensesItems.filter((function(e){return e.date.getFullYear().toString()===s}));return Object(r.jsx)("div",{children:Object(r.jsxs)(j,{className:"expenses",children:[Object(r.jsx)(u,{selectedYear:s,initialYear:t,onFilterDateChange:function(e){return l(e)}}),Object(r.jsx)(h,{expenses:o}),Object(r.jsx)(d,{filteredData:o})]})})},p=n(9),f=(n(28),n(29),function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],s=n[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),j=u[0],o=u[1],b=Object(a.useState)(""),d=Object(i.a)(b,2),x=d[0],O=d[1];return Object(r.jsx)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:+j,date:new Date(x)};if(e.onSubmitExpenseForm(n),s(""),o(""),""!==n.title)return e.formVisibilityToggle()},children:Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:c,onChange:function(e){s(e.target.value)},placeholder:"Enter expenses name"})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{value:j,type:"number",min:"0.01",step:"0.01",onChange:function(e){o(e.target.value)},placeholder:"Enter expenditure amount"})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{value:x,type:"date",min:"2021-01-01",max:"2023-12-31",onChange:function(e){O(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-actions",children:[Object(r.jsxs)("button",{type:"submit",children:[Object(r.jsx)("i",{class:"bi bi-plus-lg"})," Add Expense"]}),Object(r.jsxs)("button",{type:"button",className:"red",onClick:e.formVisibilityToggle,children:[Object(r.jsx)("i",{class:"bi bi-x-lg"})," Cancel"]})]})]})})}),g=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],s=n[1],u=function(){return s((function(e){return!e}))};return Object(r.jsxs)("div",{className:"new-expense",children:[!c&&Object(r.jsxs)("div",{className:"new-expense__button-nav",children:[Object(r.jsxs)("a",{href:"https://github.com/rubanero14/React-Lessons-Section3-First-React-App",target:"_blank",children:[Object(r.jsx)("i",{class:"bi bi-filetype-jsx"})," Source Code"]}),Object(r.jsxs)("button",{onClick:u,children:[Object(r.jsx)("i",{class:"bi bi-wallet2"})," Add New Expense"]})]}),c&&Object(r.jsx)(f,{onSubmitExpenseForm:function(t){var n,a=Object(p.a)({id:(n=e.ExpensesData,Object(l.a)(n).length+1)},t);e.onSavedNewExpense(a)},formVisibilityToggle:u})]})},N=[{id:1,title:"Car Insurance",amount:483,date:new Date(2019,8,20)},{id:2,title:"Mortgage",amount:2500,date:new Date(2020,8,21)},{id:3,title:"Car Service",amount:1300,date:new Date(2021,8,2)},{id:4,title:"New Udemy Course",amount:70,date:new Date(2022,8,30)}],_=function(){var e=Object(a.useState)(N),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(g,{ExpensesData:n,onSavedNewExpense:function(e){c((function(){return[e].concat(Object(l.a)(n))}))}}),Object(r.jsx)(m,{expensesItems:n})]})};s.a.createRoot(document.getElementById("root")).render(Object(r.jsx)(_,{}))}},[[30,1,2]]]);
//# sourceMappingURL=main.e9491870.chunk.js.map