import{s as M,Q as q}from"./supabaseClient.3b45c6a7.js";import{Q as k}from"./QPage.92935b66.js";import{r as p,_ as w,G as o,V as r,K as n,W as v,X as C,J as c,I as _,Y as d,L as m,Z as b,N as V,O as Q,c as u,H as S,P as y}from"./index.579bc2f3.js";import{Q as g,a as H}from"./QCard.007802bc.js";import"./use-spinner.dd5e3641.js";import"./render.b038a040.js";import"./use-dark.907599c0.js";const I=()=>{const s=p(null),t=p(!1),a=p(null);return{loadMembers:async()=>{try{const{data:e}=await M.from("members").select("*");a.value&&console.log(a),e&&(s.value=e,t.value=!0)}catch(e){a.value=e.message}},data:s,dataLoaded:t,error:a}};const h=s=>(V("data-v-0c046e21"),s=s(),Q(),s),N={class:"head q-pb-xl q-pt-xl",style:{}},B={class:"row q-gutter-lg justify-center"},L={class:"text-white q-pa-none q-ma-none"},$=["src"],D=["src"],O={class:"q-mb-sm text-white q-px-xs",style:{}},P={key:0},R=h(()=>n("br",null,null,-1)),T={key:1},j=h(()=>n("br",null,null,-1)),A={key:2},F=h(()=>n("br",null,null,-1)),G={key:3},J={__name:"MemberCard",props:{members:{type:Array,default:()=>[]}},setup(s){const t=s;return(a,i)=>(o(),r("div",N,[n("div",B,[(o(!0),r(v,null,C(t.members,e=>(o(),r("div",{key:e,class:"card text-center",style:{}},[c(H,{style:{},class:""},{default:_(()=>[c(g,{class:"row justify-center"},{default:_(()=>[n("p",L,[n("b",null,d(e.name),1)]),n("img",{src:"/nation_flag/"+e.country+"_flag.png",alt:"",class:"q-pl-sm flag"},null,8,$)]),_:2},1024),c(g,{class:"q-pa-none"},{default:_(()=>[n("img",{src:"/members/Hrystia.JPG",width:"100%",class:"q-ma-none q-pa-none photo"},null,8,D),n("p",O,[e.position!="Root Member"?(o(),r("span",P,[m(d(e.position)+" ",1),R])):(o(),r("span",T,[m(d(e.positionDescription)+" ",1),j])),e.position==="Volunteer"?(o(),r("span",A,[m(d(e.dateSince)+" - "+d(e.dateTill)+" ",1),F])):b("",!0),e.position!="Root Member"?(o(),r("span",G,d(e.positionDescription),1)):b("",!0)])]),_:2},1024)]),_:2},1024)]))),128))])]))}};var f=w(J,[["__scopeId","data-v-0c046e21"]]);const z={__name:"MemberCards",props:{members:{type:Array,default:()=>[]}},setup(s){const t=s;console.log(t.members,"this is from Membercard");const a=u(()=>t.members.filter(l=>l.position==="Head of the Foundation"||l.position==="Vice")),i=u(()=>t.members.filter(l=>l.position==="Root Member")),e=u(()=>t.members.filter(l=>l.position==="Volunteer"));return(l,x)=>(o(),r(v,null,[c(f,{members:a.value},null,8,["members"]),c(f,{members:i.value},null,8,["members"]),c(f,{members:e.value},null,8,["members"])],64))}},E={key:0},K={key:1},te={__name:"OurTeam",setup(s){const{loadMembers:t,data:a,dataLoaded:i,error:e}=I();return t(),console.log(a,i,e,"Ourteam"),(l,x)=>(o(),S(k,{padding:"",class:"bg-accent",style:{}},{default:_(()=>[y(i)?(o(),r("div",E,[c(z,{members:y(a)},null,8,["members"])])):(o(),r("div",K,[c(q,{color:"grey",size:"8em",class:""})]))]),_:1}))}};export{te as default};