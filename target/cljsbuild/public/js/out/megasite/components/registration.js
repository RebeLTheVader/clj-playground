// Compiled by ClojureScript 1.7.228 {}
goog.provide('megasite.components.registration');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('megasite.components.common');
goog.require('ajax.core');
goog.require('megasite.validation');
megasite.components.registration.register_BANG_ = (function megasite$components$registration$register_BANG_(fields,errors){
cljs.core.reset_BANG_.call(null,errors,megasite.validation.registration_errors.call(null,cljs.core.deref.call(null,fields)));

if(cljs.core.truth_(cljs.core.deref.call(null,errors))){
return null;
} else {
return ajax.core.POST.call(null,"/register",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"params","params",710516235),cljs.core.deref.call(null,fields),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"identity","identity",1647396035),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,fields)));

cljs.core.reset_BANG_.call(null,fields,cljs.core.PersistentArrayMap.EMPTY);

return reagent.session.remove_BANG_.call(null,new cljs.core.Keyword(null,"modal","modal",-1031880850));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (p1__46506_SHARP_){
return cljs.core.reset_BANG_.call(null,errors,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"server-error","server-error",-426815993),cljs.core.get_in.call(null,p1__46506_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.Keyword(null,"message","message",-406056002)], null))], null));
})], null));
}
});
megasite.components.registration.registration_form = (function megasite$components$registration$registration_form(){
var fields = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var error = reagent.core.atom.call(null,null);
return ((function (fields,error){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [megasite.components.common.modal,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Megasite Registration"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.well.well-sm","div.well.well-sm",-921823204),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000)," \u2731 required field"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [megasite.components.common.text_input,"name",new cljs.core.Keyword(null,"id","id",-1388402092),"enter a user name",fields], null),(function (){var temp__4657__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,error)));
if(cljs.core.truth_(temp__4657__auto__)){
var error__$1 = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-danger","div.alert.alert-danger",-890058301),error__$1], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [megasite.components.common.password_input,"password",new cljs.core.Keyword(null,"pass","pass",1574159993),"enter a password",fields], null),(function (){var temp__4657__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"pass","pass",1574159993).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,error)));
if(cljs.core.truth_(temp__4657__auto__)){
var error__$1 = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-danger","div.alert.alert-danger",-890058301),error__$1], null);
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [megasite.components.common.password_input,"password",new cljs.core.Keyword(null,"pass-confirm","pass-confirm",-2050932590),"re-enter password",fields], null),(function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"server-error","server-error",-426815993).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,error));
if(cljs.core.truth_(temp__4657__auto__)){
var error__$1 = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.alert.alert-danger","div.alert.alert-danger",-890058301),error__$1], null);
} else {
return null;
}
})()], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (fields,error){
return (function (){
return megasite.components.registration.register_BANG_.call(null,fields,error);
});})(fields,error))
], null),"Register"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-danger","button.btn.btn-danger",533883282),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (fields,error){
return (function (){
return reagent.session.remove_BANG_.call(null,new cljs.core.Keyword(null,"modal","modal",-1031880850));
});})(fields,error))
], null),"Cancel"], null)], null)], null);
});
;})(fields,error))
});
megasite.components.registration.registration_button = (function megasite$components$registration$registration_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary.btn-sm","a.btn.btn-primary.btn-sm",1918205192),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"modal","modal",-1031880850),megasite.components.registration.registration_form);
})], null),"register"], null);
});

//# sourceMappingURL=registration.js.map