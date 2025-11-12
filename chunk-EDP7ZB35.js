import{b as Ce}from"./chunk-7ON4GFKA.js";import"./chunk-V5XY5CEU.js";import"./chunk-6ACFTTPL.js";import"./chunk-SDJIQJWH.js";import"./chunk-QUOOZ2IA.js";import"./chunk-YOZ72JFY.js";import{a as Q}from"./chunk-I3CS7PKH.js";import"./chunk-ENPO624D.js";import{L as ge,M as xe,P as ve,R as he}from"./chunk-TCCP6QNH.js";import"./chunk-4O3FVBGX.js";import"./chunk-PE3LDGWS.js";import{B as _e,b as pe,d as se,e as de,g as me,h as ue,x as fe}from"./chunk-KNGUSWDS.js";import{c as E}from"./chunk-ATSIAGAV.js";import{$ as I,$b as ae,Eb as T,Ec as h,Fb as n,Fc as A,Gb as i,Hb as x,Ib as N,Jb as j,Kb as ne,Lb as ie,Mb as le,Nb as q,Ob as y,Qb as f,Sb as p,Ta as o,Vb as B,W as ee,Xb as z,Yb as V,ac as oe,bc as X,dc as w,ec as r,fa as m,fc as v,ga as u,gb as C,gc as g,hc as re,kb as te,lb as S,oa as G,oc as ce,pc as U,qc as H,ua as J,uc as s,vb as P,vc as d,wc as D,xc as F,yb as b,zb as k}from"./chunk-MBPXCF6J.js";import"./chunk-7CGTOI24.js";var be=`
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        direction: ltr;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical .p-timeline-event-opposite,
    .p-timeline-vertical .p-timeline-event-content {
        padding: dt('timeline.vertical.event.content.padding');
    }

    .p-timeline-vertical .p-timeline-event-connector {
        width: dt('timeline.event.connector.size');
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: dt('timeline.event.min.height');
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
    }

    .p-timeline-event-content {
        flex: 1;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        align-self: baseline;
        border-width: dt('timeline.event.marker.border.width');
        border-style: solid;
        border-color: dt('timeline.event.marker.border.color');
        border-radius: dt('timeline.event.marker.border.radius');
        width: dt('timeline.event.marker.size');
        height: dt('timeline.event.marker.size');
        background: dt('timeline.event.marker.background');
    }

    .p-timeline-event-marker::before {
        content: ' ';
        border-radius: dt('timeline.event.marker.content.border.radius');
        width: dt('timeline.event.marker.content.size');
        height: dt('timeline.event.marker.content.size');
        background: dt('timeline.event.marker.content.background');
    }

    .p-timeline-event-marker::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('timeline.event.marker.border.radius');
        box-shadow: dt('timeline.event.marker.content.inset.shadow');
    }

    .p-timeline-event-connector {
        flex-grow: 1;
        background: dt('timeline.event.connector.color');
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
        height: dt('timeline.event.connector.size');
    }

    .p-timeline-horizontal .p-timeline-event-opposite,
    .p-timeline-horizontal .p-timeline-event-content {
        padding: dt('timeline.horizontal.event.content.padding');
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }
`;var we=["content"],Me=["opposite"],Se=["marker"],Z=t=>({$implicit:t});function Ee(t,a){t&1&&q(0)}function Pe(t,a){t&1&&q(0)}function Fe(t,a){if(t&1&&(ie(0),S(1,Pe,1,0,"ng-container",2),le()),t&2){let e=p().$implicit,c=p();o(),T("ngTemplateOutlet",c.markerTemplate||c._markerTemplate)("ngTemplateOutletContext",H(2,Z,e))}}function Oe(t,a){if(t&1&&x(0,"div"),t&2){let e=p(2);w(e.cx("eventMarker")),P("data-pc-section","marker")}}function Ie(t,a){if(t&1&&x(0,"div"),t&2){let e=p(2);w(e.cx("eventConnector"))}}function Be(t,a){t&1&&q(0)}function ze(t,a){if(t&1&&(n(0,"div")(1,"div"),S(2,Ee,1,0,"ng-container",2),i(),n(3,"div"),S(4,Fe,2,4,"ng-container",3)(5,Oe,1,3,"ng-template",null,0,F)(7,Ie,1,2,"div",4),i(),n(8,"div"),S(9,Be,1,0,"ng-container",2),i()()),t&2){let e=a.$implicit,c=a.last,l=ae(6),_=p();w(_.cx("event")),P("data-pc-section","event"),o(),w(_.cx("eventOpposite")),P("data-pc-section","opposite"),o(),T("ngTemplateOutlet",_.oppositeTemplate||_._oppositeTemplate)("ngTemplateOutletContext",H(19,Z,e)),o(),w(_.cx("eventSeparator")),P("data-pc-section","separator"),o(),T("ngIf",_.markerTemplate||_._markerTemplate)("ngIfElse",l),o(3),T("ngIf",!c),o(),w(_.cx("eventContent")),P("data-pc-section","content"),o(),T("ngTemplateOutlet",_.contentTemplate||_._contentTemplate)("ngTemplateOutletContext",H(21,Z,e))}}var Ve={root:({instance:t})=>["p-timeline p-component","p-timeline-"+t.align,"p-timeline-"+t.layout],event:"p-timeline-event",eventOpposite:"p-timeline-event-opposite",eventSeparator:"p-timeline-event-separator",eventMarker:"p-timeline-event-marker",eventConnector:"p-timeline-event-connector",eventContent:"p-timeline-event-content"},ke=(()=>{class t extends ve{name="timeline";theme=be;classes=Ve;static \u0275fac=(()=>{let e;return function(l){return(e||(e=J(t)))(l||t)}})();static \u0275prov=ee({token:t,factory:t.\u0275fac})}return t})();var Te=(()=>{class t extends he{value;styleClass;align="left";layout="vertical";contentTemplate;oppositeTemplate;markerTemplate;templates;_contentTemplate;_oppositeTemplate;_markerTemplate;_componentStyle=I(ke);getBlockableElement(){return this.el.nativeElement.children[0]}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"opposite":this._oppositeTemplate=e.template;break;case"marker":this._markerTemplate=e.template;break}})}static \u0275fac=(()=>{let e;return function(l){return(e||(e=J(t)))(l||t)}})();static \u0275cmp=C({type:t,selectors:[["p-timeline"]],contentQueries:function(c,l,_){if(c&1&&(B(_,we,4),B(_,Me,4),B(_,Se,4),B(_,ge,4)),c&2){let M;z(M=V())&&(l.contentTemplate=M.first),z(M=V())&&(l.oppositeTemplate=M.first),z(M=V())&&(l.markerTemplate=M.first),z(M=V())&&(l.templates=M)}},hostVars:4,hostBindings:function(c,l){c&2&&(P("data-pc-section","root")("data-pc-name","timeline"),w(l.cn(l.cx("root"),l.styleClass)))},inputs:{value:"value",styleClass:"styleClass",align:"align",layout:"layout"},features:[ce([ke]),te],decls:1,vars:1,consts:[["marker",""],[3,"class",4,"ngFor","ngForOf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngIf","ngIfElse"],[3,"class",4,"ngIf"]],template:function(c,l){c&1&&S(0,ze,10,23,"div",1),c&2&&T("ngForOf",l.value)},dependencies:[ue,se,de,me,xe],encapsulation:2,changeDetection:0})}return t})();function Ue(t,a){t&1&&r(0," Your results are ready ! ")}function De(t,a){t&1&&r(0," Immediate CT Coronary Angiogram Needed ")}function Ae(t,a){if(t&1&&(n(0,"div",10)(1,"p",14),b(2,Ue,1,0)(3,De,1,0),i(),n(4,"p",15),r(5," We have successfully sent your result to "),n(6,"span",16),r(7,"martin@gmail.com."),i()()()),t&2){let e=p();o(),X("text-blue",e.risk()==="low")("text-high",e.risk()==="high"),o(),k(e.risk()=="low"?2:3)}}function Re(t,a){t&1&&r(0," For added reassurance, you can opt for a blood test that gives up to 90% accuracy. ")}function Ne(t,a){t&1&&(r(0),s(1,"translate")),t&2&&g(" ",d(1,1,"userProfile.getBloodTestImmediatelyAndUpload")," ")}function je(t,a){if(t&1&&(n(0,"div",11)(1,"p",14),r(2),s(3,"translate"),i(),n(4,"p",15),b(5,Re,1,0)(6,Ne,2,3),i()()),t&2){let e=p();o(),X("text-blue",e.risk()==="low")("text-high",e.risk()==="high"),o(),g(" ",e.risk()=="low"?"Your risk is low.":d(3,6,"risk.highRiskMsg1")," "),o(3),k(e.risk()=="low"?5:6)}}function qe(t,a){if(t&1&&(n(0,"small",17),r(1),i()),t&2){let e=a.$implicit;o(),v(e.time)}}function He(t,a){if(t&1&&(n(0,"span",18),x(1,"i"),i()),t&2){let e=a.$implicit;oe("background-color",e.completed?"#71AD81":"#A9A9A9"),o(),w(e.completed?"fa fa-tint":"fa fa-info-circle")}}function Qe(t,a){t&1&&(n(0,"p")(1,"a",22),r(2),s(3,"translate"),i()()),t&2&&(o(2),v(d(3,1,"general.downloadReport")))}function Le(t,a){if(t&1){let e=y();n(0,"p"),r(1," Click here to "),n(2,"a",23),f("click",function(){m(e);let l=p(2);return u(l.uploadClickHandler())}),r(3),s(4,"translate"),i()()}t&2&&(o(3),v(d(4,1,"general.upload")))}function $e(t,a){if(t&1){let e=y();n(0,"p")(1,"a",23),f("click",function(){m(e);let l=p(2);return u(l.uploadClickHandler())}),r(2),s(3,"translate"),i()()}t&2&&(o(2),v(d(3,1,"general.uploadResults")))}function Ke(t,a){if(t&1){let e=y();n(0,"p")(1,"a",23),f("click",function(){m(e);let l=p(2);return u(l.onNextClick())}),r(2,"View detailed report"),i()()}}function Ye(t,a){if(t&1&&(n(0,"span",19),r(1),i(),n(2,"div",20)(3,"p",8),r(4),s(5,"translate"),b(6,Qe,4,3,"p"),b(7,Le,5,3,"p"),b(8,$e,4,3,"p"),b(9,Ke,3,0,"p"),i(),x(10,"i",21),i()),t&2){let e=a.$implicit,c=p();o(),v(e.date),o(3),g(" ",d(5,8,"userProfile."+e.content)," "),o(2),k(e.download?6:-1),o(),k(e.upload&&c.risk()=="low"?7:-1),o(),k(e.upload&&c.risk()=="high"?8:-1),o(),k(e.detailed?9:-1),o(),w(e.completed?"text-[#71AD81]":"text-[#A9A9A9]")}}var L=class t{uploadClick=h();fileUploaded=A(!1);risk=A("high");nextClick=h();events=[];constructor(){}uploadClickHandler(){this.uploadClick.emit()}onNextClick(){this.nextClick.emit(this.risk())}ngOnInit(){this.risk()=="low"?this.fileUploaded()?this.events=[{content:"questionnaireCompleted",date:"08 Sep",time:"15:30",completed:!0},{content:"scoreReady",date:"09 Sep",time:"15:45",completed:!0,download:!0},{content:"takeBloodTestAndUploadResults",date:"16 Sep",time:"17:45",upload:!1,completed:!0},{content:"bloodTestAnalyzed",date:"09 Sep",time:"17:45",upload:!1,completed:!0},{content:"bloodTestResultsOut",date:"09 Sep",time:"17:45",upload:!1,completed:!0,detailed:!0}]:this.events=[{content:"questionnaireCompleted",date:"08 Sep",time:"15:30",completed:!0},{content:"scoreReady",date:"09 Sep",time:"15:45",completed:!0,download:!0},{content:"takeBloodTestAndUploadResults",date:"16 Sep",time:"17:45",upload:!0}]:this.fileUploaded()?this.events=[{content:"questionnaireCompleted",date:"08 Sep",time:"15:30",completed:!0},{content:"scoreReady",date:"09 Sep",time:"15:45",completed:!0,download:!0},{content:"getBloodTestImmediately",date:"16 Sep",time:"17:45",upload:!1,completed:!0},{content:"bloodTestAnalyzed",date:"09 Sep",time:"17:45",upload:!1,completed:!0},{content:"bloodTestResultsOut",date:"09 Sep",time:"17:45",upload:!1,completed:!0,detailed:!0}]:this.events=[{content:"questionnaireCompleted",date:"08 Sep",time:"15:30",completed:!0},{content:"scoreReady",date:"09 Sep",time:"15:45",completed:!0,download:!0},{content:"getBloodTestImmediately",date:"16 Sep",time:"17:45",upload:!0}]}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["phad-timeline"]],inputs:{fileUploaded:[1,"fileUploaded"],risk:[1,"risk"]},outputs:{uploadClick:"uploadClick",nextClick:"nextClick"},decls:24,vars:9,consts:[["opposite",""],["marker",""],["content",""],[1,"min-h-screen","flex","justify-center","bg-[#E9EFFB]"],[1,"w-full"],[1,"top-content","p-4","rounded-b-2xl","mb-4"],[3,"content"],[1,"flex","justify-between","items-center","mb-4"],[1,"text-sm"],[1,"text-xl","font-bold"],[1,"risk-info","p-5","rounded-xl","mb-6"],[1,"risk-info","p-3","rounded-xl","mb-6"],[1,"card","!mb-3"],["align","left",1,"customized-timeline",3,"value"],[1,"font-semibold","mb-2","text-sm"],[1,"text-normal","text-xs"],[1,"font-semibold"],[1,"text-[#555555]","text-xs"],[1,"flex","w-8","h-11","items-center","justify-center","text-white","z-10","shadow-sm","rounded-full"],[1,"text-xs","text-[#555555]"],[1,"flex","justify-between","gap-3"],[1,"fa","fa-check-circle","text-xl"],[1,"upload"],[1,"upload",3,"click"]],template:function(e,c){e&1&&(n(0,"div",3)(1,"div",4)(2,"div",5),x(3,"phad-home-header",6),n(4,"div",7)(5,"div")(6,"p",8),r(7),s(8,"translate"),i(),n(9,"h2",9),r(10,"Martin Shah"),i(),n(11,"p",8),r(12),s(13,"translate"),i()()(),b(14,Ae,8,5,"div",10)(15,je,7,8,"div",11),i(),n(16,"div",12)(17,"p-timeline",13),S(18,qe,2,1,"ng-template",null,0,F)(20,He,2,4,"ng-template",null,1,F)(22,Ye,11,10,"ng-template",null,2,F),i()()()()),e&2&&(o(3),T("content",!1),o(4),g("",d(8,5,"general.hello"),"!"),o(5),v(d(13,7,"report.trackActivities")),o(2),k(c.fileUploaded()?14:15),o(3),T("value",c.events))},dependencies:[Te,Ce,E],styles:[".top-content[_ngcontent-%COMP%]{background:linear-gradient(22.1deg,#c0d9f9 -18.93%,#f1effb 40.4%,#cadefa 99.2%);-webkit-backdrop-filter:blur(65.981880188px);backdrop-filter:blur(65.981880188px)}.top-content[_ngcontent-%COMP%]   .risk-info[_ngcontent-%COMP%]{background:#ffffff94!important}.top-content[_ngcontent-%COMP%]   .risk-info[_ngcontent-%COMP%]   .text-blue[_ngcontent-%COMP%]{color:#1060c4}.top-content[_ngcontent-%COMP%]   .risk-info[_ngcontent-%COMP%]   .text-high[_ngcontent-%COMP%]{color:var(--color-primary-500)}.upload[_ngcontent-%COMP%]{color:var(--color-primary-500);text-decoration:underline;animation-timing-function:ease-out;animation-duration:.3s;font-weight:500}[_nghost-%COMP%]     .p-timeline-event-opposite{flex:0!important}[_nghost-%COMP%]     .p-timeline-event-connector.ng-star-inserted{height:5rem!important}"]})};var We=()=>({value:"< 100"}),Ge=()=>({value:"0.6 - 1.1"}),Je=()=>({value:"4.0 - 5.6 %"}),Xe=()=>({value:"0.0 - 3.0"}),$=class t{back=h();switchToAnalyzing=h();switchToFile=h();onBackButtonClick(){this.back.emit()}onUploadClick(){this.switchToAnalyzing.emit()}fileClickHandler(){this.switchToFile.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["phad-manual"]],outputs:{back:"back",switchToAnalyzing:"switchToAnalyzing",switchToFile:"switchToFile"},decls:74,vars:38,consts:[[1,"min-h-screen","flex","flex-col"],[1,"p-5"],[1,"back-button"],[3,"backClick"],[1,"header"],[1,"text-2xl","font-semibold","mb-2"],[1,"text-sm"],[1,"bg-white","flex-1","rounded-t-3xl","shadow-md","p-6","justify-between"],[1,"form"],[1,"space-y-8"],[1,"flex","justify-between"],[1,"font-semibold","text-base"],[1,"text-xs"],[1,"flex","items-center","mt-2","space-x-3"],["type","number","placeholder","60"],["type","number","placeholder","203.9"],[1,"text-xs","unit"],["type","button",1,"phad-primary-button","!w-full",3,"click"],[1,"text-center","mt-3","upload-btn"],[1,"text-sm","flex","items-center","justify-center","space-x-1",3,"click"],[1,"fa","fa-arrow-right"]],template:function(e,c){e&1&&(n(0,"div",0)(1,"div",1)(2,"div",2)(3,"phad-question-back-button",3),f("backClick",function(){return c.onBackButtonClick()}),i()(),n(4,"div",4)(5,"p",5),r(6),s(7,"translate"),i(),n(8,"p",6),r(9),s(10,"translate"),i()()(),n(11,"div",7)(12,"form",8)(13,"div",9)(14,"div",10)(15,"div")(16,"label",11),r(17,"LDL"),i(),n(18,"p",12),r(19),s(20,"translate"),i()(),n(21,"div",13),x(22,"input",14)(23,"input",15),n(24,"span",16),r(25),s(26,"translate"),i()()(),n(27,"div",10)(28,"div")(29,"label",11),r(30,"Creatine"),i(),n(31,"p",12),r(32),s(33,"translate"),i()(),n(34,"div",13),x(35,"input",14)(36,"input",15),n(37,"span",16),r(38),s(39,"translate"),i()()(),n(40,"div",10)(41,"div")(42,"label",11),r(43,"HABA1C"),i(),n(44,"p",12),r(45),s(46,"translate"),i()(),n(47,"div",13),x(48,"input",14)(49,"input",15),n(50,"span",16),r(51),s(52,"translate"),i()()(),n(53,"div",10)(54,"div")(55,"label",11),r(56,"HSCRP"),i(),n(57,"p",12),r(58),s(59,"translate"),i()(),n(60,"div",13),x(61,"input",14)(62,"input",15),n(63,"span",16),r(64),s(65,"translate"),i()()()(),n(66,"div")(67,"button",17),f("click",function(){return c.onUploadClick()}),r(68," Submit "),i(),n(69,"div",18)(70,"a",19),f("click",function(){return c.fileClickHandler()}),n(71,"span"),r(72,"Upload Document"),i(),x(73,"i",20),i()()()()()()),e&2&&(o(6),v(d(7,10,"general.fillInTheDetails")),o(3),v(d(10,12,"general.chooseFilesToUpload")),o(10),g(" ",D(20,14,"report.normalRangeValue",U(34,We))),o(6),v(d(26,17,"units.mgdL")),o(7),g(" ",D(33,19,"report.normalRangeValue",U(35,Ge))," "),o(6),v(d(39,22,"units.mgdL")),o(7),g(" ",D(46,24,"report.normalRangeValue",U(36,Je))," "),o(6),v(d(52,27,"units.mgdL")),o(7),g(" ",D(59,29,"report.normalRangeValue",U(37,Xe))),o(6),v(d(65,32,"units.mgdL")))},dependencies:[Q,E],styles:[".header[_ngcontent-%COMP%]{color:#2c2c2c}.form[_ngcontent-%COMP%]{color:#2c2c2c;display:flex;flex-direction:column;justify-content:space-between;min-height:70vh}.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{background-color:#f7fafd!important;border:.8px solid #E3EFFE;text-align:center;width:5rem;border-radius:20px;padding:.25rem .5rem;outline:none}.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{color:#a3a3a3}.form[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]{color:#a3a3a3}.form[_ngcontent-%COMP%]   .upload-btn[_ngcontent-%COMP%]{color:#2a323d}.form[_ngcontent-%COMP%]   .upload-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#b7d6fb;color:#36455b;font-size:8px;width:20px;height:20px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;margin-left:8px}"]})};var K=class t{completed=h();ngOnInit(){setTimeout(()=>{this.completed.emit()},2e3)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["phad-analyzing"]],outputs:{completed:"completed"},decls:10,vars:6,consts:[[1,"min-h-screen","flex","flex-col","justify-center","items-center","p-5","text-center"],[1,"text-color"],[1,"text-2xl","font-semibold","mb-3"],[1,"text-base"],[1,"mt-4"],["src","/images/question/risk/analyzing.png","alt","blood"]],template:function(e,c){e&1&&(N(0,"div",0)(1,"div",1)(2,"p",2),r(3),s(4,"translate"),j(),N(5,"p",3),r(6),s(7,"translate"),j()(),N(8,"div",4),ne(9,"img",5),j()()),e&2&&(o(3),g(" ",d(4,2,"report.analyzingBloodResults")," "),o(3),g(" ",d(7,4,"report.extractingKeyParameters"),"... "))},dependencies:[E],styles:[".text-color[_ngcontent-%COMP%]{color:#2c2c2c}"]})};function Ze(t,a){if(t&1){let e=y();n(0,"div",15)(1,"div",16)(2,"div",17)(3,"div",18),x(4,"i",19),n(5,"div")(6,"p",20),r(7),i(),n(8,"small",21),r(9),i()()(),n(10,"i",22),f("click",function(){m(e);let l=p();return u(l.removeFile())}),i()(),n(11,"div",23)(12,"div",24)(13,"div",25),r(14),i(),n(15,"div",25)(16,"span",26),r(17,"\u2022 "),i(),x(18,"i",27),r(19," Completed "),i()(),n(20,"span",28),r(21,"100%"),i()()()(),n(22,"div",29)(23,"button",30),f("click",function(){m(e);let l=p();return u(l.onUploadClick())}),r(24," Submit "),i()()}if(t&2){let e=p();o(4),T("ngClass",e.getFileIcon(e.selectedFile.name)),o(3),v(e.selectedFile.name),o(2),v(e.getReadableFileSize(e.selectedFile.size)),o(5),re("",e.getReadableFileSize(e.selectedFile.size),"/",e.getReadableFileSize(e.selectedFile.size))}}var Y=class t{currentView="file";back=h();selectedFile=null;switchToManual=h();switchToAnalyzing=h();manualClickHandler(){this.switchToManual.emit()}onBackButtonClick(){this.back.emit()}onFileSelected(a){let e=a.target;e.files?.length&&(this.selectedFile=e.files[0],e.value="")}getFileIcon(a){switch(a.split(".").pop()?.toLowerCase()){case"pdf":return"fa-regular fa-file-pdf";case"jpg":case"png":return"fa-regular fa-image";case"doc":case"docx":return"fa-regular fa-file-word";case"zip":return"fa-regular fa-file-zipper";default:return"fa-regular fa-file-pdf"}}getReadableFileSize(a){return a<1024?`${a} B`:a<1024*1024?`${(a/1024).toFixed(1)} KB`:`${(a/(1024*1024)).toFixed(1)} MB`}removeFile(){this.selectedFile=null}onUploadClick(){this.switchToAnalyzing.emit()}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["phad-file"]],outputs:{back:"back",switchToManual:"switchToManual",switchToAnalyzing:"switchToAnalyzing"},decls:28,vars:16,consts:[["fileInput",""],[1,"min-h-screen","p-5"],[1,"back-button"],[3,"backClick"],[1,"title","text-2xl","font-semibold","mb-2"],[1,"mb-5","title","text-sm"],[1,"upload-container","rounded-lg","p-10","text-center","transition","mb-4"],[1,"flex","flex-col","items-center","justify-center","mb-3"],[1,"fa","fa-cloud-upload","text-8xl","text-[#6187C8]"],[1,"text-gray-700","font-medium"],[1,"text-sm","text-gray-500","mt-1"],["type","file","accept",".pdf,.jpg,.jpeg,.png,.doc,.docx,.zip",1,"hidden",3,"change"],[1,"or","mb-2"],["type","button",1,"manual-btn",3,"click"],[1,"fa","fa-arrow-right"],[1,"file-list","mb-8"],[1,"file-item"],[1,"flex","justify-between"],[1,"file-left"],[1,"text-[#D33545]","text-2xl",3,"ngClass"],[1,"file-name","text-sm"],[1,"text-xs","file-name"],[1,"fa-regular","fa-circle-xmark","close-icon",3,"click"],[1,"progress-bar","flex","justify-between","w-full","text-xs"],[1,"flex","gap-2"],[1,"progress-fill"],[1,"text-[#00000080]"],[1,"fa","fa-check-circle","text-[#71AD81]"],[1,"percentage"],[1,"pt-4"],["type","button",1,"phad-primary-button","submit-btn",3,"click"]],template:function(e,c){if(e&1){let l=y();n(0,"div",1)(1,"div",2)(2,"phad-question-back-button",3),f("backClick",function(){return m(l),u(c.onBackButtonClick())}),i()(),n(3,"form")(4,"h2",4),r(5),s(6,"translate"),i(),n(7,"p",5),r(8),s(9,"translate"),i(),n(10,"div",6)(11,"label",7),x(12,"i",8),n(13,"span",9),r(14),s(15,"translate"),i(),n(16,"span",10),r(17),s(18,"translate"),i(),n(19,"input",11,0),f("change",function(M){return m(l),u(c.onFileSelected(M))}),i()(),n(21,"p",12),r(22,"or"),i(),n(23,"button",13),f("click",function(){return m(l),u(c.manualClickHandler())}),r(24),s(25,"translate"),x(26,"i",14),i()(),b(27,Ze,25,5),i()()}e&2&&(o(5),g(" ",d(6,6,"general.uploadResults")," "),o(3),g(" ",d(9,8,"general.chooseFilesToUpload")," "),o(6),g(" ",d(15,10,"general.tapOrChooseToUpload")," "),o(3),g(" ",d(18,12,"general.supportedFiles")," "),o(7),g(" ",d(25,14,"general.enterManually")," "),o(3),k(c.selectedFile?27:-1))},dependencies:[Q,pe,E],styles:[".title[_ngcontent-%COMP%]{color:#2c2c2c}.upload-container[_ngcontent-%COMP%]{border:2px dashed #6187C8;min-height:400px;display:flex;flex-direction:column;justify-content:center}.or[_ngcontent-%COMP%]{color:#ababab}.manual-btn[_ngcontent-%COMP%]{color:#4e4e4e;font-weight:500;text-decoration:underline}.manual-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{background-color:#b7d6fb;color:#36455b;font-size:12px;width:30px;height:30px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;margin-left:8px}.file-list[_ngcontent-%COMP%]{background-color:#f7fafd;border:1px solid #E3EFFE;border-radius:20px;padding:1rem}.file-list[_ngcontent-%COMP%]   .file-left[_ngcontent-%COMP%]{display:flex;gap:5px}.file-list[_ngcontent-%COMP%]   .file-left[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-top:2px}.file-list[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%]{color:#6d6c6f}.file-list[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%], .file-list[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%]{color:#2c2c2c}.file-list[_ngcontent-%COMP%]   .percentage[_ngcontent-%COMP%]{color:#00000080}.submit-btn[_ngcontent-%COMP%]{width:100%}"]})};function et(t,a){if(t&1){let e=y();n(0,"phad-file",0),f("switchToManual",function(){m(e);let l=p();return u(l.switchToManual())})("switchToAnalyzing",function(){m(e);let l=p();return u(l.switchToAnalyzing())})("back",function(){m(e);let l=p();return u(l.onBackButtonClick())}),i()}}function tt(t,a){if(t&1){let e=y();n(0,"phad-manual",1),f("switchToFile",function(){m(e);let l=p();return u(l.switchToFile())})("switchToAnalyzing",function(){m(e);let l=p();return u(l.switchToAnalyzing())})("back",function(){m(e);let l=p();return u(l.onBackButtonClick())}),i()}}function nt(t,a){if(t&1){let e=y();n(0,"phad-analyzing",2),f("completed",function(){m(e);let l=p();return u(l.switchToParent())}),i()}}var W=class t{currentView="file";back=h();switchToManual(){this.currentView="manual"}switchToFile(){this.currentView="file"}switchToAnalyzing(){this.currentView="analyzing"}switchToParent(){this.back.emit(!0)}onBackButtonClick(){this.back.emit(!1)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["phad-upload"]],outputs:{back:"back"},decls:3,vars:1,consts:[[3,"switchToManual","switchToAnalyzing","back"],[3,"switchToFile","switchToAnalyzing","back"],[3,"completed"]],template:function(e,c){if(e&1&&b(0,et,1,0,"phad-file")(1,tt,1,0,"phad-manual")(2,nt,1,0,"phad-analyzing"),e&2){let l;k((l=c.currentView)==="file"?0:l==="manual"?1:l==="analyzing"?2:-1)}},dependencies:[$,K,Y],encapsulation:2})};function it(t,a){if(t&1){let e=y();n(0,"phad-timeline",1),f("uploadClick",function(){m(e);let l=p();return u(l.openUpload())})("nextClick",function(){m(e);let l=p();return u(l.onNextClick())}),i()}if(t&2){let e=p();T("risk",e.risk())("fileUploaded",e.fileUploaded())}}function lt(t,a){if(t&1){let e=y();n(0,"phad-upload",2),f("back",function(l){m(e);let _=p();return u(_.backToTimeline(l))}),i()}}function at(t,a){t&1&&(n(0,"p"),r(1,"Unknown view"),i())}var ye=class t{viewType="timeline";file=A(!1);fileUploaded=G(!1);nextClick=h();risk=G("high");router=I(_e);route=I(fe);ngOnInit(){this.fileUploaded.set(this.file()),this.route.queryParamMap.subscribe(a=>{let e=a.get("risk"),c=a.get("file");e&&this.risk.set(e.toLowerCase()),c&&this.fileUploaded.set(!0)})}openUpload(){this.viewType="upload"}backToTimeline(a){this.fileUploaded.set(a),this.viewType="timeline"}onNextClick(){this.router.navigate(["/user/detailed-report"],{queryParams:{risk:this.risk()}})}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=C({type:t,selectors:[["phad-user-dashboard"]],inputs:{file:[1,"file"]},outputs:{nextClick:"nextClick"},decls:3,vars:1,consts:[[3,"risk","fileUploaded"],[3,"uploadClick","nextClick","risk","fileUploaded"],[3,"back"]],template:function(e,c){if(e&1&&b(0,it,1,2,"phad-timeline",0)(1,lt,1,0,"phad-upload")(2,at,2,0,"p"),e&2){let l;k((l=c.viewType)==="timeline"?0:l==="upload"?1:2)}},dependencies:[W,L],encapsulation:2})};export{ye as UserDashboard};
