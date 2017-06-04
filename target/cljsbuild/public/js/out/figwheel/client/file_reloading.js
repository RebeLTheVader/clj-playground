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
var or__34556__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__34556__auto__){
return or__34556__auto__;
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
var or__34556__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__34556__auto__)){
return or__34556__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__44247_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__44247_SHARP_));
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
var seq__44252 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__44253 = null;
var count__44254 = (0);
var i__44255 = (0);
while(true){
if((i__44255 < count__44254)){
var n = cljs.core._nth.call(null,chunk__44253,i__44255);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44256 = seq__44252;
var G__44257 = chunk__44253;
var G__44258 = count__44254;
var G__44259 = (i__44255 + (1));
seq__44252 = G__44256;
chunk__44253 = G__44257;
count__44254 = G__44258;
i__44255 = G__44259;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44252);
if(temp__4657__auto__){
var seq__44252__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44252__$1)){
var c__35359__auto__ = cljs.core.chunk_first.call(null,seq__44252__$1);
var G__44260 = cljs.core.chunk_rest.call(null,seq__44252__$1);
var G__44261 = c__35359__auto__;
var G__44262 = cljs.core.count.call(null,c__35359__auto__);
var G__44263 = (0);
seq__44252 = G__44260;
chunk__44253 = G__44261;
count__44254 = G__44262;
i__44255 = G__44263;
continue;
} else {
var n = cljs.core.first.call(null,seq__44252__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__44264 = cljs.core.next.call(null,seq__44252__$1);
var G__44265 = null;
var G__44266 = (0);
var G__44267 = (0);
seq__44252 = G__44264;
chunk__44253 = G__44265;
count__44254 = G__44266;
i__44255 = G__44267;
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

var seq__44306_44313 = cljs.core.seq.call(null,deps);
var chunk__44307_44314 = null;
var count__44308_44315 = (0);
var i__44309_44316 = (0);
while(true){
if((i__44309_44316 < count__44308_44315)){
var dep_44317 = cljs.core._nth.call(null,chunk__44307_44314,i__44309_44316);
topo_sort_helper_STAR_.call(null,dep_44317,(depth + (1)),state);

var G__44318 = seq__44306_44313;
var G__44319 = chunk__44307_44314;
var G__44320 = count__44308_44315;
var G__44321 = (i__44309_44316 + (1));
seq__44306_44313 = G__44318;
chunk__44307_44314 = G__44319;
count__44308_44315 = G__44320;
i__44309_44316 = G__44321;
continue;
} else {
var temp__4657__auto___44322 = cljs.core.seq.call(null,seq__44306_44313);
if(temp__4657__auto___44322){
var seq__44306_44323__$1 = temp__4657__auto___44322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44306_44323__$1)){
var c__35359__auto___44324 = cljs.core.chunk_first.call(null,seq__44306_44323__$1);
var G__44325 = cljs.core.chunk_rest.call(null,seq__44306_44323__$1);
var G__44326 = c__35359__auto___44324;
var G__44327 = cljs.core.count.call(null,c__35359__auto___44324);
var G__44328 = (0);
seq__44306_44313 = G__44325;
chunk__44307_44314 = G__44326;
count__44308_44315 = G__44327;
i__44309_44316 = G__44328;
continue;
} else {
var dep_44329 = cljs.core.first.call(null,seq__44306_44323__$1);
topo_sort_helper_STAR_.call(null,dep_44329,(depth + (1)),state);

var G__44330 = cljs.core.next.call(null,seq__44306_44323__$1);
var G__44331 = null;
var G__44332 = (0);
var G__44333 = (0);
seq__44306_44313 = G__44330;
chunk__44307_44314 = G__44331;
count__44308_44315 = G__44332;
i__44309_44316 = G__44333;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__44310){
var vec__44312 = p__44310;
var x = cljs.core.nth.call(null,vec__44312,(0),null);
var xs = cljs.core.nthnext.call(null,vec__44312,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__44312,x,xs,get_deps__$1){
return (function (p1__44268_SHARP_){
return clojure.set.difference.call(null,p1__44268_SHARP_,x);
});})(vec__44312,x,xs,get_deps__$1))
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
var seq__44346 = cljs.core.seq.call(null,provides);
var chunk__44347 = null;
var count__44348 = (0);
var i__44349 = (0);
while(true){
if((i__44349 < count__44348)){
var prov = cljs.core._nth.call(null,chunk__44347,i__44349);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44350_44358 = cljs.core.seq.call(null,requires);
var chunk__44351_44359 = null;
var count__44352_44360 = (0);
var i__44353_44361 = (0);
while(true){
if((i__44353_44361 < count__44352_44360)){
var req_44362 = cljs.core._nth.call(null,chunk__44351_44359,i__44353_44361);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44362,prov);

var G__44363 = seq__44350_44358;
var G__44364 = chunk__44351_44359;
var G__44365 = count__44352_44360;
var G__44366 = (i__44353_44361 + (1));
seq__44350_44358 = G__44363;
chunk__44351_44359 = G__44364;
count__44352_44360 = G__44365;
i__44353_44361 = G__44366;
continue;
} else {
var temp__4657__auto___44367 = cljs.core.seq.call(null,seq__44350_44358);
if(temp__4657__auto___44367){
var seq__44350_44368__$1 = temp__4657__auto___44367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44350_44368__$1)){
var c__35359__auto___44369 = cljs.core.chunk_first.call(null,seq__44350_44368__$1);
var G__44370 = cljs.core.chunk_rest.call(null,seq__44350_44368__$1);
var G__44371 = c__35359__auto___44369;
var G__44372 = cljs.core.count.call(null,c__35359__auto___44369);
var G__44373 = (0);
seq__44350_44358 = G__44370;
chunk__44351_44359 = G__44371;
count__44352_44360 = G__44372;
i__44353_44361 = G__44373;
continue;
} else {
var req_44374 = cljs.core.first.call(null,seq__44350_44368__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44374,prov);

var G__44375 = cljs.core.next.call(null,seq__44350_44368__$1);
var G__44376 = null;
var G__44377 = (0);
var G__44378 = (0);
seq__44350_44358 = G__44375;
chunk__44351_44359 = G__44376;
count__44352_44360 = G__44377;
i__44353_44361 = G__44378;
continue;
}
} else {
}
}
break;
}

var G__44379 = seq__44346;
var G__44380 = chunk__44347;
var G__44381 = count__44348;
var G__44382 = (i__44349 + (1));
seq__44346 = G__44379;
chunk__44347 = G__44380;
count__44348 = G__44381;
i__44349 = G__44382;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44346);
if(temp__4657__auto__){
var seq__44346__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44346__$1)){
var c__35359__auto__ = cljs.core.chunk_first.call(null,seq__44346__$1);
var G__44383 = cljs.core.chunk_rest.call(null,seq__44346__$1);
var G__44384 = c__35359__auto__;
var G__44385 = cljs.core.count.call(null,c__35359__auto__);
var G__44386 = (0);
seq__44346 = G__44383;
chunk__44347 = G__44384;
count__44348 = G__44385;
i__44349 = G__44386;
continue;
} else {
var prov = cljs.core.first.call(null,seq__44346__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__44354_44387 = cljs.core.seq.call(null,requires);
var chunk__44355_44388 = null;
var count__44356_44389 = (0);
var i__44357_44390 = (0);
while(true){
if((i__44357_44390 < count__44356_44389)){
var req_44391 = cljs.core._nth.call(null,chunk__44355_44388,i__44357_44390);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44391,prov);

var G__44392 = seq__44354_44387;
var G__44393 = chunk__44355_44388;
var G__44394 = count__44356_44389;
var G__44395 = (i__44357_44390 + (1));
seq__44354_44387 = G__44392;
chunk__44355_44388 = G__44393;
count__44356_44389 = G__44394;
i__44357_44390 = G__44395;
continue;
} else {
var temp__4657__auto___44396__$1 = cljs.core.seq.call(null,seq__44354_44387);
if(temp__4657__auto___44396__$1){
var seq__44354_44397__$1 = temp__4657__auto___44396__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44354_44397__$1)){
var c__35359__auto___44398 = cljs.core.chunk_first.call(null,seq__44354_44397__$1);
var G__44399 = cljs.core.chunk_rest.call(null,seq__44354_44397__$1);
var G__44400 = c__35359__auto___44398;
var G__44401 = cljs.core.count.call(null,c__35359__auto___44398);
var G__44402 = (0);
seq__44354_44387 = G__44399;
chunk__44355_44388 = G__44400;
count__44356_44389 = G__44401;
i__44357_44390 = G__44402;
continue;
} else {
var req_44403 = cljs.core.first.call(null,seq__44354_44397__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_44403,prov);

var G__44404 = cljs.core.next.call(null,seq__44354_44397__$1);
var G__44405 = null;
var G__44406 = (0);
var G__44407 = (0);
seq__44354_44387 = G__44404;
chunk__44355_44388 = G__44405;
count__44356_44389 = G__44406;
i__44357_44390 = G__44407;
continue;
}
} else {
}
}
break;
}

var G__44408 = cljs.core.next.call(null,seq__44346__$1);
var G__44409 = null;
var G__44410 = (0);
var G__44411 = (0);
seq__44346 = G__44408;
chunk__44347 = G__44409;
count__44348 = G__44410;
i__44349 = G__44411;
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
var seq__44416_44420 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__44417_44421 = null;
var count__44418_44422 = (0);
var i__44419_44423 = (0);
while(true){
if((i__44419_44423 < count__44418_44422)){
var ns_44424 = cljs.core._nth.call(null,chunk__44417_44421,i__44419_44423);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44424);

var G__44425 = seq__44416_44420;
var G__44426 = chunk__44417_44421;
var G__44427 = count__44418_44422;
var G__44428 = (i__44419_44423 + (1));
seq__44416_44420 = G__44425;
chunk__44417_44421 = G__44426;
count__44418_44422 = G__44427;
i__44419_44423 = G__44428;
continue;
} else {
var temp__4657__auto___44429 = cljs.core.seq.call(null,seq__44416_44420);
if(temp__4657__auto___44429){
var seq__44416_44430__$1 = temp__4657__auto___44429;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44416_44430__$1)){
var c__35359__auto___44431 = cljs.core.chunk_first.call(null,seq__44416_44430__$1);
var G__44432 = cljs.core.chunk_rest.call(null,seq__44416_44430__$1);
var G__44433 = c__35359__auto___44431;
var G__44434 = cljs.core.count.call(null,c__35359__auto___44431);
var G__44435 = (0);
seq__44416_44420 = G__44432;
chunk__44417_44421 = G__44433;
count__44418_44422 = G__44434;
i__44419_44423 = G__44435;
continue;
} else {
var ns_44436 = cljs.core.first.call(null,seq__44416_44430__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_44436);

var G__44437 = cljs.core.next.call(null,seq__44416_44430__$1);
var G__44438 = null;
var G__44439 = (0);
var G__44440 = (0);
seq__44416_44420 = G__44437;
chunk__44417_44421 = G__44438;
count__44418_44422 = G__44439;
i__44419_44423 = G__44440;
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
goog.require_figwheel_backup_ = (function (){var or__34556__auto__ = goog.require__;
if(cljs.core.truth_(or__34556__auto__)){
return or__34556__auto__;
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
var G__44441__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__44441 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44442__i = 0, G__44442__a = new Array(arguments.length -  0);
while (G__44442__i < G__44442__a.length) {G__44442__a[G__44442__i] = arguments[G__44442__i + 0]; ++G__44442__i;}
  args = new cljs.core.IndexedSeq(G__44442__a,0);
} 
return G__44441__delegate.call(this,args);};
G__44441.cljs$lang$maxFixedArity = 0;
G__44441.cljs$lang$applyTo = (function (arglist__44443){
var args = cljs.core.seq(arglist__44443);
return G__44441__delegate(args);
});
G__44441.cljs$core$IFn$_invoke$arity$variadic = G__44441__delegate;
return G__44441;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__44445 = cljs.core._EQ_;
var expr__44446 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__44445.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__44446))){
var path_parts = ((function (pred__44445,expr__44446){
return (function (p1__44444_SHARP_){
return clojure.string.split.call(null,p1__44444_SHARP_,/[\/\\]/);
});})(pred__44445,expr__44446))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__44445,expr__44446){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e44448){if((e44448 instanceof Error)){
var e = e44448;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e44448;

}
}})());
});
;})(path_parts,sep,root,pred__44445,expr__44446))
} else {
if(cljs.core.truth_(pred__44445.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__44446))){
return ((function (pred__44445,expr__44446){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__44445,expr__44446){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__44445,expr__44446))
);

return deferred.addErrback(((function (deferred,pred__44445,expr__44446){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__44445,expr__44446))
);
});
;})(pred__44445,expr__44446))
} else {
return ((function (pred__44445,expr__44446){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__44445,expr__44446))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__44449,callback){
var map__44452 = p__44449;
var map__44452__$1 = ((((!((map__44452 == null)))?((((map__44452.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44452.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44452):map__44452);
var file_msg = map__44452__$1;
var request_url = cljs.core.get.call(null,map__44452__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__44452,map__44452__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__44452,map__44452__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__38833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto__){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto__){
return (function (state_44476){
var state_val_44477 = (state_44476[(1)]);
if((state_val_44477 === (7))){
var inst_44472 = (state_44476[(2)]);
var state_44476__$1 = state_44476;
var statearr_44478_44498 = state_44476__$1;
(statearr_44478_44498[(2)] = inst_44472);

(statearr_44478_44498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44477 === (1))){
var state_44476__$1 = state_44476;
var statearr_44479_44499 = state_44476__$1;
(statearr_44479_44499[(2)] = null);

(statearr_44479_44499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44477 === (4))){
var inst_44456 = (state_44476[(7)]);
var inst_44456__$1 = (state_44476[(2)]);
var state_44476__$1 = (function (){var statearr_44480 = state_44476;
(statearr_44480[(7)] = inst_44456__$1);

return statearr_44480;
})();
if(cljs.core.truth_(inst_44456__$1)){
var statearr_44481_44500 = state_44476__$1;
(statearr_44481_44500[(1)] = (5));

} else {
var statearr_44482_44501 = state_44476__$1;
(statearr_44482_44501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44477 === (6))){
var state_44476__$1 = state_44476;
var statearr_44483_44502 = state_44476__$1;
(statearr_44483_44502[(2)] = null);

(statearr_44483_44502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44477 === (3))){
var inst_44474 = (state_44476[(2)]);
var state_44476__$1 = state_44476;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44476__$1,inst_44474);
} else {
if((state_val_44477 === (2))){
var state_44476__$1 = state_44476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44476__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_44477 === (11))){
var inst_44468 = (state_44476[(2)]);
var state_44476__$1 = (function (){var statearr_44484 = state_44476;
(statearr_44484[(8)] = inst_44468);

return statearr_44484;
})();
var statearr_44485_44503 = state_44476__$1;
(statearr_44485_44503[(2)] = null);

(statearr_44485_44503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44477 === (9))){
var inst_44460 = (state_44476[(9)]);
var inst_44462 = (state_44476[(10)]);
var inst_44464 = inst_44462.call(null,inst_44460);
var state_44476__$1 = state_44476;
var statearr_44486_44504 = state_44476__$1;
(statearr_44486_44504[(2)] = inst_44464);

(statearr_44486_44504[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44477 === (5))){
var inst_44456 = (state_44476[(7)]);
var inst_44458 = figwheel.client.file_reloading.blocking_load.call(null,inst_44456);
var state_44476__$1 = state_44476;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44476__$1,(8),inst_44458);
} else {
if((state_val_44477 === (10))){
var inst_44460 = (state_44476[(9)]);
var inst_44466 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_44460);
var state_44476__$1 = state_44476;
var statearr_44487_44505 = state_44476__$1;
(statearr_44487_44505[(2)] = inst_44466);

(statearr_44487_44505[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44477 === (8))){
var inst_44462 = (state_44476[(10)]);
var inst_44456 = (state_44476[(7)]);
var inst_44460 = (state_44476[(2)]);
var inst_44461 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_44462__$1 = cljs.core.get.call(null,inst_44461,inst_44456);
var state_44476__$1 = (function (){var statearr_44488 = state_44476;
(statearr_44488[(9)] = inst_44460);

(statearr_44488[(10)] = inst_44462__$1);

return statearr_44488;
})();
if(cljs.core.truth_(inst_44462__$1)){
var statearr_44489_44506 = state_44476__$1;
(statearr_44489_44506[(1)] = (9));

} else {
var statearr_44490_44507 = state_44476__$1;
(statearr_44490_44507[(1)] = (10));

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
});})(c__38833__auto__))
;
return ((function (switch__38812__auto__,c__38833__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__38813__auto__ = null;
var figwheel$client$file_reloading$state_machine__38813__auto____0 = (function (){
var statearr_44494 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44494[(0)] = figwheel$client$file_reloading$state_machine__38813__auto__);

(statearr_44494[(1)] = (1));

return statearr_44494;
});
var figwheel$client$file_reloading$state_machine__38813__auto____1 = (function (state_44476){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_44476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e44495){if((e44495 instanceof Object)){
var ex__38816__auto__ = e44495;
var statearr_44496_44508 = state_44476;
(statearr_44496_44508[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44509 = state_44476;
state_44476 = G__44509;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__38813__auto__ = function(state_44476){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__38813__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__38813__auto____1.call(this,state_44476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__38813__auto____0;
figwheel$client$file_reloading$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__38813__auto____1;
return figwheel$client$file_reloading$state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto__))
})();
var state__38835__auto__ = (function (){var statearr_44497 = f__38834__auto__.call(null);
(statearr_44497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto__);

return statearr_44497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto__))
);

return c__38833__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__44510,callback){
var map__44513 = p__44510;
var map__44513__$1 = ((((!((map__44513 == null)))?((((map__44513.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44513.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44513):map__44513);
var file_msg = map__44513__$1;
var namespace = cljs.core.get.call(null,map__44513__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__44513,map__44513__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__44513,map__44513__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__44515){
var map__44518 = p__44515;
var map__44518__$1 = ((((!((map__44518 == null)))?((((map__44518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44518):map__44518);
var file_msg = map__44518__$1;
var namespace = cljs.core.get.call(null,map__44518__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__34544__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__34544__auto__){
var or__34556__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__34556__auto__)){
return or__34556__auto__;
} else {
var or__34556__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__34556__auto____$1)){
return or__34556__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__34544__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__44520,callback){
var map__44523 = p__44520;
var map__44523__$1 = ((((!((map__44523 == null)))?((((map__44523.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44523.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44523):map__44523);
var file_msg = map__44523__$1;
var request_url = cljs.core.get.call(null,map__44523__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__44523__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__38833__auto___44611 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto___44611,out){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto___44611,out){
return (function (state_44593){
var state_val_44594 = (state_44593[(1)]);
if((state_val_44594 === (1))){
var inst_44571 = cljs.core.nth.call(null,files,(0),null);
var inst_44572 = cljs.core.nthnext.call(null,files,(1));
var inst_44573 = files;
var state_44593__$1 = (function (){var statearr_44595 = state_44593;
(statearr_44595[(7)] = inst_44571);

(statearr_44595[(8)] = inst_44573);

(statearr_44595[(9)] = inst_44572);

return statearr_44595;
})();
var statearr_44596_44612 = state_44593__$1;
(statearr_44596_44612[(2)] = null);

(statearr_44596_44612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44594 === (2))){
var inst_44576 = (state_44593[(10)]);
var inst_44573 = (state_44593[(8)]);
var inst_44576__$1 = cljs.core.nth.call(null,inst_44573,(0),null);
var inst_44577 = cljs.core.nthnext.call(null,inst_44573,(1));
var inst_44578 = (inst_44576__$1 == null);
var inst_44579 = cljs.core.not.call(null,inst_44578);
var state_44593__$1 = (function (){var statearr_44597 = state_44593;
(statearr_44597[(11)] = inst_44577);

(statearr_44597[(10)] = inst_44576__$1);

return statearr_44597;
})();
if(inst_44579){
var statearr_44598_44613 = state_44593__$1;
(statearr_44598_44613[(1)] = (4));

} else {
var statearr_44599_44614 = state_44593__$1;
(statearr_44599_44614[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44594 === (3))){
var inst_44591 = (state_44593[(2)]);
var state_44593__$1 = state_44593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44593__$1,inst_44591);
} else {
if((state_val_44594 === (4))){
var inst_44576 = (state_44593[(10)]);
var inst_44581 = figwheel.client.file_reloading.reload_js_file.call(null,inst_44576);
var state_44593__$1 = state_44593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44593__$1,(7),inst_44581);
} else {
if((state_val_44594 === (5))){
var inst_44587 = cljs.core.async.close_BANG_.call(null,out);
var state_44593__$1 = state_44593;
var statearr_44600_44615 = state_44593__$1;
(statearr_44600_44615[(2)] = inst_44587);

(statearr_44600_44615[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44594 === (6))){
var inst_44589 = (state_44593[(2)]);
var state_44593__$1 = state_44593;
var statearr_44601_44616 = state_44593__$1;
(statearr_44601_44616[(2)] = inst_44589);

(statearr_44601_44616[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44594 === (7))){
var inst_44577 = (state_44593[(11)]);
var inst_44583 = (state_44593[(2)]);
var inst_44584 = cljs.core.async.put_BANG_.call(null,out,inst_44583);
var inst_44573 = inst_44577;
var state_44593__$1 = (function (){var statearr_44602 = state_44593;
(statearr_44602[(12)] = inst_44584);

(statearr_44602[(8)] = inst_44573);

return statearr_44602;
})();
var statearr_44603_44617 = state_44593__$1;
(statearr_44603_44617[(2)] = null);

(statearr_44603_44617[(1)] = (2));


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
});})(c__38833__auto___44611,out))
;
return ((function (switch__38812__auto__,c__38833__auto___44611,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38813__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38813__auto____0 = (function (){
var statearr_44607 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44607[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38813__auto__);

(statearr_44607[(1)] = (1));

return statearr_44607;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__38813__auto____1 = (function (state_44593){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_44593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e44608){if((e44608 instanceof Object)){
var ex__38816__auto__ = e44608;
var statearr_44609_44618 = state_44593;
(statearr_44609_44618[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44608;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44619 = state_44593;
state_44593 = G__44619;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38813__auto__ = function(state_44593){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38813__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38813__auto____1.call(this,state_44593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38813__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__38813__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto___44611,out))
})();
var state__38835__auto__ = (function (){var statearr_44610 = f__38834__auto__.call(null);
(statearr_44610[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto___44611);

return statearr_44610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto___44611,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__44620,opts){
var map__44624 = p__44620;
var map__44624__$1 = ((((!((map__44624 == null)))?((((map__44624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44624):map__44624);
var eval_body__$1 = cljs.core.get.call(null,map__44624__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__44624__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__34544__auto__ = eval_body__$1;
if(cljs.core.truth_(and__34544__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__34544__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e44626){var e = e44626;
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
return (function (p1__44627_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44627_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__44632){
var vec__44633 = p__44632;
var k = cljs.core.nth.call(null,vec__44633,(0),null);
var v = cljs.core.nth.call(null,vec__44633,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__44634){
var vec__44635 = p__44634;
var k = cljs.core.nth.call(null,vec__44635,(0),null);
var v = cljs.core.nth.call(null,vec__44635,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__44639,p__44640){
var map__44887 = p__44639;
var map__44887__$1 = ((((!((map__44887 == null)))?((((map__44887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44887):map__44887);
var opts = map__44887__$1;
var before_jsload = cljs.core.get.call(null,map__44887__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__44887__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__44887__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__44888 = p__44640;
var map__44888__$1 = ((((!((map__44888 == null)))?((((map__44888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44888):map__44888);
var msg = map__44888__$1;
var files = cljs.core.get.call(null,map__44888__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__44888__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__44888__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__38833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto__,map__44887,map__44887__$1,opts,before_jsload,on_jsload,reload_dependents,map__44888,map__44888__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto__,map__44887,map__44887__$1,opts,before_jsload,on_jsload,reload_dependents,map__44888,map__44888__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_45041){
var state_val_45042 = (state_45041[(1)]);
if((state_val_45042 === (7))){
var inst_44905 = (state_45041[(7)]);
var inst_44902 = (state_45041[(8)]);
var inst_44904 = (state_45041[(9)]);
var inst_44903 = (state_45041[(10)]);
var inst_44910 = cljs.core._nth.call(null,inst_44903,inst_44905);
var inst_44911 = figwheel.client.file_reloading.eval_body.call(null,inst_44910,opts);
var inst_44912 = (inst_44905 + (1));
var tmp45043 = inst_44902;
var tmp45044 = inst_44904;
var tmp45045 = inst_44903;
var inst_44902__$1 = tmp45043;
var inst_44903__$1 = tmp45045;
var inst_44904__$1 = tmp45044;
var inst_44905__$1 = inst_44912;
var state_45041__$1 = (function (){var statearr_45046 = state_45041;
(statearr_45046[(7)] = inst_44905__$1);

(statearr_45046[(8)] = inst_44902__$1);

(statearr_45046[(9)] = inst_44904__$1);

(statearr_45046[(11)] = inst_44911);

(statearr_45046[(10)] = inst_44903__$1);

return statearr_45046;
})();
var statearr_45047_45133 = state_45041__$1;
(statearr_45047_45133[(2)] = null);

(statearr_45047_45133[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (20))){
var inst_44945 = (state_45041[(12)]);
var inst_44953 = figwheel.client.file_reloading.sort_files.call(null,inst_44945);
var state_45041__$1 = state_45041;
var statearr_45048_45134 = state_45041__$1;
(statearr_45048_45134[(2)] = inst_44953);

(statearr_45048_45134[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (27))){
var state_45041__$1 = state_45041;
var statearr_45049_45135 = state_45041__$1;
(statearr_45049_45135[(2)] = null);

(statearr_45049_45135[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (1))){
var inst_44894 = (state_45041[(13)]);
var inst_44891 = before_jsload.call(null,files);
var inst_44892 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_44893 = (function (){return ((function (inst_44894,inst_44891,inst_44892,state_val_45042,c__38833__auto__,map__44887,map__44887__$1,opts,before_jsload,on_jsload,reload_dependents,map__44888,map__44888__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44636_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44636_SHARP_);
});
;})(inst_44894,inst_44891,inst_44892,state_val_45042,c__38833__auto__,map__44887,map__44887__$1,opts,before_jsload,on_jsload,reload_dependents,map__44888,map__44888__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44894__$1 = cljs.core.filter.call(null,inst_44893,files);
var inst_44895 = cljs.core.not_empty.call(null,inst_44894__$1);
var state_45041__$1 = (function (){var statearr_45050 = state_45041;
(statearr_45050[(14)] = inst_44892);

(statearr_45050[(15)] = inst_44891);

(statearr_45050[(13)] = inst_44894__$1);

return statearr_45050;
})();
if(cljs.core.truth_(inst_44895)){
var statearr_45051_45136 = state_45041__$1;
(statearr_45051_45136[(1)] = (2));

} else {
var statearr_45052_45137 = state_45041__$1;
(statearr_45052_45137[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (24))){
var state_45041__$1 = state_45041;
var statearr_45053_45138 = state_45041__$1;
(statearr_45053_45138[(2)] = null);

(statearr_45053_45138[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (39))){
var inst_44995 = (state_45041[(16)]);
var state_45041__$1 = state_45041;
var statearr_45054_45139 = state_45041__$1;
(statearr_45054_45139[(2)] = inst_44995);

(statearr_45054_45139[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (46))){
var inst_45036 = (state_45041[(2)]);
var state_45041__$1 = state_45041;
var statearr_45055_45140 = state_45041__$1;
(statearr_45055_45140[(2)] = inst_45036);

(statearr_45055_45140[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (4))){
var inst_44939 = (state_45041[(2)]);
var inst_44940 = cljs.core.List.EMPTY;
var inst_44941 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_44940);
var inst_44942 = (function (){return ((function (inst_44939,inst_44940,inst_44941,state_val_45042,c__38833__auto__,map__44887,map__44887__$1,opts,before_jsload,on_jsload,reload_dependents,map__44888,map__44888__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44637_SHARP_){
var and__34544__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__44637_SHARP_);
if(cljs.core.truth_(and__34544__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__44637_SHARP_));
} else {
return and__34544__auto__;
}
});
;})(inst_44939,inst_44940,inst_44941,state_val_45042,c__38833__auto__,map__44887,map__44887__$1,opts,before_jsload,on_jsload,reload_dependents,map__44888,map__44888__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44943 = cljs.core.filter.call(null,inst_44942,files);
var inst_44944 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_44945 = cljs.core.concat.call(null,inst_44943,inst_44944);
var state_45041__$1 = (function (){var statearr_45056 = state_45041;
(statearr_45056[(12)] = inst_44945);

(statearr_45056[(17)] = inst_44939);

(statearr_45056[(18)] = inst_44941);

return statearr_45056;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_45057_45141 = state_45041__$1;
(statearr_45057_45141[(1)] = (16));

} else {
var statearr_45058_45142 = state_45041__$1;
(statearr_45058_45142[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (15))){
var inst_44929 = (state_45041[(2)]);
var state_45041__$1 = state_45041;
var statearr_45059_45143 = state_45041__$1;
(statearr_45059_45143[(2)] = inst_44929);

(statearr_45059_45143[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (21))){
var inst_44955 = (state_45041[(19)]);
var inst_44955__$1 = (state_45041[(2)]);
var inst_44956 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_44955__$1);
var state_45041__$1 = (function (){var statearr_45060 = state_45041;
(statearr_45060[(19)] = inst_44955__$1);

return statearr_45060;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45041__$1,(22),inst_44956);
} else {
if((state_val_45042 === (31))){
var inst_45039 = (state_45041[(2)]);
var state_45041__$1 = state_45041;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45041__$1,inst_45039);
} else {
if((state_val_45042 === (32))){
var inst_44995 = (state_45041[(16)]);
var inst_45000 = inst_44995.cljs$lang$protocol_mask$partition0$;
var inst_45001 = (inst_45000 & (64));
var inst_45002 = inst_44995.cljs$core$ISeq$;
var inst_45003 = (inst_45001) || (inst_45002);
var state_45041__$1 = state_45041;
if(cljs.core.truth_(inst_45003)){
var statearr_45061_45144 = state_45041__$1;
(statearr_45061_45144[(1)] = (35));

} else {
var statearr_45062_45145 = state_45041__$1;
(statearr_45062_45145[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (40))){
var inst_45016 = (state_45041[(20)]);
var inst_45015 = (state_45041[(2)]);
var inst_45016__$1 = cljs.core.get.call(null,inst_45015,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_45017 = cljs.core.get.call(null,inst_45015,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_45018 = cljs.core.not_empty.call(null,inst_45016__$1);
var state_45041__$1 = (function (){var statearr_45063 = state_45041;
(statearr_45063[(20)] = inst_45016__$1);

(statearr_45063[(21)] = inst_45017);

return statearr_45063;
})();
if(cljs.core.truth_(inst_45018)){
var statearr_45064_45146 = state_45041__$1;
(statearr_45064_45146[(1)] = (41));

} else {
var statearr_45065_45147 = state_45041__$1;
(statearr_45065_45147[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (33))){
var state_45041__$1 = state_45041;
var statearr_45066_45148 = state_45041__$1;
(statearr_45066_45148[(2)] = false);

(statearr_45066_45148[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (13))){
var inst_44915 = (state_45041[(22)]);
var inst_44919 = cljs.core.chunk_first.call(null,inst_44915);
var inst_44920 = cljs.core.chunk_rest.call(null,inst_44915);
var inst_44921 = cljs.core.count.call(null,inst_44919);
var inst_44902 = inst_44920;
var inst_44903 = inst_44919;
var inst_44904 = inst_44921;
var inst_44905 = (0);
var state_45041__$1 = (function (){var statearr_45067 = state_45041;
(statearr_45067[(7)] = inst_44905);

(statearr_45067[(8)] = inst_44902);

(statearr_45067[(9)] = inst_44904);

(statearr_45067[(10)] = inst_44903);

return statearr_45067;
})();
var statearr_45068_45149 = state_45041__$1;
(statearr_45068_45149[(2)] = null);

(statearr_45068_45149[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (22))){
var inst_44959 = (state_45041[(23)]);
var inst_44958 = (state_45041[(24)]);
var inst_44963 = (state_45041[(25)]);
var inst_44955 = (state_45041[(19)]);
var inst_44958__$1 = (state_45041[(2)]);
var inst_44959__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44958__$1);
var inst_44960 = (function (){var all_files = inst_44955;
var res_SINGLEQUOTE_ = inst_44958__$1;
var res = inst_44959__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_44959,inst_44958,inst_44963,inst_44955,inst_44958__$1,inst_44959__$1,state_val_45042,c__38833__auto__,map__44887,map__44887__$1,opts,before_jsload,on_jsload,reload_dependents,map__44888,map__44888__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__44638_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__44638_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_44959,inst_44958,inst_44963,inst_44955,inst_44958__$1,inst_44959__$1,state_val_45042,c__38833__auto__,map__44887,map__44887__$1,opts,before_jsload,on_jsload,reload_dependents,map__44888,map__44888__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44961 = cljs.core.filter.call(null,inst_44960,inst_44958__$1);
var inst_44962 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_44963__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_44962);
var inst_44964 = cljs.core.not_empty.call(null,inst_44963__$1);
var state_45041__$1 = (function (){var statearr_45069 = state_45041;
(statearr_45069[(26)] = inst_44961);

(statearr_45069[(23)] = inst_44959__$1);

(statearr_45069[(24)] = inst_44958__$1);

(statearr_45069[(25)] = inst_44963__$1);

return statearr_45069;
})();
if(cljs.core.truth_(inst_44964)){
var statearr_45070_45150 = state_45041__$1;
(statearr_45070_45150[(1)] = (23));

} else {
var statearr_45071_45151 = state_45041__$1;
(statearr_45071_45151[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (36))){
var state_45041__$1 = state_45041;
var statearr_45072_45152 = state_45041__$1;
(statearr_45072_45152[(2)] = false);

(statearr_45072_45152[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (41))){
var inst_45016 = (state_45041[(20)]);
var inst_45020 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_45021 = cljs.core.map.call(null,inst_45020,inst_45016);
var inst_45022 = cljs.core.pr_str.call(null,inst_45021);
var inst_45023 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_45022)].join('');
var inst_45024 = figwheel.client.utils.log.call(null,inst_45023);
var state_45041__$1 = state_45041;
var statearr_45073_45153 = state_45041__$1;
(statearr_45073_45153[(2)] = inst_45024);

(statearr_45073_45153[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (43))){
var inst_45017 = (state_45041[(21)]);
var inst_45027 = (state_45041[(2)]);
var inst_45028 = cljs.core.not_empty.call(null,inst_45017);
var state_45041__$1 = (function (){var statearr_45074 = state_45041;
(statearr_45074[(27)] = inst_45027);

return statearr_45074;
})();
if(cljs.core.truth_(inst_45028)){
var statearr_45075_45154 = state_45041__$1;
(statearr_45075_45154[(1)] = (44));

} else {
var statearr_45076_45155 = state_45041__$1;
(statearr_45076_45155[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (29))){
var inst_44995 = (state_45041[(16)]);
var inst_44961 = (state_45041[(26)]);
var inst_44959 = (state_45041[(23)]);
var inst_44958 = (state_45041[(24)]);
var inst_44963 = (state_45041[(25)]);
var inst_44955 = (state_45041[(19)]);
var inst_44991 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_44994 = (function (){var all_files = inst_44955;
var res_SINGLEQUOTE_ = inst_44958;
var res = inst_44959;
var files_not_loaded = inst_44961;
var dependencies_that_loaded = inst_44963;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44995,inst_44961,inst_44959,inst_44958,inst_44963,inst_44955,inst_44991,state_val_45042,c__38833__auto__,map__44887,map__44887__$1,opts,before_jsload,on_jsload,reload_dependents,map__44888,map__44888__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44993){
var map__45077 = p__44993;
var map__45077__$1 = ((((!((map__45077 == null)))?((((map__45077.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45077.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45077):map__45077);
var namespace = cljs.core.get.call(null,map__45077__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44995,inst_44961,inst_44959,inst_44958,inst_44963,inst_44955,inst_44991,state_val_45042,c__38833__auto__,map__44887,map__44887__$1,opts,before_jsload,on_jsload,reload_dependents,map__44888,map__44888__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44995__$1 = cljs.core.group_by.call(null,inst_44994,inst_44961);
var inst_44997 = (inst_44995__$1 == null);
var inst_44998 = cljs.core.not.call(null,inst_44997);
var state_45041__$1 = (function (){var statearr_45079 = state_45041;
(statearr_45079[(16)] = inst_44995__$1);

(statearr_45079[(28)] = inst_44991);

return statearr_45079;
})();
if(inst_44998){
var statearr_45080_45156 = state_45041__$1;
(statearr_45080_45156[(1)] = (32));

} else {
var statearr_45081_45157 = state_45041__$1;
(statearr_45081_45157[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (44))){
var inst_45017 = (state_45041[(21)]);
var inst_45030 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45017);
var inst_45031 = cljs.core.pr_str.call(null,inst_45030);
var inst_45032 = [cljs.core.str("not required: "),cljs.core.str(inst_45031)].join('');
var inst_45033 = figwheel.client.utils.log.call(null,inst_45032);
var state_45041__$1 = state_45041;
var statearr_45082_45158 = state_45041__$1;
(statearr_45082_45158[(2)] = inst_45033);

(statearr_45082_45158[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (6))){
var inst_44936 = (state_45041[(2)]);
var state_45041__$1 = state_45041;
var statearr_45083_45159 = state_45041__$1;
(statearr_45083_45159[(2)] = inst_44936);

(statearr_45083_45159[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (28))){
var inst_44961 = (state_45041[(26)]);
var inst_44988 = (state_45041[(2)]);
var inst_44989 = cljs.core.not_empty.call(null,inst_44961);
var state_45041__$1 = (function (){var statearr_45084 = state_45041;
(statearr_45084[(29)] = inst_44988);

return statearr_45084;
})();
if(cljs.core.truth_(inst_44989)){
var statearr_45085_45160 = state_45041__$1;
(statearr_45085_45160[(1)] = (29));

} else {
var statearr_45086_45161 = state_45041__$1;
(statearr_45086_45161[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (25))){
var inst_44959 = (state_45041[(23)]);
var inst_44975 = (state_45041[(2)]);
var inst_44976 = cljs.core.not_empty.call(null,inst_44959);
var state_45041__$1 = (function (){var statearr_45087 = state_45041;
(statearr_45087[(30)] = inst_44975);

return statearr_45087;
})();
if(cljs.core.truth_(inst_44976)){
var statearr_45088_45162 = state_45041__$1;
(statearr_45088_45162[(1)] = (26));

} else {
var statearr_45089_45163 = state_45041__$1;
(statearr_45089_45163[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (34))){
var inst_45010 = (state_45041[(2)]);
var state_45041__$1 = state_45041;
if(cljs.core.truth_(inst_45010)){
var statearr_45090_45164 = state_45041__$1;
(statearr_45090_45164[(1)] = (38));

} else {
var statearr_45091_45165 = state_45041__$1;
(statearr_45091_45165[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (17))){
var state_45041__$1 = state_45041;
var statearr_45092_45166 = state_45041__$1;
(statearr_45092_45166[(2)] = recompile_dependents);

(statearr_45092_45166[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (3))){
var state_45041__$1 = state_45041;
var statearr_45093_45167 = state_45041__$1;
(statearr_45093_45167[(2)] = null);

(statearr_45093_45167[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (12))){
var inst_44932 = (state_45041[(2)]);
var state_45041__$1 = state_45041;
var statearr_45094_45168 = state_45041__$1;
(statearr_45094_45168[(2)] = inst_44932);

(statearr_45094_45168[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (2))){
var inst_44894 = (state_45041[(13)]);
var inst_44901 = cljs.core.seq.call(null,inst_44894);
var inst_44902 = inst_44901;
var inst_44903 = null;
var inst_44904 = (0);
var inst_44905 = (0);
var state_45041__$1 = (function (){var statearr_45095 = state_45041;
(statearr_45095[(7)] = inst_44905);

(statearr_45095[(8)] = inst_44902);

(statearr_45095[(9)] = inst_44904);

(statearr_45095[(10)] = inst_44903);

return statearr_45095;
})();
var statearr_45096_45169 = state_45041__$1;
(statearr_45096_45169[(2)] = null);

(statearr_45096_45169[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (23))){
var inst_44961 = (state_45041[(26)]);
var inst_44959 = (state_45041[(23)]);
var inst_44958 = (state_45041[(24)]);
var inst_44963 = (state_45041[(25)]);
var inst_44955 = (state_45041[(19)]);
var inst_44966 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_44968 = (function (){var all_files = inst_44955;
var res_SINGLEQUOTE_ = inst_44958;
var res = inst_44959;
var files_not_loaded = inst_44961;
var dependencies_that_loaded = inst_44963;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44961,inst_44959,inst_44958,inst_44963,inst_44955,inst_44966,state_val_45042,c__38833__auto__,map__44887,map__44887__$1,opts,before_jsload,on_jsload,reload_dependents,map__44888,map__44888__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44967){
var map__45097 = p__44967;
var map__45097__$1 = ((((!((map__45097 == null)))?((((map__45097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45097):map__45097);
var request_url = cljs.core.get.call(null,map__45097__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44961,inst_44959,inst_44958,inst_44963,inst_44955,inst_44966,state_val_45042,c__38833__auto__,map__44887,map__44887__$1,opts,before_jsload,on_jsload,reload_dependents,map__44888,map__44888__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44969 = cljs.core.reverse.call(null,inst_44963);
var inst_44970 = cljs.core.map.call(null,inst_44968,inst_44969);
var inst_44971 = cljs.core.pr_str.call(null,inst_44970);
var inst_44972 = figwheel.client.utils.log.call(null,inst_44971);
var state_45041__$1 = (function (){var statearr_45099 = state_45041;
(statearr_45099[(31)] = inst_44966);

return statearr_45099;
})();
var statearr_45100_45170 = state_45041__$1;
(statearr_45100_45170[(2)] = inst_44972);

(statearr_45100_45170[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (35))){
var state_45041__$1 = state_45041;
var statearr_45101_45171 = state_45041__$1;
(statearr_45101_45171[(2)] = true);

(statearr_45101_45171[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (19))){
var inst_44945 = (state_45041[(12)]);
var inst_44951 = figwheel.client.file_reloading.expand_files.call(null,inst_44945);
var state_45041__$1 = state_45041;
var statearr_45102_45172 = state_45041__$1;
(statearr_45102_45172[(2)] = inst_44951);

(statearr_45102_45172[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (11))){
var state_45041__$1 = state_45041;
var statearr_45103_45173 = state_45041__$1;
(statearr_45103_45173[(2)] = null);

(statearr_45103_45173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (9))){
var inst_44934 = (state_45041[(2)]);
var state_45041__$1 = state_45041;
var statearr_45104_45174 = state_45041__$1;
(statearr_45104_45174[(2)] = inst_44934);

(statearr_45104_45174[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (5))){
var inst_44905 = (state_45041[(7)]);
var inst_44904 = (state_45041[(9)]);
var inst_44907 = (inst_44905 < inst_44904);
var inst_44908 = inst_44907;
var state_45041__$1 = state_45041;
if(cljs.core.truth_(inst_44908)){
var statearr_45105_45175 = state_45041__$1;
(statearr_45105_45175[(1)] = (7));

} else {
var statearr_45106_45176 = state_45041__$1;
(statearr_45106_45176[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (14))){
var inst_44915 = (state_45041[(22)]);
var inst_44924 = cljs.core.first.call(null,inst_44915);
var inst_44925 = figwheel.client.file_reloading.eval_body.call(null,inst_44924,opts);
var inst_44926 = cljs.core.next.call(null,inst_44915);
var inst_44902 = inst_44926;
var inst_44903 = null;
var inst_44904 = (0);
var inst_44905 = (0);
var state_45041__$1 = (function (){var statearr_45107 = state_45041;
(statearr_45107[(7)] = inst_44905);

(statearr_45107[(8)] = inst_44902);

(statearr_45107[(9)] = inst_44904);

(statearr_45107[(32)] = inst_44925);

(statearr_45107[(10)] = inst_44903);

return statearr_45107;
})();
var statearr_45108_45177 = state_45041__$1;
(statearr_45108_45177[(2)] = null);

(statearr_45108_45177[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (45))){
var state_45041__$1 = state_45041;
var statearr_45109_45178 = state_45041__$1;
(statearr_45109_45178[(2)] = null);

(statearr_45109_45178[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (26))){
var inst_44961 = (state_45041[(26)]);
var inst_44959 = (state_45041[(23)]);
var inst_44958 = (state_45041[(24)]);
var inst_44963 = (state_45041[(25)]);
var inst_44955 = (state_45041[(19)]);
var inst_44978 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_44980 = (function (){var all_files = inst_44955;
var res_SINGLEQUOTE_ = inst_44958;
var res = inst_44959;
var files_not_loaded = inst_44961;
var dependencies_that_loaded = inst_44963;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44961,inst_44959,inst_44958,inst_44963,inst_44955,inst_44978,state_val_45042,c__38833__auto__,map__44887,map__44887__$1,opts,before_jsload,on_jsload,reload_dependents,map__44888,map__44888__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__44979){
var map__45110 = p__44979;
var map__45110__$1 = ((((!((map__45110 == null)))?((((map__45110.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45110.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45110):map__45110);
var namespace = cljs.core.get.call(null,map__45110__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__45110__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44961,inst_44959,inst_44958,inst_44963,inst_44955,inst_44978,state_val_45042,c__38833__auto__,map__44887,map__44887__$1,opts,before_jsload,on_jsload,reload_dependents,map__44888,map__44888__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44981 = cljs.core.map.call(null,inst_44980,inst_44959);
var inst_44982 = cljs.core.pr_str.call(null,inst_44981);
var inst_44983 = figwheel.client.utils.log.call(null,inst_44982);
var inst_44984 = (function (){var all_files = inst_44955;
var res_SINGLEQUOTE_ = inst_44958;
var res = inst_44959;
var files_not_loaded = inst_44961;
var dependencies_that_loaded = inst_44963;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44961,inst_44959,inst_44958,inst_44963,inst_44955,inst_44978,inst_44980,inst_44981,inst_44982,inst_44983,state_val_45042,c__38833__auto__,map__44887,map__44887__$1,opts,before_jsload,on_jsload,reload_dependents,map__44888,map__44888__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_44961,inst_44959,inst_44958,inst_44963,inst_44955,inst_44978,inst_44980,inst_44981,inst_44982,inst_44983,state_val_45042,c__38833__auto__,map__44887,map__44887__$1,opts,before_jsload,on_jsload,reload_dependents,map__44888,map__44888__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_44985 = setTimeout(inst_44984,(10));
var state_45041__$1 = (function (){var statearr_45112 = state_45041;
(statearr_45112[(33)] = inst_44978);

(statearr_45112[(34)] = inst_44983);

return statearr_45112;
})();
var statearr_45113_45179 = state_45041__$1;
(statearr_45113_45179[(2)] = inst_44985);

(statearr_45113_45179[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (16))){
var state_45041__$1 = state_45041;
var statearr_45114_45180 = state_45041__$1;
(statearr_45114_45180[(2)] = reload_dependents);

(statearr_45114_45180[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (38))){
var inst_44995 = (state_45041[(16)]);
var inst_45012 = cljs.core.apply.call(null,cljs.core.hash_map,inst_44995);
var state_45041__$1 = state_45041;
var statearr_45115_45181 = state_45041__$1;
(statearr_45115_45181[(2)] = inst_45012);

(statearr_45115_45181[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (30))){
var state_45041__$1 = state_45041;
var statearr_45116_45182 = state_45041__$1;
(statearr_45116_45182[(2)] = null);

(statearr_45116_45182[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (10))){
var inst_44915 = (state_45041[(22)]);
var inst_44917 = cljs.core.chunked_seq_QMARK_.call(null,inst_44915);
var state_45041__$1 = state_45041;
if(inst_44917){
var statearr_45117_45183 = state_45041__$1;
(statearr_45117_45183[(1)] = (13));

} else {
var statearr_45118_45184 = state_45041__$1;
(statearr_45118_45184[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (18))){
var inst_44949 = (state_45041[(2)]);
var state_45041__$1 = state_45041;
if(cljs.core.truth_(inst_44949)){
var statearr_45119_45185 = state_45041__$1;
(statearr_45119_45185[(1)] = (19));

} else {
var statearr_45120_45186 = state_45041__$1;
(statearr_45120_45186[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (42))){
var state_45041__$1 = state_45041;
var statearr_45121_45187 = state_45041__$1;
(statearr_45121_45187[(2)] = null);

(statearr_45121_45187[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (37))){
var inst_45007 = (state_45041[(2)]);
var state_45041__$1 = state_45041;
var statearr_45122_45188 = state_45041__$1;
(statearr_45122_45188[(2)] = inst_45007);

(statearr_45122_45188[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45042 === (8))){
var inst_44902 = (state_45041[(8)]);
var inst_44915 = (state_45041[(22)]);
var inst_44915__$1 = cljs.core.seq.call(null,inst_44902);
var state_45041__$1 = (function (){var statearr_45123 = state_45041;
(statearr_45123[(22)] = inst_44915__$1);

return statearr_45123;
})();
if(inst_44915__$1){
var statearr_45124_45189 = state_45041__$1;
(statearr_45124_45189[(1)] = (10));

} else {
var statearr_45125_45190 = state_45041__$1;
(statearr_45125_45190[(1)] = (11));

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
});})(c__38833__auto__,map__44887,map__44887__$1,opts,before_jsload,on_jsload,reload_dependents,map__44888,map__44888__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__38812__auto__,c__38833__auto__,map__44887,map__44887__$1,opts,before_jsload,on_jsload,reload_dependents,map__44888,map__44888__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38813__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38813__auto____0 = (function (){
var statearr_45129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45129[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__38813__auto__);

(statearr_45129[(1)] = (1));

return statearr_45129;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__38813__auto____1 = (function (state_45041){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_45041);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e45130){if((e45130 instanceof Object)){
var ex__38816__auto__ = e45130;
var statearr_45131_45191 = state_45041;
(statearr_45131_45191[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45041);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45192 = state_45041;
state_45041 = G__45192;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__38813__auto__ = function(state_45041){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38813__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38813__auto____1.call(this,state_45041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38813__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__38813__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto__,map__44887,map__44887__$1,opts,before_jsload,on_jsload,reload_dependents,map__44888,map__44888__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__38835__auto__ = (function (){var statearr_45132 = f__38834__auto__.call(null);
(statearr_45132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto__);

return statearr_45132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto__,map__44887,map__44887__$1,opts,before_jsload,on_jsload,reload_dependents,map__44888,map__44888__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__38833__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__45195,link){
var map__45198 = p__45195;
var map__45198__$1 = ((((!((map__45198 == null)))?((((map__45198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45198):map__45198);
var file = cljs.core.get.call(null,map__45198__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__45198,map__45198__$1,file){
return (function (p1__45193_SHARP_,p2__45194_SHARP_){
if(cljs.core._EQ_.call(null,p1__45193_SHARP_,p2__45194_SHARP_)){
return p1__45193_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__45198,map__45198__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__45204){
var map__45205 = p__45204;
var map__45205__$1 = ((((!((map__45205 == null)))?((((map__45205.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45205.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45205):map__45205);
var match_length = cljs.core.get.call(null,map__45205__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__45205__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__45200_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__45200_SHARP_);
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
var args45207 = [];
var len__35614__auto___45210 = arguments.length;
var i__35615__auto___45211 = (0);
while(true){
if((i__35615__auto___45211 < len__35614__auto___45210)){
args45207.push((arguments[i__35615__auto___45211]));

var G__45212 = (i__35615__auto___45211 + (1));
i__35615__auto___45211 = G__45212;
continue;
} else {
}
break;
}

var G__45209 = args45207.length;
switch (G__45209) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45207.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__45214_SHARP_,p2__45215_SHARP_){
return cljs.core.assoc.call(null,p1__45214_SHARP_,cljs.core.get.call(null,p2__45215_SHARP_,key),p2__45215_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__45216){
var map__45219 = p__45216;
var map__45219__$1 = ((((!((map__45219 == null)))?((((map__45219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45219):map__45219);
var f_data = map__45219__$1;
var file = cljs.core.get.call(null,map__45219__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__45221,files_msg){
var map__45228 = p__45221;
var map__45228__$1 = ((((!((map__45228 == null)))?((((map__45228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45228):map__45228);
var opts = map__45228__$1;
var on_cssload = cljs.core.get.call(null,map__45228__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__45230_45234 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__45231_45235 = null;
var count__45232_45236 = (0);
var i__45233_45237 = (0);
while(true){
if((i__45233_45237 < count__45232_45236)){
var f_45238 = cljs.core._nth.call(null,chunk__45231_45235,i__45233_45237);
figwheel.client.file_reloading.reload_css_file.call(null,f_45238);

var G__45239 = seq__45230_45234;
var G__45240 = chunk__45231_45235;
var G__45241 = count__45232_45236;
var G__45242 = (i__45233_45237 + (1));
seq__45230_45234 = G__45239;
chunk__45231_45235 = G__45240;
count__45232_45236 = G__45241;
i__45233_45237 = G__45242;
continue;
} else {
var temp__4657__auto___45243 = cljs.core.seq.call(null,seq__45230_45234);
if(temp__4657__auto___45243){
var seq__45230_45244__$1 = temp__4657__auto___45243;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45230_45244__$1)){
var c__35359__auto___45245 = cljs.core.chunk_first.call(null,seq__45230_45244__$1);
var G__45246 = cljs.core.chunk_rest.call(null,seq__45230_45244__$1);
var G__45247 = c__35359__auto___45245;
var G__45248 = cljs.core.count.call(null,c__35359__auto___45245);
var G__45249 = (0);
seq__45230_45234 = G__45246;
chunk__45231_45235 = G__45247;
count__45232_45236 = G__45248;
i__45233_45237 = G__45249;
continue;
} else {
var f_45250 = cljs.core.first.call(null,seq__45230_45244__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_45250);

var G__45251 = cljs.core.next.call(null,seq__45230_45244__$1);
var G__45252 = null;
var G__45253 = (0);
var G__45254 = (0);
seq__45230_45234 = G__45251;
chunk__45231_45235 = G__45252;
count__45232_45236 = G__45253;
i__45233_45237 = G__45254;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__45228,map__45228__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__45228,map__45228__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map