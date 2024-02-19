import{a as st}from"./chunk-HDFDYO73.js";import{$a as H,$d as X,Ab as C,Ea as s,Fa as M,Fc as K,Gb as u,Ja as w,Ka as R,Pa as L,Pc as q,Qu as rt,Ra as d,Sa as N,Ta as I,Tc as G,Vu as ct,Xu as pt,Zc as U,_a as j,ae as J,ba as l,bb as B,ca as D,cb as F,db as c,eb as p,ed as W,fa as z,fb as h,fd as k,ga as E,it as tt,jb as O,jt as et,lt as v,ma as S,mb as f,nd as Z,nt as _,ob as y,pb as V,qb as Y,qc as Q,sa as r,tu as it,ub as $,vb as P,wb as A,wu as nt,xu as ot,yb as g,za as b}from"./chunk-ABDI42EA.js";var dt=["conTpl"];function ut(n,t){if(n&1&&(c(0,"button",8),g(1),p()),n&2){let a=y();d("routerLink",a.backRouterLink)("nzType","primary"),s(),C(" ",a.locale.backToHome," ")}}var ht=["*"],T=(()=>{let t=class t{set type(e){let i=this.typeDict[e];i&&(this.fixImg(i.img),this._type=e,this._title=i.title,this._desc="")}fixImg(e){this._img=this.dom.bypassSecurityTrustStyle(`url('${e}')`)}set img(e){this.fixImg(e)}set title(e){this._title=this.dom.bypassSecurityTrustHtml(e)}set desc(e){this._desc=this.dom.bypassSecurityTrustHtml(e)}checkContent(){this.hasCon=!rt(this.conTpl.nativeElement),this.cdr.detectChanges()}constructor(e){this.i18n=r(nt),this.dom=r(K),this.directionality=r(Z,{optional:!0}),this.cdr=r(w),this.destroy$=r(R),this.locale={},this.hasCon=!1,this.dir="ltr",this._img="",this._title="",this._desc="",this.backRouterLink="/",e.attach(this,"exception",{typeDict:{403:{img:"https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg",title:"403"},404:{img:"https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg",title:"404"},500:{img:"https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg",title:"500"}}})}ngOnInit(){this.dir=this.directionality?.value,this.directionality?.change.pipe(k(this.destroy$)).subscribe(e=>{this.dir=e,this.cdr.detectChanges()}),this.i18n.change.pipe(k(this.destroy$)).subscribe(()=>{this.locale=this.i18n.getData("exception"),this.cdr.detectChanges()}),this.checkContent()}};t.\u0275fac=function(i){return new(i||t)(M(W))},t.\u0275cmp=l({type:t,selectors:[["exception"]],viewQuery:function(i,o){if(i&1&&$(dt,7),i&2){let m;P(m=A())&&(o.conTpl=m.first)}},hostVars:4,hostBindings:function(i,o){i&2&&I("exception",!0)("exception-rtl",o.dir==="rtl")},inputs:{type:"type",img:"img",title:"title",desc:"desc",backRouterLink:"backRouterLink"},exportAs:["exception"],standalone:!0,features:[u],ngContentSelectors:ht,decls:10,vars:5,consts:[[1,"exception__img-block"],[1,"exception__img"],[1,"exception__cont"],[1,"exception__cont-title",3,"innerHTML"],[1,"exception__cont-desc",3,"innerHTML"],[1,"exception__cont-actions"],[3,"cdkObserveContent"],["conTpl",""],["nz-button","",3,"routerLink","nzType"]],template:function(i,o){i&1&&(V(),c(0,"div",0),h(1,"div",1),p(),c(2,"div",2),h(3,"h1",3)(4,"div",4),c(5,"div",5)(6,"div",6,7),f("cdkObserveContent",function(){return o.checkContent()}),Y(8),p(),L(9,ut,2,3,"button",8),p()()),i&2&&(s(),N("background-image",o._img),s(2),d("innerHTML",o._title,b),s(),d("innerHTML",o._desc||o.locale[o._type],b),s(5),j(9,o.hasCon?-1:9))},dependencies:[X,v,G],encapsulation:2,changeDetection:0});let n=t;return n})(),ft=[T],mt=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=D({type:t}),t.\u0275inj=S({imports:[Q,J,U,ot,_,ft]});let n=t;return n})();var x=(()=>{let t=class t{constructor(){this.route=r(q)}get type(){return this.route.snapshot.data.type}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=l({type:t,selectors:[["app-exception"]],standalone:!0,features:[u],decls:1,vars:1,consts:[[2,"min-height","500px","height","80%",3,"type"]],template:function(i,o){i&1&&h(0,"exception",0),i&2&&d("type",o.type)},dependencies:[mt,T],encapsulation:2,changeDetection:0});let n=t;return n})();function yt(n,t){if(n&1){let a=O();c(0,"button",2),f("click",function(){let o=z(a).$implicit,m=y();return E(m.go(o))}),g(1),p()}if(n&2){let a=t.$implicit;s(),C("\u89E6\u53D1",a,"")}}var lt=(()=>{let t=class t{constructor(){this.http=r(it),this.tokenService=r(st),this.types=[401,403,404,500]}go(e){this.http.get(`/api/${e}`).subscribe()}refresh(){this.tokenService.set({token:"invalid-token"}),this.http.post("https://localhost:5001/auth").subscribe({next:e=>console.warn("\u6210\u529F",e),error:e=>{console.log("\u6700\u540E\u7ED3\u679C\u5931\u8D25",e)}})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=l({type:t,selectors:[["exception-trigger"]],standalone:!0,features:[u],decls:6,vars:0,consts:[[1,"pt-lg"],["nz-button","","nzType","link",3,"click"],["nz-button","","nzDanger","",3,"click"],["nz-button","","nzDanger",""]],template:function(i,o){i&1&&(c(0,"div",0)(1,"nz-card"),B(2,yt,2,1,"button",3,H),c(4,"button",1),f("click",function(){return o.refresh()}),g(5,"\u89E6\u53D1\u5237\u65B0Token"),p()()()),i&2&&(s(2),F(o.types))},dependencies:[pt,ct,_,v,tt,et],encapsulation:2});let n=t;return n})();var te=[{path:"403",component:x,data:{type:403}},{path:"404",component:x,data:{type:404}},{path:"500",component:x,data:{type:500}},{path:"trigger",component:lt}];export{te as routes};
