import{c as i}from"./index.a1fdec07.js";const n={xs:18,sm:24,md:32,lg:38,xl:46},u={size:String};function c(e,s=n){return i(()=>e.size!==void 0?{fontSize:e.size in s?`${s[e.size]}px`:e.size}:null)}const z={size:{type:[Number,String],default:"1em"},color:String};function o(e){return{cSize:i(()=>e.size in n?`${n[e.size]}px`:e.size),classes:i(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}export{o as a,u as b,c,z as u};