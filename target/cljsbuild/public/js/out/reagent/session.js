// Compiled by ClojureScript 1.7.228 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__35637__auto__ = [];
var len__35630__auto___39390 = arguments.length;
var i__35631__auto___39391 = (0);
while(true){
if((i__35631__auto___39391 < len__35630__auto___39390)){
args__35637__auto__.push((arguments[i__35631__auto___39391]));

var G__39392 = (i__35631__auto___39391 + (1));
i__35631__auto___39391 = G__39392;
continue;
} else {
}
break;
}

var argseq__35638__auto__ = ((((1) < args__35637__auto__.length))?(new cljs.core.IndexedSeq(args__35637__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35638__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__39388){
var vec__39389 = p__39388;
var default$ = cljs.core.nth.call(null,vec__39389,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq39386){
var G__39387 = cljs.core.first.call(null,seq39386);
var seq39386__$1 = cljs.core.next.call(null,seq39386);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__39387,seq39386__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__35637__auto__ = [];
var len__35630__auto___39397 = arguments.length;
var i__35631__auto___39398 = (0);
while(true){
if((i__35631__auto___39398 < len__35630__auto___39397)){
args__35637__auto__.push((arguments[i__35631__auto___39398]));

var G__39399 = (i__35631__auto___39398 + (1));
i__35631__auto___39398 = G__39399;
continue;
} else {
}
break;
}

var argseq__35638__auto__ = ((((1) < args__35637__auto__.length))?(new cljs.core.IndexedSeq(args__35637__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35638__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__39395){
var vec__39396 = p__39395;
var default$ = cljs.core.nth.call(null,vec__39396,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq39393){
var G__39394 = cljs.core.first.call(null,seq39393);
var seq39393__$1 = cljs.core.next.call(null,seq39393);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__39394,seq39393__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__35637__auto__ = [];
var len__35630__auto___39402 = arguments.length;
var i__35631__auto___39403 = (0);
while(true){
if((i__35631__auto___39403 < len__35630__auto___39402)){
args__35637__auto__.push((arguments[i__35631__auto___39403]));

var G__39404 = (i__35631__auto___39403 + (1));
i__35631__auto___39403 = G__39404;
continue;
} else {
}
break;
}

var argseq__35638__auto__ = ((((1) < args__35637__auto__.length))?(new cljs.core.IndexedSeq(args__35637__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35638__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq39400){
var G__39401 = cljs.core.first.call(null,seq39400);
var seq39400__$1 = cljs.core.next.call(null,seq39400);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39401,seq39400__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__39405_SHARP_){
return cljs.core.assoc_in.call(null,p1__39405_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__35637__auto__ = [];
var len__35630__auto___39410 = arguments.length;
var i__35631__auto___39411 = (0);
while(true){
if((i__35631__auto___39411 < len__35630__auto___39410)){
args__35637__auto__.push((arguments[i__35631__auto___39411]));

var G__39412 = (i__35631__auto___39411 + (1));
i__35631__auto___39411 = G__39412;
continue;
} else {
}
break;
}

var argseq__35638__auto__ = ((((1) < args__35637__auto__.length))?(new cljs.core.IndexedSeq(args__35637__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35638__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__39408){
var vec__39409 = p__39408;
var default$ = cljs.core.nth.call(null,vec__39409,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq39406){
var G__39407 = cljs.core.first.call(null,seq39406);
var seq39406__$1 = cljs.core.next.call(null,seq39406);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39407,seq39406__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__35637__auto__ = [];
var len__35630__auto___39417 = arguments.length;
var i__35631__auto___39418 = (0);
while(true){
if((i__35631__auto___39418 < len__35630__auto___39417)){
args__35637__auto__.push((arguments[i__35631__auto___39418]));

var G__39419 = (i__35631__auto___39418 + (1));
i__35631__auto___39418 = G__39419;
continue;
} else {
}
break;
}

var argseq__35638__auto__ = ((((1) < args__35637__auto__.length))?(new cljs.core.IndexedSeq(args__35637__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35638__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__39415){
var vec__39416 = p__39415;
var default$ = cljs.core.nth.call(null,vec__39416,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq39413){
var G__39414 = cljs.core.first.call(null,seq39413);
var seq39413__$1 = cljs.core.next.call(null,seq39413);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39414,seq39413__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__35637__auto__ = [];
var len__35630__auto___39424 = arguments.length;
var i__35631__auto___39425 = (0);
while(true){
if((i__35631__auto___39425 < len__35630__auto___39424)){
args__35637__auto__.push((arguments[i__35631__auto___39425]));

var G__39426 = (i__35631__auto___39425 + (1));
i__35631__auto___39425 = G__39426;
continue;
} else {
}
break;
}

var argseq__35638__auto__ = ((((2) < args__35637__auto__.length))?(new cljs.core.IndexedSeq(args__35637__auto__.slice((2)),(0))):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35638__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__39420_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__39420_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq39421){
var G__39422 = cljs.core.first.call(null,seq39421);
var seq39421__$1 = cljs.core.next.call(null,seq39421);
var G__39423 = cljs.core.first.call(null,seq39421__$1);
var seq39421__$2 = cljs.core.next.call(null,seq39421__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39422,G__39423,seq39421__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__35637__auto__ = [];
var len__35630__auto___39431 = arguments.length;
var i__35631__auto___39432 = (0);
while(true){
if((i__35631__auto___39432 < len__35630__auto___39431)){
args__35637__auto__.push((arguments[i__35631__auto___39432]));

var G__39433 = (i__35631__auto___39432 + (1));
i__35631__auto___39432 = G__39433;
continue;
} else {
}
break;
}

var argseq__35638__auto__ = ((((2) < args__35637__auto__.length))?(new cljs.core.IndexedSeq(args__35637__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35638__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__39427_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__39427_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq39428){
var G__39429 = cljs.core.first.call(null,seq39428);
var seq39428__$1 = cljs.core.next.call(null,seq39428);
var G__39430 = cljs.core.first.call(null,seq39428__$1);
var seq39428__$2 = cljs.core.next.call(null,seq39428__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39429,G__39430,seq39428__$2);
});

//# sourceMappingURL=session.js.map