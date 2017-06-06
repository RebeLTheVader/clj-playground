// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__34572__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__34572__auto__){
return or__34572__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__34572__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__34572__auto__)){
return or__34572__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__42496_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__42496_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__42501 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__42502 = null;
var count__42503 = (0);
var i__42504 = (0);
while(true){
if((i__42504 < count__42503)){
var n = cljs.core._nth.call(null,chunk__42502,i__42504);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42505 = seq__42501;
var G__42506 = chunk__42502;
var G__42507 = count__42503;
var G__42508 = (i__42504 + (1));
seq__42501 = G__42505;
chunk__42502 = G__42506;
count__42503 = G__42507;
i__42504 = G__42508;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42501);
if(temp__4657__auto__){
var seq__42501__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42501__$1)){
var c__35375__auto__ = cljs.core.chunk_first.call(null,seq__42501__$1);
var G__42509 = cljs.core.chunk_rest.call(null,seq__42501__$1);
var G__42510 = c__35375__auto__;
var G__42511 = cljs.core.count.call(null,c__35375__auto__);
var G__42512 = (0);
seq__42501 = G__42509;
chunk__42502 = G__42510;
count__42503 = G__42511;
i__42504 = G__42512;
continue;
} else {
var n = cljs.core.first.call(null,seq__42501__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__42513 = cljs.core.next.call(null,seq__42501__$1);
var G__42514 = null;
var G__42515 = (0);
var G__42516 = (0);
seq__42501 = G__42513;
chunk__42502 = G__42514;
count__42503 = G__42515;
i__42504 = G__42516;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__42555_42562 = cljs.core.seq.call(null,deps);
var chunk__42556_42563 = null;
var count__42557_42564 = (0);
var i__42558_42565 = (0);
while(true){
if((i__42558_42565 < count__42557_42564)){
var dep_42566 = cljs.core._nth.call(null,chunk__42556_42563,i__42558_42565);
topo_sort_helper_STAR_.call(null,dep_42566,(depth + (1)),state);

var G__42567 = seq__42555_42562;
var G__42568 = chunk__42556_42563;
var G__42569 = count__42557_42564;
var G__42570 = (i__42558_42565 + (1));
seq__42555_42562 = G__42567;
chunk__42556_42563 = G__42568;
count__42557_42564 = G__42569;
i__42558_42565 = G__42570;
continue;
} else {
var temp__4657__auto___42571 = cljs.core.seq.call(null,seq__42555_42562);
if(temp__4657__auto___42571){
var seq__42555_42572__$1 = temp__4657__auto___42571;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42555_42572__$1)){
var c__35375__auto___42573 = cljs.core.chunk_first.call(null,seq__42555_42572__$1);
var G__42574 = cljs.core.chunk_rest.call(null,seq__42555_42572__$1);
var G__42575 = c__35375__auto___42573;
var G__42576 = cljs.core.count.call(null,c__35375__auto___42573);
var G__42577 = (0);
seq__42555_42562 = G__42574;
chunk__42556_42563 = G__42575;
count__42557_42564 = G__42576;
i__42558_42565 = G__42577;
continue;
} else {
var dep_42578 = cljs.core.first.call(null,seq__42555_42572__$1);
topo_sort_helper_STAR_.call(null,dep_42578,(depth + (1)),state);

var G__42579 = cljs.core.next.call(null,seq__42555_42572__$1);
var G__42580 = null;
var G__42581 = (0);
var G__42582 = (0);
seq__42555_42562 = G__42579;
chunk__42556_42563 = G__42580;
count__42557_42564 = G__42581;
i__42558_42565 = G__42582;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__42559){
var vec__42561 = p__42559;
var x = cljs.core.nth.call(null,vec__42561,(0),null);
var xs = cljs.core.nthnext.call(null,vec__42561,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__42561,x,xs,get_deps__$1){
return (function (p1__42517_SHARP_){
return clojure.set.difference.call(null,p1__42517_SHARP_,x);
});})(vec__42561,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__42595 = cljs.core.seq.call(null,provides);
var chunk__42596 = null;
var count__42597 = (0);
var i__42598 = (0);
while(true){
if((i__42598 < count__42597)){
var prov = cljs.core._nth.call(null,chunk__42596,i__42598);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42599_42607 = cljs.core.seq.call(null,requires);
var chunk__42600_42608 = null;
var count__42601_42609 = (0);
var i__42602_42610 = (0);
while(true){
if((i__42602_42610 < count__42601_42609)){
var req_42611 = cljs.core._nth.call(null,chunk__42600_42608,i__42602_42610);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42611,prov);

var G__42612 = seq__42599_42607;
var G__42613 = chunk__42600_42608;
var G__42614 = count__42601_42609;
var G__42615 = (i__42602_42610 + (1));
seq__42599_42607 = G__42612;
chunk__42600_42608 = G__42613;
count__42601_42609 = G__42614;
i__42602_42610 = G__42615;
continue;
} else {
var temp__4657__auto___42616 = cljs.core.seq.call(null,seq__42599_42607);
if(temp__4657__auto___42616){
var seq__42599_42617__$1 = temp__4657__auto___42616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42599_42617__$1)){
var c__35375__auto___42618 = cljs.core.chunk_first.call(null,seq__42599_42617__$1);
var G__42619 = cljs.core.chunk_rest.call(null,seq__42599_42617__$1);
var G__42620 = c__35375__auto___42618;
var G__42621 = cljs.core.count.call(null,c__35375__auto___42618);
var G__42622 = (0);
seq__42599_42607 = G__42619;
chunk__42600_42608 = G__42620;
count__42601_42609 = G__42621;
i__42602_42610 = G__42622;
continue;
} else {
var req_42623 = cljs.core.first.call(null,seq__42599_42617__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42623,prov);

var G__42624 = cljs.core.next.call(null,seq__42599_42617__$1);
var G__42625 = null;
var G__42626 = (0);
var G__42627 = (0);
seq__42599_42607 = G__42624;
chunk__42600_42608 = G__42625;
count__42601_42609 = G__42626;
i__42602_42610 = G__42627;
continue;
}
} else {
}
}
break;
}

var G__42628 = seq__42595;
var G__42629 = chunk__42596;
var G__42630 = count__42597;
var G__42631 = (i__42598 + (1));
seq__42595 = G__42628;
chunk__42596 = G__42629;
count__42597 = G__42630;
i__42598 = G__42631;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42595);
if(temp__4657__auto__){
var seq__42595__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42595__$1)){
var c__35375__auto__ = cljs.core.chunk_first.call(null,seq__42595__$1);
var G__42632 = cljs.core.chunk_rest.call(null,seq__42595__$1);
var G__42633 = c__35375__auto__;
var G__42634 = cljs.core.count.call(null,c__35375__auto__);
var G__42635 = (0);
seq__42595 = G__42632;
chunk__42596 = G__42633;
count__42597 = G__42634;
i__42598 = G__42635;
continue;
} else {
var prov = cljs.core.first.call(null,seq__42595__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42603_42636 = cljs.core.seq.call(null,requires);
var chunk__42604_42637 = null;
var count__42605_42638 = (0);
var i__42606_42639 = (0);
while(true){
if((i__42606_42639 < count__42605_42638)){
var req_42640 = cljs.core._nth.call(null,chunk__42604_42637,i__42606_42639);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42640,prov);

var G__42641 = seq__42603_42636;
var G__42642 = chunk__42604_42637;
var G__42643 = count__42605_42638;
var G__42644 = (i__42606_42639 + (1));
seq__42603_42636 = G__42641;
chunk__42604_42637 = G__42642;
count__42605_42638 = G__42643;
i__42606_42639 = G__42644;
continue;
} else {
var temp__4657__auto___42645__$1 = cljs.core.seq.call(null,seq__42603_42636);
if(temp__4657__auto___42645__$1){
var seq__42603_42646__$1 = temp__4657__auto___42645__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42603_42646__$1)){
var c__35375__auto___42647 = cljs.core.chunk_first.call(null,seq__42603_42646__$1);
var G__42648 = cljs.core.chunk_rest.call(null,seq__42603_42646__$1);
var G__42649 = c__35375__auto___42647;
var G__42650 = cljs.core.count.call(null,c__35375__auto___42647);
var G__42651 = (0);
seq__42603_42636 = G__42648;
chunk__42604_42637 = G__42649;
count__42605_42638 = G__42650;
i__42606_42639 = G__42651;
continue;
} else {
var req_42652 = cljs.core.first.call(null,seq__42603_42646__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42652,prov);

var G__42653 = cljs.core.next.call(null,seq__42603_42646__$1);
var G__42654 = null;
var G__42655 = (0);
var G__42656 = (0);
seq__42603_42636 = G__42653;
chunk__42604_42637 = G__42654;
count__42605_42638 = G__42655;
i__42606_42639 = G__42656;
continue;
}
} else {
}
}
break;
}

var G__42657 = cljs.core.next.call(null,seq__42595__$1);
var G__42658 = null;
var G__42659 = (0);
var G__42660 = (0);
seq__42595 = G__42657;
chunk__42596 = G__42658;
count__42597 = G__42659;
i__42598 = G__42660;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__42665_42669 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__42666_42670 = null;
var count__42667_42671 = (0);
var i__42668_42672 = (0);
while(true){
if((i__42668_42672 < count__42667_42671)){
var ns_42673 = cljs.core._nth.call(null,chunk__42666_42670,i__42668_42672);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42673);

var G__42674 = seq__42665_42669;
var G__42675 = chunk__42666_42670;
var G__42676 = count__42667_42671;
var G__42677 = (i__42668_42672 + (1));
seq__42665_42669 = G__42674;
chunk__42666_42670 = G__42675;
count__42667_42671 = G__42676;
i__42668_42672 = G__42677;
continue;
} else {
var temp__4657__auto___42678 = cljs.core.seq.call(null,seq__42665_42669);
if(temp__4657__auto___42678){
var seq__42665_42679__$1 = temp__4657__auto___42678;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42665_42679__$1)){
var c__35375__auto___42680 = cljs.core.chunk_first.call(null,seq__42665_42679__$1);
var G__42681 = cljs.core.chunk_rest.call(null,seq__42665_42679__$1);
var G__42682 = c__35375__auto___42680;
var G__42683 = cljs.core.count.call(null,c__35375__auto___42680);
var G__42684 = (0);
seq__42665_42669 = G__42681;
chunk__42666_42670 = G__42682;
count__42667_42671 = G__42683;
i__42668_42672 = G__42684;
continue;
} else {
var ns_42685 = cljs.core.first.call(null,seq__42665_42679__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42685);

var G__42686 = cljs.core.next.call(null,seq__42665_42679__$1);
var G__42687 = null;
var G__42688 = (0);
var G__42689 = (0);
seq__42665_42669 = G__42686;
chunk__42666_42670 = G__42687;
count__42667_42671 = G__42688;
i__42668_42672 = G__42689;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__34572__auto__ = goog.require__;
if(cljs.core.truth_(or__34572__auto__)){
return or__34572__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__42690__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__42690 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42691__i = 0, G__42691__a = new Array(arguments.length -  0);
while (G__42691__i < G__42691__a.length) {G__42691__a[G__42691__i] = arguments[G__42691__i + 0]; ++G__42691__i;}
  args = new cljs.core.IndexedSeq(G__42691__a,0);
} 
return G__42690__delegate.call(this,args);};
G__42690.cljs$lang$maxFixedArity = 0;
G__42690.cljs$lang$applyTo = (function (arglist__42692){
var args = cljs.core.seq(arglist__42692);
return G__42690__delegate(args);
});
G__42690.cljs$core$IFn$_invoke$arity$variadic = G__42690__delegate;
return G__42690;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__42694 = cljs.core._EQ_;
var expr__42695 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__42694.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__42695))){
var path_parts = ((function (pred__42694,expr__42695){
return (function (p1__42693_SHARP_){
return clojure.string.split.call(null,p1__42693_SHARP_,/[\/\\]/);
});})(pred__42694,expr__42695))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__42694,expr__42695){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e42697){if((e42697 instanceof Error)){
var e = e42697;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42697;

}
}})());
});
;})(path_parts,sep,root,pred__42694,expr__42695))
} else {
if(cljs.core.truth_(pred__42694.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__42695))){
return ((function (pred__42694,expr__42695){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__42694,expr__42695){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__42694,expr__42695))
);

return deferred.addErrback(((function (deferred,pred__42694,expr__42695){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__42694,expr__42695))
);
});
;})(pred__42694,expr__42695))
} else {
return ((function (pred__42694,expr__42695){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__42694,expr__42695))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__42698,callback){
var map__42701 = p__42698;
var map__42701__$1 = ((((!((map__42701 == null)))?((((map__42701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42701):map__42701);
var file_msg = map__42701__$1;
var request_url = cljs.core.get.call(null,map__42701__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__42701,map__42701__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__42701,map__42701__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__37149__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto__){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto__){
return (function (state_42725){
var state_val_42726 = (state_42725[(1)]);
if((state_val_42726 === (7))){
var inst_42721 = (state_42725[(2)]);
var state_42725__$1 = state_42725;
var statearr_42727_42747 = state_42725__$1;
(statearr_42727_42747[(2)] = inst_42721);

(statearr_42727_42747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42726 === (1))){
var state_42725__$1 = state_42725;
var statearr_42728_42748 = state_42725__$1;
(statearr_42728_42748[(2)] = null);

(statearr_42728_42748[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42726 === (4))){
var inst_42705 = (state_42725[(7)]);
var inst_42705__$1 = (state_42725[(2)]);
var state_42725__$1 = (function (){var statearr_42729 = state_42725;
(statearr_42729[(7)] = inst_42705__$1);

return statearr_42729;
})();
if(cljs.core.truth_(inst_42705__$1)){
var statearr_42730_42749 = state_42725__$1;
(statearr_42730_42749[(1)] = (5));

} else {
var statearr_42731_42750 = state_42725__$1;
(statearr_42731_42750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42726 === (6))){
var state_42725__$1 = state_42725;
var statearr_42732_42751 = state_42725__$1;
(statearr_42732_42751[(2)] = null);

(statearr_42732_42751[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42726 === (3))){
var inst_42723 = (state_42725[(2)]);
var state_42725__$1 = state_42725;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42725__$1,inst_42723);
} else {
if((state_val_42726 === (2))){
var state_42725__$1 = state_42725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42725__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_42726 === (11))){
var inst_42717 = (state_42725[(2)]);
var state_42725__$1 = (function (){var statearr_42733 = state_42725;
(statearr_42733[(8)] = inst_42717);

return statearr_42733;
})();
var statearr_42734_42752 = state_42725__$1;
(statearr_42734_42752[(2)] = null);

(statearr_42734_42752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42726 === (9))){
var inst_42709 = (state_42725[(9)]);
var inst_42711 = (state_42725[(10)]);
var inst_42713 = inst_42711.call(null,inst_42709);
var state_42725__$1 = state_42725;
var statearr_42735_42753 = state_42725__$1;
(statearr_42735_42753[(2)] = inst_42713);

(statearr_42735_42753[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42726 === (5))){
var inst_42705 = (state_42725[(7)]);
var inst_42707 = figwheel.client.file_reloading.blocking_load.call(null,inst_42705);
var state_42725__$1 = state_42725;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42725__$1,(8),inst_42707);
} else {
if((state_val_42726 === (10))){
var inst_42709 = (state_42725[(9)]);
var inst_42715 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_42709);
var state_42725__$1 = state_42725;
var statearr_42736_42754 = state_42725__$1;
(statearr_42736_42754[(2)] = inst_42715);

(statearr_42736_42754[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42726 === (8))){
var inst_42705 = (state_42725[(7)]);
var inst_42711 = (state_42725[(10)]);
var inst_42709 = (state_42725[(2)]);
var inst_42710 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_42711__$1 = cljs.core.get.call(null,inst_42710,inst_42705);
var state_42725__$1 = (function (){var statearr_42737 = state_42725;
(statearr_42737[(9)] = inst_42709);

(statearr_42737[(10)] = inst_42711__$1);

return statearr_42737;
})();
if(cljs.core.truth_(inst_42711__$1)){
var statearr_42738_42755 = state_42725__$1;
(statearr_42738_42755[(1)] = (9));

} else {
var statearr_42739_42756 = state_42725__$1;
(statearr_42739_42756[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__37149__auto__))
;
return ((function (switch__37128__auto__,c__37149__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__37129__auto__ = null;
var figwheel$client$file_reloading$state_machine__37129__auto____0 = (function (){
var statearr_42743 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42743[(0)] = figwheel$client$file_reloading$state_machine__37129__auto__);

(statearr_42743[(1)] = (1));

return statearr_42743;
});
var figwheel$client$file_reloading$state_machine__37129__auto____1 = (function (state_42725){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_42725);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e42744){if((e42744 instanceof Object)){
var ex__37132__auto__ = e42744;
var statearr_42745_42757 = state_42725;
(statearr_42745_42757[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42725);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42744;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42758 = state_42725;
state_42725 = G__42758;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__37129__auto__ = function(state_42725){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__37129__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__37129__auto____1.call(this,state_42725);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__37129__auto____0;
figwheel$client$file_reloading$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__37129__auto____1;
return figwheel$client$file_reloading$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto__))
})();
var state__37151__auto__ = (function (){var statearr_42746 = f__37150__auto__.call(null);
(statearr_42746[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto__);

return statearr_42746;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto__))
);

return c__37149__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__42759,callback){
var map__42762 = p__42759;
var map__42762__$1 = ((((!((map__42762 == null)))?((((map__42762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42762):map__42762);
var file_msg = map__42762__$1;
var namespace = cljs.core.get.call(null,map__42762__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__42762,map__42762__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__42762,map__42762__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42764){
var map__42767 = p__42764;
var map__42767__$1 = ((((!((map__42767 == null)))?((((map__42767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42767):map__42767);
var file_msg = map__42767__$1;
var namespace = cljs.core.get.call(null,map__42767__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__34560__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__34560__auto__){
var or__34572__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__34572__auto__)){
return or__34572__auto__;
} else {
var or__34572__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__34572__auto____$1)){
return or__34572__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__34560__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42769,callback){
var map__42772 = p__42769;
var map__42772__$1 = ((((!((map__42772 == null)))?((((map__42772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42772):map__42772);
var file_msg = map__42772__$1;
var request_url = cljs.core.get.call(null,map__42772__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42772__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__37149__auto___42860 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto___42860,out){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto___42860,out){
return (function (state_42842){
var state_val_42843 = (state_42842[(1)]);
if((state_val_42843 === (1))){
var inst_42820 = cljs.core.nth.call(null,files,(0),null);
var inst_42821 = cljs.core.nthnext.call(null,files,(1));
var inst_42822 = files;
var state_42842__$1 = (function (){var statearr_42844 = state_42842;
(statearr_42844[(7)] = inst_42822);

(statearr_42844[(8)] = inst_42820);

(statearr_42844[(9)] = inst_42821);

return statearr_42844;
})();
var statearr_42845_42861 = state_42842__$1;
(statearr_42845_42861[(2)] = null);

(statearr_42845_42861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42843 === (2))){
var inst_42822 = (state_42842[(7)]);
var inst_42825 = (state_42842[(10)]);
var inst_42825__$1 = cljs.core.nth.call(null,inst_42822,(0),null);
var inst_42826 = cljs.core.nthnext.call(null,inst_42822,(1));
var inst_42827 = (inst_42825__$1 == null);
var inst_42828 = cljs.core.not.call(null,inst_42827);
var state_42842__$1 = (function (){var statearr_42846 = state_42842;
(statearr_42846[(11)] = inst_42826);

(statearr_42846[(10)] = inst_42825__$1);

return statearr_42846;
})();
if(inst_42828){
var statearr_42847_42862 = state_42842__$1;
(statearr_42847_42862[(1)] = (4));

} else {
var statearr_42848_42863 = state_42842__$1;
(statearr_42848_42863[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42843 === (3))){
var inst_42840 = (state_42842[(2)]);
var state_42842__$1 = state_42842;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42842__$1,inst_42840);
} else {
if((state_val_42843 === (4))){
var inst_42825 = (state_42842[(10)]);
var inst_42830 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42825);
var state_42842__$1 = state_42842;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42842__$1,(7),inst_42830);
} else {
if((state_val_42843 === (5))){
var inst_42836 = cljs.core.async.close_BANG_.call(null,out);
var state_42842__$1 = state_42842;
var statearr_42849_42864 = state_42842__$1;
(statearr_42849_42864[(2)] = inst_42836);

(statearr_42849_42864[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42843 === (6))){
var inst_42838 = (state_42842[(2)]);
var state_42842__$1 = state_42842;
var statearr_42850_42865 = state_42842__$1;
(statearr_42850_42865[(2)] = inst_42838);

(statearr_42850_42865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42843 === (7))){
var inst_42826 = (state_42842[(11)]);
var inst_42832 = (state_42842[(2)]);
var inst_42833 = cljs.core.async.put_BANG_.call(null,out,inst_42832);
var inst_42822 = inst_42826;
var state_42842__$1 = (function (){var statearr_42851 = state_42842;
(statearr_42851[(12)] = inst_42833);

(statearr_42851[(7)] = inst_42822);

return statearr_42851;
})();
var statearr_42852_42866 = state_42842__$1;
(statearr_42852_42866[(2)] = null);

(statearr_42852_42866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__37149__auto___42860,out))
;
return ((function (switch__37128__auto__,c__37149__auto___42860,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37129__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37129__auto____0 = (function (){
var statearr_42856 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42856[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37129__auto__);

(statearr_42856[(1)] = (1));

return statearr_42856;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__37129__auto____1 = (function (state_42842){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_42842);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e42857){if((e42857 instanceof Object)){
var ex__37132__auto__ = e42857;
var statearr_42858_42867 = state_42842;
(statearr_42858_42867[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42842);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42868 = state_42842;
state_42842 = G__42868;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37129__auto__ = function(state_42842){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37129__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37129__auto____1.call(this,state_42842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37129__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__37129__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto___42860,out))
})();
var state__37151__auto__ = (function (){var statearr_42859 = f__37150__auto__.call(null);
(statearr_42859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto___42860);

return statearr_42859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto___42860,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42869,opts){
var map__42873 = p__42869;
var map__42873__$1 = ((((!((map__42873 == null)))?((((map__42873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42873):map__42873);
var eval_body__$1 = cljs.core.get.call(null,map__42873__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42873__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__34560__auto__ = eval_body__$1;
if(cljs.core.truth_(and__34560__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__34560__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e42875){var e = e42875;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__42876_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42876_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__42881){
var vec__42882 = p__42881;
var k = cljs.core.nth.call(null,vec__42882,(0),null);
var v = cljs.core.nth.call(null,vec__42882,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__42883){
var vec__42884 = p__42883;
var k = cljs.core.nth.call(null,vec__42884,(0),null);
var v = cljs.core.nth.call(null,vec__42884,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42888,p__42889){
var map__43136 = p__42888;
var map__43136__$1 = ((((!((map__43136 == null)))?((((map__43136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43136):map__43136);
var opts = map__43136__$1;
var before_jsload = cljs.core.get.call(null,map__43136__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__43136__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__43136__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__43137 = p__42889;
var map__43137__$1 = ((((!((map__43137 == null)))?((((map__43137.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43137.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43137):map__43137);
var msg = map__43137__$1;
var files = cljs.core.get.call(null,map__43137__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__43137__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__43137__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__37149__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto__,map__43136,map__43136__$1,opts,before_jsload,on_jsload,reload_dependents,map__43137,map__43137__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto__,map__43136,map__43136__$1,opts,before_jsload,on_jsload,reload_dependents,map__43137,map__43137__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_43290){
var state_val_43291 = (state_43290[(1)]);
if((state_val_43291 === (7))){
var inst_43153 = (state_43290[(7)]);
var inst_43152 = (state_43290[(8)]);
var inst_43151 = (state_43290[(9)]);
var inst_43154 = (state_43290[(10)]);
var inst_43159 = cljs.core._nth.call(null,inst_43152,inst_43154);
var inst_43160 = figwheel.client.file_reloading.eval_body.call(null,inst_43159,opts);
var inst_43161 = (inst_43154 + (1));
var tmp43292 = inst_43153;
var tmp43293 = inst_43152;
var tmp43294 = inst_43151;
var inst_43151__$1 = tmp43294;
var inst_43152__$1 = tmp43293;
var inst_43153__$1 = tmp43292;
var inst_43154__$1 = inst_43161;
var state_43290__$1 = (function (){var statearr_43295 = state_43290;
(statearr_43295[(7)] = inst_43153__$1);

(statearr_43295[(8)] = inst_43152__$1);

(statearr_43295[(9)] = inst_43151__$1);

(statearr_43295[(10)] = inst_43154__$1);

(statearr_43295[(11)] = inst_43160);

return statearr_43295;
})();
var statearr_43296_43382 = state_43290__$1;
(statearr_43296_43382[(2)] = null);

(statearr_43296_43382[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (20))){
var inst_43194 = (state_43290[(12)]);
var inst_43202 = figwheel.client.file_reloading.sort_files.call(null,inst_43194);
var state_43290__$1 = state_43290;
var statearr_43297_43383 = state_43290__$1;
(statearr_43297_43383[(2)] = inst_43202);

(statearr_43297_43383[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (27))){
var state_43290__$1 = state_43290;
var statearr_43298_43384 = state_43290__$1;
(statearr_43298_43384[(2)] = null);

(statearr_43298_43384[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (1))){
var inst_43143 = (state_43290[(13)]);
var inst_43140 = before_jsload.call(null,files);
var inst_43141 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_43142 = (function (){return ((function (inst_43143,inst_43140,inst_43141,state_val_43291,c__37149__auto__,map__43136,map__43136__$1,opts,before_jsload,on_jsload,reload_dependents,map__43137,map__43137__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42885_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42885_SHARP_);
});
;})(inst_43143,inst_43140,inst_43141,state_val_43291,c__37149__auto__,map__43136,map__43136__$1,opts,before_jsload,on_jsload,reload_dependents,map__43137,map__43137__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43143__$1 = cljs.core.filter.call(null,inst_43142,files);
var inst_43144 = cljs.core.not_empty.call(null,inst_43143__$1);
var state_43290__$1 = (function (){var statearr_43299 = state_43290;
(statearr_43299[(13)] = inst_43143__$1);

(statearr_43299[(14)] = inst_43141);

(statearr_43299[(15)] = inst_43140);

return statearr_43299;
})();
if(cljs.core.truth_(inst_43144)){
var statearr_43300_43385 = state_43290__$1;
(statearr_43300_43385[(1)] = (2));

} else {
var statearr_43301_43386 = state_43290__$1;
(statearr_43301_43386[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (24))){
var state_43290__$1 = state_43290;
var statearr_43302_43387 = state_43290__$1;
(statearr_43302_43387[(2)] = null);

(statearr_43302_43387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (39))){
var inst_43244 = (state_43290[(16)]);
var state_43290__$1 = state_43290;
var statearr_43303_43388 = state_43290__$1;
(statearr_43303_43388[(2)] = inst_43244);

(statearr_43303_43388[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (46))){
var inst_43285 = (state_43290[(2)]);
var state_43290__$1 = state_43290;
var statearr_43304_43389 = state_43290__$1;
(statearr_43304_43389[(2)] = inst_43285);

(statearr_43304_43389[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (4))){
var inst_43188 = (state_43290[(2)]);
var inst_43189 = cljs.core.List.EMPTY;
var inst_43190 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_43189);
var inst_43191 = (function (){return ((function (inst_43188,inst_43189,inst_43190,state_val_43291,c__37149__auto__,map__43136,map__43136__$1,opts,before_jsload,on_jsload,reload_dependents,map__43137,map__43137__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42886_SHARP_){
var and__34560__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42886_SHARP_);
if(cljs.core.truth_(and__34560__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42886_SHARP_));
} else {
return and__34560__auto__;
}
});
;})(inst_43188,inst_43189,inst_43190,state_val_43291,c__37149__auto__,map__43136,map__43136__$1,opts,before_jsload,on_jsload,reload_dependents,map__43137,map__43137__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43192 = cljs.core.filter.call(null,inst_43191,files);
var inst_43193 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_43194 = cljs.core.concat.call(null,inst_43192,inst_43193);
var state_43290__$1 = (function (){var statearr_43305 = state_43290;
(statearr_43305[(12)] = inst_43194);

(statearr_43305[(17)] = inst_43188);

(statearr_43305[(18)] = inst_43190);

return statearr_43305;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_43306_43390 = state_43290__$1;
(statearr_43306_43390[(1)] = (16));

} else {
var statearr_43307_43391 = state_43290__$1;
(statearr_43307_43391[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (15))){
var inst_43178 = (state_43290[(2)]);
var state_43290__$1 = state_43290;
var statearr_43308_43392 = state_43290__$1;
(statearr_43308_43392[(2)] = inst_43178);

(statearr_43308_43392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (21))){
var inst_43204 = (state_43290[(19)]);
var inst_43204__$1 = (state_43290[(2)]);
var inst_43205 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_43204__$1);
var state_43290__$1 = (function (){var statearr_43309 = state_43290;
(statearr_43309[(19)] = inst_43204__$1);

return statearr_43309;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43290__$1,(22),inst_43205);
} else {
if((state_val_43291 === (31))){
var inst_43288 = (state_43290[(2)]);
var state_43290__$1 = state_43290;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43290__$1,inst_43288);
} else {
if((state_val_43291 === (32))){
var inst_43244 = (state_43290[(16)]);
var inst_43249 = inst_43244.cljs$lang$protocol_mask$partition0$;
var inst_43250 = (inst_43249 & (64));
var inst_43251 = inst_43244.cljs$core$ISeq$;
var inst_43252 = (inst_43250) || (inst_43251);
var state_43290__$1 = state_43290;
if(cljs.core.truth_(inst_43252)){
var statearr_43310_43393 = state_43290__$1;
(statearr_43310_43393[(1)] = (35));

} else {
var statearr_43311_43394 = state_43290__$1;
(statearr_43311_43394[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (40))){
var inst_43265 = (state_43290[(20)]);
var inst_43264 = (state_43290[(2)]);
var inst_43265__$1 = cljs.core.get.call(null,inst_43264,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_43266 = cljs.core.get.call(null,inst_43264,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_43267 = cljs.core.not_empty.call(null,inst_43265__$1);
var state_43290__$1 = (function (){var statearr_43312 = state_43290;
(statearr_43312[(20)] = inst_43265__$1);

(statearr_43312[(21)] = inst_43266);

return statearr_43312;
})();
if(cljs.core.truth_(inst_43267)){
var statearr_43313_43395 = state_43290__$1;
(statearr_43313_43395[(1)] = (41));

} else {
var statearr_43314_43396 = state_43290__$1;
(statearr_43314_43396[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (33))){
var state_43290__$1 = state_43290;
var statearr_43315_43397 = state_43290__$1;
(statearr_43315_43397[(2)] = false);

(statearr_43315_43397[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (13))){
var inst_43164 = (state_43290[(22)]);
var inst_43168 = cljs.core.chunk_first.call(null,inst_43164);
var inst_43169 = cljs.core.chunk_rest.call(null,inst_43164);
var inst_43170 = cljs.core.count.call(null,inst_43168);
var inst_43151 = inst_43169;
var inst_43152 = inst_43168;
var inst_43153 = inst_43170;
var inst_43154 = (0);
var state_43290__$1 = (function (){var statearr_43316 = state_43290;
(statearr_43316[(7)] = inst_43153);

(statearr_43316[(8)] = inst_43152);

(statearr_43316[(9)] = inst_43151);

(statearr_43316[(10)] = inst_43154);

return statearr_43316;
})();
var statearr_43317_43398 = state_43290__$1;
(statearr_43317_43398[(2)] = null);

(statearr_43317_43398[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (22))){
var inst_43207 = (state_43290[(23)]);
var inst_43212 = (state_43290[(24)]);
var inst_43208 = (state_43290[(25)]);
var inst_43204 = (state_43290[(19)]);
var inst_43207__$1 = (state_43290[(2)]);
var inst_43208__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43207__$1);
var inst_43209 = (function (){var all_files = inst_43204;
var res_SINGLEQUOTE_ = inst_43207__$1;
var res = inst_43208__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_43207,inst_43212,inst_43208,inst_43204,inst_43207__$1,inst_43208__$1,state_val_43291,c__37149__auto__,map__43136,map__43136__$1,opts,before_jsload,on_jsload,reload_dependents,map__43137,map__43137__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__42887_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42887_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_43207,inst_43212,inst_43208,inst_43204,inst_43207__$1,inst_43208__$1,state_val_43291,c__37149__auto__,map__43136,map__43136__$1,opts,before_jsload,on_jsload,reload_dependents,map__43137,map__43137__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43210 = cljs.core.filter.call(null,inst_43209,inst_43207__$1);
var inst_43211 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_43212__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43211);
var inst_43213 = cljs.core.not_empty.call(null,inst_43212__$1);
var state_43290__$1 = (function (){var statearr_43318 = state_43290;
(statearr_43318[(23)] = inst_43207__$1);

(statearr_43318[(24)] = inst_43212__$1);

(statearr_43318[(25)] = inst_43208__$1);

(statearr_43318[(26)] = inst_43210);

return statearr_43318;
})();
if(cljs.core.truth_(inst_43213)){
var statearr_43319_43399 = state_43290__$1;
(statearr_43319_43399[(1)] = (23));

} else {
var statearr_43320_43400 = state_43290__$1;
(statearr_43320_43400[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (36))){
var state_43290__$1 = state_43290;
var statearr_43321_43401 = state_43290__$1;
(statearr_43321_43401[(2)] = false);

(statearr_43321_43401[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (41))){
var inst_43265 = (state_43290[(20)]);
var inst_43269 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_43270 = cljs.core.map.call(null,inst_43269,inst_43265);
var inst_43271 = cljs.core.pr_str.call(null,inst_43270);
var inst_43272 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_43271)].join('');
var inst_43273 = figwheel.client.utils.log.call(null,inst_43272);
var state_43290__$1 = state_43290;
var statearr_43322_43402 = state_43290__$1;
(statearr_43322_43402[(2)] = inst_43273);

(statearr_43322_43402[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (43))){
var inst_43266 = (state_43290[(21)]);
var inst_43276 = (state_43290[(2)]);
var inst_43277 = cljs.core.not_empty.call(null,inst_43266);
var state_43290__$1 = (function (){var statearr_43323 = state_43290;
(statearr_43323[(27)] = inst_43276);

return statearr_43323;
})();
if(cljs.core.truth_(inst_43277)){
var statearr_43324_43403 = state_43290__$1;
(statearr_43324_43403[(1)] = (44));

} else {
var statearr_43325_43404 = state_43290__$1;
(statearr_43325_43404[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (29))){
var inst_43207 = (state_43290[(23)]);
var inst_43212 = (state_43290[(24)]);
var inst_43208 = (state_43290[(25)]);
var inst_43210 = (state_43290[(26)]);
var inst_43244 = (state_43290[(16)]);
var inst_43204 = (state_43290[(19)]);
var inst_43240 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_43243 = (function (){var all_files = inst_43204;
var res_SINGLEQUOTE_ = inst_43207;
var res = inst_43208;
var files_not_loaded = inst_43210;
var dependencies_that_loaded = inst_43212;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43207,inst_43212,inst_43208,inst_43210,inst_43244,inst_43204,inst_43240,state_val_43291,c__37149__auto__,map__43136,map__43136__$1,opts,before_jsload,on_jsload,reload_dependents,map__43137,map__43137__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43242){
var map__43326 = p__43242;
var map__43326__$1 = ((((!((map__43326 == null)))?((((map__43326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43326):map__43326);
var namespace = cljs.core.get.call(null,map__43326__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43207,inst_43212,inst_43208,inst_43210,inst_43244,inst_43204,inst_43240,state_val_43291,c__37149__auto__,map__43136,map__43136__$1,opts,before_jsload,on_jsload,reload_dependents,map__43137,map__43137__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43244__$1 = cljs.core.group_by.call(null,inst_43243,inst_43210);
var inst_43246 = (inst_43244__$1 == null);
var inst_43247 = cljs.core.not.call(null,inst_43246);
var state_43290__$1 = (function (){var statearr_43328 = state_43290;
(statearr_43328[(28)] = inst_43240);

(statearr_43328[(16)] = inst_43244__$1);

return statearr_43328;
})();
if(inst_43247){
var statearr_43329_43405 = state_43290__$1;
(statearr_43329_43405[(1)] = (32));

} else {
var statearr_43330_43406 = state_43290__$1;
(statearr_43330_43406[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (44))){
var inst_43266 = (state_43290[(21)]);
var inst_43279 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43266);
var inst_43280 = cljs.core.pr_str.call(null,inst_43279);
var inst_43281 = [cljs.core.str("not required: "),cljs.core.str(inst_43280)].join('');
var inst_43282 = figwheel.client.utils.log.call(null,inst_43281);
var state_43290__$1 = state_43290;
var statearr_43331_43407 = state_43290__$1;
(statearr_43331_43407[(2)] = inst_43282);

(statearr_43331_43407[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (6))){
var inst_43185 = (state_43290[(2)]);
var state_43290__$1 = state_43290;
var statearr_43332_43408 = state_43290__$1;
(statearr_43332_43408[(2)] = inst_43185);

(statearr_43332_43408[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (28))){
var inst_43210 = (state_43290[(26)]);
var inst_43237 = (state_43290[(2)]);
var inst_43238 = cljs.core.not_empty.call(null,inst_43210);
var state_43290__$1 = (function (){var statearr_43333 = state_43290;
(statearr_43333[(29)] = inst_43237);

return statearr_43333;
})();
if(cljs.core.truth_(inst_43238)){
var statearr_43334_43409 = state_43290__$1;
(statearr_43334_43409[(1)] = (29));

} else {
var statearr_43335_43410 = state_43290__$1;
(statearr_43335_43410[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (25))){
var inst_43208 = (state_43290[(25)]);
var inst_43224 = (state_43290[(2)]);
var inst_43225 = cljs.core.not_empty.call(null,inst_43208);
var state_43290__$1 = (function (){var statearr_43336 = state_43290;
(statearr_43336[(30)] = inst_43224);

return statearr_43336;
})();
if(cljs.core.truth_(inst_43225)){
var statearr_43337_43411 = state_43290__$1;
(statearr_43337_43411[(1)] = (26));

} else {
var statearr_43338_43412 = state_43290__$1;
(statearr_43338_43412[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (34))){
var inst_43259 = (state_43290[(2)]);
var state_43290__$1 = state_43290;
if(cljs.core.truth_(inst_43259)){
var statearr_43339_43413 = state_43290__$1;
(statearr_43339_43413[(1)] = (38));

} else {
var statearr_43340_43414 = state_43290__$1;
(statearr_43340_43414[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (17))){
var state_43290__$1 = state_43290;
var statearr_43341_43415 = state_43290__$1;
(statearr_43341_43415[(2)] = recompile_dependents);

(statearr_43341_43415[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (3))){
var state_43290__$1 = state_43290;
var statearr_43342_43416 = state_43290__$1;
(statearr_43342_43416[(2)] = null);

(statearr_43342_43416[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (12))){
var inst_43181 = (state_43290[(2)]);
var state_43290__$1 = state_43290;
var statearr_43343_43417 = state_43290__$1;
(statearr_43343_43417[(2)] = inst_43181);

(statearr_43343_43417[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (2))){
var inst_43143 = (state_43290[(13)]);
var inst_43150 = cljs.core.seq.call(null,inst_43143);
var inst_43151 = inst_43150;
var inst_43152 = null;
var inst_43153 = (0);
var inst_43154 = (0);
var state_43290__$1 = (function (){var statearr_43344 = state_43290;
(statearr_43344[(7)] = inst_43153);

(statearr_43344[(8)] = inst_43152);

(statearr_43344[(9)] = inst_43151);

(statearr_43344[(10)] = inst_43154);

return statearr_43344;
})();
var statearr_43345_43418 = state_43290__$1;
(statearr_43345_43418[(2)] = null);

(statearr_43345_43418[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (23))){
var inst_43207 = (state_43290[(23)]);
var inst_43212 = (state_43290[(24)]);
var inst_43208 = (state_43290[(25)]);
var inst_43210 = (state_43290[(26)]);
var inst_43204 = (state_43290[(19)]);
var inst_43215 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_43217 = (function (){var all_files = inst_43204;
var res_SINGLEQUOTE_ = inst_43207;
var res = inst_43208;
var files_not_loaded = inst_43210;
var dependencies_that_loaded = inst_43212;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43207,inst_43212,inst_43208,inst_43210,inst_43204,inst_43215,state_val_43291,c__37149__auto__,map__43136,map__43136__$1,opts,before_jsload,on_jsload,reload_dependents,map__43137,map__43137__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43216){
var map__43346 = p__43216;
var map__43346__$1 = ((((!((map__43346 == null)))?((((map__43346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43346):map__43346);
var request_url = cljs.core.get.call(null,map__43346__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43207,inst_43212,inst_43208,inst_43210,inst_43204,inst_43215,state_val_43291,c__37149__auto__,map__43136,map__43136__$1,opts,before_jsload,on_jsload,reload_dependents,map__43137,map__43137__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43218 = cljs.core.reverse.call(null,inst_43212);
var inst_43219 = cljs.core.map.call(null,inst_43217,inst_43218);
var inst_43220 = cljs.core.pr_str.call(null,inst_43219);
var inst_43221 = figwheel.client.utils.log.call(null,inst_43220);
var state_43290__$1 = (function (){var statearr_43348 = state_43290;
(statearr_43348[(31)] = inst_43215);

return statearr_43348;
})();
var statearr_43349_43419 = state_43290__$1;
(statearr_43349_43419[(2)] = inst_43221);

(statearr_43349_43419[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (35))){
var state_43290__$1 = state_43290;
var statearr_43350_43420 = state_43290__$1;
(statearr_43350_43420[(2)] = true);

(statearr_43350_43420[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (19))){
var inst_43194 = (state_43290[(12)]);
var inst_43200 = figwheel.client.file_reloading.expand_files.call(null,inst_43194);
var state_43290__$1 = state_43290;
var statearr_43351_43421 = state_43290__$1;
(statearr_43351_43421[(2)] = inst_43200);

(statearr_43351_43421[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (11))){
var state_43290__$1 = state_43290;
var statearr_43352_43422 = state_43290__$1;
(statearr_43352_43422[(2)] = null);

(statearr_43352_43422[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (9))){
var inst_43183 = (state_43290[(2)]);
var state_43290__$1 = state_43290;
var statearr_43353_43423 = state_43290__$1;
(statearr_43353_43423[(2)] = inst_43183);

(statearr_43353_43423[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (5))){
var inst_43153 = (state_43290[(7)]);
var inst_43154 = (state_43290[(10)]);
var inst_43156 = (inst_43154 < inst_43153);
var inst_43157 = inst_43156;
var state_43290__$1 = state_43290;
if(cljs.core.truth_(inst_43157)){
var statearr_43354_43424 = state_43290__$1;
(statearr_43354_43424[(1)] = (7));

} else {
var statearr_43355_43425 = state_43290__$1;
(statearr_43355_43425[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (14))){
var inst_43164 = (state_43290[(22)]);
var inst_43173 = cljs.core.first.call(null,inst_43164);
var inst_43174 = figwheel.client.file_reloading.eval_body.call(null,inst_43173,opts);
var inst_43175 = cljs.core.next.call(null,inst_43164);
var inst_43151 = inst_43175;
var inst_43152 = null;
var inst_43153 = (0);
var inst_43154 = (0);
var state_43290__$1 = (function (){var statearr_43356 = state_43290;
(statearr_43356[(7)] = inst_43153);

(statearr_43356[(32)] = inst_43174);

(statearr_43356[(8)] = inst_43152);

(statearr_43356[(9)] = inst_43151);

(statearr_43356[(10)] = inst_43154);

return statearr_43356;
})();
var statearr_43357_43426 = state_43290__$1;
(statearr_43357_43426[(2)] = null);

(statearr_43357_43426[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (45))){
var state_43290__$1 = state_43290;
var statearr_43358_43427 = state_43290__$1;
(statearr_43358_43427[(2)] = null);

(statearr_43358_43427[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (26))){
var inst_43207 = (state_43290[(23)]);
var inst_43212 = (state_43290[(24)]);
var inst_43208 = (state_43290[(25)]);
var inst_43210 = (state_43290[(26)]);
var inst_43204 = (state_43290[(19)]);
var inst_43227 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_43229 = (function (){var all_files = inst_43204;
var res_SINGLEQUOTE_ = inst_43207;
var res = inst_43208;
var files_not_loaded = inst_43210;
var dependencies_that_loaded = inst_43212;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43207,inst_43212,inst_43208,inst_43210,inst_43204,inst_43227,state_val_43291,c__37149__auto__,map__43136,map__43136__$1,opts,before_jsload,on_jsload,reload_dependents,map__43137,map__43137__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43228){
var map__43359 = p__43228;
var map__43359__$1 = ((((!((map__43359 == null)))?((((map__43359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43359):map__43359);
var namespace = cljs.core.get.call(null,map__43359__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__43359__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43207,inst_43212,inst_43208,inst_43210,inst_43204,inst_43227,state_val_43291,c__37149__auto__,map__43136,map__43136__$1,opts,before_jsload,on_jsload,reload_dependents,map__43137,map__43137__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43230 = cljs.core.map.call(null,inst_43229,inst_43208);
var inst_43231 = cljs.core.pr_str.call(null,inst_43230);
var inst_43232 = figwheel.client.utils.log.call(null,inst_43231);
var inst_43233 = (function (){var all_files = inst_43204;
var res_SINGLEQUOTE_ = inst_43207;
var res = inst_43208;
var files_not_loaded = inst_43210;
var dependencies_that_loaded = inst_43212;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43207,inst_43212,inst_43208,inst_43210,inst_43204,inst_43227,inst_43229,inst_43230,inst_43231,inst_43232,state_val_43291,c__37149__auto__,map__43136,map__43136__$1,opts,before_jsload,on_jsload,reload_dependents,map__43137,map__43137__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43207,inst_43212,inst_43208,inst_43210,inst_43204,inst_43227,inst_43229,inst_43230,inst_43231,inst_43232,state_val_43291,c__37149__auto__,map__43136,map__43136__$1,opts,before_jsload,on_jsload,reload_dependents,map__43137,map__43137__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43234 = setTimeout(inst_43233,(10));
var state_43290__$1 = (function (){var statearr_43361 = state_43290;
(statearr_43361[(33)] = inst_43232);

(statearr_43361[(34)] = inst_43227);

return statearr_43361;
})();
var statearr_43362_43428 = state_43290__$1;
(statearr_43362_43428[(2)] = inst_43234);

(statearr_43362_43428[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (16))){
var state_43290__$1 = state_43290;
var statearr_43363_43429 = state_43290__$1;
(statearr_43363_43429[(2)] = reload_dependents);

(statearr_43363_43429[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (38))){
var inst_43244 = (state_43290[(16)]);
var inst_43261 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43244);
var state_43290__$1 = state_43290;
var statearr_43364_43430 = state_43290__$1;
(statearr_43364_43430[(2)] = inst_43261);

(statearr_43364_43430[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (30))){
var state_43290__$1 = state_43290;
var statearr_43365_43431 = state_43290__$1;
(statearr_43365_43431[(2)] = null);

(statearr_43365_43431[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (10))){
var inst_43164 = (state_43290[(22)]);
var inst_43166 = cljs.core.chunked_seq_QMARK_.call(null,inst_43164);
var state_43290__$1 = state_43290;
if(inst_43166){
var statearr_43366_43432 = state_43290__$1;
(statearr_43366_43432[(1)] = (13));

} else {
var statearr_43367_43433 = state_43290__$1;
(statearr_43367_43433[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (18))){
var inst_43198 = (state_43290[(2)]);
var state_43290__$1 = state_43290;
if(cljs.core.truth_(inst_43198)){
var statearr_43368_43434 = state_43290__$1;
(statearr_43368_43434[(1)] = (19));

} else {
var statearr_43369_43435 = state_43290__$1;
(statearr_43369_43435[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (42))){
var state_43290__$1 = state_43290;
var statearr_43370_43436 = state_43290__$1;
(statearr_43370_43436[(2)] = null);

(statearr_43370_43436[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (37))){
var inst_43256 = (state_43290[(2)]);
var state_43290__$1 = state_43290;
var statearr_43371_43437 = state_43290__$1;
(statearr_43371_43437[(2)] = inst_43256);

(statearr_43371_43437[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43291 === (8))){
var inst_43164 = (state_43290[(22)]);
var inst_43151 = (state_43290[(9)]);
var inst_43164__$1 = cljs.core.seq.call(null,inst_43151);
var state_43290__$1 = (function (){var statearr_43372 = state_43290;
(statearr_43372[(22)] = inst_43164__$1);

return statearr_43372;
})();
if(inst_43164__$1){
var statearr_43373_43438 = state_43290__$1;
(statearr_43373_43438[(1)] = (10));

} else {
var statearr_43374_43439 = state_43290__$1;
(statearr_43374_43439[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__37149__auto__,map__43136,map__43136__$1,opts,before_jsload,on_jsload,reload_dependents,map__43137,map__43137__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__37128__auto__,c__37149__auto__,map__43136,map__43136__$1,opts,before_jsload,on_jsload,reload_dependents,map__43137,map__43137__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37129__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37129__auto____0 = (function (){
var statearr_43378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43378[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__37129__auto__);

(statearr_43378[(1)] = (1));

return statearr_43378;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__37129__auto____1 = (function (state_43290){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_43290);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e43379){if((e43379 instanceof Object)){
var ex__37132__auto__ = e43379;
var statearr_43380_43440 = state_43290;
(statearr_43380_43440[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43290);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43441 = state_43290;
state_43290 = G__43441;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__37129__auto__ = function(state_43290){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37129__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37129__auto____1.call(this,state_43290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37129__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__37129__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto__,map__43136,map__43136__$1,opts,before_jsload,on_jsload,reload_dependents,map__43137,map__43137__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__37151__auto__ = (function (){var statearr_43381 = f__37150__auto__.call(null);
(statearr_43381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto__);

return statearr_43381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto__,map__43136,map__43136__$1,opts,before_jsload,on_jsload,reload_dependents,map__43137,map__43137__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__37149__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__43444,link){
var map__43447 = p__43444;
var map__43447__$1 = ((((!((map__43447 == null)))?((((map__43447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43447):map__43447);
var file = cljs.core.get.call(null,map__43447__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__43447,map__43447__$1,file){
return (function (p1__43442_SHARP_,p2__43443_SHARP_){
if(cljs.core._EQ_.call(null,p1__43442_SHARP_,p2__43443_SHARP_)){
return p1__43442_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__43447,map__43447__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__43453){
var map__43454 = p__43453;
var map__43454__$1 = ((((!((map__43454 == null)))?((((map__43454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43454):map__43454);
var match_length = cljs.core.get.call(null,map__43454__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__43454__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__43449_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__43449_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args43456 = [];
var len__35630__auto___43459 = arguments.length;
var i__35631__auto___43460 = (0);
while(true){
if((i__35631__auto___43460 < len__35630__auto___43459)){
args43456.push((arguments[i__35631__auto___43460]));

var G__43461 = (i__35631__auto___43460 + (1));
i__35631__auto___43460 = G__43461;
continue;
} else {
}
break;
}

var G__43458 = args43456.length;
switch (G__43458) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43456.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__43463_SHARP_,p2__43464_SHARP_){
return cljs.core.assoc.call(null,p1__43463_SHARP_,cljs.core.get.call(null,p2__43464_SHARP_,key),p2__43464_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__43465){
var map__43468 = p__43465;
var map__43468__$1 = ((((!((map__43468 == null)))?((((map__43468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43468):map__43468);
var f_data = map__43468__$1;
var file = cljs.core.get.call(null,map__43468__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__43470,files_msg){
var map__43477 = p__43470;
var map__43477__$1 = ((((!((map__43477 == null)))?((((map__43477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43477):map__43477);
var opts = map__43477__$1;
var on_cssload = cljs.core.get.call(null,map__43477__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__43479_43483 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__43480_43484 = null;
var count__43481_43485 = (0);
var i__43482_43486 = (0);
while(true){
if((i__43482_43486 < count__43481_43485)){
var f_43487 = cljs.core._nth.call(null,chunk__43480_43484,i__43482_43486);
figwheel.client.file_reloading.reload_css_file.call(null,f_43487);

var G__43488 = seq__43479_43483;
var G__43489 = chunk__43480_43484;
var G__43490 = count__43481_43485;
var G__43491 = (i__43482_43486 + (1));
seq__43479_43483 = G__43488;
chunk__43480_43484 = G__43489;
count__43481_43485 = G__43490;
i__43482_43486 = G__43491;
continue;
} else {
var temp__4657__auto___43492 = cljs.core.seq.call(null,seq__43479_43483);
if(temp__4657__auto___43492){
var seq__43479_43493__$1 = temp__4657__auto___43492;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43479_43493__$1)){
var c__35375__auto___43494 = cljs.core.chunk_first.call(null,seq__43479_43493__$1);
var G__43495 = cljs.core.chunk_rest.call(null,seq__43479_43493__$1);
var G__43496 = c__35375__auto___43494;
var G__43497 = cljs.core.count.call(null,c__35375__auto___43494);
var G__43498 = (0);
seq__43479_43483 = G__43495;
chunk__43480_43484 = G__43496;
count__43481_43485 = G__43497;
i__43482_43486 = G__43498;
continue;
} else {
var f_43499 = cljs.core.first.call(null,seq__43479_43493__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_43499);

var G__43500 = cljs.core.next.call(null,seq__43479_43493__$1);
var G__43501 = null;
var G__43502 = (0);
var G__43503 = (0);
seq__43479_43483 = G__43500;
chunk__43480_43484 = G__43501;
count__43481_43485 = G__43502;
i__43482_43486 = G__43503;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__43477,map__43477__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__43477,map__43477__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map