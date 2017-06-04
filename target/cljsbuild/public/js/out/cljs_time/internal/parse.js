// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs_time.internal.parse');
goog.require('cljs.core');
goog.require('cljs_time.internal.core');
goog.require('clojure.string');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
goog.require('goog.date.Interval');
cljs_time.internal.parse.replace = (function cljs_time$internal$parse$replace(s,match,replacement){
return clojure.string.replace.call(null,((typeof s === 'string')?s:clojure.string.join.call(null,s)),match,replacement);
});
cljs_time.internal.parse.token = (function cljs_time$internal$parse$token(s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215),s], null);
});
cljs_time.internal.parse.quoted = (function cljs_time$internal$parse$quoted(s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quoted","quoted",2117344952),s], null);
});
cljs_time.internal.parse.read_while = (function cljs_time$internal$parse$read_while(pred,s){
var G__39083 = s;
var vec__39084 = G__39083;
var h = cljs.core.nth.call(null,vec__39084,(0),null);
var more = cljs.core.nthnext.call(null,vec__39084,(1));
var s__$1 = vec__39084;
var out = cljs.core.PersistentVector.EMPTY;
var G__39083__$1 = G__39083;
var out__$1 = out;
while(true){
var vec__39085 = G__39083__$1;
var h__$1 = cljs.core.nth.call(null,vec__39085,(0),null);
var more__$1 = cljs.core.nthnext.call(null,vec__39085,(1));
var s__$2 = vec__39085;
var out__$2 = out__$1;
if(cljs.core.truth_((function (){var and__34544__auto__ = h__$1;
if(cljs.core.truth_(and__34544__auto__)){
return pred.call(null,h__$1);
} else {
return and__34544__auto__;
}
})())){
var G__39086 = more__$1;
var G__39087 = cljs.core.conj.call(null,out__$2,h__$1);
G__39083__$1 = G__39086;
out__$1 = G__39087;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [out__$2,s__$2], null);
}
break;
}
});
cljs_time.internal.parse.read_token = (function cljs_time$internal$parse$read_token(ch,s){
var vec__39089 = cljs_time.internal.parse.read_while.call(null,cljs.core.PersistentHashSet.fromArray([ch], true),s);
var end = cljs.core.nth.call(null,vec__39089,(0),null);
var s__$1 = cljs.core.nth.call(null,vec__39089,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.internal.parse.token.call(null,cljs.core.apply.call(null,cljs.core.str,ch,end)),s__$1], null);
});
cljs_time.internal.parse.read_quoted = (function cljs_time$internal$parse$read_quoted(_,p__39090){
var vec__39093 = p__39090;
var h = cljs.core.nth.call(null,vec__39093,(0),null);
var more = cljs.core.nthnext.call(null,vec__39093,(1));
var s = vec__39093;
if(cljs.core._EQ_.call(null,h,"'")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.internal.parse.quoted.call(null,"'"),more], null);
} else {
var vec__39094 = cljs_time.internal.parse.read_while.call(null,cljs.core.complement.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["'",null], null), null)),s);
var q = cljs.core.nth.call(null,vec__39094,(0),null);
var s__$1 = cljs.core.nth.call(null,vec__39094,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.internal.parse.quoted.call(null,q),cljs.core.rest.call(null,s__$1)], null);
}
});
cljs_time.internal.parse.read_punctuation = (function cljs_time$internal$parse$read_punctuation(ch,s){
var vec__39097 = cljs_time.internal.parse.read_while.call(null,(function (p1__39095_SHARP_){
return cljs.core.not.call(null,cljs.core.re_find.call(null,/[a-zA-Z']/,p1__39095_SHARP_));
}),s);
var end = cljs.core.nth.call(null,vec__39097,(0),null);
var s__$1 = cljs.core.nth.call(null,vec__39097,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.internal.parse.quoted.call(null,cljs.core.apply.call(null,cljs.core.str,ch,end)),s__$1], null);
});
cljs_time.internal.parse.read_match = (function cljs_time$internal$parse$read_match(match,ch,s){
var c = (cljs.core.count.call(null,match) - (1));
var sub = [cljs.core.str(ch),cljs.core.str(cljs.core.subs.call(null,s,(0),c))].join('');
if(cljs.core._EQ_.call(null,match,sub)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sub,cljs.core.subs.call(null,s,c,cljs.core.count.call(null,s))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,[cljs.core.str(ch),cljs.core.str(s)].join('')], null);
}
});
cljs_time.internal.parse.alpha_QMARK_ = (function cljs_time$internal$parse$alpha_QMARK_(ch){
return cljs.core.re_find.call(null,/[a-zA-Z]/,[cljs.core.str(ch)].join(''));
});
cljs_time.internal.parse.read = (function cljs_time$internal$parse$read(s){
var vec__39099 = s;
var h = cljs.core.nth.call(null,vec__39099,(0),null);
var more = cljs.core.nthnext.call(null,vec__39099,(1));
var f = ((cljs.core._EQ_.call(null,h,"'"))?cljs_time.internal.parse.read_quoted:(cljs.core.truth_(cljs_time.internal.parse.alpha_QMARK_.call(null,h))?cljs_time.internal.parse.read_token:cljs_time.internal.parse.read_punctuation
));
return f.call(null,h,more);
});
cljs_time.internal.parse.read_pattern = (function cljs_time$internal$parse$read_pattern(s){
var s__$1 = s;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__39101 = cljs_time.internal.parse.read.call(null,s__$1);
var h = cljs.core.nth.call(null,vec__39101,(0),null);
var s__$2 = cljs.core.nth.call(null,vec__39101,(1),null);
var out__$1 = cljs.core.conj.call(null,out,h);
if(cljs.core.seq.call(null,s__$2)){
var G__39102 = s__$2;
var G__39103 = out__$1;
s__$1 = G__39102;
out = G__39103;
continue;
} else {
return out__$1;
}
break;
}
});
cljs_time.internal.parse.parse_match = (function cljs_time$internal$parse$parse_match(s,key,match){
var vec__39105 = cljs_time.internal.parse.read_match.call(null,match,cljs.core.first.call(null,s),clojure.string.join.call(null,cljs.core.rest.call(null,s)));
var m = cljs.core.nth.call(null,vec__39105,(0),null);
var s_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__39105,(1),null);
if(cljs.core.truth_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,m], null),s_SINGLEQUOTE_], null);
} else {
return null;
}
});
cljs_time.internal.parse.parse_number = (function cljs_time$internal$parse$parse_number(var_args){
var args39107 = [];
var len__35614__auto___39111 = arguments.length;
var i__35615__auto___39112 = (0);
while(true){
if((i__35615__auto___39112 < len__35614__auto___39111)){
args39107.push((arguments[i__35615__auto___39112]));

var G__39113 = (i__35615__auto___39112 + (1));
i__35615__auto___39112 = G__39113;
continue;
} else {
}
break;
}

var G__39109 = args39107.length;
switch (G__39109) {
case 2:
return cljs_time.internal.parse.parse_number.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.internal.parse.parse_number.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39107.length)].join('')));

}
});

cljs_time.internal.parse.parse_number.cljs$core$IFn$_invoke$arity$2 = (function (s,limit){
return cljs_time.internal.parse.parse_number.call(null,s,(1),limit);
});

cljs_time.internal.parse.parse_number.cljs$core$IFn$_invoke$arity$3 = (function (s,lower,upper){
var vec__39110 = cljs_time.internal.parse.read_while.call(null,(function (p1__39106_SHARP_){
return cljs.core.re_find.call(null,/\d/,p1__39106_SHARP_);
}),s);
var n = cljs.core.nth.call(null,vec__39110,(0),null);
var s__$1 = cljs.core.nth.call(null,vec__39110,(1),null);
if((cljs.core.count.call(null,n) >= lower)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.apply.call(null,cljs.core.str,cljs.core.take.call(null,upper,n))),cljs.core.concat.call(null,cljs.core.drop.call(null,upper,n),s__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parseInt(cljs.core.apply.call(null,cljs.core.str,n)),s__$1], null);
}
});

cljs_time.internal.parse.parse_number.cljs$lang$maxFixedArity = 3;
cljs_time.internal.parse.parse_period = (function cljs_time$internal$parse$parse_period(var_args){
var args39115 = [];
var len__35614__auto___39119 = arguments.length;
var i__35615__auto___39120 = (0);
while(true){
if((i__35615__auto___39120 < len__35614__auto___39119)){
args39115.push((arguments[i__35615__auto___39120]));

var G__39121 = (i__35615__auto___39120 + (1));
i__35615__auto___39120 = G__39121;
continue;
} else {
}
break;
}

var G__39117 = args39115.length;
switch (G__39117) {
case 3:
return cljs_time.internal.parse.parse_period.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.internal.parse.parse_period.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39115.length)].join('')));

}
});

cljs_time.internal.parse.parse_period.cljs$core$IFn$_invoke$arity$3 = (function (s,period,limit){
return cljs_time.internal.parse.parse_period.call(null,s,period,(1),limit);
});

cljs_time.internal.parse.parse_period.cljs$core$IFn$_invoke$arity$4 = (function (s,period,lower,upper){
var vec__39118 = cljs_time.internal.parse.parse_number.call(null,s,lower,upper);
var n = cljs.core.nth.call(null,vec__39118,(0),null);
var s__$1 = cljs.core.nth.call(null,vec__39118,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [period,n], null),s__$1], null);
});

cljs_time.internal.parse.parse_period.cljs$lang$maxFixedArity = 4;
cljs_time.internal.parse.parse_year = (function cljs_time$internal$parse$parse_year(var_args){
var args39123 = [];
var len__35614__auto___39126 = arguments.length;
var i__35615__auto___39127 = (0);
while(true){
if((i__35615__auto___39127 < len__35614__auto___39126)){
args39123.push((arguments[i__35615__auto___39127]));

var G__39128 = (i__35615__auto___39127 + (1));
i__35615__auto___39127 = G__39128;
continue;
} else {
}
break;
}

var G__39125 = args39123.length;
switch (G__39125) {
case 1:
return cljs_time.internal.parse.parse_year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.parse.parse_year.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39123.length)].join('')));

}
});

cljs_time.internal.parse.parse_year.cljs$core$IFn$_invoke$arity$1 = (function (limit){
return cljs_time.internal.parse.parse_year.call(null,(1),limit);
});

cljs_time.internal.parse.parse_year.cljs$core$IFn$_invoke$arity$2 = (function (lower,upper){
return (function (s){
return cljs_time.internal.parse.parse_period.call(null,s,new cljs.core.Keyword(null,"years","years",-1298579689),lower,upper);
});
});

cljs_time.internal.parse.parse_year.cljs$lang$maxFixedArity = 2;
cljs_time.internal.parse.parse_weekyear = (function cljs_time$internal$parse$parse_weekyear(var_args){
var args39130 = [];
var len__35614__auto___39133 = arguments.length;
var i__35615__auto___39134 = (0);
while(true){
if((i__35615__auto___39134 < len__35614__auto___39133)){
args39130.push((arguments[i__35615__auto___39134]));

var G__39135 = (i__35615__auto___39134 + (1));
i__35615__auto___39134 = G__39135;
continue;
} else {
}
break;
}

var G__39132 = args39130.length;
switch (G__39132) {
case 1:
return cljs_time.internal.parse.parse_weekyear.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.parse.parse_weekyear.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39130.length)].join('')));

}
});

cljs_time.internal.parse.parse_weekyear.cljs$core$IFn$_invoke$arity$1 = (function (limit){
return cljs_time.internal.parse.parse_year.call(null,(1),limit);
});

cljs_time.internal.parse.parse_weekyear.cljs$core$IFn$_invoke$arity$2 = (function (lower,upper){
return (function (s){
return cljs_time.internal.parse.parse_period.call(null,s,new cljs.core.Keyword(null,"weekyear","weekyear",-74064500),lower,upper);
});
});

cljs_time.internal.parse.parse_weekyear.cljs$lang$maxFixedArity = 2;
cljs_time.internal.parse.parse_weekyear_week = (function cljs_time$internal$parse$parse_weekyear_week(var_args){
var args39137 = [];
var len__35614__auto___39140 = arguments.length;
var i__35615__auto___39141 = (0);
while(true){
if((i__35615__auto___39141 < len__35614__auto___39140)){
args39137.push((arguments[i__35615__auto___39141]));

var G__39142 = (i__35615__auto___39141 + (1));
i__35615__auto___39141 = G__39142;
continue;
} else {
}
break;
}

var G__39139 = args39137.length;
switch (G__39139) {
case 1:
return cljs_time.internal.parse.parse_weekyear_week.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.parse.parse_weekyear_week.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39137.length)].join('')));

}
});

cljs_time.internal.parse.parse_weekyear_week.cljs$core$IFn$_invoke$arity$1 = (function (limit){
return cljs_time.internal.parse.parse_year.call(null,(1),limit);
});

cljs_time.internal.parse.parse_weekyear_week.cljs$core$IFn$_invoke$arity$2 = (function (lower,upper){
return (function (s){
return cljs_time.internal.parse.parse_period.call(null,s,new cljs.core.Keyword(null,"weekyear-week","weekyear-week",795291571),lower,upper);
});
});

cljs_time.internal.parse.parse_weekyear_week.cljs$lang$maxFixedArity = 2;
cljs_time.internal.parse.parse_month = (function cljs_time$internal$parse$parse_month(var_args){
var args39144 = [];
var len__35614__auto___39147 = arguments.length;
var i__35615__auto___39148 = (0);
while(true){
if((i__35615__auto___39148 < len__35614__auto___39147)){
args39144.push((arguments[i__35615__auto___39148]));

var G__39149 = (i__35615__auto___39148 + (1));
i__35615__auto___39148 = G__39149;
continue;
} else {
}
break;
}

var G__39146 = args39144.length;
switch (G__39146) {
case 1:
return cljs_time.internal.parse.parse_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.parse.parse_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39144.length)].join('')));

}
});

cljs_time.internal.parse.parse_month.cljs$core$IFn$_invoke$arity$1 = (function (limit){
return cljs_time.internal.parse.parse_month.call(null,(1),limit);
});

cljs_time.internal.parse.parse_month.cljs$core$IFn$_invoke$arity$2 = (function (lower,upper){
return (function (s){
return cljs_time.internal.parse.parse_period.call(null,s,new cljs.core.Keyword(null,"months","months",-45571637),lower,upper);
});
});

cljs_time.internal.parse.parse_month.cljs$lang$maxFixedArity = 2;
cljs_time.internal.parse.parse_day = (function cljs_time$internal$parse$parse_day(var_args){
var args39151 = [];
var len__35614__auto___39154 = arguments.length;
var i__35615__auto___39155 = (0);
while(true){
if((i__35615__auto___39155 < len__35614__auto___39154)){
args39151.push((arguments[i__35615__auto___39155]));

var G__39156 = (i__35615__auto___39155 + (1));
i__35615__auto___39155 = G__39156;
continue;
} else {
}
break;
}

var G__39153 = args39151.length;
switch (G__39153) {
case 1:
return cljs_time.internal.parse.parse_day.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.parse.parse_day.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39151.length)].join('')));

}
});

cljs_time.internal.parse.parse_day.cljs$core$IFn$_invoke$arity$1 = (function (limit){
return cljs_time.internal.parse.parse_day.call(null,(1),limit);
});

cljs_time.internal.parse.parse_day.cljs$core$IFn$_invoke$arity$2 = (function (lower,upper){
return (function (s){
return cljs_time.internal.parse.parse_period.call(null,s,new cljs.core.Keyword(null,"days","days",-1394072564),lower,upper);
});
});

cljs_time.internal.parse.parse_day.cljs$lang$maxFixedArity = 2;
cljs_time.internal.parse.parse_hours = (function cljs_time$internal$parse$parse_hours(var_args){
var args39158 = [];
var len__35614__auto___39161 = arguments.length;
var i__35615__auto___39162 = (0);
while(true){
if((i__35615__auto___39162 < len__35614__auto___39161)){
args39158.push((arguments[i__35615__auto___39162]));

var G__39163 = (i__35615__auto___39162 + (1));
i__35615__auto___39162 = G__39163;
continue;
} else {
}
break;
}

var G__39160 = args39158.length;
switch (G__39160) {
case 1:
return cljs_time.internal.parse.parse_hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.parse.parse_hours.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39158.length)].join('')));

}
});

cljs_time.internal.parse.parse_hours.cljs$core$IFn$_invoke$arity$1 = (function (limit){
return cljs_time.internal.parse.parse_hours.call(null,(1),limit);
});

cljs_time.internal.parse.parse_hours.cljs$core$IFn$_invoke$arity$2 = (function (lower,upper){
return (function (s){
return cljs_time.internal.parse.parse_period.call(null,s,new cljs.core.Keyword(null,"hours","hours",58380855),lower,upper);
});
});

cljs_time.internal.parse.parse_hours.cljs$lang$maxFixedArity = 2;
cljs_time.internal.parse.parse_HOURS = (function cljs_time$internal$parse$parse_HOURS(var_args){
var args39165 = [];
var len__35614__auto___39168 = arguments.length;
var i__35615__auto___39169 = (0);
while(true){
if((i__35615__auto___39169 < len__35614__auto___39168)){
args39165.push((arguments[i__35615__auto___39169]));

var G__39170 = (i__35615__auto___39169 + (1));
i__35615__auto___39169 = G__39170;
continue;
} else {
}
break;
}

var G__39167 = args39165.length;
switch (G__39167) {
case 1:
return cljs_time.internal.parse.parse_HOURS.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.parse.parse_HOURS.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39165.length)].join('')));

}
});

cljs_time.internal.parse.parse_HOURS.cljs$core$IFn$_invoke$arity$1 = (function (limit){
return cljs_time.internal.parse.parse_HOURS.call(null,(1),limit);
});

cljs_time.internal.parse.parse_HOURS.cljs$core$IFn$_invoke$arity$2 = (function (lower,upper){
return (function (s){
return cljs_time.internal.parse.parse_period.call(null,s,new cljs.core.Keyword(null,"HOURS","HOURS",-1611068963),lower,upper);
});
});

cljs_time.internal.parse.parse_HOURS.cljs$lang$maxFixedArity = 2;
cljs_time.internal.parse.parse_minutes = (function cljs_time$internal$parse$parse_minutes(var_args){
var args39172 = [];
var len__35614__auto___39175 = arguments.length;
var i__35615__auto___39176 = (0);
while(true){
if((i__35615__auto___39176 < len__35614__auto___39175)){
args39172.push((arguments[i__35615__auto___39176]));

var G__39177 = (i__35615__auto___39176 + (1));
i__35615__auto___39176 = G__39177;
continue;
} else {
}
break;
}

var G__39174 = args39172.length;
switch (G__39174) {
case 1:
return cljs_time.internal.parse.parse_minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.parse.parse_minutes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39172.length)].join('')));

}
});

cljs_time.internal.parse.parse_minutes.cljs$core$IFn$_invoke$arity$1 = (function (limit){
return cljs_time.internal.parse.parse_minutes.call(null,(1),limit);
});

cljs_time.internal.parse.parse_minutes.cljs$core$IFn$_invoke$arity$2 = (function (lower,upper){
return (function (s){
return cljs_time.internal.parse.parse_period.call(null,s,new cljs.core.Keyword(null,"minutes","minutes",1319166394),lower,upper);
});
});

cljs_time.internal.parse.parse_minutes.cljs$lang$maxFixedArity = 2;
cljs_time.internal.parse.parse_seconds = (function cljs_time$internal$parse$parse_seconds(var_args){
var args39179 = [];
var len__35614__auto___39182 = arguments.length;
var i__35615__auto___39183 = (0);
while(true){
if((i__35615__auto___39183 < len__35614__auto___39182)){
args39179.push((arguments[i__35615__auto___39183]));

var G__39184 = (i__35615__auto___39183 + (1));
i__35615__auto___39183 = G__39184;
continue;
} else {
}
break;
}

var G__39181 = args39179.length;
switch (G__39181) {
case 1:
return cljs_time.internal.parse.parse_seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.parse.parse_seconds.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39179.length)].join('')));

}
});

cljs_time.internal.parse.parse_seconds.cljs$core$IFn$_invoke$arity$1 = (function (limit){
return cljs_time.internal.parse.parse_seconds.call(null,(1),limit);
});

cljs_time.internal.parse.parse_seconds.cljs$core$IFn$_invoke$arity$2 = (function (lower,upper){
return (function (s){
return cljs_time.internal.parse.parse_period.call(null,s,new cljs.core.Keyword(null,"seconds","seconds",-445266194),lower,upper);
});
});

cljs_time.internal.parse.parse_seconds.cljs$lang$maxFixedArity = 2;
cljs_time.internal.parse.parse_millis = (function cljs_time$internal$parse$parse_millis(var_args){
var args39186 = [];
var len__35614__auto___39189 = arguments.length;
var i__35615__auto___39190 = (0);
while(true){
if((i__35615__auto___39190 < len__35614__auto___39189)){
args39186.push((arguments[i__35615__auto___39190]));

var G__39191 = (i__35615__auto___39190 + (1));
i__35615__auto___39190 = G__39191;
continue;
} else {
}
break;
}

var G__39188 = args39186.length;
switch (G__39188) {
case 1:
return cljs_time.internal.parse.parse_millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.parse.parse_millis.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39186.length)].join('')));

}
});

cljs_time.internal.parse.parse_millis.cljs$core$IFn$_invoke$arity$1 = (function (limit){
return cljs_time.internal.parse.parse_millis.call(null,(1),limit);
});

cljs_time.internal.parse.parse_millis.cljs$core$IFn$_invoke$arity$2 = (function (lower,upper){
return (function (s){
return cljs_time.internal.parse.parse_period.call(null,s,new cljs.core.Keyword(null,"millis","millis",-1338288387),lower,upper);
});
});

cljs_time.internal.parse.parse_millis.cljs$lang$maxFixedArity = 2;
cljs_time.internal.parse.timezone_adj = (function cljs_time$internal$parse$timezone_adj(sign,hh,mm){
var hh__$1 = parseInt(hh,(10));
var mm__$1 = parseInt(mm,(10));
var mins = ((hh__$1 * (60)) + mm__$1);
var adj_fn = ((cljs.core._EQ_.call(null,sign,"+"))?cljs.core._:cljs.core._PLUS_);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timezone","timezone",1831928099),(new goog.date.Interval(goog.date.Interval.MINUTES,adj_fn.call(null,mins)))], null);
});
cljs_time.internal.parse.parse_timezone = (function cljs_time$internal$parse$parse_timezone(fmt){
return (function (s){
var vec__39202 = s;
var h = cljs.core.nth.call(null,vec__39202,(0),null);
var more = cljs.core.nthnext.call(null,vec__39202,(1));
var err = cljs.core.ex_info.call(null,[cljs.core.str("Invalid timezone format: "),cljs.core.str(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-error","parse-error",255902478)], null));
var dddd = ((function (vec__39202,h,more,err){
return (function (p1__39193_SHARP_){
var tz_QMARK_ = clojure.string.join.call(null,cljs.core.take.call(null,(4),more));
var temp__4657__auto__ = cljs.core.re_find.call(null,/^(\d{2})(\d{2})/,tz_QMARK_);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__39203 = temp__4657__auto__;
var _ = cljs.core.nth.call(null,vec__39203,(0),null);
var hh = cljs.core.nth.call(null,vec__39203,(1),null);
var mm = cljs.core.nth.call(null,vec__39203,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.internal.parse.timezone_adj.call(null,p1__39193_SHARP_,hh,mm),cljs.core.drop.call(null,(4),more)], null);
} else {
return null;
}
});})(vec__39202,h,more,err))
;
var long$ = ((function (vec__39202,h,more,err,dddd){
return (function (p1__39194_SHARP_){
var tz_QMARK_ = clojure.string.join.call(null,cljs.core.take.call(null,(5),more));
var temp__4657__auto__ = cljs.core.re_find.call(null,/^(\d{2}):(\d{2})/,tz_QMARK_);
if(cljs.core.truth_(temp__4657__auto__)){
var vec__39204 = temp__4657__auto__;
var _ = cljs.core.nth.call(null,vec__39204,(0),null);
var hh = cljs.core.nth.call(null,vec__39204,(1),null);
var mm = cljs.core.nth.call(null,vec__39204,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.internal.parse.timezone_adj.call(null,p1__39194_SHARP_,hh,mm),cljs.core.drop.call(null,(5),more)], null);
} else {
return null;
}
});})(vec__39202,h,more,err,dddd))
;
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["+",null,"-",null], null), null).call(null,h))){
var G__39205 = (((fmt instanceof cljs.core.Keyword))?fmt.fqn:null);
switch (G__39205) {
case "dddd":
var or__34556__auto__ = dddd.call(null,h);
if(cljs.core.truth_(or__34556__auto__)){
return or__34556__auto__;
} else {
var or__34556__auto____$1 = long$.call(null,h);
if(cljs.core.truth_(or__34556__auto____$1)){
return or__34556__auto____$1;
} else {
throw err;
}
}

break;
case "long":
var or__34556__auto__ = dddd.call(null,h);
if(cljs.core.truth_(or__34556__auto__)){
return or__34556__auto__;
} else {
var or__34556__auto____$1 = long$.call(null,h);
if(cljs.core.truth_(or__34556__auto____$1)){
return or__34556__auto____$1;
} else {
throw err;
}
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(fmt)].join('')));

}
} else {
if(cljs.core._EQ_.call(null,h,"Z")){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timezone","timezone",1831928099),cljs_time.internal.parse.timezone_adj.call(null,cljs.core._PLUS_,"0","0")], null)], null);
} else {
var G__39206 = (((fmt instanceof cljs.core.Keyword))?fmt.fqn:null);
switch (G__39206) {
case "abbr":
var tz_QMARK_ = cljs.core.take.call(null,(3),s);
var vec__39207 = cljs_time.internal.parse.read_while.call(null,((function (tz_QMARK_,G__39206,vec__39202,h,more,err,dddd,long$){
return (function (p1__39195_SHARP_){
return cljs.core.re_find.call(null,/[A-Z]/,p1__39195_SHARP_);
});})(tz_QMARK_,G__39206,vec__39202,h,more,err,dddd,long$))
,tz_QMARK_);
var tz = cljs.core.nth.call(null,vec__39207,(0),null);
var _ = cljs.core.nth.call(null,vec__39207,(1),null);
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,tz),(3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timezone","timezone",1831928099),clojure.string.join.call(null,tz)], null),cljs.core.drop.call(null,(3),s)], null);
} else {
throw err;
}

break;
case "full":
throw cljs.core.ex_info.call(null,[cljs.core.str("Cannot parse long form timezone:"),cljs.core.str(s)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-error","parse-error",255902478)], null));

break;
default:
throw err;

}

}
}
});
});
cljs_time.internal.parse.parse_meridiem = (function cljs_time$internal$parse$parse_meridiem(){
return (function (s){
var vec__39213 = cljs.core.split_at.call(null,(2),s);
var vec__39214 = cljs.core.nth.call(null,vec__39213,(0),null);
var m = cljs.core.nth.call(null,vec__39214,(0),null);
var n = cljs.core.nth.call(null,vec__39214,(1),null);
var s__$1 = cljs.core.nth.call(null,vec__39213,(1),null);
var meridiem = [cljs.core.str(m),cljs.core.str(n)].join('');
var vec__39215 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["AM",null,"am",null,"pm",null,"PM",null], null), null).call(null,meridiem))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [meridiem,s__$1], null):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["a",null,"p",null], null), null).call(null,m))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, ["a","am","p","pm"], null).call(null,m),cljs.core.cons.call(null,n,s__$1)], null):(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["A",null,"P",null], null), null).call(null,m))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, ["A","am","P","pm"], null).call(null,m),cljs.core.cons.call(null,n,s__$1)], null):null)));
var meridiem__$1 = cljs.core.nth.call(null,vec__39215,(0),null);
var s__$2 = cljs.core.nth.call(null,vec__39215,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meridiem","meridiem",1668960617),cljs.core.keyword.call(null,meridiem__$1)], null),clojure.string.join.call(null,s__$2)], null);
});
});
cljs_time.internal.parse.parse_period_name = (function cljs_time$internal$parse$parse_period_name(s,period,periods,short_QMARK_){
var periods__$1 = cljs.core.concat.call(null,periods,cljs.core.map.call(null,(function (p1__39216_SHARP_){
return cljs.core.subs.call(null,p1__39216_SHARP_,(0),(3));
}),periods));
var vec__39219 = cljs.core.first.call(null,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core._EQ_,s),cljs.core.second),cljs.core.map.call(null,((function (periods__$1){
return (function (p1__39217_SHARP_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39217_SHARP_,cljs_time.internal.parse.replace.call(null,s,cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(p1__39217_SHARP_)].join('')),"")], null);
});})(periods__$1))
,periods__$1)));
var m = cljs.core.nth.call(null,vec__39219,(0),null);
var s__$1 = cljs.core.nth.call(null,vec__39219,(1),null);
if(cljs.core.truth_(m)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [period,cljs.core.mod.call(null,cljs_time.internal.core.index_of.call(null,periods__$1,m),(12))], null),s__$1], null);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Could not parse "),cljs.core.str(cljs.core.name.call(null,period)),cljs.core.str(" name")].join(''),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),new cljs.core.Keyword(null,"sub-type","sub-type",-997954412),new cljs.core.Keyword(null,"period-match-erroro","period-match-erroro",1058444722),new cljs.core.Keyword(null,"period","period",-352129191),period,new cljs.core.Keyword(null,"in","in",-1531184865),s__$1], null));
}
});
cljs_time.internal.parse.parse_month_name = (function cljs_time$internal$parse$parse_month_name(short_QMARK_){
return (function (s){
return cljs.core.update_in.call(null,cljs_time.internal.parse.parse_period_name.call(null,s,new cljs.core.Keyword(null,"months","months",-45571637),cljs_time.internal.core.months,short_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),cljs.core.inc);
});
});
cljs_time.internal.parse.parse_day_name = (function cljs_time$internal$parse$parse_day_name(short_QMARK_){
return (function (s){
return cljs_time.internal.parse.parse_period_name.call(null,s,new cljs.core.Keyword(null,"days","days",-1394072564),cljs_time.internal.core.days,short_QMARK_);
});
});
cljs_time.internal.parse.parse_quoted = (function cljs_time$internal$parse$parse_quoted(quoted){
return (function (s){
var s_SINGLEQUOTE_ = cljs_time.internal.parse.replace.call(null,s,cljs.core.re_pattern.call(null,[cljs.core.str("^"),cljs.core.str(quoted)].join('')),"");
if(cljs.core._EQ_.call(null,s,s_SINGLEQUOTE_)){
throw cljs.core.ex_info.call(null,"Quoted text not found",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.Keyword(null,"parse-quoted","parse-quoted",1180570118)], null));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quoted","quoted",2117344952),quoted], null),s_SINGLEQUOTE_], null);
}
});
});
cljs_time.internal.parse.parse_ordinal_suffix = (function cljs_time$internal$parse$parse_ordinal_suffix(){
return (function (s){
var or__34556__auto__ = cljs_time.internal.parse.parse_match.call(null,s,new cljs.core.Keyword(null,"ordinal-suffix","ordinal-suffix",-1311843199),"st");
if(cljs.core.truth_(or__34556__auto__)){
return or__34556__auto__;
} else {
var or__34556__auto____$1 = cljs_time.internal.parse.parse_match.call(null,s,new cljs.core.Keyword(null,"ordinal-suffix","ordinal-suffix",-1311843199),"nd");
if(cljs.core.truth_(or__34556__auto____$1)){
return or__34556__auto____$1;
} else {
var or__34556__auto____$2 = cljs_time.internal.parse.parse_match.call(null,s,new cljs.core.Keyword(null,"ordinal-suffix","ordinal-suffix",-1311843199),"rd");
if(cljs.core.truth_(or__34556__auto____$2)){
return or__34556__auto____$2;
} else {
return cljs_time.internal.parse.parse_match.call(null,s,new cljs.core.Keyword(null,"ordinal-suffix","ordinal-suffix",-1311843199),"th");
}
}
}
});
});
cljs_time.internal.parse.lookup = (function cljs_time$internal$parse$lookup(p__39220){
var vec__39223 = p__39220;
var t = cljs.core.nth.call(null,vec__39223,(0),null);
var pattern = cljs.core.nth.call(null,vec__39223,(1),null);
if(cljs.core._EQ_.call(null,t,new cljs.core.Keyword(null,"token","token",-1211463215))){
var G__39224 = pattern;
switch (G__39224) {
case "S":
return cljs_time.internal.parse.parse_millis.call(null,(1),(2));

break;
case "SSS":
return cljs_time.internal.parse.parse_millis.call(null,(3),(3));

break;
case "s":
return cljs_time.internal.parse.parse_seconds.call(null,(1),(2));

break;
case "ss":
return cljs_time.internal.parse.parse_seconds.call(null,(2),(2));

break;
case "m":
return cljs_time.internal.parse.parse_minutes.call(null,(1),(2));

break;
case "mm":
return cljs_time.internal.parse.parse_minutes.call(null,(2),(2));

break;
case "h":
return cljs_time.internal.parse.parse_hours.call(null,(1),(2));

break;
case "hh":
return cljs_time.internal.parse.parse_hours.call(null,(2),(2));

break;
case "H":
return cljs_time.internal.parse.parse_HOURS.call(null,(1),(2));

break;
case "HH":
return cljs_time.internal.parse.parse_HOURS.call(null,(2),(2));

break;
case "d":
return cljs_time.internal.parse.parse_day.call(null,(1),(2));

break;
case "dd":
return cljs_time.internal.parse.parse_day.call(null,(2),(2));

break;
case "D":
return cljs_time.internal.parse.parse_day.call(null,(1),(3));

break;
case "DD":
return cljs_time.internal.parse.parse_day.call(null,(2),(3));

break;
case "DDD":
return cljs_time.internal.parse.parse_day.call(null,(3),(3));

break;
case "M":
return cljs_time.internal.parse.parse_month.call(null,(1),(2));

break;
case "MM":
return cljs_time.internal.parse.parse_month.call(null,(2),(2));

break;
case "MMM":
return cljs_time.internal.parse.parse_month_name.call(null,true);

break;
case "MMMM":
return cljs_time.internal.parse.parse_month_name.call(null,false);

break;
case "y":
return cljs_time.internal.parse.parse_year.call(null,(1),(4));

break;
case "yy":
return cljs_time.internal.parse.parse_year.call(null,(2),(2));

break;
case "yyyy":
return cljs_time.internal.parse.parse_year.call(null,(4),(4));

break;
case "Y":
return cljs_time.internal.parse.parse_year.call(null,(1),(4));

break;
case "YY":
return cljs_time.internal.parse.parse_year.call(null,(2),(2));

break;
case "YYYY":
return cljs_time.internal.parse.parse_year.call(null,(4),(4));

break;
case "x":
return cljs_time.internal.parse.parse_weekyear.call(null,(1),(4));

break;
case "xx":
return cljs_time.internal.parse.parse_weekyear.call(null,(2),(2));

break;
case "xxxx":
return cljs_time.internal.parse.parse_weekyear.call(null,(4),(4));

break;
case "w":
return cljs_time.internal.parse.parse_weekyear_week.call(null,(1),(2));

break;
case "ww":
return cljs_time.internal.parse.parse_weekyear_week.call(null,(2),(2));

break;
case "E":
return cljs_time.internal.parse.parse_day_name.call(null,true);

break;
case "EEE":
return cljs_time.internal.parse.parse_day_name.call(null,true);

break;
case "EEEE":
return cljs_time.internal.parse.parse_day_name.call(null,false);

break;
case "a":
return cljs_time.internal.parse.parse_meridiem.call(null);

break;
case "A":
return cljs_time.internal.parse.parse_meridiem.call(null);

break;
case "Z":
return cljs_time.internal.parse.parse_timezone.call(null,new cljs.core.Keyword(null,"dddd","dddd",217016228));

break;
case "ZZ":
return cljs_time.internal.parse.parse_timezone.call(null,new cljs.core.Keyword(null,"long","long",-171452093));

break;
case "ZZZ":
return cljs_time.internal.parse.parse_timezone.call(null,new cljs.core.Keyword(null,"abbr","abbr",2088591884));

break;
case "ZZZZ":
return cljs_time.internal.parse.parse_timezone.call(null,new cljs.core.Keyword(null,"abbr","abbr",2088591884));

break;
case "z":
return cljs_time.internal.parse.parse_timezone.call(null,new cljs.core.Keyword(null,"abbr","abbr",2088591884));

break;
case "zz":
return cljs_time.internal.parse.parse_timezone.call(null,new cljs.core.Keyword(null,"abbr","abbr",2088591884));

break;
case "zzz":
return cljs_time.internal.parse.parse_timezone.call(null,new cljs.core.Keyword(null,"abbr","abbr",2088591884));

break;
case "zzzz":
return cljs_time.internal.parse.parse_timezone.call(null,new cljs.core.Keyword(null,"full","full",436801220));

break;
case "o":
return cljs_time.internal.parse.parse_ordinal_suffix.call(null);

break;
default:
throw cljs.core.ex_info.call(null,[cljs.core.str("Illegal pattern component: "),cljs.core.str(pattern)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"illegal-pattern","illegal-pattern",-1810990520)], null));

}
} else {
return cljs_time.internal.parse.parse_quoted.call(null,pattern);
}
});
cljs_time.internal.parse.parse = (function cljs_time$internal$parse$parse(pattern,value){
var s = value;
var G__39232 = cljs.core.map.call(null,cljs_time.internal.parse.lookup,cljs_time.internal.parse.read_pattern.call(null,pattern));
var vec__39233 = G__39232;
var parser = cljs.core.nth.call(null,vec__39233,(0),null);
var more = cljs.core.nthnext.call(null,vec__39233,(1));
var out = cljs.core.PersistentVector.EMPTY;
var s__$1 = s;
var G__39232__$1 = G__39232;
var out__$1 = out;
while(true){
var s__$2 = s__$1;
var vec__39234 = G__39232__$1;
var parser__$1 = cljs.core.nth.call(null,vec__39234,(0),null);
var more__$1 = cljs.core.nthnext.call(null,vec__39234,(1));
var out__$2 = out__$1;
var err = cljs.core.ex_info.call(null,[cljs.core.str("Invalid format: "),cljs.core.str(value),cljs.core.str(" is malformed at "),cljs.core.str(cljs.core.pr_str.call(null,s__$2))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),new cljs.core.Keyword(null,"sub-type","sub-type",-997954412),new cljs.core.Keyword(null,"invalid-format","invalid-format",-72676108)], null));
if(cljs.core.seq.call(null,s__$2)){
if((parser__$1 == null)){
throw err;
} else {
var vec__39235 = parser__$1.call(null,s__$2);
var value__$1 = cljs.core.nth.call(null,vec__39235,(0),null);
var s__$3 = cljs.core.nth.call(null,vec__39235,(1),null);
var G__39236 = s__$3;
var G__39237 = more__$1;
var G__39238 = cljs.core.conj.call(null,out__$2,value__$1);
s__$1 = G__39236;
G__39232__$1 = G__39237;
out__$1 = G__39238;
continue;
}
} else {
if(cljs.core.truth_(parser__$1)){
throw err;
} else {
return out__$2;
}
}
break;
}
});
cljs_time.internal.parse.compile = (function cljs_time$internal$parse$compile(class$,p__39239,values){
var map__39246 = p__39239;
var map__39246__$1 = ((((!((map__39246 == null)))?((((map__39246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39246):map__39246);
var fmt = map__39246__$1;
var default_year = cljs.core.get.call(null,map__39246__$1,new cljs.core.Keyword(null,"default-year","default-year",1658037695));
var map__39248 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"quoted","quoted",2117344952),null], null), null),cljs.core.first),values));
var map__39248__$1 = ((((!((map__39248 == null)))?((((map__39248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39248):map__39248);
var date_map = map__39248__$1;
var minutes = cljs.core.get.call(null,map__39248__$1,new cljs.core.Keyword(null,"minutes","minutes",1319166394));
var HOURS = cljs.core.get.call(null,map__39248__$1,new cljs.core.Keyword(null,"HOURS","HOURS",-1611068963));
var millis = cljs.core.get.call(null,map__39248__$1,new cljs.core.Keyword(null,"millis","millis",-1338288387));
var timezone = cljs.core.get.call(null,map__39248__$1,new cljs.core.Keyword(null,"timezone","timezone",1831928099));
var meridiem = cljs.core.get.call(null,map__39248__$1,new cljs.core.Keyword(null,"meridiem","meridiem",1668960617));
var months = cljs.core.get.call(null,map__39248__$1,new cljs.core.Keyword(null,"months","months",-45571637));
var days = cljs.core.get.call(null,map__39248__$1,new cljs.core.Keyword(null,"days","days",-1394072564));
var seconds = cljs.core.get.call(null,map__39248__$1,new cljs.core.Keyword(null,"seconds","seconds",-445266194));
var hours = cljs.core.get.call(null,map__39248__$1,new cljs.core.Keyword(null,"hours","hours",58380855));
var years = cljs.core.get.call(null,map__39248__$1,new cljs.core.Keyword(null,"years","years",-1298579689));
var years__$1 = (function (){var or__34556__auto__ = years;
if(cljs.core.truth_(or__34556__auto__)){
return or__34556__auto__;
} else {
var or__34556__auto____$1 = default_year;
if(cljs.core.truth_(or__34556__auto____$1)){
return or__34556__auto____$1;
} else {
return (0);
}
}
})();
var months__$1 = (cljs.core.truth_(months)?(months - (1)):null);
var hours__$1 = (cljs.core.truth_(meridiem)?(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"PM","PM",1356677707),null,new cljs.core.Keyword(null,"pm","pm",1813737428),null], null), null).call(null,meridiem))?(function (){var hours__$1 = (hours + (12));
if(cljs.core._EQ_.call(null,hours__$1,(24))){
return (12);
} else {
return hours__$1;
}
})():((cljs.core._EQ_.call(null,hours,(12)))?(0):hours)):HOURS);
var date_map__$1 = cljs.core.dissoc.call(null,cljs.core.assoc.call(null,date_map,new cljs.core.Keyword(null,"hours","hours",58380855),hours__$1),new cljs.core.Keyword(null,"HOURS","HOURS",-1611068963),new cljs.core.Keyword(null,"meridiem","meridiem",1668960617));
var timezone__$1 = (((timezone instanceof goog.date.Interval))?timezone:(new goog.date.Interval(goog.date.Interval.SECONDS,(0))));
cljs_time.internal.core.valid_date_QMARK_.call(null,date_map__$1);

var G__39250 = (function (){var G__39251 = (((class$ instanceof cljs.core.Keyword))?class$.fqn:null);
switch (G__39251) {
case "goog.date.Date":
return (new goog.date.Date(years__$1,months__$1,days));

break;
case "goog.date.DateTime":
return (new goog.date.DateTime(years__$1,months__$1,days,hours__$1,minutes,seconds,millis));

break;
case "goog.date.UtcDateTime":
return (new goog.date.UtcDateTime(years__$1,months__$1,days,hours__$1,minutes,seconds,millis));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(class$)].join('')));

}
})();
G__39250.add(timezone__$1);

return G__39250;
});

//# sourceMappingURL=parse.js.map