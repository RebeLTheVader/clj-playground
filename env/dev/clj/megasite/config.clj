(ns megasite.config
  (:require [selmer.parser :as parser]
            [clojure.tools.logging :as log]
            [megasite.dev-middleware :refer [wrap-dev]]))

(def defaults
  {:init
   (fn []
     (parser/cache-off!)
     (log/info "\n-=[megasite started successfully using the development profile]=-"))
   :middleware wrap-dev})
