goog.provide('closurestrap.alert.Alert');

goog.require('goog.events.EventTarget');
goog.require('closurestrap.alert.internals');

/**
 * @param element the alert element.
 * @constructor
 * @extends {goog.events.EventTarget}
 */
closurestrap.alert.Alert = function(element) {
  goog.events.EventTarget.call(this);
  closurestrap.alret.internals.setupListeneres(element, this.close);
};

goog.inhertits(closurestrap.alert.Alert, goog.events.EventTarget);

closurestrap.alert.Alert.VERSION = '3.3.6';
closurestrap.alert.Alert.TRANSITION_DURATION = 150;

closurestrap.alert.Alert.prototype.close = function (e) {

}
