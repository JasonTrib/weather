(this["webpackJsonpreact-weather"]=this["webpackJsonpreact-weather"]||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},149:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(11),i=n.n(a),c=(n(102),n(103),n(8)),l=n(13),s=n(66),d=n.n(s),u=n(82),b=n(83),j=n.n(b),p=function(e){var t=Object(o.useState)(null),n=Object(c.a)(t,2),r=n[0],a=n[1],i=Object(o.useState)(null),l=Object(c.a)(i,2),s=l[0],b=l[1],p=Object(o.useState)(!1),g=Object(c.a)(p,2),x=g[0],m=g[1],h=Object(o.useState)({}),f=Object(c.a)(h,2),O=f[0],v=f[1],C=Object(o.useState)(""),y=Object(c.a)(C,2),B=y[0],w=y[1],S=Object(o.useCallback)(Object(u.a)(d.a.mark((function t(){var n,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get(e+B,O);case 3:n=t.sent,a(n),t.next=13;break;case 7:t.prev=7,t.t0=t.catch(0),o=t.t0.stack,b(o),a(null),console.error(o);case 13:m(!1);case 14:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,B,O]);return Object(o.useEffect)((function(){x&&S()}),[x,S]),[{response:r,error:s,isLoading:x},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};v(t),w(e),m(!0)}]},g=n(190),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"localStorage",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=r.a.useState((function(){try{var n=localStorage.getItem(e);return n?JSON.parse(n):t}catch(o){return console.log(o),t}})),o=Object(c.a)(n,2),a=o[0],i=o[1],l=function(t){try{var n=t instanceof Function?t(a):t;i(n),localStorage.setItem(e,JSON.stringify(n))}catch(o){console.log(o)}};return[a,l]},m=n(4),h=Object(o.createContext)(),f=["teal","pink"],O=function(e){var t=x("language","EN"),n=Object(c.a)(t,2),o=n[0],r=n[1],a=x("measurementsInMetric",!0),i=Object(c.a)(a,2),l=i[0],s=i[1],d=x("theme",f[0]),u=Object(c.a)(d,2),b=u[0],j=u[1],p=x("location",{city:null,country:null}),g=Object(c.a)(p,2),O=g[0],v=g[1];return Object(m.jsx)(h.Provider,{value:{lang:o,setLang:r,isMetric:l,setIsMetric:s,themes:f,colorTheme:b,setColorTheme:j,location:O,setLocation:v,OPENWEATHER_API_KEY:"b89977de37d4889c2867f0700af6e9c4"},children:e.children})},v=h,C=n(193),y=n(195),B=n(209),w=n(215),S=n(85),k=n.n(S),M=n(14),F=n.n(M),I=Object(g.a)((function(e){return{toolbar:{width:"100%",display:"flex",direction:"row",justifyContent:"flex-start",padding:"20px 0px",background:"linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)"},toolbarBtn:Object(l.a)({margin:"0px 10px",borderRadius:"20px",width:"64px",minWidth:"10px",color:"white",border:"1px solid rgba(255,255,255,0.2)",padding:"0px 0px",height:"40px","& .MuiButton-root":{transition:"none"}},e.breakpoints.up("sm"),{"&:hover":{border:"1px solid rgba(127,127,127,1)",background:function(e){return e.toolbarBtnBg}}}),langSelect:{"& .MuiSelect-root":{padding:"0px 10px 0px 0px"},"& .MuiSelect-icon":{color:"white"}},selectMenu:{}}})),E=["EN","EL","FR","GE","ES","PT","RU"],N=function(){var e=Object(o.useContext)(v),t=e.lang,n=e.setLang,r=e.isMetric,a=e.setIsMetric,i=e.themes,c=e.colorTheme,l=e.setColorTheme,s=Object(o.useMemo)((function(){return c===i[0]?{toolbarBtnBg:"linear-gradient(180deg, rgba(7,111,121,0.6) 0%, rgba(7,111,121,0.2) 100%)"}:c===i[1]?{toolbarBtnBg:"linear-gradient(180deg, rgba(87,7,42,0.6) 0%, rgba(87,7,42,0.2) 100%)"}:null}),[c,i]),d=I(s);return Object(m.jsxs)("div",{className:d.toolbar,children:[Object(m.jsx)(C.a,{"aria-label":"units",onClick:function(e){a((function(e){return!e}))},className:F()(d.toolbarBtn),children:r?"\xb0C":"\xb0F"}),Object(m.jsx)(C.a,{"aria-label":"theme",onClick:function(){var e=i.findIndex((function(e){return e===c}));e>=i.length-1?e=0:e+=1,l(i[e])},className:F()(d.toolbarBtn),children:Object(m.jsx)(k.a,{})}),Object(m.jsx)(y.a,{className:F()(d.formControl),children:Object(m.jsx)(B.a,{value:t,onChange:function(e){n(e.target.value)},displayEmpty:!0,disableUnderline:!0,className:F()(d.langSelect,d.toolbarBtn),inputProps:{"aria-label":"Without label"},children:E.map((function(e){return Object(m.jsx)(w.a,{className:d.selectMenu,value:e,children:e},e)}))})})]})},T=n.p+"static/media/tealbg.535bfa94.jpeg",z=n.p+"static/media/pinkbg.a2f0854d.jpeg",P=n(210),H=n(87),W=n.n(H),R=n(212),_=Object(g.a)((function(e){var t;return{inputContainer:{display:"flex",direction:"row"},cityField:{margin:"0 2px 0 0","& .MuiInputBase-root":{color:function(e){return e.inputColor},fontSize:"19px",letterSpacing:"0.03em"},"& .MuiInputBase-input":{padding:"10px 10px 8px",height:"30px",textTransform:"capitalize","&::placeholder":{color:function(e){return e.inputColor},opacity:.25}},"& .MuiFilledInput-root":{borderRadius:"0px",backgroundColor:function(e){return e.inputBgColor}},"& .MuiFilledInput-underline:before":{borderBottom:"none"},"& .MuiFilledInput-underline:after":{transition:"none",borderBottomStyle:"solid",borderBottomWidth:"2px",borderBottomColor:function(e){return e.inputBorderColor}}},countryCodeField:{"& .MuiInputBase-root":{width:"48px"},"& .MuiInputBase-input":{padding:"10px 0px 8px",textAlign:"center",textTransform:"uppercase"}},searchBtn:(t={borderRadius:"0",margin:"0px 0px 0px 4px",height:"48px",padding:"0px 0px",width:"72px",minWidth:"48px",color:"white",background:function(e){return e.searchBgColor}},Object(l.a)(t,e.breakpoints.up("sm"),{"&:hover":{background:function(e){return e.searchBgColorHover}}}),Object(l.a)(t,"& .MuiButton-contained",{boxShadow:"none"}),t)}})),A=function(e){var t=e.doFetch,n=Object(o.useContext)(v),r=n.lang,a=n.themes,i=n.colorTheme,c=n.OPENWEATHER_API_KEY,l=Object(o.useMemo)((function(){return i===a[0]?{inputColor:"white",inputBgColor:"rgba(186, 214, 224,0.2)",inputBorderColor:"#26c9b4",searchBgColor:"linear-gradient(45deg, rgba(7,111,121,0.6) 0%, rgba(19,157,171,0.6) 100%)",searchBgColorHover:"linear-gradient(45deg, rgba(7,111,121,0.8) 0%, rgba(19,157,171,0.8) 100%)"}:i===a[1]?{inputColor:"#57072a",inputBgColor:"rgba(87, 7, 42,0.2)",inputBorderColor:"#ff006f",searchBgColor:"linear-gradient(45deg, rgba(87,7,42,0.6) 0%, rgba(138,33,79,0.6) 100%)",searchBgColorHover:"linear-gradient(45deg, rgba(87,7,42,0.8) 0%, rgba(138,33,79,0.8) 100%)"}:null}),[i,a]),s=_(l),d=Object(o.useRef)(),u=Object(o.useRef)(),b=function(){var e=d.current.value.trim(),n=u.current.value.trim();e&&(d.current.value="",u.current.value="",t("weather?q=".concat(e).concat(n?","+n:"","&appid=").concat(c,"&units=metric&lang=").concat(r))),d.current.focus()},j=function(e){"Enter"===e.key&&b()};return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:s.inputContainer,children:[Object(m.jsx)(P.a,{variant:"filled",placeholder:"City",inputRef:d,onKeyPress:j,className:F()(s.cityField),style:{flex:" 1 1 80px"}}),Object(m.jsx)(R.a,{title:"country code",arrow:!0,placement:"bottom",children:Object(m.jsx)(P.a,{variant:"filled",placeholder:"CC",inputRef:u,onKeyPress:j,className:F()(s.cityField,s.countryCodeField),inputProps:{maxLength:2}})}),Object(m.jsx)(C.a,{"aria-label":"search",disableElevation:!0,className:F()(s.searchBtn),onClick:b,children:Object(m.jsx)(W.a,{})})]})})},D=n(211),L=n(202),K=n(213),q=n(88),J=n.n(q),Y=n(204),U=n(205),G=n(207),Q=n(203),V=n(206),X=n(200),Z=n(201),$=Object(g.a)((function(e){return{accordionHeading:{},accordion:{"&.MuiPaper-root":{backgroundColor:function(e){return e.accordionBgColor},boxShadow:"none"},"&.MuiAccordion-root":{},"&.Mui-expanded":{margin:"0px 0px"},"& .MuiAccordionSummary-root":{height:"48px",minHeight:"0px",color:function(e){return e.accordionSummaryColor}},"& .MuiAccordionDetails-root":{color:function(e){return e.accordionDetailsColor},backgroundColor:function(e){return e.accordionDetailsBgColor},padding:"10px 16px 10px",display:"block"}},accordionIcon:{color:function(e){return e.accordionIconColor}},table:{"& .MuiTableCell-root":{padding:"0px 0px 0px 0px",borderBottomColor:function(e){return e.tableBorderColor}},"& .MuiTableCell-body":{color:function(e){return e.tableColor},fontSize:"10px"}},tableContainer:{"&.MuiPaper-root":{backgroundColor:"transparent"},"&.MuiPaper-elevation1":{boxShadow:"none"}}}})),ee=function(e){var t=e.data,n=Object(o.useContext)(v),a=n.isMetric,i=n.themes,l=n.colorTheme,s=Object(o.useMemo)((function(){return l===i[0]?{accordionBgColor:"rgba(186, 214, 224,0.2)",accordionSummaryColor:"rgba(255,255,255,0.75)",accordionIconColor:"rgba(255,255,255,0.75)",accordionDetailsColor:"white",accordionDetailsBgColor:"rgba(186, 214, 224,0.25)",tableBorderColor:"rgba(255,255,255,0.5)",tableColor:"white"}:l===i[1]?{accordionBgColor:"rgba(87, 7, 42,0.2)",accordionSummaryColor:"#57072a",accordionIconColor:"#57072a",accordionDetailsColor:"black",accordionDetailsBgColor:"rgba(255, 255,255,0.2)",tableBorderColor:"rgba(0,0,0,0.25)",tableColor:"black"}:null}),[l,i]),d=$(s),u=r.a.useState(!1),b=Object(c.a)(u,2),j=b[0],p=b[1];function g(e,t){return{name:e,measurement:t}}var x,h=[g("Wind speed:",a?(null===t||void 0===t?void 0:t.wind.speed)+"m/sec":(2.237*(null===t||void 0===t?void 0:t.wind.speed)).toFixed(2)+"mph"),g("Humidity:",(null===t||void 0===t?void 0:t.main.humidity)+"%"),g("Temperature range:",(a?(null===t||void 0===t?void 0:t.main.temp_min.toFixed())+"\xb0C":(9*(null===t||void 0===t?void 0:t.main.temp_min)/5+32).toFixed()+"\xb0F")+"~"+(a?(null===t||void 0===t?void 0:t.main.temp_max.toFixed())+"\xb0C":(9*(null===t||void 0===t?void 0:t.main.temp_max)/5+32).toFixed()+"\xb0F")),g("Feels like:",a?(null===t||void 0===t?void 0:t.main.feels_like.toFixed())+"\xb0C":(9*(null===t||void 0===t?void 0:t.main.feels_like)/5+32).toFixed()+"\xb0F")];return Object(m.jsx)(m.Fragment,{children:t&&Object(m.jsx)("div",{style:{marginTop:"2px"},children:Object(m.jsxs)(D.a,{expanded:"panel1"===j,onChange:(x="panel1",function(e,t){p(!!t&&x)}),square:!0,className:F()(d.accordion),children:[Object(m.jsx)(K.a,{expandIcon:Object(m.jsx)(J.a,{className:F()(d.accordionIcon)}),"aria-controls":"panel1bh-content",id:"panel1bh-header",children:Object(m.jsx)(Z.a,{className:d.accordionHeading,children:"More details"})}),Object(m.jsx)(L.a,{children:Object(m.jsx)(Q.a,{component:X.a,className:d.tableContainer,children:Object(m.jsx)(Y.a,{className:F()(d.table),size:"small","aria-label":"details",children:Object(m.jsx)(U.a,{children:h.map((function(e){return Object(m.jsxs)(V.a,{children:[Object(m.jsx)(G.a,{component:"th",scope:"row",children:e.name}),Object(m.jsx)(G.a,{align:"right",children:e.measurement})]},e.name)}))})})})})]})})})},te=n(208),ne=n(32),oe=n(33),re=Object(g.a)((function(e){return{gridOuter:{backgroundColor:function(e){return e.gridBgColor},color:function(e){return e.gridColor}}}})),ae="6x",ie={Clear:Object(m.jsx)(ne.a,{icon:oe.f,size:ae}),Clouds:Object(m.jsx)(ne.a,{icon:oe.a,size:ae}),Rain:Object(m.jsx)(ne.a,{icon:oe.b,size:ae}),Snow:Object(m.jsx)(ne.a,{icon:oe.e,size:ae}),Haze:Object(m.jsx)(ne.a,{icon:oe.d,size:ae})},ce=function(e){var t,n,r=e.data,a=Object(o.useContext)(v),i=a.isMetric,l=a.themes,s=a.colorTheme,d=Object(o.useMemo)((function(){return s===l[0]?{gridColor:"white",gridBgColor:"rgba(186, 214, 224,0.2)"}:s===l[1]?{gridColor:"#57072a",gridBgColor:"rgba(87, 7, 42,0.2)"}:null}),[s,l]),u=re(d),b=Object(o.useState)(null),j=Object(c.a)(b,2),p=j[0],g=j[1],x=Object(o.useState)(!0),h=Object(c.a)(x,2),f=h[0],O=h[1],C=Object(o.useState)(null),y=Object(c.a)(C,2),B=y[0],w=y[1];return Object(o.useEffect)((function(){var e,t;"Clear"!==(null===r||void 0===r||null===(e=r.weather[0])||void 0===e?void 0:e.main)||f?w(ie[null===r||void 0===r||null===(t=r.weather[0])||void 0===t?void 0:t.main]):w(Object(m.jsx)(ne.a,{icon:oe.c,size:ae}))}),[f,null===r||void 0===r?void 0:r.weather]),Object(o.useEffect)((function(){var e,t=null===r||void 0===r?void 0:r.main.temp;t||0===t?g(null===(e=t=i?t:9*t/5+32)||void 0===e?void 0:e.toFixed()):g(null)}),[i,null===r||void 0===r?void 0:r.main.temp]),Object(o.useEffect)((function(){r&&(r.dt>r.sys.sunrise&&r.dt<r.sys.sunset?O(!0):O(!1))}),[r,null===r||void 0===r?void 0:r.dt,null===r||void 0===r?void 0:r.sys.sunrise,null===r||void 0===r?void 0:r.sys.sunset]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)(te.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:F()(u.gridOuter),children:[Object(m.jsx)(te.a,{item:!0,xs:6,children:Object(m.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"baseline"},children:[Object(m.jsx)(Z.a,{style:{fontSize:"4.25rem"},children:(p||0===p)&&p+"\xb0"||""}),Object(m.jsx)(Z.a,{style:{fontSize:"2.5rem"},children:p||0===p?i?"C":"F":null})]})}),Object(m.jsxs)(te.a,{item:!0,xs:6,container:!0,direction:"column",justify:"center",alignItems:"stretch",children:[Object(m.jsx)(te.a,{item:!0,style:{paddingTop:"10px"},children:B}),Object(m.jsx)(te.a,{item:!0,children:Object(m.jsx)(Z.a,{children:(null===r||void 0===r||null===(t=r.weather[0])||void 0===t?void 0:t.description)?null===r||void 0===r||null===(n=r.weather[0])||void 0===n?void 0:n.description:""})})]})]})})},le=n(89),se=n.n(le),de=Object(g.a)((function(e){return{refreshBtn:Object(l.a)({color:"white",width:"32px",height:"32px",position:"absolute",right:"0",bottom:"2px",borderRadius:0,transition:"none","&.MuiButton-root":{minWidth:"0"},background:function(e){return e.accordionBgColor},"&:hover":{background:function(e){return e.accordionBgColor}}},e.breakpoints.up("sm"),{"&:hover":{background:function(e){return e.searchBgColorHover}}}),citynameWrapper:{position:"relative",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"flex-end",paddingBottom:"20px",color:function(e){return e.citynameColor}}}})),ue=function(e){var t=e.data,n=e.doFetch,r=Object(o.useContext)(v),a=r.lang,i=r.themes,c=r.colorTheme,l=r.OPENWEATHER_API_KEY,s=Object(o.useMemo)((function(){return c===i[0]?{searchBgColorHover:"linear-gradient(45deg, rgba(7,111,121,0.8) 0%, rgba(19,157,171,0.8) 100%)",citynameColor:"white",accordionBgColor:"rgba(186, 214, 224,0.2)"}:c===i[1]?{searchBgColorHover:"linear-gradient(45deg, rgba(87,7,42,0.8) 0%, rgba(138,33,79,0.8) 100%)",citynameColor:"#57072a",accordionBgColor:"rgba(87, 7, 42,0.2)"}:null}),[c,i]),d=de(s);return Object(m.jsxs)("div",{className:F()(d.citynameWrapper),children:[Object(m.jsx)(Z.a,{style:{fontSize:"2rem"},children:(null===t||void 0===t?void 0:t.name)||""}),Object(m.jsx)(Z.a,{style:{fontSize:"1rem"},children:t?Object(m.jsxs)(m.Fragment,{children:["\xa0",t.sys.country]}):""}),(null===t||void 0===t?void 0:t.name)&&Object(m.jsx)(C.a,{"aria-label":"refresh",onClick:function(){n("weather?q=".concat(null===t||void 0===t?void 0:t.name,",").concat(null===t||void 0===t?void 0:t.sys.country,"&appid=").concat(l,"&units=metric&lang=").concat(a))},className:F()(d.refreshBtn),children:Object(m.jsx)(se.a,{})})]})},be=n(90),je=n.n(be),pe=Object(g.a)((function(e){return{message:{fontSize:"30px",color:function(e){return e.messageColor}}}})),ge=function(e){var t=e.data,n=e.isLoading,r=Object(o.useContext)(v),a=r.themes,i=r.colorTheme,c=Object(o.useMemo)((function(){return i===a[0]?{messageColor:"white"}:i===a[1]?{messageColor:"#57072a"}:null}),[i,a]),l=pe(c);return Object(m.jsxs)("div",{style:{height:"100px",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"flex-end"},children:[!t&&!n&&Object(m.jsx)(Z.a,{className:F()(l.message),children:Object(m.jsx)("i",{children:"No weather data"})}),Object(m.jsx)(je.a,{type:"Oval",color:(a[0],"#23b0db"),height:80,width:80,visible:n,style:{height:"80px"}})]})},xe=Object(g.a)((function(e){var t;return{cardWrapper:(t={height:"100vh",maxHeight:"750px"},Object(l.a)(t,e.breakpoints.down("xs"),{width:"100%"}),Object(l.a)(t,"backgroundSize","cover"),Object(l.a)(t,"backgroundImage",(function(e){return e.backgroundImage})),t),contentWrapper:{display:"flex",flexDirection:"column",padding:"10px 10px 10px 10px"}}})),me=function(){var e=Object(o.useContext)(v),t=e.lang,n=e.themes,r=e.colorTheme,a=e.location,i=e.setLocation,l=e.OPENWEATHER_API_KEY,s=Object(o.useMemo)((function(){return r===n[0]?{backgroundImage:"url(".concat(T,")")}:r===n[1]?{backgroundImage:"url(".concat(z,")")}:null}),[r,n]),d=xe(s),u=p("https://api.openweathermap.org/data/2.5/"),b=Object(c.a)(u,2),j=b[0],g=j.response,x=(j.error,j.isLoading),h=b[1],f=Object(o.useState)(null),O=Object(c.a)(f,2),C=O[0],y=O[1],B=Object(o.useState)(!0),w=Object(c.a)(B,2),S=w[0],k=w[1];return Object(o.useEffect)((function(){S&&a.city&&(k(!1),h("weather?q=".concat(a.city).concat(a.country?","+a.country:"","&appid=").concat(l,"&units=metric&lang=").concat(t)))}),[h,S,t,null===a||void 0===a?void 0:a.city,null===a||void 0===a?void 0:a.country,l]),Object(o.useEffect)((function(){g&&y(g.data)}),[g]),Object(o.useEffect)((function(){(null===C||void 0===C?void 0:C.name)===a.city&&(null===C||void 0===C?void 0:C.sys.country)===a.country||i({city:null===C||void 0===C?void 0:C.name,country:null===C||void 0===C?void 0:C.sys.country})}),[i,null===C||void 0===C?void 0:C.name,null===C||void 0===C?void 0:C.sys.country,a.city,a.country]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:F()(d.cardWrapper),children:[Object(m.jsx)(N,{}),Object(m.jsxs)("div",{className:F()(d.contentWrapper),children:[Object(m.jsx)(A,{doFetch:h}),Object(m.jsx)(ge,{data:C,isLoading:x}),Object(m.jsx)(ue,{data:C,doFetch:h}),Object(m.jsx)(ce,{data:C}),Object(m.jsx)(ee,{data:C})]})]})})};var he=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(O,{children:Object(m.jsx)(me,{})})})};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(he,{})}),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.0a68fe57.chunk.js.map