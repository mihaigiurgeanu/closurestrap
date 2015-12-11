goog.provide('closurestrap.alert.CloseEvent');

goot.require('goog.events.Event');

/**
 * @constructor
 * @extends {goog.events.Event}
 */
closurestrap.alert.CloseEvent = function() {
  goog.events.Event.call(this, 'CLOSURESTRAP_ALERT_CLOSE_EVENT');
}

goog.inherits(closurestrap.alert.CloseEvent, goog.events.Event);
