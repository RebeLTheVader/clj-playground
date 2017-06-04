// Compiled by ClojureScript 1.7.228 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args41491 = [];
var len__35614__auto___41497 = arguments.length;
var i__35615__auto___41498 = (0);
while(true){
if((i__35615__auto___41498 < len__35614__auto___41497)){
args41491.push((arguments[i__35615__auto___41498]));

var G__41499 = (i__35615__auto___41498 + (1));
i__35615__auto___41498 = G__41499;
continue;
} else {
}
break;
}

var G__41493 = args41491.length;
switch (G__41493) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41491.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async41494 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41494 = (function (f,blockable,meta41495){
this.f = f;
this.blockable = blockable;
this.meta41495 = meta41495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41496,meta41495__$1){
var self__ = this;
var _41496__$1 = this;
return (new cljs.core.async.t_cljs$core$async41494(self__.f,self__.blockable,meta41495__$1));
});

cljs.core.async.t_cljs$core$async41494.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41496){
var self__ = this;
var _41496__$1 = this;
return self__.meta41495;
});

cljs.core.async.t_cljs$core$async41494.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41494.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async41494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async41494.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41495","meta41495",-797948270,null)], null);
});

cljs.core.async.t_cljs$core$async41494.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41494";

cljs.core.async.t_cljs$core$async41494.cljs$lang$ctorPrWriter = (function (this__35154__auto__,writer__35155__auto__,opt__35156__auto__){
return cljs.core._write.call(null,writer__35155__auto__,"cljs.core.async/t_cljs$core$async41494");
});

cljs.core.async.__GT_t_cljs$core$async41494 = (function cljs$core$async$__GT_t_cljs$core$async41494(f__$1,blockable__$1,meta41495){
return (new cljs.core.async.t_cljs$core$async41494(f__$1,blockable__$1,meta41495));
});

}

return (new cljs.core.async.t_cljs$core$async41494(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args41503 = [];
var len__35614__auto___41506 = arguments.length;
var i__35615__auto___41507 = (0);
while(true){
if((i__35615__auto___41507 < len__35614__auto___41506)){
args41503.push((arguments[i__35615__auto___41507]));

var G__41508 = (i__35615__auto___41507 + (1));
i__35615__auto___41507 = G__41508;
continue;
} else {
}
break;
}

var G__41505 = args41503.length;
switch (G__41505) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41503.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args41510 = [];
var len__35614__auto___41513 = arguments.length;
var i__35615__auto___41514 = (0);
while(true){
if((i__35615__auto___41514 < len__35614__auto___41513)){
args41510.push((arguments[i__35615__auto___41514]));

var G__41515 = (i__35615__auto___41514 + (1));
i__35615__auto___41514 = G__41515;
continue;
} else {
}
break;
}

var G__41512 = args41510.length;
switch (G__41512) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41510.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args41517 = [];
var len__35614__auto___41520 = arguments.length;
var i__35615__auto___41521 = (0);
while(true){
if((i__35615__auto___41521 < len__35614__auto___41520)){
args41517.push((arguments[i__35615__auto___41521]));

var G__41522 = (i__35615__auto___41521 + (1));
i__35615__auto___41521 = G__41522;
continue;
} else {
}
break;
}

var G__41519 = args41517.length;
switch (G__41519) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41517.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_41524 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_41524);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_41524,ret){
return (function (){
return fn1.call(null,val_41524);
});})(val_41524,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args41525 = [];
var len__35614__auto___41528 = arguments.length;
var i__35615__auto___41529 = (0);
while(true){
if((i__35615__auto___41529 < len__35614__auto___41528)){
args41525.push((arguments[i__35615__auto___41529]));

var G__41530 = (i__35615__auto___41529 + (1));
i__35615__auto___41529 = G__41530;
continue;
} else {
}
break;
}

var G__41527 = args41525.length;
switch (G__41527) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41525.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__35459__auto___41532 = n;
var x_41533 = (0);
while(true){
if((x_41533 < n__35459__auto___41532)){
(a[x_41533] = (0));

var G__41534 = (x_41533 + (1));
x_41533 = G__41534;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__41535 = (i + (1));
i = G__41535;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async41539 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41539 = (function (alt_flag,flag,meta41540){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta41540 = meta41540;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_41541,meta41540__$1){
var self__ = this;
var _41541__$1 = this;
return (new cljs.core.async.t_cljs$core$async41539(self__.alt_flag,self__.flag,meta41540__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async41539.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_41541){
var self__ = this;
var _41541__$1 = this;
return self__.meta41540;
});})(flag))
;

cljs.core.async.t_cljs$core$async41539.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41539.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async41539.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41539.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async41539.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41540","meta41540",1905432142,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async41539.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41539.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41539";

cljs.core.async.t_cljs$core$async41539.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__35154__auto__,writer__35155__auto__,opt__35156__auto__){
return cljs.core._write.call(null,writer__35155__auto__,"cljs.core.async/t_cljs$core$async41539");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async41539 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async41539(alt_flag__$1,flag__$1,meta41540){
return (new cljs.core.async.t_cljs$core$async41539(alt_flag__$1,flag__$1,meta41540));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async41539(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async41545 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41545 = (function (alt_handler,flag,cb,meta41546){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta41546 = meta41546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41547,meta41546__$1){
var self__ = this;
var _41547__$1 = this;
return (new cljs.core.async.t_cljs$core$async41545(self__.alt_handler,self__.flag,self__.cb,meta41546__$1));
});

cljs.core.async.t_cljs$core$async41545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41547){
var self__ = this;
var _41547__$1 = this;
return self__.meta41546;
});

cljs.core.async.t_cljs$core$async41545.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async41545.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async41545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async41545.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta41546","meta41546",1685648823,null)], null);
});

cljs.core.async.t_cljs$core$async41545.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41545";

cljs.core.async.t_cljs$core$async41545.cljs$lang$ctorPrWriter = (function (this__35154__auto__,writer__35155__auto__,opt__35156__auto__){
return cljs.core._write.call(null,writer__35155__auto__,"cljs.core.async/t_cljs$core$async41545");
});

cljs.core.async.__GT_t_cljs$core$async41545 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async41545(alt_handler__$1,flag__$1,cb__$1,meta41546){
return (new cljs.core.async.t_cljs$core$async41545(alt_handler__$1,flag__$1,cb__$1,meta41546));
});

}

return (new cljs.core.async.t_cljs$core$async41545(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41548_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41548_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41549_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41549_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__34556__auto__ = wport;
if(cljs.core.truth_(or__34556__auto__)){
return or__34556__auto__;
} else {
return port;
}
})()], null));
} else {
var G__41550 = (i + (1));
i = G__41550;
continue;
}
} else {
return null;
}
break;
}
})();
var or__34556__auto__ = ret;
if(cljs.core.truth_(or__34556__auto__)){
return or__34556__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__34544__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__34544__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__34544__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__35621__auto__ = [];
var len__35614__auto___41556 = arguments.length;
var i__35615__auto___41557 = (0);
while(true){
if((i__35615__auto___41557 < len__35614__auto___41556)){
args__35621__auto__.push((arguments[i__35615__auto___41557]));

var G__41558 = (i__35615__auto___41557 + (1));
i__35615__auto___41557 = G__41558;
continue;
} else {
}
break;
}

var argseq__35622__auto__ = ((((1) < args__35621__auto__.length))?(new cljs.core.IndexedSeq(args__35621__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35622__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__41553){
var map__41554 = p__41553;
var map__41554__$1 = ((((!((map__41554 == null)))?((((map__41554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41554):map__41554);
var opts = map__41554__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq41551){
var G__41552 = cljs.core.first.call(null,seq41551);
var seq41551__$1 = cljs.core.next.call(null,seq41551);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41552,seq41551__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args41559 = [];
var len__35614__auto___41609 = arguments.length;
var i__35615__auto___41610 = (0);
while(true){
if((i__35615__auto___41610 < len__35614__auto___41609)){
args41559.push((arguments[i__35615__auto___41610]));

var G__41611 = (i__35615__auto___41610 + (1));
i__35615__auto___41610 = G__41611;
continue;
} else {
}
break;
}

var G__41561 = args41559.length;
switch (G__41561) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41559.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__38833__auto___41613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto___41613){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto___41613){
return (function (state_41585){
var state_val_41586 = (state_41585[(1)]);
if((state_val_41586 === (7))){
var inst_41581 = (state_41585[(2)]);
var state_41585__$1 = state_41585;
var statearr_41587_41614 = state_41585__$1;
(statearr_41587_41614[(2)] = inst_41581);

(statearr_41587_41614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41586 === (1))){
var state_41585__$1 = state_41585;
var statearr_41588_41615 = state_41585__$1;
(statearr_41588_41615[(2)] = null);

(statearr_41588_41615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41586 === (4))){
var inst_41564 = (state_41585[(7)]);
var inst_41564__$1 = (state_41585[(2)]);
var inst_41565 = (inst_41564__$1 == null);
var state_41585__$1 = (function (){var statearr_41589 = state_41585;
(statearr_41589[(7)] = inst_41564__$1);

return statearr_41589;
})();
if(cljs.core.truth_(inst_41565)){
var statearr_41590_41616 = state_41585__$1;
(statearr_41590_41616[(1)] = (5));

} else {
var statearr_41591_41617 = state_41585__$1;
(statearr_41591_41617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41586 === (13))){
var state_41585__$1 = state_41585;
var statearr_41592_41618 = state_41585__$1;
(statearr_41592_41618[(2)] = null);

(statearr_41592_41618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41586 === (6))){
var inst_41564 = (state_41585[(7)]);
var state_41585__$1 = state_41585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41585__$1,(11),to,inst_41564);
} else {
if((state_val_41586 === (3))){
var inst_41583 = (state_41585[(2)]);
var state_41585__$1 = state_41585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41585__$1,inst_41583);
} else {
if((state_val_41586 === (12))){
var state_41585__$1 = state_41585;
var statearr_41593_41619 = state_41585__$1;
(statearr_41593_41619[(2)] = null);

(statearr_41593_41619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41586 === (2))){
var state_41585__$1 = state_41585;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41585__$1,(4),from);
} else {
if((state_val_41586 === (11))){
var inst_41574 = (state_41585[(2)]);
var state_41585__$1 = state_41585;
if(cljs.core.truth_(inst_41574)){
var statearr_41594_41620 = state_41585__$1;
(statearr_41594_41620[(1)] = (12));

} else {
var statearr_41595_41621 = state_41585__$1;
(statearr_41595_41621[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41586 === (9))){
var state_41585__$1 = state_41585;
var statearr_41596_41622 = state_41585__$1;
(statearr_41596_41622[(2)] = null);

(statearr_41596_41622[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41586 === (5))){
var state_41585__$1 = state_41585;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41597_41623 = state_41585__$1;
(statearr_41597_41623[(1)] = (8));

} else {
var statearr_41598_41624 = state_41585__$1;
(statearr_41598_41624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41586 === (14))){
var inst_41579 = (state_41585[(2)]);
var state_41585__$1 = state_41585;
var statearr_41599_41625 = state_41585__$1;
(statearr_41599_41625[(2)] = inst_41579);

(statearr_41599_41625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41586 === (10))){
var inst_41571 = (state_41585[(2)]);
var state_41585__$1 = state_41585;
var statearr_41600_41626 = state_41585__$1;
(statearr_41600_41626[(2)] = inst_41571);

(statearr_41600_41626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41586 === (8))){
var inst_41568 = cljs.core.async.close_BANG_.call(null,to);
var state_41585__$1 = state_41585;
var statearr_41601_41627 = state_41585__$1;
(statearr_41601_41627[(2)] = inst_41568);

(statearr_41601_41627[(1)] = (10));


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
});})(c__38833__auto___41613))
;
return ((function (switch__38812__auto__,c__38833__auto___41613){
return (function() {
var cljs$core$async$state_machine__38813__auto__ = null;
var cljs$core$async$state_machine__38813__auto____0 = (function (){
var statearr_41605 = [null,null,null,null,null,null,null,null];
(statearr_41605[(0)] = cljs$core$async$state_machine__38813__auto__);

(statearr_41605[(1)] = (1));

return statearr_41605;
});
var cljs$core$async$state_machine__38813__auto____1 = (function (state_41585){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_41585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e41606){if((e41606 instanceof Object)){
var ex__38816__auto__ = e41606;
var statearr_41607_41628 = state_41585;
(statearr_41607_41628[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41629 = state_41585;
state_41585 = G__41629;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
cljs$core$async$state_machine__38813__auto__ = function(state_41585){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38813__auto____1.call(this,state_41585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38813__auto____0;
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38813__auto____1;
return cljs$core$async$state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto___41613))
})();
var state__38835__auto__ = (function (){var statearr_41608 = f__38834__auto__.call(null);
(statearr_41608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto___41613);

return statearr_41608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto___41613))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__41813){
var vec__41814 = p__41813;
var v = cljs.core.nth.call(null,vec__41814,(0),null);
var p = cljs.core.nth.call(null,vec__41814,(1),null);
var job = vec__41814;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__38833__auto___41996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto___41996,res,vec__41814,v,p,job,jobs,results){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto___41996,res,vec__41814,v,p,job,jobs,results){
return (function (state_41819){
var state_val_41820 = (state_41819[(1)]);
if((state_val_41820 === (1))){
var state_41819__$1 = state_41819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41819__$1,(2),res,v);
} else {
if((state_val_41820 === (2))){
var inst_41816 = (state_41819[(2)]);
var inst_41817 = cljs.core.async.close_BANG_.call(null,res);
var state_41819__$1 = (function (){var statearr_41821 = state_41819;
(statearr_41821[(7)] = inst_41816);

return statearr_41821;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41819__$1,inst_41817);
} else {
return null;
}
}
});})(c__38833__auto___41996,res,vec__41814,v,p,job,jobs,results))
;
return ((function (switch__38812__auto__,c__38833__auto___41996,res,vec__41814,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____0 = (function (){
var statearr_41825 = [null,null,null,null,null,null,null,null];
(statearr_41825[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__);

(statearr_41825[(1)] = (1));

return statearr_41825;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____1 = (function (state_41819){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_41819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e41826){if((e41826 instanceof Object)){
var ex__38816__auto__ = e41826;
var statearr_41827_41997 = state_41819;
(statearr_41827_41997[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41826;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41998 = state_41819;
state_41819 = G__41998;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__ = function(state_41819){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____1.call(this,state_41819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto___41996,res,vec__41814,v,p,job,jobs,results))
})();
var state__38835__auto__ = (function (){var statearr_41828 = f__38834__auto__.call(null);
(statearr_41828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto___41996);

return statearr_41828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto___41996,res,vec__41814,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__41829){
var vec__41830 = p__41829;
var v = cljs.core.nth.call(null,vec__41830,(0),null);
var p = cljs.core.nth.call(null,vec__41830,(1),null);
var job = vec__41830;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__35459__auto___41999 = n;
var __42000 = (0);
while(true){
if((__42000 < n__35459__auto___41999)){
var G__41831_42001 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__41831_42001) {
case "compute":
var c__38833__auto___42003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42000,c__38833__auto___42003,G__41831_42001,n__35459__auto___41999,jobs,results,process,async){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (__42000,c__38833__auto___42003,G__41831_42001,n__35459__auto___41999,jobs,results,process,async){
return (function (state_41844){
var state_val_41845 = (state_41844[(1)]);
if((state_val_41845 === (1))){
var state_41844__$1 = state_41844;
var statearr_41846_42004 = state_41844__$1;
(statearr_41846_42004[(2)] = null);

(statearr_41846_42004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41845 === (2))){
var state_41844__$1 = state_41844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41844__$1,(4),jobs);
} else {
if((state_val_41845 === (3))){
var inst_41842 = (state_41844[(2)]);
var state_41844__$1 = state_41844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41844__$1,inst_41842);
} else {
if((state_val_41845 === (4))){
var inst_41834 = (state_41844[(2)]);
var inst_41835 = process.call(null,inst_41834);
var state_41844__$1 = state_41844;
if(cljs.core.truth_(inst_41835)){
var statearr_41847_42005 = state_41844__$1;
(statearr_41847_42005[(1)] = (5));

} else {
var statearr_41848_42006 = state_41844__$1;
(statearr_41848_42006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41845 === (5))){
var state_41844__$1 = state_41844;
var statearr_41849_42007 = state_41844__$1;
(statearr_41849_42007[(2)] = null);

(statearr_41849_42007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41845 === (6))){
var state_41844__$1 = state_41844;
var statearr_41850_42008 = state_41844__$1;
(statearr_41850_42008[(2)] = null);

(statearr_41850_42008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41845 === (7))){
var inst_41840 = (state_41844[(2)]);
var state_41844__$1 = state_41844;
var statearr_41851_42009 = state_41844__$1;
(statearr_41851_42009[(2)] = inst_41840);

(statearr_41851_42009[(1)] = (3));


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
});})(__42000,c__38833__auto___42003,G__41831_42001,n__35459__auto___41999,jobs,results,process,async))
;
return ((function (__42000,switch__38812__auto__,c__38833__auto___42003,G__41831_42001,n__35459__auto___41999,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____0 = (function (){
var statearr_41855 = [null,null,null,null,null,null,null];
(statearr_41855[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__);

(statearr_41855[(1)] = (1));

return statearr_41855;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____1 = (function (state_41844){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_41844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e41856){if((e41856 instanceof Object)){
var ex__38816__auto__ = e41856;
var statearr_41857_42010 = state_41844;
(statearr_41857_42010[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41856;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42011 = state_41844;
state_41844 = G__42011;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__ = function(state_41844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____1.call(this,state_41844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__;
})()
;})(__42000,switch__38812__auto__,c__38833__auto___42003,G__41831_42001,n__35459__auto___41999,jobs,results,process,async))
})();
var state__38835__auto__ = (function (){var statearr_41858 = f__38834__auto__.call(null);
(statearr_41858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto___42003);

return statearr_41858;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(__42000,c__38833__auto___42003,G__41831_42001,n__35459__auto___41999,jobs,results,process,async))
);


break;
case "async":
var c__38833__auto___42012 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__42000,c__38833__auto___42012,G__41831_42001,n__35459__auto___41999,jobs,results,process,async){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (__42000,c__38833__auto___42012,G__41831_42001,n__35459__auto___41999,jobs,results,process,async){
return (function (state_41871){
var state_val_41872 = (state_41871[(1)]);
if((state_val_41872 === (1))){
var state_41871__$1 = state_41871;
var statearr_41873_42013 = state_41871__$1;
(statearr_41873_42013[(2)] = null);

(statearr_41873_42013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41872 === (2))){
var state_41871__$1 = state_41871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41871__$1,(4),jobs);
} else {
if((state_val_41872 === (3))){
var inst_41869 = (state_41871[(2)]);
var state_41871__$1 = state_41871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41871__$1,inst_41869);
} else {
if((state_val_41872 === (4))){
var inst_41861 = (state_41871[(2)]);
var inst_41862 = async.call(null,inst_41861);
var state_41871__$1 = state_41871;
if(cljs.core.truth_(inst_41862)){
var statearr_41874_42014 = state_41871__$1;
(statearr_41874_42014[(1)] = (5));

} else {
var statearr_41875_42015 = state_41871__$1;
(statearr_41875_42015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41872 === (5))){
var state_41871__$1 = state_41871;
var statearr_41876_42016 = state_41871__$1;
(statearr_41876_42016[(2)] = null);

(statearr_41876_42016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41872 === (6))){
var state_41871__$1 = state_41871;
var statearr_41877_42017 = state_41871__$1;
(statearr_41877_42017[(2)] = null);

(statearr_41877_42017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41872 === (7))){
var inst_41867 = (state_41871[(2)]);
var state_41871__$1 = state_41871;
var statearr_41878_42018 = state_41871__$1;
(statearr_41878_42018[(2)] = inst_41867);

(statearr_41878_42018[(1)] = (3));


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
});})(__42000,c__38833__auto___42012,G__41831_42001,n__35459__auto___41999,jobs,results,process,async))
;
return ((function (__42000,switch__38812__auto__,c__38833__auto___42012,G__41831_42001,n__35459__auto___41999,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____0 = (function (){
var statearr_41882 = [null,null,null,null,null,null,null];
(statearr_41882[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__);

(statearr_41882[(1)] = (1));

return statearr_41882;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____1 = (function (state_41871){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_41871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e41883){if((e41883 instanceof Object)){
var ex__38816__auto__ = e41883;
var statearr_41884_42019 = state_41871;
(statearr_41884_42019[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42020 = state_41871;
state_41871 = G__42020;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__ = function(state_41871){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____1.call(this,state_41871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__;
})()
;})(__42000,switch__38812__auto__,c__38833__auto___42012,G__41831_42001,n__35459__auto___41999,jobs,results,process,async))
})();
var state__38835__auto__ = (function (){var statearr_41885 = f__38834__auto__.call(null);
(statearr_41885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto___42012);

return statearr_41885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(__42000,c__38833__auto___42012,G__41831_42001,n__35459__auto___41999,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__42021 = (__42000 + (1));
__42000 = G__42021;
continue;
} else {
}
break;
}

var c__38833__auto___42022 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto___42022,jobs,results,process,async){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto___42022,jobs,results,process,async){
return (function (state_41907){
var state_val_41908 = (state_41907[(1)]);
if((state_val_41908 === (1))){
var state_41907__$1 = state_41907;
var statearr_41909_42023 = state_41907__$1;
(statearr_41909_42023[(2)] = null);

(statearr_41909_42023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41908 === (2))){
var state_41907__$1 = state_41907;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41907__$1,(4),from);
} else {
if((state_val_41908 === (3))){
var inst_41905 = (state_41907[(2)]);
var state_41907__$1 = state_41907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41907__$1,inst_41905);
} else {
if((state_val_41908 === (4))){
var inst_41888 = (state_41907[(7)]);
var inst_41888__$1 = (state_41907[(2)]);
var inst_41889 = (inst_41888__$1 == null);
var state_41907__$1 = (function (){var statearr_41910 = state_41907;
(statearr_41910[(7)] = inst_41888__$1);

return statearr_41910;
})();
if(cljs.core.truth_(inst_41889)){
var statearr_41911_42024 = state_41907__$1;
(statearr_41911_42024[(1)] = (5));

} else {
var statearr_41912_42025 = state_41907__$1;
(statearr_41912_42025[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41908 === (5))){
var inst_41891 = cljs.core.async.close_BANG_.call(null,jobs);
var state_41907__$1 = state_41907;
var statearr_41913_42026 = state_41907__$1;
(statearr_41913_42026[(2)] = inst_41891);

(statearr_41913_42026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41908 === (6))){
var inst_41893 = (state_41907[(8)]);
var inst_41888 = (state_41907[(7)]);
var inst_41893__$1 = cljs.core.async.chan.call(null,(1));
var inst_41894 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41895 = [inst_41888,inst_41893__$1];
var inst_41896 = (new cljs.core.PersistentVector(null,2,(5),inst_41894,inst_41895,null));
var state_41907__$1 = (function (){var statearr_41914 = state_41907;
(statearr_41914[(8)] = inst_41893__$1);

return statearr_41914;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41907__$1,(8),jobs,inst_41896);
} else {
if((state_val_41908 === (7))){
var inst_41903 = (state_41907[(2)]);
var state_41907__$1 = state_41907;
var statearr_41915_42027 = state_41907__$1;
(statearr_41915_42027[(2)] = inst_41903);

(statearr_41915_42027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41908 === (8))){
var inst_41893 = (state_41907[(8)]);
var inst_41898 = (state_41907[(2)]);
var state_41907__$1 = (function (){var statearr_41916 = state_41907;
(statearr_41916[(9)] = inst_41898);

return statearr_41916;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41907__$1,(9),results,inst_41893);
} else {
if((state_val_41908 === (9))){
var inst_41900 = (state_41907[(2)]);
var state_41907__$1 = (function (){var statearr_41917 = state_41907;
(statearr_41917[(10)] = inst_41900);

return statearr_41917;
})();
var statearr_41918_42028 = state_41907__$1;
(statearr_41918_42028[(2)] = null);

(statearr_41918_42028[(1)] = (2));


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
});})(c__38833__auto___42022,jobs,results,process,async))
;
return ((function (switch__38812__auto__,c__38833__auto___42022,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____0 = (function (){
var statearr_41922 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41922[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__);

(statearr_41922[(1)] = (1));

return statearr_41922;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____1 = (function (state_41907){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_41907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e41923){if((e41923 instanceof Object)){
var ex__38816__auto__ = e41923;
var statearr_41924_42029 = state_41907;
(statearr_41924_42029[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42030 = state_41907;
state_41907 = G__42030;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__ = function(state_41907){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____1.call(this,state_41907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto___42022,jobs,results,process,async))
})();
var state__38835__auto__ = (function (){var statearr_41925 = f__38834__auto__.call(null);
(statearr_41925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto___42022);

return statearr_41925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto___42022,jobs,results,process,async))
);


var c__38833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto__,jobs,results,process,async){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto__,jobs,results,process,async){
return (function (state_41963){
var state_val_41964 = (state_41963[(1)]);
if((state_val_41964 === (7))){
var inst_41959 = (state_41963[(2)]);
var state_41963__$1 = state_41963;
var statearr_41965_42031 = state_41963__$1;
(statearr_41965_42031[(2)] = inst_41959);

(statearr_41965_42031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41964 === (20))){
var state_41963__$1 = state_41963;
var statearr_41966_42032 = state_41963__$1;
(statearr_41966_42032[(2)] = null);

(statearr_41966_42032[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41964 === (1))){
var state_41963__$1 = state_41963;
var statearr_41967_42033 = state_41963__$1;
(statearr_41967_42033[(2)] = null);

(statearr_41967_42033[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41964 === (4))){
var inst_41928 = (state_41963[(7)]);
var inst_41928__$1 = (state_41963[(2)]);
var inst_41929 = (inst_41928__$1 == null);
var state_41963__$1 = (function (){var statearr_41968 = state_41963;
(statearr_41968[(7)] = inst_41928__$1);

return statearr_41968;
})();
if(cljs.core.truth_(inst_41929)){
var statearr_41969_42034 = state_41963__$1;
(statearr_41969_42034[(1)] = (5));

} else {
var statearr_41970_42035 = state_41963__$1;
(statearr_41970_42035[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41964 === (15))){
var inst_41941 = (state_41963[(8)]);
var state_41963__$1 = state_41963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41963__$1,(18),to,inst_41941);
} else {
if((state_val_41964 === (21))){
var inst_41954 = (state_41963[(2)]);
var state_41963__$1 = state_41963;
var statearr_41971_42036 = state_41963__$1;
(statearr_41971_42036[(2)] = inst_41954);

(statearr_41971_42036[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41964 === (13))){
var inst_41956 = (state_41963[(2)]);
var state_41963__$1 = (function (){var statearr_41972 = state_41963;
(statearr_41972[(9)] = inst_41956);

return statearr_41972;
})();
var statearr_41973_42037 = state_41963__$1;
(statearr_41973_42037[(2)] = null);

(statearr_41973_42037[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41964 === (6))){
var inst_41928 = (state_41963[(7)]);
var state_41963__$1 = state_41963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41963__$1,(11),inst_41928);
} else {
if((state_val_41964 === (17))){
var inst_41949 = (state_41963[(2)]);
var state_41963__$1 = state_41963;
if(cljs.core.truth_(inst_41949)){
var statearr_41974_42038 = state_41963__$1;
(statearr_41974_42038[(1)] = (19));

} else {
var statearr_41975_42039 = state_41963__$1;
(statearr_41975_42039[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41964 === (3))){
var inst_41961 = (state_41963[(2)]);
var state_41963__$1 = state_41963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41963__$1,inst_41961);
} else {
if((state_val_41964 === (12))){
var inst_41938 = (state_41963[(10)]);
var state_41963__$1 = state_41963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41963__$1,(14),inst_41938);
} else {
if((state_val_41964 === (2))){
var state_41963__$1 = state_41963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41963__$1,(4),results);
} else {
if((state_val_41964 === (19))){
var state_41963__$1 = state_41963;
var statearr_41976_42040 = state_41963__$1;
(statearr_41976_42040[(2)] = null);

(statearr_41976_42040[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41964 === (11))){
var inst_41938 = (state_41963[(2)]);
var state_41963__$1 = (function (){var statearr_41977 = state_41963;
(statearr_41977[(10)] = inst_41938);

return statearr_41977;
})();
var statearr_41978_42041 = state_41963__$1;
(statearr_41978_42041[(2)] = null);

(statearr_41978_42041[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41964 === (9))){
var state_41963__$1 = state_41963;
var statearr_41979_42042 = state_41963__$1;
(statearr_41979_42042[(2)] = null);

(statearr_41979_42042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41964 === (5))){
var state_41963__$1 = state_41963;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41980_42043 = state_41963__$1;
(statearr_41980_42043[(1)] = (8));

} else {
var statearr_41981_42044 = state_41963__$1;
(statearr_41981_42044[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41964 === (14))){
var inst_41943 = (state_41963[(11)]);
var inst_41941 = (state_41963[(8)]);
var inst_41941__$1 = (state_41963[(2)]);
var inst_41942 = (inst_41941__$1 == null);
var inst_41943__$1 = cljs.core.not.call(null,inst_41942);
var state_41963__$1 = (function (){var statearr_41982 = state_41963;
(statearr_41982[(11)] = inst_41943__$1);

(statearr_41982[(8)] = inst_41941__$1);

return statearr_41982;
})();
if(inst_41943__$1){
var statearr_41983_42045 = state_41963__$1;
(statearr_41983_42045[(1)] = (15));

} else {
var statearr_41984_42046 = state_41963__$1;
(statearr_41984_42046[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41964 === (16))){
var inst_41943 = (state_41963[(11)]);
var state_41963__$1 = state_41963;
var statearr_41985_42047 = state_41963__$1;
(statearr_41985_42047[(2)] = inst_41943);

(statearr_41985_42047[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41964 === (10))){
var inst_41935 = (state_41963[(2)]);
var state_41963__$1 = state_41963;
var statearr_41986_42048 = state_41963__$1;
(statearr_41986_42048[(2)] = inst_41935);

(statearr_41986_42048[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41964 === (18))){
var inst_41946 = (state_41963[(2)]);
var state_41963__$1 = state_41963;
var statearr_41987_42049 = state_41963__$1;
(statearr_41987_42049[(2)] = inst_41946);

(statearr_41987_42049[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41964 === (8))){
var inst_41932 = cljs.core.async.close_BANG_.call(null,to);
var state_41963__$1 = state_41963;
var statearr_41988_42050 = state_41963__$1;
(statearr_41988_42050[(2)] = inst_41932);

(statearr_41988_42050[(1)] = (10));


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
});})(c__38833__auto__,jobs,results,process,async))
;
return ((function (switch__38812__auto__,c__38833__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____0 = (function (){
var statearr_41992 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41992[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__);

(statearr_41992[(1)] = (1));

return statearr_41992;
});
var cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____1 = (function (state_41963){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_41963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e41993){if((e41993 instanceof Object)){
var ex__38816__auto__ = e41993;
var statearr_41994_42051 = state_41963;
(statearr_41994_42051[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42052 = state_41963;
state_41963 = G__42052;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__ = function(state_41963){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____1.call(this,state_41963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__38813__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto__,jobs,results,process,async))
})();
var state__38835__auto__ = (function (){var statearr_41995 = f__38834__auto__.call(null);
(statearr_41995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto__);

return statearr_41995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto__,jobs,results,process,async))
);

return c__38833__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args42053 = [];
var len__35614__auto___42056 = arguments.length;
var i__35615__auto___42057 = (0);
while(true){
if((i__35615__auto___42057 < len__35614__auto___42056)){
args42053.push((arguments[i__35615__auto___42057]));

var G__42058 = (i__35615__auto___42057 + (1));
i__35615__auto___42057 = G__42058;
continue;
} else {
}
break;
}

var G__42055 = args42053.length;
switch (G__42055) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42053.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args42060 = [];
var len__35614__auto___42063 = arguments.length;
var i__35615__auto___42064 = (0);
while(true){
if((i__35615__auto___42064 < len__35614__auto___42063)){
args42060.push((arguments[i__35615__auto___42064]));

var G__42065 = (i__35615__auto___42064 + (1));
i__35615__auto___42064 = G__42065;
continue;
} else {
}
break;
}

var G__42062 = args42060.length;
switch (G__42062) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42060.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args42067 = [];
var len__35614__auto___42120 = arguments.length;
var i__35615__auto___42121 = (0);
while(true){
if((i__35615__auto___42121 < len__35614__auto___42120)){
args42067.push((arguments[i__35615__auto___42121]));

var G__42122 = (i__35615__auto___42121 + (1));
i__35615__auto___42121 = G__42122;
continue;
} else {
}
break;
}

var G__42069 = args42067.length;
switch (G__42069) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42067.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__38833__auto___42124 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto___42124,tc,fc){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto___42124,tc,fc){
return (function (state_42095){
var state_val_42096 = (state_42095[(1)]);
if((state_val_42096 === (7))){
var inst_42091 = (state_42095[(2)]);
var state_42095__$1 = state_42095;
var statearr_42097_42125 = state_42095__$1;
(statearr_42097_42125[(2)] = inst_42091);

(statearr_42097_42125[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (1))){
var state_42095__$1 = state_42095;
var statearr_42098_42126 = state_42095__$1;
(statearr_42098_42126[(2)] = null);

(statearr_42098_42126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (4))){
var inst_42072 = (state_42095[(7)]);
var inst_42072__$1 = (state_42095[(2)]);
var inst_42073 = (inst_42072__$1 == null);
var state_42095__$1 = (function (){var statearr_42099 = state_42095;
(statearr_42099[(7)] = inst_42072__$1);

return statearr_42099;
})();
if(cljs.core.truth_(inst_42073)){
var statearr_42100_42127 = state_42095__$1;
(statearr_42100_42127[(1)] = (5));

} else {
var statearr_42101_42128 = state_42095__$1;
(statearr_42101_42128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (13))){
var state_42095__$1 = state_42095;
var statearr_42102_42129 = state_42095__$1;
(statearr_42102_42129[(2)] = null);

(statearr_42102_42129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (6))){
var inst_42072 = (state_42095[(7)]);
var inst_42078 = p.call(null,inst_42072);
var state_42095__$1 = state_42095;
if(cljs.core.truth_(inst_42078)){
var statearr_42103_42130 = state_42095__$1;
(statearr_42103_42130[(1)] = (9));

} else {
var statearr_42104_42131 = state_42095__$1;
(statearr_42104_42131[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (3))){
var inst_42093 = (state_42095[(2)]);
var state_42095__$1 = state_42095;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42095__$1,inst_42093);
} else {
if((state_val_42096 === (12))){
var state_42095__$1 = state_42095;
var statearr_42105_42132 = state_42095__$1;
(statearr_42105_42132[(2)] = null);

(statearr_42105_42132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (2))){
var state_42095__$1 = state_42095;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42095__$1,(4),ch);
} else {
if((state_val_42096 === (11))){
var inst_42072 = (state_42095[(7)]);
var inst_42082 = (state_42095[(2)]);
var state_42095__$1 = state_42095;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42095__$1,(8),inst_42082,inst_42072);
} else {
if((state_val_42096 === (9))){
var state_42095__$1 = state_42095;
var statearr_42106_42133 = state_42095__$1;
(statearr_42106_42133[(2)] = tc);

(statearr_42106_42133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (5))){
var inst_42075 = cljs.core.async.close_BANG_.call(null,tc);
var inst_42076 = cljs.core.async.close_BANG_.call(null,fc);
var state_42095__$1 = (function (){var statearr_42107 = state_42095;
(statearr_42107[(8)] = inst_42075);

return statearr_42107;
})();
var statearr_42108_42134 = state_42095__$1;
(statearr_42108_42134[(2)] = inst_42076);

(statearr_42108_42134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (14))){
var inst_42089 = (state_42095[(2)]);
var state_42095__$1 = state_42095;
var statearr_42109_42135 = state_42095__$1;
(statearr_42109_42135[(2)] = inst_42089);

(statearr_42109_42135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (10))){
var state_42095__$1 = state_42095;
var statearr_42110_42136 = state_42095__$1;
(statearr_42110_42136[(2)] = fc);

(statearr_42110_42136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42096 === (8))){
var inst_42084 = (state_42095[(2)]);
var state_42095__$1 = state_42095;
if(cljs.core.truth_(inst_42084)){
var statearr_42111_42137 = state_42095__$1;
(statearr_42111_42137[(1)] = (12));

} else {
var statearr_42112_42138 = state_42095__$1;
(statearr_42112_42138[(1)] = (13));

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
});})(c__38833__auto___42124,tc,fc))
;
return ((function (switch__38812__auto__,c__38833__auto___42124,tc,fc){
return (function() {
var cljs$core$async$state_machine__38813__auto__ = null;
var cljs$core$async$state_machine__38813__auto____0 = (function (){
var statearr_42116 = [null,null,null,null,null,null,null,null,null];
(statearr_42116[(0)] = cljs$core$async$state_machine__38813__auto__);

(statearr_42116[(1)] = (1));

return statearr_42116;
});
var cljs$core$async$state_machine__38813__auto____1 = (function (state_42095){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_42095);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e42117){if((e42117 instanceof Object)){
var ex__38816__auto__ = e42117;
var statearr_42118_42139 = state_42095;
(statearr_42118_42139[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42095);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42117;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42140 = state_42095;
state_42095 = G__42140;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
cljs$core$async$state_machine__38813__auto__ = function(state_42095){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38813__auto____1.call(this,state_42095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38813__auto____0;
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38813__auto____1;
return cljs$core$async$state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto___42124,tc,fc))
})();
var state__38835__auto__ = (function (){var statearr_42119 = f__38834__auto__.call(null);
(statearr_42119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto___42124);

return statearr_42119;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto___42124,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__38833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto__){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto__){
return (function (state_42204){
var state_val_42205 = (state_42204[(1)]);
if((state_val_42205 === (7))){
var inst_42200 = (state_42204[(2)]);
var state_42204__$1 = state_42204;
var statearr_42206_42227 = state_42204__$1;
(statearr_42206_42227[(2)] = inst_42200);

(statearr_42206_42227[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (1))){
var inst_42184 = init;
var state_42204__$1 = (function (){var statearr_42207 = state_42204;
(statearr_42207[(7)] = inst_42184);

return statearr_42207;
})();
var statearr_42208_42228 = state_42204__$1;
(statearr_42208_42228[(2)] = null);

(statearr_42208_42228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (4))){
var inst_42187 = (state_42204[(8)]);
var inst_42187__$1 = (state_42204[(2)]);
var inst_42188 = (inst_42187__$1 == null);
var state_42204__$1 = (function (){var statearr_42209 = state_42204;
(statearr_42209[(8)] = inst_42187__$1);

return statearr_42209;
})();
if(cljs.core.truth_(inst_42188)){
var statearr_42210_42229 = state_42204__$1;
(statearr_42210_42229[(1)] = (5));

} else {
var statearr_42211_42230 = state_42204__$1;
(statearr_42211_42230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (6))){
var inst_42184 = (state_42204[(7)]);
var inst_42187 = (state_42204[(8)]);
var inst_42191 = (state_42204[(9)]);
var inst_42191__$1 = f.call(null,inst_42184,inst_42187);
var inst_42192 = cljs.core.reduced_QMARK_.call(null,inst_42191__$1);
var state_42204__$1 = (function (){var statearr_42212 = state_42204;
(statearr_42212[(9)] = inst_42191__$1);

return statearr_42212;
})();
if(inst_42192){
var statearr_42213_42231 = state_42204__$1;
(statearr_42213_42231[(1)] = (8));

} else {
var statearr_42214_42232 = state_42204__$1;
(statearr_42214_42232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (3))){
var inst_42202 = (state_42204[(2)]);
var state_42204__$1 = state_42204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42204__$1,inst_42202);
} else {
if((state_val_42205 === (2))){
var state_42204__$1 = state_42204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42204__$1,(4),ch);
} else {
if((state_val_42205 === (9))){
var inst_42191 = (state_42204[(9)]);
var inst_42184 = inst_42191;
var state_42204__$1 = (function (){var statearr_42215 = state_42204;
(statearr_42215[(7)] = inst_42184);

return statearr_42215;
})();
var statearr_42216_42233 = state_42204__$1;
(statearr_42216_42233[(2)] = null);

(statearr_42216_42233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (5))){
var inst_42184 = (state_42204[(7)]);
var state_42204__$1 = state_42204;
var statearr_42217_42234 = state_42204__$1;
(statearr_42217_42234[(2)] = inst_42184);

(statearr_42217_42234[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (10))){
var inst_42198 = (state_42204[(2)]);
var state_42204__$1 = state_42204;
var statearr_42218_42235 = state_42204__$1;
(statearr_42218_42235[(2)] = inst_42198);

(statearr_42218_42235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42205 === (8))){
var inst_42191 = (state_42204[(9)]);
var inst_42194 = cljs.core.deref.call(null,inst_42191);
var state_42204__$1 = state_42204;
var statearr_42219_42236 = state_42204__$1;
(statearr_42219_42236[(2)] = inst_42194);

(statearr_42219_42236[(1)] = (10));


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
});})(c__38833__auto__))
;
return ((function (switch__38812__auto__,c__38833__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__38813__auto__ = null;
var cljs$core$async$reduce_$_state_machine__38813__auto____0 = (function (){
var statearr_42223 = [null,null,null,null,null,null,null,null,null,null];
(statearr_42223[(0)] = cljs$core$async$reduce_$_state_machine__38813__auto__);

(statearr_42223[(1)] = (1));

return statearr_42223;
});
var cljs$core$async$reduce_$_state_machine__38813__auto____1 = (function (state_42204){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_42204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e42224){if((e42224 instanceof Object)){
var ex__38816__auto__ = e42224;
var statearr_42225_42237 = state_42204;
(statearr_42225_42237[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42224;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42238 = state_42204;
state_42204 = G__42238;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__38813__auto__ = function(state_42204){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__38813__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__38813__auto____1.call(this,state_42204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__38813__auto____0;
cljs$core$async$reduce_$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__38813__auto____1;
return cljs$core$async$reduce_$_state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto__))
})();
var state__38835__auto__ = (function (){var statearr_42226 = f__38834__auto__.call(null);
(statearr_42226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto__);

return statearr_42226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto__))
);

return c__38833__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args42239 = [];
var len__35614__auto___42291 = arguments.length;
var i__35615__auto___42292 = (0);
while(true){
if((i__35615__auto___42292 < len__35614__auto___42291)){
args42239.push((arguments[i__35615__auto___42292]));

var G__42293 = (i__35615__auto___42292 + (1));
i__35615__auto___42292 = G__42293;
continue;
} else {
}
break;
}

var G__42241 = args42239.length;
switch (G__42241) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42239.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__38833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto__){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto__){
return (function (state_42266){
var state_val_42267 = (state_42266[(1)]);
if((state_val_42267 === (7))){
var inst_42248 = (state_42266[(2)]);
var state_42266__$1 = state_42266;
var statearr_42268_42295 = state_42266__$1;
(statearr_42268_42295[(2)] = inst_42248);

(statearr_42268_42295[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42267 === (1))){
var inst_42242 = cljs.core.seq.call(null,coll);
var inst_42243 = inst_42242;
var state_42266__$1 = (function (){var statearr_42269 = state_42266;
(statearr_42269[(7)] = inst_42243);

return statearr_42269;
})();
var statearr_42270_42296 = state_42266__$1;
(statearr_42270_42296[(2)] = null);

(statearr_42270_42296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42267 === (4))){
var inst_42243 = (state_42266[(7)]);
var inst_42246 = cljs.core.first.call(null,inst_42243);
var state_42266__$1 = state_42266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42266__$1,(7),ch,inst_42246);
} else {
if((state_val_42267 === (13))){
var inst_42260 = (state_42266[(2)]);
var state_42266__$1 = state_42266;
var statearr_42271_42297 = state_42266__$1;
(statearr_42271_42297[(2)] = inst_42260);

(statearr_42271_42297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42267 === (6))){
var inst_42251 = (state_42266[(2)]);
var state_42266__$1 = state_42266;
if(cljs.core.truth_(inst_42251)){
var statearr_42272_42298 = state_42266__$1;
(statearr_42272_42298[(1)] = (8));

} else {
var statearr_42273_42299 = state_42266__$1;
(statearr_42273_42299[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42267 === (3))){
var inst_42264 = (state_42266[(2)]);
var state_42266__$1 = state_42266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42266__$1,inst_42264);
} else {
if((state_val_42267 === (12))){
var state_42266__$1 = state_42266;
var statearr_42274_42300 = state_42266__$1;
(statearr_42274_42300[(2)] = null);

(statearr_42274_42300[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42267 === (2))){
var inst_42243 = (state_42266[(7)]);
var state_42266__$1 = state_42266;
if(cljs.core.truth_(inst_42243)){
var statearr_42275_42301 = state_42266__$1;
(statearr_42275_42301[(1)] = (4));

} else {
var statearr_42276_42302 = state_42266__$1;
(statearr_42276_42302[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42267 === (11))){
var inst_42257 = cljs.core.async.close_BANG_.call(null,ch);
var state_42266__$1 = state_42266;
var statearr_42277_42303 = state_42266__$1;
(statearr_42277_42303[(2)] = inst_42257);

(statearr_42277_42303[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42267 === (9))){
var state_42266__$1 = state_42266;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42278_42304 = state_42266__$1;
(statearr_42278_42304[(1)] = (11));

} else {
var statearr_42279_42305 = state_42266__$1;
(statearr_42279_42305[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42267 === (5))){
var inst_42243 = (state_42266[(7)]);
var state_42266__$1 = state_42266;
var statearr_42280_42306 = state_42266__$1;
(statearr_42280_42306[(2)] = inst_42243);

(statearr_42280_42306[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42267 === (10))){
var inst_42262 = (state_42266[(2)]);
var state_42266__$1 = state_42266;
var statearr_42281_42307 = state_42266__$1;
(statearr_42281_42307[(2)] = inst_42262);

(statearr_42281_42307[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42267 === (8))){
var inst_42243 = (state_42266[(7)]);
var inst_42253 = cljs.core.next.call(null,inst_42243);
var inst_42243__$1 = inst_42253;
var state_42266__$1 = (function (){var statearr_42282 = state_42266;
(statearr_42282[(7)] = inst_42243__$1);

return statearr_42282;
})();
var statearr_42283_42308 = state_42266__$1;
(statearr_42283_42308[(2)] = null);

(statearr_42283_42308[(1)] = (2));


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
});})(c__38833__auto__))
;
return ((function (switch__38812__auto__,c__38833__auto__){
return (function() {
var cljs$core$async$state_machine__38813__auto__ = null;
var cljs$core$async$state_machine__38813__auto____0 = (function (){
var statearr_42287 = [null,null,null,null,null,null,null,null];
(statearr_42287[(0)] = cljs$core$async$state_machine__38813__auto__);

(statearr_42287[(1)] = (1));

return statearr_42287;
});
var cljs$core$async$state_machine__38813__auto____1 = (function (state_42266){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_42266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e42288){if((e42288 instanceof Object)){
var ex__38816__auto__ = e42288;
var statearr_42289_42309 = state_42266;
(statearr_42289_42309[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42310 = state_42266;
state_42266 = G__42310;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
cljs$core$async$state_machine__38813__auto__ = function(state_42266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38813__auto____1.call(this,state_42266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38813__auto____0;
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38813__auto____1;
return cljs$core$async$state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto__))
})();
var state__38835__auto__ = (function (){var statearr_42290 = f__38834__auto__.call(null);
(statearr_42290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto__);

return statearr_42290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto__))
);

return c__38833__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__35211__auto__ = (((_ == null))?null:_);
var m__35212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__35211__auto__)]);
if(!((m__35212__auto__ == null))){
return m__35212__auto__.call(null,_);
} else {
var m__35212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__35212__auto____$1 == null))){
return m__35212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__35211__auto__ = (((m == null))?null:m);
var m__35212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__35211__auto__)]);
if(!((m__35212__auto__ == null))){
return m__35212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__35212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__35212__auto____$1 == null))){
return m__35212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__35211__auto__ = (((m == null))?null:m);
var m__35212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__35211__auto__)]);
if(!((m__35212__auto__ == null))){
return m__35212__auto__.call(null,m,ch);
} else {
var m__35212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__35212__auto____$1 == null))){
return m__35212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__35211__auto__ = (((m == null))?null:m);
var m__35212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__35211__auto__)]);
if(!((m__35212__auto__ == null))){
return m__35212__auto__.call(null,m);
} else {
var m__35212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__35212__auto____$1 == null))){
return m__35212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async42532 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42532 = (function (mult,ch,cs,meta42533){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta42533 = meta42533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42534,meta42533__$1){
var self__ = this;
var _42534__$1 = this;
return (new cljs.core.async.t_cljs$core$async42532(self__.mult,self__.ch,self__.cs,meta42533__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async42532.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42534){
var self__ = this;
var _42534__$1 = this;
return self__.meta42533;
});})(cs))
;

cljs.core.async.t_cljs$core$async42532.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42532.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async42532.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async42532.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42532.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42532.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async42532.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42533","meta42533",-1566789240,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async42532.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42532.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42532";

cljs.core.async.t_cljs$core$async42532.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__35154__auto__,writer__35155__auto__,opt__35156__auto__){
return cljs.core._write.call(null,writer__35155__auto__,"cljs.core.async/t_cljs$core$async42532");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async42532 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async42532(mult__$1,ch__$1,cs__$1,meta42533){
return (new cljs.core.async.t_cljs$core$async42532(mult__$1,ch__$1,cs__$1,meta42533));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async42532(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__38833__auto___42753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto___42753,cs,m,dchan,dctr,done){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto___42753,cs,m,dchan,dctr,done){
return (function (state_42665){
var state_val_42666 = (state_42665[(1)]);
if((state_val_42666 === (7))){
var inst_42661 = (state_42665[(2)]);
var state_42665__$1 = state_42665;
var statearr_42667_42754 = state_42665__$1;
(statearr_42667_42754[(2)] = inst_42661);

(statearr_42667_42754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (20))){
var inst_42566 = (state_42665[(7)]);
var inst_42576 = cljs.core.first.call(null,inst_42566);
var inst_42577 = cljs.core.nth.call(null,inst_42576,(0),null);
var inst_42578 = cljs.core.nth.call(null,inst_42576,(1),null);
var state_42665__$1 = (function (){var statearr_42668 = state_42665;
(statearr_42668[(8)] = inst_42577);

return statearr_42668;
})();
if(cljs.core.truth_(inst_42578)){
var statearr_42669_42755 = state_42665__$1;
(statearr_42669_42755[(1)] = (22));

} else {
var statearr_42670_42756 = state_42665__$1;
(statearr_42670_42756[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (27))){
var inst_42613 = (state_42665[(9)]);
var inst_42537 = (state_42665[(10)]);
var inst_42606 = (state_42665[(11)]);
var inst_42608 = (state_42665[(12)]);
var inst_42613__$1 = cljs.core._nth.call(null,inst_42606,inst_42608);
var inst_42614 = cljs.core.async.put_BANG_.call(null,inst_42613__$1,inst_42537,done);
var state_42665__$1 = (function (){var statearr_42671 = state_42665;
(statearr_42671[(9)] = inst_42613__$1);

return statearr_42671;
})();
if(cljs.core.truth_(inst_42614)){
var statearr_42672_42757 = state_42665__$1;
(statearr_42672_42757[(1)] = (30));

} else {
var statearr_42673_42758 = state_42665__$1;
(statearr_42673_42758[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (1))){
var state_42665__$1 = state_42665;
var statearr_42674_42759 = state_42665__$1;
(statearr_42674_42759[(2)] = null);

(statearr_42674_42759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (24))){
var inst_42566 = (state_42665[(7)]);
var inst_42583 = (state_42665[(2)]);
var inst_42584 = cljs.core.next.call(null,inst_42566);
var inst_42546 = inst_42584;
var inst_42547 = null;
var inst_42548 = (0);
var inst_42549 = (0);
var state_42665__$1 = (function (){var statearr_42675 = state_42665;
(statearr_42675[(13)] = inst_42547);

(statearr_42675[(14)] = inst_42546);

(statearr_42675[(15)] = inst_42583);

(statearr_42675[(16)] = inst_42549);

(statearr_42675[(17)] = inst_42548);

return statearr_42675;
})();
var statearr_42676_42760 = state_42665__$1;
(statearr_42676_42760[(2)] = null);

(statearr_42676_42760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (39))){
var state_42665__$1 = state_42665;
var statearr_42680_42761 = state_42665__$1;
(statearr_42680_42761[(2)] = null);

(statearr_42680_42761[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (4))){
var inst_42537 = (state_42665[(10)]);
var inst_42537__$1 = (state_42665[(2)]);
var inst_42538 = (inst_42537__$1 == null);
var state_42665__$1 = (function (){var statearr_42681 = state_42665;
(statearr_42681[(10)] = inst_42537__$1);

return statearr_42681;
})();
if(cljs.core.truth_(inst_42538)){
var statearr_42682_42762 = state_42665__$1;
(statearr_42682_42762[(1)] = (5));

} else {
var statearr_42683_42763 = state_42665__$1;
(statearr_42683_42763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (15))){
var inst_42547 = (state_42665[(13)]);
var inst_42546 = (state_42665[(14)]);
var inst_42549 = (state_42665[(16)]);
var inst_42548 = (state_42665[(17)]);
var inst_42562 = (state_42665[(2)]);
var inst_42563 = (inst_42549 + (1));
var tmp42677 = inst_42547;
var tmp42678 = inst_42546;
var tmp42679 = inst_42548;
var inst_42546__$1 = tmp42678;
var inst_42547__$1 = tmp42677;
var inst_42548__$1 = tmp42679;
var inst_42549__$1 = inst_42563;
var state_42665__$1 = (function (){var statearr_42684 = state_42665;
(statearr_42684[(13)] = inst_42547__$1);

(statearr_42684[(14)] = inst_42546__$1);

(statearr_42684[(16)] = inst_42549__$1);

(statearr_42684[(17)] = inst_42548__$1);

(statearr_42684[(18)] = inst_42562);

return statearr_42684;
})();
var statearr_42685_42764 = state_42665__$1;
(statearr_42685_42764[(2)] = null);

(statearr_42685_42764[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (21))){
var inst_42587 = (state_42665[(2)]);
var state_42665__$1 = state_42665;
var statearr_42689_42765 = state_42665__$1;
(statearr_42689_42765[(2)] = inst_42587);

(statearr_42689_42765[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (31))){
var inst_42613 = (state_42665[(9)]);
var inst_42617 = done.call(null,null);
var inst_42618 = cljs.core.async.untap_STAR_.call(null,m,inst_42613);
var state_42665__$1 = (function (){var statearr_42690 = state_42665;
(statearr_42690[(19)] = inst_42617);

return statearr_42690;
})();
var statearr_42691_42766 = state_42665__$1;
(statearr_42691_42766[(2)] = inst_42618);

(statearr_42691_42766[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (32))){
var inst_42606 = (state_42665[(11)]);
var inst_42607 = (state_42665[(20)]);
var inst_42605 = (state_42665[(21)]);
var inst_42608 = (state_42665[(12)]);
var inst_42620 = (state_42665[(2)]);
var inst_42621 = (inst_42608 + (1));
var tmp42686 = inst_42606;
var tmp42687 = inst_42607;
var tmp42688 = inst_42605;
var inst_42605__$1 = tmp42688;
var inst_42606__$1 = tmp42686;
var inst_42607__$1 = tmp42687;
var inst_42608__$1 = inst_42621;
var state_42665__$1 = (function (){var statearr_42692 = state_42665;
(statearr_42692[(11)] = inst_42606__$1);

(statearr_42692[(20)] = inst_42607__$1);

(statearr_42692[(22)] = inst_42620);

(statearr_42692[(21)] = inst_42605__$1);

(statearr_42692[(12)] = inst_42608__$1);

return statearr_42692;
})();
var statearr_42693_42767 = state_42665__$1;
(statearr_42693_42767[(2)] = null);

(statearr_42693_42767[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (40))){
var inst_42633 = (state_42665[(23)]);
var inst_42637 = done.call(null,null);
var inst_42638 = cljs.core.async.untap_STAR_.call(null,m,inst_42633);
var state_42665__$1 = (function (){var statearr_42694 = state_42665;
(statearr_42694[(24)] = inst_42637);

return statearr_42694;
})();
var statearr_42695_42768 = state_42665__$1;
(statearr_42695_42768[(2)] = inst_42638);

(statearr_42695_42768[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (33))){
var inst_42624 = (state_42665[(25)]);
var inst_42626 = cljs.core.chunked_seq_QMARK_.call(null,inst_42624);
var state_42665__$1 = state_42665;
if(inst_42626){
var statearr_42696_42769 = state_42665__$1;
(statearr_42696_42769[(1)] = (36));

} else {
var statearr_42697_42770 = state_42665__$1;
(statearr_42697_42770[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (13))){
var inst_42556 = (state_42665[(26)]);
var inst_42559 = cljs.core.async.close_BANG_.call(null,inst_42556);
var state_42665__$1 = state_42665;
var statearr_42698_42771 = state_42665__$1;
(statearr_42698_42771[(2)] = inst_42559);

(statearr_42698_42771[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (22))){
var inst_42577 = (state_42665[(8)]);
var inst_42580 = cljs.core.async.close_BANG_.call(null,inst_42577);
var state_42665__$1 = state_42665;
var statearr_42699_42772 = state_42665__$1;
(statearr_42699_42772[(2)] = inst_42580);

(statearr_42699_42772[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (36))){
var inst_42624 = (state_42665[(25)]);
var inst_42628 = cljs.core.chunk_first.call(null,inst_42624);
var inst_42629 = cljs.core.chunk_rest.call(null,inst_42624);
var inst_42630 = cljs.core.count.call(null,inst_42628);
var inst_42605 = inst_42629;
var inst_42606 = inst_42628;
var inst_42607 = inst_42630;
var inst_42608 = (0);
var state_42665__$1 = (function (){var statearr_42700 = state_42665;
(statearr_42700[(11)] = inst_42606);

(statearr_42700[(20)] = inst_42607);

(statearr_42700[(21)] = inst_42605);

(statearr_42700[(12)] = inst_42608);

return statearr_42700;
})();
var statearr_42701_42773 = state_42665__$1;
(statearr_42701_42773[(2)] = null);

(statearr_42701_42773[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (41))){
var inst_42624 = (state_42665[(25)]);
var inst_42640 = (state_42665[(2)]);
var inst_42641 = cljs.core.next.call(null,inst_42624);
var inst_42605 = inst_42641;
var inst_42606 = null;
var inst_42607 = (0);
var inst_42608 = (0);
var state_42665__$1 = (function (){var statearr_42702 = state_42665;
(statearr_42702[(11)] = inst_42606);

(statearr_42702[(27)] = inst_42640);

(statearr_42702[(20)] = inst_42607);

(statearr_42702[(21)] = inst_42605);

(statearr_42702[(12)] = inst_42608);

return statearr_42702;
})();
var statearr_42703_42774 = state_42665__$1;
(statearr_42703_42774[(2)] = null);

(statearr_42703_42774[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (43))){
var state_42665__$1 = state_42665;
var statearr_42704_42775 = state_42665__$1;
(statearr_42704_42775[(2)] = null);

(statearr_42704_42775[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (29))){
var inst_42649 = (state_42665[(2)]);
var state_42665__$1 = state_42665;
var statearr_42705_42776 = state_42665__$1;
(statearr_42705_42776[(2)] = inst_42649);

(statearr_42705_42776[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (44))){
var inst_42658 = (state_42665[(2)]);
var state_42665__$1 = (function (){var statearr_42706 = state_42665;
(statearr_42706[(28)] = inst_42658);

return statearr_42706;
})();
var statearr_42707_42777 = state_42665__$1;
(statearr_42707_42777[(2)] = null);

(statearr_42707_42777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (6))){
var inst_42597 = (state_42665[(29)]);
var inst_42596 = cljs.core.deref.call(null,cs);
var inst_42597__$1 = cljs.core.keys.call(null,inst_42596);
var inst_42598 = cljs.core.count.call(null,inst_42597__$1);
var inst_42599 = cljs.core.reset_BANG_.call(null,dctr,inst_42598);
var inst_42604 = cljs.core.seq.call(null,inst_42597__$1);
var inst_42605 = inst_42604;
var inst_42606 = null;
var inst_42607 = (0);
var inst_42608 = (0);
var state_42665__$1 = (function (){var statearr_42708 = state_42665;
(statearr_42708[(29)] = inst_42597__$1);

(statearr_42708[(11)] = inst_42606);

(statearr_42708[(30)] = inst_42599);

(statearr_42708[(20)] = inst_42607);

(statearr_42708[(21)] = inst_42605);

(statearr_42708[(12)] = inst_42608);

return statearr_42708;
})();
var statearr_42709_42778 = state_42665__$1;
(statearr_42709_42778[(2)] = null);

(statearr_42709_42778[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (28))){
var inst_42624 = (state_42665[(25)]);
var inst_42605 = (state_42665[(21)]);
var inst_42624__$1 = cljs.core.seq.call(null,inst_42605);
var state_42665__$1 = (function (){var statearr_42710 = state_42665;
(statearr_42710[(25)] = inst_42624__$1);

return statearr_42710;
})();
if(inst_42624__$1){
var statearr_42711_42779 = state_42665__$1;
(statearr_42711_42779[(1)] = (33));

} else {
var statearr_42712_42780 = state_42665__$1;
(statearr_42712_42780[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (25))){
var inst_42607 = (state_42665[(20)]);
var inst_42608 = (state_42665[(12)]);
var inst_42610 = (inst_42608 < inst_42607);
var inst_42611 = inst_42610;
var state_42665__$1 = state_42665;
if(cljs.core.truth_(inst_42611)){
var statearr_42713_42781 = state_42665__$1;
(statearr_42713_42781[(1)] = (27));

} else {
var statearr_42714_42782 = state_42665__$1;
(statearr_42714_42782[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (34))){
var state_42665__$1 = state_42665;
var statearr_42715_42783 = state_42665__$1;
(statearr_42715_42783[(2)] = null);

(statearr_42715_42783[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (17))){
var state_42665__$1 = state_42665;
var statearr_42716_42784 = state_42665__$1;
(statearr_42716_42784[(2)] = null);

(statearr_42716_42784[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (3))){
var inst_42663 = (state_42665[(2)]);
var state_42665__$1 = state_42665;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42665__$1,inst_42663);
} else {
if((state_val_42666 === (12))){
var inst_42592 = (state_42665[(2)]);
var state_42665__$1 = state_42665;
var statearr_42717_42785 = state_42665__$1;
(statearr_42717_42785[(2)] = inst_42592);

(statearr_42717_42785[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (2))){
var state_42665__$1 = state_42665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42665__$1,(4),ch);
} else {
if((state_val_42666 === (23))){
var state_42665__$1 = state_42665;
var statearr_42718_42786 = state_42665__$1;
(statearr_42718_42786[(2)] = null);

(statearr_42718_42786[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (35))){
var inst_42647 = (state_42665[(2)]);
var state_42665__$1 = state_42665;
var statearr_42719_42787 = state_42665__$1;
(statearr_42719_42787[(2)] = inst_42647);

(statearr_42719_42787[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (19))){
var inst_42566 = (state_42665[(7)]);
var inst_42570 = cljs.core.chunk_first.call(null,inst_42566);
var inst_42571 = cljs.core.chunk_rest.call(null,inst_42566);
var inst_42572 = cljs.core.count.call(null,inst_42570);
var inst_42546 = inst_42571;
var inst_42547 = inst_42570;
var inst_42548 = inst_42572;
var inst_42549 = (0);
var state_42665__$1 = (function (){var statearr_42720 = state_42665;
(statearr_42720[(13)] = inst_42547);

(statearr_42720[(14)] = inst_42546);

(statearr_42720[(16)] = inst_42549);

(statearr_42720[(17)] = inst_42548);

return statearr_42720;
})();
var statearr_42721_42788 = state_42665__$1;
(statearr_42721_42788[(2)] = null);

(statearr_42721_42788[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (11))){
var inst_42546 = (state_42665[(14)]);
var inst_42566 = (state_42665[(7)]);
var inst_42566__$1 = cljs.core.seq.call(null,inst_42546);
var state_42665__$1 = (function (){var statearr_42722 = state_42665;
(statearr_42722[(7)] = inst_42566__$1);

return statearr_42722;
})();
if(inst_42566__$1){
var statearr_42723_42789 = state_42665__$1;
(statearr_42723_42789[(1)] = (16));

} else {
var statearr_42724_42790 = state_42665__$1;
(statearr_42724_42790[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (9))){
var inst_42594 = (state_42665[(2)]);
var state_42665__$1 = state_42665;
var statearr_42725_42791 = state_42665__$1;
(statearr_42725_42791[(2)] = inst_42594);

(statearr_42725_42791[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (5))){
var inst_42544 = cljs.core.deref.call(null,cs);
var inst_42545 = cljs.core.seq.call(null,inst_42544);
var inst_42546 = inst_42545;
var inst_42547 = null;
var inst_42548 = (0);
var inst_42549 = (0);
var state_42665__$1 = (function (){var statearr_42726 = state_42665;
(statearr_42726[(13)] = inst_42547);

(statearr_42726[(14)] = inst_42546);

(statearr_42726[(16)] = inst_42549);

(statearr_42726[(17)] = inst_42548);

return statearr_42726;
})();
var statearr_42727_42792 = state_42665__$1;
(statearr_42727_42792[(2)] = null);

(statearr_42727_42792[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (14))){
var state_42665__$1 = state_42665;
var statearr_42728_42793 = state_42665__$1;
(statearr_42728_42793[(2)] = null);

(statearr_42728_42793[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (45))){
var inst_42655 = (state_42665[(2)]);
var state_42665__$1 = state_42665;
var statearr_42729_42794 = state_42665__$1;
(statearr_42729_42794[(2)] = inst_42655);

(statearr_42729_42794[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (26))){
var inst_42597 = (state_42665[(29)]);
var inst_42651 = (state_42665[(2)]);
var inst_42652 = cljs.core.seq.call(null,inst_42597);
var state_42665__$1 = (function (){var statearr_42730 = state_42665;
(statearr_42730[(31)] = inst_42651);

return statearr_42730;
})();
if(inst_42652){
var statearr_42731_42795 = state_42665__$1;
(statearr_42731_42795[(1)] = (42));

} else {
var statearr_42732_42796 = state_42665__$1;
(statearr_42732_42796[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (16))){
var inst_42566 = (state_42665[(7)]);
var inst_42568 = cljs.core.chunked_seq_QMARK_.call(null,inst_42566);
var state_42665__$1 = state_42665;
if(inst_42568){
var statearr_42733_42797 = state_42665__$1;
(statearr_42733_42797[(1)] = (19));

} else {
var statearr_42734_42798 = state_42665__$1;
(statearr_42734_42798[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (38))){
var inst_42644 = (state_42665[(2)]);
var state_42665__$1 = state_42665;
var statearr_42735_42799 = state_42665__$1;
(statearr_42735_42799[(2)] = inst_42644);

(statearr_42735_42799[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (30))){
var state_42665__$1 = state_42665;
var statearr_42736_42800 = state_42665__$1;
(statearr_42736_42800[(2)] = null);

(statearr_42736_42800[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (10))){
var inst_42547 = (state_42665[(13)]);
var inst_42549 = (state_42665[(16)]);
var inst_42555 = cljs.core._nth.call(null,inst_42547,inst_42549);
var inst_42556 = cljs.core.nth.call(null,inst_42555,(0),null);
var inst_42557 = cljs.core.nth.call(null,inst_42555,(1),null);
var state_42665__$1 = (function (){var statearr_42737 = state_42665;
(statearr_42737[(26)] = inst_42556);

return statearr_42737;
})();
if(cljs.core.truth_(inst_42557)){
var statearr_42738_42801 = state_42665__$1;
(statearr_42738_42801[(1)] = (13));

} else {
var statearr_42739_42802 = state_42665__$1;
(statearr_42739_42802[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (18))){
var inst_42590 = (state_42665[(2)]);
var state_42665__$1 = state_42665;
var statearr_42740_42803 = state_42665__$1;
(statearr_42740_42803[(2)] = inst_42590);

(statearr_42740_42803[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (42))){
var state_42665__$1 = state_42665;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42665__$1,(45),dchan);
} else {
if((state_val_42666 === (37))){
var inst_42624 = (state_42665[(25)]);
var inst_42633 = (state_42665[(23)]);
var inst_42537 = (state_42665[(10)]);
var inst_42633__$1 = cljs.core.first.call(null,inst_42624);
var inst_42634 = cljs.core.async.put_BANG_.call(null,inst_42633__$1,inst_42537,done);
var state_42665__$1 = (function (){var statearr_42741 = state_42665;
(statearr_42741[(23)] = inst_42633__$1);

return statearr_42741;
})();
if(cljs.core.truth_(inst_42634)){
var statearr_42742_42804 = state_42665__$1;
(statearr_42742_42804[(1)] = (39));

} else {
var statearr_42743_42805 = state_42665__$1;
(statearr_42743_42805[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42666 === (8))){
var inst_42549 = (state_42665[(16)]);
var inst_42548 = (state_42665[(17)]);
var inst_42551 = (inst_42549 < inst_42548);
var inst_42552 = inst_42551;
var state_42665__$1 = state_42665;
if(cljs.core.truth_(inst_42552)){
var statearr_42744_42806 = state_42665__$1;
(statearr_42744_42806[(1)] = (10));

} else {
var statearr_42745_42807 = state_42665__$1;
(statearr_42745_42807[(1)] = (11));

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
});})(c__38833__auto___42753,cs,m,dchan,dctr,done))
;
return ((function (switch__38812__auto__,c__38833__auto___42753,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__38813__auto__ = null;
var cljs$core$async$mult_$_state_machine__38813__auto____0 = (function (){
var statearr_42749 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42749[(0)] = cljs$core$async$mult_$_state_machine__38813__auto__);

(statearr_42749[(1)] = (1));

return statearr_42749;
});
var cljs$core$async$mult_$_state_machine__38813__auto____1 = (function (state_42665){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_42665);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e42750){if((e42750 instanceof Object)){
var ex__38816__auto__ = e42750;
var statearr_42751_42808 = state_42665;
(statearr_42751_42808[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42665);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42809 = state_42665;
state_42665 = G__42809;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__38813__auto__ = function(state_42665){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__38813__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__38813__auto____1.call(this,state_42665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__38813__auto____0;
cljs$core$async$mult_$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__38813__auto____1;
return cljs$core$async$mult_$_state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto___42753,cs,m,dchan,dctr,done))
})();
var state__38835__auto__ = (function (){var statearr_42752 = f__38834__auto__.call(null);
(statearr_42752[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto___42753);

return statearr_42752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto___42753,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args42810 = [];
var len__35614__auto___42813 = arguments.length;
var i__35615__auto___42814 = (0);
while(true){
if((i__35615__auto___42814 < len__35614__auto___42813)){
args42810.push((arguments[i__35615__auto___42814]));

var G__42815 = (i__35615__auto___42814 + (1));
i__35615__auto___42814 = G__42815;
continue;
} else {
}
break;
}

var G__42812 = args42810.length;
switch (G__42812) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42810.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__35211__auto__ = (((m == null))?null:m);
var m__35212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__35211__auto__)]);
if(!((m__35212__auto__ == null))){
return m__35212__auto__.call(null,m,ch);
} else {
var m__35212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__35212__auto____$1 == null))){
return m__35212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__35211__auto__ = (((m == null))?null:m);
var m__35212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__35211__auto__)]);
if(!((m__35212__auto__ == null))){
return m__35212__auto__.call(null,m,ch);
} else {
var m__35212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__35212__auto____$1 == null))){
return m__35212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__35211__auto__ = (((m == null))?null:m);
var m__35212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__35211__auto__)]);
if(!((m__35212__auto__ == null))){
return m__35212__auto__.call(null,m);
} else {
var m__35212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__35212__auto____$1 == null))){
return m__35212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__35211__auto__ = (((m == null))?null:m);
var m__35212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__35211__auto__)]);
if(!((m__35212__auto__ == null))){
return m__35212__auto__.call(null,m,state_map);
} else {
var m__35212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__35212__auto____$1 == null))){
return m__35212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__35211__auto__ = (((m == null))?null:m);
var m__35212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__35211__auto__)]);
if(!((m__35212__auto__ == null))){
return m__35212__auto__.call(null,m,mode);
} else {
var m__35212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__35212__auto____$1 == null))){
return m__35212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__35621__auto__ = [];
var len__35614__auto___42827 = arguments.length;
var i__35615__auto___42828 = (0);
while(true){
if((i__35615__auto___42828 < len__35614__auto___42827)){
args__35621__auto__.push((arguments[i__35615__auto___42828]));

var G__42829 = (i__35615__auto___42828 + (1));
i__35615__auto___42828 = G__42829;
continue;
} else {
}
break;
}

var argseq__35622__auto__ = ((((3) < args__35621__auto__.length))?(new cljs.core.IndexedSeq(args__35621__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35622__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42821){
var map__42822 = p__42821;
var map__42822__$1 = ((((!((map__42822 == null)))?((((map__42822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42822):map__42822);
var opts = map__42822__$1;
var statearr_42824_42830 = state;
(statearr_42824_42830[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__42822,map__42822__$1,opts){
return (function (val){
var statearr_42825_42831 = state;
(statearr_42825_42831[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__42822,map__42822__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_42826_42832 = state;
(statearr_42826_42832[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42817){
var G__42818 = cljs.core.first.call(null,seq42817);
var seq42817__$1 = cljs.core.next.call(null,seq42817);
var G__42819 = cljs.core.first.call(null,seq42817__$1);
var seq42817__$2 = cljs.core.next.call(null,seq42817__$1);
var G__42820 = cljs.core.first.call(null,seq42817__$2);
var seq42817__$3 = cljs.core.next.call(null,seq42817__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__42818,G__42819,G__42820,seq42817__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async42996 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42996 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42997){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta42997 = meta42997;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async42996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42998,meta42997__$1){
var self__ = this;
var _42998__$1 = this;
return (new cljs.core.async.t_cljs$core$async42996(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42997__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42998){
var self__ = this;
var _42998__$1 = this;
return self__.meta42997;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42996.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async42996.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42996.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async42996.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42996.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42996.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42996.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42996.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42996.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42997","meta42997",-834959131,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async42996.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async42996.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42996";

cljs.core.async.t_cljs$core$async42996.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__35154__auto__,writer__35155__auto__,opt__35156__auto__){
return cljs.core._write.call(null,writer__35155__auto__,"cljs.core.async/t_cljs$core$async42996");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async42996 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async42996(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42997){
return (new cljs.core.async.t_cljs$core$async42996(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42997));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async42996(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38833__auto___43159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto___43159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto___43159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_43096){
var state_val_43097 = (state_43096[(1)]);
if((state_val_43097 === (7))){
var inst_43014 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
var statearr_43098_43160 = state_43096__$1;
(statearr_43098_43160[(2)] = inst_43014);

(statearr_43098_43160[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (20))){
var inst_43026 = (state_43096[(7)]);
var state_43096__$1 = state_43096;
var statearr_43099_43161 = state_43096__$1;
(statearr_43099_43161[(2)] = inst_43026);

(statearr_43099_43161[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (27))){
var state_43096__$1 = state_43096;
var statearr_43100_43162 = state_43096__$1;
(statearr_43100_43162[(2)] = null);

(statearr_43100_43162[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (1))){
var inst_43002 = (state_43096[(8)]);
var inst_43002__$1 = calc_state.call(null);
var inst_43004 = (inst_43002__$1 == null);
var inst_43005 = cljs.core.not.call(null,inst_43004);
var state_43096__$1 = (function (){var statearr_43101 = state_43096;
(statearr_43101[(8)] = inst_43002__$1);

return statearr_43101;
})();
if(inst_43005){
var statearr_43102_43163 = state_43096__$1;
(statearr_43102_43163[(1)] = (2));

} else {
var statearr_43103_43164 = state_43096__$1;
(statearr_43103_43164[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (24))){
var inst_43070 = (state_43096[(9)]);
var inst_43056 = (state_43096[(10)]);
var inst_43049 = (state_43096[(11)]);
var inst_43070__$1 = inst_43049.call(null,inst_43056);
var state_43096__$1 = (function (){var statearr_43104 = state_43096;
(statearr_43104[(9)] = inst_43070__$1);

return statearr_43104;
})();
if(cljs.core.truth_(inst_43070__$1)){
var statearr_43105_43165 = state_43096__$1;
(statearr_43105_43165[(1)] = (29));

} else {
var statearr_43106_43166 = state_43096__$1;
(statearr_43106_43166[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (4))){
var inst_43017 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
if(cljs.core.truth_(inst_43017)){
var statearr_43107_43167 = state_43096__$1;
(statearr_43107_43167[(1)] = (8));

} else {
var statearr_43108_43168 = state_43096__$1;
(statearr_43108_43168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (15))){
var inst_43043 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
if(cljs.core.truth_(inst_43043)){
var statearr_43109_43169 = state_43096__$1;
(statearr_43109_43169[(1)] = (19));

} else {
var statearr_43110_43170 = state_43096__$1;
(statearr_43110_43170[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (21))){
var inst_43048 = (state_43096[(12)]);
var inst_43048__$1 = (state_43096[(2)]);
var inst_43049 = cljs.core.get.call(null,inst_43048__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43050 = cljs.core.get.call(null,inst_43048__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43051 = cljs.core.get.call(null,inst_43048__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_43096__$1 = (function (){var statearr_43111 = state_43096;
(statearr_43111[(13)] = inst_43050);

(statearr_43111[(12)] = inst_43048__$1);

(statearr_43111[(11)] = inst_43049);

return statearr_43111;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_43096__$1,(22),inst_43051);
} else {
if((state_val_43097 === (31))){
var inst_43078 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
if(cljs.core.truth_(inst_43078)){
var statearr_43112_43171 = state_43096__$1;
(statearr_43112_43171[(1)] = (32));

} else {
var statearr_43113_43172 = state_43096__$1;
(statearr_43113_43172[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (32))){
var inst_43055 = (state_43096[(14)]);
var state_43096__$1 = state_43096;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43096__$1,(35),out,inst_43055);
} else {
if((state_val_43097 === (33))){
var inst_43048 = (state_43096[(12)]);
var inst_43026 = inst_43048;
var state_43096__$1 = (function (){var statearr_43114 = state_43096;
(statearr_43114[(7)] = inst_43026);

return statearr_43114;
})();
var statearr_43115_43173 = state_43096__$1;
(statearr_43115_43173[(2)] = null);

(statearr_43115_43173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (13))){
var inst_43026 = (state_43096[(7)]);
var inst_43033 = inst_43026.cljs$lang$protocol_mask$partition0$;
var inst_43034 = (inst_43033 & (64));
var inst_43035 = inst_43026.cljs$core$ISeq$;
var inst_43036 = (inst_43034) || (inst_43035);
var state_43096__$1 = state_43096;
if(cljs.core.truth_(inst_43036)){
var statearr_43116_43174 = state_43096__$1;
(statearr_43116_43174[(1)] = (16));

} else {
var statearr_43117_43175 = state_43096__$1;
(statearr_43117_43175[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (22))){
var inst_43055 = (state_43096[(14)]);
var inst_43056 = (state_43096[(10)]);
var inst_43054 = (state_43096[(2)]);
var inst_43055__$1 = cljs.core.nth.call(null,inst_43054,(0),null);
var inst_43056__$1 = cljs.core.nth.call(null,inst_43054,(1),null);
var inst_43057 = (inst_43055__$1 == null);
var inst_43058 = cljs.core._EQ_.call(null,inst_43056__$1,change);
var inst_43059 = (inst_43057) || (inst_43058);
var state_43096__$1 = (function (){var statearr_43118 = state_43096;
(statearr_43118[(14)] = inst_43055__$1);

(statearr_43118[(10)] = inst_43056__$1);

return statearr_43118;
})();
if(cljs.core.truth_(inst_43059)){
var statearr_43119_43176 = state_43096__$1;
(statearr_43119_43176[(1)] = (23));

} else {
var statearr_43120_43177 = state_43096__$1;
(statearr_43120_43177[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (36))){
var inst_43048 = (state_43096[(12)]);
var inst_43026 = inst_43048;
var state_43096__$1 = (function (){var statearr_43121 = state_43096;
(statearr_43121[(7)] = inst_43026);

return statearr_43121;
})();
var statearr_43122_43178 = state_43096__$1;
(statearr_43122_43178[(2)] = null);

(statearr_43122_43178[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (29))){
var inst_43070 = (state_43096[(9)]);
var state_43096__$1 = state_43096;
var statearr_43123_43179 = state_43096__$1;
(statearr_43123_43179[(2)] = inst_43070);

(statearr_43123_43179[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (6))){
var state_43096__$1 = state_43096;
var statearr_43124_43180 = state_43096__$1;
(statearr_43124_43180[(2)] = false);

(statearr_43124_43180[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (28))){
var inst_43066 = (state_43096[(2)]);
var inst_43067 = calc_state.call(null);
var inst_43026 = inst_43067;
var state_43096__$1 = (function (){var statearr_43125 = state_43096;
(statearr_43125[(7)] = inst_43026);

(statearr_43125[(15)] = inst_43066);

return statearr_43125;
})();
var statearr_43126_43181 = state_43096__$1;
(statearr_43126_43181[(2)] = null);

(statearr_43126_43181[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (25))){
var inst_43092 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
var statearr_43127_43182 = state_43096__$1;
(statearr_43127_43182[(2)] = inst_43092);

(statearr_43127_43182[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (34))){
var inst_43090 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
var statearr_43128_43183 = state_43096__$1;
(statearr_43128_43183[(2)] = inst_43090);

(statearr_43128_43183[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (17))){
var state_43096__$1 = state_43096;
var statearr_43129_43184 = state_43096__$1;
(statearr_43129_43184[(2)] = false);

(statearr_43129_43184[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (3))){
var state_43096__$1 = state_43096;
var statearr_43130_43185 = state_43096__$1;
(statearr_43130_43185[(2)] = false);

(statearr_43130_43185[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (12))){
var inst_43094 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43096__$1,inst_43094);
} else {
if((state_val_43097 === (2))){
var inst_43002 = (state_43096[(8)]);
var inst_43007 = inst_43002.cljs$lang$protocol_mask$partition0$;
var inst_43008 = (inst_43007 & (64));
var inst_43009 = inst_43002.cljs$core$ISeq$;
var inst_43010 = (inst_43008) || (inst_43009);
var state_43096__$1 = state_43096;
if(cljs.core.truth_(inst_43010)){
var statearr_43131_43186 = state_43096__$1;
(statearr_43131_43186[(1)] = (5));

} else {
var statearr_43132_43187 = state_43096__$1;
(statearr_43132_43187[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (23))){
var inst_43055 = (state_43096[(14)]);
var inst_43061 = (inst_43055 == null);
var state_43096__$1 = state_43096;
if(cljs.core.truth_(inst_43061)){
var statearr_43133_43188 = state_43096__$1;
(statearr_43133_43188[(1)] = (26));

} else {
var statearr_43134_43189 = state_43096__$1;
(statearr_43134_43189[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (35))){
var inst_43081 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
if(cljs.core.truth_(inst_43081)){
var statearr_43135_43190 = state_43096__$1;
(statearr_43135_43190[(1)] = (36));

} else {
var statearr_43136_43191 = state_43096__$1;
(statearr_43136_43191[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (19))){
var inst_43026 = (state_43096[(7)]);
var inst_43045 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43026);
var state_43096__$1 = state_43096;
var statearr_43137_43192 = state_43096__$1;
(statearr_43137_43192[(2)] = inst_43045);

(statearr_43137_43192[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (11))){
var inst_43026 = (state_43096[(7)]);
var inst_43030 = (inst_43026 == null);
var inst_43031 = cljs.core.not.call(null,inst_43030);
var state_43096__$1 = state_43096;
if(inst_43031){
var statearr_43138_43193 = state_43096__$1;
(statearr_43138_43193[(1)] = (13));

} else {
var statearr_43139_43194 = state_43096__$1;
(statearr_43139_43194[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (9))){
var inst_43002 = (state_43096[(8)]);
var state_43096__$1 = state_43096;
var statearr_43140_43195 = state_43096__$1;
(statearr_43140_43195[(2)] = inst_43002);

(statearr_43140_43195[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (5))){
var state_43096__$1 = state_43096;
var statearr_43141_43196 = state_43096__$1;
(statearr_43141_43196[(2)] = true);

(statearr_43141_43196[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (14))){
var state_43096__$1 = state_43096;
var statearr_43142_43197 = state_43096__$1;
(statearr_43142_43197[(2)] = false);

(statearr_43142_43197[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (26))){
var inst_43056 = (state_43096[(10)]);
var inst_43063 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43056);
var state_43096__$1 = state_43096;
var statearr_43143_43198 = state_43096__$1;
(statearr_43143_43198[(2)] = inst_43063);

(statearr_43143_43198[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (16))){
var state_43096__$1 = state_43096;
var statearr_43144_43199 = state_43096__$1;
(statearr_43144_43199[(2)] = true);

(statearr_43144_43199[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (38))){
var inst_43086 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
var statearr_43145_43200 = state_43096__$1;
(statearr_43145_43200[(2)] = inst_43086);

(statearr_43145_43200[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (30))){
var inst_43050 = (state_43096[(13)]);
var inst_43056 = (state_43096[(10)]);
var inst_43049 = (state_43096[(11)]);
var inst_43073 = cljs.core.empty_QMARK_.call(null,inst_43049);
var inst_43074 = inst_43050.call(null,inst_43056);
var inst_43075 = cljs.core.not.call(null,inst_43074);
var inst_43076 = (inst_43073) && (inst_43075);
var state_43096__$1 = state_43096;
var statearr_43146_43201 = state_43096__$1;
(statearr_43146_43201[(2)] = inst_43076);

(statearr_43146_43201[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (10))){
var inst_43002 = (state_43096[(8)]);
var inst_43022 = (state_43096[(2)]);
var inst_43023 = cljs.core.get.call(null,inst_43022,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_43024 = cljs.core.get.call(null,inst_43022,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_43025 = cljs.core.get.call(null,inst_43022,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_43026 = inst_43002;
var state_43096__$1 = (function (){var statearr_43147 = state_43096;
(statearr_43147[(16)] = inst_43024);

(statearr_43147[(17)] = inst_43023);

(statearr_43147[(7)] = inst_43026);

(statearr_43147[(18)] = inst_43025);

return statearr_43147;
})();
var statearr_43148_43202 = state_43096__$1;
(statearr_43148_43202[(2)] = null);

(statearr_43148_43202[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (18))){
var inst_43040 = (state_43096[(2)]);
var state_43096__$1 = state_43096;
var statearr_43149_43203 = state_43096__$1;
(statearr_43149_43203[(2)] = inst_43040);

(statearr_43149_43203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (37))){
var state_43096__$1 = state_43096;
var statearr_43150_43204 = state_43096__$1;
(statearr_43150_43204[(2)] = null);

(statearr_43150_43204[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43097 === (8))){
var inst_43002 = (state_43096[(8)]);
var inst_43019 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43002);
var state_43096__$1 = state_43096;
var statearr_43151_43205 = state_43096__$1;
(statearr_43151_43205[(2)] = inst_43019);

(statearr_43151_43205[(1)] = (10));


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
});})(c__38833__auto___43159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__38812__auto__,c__38833__auto___43159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__38813__auto__ = null;
var cljs$core$async$mix_$_state_machine__38813__auto____0 = (function (){
var statearr_43155 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43155[(0)] = cljs$core$async$mix_$_state_machine__38813__auto__);

(statearr_43155[(1)] = (1));

return statearr_43155;
});
var cljs$core$async$mix_$_state_machine__38813__auto____1 = (function (state_43096){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_43096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e43156){if((e43156 instanceof Object)){
var ex__38816__auto__ = e43156;
var statearr_43157_43206 = state_43096;
(statearr_43157_43206[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43207 = state_43096;
state_43096 = G__43207;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__38813__auto__ = function(state_43096){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__38813__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__38813__auto____1.call(this,state_43096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__38813__auto____0;
cljs$core$async$mix_$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__38813__auto____1;
return cljs$core$async$mix_$_state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto___43159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__38835__auto__ = (function (){var statearr_43158 = f__38834__auto__.call(null);
(statearr_43158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto___43159);

return statearr_43158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto___43159,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__35211__auto__ = (((p == null))?null:p);
var m__35212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__35211__auto__)]);
if(!((m__35212__auto__ == null))){
return m__35212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__35212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__35212__auto____$1 == null))){
return m__35212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__35211__auto__ = (((p == null))?null:p);
var m__35212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__35211__auto__)]);
if(!((m__35212__auto__ == null))){
return m__35212__auto__.call(null,p,v,ch);
} else {
var m__35212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__35212__auto____$1 == null))){
return m__35212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args43208 = [];
var len__35614__auto___43211 = arguments.length;
var i__35615__auto___43212 = (0);
while(true){
if((i__35615__auto___43212 < len__35614__auto___43211)){
args43208.push((arguments[i__35615__auto___43212]));

var G__43213 = (i__35615__auto___43212 + (1));
i__35615__auto___43212 = G__43213;
continue;
} else {
}
break;
}

var G__43210 = args43208.length;
switch (G__43210) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43208.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__35211__auto__ = (((p == null))?null:p);
var m__35212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__35211__auto__)]);
if(!((m__35212__auto__ == null))){
return m__35212__auto__.call(null,p);
} else {
var m__35212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__35212__auto____$1 == null))){
return m__35212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__35211__auto__ = (((p == null))?null:p);
var m__35212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__35211__auto__)]);
if(!((m__35212__auto__ == null))){
return m__35212__auto__.call(null,p,v);
} else {
var m__35212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__35212__auto____$1 == null))){
return m__35212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args43216 = [];
var len__35614__auto___43341 = arguments.length;
var i__35615__auto___43342 = (0);
while(true){
if((i__35615__auto___43342 < len__35614__auto___43341)){
args43216.push((arguments[i__35615__auto___43342]));

var G__43343 = (i__35615__auto___43342 + (1));
i__35615__auto___43342 = G__43343;
continue;
} else {
}
break;
}

var G__43218 = args43216.length;
switch (G__43218) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43216.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__34556__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__34556__auto__)){
return or__34556__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__34556__auto__,mults){
return (function (p1__43215_SHARP_){
if(cljs.core.truth_(p1__43215_SHARP_.call(null,topic))){
return p1__43215_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__43215_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__34556__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async43219 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43219 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta43220){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta43220 = meta43220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43221,meta43220__$1){
var self__ = this;
var _43221__$1 = this;
return (new cljs.core.async.t_cljs$core$async43219(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta43220__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43219.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43221){
var self__ = this;
var _43221__$1 = this;
return self__.meta43220;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43219.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async43219.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43219.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async43219.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43219.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43219.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43219.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43219.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta43220","meta43220",1745565926,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async43219.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43219.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43219";

cljs.core.async.t_cljs$core$async43219.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__35154__auto__,writer__35155__auto__,opt__35156__auto__){
return cljs.core._write.call(null,writer__35155__auto__,"cljs.core.async/t_cljs$core$async43219");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async43219 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async43219(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43220){
return (new cljs.core.async.t_cljs$core$async43219(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta43220));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async43219(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__38833__auto___43345 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto___43345,mults,ensure_mult,p){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto___43345,mults,ensure_mult,p){
return (function (state_43293){
var state_val_43294 = (state_43293[(1)]);
if((state_val_43294 === (7))){
var inst_43289 = (state_43293[(2)]);
var state_43293__$1 = state_43293;
var statearr_43295_43346 = state_43293__$1;
(statearr_43295_43346[(2)] = inst_43289);

(statearr_43295_43346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (20))){
var state_43293__$1 = state_43293;
var statearr_43296_43347 = state_43293__$1;
(statearr_43296_43347[(2)] = null);

(statearr_43296_43347[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (1))){
var state_43293__$1 = state_43293;
var statearr_43297_43348 = state_43293__$1;
(statearr_43297_43348[(2)] = null);

(statearr_43297_43348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (24))){
var inst_43272 = (state_43293[(7)]);
var inst_43281 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43272);
var state_43293__$1 = state_43293;
var statearr_43298_43349 = state_43293__$1;
(statearr_43298_43349[(2)] = inst_43281);

(statearr_43298_43349[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (4))){
var inst_43224 = (state_43293[(8)]);
var inst_43224__$1 = (state_43293[(2)]);
var inst_43225 = (inst_43224__$1 == null);
var state_43293__$1 = (function (){var statearr_43299 = state_43293;
(statearr_43299[(8)] = inst_43224__$1);

return statearr_43299;
})();
if(cljs.core.truth_(inst_43225)){
var statearr_43300_43350 = state_43293__$1;
(statearr_43300_43350[(1)] = (5));

} else {
var statearr_43301_43351 = state_43293__$1;
(statearr_43301_43351[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (15))){
var inst_43266 = (state_43293[(2)]);
var state_43293__$1 = state_43293;
var statearr_43302_43352 = state_43293__$1;
(statearr_43302_43352[(2)] = inst_43266);

(statearr_43302_43352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (21))){
var inst_43286 = (state_43293[(2)]);
var state_43293__$1 = (function (){var statearr_43303 = state_43293;
(statearr_43303[(9)] = inst_43286);

return statearr_43303;
})();
var statearr_43304_43353 = state_43293__$1;
(statearr_43304_43353[(2)] = null);

(statearr_43304_43353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (13))){
var inst_43248 = (state_43293[(10)]);
var inst_43250 = cljs.core.chunked_seq_QMARK_.call(null,inst_43248);
var state_43293__$1 = state_43293;
if(inst_43250){
var statearr_43305_43354 = state_43293__$1;
(statearr_43305_43354[(1)] = (16));

} else {
var statearr_43306_43355 = state_43293__$1;
(statearr_43306_43355[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (22))){
var inst_43278 = (state_43293[(2)]);
var state_43293__$1 = state_43293;
if(cljs.core.truth_(inst_43278)){
var statearr_43307_43356 = state_43293__$1;
(statearr_43307_43356[(1)] = (23));

} else {
var statearr_43308_43357 = state_43293__$1;
(statearr_43308_43357[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (6))){
var inst_43274 = (state_43293[(11)]);
var inst_43272 = (state_43293[(7)]);
var inst_43224 = (state_43293[(8)]);
var inst_43272__$1 = topic_fn.call(null,inst_43224);
var inst_43273 = cljs.core.deref.call(null,mults);
var inst_43274__$1 = cljs.core.get.call(null,inst_43273,inst_43272__$1);
var state_43293__$1 = (function (){var statearr_43309 = state_43293;
(statearr_43309[(11)] = inst_43274__$1);

(statearr_43309[(7)] = inst_43272__$1);

return statearr_43309;
})();
if(cljs.core.truth_(inst_43274__$1)){
var statearr_43310_43358 = state_43293__$1;
(statearr_43310_43358[(1)] = (19));

} else {
var statearr_43311_43359 = state_43293__$1;
(statearr_43311_43359[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (25))){
var inst_43283 = (state_43293[(2)]);
var state_43293__$1 = state_43293;
var statearr_43312_43360 = state_43293__$1;
(statearr_43312_43360[(2)] = inst_43283);

(statearr_43312_43360[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (17))){
var inst_43248 = (state_43293[(10)]);
var inst_43257 = cljs.core.first.call(null,inst_43248);
var inst_43258 = cljs.core.async.muxch_STAR_.call(null,inst_43257);
var inst_43259 = cljs.core.async.close_BANG_.call(null,inst_43258);
var inst_43260 = cljs.core.next.call(null,inst_43248);
var inst_43234 = inst_43260;
var inst_43235 = null;
var inst_43236 = (0);
var inst_43237 = (0);
var state_43293__$1 = (function (){var statearr_43313 = state_43293;
(statearr_43313[(12)] = inst_43259);

(statearr_43313[(13)] = inst_43234);

(statearr_43313[(14)] = inst_43237);

(statearr_43313[(15)] = inst_43236);

(statearr_43313[(16)] = inst_43235);

return statearr_43313;
})();
var statearr_43314_43361 = state_43293__$1;
(statearr_43314_43361[(2)] = null);

(statearr_43314_43361[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (3))){
var inst_43291 = (state_43293[(2)]);
var state_43293__$1 = state_43293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43293__$1,inst_43291);
} else {
if((state_val_43294 === (12))){
var inst_43268 = (state_43293[(2)]);
var state_43293__$1 = state_43293;
var statearr_43315_43362 = state_43293__$1;
(statearr_43315_43362[(2)] = inst_43268);

(statearr_43315_43362[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (2))){
var state_43293__$1 = state_43293;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43293__$1,(4),ch);
} else {
if((state_val_43294 === (23))){
var state_43293__$1 = state_43293;
var statearr_43316_43363 = state_43293__$1;
(statearr_43316_43363[(2)] = null);

(statearr_43316_43363[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (19))){
var inst_43274 = (state_43293[(11)]);
var inst_43224 = (state_43293[(8)]);
var inst_43276 = cljs.core.async.muxch_STAR_.call(null,inst_43274);
var state_43293__$1 = state_43293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43293__$1,(22),inst_43276,inst_43224);
} else {
if((state_val_43294 === (11))){
var inst_43234 = (state_43293[(13)]);
var inst_43248 = (state_43293[(10)]);
var inst_43248__$1 = cljs.core.seq.call(null,inst_43234);
var state_43293__$1 = (function (){var statearr_43317 = state_43293;
(statearr_43317[(10)] = inst_43248__$1);

return statearr_43317;
})();
if(inst_43248__$1){
var statearr_43318_43364 = state_43293__$1;
(statearr_43318_43364[(1)] = (13));

} else {
var statearr_43319_43365 = state_43293__$1;
(statearr_43319_43365[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (9))){
var inst_43270 = (state_43293[(2)]);
var state_43293__$1 = state_43293;
var statearr_43320_43366 = state_43293__$1;
(statearr_43320_43366[(2)] = inst_43270);

(statearr_43320_43366[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (5))){
var inst_43231 = cljs.core.deref.call(null,mults);
var inst_43232 = cljs.core.vals.call(null,inst_43231);
var inst_43233 = cljs.core.seq.call(null,inst_43232);
var inst_43234 = inst_43233;
var inst_43235 = null;
var inst_43236 = (0);
var inst_43237 = (0);
var state_43293__$1 = (function (){var statearr_43321 = state_43293;
(statearr_43321[(13)] = inst_43234);

(statearr_43321[(14)] = inst_43237);

(statearr_43321[(15)] = inst_43236);

(statearr_43321[(16)] = inst_43235);

return statearr_43321;
})();
var statearr_43322_43367 = state_43293__$1;
(statearr_43322_43367[(2)] = null);

(statearr_43322_43367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (14))){
var state_43293__$1 = state_43293;
var statearr_43326_43368 = state_43293__$1;
(statearr_43326_43368[(2)] = null);

(statearr_43326_43368[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (16))){
var inst_43248 = (state_43293[(10)]);
var inst_43252 = cljs.core.chunk_first.call(null,inst_43248);
var inst_43253 = cljs.core.chunk_rest.call(null,inst_43248);
var inst_43254 = cljs.core.count.call(null,inst_43252);
var inst_43234 = inst_43253;
var inst_43235 = inst_43252;
var inst_43236 = inst_43254;
var inst_43237 = (0);
var state_43293__$1 = (function (){var statearr_43327 = state_43293;
(statearr_43327[(13)] = inst_43234);

(statearr_43327[(14)] = inst_43237);

(statearr_43327[(15)] = inst_43236);

(statearr_43327[(16)] = inst_43235);

return statearr_43327;
})();
var statearr_43328_43369 = state_43293__$1;
(statearr_43328_43369[(2)] = null);

(statearr_43328_43369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (10))){
var inst_43234 = (state_43293[(13)]);
var inst_43237 = (state_43293[(14)]);
var inst_43236 = (state_43293[(15)]);
var inst_43235 = (state_43293[(16)]);
var inst_43242 = cljs.core._nth.call(null,inst_43235,inst_43237);
var inst_43243 = cljs.core.async.muxch_STAR_.call(null,inst_43242);
var inst_43244 = cljs.core.async.close_BANG_.call(null,inst_43243);
var inst_43245 = (inst_43237 + (1));
var tmp43323 = inst_43234;
var tmp43324 = inst_43236;
var tmp43325 = inst_43235;
var inst_43234__$1 = tmp43323;
var inst_43235__$1 = tmp43325;
var inst_43236__$1 = tmp43324;
var inst_43237__$1 = inst_43245;
var state_43293__$1 = (function (){var statearr_43329 = state_43293;
(statearr_43329[(13)] = inst_43234__$1);

(statearr_43329[(14)] = inst_43237__$1);

(statearr_43329[(15)] = inst_43236__$1);

(statearr_43329[(17)] = inst_43244);

(statearr_43329[(16)] = inst_43235__$1);

return statearr_43329;
})();
var statearr_43330_43370 = state_43293__$1;
(statearr_43330_43370[(2)] = null);

(statearr_43330_43370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (18))){
var inst_43263 = (state_43293[(2)]);
var state_43293__$1 = state_43293;
var statearr_43331_43371 = state_43293__$1;
(statearr_43331_43371[(2)] = inst_43263);

(statearr_43331_43371[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43294 === (8))){
var inst_43237 = (state_43293[(14)]);
var inst_43236 = (state_43293[(15)]);
var inst_43239 = (inst_43237 < inst_43236);
var inst_43240 = inst_43239;
var state_43293__$1 = state_43293;
if(cljs.core.truth_(inst_43240)){
var statearr_43332_43372 = state_43293__$1;
(statearr_43332_43372[(1)] = (10));

} else {
var statearr_43333_43373 = state_43293__$1;
(statearr_43333_43373[(1)] = (11));

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
});})(c__38833__auto___43345,mults,ensure_mult,p))
;
return ((function (switch__38812__auto__,c__38833__auto___43345,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__38813__auto__ = null;
var cljs$core$async$state_machine__38813__auto____0 = (function (){
var statearr_43337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43337[(0)] = cljs$core$async$state_machine__38813__auto__);

(statearr_43337[(1)] = (1));

return statearr_43337;
});
var cljs$core$async$state_machine__38813__auto____1 = (function (state_43293){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_43293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e43338){if((e43338 instanceof Object)){
var ex__38816__auto__ = e43338;
var statearr_43339_43374 = state_43293;
(statearr_43339_43374[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43338;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43375 = state_43293;
state_43293 = G__43375;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
cljs$core$async$state_machine__38813__auto__ = function(state_43293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38813__auto____1.call(this,state_43293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38813__auto____0;
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38813__auto____1;
return cljs$core$async$state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto___43345,mults,ensure_mult,p))
})();
var state__38835__auto__ = (function (){var statearr_43340 = f__38834__auto__.call(null);
(statearr_43340[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto___43345);

return statearr_43340;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto___43345,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args43376 = [];
var len__35614__auto___43379 = arguments.length;
var i__35615__auto___43380 = (0);
while(true){
if((i__35615__auto___43380 < len__35614__auto___43379)){
args43376.push((arguments[i__35615__auto___43380]));

var G__43381 = (i__35615__auto___43380 + (1));
i__35615__auto___43380 = G__43381;
continue;
} else {
}
break;
}

var G__43378 = args43376.length;
switch (G__43378) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43376.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args43383 = [];
var len__35614__auto___43386 = arguments.length;
var i__35615__auto___43387 = (0);
while(true){
if((i__35615__auto___43387 < len__35614__auto___43386)){
args43383.push((arguments[i__35615__auto___43387]));

var G__43388 = (i__35615__auto___43387 + (1));
i__35615__auto___43387 = G__43388;
continue;
} else {
}
break;
}

var G__43385 = args43383.length;
switch (G__43385) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43383.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args43390 = [];
var len__35614__auto___43461 = arguments.length;
var i__35615__auto___43462 = (0);
while(true){
if((i__35615__auto___43462 < len__35614__auto___43461)){
args43390.push((arguments[i__35615__auto___43462]));

var G__43463 = (i__35615__auto___43462 + (1));
i__35615__auto___43462 = G__43463;
continue;
} else {
}
break;
}

var G__43392 = args43390.length;
switch (G__43392) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43390.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__38833__auto___43465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto___43465,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto___43465,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_43431){
var state_val_43432 = (state_43431[(1)]);
if((state_val_43432 === (7))){
var state_43431__$1 = state_43431;
var statearr_43433_43466 = state_43431__$1;
(statearr_43433_43466[(2)] = null);

(statearr_43433_43466[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43432 === (1))){
var state_43431__$1 = state_43431;
var statearr_43434_43467 = state_43431__$1;
(statearr_43434_43467[(2)] = null);

(statearr_43434_43467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43432 === (4))){
var inst_43395 = (state_43431[(7)]);
var inst_43397 = (inst_43395 < cnt);
var state_43431__$1 = state_43431;
if(cljs.core.truth_(inst_43397)){
var statearr_43435_43468 = state_43431__$1;
(statearr_43435_43468[(1)] = (6));

} else {
var statearr_43436_43469 = state_43431__$1;
(statearr_43436_43469[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43432 === (15))){
var inst_43427 = (state_43431[(2)]);
var state_43431__$1 = state_43431;
var statearr_43437_43470 = state_43431__$1;
(statearr_43437_43470[(2)] = inst_43427);

(statearr_43437_43470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43432 === (13))){
var inst_43420 = cljs.core.async.close_BANG_.call(null,out);
var state_43431__$1 = state_43431;
var statearr_43438_43471 = state_43431__$1;
(statearr_43438_43471[(2)] = inst_43420);

(statearr_43438_43471[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43432 === (6))){
var state_43431__$1 = state_43431;
var statearr_43439_43472 = state_43431__$1;
(statearr_43439_43472[(2)] = null);

(statearr_43439_43472[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43432 === (3))){
var inst_43429 = (state_43431[(2)]);
var state_43431__$1 = state_43431;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43431__$1,inst_43429);
} else {
if((state_val_43432 === (12))){
var inst_43417 = (state_43431[(8)]);
var inst_43417__$1 = (state_43431[(2)]);
var inst_43418 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43417__$1);
var state_43431__$1 = (function (){var statearr_43440 = state_43431;
(statearr_43440[(8)] = inst_43417__$1);

return statearr_43440;
})();
if(cljs.core.truth_(inst_43418)){
var statearr_43441_43473 = state_43431__$1;
(statearr_43441_43473[(1)] = (13));

} else {
var statearr_43442_43474 = state_43431__$1;
(statearr_43442_43474[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43432 === (2))){
var inst_43394 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_43395 = (0);
var state_43431__$1 = (function (){var statearr_43443 = state_43431;
(statearr_43443[(9)] = inst_43394);

(statearr_43443[(7)] = inst_43395);

return statearr_43443;
})();
var statearr_43444_43475 = state_43431__$1;
(statearr_43444_43475[(2)] = null);

(statearr_43444_43475[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43432 === (11))){
var inst_43395 = (state_43431[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43431,(10),Object,null,(9));
var inst_43404 = chs__$1.call(null,inst_43395);
var inst_43405 = done.call(null,inst_43395);
var inst_43406 = cljs.core.async.take_BANG_.call(null,inst_43404,inst_43405);
var state_43431__$1 = state_43431;
var statearr_43445_43476 = state_43431__$1;
(statearr_43445_43476[(2)] = inst_43406);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43431__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43432 === (9))){
var inst_43395 = (state_43431[(7)]);
var inst_43408 = (state_43431[(2)]);
var inst_43409 = (inst_43395 + (1));
var inst_43395__$1 = inst_43409;
var state_43431__$1 = (function (){var statearr_43446 = state_43431;
(statearr_43446[(10)] = inst_43408);

(statearr_43446[(7)] = inst_43395__$1);

return statearr_43446;
})();
var statearr_43447_43477 = state_43431__$1;
(statearr_43447_43477[(2)] = null);

(statearr_43447_43477[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43432 === (5))){
var inst_43415 = (state_43431[(2)]);
var state_43431__$1 = (function (){var statearr_43448 = state_43431;
(statearr_43448[(11)] = inst_43415);

return statearr_43448;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43431__$1,(12),dchan);
} else {
if((state_val_43432 === (14))){
var inst_43417 = (state_43431[(8)]);
var inst_43422 = cljs.core.apply.call(null,f,inst_43417);
var state_43431__$1 = state_43431;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43431__$1,(16),out,inst_43422);
} else {
if((state_val_43432 === (16))){
var inst_43424 = (state_43431[(2)]);
var state_43431__$1 = (function (){var statearr_43449 = state_43431;
(statearr_43449[(12)] = inst_43424);

return statearr_43449;
})();
var statearr_43450_43478 = state_43431__$1;
(statearr_43450_43478[(2)] = null);

(statearr_43450_43478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43432 === (10))){
var inst_43399 = (state_43431[(2)]);
var inst_43400 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_43431__$1 = (function (){var statearr_43451 = state_43431;
(statearr_43451[(13)] = inst_43399);

return statearr_43451;
})();
var statearr_43452_43479 = state_43431__$1;
(statearr_43452_43479[(2)] = inst_43400);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43431__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43432 === (8))){
var inst_43413 = (state_43431[(2)]);
var state_43431__$1 = state_43431;
var statearr_43453_43480 = state_43431__$1;
(statearr_43453_43480[(2)] = inst_43413);

(statearr_43453_43480[(1)] = (5));


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
});})(c__38833__auto___43465,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__38812__auto__,c__38833__auto___43465,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__38813__auto__ = null;
var cljs$core$async$state_machine__38813__auto____0 = (function (){
var statearr_43457 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43457[(0)] = cljs$core$async$state_machine__38813__auto__);

(statearr_43457[(1)] = (1));

return statearr_43457;
});
var cljs$core$async$state_machine__38813__auto____1 = (function (state_43431){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_43431);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e43458){if((e43458 instanceof Object)){
var ex__38816__auto__ = e43458;
var statearr_43459_43481 = state_43431;
(statearr_43459_43481[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43431);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43458;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43482 = state_43431;
state_43431 = G__43482;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
cljs$core$async$state_machine__38813__auto__ = function(state_43431){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38813__auto____1.call(this,state_43431);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38813__auto____0;
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38813__auto____1;
return cljs$core$async$state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto___43465,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__38835__auto__ = (function (){var statearr_43460 = f__38834__auto__.call(null);
(statearr_43460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto___43465);

return statearr_43460;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto___43465,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args43484 = [];
var len__35614__auto___43540 = arguments.length;
var i__35615__auto___43541 = (0);
while(true){
if((i__35615__auto___43541 < len__35614__auto___43540)){
args43484.push((arguments[i__35615__auto___43541]));

var G__43542 = (i__35615__auto___43541 + (1));
i__35615__auto___43541 = G__43542;
continue;
} else {
}
break;
}

var G__43486 = args43484.length;
switch (G__43486) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43484.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38833__auto___43544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto___43544,out){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto___43544,out){
return (function (state_43516){
var state_val_43517 = (state_43516[(1)]);
if((state_val_43517 === (7))){
var inst_43496 = (state_43516[(7)]);
var inst_43495 = (state_43516[(8)]);
var inst_43495__$1 = (state_43516[(2)]);
var inst_43496__$1 = cljs.core.nth.call(null,inst_43495__$1,(0),null);
var inst_43497 = cljs.core.nth.call(null,inst_43495__$1,(1),null);
var inst_43498 = (inst_43496__$1 == null);
var state_43516__$1 = (function (){var statearr_43518 = state_43516;
(statearr_43518[(7)] = inst_43496__$1);

(statearr_43518[(9)] = inst_43497);

(statearr_43518[(8)] = inst_43495__$1);

return statearr_43518;
})();
if(cljs.core.truth_(inst_43498)){
var statearr_43519_43545 = state_43516__$1;
(statearr_43519_43545[(1)] = (8));

} else {
var statearr_43520_43546 = state_43516__$1;
(statearr_43520_43546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43517 === (1))){
var inst_43487 = cljs.core.vec.call(null,chs);
var inst_43488 = inst_43487;
var state_43516__$1 = (function (){var statearr_43521 = state_43516;
(statearr_43521[(10)] = inst_43488);

return statearr_43521;
})();
var statearr_43522_43547 = state_43516__$1;
(statearr_43522_43547[(2)] = null);

(statearr_43522_43547[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43517 === (4))){
var inst_43488 = (state_43516[(10)]);
var state_43516__$1 = state_43516;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43516__$1,(7),inst_43488);
} else {
if((state_val_43517 === (6))){
var inst_43512 = (state_43516[(2)]);
var state_43516__$1 = state_43516;
var statearr_43523_43548 = state_43516__$1;
(statearr_43523_43548[(2)] = inst_43512);

(statearr_43523_43548[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43517 === (3))){
var inst_43514 = (state_43516[(2)]);
var state_43516__$1 = state_43516;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43516__$1,inst_43514);
} else {
if((state_val_43517 === (2))){
var inst_43488 = (state_43516[(10)]);
var inst_43490 = cljs.core.count.call(null,inst_43488);
var inst_43491 = (inst_43490 > (0));
var state_43516__$1 = state_43516;
if(cljs.core.truth_(inst_43491)){
var statearr_43525_43549 = state_43516__$1;
(statearr_43525_43549[(1)] = (4));

} else {
var statearr_43526_43550 = state_43516__$1;
(statearr_43526_43550[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43517 === (11))){
var inst_43488 = (state_43516[(10)]);
var inst_43505 = (state_43516[(2)]);
var tmp43524 = inst_43488;
var inst_43488__$1 = tmp43524;
var state_43516__$1 = (function (){var statearr_43527 = state_43516;
(statearr_43527[(10)] = inst_43488__$1);

(statearr_43527[(11)] = inst_43505);

return statearr_43527;
})();
var statearr_43528_43551 = state_43516__$1;
(statearr_43528_43551[(2)] = null);

(statearr_43528_43551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43517 === (9))){
var inst_43496 = (state_43516[(7)]);
var state_43516__$1 = state_43516;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43516__$1,(11),out,inst_43496);
} else {
if((state_val_43517 === (5))){
var inst_43510 = cljs.core.async.close_BANG_.call(null,out);
var state_43516__$1 = state_43516;
var statearr_43529_43552 = state_43516__$1;
(statearr_43529_43552[(2)] = inst_43510);

(statearr_43529_43552[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43517 === (10))){
var inst_43508 = (state_43516[(2)]);
var state_43516__$1 = state_43516;
var statearr_43530_43553 = state_43516__$1;
(statearr_43530_43553[(2)] = inst_43508);

(statearr_43530_43553[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43517 === (8))){
var inst_43496 = (state_43516[(7)]);
var inst_43488 = (state_43516[(10)]);
var inst_43497 = (state_43516[(9)]);
var inst_43495 = (state_43516[(8)]);
var inst_43500 = (function (){var cs = inst_43488;
var vec__43493 = inst_43495;
var v = inst_43496;
var c = inst_43497;
return ((function (cs,vec__43493,v,c,inst_43496,inst_43488,inst_43497,inst_43495,state_val_43517,c__38833__auto___43544,out){
return (function (p1__43483_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__43483_SHARP_);
});
;})(cs,vec__43493,v,c,inst_43496,inst_43488,inst_43497,inst_43495,state_val_43517,c__38833__auto___43544,out))
})();
var inst_43501 = cljs.core.filterv.call(null,inst_43500,inst_43488);
var inst_43488__$1 = inst_43501;
var state_43516__$1 = (function (){var statearr_43531 = state_43516;
(statearr_43531[(10)] = inst_43488__$1);

return statearr_43531;
})();
var statearr_43532_43554 = state_43516__$1;
(statearr_43532_43554[(2)] = null);

(statearr_43532_43554[(1)] = (2));


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
});})(c__38833__auto___43544,out))
;
return ((function (switch__38812__auto__,c__38833__auto___43544,out){
return (function() {
var cljs$core$async$state_machine__38813__auto__ = null;
var cljs$core$async$state_machine__38813__auto____0 = (function (){
var statearr_43536 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43536[(0)] = cljs$core$async$state_machine__38813__auto__);

(statearr_43536[(1)] = (1));

return statearr_43536;
});
var cljs$core$async$state_machine__38813__auto____1 = (function (state_43516){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_43516);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e43537){if((e43537 instanceof Object)){
var ex__38816__auto__ = e43537;
var statearr_43538_43555 = state_43516;
(statearr_43538_43555[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43516);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43556 = state_43516;
state_43516 = G__43556;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
cljs$core$async$state_machine__38813__auto__ = function(state_43516){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38813__auto____1.call(this,state_43516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38813__auto____0;
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38813__auto____1;
return cljs$core$async$state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto___43544,out))
})();
var state__38835__auto__ = (function (){var statearr_43539 = f__38834__auto__.call(null);
(statearr_43539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto___43544);

return statearr_43539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto___43544,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args43557 = [];
var len__35614__auto___43606 = arguments.length;
var i__35615__auto___43607 = (0);
while(true){
if((i__35615__auto___43607 < len__35614__auto___43606)){
args43557.push((arguments[i__35615__auto___43607]));

var G__43608 = (i__35615__auto___43607 + (1));
i__35615__auto___43607 = G__43608;
continue;
} else {
}
break;
}

var G__43559 = args43557.length;
switch (G__43559) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43557.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38833__auto___43610 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto___43610,out){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto___43610,out){
return (function (state_43583){
var state_val_43584 = (state_43583[(1)]);
if((state_val_43584 === (7))){
var inst_43565 = (state_43583[(7)]);
var inst_43565__$1 = (state_43583[(2)]);
var inst_43566 = (inst_43565__$1 == null);
var inst_43567 = cljs.core.not.call(null,inst_43566);
var state_43583__$1 = (function (){var statearr_43585 = state_43583;
(statearr_43585[(7)] = inst_43565__$1);

return statearr_43585;
})();
if(inst_43567){
var statearr_43586_43611 = state_43583__$1;
(statearr_43586_43611[(1)] = (8));

} else {
var statearr_43587_43612 = state_43583__$1;
(statearr_43587_43612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43584 === (1))){
var inst_43560 = (0);
var state_43583__$1 = (function (){var statearr_43588 = state_43583;
(statearr_43588[(8)] = inst_43560);

return statearr_43588;
})();
var statearr_43589_43613 = state_43583__$1;
(statearr_43589_43613[(2)] = null);

(statearr_43589_43613[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43584 === (4))){
var state_43583__$1 = state_43583;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43583__$1,(7),ch);
} else {
if((state_val_43584 === (6))){
var inst_43578 = (state_43583[(2)]);
var state_43583__$1 = state_43583;
var statearr_43590_43614 = state_43583__$1;
(statearr_43590_43614[(2)] = inst_43578);

(statearr_43590_43614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43584 === (3))){
var inst_43580 = (state_43583[(2)]);
var inst_43581 = cljs.core.async.close_BANG_.call(null,out);
var state_43583__$1 = (function (){var statearr_43591 = state_43583;
(statearr_43591[(9)] = inst_43580);

return statearr_43591;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43583__$1,inst_43581);
} else {
if((state_val_43584 === (2))){
var inst_43560 = (state_43583[(8)]);
var inst_43562 = (inst_43560 < n);
var state_43583__$1 = state_43583;
if(cljs.core.truth_(inst_43562)){
var statearr_43592_43615 = state_43583__$1;
(statearr_43592_43615[(1)] = (4));

} else {
var statearr_43593_43616 = state_43583__$1;
(statearr_43593_43616[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43584 === (11))){
var inst_43560 = (state_43583[(8)]);
var inst_43570 = (state_43583[(2)]);
var inst_43571 = (inst_43560 + (1));
var inst_43560__$1 = inst_43571;
var state_43583__$1 = (function (){var statearr_43594 = state_43583;
(statearr_43594[(10)] = inst_43570);

(statearr_43594[(8)] = inst_43560__$1);

return statearr_43594;
})();
var statearr_43595_43617 = state_43583__$1;
(statearr_43595_43617[(2)] = null);

(statearr_43595_43617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43584 === (9))){
var state_43583__$1 = state_43583;
var statearr_43596_43618 = state_43583__$1;
(statearr_43596_43618[(2)] = null);

(statearr_43596_43618[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43584 === (5))){
var state_43583__$1 = state_43583;
var statearr_43597_43619 = state_43583__$1;
(statearr_43597_43619[(2)] = null);

(statearr_43597_43619[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43584 === (10))){
var inst_43575 = (state_43583[(2)]);
var state_43583__$1 = state_43583;
var statearr_43598_43620 = state_43583__$1;
(statearr_43598_43620[(2)] = inst_43575);

(statearr_43598_43620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43584 === (8))){
var inst_43565 = (state_43583[(7)]);
var state_43583__$1 = state_43583;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43583__$1,(11),out,inst_43565);
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
});})(c__38833__auto___43610,out))
;
return ((function (switch__38812__auto__,c__38833__auto___43610,out){
return (function() {
var cljs$core$async$state_machine__38813__auto__ = null;
var cljs$core$async$state_machine__38813__auto____0 = (function (){
var statearr_43602 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43602[(0)] = cljs$core$async$state_machine__38813__auto__);

(statearr_43602[(1)] = (1));

return statearr_43602;
});
var cljs$core$async$state_machine__38813__auto____1 = (function (state_43583){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_43583);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e43603){if((e43603 instanceof Object)){
var ex__38816__auto__ = e43603;
var statearr_43604_43621 = state_43583;
(statearr_43604_43621[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43583);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43622 = state_43583;
state_43583 = G__43622;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
cljs$core$async$state_machine__38813__auto__ = function(state_43583){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38813__auto____1.call(this,state_43583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38813__auto____0;
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38813__auto____1;
return cljs$core$async$state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto___43610,out))
})();
var state__38835__auto__ = (function (){var statearr_43605 = f__38834__auto__.call(null);
(statearr_43605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto___43610);

return statearr_43605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto___43610,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43630 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43630 = (function (map_LT_,f,ch,meta43631){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta43631 = meta43631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43632,meta43631__$1){
var self__ = this;
var _43632__$1 = this;
return (new cljs.core.async.t_cljs$core$async43630(self__.map_LT_,self__.f,self__.ch,meta43631__$1));
});

cljs.core.async.t_cljs$core$async43630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43632){
var self__ = this;
var _43632__$1 = this;
return self__.meta43631;
});

cljs.core.async.t_cljs$core$async43630.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43630.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43630.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43630.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43630.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async43633 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43633 = (function (map_LT_,f,ch,meta43631,_,fn1,meta43634){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta43631 = meta43631;
this._ = _;
this.fn1 = fn1;
this.meta43634 = meta43634;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43633.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_43635,meta43634__$1){
var self__ = this;
var _43635__$1 = this;
return (new cljs.core.async.t_cljs$core$async43633(self__.map_LT_,self__.f,self__.ch,self__.meta43631,self__._,self__.fn1,meta43634__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async43633.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_43635){
var self__ = this;
var _43635__$1 = this;
return self__.meta43634;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43633.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async43633.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43633.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async43633.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__43623_SHARP_){
return f1.call(null,(((p1__43623_SHARP_ == null))?null:self__.f.call(null,p1__43623_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async43633.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43631","meta43631",1513361349,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43630","cljs.core.async/t_cljs$core$async43630",-903223183,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43634","meta43634",2003606398,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async43633.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43633.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43633";

cljs.core.async.t_cljs$core$async43633.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__35154__auto__,writer__35155__auto__,opt__35156__auto__){
return cljs.core._write.call(null,writer__35155__auto__,"cljs.core.async/t_cljs$core$async43633");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async43633 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43633(map_LT___$1,f__$1,ch__$1,meta43631__$1,___$2,fn1__$1,meta43634){
return (new cljs.core.async.t_cljs$core$async43633(map_LT___$1,f__$1,ch__$1,meta43631__$1,___$2,fn1__$1,meta43634));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async43633(self__.map_LT_,self__.f,self__.ch,self__.meta43631,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__34544__auto__ = ret;
if(cljs.core.truth_(and__34544__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__34544__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async43630.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43630.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async43630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43631","meta43631",1513361349,null)], null);
});

cljs.core.async.t_cljs$core$async43630.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43630";

cljs.core.async.t_cljs$core$async43630.cljs$lang$ctorPrWriter = (function (this__35154__auto__,writer__35155__auto__,opt__35156__auto__){
return cljs.core._write.call(null,writer__35155__auto__,"cljs.core.async/t_cljs$core$async43630");
});

cljs.core.async.__GT_t_cljs$core$async43630 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43630(map_LT___$1,f__$1,ch__$1,meta43631){
return (new cljs.core.async.t_cljs$core$async43630(map_LT___$1,f__$1,ch__$1,meta43631));
});

}

return (new cljs.core.async.t_cljs$core$async43630(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async43639 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43639 = (function (map_GT_,f,ch,meta43640){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta43640 = meta43640;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43641,meta43640__$1){
var self__ = this;
var _43641__$1 = this;
return (new cljs.core.async.t_cljs$core$async43639(self__.map_GT_,self__.f,self__.ch,meta43640__$1));
});

cljs.core.async.t_cljs$core$async43639.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43641){
var self__ = this;
var _43641__$1 = this;
return self__.meta43640;
});

cljs.core.async.t_cljs$core$async43639.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43639.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43639.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43639.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43639.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43639.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async43639.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43640","meta43640",-743848208,null)], null);
});

cljs.core.async.t_cljs$core$async43639.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43639.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43639";

cljs.core.async.t_cljs$core$async43639.cljs$lang$ctorPrWriter = (function (this__35154__auto__,writer__35155__auto__,opt__35156__auto__){
return cljs.core._write.call(null,writer__35155__auto__,"cljs.core.async/t_cljs$core$async43639");
});

cljs.core.async.__GT_t_cljs$core$async43639 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43639(map_GT___$1,f__$1,ch__$1,meta43640){
return (new cljs.core.async.t_cljs$core$async43639(map_GT___$1,f__$1,ch__$1,meta43640));
});

}

return (new cljs.core.async.t_cljs$core$async43639(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async43645 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43645 = (function (filter_GT_,p,ch,meta43646){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta43646 = meta43646;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async43645.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43647,meta43646__$1){
var self__ = this;
var _43647__$1 = this;
return (new cljs.core.async.t_cljs$core$async43645(self__.filter_GT_,self__.p,self__.ch,meta43646__$1));
});

cljs.core.async.t_cljs$core$async43645.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43647){
var self__ = this;
var _43647__$1 = this;
return self__.meta43646;
});

cljs.core.async.t_cljs$core$async43645.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async43645.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43645.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async43645.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async43645.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async43645.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async43645.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async43645.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43646","meta43646",1306187409,null)], null);
});

cljs.core.async.t_cljs$core$async43645.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async43645.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43645";

cljs.core.async.t_cljs$core$async43645.cljs$lang$ctorPrWriter = (function (this__35154__auto__,writer__35155__auto__,opt__35156__auto__){
return cljs.core._write.call(null,writer__35155__auto__,"cljs.core.async/t_cljs$core$async43645");
});

cljs.core.async.__GT_t_cljs$core$async43645 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43645(filter_GT___$1,p__$1,ch__$1,meta43646){
return (new cljs.core.async.t_cljs$core$async43645(filter_GT___$1,p__$1,ch__$1,meta43646));
});

}

return (new cljs.core.async.t_cljs$core$async43645(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args43648 = [];
var len__35614__auto___43692 = arguments.length;
var i__35615__auto___43693 = (0);
while(true){
if((i__35615__auto___43693 < len__35614__auto___43692)){
args43648.push((arguments[i__35615__auto___43693]));

var G__43694 = (i__35615__auto___43693 + (1));
i__35615__auto___43693 = G__43694;
continue;
} else {
}
break;
}

var G__43650 = args43648.length;
switch (G__43650) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43648.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38833__auto___43696 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto___43696,out){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto___43696,out){
return (function (state_43671){
var state_val_43672 = (state_43671[(1)]);
if((state_val_43672 === (7))){
var inst_43667 = (state_43671[(2)]);
var state_43671__$1 = state_43671;
var statearr_43673_43697 = state_43671__$1;
(statearr_43673_43697[(2)] = inst_43667);

(statearr_43673_43697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43672 === (1))){
var state_43671__$1 = state_43671;
var statearr_43674_43698 = state_43671__$1;
(statearr_43674_43698[(2)] = null);

(statearr_43674_43698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43672 === (4))){
var inst_43653 = (state_43671[(7)]);
var inst_43653__$1 = (state_43671[(2)]);
var inst_43654 = (inst_43653__$1 == null);
var state_43671__$1 = (function (){var statearr_43675 = state_43671;
(statearr_43675[(7)] = inst_43653__$1);

return statearr_43675;
})();
if(cljs.core.truth_(inst_43654)){
var statearr_43676_43699 = state_43671__$1;
(statearr_43676_43699[(1)] = (5));

} else {
var statearr_43677_43700 = state_43671__$1;
(statearr_43677_43700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43672 === (6))){
var inst_43653 = (state_43671[(7)]);
var inst_43658 = p.call(null,inst_43653);
var state_43671__$1 = state_43671;
if(cljs.core.truth_(inst_43658)){
var statearr_43678_43701 = state_43671__$1;
(statearr_43678_43701[(1)] = (8));

} else {
var statearr_43679_43702 = state_43671__$1;
(statearr_43679_43702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43672 === (3))){
var inst_43669 = (state_43671[(2)]);
var state_43671__$1 = state_43671;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43671__$1,inst_43669);
} else {
if((state_val_43672 === (2))){
var state_43671__$1 = state_43671;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43671__$1,(4),ch);
} else {
if((state_val_43672 === (11))){
var inst_43661 = (state_43671[(2)]);
var state_43671__$1 = state_43671;
var statearr_43680_43703 = state_43671__$1;
(statearr_43680_43703[(2)] = inst_43661);

(statearr_43680_43703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43672 === (9))){
var state_43671__$1 = state_43671;
var statearr_43681_43704 = state_43671__$1;
(statearr_43681_43704[(2)] = null);

(statearr_43681_43704[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43672 === (5))){
var inst_43656 = cljs.core.async.close_BANG_.call(null,out);
var state_43671__$1 = state_43671;
var statearr_43682_43705 = state_43671__$1;
(statearr_43682_43705[(2)] = inst_43656);

(statearr_43682_43705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43672 === (10))){
var inst_43664 = (state_43671[(2)]);
var state_43671__$1 = (function (){var statearr_43683 = state_43671;
(statearr_43683[(8)] = inst_43664);

return statearr_43683;
})();
var statearr_43684_43706 = state_43671__$1;
(statearr_43684_43706[(2)] = null);

(statearr_43684_43706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43672 === (8))){
var inst_43653 = (state_43671[(7)]);
var state_43671__$1 = state_43671;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43671__$1,(11),out,inst_43653);
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
});})(c__38833__auto___43696,out))
;
return ((function (switch__38812__auto__,c__38833__auto___43696,out){
return (function() {
var cljs$core$async$state_machine__38813__auto__ = null;
var cljs$core$async$state_machine__38813__auto____0 = (function (){
var statearr_43688 = [null,null,null,null,null,null,null,null,null];
(statearr_43688[(0)] = cljs$core$async$state_machine__38813__auto__);

(statearr_43688[(1)] = (1));

return statearr_43688;
});
var cljs$core$async$state_machine__38813__auto____1 = (function (state_43671){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_43671);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e43689){if((e43689 instanceof Object)){
var ex__38816__auto__ = e43689;
var statearr_43690_43707 = state_43671;
(statearr_43690_43707[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43671);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43689;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43708 = state_43671;
state_43671 = G__43708;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
cljs$core$async$state_machine__38813__auto__ = function(state_43671){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38813__auto____1.call(this,state_43671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38813__auto____0;
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38813__auto____1;
return cljs$core$async$state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto___43696,out))
})();
var state__38835__auto__ = (function (){var statearr_43691 = f__38834__auto__.call(null);
(statearr_43691[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto___43696);

return statearr_43691;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto___43696,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args43709 = [];
var len__35614__auto___43712 = arguments.length;
var i__35615__auto___43713 = (0);
while(true){
if((i__35615__auto___43713 < len__35614__auto___43712)){
args43709.push((arguments[i__35615__auto___43713]));

var G__43714 = (i__35615__auto___43713 + (1));
i__35615__auto___43713 = G__43714;
continue;
} else {
}
break;
}

var G__43711 = args43709.length;
switch (G__43711) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43709.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__38833__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto__){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto__){
return (function (state_43881){
var state_val_43882 = (state_43881[(1)]);
if((state_val_43882 === (7))){
var inst_43877 = (state_43881[(2)]);
var state_43881__$1 = state_43881;
var statearr_43883_43924 = state_43881__$1;
(statearr_43883_43924[(2)] = inst_43877);

(statearr_43883_43924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43882 === (20))){
var inst_43847 = (state_43881[(7)]);
var inst_43858 = (state_43881[(2)]);
var inst_43859 = cljs.core.next.call(null,inst_43847);
var inst_43833 = inst_43859;
var inst_43834 = null;
var inst_43835 = (0);
var inst_43836 = (0);
var state_43881__$1 = (function (){var statearr_43884 = state_43881;
(statearr_43884[(8)] = inst_43858);

(statearr_43884[(9)] = inst_43836);

(statearr_43884[(10)] = inst_43835);

(statearr_43884[(11)] = inst_43834);

(statearr_43884[(12)] = inst_43833);

return statearr_43884;
})();
var statearr_43885_43925 = state_43881__$1;
(statearr_43885_43925[(2)] = null);

(statearr_43885_43925[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43882 === (1))){
var state_43881__$1 = state_43881;
var statearr_43886_43926 = state_43881__$1;
(statearr_43886_43926[(2)] = null);

(statearr_43886_43926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43882 === (4))){
var inst_43822 = (state_43881[(13)]);
var inst_43822__$1 = (state_43881[(2)]);
var inst_43823 = (inst_43822__$1 == null);
var state_43881__$1 = (function (){var statearr_43887 = state_43881;
(statearr_43887[(13)] = inst_43822__$1);

return statearr_43887;
})();
if(cljs.core.truth_(inst_43823)){
var statearr_43888_43927 = state_43881__$1;
(statearr_43888_43927[(1)] = (5));

} else {
var statearr_43889_43928 = state_43881__$1;
(statearr_43889_43928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43882 === (15))){
var state_43881__$1 = state_43881;
var statearr_43893_43929 = state_43881__$1;
(statearr_43893_43929[(2)] = null);

(statearr_43893_43929[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43882 === (21))){
var state_43881__$1 = state_43881;
var statearr_43894_43930 = state_43881__$1;
(statearr_43894_43930[(2)] = null);

(statearr_43894_43930[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43882 === (13))){
var inst_43836 = (state_43881[(9)]);
var inst_43835 = (state_43881[(10)]);
var inst_43834 = (state_43881[(11)]);
var inst_43833 = (state_43881[(12)]);
var inst_43843 = (state_43881[(2)]);
var inst_43844 = (inst_43836 + (1));
var tmp43890 = inst_43835;
var tmp43891 = inst_43834;
var tmp43892 = inst_43833;
var inst_43833__$1 = tmp43892;
var inst_43834__$1 = tmp43891;
var inst_43835__$1 = tmp43890;
var inst_43836__$1 = inst_43844;
var state_43881__$1 = (function (){var statearr_43895 = state_43881;
(statearr_43895[(14)] = inst_43843);

(statearr_43895[(9)] = inst_43836__$1);

(statearr_43895[(10)] = inst_43835__$1);

(statearr_43895[(11)] = inst_43834__$1);

(statearr_43895[(12)] = inst_43833__$1);

return statearr_43895;
})();
var statearr_43896_43931 = state_43881__$1;
(statearr_43896_43931[(2)] = null);

(statearr_43896_43931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43882 === (22))){
var state_43881__$1 = state_43881;
var statearr_43897_43932 = state_43881__$1;
(statearr_43897_43932[(2)] = null);

(statearr_43897_43932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43882 === (6))){
var inst_43822 = (state_43881[(13)]);
var inst_43831 = f.call(null,inst_43822);
var inst_43832 = cljs.core.seq.call(null,inst_43831);
var inst_43833 = inst_43832;
var inst_43834 = null;
var inst_43835 = (0);
var inst_43836 = (0);
var state_43881__$1 = (function (){var statearr_43898 = state_43881;
(statearr_43898[(9)] = inst_43836);

(statearr_43898[(10)] = inst_43835);

(statearr_43898[(11)] = inst_43834);

(statearr_43898[(12)] = inst_43833);

return statearr_43898;
})();
var statearr_43899_43933 = state_43881__$1;
(statearr_43899_43933[(2)] = null);

(statearr_43899_43933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43882 === (17))){
var inst_43847 = (state_43881[(7)]);
var inst_43851 = cljs.core.chunk_first.call(null,inst_43847);
var inst_43852 = cljs.core.chunk_rest.call(null,inst_43847);
var inst_43853 = cljs.core.count.call(null,inst_43851);
var inst_43833 = inst_43852;
var inst_43834 = inst_43851;
var inst_43835 = inst_43853;
var inst_43836 = (0);
var state_43881__$1 = (function (){var statearr_43900 = state_43881;
(statearr_43900[(9)] = inst_43836);

(statearr_43900[(10)] = inst_43835);

(statearr_43900[(11)] = inst_43834);

(statearr_43900[(12)] = inst_43833);

return statearr_43900;
})();
var statearr_43901_43934 = state_43881__$1;
(statearr_43901_43934[(2)] = null);

(statearr_43901_43934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43882 === (3))){
var inst_43879 = (state_43881[(2)]);
var state_43881__$1 = state_43881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43881__$1,inst_43879);
} else {
if((state_val_43882 === (12))){
var inst_43867 = (state_43881[(2)]);
var state_43881__$1 = state_43881;
var statearr_43902_43935 = state_43881__$1;
(statearr_43902_43935[(2)] = inst_43867);

(statearr_43902_43935[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43882 === (2))){
var state_43881__$1 = state_43881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43881__$1,(4),in$);
} else {
if((state_val_43882 === (23))){
var inst_43875 = (state_43881[(2)]);
var state_43881__$1 = state_43881;
var statearr_43903_43936 = state_43881__$1;
(statearr_43903_43936[(2)] = inst_43875);

(statearr_43903_43936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43882 === (19))){
var inst_43862 = (state_43881[(2)]);
var state_43881__$1 = state_43881;
var statearr_43904_43937 = state_43881__$1;
(statearr_43904_43937[(2)] = inst_43862);

(statearr_43904_43937[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43882 === (11))){
var inst_43847 = (state_43881[(7)]);
var inst_43833 = (state_43881[(12)]);
var inst_43847__$1 = cljs.core.seq.call(null,inst_43833);
var state_43881__$1 = (function (){var statearr_43905 = state_43881;
(statearr_43905[(7)] = inst_43847__$1);

return statearr_43905;
})();
if(inst_43847__$1){
var statearr_43906_43938 = state_43881__$1;
(statearr_43906_43938[(1)] = (14));

} else {
var statearr_43907_43939 = state_43881__$1;
(statearr_43907_43939[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43882 === (9))){
var inst_43869 = (state_43881[(2)]);
var inst_43870 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_43881__$1 = (function (){var statearr_43908 = state_43881;
(statearr_43908[(15)] = inst_43869);

return statearr_43908;
})();
if(cljs.core.truth_(inst_43870)){
var statearr_43909_43940 = state_43881__$1;
(statearr_43909_43940[(1)] = (21));

} else {
var statearr_43910_43941 = state_43881__$1;
(statearr_43910_43941[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43882 === (5))){
var inst_43825 = cljs.core.async.close_BANG_.call(null,out);
var state_43881__$1 = state_43881;
var statearr_43911_43942 = state_43881__$1;
(statearr_43911_43942[(2)] = inst_43825);

(statearr_43911_43942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43882 === (14))){
var inst_43847 = (state_43881[(7)]);
var inst_43849 = cljs.core.chunked_seq_QMARK_.call(null,inst_43847);
var state_43881__$1 = state_43881;
if(inst_43849){
var statearr_43912_43943 = state_43881__$1;
(statearr_43912_43943[(1)] = (17));

} else {
var statearr_43913_43944 = state_43881__$1;
(statearr_43913_43944[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43882 === (16))){
var inst_43865 = (state_43881[(2)]);
var state_43881__$1 = state_43881;
var statearr_43914_43945 = state_43881__$1;
(statearr_43914_43945[(2)] = inst_43865);

(statearr_43914_43945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43882 === (10))){
var inst_43836 = (state_43881[(9)]);
var inst_43834 = (state_43881[(11)]);
var inst_43841 = cljs.core._nth.call(null,inst_43834,inst_43836);
var state_43881__$1 = state_43881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43881__$1,(13),out,inst_43841);
} else {
if((state_val_43882 === (18))){
var inst_43847 = (state_43881[(7)]);
var inst_43856 = cljs.core.first.call(null,inst_43847);
var state_43881__$1 = state_43881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43881__$1,(20),out,inst_43856);
} else {
if((state_val_43882 === (8))){
var inst_43836 = (state_43881[(9)]);
var inst_43835 = (state_43881[(10)]);
var inst_43838 = (inst_43836 < inst_43835);
var inst_43839 = inst_43838;
var state_43881__$1 = state_43881;
if(cljs.core.truth_(inst_43839)){
var statearr_43915_43946 = state_43881__$1;
(statearr_43915_43946[(1)] = (10));

} else {
var statearr_43916_43947 = state_43881__$1;
(statearr_43916_43947[(1)] = (11));

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
});})(c__38833__auto__))
;
return ((function (switch__38812__auto__,c__38833__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__38813__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__38813__auto____0 = (function (){
var statearr_43920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43920[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__38813__auto__);

(statearr_43920[(1)] = (1));

return statearr_43920;
});
var cljs$core$async$mapcat_STAR__$_state_machine__38813__auto____1 = (function (state_43881){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_43881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e43921){if((e43921 instanceof Object)){
var ex__38816__auto__ = e43921;
var statearr_43922_43948 = state_43881;
(statearr_43922_43948[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43949 = state_43881;
state_43881 = G__43949;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__38813__auto__ = function(state_43881){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__38813__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__38813__auto____1.call(this,state_43881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__38813__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__38813__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto__))
})();
var state__38835__auto__ = (function (){var statearr_43923 = f__38834__auto__.call(null);
(statearr_43923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto__);

return statearr_43923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto__))
);

return c__38833__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args43950 = [];
var len__35614__auto___43953 = arguments.length;
var i__35615__auto___43954 = (0);
while(true){
if((i__35615__auto___43954 < len__35614__auto___43953)){
args43950.push((arguments[i__35615__auto___43954]));

var G__43955 = (i__35615__auto___43954 + (1));
i__35615__auto___43954 = G__43955;
continue;
} else {
}
break;
}

var G__43952 = args43950.length;
switch (G__43952) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43950.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args43957 = [];
var len__35614__auto___43960 = arguments.length;
var i__35615__auto___43961 = (0);
while(true){
if((i__35615__auto___43961 < len__35614__auto___43960)){
args43957.push((arguments[i__35615__auto___43961]));

var G__43962 = (i__35615__auto___43961 + (1));
i__35615__auto___43961 = G__43962;
continue;
} else {
}
break;
}

var G__43959 = args43957.length;
switch (G__43959) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43957.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args43964 = [];
var len__35614__auto___44015 = arguments.length;
var i__35615__auto___44016 = (0);
while(true){
if((i__35615__auto___44016 < len__35614__auto___44015)){
args43964.push((arguments[i__35615__auto___44016]));

var G__44017 = (i__35615__auto___44016 + (1));
i__35615__auto___44016 = G__44017;
continue;
} else {
}
break;
}

var G__43966 = args43964.length;
switch (G__43966) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43964.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38833__auto___44019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto___44019,out){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto___44019,out){
return (function (state_43990){
var state_val_43991 = (state_43990[(1)]);
if((state_val_43991 === (7))){
var inst_43985 = (state_43990[(2)]);
var state_43990__$1 = state_43990;
var statearr_43992_44020 = state_43990__$1;
(statearr_43992_44020[(2)] = inst_43985);

(statearr_43992_44020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43991 === (1))){
var inst_43967 = null;
var state_43990__$1 = (function (){var statearr_43993 = state_43990;
(statearr_43993[(7)] = inst_43967);

return statearr_43993;
})();
var statearr_43994_44021 = state_43990__$1;
(statearr_43994_44021[(2)] = null);

(statearr_43994_44021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43991 === (4))){
var inst_43970 = (state_43990[(8)]);
var inst_43970__$1 = (state_43990[(2)]);
var inst_43971 = (inst_43970__$1 == null);
var inst_43972 = cljs.core.not.call(null,inst_43971);
var state_43990__$1 = (function (){var statearr_43995 = state_43990;
(statearr_43995[(8)] = inst_43970__$1);

return statearr_43995;
})();
if(inst_43972){
var statearr_43996_44022 = state_43990__$1;
(statearr_43996_44022[(1)] = (5));

} else {
var statearr_43997_44023 = state_43990__$1;
(statearr_43997_44023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43991 === (6))){
var state_43990__$1 = state_43990;
var statearr_43998_44024 = state_43990__$1;
(statearr_43998_44024[(2)] = null);

(statearr_43998_44024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43991 === (3))){
var inst_43987 = (state_43990[(2)]);
var inst_43988 = cljs.core.async.close_BANG_.call(null,out);
var state_43990__$1 = (function (){var statearr_43999 = state_43990;
(statearr_43999[(9)] = inst_43987);

return statearr_43999;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43990__$1,inst_43988);
} else {
if((state_val_43991 === (2))){
var state_43990__$1 = state_43990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43990__$1,(4),ch);
} else {
if((state_val_43991 === (11))){
var inst_43970 = (state_43990[(8)]);
var inst_43979 = (state_43990[(2)]);
var inst_43967 = inst_43970;
var state_43990__$1 = (function (){var statearr_44000 = state_43990;
(statearr_44000[(10)] = inst_43979);

(statearr_44000[(7)] = inst_43967);

return statearr_44000;
})();
var statearr_44001_44025 = state_43990__$1;
(statearr_44001_44025[(2)] = null);

(statearr_44001_44025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43991 === (9))){
var inst_43970 = (state_43990[(8)]);
var state_43990__$1 = state_43990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43990__$1,(11),out,inst_43970);
} else {
if((state_val_43991 === (5))){
var inst_43970 = (state_43990[(8)]);
var inst_43967 = (state_43990[(7)]);
var inst_43974 = cljs.core._EQ_.call(null,inst_43970,inst_43967);
var state_43990__$1 = state_43990;
if(inst_43974){
var statearr_44003_44026 = state_43990__$1;
(statearr_44003_44026[(1)] = (8));

} else {
var statearr_44004_44027 = state_43990__$1;
(statearr_44004_44027[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43991 === (10))){
var inst_43982 = (state_43990[(2)]);
var state_43990__$1 = state_43990;
var statearr_44005_44028 = state_43990__$1;
(statearr_44005_44028[(2)] = inst_43982);

(statearr_44005_44028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43991 === (8))){
var inst_43967 = (state_43990[(7)]);
var tmp44002 = inst_43967;
var inst_43967__$1 = tmp44002;
var state_43990__$1 = (function (){var statearr_44006 = state_43990;
(statearr_44006[(7)] = inst_43967__$1);

return statearr_44006;
})();
var statearr_44007_44029 = state_43990__$1;
(statearr_44007_44029[(2)] = null);

(statearr_44007_44029[(1)] = (2));


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
});})(c__38833__auto___44019,out))
;
return ((function (switch__38812__auto__,c__38833__auto___44019,out){
return (function() {
var cljs$core$async$state_machine__38813__auto__ = null;
var cljs$core$async$state_machine__38813__auto____0 = (function (){
var statearr_44011 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_44011[(0)] = cljs$core$async$state_machine__38813__auto__);

(statearr_44011[(1)] = (1));

return statearr_44011;
});
var cljs$core$async$state_machine__38813__auto____1 = (function (state_43990){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_43990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e44012){if((e44012 instanceof Object)){
var ex__38816__auto__ = e44012;
var statearr_44013_44030 = state_43990;
(statearr_44013_44030[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44031 = state_43990;
state_43990 = G__44031;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
cljs$core$async$state_machine__38813__auto__ = function(state_43990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38813__auto____1.call(this,state_43990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38813__auto____0;
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38813__auto____1;
return cljs$core$async$state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto___44019,out))
})();
var state__38835__auto__ = (function (){var statearr_44014 = f__38834__auto__.call(null);
(statearr_44014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto___44019);

return statearr_44014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto___44019,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args44032 = [];
var len__35614__auto___44102 = arguments.length;
var i__35615__auto___44103 = (0);
while(true){
if((i__35615__auto___44103 < len__35614__auto___44102)){
args44032.push((arguments[i__35615__auto___44103]));

var G__44104 = (i__35615__auto___44103 + (1));
i__35615__auto___44103 = G__44104;
continue;
} else {
}
break;
}

var G__44034 = args44032.length;
switch (G__44034) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44032.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38833__auto___44106 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto___44106,out){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto___44106,out){
return (function (state_44072){
var state_val_44073 = (state_44072[(1)]);
if((state_val_44073 === (7))){
var inst_44068 = (state_44072[(2)]);
var state_44072__$1 = state_44072;
var statearr_44074_44107 = state_44072__$1;
(statearr_44074_44107[(2)] = inst_44068);

(statearr_44074_44107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (1))){
var inst_44035 = (new Array(n));
var inst_44036 = inst_44035;
var inst_44037 = (0);
var state_44072__$1 = (function (){var statearr_44075 = state_44072;
(statearr_44075[(7)] = inst_44036);

(statearr_44075[(8)] = inst_44037);

return statearr_44075;
})();
var statearr_44076_44108 = state_44072__$1;
(statearr_44076_44108[(2)] = null);

(statearr_44076_44108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (4))){
var inst_44040 = (state_44072[(9)]);
var inst_44040__$1 = (state_44072[(2)]);
var inst_44041 = (inst_44040__$1 == null);
var inst_44042 = cljs.core.not.call(null,inst_44041);
var state_44072__$1 = (function (){var statearr_44077 = state_44072;
(statearr_44077[(9)] = inst_44040__$1);

return statearr_44077;
})();
if(inst_44042){
var statearr_44078_44109 = state_44072__$1;
(statearr_44078_44109[(1)] = (5));

} else {
var statearr_44079_44110 = state_44072__$1;
(statearr_44079_44110[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (15))){
var inst_44062 = (state_44072[(2)]);
var state_44072__$1 = state_44072;
var statearr_44080_44111 = state_44072__$1;
(statearr_44080_44111[(2)] = inst_44062);

(statearr_44080_44111[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (13))){
var state_44072__$1 = state_44072;
var statearr_44081_44112 = state_44072__$1;
(statearr_44081_44112[(2)] = null);

(statearr_44081_44112[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (6))){
var inst_44037 = (state_44072[(8)]);
var inst_44058 = (inst_44037 > (0));
var state_44072__$1 = state_44072;
if(cljs.core.truth_(inst_44058)){
var statearr_44082_44113 = state_44072__$1;
(statearr_44082_44113[(1)] = (12));

} else {
var statearr_44083_44114 = state_44072__$1;
(statearr_44083_44114[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (3))){
var inst_44070 = (state_44072[(2)]);
var state_44072__$1 = state_44072;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44072__$1,inst_44070);
} else {
if((state_val_44073 === (12))){
var inst_44036 = (state_44072[(7)]);
var inst_44060 = cljs.core.vec.call(null,inst_44036);
var state_44072__$1 = state_44072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44072__$1,(15),out,inst_44060);
} else {
if((state_val_44073 === (2))){
var state_44072__$1 = state_44072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44072__$1,(4),ch);
} else {
if((state_val_44073 === (11))){
var inst_44052 = (state_44072[(2)]);
var inst_44053 = (new Array(n));
var inst_44036 = inst_44053;
var inst_44037 = (0);
var state_44072__$1 = (function (){var statearr_44084 = state_44072;
(statearr_44084[(10)] = inst_44052);

(statearr_44084[(7)] = inst_44036);

(statearr_44084[(8)] = inst_44037);

return statearr_44084;
})();
var statearr_44085_44115 = state_44072__$1;
(statearr_44085_44115[(2)] = null);

(statearr_44085_44115[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (9))){
var inst_44036 = (state_44072[(7)]);
var inst_44050 = cljs.core.vec.call(null,inst_44036);
var state_44072__$1 = state_44072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44072__$1,(11),out,inst_44050);
} else {
if((state_val_44073 === (5))){
var inst_44036 = (state_44072[(7)]);
var inst_44045 = (state_44072[(11)]);
var inst_44037 = (state_44072[(8)]);
var inst_44040 = (state_44072[(9)]);
var inst_44044 = (inst_44036[inst_44037] = inst_44040);
var inst_44045__$1 = (inst_44037 + (1));
var inst_44046 = (inst_44045__$1 < n);
var state_44072__$1 = (function (){var statearr_44086 = state_44072;
(statearr_44086[(12)] = inst_44044);

(statearr_44086[(11)] = inst_44045__$1);

return statearr_44086;
})();
if(cljs.core.truth_(inst_44046)){
var statearr_44087_44116 = state_44072__$1;
(statearr_44087_44116[(1)] = (8));

} else {
var statearr_44088_44117 = state_44072__$1;
(statearr_44088_44117[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (14))){
var inst_44065 = (state_44072[(2)]);
var inst_44066 = cljs.core.async.close_BANG_.call(null,out);
var state_44072__$1 = (function (){var statearr_44090 = state_44072;
(statearr_44090[(13)] = inst_44065);

return statearr_44090;
})();
var statearr_44091_44118 = state_44072__$1;
(statearr_44091_44118[(2)] = inst_44066);

(statearr_44091_44118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (10))){
var inst_44056 = (state_44072[(2)]);
var state_44072__$1 = state_44072;
var statearr_44092_44119 = state_44072__$1;
(statearr_44092_44119[(2)] = inst_44056);

(statearr_44092_44119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44073 === (8))){
var inst_44036 = (state_44072[(7)]);
var inst_44045 = (state_44072[(11)]);
var tmp44089 = inst_44036;
var inst_44036__$1 = tmp44089;
var inst_44037 = inst_44045;
var state_44072__$1 = (function (){var statearr_44093 = state_44072;
(statearr_44093[(7)] = inst_44036__$1);

(statearr_44093[(8)] = inst_44037);

return statearr_44093;
})();
var statearr_44094_44120 = state_44072__$1;
(statearr_44094_44120[(2)] = null);

(statearr_44094_44120[(1)] = (2));


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
});})(c__38833__auto___44106,out))
;
return ((function (switch__38812__auto__,c__38833__auto___44106,out){
return (function() {
var cljs$core$async$state_machine__38813__auto__ = null;
var cljs$core$async$state_machine__38813__auto____0 = (function (){
var statearr_44098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44098[(0)] = cljs$core$async$state_machine__38813__auto__);

(statearr_44098[(1)] = (1));

return statearr_44098;
});
var cljs$core$async$state_machine__38813__auto____1 = (function (state_44072){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_44072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e44099){if((e44099 instanceof Object)){
var ex__38816__auto__ = e44099;
var statearr_44100_44121 = state_44072;
(statearr_44100_44121[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44122 = state_44072;
state_44072 = G__44122;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
cljs$core$async$state_machine__38813__auto__ = function(state_44072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38813__auto____1.call(this,state_44072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38813__auto____0;
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38813__auto____1;
return cljs$core$async$state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto___44106,out))
})();
var state__38835__auto__ = (function (){var statearr_44101 = f__38834__auto__.call(null);
(statearr_44101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto___44106);

return statearr_44101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto___44106,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args44123 = [];
var len__35614__auto___44197 = arguments.length;
var i__35615__auto___44198 = (0);
while(true){
if((i__35615__auto___44198 < len__35614__auto___44197)){
args44123.push((arguments[i__35615__auto___44198]));

var G__44199 = (i__35615__auto___44198 + (1));
i__35615__auto___44198 = G__44199;
continue;
} else {
}
break;
}

var G__44125 = args44123.length;
switch (G__44125) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args44123.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__38833__auto___44201 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__38833__auto___44201,out){
return (function (){
var f__38834__auto__ = (function (){var switch__38812__auto__ = ((function (c__38833__auto___44201,out){
return (function (state_44167){
var state_val_44168 = (state_44167[(1)]);
if((state_val_44168 === (7))){
var inst_44163 = (state_44167[(2)]);
var state_44167__$1 = state_44167;
var statearr_44169_44202 = state_44167__$1;
(statearr_44169_44202[(2)] = inst_44163);

(statearr_44169_44202[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44168 === (1))){
var inst_44126 = [];
var inst_44127 = inst_44126;
var inst_44128 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_44167__$1 = (function (){var statearr_44170 = state_44167;
(statearr_44170[(7)] = inst_44128);

(statearr_44170[(8)] = inst_44127);

return statearr_44170;
})();
var statearr_44171_44203 = state_44167__$1;
(statearr_44171_44203[(2)] = null);

(statearr_44171_44203[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44168 === (4))){
var inst_44131 = (state_44167[(9)]);
var inst_44131__$1 = (state_44167[(2)]);
var inst_44132 = (inst_44131__$1 == null);
var inst_44133 = cljs.core.not.call(null,inst_44132);
var state_44167__$1 = (function (){var statearr_44172 = state_44167;
(statearr_44172[(9)] = inst_44131__$1);

return statearr_44172;
})();
if(inst_44133){
var statearr_44173_44204 = state_44167__$1;
(statearr_44173_44204[(1)] = (5));

} else {
var statearr_44174_44205 = state_44167__$1;
(statearr_44174_44205[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44168 === (15))){
var inst_44157 = (state_44167[(2)]);
var state_44167__$1 = state_44167;
var statearr_44175_44206 = state_44167__$1;
(statearr_44175_44206[(2)] = inst_44157);

(statearr_44175_44206[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44168 === (13))){
var state_44167__$1 = state_44167;
var statearr_44176_44207 = state_44167__$1;
(statearr_44176_44207[(2)] = null);

(statearr_44176_44207[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44168 === (6))){
var inst_44127 = (state_44167[(8)]);
var inst_44152 = inst_44127.length;
var inst_44153 = (inst_44152 > (0));
var state_44167__$1 = state_44167;
if(cljs.core.truth_(inst_44153)){
var statearr_44177_44208 = state_44167__$1;
(statearr_44177_44208[(1)] = (12));

} else {
var statearr_44178_44209 = state_44167__$1;
(statearr_44178_44209[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44168 === (3))){
var inst_44165 = (state_44167[(2)]);
var state_44167__$1 = state_44167;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44167__$1,inst_44165);
} else {
if((state_val_44168 === (12))){
var inst_44127 = (state_44167[(8)]);
var inst_44155 = cljs.core.vec.call(null,inst_44127);
var state_44167__$1 = state_44167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44167__$1,(15),out,inst_44155);
} else {
if((state_val_44168 === (2))){
var state_44167__$1 = state_44167;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44167__$1,(4),ch);
} else {
if((state_val_44168 === (11))){
var inst_44135 = (state_44167[(10)]);
var inst_44131 = (state_44167[(9)]);
var inst_44145 = (state_44167[(2)]);
var inst_44146 = [];
var inst_44147 = inst_44146.push(inst_44131);
var inst_44127 = inst_44146;
var inst_44128 = inst_44135;
var state_44167__$1 = (function (){var statearr_44179 = state_44167;
(statearr_44179[(7)] = inst_44128);

(statearr_44179[(11)] = inst_44147);

(statearr_44179[(8)] = inst_44127);

(statearr_44179[(12)] = inst_44145);

return statearr_44179;
})();
var statearr_44180_44210 = state_44167__$1;
(statearr_44180_44210[(2)] = null);

(statearr_44180_44210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44168 === (9))){
var inst_44127 = (state_44167[(8)]);
var inst_44143 = cljs.core.vec.call(null,inst_44127);
var state_44167__$1 = state_44167;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44167__$1,(11),out,inst_44143);
} else {
if((state_val_44168 === (5))){
var inst_44135 = (state_44167[(10)]);
var inst_44128 = (state_44167[(7)]);
var inst_44131 = (state_44167[(9)]);
var inst_44135__$1 = f.call(null,inst_44131);
var inst_44136 = cljs.core._EQ_.call(null,inst_44135__$1,inst_44128);
var inst_44137 = cljs.core.keyword_identical_QMARK_.call(null,inst_44128,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_44138 = (inst_44136) || (inst_44137);
var state_44167__$1 = (function (){var statearr_44181 = state_44167;
(statearr_44181[(10)] = inst_44135__$1);

return statearr_44181;
})();
if(cljs.core.truth_(inst_44138)){
var statearr_44182_44211 = state_44167__$1;
(statearr_44182_44211[(1)] = (8));

} else {
var statearr_44183_44212 = state_44167__$1;
(statearr_44183_44212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44168 === (14))){
var inst_44160 = (state_44167[(2)]);
var inst_44161 = cljs.core.async.close_BANG_.call(null,out);
var state_44167__$1 = (function (){var statearr_44185 = state_44167;
(statearr_44185[(13)] = inst_44160);

return statearr_44185;
})();
var statearr_44186_44213 = state_44167__$1;
(statearr_44186_44213[(2)] = inst_44161);

(statearr_44186_44213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44168 === (10))){
var inst_44150 = (state_44167[(2)]);
var state_44167__$1 = state_44167;
var statearr_44187_44214 = state_44167__$1;
(statearr_44187_44214[(2)] = inst_44150);

(statearr_44187_44214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_44168 === (8))){
var inst_44135 = (state_44167[(10)]);
var inst_44131 = (state_44167[(9)]);
var inst_44127 = (state_44167[(8)]);
var inst_44140 = inst_44127.push(inst_44131);
var tmp44184 = inst_44127;
var inst_44127__$1 = tmp44184;
var inst_44128 = inst_44135;
var state_44167__$1 = (function (){var statearr_44188 = state_44167;
(statearr_44188[(7)] = inst_44128);

(statearr_44188[(8)] = inst_44127__$1);

(statearr_44188[(14)] = inst_44140);

return statearr_44188;
})();
var statearr_44189_44215 = state_44167__$1;
(statearr_44189_44215[(2)] = null);

(statearr_44189_44215[(1)] = (2));


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
});})(c__38833__auto___44201,out))
;
return ((function (switch__38812__auto__,c__38833__auto___44201,out){
return (function() {
var cljs$core$async$state_machine__38813__auto__ = null;
var cljs$core$async$state_machine__38813__auto____0 = (function (){
var statearr_44193 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_44193[(0)] = cljs$core$async$state_machine__38813__auto__);

(statearr_44193[(1)] = (1));

return statearr_44193;
});
var cljs$core$async$state_machine__38813__auto____1 = (function (state_44167){
while(true){
var ret_value__38814__auto__ = (function (){try{while(true){
var result__38815__auto__ = switch__38812__auto__.call(null,state_44167);
if(cljs.core.keyword_identical_QMARK_.call(null,result__38815__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__38815__auto__;
}
break;
}
}catch (e44194){if((e44194 instanceof Object)){
var ex__38816__auto__ = e44194;
var statearr_44195_44216 = state_44167;
(statearr_44195_44216[(5)] = ex__38816__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44167);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44194;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__38814__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44217 = state_44167;
state_44167 = G__44217;
continue;
} else {
return ret_value__38814__auto__;
}
break;
}
});
cljs$core$async$state_machine__38813__auto__ = function(state_44167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__38813__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__38813__auto____1.call(this,state_44167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__38813__auto____0;
cljs$core$async$state_machine__38813__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__38813__auto____1;
return cljs$core$async$state_machine__38813__auto__;
})()
;})(switch__38812__auto__,c__38833__auto___44201,out))
})();
var state__38835__auto__ = (function (){var statearr_44196 = f__38834__auto__.call(null);
(statearr_44196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__38833__auto___44201);

return statearr_44196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__38835__auto__);
});})(c__38833__auto___44201,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map