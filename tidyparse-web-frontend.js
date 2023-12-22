(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["tidyparse-web-frontend"] = factory();
	else
		root["tidyparse-web-frontend"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./kotlin/Tidyparse-tidyparse-core.js":
/*!********************************************!*\
  !*** ./kotlin/Tidyparse-tidyparse-core.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true)
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./kotlin-kotlin-stdlib.js */ "./kotlin/kotlin-kotlin-stdlib.js"), __webpack_require__(/*! ./galoisenne.js */ "./kotlin/galoisenne.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else {}
}(this, function (_, kotlin_kotlin, kotlin_ai_hypergraph_galoisenne) {
  'use strict';
  //region block: imports
  var emptySet = kotlin_kotlin.$_$.i1;
  var LRUCache = kotlin_ai_hypergraph_galoisenne.$_$.a;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f;
  var protoOf = kotlin_kotlin.$_$.k4;
  var substringBefore = kotlin_kotlin.$_$.t5;
  var VOID = kotlin_kotlin.$_$.b;
  var parseCFG = kotlin_ai_hypergraph_galoisenne.$_$.g;
  var freeze = kotlin_ai_hypergraph_galoisenne.$_$.e;
  var Exception = kotlin_kotlin.$_$.z5;
  var indexOf = kotlin_kotlin.$_$.h5;
  var Unit_instance = kotlin_kotlin.$_$.s;
  var initMetadataForClass = kotlin_kotlin.$_$.z3;
  var split = kotlin_kotlin.$_$.q5;
  var last = kotlin_kotlin.$_$.t1;
  var lines = kotlin_kotlin.$_$.k5;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var isBlank = kotlin_kotlin.$_$.i5;
  var containsHole = kotlin_ai_hypergraph_galoisenne.$_$.d;
  var hashCode = kotlin_kotlin.$_$.y3;
  var getStringHashCode = kotlin_kotlin.$_$.x3;
  var Companion_instance = kotlin_ai_hypergraph_galoisenne.$_$.i;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(TidyEditor, 'TidyEditor');
  //endregion
  var segmentationCache;
  function get_segmentationCacheHTML() {
    _init_properties_TidyEditor_kt__jj9znt();
    return segmentationCacheHTML;
  }
  var segmentationCacheHTML;
  function TidyEditor() {
    var tmp = this;
    // Inline function 'kotlin.collections.setOf' call
    tmp.or_1 = emptySet();
    this.pr_1 = '';
    this.qr_1 = new LRUCache();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.rr_1 = LinkedHashMap_init_$Create$();
    this.sr_1 = 0;
    this.tr_1 = 27;
  }
  protoOf(TidyEditor).wr = function () {
    var grammar = substringBefore(this.ur(), '---');
    var tmp;
    try {
      var tmp_0;
      var tmp_1;
      if (!(grammar === this.pr_1)) {
        tmp_1 = true;
      } else {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_1 = !this.or_1.l();
      }
      if (tmp_1) {
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.also' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'ai.hypergraph.tidyparse.TidyEditor.getLatestCFG.<anonymous>' call
        this.pr_1 = grammar;
        var this_0 = freeze(parseCFG(grammar, VOID, true));
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'ai.hypergraph.tidyparse.TidyEditor.getLatestCFG.<anonymous>' call
        this.or_1 = this_0;
        tmp_0 = this_0;
      } else {
        tmp_0 = this.or_1;
      }
      tmp = tmp_0;
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_2 = this.or_1;
      } else {
        throw $p;
      }
      tmp = tmp_2;
    }
    return tmp;
  };
  protoOf(TidyEditor).xr = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.tidyparse.TidyEditor.caretInGrammar.<anonymous>' call
    var it = indexOf(this.ur(), '---');
    return it === -1 ? true : this.vr() < it;
  };
  protoOf(TidyEditor).yr = function (cfg) {
  };
  protoOf(TidyEditor).zr = function (cfg, $super) {
    var tmp;
    if (cfg === VOID) {
      // Inline function 'kotlin.collections.setOf' call
      tmp = emptySet();
    } else {
      tmp = cfg;
    }
    cfg = tmp;
    var tmp_0;
    if ($super === VOID) {
      this.yr(cfg);
      tmp_0 = Unit_instance;
    } else {
      tmp_0 = $super.yr.call(this, cfg);
    }
    return tmp_0;
  };
  function preparseParseableLines(cfg, editorText) {
    _init_properties_TidyEditor_kt__jj9znt();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = lines(last(split(editorText, ['---'])));
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.tidyparse.preparseParseableLines.<anonymous>' call
      var tmp;
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(element)) {
        tmp = !containsHole(element);
      } else {
        tmp = false;
      }
      if (tmp) {
        destination.e(element);
      }
    }
    var tmp0_iterator_0 = destination.h();
    while (tmp0_iterator_0.i()) {
      var element_0 = tmp0_iterator_0.j();
      // Inline function 'ai.hypergraph.tidyparse.preparseParseableLines.<anonymous>' call
      // Inline function 'kotlin.collections.getOrPut' call
      var this_1 = get_segmentationCacheHTML();
      var key = hashCode(cfg) + getStringHashCode(element_0) | 0;
      var value = this_1.u1(key);
      var tmp_0;
      if (value == null) {
        // Inline function 'ai.hypergraph.tidyparse.preparseParseableLines.<anonymous>.<anonymous>' call
        var answer = Companion_instance.kn(cfg, element_0).do();
        this_1.v3(key, answer);
        tmp_0 = answer;
      } else {
        tmp_0 = value;
      }
    }
  }
  var properties_initialized_TidyEditor_kt_vkio1l;
  function _init_properties_TidyEditor_kt__jj9znt() {
    if (!properties_initialized_TidyEditor_kt_vkio1l) {
      properties_initialized_TidyEditor_kt_vkio1l = true;
      // Inline function 'kotlin.collections.mutableMapOf' call
      segmentationCache = LinkedHashMap_init_$Create$();
      // Inline function 'kotlin.collections.mutableMapOf' call
      segmentationCacheHTML = LinkedHashMap_init_$Create$();
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = TidyEditor;
  _.$_$.b = preparseParseableLines;
  _.$_$.c = get_segmentationCacheHTML;
  //endregion
  return _;
}));



/***/ }),

/***/ "./kotlin/Tidyparse-tidyparse-web-frontend.js":
/*!****************************************************!*\
  !*** ./kotlin/Tidyparse-tidyparse-web-frontend.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true)
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./galoisenne.js */ "./kotlin/galoisenne.js"), __webpack_require__(/*! ./kotlin-kotlin-stdlib.js */ "./kotlin/kotlin-kotlin-stdlib.js"), __webpack_require__(/*! ./Tidyparse-tidyparse-core.js */ "./kotlin/Tidyparse-tidyparse-core.js"), __webpack_require__(/*! ./multik-multik-kotlin.js */ "./kotlin/multik-multik-kotlin.js"), __webpack_require__(/*! ./multik-multik-default.js */ "./kotlin/multik-multik-default.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else {}
}(this, function (_, kotlin_ai_hypergraph_galoisenne, kotlin_kotlin, kotlin_ai_hypergraph_tidyparse_core, kotlin_org_jetbrains_kotlinx_multik_kotlin, kotlin_org_jetbrains_kotlinx_multik_default) {
  'use strict';
  //region block: imports
  var set_TIMEOUT_MS = kotlin_ai_hypergraph_galoisenne.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.s;
  var THROW_CCE = kotlin_kotlin.$_$.d6;
  var KProperty0 = kotlin_kotlin.$_$.s4;
  var getPropertyCallableRef = kotlin_kotlin.$_$.w3;
  var to = kotlin_kotlin.$_$.i6;
  var lazy = kotlin_kotlin.$_$.g6;
  var ensureNotNull = kotlin_kotlin.$_$.f6;
  var indexOf = kotlin_kotlin.$_$.h5;
  var split = kotlin_kotlin.$_$.q5;
  var last = kotlin_kotlin.$_$.t1;
  var protoOf = kotlin_kotlin.$_$.k4;
  var initMetadataForCompanion = kotlin_kotlin.$_$.a4;
  var preparseParseableLines = kotlin_ai_hypergraph_tidyparse_core.$_$.b;
  var TidyEditor = kotlin_ai_hypergraph_tidyparse_core.$_$.a;
  var isValidProd = kotlin_ai_hypergraph_galoisenne.$_$.f;
  var initMetadataForClass = kotlin_kotlin.$_$.z3;
  var VOID = kotlin_kotlin.$_$.b;
  var mapCapacity = kotlin_kotlin.$_$.w1;
  var coerceAtLeast = kotlin_kotlin.$_$.o4;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.e;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.i;
  var objectCreate = kotlin_kotlin.$_$.j4;
  var joinToString = kotlin_kotlin.$_$.r1;
  var escapeHTML = kotlin_ai_hypergraph_galoisenne.$_$.b;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.j;
  var lines = kotlin_kotlin.$_$.k5;
  var get_segmentationCacheHTML = kotlin_ai_hypergraph_tidyparse_core.$_$.c;
  var hashCode = kotlin_kotlin.$_$.y3;
  var getStringHashCode = kotlin_kotlin.$_$.x3;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.o;
  var tokenizeByWhitespaceAndKeepDelimiters = kotlin_ai_hypergraph_galoisenne.$_$.h;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(JSTidyEditor, 'JSTidyEditor', VOID, TidyEditor);
  initMetadataForClass(Parser, 'Parser');
  initMetadataForClass(TextareaDecorator, 'TextareaDecorator');
  //endregion
  function get_parser() {
    _init_properties_Client_kt__a2ryqz();
    return parser;
  }
  var parser;
  function get_decorator() {
    _init_properties_Client_kt__a2ryqz();
    // Inline function 'kotlin.getValue' call
    var this_0 = decorator$delegate;
    decorator$factory();
    return this_0.r1();
  }
  var decorator$delegate;
  function get_jsEditor() {
    _init_properties_Client_kt__a2ryqz();
    // Inline function 'kotlin.getValue' call
    var this_0 = jsEditor$delegate;
    jsEditor$factory();
    return this_0.r1();
  }
  var jsEditor$delegate;
  function get_inputField() {
    _init_properties_Client_kt__a2ryqz();
    // Inline function 'kotlin.getValue' call
    var this_0 = inputField$delegate;
    inputField$factory();
    return this_0.r1();
  }
  var inputField$delegate;
  function get_outputField() {
    _init_properties_Client_kt__a2ryqz();
    // Inline function 'kotlin.getValue' call
    var this_0 = outputField$delegate;
    outputField$factory();
    return this_0.r1();
  }
  var outputField$delegate;
  function main() {
    _init_properties_Client_kt__a2ryqz();
    set_TIMEOUT_MS(5000);
    get_jsEditor().wr();
    var tmp = window;
    tmp.onload = main$lambda;
    var tmp_0 = get_inputField();
    tmp_0.addEventListener('input', main$lambda_0);
  }
  function decorator$delegate$lambda() {
    _init_properties_Client_kt__a2ryqz();
    return new TextareaDecorator(get_inputField(), get_parser());
  }
  function jsEditor$delegate$lambda() {
    _init_properties_Client_kt__a2ryqz();
    return new JSTidyEditor(get_inputField(), get_outputField());
  }
  function inputField$delegate$lambda() {
    _init_properties_Client_kt__a2ryqz();
    var tmp = document.getElementById('tidyparse-input');
    return tmp instanceof HTMLTextAreaElement ? tmp : THROW_CCE();
  }
  function outputField$delegate$lambda() {
    _init_properties_Client_kt__a2ryqz();
    var tmp = document.getElementById('tidyparse-output');
    return tmp instanceof Node ? tmp : THROW_CCE();
  }
  function main$lambda(it) {
    _init_properties_Client_kt__a2ryqz();
    get_jsEditor().zr();
    return Unit_instance;
  }
  function main$lambda_0(it) {
    _init_properties_Client_kt__a2ryqz();
    get_jsEditor().zr();
    return Unit_instance;
  }
  function decorator$factory() {
    return getPropertyCallableRef('decorator', 0, KProperty0, function () {
      return get_decorator();
    }, null);
  }
  function jsEditor$factory() {
    return getPropertyCallableRef('jsEditor', 0, KProperty0, function () {
      return get_jsEditor();
    }, null);
  }
  function inputField$factory() {
    return getPropertyCallableRef('inputField', 0, KProperty0, function () {
      return get_inputField();
    }, null);
  }
  function outputField$factory() {
    return getPropertyCallableRef('outputField', 0, KProperty0, function () {
      return get_outputField();
    }, null);
  }
  var properties_initialized_Client_kt_4npn83;
  function _init_properties_Client_kt__a2ryqz() {
    if (!properties_initialized_Client_kt_4npn83) {
      properties_initialized_Client_kt_4npn83 = true;
      parser = Parser_init_$Create$([to('whitespace', '\\s+'), to('blue', '---'), to('gray', '->|_|\\|'), to('green', 'START'), to('other', '\\S')]);
      decorator$delegate = lazy(decorator$delegate$lambda);
      jsEditor$delegate = lazy(jsEditor$delegate$lambda);
      inputField$delegate = lazy(inputField$delegate$lambda);
      outputField$delegate = lazy(outputField$delegate$lambda);
    }
  }
  function mainWrapper() {
    main();
  }
  function getEndOfLineIdx(_this__u8e3s4, $this) {
    return indexOf(_this__u8e3s4.value, '\n', ensureNotNull(_this__u8e3s4.selectionStart));
  }
  function getCurrentLine(_this__u8e3s4, $this) {
    // Inline function 'kotlin.text.substring' call
    var this_0 = _this__u8e3s4.value;
    var endIndex = getEndOfLineIdx(_this__u8e3s4, $this);
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this_0.substring(0, endIndex);
    return last(split(tmp$ret$1, ['\n']));
  }
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function redecorateLines$decorate(decCFG) {
    // Inline function 'kotlin.apply' call
    var this_0 = get_jsEditor();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'JSTidyEditor.redecorateLines.decorate.<anonymous>' call
    preparseParseableLines(decCFG, this_0.ur());
    get_decorator().ls(decCFG);
  }
  function JSTidyEditor(editor, output) {
    TidyEditor.call(this);
    this.gs_1 = editor;
    this.hs_1 = output;
  }
  protoOf(JSTidyEditor).ur = function () {
    return this.gs_1.value;
  };
  protoOf(JSTidyEditor).vr = function () {
    return ensureNotNull(this.gs_1.selectionStart);
  };
  protoOf(JSTidyEditor).ms = function () {
    return getCurrentLine(this.gs_1, Companion_instance);
  };
  protoOf(JSTidyEditor).yr = function (cfg) {
    var decCFG = this.wr();
    if (this.xr()) {
      get_decorator().ls(decCFG);
      if (isValidProd(this.ms())) {
        redecorateLines$decorate(decCFG);
      }
    } else {
      redecorateLines$decorate(decCFG);
    }
  };
  function Parser_init_$Init$(rules, $this) {
    // Inline function 'kotlin.collections.associate' call
    var capacity = coerceAtLeast(mapCapacity(rules.length), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$(capacity);
    var inductionVariable = 0;
    var last = rules.length;
    while (inductionVariable < last) {
      var element = rules[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.collections.plusAssign' call
      // Inline function 'Parser.<init>.<anonymous>' call
      var color = element.hc();
      var regex = element.ic();
      var pair = to(color, Regex_init_$Create$(regex));
      destination.v3(pair.fc_1, pair.gc_1);
    }
    Parser.call($this, destination);
    return $this;
  }
  function Parser_init_$Create$(rules) {
    return Parser_init_$Init$(rules, objectCreate(protoOf(Parser)));
  }
  function Parser$parseRE$lambda(it) {
    return it.v9_1;
  }
  function Parser(ruleMap) {
    this.ns_1 = ruleMap;
    var tmp = this;
    // Inline function 'kotlin.text.toRegex' call
    var tmp_0 = this.ns_1.v1();
    var this_0 = joinToString(tmp_0, '|', VOID, VOID, VOID, VOID, Parser$parseRE$lambda);
    tmp.os_1 = Regex_init_$Create$(this_0);
  }
  protoOf(Parser).ps = function (token) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = this.ns_1.w1().h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'Parser.identify.<anonymous>' call
        if (element.r1().ba(token)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp0_safe_receiver = tmp$ret$1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.q1();
  };
  function TextareaDecorator$toColorfulHTML$lambda(this$0) {
    return function (token) {
      var escapedToken = escapeHTML(token);
      var tmp2_safe_receiver = this$0.js_1.ps(token);
      var tmp;
      if (tmp2_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'TextareaDecorator.toColorfulHTML.<anonymous>.<anonymous>' call
        tmp = '<span class="' + tmp2_safe_receiver + '">' + escapedToken + '<\/span>';
      }
      var tmp0_elvis_lhs = tmp;
      return tmp0_elvis_lhs == null ? token : tmp0_elvis_lhs;
    };
  }
  function TextareaDecorator(inputField, parser) {
    this.is_1 = inputField;
    this.js_1 = parser;
    var tmp = this;
    var tmp_0 = document.createElement('pre');
    tmp.ks_1 = tmp_0 instanceof HTMLPreElement ? tmp_0 : THROW_CCE();
    var tmp_1 = document.createElement('div');
    var parent = tmp_1 instanceof HTMLDivElement ? tmp_1 : THROW_CCE();
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'TextareaDecorator.<anonymous>' call
    parent.className = 'ldt ' + parent.className;
    parent.appendChild(this.ks_1);
    var tmp_2 = document.createElement('label');
    var label = tmp_2 instanceof HTMLLabelElement ? tmp_2 : THROW_CCE();
    parent.appendChild(label);
    // Inline function 'kotlin.apply' call
    var this_0 = this.is_1;
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'TextareaDecorator.<anonymous>' call
    var tmp1_safe_receiver = this_0.parentNode;
    if (tmp1_safe_receiver == null)
      null;
    else
      tmp1_safe_receiver.replaceChild(parent, this_0);
    label.appendChild(this_0);
    this_0.className = '';
    this_0.spellcheck = false;
    this_0.wrap = 'off';
  }
  protoOf(TextareaDecorator).ls = function (cfg) {
    var sb = StringBuilder_init_$Create$();
    var lines_0;
    var maxLen = 0;
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.also' call
    var this_0 = lines(this.is_1.value);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'TextareaDecorator.update.<anonymous>' call
    lines_0 = this_0.k();
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'TextareaDecorator.update.<anonymous>' call
      if (element.length > maxLen) {
        maxLen = element.length;
      }
      // Inline function 'kotlin.text.appendLine' call
      // Inline function 'kotlin.collections.getOrElse' call
      var this_1 = get_segmentationCacheHTML();
      var key = hashCode(cfg) + getStringHashCode(element) | 0;
      var tmp0_elvis_lhs = this_1.u1(key);
      var tmp;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'TextareaDecorator.update.<anonymous>.<anonymous>' call
        tmp = this.qs(element);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var value = tmp;
      // Inline function 'kotlin.text.appendLine' call
      sb.q6(value).r6(_Char___init__impl__6a9atx(10));
    }
    this.ks_1.innerHTML = sb.toString();
    this.is_1.cols = maxLen + 1 | 0;
    this.is_1.rows = lines_0 + 2 | 0;
  };
  protoOf(TextareaDecorator).qs = function (_this__u8e3s4) {
    var tmp = tokenizeByWhitespaceAndKeepDelimiters(_this__u8e3s4);
    return joinToString(tmp, '', VOID, VOID, VOID, VOID, TextareaDecorator$toColorfulHTML$lambda(this));
  };
  //region block: init
  Companion_instance = new Companion();
  //endregion
  //region block: exports
  kotlin_org_jetbrains_kotlinx_multik_kotlin.$jsExportAll$(_);
  kotlin_org_jetbrains_kotlinx_multik_default.$jsExportAll$(_);
  //endregion
  mainWrapper();
  return _;
}));



/***/ }),

/***/ "./kotlin/galoisenne.js":
/*!******************************!*\
  !*** ./kotlin/galoisenne.js ***!
  \******************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true)
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./kotlin-kotlin-stdlib.js */ "./kotlin/kotlin-kotlin-stdlib.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else {}
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var tanh = Math.tanh;
  var imul = Math.imul;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.s;
  var VOID = kotlin_kotlin.$_$.b;
  var getStringHashCode = kotlin_kotlin.$_$.x3;
  var Random = kotlin_kotlin.$_$.n4;
  var Collection = kotlin_kotlin.$_$.t;
  var isInterface = kotlin_kotlin.$_$.f4;
  var KClass = kotlin_kotlin.$_$.r4;
  var NotImplementedError = kotlin_kotlin.$_$.b6;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.d;
  var replaceFirst = kotlin_kotlin.$_$.n5;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.o;
  var charArrayOf = kotlin_kotlin.$_$.o3;
  var split = kotlin_kotlin.$_$.p5;
  var THROW_CCE = kotlin_kotlin.$_$.d6;
  var isCharSequence = kotlin_kotlin.$_$.e4;
  var trim = kotlin_kotlin.$_$.w5;
  var toString = kotlin_kotlin.$_$.m4;
  var compareBy = kotlin_kotlin.$_$.h3;
  var sortedWith = kotlin_kotlin.$_$.o2;
  var numberToInt = kotlin_kotlin.$_$.i4;
  var to = kotlin_kotlin.$_$.i6;
  var plus = kotlin_kotlin.$_$.h2;
  var numberRangeToNumber = kotlin_kotlin.$_$.h4;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.n;
  var compareTo = kotlin_kotlin.$_$.r3;
  var ensureNotNull = kotlin_kotlin.$_$.f6;
  var charSequenceLength = kotlin_kotlin.$_$.q3;
  var substringBefore = kotlin_kotlin.$_$.t5;
  var padStart = kotlin_kotlin.$_$.m5;
  var substringAfter = kotlin_kotlin.$_$.s5;
  var padEnd = kotlin_kotlin.$_$.l5;
  var toCharArray = kotlin_kotlin.$_$.v5;
  var toSet = kotlin_kotlin.$_$.d3;
  var Exception = kotlin_kotlin.$_$.z5;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.g;
  var protoOf = kotlin_kotlin.$_$.k4;
  var initMetadataForClass = kotlin_kotlin.$_$.z3;
  var objectCreate = kotlin_kotlin.$_$.j4;
  var initMetadataForCompanion = kotlin_kotlin.$_$.a4;
  var emptySet = kotlin_kotlin.$_$.i1;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.h;
  var plus_0 = kotlin_kotlin.$_$.f2;
  var toSet_0 = kotlin_kotlin.$_$.b3;
  var initMetadataForInterface = kotlin_kotlin.$_$.b4;
  var charSequenceGet = kotlin_kotlin.$_$.p3;
  var Char = kotlin_kotlin.$_$.x5;
  var joinToString = kotlin_kotlin.$_$.r1;
  var mapCapacity = kotlin_kotlin.$_$.w1;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.e;
  var flatten = kotlin_kotlin.$_$.n1;
  var toMutableSet = kotlin_kotlin.$_$.a3;
  var retainAll = kotlin_kotlin.$_$.l2;
  var lazy = kotlin_kotlin.$_$.g6;
  var toList = kotlin_kotlin.$_$.v2;
  var get_indices = kotlin_kotlin.$_$.p1;
  var zip = kotlin_kotlin.$_$.g3;
  var toMap = kotlin_kotlin.$_$.x2;
  var println = kotlin_kotlin.$_$.l3;
  var checkIndexOverflow = kotlin_kotlin.$_$.a1;
  var List = kotlin_kotlin.$_$.u;
  var minus = kotlin_kotlin.$_$.a2;
  var setOf = kotlin_kotlin.$_$.m2;
  var intersect = kotlin_kotlin.$_$.q1;
  var plus_1 = kotlin_kotlin.$_$.e2;
  var contains = kotlin_kotlin.$_$.d5;
  var toMutableMap = kotlin_kotlin.$_$.z2;
  var listOf = kotlin_kotlin.$_$.v1;
  var Triple = kotlin_kotlin.$_$.e6;
  var addAll = kotlin_kotlin.$_$.x;
  var hashCode = kotlin_kotlin.$_$.y3;
  var Pair = kotlin_kotlin.$_$.c6;
  var Set = kotlin_kotlin.$_$.w;
  var equals = kotlin_kotlin.$_$.t3;
  var plus_2 = kotlin_kotlin.$_$.d2;
  var copyToArray = kotlin_kotlin.$_$.e1;
  var Comparator = kotlin_kotlin.$_$.y5;
  var compareValues = kotlin_kotlin.$_$.i3;
  var minus_0 = kotlin_kotlin.$_$.z1;
  var listOf_0 = kotlin_kotlin.$_$.u1;
  var fillArrayVal = kotlin_kotlin.$_$.u3;
  var toIntArray = kotlin_kotlin.$_$.u2;
  var coerceAtLeast = kotlin_kotlin.$_$.o4;
  var KProperty1 = kotlin_kotlin.$_$.t4;
  var getPropertyCallableRef = kotlin_kotlin.$_$.w3;
  var toSet_1 = kotlin_kotlin.$_$.c3;
  var replace = kotlin_kotlin.$_$.o5;
  var emptyList = kotlin_kotlin.$_$.h1;
  var dropLast = kotlin_kotlin.$_$.f1;
  var last = kotlin_kotlin.$_$.t1;
  var plus_3 = kotlin_kotlin.$_$.i2;
  var removeAll = kotlin_kotlin.$_$.k2;
  var toMutableList = kotlin_kotlin.$_$.y2;
  var takeLast = kotlin_kotlin.$_$.q2;
  var firstOrNull = kotlin_kotlin.$_$.k1;
  var drop = kotlin_kotlin.$_$.g1;
  var first = kotlin_kotlin.$_$.m1;
  var mutableSetOf = kotlin_kotlin.$_$.b2;
  var toSet_2 = kotlin_kotlin.$_$.c5;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.j;
  var substring = kotlin_kotlin.$_$.u5;
  var get_lastIndex = kotlin_kotlin.$_$.s1;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.i;
  var first_0 = kotlin_kotlin.$_$.l1;
  var startsWith = kotlin_kotlin.$_$.r5;
  var drop_0 = kotlin_kotlin.$_$.f5;
  var dropLast_0 = kotlin_kotlin.$_$.e5;
  var lines = kotlin_kotlin.$_$.k5;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.k;
  var booleanArray = kotlin_kotlin.$_$.n3;
  var booleanArrayOf = kotlin_kotlin.$_$.m3;
  var first_1 = kotlin_kotlin.$_$.g5;
  var last_0 = kotlin_kotlin.$_$.j5;
  var asReversed = kotlin_kotlin.$_$.y;
  var until = kotlin_kotlin.$_$.q4;
  var toBooleanArray = kotlin_kotlin.$_$.r2;
  var toString_0 = kotlin_kotlin.$_$.q;
  var union = kotlin_kotlin.$_$.e3;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.p;
  var asSequence = kotlin_kotlin.$_$.z;
  var map = kotlin_kotlin.$_$.y4;
  var plus_4 = kotlin_kotlin.$_$.z4;
  var filter = kotlin_kotlin.$_$.w4;
  var isBlank = kotlin_kotlin.$_$.i5;
  var plus_5 = kotlin_kotlin.$_$.g2;
  var Default_getInstance = kotlin_kotlin.$_$.r;
  var random = kotlin_kotlin.$_$.j2;
  var flatMap = kotlin_kotlin.$_$.x4;
  var distinct = kotlin_kotlin.$_$.v4;
  var shuffled = kotlin_kotlin.$_$.n2;
  var sequenceOf = kotlin_kotlin.$_$.a5;
  var toDoubleArray = kotlin_kotlin.$_$.t2;
  var toLong = kotlin_kotlin.$_$.l4;
  var Long = kotlin_kotlin.$_$.a6;
  var mapOf = kotlin_kotlin.$_$.x1;
  var plus_6 = kotlin_kotlin.$_$.c2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.l;
  var getOrNull = kotlin_kotlin.$_$.o1;
  var toList_0 = kotlin_kotlin.$_$.w2;
  var downTo = kotlin_kotlin.$_$.p4;
  var windowed = kotlin_kotlin.$_$.f3;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.m;
  var firstOrNull_0 = kotlin_kotlin.$_$.j1;
  var getObjectHashCode = kotlin_kotlin.$_$.v3;
  var chunked = kotlin_kotlin.$_$.b1;
  var sorted = kotlin_kotlin.$_$.p2;
  var sequence = kotlin_kotlin.$_$.b5;
  var CoroutineImpl = kotlin_kotlin.$_$.k3;
  var SequenceScope = kotlin_kotlin.$_$.u4;
  var minus_1 = kotlin_kotlin.$_$.y1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.j3;
  var initMetadataForLambda = kotlin_kotlin.$_$.c4;
  var initMetadataForObject = kotlin_kotlin.$_$.d4;
  var toDoubleArray_0 = kotlin_kotlin.$_$.s2;
  var contentEquals = kotlin_kotlin.$_$.d1;
  var newThrowable = kotlin_kotlin.$_$.g4;
  var stackTraceToString = kotlin_kotlin.$_$.h6;
  var Map = kotlin_kotlin.$_$.v;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(LRUCache, 'LRUCache', LRUCache);
  function G1() {
    var tmp = this.pk();
    // Inline function 'kotlin.collections.setOf' call
    return tmp(emptySet());
  }
  function G2(graphs) {
    return this.G4(toList_0(graphs));
  }
  function G3(vertices) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(vertices.length);
    var inductionVariable = 0;
    var last = vertices.length;
    while (inductionVariable < last) {
      var item = vertices[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'ai.hypergraph.kaliningraph.types.IGF.G.<anonymous>' call
      var tmp$ret$0 = get_graph(item);
      destination.e(tmp$ret$0);
    }
    return this.G4(destination);
  }
  function G4(list) {
    // Inline function 'kotlin.let' call
    var tmp;
    if (list.l()) {
      // Inline function 'kotlin.collections.setOf' call
      tmp = emptySet();
    } else if (allAre(list, this.G1())) {
      // Inline function 'kotlin.collections.fold' call
      var accumulator = this.G1();
      var tmp0_iterator = list.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.types.IGF.G.<anonymous>' call
        accumulator = accumulator.tk(isInterface(element, IGraph) ? element : THROW_CCE());
      }
      tmp = accumulator;
    } else if (allAre(list, first_0(list))) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(list, 10));
      var tmp0_iterator_0 = list.h();
      while (tmp0_iterator_0.i()) {
        var item = tmp0_iterator_0.j();
        // Inline function 'ai.hypergraph.kaliningraph.types.IGF.G.<anonymous>' call
        var tmp$ret$3 = isInterface(item, IVertex) ? item : THROW_CCE();
        destination.e(tmp$ret$3);
      }
      tmp = toSet_0(destination);
    } else {
      throw Exception_init_$Create$('Unsupported constructor: G(' + joinToString(list, ',', VOID, VOID, VOID, VOID, IGF$G$lambda) + ')');
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.IGF.G.<anonymous>' call
    var it = tmp;
    return this.pk()(it);
  }
  initMetadataForInterface(IGF, 'IGF');
  initMetadataForClass(AGF, 'AGF', VOID, VOID, [IGF]);
  function get_index() {
    return new VIndex(this.hk());
  }
  function get(vertexIdx) {
    return this.sk().m(vertexIdx);
  }
  function plus_7(that) {
    return this.pk()(plus_1(plus_1(this.uk(that), this.vk(that)), minus_0(that, this)));
  }
  function minus_2(graph) {
    return this.pk()(minus_0(this.hk(), graph.hk()));
  }
  function join(that) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.sortedBy' call
    var this_0 = intersect(this.hk(), that.hk());
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = IGraph$join$lambda;
    var tmp$ret$0 = new sam$kotlin_Comparator$0_3(tmp);
    var tmp$ret$1 = sortedWith(this_0, tmp$ret$0);
    var tmp_0 = toSet_0(tmp$ret$1);
    // Inline function 'kotlin.collections.sortedBy' call
    var this_1 = intersect(that.hk(), this.hk());
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_1 = IGraph$join$lambda_0;
    var tmp$ret$2 = new sam$kotlin_Comparator$0_3(tmp_1);
    var tmp$ret$3 = sortedWith(this_1, tmp$ret$2);
    var this_2 = zip(tmp_0, toSet_0(tmp$ret$3));
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator = this_2.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.join.<anonymous>' call
      var left = item.hc();
      var right = item.ic();
      var tmp_2 = this.rk();
      var tmp$ret$4 = tmp_2(left, IGraph$join$lambda_1(left, right));
      destination.e(tmp$ret$4);
    }
    return toSet_0(destination);
  }
  function reversed() {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.associateWith' call
    var this_0 = this.hk();
    var result = LinkedHashMap_init_$Create$_1(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
    // Inline function 'kotlin.collections.associateWithTo' call
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.reversed.<anonymous>' call
      // Inline function 'kotlin.collections.setOf' call
      var tmp$ret$1 = emptySet();
      result.v3(element, tmp$ret$1);
    }
    var tmp = result;
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var this_1 = this.hk();
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = this_1.h();
    while (tmp0_iterator_0.i()) {
      var element_0 = tmp0_iterator_0.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.reversed.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_2 = get_outgoing(element_0);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
      var tmp0_iterator_1 = this_2.h();
      while (tmp0_iterator_1.i()) {
        var item = tmp0_iterator_1.j();
        // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.reversed.<anonymous>.<anonymous>' call
        var tmp$ret$4 = to(item.zl(), this.qk()(item.zl(), element_0));
        destination_0.e(tmp$ret$4);
      }
      var list = destination_0;
      addAll(destination, list);
    }
    // Inline function 'kotlin.collections.groupByTo' call
    var destination_1 = LinkedHashMap_init_$Create$();
    var tmp0_iterator_2 = destination.h();
    while (tmp0_iterator_2.i()) {
      var element_1 = tmp0_iterator_2.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.reversed.<anonymous>' call
      var key = element_1.fc_1;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination_1.u1(key);
      var tmp_0;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination_1.v3(key, answer);
        tmp_0 = answer;
      } else {
        tmp_0 = value;
      }
      var list_0 = tmp_0;
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.reversed.<anonymous>' call
      var tmp$ret$13 = element_1.gc_1;
      list_0.e(tmp$ret$13);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_2 = LinkedHashMap_init_$Create$_1(mapCapacity(destination_1.k()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_3 = destination_1.w1().h();
    while (tmp0_iterator_3.i()) {
      var element_2 = tmp0_iterator_3.j();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_1 = element_2.q1();
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.reversed.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var v = element_2.r1();
      var tmp$ret$18 = toSet_0(v);
      destination_2.v3(tmp_1, tmp$ret$18);
    }
    var this_3 = plus_6(tmp, destination_2);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_3 = ArrayList_init_$Create$(this_3.k());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_4 = this_3.w1().h();
    while (tmp0_iterator_4.i()) {
      var item_0 = tmp0_iterator_4.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.reversed.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = item_0.q1();
      // Inline function 'kotlin.collections.component2' call
      var v_0 = item_0.r1();
      var tmp_2 = this.rk();
      var tmp$ret$25 = tmp_2(k, IGraph$reversed$lambda(v_0));
      destination_3.e(tmp$ret$25);
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.reversed.<anonymous>' call
    var it = toSet_0(destination_3);
    return this.pk()(it);
  }
  function isomorphicTo(that) {
    return (this.k() === that.k() ? get_edges(this).k() === get_edges(that).k() : false) ? contentEquals(this.mk(), that.mk()) : false;
  }
  function vwise(lf) {
    var tmp = this.k();
    return DoubleMatrix_init_$Create$(tmp, VOID, IGraph$vwise$lambda(this, lf));
  }
  function transitiveClosure(vtxs) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = get_edgList(this);
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.transitiveClosure.<anonymous>' call
      if (vtxs.a1(element.fc_1)) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
    var tmp0_iterator_0 = destination.h();
    while (tmp0_iterator_0.i()) {
      var item = tmp0_iterator_0.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.transitiveClosure.<anonymous>' call
      var tmp$ret$3 = item.gc_1.zl();
      destination_0.e(tmp$ret$3);
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.transitiveClosure.<anonymous>' call
    var it = minus_0(toSet_0(destination_0), vtxs);
    return it.l() ? vtxs : this.yk(plus_1(vtxs, it));
  }
  function asString() {
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_edgList(this);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.asString.<anonymous>' call
      var tmp$ret$0 = '' + item.fc_1 + ' -> ' + item.gc_1.zl();
      destination.e(tmp$ret$0);
    }
    return formatAsGrid(destination).toString();
  }
  initMetadataForInterface(IGraph, 'IGraph', VOID, VOID, [IGF, Set]);
  initMetadataForClass(Graph, 'Graph', VOID, AGF, [AGF, IGraph, Set]);
  function get_E0() {
    return LGFamily$_get_E_$lambda_nhvv0c;
  }
  function get_G0() {
    return LGFamily$_get_G_$lambda_c8zum2;
  }
  function get_V0() {
    return LGFamily$_get_V_$lambda_yfzuln;
  }
  initMetadataForInterface(LGFamily, 'LGFamily', VOID, VOID, [IGF]);
  initMetadataForClass(LabeledGraph, 'LabeledGraph', LabeledGraph, Graph, [Graph, LGFamily]);
  initMetadataForCompanion(Companion, LabeledGraph);
  initMetadataForClass(LGBuilder, 'LGBuilder');
  function neighbors(k, vertices) {
    var tmp;
    if (k === 0 ? true : equals(neighbors_0(vertices, this), vertices)) {
      tmp = vertices;
    } else {
      var tmp_0 = k - 1 | 0;
      var tmp_1 = plus_1(vertices, neighbors_0(vertices, this));
      tmp = this.ql(tmp_0, plus_0(tmp_1, isInterface(this, IVertex) ? this : THROW_CCE()));
    }
    return tmp;
  }
  function neighbors$default(k, vertices, $super) {
    k = k === VOID ? 0 : k;
    var tmp;
    if (vertices === VOID) {
      var tmp_0 = get_neighbors(this);
      tmp = plus_0(tmp_0, isInterface(this, IVertex) ? this : THROW_CCE());
    } else {
      tmp = vertices;
    }
    vertices = tmp;
    return $super === VOID ? this.ql(k, vertices) : neighbors(k, vertices);
  }
  initMetadataForInterface(IVertex, 'IVertex', VOID, VOID, [IGF]);
  initMetadataForClass(Vertex, 'Vertex', VOID, AGF, [AGF, IVertex]);
  initMetadataForClass(LGVertex, 'LGVertex', LGVertex_init_$Create$, Vertex, [Vertex, LGFamily]);
  initMetadataForClass(Edge, 'Edge', VOID, AGF, [AGF, IGF]);
  initMetadataForClass(LabeledEdge, 'LabeledEdge', VOID, Edge, [Edge, LGFamily]);
  initMetadataForClass(BiMap, 'BiMap');
  initMetadataForClass(Bindex, 'Bindex', VOID, VOID, [List]);
  initMetadataForClass(JoinMap, 'JoinMap');
  initMetadataForClass(FrozenCFG, 'FrozenCFG', VOID, VOID, [Set]);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator]);
  initMetadataForClass(CFL, 'CFL');
  initMetadataForClass(REL, 'REL');
  initMetadataForClass(CJL, 'CJL');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator]);
  initMetadataForClass(sam$kotlin_Comparator$0_1, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator]);
  initMetadataForClass(Segmentation, 'Segmentation', Segmentation);
  initMetadataForClass(sam$kotlin_Comparator$0_2, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator]);
  initMetadataForClass(Tree, 'Tree');
  initMetadataForCompanion(Companion_1);
  function shape() {
    return cc(this.si(), this.ti());
  }
  function plus_8(t) {
    var tmp = equals(this.ep(), t.ep());
    return this.gp(t, VOID, tmp, Matrix$plus$lambda(this, t));
  }
  function new$default(rows, cols, data, alg, $super) {
    rows = rows === VOID ? this.si() : rows;
    cols = cols === VOID ? this.ti() : cols;
    alg = alg === VOID ? this.to() : alg;
    return $super === VOID ? this.xo(rows, cols, data, alg) : $super.xo.call(this, rows, cols, data, alg);
  }
  function safeJoin(that, ids, criteria, op) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!criteria) {
      // Inline function 'ai.hypergraph.kaliningraph.tensor.Matrix.safeJoin.<anonymous>' call
      var message = 'Dimension mismatch: ' + this.si() + ',' + this.ti() + ' . ' + that.si() + ',' + that.ti();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.tensor.Matrix.safeJoin.<anonymous>' call
    var tmp = this.si();
    var tmp_0 = that.ti();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(ids, 10));
    var tmp0_iterator = ids.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.tensor.Matrix.safeJoin.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var i = item.m(0);
      // Inline function 'kotlin.collections.component2' call
      var j = item.m(1);
      var tmp$ret$3 = op(this.to(), i, j);
      destination.e(tmp$ret$3);
    }
    return this.xh(tmp, tmp_0, destination);
  }
  function safeJoin$default(that, ids, criteria, op, $super) {
    ids = ids === VOID ? allPairs(this.si(), that.ti()) : ids;
    return $super === VOID ? this.fp(that, ids, criteria, op) : safeJoin(that, ids, criteria, op);
  }
  function get_0(r, c) {
    return this.wh().m(imul(r, this.ti()) + c | 0);
  }
  function get_1(r) {
    return toList(this.wh()).p1(imul(r, this.ti()), imul(r, this.ti()) + this.ti() | 0);
  }
  initMetadataForInterface(Matrix, 'Matrix');
  initMetadataForClass(AbstractMatrix, 'AbstractMatrix', VOID, VOID, [Matrix]);
  initMetadataForClass(DoubleMatrix, 'DoubleMatrix', VOID, AbstractMatrix);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(UTMatrix, 'UTMatrix', VOID, AbstractMatrix);
  initMetadataForClass(FreeMatrix, 'FreeMatrix', VOID, AbstractMatrix);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(BooleanMatrix, 'BooleanMatrix', VOID, AbstractMatrix);
  initMetadataForInterface(VT, 'VT', VOID, VOID, [List]);
  initMetadataForClass(of, 'of', VOID, VOID, [VT, List]);
  initMetadataForLambda(powerset$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(S, 'S');
  initMetadataForObject(O, 'O', VOID, S);
  initMetadataForClass(VIndex, 'VIndex');
  initMetadataForClass(sam$kotlin_Comparator$0_3, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator]);
  initMetadataForClass(sam$kotlin_properties_ReadOnlyProperty$0, 'sam$kotlin_properties_ReadOnlyProperty$0');
  initMetadataForInterface(Ring, 'Ring');
  initMetadataForInterface(Field, 'Field', VOID, VOID, [Ring]);
  initMetadataForClass(of_0, 'of', VOID, VOID, [Field]);
  initMetadataForClass(of_1, 'of', VOID, VOID, [Ring]);
  //endregion
  var ACT_TANH;
  var NORM_AVG;
  function elwise(_this__u8e3s4, op) {
    _init_properties_CommonUtils_kt__3s0my4();
    // Inline function 'kotlin.collections.map' call
    var this_0 = _this__u8e3s4.wh();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.elwise.<anonymous>' call
      var tmp$ret$0 = op(item);
      destination.e(tmp$ret$0);
    }
    return _this__u8e3s4.xh(VOID, VOID, destination);
  }
  function meanNorm(_this__u8e3s4) {
    _init_properties_CommonUtils_kt__3s0my4();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.fold' call
    var this_0 = _this__u8e3s4.wh();
    var accumulator = VT_0(0.0, 0.0, 0.0);
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.meanNorm.<anonymous>' call
      var destruct = accumulator;
      // Inline function 'kotlin.collections.component1' call
      var a = destruct.m(0);
      // Inline function 'kotlin.collections.component2' call
      var b = destruct.m(1);
      // Inline function 'kotlin.collections.component3' call
      var c = destruct.m(2);
      var tmp = a + element / _this__u8e3s4.wh().k();
      // Inline function 'kotlin.math.min' call
      var tmp_0 = Math.min(b, element);
      // Inline function 'kotlin.math.max' call
      var tmp$ret$4 = Math.max(c, element);
      accumulator = VT_0(tmp, tmp_0, tmp$ret$4);
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.meanNorm.<anonymous>' call
    var destruct_0 = accumulator;
    // Inline function 'kotlin.collections.component1' call
    var μ = destruct_0.m(0);
    // Inline function 'kotlin.collections.component2' call
    var min = destruct_0.m(1);
    // Inline function 'kotlin.collections.component3' call
    var max = destruct_0.m(2);
    return elwise(_this__u8e3s4, meanNorm$lambda(μ, max, min));
  }
  function kroneckerDelta(i, j) {
    _init_properties_CommonUtils_kt__3s0my4();
    return i === j ? 1.0 : 0.0;
  }
  function toDoubleMatrix(_this__u8e3s4) {
    _init_properties_CommonUtils_kt__3s0my4();
    var tmp = _this__u8e3s4.length;
    var tmp_0 = _this__u8e3s4[0].length;
    return DoubleMatrix_init_$Create$(tmp, tmp_0, toDoubleMatrix$lambda(_this__u8e3s4));
  }
  function vectorize(_this__u8e3s4, len) {
    len = len === VOID ? 20 : len;
    _init_properties_CommonUtils_kt__3s0my4();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.vectorize.<anonymous>' call
    var it = Random(getStringHashCode(_this__u8e3s4));
    return randomVector(len, vectorize$lambda(it));
  }
  function allAre(_this__u8e3s4, that) {
    _init_properties_CommonUtils_kt__3s0my4();
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(_this__u8e3s4, Collection)) {
        tmp = _this__u8e3s4.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = _this__u8e3s4.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.allAre.<anonymous>' call
        if (!isA(element, that)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  function isA(_this__u8e3s4, that) {
    _init_properties_CommonUtils_kt__3s0my4();
    var tmp;
    var tmp_0;
    if (!isInterface(_this__u8e3s4, KClass)) {
      tmp_0 = !isInterface(that, KClass);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = getKClassFromExpression(_this__u8e3s4).m8(that);
    } else {
      var tmp_1;
      if (!isInterface(_this__u8e3s4, KClass)) {
        tmp_1 = isInterface(that, KClass);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp = getKClassFromExpression(_this__u8e3s4).m8(that);
      } else {
        var tmp_2;
        if (isInterface(_this__u8e3s4, KClass)) {
          tmp_2 = isInterface(that, KClass);
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          tmp = _this__u8e3s4.m8(that);
        } else {
          var tmp_3;
          if (isInterface(_this__u8e3s4, KClass)) {
            tmp_3 = !isInterface(that, KClass);
          } else {
            tmp_3 = false;
          }
          if (tmp_3) {
            tmp = _this__u8e3s4.m8(that);
          } else {
            throw new NotImplementedError();
          }
        }
      }
    }
    return tmp;
  }
  function ACT_TANH$lambda(it) {
    _init_properties_CommonUtils_kt__3s0my4();
    return elwise(it, ACT_TANH$lambda$lambda);
  }
  function ACT_TANH$lambda$lambda(it) {
    _init_properties_CommonUtils_kt__3s0my4();
    // Inline function 'kotlin.math.tanh' call
    return tanh(it);
  }
  function NORM_AVG$lambda(it) {
    _init_properties_CommonUtils_kt__3s0my4();
    return meanNorm(it);
  }
  function meanNorm$lambda($μ, $max, $min) {
    return function (e) {
      return (e - $μ) / ($max - $min);
    };
  }
  function toDoubleMatrix$lambda($this_toDoubleMatrix) {
    return function (i, j) {
      return $this_toDoubleMatrix[i][j];
    };
  }
  function vectorize$lambda($it) {
    return function () {
      return $it.bg();
    };
  }
  var properties_initialized_CommonUtils_kt_cxugc6;
  function _init_properties_CommonUtils_kt__3s0my4() {
    if (!properties_initialized_CommonUtils_kt_cxugc6) {
      properties_initialized_CommonUtils_kt_cxugc6 = true;
      ACT_TANH = ACT_TANH$lambda;
      NORM_AVG = NORM_AVG$lambda;
    }
  }
  var BRACKETS;
  var JUST_PARENS;
  function formatAsGrid(_this__u8e3s4, cols) {
    cols = cols === VOID ? -1 : cols;
    _init_properties_StringUtils_kt__hudgtq();
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.groupByTo' call
    var destination = LinkedHashMap_init_$Create$();
    var tmp0_iterator = _this__u8e3s4.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.<anonymous>' call
      var key = formatAsGrid$LHS(element);
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.u1(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination.v3(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.e(element);
    }
    var groups = destination;
    return formatAsGrid$rec(_this__u8e3s4, cols, groups);
  }
  function splitProd(_this__u8e3s4) {
    _init_properties_StringUtils_kt__hudgtq();
    // Inline function 'kotlin.collections.map' call
    var this_0 = split(replaceFirst(_this__u8e3s4, '->', '\u2192'), charArrayOf([_Char___init__impl__6a9atx(8594)]));
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.splitProd.<anonymous>' call
      // Inline function 'kotlin.text.trim' call
      var tmp$ret$1 = toString(trim(isCharSequence(item) ? item : THROW_CCE()));
      destination.e(tmp$ret$1);
    }
    return destination;
  }
  function formatAsGrid$tok(_this__u8e3s4) {
    return splitProd(_this__u8e3s4);
  }
  function formatAsGrid$LHS(_this__u8e3s4) {
    return formatAsGrid$tok(_this__u8e3s4).m(0);
  }
  function formatAsGrid$rec(_this__u8e3s4, $cols, groups) {
    var tmp;
    if ($cols === -1) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.collections.minBy' call
        // Inline function 'kotlin.collections.map' call
        var this_0 = numberRangeToNumber(3, 5);
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
        var tmp0_iterator = this_0.h();
        while (tmp0_iterator.i()) {
          var item = tmp0_iterator.j();
          // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>' call
          var tmp$ret$0 = formatAsGrid(_this__u8e3s4, item);
          destination.e(tmp$ret$0);
        }
        var iterator = destination.h();
        if (!iterator.i())
          throw NoSuchElementException_init_$Create$();
        var minElem = iterator.j();
        if (!iterator.i()) {
          tmp$ret$3 = minElem;
          break $l$block;
        }
        // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>' call
        var minValue = minElem.toString().length;
        do {
          var e = iterator.j();
          // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>' call
          var v = e.toString().length;
          if (compareTo(minValue, v) > 0) {
            minElem = e;
            minValue = v;
          }
        }
         while (iterator.i());
        tmp$ret$3 = minElem;
      }
      tmp = tmp$ret$3;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.let' call
      var tmp_0 = formatAsGrid$rec$lambda(groups);
      var tmp_1 = formatAsGrid$rec$lambda_0(groups);
      var tmp_2 = formatAsGrid$rec$lambda_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>' call
      var productions = sortedWith(_this__u8e3s4, compareBy([tmp_0, tmp_1, tmp_2, formatAsGrid$rec$lambda_2]));
      // Inline function 'kotlin.math.ceil' call
      var x = productions.k() / $cols;
      var tmp$ret$6 = Math.ceil(x);
      var _destruct__k2r9zo = to($cols, numberToInt(tmp$ret$6));
      var cols = _destruct__k2r9zo.hc();
      var rows = _destruct__k2r9zo.ic();
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = imul(cols, rows) - productions.k() | 0;
      var list = ArrayList_init_$Create$(size);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < size)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>.<anonymous>' call
          list.e('');
        }
         while (inductionVariable < size);
      var padded = plus(productions, list);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>' call
      var up = get_transpose(new FreeMatrix(cols, rows, padded));
      var tmp_3 = up.si();
      var tmp_4 = up.ti();
      tmp = FreeMatrix_init_$Create$(tmp_3, tmp_4, formatAsGrid$rec$lambda_3(up));
    }
    return tmp;
  }
  function formatAsGrid$rec$lambda($groups) {
    return function (it) {
      // Inline function 'kotlin.collections.maxOf' call
      var iterator = ensureNotNull($groups.u1(formatAsGrid$LHS(it))).h();
      if (!iterator.i())
        throw NoSuchElementException_init_$Create$();
      // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>.<anonymous>' call
      var maxValue = iterator.j().length;
      while (iterator.i()) {
        // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>.<anonymous>' call
        var v = iterator.j().length;
        if (compareTo(maxValue, v) < 0) {
          maxValue = v;
        }
      }
      return maxValue;
    };
  }
  function formatAsGrid$rec$lambda_0($groups) {
    return function (it) {
      return -ensureNotNull($groups.u1(formatAsGrid$LHS(it))).k() | 0;
    };
  }
  function formatAsGrid$rec$lambda_1(it) {
    _init_properties_StringUtils_kt__hudgtq();
    return formatAsGrid$LHS(it);
  }
  function formatAsGrid$rec$lambda_2(it) {
    _init_properties_StringUtils_kt__hudgtq();
    return it.length;
  }
  function formatAsGrid$rec$lambda_3($up) {
    return function (r, c) {
      var tmp;
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = $up.ui(r, c);
      if (charSequenceLength(this_0) === 0) {
        return '';
      }
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>.<anonymous>.<anonymous>' call
      var it = splitProd($up.ui(r, c));
      var _destruct__k2r9zo = to(it.m(0), it.m(1));
      var lhs = _destruct__k2r9zo.hc();
      var rhs = _destruct__k2r9zo.ic();
      // Inline function 'kotlin.collections.maxOf' call
      var iterator = get_transpose($up).m(c).h();
      if (!iterator.i())
        throw NoSuchElementException_init_$Create$();
      // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>.<anonymous>.<anonymous>' call
      var it_0 = iterator.j();
      var maxValue = substringBefore(it_0, ' -> ').length;
      while (iterator.i()) {
        // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>.<anonymous>.<anonymous>' call
        var it_1 = iterator.j();
        var v = substringBefore(it_1, ' -> ').length;
        if (compareTo(maxValue, v) < 0) {
          maxValue = v;
        }
      }
      var tmp$ret$5 = maxValue;
      var lp = padStart(lhs, tmp$ret$5);
      // Inline function 'kotlin.collections.maxOf' call
      var iterator_0 = get_transpose($up).m(c).h();
      if (!iterator_0.i())
        throw NoSuchElementException_init_$Create$();
      // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>.<anonymous>.<anonymous>' call
      var it_2 = iterator_0.j();
      var maxValue_0 = substringAfter(it_2, ' -> ').length;
      while (iterator_0.i()) {
        // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>.<anonymous>.<anonymous>' call
        var it_3 = iterator_0.j();
        var v_0 = substringAfter(it_3, ' -> ').length;
        if (compareTo(maxValue_0, v_0) < 0) {
          maxValue_0 = v_0;
        }
      }
      var tmp$ret$8 = maxValue_0;
      var rp = padEnd(rhs, tmp$ret$8);
      return lp + ' \u2192 ' + rp;
    };
  }
  var properties_initialized_StringUtils_kt_t01dyo;
  function _init_properties_StringUtils_kt__hudgtq() {
    if (!properties_initialized_StringUtils_kt_t01dyo) {
      properties_initialized_StringUtils_kt_t01dyo = true;
      BRACKETS = toSet(toCharArray('()[]{}<>'));
      JUST_PARENS = toSet(toCharArray('()[]{}'));
    }
  }
  function trimToSize($this) {
    if ($this.yi_1 <= $this.vi_1 ? true : $this.xi_1.l())
      return Unit_instance;
    try {
      var toEvict = $this.xi_1.w1().h().j();
      var key = toEvict.q1();
      var value = toEvict.r1();
      $this.xi_1.l4(key);
      $this.yi_1 = $this.yi_1 - $this.wi_1(key, value) | 0;
      trimToSize($this);
    } catch ($p) {
      if ($p instanceof Exception) {
        var _unused_var__etf5q3 = $p;
      } else {
        throw $p;
      }
    }
  }
  function LRUCache$_init_$lambda_wrqm0(_unused_var__etf5q3, _unused_var__etf5q3_0) {
    return 1;
  }
  function LRUCache(maxSize, sizeOf) {
    maxSize = maxSize === VOID ? 10000 : maxSize;
    var tmp;
    if (sizeOf === VOID) {
      tmp = LRUCache$_init_$lambda_wrqm0;
    } else {
      tmp = sizeOf;
    }
    sizeOf = tmp;
    this.vi_1 = maxSize;
    this.wi_1 = sizeOf;
    this.xi_1 = LinkedHashMap_init_$Create$_0(0, 0.75);
    this.yi_1 = 0;
  }
  protoOf(LRUCache).zi = function (key, value) {
    var tmp0_elvis_lhs = this.xi_1.u1(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = value();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.cache.LRUCache.getOrPut.<anonymous>' call
      this.v3(key, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(LRUCache).u1 = function (key) {
    return this.xi_1.u1(key);
  };
  protoOf(LRUCache).v3 = function (key, value) {
    this.yi_1 = this.yi_1 + this.wi_1(key, value) | 0;
    var prev = this.xi_1.v3(key, value);
    if (prev == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.yi_1 = this.yi_1 - this.wi_1(key, prev) | 0;
    }
    trimToSize(this);
    return prev;
  };
  protoOf(LRUCache).toString = function () {
    return '' + this.yi_1 + '/' + this.vi_1 + ' cached=' + this.xi_1;
  };
  function LabeledGraph_init_$Init$(builder, $this) {
    // Inline function 'kotlin.also' call
    var this_0 = new LGBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.graphs.LabeledGraph.<init>.<anonymous>' call
    builder(this_0);
    LabeledGraph.call($this, this_0.aj_1.bk());
    return $this;
  }
  function LabeledGraph_init_$Create$(builder) {
    return LabeledGraph_init_$Init$(builder, objectCreate(protoOf(LabeledGraph)));
  }
  function Companion() {
    Companion_instance = this;
    LabeledGraph.call(this);
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function LabeledGraph(vertices) {
    Companion_getInstance();
    var tmp;
    if (vertices === VOID) {
      // Inline function 'kotlin.collections.setOf' call
      tmp = emptySet();
    } else {
      tmp = vertices;
    }
    vertices = tmp;
    Graph.call(this, vertices);
    this.ek_1 = vertices;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.fk_1 = LinkedHashSet_init_$Create$();
    this.gk_1 = '';
  }
  protoOf(LabeledGraph).hk = function () {
    return this.ek_1;
  };
  function LGBuilder$minus$lambda($v, $this_minus) {
    return function (it) {
      return plus_0(get_outgoing($v), LabeledEdge_init_$Create$($v, $this_minus));
    };
  }
  function LGBuilder() {
    this.aj_1 = new LabeledGraph();
    this.bj_1 = LGVertex_init_$Create$();
    this.cj_1 = LGVertex_init_$Create$();
    this.dj_1 = LGVertex_init_$Create$();
    this.ej_1 = LGVertex_init_$Create$();
    this.fj_1 = LGVertex_init_$Create$();
    this.gj_1 = LGVertex_init_$Create$();
    this.hj_1 = LGVertex_init_$Create$();
    this.ij_1 = LGVertex_init_$Create$();
    this.jj_1 = LGVertex_init_$Create$();
    this.kj_1 = LGVertex_init_$Create$();
    this.lj_1 = LGVertex_init_$Create$();
    this.mj_1 = LGVertex_init_$Create$();
    this.nj_1 = LGVertex_init_$Create$();
    this.oj_1 = LGVertex_init_$Create$();
    this.pj_1 = LGVertex_init_$Create$();
    this.qj_1 = LGVertex_init_$Create$();
    this.rj_1 = LGVertex_init_$Create$();
    this.sj_1 = LGVertex_init_$Create$();
    this.tj_1 = LGVertex_init_$Create$();
    this.uj_1 = LGVertex_init_$Create$();
    this.vj_1 = LGVertex_init_$Create$();
    this.wj_1 = LGVertex_init_$Create$();
    this.xj_1 = LGVertex_init_$Create$();
    this.yj_1 = LGVertex_init_$Create$();
    this.zj_1 = LGVertex_init_$Create$();
    this.ak_1 = LGVertex_init_$Create$();
  }
  protoOf(LGBuilder).al = function (_this__u8e3s4, v) {
    // Inline function 'kotlin.also' call
    var tmp = _this__u8e3s4.rk();
    var this_0 = tmp(v, LGBuilder$minus$lambda(v, _this__u8e3s4));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.graphs.LGBuilder.minus.<anonymous>' call
    this.aj_1 = this.aj_1.tk(get_graph(this_0));
    return this_0;
  };
  protoOf(LGBuilder).bl = function (_this__u8e3s4, v) {
    return this.al(LGVertex_init_$Create$(_this__u8e3s4), LGVertex_init_$Create$(v));
  };
  function LGVertex_init_$Init$(label, id, out, $this) {
    label = label === VOID ? '#RGEN_' + randomString() : label;
    id = id === VOID ? label : id;
    out = out === VOID ? emptySet() : out;
    LGVertex.call($this, label, id, LGVertex$_init_$lambda_777syc(out, label));
    return $this;
  }
  function LGVertex_init_$Create$(label, id, out) {
    return LGVertex_init_$Init$(label, id, out, objectCreate(protoOf(LGVertex)));
  }
  function LGVertex_init_$Init$_0(lgv, edgeMap, $this) {
    LGVertex.call($this, lgv.jl(), lgv.kl(), edgeMap);
    return $this;
  }
  function LGVertex_init_$Create$_0(lgv, edgeMap) {
    return LGVertex_init_$Init$_0(lgv, edgeMap, objectCreate(protoOf(LGVertex)));
  }
  function LGVertex$_init_$lambda_777syc($out, $label) {
    return function (s) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = $out;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.h();
      while (tmp0_iterator.i()) {
        var item = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.graphs.LGVertex.<init>.<anonymous>.<anonymous>' call
        var tmp$ret$0 = new LabeledEdge(s, item, substringBefore($label, '#RGEN_'));
        destination.e(tmp$ret$0);
      }
      return toSet_0(destination);
    };
  }
  function LGVertex(label, id, edgeMap) {
    label = label === VOID ? '' : label;
    id = id === VOID ? label : id;
    Vertex.call(this, id);
    this.fl_1 = label;
    this.gl_1 = id;
    this.hl_1 = edgeMap;
    this.il_1 = false;
  }
  protoOf(LGVertex).jl = function () {
    return this.fl_1;
  };
  protoOf(LGVertex).kl = function () {
    return this.gl_1;
  };
  protoOf(LGVertex).ll = function () {
    return this.hl_1;
  };
  protoOf(LGVertex).mk = function () {
    return vectorize(this.jl());
  };
  protoOf(LGVertex).toString = function () {
    return this.jl();
  };
  function LabeledEdge_init_$Init$(source, target, $this) {
    LabeledEdge.call($this, source, target, null);
    return $this;
  }
  function LabeledEdge_init_$Create$(source, target) {
    return LabeledEdge_init_$Init$(source, target, objectCreate(protoOf(LabeledEdge)));
  }
  function LabeledEdge(source, target, label) {
    label = label === VOID ? null : label;
    Edge.call(this, source, target);
    this.vl_1 = source;
    this.wl_1 = target;
    this.xl_1 = label;
  }
  protoOf(LabeledEdge).yl = function () {
    return this.vl_1;
  };
  protoOf(LabeledEdge).zl = function () {
    return this.wl_1;
  };
  function LGFamily$_get_E_$lambda_nhvv0c(s, t) {
    return LabeledEdge_init_$Create$(s, t);
  }
  function LGFamily$_get_G_$lambda_c8zum2(vertices) {
    return new LabeledGraph(vertices);
  }
  function LGFamily$_get_V_$lambda_yfzuln(old, edgeMap) {
    return LGVertex_init_$Create$_0(old, edgeMap);
  }
  function LGFamily() {
  }
  function escapeHTML(_this__u8e3s4) {
    // Inline function 'kotlin.text.map' call
    // Inline function 'kotlin.text.mapTo' call
    var destination = ArrayList_init_$Create$(charSequenceLength(_this__u8e3s4));
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(_this__u8e3s4)) {
      var item = charSequenceGet(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'ai.hypergraph.kaliningraph.image.escapeHTML.<anonymous>' call
      var tmp$ret$0 = item === _Char___init__impl__6a9atx(39) ? '&apos;' : item === _Char___init__impl__6a9atx(34) ? '&quot' : item === _Char___init__impl__6a9atx(38) ? '&amp;' : item === _Char___init__impl__6a9atx(60) ? '&lt;' : item === _Char___init__impl__6a9atx(62) ? '&gt;' : new Char(item);
      destination.e(tmp$ret$0);
    }
    return joinToString(destination, '');
  }
  function get_language(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return language$delegate.am(_this__u8e3s4, language$factory());
  }
  var language$delegate;
  var delimiters$delegate;
  function get_nonterminals(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return nonterminals$delegate.am(_this__u8e3s4, nonterminals$factory());
  }
  var nonterminals$delegate;
  function get_symbols(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return symbols$delegate.am(_this__u8e3s4, symbols$factory());
  }
  var symbols$delegate;
  function get_terminals(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return terminals$delegate.am(_this__u8e3s4, terminals$factory());
  }
  var terminals$delegate;
  function get_terminalUnitProductions(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return terminalUnitProductions$delegate.am(_this__u8e3s4, terminalUnitProductions$factory());
  }
  var terminalUnitProductions$delegate;
  function get_unitProductions(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return unitProductions$delegate.am(_this__u8e3s4, unitProductions$factory());
  }
  var unitProductions$delegate;
  function get_nonterminalProductions(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return nonterminalProductions$delegate.am(_this__u8e3s4, nonterminalProductions$factory());
  }
  var nonterminalProductions$delegate;
  var unitNonterminals$delegate;
  function get_bimap(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return bimap$delegate.am(_this__u8e3s4, bimap$factory());
  }
  var bimap$delegate;
  var tmap$delegate;
  function get_vindex(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return vindex$delegate.am(_this__u8e3s4, vindex$factory());
  }
  var vindex$delegate;
  function get_bindex(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return bindex$delegate.am(_this__u8e3s4, bindex$factory());
  }
  var bindex$delegate;
  function get_normalForm(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return normalForm$delegate.am(_this__u8e3s4, normalForm$factory());
  }
  var normalForm$delegate;
  function get_depGraph(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return depGraph$delegate.am(_this__u8e3s4, depGraph$factory());
  }
  var depGraph$delegate;
  var revDepGraph$delegate;
  function get_originalForm(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return originalForm$delegate.am(_this__u8e3s4, originalForm$factory());
  }
  var originalForm$delegate;
  var nonparametricForm$delegate;
  function get_reachability(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return reachability$delegate.am(_this__u8e3s4, reachability$factory());
  }
  var reachability$delegate;
  function get_unitReachability(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return unitReachability$delegate.am(_this__u8e3s4, unitReachability$factory());
  }
  var unitReachability$delegate;
  var noNonterminalStubs$delegate;
  var noEpsilonOrNonterminalStubs$delegate;
  var parikhFPCache$delegate;
  var generators$delegate;
  var nonterminalFormulas$delegate;
  var pruneTreelikeNonterminals$delegate;
  var joinMap$delegate;
  function freeze(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    var tmp;
    if (_this__u8e3s4 instanceof FrozenCFG) {
      tmp = _this__u8e3s4;
    } else {
      tmp = new FrozenCFG(_this__u8e3s4);
    }
    return tmp;
  }
  function get_LHS(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return _this__u8e3s4.fc_1;
  }
  function get_RHS(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.<get-RHS>.<anonymous>' call
    var it = _this__u8e3s4.gc_1;
    var tmp;
    if (it.k() === 1) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(it, 10));
      var tmp0_iterator = it.h();
      while (tmp0_iterator.i()) {
        var item = tmp0_iterator.j();
        var tmp$ret$0 = _get_RHS_$stripEscapeChars_o9u6es(item);
        destination.e(tmp$ret$0);
      }
      tmp = destination;
    } else {
      tmp = it;
    }
    return tmp;
  }
  function BiMap$L2RHS$delegate$lambda($cfg) {
    return function () {
      // Inline function 'kotlin.collections.mapValues' call
      // Inline function 'kotlin.collections.groupBy' call
      // Inline function 'kotlin.collections.groupByTo' call
      var this_0 = $cfg;
      var destination = LinkedHashMap_init_$Create$();
      var tmp0_iterator = this_0.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.L2RHS$delegate.<anonymous>.<anonymous>' call
        var key = get_LHS(element);
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.u1(key);
        var tmp;
        if (value == null) {
          // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
          var answer = ArrayList_init_$Create$_0();
          destination.v3(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.L2RHS$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$3 = get_RHS(element);
        list.e(tmp$ret$3);
      }
      // Inline function 'kotlin.collections.mapValuesTo' call
      var destination_0 = LinkedHashMap_init_$Create$_1(mapCapacity(destination.k()));
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_iterator_0 = destination.w1().h();
      while (tmp0_iterator_0.i()) {
        var element_0 = tmp0_iterator_0.j();
        // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
        var tmp_0 = element_0.q1();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.L2RHS$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$7 = toSet_0(element_0.r1());
        destination_0.v3(tmp_0, tmp$ret$7);
      }
      return destination_0;
    };
  }
  function BiMap$R2LHS$delegate$lambda($cfg) {
    return function () {
      // Inline function 'kotlin.collections.mapValues' call
      // Inline function 'kotlin.collections.groupBy' call
      // Inline function 'kotlin.collections.groupByTo' call
      var this_0 = $cfg;
      var destination = LinkedHashMap_init_$Create$();
      var tmp0_iterator = this_0.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.R2LHS$delegate.<anonymous>.<anonymous>' call
        var key = get_RHS(element);
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.u1(key);
        var tmp;
        if (value == null) {
          // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
          var answer = ArrayList_init_$Create$_0();
          destination.v3(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.R2LHS$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$3 = get_LHS(element);
        list.e(tmp$ret$3);
      }
      // Inline function 'kotlin.collections.mapValuesTo' call
      var destination_0 = LinkedHashMap_init_$Create$_1(mapCapacity(destination.k()));
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_iterator_0 = destination.w1().h();
      while (tmp0_iterator_0.i()) {
        var element_0 = tmp0_iterator_0.j();
        // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
        var tmp_0 = element_0.q1();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.R2LHS$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$7 = toSet_0(element_0.r1());
        destination_0.v3(tmp_0, tmp$ret$7);
      }
      return destination_0;
    };
  }
  function BiMap$TDEPS$delegate$lambda($cfg) {
    return function () {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.collections.mutableMapOf' call
      var this_0 = LinkedHashMap_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.TDEPS$delegate.<anonymous>.<anonymous>' call
      var _iterator__ex2g4s = $cfg.h();
      while (_iterator__ex2g4s.i()) {
        var _destruct__k2r9zo = _iterator__ex2g4s.j();
        var l = _destruct__k2r9zo.hc();
        var r = _destruct__k2r9zo.ic();
        var _iterator__ex2g4s_0 = r.h();
        while (_iterator__ex2g4s_0.i()) {
          var symbol = _iterator__ex2g4s_0.j();
          // Inline function 'kotlin.collections.getOrPut' call
          var value = this_0.u1(symbol);
          var tmp;
          if (value == null) {
            // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.TDEPS$delegate.<anonymous>.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.collections.mutableSetOf' call
            var answer = LinkedHashSet_init_$Create$();
            this_0.v3(symbol, answer);
            tmp = answer;
          } else {
            tmp = value;
          }
          tmp.e(l);
        }
      }
      return this_0;
    };
  }
  function BiMap$NDEPS$delegate$lambda($cfg) {
    return function () {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.collections.mutableMapOf' call
      var this_0 = LinkedHashMap_init_$Create$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.NDEPS$delegate.<anonymous>.<anonymous>' call
      var _iterator__ex2g4s = $cfg.h();
      while (_iterator__ex2g4s.i()) {
        var _destruct__k2r9zo = _iterator__ex2g4s.j();
        var l = _destruct__k2r9zo.hc();
        var r = _destruct__k2r9zo.ic();
        var _iterator__ex2g4s_0 = r.h();
        while (_iterator__ex2g4s_0.i()) {
          var symbol = _iterator__ex2g4s_0.j();
          // Inline function 'kotlin.collections.getOrPut' call
          var value = this_0.u1(l);
          var tmp;
          if (value == null) {
            // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.NDEPS$delegate.<anonymous>.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.collections.mutableSetOf' call
            var answer = LinkedHashSet_init_$Create$();
            this_0.v3(l, answer);
            tmp = answer;
          } else {
            tmp = value;
          }
          tmp.e(symbol);
        }
      }
      return this_0;
    };
  }
  function BiMap$TRIPL$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = this$0.im();
      var destination = LinkedHashMap_init_$Create$();
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = this_0.w1().h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.TRIPL$delegate.<anonymous>.<anonymous>' call
        if (element.q1().k() === 2) {
          destination.v3(element.q1(), element.r1());
        }
      }
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(destination.k());
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_0 = destination.w1().h();
      while (tmp0_iterator_0.i()) {
        var item = tmp0_iterator_0.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.TRIPL$delegate.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.map' call
        var this_1 = item.r1();
        // Inline function 'kotlin.collections.mapTo' call
        var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
        var tmp0_iterator_1 = this_1.h();
        while (tmp0_iterator_1.i()) {
          var item_0 = tmp0_iterator_1.j();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.TRIPL$delegate.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$5 = to_0(to(item_0, item.q1().m(0)), item.q1().m(1));
          destination_1.e(tmp$ret$5);
        }
        destination_0.e(destination_1);
      }
      return flatten(destination_0);
    };
  }
  function BiMap$X2WZ$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.collections.mapValues' call
      // Inline function 'kotlin.collections.groupBy' call
      // Inline function 'kotlin.collections.groupByTo' call
      var this_0 = this$0.jm();
      var destination = LinkedHashMap_init_$Create$();
      var tmp0_iterator = this_0.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.X2WZ$delegate.<anonymous>.<anonymous>' call
        var key = element.qh_1;
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.u1(key);
        var tmp;
        if (value == null) {
          // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
          var answer = ArrayList_init_$Create$_0();
          destination.v3(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.e(element);
      }
      // Inline function 'kotlin.collections.mapValuesTo' call
      var destination_0 = LinkedHashMap_init_$Create$_1(mapCapacity(destination.k()));
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_iterator_0 = destination.w1().h();
      while (tmp0_iterator_0.i()) {
        var element_0 = tmp0_iterator_0.j();
        // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
        var tmp_0 = element_0.q1();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.X2WZ$delegate.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.map' call
        var this_1 = element_0.r1();
        // Inline function 'kotlin.collections.mapTo' call
        var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
        var tmp0_iterator_1 = this_1.h();
        while (tmp0_iterator_1.i()) {
          var item = tmp0_iterator_1.j();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.X2WZ$delegate.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$6 = to_0(to(item.ph_1, item.qh_1), item.rh_1);
          destination_1.e(tmp$ret$6);
        }
        destination_0.v3(tmp_0, destination_1);
      }
      return destination_0;
    };
  }
  function BiMap$UNITS$delegate$lambda$lambda($cfg) {
    return function (it) {
      return get_RHS(it).k() === 1 ? !get_nonterminals($cfg).a1(get_RHS(it).m(0)) : false;
    };
  }
  function BiMap$UNITS$delegate$lambda($cfg) {
    return function () {
      // Inline function 'kotlin.collections.mapValues' call
      // Inline function 'kotlin.collections.groupBy' call
      // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
      var this_0 = $cfg;
      var predicate = BiMap$UNITS$delegate$lambda$lambda($cfg);
      // Inline function 'kotlin.apply' call
      var this_1 = toMutableSet(this_0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
      retainAll(this_1, predicate);
      // Inline function 'kotlin.collections.groupByTo' call
      var destination = LinkedHashMap_init_$Create$();
      var tmp0_iterator = this_1.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.UNITS$delegate.<anonymous>.<anonymous>' call
        var key = get_LHS(element);
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.u1(key);
        var tmp;
        if (value == null) {
          // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
          var answer = ArrayList_init_$Create$_0();
          destination.v3(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.UNITS$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$5 = get_RHS(element).m(0);
        list.e(tmp$ret$5);
      }
      // Inline function 'kotlin.collections.mapValuesTo' call
      var destination_0 = LinkedHashMap_init_$Create$_1(mapCapacity(destination.k()));
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_iterator_0 = destination.w1().h();
      while (tmp0_iterator_0.i()) {
        var element_0 = tmp0_iterator_0.j();
        // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
        var tmp_0 = element_0.q1();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.UNITS$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$9 = toSet_0(element_0.r1());
        destination_0.v3(tmp_0, tmp$ret$9);
      }
      return destination_0;
    };
  }
  function BiMap(cfg) {
    var tmp = this;
    tmp.bm_1 = lazy(BiMap$L2RHS$delegate$lambda(cfg));
    var tmp_0 = this;
    tmp_0.cm_1 = lazy(BiMap$R2LHS$delegate$lambda(cfg));
    var tmp_1 = this;
    tmp_1.dm_1 = lazy(BiMap$TDEPS$delegate$lambda(cfg));
    var tmp_2 = this;
    tmp_2.em_1 = lazy(BiMap$NDEPS$delegate$lambda(cfg));
    var tmp_3 = this;
    tmp_3.fm_1 = lazy(BiMap$TRIPL$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.gm_1 = lazy(BiMap$X2WZ$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.hm_1 = lazy(BiMap$UNITS$delegate$lambda(cfg));
  }
  protoOf(BiMap).km = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.bm_1;
    L2RHS$factory();
    return this_0.r1();
  };
  protoOf(BiMap).im = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.cm_1;
    R2LHS$factory();
    return this_0.r1();
  };
  protoOf(BiMap).lm = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.dm_1;
    TDEPS$factory();
    return this_0.r1();
  };
  protoOf(BiMap).mm = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.em_1;
    NDEPS$factory();
    return this_0.r1();
  };
  protoOf(BiMap).jm = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.fm_1;
    TRIPL$factory();
    return this_0.r1();
  };
  protoOf(BiMap).nm = function (p) {
    var tmp0_elvis_lhs = this.im().u1(p);
    return tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
  };
  protoOf(BiMap).om = function (p) {
    var tmp0_elvis_lhs = this.km().u1(p);
    return tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
  };
  function Bindex(set, indexedNTs, ntIndices) {
    indexedNTs = indexedNTs === VOID ? toList(set) : indexedNTs;
    ntIndices = ntIndices === VOID ? toMap(zip(indexedNTs, get_indices(indexedNTs))) : ntIndices;
    this.pm_1 = set;
    this.qm_1 = indexedNTs;
    this.rm_1 = ntIndices;
  }
  protoOf(Bindex).m = function (index) {
    return this.qm_1.m(index);
  };
  protoOf(Bindex).ac = function (element) {
    return this.qm_1.a1(element);
  };
  protoOf(Bindex).a1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.ac((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(Bindex).bc = function (elements) {
    return this.qm_1.o1(elements);
  };
  protoOf(Bindex).o1 = function (elements) {
    return this.bc(elements);
  };
  protoOf(Bindex).l = function () {
    return this.qm_1.l();
  };
  protoOf(Bindex).h = function () {
    return this.qm_1.h();
  };
  protoOf(Bindex).r = function (index) {
    return this.qm_1.r(index);
  };
  protoOf(Bindex).p1 = function (fromIndex, toIndex) {
    return this.qm_1.p1(fromIndex, toIndex);
  };
  protoOf(Bindex).k = function () {
    return this.qm_1.k();
  };
  protoOf(Bindex).sm = function (s) {
    var tmp0_elvis_lhs = this.rm_1.u1(s);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Bindex.get.<anonymous>' call
      println('Unknown nonterminal: ' + s);
      ensureNotNull(null);
      tmp = 1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Bindex).toString = function () {
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_0 = this.qm_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Bindex.toString.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp$ret$0 = '' + checkIndexOverflow(tmp1) + ': ' + item;
      destination.e(tmp$ret$0);
    }
    return joinToString(destination, '\n', 'Bindex:\n', '\n');
  };
  function dependencyGraph(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return LabeledGraph_init_$Create$(dependencyGraph$lambda(_this__u8e3s4));
  }
  function revDependencyGraph(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return LabeledGraph_init_$Create$(revDependencyGraph$lambda(_this__u8e3s4));
  }
  function toFormula(_this__u8e3s4, nt) {
    _init_properties_CFG_kt__oelqcy();
    var tmp;
    if (get_terminals(_this__u8e3s4).a1(nt)) {
      tmp = nt;
    } else if (!get_nonterminals(_this__u8e3s4).a1(nt)) {
      tmp = 'false';
    } else {
      var tmp_0 = get_bimap(_this__u8e3s4).om(nt);
      tmp = joinToString(tmp_0, ' or ', '( ', ' )', VOID, VOID, toFormula$lambda(_this__u8e3s4));
    }
    return tmp;
  }
  function isTreelikeNonterminalIn(_this__u8e3s4, cfg, reachables, nonTreeLike) {
    reachables = reachables === VOID ? minus(reachableSymbols(cfg, _this__u8e3s4), _this__u8e3s4) : reachables;
    nonTreeLike = nonTreeLike === VOID ? setOf(_this__u8e3s4) : nonTreeLike;
    _init_properties_CFG_kt__oelqcy();
    var tmp;
    if (contains(_this__u8e3s4, '\u03B5')) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!intersect(reachables, nonTreeLike).l()) {
        tmp = false;
      } else {
        var tmp$ret$1;
        $l$block_0: {
          // Inline function 'kotlin.collections.all' call
          var tmp_0;
          if (isInterface(reachables, Collection)) {
            tmp_0 = reachables.l();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$1 = true;
            break $l$block_0;
          }
          var tmp0_iterator = reachables.h();
          while (tmp0_iterator.i()) {
            var element = tmp0_iterator.j();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.isTreelikeNonterminalIn.<anonymous>' call
            if (!(get_terminals(cfg).a1(element) ? true : isTreelikeNonterminalIn(element, cfg, VOID, plus_1(nonTreeLike, reachables)))) {
              tmp$ret$1 = false;
              break $l$block_0;
            }
          }
          tmp$ret$1 = true;
        }
        tmp = tmp$ret$1;
      }
    }
    return tmp;
  }
  function JoinMap(CFG) {
    this.tm_1 = CFG;
    var tmp = this;
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.sequences.associateWith' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.JoinMap.precomputedJoins.<anonymous>' call
    var it = choose(get_nonterminals(this.tm_1), numberRangeToNumber(1, 3));
    var this_0 = times_1(it, it);
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.sequences.associateWithTo' call
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.JoinMap.precomputedJoins.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.JoinMap.precomputedJoins.<anonymous>.<anonymous>' call
      var l = element.hc();
      var r = element.ic();
      var tmp$ret$4 = this.vm(l, r);
      result.v3(element, tmp$ret$4);
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.JoinMap.precomputedJoins.<anonymous>' call
    println('Precomputed join map has ' + result.k() + ' entries.');
    tmp.um_1 = toMutableMap(result);
  }
  protoOf(JoinMap).wm = function (l, r, tryCache) {
    var tmp;
    if (tryCache) {
      var tmp0_elvis_lhs = this.um_1.u1(to(l, r));
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = this.wm(l, r, false);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'ai.hypergraph.kaliningraph.parsing.JoinMap.join.<anonymous>' call
        // Inline function 'kotlin.collections.set' call
        var this_1 = this.um_1;
        var key = to(l, r);
        this_1.v3(key, this_0);
        tmp_0 = this_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'kotlin.collections.flatMapTo' call
      var this_2 = times_2(l, r);
      var destination = ArrayList_init_$Create$_0();
      var tmp0_iterator = this_2.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.JoinMap.join.<anonymous>' call
        var l_0 = element.hc();
        var r_0 = element.ic();
        // Inline function 'kotlin.collections.map' call
        var this_3 = get_bimap(this.tm_1).nm(listOf([l_0, r_0]));
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
        var tmp0_iterator_0 = this_3.h();
        while (tmp0_iterator_0.i()) {
          var item = tmp0_iterator_0.j();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.JoinMap.join.<anonymous>.<anonymous>' call
          var tmp$ret$1 = new Triple(item, l_0, r_0);
          destination_0.e(tmp$ret$1);
        }
        var list = destination_0;
        addAll(destination, list);
      }
      tmp = toSet_0(destination);
    }
    return tmp;
  };
  protoOf(JoinMap).vm = function (l, r, tryCache, $super) {
    tryCache = tryCache === VOID ? false : tryCache;
    return $super === VOID ? this.wm(l, r, tryCache) : $super.wm.call(this, l, r, tryCache);
  };
  function FrozenCFG(cfg) {
    this.xm_1 = cfg;
    this.ym_1 = hashCode(this.xm_1);
  }
  protoOf(FrozenCFG).zm = function (element) {
    return this.xm_1.a1(element);
  };
  protoOf(FrozenCFG).a1 = function (element) {
    if (!(element instanceof Pair))
      return false;
    return this.zm(element instanceof Pair ? element : THROW_CCE());
  };
  protoOf(FrozenCFG).an = function (elements) {
    return this.xm_1.o1(elements);
  };
  protoOf(FrozenCFG).o1 = function (elements) {
    return this.an(elements);
  };
  protoOf(FrozenCFG).l = function () {
    return this.xm_1.l();
  };
  protoOf(FrozenCFG).h = function () {
    return this.xm_1.h();
  };
  protoOf(FrozenCFG).k = function () {
    return this.xm_1.k();
  };
  protoOf(FrozenCFG).equals = function (other) {
    var tmp;
    var tmp2_safe_receiver = other instanceof FrozenCFG ? other : null;
    if ((tmp2_safe_receiver == null ? null : tmp2_safe_receiver.ym_1) === this.ym_1) {
      tmp = true;
    } else {
      tmp = equals((!(other == null) ? isInterface(other, Set) : false) ? other : null, this.xm_1);
    }
    return tmp;
  };
  protoOf(FrozenCFG).hashCode = function () {
    return this.ym_1;
  };
  function _get_RHS_$stripEscapeChars_o9u6es(p0) {
    return stripEscapeChars(p0);
  }
  function language$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    return new CFL($this$cache);
  }
  function delimiters$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.sortedBy' call
    var this_0 = get_terminals($this$cache);
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = delimiters$delegate$lambda$lambda;
    var tmp$ret$0 = new sam$kotlin_Comparator$0(tmp);
    var tmp_0 = sortedWith(this_0, tmp$ret$0);
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$4 = [get_HOLE_MARKER(), ' '];
    var this_1 = plus_2(tmp_0, tmp$ret$4);
    return copyToArray(this_1);
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.bn_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).za = function (a, b) {
    return this.bn_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.za(a, b);
  };
  function delimiters$delegate$lambda$lambda(a, b) {
    _init_properties_CFG_kt__oelqcy();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.delimiters$delegate.<anonymous>.<anonymous>' call
    var tmp = -a.length | 0;
    // Inline function 'ai.hypergraph.kaliningraph.parsing.delimiters$delegate.<anonymous>.<anonymous>' call
    var tmp$ret$1 = -b.length | 0;
    return compareValues(tmp, tmp$ret$1);
  }
  function nonterminals$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault($this$cache, 10));
    var tmp0_iterator = $this$cache.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.nonterminals$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = get_LHS(item);
      destination.e(tmp$ret$0);
    }
    return toSet_0(destination);
  }
  function symbols$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    var tmp = get_nonterminals($this$cache);
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = $this$cache.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.symbols$delegate.<anonymous>.<anonymous>' call
      var list = get_RHS(element);
      addAll(destination, list);
    }
    return plus_1(tmp, destination);
  }
  function terminals$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    return minus_0(get_symbols($this$cache), get_nonterminals($this$cache));
  }
  function terminalUnitProductions$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
    var predicate = terminalUnitProductions$delegate$lambda$lambda($this$cache);
    // Inline function 'kotlin.apply' call
    var this_0 = toMutableSet($this$cache);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
    retainAll(this_0, predicate);
    return this_0;
  }
  function terminalUnitProductions$delegate$lambda$lambda($this_cache) {
    return function (it) {
      return get_RHS(it).k() === 1 ? !get_nonterminals($this_cache).a1(get_RHS(it).m(0)) : false;
    };
  }
  function unitProductions$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
    var predicate = unitProductions$delegate$lambda$lambda;
    // Inline function 'kotlin.apply' call
    var this_0 = toMutableSet($this$cache);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
    retainAll(this_0, predicate);
    return this_0;
  }
  function unitProductions$delegate$lambda$lambda(it) {
    _init_properties_CFG_kt__oelqcy();
    return get_RHS(it).k() === 1;
  }
  function nonterminalProductions$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
    var predicate = nonterminalProductions$delegate$lambda$lambda($this$cache);
    // Inline function 'kotlin.apply' call
    var this_0 = toMutableSet($this$cache);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
    retainAll(this_0, predicate);
    return this_0;
  }
  function nonterminalProductions$delegate$lambda$lambda($this_cache) {
    return function (it) {
      return !get_terminalUnitProductions($this_cache).a1(it);
    };
  }
  function unitNonterminals$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_terminalUnitProductions($this$cache);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.unitNonterminals$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = get_LHS(item);
      destination.e(tmp$ret$0);
    }
    return toSet_0(destination);
  }
  function bimap$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    return new BiMap($this$cache);
  }
  function tmap$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_terminals($this$cache);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.tmap$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = to(get_bimap($this$cache).nm(listOf_0(item)), item);
      destination.e(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.groupByTo' call
    var destination_0 = LinkedHashMap_init_$Create$();
    var tmp0_iterator_0 = destination.h();
    while (tmp0_iterator_0.i()) {
      var element = tmp0_iterator_0.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.tmap$delegate.<anonymous>.<anonymous>' call
      var key = element.fc_1;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination_0.u1(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination_0.v3(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.e(element);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_1 = LinkedHashMap_init_$Create$_1(mapCapacity(destination_0.k()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_1 = destination_0.w1().h();
    while (tmp0_iterator_1.i()) {
      var element_0 = tmp0_iterator_1.j();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element_0.q1();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.tmap$delegate.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_1 = element_0.r1();
      // Inline function 'kotlin.collections.mapTo' call
      var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator_2 = this_1.h();
      while (tmp0_iterator_2.i()) {
        var item_0 = tmp0_iterator_2.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.tmap$delegate.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$9 = item_0.gc_1;
        destination_2.e(tmp$ret$9);
      }
      var tmp$ret$12 = toSet_0(destination_2);
      destination_1.v3(tmp_0, tmp$ret$12);
    }
    return destination_1;
  }
  function vindex$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    var tmp = 0;
    var tmp_0 = get_bindex($this$cache).qm_1.k();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
      var this_0 = get_bimap($this$cache).om(get_bindex($this$cache).m(tmp_2));
      var predicate = vindex$delegate$lambda$lambda;
      // Inline function 'kotlin.apply' call
      var this_1 = toMutableSet(this_0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
      retainAll(this_1, predicate);
      // Inline function 'kotlin.collections.flatMapTo' call
      var destination = ArrayList_init_$Create$_0();
      var tmp0_iterator = this_1.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.vindex$delegate.<anonymous>.<anonymous>' call
        var list = listOf([get_bindex($this$cache).sm(element.m(0)), get_bindex($this$cache).sm(element.m(1))]);
        addAll(destination, list);
      }
      tmp_1[tmp_2] = toIntArray(destination);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function vindex$delegate$lambda$lambda(it) {
    _init_properties_CFG_kt__oelqcy();
    return it.k() > 1;
  }
  function bindex$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    return new Bindex(get_nonterminals($this$cache));
  }
  function normalForm$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    return normalize($this$cache);
  }
  function depGraph$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    return dependencyGraph($this$cache);
  }
  function revDepGraph$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    return revDependencyGraph($this$cache);
  }
  function originalForm$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    var tmp3_safe_receiver = get_rewriteHistory().u1($this$cache);
    var tmp0_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.m(0);
    return tmp0_elvis_lhs == null ? $this$cache : tmp0_elvis_lhs;
  }
  function nonparametricForm$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    return ensureNotNull(get_rewriteHistory().u1($this$cache)).m(1);
  }
  function reachability$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    // Inline function 'kotlin.collections.mutableMapOf' call
    return LinkedHashMap_init_$Create$();
  }
  function unitReachability$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    // Inline function 'kotlin.collections.associateWith' call
    var this_0 = get_symbols($this$cache);
    var result = LinkedHashMap_init_$Create$_1(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
    // Inline function 'kotlin.collections.associateWithTo' call
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.unitReachability$delegate.<anonymous>.<anonymous>' call
      // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.unitReachability$delegate.<anonymous>.<anonymous>.<anonymous>' call
      var it = LabeledGraph_init_$Create$(unitReachability$delegate$lambda$lambda($this$cache));
      var this_1 = plus_1(setOf(element), plus_1(transitiveClosure_0(it, setOf(element)), transitiveClosure_0(it.bk(), setOf(element))));
      var predicate = unitReachability$delegate$lambda$lambda_0($this$cache);
      // Inline function 'kotlin.apply' call
      var this_2 = toMutableSet(this_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
      retainAll(this_2, predicate);
      result.v3(element, this_2);
    }
    return result;
  }
  function unitReachability$delegate$lambda$lambda($this_cache) {
    return function ($this$LabeledGraph) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = get_unitProductions($this_cache);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.h();
      while (tmp0_iterator.i()) {
        var item = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.unitReachability$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$0 = to(get_LHS(item), get_RHS(item).m(0));
        destination.e(tmp$ret$0);
      }
      var tmp0_iterator_0 = destination.h();
      while (tmp0_iterator_0.i()) {
        var element = tmp0_iterator_0.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.unitReachability$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var a = element.hc();
        var b = element.ic();
        $this$LabeledGraph.bl(a, b);
      }
      return Unit_instance;
    };
  }
  function unitReachability$delegate$lambda$lambda_0($this_cache) {
    return function (it) {
      return get_nonterminals($this_cache).a1(it);
    };
  }
  function noNonterminalStubs$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    println('Disabling nonterminal stubs!');
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.also' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
    var predicate = noNonterminalStubs$delegate$lambda$lambda($this$cache);
    // Inline function 'kotlin.apply' call
    var this_0 = toMutableSet($this$cache);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
    retainAll(this_0, predicate);
    var this_1 = toSet_0(this_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.noNonterminalStubs$delegate.<anonymous>.<anonymous>' call
    var tmp = get_rewriteHistory();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.noNonterminalStubs$delegate.<anonymous>.<anonymous>.<anonymous>' call
    var it = freeze($this$cache);
    var tmp$ret$3 = plus(ensureNotNull(get_rewriteHistory().u1(it)), listOf_0(it));
    tmp.v3(this_1, tmp$ret$3);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.noNonterminalStubs$delegate.<anonymous>.<anonymous>' call
    get_blocked(this_1).q(get_blocked($this$cache));
    return this_1;
  }
  function noNonterminalStubs$delegate$lambda$lambda($this_cache) {
    return function (it) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.none' call
        var this_0 = get_RHS(it);
        var tmp;
        if (isInterface(this_0, Collection)) {
          tmp = this_0.l();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = this_0.h();
        while (tmp0_iterator.i()) {
          var element = tmp0_iterator.j();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.noNonterminalStubs$delegate.<anonymous>.<anonymous>.<anonymous>' call
          if (isNonterminalStubIn(element, $this_cache)) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      return tmp$ret$0;
    };
  }
  function noEpsilonOrNonterminalStubs$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    println('Disabling nonterminal stubs!');
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.also' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
    var predicate = noEpsilonOrNonterminalStubs$delegate$lambda$lambda($this$cache);
    // Inline function 'kotlin.apply' call
    var this_0 = toMutableSet($this$cache);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
    retainAll(this_0, predicate);
    var predicate_0 = noEpsilonOrNonterminalStubs$delegate$lambda$lambda_0;
    // Inline function 'kotlin.apply' call
    var this_1 = toMutableSet(this_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
    retainAll(this_1, predicate_0);
    var this_2 = toSet_0(this_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.noEpsilonOrNonterminalStubs$delegate.<anonymous>.<anonymous>' call
    var tmp = get_rewriteHistory();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.noEpsilonOrNonterminalStubs$delegate.<anonymous>.<anonymous>.<anonymous>' call
    var it = freeze($this$cache);
    var tmp$ret$5 = plus(ensureNotNull(get_rewriteHistory().u1(it)), listOf_0(it));
    tmp.v3(this_2, tmp$ret$5);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.noEpsilonOrNonterminalStubs$delegate.<anonymous>.<anonymous>' call
    get_blocked(this_2).q(get_blocked($this$cache));
    return this_2;
  }
  function noEpsilonOrNonterminalStubs$delegate$lambda$lambda($this_cache) {
    return function (it) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.none' call
        var this_0 = get_RHS(it);
        var tmp;
        if (isInterface(this_0, Collection)) {
          tmp = this_0.l();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = this_0.h();
        while (tmp0_iterator.i()) {
          var element = tmp0_iterator.j();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.noEpsilonOrNonterminalStubs$delegate.<anonymous>.<anonymous>.<anonymous>' call
          if (isNonterminalStubIn(element, $this_cache)) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      return tmp$ret$0;
    };
  }
  function noEpsilonOrNonterminalStubs$delegate$lambda$lambda_0(it) {
    _init_properties_CFG_kt__oelqcy();
    return !contains(it.toString(), '\u03B5');
  }
  function parikhFPCache$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  }
  function generators$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault($this$cache, 10));
    var tmp0_iterator = $this$cache.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.generators$delegate.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_0 = get_RHS(item);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator_0 = this_0.h();
      while (tmp0_iterator_0.i()) {
        var item_0 = tmp0_iterator_0.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.generators$delegate.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$0 = to(item_0, get_LHS(item));
        destination_0.e(tmp$ret$0);
      }
      destination.e(destination_0);
    }
    // Inline function 'kotlin.collections.groupByTo' call
    var this_1 = flatten(destination);
    var destination_1 = LinkedHashMap_init_$Create$();
    var tmp0_iterator_1 = this_1.h();
    while (tmp0_iterator_1.i()) {
      var element = tmp0_iterator_1.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.generators$delegate.<anonymous>.<anonymous>' call
      var key = element.fc_1;
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination_1.u1(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination_1.v3(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.e(element);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_2 = LinkedHashMap_init_$Create$_1(mapCapacity(destination_1.k()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_2 = destination_1.w1().h();
    while (tmp0_iterator_2.i()) {
      var element_0 = tmp0_iterator_2.j();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element_0.q1();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.generators$delegate.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_2 = element_0.r1();
      // Inline function 'kotlin.collections.mapTo' call
      var destination_3 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
      var tmp0_iterator_3 = this_2.h();
      while (tmp0_iterator_3.i()) {
        var item_1 = tmp0_iterator_3.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.generators$delegate.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$12 = item_1.gc_1;
        destination_3.e(tmp$ret$12);
      }
      var tmp$ret$15 = toSet_0(destination_3);
      destination_2.v3(tmp_0, tmp$ret$15);
    }
    return destination_2;
  }
  function nonterminalFormulas$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    // Inline function 'kotlin.collections.associateWith' call
    var this_0 = get_nonterminals($this$cache);
    var result = LinkedHashMap_init_$Create$_1(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
    // Inline function 'kotlin.collections.associateWithTo' call
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.nonterminalFormulas$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = toFormula($this$cache, element);
      result.v3(element, tmp$ret$0);
    }
    return result;
  }
  function pruneTreelikeNonterminals$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    println('Pruning treelike nonterminals!');
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.let' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
    var predicate = pruneTreelikeNonterminals$delegate$lambda$lambda($this$cache);
    // Inline function 'kotlin.apply' call
    var this_0 = toMutableSet($this$cache);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
    retainAll(this_0, predicate);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.pruneTreelikeNonterminals$delegate.<anonymous>.<anonymous>' call
    var cfg = toSet_0(this_0);
    var brokenReferences = get_terminals(cfg);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
    var predicate_0 = pruneTreelikeNonterminals$delegate$lambda$lambda_0($this$cache);
    // Inline function 'kotlin.apply' call
    var this_1 = toMutableSet(brokenReferences);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
    retainAll(this_1, predicate_0);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator = this_1.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.pruneTreelikeNonterminals$delegate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp$ret$4 = to(item, listOf_0('<' + item + '>'));
      destination.e(tmp$ret$4);
    }
    var tmp = plus_1(cfg, destination);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
    var this_2 = get_nonterminals(cfg);
    var predicate_1 = pruneTreelikeNonterminals$delegate$lambda$lambda_1;
    // Inline function 'kotlin.apply' call
    var this_3 = toMutableSet(this_2);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
    retainAll(this_3, predicate_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
    var tmp0_iterator_0 = this_3.h();
    while (tmp0_iterator_0.i()) {
      var item_0 = tmp0_iterator_0.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.pruneTreelikeNonterminals$delegate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp$ret$9 = to(item_0, listOf_0('<' + item_0 + '>'));
      destination_0.e(tmp$ret$9);
    }
    var tmp_0 = plus_1(tmp, destination_0);
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
    var predicate_2 = pruneTreelikeNonterminals$delegate$lambda$lambda_2($this$cache);
    // Inline function 'kotlin.apply' call
    var this_4 = toMutableSet(brokenReferences);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
    retainAll(this_4, predicate_2);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_4, 10));
    var tmp0_iterator_1 = this_4.h();
    while (tmp0_iterator_1.i()) {
      var item_1 = tmp0_iterator_1.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.pruneTreelikeNonterminals$delegate.<anonymous>.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
      var predicate_3 = pruneTreelikeNonterminals$delegate$lambda$lambda_3(item_1);
      // Inline function 'kotlin.apply' call
      var this_5 = toMutableSet($this$cache);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
      retainAll(this_5, predicate_3);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_5, 10));
      var tmp0_iterator_2 = this_5.h();
      while (tmp0_iterator_2.i()) {
        var item_2 = tmp0_iterator_2.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.pruneTreelikeNonterminals$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$16 = to(item_1, get_RHS(item_2));
        destination_2.e(tmp$ret$16);
      }
      destination_1.e(destination_2);
    }
    var this_6 = toSet_0(flatten(destination_1));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.pruneTreelikeNonterminals$delegate.<anonymous>.<anonymous>.<anonymous>' call
    println('Restored productions: ' + prettyPrint(this_6));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.pruneTreelikeNonterminals$delegate.<anonymous>.<anonymous>' call
    var it = plus_1(tmp_0, this_6);
    var this_7 = transformIntoCNF(it);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.pruneTreelikeNonterminals$delegate.<anonymous>.<anonymous>' call
    var tmp_1 = get_rewriteHistory();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.pruneTreelikeNonterminals$delegate.<anonymous>.<anonymous>.<anonymous>' call
    var it_0 = freeze($this$cache);
    var tmp$ret$28 = plus(listOf_0(ensureNotNull(get_rewriteHistory().u1(it_0)).m(0)), listOf_0(it_0));
    tmp_1.v3(this_7, tmp$ret$28);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.pruneTreelikeNonterminals$delegate.<anonymous>.<anonymous>' call
    get_blocked(this_7).q(get_blocked($this$cache));
    return this_7;
  }
  function pruneTreelikeNonterminals$delegate$lambda$lambda($this_cache) {
    return function (it) {
      var tmp;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var this_0 = get_RHS(it);
        var tmp_0;
        if (isInterface(this_0, Collection)) {
          tmp_0 = this_0.l();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator = this_0.h();
        while (tmp0_iterator.i()) {
          var element = tmp0_iterator.j();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.pruneTreelikeNonterminals$delegate.<anonymous>.<anonymous>.<anonymous>' call
          if (!isTreelikeNonterminalIn(element, $this_cache)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      if (tmp$ret$0) {
        tmp = true;
      } else {
        tmp = contains(get_LHS(it), '\u03B5');
      }
      return tmp;
    };
  }
  function pruneTreelikeNonterminals$delegate$lambda$lambda_0($this_cache) {
    return function (it) {
      return get_terminals($this_cache).a1('<' + it + '>');
    };
  }
  function pruneTreelikeNonterminals$delegate$lambda$lambda_1(it) {
    _init_properties_CFG_kt__oelqcy();
    return isOrganicNonterminal(it);
  }
  function pruneTreelikeNonterminals$delegate$lambda$lambda_2($this_cache) {
    return function (it) {
      return isSyntheticNonterminal(it) ? get_nonterminals($this_cache).a1(it) : false;
    };
  }
  function pruneTreelikeNonterminals$delegate$lambda$lambda_3($l) {
    return function (it) {
      return get_LHS(it) === $l;
    };
  }
  function joinMap$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    return new JoinMap($this$cache);
  }
  function dependencyGraph$lambda($this_dependencyGraph) {
    return function ($this$LabeledGraph) {
      var tmp0_iterator = $this_dependencyGraph.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.dependencyGraph.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_0 = element.gc_1.h();
        while (tmp0_iterator_0.i()) {
          var element_0 = tmp0_iterator_0.j();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.dependencyGraph.<anonymous>.<anonymous>.<anonymous>' call
          $this$LabeledGraph.bl(get_LHS(element), element_0);
        }
      }
      return Unit_instance;
    };
  }
  function revDependencyGraph$lambda($this_revDependencyGraph) {
    return function ($this$LabeledGraph) {
      var tmp0_iterator = $this_revDependencyGraph.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.revDependencyGraph.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_0 = element.gc_1.h();
        while (tmp0_iterator_0.i()) {
          var element_0 = tmp0_iterator_0.j();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.revDependencyGraph.<anonymous>.<anonymous>.<anonymous>' call
          $this$LabeledGraph.bl(element_0, get_LHS(element));
        }
      }
      return Unit_instance;
    };
  }
  function toFormula$lambda$lambda($this_toFormula) {
    return function (it) {
      return toFormula($this_toFormula, it);
    };
  }
  function toFormula$lambda($this_toFormula) {
    return function (it) {
      return joinToString(it, ' and ', '( ', ' )', VOID, VOID, toFormula$lambda$lambda($this_toFormula));
    };
  }
  function language$factory() {
    return getPropertyCallableRef('language', 1, KProperty1, function (receiver) {
      return get_language(receiver);
    }, null);
  }
  function nonterminals$factory() {
    return getPropertyCallableRef('nonterminals', 1, KProperty1, function (receiver) {
      return get_nonterminals(receiver);
    }, null);
  }
  function symbols$factory() {
    return getPropertyCallableRef('symbols', 1, KProperty1, function (receiver) {
      return get_symbols(receiver);
    }, null);
  }
  function terminals$factory() {
    return getPropertyCallableRef('terminals', 1, KProperty1, function (receiver) {
      return get_terminals(receiver);
    }, null);
  }
  function terminalUnitProductions$factory() {
    return getPropertyCallableRef('terminalUnitProductions', 1, KProperty1, function (receiver) {
      return get_terminalUnitProductions(receiver);
    }, null);
  }
  function unitProductions$factory() {
    return getPropertyCallableRef('unitProductions', 1, KProperty1, function (receiver) {
      return get_unitProductions(receiver);
    }, null);
  }
  function nonterminalProductions$factory() {
    return getPropertyCallableRef('nonterminalProductions', 1, KProperty1, function (receiver) {
      return get_nonterminalProductions(receiver);
    }, null);
  }
  function bimap$factory() {
    return getPropertyCallableRef('bimap', 1, KProperty1, function (receiver) {
      return get_bimap(receiver);
    }, null);
  }
  function vindex$factory() {
    return getPropertyCallableRef('vindex', 1, KProperty1, function (receiver) {
      return get_vindex(receiver);
    }, null);
  }
  function bindex$factory() {
    return getPropertyCallableRef('bindex', 1, KProperty1, function (receiver) {
      return get_bindex(receiver);
    }, null);
  }
  function normalForm$factory() {
    return getPropertyCallableRef('normalForm', 1, KProperty1, function (receiver) {
      return get_normalForm(receiver);
    }, null);
  }
  function depGraph$factory() {
    return getPropertyCallableRef('depGraph', 1, KProperty1, function (receiver) {
      return get_depGraph(receiver);
    }, null);
  }
  function originalForm$factory() {
    return getPropertyCallableRef('originalForm', 1, KProperty1, function (receiver) {
      return get_originalForm(receiver);
    }, null);
  }
  function reachability$factory() {
    return getPropertyCallableRef('reachability', 1, KProperty1, function (receiver) {
      return get_reachability(receiver);
    }, null);
  }
  function unitReachability$factory() {
    return getPropertyCallableRef('unitReachability', 1, KProperty1, function (receiver) {
      return get_unitReachability(receiver);
    }, null);
  }
  function L2RHS$factory() {
    return getPropertyCallableRef('L2RHS', 1, KProperty1, function (receiver) {
      return receiver.km();
    }, null);
  }
  function R2LHS$factory() {
    return getPropertyCallableRef('R2LHS', 1, KProperty1, function (receiver) {
      return receiver.im();
    }, null);
  }
  function TDEPS$factory() {
    return getPropertyCallableRef('TDEPS', 1, KProperty1, function (receiver) {
      return receiver.lm();
    }, null);
  }
  function NDEPS$factory() {
    return getPropertyCallableRef('NDEPS', 1, KProperty1, function (receiver) {
      return receiver.mm();
    }, null);
  }
  function TRIPL$factory() {
    return getPropertyCallableRef('TRIPL', 1, KProperty1, function (receiver) {
      return receiver.jm();
    }, null);
  }
  var properties_initialized_CFG_kt_kkv418;
  function _init_properties_CFG_kt__oelqcy() {
    if (!properties_initialized_CFG_kt_kkv418) {
      properties_initialized_CFG_kt_kkv418 = true;
      language$delegate = cache_0(VOID, language$delegate$lambda);
      delimiters$delegate = cache_0(VOID, delimiters$delegate$lambda);
      nonterminals$delegate = cache_0(VOID, nonterminals$delegate$lambda);
      symbols$delegate = cache_0(VOID, symbols$delegate$lambda);
      terminals$delegate = cache_0(VOID, terminals$delegate$lambda);
      terminalUnitProductions$delegate = cache_0(VOID, terminalUnitProductions$delegate$lambda);
      unitProductions$delegate = cache_0(VOID, unitProductions$delegate$lambda);
      nonterminalProductions$delegate = cache_0(VOID, nonterminalProductions$delegate$lambda);
      unitNonterminals$delegate = cache_0(VOID, unitNonterminals$delegate$lambda);
      bimap$delegate = cache_0(VOID, bimap$delegate$lambda);
      tmap$delegate = cache_0(VOID, tmap$delegate$lambda);
      vindex$delegate = cache_0(VOID, vindex$delegate$lambda);
      bindex$delegate = cache_0(VOID, bindex$delegate$lambda);
      normalForm$delegate = cache_0(VOID, normalForm$delegate$lambda);
      depGraph$delegate = cache_0(VOID, depGraph$delegate$lambda);
      revDepGraph$delegate = cache_0(VOID, revDepGraph$delegate$lambda);
      originalForm$delegate = cache_0(VOID, originalForm$delegate$lambda);
      nonparametricForm$delegate = cache_0(VOID, nonparametricForm$delegate$lambda);
      reachability$delegate = cache_0(VOID, reachability$delegate$lambda);
      unitReachability$delegate = cache_0(VOID, unitReachability$delegate$lambda);
      noNonterminalStubs$delegate = cache_0(VOID, noNonterminalStubs$delegate$lambda);
      noEpsilonOrNonterminalStubs$delegate = cache_0(VOID, noEpsilonOrNonterminalStubs$delegate$lambda);
      parikhFPCache$delegate = cache_0(VOID, parikhFPCache$delegate$lambda);
      generators$delegate = cache_0(VOID, generators$delegate$lambda);
      nonterminalFormulas$delegate = cache_0(VOID, nonterminalFormulas$delegate$lambda);
      pruneTreelikeNonterminals$delegate = cache_0(VOID, pruneTreelikeNonterminals$delegate$lambda);
      joinMap$delegate = cache_0(VOID, joinMap$delegate$lambda);
    }
  }
  function get_pretty(_this__u8e3s4) {
    _init_properties_Debugging_kt__gvw5j0();
    return pretty$delegate.am(_this__u8e3s4, pretty$factory());
  }
  var pretty$delegate;
  function prettyPrint(_this__u8e3s4) {
    _init_properties_Debugging_kt__gvw5j0();
    return get_pretty(_this__u8e3s4).toString();
  }
  function pretty(_this__u8e3s4) {
    _init_properties_Debugging_kt__gvw5j0();
    return get_LHS(_this__u8e3s4) + ' -> ' + joinToString(get_RHS(_this__u8e3s4), ' ');
  }
  function pretty$delegate$lambda($this$cache) {
    _init_properties_Debugging_kt__gvw5j0();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault($this$cache, 10));
    var tmp0_iterator = $this$cache.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.pretty$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = pretty(item);
      destination.e(tmp$ret$0);
    }
    return formatAsGrid(destination, 3);
  }
  function pretty$factory() {
    return getPropertyCallableRef('pretty', 1, KProperty1, function (receiver) {
      return get_pretty(receiver);
    }, null);
  }
  var properties_initialized_Debugging_kt_lkmgf6;
  function _init_properties_Debugging_kt__gvw5j0() {
    if (!properties_initialized_Debugging_kt_lkmgf6) {
      properties_initialized_Debugging_kt_lkmgf6 = true;
      pretty$delegate = cache_0(VOID, pretty$delegate$lambda);
    }
  }
  var language$delegate_0;
  var asCFG$delegate;
  var asCJL$delegate;
  function CFL(cfg) {
    this.cn_1 = cfg;
  }
  protoOf(CFL).toString = function () {
    return 'CFL(cfg=' + this.cn_1 + ')';
  };
  protoOf(CFL).hashCode = function () {
    return hashCode(this.cn_1);
  };
  protoOf(CFL).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CFL))
      return false;
    var tmp0_other_with_cast = other instanceof CFL ? other : THROW_CCE();
    if (!equals(this.cn_1, tmp0_other_with_cast.cn_1))
      return false;
    return true;
  };
  function REL(reg) {
    this.dn_1 = reg;
  }
  protoOf(REL).toString = function () {
    return 'REL(reg=' + this.dn_1 + ')';
  };
  protoOf(REL).hashCode = function () {
    return hashCode(this.dn_1);
  };
  protoOf(REL).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof REL))
      return false;
    var tmp0_other_with_cast = other instanceof REL ? other : THROW_CCE();
    if (!equals(this.dn_1, tmp0_other_with_cast.dn_1))
      return false;
    return true;
  };
  function intersect_0($this, item) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.jn();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item_0 = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.CJL.intersect.<anonymous>' call
      var tmp$ret$0 = item(item_0);
      destination.e(tmp$ret$0);
    }
    return intersect_1(destination);
  }
  function CJL$cfgs$delegate$lambda($cfls) {
    return function ($this$cache) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = $cfls;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(this_0.length);
      var inductionVariable = 0;
      var last = this_0.length;
      while (inductionVariable < last) {
        var item = this_0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'ai.hypergraph.kaliningraph.parsing.CJL.cfgs$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$0 = item.cn_1;
        destination.e(tmp$ret$0);
      }
      return destination;
    };
  }
  function CJL$nonterminals$delegate$lambda($this$cache) {
    return intersect_0($this$cache, CJL$nonterminals$delegate$lambda$lambda);
  }
  function CJL$nonterminals$delegate$lambda$lambda($this$intersect) {
    return get_nonterminals($this$intersect);
  }
  function CJL$terminals$delegate$lambda($this$cache) {
    return intersect_0($this$cache, CJL$terminals$delegate$lambda$lambda);
  }
  function CJL$terminals$delegate$lambda$lambda($this$intersect) {
    return get_terminals($this$intersect);
  }
  function CJL$symbols$delegate$lambda($this$cache) {
    return intersect_0($this$cache, CJL$symbols$delegate$lambda$lambda);
  }
  function CJL$symbols$delegate$lambda$lambda($this$intersect) {
    return get_symbols($this$intersect);
  }
  function CJL(cfls) {
    var tmp = this;
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = toSet_1(cfls);
    tmp.en_1 = copyToArray(this_0);
    var tmp_0 = this;
    tmp_0.fn_1 = cache_0(VOID, CJL$cfgs$delegate$lambda(cfls));
    var tmp_1 = this;
    tmp_1.gn_1 = cache_0(VOID, CJL$nonterminals$delegate$lambda);
    var tmp_2 = this;
    tmp_2.hn_1 = cache_0(VOID, CJL$terminals$delegate$lambda);
    var tmp_3 = this;
    tmp_3.in_1 = cache_0(VOID, CJL$symbols$delegate$lambda);
  }
  protoOf(CJL).jn = function () {
    return this.fn_1.am(this, cfgs$factory());
  };
  function contains_0(_this__u8e3s4, s) {
    _init_properties_FLTheory_kt__k6sxcb();
    return isValid(_this__u8e3s4.cn_1, s);
  }
  function language$delegate$lambda_0($this$cache) {
    _init_properties_FLTheory_kt__k6sxcb();
    return new REL($this$cache);
  }
  function asCFG$delegate$lambda($this$cache) {
    _init_properties_FLTheory_kt__k6sxcb();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault($this$cache, 10));
    var tmp0_iterator = $this$cache.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.asCFG$delegate.<anonymous>.<anonymous>' call
      var a = item.hc();
      var b = item.ic();
      var tmp$ret$0 = to(a, listOf_0(b));
      destination.e(tmp$ret$0);
    }
    return toSet_0(destination);
  }
  function asCJL$delegate$lambda($this$cache) {
    _init_properties_FLTheory_kt__k6sxcb();
    return new CJL([get_language($this$cache)]);
  }
  function cfgs$factory() {
    return getPropertyCallableRef('cfgs', 1, KProperty1, function (receiver) {
      return receiver.jn();
    }, null);
  }
  var properties_initialized_FLTheory_kt_tf02wj;
  function _init_properties_FLTheory_kt__k6sxcb() {
    if (!properties_initialized_FLTheory_kt_tf02wj) {
      properties_initialized_FLTheory_kt_tf02wj = true;
      language$delegate_0 = cache_0(VOID, language$delegate$lambda_0);
      asCFG$delegate = cache_0(VOID, asCFG$delegate$lambda);
      asCJL$delegate = cache_0(VOID, asCJL$delegate$lambda);
    }
  }
  function get_rewriteHistory() {
    _init_properties_Normalization_kt__nz9twr();
    return rewriteHistory;
  }
  var rewriteHistory;
  function get_START_SYMBOL() {
    _init_properties_Normalization_kt__nz9twr();
    return START_SYMBOL;
  }
  var START_SYMBOL;
  function normalize(_this__u8e3s4) {
    _init_properties_Normalization_kt__nz9twr();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.mutableListOf' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.normalize.<anonymous>' call
    var rewrites = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.also' call
    var this_0 = expandOr(addGlobalStartSymbol(_this__u8e3s4));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.normalize.<anonymous>.<anonymous>' call
    rewrites.e(this_0);
    var this_1 = eliminateParametricityFromLHS(this_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.normalize.<anonymous>.<anonymous>' call
    rewrites.e(this_1);
    var this_2 = generateNonterminalStubs(transformIntoCNF(this_1));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.normalize.<anonymous>.<anonymous>' call
    get_rewriteHistory().v3(freeze(this_2), rewrites);
    return this_2;
  }
  function transitiveClosure_0(_this__u8e3s4, from) {
    _init_properties_Normalization_kt__nz9twr();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
    var predicate = transitiveClosure$lambda(from);
    // Inline function 'kotlin.apply' call
    var this_0 = toMutableSet(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
    retainAll(this_0, predicate);
    var this_1 = _this__u8e3s4.yk(this_0);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator = this_1.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.transitiveClosure.<anonymous>' call
      var tmp$ret$2 = item.jl();
      destination.e(tmp$ret$2);
    }
    return toSet_0(destination);
  }
  function transformIntoCNF(_this__u8e3s4) {
    _init_properties_Normalization_kt__nz9twr();
    return removeUselessSymbols(terminalsToUnitProds(refactorRHS(elimVarUnitProds(refactorEpsilonProds(addEpsilonProduction(_this__u8e3s4))))));
  }
  function isSyntheticNonterminal(_this__u8e3s4) {
    _init_properties_Normalization_kt__nz9twr();
    return (!(split(_this__u8e3s4, charArrayOf([_Char___init__impl__6a9atx(46)])).k() === 1) ? true : contains(_this__u8e3s4, '\u03B5')) ? true : _this__u8e3s4 === 'START';
  }
  function isOrganicNonterminal(_this__u8e3s4) {
    _init_properties_Normalization_kt__nz9twr();
    return (split(_this__u8e3s4, charArrayOf([_Char___init__impl__6a9atx(46)])).k() === 1 ? !contains(_this__u8e3s4, '\u03B5') : false) ? !(_this__u8e3s4 === 'START') : false;
  }
  function reachableSymbols(_this__u8e3s4, from) {
    from = from === VOID ? get_START_SYMBOL() : from;
    _init_properties_Normalization_kt__nz9twr();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = get_reachability(_this__u8e3s4);
    var value = this_0.u1(from);
    var tmp;
    if (value == null) {
      // Inline function 'ai.hypergraph.kaliningraph.parsing.reachableSymbols.<anonymous>' call
      var answer = transitiveClosure_0(get_depGraph(_this__u8e3s4), setOf(from));
      this_0.v3(from, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    return tmp;
  }
  function generateNonterminalStubs(_this__u8e3s4) {
    _init_properties_Normalization_kt__nz9twr();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
    var predicate = generateNonterminalStubs$lambda;
    // Inline function 'kotlin.apply' call
    var this_0 = toMutableSet(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
    retainAll(this_0, predicate);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.generateNonterminalStubs.<anonymous>' call
      var tmp$ret$2 = to(get_LHS(item), listOf_0('<' + get_LHS(item) + '>'));
      destination.e(tmp$ret$2);
    }
    return plus_1(_this__u8e3s4, addEpsilonProduction(toSet_0(destination)));
  }
  function eliminateParametricityFromLHS(_this__u8e3s4, parameters) {
    var tmp;
    if (parameters === VOID) {
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'kotlin.collections.flatMapTo' call
      var this_0 = get_nonterminals(_this__u8e3s4);
      var destination = ArrayList_init_$Create$_0();
      var tmp0_iterator = this_0.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromLHS.<anonymous>' call
        var list = getParametersIn(element, _this__u8e3s4);
        addAll(destination, list);
      }
      tmp = toSet_0(destination);
    } else {
      tmp = parameters;
    }
    parameters = tmp;
    _init_properties_Normalization_kt__nz9twr();
    var tmp_0;
    if (parameters.l()) {
      tmp_0 = _this__u8e3s4;
    } else {
      var i = false;
      // Inline function 'kotlin.collections.setOf' call
      var tmp$ret$3 = emptySet();
      var _destruct__k2r9zo = to('', tmp$ret$3);
      var ntReplaced = _destruct__k2r9zo.hc();
      var ntReplacements = _destruct__k2r9zo.ic();
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'kotlin.collections.flatMapTo' call
      var destination_0 = ArrayList_init_$Create$_0();
      var tmp0_iterator_0 = _this__u8e3s4.h();
      while (tmp0_iterator_0.i()) {
        var element_0 = tmp0_iterator_0.j();
        var tmp$ret$4;
        $l$block: {
          // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromLHS.<anonymous>' call
          var params = getParametersIn(get_LHS(element_0), _this__u8e3s4);
          if (params.l() ? true : i) {
            tmp$ret$4 = listOf_0(element_0);
            break $l$block;
          }
          i = true;
          ntReplaced = get_LHS(element_0);
          // Inline function 'kotlin.collections.associateWith' call
          var result = LinkedHashMap_init_$Create$_1(coerceAtLeast(mapCapacity(collectionSizeOrDefault(params, 10)), 16));
          // Inline function 'kotlin.collections.associateWithTo' call
          var tmp0_iterator_1 = params.h();
          while (tmp0_iterator_1.i()) {
            var element_1 = tmp0_iterator_1.j();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromLHS.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.collections.map' call
            var this_1 = get_bimap(_this__u8e3s4).om(element_1);
            // Inline function 'kotlin.collections.mapTo' call
            var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
            var tmp0_iterator_2 = this_1.h();
            while (tmp0_iterator_2.i()) {
              var item = tmp0_iterator_2.j();
              // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromLHS.<anonymous>.<anonymous>.<anonymous>' call
              var tmp$ret$5 = item.m(0);
              destination_1.e(tmp$ret$5);
            }
            var tmp$ret$8 = toSet_0(destination_1);
            result.v3(element_1, tmp$ret$8);
          }
          var map = result;
          var tmp$ret$11;
          $l$block_1: {
            // Inline function 'kotlin.collections.maxByOrNull' call
            var iterator = map.w1().h();
            if (!iterator.i()) {
              tmp$ret$11 = null;
              break $l$block_1;
            }
            var maxElem = iterator.j();
            if (!iterator.i()) {
              tmp$ret$11 = maxElem;
              break $l$block_1;
            }
            // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromLHS.<anonymous>.<anonymous>' call
            var maxValue = maxElem.r1().k();
            do {
              var e = iterator.j();
              // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromLHS.<anonymous>.<anonymous>' call
              var v = e.r1().k();
              if (compareTo(maxValue, v) < 0) {
                maxElem = e;
                maxValue = v;
              }
            }
             while (iterator.i());
            tmp$ret$11 = maxElem;
          }
          var _destruct__k2r9zo_0 = ensureNotNull(tmp$ret$11);
          // Inline function 'kotlin.collections.component1' call
          var s = _destruct__k2r9zo_0.q1();
          // Inline function 'kotlin.collections.component2' call
          var r = _destruct__k2r9zo_0.r1();
          // Inline function 'kotlin.collections.map' call
          // Inline function 'kotlin.collections.mapTo' call
          var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(r, 10));
          var tmp0_iterator_3 = r.h();
          while (tmp0_iterator_3.i()) {
            var item_0 = tmp0_iterator_3.j();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromLHS.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.also' call
            var this_2 = replace(get_LHS(element_0), '<' + s + '>', '<' + item_0 + '>');
            // Inline function 'kotlin.contracts.contract' call
            // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromLHS.<anonymous>.<anonymous>.<anonymous>' call
            ntReplacements = plus_0(ntReplacements, this_2);
            var tmp_1 = this_2;
            // Inline function 'kotlin.collections.map' call
            var this_3 = get_RHS(element_0);
            // Inline function 'kotlin.collections.mapTo' call
            var destination_3 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
            var tmp0_iterator_4 = this_3.h();
            while (tmp0_iterator_4.i()) {
              var item_1 = tmp0_iterator_4.j();
              // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromLHS.<anonymous>.<anonymous>.<anonymous>' call
              var tmp$ret$17 = replace(item_1, '<' + s + '>', '<' + item_0 + '>');
              destination_3.e(tmp$ret$17);
            }
            var tmp$ret$20 = to(tmp_1, destination_3);
            destination_2.e(tmp$ret$20);
          }
          tmp$ret$4 = destination_2;
        }
        var list_0 = tmp$ret$4;
        addAll(destination_0, list_0);
      }
      tmp_0 = eliminateParametricityFromLHS(eliminateParametricityFromRHS(toSet_0(destination_0), ntReplaced, ntReplacements));
    }
    return tmp_0;
  }
  function expandOr(_this__u8e3s4) {
    _init_properties_Normalization_kt__nz9twr();
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = _this__u8e3s4.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.expandOr.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.fold' call
      var this_0 = get_RHS(element);
      // Inline function 'kotlin.collections.listOf' call
      var tmp$ret$0 = emptyList();
      var accumulator = listOf_0(tmp$ret$0);
      var tmp0_iterator_0 = this_0.h();
      while (tmp0_iterator_0.i()) {
        var element_0 = tmp0_iterator_0.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.expandOr.<anonymous>.<anonymous>' call
        var acc = accumulator;
        var tmp;
        if (element_0 === '|') {
          // Inline function 'kotlin.collections.listOf' call
          var tmp$ret$1 = emptyList();
          tmp = plus(acc, listOf_0(tmp$ret$1));
        } else {
          tmp = plus(dropLast(acc, 1), listOf_0(plus_3(last(acc), element_0)));
        }
        accumulator = tmp;
      }
      var this_1 = accumulator;
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator_1 = this_1.h();
      while (tmp0_iterator_1.i()) {
        var item = tmp0_iterator_1.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.expandOr.<anonymous>.<anonymous>' call
        var tmp$ret$4 = to(get_LHS(element), item);
        destination_0.e(tmp$ret$4);
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return toSet_0(destination);
  }
  function addGlobalStartSymbol(_this__u8e3s4) {
    _init_properties_Normalization_kt__nz9twr();
    var tmp;
    if (get_nonterminals(_this__u8e3s4).a1(get_START_SYMBOL())) {
      tmp = emptySet();
    } else {
      // Inline function 'kotlin.collections.map' call
      var this_0 = get_nonterminals(_this__u8e3s4);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.h();
      while (tmp0_iterator.i()) {
        var item = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.addGlobalStartSymbol.<anonymous>' call
        var tmp$ret$0 = to(get_START_SYMBOL(), listOf_0(item));
        destination.e(tmp$ret$0);
      }
      tmp = destination;
    }
    return plus_1(_this__u8e3s4, tmp);
  }
  function removeUselessSymbols(_this__u8e3s4, generating, reachable) {
    generating = generating === VOID ? genSym(_this__u8e3s4) : generating;
    reachable = reachable === VOID ? reachSym(_this__u8e3s4) : reachable;
    _init_properties_Normalization_kt__nz9twr();
    // Inline function 'kotlin.apply' call
    var this_0 = toMutableSet(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.removeUselessSymbols.<anonymous>' call
    removeAll(this_0, removeUselessSymbols$lambda(generating, reachable));
    return this_0;
  }
  function terminalsToUnitProds(_this__u8e3s4) {
    _init_properties_Normalization_kt__nz9twr();
    var $this = _this__u8e3s4;
    $l$1: do {
      $l$0: do {
        var tmp$ret$3;
        $l$block_1: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var tmp0_iterator = get_nonterminalProductions($this).h();
          while (tmp0_iterator.i()) {
            var element = tmp0_iterator.j();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.terminalsToUnitProds.<anonymous>' call
            var tmp$ret$0;
            $l$block_0: {
              // Inline function 'kotlin.collections.any' call
              var this_0 = get_RHS(element);
              var tmp;
              if (isInterface(this_0, Collection)) {
                tmp = this_0.l();
              } else {
                tmp = false;
              }
              if (tmp) {
                tmp$ret$0 = false;
                break $l$block_0;
              }
              var tmp0_iterator_0 = this_0.h();
              while (tmp0_iterator_0.i()) {
                var element_0 = tmp0_iterator_0.j();
                // Inline function 'ai.hypergraph.kaliningraph.parsing.terminalsToUnitProds.<anonymous>.<anonymous>' call
                if (!get_nonterminals($this).a1(element_0)) {
                  tmp$ret$0 = true;
                  break $l$block_0;
                }
              }
              tmp$ret$0 = false;
            }
            if (tmp$ret$0) {
              tmp$ret$3 = element;
              break $l$block_1;
            }
          }
          tmp$ret$3 = null;
        }
        var tmp0_elvis_lhs = tmp$ret$3;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          return $this;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }
        var mixProd = tmp_0;
        var tmp$ret$5;
        $l$block_2: {
          // Inline function 'kotlin.collections.indexOfFirst' call
          var index = 0;
          var tmp0_iterator_1 = get_RHS(mixProd).h();
          while (tmp0_iterator_1.i()) {
            var item = tmp0_iterator_1.j();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.terminalsToUnitProds.<anonymous>' call
            if (!get_nonterminals($this).a1(item)) {
              tmp$ret$5 = index;
              break $l$block_2;
            }
            index = index + 1 | 0;
          }
          tmp$ret$5 = -1;
        }
        var termIdx = tmp$ret$5;
        var freshName = 'F.' + get_RHS(mixProd).m(termIdx);
        // Inline function 'kotlin.also' call
        var this_1 = toMutableList(get_RHS(mixProd));
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'ai.hypergraph.kaliningraph.parsing.terminalsToUnitProds.<anonymous>' call
        this_1.t(termIdx, freshName);
        var freshRHS = this_1;
        var newProd = to(freshName, listOf_0(get_RHS(mixProd).m(termIdx)));
        var newGrammar = plus_0(plus_0(minus($this, mixProd), to(get_LHS(mixProd), freshRHS)), newProd);
        var tmp_1;
        if (equals($this, newGrammar)) {
          tmp_1 = $this;
        } else {
          $this = newGrammar;
          continue $l$0;
        }
        return tmp_1;
      }
       while (false);
    }
     while (true);
  }
  function refactorRHS(_this__u8e3s4) {
    _init_properties_Normalization_kt__nz9twr();
    var $this = _this__u8e3s4;
    $l$1: do {
      $l$0: do {
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var tmp0_iterator = $this.h();
          while (tmp0_iterator.i()) {
            var element = tmp0_iterator.j();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.refactorRHS.<anonymous>' call
            if (get_RHS(element).k() > 2) {
              tmp$ret$1 = element;
              break $l$block;
            }
          }
          tmp$ret$1 = null;
        }
        var tmp0_elvis_lhs = tmp$ret$1;
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return $this;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var longProd = tmp;
        var freshName = joinToString(takeLast(get_RHS(longProd), 2), '.');
        var newProd = to(freshName, takeLast(get_RHS(longProd), 2));
        var shortProd = to(get_LHS(longProd), plus_3(dropLast(get_RHS(longProd), 2), freshName));
        var newGrammar = plus_0(plus_0(minus($this, longProd), shortProd), newProd);
        var tmp_0;
        if (equals($this, newGrammar)) {
          tmp_0 = $this;
        } else {
          $this = newGrammar;
          continue $l$0;
        }
        return tmp_0;
      }
       while (false);
    }
     while (true);
  }
  function elimVarUnitProds(_this__u8e3s4, toVisit, vars, toElim) {
    toVisit = toVisit === VOID ? get_nonterminals(_this__u8e3s4) : toVisit;
    vars = vars === VOID ? get_nonterminals(_this__u8e3s4) : vars;
    toElim = toElim === VOID ? firstOrNull(toVisit) : toElim;
    _init_properties_Normalization_kt__nz9twr();
    var $this = _this__u8e3s4;
    var toVisit_0 = toVisit;
    var vars_0 = vars;
    var toElim_0 = toElim;
    $l$1: do {
      $l$0: do {
        if (toElim_0 == null) {
          // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
          var this_0 = $this;
          var predicate = elimVarUnitProds$lambda(vars_0);
          // Inline function 'kotlin.apply' call
          var this_1 = toMutableSet(this_0);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
          retainAll(this_1, predicate);
          return this_1;
        }
        // Inline function 'kotlin.collections.map' call
        // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
        var this_2 = $this;
        var predicate_0 = elimVarUnitProds$lambda_0(toElim_0);
        // Inline function 'kotlin.apply' call
        var this_3 = toMutableSet(this_2);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
        retainAll(this_3, predicate_0);
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
        var tmp0_iterator = this_3.h();
        while (tmp0_iterator.i()) {
          var item = tmp0_iterator.j();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.elimVarUnitProds.<anonymous>' call
          var tmp$ret$4 = get_LHS(item);
          destination.e(tmp$ret$4);
        }
        var varsThatMapToMe = toSet_0(destination);
        // Inline function 'kotlin.collections.map' call
        // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
        var this_4 = $this;
        var predicate_1 = elimVarUnitProds$lambda_1(toElim_0);
        // Inline function 'kotlin.apply' call
        var this_5 = toMutableSet(this_4);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
        retainAll(this_5, predicate_1);
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_5, 10));
        var tmp0_iterator_0 = this_5.h();
        while (tmp0_iterator_0.i()) {
          var item_0 = tmp0_iterator_0.j();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.elimVarUnitProds.<anonymous>' call
          var tmp$ret$9 = get_RHS(item_0);
          destination_0.e(tmp$ret$9);
        }
        var thingsIMapTo = toSet_0(destination_0);
        // Inline function 'kotlin.collections.fold' call
        var accumulator = $this;
        var tmp0_iterator_1 = times_2(varsThatMapToMe, thingsIMapTo).h();
        while (tmp0_iterator_1.i()) {
          var element = tmp0_iterator_1.j();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.elimVarUnitProds.<anonymous>' call
          var g = accumulator;
          accumulator = plus_0(g, element);
        }
        var tmp0 = accumulator;
        var tmp1 = toSet_0(drop(toVisit_0, 1));
        $this = tmp0;
        toVisit_0 = tmp1;
        vars_0 = vars_0;
        toElim_0 = firstOrNull(tmp1);
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function refactorEpsilonProds(_this__u8e3s4, nlbls) {
    nlbls = nlbls === VOID ? nullableNonterminals(_this__u8e3s4) : nlbls;
    _init_properties_Normalization_kt__nz9twr();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var this_0 = plus_1(_this__u8e3s4, setOf(to(get_START_SYMBOL(), listOf([get_START_SYMBOL(), '\u03B5']))));
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.refactorEpsilonProds.<anonymous>' call
      var tmp;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var this_1 = get_RHS(element);
        var tmp_0;
        if (isInterface(this_1, Collection)) {
          tmp_0 = this_1.l();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator_0 = this_1.h();
        while (tmp0_iterator_0.i()) {
          var element_0 = tmp0_iterator_0.j();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.refactorEpsilonProds.<anonymous>.<anonymous>' call
          if (nlbls.a1(element_0)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      if (tmp$ret$0) {
        tmp = allSubSeq(element, nlbls);
      } else {
        tmp = listOf_0(element);
      }
      var list = tmp;
      addAll(destination, list);
    }
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var tmp0_iterator_1 = destination.h();
    while (tmp0_iterator_1.i()) {
      var element_1 = tmp0_iterator_1.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.refactorEpsilonProds.<anonymous>' call
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!get_RHS(element_1).l()) {
        destination_0.e(element_1);
      }
    }
    return toSet_0(destination_0);
  }
  function addEpsilonProduction(_this__u8e3s4) {
    _init_properties_Normalization_kt__nz9twr();
    // Inline function 'kotlin.collections.fold' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_0 = get_terminalUnitProductions(_this__u8e3s4);
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.addEpsilonProduction.<anonymous>' call
      if (!contains(pretty(element), '\u03B5')) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
    var tmp0_iterator_0 = destination.h();
    while (tmp0_iterator_0.i()) {
      var item = tmp0_iterator_0.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.addEpsilonProduction.<anonymous>' call
      var tmp$ret$3 = get_LHS(item);
      destination_0.e(tmp$ret$3);
    }
    var accumulator = _this__u8e3s4;
    var tmp0_iterator_1 = toSet_0(destination_0).h();
    while (tmp0_iterator_1.i()) {
      var element_0 = tmp0_iterator_1.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.addEpsilonProduction.<anonymous>' call
      var acc = accumulator;
      accumulator = plus_0(plus_0(acc, to(element_0, listOf([element_0, '\u03B5+']))), to(element_0, listOf(['\u03B5+', element_0])));
    }
    var tmp$ret$7 = accumulator;
    return plus_0(plus_0(tmp$ret$7, to('\u03B5+', listOf(['\u03B5+', '\u03B5+']))), to('\u03B5+', listOf_0('\u03B5')));
  }
  function getParametersIn(_this__u8e3s4, cfg) {
    _init_properties_Normalization_kt__nz9twr();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_unitProductions(cfg);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.getParametersIn.<anonymous>' call
      var tmp$ret$0 = get_LHS(item);
      destination.e(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = destination.h();
    while (tmp0_iterator_0.i()) {
      var element = tmp0_iterator_0.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.getParametersIn.<anonymous>' call
      if (contains(_this__u8e3s4, '<' + element + '>')) {
        destination_0.e(element);
      }
    }
    return destination_0;
  }
  function eliminateParametricityFromRHS(_this__u8e3s4, ntReplaced, ntReplacements) {
    _init_properties_Normalization_kt__nz9twr();
    var tmp;
    if (ntReplacements.l()) {
      tmp = _this__u8e3s4;
    } else {
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'kotlin.collections.flatMapTo' call
      var destination = ArrayList_init_$Create$_0();
      var tmp0_iterator = _this__u8e3s4.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromRHS.<anonymous>' call
        var tmp_0;
        var tmp$ret$0;
        $l$block_0: {
          // Inline function 'kotlin.collections.none' call
          var this_0 = get_RHS(element);
          var tmp_1;
          if (isInterface(this_0, Collection)) {
            tmp_1 = this_0.l();
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
          var tmp0_iterator_0 = this_0.h();
          while (tmp0_iterator_0.i()) {
            var element_0 = tmp0_iterator_0.j();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromRHS.<anonymous>.<anonymous>' call
            if (contains(element_0, ntReplaced)) {
              tmp$ret$0 = false;
              break $l$block_0;
            }
          }
          tmp$ret$0 = true;
        }
        if (tmp$ret$0) {
          tmp_0 = listOf_0(element);
        } else {
          // Inline function 'kotlin.collections.map' call
          // Inline function 'kotlin.collections.mapTo' call
          var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(ntReplacements, 10));
          var tmp0_iterator_1 = ntReplacements.h();
          while (tmp0_iterator_1.i()) {
            var item = tmp0_iterator_1.j();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromRHS.<anonymous>.<anonymous>' call
            var tmp_2 = get_LHS(element);
            // Inline function 'kotlin.collections.map' call
            var this_1 = get_RHS(element);
            // Inline function 'kotlin.collections.mapTo' call
            var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
            var tmp0_iterator_2 = this_1.h();
            while (tmp0_iterator_2.i()) {
              var item_0 = tmp0_iterator_2.j();
              // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromRHS.<anonymous>.<anonymous>.<anonymous>' call
              var tmp$ret$2 = item_0 === ntReplaced ? item : item_0;
              destination_1.e(tmp$ret$2);
            }
            var tmp$ret$5 = to(tmp_2, destination_1);
            destination_0.e(tmp$ret$5);
          }
          tmp_0 = destination_0;
        }
        var list = tmp_0;
        addAll(destination, list);
      }
      tmp = toSet_0(destination);
    }
    return tmp;
  }
  function genSym(_this__u8e3s4, from) {
    var tmp;
    if (from === VOID) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = get_terminalUnitProductions(_this__u8e3s4);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.h();
      while (tmp0_iterator.i()) {
        var item = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.genSym.<anonymous>' call
        var tmp$ret$0 = get_LHS(item);
        destination.e(tmp$ret$0);
      }
      tmp = toSet_0(destination);
    } else {
      tmp = from;
    }
    from = tmp;
    _init_properties_Normalization_kt__nz9twr();
    // Inline function 'kotlin.collections.mutableSetOf' call
    var allGenerating = LinkedHashSet_init_$Create$();
    var nextGenerating = toMutableSet(from);
    $l$1: do {
      $l$0: do {
        var t = first(nextGenerating);
        nextGenerating.r2(t);
        // Inline function 'kotlin.collections.plusAssign' call
        allGenerating.e(t);
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'kotlin.collections.filter' call
        var tmp0_elvis_lhs = get_bimap(_this__u8e3s4).lm().u1(t);
        // Inline function 'kotlin.collections.filterTo' call
        var this_1 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
        var destination_0 = ArrayList_init_$Create$_0();
        var tmp0_iterator_0 = this_1.h();
        while (tmp0_iterator_0.i()) {
          var element = tmp0_iterator_0.j();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.genSym.<anonymous>' call
          if (!allGenerating.a1(element) ? !nextGenerating.a1(element) : false) {
            destination_0.e(element);
          }
        }
        addAll(nextGenerating, destination_0);
      }
       while (false);
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp$ret$7 = !nextGenerating.l();
    }
     while (tmp$ret$7);
    return allGenerating;
  }
  function reachSym(_this__u8e3s4, from) {
    from = from === VOID ? get_START_SYMBOL() : from;
    _init_properties_Normalization_kt__nz9twr();
    var allReachable = mutableSetOf([from]);
    var nextReachable = mutableSetOf([from]);
    $l$1: do {
      $l$0: do {
        var t = first(nextReachable);
        nextReachable.r2(t);
        // Inline function 'kotlin.collections.plusAssign' call
        allReachable.e(t);
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'kotlin.collections.filter' call
        var tmp0_elvis_lhs = get_bimap(_this__u8e3s4).mm().u1(t);
        // Inline function 'kotlin.collections.filterTo' call
        var this_0 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
        var destination = ArrayList_init_$Create$_0();
        var tmp0_iterator = this_0.h();
        while (tmp0_iterator.i()) {
          var element = tmp0_iterator.j();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.reachSym.<anonymous>' call
          if (!allReachable.a1(element) ? !nextReachable.a1(element) : false) {
            destination.e(element);
          }
        }
        addAll(nextReachable, destination);
      }
       while (false);
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp$ret$3 = !nextReachable.l();
    }
     while (tmp$ret$3);
    return allReachable;
  }
  function nullableNonterminals(_this__u8e3s4, nbls, nnts) {
    nbls = nbls === VOID ? setOf('\u03B5') : nbls;
    var tmp;
    if (nnts === VOID) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
      var predicate = nullableNonterminals$lambda(nbls);
      // Inline function 'kotlin.apply' call
      var this_0 = toMutableSet(_this__u8e3s4);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
      retainAll(this_0, predicate);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.h();
      while (tmp0_iterator.i()) {
        var item = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.nullableNonterminals.<anonymous>' call
        var tmp$ret$2 = get_LHS(item);
        destination.e(tmp$ret$2);
      }
      tmp = toSet_0(destination);
    } else {
      tmp = nnts;
    }
    nnts = tmp;
    _init_properties_Normalization_kt__nz9twr();
    var $this = _this__u8e3s4;
    var nbls_0 = nbls;
    var nnts_0 = nnts;
    $l$1: do {
      $l$0: do {
        var tmp_0;
        if (equals(nnts_0, minus(nbls_0, '\u03B5'))) {
          tmp_0 = nnts_0;
        } else {
          var tmp0 = $this;
          var tmp1 = plus_1(nnts_0, nbls_0);
          // Inline function 'kotlin.collections.map' call
          // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
          var predicate_0 = nullableNonterminals$lambda_0(tmp1);
          // Inline function 'kotlin.apply' call
          var this_1 = toMutableSet(tmp0);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
          retainAll(this_1, predicate_0);
          // Inline function 'kotlin.collections.mapTo' call
          var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
          var tmp0_iterator_0 = this_1.h();
          while (tmp0_iterator_0.i()) {
            var item_0 = tmp0_iterator_0.j();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.nullableNonterminals.<anonymous>' call
            var tmp$ret$7 = get_LHS(item_0);
            destination_0.e(tmp$ret$7);
          }
          $this = tmp0;
          nbls_0 = tmp1;
          nnts_0 = toSet_0(destination_0);
          continue $l$0;
        }
        return tmp_0;
      }
       while (false);
    }
     while (true);
  }
  function allSubSeq(_this__u8e3s4, nullables) {
    _init_properties_Normalization_kt__nz9twr();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = get_indices(get_RHS(_this__u8e3s4));
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.allSubSeq.<anonymous>' call
      if (nullables.a1(get_RHS(_this__u8e3s4).m(element))) {
        destination.e(element);
      }
    }
    var this_1 = toSet_2(powerset(destination));
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator_0 = this_1.h();
    while (tmp0_iterator_0.i()) {
      var item = tmp0_iterator_0.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.allSubSeq.<anonymous>' call
      var tmp$ret$3 = to(get_LHS(_this__u8e3s4), drop_1(get_RHS(_this__u8e3s4), nullables, item));
      destination_0.e(tmp$ret$3);
    }
    return toSet_0(destination_0);
  }
  function drop_1(_this__u8e3s4, nullables, keep) {
    _init_properties_Normalization_kt__nz9twr();
    // Inline function 'kotlin.collections.mapIndexedNotNull' call
    // Inline function 'kotlin.collections.mapIndexedNotNullTo' call
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = _this__u8e3s4.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'kotlin.collections.mapIndexedNotNullTo.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      // Inline function 'ai.hypergraph.kaliningraph.parsing.drop.<anonymous>' call
      var i = checkIndexOverflow(tmp1);
      var tmp0_safe_receiver = (nullables.a1(item) ? !keep.a1(i) : false) ? null : (nullables.a1(item) ? keep.a1(i) : false) ? item : item;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.e(tmp0_safe_receiver);
      }
    }
    return destination;
  }
  function elimVarUnitProds$isVariableUnitProd(_this__u8e3s4, vars) {
    return get_RHS(_this__u8e3s4).k() === 1 ? vars.a1(get_RHS(_this__u8e3s4).m(0)) : false;
  }
  function transitiveClosure$lambda($from) {
    return function (it) {
      return $from.a1(it.jl());
    };
  }
  function generateNonterminalStubs$lambda(it) {
    _init_properties_Normalization_kt__nz9twr();
    return isOrganicNonterminal(get_LHS(it));
  }
  function removeUselessSymbols$lambda($generating, $reachable) {
    return function (_destruct__k2r9zo) {
      var s = _destruct__k2r9zo.hc();
      return !$generating.a1(s) ? true : !$reachable.a1(s);
    };
  }
  function elimVarUnitProds$lambda($vars) {
    return function (it) {
      return !elimVarUnitProds$isVariableUnitProd(it, $vars);
    };
  }
  function elimVarUnitProds$lambda_0($toElim) {
    return function (it) {
      return get_RHS(it).k() === 1 ? get_RHS(it).m(0) === $toElim : false;
    };
  }
  function elimVarUnitProds$lambda_1($toElim) {
    return function (it) {
      return get_LHS(it) === $toElim;
    };
  }
  function nullableNonterminals$lambda($nbls) {
    return function (it) {
      return $nbls.o1(get_RHS(it));
    };
  }
  function nullableNonterminals$lambda_0($tmp1) {
    return function (it) {
      return $tmp1.o1(get_RHS(it));
    };
  }
  var properties_initialized_Normalization_kt_pqmvir;
  function _init_properties_Normalization_kt__nz9twr() {
    if (!properties_initialized_Normalization_kt_pqmvir) {
      properties_initialized_Normalization_kt_pqmvir = true;
      rewriteHistory = new LRUCache();
      START_SYMBOL = 'START';
    }
  }
  function illegalWordIndices(_this__u8e3s4, $this, cfg) {
    // Inline function 'kotlin.collections.mapIndexedNotNull' call
    // Inline function 'kotlin.collections.mapIndexedNotNullTo' call
    var this_0 = tokenizeByWhitespace(_this__u8e3s4);
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'kotlin.collections.mapIndexedNotNullTo.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Companion.illegalWordIndices.<anonymous>' call
      var idx = checkIndexOverflow(tmp1);
      var tmp0_safe_receiver = !get_terminals(cfg).a1(item) ? idx : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.e(tmp0_safe_receiver);
      }
    }
    return destination;
  }
  function Companion_0() {
  }
  protoOf(Companion_0).kn = function (cfg, line) {
    var tokens = tokenizeByWhitespace(line);
    // Inline function 'kotlin.let' call
    var tmp;
    if (tokens.a1('_')) {
      tmp = to(emptyList(), emptyList());
    } else if (contains_0(get_language(cfg), line)) {
      tmp = to(emptyList(), emptyList());
    } else if (tokens.k() < 4) {
      tmp = to(emptyList(), toList(get_indices(tokens)));
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.map' call
      var this_0 = parseInvalidWithMaximalFragments(cfg, line);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.h();
      while (tmp0_iterator.i()) {
        var item = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.Companion.build.<anonymous>' call
        var tmp$ret$0 = item.on_1;
        destination.e(tmp$ret$0);
      }
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList_init_$Create$_0();
      var tmp0_iterator_0 = destination.h();
      while (tmp0_iterator_0.i()) {
        var element = tmp0_iterator_0.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.Companion.build.<anonymous>' call
        if (2 < (element.kg_1 - element.jg_1 | 0)) {
          destination_0.e(element);
        }
      }
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Companion.build.<anonymous>' call
      var it = flatten(destination_0);
      // Inline function 'kotlin.collections.filterNot' call
      // Inline function 'kotlin.collections.filterNotTo' call
      var this_1 = get_indices(tokens);
      var destination_1 = ArrayList_init_$Create$_0();
      var tmp0_iterator_1 = this_1.h();
      while (tmp0_iterator_1.i()) {
        var element_0 = tmp0_iterator_1.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.Companion.build.<anonymous>.<anonymous>' call
        if (!it.a1(element_0)) {
          destination_1.e(element_0);
        }
      }
      tmp = to(it, destination_1);
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.Companion.build.<anonymous>' call
    var it_0 = tmp;
    return new Segmentation(it_0.fc_1, it_0.gc_1, illegalWordIndices(line, Companion_instance_0, cfg), line);
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.sn_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).za = function (a, b) {
    return this.sn_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.za(a, b);
  };
  function sam$kotlin_Comparator$0_1(function_0) {
    this.tn_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_1).za = function (a, b) {
    return this.tn_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
    return this.za(a, b);
  };
  function Segmentation$toColorfulHTMLString$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.Segmentation.toColorfulHTMLString.<anonymous>' call
    var tmp = a.fc_1.jg_1;
    // Inline function 'ai.hypergraph.kaliningraph.parsing.Segmentation.toColorfulHTMLString.<anonymous>' call
    var tmp$ret$1 = b.fc_1.jg_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Segmentation$mergeContiguousRanges$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.Segmentation.mergeContiguousRanges.<anonymous>' call
    var tmp = a.jg_1;
    // Inline function 'ai.hypergraph.kaliningraph.parsing.Segmentation.mergeContiguousRanges.<anonymous>' call
    var tmp$ret$1 = b.jg_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function Segmentation(valid, invalid, illegal, line) {
    valid = valid === VOID ? emptyList() : valid;
    invalid = invalid === VOID ? emptyList() : invalid;
    illegal = illegal === VOID ? emptyList() : illegal;
    line = line === VOID ? '' : line;
    this.un_1 = valid;
    this.vn_1 = invalid;
    this.wn_1 = illegal;
    this.xn_1 = line;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.un_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Segmentation.parseableRegions.<anonymous>' call
      var tmp$ret$0 = numberRangeToNumber(item, item);
      destination.e(tmp$ret$0);
    }
    var this_1 = this.bo(destination);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator_0 = this_1.h();
    while (tmp0_iterator_0.i()) {
      var item_0 = tmp0_iterator_0.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Segmentation.parseableRegions.<anonymous>' call
      var tmp$ret$3 = this.co(item_0, this.xn_1);
      destination_0.e(tmp$ret$3);
    }
    tmp.yn_1 = destination_0;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_2 = this.vn_1;
    var destination_1 = ArrayList_init_$Create$_0();
    var tmp0_iterator_1 = this_2.h();
    while (tmp0_iterator_1.i()) {
      var element = tmp0_iterator_1.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Segmentation.unparseableRegions.<anonymous>' call
      if (!this.wn_1.a1(element)) {
        destination_1.e(element);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_1, 10));
    var tmp0_iterator_2 = destination_1.h();
    while (tmp0_iterator_2.i()) {
      var item_1 = tmp0_iterator_2.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Segmentation.unparseableRegions.<anonymous>' call
      var tmp$ret$9 = numberRangeToNumber(item_1, item_1);
      destination_2.e(tmp$ret$9);
    }
    var this_3 = this.bo(destination_2);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_3 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
    var tmp0_iterator_3 = this_3.h();
    while (tmp0_iterator_3.i()) {
      var item_2 = tmp0_iterator_3.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Segmentation.unparseableRegions.<anonymous>' call
      var tmp$ret$12 = this.co(item_2, this.xn_1);
      destination_3.e(tmp$ret$12);
    }
    tmp_0.zn_1 = destination_3;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.map' call
    var this_4 = this.wn_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_4 = ArrayList_init_$Create$(collectionSizeOrDefault(this_4, 10));
    var tmp0_iterator_4 = this_4.h();
    while (tmp0_iterator_4.i()) {
      var item_3 = tmp0_iterator_4.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Segmentation.illegalRegions.<anonymous>' call
      var tmp$ret$15 = numberRangeToNumber(item_3, item_3);
      destination_4.e(tmp$ret$15);
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_5 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_4, 10));
    var tmp0_iterator_5 = destination_4.h();
    while (tmp0_iterator_5.i()) {
      var item_4 = tmp0_iterator_5.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Segmentation.illegalRegions.<anonymous>' call
      var tmp$ret$18 = this.co(item_4, this.xn_1);
      destination_5.e(tmp$ret$18);
    }
    tmp_1.ao_1 = destination_5;
  }
  protoOf(Segmentation).do = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.zn_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Segmentation.toColorfulHTMLString.<anonymous>' call
      var tmp$ret$0 = to(item, 'orange');
      destination.e(tmp$ret$0);
    }
    var tmp = destination;
    // Inline function 'kotlin.collections.map' call
    var this_1 = this.ao_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator_0 = this_1.h();
    while (tmp0_iterator_0.i()) {
      var item_0 = tmp0_iterator_0.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Segmentation.toColorfulHTMLString.<anonymous>' call
      var tmp$ret$3 = to(item_0, 'red');
      destination_0.e(tmp$ret$3);
    }
    var illegalRegions = plus(tmp, destination_0);
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.collections.map' call
    var this_2 = this.yn_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator_1 = this_2.h();
    while (tmp0_iterator_1.i()) {
      var item_1 = tmp0_iterator_1.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Segmentation.toColorfulHTMLString.<anonymous>' call
      var tmp$ret$6 = to(item_1, 'other');
      destination_1.e(tmp$ret$6);
    }
    var this_3 = plus(destination_1, illegalRegions);
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_0 = Segmentation$toColorfulHTMLString$lambda;
    var tmp$ret$9 = new sam$kotlin_Comparator$0_0(tmp_0);
    var regions = sortedWith(this_3, tmp$ret$9);
    if (illegalRegions.l())
      return escapeHTML(this.xn_1);
    var coloredLine = StringBuilder_init_$Create$().q6('<u>');
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_2 = regions.h();
    while (tmp0_iterator_2.i()) {
      var element = tmp0_iterator_2.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Segmentation.toColorfulHTMLString.<anonymous>' call
      var range = element.hc();
      var color = element.ic();
      coloredLine.q6('<span class="' + color + '">' + escapeHTML(substring(this.xn_1, range)) + '<\/span>');
    }
    coloredLine.q6('<\/u>');
    return coloredLine.toString();
  };
  protoOf(Segmentation).bo = function (_this__u8e3s4) {
    // Inline function 'kotlin.collections.fold' call
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = Segmentation$mergeContiguousRanges$lambda;
    var tmp$ret$0 = new sam$kotlin_Comparator$0_1(tmp);
    var this_0 = sortedWith(_this__u8e3s4, tmp$ret$0);
    // Inline function 'kotlin.collections.mutableListOf' call
    var accumulator = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Segmentation.mergeContiguousRanges.<anonymous>' call
      var acc = accumulator;
      if (acc.l())
        acc.e(element);
      else if ((last(acc).kg_1 + 1 | 0) >= element.jg_1) {
        acc.t(get_lastIndex(acc), numberRangeToNumber(last(acc).jg_1, element.kg_1));
      } else
        acc.e(element);
      accumulator = acc;
    }
    return accumulator;
  };
  protoOf(Segmentation).co = function (_this__u8e3s4, str) {
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.text.split' call
    // Inline function 'kotlin.text.toRegex' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = Regex_init_$Create$('\\s+').ea(str, 0);
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Segmentation.charIndicesOfWordsInString.<anonymous>' call
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(element) > 0) {
        destination.e(element);
      }
    }
    var wordTokens = destination;
    // Inline function 'kotlin.text.split' call
    // Inline function 'kotlin.text.toRegex' call
    var whitespaceTokens = Regex_init_$Create$('\\S+').ea(str, 0);
    var allTokens = zip(wordTokens, whitespaceTokens);
    var polarity = startsWith(str, first_0(wordTokens));
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = allTokens.h();
    while (tmp0_iterator_0.i()) {
      var element_0 = tmp0_iterator_0.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Segmentation.charIndicesOfWordsInString.<anonymous>' call
      var list = polarity ? listOf([element_0.fc_1, element_0.gc_1]) : listOf([element_0.gc_1, element_0.fc_1]);
      addAll(destination_0, list);
    }
    var interwoven = destination_0;
    var s = imul(_this__u8e3s4.ja(), 2);
    var l = imul(_this__u8e3s4.kg_1, 2);
    var _destruct__k2r9zo = to(s, l + 1 | 0);
    var startIdx = _destruct__k2r9zo.hc();
    var endIdx = _destruct__k2r9zo.ic();
    var adjust = startIdx === 0 ? 0 : 1;
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var tmp0_iterator_1 = interwoven.p1(0, startIdx).h();
    while (tmp0_iterator_1.i()) {
      var element_1 = tmp0_iterator_1.j();
      var tmp = sum;
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Segmentation.charIndicesOfWordsInString.<anonymous>' call
      sum = tmp + element_1.length | 0;
    }
    var startOffset = sum + adjust | 0;
    // Inline function 'kotlin.collections.sumOf' call
    var sum_0 = 0;
    var tmp0_iterator_2 = interwoven.p1(0, endIdx + 1 | 0).h();
    while (tmp0_iterator_2.i()) {
      var element_2 = tmp0_iterator_2.j();
      var tmp_0 = sum_0;
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Segmentation.charIndicesOfWordsInString.<anonymous>' call
      sum_0 = tmp_0 + element_2.length | 0;
    }
    var endOffset = sum_0;
    return numberRangeToNumber(startOffset, endOffset);
  };
  protoOf(Segmentation).toString = function () {
    return 'Segmentation(valid=' + this.un_1 + ', invalid=' + this.vn_1 + ', illegal=' + this.wn_1 + ', line=' + this.xn_1 + ')';
  };
  protoOf(Segmentation).hashCode = function () {
    var result = hashCode(this.un_1);
    result = imul(result, 31) + hashCode(this.vn_1) | 0;
    result = imul(result, 31) + hashCode(this.wn_1) | 0;
    result = imul(result, 31) + getStringHashCode(this.xn_1) | 0;
    return result;
  };
  protoOf(Segmentation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Segmentation))
      return false;
    var tmp0_other_with_cast = other instanceof Segmentation ? other : THROW_CCE();
    if (!equals(this.un_1, tmp0_other_with_cast.un_1))
      return false;
    if (!equals(this.vn_1, tmp0_other_with_cast.vn_1))
      return false;
    if (!equals(this.wn_1, tmp0_other_with_cast.wn_1))
      return false;
    if (!(this.xn_1 === tmp0_other_with_cast.xn_1))
      return false;
    return true;
  };
  var maxTrees;
  function get_bitwiseAlgebra(_this__u8e3s4) {
    _init_properties_SetValiant_kt__o4zw83();
    return bitwiseAlgebra$delegate.am(_this__u8e3s4, bitwiseAlgebra$factory());
  }
  var bitwiseAlgebra$delegate;
  var satLitAlgebra$delegate;
  function get_HOLE_MARKER() {
    _init_properties_SetValiant_kt__o4zw83();
    return HOLE_MARKER;
  }
  var HOLE_MARKER;
  var freshNames;
  function get_PRODCFG() {
    _init_properties_SetValiant_kt__o4zw83();
    return PRODCFG;
  }
  var PRODCFG;
  function isNonterminalStubIn(_this__u8e3s4, cfg) {
    _init_properties_SetValiant_kt__o4zw83();
    return isNonterminalStub(_this__u8e3s4) ? get_nonterminals(cfg).a1(dropLast_0(drop_0(_this__u8e3s4, 1), 1)) : false;
  }
  function stripEscapeChars(_this__u8e3s4, escapeSeq) {
    escapeSeq = escapeSeq === VOID ? '`' : escapeSeq;
    _init_properties_SetValiant_kt__o4zw83();
    return replace(_this__u8e3s4, escapeSeq, '');
  }
  function parseCFG(_this__u8e3s4, normalize, validate) {
    normalize = normalize === VOID ? true : normalize;
    validate = validate === VOID ? false : validate;
    _init_properties_SetValiant_kt__o4zw83();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = lines(_this__u8e3s4);
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.parseCFG.<anonymous>' call
      if (contains(element, '->')) {
        destination.e(element);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
    var tmp0_iterator_0 = destination.h();
    while (tmp0_iterator_0.i()) {
      var item = tmp0_iterator_0.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.parseCFG.<anonymous>' call
      if (validate ? !isValidProd(item) : false)
        throw Exception_init_$Create$('Invalid production: ' + item);
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.parseCFG.<anonymous>.<anonymous>' call
      var it = splitProd(item);
      var tmp$ret$5 = to(it.m(0), tokenizeByWhitespace(it.m(1)));
      destination_0.e(tmp$ret$5);
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.parseCFG.<anonymous>' call
    var it_0 = toSet_0(destination_0);
    return normalize ? get_normalForm(it_0) : it_0;
  }
  function union_0(left, right) {
    _init_properties_SetValiant_kt__o4zw83();
    var result = booleanArray(left.length);
    var inductionVariable = 0;
    var last = left.length - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result[i] = left[i];
        if (result[i])
          continue $l$loop;
        result[i] = right[i];
      }
       while (inductionVariable <= last);
    return result;
  }
  function fastJoin(vidx, left, right) {
    _init_properties_SetValiant_kt__o4zw83();
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (left.length === 0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isEmpty' call
      tmp = right.length === 0;
    }
    if (tmp) {
      // Inline function 'kotlin.booleanArrayOf' call
      return booleanArrayOf([]);
    }
    var result = booleanArray(vidx.length);
    var inductionVariable = 0;
    var last = vidx.length;
    while (inductionVariable < last) {
      var i = inductionVariable;
      var indexArray = vidx[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var j = 0;
      $l$loop: while (j < indexArray.length) {
        if (left[indexArray[j]] ? right[indexArray[j + 1 | 0]] : false) {
          result[i] = true;
          break $l$loop;
        }
        j = j + 2 | 0;
      }
    }
    return result;
  }
  function maybeUnion(left, right) {
    _init_properties_SetValiant_kt__o4zw83();
    var tmp;
    if (left == null ? true : right == null) {
      tmp = left == null ? right : left;
    } else {
      var tmp_0;
      // Inline function 'kotlin.collections.isEmpty' call
      if (left.length === 0) {
        // Inline function 'kotlin.collections.isNotEmpty' call
        // Inline function 'kotlin.collections.isEmpty' call
        tmp_0 = !(right.length === 0);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = right;
      } else {
        var tmp_1;
        // Inline function 'kotlin.collections.isNotEmpty' call
        // Inline function 'kotlin.collections.isEmpty' call
        if (!(left.length === 0)) {
          // Inline function 'kotlin.collections.isEmpty' call
          tmp_1 = right.length === 0;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          tmp = left;
        } else {
          tmp = union_0(left, right);
        }
      }
    }
    return tmp;
  }
  function maybeJoin(vindexFast, left, right) {
    _init_properties_SetValiant_kt__o4zw83();
    return (left == null ? true : right == null) ? null : fastJoin(vindexFast, left, right);
  }
  function isNonterminalStub(_this__u8e3s4) {
    _init_properties_SetValiant_kt__o4zw83();
    var tmp;
    var tmp_0;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(_this__u8e3s4) > 0) {
      tmp_0 = first_1(_this__u8e3s4) === _Char___init__impl__6a9atx(60);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = last_0(_this__u8e3s4) === _Char___init__impl__6a9atx(62);
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isValidProd(_this__u8e3s4) {
    _init_properties_SetValiant_kt__o4zw83();
    // Inline function 'kotlin.text.matches' call
    return get_PRODCFG().ba(_this__u8e3s4);
  }
  function parseInvalidWithMaximalFragments(_this__u8e3s4, s) {
    _init_properties_SetValiant_kt__o4zw83();
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.collections.fold' call
    var this_0 = parseWithStubs(_this__u8e3s4, s).gc_1;
    // Inline function 'kotlin.collections.setOf' call
    var accumulator = emptySet();
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.parseInvalidWithMaximalFragments.<anonymous>' call
      var acc = accumulator;
      var tmp;
      var tmp$ret$1;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(acc, Collection)) {
          tmp_0 = acc.l();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_0;
        }
        var tmp0_iterator_0 = acc.h();
        while (tmp0_iterator_0.i()) {
          var element_0 = tmp0_iterator_0.j();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.parseInvalidWithMaximalFragments.<anonymous>.<anonymous>' call
          if (isStrictSubsetOf(element.on_1, element_0.on_1)) {
            tmp$ret$1 = true;
            break $l$block_0;
          }
        }
        tmp$ret$1 = false;
      }
      if (tmp$ret$1) {
        tmp = acc;
      } else {
        tmp = plus_0(acc, element);
      }
      accumulator = tmp;
    }
    var this_1 = accumulator;
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_1 = parseInvalidWithMaximalFragments$lambda;
    var tmp$ret$5 = new sam$kotlin_Comparator$0_2(tmp_1);
    return sortedWith(this_1, tmp$ret$5);
  }
  function parseWithStubs(_this__u8e3s4, s) {
    _init_properties_SetValiant_kt__o4zw83();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.parseWithStubs.<anonymous>' call
    var it = asReversed(toUTMatrix(solveFixedpoint(_this__u8e3s4, tokenizeByWhitespace(s))).ko_1);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
    var this_0 = it.m(0).m(0);
    var predicate = parseWithStubs$lambda;
    // Inline function 'kotlin.apply' call
    var this_1 = toMutableSet(this_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
    retainAll(this_1, predicate);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator = this_1.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.parseWithStubs.<anonymous>.<anonymous>' call
      var tmp$ret$2 = item.no();
      destination.e(tmp$ret$2);
    }
    var tmp = toSet_0(destination);
    // Inline function 'kotlin.collections.map' call
    var this_2 = flatten(flatten(it));
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator_0 = this_2.h();
    while (tmp0_iterator_0.i()) {
      var item_0 = tmp0_iterator_0.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.parseWithStubs.<anonymous>.<anonymous>' call
      var tmp$ret$5 = item_0.no();
      destination_0.e(tmp$ret$5);
    }
    return to(tmp, destination_0);
  }
  function solveFixedpoint(_this__u8e3s4, tokens, utMatrix) {
    utMatrix = utMatrix === VOID ? initialUTMatrix(_this__u8e3s4, tokens) : utMatrix;
    _init_properties_SetValiant_kt__o4zw83();
    return utMatrix.oo().po();
  }
  function initialUTMatrix(_this__u8e3s4, tokens, origCFG, bmp, unitReach) {
    origCFG = origCFG === VOID ? get_originalForm(_this__u8e3s4) : origCFG;
    bmp = bmp === VOID ? get_bimap(_this__u8e3s4) : bmp;
    unitReach = unitReach === VOID ? get_unitReachability(origCFG) : unitReach;
    _init_properties_SetValiant_kt__o4zw83();
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.mapIndexed' call
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(tokens, 10));
    var index = 0;
    var tmp0_iterator = tokens.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTMatrix.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var i = checkIndexOverflow(tmp1);
      var tmp;
      if (item === get_HOLE_MARKER()) {
        // Inline function 'kotlin.collections.map' call
        var this_0 = toSet_0(flatten(get_unitReachability(_this__u8e3s4).v1()));
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
        var tmp0_iterator_0 = this_0.h();
        while (tmp0_iterator_0.i()) {
          var item_0 = tmp0_iterator_0.j();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTMatrix.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.map' call
          // Inline function 'kotlin.collections.filter' call
          // Inline function 'kotlin.collections.map' call
          // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
          var this_1 = bmp.om(item_0);
          var predicate = initialUTMatrix$lambda;
          // Inline function 'kotlin.apply' call
          var this_2 = toMutableSet(this_1);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
          retainAll(this_2, predicate);
          // Inline function 'kotlin.collections.mapTo' call
          var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
          var tmp0_iterator_1 = this_2.h();
          while (tmp0_iterator_1.i()) {
            var item_1 = tmp0_iterator_1.j();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTMatrix.<anonymous>.<anonymous>.<anonymous>' call
            var tmp$ret$2 = first_0(item_1);
            destination_1.e(tmp$ret$2);
          }
          // Inline function 'kotlin.collections.filterTo' call
          var destination_2 = ArrayList_init_$Create$_0();
          var tmp0_iterator_2 = destination_1.h();
          while (tmp0_iterator_2.i()) {
            var element = tmp0_iterator_2.j();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTMatrix.<anonymous>.<anonymous>.<anonymous>' call
            if (get_terminals(_this__u8e3s4).a1(element)) {
              destination_2.e(element);
            }
          }
          // Inline function 'kotlin.collections.mapTo' call
          var destination_3 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_2, 10));
          var tmp0_iterator_3 = destination_2.h();
          while (tmp0_iterator_3.i()) {
            var item_2 = tmp0_iterator_3.j();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTMatrix.<anonymous>.<anonymous>.<anonymous>' call
            var tmp$ret$8 = new Tree(item_0, item_2, [], until(i, i + 1 | 0));
            destination_3.e(tmp$ret$8);
          }
          destination_0.e(destination_3);
        }
        tmp = toSet_0(flatten(destination_0));
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTMatrix.<anonymous>.<anonymous>' call
        var nts = bmp.nm(listOf_0(item));
        var tmp_0;
        var tmp$ret$14;
        $l$block_0: {
          // Inline function 'kotlin.collections.none' call
          var tmp_1;
          if (isInterface(tokens, Collection)) {
            tmp_1 = tokens.l();
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp$ret$14 = true;
            break $l$block_0;
          }
          var tmp0_iterator_4 = tokens.h();
          while (tmp0_iterator_4.i()) {
            var element_0 = tmp0_iterator_4.j();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTMatrix.<anonymous>.<anonymous>.<anonymous>' call
            if (isNonterminalStubIn(element_0, _this__u8e3s4)) {
              tmp$ret$14 = false;
              break $l$block_0;
            }
          }
          tmp$ret$14 = true;
        }
        if (tmp$ret$14) {
          tmp_0 = nts;
        } else {
          // Inline function 'kotlin.collections.map' call
          // Inline function 'kotlin.collections.mapTo' call
          var destination_4 = ArrayList_init_$Create$(collectionSizeOrDefault(nts, 10));
          var tmp0_iterator_5 = nts.h();
          while (tmp0_iterator_5.i()) {
            var item_3 = tmp0_iterator_5.j();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTMatrix.<anonymous>.<anonymous>.<anonymous>' call
            var tmp0_elvis_lhs = unitReach.u1(item_3);
            var tmp$ret$16 = tmp0_elvis_lhs == null ? setOf(item_3) : tmp0_elvis_lhs;
            destination_4.e(tmp$ret$16);
          }
          tmp_0 = toSet_0(flatten(destination_4));
        }
        var this_3 = tmp_0;
        // Inline function 'kotlin.collections.mapTo' call
        var destination_5 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
        var tmp0_iterator_6 = this_3.h();
        while (tmp0_iterator_6.i()) {
          var item_4 = tmp0_iterator_6.j();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTMatrix.<anonymous>.<anonymous>' call
          var tmp$ret$21 = new Tree(item_4, item, [], until(i, i + 1 | 0));
          destination_5.e(tmp$ret$21);
        }
        tmp = toSet_0(destination_5);
      }
      var tmp$ret$24 = tmp;
      destination.e(tmp$ret$24);
    }
    var tmp$ret$27 = copyToArray(destination);
    return UTMatrix_init_$Create$(tmp$ret$27, makeForestAlgebra(_this__u8e3s4));
  }
  function makeForestAlgebra(_this__u8e3s4) {
    _init_properties_SetValiant_kt__o4zw83();
    // Inline function 'kotlin.collections.setOf' call
    var tmp = emptySet();
    var tmp_0 = makeForestAlgebra$lambda;
    return new of_1(tmp, VOID, tmp_0, makeForestAlgebra$lambda_0(_this__u8e3s4));
  }
  function treeJoin(_this__u8e3s4, left, right) {
    _init_properties_SetValiant_kt__o4zw83();
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var this_0 = times_2(left, right);
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.treeJoin.<anonymous>' call
      var lt = element.hc();
      var rt = element.ic();
      // Inline function 'kotlin.collections.map' call
      var this_1 = get_bimap(_this__u8e3s4).nm(listOf([lt.ln_1, rt.ln_1]));
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator_0 = this_1.h();
      while (tmp0_iterator_0.i()) {
        var item = tmp0_iterator_0.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.treeJoin.<anonymous>.<anonymous>' call
        var tmp$ret$0 = new Tree(item, null, [lt, rt]);
        destination_0.e(tmp$ret$0);
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return toSet_0(destination);
  }
  function isValid(_this__u8e3s4, str) {
    _init_properties_SetValiant_kt__o4zw83();
    return isValid_0(_this__u8e3s4, tokenizeByWhitespace(str));
  }
  function isValid_0(_this__u8e3s4, str) {
    _init_properties_SetValiant_kt__o4zw83();
    var tmp;
    if (str.k() === 1) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      tmp = !checkUnitWord(_this__u8e3s4, first_0(str)).l();
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.isValid.<anonymous>' call
      tmp = last(initialUTBMatrix(_this__u8e3s4, pad3(str)).oo().ko_1).m(0)[get_bindex(_this__u8e3s4).sm(get_START_SYMBOL())];
    }
    return tmp;
  }
  function checkUnitWord(_this__u8e3s4, str) {
    _init_properties_SetValiant_kt__o4zw83();
    var tmp;
    if (tokenizeByWhitespace(str).k() === 1 ? get_bimap(_this__u8e3s4).nm(listOf_0(str)).a1(get_START_SYMBOL()) : false) {
      tmp = setOf(new Tree(get_START_SYMBOL(), str, []));
    } else {
      // Inline function 'kotlin.collections.setOf' call
      tmp = emptySet();
    }
    return tmp;
  }
  function initialUTBMatrix(_this__u8e3s4, tokens, allNTs, bmp, unitReach) {
    allNTs = allNTs === VOID ? get_nonterminals(_this__u8e3s4) : allNTs;
    bmp = bmp === VOID ? get_bimap(_this__u8e3s4) : bmp;
    unitReach = unitReach === VOID ? get_unitReachability(get_originalForm(_this__u8e3s4)) : unitReach;
    _init_properties_SetValiant_kt__o4zw83();
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(tokens, 10));
    var tmp0_iterator = tokens.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTBMatrix.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTBMatrix.<anonymous>.<anonymous>' call
      var nts = bmp.nm(listOf_0(item));
      var tmp;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.none' call
        var tmp_0;
        if (isInterface(tokens, Collection)) {
          tmp_0 = tokens.l();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator_0 = tokens.h();
        while (tmp0_iterator_0.i()) {
          var element = tmp0_iterator_0.j();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTBMatrix.<anonymous>.<anonymous>.<anonymous>' call
          if (isNonterminalStubInNTs(element, allNTs)) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      if (tmp$ret$0) {
        tmp = nts;
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(nts, 10));
        var tmp0_iterator_1 = nts.h();
        while (tmp0_iterator_1.i()) {
          var item_0 = tmp0_iterator_1.j();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTBMatrix.<anonymous>.<anonymous>.<anonymous>' call
          var tmp0_elvis_lhs = unitReach.u1(item_0);
          var tmp$ret$2 = tmp0_elvis_lhs == null ? setOf(item_0) : tmp0_elvis_lhs;
          destination_0.e(tmp$ret$2);
        }
        tmp = toSet_0(flatten(destination_0));
      }
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTBMatrix.<anonymous>.<anonymous>' call
      var nts_0 = tmp;
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(allNTs, 10));
      var tmp0_iterator_2 = allNTs.h();
      while (tmp0_iterator_2.i()) {
        var item_1 = tmp0_iterator_2.j();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTBMatrix.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$7 = nts_0.a1(item_1);
        destination_1.e(tmp$ret$7);
      }
      var tmp$ret$12 = toBooleanArray(destination_1);
      destination.e(tmp$ret$12);
    }
    var tmp$ret$15 = copyToArray(destination);
    return UTMatrix_init_$Create$(tmp$ret$15, get_bitwiseAlgebra(_this__u8e3s4));
  }
  function pad3(_this__u8e3s4) {
    _init_properties_SetValiant_kt__o4zw83();
    return _this__u8e3s4.l() ? listOf(['\u03B5', '\u03B5', '\u03B5']) : _this__u8e3s4.k() === 1 ? listOf(['\u03B5', first_0(_this__u8e3s4), '\u03B5']) : _this__u8e3s4;
  }
  function isNonterminalStubInNTs(_this__u8e3s4, nts) {
    _init_properties_SetValiant_kt__o4zw83();
    return isNonterminalStub(_this__u8e3s4) ? nts.a1(dropLast_0(drop_0(_this__u8e3s4, 1), 1)) : false;
  }
  function containsHole(_this__u8e3s4) {
    _init_properties_SetValiant_kt__o4zw83();
    return contains(_this__u8e3s4, get_HOLE_MARKER());
  }
  function sam$kotlin_Comparator$0_2(function_0) {
    this.qo_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_2).za = function (a, b) {
    return this.qo_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).compare = function (a, b) {
    return this.za(a, b);
  };
  function bitwiseAlgebra$delegate$lambda($this$cache) {
    _init_properties_SetValiant_kt__o4zw83();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.bitwiseAlgebra$delegate.<anonymous>.<anonymous>' call
    var it = get_vindex($this$cache);
    var tmp = 0;
    var tmp_0 = get_nonterminals($this$cache).k();
    var tmp_1 = booleanArray(tmp_0);
    while (tmp < tmp_0) {
      tmp_1[tmp] = false;
      tmp = tmp + 1 | 0;
    }
    var tmp_2 = bitwiseAlgebra$delegate$lambda$lambda;
    return new of_1(tmp_1, VOID, tmp_2, bitwiseAlgebra$delegate$lambda$lambda_0(it));
  }
  function bitwiseAlgebra$delegate$lambda$lambda($this$of, x, y) {
    _init_properties_SetValiant_kt__o4zw83();
    return union_0(x, y);
  }
  function bitwiseAlgebra$delegate$lambda$lambda_0($it) {
    return function ($this$of, x, y) {
      return fastJoin($it, x, y);
    };
  }
  function satLitAlgebra$delegate$lambda($this$cache) {
    _init_properties_SetValiant_kt__o4zw83();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.satLitAlgebra$delegate.<anonymous>.<anonymous>' call
    var it = get_vindex($this$cache);
    var tmp = 0;
    var tmp_0 = get_nonterminals($this$cache).k();
    var tmp_1 = booleanArray(tmp_0);
    while (tmp < tmp_0) {
      tmp_1[tmp] = false;
      tmp = tmp + 1 | 0;
    }
    var tmp_2 = satLitAlgebra$delegate$lambda$lambda;
    return new of_1(tmp_1, VOID, tmp_2, satLitAlgebra$delegate$lambda$lambda_0(it));
  }
  function satLitAlgebra$delegate$lambda$lambda($this$of, x, y) {
    _init_properties_SetValiant_kt__o4zw83();
    return maybeUnion(x, y);
  }
  function satLitAlgebra$delegate$lambda$lambda_0($it) {
    return function ($this$of, x, y) {
      return maybeJoin($it, x, y);
    };
  }
  function freshNames$lambda(it) {
    _init_properties_SetValiant_kt__o4zw83();
    return toString_0(it.c1_1);
  }
  function freshNames$lambda_0(_destruct__k2r9zo) {
    _init_properties_SetValiant_kt__o4zw83();
    var a = _destruct__k2r9zo.hc();
    var b = _destruct__k2r9zo.ic();
    return a + b;
  }
  function freshNames$lambda_1(it) {
    _init_properties_SetValiant_kt__o4zw83();
    return !(it === get_START_SYMBOL());
  }
  function parseInvalidWithMaximalFragments$lambda(a, b) {
    _init_properties_SetValiant_kt__o4zw83();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.parseInvalidWithMaximalFragments.<anonymous>' call
    var tmp = a.on_1.jg_1;
    // Inline function 'ai.hypergraph.kaliningraph.parsing.parseInvalidWithMaximalFragments.<anonymous>' call
    var tmp$ret$1 = b.on_1.jg_1;
    return compareValues(tmp, tmp$ret$1);
  }
  function parseWithStubs$lambda(it) {
    _init_properties_SetValiant_kt__o4zw83();
    return it.ln_1 === get_START_SYMBOL();
  }
  function initialUTMatrix$lambda(it) {
    _init_properties_SetValiant_kt__o4zw83();
    return it.k() === 1;
  }
  function makeForestAlgebra$lambda($this$of, x, y) {
    _init_properties_SetValiant_kt__o4zw83();
    return union(x, y);
  }
  function makeForestAlgebra$lambda_0($this_makeForestAlgebra) {
    return function ($this$of, x, y) {
      return treeJoin($this_makeForestAlgebra, x, y);
    };
  }
  function bitwiseAlgebra$factory() {
    return getPropertyCallableRef('bitwiseAlgebra', 1, KProperty1, function (receiver) {
      return get_bitwiseAlgebra(receiver);
    }, null);
  }
  var properties_initialized_SetValiant_kt_hyxtcv;
  function _init_properties_SetValiant_kt__o4zw83() {
    if (!properties_initialized_SetValiant_kt_hyxtcv) {
      properties_initialized_SetValiant_kt_hyxtcv = true;
      bitwiseAlgebra$delegate = cache_0(VOID, bitwiseAlgebra$delegate$lambda);
      satLitAlgebra$delegate = cache_0(VOID, satLitAlgebra$delegate$lambda);
      HOLE_MARKER = '_';
      // Inline function 'kotlin.let' call
      var tmp = asSequence(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90)));
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.freshNames.<anonymous>' call
      var it = map(tmp, freshNames$lambda);
      var tmp_0 = times_1(it, it);
      var tmp_1 = plus_4(it, map(tmp_0, freshNames$lambda_0));
      freshNames = filter(tmp_1, freshNames$lambda_1);
      PRODCFG = Regex_init_$Create$('\\s*[^|]+\\s+->\\s+([^|]+\\s+\\|\\s+)*[^|]+\\s*');
    }
  }
  var MAX_SORT_CAPACITY;
  var MAX_SAMPLE;
  var MAX_TOKENS;
  function set_TIMEOUT_MS(_set____db54di) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    TIMEOUT_MS = _set____db54di;
  }
  var TIMEOUT_MS;
  var MAX_REPAIR;
  function get_blocked(_this__u8e3s4) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return blocked$delegate.am(_this__u8e3s4, blocked$factory());
  }
  var blocked$delegate;
  var impossibleBigrams$delegate;
  var possibleBigrams$delegate;
  var startSymbols$delegate;
  function tokenizeByWhitespace(_this__u8e3s4) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.text.split' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = Regex_init_$Create$('\\s+').ea(_this__u8e3s4, 0);
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.tokenizeByWhitespace.<anonymous>' call
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(element)) {
        destination.e(element);
      }
    }
    return destination;
  }
  function tokenizeByWhitespaceAndKeepDelimiters(_this__u8e3s4) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    // Inline function 'kotlin.text.split' call
    return Regex_init_$Create$('(?<=\\s)|(?=\\s)').ea(_this__u8e3s4, 0);
  }
  function blocked$delegate$lambda($this$cache) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    // Inline function 'kotlin.collections.mutableSetOf' call
    return LinkedHashSet_init_$Create$();
  }
  function impossibleBigrams$delegate$lambda($this$cache) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    // Inline function 'kotlin.collections.mutableSetOf' call
    return LinkedHashSet_init_$Create$();
  }
  function possibleBigrams$delegate$lambda($this$cache) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    // Inline function 'kotlin.collections.mutableSetOf' call
    return LinkedHashSet_init_$Create$();
  }
  function startSymbols$delegate$lambda($this$cache) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return mutableSetOf([get_START_SYMBOL()]);
  }
  function blocked$factory() {
    return getPropertyCallableRef('blocked', 1, KProperty1, function (receiver) {
      return get_blocked(receiver);
    }, null);
  }
  var properties_initialized_SyntaxRepair_kt_8h5b0y;
  function _init_properties_SyntaxRepair_kt__jnbhn4() {
    if (!properties_initialized_SyntaxRepair_kt_8h5b0y) {
      properties_initialized_SyntaxRepair_kt_8h5b0y = true;
      MAX_SAMPLE = 20;
      MAX_TOKENS = 80;
      TIMEOUT_MS = 90000;
      MAX_REPAIR = 2;
      blocked$delegate = cache_0(VOID, blocked$delegate$lambda);
      impossibleBigrams$delegate = cache_0(VOID, impossibleBigrams$delegate$lambda);
      possibleBigrams$delegate = cache_0(VOID, possibleBigrams$delegate$lambda);
      startSymbols$delegate = cache_0(VOID, startSymbols$delegate$lambda);
    }
  }
  function denormalize$removeSynthetic(_this__u8e3s4, refactoredChildren, isSynthetic) {
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (_this__u8e3s4.nn_1.length === 0) {
      tmp = listOf_0(new Tree(_this__u8e3s4.ln_1, _this__u8e3s4.mn_1, [], _this__u8e3s4.on_1));
    } else {
      if (isSynthetic(_this__u8e3s4)) {
        tmp = refactoredChildren;
      } else {
        // Inline function 'kotlin.collections.toTypedArray' call
        var tmp$ret$4 = copyToArray(refactoredChildren);
        tmp = listOf_0(new Tree(_this__u8e3s4.ln_1, VOID, tmp$ret$4.slice(), _this__u8e3s4.on_1));
      }
    }
    return tmp;
  }
  function denormalize$removeSynthetic$default(_this__u8e3s4, refactoredChildren, isSynthetic, $super) {
    var tmp;
    if (refactoredChildren === VOID) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = _this__u8e3s4.nn_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(this_0.length);
      var inductionVariable = 0;
      var last = this_0.length;
      while (inductionVariable < last) {
        var item = this_0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'ai.hypergraph.kaliningraph.parsing.Tree.denormalize.removeSynthetic.<anonymous>' call
        var tmp$ret$0 = denormalize$removeSynthetic$default(item);
        destination.e(tmp$ret$0);
      }
      tmp = flatten(destination);
    } else {
      tmp = refactoredChildren;
    }
    refactoredChildren = tmp;
    var tmp_0;
    if (isSynthetic === VOID) {
      tmp_0 = Tree$denormalize$removeSynthetic$lambda(_this__u8e3s4);
    } else {
      tmp_0 = isSynthetic;
    }
    isSynthetic = tmp_0;
    return denormalize$removeSynthetic(_this__u8e3s4, refactoredChildren, isSynthetic);
  }
  function Tree$hash$delegate$lambda(this$0) {
    return function () {
      var tmp = getStringHashCode(this$0.ln_1);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = this$0.mn_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      return (tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0) + getStringHashCode(this$0.ro()) | 0;
    };
  }
  function Tree$indxInfo$delegate$lambda(this$0) {
    return function () {
      return this$0.on_1.jg_1 < 2147483647 ? ' [' + this$0.on_1.jg_1 + ']' : '';
    };
  }
  function Tree$spanInfo$delegate$lambda(this$0) {
    return function () {
      return this$0.on_1.jg_1 < 2147483647 ? ' [' + this$0.on_1 + ']' : '';
    };
  }
  function Tree$denormalize$removeSynthetic$lambda($this_removeSynthetic) {
    return function (it) {
      return 2 <= split($this_removeSynthetic.ln_1, charArrayOf([_Char___init__impl__6a9atx(46)])).k();
    };
  }
  function Tree(root, terminal, children, span) {
    terminal = terminal === VOID ? null : terminal;
    var tmp;
    if (span === VOID) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.fold' call
      var accumulator = to(2147483647, -2147483648);
      var inductionVariable = 0;
      var last = children.length;
      while (inductionVariable < last) {
        var element = children[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'ai.hypergraph.kaliningraph.parsing.Tree.<init>.<anonymous>' call
        var destruct = accumulator;
        var a = destruct.hc();
        var b = destruct.ic();
        // Inline function 'kotlin.comparisons.minOf' call
        var b_0 = element.on_1.jg_1;
        var tmp_0 = Math.min(a, b_0);
        // Inline function 'kotlin.comparisons.maxOf' call
        var b_1 = element.on_1.kg_1;
        var tmp$ret$1 = Math.max(b, b_1);
        accumulator = to(tmp_0, tmp$ret$1);
      }
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Tree.<init>.<anonymous>' call
      var it = accumulator;
      tmp = numberRangeToNumber(it.fc_1, it.gc_1);
    } else {
      tmp = span;
    }
    span = tmp;
    this.ln_1 = root;
    this.mn_1 = terminal;
    this.nn_1 = children;
    this.on_1 = span;
    var tmp_1 = this;
    tmp_1.pn_1 = lazy(Tree$hash$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.qn_1 = lazy(Tree$indxInfo$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.rn_1 = lazy(Tree$spanInfo$delegate$lambda(this));
  }
  protoOf(Tree).pl = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.pn_1;
    hash$factory();
    return this_0.r1();
  };
  protoOf(Tree).toString = function () {
    return this.ln_1;
  };
  protoOf(Tree).hashCode = function () {
    return this.pl();
  };
  protoOf(Tree).equals = function (other) {
    var tmp = this.hashCode();
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = other == null ? null : hashCode(other);
    return tmp === (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
  };
  protoOf(Tree).no = function () {
    return first_0(denormalize$removeSynthetic$default(this));
  };
  protoOf(Tree).so = function (removeEpsilon) {
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (this.nn_1.length === 0) {
      tmp = '' + this.mn_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.map' call
      var this_0 = this.nn_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(this_0.length);
      var inductionVariable = 0;
      var last = this_0.length;
      while (inductionVariable < last) {
        var item = this_0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'ai.hypergraph.kaliningraph.parsing.Tree.contents.<anonymous>' call
        var tmp$ret$1 = item.so(removeEpsilon);
        destination.e(tmp$ret$1);
      }
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Tree.contents.<anonymous>' call
      var tmp_0;
      if (removeEpsilon) {
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.filterTo' call
        var destination_0 = ArrayList_init_$Create$_0();
        var tmp0_iterator = destination.h();
        while (tmp0_iterator.i()) {
          var element = tmp0_iterator.j();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.Tree.contents.<anonymous>.<anonymous>' call
          if (!(element === '\u03B5')) {
            destination_0.e(element);
          }
        }
        tmp_0 = destination_0;
      } else {
        tmp_0 = destination;
      }
      var tmp$ret$8 = tmp_0;
      tmp = joinToString(tmp$ret$8, ' ');
    }
    return tmp;
  };
  protoOf(Tree).ro = function (removeEpsilon, $super) {
    removeEpsilon = removeEpsilon === VOID ? false : removeEpsilon;
    return $super === VOID ? this.so(removeEpsilon) : $super.so.call(this, removeEpsilon);
  };
  function hash$factory() {
    return getPropertyCallableRef('hash', 1, KProperty1, function (receiver) {
      return receiver.pl();
    }, null);
  }
  function get_lecuyerGenerator() {
    _init_properties_Samplers_kt__aqfyff();
    return lecuyerGenerator;
  }
  var lecuyerGenerator;
  var generator;
  function randomString(length, alphabet) {
    length = length === VOID ? 5 : length;
    alphabet = alphabet === VOID ? plus(plus_5(Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(97), _Char___init__impl__6a9atx(122)), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(65), _Char___init__impl__6a9atx(90))), Char__rangeTo_impl_tkncvp(_Char___init__impl__6a9atx(48), _Char___init__impl__6a9atx(57))) : alphabet;
    _init_properties_Samplers_kt__aqfyff();
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var list = ArrayList_init_$Create$(length);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'ai.hypergraph.kaliningraph.sampling.randomString.<anonymous>' call
        // Inline function 'kotlin.collections.random' call
        var tmp$ret$1 = random(alphabet, Default_getInstance()).c1_1;
        list.e(new Char(tmp$ret$1));
      }
       while (inductionVariable < length);
    return joinToString(list, '');
  }
  function choose(_this__u8e3s4, i) {
    _init_properties_Samplers_kt__aqfyff();
    var tmp = asSequence(i);
    return distinct(flatMap(tmp, choose$lambda(_this__u8e3s4)));
  }
  function findAll(base, dimension) {
    dimension = dimension === VOID ? 1 : dimension;
    _init_properties_Samplers_kt__aqfyff();
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var list = ArrayList_init_$Create$(dimension);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < dimension)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'ai.hypergraph.kaliningraph.sampling.findAll.<anonymous>' call
        list.e(base);
      }
       while (inductionVariable < dimension);
    return findAll_0(list);
  }
  function findAll_0(dimensions, cardinalities, asList) {
    var tmp;
    if (cardinalities === VOID) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(dimensions, 10));
      var tmp0_iterator = dimensions.h();
      while (tmp0_iterator.i()) {
        var item = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.sampling.findAll.<anonymous>' call
        var tmp$ret$0 = item.k();
        destination.e(tmp$ret$0);
      }
      tmp = destination;
    } else {
      tmp = cardinalities;
    }
    cardinalities = tmp;
    var tmp_0;
    if (asList === VOID) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(dimensions, 10));
      var tmp0_iterator_0 = dimensions.h();
      while (tmp0_iterator_0.i()) {
        var item_0 = tmp0_iterator_0.j();
        // Inline function 'ai.hypergraph.kaliningraph.sampling.findAll.<anonymous>' call
        var tmp$ret$0_0 = shuffled(item_0);
        destination_0.e(tmp$ret$0_0);
      }
      tmp_0 = destination_0;
    } else {
      tmp_0 = asList;
    }
    asList = tmp_0;
    _init_properties_Samplers_kt__aqfyff();
    var tmp_1 = all(cardinalities);
    return map(tmp_1, findAll$lambda(asList));
  }
  function all(i, l) {
    l = l === VOID ? emptyList() : l;
    _init_properties_Samplers_kt__aqfyff();
    var tmp;
    if (i.l()) {
      tmp = sequenceOf([l]);
    } else {
      var tmp_0 = asSequence(until(0, i.m(0)));
      tmp = flatMap(tmp_0, all$lambda(i, l));
    }
    return tmp;
  }
  function randomVector(size, rand) {
    var tmp;
    if (rand === VOID) {
      tmp = randomVector$lambda;
    } else {
      tmp = rand;
    }
    rand = tmp;
    _init_properties_Samplers_kt__aqfyff();
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(size), null);
    while (tmp_0 < size) {
      tmp_1[tmp_0] = rand();
      tmp_0 = tmp_0 + 1 | 0;
    }
    return toDoubleArray(tmp_1);
  }
  function choose$lambda$lambda(it) {
    _init_properties_Samplers_kt__aqfyff();
    return toSet_0(it);
  }
  function choose$lambda($this_choose) {
    return function (it) {
      var tmp = findAll($this_choose, it);
      return map(tmp, choose$lambda$lambda);
    };
  }
  function findAll$lambda($asList) {
    return function (it) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = zip($asList, it);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.h();
      while (tmp0_iterator.i()) {
        var item = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.sampling.findAll.<anonymous>.<anonymous>' call
        var l = item.hc();
        var i = item.ic();
        var tmp$ret$0 = l.m(i);
        destination.e(tmp$ret$0);
      }
      return destination;
    };
  }
  function all$lambda($i, $l) {
    return function (it) {
      return all(drop($i, 1), plus_3($l, it));
    };
  }
  function randomVector$lambda() {
    _init_properties_Samplers_kt__aqfyff();
    return Default_getInstance().bg();
  }
  var properties_initialized_Samplers_kt_8hmveb;
  function _init_properties_Samplers_kt__aqfyff() {
    if (!properties_initialized_Samplers_kt_8hmveb) {
      properties_initialized_Samplers_kt_8hmveb = true;
      // Inline function 'kotlin.collections.mapIndexed' call
      var this_0 = listOf([1, 3, 7, 11, 13, 19, 25, 37, 59, 47, 61, 55, 41, 67, 97, 91, 109, 103, 115, 131, 193, 137, 145, 143, 241, 157, 185, 167, 229, 171, 213, 191, 253, 203, 211, 239, 247, 285, 369, 299, 425, 301, 361, 333, 357, 351, 501, 355, 397, 391, 451, 463, 487, 529, 545, 539, 865, 557, 721, 563, 817, 601, 617, 607, 1001, 623, 985, 631, 953, 637, 761, 647, 901, 661, 677, 675, 789, 687, 981, 695, 949, 701, 757, 719, 973, 731, 877, 787, 803, 799, 995, 827, 883, 847, 971, 859, 875, 895, 1019, 911, 967, 1033, 1153, 1051, 1729, 1063, 1825, 1069, 1441, 1125, 1329, 1135, 1969, 1163, 1673, 1221, 1305, 1239, 1881, 1255, 1849, 1267, 1657, 1279, 2041, 1293, 1413, 1315, 1573, 1341, 1509, 1347, 1557, 1367, 1877, 1387, 1717, 1423, 1933, 1431, 1869, 1479, 1821, 1527, 1917, 1531, 1789, 1555, 1603, 1591, 1891, 1615, 1939, 1627, 1747, 1663, 2035, 1759, 2011, 1815, 1863, 2053, 2561, 2071, 3713, 2091, 3393, 2093, 2881, 2119, 3617, 2147, 3169, 2149, 2657, 2161, 2273, 2171, 3553, 2189, 2833, 2197, 2705, 2207, 3985, 2217, 2385, 2225, 2257, 2255, 3889, 2279, 3697, 2283, 3441, 2293, 2801, 2317, 2825, 2323, 3209, 2341, 2633, 2345, 2377, 2363, 3529, 2365, 3017, 2373, 2601, 2395, 3497, 2419, 3305, 2421, 2793, 2431, 4073, 2435, 3097, 2447, 3865, 2475, 3417, 2477, 2905, 2489, 2521, 2503, 3641, 2533, 2681, 2551, 3833, 2567, 3589, 2579, 3205, 2581, 2693, 2669, 2917, 2687, 4069, 2717, 2965, 2727, 3669, 2731, 3413, 2739, 3285, 2741, 2773, 2783, 4021, 2799, 3957, 2811, 3573, 2819, 3085, 2867, 3277, 2879, 4045, 2891, 3373, 2911, 4013, 2927, 3949, 2941, 3053, 2951, 3613, 2955, 3357, 2963, 3229, 2991, 3933, 2999, 3805, 3005, 3037, 3035, 3517, 3047, 3709, 3083, 3331, 3103, 3971, 3159, 3747, 3179, 3427, 3187, 3299, 3223, 3731, 3227, 3475, 3251, 3283, 3263, 4051, 3271, 3635, 3319, 3827, 3343, 3851, 3367, 3659, 3399, 3627, 3439, 3947, 3487, 3995, 3515, 3547, 3543, 3771, 3559, 3707, 3623, 3655, 3679, 4007, 3743, 3991, 3791, 3895, 4179, 6465, 4201, 4801, 4219, 7105, 4221, 6081, 4249, 4897, 4305, 4449, 4331, 6881, 4359, 7185, 4383, 7953, 4387, 6289, 4411, 7057, 4431]);
      // Inline function 'kotlin.collections.mapIndexedTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var index = 0;
      var tmp0_iterator = this_0.h();
      while (tmp0_iterator.i()) {
        var item = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.sampling.lecuyerGenerator.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var i = checkIndexOverflow(tmp1);
        var tmp$ret$0 = to(i, listOf_0(toLong(item)));
        destination.e(tmp$ret$0);
      }
      lecuyerGenerator = toMap(destination);
      var tmp = mapOf([to(0, listOf_0(new Long(0, 0))), to(1, listOf_0(new Long(1, 0))), to(2, listOf_0(new Long(7, 0))), to(3, listOf_0(new Long(11, 0))), to(4, listOf([new Long(19, 0), new Long(25, 0)])), to(5, listOf([new Long(37, 0), new Long(41, 0), new Long(47, 0), new Long(55, 0), new Long(59, 0), new Long(61, 0)])), to(6, listOf([new Long(67, 0), new Long(91, 0), new Long(97, 0), new Long(103, 0), new Long(109, 0), new Long(115, 0)])), to(7, listOf([new Long(131, 0), new Long(137, 0), new Long(143, 0), new Long(145, 0), new Long(157, 0), new Long(167, 0), new Long(171, 0), new Long(185, 0), new Long(191, 0), new Long(193, 0), new Long(203, 0), new Long(211, 0), new Long(213, 0), new Long(229, 0), new Long(239, 0), new Long(241, 0), new Long(247, 0), new Long(253, 0)])), to(8, listOf([new Long(285, 0), new Long(299, 0), new Long(301, 0), new Long(333, 0), new Long(351, 0), new Long(355, 0), new Long(357, 0), new Long(361, 0), new Long(369, 0), new Long(391, 0), new Long(397, 0), new Long(425, 0), new Long(451, 0), new Long(463, 0), new Long(487, 0), new Long(501, 0)])), to(9, listOf([new Long(529, 0), new Long(539, 0), new Long(545, 0), new Long(557, 0), new Long(563, 0), new Long(601, 0), new Long(607, 0), new Long(617, 0), new Long(623, 0), new Long(631, 0), new Long(637, 0), new Long(647, 0), new Long(661, 0), new Long(675, 0), new Long(677, 0), new Long(687, 0), new Long(695, 0), new Long(701, 0), new Long(719, 0), new Long(721, 0), new Long(731, 0), new Long(757, 0), new Long(761, 0), new Long(787, 0), new Long(789, 0), new Long(799, 0), new Long(803, 0), new Long(817, 0), new Long(827, 0), new Long(847, 0), new Long(859, 0), new Long(865, 0), new Long(875, 0), new Long(877, 0), new Long(883, 0), new Long(895, 0), new Long(901, 0), new Long(911, 0), new Long(949, 0), new Long(953, 0), new Long(967, 0), new Long(971, 0), new Long(973, 0), new Long(981, 0), new Long(985, 0), new Long(995, 0), new Long(1001, 0), new Long(1019, 0)])), to(10, listOf([new Long(1033, 0), new Long(1051, 0), new Long(1063, 0), new Long(1069, 0), new Long(1125, 0), new Long(1135, 0), new Long(1153, 0), new Long(1163, 0), new Long(1221, 0), new Long(1239, 0), new Long(1255, 0), new Long(1267, 0), new Long(1279, 0), new Long(1293, 0), new Long(1305, 0), new Long(1315, 0), new Long(1329, 0), new Long(1341, 0), new Long(1347, 0), new Long(1367, 0), new Long(1387, 0), new Long(1413, 0), new Long(1423, 0), new Long(1431, 0), new Long(1441, 0), new Long(1479, 0), new Long(1509, 0), new Long(1527, 0), new Long(1531, 0), new Long(1555, 0), new Long(1557, 0), new Long(1573, 0), new Long(1591, 0), new Long(1603, 0), new Long(1615, 0), new Long(1627, 0), new Long(1657, 0), new Long(1663, 0), new Long(1673, 0), new Long(1717, 0), new Long(1729, 0), new Long(1747, 0), new Long(1759, 0), new Long(1789, 0), new Long(1815, 0), new Long(1821, 0), new Long(1825, 0), new Long(1849, 0), new Long(1863, 0), new Long(1869, 0), new Long(1877, 0), new Long(1881, 0), new Long(1891, 0), new Long(1917, 0), new Long(1933, 0), new Long(1939, 0), new Long(1969, 0), new Long(2011, 0), new Long(2035, 0), new Long(2041, 0)])), to(11, listOf([new Long(2053, 0), new Long(2071, 0), new Long(2091, 0), new Long(2093, 0), new Long(2119, 0), new Long(2147, 0), new Long(2149, 0), new Long(2161, 0), new Long(2171, 0), new Long(2189, 0), new Long(2197, 0), new Long(2207, 0), new Long(2217, 0), new Long(2225, 0), new Long(2255, 0), new Long(2257, 0), new Long(2273, 0), new Long(2279, 0), new Long(2283, 0), new Long(2293, 0), new Long(2317, 0), new Long(2323, 0), new Long(2341, 0), new Long(2345, 0), new Long(2363, 0), new Long(2365, 0), new Long(2373, 0), new Long(2377, 0), new Long(2385, 0), new Long(2395, 0), new Long(2419, 0), new Long(2421, 0), new Long(2431, 0), new Long(2435, 0), new Long(2447, 0), new Long(2475, 0), new Long(2477, 0), new Long(2489, 0), new Long(2503, 0), new Long(2521, 0), new Long(2533, 0), new Long(2551, 0), new Long(2561, 0), new Long(2567, 0), new Long(2579, 0), new Long(2581, 0), new Long(2601, 0), new Long(2633, 0), new Long(2657, 0), new Long(2669, 0), new Long(2681, 0), new Long(2687, 0), new Long(2693, 0), new Long(2705, 0), new Long(2717, 0), new Long(2727, 0), new Long(2731, 0), new Long(2739, 0), new Long(2741, 0), new Long(2773, 0), new Long(2783, 0), new Long(2793, 0), new Long(2799, 0), new Long(2801, 0), new Long(2811, 0), new Long(2819, 0), new Long(2825, 0), new Long(2833, 0), new Long(2867, 0), new Long(2879, 0), new Long(2881, 0), new Long(2891, 0), new Long(2905, 0), new Long(2911, 0), new Long(2917, 0), new Long(2927, 0), new Long(2941, 0), new Long(2951, 0), new Long(2955, 0), new Long(2963, 0), new Long(2965, 0), new Long(2991, 0), new Long(2999, 0), new Long(3005, 0), new Long(3017, 0), new Long(3035, 0), new Long(3037, 0), new Long(3047, 0), new Long(3053, 0), new Long(3083, 0), new Long(3085, 0), new Long(3097, 0), new Long(3103, 0), new Long(3159, 0), new Long(3169, 0), new Long(3179, 0), new Long(3187, 0), new Long(3205, 0), new Long(3209, 0), new Long(3223, 0), new Long(3227, 0), new Long(3229, 0), new Long(3251, 0), new Long(3263, 0), new Long(3271, 0), new Long(3277, 0), new Long(3283, 0), new Long(3285, 0), new Long(3299, 0), new Long(3305, 0), new Long(3319, 0), new Long(3331, 0), new Long(3343, 0), new Long(3357, 0), new Long(3367, 0), new Long(3373, 0), new Long(3393, 0), new Long(3399, 0), new Long(3413, 0), new Long(3417, 0), new Long(3427, 0), new Long(3439, 0), new Long(3441, 0), new Long(3475, 0), new Long(3487, 0), new Long(3497, 0), new Long(3515, 0), new Long(3517, 0), new Long(3529, 0), new Long(3543, 0), new Long(3547, 0), new Long(3553, 0), new Long(3559, 0), new Long(3573, 0), new Long(3589, 0), new Long(3613, 0), new Long(3617, 0), new Long(3623, 0), new Long(3627, 0), new Long(3635, 0), new Long(3641, 0), new Long(3655, 0), new Long(3659, 0), new Long(3669, 0), new Long(3679, 0), new Long(3697, 0), new Long(3707, 0), new Long(3709, 0), new Long(3713, 0), new Long(3731, 0), new Long(3743, 0), new Long(3747, 0), new Long(3771, 0), new Long(3791, 0), new Long(3805, 0), new Long(3827, 0), new Long(3833, 0), new Long(3851, 0), new Long(3865, 0), new Long(3889, 0), new Long(3895, 0), new Long(3933, 0), new Long(3947, 0), new Long(3949, 0), new Long(3957, 0), new Long(3971, 0), new Long(3985, 0), new Long(3991, 0), new Long(3995, 0), new Long(4007, 0), new Long(4013, 0), new Long(4021, 0), new Long(4045, 0), new Long(4051, 0), new Long(4069, 0), new Long(4073, 0)])), to(12, listOf([new Long(4179, 0), new Long(4201, 0), new Long(4219, 0), new Long(4221, 0), new Long(4249, 0), new Long(4305, 0), new Long(4331, 0), new Long(4359, 0), new Long(4383, 0), new Long(4387, 0), new Long(4411, 0), new Long(4431, 0), new Long(4439, 0), new Long(4449, 0), new Long(4459, 0), new Long(4485, 0), new Long(4531, 0), new Long(4569, 0), new Long(4575, 0), new Long(4621, 0), new Long(4663, 0), new Long(4669, 0), new Long(4711, 0), new Long(4723, 0), new Long(4735, 0), new Long(4793, 0), new Long(4801, 0), new Long(4811, 0), new Long(4879, 0), new Long(4893, 0), new Long(4897, 0), new Long(4921, 0), new Long(4927, 0), new Long(4941, 0), new Long(4977, 0), new Long(5017, 0), new Long(5027, 0), new Long(5033, 0), new Long(5127, 0), new Long(5169, 0), new Long(5175, 0), new Long(5199, 0), new Long(5213, 0), new Long(5223, 0), new Long(5237, 0), new Long(5287, 0), new Long(5293, 0), new Long(5331, 0), new Long(5391, 0), new Long(5405, 0), new Long(5453, 0), new Long(5523, 0), new Long(5573, 0), new Long(5591, 0), new Long(5597, 0), new Long(5611, 0), new Long(5641, 0), new Long(5703, 0), new Long(5717, 0), new Long(5721, 0), new Long(5797, 0), new Long(5821, 0), new Long(5909, 0), new Long(5913, 0), new Long(5955, 0), new Long(5957, 0), new Long(6005, 0), new Long(6025, 0), new Long(6061, 0), new Long(6067, 0), new Long(6079, 0), new Long(6081, 0), new Long(6231, 0), new Long(6237, 0), new Long(6289, 0), new Long(6295, 0), new Long(6329, 0), new Long(6383, 0), new Long(6427, 0), new Long(6453, 0), new Long(6465, 0), new Long(6501, 0), new Long(6523, 0), new Long(6539, 0), new Long(6577, 0), new Long(6589, 0), new Long(6601, 0), new Long(6607, 0), new Long(6631, 0), new Long(6683, 0), new Long(6699, 0), new Long(6707, 0), new Long(6761, 0), new Long(6795, 0), new Long(6865, 0), new Long(6881, 0), new Long(6901, 0), new Long(6923, 0), new Long(6931, 0), new Long(6943, 0), new Long(6999, 0), new Long(7057, 0), new Long(7079, 0), new Long(7103, 0), new Long(7105, 0), new Long(7123, 0), new Long(7173, 0), new Long(7185, 0), new Long(7191, 0), new Long(7207, 0), new Long(7245, 0), new Long(7303, 0), new Long(7327, 0), new Long(7333, 0), new Long(7355, 0), new Long(7365, 0), new Long(7369, 0), new Long(7375, 0), new Long(7411, 0), new Long(7431, 0), new Long(7459, 0), new Long(7491, 0), new Long(7505, 0), new Long(7515, 0), new Long(7541, 0), new Long(7557, 0), new Long(7561, 0), new Long(7701, 0), new Long(7705, 0), new Long(7727, 0), new Long(7749, 0), new Long(7761, 0), new Long(7783, 0), new Long(7795, 0), new Long(7823, 0), new Long(7907, 0), new Long(7953, 0), new Long(7963, 0), new Long(7975, 0), new Long(8049, 0), new Long(8089, 0), new Long(8123, 0), new Long(8125, 0), new Long(8137, 0)])), to(13, listOf([new Long(8219, 0), new Long(8231, 0), new Long(8245, 0), new Long(8275, 0), new Long(8293, 0), new Long(8303, 0), new Long(8331, 0), new Long(8333, 0), new Long(8351, 0), new Long(8357, 0), new Long(8367, 0), new Long(8379, 0), new Long(8381, 0), new Long(8387, 0), new Long(8393, 0), new Long(8417, 0), new Long(8435, 0), new Long(8461, 0), new Long(8469, 0), new Long(8489, 0), new Long(8495, 0), new Long(8507, 0), new Long(8515, 0), new Long(8551, 0), new Long(8555, 0), new Long(8569, 0), new Long(8585, 0), new Long(8599, 0), new Long(8605, 0), new Long(8639, 0)])), to(14, listOf([new Long(16427, 0), new Long(16441, 0), new Long(16467, 0), new Long(16479, 0), new Long(16507, 0), new Long(16553, 0), new Long(16559, 0), new Long(16571, 0), new Long(16573, 0), new Long(16591, 0), new Long(16619, 0), new Long(16627, 0), new Long(16653, 0), new Long(16659, 0), new Long(16699, 0), new Long(16707, 0), new Long(16795, 0), new Long(16797, 0), new Long(16807, 0), new Long(16813, 0), new Long(16821, 0), new Long(16853, 0), new Long(16857, 0), new Long(16881, 0)])), to(15, listOf([new Long(32771, 0), new Long(32785, 0), new Long(32791, 0), new Long(32813, 0), new Long(32821, 0), new Long(32863, 0), new Long(32887, 0), new Long(32897, 0), new Long(32903, 0), new Long(32915, 0), new Long(32933, 0), new Long(32963, 0), new Long(32975, 0), new Long(32989, 0), new Long(32999, 0), new Long(33013, 0), new Long(33025, 0), new Long(33045, 0), new Long(33061, 0), new Long(33111, 0), new Long(33117, 0), new Long(33121, 0), new Long(33133, 0), new Long(33157, 0)])), to(16, listOf([new Long(65581, 0), new Long(65593, 0), new Long(65599, 0), new Long(65619, 0), new Long(65725, 0), new Long(65751, 0), new Long(65839, 0), new Long(65853, 0), new Long(65871, 0), new Long(65885, 0), new Long(65943, 0), new Long(65953, 0), new Long(65965, 0), new Long(65983, 0), new Long(65991, 0), new Long(66069, 0), new Long(66073, 0), new Long(66085, 0), new Long(66095, 0), new Long(66141, 0), new Long(66157, 0), new Long(66181, 0), new Long(66193, 0), new Long(66209, 0)])), to(17, listOf([new Long(131081, 0), new Long(131087, 0), new Long(131105, 0), new Long(131117, 0), new Long(131123, 0), new Long(131135, 0), new Long(131137, 0), new Long(131157, 0), new Long(131177, 0), new Long(131195, 0), new Long(131213, 0), new Long(131225, 0), new Long(131235, 0), new Long(131247, 0), new Long(131259, 0), new Long(131269, 0), new Long(131317, 0)])), to(18, listOf([new Long(262183, 0), new Long(262207, 0), new Long(262221, 0), new Long(262267, 0), new Long(262273, 0), new Long(262363, 0), new Long(262375, 0), new Long(262381, 0), new Long(262407, 0)])), to(19, listOf([new Long(524327, 0), new Long(524351, 0), new Long(524359, 0), new Long(524371, 0), new Long(524377, 0), new Long(524387, 0), new Long(524399, 0), new Long(524413, 0), new Long(524435, 0), new Long(524463, 0)])), to(20, listOf([new Long(1048585, 0), new Long(1048659, 0), new Long(1048677, 0), new Long(1048681, 0), new Long(1048699, 0)])), to(21, listOf([new Long(2097157, 0), new Long(2097191, 0), new Long(2097215, 0), new Long(2097253, 0)])), to(22, listOf([new Long(4194307, 0), new Long(4194361, 0)])), to(23, listOf([new Long(8388641, 0), new Long(8388651, 0), new Long(8388653, 0), new Long(8388659, 0), new Long(8388671, 0), new Long(8388685, 0), new Long(8388709, 0)])), to(24, listOf_0(new Long(16777243, 0))), to(25, listOf_0(new Long(33554441, 0))), to(26, listOf_0(new Long(67108935, 0))), to(27, listOf_0(new Long(134217767, 0))), to(28, listOf_0(new Long(268435465, 0))), to(29, listOf_0(new Long(536870917, 0))), to(30, listOf_0(new Long(1073741907, 0))), to(31, listOf_0(new Long(-2147483639, 0))), to(32, listOf_0(new Long(197, 1)))]);
      // Inline function 'kotlin.collections.associateWith' call
      var this_1 = numberRangeToNumber(33, 64);
      var result = LinkedHashMap_init_$Create$_1(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_1, 10)), 16));
      // Inline function 'kotlin.collections.associateWithTo' call
      var tmp0_iterator_0 = this_1.h();
      while (tmp0_iterator_0.i()) {
        var element = tmp0_iterator_0.j();
        // Inline function 'ai.hypergraph.kaliningraph.sampling.generator.<anonymous>' call
        var tmp$ret$0_0 = ensureNotNull(get_lecuyerGenerator().u1(element));
        result.v3(element, tmp$ret$0_0);
      }
      generator = plus_6(tmp, result);
    }
  }
  function get_idxs(_this__u8e3s4) {
    _init_properties_Tensor_kt__gweomx();
    return idxs$delegate.am(_this__u8e3s4, idxs$factory());
  }
  var idxs$delegate;
  function get_rows(_this__u8e3s4) {
    _init_properties_Tensor_kt__gweomx();
    return rows$delegate.am(_this__u8e3s4, rows$factory());
  }
  var rows$delegate;
  function get_cols(_this__u8e3s4) {
    _init_properties_Tensor_kt__gweomx();
    return cols$delegate.am(_this__u8e3s4, cols$factory());
  }
  var cols$delegate;
  function get_transpose(_this__u8e3s4) {
    _init_properties_Tensor_kt__gweomx();
    return transpose$delegate.am(_this__u8e3s4, transpose$factory());
  }
  var transpose$delegate;
  function get_BOOLEAN_ALGEBRA() {
    _init_properties_Tensor_kt__gweomx();
    return BOOLEAN_ALGEBRA;
  }
  var BOOLEAN_ALGEBRA;
  var XOR_ALGEBRA;
  var INTEGER_FIELD;
  function get_DOUBLE_FIELD() {
    _init_properties_Tensor_kt__gweomx();
    return DOUBLE_FIELD;
  }
  var DOUBLE_FIELD;
  var MINPLUS_ALGEBRA;
  var MAXPLUS_ALGEBRA;
  var GF2_ALGEBRA;
  function DoubleMatrix_init_$Init$(numRows, numCols, f, $this) {
    numCols = numCols === VOID ? numRows : numCols;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = imul(numRows, numCols);
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'ai.hypergraph.kaliningraph.tensor.DoubleMatrix.<init>.<anonymous>' call
        var tmp$ret$0 = f(index / numCols | 0, index % numCols | 0);
        list.e(tmp$ret$0);
      }
       while (inductionVariable < size);
    DoubleMatrix.call($this, numRows, numCols, list);
    return $this;
  }
  function DoubleMatrix_init_$Create$(numRows, numCols, f) {
    return DoubleMatrix_init_$Init$(numRows, numCols, f, objectCreate(protoOf(DoubleMatrix)));
  }
  function Companion_1() {
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    return Companion_instance_1;
  }
  function DoubleMatrix(numRows, numCols, data, algebra) {
    numCols = numCols === VOID ? numRows : numCols;
    algebra = algebra === VOID ? get_DOUBLE_FIELD() : algebra;
    AbstractMatrix.call(this, algebra, numRows, numCols);
    this.ei_1 = numRows;
    this.fi_1 = numCols;
    this.gi_1 = data;
    this.hi_1 = algebra;
  }
  protoOf(DoubleMatrix).si = function () {
    return this.ei_1;
  };
  protoOf(DoubleMatrix).ti = function () {
    return this.fi_1;
  };
  protoOf(DoubleMatrix).wh = function () {
    return this.gi_1;
  };
  protoOf(DoubleMatrix).to = function () {
    return this.hi_1;
  };
  protoOf(DoubleMatrix).uo = function (that) {
    return this.vo(times(-1.0, that));
  };
  protoOf(DoubleMatrix).wo = function (rows, cols, data, alg) {
    return new DoubleMatrix(rows, cols, data, alg);
  };
  protoOf(DoubleMatrix).xo = function (rows, cols, data, alg) {
    return this.wo(rows, cols, data, isInterface(alg, Field) ? alg : THROW_CCE());
  };
  function Matrix$plus$lambda(this$0, $t) {
    return function ($this$safeJoin, i, j) {
      return $this$safeJoin.hp(this$0.ui(i, j), $t.ui(i, j));
    };
  }
  function Matrix() {
  }
  function flip(_this__u8e3s4, $this) {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = _this__u8e3s4.k();
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'ai.hypergraph.kaliningraph.tensor.Companion.flip.<anonymous>' call
        // Inline function 'kotlin.collections.mapNotNull' call
        // Inline function 'kotlin.collections.mapNotNullTo' call
        var destination = ArrayList_init_$Create$_0();
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator = _this__u8e3s4.h();
        while (tmp0_iterator.i()) {
          var element = tmp0_iterator.j();
          // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
          // Inline function 'ai.hypergraph.kaliningraph.tensor.Companion.flip.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.elementAtOrNull' call
          var tmp0_safe_receiver = getOrNull(element, index);
          if (tmp0_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            destination.e(tmp0_safe_receiver);
          }
        }
        list.e(destination);
      }
       while (inductionVariable < size);
    return list;
  }
  function UTMatrix_init_$Init$(ts, algebra, $this) {
    UTMatrix.call($this, listOf_0(toList_0(ts)), algebra);
    return $this;
  }
  function UTMatrix_init_$Create$(ts, algebra) {
    return UTMatrix_init_$Init$(ts, algebra, objectCreate(protoOf(UTMatrix)));
  }
  function UTMatrix_init_$Init$_0(numRows, numCols, data, alg, $this) {
    var tmp51_subject = data.k();
    var tmp;
    if (tmp51_subject === imul(numRows, numCols)) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = until(0, numRows);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.h();
      while (tmp0_iterator.i()) {
        var item = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.<init>.<anonymous>' call
        // Inline function 'kotlin.collections.mapNotNull' call
        // Inline function 'kotlin.collections.mapNotNullTo' call
        var this_1 = until(item + 1 | 0, numCols);
        var destination_0 = ArrayList_init_$Create$_0();
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_0 = this_1.h();
        while (tmp0_iterator_0.i()) {
          var element = tmp0_iterator_0.j();
          // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
          // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.<init>.<anonymous>.<anonymous>' call
          var tmp0_safe_receiver = data.m(imul(item, numCols) + element | 0);
          if (tmp0_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            destination_0.e(tmp0_safe_receiver);
          }
        }
        destination.e(destination_0);
      }
      tmp = dropLast(flip(destination, Companion_instance_2), 1);
    } else if (tmp51_subject === ((imul(numRows, numCols) - numRows | 0) / 2 | 0)) {
      // Inline function 'kotlin.collections.fold' call
      var this_2 = downTo(numCols - 1 | 0, 1);
      // Inline function 'kotlin.collections.listOf' call
      var tmp$ret$7 = emptyList();
      var accumulator = to(tmp$ret$7, 0);
      var tmp0_iterator_1 = this_2.h();
      while (tmp0_iterator_1.i()) {
        var element_0 = tmp0_iterator_1.j();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.<init>.<anonymous>' call
        var acc = accumulator;
        accumulator = to(plus(acc.fc_1, listOf_0(data.p1(acc.gc_1, acc.gc_1 + element_0 | 0))), acc.gc_1 + element_0 | 0);
      }
      var tmp$ret$9 = accumulator;
      tmp = flip(tmp$ret$9.fc_1, Companion_instance_2);
    } else {
      throw Exception_init_$Create$('Invalid UTMatrix shape: ' + numRows + '.' + numCols + ' != ' + data.k());
    }
    UTMatrix.call($this, tmp, alg);
    return $this;
  }
  function UTMatrix_init_$Create$_0(numRows, numCols, data, alg) {
    return UTMatrix_init_$Init$_0(numRows, numCols, data, alg, objectCreate(protoOf(UTMatrix)));
  }
  function Companion_2() {
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    return Companion_instance_2;
  }
  function UTMatrix$data$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.collections.map' call
      var this_0 = flip(plus(this$0.ko_1, listOf_0(emptyList())), Companion_instance_2);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.h();
      while (tmp0_iterator.i()) {
        var item = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.data$delegate.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var size = (this$0.ko_1.k() + 1 | 0) - item.k() | 0;
        var list = ArrayList_init_$Create$(size);
        // Inline function 'kotlin.repeat' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < size)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlin.collections.MutableList.<anonymous>' call
            // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.data$delegate.<anonymous>.<anonymous>.<anonymous>' call
            var tmp$ret$0 = this$0.lo_1.ip();
            list.e(tmp$ret$0);
          }
           while (inductionVariable < size);
        var tmp$ret$3 = plus(list, item);
        destination.e(tmp$ret$3);
      }
      return flatten(destination);
    };
  }
  function UTMatrix$toFullMatrix$lambda(this$0) {
    return function (r, c) {
      return c <= r ? this$0.lo_1.ip() : this$0.ko_1.m((c - r | 0) - 1 | 0).m(r);
    };
  }
  function UTMatrix(diagonals, algebra) {
    AbstractMatrix.call(this, algebra, first_0(diagonals).k() + 1 | 0);
    this.ko_1 = diagonals;
    this.lo_1 = algebra;
    var tmp = this;
    tmp.mo_1 = lazy(UTMatrix$data$delegate$lambda(this));
  }
  protoOf(UTMatrix).to = function () {
    return this.lo_1;
  };
  protoOf(UTMatrix).wh = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.mo_1;
    data$factory();
    return this_0.r1();
  };
  protoOf(UTMatrix).jp = function (carry, iteration, maxIterations) {
    var tmp;
    if (last(this.ko_1).k() === 1) {
      tmp = this;
    } else if (iteration === maxIterations) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = downTo(last(this.ko_1).k() - 1 | 0, 1);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.h();
      while (tmp0_iterator.i()) {
        var item = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpoint.<anonymous>' call
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var list = ArrayList_init_$Create$(item);
        // Inline function 'kotlin.repeat' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < item)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlin.collections.MutableList.<anonymous>' call
            // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpoint.<anonymous>.<anonymous>' call
            var tmp$ret$3 = this.lo_1.ip();
            list.e(tmp$ret$3);
          }
           while (inductionVariable < item);
        destination.e(list);
      }
      tmp = new UTMatrix(plus(this.ko_1, destination), this.lo_1);
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.map' call
      var this_1 = windowed(carry, 2, 1);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator_0 = this_1.h();
      while (tmp0_iterator_0.i()) {
        var item_0 = tmp0_iterator_0.j();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpoint.<anonymous>' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.fold' call
        // Inline function 'kotlin.collections.map' call
        var this_2 = zip(item_0.m(0).qh_1, item_0.m(1).rh_1);
        // Inline function 'kotlin.collections.mapTo' call
        var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
        var tmp0_iterator_1 = this_2.h();
        while (tmp0_iterator_1.i()) {
          var item_1 = tmp0_iterator_1.j();
          // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpoint.<anonymous>.<anonymous>' call
          var l = item_1.hc();
          var r = item_1.ic();
          // Inline function 'kotlin.with' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpoint.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$11 = this.lo_1.kp(l, r);
          destination_1.e(tmp$ret$11);
        }
        var accumulator = this.lo_1.ip();
        var tmp0_iterator_2 = destination_1.h();
        while (tmp0_iterator_2.i()) {
          var element = tmp0_iterator_2.j();
          // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpoint.<anonymous>.<anonymous>' call
          var t = accumulator;
          // Inline function 'kotlin.with' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpoint.<anonymous>.<anonymous>.<anonymous>' call
          accumulator = this.lo_1.hp(element, t);
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpoint.<anonymous>.<anonymous>' call
        var it = accumulator;
        var tmp$ret$20 = to_0(to(it, plus_3(item_0.m(0).qh_1, it)), plus(listOf_0(it), item_0.m(1).rh_1));
        destination_0.e(tmp$ret$20);
      }
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpoint.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_0, 10));
      var tmp0_iterator_3 = destination_0.h();
      while (tmp0_iterator_3.i()) {
        var item_2 = tmp0_iterator_3.j();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpoint.<anonymous>.<anonymous>' call
        var tmp$ret$23 = item_2.ph_1;
        destination_2.e(tmp$ret$23);
      }
      tmp = (new UTMatrix(plus(this.ko_1, listOf_0(destination_2)), this.lo_1)).jp(destination_0, iteration + 1 | 0, maxIterations);
    }
    return tmp;
  };
  protoOf(UTMatrix).oo = function (carry, iteration, maxIterations, $super) {
    var tmp;
    if (carry === VOID) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = last(this.ko_1);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.h();
      while (tmp0_iterator.i()) {
        var item = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpoint.<anonymous>' call
        var tmp$ret$0 = to_0(to(item, listOf_0(item)), listOf_0(item));
        destination.e(tmp$ret$0);
      }
      tmp = destination;
    } else {
      tmp = carry;
    }
    carry = tmp;
    iteration = iteration === VOID ? 0 : iteration;
    maxIterations = maxIterations === VOID ? first_0(this.ko_1).k() : maxIterations;
    return $super === VOID ? this.jp(carry, iteration, maxIterations) : $super.jp.call(this, carry, iteration, maxIterations);
  };
  protoOf(UTMatrix).po = function () {
    var tmp;
    if (!(last(this.ko_1).k() === 1)) {
      throw IndexOutOfBoundsException_init_$Create$('OOB: [' + first_0(this.ko_1).k() + ', ' + last(this.ko_1).k() + ']');
    } else {
      var tmp_0 = this.ko_1.k() + 1 | 0;
      var tmp_1 = this.ko_1.k() + 1 | 0;
      tmp = FreeMatrix_init_$Create$_0(this.lo_1, tmp_0, tmp_1, UTMatrix$toFullMatrix$lambda(this));
    }
    return tmp;
  };
  protoOf(UTMatrix).lp = function (rows, cols, data, alg) {
    return UTMatrix_init_$Create$_0(rows, cols, data, alg);
  };
  protoOf(UTMatrix).xo = function (rows, cols, data, alg) {
    return this.lp(rows, cols, data, isInterface(alg, Ring) ? alg : THROW_CCE());
  };
  function FreeMatrix_init_$Init$(numRows, numCols, f, $this) {
    numCols = numCols === VOID ? numRows : numCols;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = imul(numRows, numCols);
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'ai.hypergraph.kaliningraph.tensor.FreeMatrix.<init>.<anonymous>' call
        var tmp$ret$0 = f(index / numCols | 0, index % numCols | 0);
        list.e(tmp$ret$0);
      }
       while (inductionVariable < size);
    FreeMatrix.call($this, numRows, numCols, list);
    return $this;
  }
  function FreeMatrix_init_$Create$(numRows, numCols, f) {
    return FreeMatrix_init_$Init$(numRows, numCols, f, objectCreate(protoOf(FreeMatrix)));
  }
  function FreeMatrix_init_$Init$_0(algebra, numRows, numCols, f, $this) {
    numCols = numCols === VOID ? numRows : numCols;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = imul(numRows, numCols);
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'ai.hypergraph.kaliningraph.tensor.FreeMatrix.<init>.<anonymous>' call
        var tmp$ret$0 = f(index / numCols | 0, index % numCols | 0);
        list.e(tmp$ret$0);
      }
       while (inductionVariable < size);
    FreeMatrix.call($this, numRows, numCols, list, algebra);
    return $this;
  }
  function FreeMatrix_init_$Create$_0(algebra, numRows, numCols, f) {
    return FreeMatrix_init_$Init$_0(algebra, numRows, numCols, f, objectCreate(protoOf(FreeMatrix)));
  }
  function FreeMatrix$toString$lambda($colWidth) {
    return function (it) {
      // Inline function 'kotlin.collections.mapIndexed' call
      // Inline function 'kotlin.collections.mapIndexedTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(it, 10));
      var index = 0;
      var tmp0_iterator = it.h();
      while (tmp0_iterator.i()) {
        var item = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.FreeMatrix.toString.<anonymous>.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var i = checkIndexOverflow(tmp1);
        var tmp$ret$0 = padEnd('' + item, $colWidth.m(i));
        destination.e(tmp$ret$0);
      }
      return joinToString(destination, '  |  ', '|  ', '  |');
    };
  }
  function FreeMatrix(numRows, numCols, data, algebra) {
    numCols = numCols === VOID ? numRows : numCols;
    var tmp;
    if (algebra === VOID) {
      var tmp_0 = TODO_ALGEBRA(firstOrNull_0(data));
      tmp = isInterface(tmp_0, Ring) ? tmp_0 : THROW_CCE();
    } else {
      tmp = algebra;
    }
    algebra = tmp;
    AbstractMatrix.call(this, algebra, numRows, numCols);
    this.oi_1 = numRows;
    this.pi_1 = numCols;
    this.qi_1 = data;
    this.ri_1 = algebra;
  }
  protoOf(FreeMatrix).si = function () {
    return this.oi_1;
  };
  protoOf(FreeMatrix).ti = function () {
    return this.pi_1;
  };
  protoOf(FreeMatrix).wh = function () {
    return this.qi_1;
  };
  protoOf(FreeMatrix).to = function () {
    return this.ri_1;
  };
  protoOf(FreeMatrix).lp = function (rows, cols, data, alg) {
    return new FreeMatrix(rows, cols, data, this.to());
  };
  protoOf(FreeMatrix).xo = function (rows, cols, data, alg) {
    return this.lp(rows, cols, data, isInterface(alg, Ring) ? alg : THROW_CCE());
  };
  protoOf(FreeMatrix).toString = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_cols(this);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.tensor.FreeMatrix.toString.<anonymous>' call
      // Inline function 'kotlin.collections.maxOf' call
      var iterator = item.h();
      if (!iterator.i())
        throw NoSuchElementException_init_$Create$();
      // Inline function 'ai.hypergraph.kaliningraph.tensor.FreeMatrix.toString.<anonymous>.<anonymous>' call
      var maxValue = ('' + iterator.j()).length;
      while (iterator.i()) {
        // Inline function 'ai.hypergraph.kaliningraph.tensor.FreeMatrix.toString.<anonymous>.<anonymous>' call
        var v = ('' + iterator.j()).length;
        if (compareTo(maxValue, v) < 0) {
          maxValue = v;
        }
      }
      var tmp$ret$3 = maxValue;
      destination.e(tmp$ret$3);
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.tensor.FreeMatrix.toString.<anonymous>' call
    var tmp = get_rows(this);
    return '\n' + joinToString(tmp, '\n', VOID, VOID, VOID, VOID, FreeMatrix$toString$lambda(destination));
  };
  function AbstractMatrix$values$delegate$lambda(this$0) {
    return function () {
      return toSet_0(this$0.wh());
    };
  }
  function AbstractMatrix$map$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.collections.fold' call
      var this_0 = get_idxs(this$0);
      // Inline function 'kotlin.collections.mutableMapOf' call
      var accumulator = LinkedHashMap_init_$Create$();
      var tmp0_iterator = this_0.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.AbstractMatrix.map$delegate.<anonymous>.<anonymous>' call
        var map = accumulator;
        // Inline function 'kotlin.collections.component1' call
        var r = element.m(0);
        // Inline function 'kotlin.collections.component2' call
        var c = element.m(1);
        var element_0 = this$0.ui(r, c);
        if (!equals(element_0, this$0.to().ip())) {
          // Inline function 'kotlin.collections.set' call
          var key = Π(r, c, element_0);
          map.v3(key, 1);
        }
        accumulator = map;
      }
      return accumulator;
    };
  }
  function AbstractMatrix$toString$lambda($colWidth) {
    return function (it) {
      // Inline function 'kotlin.collections.mapIndexed' call
      // Inline function 'kotlin.collections.mapIndexedTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(it, 10));
      var index = 0;
      var tmp0_iterator = it.h();
      while (tmp0_iterator.i()) {
        var item = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.AbstractMatrix.toString.<anonymous>.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var i = checkIndexOverflow(tmp1);
        var tmp$ret$0 = padEnd('' + item, $colWidth.m(i));
        destination.e(tmp$ret$0);
      }
      return joinToString(destination, '  ');
    };
  }
  function AbstractMatrix$hash$delegate$lambda(this$0) {
    return function () {
      var result = getObjectHashCode(this$0);
      result = imul(31, result) + this$0.si() | 0;
      result = imul(31, result) + this$0.ti() | 0;
      result = imul(31, result) + hashCode(this$0.wh()) | 0;
      result = imul(31, result) + hashCode(this$0.to()) | 0;
      return result;
    };
  }
  function AbstractMatrix(algebra, numRows, numCols) {
    numCols = numCols === VOID ? numRows : numCols;
    this.yo_1 = algebra;
    this.zo_1 = numRows;
    this.ap_1 = numCols;
    var tmp = this;
    tmp.bp_1 = lazy(AbstractMatrix$values$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.cp_1 = lazy(AbstractMatrix$map$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.dp_1 = lazy(AbstractMatrix$hash$delegate$lambda(this));
  }
  protoOf(AbstractMatrix).to = function () {
    return this.yo_1;
  };
  protoOf(AbstractMatrix).si = function () {
    return this.zo_1;
  };
  protoOf(AbstractMatrix).ti = function () {
    return this.ap_1;
  };
  protoOf(AbstractMatrix).toString = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_cols(this);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.tensor.AbstractMatrix.toString.<anonymous>' call
      // Inline function 'kotlin.collections.maxOf' call
      var iterator = item.h();
      if (!iterator.i())
        throw NoSuchElementException_init_$Create$();
      // Inline function 'ai.hypergraph.kaliningraph.tensor.AbstractMatrix.toString.<anonymous>.<anonymous>' call
      var maxValue = ('' + iterator.j()).length;
      while (iterator.i()) {
        // Inline function 'ai.hypergraph.kaliningraph.tensor.AbstractMatrix.toString.<anonymous>.<anonymous>' call
        var v = ('' + iterator.j()).length;
        if (compareTo(maxValue, v) < 0) {
          maxValue = v;
        }
      }
      var tmp$ret$3 = maxValue;
      destination.e(tmp$ret$3);
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.tensor.AbstractMatrix.toString.<anonymous>' call
    var tmp = get_rows(this);
    return '\n' + joinToString(tmp, '\n', VOID, VOID, VOID, VOID, AbstractMatrix$toString$lambda(destination));
  };
  protoOf(AbstractMatrix).equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof AbstractMatrix))
      THROW_CCE();
    if (!(this.si() === other.si()))
      return false;
    if (!(this.ti() === other.ti()))
      return false;
    if (!equals(this.wh(), other.wh()))
      return false;
    return true;
  };
  protoOf(AbstractMatrix).pl = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.dp_1;
    hash$factory_0();
    return this_0.r1();
  };
  protoOf(AbstractMatrix).hashCode = function () {
    return this.pl();
  };
  function times(_this__u8e3s4, value) {
    _init_properties_Tensor_kt__gweomx();
    return times_0(value, _this__u8e3s4);
  }
  function toUTMatrix(_this__u8e3s4) {
    _init_properties_Tensor_kt__gweomx();
    return UTMatrix_init_$Create$_0(_this__u8e3s4.si(), _this__u8e3s4.ti(), _this__u8e3s4.wh(), _this__u8e3s4.to());
  }
  function TODO_ALGEBRA(t) {
    _init_properties_Tensor_kt__gweomx();
    var tmp = TODO_ALGEBRA$lambda;
    return new of_1(t, VOID, tmp, TODO_ALGEBRA$lambda_0);
  }
  function times_0(_this__u8e3s4, value) {
    _init_properties_Tensor_kt__gweomx();
    var tmp = _this__u8e3s4.si();
    var tmp_0 = _this__u8e3s4.ti();
    // Inline function 'kotlin.collections.map' call
    var this_0 = _this__u8e3s4.wh();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.tensor.times.<anonymous>' call
      var tmp$ret$0 = item * value;
      destination.e(tmp$ret$0);
    }
    return new DoubleMatrix(tmp, tmp_0, destination);
  }
  function BooleanMatrix$Companion$one$lambda(i, j) {
    return i === j;
  }
  function BooleanMatrix_init_$Init$(numRows, numCols, f, $this) {
    numCols = numCols === VOID ? numRows : numCols;
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = imul(numRows, numCols);
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'ai.hypergraph.kaliningraph.tensor.BooleanMatrix.<init>.<anonymous>' call
        var tmp$ret$0 = f(index / numCols | 0, index % numCols | 0);
        list.e(tmp$ret$0);
      }
       while (inductionVariable < size);
    BooleanMatrix.call($this, numRows, numCols, list);
    return $this;
  }
  function BooleanMatrix_init_$Create$(numRows, numCols, f) {
    return BooleanMatrix_init_$Init$(numRows, numCols, f, objectCreate(protoOf(BooleanMatrix)));
  }
  function Companion_3() {
  }
  protoOf(Companion_3).mp = function (size) {
    return BooleanMatrix_init_$Create$(size, VOID, BooleanMatrix$Companion$one$lambda);
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function BooleanMatrix$isFull$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var this_0 = this$0.wh();
        var tmp;
        if (isInterface(this_0, Collection)) {
          tmp = this_0.l();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = this_0.h();
        while (tmp0_iterator.i()) {
          var element = tmp0_iterator.j();
          // Inline function 'ai.hypergraph.kaliningraph.tensor.BooleanMatrix.isFull$delegate.<anonymous>.<anonymous>' call
          if (!element) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      return tmp$ret$0;
    };
  }
  function BooleanMatrix$toString$lambda(it) {
    return joinToString(it, ' ', VOID, VOID, VOID, VOID, BooleanMatrix$toString$lambda$lambda);
  }
  function BooleanMatrix$toString$lambda$lambda(it) {
    return it ? '1' : '0';
  }
  function BooleanMatrix(numRows, numCols, data, algebra) {
    numCols = numCols === VOID ? numRows : numCols;
    algebra = algebra === VOID ? get_BOOLEAN_ALGEBRA() : algebra;
    AbstractMatrix.call(this, algebra, numRows, numCols);
    this.tp_1 = numRows;
    this.up_1 = numCols;
    this.vp_1 = data;
    this.wp_1 = algebra;
    var tmp = this;
    tmp.xp_1 = lazy(BooleanMatrix$isFull$delegate$lambda(this));
  }
  protoOf(BooleanMatrix).si = function () {
    return this.tp_1;
  };
  protoOf(BooleanMatrix).ti = function () {
    return this.up_1;
  };
  protoOf(BooleanMatrix).wh = function () {
    return this.vp_1;
  };
  protoOf(BooleanMatrix).to = function () {
    return this.wp_1;
  };
  protoOf(BooleanMatrix).toString = function () {
    var tmp = chunked(this.wh(), this.ti());
    return joinToString(tmp, '\n', '\n', VOID, VOID, VOID, BooleanMatrix$toString$lambda);
  };
  protoOf(BooleanMatrix).yp = function (rows, cols, data, alg) {
    return new BooleanMatrix(rows, cols, data, alg);
  };
  protoOf(BooleanMatrix).xo = function (rows, cols, data, alg) {
    return this.yp(rows, cols, data, isInterface(alg, Ring) ? alg : THROW_CCE());
  };
  function minus_3(_this__u8e3s4, mat) {
    _init_properties_Tensor_kt__gweomx();
    return _this__u8e3s4.uo(toDoubleMatrix_0(mat));
  }
  function toDoubleMatrix_0(_this__u8e3s4) {
    _init_properties_Tensor_kt__gweomx();
    var tmp = _this__u8e3s4.si();
    var tmp_0 = _this__u8e3s4.ti();
    return DoubleMatrix_init_$Create$(tmp, tmp_0, toDoubleMatrix$lambda_0(_this__u8e3s4));
  }
  function idxs$delegate$lambda($this$cache) {
    _init_properties_Tensor_kt__gweomx();
    return allPairs($this$cache.si(), $this$cache.ti());
  }
  function rows$delegate$lambda($this$cache) {
    _init_properties_Tensor_kt__gweomx();
    return chunked($this$cache.wh(), $this$cache.ti());
  }
  function cols$delegate$lambda($this$cache) {
    _init_properties_Tensor_kt__gweomx();
    // Inline function 'kotlin.collections.map' call
    var this_0 = until(0, $this$cache.ti());
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.tensor.cols$delegate.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_1 = get_rows($this$cache);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator_0 = this_1.h();
      while (tmp0_iterator_0.i()) {
        var item_0 = tmp0_iterator_0.j();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.cols$delegate.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$0 = item_0.m(item);
        destination_0.e(tmp$ret$0);
      }
      destination.e(destination_0);
    }
    return destination;
  }
  function transpose$delegate$lambda($this$cache) {
    _init_properties_Tensor_kt__gweomx();
    return $this$cache.xh($this$cache.ti(), $this$cache.si(), flatten(get_cols($this$cache)));
  }
  function BOOLEAN_ALGEBRA$lambda($this$of, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return a ? true : b;
  }
  function BOOLEAN_ALGEBRA$lambda_0($this$of, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return a ? b : false;
  }
  function XOR_ALGEBRA$lambda($this$of, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return !!(a ^ b);
  }
  function XOR_ALGEBRA$lambda_0($this$of, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return !!(a & b);
  }
  function INTEGER_FIELD$lambda($this$of, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return a + b | 0;
  }
  function INTEGER_FIELD$lambda_0($this$of, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return imul(a, b);
  }
  function INTEGER_FIELD$lambda_1($this$of, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return a - b | 0;
  }
  function INTEGER_FIELD$lambda_2($this$of, _unused_var__etf5q3, _unused_var__etf5q3_0) {
    _init_properties_Tensor_kt__gweomx();
    throw new NotImplementedError('Division not defined on integer field.');
  }
  function DOUBLE_FIELD$lambda($this$of, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return a + b;
  }
  function DOUBLE_FIELD$lambda_0($this$of, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return a * b;
  }
  function DOUBLE_FIELD$lambda_1($this$of, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return a - b;
  }
  function DOUBLE_FIELD$lambda_2($this$of, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return a / b;
  }
  function MINPLUS_ALGEBRA$lambda($this$of, a, b) {
    _init_properties_Tensor_kt__gweomx();
    // Inline function 'kotlin.math.min' call
    return Math.min(a, b);
  }
  function MINPLUS_ALGEBRA$lambda_0($this$of, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return a + b | 0;
  }
  function MAXPLUS_ALGEBRA$lambda($this$of, a, b) {
    _init_properties_Tensor_kt__gweomx();
    // Inline function 'kotlin.math.max' call
    return Math.max(a, b);
  }
  function MAXPLUS_ALGEBRA$lambda_0($this$of, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return a + b | 0;
  }
  function GF2_ALGEBRA$lambda($this$of, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return (a + b | 0) % 2 | 0;
  }
  function GF2_ALGEBRA$lambda_0($this$of, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return imul(a, b) % 2 | 0;
  }
  function TODO_ALGEBRA$lambda($this$of, _unused_var__etf5q3, _unused_var__etf5q3_0) {
    _init_properties_Tensor_kt__gweomx();
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  }
  function TODO_ALGEBRA$lambda_0($this$of, _unused_var__etf5q3, _unused_var__etf5q3_0) {
    _init_properties_Tensor_kt__gweomx();
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  }
  function toDoubleMatrix$lambda_0($this_toDoubleMatrix) {
    return function (i, j) {
      return $this_toDoubleMatrix.ui(i, j) ? 1.0 : 0.0;
    };
  }
  function idxs$factory() {
    return getPropertyCallableRef('idxs', 1, KProperty1, function (receiver) {
      return get_idxs(receiver);
    }, null);
  }
  function rows$factory() {
    return getPropertyCallableRef('rows', 1, KProperty1, function (receiver) {
      return get_rows(receiver);
    }, null);
  }
  function cols$factory() {
    return getPropertyCallableRef('cols', 1, KProperty1, function (receiver) {
      return get_cols(receiver);
    }, null);
  }
  function transpose$factory() {
    return getPropertyCallableRef('transpose', 1, KProperty1, function (receiver) {
      return get_transpose(receiver);
    }, null);
  }
  function data$factory() {
    return getPropertyCallableRef('data', 1, KProperty1, function (receiver) {
      return receiver.wh();
    }, null);
  }
  function hash$factory_0() {
    return getPropertyCallableRef('hash', 1, KProperty1, function (receiver) {
      return receiver.pl();
    }, null);
  }
  var properties_initialized_Tensor_kt_e1l3et;
  function _init_properties_Tensor_kt__gweomx() {
    if (!properties_initialized_Tensor_kt_e1l3et) {
      properties_initialized_Tensor_kt_e1l3et = true;
      idxs$delegate = cache_0(VOID, idxs$delegate$lambda);
      rows$delegate = cache_0(VOID, rows$delegate$lambda);
      cols$delegate = cache_0(VOID, cols$delegate$lambda);
      transpose$delegate = cache_0(VOID, transpose$delegate$lambda);
      var tmp = BOOLEAN_ALGEBRA$lambda;
      BOOLEAN_ALGEBRA = new of_1(false, true, tmp, BOOLEAN_ALGEBRA$lambda_0);
      var tmp_0 = XOR_ALGEBRA$lambda;
      XOR_ALGEBRA = new of_1(false, true, tmp_0, XOR_ALGEBRA$lambda_0);
      var tmp_1 = INTEGER_FIELD$lambda;
      var tmp_2 = INTEGER_FIELD$lambda_0;
      var tmp_3 = INTEGER_FIELD$lambda_1;
      INTEGER_FIELD = new of_0(0, 1, tmp_1, tmp_2, tmp_3, INTEGER_FIELD$lambda_2);
      var tmp_4 = DOUBLE_FIELD$lambda;
      var tmp_5 = DOUBLE_FIELD$lambda_0;
      var tmp_6 = DOUBLE_FIELD$lambda_1;
      DOUBLE_FIELD = new of_0(0.0, 1.0, tmp_4, tmp_5, tmp_6, DOUBLE_FIELD$lambda_2);
      var tmp_7 = MINPLUS_ALGEBRA$lambda;
      MINPLUS_ALGEBRA = new of_1(2147483647, 0, tmp_7, MINPLUS_ALGEBRA$lambda_0);
      var tmp_8 = MAXPLUS_ALGEBRA$lambda;
      MAXPLUS_ALGEBRA = new of_1(-2147483648, 0, tmp_8, MAXPLUS_ALGEBRA$lambda_0);
      var tmp_9 = GF2_ALGEBRA$lambda;
      GF2_ALGEBRA = new of_1(0, 1, tmp_9, GF2_ALGEBRA$lambda_0);
    }
  }
  function wl(_this__u8e3s4, k, label) {
    k = k === VOID ? 5 : k;
    var tmp;
    if (label === VOID) {
      tmp = wl$lambda(_this__u8e3s4);
    } else {
      tmp = label;
    }
    label = tmp;
    var $this = _this__u8e3s4;
    var k_0 = k;
    var label_0 = label;
    $l$1: do {
      $l$0: do {
        // Inline function 'kotlin.collections.associateWith' call
        var this_0 = $this;
        var result = LinkedHashMap_init_$Create$_1(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
        // Inline function 'kotlin.collections.associateWithTo' call
        var tmp0_iterator = this_0.h();
        while (tmp0_iterator.i()) {
          var element = tmp0_iterator.j();
          // Inline function 'ai.hypergraph.kaliningraph.theory.wl.<anonymous>' call
          // Inline function 'kotlin.collections.map' call
          var this_1 = get_neighbors(element);
          // Inline function 'kotlin.collections.mapTo' call
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
          var tmp0_iterator_0 = this_1.h();
          while (tmp0_iterator_0.i()) {
            var item = tmp0_iterator_0.j();
            destination.e(label_0(item));
          }
          var tmp$ret$2 = hashCode(sorted(destination));
          result.v3(element, tmp$ret$2);
        }
        var updates = result;
        var tmp_0;
        var tmp_1;
        if (k_0 <= 0) {
          tmp_1 = true;
        } else {
          var tmp$ret$5;
          $l$block_0: {
            // Inline function 'kotlin.collections.all' call
            var this_2 = $this;
            var tmp_2;
            if (isInterface(this_2, Collection)) {
              tmp_2 = this_2.l();
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$5 = true;
              break $l$block_0;
            }
            var tmp0_iterator_1 = this_2.h();
            while (tmp0_iterator_1.i()) {
              var element_0 = tmp0_iterator_1.j();
              // Inline function 'ai.hypergraph.kaliningraph.theory.wl.<anonymous>' call
              if (!(label_0(element_0) === updates.u1(element_0))) {
                tmp$ret$5 = false;
                break $l$block_0;
              }
            }
            tmp$ret$5 = true;
          }
          tmp_1 = tmp$ret$5;
        }
        if (tmp_1) {
          tmp_0 = updates;
        } else {
          $this = $this;
          k_0 = k_0 - 1 | 0;
          label_0 = wl$lambda_0(updates);
          continue $l$0;
        }
        return tmp_0;
      }
       while (false);
    }
     while (true);
  }
  function wl$lambda($this_wl) {
    return function (it) {
      return ensureNotNull(get_histogram($this_wl).u1(it));
    };
  }
  function wl$lambda_0($updates) {
    return function (it) {
      return ensureNotNull($updates.u1(it));
    };
  }
  function of_init_$Init$(l, es, $this) {
    of.call($this, l, toList_0(es));
    return $this;
  }
  function of_init_$Create$(l, es) {
    return of_init_$Init$(l, es, objectCreate(protoOf(of)));
  }
  function of(len, l) {
    this.zp_1 = len;
    this.aq_1 = l;
  }
  protoOf(of).bq = function () {
    return this.aq_1;
  };
  protoOf(of).a1 = function (element) {
    return this.aq_1.a1(element);
  };
  protoOf(of).o1 = function (elements) {
    return this.aq_1.o1(elements);
  };
  protoOf(of).m = function (index) {
    return this.aq_1.m(index);
  };
  protoOf(of).l = function () {
    return this.aq_1.l();
  };
  protoOf(of).h = function () {
    return this.aq_1.h();
  };
  protoOf(of).r = function (index) {
    return this.aq_1.r(index);
  };
  protoOf(of).p1 = function (fromIndex, toIndex) {
    return this.aq_1.p1(fromIndex, toIndex);
  };
  protoOf(of).k = function () {
    return this.aq_1.k();
  };
  protoOf(of).equals = function (other) {
    var tmp53_safe_receiver = (!(other == null) ? isInterface(other, VT) : false) ? other : null;
    return equals(tmp53_safe_receiver == null ? null : tmp53_safe_receiver.bq(), this.aq_1);
  };
  protoOf(of).toString = function () {
    return toString(this.aq_1);
  };
  function VT() {
  }
  function VT_0(v1, v2, v3) {
    return of_init_$Create$(get_S3(), [v1, v2, v3]);
  }
  function to_0(_this__u8e3s4, that) {
    return Π(get_π1(_this__u8e3s4), get_π2(_this__u8e3s4), that);
  }
  function times_1(_this__u8e3s4, other) {
    return flatMap(_this__u8e3s4, times$lambda(other));
  }
  function times_2(_this__u8e3s4, s) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = _this__u8e3s4.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.times.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(s, 10));
      var tmp0_iterator_0 = s.h();
      while (tmp0_iterator_0.i()) {
        var item = tmp0_iterator_0.j();
        var tmp$ret$0 = to(element, item);
        destination_0.e(tmp$ret$0);
      }
      var list = toSet_0(destination_0);
      addAll(destination, list);
    }
    return toSet_0(destination);
  }
  function intersect_1(_this__u8e3s4) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = toMutableSet(first(_this__u8e3s4));
    var tmp0_iterator = _this__u8e3s4.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.intersect.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_0 = accumulator;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.types.intersect.<anonymous>.<anonymous>' call
      this_0.u2(element);
      accumulator = this_0;
    }
    return accumulator;
  }
  function powerset(_this__u8e3s4) {
    return sequence(powerset$slambda_0(_this__u8e3s4, null));
  }
  function allPairs(numRows, numCols) {
    return times_3(until(0, numRows), until(0, numCols));
  }
  function cc(_this__u8e3s4, that) {
    return VT_1(_this__u8e3s4, that);
  }
  function Π(π1, π2, π3) {
    return new Triple(π1, π2, π3);
  }
  function get_π1(_this__u8e3s4) {
    return _this__u8e3s4.fc_1;
  }
  function get_π2(_this__u8e3s4) {
    return _this__u8e3s4.gc_1;
  }
  function times_3(_this__u8e3s4, s) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = _this__u8e3s4.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.times.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(s, 10));
      var tmp0_iterator_0 = s.h();
      while (tmp0_iterator_0.i()) {
        var item = tmp0_iterator_0.j();
        var tmp$ret$0 = cc(element, item);
        destination_0.e(tmp$ret$0);
      }
      var list = toSet_0(destination_0);
      addAll(destination, list);
    }
    return toSet_0(destination);
  }
  function VT_1(v1, v2) {
    return of_init_$Create$(get_S2(), [v1, v2]);
  }
  function get_second(_this__u8e3s4) {
    // Inline function 'kotlin.collections.component2' call
    return _this__u8e3s4.m(1);
  }
  function get_first(_this__u8e3s4) {
    // Inline function 'kotlin.collections.component1' call
    return _this__u8e3s4.m(0);
  }
  function times_4(_this__u8e3s4, s) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = _this__u8e3s4.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.times.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(s, 10));
      var tmp0_iterator_0 = s.h();
      while (tmp0_iterator_0.i()) {
        var item = tmp0_iterator_0.j();
        var tmp$ret$0 = to_0(element, item);
        destination_0.e(tmp$ret$0);
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return toSet_0(destination);
  }
  function isStrictSubsetOf(_this__u8e3s4, ir) {
    return (ir.jg_1 <= _this__u8e3s4.jg_1 ? _this__u8e3s4.kg_1 <= ir.kg_1 : false) ? !_this__u8e3s4.equals(ir) : false;
  }
  function to$ref($boundThis) {
    var l = function (p0) {
      return to($boundThis, p0);
    };
    l.callableName = 'to';
    return l;
  }
  function times$lambda($other) {
    return function (it) {
      return map($other, to$ref(it));
    };
  }
  function powerset$slambda($this_powerset, resultContinuation) {
    this.kq_1 = $this_powerset;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(powerset$slambda).tq = function ($this$sequence, $completion) {
    var tmp = this.uq($this$sequence, $completion);
    tmp.m7_1 = Unit_instance;
    tmp.n7_1 = null;
    return tmp.v7();
  };
  protoOf(powerset$slambda).i8 = function (p1, $completion) {
    return this.tq(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(powerset$slambda).v7 = function () {
    var suspendResult = this.m7_1;
    $sm: do
      try {
        var tmp = this.k7_1;
        switch (tmp) {
          case 0:
            this.l7_1 = 7;
            this.mq_1 = this.kq_1.k();
            if (this.mq_1 === 0) {
              this.k7_1 = 5;
              suspendResult = this.lq_1.pc(emptySet(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.nq_1 = first(this.kq_1);
              this.oq_1 = minus_1(this.kq_1, this.nq_1);
              this.k7_1 = 1;
              suspendResult = this.lq_1.rc(powerset(this.oq_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var tmp_0 = this;
            tmp_0.pq_1 = powerset(this.oq_1);
            this.qq_1 = this.pq_1.h();
            this.k7_1 = 2;
            continue $sm;
          case 2:
            if (!this.qq_1.i()) {
              this.k7_1 = 4;
              continue $sm;
            }

            this.rq_1 = this.qq_1.j();
            var tmp_1 = this;
            tmp_1.sq_1 = this.rq_1;
            this.k7_1 = 3;
            suspendResult = this.lq_1.pc(plus_1(setOf(this.nq_1), this.sq_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.k7_1 = 2;
            continue $sm;
          case 4:
            this.k7_1 = 6;
            continue $sm;
          case 5:
            this.k7_1 = 6;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.n7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.l7_1 === 7) {
          throw e;
        } else {
          this.k7_1 = this.l7_1;
          this.n7_1 = e;
        }
      }
     while (true);
  };
  protoOf(powerset$slambda).uq = function ($this$sequence, completion) {
    var i = new powerset$slambda(this.kq_1, completion);
    i.lq_1 = $this$sequence;
    return i;
  };
  function powerset$slambda_0($this_powerset, resultContinuation) {
    var i = new powerset$slambda($this_powerset, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.tq($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  var S0;
  function get_S1() {
    _init_properties_Church_kt__lnrkav();
    return S1;
  }
  var S1;
  function get_S2() {
    _init_properties_Church_kt__lnrkav();
    return S2;
  }
  var S2;
  function get_S3() {
    _init_properties_Church_kt__lnrkav();
    return S3;
  }
  var S3;
  function get_S4() {
    _init_properties_Church_kt__lnrkav();
    return S4;
  }
  var S4;
  function get_S5() {
    _init_properties_Church_kt__lnrkav();
    return S5;
  }
  var S5;
  function get_S6() {
    _init_properties_Church_kt__lnrkav();
    return S6;
  }
  var S6;
  function get_S7() {
    _init_properties_Church_kt__lnrkav();
    return S7;
  }
  var S7;
  function get_S8() {
    _init_properties_Church_kt__lnrkav();
    return S8;
  }
  var S8;
  var S9;
  function S(x) {
    this.vq_1 = x;
  }
  protoOf(S).equals = function (other) {
    var tmp;
    if (other instanceof S) {
      tmp = (this.vq_1 == null ? other.vq_1 == null : false) ? true : equals(this.vq_1, other.vq_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(S).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.vq_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  function O() {
    O_instance = this;
    S.call(this, null);
  }
  var O_instance;
  function O_getInstance() {
    if (O_instance == null)
      new O();
    return O_instance;
  }
  var properties_initialized_Church_kt_g6sfr;
  function _init_properties_Church_kt__lnrkav() {
    if (!properties_initialized_Church_kt_g6sfr) {
      properties_initialized_Church_kt_g6sfr = true;
      S0 = O_getInstance();
      S1 = new S(O_getInstance());
      S2 = new S(get_S1());
      S3 = new S(get_S2());
      S4 = new S(get_S3());
      S5 = new S(get_S4());
      S6 = new S(get_S5());
      S7 = new S(get_S6());
      S8 = new S(get_S7());
      S9 = new S(get_S8());
    }
  }
  function get_D(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return D$delegate.am(_this__u8e3s4, D$factory());
  }
  var D$delegate;
  function get_A(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return A$delegate.am(_this__u8e3s4, A$factory());
  }
  var A$delegate;
  var A_AUG$delegate;
  function get_ASYMNORM(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return ASYMNORM$delegate.am(_this__u8e3s4, ASYMNORM$factory());
  }
  var ASYMNORM$delegate;
  var L$delegate;
  function get_I(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return I$delegate.am(_this__u8e3s4, I$factory());
  }
  var I$delegate;
  var LSYMNORM$delegate;
  var ENCODED$delegate;
  var APSP$delegate;
  var degMap$delegate;
  function get_edges(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return edges$delegate.am(_this__u8e3s4, edges$factory());
  }
  var edges$delegate;
  function get_edgList(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return edgList$delegate.am(_this__u8e3s4, edgList$factory());
  }
  var edgList$delegate;
  function get_adjList(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return adjList$delegate.am(_this__u8e3s4, adjList$factory());
  }
  var adjList$delegate;
  function get_edgMap(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return edgMap$delegate.am(_this__u8e3s4, edgMap$factory());
  }
  var edgMap$delegate;
  function get_histogram(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return histogram$delegate.am(_this__u8e3s4, histogram$factory());
  }
  var histogram$delegate;
  function get_cache() {
    _init_properties_Graph_kt__cdxgws();
    return cache;
  }
  var cache;
  var graph$delegate;
  function get_graph(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return graph$delegate_0.am(_this__u8e3s4, graph$factory());
  }
  var graph$delegate_0;
  var incoming$delegate;
  function get_outgoing(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return outgoing$delegate.am(_this__u8e3s4, outgoing$factory());
  }
  var outgoing$delegate;
  function get_neighbors(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return neighbors$delegate.am(_this__u8e3s4, neighbors$factory());
  }
  var neighbors$delegate;
  function Vertex$hash$delegate$lambda(this$0) {
    return function () {
      return getStringHashCode(this$0.kl());
    };
  }
  function Vertex(id) {
    AGF.call(this);
    this.nl_1 = id;
    var tmp = this;
    tmp.ol_1 = lazy(Vertex$hash$delegate$lambda(this));
  }
  protoOf(Vertex).kl = function () {
    return this.nl_1;
  };
  protoOf(Vertex).pl = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.ol_1;
    hash$factory_1();
    return this_0.r1();
  };
  protoOf(Vertex).equals = function (other) {
    var tmp35_safe_receiver = other instanceof Vertex ? other : null;
    var tmp;
    if (tmp35_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.types.Vertex.equals.<anonymous>' call
      tmp = this.kl() === tmp35_safe_receiver.kl();
    }
    var tmp0_elvis_lhs = tmp;
    return tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
  };
  protoOf(Vertex).mk = function () {
    return vectorize(this.kl());
  };
  protoOf(Vertex).hashCode = function () {
    return this.pl();
  };
  protoOf(Vertex).toString = function () {
    return this.kl();
  };
  function Graph(vertices) {
    var tmp;
    if (vertices === VOID) {
      // Inline function 'kotlin.collections.setOf' call
      tmp = emptySet();
    } else {
      tmp = vertices;
    }
    vertices = tmp;
    AGF.call(this);
    this.jk_1 = vertices;
  }
  protoOf(Graph).hk = function () {
    return this.jk_1;
  };
  protoOf(Graph).kk = function (element) {
    return this.jk_1.a1(element);
  };
  protoOf(Graph).a1 = function (element) {
    if (!(element instanceof Vertex))
      return false;
    return this.kk(element instanceof Vertex ? element : THROW_CCE());
  };
  protoOf(Graph).lk = function (elements) {
    return this.jk_1.o1(elements);
  };
  protoOf(Graph).o1 = function (elements) {
    return this.lk(elements);
  };
  protoOf(Graph).l = function () {
    return this.jk_1.l();
  };
  protoOf(Graph).h = function () {
    return this.jk_1.h();
  };
  protoOf(Graph).k = function () {
    return this.jk_1.k();
  };
  protoOf(Graph).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp33_safe_receiver = other instanceof Graph ? other : null;
      var tmp_0;
      if (tmp33_safe_receiver == null) {
        tmp_0 = null;
      } else {
        tmp_0 = tmp33_safe_receiver.wk(this instanceof Graph ? this : THROW_CCE());
      }
      var tmp0_elvis_lhs = tmp_0;
      tmp = tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Graph).mk = function () {
    var tmp;
    if (this.l()) {
      var tmp_0 = 0;
      var tmp_1 = new Float64Array(10);
      while (tmp_0 < 10) {
        tmp_1[tmp_0] = 0.0;
        tmp_0 = tmp_0 + 1 | 0;
      }
      tmp = tmp_1;
    } else {
      // Inline function 'kotlin.collections.map' call
      var this_0 = sorted(wl(this).v1());
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.h();
      while (tmp0_iterator.i()) {
        var item = tmp0_iterator.j();
        // Inline function 'ai.hypergraph.kaliningraph.types.Graph.encode.<anonymous>' call
        destination.e(item);
      }
      tmp = toDoubleArray_0(destination);
    }
    return tmp;
  };
  protoOf(Graph).toString = function () {
    return this.zk();
  };
  function Edge(source, target) {
    AGF.call(this);
    this.xq_1 = source;
    this.yq_1 = target;
  }
  protoOf(Edge).yl = function () {
    return this.xq_1;
  };
  protoOf(Edge).zl = function () {
    return this.yq_1;
  };
  protoOf(Edge).equals = function (other) {
    var tmp;
    if ((other instanceof Edge ? other : null) == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.types.Edge.equals.<anonymous>' call
      tmp = this.hashCode() === other.hashCode();
    }
    var tmp0_elvis_lhs = tmp;
    return tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
  };
  protoOf(Edge).hashCode = function () {
    return this.yl().hashCode() + this.zl().hashCode() | 0;
  };
  protoOf(Edge).toString = function () {
    return '' + this.yl() + '\u2192' + this.zl();
  };
  function IGF$G$lambda(it) {
    return ensureNotNull(getKClassFromExpression(it).l8());
  }
  function IGF() {
  }
  function cache_0(caller, fn) {
    caller = caller === VOID ? getCaller() : caller;
    _init_properties_Graph_kt__cdxgws();
    var tmp = cache$lambda(caller, fn);
    return new sam$kotlin_properties_ReadOnlyProperty$0(tmp);
  }
  function VIndex(set) {
    this.zq_1 = set;
    this.ar_1 = toList(this.zq_1);
    var tmp = this;
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_0 = this.ar_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.VIndex.map.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      var tmp$ret$0 = to(item, index_0);
      destination.e(tmp$ret$0);
    }
    tmp.br_1 = toMap(destination);
  }
  protoOf(VIndex).m = function (it) {
    return this.ar_1.m(it);
  };
  function sam$kotlin_Comparator$0_3(function_0) {
    this.cr_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_3).za = function (a, b) {
    return this.cr_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_3).compare = function (a, b) {
    return this.za(a, b);
  };
  function IGraph$join$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.join.<anonymous>' call
    var tmp = a.kl();
    // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.join.<anonymous>' call
    var tmp$ret$1 = b.kl();
    return compareValues(tmp, tmp$ret$1);
  }
  function IGraph$join$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.join.<anonymous>' call
    var tmp = a.kl();
    // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.join.<anonymous>' call
    var tmp$ret$1 = b.kl();
    return compareValues(tmp, tmp$ret$1);
  }
  function IGraph$join$lambda_1($left, $right) {
    return function (it) {
      return plus_1(get_outgoing($left), get_outgoing($right));
    };
  }
  function IGraph$reversed$lambda($v) {
    return function (it) {
      return $v;
    };
  }
  function IGraph$vwise$lambda(this$0, $lf) {
    return function (i, j) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.vwise.<anonymous>.<anonymous>' call
      var destruct = cc(this$0.m(i), this$0.m(j));
      // Inline function 'kotlin.collections.component1' call
      var v = destruct.m(0);
      // Inline function 'kotlin.collections.component2' call
      var n = destruct.m(1);
      return get_neighbors(v).a1(n) ? $lf(this$0, v, n) : 0.0;
    };
  }
  function IGraph() {
  }
  function neighbors_0(_this__u8e3s4, $this) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = _this__u8e3s4.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.IVertex.neighbors.<anonymous>' call
      var list = element.rl();
      addAll(destination, list);
    }
    return toSet_0(destination);
  }
  function IVertex() {
  }
  function get_outdegree(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return get_neighbors(_this__u8e3s4).k();
  }
  function AGF() {
    this.nk_1 = Default_getInstance().jc();
  }
  protoOf(AGF).ok = function () {
    return this.nk_1;
  };
  protoOf(AGF).hashCode = function () {
    return this.ok();
  };
  function getCaller() {
    _init_properties_Graph_kt__cdxgws();
    return getStringHashCode(lines(stackTraceToString(newThrowable())).m(3));
  }
  function sam$kotlin_properties_ReadOnlyProperty$0(function_0) {
    this.dr_1 = function_0;
  }
  protoOf(sam$kotlin_properties_ReadOnlyProperty$0).am = function (thisRef, property) {
    return this.dr_1(thisRef, property);
  };
  function D$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    var tmp = $this$cache.k();
    return DoubleMatrix_init_$Create$(tmp, VOID, D$delegate$lambda$lambda($this$cache));
  }
  function D$delegate$lambda$lambda($this_cache) {
    return function (i, j) {
      return i === j ? get_neighbors($this_cache.m(i)).k() : 0.0;
    };
  }
  function A$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    var tmp = $this$cache.k();
    return BooleanMatrix_init_$Create$(tmp, VOID, A$delegate$lambda$lambda($this$cache));
  }
  function A$delegate$lambda$lambda($this_cache) {
    return function (i, j) {
      return get_neighbors($this_cache.m(i)).a1($this_cache.m(j));
    };
  }
  function A_AUG$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    return get_A($this$cache).vo(get_transpose(get_A($this$cache))).vo(Companion_instance_3.mp($this$cache.k()));
  }
  function ASYMNORM$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    return $this$cache.xk(ASYMNORM$delegate$lambda$lambda);
  }
  function ASYMNORM$delegate$lambda$lambda($this$vwise, v, n) {
    _init_properties_Graph_kt__cdxgws();
    // Inline function 'kotlin.math.sqrt' call
    var x = get_outdegree(v) * get_outdegree(n);
    return 1.0 / Math.sqrt(x);
  }
  function L$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    return minus_3(get_D($this$cache), get_A($this$cache));
  }
  function I$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    var tmp = $this$cache.k();
    var tmp_0 = $this$cache.k();
    return DoubleMatrix_init_$Create$(tmp, tmp_0, kroneckerDelta$ref());
  }
  function kroneckerDelta$ref() {
    var l = function (p0, p1) {
      return kroneckerDelta(p0, p1);
    };
    l.callableName = 'kroneckerDelta';
    return l;
  }
  function LSYMNORM$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    return get_I($this$cache).uo(get_ASYMNORM($this$cache));
  }
  function ENCODED$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this$cache.hk();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.ENCODED$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = item.mk();
      destination.e(tmp$ret$0);
    }
    var tmp$ret$3 = copyToArray(destination);
    return toDoubleMatrix(tmp$ret$3);
  }
  function APSP$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var dist = LinkedHashMap_init_$Create$();
    var _iterator__ex2g4s = times_2($this$cache.hk(), $this$cache.hk()).h();
    while (_iterator__ex2g4s.i()) {
      var _destruct__k2r9zo = _iterator__ex2g4s.j();
      var u = _destruct__k2r9zo.hc();
      var v = _destruct__k2r9zo.ic();
      // Inline function 'kotlin.collections.set' call
      var key = to(v, u);
      var value = equals(v, u) ? 0 : 2147483647;
      dist.v3(key, value);
    }
    var _iterator__ex2g4s_0 = get_adjList($this$cache).h();
    while (_iterator__ex2g4s_0.i()) {
      var e = _iterator__ex2g4s_0.j();
      // Inline function 'kotlin.collections.set' call
      var key_0 = to(get_first(e), get_second(e));
      dist.v3(key_0, 1);
    }
    $l$loop: while (true) {
      var done = true;
      var _iterator__ex2g4s_1 = times_4(times_2($this$cache.hk(), $this$cache.hk()), $this$cache.hk()).h();
      while (_iterator__ex2g4s_1.i()) {
        var _destruct__k2r9zo_0 = _iterator__ex2g4s_1.j();
        var k = _destruct__k2r9zo_0.hc();
        var i = _destruct__k2r9zo_0.ic();
        var j = _destruct__k2r9zo_0.sh();
        if (ensureNotNull(dist.u1(to(i, k))) < 2147483647 ? ensureNotNull(dist.u1(to(k, j))) < 2147483647 : false) {
          var newDist = ensureNotNull(dist.u1(to(i, k))) + ensureNotNull(dist.u1(to(k, j))) | 0;
          if (newDist < ensureNotNull(dist.u1(to(i, j)))) {
            // Inline function 'kotlin.collections.set' call
            var key_1 = to(i, j);
            dist.v3(key_1, newDist);
            done = false;
          }
        }
      }
      if (done)
        break $l$loop;
    }
    return dist;
  }
  function degMap$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    // Inline function 'kotlin.collections.associateWith' call
    var this_0 = $this$cache.hk();
    var result = LinkedHashMap_init_$Create$_1(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
    // Inline function 'kotlin.collections.associateWithTo' call
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.degMap$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = get_neighbors(element).k();
      result.v3(element, tmp$ret$0);
    }
    return result;
  }
  function edges$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    return toSet_0(flatten(get_edgMap($this$cache).v1()));
  }
  function edgList$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var this_0 = $this$cache.hk();
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.edgList$delegate.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_1 = get_outgoing(element);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator_0 = this_1.h();
      while (tmp0_iterator_0.i()) {
        var item = tmp0_iterator_0.j();
        // Inline function 'ai.hypergraph.kaliningraph.types.edgList$delegate.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$0 = to(element, item);
        destination_0.e(tmp$ret$0);
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return destination;
  }
  function adjList$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_edgList($this$cache);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.adjList$delegate.<anonymous>.<anonymous>' call
      var v = item.hc();
      var e = item.ic();
      var tmp$ret$0 = cc(v, e.zl());
      destination.e(tmp$ret$0);
    }
    return destination;
  }
  function edgMap$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    // Inline function 'kotlin.collections.associateWith' call
    var this_0 = $this$cache.hk();
    var result = LinkedHashMap_init_$Create$_1(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
    // Inline function 'kotlin.collections.associateWithTo' call
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.edgMap$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = get_outgoing(element);
      result.v3(element, tmp$ret$0);
    }
    return result;
  }
  function histogram$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    // Inline function 'kotlin.collections.associateWith' call
    var result = LinkedHashMap_init_$Create$_1(coerceAtLeast(mapCapacity(collectionSizeOrDefault($this$cache, 10)), 16));
    // Inline function 'kotlin.collections.associateWithTo' call
    var tmp0_iterator = $this$cache.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.histogram$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = get_neighbors(element).k();
      result.v3(element, tmp$ret$0);
    }
    return result;
  }
  function graph$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    return get_graph($this$cache.zl());
  }
  function graph$delegate$lambda_0($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    return $this$cache.pk()($this$cache.rl(-1));
  }
  function incoming$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    // Inline function 'kotlin.collections.get' call
    var this_0 = get_edgMap(get_graph($this$cache).bk());
    var tmp0_elvis_lhs = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).u1($this$cache);
    return tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
  }
  function outgoing$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    var tmp = $this$cache.ll();
    return toSet_0(tmp(isInterface($this$cache, IVertex) ? $this$cache : THROW_CCE()));
  }
  function neighbors$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_outgoing($this$cache);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'ai.hypergraph.kaliningraph.types.neighbors$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = item.zl();
      destination.e(tmp$ret$0);
    }
    return toSet_0(destination);
  }
  function cache$lambda$lambda($fn, $y) {
    return function () {
      var tmp = $fn($y);
      return !(tmp == null) ? tmp : THROW_CCE();
    };
  }
  function cache$lambda($caller, $fn) {
    return function (y, _unused_var__etf5q3) {
      var tmp;
      if (!(y == null) ? isInterface(y, IGF) : false) {
        tmp = y.ok();
      } else {
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs = y == null ? null : hashCode(y);
        tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      }
      var id = tmp;
      var csg = '' + id + $caller;
      var tmp_0 = get_cache();
      var tmp_1 = tmp_0.zi(csg, cache$lambda$lambda($fn, y));
      return !(tmp_1 == null) ? tmp_1 : THROW_CCE();
    };
  }
  function D$factory() {
    return getPropertyCallableRef('D', 1, KProperty1, function (receiver) {
      return get_D(receiver);
    }, null);
  }
  function A$factory() {
    return getPropertyCallableRef('A', 1, KProperty1, function (receiver) {
      return get_A(receiver);
    }, null);
  }
  function ASYMNORM$factory() {
    return getPropertyCallableRef('ASYMNORM', 1, KProperty1, function (receiver) {
      return get_ASYMNORM(receiver);
    }, null);
  }
  function I$factory() {
    return getPropertyCallableRef('I', 1, KProperty1, function (receiver) {
      return get_I(receiver);
    }, null);
  }
  function edges$factory() {
    return getPropertyCallableRef('edges', 1, KProperty1, function (receiver) {
      return get_edges(receiver);
    }, null);
  }
  function edgList$factory() {
    return getPropertyCallableRef('edgList', 1, KProperty1, function (receiver) {
      return get_edgList(receiver);
    }, null);
  }
  function adjList$factory() {
    return getPropertyCallableRef('adjList', 1, KProperty1, function (receiver) {
      return get_adjList(receiver);
    }, null);
  }
  function edgMap$factory() {
    return getPropertyCallableRef('edgMap', 1, KProperty1, function (receiver) {
      return get_edgMap(receiver);
    }, null);
  }
  function histogram$factory() {
    return getPropertyCallableRef('histogram', 1, KProperty1, function (receiver) {
      return get_histogram(receiver);
    }, null);
  }
  function graph$factory() {
    return getPropertyCallableRef('graph', 1, KProperty1, function (receiver) {
      return get_graph(receiver);
    }, null);
  }
  function outgoing$factory() {
    return getPropertyCallableRef('outgoing', 1, KProperty1, function (receiver) {
      return get_outgoing(receiver);
    }, null);
  }
  function neighbors$factory() {
    return getPropertyCallableRef('neighbors', 1, KProperty1, function (receiver) {
      return get_neighbors(receiver);
    }, null);
  }
  function hash$factory_1() {
    return getPropertyCallableRef('hash', 1, KProperty1, function (receiver) {
      return receiver.pl();
    }, null);
  }
  var properties_initialized_Graph_kt_ngaj0i;
  function _init_properties_Graph_kt__cdxgws() {
    if (!properties_initialized_Graph_kt_ngaj0i) {
      properties_initialized_Graph_kt_ngaj0i = true;
      D$delegate = cache_0(VOID, D$delegate$lambda);
      A$delegate = cache_0(VOID, A$delegate$lambda);
      A_AUG$delegate = cache_0(VOID, A_AUG$delegate$lambda);
      ASYMNORM$delegate = cache_0(VOID, ASYMNORM$delegate$lambda);
      L$delegate = cache_0(VOID, L$delegate$lambda);
      I$delegate = cache_0(VOID, I$delegate$lambda);
      LSYMNORM$delegate = cache_0(VOID, LSYMNORM$delegate$lambda);
      ENCODED$delegate = cache_0(VOID, ENCODED$delegate$lambda);
      APSP$delegate = cache_0(VOID, APSP$delegate$lambda);
      degMap$delegate = cache_0(VOID, degMap$delegate$lambda);
      edges$delegate = cache_0(VOID, edges$delegate$lambda);
      edgList$delegate = cache_0(VOID, edgList$delegate$lambda);
      adjList$delegate = cache_0(VOID, adjList$delegate$lambda);
      edgMap$delegate = cache_0(VOID, edgMap$delegate$lambda);
      histogram$delegate = cache_0(VOID, histogram$delegate$lambda);
      cache = new LRUCache();
      graph$delegate = cache_0(VOID, graph$delegate$lambda);
      graph$delegate_0 = cache_0(VOID, graph$delegate$lambda_0);
      incoming$delegate = cache_0(VOID, incoming$delegate$lambda);
      outgoing$delegate = cache_0(VOID, outgoing$delegate$lambda);
      neighbors$delegate = cache_0(VOID, neighbors$delegate$lambda);
    }
  }
  function of_0(nil, one, plus, times, minus, div) {
    this.er_1 = nil;
    this.fr_1 = one;
    this.gr_1 = plus;
    this.hr_1 = times;
    this.ir_1 = minus;
    this.jr_1 = div;
  }
  protoOf(of_0).ip = function () {
    return this.er_1;
  };
  protoOf(of_0).hp = function (_this__u8e3s4, t) {
    return this.gr_1(_this__u8e3s4, _this__u8e3s4, t);
  };
  protoOf(of_0).kp = function (_this__u8e3s4, t) {
    return this.hr_1(_this__u8e3s4, _this__u8e3s4, t);
  };
  function Field() {
  }
  function of_1(nil, one, plus, times) {
    one = one === VOID ? nil : one;
    this.kr_1 = nil;
    this.lr_1 = one;
    this.mr_1 = plus;
    this.nr_1 = times;
  }
  protoOf(of_1).ip = function () {
    return this.kr_1;
  };
  protoOf(of_1).hp = function (_this__u8e3s4, t) {
    return this.mr_1(_this__u8e3s4, _this__u8e3s4, t);
  };
  protoOf(of_1).kp = function (_this__u8e3s4, t) {
    return this.nr_1(_this__u8e3s4, _this__u8e3s4, t);
  };
  function Ring() {
  }
  //region block: post-declaration
  protoOf(AGF).G1 = G1;
  protoOf(AGF).G2 = G2;
  protoOf(AGF).G3 = G3;
  protoOf(AGF).G4 = G4;
  protoOf(Graph).m = get;
  protoOf(Graph).sk = get_index;
  protoOf(Graph).tk = plus_7;
  protoOf(Graph).uk = minus_2;
  protoOf(Graph).vk = join;
  protoOf(Graph).bk = reversed;
  protoOf(Graph).wk = isomorphicTo;
  protoOf(Graph).xk = vwise;
  protoOf(Graph).yk = transitiveClosure;
  protoOf(Graph).zk = asString;
  protoOf(LabeledGraph).pk = get_G0;
  protoOf(LabeledGraph).qk = get_E0;
  protoOf(LabeledGraph).rk = get_V0;
  protoOf(Vertex).ql = neighbors;
  protoOf(Vertex).rl = neighbors$default;
  protoOf(LGVertex).pk = get_G0;
  protoOf(LGVertex).qk = get_E0;
  protoOf(LGVertex).rk = get_V0;
  protoOf(LabeledEdge).pk = get_G0;
  protoOf(LabeledEdge).qk = get_E0;
  protoOf(LabeledEdge).rk = get_V0;
  protoOf(AbstractMatrix).ep = shape;
  protoOf(AbstractMatrix).ui = get_0;
  protoOf(AbstractMatrix).m = get_1;
  protoOf(AbstractMatrix).vo = plus_8;
  protoOf(AbstractMatrix).xh = new$default;
  protoOf(AbstractMatrix).fp = safeJoin;
  protoOf(AbstractMatrix).gp = safeJoin$default;
  //endregion
  //region block: init
  Companion_instance_0 = new Companion_0();
  maxTrees = 100000;
  MAX_SORT_CAPACITY = 50;
  Companion_instance_1 = new Companion_1();
  Companion_instance_2 = new Companion_2();
  Companion_instance_3 = new Companion_3();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LRUCache;
  _.$_$.b = escapeHTML;
  _.$_$.c = set_TIMEOUT_MS;
  _.$_$.d = containsHole;
  _.$_$.e = freeze;
  _.$_$.f = isValidProd;
  _.$_$.g = parseCFG;
  _.$_$.h = tokenizeByWhitespaceAndKeepDelimiters;
  _.$_$.i = Companion_instance_0;
  //endregion
  return _;
}));



/***/ }),

/***/ "./kotlin/kotlin-kotlin-stdlib.js":
/*!****************************************!*\
  !*** ./kotlin/kotlin-kotlin-stdlib.js ***!
  \****************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//region block: polyfills
if (typeof Math.imul === 'undefined') {
  Math.imul = function imul(a, b) {
    return (a & 4.29490176E9) * (b & 65535) + (a & 65535) * (b | 0) | 0;
  };
}
if (typeof ArrayBuffer.isView === 'undefined') {
  ArrayBuffer.isView = function (a) {
    return a != null && a.__proto__ != null && a.__proto__.__proto__ === Int8Array.prototype.__proto__;
  };
}
if (typeof Array.prototype.fill === 'undefined') {
  // Polyfill from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill#Polyfill
  Object.defineProperty(Array.prototype, 'fill', {value: function (value) {
    // Steps 1-2.
    if (this == null) {
      throw new TypeError('this is null or not defined');
    }
    var O = Object(this); // Steps 3-5.
    var len = O.length >>> 0; // Steps 6-7.
    var start = arguments[1];
    var relativeStart = start >> 0; // Step 8.
    var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len); // Steps 9-10.
    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0; // Step 11.
    var finalValue = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len); // Step 12.
    while (k < finalValue) {
      O[k] = value;
      k++;
    }
    ; // Step 13.
    return O;
  }});
}
[Int8Array, Int16Array, Uint16Array, Int32Array, Float32Array, Float64Array].forEach(function (TypedArray) {
  if (typeof TypedArray.prototype.fill === 'undefined') {
    Object.defineProperty(TypedArray.prototype, 'fill', {value: Array.prototype.fill});
  }
});
if (typeof Math.tanh === 'undefined') {
  var epsilon = 2.220446049250313E-16;
  var taylor_2_bound = Math.sqrt(epsilon);
  var taylor_n_bound = Math.sqrt(taylor_2_bound);
  Math.tanh = function (x) {
    if (Math.abs(x) < taylor_n_bound) {
      var result = x;
      if (Math.abs(x) > taylor_2_bound) {
        result -= x * x * x / 3;
      }
      return result;
    } else {
      var a = Math.exp(+x), b = Math.exp(-x);
      return a === Infinity ? 1 : b === Infinity ? -1 : (a - b) / (a + b);
    }
  };
}
if (typeof Math.clz32 === 'undefined') {
  Math.clz32 = function (log, LN2) {
    return function (x) {
      var asUint = x >>> 0;
      if (asUint === 0) {
        return 32;
      }
      return 31 - (log(asUint) / LN2 | 0) | 0; // the "| 0" acts like math.floor
    };
  }(Math.log, Math.LN2);
}
if (typeof String.prototype.startsWith === 'undefined') {
  Object.defineProperty(String.prototype, 'startsWith', {value: function (searchString, position) {
    position = position || 0;
    return this.lastIndexOf(searchString, position) === position;
  }});
}
//endregion
(function (root, factory) {
  if (true)
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else {}
}(this, function (_) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var isView = ArrayBuffer.isView;
  var clz32 = Math.clz32;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(CharSequence, 'CharSequence');
  initMetadataForInterface(Comparable, 'Comparable');
  initMetadataForClass(Number_0, 'Number');
  initMetadataForObject(Unit, 'Unit');
  initMetadataForClass(_no_name_provided__qut3iv);
  initMetadataForClass(_no_name_provided__qut3iv_0);
  initMetadataForClass(_no_name_provided__qut3iv_1);
  initMetadataForCompanion(Companion);
  initMetadataForClass(Char, 'Char', VOID, VOID, [Comparable]);
  initMetadataForInterface(Collection, 'Collection');
  initMetadataForInterface(List, 'List', VOID, VOID, [Collection]);
  initMetadataForInterface(Entry, 'Entry');
  initMetadataForInterface(Map_0, 'Map');
  initMetadataForInterface(Set, 'Set', VOID, VOID, [Collection]);
  initMetadataForInterface(MutableIterable, 'MutableIterable');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(Enum, 'Enum', VOID, VOID, [Comparable]);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Long, 'Long', VOID, Number_0, [Number_0, Comparable]);
  initMetadataForClass(arrayIterator$1);
  initMetadataForInterface(Comparator, 'Comparator');
  initMetadataForClass(AbstractCollection, 'AbstractCollection', VOID, VOID, [Collection]);
  initMetadataForClass(AbstractMutableCollection, 'AbstractMutableCollection', VOID, AbstractCollection, [AbstractCollection, MutableIterable, Collection]);
  initMetadataForClass(IteratorImpl, 'IteratorImpl');
  initMetadataForClass(ListIteratorImpl, 'ListIteratorImpl', VOID, IteratorImpl);
  initMetadataForClass(AbstractMutableList, 'AbstractMutableList', VOID, AbstractMutableCollection, [AbstractMutableCollection, MutableIterable, List, Collection]);
  initMetadataForInterface(RandomAccess, 'RandomAccess');
  initMetadataForClass(SubList, 'SubList', VOID, AbstractMutableList, [AbstractMutableList, RandomAccess]);
  initMetadataForClass(AbstractMap, 'AbstractMap', VOID, VOID, [Map_0]);
  initMetadataForClass(AbstractMutableMap, 'AbstractMutableMap', VOID, AbstractMap, [AbstractMap, Map_0]);
  initMetadataForClass(AbstractMutableSet, 'AbstractMutableSet', VOID, AbstractMutableCollection, [AbstractMutableCollection, MutableIterable, Set, Collection]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(ArrayList, 'ArrayList', ArrayList_init_$Create$, AbstractMutableList, [AbstractMutableList, MutableIterable, List, Collection, RandomAccess]);
  initMetadataForClass(HashMap, 'HashMap', HashMap_init_$Create$, AbstractMutableMap, [AbstractMutableMap, Map_0]);
  initMetadataForClass(HashMapValues, 'HashMapValues', VOID, AbstractMutableCollection, [MutableIterable, Collection, AbstractMutableCollection]);
  initMetadataForClass(HashMapEntrySetBase, 'HashMapEntrySetBase', VOID, AbstractMutableSet, [MutableIterable, Set, Collection, AbstractMutableSet]);
  initMetadataForClass(HashMapEntrySet, 'HashMapEntrySet', VOID, HashMapEntrySetBase);
  initMetadataForClass(HashMapValuesDefault$iterator$1);
  initMetadataForClass(HashMapValuesDefault, 'HashMapValuesDefault', VOID, AbstractMutableCollection);
  initMetadataForClass(HashSet, 'HashSet', HashSet_init_$Create$, AbstractMutableSet, [AbstractMutableSet, MutableIterable, Set, Collection]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Itr, 'Itr');
  initMetadataForClass(KeysItr, 'KeysItr', VOID, Itr);
  initMetadataForClass(ValuesItr, 'ValuesItr', VOID, Itr);
  initMetadataForClass(EntriesItr, 'EntriesItr', VOID, Itr);
  initMetadataForClass(EntryRef, 'EntryRef', VOID, VOID, [Entry]);
  function containsAllEntries(m) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(m, Collection)) {
        tmp = m.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = m.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'kotlin.collections.InternalMap.containsAllEntries.<anonymous>' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var entry = element;
        var tmp_0;
        if (!(entry == null) ? isInterface(entry, Entry) : false) {
          tmp_0 = this.u6(entry);
        } else {
          tmp_0 = false;
        }
        if (!tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  initMetadataForInterface(InternalMap, 'InternalMap');
  initMetadataForClass(InternalHashMap, 'InternalHashMap', InternalHashMap_init_$Create$, VOID, [InternalMap]);
  initMetadataForClass(LinkedHashMap, 'LinkedHashMap', LinkedHashMap_init_$Create$, HashMap, [HashMap, Map_0]);
  initMetadataForClass(LinkedHashSet, 'LinkedHashSet', LinkedHashSet_init_$Create$, HashSet, [HashSet, MutableIterable, Set, Collection]);
  initMetadataForClass(BaseOutput, 'BaseOutput');
  initMetadataForClass(NodeJsOutput, 'NodeJsOutput', VOID, BaseOutput);
  initMetadataForClass(BufferedOutput, 'BufferedOutput', BufferedOutput, BaseOutput);
  initMetadataForClass(BufferedOutputToConsoleLog, 'BufferedOutputToConsoleLog', BufferedOutputToConsoleLog, BufferedOutput);
  initMetadataForInterface(Continuation, 'Continuation');
  initMetadataForClass(CoroutineImpl, 'CoroutineImpl', VOID, VOID, [Continuation]);
  initMetadataForObject(CompletedContinuation, 'CompletedContinuation', VOID, VOID, [Continuation]);
  initMetadataForClass(_no_name_provided__qut3iv_2, VOID, VOID, CoroutineImpl);
  initMetadataForClass(Exception, 'Exception', Exception_init_$Create$, Error);
  initMetadataForClass(RuntimeException, 'RuntimeException', RuntimeException_init_$Create$, Exception);
  initMetadataForClass(IllegalArgumentException, 'IllegalArgumentException', IllegalArgumentException_init_$Create$, RuntimeException);
  initMetadataForClass(IndexOutOfBoundsException, 'IndexOutOfBoundsException', IndexOutOfBoundsException_init_$Create$, RuntimeException);
  initMetadataForClass(IllegalStateException, 'IllegalStateException', IllegalStateException_init_$Create$, RuntimeException);
  initMetadataForClass(UnsupportedOperationException, 'UnsupportedOperationException', UnsupportedOperationException_init_$Create$, RuntimeException);
  initMetadataForClass(NoSuchElementException, 'NoSuchElementException', NoSuchElementException_init_$Create$, RuntimeException);
  initMetadataForClass(Error_0, 'Error', Error_init_$Create$, Error);
  initMetadataForClass(ClassCastException, 'ClassCastException', ClassCastException_init_$Create$, RuntimeException);
  initMetadataForClass(ArithmeticException, 'ArithmeticException', ArithmeticException_init_$Create$, RuntimeException);
  initMetadataForClass(ConcurrentModificationException, 'ConcurrentModificationException', ConcurrentModificationException_init_$Create$, RuntimeException);
  initMetadataForClass(NullPointerException, 'NullPointerException', NullPointerException_init_$Create$, RuntimeException);
  initMetadataForInterface(KClass, 'KClass');
  initMetadataForClass(KClassImpl, 'KClassImpl', VOID, VOID, [KClass]);
  initMetadataForObject(NothingKClassImpl, 'NothingKClassImpl', VOID, KClassImpl);
  initMetadataForClass(ErrorKClass, 'ErrorKClass', ErrorKClass, VOID, [KClass]);
  initMetadataForClass(PrimitiveKClassImpl, 'PrimitiveKClassImpl', VOID, KClassImpl);
  initMetadataForClass(SimpleKClassImpl, 'SimpleKClassImpl', VOID, KClassImpl);
  initMetadataForInterface(KProperty1, 'KProperty1');
  initMetadataForInterface(KProperty0, 'KProperty0');
  initMetadataForObject(PrimitiveClasses, 'PrimitiveClasses');
  initMetadataForClass(StringBuilder, 'StringBuilder', StringBuilder_init_$Create$_0, VOID, [CharSequence]);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(Regex, 'Regex');
  initMetadataForClass(MatchGroup, 'MatchGroup');
  initMetadataForClass(findNext$1$groups$1, VOID, VOID, AbstractCollection, [Collection, AbstractCollection]);
  initMetadataForClass(findNext$1);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator]);
  initMetadataForClass(ExceptionTraceBuilder, 'ExceptionTraceBuilder', ExceptionTraceBuilder);
  initMetadataForClass(AbstractIterator, 'AbstractIterator');
  initMetadataForClass(AbstractList, 'AbstractList', VOID, AbstractCollection, [AbstractCollection, List]);
  initMetadataForClass(SubList_0, 'SubList', VOID, AbstractList, [AbstractList, RandomAccess]);
  initMetadataForClass(IteratorImpl_0, 'IteratorImpl');
  initMetadataForClass(ListIteratorImpl_0, 'ListIteratorImpl', VOID, IteratorImpl_0);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(AbstractMap$values$1$iterator$1);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(AbstractMap$values$1, VOID, VOID, AbstractCollection);
  initMetadataForCompanion(Companion_7);
  initMetadataForObject(EmptyList, 'EmptyList', VOID, VOID, [List, RandomAccess]);
  initMetadataForClass(ArrayAsCollection, 'ArrayAsCollection', VOID, VOID, [Collection]);
  initMetadataForObject(EmptyIterator, 'EmptyIterator');
  initMetadataForObject(EmptyMap, 'EmptyMap', VOID, VOID, [Map_0]);
  initMetadataForClass(IntIterator, 'IntIterator');
  initMetadataForClass(CharIterator, 'CharIterator');
  initMetadataForClass(ReversedListReadOnly$listIterator$1);
  initMetadataForClass(ReversedListReadOnly, 'ReversedListReadOnly', VOID, AbstractList);
  initMetadataForClass(SequenceScope, 'SequenceScope', VOID, VOID, VOID, [1]);
  initMetadataForClass(SequenceBuilderIterator, 'SequenceBuilderIterator', SequenceBuilderIterator, SequenceScope, [SequenceScope, Continuation], [1]);
  initMetadataForClass(_no_name_provided__qut3iv_3);
  initMetadataForClass(TransformingSequence$iterator$1);
  initMetadataForClass(TransformingSequence, 'TransformingSequence');
  initMetadataForClass(DistinctSequence, 'DistinctSequence');
  initMetadataForClass(FilteringSequence$iterator$1);
  initMetadataForClass(FilteringSequence, 'FilteringSequence');
  initMetadataForClass(FlatteningSequence$iterator$1);
  initMetadataForClass(FlatteningSequence, 'FlatteningSequence');
  initMetadataForInterface(DropTakeSequence, 'DropTakeSequence');
  initMetadataForClass(TakeSequence$iterator$1);
  initMetadataForClass(TakeSequence, 'TakeSequence', VOID, VOID, [DropTakeSequence]);
  initMetadataForClass(GeneratorSequence$iterator$1);
  initMetadataForClass(GeneratorSequence, 'GeneratorSequence');
  initMetadataForObject(EmptySequence, 'EmptySequence', VOID, VOID, [DropTakeSequence]);
  initMetadataForClass(DistinctIterator, 'DistinctIterator', VOID, AbstractIterator);
  initMetadataForObject(EmptySet, 'EmptySet', VOID, VOID, [Set]);
  initMetadataForClass(RingBuffer$iterator$1, VOID, VOID, AbstractIterator);
  initMetadataForClass(RingBuffer, 'RingBuffer', VOID, AbstractList, [AbstractList, RandomAccess]);
  initMetadataForLambda(windowedIterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(NaturalOrderComparator, 'NaturalOrderComparator', VOID, VOID, [Comparator]);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator]);
  initMetadataForObject(Key, 'Key');
  function releaseInterceptedContinuation(continuation) {
  }
  initMetadataForInterface(ContinuationInterceptor, 'ContinuationInterceptor');
  initMetadataForObject(EmptyCoroutineContext, 'EmptyCoroutineContext');
  initMetadataForClass(CoroutineSingletons, 'CoroutineSingletons', VOID, Enum);
  initMetadataForClass(Random, 'Random');
  initMetadataForObject(Default, 'Default', VOID, Random);
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(XorWowRandom, 'XorWowRandom', VOID, Random);
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(IntProgression, 'IntProgression');
  initMetadataForClass(IntRange, 'IntRange', VOID, IntProgression);
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(CharProgression, 'CharProgression');
  initMetadataForClass(CharRange, 'CharRange', VOID, CharProgression);
  initMetadataForClass(IntProgressionIterator, 'IntProgressionIterator', VOID, IntIterator);
  initMetadataForClass(CharProgressionIterator, 'CharProgressionIterator', VOID, CharIterator);
  initMetadataForCompanion(Companion_11);
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(DelimitedRangesSequence$iterator$1);
  initMetadataForClass(DelimitedRangesSequence, 'DelimitedRangesSequence');
  initMetadataForClass(UnsafeLazyImpl, 'UnsafeLazyImpl');
  initMetadataForObject(UNINITIALIZED_VALUE, 'UNINITIALIZED_VALUE');
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(Failure, 'Failure');
  initMetadataForClass(NotImplementedError, 'NotImplementedError', NotImplementedError, Error_0);
  initMetadataForClass(Pair, 'Pair');
  initMetadataForClass(Triple, 'Triple');
  //endregion
  function CharSequence() {
  }
  function Comparable() {
  }
  function Number_0() {
  }
  function Unit() {
  }
  protoOf(Unit).toString = function () {
    return 'kotlin.Unit';
  };
  var Unit_instance;
  function Unit_getInstance() {
    return Unit_instance;
  }
  function toList(_this__u8e3s4) {
    switch (_this__u8e3s4.length) {
      case 0:
        return emptyList();
      case 1:
        return listOf(_this__u8e3s4[0]);
      default:
        return toMutableList(_this__u8e3s4);
    }
  }
  function toSet(_this__u8e3s4) {
    switch (_this__u8e3s4.length) {
      case 0:
        return emptySet();
      case 1:
        return setOf(new Char(_this__u8e3s4[0]));
      default:
        return toCollection(_this__u8e3s4, LinkedHashSet_init_$Create$_1(mapCapacity(coerceAtMost(_this__u8e3s4.length, 128))));
    }
  }
  function toSet_0(_this__u8e3s4) {
    switch (_this__u8e3s4.length) {
      case 0:
        return emptySet();
      case 1:
        return setOf(_this__u8e3s4[0]);
      default:
        return toCollection_0(_this__u8e3s4, LinkedHashSet_init_$Create$_1(mapCapacity(_this__u8e3s4.length)));
    }
  }
  function joinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return joinTo(_this__u8e3s4, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function toDoubleArray(_this__u8e3s4) {
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.length;
    var tmp_1 = new Float64Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = _this__u8e3s4[tmp_2];
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function toMutableList(_this__u8e3s4) {
    return ArrayList_init_$Create$_1(asCollection(_this__u8e3s4));
  }
  function toCollection(_this__u8e3s4, destination) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var item = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      destination.e(new Char(item));
    }
    return destination;
  }
  function toCollection_0(_this__u8e3s4, destination) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var item = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      destination.e(item);
    }
    return destination;
  }
  function joinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.f(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    $l$loop: while (inductionVariable < last) {
      var element = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      count = count + 1 | 0;
      if (count > 1) {
        buffer.f(separator);
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.f(truncated);
    }
    buffer.f(postfix);
    return buffer;
  }
  function get_lastIndex(_this__u8e3s4) {
    return _this__u8e3s4.length - 1 | 0;
  }
  function contains(_this__u8e3s4, element) {
    return indexOf(_this__u8e3s4, element) >= 0;
  }
  function single(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.length) {
      case 0:
        throw NoSuchElementException_init_$Create$_0('Array is empty.');
      case 1:
        tmp = _this__u8e3s4[0];
        break;
      default:
        throw IllegalArgumentException_init_$Create$_0('Array has more than one element.');
    }
    return tmp;
  }
  function asSequence(_this__u8e3s4) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (_this__u8e3s4.length === 0)
      return emptySequence();
    // Inline function 'kotlin.sequences.Sequence' call
    return new _no_name_provided__qut3iv(_this__u8e3s4);
  }
  function indexOf(_this__u8e3s4, element) {
    if (element == null) {
      var inductionVariable = 0;
      var last = _this__u8e3s4.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (_this__u8e3s4[index] == null) {
            return index;
          }
        }
         while (inductionVariable <= last);
    } else {
      var inductionVariable_0 = 0;
      var last_0 = _this__u8e3s4.length - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          if (equals(element, _this__u8e3s4[index_0])) {
            return index_0;
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    return -1;
  }
  function _no_name_provided__qut3iv($this_asSequence) {
    this.g_1 = $this_asSequence;
  }
  protoOf(_no_name_provided__qut3iv).h = function () {
    // Inline function 'kotlin.collections.asSequence.<anonymous>' call
    return arrayIterator(this.g_1);
  };
  function joinToString_0(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return joinTo_0(_this__u8e3s4, StringBuilder_init_$Create$_0(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function joinTo_0(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.f(prefix);
    var count = 0;
    var tmp0_iterator = _this__u8e3s4.h();
    $l$loop: while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      count = count + 1 | 0;
      if (count > 1) {
        buffer.f(separator);
      }
      if (limit < 0 ? true : count <= limit) {
        appendElement(buffer, element, transform);
      } else
        break $l$loop;
    }
    if (limit >= 0 ? count > limit : false) {
      buffer.f(truncated);
    }
    buffer.f(postfix);
    return buffer;
  }
  function toIntArray(_this__u8e3s4) {
    var result = new Int32Array(_this__u8e3s4.k());
    var index = 0;
    var tmp0_iterator = _this__u8e3s4.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      result[tmp1] = element;
    }
    return result;
  }
  function first(_this__u8e3s4) {
    if (_this__u8e3s4.l())
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    return _this__u8e3s4.m(0);
  }
  function toMutableList_0(_this__u8e3s4) {
    return ArrayList_init_$Create$_1(_this__u8e3s4);
  }
  function plus(_this__u8e3s4, elements) {
    if (isInterface(elements, Collection)) {
      var result = ArrayList_init_$Create$_0(_this__u8e3s4.k() + elements.k() | 0);
      result.q(_this__u8e3s4);
      result.q(elements);
      return result;
    } else {
      var result_0 = ArrayList_init_$Create$_1(_this__u8e3s4);
      addAll(result_0, elements);
      return result_0;
    }
  }
  function chunked(_this__u8e3s4, size) {
    return windowed(_this__u8e3s4, size, size, true);
  }
  function takeLast(_this__u8e3s4, n) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(n >= 0)) {
      // Inline function 'kotlin.collections.takeLast.<anonymous>' call
      var message = 'Requested element count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    if (n === 0)
      return emptyList();
    var size = _this__u8e3s4.k();
    if (n >= size)
      return toList_0(_this__u8e3s4);
    if (n === 1)
      return listOf(last(_this__u8e3s4));
    var list = ArrayList_init_$Create$_0(n);
    if (isInterface(_this__u8e3s4, RandomAccess)) {
      var inductionVariable = size - n | 0;
      if (inductionVariable < size)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          list.e(_this__u8e3s4.m(index));
        }
         while (inductionVariable < size);
    } else {
      // Inline function 'kotlin.collections.iterator' call
      var tmp1_iterator = _this__u8e3s4.r(size - n | 0);
      while (tmp1_iterator.i()) {
        var item = tmp1_iterator.j();
        list.e(item);
      }
    }
    return list;
  }
  function toList_0(_this__u8e3s4) {
    if (isInterface(_this__u8e3s4, Collection)) {
      var tmp;
      switch (_this__u8e3s4.k()) {
        case 0:
          tmp = emptyList();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this__u8e3s4, List)) {
            tmp_0 = _this__u8e3s4.m(0);
          } else {
            tmp_0 = _this__u8e3s4.h().j();
          }

          tmp = listOf(tmp_0);
          break;
        default:
          tmp = toMutableList_0(_this__u8e3s4);
          break;
      }
      return tmp;
    }
    return optimizeReadOnlyList(toMutableList_1(_this__u8e3s4));
  }
  function drop(_this__u8e3s4, n) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(n >= 0)) {
      // Inline function 'kotlin.collections.drop.<anonymous>' call
      var message = 'Requested element count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    if (n === 0)
      return toList_0(_this__u8e3s4);
    var list;
    if (isInterface(_this__u8e3s4, Collection)) {
      var resultSize = _this__u8e3s4.k() - n | 0;
      if (resultSize <= 0)
        return emptyList();
      if (resultSize === 1)
        return listOf(last_0(_this__u8e3s4));
      list = ArrayList_init_$Create$_0(resultSize);
      if (isInterface(_this__u8e3s4, List)) {
        if (isInterface(_this__u8e3s4, RandomAccess)) {
          var inductionVariable = n;
          var last = _this__u8e3s4.k();
          if (inductionVariable < last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              list.e(_this__u8e3s4.m(index));
            }
             while (inductionVariable < last);
        } else {
          // Inline function 'kotlin.collections.iterator' call
          var tmp1_iterator = _this__u8e3s4.r(n);
          while (tmp1_iterator.i()) {
            var item = tmp1_iterator.j();
            list.e(item);
          }
        }
        return list;
      }
    } else {
      list = ArrayList_init_$Create$();
    }
    var count = 0;
    var tmp2_iterator = _this__u8e3s4.h();
    while (tmp2_iterator.i()) {
      var item_0 = tmp2_iterator.j();
      if (count >= n) {
        list.e(item_0);
      } else {
        count = count + 1 | 0;
      }
    }
    return optimizeReadOnlyList(list);
  }
  function dropLast(_this__u8e3s4, n) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(n >= 0)) {
      // Inline function 'kotlin.collections.dropLast.<anonymous>' call
      var message = 'Requested element count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    return take(_this__u8e3s4, coerceAtLeast(_this__u8e3s4.k() - n | 0, 0));
  }
  function toSet_1(_this__u8e3s4) {
    if (isInterface(_this__u8e3s4, Collection)) {
      var tmp;
      switch (_this__u8e3s4.k()) {
        case 0:
          tmp = emptySet();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this__u8e3s4, List)) {
            tmp_0 = _this__u8e3s4.m(0);
          } else {
            tmp_0 = _this__u8e3s4.h().j();
          }

          tmp = setOf(tmp_0);
          break;
        default:
          tmp = toCollection_1(_this__u8e3s4, LinkedHashSet_init_$Create$_1(mapCapacity(_this__u8e3s4.k())));
          break;
      }
      return tmp;
    }
    return optimizeReadOnlySet(toCollection_1(_this__u8e3s4, LinkedHashSet_init_$Create$()));
  }
  function firstOrNull(_this__u8e3s4) {
    if (isInterface(_this__u8e3s4, List)) {
      if (_this__u8e3s4.l())
        return null;
      else
        return _this__u8e3s4.m(0);
    } else {
      var iterator = _this__u8e3s4.h();
      if (!iterator.i())
        return null;
      return iterator.j();
    }
  }
  function plus_0(_this__u8e3s4, elements) {
    var result = ArrayList_init_$Create$_0(_this__u8e3s4.k() + elements.length | 0);
    result.q(_this__u8e3s4);
    addAll_0(result, elements);
    return result;
  }
  function zip(_this__u8e3s4, other) {
    // Inline function 'kotlin.collections.zip' call
    var first = _this__u8e3s4.h();
    var second = other.h();
    // Inline function 'kotlin.comparisons.minOf' call
    var a = collectionSizeOrDefault(_this__u8e3s4, 10);
    var b = collectionSizeOrDefault(other, 10);
    var tmp$ret$0 = Math.min(a, b);
    var list = ArrayList_init_$Create$_0(tmp$ret$0);
    while (first.i() ? second.i() : false) {
      // Inline function 'kotlin.collections.zip.<anonymous>' call
      var t1 = first.j();
      var t2 = second.j();
      var tmp$ret$1 = to(t1, t2);
      list.e(tmp$ret$1);
    }
    return list;
  }
  function intersect(_this__u8e3s4, other) {
    var set = toMutableSet(_this__u8e3s4);
    retainAll_0(set, other);
    return set;
  }
  function plus_1(_this__u8e3s4, element) {
    var result = ArrayList_init_$Create$_0(_this__u8e3s4.k() + 1 | 0);
    result.q(_this__u8e3s4);
    result.e(element);
    return result;
  }
  function last(_this__u8e3s4) {
    if (_this__u8e3s4.l())
      throw NoSuchElementException_init_$Create$_0('List is empty.');
    return _this__u8e3s4.m(get_lastIndex_0(_this__u8e3s4));
  }
  function toMutableSet(_this__u8e3s4) {
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = LinkedHashSet_init_$Create$_0(_this__u8e3s4);
    } else {
      tmp = toCollection_1(_this__u8e3s4, LinkedHashSet_init_$Create$());
    }
    return tmp;
  }
  function first_0(_this__u8e3s4) {
    if (isInterface(_this__u8e3s4, List))
      return first(_this__u8e3s4);
    else {
      var iterator = _this__u8e3s4.h();
      if (!iterator.i())
        throw NoSuchElementException_init_$Create$_0('Collection is empty.');
      return iterator.j();
    }
  }
  function asSequence_0(_this__u8e3s4) {
    // Inline function 'kotlin.sequences.Sequence' call
    return new _no_name_provided__qut3iv_0(_this__u8e3s4);
  }
  function plus_2(_this__u8e3s4, elements) {
    if (isInterface(_this__u8e3s4, Collection))
      return plus(_this__u8e3s4, elements);
    var result = ArrayList_init_$Create$();
    addAll(result, _this__u8e3s4);
    addAll(result, elements);
    return result;
  }
  function take(_this__u8e3s4, n) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(n >= 0)) {
      // Inline function 'kotlin.collections.take.<anonymous>' call
      var message = 'Requested element count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    if (n === 0)
      return emptyList();
    if (isInterface(_this__u8e3s4, Collection)) {
      if (n >= _this__u8e3s4.k())
        return toList_0(_this__u8e3s4);
      if (n === 1)
        return listOf(first_0(_this__u8e3s4));
    }
    var count = 0;
    var list = ArrayList_init_$Create$_0(n);
    var tmp0_iterator = _this__u8e3s4.h();
    $l$loop: while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      list.e(item);
      count = count + 1 | 0;
      if (count === n)
        break $l$loop;
    }
    return optimizeReadOnlyList(list);
  }
  function windowed(_this__u8e3s4, size, step, partialWindows) {
    step = step === VOID ? 1 : step;
    partialWindows = partialWindows === VOID ? false : partialWindows;
    checkWindowSizeStep(size, step);
    var tmp;
    if (isInterface(_this__u8e3s4, RandomAccess)) {
      tmp = isInterface(_this__u8e3s4, List);
    } else {
      tmp = false;
    }
    if (tmp) {
      var thisSize = _this__u8e3s4.k();
      var resultCapacity = (thisSize / step | 0) + ((thisSize % step | 0) === 0 ? 0 : 1) | 0;
      var result = ArrayList_init_$Create$_0(resultCapacity);
      var index = 0;
      $l$loop: while (0 <= index ? index < thisSize : false) {
        var windowSize = coerceAtMost(size, thisSize - index | 0);
        if (windowSize < size ? !partialWindows : false)
          break $l$loop;
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var list = ArrayList_init_$Create$_0(windowSize);
        // Inline function 'kotlin.repeat' call
        // Inline function 'kotlin.contracts.contract' call
        var inductionVariable = 0;
        if (inductionVariable < windowSize)
          do {
            var index_0 = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlin.collections.MutableList.<anonymous>' call
            // Inline function 'kotlin.collections.windowed.<anonymous>' call
            var tmp$ret$0 = _this__u8e3s4.m(index_0 + index | 0);
            list.e(tmp$ret$0);
          }
           while (inductionVariable < windowSize);
        result.e(list);
        index = index + step | 0;
      }
      return result;
    }
    var result_0 = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = windowedIterator(_this__u8e3s4.h(), size, step, partialWindows, false);
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      // Inline function 'kotlin.collections.windowed.<anonymous>' call
      result_0.e(element);
    }
    return result_0;
  }
  function firstOrNull_0(_this__u8e3s4) {
    return _this__u8e3s4.l() ? null : _this__u8e3s4.m(0);
  }
  function minus(_this__u8e3s4, element) {
    var result = ArrayList_init_$Create$_0(collectionSizeOrDefault(_this__u8e3s4, 10));
    var removed = false;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_iterator = _this__u8e3s4.h();
    while (tmp0_iterator.i()) {
      var element_0 = tmp0_iterator.j();
      // Inline function 'kotlin.collections.minus.<anonymous>' call
      var tmp;
      if (!removed ? equals(element_0, element) : false) {
        removed = true;
        tmp = false;
      } else {
        tmp = true;
      }
      if (tmp) {
        result.e(element_0);
      }
    }
    return result;
  }
  function toDoubleArray_0(_this__u8e3s4) {
    var result = new Float64Array(_this__u8e3s4.k());
    var index = 0;
    var tmp0_iterator = _this__u8e3s4.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      result[tmp1] = element;
    }
    return result;
  }
  function sorted(_this__u8e3s4) {
    if (isInterface(_this__u8e3s4, Collection)) {
      if (_this__u8e3s4.k() <= 1)
        return toList_0(_this__u8e3s4);
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp = copyToArray(_this__u8e3s4);
      var this_0 = isArray(tmp) ? tmp : THROW_CCE();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.collections.sorted.<anonymous>' call
      sort(this_0);
      return asList(this_0);
    }
    // Inline function 'kotlin.apply' call
    var this_1 = toMutableList_1(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.sorted.<anonymous>' call
    sort_0(this_1);
    return this_1;
  }
  function random(_this__u8e3s4, random) {
    if (_this__u8e3s4.l())
      throw NoSuchElementException_init_$Create$_0('Collection is empty.');
    return elementAt(_this__u8e3s4, random.s(_this__u8e3s4.k()));
  }
  function sortedWith(_this__u8e3s4, comparator) {
    if (isInterface(_this__u8e3s4, Collection)) {
      if (_this__u8e3s4.k() <= 1)
        return toList_0(_this__u8e3s4);
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp = copyToArray(_this__u8e3s4);
      var this_0 = isArray(tmp) ? tmp : THROW_CCE();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.collections.sortedWith.<anonymous>' call
      sortWith(this_0, comparator);
      return asList(this_0);
    }
    // Inline function 'kotlin.apply' call
    var this_1 = toMutableList_1(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.sortedWith.<anonymous>' call
    sortWith_0(this_1, comparator);
    return this_1;
  }
  function toBooleanArray(_this__u8e3s4) {
    var result = booleanArray(_this__u8e3s4.k());
    var index = 0;
    var tmp0_iterator = _this__u8e3s4.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      result[tmp1] = element;
    }
    return result;
  }
  function toMutableList_1(_this__u8e3s4) {
    if (isInterface(_this__u8e3s4, Collection))
      return toMutableList_0(_this__u8e3s4);
    return toCollection_1(_this__u8e3s4, ArrayList_init_$Create$());
  }
  function last_0(_this__u8e3s4) {
    if (isInterface(_this__u8e3s4, List))
      return last(_this__u8e3s4);
    else {
      var iterator = _this__u8e3s4.h();
      if (!iterator.i())
        throw NoSuchElementException_init_$Create$_0('Collection is empty.');
      var last_0 = iterator.j();
      while (iterator.i())
        last_0 = iterator.j();
      return last_0;
    }
  }
  function toCollection_1(_this__u8e3s4, destination) {
    var tmp0_iterator = _this__u8e3s4.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      destination.e(item);
    }
    return destination;
  }
  function getOrNull(_this__u8e3s4, index) {
    return (index >= 0 ? index <= get_lastIndex_0(_this__u8e3s4) : false) ? _this__u8e3s4.m(index) : null;
  }
  function elementAt(_this__u8e3s4, index) {
    if (isInterface(_this__u8e3s4, List))
      return _this__u8e3s4.m(index);
    return elementAtOrElse(_this__u8e3s4, index, elementAt$lambda(index));
  }
  function elementAtOrElse(_this__u8e3s4, index, defaultValue) {
    if (isInterface(_this__u8e3s4, List)) {
      // Inline function 'kotlin.collections.getOrElse' call
      return (index >= 0 ? index <= get_lastIndex_0(_this__u8e3s4) : false) ? _this__u8e3s4.m(index) : defaultValue(index);
    }
    if (index < 0)
      return defaultValue(index);
    var iterator = _this__u8e3s4.h();
    var count = 0;
    while (iterator.i()) {
      var element = iterator.j();
      var tmp0 = count;
      count = tmp0 + 1 | 0;
      if (index === tmp0)
        return element;
    }
    return defaultValue(index);
  }
  function shuffle(_this__u8e3s4, random) {
    var inductionVariable = get_lastIndex_0(_this__u8e3s4);
    if (1 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var j = random.s(i + 1 | 0);
        _this__u8e3s4.t(j, _this__u8e3s4.t(i, _this__u8e3s4.m(j)));
      }
       while (1 <= inductionVariable);
  }
  function single_0(_this__u8e3s4) {
    if (isInterface(_this__u8e3s4, List))
      return single_1(_this__u8e3s4);
    else {
      var iterator = _this__u8e3s4.h();
      if (!iterator.i())
        throw NoSuchElementException_init_$Create$_0('Collection is empty.');
      var single = iterator.j();
      if (iterator.i())
        throw IllegalArgumentException_init_$Create$_0('Collection has more than one element.');
      return single;
    }
  }
  function single_1(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.k()) {
      case 0:
        throw NoSuchElementException_init_$Create$_0('List is empty.');
      case 1:
        tmp = _this__u8e3s4.m(0);
        break;
      default:
        throw IllegalArgumentException_init_$Create$_0('List has more than one element.');
    }
    return tmp;
  }
  function union(_this__u8e3s4, other) {
    var set = toMutableSet(_this__u8e3s4);
    addAll(set, other);
    return set;
  }
  function _no_name_provided__qut3iv_0($this_asSequence) {
    this.u_1 = $this_asSequence;
  }
  protoOf(_no_name_provided__qut3iv_0).h = function () {
    // Inline function 'kotlin.collections.asSequence.<anonymous>' call
    return this.u_1.h();
  };
  function elementAt$lambda($index) {
    return function (it) {
      throw IndexOutOfBoundsException_init_$Create$_0("Collection doesn't contain element at index " + $index + '.');
    };
  }
  function until(_this__u8e3s4, to) {
    if (to <= -2147483648)
      return Companion_getInstance_9().v_1;
    return numberRangeToNumber(_this__u8e3s4, to - 1 | 0);
  }
  function downTo(_this__u8e3s4, to) {
    return Companion_instance_11.w(_this__u8e3s4, to, -1);
  }
  function coerceAtLeast(_this__u8e3s4, minimumValue) {
    return _this__u8e3s4 < minimumValue ? minimumValue : _this__u8e3s4;
  }
  function coerceAtMost(_this__u8e3s4, maximumValue) {
    return _this__u8e3s4 > maximumValue ? maximumValue : _this__u8e3s4;
  }
  function coerceIn(_this__u8e3s4, minimumValue, maximumValue) {
    if (minimumValue > maximumValue)
      throw IllegalArgumentException_init_$Create$_0('Cannot coerce value to an empty range: maximum ' + maximumValue + ' is less than minimum ' + minimumValue + '.');
    if (_this__u8e3s4 < minimumValue)
      return minimumValue;
    if (_this__u8e3s4 > maximumValue)
      return maximumValue;
    return _this__u8e3s4;
  }
  function toSet_2(_this__u8e3s4) {
    var it = _this__u8e3s4.h();
    if (!it.i())
      return emptySet();
    var element = it.j();
    if (!it.i())
      return setOf(element);
    var dst = LinkedHashSet_init_$Create$();
    dst.e(element);
    while (it.i()) {
      dst.e(it.j());
    }
    return dst;
  }
  function map(_this__u8e3s4, transform) {
    return new TransformingSequence(_this__u8e3s4, transform);
  }
  function distinct(_this__u8e3s4) {
    return distinctBy(_this__u8e3s4, distinct$lambda);
  }
  function distinctBy(_this__u8e3s4, selector) {
    return new DistinctSequence(_this__u8e3s4, selector);
  }
  function filter(_this__u8e3s4, predicate) {
    return new FilteringSequence(_this__u8e3s4, true, predicate);
  }
  function plus_3(_this__u8e3s4, elements) {
    return flatten_0(sequenceOf([_this__u8e3s4, elements]));
  }
  function flatMap(_this__u8e3s4, transform) {
    return new FlatteningSequence(_this__u8e3s4, transform, Sequence$iterator$ref());
  }
  function toList_1(_this__u8e3s4) {
    var it = _this__u8e3s4.h();
    if (!it.i())
      return emptyList();
    var element = it.j();
    if (!it.i())
      return listOf(element);
    var dst = ArrayList_init_$Create$();
    dst.e(element);
    while (it.i()) {
      dst.e(it.j());
    }
    return dst;
  }
  function take_0(_this__u8e3s4, n) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(n >= 0)) {
      // Inline function 'kotlin.sequences.take.<anonymous>' call
      var message = 'Requested element count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    var tmp;
    if (n === 0) {
      tmp = emptySequence();
    } else {
      if (isInterface(_this__u8e3s4, DropTakeSequence)) {
        tmp = _this__u8e3s4.y(n);
      } else {
        tmp = new TakeSequence(_this__u8e3s4, n);
      }
    }
    return tmp;
  }
  function asIterable(_this__u8e3s4) {
    // Inline function 'kotlin.collections.Iterable' call
    return new _no_name_provided__qut3iv_1(_this__u8e3s4);
  }
  function distinct$lambda(it) {
    return it;
  }
  function Sequence$iterator$ref() {
    var l = function (p0) {
      return p0.h();
    };
    l.callableName = 'iterator';
    return l;
  }
  function _no_name_provided__qut3iv_1($this_asIterable) {
    this.z_1 = $this_asIterable;
  }
  protoOf(_no_name_provided__qut3iv_1).h = function () {
    // Inline function 'kotlin.sequences.asIterable.<anonymous>' call
    return this.z_1.h();
  };
  function plus_4(_this__u8e3s4, elements) {
    var tmp0_safe_receiver = collectionSizeOrNull(elements);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.collections.plus.<anonymous>' call
      tmp = _this__u8e3s4.k() + tmp0_safe_receiver | 0;
    }
    var tmp1_elvis_lhs = tmp;
    var result = LinkedHashSet_init_$Create$_1(mapCapacity(tmp1_elvis_lhs == null ? imul(_this__u8e3s4.k(), 2) : tmp1_elvis_lhs));
    result.q(_this__u8e3s4);
    addAll(result, elements);
    return result;
  }
  function minus_0(_this__u8e3s4, elements) {
    var other = convertToListIfNotCollection(elements);
    if (other.l())
      return toSet_1(_this__u8e3s4);
    if (isInterface(other, Set)) {
      // Inline function 'kotlin.collections.filterNotTo' call
      var destination = LinkedHashSet_init_$Create$();
      var tmp0_iterator = _this__u8e3s4.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'kotlin.collections.minus.<anonymous>' call
        if (!other.a1(element)) {
          destination.e(element);
        }
      }
      return destination;
    }
    var result = LinkedHashSet_init_$Create$_0(_this__u8e3s4);
    result.b1(other);
    return result;
  }
  function minus_1(_this__u8e3s4, element) {
    var result = LinkedHashSet_init_$Create$_1(mapCapacity(_this__u8e3s4.k()));
    var removed = false;
    // Inline function 'kotlin.collections.filterTo' call
    var tmp0_iterator = _this__u8e3s4.h();
    while (tmp0_iterator.i()) {
      var element_0 = tmp0_iterator.j();
      // Inline function 'kotlin.collections.minus.<anonymous>' call
      var tmp;
      if (!removed ? equals(element_0, element) : false) {
        removed = true;
        tmp = false;
      } else {
        tmp = true;
      }
      if (tmp) {
        result.e(element_0);
      }
    }
    return result;
  }
  function plus_5(_this__u8e3s4, element) {
    var result = LinkedHashSet_init_$Create$_1(mapCapacity(_this__u8e3s4.k() + 1 | 0));
    result.q(_this__u8e3s4);
    result.e(element);
    return result;
  }
  function dropLast_0(_this__u8e3s4, n) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(n >= 0)) {
      // Inline function 'kotlin.text.dropLast.<anonymous>' call
      var message = 'Requested character count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    return take_1(_this__u8e3s4, coerceAtLeast(_this__u8e3s4.length - n | 0, 0));
  }
  function drop_0(_this__u8e3s4, n) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(n >= 0)) {
      // Inline function 'kotlin.text.drop.<anonymous>' call
      var message = 'Requested character count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    // Inline function 'kotlin.text.substring' call
    var startIndex = coerceAtMost(n, _this__u8e3s4.length);
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.substring(startIndex);
  }
  function first_1(_this__u8e3s4) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(_this__u8e3s4) === 0)
      throw NoSuchElementException_init_$Create$_0('Char sequence is empty.');
    return charSequenceGet(_this__u8e3s4, 0);
  }
  function last_1(_this__u8e3s4) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(_this__u8e3s4) === 0)
      throw NoSuchElementException_init_$Create$_0('Char sequence is empty.');
    return charSequenceGet(_this__u8e3s4, get_lastIndex_1(_this__u8e3s4));
  }
  function take_1(_this__u8e3s4, n) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(n >= 0)) {
      // Inline function 'kotlin.text.take.<anonymous>' call
      var message = 'Requested character count ' + n + ' is less than zero.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    // Inline function 'kotlin.text.substring' call
    var endIndex = coerceAtMost(n, _this__u8e3s4.length);
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.substring(0, endIndex);
  }
  function _Char___init__impl__6a9atx(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _Char___init__impl__6a9atx_0(code) {
    // Inline function 'kotlin.UShort.toInt' call
    var tmp$ret$0 = _UShort___get_data__impl__g0245(code) & 65535;
    return _Char___init__impl__6a9atx(tmp$ret$0);
  }
  function Char__compareTo_impl_ypi4mb($this, other) {
    return _get_value__a43j40($this) - _get_value__a43j40(other) | 0;
  }
  function Char__compareTo_impl_ypi4mb_0($this, other) {
    return Char__compareTo_impl_ypi4mb($this.c1_1, other instanceof Char ? other.c1_1 : THROW_CCE());
  }
  function Char__rangeTo_impl_tkncvp($this, other) {
    return new CharRange($this, other);
  }
  function Char__toInt_impl_vasixd($this) {
    return _get_value__a43j40($this);
  }
  function toString($this) {
    // Inline function 'kotlin.js.unsafeCast' call
    return String.fromCharCode(_get_value__a43j40($this));
  }
  function Char__equals_impl_x6719k($this, other) {
    if (!(other instanceof Char))
      return false;
    return _get_value__a43j40($this) === _get_value__a43j40(other.c1_1);
  }
  function Char__hashCode_impl_otmys($this) {
    return _get_value__a43j40($this);
  }
  function Companion() {
    Companion_instance = this;
    this.d1_1 = _Char___init__impl__6a9atx(0);
    this.e1_1 = _Char___init__impl__6a9atx(65535);
    this.f1_1 = _Char___init__impl__6a9atx(55296);
    this.g1_1 = _Char___init__impl__6a9atx(56319);
    this.h1_1 = _Char___init__impl__6a9atx(56320);
    this.i1_1 = _Char___init__impl__6a9atx(57343);
    this.j1_1 = _Char___init__impl__6a9atx(55296);
    this.k1_1 = _Char___init__impl__6a9atx(57343);
    this.l1_1 = 2;
    this.m1_1 = 16;
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Char(value) {
    Companion_getInstance();
    this.c1_1 = value;
  }
  protoOf(Char).n1 = function (other) {
    return Char__compareTo_impl_ypi4mb(this.c1_1, other);
  };
  protoOf(Char).d = function (other) {
    return Char__compareTo_impl_ypi4mb_0(this, other);
  };
  protoOf(Char).toString = function () {
    return toString(this.c1_1);
  };
  protoOf(Char).equals = function (other) {
    return Char__equals_impl_x6719k(this.c1_1, other);
  };
  protoOf(Char).hashCode = function () {
    return Char__hashCode_impl_otmys(this.c1_1);
  };
  function List() {
  }
  function Collection() {
  }
  function Entry() {
  }
  function Map_0() {
  }
  function Set() {
  }
  function MutableIterable() {
  }
  function Companion_0() {
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function Enum(name, ordinal) {
    this.x1_1 = name;
    this.y1_1 = ordinal;
  }
  protoOf(Enum).z1 = function (other) {
    return compareTo(this.y1_1, other.y1_1);
  };
  protoOf(Enum).d = function (other) {
    return this.z1(other instanceof Enum ? other : THROW_CCE());
  };
  protoOf(Enum).equals = function (other) {
    return this === other;
  };
  protoOf(Enum).hashCode = function () {
    return identityHashCode(this);
  };
  protoOf(Enum).toString = function () {
    return this.x1_1;
  };
  function toString_0(_this__u8e3s4) {
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : toString_1(_this__u8e3s4);
    return tmp1_elvis_lhs == null ? 'null' : tmp1_elvis_lhs;
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.a2_1 = new Long(0, -2147483648);
    this.b2_1 = new Long(-1, 2147483647);
    this.c2_1 = 8;
    this.d2_1 = 64;
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Long(low, high) {
    Companion_getInstance_1();
    Number_0.call(this);
    this.e2_1 = low;
    this.f2_1 = high;
  }
  protoOf(Long).g2 = function (other) {
    return compare(this, other);
  };
  protoOf(Long).d = function (other) {
    return this.g2(other instanceof Long ? other : THROW_CCE());
  };
  protoOf(Long).h2 = function (other) {
    return add(this, other);
  };
  protoOf(Long).i2 = function (other) {
    return divide(this, other);
  };
  protoOf(Long).j2 = function () {
    return this.k2().h2(new Long(1, 0));
  };
  protoOf(Long).k2 = function () {
    return new Long(~this.e2_1, ~this.f2_1);
  };
  protoOf(Long).l2 = function () {
    return this.e2_1;
  };
  protoOf(Long).m2 = function () {
    return toNumber(this);
  };
  protoOf(Long).toString = function () {
    return toStringImpl(this, 10);
  };
  protoOf(Long).equals = function (other) {
    var tmp;
    if (other instanceof Long) {
      tmp = equalsLong(this, other);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Long).hashCode = function () {
    return hashCode_0(this);
  };
  protoOf(Long).valueOf = function () {
    return this.m2();
  };
  function implement(interfaces) {
    var maxSize = 1;
    var masks = [];
    var inductionVariable = 0;
    var last = interfaces.length;
    while (inductionVariable < last) {
      var i = interfaces[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var currentSize = maxSize;
      var tmp1_elvis_lhs = i.prototype.$imask$;
      var imask = tmp1_elvis_lhs == null ? i.$imask$ : tmp1_elvis_lhs;
      if (!(imask == null)) {
        masks.push(imask);
        currentSize = imask.length;
      }
      var iid = i.$metadata$.iid;
      var tmp;
      if (iid == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.js.implement.<anonymous>' call
        tmp = bitMaskWith(iid);
      }
      var iidImask = tmp;
      if (!(iidImask == null)) {
        masks.push(iidImask);
        currentSize = Math.max(currentSize, iidImask.length);
      }
      if (currentSize > maxSize) {
        maxSize = currentSize;
      }
    }
    return compositeBitMask(maxSize, masks);
  }
  function bitMaskWith(activeBit) {
    var numberIndex = activeBit >> 5;
    var intArray = new Int32Array(numberIndex + 1 | 0);
    var positionInNumber = activeBit & 31;
    var numberWithSettledBit = 1 << positionInNumber;
    intArray[numberIndex] = intArray[numberIndex] | numberWithSettledBit;
    return intArray;
  }
  function compositeBitMask(capacity, masks) {
    var tmp = 0;
    var tmp_0 = new Int32Array(capacity);
    while (tmp < capacity) {
      var tmp_1 = tmp;
      var result = 0;
      var inductionVariable = 0;
      var last = masks.length;
      while (inductionVariable < last) {
        var mask = masks[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (tmp_1 < mask.length) {
          result = result | mask[tmp_1];
        }
      }
      tmp_0[tmp_1] = result;
      tmp = tmp + 1 | 0;
    }
    return tmp_0;
  }
  function isBitSet(_this__u8e3s4, possibleActiveBit) {
    var numberIndex = possibleActiveBit >> 5;
    if (numberIndex > _this__u8e3s4.length)
      return false;
    var positionInNumber = possibleActiveBit & 31;
    var numberWithSettledBit = 1 << positionInNumber;
    return !((_this__u8e3s4[numberIndex] & numberWithSettledBit) === 0);
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last = array.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last));
    return array;
  }
  function arrayIterator(array) {
    return new arrayIterator$1(array);
  }
  function booleanArray(size) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'withType' call
    var type = 'BooleanArray';
    var array = fillArrayVal(Array(size), false);
    array.$type$ = type;
    return array;
  }
  function charArray(size) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'withType' call
    var type = 'CharArray';
    var array = new Uint16Array(size);
    array.$type$ = type;
    return array;
  }
  function booleanArrayOf(arr) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'withType' call
    var type = 'BooleanArray';
    // Inline function 'kotlin.js.asDynamic' call
    var array = arr.slice();
    array.$type$ = type;
    return array;
  }
  function charArrayOf(arr) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'withType' call
    var type = 'CharArray';
    var array = new Uint16Array(arr);
    array.$type$ = type;
    return array;
  }
  function arrayIterator$1($array) {
    this.o2_1 = $array;
    this.n2_1 = 0;
  }
  protoOf(arrayIterator$1).i = function () {
    return !(this.n2_1 === this.o2_1.length);
  };
  protoOf(arrayIterator$1).j = function () {
    var tmp;
    if (!(this.n2_1 === this.o2_1.length)) {
      var tmp1 = this.n2_1;
      this.n2_1 = tmp1 + 1 | 0;
      tmp = this.o2_1[tmp1];
    } else {
      throw NoSuchElementException_init_$Create$_0('' + this.n2_1);
    }
    return tmp;
  };
  function get_buf() {
    _init_properties_bitUtils_kt__nfcg4k();
    return buf;
  }
  var buf;
  function get_bufFloat64() {
    _init_properties_bitUtils_kt__nfcg4k();
    return bufFloat64;
  }
  var bufFloat64;
  var bufFloat32;
  function get_bufInt32() {
    _init_properties_bitUtils_kt__nfcg4k();
    return bufInt32;
  }
  var bufInt32;
  function get_lowIndex() {
    _init_properties_bitUtils_kt__nfcg4k();
    return lowIndex;
  }
  var lowIndex;
  function get_highIndex() {
    _init_properties_bitUtils_kt__nfcg4k();
    return highIndex;
  }
  var highIndex;
  function getNumberHashCode(obj) {
    _init_properties_bitUtils_kt__nfcg4k();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.jsBitwiseOr' call
    // Inline function 'kotlin.js.asDynamic' call
    if ((obj | 0) === obj) {
      return numberToInt(obj);
    }
    get_bufFloat64()[0] = obj;
    return imul(get_bufInt32()[get_highIndex()], 31) + get_bufInt32()[get_lowIndex()] | 0;
  }
  var properties_initialized_bitUtils_kt_i2bo3e;
  function _init_properties_bitUtils_kt__nfcg4k() {
    if (!properties_initialized_bitUtils_kt_i2bo3e) {
      properties_initialized_bitUtils_kt_i2bo3e = true;
      buf = new ArrayBuffer(8);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      bufFloat64 = new Float64Array(get_buf());
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      bufFloat32 = new Float32Array(get_buf());
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      bufInt32 = new Int32Array(get_buf());
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.js.lowIndex.<anonymous>' call
      get_bufFloat64()[0] = -1.0;
      lowIndex = !(get_bufInt32()[0] === 0) ? 1 : 0;
      highIndex = 1 - get_lowIndex() | 0;
    }
  }
  function charSequenceGet(a, index) {
    var tmp;
    if (isString(a)) {
      // Inline function 'kotlin.Char' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var code = a.charCodeAt(index);
      var tmp_0;
      // Inline function 'kotlin.code' call
      var this_0 = _Char___init__impl__6a9atx(0);
      if (code < Char__toInt_impl_vasixd(this_0)) {
        tmp_0 = true;
      } else {
        // Inline function 'kotlin.code' call
        var this_1 = _Char___init__impl__6a9atx(65535);
        tmp_0 = code > Char__toInt_impl_vasixd(this_1);
      }
      if (tmp_0) {
        throw IllegalArgumentException_init_$Create$_0('Invalid Char code: ' + code);
      }
      tmp = numberToChar(code);
    } else {
      tmp = a.b(index);
    }
    return tmp;
  }
  function isString(a) {
    return typeof a === 'string';
  }
  function charSequenceLength(a) {
    var tmp;
    if (isString(a)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = a.length;
    } else {
      tmp = a.a();
    }
    return tmp;
  }
  function charSequenceSubSequence(a, startIndex, endIndex) {
    var tmp;
    if (isString(a)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = a.substring(startIndex, endIndex);
    } else {
      tmp = a.c(startIndex, endIndex);
    }
    return tmp;
  }
  function contentEqualsInternal(_this__u8e3s4, other) {
    // Inline function 'kotlin.js.asDynamic' call
    var a = _this__u8e3s4;
    // Inline function 'kotlin.js.asDynamic' call
    var b = other;
    if (a === b)
      return true;
    if (((a == null ? true : b == null) ? true : !isArrayish(b)) ? true : a.length != b.length)
      return false;
    var inductionVariable = 0;
    var last = a.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(a[i], b[i])) {
          return false;
        }
      }
       while (inductionVariable < last);
    return true;
  }
  function arrayToString(array) {
    return joinToString(array, ', ', '[', ']', VOID, VOID, arrayToString$lambda);
  }
  function arrayToString$lambda(it) {
    return toString_1(it);
  }
  function compareTo(a, b) {
    var tmp;
    switch (typeof a) {
      case 'number':
        var tmp_0;
        if (typeof b === 'number') {
          tmp_0 = doubleCompareTo(a, b);
        } else {
          if (b instanceof Long) {
            tmp_0 = doubleCompareTo(a, b.m2());
          } else {
            tmp_0 = primitiveCompareTo(a, b);
          }
        }

        tmp = tmp_0;
        break;
      case 'string':
      case 'boolean':
        tmp = primitiveCompareTo(a, b);
        break;
      default:
        tmp = compareToDoNotIntrinsicify(a, b);
        break;
    }
    return tmp;
  }
  function doubleCompareTo(a, b) {
    var tmp;
    if (a < b) {
      tmp = -1;
    } else if (a > b) {
      tmp = 1;
    } else if (a === b) {
      var tmp_0;
      if (a !== 0) {
        tmp_0 = 0;
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        var ia = 1 / a;
        var tmp_1;
        // Inline function 'kotlin.js.asDynamic' call
        if (ia === 1 / b) {
          tmp_1 = 0;
        } else {
          if (ia < 0) {
            tmp_1 = -1;
          } else {
            tmp_1 = 1;
          }
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else if (a !== a) {
      tmp = b !== b ? 0 : 1;
    } else {
      tmp = -1;
    }
    return tmp;
  }
  function primitiveCompareTo(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }
  function compareToDoNotIntrinsicify(a, b) {
    return a.d(b);
  }
  function identityHashCode(obj) {
    return getObjectHashCode(obj);
  }
  function getObjectHashCode(obj) {
    // Inline function 'kotlin.js.jsIn' call
    if (!('kotlinHashCodeValue$' in obj)) {
      var hash = calculateRandomHash();
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }
    // Inline function 'kotlin.js.unsafeCast' call
    return obj['kotlinHashCodeValue$'];
  }
  function calculateRandomHash() {
    // Inline function 'kotlin.js.jsBitwiseOr' call
    return Math.random() * 4.294967296E9 | 0;
  }
  function equals(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }
    if (obj2 == null) {
      return false;
    }
    if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      return obj1.equals(obj2);
    }
    if (obj1 !== obj1) {
      return obj2 !== obj2;
    }
    if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_1 = 1 / obj1;
          // Inline function 'kotlin.js.asDynamic' call
          tmp_0 = tmp_1 === 1 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }
    return obj1 === obj2;
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var typeOf = typeof obj;
    var tmp;
    switch (typeOf) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        // Inline function 'kotlin.js.unsafeCast' call

        tmp = getBooleanHashCode(obj);
        break;
      case 'string':
        tmp = getStringHashCode(String(obj));
        break;
      case 'bigint':
        tmp = getBigIntHashCode(obj);
        break;
      case 'symbol':
        tmp = getSymbolHashCode(obj);
        break;
      default:
        tmp = function () {
          throw new Error('Unexpected typeof `' + typeOf + '`');
        }();
        break;
    }
    return tmp;
  }
  function toString_1(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else if (!(typeof o.toString === 'function')) {
      tmp = anyToString(o);
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp = o.toString();
    }
    return tmp;
  }
  function getBooleanHashCode(value) {
    return value ? 1231 : 1237;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        var code = str.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function getBigIntHashCode(value) {
    var shiftNumber = BigInt(32);
    var MASK = BigInt(4.294967295E9);
    var bigNumber = value < 0 ? -value : value;
    var hashCode = 0;
    var signum = value < 0 ? -1 : 1;
    while (bigNumber != 0) {
      // Inline function 'kotlin.js.unsafeCast' call
      var chunk = Number(bigNumber & MASK);
      hashCode = imul(31, hashCode) + chunk | 0;
      bigNumber = bigNumber >> shiftNumber;
    }
    return imul(hashCode, signum);
  }
  function getSymbolHashCode(value) {
    var hashCodeMap = symbolIsSharable(value) ? getSymbolMap() : getSymbolWeakMap();
    var cachedHashCode = hashCodeMap.get(value);
    if (cachedHashCode !== VOID)
      return cachedHashCode;
    var hash = calculateRandomHash();
    hashCodeMap.set(value, hash);
    return hash;
  }
  function anyToString(o) {
    return Object.prototype.toString.call(o);
  }
  function symbolIsSharable(symbol) {
    return Symbol.keyFor(symbol) != VOID;
  }
  function getSymbolMap() {
    if (symbolMap === VOID) {
      symbolMap = new Map();
    }
    return symbolMap;
  }
  function getSymbolWeakMap() {
    if (symbolWeakMap === VOID) {
      symbolWeakMap = new WeakMap();
    }
    return symbolWeakMap;
  }
  var symbolMap;
  var symbolWeakMap;
  function boxIntrinsic(x) {
    var message = 'Should be lowered';
    throw IllegalStateException_init_$Create$_0(toString_1(message));
  }
  function unboxIntrinsic(x) {
    var message = 'Should be lowered';
    throw IllegalStateException_init_$Create$_0(toString_1(message));
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      instance.stack = (new Error()).stack;
    }
  }
  function protoOf(constructor) {
    return constructor.prototype;
  }
  function defineProp(obj, name, getter, setter) {
    return Object.defineProperty(obj, name, {configurable: true, get: getter, set: setter});
  }
  function objectCreate(proto) {
    return Object.create(proto);
  }
  function newThrowable(message, cause) {
    var throwable = new Error();
    var tmp;
    if (isUndefined(message)) {
      var tmp_0;
      if (isUndefined(cause)) {
        tmp_0 = message;
      } else {
        var tmp1_elvis_lhs = cause == null ? null : cause.toString();
        tmp_0 = tmp1_elvis_lhs == null ? VOID : tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      tmp = message == null ? VOID : message;
    }
    throwable.message = tmp;
    throwable.cause = cause;
    throwable.name = 'Throwable';
    // Inline function 'kotlin.js.unsafeCast' call
    return throwable;
  }
  function isUndefined(value) {
    return value === VOID;
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    var errorInfo = calculateErrorInfo(Object.getPrototypeOf(this_));
    if ((errorInfo & 1) === 0) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp1_elvis_lhs = cause == null ? null : cause.toString();
          tmp_0 = tmp1_elvis_lhs == null ? VOID : tmp1_elvis_lhs;
        } else {
          tmp_0 = VOID;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }
    if ((errorInfo & 2) === 0) {
      this_.cause = cause;
    }
    this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function ensureNotNull(v) {
    var tmp;
    if (v == null) {
      THROW_NPE();
    } else {
      tmp = v;
    }
    return tmp;
  }
  function THROW_NPE() {
    throw NullPointerException_init_$Create$();
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function get_ZERO() {
    _init_properties_longJs_kt__elc2w5();
    return ZERO;
  }
  var ZERO;
  function get_ONE() {
    _init_properties_longJs_kt__elc2w5();
    return ONE;
  }
  var ONE;
  function get_NEG_ONE() {
    _init_properties_longJs_kt__elc2w5();
    return NEG_ONE;
  }
  var NEG_ONE;
  function get_MAX_VALUE() {
    _init_properties_longJs_kt__elc2w5();
    return MAX_VALUE;
  }
  var MAX_VALUE;
  function get_MIN_VALUE() {
    _init_properties_longJs_kt__elc2w5();
    return MIN_VALUE;
  }
  var MIN_VALUE;
  function get_TWO_PWR_24_() {
    _init_properties_longJs_kt__elc2w5();
    return TWO_PWR_24_;
  }
  var TWO_PWR_24_;
  function compare(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    if (equalsLong(_this__u8e3s4, other)) {
      return 0;
    }
    var thisNeg = isNegative(_this__u8e3s4);
    var otherNeg = isNegative(other);
    return (thisNeg ? !otherNeg : false) ? -1 : (!thisNeg ? otherNeg : false) ? 1 : isNegative(subtract(_this__u8e3s4, other)) ? -1 : 1;
  }
  function add(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    var a48 = _this__u8e3s4.f2_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.f2_1 & 65535;
    var a16 = _this__u8e3s4.e2_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.e2_1 & 65535;
    var b48 = other.f2_1 >>> 16 | 0;
    var b32 = other.f2_1 & 65535;
    var b16 = other.e2_1 >>> 16 | 0;
    var b00 = other.e2_1 & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + (a00 + b00 | 0) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + (a16 + b16 | 0) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + (a32 + b32 | 0) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (a48 + b48 | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function subtract(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    return add(_this__u8e3s4, other.j2());
  }
  function multiply(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    } else if (isZero(other)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      return isOdd(other) ? get_MIN_VALUE() : get_ZERO();
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return isOdd(_this__u8e3s4) ? get_MIN_VALUE() : get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = multiply(negate(_this__u8e3s4), negate(other));
      } else {
        tmp = negate(multiply(negate(_this__u8e3s4), other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(multiply(_this__u8e3s4, negate(other)));
    }
    if (lessThan(_this__u8e3s4, get_TWO_PWR_24_()) ? lessThan(other, get_TWO_PWR_24_()) : false) {
      return fromNumber(toNumber(_this__u8e3s4) * toNumber(other));
    }
    var a48 = _this__u8e3s4.f2_1 >>> 16 | 0;
    var a32 = _this__u8e3s4.f2_1 & 65535;
    var a16 = _this__u8e3s4.e2_1 >>> 16 | 0;
    var a00 = _this__u8e3s4.e2_1 & 65535;
    var b48 = other.f2_1 >>> 16 | 0;
    var b32 = other.f2_1 & 65535;
    var b16 = other.e2_1 >>> 16 | 0;
    var b00 = other.e2_1 & 65535;
    var c48 = 0;
    var c32 = 0;
    var c16 = 0;
    var c00 = 0;
    c00 = c00 + imul(a00, b00) | 0;
    c16 = c16 + (c00 >>> 16 | 0) | 0;
    c00 = c00 & 65535;
    c16 = c16 + imul(a16, b00) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c16 = c16 + imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16 | 0) | 0;
    c16 = c16 & 65535;
    c32 = c32 + imul(a32, b00) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c32 = c32 + imul(a00, b32) | 0;
    c48 = c48 + (c32 >>> 16 | 0) | 0;
    c32 = c32 & 65535;
    c48 = c48 + (((imul(a48, b00) + imul(a32, b16) | 0) + imul(a16, b32) | 0) + imul(a00, b48) | 0) | 0;
    c48 = c48 & 65535;
    return new Long(c16 << 16 | c00, c48 << 16 | c32);
  }
  function divide(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    if (isZero(other)) {
      throw Exception_init_$Create$_0('division by zero');
    } else if (isZero(_this__u8e3s4)) {
      return get_ZERO();
    }
    if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
      if (equalsLong(other, get_ONE()) ? true : equalsLong(other, get_NEG_ONE())) {
        return get_MIN_VALUE();
      } else if (equalsLong(other, get_MIN_VALUE())) {
        return get_ONE();
      } else {
        var halfThis = shiftRight(_this__u8e3s4, 1);
        var approx = shiftLeft(halfThis.i2(other), 1);
        if (equalsLong(approx, get_ZERO())) {
          return isNegative(other) ? get_ONE() : get_NEG_ONE();
        } else {
          var rem = subtract(_this__u8e3s4, multiply(other, approx));
          return add(approx, rem.i2(other));
        }
      }
    } else if (equalsLong(other, get_MIN_VALUE())) {
      return get_ZERO();
    }
    if (isNegative(_this__u8e3s4)) {
      var tmp;
      if (isNegative(other)) {
        tmp = negate(_this__u8e3s4).i2(negate(other));
      } else {
        tmp = negate(negate(_this__u8e3s4).i2(other));
      }
      return tmp;
    } else if (isNegative(other)) {
      return negate(_this__u8e3s4.i2(negate(other)));
    }
    var res = get_ZERO();
    var rem_0 = _this__u8e3s4;
    while (greaterThanOrEqual(rem_0, other)) {
      var approxDouble = toNumber(rem_0) / toNumber(other);
      var approx2 = Math.max(1.0, Math.floor(approxDouble));
      var log2 = Math.ceil(Math.log(approx2) / Math.LN2);
      var delta = log2 <= 48.0 ? 1.0 : Math.pow(2.0, log2 - 48);
      var approxRes = fromNumber(approx2);
      var approxRem = multiply(approxRes, other);
      while (isNegative(approxRem) ? true : greaterThan(approxRem, rem_0)) {
        approx2 = approx2 - delta;
        approxRes = fromNumber(approx2);
        approxRem = multiply(approxRes, other);
      }
      if (isZero(approxRes)) {
        approxRes = get_ONE();
      }
      res = add(res, approxRes);
      rem_0 = subtract(rem_0, approxRem);
    }
    return res;
  }
  function shiftLeft(_this__u8e3s4, numBits) {
    _init_properties_longJs_kt__elc2w5();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.e2_1 << numBits_0, _this__u8e3s4.f2_1 << numBits_0 | (_this__u8e3s4.e2_1 >>> (32 - numBits_0 | 0) | 0));
      } else {
        return new Long(0, _this__u8e3s4.e2_1 << (numBits_0 - 32 | 0));
      }
    }
  }
  function shiftRight(_this__u8e3s4, numBits) {
    _init_properties_longJs_kt__elc2w5();
    var numBits_0 = numBits & 63;
    if (numBits_0 === 0) {
      return _this__u8e3s4;
    } else {
      if (numBits_0 < 32) {
        return new Long(_this__u8e3s4.e2_1 >>> numBits_0 | 0 | _this__u8e3s4.f2_1 << (32 - numBits_0 | 0), _this__u8e3s4.f2_1 >> numBits_0);
      } else {
        return new Long(_this__u8e3s4.f2_1 >> (numBits_0 - 32 | 0), _this__u8e3s4.f2_1 >= 0 ? 0 : -1);
      }
    }
  }
  function toNumber(_this__u8e3s4) {
    _init_properties_longJs_kt__elc2w5();
    return _this__u8e3s4.f2_1 * 4.294967296E9 + getLowBitsUnsigned(_this__u8e3s4);
  }
  function toStringImpl(_this__u8e3s4, radix) {
    _init_properties_longJs_kt__elc2w5();
    if (radix < 2 ? true : 36 < radix) {
      throw Exception_init_$Create$_0('radix out of range: ' + radix);
    }
    if (isZero(_this__u8e3s4)) {
      return '0';
    }
    if (isNegative(_this__u8e3s4)) {
      if (equalsLong(_this__u8e3s4, get_MIN_VALUE())) {
        var radixLong = fromInt(radix);
        var div = _this__u8e3s4.i2(radixLong);
        var rem = subtract(multiply(div, radixLong), _this__u8e3s4).l2();
        var tmp = toStringImpl(div, radix);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        return tmp + rem.toString(radix);
      } else {
        return '-' + toStringImpl(negate(_this__u8e3s4), radix);
      }
    }
    var digitsPerTime = radix === 2 ? 31 : radix <= 10 ? 9 : radix <= 21 ? 7 : radix <= 35 ? 6 : 5;
    var radixToPower = fromNumber(Math.pow(radix, digitsPerTime));
    var rem_0 = _this__u8e3s4;
    var result = '';
    while (true) {
      var remDiv = rem_0.i2(radixToPower);
      var intval = subtract(rem_0, multiply(remDiv, radixToPower)).l2();
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var digits = intval.toString(radix);
      rem_0 = remDiv;
      if (isZero(rem_0)) {
        return digits + result;
      } else {
        while (digits.length < digitsPerTime) {
          digits = '0' + digits;
        }
        result = digits + result;
      }
    }
  }
  function equalsLong(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    return _this__u8e3s4.f2_1 === other.f2_1 ? _this__u8e3s4.e2_1 === other.e2_1 : false;
  }
  function hashCode_0(l) {
    _init_properties_longJs_kt__elc2w5();
    return l.e2_1 ^ l.f2_1;
  }
  function fromInt(value) {
    _init_properties_longJs_kt__elc2w5();
    return new Long(value, value < 0 ? -1 : 0);
  }
  function isNegative(_this__u8e3s4) {
    _init_properties_longJs_kt__elc2w5();
    return _this__u8e3s4.f2_1 < 0;
  }
  function isZero(_this__u8e3s4) {
    _init_properties_longJs_kt__elc2w5();
    return _this__u8e3s4.f2_1 === 0 ? _this__u8e3s4.e2_1 === 0 : false;
  }
  function isOdd(_this__u8e3s4) {
    _init_properties_longJs_kt__elc2w5();
    return (_this__u8e3s4.e2_1 & 1) === 1;
  }
  function negate(_this__u8e3s4) {
    _init_properties_longJs_kt__elc2w5();
    return _this__u8e3s4.j2();
  }
  function lessThan(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    return compare(_this__u8e3s4, other) < 0;
  }
  function fromNumber(value) {
    _init_properties_longJs_kt__elc2w5();
    if (isNaN_0(value)) {
      return get_ZERO();
    } else if (value <= -9.223372036854776E18) {
      return get_MIN_VALUE();
    } else if (value + 1 >= 9.223372036854776E18) {
      return get_MAX_VALUE();
    } else if (value < 0.0) {
      return negate(fromNumber(-value));
    } else {
      var twoPwr32 = 4.294967296E9;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      var tmp = value % twoPwr32 | 0;
      // Inline function 'kotlin.js.jsBitwiseOr' call
      var tmp$ret$1 = value / twoPwr32 | 0;
      return new Long(tmp, tmp$ret$1);
    }
  }
  function greaterThan(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    return compare(_this__u8e3s4, other) > 0;
  }
  function greaterThanOrEqual(_this__u8e3s4, other) {
    _init_properties_longJs_kt__elc2w5();
    return compare(_this__u8e3s4, other) >= 0;
  }
  function getLowBitsUnsigned(_this__u8e3s4) {
    _init_properties_longJs_kt__elc2w5();
    return _this__u8e3s4.e2_1 >= 0 ? _this__u8e3s4.e2_1 : 4.294967296E9 + _this__u8e3s4.e2_1;
  }
  var properties_initialized_longJs_kt_4syf89;
  function _init_properties_longJs_kt__elc2w5() {
    if (!properties_initialized_longJs_kt_4syf89) {
      properties_initialized_longJs_kt_4syf89 = true;
      ZERO = fromInt(0);
      ONE = fromInt(1);
      NEG_ONE = fromInt(-1);
      MAX_VALUE = new Long(-1, 2147483647);
      MIN_VALUE = new Long(0, -2147483648);
      TWO_PWR_24_ = fromInt(16777216);
    }
  }
  function createMetadata(kind, name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
    var undef = VOID;
    var iid = kind === 'interface' ? generateInterfaceId() : VOID;
    return {kind: kind, simpleName: name, associatedObjectKey: associatedObjectKey, associatedObjects: associatedObjects, suspendArity: suspendArity, $kClass$: undef, defaultConstructor: defaultConstructor, iid: iid};
  }
  function generateInterfaceId() {
    if (globalInterfaceId === VOID) {
      globalInterfaceId = 0;
    }
    // Inline function 'kotlin.js.unsafeCast' call
    globalInterfaceId = globalInterfaceId + 1 | 0;
    // Inline function 'kotlin.js.unsafeCast' call
    return globalInterfaceId;
  }
  var globalInterfaceId;
  function initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
    if (!(parent == null)) {
      ctor.prototype = Object.create(parent.prototype);
      ctor.prototype.constructor = ctor;
    }
    var metadata = createMetadata(kind, name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity);
    ctor.$metadata$ = metadata;
    if (!(interfaces == null)) {
      var receiver = !equals(metadata.iid, VOID) ? ctor : ctor.prototype;
      receiver.$imask$ = implement(interfaces);
    }
  }
  function initMetadataForClass(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
    var kind = 'class';
    initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
  }
  function initMetadataForObject(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
    var kind = 'object';
    initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
  }
  function initMetadataForInterface(ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects) {
    var kind = 'interface';
    initMetadataFor(kind, ctor, name, defaultConstructor, parent, interfaces, suspendArity, associatedObjectKey, associatedObjects);
  }
  function initMetadataForLambda(ctor, parent, interfaces, suspendArity) {
    initMetadataForClass(ctor, 'Lambda', VOID, parent, interfaces, suspendArity, VOID, VOID);
  }
  function initMetadataForCoroutine(ctor, parent, interfaces, suspendArity) {
    initMetadataForClass(ctor, 'Coroutine', VOID, parent, interfaces, suspendArity, VOID, VOID);
  }
  function initMetadataForFunctionReference(ctor, parent, interfaces, suspendArity) {
    initMetadataForClass(ctor, 'FunctionReference', VOID, parent, interfaces, suspendArity, VOID, VOID);
  }
  function initMetadataForCompanion(ctor, parent, interfaces, suspendArity) {
    initMetadataForObject(ctor, 'Companion', VOID, parent, interfaces, suspendArity, VOID, VOID);
  }
  function classMeta(name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity) {
    return createMetadata('class', name, defaultConstructor, associatedObjectKey, associatedObjects, suspendArity);
  }
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.l2();
    } else {
      tmp = doubleToInt(a);
    }
    return tmp;
  }
  function doubleToInt(a) {
    var tmp;
    if (a > 2.147483647E9) {
      tmp = 2147483647;
    } else if (a < -2.147483648E9) {
      tmp = -2147483648;
    } else {
      // Inline function 'kotlin.js.jsBitwiseOr' call
      tmp = a | 0;
    }
    return tmp;
  }
  function toShort(a) {
    // Inline function 'kotlin.js.unsafeCast' call
    return a << 16 >> 16;
  }
  function numberToChar(a) {
    // Inline function 'kotlin.toUShort' call
    var this_0 = numberToInt(a);
    var tmp$ret$0 = _UShort___init__impl__jigrne(toShort(this_0));
    return _Char___init__impl__6a9atx_0(tmp$ret$0);
  }
  function toLong(a) {
    return fromInt(a);
  }
  function numberRangeToNumber(start, endInclusive) {
    return new IntRange(start, endInclusive);
  }
  function get_propertyRefClassMetadataCache() {
    _init_properties_reflectRuntime_kt__5r4uu3();
    return propertyRefClassMetadataCache;
  }
  var propertyRefClassMetadataCache;
  function metadataObject() {
    _init_properties_reflectRuntime_kt__5r4uu3();
    return classMeta(VOID, VOID, VOID, VOID, VOID);
  }
  function getPropertyCallableRef(name, paramCount, superType, getter, setter) {
    _init_properties_reflectRuntime_kt__5r4uu3();
    getter.get = getter;
    getter.set = setter;
    getter.callableName = name;
    // Inline function 'kotlin.js.unsafeCast' call
    return getPropertyRefClass(getter, getKPropMetadata(paramCount, setter), getInterfaceMaskFor(getter, superType));
  }
  function getPropertyRefClass(obj, metadata, imask) {
    _init_properties_reflectRuntime_kt__5r4uu3();
    obj.$metadata$ = metadata;
    obj.constructor = obj;
    obj.$imask$ = imask;
    return obj;
  }
  function getKPropMetadata(paramCount, setter) {
    _init_properties_reflectRuntime_kt__5r4uu3();
    return get_propertyRefClassMetadataCache()[paramCount][setter == null ? 0 : 1];
  }
  function getInterfaceMaskFor(obj, superType) {
    _init_properties_reflectRuntime_kt__5r4uu3();
    var tmp0_elvis_lhs = obj.$imask$;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = [superType];
      tmp = implement(tmp$ret$2);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  var properties_initialized_reflectRuntime_kt_inkhwd;
  function _init_properties_reflectRuntime_kt__5r4uu3() {
    if (!properties_initialized_reflectRuntime_kt_inkhwd) {
      properties_initialized_reflectRuntime_kt_inkhwd = true;
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = [metadataObject(), metadataObject()];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = [metadataObject(), metadataObject()];
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      propertyRefClassMetadataCache = [tmp, tmp_0, [metadataObject(), metadataObject()]];
    }
  }
  function isArrayish(o) {
    return isJsArray(o) ? true : isView(o);
  }
  function isJsArray(obj) {
    // Inline function 'kotlin.js.unsafeCast' call
    return Array.isArray(obj);
  }
  function isInterface(obj, iface) {
    return isInterfaceImpl(obj, iface.$metadata$.iid);
  }
  function isInterfaceImpl(obj, iface) {
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp0_elvis_lhs = obj.$imask$;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var mask = tmp;
    return isBitSet(mask, iface);
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = !obj.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isComparable(value) {
    var type = typeof value;
    return ((type === 'string' ? true : type === 'boolean') ? true : isNumber(value)) ? true : isInterface(value, Comparable);
  }
  function isCharSequence(value) {
    return typeof value === 'string' ? true : isInterface(value, CharSequence);
  }
  function isBooleanArray(a) {
    return isJsArray(a) ? a.$type$ === 'BooleanArray' : false;
  }
  function isByteArray(a) {
    // Inline function 'kotlin.js.jsInstanceOf' call
    return a instanceof Int8Array;
  }
  function isShortArray(a) {
    // Inline function 'kotlin.js.jsInstanceOf' call
    return a instanceof Int16Array;
  }
  function isCharArray(a) {
    var tmp;
    // Inline function 'kotlin.js.jsInstanceOf' call
    if (a instanceof Uint16Array) {
      tmp = a.$type$ === 'CharArray';
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isIntArray(a) {
    // Inline function 'kotlin.js.jsInstanceOf' call
    return a instanceof Int32Array;
  }
  function isFloatArray(a) {
    // Inline function 'kotlin.js.jsInstanceOf' call
    return a instanceof Float32Array;
  }
  function isLongArray(a) {
    return isJsArray(a) ? a.$type$ === 'LongArray' : false;
  }
  function isDoubleArray(a) {
    // Inline function 'kotlin.js.jsInstanceOf' call
    return a instanceof Float64Array;
  }
  function jsIsType(obj, jsClass) {
    if (jsClass === Object) {
      return obj != null;
    }
    var objType = typeof obj;
    var jsClassType = typeof jsClass;
    if ((obj == null ? true : jsClass == null) ? true : !(objType === 'object') ? !(objType === 'function') : false) {
      return false;
    }
    var constructor = jsClassType === 'object' ? jsGetPrototypeOf(jsClass) : jsClass;
    var klassMetadata = constructor.$metadata$;
    if ((klassMetadata == null ? null : klassMetadata.kind) === 'interface') {
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp1_elvis_lhs = klassMetadata.iid;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        return false;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var iid = tmp;
      return isInterfaceImpl(obj, iid);
    }
    // Inline function 'kotlin.js.jsInstanceOf' call
    return obj instanceof constructor;
  }
  function jsGetPrototypeOf(jsClass) {
    return Object.getPrototypeOf(jsClass);
  }
  function calculateErrorInfo(proto) {
    var tmp0_safe_receiver = proto.constructor;
    var metadata = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.$metadata$;
    var tmp2_safe_receiver = metadata == null ? null : metadata.errorInfo;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp2_safe_receiver;
    }
    var result = 0;
    if (hasProp(proto, 'message'))
      result = result | 1;
    if (hasProp(proto, 'cause'))
      result = result | 2;
    if (!(result === 3)) {
      var parentProto = getPrototypeOf(proto);
      if (parentProto != Error.prototype) {
        result = result | calculateErrorInfo(parentProto);
      }
    }
    if (!(metadata == null)) {
      metadata.errorInfo = result;
    }
    return result;
  }
  function hasProp(proto, propName) {
    return proto.hasOwnProperty(propName);
  }
  function getPrototypeOf(obj) {
    return Object.getPrototypeOf(obj);
  }
  function get_VOID() {
    _init_properties_void_kt__3zg9as();
    return VOID;
  }
  var VOID;
  var properties_initialized_void_kt_e4ret2;
  function _init_properties_void_kt__3zg9as() {
    if (!properties_initialized_void_kt_e4ret2) {
      properties_initialized_void_kt_e4ret2 = true;
      VOID = void 0;
    }
  }
  function fill(_this__u8e3s4, element, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? _this__u8e3s4.length : toIndex;
    Companion_instance_5.q2(fromIndex, toIndex, _this__u8e3s4.length);
    // Inline function 'kotlin.js.nativeFill' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.fill(element, fromIndex, toIndex);
  }
  function contentEquals(_this__u8e3s4, other) {
    return contentEqualsInternal(_this__u8e3s4, other);
  }
  function asList(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return new ArrayList(_this__u8e3s4);
  }
  function copyOf(_this__u8e3s4, newSize) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(newSize >= 0)) {
      // Inline function 'kotlin.collections.copyOf.<anonymous>' call
      var message = 'Invalid new array size: ' + newSize + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    return fillFrom(_this__u8e3s4, new Int32Array(newSize));
  }
  function sort(_this__u8e3s4) {
    if (_this__u8e3s4.length > 1) {
      sortArray(_this__u8e3s4);
    }
  }
  function sortWith(_this__u8e3s4, comparator) {
    if (_this__u8e3s4.length > 1) {
      sortArrayWith(_this__u8e3s4, comparator);
    }
  }
  function copyOf_0(_this__u8e3s4, newSize) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(newSize >= 0)) {
      // Inline function 'kotlin.collections.copyOf.<anonymous>' call
      var message = 'Invalid new array size: ' + newSize + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    return arrayCopyResize(_this__u8e3s4, newSize, null);
  }
  function fill_0(_this__u8e3s4, element, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? _this__u8e3s4.length : toIndex;
    Companion_instance_5.q2(fromIndex, toIndex, _this__u8e3s4.length);
    // Inline function 'kotlin.js.nativeFill' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.fill(element, fromIndex, toIndex);
  }
  function isWhitespaceImpl(_this__u8e3s4) {
    // Inline function 'kotlin.code' call
    var ch = Char__toInt_impl_vasixd(_this__u8e3s4);
    return (((9 <= ch ? ch <= 13 : false) ? true : 28 <= ch ? ch <= 32 : false) ? true : ch === 160) ? true : ch > 4096 ? (((((ch === 5760 ? true : 8192 <= ch ? ch <= 8202 : false) ? true : ch === 8232) ? true : ch === 8233) ? true : ch === 8239) ? true : ch === 8287) ? true : ch === 12288 : false;
  }
  function Comparator() {
  }
  function isNaN_0(_this__u8e3s4) {
    return !(_this__u8e3s4 === _this__u8e3s4);
  }
  function takeHighestOneBit(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 === 0) {
      tmp = 0;
    } else {
      // Inline function 'kotlin.countLeadingZeroBits' call
      tmp = 1 << (31 - clz32(_this__u8e3s4) | 0);
    }
    return tmp;
  }
  function collectionToArray(collection) {
    return collectionToArrayCommonImpl(collection);
  }
  function terminateCollectionToArray(collectionSize, array) {
    return array;
  }
  function listOf(element) {
    return arrayListOf([element]);
  }
  function setOf(element) {
    return hashSetOf([element]);
  }
  function shuffled(_this__u8e3s4) {
    // Inline function 'kotlin.apply' call
    var this_0 = toMutableList_1(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.shuffled.<anonymous>' call
    shuffle_0(this_0);
    return this_0;
  }
  function mapCapacity(expectedSize) {
    return expectedSize;
  }
  function mapOf(pair) {
    return hashMapOf([pair]);
  }
  function checkIndexOverflow(index) {
    if (index < 0) {
      throwIndexOverflow();
    }
    return index;
  }
  function sort_0(_this__u8e3s4) {
    collectionsSort(_this__u8e3s4, naturalOrder());
  }
  function sortWith_0(_this__u8e3s4, comparator) {
    collectionsSort(_this__u8e3s4, comparator);
  }
  function copyToArray(collection) {
    var tmp;
    // Inline function 'kotlin.js.asDynamic' call
    if (collection.toArray !== undefined) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = collection.toArray();
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = collectionToArray(collection);
    }
    return tmp;
  }
  function shuffle_0(_this__u8e3s4) {
    return shuffle(_this__u8e3s4, Default_getInstance());
  }
  function collectionsSort(list, comparator) {
    if (list.k() <= 1)
      return Unit_instance;
    var array = copyToArray(list);
    sortArrayWith(array, comparator);
    var inductionVariable = 0;
    var last = array.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        list.t(i, array[i]);
      }
       while (inductionVariable < last);
  }
  function AbstractMutableCollection$removeAll$lambda($elements) {
    return function (it) {
      return $elements.a1(it);
    };
  }
  function AbstractMutableCollection$retainAll$lambda($elements) {
    return function (it) {
      return !$elements.a1(it);
    };
  }
  function AbstractMutableCollection() {
    AbstractCollection.call(this);
  }
  protoOf(AbstractMutableCollection).r2 = function (element) {
    this.s2();
    var iterator = this.h();
    while (iterator.i()) {
      if (equals(iterator.j(), element)) {
        iterator.t2();
        return true;
      }
    }
    return false;
  };
  protoOf(AbstractMutableCollection).q = function (elements) {
    this.s2();
    var modified = false;
    var tmp0_iterator = elements.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      if (this.e(element))
        modified = true;
    }
    return modified;
  };
  protoOf(AbstractMutableCollection).b1 = function (elements) {
    this.s2();
    var tmp = isInterface(this, MutableIterable) ? this : THROW_CCE();
    return removeAll(tmp, AbstractMutableCollection$removeAll$lambda(elements));
  };
  protoOf(AbstractMutableCollection).u2 = function (elements) {
    this.s2();
    var tmp = isInterface(this, MutableIterable) ? this : THROW_CCE();
    return removeAll(tmp, AbstractMutableCollection$retainAll$lambda(elements));
  };
  protoOf(AbstractMutableCollection).toJSON = function () {
    return this.toArray();
  };
  protoOf(AbstractMutableCollection).s2 = function () {
  };
  function IteratorImpl($outer) {
    this.x2_1 = $outer;
    this.v2_1 = 0;
    this.w2_1 = -1;
  }
  protoOf(IteratorImpl).i = function () {
    return this.v2_1 < this.x2_1.k();
  };
  protoOf(IteratorImpl).j = function () {
    if (!this.i())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp1 = this.v2_1;
    this.v2_1 = tmp1 + 1 | 0;
    tmp.w2_1 = tmp1;
    return this.x2_1.m(this.w2_1);
  };
  protoOf(IteratorImpl).t2 = function () {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.w2_1 === -1)) {
      // Inline function 'kotlin.collections.IteratorImpl.remove.<anonymous>' call
      var message = 'Call next() or previous() before removing element from the iterator.';
      throw IllegalStateException_init_$Create$_0(toString_1(message));
    }
    this.x2_1.z2(this.w2_1);
    this.v2_1 = this.w2_1;
    this.w2_1 = -1;
  };
  function ListIteratorImpl($outer, index) {
    this.d3_1 = $outer;
    IteratorImpl.call(this, $outer);
    Companion_instance_5.e3(index, this.d3_1.k());
    this.v2_1 = index;
  }
  protoOf(ListIteratorImpl).f3 = function () {
    return this.v2_1 > 0;
  };
  protoOf(ListIteratorImpl).g3 = function () {
    if (!this.f3())
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    this.v2_1 = this.v2_1 - 1 | 0;
    tmp.w2_1 = this.v2_1;
    return this.d3_1.m(this.w2_1);
  };
  function SubList(list, fromIndex, toIndex) {
    AbstractMutableList.call(this);
    this.i3_1 = list;
    this.j3_1 = fromIndex;
    this.k3_1 = 0;
    Companion_instance_5.q2(this.j3_1, toIndex, this.i3_1.k());
    this.k3_1 = toIndex - this.j3_1 | 0;
  }
  protoOf(SubList).l3 = function (index, element) {
    Companion_instance_5.e3(index, this.k3_1);
    this.i3_1.l3(this.j3_1 + index | 0, element);
    this.k3_1 = this.k3_1 + 1 | 0;
  };
  protoOf(SubList).m = function (index) {
    Companion_instance_5.m3(index, this.k3_1);
    return this.i3_1.m(this.j3_1 + index | 0);
  };
  protoOf(SubList).z2 = function (index) {
    Companion_instance_5.m3(index, this.k3_1);
    var result = this.i3_1.z2(this.j3_1 + index | 0);
    this.k3_1 = this.k3_1 - 1 | 0;
    return result;
  };
  protoOf(SubList).t = function (index, element) {
    Companion_instance_5.m3(index, this.k3_1);
    return this.i3_1.t(this.j3_1 + index | 0, element);
  };
  protoOf(SubList).k = function () {
    return this.k3_1;
  };
  protoOf(SubList).s2 = function () {
    return this.i3_1.s2();
  };
  function AbstractMutableList$retainAll$lambda($elements) {
    return function (it) {
      return !$elements.a1(it);
    };
  }
  function AbstractMutableList() {
    AbstractMutableCollection.call(this);
    this.y2_1 = 0;
  }
  protoOf(AbstractMutableList).e = function (element) {
    this.s2();
    this.l3(this.k(), element);
    return true;
  };
  protoOf(AbstractMutableList).u2 = function (elements) {
    this.s2();
    return removeAll_0(this, AbstractMutableList$retainAll$lambda(elements));
  };
  protoOf(AbstractMutableList).h = function () {
    return new IteratorImpl(this);
  };
  protoOf(AbstractMutableList).a1 = function (element) {
    return this.n3(element) >= 0;
  };
  protoOf(AbstractMutableList).n3 = function (element) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var index = 0;
      var tmp0_iterator = this.h();
      while (tmp0_iterator.i()) {
        var item = tmp0_iterator.j();
        // Inline function 'kotlin.collections.AbstractMutableList.indexOf.<anonymous>' call
        if (equals(item, element)) {
          tmp$ret$1 = index;
          break $l$block;
        }
        index = index + 1 | 0;
      }
      tmp$ret$1 = -1;
    }
    return tmp$ret$1;
  };
  protoOf(AbstractMutableList).r = function (index) {
    return new ListIteratorImpl(this, index);
  };
  protoOf(AbstractMutableList).p1 = function (fromIndex, toIndex) {
    return new SubList(this, fromIndex, toIndex);
  };
  protoOf(AbstractMutableList).equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    return Companion_instance_5.o3(this, other);
  };
  protoOf(AbstractMutableList).hashCode = function () {
    return Companion_instance_5.p3(this);
  };
  function AbstractMutableMap() {
    AbstractMap.call(this);
    this.s3_1 = null;
    this.t3_1 = null;
  }
  protoOf(AbstractMutableMap).u3 = function () {
    return new HashMapValuesDefault(this);
  };
  protoOf(AbstractMutableMap).v1 = function () {
    var tmp0_elvis_lhs = this.t3_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = this.u3();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.collections.AbstractMutableMap.<get-values>.<anonymous>' call
      this.t3_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(AbstractMutableMap).s2 = function () {
  };
  function AbstractMutableSet() {
    AbstractMutableCollection.call(this);
  }
  protoOf(AbstractMutableSet).equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Set) : false))
      return false;
    return Companion_instance_7.z3(this, other);
  };
  protoOf(AbstractMutableSet).hashCode = function () {
    return Companion_instance_7.a4(this);
  };
  function arrayOfUninitializedElements(capacity) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(capacity >= 0)) {
      // Inline function 'kotlin.collections.arrayOfUninitializedElements.<anonymous>' call
      var message = 'capacity must be non-negative.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.js.asDynamic' call
    return fillArrayVal(Array(capacity), null);
  }
  function resetAt(_this__u8e3s4, index) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4[index] = null;
  }
  function resetRange(_this__u8e3s4, fromIndex, toIndex) {
    // Inline function 'kotlin.js.nativeFill' call
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.fill(null, fromIndex, toIndex);
  }
  function copyOfUninitializedElements(_this__u8e3s4, newSize) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return copyOf_0(_this__u8e3s4, newSize);
  }
  function Companion_2() {
    Companion_instance_2 = this;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = ArrayList_init_$Create$_0(0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.Companion.Empty.<anonymous>' call
    this_0.p_1 = true;
    tmp.b4_1 = this_0;
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function ArrayList_init_$Init$($this) {
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$() {
    return ArrayList_init_$Init$(objectCreate(protoOf(ArrayList)));
  }
  function ArrayList_init_$Init$_0(initialCapacity, $this) {
    // Inline function 'kotlin.emptyArray' call
    var tmp$ret$0 = [];
    ArrayList.call($this, tmp$ret$0);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      // Inline function 'kotlin.collections.ArrayList.<init>.<anonymous>' call
      var message = 'Negative initial capacity: ' + initialCapacity;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    return $this;
  }
  function ArrayList_init_$Create$_0(initialCapacity) {
    return ArrayList_init_$Init$_0(initialCapacity, objectCreate(protoOf(ArrayList)));
  }
  function ArrayList_init_$Init$_1(elements, $this) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(elements);
    ArrayList.call($this, tmp$ret$0);
    return $this;
  }
  function ArrayList_init_$Create$_1(elements) {
    return ArrayList_init_$Init$_1(elements, objectCreate(protoOf(ArrayList)));
  }
  function increaseLength($this, amount) {
    var previous = $this.k();
    // Inline function 'kotlin.js.asDynamic' call
    $this.o_1.length = $this.k() + amount | 0;
    return previous;
  }
  function rangeCheck($this, index) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.ArrayList.rangeCheck.<anonymous>' call
    Companion_instance_5.m3(index, $this.k());
    return index;
  }
  function insertionRangeCheck($this, index) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.ArrayList.insertionRangeCheck.<anonymous>' call
    Companion_instance_5.e3(index, $this.k());
    return index;
  }
  function ArrayList(array) {
    Companion_getInstance_2();
    AbstractMutableList.call(this);
    this.o_1 = array;
    this.p_1 = false;
  }
  protoOf(ArrayList).k = function () {
    return this.o_1.length;
  };
  protoOf(ArrayList).m = function (index) {
    var tmp = this.o_1[rangeCheck(this, index)];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ArrayList).t = function (index, element) {
    this.s2();
    rangeCheck(this, index);
    // Inline function 'kotlin.apply' call
    var this_0 = this.o_1[index];
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.ArrayList.set.<anonymous>' call
    this.o_1[index] = element;
    var tmp = this_0;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(ArrayList).e = function (element) {
    this.s2();
    // Inline function 'kotlin.js.asDynamic' call
    this.o_1.push(element);
    this.y2_1 = this.y2_1 + 1 | 0;
    return true;
  };
  protoOf(ArrayList).l3 = function (index, element) {
    this.s2();
    // Inline function 'kotlin.js.asDynamic' call
    this.o_1.splice(insertionRangeCheck(this, index), 0, element);
    this.y2_1 = this.y2_1 + 1 | 0;
  };
  protoOf(ArrayList).q = function (elements) {
    this.s2();
    if (elements.l())
      return false;
    var offset = increaseLength(this, elements.k());
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = elements.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'kotlin.collections.ArrayList.addAll.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      this.o_1[offset + index_0 | 0] = item;
    }
    this.y2_1 = this.y2_1 + 1 | 0;
    return true;
  };
  protoOf(ArrayList).z2 = function (index) {
    this.s2();
    rangeCheck(this, index);
    this.y2_1 = this.y2_1 + 1 | 0;
    var tmp;
    if (index === get_lastIndex_0(this)) {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = this.o_1.pop();
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = this.o_1.splice(index, 1)[0];
    }
    return tmp;
  };
  protoOf(ArrayList).c4 = function () {
    this.s2();
    var tmp = this;
    // Inline function 'kotlin.emptyArray' call
    tmp.o_1 = [];
    this.y2_1 = this.y2_1 + 1 | 0;
  };
  protoOf(ArrayList).n3 = function (element) {
    return indexOf(this.o_1, element);
  };
  protoOf(ArrayList).toString = function () {
    return arrayToString(this.o_1);
  };
  protoOf(ArrayList).d4 = function () {
    return [].slice.call(this.o_1);
  };
  protoOf(ArrayList).toArray = function () {
    return this.d4();
  };
  protoOf(ArrayList).s2 = function () {
    if (this.p_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  var _stableSortingIsSupported;
  function sortArray(array) {
    if (getStableSortingIsSupported()) {
      var comparison = sortArray$lambda;
      // Inline function 'kotlin.js.asDynamic' call
      array.sort(comparison);
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      mergeSort(array, 0, get_lastIndex(array), naturalOrder());
    }
  }
  function sortArrayWith(array, comparator) {
    if (getStableSortingIsSupported()) {
      var comparison = sortArrayWith$lambda(comparator);
      // Inline function 'kotlin.js.asDynamic' call
      array.sort(comparison);
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      mergeSort(array, 0, get_lastIndex(array), comparator);
    }
  }
  function getStableSortingIsSupported() {
    var tmp0_safe_receiver = _stableSortingIsSupported;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      return tmp0_safe_receiver;
    }
    _stableSortingIsSupported = false;
    // Inline function 'kotlin.js.unsafeCast' call
    var array = [];
    var inductionVariable = 0;
    if (inductionVariable < 600)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        array.push(index);
      }
       while (inductionVariable < 600);
    var comparison = getStableSortingIsSupported$lambda;
    // Inline function 'kotlin.js.asDynamic' call
    array.sort(comparison);
    var inductionVariable_0 = 1;
    var last = array.length;
    if (inductionVariable_0 < last)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var a = array[index_0 - 1 | 0];
        var b = array[index_0];
        if ((a & 3) === (b & 3) ? a >= b : false)
          return false;
      }
       while (inductionVariable_0 < last);
    _stableSortingIsSupported = true;
    return true;
  }
  function mergeSort(array, start, endInclusive, comparator) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.arrayOfNulls' call
    var size = array.length;
    // Inline function 'kotlin.js.asDynamic' call
    var buffer = fillArrayVal(Array(size), null);
    var result = mergeSort_0(array, buffer, start, endInclusive, comparator);
    if (!(result === array)) {
      var inductionVariable = start;
      if (inductionVariable <= endInclusive)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          array[i] = result[i];
        }
         while (!(i === endInclusive));
    }
  }
  function mergeSort_0(array, buffer, start, end, comparator) {
    if (start === end) {
      return array;
    }
    var median = (start + end | 0) / 2 | 0;
    var left = mergeSort_0(array, buffer, start, median, comparator);
    var right = mergeSort_0(array, buffer, median + 1 | 0, end, comparator);
    var target = left === buffer ? array : buffer;
    var leftIndex = start;
    var rightIndex = median + 1 | 0;
    var inductionVariable = start;
    if (inductionVariable <= end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (leftIndex <= median ? rightIndex <= end : false) {
          var leftValue = left[leftIndex];
          var rightValue = right[rightIndex];
          if (comparator.compare(leftValue, rightValue) <= 0) {
            target[i] = leftValue;
            leftIndex = leftIndex + 1 | 0;
          } else {
            target[i] = rightValue;
            rightIndex = rightIndex + 1 | 0;
          }
        } else if (leftIndex <= median) {
          target[i] = left[leftIndex];
          leftIndex = leftIndex + 1 | 0;
        } else {
          target[i] = right[rightIndex];
          rightIndex = rightIndex + 1 | 0;
        }
      }
       while (!(i === end));
    return target;
  }
  function sortArray$lambda(a, b) {
    return compareTo(a, b);
  }
  function sortArrayWith$lambda($comparator) {
    return function (a, b) {
      return $comparator.compare(a, b);
    };
  }
  function getStableSortingIsSupported$lambda(a, b) {
    return (a & 3) - (b & 3) | 0;
  }
  function HashMap_init_$Init$(internalMap, $this) {
    AbstractMutableMap.call($this);
    HashMap.call($this);
    $this.i4_1 = internalMap;
    return $this;
  }
  function HashMap_init_$Init$_0($this) {
    HashMap_init_$Init$(InternalHashMap_init_$Create$(), $this);
    return $this;
  }
  function HashMap_init_$Create$() {
    return HashMap_init_$Init$_0(objectCreate(protoOf(HashMap)));
  }
  function HashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$(InternalHashMap_init_$Create$_2(initialCapacity, loadFactor), $this);
    return $this;
  }
  function HashMap_init_$Init$_2(initialCapacity, $this) {
    HashMap_init_$Init$_1(initialCapacity, 1.0, $this);
    return $this;
  }
  function HashMap_init_$Create$_0(initialCapacity) {
    return HashMap_init_$Init$_2(initialCapacity, objectCreate(protoOf(HashMap)));
  }
  function HashMap_init_$Init$_3(original, $this) {
    HashMap_init_$Init$(InternalHashMap_init_$Create$_1(original), $this);
    return $this;
  }
  protoOf(HashMap).s1 = function (key) {
    return this.i4_1.k4(key);
  };
  protoOf(HashMap).t1 = function (value) {
    return this.i4_1.t1(value);
  };
  protoOf(HashMap).u3 = function () {
    return new HashMapValues(this.i4_1);
  };
  protoOf(HashMap).w1 = function () {
    var tmp0_elvis_lhs = this.j4_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new HashMapEntrySet(this.i4_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.collections.HashMap.<get-entries>.<anonymous>' call
      this.j4_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(HashMap).u1 = function (key) {
    return this.i4_1.u1(key);
  };
  protoOf(HashMap).v3 = function (key, value) {
    return this.i4_1.v3(key, value);
  };
  protoOf(HashMap).l4 = function (key) {
    return this.i4_1.l4(key);
  };
  protoOf(HashMap).k = function () {
    return this.i4_1.k();
  };
  protoOf(HashMap).m4 = function (from) {
    return this.i4_1.m4(from);
  };
  function HashMap() {
    this.j4_1 = null;
  }
  function HashMapValues(backing) {
    AbstractMutableCollection.call(this);
    this.n4_1 = backing;
  }
  protoOf(HashMapValues).k = function () {
    return this.n4_1.k();
  };
  protoOf(HashMapValues).l = function () {
    return this.n4_1.k() === 0;
  };
  protoOf(HashMapValues).o4 = function (element) {
    return this.n4_1.t1(element);
  };
  protoOf(HashMapValues).a1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.o4((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(HashMapValues).p4 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(HashMapValues).e = function (element) {
    return this.p4((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(HashMapValues).q4 = function (elements) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(HashMapValues).q = function (elements) {
    return this.q4(elements);
  };
  protoOf(HashMapValues).h = function () {
    return this.n4_1.r4();
  };
  protoOf(HashMapValues).s2 = function () {
    return this.n4_1.s4();
  };
  function HashMapEntrySet(backing) {
    HashMapEntrySetBase.call(this, backing);
  }
  protoOf(HashMapEntrySet).h = function () {
    return this.u4_1.v4();
  };
  function HashMapEntrySetBase(backing) {
    AbstractMutableSet.call(this);
    this.u4_1 = backing;
  }
  protoOf(HashMapEntrySetBase).k = function () {
    return this.u4_1.k();
  };
  protoOf(HashMapEntrySetBase).l = function () {
    return this.u4_1.k() === 0;
  };
  protoOf(HashMapEntrySetBase).w4 = function (element) {
    return this.u4_1.z4(element);
  };
  protoOf(HashMapEntrySetBase).a1 = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.w4((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(HashMapEntrySetBase).x4 = function (element) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(HashMapEntrySetBase).e = function (element) {
    return this.x4((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(HashMapEntrySetBase).q = function (elements) {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(HashMapEntrySetBase).y4 = function (element) {
    return this.u4_1.a5(element);
  };
  protoOf(HashMapEntrySetBase).r2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.y4((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  protoOf(HashMapEntrySetBase).o1 = function (elements) {
    return this.u4_1.b5(elements);
  };
  protoOf(HashMapEntrySetBase).s2 = function () {
    return this.u4_1.s4();
  };
  function HashMapValuesDefault$iterator$1($entryIterator) {
    this.c5_1 = $entryIterator;
  }
  protoOf(HashMapValuesDefault$iterator$1).i = function () {
    return this.c5_1.i();
  };
  protoOf(HashMapValuesDefault$iterator$1).j = function () {
    return this.c5_1.j().r1();
  };
  protoOf(HashMapValuesDefault$iterator$1).t2 = function () {
    return this.c5_1.t2();
  };
  function HashMapValuesDefault(backingMap) {
    AbstractMutableCollection.call(this);
    this.d5_1 = backingMap;
  }
  protoOf(HashMapValuesDefault).p4 = function (element) {
    throw UnsupportedOperationException_init_$Create$_0('Add is not supported on values');
  };
  protoOf(HashMapValuesDefault).e = function (element) {
    return this.p4((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(HashMapValuesDefault).o4 = function (element) {
    return this.d5_1.t1(element);
  };
  protoOf(HashMapValuesDefault).a1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.o4((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(HashMapValuesDefault).h = function () {
    var entryIterator = this.d5_1.w1().h();
    return new HashMapValuesDefault$iterator$1(entryIterator);
  };
  protoOf(HashMapValuesDefault).k = function () {
    return this.d5_1.k();
  };
  protoOf(HashMapValuesDefault).s2 = function () {
    return this.d5_1.s2();
  };
  function HashSet_init_$Init$(map, $this) {
    AbstractMutableSet.call($this);
    HashSet.call($this);
    $this.x_1 = map;
    return $this;
  }
  function HashSet_init_$Init$_0($this) {
    HashSet_init_$Init$(InternalHashMap_init_$Create$(), $this);
    return $this;
  }
  function HashSet_init_$Create$() {
    return HashSet_init_$Init$_0(objectCreate(protoOf(HashSet)));
  }
  function HashSet_init_$Init$_1(elements, $this) {
    HashSet_init_$Init$(InternalHashMap_init_$Create$_0(elements.k()), $this);
    var tmp0_iterator = elements.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      $this.x_1.v3(element, true);
    }
    return $this;
  }
  function HashSet_init_$Init$_2(initialCapacity, loadFactor, $this) {
    HashSet_init_$Init$(InternalHashMap_init_$Create$_2(initialCapacity, loadFactor), $this);
    return $this;
  }
  function HashSet_init_$Init$_3(initialCapacity, $this) {
    HashSet_init_$Init$_2(initialCapacity, 1.0, $this);
    return $this;
  }
  function HashSet_init_$Create$_0(initialCapacity) {
    return HashSet_init_$Init$_3(initialCapacity, objectCreate(protoOf(HashSet)));
  }
  protoOf(HashSet).e = function (element) {
    return this.x_1.v3(element, true) == null;
  };
  protoOf(HashSet).a1 = function (element) {
    return this.x_1.k4(element);
  };
  protoOf(HashSet).l = function () {
    return this.x_1.k() === 0;
  };
  protoOf(HashSet).h = function () {
    return this.x_1.e5();
  };
  protoOf(HashSet).r2 = function (element) {
    return !(this.x_1.l4(element) == null);
  };
  protoOf(HashSet).k = function () {
    return this.x_1.k();
  };
  function HashSet() {
  }
  function computeHashSize($this, capacity) {
    return takeHighestOneBit(imul(coerceAtLeast(capacity, 1), 3));
  }
  function computeShift($this, hashSize) {
    // Inline function 'kotlin.countLeadingZeroBits' call
    return clz32(hashSize) + 1 | 0;
  }
  function InternalHashMap_init_$Init$($this) {
    InternalHashMap_init_$Init$_0(8, $this);
    return $this;
  }
  function InternalHashMap_init_$Create$() {
    return InternalHashMap_init_$Init$(objectCreate(protoOf(InternalHashMap)));
  }
  function InternalHashMap_init_$Init$_0(initialCapacity, $this) {
    InternalHashMap.call($this, arrayOfUninitializedElements(initialCapacity), null, new Int32Array(initialCapacity), new Int32Array(computeHashSize(Companion_instance_3, initialCapacity)), 2, 0);
    return $this;
  }
  function InternalHashMap_init_$Create$_0(initialCapacity) {
    return InternalHashMap_init_$Init$_0(initialCapacity, objectCreate(protoOf(InternalHashMap)));
  }
  function InternalHashMap_init_$Init$_1(original, $this) {
    InternalHashMap_init_$Init$_0(original.k(), $this);
    $this.m4(original);
    return $this;
  }
  function InternalHashMap_init_$Create$_1(original) {
    return InternalHashMap_init_$Init$_1(original, objectCreate(protoOf(InternalHashMap)));
  }
  function InternalHashMap_init_$Init$_2(initialCapacity, loadFactor, $this) {
    InternalHashMap_init_$Init$_0(initialCapacity, $this);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(loadFactor > 0.0)) {
      // Inline function 'kotlin.collections.InternalHashMap.<init>.<anonymous>' call
      var message = 'Non-positive load factor: ' + loadFactor;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    return $this;
  }
  function InternalHashMap_init_$Create$_2(initialCapacity, loadFactor) {
    return InternalHashMap_init_$Init$_2(initialCapacity, loadFactor, objectCreate(protoOf(InternalHashMap)));
  }
  function _get_capacity__a9k9f3($this) {
    return $this.f5_1.length;
  }
  function _get_hashSize__tftcho($this) {
    return $this.i5_1.length;
  }
  function registerModification($this) {
    $this.m5_1 = $this.m5_1 + 1 | 0;
  }
  function ensureExtraCapacity($this, n) {
    if (shouldCompact($this, n)) {
      rehash($this, _get_hashSize__tftcho($this));
    } else {
      ensureCapacity($this, $this.k5_1 + n | 0);
    }
  }
  function shouldCompact($this, extraCapacity) {
    var spareCapacity = _get_capacity__a9k9f3($this) - $this.k5_1 | 0;
    var gaps = $this.k5_1 - $this.k() | 0;
    return (spareCapacity < extraCapacity ? (gaps + spareCapacity | 0) >= extraCapacity : false) ? gaps >= (_get_capacity__a9k9f3($this) / 4 | 0) : false;
  }
  function ensureCapacity($this, minCapacity) {
    if (minCapacity < 0)
      throw RuntimeException_init_$Create$_0('too many elements');
    if (minCapacity > _get_capacity__a9k9f3($this)) {
      var newSize = Companion_instance_5.p5(_get_capacity__a9k9f3($this), minCapacity);
      $this.f5_1 = copyOfUninitializedElements($this.f5_1, newSize);
      var tmp = $this;
      var tmp0_safe_receiver = $this.g5_1;
      tmp.g5_1 = tmp0_safe_receiver == null ? null : copyOfUninitializedElements(tmp0_safe_receiver, newSize);
      $this.h5_1 = copyOf($this.h5_1, newSize);
      var newHashSize = computeHashSize(Companion_instance_3, newSize);
      if (newHashSize > _get_hashSize__tftcho($this)) {
        rehash($this, newHashSize);
      }
    }
  }
  function allocateValuesArray($this) {
    var curValuesArray = $this.g5_1;
    if (!(curValuesArray == null))
      return curValuesArray;
    var newValuesArray = arrayOfUninitializedElements(_get_capacity__a9k9f3($this));
    $this.g5_1 = newValuesArray;
    return newValuesArray;
  }
  function hash($this, key) {
    return key == null ? 0 : imul(hashCode(key), -1640531527) >>> $this.l5_1 | 0;
  }
  function compact($this) {
    var i = 0;
    var j = 0;
    var valuesArray = $this.g5_1;
    while (i < $this.k5_1) {
      if ($this.h5_1[i] >= 0) {
        $this.f5_1[j] = $this.f5_1[i];
        if (!(valuesArray == null)) {
          valuesArray[j] = valuesArray[i];
        }
        j = j + 1 | 0;
      }
      i = i + 1 | 0;
    }
    resetRange($this.f5_1, j, $this.k5_1);
    if (valuesArray == null)
      null;
    else {
      resetRange(valuesArray, j, $this.k5_1);
    }
    $this.k5_1 = j;
  }
  function rehash($this, newHashSize) {
    registerModification($this);
    if ($this.k5_1 > $this.n5_1) {
      compact($this);
    }
    if (!(newHashSize === _get_hashSize__tftcho($this))) {
      $this.i5_1 = new Int32Array(newHashSize);
      $this.l5_1 = computeShift(Companion_instance_3, newHashSize);
    } else {
      fill($this.i5_1, 0, 0, _get_hashSize__tftcho($this));
    }
    var i = 0;
    while (i < $this.k5_1) {
      var tmp0 = i;
      i = tmp0 + 1 | 0;
      if (!putRehash($this, tmp0)) {
        throw IllegalStateException_init_$Create$_0('This cannot happen with fixed magic multiplier and grow-only hash array. Have object hashCodes changed?');
      }
    }
  }
  function putRehash($this, i) {
    var hash_0 = hash($this, $this.f5_1[i]);
    var probesLeft = $this.j5_1;
    while (true) {
      var index = $this.i5_1[hash_0];
      if (index === 0) {
        $this.i5_1[hash_0] = i + 1 | 0;
        $this.h5_1[i] = hash_0;
        return true;
      }
      probesLeft = probesLeft - 1 | 0;
      if (probesLeft < 0)
        return false;
      var tmp0 = hash_0;
      hash_0 = tmp0 - 1 | 0;
      if (tmp0 === 0)
        hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
    }
  }
  function findKey($this, key) {
    var hash_0 = hash($this, key);
    var probesLeft = $this.j5_1;
    while (true) {
      var index = $this.i5_1[hash_0];
      if (index === 0)
        return -1;
      if (index > 0 ? equals($this.f5_1[index - 1 | 0], key) : false)
        return index - 1 | 0;
      probesLeft = probesLeft - 1 | 0;
      if (probesLeft < 0)
        return -1;
      var tmp0 = hash_0;
      hash_0 = tmp0 - 1 | 0;
      if (tmp0 === 0)
        hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
    }
  }
  function findValue($this, value) {
    var i = $this.k5_1;
    $l$loop: while (true) {
      i = i - 1 | 0;
      if (!(i >= 0)) {
        break $l$loop;
      }
      if ($this.h5_1[i] >= 0 ? equals(ensureNotNull($this.g5_1)[i], value) : false)
        return i;
    }
    return -1;
  }
  function addKey($this, key) {
    $this.s4();
    retry: while (true) {
      var hash_0 = hash($this, key);
      var tentativeMaxProbeDistance = coerceAtMost(imul($this.j5_1, 2), _get_hashSize__tftcho($this) / 2 | 0);
      var probeDistance = 0;
      while (true) {
        var index = $this.i5_1[hash_0];
        if (index <= 0) {
          if ($this.k5_1 >= _get_capacity__a9k9f3($this)) {
            ensureExtraCapacity($this, 1);
            continue retry;
          }
          var tmp1 = $this.k5_1;
          $this.k5_1 = tmp1 + 1 | 0;
          var putIndex = tmp1;
          $this.f5_1[putIndex] = key;
          $this.h5_1[putIndex] = hash_0;
          $this.i5_1[hash_0] = putIndex + 1 | 0;
          $this.n5_1 = $this.n5_1 + 1 | 0;
          registerModification($this);
          if (probeDistance > $this.j5_1)
            $this.j5_1 = probeDistance;
          return putIndex;
        }
        if (equals($this.f5_1[index - 1 | 0], key)) {
          return -index | 0;
        }
        probeDistance = probeDistance + 1 | 0;
        if (probeDistance > tentativeMaxProbeDistance) {
          rehash($this, imul(_get_hashSize__tftcho($this), 2));
          continue retry;
        }
        var tmp4 = hash_0;
        hash_0 = tmp4 - 1 | 0;
        if (tmp4 === 0)
          hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
      }
    }
  }
  function removeKey($this, key) {
    $this.s4();
    var index = findKey($this, key);
    if (index < 0)
      return -1;
    removeKeyAt($this, index);
    return index;
  }
  function removeKeyAt($this, index) {
    resetAt($this.f5_1, index);
    removeHashAt($this, $this.h5_1[index]);
    $this.h5_1[index] = -1;
    $this.n5_1 = $this.n5_1 - 1 | 0;
    registerModification($this);
  }
  function removeHashAt($this, removedHash) {
    var hash_0 = removedHash;
    var hole = removedHash;
    var probeDistance = 0;
    var patchAttemptsLeft = coerceAtMost(imul($this.j5_1, 2), _get_hashSize__tftcho($this) / 2 | 0);
    while (true) {
      var tmp0 = hash_0;
      hash_0 = tmp0 - 1 | 0;
      if (tmp0 === 0)
        hash_0 = _get_hashSize__tftcho($this) - 1 | 0;
      probeDistance = probeDistance + 1 | 0;
      if (probeDistance > $this.j5_1) {
        $this.i5_1[hole] = 0;
        return Unit_instance;
      }
      var index = $this.i5_1[hash_0];
      if (index === 0) {
        $this.i5_1[hole] = 0;
        return Unit_instance;
      }
      if (index < 0) {
        $this.i5_1[hole] = -1;
        hole = hash_0;
        probeDistance = 0;
      } else {
        var otherHash = hash($this, $this.f5_1[index - 1 | 0]);
        if (((otherHash - hash_0 | 0) & (_get_hashSize__tftcho($this) - 1 | 0)) >= probeDistance) {
          $this.i5_1[hole] = index;
          $this.h5_1[index - 1 | 0] = hole;
          hole = hash_0;
          probeDistance = 0;
        }
      }
      patchAttemptsLeft = patchAttemptsLeft - 1 | 0;
      if (patchAttemptsLeft < 0) {
        $this.i5_1[hole] = -1;
        return Unit_instance;
      }
    }
  }
  function contentEquals_0($this, other) {
    return $this.n5_1 === other.k() ? $this.b5(other.w1()) : false;
  }
  function putEntry($this, entry) {
    var index = addKey($this, entry.q1());
    var valuesArray = allocateValuesArray($this);
    if (index >= 0) {
      valuesArray[index] = entry.r1();
      return true;
    }
    var oldValue = valuesArray[(-index | 0) - 1 | 0];
    if (!equals(entry.r1(), oldValue)) {
      valuesArray[(-index | 0) - 1 | 0] = entry.r1();
      return true;
    }
    return false;
  }
  function putAllEntries($this, from) {
    if (from.l())
      return false;
    ensureExtraCapacity($this, from.k());
    var it = from.h();
    var updated = false;
    while (it.i()) {
      if (putEntry($this, it.j()))
        updated = true;
    }
    return updated;
  }
  function Companion_3() {
    this.q5_1 = -1640531527;
    this.r5_1 = 8;
    this.s5_1 = 2;
    this.t5_1 = -1;
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function Itr(map) {
    this.u5_1 = map;
    this.v5_1 = 0;
    this.w5_1 = -1;
    this.x5_1 = this.u5_1.m5_1;
    this.y5();
  }
  protoOf(Itr).y5 = function () {
    while (this.v5_1 < this.u5_1.k5_1 ? this.u5_1.h5_1[this.v5_1] < 0 : false) {
      this.v5_1 = this.v5_1 + 1 | 0;
    }
  };
  protoOf(Itr).i = function () {
    return this.v5_1 < this.u5_1.k5_1;
  };
  protoOf(Itr).t2 = function () {
    this.z5();
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.w5_1 === -1)) {
      // Inline function 'kotlin.collections.Itr.remove.<anonymous>' call
      var message = 'Call next() before removing element from the iterator.';
      throw IllegalStateException_init_$Create$_0(toString_1(message));
    }
    this.u5_1.s4();
    removeKeyAt(this.u5_1, this.w5_1);
    this.w5_1 = -1;
    this.x5_1 = this.u5_1.m5_1;
  };
  protoOf(Itr).z5 = function () {
    if (!(this.u5_1.m5_1 === this.x5_1))
      throw ConcurrentModificationException_init_$Create$();
  };
  function KeysItr(map) {
    Itr.call(this, map);
  }
  protoOf(KeysItr).j = function () {
    this.z5();
    if (this.v5_1 >= this.u5_1.k5_1)
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp1 = this.v5_1;
    this.v5_1 = tmp1 + 1 | 0;
    tmp.w5_1 = tmp1;
    var result = this.u5_1.f5_1[this.w5_1];
    this.y5();
    return result;
  };
  function ValuesItr(map) {
    Itr.call(this, map);
  }
  protoOf(ValuesItr).j = function () {
    this.z5();
    if (this.v5_1 >= this.u5_1.k5_1)
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp1 = this.v5_1;
    this.v5_1 = tmp1 + 1 | 0;
    tmp.w5_1 = tmp1;
    var result = ensureNotNull(this.u5_1.g5_1)[this.w5_1];
    this.y5();
    return result;
  };
  function EntriesItr(map) {
    Itr.call(this, map);
  }
  protoOf(EntriesItr).j = function () {
    this.z5();
    if (this.v5_1 >= this.u5_1.k5_1)
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp1 = this.v5_1;
    this.v5_1 = tmp1 + 1 | 0;
    tmp.w5_1 = tmp1;
    var result = new EntryRef(this.u5_1, this.w5_1);
    this.y5();
    return result;
  };
  protoOf(EntriesItr).m6 = function () {
    if (this.v5_1 >= this.u5_1.k5_1)
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp1 = this.v5_1;
    this.v5_1 = tmp1 + 1 | 0;
    tmp.w5_1 = tmp1;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.u5_1.f5_1[this.w5_1];
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp_0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = ensureNotNull(this.u5_1.g5_1)[this.w5_1];
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var result = tmp_0 ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
    this.y5();
    return result;
  };
  protoOf(EntriesItr).n6 = function (sb) {
    if (this.v5_1 >= this.u5_1.k5_1)
      throw NoSuchElementException_init_$Create$();
    var tmp = this;
    var tmp1 = this.v5_1;
    this.v5_1 = tmp1 + 1 | 0;
    tmp.w5_1 = tmp1;
    var key = this.u5_1.f5_1[this.w5_1];
    if (equals(key, this.u5_1)) {
      sb.q6('(this Map)');
    } else {
      sb.p6(key);
    }
    sb.r6(_Char___init__impl__6a9atx(61));
    var value = ensureNotNull(this.u5_1.g5_1)[this.w5_1];
    if (equals(value, this.u5_1)) {
      sb.q6('(this Map)');
    } else {
      sb.p6(value);
    }
    this.y5();
  };
  function EntryRef(map, index) {
    this.s6_1 = map;
    this.t6_1 = index;
  }
  protoOf(EntryRef).q1 = function () {
    return this.s6_1.f5_1[this.t6_1];
  };
  protoOf(EntryRef).r1 = function () {
    return ensureNotNull(this.s6_1.g5_1)[this.t6_1];
  };
  protoOf(EntryRef).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Entry) : false) {
      tmp_0 = equals(other.q1(), this.q1());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.r1(), this.r1());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EntryRef).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.q1();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.r1();
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0);
  };
  protoOf(EntryRef).toString = function () {
    return '' + this.q1() + '=' + this.r1();
  };
  function InternalHashMap(keysArray, valuesArray, presenceArray, hashArray, maxProbeDistance, length) {
    this.f5_1 = keysArray;
    this.g5_1 = valuesArray;
    this.h5_1 = presenceArray;
    this.i5_1 = hashArray;
    this.j5_1 = maxProbeDistance;
    this.k5_1 = length;
    this.l5_1 = computeShift(Companion_instance_3, _get_hashSize__tftcho(this));
    this.m5_1 = 0;
    this.n5_1 = 0;
    this.o5_1 = false;
  }
  protoOf(InternalHashMap).k = function () {
    return this.n5_1;
  };
  protoOf(InternalHashMap).t1 = function (value) {
    return findValue(this, value) >= 0;
  };
  protoOf(InternalHashMap).u1 = function (key) {
    var index = findKey(this, key);
    if (index < 0)
      return null;
    return ensureNotNull(this.g5_1)[index];
  };
  protoOf(InternalHashMap).k4 = function (key) {
    return findKey(this, key) >= 0;
  };
  protoOf(InternalHashMap).v3 = function (key, value) {
    var index = addKey(this, key);
    var valuesArray = allocateValuesArray(this);
    if (index < 0) {
      var oldValue = valuesArray[(-index | 0) - 1 | 0];
      valuesArray[(-index | 0) - 1 | 0] = value;
      return oldValue;
    } else {
      valuesArray[index] = value;
      return null;
    }
  };
  protoOf(InternalHashMap).m4 = function (from) {
    this.s4();
    putAllEntries(this, from.w1());
  };
  protoOf(InternalHashMap).l4 = function (key) {
    var index = removeKey(this, key);
    if (index < 0)
      return null;
    var valuesArray = ensureNotNull(this.g5_1);
    var oldValue = valuesArray[index];
    resetAt(valuesArray, index);
    return oldValue;
  };
  protoOf(InternalHashMap).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      if (!(other == null) ? isInterface(other, Map_0) : false) {
        tmp_0 = contentEquals_0(this, other);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(InternalHashMap).hashCode = function () {
    var result = 0;
    var it = this.v4();
    while (it.i()) {
      result = result + it.m6() | 0;
    }
    return result;
  };
  protoOf(InternalHashMap).toString = function () {
    var sb = StringBuilder_init_$Create$(2 + imul(this.n5_1, 3) | 0);
    sb.q6('{');
    var i = 0;
    var it = this.v4();
    while (it.i()) {
      if (i > 0) {
        sb.q6(', ');
      }
      it.n6(sb);
      i = i + 1 | 0;
    }
    sb.q6('}');
    return sb.toString();
  };
  protoOf(InternalHashMap).s4 = function () {
    if (this.o5_1)
      throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(InternalHashMap).z4 = function (entry) {
    var index = findKey(this, entry.q1());
    if (index < 0)
      return false;
    return equals(ensureNotNull(this.g5_1)[index], entry.r1());
  };
  protoOf(InternalHashMap).u6 = function (entry) {
    return this.z4(isInterface(entry, Entry) ? entry : THROW_CCE());
  };
  protoOf(InternalHashMap).a5 = function (entry) {
    this.s4();
    var index = findKey(this, entry.q1());
    if (index < 0)
      return false;
    if (!equals(ensureNotNull(this.g5_1)[index], entry.r1()))
      return false;
    removeKeyAt(this, index);
    return true;
  };
  protoOf(InternalHashMap).e5 = function () {
    return new KeysItr(this);
  };
  protoOf(InternalHashMap).r4 = function () {
    return new ValuesItr(this);
  };
  protoOf(InternalHashMap).v4 = function () {
    return new EntriesItr(this);
  };
  function InternalMap() {
  }
  function LinkedHashMap_init_$Init$($this) {
    HashMap_init_$Init$_0($this);
    LinkedHashMap.call($this);
    return $this;
  }
  function LinkedHashMap_init_$Create$() {
    return LinkedHashMap_init_$Init$(objectCreate(protoOf(LinkedHashMap)));
  }
  function LinkedHashMap_init_$Init$_0(initialCapacity, $this) {
    HashMap_init_$Init$_2(initialCapacity, $this);
    LinkedHashMap.call($this);
    return $this;
  }
  function LinkedHashMap_init_$Create$_0(initialCapacity) {
    return LinkedHashMap_init_$Init$_0(initialCapacity, objectCreate(protoOf(LinkedHashMap)));
  }
  function LinkedHashMap_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashMap_init_$Init$_1(initialCapacity, loadFactor, $this);
    LinkedHashMap.call($this);
    return $this;
  }
  function LinkedHashMap_init_$Create$_1(initialCapacity, loadFactor) {
    return LinkedHashMap_init_$Init$_1(initialCapacity, loadFactor, objectCreate(protoOf(LinkedHashMap)));
  }
  function LinkedHashMap_init_$Init$_2(original, $this) {
    HashMap_init_$Init$_3(original, $this);
    LinkedHashMap.call($this);
    return $this;
  }
  function LinkedHashMap_init_$Create$_2(original) {
    return LinkedHashMap_init_$Init$_2(original, objectCreate(protoOf(LinkedHashMap)));
  }
  protoOf(LinkedHashMap).s2 = function () {
    return this.i4_1.s4();
  };
  function LinkedHashMap() {
  }
  function LinkedHashSet_init_$Init$($this) {
    HashSet_init_$Init$_0($this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Create$() {
    return LinkedHashSet_init_$Init$(objectCreate(protoOf(LinkedHashSet)));
  }
  function LinkedHashSet_init_$Init$_0(elements, $this) {
    HashSet_init_$Init$_1(elements, $this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Create$_0(elements) {
    return LinkedHashSet_init_$Init$_0(elements, objectCreate(protoOf(LinkedHashSet)));
  }
  function LinkedHashSet_init_$Init$_1(initialCapacity, loadFactor, $this) {
    HashSet_init_$Init$_2(initialCapacity, loadFactor, $this);
    LinkedHashSet.call($this);
    return $this;
  }
  function LinkedHashSet_init_$Init$_2(initialCapacity, $this) {
    LinkedHashSet_init_$Init$_1(initialCapacity, 1.0, $this);
    return $this;
  }
  function LinkedHashSet_init_$Create$_1(initialCapacity) {
    return LinkedHashSet_init_$Init$_2(initialCapacity, objectCreate(protoOf(LinkedHashSet)));
  }
  protoOf(LinkedHashSet).s2 = function () {
    return this.x_1.s4();
  };
  function LinkedHashSet() {
  }
  function RandomAccess() {
  }
  function get_output() {
    _init_properties_console_kt__rfg7jv();
    return output;
  }
  var output;
  function BaseOutput() {
  }
  protoOf(BaseOutput).c7 = function () {
    this.d7('\n');
  };
  protoOf(BaseOutput).e7 = function (message) {
    this.d7(message);
    this.c7();
  };
  function NodeJsOutput(outputStream) {
    BaseOutput.call(this);
    this.f7_1 = outputStream;
  }
  protoOf(NodeJsOutput).d7 = function (message) {
    // Inline function 'kotlin.io.String' call
    var messageString = String(message);
    this.f7_1.write(messageString);
  };
  function BufferedOutputToConsoleLog() {
    BufferedOutput.call(this);
  }
  protoOf(BufferedOutputToConsoleLog).d7 = function (message) {
    // Inline function 'kotlin.io.String' call
    var s = String(message);
    // Inline function 'kotlin.text.nativeLastIndexOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var i = s.lastIndexOf('\n', 0);
    if (i >= 0) {
      var tmp = this;
      var tmp_0 = this.h7_1;
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.h7_1 = tmp_0 + s.substring(0, i);
      this.i7();
      // Inline function 'kotlin.text.substring' call
      var this_0 = s;
      var startIndex = i + 1 | 0;
      // Inline function 'kotlin.js.asDynamic' call
      s = this_0.substring(startIndex);
    }
    this.h7_1 = this.h7_1 + s;
  };
  protoOf(BufferedOutputToConsoleLog).i7 = function () {
    console.log(this.h7_1);
    this.h7_1 = '';
  };
  function BufferedOutput() {
    BaseOutput.call(this);
    this.h7_1 = '';
  }
  protoOf(BufferedOutput).d7 = function (message) {
    var tmp = this;
    var tmp_0 = this.h7_1;
    // Inline function 'kotlin.io.String' call
    tmp.h7_1 = tmp_0 + String(message);
  };
  function println(message) {
    _init_properties_console_kt__rfg7jv();
    get_output().e7(message);
  }
  var properties_initialized_console_kt_gll9dl;
  function _init_properties_console_kt__rfg7jv() {
    if (!properties_initialized_console_kt_gll9dl) {
      properties_initialized_console_kt_gll9dl = true;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.io.output.<anonymous>' call
      var isNode = typeof process !== 'undefined' && process.versions && !!process.versions.node;
      output = isNode ? new NodeJsOutput(process.stdout) : new BufferedOutputToConsoleLog();
    }
  }
  function releaseIntercepted($this) {
    var intercepted = $this.q7_1;
    if (!(intercepted == null) ? !(intercepted === $this) : false) {
      ensureNotNull($this.r7().s7(Key_instance)).t7(intercepted);
    }
    $this.q7_1 = CompletedContinuation_instance;
  }
  function CoroutineImpl(resultContinuation) {
    this.j7_1 = resultContinuation;
    this.k7_1 = 0;
    this.l7_1 = 0;
    this.m7_1 = null;
    this.n7_1 = null;
    this.o7_1 = null;
    var tmp = this;
    var tmp0_safe_receiver = this.j7_1;
    tmp.p7_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r7();
    this.q7_1 = null;
  }
  protoOf(CoroutineImpl).r7 = function () {
    return ensureNotNull(this.p7_1);
  };
  protoOf(CoroutineImpl).u7 = function (result) {
    var current = this;
    // Inline function 'kotlin.Result.getOrNull' call
    var tmp;
    if (_Result___get_isFailure__impl__jpiriv(result)) {
      tmp = null;
    } else {
      var tmp_0 = _Result___get_value__impl__bjfvqg(result);
      tmp = (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
    }
    var currentResult = tmp;
    var currentException = Result__exceptionOrNull_impl_p6xea9(result);
    while (true) {
      // Inline function 'kotlin.with' call
      // Inline function 'kotlin.contracts.contract' call
      var $this$with = current;
      if (currentException == null) {
        $this$with.m7_1 = currentResult;
      } else {
        $this$with.k7_1 = $this$with.l7_1;
        $this$with.n7_1 = currentException;
      }
      try {
        var outcome = $this$with.v7();
        if (outcome === get_COROUTINE_SUSPENDED())
          return Unit_instance;
        currentResult = outcome;
        currentException = null;
      } catch ($p) {
        var exception = $p;
        currentResult = null;
        // Inline function 'kotlin.js.unsafeCast' call
        currentException = exception;
      }
      releaseIntercepted($this$with);
      var completion = ensureNotNull($this$with.j7_1);
      var tmp_1;
      if (completion instanceof CoroutineImpl) {
        current = completion;
        tmp_1 = Unit_instance;
      } else {
        if (!(currentException == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var exception_0 = ensureNotNull(currentException);
          var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception_0));
          completion.w7(tmp$ret$2);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = currentResult;
          var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
          completion.w7(tmp$ret$4);
        }
        return Unit_instance;
      }
    }
  };
  protoOf(CoroutineImpl).w7 = function (result) {
    return this.u7(result);
  };
  function CompletedContinuation() {
  }
  protoOf(CompletedContinuation).r7 = function () {
    var message = 'This continuation is already complete';
    throw IllegalStateException_init_$Create$_0(toString_1(message));
  };
  protoOf(CompletedContinuation).u7 = function (result) {
    // Inline function 'kotlin.error' call
    var message = 'This continuation is already complete';
    throw IllegalStateException_init_$Create$_0(toString_1(message));
  };
  protoOf(CompletedContinuation).w7 = function (result) {
    return this.u7(result);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'This continuation is already complete';
  };
  var CompletedContinuation_instance;
  function CompletedContinuation_getInstance() {
    return CompletedContinuation_instance;
  }
  function createCoroutineUnintercepted(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlin.coroutines.intrinsics.createCoroutineFromSuspendFunction' call
    return new _no_name_provided__qut3iv_2(completion, _this__u8e3s4, receiver, completion);
  }
  function invokeSuspendSuperTypeWithReceiver(_this__u8e3s4, receiver, completion) {
    throw new NotImplementedError('It is intrinsic method');
  }
  function _no_name_provided__qut3iv_2($completion, $this_createCoroutineUnintercepted, $receiver, $completion$1) {
    this.f8_1 = $this_createCoroutineUnintercepted;
    this.g8_1 = $receiver;
    this.h8_1 = $completion$1;
    CoroutineImpl.call(this, isInterface($completion, Continuation) ? $completion : THROW_CCE());
  }
  protoOf(_no_name_provided__qut3iv_2).v7 = function () {
    if (this.n7_1 != null)
      throw this.n7_1;
    // Inline function 'kotlin.coroutines.intrinsics.createCoroutineUnintercepted.<anonymous>' call
    // Inline function 'kotlin.js.asDynamic' call
    var a = this.f8_1;
    return typeof a === 'function' ? a(this.g8_1, this.h8_1) : this.f8_1.i8(this.g8_1, this.h8_1);
  };
  function Exception_init_$Init$($this) {
    extendThrowable($this);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$() {
    var tmp = Exception_init_$Init$(objectCreate(protoOf(Exception)));
    captureStack(tmp, Exception_init_$Create$);
    return tmp;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Create$_0(message) {
    var tmp = Exception_init_$Init$_0(message, objectCreate(protoOf(Exception)));
    captureStack(tmp, Exception_init_$Create$_0);
    return tmp;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  function IllegalArgumentException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$() {
    var tmp = IllegalArgumentException_init_$Init$(objectCreate(protoOf(IllegalArgumentException)));
    captureStack(tmp, IllegalArgumentException_init_$Create$);
    return tmp;
  }
  function IllegalArgumentException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalArgumentException.call($this);
    return $this;
  }
  function IllegalArgumentException_init_$Create$_0(message) {
    var tmp = IllegalArgumentException_init_$Init$_0(message, objectCreate(protoOf(IllegalArgumentException)));
    captureStack(tmp, IllegalArgumentException_init_$Create$_0);
    return tmp;
  }
  function IllegalArgumentException() {
    captureStack(this, IllegalArgumentException);
  }
  function IndexOutOfBoundsException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$() {
    var tmp = IndexOutOfBoundsException_init_$Init$(objectCreate(protoOf(IndexOutOfBoundsException)));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$);
    return tmp;
  }
  function IndexOutOfBoundsException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IndexOutOfBoundsException.call($this);
    return $this;
  }
  function IndexOutOfBoundsException_init_$Create$_0(message) {
    var tmp = IndexOutOfBoundsException_init_$Init$_0(message, objectCreate(protoOf(IndexOutOfBoundsException)));
    captureStack(tmp, IndexOutOfBoundsException_init_$Create$_0);
    return tmp;
  }
  function IndexOutOfBoundsException() {
    captureStack(this, IndexOutOfBoundsException);
  }
  function IllegalStateException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$() {
    var tmp = IllegalStateException_init_$Init$(objectCreate(protoOf(IllegalStateException)));
    captureStack(tmp, IllegalStateException_init_$Create$);
    return tmp;
  }
  function IllegalStateException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    IllegalStateException.call($this);
    return $this;
  }
  function IllegalStateException_init_$Create$_0(message) {
    var tmp = IllegalStateException_init_$Init$_0(message, objectCreate(protoOf(IllegalStateException)));
    captureStack(tmp, IllegalStateException_init_$Create$_0);
    return tmp;
  }
  function IllegalStateException() {
    captureStack(this, IllegalStateException);
  }
  function UnsupportedOperationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$() {
    var tmp = UnsupportedOperationException_init_$Init$(objectCreate(protoOf(UnsupportedOperationException)));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$_0(message) {
    var tmp = UnsupportedOperationException_init_$Init$_0(message, objectCreate(protoOf(UnsupportedOperationException)));
    captureStack(tmp, UnsupportedOperationException_init_$Create$_0);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$() {
    var tmp = RuntimeException_init_$Init$(objectCreate(protoOf(RuntimeException)));
    captureStack(tmp, RuntimeException_init_$Create$);
    return tmp;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Create$_0(message) {
    var tmp = RuntimeException_init_$Init$_0(message, objectCreate(protoOf(RuntimeException)));
    captureStack(tmp, RuntimeException_init_$Create$_0);
    return tmp;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  function NoSuchElementException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$() {
    var tmp = NoSuchElementException_init_$Init$(objectCreate(protoOf(NoSuchElementException)));
    captureStack(tmp, NoSuchElementException_init_$Create$);
    return tmp;
  }
  function NoSuchElementException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    NoSuchElementException.call($this);
    return $this;
  }
  function NoSuchElementException_init_$Create$_0(message) {
    var tmp = NoSuchElementException_init_$Init$_0(message, objectCreate(protoOf(NoSuchElementException)));
    captureStack(tmp, NoSuchElementException_init_$Create$_0);
    return tmp;
  }
  function NoSuchElementException() {
    captureStack(this, NoSuchElementException);
  }
  function Error_init_$Init$($this) {
    extendThrowable($this);
    Error_0.call($this);
    return $this;
  }
  function Error_init_$Create$() {
    var tmp = Error_init_$Init$(objectCreate(protoOf(Error_0)));
    captureStack(tmp, Error_init_$Create$);
    return tmp;
  }
  function Error_init_$Init$_0(message, $this) {
    extendThrowable($this, message);
    Error_0.call($this);
    return $this;
  }
  function Error_0() {
    captureStack(this, Error_0);
  }
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(objectCreate(protoOf(ClassCastException)));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  function ArithmeticException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ArithmeticException.call($this);
    return $this;
  }
  function ArithmeticException_init_$Create$() {
    var tmp = ArithmeticException_init_$Init$(objectCreate(protoOf(ArithmeticException)));
    captureStack(tmp, ArithmeticException_init_$Create$);
    return tmp;
  }
  function ArithmeticException_init_$Init$_0(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    ArithmeticException.call($this);
    return $this;
  }
  function ArithmeticException_init_$Create$_0(message) {
    var tmp = ArithmeticException_init_$Init$_0(message, objectCreate(protoOf(ArithmeticException)));
    captureStack(tmp, ArithmeticException_init_$Create$_0);
    return tmp;
  }
  function ArithmeticException() {
    captureStack(this, ArithmeticException);
  }
  function ConcurrentModificationException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ConcurrentModificationException.call($this);
    return $this;
  }
  function ConcurrentModificationException_init_$Create$() {
    var tmp = ConcurrentModificationException_init_$Init$(objectCreate(protoOf(ConcurrentModificationException)));
    captureStack(tmp, ConcurrentModificationException_init_$Create$);
    return tmp;
  }
  function ConcurrentModificationException() {
    captureStack(this, ConcurrentModificationException);
  }
  function NullPointerException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    NullPointerException.call($this);
    return $this;
  }
  function NullPointerException_init_$Create$() {
    var tmp = NullPointerException_init_$Init$(objectCreate(protoOf(NullPointerException)));
    captureStack(tmp, NullPointerException_init_$Create$);
    return tmp;
  }
  function NullPointerException() {
    captureStack(this, NullPointerException);
  }
  function lazy(initializer) {
    return new UnsafeLazyImpl(initializer);
  }
  function fillFrom(src, dst) {
    var srcLen = src.length;
    var dstLen = dst.length;
    var index = 0;
    // Inline function 'kotlin.js.unsafeCast' call
    var arr = dst;
    while (index < srcLen ? index < dstLen : false) {
      var tmp = index;
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      arr[tmp] = src[tmp0];
    }
    return dst;
  }
  function arrayCopyResize(source, newSize, defaultValue) {
    // Inline function 'kotlin.js.unsafeCast' call
    var result = source.slice(0, newSize);
    // Inline function 'kotlin.copyArrayType' call
    if (source.$type$ !== undefined) {
      result.$type$ = source.$type$;
    }
    var index = source.length;
    if (newSize > index) {
      // Inline function 'kotlin.js.asDynamic' call
      result.length = newSize;
      while (index < newSize) {
        var tmp0 = index;
        index = tmp0 + 1 | 0;
        result[tmp0] = defaultValue;
      }
    }
    return result;
  }
  function get_INV_2_26() {
    _init_properties_PlatformRandom_kt__6kjv62();
    return INV_2_26;
  }
  var INV_2_26;
  function get_INV_2_53() {
    _init_properties_PlatformRandom_kt__6kjv62();
    return INV_2_53;
  }
  var INV_2_53;
  function doubleFromParts(hi26, low27) {
    _init_properties_PlatformRandom_kt__6kjv62();
    return hi26 * get_INV_2_26() + low27 * get_INV_2_53();
  }
  function defaultPlatformRandom() {
    _init_properties_PlatformRandom_kt__6kjv62();
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp$ret$0 = Math.random() * Math.pow(2, 32) | 0;
    return Random_0(tmp$ret$0);
  }
  var properties_initialized_PlatformRandom_kt_uibhw8;
  function _init_properties_PlatformRandom_kt__6kjv62() {
    if (!properties_initialized_PlatformRandom_kt_uibhw8) {
      properties_initialized_PlatformRandom_kt_uibhw8 = true;
      // Inline function 'kotlin.math.pow' call
      INV_2_26 = Math.pow(2.0, -26);
      // Inline function 'kotlin.math.pow' call
      INV_2_53 = Math.pow(2.0, -53);
    }
  }
  function KClass() {
  }
  function KClassImpl(jClass) {
    this.n8_1 = jClass;
  }
  protoOf(KClassImpl).o8 = function () {
    return this.n8_1;
  };
  protoOf(KClassImpl).equals = function (other) {
    var tmp;
    if (other instanceof NothingKClassImpl) {
      tmp = false;
    } else {
      if (other instanceof ErrorKClass) {
        tmp = false;
      } else {
        if (other instanceof KClassImpl) {
          tmp = equals(this.o8(), other.o8());
        } else {
          tmp = false;
        }
      }
    }
    return tmp;
  };
  protoOf(KClassImpl).hashCode = function () {
    var tmp0_safe_receiver = this.l8();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(KClassImpl).toString = function () {
    return 'class ' + this.l8();
  };
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this.q8_1 = 'Nothing';
  }
  protoOf(NothingKClassImpl).l8 = function () {
    return this.q8_1;
  };
  protoOf(NothingKClassImpl).m8 = function (value) {
    return false;
  };
  protoOf(NothingKClassImpl).o8 = function () {
    throw UnsupportedOperationException_init_$Create$_0("There's no native JS class for Nothing type");
  };
  protoOf(NothingKClassImpl).equals = function (other) {
    return other === this;
  };
  protoOf(NothingKClassImpl).hashCode = function () {
    return 0;
  };
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  protoOf(ErrorKClass).l8 = function () {
    var message = 'Unknown simpleName for ErrorKClass';
    throw IllegalStateException_init_$Create$_0(toString_1(message));
  };
  protoOf(ErrorKClass).m8 = function (value) {
    var message = "Can's check isInstance on ErrorKClass";
    throw IllegalStateException_init_$Create$_0(toString_1(message));
  };
  protoOf(ErrorKClass).equals = function (other) {
    return other === this;
  };
  protoOf(ErrorKClass).hashCode = function () {
    return 0;
  };
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this.s8_1 = givenSimpleName;
    this.t8_1 = isInstanceFunction;
  }
  protoOf(PrimitiveKClassImpl).equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    return protoOf(KClassImpl).equals.call(this, other) ? this.s8_1 === other.s8_1 : false;
  };
  protoOf(PrimitiveKClassImpl).l8 = function () {
    return this.s8_1;
  };
  protoOf(PrimitiveKClassImpl).m8 = function (value) {
    return this.t8_1(value);
  };
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = jClass.$metadata$;
    tmp.v8_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
  }
  protoOf(SimpleKClassImpl).l8 = function () {
    return this.v8_1;
  };
  protoOf(SimpleKClassImpl).m8 = function (value) {
    return jsIsType(value, this.o8());
  };
  function KProperty1() {
  }
  function KProperty0() {
  }
  function get_functionClasses() {
    _init_properties_primitives_kt__3fums4();
    return functionClasses;
  }
  var functionClasses;
  function PrimitiveClasses$anyClass$lambda(it) {
    return !(it == null);
  }
  function PrimitiveClasses$numberClass$lambda(it) {
    return isNumber(it);
  }
  function PrimitiveClasses$booleanClass$lambda(it) {
    return !(it == null) ? typeof it === 'boolean' : false;
  }
  function PrimitiveClasses$byteClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$shortClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$intClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$floatClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$doubleClass$lambda(it) {
    return !(it == null) ? typeof it === 'number' : false;
  }
  function PrimitiveClasses$arrayClass$lambda(it) {
    return !(it == null) ? isArray(it) : false;
  }
  function PrimitiveClasses$stringClass$lambda(it) {
    return !(it == null) ? typeof it === 'string' : false;
  }
  function PrimitiveClasses$throwableClass$lambda(it) {
    return it instanceof Error;
  }
  function PrimitiveClasses$booleanArrayClass$lambda(it) {
    return !(it == null) ? isBooleanArray(it) : false;
  }
  function PrimitiveClasses$charArrayClass$lambda(it) {
    return !(it == null) ? isCharArray(it) : false;
  }
  function PrimitiveClasses$byteArrayClass$lambda(it) {
    return !(it == null) ? isByteArray(it) : false;
  }
  function PrimitiveClasses$shortArrayClass$lambda(it) {
    return !(it == null) ? isShortArray(it) : false;
  }
  function PrimitiveClasses$intArrayClass$lambda(it) {
    return !(it == null) ? isIntArray(it) : false;
  }
  function PrimitiveClasses$longArrayClass$lambda(it) {
    return !(it == null) ? isLongArray(it) : false;
  }
  function PrimitiveClasses$floatArrayClass$lambda(it) {
    return !(it == null) ? isFloatArray(it) : false;
  }
  function PrimitiveClasses$doubleArrayClass$lambda(it) {
    return !(it == null) ? isDoubleArray(it) : false;
  }
  function PrimitiveClasses$functionClass$lambda($arity) {
    return function (it) {
      var tmp;
      if (typeof it === 'function') {
        // Inline function 'kotlin.js.asDynamic' call
        tmp = it.length === $arity;
      } else {
        tmp = false;
      }
      return tmp;
    };
  }
  function PrimitiveClasses() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_0 = Object;
    tmp.anyClass = new PrimitiveKClassImpl(tmp_0, 'Any', PrimitiveClasses$anyClass$lambda);
    var tmp_1 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_2 = Number;
    tmp_1.numberClass = new PrimitiveKClassImpl(tmp_2, 'Number', PrimitiveClasses$numberClass$lambda);
    this.nothingClass = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_4 = Boolean;
    tmp_3.booleanClass = new PrimitiveKClassImpl(tmp_4, 'Boolean', PrimitiveClasses$booleanClass$lambda);
    var tmp_5 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_6 = Number;
    tmp_5.byteClass = new PrimitiveKClassImpl(tmp_6, 'Byte', PrimitiveClasses$byteClass$lambda);
    var tmp_7 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_8 = Number;
    tmp_7.shortClass = new PrimitiveKClassImpl(tmp_8, 'Short', PrimitiveClasses$shortClass$lambda);
    var tmp_9 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_10 = Number;
    tmp_9.intClass = new PrimitiveKClassImpl(tmp_10, 'Int', PrimitiveClasses$intClass$lambda);
    var tmp_11 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_12 = Number;
    tmp_11.floatClass = new PrimitiveKClassImpl(tmp_12, 'Float', PrimitiveClasses$floatClass$lambda);
    var tmp_13 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_14 = Number;
    tmp_13.doubleClass = new PrimitiveKClassImpl(tmp_14, 'Double', PrimitiveClasses$doubleClass$lambda);
    var tmp_15 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_16 = Array;
    tmp_15.arrayClass = new PrimitiveKClassImpl(tmp_16, 'Array', PrimitiveClasses$arrayClass$lambda);
    var tmp_17 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_18 = String;
    tmp_17.stringClass = new PrimitiveKClassImpl(tmp_18, 'String', PrimitiveClasses$stringClass$lambda);
    var tmp_19 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_20 = Error;
    tmp_19.throwableClass = new PrimitiveKClassImpl(tmp_20, 'Throwable', PrimitiveClasses$throwableClass$lambda);
    var tmp_21 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_22 = Array;
    tmp_21.booleanArrayClass = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', PrimitiveClasses$booleanArrayClass$lambda);
    var tmp_23 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_24 = Uint16Array;
    tmp_23.charArrayClass = new PrimitiveKClassImpl(tmp_24, 'CharArray', PrimitiveClasses$charArrayClass$lambda);
    var tmp_25 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_26 = Int8Array;
    tmp_25.byteArrayClass = new PrimitiveKClassImpl(tmp_26, 'ByteArray', PrimitiveClasses$byteArrayClass$lambda);
    var tmp_27 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_28 = Int16Array;
    tmp_27.shortArrayClass = new PrimitiveKClassImpl(tmp_28, 'ShortArray', PrimitiveClasses$shortArrayClass$lambda);
    var tmp_29 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_30 = Int32Array;
    tmp_29.intArrayClass = new PrimitiveKClassImpl(tmp_30, 'IntArray', PrimitiveClasses$intArrayClass$lambda);
    var tmp_31 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_32 = Array;
    tmp_31.longArrayClass = new PrimitiveKClassImpl(tmp_32, 'LongArray', PrimitiveClasses$longArrayClass$lambda);
    var tmp_33 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_34 = Float32Array;
    tmp_33.floatArrayClass = new PrimitiveKClassImpl(tmp_34, 'FloatArray', PrimitiveClasses$floatArrayClass$lambda);
    var tmp_35 = this;
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp_36 = Float64Array;
    tmp_35.doubleArrayClass = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', PrimitiveClasses$doubleArrayClass$lambda);
  }
  protoOf(PrimitiveClasses).w8 = function () {
    return this.anyClass;
  };
  protoOf(PrimitiveClasses).x8 = function () {
    return this.numberClass;
  };
  protoOf(PrimitiveClasses).y8 = function () {
    return this.nothingClass;
  };
  protoOf(PrimitiveClasses).z8 = function () {
    return this.booleanClass;
  };
  protoOf(PrimitiveClasses).a9 = function () {
    return this.byteClass;
  };
  protoOf(PrimitiveClasses).b9 = function () {
    return this.shortClass;
  };
  protoOf(PrimitiveClasses).c9 = function () {
    return this.intClass;
  };
  protoOf(PrimitiveClasses).d9 = function () {
    return this.floatClass;
  };
  protoOf(PrimitiveClasses).e9 = function () {
    return this.doubleClass;
  };
  protoOf(PrimitiveClasses).f9 = function () {
    return this.arrayClass;
  };
  protoOf(PrimitiveClasses).g9 = function () {
    return this.stringClass;
  };
  protoOf(PrimitiveClasses).h9 = function () {
    return this.throwableClass;
  };
  protoOf(PrimitiveClasses).i9 = function () {
    return this.booleanArrayClass;
  };
  protoOf(PrimitiveClasses).j9 = function () {
    return this.charArrayClass;
  };
  protoOf(PrimitiveClasses).k9 = function () {
    return this.byteArrayClass;
  };
  protoOf(PrimitiveClasses).l9 = function () {
    return this.shortArrayClass;
  };
  protoOf(PrimitiveClasses).m9 = function () {
    return this.intArrayClass;
  };
  protoOf(PrimitiveClasses).n9 = function () {
    return this.longArrayClass;
  };
  protoOf(PrimitiveClasses).o9 = function () {
    return this.floatArrayClass;
  };
  protoOf(PrimitiveClasses).p9 = function () {
    return this.doubleArrayClass;
  };
  protoOf(PrimitiveClasses).functionClass = function (arity) {
    var tmp0_elvis_lhs = get_functionClasses()[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.reflect.js.internal.PrimitiveClasses.functionClass.<anonymous>' call
      // Inline function 'kotlin.js.unsafeCast' call
      var tmp_0 = Function;
      var tmp_1 = 'Function' + arity;
      var result = new PrimitiveKClassImpl(tmp_0, tmp_1, PrimitiveClasses$functionClass$lambda(arity));
      // Inline function 'kotlin.js.asDynamic' call
      get_functionClasses()[arity] = result;
      tmp = result;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses();
    return PrimitiveClasses_instance;
  }
  var properties_initialized_primitives_kt_jle18u;
  function _init_properties_primitives_kt__3fums4() {
    if (!properties_initialized_primitives_kt_jle18u) {
      properties_initialized_primitives_kt_jle18u = true;
      // Inline function 'kotlin.arrayOfNulls' call
      functionClasses = fillArrayVal(Array(0), null);
    }
  }
  function getKClass(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = getKClassM(jClass);
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = getKClass1(jClass);
    }
    return tmp;
  }
  function getKClassM(jClasses) {
    var tmp;
    switch (jClasses.length) {
      case 1:
        tmp = getKClass1(jClasses[0]);
        break;
      case 0:
        // Inline function 'kotlin.js.unsafeCast' call

        // Inline function 'kotlin.js.asDynamic' call

        tmp = NothingKClassImpl_getInstance();
        break;
      default:
        // Inline function 'kotlin.js.unsafeCast' call

        // Inline function 'kotlin.js.asDynamic' call

        tmp = new ErrorKClass();
        break;
    }
    return tmp;
  }
  function getKClass1(jClass) {
    if (jClass === String) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      return PrimitiveClasses_getInstance().stringClass;
    }
    // Inline function 'kotlin.js.asDynamic' call
    var metadata = jClass.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function getKClassFromExpression(e) {
    // Inline function 'kotlin.js.unsafeCast' call
    var tmp;
    switch (typeof e) {
      case 'string':
        tmp = PrimitiveClasses_getInstance().stringClass;
        break;
      case 'number':
        var tmp_0;
        // Inline function 'kotlin.js.asDynamic' call

        // Inline function 'kotlin.js.jsBitwiseOr' call

        if ((e | 0) === e) {
          tmp_0 = PrimitiveClasses_getInstance().intClass;
        } else {
          tmp_0 = PrimitiveClasses_getInstance().doubleClass;
        }

        tmp = tmp_0;
        break;
      case 'boolean':
        tmp = PrimitiveClasses_getInstance().booleanClass;
        break;
      case 'function':
        var tmp_1 = PrimitiveClasses_getInstance();
        // Inline function 'kotlin.js.asDynamic' call

        tmp = tmp_1.functionClass(e.length);
        break;
      default:
        var tmp_2;
        if (isBooleanArray(e)) {
          tmp_2 = PrimitiveClasses_getInstance().booleanArrayClass;
        } else {
          if (isCharArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance().charArrayClass;
          } else {
            if (isByteArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance().byteArrayClass;
            } else {
              if (isShortArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance().shortArrayClass;
              } else {
                if (isIntArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance().intArrayClass;
                } else {
                  if (isLongArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance().longArrayClass;
                  } else {
                    if (isFloatArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance().floatArrayClass;
                    } else {
                      if (isDoubleArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance().doubleArrayClass;
                      } else {
                        if (isInterface(e, KClass)) {
                          tmp_2 = getKClass(KClass);
                        } else {
                          if (isArray(e)) {
                            tmp_2 = PrimitiveClasses_getInstance().arrayClass;
                          } else {
                            var constructor = Object.getPrototypeOf(e).constructor;
                            var tmp_3;
                            if (constructor === Object) {
                              tmp_3 = PrimitiveClasses_getInstance().anyClass;
                            } else if (constructor === Error) {
                              tmp_3 = PrimitiveClasses_getInstance().throwableClass;
                            } else {
                              var jsClass = constructor;
                              tmp_3 = getKClass1(jsClass);
                            }
                            tmp_2 = tmp_3;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }

        tmp = tmp_2;
        break;
    }
    // Inline function 'kotlin.js.asDynamic' call
    return tmp;
  }
  function reset(_this__u8e3s4) {
    _this__u8e3s4.lastIndex = 0;
  }
  function StringBuilder_init_$Init$(capacity, $this) {
    StringBuilder_init_$Init$_0($this);
    return $this;
  }
  function StringBuilder_init_$Create$(capacity) {
    return StringBuilder_init_$Init$(capacity, objectCreate(protoOf(StringBuilder)));
  }
  function StringBuilder_init_$Init$_0($this) {
    StringBuilder.call($this, '');
    return $this;
  }
  function StringBuilder_init_$Create$_0() {
    return StringBuilder_init_$Init$_0(objectCreate(protoOf(StringBuilder)));
  }
  function StringBuilder(content) {
    this.o6_1 = !(content === undefined) ? content : '';
  }
  protoOf(StringBuilder).a = function () {
    // Inline function 'kotlin.js.asDynamic' call
    return this.o6_1.length;
  };
  protoOf(StringBuilder).b = function (index) {
    // Inline function 'kotlin.text.getOrElse' call
    var this_0 = this.o6_1;
    var tmp;
    if (index >= 0 ? index <= get_lastIndex_1(this_0) : false) {
      tmp = charSequenceGet(this_0, index);
    } else {
      throw IndexOutOfBoundsException_init_$Create$_0('index: ' + index + ', length: ' + this.a() + '}');
    }
    return tmp;
  };
  protoOf(StringBuilder).c = function (startIndex, endIndex) {
    // Inline function 'kotlin.text.substring' call
    // Inline function 'kotlin.js.asDynamic' call
    return this.o6_1.substring(startIndex, endIndex);
  };
  protoOf(StringBuilder).r6 = function (value) {
    this.o6_1 = this.o6_1 + toString(value);
    return this;
  };
  protoOf(StringBuilder).f = function (value) {
    this.o6_1 = this.o6_1 + toString_0(value);
    return this;
  };
  protoOf(StringBuilder).p6 = function (value) {
    this.o6_1 = this.o6_1 + toString_0(value);
    return this;
  };
  protoOf(StringBuilder).q6 = function (value) {
    var tmp = this;
    var tmp_0 = this.o6_1;
    tmp.o6_1 = tmp_0 + (value == null ? 'null' : value);
    return this;
  };
  protoOf(StringBuilder).toString = function () {
    return this.o6_1;
  };
  function uppercaseChar(_this__u8e3s4) {
    // Inline function 'kotlin.text.uppercase' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var uppercase = toString(_this__u8e3s4).toUpperCase();
    return uppercase.length > 1 ? _this__u8e3s4 : charSequenceGet(uppercase, 0);
  }
  function isWhitespace(_this__u8e3s4) {
    return isWhitespaceImpl(_this__u8e3s4);
  }
  function Regex_init_$Init$(pattern, $this) {
    Regex.call($this, pattern, emptySet());
    return $this;
  }
  function Regex_init_$Create$(pattern) {
    return Regex_init_$Init$(pattern, objectCreate(protoOf(Regex)));
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.q9_1 = new RegExp('[\\\\^$*+?.()|[\\]{}]', 'g');
    this.r9_1 = new RegExp('[\\\\$]', 'g');
    this.s9_1 = new RegExp('\\$', 'g');
  }
  protoOf(Companion_4).t9 = function (literal) {
    // Inline function 'kotlin.text.nativeReplace' call
    var pattern = this.q9_1;
    // Inline function 'kotlin.js.asDynamic' call
    return literal.replace(pattern, '\\$&');
  };
  protoOf(Companion_4).u9 = function (literal) {
    // Inline function 'kotlin.text.nativeReplace' call
    var pattern = this.s9_1;
    // Inline function 'kotlin.js.asDynamic' call
    return literal.replace(pattern, '$$$$');
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function Regex$findAll$lambda(this$0, $input, $startIndex) {
    return function () {
      return this$0.aa($input, $startIndex);
    };
  }
  function Regex$findAll$lambda_0(match) {
    return match.j();
  }
  function Regex(pattern, options) {
    Companion_getInstance_4();
    this.v9_1 = pattern;
    this.w9_1 = toSet_1(options);
    this.x9_1 = new RegExp(pattern, toFlags(options, 'gu'));
    this.y9_1 = null;
    this.z9_1 = null;
  }
  protoOf(Regex).ba = function (input) {
    reset(this.x9_1);
    var match = this.x9_1.exec(toString_1(input));
    return (!(match == null) ? match.index === 0 : false) ? this.x9_1.lastIndex === charSequenceLength(input) : false;
  };
  protoOf(Regex).aa = function (input, startIndex) {
    if (startIndex < 0 ? true : startIndex > charSequenceLength(input)) {
      throw IndexOutOfBoundsException_init_$Create$_0('Start index out of bounds: ' + startIndex + ', input length: ' + charSequenceLength(input));
    }
    return findNext(this.x9_1, toString_1(input), startIndex, this.x9_1);
  };
  protoOf(Regex).ca = function (input, startIndex) {
    if (startIndex < 0 ? true : startIndex > charSequenceLength(input)) {
      throw IndexOutOfBoundsException_init_$Create$_0('Start index out of bounds: ' + startIndex + ', input length: ' + charSequenceLength(input));
    }
    var tmp = Regex$findAll$lambda(this, input, startIndex);
    return generateSequence(tmp, Regex$findAll$lambda_0);
  };
  protoOf(Regex).da = function (input, startIndex, $super) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    return $super === VOID ? this.ca(input, startIndex) : $super.ca.call(this, input, startIndex);
  };
  protoOf(Regex).ea = function (input, limit) {
    requireNonNegativeLimit(limit);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.text.Regex.split.<anonymous>' call
    var it = this.da(input);
    var matches = limit === 0 ? it : take_0(it, limit - 1 | 0);
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var lastStart = 0;
    var tmp0_iterator = matches.h();
    while (tmp0_iterator.i()) {
      var match = tmp0_iterator.j();
      result.e(toString_1(charSequenceSubSequence(input, lastStart, match.fa().ja())));
      lastStart = match.fa().ka() + 1 | 0;
    }
    result.e(toString_1(charSequenceSubSequence(input, lastStart, charSequenceLength(input))));
    return result;
  };
  protoOf(Regex).toString = function () {
    return this.x9_1.toString();
  };
  function toFlags(_this__u8e3s4, prepend) {
    return joinToString_0(_this__u8e3s4, '', prepend, VOID, VOID, VOID, toFlags$lambda);
  }
  function findNext(_this__u8e3s4, input, from, nextPattern) {
    _this__u8e3s4.lastIndex = from;
    var match = _this__u8e3s4.exec(input);
    if (match == null)
      return null;
    var range = numberRangeToNumber(match.index, _this__u8e3s4.lastIndex - 1 | 0);
    return new findNext$1(range, match, nextPattern, input);
  }
  function MatchGroup(value) {
    this.la_1 = value;
  }
  protoOf(MatchGroup).toString = function () {
    return 'MatchGroup(value=' + this.la_1 + ')';
  };
  protoOf(MatchGroup).hashCode = function () {
    return getStringHashCode(this.la_1);
  };
  protoOf(MatchGroup).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof MatchGroup))
      return false;
    var tmp0_other_with_cast = other instanceof MatchGroup ? other : THROW_CCE();
    if (!(this.la_1 === tmp0_other_with_cast.la_1))
      return false;
    return true;
  };
  function toFlags$lambda(it) {
    return it.oa_1;
  }
  function findNext$o$groups$o$iterator$lambda(this$0) {
    return function (it) {
      return this$0.m(it);
    };
  }
  function advanceToNextCharacter($this, index) {
    if (index < get_lastIndex_1($this.xa_1)) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var code1 = $this.xa_1.charCodeAt(index);
      if (55296 <= code1 ? code1 <= 56319 : false) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var code2 = $this.xa_1.charCodeAt(index + 1 | 0);
        if (56320 <= code2 ? code2 <= 57343 : false) {
          return index + 2 | 0;
        }
      }
    }
    return index + 1 | 0;
  }
  function findNext$1$groups$1($match, this$0) {
    this.pa_1 = $match;
    this.qa_1 = this$0;
    AbstractCollection.call(this);
  }
  protoOf(findNext$1$groups$1).k = function () {
    return this.pa_1.length;
  };
  protoOf(findNext$1$groups$1).h = function () {
    var tmp = asSequence_0(get_indices(this));
    return map(tmp, findNext$o$groups$o$iterator$lambda(this)).h();
  };
  protoOf(findNext$1$groups$1).m = function (index) {
    // Inline function 'kotlin.js.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = this.pa_1[index];
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.text.<no name provided>.get.<anonymous>' call
      tmp = new MatchGroup(tmp0_safe_receiver);
    }
    return tmp;
  };
  function findNext$1($range, $match, $nextPattern, $input) {
    this.ua_1 = $range;
    this.va_1 = $match;
    this.wa_1 = $nextPattern;
    this.xa_1 = $input;
    this.ra_1 = $range;
    var tmp = this;
    tmp.sa_1 = new findNext$1$groups$1($match, this);
    this.ta_1 = null;
  }
  protoOf(findNext$1).fa = function () {
    return this.ra_1;
  };
  protoOf(findNext$1).j = function () {
    return findNext(this.wa_1, this.xa_1, this.ua_1.l() ? advanceToNextCharacter(this, this.ua_1.ja()) : this.ua_1.ka() + 1 | 0, this.wa_1);
  };
  var STRING_CASE_INSENSITIVE_ORDER;
  function compareTo_0(_this__u8e3s4, other, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    _init_properties_stringJs_kt__bg7zye();
    if (ignoreCase) {
      var n1 = _this__u8e3s4.length;
      var n2 = other.length;
      // Inline function 'kotlin.comparisons.minOf' call
      var min = Math.min(n1, n2);
      if (min === 0)
        return n1 - n2 | 0;
      var inductionVariable = 0;
      if (inductionVariable < min)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var thisChar = charSequenceGet(_this__u8e3s4, index);
          var otherChar = charSequenceGet(other, index);
          if (!(thisChar === otherChar)) {
            thisChar = uppercaseChar(thisChar);
            otherChar = uppercaseChar(otherChar);
            if (!(thisChar === otherChar)) {
              // Inline function 'kotlin.text.lowercaseChar' call
              // Inline function 'kotlin.text.lowercase' call
              var this_0 = thisChar;
              // Inline function 'kotlin.js.unsafeCast' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp$ret$3 = toString(this_0).toLowerCase();
              thisChar = charSequenceGet(tmp$ret$3, 0);
              // Inline function 'kotlin.text.lowercaseChar' call
              // Inline function 'kotlin.text.lowercase' call
              var this_1 = otherChar;
              // Inline function 'kotlin.js.unsafeCast' call
              // Inline function 'kotlin.js.asDynamic' call
              var tmp$ret$7 = toString(this_1).toLowerCase();
              otherChar = charSequenceGet(tmp$ret$7, 0);
              if (!(thisChar === otherChar)) {
                return Char__compareTo_impl_ypi4mb(thisChar, otherChar);
              }
            }
          }
        }
         while (inductionVariable < min);
      return n1 - n2 | 0;
    } else {
      return compareTo(_this__u8e3s4, other);
    }
  }
  function toCharArray(_this__u8e3s4) {
    _init_properties_stringJs_kt__bg7zye();
    var tmp = 0;
    var tmp_0 = _this__u8e3s4.length;
    var tmp_1 = charArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      tmp_1[tmp_2] = charSequenceGet(_this__u8e3s4, tmp_2);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.ya_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).za = function (a, b) {
    return this.ya_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.za(a, b);
  };
  function STRING_CASE_INSENSITIVE_ORDER$lambda(a, b) {
    _init_properties_stringJs_kt__bg7zye();
    return compareTo_0(a, b, true);
  }
  var properties_initialized_stringJs_kt_nta8o4;
  function _init_properties_stringJs_kt__bg7zye() {
    if (!properties_initialized_stringJs_kt_nta8o4) {
      properties_initialized_stringJs_kt_nta8o4 = true;
      var tmp = STRING_CASE_INSENSITIVE_ORDER$lambda;
      STRING_CASE_INSENSITIVE_ORDER = new sam$kotlin_Comparator$0(tmp);
    }
  }
  function replace(_this__u8e3s4, oldValue, newValue, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    // Inline function 'kotlin.text.nativeReplace' call
    var pattern = new RegExp(Companion_getInstance_4().t9(oldValue), ignoreCase ? 'gui' : 'gu');
    var replacement = Companion_getInstance_4().u9(newValue);
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.replace(pattern, replacement);
  }
  function replaceFirst(_this__u8e3s4, oldValue, newValue, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    // Inline function 'kotlin.text.nativeReplace' call
    var pattern = new RegExp(Companion_getInstance_4().t9(oldValue), ignoreCase ? 'ui' : 'u');
    var replacement = Companion_getInstance_4().u9(newValue);
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.replace(pattern, replacement);
  }
  function isBlank(_this__u8e3s4) {
    var tmp;
    if (charSequenceLength(_this__u8e3s4) === 0) {
      tmp = true;
    } else {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var this_0 = get_indices_0(_this__u8e3s4);
        var tmp_0;
        if (isInterface(this_0, Collection)) {
          tmp_0 = this_0.l();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = this_0.h();
        while (tmp0_iterator.i()) {
          var element = tmp0_iterator.j();
          // Inline function 'kotlin.text.isBlank.<anonymous>' call
          if (!isWhitespace(charSequenceGet(_this__u8e3s4, element))) {
            tmp$ret$0 = false;
            break $l$block_0;
          }
        }
        tmp$ret$0 = true;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function regionMatches(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    return regionMatchesImpl(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase);
  }
  function startsWith(_this__u8e3s4, prefix, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    if (!ignoreCase) {
      // Inline function 'kotlin.text.nativeStartsWith' call
      // Inline function 'kotlin.js.asDynamic' call
      return _this__u8e3s4.startsWith(prefix, 0);
    } else
      return regionMatches(_this__u8e3s4, 0, prefix, 0, prefix.length, ignoreCase);
  }
  function stackTraceToString(_this__u8e3s4) {
    return (new ExceptionTraceBuilder()).eb(_this__u8e3s4);
  }
  function hasSeen($this, exception) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.any' call
      var indexedObject = $this.bb_1;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var element = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.ExceptionTraceBuilder.hasSeen.<anonymous>' call
        if (element === exception) {
          tmp$ret$1 = true;
          break $l$block;
        }
      }
      tmp$ret$1 = false;
    }
    return tmp$ret$1;
  }
  function dumpFullTrace(_this__u8e3s4, $this, indent, qualifier) {
    if (dumpSelfTrace(_this__u8e3s4, $this, indent, qualifier))
      true;
    else
      return Unit_instance;
    var cause = _this__u8e3s4.cause;
    while (!(cause == null)) {
      if (dumpSelfTrace(cause, $this, indent, 'Caused by: '))
        true;
      else
        return Unit_instance;
      cause = cause.cause;
    }
  }
  function dumpSelfTrace(_this__u8e3s4, $this, indent, qualifier) {
    $this.ab_1.q6(indent).q6(qualifier);
    var shortInfo = _this__u8e3s4.toString();
    if (hasSeen($this, _this__u8e3s4)) {
      $this.ab_1.q6('[CIRCULAR REFERENCE, SEE ABOVE: ').q6(shortInfo).q6(']\n');
      return false;
    }
    // Inline function 'kotlin.js.asDynamic' call
    $this.bb_1.push(_this__u8e3s4);
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = _this__u8e3s4.stack;
    var stack = (tmp == null ? true : typeof tmp === 'string') ? tmp : THROW_CCE();
    if (!(stack == null)) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.ExceptionTraceBuilder.dumpSelfTrace.<anonymous>' call
      var it = indexOf_0(stack, shortInfo);
      var stackStart = it < 0 ? 0 : it + shortInfo.length | 0;
      if (stackStart === 0) {
        $this.ab_1.q6(shortInfo).q6('\n');
      }
      // Inline function 'kotlin.text.isEmpty' call
      var this_0 = $this.cb_1;
      if (charSequenceLength(this_0) === 0) {
        $this.cb_1 = stack;
        $this.db_1 = stackStart;
      } else {
        stack = dropCommonFrames($this, stack, stackStart);
      }
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(indent) > 0) {
        var tmp_0;
        if (stackStart === 0) {
          tmp_0 = 0;
        } else {
          // Inline function 'kotlin.text.count' call
          var count = 0;
          var inductionVariable = 0;
          while (inductionVariable < charSequenceLength(shortInfo)) {
            var element = charSequenceGet(shortInfo, inductionVariable);
            inductionVariable = inductionVariable + 1 | 0;
            // Inline function 'kotlin.ExceptionTraceBuilder.dumpSelfTrace.<anonymous>' call
            if (element === _Char___init__impl__6a9atx(10)) {
              count = count + 1 | 0;
            }
          }
          tmp_0 = 1 + count | 0;
        }
        var messageLines = tmp_0;
        // Inline function 'kotlin.sequences.forEachIndexed' call
        var index = 0;
        var tmp0_iterator = lineSequence(stack).h();
        while (tmp0_iterator.i()) {
          var item = tmp0_iterator.j();
          // Inline function 'kotlin.ExceptionTraceBuilder.dumpSelfTrace.<anonymous>' call
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          if (checkIndexOverflow(tmp1) >= messageLines) {
            $this.ab_1.q6(indent);
          }
          $this.ab_1.q6(item).q6('\n');
        }
      } else {
        $this.ab_1.q6(stack).q6('\n');
      }
    } else {
      $this.ab_1.q6(shortInfo).q6('\n');
    }
    var suppressed = get_suppressedExceptions(_this__u8e3s4);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!suppressed.l()) {
      var suppressedIndent = indent + '    ';
      var tmp0_iterator_0 = suppressed.h();
      while (tmp0_iterator_0.i()) {
        var s = tmp0_iterator_0.j();
        dumpFullTrace(s, $this, suppressedIndent, 'Suppressed: ');
      }
    }
    return true;
  }
  function dropCommonFrames($this, stack, stackStart) {
    var commonFrames = 0;
    var lastBreak = 0;
    var preLastBreak = 0;
    var inductionVariable = 0;
    // Inline function 'kotlin.comparisons.minOf' call
    var a = $this.cb_1.length - $this.db_1 | 0;
    var b = stack.length - stackStart | 0;
    var last = Math.min(a, b);
    if (inductionVariable < last)
      $l$loop: do {
        var pos = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var c = charSequenceGet(stack, get_lastIndex_1(stack) - pos | 0);
        if (!(c === charSequenceGet($this.cb_1, get_lastIndex_1($this.cb_1) - pos | 0)))
          break $l$loop;
        if (c === _Char___init__impl__6a9atx(10)) {
          commonFrames = commonFrames + 1 | 0;
          preLastBreak = lastBreak;
          lastBreak = pos;
        }
      }
       while (inductionVariable < last);
    if (commonFrames <= 1)
      return stack;
    while (preLastBreak > 0 ? charSequenceGet(stack, get_lastIndex_1(stack) - (preLastBreak - 1 | 0) | 0) === _Char___init__impl__6a9atx(32) : false)
      preLastBreak = preLastBreak - 1 | 0;
    return dropLast_0(stack, preLastBreak) + ('... and ' + (commonFrames - 1 | 0) + ' more common stack frames skipped');
  }
  function ExceptionTraceBuilder() {
    this.ab_1 = StringBuilder_init_$Create$_0();
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.bb_1 = [];
    this.cb_1 = '';
    this.db_1 = 0;
  }
  protoOf(ExceptionTraceBuilder).eb = function (exception) {
    dumpFullTrace(exception, this, '', '');
    return this.ab_1.toString();
  };
  function get_suppressedExceptions(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_safe_receiver = _this__u8e3s4._suppressed;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      tmp = tmp0_safe_receiver;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? emptyList() : tmp1_elvis_lhs;
  }
  function AbstractCollection$toString$lambda(this$0) {
    return function (it) {
      return it === this$0 ? '(this Collection)' : toString_0(it);
    };
  }
  function AbstractCollection() {
  }
  protoOf(AbstractCollection).a1 = function (element) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(this, Collection)) {
        tmp = this.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = this.h();
      while (tmp0_iterator.i()) {
        var element_0 = tmp0_iterator.j();
        // Inline function 'kotlin.collections.AbstractCollection.contains.<anonymous>' call
        if (equals(element_0, element)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractCollection).o1 = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'kotlin.collections.AbstractCollection.containsAll.<anonymous>' call
        if (!this.a1(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractCollection).l = function () {
    return this.k() === 0;
  };
  protoOf(AbstractCollection).toString = function () {
    return joinToString_0(this, ', ', '[', ']', VOID, VOID, AbstractCollection$toString$lambda(this));
  };
  protoOf(AbstractCollection).toArray = function () {
    return collectionToArray(this);
  };
  function tryToComputeNext($this) {
    $this.fb_1 = 3;
    $this.hb();
    return $this.fb_1 === 1;
  }
  function AbstractIterator() {
    this.fb_1 = 0;
    this.gb_1 = null;
  }
  protoOf(AbstractIterator).i = function () {
    var tmp;
    switch (this.fb_1) {
      case 2:
        tmp = false;
        break;
      case 1:
        tmp = true;
        break;
      case 0:
        tmp = tryToComputeNext(this);
        break;
      default:
        throw IllegalArgumentException_init_$Create$_0('hasNext called when the iterator is in the FAILED state.');
    }
    return tmp;
  };
  protoOf(AbstractIterator).j = function () {
    if (this.fb_1 === 1) {
      this.fb_1 = 0;
      var tmp = this.gb_1;
      return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
    }
    if (this.fb_1 === 2 ? true : !tryToComputeNext(this)) {
      throw NoSuchElementException_init_$Create$();
    }
    this.fb_1 = 0;
    var tmp_0 = this.gb_1;
    return (tmp_0 == null ? true : !(tmp_0 == null)) ? tmp_0 : THROW_CCE();
  };
  protoOf(AbstractIterator).ib = function (value) {
    this.gb_1 = value;
    this.fb_1 = 1;
  };
  protoOf(AbstractIterator).jb = function () {
    this.fb_1 = 2;
  };
  function SubList_0(list, fromIndex, toIndex) {
    AbstractList.call(this);
    this.kb_1 = list;
    this.lb_1 = fromIndex;
    this.mb_1 = 0;
    Companion_instance_5.q2(this.lb_1, toIndex, this.kb_1.k());
    this.mb_1 = toIndex - this.lb_1 | 0;
  }
  protoOf(SubList_0).m = function (index) {
    Companion_instance_5.m3(index, this.mb_1);
    return this.kb_1.m(this.lb_1 + index | 0);
  };
  protoOf(SubList_0).k = function () {
    return this.mb_1;
  };
  function IteratorImpl_0($outer) {
    this.ob_1 = $outer;
    this.nb_1 = 0;
  }
  protoOf(IteratorImpl_0).i = function () {
    return this.nb_1 < this.ob_1.k();
  };
  protoOf(IteratorImpl_0).j = function () {
    if (!this.i())
      throw NoSuchElementException_init_$Create$();
    var tmp1 = this.nb_1;
    this.nb_1 = tmp1 + 1 | 0;
    return this.ob_1.m(tmp1);
  };
  function ListIteratorImpl_0($outer, index) {
    this.rb_1 = $outer;
    IteratorImpl_0.call(this, $outer);
    Companion_instance_5.e3(index, this.rb_1.k());
    this.nb_1 = index;
  }
  protoOf(ListIteratorImpl_0).f3 = function () {
    return this.nb_1 > 0;
  };
  protoOf(ListIteratorImpl_0).g3 = function () {
    if (!this.f3())
      throw NoSuchElementException_init_$Create$();
    this.nb_1 = this.nb_1 - 1 | 0;
    return this.rb_1.m(this.nb_1);
  };
  function Companion_5() {
    this.p2_1 = 2147483639;
  }
  protoOf(Companion_5).m3 = function (index, size) {
    if (index < 0 ? true : index >= size) {
      throw IndexOutOfBoundsException_init_$Create$_0('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(Companion_5).e3 = function (index, size) {
    if (index < 0 ? true : index > size) {
      throw IndexOutOfBoundsException_init_$Create$_0('index: ' + index + ', size: ' + size);
    }
  };
  protoOf(Companion_5).q2 = function (fromIndex, toIndex, size) {
    if (fromIndex < 0 ? true : toIndex > size) {
      throw IndexOutOfBoundsException_init_$Create$_0('fromIndex: ' + fromIndex + ', toIndex: ' + toIndex + ', size: ' + size);
    }
    if (fromIndex > toIndex) {
      throw IllegalArgumentException_init_$Create$_0('fromIndex: ' + fromIndex + ' > toIndex: ' + toIndex);
    }
  };
  protoOf(Companion_5).p5 = function (oldCapacity, minCapacity) {
    var newCapacity = oldCapacity + (oldCapacity >> 1) | 0;
    if ((newCapacity - minCapacity | 0) < 0)
      newCapacity = minCapacity;
    if ((newCapacity - 2147483639 | 0) > 0)
      newCapacity = minCapacity > 2147483639 ? 2147483647 : 2147483639;
    return newCapacity;
  };
  protoOf(Companion_5).p3 = function (c) {
    var hashCode_0 = 1;
    var tmp0_iterator = c.h();
    while (tmp0_iterator.i()) {
      var e = tmp0_iterator.j();
      var tmp = imul(31, hashCode_0);
      var tmp2_elvis_lhs = e == null ? null : hashCode(e);
      hashCode_0 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_0;
  };
  protoOf(Companion_5).o3 = function (c, other) {
    if (!(c.k() === other.k()))
      return false;
    var otherIterator = other.h();
    var tmp0_iterator = c.h();
    while (tmp0_iterator.i()) {
      var elem = tmp0_iterator.j();
      var elemOther = otherIterator.j();
      if (!equals(elem, elemOther)) {
        return false;
      }
    }
    return true;
  };
  var Companion_instance_5;
  function Companion_getInstance_5() {
    return Companion_instance_5;
  }
  function AbstractList() {
    AbstractCollection.call(this);
  }
  protoOf(AbstractList).h = function () {
    return new IteratorImpl_0(this);
  };
  protoOf(AbstractList).r = function (index) {
    return new ListIteratorImpl_0(this, index);
  };
  protoOf(AbstractList).p1 = function (fromIndex, toIndex) {
    return new SubList_0(this, fromIndex, toIndex);
  };
  protoOf(AbstractList).equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, List) : false))
      return false;
    return Companion_instance_5.o3(this, other);
  };
  protoOf(AbstractList).hashCode = function () {
    return Companion_instance_5.p3(this);
  };
  function AbstractMap$values$1$iterator$1($entryIterator) {
    this.sb_1 = $entryIterator;
  }
  protoOf(AbstractMap$values$1$iterator$1).i = function () {
    return this.sb_1.i();
  };
  protoOf(AbstractMap$values$1$iterator$1).j = function () {
    return this.sb_1.j().r1();
  };
  function toString_2($this, o) {
    return o === $this ? '(this Map)' : toString_0(o);
  }
  function implFindEntry($this, key) {
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator = $this.w1().h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'kotlin.collections.AbstractMap.implFindEntry.<anonymous>' call
        if (equals(element.q1(), key)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    return tmp$ret$1;
  }
  function Companion_6() {
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    return Companion_instance_6;
  }
  function AbstractMap$toString$lambda(this$0) {
    return function (it) {
      return this$0.tb(it);
    };
  }
  function AbstractMap$values$1(this$0) {
    this.ub_1 = this$0;
    AbstractCollection.call(this);
  }
  protoOf(AbstractMap$values$1).o4 = function (element) {
    return this.ub_1.t1(element);
  };
  protoOf(AbstractMap$values$1).a1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.o4((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(AbstractMap$values$1).h = function () {
    var entryIterator = this.ub_1.w1().h();
    return new AbstractMap$values$1$iterator$1(entryIterator);
  };
  protoOf(AbstractMap$values$1).k = function () {
    return this.ub_1.k();
  };
  function AbstractMap() {
    this.w3_1 = null;
    this.x3_1 = null;
  }
  protoOf(AbstractMap).s1 = function (key) {
    return !(implFindEntry(this, key) == null);
  };
  protoOf(AbstractMap).t1 = function (value) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var this_0 = this.w1();
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = this_0.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'kotlin.collections.AbstractMap.containsValue.<anonymous>' call
        if (equals(element.r1(), value)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractMap).y3 = function (entry) {
    if (!(!(entry == null) ? isInterface(entry, Entry) : false))
      return false;
    var key = entry.q1();
    var value = entry.r1();
    // Inline function 'kotlin.collections.get' call
    var ourValue = (isInterface(this, Map_0) ? this : THROW_CCE()).u1(key);
    if (!equals(value, ourValue)) {
      return false;
    }
    var tmp;
    if (ourValue == null) {
      // Inline function 'kotlin.collections.containsKey' call
      tmp = !(isInterface(this, Map_0) ? this : THROW_CCE()).s1(key);
    } else {
      tmp = false;
    }
    if (tmp) {
      return false;
    }
    return true;
  };
  protoOf(AbstractMap).equals = function (other) {
    if (other === this)
      return true;
    if (!(!(other == null) ? isInterface(other, Map_0) : false))
      return false;
    if (!(this.k() === other.k()))
      return false;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var this_0 = other.w1();
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = this_0.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'kotlin.collections.AbstractMap.equals.<anonymous>' call
        if (!this.y3(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(AbstractMap).u1 = function (key) {
    var tmp0_safe_receiver = implFindEntry(this, key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r1();
  };
  protoOf(AbstractMap).hashCode = function () {
    return hashCode(this.w1());
  };
  protoOf(AbstractMap).l = function () {
    return this.k() === 0;
  };
  protoOf(AbstractMap).k = function () {
    return this.w1().k();
  };
  protoOf(AbstractMap).toString = function () {
    var tmp = this.w1();
    return joinToString_0(tmp, ', ', '{', '}', VOID, VOID, AbstractMap$toString$lambda(this));
  };
  protoOf(AbstractMap).tb = function (entry) {
    return toString_2(this, entry.q1()) + '=' + toString_2(this, entry.r1());
  };
  protoOf(AbstractMap).v1 = function () {
    if (this.x3_1 == null) {
      var tmp = this;
      tmp.x3_1 = new AbstractMap$values$1(this);
    }
    return ensureNotNull(this.x3_1);
  };
  function Companion_7() {
  }
  protoOf(Companion_7).a4 = function (c) {
    var hashCode_0 = 0;
    var tmp0_iterator = c.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      var tmp = hashCode_0;
      var tmp2_elvis_lhs = element == null ? null : hashCode(element);
      hashCode_0 = tmp + (tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs) | 0;
    }
    return hashCode_0;
  };
  protoOf(Companion_7).z3 = function (c, other) {
    if (!(c.k() === other.k()))
      return false;
    // Inline function 'kotlin.collections.containsAll' call
    return c.o1(other);
  };
  var Companion_instance_7;
  function Companion_getInstance_7() {
    return Companion_instance_7;
  }
  function collectionToArrayCommonImpl(collection) {
    if (collection.l()) {
      // Inline function 'kotlin.emptyArray' call
      return [];
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var size = collection.k();
    var destination = fillArrayVal(Array(size), null);
    var iterator = collection.h();
    var index = 0;
    while (iterator.i()) {
      var tmp0 = index;
      index = tmp0 + 1 | 0;
      destination[tmp0] = iterator.j();
    }
    return destination;
  }
  function emptyList() {
    return EmptyList_getInstance();
  }
  function listOf_0(elements) {
    return elements.length > 0 ? asList(elements) : emptyList();
  }
  function get_indices(_this__u8e3s4) {
    return numberRangeToNumber(0, _this__u8e3s4.k() - 1 | 0);
  }
  function get_lastIndex_0(_this__u8e3s4) {
    return _this__u8e3s4.k() - 1 | 0;
  }
  function EmptyList() {
    EmptyList_instance = this;
    this.vb_1 = new Long(-1478467534, -1720727600);
  }
  protoOf(EmptyList).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, List) : false) {
      tmp = other.l();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EmptyList).hashCode = function () {
    return 1;
  };
  protoOf(EmptyList).toString = function () {
    return '[]';
  };
  protoOf(EmptyList).k = function () {
    return 0;
  };
  protoOf(EmptyList).l = function () {
    return true;
  };
  protoOf(EmptyList).wb = function (element) {
    return false;
  };
  protoOf(EmptyList).a1 = function (element) {
    if (true)
      return false;
    var tmp;
    if (false) {} else {
      tmp = THROW_CCE();
    }
    return this.wb(tmp);
  };
  protoOf(EmptyList).xb = function (elements) {
    return elements.l();
  };
  protoOf(EmptyList).o1 = function (elements) {
    return this.xb(elements);
  };
  protoOf(EmptyList).m = function (index) {
    throw IndexOutOfBoundsException_init_$Create$_0("Empty list doesn't contain element at index " + index + '.');
  };
  protoOf(EmptyList).h = function () {
    return EmptyIterator_instance;
  };
  protoOf(EmptyList).r = function (index) {
    if (!(index === 0))
      throw IndexOutOfBoundsException_init_$Create$_0('Index: ' + index);
    return EmptyIterator_instance;
  };
  protoOf(EmptyList).p1 = function (fromIndex, toIndex) {
    if (fromIndex === 0 ? toIndex === 0 : false)
      return this;
    throw IndexOutOfBoundsException_init_$Create$_0('fromIndex: ' + fromIndex + ', toIndex: ' + toIndex);
  };
  var EmptyList_instance;
  function EmptyList_getInstance() {
    if (EmptyList_instance == null)
      new EmptyList();
    return EmptyList_instance;
  }
  function asCollection(_this__u8e3s4) {
    return new ArrayAsCollection(_this__u8e3s4, false);
  }
  function optimizeReadOnlyList(_this__u8e3s4) {
    switch (_this__u8e3s4.k()) {
      case 0:
        return emptyList();
      case 1:
        return listOf(_this__u8e3s4.m(0));
      default:
        return _this__u8e3s4;
    }
  }
  function arrayListOf(elements) {
    return elements.length === 0 ? ArrayList_init_$Create$() : ArrayList_init_$Create$_1(new ArrayAsCollection(elements, true));
  }
  function throwIndexOverflow() {
    throw ArithmeticException_init_$Create$_0('Index overflow has happened.');
  }
  function ArrayAsCollection(values, isVarargs) {
    this.yb_1 = values;
    this.zb_1 = isVarargs;
  }
  protoOf(ArrayAsCollection).k = function () {
    return this.yb_1.length;
  };
  protoOf(ArrayAsCollection).l = function () {
    // Inline function 'kotlin.collections.isEmpty' call
    return this.yb_1.length === 0;
  };
  protoOf(ArrayAsCollection).ac = function (element) {
    return contains(this.yb_1, element);
  };
  protoOf(ArrayAsCollection).a1 = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.ac((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(ArrayAsCollection).bc = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.l();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = elements.h();
      while (tmp0_iterator.i()) {
        var element = tmp0_iterator.j();
        // Inline function 'kotlin.collections.ArrayAsCollection.containsAll.<anonymous>' call
        if (!this.ac(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(ArrayAsCollection).o1 = function (elements) {
    return this.bc(elements);
  };
  protoOf(ArrayAsCollection).h = function () {
    return arrayIterator(this.yb_1);
  };
  function EmptyIterator() {
  }
  protoOf(EmptyIterator).i = function () {
    return false;
  };
  protoOf(EmptyIterator).f3 = function () {
    return false;
  };
  protoOf(EmptyIterator).j = function () {
    throw NoSuchElementException_init_$Create$();
  };
  protoOf(EmptyIterator).g3 = function () {
    throw NoSuchElementException_init_$Create$();
  };
  var EmptyIterator_instance;
  function EmptyIterator_getInstance() {
    return EmptyIterator_instance;
  }
  function flatten(_this__u8e3s4) {
    var result = ArrayList_init_$Create$();
    var tmp0_iterator = _this__u8e3s4.h();
    while (tmp0_iterator.i()) {
      var element = tmp0_iterator.j();
      addAll(result, element);
    }
    return result;
  }
  function collectionSizeOrDefault(_this__u8e3s4, default_0) {
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = _this__u8e3s4.k();
    } else {
      tmp = default_0;
    }
    return tmp;
  }
  function collectionSizeOrNull(_this__u8e3s4) {
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = _this__u8e3s4.k();
    } else {
      tmp = null;
    }
    return tmp;
  }
  function emptyMap() {
    var tmp = EmptyMap_getInstance();
    return isInterface(tmp, Map_0) ? tmp : THROW_CCE();
  }
  function mapOf_0(pairs) {
    return pairs.length > 0 ? toMap_0(pairs, LinkedHashMap_init_$Create$_0(mapCapacity(pairs.length))) : emptyMap();
  }
  function toMutableMap(_this__u8e3s4) {
    return LinkedHashMap_init_$Create$_2(_this__u8e3s4);
  }
  function toMap(_this__u8e3s4) {
    if (isInterface(_this__u8e3s4, Collection)) {
      var tmp;
      switch (_this__u8e3s4.k()) {
        case 0:
          tmp = emptyMap();
          break;
        case 1:
          var tmp_0;
          if (isInterface(_this__u8e3s4, List)) {
            tmp_0 = _this__u8e3s4.m(0);
          } else {
            tmp_0 = _this__u8e3s4.h().j();
          }

          tmp = mapOf(tmp_0);
          break;
        default:
          tmp = toMap_1(_this__u8e3s4, LinkedHashMap_init_$Create$_0(mapCapacity(_this__u8e3s4.k())));
          break;
      }
      return tmp;
    }
    return optimizeReadOnlyMap(toMap_1(_this__u8e3s4, LinkedHashMap_init_$Create$()));
  }
  function plus_6(_this__u8e3s4, map) {
    // Inline function 'kotlin.apply' call
    var this_0 = LinkedHashMap_init_$Create$_2(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.plus.<anonymous>' call
    this_0.m4(map);
    return this_0;
  }
  function EmptyMap() {
    EmptyMap_instance = this;
    this.cc_1 = new Long(-888910638, 1920087921);
  }
  protoOf(EmptyMap).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Map_0) : false) {
      tmp = other.l();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EmptyMap).hashCode = function () {
    return 0;
  };
  protoOf(EmptyMap).toString = function () {
    return '{}';
  };
  protoOf(EmptyMap).k = function () {
    return 0;
  };
  protoOf(EmptyMap).l = function () {
    return true;
  };
  protoOf(EmptyMap).dc = function (key) {
    return false;
  };
  protoOf(EmptyMap).s1 = function (key) {
    if (!(key == null ? true : !(key == null)))
      return false;
    return this.dc((key == null ? true : !(key == null)) ? key : THROW_CCE());
  };
  protoOf(EmptyMap).ec = function (key) {
    return null;
  };
  protoOf(EmptyMap).u1 = function (key) {
    if (!(key == null ? true : !(key == null)))
      return null;
    return this.ec((key == null ? true : !(key == null)) ? key : THROW_CCE());
  };
  protoOf(EmptyMap).w1 = function () {
    return EmptySet_getInstance();
  };
  protoOf(EmptyMap).v1 = function () {
    return EmptyList_getInstance();
  };
  var EmptyMap_instance;
  function EmptyMap_getInstance() {
    if (EmptyMap_instance == null)
      new EmptyMap();
    return EmptyMap_instance;
  }
  function toMap_0(_this__u8e3s4, destination) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.toMap.<anonymous>' call
    putAll(destination, _this__u8e3s4);
    return destination;
  }
  function toMap_1(_this__u8e3s4, destination) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.toMap.<anonymous>' call
    putAll_0(destination, _this__u8e3s4);
    return destination;
  }
  function optimizeReadOnlyMap(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.k()) {
      case 0:
        tmp = emptyMap();
        break;
      case 1:
        // Inline function 'kotlin.collections.toSingletonMapOrSelf' call

        tmp = _this__u8e3s4;
        break;
      default:
        tmp = _this__u8e3s4;
        break;
    }
    return tmp;
  }
  function putAll(_this__u8e3s4, pairs) {
    var inductionVariable = 0;
    var last = pairs.length;
    while (inductionVariable < last) {
      var tmp1_loop_parameter = pairs[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var key = tmp1_loop_parameter.hc();
      var value = tmp1_loop_parameter.ic();
      _this__u8e3s4.v3(key, value);
    }
  }
  function putAll_0(_this__u8e3s4, pairs) {
    var tmp0_iterator = pairs.h();
    while (tmp0_iterator.i()) {
      var tmp1_loop_parameter = tmp0_iterator.j();
      var key = tmp1_loop_parameter.hc();
      var value = tmp1_loop_parameter.ic();
      _this__u8e3s4.v3(key, value);
    }
  }
  function hashMapOf(pairs) {
    // Inline function 'kotlin.apply' call
    var this_0 = HashMap_init_$Create$_0(mapCapacity(pairs.length));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.collections.hashMapOf.<anonymous>' call
    putAll(this_0, pairs);
    return this_0;
  }
  function removeAll(_this__u8e3s4, predicate) {
    return filterInPlace(_this__u8e3s4, predicate, true);
  }
  function retainAll(_this__u8e3s4, predicate) {
    return filterInPlace(_this__u8e3s4, predicate, false);
  }
  function removeAll_0(_this__u8e3s4, predicate) {
    return filterInPlace_0(_this__u8e3s4, predicate, true);
  }
  function convertToListIfNotCollection(_this__u8e3s4) {
    var tmp;
    if (isInterface(_this__u8e3s4, Collection)) {
      tmp = _this__u8e3s4;
    } else {
      tmp = toList_0(_this__u8e3s4);
    }
    return tmp;
  }
  function addAll(_this__u8e3s4, elements) {
    if (isInterface(elements, Collection))
      return _this__u8e3s4.q(elements);
    else {
      var result = false;
      var tmp1_iterator = elements.h();
      while (tmp1_iterator.i()) {
        var item = tmp1_iterator.j();
        if (_this__u8e3s4.e(item))
          result = true;
      }
      return result;
    }
  }
  function addAll_0(_this__u8e3s4, elements) {
    return _this__u8e3s4.q(asList(elements));
  }
  function retainAll_0(_this__u8e3s4, elements) {
    return _this__u8e3s4.u2(convertToListIfNotCollection(elements));
  }
  function filterInPlace(_this__u8e3s4, predicate, predicateResultToRemove) {
    var result = false;
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    var $this$with = _this__u8e3s4.h();
    while ($this$with.i())
      if (predicate($this$with.j()) === predicateResultToRemove) {
        $this$with.t2();
        result = true;
      }
    return result;
  }
  function filterInPlace_0(_this__u8e3s4, predicate, predicateResultToRemove) {
    if (!isInterface(_this__u8e3s4, RandomAccess)) {
      return filterInPlace(isInterface(_this__u8e3s4, MutableIterable) ? _this__u8e3s4 : THROW_CCE(), predicate, predicateResultToRemove);
    }
    var writeIndex = 0;
    var inductionVariable = 0;
    var last = get_lastIndex_0(_this__u8e3s4);
    if (inductionVariable <= last)
      $l$loop: do {
        var readIndex = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.m(readIndex);
        if (predicate(element) === predicateResultToRemove)
          continue $l$loop;
        if (!(writeIndex === readIndex)) {
          _this__u8e3s4.t(writeIndex, element);
        }
        writeIndex = writeIndex + 1 | 0;
      }
       while (!(readIndex === last));
    if (writeIndex < _this__u8e3s4.k()) {
      var inductionVariable_0 = get_lastIndex_0(_this__u8e3s4);
      var last_0 = writeIndex;
      if (last_0 <= inductionVariable_0)
        do {
          var removeIndex = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          _this__u8e3s4.z2(removeIndex);
        }
         while (!(removeIndex === last_0));
      return true;
    } else {
      return false;
    }
  }
  function IntIterator() {
  }
  protoOf(IntIterator).j = function () {
    return this.jc();
  };
  function CharIterator() {
  }
  protoOf(CharIterator).kc = function () {
    return this.lc();
  };
  protoOf(CharIterator).j = function () {
    return new Char(this.kc());
  };
  function asReversed(_this__u8e3s4) {
    return new ReversedListReadOnly(_this__u8e3s4);
  }
  function ReversedListReadOnly$listIterator$1(this$0, $index) {
    this.nc_1 = this$0;
    this.mc_1 = this$0.oc_1.r(reversePositionIndex(this$0, $index));
  }
  protoOf(ReversedListReadOnly$listIterator$1).i = function () {
    return this.mc_1.f3();
  };
  protoOf(ReversedListReadOnly$listIterator$1).f3 = function () {
    return this.mc_1.i();
  };
  protoOf(ReversedListReadOnly$listIterator$1).j = function () {
    return this.mc_1.g3();
  };
  protoOf(ReversedListReadOnly$listIterator$1).g3 = function () {
    return this.mc_1.j();
  };
  function ReversedListReadOnly(delegate) {
    AbstractList.call(this);
    this.oc_1 = delegate;
  }
  protoOf(ReversedListReadOnly).k = function () {
    return this.oc_1.k();
  };
  protoOf(ReversedListReadOnly).m = function (index) {
    return this.oc_1.m(reverseElementIndex(this, index));
  };
  protoOf(ReversedListReadOnly).h = function () {
    return this.r(0);
  };
  protoOf(ReversedListReadOnly).r = function (index) {
    return new ReversedListReadOnly$listIterator$1(this, index);
  };
  function reverseElementIndex(_this__u8e3s4, index) {
    var tmp;
    if (0 <= index ? index <= get_lastIndex_0(_this__u8e3s4) : false) {
      tmp = get_lastIndex_0(_this__u8e3s4) - index | 0;
    } else {
      throw IndexOutOfBoundsException_init_$Create$_0('Element index ' + index + ' must be in range [' + numberRangeToNumber(0, get_lastIndex_0(_this__u8e3s4)) + '].');
    }
    return tmp;
  }
  function reversePositionIndex(_this__u8e3s4, index) {
    var tmp;
    if (0 <= index ? index <= _this__u8e3s4.k() : false) {
      tmp = _this__u8e3s4.k() - index | 0;
    } else {
      throw IndexOutOfBoundsException_init_$Create$_0('Position index ' + index + ' must be in range [' + numberRangeToNumber(0, _this__u8e3s4.k()) + '].');
    }
    return tmp;
  }
  function sequence(block) {
    // Inline function 'kotlin.sequences.Sequence' call
    return new _no_name_provided__qut3iv_3(block);
  }
  function SequenceScope() {
  }
  protoOf(SequenceScope).rc = function (sequence, $completion) {
    return this.qc(sequence.h(), $completion);
  };
  function iterator(block) {
    var iterator = new SequenceBuilderIterator();
    iterator.vc_1 = createCoroutineUnintercepted(block, iterator, iterator);
    return iterator;
  }
  function nextNotReady($this) {
    if (!$this.i())
      throw NoSuchElementException_init_$Create$();
    else
      return $this.j();
  }
  function exceptionalState($this) {
    switch ($this.sc_1) {
      case 4:
        return NoSuchElementException_init_$Create$();
      case 5:
        return IllegalStateException_init_$Create$_0('Iterator has failed.');
      default:
        return IllegalStateException_init_$Create$_0('Unexpected state of the iterator: ' + $this.sc_1);
    }
  }
  function SequenceBuilderIterator() {
    SequenceScope.call(this);
    this.sc_1 = 0;
    this.tc_1 = null;
    this.uc_1 = null;
    this.vc_1 = null;
  }
  protoOf(SequenceBuilderIterator).i = function () {
    while (true) {
      switch (this.sc_1) {
        case 0:
          break;
        case 1:
          if (ensureNotNull(this.uc_1).i()) {
            this.sc_1 = 2;
            return true;
          } else {
            this.uc_1 = null;
          }

          break;
        case 4:
          return false;
        case 3:
        case 2:
          return true;
        default:
          throw exceptionalState(this);
      }
      this.sc_1 = 5;
      var step = ensureNotNull(this.vc_1);
      this.vc_1 = null;
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$0 = _Result___init__impl__xyqfz8(Unit_instance);
      step.w7(tmp$ret$0);
    }
  };
  protoOf(SequenceBuilderIterator).j = function () {
    switch (this.sc_1) {
      case 0:
      case 1:
        return nextNotReady(this);
      case 2:
        this.sc_1 = 1;
        return ensureNotNull(this.uc_1).j();
      case 3:
        this.sc_1 = 0;
        var tmp = this.tc_1;
        var result = (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
        this.tc_1 = null;
        return result;
      default:
        throw exceptionalState(this);
    }
  };
  protoOf(SequenceBuilderIterator).pc = function (value, $completion) {
    this.tc_1 = value;
    this.sc_1 = 3;
    // Inline function 'kotlin.sequences.SequenceBuilderIterator.yield.<anonymous>' call
    this.vc_1 = $completion;
    return get_COROUTINE_SUSPENDED();
  };
  protoOf(SequenceBuilderIterator).qc = function (iterator, $completion) {
    if (!iterator.i())
      return Unit_instance;
    this.uc_1 = iterator;
    this.sc_1 = 2;
    // Inline function 'kotlin.sequences.SequenceBuilderIterator.yieldAll.<anonymous>' call
    this.vc_1 = $completion;
    return get_COROUTINE_SUSPENDED();
  };
  protoOf(SequenceBuilderIterator).wc = function (result) {
    // Inline function 'kotlin.getOrThrow' call
    throwOnFailure(result);
    var tmp = _Result___get_value__impl__bjfvqg(result);
    (tmp == null ? true : !(tmp == null)) || THROW_CCE();
    this.sc_1 = 4;
  };
  protoOf(SequenceBuilderIterator).w7 = function (result) {
    return this.wc(result);
  };
  protoOf(SequenceBuilderIterator).r7 = function () {
    return EmptyCoroutineContext_getInstance();
  };
  function _no_name_provided__qut3iv_3($block) {
    this.xc_1 = $block;
  }
  protoOf(_no_name_provided__qut3iv_3).h = function () {
    // Inline function 'kotlin.sequences.sequence.<anonymous>' call
    return iterator(this.xc_1);
  };
  function sequenceOf(elements) {
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (elements.length === 0) {
      tmp = emptySequence();
    } else {
      tmp = asSequence(elements);
    }
    return tmp;
  }
  function generateSequence(seedFunction, nextFunction) {
    return new GeneratorSequence(seedFunction, nextFunction);
  }
  function TransformingSequence$iterator$1(this$0) {
    this.zc_1 = this$0;
    this.yc_1 = this$0.ad_1.h();
  }
  protoOf(TransformingSequence$iterator$1).j = function () {
    return this.zc_1.bd_1(this.yc_1.j());
  };
  protoOf(TransformingSequence$iterator$1).i = function () {
    return this.yc_1.i();
  };
  function TransformingSequence(sequence, transformer) {
    this.ad_1 = sequence;
    this.bd_1 = transformer;
  }
  protoOf(TransformingSequence).h = function () {
    return new TransformingSequence$iterator$1(this);
  };
  protoOf(TransformingSequence).cd = function (iterator) {
    return new FlatteningSequence(this.ad_1, this.bd_1, iterator);
  };
  function DistinctSequence(source, keySelector) {
    this.dd_1 = source;
    this.ed_1 = keySelector;
  }
  protoOf(DistinctSequence).h = function () {
    return new DistinctIterator(this.dd_1.h(), this.ed_1);
  };
  function calcNext($this) {
    while ($this.fd_1.i()) {
      var item = $this.fd_1.j();
      if ($this.id_1.ld_1(item) === $this.id_1.kd_1) {
        $this.hd_1 = item;
        $this.gd_1 = 1;
        return Unit_instance;
      }
    }
    $this.gd_1 = 0;
  }
  function FilteringSequence$iterator$1(this$0) {
    this.id_1 = this$0;
    this.fd_1 = this$0.jd_1.h();
    this.gd_1 = -1;
    this.hd_1 = null;
  }
  protoOf(FilteringSequence$iterator$1).j = function () {
    if (this.gd_1 === -1) {
      calcNext(this);
    }
    if (this.gd_1 === 0)
      throw NoSuchElementException_init_$Create$();
    var result = this.hd_1;
    this.hd_1 = null;
    this.gd_1 = -1;
    return (result == null ? true : !(result == null)) ? result : THROW_CCE();
  };
  protoOf(FilteringSequence$iterator$1).i = function () {
    if (this.gd_1 === -1) {
      calcNext(this);
    }
    return this.gd_1 === 1;
  };
  function FilteringSequence(sequence, sendWhen, predicate) {
    sendWhen = sendWhen === VOID ? true : sendWhen;
    this.jd_1 = sequence;
    this.kd_1 = sendWhen;
    this.ld_1 = predicate;
  }
  protoOf(FilteringSequence).h = function () {
    return new FilteringSequence$iterator$1(this);
  };
  function flatten_0(_this__u8e3s4) {
    return flatten_1(_this__u8e3s4, flatten$lambda);
  }
  function ensureItemIterator($this) {
    var itemIterator = $this.nd_1;
    if (!(itemIterator == null) ? itemIterator.i() : false) {
      $this.od_1 = 1;
      return true;
    }
    while ($this.md_1.i()) {
      var element = $this.md_1.j();
      var nextItemIterator = $this.pd_1.sd_1($this.pd_1.rd_1(element));
      if (nextItemIterator.i()) {
        $this.nd_1 = nextItemIterator;
        $this.od_1 = 1;
        return true;
      }
    }
    $this.od_1 = 2;
    $this.nd_1 = null;
    return false;
  }
  function FlatteningSequence$iterator$1(this$0) {
    this.pd_1 = this$0;
    this.md_1 = this$0.qd_1.h();
    this.nd_1 = null;
    this.od_1 = 0;
  }
  protoOf(FlatteningSequence$iterator$1).j = function () {
    if (this.od_1 === 2)
      throw NoSuchElementException_init_$Create$();
    if (this.od_1 === 0 ? !ensureItemIterator(this) : false) {
      throw NoSuchElementException_init_$Create$();
    }
    this.od_1 = 0;
    return ensureNotNull(this.nd_1).j();
  };
  protoOf(FlatteningSequence$iterator$1).i = function () {
    if (this.od_1 === 1)
      return true;
    if (this.od_1 === 2)
      return false;
    return ensureItemIterator(this);
  };
  function FlatteningSequence(sequence, transformer, iterator) {
    this.qd_1 = sequence;
    this.rd_1 = transformer;
    this.sd_1 = iterator;
  }
  protoOf(FlatteningSequence).h = function () {
    return new FlatteningSequence$iterator$1(this);
  };
  function emptySequence() {
    return EmptySequence_instance;
  }
  function DropTakeSequence() {
  }
  function TakeSequence$iterator$1(this$0) {
    this.td_1 = this$0.wd_1;
    this.ud_1 = this$0.vd_1.h();
  }
  protoOf(TakeSequence$iterator$1).j = function () {
    if (this.td_1 === 0)
      throw NoSuchElementException_init_$Create$();
    this.td_1 = this.td_1 - 1 | 0;
    return this.ud_1.j();
  };
  protoOf(TakeSequence$iterator$1).i = function () {
    return this.td_1 > 0 ? this.ud_1.i() : false;
  };
  function TakeSequence(sequence, count) {
    this.vd_1 = sequence;
    this.wd_1 = count;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.wd_1 >= 0)) {
      // Inline function 'kotlin.sequences.TakeSequence.<anonymous>' call
      var message = 'count must be non-negative, but was ' + this.wd_1 + '.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
  }
  protoOf(TakeSequence).y = function (n) {
    return n >= this.wd_1 ? this : new TakeSequence(this.vd_1, n);
  };
  protoOf(TakeSequence).h = function () {
    return new TakeSequence$iterator$1(this);
  };
  function calcNext_0($this) {
    $this.xd_1 = $this.yd_1 === -2 ? $this.zd_1.ae_1() : $this.zd_1.be_1(ensureNotNull($this.xd_1));
    $this.yd_1 = $this.xd_1 == null ? 0 : 1;
  }
  function GeneratorSequence$iterator$1(this$0) {
    this.zd_1 = this$0;
    this.xd_1 = null;
    this.yd_1 = -2;
  }
  protoOf(GeneratorSequence$iterator$1).j = function () {
    if (this.yd_1 < 0) {
      calcNext_0(this);
    }
    if (this.yd_1 === 0)
      throw NoSuchElementException_init_$Create$();
    var tmp = this.xd_1;
    var result = !(tmp == null) ? tmp : THROW_CCE();
    this.yd_1 = -1;
    return result;
  };
  protoOf(GeneratorSequence$iterator$1).i = function () {
    if (this.yd_1 < 0) {
      calcNext_0(this);
    }
    return this.yd_1 === 1;
  };
  function GeneratorSequence(getInitialValue, getNextValue) {
    this.ae_1 = getInitialValue;
    this.be_1 = getNextValue;
  }
  protoOf(GeneratorSequence).h = function () {
    return new GeneratorSequence$iterator$1(this);
  };
  function EmptySequence() {
  }
  protoOf(EmptySequence).h = function () {
    return EmptyIterator_instance;
  };
  protoOf(EmptySequence).y = function (n) {
    return EmptySequence_instance;
  };
  var EmptySequence_instance;
  function EmptySequence_getInstance() {
    return EmptySequence_instance;
  }
  function DistinctIterator(source, keySelector) {
    AbstractIterator.call(this);
    this.ee_1 = source;
    this.fe_1 = keySelector;
    this.ge_1 = HashSet_init_$Create$();
  }
  protoOf(DistinctIterator).hb = function () {
    while (this.ee_1.i()) {
      var next = this.ee_1.j();
      var key = this.fe_1(next);
      if (this.ge_1.e(key)) {
        this.ib(next);
        return Unit_instance;
      }
    }
    this.jb();
  };
  function flatten_1(_this__u8e3s4, iterator) {
    if (_this__u8e3s4 instanceof TransformingSequence) {
      return (_this__u8e3s4 instanceof TransformingSequence ? _this__u8e3s4 : THROW_CCE()).cd(iterator);
    }
    return new FlatteningSequence(_this__u8e3s4, flatten$lambda_0, iterator);
  }
  function flatten$lambda(it) {
    return it.h();
  }
  function flatten$lambda_0(it) {
    return it;
  }
  function emptySet() {
    return EmptySet_getInstance();
  }
  function mutableSetOf(elements) {
    return toCollection_0(elements, LinkedHashSet_init_$Create$_1(mapCapacity(elements.length)));
  }
  function EmptySet() {
    EmptySet_instance = this;
    this.he_1 = new Long(1993859828, 793161749);
  }
  protoOf(EmptySet).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Set) : false) {
      tmp = other.l();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EmptySet).hashCode = function () {
    return 0;
  };
  protoOf(EmptySet).toString = function () {
    return '[]';
  };
  protoOf(EmptySet).k = function () {
    return 0;
  };
  protoOf(EmptySet).l = function () {
    return true;
  };
  protoOf(EmptySet).wb = function (element) {
    return false;
  };
  protoOf(EmptySet).a1 = function (element) {
    if (true)
      return false;
    var tmp;
    if (false) {} else {
      tmp = THROW_CCE();
    }
    return this.wb(tmp);
  };
  protoOf(EmptySet).xb = function (elements) {
    return elements.l();
  };
  protoOf(EmptySet).o1 = function (elements) {
    return this.xb(elements);
  };
  protoOf(EmptySet).h = function () {
    return EmptyIterator_instance;
  };
  var EmptySet_instance;
  function EmptySet_getInstance() {
    if (EmptySet_instance == null)
      new EmptySet();
    return EmptySet_instance;
  }
  function optimizeReadOnlySet(_this__u8e3s4) {
    switch (_this__u8e3s4.k()) {
      case 0:
        return emptySet();
      case 1:
        return setOf(_this__u8e3s4.h().j());
      default:
        return _this__u8e3s4;
    }
  }
  function hashSetOf(elements) {
    return toCollection_0(elements, HashSet_init_$Create$_0(mapCapacity(elements.length)));
  }
  function checkWindowSizeStep(size, step) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(size > 0 ? step > 0 : false)) {
      // Inline function 'kotlin.collections.checkWindowSizeStep.<anonymous>' call
      var message = !(size === step) ? 'Both size ' + size + ' and step ' + step + ' must be greater than zero.' : 'size ' + size + ' must be greater than zero.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
  }
  function windowedIterator(iterator_0, size, step, partialWindows, reuseBuffer) {
    if (!iterator_0.i())
      return EmptyIterator_instance;
    return iterator(windowedIterator$slambda_0(size, step, iterator_0, reuseBuffer, partialWindows, null));
  }
  function RingBuffer_init_$Init$(capacity, $this) {
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp$ret$0 = fillArrayVal(Array(capacity), null);
    RingBuffer.call($this, tmp$ret$0, 0);
    return $this;
  }
  function RingBuffer_init_$Create$(capacity) {
    return RingBuffer_init_$Init$(capacity, objectCreate(protoOf(RingBuffer)));
  }
  function RingBuffer$iterator$1(this$0) {
    this.me_1 = this$0;
    AbstractIterator.call(this);
    this.ke_1 = this$0.qe_1;
    this.le_1 = this$0.pe_1;
  }
  protoOf(RingBuffer$iterator$1).hb = function () {
    if (this.ke_1 === 0) {
      this.jb();
    } else {
      var tmp = this.me_1.ne_1[this.le_1];
      this.ib((tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE());
      var tmp_0 = this;
      // Inline function 'kotlin.collections.RingBuffer.forward' call
      var this_0 = this.me_1;
      tmp_0.le_1 = (this.le_1 + 1 | 0) % this_0.oe_1 | 0;
      this.ke_1 = this.ke_1 - 1 | 0;
    }
  };
  function RingBuffer(buffer, filledSize) {
    AbstractList.call(this);
    this.ne_1 = buffer;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(filledSize >= 0)) {
      // Inline function 'kotlin.collections.RingBuffer.<anonymous>' call
      var message = 'ring buffer filled size should not be negative but it is ' + filledSize;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(filledSize <= this.ne_1.length)) {
      // Inline function 'kotlin.collections.RingBuffer.<anonymous>' call
      var message_0 = 'ring buffer filled size: ' + filledSize + ' cannot be larger than the buffer size: ' + this.ne_1.length;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_0));
    }
    this.oe_1 = this.ne_1.length;
    this.pe_1 = 0;
    this.qe_1 = filledSize;
  }
  protoOf(RingBuffer).k = function () {
    return this.qe_1;
  };
  protoOf(RingBuffer).m = function (index) {
    Companion_instance_5.m3(index, this.qe_1);
    // Inline function 'kotlin.collections.RingBuffer.forward' call
    var tmp$ret$0 = (this.pe_1 + index | 0) % this.oe_1 | 0;
    var tmp = this.ne_1[tmp$ret$0];
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(RingBuffer).re = function () {
    return this.qe_1 === this.oe_1;
  };
  protoOf(RingBuffer).h = function () {
    return new RingBuffer$iterator$1(this);
  };
  protoOf(RingBuffer).se = function (array) {
    var tmp;
    if (array.length < this.qe_1) {
      tmp = copyOf_0(array, this.qe_1);
    } else {
      tmp = isArray(array) ? array : THROW_CCE();
    }
    var result = tmp;
    var size = this.qe_1;
    var widx = 0;
    var idx = this.pe_1;
    while (widx < size ? idx < this.oe_1 : false) {
      var tmp_0 = widx;
      var tmp_1 = this.ne_1[idx];
      result[tmp_0] = (tmp_1 == null ? true : !(tmp_1 == null)) ? tmp_1 : THROW_CCE();
      widx = widx + 1 | 0;
      idx = idx + 1 | 0;
    }
    idx = 0;
    while (widx < size) {
      var tmp_2 = widx;
      var tmp_3 = this.ne_1[idx];
      result[tmp_2] = (tmp_3 == null ? true : !(tmp_3 == null)) ? tmp_3 : THROW_CCE();
      widx = widx + 1 | 0;
      idx = idx + 1 | 0;
    }
    var tmp_4 = terminateCollectionToArray(size, result);
    return isArray(tmp_4) ? tmp_4 : THROW_CCE();
  };
  protoOf(RingBuffer).d4 = function () {
    // Inline function 'kotlin.arrayOfNulls' call
    var size = this.qe_1;
    var tmp$ret$0 = fillArrayVal(Array(size), null);
    return this.se(tmp$ret$0);
  };
  protoOf(RingBuffer).toArray = function () {
    return this.d4();
  };
  protoOf(RingBuffer).te = function (maxCapacity) {
    var newCapacity = coerceAtMost((this.oe_1 + (this.oe_1 >> 1) | 0) + 1 | 0, maxCapacity);
    var tmp;
    if (this.pe_1 === 0) {
      tmp = copyOf_0(this.ne_1, newCapacity);
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp$ret$0 = fillArrayVal(Array(newCapacity), null);
      tmp = this.se(tmp$ret$0);
    }
    var newBuffer = tmp;
    return new RingBuffer(newBuffer, this.qe_1);
  };
  protoOf(RingBuffer).ue = function (element) {
    if (this.re()) {
      throw IllegalStateException_init_$Create$_0('ring buffer is full');
    }
    // Inline function 'kotlin.collections.RingBuffer.forward' call
    var tmp$ret$0 = (this.pe_1 + this.qe_1 | 0) % this.oe_1 | 0;
    this.ne_1[tmp$ret$0] = element;
    this.qe_1 = this.qe_1 + 1 | 0;
  };
  protoOf(RingBuffer).ve = function (n) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(n >= 0)) {
      // Inline function 'kotlin.collections.RingBuffer.removeFirst.<anonymous>' call
      var message = "n shouldn't be negative but it is " + n;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(n <= this.qe_1)) {
      // Inline function 'kotlin.collections.RingBuffer.removeFirst.<anonymous>' call
      var message_0 = "n shouldn't be greater than the buffer size: n = " + n + ', size = ' + this.qe_1;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message_0));
    }
    if (n > 0) {
      var start = this.pe_1;
      // Inline function 'kotlin.collections.RingBuffer.forward' call
      var end = (start + n | 0) % this.oe_1 | 0;
      if (start > end) {
        fill_0(this.ne_1, null, start, this.oe_1);
        fill_0(this.ne_1, null, 0, end);
      } else {
        fill_0(this.ne_1, null, start, end);
      }
      this.pe_1 = end;
      this.qe_1 = this.qe_1 - n | 0;
    }
  };
  function windowedIterator$slambda($size, $step, $iterator, $reuseBuffer, $partialWindows, resultContinuation) {
    this.ef_1 = $size;
    this.ff_1 = $step;
    this.gf_1 = $iterator;
    this.hf_1 = $reuseBuffer;
    this.if_1 = $partialWindows;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(windowedIterator$slambda).tf = function ($this$iterator, $completion) {
    var tmp = this.uf($this$iterator, $completion);
    tmp.m7_1 = Unit_instance;
    tmp.n7_1 = null;
    return tmp.v7();
  };
  protoOf(windowedIterator$slambda).i8 = function (p1, $completion) {
    return this.tf(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(windowedIterator$slambda).v7 = function () {
    var suspendResult = this.m7_1;
    $sm: do
      try {
        var tmp = this.k7_1;
        switch (tmp) {
          case 0:
            this.l7_1 = 21;
            this.kf_1 = coerceAtMost(this.ef_1, 1024);
            this.lf_1 = this.ff_1 - this.ef_1 | 0;
            if (this.lf_1 >= 0) {
              this.mf_1 = ArrayList_init_$Create$_0(this.kf_1);
              this.nf_1 = 0;
              var tmp_0 = this;
              tmp_0.of_1 = this.gf_1;
              this.k7_1 = 12;
              continue $sm;
            } else {
              this.pf_1 = RingBuffer_init_$Create$(this.kf_1);
              var tmp_1 = this;
              tmp_1.qf_1 = this.gf_1;
              this.k7_1 = 1;
              continue $sm;
            }

          case 1:
            if (!this.qf_1.i()) {
              this.k7_1 = 5;
              continue $sm;
            }

            this.rf_1 = this.qf_1.j();
            this.pf_1.ue(this.rf_1);
            if (this.pf_1.re()) {
              if (this.pf_1.qe_1 < this.ef_1) {
                this.pf_1 = this.pf_1.te(this.ef_1);
                this.k7_1 = 1;
                continue $sm;
              } else {
                this.k7_1 = 2;
                continue $sm;
              }
            } else {
              this.k7_1 = 4;
              continue $sm;
            }

          case 2:
            this.k7_1 = 3;
            suspendResult = this.jf_1.pc(this.hf_1 ? this.pf_1 : ArrayList_init_$Create$_1(this.pf_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.pf_1.ve(this.ff_1);
            this.k7_1 = 4;
            continue $sm;
          case 4:
            this.k7_1 = 1;
            continue $sm;
          case 5:
            if (this.if_1) {
              this.k7_1 = 6;
              continue $sm;
            } else {
              this.k7_1 = 11;
              continue $sm;
            }

          case 6:
            if (!(this.pf_1.qe_1 > this.ff_1)) {
              this.k7_1 = 8;
              continue $sm;
            }

            this.k7_1 = 7;
            suspendResult = this.jf_1.pc(this.hf_1 ? this.pf_1 : ArrayList_init_$Create$_1(this.pf_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.pf_1.ve(this.ff_1);
            this.k7_1 = 6;
            continue $sm;
          case 8:
            if (!this.pf_1.l()) {
              this.k7_1 = 9;
              suspendResult = this.jf_1.pc(this.pf_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.k7_1 = 10;
              continue $sm;
            }

          case 9:
            this.k7_1 = 10;
            continue $sm;
          case 10:
            this.k7_1 = 11;
            continue $sm;
          case 11:
            this.k7_1 = 20;
            continue $sm;
          case 12:
            if (!this.of_1.i()) {
              this.k7_1 = 16;
              continue $sm;
            }

            this.sf_1 = this.of_1.j();
            if (this.nf_1 > 0) {
              this.nf_1 = this.nf_1 - 1 | 0;
              this.k7_1 = 12;
              continue $sm;
            } else {
              this.k7_1 = 13;
              continue $sm;
            }

          case 13:
            this.mf_1.e(this.sf_1);
            if (this.mf_1.k() === this.ef_1) {
              this.k7_1 = 14;
              suspendResult = this.jf_1.pc(this.mf_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.k7_1 = 15;
              continue $sm;
            }

          case 14:
            if (this.hf_1) {
              this.mf_1.c4();
            } else
              this.mf_1 = ArrayList_init_$Create$_0(this.ef_1);
            this.nf_1 = this.lf_1;
            this.k7_1 = 15;
            continue $sm;
          case 15:
            this.k7_1 = 12;
            continue $sm;
          case 16:
            if (!this.mf_1.l()) {
              if (this.if_1 ? true : this.mf_1.k() === this.ef_1) {
                this.k7_1 = 17;
                suspendResult = this.jf_1.pc(this.mf_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.k7_1 = 18;
                continue $sm;
              }
            } else {
              this.k7_1 = 19;
              continue $sm;
            }

          case 17:
            this.k7_1 = 18;
            continue $sm;
          case 18:
            this.k7_1 = 19;
            continue $sm;
          case 19:
            this.k7_1 = 20;
            continue $sm;
          case 20:
            return Unit_instance;
          case 21:
            throw this.n7_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.l7_1 === 21) {
          throw e;
        } else {
          this.k7_1 = this.l7_1;
          this.n7_1 = e;
        }
      }
     while (true);
  };
  protoOf(windowedIterator$slambda).uf = function ($this$iterator, completion) {
    var i = new windowedIterator$slambda(this.ef_1, this.ff_1, this.gf_1, this.hf_1, this.if_1, completion);
    i.jf_1 = $this$iterator;
    return i;
  };
  function windowedIterator$slambda_0($size, $step, $iterator, $reuseBuffer, $partialWindows, resultContinuation) {
    var i = new windowedIterator$slambda($size, $step, $iterator, $reuseBuffer, $partialWindows, resultContinuation);
    var l = function ($this$iterator, $completion) {
      return i.tf($this$iterator, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function compareBy(selectors) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(selectors.length > 0)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    var tmp = compareBy$lambda(selectors);
    return new sam$kotlin_Comparator$0_0(tmp);
  }
  function naturalOrder() {
    var tmp = NaturalOrderComparator_instance;
    return isInterface(tmp, Comparator) ? tmp : THROW_CCE();
  }
  function compareValuesByImpl(a, b, selectors) {
    var inductionVariable = 0;
    var last = selectors.length;
    while (inductionVariable < last) {
      var fn = selectors[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var v1 = fn(a);
      var v2 = fn(b);
      var diff = compareValues(v1, v2);
      if (!(diff === 0))
        return diff;
    }
    return 0;
  }
  function NaturalOrderComparator() {
  }
  protoOf(NaturalOrderComparator).vf = function (a, b) {
    return compareTo(a, b);
  };
  protoOf(NaturalOrderComparator).compare = function (a, b) {
    var tmp = (!(a == null) ? isComparable(a) : false) ? a : THROW_CCE();
    return this.vf(tmp, (!(b == null) ? isComparable(b) : false) ? b : THROW_CCE());
  };
  var NaturalOrderComparator_instance;
  function NaturalOrderComparator_getInstance() {
    return NaturalOrderComparator_instance;
  }
  function compareValues(a, b) {
    if (a === b)
      return 0;
    if (a == null)
      return -1;
    if (b == null)
      return 1;
    return compareTo((!(a == null) ? isComparable(a) : false) ? a : THROW_CCE(), b);
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.wf_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).za = function (a, b) {
    return this.wf_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.za(a, b);
  };
  function compareBy$lambda($selectors) {
    return function (a, b) {
      return compareValuesByImpl(a, b, $selectors);
    };
  }
  function Continuation() {
  }
  function Key() {
  }
  var Key_instance;
  function Key_getInstance() {
    return Key_instance;
  }
  function ContinuationInterceptor() {
  }
  function EmptyCoroutineContext() {
    EmptyCoroutineContext_instance = this;
    this.xf_1 = new Long(0, 0);
  }
  protoOf(EmptyCoroutineContext).s7 = function (key) {
    return null;
  };
  protoOf(EmptyCoroutineContext).hashCode = function () {
    return 0;
  };
  protoOf(EmptyCoroutineContext).toString = function () {
    return 'EmptyCoroutineContext';
  };
  var EmptyCoroutineContext_instance;
  function EmptyCoroutineContext_getInstance() {
    if (EmptyCoroutineContext_instance == null)
      new EmptyCoroutineContext();
    return EmptyCoroutineContext_instance;
  }
  function get_COROUTINE_SUSPENDED() {
    return CoroutineSingletons_COROUTINE_SUSPENDED_getInstance();
  }
  var CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  var CoroutineSingletons_UNDECIDED_instance;
  var CoroutineSingletons_RESUMED_instance;
  var CoroutineSingletons_entriesInitialized;
  function CoroutineSingletons_initEntries() {
    if (CoroutineSingletons_entriesInitialized)
      return Unit_instance;
    CoroutineSingletons_entriesInitialized = true;
    CoroutineSingletons_COROUTINE_SUSPENDED_instance = new CoroutineSingletons('COROUTINE_SUSPENDED', 0);
    CoroutineSingletons_UNDECIDED_instance = new CoroutineSingletons('UNDECIDED', 1);
    CoroutineSingletons_RESUMED_instance = new CoroutineSingletons('RESUMED', 2);
  }
  function CoroutineSingletons(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function CoroutineSingletons_COROUTINE_SUSPENDED_getInstance() {
    CoroutineSingletons_initEntries();
    return CoroutineSingletons_COROUTINE_SUSPENDED_instance;
  }
  function getProgressionLastElement(start, end, step) {
    var tmp;
    if (step > 0) {
      tmp = start >= end ? end : end - differenceModulo(end, start, step) | 0;
    } else if (step < 0) {
      tmp = start <= end ? end : end + differenceModulo(start, end, -step | 0) | 0;
    } else {
      throw IllegalArgumentException_init_$Create$_0('Step is zero.');
    }
    return tmp;
  }
  function differenceModulo(a, b, c) {
    return mod(mod(a, c) - mod(b, c) | 0, c);
  }
  function mod(a, b) {
    var mod = a % b | 0;
    return mod >= 0 ? mod : mod + b | 0;
  }
  function Default() {
    Default_instance = this;
    Random.call(this);
    this.yf_1 = defaultPlatformRandom();
  }
  protoOf(Default).zf = function (bitCount) {
    return this.yf_1.zf(bitCount);
  };
  protoOf(Default).jc = function () {
    return this.yf_1.jc();
  };
  protoOf(Default).s = function (until) {
    return this.yf_1.s(until);
  };
  protoOf(Default).ag = function (from, until) {
    return this.yf_1.ag(from, until);
  };
  protoOf(Default).bg = function () {
    return this.yf_1.bg();
  };
  var Default_instance;
  function Default_getInstance() {
    if (Default_instance == null)
      new Default();
    return Default_instance;
  }
  function Random() {
    Default_getInstance();
  }
  protoOf(Random).jc = function () {
    return this.zf(32);
  };
  protoOf(Random).s = function (until) {
    return this.ag(0, until);
  };
  protoOf(Random).ag = function (from, until) {
    checkRangeBounds(from, until);
    var n = until - from | 0;
    if (n > 0 ? true : n === -2147483648) {
      var tmp;
      if ((n & (-n | 0)) === n) {
        var bitCount = fastLog2(n);
        tmp = this.zf(bitCount);
      } else {
        var v;
        do {
          var bits = this.jc() >>> 1 | 0;
          v = bits % n | 0;
        }
         while (((bits - v | 0) + (n - 1 | 0) | 0) < 0);
        tmp = v;
      }
      var rnd = tmp;
      return from + rnd | 0;
    } else {
      while (true) {
        var rnd_0 = this.jc();
        if (from <= rnd_0 ? rnd_0 < until : false)
          return rnd_0;
      }
    }
  };
  protoOf(Random).bg = function () {
    return doubleFromParts(this.zf(26), this.zf(27));
  };
  function Random_0(seed) {
    return XorWowRandom_init_$Create$(seed, seed >> 31);
  }
  function checkRangeBounds(from, until) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!(until > from)) {
      // Inline function 'kotlin.random.checkRangeBounds.<anonymous>' call
      var message = boundsErrorMessage(from, until);
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    return tmp;
  }
  function fastLog2(value) {
    // Inline function 'kotlin.countLeadingZeroBits' call
    return 31 - clz32(value) | 0;
  }
  function boundsErrorMessage(from, until) {
    return 'Random range is empty: [' + toString_1(from) + ', ' + toString_1(until) + ').';
  }
  function takeUpperBits(_this__u8e3s4, bitCount) {
    return (_this__u8e3s4 >>> (32 - bitCount | 0) | 0) & (-bitCount | 0) >> 31;
  }
  function XorWowRandom_init_$Init$(seed1, seed2, $this) {
    XorWowRandom.call($this, seed1, seed2, 0, 0, ~seed1, seed1 << 10 ^ (seed2 >>> 4 | 0));
    return $this;
  }
  function XorWowRandom_init_$Create$(seed1, seed2) {
    return XorWowRandom_init_$Init$(seed1, seed2, objectCreate(protoOf(XorWowRandom)));
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.cg_1 = new Long(0, 0);
  }
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function XorWowRandom(x, y, z, w, v, addend) {
    Companion_getInstance_8();
    Random.call(this);
    this.dg_1 = x;
    this.eg_1 = y;
    this.fg_1 = z;
    this.gg_1 = w;
    this.hg_1 = v;
    this.ig_1 = addend;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!((this.dg_1 | this.eg_1 | this.fg_1 | this.gg_1 | this.hg_1) === 0)) {
      // Inline function 'kotlin.random.XorWowRandom.<anonymous>' call
      var message = 'Initial state must have at least one non-zero element.';
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < 64)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.random.XorWowRandom.<anonymous>' call
        this.jc();
      }
       while (inductionVariable < 64);
  }
  protoOf(XorWowRandom).jc = function () {
    var t = this.dg_1;
    t = t ^ (t >>> 2 | 0);
    this.dg_1 = this.eg_1;
    this.eg_1 = this.fg_1;
    this.fg_1 = this.gg_1;
    var v0 = this.hg_1;
    this.gg_1 = v0;
    t = t ^ t << 1 ^ v0 ^ v0 << 4;
    this.hg_1 = t;
    this.ig_1 = this.ig_1 + 362437 | 0;
    return t + this.ig_1 | 0;
  };
  protoOf(XorWowRandom).zf = function (bitCount) {
    return takeUpperBits(this.jc(), bitCount);
  };
  function Companion_9() {
    Companion_instance_9 = this;
    this.v_1 = new IntRange(1, 0);
  }
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function IntRange(start, endInclusive) {
    Companion_getInstance_9();
    IntProgression.call(this, start, endInclusive, 1);
  }
  protoOf(IntRange).ja = function () {
    return this.jg_1;
  };
  protoOf(IntRange).ka = function () {
    return this.kg_1;
  };
  protoOf(IntRange).l = function () {
    return this.jg_1 > this.kg_1;
  };
  protoOf(IntRange).equals = function (other) {
    var tmp;
    if (other instanceof IntRange) {
      tmp = (this.l() ? other.l() : false) ? true : this.jg_1 === other.jg_1 ? this.kg_1 === other.kg_1 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IntRange).hashCode = function () {
    return this.l() ? -1 : imul(31, this.jg_1) + this.kg_1 | 0;
  };
  protoOf(IntRange).toString = function () {
    return '' + this.jg_1 + '..' + this.kg_1;
  };
  function Companion_10() {
    Companion_instance_10 = this;
    this.mg_1 = new CharRange(_Char___init__impl__6a9atx(1), _Char___init__impl__6a9atx(0));
  }
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function CharRange(start, endInclusive) {
    Companion_getInstance_10();
    CharProgression.call(this, start, endInclusive, 1);
  }
  protoOf(CharRange).l = function () {
    return Char__compareTo_impl_ypi4mb(this.qg_1, this.rg_1) > 0;
  };
  protoOf(CharRange).equals = function (other) {
    var tmp;
    if (other instanceof CharRange) {
      tmp = (this.l() ? other.l() : false) ? true : this.qg_1 === other.qg_1 ? this.rg_1 === other.rg_1 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CharRange).hashCode = function () {
    var tmp;
    if (this.l()) {
      tmp = -1;
    } else {
      // Inline function 'kotlin.code' call
      var this_0 = this.qg_1;
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      var tmp_0 = imul(31, tmp$ret$0);
      // Inline function 'kotlin.code' call
      var this_1 = this.rg_1;
      tmp = tmp_0 + Char__toInt_impl_vasixd(this_1) | 0;
    }
    return tmp;
  };
  protoOf(CharRange).toString = function () {
    return toString(this.qg_1) + '..' + toString(this.rg_1);
  };
  function IntProgressionIterator(first, last, step) {
    IntIterator.call(this);
    this.tg_1 = step;
    this.ug_1 = last;
    this.vg_1 = this.tg_1 > 0 ? first <= last : first >= last;
    this.wg_1 = this.vg_1 ? first : this.ug_1;
  }
  protoOf(IntProgressionIterator).i = function () {
    return this.vg_1;
  };
  protoOf(IntProgressionIterator).jc = function () {
    var value = this.wg_1;
    if (value === this.ug_1) {
      if (!this.vg_1)
        throw NoSuchElementException_init_$Create$();
      this.vg_1 = false;
    } else {
      this.wg_1 = this.wg_1 + this.tg_1 | 0;
    }
    return value;
  };
  function CharProgressionIterator(first, last, step) {
    CharIterator.call(this);
    this.xg_1 = step;
    var tmp = this;
    // Inline function 'kotlin.code' call
    tmp.yg_1 = Char__toInt_impl_vasixd(last);
    this.zg_1 = this.xg_1 > 0 ? Char__compareTo_impl_ypi4mb(first, last) <= 0 : Char__compareTo_impl_ypi4mb(first, last) >= 0;
    var tmp_0 = this;
    var tmp_1;
    if (this.zg_1) {
      // Inline function 'kotlin.code' call
      tmp_1 = Char__toInt_impl_vasixd(first);
    } else {
      tmp_1 = this.yg_1;
    }
    tmp_0.ah_1 = tmp_1;
  }
  protoOf(CharProgressionIterator).i = function () {
    return this.zg_1;
  };
  protoOf(CharProgressionIterator).lc = function () {
    var value = this.ah_1;
    if (value === this.yg_1) {
      if (!this.zg_1)
        throw NoSuchElementException_init_$Create$();
      this.zg_1 = false;
    } else {
      this.ah_1 = this.ah_1 + this.xg_1 | 0;
    }
    return numberToChar(value);
  };
  function Companion_11() {
  }
  protoOf(Companion_11).w = function (rangeStart, rangeEnd, step) {
    return new IntProgression(rangeStart, rangeEnd, step);
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    return Companion_instance_11;
  }
  function IntProgression(start, endInclusive, step) {
    if (step === 0)
      throw IllegalArgumentException_init_$Create$_0('Step must be non-zero.');
    if (step === -2147483648)
      throw IllegalArgumentException_init_$Create$_0('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this.jg_1 = start;
    this.kg_1 = getProgressionLastElement(start, endInclusive, step);
    this.lg_1 = step;
  }
  protoOf(IntProgression).h = function () {
    return new IntProgressionIterator(this.jg_1, this.kg_1, this.lg_1);
  };
  protoOf(IntProgression).l = function () {
    return this.lg_1 > 0 ? this.jg_1 > this.kg_1 : this.jg_1 < this.kg_1;
  };
  protoOf(IntProgression).equals = function (other) {
    var tmp;
    if (other instanceof IntProgression) {
      tmp = (this.l() ? other.l() : false) ? true : (this.jg_1 === other.jg_1 ? this.kg_1 === other.kg_1 : false) ? this.lg_1 === other.lg_1 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(IntProgression).hashCode = function () {
    return this.l() ? -1 : imul(31, imul(31, this.jg_1) + this.kg_1 | 0) + this.lg_1 | 0;
  };
  protoOf(IntProgression).toString = function () {
    return this.lg_1 > 0 ? '' + this.jg_1 + '..' + this.kg_1 + ' step ' + this.lg_1 : '' + this.jg_1 + ' downTo ' + this.kg_1 + ' step ' + (-this.lg_1 | 0);
  };
  function Companion_12() {
  }
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function CharProgression(start, endInclusive, step) {
    if (step === 0)
      throw IllegalArgumentException_init_$Create$_0('Step must be non-zero.');
    if (step === -2147483648)
      throw IllegalArgumentException_init_$Create$_0('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this.qg_1 = start;
    var tmp = this;
    // Inline function 'kotlin.code' call
    var tmp_0 = Char__toInt_impl_vasixd(start);
    // Inline function 'kotlin.code' call
    var tmp$ret$1 = Char__toInt_impl_vasixd(endInclusive);
    tmp.rg_1 = numberToChar(getProgressionLastElement(tmp_0, tmp$ret$1, step));
    this.sg_1 = step;
  }
  protoOf(CharProgression).h = function () {
    return new CharProgressionIterator(this.qg_1, this.rg_1, this.sg_1);
  };
  protoOf(CharProgression).l = function () {
    return this.sg_1 > 0 ? Char__compareTo_impl_ypi4mb(this.qg_1, this.rg_1) > 0 : Char__compareTo_impl_ypi4mb(this.qg_1, this.rg_1) < 0;
  };
  protoOf(CharProgression).equals = function (other) {
    var tmp;
    if (other instanceof CharProgression) {
      tmp = (this.l() ? other.l() : false) ? true : (this.qg_1 === other.qg_1 ? this.rg_1 === other.rg_1 : false) ? this.sg_1 === other.sg_1 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CharProgression).hashCode = function () {
    var tmp;
    if (this.l()) {
      tmp = -1;
    } else {
      // Inline function 'kotlin.code' call
      var this_0 = this.qg_1;
      var tmp$ret$0 = Char__toInt_impl_vasixd(this_0);
      var tmp_0 = imul(31, tmp$ret$0);
      // Inline function 'kotlin.code' call
      var this_1 = this.rg_1;
      var tmp$ret$1 = Char__toInt_impl_vasixd(this_1);
      tmp = imul(31, tmp_0 + tmp$ret$1 | 0) + this.sg_1 | 0;
    }
    return tmp;
  };
  protoOf(CharProgression).toString = function () {
    return this.sg_1 > 0 ? toString(this.qg_1) + '..' + toString(this.rg_1) + ' step ' + this.sg_1 : toString(this.qg_1) + ' downTo ' + toString(this.rg_1) + ' step ' + (-this.sg_1 | 0);
  };
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null)) {
      _this__u8e3s4.f(transform(element));
    } else {
      if (element == null ? true : isCharSequence(element)) {
        _this__u8e3s4.f(element);
      } else {
        if (element instanceof Char) {
          _this__u8e3s4.r6(element.c1_1);
        } else {
          _this__u8e3s4.f(toString_0(element));
        }
      }
    }
  }
  function equals_0(_this__u8e3s4, other, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    if (_this__u8e3s4 === other)
      return true;
    if (!ignoreCase)
      return false;
    var thisUpper = uppercaseChar(_this__u8e3s4);
    var otherUpper = uppercaseChar(other);
    var tmp;
    if (thisUpper === otherUpper) {
      tmp = true;
    } else {
      // Inline function 'kotlin.text.lowercaseChar' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$2 = toString(thisUpper).toLowerCase();
      var tmp_0 = charSequenceGet(tmp$ret$2, 0);
      // Inline function 'kotlin.text.lowercaseChar' call
      // Inline function 'kotlin.text.lowercase' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$6 = toString(otherUpper).toLowerCase();
      tmp = tmp_0 === charSequenceGet(tmp$ret$6, 0);
    }
    return tmp;
  }
  function get_lastIndex_1(_this__u8e3s4) {
    return charSequenceLength(_this__u8e3s4) - 1 | 0;
  }
  function split(_this__u8e3s4, delimiters, ignoreCase, limit) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    limit = limit === VOID ? 0 : limit;
    if (delimiters.length === 1) {
      return split_1(_this__u8e3s4, toString(delimiters[0]), ignoreCase, limit);
    }
    // Inline function 'kotlin.collections.map' call
    var this_0 = asIterable(rangesDelimitedBy(_this__u8e3s4, delimiters, VOID, ignoreCase, limit));
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'kotlin.text.split.<anonymous>' call
      var tmp$ret$0 = substring_0(_this__u8e3s4, item);
      destination.e(tmp$ret$0);
    }
    return destination;
  }
  function split_0(_this__u8e3s4, delimiters, ignoreCase, limit) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    limit = limit === VOID ? 0 : limit;
    if (delimiters.length === 1) {
      var delimiter = delimiters[0];
      // Inline function 'kotlin.text.isEmpty' call
      if (!(charSequenceLength(delimiter) === 0)) {
        return split_1(_this__u8e3s4, delimiter, ignoreCase, limit);
      }
    }
    // Inline function 'kotlin.collections.map' call
    var this_0 = asIterable(rangesDelimitedBy_0(_this__u8e3s4, delimiters, VOID, ignoreCase, limit));
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.h();
    while (tmp0_iterator.i()) {
      var item = tmp0_iterator.j();
      // Inline function 'kotlin.text.split.<anonymous>' call
      var tmp$ret$1 = substring_0(_this__u8e3s4, item);
      destination.e(tmp$ret$1);
    }
    return destination;
  }
  function substring(_this__u8e3s4, range) {
    // Inline function 'kotlin.text.substring' call
    var startIndex = range.ja();
    var endIndex = range.ka() + 1 | 0;
    // Inline function 'kotlin.js.asDynamic' call
    return _this__u8e3s4.substring(startIndex, endIndex);
  }
  function contains_0(_this__u8e3s4, other, ignoreCase) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    var tmp;
    if (typeof other === 'string') {
      tmp = indexOf_0(_this__u8e3s4, other, VOID, ignoreCase) >= 0;
    } else {
      tmp = indexOf_1(_this__u8e3s4, other, 0, charSequenceLength(_this__u8e3s4), ignoreCase) >= 0;
    }
    return tmp;
  }
  function lines(_this__u8e3s4) {
    return toList_1(lineSequence(_this__u8e3s4));
  }
  function padEnd(_this__u8e3s4, length, padChar) {
    padChar = padChar === VOID ? _Char___init__impl__6a9atx(32) : padChar;
    return toString_1(padEnd_0(isCharSequence(_this__u8e3s4) ? _this__u8e3s4 : THROW_CCE(), length, padChar));
  }
  function substringBefore(_this__u8e3s4, delimiter, missingDelimiterValue) {
    missingDelimiterValue = missingDelimiterValue === VOID ? _this__u8e3s4 : missingDelimiterValue;
    var index = indexOf_0(_this__u8e3s4, delimiter);
    var tmp;
    if (index === -1) {
      tmp = missingDelimiterValue;
    } else {
      // Inline function 'kotlin.text.substring' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = _this__u8e3s4.substring(0, index);
    }
    return tmp;
  }
  function padStart(_this__u8e3s4, length, padChar) {
    padChar = padChar === VOID ? _Char___init__impl__6a9atx(32) : padChar;
    return toString_1(padStart_0(isCharSequence(_this__u8e3s4) ? _this__u8e3s4 : THROW_CCE(), length, padChar));
  }
  function substringAfter(_this__u8e3s4, delimiter, missingDelimiterValue) {
    missingDelimiterValue = missingDelimiterValue === VOID ? _this__u8e3s4 : missingDelimiterValue;
    var index = indexOf_0(_this__u8e3s4, delimiter);
    var tmp;
    if (index === -1) {
      tmp = missingDelimiterValue;
    } else {
      // Inline function 'kotlin.text.substring' call
      var startIndex = index + delimiter.length | 0;
      var endIndex = _this__u8e3s4.length;
      // Inline function 'kotlin.js.asDynamic' call
      tmp = _this__u8e3s4.substring(startIndex, endIndex);
    }
    return tmp;
  }
  function indexOf_0(_this__u8e3s4, string, startIndex, ignoreCase) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this__u8e3s4 === 'string');
    }
    if (tmp_0) {
      tmp = indexOf_1(_this__u8e3s4, string, startIndex, charSequenceLength(_this__u8e3s4), ignoreCase);
    } else {
      // Inline function 'kotlin.text.nativeIndexOf' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = _this__u8e3s4.indexOf(string, startIndex);
    }
    return tmp;
  }
  function get_indices_0(_this__u8e3s4) {
    return numberRangeToNumber(0, charSequenceLength(_this__u8e3s4) - 1 | 0);
  }
  function split_1(_this__u8e3s4, delimiter, ignoreCase, limit) {
    requireNonNegativeLimit(limit);
    var currentOffset = 0;
    var nextIndex = indexOf_0(_this__u8e3s4, delimiter, currentOffset, ignoreCase);
    if (nextIndex === -1 ? true : limit === 1) {
      return listOf(toString_1(_this__u8e3s4));
    }
    var isLimited = limit > 0;
    var result = ArrayList_init_$Create$_0(isLimited ? coerceAtMost(limit, 10) : 10);
    $l$loop: do {
      // Inline function 'kotlin.text.substring' call
      var startIndex = currentOffset;
      var endIndex = nextIndex;
      var tmp$ret$0 = toString_1(charSequenceSubSequence(_this__u8e3s4, startIndex, endIndex));
      result.e(tmp$ret$0);
      currentOffset = nextIndex + delimiter.length | 0;
      if (isLimited ? result.k() === (limit - 1 | 0) : false)
        break $l$loop;
      nextIndex = indexOf_0(_this__u8e3s4, delimiter, currentOffset, ignoreCase);
    }
     while (!(nextIndex === -1));
    // Inline function 'kotlin.text.substring' call
    var startIndex_0 = currentOffset;
    var endIndex_0 = charSequenceLength(_this__u8e3s4);
    var tmp$ret$1 = toString_1(charSequenceSubSequence(_this__u8e3s4, startIndex_0, endIndex_0));
    result.e(tmp$ret$1);
    return result;
  }
  function substring_0(_this__u8e3s4, range) {
    return toString_1(charSequenceSubSequence(_this__u8e3s4, range.ja(), range.ka() + 1 | 0));
  }
  function rangesDelimitedBy(_this__u8e3s4, delimiters, startIndex, ignoreCase, limit) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    limit = limit === VOID ? 0 : limit;
    requireNonNegativeLimit(limit);
    return new DelimitedRangesSequence(_this__u8e3s4, startIndex, limit, rangesDelimitedBy$lambda(delimiters, ignoreCase));
  }
  function rangesDelimitedBy_0(_this__u8e3s4, delimiters, startIndex, ignoreCase, limit) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    limit = limit === VOID ? 0 : limit;
    requireNonNegativeLimit(limit);
    var delimitersList = asList(delimiters);
    return new DelimitedRangesSequence(_this__u8e3s4, startIndex, limit, rangesDelimitedBy$lambda_0(delimitersList, ignoreCase));
  }
  function indexOf_1(_this__u8e3s4, other, startIndex, endIndex, ignoreCase, last) {
    last = last === VOID ? false : last;
    var indices = !last ? numberRangeToNumber(coerceAtLeast(startIndex, 0), coerceAtMost(endIndex, charSequenceLength(_this__u8e3s4))) : downTo(coerceAtMost(startIndex, get_lastIndex_1(_this__u8e3s4)), coerceAtLeast(endIndex, 0));
    var tmp;
    if (typeof _this__u8e3s4 === 'string') {
      tmp = typeof other === 'string';
    } else {
      tmp = false;
    }
    if (tmp) {
      var inductionVariable = indices.jg_1;
      var last_0 = indices.kg_1;
      var step = indices.lg_1;
      if ((step > 0 ? inductionVariable <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable : false)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          if (regionMatches(other, 0, _this__u8e3s4, index, charSequenceLength(other), ignoreCase))
            return index;
        }
         while (!(index === last_0));
    } else {
      var inductionVariable_0 = indices.jg_1;
      var last_1 = indices.kg_1;
      var step_0 = indices.lg_1;
      if ((step_0 > 0 ? inductionVariable_0 <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable_0 : false)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + step_0 | 0;
          if (regionMatchesImpl(other, 0, _this__u8e3s4, index_0, charSequenceLength(other), ignoreCase))
            return index_0;
        }
         while (!(index_0 === last_1));
    }
    return -1;
  }
  function lineSequence(_this__u8e3s4) {
    return splitToSequence(_this__u8e3s4, ['\r\n', '\n', '\r']);
  }
  function padEnd_0(_this__u8e3s4, length, padChar) {
    padChar = padChar === VOID ? _Char___init__impl__6a9atx(32) : padChar;
    if (length < 0)
      throw IllegalArgumentException_init_$Create$_0('Desired length ' + length + ' is less than zero.');
    if (length <= charSequenceLength(_this__u8e3s4))
      return charSequenceSubSequence(_this__u8e3s4, 0, charSequenceLength(_this__u8e3s4));
    var sb = StringBuilder_init_$Create$(length);
    sb.f(_this__u8e3s4);
    var inductionVariable = 1;
    var last = length - charSequenceLength(_this__u8e3s4) | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        sb.r6(padChar);
      }
       while (!(i === last));
    return sb;
  }
  function padStart_0(_this__u8e3s4, length, padChar) {
    padChar = padChar === VOID ? _Char___init__impl__6a9atx(32) : padChar;
    if (length < 0)
      throw IllegalArgumentException_init_$Create$_0('Desired length ' + length + ' is less than zero.');
    if (length <= charSequenceLength(_this__u8e3s4))
      return charSequenceSubSequence(_this__u8e3s4, 0, charSequenceLength(_this__u8e3s4));
    var sb = StringBuilder_init_$Create$(length);
    var inductionVariable = 1;
    var last = length - charSequenceLength(_this__u8e3s4) | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        sb.r6(padChar);
      }
       while (!(i === last));
    sb.f(_this__u8e3s4);
    return sb;
  }
  function trim(_this__u8e3s4) {
    // Inline function 'kotlin.text.trim' call
    var startIndex = 0;
    var endIndex = charSequenceLength(_this__u8e3s4) - 1 | 0;
    var startFound = false;
    $l$loop: while (startIndex <= endIndex) {
      var index = !startFound ? startIndex : endIndex;
      var match = isWhitespace(charSequenceGet(_this__u8e3s4, index));
      if (!startFound) {
        if (!match)
          startFound = true;
        else
          startIndex = startIndex + 1 | 0;
      } else {
        if (!match)
          break $l$loop;
        else
          endIndex = endIndex - 1 | 0;
      }
    }
    return charSequenceSubSequence(_this__u8e3s4, startIndex, endIndex + 1 | 0);
  }
  function indexOfAny(_this__u8e3s4, chars, startIndex, ignoreCase) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    var tmp;
    if (!ignoreCase ? chars.length === 1 : false) {
      tmp = typeof _this__u8e3s4 === 'string';
    } else {
      tmp = false;
    }
    if (tmp) {
      var char = single(chars);
      // Inline function 'kotlin.text.nativeIndexOf' call
      // Inline function 'kotlin.text.nativeIndexOf' call
      var str = toString(char);
      // Inline function 'kotlin.js.asDynamic' call
      return _this__u8e3s4.indexOf(str, startIndex);
    }
    var inductionVariable = coerceAtLeast(startIndex, 0);
    var last = get_lastIndex_1(_this__u8e3s4);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var charAtIndex = charSequenceGet(_this__u8e3s4, index);
        var tmp$ret$4;
        $l$block: {
          // Inline function 'kotlin.collections.any' call
          var inductionVariable_0 = 0;
          var last_0 = chars.length;
          while (inductionVariable_0 < last_0) {
            var element = chars[inductionVariable_0];
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.text.indexOfAny.<anonymous>' call
            if (equals_0(element, charAtIndex, ignoreCase)) {
              tmp$ret$4 = true;
              break $l$block;
            }
          }
          tmp$ret$4 = false;
        }
        if (tmp$ret$4)
          return index;
      }
       while (!(index === last));
    return -1;
  }
  function requireNonNegativeLimit(limit) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!(limit >= 0)) {
      // Inline function 'kotlin.text.requireNonNegativeLimit.<anonymous>' call
      var message = 'Limit must be non-negative, but was ' + limit;
      throw IllegalArgumentException_init_$Create$_0(toString_1(message));
    }
    return tmp;
  }
  function calcNext_1($this) {
    if ($this.dh_1 < 0) {
      $this.bh_1 = 0;
      $this.eh_1 = null;
    } else {
      var tmp;
      var tmp_0;
      if ($this.gh_1.jh_1 > 0) {
        $this.fh_1 = $this.fh_1 + 1 | 0;
        tmp_0 = $this.fh_1 >= $this.gh_1.jh_1;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = true;
      } else {
        tmp = $this.dh_1 > charSequenceLength($this.gh_1.hh_1);
      }
      if (tmp) {
        $this.eh_1 = numberRangeToNumber($this.ch_1, get_lastIndex_1($this.gh_1.hh_1));
        $this.dh_1 = -1;
      } else {
        var match = $this.gh_1.kh_1($this.gh_1.hh_1, $this.dh_1);
        if (match == null) {
          $this.eh_1 = numberRangeToNumber($this.ch_1, get_lastIndex_1($this.gh_1.hh_1));
          $this.dh_1 = -1;
        } else {
          var index = match.hc();
          var length = match.ic();
          $this.eh_1 = until($this.ch_1, index);
          $this.ch_1 = index + length | 0;
          $this.dh_1 = $this.ch_1 + (length === 0 ? 1 : 0) | 0;
        }
      }
      $this.bh_1 = 1;
    }
  }
  function DelimitedRangesSequence$iterator$1(this$0) {
    this.gh_1 = this$0;
    this.bh_1 = -1;
    this.ch_1 = coerceIn(this$0.ih_1, 0, charSequenceLength(this$0.hh_1));
    this.dh_1 = this.ch_1;
    this.eh_1 = null;
    this.fh_1 = 0;
  }
  protoOf(DelimitedRangesSequence$iterator$1).j = function () {
    if (this.bh_1 === -1) {
      calcNext_1(this);
    }
    if (this.bh_1 === 0)
      throw NoSuchElementException_init_$Create$();
    var tmp = this.eh_1;
    var result = tmp instanceof IntRange ? tmp : THROW_CCE();
    this.eh_1 = null;
    this.bh_1 = -1;
    return result;
  };
  protoOf(DelimitedRangesSequence$iterator$1).i = function () {
    if (this.bh_1 === -1) {
      calcNext_1(this);
    }
    return this.bh_1 === 1;
  };
  function DelimitedRangesSequence(input, startIndex, limit, getNextMatch) {
    this.hh_1 = input;
    this.ih_1 = startIndex;
    this.jh_1 = limit;
    this.kh_1 = getNextMatch;
  }
  protoOf(DelimitedRangesSequence).h = function () {
    return new DelimitedRangesSequence$iterator$1(this);
  };
  function findAnyOf(_this__u8e3s4, strings, startIndex, ignoreCase, last) {
    if (!ignoreCase ? strings.k() === 1 : false) {
      var string = single_0(strings);
      var index = !last ? indexOf_0(_this__u8e3s4, string, startIndex) : lastIndexOf(_this__u8e3s4, string, startIndex);
      return index < 0 ? null : to(index, string);
    }
    var indices = !last ? numberRangeToNumber(coerceAtLeast(startIndex, 0), charSequenceLength(_this__u8e3s4)) : downTo(coerceAtMost(startIndex, get_lastIndex_1(_this__u8e3s4)), 0);
    if (typeof _this__u8e3s4 === 'string') {
      var inductionVariable = indices.jg_1;
      var last_0 = indices.kg_1;
      var step = indices.lg_1;
      if ((step > 0 ? inductionVariable <= last_0 : false) ? true : step < 0 ? last_0 <= inductionVariable : false)
        do {
          var index_0 = inductionVariable;
          inductionVariable = inductionVariable + step | 0;
          var tmp$ret$1;
          $l$block: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var tmp0_iterator = strings.h();
            while (tmp0_iterator.i()) {
              var element = tmp0_iterator.j();
              // Inline function 'kotlin.text.findAnyOf.<anonymous>' call
              if (regionMatches(element, 0, _this__u8e3s4, index_0, element.length, ignoreCase)) {
                tmp$ret$1 = element;
                break $l$block;
              }
            }
            tmp$ret$1 = null;
          }
          var matchingString = tmp$ret$1;
          if (!(matchingString == null))
            return to(index_0, matchingString);
        }
         while (!(index_0 === last_0));
    } else {
      var inductionVariable_0 = indices.jg_1;
      var last_1 = indices.kg_1;
      var step_0 = indices.lg_1;
      if ((step_0 > 0 ? inductionVariable_0 <= last_1 : false) ? true : step_0 < 0 ? last_1 <= inductionVariable_0 : false)
        do {
          var index_1 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + step_0 | 0;
          var tmp$ret$3;
          $l$block_0: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var tmp0_iterator_0 = strings.h();
            while (tmp0_iterator_0.i()) {
              var element_0 = tmp0_iterator_0.j();
              // Inline function 'kotlin.text.findAnyOf.<anonymous>' call
              if (regionMatchesImpl(element_0, 0, _this__u8e3s4, index_1, element_0.length, ignoreCase)) {
                tmp$ret$3 = element_0;
                break $l$block_0;
              }
            }
            tmp$ret$3 = null;
          }
          var matchingString_0 = tmp$ret$3;
          if (!(matchingString_0 == null))
            return to(index_1, matchingString_0);
        }
         while (!(index_1 === last_1));
    }
    return null;
  }
  function regionMatchesImpl(_this__u8e3s4, thisOffset, other, otherOffset, length, ignoreCase) {
    if (((otherOffset < 0 ? true : thisOffset < 0) ? true : thisOffset > (charSequenceLength(_this__u8e3s4) - length | 0)) ? true : otherOffset > (charSequenceLength(other) - length | 0)) {
      return false;
    }
    var inductionVariable = 0;
    if (inductionVariable < length)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals_0(charSequenceGet(_this__u8e3s4, thisOffset + index | 0), charSequenceGet(other, otherOffset + index | 0), ignoreCase))
          return false;
      }
       while (inductionVariable < length);
    return true;
  }
  function splitToSequence(_this__u8e3s4, delimiters, ignoreCase, limit) {
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    limit = limit === VOID ? 0 : limit;
    var tmp = rangesDelimitedBy_0(_this__u8e3s4, delimiters, VOID, ignoreCase, limit);
    return map(tmp, splitToSequence$lambda(_this__u8e3s4));
  }
  function lastIndexOf(_this__u8e3s4, string, startIndex, ignoreCase) {
    startIndex = startIndex === VOID ? get_lastIndex_1(_this__u8e3s4) : startIndex;
    ignoreCase = ignoreCase === VOID ? false : ignoreCase;
    var tmp;
    var tmp_0;
    if (ignoreCase) {
      tmp_0 = true;
    } else {
      tmp_0 = !(typeof _this__u8e3s4 === 'string');
    }
    if (tmp_0) {
      tmp = indexOf_1(_this__u8e3s4, string, startIndex, 0, ignoreCase, true);
    } else {
      // Inline function 'kotlin.text.nativeLastIndexOf' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = _this__u8e3s4.lastIndexOf(string, startIndex);
    }
    return tmp;
  }
  function rangesDelimitedBy$lambda($delimiters, $ignoreCase) {
    return function ($this$$receiver, currentIndex) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.text.rangesDelimitedBy.<anonymous>.<anonymous>' call
      var it = indexOfAny($this$$receiver, $delimiters, currentIndex, $ignoreCase);
      return it < 0 ? null : to(it, 1);
    };
  }
  function rangesDelimitedBy$lambda_0($delimitersList, $ignoreCase) {
    return function ($this$$receiver, currentIndex) {
      var tmp0_safe_receiver = findAnyOf($this$$receiver, $delimitersList, currentIndex, $ignoreCase, false);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.text.rangesDelimitedBy.<anonymous>.<anonymous>' call
        tmp = to(tmp0_safe_receiver.fc_1, tmp0_safe_receiver.gc_1.length);
      }
      return tmp;
    };
  }
  function splitToSequence$lambda($this_splitToSequence) {
    return function (it) {
      return substring_0($this_splitToSequence, it);
    };
  }
  function UnsafeLazyImpl(initializer) {
    this.lh_1 = initializer;
    this.mh_1 = UNINITIALIZED_VALUE_instance;
  }
  protoOf(UnsafeLazyImpl).r1 = function () {
    if (this.mh_1 === UNINITIALIZED_VALUE_instance) {
      this.mh_1 = ensureNotNull(this.lh_1)();
      this.lh_1 = null;
    }
    var tmp = this.mh_1;
    return (tmp == null ? true : !(tmp == null)) ? tmp : THROW_CCE();
  };
  protoOf(UnsafeLazyImpl).nh = function () {
    return !(this.mh_1 === UNINITIALIZED_VALUE_instance);
  };
  protoOf(UnsafeLazyImpl).toString = function () {
    return this.nh() ? toString_0(this.r1()) : 'Lazy value not initialized yet.';
  };
  function UNINITIALIZED_VALUE() {
  }
  var UNINITIALIZED_VALUE_instance;
  function UNINITIALIZED_VALUE_getInstance() {
    return UNINITIALIZED_VALUE_instance;
  }
  function _Result___init__impl__xyqfz8(value) {
    return value;
  }
  function _Result___get_value__impl__bjfvqg($this) {
    return $this;
  }
  function _Result___get_isFailure__impl__jpiriv($this) {
    var tmp = _Result___get_value__impl__bjfvqg($this);
    return tmp instanceof Failure;
  }
  function Result__exceptionOrNull_impl_p6xea9($this) {
    var tmp;
    if (_Result___get_value__impl__bjfvqg($this) instanceof Failure) {
      tmp = _Result___get_value__impl__bjfvqg($this).oh_1;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function Companion_13() {
  }
  var Companion_instance_13;
  function Companion_getInstance_13() {
    return Companion_instance_13;
  }
  function Failure(exception) {
    this.oh_1 = exception;
  }
  protoOf(Failure).equals = function (other) {
    var tmp;
    if (other instanceof Failure) {
      tmp = equals(this.oh_1, other.oh_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Failure).hashCode = function () {
    return hashCode(this.oh_1);
  };
  protoOf(Failure).toString = function () {
    return 'Failure(' + this.oh_1 + ')';
  };
  function createFailure(exception) {
    return new Failure(exception);
  }
  function throwOnFailure(_this__u8e3s4) {
    var tmp = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
    if (tmp instanceof Failure)
      throw _Result___get_value__impl__bjfvqg(_this__u8e3s4).oh_1;
  }
  function NotImplementedError(message) {
    message = message === VOID ? 'An operation is not implemented.' : message;
    Error_init_$Init$_0(message, this);
    captureStack(this, NotImplementedError);
  }
  function Pair(first, second) {
    this.fc_1 = first;
    this.gc_1 = second;
  }
  protoOf(Pair).toString = function () {
    return '(' + this.fc_1 + ', ' + this.gc_1 + ')';
  };
  protoOf(Pair).hc = function () {
    return this.fc_1;
  };
  protoOf(Pair).ic = function () {
    return this.gc_1;
  };
  protoOf(Pair).hashCode = function () {
    var result = this.fc_1 == null ? 0 : hashCode(this.fc_1);
    result = imul(result, 31) + (this.gc_1 == null ? 0 : hashCode(this.gc_1)) | 0;
    return result;
  };
  protoOf(Pair).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Pair))
      return false;
    var tmp0_other_with_cast = other instanceof Pair ? other : THROW_CCE();
    if (!equals(this.fc_1, tmp0_other_with_cast.fc_1))
      return false;
    if (!equals(this.gc_1, tmp0_other_with_cast.gc_1))
      return false;
    return true;
  };
  function Triple(first, second, third) {
    this.ph_1 = first;
    this.qh_1 = second;
    this.rh_1 = third;
  }
  protoOf(Triple).toString = function () {
    return '(' + this.ph_1 + ', ' + this.qh_1 + ', ' + this.rh_1 + ')';
  };
  protoOf(Triple).hc = function () {
    return this.ph_1;
  };
  protoOf(Triple).ic = function () {
    return this.qh_1;
  };
  protoOf(Triple).sh = function () {
    return this.rh_1;
  };
  protoOf(Triple).hashCode = function () {
    var result = this.ph_1 == null ? 0 : hashCode(this.ph_1);
    result = imul(result, 31) + (this.qh_1 == null ? 0 : hashCode(this.qh_1)) | 0;
    result = imul(result, 31) + (this.rh_1 == null ? 0 : hashCode(this.rh_1)) | 0;
    return result;
  };
  protoOf(Triple).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Triple))
      return false;
    var tmp0_other_with_cast = other instanceof Triple ? other : THROW_CCE();
    if (!equals(this.ph_1, tmp0_other_with_cast.ph_1))
      return false;
    if (!equals(this.qh_1, tmp0_other_with_cast.qh_1))
      return false;
    if (!equals(this.rh_1, tmp0_other_with_cast.rh_1))
      return false;
    return true;
  };
  function to(_this__u8e3s4, that) {
    return new Pair(_this__u8e3s4, that);
  }
  function _UShort___init__impl__jigrne(data) {
    return data;
  }
  function _UShort___get_data__impl__g0245($this) {
    return $this;
  }
  //region block: post-declaration
  protoOf(InternalHashMap).b5 = containsAllEntries;
  //endregion
  //region block: init
  Unit_instance = new Unit();
  Companion_instance_0 = new Companion_0();
  _stableSortingIsSupported = null;
  Companion_instance_3 = new Companion_3();
  CompletedContinuation_instance = new CompletedContinuation();
  Companion_instance_5 = new Companion_5();
  Companion_instance_6 = new Companion_6();
  Companion_instance_7 = new Companion_7();
  EmptyIterator_instance = new EmptyIterator();
  EmptySequence_instance = new EmptySequence();
  NaturalOrderComparator_instance = new NaturalOrderComparator();
  Key_instance = new Key();
  Companion_instance_11 = new Companion_11();
  Companion_instance_12 = new Companion_12();
  UNINITIALIZED_VALUE_instance = new UNINITIALIZED_VALUE();
  Companion_instance_13 = new Companion_13();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = getKClassFromExpression;
  _.$_$.b = VOID;
  _.$_$.c = ArrayList_init_$Create$_0;
  _.$_$.d = ArrayList_init_$Create$;
  _.$_$.e = LinkedHashMap_init_$Create$_0;
  _.$_$.f = LinkedHashMap_init_$Create$;
  _.$_$.g = LinkedHashMap_init_$Create$_1;
  _.$_$.h = LinkedHashSet_init_$Create$;
  _.$_$.i = Regex_init_$Create$;
  _.$_$.j = StringBuilder_init_$Create$_0;
  _.$_$.k = Exception_init_$Create$_0;
  _.$_$.l = IllegalArgumentException_init_$Create$_0;
  _.$_$.m = IndexOutOfBoundsException_init_$Create$_0;
  _.$_$.n = NoSuchElementException_init_$Create$;
  _.$_$.o = _Char___init__impl__6a9atx;
  _.$_$.p = Char__rangeTo_impl_tkncvp;
  _.$_$.q = toString;
  _.$_$.r = Default_getInstance;
  _.$_$.s = Unit_instance;
  _.$_$.t = Collection;
  _.$_$.u = List;
  _.$_$.v = Map_0;
  _.$_$.w = Set;
  _.$_$.x = addAll;
  _.$_$.y = asReversed;
  _.$_$.z = asSequence_0;
  _.$_$.a1 = checkIndexOverflow;
  _.$_$.b1 = chunked;
  _.$_$.c1 = collectionSizeOrDefault;
  _.$_$.d1 = contentEquals;
  _.$_$.e1 = copyToArray;
  _.$_$.f1 = dropLast;
  _.$_$.g1 = drop;
  _.$_$.h1 = emptyList;
  _.$_$.i1 = emptySet;
  _.$_$.j1 = firstOrNull_0;
  _.$_$.k1 = firstOrNull;
  _.$_$.l1 = first;
  _.$_$.m1 = first_0;
  _.$_$.n1 = flatten;
  _.$_$.o1 = getOrNull;
  _.$_$.p1 = get_indices;
  _.$_$.q1 = intersect;
  _.$_$.r1 = joinToString_0;
  _.$_$.s1 = get_lastIndex_0;
  _.$_$.t1 = last;
  _.$_$.u1 = listOf;
  _.$_$.v1 = listOf_0;
  _.$_$.w1 = mapCapacity;
  _.$_$.x1 = mapOf_0;
  _.$_$.y1 = minus;
  _.$_$.z1 = minus_0;
  _.$_$.a2 = minus_1;
  _.$_$.b2 = mutableSetOf;
  _.$_$.c2 = plus_6;
  _.$_$.d2 = plus_0;
  _.$_$.e2 = plus_4;
  _.$_$.f2 = plus_5;
  _.$_$.g2 = plus_2;
  _.$_$.h2 = plus;
  _.$_$.i2 = plus_1;
  _.$_$.j2 = random;
  _.$_$.k2 = removeAll;
  _.$_$.l2 = retainAll;
  _.$_$.m2 = setOf;
  _.$_$.n2 = shuffled;
  _.$_$.o2 = sortedWith;
  _.$_$.p2 = sorted;
  _.$_$.q2 = takeLast;
  _.$_$.r2 = toBooleanArray;
  _.$_$.s2 = toDoubleArray_0;
  _.$_$.t2 = toDoubleArray;
  _.$_$.u2 = toIntArray;
  _.$_$.v2 = toList_0;
  _.$_$.w2 = toList;
  _.$_$.x2 = toMap;
  _.$_$.y2 = toMutableList_0;
  _.$_$.z2 = toMutableMap;
  _.$_$.a3 = toMutableSet;
  _.$_$.b3 = toSet_1;
  _.$_$.c3 = toSet_0;
  _.$_$.d3 = toSet;
  _.$_$.e3 = union;
  _.$_$.f3 = windowed;
  _.$_$.g3 = zip;
  _.$_$.h3 = compareBy;
  _.$_$.i3 = compareValues;
  _.$_$.j3 = get_COROUTINE_SUSPENDED;
  _.$_$.k3 = CoroutineImpl;
  _.$_$.l3 = println;
  _.$_$.m3 = booleanArrayOf;
  _.$_$.n3 = booleanArray;
  _.$_$.o3 = charArrayOf;
  _.$_$.p3 = charSequenceGet;
  _.$_$.q3 = charSequenceLength;
  _.$_$.r3 = compareTo;
  _.$_$.s3 = defineProp;
  _.$_$.t3 = equals;
  _.$_$.u3 = fillArrayVal;
  _.$_$.v3 = getObjectHashCode;
  _.$_$.w3 = getPropertyCallableRef;
  _.$_$.x3 = getStringHashCode;
  _.$_$.y3 = hashCode;
  _.$_$.z3 = initMetadataForClass;
  _.$_$.a4 = initMetadataForCompanion;
  _.$_$.b4 = initMetadataForInterface;
  _.$_$.c4 = initMetadataForLambda;
  _.$_$.d4 = initMetadataForObject;
  _.$_$.e4 = isCharSequence;
  _.$_$.f4 = isInterface;
  _.$_$.g4 = newThrowable;
  _.$_$.h4 = numberRangeToNumber;
  _.$_$.i4 = numberToInt;
  _.$_$.j4 = objectCreate;
  _.$_$.k4 = protoOf;
  _.$_$.l4 = toLong;
  _.$_$.m4 = toString_1;
  _.$_$.n4 = Random_0;
  _.$_$.o4 = coerceAtLeast;
  _.$_$.p4 = downTo;
  _.$_$.q4 = until;
  _.$_$.r4 = KClass;
  _.$_$.s4 = KProperty0;
  _.$_$.t4 = KProperty1;
  _.$_$.u4 = SequenceScope;
  _.$_$.v4 = distinct;
  _.$_$.w4 = filter;
  _.$_$.x4 = flatMap;
  _.$_$.y4 = map;
  _.$_$.z4 = plus_3;
  _.$_$.a5 = sequenceOf;
  _.$_$.b5 = sequence;
  _.$_$.c5 = toSet_2;
  _.$_$.d5 = contains_0;
  _.$_$.e5 = dropLast_0;
  _.$_$.f5 = drop_0;
  _.$_$.g5 = first_1;
  _.$_$.h5 = indexOf_0;
  _.$_$.i5 = isBlank;
  _.$_$.j5 = last_1;
  _.$_$.k5 = lines;
  _.$_$.l5 = padEnd;
  _.$_$.m5 = padStart;
  _.$_$.n5 = replaceFirst;
  _.$_$.o5 = replace;
  _.$_$.p5 = split;
  _.$_$.q5 = split_0;
  _.$_$.r5 = startsWith;
  _.$_$.s5 = substringAfter;
  _.$_$.t5 = substringBefore;
  _.$_$.u5 = substring;
  _.$_$.v5 = toCharArray;
  _.$_$.w5 = trim;
  _.$_$.x5 = Char;
  _.$_$.y5 = Comparator;
  _.$_$.z5 = Exception;
  _.$_$.a6 = Long;
  _.$_$.b6 = NotImplementedError;
  _.$_$.c6 = Pair;
  _.$_$.d6 = THROW_CCE;
  _.$_$.e6 = Triple;
  _.$_$.f6 = ensureNotNull;
  _.$_$.g6 = lazy;
  _.$_$.h6 = stackTraceToString;
  _.$_$.i6 = to;
  //endregion
  return _;
}));



/***/ }),

/***/ "./kotlin/multik-multik-core.js":
/*!**************************************!*\
  !*** ./kotlin/multik-multik-core.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true)
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./kotlin-kotlin-stdlib.js */ "./kotlin/kotlin-kotlin-stdlib.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else {}
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.k4;
  var initMetadataForClass = kotlin_kotlin.$_$.z3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.a4;
  var initMetadataForObject = kotlin_kotlin.$_$.d4;
  var VOID = kotlin_kotlin.$_$.b;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.f;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(EngineType, 'EngineType');
  initMetadataForClass(Engine, 'Engine');
  initMetadataForCompanion(Companion, Engine);
  initMetadataForObject(DefaultEngineType, 'DefaultEngineType', VOID, EngineType);
  initMetadataForObject(KEEngineType, 'KEEngineType', VOID, EngineType);
  //endregion
  function EngineType(name) {
    this.th_1 = name;
  }
  function Companion() {
    Companion_instance = this;
    Engine.call(this);
    this.uh_1 = enginesProvider();
    this.vh_1 = null;
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Engine() {
    Companion_getInstance();
  }
  function DefaultEngineType() {
    DefaultEngineType_instance = this;
    EngineType.call(this, 'DEFAULT');
  }
  var DefaultEngineType_instance;
  function DefaultEngineType_getInstance() {
    if (DefaultEngineType_instance == null)
      new DefaultEngineType();
    return DefaultEngineType_instance;
  }
  function KEEngineType() {
    KEEngineType_instance = this;
    EngineType.call(this, 'KOTLIN');
  }
  var KEEngineType_instance;
  function KEEngineType_getInstance() {
    if (KEEngineType_instance == null)
      new KEEngineType();
    return KEEngineType_instance;
  }
  function get_enginesStore() {
    _init_properties_Engine_kt__fnrbfm();
    return enginesStore;
  }
  var enginesStore;
  function enginesProvider() {
    _init_properties_Engine_kt__fnrbfm();
    return get_enginesStore();
  }
  var properties_initialized_Engine_kt_oy53wk;
  function _init_properties_Engine_kt__fnrbfm() {
    if (!properties_initialized_Engine_kt_oy53wk) {
      properties_initialized_Engine_kt_oy53wk = true;
      // Inline function 'kotlin.collections.mutableMapOf' call
      enginesStore = LinkedHashMap_init_$Create$();
    }
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DefaultEngineType_getInstance;
  _.$_$.b = KEEngineType_getInstance;
  _.$_$.c = Engine;
  _.$_$.d = get_enginesStore;
  //endregion
  return _;
}));



/***/ }),

/***/ "./kotlin/multik-multik-default.js":
/*!*****************************************!*\
  !*** ./kotlin/multik-multik-default.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true)
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./multik-multik-core.js */ "./kotlin/multik-multik-core.js"), __webpack_require__(/*! ./kotlin-kotlin-stdlib.js */ "./kotlin/kotlin-kotlin-stdlib.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else {}
}(this, function (_, kotlin_org_jetbrains_kotlinx_multik_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Engine = kotlin_org_jetbrains_kotlinx_multik_core.$_$.c;
  var protoOf = kotlin_kotlin.$_$.k4;
  var initMetadataForClass = kotlin_kotlin.$_$.z3;
  var get_enginesStore = kotlin_org_jetbrains_kotlinx_multik_core.$_$.d;
  var DefaultEngineType_getInstance = kotlin_org_jetbrains_kotlinx_multik_core.$_$.a;
  var Unit_instance = kotlin_kotlin.$_$.s;
  var initMetadataForObject = kotlin_kotlin.$_$.d4;
  var defineProp = kotlin_kotlin.$_$.s3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DefaultEngine, 'DefaultEngine', DefaultEngine, Engine);
  initMetadataForObject(EngineInitializer, 'EngineInitializer');
  //endregion
  function DefaultEngine() {
    Engine.call(this);
  }
  function get_initializer() {
    return initializer;
  }
  var initializer;
  function EngineInitializer() {
    EngineInitializer_instance = this;
    // Inline function 'kotlin.collections.set' call
    var this_0 = get_enginesStore();
    var key = DefaultEngineType_getInstance();
    var value = new DefaultEngine();
    this_0.v3(key, value);
  }
  var EngineInitializer_instance;
  function EngineInitializer_getInstance() {
    if (EngineInitializer_instance == null)
      new EngineInitializer();
    return EngineInitializer_instance;
  }
  //region block: init
  initializer = EngineInitializer_getInstance();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $org = _.org || (_.org = {});
    var $org$jetbrains = $org.jetbrains || ($org.jetbrains = {});
    var $org$jetbrains$kotlinx = $org$jetbrains.kotlinx || ($org$jetbrains.kotlinx = {});
    var $org$jetbrains$kotlinx$multik = $org$jetbrains$kotlinx.multik || ($org$jetbrains$kotlinx.multik = {});
    var $org$jetbrains$kotlinx$multik$default = $org$jetbrains$kotlinx$multik.default || ($org$jetbrains$kotlinx$multik.default = {});
    defineProp($org$jetbrains$kotlinx$multik$default, 'initializer', get_initializer);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));



/***/ }),

/***/ "./kotlin/multik-multik-kotlin.js":
/*!****************************************!*\
  !*** ./kotlin/multik-multik-kotlin.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (true)
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./multik-multik-core.js */ "./kotlin/multik-multik-core.js"), __webpack_require__(/*! ./kotlin-kotlin-stdlib.js */ "./kotlin/kotlin-kotlin-stdlib.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else {}
}(this, function (_, kotlin_org_jetbrains_kotlinx_multik_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var Engine = kotlin_org_jetbrains_kotlinx_multik_core.$_$.c;
  var protoOf = kotlin_kotlin.$_$.k4;
  var initMetadataForClass = kotlin_kotlin.$_$.z3;
  var get_enginesStore = kotlin_org_jetbrains_kotlinx_multik_core.$_$.d;
  var KEEngineType_getInstance = kotlin_org_jetbrains_kotlinx_multik_core.$_$.b;
  var Unit_instance = kotlin_kotlin.$_$.s;
  var initMetadataForObject = kotlin_kotlin.$_$.d4;
  var defineProp = kotlin_kotlin.$_$.s3;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(KEEngine, 'KEEngine', KEEngine, Engine);
  initMetadataForObject(EngineInitializer, 'EngineInitializer');
  //endregion
  function KEEngine() {
    Engine.call(this);
  }
  function get_initializer() {
    return initializer;
  }
  var initializer;
  function EngineInitializer() {
    EngineInitializer_instance = this;
    // Inline function 'kotlin.collections.set' call
    var this_0 = get_enginesStore();
    var key = KEEngineType_getInstance();
    var value = new KEEngine();
    this_0.v3(key, value);
  }
  var EngineInitializer_instance;
  function EngineInitializer_getInstance() {
    if (EngineInitializer_instance == null)
      new EngineInitializer();
    return EngineInitializer_instance;
  }
  //region block: init
  initializer = EngineInitializer_getInstance();
  //endregion
  //region block: exports
  function $jsExportAll$(_) {
    var $org = _.org || (_.org = {});
    var $org$jetbrains = $org.jetbrains || ($org.jetbrains = {});
    var $org$jetbrains$kotlinx = $org$jetbrains.kotlinx || ($org$jetbrains.kotlinx = {});
    var $org$jetbrains$kotlinx$multik = $org$jetbrains$kotlinx.multik || ($org$jetbrains$kotlinx.multik = {});
    var $org$jetbrains$kotlinx$multik$kotlin = $org$jetbrains$kotlinx$multik.kotlin || ($org$jetbrains$kotlinx$multik.kotlin = {});
    defineProp($org$jetbrains$kotlinx$multik$kotlin, 'initializer', get_initializer);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  //endregion
  return _;
}));



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./kotlin/Tidyparse-tidyparse-web-frontend.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=tidyparse-web-frontend.js.map