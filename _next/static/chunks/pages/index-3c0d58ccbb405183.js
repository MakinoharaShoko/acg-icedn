(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4092)}])},4092:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return J}});var o,r,s,i,a,c,u,l,d,h,m,v,f,p,g,j,y,b,x,_,q,E,T,I,V,B,C=n(5893),A=n(9008),G=n.n(A),k=n(7294);let S=e=>{let{front:t,back:n}=e,[o,r]=(0,k.useState)(!1),s=()=>{r(!o)};return(0,C.jsx)("div",{className:"flip-card",onClick:s,children:(0,C.jsxs)("div",{className:"flip-card-inner ".concat(o?"flipped":""),children:[(0,C.jsx)("div",{className:"flip-card-front",children:t}),(0,C.jsx)("div",{className:"flip-card-back",children:n})]})})};var P=n(9734),D=n(6154);(o=p||(p={}))[o.Value1=1]="Value1",o[o.Value2=2]="Value2",o[o.Value3=3]="Value3",o[o.Value4=4]="Value4",o[o.Value6=6]="Value6",(r=g||(g={}))[r.Value0=0]="Value0",r[r.Value1=1]="Value1",r[r.Value2=2]="Value2",r[r.Value3=3]="Value3",r[r.Value4=4]="Value4",r[r.Value5=5]="Value5",r[r.Value6=6]="Value6",(s=j||(j={}))[s.Value1=1]="Value1",s[s.Value2=2]="Value2",s[s.Value3=3]="Value3",s[s.Value4=4]="Value4",s[s.Value5=5]="Value5",s[s.Value8=8]="Value8",s[s.Value9=9]="Value9",s[s.Value10=10]="Value10",s[s.Value11=11]="Value11",(i=y||(y={}))[i.Admin=1]="Admin",i[i.BangumiAdmin=2]="BangumiAdmin",i[i.DoujinAdmin=3]="DoujinAdmin",i[i.MutedUser=4]="MutedUser",i[i.BlockedUser=5]="BlockedUser",i[i.PersonAdmin=8]="PersonAdmin",i[i.WikiAdmin=9]="WikiAdmin",i[i.User=10]="User",i[i.WikiUser=11]="WikiUser",(a=b||(b={}))[a.A=1]="A",a[a.B=2]="B",a[a.AB=3]="AB",a[a.O=4]="O",(c=x||(x={}))[c.Character=1]="Character",c[c.Mechanic=2]="Mechanic",c[c.Ship=3]="Ship",c[c.Organization=4]="Organization",(u=_||(_={}))[u.Wish=1]="Wish",u[u.Done=2]="Done",u[u.Doing=3]="Doing",u[u.OnHold=4]="OnHold",u[u.Dropped=5]="Dropped",(l=q||(q={}))[l.Value1=1]="Value1",l[l.Value2=2]="Value2",l[l.Value3=3]="Value3",(d=E||(E={}))[d.MainStory=0]="MainStory",d[d.SP=1]="SP",d[d.OP=2]="OP",d[d.ED=3]="ED",d[d.PV=4]="PV",d[d.MAD=5]="MAD",d[d.Other=6]="Other",(h=T||(T={})).Producer="producer",h.Mangaka="mangaka",h.Artist="artist",h.Seiyu="seiyu",h.Writer="writer",h.Illustrator="illustrator",h.Actor="actor",(m=I||(I={}))[m.Individual=1]="Individual",m[m.Corporation=2]="Corporation",m[m.Association=3]="Association",(v=V||(V={}))[v.Book=1]="Book",v[v.Anime=2]="Anime",v[v.Music=3]="Music",v[v.Game=4]="Game",v[v.Real=6]="Real",(f=B||(B={})).Json="application/json",f.FormData="multipart/form-data",f.UrlEncoded="application/x-www-form-urlencoded",f.Text="text/plain";class N{mergeRequestParams(e,t){let n=e.method||t&&t.method;return{...this.instance.defaults,...e,...t||{},headers:{...n&&this.instance.defaults.headers[n.toLowerCase()]||{},...e.headers||{},...t&&t.headers||{}}}}stringifyFormItem(e){return"object"==typeof e&&null!==e?JSON.stringify(e):"".concat(e)}createFormData(e){return Object.keys(e||{}).reduce((t,n)=>{let o=e[n];for(let e of o instanceof Array?o:[o]){let o=e instanceof Blob||e instanceof File;t.append(n,o?e:this.stringifyFormItem(e))}return t},new FormData)}constructor({securityWorker:e,secure:t,format:n,...o}={}){this.securityData=null,this.setSecurityData=e=>{this.securityData=e},this.request=async e=>{let{secure:t,path:n,type:o,query:r,format:s,body:i,...a}=e,c=("boolean"==typeof t?t:this.secure)&&this.securityWorker&&await this.securityWorker(this.securityData)||{},u=this.mergeRequestParams(a,c),l=s||this.format||void 0;return o===B.FormData&&i&&null!==i&&"object"==typeof i&&(i=this.createFormData(i)),o===B.Text&&i&&null!==i&&"string"!=typeof i&&(i=JSON.stringify(i)),this.instance.request({...u,headers:{...u.headers||{},...o&&o!==B.FormData?{"Content-Type":o}:{}},params:r,responseType:l,data:i,url:n})},this.instance=D.Z.create({...o,baseURL:o.baseURL||"https://api.bgm.tv"}),this.secure=t,this.format=n,this.securityWorker=e}}let U=new class extends N{constructor(...e){var t;super(...e),t=this,this.calendar={getCalendar:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.request({path:"/calendar",method:"GET",format:"json",...e})}},this.search={searchSubjectByKeywords:function(e,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({path:"/search/subject/".concat(e),method:"GET",query:n,format:"json",...o})}},this.v0={searchSubjects:function(e,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({path:"/v0/search/subjects",method:"POST",query:n,body:e,type:B.Json,format:"json",...o})},getSubjectById:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/subjects/".concat(e),method:"GET",secure:!0,format:"json",...n})},getSubjectImageById:function(e,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({path:"/v0/subjects/".concat(e,"/image"),method:"GET",query:n,secure:!0,...o})},getRelatedPersonsBySubjectId:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/subjects/".concat(e,"/persons"),method:"GET",secure:!0,format:"json",...n})},getRelatedCharactersBySubjectId:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/subjects/".concat(e,"/characters"),method:"GET",secure:!0,format:"json",...n})},getRelatedSubjectsBySubjectId:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/subjects/".concat(e,"/subjects"),method:"GET",secure:!0,format:"json",...n})},getEpisodes:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/episodes",method:"GET",query:e,secure:!0,format:"json",...n})},getEpisodeById:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/episodes/".concat(e),method:"GET",secure:!0,format:"json",...n})},getCharacterById:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/characters/".concat(e),method:"GET",format:"json",...n})},getCharacterImageById:function(e,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({path:"/v0/characters/".concat(e,"/image"),method:"GET",query:n,secure:!0,...o})},getRelatedSubjectsByCharacterId:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/characters/".concat(e,"/subjects"),method:"GET",format:"json",...n})},getRelatedPersonsByCharacterId:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/characters/".concat(e,"/persons"),method:"GET",format:"json",...n})},getPersonById:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/persons/".concat(e),method:"GET",format:"json",...n})},getPersonImageById:function(e,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({path:"/v0/persons/".concat(e,"/image"),method:"GET",query:n,secure:!0,...o})},getRelatedSubjectsByPersonId:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/persons/".concat(e,"/subjects"),method:"GET",format:"json",...n})},getRelatedCharactersByPersonId:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/persons/".concat(e,"/characters"),method:"GET",format:"json",...n})},getUserByName:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/users/".concat(e),method:"GET",format:"json",...n})},getUserAvatarByName:function(e,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({path:"/v0/users/".concat(e,"/avatar"),method:"GET",query:n,...o})},getMyself:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.request({path:"/v0/me",method:"GET",secure:!0,format:"json",...e})},getUserCollectionsByUsername:function(e,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({path:"/v0/users/".concat(e,"/collections"),method:"GET",query:n,secure:!0,format:"json",...o})},getUserCollection:function(e,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({path:"/v0/users/".concat(e,"/collections/").concat(n),method:"GET",secure:!0,format:"json",...o})},postUserCollection:function(e,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({path:"/v0/users/-/collections/".concat(e),method:"POST",body:n,secure:!0,type:B.Json,...o})},patchUserCollection:function(e,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({path:"/v0/users/-/collections/".concat(e),method:"PATCH",body:n,secure:!0,type:B.Json,...o})},getUserSubjectEpisodeCollection:function(e,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({path:"/v0/users/-/collections/".concat(e,"/episodes"),method:"GET",query:n,secure:!0,format:"json",...o})},patchUserSubjectEpisodeCollection:function(e,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({path:"/v0/users/-/collections/".concat(e,"/episodes"),method:"PATCH",body:n,secure:!0,type:B.Json,...o})},getUserEpisodeCollection:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/users/-/collections/-/episodes/".concat(e),method:"GET",secure:!0,format:"json",...n})},putUserEpisodeCollection:function(e,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({path:"/v0/users/-/collections/-/episodes/".concat(e),method:"PUT",body:n,secure:!0,type:B.Json,...o})},getPersonRevisions:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/revisions/persons",method:"GET",query:e,format:"json",...n})},getPersonRevisionByRevisionId:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/revisions/persons/".concat(e),method:"GET",format:"json",...n})},getCharacterRevisions:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/revisions/characters",method:"GET",query:e,format:"json",...n})},getCharacterRevisionByRevisionId:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/revisions/characters/".concat(e),method:"GET",format:"json",...n})},getSubjectRevisions:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/revisions/subjects",method:"GET",query:e,format:"json",...n})},getSubjectRevisionByRevisionId:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/revisions/subjects/".concat(e),method:"GET",format:"json",...n})},getEpisodeRevisions:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/revisions/episodes",method:"GET",query:e,format:"json",...n})},getEpisodeRevisionByRevisionId:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/revisions/episodes/".concat(e),method:"GET",format:"json",...n})},newIndex:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return t.request({path:"/v0/indices",method:"POST",secure:!0,format:"json",...e})},getIndexById:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/indices/".concat(e),method:"GET",secure:!0,format:"json",...n})},editIndexById:function(e,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({path:"/v0/indices/".concat(e),method:"PUT",body:n,secure:!0,type:B.Json,format:"json",...o})},getIndexSubjectsByIndexId:function(e,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({path:"/v0/indices/".concat(e,"/subjects"),method:"GET",query:n,secure:!0,...o})},addSubjectToIndexByIndexId:function(e,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({path:"/v0/indices/".concat(e,"/subjects"),method:"POST",body:n,secure:!0,type:B.Json,...o})},editIndexSubjectsByIndexIdAndSubjectId:function(e,n,o){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return t.request({path:"/v0/indices/".concat(e,"/subjects/").concat(n),method:"PUT",body:o,secure:!0,type:B.Json,...r})},delelteSubjectFromIndexByIndexIdAndSubjectId:function(e,n){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({path:"/v0/indices/".concat(e,"/subjects/").concat(n),method:"DELETE",secure:!0,...o})},collectIndexByIndexIdAndUserId:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/indices/".concat(e,"/collect"),method:"POST",secure:!0,...n})},uncollectIndexByIndexIdAndUserId:function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.request({path:"/v0/indices/".concat(e,"/collect"),method:"DELETE",secure:!0,...n})}}}}({baseURL:"https://api.bgm.tv"});var R=n(2602),w=n.n(R),O=n(1107),F=n.n(O);function M(e){return(0,C.jsx)("div",{className:F().btn,onClick:e.onClick,children:e.children})}function J(){let{data:e}=(0,P.ZP)("bgm-cal",async()=>{let e=await U.calendar.getCalendar();return e.data}),t=null==e?void 0:e.map(e=>{var t,n,o;let r=null==e?void 0:null===(t=e.items)||void 0===t?void 0:t.map(e=>{var t,n,o,r,s,i,a,c,u,l,d;let h=(null!==(i=null==e?void 0:null===(t=e.rating)||void 0===t?void 0:t.score)&&void 0!==i?i:0)>=7.5?"#24936E":void 0,m=(null!==(a=null==e?void 0:null===(n=e.rating)||void 0===n?void 0:n.score)&&void 0!==a?a:0)>=7.5?"rgba(36,147,110,0.2)":void 0,v=(0,C.jsxs)("div",{className:w().anime,children:[(0,C.jsx)("img",{alt:"img",className:w().img,src:null===(o=e.images)||void 0===o?void 0:o.common}),(0,C.jsxs)("div",{className:w().info1,children:[(0,C.jsx)("div",{className:w().info1c,style:{borderBottom:"1px dashed rgba(255,255,255,0.8)"},children:(l=null!==(c=e.air_weekday)&&void 0!==c?c:0)>=1&&l<=7?"星期".concat(["一","二","三","四","五","六","日"][l-1]):"输入无效"}),(0,C.jsx)("div",{className:w().info1c,children:e.air_date}),(0,C.jsx)("div",{className:w().info1c,style:{backgroundColor:(d=null!==(u=null===(r=e.rating)||void 0===r?void 0:r.score)&&void 0!==u?u:-1)>=9&&d<=10?"#1B813E":d>=8&&d<9?"#7BA23F":d>=7&&d<8?"#ADA142":d>=5&&d<7?"#ED784A":d>=0&&d<5?"#C73E3A":"#FFFFFF"},children:null===(s=e.rating)||void 0===s?void 0:s.score})]}),(0,C.jsxs)("div",{className:w().info2,children:[(0,C.jsx)("div",{className:w().info2cu,style:{backgroundColor:h},children:e.name}),(0,C.jsx)("div",{className:w().info2cd,style:{backgroundColor:m},children:e.name_cn})]})]}),f=(0,C.jsxs)("div",{className:w().anime,style:{backgroundColor:null!=h?h:"#FAD689",flexDirection:"column"},children:[(0,C.jsx)("div",{className:w().info1cb,children:e.name}),(0,C.jsxs)("div",{className:w().info1cbd,children:[(0,C.jsx)("a",{href:e.url,target:"_blank",rel:"noreferrer",children:(0,C.jsx)(M,{onClick:()=>{},children:"Bangumi"})}),(0,C.jsx)("a",{href:"https://mikanani.me/Home/Search?searchstr=".concat(""!==e.name_cn?e.name_cn:e.name),target:"_blank",rel:"noreferrer",children:(0,C.jsx)(M,{onClick:()=>{},children:"Mikan"})})]})]});return(0,C.jsx)(S,{front:v,back:f},e.id)});return(0,C.jsxs)("div",{className:w().day,children:[(0,C.jsx)("div",{className:w().dayText,children:null==e?void 0:null===(n=e.weekday)||void 0===n?void 0:n.cn}),(0,C.jsx)("div",{className:w().animes,children:r})]},null===(o=e.weekday)||void 0===o?void 0:o.id)});return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(G(),{children:[(0,C.jsx)("title",{children:"ICEDN-ACG"}),(0,C.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,C.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,C.jsx)("main",{children:t})]})}},1107:function(e){e.exports={btn:"button_btn__w__d1"}},2602:function(e){e.exports={item:"index_item__ltGBJ",itemTitle:"index_itemTitle__C9GAm",img:"index_img__zLAQy",day:"index_day__ubjXY",dayText:"index_dayText__EpqDr",animes:"index_animes__6yYnh",anime:"index_anime__WEaXj",info1:"index_info1__P1h_0",info1c:"index_info1c__DZlIz",info2:"index_info2__yjVE0",info2cu:"index_info2cu__jyBd_",info2cd:"index_info2cd__Gi7sw",info1cb:"index_info1cb__Witxm",info1cbd:"index_info1cbd__vjxAH"}}},function(e){e.O(0,[480,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);