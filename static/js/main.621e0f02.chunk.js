(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(6),r=n.n(c),s=n(3),a=n(4),u=n(1),o=n.n(u),i=n(2),l=(n(12),n(13),n(14),n(0)),p=function(e){var t=e.selectedPostId,n=e.setSelectedPostId,c=e.posts;return Object(l.jsxs)("div",{className:"PostsList",children:[Object(l.jsx)("h2",{children:"Posts:"}),Object(l.jsx)("ul",{className:"PostsList__list",children:null===c||void 0===c?void 0:c.map((function(e){return Object(l.jsxs)("li",{className:"PostsList__item",children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("b",{children:"[User #".concat(e.userId,"]: ")}),"sunt aut facere repellat provident occaecati excepturi optio"]}),t===e.id?Object(l.jsx)("button",{type:"button",className:" PostsList__button button",onClick:function(){return n(0)},children:"Close"}):Object(l.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return n(e.id)},children:"Open"})]},e.id)}))})]})},j="https://mate.academy/students-api",b=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/users/"));case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/comments?postId=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/comments/").concat(t),{method:"DELETE"});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/comments"),{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:JSON.stringify(t)});case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t){e.next=6;break}return e.next=3,fetch("".concat(j,"/posts/"));case 3:n=e.sent,e.next=9;break;case 6:return e.next=8,fetch("".concat(j,"/posts?userId=").concat(t));case 8:n=e.sent;case 9:return e.abrupt("return",n.json());case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(o.a.mark((function e(t){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(j,"/posts/").concat(t));case 2:return n=e.sent,e.abrupt("return",n.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=(n(16),function(e){var t=e.selectedPostId,n=e.loadPostComments,c=Object(i.useState)(""),r=Object(a.a)(c,2),u=r[0],p=r[1],j=Object(i.useState)(""),b=Object(a.a)(j,2),d=b[0],f=b[1],h=Object(i.useState)(""),O=Object(a.a)(h,2),x=O[0],v=O[1],_=function(){var e=Object(s.a)(o.a.mark((function e(c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.next=3,m({postId:t,name:u,email:d,body:x});case 3:n(),p(""),f(""),v("");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("form",{onSubmit:_,className:"NewCommentForm",children:[Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:u,onChange:function(e){return p(e.target.value)},required:!0})}),Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("input",{type:"email",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:d,onChange:function(e){return f(e.target.value)},required:!0})}),Object(l.jsx)("div",{className:"form-field",children:Object(l.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:u,onChange:function(e){return p(e.target.value)},required:!0})}),Object(l.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Add a comment"})]})}),v=(n(17),function(e){var t=e.selectedPostId,n=Object(i.useState)(null),c=Object(a.a)(n,2),r=c[0],u=c[1],p=Object(i.useState)([]),j=Object(a.a)(p,2),b=j[0],m=j[1],h=Object(i.useState)(!0),v=Object(a.a)(h,2),_=v[0],w=v[1],N=function(){var e=Object(s.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=5;break}return e.next=4,O(t);case 4:n=e.sent;case 5:u(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),u(null);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){N()}),[t]);var y=function(){var e=Object(s.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d(t);case 3:n=e.sent,m(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m([]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(s.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:y();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){y()}),[t]),Object(l.jsxs)("div",{className:"PostDetails",children:[Object(l.jsx)("h2",{children:"Post details:"}),r&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("section",{className:"PostDetails__post",children:Object(l.jsx)("p",{children:r.title})}),Object(l.jsxs)("section",{className:"PostDetails__comments",children:[Object(l.jsx)("button",{type:"button",className:"button",onClick:function(){return w(!_)},children:_?"Hide ".concat(b.length," comments"):"Show ".concat(b.length," comments")}),_&&Object(l.jsx)("ul",{className:"PostDetails__list",children:b.map((function(e){return Object(l.jsxs)("li",{className:"PostDetails__list-item",children:[Object(l.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return k(e.id)},children:"X"}),Object(l.jsx)("p",{children:e.body})]},e.id)}))})]}),Object(l.jsx)("section",{children:Object(l.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(l.jsx)(x,{selectedPostId:t,loadPostComments:y})})})]})]})}),_=function(){var e=Object(i.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)(0),u=Object(a.a)(r,2),j=u[0],d=u[1],f=Object(i.useState)(0),m=Object(a.a)(f,2),O=m[0],x=m[1],_=Object(i.useState)([]),w=Object(a.a)(_,2),N=w[0],y=w[1],k=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b();case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),c([]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){k()}),[]);var P=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h(j);case 3:t=e.sent,y(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),y([]);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){P()}),[j]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App__header",children:Object(l.jsxs)("label",{children:["Select a user: \xa0",Object(l.jsxs)("select",{className:"App__user-selector",onChange:function(e){return d(+e.target.value)},children:[Object(l.jsx)("option",{value:"0",children:"All users"}),null===n||void 0===n?void 0:n.map((function(e,t){return t<10?Object(l.jsx)("option",{value:e.id,children:e.name},e.id):null}))]})]})}),Object(l.jsxs)("main",{className:"App__main",children:[Object(l.jsx)("div",{className:"App__sidebar",children:Object(l.jsx)(p,{selectedPostId:O,setSelectedPostId:x,posts:N})}),Object(l.jsx)("div",{className:"App__content",children:Object(l.jsx)(v,{selectedPostId:O})})]})]})};r.a.render(Object(l.jsx)(_,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.621e0f02.chunk.js.map