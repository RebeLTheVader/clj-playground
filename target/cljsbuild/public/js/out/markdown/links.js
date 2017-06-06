// Compiled by ClojureScript 1.7.228 {}
goog.provide('markdown.links');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('markdown.common');
markdown.links.href = (function markdown$links$href(title,link,state){
return markdown.common.freeze_string.call(null,cljs.core.seq.call(null,"<a href='"),link,cljs.core.seq.call(null,"'>"),title,cljs.core.seq.call(null,"</a>"),state);
});
markdown.links.img = (function markdown$links$img(var_args){
var args__35637__auto__ = [];
var len__35630__auto___38306 = arguments.length;
var i__35631__auto___38307 = (0);
while(true){
if((i__35631__auto___38307 < len__35630__auto___38306)){
args__35637__auto__.push((arguments[i__35631__auto___38307]));

var G__38308 = (i__35631__auto___38307 + (1));
i__35631__auto___38307 = G__38308;
continue;
} else {
}
break;
}

var argseq__35638__auto__ = ((((3) < args__35637__auto__.length))?(new cljs.core.IndexedSeq(args__35637__auto__.slice((3)),(0))):null);
return markdown.links.img.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35638__auto__);
});

markdown.links.img.cljs$core$IFn$_invoke$arity$variadic = (function (alt,url,state,p__38304){
var vec__38305 = p__38304;
var title = cljs.core.nth.call(null,vec__38305,(0),null);
return markdown.common.freeze_string.call(null,cljs.core.seq.call(null,"<img src=\""),url,cljs.core.seq.call(null,"\" alt=\""),alt,(cljs.core.truth_(cljs.core.not_empty.call(null,title))?cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.str,"\" title=",clojure.string.join.call(null,title)," />")):cljs.core.seq.call(null,"\" />")),state);
});

markdown.links.img.cljs$lang$maxFixedArity = (3);

markdown.links.img.cljs$lang$applyTo = (function (seq38300){
var G__38301 = cljs.core.first.call(null,seq38300);
var seq38300__$1 = cljs.core.next.call(null,seq38300);
var G__38302 = cljs.core.first.call(null,seq38300__$1);
var seq38300__$2 = cljs.core.next.call(null,seq38300__$1);
var G__38303 = cljs.core.first.call(null,seq38300__$2);
var seq38300__$3 = cljs.core.next.call(null,seq38300__$2);
return markdown.links.img.cljs$core$IFn$_invoke$arity$variadic(G__38301,G__38302,G__38303,seq38300__$3);
});
markdown.links.handle_img_link = (function markdown$links$handle_img_link(xs,state){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","!","["], null),cljs.core.take.call(null,(3),xs))){
var xs__$1 = cljs.core.drop.call(null,(3),xs);
var vec__38313 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"]"),xs__$1);
var alt = cljs.core.nth.call(null,vec__38313,(0),null);
var xy = cljs.core.nth.call(null,vec__38313,(1),null);
var vec__38314 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,")"),cljs.core.drop.call(null,(2),xy));
var url_title = cljs.core.nth.call(null,vec__38314,(0),null);
var zy = cljs.core.nth.call(null,vec__38314,(1),null);
var vec__38315 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),url_title);
var url = cljs.core.nth.call(null,vec__38315,(0),null);
var title = cljs.core.nth.call(null,vec__38315,(1),null);
var vec__38316 = markdown.links.img.call(null,alt,url,state,cljs.core.not_empty.call(null,title));
var new_text = cljs.core.nth.call(null,vec__38316,(0),null);
var new_state = cljs.core.nth.call(null,vec__38316,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,"[",new_text,cljs.core.rest.call(null,zy)),new_state], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xs,state], null);
}
});
markdown.links.process_link_title = (function markdown$links$process_link_title(title,state){
return cljs.core.first.call(null,cljs.core.reduce.call(null,(function (p1__38318_SHARP_,p2__38317_SHARP_){
return cljs.core.apply.call(null,p2__38317_SHARP_,p1__38318_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,state], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.common.italics,markdown.common.em,markdown.common.strong,markdown.common.bold,markdown.common.strikethrough], null)));
});
markdown.links.make_link = (function markdown$links$make_link(img_QMARK_){
return (function markdown$links$make_link_$_link(text,p__38340){
var map__38351 = p__38340;
var map__38351__$1 = ((((!((map__38351 == null)))?((((map__38351.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38351.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38351):map__38351);
var state = map__38351__$1;
var code = cljs.core.get.call(null,map__38351__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__38351__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
if(cljs.core.truth_((function (){var or__34572__auto__ = code;
if(cljs.core.truth_(or__34572__auto__)){
return or__34572__auto__;
} else {
return codeblock;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var out = cljs.core.PersistentVector.EMPTY;
var tokens = cljs.core.seq.call(null,text);
var loop_state = state;
while(true){
if(cljs.core.empty_QMARK_.call(null,tokens)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.string.join.call(null,out),loop_state], null);
} else {
var vec__38353 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"["),tokens);
var head = cljs.core.nth.call(null,vec__38353,(0),null);
var xs = cljs.core.nth.call(null,vec__38353,(1),null);
var vec__38354 = markdown.links.handle_img_link.call(null,xs,loop_state);
var xs__$1 = cljs.core.nth.call(null,vec__38354,(0),null);
var loop_state__$1 = cljs.core.nth.call(null,vec__38354,(1),null);
var vec__38355 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"]"),xs__$1);
var title = cljs.core.nth.call(null,vec__38355,(0),null);
var ys = cljs.core.nth.call(null,vec__38355,(1),null);
var vec__38356 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,"("),ys);
var dud = cljs.core.nth.call(null,vec__38356,(0),null);
var zs = cljs.core.nth.call(null,vec__38356,(1),null);
var vec__38357 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,")"),zs);
var link__$1 = cljs.core.nth.call(null,vec__38357,(0),null);
var tail = cljs.core.nth.call(null,vec__38357,(1),null);
if(((cljs.core.count.call(null,link__$1) < (2))) || ((cljs.core.count.call(null,tail) < (1))) || ((cljs.core.count.call(null,dud) > (1)))){
var G__38361 = cljs.core.concat.call(null,out,head,markdown.links.process_link_title.call(null,title,state),dud,link__$1);
var G__38362 = tail;
var G__38363 = loop_state__$1;
out = G__38361;
tokens = G__38362;
loop_state = G__38363;
continue;
} else {
if((cljs.core.not.call(null,img_QMARK_)) && (cljs.core.not_EQ_.call(null,cljs.core.last.call(null,head),"!"))){
var vec__38358 = markdown.links.href.call(null,cljs.core.rest.call(null,markdown.links.process_link_title.call(null,title,state)),cljs.core.rest.call(null,link__$1),loop_state__$1);
var link_text = cljs.core.nth.call(null,vec__38358,(0),null);
var new_loop_state = cljs.core.nth.call(null,vec__38358,(1),null);
var G__38364 = cljs.core.concat.call(null,out,head,link_text);
var G__38365 = cljs.core.rest.call(null,tail);
var G__38366 = new_loop_state;
out = G__38364;
tokens = G__38365;
loop_state = G__38366;
continue;
} else {
if(cljs.core.truth_((function (){var and__34560__auto__ = img_QMARK_;
if(cljs.core.truth_(and__34560__auto__)){
return cljs.core._EQ_.call(null,cljs.core.last.call(null,head),"!");
} else {
return and__34560__auto__;
}
})())){
var alt = cljs.core.rest.call(null,title);
var vec__38359 = cljs.core.split_with.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_," "),cljs.core.rest.call(null,link__$1));
var url = cljs.core.nth.call(null,vec__38359,(0),null);
var title__$1 = cljs.core.nth.call(null,vec__38359,(1),null);
var title__$2 = markdown.links.process_link_title.call(null,clojure.string.join.call(null,cljs.core.rest.call(null,title__$1)),loop_state__$1);
var vec__38360 = markdown.links.img.call(null,alt,url,loop_state__$1,title__$2);
var img_text = cljs.core.nth.call(null,vec__38360,(0),null);
var new_loop_state = cljs.core.nth.call(null,vec__38360,(1),null);
var G__38367 = cljs.core.concat.call(null,cljs.core.butlast.call(null,head),img_text);
var G__38368 = cljs.core.rest.call(null,tail);
var G__38369 = new_loop_state;
out = G__38367;
tokens = G__38368;
loop_state = G__38369;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);

}
}
}
}
break;
}
}
});
});
markdown.links.link = markdown.links.make_link.call(null,false);
markdown.links.image = markdown.links.make_link.call(null,true);
markdown.links.reference = (function markdown$links$reference(text){
return cljs.core.re_find.call(null,/^\[[a-zA-Z0-9 ]+\]:/,text);
});
markdown.links.parse_reference = (function markdown$links$parse_reference(reference,start){
return clojure.string.split.call(null,clojure.string.trim.call(null,cljs.core.subs.call(null,reference,start)),/\s+/,(2));
});
markdown.links.parse_reference_link = (function markdown$links$parse_reference_link(line,references){
var trimmed = clojure.string.trim.call(null,line);
var temp__4657__auto__ = markdown.links.reference.call(null,trimmed);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,references,cljs.core.assoc,cljs.core.subs.call(null,link,(0),(cljs.core.count.call(null,link) - (1))),markdown.links.parse_reference.call(null,trimmed,(cljs.core.count.call(null,link) + (1))));
} else {
return null;
}
});
markdown.links.replace_reference_link = (function markdown$links$replace_reference_link(references,reference){
var vec__38372 = clojure.string.split.call(null,reference,/\]\s*/,(2));
var title = cljs.core.nth.call(null,vec__38372,(0),null);
var id = cljs.core.nth.call(null,vec__38372,(1),null);
var vec__38373 = cljs.core.get.call(null,references,id);
var link = cljs.core.nth.call(null,vec__38373,(0),null);
var alt = cljs.core.nth.call(null,vec__38373,(1),null);
return [cljs.core.str("<a href='"),cljs.core.str(link),cljs.core.str("'"),cljs.core.str((cljs.core.truth_(alt)?[cljs.core.str(" title='"),cljs.core.str(cljs.core.subs.call(null,alt,(1),(cljs.core.count.call(null,alt) - (1)))),cljs.core.str("'")].join(''):null)),cljs.core.str(">"),cljs.core.str(cljs.core.subs.call(null,title,(1))),cljs.core.str("</a>")].join('');
});
markdown.links.reference_link = (function markdown$links$reference_link(text,p__38374){
var map__38377 = p__38374;
var map__38377__$1 = ((((!((map__38377 == null)))?((((map__38377.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38377.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38377):map__38377);
var state = map__38377__$1;
var code = cljs.core.get.call(null,map__38377__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__38377__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var references = cljs.core.get.call(null,map__38377__$1,new cljs.core.Keyword(null,"references","references",882562509));
if(cljs.core.truth_((function (){var or__34572__auto__ = (references == null);
if(or__34572__auto__){
return or__34572__auto__;
} else {
var or__34572__auto____$1 = code;
if(cljs.core.truth_(or__34572__auto____$1)){
return or__34572__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.reference.call(null,clojure.string.trim.call(null,text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
var replaced = clojure.string.replace.call(null,text,/\[[^\]]+\]\s*\[[a-zA-Z0-9 ]+\]/,cljs.core.partial.call(null,markdown.links.replace_reference_link,references));
if(cljs.core._EQ_.call(null,replaced,text)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
return markdown.common.freeze_string.call(null,replaced,state);
}

}
}
});
markdown.links.footnote = (function markdown$links$footnote(text){
return cljs.core.re_find.call(null,/^\[\^[a-zA-Z0-9_-]+\]:/,text);
});
markdown.links.parse_footnote_link = (function markdown$links$parse_footnote_link(line,footnotes){
var trimmed = clojure.string.trim.call(null,line);
var temp__4657__auto__ = markdown.links.footnote.call(null,trimmed);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,footnotes,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.subs.call(null,link,(0),(cljs.core.count.call(null,link) - (1)))], null),markdown.links.parse_reference.call(null,trimmed,(cljs.core.count.call(null,link) + (1))));
} else {
return null;
}
});
markdown.links.replace_footnote_link = (function markdown$links$replace_footnote_link(footnotes,footnote){
var next_fn_id = new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636).cljs$core$IFn$_invoke$arity$1(footnotes);
var link = [cljs.core.str("#fn-"),cljs.core.str(next_fn_id)].join('');
return [cljs.core.str("<a href='"),cljs.core.str(link),cljs.core.str("' id='fnref"),cljs.core.str(next_fn_id),cljs.core.str("'><sup>"),cljs.core.str(next_fn_id),cljs.core.str("</sup></a>")].join('');
});
markdown.links.replace_all_footnote_links = (function markdown$links$replace_all_footnote_links(text,p__38379){
while(true){
var map__38382 = p__38379;
var map__38382__$1 = ((((!((map__38382 == null)))?((((map__38382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38382):map__38382);
var state = map__38382__$1;
var footnotes = cljs.core.get.call(null,map__38382__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
var matcher = /\[\^[a-zA-Z0-9_-]+\]/;
var match = cljs.core.re_find.call(null,matcher,text);
if((match == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
var next_text = clojure.string.replace_first.call(null,text,matcher,cljs.core.partial.call(null,markdown.links.replace_footnote_link,footnotes));
var next_state = cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636)], null),cljs.core.inc),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636)], null))], null),cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),match], null)));
var G__38384 = next_text;
var G__38385 = next_state;
text = G__38384;
p__38379 = G__38385;
continue;
}
break;
}
});
markdown.links.footnote_link = (function markdown$links$footnote_link(text,p__38386){
var map__38390 = p__38386;
var map__38390__$1 = ((((!((map__38390 == null)))?((((map__38390.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38390.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38390):map__38390);
var state = map__38390__$1;
var code = cljs.core.get.call(null,map__38390__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var codeblock = cljs.core.get.call(null,map__38390__$1,new cljs.core.Keyword(null,"codeblock","codeblock",-851153855));
var footnotes = cljs.core.get.call(null,map__38390__$1,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205));
if(cljs.core.truth_((function (){var or__34572__auto__ = (new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972).cljs$core$IFn$_invoke$arity$1(footnotes) == null);
if(or__34572__auto__){
return or__34572__auto__;
} else {
var or__34572__auto____$1 = code;
if(cljs.core.truth_(or__34572__auto____$1)){
return or__34572__auto____$1;
} else {
return codeblock;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,state], null);
} else {
if(cljs.core.truth_(markdown.links.footnote.call(null,clojure.string.trim.call(null,text)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",state], null);
} else {
var vec__38392 = markdown.links.replace_all_footnote_links.call(null,text,state);
var text__$1 = cljs.core.nth.call(null,vec__38392,(0),null);
var state__$1 = cljs.core.nth.call(null,vec__38392,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text__$1,state__$1], null);

}
}
});

//# sourceMappingURL=links.js.map