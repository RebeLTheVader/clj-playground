// Compiled by ClojureScript 1.7.228 {}
goog.provide('megasite.components.registration');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('megasite.components.common');
megasite.components.registration.registration_form = (function megasite$components$registration$registration_form(){
var fields = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [megasite.components.common.modal,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Megasite Registration"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.well.well-sm","div.well.well-sm",-921823204),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000)," \u2731 required field"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [megasite.components.common.text_input,"name",new cljs.core.Keyword(null,"id","id",-1388402092),"enter a user name",fields], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [megasite.components.common.password_input,"password",new cljs.core.Keyword(null,"pass","pass",1574159993),"enter a password",fields], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [megasite.components.common.password_input,"password",new cljs.core.Keyword(null,"pass-confirm","pass-confirm",-2050932590),"re-enter password",fields], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-primary","button.btn.btn-primary",510358192),"Register"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-danger","button.btn.btn-danger",533883282),"Cancel"], null)], null)], null);
});
;})(fields))
});

//# sourceMappingURL=registration.js.map