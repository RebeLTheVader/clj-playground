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
var seq__43520_43534 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43521_43535 = null;
var count__43522_43536 = (0);
var i__43523_43537 = (0);
while(true){
if((i__43523_43537 < count__43522_43536)){
var f_43538 = cljs.core._nth.call(null,chunk__43521_43535,i__43523_43537);
cljs.core.println.call(null,"  ",f_43538);

var G__43539 = seq__43520_43534;
var G__43540 = chunk__43521_43535;
var G__43541 = count__43522_43536;
var G__43542 = (i__43523_43537 + (1));
seq__43520_43534 = G__43539;
chunk__43521_43535 = G__43540;
count__43522_43536 = G__43541;
i__43523_43537 = G__43542;
continue;
} else {
var temp__4657__auto___43543 = cljs.core.seq.call(null,seq__43520_43534);
if(temp__4657__auto___43543){
var seq__43520_43544__$1 = temp__4657__auto___43543;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43520_43544__$1)){
var c__35375__auto___43545 = cljs.core.chunk_first.call(null,seq__43520_43544__$1);
var G__43546 = cljs.core.chunk_rest.call(null,seq__43520_43544__$1);
var G__43547 = c__35375__auto___43545;
var G__43548 = cljs.core.count.call(null,c__35375__auto___43545);
var G__43549 = (0);
seq__43520_43534 = G__43546;
chunk__43521_43535 = G__43547;
count__43522_43536 = G__43548;
i__43523_43537 = G__43549;
continue;
} else {
var f_43550 = cljs.core.first.call(null,seq__43520_43544__$1);
cljs.core.println.call(null,"  ",f_43550);

var G__43551 = cljs.core.next.call(null,seq__43520_43544__$1);
var G__43552 = null;
var G__43553 = (0);
var G__43554 = (0);
seq__43520_43534 = G__43551;
chunk__43521_43535 = G__43552;
count__43522_43536 = G__43553;
i__43523_43537 = G__43554;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_43555 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__34572__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__34572__auto__)){
return or__34572__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_43555);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_43555)))?cljs.core.second.call(null,arglists_43555):arglists_43555));
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
var seq__43524 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__43525 = null;
var count__43526 = (0);
var i__43527 = (0);
while(true){
if((i__43527 < count__43526)){
var vec__43528 = cljs.core._nth.call(null,chunk__43525,i__43527);
var name = cljs.core.nth.call(null,vec__43528,(0),null);
var map__43529 = cljs.core.nth.call(null,vec__43528,(1),null);
var map__43529__$1 = ((((!((map__43529 == null)))?((((map__43529.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43529.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43529):map__43529);
var doc = cljs.core.get.call(null,map__43529__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__43529__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__43556 = seq__43524;
var G__43557 = chunk__43525;
var G__43558 = count__43526;
var G__43559 = (i__43527 + (1));
seq__43524 = G__43556;
chunk__43525 = G__43557;
count__43526 = G__43558;
i__43527 = G__43559;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__43524);
if(temp__4657__auto__){
var seq__43524__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43524__$1)){
var c__35375__auto__ = cljs.core.chunk_first.call(null,seq__43524__$1);
var G__43560 = cljs.core.chunk_rest.call(null,seq__43524__$1);
var G__43561 = c__35375__auto__;
var G__43562 = cljs.core.count.call(null,c__35375__auto__);
var G__43563 = (0);
seq__43524 = G__43560;
chunk__43525 = G__43561;
count__43526 = G__43562;
i__43527 = G__43563;
continue;
} else {
var vec__43531 = cljs.core.first.call(null,seq__43524__$1);
var name = cljs.core.nth.call(null,vec__43531,(0),null);
var map__43532 = cljs.core.nth.call(null,vec__43531,(1),null);
var map__43532__$1 = ((((!((map__43532 == null)))?((((map__43532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43532):map__43532);
var doc = cljs.core.get.call(null,map__43532__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__43532__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__43564 = cljs.core.next.call(null,seq__43524__$1);
var G__43565 = null;
var G__43566 = (0);
var G__43567 = (0);
seq__43524 = G__43564;
chunk__43525 = G__43565;
count__43526 = G__43566;
i__43527 = G__43567;
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