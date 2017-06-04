// Compiled by ClojureScript 1.7.228 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__39517,handler){
var map__39518 = p__39517;
var map__39518__$1 = ((((!((map__39518 == null)))?((((map__39518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39518):map__39518);
var uri = cljs.core.get.call(null,map__39518__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__39518__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__39518__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__39518__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__39518__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__39518__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__39518__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__39518,map__39518__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__39516_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__39516_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__39518,map__39518__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___39526 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___39526)){
var response_type_39527 = temp__4657__auto___39526;
this$__$1.responseType = cljs.core.name.call(null,response_type_39527);
} else {
}

var seq__39520_39528 = cljs.core.seq.call(null,headers);
var chunk__39521_39529 = null;
var count__39522_39530 = (0);
var i__39523_39531 = (0);
while(true){
if((i__39523_39531 < count__39522_39530)){
var vec__39524_39532 = cljs.core._nth.call(null,chunk__39521_39529,i__39523_39531);
var k_39533 = cljs.core.nth.call(null,vec__39524_39532,(0),null);
var v_39534 = cljs.core.nth.call(null,vec__39524_39532,(1),null);
this$__$1.setRequestHeader(k_39533,v_39534);

var G__39535 = seq__39520_39528;
var G__39536 = chunk__39521_39529;
var G__39537 = count__39522_39530;
var G__39538 = (i__39523_39531 + (1));
seq__39520_39528 = G__39535;
chunk__39521_39529 = G__39536;
count__39522_39530 = G__39537;
i__39523_39531 = G__39538;
continue;
} else {
var temp__4657__auto___39539 = cljs.core.seq.call(null,seq__39520_39528);
if(temp__4657__auto___39539){
var seq__39520_39540__$1 = temp__4657__auto___39539;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39520_39540__$1)){
var c__35359__auto___39541 = cljs.core.chunk_first.call(null,seq__39520_39540__$1);
var G__39542 = cljs.core.chunk_rest.call(null,seq__39520_39540__$1);
var G__39543 = c__35359__auto___39541;
var G__39544 = cljs.core.count.call(null,c__35359__auto___39541);
var G__39545 = (0);
seq__39520_39528 = G__39542;
chunk__39521_39529 = G__39543;
count__39522_39530 = G__39544;
i__39523_39531 = G__39545;
continue;
} else {
var vec__39525_39546 = cljs.core.first.call(null,seq__39520_39540__$1);
var k_39547 = cljs.core.nth.call(null,vec__39525_39546,(0),null);
var v_39548 = cljs.core.nth.call(null,vec__39525_39546,(1),null);
this$__$1.setRequestHeader(k_39547,v_39548);

var G__39549 = cljs.core.next.call(null,seq__39520_39540__$1);
var G__39550 = null;
var G__39551 = (0);
var G__39552 = (0);
seq__39520_39528 = G__39549;
chunk__39521_39529 = G__39550;
count__39522_39530 = G__39551;
i__39523_39531 = G__39552;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__34556__auto__ = body;
if(cljs.core.truth_(or__34556__auto__)){
return or__34556__auto__;
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