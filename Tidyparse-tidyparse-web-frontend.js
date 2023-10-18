(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './galoisenne.js', './kotlin-kotlin-stdlib.js', './kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./galoisenne.js'), require('./kotlin-kotlin-stdlib.js'), require('./kotlinx.coroutines-kotlinx-coroutines-core-js-ir.js'));
  else {
    if (typeof galoisenne === 'undefined') {
      throw new Error("Error loading module 'ai.hypergraph:tidyparse-web-frontend'. Its dependency 'galoisenne' was not found. Please, check whether 'galoisenne' is loaded prior to 'ai.hypergraph:tidyparse-web-frontend'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'ai.hypergraph:tidyparse-web-frontend'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'ai.hypergraph:tidyparse-web-frontend'.");
    }
    if (typeof this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'ai.hypergraph:tidyparse-web-frontend'. Its dependency 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' was not found. Please, check whether 'kotlinx.coroutines-kotlinx-coroutines-core-js-ir' is loaded prior to 'ai.hypergraph:tidyparse-web-frontend'.");
    }
    root['ai.hypergraph:tidyparse-web-frontend'] = factory(typeof this['ai.hypergraph:tidyparse-web-frontend'] === 'undefined' ? {} : this['ai.hypergraph:tidyparse-web-frontend'], galoisenne, this['kotlin-kotlin-stdlib'], this['kotlinx.coroutines-kotlinx-coroutines-core-js-ir']);
  }
}(this, function (_, kotlin_ai_hypergraph_galoisenne, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var parseCFG = kotlin_ai_hypergraph_galoisenne.$_$.e;
  var substringBefore = kotlin_kotlin.$_$.zh;
  var ensureNotNull = kotlin_kotlin.$_$.fk;
  var indexOf = kotlin_kotlin.$_$.ch;
  var split = kotlin_kotlin.$_$.xh;
  var last = kotlin_kotlin.$_$.p8;
  var contains = kotlin_kotlin.$_$.vg;
  var GlobalScope_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var VOID = kotlin_kotlin.$_$.f;
  var async = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c;
  var escapeHTML = kotlin_ai_hypergraph_galoisenne.$_$.b;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.a1;
  var Unit_getInstance = kotlin_kotlin.$_$.d5;
  var parse = kotlin_ai_hypergraph_galoisenne.$_$.f;
  var println = kotlin_kotlin.$_$.wc;
  var get_terminals = kotlin_ai_hypergraph_galoisenne.$_$.i;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var charSequenceLength = kotlin_kotlin.$_$.gd;
  var charSequenceGet = kotlin_kotlin.$_$.fd;
  var isLetterOrDigit = kotlin_kotlin.$_$.fh;
  var get_blocked = kotlin_ai_hypergraph_galoisenne.$_$.c;
  var repair = kotlin_ai_hypergraph_galoisenne.$_$.h;
  var joinToString = kotlin_kotlin.$_$.f8;
  var THROW_CCE = kotlin_kotlin.$_$.pj;
  var CoroutineImpl = kotlin_kotlin.$_$.qc;
  var protoOf = kotlin_kotlin.$_$.ye;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var isInterface = kotlin_kotlin.$_$.fe;
  var classMeta = kotlin_kotlin.$_$.id;
  var setMetadataFor = kotlin_kotlin.$_$.ze;
  var enumSeq = kotlin_ai_hypergraph_galoisenne.$_$.d;
  var KProperty0 = kotlin_kotlin.$_$.yf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sd;
  var lazy = kotlin_kotlin.$_$.mk;
  var SuspendFunction1 = kotlin_kotlin.$_$.rc;
  //endregion
  //region block: pre-declaration
  setMetadataFor(updateRecommendations$slambda, 'updateRecommendations$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  //endregion
  function set_cfg(_set____db54di) {
    _init_properties_Client_kt__a2ryqz();
    cfg = _set____db54di;
  }
  function get_cfg() {
    _init_properties_Client_kt__a2ryqz();
    return cfg;
  }
  var cfg;
  function set_cachedGrammar(_set____db54di) {
    _init_properties_Client_kt__a2ryqz();
    cachedGrammar = _set____db54di;
  }
  function get_cachedGrammar() {
    _init_properties_Client_kt__a2ryqz();
    return cachedGrammar;
  }
  var cachedGrammar;
  function set_ongoingWork(_set____db54di) {
    _init_properties_Client_kt__a2ryqz();
    ongoingWork = _set____db54di;
  }
  function get_ongoingWork() {
    _init_properties_Client_kt__a2ryqz();
    return ongoingWork;
  }
  var ongoingWork;
  function get_inputField() {
    _init_properties_Client_kt__a2ryqz();
    // Inline function 'kotlin.getValue' call
    var this_0 = inputField$delegate;
    inputField$factory();
    return this_0.get_value_j01efc_k$();
  }
  var inputField$delegate;
  function get_outputField() {
    _init_properties_Client_kt__a2ryqz();
    // Inline function 'kotlin.getValue' call
    var this_0 = outputField$delegate;
    outputField$factory();
    return this_0.get_value_j01efc_k$();
  }
  var outputField$delegate;
  function main() {
    _init_properties_Client_kt__a2ryqz();
    preprocessGrammar();
    var tmp = get_inputField();
    tmp.addEventListener('input', main$lambda);
  }
  function preprocessGrammar() {
    _init_properties_Client_kt__a2ryqz();
    var currentGrammar = grammar(get_inputField());
    if (!(get_cachedGrammar() === currentGrammar)) {
      set_cfg(parseCFG(currentGrammar));
    }
    set_cachedGrammar(currentGrammar);
  }
  function grammar(_this__u8e3s4) {
    _init_properties_Client_kt__a2ryqz();
    return substringBefore(_this__u8e3s4.value, '---');
  }
  function getEndOfLineIdx(_this__u8e3s4) {
    _init_properties_Client_kt__a2ryqz();
    return indexOf(_this__u8e3s4.value, '\n', ensureNotNull(_this__u8e3s4.selectionStart));
  }
  function getCurrentLine(_this__u8e3s4) {
    _init_properties_Client_kt__a2ryqz();
    // Inline function 'kotlin.text.substring' call
    var this_0 = _this__u8e3s4.value;
    var endIndex = getEndOfLineIdx(_this__u8e3s4);
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this_0.substring(0, endIndex);
    return last(split(tmp$ret$1, ['\n']));
  }
  function isCursorInsideGrammar(_this__u8e3s4) {
    _init_properties_Client_kt__a2ryqz();
    // Inline function 'kotlin.text.substring' call
    var this_0 = _this__u8e3s4.value;
    var endIndex = ensureNotNull(get_inputField().selectionStart);
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this_0.substring(0, endIndex);
    return contains(tmp$ret$1, '---');
  }
  function processEditorContents() {
    _init_properties_Client_kt__a2ryqz();
    var tmp0_safe_receiver = get_ongoingWork();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.cancel$default_8haxne_k$();
    }
    set_ongoingWork(updateRecommendations());
    preprocessGrammar();
  }
  function updateRecommendations() {
    _init_properties_Client_kt__a2ryqz();
    var tmp = GlobalScope_getInstance();
    return async(tmp, VOID, VOID, updateRecommendations$slambda_0(null));
  }
  function updateProgress(query) {
    _init_properties_Client_kt__a2ryqz();
    var sanitized = escapeHTML(query);
    var tmp = get_outputField();
    var tmp0_safe_receiver = get_outputField().textContent;
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.text.replace' call
      // Inline function 'kotlin.text.toRegex' call
      var this_0 = 'Solving:.*\n';
      var regex = Regex_init_$Create$(this_0);
      var replacement = 'Solving: ' + sanitized + '\n';
      tmp_0 = regex.replace_1ix0wf_k$(tmp0_safe_receiver, replacement);
    }
    tmp.textContent = tmp_0;
  }
  function handleInput(_this__u8e3s4) {
    _init_properties_Client_kt__a2ryqz();
    preprocessGrammar();
    if (!isCursorInsideGrammar(get_inputField()))
      return Unit_getInstance();
    var line = getCurrentLine(get_inputField());
    var tmp0_safe_receiver = parse(ensureNotNull(get_cfg()), line);
    var tree = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.prettyPrint$default_loizcw_k$();
    if (!(tree == null)) {
      get_outputField().textContent = 'Parsing: ' + line + '\n\n' + tree;
    } else {
      get_outputField().textContent = 'Solving: ' + line + '\n';
      println('Repairing ' + line);
      var tmp1_safe_receiver = get_cfg();
      var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : get_terminals(tmp1_safe_receiver);
      var tmp;
      if (tmp2_safe_receiver == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.collections.filter' call
        // Inline function 'kotlin.collections.filterTo' call
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = tmp2_safe_receiver.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'handleInput.<anonymous>' call
          var tmp$ret$1;
          $l$block: {
            // Inline function 'kotlin.text.all' call
            var inductionVariable = 0;
            while (inductionVariable < charSequenceLength(element)) {
              var element_0 = charSequenceGet(element, inductionVariable);
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'handleInput.<anonymous>.<anonymous>' call
              if (!isLetterOrDigit(element_0)) {
                tmp$ret$1 = false;
                break $l$block;
              }
            }
            tmp$ret$1 = true;
          }
          if (tmp$ret$1) {
            destination.add_utx5q5_k$(element);
          }
        }
        tmp = destination;
      }
      var tmp3_safe_receiver = tmp;
      if (tmp3_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'handleInput.<anonymous>' call
        var tmp0_safe_receiver_0 = get_cfg();
        var tmp1_safe_receiver_0 = tmp0_safe_receiver_0 == null ? null : get_blocked(tmp0_safe_receiver_0);
        tmp1_safe_receiver_0 == null || tmp1_safe_receiver_0.addAll_4lagoh_k$(tmp3_safe_receiver);
      }
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.also' call
      var tmp_0 = ensureNotNull(get_cfg());
      var tmp_1 = handleInput$lambda;
      var this_0 = repair(line, tmp_0, VOID, VOID, tmp_1, handleInput$lambda_0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'handleInput.<anonymous>' call
      println('Found ' + this_0.get_size_woubt6_k$() + ' repairs');
      // Inline function 'kotlin.contracts.contract' call
      get_outputField().textContent = joinToString(this_0, '\n');
    }
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
    processEditorContents();
    return Unit_getInstance();
  }
  function updateRecommendations$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(updateRecommendations$slambda).invoke_d9fzmj_k$ = function ($this$async, $completion) {
    var tmp = this.create_rcuf4x_k$($this$async, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(updateRecommendations$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_d9fzmj_k$((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(updateRecommendations$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        if (tmp === 0) {
          this.set_exceptionState_fex74n_k$(1);
          handleInput(this.$this$async_1);
          return Unit_getInstance();
        } else if (tmp === 1) {
          throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(updateRecommendations$slambda).create_rcuf4x_k$ = function ($this$async, completion) {
    var i = new updateRecommendations$slambda(completion);
    i.$this$async_1 = $this$async;
    return i;
  };
  protoOf(updateRecommendations$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_rcuf4x_k$((!(value == null) ? isInterface(value, CoroutineScope) : false) ? value : THROW_CCE(), completion);
  };
  function updateRecommendations$slambda_0(resultContinuation) {
    var i = new updateRecommendations$slambda(resultContinuation);
    var l = function ($this$async, $completion) {
      return i.invoke_d9fzmj_k$($this$async, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function handleInput$lambda($this$repair, it) {
    _init_properties_Client_kt__a2ryqz();
    return enumSeq($this$repair, it);
  }
  function handleInput$lambda_0(it) {
    _init_properties_Client_kt__a2ryqz();
    updateProgress(it);
    return Unit_getInstance();
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
      cfg = null;
      cachedGrammar = null;
      ongoingWork = null;
      inputField$delegate = lazy(inputField$delegate$lambda);
      outputField$delegate = lazy(outputField$delegate$lambda);
    }
  }
  main();
  return _;
}));

//# sourceMappingURL=Tidyparse-tidyparse-web-frontend.js.map
