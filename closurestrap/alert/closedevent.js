goog.provide('closurestrap.alert.ClosedEvent');

goot.require('goog.events.Event');

/**
 * @constructor
 * @extends {goog.events.Event}
 */
closurestrap.alert.CloseEvent = function() {
  goog.events.Event.call(this, 'CLOSURESTRAP_ALERT_CLOSED_EVENT');
}

goog.inherits(closurestrap.alert.ClosedEvent, goog.events.Event);
