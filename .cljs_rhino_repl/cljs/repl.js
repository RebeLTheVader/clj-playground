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
var seq__47066_47080 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47067_47081 = null;
var count__47068_47082 = (0);
var i__47069_47083 = (0);
while(true){
if((i__47069_47083 < count__47068_47082)){
var f_47084 = cljs.core._nth.call(null,chunk__47067_47081,i__47069_47083);
cljs.core.println.call(null,"  ",f_47084);

var G__47085 = seq__47066_47080;
var G__47086 = chunk__47067_47081;
var G__47087 = count__47068_47082;
var G__47088 = (i__47069_47083 + (1));
seq__47066_47080 = G__47085;
chunk__47067_47081 = G__47086;
count__47068_47082 = G__47087;
i__47069_47083 = G__47088;
continue;
} else {
var temp__4657__auto___47089 = cljs.core.seq.call(null,seq__47066_47080);
if(temp__4657__auto___47089){
var seq__47066_47090__$1 = temp__4657__auto___47089;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47066_47090__$1)){
var c__46713__auto___47091 = cljs.core.chunk_first.call(null,seq__47066_47090__$1);
var G__47092 = cljs.core.chunk_rest.call(null,seq__47066_47090__$1);
var G__47093 = c__46713__auto___47091;
var G__47094 = cljs.core.count.call(null,c__46713__auto___47091);
var G__47095 = (0);
seq__47066_47080 = G__47092;
chunk__47067_47081 = G__47093;
count__47068_47082 = G__47094;
i__47069_47083 = G__47095;
continue;
} else {
var f_47096 = cljs.core.first.call(null,seq__47066_47090__$1);
cljs.core.println.call(null,"  ",f_47096);

var G__47097 = cljs.core.next.call(null,seq__47066_47090__$1);
var G__47098 = null;
var G__47099 = (0);
var G__47100 = (0);
seq__47066_47080 = G__47097;
chunk__47067_47081 = G__47098;
count__47068_47082 = G__47099;
i__47069_47083 = G__47100;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_47101 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__45910__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__45910__auto__)){
return or__45910__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_47101);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_47101)))?cljs.core.second.call(null,arglists_47101):arglists_47101));
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
var seq__47070 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__47071 = null;
var count__47072 = (0);
var i__47073 = (0);
while(true){
if((i__47073 < count__47072)){
var vec__47074 = cljs.core._nth.call(null,chunk__47071,i__47073);
var name = cljs.core.nth.call(null,vec__47074,(0),null);
var map__47075 = cljs.core.nth.call(null,vec__47074,(1),null);
var map__47075__$1 = ((((!((map__47075 == null)))?((((map__47075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47075):map__47075);
var doc = cljs.core.get.call(null,map__47075__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__47075__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__47102 = seq__47070;
var G__47103 = chunk__47071;
var G__47104 = count__47072;
var G__47105 = (i__47073 + (1));
seq__47070 = G__47102;
chunk__47071 = G__47103;
count__47072 = G__47104;
i__47073 = G__47105;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47070);
if(temp__4657__auto__){
var seq__47070__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47070__$1)){
var c__46713__auto__ = cljs.core.chunk_first.call(null,seq__47070__$1);
var G__47106 = cljs.core.chunk_rest.call(null,seq__47070__$1);
var G__47107 = c__46713__auto__;
var G__47108 = cljs.core.count.call(null,c__46713__auto__);
var G__47109 = (0);
seq__47070 = G__47106;
chunk__47071 = G__47107;
count__47072 = G__47108;
i__47073 = G__47109;
continue;
} else {
var vec__47077 = cljs.core.first.call(null,seq__47070__$1);
var name = cljs.core.nth.call(null,vec__47077,(0),null);
var map__47078 = cljs.core.nth.call(null,vec__47077,(1),null);
var map__47078__$1 = ((((!((map__47078 == null)))?((((map__47078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47078):map__47078);
var doc = cljs.core.get.call(null,map__47078__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__47078__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__47110 = cljs.core.next.call(null,seq__47070__$1);
var G__47111 = null;
var G__47112 = (0);
var G__47113 = (0);
seq__47070 = G__47110;
chunk__47071 = G__47111;
count__47072 = G__47112;
i__47073 = G__47113;
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