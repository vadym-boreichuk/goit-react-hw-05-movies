"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[277],{910:function(t,n,e){e.r(n),e.d(n,{Cast:function(){return s},default:function(){return o.Cast}});var r=e(439),a=e(791),c=e(689),u=e(207),i=e(184),o=e(910),s=function(){var t=(0,a.useState)([]),n=(0,r.Z)(t,2),e=n[0],o=n[1],s=(0,c.UO)().movieId;(0,a.useEffect)((function(){(0,u.M1)(s).then((function(t){return o(t.data.cast)}))}),[s]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("ul",{children:e.map((function(t){var n,e=t.cast_id,r=t.profile_path,a=t.original_name,c=t.character,u=t.credit_id;return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:(n=r,null===n||void 0===n?"https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg":"https://www.themoviedb.org/t/p/w500".concat(n)),alt:a,width:"336",id:u}),(0,i.jsx)("p",{children:a}),(0,i.jsxs)("p",{children:["Character: ",c]})]},e)}))})})}},207:function(t,n,e){e.d(n,{M1:function(){return g},TP:function(){return h},XT:function(){return l},q:function(){return m},tx:function(){return v}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="7212b11b8c935ff4fdea97b9eff4e2a4";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var o="/trending/movie/day",s="/search/movie",p="/movie",f="/credits",d="/reviews",l=function(){var t=(0,r.Z)(c().mark((function t(){var n,e,r,a=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:1,t.next=3,u.Z.get("".concat(o,"?api_key=").concat(i,"&page=").concat(n,"&language=en-US&include_adult=false"));case 3:return e=t.sent,r=e.data,t.abrupt("return",r.results);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(p,"/").concat(n,"?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(p,"/").concat(n,"/").concat(d,"?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),g=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(p,"/").concat(n,"/").concat(f,"?api_key=").concat(i));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),m=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("".concat(s,"?api_key=").concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=cast.8c050fb6.chunk.js.map