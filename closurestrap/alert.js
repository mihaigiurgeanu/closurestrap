goog.provide('closurestrap.alert');
goog.require('goog.dom');

(function () {
  var newHeader = goog.dom.createDom('h1', {'style': 'background-color: #EEE'},
                                     'Hello world!');
  goog.dom.appendChild(document.body, newHeader);
})();



