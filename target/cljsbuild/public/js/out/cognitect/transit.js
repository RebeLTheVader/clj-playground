// Compiled by ClojureScript 1.7.228 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__37801_37805 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__37802_37806 = null;
var count__37803_37807 = (0);
var i__37804_37808 = (0);
while(true){
if((i__37804_37808 < count__37803_37807)){
var k_37809 = cljs.core._nth.call(null,chunk__37802_37806,i__37804_37808);
var v_37810 = (b[k_37809]);
(a[k_37809] = v_37810);

var G__37811 = seq__37801_37805;
var G__37812 = chunk__37802_37806;
var G__37813 = count__37803_37807;
var G__37814 = (i__37804_37808 + (1));
seq__37801_37805 = G__37811;
chunk__37802_37806 = G__37812;
count__37803_37807 = G__37813;
i__37804_37808 = G__37814;
continue;
} else {
var temp__4657__auto___37815 = cljs.core.seq.call(null,seq__37801_37805);
if(temp__4657__auto___37815){
var seq__37801_37816__$1 = temp__4657__auto___37815;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37801_37816__$1)){
var c__35375__auto___37817 = cljs.core.chunk_first.call(null,seq__37801_37816__$1);
var G__37818 = cljs.core.chunk_rest.call(null,seq__37801_37816__$1);
var G__37819 = c__35375__auto___37817;
var G__37820 = cljs.core.count.call(null,c__35375__auto___37817);
var G__37821 = (0);
seq__37801_37805 = G__37818;
chunk__37802_37806 = G__37819;
count__37803_37807 = G__37820;
i__37804_37808 = G__37821;
continue;
} else {
var k_37822 = cljs.core.first.call(null,seq__37801_37816__$1);
var v_37823 = (b[k_37822]);
(a[k_37822] = v_37823);

var G__37824 = cljs.core.next.call(null,seq__37801_37816__$1);
var G__37825 = null;
var G__37826 = (0);
var G__37827 = (0);
seq__37801_37805 = G__37824;
chunk__37802_37806 = G__37825;
count__37803_37807 = G__37826;
i__37804_37808 = G__37827;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__35170__auto__,writer__35171__auto__,opt__35172__auto__){
return cljs.core._write.call(null,writer__35171__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__35170__auto__,writer__35171__auto__,opt__35172__auto__){
return cljs.core._write.call(null,writer__35171__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args37828 = [];
var len__35630__auto___37831 = arguments.length;
var i__35631__auto___37832 = (0);
while(true){
if((i__35631__auto___37832 < len__35630__auto___37831)){
args37828.push((arguments[i__35631__auto___37832]));

var G__37833 = (i__35631__auto___37832 + (1));
i__35631__auto___37832 = G__37833;
continue;
} else {
}
break;
}

var G__37830 = args37828.length;
switch (G__37830) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37828.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__37835 = (i + (2));
var G__37836 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__37835;
ret = G__37836;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__35170__auto__,writer__35171__auto__,opt__35172__auto__){
return cljs.core._write.call(null,writer__35171__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__35170__auto__,writer__35171__auto__,opt__35172__auto__){
return cljs.core._write.call(null,writer__35171__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__37837_37841 = cljs.core.seq.call(null,v);
var chunk__37838_37842 = null;
var count__37839_37843 = (0);
var i__37840_37844 = (0);
while(true){
if((i__37840_37844 < count__37839_37843)){
var x_37845 = cljs.core._nth.call(null,chunk__37838_37842,i__37840_37844);
ret.push(x_37845);

var G__37846 = seq__37837_37841;
var G__37847 = chunk__37838_37842;
var G__37848 = count__37839_37843;
var G__37849 = (i__37840_37844 + (1));
seq__37837_37841 = G__37846;
chunk__37838_37842 = G__37847;
count__37839_37843 = G__37848;
i__37840_37844 = G__37849;
continue;
} else {
var temp__4657__auto___37850 = cljs.core.seq.call(null,seq__37837_37841);
if(temp__4657__auto___37850){
var seq__37837_37851__$1 = temp__4657__auto___37850;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37837_37851__$1)){
var c__35375__auto___37852 = cljs.core.chunk_first.call(null,seq__37837_37851__$1);
var G__37853 = cljs.core.chunk_rest.call(null,seq__37837_37851__$1);
var G__37854 = c__35375__auto___37852;
var G__37855 = cljs.core.count.call(null,c__35375__auto___37852);
var G__37856 = (0);
seq__37837_37841 = G__37853;
chunk__37838_37842 = G__37854;
count__37839_37843 = G__37855;
i__37840_37844 = G__37856;
continue;
} else {
var x_37857 = cljs.core.first.call(null,seq__37837_37851__$1);
ret.push(x_37857);

var G__37858 = cljs.core.next.call(null,seq__37837_37851__$1);
var G__37859 = null;
var G__37860 = (0);
var G__37861 = (0);
seq__37837_37841 = G__37858;
chunk__37838_37842 = G__37859;
count__37839_37843 = G__37860;
i__37840_37844 = G__37861;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__35170__auto__,writer__35171__auto__,opt__35172__auto__){
return cljs.core._write.call(null,writer__35171__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__35170__auto__,writer__35171__auto__,opt__35172__auto__){
return cljs.core._write.call(null,writer__35171__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__37862_37866 = cljs.core.seq.call(null,v);
var chunk__37863_37867 = null;
var count__37864_37868 = (0);
var i__37865_37869 = (0);
while(true){
if((i__37865_37869 < count__37864_37868)){
var x_37870 = cljs.core._nth.call(null,chunk__37863_37867,i__37865_37869);
ret.push(x_37870);

var G__37871 = seq__37862_37866;
var G__37872 = chunk__37863_37867;
var G__37873 = count__37864_37868;
var G__37874 = (i__37865_37869 + (1));
seq__37862_37866 = G__37871;
chunk__37863_37867 = G__37872;
count__37864_37868 = G__37873;
i__37865_37869 = G__37874;
continue;
} else {
var temp__4657__auto___37875 = cljs.core.seq.call(null,seq__37862_37866);
if(temp__4657__auto___37875){
var seq__37862_37876__$1 = temp__4657__auto___37875;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37862_37876__$1)){
var c__35375__auto___37877 = cljs.core.chunk_first.call(null,seq__37862_37876__$1);
var G__37878 = cljs.core.chunk_rest.call(null,seq__37862_37876__$1);
var G__37879 = c__35375__auto___37877;
var G__37880 = cljs.core.count.call(null,c__35375__auto___37877);
var G__37881 = (0);
seq__37862_37866 = G__37878;
chunk__37863_37867 = G__37879;
count__37864_37868 = G__37880;
i__37865_37869 = G__37881;
continue;
} else {
var x_37882 = cljs.core.first.call(null,seq__37862_37876__$1);
ret.push(x_37882);

var G__37883 = cljs.core.next.call(null,seq__37862_37876__$1);
var G__37884 = null;
var G__37885 = (0);
var G__37886 = (0);
seq__37862_37866 = G__37883;
chunk__37863_37867 = G__37884;
count__37864_37868 = G__37885;
i__37865_37869 = G__37886;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__35170__auto__,writer__35171__auto__,opt__35172__auto__){
return cljs.core._write.call(null,writer__35171__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__37887_37891 = cljs.core.seq.call(null,v);
var chunk__37888_37892 = null;
var count__37889_37893 = (0);
var i__37890_37894 = (0);
while(true){
if((i__37890_37894 < count__37889_37893)){
var x_37895 = cljs.core._nth.call(null,chunk__37888_37892,i__37890_37894);
ret.push(x_37895);

var G__37896 = seq__37887_37891;
var G__37897 = chunk__37888_37892;
var G__37898 = count__37889_37893;
var G__37899 = (i__37890_37894 + (1));
seq__37887_37891 = G__37896;
chunk__37888_37892 = G__37897;
count__37889_37893 = G__37898;
i__37890_37894 = G__37899;
continue;
} else {
var temp__4657__auto___37900 = cljs.core.seq.call(null,seq__37887_37891);
if(temp__4657__auto___37900){
var seq__37887_37901__$1 = temp__4657__auto___37900;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37887_37901__$1)){
var c__35375__auto___37902 = cljs.core.chunk_first.call(null,seq__37887_37901__$1);
var G__37903 = cljs.core.chunk_rest.call(null,seq__37887_37901__$1);
var G__37904 = c__35375__auto___37902;
var G__37905 = cljs.core.count.call(null,c__35375__auto___37902);
var G__37906 = (0);
seq__37887_37891 = G__37903;
chunk__37888_37892 = G__37904;
count__37889_37893 = G__37905;
i__37890_37894 = G__37906;
continue;
} else {
var x_37907 = cljs.core.first.call(null,seq__37887_37901__$1);
ret.push(x_37907);

var G__37908 = cljs.core.next.call(null,seq__37887_37901__$1);
var G__37909 = null;
var G__37910 = (0);
var G__37911 = (0);
seq__37887_37891 = G__37908;
chunk__37888_37892 = G__37909;
count__37889_37893 = G__37910;
i__37890_37894 = G__37911;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__35170__auto__,writer__35171__auto__,opt__35172__auto__){
return cljs.core._write.call(null,writer__35171__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__35170__auto__,writer__35171__auto__,opt__35172__auto__){
return cljs.core._write.call(null,writer__35171__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args37912 = [];
var len__35630__auto___37923 = arguments.length;
var i__35631__auto___37924 = (0);
while(true){
if((i__35631__auto___37924 < len__35630__auto___37923)){
args37912.push((arguments[i__35631__auto___37924]));

var G__37925 = (i__35631__auto___37924 + (1));
i__35631__auto___37924 = G__37925;
continue;
} else {
}
break;
}

var G__37914 = args37912.length;
switch (G__37914) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37912.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__37915 = obj;
G__37915.push(kfn.call(null,k),vfn.call(null,v));

return G__37915;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x37916 = cljs.core.clone.call(null,handlers);
x37916.forEach = ((function (x37916,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__37917 = cljs.core.seq.call(null,coll);
var chunk__37918 = null;
var count__37919 = (0);
var i__37920 = (0);
while(true){
if((i__37920 < count__37919)){
var vec__37921 = cljs.core._nth.call(null,chunk__37918,i__37920);
var k = cljs.core.nth.call(null,vec__37921,(0),null);
var v = cljs.core.nth.call(null,vec__37921,(1),null);
f.call(null,v,k);

var G__37927 = seq__37917;
var G__37928 = chunk__37918;
var G__37929 = count__37919;
var G__37930 = (i__37920 + (1));
seq__37917 = G__37927;
chunk__37918 = G__37928;
count__37919 = G__37929;
i__37920 = G__37930;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37917);
if(temp__4657__auto__){
var seq__37917__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37917__$1)){
var c__35375__auto__ = cljs.core.chunk_first.call(null,seq__37917__$1);
var G__37931 = cljs.core.chunk_rest.call(null,seq__37917__$1);
var G__37932 = c__35375__auto__;
var G__37933 = cljs.core.count.call(null,c__35375__auto__);
var G__37934 = (0);
seq__37917 = G__37931;
chunk__37918 = G__37932;
count__37919 = G__37933;
i__37920 = G__37934;
continue;
} else {
var vec__37922 = cljs.core.first.call(null,seq__37917__$1);
var k = cljs.core.nth.call(null,vec__37922,(0),null);
var v = cljs.core.nth.call(null,vec__37922,(1),null);
f.call(null,v,k);

var G__37935 = cljs.core.next.call(null,seq__37917__$1);
var G__37936 = null;
var G__37937 = (0);
var G__37938 = (0);
seq__37917 = G__37935;
chunk__37918 = G__37936;
count__37919 = G__37937;
i__37920 = G__37938;
continue;
}
} else {
return null;
}
}
break;
}
});})(x37916,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x37916;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args37939 = [];
var len__35630__auto___37945 = arguments.length;
var i__35631__auto___37946 = (0);
while(true){
if((i__35631__auto___37946 < len__35630__auto___37945)){
args37939.push((arguments[i__35631__auto___37946]));

var G__37947 = (i__35631__auto___37946 + (1));
i__35631__auto___37946 = G__37947;
continue;
} else {
}
break;
}

var G__37941 = args37939.length;
switch (G__37941) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37939.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit37942 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit37942 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta37943){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta37943 = meta37943;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit37942.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37944,meta37943__$1){
var self__ = this;
var _37944__$1 = this;
return (new cognitect.transit.t_cognitect$transit37942(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta37943__$1));
});

cognitect.transit.t_cognitect$transit37942.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37944){
var self__ = this;
var _37944__$1 = this;
return self__.meta37943;
});

cognitect.transit.t_cognitect$transit37942.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit37942.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit37942.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit37942.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit37942.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta37943","meta37943",1927132823,null)], null);
});

cognitect.transit.t_cognitect$transit37942.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit37942.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit37942";

cognitect.transit.t_cognitect$transit37942.cljs$lang$ctorPrWriter = (function (this__35170__auto__,writer__35171__auto__,opt__35172__auto__){
return cljs.core._write.call(null,writer__35171__auto__,"cognitect.transit/t_cognitect$transit37942");
});

cognitect.transit.__GT_t_cognitect$transit37942 = (function cognitect$transit$__GT_t_cognitect$transit37942(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta37943){
return (new cognitect.transit.t_cognitect$transit37942(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta37943));
});

}

return (new cognitect.transit.t_cognitect$transit37942(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__34572__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__34572__auto__)){
return or__34572__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map