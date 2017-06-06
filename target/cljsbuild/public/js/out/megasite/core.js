// Compiled by ClojureScript 1.7.228 {}
goog.provide('megasite.core');
goog.require('cljs.core');
goog.require('megasite.components.common');
goog.require('ajax.core');
goog.require('secretary.core');
goog.require('markdown.core');
goog.require('goog.history.EventType');
goog.require('reagent.session');
goog.require('reagent.core');
goog.require('megasite.components.login');
goog.require('goog.History');
goog.require('goog.events');
goog.require('megasite.ajax');
goog.require('megasite.components.registration');
megasite.core.modal = (function megasite$core$modal(){
var temp__4657__auto__ = reagent.session.get.call(null,new cljs.core.Keyword(null,"modal","modal",-1031880850));
if(cljs.core.truth_(temp__4657__auto__)){
var session_modal = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [session_modal], null);
} else {
return null;
}
});
megasite.core.user_menu = (function megasite$core$user_menu(){
var temp__4655__auto__ = reagent.session.get.call(null,new cljs.core.Keyword(null,"identity","identity",1647396035));
if(cljs.core.truth_(temp__4655__auto__)){
var id = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav.pull-xs-right","ul.nav.navbar-nav.pull-xs-right",282714831),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.dropdown-item.btn","a.dropdown-item.btn",1932808132),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (id,temp__4655__auto__){
return (function (){
return ajax.core.POST.call(null,"/logout",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (id,temp__4655__auto__){
return (function (){
return reagent.session.remove_BANG_.call(null,new cljs.core.Keyword(null,"identity","identity",1647396035));
});})(id,temp__4655__auto__))
], null));
});})(id,temp__4655__auto__))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-user","i.fa.fa-user",382004105)], null)," ",id," | sign out"], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav.pull-xs-right","ul.nav.navbar-nav.pull-xs-right",282714831),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [megasite.components.login.login_button], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.nav-item","li.nav-item",299679112),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [megasite.components.registration.registration_button], null)], null)], null);
}
});
megasite.core.nav_link = (function megasite$core$nav_link(uri,title,page,collapsed_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav>a.navbar-brand","ul.nav.navbar-nav>a.navbar-brand",-323901209),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,page,reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397))))?"active":null),new cljs.core.Keyword(null,"href","href",-793805698),uri,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,collapsed_QMARK_,true);
})], null),title], null);
});
megasite.core.navbar = (function megasite$core$navbar(){
var collapsed_QMARK_ = reagent.core.atom.call(null,true);
return ((function (collapsed_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.navbar.navbar-light.bg-faded","nav.navbar.navbar-light.bg-faded",244269307),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.navbar-toggler.hidden-sm-up","button.navbar-toggler.hidden-sm-up",-398271905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (collapsed_QMARK_){
return (function (){
return cljs.core.swap_BANG_.call(null,collapsed_QMARK_,cljs.core.not);
});})(collapsed_QMARK_))
], null),"\u2630"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.collapse.navbar-toggleable-xs","div.collapse.navbar-toggleable-xs",-474131623),(cljs.core.truth_(cljs.core.deref.call(null,collapsed_QMARK_))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"in"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.navbar-brand","a.navbar-brand",691442118),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/"], null),"megasite"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.navbar-nav","ul.nav.navbar-nav",1805559761),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [megasite.core.nav_link,"#/","Home",new cljs.core.Keyword(null,"home","home",-74557309),collapsed_QMARK_], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [megasite.core.nav_link,"#/about","About",new cljs.core.Keyword(null,"about","about",1423892543),collapsed_QMARK_], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [megasite.core.user_menu], null)], null);
});
;})(collapsed_QMARK_))
});
megasite.core.about_page = (function megasite$core$about_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),"this is the story of megasite... work in progress"], null)], null)], null);
});
megasite.core.home_page = (function megasite$core$home_page(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.jumbotron","div.jumbotron",-1632448673),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Welcome to megasite"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Time to start building your site!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.btn.btn-primary.btn-lg","a.btn.btn-primary.btn-lg",-1886308563),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"http://luminusweb.net"], null),"Learn more \u00BB"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to ClojureScript"], null)], null)], null),(function (){var temp__4657__auto__ = reagent.session.get.call(null,new cljs.core.Keyword(null,"docs","docs",-1974280502));
if(cljs.core.truth_(temp__4657__auto__)){
var docs = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),markdown.core.md__GT_html.call(null,docs)], null)], null)], null)], null)], null);
} else {
return null;
}
})()], null);
});
megasite.core.pages = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.Var(function(){return megasite.core.home_page;},new cljs.core.Symbol("megasite.core","home-page","megasite.core/home-page",-653624931,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"megasite.core","megasite.core",-140740950,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/megasite/core.cljs",16,1,58,58,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(megasite.core.home_page)?megasite.core.home_page.cljs$lang$test:null)])),new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.Var(function(){return megasite.core.about_page;},new cljs.core.Symbol("megasite.core","about-page","megasite.core/about-page",-1962944867,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"megasite.core","megasite.core",-140740950,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"src/cljs/megasite/core.cljs",17,1,52,52,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(megasite.core.about_page)?megasite.core.about_page.cljs$lang$test:null)]))], null);
megasite.core.page = (function megasite$core$page(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [megasite.core.modal], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [megasite.core.pages.call(null,reagent.session.get.call(null,new cljs.core.Keyword(null,"page","page",849072397)))], null)], null);
});
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__36225__auto___39639 = (function (params__36226__auto__){
if(cljs.core.map_QMARK_.call(null,params__36226__auto__)){
var map__39636 = params__36226__auto__;
var map__39636__$1 = ((((!((map__39636 == null)))?((((map__39636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39636):map__39636);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
if(cljs.core.vector_QMARK_.call(null,params__36226__auto__)){
var vec__39638 = params__36226__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"home","home",-74557309));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__36225__auto___39639);

var action__36225__auto___39643 = (function (params__36226__auto__){
if(cljs.core.map_QMARK_.call(null,params__36226__auto__)){
var map__39640 = params__36226__auto__;
var map__39640__$1 = ((((!((map__39640 == null)))?((((map__39640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39640):map__39640);
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
if(cljs.core.vector_QMARK_.call(null,params__36226__auto__)){
var vec__39642 = params__36226__auto__;
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"about","about",1423892543));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__36225__auto___39643);

megasite.core.hook_browser_navigation_BANG_ = (function megasite$core$hook_browser_navigation_BANG_(){
var G__39645 = (new goog.History());
goog.events.listen(G__39645,goog.history.EventType.NAVIGATE,((function (G__39645){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__39645))
);

G__39645.setEnabled(true);

return G__39645;
});
megasite.core.fetch_docs_BANG_ = (function megasite$core$fetch_docs_BANG_(){
return cljs.core.get.call(null,[cljs.core.str(context),cljs.core.str("/docs")].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__39646_SHARP_){
return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"docs","docs",-1974280502),p1__39646_SHARP_);
})], null));
});
megasite.core.mount_components = (function megasite$core$mount_components(){
reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return megasite.core.navbar;},new cljs.core.Symbol("megasite.core","navbar","megasite.core/navbar",-1404197092,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"megasite.core","megasite.core",-140740950,null),new cljs.core.Symbol(null,"navbar","navbar",-1070039728,null),"src/cljs/megasite/core.cljs",13,1,38,38,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(megasite.core.navbar)?megasite.core.navbar.cljs$lang$test:null)]))], null),document.getElementById("navbar"));

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return megasite.core.page;},new cljs.core.Symbol("megasite.core","page","megasite.core/page",-1470919384,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"megasite.core","megasite.core",-140740950,null),new cljs.core.Symbol(null,"page","page",-1805363372,null),"src/cljs/megasite/core.cljs",11,1,77,77,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(megasite.core.page)?megasite.core.page.cljs$lang$test:null)]))], null),document.getElementById("app"));
});
megasite.core.init_BANG_ = (function megasite$core$init_BANG_(){
megasite.ajax.load_interceptors_BANG_.call(null);

megasite.core.fetch_docs_BANG_.call(null);

megasite.core.hook_browser_navigation_BANG_.call(null);

reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"identity","identity",1647396035),identity);

return megasite.core.mount_components.call(null);
});

//# sourceMappingURL=core.js.map