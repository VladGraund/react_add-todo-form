(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(8),c=a(2),s=a(6),o=a(1),l=(a(13),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),d=a(0),u=function(e){var t=e.user,a=t.name,n=t.email;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},m=function(e){var t=e.todo,a=t.id,n=t.completed,i=t.title,r=t.user;return Object(d.jsxs)("article",{"data-id":"".concat(a),className:"TodoInfo ".concat(n?"TodoInfo--completed":""),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:i}),r&&Object(d.jsx)(u,{user:r})]})},j=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(m,{todo:e},e.id)}))})};function b(e){return l.find((function(t){return t.id===e}))||null}var h=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:b(e.userId)})})),O=function(){var e=Object(o.useState)(h),t=Object(c.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),s=Object(c.a)(i,2),u=s[0],m=s[1],O=Object(o.useState)(!1),f=Object(c.a)(O,2),p=f[0],x=f[1],v=Object(o.useState)(0),y=Object(c.a)(v,2),S=y[0],N=y[1],I=Object(o.useState)(!1),C=Object(c.a)(I,2),g=C[0],_=C[1],k=15;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/users",method:"POST",children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("label",{children:["Title:\xa0",Object(d.jsx)("input",{type:"text","data-cy":"titleInput",onChange:function(e){x(!1),m(e.target.value)},placeholder:"Enter a title"})]}),p&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsxs)("label",{children:["User:\xa0",Object(d.jsxs)("select",{"data-cy":"userSelect",onChange:function(e){_(!1),N(+e.target.value)},defaultValue:"0",children:[Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(d.jsx)("option",{value:"".concat(e.id),children:e.name},"".concat(e.id))}))]})]}),g&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",onClick:function(e){if(e.preventDefault(),u.trim()||x(!0),S||_(!0),!u.trim()||0===S)return!1;var t={id:k+=1,title:u,completed:!1,userId:S,user:b(S)},i=document.querySelector("form");return!!i&&(i.reset(),n([].concat(Object(r.a)(a),[t])))},children:"Add"})]}),Object(d.jsx)(j,{todos:a})]})};i.a.render(Object(d.jsx)(O,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.38e971a1.chunk.js.map