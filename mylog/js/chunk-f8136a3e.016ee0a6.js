(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8136a3e"],{"33d2":function(t,e,i){},9281:function(t,e,i){"use strict";i.r(e);var c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"article"},[i("ul",t._l(t.articleShow,(function(e,c){return i("li",{key:c,staticClass:"articlebox",on:{click:function(i){return t.toArticles(e)}}},[i("div",{staticClass:"left"},[i("h1",{staticClass:"tittle"},[t._v(t._s(e.title))]),i("p",{staticClass:"content"},[t._v(t._s(e.description))])])])})),0)])},s=[],n={name:"Article",computed:{articleShow:function(){return this.$store.state.articlesTitle}},created:function(){this.$store.dispatch("getArticleTitle")},methods:{toArticles:function(t){this.$router.push({path:"/blog/articles/".concat(t.id)})}}},a=n,l=(i("f6e9"),i("2877")),r=Object(l["a"])(a,c,s,!1,null,"43739baf",null);e["default"]=r.exports},f6e9:function(t,e,i){"use strict";var c=i("33d2"),s=i.n(c);s.a}}]);
//# sourceMappingURL=chunk-f8136a3e.016ee0a6.js.map