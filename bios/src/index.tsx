import { EventBus } from '@tuval/core';
import { StartBios } from '@tuval/forms';

import './css/global.scss';
import { Routes } from './routes/+routes';
import { MainController } from './MainController';


(function (history: any) {
    var pushState = history.pushState;
    history.pushState = function (state) {


        const result = pushState.apply(history, arguments);

        if (typeof history.onpushstate == "function") {
            history.onpushstate({ state: state });
        }

        return result;
    }
})(window.history);


window.onpopstate = (history as any).onpushstate = function (e) {
    EventBus.Default.fire('history.changed', { url: window.location.href })
};



window.addEventListener("load", (event) => {
    StartBios(MainController);
  
});
