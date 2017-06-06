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
var pred__43939 = cljs.core._EQ_;
var expr__43940 = (function (){var or__34572__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e43943){if((e43943 instanceof Error)){
var e = e43943;
return false;
} else {
throw e43943;

}
}})();
if(cljs.core.truth_(or__34572__auto__)){
return or__34572__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__43939.call(null,"true",expr__43940))){
return true;
} else {
if(cljs.core.truth_(pred__43939.call(null,"false",expr__43940))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__43940)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e43945){if((e43945 instanceof Error)){
var e = e43945;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e43945;

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
var args__35637__auto__ = [];
var len__35630__auto___43947 = arguments.length;
var i__35631__auto___43948 = (0);
while(true){
if((i__35631__auto___43948 < len__35630__auto___43947)){
args__35637__auto__.push((arguments[i__35631__auto___43948]));

var G__43949 = (i__35631__auto___43948 + (1));
i__35631__auto___43948 = G__43949;
continue;
} else {
}
break;
}

var argseq__35638__auto__ = ((((0) < args__35637__auto__.length))?(new cljs.core.IndexedSeq(args__35637__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__35638__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq43946){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43946));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__43950){
var map__43953 = p__43950;
var map__43953__$1 = ((((!((map__43953 == null)))?((((map__43953.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43953.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43953):map__43953);
var message = cljs.core.get.call(null,map__43953__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__43953__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__34572__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__34572__auto__)){
return or__34572__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__34560__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__34560__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__34560__auto__;
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
var c__37149__auto___44115 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto___44115,ch){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto___44115,ch){
return (function (state_44084){
var state_val_44085 = (state_44084[(1)]);
if((state_val_44085 === (7))){
var inst_44080 = (state_44084[(2)]);
var state_44084__$1 = state_44084;
var statearr_44086_44116 = state_44084__$1;
(statearr_44086_44116[(2)] = inst_44080);

(statearr_44086_44116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44085 === (1))){
var state_44084__$1 = state_44084;
var statearr_44087_44117 = state_44084__$1;
(statearr_44087_44117[(2)] = null);

(statearr_44087_44117[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44085 === (4))){
var inst_44037 = (state_44084[(7)]);
var inst_44037__$1 = (state_44084[(2)]);
var state_44084__$1 = (function (){var statearr_44088 = state_44084;
(statearr_44088[(7)] = inst_44037__$1);

return statearr_44088;
})();
if(cljs.core.truth_(inst_44037__$1)){
var statearr_44089_44118 = state_44084__$1;
(statearr_44089_44118[(1)] = (5));

} else {
var statearr_44090_44119 = state_44084__$1;
(statearr_44090_44119[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44085 === (15))){
var inst_44044 = (state_44084[(8)]);
var inst_44059 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44044);
var inst_44060 = cljs.core.first.call(null,inst_44059);
var inst_44061 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_44060);
var inst_44062 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_44061)].join('');
var inst_44063 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_44062);
var state_44084__$1 = state_44084;
var statearr_44091_44120 = state_44084__$1;
(statearr_44091_44120[(2)] = inst_44063);

(statearr_44091_44120[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44085 === (13))){
var inst_44068 = (state_44084[(2)]);
var state_44084__$1 = state_44084;
var statearr_44092_44121 = state_44084__$1;
(statearr_44092_44121[(2)] = inst_44068);

(statearr_44092_44121[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44085 === (6))){
var state_44084__$1 = state_44084;
var statearr_44093_44122 = state_44084__$1;
(statearr_44093_44122[(2)] = null);

(statearr_44093_44122[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44085 === (17))){
var inst_44066 = (state_44084[(2)]);
var state_44084__$1 = state_44084;
var statearr_44094_44123 = state_44084__$1;
(statearr_44094_44123[(2)] = inst_44066);

(statearr_44094_44123[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44085 === (3))){
var inst_44082 = (state_44084[(2)]);
var state_44084__$1 = state_44084;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44084__$1,inst_44082);
} else {
if((state_val_44085 === (12))){
var inst_44043 = (state_44084[(9)]);
var inst_44057 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_44043,opts);
var state_44084__$1 = state_44084;
if(cljs.core.truth_(inst_44057)){
var statearr_44095_44124 = state_44084__$1;
(statearr_44095_44124[(1)] = (15));

} else {
var statearr_44096_44125 = state_44084__$1;
(statearr_44096_44125[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44085 === (2))){
var state_44084__$1 = state_44084;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44084__$1,(4),ch);
} else {
if((state_val_44085 === (11))){
var inst_44044 = (state_44084[(8)]);
var inst_44049 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_44050 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_44044);
var inst_44051 = cljs.core.async.timeout.call(null,(1000));
var inst_44052 = [inst_44050,inst_44051];
var inst_44053 = (new cljs.core.PersistentVector(null,2,(5),inst_44049,inst_44052,null));
var state_44084__$1 = state_44084;
return cljs.core.async.ioc_alts_BANG_.call(null,state_44084__$1,(14),inst_44053);
} else {
if((state_val_44085 === (9))){
var inst_44044 = (state_44084[(8)]);
var inst_44070 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_44071 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_44044);
var inst_44072 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_44071);
var inst_44073 = [cljs.core.str("Not loading: "),cljs.core.str(inst_44072)].join('');
var inst_44074 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_44073);
var state_44084__$1 = (function (){var statearr_44097 = state_44084;
(statearr_44097[(10)] = inst_44070);

return statearr_44097;
})();
var statearr_44098_44126 = state_44084__$1;
(statearr_44098_44126[(2)] = inst_44074);

(statearr_44098_44126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44085 === (5))){
var inst_44037 = (state_44084[(7)]);
var inst_44039 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_44040 = (new cljs.core.PersistentArrayMap(null,2,inst_44039,null));
var inst_44041 = (new cljs.core.PersistentHashSet(null,inst_44040,null));
var inst_44042 = figwheel.client.focus_msgs.call(null,inst_44041,inst_44037);
var inst_44043 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_44042);
var inst_44044 = cljs.core.first.call(null,inst_44042);
var inst_44045 = figwheel.client.autoload_QMARK_.call(null);
var state_44084__$1 = (function (){var statearr_44099 = state_44084;
(statearr_44099[(8)] = inst_44044);

(statearr_44099[(9)] = inst_44043);

return statearr_44099;
})();
if(cljs.core.truth_(inst_44045)){
var statearr_44100_44127 = state_44084__$1;
(statearr_44100_44127[(1)] = (8));

} else {
var statearr_44101_44128 = state_44084__$1;
(statearr_44101_44128[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44085 === (14))){
var inst_44055 = (state_44084[(2)]);
var state_44084__$1 = state_44084;
var statearr_44102_44129 = state_44084__$1;
(statearr_44102_44129[(2)] = inst_44055);

(statearr_44102_44129[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44085 === (16))){
var state_44084__$1 = state_44084;
var statearr_44103_44130 = state_44084__$1;
(statearr_44103_44130[(2)] = null);

(statearr_44103_44130[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44085 === (10))){
var inst_44076 = (state_44084[(2)]);
var state_44084__$1 = (function (){var statearr_44104 = state_44084;
(statearr_44104[(11)] = inst_44076);

return statearr_44104;
})();
var statearr_44105_44131 = state_44084__$1;
(statearr_44105_44131[(2)] = null);

(statearr_44105_44131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44085 === (8))){
var inst_44043 = (state_44084[(9)]);
var inst_44047 = figwheel.client.reload_file_state_QMARK_.call(null,inst_44043,opts);
var state_44084__$1 = state_44084;
if(cljs.core.truth_(inst_44047)){
var statearr_44106_44132 = state_44084__$1;
(statearr_44106_44132[(1)] = (11));

} else {
var statearr_44107_44133 = state_44084__$1;
(statearr_44107_44133[(1)] = (12));

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
});})(c__37149__auto___44115,ch))
;
return ((function (switch__37128__auto__,c__37149__auto___44115,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__37129__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__37129__auto____0 = (function (){
var statearr_44111 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44111[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__37129__auto__);

(statearr_44111[(1)] = (1));

return statearr_44111;
});
var figwheel$client$file_reloader_plugin_$_state_machine__37129__auto____1 = (function (state_44084){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_44084);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e44112){if((e44112 instanceof Object)){
var ex__37132__auto__ = e44112;
var statearr_44113_44134 = state_44084;
(statearr_44113_44134[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44084);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44112;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44135 = state_44084;
state_44084 = G__44135;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__37129__auto__ = function(state_44084){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__37129__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__37129__auto____1.call(this,state_44084);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__37129__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__37129__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto___44115,ch))
})();
var state__37151__auto__ = (function (){var statearr_44114 = f__37150__auto__.call(null);
(statearr_44114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto___44115);

return statearr_44114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto___44115,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__44136_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__44136_SHARP_));
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
var base_path_44143 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_44143){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_44141 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_44142 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_44142;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_44141;
}}catch (e44140){if((e44140 instanceof Error)){
var e = e44140;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_44143], null));
} else {
var e = e44140;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_44143))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__44144){
var map__44151 = p__44144;
var map__44151__$1 = ((((!((map__44151 == null)))?((((map__44151.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44151.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44151):map__44151);
var opts = map__44151__$1;
var build_id = cljs.core.get.call(null,map__44151__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__44151,map__44151__$1,opts,build_id){
return (function (p__44153){
var vec__44154 = p__44153;
var map__44155 = cljs.core.nth.call(null,vec__44154,(0),null);
var map__44155__$1 = ((((!((map__44155 == null)))?((((map__44155.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44155.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44155):map__44155);
var msg = map__44155__$1;
var msg_name = cljs.core.get.call(null,map__44155__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__44154,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__44154,map__44155,map__44155__$1,msg,msg_name,_,map__44151,map__44151__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__44154,map__44155,map__44155__$1,msg,msg_name,_,map__44151,map__44151__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__44151,map__44151__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__44161){
var vec__44162 = p__44161;
var map__44163 = cljs.core.nth.call(null,vec__44162,(0),null);
var map__44163__$1 = ((((!((map__44163 == null)))?((((map__44163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44163):map__44163);
var msg = map__44163__$1;
var msg_name = cljs.core.get.call(null,map__44163__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__44162,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__44165){
var map__44175 = p__44165;
var map__44175__$1 = ((((!((map__44175 == null)))?((((map__44175.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44175.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44175):map__44175);
var on_compile_warning = cljs.core.get.call(null,map__44175__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__44175__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__44175,map__44175__$1,on_compile_warning,on_compile_fail){
return (function (p__44177){
var vec__44178 = p__44177;
var map__44179 = cljs.core.nth.call(null,vec__44178,(0),null);
var map__44179__$1 = ((((!((map__44179 == null)))?((((map__44179.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44179.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44179):map__44179);
var msg = map__44179__$1;
var msg_name = cljs.core.get.call(null,map__44179__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__44178,(1));
var pred__44181 = cljs.core._EQ_;
var expr__44182 = msg_name;
if(cljs.core.truth_(pred__44181.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__44182))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__44181.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__44182))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__44175,map__44175__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__37149__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto__,msg_hist,msg_names,msg){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto__,msg_hist,msg_names,msg){
return (function (state_44398){
var state_val_44399 = (state_44398[(1)]);
if((state_val_44399 === (7))){
var inst_44322 = (state_44398[(2)]);
var state_44398__$1 = state_44398;
if(cljs.core.truth_(inst_44322)){
var statearr_44400_44446 = state_44398__$1;
(statearr_44400_44446[(1)] = (8));

} else {
var statearr_44401_44447 = state_44398__$1;
(statearr_44401_44447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (20))){
var inst_44392 = (state_44398[(2)]);
var state_44398__$1 = state_44398;
var statearr_44402_44448 = state_44398__$1;
(statearr_44402_44448[(2)] = inst_44392);

(statearr_44402_44448[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (27))){
var inst_44388 = (state_44398[(2)]);
var state_44398__$1 = state_44398;
var statearr_44403_44449 = state_44398__$1;
(statearr_44403_44449[(2)] = inst_44388);

(statearr_44403_44449[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (1))){
var inst_44315 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_44398__$1 = state_44398;
if(cljs.core.truth_(inst_44315)){
var statearr_44404_44450 = state_44398__$1;
(statearr_44404_44450[(1)] = (2));

} else {
var statearr_44405_44451 = state_44398__$1;
(statearr_44405_44451[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (24))){
var inst_44390 = (state_44398[(2)]);
var state_44398__$1 = state_44398;
var statearr_44406_44452 = state_44398__$1;
(statearr_44406_44452[(2)] = inst_44390);

(statearr_44406_44452[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (4))){
var inst_44396 = (state_44398[(2)]);
var state_44398__$1 = state_44398;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44398__$1,inst_44396);
} else {
if((state_val_44399 === (15))){
var inst_44394 = (state_44398[(2)]);
var state_44398__$1 = state_44398;
var statearr_44407_44453 = state_44398__$1;
(statearr_44407_44453[(2)] = inst_44394);

(statearr_44407_44453[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (21))){
var inst_44353 = (state_44398[(2)]);
var state_44398__$1 = state_44398;
var statearr_44408_44454 = state_44398__$1;
(statearr_44408_44454[(2)] = inst_44353);

(statearr_44408_44454[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (31))){
var inst_44377 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_44398__$1 = state_44398;
if(cljs.core.truth_(inst_44377)){
var statearr_44409_44455 = state_44398__$1;
(statearr_44409_44455[(1)] = (34));

} else {
var statearr_44410_44456 = state_44398__$1;
(statearr_44410_44456[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (32))){
var inst_44386 = (state_44398[(2)]);
var state_44398__$1 = state_44398;
var statearr_44411_44457 = state_44398__$1;
(statearr_44411_44457[(2)] = inst_44386);

(statearr_44411_44457[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (33))){
var inst_44375 = (state_44398[(2)]);
var state_44398__$1 = state_44398;
var statearr_44412_44458 = state_44398__$1;
(statearr_44412_44458[(2)] = inst_44375);

(statearr_44412_44458[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (13))){
var inst_44336 = figwheel.client.heads_up.clear.call(null);
var state_44398__$1 = state_44398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44398__$1,(16),inst_44336);
} else {
if((state_val_44399 === (22))){
var inst_44357 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44358 = figwheel.client.heads_up.append_message.call(null,inst_44357);
var state_44398__$1 = state_44398;
var statearr_44413_44459 = state_44398__$1;
(statearr_44413_44459[(2)] = inst_44358);

(statearr_44413_44459[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (36))){
var inst_44384 = (state_44398[(2)]);
var state_44398__$1 = state_44398;
var statearr_44414_44460 = state_44398__$1;
(statearr_44414_44460[(2)] = inst_44384);

(statearr_44414_44460[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (29))){
var inst_44368 = (state_44398[(2)]);
var state_44398__$1 = state_44398;
var statearr_44415_44461 = state_44398__$1;
(statearr_44415_44461[(2)] = inst_44368);

(statearr_44415_44461[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (6))){
var inst_44317 = (state_44398[(7)]);
var state_44398__$1 = state_44398;
var statearr_44416_44462 = state_44398__$1;
(statearr_44416_44462[(2)] = inst_44317);

(statearr_44416_44462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (28))){
var inst_44364 = (state_44398[(2)]);
var inst_44365 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44366 = figwheel.client.heads_up.display_warning.call(null,inst_44365);
var state_44398__$1 = (function (){var statearr_44417 = state_44398;
(statearr_44417[(8)] = inst_44364);

return statearr_44417;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44398__$1,(29),inst_44366);
} else {
if((state_val_44399 === (25))){
var inst_44362 = figwheel.client.heads_up.clear.call(null);
var state_44398__$1 = state_44398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44398__$1,(28),inst_44362);
} else {
if((state_val_44399 === (34))){
var inst_44379 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44398__$1 = state_44398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44398__$1,(37),inst_44379);
} else {
if((state_val_44399 === (17))){
var inst_44344 = (state_44398[(2)]);
var state_44398__$1 = state_44398;
var statearr_44418_44463 = state_44398__$1;
(statearr_44418_44463[(2)] = inst_44344);

(statearr_44418_44463[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (3))){
var inst_44334 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_44398__$1 = state_44398;
if(cljs.core.truth_(inst_44334)){
var statearr_44419_44464 = state_44398__$1;
(statearr_44419_44464[(1)] = (13));

} else {
var statearr_44420_44465 = state_44398__$1;
(statearr_44420_44465[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (12))){
var inst_44330 = (state_44398[(2)]);
var state_44398__$1 = state_44398;
var statearr_44421_44466 = state_44398__$1;
(statearr_44421_44466[(2)] = inst_44330);

(statearr_44421_44466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (2))){
var inst_44317 = (state_44398[(7)]);
var inst_44317__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_44398__$1 = (function (){var statearr_44422 = state_44398;
(statearr_44422[(7)] = inst_44317__$1);

return statearr_44422;
})();
if(cljs.core.truth_(inst_44317__$1)){
var statearr_44423_44467 = state_44398__$1;
(statearr_44423_44467[(1)] = (5));

} else {
var statearr_44424_44468 = state_44398__$1;
(statearr_44424_44468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (23))){
var inst_44360 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_44398__$1 = state_44398;
if(cljs.core.truth_(inst_44360)){
var statearr_44425_44469 = state_44398__$1;
(statearr_44425_44469[(1)] = (25));

} else {
var statearr_44426_44470 = state_44398__$1;
(statearr_44426_44470[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (35))){
var state_44398__$1 = state_44398;
var statearr_44427_44471 = state_44398__$1;
(statearr_44427_44471[(2)] = null);

(statearr_44427_44471[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (19))){
var inst_44355 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_44398__$1 = state_44398;
if(cljs.core.truth_(inst_44355)){
var statearr_44428_44472 = state_44398__$1;
(statearr_44428_44472[(1)] = (22));

} else {
var statearr_44429_44473 = state_44398__$1;
(statearr_44429_44473[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (11))){
var inst_44326 = (state_44398[(2)]);
var state_44398__$1 = state_44398;
var statearr_44430_44474 = state_44398__$1;
(statearr_44430_44474[(2)] = inst_44326);

(statearr_44430_44474[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (9))){
var inst_44328 = figwheel.client.heads_up.clear.call(null);
var state_44398__$1 = state_44398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44398__$1,(12),inst_44328);
} else {
if((state_val_44399 === (5))){
var inst_44319 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_44398__$1 = state_44398;
var statearr_44431_44475 = state_44398__$1;
(statearr_44431_44475[(2)] = inst_44319);

(statearr_44431_44475[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (14))){
var inst_44346 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_44398__$1 = state_44398;
if(cljs.core.truth_(inst_44346)){
var statearr_44432_44476 = state_44398__$1;
(statearr_44432_44476[(1)] = (18));

} else {
var statearr_44433_44477 = state_44398__$1;
(statearr_44433_44477[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (26))){
var inst_44370 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_44398__$1 = state_44398;
if(cljs.core.truth_(inst_44370)){
var statearr_44434_44478 = state_44398__$1;
(statearr_44434_44478[(1)] = (30));

} else {
var statearr_44435_44479 = state_44398__$1;
(statearr_44435_44479[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (16))){
var inst_44338 = (state_44398[(2)]);
var inst_44339 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44340 = figwheel.client.format_messages.call(null,inst_44339);
var inst_44341 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44342 = figwheel.client.heads_up.display_error.call(null,inst_44340,inst_44341);
var state_44398__$1 = (function (){var statearr_44436 = state_44398;
(statearr_44436[(9)] = inst_44338);

return statearr_44436;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44398__$1,(17),inst_44342);
} else {
if((state_val_44399 === (30))){
var inst_44372 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44373 = figwheel.client.heads_up.display_warning.call(null,inst_44372);
var state_44398__$1 = state_44398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44398__$1,(33),inst_44373);
} else {
if((state_val_44399 === (10))){
var inst_44332 = (state_44398[(2)]);
var state_44398__$1 = state_44398;
var statearr_44437_44480 = state_44398__$1;
(statearr_44437_44480[(2)] = inst_44332);

(statearr_44437_44480[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (18))){
var inst_44348 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44349 = figwheel.client.format_messages.call(null,inst_44348);
var inst_44350 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_44351 = figwheel.client.heads_up.display_error.call(null,inst_44349,inst_44350);
var state_44398__$1 = state_44398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44398__$1,(21),inst_44351);
} else {
if((state_val_44399 === (37))){
var inst_44381 = (state_44398[(2)]);
var state_44398__$1 = state_44398;
var statearr_44438_44481 = state_44398__$1;
(statearr_44438_44481[(2)] = inst_44381);

(statearr_44438_44481[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44399 === (8))){
var inst_44324 = figwheel.client.heads_up.flash_loaded.call(null);
var state_44398__$1 = state_44398;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44398__$1,(11),inst_44324);
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
});})(c__37149__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__37128__auto__,c__37149__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37129__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37129__auto____0 = (function (){
var statearr_44442 = [null,null,null,null,null,null,null,null,null,null];
(statearr_44442[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37129__auto__);

(statearr_44442[(1)] = (1));

return statearr_44442;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37129__auto____1 = (function (state_44398){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_44398);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e44443){if((e44443 instanceof Object)){
var ex__37132__auto__ = e44443;
var statearr_44444_44482 = state_44398;
(statearr_44444_44482[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44398);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44483 = state_44398;
state_44398 = G__44483;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37129__auto__ = function(state_44398){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37129__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37129__auto____1.call(this,state_44398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37129__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37129__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto__,msg_hist,msg_names,msg))
})();
var state__37151__auto__ = (function (){var statearr_44445 = f__37150__auto__.call(null);
(statearr_44445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto__);

return statearr_44445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto__,msg_hist,msg_names,msg))
);

return c__37149__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__37149__auto___44546 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto___44546,ch){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto___44546,ch){
return (function (state_44529){
var state_val_44530 = (state_44529[(1)]);
if((state_val_44530 === (1))){
var state_44529__$1 = state_44529;
var statearr_44531_44547 = state_44529__$1;
(statearr_44531_44547[(2)] = null);

(statearr_44531_44547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44530 === (2))){
var state_44529__$1 = state_44529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44529__$1,(4),ch);
} else {
if((state_val_44530 === (3))){
var inst_44527 = (state_44529[(2)]);
var state_44529__$1 = state_44529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44529__$1,inst_44527);
} else {
if((state_val_44530 === (4))){
var inst_44517 = (state_44529[(7)]);
var inst_44517__$1 = (state_44529[(2)]);
var state_44529__$1 = (function (){var statearr_44532 = state_44529;
(statearr_44532[(7)] = inst_44517__$1);

return statearr_44532;
})();
if(cljs.core.truth_(inst_44517__$1)){
var statearr_44533_44548 = state_44529__$1;
(statearr_44533_44548[(1)] = (5));

} else {
var statearr_44534_44549 = state_44529__$1;
(statearr_44534_44549[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44530 === (5))){
var inst_44517 = (state_44529[(7)]);
var inst_44519 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_44517);
var state_44529__$1 = state_44529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44529__$1,(8),inst_44519);
} else {
if((state_val_44530 === (6))){
var state_44529__$1 = state_44529;
var statearr_44535_44550 = state_44529__$1;
(statearr_44535_44550[(2)] = null);

(statearr_44535_44550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44530 === (7))){
var inst_44525 = (state_44529[(2)]);
var state_44529__$1 = state_44529;
var statearr_44536_44551 = state_44529__$1;
(statearr_44536_44551[(2)] = inst_44525);

(statearr_44536_44551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44530 === (8))){
var inst_44521 = (state_44529[(2)]);
var state_44529__$1 = (function (){var statearr_44537 = state_44529;
(statearr_44537[(8)] = inst_44521);

return statearr_44537;
})();
var statearr_44538_44552 = state_44529__$1;
(statearr_44538_44552[(2)] = null);

(statearr_44538_44552[(1)] = (2));


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
});})(c__37149__auto___44546,ch))
;
return ((function (switch__37128__auto__,c__37149__auto___44546,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__37129__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__37129__auto____0 = (function (){
var statearr_44542 = [null,null,null,null,null,null,null,null,null];
(statearr_44542[(0)] = figwheel$client$heads_up_plugin_$_state_machine__37129__auto__);

(statearr_44542[(1)] = (1));

return statearr_44542;
});
var figwheel$client$heads_up_plugin_$_state_machine__37129__auto____1 = (function (state_44529){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_44529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e44543){if((e44543 instanceof Object)){
var ex__37132__auto__ = e44543;
var statearr_44544_44553 = state_44529;
(statearr_44544_44553[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44554 = state_44529;
state_44529 = G__44554;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__37129__auto__ = function(state_44529){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__37129__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__37129__auto____1.call(this,state_44529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__37129__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__37129__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto___44546,ch))
})();
var state__37151__auto__ = (function (){var statearr_44545 = f__37150__auto__.call(null);
(statearr_44545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto___44546);

return statearr_44545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto___44546,ch))
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
var c__37149__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto__){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto__){
return (function (state_44575){
var state_val_44576 = (state_44575[(1)]);
if((state_val_44576 === (1))){
var inst_44570 = cljs.core.async.timeout.call(null,(3000));
var state_44575__$1 = state_44575;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44575__$1,(2),inst_44570);
} else {
if((state_val_44576 === (2))){
var inst_44572 = (state_44575[(2)]);
var inst_44573 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_44575__$1 = (function (){var statearr_44577 = state_44575;
(statearr_44577[(7)] = inst_44572);

return statearr_44577;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44575__$1,inst_44573);
} else {
return null;
}
}
});})(c__37149__auto__))
;
return ((function (switch__37128__auto__,c__37149__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__37129__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__37129__auto____0 = (function (){
var statearr_44581 = [null,null,null,null,null,null,null,null];
(statearr_44581[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__37129__auto__);

(statearr_44581[(1)] = (1));

return statearr_44581;
});
var figwheel$client$enforce_project_plugin_$_state_machine__37129__auto____1 = (function (state_44575){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_44575);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e44582){if((e44582 instanceof Object)){
var ex__37132__auto__ = e44582;
var statearr_44583_44585 = state_44575;
(statearr_44583_44585[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44575);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44582;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44586 = state_44575;
state_44575 = G__44586;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__37129__auto__ = function(state_44575){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__37129__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__37129__auto____1.call(this,state_44575);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__37129__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__37129__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto__))
})();
var state__37151__auto__ = (function (){var statearr_44584 = f__37150__auto__.call(null);
(statearr_44584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto__);

return statearr_44584;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto__))
);

return c__37149__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__44587){
var map__44594 = p__44587;
var map__44594__$1 = ((((!((map__44594 == null)))?((((map__44594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44594):map__44594);
var ed = map__44594__$1;
var formatted_exception = cljs.core.get.call(null,map__44594__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__44594__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__44594__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__44596_44600 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__44597_44601 = null;
var count__44598_44602 = (0);
var i__44599_44603 = (0);
while(true){
if((i__44599_44603 < count__44598_44602)){
var msg_44604 = cljs.core._nth.call(null,chunk__44597_44601,i__44599_44603);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44604);

var G__44605 = seq__44596_44600;
var G__44606 = chunk__44597_44601;
var G__44607 = count__44598_44602;
var G__44608 = (i__44599_44603 + (1));
seq__44596_44600 = G__44605;
chunk__44597_44601 = G__44606;
count__44598_44602 = G__44607;
i__44599_44603 = G__44608;
continue;
} else {
var temp__4657__auto___44609 = cljs.core.seq.call(null,seq__44596_44600);
if(temp__4657__auto___44609){
var seq__44596_44610__$1 = temp__4657__auto___44609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44596_44610__$1)){
var c__35375__auto___44611 = cljs.core.chunk_first.call(null,seq__44596_44610__$1);
var G__44612 = cljs.core.chunk_rest.call(null,seq__44596_44610__$1);
var G__44613 = c__35375__auto___44611;
var G__44614 = cljs.core.count.call(null,c__35375__auto___44611);
var G__44615 = (0);
seq__44596_44600 = G__44612;
chunk__44597_44601 = G__44613;
count__44598_44602 = G__44614;
i__44599_44603 = G__44615;
continue;
} else {
var msg_44616 = cljs.core.first.call(null,seq__44596_44610__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_44616);

var G__44617 = cljs.core.next.call(null,seq__44596_44610__$1);
var G__44618 = null;
var G__44619 = (0);
var G__44620 = (0);
seq__44596_44600 = G__44617;
chunk__44597_44601 = G__44618;
count__44598_44602 = G__44619;
i__44599_44603 = G__44620;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__44621){
var map__44624 = p__44621;
var map__44624__$1 = ((((!((map__44624 == null)))?((((map__44624.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44624.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44624):map__44624);
var w = map__44624__$1;
var message = cljs.core.get.call(null,map__44624__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__34560__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__34560__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__34560__auto__;
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
var seq__44632 = cljs.core.seq.call(null,plugins);
var chunk__44633 = null;
var count__44634 = (0);
var i__44635 = (0);
while(true){
if((i__44635 < count__44634)){
var vec__44636 = cljs.core._nth.call(null,chunk__44633,i__44635);
var k = cljs.core.nth.call(null,vec__44636,(0),null);
var plugin = cljs.core.nth.call(null,vec__44636,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44638 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44632,chunk__44633,count__44634,i__44635,pl_44638,vec__44636,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_44638.call(null,msg_hist);
});})(seq__44632,chunk__44633,count__44634,i__44635,pl_44638,vec__44636,k,plugin))
);
} else {
}

var G__44639 = seq__44632;
var G__44640 = chunk__44633;
var G__44641 = count__44634;
var G__44642 = (i__44635 + (1));
seq__44632 = G__44639;
chunk__44633 = G__44640;
count__44634 = G__44641;
i__44635 = G__44642;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__44632);
if(temp__4657__auto__){
var seq__44632__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44632__$1)){
var c__35375__auto__ = cljs.core.chunk_first.call(null,seq__44632__$1);
var G__44643 = cljs.core.chunk_rest.call(null,seq__44632__$1);
var G__44644 = c__35375__auto__;
var G__44645 = cljs.core.count.call(null,c__35375__auto__);
var G__44646 = (0);
seq__44632 = G__44643;
chunk__44633 = G__44644;
count__44634 = G__44645;
i__44635 = G__44646;
continue;
} else {
var vec__44637 = cljs.core.first.call(null,seq__44632__$1);
var k = cljs.core.nth.call(null,vec__44637,(0),null);
var plugin = cljs.core.nth.call(null,vec__44637,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44647 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44632,chunk__44633,count__44634,i__44635,pl_44647,vec__44637,k,plugin,seq__44632__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_44647.call(null,msg_hist);
});})(seq__44632,chunk__44633,count__44634,i__44635,pl_44647,vec__44637,k,plugin,seq__44632__$1,temp__4657__auto__))
);
} else {
}

var G__44648 = cljs.core.next.call(null,seq__44632__$1);
var G__44649 = null;
var G__44650 = (0);
var G__44651 = (0);
seq__44632 = G__44648;
chunk__44633 = G__44649;
count__44634 = G__44650;
i__44635 = G__44651;
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
var args44652 = [];
var len__35630__auto___44655 = arguments.length;
var i__35631__auto___44656 = (0);
while(true){
if((i__35631__auto___44656 < len__35630__auto___44655)){
args44652.push((arguments[i__35631__auto___44656]));

var G__44657 = (i__35631__auto___44656 + (1));
i__35631__auto___44656 = G__44657;
continue;
} else {
}
break;
}

var G__44654 = args44652.length;
switch (G__44654) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44652.length)].join('')));

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
var args__35637__auto__ = [];
var len__35630__auto___44663 = arguments.length;
var i__35631__auto___44664 = (0);
while(true){
if((i__35631__auto___44664 < len__35630__auto___44663)){
args__35637__auto__.push((arguments[i__35631__auto___44664]));

var G__44665 = (i__35631__auto___44664 + (1));
i__35631__auto___44664 = G__44665;
continue;
} else {
}
break;
}

var argseq__35638__auto__ = ((((0) < args__35637__auto__.length))?(new cljs.core.IndexedSeq(args__35637__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__35638__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__44660){
var map__44661 = p__44660;
var map__44661__$1 = ((((!((map__44661 == null)))?((((map__44661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__44661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44661):map__44661);
var opts = map__44661__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq44659){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44659));
});

//# sourceMappingURL=client.js.map