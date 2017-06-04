// Compiled by ClojureScript 1.7.228 {}
goog.provide('megasite.validation');
goog.require('cljs.core');
goog.require('bouncer.core');
goog.require('bouncer.validators');
megasite.validation.registration_errors = (function megasite$validation$registration_errors(p__41377){
var map__41380 = p__41377;
var map__41380__$1 = ((((!((map__41380 == null)))?((((map__41380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41380):map__41380);
var params = map__41380__$1;
var pass_confirm = cljs.core.get.call(null,map__41380__$1,new cljs.core.Keyword(null,"pass-confirm","pass-confirm",-2050932590));
return cljs.core.first.call(null,bouncer.core.validate.call(null,params,new cljs.core.Keyword(null,"id","id",-1388402092),bouncer.validators.required,new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.required,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.validators.min_count,(7),new cljs.core.Keyword(null,"message","message",-406056002),"password must contain at least 8 characters"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_,pass_confirm,new cljs.core.Keyword(null,"message","message",-406056002),"re-entered password does not match"], null)], null)));
});

//# sourceMappingURL=validation.js.map