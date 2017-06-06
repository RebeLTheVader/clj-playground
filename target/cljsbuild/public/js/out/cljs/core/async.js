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
var args39740 = [];
var len__35630__auto___39746 = arguments.length;
var i__35631__auto___39747 = (0);
while(true){
if((i__35631__auto___39747 < len__35630__auto___39746)){
args39740.push((arguments[i__35631__auto___39747]));

var G__39748 = (i__35631__auto___39747 + (1));
i__35631__auto___39747 = G__39748;
continue;
} else {
}
break;
}

var G__39742 = args39740.length;
switch (G__39742) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39740.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async39743 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39743 = (function (f,blockable,meta39744){
this.f = f;
this.blockable = blockable;
this.meta39744 = meta39744;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39745,meta39744__$1){
var self__ = this;
var _39745__$1 = this;
return (new cljs.core.async.t_cljs$core$async39743(self__.f,self__.blockable,meta39744__$1));
});

cljs.core.async.t_cljs$core$async39743.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39745){
var self__ = this;
var _39745__$1 = this;
return self__.meta39744;
});

cljs.core.async.t_cljs$core$async39743.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39743.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39743.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async39743.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async39743.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta39744","meta39744",1345619550,null)], null);
});

cljs.core.async.t_cljs$core$async39743.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39743.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39743";

cljs.core.async.t_cljs$core$async39743.cljs$lang$ctorPrWriter = (function (this__35170__auto__,writer__35171__auto__,opt__35172__auto__){
return cljs.core._write.call(null,writer__35171__auto__,"cljs.core.async/t_cljs$core$async39743");
});

cljs.core.async.__GT_t_cljs$core$async39743 = (function cljs$core$async$__GT_t_cljs$core$async39743(f__$1,blockable__$1,meta39744){
return (new cljs.core.async.t_cljs$core$async39743(f__$1,blockable__$1,meta39744));
});

}

return (new cljs.core.async.t_cljs$core$async39743(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args39752 = [];
var len__35630__auto___39755 = arguments.length;
var i__35631__auto___39756 = (0);
while(true){
if((i__35631__auto___39756 < len__35630__auto___39755)){
args39752.push((arguments[i__35631__auto___39756]));

var G__39757 = (i__35631__auto___39756 + (1));
i__35631__auto___39756 = G__39757;
continue;
} else {
}
break;
}

var G__39754 = args39752.length;
switch (G__39754) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39752.length)].join('')));

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
var args39759 = [];
var len__35630__auto___39762 = arguments.length;
var i__35631__auto___39763 = (0);
while(true){
if((i__35631__auto___39763 < len__35630__auto___39762)){
args39759.push((arguments[i__35631__auto___39763]));

var G__39764 = (i__35631__auto___39763 + (1));
i__35631__auto___39763 = G__39764;
continue;
} else {
}
break;
}

var G__39761 = args39759.length;
switch (G__39761) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39759.length)].join('')));

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
var args39766 = [];
var len__35630__auto___39769 = arguments.length;
var i__35631__auto___39770 = (0);
while(true){
if((i__35631__auto___39770 < len__35630__auto___39769)){
args39766.push((arguments[i__35631__auto___39770]));

var G__39771 = (i__35631__auto___39770 + (1));
i__35631__auto___39770 = G__39771;
continue;
} else {
}
break;
}

var G__39768 = args39766.length;
switch (G__39768) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39766.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_39773 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_39773);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_39773,ret){
return (function (){
return fn1.call(null,val_39773);
});})(val_39773,ret))
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
var args39774 = [];
var len__35630__auto___39777 = arguments.length;
var i__35631__auto___39778 = (0);
while(true){
if((i__35631__auto___39778 < len__35630__auto___39777)){
args39774.push((arguments[i__35631__auto___39778]));

var G__39779 = (i__35631__auto___39778 + (1));
i__35631__auto___39778 = G__39779;
continue;
} else {
}
break;
}

var G__39776 = args39774.length;
switch (G__39776) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39774.length)].join('')));

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
var n__35475__auto___39781 = n;
var x_39782 = (0);
while(true){
if((x_39782 < n__35475__auto___39781)){
(a[x_39782] = (0));

var G__39783 = (x_39782 + (1));
x_39782 = G__39783;
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

var G__39784 = (i + (1));
i = G__39784;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async39788 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39788 = (function (alt_flag,flag,meta39789){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta39789 = meta39789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_39790,meta39789__$1){
var self__ = this;
var _39790__$1 = this;
return (new cljs.core.async.t_cljs$core$async39788(self__.alt_flag,self__.flag,meta39789__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async39788.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_39790){
var self__ = this;
var _39790__$1 = this;
return self__.meta39789;
});})(flag))
;

cljs.core.async.t_cljs$core$async39788.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39788.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async39788.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39788.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async39788.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta39789","meta39789",1294407054,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async39788.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39788";

cljs.core.async.t_cljs$core$async39788.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__35170__auto__,writer__35171__auto__,opt__35172__auto__){
return cljs.core._write.call(null,writer__35171__auto__,"cljs.core.async/t_cljs$core$async39788");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async39788 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async39788(alt_flag__$1,flag__$1,meta39789){
return (new cljs.core.async.t_cljs$core$async39788(alt_flag__$1,flag__$1,meta39789));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async39788(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async39794 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39794 = (function (alt_handler,flag,cb,meta39795){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta39795 = meta39795;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async39794.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39796,meta39795__$1){
var self__ = this;
var _39796__$1 = this;
return (new cljs.core.async.t_cljs$core$async39794(self__.alt_handler,self__.flag,self__.cb,meta39795__$1));
});

cljs.core.async.t_cljs$core$async39794.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39796){
var self__ = this;
var _39796__$1 = this;
return self__.meta39795;
});

cljs.core.async.t_cljs$core$async39794.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async39794.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async39794.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async39794.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async39794.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta39795","meta39795",-1333662013,null)], null);
});

cljs.core.async.t_cljs$core$async39794.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39794.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39794";

cljs.core.async.t_cljs$core$async39794.cljs$lang$ctorPrWriter = (function (this__35170__auto__,writer__35171__auto__,opt__35172__auto__){
return cljs.core._write.call(null,writer__35171__auto__,"cljs.core.async/t_cljs$core$async39794");
});

cljs.core.async.__GT_t_cljs$core$async39794 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async39794(alt_handler__$1,flag__$1,cb__$1,meta39795){
return (new cljs.core.async.t_cljs$core$async39794(alt_handler__$1,flag__$1,cb__$1,meta39795));
});

}

return (new cljs.core.async.t_cljs$core$async39794(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__39797_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39797_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__39798_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__39798_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__34572__auto__ = wport;
if(cljs.core.truth_(or__34572__auto__)){
return or__34572__auto__;
} else {
return port;
}
})()], null));
} else {
var G__39799 = (i + (1));
i = G__39799;
continue;
}
} else {
return null;
}
break;
}
})();
var or__34572__auto__ = ret;
if(cljs.core.truth_(or__34572__auto__)){
return or__34572__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__34560__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__34560__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__34560__auto__;
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
var args__35637__auto__ = [];
var len__35630__auto___39805 = arguments.length;
var i__35631__auto___39806 = (0);
while(true){
if((i__35631__auto___39806 < len__35630__auto___39805)){
args__35637__auto__.push((arguments[i__35631__auto___39806]));

var G__39807 = (i__35631__auto___39806 + (1));
i__35631__auto___39806 = G__39807;
continue;
} else {
}
break;
}

var argseq__35638__auto__ = ((((1) < args__35637__auto__.length))?(new cljs.core.IndexedSeq(args__35637__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__35638__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__39802){
var map__39803 = p__39802;
var map__39803__$1 = ((((!((map__39803 == null)))?((((map__39803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39803):map__39803);
var opts = map__39803__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq39800){
var G__39801 = cljs.core.first.call(null,seq39800);
var seq39800__$1 = cljs.core.next.call(null,seq39800);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39801,seq39800__$1);
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
var args39808 = [];
var len__35630__auto___39858 = arguments.length;
var i__35631__auto___39859 = (0);
while(true){
if((i__35631__auto___39859 < len__35630__auto___39858)){
args39808.push((arguments[i__35631__auto___39859]));

var G__39860 = (i__35631__auto___39859 + (1));
i__35631__auto___39859 = G__39860;
continue;
} else {
}
break;
}

var G__39810 = args39808.length;
switch (G__39810) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args39808.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__37149__auto___39862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto___39862){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto___39862){
return (function (state_39834){
var state_val_39835 = (state_39834[(1)]);
if((state_val_39835 === (7))){
var inst_39830 = (state_39834[(2)]);
var state_39834__$1 = state_39834;
var statearr_39836_39863 = state_39834__$1;
(statearr_39836_39863[(2)] = inst_39830);

(statearr_39836_39863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39835 === (1))){
var state_39834__$1 = state_39834;
var statearr_39837_39864 = state_39834__$1;
(statearr_39837_39864[(2)] = null);

(statearr_39837_39864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39835 === (4))){
var inst_39813 = (state_39834[(7)]);
var inst_39813__$1 = (state_39834[(2)]);
var inst_39814 = (inst_39813__$1 == null);
var state_39834__$1 = (function (){var statearr_39838 = state_39834;
(statearr_39838[(7)] = inst_39813__$1);

return statearr_39838;
})();
if(cljs.core.truth_(inst_39814)){
var statearr_39839_39865 = state_39834__$1;
(statearr_39839_39865[(1)] = (5));

} else {
var statearr_39840_39866 = state_39834__$1;
(statearr_39840_39866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39835 === (13))){
var state_39834__$1 = state_39834;
var statearr_39841_39867 = state_39834__$1;
(statearr_39841_39867[(2)] = null);

(statearr_39841_39867[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39835 === (6))){
var inst_39813 = (state_39834[(7)]);
var state_39834__$1 = state_39834;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39834__$1,(11),to,inst_39813);
} else {
if((state_val_39835 === (3))){
var inst_39832 = (state_39834[(2)]);
var state_39834__$1 = state_39834;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39834__$1,inst_39832);
} else {
if((state_val_39835 === (12))){
var state_39834__$1 = state_39834;
var statearr_39842_39868 = state_39834__$1;
(statearr_39842_39868[(2)] = null);

(statearr_39842_39868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39835 === (2))){
var state_39834__$1 = state_39834;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39834__$1,(4),from);
} else {
if((state_val_39835 === (11))){
var inst_39823 = (state_39834[(2)]);
var state_39834__$1 = state_39834;
if(cljs.core.truth_(inst_39823)){
var statearr_39843_39869 = state_39834__$1;
(statearr_39843_39869[(1)] = (12));

} else {
var statearr_39844_39870 = state_39834__$1;
(statearr_39844_39870[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39835 === (9))){
var state_39834__$1 = state_39834;
var statearr_39845_39871 = state_39834__$1;
(statearr_39845_39871[(2)] = null);

(statearr_39845_39871[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39835 === (5))){
var state_39834__$1 = state_39834;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39846_39872 = state_39834__$1;
(statearr_39846_39872[(1)] = (8));

} else {
var statearr_39847_39873 = state_39834__$1;
(statearr_39847_39873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39835 === (14))){
var inst_39828 = (state_39834[(2)]);
var state_39834__$1 = state_39834;
var statearr_39848_39874 = state_39834__$1;
(statearr_39848_39874[(2)] = inst_39828);

(statearr_39848_39874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39835 === (10))){
var inst_39820 = (state_39834[(2)]);
var state_39834__$1 = state_39834;
var statearr_39849_39875 = state_39834__$1;
(statearr_39849_39875[(2)] = inst_39820);

(statearr_39849_39875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39835 === (8))){
var inst_39817 = cljs.core.async.close_BANG_.call(null,to);
var state_39834__$1 = state_39834;
var statearr_39850_39876 = state_39834__$1;
(statearr_39850_39876[(2)] = inst_39817);

(statearr_39850_39876[(1)] = (10));


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
});})(c__37149__auto___39862))
;
return ((function (switch__37128__auto__,c__37149__auto___39862){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_39854 = [null,null,null,null,null,null,null,null];
(statearr_39854[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_39854[(1)] = (1));

return statearr_39854;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_39834){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_39834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e39855){if((e39855 instanceof Object)){
var ex__37132__auto__ = e39855;
var statearr_39856_39877 = state_39834;
(statearr_39856_39877[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39878 = state_39834;
state_39834 = G__39878;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_39834){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_39834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto___39862))
})();
var state__37151__auto__ = (function (){var statearr_39857 = f__37150__auto__.call(null);
(statearr_39857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto___39862);

return statearr_39857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto___39862))
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
return (function (p__40062){
var vec__40063 = p__40062;
var v = cljs.core.nth.call(null,vec__40063,(0),null);
var p = cljs.core.nth.call(null,vec__40063,(1),null);
var job = vec__40063;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__37149__auto___40245 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto___40245,res,vec__40063,v,p,job,jobs,results){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto___40245,res,vec__40063,v,p,job,jobs,results){
return (function (state_40068){
var state_val_40069 = (state_40068[(1)]);
if((state_val_40069 === (1))){
var state_40068__$1 = state_40068;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40068__$1,(2),res,v);
} else {
if((state_val_40069 === (2))){
var inst_40065 = (state_40068[(2)]);
var inst_40066 = cljs.core.async.close_BANG_.call(null,res);
var state_40068__$1 = (function (){var statearr_40070 = state_40068;
(statearr_40070[(7)] = inst_40065);

return statearr_40070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40068__$1,inst_40066);
} else {
return null;
}
}
});})(c__37149__auto___40245,res,vec__40063,v,p,job,jobs,results))
;
return ((function (switch__37128__auto__,c__37149__auto___40245,res,vec__40063,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0 = (function (){
var statearr_40074 = [null,null,null,null,null,null,null,null];
(statearr_40074[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__);

(statearr_40074[(1)] = (1));

return statearr_40074;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1 = (function (state_40068){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_40068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e40075){if((e40075 instanceof Object)){
var ex__37132__auto__ = e40075;
var statearr_40076_40246 = state_40068;
(statearr_40076_40246[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40247 = state_40068;
state_40068 = G__40247;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__ = function(state_40068){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1.call(this,state_40068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto___40245,res,vec__40063,v,p,job,jobs,results))
})();
var state__37151__auto__ = (function (){var statearr_40077 = f__37150__auto__.call(null);
(statearr_40077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto___40245);

return statearr_40077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto___40245,res,vec__40063,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__40078){
var vec__40079 = p__40078;
var v = cljs.core.nth.call(null,vec__40079,(0),null);
var p = cljs.core.nth.call(null,vec__40079,(1),null);
var job = vec__40079;
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
var n__35475__auto___40248 = n;
var __40249 = (0);
while(true){
if((__40249 < n__35475__auto___40248)){
var G__40080_40250 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__40080_40250) {
case "compute":
var c__37149__auto___40252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40249,c__37149__auto___40252,G__40080_40250,n__35475__auto___40248,jobs,results,process,async){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (__40249,c__37149__auto___40252,G__40080_40250,n__35475__auto___40248,jobs,results,process,async){
return (function (state_40093){
var state_val_40094 = (state_40093[(1)]);
if((state_val_40094 === (1))){
var state_40093__$1 = state_40093;
var statearr_40095_40253 = state_40093__$1;
(statearr_40095_40253[(2)] = null);

(statearr_40095_40253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40094 === (2))){
var state_40093__$1 = state_40093;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40093__$1,(4),jobs);
} else {
if((state_val_40094 === (3))){
var inst_40091 = (state_40093[(2)]);
var state_40093__$1 = state_40093;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40093__$1,inst_40091);
} else {
if((state_val_40094 === (4))){
var inst_40083 = (state_40093[(2)]);
var inst_40084 = process.call(null,inst_40083);
var state_40093__$1 = state_40093;
if(cljs.core.truth_(inst_40084)){
var statearr_40096_40254 = state_40093__$1;
(statearr_40096_40254[(1)] = (5));

} else {
var statearr_40097_40255 = state_40093__$1;
(statearr_40097_40255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40094 === (5))){
var state_40093__$1 = state_40093;
var statearr_40098_40256 = state_40093__$1;
(statearr_40098_40256[(2)] = null);

(statearr_40098_40256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40094 === (6))){
var state_40093__$1 = state_40093;
var statearr_40099_40257 = state_40093__$1;
(statearr_40099_40257[(2)] = null);

(statearr_40099_40257[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40094 === (7))){
var inst_40089 = (state_40093[(2)]);
var state_40093__$1 = state_40093;
var statearr_40100_40258 = state_40093__$1;
(statearr_40100_40258[(2)] = inst_40089);

(statearr_40100_40258[(1)] = (3));


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
});})(__40249,c__37149__auto___40252,G__40080_40250,n__35475__auto___40248,jobs,results,process,async))
;
return ((function (__40249,switch__37128__auto__,c__37149__auto___40252,G__40080_40250,n__35475__auto___40248,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0 = (function (){
var statearr_40104 = [null,null,null,null,null,null,null];
(statearr_40104[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__);

(statearr_40104[(1)] = (1));

return statearr_40104;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1 = (function (state_40093){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_40093);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e40105){if((e40105 instanceof Object)){
var ex__37132__auto__ = e40105;
var statearr_40106_40259 = state_40093;
(statearr_40106_40259[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40093);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40260 = state_40093;
state_40093 = G__40260;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__ = function(state_40093){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1.call(this,state_40093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__;
})()
;})(__40249,switch__37128__auto__,c__37149__auto___40252,G__40080_40250,n__35475__auto___40248,jobs,results,process,async))
})();
var state__37151__auto__ = (function (){var statearr_40107 = f__37150__auto__.call(null);
(statearr_40107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto___40252);

return statearr_40107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(__40249,c__37149__auto___40252,G__40080_40250,n__35475__auto___40248,jobs,results,process,async))
);


break;
case "async":
var c__37149__auto___40261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__40249,c__37149__auto___40261,G__40080_40250,n__35475__auto___40248,jobs,results,process,async){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (__40249,c__37149__auto___40261,G__40080_40250,n__35475__auto___40248,jobs,results,process,async){
return (function (state_40120){
var state_val_40121 = (state_40120[(1)]);
if((state_val_40121 === (1))){
var state_40120__$1 = state_40120;
var statearr_40122_40262 = state_40120__$1;
(statearr_40122_40262[(2)] = null);

(statearr_40122_40262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40121 === (2))){
var state_40120__$1 = state_40120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40120__$1,(4),jobs);
} else {
if((state_val_40121 === (3))){
var inst_40118 = (state_40120[(2)]);
var state_40120__$1 = state_40120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40120__$1,inst_40118);
} else {
if((state_val_40121 === (4))){
var inst_40110 = (state_40120[(2)]);
var inst_40111 = async.call(null,inst_40110);
var state_40120__$1 = state_40120;
if(cljs.core.truth_(inst_40111)){
var statearr_40123_40263 = state_40120__$1;
(statearr_40123_40263[(1)] = (5));

} else {
var statearr_40124_40264 = state_40120__$1;
(statearr_40124_40264[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40121 === (5))){
var state_40120__$1 = state_40120;
var statearr_40125_40265 = state_40120__$1;
(statearr_40125_40265[(2)] = null);

(statearr_40125_40265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40121 === (6))){
var state_40120__$1 = state_40120;
var statearr_40126_40266 = state_40120__$1;
(statearr_40126_40266[(2)] = null);

(statearr_40126_40266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40121 === (7))){
var inst_40116 = (state_40120[(2)]);
var state_40120__$1 = state_40120;
var statearr_40127_40267 = state_40120__$1;
(statearr_40127_40267[(2)] = inst_40116);

(statearr_40127_40267[(1)] = (3));


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
});})(__40249,c__37149__auto___40261,G__40080_40250,n__35475__auto___40248,jobs,results,process,async))
;
return ((function (__40249,switch__37128__auto__,c__37149__auto___40261,G__40080_40250,n__35475__auto___40248,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0 = (function (){
var statearr_40131 = [null,null,null,null,null,null,null];
(statearr_40131[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__);

(statearr_40131[(1)] = (1));

return statearr_40131;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1 = (function (state_40120){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_40120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e40132){if((e40132 instanceof Object)){
var ex__37132__auto__ = e40132;
var statearr_40133_40268 = state_40120;
(statearr_40133_40268[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40269 = state_40120;
state_40120 = G__40269;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__ = function(state_40120){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1.call(this,state_40120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__;
})()
;})(__40249,switch__37128__auto__,c__37149__auto___40261,G__40080_40250,n__35475__auto___40248,jobs,results,process,async))
})();
var state__37151__auto__ = (function (){var statearr_40134 = f__37150__auto__.call(null);
(statearr_40134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto___40261);

return statearr_40134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(__40249,c__37149__auto___40261,G__40080_40250,n__35475__auto___40248,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__40270 = (__40249 + (1));
__40249 = G__40270;
continue;
} else {
}
break;
}

var c__37149__auto___40271 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto___40271,jobs,results,process,async){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto___40271,jobs,results,process,async){
return (function (state_40156){
var state_val_40157 = (state_40156[(1)]);
if((state_val_40157 === (1))){
var state_40156__$1 = state_40156;
var statearr_40158_40272 = state_40156__$1;
(statearr_40158_40272[(2)] = null);

(statearr_40158_40272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (2))){
var state_40156__$1 = state_40156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40156__$1,(4),from);
} else {
if((state_val_40157 === (3))){
var inst_40154 = (state_40156[(2)]);
var state_40156__$1 = state_40156;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40156__$1,inst_40154);
} else {
if((state_val_40157 === (4))){
var inst_40137 = (state_40156[(7)]);
var inst_40137__$1 = (state_40156[(2)]);
var inst_40138 = (inst_40137__$1 == null);
var state_40156__$1 = (function (){var statearr_40159 = state_40156;
(statearr_40159[(7)] = inst_40137__$1);

return statearr_40159;
})();
if(cljs.core.truth_(inst_40138)){
var statearr_40160_40273 = state_40156__$1;
(statearr_40160_40273[(1)] = (5));

} else {
var statearr_40161_40274 = state_40156__$1;
(statearr_40161_40274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (5))){
var inst_40140 = cljs.core.async.close_BANG_.call(null,jobs);
var state_40156__$1 = state_40156;
var statearr_40162_40275 = state_40156__$1;
(statearr_40162_40275[(2)] = inst_40140);

(statearr_40162_40275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (6))){
var inst_40142 = (state_40156[(8)]);
var inst_40137 = (state_40156[(7)]);
var inst_40142__$1 = cljs.core.async.chan.call(null,(1));
var inst_40143 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40144 = [inst_40137,inst_40142__$1];
var inst_40145 = (new cljs.core.PersistentVector(null,2,(5),inst_40143,inst_40144,null));
var state_40156__$1 = (function (){var statearr_40163 = state_40156;
(statearr_40163[(8)] = inst_40142__$1);

return statearr_40163;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40156__$1,(8),jobs,inst_40145);
} else {
if((state_val_40157 === (7))){
var inst_40152 = (state_40156[(2)]);
var state_40156__$1 = state_40156;
var statearr_40164_40276 = state_40156__$1;
(statearr_40164_40276[(2)] = inst_40152);

(statearr_40164_40276[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40157 === (8))){
var inst_40142 = (state_40156[(8)]);
var inst_40147 = (state_40156[(2)]);
var state_40156__$1 = (function (){var statearr_40165 = state_40156;
(statearr_40165[(9)] = inst_40147);

return statearr_40165;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40156__$1,(9),results,inst_40142);
} else {
if((state_val_40157 === (9))){
var inst_40149 = (state_40156[(2)]);
var state_40156__$1 = (function (){var statearr_40166 = state_40156;
(statearr_40166[(10)] = inst_40149);

return statearr_40166;
})();
var statearr_40167_40277 = state_40156__$1;
(statearr_40167_40277[(2)] = null);

(statearr_40167_40277[(1)] = (2));


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
});})(c__37149__auto___40271,jobs,results,process,async))
;
return ((function (switch__37128__auto__,c__37149__auto___40271,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0 = (function (){
var statearr_40171 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40171[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__);

(statearr_40171[(1)] = (1));

return statearr_40171;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1 = (function (state_40156){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_40156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e40172){if((e40172 instanceof Object)){
var ex__37132__auto__ = e40172;
var statearr_40173_40278 = state_40156;
(statearr_40173_40278[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40172;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40279 = state_40156;
state_40156 = G__40279;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__ = function(state_40156){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1.call(this,state_40156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto___40271,jobs,results,process,async))
})();
var state__37151__auto__ = (function (){var statearr_40174 = f__37150__auto__.call(null);
(statearr_40174[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto___40271);

return statearr_40174;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto___40271,jobs,results,process,async))
);


var c__37149__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto__,jobs,results,process,async){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto__,jobs,results,process,async){
return (function (state_40212){
var state_val_40213 = (state_40212[(1)]);
if((state_val_40213 === (7))){
var inst_40208 = (state_40212[(2)]);
var state_40212__$1 = state_40212;
var statearr_40214_40280 = state_40212__$1;
(statearr_40214_40280[(2)] = inst_40208);

(statearr_40214_40280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (20))){
var state_40212__$1 = state_40212;
var statearr_40215_40281 = state_40212__$1;
(statearr_40215_40281[(2)] = null);

(statearr_40215_40281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (1))){
var state_40212__$1 = state_40212;
var statearr_40216_40282 = state_40212__$1;
(statearr_40216_40282[(2)] = null);

(statearr_40216_40282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (4))){
var inst_40177 = (state_40212[(7)]);
var inst_40177__$1 = (state_40212[(2)]);
var inst_40178 = (inst_40177__$1 == null);
var state_40212__$1 = (function (){var statearr_40217 = state_40212;
(statearr_40217[(7)] = inst_40177__$1);

return statearr_40217;
})();
if(cljs.core.truth_(inst_40178)){
var statearr_40218_40283 = state_40212__$1;
(statearr_40218_40283[(1)] = (5));

} else {
var statearr_40219_40284 = state_40212__$1;
(statearr_40219_40284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (15))){
var inst_40190 = (state_40212[(8)]);
var state_40212__$1 = state_40212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40212__$1,(18),to,inst_40190);
} else {
if((state_val_40213 === (21))){
var inst_40203 = (state_40212[(2)]);
var state_40212__$1 = state_40212;
var statearr_40220_40285 = state_40212__$1;
(statearr_40220_40285[(2)] = inst_40203);

(statearr_40220_40285[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (13))){
var inst_40205 = (state_40212[(2)]);
var state_40212__$1 = (function (){var statearr_40221 = state_40212;
(statearr_40221[(9)] = inst_40205);

return statearr_40221;
})();
var statearr_40222_40286 = state_40212__$1;
(statearr_40222_40286[(2)] = null);

(statearr_40222_40286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (6))){
var inst_40177 = (state_40212[(7)]);
var state_40212__$1 = state_40212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40212__$1,(11),inst_40177);
} else {
if((state_val_40213 === (17))){
var inst_40198 = (state_40212[(2)]);
var state_40212__$1 = state_40212;
if(cljs.core.truth_(inst_40198)){
var statearr_40223_40287 = state_40212__$1;
(statearr_40223_40287[(1)] = (19));

} else {
var statearr_40224_40288 = state_40212__$1;
(statearr_40224_40288[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (3))){
var inst_40210 = (state_40212[(2)]);
var state_40212__$1 = state_40212;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40212__$1,inst_40210);
} else {
if((state_val_40213 === (12))){
var inst_40187 = (state_40212[(10)]);
var state_40212__$1 = state_40212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40212__$1,(14),inst_40187);
} else {
if((state_val_40213 === (2))){
var state_40212__$1 = state_40212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40212__$1,(4),results);
} else {
if((state_val_40213 === (19))){
var state_40212__$1 = state_40212;
var statearr_40225_40289 = state_40212__$1;
(statearr_40225_40289[(2)] = null);

(statearr_40225_40289[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (11))){
var inst_40187 = (state_40212[(2)]);
var state_40212__$1 = (function (){var statearr_40226 = state_40212;
(statearr_40226[(10)] = inst_40187);

return statearr_40226;
})();
var statearr_40227_40290 = state_40212__$1;
(statearr_40227_40290[(2)] = null);

(statearr_40227_40290[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (9))){
var state_40212__$1 = state_40212;
var statearr_40228_40291 = state_40212__$1;
(statearr_40228_40291[(2)] = null);

(statearr_40228_40291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (5))){
var state_40212__$1 = state_40212;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40229_40292 = state_40212__$1;
(statearr_40229_40292[(1)] = (8));

} else {
var statearr_40230_40293 = state_40212__$1;
(statearr_40230_40293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (14))){
var inst_40192 = (state_40212[(11)]);
var inst_40190 = (state_40212[(8)]);
var inst_40190__$1 = (state_40212[(2)]);
var inst_40191 = (inst_40190__$1 == null);
var inst_40192__$1 = cljs.core.not.call(null,inst_40191);
var state_40212__$1 = (function (){var statearr_40231 = state_40212;
(statearr_40231[(11)] = inst_40192__$1);

(statearr_40231[(8)] = inst_40190__$1);

return statearr_40231;
})();
if(inst_40192__$1){
var statearr_40232_40294 = state_40212__$1;
(statearr_40232_40294[(1)] = (15));

} else {
var statearr_40233_40295 = state_40212__$1;
(statearr_40233_40295[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (16))){
var inst_40192 = (state_40212[(11)]);
var state_40212__$1 = state_40212;
var statearr_40234_40296 = state_40212__$1;
(statearr_40234_40296[(2)] = inst_40192);

(statearr_40234_40296[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (10))){
var inst_40184 = (state_40212[(2)]);
var state_40212__$1 = state_40212;
var statearr_40235_40297 = state_40212__$1;
(statearr_40235_40297[(2)] = inst_40184);

(statearr_40235_40297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (18))){
var inst_40195 = (state_40212[(2)]);
var state_40212__$1 = state_40212;
var statearr_40236_40298 = state_40212__$1;
(statearr_40236_40298[(2)] = inst_40195);

(statearr_40236_40298[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40213 === (8))){
var inst_40181 = cljs.core.async.close_BANG_.call(null,to);
var state_40212__$1 = state_40212;
var statearr_40237_40299 = state_40212__$1;
(statearr_40237_40299[(2)] = inst_40181);

(statearr_40237_40299[(1)] = (10));


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
});})(c__37149__auto__,jobs,results,process,async))
;
return ((function (switch__37128__auto__,c__37149__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0 = (function (){
var statearr_40241 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40241[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__);

(statearr_40241[(1)] = (1));

return statearr_40241;
});
var cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1 = (function (state_40212){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_40212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e40242){if((e40242 instanceof Object)){
var ex__37132__auto__ = e40242;
var statearr_40243_40300 = state_40212;
(statearr_40243_40300[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40242;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40301 = state_40212;
state_40212 = G__40301;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__ = function(state_40212){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1.call(this,state_40212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__37129__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto__,jobs,results,process,async))
})();
var state__37151__auto__ = (function (){var statearr_40244 = f__37150__auto__.call(null);
(statearr_40244[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto__);

return statearr_40244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto__,jobs,results,process,async))
);

return c__37149__auto__;
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
var args40302 = [];
var len__35630__auto___40305 = arguments.length;
var i__35631__auto___40306 = (0);
while(true){
if((i__35631__auto___40306 < len__35630__auto___40305)){
args40302.push((arguments[i__35631__auto___40306]));

var G__40307 = (i__35631__auto___40306 + (1));
i__35631__auto___40306 = G__40307;
continue;
} else {
}
break;
}

var G__40304 = args40302.length;
switch (G__40304) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40302.length)].join('')));

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
var args40309 = [];
var len__35630__auto___40312 = arguments.length;
var i__35631__auto___40313 = (0);
while(true){
if((i__35631__auto___40313 < len__35630__auto___40312)){
args40309.push((arguments[i__35631__auto___40313]));

var G__40314 = (i__35631__auto___40313 + (1));
i__35631__auto___40313 = G__40314;
continue;
} else {
}
break;
}

var G__40311 = args40309.length;
switch (G__40311) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40309.length)].join('')));

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
var args40316 = [];
var len__35630__auto___40369 = arguments.length;
var i__35631__auto___40370 = (0);
while(true){
if((i__35631__auto___40370 < len__35630__auto___40369)){
args40316.push((arguments[i__35631__auto___40370]));

var G__40371 = (i__35631__auto___40370 + (1));
i__35631__auto___40370 = G__40371;
continue;
} else {
}
break;
}

var G__40318 = args40316.length;
switch (G__40318) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40316.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__37149__auto___40373 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto___40373,tc,fc){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto___40373,tc,fc){
return (function (state_40344){
var state_val_40345 = (state_40344[(1)]);
if((state_val_40345 === (7))){
var inst_40340 = (state_40344[(2)]);
var state_40344__$1 = state_40344;
var statearr_40346_40374 = state_40344__$1;
(statearr_40346_40374[(2)] = inst_40340);

(statearr_40346_40374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (1))){
var state_40344__$1 = state_40344;
var statearr_40347_40375 = state_40344__$1;
(statearr_40347_40375[(2)] = null);

(statearr_40347_40375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (4))){
var inst_40321 = (state_40344[(7)]);
var inst_40321__$1 = (state_40344[(2)]);
var inst_40322 = (inst_40321__$1 == null);
var state_40344__$1 = (function (){var statearr_40348 = state_40344;
(statearr_40348[(7)] = inst_40321__$1);

return statearr_40348;
})();
if(cljs.core.truth_(inst_40322)){
var statearr_40349_40376 = state_40344__$1;
(statearr_40349_40376[(1)] = (5));

} else {
var statearr_40350_40377 = state_40344__$1;
(statearr_40350_40377[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (13))){
var state_40344__$1 = state_40344;
var statearr_40351_40378 = state_40344__$1;
(statearr_40351_40378[(2)] = null);

(statearr_40351_40378[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (6))){
var inst_40321 = (state_40344[(7)]);
var inst_40327 = p.call(null,inst_40321);
var state_40344__$1 = state_40344;
if(cljs.core.truth_(inst_40327)){
var statearr_40352_40379 = state_40344__$1;
(statearr_40352_40379[(1)] = (9));

} else {
var statearr_40353_40380 = state_40344__$1;
(statearr_40353_40380[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (3))){
var inst_40342 = (state_40344[(2)]);
var state_40344__$1 = state_40344;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40344__$1,inst_40342);
} else {
if((state_val_40345 === (12))){
var state_40344__$1 = state_40344;
var statearr_40354_40381 = state_40344__$1;
(statearr_40354_40381[(2)] = null);

(statearr_40354_40381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (2))){
var state_40344__$1 = state_40344;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40344__$1,(4),ch);
} else {
if((state_val_40345 === (11))){
var inst_40321 = (state_40344[(7)]);
var inst_40331 = (state_40344[(2)]);
var state_40344__$1 = state_40344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40344__$1,(8),inst_40331,inst_40321);
} else {
if((state_val_40345 === (9))){
var state_40344__$1 = state_40344;
var statearr_40355_40382 = state_40344__$1;
(statearr_40355_40382[(2)] = tc);

(statearr_40355_40382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (5))){
var inst_40324 = cljs.core.async.close_BANG_.call(null,tc);
var inst_40325 = cljs.core.async.close_BANG_.call(null,fc);
var state_40344__$1 = (function (){var statearr_40356 = state_40344;
(statearr_40356[(8)] = inst_40324);

return statearr_40356;
})();
var statearr_40357_40383 = state_40344__$1;
(statearr_40357_40383[(2)] = inst_40325);

(statearr_40357_40383[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (14))){
var inst_40338 = (state_40344[(2)]);
var state_40344__$1 = state_40344;
var statearr_40358_40384 = state_40344__$1;
(statearr_40358_40384[(2)] = inst_40338);

(statearr_40358_40384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (10))){
var state_40344__$1 = state_40344;
var statearr_40359_40385 = state_40344__$1;
(statearr_40359_40385[(2)] = fc);

(statearr_40359_40385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40345 === (8))){
var inst_40333 = (state_40344[(2)]);
var state_40344__$1 = state_40344;
if(cljs.core.truth_(inst_40333)){
var statearr_40360_40386 = state_40344__$1;
(statearr_40360_40386[(1)] = (12));

} else {
var statearr_40361_40387 = state_40344__$1;
(statearr_40361_40387[(1)] = (13));

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
});})(c__37149__auto___40373,tc,fc))
;
return ((function (switch__37128__auto__,c__37149__auto___40373,tc,fc){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_40365 = [null,null,null,null,null,null,null,null,null];
(statearr_40365[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_40365[(1)] = (1));

return statearr_40365;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_40344){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_40344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e40366){if((e40366 instanceof Object)){
var ex__37132__auto__ = e40366;
var statearr_40367_40388 = state_40344;
(statearr_40367_40388[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40389 = state_40344;
state_40344 = G__40389;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_40344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_40344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto___40373,tc,fc))
})();
var state__37151__auto__ = (function (){var statearr_40368 = f__37150__auto__.call(null);
(statearr_40368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto___40373);

return statearr_40368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto___40373,tc,fc))
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
var c__37149__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto__){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto__){
return (function (state_40453){
var state_val_40454 = (state_40453[(1)]);
if((state_val_40454 === (7))){
var inst_40449 = (state_40453[(2)]);
var state_40453__$1 = state_40453;
var statearr_40455_40476 = state_40453__$1;
(statearr_40455_40476[(2)] = inst_40449);

(statearr_40455_40476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40454 === (1))){
var inst_40433 = init;
var state_40453__$1 = (function (){var statearr_40456 = state_40453;
(statearr_40456[(7)] = inst_40433);

return statearr_40456;
})();
var statearr_40457_40477 = state_40453__$1;
(statearr_40457_40477[(2)] = null);

(statearr_40457_40477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40454 === (4))){
var inst_40436 = (state_40453[(8)]);
var inst_40436__$1 = (state_40453[(2)]);
var inst_40437 = (inst_40436__$1 == null);
var state_40453__$1 = (function (){var statearr_40458 = state_40453;
(statearr_40458[(8)] = inst_40436__$1);

return statearr_40458;
})();
if(cljs.core.truth_(inst_40437)){
var statearr_40459_40478 = state_40453__$1;
(statearr_40459_40478[(1)] = (5));

} else {
var statearr_40460_40479 = state_40453__$1;
(statearr_40460_40479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40454 === (6))){
var inst_40433 = (state_40453[(7)]);
var inst_40440 = (state_40453[(9)]);
var inst_40436 = (state_40453[(8)]);
var inst_40440__$1 = f.call(null,inst_40433,inst_40436);
var inst_40441 = cljs.core.reduced_QMARK_.call(null,inst_40440__$1);
var state_40453__$1 = (function (){var statearr_40461 = state_40453;
(statearr_40461[(9)] = inst_40440__$1);

return statearr_40461;
})();
if(inst_40441){
var statearr_40462_40480 = state_40453__$1;
(statearr_40462_40480[(1)] = (8));

} else {
var statearr_40463_40481 = state_40453__$1;
(statearr_40463_40481[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40454 === (3))){
var inst_40451 = (state_40453[(2)]);
var state_40453__$1 = state_40453;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40453__$1,inst_40451);
} else {
if((state_val_40454 === (2))){
var state_40453__$1 = state_40453;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40453__$1,(4),ch);
} else {
if((state_val_40454 === (9))){
var inst_40440 = (state_40453[(9)]);
var inst_40433 = inst_40440;
var state_40453__$1 = (function (){var statearr_40464 = state_40453;
(statearr_40464[(7)] = inst_40433);

return statearr_40464;
})();
var statearr_40465_40482 = state_40453__$1;
(statearr_40465_40482[(2)] = null);

(statearr_40465_40482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40454 === (5))){
var inst_40433 = (state_40453[(7)]);
var state_40453__$1 = state_40453;
var statearr_40466_40483 = state_40453__$1;
(statearr_40466_40483[(2)] = inst_40433);

(statearr_40466_40483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40454 === (10))){
var inst_40447 = (state_40453[(2)]);
var state_40453__$1 = state_40453;
var statearr_40467_40484 = state_40453__$1;
(statearr_40467_40484[(2)] = inst_40447);

(statearr_40467_40484[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40454 === (8))){
var inst_40440 = (state_40453[(9)]);
var inst_40443 = cljs.core.deref.call(null,inst_40440);
var state_40453__$1 = state_40453;
var statearr_40468_40485 = state_40453__$1;
(statearr_40468_40485[(2)] = inst_40443);

(statearr_40468_40485[(1)] = (10));


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
});})(c__37149__auto__))
;
return ((function (switch__37128__auto__,c__37149__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__37129__auto__ = null;
var cljs$core$async$reduce_$_state_machine__37129__auto____0 = (function (){
var statearr_40472 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40472[(0)] = cljs$core$async$reduce_$_state_machine__37129__auto__);

(statearr_40472[(1)] = (1));

return statearr_40472;
});
var cljs$core$async$reduce_$_state_machine__37129__auto____1 = (function (state_40453){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_40453);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e40473){if((e40473 instanceof Object)){
var ex__37132__auto__ = e40473;
var statearr_40474_40486 = state_40453;
(statearr_40474_40486[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40453);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40487 = state_40453;
state_40453 = G__40487;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__37129__auto__ = function(state_40453){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__37129__auto____1.call(this,state_40453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__37129__auto____0;
cljs$core$async$reduce_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__37129__auto____1;
return cljs$core$async$reduce_$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto__))
})();
var state__37151__auto__ = (function (){var statearr_40475 = f__37150__auto__.call(null);
(statearr_40475[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto__);

return statearr_40475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto__))
);

return c__37149__auto__;
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
var args40488 = [];
var len__35630__auto___40540 = arguments.length;
var i__35631__auto___40541 = (0);
while(true){
if((i__35631__auto___40541 < len__35630__auto___40540)){
args40488.push((arguments[i__35631__auto___40541]));

var G__40542 = (i__35631__auto___40541 + (1));
i__35631__auto___40541 = G__40542;
continue;
} else {
}
break;
}

var G__40490 = args40488.length;
switch (G__40490) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args40488.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__37149__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto__){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto__){
return (function (state_40515){
var state_val_40516 = (state_40515[(1)]);
if((state_val_40516 === (7))){
var inst_40497 = (state_40515[(2)]);
var state_40515__$1 = state_40515;
var statearr_40517_40544 = state_40515__$1;
(statearr_40517_40544[(2)] = inst_40497);

(statearr_40517_40544[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (1))){
var inst_40491 = cljs.core.seq.call(null,coll);
var inst_40492 = inst_40491;
var state_40515__$1 = (function (){var statearr_40518 = state_40515;
(statearr_40518[(7)] = inst_40492);

return statearr_40518;
})();
var statearr_40519_40545 = state_40515__$1;
(statearr_40519_40545[(2)] = null);

(statearr_40519_40545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (4))){
var inst_40492 = (state_40515[(7)]);
var inst_40495 = cljs.core.first.call(null,inst_40492);
var state_40515__$1 = state_40515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40515__$1,(7),ch,inst_40495);
} else {
if((state_val_40516 === (13))){
var inst_40509 = (state_40515[(2)]);
var state_40515__$1 = state_40515;
var statearr_40520_40546 = state_40515__$1;
(statearr_40520_40546[(2)] = inst_40509);

(statearr_40520_40546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (6))){
var inst_40500 = (state_40515[(2)]);
var state_40515__$1 = state_40515;
if(cljs.core.truth_(inst_40500)){
var statearr_40521_40547 = state_40515__$1;
(statearr_40521_40547[(1)] = (8));

} else {
var statearr_40522_40548 = state_40515__$1;
(statearr_40522_40548[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (3))){
var inst_40513 = (state_40515[(2)]);
var state_40515__$1 = state_40515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40515__$1,inst_40513);
} else {
if((state_val_40516 === (12))){
var state_40515__$1 = state_40515;
var statearr_40523_40549 = state_40515__$1;
(statearr_40523_40549[(2)] = null);

(statearr_40523_40549[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (2))){
var inst_40492 = (state_40515[(7)]);
var state_40515__$1 = state_40515;
if(cljs.core.truth_(inst_40492)){
var statearr_40524_40550 = state_40515__$1;
(statearr_40524_40550[(1)] = (4));

} else {
var statearr_40525_40551 = state_40515__$1;
(statearr_40525_40551[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (11))){
var inst_40506 = cljs.core.async.close_BANG_.call(null,ch);
var state_40515__$1 = state_40515;
var statearr_40526_40552 = state_40515__$1;
(statearr_40526_40552[(2)] = inst_40506);

(statearr_40526_40552[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (9))){
var state_40515__$1 = state_40515;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40527_40553 = state_40515__$1;
(statearr_40527_40553[(1)] = (11));

} else {
var statearr_40528_40554 = state_40515__$1;
(statearr_40528_40554[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (5))){
var inst_40492 = (state_40515[(7)]);
var state_40515__$1 = state_40515;
var statearr_40529_40555 = state_40515__$1;
(statearr_40529_40555[(2)] = inst_40492);

(statearr_40529_40555[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (10))){
var inst_40511 = (state_40515[(2)]);
var state_40515__$1 = state_40515;
var statearr_40530_40556 = state_40515__$1;
(statearr_40530_40556[(2)] = inst_40511);

(statearr_40530_40556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40516 === (8))){
var inst_40492 = (state_40515[(7)]);
var inst_40502 = cljs.core.next.call(null,inst_40492);
var inst_40492__$1 = inst_40502;
var state_40515__$1 = (function (){var statearr_40531 = state_40515;
(statearr_40531[(7)] = inst_40492__$1);

return statearr_40531;
})();
var statearr_40532_40557 = state_40515__$1;
(statearr_40532_40557[(2)] = null);

(statearr_40532_40557[(1)] = (2));


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
});})(c__37149__auto__))
;
return ((function (switch__37128__auto__,c__37149__auto__){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_40536 = [null,null,null,null,null,null,null,null];
(statearr_40536[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_40536[(1)] = (1));

return statearr_40536;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_40515){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_40515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e40537){if((e40537 instanceof Object)){
var ex__37132__auto__ = e40537;
var statearr_40538_40558 = state_40515;
(statearr_40538_40558[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40559 = state_40515;
state_40515 = G__40559;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_40515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_40515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto__))
})();
var state__37151__auto__ = (function (){var statearr_40539 = f__37150__auto__.call(null);
(statearr_40539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto__);

return statearr_40539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto__))
);

return c__37149__auto__;
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
var x__35227__auto__ = (((_ == null))?null:_);
var m__35228__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__35227__auto__)]);
if(!((m__35228__auto__ == null))){
return m__35228__auto__.call(null,_);
} else {
var m__35228__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__35228__auto____$1 == null))){
return m__35228__auto____$1.call(null,_);
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
var x__35227__auto__ = (((m == null))?null:m);
var m__35228__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__35227__auto__)]);
if(!((m__35228__auto__ == null))){
return m__35228__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__35228__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__35228__auto____$1 == null))){
return m__35228__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__35227__auto__ = (((m == null))?null:m);
var m__35228__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__35227__auto__)]);
if(!((m__35228__auto__ == null))){
return m__35228__auto__.call(null,m,ch);
} else {
var m__35228__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__35228__auto____$1 == null))){
return m__35228__auto____$1.call(null,m,ch);
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
var x__35227__auto__ = (((m == null))?null:m);
var m__35228__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__35227__auto__)]);
if(!((m__35228__auto__ == null))){
return m__35228__auto__.call(null,m);
} else {
var m__35228__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__35228__auto____$1 == null))){
return m__35228__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async40781 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40781 = (function (mult,ch,cs,meta40782){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta40782 = meta40782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async40781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_40783,meta40782__$1){
var self__ = this;
var _40783__$1 = this;
return (new cljs.core.async.t_cljs$core$async40781(self__.mult,self__.ch,self__.cs,meta40782__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async40781.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_40783){
var self__ = this;
var _40783__$1 = this;
return self__.meta40782;
});})(cs))
;

cljs.core.async.t_cljs$core$async40781.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async40781.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async40781.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async40781.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40781.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40781.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async40781.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta40782","meta40782",318825570,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async40781.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40781.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40781";

cljs.core.async.t_cljs$core$async40781.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__35170__auto__,writer__35171__auto__,opt__35172__auto__){
return cljs.core._write.call(null,writer__35171__auto__,"cljs.core.async/t_cljs$core$async40781");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async40781 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async40781(mult__$1,ch__$1,cs__$1,meta40782){
return (new cljs.core.async.t_cljs$core$async40781(mult__$1,ch__$1,cs__$1,meta40782));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async40781(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__37149__auto___41002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto___41002,cs,m,dchan,dctr,done){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto___41002,cs,m,dchan,dctr,done){
return (function (state_40914){
var state_val_40915 = (state_40914[(1)]);
if((state_val_40915 === (7))){
var inst_40910 = (state_40914[(2)]);
var state_40914__$1 = state_40914;
var statearr_40916_41003 = state_40914__$1;
(statearr_40916_41003[(2)] = inst_40910);

(statearr_40916_41003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (20))){
var inst_40815 = (state_40914[(7)]);
var inst_40825 = cljs.core.first.call(null,inst_40815);
var inst_40826 = cljs.core.nth.call(null,inst_40825,(0),null);
var inst_40827 = cljs.core.nth.call(null,inst_40825,(1),null);
var state_40914__$1 = (function (){var statearr_40917 = state_40914;
(statearr_40917[(8)] = inst_40826);

return statearr_40917;
})();
if(cljs.core.truth_(inst_40827)){
var statearr_40918_41004 = state_40914__$1;
(statearr_40918_41004[(1)] = (22));

} else {
var statearr_40919_41005 = state_40914__$1;
(statearr_40919_41005[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (27))){
var inst_40786 = (state_40914[(9)]);
var inst_40857 = (state_40914[(10)]);
var inst_40855 = (state_40914[(11)]);
var inst_40862 = (state_40914[(12)]);
var inst_40862__$1 = cljs.core._nth.call(null,inst_40855,inst_40857);
var inst_40863 = cljs.core.async.put_BANG_.call(null,inst_40862__$1,inst_40786,done);
var state_40914__$1 = (function (){var statearr_40920 = state_40914;
(statearr_40920[(12)] = inst_40862__$1);

return statearr_40920;
})();
if(cljs.core.truth_(inst_40863)){
var statearr_40921_41006 = state_40914__$1;
(statearr_40921_41006[(1)] = (30));

} else {
var statearr_40922_41007 = state_40914__$1;
(statearr_40922_41007[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (1))){
var state_40914__$1 = state_40914;
var statearr_40923_41008 = state_40914__$1;
(statearr_40923_41008[(2)] = null);

(statearr_40923_41008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (24))){
var inst_40815 = (state_40914[(7)]);
var inst_40832 = (state_40914[(2)]);
var inst_40833 = cljs.core.next.call(null,inst_40815);
var inst_40795 = inst_40833;
var inst_40796 = null;
var inst_40797 = (0);
var inst_40798 = (0);
var state_40914__$1 = (function (){var statearr_40924 = state_40914;
(statearr_40924[(13)] = inst_40795);

(statearr_40924[(14)] = inst_40797);

(statearr_40924[(15)] = inst_40796);

(statearr_40924[(16)] = inst_40832);

(statearr_40924[(17)] = inst_40798);

return statearr_40924;
})();
var statearr_40925_41009 = state_40914__$1;
(statearr_40925_41009[(2)] = null);

(statearr_40925_41009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (39))){
var state_40914__$1 = state_40914;
var statearr_40929_41010 = state_40914__$1;
(statearr_40929_41010[(2)] = null);

(statearr_40929_41010[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (4))){
var inst_40786 = (state_40914[(9)]);
var inst_40786__$1 = (state_40914[(2)]);
var inst_40787 = (inst_40786__$1 == null);
var state_40914__$1 = (function (){var statearr_40930 = state_40914;
(statearr_40930[(9)] = inst_40786__$1);

return statearr_40930;
})();
if(cljs.core.truth_(inst_40787)){
var statearr_40931_41011 = state_40914__$1;
(statearr_40931_41011[(1)] = (5));

} else {
var statearr_40932_41012 = state_40914__$1;
(statearr_40932_41012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (15))){
var inst_40795 = (state_40914[(13)]);
var inst_40797 = (state_40914[(14)]);
var inst_40796 = (state_40914[(15)]);
var inst_40798 = (state_40914[(17)]);
var inst_40811 = (state_40914[(2)]);
var inst_40812 = (inst_40798 + (1));
var tmp40926 = inst_40795;
var tmp40927 = inst_40797;
var tmp40928 = inst_40796;
var inst_40795__$1 = tmp40926;
var inst_40796__$1 = tmp40928;
var inst_40797__$1 = tmp40927;
var inst_40798__$1 = inst_40812;
var state_40914__$1 = (function (){var statearr_40933 = state_40914;
(statearr_40933[(18)] = inst_40811);

(statearr_40933[(13)] = inst_40795__$1);

(statearr_40933[(14)] = inst_40797__$1);

(statearr_40933[(15)] = inst_40796__$1);

(statearr_40933[(17)] = inst_40798__$1);

return statearr_40933;
})();
var statearr_40934_41013 = state_40914__$1;
(statearr_40934_41013[(2)] = null);

(statearr_40934_41013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (21))){
var inst_40836 = (state_40914[(2)]);
var state_40914__$1 = state_40914;
var statearr_40938_41014 = state_40914__$1;
(statearr_40938_41014[(2)] = inst_40836);

(statearr_40938_41014[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (31))){
var inst_40862 = (state_40914[(12)]);
var inst_40866 = done.call(null,null);
var inst_40867 = cljs.core.async.untap_STAR_.call(null,m,inst_40862);
var state_40914__$1 = (function (){var statearr_40939 = state_40914;
(statearr_40939[(19)] = inst_40866);

return statearr_40939;
})();
var statearr_40940_41015 = state_40914__$1;
(statearr_40940_41015[(2)] = inst_40867);

(statearr_40940_41015[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (32))){
var inst_40857 = (state_40914[(10)]);
var inst_40855 = (state_40914[(11)]);
var inst_40854 = (state_40914[(20)]);
var inst_40856 = (state_40914[(21)]);
var inst_40869 = (state_40914[(2)]);
var inst_40870 = (inst_40857 + (1));
var tmp40935 = inst_40855;
var tmp40936 = inst_40854;
var tmp40937 = inst_40856;
var inst_40854__$1 = tmp40936;
var inst_40855__$1 = tmp40935;
var inst_40856__$1 = tmp40937;
var inst_40857__$1 = inst_40870;
var state_40914__$1 = (function (){var statearr_40941 = state_40914;
(statearr_40941[(10)] = inst_40857__$1);

(statearr_40941[(11)] = inst_40855__$1);

(statearr_40941[(20)] = inst_40854__$1);

(statearr_40941[(22)] = inst_40869);

(statearr_40941[(21)] = inst_40856__$1);

return statearr_40941;
})();
var statearr_40942_41016 = state_40914__$1;
(statearr_40942_41016[(2)] = null);

(statearr_40942_41016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (40))){
var inst_40882 = (state_40914[(23)]);
var inst_40886 = done.call(null,null);
var inst_40887 = cljs.core.async.untap_STAR_.call(null,m,inst_40882);
var state_40914__$1 = (function (){var statearr_40943 = state_40914;
(statearr_40943[(24)] = inst_40886);

return statearr_40943;
})();
var statearr_40944_41017 = state_40914__$1;
(statearr_40944_41017[(2)] = inst_40887);

(statearr_40944_41017[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (33))){
var inst_40873 = (state_40914[(25)]);
var inst_40875 = cljs.core.chunked_seq_QMARK_.call(null,inst_40873);
var state_40914__$1 = state_40914;
if(inst_40875){
var statearr_40945_41018 = state_40914__$1;
(statearr_40945_41018[(1)] = (36));

} else {
var statearr_40946_41019 = state_40914__$1;
(statearr_40946_41019[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (13))){
var inst_40805 = (state_40914[(26)]);
var inst_40808 = cljs.core.async.close_BANG_.call(null,inst_40805);
var state_40914__$1 = state_40914;
var statearr_40947_41020 = state_40914__$1;
(statearr_40947_41020[(2)] = inst_40808);

(statearr_40947_41020[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (22))){
var inst_40826 = (state_40914[(8)]);
var inst_40829 = cljs.core.async.close_BANG_.call(null,inst_40826);
var state_40914__$1 = state_40914;
var statearr_40948_41021 = state_40914__$1;
(statearr_40948_41021[(2)] = inst_40829);

(statearr_40948_41021[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (36))){
var inst_40873 = (state_40914[(25)]);
var inst_40877 = cljs.core.chunk_first.call(null,inst_40873);
var inst_40878 = cljs.core.chunk_rest.call(null,inst_40873);
var inst_40879 = cljs.core.count.call(null,inst_40877);
var inst_40854 = inst_40878;
var inst_40855 = inst_40877;
var inst_40856 = inst_40879;
var inst_40857 = (0);
var state_40914__$1 = (function (){var statearr_40949 = state_40914;
(statearr_40949[(10)] = inst_40857);

(statearr_40949[(11)] = inst_40855);

(statearr_40949[(20)] = inst_40854);

(statearr_40949[(21)] = inst_40856);

return statearr_40949;
})();
var statearr_40950_41022 = state_40914__$1;
(statearr_40950_41022[(2)] = null);

(statearr_40950_41022[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (41))){
var inst_40873 = (state_40914[(25)]);
var inst_40889 = (state_40914[(2)]);
var inst_40890 = cljs.core.next.call(null,inst_40873);
var inst_40854 = inst_40890;
var inst_40855 = null;
var inst_40856 = (0);
var inst_40857 = (0);
var state_40914__$1 = (function (){var statearr_40951 = state_40914;
(statearr_40951[(10)] = inst_40857);

(statearr_40951[(11)] = inst_40855);

(statearr_40951[(27)] = inst_40889);

(statearr_40951[(20)] = inst_40854);

(statearr_40951[(21)] = inst_40856);

return statearr_40951;
})();
var statearr_40952_41023 = state_40914__$1;
(statearr_40952_41023[(2)] = null);

(statearr_40952_41023[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (43))){
var state_40914__$1 = state_40914;
var statearr_40953_41024 = state_40914__$1;
(statearr_40953_41024[(2)] = null);

(statearr_40953_41024[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (29))){
var inst_40898 = (state_40914[(2)]);
var state_40914__$1 = state_40914;
var statearr_40954_41025 = state_40914__$1;
(statearr_40954_41025[(2)] = inst_40898);

(statearr_40954_41025[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (44))){
var inst_40907 = (state_40914[(2)]);
var state_40914__$1 = (function (){var statearr_40955 = state_40914;
(statearr_40955[(28)] = inst_40907);

return statearr_40955;
})();
var statearr_40956_41026 = state_40914__$1;
(statearr_40956_41026[(2)] = null);

(statearr_40956_41026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (6))){
var inst_40846 = (state_40914[(29)]);
var inst_40845 = cljs.core.deref.call(null,cs);
var inst_40846__$1 = cljs.core.keys.call(null,inst_40845);
var inst_40847 = cljs.core.count.call(null,inst_40846__$1);
var inst_40848 = cljs.core.reset_BANG_.call(null,dctr,inst_40847);
var inst_40853 = cljs.core.seq.call(null,inst_40846__$1);
var inst_40854 = inst_40853;
var inst_40855 = null;
var inst_40856 = (0);
var inst_40857 = (0);
var state_40914__$1 = (function (){var statearr_40957 = state_40914;
(statearr_40957[(30)] = inst_40848);

(statearr_40957[(10)] = inst_40857);

(statearr_40957[(11)] = inst_40855);

(statearr_40957[(20)] = inst_40854);

(statearr_40957[(29)] = inst_40846__$1);

(statearr_40957[(21)] = inst_40856);

return statearr_40957;
})();
var statearr_40958_41027 = state_40914__$1;
(statearr_40958_41027[(2)] = null);

(statearr_40958_41027[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (28))){
var inst_40854 = (state_40914[(20)]);
var inst_40873 = (state_40914[(25)]);
var inst_40873__$1 = cljs.core.seq.call(null,inst_40854);
var state_40914__$1 = (function (){var statearr_40959 = state_40914;
(statearr_40959[(25)] = inst_40873__$1);

return statearr_40959;
})();
if(inst_40873__$1){
var statearr_40960_41028 = state_40914__$1;
(statearr_40960_41028[(1)] = (33));

} else {
var statearr_40961_41029 = state_40914__$1;
(statearr_40961_41029[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (25))){
var inst_40857 = (state_40914[(10)]);
var inst_40856 = (state_40914[(21)]);
var inst_40859 = (inst_40857 < inst_40856);
var inst_40860 = inst_40859;
var state_40914__$1 = state_40914;
if(cljs.core.truth_(inst_40860)){
var statearr_40962_41030 = state_40914__$1;
(statearr_40962_41030[(1)] = (27));

} else {
var statearr_40963_41031 = state_40914__$1;
(statearr_40963_41031[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (34))){
var state_40914__$1 = state_40914;
var statearr_40964_41032 = state_40914__$1;
(statearr_40964_41032[(2)] = null);

(statearr_40964_41032[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (17))){
var state_40914__$1 = state_40914;
var statearr_40965_41033 = state_40914__$1;
(statearr_40965_41033[(2)] = null);

(statearr_40965_41033[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (3))){
var inst_40912 = (state_40914[(2)]);
var state_40914__$1 = state_40914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40914__$1,inst_40912);
} else {
if((state_val_40915 === (12))){
var inst_40841 = (state_40914[(2)]);
var state_40914__$1 = state_40914;
var statearr_40966_41034 = state_40914__$1;
(statearr_40966_41034[(2)] = inst_40841);

(statearr_40966_41034[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (2))){
var state_40914__$1 = state_40914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40914__$1,(4),ch);
} else {
if((state_val_40915 === (23))){
var state_40914__$1 = state_40914;
var statearr_40967_41035 = state_40914__$1;
(statearr_40967_41035[(2)] = null);

(statearr_40967_41035[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (35))){
var inst_40896 = (state_40914[(2)]);
var state_40914__$1 = state_40914;
var statearr_40968_41036 = state_40914__$1;
(statearr_40968_41036[(2)] = inst_40896);

(statearr_40968_41036[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (19))){
var inst_40815 = (state_40914[(7)]);
var inst_40819 = cljs.core.chunk_first.call(null,inst_40815);
var inst_40820 = cljs.core.chunk_rest.call(null,inst_40815);
var inst_40821 = cljs.core.count.call(null,inst_40819);
var inst_40795 = inst_40820;
var inst_40796 = inst_40819;
var inst_40797 = inst_40821;
var inst_40798 = (0);
var state_40914__$1 = (function (){var statearr_40969 = state_40914;
(statearr_40969[(13)] = inst_40795);

(statearr_40969[(14)] = inst_40797);

(statearr_40969[(15)] = inst_40796);

(statearr_40969[(17)] = inst_40798);

return statearr_40969;
})();
var statearr_40970_41037 = state_40914__$1;
(statearr_40970_41037[(2)] = null);

(statearr_40970_41037[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (11))){
var inst_40815 = (state_40914[(7)]);
var inst_40795 = (state_40914[(13)]);
var inst_40815__$1 = cljs.core.seq.call(null,inst_40795);
var state_40914__$1 = (function (){var statearr_40971 = state_40914;
(statearr_40971[(7)] = inst_40815__$1);

return statearr_40971;
})();
if(inst_40815__$1){
var statearr_40972_41038 = state_40914__$1;
(statearr_40972_41038[(1)] = (16));

} else {
var statearr_40973_41039 = state_40914__$1;
(statearr_40973_41039[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (9))){
var inst_40843 = (state_40914[(2)]);
var state_40914__$1 = state_40914;
var statearr_40974_41040 = state_40914__$1;
(statearr_40974_41040[(2)] = inst_40843);

(statearr_40974_41040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (5))){
var inst_40793 = cljs.core.deref.call(null,cs);
var inst_40794 = cljs.core.seq.call(null,inst_40793);
var inst_40795 = inst_40794;
var inst_40796 = null;
var inst_40797 = (0);
var inst_40798 = (0);
var state_40914__$1 = (function (){var statearr_40975 = state_40914;
(statearr_40975[(13)] = inst_40795);

(statearr_40975[(14)] = inst_40797);

(statearr_40975[(15)] = inst_40796);

(statearr_40975[(17)] = inst_40798);

return statearr_40975;
})();
var statearr_40976_41041 = state_40914__$1;
(statearr_40976_41041[(2)] = null);

(statearr_40976_41041[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (14))){
var state_40914__$1 = state_40914;
var statearr_40977_41042 = state_40914__$1;
(statearr_40977_41042[(2)] = null);

(statearr_40977_41042[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (45))){
var inst_40904 = (state_40914[(2)]);
var state_40914__$1 = state_40914;
var statearr_40978_41043 = state_40914__$1;
(statearr_40978_41043[(2)] = inst_40904);

(statearr_40978_41043[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (26))){
var inst_40846 = (state_40914[(29)]);
var inst_40900 = (state_40914[(2)]);
var inst_40901 = cljs.core.seq.call(null,inst_40846);
var state_40914__$1 = (function (){var statearr_40979 = state_40914;
(statearr_40979[(31)] = inst_40900);

return statearr_40979;
})();
if(inst_40901){
var statearr_40980_41044 = state_40914__$1;
(statearr_40980_41044[(1)] = (42));

} else {
var statearr_40981_41045 = state_40914__$1;
(statearr_40981_41045[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (16))){
var inst_40815 = (state_40914[(7)]);
var inst_40817 = cljs.core.chunked_seq_QMARK_.call(null,inst_40815);
var state_40914__$1 = state_40914;
if(inst_40817){
var statearr_40982_41046 = state_40914__$1;
(statearr_40982_41046[(1)] = (19));

} else {
var statearr_40983_41047 = state_40914__$1;
(statearr_40983_41047[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (38))){
var inst_40893 = (state_40914[(2)]);
var state_40914__$1 = state_40914;
var statearr_40984_41048 = state_40914__$1;
(statearr_40984_41048[(2)] = inst_40893);

(statearr_40984_41048[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (30))){
var state_40914__$1 = state_40914;
var statearr_40985_41049 = state_40914__$1;
(statearr_40985_41049[(2)] = null);

(statearr_40985_41049[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (10))){
var inst_40796 = (state_40914[(15)]);
var inst_40798 = (state_40914[(17)]);
var inst_40804 = cljs.core._nth.call(null,inst_40796,inst_40798);
var inst_40805 = cljs.core.nth.call(null,inst_40804,(0),null);
var inst_40806 = cljs.core.nth.call(null,inst_40804,(1),null);
var state_40914__$1 = (function (){var statearr_40986 = state_40914;
(statearr_40986[(26)] = inst_40805);

return statearr_40986;
})();
if(cljs.core.truth_(inst_40806)){
var statearr_40987_41050 = state_40914__$1;
(statearr_40987_41050[(1)] = (13));

} else {
var statearr_40988_41051 = state_40914__$1;
(statearr_40988_41051[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (18))){
var inst_40839 = (state_40914[(2)]);
var state_40914__$1 = state_40914;
var statearr_40989_41052 = state_40914__$1;
(statearr_40989_41052[(2)] = inst_40839);

(statearr_40989_41052[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (42))){
var state_40914__$1 = state_40914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40914__$1,(45),dchan);
} else {
if((state_val_40915 === (37))){
var inst_40786 = (state_40914[(9)]);
var inst_40882 = (state_40914[(23)]);
var inst_40873 = (state_40914[(25)]);
var inst_40882__$1 = cljs.core.first.call(null,inst_40873);
var inst_40883 = cljs.core.async.put_BANG_.call(null,inst_40882__$1,inst_40786,done);
var state_40914__$1 = (function (){var statearr_40990 = state_40914;
(statearr_40990[(23)] = inst_40882__$1);

return statearr_40990;
})();
if(cljs.core.truth_(inst_40883)){
var statearr_40991_41053 = state_40914__$1;
(statearr_40991_41053[(1)] = (39));

} else {
var statearr_40992_41054 = state_40914__$1;
(statearr_40992_41054[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40915 === (8))){
var inst_40797 = (state_40914[(14)]);
var inst_40798 = (state_40914[(17)]);
var inst_40800 = (inst_40798 < inst_40797);
var inst_40801 = inst_40800;
var state_40914__$1 = state_40914;
if(cljs.core.truth_(inst_40801)){
var statearr_40993_41055 = state_40914__$1;
(statearr_40993_41055[(1)] = (10));

} else {
var statearr_40994_41056 = state_40914__$1;
(statearr_40994_41056[(1)] = (11));

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
});})(c__37149__auto___41002,cs,m,dchan,dctr,done))
;
return ((function (switch__37128__auto__,c__37149__auto___41002,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__37129__auto__ = null;
var cljs$core$async$mult_$_state_machine__37129__auto____0 = (function (){
var statearr_40998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40998[(0)] = cljs$core$async$mult_$_state_machine__37129__auto__);

(statearr_40998[(1)] = (1));

return statearr_40998;
});
var cljs$core$async$mult_$_state_machine__37129__auto____1 = (function (state_40914){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_40914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e40999){if((e40999 instanceof Object)){
var ex__37132__auto__ = e40999;
var statearr_41000_41057 = state_40914;
(statearr_41000_41057[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41058 = state_40914;
state_40914 = G__41058;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__37129__auto__ = function(state_40914){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__37129__auto____1.call(this,state_40914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__37129__auto____0;
cljs$core$async$mult_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__37129__auto____1;
return cljs$core$async$mult_$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto___41002,cs,m,dchan,dctr,done))
})();
var state__37151__auto__ = (function (){var statearr_41001 = f__37150__auto__.call(null);
(statearr_41001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto___41002);

return statearr_41001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto___41002,cs,m,dchan,dctr,done))
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
var args41059 = [];
var len__35630__auto___41062 = arguments.length;
var i__35631__auto___41063 = (0);
while(true){
if((i__35631__auto___41063 < len__35630__auto___41062)){
args41059.push((arguments[i__35631__auto___41063]));

var G__41064 = (i__35631__auto___41063 + (1));
i__35631__auto___41063 = G__41064;
continue;
} else {
}
break;
}

var G__41061 = args41059.length;
switch (G__41061) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41059.length)].join('')));

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
var x__35227__auto__ = (((m == null))?null:m);
var m__35228__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__35227__auto__)]);
if(!((m__35228__auto__ == null))){
return m__35228__auto__.call(null,m,ch);
} else {
var m__35228__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__35228__auto____$1 == null))){
return m__35228__auto____$1.call(null,m,ch);
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
var x__35227__auto__ = (((m == null))?null:m);
var m__35228__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__35227__auto__)]);
if(!((m__35228__auto__ == null))){
return m__35228__auto__.call(null,m,ch);
} else {
var m__35228__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__35228__auto____$1 == null))){
return m__35228__auto____$1.call(null,m,ch);
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
var x__35227__auto__ = (((m == null))?null:m);
var m__35228__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__35227__auto__)]);
if(!((m__35228__auto__ == null))){
return m__35228__auto__.call(null,m);
} else {
var m__35228__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__35228__auto____$1 == null))){
return m__35228__auto____$1.call(null,m);
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
var x__35227__auto__ = (((m == null))?null:m);
var m__35228__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__35227__auto__)]);
if(!((m__35228__auto__ == null))){
return m__35228__auto__.call(null,m,state_map);
} else {
var m__35228__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__35228__auto____$1 == null))){
return m__35228__auto____$1.call(null,m,state_map);
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
var x__35227__auto__ = (((m == null))?null:m);
var m__35228__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__35227__auto__)]);
if(!((m__35228__auto__ == null))){
return m__35228__auto__.call(null,m,mode);
} else {
var m__35228__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__35228__auto____$1 == null))){
return m__35228__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__35637__auto__ = [];
var len__35630__auto___41076 = arguments.length;
var i__35631__auto___41077 = (0);
while(true){
if((i__35631__auto___41077 < len__35630__auto___41076)){
args__35637__auto__.push((arguments[i__35631__auto___41077]));

var G__41078 = (i__35631__auto___41077 + (1));
i__35631__auto___41077 = G__41078;
continue;
} else {
}
break;
}

var argseq__35638__auto__ = ((((3) < args__35637__auto__.length))?(new cljs.core.IndexedSeq(args__35637__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__35638__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41070){
var map__41071 = p__41070;
var map__41071__$1 = ((((!((map__41071 == null)))?((((map__41071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41071):map__41071);
var opts = map__41071__$1;
var statearr_41073_41079 = state;
(statearr_41073_41079[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__41071,map__41071__$1,opts){
return (function (val){
var statearr_41074_41080 = state;
(statearr_41074_41080[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__41071,map__41071__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_41075_41081 = state;
(statearr_41075_41081[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41066){
var G__41067 = cljs.core.first.call(null,seq41066);
var seq41066__$1 = cljs.core.next.call(null,seq41066);
var G__41068 = cljs.core.first.call(null,seq41066__$1);
var seq41066__$2 = cljs.core.next.call(null,seq41066__$1);
var G__41069 = cljs.core.first.call(null,seq41066__$2);
var seq41066__$3 = cljs.core.next.call(null,seq41066__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__41067,G__41068,G__41069,seq41066__$3);
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
if(typeof cljs.core.async.t_cljs$core$async41245 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41245 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41246){
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
this.meta41246 = meta41246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41247,meta41246__$1){
var self__ = this;
var _41247__$1 = this;
return (new cljs.core.async.t_cljs$core$async41245(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41246__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41245.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_41247){
var self__ = this;
var _41247__$1 = this;
return self__.meta41246;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41245.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41245.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41245.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async41245.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41245.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41245.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41245.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41245.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async41245.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta41246","meta41246",1090386673,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async41245.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41245.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41245";

cljs.core.async.t_cljs$core$async41245.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__35170__auto__,writer__35171__auto__,opt__35172__auto__){
return cljs.core._write.call(null,writer__35171__auto__,"cljs.core.async/t_cljs$core$async41245");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async41245 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async41245(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41246){
return (new cljs.core.async.t_cljs$core$async41245(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta41246));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async41245(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37149__auto___41408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto___41408,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto___41408,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_41345){
var state_val_41346 = (state_41345[(1)]);
if((state_val_41346 === (7))){
var inst_41263 = (state_41345[(2)]);
var state_41345__$1 = state_41345;
var statearr_41347_41409 = state_41345__$1;
(statearr_41347_41409[(2)] = inst_41263);

(statearr_41347_41409[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (20))){
var inst_41275 = (state_41345[(7)]);
var state_41345__$1 = state_41345;
var statearr_41348_41410 = state_41345__$1;
(statearr_41348_41410[(2)] = inst_41275);

(statearr_41348_41410[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (27))){
var state_41345__$1 = state_41345;
var statearr_41349_41411 = state_41345__$1;
(statearr_41349_41411[(2)] = null);

(statearr_41349_41411[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (1))){
var inst_41251 = (state_41345[(8)]);
var inst_41251__$1 = calc_state.call(null);
var inst_41253 = (inst_41251__$1 == null);
var inst_41254 = cljs.core.not.call(null,inst_41253);
var state_41345__$1 = (function (){var statearr_41350 = state_41345;
(statearr_41350[(8)] = inst_41251__$1);

return statearr_41350;
})();
if(inst_41254){
var statearr_41351_41412 = state_41345__$1;
(statearr_41351_41412[(1)] = (2));

} else {
var statearr_41352_41413 = state_41345__$1;
(statearr_41352_41413[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (24))){
var inst_41298 = (state_41345[(9)]);
var inst_41305 = (state_41345[(10)]);
var inst_41319 = (state_41345[(11)]);
var inst_41319__$1 = inst_41298.call(null,inst_41305);
var state_41345__$1 = (function (){var statearr_41353 = state_41345;
(statearr_41353[(11)] = inst_41319__$1);

return statearr_41353;
})();
if(cljs.core.truth_(inst_41319__$1)){
var statearr_41354_41414 = state_41345__$1;
(statearr_41354_41414[(1)] = (29));

} else {
var statearr_41355_41415 = state_41345__$1;
(statearr_41355_41415[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (4))){
var inst_41266 = (state_41345[(2)]);
var state_41345__$1 = state_41345;
if(cljs.core.truth_(inst_41266)){
var statearr_41356_41416 = state_41345__$1;
(statearr_41356_41416[(1)] = (8));

} else {
var statearr_41357_41417 = state_41345__$1;
(statearr_41357_41417[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (15))){
var inst_41292 = (state_41345[(2)]);
var state_41345__$1 = state_41345;
if(cljs.core.truth_(inst_41292)){
var statearr_41358_41418 = state_41345__$1;
(statearr_41358_41418[(1)] = (19));

} else {
var statearr_41359_41419 = state_41345__$1;
(statearr_41359_41419[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (21))){
var inst_41297 = (state_41345[(12)]);
var inst_41297__$1 = (state_41345[(2)]);
var inst_41298 = cljs.core.get.call(null,inst_41297__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41299 = cljs.core.get.call(null,inst_41297__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41300 = cljs.core.get.call(null,inst_41297__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41345__$1 = (function (){var statearr_41360 = state_41345;
(statearr_41360[(13)] = inst_41299);

(statearr_41360[(9)] = inst_41298);

(statearr_41360[(12)] = inst_41297__$1);

return statearr_41360;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_41345__$1,(22),inst_41300);
} else {
if((state_val_41346 === (31))){
var inst_41327 = (state_41345[(2)]);
var state_41345__$1 = state_41345;
if(cljs.core.truth_(inst_41327)){
var statearr_41361_41420 = state_41345__$1;
(statearr_41361_41420[(1)] = (32));

} else {
var statearr_41362_41421 = state_41345__$1;
(statearr_41362_41421[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (32))){
var inst_41304 = (state_41345[(14)]);
var state_41345__$1 = state_41345;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41345__$1,(35),out,inst_41304);
} else {
if((state_val_41346 === (33))){
var inst_41297 = (state_41345[(12)]);
var inst_41275 = inst_41297;
var state_41345__$1 = (function (){var statearr_41363 = state_41345;
(statearr_41363[(7)] = inst_41275);

return statearr_41363;
})();
var statearr_41364_41422 = state_41345__$1;
(statearr_41364_41422[(2)] = null);

(statearr_41364_41422[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (13))){
var inst_41275 = (state_41345[(7)]);
var inst_41282 = inst_41275.cljs$lang$protocol_mask$partition0$;
var inst_41283 = (inst_41282 & (64));
var inst_41284 = inst_41275.cljs$core$ISeq$;
var inst_41285 = (inst_41283) || (inst_41284);
var state_41345__$1 = state_41345;
if(cljs.core.truth_(inst_41285)){
var statearr_41365_41423 = state_41345__$1;
(statearr_41365_41423[(1)] = (16));

} else {
var statearr_41366_41424 = state_41345__$1;
(statearr_41366_41424[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (22))){
var inst_41305 = (state_41345[(10)]);
var inst_41304 = (state_41345[(14)]);
var inst_41303 = (state_41345[(2)]);
var inst_41304__$1 = cljs.core.nth.call(null,inst_41303,(0),null);
var inst_41305__$1 = cljs.core.nth.call(null,inst_41303,(1),null);
var inst_41306 = (inst_41304__$1 == null);
var inst_41307 = cljs.core._EQ_.call(null,inst_41305__$1,change);
var inst_41308 = (inst_41306) || (inst_41307);
var state_41345__$1 = (function (){var statearr_41367 = state_41345;
(statearr_41367[(10)] = inst_41305__$1);

(statearr_41367[(14)] = inst_41304__$1);

return statearr_41367;
})();
if(cljs.core.truth_(inst_41308)){
var statearr_41368_41425 = state_41345__$1;
(statearr_41368_41425[(1)] = (23));

} else {
var statearr_41369_41426 = state_41345__$1;
(statearr_41369_41426[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (36))){
var inst_41297 = (state_41345[(12)]);
var inst_41275 = inst_41297;
var state_41345__$1 = (function (){var statearr_41370 = state_41345;
(statearr_41370[(7)] = inst_41275);

return statearr_41370;
})();
var statearr_41371_41427 = state_41345__$1;
(statearr_41371_41427[(2)] = null);

(statearr_41371_41427[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (29))){
var inst_41319 = (state_41345[(11)]);
var state_41345__$1 = state_41345;
var statearr_41372_41428 = state_41345__$1;
(statearr_41372_41428[(2)] = inst_41319);

(statearr_41372_41428[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (6))){
var state_41345__$1 = state_41345;
var statearr_41373_41429 = state_41345__$1;
(statearr_41373_41429[(2)] = false);

(statearr_41373_41429[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (28))){
var inst_41315 = (state_41345[(2)]);
var inst_41316 = calc_state.call(null);
var inst_41275 = inst_41316;
var state_41345__$1 = (function (){var statearr_41374 = state_41345;
(statearr_41374[(15)] = inst_41315);

(statearr_41374[(7)] = inst_41275);

return statearr_41374;
})();
var statearr_41375_41430 = state_41345__$1;
(statearr_41375_41430[(2)] = null);

(statearr_41375_41430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (25))){
var inst_41341 = (state_41345[(2)]);
var state_41345__$1 = state_41345;
var statearr_41376_41431 = state_41345__$1;
(statearr_41376_41431[(2)] = inst_41341);

(statearr_41376_41431[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (34))){
var inst_41339 = (state_41345[(2)]);
var state_41345__$1 = state_41345;
var statearr_41377_41432 = state_41345__$1;
(statearr_41377_41432[(2)] = inst_41339);

(statearr_41377_41432[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (17))){
var state_41345__$1 = state_41345;
var statearr_41378_41433 = state_41345__$1;
(statearr_41378_41433[(2)] = false);

(statearr_41378_41433[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (3))){
var state_41345__$1 = state_41345;
var statearr_41379_41434 = state_41345__$1;
(statearr_41379_41434[(2)] = false);

(statearr_41379_41434[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (12))){
var inst_41343 = (state_41345[(2)]);
var state_41345__$1 = state_41345;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41345__$1,inst_41343);
} else {
if((state_val_41346 === (2))){
var inst_41251 = (state_41345[(8)]);
var inst_41256 = inst_41251.cljs$lang$protocol_mask$partition0$;
var inst_41257 = (inst_41256 & (64));
var inst_41258 = inst_41251.cljs$core$ISeq$;
var inst_41259 = (inst_41257) || (inst_41258);
var state_41345__$1 = state_41345;
if(cljs.core.truth_(inst_41259)){
var statearr_41380_41435 = state_41345__$1;
(statearr_41380_41435[(1)] = (5));

} else {
var statearr_41381_41436 = state_41345__$1;
(statearr_41381_41436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (23))){
var inst_41304 = (state_41345[(14)]);
var inst_41310 = (inst_41304 == null);
var state_41345__$1 = state_41345;
if(cljs.core.truth_(inst_41310)){
var statearr_41382_41437 = state_41345__$1;
(statearr_41382_41437[(1)] = (26));

} else {
var statearr_41383_41438 = state_41345__$1;
(statearr_41383_41438[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (35))){
var inst_41330 = (state_41345[(2)]);
var state_41345__$1 = state_41345;
if(cljs.core.truth_(inst_41330)){
var statearr_41384_41439 = state_41345__$1;
(statearr_41384_41439[(1)] = (36));

} else {
var statearr_41385_41440 = state_41345__$1;
(statearr_41385_41440[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (19))){
var inst_41275 = (state_41345[(7)]);
var inst_41294 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41275);
var state_41345__$1 = state_41345;
var statearr_41386_41441 = state_41345__$1;
(statearr_41386_41441[(2)] = inst_41294);

(statearr_41386_41441[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (11))){
var inst_41275 = (state_41345[(7)]);
var inst_41279 = (inst_41275 == null);
var inst_41280 = cljs.core.not.call(null,inst_41279);
var state_41345__$1 = state_41345;
if(inst_41280){
var statearr_41387_41442 = state_41345__$1;
(statearr_41387_41442[(1)] = (13));

} else {
var statearr_41388_41443 = state_41345__$1;
(statearr_41388_41443[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (9))){
var inst_41251 = (state_41345[(8)]);
var state_41345__$1 = state_41345;
var statearr_41389_41444 = state_41345__$1;
(statearr_41389_41444[(2)] = inst_41251);

(statearr_41389_41444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (5))){
var state_41345__$1 = state_41345;
var statearr_41390_41445 = state_41345__$1;
(statearr_41390_41445[(2)] = true);

(statearr_41390_41445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (14))){
var state_41345__$1 = state_41345;
var statearr_41391_41446 = state_41345__$1;
(statearr_41391_41446[(2)] = false);

(statearr_41391_41446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (26))){
var inst_41305 = (state_41345[(10)]);
var inst_41312 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_41305);
var state_41345__$1 = state_41345;
var statearr_41392_41447 = state_41345__$1;
(statearr_41392_41447[(2)] = inst_41312);

(statearr_41392_41447[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (16))){
var state_41345__$1 = state_41345;
var statearr_41393_41448 = state_41345__$1;
(statearr_41393_41448[(2)] = true);

(statearr_41393_41448[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (38))){
var inst_41335 = (state_41345[(2)]);
var state_41345__$1 = state_41345;
var statearr_41394_41449 = state_41345__$1;
(statearr_41394_41449[(2)] = inst_41335);

(statearr_41394_41449[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (30))){
var inst_41299 = (state_41345[(13)]);
var inst_41298 = (state_41345[(9)]);
var inst_41305 = (state_41345[(10)]);
var inst_41322 = cljs.core.empty_QMARK_.call(null,inst_41298);
var inst_41323 = inst_41299.call(null,inst_41305);
var inst_41324 = cljs.core.not.call(null,inst_41323);
var inst_41325 = (inst_41322) && (inst_41324);
var state_41345__$1 = state_41345;
var statearr_41395_41450 = state_41345__$1;
(statearr_41395_41450[(2)] = inst_41325);

(statearr_41395_41450[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (10))){
var inst_41251 = (state_41345[(8)]);
var inst_41271 = (state_41345[(2)]);
var inst_41272 = cljs.core.get.call(null,inst_41271,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41273 = cljs.core.get.call(null,inst_41271,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41274 = cljs.core.get.call(null,inst_41271,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41275 = inst_41251;
var state_41345__$1 = (function (){var statearr_41396 = state_41345;
(statearr_41396[(7)] = inst_41275);

(statearr_41396[(16)] = inst_41272);

(statearr_41396[(17)] = inst_41274);

(statearr_41396[(18)] = inst_41273);

return statearr_41396;
})();
var statearr_41397_41451 = state_41345__$1;
(statearr_41397_41451[(2)] = null);

(statearr_41397_41451[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (18))){
var inst_41289 = (state_41345[(2)]);
var state_41345__$1 = state_41345;
var statearr_41398_41452 = state_41345__$1;
(statearr_41398_41452[(2)] = inst_41289);

(statearr_41398_41452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (37))){
var state_41345__$1 = state_41345;
var statearr_41399_41453 = state_41345__$1;
(statearr_41399_41453[(2)] = null);

(statearr_41399_41453[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41346 === (8))){
var inst_41251 = (state_41345[(8)]);
var inst_41268 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41251);
var state_41345__$1 = state_41345;
var statearr_41400_41454 = state_41345__$1;
(statearr_41400_41454[(2)] = inst_41268);

(statearr_41400_41454[(1)] = (10));


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
});})(c__37149__auto___41408,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__37128__auto__,c__37149__auto___41408,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__37129__auto__ = null;
var cljs$core$async$mix_$_state_machine__37129__auto____0 = (function (){
var statearr_41404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41404[(0)] = cljs$core$async$mix_$_state_machine__37129__auto__);

(statearr_41404[(1)] = (1));

return statearr_41404;
});
var cljs$core$async$mix_$_state_machine__37129__auto____1 = (function (state_41345){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_41345);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e41405){if((e41405 instanceof Object)){
var ex__37132__auto__ = e41405;
var statearr_41406_41455 = state_41345;
(statearr_41406_41455[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41345);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41405;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41456 = state_41345;
state_41345 = G__41456;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__37129__auto__ = function(state_41345){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__37129__auto____1.call(this,state_41345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__37129__auto____0;
cljs$core$async$mix_$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__37129__auto____1;
return cljs$core$async$mix_$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto___41408,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__37151__auto__ = (function (){var statearr_41407 = f__37150__auto__.call(null);
(statearr_41407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto___41408);

return statearr_41407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto___41408,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__35227__auto__ = (((p == null))?null:p);
var m__35228__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__35227__auto__)]);
if(!((m__35228__auto__ == null))){
return m__35228__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__35228__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__35228__auto____$1 == null))){
return m__35228__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__35227__auto__ = (((p == null))?null:p);
var m__35228__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__35227__auto__)]);
if(!((m__35228__auto__ == null))){
return m__35228__auto__.call(null,p,v,ch);
} else {
var m__35228__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__35228__auto____$1 == null))){
return m__35228__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args41457 = [];
var len__35630__auto___41460 = arguments.length;
var i__35631__auto___41461 = (0);
while(true){
if((i__35631__auto___41461 < len__35630__auto___41460)){
args41457.push((arguments[i__35631__auto___41461]));

var G__41462 = (i__35631__auto___41461 + (1));
i__35631__auto___41461 = G__41462;
continue;
} else {
}
break;
}

var G__41459 = args41457.length;
switch (G__41459) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41457.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__35227__auto__ = (((p == null))?null:p);
var m__35228__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__35227__auto__)]);
if(!((m__35228__auto__ == null))){
return m__35228__auto__.call(null,p);
} else {
var m__35228__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__35228__auto____$1 == null))){
return m__35228__auto____$1.call(null,p);
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
var x__35227__auto__ = (((p == null))?null:p);
var m__35228__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__35227__auto__)]);
if(!((m__35228__auto__ == null))){
return m__35228__auto__.call(null,p,v);
} else {
var m__35228__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__35228__auto____$1 == null))){
return m__35228__auto____$1.call(null,p,v);
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
var args41465 = [];
var len__35630__auto___41590 = arguments.length;
var i__35631__auto___41591 = (0);
while(true){
if((i__35631__auto___41591 < len__35630__auto___41590)){
args41465.push((arguments[i__35631__auto___41591]));

var G__41592 = (i__35631__auto___41591 + (1));
i__35631__auto___41591 = G__41592;
continue;
} else {
}
break;
}

var G__41467 = args41465.length;
switch (G__41467) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41465.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__34572__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__34572__auto__)){
return or__34572__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__34572__auto__,mults){
return (function (p1__41464_SHARP_){
if(cljs.core.truth_(p1__41464_SHARP_.call(null,topic))){
return p1__41464_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__41464_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__34572__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async41468 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41468 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41469){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41469 = meta41469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_41470,meta41469__$1){
var self__ = this;
var _41470__$1 = this;
return (new cljs.core.async.t_cljs$core$async41468(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41469__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_41470){
var self__ = this;
var _41470__$1 = this;
return self__.meta41469;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41468.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async41468.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41468.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async41468.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41468.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async41468.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41468.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41468.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41469","meta41469",-115534435,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async41468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41468";

cljs.core.async.t_cljs$core$async41468.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__35170__auto__,writer__35171__auto__,opt__35172__auto__){
return cljs.core._write.call(null,writer__35171__auto__,"cljs.core.async/t_cljs$core$async41468");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async41468 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async41468(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41469){
return (new cljs.core.async.t_cljs$core$async41468(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta41469));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async41468(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__37149__auto___41594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto___41594,mults,ensure_mult,p){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto___41594,mults,ensure_mult,p){
return (function (state_41542){
var state_val_41543 = (state_41542[(1)]);
if((state_val_41543 === (7))){
var inst_41538 = (state_41542[(2)]);
var state_41542__$1 = state_41542;
var statearr_41544_41595 = state_41542__$1;
(statearr_41544_41595[(2)] = inst_41538);

(statearr_41544_41595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (20))){
var state_41542__$1 = state_41542;
var statearr_41545_41596 = state_41542__$1;
(statearr_41545_41596[(2)] = null);

(statearr_41545_41596[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (1))){
var state_41542__$1 = state_41542;
var statearr_41546_41597 = state_41542__$1;
(statearr_41546_41597[(2)] = null);

(statearr_41546_41597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (24))){
var inst_41521 = (state_41542[(7)]);
var inst_41530 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_41521);
var state_41542__$1 = state_41542;
var statearr_41547_41598 = state_41542__$1;
(statearr_41547_41598[(2)] = inst_41530);

(statearr_41547_41598[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (4))){
var inst_41473 = (state_41542[(8)]);
var inst_41473__$1 = (state_41542[(2)]);
var inst_41474 = (inst_41473__$1 == null);
var state_41542__$1 = (function (){var statearr_41548 = state_41542;
(statearr_41548[(8)] = inst_41473__$1);

return statearr_41548;
})();
if(cljs.core.truth_(inst_41474)){
var statearr_41549_41599 = state_41542__$1;
(statearr_41549_41599[(1)] = (5));

} else {
var statearr_41550_41600 = state_41542__$1;
(statearr_41550_41600[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (15))){
var inst_41515 = (state_41542[(2)]);
var state_41542__$1 = state_41542;
var statearr_41551_41601 = state_41542__$1;
(statearr_41551_41601[(2)] = inst_41515);

(statearr_41551_41601[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (21))){
var inst_41535 = (state_41542[(2)]);
var state_41542__$1 = (function (){var statearr_41552 = state_41542;
(statearr_41552[(9)] = inst_41535);

return statearr_41552;
})();
var statearr_41553_41602 = state_41542__$1;
(statearr_41553_41602[(2)] = null);

(statearr_41553_41602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (13))){
var inst_41497 = (state_41542[(10)]);
var inst_41499 = cljs.core.chunked_seq_QMARK_.call(null,inst_41497);
var state_41542__$1 = state_41542;
if(inst_41499){
var statearr_41554_41603 = state_41542__$1;
(statearr_41554_41603[(1)] = (16));

} else {
var statearr_41555_41604 = state_41542__$1;
(statearr_41555_41604[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (22))){
var inst_41527 = (state_41542[(2)]);
var state_41542__$1 = state_41542;
if(cljs.core.truth_(inst_41527)){
var statearr_41556_41605 = state_41542__$1;
(statearr_41556_41605[(1)] = (23));

} else {
var statearr_41557_41606 = state_41542__$1;
(statearr_41557_41606[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (6))){
var inst_41523 = (state_41542[(11)]);
var inst_41521 = (state_41542[(7)]);
var inst_41473 = (state_41542[(8)]);
var inst_41521__$1 = topic_fn.call(null,inst_41473);
var inst_41522 = cljs.core.deref.call(null,mults);
var inst_41523__$1 = cljs.core.get.call(null,inst_41522,inst_41521__$1);
var state_41542__$1 = (function (){var statearr_41558 = state_41542;
(statearr_41558[(11)] = inst_41523__$1);

(statearr_41558[(7)] = inst_41521__$1);

return statearr_41558;
})();
if(cljs.core.truth_(inst_41523__$1)){
var statearr_41559_41607 = state_41542__$1;
(statearr_41559_41607[(1)] = (19));

} else {
var statearr_41560_41608 = state_41542__$1;
(statearr_41560_41608[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (25))){
var inst_41532 = (state_41542[(2)]);
var state_41542__$1 = state_41542;
var statearr_41561_41609 = state_41542__$1;
(statearr_41561_41609[(2)] = inst_41532);

(statearr_41561_41609[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (17))){
var inst_41497 = (state_41542[(10)]);
var inst_41506 = cljs.core.first.call(null,inst_41497);
var inst_41507 = cljs.core.async.muxch_STAR_.call(null,inst_41506);
var inst_41508 = cljs.core.async.close_BANG_.call(null,inst_41507);
var inst_41509 = cljs.core.next.call(null,inst_41497);
var inst_41483 = inst_41509;
var inst_41484 = null;
var inst_41485 = (0);
var inst_41486 = (0);
var state_41542__$1 = (function (){var statearr_41562 = state_41542;
(statearr_41562[(12)] = inst_41485);

(statearr_41562[(13)] = inst_41484);

(statearr_41562[(14)] = inst_41508);

(statearr_41562[(15)] = inst_41483);

(statearr_41562[(16)] = inst_41486);

return statearr_41562;
})();
var statearr_41563_41610 = state_41542__$1;
(statearr_41563_41610[(2)] = null);

(statearr_41563_41610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (3))){
var inst_41540 = (state_41542[(2)]);
var state_41542__$1 = state_41542;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41542__$1,inst_41540);
} else {
if((state_val_41543 === (12))){
var inst_41517 = (state_41542[(2)]);
var state_41542__$1 = state_41542;
var statearr_41564_41611 = state_41542__$1;
(statearr_41564_41611[(2)] = inst_41517);

(statearr_41564_41611[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (2))){
var state_41542__$1 = state_41542;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41542__$1,(4),ch);
} else {
if((state_val_41543 === (23))){
var state_41542__$1 = state_41542;
var statearr_41565_41612 = state_41542__$1;
(statearr_41565_41612[(2)] = null);

(statearr_41565_41612[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (19))){
var inst_41523 = (state_41542[(11)]);
var inst_41473 = (state_41542[(8)]);
var inst_41525 = cljs.core.async.muxch_STAR_.call(null,inst_41523);
var state_41542__$1 = state_41542;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41542__$1,(22),inst_41525,inst_41473);
} else {
if((state_val_41543 === (11))){
var inst_41497 = (state_41542[(10)]);
var inst_41483 = (state_41542[(15)]);
var inst_41497__$1 = cljs.core.seq.call(null,inst_41483);
var state_41542__$1 = (function (){var statearr_41566 = state_41542;
(statearr_41566[(10)] = inst_41497__$1);

return statearr_41566;
})();
if(inst_41497__$1){
var statearr_41567_41613 = state_41542__$1;
(statearr_41567_41613[(1)] = (13));

} else {
var statearr_41568_41614 = state_41542__$1;
(statearr_41568_41614[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (9))){
var inst_41519 = (state_41542[(2)]);
var state_41542__$1 = state_41542;
var statearr_41569_41615 = state_41542__$1;
(statearr_41569_41615[(2)] = inst_41519);

(statearr_41569_41615[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (5))){
var inst_41480 = cljs.core.deref.call(null,mults);
var inst_41481 = cljs.core.vals.call(null,inst_41480);
var inst_41482 = cljs.core.seq.call(null,inst_41481);
var inst_41483 = inst_41482;
var inst_41484 = null;
var inst_41485 = (0);
var inst_41486 = (0);
var state_41542__$1 = (function (){var statearr_41570 = state_41542;
(statearr_41570[(12)] = inst_41485);

(statearr_41570[(13)] = inst_41484);

(statearr_41570[(15)] = inst_41483);

(statearr_41570[(16)] = inst_41486);

return statearr_41570;
})();
var statearr_41571_41616 = state_41542__$1;
(statearr_41571_41616[(2)] = null);

(statearr_41571_41616[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (14))){
var state_41542__$1 = state_41542;
var statearr_41575_41617 = state_41542__$1;
(statearr_41575_41617[(2)] = null);

(statearr_41575_41617[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (16))){
var inst_41497 = (state_41542[(10)]);
var inst_41501 = cljs.core.chunk_first.call(null,inst_41497);
var inst_41502 = cljs.core.chunk_rest.call(null,inst_41497);
var inst_41503 = cljs.core.count.call(null,inst_41501);
var inst_41483 = inst_41502;
var inst_41484 = inst_41501;
var inst_41485 = inst_41503;
var inst_41486 = (0);
var state_41542__$1 = (function (){var statearr_41576 = state_41542;
(statearr_41576[(12)] = inst_41485);

(statearr_41576[(13)] = inst_41484);

(statearr_41576[(15)] = inst_41483);

(statearr_41576[(16)] = inst_41486);

return statearr_41576;
})();
var statearr_41577_41618 = state_41542__$1;
(statearr_41577_41618[(2)] = null);

(statearr_41577_41618[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (10))){
var inst_41485 = (state_41542[(12)]);
var inst_41484 = (state_41542[(13)]);
var inst_41483 = (state_41542[(15)]);
var inst_41486 = (state_41542[(16)]);
var inst_41491 = cljs.core._nth.call(null,inst_41484,inst_41486);
var inst_41492 = cljs.core.async.muxch_STAR_.call(null,inst_41491);
var inst_41493 = cljs.core.async.close_BANG_.call(null,inst_41492);
var inst_41494 = (inst_41486 + (1));
var tmp41572 = inst_41485;
var tmp41573 = inst_41484;
var tmp41574 = inst_41483;
var inst_41483__$1 = tmp41574;
var inst_41484__$1 = tmp41573;
var inst_41485__$1 = tmp41572;
var inst_41486__$1 = inst_41494;
var state_41542__$1 = (function (){var statearr_41578 = state_41542;
(statearr_41578[(12)] = inst_41485__$1);

(statearr_41578[(13)] = inst_41484__$1);

(statearr_41578[(15)] = inst_41483__$1);

(statearr_41578[(17)] = inst_41493);

(statearr_41578[(16)] = inst_41486__$1);

return statearr_41578;
})();
var statearr_41579_41619 = state_41542__$1;
(statearr_41579_41619[(2)] = null);

(statearr_41579_41619[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (18))){
var inst_41512 = (state_41542[(2)]);
var state_41542__$1 = state_41542;
var statearr_41580_41620 = state_41542__$1;
(statearr_41580_41620[(2)] = inst_41512);

(statearr_41580_41620[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41543 === (8))){
var inst_41485 = (state_41542[(12)]);
var inst_41486 = (state_41542[(16)]);
var inst_41488 = (inst_41486 < inst_41485);
var inst_41489 = inst_41488;
var state_41542__$1 = state_41542;
if(cljs.core.truth_(inst_41489)){
var statearr_41581_41621 = state_41542__$1;
(statearr_41581_41621[(1)] = (10));

} else {
var statearr_41582_41622 = state_41542__$1;
(statearr_41582_41622[(1)] = (11));

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
});})(c__37149__auto___41594,mults,ensure_mult,p))
;
return ((function (switch__37128__auto__,c__37149__auto___41594,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_41586 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41586[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_41586[(1)] = (1));

return statearr_41586;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_41542){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_41542);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e41587){if((e41587 instanceof Object)){
var ex__37132__auto__ = e41587;
var statearr_41588_41623 = state_41542;
(statearr_41588_41623[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41542);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41587;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41624 = state_41542;
state_41542 = G__41624;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_41542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_41542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto___41594,mults,ensure_mult,p))
})();
var state__37151__auto__ = (function (){var statearr_41589 = f__37150__auto__.call(null);
(statearr_41589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto___41594);

return statearr_41589;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto___41594,mults,ensure_mult,p))
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
var args41625 = [];
var len__35630__auto___41628 = arguments.length;
var i__35631__auto___41629 = (0);
while(true){
if((i__35631__auto___41629 < len__35630__auto___41628)){
args41625.push((arguments[i__35631__auto___41629]));

var G__41630 = (i__35631__auto___41629 + (1));
i__35631__auto___41629 = G__41630;
continue;
} else {
}
break;
}

var G__41627 = args41625.length;
switch (G__41627) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41625.length)].join('')));

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
var args41632 = [];
var len__35630__auto___41635 = arguments.length;
var i__35631__auto___41636 = (0);
while(true){
if((i__35631__auto___41636 < len__35630__auto___41635)){
args41632.push((arguments[i__35631__auto___41636]));

var G__41637 = (i__35631__auto___41636 + (1));
i__35631__auto___41636 = G__41637;
continue;
} else {
}
break;
}

var G__41634 = args41632.length;
switch (G__41634) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41632.length)].join('')));

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
var args41639 = [];
var len__35630__auto___41710 = arguments.length;
var i__35631__auto___41711 = (0);
while(true){
if((i__35631__auto___41711 < len__35630__auto___41710)){
args41639.push((arguments[i__35631__auto___41711]));

var G__41712 = (i__35631__auto___41711 + (1));
i__35631__auto___41711 = G__41712;
continue;
} else {
}
break;
}

var G__41641 = args41639.length;
switch (G__41641) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41639.length)].join('')));

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
var c__37149__auto___41714 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto___41714,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto___41714,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_41680){
var state_val_41681 = (state_41680[(1)]);
if((state_val_41681 === (7))){
var state_41680__$1 = state_41680;
var statearr_41682_41715 = state_41680__$1;
(statearr_41682_41715[(2)] = null);

(statearr_41682_41715[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41681 === (1))){
var state_41680__$1 = state_41680;
var statearr_41683_41716 = state_41680__$1;
(statearr_41683_41716[(2)] = null);

(statearr_41683_41716[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41681 === (4))){
var inst_41644 = (state_41680[(7)]);
var inst_41646 = (inst_41644 < cnt);
var state_41680__$1 = state_41680;
if(cljs.core.truth_(inst_41646)){
var statearr_41684_41717 = state_41680__$1;
(statearr_41684_41717[(1)] = (6));

} else {
var statearr_41685_41718 = state_41680__$1;
(statearr_41685_41718[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41681 === (15))){
var inst_41676 = (state_41680[(2)]);
var state_41680__$1 = state_41680;
var statearr_41686_41719 = state_41680__$1;
(statearr_41686_41719[(2)] = inst_41676);

(statearr_41686_41719[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41681 === (13))){
var inst_41669 = cljs.core.async.close_BANG_.call(null,out);
var state_41680__$1 = state_41680;
var statearr_41687_41720 = state_41680__$1;
(statearr_41687_41720[(2)] = inst_41669);

(statearr_41687_41720[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41681 === (6))){
var state_41680__$1 = state_41680;
var statearr_41688_41721 = state_41680__$1;
(statearr_41688_41721[(2)] = null);

(statearr_41688_41721[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41681 === (3))){
var inst_41678 = (state_41680[(2)]);
var state_41680__$1 = state_41680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41680__$1,inst_41678);
} else {
if((state_val_41681 === (12))){
var inst_41666 = (state_41680[(8)]);
var inst_41666__$1 = (state_41680[(2)]);
var inst_41667 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_41666__$1);
var state_41680__$1 = (function (){var statearr_41689 = state_41680;
(statearr_41689[(8)] = inst_41666__$1);

return statearr_41689;
})();
if(cljs.core.truth_(inst_41667)){
var statearr_41690_41722 = state_41680__$1;
(statearr_41690_41722[(1)] = (13));

} else {
var statearr_41691_41723 = state_41680__$1;
(statearr_41691_41723[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41681 === (2))){
var inst_41643 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_41644 = (0);
var state_41680__$1 = (function (){var statearr_41692 = state_41680;
(statearr_41692[(7)] = inst_41644);

(statearr_41692[(9)] = inst_41643);

return statearr_41692;
})();
var statearr_41693_41724 = state_41680__$1;
(statearr_41693_41724[(2)] = null);

(statearr_41693_41724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41681 === (11))){
var inst_41644 = (state_41680[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_41680,(10),Object,null,(9));
var inst_41653 = chs__$1.call(null,inst_41644);
var inst_41654 = done.call(null,inst_41644);
var inst_41655 = cljs.core.async.take_BANG_.call(null,inst_41653,inst_41654);
var state_41680__$1 = state_41680;
var statearr_41694_41725 = state_41680__$1;
(statearr_41694_41725[(2)] = inst_41655);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41680__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41681 === (9))){
var inst_41644 = (state_41680[(7)]);
var inst_41657 = (state_41680[(2)]);
var inst_41658 = (inst_41644 + (1));
var inst_41644__$1 = inst_41658;
var state_41680__$1 = (function (){var statearr_41695 = state_41680;
(statearr_41695[(7)] = inst_41644__$1);

(statearr_41695[(10)] = inst_41657);

return statearr_41695;
})();
var statearr_41696_41726 = state_41680__$1;
(statearr_41696_41726[(2)] = null);

(statearr_41696_41726[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41681 === (5))){
var inst_41664 = (state_41680[(2)]);
var state_41680__$1 = (function (){var statearr_41697 = state_41680;
(statearr_41697[(11)] = inst_41664);

return statearr_41697;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41680__$1,(12),dchan);
} else {
if((state_val_41681 === (14))){
var inst_41666 = (state_41680[(8)]);
var inst_41671 = cljs.core.apply.call(null,f,inst_41666);
var state_41680__$1 = state_41680;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41680__$1,(16),out,inst_41671);
} else {
if((state_val_41681 === (16))){
var inst_41673 = (state_41680[(2)]);
var state_41680__$1 = (function (){var statearr_41698 = state_41680;
(statearr_41698[(12)] = inst_41673);

return statearr_41698;
})();
var statearr_41699_41727 = state_41680__$1;
(statearr_41699_41727[(2)] = null);

(statearr_41699_41727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41681 === (10))){
var inst_41648 = (state_41680[(2)]);
var inst_41649 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_41680__$1 = (function (){var statearr_41700 = state_41680;
(statearr_41700[(13)] = inst_41648);

return statearr_41700;
})();
var statearr_41701_41728 = state_41680__$1;
(statearr_41701_41728[(2)] = inst_41649);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41680__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41681 === (8))){
var inst_41662 = (state_41680[(2)]);
var state_41680__$1 = state_41680;
var statearr_41702_41729 = state_41680__$1;
(statearr_41702_41729[(2)] = inst_41662);

(statearr_41702_41729[(1)] = (5));


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
});})(c__37149__auto___41714,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__37128__auto__,c__37149__auto___41714,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_41706 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41706[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_41706[(1)] = (1));

return statearr_41706;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_41680){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_41680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e41707){if((e41707 instanceof Object)){
var ex__37132__auto__ = e41707;
var statearr_41708_41730 = state_41680;
(statearr_41708_41730[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41707;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41731 = state_41680;
state_41680 = G__41731;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_41680){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_41680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto___41714,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__37151__auto__ = (function (){var statearr_41709 = f__37150__auto__.call(null);
(statearr_41709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto___41714);

return statearr_41709;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto___41714,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args41733 = [];
var len__35630__auto___41789 = arguments.length;
var i__35631__auto___41790 = (0);
while(true){
if((i__35631__auto___41790 < len__35630__auto___41789)){
args41733.push((arguments[i__35631__auto___41790]));

var G__41791 = (i__35631__auto___41790 + (1));
i__35631__auto___41790 = G__41791;
continue;
} else {
}
break;
}

var G__41735 = args41733.length;
switch (G__41735) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41733.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37149__auto___41793 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto___41793,out){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto___41793,out){
return (function (state_41765){
var state_val_41766 = (state_41765[(1)]);
if((state_val_41766 === (7))){
var inst_41744 = (state_41765[(7)]);
var inst_41745 = (state_41765[(8)]);
var inst_41744__$1 = (state_41765[(2)]);
var inst_41745__$1 = cljs.core.nth.call(null,inst_41744__$1,(0),null);
var inst_41746 = cljs.core.nth.call(null,inst_41744__$1,(1),null);
var inst_41747 = (inst_41745__$1 == null);
var state_41765__$1 = (function (){var statearr_41767 = state_41765;
(statearr_41767[(9)] = inst_41746);

(statearr_41767[(7)] = inst_41744__$1);

(statearr_41767[(8)] = inst_41745__$1);

return statearr_41767;
})();
if(cljs.core.truth_(inst_41747)){
var statearr_41768_41794 = state_41765__$1;
(statearr_41768_41794[(1)] = (8));

} else {
var statearr_41769_41795 = state_41765__$1;
(statearr_41769_41795[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41766 === (1))){
var inst_41736 = cljs.core.vec.call(null,chs);
var inst_41737 = inst_41736;
var state_41765__$1 = (function (){var statearr_41770 = state_41765;
(statearr_41770[(10)] = inst_41737);

return statearr_41770;
})();
var statearr_41771_41796 = state_41765__$1;
(statearr_41771_41796[(2)] = null);

(statearr_41771_41796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41766 === (4))){
var inst_41737 = (state_41765[(10)]);
var state_41765__$1 = state_41765;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41765__$1,(7),inst_41737);
} else {
if((state_val_41766 === (6))){
var inst_41761 = (state_41765[(2)]);
var state_41765__$1 = state_41765;
var statearr_41772_41797 = state_41765__$1;
(statearr_41772_41797[(2)] = inst_41761);

(statearr_41772_41797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41766 === (3))){
var inst_41763 = (state_41765[(2)]);
var state_41765__$1 = state_41765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41765__$1,inst_41763);
} else {
if((state_val_41766 === (2))){
var inst_41737 = (state_41765[(10)]);
var inst_41739 = cljs.core.count.call(null,inst_41737);
var inst_41740 = (inst_41739 > (0));
var state_41765__$1 = state_41765;
if(cljs.core.truth_(inst_41740)){
var statearr_41774_41798 = state_41765__$1;
(statearr_41774_41798[(1)] = (4));

} else {
var statearr_41775_41799 = state_41765__$1;
(statearr_41775_41799[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41766 === (11))){
var inst_41737 = (state_41765[(10)]);
var inst_41754 = (state_41765[(2)]);
var tmp41773 = inst_41737;
var inst_41737__$1 = tmp41773;
var state_41765__$1 = (function (){var statearr_41776 = state_41765;
(statearr_41776[(10)] = inst_41737__$1);

(statearr_41776[(11)] = inst_41754);

return statearr_41776;
})();
var statearr_41777_41800 = state_41765__$1;
(statearr_41777_41800[(2)] = null);

(statearr_41777_41800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41766 === (9))){
var inst_41745 = (state_41765[(8)]);
var state_41765__$1 = state_41765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41765__$1,(11),out,inst_41745);
} else {
if((state_val_41766 === (5))){
var inst_41759 = cljs.core.async.close_BANG_.call(null,out);
var state_41765__$1 = state_41765;
var statearr_41778_41801 = state_41765__$1;
(statearr_41778_41801[(2)] = inst_41759);

(statearr_41778_41801[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41766 === (10))){
var inst_41757 = (state_41765[(2)]);
var state_41765__$1 = state_41765;
var statearr_41779_41802 = state_41765__$1;
(statearr_41779_41802[(2)] = inst_41757);

(statearr_41779_41802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41766 === (8))){
var inst_41737 = (state_41765[(10)]);
var inst_41746 = (state_41765[(9)]);
var inst_41744 = (state_41765[(7)]);
var inst_41745 = (state_41765[(8)]);
var inst_41749 = (function (){var cs = inst_41737;
var vec__41742 = inst_41744;
var v = inst_41745;
var c = inst_41746;
return ((function (cs,vec__41742,v,c,inst_41737,inst_41746,inst_41744,inst_41745,state_val_41766,c__37149__auto___41793,out){
return (function (p1__41732_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__41732_SHARP_);
});
;})(cs,vec__41742,v,c,inst_41737,inst_41746,inst_41744,inst_41745,state_val_41766,c__37149__auto___41793,out))
})();
var inst_41750 = cljs.core.filterv.call(null,inst_41749,inst_41737);
var inst_41737__$1 = inst_41750;
var state_41765__$1 = (function (){var statearr_41780 = state_41765;
(statearr_41780[(10)] = inst_41737__$1);

return statearr_41780;
})();
var statearr_41781_41803 = state_41765__$1;
(statearr_41781_41803[(2)] = null);

(statearr_41781_41803[(1)] = (2));


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
});})(c__37149__auto___41793,out))
;
return ((function (switch__37128__auto__,c__37149__auto___41793,out){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_41785 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41785[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_41785[(1)] = (1));

return statearr_41785;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_41765){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_41765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e41786){if((e41786 instanceof Object)){
var ex__37132__auto__ = e41786;
var statearr_41787_41804 = state_41765;
(statearr_41787_41804[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41805 = state_41765;
state_41765 = G__41805;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_41765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_41765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto___41793,out))
})();
var state__37151__auto__ = (function (){var statearr_41788 = f__37150__auto__.call(null);
(statearr_41788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto___41793);

return statearr_41788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto___41793,out))
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
var args41806 = [];
var len__35630__auto___41855 = arguments.length;
var i__35631__auto___41856 = (0);
while(true){
if((i__35631__auto___41856 < len__35630__auto___41855)){
args41806.push((arguments[i__35631__auto___41856]));

var G__41857 = (i__35631__auto___41856 + (1));
i__35631__auto___41856 = G__41857;
continue;
} else {
}
break;
}

var G__41808 = args41806.length;
switch (G__41808) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41806.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37149__auto___41859 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto___41859,out){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto___41859,out){
return (function (state_41832){
var state_val_41833 = (state_41832[(1)]);
if((state_val_41833 === (7))){
var inst_41814 = (state_41832[(7)]);
var inst_41814__$1 = (state_41832[(2)]);
var inst_41815 = (inst_41814__$1 == null);
var inst_41816 = cljs.core.not.call(null,inst_41815);
var state_41832__$1 = (function (){var statearr_41834 = state_41832;
(statearr_41834[(7)] = inst_41814__$1);

return statearr_41834;
})();
if(inst_41816){
var statearr_41835_41860 = state_41832__$1;
(statearr_41835_41860[(1)] = (8));

} else {
var statearr_41836_41861 = state_41832__$1;
(statearr_41836_41861[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41833 === (1))){
var inst_41809 = (0);
var state_41832__$1 = (function (){var statearr_41837 = state_41832;
(statearr_41837[(8)] = inst_41809);

return statearr_41837;
})();
var statearr_41838_41862 = state_41832__$1;
(statearr_41838_41862[(2)] = null);

(statearr_41838_41862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41833 === (4))){
var state_41832__$1 = state_41832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41832__$1,(7),ch);
} else {
if((state_val_41833 === (6))){
var inst_41827 = (state_41832[(2)]);
var state_41832__$1 = state_41832;
var statearr_41839_41863 = state_41832__$1;
(statearr_41839_41863[(2)] = inst_41827);

(statearr_41839_41863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41833 === (3))){
var inst_41829 = (state_41832[(2)]);
var inst_41830 = cljs.core.async.close_BANG_.call(null,out);
var state_41832__$1 = (function (){var statearr_41840 = state_41832;
(statearr_41840[(9)] = inst_41829);

return statearr_41840;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41832__$1,inst_41830);
} else {
if((state_val_41833 === (2))){
var inst_41809 = (state_41832[(8)]);
var inst_41811 = (inst_41809 < n);
var state_41832__$1 = state_41832;
if(cljs.core.truth_(inst_41811)){
var statearr_41841_41864 = state_41832__$1;
(statearr_41841_41864[(1)] = (4));

} else {
var statearr_41842_41865 = state_41832__$1;
(statearr_41842_41865[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41833 === (11))){
var inst_41809 = (state_41832[(8)]);
var inst_41819 = (state_41832[(2)]);
var inst_41820 = (inst_41809 + (1));
var inst_41809__$1 = inst_41820;
var state_41832__$1 = (function (){var statearr_41843 = state_41832;
(statearr_41843[(10)] = inst_41819);

(statearr_41843[(8)] = inst_41809__$1);

return statearr_41843;
})();
var statearr_41844_41866 = state_41832__$1;
(statearr_41844_41866[(2)] = null);

(statearr_41844_41866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41833 === (9))){
var state_41832__$1 = state_41832;
var statearr_41845_41867 = state_41832__$1;
(statearr_41845_41867[(2)] = null);

(statearr_41845_41867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41833 === (5))){
var state_41832__$1 = state_41832;
var statearr_41846_41868 = state_41832__$1;
(statearr_41846_41868[(2)] = null);

(statearr_41846_41868[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41833 === (10))){
var inst_41824 = (state_41832[(2)]);
var state_41832__$1 = state_41832;
var statearr_41847_41869 = state_41832__$1;
(statearr_41847_41869[(2)] = inst_41824);

(statearr_41847_41869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41833 === (8))){
var inst_41814 = (state_41832[(7)]);
var state_41832__$1 = state_41832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41832__$1,(11),out,inst_41814);
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
});})(c__37149__auto___41859,out))
;
return ((function (switch__37128__auto__,c__37149__auto___41859,out){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_41851 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41851[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_41851[(1)] = (1));

return statearr_41851;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_41832){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_41832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e41852){if((e41852 instanceof Object)){
var ex__37132__auto__ = e41852;
var statearr_41853_41870 = state_41832;
(statearr_41853_41870[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41871 = state_41832;
state_41832 = G__41871;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_41832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_41832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto___41859,out))
})();
var state__37151__auto__ = (function (){var statearr_41854 = f__37150__auto__.call(null);
(statearr_41854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto___41859);

return statearr_41854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto___41859,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41879 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41879 = (function (map_LT_,f,ch,meta41880){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta41880 = meta41880;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41879.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41881,meta41880__$1){
var self__ = this;
var _41881__$1 = this;
return (new cljs.core.async.t_cljs$core$async41879(self__.map_LT_,self__.f,self__.ch,meta41880__$1));
});

cljs.core.async.t_cljs$core$async41879.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41881){
var self__ = this;
var _41881__$1 = this;
return self__.meta41880;
});

cljs.core.async.t_cljs$core$async41879.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41879.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41879.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41879.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41879.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async41882 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41882 = (function (map_LT_,f,ch,meta41880,_,fn1,meta41883){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta41880 = meta41880;
this._ = _;
this.fn1 = fn1;
this.meta41883 = meta41883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_41884,meta41883__$1){
var self__ = this;
var _41884__$1 = this;
return (new cljs.core.async.t_cljs$core$async41882(self__.map_LT_,self__.f,self__.ch,self__.meta41880,self__._,self__.fn1,meta41883__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async41882.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_41884){
var self__ = this;
var _41884__$1 = this;
return self__.meta41883;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41882.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async41882.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41882.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async41882.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__41872_SHARP_){
return f1.call(null,(((p1__41872_SHARP_ == null))?null:self__.f.call(null,p1__41872_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async41882.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41880","meta41880",402751631,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async41879","cljs.core.async/t_cljs$core$async41879",-762854822,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta41883","meta41883",1330006527,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async41882.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41882";

cljs.core.async.t_cljs$core$async41882.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__35170__auto__,writer__35171__auto__,opt__35172__auto__){
return cljs.core._write.call(null,writer__35171__auto__,"cljs.core.async/t_cljs$core$async41882");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async41882 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41882(map_LT___$1,f__$1,ch__$1,meta41880__$1,___$2,fn1__$1,meta41883){
return (new cljs.core.async.t_cljs$core$async41882(map_LT___$1,f__$1,ch__$1,meta41880__$1,___$2,fn1__$1,meta41883));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async41882(self__.map_LT_,self__.f,self__.ch,self__.meta41880,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__34560__auto__ = ret;
if(cljs.core.truth_(and__34560__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__34560__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async41879.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41879.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async41879.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41880","meta41880",402751631,null)], null);
});

cljs.core.async.t_cljs$core$async41879.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41879.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41879";

cljs.core.async.t_cljs$core$async41879.cljs$lang$ctorPrWriter = (function (this__35170__auto__,writer__35171__auto__,opt__35172__auto__){
return cljs.core._write.call(null,writer__35171__auto__,"cljs.core.async/t_cljs$core$async41879");
});

cljs.core.async.__GT_t_cljs$core$async41879 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async41879(map_LT___$1,f__$1,ch__$1,meta41880){
return (new cljs.core.async.t_cljs$core$async41879(map_LT___$1,f__$1,ch__$1,meta41880));
});

}

return (new cljs.core.async.t_cljs$core$async41879(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async41888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41888 = (function (map_GT_,f,ch,meta41889){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta41889 = meta41889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41890,meta41889__$1){
var self__ = this;
var _41890__$1 = this;
return (new cljs.core.async.t_cljs$core$async41888(self__.map_GT_,self__.f,self__.ch,meta41889__$1));
});

cljs.core.async.t_cljs$core$async41888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41890){
var self__ = this;
var _41890__$1 = this;
return self__.meta41889;
});

cljs.core.async.t_cljs$core$async41888.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41888.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41888.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41888.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41888.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41888.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async41888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41889","meta41889",1375576927,null)], null);
});

cljs.core.async.t_cljs$core$async41888.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41888";

cljs.core.async.t_cljs$core$async41888.cljs$lang$ctorPrWriter = (function (this__35170__auto__,writer__35171__auto__,opt__35172__auto__){
return cljs.core._write.call(null,writer__35171__auto__,"cljs.core.async/t_cljs$core$async41888");
});

cljs.core.async.__GT_t_cljs$core$async41888 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async41888(map_GT___$1,f__$1,ch__$1,meta41889){
return (new cljs.core.async.t_cljs$core$async41888(map_GT___$1,f__$1,ch__$1,meta41889));
});

}

return (new cljs.core.async.t_cljs$core$async41888(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async41894 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41894 = (function (filter_GT_,p,ch,meta41895){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta41895 = meta41895;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async41894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41896,meta41895__$1){
var self__ = this;
var _41896__$1 = this;
return (new cljs.core.async.t_cljs$core$async41894(self__.filter_GT_,self__.p,self__.ch,meta41895__$1));
});

cljs.core.async.t_cljs$core$async41894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41896){
var self__ = this;
var _41896__$1 = this;
return self__.meta41895;
});

cljs.core.async.t_cljs$core$async41894.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async41894.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41894.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async41894.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async41894.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async41894.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async41894.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async41894.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta41895","meta41895",-2074759023,null)], null);
});

cljs.core.async.t_cljs$core$async41894.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async41894.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41894";

cljs.core.async.t_cljs$core$async41894.cljs$lang$ctorPrWriter = (function (this__35170__auto__,writer__35171__auto__,opt__35172__auto__){
return cljs.core._write.call(null,writer__35171__auto__,"cljs.core.async/t_cljs$core$async41894");
});

cljs.core.async.__GT_t_cljs$core$async41894 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async41894(filter_GT___$1,p__$1,ch__$1,meta41895){
return (new cljs.core.async.t_cljs$core$async41894(filter_GT___$1,p__$1,ch__$1,meta41895));
});

}

return (new cljs.core.async.t_cljs$core$async41894(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args41897 = [];
var len__35630__auto___41941 = arguments.length;
var i__35631__auto___41942 = (0);
while(true){
if((i__35631__auto___41942 < len__35630__auto___41941)){
args41897.push((arguments[i__35631__auto___41942]));

var G__41943 = (i__35631__auto___41942 + (1));
i__35631__auto___41942 = G__41943;
continue;
} else {
}
break;
}

var G__41899 = args41897.length;
switch (G__41899) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41897.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37149__auto___41945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto___41945,out){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto___41945,out){
return (function (state_41920){
var state_val_41921 = (state_41920[(1)]);
if((state_val_41921 === (7))){
var inst_41916 = (state_41920[(2)]);
var state_41920__$1 = state_41920;
var statearr_41922_41946 = state_41920__$1;
(statearr_41922_41946[(2)] = inst_41916);

(statearr_41922_41946[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (1))){
var state_41920__$1 = state_41920;
var statearr_41923_41947 = state_41920__$1;
(statearr_41923_41947[(2)] = null);

(statearr_41923_41947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (4))){
var inst_41902 = (state_41920[(7)]);
var inst_41902__$1 = (state_41920[(2)]);
var inst_41903 = (inst_41902__$1 == null);
var state_41920__$1 = (function (){var statearr_41924 = state_41920;
(statearr_41924[(7)] = inst_41902__$1);

return statearr_41924;
})();
if(cljs.core.truth_(inst_41903)){
var statearr_41925_41948 = state_41920__$1;
(statearr_41925_41948[(1)] = (5));

} else {
var statearr_41926_41949 = state_41920__$1;
(statearr_41926_41949[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (6))){
var inst_41902 = (state_41920[(7)]);
var inst_41907 = p.call(null,inst_41902);
var state_41920__$1 = state_41920;
if(cljs.core.truth_(inst_41907)){
var statearr_41927_41950 = state_41920__$1;
(statearr_41927_41950[(1)] = (8));

} else {
var statearr_41928_41951 = state_41920__$1;
(statearr_41928_41951[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (3))){
var inst_41918 = (state_41920[(2)]);
var state_41920__$1 = state_41920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41920__$1,inst_41918);
} else {
if((state_val_41921 === (2))){
var state_41920__$1 = state_41920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41920__$1,(4),ch);
} else {
if((state_val_41921 === (11))){
var inst_41910 = (state_41920[(2)]);
var state_41920__$1 = state_41920;
var statearr_41929_41952 = state_41920__$1;
(statearr_41929_41952[(2)] = inst_41910);

(statearr_41929_41952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (9))){
var state_41920__$1 = state_41920;
var statearr_41930_41953 = state_41920__$1;
(statearr_41930_41953[(2)] = null);

(statearr_41930_41953[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (5))){
var inst_41905 = cljs.core.async.close_BANG_.call(null,out);
var state_41920__$1 = state_41920;
var statearr_41931_41954 = state_41920__$1;
(statearr_41931_41954[(2)] = inst_41905);

(statearr_41931_41954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (10))){
var inst_41913 = (state_41920[(2)]);
var state_41920__$1 = (function (){var statearr_41932 = state_41920;
(statearr_41932[(8)] = inst_41913);

return statearr_41932;
})();
var statearr_41933_41955 = state_41920__$1;
(statearr_41933_41955[(2)] = null);

(statearr_41933_41955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41921 === (8))){
var inst_41902 = (state_41920[(7)]);
var state_41920__$1 = state_41920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41920__$1,(11),out,inst_41902);
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
});})(c__37149__auto___41945,out))
;
return ((function (switch__37128__auto__,c__37149__auto___41945,out){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_41937 = [null,null,null,null,null,null,null,null,null];
(statearr_41937[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_41937[(1)] = (1));

return statearr_41937;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_41920){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_41920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e41938){if((e41938 instanceof Object)){
var ex__37132__auto__ = e41938;
var statearr_41939_41956 = state_41920;
(statearr_41939_41956[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41957 = state_41920;
state_41920 = G__41957;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_41920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_41920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto___41945,out))
})();
var state__37151__auto__ = (function (){var statearr_41940 = f__37150__auto__.call(null);
(statearr_41940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto___41945);

return statearr_41940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto___41945,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args41958 = [];
var len__35630__auto___41961 = arguments.length;
var i__35631__auto___41962 = (0);
while(true){
if((i__35631__auto___41962 < len__35630__auto___41961)){
args41958.push((arguments[i__35631__auto___41962]));

var G__41963 = (i__35631__auto___41962 + (1));
i__35631__auto___41962 = G__41963;
continue;
} else {
}
break;
}

var G__41960 = args41958.length;
switch (G__41960) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41958.length)].join('')));

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
var c__37149__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto__){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto__){
return (function (state_42130){
var state_val_42131 = (state_42130[(1)]);
if((state_val_42131 === (7))){
var inst_42126 = (state_42130[(2)]);
var state_42130__$1 = state_42130;
var statearr_42132_42173 = state_42130__$1;
(statearr_42132_42173[(2)] = inst_42126);

(statearr_42132_42173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42131 === (20))){
var inst_42096 = (state_42130[(7)]);
var inst_42107 = (state_42130[(2)]);
var inst_42108 = cljs.core.next.call(null,inst_42096);
var inst_42082 = inst_42108;
var inst_42083 = null;
var inst_42084 = (0);
var inst_42085 = (0);
var state_42130__$1 = (function (){var statearr_42133 = state_42130;
(statearr_42133[(8)] = inst_42082);

(statearr_42133[(9)] = inst_42107);

(statearr_42133[(10)] = inst_42085);

(statearr_42133[(11)] = inst_42083);

(statearr_42133[(12)] = inst_42084);

return statearr_42133;
})();
var statearr_42134_42174 = state_42130__$1;
(statearr_42134_42174[(2)] = null);

(statearr_42134_42174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42131 === (1))){
var state_42130__$1 = state_42130;
var statearr_42135_42175 = state_42130__$1;
(statearr_42135_42175[(2)] = null);

(statearr_42135_42175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42131 === (4))){
var inst_42071 = (state_42130[(13)]);
var inst_42071__$1 = (state_42130[(2)]);
var inst_42072 = (inst_42071__$1 == null);
var state_42130__$1 = (function (){var statearr_42136 = state_42130;
(statearr_42136[(13)] = inst_42071__$1);

return statearr_42136;
})();
if(cljs.core.truth_(inst_42072)){
var statearr_42137_42176 = state_42130__$1;
(statearr_42137_42176[(1)] = (5));

} else {
var statearr_42138_42177 = state_42130__$1;
(statearr_42138_42177[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42131 === (15))){
var state_42130__$1 = state_42130;
var statearr_42142_42178 = state_42130__$1;
(statearr_42142_42178[(2)] = null);

(statearr_42142_42178[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42131 === (21))){
var state_42130__$1 = state_42130;
var statearr_42143_42179 = state_42130__$1;
(statearr_42143_42179[(2)] = null);

(statearr_42143_42179[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42131 === (13))){
var inst_42082 = (state_42130[(8)]);
var inst_42085 = (state_42130[(10)]);
var inst_42083 = (state_42130[(11)]);
var inst_42084 = (state_42130[(12)]);
var inst_42092 = (state_42130[(2)]);
var inst_42093 = (inst_42085 + (1));
var tmp42139 = inst_42082;
var tmp42140 = inst_42083;
var tmp42141 = inst_42084;
var inst_42082__$1 = tmp42139;
var inst_42083__$1 = tmp42140;
var inst_42084__$1 = tmp42141;
var inst_42085__$1 = inst_42093;
var state_42130__$1 = (function (){var statearr_42144 = state_42130;
(statearr_42144[(14)] = inst_42092);

(statearr_42144[(8)] = inst_42082__$1);

(statearr_42144[(10)] = inst_42085__$1);

(statearr_42144[(11)] = inst_42083__$1);

(statearr_42144[(12)] = inst_42084__$1);

return statearr_42144;
})();
var statearr_42145_42180 = state_42130__$1;
(statearr_42145_42180[(2)] = null);

(statearr_42145_42180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42131 === (22))){
var state_42130__$1 = state_42130;
var statearr_42146_42181 = state_42130__$1;
(statearr_42146_42181[(2)] = null);

(statearr_42146_42181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42131 === (6))){
var inst_42071 = (state_42130[(13)]);
var inst_42080 = f.call(null,inst_42071);
var inst_42081 = cljs.core.seq.call(null,inst_42080);
var inst_42082 = inst_42081;
var inst_42083 = null;
var inst_42084 = (0);
var inst_42085 = (0);
var state_42130__$1 = (function (){var statearr_42147 = state_42130;
(statearr_42147[(8)] = inst_42082);

(statearr_42147[(10)] = inst_42085);

(statearr_42147[(11)] = inst_42083);

(statearr_42147[(12)] = inst_42084);

return statearr_42147;
})();
var statearr_42148_42182 = state_42130__$1;
(statearr_42148_42182[(2)] = null);

(statearr_42148_42182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42131 === (17))){
var inst_42096 = (state_42130[(7)]);
var inst_42100 = cljs.core.chunk_first.call(null,inst_42096);
var inst_42101 = cljs.core.chunk_rest.call(null,inst_42096);
var inst_42102 = cljs.core.count.call(null,inst_42100);
var inst_42082 = inst_42101;
var inst_42083 = inst_42100;
var inst_42084 = inst_42102;
var inst_42085 = (0);
var state_42130__$1 = (function (){var statearr_42149 = state_42130;
(statearr_42149[(8)] = inst_42082);

(statearr_42149[(10)] = inst_42085);

(statearr_42149[(11)] = inst_42083);

(statearr_42149[(12)] = inst_42084);

return statearr_42149;
})();
var statearr_42150_42183 = state_42130__$1;
(statearr_42150_42183[(2)] = null);

(statearr_42150_42183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42131 === (3))){
var inst_42128 = (state_42130[(2)]);
var state_42130__$1 = state_42130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42130__$1,inst_42128);
} else {
if((state_val_42131 === (12))){
var inst_42116 = (state_42130[(2)]);
var state_42130__$1 = state_42130;
var statearr_42151_42184 = state_42130__$1;
(statearr_42151_42184[(2)] = inst_42116);

(statearr_42151_42184[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42131 === (2))){
var state_42130__$1 = state_42130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42130__$1,(4),in$);
} else {
if((state_val_42131 === (23))){
var inst_42124 = (state_42130[(2)]);
var state_42130__$1 = state_42130;
var statearr_42152_42185 = state_42130__$1;
(statearr_42152_42185[(2)] = inst_42124);

(statearr_42152_42185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42131 === (19))){
var inst_42111 = (state_42130[(2)]);
var state_42130__$1 = state_42130;
var statearr_42153_42186 = state_42130__$1;
(statearr_42153_42186[(2)] = inst_42111);

(statearr_42153_42186[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42131 === (11))){
var inst_42082 = (state_42130[(8)]);
var inst_42096 = (state_42130[(7)]);
var inst_42096__$1 = cljs.core.seq.call(null,inst_42082);
var state_42130__$1 = (function (){var statearr_42154 = state_42130;
(statearr_42154[(7)] = inst_42096__$1);

return statearr_42154;
})();
if(inst_42096__$1){
var statearr_42155_42187 = state_42130__$1;
(statearr_42155_42187[(1)] = (14));

} else {
var statearr_42156_42188 = state_42130__$1;
(statearr_42156_42188[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42131 === (9))){
var inst_42118 = (state_42130[(2)]);
var inst_42119 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_42130__$1 = (function (){var statearr_42157 = state_42130;
(statearr_42157[(15)] = inst_42118);

return statearr_42157;
})();
if(cljs.core.truth_(inst_42119)){
var statearr_42158_42189 = state_42130__$1;
(statearr_42158_42189[(1)] = (21));

} else {
var statearr_42159_42190 = state_42130__$1;
(statearr_42159_42190[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42131 === (5))){
var inst_42074 = cljs.core.async.close_BANG_.call(null,out);
var state_42130__$1 = state_42130;
var statearr_42160_42191 = state_42130__$1;
(statearr_42160_42191[(2)] = inst_42074);

(statearr_42160_42191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42131 === (14))){
var inst_42096 = (state_42130[(7)]);
var inst_42098 = cljs.core.chunked_seq_QMARK_.call(null,inst_42096);
var state_42130__$1 = state_42130;
if(inst_42098){
var statearr_42161_42192 = state_42130__$1;
(statearr_42161_42192[(1)] = (17));

} else {
var statearr_42162_42193 = state_42130__$1;
(statearr_42162_42193[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42131 === (16))){
var inst_42114 = (state_42130[(2)]);
var state_42130__$1 = state_42130;
var statearr_42163_42194 = state_42130__$1;
(statearr_42163_42194[(2)] = inst_42114);

(statearr_42163_42194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42131 === (10))){
var inst_42085 = (state_42130[(10)]);
var inst_42083 = (state_42130[(11)]);
var inst_42090 = cljs.core._nth.call(null,inst_42083,inst_42085);
var state_42130__$1 = state_42130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42130__$1,(13),out,inst_42090);
} else {
if((state_val_42131 === (18))){
var inst_42096 = (state_42130[(7)]);
var inst_42105 = cljs.core.first.call(null,inst_42096);
var state_42130__$1 = state_42130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42130__$1,(20),out,inst_42105);
} else {
if((state_val_42131 === (8))){
var inst_42085 = (state_42130[(10)]);
var inst_42084 = (state_42130[(12)]);
var inst_42087 = (inst_42085 < inst_42084);
var inst_42088 = inst_42087;
var state_42130__$1 = state_42130;
if(cljs.core.truth_(inst_42088)){
var statearr_42164_42195 = state_42130__$1;
(statearr_42164_42195[(1)] = (10));

} else {
var statearr_42165_42196 = state_42130__$1;
(statearr_42165_42196[(1)] = (11));

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
});})(c__37149__auto__))
;
return ((function (switch__37128__auto__,c__37149__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__37129__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__37129__auto____0 = (function (){
var statearr_42169 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42169[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__37129__auto__);

(statearr_42169[(1)] = (1));

return statearr_42169;
});
var cljs$core$async$mapcat_STAR__$_state_machine__37129__auto____1 = (function (state_42130){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_42130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e42170){if((e42170 instanceof Object)){
var ex__37132__auto__ = e42170;
var statearr_42171_42197 = state_42130;
(statearr_42171_42197[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42170;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42198 = state_42130;
state_42130 = G__42198;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__37129__auto__ = function(state_42130){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__37129__auto____1.call(this,state_42130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__37129__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__37129__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto__))
})();
var state__37151__auto__ = (function (){var statearr_42172 = f__37150__auto__.call(null);
(statearr_42172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto__);

return statearr_42172;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto__))
);

return c__37149__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args42199 = [];
var len__35630__auto___42202 = arguments.length;
var i__35631__auto___42203 = (0);
while(true){
if((i__35631__auto___42203 < len__35630__auto___42202)){
args42199.push((arguments[i__35631__auto___42203]));

var G__42204 = (i__35631__auto___42203 + (1));
i__35631__auto___42203 = G__42204;
continue;
} else {
}
break;
}

var G__42201 = args42199.length;
switch (G__42201) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42199.length)].join('')));

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
var args42206 = [];
var len__35630__auto___42209 = arguments.length;
var i__35631__auto___42210 = (0);
while(true){
if((i__35631__auto___42210 < len__35630__auto___42209)){
args42206.push((arguments[i__35631__auto___42210]));

var G__42211 = (i__35631__auto___42210 + (1));
i__35631__auto___42210 = G__42211;
continue;
} else {
}
break;
}

var G__42208 = args42206.length;
switch (G__42208) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42206.length)].join('')));

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
var args42213 = [];
var len__35630__auto___42264 = arguments.length;
var i__35631__auto___42265 = (0);
while(true){
if((i__35631__auto___42265 < len__35630__auto___42264)){
args42213.push((arguments[i__35631__auto___42265]));

var G__42266 = (i__35631__auto___42265 + (1));
i__35631__auto___42265 = G__42266;
continue;
} else {
}
break;
}

var G__42215 = args42213.length;
switch (G__42215) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42213.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37149__auto___42268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto___42268,out){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto___42268,out){
return (function (state_42239){
var state_val_42240 = (state_42239[(1)]);
if((state_val_42240 === (7))){
var inst_42234 = (state_42239[(2)]);
var state_42239__$1 = state_42239;
var statearr_42241_42269 = state_42239__$1;
(statearr_42241_42269[(2)] = inst_42234);

(statearr_42241_42269[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42240 === (1))){
var inst_42216 = null;
var state_42239__$1 = (function (){var statearr_42242 = state_42239;
(statearr_42242[(7)] = inst_42216);

return statearr_42242;
})();
var statearr_42243_42270 = state_42239__$1;
(statearr_42243_42270[(2)] = null);

(statearr_42243_42270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42240 === (4))){
var inst_42219 = (state_42239[(8)]);
var inst_42219__$1 = (state_42239[(2)]);
var inst_42220 = (inst_42219__$1 == null);
var inst_42221 = cljs.core.not.call(null,inst_42220);
var state_42239__$1 = (function (){var statearr_42244 = state_42239;
(statearr_42244[(8)] = inst_42219__$1);

return statearr_42244;
})();
if(inst_42221){
var statearr_42245_42271 = state_42239__$1;
(statearr_42245_42271[(1)] = (5));

} else {
var statearr_42246_42272 = state_42239__$1;
(statearr_42246_42272[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42240 === (6))){
var state_42239__$1 = state_42239;
var statearr_42247_42273 = state_42239__$1;
(statearr_42247_42273[(2)] = null);

(statearr_42247_42273[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42240 === (3))){
var inst_42236 = (state_42239[(2)]);
var inst_42237 = cljs.core.async.close_BANG_.call(null,out);
var state_42239__$1 = (function (){var statearr_42248 = state_42239;
(statearr_42248[(9)] = inst_42236);

return statearr_42248;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42239__$1,inst_42237);
} else {
if((state_val_42240 === (2))){
var state_42239__$1 = state_42239;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42239__$1,(4),ch);
} else {
if((state_val_42240 === (11))){
var inst_42219 = (state_42239[(8)]);
var inst_42228 = (state_42239[(2)]);
var inst_42216 = inst_42219;
var state_42239__$1 = (function (){var statearr_42249 = state_42239;
(statearr_42249[(7)] = inst_42216);

(statearr_42249[(10)] = inst_42228);

return statearr_42249;
})();
var statearr_42250_42274 = state_42239__$1;
(statearr_42250_42274[(2)] = null);

(statearr_42250_42274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42240 === (9))){
var inst_42219 = (state_42239[(8)]);
var state_42239__$1 = state_42239;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42239__$1,(11),out,inst_42219);
} else {
if((state_val_42240 === (5))){
var inst_42216 = (state_42239[(7)]);
var inst_42219 = (state_42239[(8)]);
var inst_42223 = cljs.core._EQ_.call(null,inst_42219,inst_42216);
var state_42239__$1 = state_42239;
if(inst_42223){
var statearr_42252_42275 = state_42239__$1;
(statearr_42252_42275[(1)] = (8));

} else {
var statearr_42253_42276 = state_42239__$1;
(statearr_42253_42276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42240 === (10))){
var inst_42231 = (state_42239[(2)]);
var state_42239__$1 = state_42239;
var statearr_42254_42277 = state_42239__$1;
(statearr_42254_42277[(2)] = inst_42231);

(statearr_42254_42277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42240 === (8))){
var inst_42216 = (state_42239[(7)]);
var tmp42251 = inst_42216;
var inst_42216__$1 = tmp42251;
var state_42239__$1 = (function (){var statearr_42255 = state_42239;
(statearr_42255[(7)] = inst_42216__$1);

return statearr_42255;
})();
var statearr_42256_42278 = state_42239__$1;
(statearr_42256_42278[(2)] = null);

(statearr_42256_42278[(1)] = (2));


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
});})(c__37149__auto___42268,out))
;
return ((function (switch__37128__auto__,c__37149__auto___42268,out){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_42260 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42260[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_42260[(1)] = (1));

return statearr_42260;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_42239){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_42239);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e42261){if((e42261 instanceof Object)){
var ex__37132__auto__ = e42261;
var statearr_42262_42279 = state_42239;
(statearr_42262_42279[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42239);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42280 = state_42239;
state_42239 = G__42280;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_42239){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_42239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto___42268,out))
})();
var state__37151__auto__ = (function (){var statearr_42263 = f__37150__auto__.call(null);
(statearr_42263[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto___42268);

return statearr_42263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto___42268,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args42281 = [];
var len__35630__auto___42351 = arguments.length;
var i__35631__auto___42352 = (0);
while(true){
if((i__35631__auto___42352 < len__35630__auto___42351)){
args42281.push((arguments[i__35631__auto___42352]));

var G__42353 = (i__35631__auto___42352 + (1));
i__35631__auto___42352 = G__42353;
continue;
} else {
}
break;
}

var G__42283 = args42281.length;
switch (G__42283) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42281.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37149__auto___42355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto___42355,out){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto___42355,out){
return (function (state_42321){
var state_val_42322 = (state_42321[(1)]);
if((state_val_42322 === (7))){
var inst_42317 = (state_42321[(2)]);
var state_42321__$1 = state_42321;
var statearr_42323_42356 = state_42321__$1;
(statearr_42323_42356[(2)] = inst_42317);

(statearr_42323_42356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42322 === (1))){
var inst_42284 = (new Array(n));
var inst_42285 = inst_42284;
var inst_42286 = (0);
var state_42321__$1 = (function (){var statearr_42324 = state_42321;
(statearr_42324[(7)] = inst_42286);

(statearr_42324[(8)] = inst_42285);

return statearr_42324;
})();
var statearr_42325_42357 = state_42321__$1;
(statearr_42325_42357[(2)] = null);

(statearr_42325_42357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42322 === (4))){
var inst_42289 = (state_42321[(9)]);
var inst_42289__$1 = (state_42321[(2)]);
var inst_42290 = (inst_42289__$1 == null);
var inst_42291 = cljs.core.not.call(null,inst_42290);
var state_42321__$1 = (function (){var statearr_42326 = state_42321;
(statearr_42326[(9)] = inst_42289__$1);

return statearr_42326;
})();
if(inst_42291){
var statearr_42327_42358 = state_42321__$1;
(statearr_42327_42358[(1)] = (5));

} else {
var statearr_42328_42359 = state_42321__$1;
(statearr_42328_42359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42322 === (15))){
var inst_42311 = (state_42321[(2)]);
var state_42321__$1 = state_42321;
var statearr_42329_42360 = state_42321__$1;
(statearr_42329_42360[(2)] = inst_42311);

(statearr_42329_42360[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42322 === (13))){
var state_42321__$1 = state_42321;
var statearr_42330_42361 = state_42321__$1;
(statearr_42330_42361[(2)] = null);

(statearr_42330_42361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42322 === (6))){
var inst_42286 = (state_42321[(7)]);
var inst_42307 = (inst_42286 > (0));
var state_42321__$1 = state_42321;
if(cljs.core.truth_(inst_42307)){
var statearr_42331_42362 = state_42321__$1;
(statearr_42331_42362[(1)] = (12));

} else {
var statearr_42332_42363 = state_42321__$1;
(statearr_42332_42363[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42322 === (3))){
var inst_42319 = (state_42321[(2)]);
var state_42321__$1 = state_42321;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42321__$1,inst_42319);
} else {
if((state_val_42322 === (12))){
var inst_42285 = (state_42321[(8)]);
var inst_42309 = cljs.core.vec.call(null,inst_42285);
var state_42321__$1 = state_42321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42321__$1,(15),out,inst_42309);
} else {
if((state_val_42322 === (2))){
var state_42321__$1 = state_42321;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42321__$1,(4),ch);
} else {
if((state_val_42322 === (11))){
var inst_42301 = (state_42321[(2)]);
var inst_42302 = (new Array(n));
var inst_42285 = inst_42302;
var inst_42286 = (0);
var state_42321__$1 = (function (){var statearr_42333 = state_42321;
(statearr_42333[(10)] = inst_42301);

(statearr_42333[(7)] = inst_42286);

(statearr_42333[(8)] = inst_42285);

return statearr_42333;
})();
var statearr_42334_42364 = state_42321__$1;
(statearr_42334_42364[(2)] = null);

(statearr_42334_42364[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42322 === (9))){
var inst_42285 = (state_42321[(8)]);
var inst_42299 = cljs.core.vec.call(null,inst_42285);
var state_42321__$1 = state_42321;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42321__$1,(11),out,inst_42299);
} else {
if((state_val_42322 === (5))){
var inst_42289 = (state_42321[(9)]);
var inst_42286 = (state_42321[(7)]);
var inst_42294 = (state_42321[(11)]);
var inst_42285 = (state_42321[(8)]);
var inst_42293 = (inst_42285[inst_42286] = inst_42289);
var inst_42294__$1 = (inst_42286 + (1));
var inst_42295 = (inst_42294__$1 < n);
var state_42321__$1 = (function (){var statearr_42335 = state_42321;
(statearr_42335[(11)] = inst_42294__$1);

(statearr_42335[(12)] = inst_42293);

return statearr_42335;
})();
if(cljs.core.truth_(inst_42295)){
var statearr_42336_42365 = state_42321__$1;
(statearr_42336_42365[(1)] = (8));

} else {
var statearr_42337_42366 = state_42321__$1;
(statearr_42337_42366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42322 === (14))){
var inst_42314 = (state_42321[(2)]);
var inst_42315 = cljs.core.async.close_BANG_.call(null,out);
var state_42321__$1 = (function (){var statearr_42339 = state_42321;
(statearr_42339[(13)] = inst_42314);

return statearr_42339;
})();
var statearr_42340_42367 = state_42321__$1;
(statearr_42340_42367[(2)] = inst_42315);

(statearr_42340_42367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42322 === (10))){
var inst_42305 = (state_42321[(2)]);
var state_42321__$1 = state_42321;
var statearr_42341_42368 = state_42321__$1;
(statearr_42341_42368[(2)] = inst_42305);

(statearr_42341_42368[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42322 === (8))){
var inst_42294 = (state_42321[(11)]);
var inst_42285 = (state_42321[(8)]);
var tmp42338 = inst_42285;
var inst_42285__$1 = tmp42338;
var inst_42286 = inst_42294;
var state_42321__$1 = (function (){var statearr_42342 = state_42321;
(statearr_42342[(7)] = inst_42286);

(statearr_42342[(8)] = inst_42285__$1);

return statearr_42342;
})();
var statearr_42343_42369 = state_42321__$1;
(statearr_42343_42369[(2)] = null);

(statearr_42343_42369[(1)] = (2));


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
});})(c__37149__auto___42355,out))
;
return ((function (switch__37128__auto__,c__37149__auto___42355,out){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_42347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42347[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_42347[(1)] = (1));

return statearr_42347;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_42321){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_42321);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e42348){if((e42348 instanceof Object)){
var ex__37132__auto__ = e42348;
var statearr_42349_42370 = state_42321;
(statearr_42349_42370[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42321);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42348;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42371 = state_42321;
state_42321 = G__42371;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_42321){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_42321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto___42355,out))
})();
var state__37151__auto__ = (function (){var statearr_42350 = f__37150__auto__.call(null);
(statearr_42350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto___42355);

return statearr_42350;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto___42355,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args42372 = [];
var len__35630__auto___42446 = arguments.length;
var i__35631__auto___42447 = (0);
while(true){
if((i__35631__auto___42447 < len__35630__auto___42446)){
args42372.push((arguments[i__35631__auto___42447]));

var G__42448 = (i__35631__auto___42447 + (1));
i__35631__auto___42447 = G__42448;
continue;
} else {
}
break;
}

var G__42374 = args42372.length;
switch (G__42374) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42372.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__37149__auto___42450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__37149__auto___42450,out){
return (function (){
var f__37150__auto__ = (function (){var switch__37128__auto__ = ((function (c__37149__auto___42450,out){
return (function (state_42416){
var state_val_42417 = (state_42416[(1)]);
if((state_val_42417 === (7))){
var inst_42412 = (state_42416[(2)]);
var state_42416__$1 = state_42416;
var statearr_42418_42451 = state_42416__$1;
(statearr_42418_42451[(2)] = inst_42412);

(statearr_42418_42451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42417 === (1))){
var inst_42375 = [];
var inst_42376 = inst_42375;
var inst_42377 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_42416__$1 = (function (){var statearr_42419 = state_42416;
(statearr_42419[(7)] = inst_42376);

(statearr_42419[(8)] = inst_42377);

return statearr_42419;
})();
var statearr_42420_42452 = state_42416__$1;
(statearr_42420_42452[(2)] = null);

(statearr_42420_42452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42417 === (4))){
var inst_42380 = (state_42416[(9)]);
var inst_42380__$1 = (state_42416[(2)]);
var inst_42381 = (inst_42380__$1 == null);
var inst_42382 = cljs.core.not.call(null,inst_42381);
var state_42416__$1 = (function (){var statearr_42421 = state_42416;
(statearr_42421[(9)] = inst_42380__$1);

return statearr_42421;
})();
if(inst_42382){
var statearr_42422_42453 = state_42416__$1;
(statearr_42422_42453[(1)] = (5));

} else {
var statearr_42423_42454 = state_42416__$1;
(statearr_42423_42454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42417 === (15))){
var inst_42406 = (state_42416[(2)]);
var state_42416__$1 = state_42416;
var statearr_42424_42455 = state_42416__$1;
(statearr_42424_42455[(2)] = inst_42406);

(statearr_42424_42455[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42417 === (13))){
var state_42416__$1 = state_42416;
var statearr_42425_42456 = state_42416__$1;
(statearr_42425_42456[(2)] = null);

(statearr_42425_42456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42417 === (6))){
var inst_42376 = (state_42416[(7)]);
var inst_42401 = inst_42376.length;
var inst_42402 = (inst_42401 > (0));
var state_42416__$1 = state_42416;
if(cljs.core.truth_(inst_42402)){
var statearr_42426_42457 = state_42416__$1;
(statearr_42426_42457[(1)] = (12));

} else {
var statearr_42427_42458 = state_42416__$1;
(statearr_42427_42458[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42417 === (3))){
var inst_42414 = (state_42416[(2)]);
var state_42416__$1 = state_42416;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42416__$1,inst_42414);
} else {
if((state_val_42417 === (12))){
var inst_42376 = (state_42416[(7)]);
var inst_42404 = cljs.core.vec.call(null,inst_42376);
var state_42416__$1 = state_42416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42416__$1,(15),out,inst_42404);
} else {
if((state_val_42417 === (2))){
var state_42416__$1 = state_42416;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42416__$1,(4),ch);
} else {
if((state_val_42417 === (11))){
var inst_42384 = (state_42416[(10)]);
var inst_42380 = (state_42416[(9)]);
var inst_42394 = (state_42416[(2)]);
var inst_42395 = [];
var inst_42396 = inst_42395.push(inst_42380);
var inst_42376 = inst_42395;
var inst_42377 = inst_42384;
var state_42416__$1 = (function (){var statearr_42428 = state_42416;
(statearr_42428[(7)] = inst_42376);

(statearr_42428[(11)] = inst_42394);

(statearr_42428[(12)] = inst_42396);

(statearr_42428[(8)] = inst_42377);

return statearr_42428;
})();
var statearr_42429_42459 = state_42416__$1;
(statearr_42429_42459[(2)] = null);

(statearr_42429_42459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42417 === (9))){
var inst_42376 = (state_42416[(7)]);
var inst_42392 = cljs.core.vec.call(null,inst_42376);
var state_42416__$1 = state_42416;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42416__$1,(11),out,inst_42392);
} else {
if((state_val_42417 === (5))){
var inst_42384 = (state_42416[(10)]);
var inst_42380 = (state_42416[(9)]);
var inst_42377 = (state_42416[(8)]);
var inst_42384__$1 = f.call(null,inst_42380);
var inst_42385 = cljs.core._EQ_.call(null,inst_42384__$1,inst_42377);
var inst_42386 = cljs.core.keyword_identical_QMARK_.call(null,inst_42377,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_42387 = (inst_42385) || (inst_42386);
var state_42416__$1 = (function (){var statearr_42430 = state_42416;
(statearr_42430[(10)] = inst_42384__$1);

return statearr_42430;
})();
if(cljs.core.truth_(inst_42387)){
var statearr_42431_42460 = state_42416__$1;
(statearr_42431_42460[(1)] = (8));

} else {
var statearr_42432_42461 = state_42416__$1;
(statearr_42432_42461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42417 === (14))){
var inst_42409 = (state_42416[(2)]);
var inst_42410 = cljs.core.async.close_BANG_.call(null,out);
var state_42416__$1 = (function (){var statearr_42434 = state_42416;
(statearr_42434[(13)] = inst_42409);

return statearr_42434;
})();
var statearr_42435_42462 = state_42416__$1;
(statearr_42435_42462[(2)] = inst_42410);

(statearr_42435_42462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42417 === (10))){
var inst_42399 = (state_42416[(2)]);
var state_42416__$1 = state_42416;
var statearr_42436_42463 = state_42416__$1;
(statearr_42436_42463[(2)] = inst_42399);

(statearr_42436_42463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42417 === (8))){
var inst_42376 = (state_42416[(7)]);
var inst_42384 = (state_42416[(10)]);
var inst_42380 = (state_42416[(9)]);
var inst_42389 = inst_42376.push(inst_42380);
var tmp42433 = inst_42376;
var inst_42376__$1 = tmp42433;
var inst_42377 = inst_42384;
var state_42416__$1 = (function (){var statearr_42437 = state_42416;
(statearr_42437[(7)] = inst_42376__$1);

(statearr_42437[(14)] = inst_42389);

(statearr_42437[(8)] = inst_42377);

return statearr_42437;
})();
var statearr_42438_42464 = state_42416__$1;
(statearr_42438_42464[(2)] = null);

(statearr_42438_42464[(1)] = (2));


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
});})(c__37149__auto___42450,out))
;
return ((function (switch__37128__auto__,c__37149__auto___42450,out){
return (function() {
var cljs$core$async$state_machine__37129__auto__ = null;
var cljs$core$async$state_machine__37129__auto____0 = (function (){
var statearr_42442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42442[(0)] = cljs$core$async$state_machine__37129__auto__);

(statearr_42442[(1)] = (1));

return statearr_42442;
});
var cljs$core$async$state_machine__37129__auto____1 = (function (state_42416){
while(true){
var ret_value__37130__auto__ = (function (){try{while(true){
var result__37131__auto__ = switch__37128__auto__.call(null,state_42416);
if(cljs.core.keyword_identical_QMARK_.call(null,result__37131__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__37131__auto__;
}
break;
}
}catch (e42443){if((e42443 instanceof Object)){
var ex__37132__auto__ = e42443;
var statearr_42444_42465 = state_42416;
(statearr_42444_42465[(5)] = ex__37132__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42416);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42443;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__37130__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42466 = state_42416;
state_42416 = G__42466;
continue;
} else {
return ret_value__37130__auto__;
}
break;
}
});
cljs$core$async$state_machine__37129__auto__ = function(state_42416){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__37129__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__37129__auto____1.call(this,state_42416);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__37129__auto____0;
cljs$core$async$state_machine__37129__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__37129__auto____1;
return cljs$core$async$state_machine__37129__auto__;
})()
;})(switch__37128__auto__,c__37149__auto___42450,out))
})();
var state__37151__auto__ = (function (){var statearr_42445 = f__37150__auto__.call(null);
(statearr_42445[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__37149__auto___42450);

return statearr_42445;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__37151__auto__);
});})(c__37149__auto___42450,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map