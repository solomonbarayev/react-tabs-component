(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(4),s=n.n(r),l=(n(12),n(2)),o=n.n(l),i=n(5),u=n(1),m=n(6);var b=function(){var e=Object(a.useState)(!0),t=Object(u.a)(e,2),n=t[0],r=t[1],s=Object(a.useState)([]),l=Object(u.a)(s,2),b=l[0],p=l[1],E=Object(a.useState)(0),d=Object(u.a)(E,2),f=d[0],j=d[1],v=function(){var e=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://course-api.com/react-tabs-project");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,p(n),r(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();if(Object(a.useEffect)((function(){v()}),[]),n)return c.a.createElement("section",{className:"section loading"},c.a.createElement("h1",null,"Loading..."));var N=b[f],h=N.company,O=N.dates,y=N.duties,k=N.title;return c.a.createElement("section",{className:"section"},c.a.createElement("div",{className:"title"},c.a.createElement("h2",null,"experience"),c.a.createElement("div",{className:"underline"})),c.a.createElement("div",{className:"jobs-center"},c.a.createElement("div",{className:"btn-container"},b.map((function(e,t){return c.a.createElement("button",{key:e.id,className:"job-btn",onClick:function(){return j(t)}},e.company)}))),c.a.createElement("div",{className:"job-info"},c.a.createElement("h3",null,k),c.a.createElement("h4",null,h),c.a.createElement("p",{className:"job-date"},O),c.a.createElement("ul",null,y.map((function(e,t){return c.a.createElement("li",{key:t,className:"job-desc"},c.a.createElement(m.a,{className:"job-icon"}),c.a.createElement("p",null,e))})))),c.a.createElement("button",{type:"button",className:"btn center-btn"},"more info")))};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.e2f35e21.chunk.js.map