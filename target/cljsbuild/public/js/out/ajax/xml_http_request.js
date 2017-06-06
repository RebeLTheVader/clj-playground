// Compiled by ClojureScript 1.7.228 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__37759,handler){
var map__37760 = p__37759;
var map__37760__$1 = ((((!((map__37760 == null)))?((((map__37760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37760):map__37760);
var uri = cljs.core.get.call(null,map__37760__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__37760__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__37760__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__37760__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__37760__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__37760__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__37760__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__37760,map__37760__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__37758_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__37758_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__37760,map__37760__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___37768 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___37768)){
var response_type_37769 = temp__4657__auto___37768;
this$__$1.responseType = cljs.core.name.call(null,response_type_37769);
} else {
}

var seq__37762_37770 = cljs.core.seq.call(null,headers);
var chunk__37763_37771 = null;
var count__37764_37772 = (0);
var i__37765_37773 = (0);
while(true){
if((i__37765_37773 < count__37764_37772)){
var vec__37766_37774 = cljs.core._nth.call(null,chunk__37763_37771,i__37765_37773);
var k_37775 = cljs.core.nth.call(null,vec__37766_37774,(0),null);
var v_37776 = cljs.core.nth.call(null,vec__37766_37774,(1),null);
this$__$1.setRequestHeader(k_37775,v_37776);

var G__37777 = seq__37762_37770;
var G__37778 = chunk__37763_37771;
var G__37779 = count__37764_37772;
var G__37780 = (i__37765_37773 + (1));
seq__37762_37770 = G__37777;
chunk__37763_37771 = G__37778;
count__37764_37772 = G__37779;
i__37765_37773 = G__37780;
continue;
} else {
var temp__4657__auto___37781 = cljs.core.seq.call(null,seq__37762_37770);
if(temp__4657__auto___37781){
var seq__37762_37782__$1 = temp__4657__auto___37781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37762_37782__$1)){
var c__35375__auto___37783 = cljs.core.chunk_first.call(null,seq__37762_37782__$1);
var G__37784 = cljs.core.chunk_rest.call(null,seq__37762_37782__$1);
var G__37785 = c__35375__auto___37783;
var G__37786 = cljs.core.count.call(null,c__35375__auto___37783);
var G__37787 = (0);
seq__37762_37770 = G__37784;
chunk__37763_37771 = G__37785;
count__37764_37772 = G__37786;
i__37765_37773 = G__37787;
continue;
} else {
var vec__37767_37788 = cljs.core.first.call(null,seq__37762_37782__$1);
var k_37789 = cljs.core.nth.call(null,vec__37767_37788,(0),null);
var v_37790 = cljs.core.nth.call(null,vec__37767_37788,(1),null);
this$__$1.setRequestHeader(k_37789,v_37790);

var G__37791 = cljs.core.next.call(null,seq__37762_37782__$1);
var G__37792 = null;
var G__37793 = (0);
var G__37794 = (0);
seq__37762_37770 = G__37791;
chunk__37763_37771 = G__37792;
count__37764_37772 = G__37793;
i__37765_37773 = G__37794;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__34572__auto__ = body;
if(cljs.core.truth_(or__34572__auto__)){
return or__34572__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map