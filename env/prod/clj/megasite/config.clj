(ns megasite.config
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[megasite started successfully]=-"))
   :middleware identity})
