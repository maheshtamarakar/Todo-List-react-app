(this.webpackJsonpmoviereview=this.webpackJsonpmoviereview||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n.n(o),c=n(7),s=n.n(c),l=(n(13),n(8)),i=n(3),d=(n(14),n(0)),r=function(t){var e=t.todo1,n=t.title,o=t.onDelete,a=t.setTitle,c=t.setButton,s=t.setTodo,l=t.button;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"todoItem",onClick:function(t){t.target.classList.toggle("active")},children:[Object(d.jsxs)("h1",{className:"my-2 title",children:[n,Object(d.jsx)("p",{className:"line"})]}),Object(d.jsxs)("div",{className:"operation",children:[Object(d.jsx)("i",{className:"fas fa-trash-alt",onClick:function(){return o(e)}}),Object(d.jsx)("i",{className:"far fa-edit",onClick:function(){return function(t){a(n),c("Update"),console.log(l),s(t)}(e)}})]})]})})},u=function(t){var e=t.data,n=t.onDelete,o=t.addTodo,a=t.edit,c=t.deleteAll,s=t.setTitle,l=t.setButton,i=t.setTodo,u=t.button;return Object(d.jsx)("div",{className:"container-fluid nav_bg",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsxs)("div",{className:"col-10 mx-auto",children:[0===e.length?"No Todos Left":e.map((function(t){return Object(d.jsx)(r,{setButton:l,edit:a,data:e,addTodo:o,onDelete:n,todo1:t,title:t.title,setTitle:s,setTodo:i,button:u},t.sno)})),Object(d.jsx)("button",{className:"deleteAll",onClick:function(){return c(e)},children:"Delete All"})]})})})},j=n(6),b=function(t){var e=t.todo,n=t.setButton,o=t.setTitle,a=t.title,c=t.addTodo,s=t.button,l=t.setData,i=t.data;return Object(d.jsx)("div",{className:"container-fluid nav_bg",children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"col-10 mx-auto",children:Object(d.jsxs)("form",{onSubmit:function(t){return function(t,e,a,l,i){t.preventDefault(),i?"Add_Item"===s?(console.log(s),c(i)):"Update"===s&&(n("Add_Item"),console.log(s),a(l.map((function(t){return t===e?Object(j.a)(Object(j.a)({},t),{},{title:i}):t})))):alert("title cannot be blank"),o("")}(t,e,l,i,a)},action:"",children:[Object(d.jsx)("div",{className:" addItem",children:Object(d.jsx)("input",{type:"text",className:"form-control ",id:"exampleFormControlInput1",placeholder:"Add a todo",name:"title",value:a,onChange:function(t){o(t.target.value)}})}),Object(d.jsx)("button",{type:"submit",className:"button",children:s})]})})})})};var m=function(){var t,e=Object(o.useState)([]),n=Object(i.a)(e,2),a=n[0],c=n[1],s=Object(o.useState)("Add_Item"),r=Object(i.a)(s,2),j=r[0],m=r[1],O=Object(o.useState)(""),f=Object(i.a)(O,2),h=f[0],x=f[1];t=localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[];var v=Object(o.useState)(t),g=Object(i.a)(v,2),N=g[0],p=g[1];return Object(o.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(N))}),[N]),Object(d.jsxs)("div",{className:"center-element",children:[Object(d.jsx)("h1",{className:"my-4",children:"What's the Plan for Today?"}),Object(d.jsx)(b,{todo:a,button:j,setButton:m,setTitle:x,title:h,addTodo:function(t){var e={sno:0===N.length?1:N[N.length-1].sno+1,title:t};p([].concat(Object(l.a)(N),[e]))},inIt:t,setData:p,data:N}),Object(d.jsx)(u,{setButton:m,deleteAll:function(t){p("")},data:N,onDelete:function(t){p(N.filter((function(e){return e!==t})))},setTitle:x,setTodo:c,button:j})]})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.d7274b11.chunk.js.map