(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './multik-multik-core.js', './kotlin-kotlin-stdlib.js', './multik-multik-kotlin.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./multik-multik-core.js'), require('./kotlin-kotlin-stdlib.js'), require('./multik-multik-kotlin.js'));
  else {
    if (typeof this['multik-multik-core'] === 'undefined') {
      throw new Error("Error loading module 'multik-multik-default'. Its dependency 'multik-multik-core' was not found. Please, check whether 'multik-multik-core' is loaded prior to 'multik-multik-default'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'multik-multik-default'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'multik-multik-default'.");
    }
    if (typeof this['multik-multik-kotlin'] === 'undefined') {
      throw new Error("Error loading module 'multik-multik-default'. Its dependency 'multik-multik-kotlin' was not found. Please, check whether 'multik-multik-kotlin' is loaded prior to 'multik-multik-default'.");
    }
    root['multik-multik-default'] = factory(typeof this['multik-multik-default'] === 'undefined' ? {} : this['multik-multik-default'], this['multik-multik-core'], this['kotlin-kotlin-stdlib'], this['multik-multik-kotlin']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_multik_core, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_multik_kotlin) {
  'use strict';
  //region block: imports
  var Engine = kotlin_org_jetbrains_kotlinx_multik_core.$_$.i1;
  var protoOf = kotlin_kotlin.$_$.ye;
  var DefaultEngineType_getInstance = kotlin_org_jetbrains_kotlinx_multik_core.$_$.q;
  var classMeta = kotlin_kotlin.$_$.id;
  var setMetadataFor = kotlin_kotlin.$_$.ze;
  var VOID = kotlin_kotlin.$_$.f;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nk;
  var toString = kotlin_kotlin.$_$.ef;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var NativeEngineType_getInstance = kotlin_org_jetbrains_kotlinx_multik_core.$_$.t;
  var equals = kotlin_kotlin.$_$.md;
  var KEEngine = kotlin_org_jetbrains_kotlinx_multik_kotlin.$_$.a;
  var KEEngineType_getInstance = kotlin_org_jetbrains_kotlinx_multik_core.$_$.r;
  var getEngine$default = kotlin_org_jetbrains_kotlinx_multik_core.$_$.n;
  var EngineFactory = kotlin_org_jetbrains_kotlinx_multik_core.$_$.h1;
  var objectMeta = kotlin_kotlin.$_$.xe;
  var get_enginesStore = kotlin_org_jetbrains_kotlinx_multik_core.$_$.j1;
  var defineProp = kotlin_kotlin.$_$.kd;
  var LinAlg = kotlin_org_jetbrains_kotlinx_multik_core.$_$.c1;
  var normF$default = kotlin_org_jetbrains_kotlinx_multik_core.$_$.k;
  var norm$default = kotlin_org_jetbrains_kotlinx_multik_core.$_$.l;
  var LinAlgEx = kotlin_org_jetbrains_kotlinx_multik_core.$_$.b1;
  var Math_0 = kotlin_org_jetbrains_kotlinx_multik_core.$_$.f1;
  var MathEx = kotlin_org_jetbrains_kotlinx_multik_core.$_$.e1;
  var average$default = kotlin_org_jetbrains_kotlinx_multik_core.$_$.m;
  var Statistics = kotlin_org_jetbrains_kotlinx_multik_core.$_$.g1;
  //endregion
  //region block: pre-declaration
  setMetadataFor(DefaultEngine, 'DefaultEngine', classMeta, Engine, VOID, DefaultEngine);
  setMetadataFor(DefaultEngineFactory, 'DefaultEngineFactory', objectMeta, VOID, [EngineFactory]);
  setMetadataFor(EngineInitializer, 'EngineInitializer', objectMeta);
  setMetadataFor(DefaultLinAlg, 'DefaultLinAlg', objectMeta, VOID, [LinAlg]);
  setMetadataFor(DefaultLinAlgEx, 'DefaultLinAlgEx', objectMeta, VOID, [LinAlgEx]);
  setMetadataFor(DefaultMath, 'DefaultMath', objectMeta, VOID, [Math_0]);
  setMetadataFor(DefaultMathEx, 'DefaultMathEx', objectMeta, VOID, [MathEx]);
  setMetadataFor(DefaultStatistics, 'DefaultStatistics', objectMeta, VOID, [Statistics]);
  //endregion
  function DefaultEngine() {
    Engine.call(this);
  }
  protoOf(DefaultEngine).get_name_woqyms_k$ = function () {
    return this.get_type_wovaf7_k$().get_name_woqyms_k$();
  };
  protoOf(DefaultEngine).get_type_wovaf7_k$ = function () {
    return DefaultEngineType_getInstance();
  };
  protoOf(DefaultEngine).getMath_18ur2a_k$ = function () {
    return DefaultMath_getInstance();
  };
  protoOf(DefaultEngine).getLinAlg_9t8ny9_k$ = function () {
    return DefaultLinAlg_getInstance();
  };
  protoOf(DefaultEngine).getStatistics_6hl59j_k$ = function () {
    return DefaultStatistics_getInstance();
  };
  function DefaultEngineFactory() {
    DefaultEngineFactory_instance = this;
  }
  protoOf(DefaultEngineFactory).getEngine_g570lt_k$ = function (type) {
    var tmp;
    if ((type == null ? true : equals(type, KEEngineType_getInstance())) ? true : equals(type, DefaultEngineType_getInstance())) {
      tmp = new KEEngine();
    } else if (equals(type, NativeEngineType_getInstance())) {
      var message = "Don't exist native engine for iOS targets";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      noWhenBranchMatchedException();
    }
    return tmp;
  };
  var DefaultEngineFactory_instance;
  function DefaultEngineFactory_getInstance() {
    if (DefaultEngineFactory_instance == null)
      new DefaultEngineFactory();
    return DefaultEngineFactory_instance;
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
    this_0.put_4fpzoq_k$(key, value);
  }
  var EngineInitializer_instance;
  function EngineInitializer_getInstance() {
    if (EngineInitializer_instance == null)
      new EngineInitializer();
    return EngineInitializer_instance;
  }
  function _get_ktLinAlg__d4uhu1($this) {
    return $this.ktLinAlg_1;
  }
  function DefaultLinAlg() {
    DefaultLinAlg_instance = this;
    this.ktLinAlg_1 = DefaultEngineFactory_getInstance().getEngine_g570lt_k$(KEEngineType_getInstance()).getLinAlg_9t8ny9_k$();
  }
  protoOf(DefaultLinAlg).get_linAlgEx_com6e1_k$ = function () {
    return DefaultLinAlgEx_getInstance();
  };
  protoOf(DefaultLinAlg).pow_obkcvl_k$ = function (mat, n) {
    return this.ktLinAlg_1.pow_obkcvl_k$(mat, n);
  };
  var DefaultLinAlg_instance;
  function DefaultLinAlg_getInstance() {
    if (DefaultLinAlg_instance == null)
      new DefaultLinAlg();
    return DefaultLinAlg_instance;
  }
  function _get_ktLinAlgEx__l3zx50($this) {
    return $this.ktLinAlgEx_1;
  }
  function DefaultLinAlgEx() {
    DefaultLinAlgEx_instance = this;
    this.ktLinAlgEx_1 = DefaultEngineFactory_getInstance().getEngine_g570lt_k$(KEEngineType_getInstance()).getLinAlg_9t8ny9_k$().get_linAlgEx_com6e1_k$();
  }
  protoOf(DefaultLinAlgEx).inv_wap2b6_k$ = function (mat) {
    return this.ktLinAlgEx_1.inv_wap2b6_k$(mat);
  };
  protoOf(DefaultLinAlgEx).invF_rb20vi_k$ = function (mat) {
    return this.ktLinAlgEx_1.invF_rb20vi_k$(mat);
  };
  protoOf(DefaultLinAlgEx).invC_e7w3lu_k$ = function (mat) {
    return this.ktLinAlgEx_1.invC_e7w3lu_k$(mat);
  };
  protoOf(DefaultLinAlgEx).solve_ysm011_k$ = function (a, b) {
    return this.ktLinAlgEx_1.solve_ysm011_k$(a, b);
  };
  protoOf(DefaultLinAlgEx).solveF_uks66d_k$ = function (a, b) {
    return this.ktLinAlgEx_1.solveF_uks66d_k$(a, b);
  };
  protoOf(DefaultLinAlgEx).solveC_22gn3p_k$ = function (a, b) {
    return this.ktLinAlgEx_1.solveC_22gn3p_k$(a, b);
  };
  protoOf(DefaultLinAlgEx).normF_epcj1p_k$ = function (mat, norm) {
    return this.ktLinAlgEx_1.normF_epcj1p_k$(mat, norm);
  };
  protoOf(DefaultLinAlgEx).norm_8u084u_k$ = function (mat, norm) {
    return this.ktLinAlgEx_1.norm_8u084u_k$(mat, norm);
  };
  protoOf(DefaultLinAlgEx).qr_dl4wf6_k$ = function (mat) {
    return this.ktLinAlgEx_1.qr_dl4wf6_k$(mat);
  };
  protoOf(DefaultLinAlgEx).qrF_qm0b32_k$ = function (mat) {
    return this.ktLinAlgEx_1.qrF_qm0b32_k$(mat);
  };
  protoOf(DefaultLinAlgEx).qrC_fzs67m_k$ = function (mat) {
    return this.ktLinAlgEx_1.qrC_fzs67m_k$(mat);
  };
  protoOf(DefaultLinAlgEx).plu_rruare_k$ = function (mat) {
    return this.ktLinAlgEx_1.plu_rruare_k$(mat);
  };
  protoOf(DefaultLinAlgEx).pluF_f3s4qe_k$ = function (mat) {
    return this.ktLinAlgEx_1.pluF_f3s4qe_k$(mat);
  };
  protoOf(DefaultLinAlgEx).pluC_bbo8fq_k$ = function (mat) {
    return this.ktLinAlgEx_1.pluC_bbo8fq_k$(mat);
  };
  protoOf(DefaultLinAlgEx).svdF_2wjrfm_k$ = function (mat) {
    return this.ktLinAlgEx_1.svdF_2wjrfm_k$(mat);
  };
  protoOf(DefaultLinAlgEx).svd_s3q2e6_k$ = function (mat) {
    return this.ktLinAlgEx_1.svd_s3q2e6_k$(mat);
  };
  protoOf(DefaultLinAlgEx).svdC_dlu4b2_k$ = function (mat) {
    return this.ktLinAlgEx_1.svdC_dlu4b2_k$(mat);
  };
  protoOf(DefaultLinAlgEx).eig_tne83o_k$ = function (mat) {
    return this.ktLinAlgEx_1.eig_tne83o_k$(mat);
  };
  protoOf(DefaultLinAlgEx).eigF_uhndts_k$ = function (mat) {
    return this.ktLinAlgEx_1.eigF_uhndts_k$(mat);
  };
  protoOf(DefaultLinAlgEx).eigC_j4l3xo_k$ = function (mat) {
    return this.ktLinAlgEx_1.eigC_j4l3xo_k$(mat);
  };
  protoOf(DefaultLinAlgEx).eigVals_qy0rfa_k$ = function (mat) {
    return this.ktLinAlgEx_1.eigVals_qy0rfa_k$(mat);
  };
  protoOf(DefaultLinAlgEx).eigValsF_h29sby_k$ = function (mat) {
    return this.ktLinAlgEx_1.eigValsF_h29sby_k$(mat);
  };
  protoOf(DefaultLinAlgEx).eigValsC_cu1a92_k$ = function (mat) {
    return this.ktLinAlgEx_1.eigValsC_cu1a92_k$(mat);
  };
  protoOf(DefaultLinAlgEx).dotMM_nz33tu_k$ = function (a, b) {
    return this.ktLinAlgEx_1.dotMM_nz33tu_k$(a, b);
  };
  protoOf(DefaultLinAlgEx).dotMMComplex_w8suxx_k$ = function (a, b) {
    return this.ktLinAlgEx_1.dotMMComplex_w8suxx_k$(a, b);
  };
  protoOf(DefaultLinAlgEx).dotMV_qhag8k_k$ = function (a, b) {
    return this.ktLinAlgEx_1.dotMV_qhag8k_k$(a, b);
  };
  protoOf(DefaultLinAlgEx).dotMVComplex_qm51jj_k$ = function (a, b) {
    return this.ktLinAlgEx_1.dotMVComplex_qm51jj_k$(a, b);
  };
  protoOf(DefaultLinAlgEx).dotVV_a4pyys_k$ = function (a, b) {
    return this.ktLinAlgEx_1.dotVV_a4pyys_k$(a, b);
  };
  protoOf(DefaultLinAlgEx).dotVVComplex_w72bwn_k$ = function (a, b) {
    return this.ktLinAlgEx_1.dotVVComplex_w72bwn_k$(a, b);
  };
  var DefaultLinAlgEx_instance;
  function DefaultLinAlgEx_getInstance() {
    if (DefaultLinAlgEx_instance == null)
      new DefaultLinAlgEx();
    return DefaultLinAlgEx_instance;
  }
  function _get_ktMath__uqukgq($this) {
    return $this.ktMath_1;
  }
  function DefaultMath() {
    DefaultMath_instance = this;
    this.ktMath_1 = DefaultEngineFactory_getInstance().getEngine_g570lt_k$(KEEngineType_getInstance()).getMath_18ur2a_k$();
  }
  protoOf(DefaultMath).get_mathEx_gj17fo_k$ = function () {
    return DefaultMathEx_getInstance();
  };
  protoOf(DefaultMath).argMax_z87v2k_k$ = function (a) {
    return this.ktMath_1.argMax_z87v2k_k$(a);
  };
  protoOf(DefaultMath).argMax_vnv1gi_k$ = function (a, axis) {
    return this.ktMath_1.argMax_vnv1gi_k$(a, axis);
  };
  protoOf(DefaultMath).argMaxD2_9ppsl1_k$ = function (a, axis) {
    return this.argMax_vnv1gi_k$(a, axis);
  };
  protoOf(DefaultMath).argMaxD3_p2ha1h_k$ = function (a, axis) {
    return this.argMax_vnv1gi_k$(a, axis);
  };
  protoOf(DefaultMath).argMaxD4_ulvah7_k$ = function (a, axis) {
    return this.argMax_vnv1gi_k$(a, axis);
  };
  protoOf(DefaultMath).argMaxDN_dgf1it_k$ = function (a, axis) {
    return this.argMax_vnv1gi_k$(a, axis);
  };
  protoOf(DefaultMath).argMin_mwq6hu_k$ = function (a) {
    return this.ktMath_1.argMin_mwq6hu_k$(a);
  };
  protoOf(DefaultMath).argMin_163kts_k$ = function (a, axis) {
    return this.ktMath_1.argMin_163kts_k$(a, axis);
  };
  protoOf(DefaultMath).argMinD2_vsaazh_k$ = function (a, axis) {
    return this.argMin_163kts_k$(a, axis);
  };
  protoOf(DefaultMath).argMinD3_gfitj1_k$ = function (a, axis) {
    return this.argMin_163kts_k$(a, axis);
  };
  protoOf(DefaultMath).argMinD4_12rc2l_k$ = function (a, axis) {
    return this.argMin_163kts_k$(a, axis);
  };
  protoOf(DefaultMath).argMinDN_s1l21p_k$ = function (a, axis) {
    return this.argMin_163kts_k$(a, axis);
  };
  protoOf(DefaultMath).max_eg1xsm_k$ = function (a) {
    return this.ktMath_1.max_eg1xsm_k$(a);
  };
  protoOf(DefaultMath).max_atn8iw_k$ = function (a, axis) {
    return this.ktMath_1.max_atn8iw_k$(a, axis);
  };
  protoOf(DefaultMath).maxD2_t8qml1_k$ = function (a, axis) {
    return this.max_atn8iw_k$(a, axis);
  };
  protoOf(DefaultMath).maxD3_dvz54l_k$ = function (a, axis) {
    return this.max_atn8iw_k$(a, axis);
  };
  protoOf(DefaultMath).maxD4_1gscbv_k$ = function (a, axis) {
    return this.max_atn8iw_k$(a, axis);
  };
  protoOf(DefaultMath).maxDN_pi1dn9_k$ = function (a, axis) {
    return this.max_atn8iw_k$(a, axis);
  };
  protoOf(DefaultMath).min_rc7y7c_k$ = function (a) {
    return this.ktMath_1.min_rc7y7c_k$(a);
  };
  protoOf(DefaultMath).min_rdi75y_k$ = function (a, axis) {
    return this.ktMath_1.min_rdi75y_k$(a, axis);
  };
  protoOf(DefaultMath).minD2_adbtl_k$ = function (a, axis) {
    return this.min_rdi75y_k$(a, axis);
  };
  protoOf(DefaultMath).minD3_fn4ta1_k$ = function (a, axis) {
    return this.min_rdi75y_k$(a, axis);
  };
  protoOf(DefaultMath).minD4_uzwaqh_k$ = function (a, axis) {
    return this.min_rdi75y_k$(a, axis);
  };
  protoOf(DefaultMath).minDN_412krd_k$ = function (a, axis) {
    return this.min_rdi75y_k$(a, axis);
  };
  protoOf(DefaultMath).sum_9q6oq7_k$ = function (a) {
    return this.ktMath_1.sum_9q6oq7_k$(a);
  };
  protoOf(DefaultMath).sum_hldkm9_k$ = function (a, axis) {
    return this.ktMath_1.sum_hldkm9_k$(a, axis);
  };
  protoOf(DefaultMath).sumD2_tq4fam_k$ = function (a, axis) {
    return this.sum_hldkm9_k$(a, axis);
  };
  protoOf(DefaultMath).sumD3_edcxu6_k$ = function (a, axis) {
    return this.sum_hldkm9_k$(a, axis);
  };
  protoOf(DefaultMath).sumD4_zejma_k$ = function (a, axis) {
    return this.sum_hldkm9_k$(a, axis);
  };
  protoOf(DefaultMath).sumDN_pzf6cu_k$ = function (a, axis) {
    return this.sum_hldkm9_k$(a, axis);
  };
  protoOf(DefaultMath).cumSum_ieg9jq_k$ = function (a) {
    return this.ktMath_1.cumSum_ieg9jq_k$(a);
  };
  protoOf(DefaultMath).cumSum_xdeawu_k$ = function (a, axis) {
    return this.ktMath_1.cumSum_xdeawu_k$(a, axis);
  };
  var DefaultMath_instance;
  function DefaultMath_getInstance() {
    if (DefaultMath_instance == null)
      new DefaultMath();
    return DefaultMath_instance;
  }
  function _get_ktMathEx__24ub89($this) {
    return $this.ktMathEx_1;
  }
  function DefaultMathEx() {
    DefaultMathEx_instance = this;
    this.ktMathEx_1 = DefaultEngineFactory_getInstance().getEngine_g570lt_k$(KEEngineType_getInstance()).getMath_18ur2a_k$().get_mathEx_gj17fo_k$();
  }
  protoOf(DefaultMathEx).exp_ws8oyl_k$ = function (a) {
    return this.ktMathEx_1.exp_ws8oyl_k$(a);
  };
  protoOf(DefaultMathEx).expF_80m2xm_k$ = function (a) {
    return this.ktMathEx_1.expF_80m2xm_k$(a);
  };
  protoOf(DefaultMathEx).expCF_4luoi6_k$ = function (a) {
    return this.ktMathEx_1.expCF_4luoi6_k$(a);
  };
  protoOf(DefaultMathEx).expCD_aq6t93_k$ = function (a) {
    return this.ktMathEx_1.expCD_aq6t93_k$(a);
  };
  protoOf(DefaultMathEx).log_ff07zq_k$ = function (a) {
    return this.ktMathEx_1.log_ff07zq_k$(a);
  };
  protoOf(DefaultMathEx).logF_l3dur7_k$ = function (a) {
    return this.ktMathEx_1.logF_l3dur7_k$(a);
  };
  protoOf(DefaultMathEx).logCF_v6w0bd_k$ = function (a) {
    return this.ktMathEx_1.logCF_v6w0bd_k$(a);
  };
  protoOf(DefaultMathEx).logCD_g0moxc_k$ = function (a) {
    return this.ktMathEx_1.logCD_g0moxc_k$(a);
  };
  protoOf(DefaultMathEx).sin_493g0y_k$ = function (a) {
    return this.ktMathEx_1.sin_493g0y_k$(a);
  };
  protoOf(DefaultMathEx).sinF_bx69nj_k$ = function (a) {
    return this.ktMathEx_1.sinF_bx69nj_k$(a);
  };
  protoOf(DefaultMathEx).sinCF_o9ivjh_k$ = function (a) {
    return this.ktMathEx_1.sinCF_o9ivjh_k$(a);
  };
  protoOf(DefaultMathEx).sinCD_hnln0k_k$ = function (a) {
    return this.ktMathEx_1.sinCD_hnln0k_k$(a);
  };
  protoOf(DefaultMathEx).cos_rsmb2l_k$ = function (a) {
    return this.ktMathEx_1.cos_rsmb2l_k$(a);
  };
  protoOf(DefaultMathEx).cosF_q75768_k$ = function (a) {
    return this.ktMathEx_1.cosF_q75768_k$(a);
  };
  protoOf(DefaultMathEx).cosCF_1a7vvo_k$ = function (a) {
    return this.ktMathEx_1.cosCF_1a7vvo_k$(a);
  };
  protoOf(DefaultMathEx).cosCD_sbenbn_k$ = function (a) {
    return this.ktMathEx_1.cosCD_sbenbn_k$(a);
  };
  var DefaultMathEx_instance;
  function DefaultMathEx_getInstance() {
    if (DefaultMathEx_instance == null)
      new DefaultMathEx();
    return DefaultMathEx_instance;
  }
  function _get_ktStat__uuh2z2($this) {
    return $this.ktStat_1;
  }
  function DefaultStatistics() {
    DefaultStatistics_instance = this;
    this.ktStat_1 = DefaultEngineFactory_getInstance().getEngine_g570lt_k$(KEEngineType_getInstance()).getStatistics_6hl59j_k$();
  }
  protoOf(DefaultStatistics).median_pmi500_k$ = function (a) {
    return this.ktStat_1.median_pmi500_k$(a);
  };
  protoOf(DefaultStatistics).average_4l27s0_k$ = function (a, weights) {
    return this.ktStat_1.average_4l27s0_k$(a, weights);
  };
  protoOf(DefaultStatistics).mean_i8qaph_k$ = function (a) {
    return this.ktStat_1.mean_i8qaph_k$(a);
  };
  protoOf(DefaultStatistics).mean_grlo87_k$ = function (a, axis) {
    return this.ktStat_1.mean_grlo87_k$(a, axis);
  };
  protoOf(DefaultStatistics).meanD2_kgxclo_k$ = function (a, axis) {
    return this.mean_grlo87_k$(a, axis);
  };
  protoOf(DefaultStatistics).meanD3_z7f7x0_k$ = function (a, axis) {
    return this.mean_grlo87_k$(a, axis);
  };
  protoOf(DefaultStatistics).meanD4_junqgk_k$ = function (a, axis) {
    return this.mean_grlo87_k$(a, axis);
  };
  protoOf(DefaultStatistics).meanDN_o7mljg_k$ = function (a, axis) {
    return this.mean_grlo87_k$(a, axis);
  };
  var DefaultStatistics_instance;
  function DefaultStatistics_getInstance() {
    if (DefaultStatistics_instance == null)
      new DefaultStatistics();
    return DefaultStatistics_instance;
  }
  //region block: post-declaration
  protoOf(DefaultEngineFactory).getEngine$default_2euzby_k$ = getEngine$default;
  protoOf(DefaultLinAlgEx).normF$default_x889r4_k$ = normF$default;
  protoOf(DefaultLinAlgEx).norm$default_w2yvwb_k$ = norm$default;
  protoOf(DefaultStatistics).average$default_8r7m3b_k$ = average$default;
  //endregion
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

//# sourceMappingURL=multik-multik-default.js.map
