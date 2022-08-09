(this["webpackJsonpOpenStreetMap Localization"]=this["webpackJsonpOpenStreetMap Localization"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},119:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),s=n(24),o=n.n(s),c=(n(91),n(19)),r=n(14),u=n(8),l=n(6),h=n(16),d=n(17),g=n(73),m=n(85),f=n(84),b=n(30),j=n(128),p=n(130),v=n(129),O=n(126),y=function(e){return[e.lat,e.lng]};function k(e){var t=e.onLoad,n=e.onMove,a=e.onClick,i=e.center,s=e.zoom,o=Object(O.a)(),c=o.getCenter();return c.lat===i[0]&&c.lng===i[1]||o.flyTo(i,s),Object(O.b)({moveend:function(){var e=o.getCenter();n({bbox:Object.values(o.getBounds()).map(y),center:y(e),zoom:o.getZoom()})},click:function(){a()}}),t({bbox:Object.values(o.getBounds()).map(y)}),null}var x=n(127),C=n(22),w=n.n(C),S=(n(92),n(93),n(94),n(95),function(e,t,n){return w.a.AwesomeMarkers.icon({icon:e,prefix:"fa",markerColor:t,className:"awesome-marker awesome-marker-"+n})}),I=function(e){var t=e.type,n=e.shape,a=e.color;return{icon:S(t,void 0===a?"blue":a,n),touched:S(t,"orange",n),focused:S(t,"red",n)}},L=I({type:"circle"}),T=[{cat:"tourism",tag:["hotel","hostel"],iconType:"hotel"},{cat:"place",tag:["city","town","neighborhood"],iconType:"city"},{cat:"place",tag:["village","hamlet"],iconType:"home"},{cat:"aeroway",iconType:"plane"},{cat:"shop",iconType:"store"},{cat:"historic",iconType:"monument"},{cat:"leisure",iconType:"futbol"},{cat:"tourism",iconType:"compass"},{cat:"highway",iconType:"road"},{cat:"building",iconType:"building"},{cat:"natural",iconType:"tree"},{cat:"waterway",iconType:"water"}].map((function(e){return Object(l.a)(Object(l.a)({},e),I({type:e.iconType}))})),z=function(e,t,n){return(T.find((function(t){return!t.tag&&e[t.cat]||e.tags[t.cat]&&-1!==e.tags[t.cat].indexOf(t.tag)}))||L)[n?"focused":t?"touched":"icon"]},M=n(1);function U(e){var t=e.item,n=e.touched,i=e.focused,s=e.position,o=e.onClick,c=Object(a.useRef)(null),r=Object(a.useMemo)((function(){return{click:o}}),[o]);return Object(M.jsx)(x.a,{position:s,icon:z(t,n,i),eventHandlers:r,ref:c})}var N=Object(l.a)(Object(l.a)({},{tileUrl:"https://tile.tracestrack.com/en/{z}/{x}/{y}.png?key=ad185d84befbbb5463e093c682930866",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),{},{minZoom:3,maxZoom:19}),F=function(e){return[(t=e.center||e).lat,t.lon];var t};var _=function(e){var t=e.center,n=e.zoom,a=e.items,i=e.touched,s=e.lang,o=void 0===s?"en":s,c=e.focused,r=e.handlers,u=r.onMove,l=r.onLoad,h=r.onClickItem,d=r.onClickMap,g=N.tileUrl;return N.addLang&&(g+="?lang="+o),Object(M.jsxs)(j.a,{center:t,zoom:n,scrollWheelZoom:!0,minZoom:N.minZoom,maxZoom:N.maxZoom,children:[Object(M.jsx)(p.a,{attribution:N.attribution,url:g,minZoom:N.minZoom,maxZoom:N.maxZoom}),Object(M.jsx)(k,{center:t,zoom:n,onMove:u,onLoad:l,onClick:d}),a.map((function(e){return Object(M.jsx)(U,{item:e,position:F(e),touched:-1!==i.indexOf(e.id),focused:c===e.id,onClick:function(){return h(e.id)}},e.id)})),Object(M.jsx)(v.a,{})]})};function q(){return Object(M.jsxs)("div",{children:[Object(M.jsx)("h2",{children:"Welcome"}),Object(M.jsxs)("p",{children:["OpenStreetMap Localization Tool (OsmLT) is started by Tracestrack.com. It greately faciliates localizing OpenStreetMap. It is open sourced on ",Object(M.jsx)("a",{href:"https://github.com/tracestrack/openstreetmap-localization-tool",children:"Github"}),"."]}),Object(M.jsx)("p",{children:"Login with your OpenStreetMap account and start editing today!"})]})}var A=n(11),E=n(21),P=n(28),B=n(20),R=n(25);function J(e){var t=e.vkey,n=e.title,a=e.onChange,i=e.checked;return Object(M.jsxs)(A.a,{className:"btn d-flex",variant:i?"primary":"outline-primary",size:"sm",onClick:function(){return a(t)},children:[n,Object(M.jsx)(R.a,{checked:i,onChange:function(){return a(t)}})]})}var Z=function(e){var t=e.itemsList,n=e.selected,i=e.onChange,s=e.min,o=void 0===s?0:s,c=e.Checkbox,r=void 0===c?J:c;return Object(M.jsx)(a.Fragment,{children:t.map((function(e){var t=e.key,a=e.title;return Object(M.jsx)(r,{vkey:t,title:a,checked:-1!==n.indexOf(t),onChange:function(){return i(function(e,t,n){var a=e.indexOf(t);return-1===a?[].concat(Object(B.a)(e),[t]):e.length<=n?e:[].concat(Object(B.a)(e.slice(0,a)),Object(B.a)(e.slice(a+1)))}(n,t,o))}},t)}))})},D=n(77),H=n(63);function K(e){var t=e.vkey,n=e.title,a=e.onChange,i=e.checked;return Object(M.jsxs)(H.a.Item,{onMouseDown:function(e){return a(t)},onClick:function(e){return e.stopPropagation()},active:i,children:[n,Object(M.jsx)(R.a,{checked:i,onMouseDown:function(e){return a(t)},onChange:function(){}})]})}function Q(e){var t=e.title,n=e.itemsList,i=e.selected,s=e.onChange,o=e.min,c=Object(a.useState)(!1),r=Object(u.a)(c,2),l=r[0],h=r[1];Object(a.useEffect)((function(){if(l)var e=document.addEventListener("click",(function(){h(!1),document.removeEventListener("click",e)}))}),[l]);return Object(M.jsx)(D.a,{title:t,show:l,onClick:function(e){h(!l),e.preventDefault(),e.stopPropagation()},variant:"outline-primary",children:Object(M.jsx)(Z,{Checkbox:K,itemsList:n,selected:i,rootCloseEvent:"mousedown",onChange:s,min:o})})}var G=n(78),V=["title","onClick","loading","disabled"];function W(e){var t=e.title,n=e.onClick,a=e.loading,i=e.disabled,s=Object(r.a)(e,V);return Object(M.jsxs)(A.a,Object(l.a)(Object(l.a)({disabled:i||a,onClick:n},s),{},{children:[t,a?Object(M.jsx)(G.a,{as:"span",animation:"border",size:"sm",className:"spinner-border ml-2"}):null]}))}n(79),n(68),n(61);n(100);var X=function(e){var t=e.filters,n=e.setFilter,i=(e.tagsList,e.languages),s=e.languagesList,o=e.getItems,c=e.disabled,r=e.loading,u=e.updateItems,l=e.setLanguages,h=Object(a.useCallback)((function(e){13===e.charCode&&o()}),[o]),d=Object(a.useCallback)((function(e){var t=e.target.innerText;console.log(t),n(t,(function(){o()}))}),[n,o]);return Object(M.jsxs)(E.a,{className:"item-filters",children:[Object(M.jsx)(Q,{title:"Choose Languages",itemsList:s,selected:i,onChange:l,min:1}),Object(M.jsxs)(E.a.Group,{controlId:"exampleForm.ControlInput1",children:[Object(M.jsx)(E.a.Label,{children:"Tag to search: "}),Object(M.jsx)(A.a,{variant:"outline-secondary",size:"sm",onClick:d,children:"place=city"}),Object(M.jsx)(A.a,{variant:"outline-secondary",size:"sm",onClick:d,children:"boundary"}),Object(M.jsx)(A.a,{variant:"outline-secondary",size:"sm",onClick:d,children:"leisure"}),Object(M.jsx)(A.a,{variant:"outline-secondary",size:"sm",onClick:d,children:"highway"}),Object(M.jsx)(A.a,{variant:"outline-secondary",size:"sm",onClick:d,children:"waterway"}),Object(M.jsx)(E.a.Control,{type:"text",value:t.tags,onChange:function(e){return n(e.target.value)},onKeyPress:h})]}),Object(M.jsxs)(P.a,{className:"d-flex justify-content-end",children:[Object(M.jsx)(W,{title:"Get names",variant:"primary",onClick:o,loading:r.items}),Object(M.jsx)(W,{title:"Update names",variant:"success",disabled:c.updates,onClick:u,loading:r.updates})]})]})},Y=n(80);function $(e){var t=e.languages,n=e.onClick,a=["Category","Name"].concat(Object(B.a)(t.map((function(e){return"Name:".concat(e)}))));return Object(M.jsx)("tr",{children:a.map((function(e){return Object(M.jsx)("th",{style:{cursor:"pointer"},onClick:function(){return n(e.toLowerCase())},children:e},e)}))})}var ee=n(69);function te(e){var t=e.item,n=e.category,i=e.languages,s=e.focused,o=e.handlers,c=o.onFocus,r=o.onBlur,u=o.onChange,l=o.onIconClick,h=Object(a.useRef)(null);return Object(a.useEffect)((function(){s&&0!==document.activeElement.id.indexOf(t.id+"")&&h.current.focus()}),[s,t]),Object(M.jsxs)("tr",{children:[Object(M.jsxs)("td",{className:"category",children:[Object(M.jsx)(ee.a,{variant:"info",children:n}),Object(M.jsx)("br",{}),Object(M.jsx)(ee.a,{variant:"light",children:t.tags[n]})]}),Object(M.jsxs)("td",{children:[t.tags.wikidata&&Object(M.jsx)("span",{children:Object(M.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://www.wikidata.org/wiki/".concat(t.tags.wikidata),children:t.tags.name})}),!t.tags.wikidata&&Object(M.jsx)("span",{children:t.tags.name}),Object(M.jsx)("i",{className:"fa fa-crosshairs icon-btn mt-1",style:{float:"right"},onClick:function(){return l(t)}})]}),i.map((function(e,n){return Object(M.jsx)("td",{children:Object(M.jsx)("input",{type:"text",id:t.id+e,ref:n?null:h,value:t.tags["name:".concat(e)]||"",onChange:function(n){return u(t,e,n.target.value)},onFocus:function(){return s?null:c(t.id)},onBlur:function(){return s?r(t.id):null}})},e)}))]})}n(101);var ne=function(e,t,n){return"category"===n?function(e,t){return e.category.localeCompare(t.caterory)||it.item.tags[e.category].localeCompare(t.item.tags[t.category])}(e,t):function(e,t,n){return(e.tags[n]||"").localeCompare(t.tags[n]||"")}(e.item,t.item,n)};var ae=function(e){var t=e.languages,n=e.handlers,i=e.items,s=e.focused,o=e.categories,c=Object(a.useState)("name"),r=Object(u.a)(c,2),l=r[0],h=r[1],d=Object(a.useState)(1),g=Object(u.a)(d,2),m=g[0],f=g[1];return Object(M.jsx)(a.Fragment,{children:Object(M.jsxs)(Y.a,{size:"sm",children:[Object(M.jsx)("thead",{children:Object(M.jsx)($,{languages:t,onClick:function(e){e===l?f(-m):h(e)}})}),Object(M.jsx)("tbody",{children:i.filter((function(e){return e.tags.name})).map((function(e){return{item:e,category:o.find((function(t){return!!e.tags[t]}))}})).sort((function(e,t){return m*ne(e,t,l)})).map((function(e){var a=e.item,i=e.category;return Object(M.jsx)(te,{category:i,languages:t,item:a,focused:s===a.id,handlers:n},a.id)}))})]})})},ie=n(45),se=(n(102),n(81)),oe=n(82);function ce(e){var t=e.user,n=e.logout;return Object(M.jsxs)(a.Fragment,{children:[t.img?Object(M.jsx)(oe.a,{src:t.img.href,className:"avatar",thumbnail:!0,rounded:!0}):null,Object(M.jsx)(ie.a.Text,{className:"mx-2",children:t.display_name}),Object(M.jsx)(A.a,{onClick:n,children:"Logout"})]})}function re(e){var t=e.login,n=e.loading;return Object(M.jsx)(W,{title:"Login",loading:n,onClick:t})}var ue=function(e){var t=e.user,n=e.login,a=e.logout,i=e.loading;return Object(M.jsxs)(ie.a,{variant:"light",bg:"white",children:[Object(M.jsxs)(ie.a.Brand,{className:"mr-auto",children:["OSM Localization Tool (OsmLT)   ",Object(M.jsxs)("span",{className:"version",children:["v",se.version," by Tracestrack"]})]}),t.loggedIn?Object(M.jsx)(ce,{logout:a,user:t}):Object(M.jsx)(re,{login:n,loading:i})]})};function le(e){var t=e.changeset,n=e.handlers,i=(n.onUpdate,n.onClose),s=Object(a.useState)((null===t||void 0===t?void 0:t.tags.comment)||""),o=Object(u.a)(s,2),c=o[0],r=o[1];return Object(a.useEffect)((function(){r((null===t||void 0===t?void 0:t.tags.comment)||function(e){var t="; ".concat(document.cookie).split("; ".concat(e,"="));if(2===t.length)return t.pop().split(";").shift()}("lastComment")||"")}),[t]),Object(M.jsx)(b.a,{id:"changeset-box",className:"p-2",children:Object(M.jsxs)(b.a.Body,{children:[Object(M.jsxs)(P.a,{className:"pb-2 justify-content-center",children:[Object(M.jsx)(E.a.Label,{children:"Comment:"}),Object(M.jsx)(E.a.Control,{as:"textarea",value:c,onChange:function(e){return r(e.target.value)}})]}),Object(M.jsx)(P.a,{className:"justify-content-center",children:Object(M.jsx)(A.a,{className:"m-1",onClick:function(){return i({comment:c})},children:"Close changeset"})})]})})}n(103);var he=function(e){var t=e.changeset,n=e.handlers,i=Object(a.useState)(),s=Object(u.a)(i,2),o=s[0],c=s[1];return Object(a.useEffect)((function(){t||c(!1)}),[t]),Object(M.jsxs)("div",{id:"changeset",children:[Object(M.jsx)(A.a,{id:"changeset-button",onClick:function(){return c(!o)},disabled:!t,children:t?"Active changeset: ".concat(t.id):"No active changeset"}),o?Object(M.jsx)(le,{changeset:t,handlers:n}):null]})},de=n(83),ge=n.n(de),me="https://overpass-api.de/api/interpreter",fe="qt body meta center",be=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(h.a)(this,e),this.apiUrl=t.apiUrl||me}return Object(d.a)(e,[{key:"request",value:function(e){var t=this,n=new FormData;n.append("data",e);var a=performance.now();return this.reqId=a,new Promise((function(e,i){fetch(t.apiUrl,{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=utf-8"},body:new URLSearchParams(n)}).then((function(n){return n.ok?n.json().then((function(n){var s=n.elements,o=n.remark;t.reqId!==a?i():(o&&-1!==o.indexOf("error")&&i(o),e(s))})):n.text().then(i)})).catch((function(e){return i(e)}))}))}},{key:"query",value:function(e){var t=e.bbox,n=(e.zoom,e.center,e.filters),a=e.languages,i=n.tags;i.indexOf("=")>-1&&(i=i.replace("=",'"="'));var s=['nwr["'.concat(i,'"]["name"]')],o=n.hideFilled?s.map((function(e){return a.map((function(t){return"".concat(e,'[!"name:').concat(t,'"]')})).join(";\n")})):s.join(";\n"),c=n.limit?" "+n.limit:"",r="[out:json][timeout:25][bbox:".concat(t.join(","),"];\n            (\n                ").concat(o,";\n            );\n            out ").concat(fe," ").concat(c,";");return this.request(r)}},{key:"getById",value:function(e){var t=e.map((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return"".concat(n,"(").concat(a,")")})).join(";"),n="[out:json][timeout:25];\n        (\n            ".concat(t,";\n        );\n        out ").concat(fe,";");return this.request(n)}}]),e}(),je="https://nominatim.openstreetmap.org",pe=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(h.a)(this,e),this.apiUrl=t.apiUrl||je}return Object(d.a)(e,[{key:"query",value:function(e){var t=this,n=(e.bbox,e.filters),a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],i="simple"===n.searchMode?["q="+n.search.q]:Object.entries(n.search).filter((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return"q"!==n&&!!a})).map((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return"".concat(n,"=").concat(a)})),s=[].concat(Object(B.a)(i),["limit="+Math.min(n.limit,50),"format=json","bounded=1","dedupe=1"]);a.length&&s.push("exclude_place_ids="+a.join(","));var o=performance.now();return this.reqId=o,new Promise((function(e,n){fetch(t.apiUrl+"/search?"+s.join("&")).then((function(a){return a.ok?a.json().then((function(a){a.error&&n(a),t.reqId!==o?n():e(a)})):a.text().then(n)})).catch((function(e){return n(e)}))}))}}]),e}(),ve=["type","tags","nodes","members"],Oe=["method","body","headers"],ye="OSM Localization Tool (OsmLT): https://localize.osm.tracestrack.com",ke={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&apos;"};function xe(e){return Object.entries(e).map((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1],i=[],s="";Object.entries(a).forEach((function(e){var t,n=Object(u.a)(e,2),a=n[0],o=n[1];if(Array.isArray(o)){var r=a.replace(/s$/,"");s+=o.map((function(e){return xe(Object(c.a)({},r,e))})).join("")}else"object"===typeof o?s+=xe(Object(c.a)({},a,o)):i.push([a,(t=o,"string"!==typeof t?t:t.replace(/[<>&"']/g,(function(e){return ke[e]})))])}));var o=i.map((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return"".concat(n,'="').concat(a,'"')})).join(" ");return s?"<".concat(n," ").concat(o,">").concat(s,"</").concat(n,">"):"<".concat(n," ").concat(o,"/>")})).join("")}function Ce(e){return xe({osm:{changeset:{tags:Object.entries(e.tags).map((function(e){var t=Object(u.a)(e,2);return{k:t[0],v:t[1]}}))}}})}function we(e,t){return xe({osmChange:{version:"0.6",generator:ye,modify:Object.values(e).map((function(e){var n=e.type,a=e.tags,i=e.nodes,s=e.members,o=Object(r.a)(e,ve);return Object(c.a)({},n,Object(l.a)(Object(l.a)(Object(l.a)({},o),{},{changeset:t,tags:Object.entries(a).map((function(e){var t=Object(u.a)(e,2);return{k:t[0],v:t[1]}}))},i?{nd:i.map((function(e){return{ref:e}}))}:{}),s?{members:s}:{}))}))}})}var Se=function(e){return e.map((function(e,t){return t%2?(e+180)%360-180:e%90}))},Ie=function(){function e(t){Object(h.a)(this,e),this.config=t,this.auth=ge()(Object(l.a)({},t)),this.overpass=new be({apiUrl:t.overpassApiUrl}),this.nominatim=new pe,this.apiRoute="/api/0.6",this.currentChangeset=t.changeset||!1}return Object(d.a)(e,[{key:"fetch",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.method,i=n.body,s=n.headers,o=void 0===s?{}:s,c=Object(r.a)(n,Oe);return new Promise((function(n,s){return t.auth.xhr({method:a||"GET",path:t.apiRoute+e,content:i,options:Object(l.a)({header:o},c)},(function(e,t){e?s(e):n(t)}))}))}},{key:"fetchJson",value:function(e,t){return this.fetch(e,t).then((function(e){return JSON.parse(e)}))}},{key:"authenticated",value:function(){return this.auth.authenticated()}},{key:"login",value:function(){var e=this;return new Promise((function(t){return e.auth.authenticate((function(e){t(e)}))}))}},{key:"logout",value:function(){this.auth.logout()}},{key:"getUser",value:function(){return this.fetchJson("/user/details.json")}},{key:"getElements",value:function(e){return"search"===(e=Object(l.a)(Object(l.a)({},e),{},{bbox:e.bbox.map(Se)})).filters.mode?this.nominatimIncSearch(e):this.overpass.query(e).then((function(e){return e}))}},{key:"nominatimIncSearch",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=e.filters.limit,i=n.map((function(e){return e.place_id}));return this.nominatim.query(e,i).then((function(e){return(n=[].concat(Object(B.a)(e),Object(B.a)(n))).length?(a&&e.length&&n.length,t.overpass.getById(n.map((function(e){return[e.osm_type,e.osm_id]})))):[]})).catch((function(e){if(console.log(e),n.length)return t.overpass.getById(n.map((function(e){return[e.osm_type,e.osm_id]})))}))}},{key:"getTwins",value:function(e,t){return this.overpass.getTwins(e,t)}},{key:"updateElements",value:function(e){var t=this;return this.currentChangeset?this.checkChangesetOpen().then((function(n){return n?t.updateChangeset(e):t.createChangeset().then((function(){return t.updateChangeset(e)}))})):this.createChangeset().then((function(){return t.updateChangeset(e)}))}},{key:"getChangesets",value:function(){return this.fetch("/changesets")}},{key:"getCurrentChangeset",value:function(){var e=this;return this.checkChangesetOpen().then((function(t){return t?e._getCurrentChangeset():e.createChangeset().then((function(){return e._getCurrentChangeset()}))}))}},{key:"_getCurrentChangeset",value:function(){return this.fetchJson("/changeset/".concat(this.currentChangeset,".json")).then((function(e){return e.elements[0]}))}},{key:"createChangeset",value:function(){var e=this;return this.fetch("/changeset/create",{method:"PUT",body:xe({osm:{changeset:[{tag:{k:"created_by",v:ye}},{tag:{k:"comment",v:""}}]}}),headers:{"Content-Type":"text/plain"}}).then((function(t){e.currentChangeset=t}))}},{key:"checkChangesetOpen",value:function(){return this.fetchJson("/changeset/".concat(this.currentChangeset,".json")).then((function(e){var t;return null===(t=e.elements)||void 0===t?void 0:t.pop().open}))}},{key:"closeChangeset",value:function(e,t){var n=this;this.fetch("/changeset/".concat(this.currentChangeset),{method:"PUT",body:Ce(e),headers:{"Content-Type":"text/plain"}}).then((function(){n.fetch("/changeset/".concat(n.currentChangeset,"/close"),{method:"PUT"}).then((function(){n.currentChangeset=!1,t()}))}))}},{key:"updateChangeset",value:function(e){return this.fetch("/changeset/".concat(this.currentChangeset,"/upload"),{method:"POST",body:we(e,this.currentChangeset),headers:{"Content-Type":"text/plain"}}).then((function(e){return Object.fromEntries(Array.from(e.children[0].children).map((function(e){return[e.getAttribute("new_id"),{version:+e.getAttribute("new_version")}]})))}))}}]),e}(),Le=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:31536e3;Object(h.a)(this,e),this.cookieDuration=t}return Object(d.a)(e,[{key:"get",value:function(e){var t=document.cookie.split(";").find((function(t){return-1!==t.indexOf(e+"=")}));return!!t&&t.replace(e+"=","").trim()}},{key:"write",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.cookieDuration,n=new Date(Date.now()+1e3*t).toUTCString();Object.entries(e).forEach((function(e){var t=Object(u.a)(e,2),a=t[0],i=t[1];document.cookie="".concat(a,"=").concat(i,"; path=/; expires=").concat(n)}))}},{key:"clear",value:function(){document.cookie.split(";").forEach((function(e){var t=e.split("=")[0];document.cookie="".concat(t,"=; path=/")}))}}]),e}(),Te=function(e,t){return t.find((function(t){return!e.tags["name:".concat(t)]}))},ze=function(){function e(){Object(h.a)(this,e),this.updates={},this.storageKey="osm-localizer_updated-items"}return Object(d.a)(e,[{key:"load",value:function(){if(window.localStorage){var e=localStorage.getItem(this.storageKey);e&&(this.updates=JSON.parse(e))}}},{key:"store",value:function(){window.localStorage&&localStorage.setItem(this.storageKey,JSON.stringify(this.updates))}},{key:"patchAndStore",value:function(e,t){for(var n in t)e[n]&&(e[n]=Object(l.a)(Object(l.a)({},e[n]),t[n]),this.updates[n]=e[n]);this.store()}},{key:"sync",value:function(e,t,n){for(var a=[],i=0,s=e.length;i<s;i++){var o=e[i].id;this.updates[o]?this.updates[o].version>e[i].version?t&&!Te(this.updates[o],n)||a.push(this.updates[o]):(delete this.updates[o],a.push(e[i])):a.push(e[i])}return this.store(),a}}]),e}(),Me=(n(118),n(119),Object(l.a)(Object(l.a)({},{oauth_consumer_key:"p2szywibtwHNFh1RZVNq21uCo9XBuUZvEwz0sYae",oauth_secret:"e2oP3FSVjFLEq3zgQylpYMVVX7QJUKcchJLh4Ksm",url:"https://www.openstreetmap.org"}),{},{overpassApiUrl:"https://overpass.kumi.systems/api/interpreter"})),Ue=[{key:"de",title:"Deutsch"},{key:"en",title:"English"},{key:"fr",title:"Fran\xe7ais"},{key:"ja",title:"\u65e5\u672c\u8a9e"},{key:"ru",title:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439"},{key:"zh-Hans",title:"\u7b80\u4f53\u4e2d\u6587"},{key:"zh-Hant",title:"\u7e41\u4f53\u4e2d\u6587"},{key:"zh",title:"\u4e2d\u6587"}],Ne=[{key:"amenity",title:"Amenity"},{key:"building",title:"Building"},{key:"highway",title:"Highway"},{key:"landuse",title:"Landuse"},{key:"leisure",title:"Leisure"},{key:"man_made",title:"Man-made"},{key:"natural",title:"Natural"},{key:"place",title:"Place"},{key:"public_transport",title:"Public transport"},{key:"railway",title:"Railway"},{key:"route",title:"Route"},{key:"tourism",title:"Tourism"},{key:"waterway",title:"Waterway"}],Fe=["q"],_e="_osm-localization_languages",qe="_osm-locatization_changeset",Ae=function(e){return e.center?[e.center.lat,e.center.lon]:[e.lat,e.lon]},Ee=function(e){Object(g.a)(n,e);var t=Object(m.a)(n);function n(e){var a;Object(h.a)(this,n),(a=t.call(this,e)).cookieManager=new Le,a.osmApi=new Ie(Object(l.a)(Object(l.a)({},Me),{},{changeset:a.cookieManager.get(qe)})),a.updatesStorage=new ze,a.updatesStorage.load();var i=a.parseURLPath(),s=i.zoom,o=i.center,c=a.parseURLQuery();return a.bbox=[],a.state={user:{loggedIn:!1},center:o,zoom:s,filters:c,items:[],itemsToUpdate:{},focusedItem:!1,watchFocus:!1,loading:{items:!1,updates:!1,auth:!1},serverMsg:{error:!1,text:""},changeset:null,lastReqTags:[]},a}return Object(d.a)(n,[{key:"parseURLPath",value:function(){var e=6,t=[0,0],n=window.location.hash.replace("#/","");if(n){var a=n.split("/"),i=Object(u.a)(a,3);e=+i[0],t=[+i[1],+i[2]]}return{zoom:e,center:t}}},{key:"parseURLQuery",value:function(){var e={tags:["place"],limit:100,hideFilled:!1,search:{q:"",street:"",city:"",county:"",state:"",country:"",postalcode:""},searchMode:"simple",mode:"tags"},t=window.location.search.replace("?","");if(t){var n=Object.fromEntries(t.split("&").map((function(e){return e.split("=")})));if(n.tags&&(e.tags=decodeURIComponent(n.tags)),n.search)try{var a=JSON.parse(decodeURI(n.search));for(var i in e.search)e.search[i]=a[i]||e.search[i],"q"!==i&&a[i]&&(e.searchMode="structured");n.tags||(e.mode="search")}catch(o){}if(n.limit){var s=parseInt(n.limit);isNaN(s)||(e.limit=s)}n.hide_filled&&(e.hideFilled=n.hide_filled&&0!==+n.hide_filled)}return e}},{key:"loadChangeset",value:function(){var e=this;this.osmApi.currentChangeset&&this.osmApi.getCurrentChangeset().then((function(t){console.log(t),e.setState({changeset:t})}))}},{key:"closeChangeset",value:function(e){var t=e.comment,n=Object(l.a)(Object(l.a)({},this.state.changeset),{},{tags:Object(l.a)(Object(l.a)({},this.state.changeset.tags),{},{comment:t})});""===n.tags.comment&&alert("Please add a commit message first."),console.log(n);var a=this;this.osmApi.closeChangeset(n,(function(){a.cookieManager.write({lastComment:t}),window.location.reload()}))}},{key:"updateLocation",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.state,n=t.zoom,a=Object(u.a)(t.center,2),i=a[0],s=a[1],o=t.filters,c=o.tags,l=o.limit,h=o.hideFilled,d=o.search,g=o.mode,m=o.searchMode,f=["/#",n,i.toFixed(4),s.toFixed(4)].join("/"),b=[];if("search"===g){var j=d.q,p=Object(r.a)(d,Fe),v="simple"===m?{q:j}:p;b.push("search=".concat(JSON.stringify(v)))}else b.push("tags=".concat(encodeURIComponent(c))),h&&b.push("hide_filled=1");l&&b.push("limit=".concat(l));var O="?"+b.join("&"),y=window.location.protocol+"//"+window.location.host+window.location.pathname+O+f;e?window.history.replaceState({searchQ:O,hash:f},"",y):window.history.pushState({searchQ:O,hash:f},"",y)}},{key:"componentDidMount",value:function(){this.osmApi.authenticated()&&this.getUser()}},{key:"setServerMsg",value:function(e){var t=this;console.log(e),this.setState({serverMsg:e});document.addEventListener("click",(function e(){document.removeEventListener("click",e),t.setState({serverMsg:{error:!1,text:""}})}))}},{key:"login",value:function(){var e=this;this.setState({loading:Object(l.a)(Object(l.a)({},this.state.loading),{},{auth:!0})}),this.osmApi.login().then((function(){e.getUser()}))}},{key:"getLanguages",value:function(){var e=this.cookieManager.get(_e);return!!e&&e.split("+")}},{key:"setLanguages",value:function(e){this.setState({user:Object(l.a)(Object(l.a)({},this.state.user),{},{languages:e})}),this.storeLanguages(e)}},{key:"storeLanguages",value:function(e){this.cookieManager.write(Object(c.a)({},_e,e.join("+")))}},{key:"getUser",value:function(){var e=this;this.osmApi.getUser().then((function(t){var n=e.getLanguages()||t.user.languages.filter((function(e){return Ue.find((function(t){return t.key===e}))}));e.setState({loading:Object(l.a)(Object(l.a)({},e.state.loading),{},{auth:!1}),user:Object(l.a)(Object(l.a)({loggedIn:!0},t.user),{},{languages:n})}),e.storeLanguages(n),e.loadChangeset()}))}},{key:"logout",value:function(){this.osmApi.logout(),this.setState({user:{loggedIn:!1}})}},{key:"getItems",value:function(){var e=this;this.setState({loading:Object(l.a)(Object(l.a)({},this.state.loading),{},{items:!0})}),this.osmApi.getElements({center:this.state.center,zoom:this.state.zoom,bbox:this.bbox,filters:this.state.filters,languages:this.state.user.languages}).then((function(t){e.setState({items:e.updatesStorage.sync(t,e.state.filters.hideFilled,e.state.user.languages),itemsToUpdate:{},loading:Object(l.a)(Object(l.a)({},e.state.loading),{},{items:!1}),lastReqTags:"search"===e.state.filters.mode?Ne.map((function(e){return e.key})):e.state.filters.tags.slice()})})).catch((function(t){console.log(t),e.setState({loading:Object(l.a)(Object(l.a)({},e.state.loading),{},{items:!1})}),e.setServerMsg({text:t,error:!0})}))}},{key:"updatePosition",value:function(e){var t=this,n=e.bbox,a=e.center,i=e.zoom;this.setState({center:a,zoom:i},(function(){return t.updateLocation(!0)})),this.bbox=n}},{key:"updateBbox",value:function(e){var t=e.bbox;this.bbox=t}},{key:"updateItem",value:function(e,t,n){e.tags["name:".concat(t)]=n,this.setState({itemsToUpdate:Object(l.a)(Object(l.a)({},this.state.itemsToUpdate),{},Object(c.a)({},e.id,e))})}},{key:"setFilter",value:function(e,t){var n=this;console.log(e),this.setState({filters:Object(l.a)(Object(l.a)({},this.state.filters),{tags:e})},(function(){n.updateLocation(),t&&t()}))}},{key:"updateItems",value:function(){var e=this;this.setState({loading:Object(l.a)(Object(l.a)({},this.state.loading),{},{updates:!0})});var t=this.state.itemsToUpdate;console.log(t),this.osmApi.updateElements(t).then((function(t){e.updatesStorage.patchAndStore(e.state.itemsToUpdate,t),e.cookieManager.write(Object(c.a)({},qe,e.osmApi.currentChangeset)),e.setServerMsg({text:"Items are successfully updated.",error:!1}),e.setState({itemsToUpdate:{},loading:Object(l.a)(Object(l.a)({},e.state.loading),{},{updates:!1})}),e.loadChangeset()})).catch((function(t){e.setServerMsg({text:String.toString(t),error:!0}),e.setState({loading:Object(l.a)(Object(l.a)({},e.state.loading),{},{updates:!1})})}))}},{key:"focusItem",value:function(e){if(this.state.watchFocus){var t=this.state.items.find((function(t){return t.id===e}));this.setState({center:Ae(t),focusedItem:e})}else this.setState({focusedItem:e})}},{key:"blurItem",value:function(){this.setState({focusedItem:!1})}},{key:"centerItem",value:function(e){this.setState({center:Ae(e),zoom:Math.max(this.state.zoom,14)})}},{key:"render",value:function(){var e={items:this.state.loading.updates||("tags"===this.state.filters.mode?this.state.zoom<10:!("simple"===this.state.filters.searchMode?this.state.filters.search.q:Object.entries(this.state.filters.search).find((function(e){var t=Object(u.a)(e,2),n=t[0],a=t[1];return"q"!==n&&!!a})))),updates:!Object.keys(this.state.itemsToUpdate).length},t=Object.keys(this.state.itemsToUpdate).map((function(e){return+e})),n={onLoad:this.updateBbox.bind(this),onMove:this.updatePosition.bind(this),onClickItem:this.focusItem.bind(this),onClickMap:this.blurItem.bind(this)},i={onFocus:this.focusItem.bind(this),onBlur:this.blurItem.bind(this),onChange:this.updateItem.bind(this),onIconClick:this.centerItem.bind(this)},s={onClose:this.closeChangeset.bind(this)},o=this.state.user.languages?this.state.user.languages[0]:"en",c=Ne.map((function(e){return e.key}));return Object(M.jsxs)(f.a,{className:"App",fluid:!0,children:[Object(M.jsx)(ue,{login:this.login.bind(this),logout:this.logout.bind(this),user:this.state.user,loading:this.state.loading.auth}),Object(M.jsx)(_,{zoom:this.state.zoom,center:this.state.center,items:this.state.items,lang:o,touched:t,focused:this.state.focusedItem,watchFocus:this.state.watchFocus,handlers:n}),Object(M.jsx)(b.a,{className:"card-items card p-1",children:this.state.user.loggedIn?Object(M.jsxs)(a.Fragment,{children:[Object(M.jsxs)(b.a.Header,{children:[Object(M.jsx)(X,{filters:this.state.filters,setFilter:this.setFilter.bind(this),tagsList:Ne,loading:this.state.loading,languages:this.state.user.languages||[],languagesList:Ue,setLanguages:this.setLanguages.bind(this),items:this.state.items,getItems:this.getItems.bind(this),disabled:e,updateItems:this.updateItems.bind(this)}),Object(M.jsx)("div",{className:this.state.serverMsg.error?"text-danger":"text-success",children:this.state.serverMsg.text})]}),Object(M.jsx)(b.a.Body,{className:this.state.loading.items?"items-loading":"",children:Object(M.jsx)(ae,{categories:c,languages:this.state.user.languages||[],items:this.state.items,focused:this.state.focusedItem,handlers:i})})]}):Object(M.jsx)(b.a.Body,{className:"d-flex align-items-center justify-content-center",children:Object(M.jsx)(q,{})})}),Object(M.jsx)(he,{changeset:this.state.changeset,handlers:s})]})}}]),n}(a.Component),Pe=Ee,Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,131)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),i(e),s(e),o(e)}))};o.a.render(Object(M.jsx)(i.a.StrictMode,{children:Object(M.jsx)(Pe,{})}),document.getElementById("root")),Be()},81:function(e){e.exports=JSON.parse('{"name":"OpenStreetMap Localization","version":"0.1.14","private":true,"homepage":"/","dependencies":{"@fortawesome/fontawesome-free":"^5.15.2","@react-leaflet/core":">=1.0.0 <1.1.0 || ^1.1.1","@testing-library/jest-dom":"^5.11.6","@testing-library/react":"^11.2.2","@testing-library/user-event":"^12.2.2","bootstrap":"^4.6.0","history":"^5.0.0","leaflet":"^1.7.1","leaflet.awesome-markers":"^2.0.5","osm-auth":"^1.1.0","react":"^17.0.2","react-bootstrap":"^1.4.3","react-dom":"^17.0.2","react-leaflet":"^3.2.5","react-scripts":"4.0.1","web-vitals":"^0.2.4"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":["react-app","react-app/jest"]},"browserslist":[">0.2%","not dead","not op_mini all"],"devDependencies":{"@types/leaflet":"^1.5.19"}}')},91:function(e,t,n){}},[[120,1,2]]]);
//# sourceMappingURL=main.b3485adb.chunk.js.map