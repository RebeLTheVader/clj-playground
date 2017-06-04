// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45271_45285 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45272_45286 = null;
var count__45273_45287 = (0);
var i__45274_45288 = (0);
while(true){
if((i__45274_45288 < count__45273_45287)){
var f_45289 = cljs.core._nth.call(null,chunk__45272_45286,i__45274_45288);
cljs.core.println.call(null,"  ",f_45289);

var G__45290 = seq__45271_45285;
var G__45291 = chunk__45272_45286;
var G__45292 = count__45273_45287;
var G__45293 = (i__45274_45288 + (1));
seq__45271_45285 = G__45290;
chunk__45272_45286 = G__45291;
count__45273_45287 = G__45292;
i__45274_45288 = G__45293;
continue;
} else {
var temp__4657__auto___45294 = cljs.core.seq.call(null,seq__45271_45285);
if(temp__4657__auto___45294){
var seq__45271_45295__$1 = temp__4657__auto___45294;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45271_45295__$1)){
var c__35359__auto___45296 = cljs.core.chunk_first.call(null,seq__45271_45295__$1);
var G__45297 = cljs.core.chunk_rest.call(null,seq__45271_45295__$1);
var G__45298 = c__35359__auto___45296;
var G__45299 = cljs.core.count.call(null,c__35359__auto___45296);
var G__45300 = (0);
seq__45271_45285 = G__45297;
chunk__45272_45286 = G__45298;
count__45273_45287 = G__45299;
i__45274_45288 = G__45300;
continue;
} else {
var f_45301 = cljs.core.first.call(null,seq__45271_45295__$1);
cljs.core.println.call(null,"  ",f_45301);

var G__45302 = cljs.core.next.call(null,seq__45271_45295__$1);
var G__45303 = null;
var G__45304 = (0);
var G__45305 = (0);
seq__45271_45285 = G__45302;
chunk__45272_45286 = G__45303;
count__45273_45287 = G__45304;
i__45274_45288 = G__45305;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_45306 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__34556__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__34556__auto__)){
return or__34556__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_45306);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_45306)))?cljs.core.second.call(null,arglists_45306):arglists_45306));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__45275 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__45276 = null;
var count__45277 = (0);
var i__45278 = (0);
while(true){
if((i__45278 < count__45277)){
var vec__45279 = cljs.core._nth.call(null,chunk__45276,i__45278);
var name = cljs.core.nth.call(null,vec__45279,(0),null);
var map__45280 = cljs.core.nth.call(null,vec__45279,(1),null);
var map__45280__$1 = ((((!((map__45280 == null)))?((((map__45280.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45280.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45280):map__45280);
var doc = cljs.core.get.call(null,map__45280__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__45280__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__45307 = seq__45275;
var G__45308 = chunk__45276;
var G__45309 = count__45277;
var G__45310 = (i__45278 + (1));
seq__45275 = G__45307;
chunk__45276 = G__45308;
count__45277 = G__45309;
i__45278 = G__45310;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__45275);
if(temp__4657__auto__){
var seq__45275__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45275__$1)){
var c__35359__auto__ = cljs.core.chunk_first.call(null,seq__45275__$1);
var G__45311 = cljs.core.chunk_rest.call(null,seq__45275__$1);
var G__45312 = c__35359__auto__;
var G__45313 = cljs.core.count.call(null,c__35359__auto__);
var G__45314 = (0);
seq__45275 = G__45311;
chunk__45276 = G__45312;
count__45277 = G__45313;
i__45278 = G__45314;
continue;
} else {
var vec__45282 = cljs.core.first.call(null,seq__45275__$1);
var name = cljs.core.nth.call(null,vec__45282,(0),null);
var map__45283 = cljs.core.nth.call(null,vec__45282,(1),null);
var map__45283__$1 = ((((!((map__45283 == null)))?((((map__45283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45283):map__45283);
var doc = cljs.core.get.call(null,map__45283__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__45283__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__45315 = cljs.core.next.call(null,seq__45275__$1);
var G__45316 = null;
var G__45317 = (0);
var G__45318 = (0);
seq__45275 = G__45315;
chunk__45276 = G__45316;
count__45277 = G__45317;
i__45278 = G__45318;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map