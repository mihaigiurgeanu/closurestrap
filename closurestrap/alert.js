goog.provide('closurestrap.alert');

goog.require('goog.dom');
goog.require('goog.dom.dataset');

goog.require('closurestrap.alert.CloseEvent');
goog.require('closurestrap.alert.ClosedEvent');
goog.require('closurestrap.alert.Alert');
goot.require('closurestrap.alert.internals');



/**
 * Makes an alert listen for click events on descendant elements which have
 * the data-dismiss="alert" attribute. (Not necessary when using the
 * data-api's auto-initialization.)
 * The equivalent in jQuery version is $(element).alert()
 * @param(Element) element the alert.
 */
closurestrap.alert.closable = function(element) {
  var data = goog.dataset.get(element, "bsAlert");
  if(!data) {
    goog.dataset.set(element, "bsAlert", (data = new closurestrap.alert.Alert(element)));
  }

  return data;
};



/**
 * Closes an alert by removing it from the DOM. If the .fade and .in classes
 * are present on the element, the alert will fade out before it is removed.
 * The equivalent in jQuery version is $(element).alert('close')
 * @param(Element) element the alert.
 */
closurestrap.alert.close = function (element) {
  closurestrap.alert.closable(element).close();
};



/*
 * Setup the buttons with data-dismiss='alert' attribute to close
 * the surrounding alert.
 */
closurestrap.alert.internals.setupListeners(goog.dom.getDocument().documentElement,
                                            closurestrap.alert.Alert.prototype.close);
