// Compiled by ClojureScript 1.7.228 {}
goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__38473){
var map__38480 = p__38473;
var map__38480__$1 = ((((!((map__38480 == null)))?((((map__38480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38480):map__38480);
var replacement_transformers = cljs.core.get.call(null,map__38480__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.call(null,map__38480__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
return ((function (map__38480,map__38480__$1,replacement_transformers,custom_transformers){
return (function (html,line,next_line,state){
var _STAR_next_line_STAR_38482 = markdown.transformers._STAR_next_line_STAR_;
markdown.transformers._STAR_next_line_STAR_ = next_line;

try{var vec__38483 = cljs.core.reduce.call(null,((function (_STAR_next_line_STAR_38482,map__38480,map__38480__$1,replacement_transformers,custom_transformers){
return (function (p__38484,transformer){
var vec__38485 = p__38484;
var text = cljs.core.nth.call(null,vec__38485,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__38485,(1),null);
return transformer.call(null,text,state__$1);
});})(_STAR_next_line_STAR_38482,map__38480,map__38480__$1,replacement_transformers,custom_transformers))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__34572__auto__ = replacement_transformers;
if(cljs.core.truth_(or__34572__auto__)){
return or__34572__auto__;
} else {
return cljs.core.into.call(null,markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.call(null,vec__38483,(0),null);
var new_state = cljs.core.nth.call(null,vec__38483,(1),null);
html.append(text);

return new_state;
}finally {markdown.transformers._STAR_next_line_STAR_ = _STAR_next_line_STAR_38482;
}});
;})(map__38480,map__38480__$1,replacement_transformers,custom_transformers))
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__35637__auto__ = [];
var len__35630__auto___38488 = arguments.length;
var i__35631__auto___38489 = (0);
while(true){
if((i__35631__auto___38489 < len__35630__auto___38488)){
args__35637__auto__.push((arguments[i__35631__auto___38489]));

var G__38490 = (i__35631__auto___38489 + (1));
i__35631__auto___38489 = G__38490;
continue;
} else {
}
break;
}

var argseq__35638__auto__ = ((((1) < args__35637__auto__.length))?(new cljs.core.IndexedSeq(args__35637__auto__.slice((1)),(0))):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35638__auto__);
});

markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

markdown.core.format.cljs$lang$maxFixedArity = (1);

markdown.core.format.cljs$lang$applyTo = (function (seq38486){
var G__38487 = cljs.core.first.call(null,seq38486);
var seq38486__$1 = cljs.core.next.call(null,seq38486);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic(G__38487,seq38486__$1);
});
markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var seq__38495_38499 = cljs.core.seq.call(null,lines);
var chunk__38496_38500 = null;
var count__38497_38501 = (0);
var i__38498_38502 = (0);
while(true){
if((i__38498_38502 < count__38497_38501)){
var line_38503 = cljs.core._nth.call(null,chunk__38496_38500,i__38498_38502);
markdown.links.parse_reference_link.call(null,line_38503,references);

var G__38504 = seq__38495_38499;
var G__38505 = chunk__38496_38500;
var G__38506 = count__38497_38501;
var G__38507 = (i__38498_38502 + (1));
seq__38495_38499 = G__38504;
chunk__38496_38500 = G__38505;
count__38497_38501 = G__38506;
i__38498_38502 = G__38507;
continue;
} else {
var temp__4657__auto___38508 = cljs.core.seq.call(null,seq__38495_38499);
if(temp__4657__auto___38508){
var seq__38495_38509__$1 = temp__4657__auto___38508;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38495_38509__$1)){
var c__35375__auto___38510 = cljs.core.chunk_first.call(null,seq__38495_38509__$1);
var G__38511 = cljs.core.chunk_rest.call(null,seq__38495_38509__$1);
var G__38512 = c__35375__auto___38510;
var G__38513 = cljs.core.count.call(null,c__35375__auto___38510);
var G__38514 = (0);
seq__38495_38499 = G__38511;
chunk__38496_38500 = G__38512;
count__38497_38501 = G__38513;
i__38498_38502 = G__38514;
continue;
} else {
var line_38515 = cljs.core.first.call(null,seq__38495_38509__$1);
markdown.links.parse_reference_link.call(null,line_38515,references);

var G__38516 = cljs.core.next.call(null,seq__38495_38509__$1);
var G__38517 = null;
var G__38518 = (0);
var G__38519 = (0);
seq__38495_38499 = G__38516;
chunk__38496_38500 = G__38517;
count__38497_38501 = G__38518;
i__38498_38502 = G__38519;
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
var seq__38524_38528 = cljs.core.seq.call(null,lines);
var chunk__38525_38529 = null;
var count__38526_38530 = (0);
var i__38527_38531 = (0);
while(true){
if((i__38527_38531 < count__38526_38530)){
var line_38532 = cljs.core._nth.call(null,chunk__38525_38529,i__38527_38531);
markdown.links.parse_footnote_link.call(null,line_38532,footnotes);

var G__38533 = seq__38524_38528;
var G__38534 = chunk__38525_38529;
var G__38535 = count__38526_38530;
var G__38536 = (i__38527_38531 + (1));
seq__38524_38528 = G__38533;
chunk__38525_38529 = G__38534;
count__38526_38530 = G__38535;
i__38527_38531 = G__38536;
continue;
} else {
var temp__4657__auto___38537 = cljs.core.seq.call(null,seq__38524_38528);
if(temp__4657__auto___38537){
var seq__38524_38538__$1 = temp__4657__auto___38537;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38524_38538__$1)){
var c__35375__auto___38539 = cljs.core.chunk_first.call(null,seq__38524_38538__$1);
var G__38540 = cljs.core.chunk_rest.call(null,seq__38524_38538__$1);
var G__38541 = c__35375__auto___38539;
var G__38542 = cljs.core.count.call(null,c__35375__auto___38539);
var G__38543 = (0);
seq__38524_38528 = G__38540;
chunk__38525_38529 = G__38541;
count__38526_38530 = G__38542;
i__38527_38531 = G__38543;
continue;
} else {
var line_38544 = cljs.core.first.call(null,seq__38524_38538__$1);
markdown.links.parse_footnote_link.call(null,line_38544,footnotes);

var G__38545 = cljs.core.next.call(null,seq__38524_38538__$1);
var G__38546 = null;
var G__38547 = (0);
var G__38548 = (0);
seq__38524_38528 = G__38545;
chunk__38525_38529 = G__38546;
count__38526_38530 = G__38547;
i__38527_38531 = G__38548;
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
var vec__38551 = cljs.core.split_with.call(null,(function (p1__38549_SHARP_){
return cljs.core.not_empty.call(null,p1__38549_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.call(null,vec__38551,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__38551,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers.call(null,metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR_38559 = markdown.common._STAR_substring_STAR_;
var formatter38560 = markdown.transformers.formatter;
markdown.common._STAR_substring_STAR_ = ((function (_STAR_substring_STAR_38559,formatter38560){
return (function (s,n){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.drop.call(null,n,s));
});})(_STAR_substring_STAR_38559,formatter38560))
;

markdown.transformers.formatter = markdown.core.format;

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str(text),cljs.core.str("\n")].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references.call(null,lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes.call(null,lines):null);
var vec__38561 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata.call(null,lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.call(null,vec__38561,(0),null);
var lines__$1 = cljs.core.nth.call(null,vec__38561,(1),null);
var transformer = markdown.core.init_transformer.call(null,params__$1);
var G__38563_38566 = lines__$1;
var vec__38564_38567 = G__38563_38566;
var line_38568 = cljs.core.nth.call(null,vec__38564_38567,(0),null);
var more_38569 = cljs.core.nthnext.call(null,vec__38564_38567,(1));
var state_38570 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1);
var G__38563_38571__$1 = G__38563_38566;
var state_38572__$1 = state_38570;
while(true){
var vec__38565_38573 = G__38563_38571__$1;
var line_38574__$1 = cljs.core.nth.call(null,vec__38565_38573,(0),null);
var more_38575__$1 = cljs.core.nthnext.call(null,vec__38565_38573,(1));
var state_38576__$2 = state_38572__$1;
var state_38577__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_38576__$2))?transformer.call(null,html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_38576__$2),cljs.core.first.call(null,more_38575__$1),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,state_38576__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),new cljs.core.Keyword(null,"lists","lists",-884730684)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_38576__$2);
if(cljs.core.truth_(cljs.core.not_empty.call(null,more_38575__$1))){
var G__38578 = more_38575__$1;
var G__38579 = cljs.core.assoc.call(null,transformer.call(null,html,line_38574__$1,cljs.core.first.call(null,more_38575__$1),state_38577__$3),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_.call(null,line_38574__$1));
G__38563_38571__$1 = G__38578;
state_38572__$1 = G__38579;
continue;
} else {
transformer.call(null,html.append(markdown.transformers.footer.call(null,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_38577__$3))),line_38574__$1,"",cljs.core.assoc.call(null,state_38577__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {markdown.transformers.formatter = formatter38560;

markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR_38559;
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__35637__auto__ = [];
var len__35630__auto___38582 = arguments.length;
var i__35631__auto___38583 = (0);
while(true){
if((i__35631__auto___38583 < len__35630__auto___38582)){
args__35637__auto__.push((arguments[i__35631__auto___38583]));

var G__38584 = (i__35631__auto___38583 + (1));
i__35631__auto___38583 = G__38584;
continue;
} else {
}
break;
}

var argseq__35638__auto__ = ((((1) < args__35637__auto__.length))?(new cljs.core.IndexedSeq(args__35637__auto__.slice((1)),(0))):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35638__auto__);
});

markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_.call(null,text,params));
});

markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq38580){
var G__38581 = cljs.core.first.call(null,seq38580);
var seq38580__$1 = cljs.core.next.call(null,seq38580);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic(G__38581,seq38580__$1);
});
markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__35637__auto__ = [];
var len__35630__auto___38587 = arguments.length;
var i__35631__auto___38588 = (0);
while(true){
if((i__35631__auto___38588 < len__35630__auto___38587)){
args__35637__auto__.push((arguments[i__35631__auto___38588]));

var G__38589 = (i__35631__auto___38588 + (1));
i__35631__auto___38588 = G__38589;
continue;
} else {
}
break;
}

var argseq__35638__auto__ = ((((1) < args__35637__auto__.length))?(new cljs.core.IndexedSeq(args__35637__auto__.slice((1)),(0))):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35638__auto__);
});

markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_.call(null,text,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
});

markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1);

markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq38585){
var G__38586 = cljs.core.first.call(null,seq38585);
var seq38585__$1 = cljs.core.next.call(null,seq38585);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(G__38586,seq38585__$1);
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__35637__auto__ = [];
var len__35630__auto___38591 = arguments.length;
var i__35631__auto___38592 = (0);
while(true){
if((i__35631__auto___38592 < len__35630__auto___38591)){
args__35637__auto__.push((arguments[i__35631__auto___38592]));

var G__38593 = (i__35631__auto___38592 + (1));
i__35631__auto___38592 = G__38593;
continue;
} else {
}
break;
}

var argseq__35638__auto__ = ((((0) < args__35637__auto__.length))?(new cljs.core.IndexedSeq(args__35637__auto__.slice((0)),(0))):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__35638__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html,params);
});

markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq38590){
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38590));
});
/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__35637__auto__ = [];
var len__35630__auto___38595 = arguments.length;
var i__35631__auto___38596 = (0);
while(true){
if((i__35631__auto___38596 < len__35630__auto___38595)){
args__35637__auto__.push((arguments[i__35631__auto___38596]));

var G__38597 = (i__35631__auto___38596 + (1));
i__35631__auto___38596 = G__38597;
continue;
} else {
}
break;
}

var argseq__35638__auto__ = ((((0) < args__35637__auto__.length))?(new cljs.core.IndexedSeq(args__35637__auto__.slice((0)),(0))):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__35638__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.call(null,markdown.core.md__GT_html_with_meta,params);
});

markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0);

markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq38594){
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38594));
});

//# sourceMappingURL=core.js.map