// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__35637__auto__ = [];
var len__35630__auto___43705 = arguments.length;
var i__35631__auto___43706 = (0);
while(true){
if((i__35631__auto___43706 < len__35630__auto___43705)){
args__35637__auto__.push((arguments[i__35631__auto___43706]));

var G__43707 = (i__35631__auto___43706 + (1));
i__35631__auto___43706 = G__43707;
continue;
} else {
}
break;
}

var argseq__35638__auto__ = ((((2) < args__35637__auto__.length))?(new cljs.core.IndexedSeq(args__35637__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__35638__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__43697_43708 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__43698_43709 = null;
var count__43699_43710 = (0);
var i__43700_43711 = (0);
while(true){
if((i__43700_43711 < count__43699_43710)){
var k_43712 = cljs.core._nth.call(null,chunk__43698_43709,i__43700_43711);
e.setAttribute(cljs.core.name.call(null,k_43712),cljs.core.get.call(null,attrs,k_43712));

var G__43713 = seq__43697_43708;
var G__43714 = chunk__43698_43709;
var G__43715 = count__43699_43710;
var G__43716 = (i__43700_43711 + (1));
seq__43697_43708 = G__43713;
chunk__43698_43709 = G__43714;
count__43699_43710 = G__43715;
i__43700_43711 = G__43716;
continue;
} else {
var temp__4657__auto___43717 = cljs.core.seq.call(null,seq__43697_43708);
if(temp__4657__auto___43717){
var seq__43697_43718__$1 = temp__4657__auto___43717;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43697_43718__$1)){
var c__35375__auto___43719 = cljs.core.chunk_first.call(null,seq__43697_43718__$1);
var G__43720 = cljs.core.chunk_rest.call(null,seq__43697_43718__$1);
var G__43721 = c__35375__auto___43719;
var G__43722 = cljs.core.count.call(null,c__35375__auto___43719);
var G__43723 = (0);
seq__43697_43708 = G__43720;
chunk__43698_43709 = G__43721;
count__43699_43710 = G__43722;
i__43700_43711 = G__43723;
continue;
} else {
var k_43724 = cljs.core.first.call(null,seq__43697_43718__$1);
e.setAttribute(cljs.core.name.call(null,k_43724),cljs.core.get.call(null,attrs,k_43724));

var G__43725 = cljs.core.next.call(null,seq__43697_43718__$1);
var G__43726 = null;
var G__43727 = (0);
var G__43728 = (0);
seq__43697_43708 = G__43725;
chunk__43698_43709 = G__43726;
count__43699_43710 = G__43727;
i__43700_43711 = G__43728;
continue;
}
} else {
}
}
break;
}

var seq__43701_43729 = cljs.core.seq.call(null,children);
var chunk__43702_43730 = null;
var count__43703_43731 = (0);
var i__43704_43732 = (0);
while(true){
if((i__43704_43732 < count__43703_43731)){
var ch_43733 = cljs.core._nth.call(null,chunk__43702_43730,i__43704_43732);
e.appendChild(ch_43733);

var G__43734 = seq__43701_43729;
var G__43735 = chunk__43702_43730;
var G__43736 = count__43703_43731;
var G__43737 = (i__43704_43732 + (1));
seq__43701_43729 = G__43734;
chunk__43702_43730 = G__43735;
count__43703_43731 = G__43736;
i__43704_43732 = G__43737;
continue;
} else {
var temp__4657__auto___43738 = cljs.core.seq.call(null,seq__43701_43729);
if(temp__4657__auto___43738){
var seq__43701_43739__$1 = temp__4657__auto___43738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__43701_43739__$1)){
var c__35375__auto___43740 = cljs.core.chunk_first.call(null,seq__43701_43739__$1);
var G__43741 = cljs.core.chunk_rest.call(null,seq__43701_43739__$1);
var G__43742 = c__35375__auto___43740;
var G__43743 = cljs.core.count.call(null,c__35375__auto___43740);
var G__43744 = (0);
seq__43701_43729 = G__43741;
chunk__43702_43730 = G__43742;
count__43703_43731 = G__43743;
i__43704_43732 = G__43744;
continue;
} else {
var ch_43745 = cljs.core.first.call(null,seq__43701_43739__$1);
e.appendChild(ch_43745);

var G__43746 = cljs.core.next.call(null,seq__43701_43739__$1);
var G__43747 = null;
var G__43748 = (0);
var G__43749 = (0);
seq__43701_43729 = G__43746;
chunk__43702_43730 = G__43747;
count__43703_43731 = G__43748;
i__43704_43732 = G__43749;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq43694){
var G__43695 = cljs.core.first.call(null,seq43694);
var seq43694__$1 = cljs.core.next.call(null,seq43694);
var G__43696 = cljs.core.first.call(null,seq43694__$1);
var seq43694__$2 = cljs.core.next.call(null,seq43694__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__43695,G__43696,seq43694__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__35485__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__35486__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__35487__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__35488__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__35489__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__35485__auto__,prefer_table__35486__auto__,method_cache__35487__auto__,cached_hierarchy__35488__auto__,hierarchy__35489__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__35485__auto__,prefer_table__35486__auto__,method_cache__35487__auto__,cached_hierarchy__35488__auto__,hierarchy__35489__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__35489__auto__,method_table__35485__auto__,prefer_table__35486__auto__,method_cache__35487__auto__,cached_hierarchy__35488__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_43750 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_43750.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_43750.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_43750.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_43750);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__43751,st_map){
var map__43756 = p__43751;
var map__43756__$1 = ((((!((map__43756 == null)))?((((map__43756.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43756.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43756):map__43756);
var container_el = cljs.core.get.call(null,map__43756__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__43756,map__43756__$1,container_el){
return (function (p__43758){
var vec__43759 = p__43758;
var k = cljs.core.nth.call(null,vec__43759,(0),null);
var v = cljs.core.nth.call(null,vec__43759,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__43756,map__43756__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__43760,dom_str){
var map__43763 = p__43760;
var map__43763__$1 = ((((!((map__43763 == null)))?((((map__43763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43763):map__43763);
var c = map__43763__$1;
var content_area_el = cljs.core.get.call(null,map__43763__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__43765){
var map__43768 = p__43765;
var map__43768__$1 = ((((!((map__43768 == null)))?((((map__43768.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43768.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43768):map__43768);
var content_area_el = cljs.core.get.call(null,map__43768__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__37149__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto__){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto__){
return (function (state_43811){
var state_val_43812 = (state_43811[(1)]);
if((state_val_43812 === (1))){
var inst_43796 = (state_43811[(7)]);
var inst_43796__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_43797 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_43798 = ["10px","10px","100%","68px","1.0"];
var inst_43799 = cljs.core.PersistentHashMap.fromArrays(inst_43797,inst_43798);
var inst_43800 = cljs.core.merge.call(null,inst_43799,style);
var inst_43801 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_43796__$1,inst_43800);
var inst_43802 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_43796__$1,msg);
var inst_43803 = cljs.core.async.timeout.call(null,(300));
var state_43811__$1 = (function (){var statearr_43813 = state_43811;
(statearr_43813[(7)] = inst_43796__$1);

(statearr_43813[(8)] = inst_43802);

(statearr_43813[(9)] = inst_43801);

return statearr_43813;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43811__$1,(2),inst_43803);
} else {
if((state_val_43812 === (2))){
var inst_43796 = (state_43811[(7)]);
var inst_43805 = (state_43811[(2)]);
var inst_43806 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_43807 = ["auto"];
var inst_43808 = cljs.core.PersistentHashMap.fromArrays(inst_43806,inst_43807);
var inst_43809 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_43796,inst_43808);
var state_43811__$1 = (function (){var statearr_43814 = state_43811;
(statearr_43814[(10)] = inst_43805);

return statearr_43814;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43811__$1,inst_43809);
} else {
return null;
}
}
});})(c__37149__auto__))
;
return ((function (switch__37128__auto__,c__37149__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__37129__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__37129__auto____0 = (function (){
var statearr_43818 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43818[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__37129__auto__);

(statearr_43818[(1)] = (1));

return statearr_43818;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__37129__auto____1 = (function (state_43811){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_43811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e43819){if((e43819 instanceof Object)){
var ex__37132__auto__ = e43819;
var statearr_43820_43822 = state_43811;
(statearr_43820_43822[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43823 = state_43811;
state_43811 = G__43823;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__37129__auto__ = function(state_43811){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__37129__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__37129__auto____1.call(this,state_43811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__37129__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__37129__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto__))
})();
var state__37151__auto__ = (function (){var statearr_43821 = f__37150__auto__.call(null);
(statearr_43821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto__);

return statearr_43821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto__))
);

return c__37149__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4655__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var vec__43825 = temp__4655__auto__;
var f = cljs.core.nth.call(null,vec__43825,(0),null);
var ln = cljs.core.nth.call(null,vec__43825,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__43828 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__43828,(0),null);
var file_line = cljs.core.nth.call(null,vec__43828,(1),null);
var file_column = cljs.core.nth.call(null,vec__43828,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__43828,file_name,file_line,file_column){
return (function (p1__43826_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__43826_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__43828,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__34572__auto__ = file_line;
if(cljs.core.truth_(or__34572__auto__)){
return or__34572__auto__;
} else {
var and__34560__auto__ = cause;
if(cljs.core.truth_(and__34560__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__34560__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__43831 = figwheel.client.heads_up.ensure_container.call(null);
var map__43831__$1 = ((((!((map__43831 == null)))?((((map__43831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43831):map__43831);
var content_area_el = cljs.core.get.call(null,map__43831__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__37149__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto__){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto__){
return (function (state_43879){
var state_val_43880 = (state_43879[(1)]);
if((state_val_43880 === (1))){
var inst_43862 = (state_43879[(7)]);
var inst_43862__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_43863 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_43864 = ["0.0"];
var inst_43865 = cljs.core.PersistentHashMap.fromArrays(inst_43863,inst_43864);
var inst_43866 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_43862__$1,inst_43865);
var inst_43867 = cljs.core.async.timeout.call(null,(300));
var state_43879__$1 = (function (){var statearr_43881 = state_43879;
(statearr_43881[(7)] = inst_43862__$1);

(statearr_43881[(8)] = inst_43866);

return statearr_43881;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43879__$1,(2),inst_43867);
} else {
if((state_val_43880 === (2))){
var inst_43862 = (state_43879[(7)]);
var inst_43869 = (state_43879[(2)]);
var inst_43870 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_43871 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_43872 = cljs.core.PersistentHashMap.fromArrays(inst_43870,inst_43871);
var inst_43873 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_43862,inst_43872);
var inst_43874 = cljs.core.async.timeout.call(null,(200));
var state_43879__$1 = (function (){var statearr_43882 = state_43879;
(statearr_43882[(9)] = inst_43873);

(statearr_43882[(10)] = inst_43869);

return statearr_43882;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43879__$1,(3),inst_43874);
} else {
if((state_val_43880 === (3))){
var inst_43862 = (state_43879[(7)]);
var inst_43876 = (state_43879[(2)]);
var inst_43877 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_43862,"");
var state_43879__$1 = (function (){var statearr_43883 = state_43879;
(statearr_43883[(11)] = inst_43876);

return statearr_43883;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43879__$1,inst_43877);
} else {
return null;
}
}
}
});})(c__37149__auto__))
;
return ((function (switch__37128__auto__,c__37149__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__37129__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__37129__auto____0 = (function (){
var statearr_43887 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43887[(0)] = figwheel$client$heads_up$clear_$_state_machine__37129__auto__);

(statearr_43887[(1)] = (1));

return statearr_43887;
});
var figwheel$client$heads_up$clear_$_state_machine__37129__auto____1 = (function (state_43879){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_43879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e43888){if((e43888 instanceof Object)){
var ex__37132__auto__ = e43888;
var statearr_43889_43891 = state_43879;
(statearr_43889_43891[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43892 = state_43879;
state_43879 = G__43892;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__37129__auto__ = function(state_43879){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__37129__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__37129__auto____1.call(this,state_43879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__37129__auto____0;
figwheel$client$heads_up$clear_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__37129__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto__))
})();
var state__37151__auto__ = (function (){var statearr_43890 = f__37150__auto__.call(null);
(statearr_43890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto__);

return statearr_43890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto__))
);

return c__37149__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__37149__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto__){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto__){
return (function (state_43924){
var state_val_43925 = (state_43924[(1)]);
if((state_val_43925 === (1))){
var inst_43914 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_43924__$1 = state_43924;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43924__$1,(2),inst_43914);
} else {
if((state_val_43925 === (2))){
var inst_43916 = (state_43924[(2)]);
var inst_43917 = cljs.core.async.timeout.call(null,(400));
var state_43924__$1 = (function (){var statearr_43926 = state_43924;
(statearr_43926[(7)] = inst_43916);

return statearr_43926;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43924__$1,(3),inst_43917);
} else {
if((state_val_43925 === (3))){
var inst_43919 = (state_43924[(2)]);
var inst_43920 = figwheel.client.heads_up.clear.call(null);
var state_43924__$1 = (function (){var statearr_43927 = state_43924;
(statearr_43927[(8)] = inst_43919);

return statearr_43927;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43924__$1,(4),inst_43920);
} else {
if((state_val_43925 === (4))){
var inst_43922 = (state_43924[(2)]);
var state_43924__$1 = state_43924;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43924__$1,inst_43922);
} else {
return null;
}
}
}
}
});})(c__37149__auto__))
;
return ((function (switch__37128__auto__,c__37149__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__37129__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__37129__auto____0 = (function (){
var statearr_43931 = [null,null,null,null,null,null,null,null,null];
(statearr_43931[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__37129__auto__);

(statearr_43931[(1)] = (1));

return statearr_43931;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__37129__auto____1 = (function (state_43924){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_43924);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e43932){if((e43932 instanceof Object)){
var ex__37132__auto__ = e43932;
var statearr_43933_43935 = state_43924;
(statearr_43933_43935[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43924);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43936 = state_43924;
state_43924 = G__43936;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__37129__auto__ = function(state_43924){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__37129__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__37129__auto____1.call(this,state_43924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__37129__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__37129__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto__))
})();
var state__37151__auto__ = (function (){var statearr_43934 = f__37150__auto__.call(null);
(statearr_43934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto__);

return statearr_43934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto__))
);

return c__37149__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map