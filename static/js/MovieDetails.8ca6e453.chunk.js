"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[739],{4315:function(e,t,n){n.d(t,{Z:function(){return u}});var r,a=n(168),c=n(6444),i=n(407),u=c.ZP.div(r||(r=(0,a.Z)(["\n  ",";\n  ",";\n  ",";\n  ",";\n  ",";\n"])),i.FK,i.Dh,i.bK,i.GQ,i.$_)},818:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var r,a=n(5861),c=n(885),i=n(4687),u=n.n(i),s=n(2791),o=n(1087),p=n(7689),d=n(168),h=n(6444).ZP.img(r||(r=(0,d.Z)(["\n  width: 100%;\n  height: auto;\n"]))),f=n(4315),l=n(184);function v(e){var t=e.infoByMovie||{},n=t.original_title,r=void 0===n?"":n,a=t.poster_path,c=void 0===a?"":a;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(f.Z,{children:(0,l.jsx)(h,{width:"342px",alt:r,src:"https://image.tmdb.org/t/p/w342/".concat(null===c?"h5oGodvcoq8cyIDTy79yKn4qbey.jpg":c),loading:"lazy"})})})}var g=n(1659);function x(e){var t=(0,p.UO)().movieId,n=(0,s.useState)({}),r=(0,c.Z)(n,2),i=r[0],d=r[1],h=(0,s.useState)(g.Z.IDLE),f=(0,c.Z)(h,2),x=f[0],y=f[1];return(0,s.useEffect)((function(){function e(){return(e=(0,a.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(g.Z.PENDING),e.prev=1,e.next=4,g.Z.getSearchMovieById(t);case 4:n=e.sent,d(n),y(g.Z.RESOLVED),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),y(g.Z.REJECTED);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t]),console.log(x),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("main",{children:[(0,l.jsx)(v,{infoByMovie:i}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]}),(0,l.jsx)(p.j3,{})]})})}},1659:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(5861),a=n(4687),c=n.n(a),i=n(4569),u=n.n(i);u().defaults.baseURL="https://api.themoviedb.org/3/";function s(){return s=(0,r.Z)(c().mark((function e(){var t,n,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=4,u().get("search/movie?query=".concat(t,"&page=").concat(n));case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("/trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("movie/".concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("movie/".concat(t,"/credits"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u().get("movie/".concat(t,"/reviews"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}u().defaults.params={api_key:"d3bb769880d7129a875d091908f7afe1",language:"en-US"};var f={getSearchMovieResult:function(){return s.apply(this,arguments)},getMovieTrend:function(){return o.apply(this,arguments)},getSearchMovieById:function(e){return p.apply(this,arguments)},getSearchCastsMovieById:function(e){return d.apply(this,arguments)},getSearchReviewsMovieById:function(e){return h.apply(this,arguments)},IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",LOADED:"loaded",REJECTED:"rejected"},l=f}}]);
//# sourceMappingURL=MovieDetails.8ca6e453.chunk.js.map