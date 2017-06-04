// Compiled by ClojureScript 1.7.228 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__40231){
var map__40238 = p__40231;
var map__40238__$1 = ((((!((map__40238 == null)))?((((map__40238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40238):map__40238);
var replacement_transformers = cljs.core.get.call(null,map__40238__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__40238__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__40238,map__40238__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_40240 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__40241 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_40240,map__40238,map__40238__$1,replacement_transformers,custom_transformers){
return (function (p__40242,transformer){
var vec__40243 = p__40242;
var text = cljs.core.nth.call(null,vec__40243,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__40243,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_40240,map__40238,map__40238__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__34556__auto__ = replacement_transformers;
if(cljs.core.truth_(or__34556__auto__)){
return or__34556__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__40241,(0),null);
var new_state = cljs.core.nth.call(null,vec__40241,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_40240;
}});
;})(map__40238,map__40238__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__35621__auto__ = [];
var len__35614__auto___40246 = arguments.length;
var i__35615__auto___40247 = (0);
while(true){
if((i__35615__auto___40247 < len__35614__auto___40246)){
args__35621__auto__.push((arguments[i__35615__auto___40247]));

var G__40248 = (i__35615__auto___40247 + (1));
i__35615__auto___40247 = G__40248;
continue;
} else {
}
break;
}

var argseq__35622__auto__ = ((((1) < args__35621__auto__.length))?(new cljs.core.IndexedSeq(args__35621__auto__.slice((1)),(0))):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35622__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq40244){
var G__40245 = cljs.core.first.call(null,seq40244);
var seq40244__$1 = cljs.core.next.call(null,seq40244);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__40245,seq40244__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__40253_40257 = cljs.core.seq.call(null,lines);
var chunk__40254_40258 = null;
var count__40255_40259 = (0);
var i__40256_40260 = (0);
while(true){
if((i__40256_40260 < count__40255_40259)){
var line_40261 = cljs.core._nth.call(null,chunk__40254_40258,i__40256_40260);
markdown.links.parse_reference_link.call(null,line_40261,references);

var G__40262 = seq__40253_40257;
var G__40263 = chunk__40254_40258;
var G__40264 = count__40255_40259;
var G__40265 = (i__40256_40260 + (1));
seq__40253_40257 = G__40262;
chunk__40254_40258 = G__40263;
count__40255_40259 = G__40264;
i__40256_40260 = G__40265;
continue;
} else {
var temp__4657__auto___40266 = cljs.core.seq.call(null,seq__40253_40257);
if(temp__4657__auto___40266){
var seq__40253_40267__$1 = temp__4657__auto___40266;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40253_40267__$1)){
var c__35359__auto___40268 = cljs.core.chunk_first.call(null,seq__40253_40267__$1);
var G__40269 = cljs.core.chunk_rest.call(null,seq__40253_40267__$1);
var G__40270 = c__35359__auto___40268;
var G__40271 = cljs.core.count.call(null,c__35359__auto___40268);
var G__40272 = (0);
seq__40253_40257 = G__40269;
chunk__40254_40258 = G__40270;
count__40255_40259 = G__40271;
i__40256_40260 = G__40272;
continue;
} else {
var line_40273 = cljs.core.first.call(null,seq__40253_40267__$1);
markdown.links.parse_reference_link.call(null,line_40273,references);

var G__40274 = cljs.core.next.call(null,seq__40253_40267__$1);
var G__40275 = null;
var G__40276 = (0);
var G__40277 = (0);
seq__40253_40257 = G__40274;
chunk__40254_40258 = G__40275;
count__40255_40259 = G__40276;
i__40256_40260 = G__40277;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__40282_40286 = cljs.core.seq.call(null,lines);
var chunk__40283_40287 = null;
var count__40284_40288 = (0);
var i__40285_40289 = (0);
while(true){
if((i__40285_40289 < count__40284_40288)){
var line_40290 = cljs.core._nth.call(null,chunk__40283_40287,i__40285_40289);
markdown.links.parse_footnote_link.call(null,line_40290,footnotes);

var G__40291 = seq__40282_40286;
var G__40292 = chunk__40283_40287;
var G__40293 = count__40284_40288;
var G__40294 = (i__40285_40289 + (1));
seq__40282_40286 = G__40291;
chunk__40283_40287 = G__40292;
count__40284_40288 = G__40293;
i__40285_40289 = G__40294;
continue;
} else {
var temp__4657__auto___40295 = cljs.core.seq.call(null,seq__40282_40286);
if(temp__4657__auto___40295){
var seq__40282_40296__$1 = temp__4657__auto___40295;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40282_40296__$1)){
var c__35359__auto___40297 = cljs.core.chunk_first.call(null,seq__40282_40296__$1);
var G__40298 = cljs.core.chunk_rest.call(null,seq__40282_40296__$1);
var G__40299 = c__35359__auto___40297;
var G__40300 = cljs.core.count.call(null,c__35359__auto___40297);
var G__40301 = (0);
seq__40282_40286 = G__40298;
chunk__40283_40287 = G__40299;
count__40284_40288 = G__40300;
i__40285_40289 = G__40301;
continue;
} else {
var line_40302 = cljs.core.first.call(null,seq__40282_40296__$1);
markdown.links.parse_footnote_link.call(null,line_40302,footnotes);

var G__40303 = cljs.core.next.call(null,seq__40282_40296__$1);
var G__40304 = null;
var G__40305 = (0);
var G__40306 = (0);
seq__40282_40286 = G__40303;
chunk__40283_40287 = G__40304;
count__40284_40288 = G__40305;
i__40285_40289 = G__40306;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref.call(null,footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__40309 = cljs.core.split_with.call(null,(function (p1__40307_SHARP_){
return cljs.core.not_empty.call(null,p1__40307_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__40309,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__40309,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_40317 = markdown.common._STAR_substring_STAR_;
var formatter40318 = markdown.transformers.formatter;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_40317,formatter40318){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_40317,formatter40318))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str(text),cljs.core.str("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__40319 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__40319,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__40319,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__40321_40324 = lines__$1;
var vec__40322_40325 = G__40321_40324;
var line_40326 = cljs.core.nth.call(null,vec__40322_40325,(0),null);
var more_40327 = cljs.core.nthnext.call(null,vec__40322_40325,(1));
var state_40328 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__40321_40329__$1 = G__40321_40324;
var state_40330__$1 = state_40328;
while(true){
var vec__40323_40331 = G__40321_40329__$1;
var line_40332__$1 = cljs.core.nth.call(null,vec__40323_40331,(0),null);
var more_40333__$1 = cljs.core.nthnext.call(null,vec__40323_40331,(1));
var state_40334__$2 = state_40330__$1;
var state_40335__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_40334__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_40334__$2),cljs.core.first.call(null,more_40333__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_40334__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_40334__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_40333__$1))){
var G__40336 = more_40333__$1;
var G__40337 = cljs.core.assoc.call(null,transformer.call(null,html,line_40332__$1,cljs.core.first.call(null,more_40333__$1),state_40335__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_40332__$1));
G__40321_40329__$1 = G__40336;
state_40330__$1 = G__40337;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_40335__$3))),line_40332__$1,"",cljs.core.assoc.call(null,state_40335__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers.formatter = formatter40318;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_40317;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__35621__auto__ = [];
var len__35614__auto___40340 = arguments.length;
var i__35615__auto___40341 = (0);
while(true){
if((i__35615__auto___40341 < len__35614__auto___40340)){
args__35621__auto__.push((arguments[i__35615__auto___40341]));

var G__40342 = (i__35615__auto___40341 + (1));
i__35615__auto___40341 = G__40342;
continue;
} else {
}
break;
}

var argseq__35622__auto__ = ((((1) < args__35621__auto__.length))?(new cljs.core.IndexedSeq(args__35621__auto__.slice((1)),(0))):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35622__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq40338){
var G__40339 = cljs.core.first.call(null,seq40338);
var seq40338__$1 = cljs.core.next.call(null,seq40338);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__40339,seq40338__$1);
});
markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__35621__auto__ = [];
var len__35614__auto___40345 = arguments.length;
var i__35615__auto___40346 = (0);
while(true){
if((i__35615__auto___40346 < len__35614__auto___40345)){
args__35621__auto__.push((arguments[i__35615__auto___40346]));

var G__40347 = (i__35615__auto___40346 + (1));
i__35615__auto___40346 = G__40347;
continue;
} else {
}
break;
}

var argseq__35622__auto__ = ((((1) < args__35621__auto__.length))?(new cljs.core.IndexedSeq(args__35621__auto__.slice((1)),(0))):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35622__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq40343){
var G__40344 = cljs.core.first.call(null,seq40343);
var seq40343__$1 = cljs.core.next.call(null,seq40343);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__40344,seq40343__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__35621__auto__ = [];
var len__35614__auto___40349 = arguments.length;
var i__35615__auto___40350 = (0);
while(true){
if((i__35615__auto___40350 < len__35614__auto___40349)){
args__35621__auto__.push((arguments[i__35615__auto___40350]));

var G__40351 = (i__35615__auto___40350 + (1));
i__35615__auto___40350 = G__40351;
continue;
} else {
}
break;
}

var argseq__35622__auto__ = ((((0) < args__35621__auto__.length))?(new cljs.core.IndexedSeq(args__35621__auto__.slice((0)),(0))):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__35622__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq40348){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40348));
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__35621__auto__ = [];
var len__35614__auto___40353 = arguments.length;
var i__35615__auto___40354 = (0);
while(true){
if((i__35615__auto___40354 < len__35614__auto___40353)){
args__35621__auto__.push((arguments[i__35615__auto___40354]));

var G__40355 = (i__35615__auto___40354 + (1));
i__35615__auto___40354 = G__40355;
continue;
} else {
}
break;
}

var argseq__35622__auto__ = ((((0) < args__35621__auto__.length))?(new cljs.core.IndexedSeq(args__35621__auto__.slice((0)),(0))):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__35622__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq40352){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40352));
});

//# sourceMappingURL=core.js.map