import{Ea as i,Gb as M,Ja as v,Ka as S,Pa as p,Ra as d,Ta as T,Wa as D,_a as h,ba as C,ca as g,db as c,eb as s,fb as z,fd as N,gb as u,gt as b,hb as _,ht as j,ma as y,nd as R,ob as l,ot as k,pb as E,pt as w,qb as I,qc as O,sa as m,yb as f,zb as x}from"./chunk-ABDI42EA.js";function F(t,e){if(t&1&&(u(0),f(1),_()),t&2){let n=l();i(),x(n.title)}}function B(t,e){if(t&1&&(u(0),f(1),_()),t&2){let n=l(2);i(),x(n.description)}}function P(t,e){if(t&1&&(c(0,"div",7),p(1,B,2,1,"ng-container",3),s()),t&2){let n=l();i(),d("nzStringTemplateOutlet",n.description)}}function V(t,e){if(t&1&&(u(0),f(1),_()),t&2){let n=l(2);i(),x(n.extra)}}function $(t,e){if(t&1&&(c(0,"div",8),p(1,V,2,1,"ng-container",3),s()),t&2){let n=l();i(),d("nzStringTemplateOutlet",n.extra)}}var A=["*"],tt=(()=>{let e=class e{constructor(){this.cdr=m(v),this.directionality=m(R,{optional:!0}),this.destroy$=m(S),this._type="",this._icon="",this.dir="ltr"}set type(o){switch(this._type=o,o){case"success":this._icon="check-circle";break;case"error":this._icon="close-circle";break;default:this._icon=o;break}}ngOnInit(){this.dir=this.directionality?.value,this.directionality?.change.pipe(N(this.destroy$)).subscribe(o=>{this.dir=o,this.cdr.detectChanges()})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=C({type:e,selectors:[["result"]],hostVars:4,hostBindings:function(r,a){r&2&&T("result",!0)("result-rtl",a.dir==="rtl")},inputs:{type:"type",title:"title",description:"description",extra:"extra"},exportAs:["result"],standalone:!0,features:[M],ngContentSelectors:A,decls:8,vars:7,consts:[[1,"result__icon"],["nz-icon","",3,"nzType"],[1,"result__title"],[4,"nzStringTemplateOutlet"],["class","result__desc"],["class","result__extra"],[1,"result__actions"],[1,"result__desc"],[1,"result__extra"]],template:function(r,a){r&1&&(E(),c(0,"div",0),z(1,"i",1),s(),c(2,"div",2),p(3,F,2,1,"ng-container",3),s(),p(4,P,2,1,"div",4)(5,$,2,1,"div",5),c(6,"div",6),I(7),s()),r&2&&(i(),D("result__icon-",a._type,""),d("nzType",a._icon),i(2),d("nzStringTemplateOutlet",a.title),i(),h(4,a.description?4:-1),i(),h(5,a.extra?5:-1))},dependencies:[b,k],encapsulation:2,changeDetection:0});let t=e;return t})();var et=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=g({type:e}),e.\u0275inj=y({imports:[O,j,w]});let t=e;return t})();export{tt as a,et as b};
