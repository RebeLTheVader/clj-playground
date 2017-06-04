(ns megasite.components.registration
  (:require [reagent.core :refer [atom]]
            [megasite.components.common :as c]))

(defn registration-form []
  (let [fields (atom {})]
    (fn []
      [c/modal
       [:div "Megasite Registration"]
       [:div
        [:div.well.well-sm
         [:strong " ✱ required field"]]
        [c/text-input "name" :id "enter a user name" fields]
        [c/password-input "password" :pass "enter a password" fields]
        [c/password-input "password" :pass-confirm "re-enter password" fields]]
       [:div
        [:button.btn.btn-primary "Register"]
        [:button.btn.btn-danger "Cancel"]]])))


