// Compiled by ClojureScript 1.7.228 {}
goog.provide('megasite.components.common');
goog.require('cljs.core');
megasite.components.common.modal = (function megasite$components$common$modal(header,body,footer){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-dialog","div.modal-dialog",-237012986),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-content","div.modal-content",-83470844),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-header","div.modal-header",-799180845),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),header], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-body","div.modal-body",-2141892968),body], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-footer","div.modal-footer",1309572241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bootstrap-dialog-footer","div.bootstrap-dialog-footer",1132532911),footer], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.modal-backdrop.fade.in","div.modal-backdrop.fade.in",-1698078477)], null)], null);
});
megasite.components.common.input = (function megasite$components$common$input(type,id,placeholder,fields){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control.input-lg","input.form-control.input-lg",721276087),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"value","value",305978217),id.call(null,cljs.core.deref.call(null,fields)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__37725_SHARP_){
return cljs.core.swap_BANG_.call(null,fields,cljs.core.assoc,id,p1__37725_SHARP_.target.value);
})], null)], null);
});
megasite.components.common.form_input = (function megasite$components$common$form_input(type,label,id,placeholder,fields,optional_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.form-group","div.form-group",-1721134770),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),label], null),(cljs.core.truth_(optional_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [megasite.components.common.input,type,id,placeholder,fields], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [megasite.components.common.input,type,id,placeholder,fields], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023)," \u2731 "], null)], null))], null);
});
megasite.components.common.text_input = (function megasite$components$common$text_input(var_args){
var args__35637__auto__ = [];
var len__35630__auto___37733 = arguments.length;
var i__35631__auto___37734 = (0);
while(true){
if((i__35631__auto___37734 < len__35630__auto___37733)){
args__35637__auto__.push((arguments[i__35631__auto___37734]));

var G__37735 = (i__35631__auto___37734 + (1));
i__35631__auto___37734 = G__37735;
continue;
} else {
}
break;
}

var argseq__35638__auto__ = ((((4) < args__35637__auto__.length))?(new cljs.core.IndexedSeq(args__35637__auto__.slice((4)),(0))):null);
return megasite.components.common.text_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__35638__auto__);
});

megasite.components.common.text_input.cljs$core$IFn$_invoke$arity$variadic = (function (label,id,placeholder,fields,p__37731){
var vec__37732 = p__37731;
var optional_QMARK_ = cljs.core.nth.call(null,vec__37732,(0),null);
return megasite.components.common.form_input.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),label,id,placeholder,fields,optional_QMARK_);
});

megasite.components.common.text_input.cljs$lang$maxFixedArity = (4);

megasite.components.common.text_input.cljs$lang$applyTo = (function (seq37726){
var G__37727 = cljs.core.first.call(null,seq37726);
var seq37726__$1 = cljs.core.next.call(null,seq37726);
var G__37728 = cljs.core.first.call(null,seq37726__$1);
var seq37726__$2 = cljs.core.next.call(null,seq37726__$1);
var G__37729 = cljs.core.first.call(null,seq37726__$2);
var seq37726__$3 = cljs.core.next.call(null,seq37726__$2);
var G__37730 = cljs.core.first.call(null,seq37726__$3);
var seq37726__$4 = cljs.core.next.call(null,seq37726__$3);
return megasite.components.common.text_input.cljs$core$IFn$_invoke$arity$variadic(G__37727,G__37728,G__37729,G__37730,seq37726__$4);
});
megasite.components.common.password_input = (function megasite$components$common$password_input(var_args){
var args__35637__auto__ = [];
var len__35630__auto___37743 = arguments.length;
var i__35631__auto___37744 = (0);
while(true){
if((i__35631__auto___37744 < len__35630__auto___37743)){
args__35637__auto__.push((arguments[i__35631__auto___37744]));

var G__37745 = (i__35631__auto___37744 + (1));
i__35631__auto___37744 = G__37745;
continue;
} else {
}
break;
}

var argseq__35638__auto__ = ((((4) < args__35637__auto__.length))?(new cljs.core.IndexedSeq(args__35637__auto__.slice((4)),(0))):null);
return megasite.components.common.password_input.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__35638__auto__);
});

megasite.components.common.password_input.cljs$core$IFn$_invoke$arity$variadic = (function (label,id,placeholder,fields,p__37741){
var vec__37742 = p__37741;
var optional_QMARK_ = cljs.core.nth.call(null,vec__37742,(0),null);
return megasite.components.common.form_input.call(null,new cljs.core.Keyword(null,"password","password",417022471),label,id,placeholder,fields,optional_QMARK_);
});

megasite.components.common.password_input.cljs$lang$maxFixedArity = (4);

megasite.components.common.password_input.cljs$lang$applyTo = (function (seq37736){
var G__37737 = cljs.core.first.call(null,seq37736);
var seq37736__$1 = cljs.core.next.call(null,seq37736);
var G__37738 = cljs.core.first.call(null,seq37736__$1);
var seq37736__$2 = cljs.core.next.call(null,seq37736__$1);
var G__37739 = cljs.core.first.call(null,seq37736__$2);
var seq37736__$3 = cljs.core.next.call(null,seq37736__$2);
var G__37740 = cljs.core.first.call(null,seq37736__$3);
var seq37736__$4 = cljs.core.next.call(null,seq37736__$3);
return megasite.components.common.password_input.cljs$core$IFn$_invoke$arity$variadic(G__37737,G__37738,G__37739,G__37740,seq37736__$4);
});

//# sourceMappingURL=common.js.map