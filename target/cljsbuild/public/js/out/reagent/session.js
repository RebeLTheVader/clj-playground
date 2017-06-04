// Compiled by ClojureScript 1.7.228 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__35621__auto__ = [];
var len__35614__auto___41148 = arguments.length;
var i__35615__auto___41149 = (0);
while(true){
if((i__35615__auto___41149 < len__35614__auto___41148)){
args__35621__auto__.push((arguments[i__35615__auto___41149]));

var G__41150 = (i__35615__auto___41149 + (1));
i__35615__auto___41149 = G__41150;
continue;
} else {
}
break;
}

var argseq__35622__auto__ = ((((1) < args__35621__auto__.length))?(new cljs.core.IndexedSeq(args__35621__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35622__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__41146){
var vec__41147 = p__41146;
var default$ = cljs.core.nth.call(null,vec__41147,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq41144){
var G__41145 = cljs.core.first.call(null,seq41144);
var seq41144__$1 = cljs.core.next.call(null,seq41144);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__41145,seq41144__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__35621__auto__ = [];
var len__35614__auto___41155 = arguments.length;
var i__35615__auto___41156 = (0);
while(true){
if((i__35615__auto___41156 < len__35614__auto___41155)){
args__35621__auto__.push((arguments[i__35615__auto___41156]));

var G__41157 = (i__35615__auto___41156 + (1));
i__35615__auto___41156 = G__41157;
continue;
} else {
}
break;
}

var argseq__35622__auto__ = ((((1) < args__35621__auto__.length))?(new cljs.core.IndexedSeq(args__35621__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35622__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__41153){
var vec__41154 = p__41153;
var default$ = cljs.core.nth.call(null,vec__41154,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq41151){
var G__41152 = cljs.core.first.call(null,seq41151);
var seq41151__$1 = cljs.core.next.call(null,seq41151);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__41152,seq41151__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__35621__auto__ = [];
var len__35614__auto___41160 = arguments.length;
var i__35615__auto___41161 = (0);
while(true){
if((i__35615__auto___41161 < len__35614__auto___41160)){
args__35621__auto__.push((arguments[i__35615__auto___41161]));

var G__41162 = (i__35615__auto___41161 + (1));
i__35615__auto___41161 = G__41162;
continue;
} else {
}
break;
}

var argseq__35622__auto__ = ((((1) < args__35621__auto__.length))?(new cljs.core.IndexedSeq(args__35621__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35622__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq41158){
var G__41159 = cljs.core.first.call(null,seq41158);
var seq41158__$1 = cljs.core.next.call(null,seq41158);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41159,seq41158__$1);
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
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__41163_SHARP_){
return cljs.core.assoc_in.call(null,p1__41163_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__35621__auto__ = [];
var len__35614__auto___41168 = arguments.length;
var i__35615__auto___41169 = (0);
while(true){
if((i__35615__auto___41169 < len__35614__auto___41168)){
args__35621__auto__.push((arguments[i__35615__auto___41169]));

var G__41170 = (i__35615__auto___41169 + (1));
i__35615__auto___41169 = G__41170;
continue;
} else {
}
break;
}

var argseq__35622__auto__ = ((((1) < args__35621__auto__.length))?(new cljs.core.IndexedSeq(args__35621__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35622__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__41166){
var vec__41167 = p__41166;
var default$ = cljs.core.nth.call(null,vec__41167,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq41164){
var G__41165 = cljs.core.first.call(null,seq41164);
var seq41164__$1 = cljs.core.next.call(null,seq41164);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41165,seq41164__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__35621__auto__ = [];
var len__35614__auto___41175 = arguments.length;
var i__35615__auto___41176 = (0);
while(true){
if((i__35615__auto___41176 < len__35614__auto___41175)){
args__35621__auto__.push((arguments[i__35615__auto___41176]));

var G__41177 = (i__35615__auto___41176 + (1));
i__35615__auto___41176 = G__41177;
continue;
} else {
}
break;
}

var argseq__35622__auto__ = ((((1) < args__35621__auto__.length))?(new cljs.core.IndexedSeq(args__35621__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35622__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__41173){
var vec__41174 = p__41173;
var default$ = cljs.core.nth.call(null,vec__41174,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq41171){
var G__41172 = cljs.core.first.call(null,seq41171);
var seq41171__$1 = cljs.core.next.call(null,seq41171);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41172,seq41171__$1);
});
/**
 * Updates a value in session where k is a key and f
 * is the function that takes the old value along with any
 * supplied args and return the new value. If key is not
 * present it will be added.
 */
reagent.session.update_BANG_ = (function reagent$session$update_BANG_(var_args){
var args__35621__auto__ = [];
var len__35614__auto___41182 = arguments.length;
var i__35615__auto___41183 = (0);
while(true){
if((i__35615__auto___41183 < len__35614__auto___41182)){
args__35621__auto__.push((arguments[i__35615__auto___41183]));

var G__41184 = (i__35615__auto___41183 + (1));
i__35615__auto___41183 = G__41184;
continue;
} else {
}
break;
}

var argseq__35622__auto__ = ((((2) < args__35621__auto__.length))?(new cljs.core.IndexedSeq(args__35621__auto__.slice((2)),(0))):null);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35622__auto__);
});

reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__41178_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update,p1__41178_SHARP_,k,f),args);
}));
});

reagent.session.update_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_BANG_.cljs$lang$applyTo = (function (seq41179){
var G__41180 = cljs.core.first.call(null,seq41179);
var seq41179__$1 = cljs.core.next.call(null,seq41179);
var G__41181 = cljs.core.first.call(null,seq41179__$1);
var seq41179__$2 = cljs.core.next.call(null,seq41179__$1);
return reagent.session.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41180,G__41181,seq41179__$2);
});
/**
 * 'Updates a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__35621__auto__ = [];
var len__35614__auto___41189 = arguments.length;
var i__35615__auto___41190 = (0);
while(true){
if((i__35615__auto___41190 < len__35614__auto___41189)){
args__35621__auto__.push((arguments[i__35615__auto___41190]));

var G__41191 = (i__35615__auto___41190 + (1));
i__35615__auto___41190 = G__41191;
continue;
} else {
}
break;
}

var argseq__35622__auto__ = ((((2) < args__35621__auto__.length))?(new cljs.core.IndexedSeq(args__35621__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35622__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__41185_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__41185_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq41186){
var G__41187 = cljs.core.first.call(null,seq41186);
var seq41186__$1 = cljs.core.next.call(null,seq41186);
var G__41188 = cljs.core.first.call(null,seq41186__$1);
var seq41186__$2 = cljs.core.next.call(null,seq41186__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41187,G__41188,seq41186__$2);
});

//# sourceMappingURL=session.js.map