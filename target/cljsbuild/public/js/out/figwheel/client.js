// Compiled by ClojureScript 1.7.228 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__45690 = cljs.core._EQ_;
var expr__45691 = (function (){var or__34556__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e45694){if((e45694 instanceof Error)){
var e = e45694;
return false;
} else {
throw e45694;

}
}})();
if(cljs.core.truth_(or__34556__auto__)){
return or__34556__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__45690.call(null,"true",expr__45691))){
return true;
} else {
if(cljs.core.truth_(pred__45690.call(null,"false",expr__45691))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__45691)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e45696){if((e45696 instanceof Error)){
var e = e45696;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e45696;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__35621__auto__ = [];
var len__35614__auto___45698 = arguments.length;
var i__35615__auto___45699 = (0);
while(true){
if((i__35615__auto___45699 < len__35614__auto___45698)){
args__35621__auto__.push((arguments[i__35615__auto___45699]));

var G__45700 = (i__35615__auto___45699 + (1));
i__35615__auto___45699 = G__45700;
continue;
} else {
}
break;
}

var argseq__35622__auto__ = ((((0) < args__35621__auto__.length))?(new cljs.core.IndexedSeq(args__35621__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__35622__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq45697){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45697));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__45701){
var map__45704 = p__45701;
var map__45704__$1 = ((((!((map__45704 == null)))?((((map__45704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45704):map__45704);
var message = cljs.core.get.call(null,map__45704__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__45704__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__34556__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__34556__auto__)){
return or__34556__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__34544__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__34544__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__34544__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__38833__auto___45866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto___45866,ch){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto___45866,ch){
return (function (state_45835){
var state_val_45836 = (state_45835[(1)]);
if((state_val_45836 === (7))){
var inst_45831 = (state_45835[(2)]);
var state_45835__$1 = state_45835;
var statearr_45837_45867 = state_45835__$1;
(statearr_45837_45867[(2)] = inst_45831);

(statearr_45837_45867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45836 === (1))){
var state_45835__$1 = state_45835;
var statearr_45838_45868 = state_45835__$1;
(statearr_45838_45868[(2)] = null);

(statearr_45838_45868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45836 === (4))){
var inst_45788 = (state_45835[(7)]);
var inst_45788__$1 = (state_45835[(2)]);
var state_45835__$1 = (function (){var statearr_45839 = state_45835;
(statearr_45839[(7)] = inst_45788__$1);

return statearr_45839;
})();
if(cljs.core.truth_(inst_45788__$1)){
var statearr_45840_45869 = state_45835__$1;
(statearr_45840_45869[(1)] = (5));

} else {
var statearr_45841_45870 = state_45835__$1;
(statearr_45841_45870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45836 === (15))){
var inst_45795 = (state_45835[(8)]);
var inst_45810 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45795);
var inst_45811 = cljs.core.first.call(null,inst_45810);
var inst_45812 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_45811);
var inst_45813 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_45812)].join('');
var inst_45814 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_45813);
var state_45835__$1 = state_45835;
var statearr_45842_45871 = state_45835__$1;
(statearr_45842_45871[(2)] = inst_45814);

(statearr_45842_45871[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45836 === (13))){
var inst_45819 = (state_45835[(2)]);
var state_45835__$1 = state_45835;
var statearr_45843_45872 = state_45835__$1;
(statearr_45843_45872[(2)] = inst_45819);

(statearr_45843_45872[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45836 === (6))){
var state_45835__$1 = state_45835;
var statearr_45844_45873 = state_45835__$1;
(statearr_45844_45873[(2)] = null);

(statearr_45844_45873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45836 === (17))){
var inst_45817 = (state_45835[(2)]);
var state_45835__$1 = state_45835;
var statearr_45845_45874 = state_45835__$1;
(statearr_45845_45874[(2)] = inst_45817);

(statearr_45845_45874[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45836 === (3))){
var inst_45833 = (state_45835[(2)]);
var state_45835__$1 = state_45835;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45835__$1,inst_45833);
} else {
if((state_val_45836 === (12))){
var inst_45794 = (state_45835[(9)]);
var inst_45808 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_45794,opts);
var state_45835__$1 = state_45835;
if(cljs.core.truth_(inst_45808)){
var statearr_45846_45875 = state_45835__$1;
(statearr_45846_45875[(1)] = (15));

} else {
var statearr_45847_45876 = state_45835__$1;
(statearr_45847_45876[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45836 === (2))){
var state_45835__$1 = state_45835;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45835__$1,(4),ch);
} else {
if((state_val_45836 === (11))){
var inst_45795 = (state_45835[(8)]);
var inst_45800 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_45801 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_45795);
var inst_45802 = cljs.core.async.timeout.call(null,(1000));
var inst_45803 = [inst_45801,inst_45802];
var inst_45804 = (new cljs.core.PersistentVector(null,2,(5),inst_45800,inst_45803,null));
var state_45835__$1 = state_45835;
return cljs.core.async.ioc_alts_BANG_.call(null,state_45835__$1,(14),inst_45804);
} else {
if((state_val_45836 === (9))){
var inst_45795 = (state_45835[(8)]);
var inst_45821 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_45822 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_45795);
var inst_45823 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_45822);
var inst_45824 = [cljs.core.str("Not loading: "),cljs.core.str(inst_45823)].join('');
var inst_45825 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_45824);
var state_45835__$1 = (function (){var statearr_45848 = state_45835;
(statearr_45848[(10)] = inst_45821);

return statearr_45848;
})();
var statearr_45849_45877 = state_45835__$1;
(statearr_45849_45877[(2)] = inst_45825);

(statearr_45849_45877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45836 === (5))){
var inst_45788 = (state_45835[(7)]);
var inst_45790 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_45791 = (new cljs.core.PersistentArrayMap(null,2,inst_45790,null));
var inst_45792 = (new cljs.core.PersistentHashSet(null,inst_45791,null));
var inst_45793 = figwheel.client.focus_msgs.call(null,inst_45792,inst_45788);
var inst_45794 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_45793);
var inst_45795 = cljs.core.first.call(null,inst_45793);
var inst_45796 = figwheel.client.autoload_QMARK_.call(null);
var state_45835__$1 = (function (){var statearr_45850 = state_45835;
(statearr_45850[(8)] = inst_45795);

(statearr_45850[(9)] = inst_45794);

return statearr_45850;
})();
if(cljs.core.truth_(inst_45796)){
var statearr_45851_45878 = state_45835__$1;
(statearr_45851_45878[(1)] = (8));

} else {
var statearr_45852_45879 = state_45835__$1;
(statearr_45852_45879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45836 === (14))){
var inst_45806 = (state_45835[(2)]);
var state_45835__$1 = state_45835;
var statearr_45853_45880 = state_45835__$1;
(statearr_45853_45880[(2)] = inst_45806);

(statearr_45853_45880[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45836 === (16))){
var state_45835__$1 = state_45835;
var statearr_45854_45881 = state_45835__$1;
(statearr_45854_45881[(2)] = null);

(statearr_45854_45881[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45836 === (10))){
var inst_45827 = (state_45835[(2)]);
var state_45835__$1 = (function (){var statearr_45855 = state_45835;
(statearr_45855[(11)] = inst_45827);

return statearr_45855;
})();
var statearr_45856_45882 = state_45835__$1;
(statearr_45856_45882[(2)] = null);

(statearr_45856_45882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45836 === (8))){
var inst_45794 = (state_45835[(9)]);
var inst_45798 = figwheel.client.reload_file_state_QMARK_.call(null,inst_45794,opts);
var state_45835__$1 = state_45835;
if(cljs.core.truth_(inst_45798)){
var statearr_45857_45883 = state_45835__$1;
(statearr_45857_45883[(1)] = (11));

} else {
var statearr_45858_45884 = state_45835__$1;
(statearr_45858_45884[(1)] = (12));

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
});})(c__38833__auto___45866,ch))
;
return ((function (switch__38812__auto__,c__38833__auto___45866,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__38813__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__38813__auto____0 = (function (){
var statearr_45862 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45862[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__38813__auto__);

(statearr_45862[(1)] = (1));

return statearr_45862;
});
var figwheel$client$file_reloader_plugin_$_state_machine__38813__auto____1 = (function (state_45835){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_45835);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e45863){if((e45863 instanceof Object)){
var ex__38816__auto__ = e45863;
var statearr_45864_45885 = state_45835;
(statearr_45864_45885[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45886 = state_45835;
state_45835 = G__45886;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__38813__auto__ = function(state_45835){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__38813__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__38813__auto____1.call(this,state_45835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__38813__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__38813__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto___45866,ch))
})();
var state__38835__auto__ = (function (){var statearr_45865 = f__38834__auto__.call(null);
(statearr_45865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto___45866);

return statearr_45865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto___45866,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__45887_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__45887_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_45894 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_45894){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_45892 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_45893 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_45893;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_45892;
}}catch (e45891){if((e45891 instanceof Error)){
var e = e45891;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_45894], null));
} else {
var e = e45891;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_45894))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__45895){
var map__45902 = p__45895;
var map__45902__$1 = ((((!((map__45902 == null)))?((((map__45902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45902):map__45902);
var opts = map__45902__$1;
var build_id = cljs.core.get.call(null,map__45902__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__45902,map__45902__$1,opts,build_id){
return (function (p__45904){
var vec__45905 = p__45904;
var map__45906 = cljs.core.nth.call(null,vec__45905,(0),null);
var map__45906__$1 = ((((!((map__45906 == null)))?((((map__45906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45906):map__45906);
var msg = map__45906__$1;
var msg_name = cljs.core.get.call(null,map__45906__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__45905,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__45905,map__45906,map__45906__$1,msg,msg_name,_,map__45902,map__45902__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__45905,map__45906,map__45906__$1,msg,msg_name,_,map__45902,map__45902__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__45902,map__45902__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__45912){
var vec__45913 = p__45912;
var map__45914 = cljs.core.nth.call(null,vec__45913,(0),null);
var map__45914__$1 = ((((!((map__45914 == null)))?((((map__45914.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45914.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45914):map__45914);
var msg = map__45914__$1;
var msg_name = cljs.core.get.call(null,map__45914__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__45913,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__45916){
var map__45926 = p__45916;
var map__45926__$1 = ((((!((map__45926 == null)))?((((map__45926.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45926.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45926):map__45926);
var on_compile_warning = cljs.core.get.call(null,map__45926__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__45926__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__45926,map__45926__$1,on_compile_warning,on_compile_fail){
return (function (p__45928){
var vec__45929 = p__45928;
var map__45930 = cljs.core.nth.call(null,vec__45929,(0),null);
var map__45930__$1 = ((((!((map__45930 == null)))?((((map__45930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45930):map__45930);
var msg = map__45930__$1;
var msg_name = cljs.core.get.call(null,map__45930__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__45929,(1));
var pred__45932 = cljs.core._EQ_;
var expr__45933 = msg_name;
if(cljs.core.truth_(pred__45932.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__45933))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__45932.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__45933))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__45926,map__45926__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__38833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto__,msg_hist,msg_names,msg){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto__,msg_hist,msg_names,msg){
return (function (state_46149){
var state_val_46150 = (state_46149[(1)]);
if((state_val_46150 === (7))){
var inst_46073 = (state_46149[(2)]);
var state_46149__$1 = state_46149;
if(cljs.core.truth_(inst_46073)){
var statearr_46151_46197 = state_46149__$1;
(statearr_46151_46197[(1)] = (8));

} else {
var statearr_46152_46198 = state_46149__$1;
(statearr_46152_46198[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (20))){
var inst_46143 = (state_46149[(2)]);
var state_46149__$1 = state_46149;
var statearr_46153_46199 = state_46149__$1;
(statearr_46153_46199[(2)] = inst_46143);

(statearr_46153_46199[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (27))){
var inst_46139 = (state_46149[(2)]);
var state_46149__$1 = state_46149;
var statearr_46154_46200 = state_46149__$1;
(statearr_46154_46200[(2)] = inst_46139);

(statearr_46154_46200[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (1))){
var inst_46066 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_46149__$1 = state_46149;
if(cljs.core.truth_(inst_46066)){
var statearr_46155_46201 = state_46149__$1;
(statearr_46155_46201[(1)] = (2));

} else {
var statearr_46156_46202 = state_46149__$1;
(statearr_46156_46202[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (24))){
var inst_46141 = (state_46149[(2)]);
var state_46149__$1 = state_46149;
var statearr_46157_46203 = state_46149__$1;
(statearr_46157_46203[(2)] = inst_46141);

(statearr_46157_46203[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (4))){
var inst_46147 = (state_46149[(2)]);
var state_46149__$1 = state_46149;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46149__$1,inst_46147);
} else {
if((state_val_46150 === (15))){
var inst_46145 = (state_46149[(2)]);
var state_46149__$1 = state_46149;
var statearr_46158_46204 = state_46149__$1;
(statearr_46158_46204[(2)] = inst_46145);

(statearr_46158_46204[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (21))){
var inst_46104 = (state_46149[(2)]);
var state_46149__$1 = state_46149;
var statearr_46159_46205 = state_46149__$1;
(statearr_46159_46205[(2)] = inst_46104);

(statearr_46159_46205[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (31))){
var inst_46128 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_46149__$1 = state_46149;
if(cljs.core.truth_(inst_46128)){
var statearr_46160_46206 = state_46149__$1;
(statearr_46160_46206[(1)] = (34));

} else {
var statearr_46161_46207 = state_46149__$1;
(statearr_46161_46207[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (32))){
var inst_46137 = (state_46149[(2)]);
var state_46149__$1 = state_46149;
var statearr_46162_46208 = state_46149__$1;
(statearr_46162_46208[(2)] = inst_46137);

(statearr_46162_46208[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (33))){
var inst_46126 = (state_46149[(2)]);
var state_46149__$1 = state_46149;
var statearr_46163_46209 = state_46149__$1;
(statearr_46163_46209[(2)] = inst_46126);

(statearr_46163_46209[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (13))){
var inst_46087 = figwheel.client.heads_up.clear.call(null);
var state_46149__$1 = state_46149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46149__$1,(16),inst_46087);
} else {
if((state_val_46150 === (22))){
var inst_46108 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46109 = figwheel.client.heads_up.append_message.call(null,inst_46108);
var state_46149__$1 = state_46149;
var statearr_46164_46210 = state_46149__$1;
(statearr_46164_46210[(2)] = inst_46109);

(statearr_46164_46210[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (36))){
var inst_46135 = (state_46149[(2)]);
var state_46149__$1 = state_46149;
var statearr_46165_46211 = state_46149__$1;
(statearr_46165_46211[(2)] = inst_46135);

(statearr_46165_46211[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (29))){
var inst_46119 = (state_46149[(2)]);
var state_46149__$1 = state_46149;
var statearr_46166_46212 = state_46149__$1;
(statearr_46166_46212[(2)] = inst_46119);

(statearr_46166_46212[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (6))){
var inst_46068 = (state_46149[(7)]);
var state_46149__$1 = state_46149;
var statearr_46167_46213 = state_46149__$1;
(statearr_46167_46213[(2)] = inst_46068);

(statearr_46167_46213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (28))){
var inst_46115 = (state_46149[(2)]);
var inst_46116 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46117 = figwheel.client.heads_up.display_warning.call(null,inst_46116);
var state_46149__$1 = (function (){var statearr_46168 = state_46149;
(statearr_46168[(8)] = inst_46115);

return statearr_46168;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46149__$1,(29),inst_46117);
} else {
if((state_val_46150 === (25))){
var inst_46113 = figwheel.client.heads_up.clear.call(null);
var state_46149__$1 = state_46149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46149__$1,(28),inst_46113);
} else {
if((state_val_46150 === (34))){
var inst_46130 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46149__$1 = state_46149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46149__$1,(37),inst_46130);
} else {
if((state_val_46150 === (17))){
var inst_46095 = (state_46149[(2)]);
var state_46149__$1 = state_46149;
var statearr_46169_46214 = state_46149__$1;
(statearr_46169_46214[(2)] = inst_46095);

(statearr_46169_46214[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (3))){
var inst_46085 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_46149__$1 = state_46149;
if(cljs.core.truth_(inst_46085)){
var statearr_46170_46215 = state_46149__$1;
(statearr_46170_46215[(1)] = (13));

} else {
var statearr_46171_46216 = state_46149__$1;
(statearr_46171_46216[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (12))){
var inst_46081 = (state_46149[(2)]);
var state_46149__$1 = state_46149;
var statearr_46172_46217 = state_46149__$1;
(statearr_46172_46217[(2)] = inst_46081);

(statearr_46172_46217[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (2))){
var inst_46068 = (state_46149[(7)]);
var inst_46068__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_46149__$1 = (function (){var statearr_46173 = state_46149;
(statearr_46173[(7)] = inst_46068__$1);

return statearr_46173;
})();
if(cljs.core.truth_(inst_46068__$1)){
var statearr_46174_46218 = state_46149__$1;
(statearr_46174_46218[(1)] = (5));

} else {
var statearr_46175_46219 = state_46149__$1;
(statearr_46175_46219[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (23))){
var inst_46111 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_46149__$1 = state_46149;
if(cljs.core.truth_(inst_46111)){
var statearr_46176_46220 = state_46149__$1;
(statearr_46176_46220[(1)] = (25));

} else {
var statearr_46177_46221 = state_46149__$1;
(statearr_46177_46221[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (35))){
var state_46149__$1 = state_46149;
var statearr_46178_46222 = state_46149__$1;
(statearr_46178_46222[(2)] = null);

(statearr_46178_46222[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (19))){
var inst_46106 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_46149__$1 = state_46149;
if(cljs.core.truth_(inst_46106)){
var statearr_46179_46223 = state_46149__$1;
(statearr_46179_46223[(1)] = (22));

} else {
var statearr_46180_46224 = state_46149__$1;
(statearr_46180_46224[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (11))){
var inst_46077 = (state_46149[(2)]);
var state_46149__$1 = state_46149;
var statearr_46181_46225 = state_46149__$1;
(statearr_46181_46225[(2)] = inst_46077);

(statearr_46181_46225[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (9))){
var inst_46079 = figwheel.client.heads_up.clear.call(null);
var state_46149__$1 = state_46149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46149__$1,(12),inst_46079);
} else {
if((state_val_46150 === (5))){
var inst_46070 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_46149__$1 = state_46149;
var statearr_46182_46226 = state_46149__$1;
(statearr_46182_46226[(2)] = inst_46070);

(statearr_46182_46226[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (14))){
var inst_46097 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_46149__$1 = state_46149;
if(cljs.core.truth_(inst_46097)){
var statearr_46183_46227 = state_46149__$1;
(statearr_46183_46227[(1)] = (18));

} else {
var statearr_46184_46228 = state_46149__$1;
(statearr_46184_46228[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (26))){
var inst_46121 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_46149__$1 = state_46149;
if(cljs.core.truth_(inst_46121)){
var statearr_46185_46229 = state_46149__$1;
(statearr_46185_46229[(1)] = (30));

} else {
var statearr_46186_46230 = state_46149__$1;
(statearr_46186_46230[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (16))){
var inst_46089 = (state_46149[(2)]);
var inst_46090 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46091 = figwheel.client.format_messages.call(null,inst_46090);
var inst_46092 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46093 = figwheel.client.heads_up.display_error.call(null,inst_46091,inst_46092);
var state_46149__$1 = (function (){var statearr_46187 = state_46149;
(statearr_46187[(9)] = inst_46089);

return statearr_46187;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46149__$1,(17),inst_46093);
} else {
if((state_val_46150 === (30))){
var inst_46123 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46124 = figwheel.client.heads_up.display_warning.call(null,inst_46123);
var state_46149__$1 = state_46149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46149__$1,(33),inst_46124);
} else {
if((state_val_46150 === (10))){
var inst_46083 = (state_46149[(2)]);
var state_46149__$1 = state_46149;
var statearr_46188_46231 = state_46149__$1;
(statearr_46188_46231[(2)] = inst_46083);

(statearr_46188_46231[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (18))){
var inst_46099 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46100 = figwheel.client.format_messages.call(null,inst_46099);
var inst_46101 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46102 = figwheel.client.heads_up.display_error.call(null,inst_46100,inst_46101);
var state_46149__$1 = state_46149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46149__$1,(21),inst_46102);
} else {
if((state_val_46150 === (37))){
var inst_46132 = (state_46149[(2)]);
var state_46149__$1 = state_46149;
var statearr_46189_46232 = state_46149__$1;
(statearr_46189_46232[(2)] = inst_46132);

(statearr_46189_46232[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46150 === (8))){
var inst_46075 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46149__$1 = state_46149;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46149__$1,(11),inst_46075);
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
});})(c__38833__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__38812__auto__,c__38833__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38813__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38813__auto____0 = (function (){
var statearr_46193 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46193[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38813__auto__);

(statearr_46193[(1)] = (1));

return statearr_46193;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38813__auto____1 = (function (state_46149){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_46149);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e46194){if((e46194 instanceof Object)){
var ex__38816__auto__ = e46194;
var statearr_46195_46233 = state_46149;
(statearr_46195_46233[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46149);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46234 = state_46149;
state_46149 = G__46234;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38813__auto__ = function(state_46149){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38813__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38813__auto____1.call(this,state_46149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38813__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38813__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto__,msg_hist,msg_names,msg))
})();
var state__38835__auto__ = (function (){var statearr_46196 = f__38834__auto__.call(null);
(statearr_46196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto__);

return statearr_46196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto__,msg_hist,msg_names,msg))
);

return c__38833__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__38833__auto___46297 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto___46297,ch){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto___46297,ch){
return (function (state_46280){
var state_val_46281 = (state_46280[(1)]);
if((state_val_46281 === (1))){
var state_46280__$1 = state_46280;
var statearr_46282_46298 = state_46280__$1;
(statearr_46282_46298[(2)] = null);

(statearr_46282_46298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46281 === (2))){
var state_46280__$1 = state_46280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46280__$1,(4),ch);
} else {
if((state_val_46281 === (3))){
var inst_46278 = (state_46280[(2)]);
var state_46280__$1 = state_46280;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46280__$1,inst_46278);
} else {
if((state_val_46281 === (4))){
var inst_46268 = (state_46280[(7)]);
var inst_46268__$1 = (state_46280[(2)]);
var state_46280__$1 = (function (){var statearr_46283 = state_46280;
(statearr_46283[(7)] = inst_46268__$1);

return statearr_46283;
})();
if(cljs.core.truth_(inst_46268__$1)){
var statearr_46284_46299 = state_46280__$1;
(statearr_46284_46299[(1)] = (5));

} else {
var statearr_46285_46300 = state_46280__$1;
(statearr_46285_46300[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46281 === (5))){
var inst_46268 = (state_46280[(7)]);
var inst_46270 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_46268);
var state_46280__$1 = state_46280;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46280__$1,(8),inst_46270);
} else {
if((state_val_46281 === (6))){
var state_46280__$1 = state_46280;
var statearr_46286_46301 = state_46280__$1;
(statearr_46286_46301[(2)] = null);

(statearr_46286_46301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46281 === (7))){
var inst_46276 = (state_46280[(2)]);
var state_46280__$1 = state_46280;
var statearr_46287_46302 = state_46280__$1;
(statearr_46287_46302[(2)] = inst_46276);

(statearr_46287_46302[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46281 === (8))){
var inst_46272 = (state_46280[(2)]);
var state_46280__$1 = (function (){var statearr_46288 = state_46280;
(statearr_46288[(8)] = inst_46272);

return statearr_46288;
})();
var statearr_46289_46303 = state_46280__$1;
(statearr_46289_46303[(2)] = null);

(statearr_46289_46303[(1)] = (2));


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
});})(c__38833__auto___46297,ch))
;
return ((function (switch__38812__auto__,c__38833__auto___46297,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__38813__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__38813__auto____0 = (function (){
var statearr_46293 = [null,null,null,null,null,null,null,null,null];
(statearr_46293[(0)] = figwheel$client$heads_up_plugin_$_state_machine__38813__auto__);

(statearr_46293[(1)] = (1));

return statearr_46293;
});
var figwheel$client$heads_up_plugin_$_state_machine__38813__auto____1 = (function (state_46280){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_46280);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e46294){if((e46294 instanceof Object)){
var ex__38816__auto__ = e46294;
var statearr_46295_46304 = state_46280;
(statearr_46295_46304[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46280);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46294;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46305 = state_46280;
state_46280 = G__46305;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__38813__auto__ = function(state_46280){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__38813__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__38813__auto____1.call(this,state_46280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__38813__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__38813__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto___46297,ch))
})();
var state__38835__auto__ = (function (){var statearr_46296 = f__38834__auto__.call(null);
(statearr_46296[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto___46297);

return statearr_46296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto___46297,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__38833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto__){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto__){
return (function (state_46326){
var state_val_46327 = (state_46326[(1)]);
if((state_val_46327 === (1))){
var inst_46321 = cljs.core.async.timeout.call(null,(3000));
var state_46326__$1 = state_46326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46326__$1,(2),inst_46321);
} else {
if((state_val_46327 === (2))){
var inst_46323 = (state_46326[(2)]);
var inst_46324 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_46326__$1 = (function (){var statearr_46328 = state_46326;
(statearr_46328[(7)] = inst_46323);

return statearr_46328;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46326__$1,inst_46324);
} else {
return null;
}
}
});})(c__38833__auto__))
;
return ((function (switch__38812__auto__,c__38833__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__38813__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__38813__auto____0 = (function (){
var statearr_46332 = [null,null,null,null,null,null,null,null];
(statearr_46332[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__38813__auto__);

(statearr_46332[(1)] = (1));

return statearr_46332;
});
var figwheel$client$enforce_project_plugin_$_state_machine__38813__auto____1 = (function (state_46326){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_46326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e46333){if((e46333 instanceof Object)){
var ex__38816__auto__ = e46333;
var statearr_46334_46336 = state_46326;
(statearr_46334_46336[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46337 = state_46326;
state_46326 = G__46337;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__38813__auto__ = function(state_46326){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__38813__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__38813__auto____1.call(this,state_46326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__38813__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__38813__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto__))
})();
var state__38835__auto__ = (function (){var statearr_46335 = f__38834__auto__.call(null);
(statearr_46335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto__);

return statearr_46335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto__))
);

return c__38833__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__46338){
var map__46345 = p__46338;
var map__46345__$1 = ((((!((map__46345 == null)))?((((map__46345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46345):map__46345);
var ed = map__46345__$1;
var formatted_exception = cljs.core.get.call(null,map__46345__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__46345__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__46345__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__46347_46351 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__46348_46352 = null;
var count__46349_46353 = (0);
var i__46350_46354 = (0);
while(true){
if((i__46350_46354 < count__46349_46353)){
var msg_46355 = cljs.core._nth.call(null,chunk__46348_46352,i__46350_46354);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46355);

var G__46356 = seq__46347_46351;
var G__46357 = chunk__46348_46352;
var G__46358 = count__46349_46353;
var G__46359 = (i__46350_46354 + (1));
seq__46347_46351 = G__46356;
chunk__46348_46352 = G__46357;
count__46349_46353 = G__46358;
i__46350_46354 = G__46359;
continue;
} else {
var temp__4657__auto___46360 = cljs.core.seq.call(null,seq__46347_46351);
if(temp__4657__auto___46360){
var seq__46347_46361__$1 = temp__4657__auto___46360;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46347_46361__$1)){
var c__35359__auto___46362 = cljs.core.chunk_first.call(null,seq__46347_46361__$1);
var G__46363 = cljs.core.chunk_rest.call(null,seq__46347_46361__$1);
var G__46364 = c__35359__auto___46362;
var G__46365 = cljs.core.count.call(null,c__35359__auto___46362);
var G__46366 = (0);
seq__46347_46351 = G__46363;
chunk__46348_46352 = G__46364;
count__46349_46353 = G__46365;
i__46350_46354 = G__46366;
continue;
} else {
var msg_46367 = cljs.core.first.call(null,seq__46347_46361__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_46367);

var G__46368 = cljs.core.next.call(null,seq__46347_46361__$1);
var G__46369 = null;
var G__46370 = (0);
var G__46371 = (0);
seq__46347_46351 = G__46368;
chunk__46348_46352 = G__46369;
count__46349_46353 = G__46370;
i__46350_46354 = G__46371;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__46372){
var map__46375 = p__46372;
var map__46375__$1 = ((((!((map__46375 == null)))?((((map__46375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46375):map__46375);
var w = map__46375__$1;
var message = cljs.core.get.call(null,map__46375__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__34544__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__34544__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__34544__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__46383 = cljs.core.seq.call(null,plugins);
var chunk__46384 = null;
var count__46385 = (0);
var i__46386 = (0);
while(true){
if((i__46386 < count__46385)){
var vec__46387 = cljs.core._nth.call(null,chunk__46384,i__46386);
var k = cljs.core.nth.call(null,vec__46387,(0),null);
var plugin = cljs.core.nth.call(null,vec__46387,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46389 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46383,chunk__46384,count__46385,i__46386,pl_46389,vec__46387,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_46389.call(null,msg_hist);
});})(seq__46383,chunk__46384,count__46385,i__46386,pl_46389,vec__46387,k,plugin))
);
} else {
}

var G__46390 = seq__46383;
var G__46391 = chunk__46384;
var G__46392 = count__46385;
var G__46393 = (i__46386 + (1));
seq__46383 = G__46390;
chunk__46384 = G__46391;
count__46385 = G__46392;
i__46386 = G__46393;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__46383);
if(temp__4657__auto__){
var seq__46383__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46383__$1)){
var c__35359__auto__ = cljs.core.chunk_first.call(null,seq__46383__$1);
var G__46394 = cljs.core.chunk_rest.call(null,seq__46383__$1);
var G__46395 = c__35359__auto__;
var G__46396 = cljs.core.count.call(null,c__35359__auto__);
var G__46397 = (0);
seq__46383 = G__46394;
chunk__46384 = G__46395;
count__46385 = G__46396;
i__46386 = G__46397;
continue;
} else {
var vec__46388 = cljs.core.first.call(null,seq__46383__$1);
var k = cljs.core.nth.call(null,vec__46388,(0),null);
var plugin = cljs.core.nth.call(null,vec__46388,(1),null);
if(cljs.core.truth_(plugin)){
var pl_46398 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46383,chunk__46384,count__46385,i__46386,pl_46398,vec__46388,k,plugin,seq__46383__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_46398.call(null,msg_hist);
});})(seq__46383,chunk__46384,count__46385,i__46386,pl_46398,vec__46388,k,plugin,seq__46383__$1,temp__4657__auto__))
);
} else {
}

var G__46399 = cljs.core.next.call(null,seq__46383__$1);
var G__46400 = null;
var G__46401 = (0);
var G__46402 = (0);
seq__46383 = G__46399;
chunk__46384 = G__46400;
count__46385 = G__46401;
i__46386 = G__46402;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args46403 = [];
var len__35614__auto___46406 = arguments.length;
var i__35615__auto___46407 = (0);
while(true){
if((i__35615__auto___46407 < len__35614__auto___46406)){
args46403.push((arguments[i__35615__auto___46407]));

var G__46408 = (i__35615__auto___46407 + (1));
i__35615__auto___46407 = G__46408;
continue;
} else {
}
break;
}

var G__46405 = args46403.length;
switch (G__46405) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args46403.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__35621__auto__ = [];
var len__35614__auto___46414 = arguments.length;
var i__35615__auto___46415 = (0);
while(true){
if((i__35615__auto___46415 < len__35614__auto___46414)){
args__35621__auto__.push((arguments[i__35615__auto___46415]));

var G__46416 = (i__35615__auto___46415 + (1));
i__35615__auto___46415 = G__46416;
continue;
} else {
}
break;
}

var argseq__35622__auto__ = ((((0) < args__35621__auto__.length))?(new cljs.core.IndexedSeq(args__35621__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__35622__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__46411){
var map__46412 = p__46411;
var map__46412__$1 = ((((!((map__46412 == null)))?((((map__46412.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46412.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46412):map__46412);
var opts = map__46412__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq46410){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46410));
});

//# sourceMappingURL=client.js.map