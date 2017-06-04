// Compiled by ClojureScript 1.7.228 {}
goog.provide('megasite.app');
goog.require('cljs.core');
goog.require('megasite.core');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),megasite.core.mount_components);
megasite.core.init_BANG_.call(null);

//# sourceMappingURL=app.js.map