"use strict";(self.webpackChunkng_yunzai=self.webpackChunkng_yunzai||[]).push([[592],{7688:(T,v,o)=>{o.d(v,{$4:()=>a,Or:()=>E});var e=o(5879),r=o(8645),f=o(9773),p=o(2181),D=o(2112),m=o(8031),M=o(7582),g=o(2699),t=o(8748);const l=["container"];let n=(()=>{class s{get cog(){return this._cog}set cog(i){this._cog=this.cogSrv.merge("chart",{theme:"",libs:["https://gw.alipayobjects.com/os/lib/antv/g2/4.1.46/dist/g2.min.js","https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.8/dist/data-set.js"]},i)}constructor(i,u){this.cogSrv=i,this.lazySrv=u,this.loading=!1,this.loaded=!1,this.notify$=new r.x,this.cog={theme:""}}libLoad(){return this.loading?(this.loaded&&this.notify$.next(),this):(this.loading=!0,this.lazySrv.load(this.cog.libs).then(()=>{this.loaded=!0,this.notify$.next()}),this)}get notify(){return this.notify$.asObservable()}ngOnDestroy(){this.notify$.unsubscribe()}}return s.\u0275fac=function(i){return new(i||s)(e.LFG(D.Pj),e.LFG(m.Df))},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})(),a=(()=>{class s{get chart(){return this._chart}get winG2(){return window.G2}constructor(i,u,y,c,_){this.srv=i,this.el=u,this.ngZone=y,this.platform=c,this.cdr=_,this.repaint=!0,this.destroy$=new r.x,this.loaded=!1,this.delay=0,this.ready=new e.vpe,this.theme=i.cog.theme,this.srv.notify.pipe((0,f.R)(this.destroy$),(0,p.h)(()=>!this.loaded)).subscribe(()=>this.load())}changeData(){}onInit(){}onChanges(i){}load(){this.ngZone.run(()=>{this.loaded=!0,this.cdr.detectChanges()}),setTimeout(()=>this.install(),this.delay)}ngOnInit(){this.platform.isBrowser&&(this.onInit(),this.winG2?this.load():this.srv.libLoad())}ngOnChanges(i){this.onChanges(i),(this.onlyChangeData?this.onlyChangeData(i):1===Object.keys(i).length&&i.data)?this.changeData():!this.chart||!this.repaint||this.ngZone.runOutsideAngular(()=>{this.destroyChart().install()})}destroyChart(){return this._chart&&this._chart.destroy(),this}ngOnDestroy(){this.resize$&&this.resize$.unsubscribe(),this.destroy$.next(),this.destroy$.complete(),this.destroyChart()}}return s.\u0275fac=function(i){return new(i||s)(e.Y36(n),e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(t.t4),e.Y36(e.sBO))},s.\u0275dir=e.lG2({type:s,viewQuery:function(i,u){if(1&i&&e.Gf(l,7),2&i){let y;e.iGM(y=e.CRH())&&(u.node=y.first)}},inputs:{repaint:"repaint",delay:"delay",theme:"theme"},outputs:{ready:"ready"},features:[e.TTD]}),(0,M.gn)([(0,g.yF)()],s.prototype,"repaint",void 0),(0,M.gn)([(0,g.Rn)()],s.prototype,"delay",void 0),(0,M.gn)([(0,g.EA)()],s.prototype,"load",null),(0,M.gn)([(0,g.EA)()],s.prototype,"destroyChart",null),s})();function E(s,d){const i={showTitle:!1,showMarkers:!0,enterable:!0,domStyles:{"g2-tooltip":{padding:"0px"},"g2-tooltip-title":{display:"none"},"g2-tooltip-list-item":{margin:"4px"}},...d};return"mini"===s&&(i.position="top",i.domStyles["g2-tooltip"]={padding:"0px",backgroundColor:"transparent",boxShadow:"none"},i.itemTpl="<li>{value}</li>",i.offset=8),i}},5838:(T,v,o)=>{o.d(v,{D:()=>m,y:()=>g});var e=o(7582),r=o(5879),f=o(7688),p=o(2699),D=o(6814);let m=(()=>{class t extends f.$4{constructor(){super(...arguments),this.color="rgba(24, 144, 255, 0.2)",this.borderColor="#1890FF",this.borderWidth=2,this.height=56,this.fit=!0,this.line=!1,this.animate=!0,this.padding=[8,8,8,8],this.data=[],this.yTooltipSuffix="",this.tooltipType="default",this.clickItem=new r.vpe}install(){const{el:n,fit:a,height:E,padding:s,xAxis:d,yAxis:i,yTooltipSuffix:u,tooltipType:y,line:c,theme:_,animate:C,color:O,borderColor:A,borderWidth:P}=this,h=this._chart=new this.winG2.Chart({container:n.nativeElement,autoFit:a,height:E,padding:s,theme:_});h.animate(C),!d&&!i&&h.axis(!1),h.axis("x",d||!1),h.axis("y",i||!1),h.legend(!1),h.tooltip((0,f.Or)(y)),h.area().position("x*y").color(O).tooltip("x*y",(x,B)=>({name:x,value:B+u})).shape("smooth"),c&&h.line().position("x*y").shape("smooth").color(A).size(P).tooltip(!1),h.on("plot:click",x=>{const B=this._chart.getSnapRecords({x:x.x,y:x.y});this.ngZone.run(()=>this.clickItem.emit({item:B[0]._origin,ev:x}))}),this.ready.next(h),this.changeData(),h.render()}changeData(){const{_chart:n,data:a}=this;!n||!Array.isArray(a)||a.length<=0||n.changeData(a)}}return t.\u0275fac=function(){let l;return function(a){return(l||(l=r.n5z(t)))(a||t)}}(),t.\u0275cmp=r.Xpm({type:t,selectors:[["g2-mini-area"]],hostVars:2,hostBindings:function(n,a){2&n&&r.Udp("height",a.height,"px")},inputs:{color:"color",borderColor:"borderColor",borderWidth:"borderWidth",height:"height",fit:"fit",line:"line",animate:"animate",xAxis:"xAxis",yAxis:"yAxis",padding:"padding",data:"data",yTooltipSuffix:"yTooltipSuffix",tooltipType:"tooltipType"},outputs:{clickItem:"clickItem"},exportAs:["g2MiniArea"],features:[r.qOj],decls:0,vars:0,template:function(n,a){},encapsulation:2,changeDetection:0}),(0,e.gn)([(0,p.Rn)()],t.prototype,"borderWidth",void 0),(0,e.gn)([(0,p.Rn)()],t.prototype,"height",void 0),(0,e.gn)([(0,p.yF)()],t.prototype,"fit",void 0),(0,e.gn)([(0,p.yF)()],t.prototype,"line",void 0),(0,e.gn)([(0,p.yF)()],t.prototype,"animate",void 0),t})(),g=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[D.ez]}),t})()},6422:(T,v,o)=>{o.d(v,{B:()=>g,N:()=>m});var e=o(7582),r=o(5879),f=o(7688),p=o(2699),D=o(6814);let m=(()=>{class t extends f.$4{constructor(){super(...arguments),this.color="#1890FF",this.height=0,this.borderWidth=5,this.padding=[8,8,8,8],this.data=[],this.yTooltipSuffix="",this.tooltipType="default",this.clickItem=new r.vpe}install(){const{el:n,height:a,padding:E,yTooltipSuffix:s,tooltipType:d,theme:i,color:u,borderWidth:y}=this,c=this._chart=new this.winG2.Chart({container:n.nativeElement,autoFit:!0,height:a,padding:E,theme:i});c.scale({x:{type:"cat"},y:{min:0}}),c.legend(!1),c.axis(!1),c.tooltip((0,f.Or)(d,{showCrosshairs:!1})),c.interval().position("x*y").color("x*y",(_,C)=>{const O=this.data.find(A=>A.x===_&&A.y===C);return O&&O.color?O.color:u}).size(y).tooltip("x*y",(_,C)=>({name:_,value:C+s})),c.on("interval:click",_=>{this.ngZone.run(()=>this.clickItem.emit({item:_.data?.data,ev:_}))}),this.ready.next(c),this.changeData(),c.render()}changeData(){const{_chart:n,data:a}=this;!n||!Array.isArray(a)||a.length<=0||n.changeData(a)}}return t.\u0275fac=function(){let l;return function(a){return(l||(l=r.n5z(t)))(a||t)}}(),t.\u0275cmp=r.Xpm({type:t,selectors:[["g2-mini-bar"]],hostVars:2,hostBindings:function(n,a){2&n&&r.Udp("height",a.height,"px")},inputs:{color:"color",height:"height",borderWidth:"borderWidth",padding:"padding",data:"data",yTooltipSuffix:"yTooltipSuffix",tooltipType:"tooltipType"},outputs:{clickItem:"clickItem"},exportAs:["g2MiniBar"],features:[r.qOj],decls:0,vars:0,template:function(n,a){},encapsulation:2,changeDetection:0}),(0,e.gn)([(0,p.Rn)()],t.prototype,"height",void 0),(0,e.gn)([(0,p.Rn)()],t.prototype,"borderWidth",void 0),t})(),g=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[D.ez]}),t})()}}]);