(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './galoisenne.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./galoisenne.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof galoisenne === 'undefined') {
      throw new Error("Error loading module 'Tidyparse-tidyparse-core'. Its dependency 'galoisenne' was not found. Please, check whether 'galoisenne' is loaded prior to 'Tidyparse-tidyparse-core'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Tidyparse-tidyparse-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Tidyparse-tidyparse-core'.");
    }
    root['Tidyparse-tidyparse-core'] = factory(typeof this['Tidyparse-tidyparse-core'] === 'undefined' ? {} : this['Tidyparse-tidyparse-core'], galoisenne, this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_ai_hypergraph_galoisenne, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var prettyPrint = kotlin_ai_hypergraph_galoisenne.$_$.g;
  var carveSeams = kotlin_ai_hypergraph_galoisenne.$_$.k;
  var escapeHTML = kotlin_ai_hypergraph_galoisenne.$_$.b;
  var KProperty1 = kotlin_kotlin.$_$.zf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sd;
  var VOID = kotlin_kotlin.$_$.f;
  var cache = kotlin_ai_hypergraph_galoisenne.$_$.j;
  var LRUCache = kotlin_ai_hypergraph_galoisenne.$_$.a;
  var emptySet = kotlin_kotlin.$_$.k7;
  //endregion
  //region block: pre-declaration
  //endregion
  function get_prettyHTML(_this__u8e3s4) {
    _init_properties_TidyCommon_kt__pskpf9();
    return prettyHTML$delegate.getValue_4u4kqi_k$(_this__u8e3s4, prettyHTML$factory());
  }
  var prettyHTML$delegate;
  function get_la() {
    _init_properties_TidyCommon_kt__pskpf9();
    return la;
  }
  var la;
  function get_ra() {
    _init_properties_TidyCommon_kt__pskpf9();
    return ra;
  }
  var ra;
  function get_synthCache() {
    _init_properties_TidyCommon_kt__pskpf9();
    return synthCache;
  }
  var synthCache;
  function set_grammarFileCache(_set____db54di) {
    _init_properties_TidyCommon_kt__pskpf9();
    grammarFileCache = _set____db54di;
  }
  function get_grammarFileCache() {
    _init_properties_TidyCommon_kt__pskpf9();
    return grammarFileCache;
  }
  var grammarFileCache;
  function set_cfg(_set____db54di) {
    _init_properties_TidyCommon_kt__pskpf9();
    cfg = _set____db54di;
  }
  function get_cfg() {
    _init_properties_TidyCommon_kt__pskpf9();
    return cfg;
  }
  var cfg;
  function prettyHTML$delegate$lambda($this$cache) {
    _init_properties_TidyCommon_kt__pskpf9();
    return escapeHTML(carveSeams(prettyPrint($this$cache)));
  }
  function prettyHTML$factory() {
    return getPropertyCallableRef('prettyHTML', 1, KProperty1, function (receiver) {
      return get_prettyHTML(receiver);
    }, null);
  }
  var properties_initialized_TidyCommon_kt_piwign;
  function _init_properties_TidyCommon_kt__pskpf9() {
    if (!properties_initialized_TidyCommon_kt_piwign) {
      properties_initialized_TidyCommon_kt_piwign = true;
      prettyHTML$delegate = cache(VOID, prettyHTML$delegate$lambda);
      la = escapeHTML('<');
      ra = escapeHTML('>');
      synthCache = new LRUCache();
      grammarFileCache = '';
      // Inline function 'kotlin.collections.setOf' call
      cfg = emptySet();
    }
  }
  return _;
}));

//# sourceMappingURL=Tidyparse-tidyparse-core.js.map
