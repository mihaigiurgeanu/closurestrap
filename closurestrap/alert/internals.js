goog.provide('closurestrap.alert.internals');

goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.array');
goog.require('goog.dom');
goog.require('goog.dom.dataset');

/**
 * Sets elements with "data-dismiss='alert'" attributes to listen for
 * click events.
 */
closurestrap.alert.internals.setupListeners(root, handler)
goog.array.foreach(
  goog.dom.findNodes(root,
                     function(node) {
                       return goog.dom.isElement(node)
                       && goog.dataset.has(node, "dismiss")
                       && goog.dataset.get("dismiss") === "alert";
                     }),
  function(el) {
    goog.events.listen(el, goog.events.EventType.CLICK, handler);
  });
