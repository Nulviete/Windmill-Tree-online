import{s as M,Q as q}from"./supabaseClient.23da51a5.js";import{Q as k}from"./QPage.6e6cd505.js";import{r as p,_ as w,E as o,S as r,I as n,U as v,V as C,H as c,G as _,W as d,J as u,X as h,L as S,M as V,c as m,F as Q,N as y}from"./index.a1fdec07.js";import{Q as g,a as I}from"./QCard.12ea3632.js";import"./use-spinner.b116ff65.js";import"./render.308794b1.js";import"./use-dark.df4fc170.js";const N=()=>{const s=p(null),t=p(!1),a=p(null);return{loadMembers:async()=>{try{const{data:e}=await M.from("members").select("*");a.value&&console.log(a),e&&(s.value=e,t.value=!0)}catch(e){a.value=e.message}},data:s,dataLoaded:t,error:a}};const b=s=>(S("data-v-e2b778c2"),s=s(),V(),s),B={class:"head q-pb-xl q-pt-xl",style:{}},H={class:"row q-gutter-lg justify-center"},L={class:"text-white q-pa-none q-ma-none"},$=["src"],D=["src"],F={class:"q-mb-sm text-white q-px-xs",style:{}},R={key:0},T=b(()=>n("br",null,null,-1)),j={key:1},A=b(()=>n("br",null,null,-1)),E={key:2},G=b(()=>n("br",null,null,-1)),J={key:3},O={__name:"MemberCard",props:{members:{type:Array,default:()=>[]}},setup(s){const t=s;return(a,i)=>(o(),r("div",B,[n("div",H,[(o(!0),r(v,null,C(t.members,e=>(o(),r("div",{key:e,class:"card text-center",style:{}},[c(I,{style:{},class:""},{default:_(()=>[c(g,{class:"row justify-center"},{default:_(()=>[n("p",L,[n("b",null,d(e.name),1)]),n("img",{src:"/nation_flag/"+e.country+"_flag.png",alt:"",class:"q-pl-sm flag"},null,8,$)]),_:2},1024),c(g,{class:"q-pa-none"},{default:_(()=>[n("img",{src:"/members/"+e.name+".JPG",width:"100%",class:"q-ma-none q-pa-none photo"},null,8,D),n("p",F,[e.position!="Root Member"?(o(),r("span",R,[u(d(e.position)+" ",1),T])):(o(),r("span",j,[u(d(e.positionDescription)+" ",1),A])),e.position==="Volunteer"?(o(),r("span",E,[u(d(e.dateSince)+" - "+d(e.dateTill)+" ",1),G])):h("",!0),e.position!="Root Member"?(o(),r("span",J,d(e.positionDescription),1)):h("",!0)])]),_:2},1024)]),_:2},1024)]))),128))])]))}};var f=w(O,[["__scopeId","data-v-e2b778c2"]]);const P={__name:"MemberCards",props:{members:{type:Array,default:()=>[]}},setup(s){const t=s;console.log(t.members,"this is from Membercard");const a=m(()=>t.members.filter(l=>l.position==="Head of the Foundation"||l.position==="Vice")),i=m(()=>t.members.filter(l=>l.position==="Root Member")),e=m(()=>t.members.filter(l=>l.position==="Volunteer"));return(l,x)=>(o(),r(v,null,[c(f,{members:a.value},null,8,["members"]),c(f,{members:i.value},null,8,["members"]),c(f,{members:e.value},null,8,["members"])],64))}},z={key:0},U={key:1},te={__name:"OurTeam",setup(s){const{loadMembers:t,data:a,dataLoaded:i,error:e}=N();return t(),console.log(a,i,e,"Ourteam"),(l,x)=>(o(),Q(k,{padding:"",class:"bg-accent",style:{}},{default:_(()=>[y(i)?(o(),r("div",z,[c(P,{members:y(a)},null,8,["members"])])):(o(),r("div",U,[c(q,{color:"grey",size:"8em",class:""})]))]),_:1}))}};export{te as default};