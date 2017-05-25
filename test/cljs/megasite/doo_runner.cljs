(ns megasite.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [megasite.core-test]))

(doo-tests 'megasite.core-test)

