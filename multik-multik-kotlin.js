(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './multik-multik-core.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./multik-multik-core.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['multik-multik-core'] === 'undefined') {
      throw new Error("Error loading module 'multik-multik-kotlin'. Its dependency 'multik-multik-core' was not found. Please, check whether 'multik-multik-core' is loaded prior to 'multik-multik-kotlin'.");
    }
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'multik-multik-kotlin'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'multik-multik-kotlin'.");
    }
    root['multik-multik-kotlin'] = factory(typeof this['multik-multik-kotlin'] === 'undefined' ? {} : this['multik-multik-kotlin'], this['multik-multik-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_org_jetbrains_kotlinx_multik_core, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var hypot = Math.hypot;
  var cosh = Math.cosh;
  var sinh = Math.sinh;
  var Engine = kotlin_org_jetbrains_kotlinx_multik_core.$_$.i1;
  var protoOf = kotlin_kotlin.$_$.ye;
  var KEEngineType_getInstance = kotlin_org_jetbrains_kotlinx_multik_core.$_$.r;
  var classMeta = kotlin_kotlin.$_$.id;
  var setMetadataFor = kotlin_kotlin.$_$.ze;
  var VOID = kotlin_kotlin.$_$.f;
  var Multik_getInstance = kotlin_org_jetbrains_kotlinx_multik_core.$_$.s;
  var identity = kotlin_org_jetbrains_kotlinx_multik_core.$_$.k1;
  var dot = kotlin_org_jetbrains_kotlinx_multik_core.$_$.d1;
  var LinAlg = kotlin_org_jetbrains_kotlinx_multik_core.$_$.c1;
  var objectMeta = kotlin_kotlin.$_$.xe;
  var CopyStrategy_MEANINGFUL_getInstance = kotlin_org_jetbrains_kotlinx_multik_core.$_$.j;
  var toType = kotlin_org_jetbrains_kotlinx_multik_core.$_$.p2;
  var DataType_DoubleDataType_getInstance = kotlin_org_jetbrains_kotlinx_multik_core.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.pj;
  var MultiArray = kotlin_org_jetbrains_kotlinx_multik_core.$_$.t1;
  var isInterface = kotlin_kotlin.$_$.fe;
  var NDArray = kotlin_org_jetbrains_kotlinx_multik_core.$_$.u1;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var get = kotlin_org_jetbrains_kotlinx_multik_core.$_$.y1;
  var get_0 = kotlin_org_jetbrains_kotlinx_multik_core.$_$.c2;
  var set = kotlin_org_jetbrains_kotlinx_multik_core.$_$.g2;
  var Triple = kotlin_kotlin.$_$.rj;
  var DataType_FloatDataType_getInstance = kotlin_org_jetbrains_kotlinx_multik_core.$_$.e;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nk;
  var normF$default = kotlin_org_jetbrains_kotlinx_multik_core.$_$.k;
  var norm$default = kotlin_org_jetbrains_kotlinx_multik_core.$_$.l;
  var CopyStrategy_FULL_getInstance = kotlin_org_jetbrains_kotlinx_multik_core.$_$.i;
  var Companion_getInstance = kotlin_org_jetbrains_kotlinx_multik_core.$_$.a1;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.t4;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var DataType_ComplexDoubleDataType_getInstance = kotlin_org_jetbrains_kotlinx_multik_core.$_$.b;
  var ComplexDouble = kotlin_org_jetbrains_kotlinx_multik_core.$_$.m1;
  var getKClass = kotlin_kotlin.$_$.d;
  var DataType_ComplexFloatDataType_getInstance = kotlin_org_jetbrains_kotlinx_multik_core.$_$.c;
  var ComplexFloat = kotlin_org_jetbrains_kotlinx_multik_core.$_$.n1;
  var DataType_LongDataType_getInstance = kotlin_org_jetbrains_kotlinx_multik_core.$_$.g;
  var Long = kotlin_kotlin.$_$.jj;
  var DataType_IntDataType_getInstance = kotlin_org_jetbrains_kotlinx_multik_core.$_$.f;
  var DataType_ShortDataType_getInstance = kotlin_org_jetbrains_kotlinx_multik_core.$_$.h;
  var DataType_ByteDataType_getInstance = kotlin_org_jetbrains_kotlinx_multik_core.$_$.a;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.d2;
  var Pair = kotlin_kotlin.$_$.mj;
  var NotImplementedError = kotlin_kotlin.$_$.lj;
  var LinAlgEx = kotlin_org_jetbrains_kotlinx_multik_core.$_$.b1;
  var isNumber = kotlin_kotlin.$_$.he;
  var Complex = kotlin_org_jetbrains_kotlinx_multik_core.$_$.o1;
  var get_lastIndex = kotlin_kotlin.$_$.i8;
  var initMemoryView = kotlin_org_jetbrains_kotlinx_multik_core.$_$.d2;
  var Companion_getInstance_0 = kotlin_org_jetbrains_kotlinx_multik_core.$_$.x;
  var Companion_getInstance_1 = kotlin_org_jetbrains_kotlinx_multik_core.$_$.w;
  var toShort = kotlin_kotlin.$_$.df;
  var toByte = kotlin_kotlin.$_$.bf;
  var Companion_getInstance_2 = kotlin_org_jetbrains_kotlinx_multik_core.$_$.v;
  var Companion_getInstance_3 = kotlin_org_jetbrains_kotlinx_multik_core.$_$.u;
  var toString = kotlin_kotlin.$_$.ef;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var initMemoryView_0 = kotlin_org_jetbrains_kotlinx_multik_core.$_$.e2;
  var zeros = kotlin_org_jetbrains_kotlinx_multik_core.$_$.l1;
  var toComplexFloat = kotlin_org_jetbrains_kotlinx_multik_core.$_$.q1;
  var until = kotlin_kotlin.$_$.vf;
  var get_1 = kotlin_org_jetbrains_kotlinx_multik_core.$_$.x1;
  var timesAssign = kotlin_org_jetbrains_kotlinx_multik_core.$_$.n2;
  var get_2 = kotlin_org_jetbrains_kotlinx_multik_core.$_$.z1;
  var set_0 = kotlin_org_jetbrains_kotlinx_multik_core.$_$.h2;
  var get_3 = kotlin_org_jetbrains_kotlinx_multik_core.$_$.a2;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var toComplexDouble = kotlin_org_jetbrains_kotlinx_multik_core.$_$.p1;
  var get_4 = kotlin_org_jetbrains_kotlinx_multik_core.$_$.b2;
  var Unit_getInstance = kotlin_kotlin.$_$.d5;
  var joinToString = kotlin_kotlin.$_$.e8;
  var first = kotlin_org_jetbrains_kotlinx_multik_core.$_$.k2;
  var compareTo = kotlin_org_jetbrains_kotlinx_multik_core.$_$.w1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var get_r = kotlin_org_jetbrains_kotlinx_multik_core.$_$.f2;
  var RInt__until_impl_2ge59w = kotlin_org_jetbrains_kotlinx_multik_core.$_$.p;
  var RInt = kotlin_org_jetbrains_kotlinx_multik_core.$_$.v1;
  var slice = kotlin_org_jetbrains_kotlinx_multik_core.$_$.i2;
  var Companion_getInstance_4 = kotlin_org_jetbrains_kotlinx_multik_core.$_$.y;
  var Companion_getInstance_5 = kotlin_org_jetbrains_kotlinx_multik_core.$_$.z;
  var DN = kotlin_org_jetbrains_kotlinx_multik_core.$_$.r1;
  var Dimension = kotlin_org_jetbrains_kotlinx_multik_core.$_$.s1;
  var plusAssign = kotlin_org_jetbrains_kotlinx_multik_core.$_$.l2;
  var numberToDouble = kotlin_kotlin.$_$.se;
  var RInt__minus_impl_xkujuu = kotlin_org_jetbrains_kotlinx_multik_core.$_$.o;
  var Math_0 = kotlin_org_jetbrains_kotlinx_multik_core.$_$.f1;
  var sliceArray = kotlin_kotlin.$_$.aa;
  var numberRangeToNumber = kotlin_kotlin.$_$.pe;
  var primitiveArrayConcat = kotlin_kotlin.$_$.e;
  var floatArrayIterator = kotlin_kotlin.$_$.od;
  var doubleArrayIterator = kotlin_kotlin.$_$.ld;
  var intArrayIterator = kotlin_kotlin.$_$.vd;
  var longArrayIterator = kotlin_kotlin.$_$.le;
  var shortArrayIterator = kotlin_kotlin.$_$.af;
  var byteArrayIterator = kotlin_kotlin.$_$.bd;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.j1;
  var MathEx = kotlin_org_jetbrains_kotlinx_multik_core.$_$.e1;
  var sorted = kotlin_org_jetbrains_kotlinx_multik_core.$_$.m2;
  var times = kotlin_org_jetbrains_kotlinx_multik_core.$_$.o2;
  var average$default = kotlin_org_jetbrains_kotlinx_multik_core.$_$.m;
  var div = kotlin_org_jetbrains_kotlinx_multik_core.$_$.j2;
  var Statistics = kotlin_org_jetbrains_kotlinx_multik_core.$_$.g1;
  var get_enginesStore = kotlin_org_jetbrains_kotlinx_multik_core.$_$.j1;
  var defineProp = kotlin_kotlin.$_$.kd;
  //endregion
  //region block: pre-declaration
  setMetadataFor(KEEngine, 'KEEngine', classMeta, Engine, VOID, KEEngine);
  setMetadataFor(KELinAlg, 'KELinAlg', objectMeta, VOID, [LinAlg]);
  setMetadataFor(KELinAlgEx, 'KELinAlgEx', objectMeta, VOID, [LinAlgEx]);
  setMetadataFor(KEMath, 'KEMath', objectMeta, VOID, [Math_0]);
  setMetadataFor(KEMathEx, 'KEMathEx', objectMeta, VOID, [MathEx]);
  setMetadataFor(KEStatistics, 'KEStatistics', objectMeta, VOID, [Statistics]);
  setMetadataFor(EngineInitializer, 'EngineInitializer', objectMeta);
  //endregion
  function KEEngine() {
    Engine.call(this);
  }
  protoOf(KEEngine).get_name_woqyms_k$ = function () {
    return this.get_type_wovaf7_k$().get_name_woqyms_k$();
  };
  protoOf(KEEngine).get_type_wovaf7_k$ = function () {
    return KEEngineType_getInstance();
  };
  protoOf(KEEngine).getMath_18ur2a_k$ = function () {
    return KEMath_getInstance();
  };
  protoOf(KEEngine).getLinAlg_9t8ny9_k$ = function () {
    return KELinAlg_getInstance();
  };
  protoOf(KEEngine).getStatistics_6hl59j_k$ = function () {
    return KEStatistics_getInstance();
  };
  function KELinAlg() {
    KELinAlg_instance = this;
  }
  protoOf(KELinAlg).get_linAlgEx_com6e1_k$ = function () {
    return KELinAlgEx_getInstance();
  };
  protoOf(KELinAlg).pow_obkcvl_k$ = function (mat, n) {
    if (n === 0)
      return identity(Multik_getInstance(), mat.get_shape_iyi9a0_k$()[0], mat.get_dtype_iqhi0l_k$());
    var tmp;
    if ((n % 2 | 0) === 0) {
      var tmp_0 = this.pow_obkcvl_k$(mat, n / 2 | 0);
      tmp = dot(this, tmp_0, tmp_0);
    } else {
      tmp = dot(this, mat, this.pow_obkcvl_k$(mat, n - 1 | 0));
    }
    return tmp;
  };
  var KELinAlg_instance;
  function KELinAlg_getInstance() {
    if (KELinAlg_instance == null)
      new KELinAlg();
    return KELinAlg_instance;
  }
  function solveCommon($this, a, b, dtype) {
    requireSquare(a.get_shape_iyi9a0_k$());
    requireDotShape(a.get_shape_iyi9a0_k$(), b.get_shape_iyi9a0_k$());
    var _a = toType(a, dtype, CopyStrategy_MEANINGFUL_getInstance());
    var bTyped = dtype.equals(DataType_DoubleDataType_getInstance()) ? toType(b, dtype, CopyStrategy_MEANINGFUL_getInstance()) : b;
    var tmp = bTyped.get_dim_18j7c1_k$().get_d_1mhr5n_k$() === 2 ? bTyped : bTyped.reshape_iibt4i_k$(bTyped.get_shape_iyi9a0_k$()[0], 1);
    var _b = isInterface(tmp, MultiArray) ? tmp : THROW_CCE();
    var tmp_0;
    switch (dtype.get_ordinal_ip24qg_k$()) {
      case 5:
        var tmp_1 = _a instanceof NDArray ? _a : THROW_CCE();
        tmp_0 = solveDouble(tmp_1, _b instanceof NDArray ? _b : THROW_CCE());
        break;
      case 4:
        var tmp_2 = _a instanceof NDArray ? _a : THROW_CCE();
        tmp_0 = solveFloat(tmp_2, _b instanceof NDArray ? _b : THROW_CCE());
        break;
      case 7:
        var tmp_3 = _a instanceof NDArray ? _a : THROW_CCE();
        tmp_0 = solveComplexDouble(tmp_3, _b instanceof NDArray ? _b : THROW_CCE());
        break;
      case 6:
        var tmp_4 = _a instanceof NDArray ? _a : THROW_CCE();
        tmp_0 = solveComplexFloat(tmp_4, _b instanceof NDArray ? _b : THROW_CCE());
        break;
      default:
        throw UnsupportedOperationException_init_$Create$();
    }
    var ans = tmp_0;
    var tmp_5 = b.get_dim_18j7c1_k$().get_d_1mhr5n_k$() === 2 ? ans : ans.reshape_9zb96y_k$(ans.get_shape_iyi9a0_k$()[0]);
    return tmp_5 instanceof NDArray ? tmp_5 : THROW_CCE();
  }
  function pluCommon($this, mat, dtype) {
    var a = toType(mat, dtype, CopyStrategy_MEANINGFUL_getInstance());
    var tmp0_container = pluCompressed(a);
    var perm = tmp0_container.component1_7eebsc_k$();
    var L = tmp0_container.component2_7eebsb_k$();
    var U = tmp0_container.component3_7eebsa_k$();
    var P = identity(Multik_getInstance(), a.get_shape_iyi9a0_k$()[0], dtype);
    var progression = perm.get_indices_xelk8u_k$();
    var last = progression.get_first_irdx8n_k$();
    var inductionVariable = progression.get_last_wopotb_k$();
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (!(get(perm, i) === 0)) {
          var inductionVariable_0 = 0;
          var last_0 = P.get_shape_iyi9a0_k$()[1];
          if (inductionVariable_0 < last_0)
            do {
              var k = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              // Inline function 'kotlin.also' call
              var this_0 = get_0(P, i + get(perm, i) | 0, k);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.KELinAlgEx.pluCommon.<anonymous>' call
              set(P, i + get(perm, i) | 0, k, get_0(P, i, k));
              set(P, i, k, this_0);
            }
             while (inductionVariable_0 < last_0);
        }
      }
       while (!(i === last));
    return new Triple(P, L, U);
  }
  function KELinAlgEx() {
    KELinAlgEx_instance = this;
  }
  protoOf(KELinAlgEx).inv_wap2b6_k$ = function (mat) {
    return solveCommon(this, mat, identity(Multik_getInstance(), mat.get_shape_iyi9a0_k$()[0], mat.get_dtype_iqhi0l_k$()), mat.get_dtype_iqhi0l_k$());
  };
  protoOf(KELinAlgEx).invF_rb20vi_k$ = function (mat) {
    return solveCommon(this, mat, identity(Multik_getInstance(), mat.get_shape_iyi9a0_k$()[0], mat.get_dtype_iqhi0l_k$()), mat.get_dtype_iqhi0l_k$());
  };
  protoOf(KELinAlgEx).invC_e7w3lu_k$ = function (mat) {
    return solveCommon(this, mat, identity(Multik_getInstance(), mat.get_shape_iyi9a0_k$()[0], mat.get_dtype_iqhi0l_k$()), mat.get_dtype_iqhi0l_k$());
  };
  protoOf(KELinAlgEx).solve_ysm011_k$ = function (a, b) {
    return solveCommon(this, a, b, DataType_DoubleDataType_getInstance());
  };
  protoOf(KELinAlgEx).solveF_uks66d_k$ = function (a, b) {
    return solveCommon(this, a, b, DataType_FloatDataType_getInstance());
  };
  protoOf(KELinAlgEx).solveC_22gn3p_k$ = function (a, b) {
    return solveCommon(this, a, b, a.get_dtype_iqhi0l_k$());
  };
  protoOf(KELinAlgEx).normF_epcj1p_k$ = function (mat, norm) {
    var tmp;
    switch (norm.get_ordinal_ip24qg_k$()) {
      case 3:
        tmp = normFro(mat.get_data_wokkxf_k$().getFloatArray_m77gkt_k$(), mat.get_offset_hjmqak_k$(), mat.get_strides_tusw1b_k$(), mat.get_shape_iyi9a0_k$()[0], mat.get_shape_iyi9a0_k$()[1], 2);
        break;
      case 1:
        tmp = norm1(mat.get_data_wokkxf_k$().getFloatArray_m77gkt_k$(), mat.get_offset_hjmqak_k$(), mat.get_strides_tusw1b_k$(), mat.get_shape_iyi9a0_k$()[0], mat.get_shape_iyi9a0_k$()[1]);
        break;
      case 0:
        tmp = normMax(mat.get_data_wokkxf_k$().getFloatArray_m77gkt_k$(), mat.get_offset_hjmqak_k$(), mat.get_strides_tusw1b_k$(), mat.get_shape_iyi9a0_k$()[0], mat.get_shape_iyi9a0_k$()[1]);
        break;
      case 2:
        tmp = normInf(mat.get_data_wokkxf_k$().getFloatArray_m77gkt_k$(), mat.get_offset_hjmqak_k$(), mat.get_strides_tusw1b_k$(), mat.get_shape_iyi9a0_k$()[0], mat.get_shape_iyi9a0_k$()[1]);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(KELinAlgEx).norm_8u084u_k$ = function (mat, norm) {
    var tmp;
    switch (norm.get_ordinal_ip24qg_k$()) {
      case 3:
        tmp = normFro_0(mat.get_data_wokkxf_k$().getDoubleArray_x8889e_k$(), mat.get_offset_hjmqak_k$(), mat.get_strides_tusw1b_k$(), mat.get_shape_iyi9a0_k$()[0], mat.get_shape_iyi9a0_k$()[1], 2);
        break;
      case 1:
        tmp = norm1_0(mat.get_data_wokkxf_k$().getDoubleArray_x8889e_k$(), mat.get_offset_hjmqak_k$(), mat.get_strides_tusw1b_k$(), mat.get_shape_iyi9a0_k$()[0], mat.get_shape_iyi9a0_k$()[1]);
        break;
      case 0:
        tmp = normMax_0(mat.get_data_wokkxf_k$().getDoubleArray_x8889e_k$(), mat.get_offset_hjmqak_k$(), mat.get_strides_tusw1b_k$(), mat.get_shape_iyi9a0_k$()[0], mat.get_shape_iyi9a0_k$()[1]);
        break;
      case 2:
        tmp = normInf_0(mat.get_data_wokkxf_k$().getDoubleArray_x8889e_k$(), mat.get_offset_hjmqak_k$(), mat.get_strides_tusw1b_k$(), mat.get_shape_iyi9a0_k$()[0], mat.get_shape_iyi9a0_k$()[1]);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(KELinAlgEx).qr_dl4wf6_k$ = function (mat) {
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.toType' call
    var copy = CopyStrategy_FULL_getInstance();
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.Companion.ofKClass' call
    Companion_getInstance();
    var type = PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$();
    var tmp;
    if (type.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp = DataType_ByteDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp = DataType_ShortDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp = DataType_IntDataType_getInstance();
    } else if (type.equals(getKClass(Long))) {
      tmp = DataType_LongDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp = DataType_FloatDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp = DataType_DoubleDataType_getInstance();
    } else if (type.equals(getKClass(ComplexFloat))) {
      tmp = DataType_ComplexFloatDataType_getInstance();
    } else if (type.equals(getKClass(ComplexDouble))) {
      tmp = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, got ' + type.get_simpleName_r6f8py_k$());
    }
    var dtype = tmp;
    var tmp$ret$1 = toType(mat, dtype, copy);
    return qrDouble(tmp$ret$1);
  };
  protoOf(KELinAlgEx).qrF_qm0b32_k$ = function (mat) {
    return qrFloat(mat);
  };
  protoOf(KELinAlgEx).qrC_fzs67m_k$ = function (mat) {
    var tmp;
    switch (mat.get_dtype_iqhi0l_k$().get_ordinal_ip24qg_k$()) {
      case 6:
        tmp = qrComplexFloat(isInterface(mat, MultiArray) ? mat : THROW_CCE());
        break;
      case 7:
        tmp = qrComplexDouble(isInterface(mat, MultiArray) ? mat : THROW_CCE());
        break;
      default:
        throw UnsupportedOperationException_init_$Create$_0('Matrix should be complex');
    }
    var tmp_0 = tmp;
    return tmp_0 instanceof Pair ? tmp_0 : THROW_CCE();
  };
  protoOf(KELinAlgEx).plu_rruare_k$ = function (mat) {
    return pluCommon(this, mat, DataType_DoubleDataType_getInstance());
  };
  protoOf(KELinAlgEx).pluF_f3s4qe_k$ = function (mat) {
    return pluCommon(this, mat, DataType_FloatDataType_getInstance());
  };
  protoOf(KELinAlgEx).pluC_bbo8fq_k$ = function (mat) {
    return pluCommon(this, mat, mat.get_dtype_iqhi0l_k$());
  };
  protoOf(KELinAlgEx).svdF_2wjrfm_k$ = function (mat) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(KELinAlgEx).svd_s3q2e6_k$ = function (mat) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(KELinAlgEx).svdC_dlu4b2_k$ = function (mat) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(KELinAlgEx).eig_tne83o_k$ = function (mat) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(KELinAlgEx).eigF_uhndts_k$ = function (mat) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(KELinAlgEx).eigC_j4l3xo_k$ = function (mat) {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(KELinAlgEx).eigVals_qy0rfa_k$ = function (mat) {
    return eigenValuesCommon(mat, DataType_ComplexDoubleDataType_getInstance());
  };
  protoOf(KELinAlgEx).eigValsF_h29sby_k$ = function (mat) {
    return eigenValuesCommon(mat, DataType_ComplexFloatDataType_getInstance());
  };
  protoOf(KELinAlgEx).eigValsC_cu1a92_k$ = function (mat) {
    return eigenValuesCommon(mat, mat.get_dtype_iqhi0l_k$());
  };
  protoOf(KELinAlgEx).dotMM_nz33tu_k$ = function (a, b) {
    return dotMatrix(a, b);
  };
  protoOf(KELinAlgEx).dotMMComplex_w8suxx_k$ = function (a, b) {
    return dotMatrixComplex(a, b);
  };
  protoOf(KELinAlgEx).dotMV_qhag8k_k$ = function (a, b) {
    return dotMatrixToVector(a, b);
  };
  protoOf(KELinAlgEx).dotMVComplex_qm51jj_k$ = function (a, b) {
    return dotMatrixToVectorComplex(a, b);
  };
  protoOf(KELinAlgEx).dotVV_a4pyys_k$ = function (a, b) {
    return dotVecToVec(a, b);
  };
  protoOf(KELinAlgEx).dotVVComplex_w72bwn_k$ = function (a, b) {
    return dotVecToVecComplex(a, b);
  };
  var KELinAlgEx_instance;
  function KELinAlgEx_getInstance() {
    if (KELinAlgEx_instance == null)
      new KELinAlgEx();
    return KELinAlgEx_instance;
  }
  function dotMatrix(a, b) {
    return dotMatrixCommon(a, b);
  }
  function dotMatrixComplex(a, b) {
    return dotMatrixCommon(a, b);
  }
  function dotMatrixToVector(a, b) {
    return dotMatrixToVectorCommon(a, b);
  }
  function dotMatrixToVectorComplex(a, b) {
    return dotMatrixToVectorCommon(a, b);
  }
  function dotVecToVec(a, b) {
    var tmp;
    switch (a.get_dtype_iqhi0l_k$().get_ordinal_ip24qg_k$()) {
      case 4:
        tmp = dotVecToVec_0(a.get_data_wokkxf_k$().getFloatArray_m77gkt_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$()[0], b.get_data_wokkxf_k$().getFloatArray_m77gkt_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$()[0], a.get_size_woubt6_k$());
        break;
      case 2:
        tmp = dotVecToVec_1(a.get_data_wokkxf_k$().getIntArray_rs62n4_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$()[0], b.get_data_wokkxf_k$().getIntArray_rs62n4_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$()[0], a.get_size_woubt6_k$());
        break;
      case 5:
        tmp = dotVecToVec_2(a.get_data_wokkxf_k$().getDoubleArray_x8889e_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$()[0], b.get_data_wokkxf_k$().getDoubleArray_x8889e_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$()[0], a.get_size_woubt6_k$());
        break;
      case 3:
        tmp = dotVecToVec_3(a.get_data_wokkxf_k$().getLongArray_1i1953_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$()[0], b.get_data_wokkxf_k$().getLongArray_1i1953_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$()[0], a.get_size_woubt6_k$());
        break;
      case 1:
        tmp = dotVecToVec_4(a.get_data_wokkxf_k$().getShortArray_kijo6r_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$()[0], b.get_data_wokkxf_k$().getShortArray_kijo6r_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$()[0], a.get_size_woubt6_k$());
        break;
      case 0:
        tmp = dotVecToVec_5(a.get_data_wokkxf_k$().getByteArray_yjfvk5_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$()[0], b.get_data_wokkxf_k$().getByteArray_yjfvk5_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$()[0], a.get_size_woubt6_k$());
        break;
      default:
        throw UnsupportedOperationException_init_$Create$();
    }
    var tmp_0 = tmp;
    return isNumber(tmp_0) ? tmp_0 : THROW_CCE();
  }
  function dotVecToVecComplex(a, b) {
    var tmp;
    switch (a.get_dtype_iqhi0l_k$().get_ordinal_ip24qg_k$()) {
      case 6:
        tmp = dotVecToVecComplex_0(a.get_data_wokkxf_k$().getComplexFloatArray_56zcs7_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$()[0], b.get_data_wokkxf_k$().getComplexFloatArray_56zcs7_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$()[0], a.get_size_woubt6_k$());
        break;
      case 7:
        tmp = dotVecToVecComplex_1(a.get_data_wokkxf_k$().getComplexDoubleArray_u2qur2_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$()[0], b.get_data_wokkxf_k$().getComplexDoubleArray_u2qur2_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$()[0], a.get_size_woubt6_k$());
        break;
      default:
        throw UnsupportedOperationException_init_$Create$();
    }
    var tmp_0 = tmp;
    return isInterface(tmp_0, Complex) ? tmp_0 : THROW_CCE();
  }
  function dotMatrixCommon(a, b) {
    requireDotShape(a.get_shape_iyi9a0_k$(), b.get_shape_iyi9a0_k$());
    // Inline function 'kotlin.intArrayOf' call
    var newShape = new Int32Array([a.get_shape_iyi9a0_k$()[0], b.get_shape_iyi9a0_k$()[1]]);
    // Inline function 'kotlin.collections.reduce' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (newShape.length === 0)
      throw UnsupportedOperationException_init_$Create$_0("Empty array can't be reduced.");
    var accumulator = newShape[0];
    var inductionVariable = 1;
    var last = get_lastIndex(newShape);
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        accumulator = imul(accumulator, newShape[index]);
      }
       while (!(index === last));
    var size = accumulator;
    var ret = new NDArray(initMemoryView(size, a.get_dtype_iqhi0l_k$()), 0, newShape, VOID, Companion_getInstance_0());
    switch (a.get_dtype_iqhi0l_k$().get_ordinal_ip24qg_k$()) {
      case 4:
        dotMatrix_0(a.get_data_wokkxf_k$().getFloatArray_m77gkt_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$(), b.get_data_wokkxf_k$().getFloatArray_m77gkt_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$(), newShape[0], newShape[1], a.get_shape_iyi9a0_k$()[1], ret.get_data_wokkxf_k$().getFloatArray_m77gkt_k$(), ret.get_strides_tusw1b_k$()[0]);
        break;
      case 2:
        dotMatrix_1(a.get_data_wokkxf_k$().getIntArray_rs62n4_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$(), b.get_data_wokkxf_k$().getIntArray_rs62n4_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$(), newShape[0], newShape[1], a.get_shape_iyi9a0_k$()[1], ret.get_data_wokkxf_k$().getIntArray_rs62n4_k$(), ret.get_strides_tusw1b_k$()[0]);
        break;
      case 5:
        dotMatrix_2(a.get_data_wokkxf_k$().getDoubleArray_x8889e_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$(), b.get_data_wokkxf_k$().getDoubleArray_x8889e_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$(), newShape[0], newShape[1], a.get_shape_iyi9a0_k$()[1], ret.get_data_wokkxf_k$().getDoubleArray_x8889e_k$(), ret.get_strides_tusw1b_k$()[0]);
        break;
      case 3:
        dotMatrix_3(a.get_data_wokkxf_k$().getLongArray_1i1953_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$(), b.get_data_wokkxf_k$().getLongArray_1i1953_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$(), newShape[0], newShape[1], a.get_shape_iyi9a0_k$()[1], ret.get_data_wokkxf_k$().getLongArray_1i1953_k$(), ret.get_strides_tusw1b_k$()[0]);
        break;
      case 7:
        dotMatrixComplex_0(a.get_data_wokkxf_k$().getComplexDoubleArray_u2qur2_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$(), b.get_data_wokkxf_k$().getComplexDoubleArray_u2qur2_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$(), newShape[0], newShape[1], a.get_shape_iyi9a0_k$()[1], ret.get_data_wokkxf_k$().getComplexDoubleArray_u2qur2_k$(), ret.get_strides_tusw1b_k$()[0]);
        break;
      case 6:
        dotMatrixComplex_1(a.get_data_wokkxf_k$().getComplexFloatArray_56zcs7_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$(), b.get_data_wokkxf_k$().getComplexFloatArray_56zcs7_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$(), newShape[0], newShape[1], a.get_shape_iyi9a0_k$()[1], ret.get_data_wokkxf_k$().getComplexFloatArray_56zcs7_k$(), ret.get_strides_tusw1b_k$()[0]);
        break;
      case 1:
        dotMatrix_4(a.get_data_wokkxf_k$().getShortArray_kijo6r_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$(), b.get_data_wokkxf_k$().getShortArray_kijo6r_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$(), newShape[0], newShape[1], a.get_shape_iyi9a0_k$()[1], ret.get_data_wokkxf_k$().getShortArray_kijo6r_k$(), ret.get_strides_tusw1b_k$()[0]);
        break;
      case 0:
        dotMatrix_5(a.get_data_wokkxf_k$().getByteArray_yjfvk5_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$(), b.get_data_wokkxf_k$().getByteArray_yjfvk5_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$(), newShape[0], newShape[1], a.get_shape_iyi9a0_k$()[1], ret.get_data_wokkxf_k$().getByteArray_yjfvk5_k$(), ret.get_strides_tusw1b_k$()[0]);
        break;
      default:
        throw UnsupportedOperationException_init_$Create$();
    }
    return ret;
  }
  function dotMatrixToVectorCommon(a, b) {
    requireDotShape(a.get_shape_iyi9a0_k$(), b.get_shape_iyi9a0_k$());
    // Inline function 'kotlin.intArrayOf' call
    var newShape = new Int32Array([a.get_shape_iyi9a0_k$()[0]]);
    var ret = new NDArray(initMemoryView(newShape[0], a.get_dtype_iqhi0l_k$()), 0, newShape, VOID, Companion_getInstance_1());
    switch (a.get_dtype_iqhi0l_k$().get_ordinal_ip24qg_k$()) {
      case 4:
        dotVector(a.get_data_wokkxf_k$().getFloatArray_m77gkt_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$(), b.get_data_wokkxf_k$().getFloatArray_m77gkt_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$()[0], newShape[0], b.get_shape_iyi9a0_k$()[0], ret.get_data_wokkxf_k$().getFloatArray_m77gkt_k$());
        break;
      case 2:
        dotVector_0(a.get_data_wokkxf_k$().getIntArray_rs62n4_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$(), b.get_data_wokkxf_k$().getIntArray_rs62n4_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$()[0], newShape[0], b.get_shape_iyi9a0_k$()[0], ret.get_data_wokkxf_k$().getIntArray_rs62n4_k$());
        break;
      case 5:
        dotVector_1(a.get_data_wokkxf_k$().getDoubleArray_x8889e_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$(), b.get_data_wokkxf_k$().getDoubleArray_x8889e_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$()[0], newShape[0], b.get_shape_iyi9a0_k$()[0], ret.get_data_wokkxf_k$().getDoubleArray_x8889e_k$());
        break;
      case 3:
        dotVector_2(a.get_data_wokkxf_k$().getLongArray_1i1953_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$(), b.get_data_wokkxf_k$().getLongArray_1i1953_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$()[0], newShape[0], b.get_shape_iyi9a0_k$()[0], ret.get_data_wokkxf_k$().getLongArray_1i1953_k$());
        break;
      case 7:
        dotVectorComplex(a.get_data_wokkxf_k$().getComplexDoubleArray_u2qur2_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$(), b.get_data_wokkxf_k$().getComplexDoubleArray_u2qur2_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$()[0], newShape[0], b.get_shape_iyi9a0_k$()[0], ret.get_data_wokkxf_k$().getComplexDoubleArray_u2qur2_k$());
        break;
      case 6:
        dotVectorComplex_0(a.get_data_wokkxf_k$().getComplexFloatArray_56zcs7_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$(), b.get_data_wokkxf_k$().getComplexFloatArray_56zcs7_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$()[0], newShape[0], b.get_shape_iyi9a0_k$()[0], ret.get_data_wokkxf_k$().getComplexFloatArray_56zcs7_k$());
        break;
      case 1:
        dotVector_3(a.get_data_wokkxf_k$().getShortArray_kijo6r_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$(), b.get_data_wokkxf_k$().getShortArray_kijo6r_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$()[0], newShape[0], b.get_shape_iyi9a0_k$()[0], ret.get_data_wokkxf_k$().getShortArray_kijo6r_k$());
        break;
      case 0:
        dotVector_4(a.get_data_wokkxf_k$().getByteArray_yjfvk5_k$(), a.get_offset_hjmqak_k$(), a.get_strides_tusw1b_k$(), b.get_data_wokkxf_k$().getByteArray_yjfvk5_k$(), b.get_offset_hjmqak_k$(), b.get_strides_tusw1b_k$()[0], newShape[0], b.get_shape_iyi9a0_k$()[0], ret.get_data_wokkxf_k$().getByteArray_yjfvk5_k$());
        break;
      default:
        throw UnsupportedOperationException_init_$Create$();
    }
    return ret;
  }
  function dotVecToVec_0(left, leftOffset, lStride, right, rightOffset, rStride, n) {
    var ret = 0.0;
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ret = ret + left[leftOffset + imul(lStride, i) | 0] * right[rightOffset + imul(rStride, i) | 0];
      }
       while (inductionVariable < n);
    return ret;
  }
  function dotVecToVec_1(left, leftOffset, lStride, right, rightOffset, rStride, n) {
    var ret = 0;
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ret = ret + imul(left[leftOffset + imul(lStride, i) | 0], right[rightOffset + imul(rStride, i) | 0]) | 0;
      }
       while (inductionVariable < n);
    return ret;
  }
  function dotVecToVec_2(left, leftOffset, lStride, right, rightOffset, rStride, n) {
    var ret = 0.0;
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ret = ret + left[leftOffset + imul(lStride, i) | 0] * right[rightOffset + imul(rStride, i) | 0];
      }
       while (inductionVariable < n);
    return ret;
  }
  function dotVecToVec_3(left, leftOffset, lStride, right, rightOffset, rStride, n) {
    var ret = new Long(0, 0);
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ret = ret.plus_r93sks_k$(left[leftOffset + imul(lStride, i) | 0].times_nfzjiw_k$(right[rightOffset + imul(rStride, i) | 0]));
      }
       while (inductionVariable < n);
    return ret;
  }
  function dotVecToVec_4(left, leftOffset, lStride, right, rightOffset, rStride, n) {
    var ret = 0;
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ret = ret + (left[leftOffset + imul(lStride, i) | 0] * right[rightOffset + imul(rStride, i) | 0] | 0) | 0;
      }
       while (inductionVariable < n);
    return toShort(ret);
  }
  function dotVecToVec_5(left, leftOffset, lStride, right, rightOffset, rStride, n) {
    var ret = 0;
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ret = ret + (left[leftOffset + imul(lStride, i) | 0] * right[rightOffset + imul(rStride, i) | 0] | 0) | 0;
      }
       while (inductionVariable < n);
    return toByte(ret);
  }
  function dotVecToVecComplex_0(left, leftOffset, lStride, right, rightOffset, rStride, n) {
    var ret = Companion_getInstance_2().get_zero_woypkh_k$();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ret = ret.plus_8lqpe3_k$(left.get_c1px32_k$(leftOffset + imul(lStride, i) | 0).times_c0fmev_k$(right.get_c1px32_k$(rightOffset + imul(rStride, i) | 0)));
      }
       while (inductionVariable < n);
    return ret;
  }
  function dotVecToVecComplex_1(left, leftOffset, lStride, right, rightOffset, rStride, n) {
    var ret = Companion_getInstance_3().get_zero_woypkh_k$();
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ret = ret.plus_nev5n6_k$(left.get_c1px32_k$(leftOffset + imul(lStride, i) | 0).times_czwimy_k$(right.get_c1px32_k$(rightOffset + imul(rStride, i) | 0)));
      }
       while (inductionVariable < n);
    return ret;
  }
  function dotMatrix_0(left, leftOffset, leftStrides, right, rightOffset, rightStrides, n, m, t, destination, dStrides) {
    // Inline function 'kotlin.collections.component1' call
    var leftStride_0 = leftStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var leftStride_1 = leftStrides[1];
    // Inline function 'kotlin.collections.component1' call
    var rightStride_0 = rightStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var rightStride_1 = rightStrides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var dInd = imul(i, dStrides);
        var lInd = imul(i, leftStride_0) + leftOffset | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < t)
          do {
            var k = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var ceil = left[lInd + imul(k, leftStride_1) | 0];
            var rInd = imul(k, rightStride_0) + rightOffset | 0;
            var inductionVariable_1 = 0;
            if (inductionVariable_1 < m)
              do {
                var j = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                var tmp6_index0 = dInd + j | 0;
                destination[tmp6_index0] = destination[tmp6_index0] + ceil * right[rInd + imul(j, rightStride_1) | 0];
              }
               while (inductionVariable_1 < m);
          }
           while (inductionVariable_0 < t);
      }
       while (inductionVariable < n);
    return destination;
  }
  function dotMatrix_1(left, leftOffset, leftStrides, right, rightOffset, rightStrides, n, m, t, destination, dStrides) {
    // Inline function 'kotlin.collections.component1' call
    var leftStride_0 = leftStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var leftStride_1 = leftStrides[1];
    // Inline function 'kotlin.collections.component1' call
    var rightStride_0 = rightStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var rightStride_1 = rightStrides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var dInd = imul(i, dStrides);
        var lInd = imul(i, leftStride_0) + leftOffset | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < t)
          do {
            var k = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var ceil = left[lInd + imul(k, leftStride_1) | 0];
            var rInd = imul(k, rightStride_0) + rightOffset | 0;
            var inductionVariable_1 = 0;
            if (inductionVariable_1 < m)
              do {
                var j = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                var tmp6_index0 = dInd + j | 0;
                destination[tmp6_index0] = destination[tmp6_index0] + imul(ceil, right[rInd + imul(j, rightStride_1) | 0]) | 0;
              }
               while (inductionVariable_1 < m);
          }
           while (inductionVariable_0 < t);
      }
       while (inductionVariable < n);
    return destination;
  }
  function dotMatrix_2(left, leftOffset, leftStrides, right, rightOffset, rightStrides, n, m, t, destination, dStrides) {
    // Inline function 'kotlin.collections.component1' call
    var leftStride_0 = leftStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var leftStride_1 = leftStrides[1];
    // Inline function 'kotlin.collections.component1' call
    var rightStride_0 = rightStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var rightStride_1 = rightStrides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var dInd = imul(i, dStrides);
        var lInd = imul(i, leftStride_0) + leftOffset | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < t)
          do {
            var k = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var ceil = left[lInd + imul(k, leftStride_1) | 0];
            var rInd = imul(k, rightStride_0) + rightOffset | 0;
            var inductionVariable_1 = 0;
            if (inductionVariable_1 < m)
              do {
                var j = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                var tmp6_index0 = dInd + j | 0;
                destination[tmp6_index0] = destination[tmp6_index0] + ceil * right[rInd + imul(j, rightStride_1) | 0];
              }
               while (inductionVariable_1 < m);
          }
           while (inductionVariable_0 < t);
      }
       while (inductionVariable < n);
    return destination;
  }
  function dotMatrix_3(left, leftOffset, leftStrides, right, rightOffset, rightStrides, n, m, t, destination, dStrides) {
    // Inline function 'kotlin.collections.component1' call
    var leftStride_0 = leftStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var leftStride_1 = leftStrides[1];
    // Inline function 'kotlin.collections.component1' call
    var rightStride_0 = rightStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var rightStride_1 = rightStrides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var dInd = imul(i, dStrides);
        var lInd = imul(i, leftStride_0) + leftOffset | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < t)
          do {
            var k = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var ceil = left[lInd + imul(k, leftStride_1) | 0];
            var rInd = imul(k, rightStride_0) + rightOffset | 0;
            var inductionVariable_1 = 0;
            if (inductionVariable_1 < m)
              do {
                var j = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                var tmp6_index0 = dInd + j | 0;
                destination[tmp6_index0] = destination[tmp6_index0].plus_r93sks_k$(ceil.times_nfzjiw_k$(right[rInd + imul(j, rightStride_1) | 0]));
              }
               while (inductionVariable_1 < m);
          }
           while (inductionVariable_0 < t);
      }
       while (inductionVariable < n);
    return destination;
  }
  function dotMatrixComplex_0(left, leftOffset, leftStrides, right, rightOffset, rightStrides, n, m, t, destination, dStrides) {
    // Inline function 'kotlin.collections.component1' call
    var leftStride_0 = leftStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var leftStride_1 = leftStrides[1];
    // Inline function 'kotlin.collections.component1' call
    var rightStride_0 = rightStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var rightStride_1 = rightStrides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var dInd = imul(i, dStrides);
        var lInd = imul(i, leftStride_0) + leftOffset | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < t)
          do {
            var k = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var ceil = left.get_c1px32_k$(lInd + imul(k, leftStride_1) | 0);
            var rInd = imul(k, rightStride_0) + rightOffset | 0;
            var inductionVariable_1 = 0;
            if (inductionVariable_1 < m)
              do {
                var j = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                var tmp6_index0 = dInd + j | 0;
                destination.set_hzotmi_k$(tmp6_index0, destination.get_c1px32_k$(tmp6_index0).plus_nev5n6_k$(ceil.times_czwimy_k$(right.get_c1px32_k$(rInd + imul(j, rightStride_1) | 0))));
              }
               while (inductionVariable_1 < m);
          }
           while (inductionVariable_0 < t);
      }
       while (inductionVariable < n);
    return destination;
  }
  function dotMatrixComplex_1(left, leftOffset, leftStrides, right, rightOffset, rightStrides, n, m, t, destination, dStrides) {
    // Inline function 'kotlin.collections.component1' call
    var leftStride_0 = leftStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var leftStride_1 = leftStrides[1];
    // Inline function 'kotlin.collections.component1' call
    var rightStride_0 = rightStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var rightStride_1 = rightStrides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var dInd = imul(i, dStrides);
        var lInd = imul(i, leftStride_0) + leftOffset | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < t)
          do {
            var k = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var ceil = left.get_c1px32_k$(lInd + imul(k, leftStride_1) | 0);
            var rInd = imul(k, rightStride_0) + rightOffset | 0;
            var inductionVariable_1 = 0;
            if (inductionVariable_1 < m)
              do {
                var j = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                var tmp6_index0 = dInd + j | 0;
                destination.set_31o1op_k$(tmp6_index0, destination.get_c1px32_k$(tmp6_index0).plus_8lqpe3_k$(ceil.times_c0fmev_k$(right.get_c1px32_k$(rInd + imul(j, rightStride_1) | 0))));
              }
               while (inductionVariable_1 < m);
          }
           while (inductionVariable_0 < t);
      }
       while (inductionVariable < n);
    return destination;
  }
  function dotMatrix_4(left, leftOffset, leftStrides, right, rightOffset, rightStrides, n, m, t, destination, dStrides) {
    // Inline function 'kotlin.collections.component1' call
    var leftStride_0 = leftStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var leftStride_1 = leftStrides[1];
    // Inline function 'kotlin.collections.component1' call
    var rightStride_0 = rightStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var rightStride_1 = rightStrides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var dInd = imul(i, dStrides);
        var lInd = imul(i, leftStride_0) + leftOffset | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < t)
          do {
            var k = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var ceil = left[lInd + imul(k, leftStride_1) | 0];
            var rInd = imul(k, rightStride_0) + rightOffset | 0;
            var inductionVariable_1 = 0;
            if (inductionVariable_1 < m)
              do {
                var j = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                destination[dInd + j | 0] = toShort(destination[dInd + j | 0] + (ceil * right[rInd + imul(j, rightStride_1) | 0] | 0) | 0);
              }
               while (inductionVariable_1 < m);
          }
           while (inductionVariable_0 < t);
      }
       while (inductionVariable < n);
    return destination;
  }
  function dotMatrix_5(left, leftOffset, leftStrides, right, rightOffset, rightStrides, n, m, t, destination, dStrides) {
    // Inline function 'kotlin.collections.component1' call
    var leftStride_0 = leftStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var leftStride_1 = leftStrides[1];
    // Inline function 'kotlin.collections.component1' call
    var rightStride_0 = rightStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var rightStride_1 = rightStrides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var dInd = imul(i, dStrides);
        var lInd = imul(i, leftStride_0) + leftOffset | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < t)
          do {
            var k = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var ceil = left[lInd + imul(k, leftStride_1) | 0];
            var rInd = imul(k, rightStride_0) + rightOffset | 0;
            var inductionVariable_1 = 0;
            if (inductionVariable_1 < m)
              do {
                var j = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                destination[dInd + j | 0] = toByte(destination[dInd + j | 0] + (ceil * right[rInd + imul(j, rightStride_1) | 0] | 0) | 0);
              }
               while (inductionVariable_1 < m);
          }
           while (inductionVariable_0 < t);
      }
       while (inductionVariable < n);
    return destination;
  }
  function dotVector(left, leftOffset, leftStrides, right, rightOffset, rStride, n, m, destination) {
    // Inline function 'kotlin.collections.component1' call
    var lStride_0 = leftStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var lStride_1 = leftStrides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var lInd = imul(i, lStride_0) + leftOffset | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < m)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            destination[i] = destination[i] + left[lInd + imul(j, lStride_1) | 0] * right[imul(j, rStride) + rightOffset | 0];
          }
           while (inductionVariable_0 < m);
      }
       while (inductionVariable < n);
    return destination;
  }
  function dotVector_0(left, leftOffset, leftStrides, right, rightOffset, rStride, n, m, destination) {
    // Inline function 'kotlin.collections.component1' call
    var lStride_0 = leftStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var lStride_1 = leftStrides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var lInd = imul(i, lStride_0) + leftOffset | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < m)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            destination[i] = destination[i] + imul(left[lInd + imul(j, lStride_1) | 0], right[imul(j, rStride) + rightOffset | 0]) | 0;
          }
           while (inductionVariable_0 < m);
      }
       while (inductionVariable < n);
    return destination;
  }
  function dotVector_1(left, leftOffset, leftStrides, right, rightOffset, rStride, n, m, destination) {
    // Inline function 'kotlin.collections.component1' call
    var lStride_0 = leftStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var lStride_1 = leftStrides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var lInd = imul(i, lStride_0) + leftOffset | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < m)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            destination[i] = destination[i] + left[lInd + imul(j, lStride_1) | 0] * right[imul(j, rStride) + rightOffset | 0];
          }
           while (inductionVariable_0 < m);
      }
       while (inductionVariable < n);
    return destination;
  }
  function dotVector_2(left, leftOffset, leftStrides, right, rightOffset, rStride, n, m, destination) {
    // Inline function 'kotlin.collections.component1' call
    var lStride_0 = leftStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var lStride_1 = leftStrides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var lInd = imul(i, lStride_0) + leftOffset | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < m)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            destination[i] = destination[i].plus_r93sks_k$(left[lInd + imul(j, lStride_1) | 0].times_nfzjiw_k$(right[imul(j, rStride) + rightOffset | 0]));
          }
           while (inductionVariable_0 < m);
      }
       while (inductionVariable < n);
    return destination;
  }
  function dotVectorComplex(left, leftOffset, leftStrides, right, rightOffset, rStride, n, m, destination) {
    // Inline function 'kotlin.collections.component1' call
    var lStride_0 = leftStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var lStride_1 = leftStrides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var lInd = imul(i, lStride_0) + leftOffset | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < m)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            destination.set_hzotmi_k$(i, destination.get_c1px32_k$(i).plus_nev5n6_k$(left.get_c1px32_k$(lInd + imul(j, lStride_1) | 0).times_czwimy_k$(right.get_c1px32_k$(imul(j, rStride) + rightOffset | 0))));
          }
           while (inductionVariable_0 < m);
      }
       while (inductionVariable < n);
    return destination;
  }
  function dotVectorComplex_0(left, leftOffset, leftStrides, right, rightOffset, rStride, n, m, destination) {
    // Inline function 'kotlin.collections.component1' call
    var lStride_0 = leftStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var lStride_1 = leftStrides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var lInd = imul(i, lStride_0) + leftOffset | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < m)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            destination.set_31o1op_k$(i, destination.get_c1px32_k$(i).plus_8lqpe3_k$(left.get_c1px32_k$(lInd + imul(j, lStride_1) | 0).times_c0fmev_k$(right.get_c1px32_k$(imul(j, rStride) + rightOffset | 0))));
          }
           while (inductionVariable_0 < m);
      }
       while (inductionVariable < n);
    return destination;
  }
  function dotVector_3(left, leftOffset, leftStrides, right, rightOffset, rStride, n, m, destination) {
    // Inline function 'kotlin.collections.component1' call
    var lStride_0 = leftStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var lStride_1 = leftStrides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var lInd = imul(i, lStride_0) + leftOffset | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < m)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            destination[i] = toShort(destination[i] + (left[lInd + imul(j, lStride_1) | 0] * right[imul(j, rStride) + rightOffset | 0] | 0) | 0);
          }
           while (inductionVariable_0 < m);
      }
       while (inductionVariable < n);
    return destination;
  }
  function dotVector_4(left, leftOffset, leftStrides, right, rightOffset, rStride, n, m, destination) {
    // Inline function 'kotlin.collections.component1' call
    var lStride_0 = leftStrides[0];
    // Inline function 'kotlin.collections.component2' call
    var lStride_1 = leftStrides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var lInd = imul(i, lStride_0) + leftOffset | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < m)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            destination[i] = toByte(destination[i] + (left[lInd + imul(j, lStride_1) | 0] * right[imul(j, rStride) + rightOffset | 0] | 0) | 0);
          }
           while (inductionVariable_0 < m);
      }
       while (inductionVariable < n);
    return destination;
  }
  function eigenValuesCommon(a, dtype) {
    requireSquare(a.get_shape_iyi9a0_k$());
    var mat = toType(a, dtype, CopyStrategy_MEANINGFUL_getInstance());
    var tmp;
    switch (dtype.get_ordinal_ip24qg_k$()) {
      case 6:
        tmp = eigenvaluesFloat(isInterface(mat, MultiArray) ? mat : THROW_CCE());
        break;
      case 7:
        tmp = eigenvaluesDouble(isInterface(mat, MultiArray) ? mat : THROW_CCE());
        break;
      default:
        throw UnsupportedOperationException_init_$Create$();
    }
    var tmp_0 = tmp;
    return tmp_0 instanceof NDArray ? tmp_0 : THROW_CCE();
  }
  function eigenvaluesFloat(a) {
    var H = upperHessenbergFloat(a).component2_7eebsb_k$();
    var upperTriangular = qrShiftedFloat(H).component1_7eebsc_k$();
    // Inline function 'org.jetbrains.kotlinx.multik.api.d1array' call
    Multik_getInstance();
    var sizeD1 = upperTriangular.get_shape_iyi9a0_k$()[0];
    var init = eigenvaluesFloat$lambda(upperTriangular);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(sizeD1 > 0)) {
      // Inline function 'org.jetbrains.kotlinx.multik.api.d1array.<anonymous>' call
      var message = 'Dimension must be positive.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.Companion.ofKClass' call
    Companion_getInstance();
    var type = getKClass(ComplexFloat);
    var tmp;
    if (type.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp = DataType_ByteDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp = DataType_ShortDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp = DataType_IntDataType_getInstance();
    } else if (type.equals(getKClass(Long))) {
      tmp = DataType_LongDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp = DataType_FloatDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp = DataType_DoubleDataType_getInstance();
    } else if (type.equals(getKClass(ComplexFloat))) {
      tmp = DataType_ComplexFloatDataType_getInstance();
    } else if (type.equals(getKClass(ComplexDouble))) {
      tmp = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, got ' + type.get_simpleName_r6f8py_k$());
    }
    var dtype = tmp;
    // Inline function 'kotlin.intArrayOf' call
    var shape = new Int32Array([sizeD1]);
    var data = initMemoryView_0(sizeD1, dtype, init);
    return new NDArray(data, VOID, shape, VOID, Companion_getInstance_1());
  }
  function eigenvaluesDouble(a) {
    var H = upperHessenbergDouble(a).component2_7eebsb_k$();
    var upperTriangular = qrShiftedDouble(H).component1_7eebsc_k$();
    // Inline function 'org.jetbrains.kotlinx.multik.api.d1array' call
    Multik_getInstance();
    var sizeD1 = upperTriangular.get_shape_iyi9a0_k$()[0];
    var init = eigenvaluesDouble$lambda(upperTriangular);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(sizeD1 > 0)) {
      // Inline function 'org.jetbrains.kotlinx.multik.api.d1array.<anonymous>' call
      var message = 'Dimension must be positive.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.Companion.ofKClass' call
    Companion_getInstance();
    var type = getKClass(ComplexDouble);
    var tmp;
    if (type.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp = DataType_ByteDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp = DataType_ShortDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp = DataType_IntDataType_getInstance();
    } else if (type.equals(getKClass(Long))) {
      tmp = DataType_LongDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp = DataType_FloatDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp = DataType_DoubleDataType_getInstance();
    } else if (type.equals(getKClass(ComplexFloat))) {
      tmp = DataType_ComplexFloatDataType_getInstance();
    } else if (type.equals(getKClass(ComplexDouble))) {
      tmp = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, got ' + type.get_simpleName_r6f8py_k$());
    }
    var dtype = tmp;
    // Inline function 'kotlin.intArrayOf' call
    var shape = new Int32Array([sizeD1]);
    var data = initMemoryView_0(sizeD1, dtype, init);
    return new NDArray(data, VOID, shape, VOID, Companion_getInstance_1());
  }
  function qrShiftedFloat(a, trialsNumber) {
    trialsNumber = trialsNumber === VOID ? 30 : trialsNumber;
    // Inline function 'kotlin.collections.component1' call
    var n = a.get_shape_iyi9a0_k$()[0];
    // Inline function 'org.jetbrains.kotlinx.multik.api.identity' call
    var this_0 = Multik_getInstance();
    var n_0 = a.get_shape_iyi9a0_k$()[0];
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.Companion.ofKClass' call
    Companion_getInstance();
    var type = getKClass(ComplexFloat);
    var tmp;
    if (type.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp = DataType_ByteDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp = DataType_ShortDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp = DataType_IntDataType_getInstance();
    } else if (type.equals(getKClass(Long))) {
      tmp = DataType_LongDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp = DataType_FloatDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp = DataType_DoubleDataType_getInstance();
    } else if (type.equals(getKClass(ComplexFloat))) {
      tmp = DataType_ComplexFloatDataType_getInstance();
    } else if (type.equals(getKClass(ComplexDouble))) {
      tmp = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, got ' + type.get_simpleName_r6f8py_k$());
    }
    var dtype = tmp;
    var z = identity(this_0, n_0, dtype);
    // Inline function 'org.jetbrains.kotlinx.multik.api.zeros' call
    var this_1 = Multik_getInstance();
    // Inline function 'kotlin.intArrayOf' call
    var tmp_0 = new Int32Array([2]);
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.Companion.ofKClass' call
    Companion_getInstance();
    var type_0 = getKClass(ComplexFloat);
    var tmp_1;
    if (type_0.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp_1 = DataType_ByteDataType_getInstance();
    } else if (type_0.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp_1 = DataType_ShortDataType_getInstance();
    } else if (type_0.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp_1 = DataType_IntDataType_getInstance();
    } else if (type_0.equals(getKClass(Long))) {
      tmp_1 = DataType_LongDataType_getInstance();
    } else if (type_0.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp_1 = DataType_FloatDataType_getInstance();
    } else if (type_0.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp_1 = DataType_DoubleDataType_getInstance();
    } else if (type_0.equals(getKClass(ComplexFloat))) {
      tmp_1 = DataType_ComplexFloatDataType_getInstance();
    } else if (type_0.equals(getKClass(ComplexDouble))) {
      tmp_1 = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, got ' + type_0.get_simpleName_r6f8py_k$());
    }
    var tmp$ret$4 = tmp_1;
    var v = zeros(this_1, tmp_0, tmp$ret$4);
    if (!(a instanceof NDArray))
      THROW_CCE();
    var inductionVariable = 1;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(get_0(a, i, i - 1 | 0).get_im_kntnwz_k$() === 0.0)) {
          var sc = get_0(a, i, i - 1 | 0).div_nq5qk9_k$(absL1(get_0(a, i, i - 1 | 0)));
          sc = sc.conjugate_b863jc_k$().div_nq5qk9_k$(sc.abs_22cy_k$());
          set(a, i, i - 1 | 0, toComplexFloat(get_0(a, i, i - 1 | 0).abs_22cy_k$()));
          var tmp_2 = get_1(a, i, until(i, n));
          timesAssign(tmp_2 instanceof NDArray ? tmp_2 : THROW_CCE(), sc);
          // Inline function 'kotlin.math.min' call
          var b = i + 2 | 0;
          var tmp$ret$6 = Math.min(n, b);
          var tmp_3 = get_2(a, until(0, tmp$ret$6), i);
          timesAssign(tmp_3 instanceof NDArray ? tmp_3 : THROW_CCE(), sc.conjugate_b863jc_k$());
          var tmp_4 = get_2(z, until(0, n), i);
          timesAssign(tmp_4 instanceof NDArray ? tmp_4 : THROW_CCE(), sc.conjugate_b863jc_k$());
        }
      }
       while (inductionVariable < n);
    var ulp = 1.0E-14;
    var smlnum = 1.4E-45 * (n / ulp);
    // Inline function 'kotlin.math.max' call
    var tmp$ret$7 = Math.max(10, n);
    var itmax = imul(trialsNumber, tmp$ret$7);
    var kdefl = 0;
    var i_0 = n - 1 | 0;
    while (i_0 >= 0) {
      var l = 0;
      var failedToConverge = true;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < itmax)
        $l$loop: do {
          var iteration = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$8;
          $l$block_0: {
            // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.qrShiftedFloat.<anonymous>' call
            var inductionVariable_1 = i_0;
            var last = l + 1 | 0;
            if (last <= inductionVariable_1)
              do {
                var k = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + -1 | 0;
                if (absL1(get_0(a, k, k - 1 | 0)) < smlnum) {
                  tmp$ret$8 = k;
                  break $l$block_0;
                }
                var tst = absL1(get_0(a, k - 1 | 0, k - 1 | 0)) + absL1(get_0(a, k, k));
                if (tst === 0.0) {
                  if (k >= 2) {
                    var tmp_5 = tst;
                    // Inline function 'kotlin.math.abs' call
                    var x = get_0(a, k - 1 | 0, k - 2 | 0).get_re_kntnpg_k$();
                    tst = tmp_5 + Math.abs(x);
                  }
                  if ((k + 2 | 0) <= n) {
                    var tmp_6 = tst;
                    // Inline function 'kotlin.math.abs' call
                    var x_0 = get_0(a, k + 1 | 0, k).get_re_kntnpg_k$();
                    tst = tmp_6 + Math.abs(x_0);
                  }
                }
                // Inline function 'kotlin.math.abs' call
                var x_1 = get_0(a, k, k - 1 | 0).get_re_kntnpg_k$();
                if (Math.abs(x_1) <= ulp * tst) {
                  // Inline function 'kotlin.math.max' call
                  var a_0 = absL1(get_0(a, k, k - 1 | 0));
                  var b_0 = absL1(get_0(a, k - 1 | 0, k));
                  var ab = Math.max(a_0, b_0);
                  // Inline function 'kotlin.math.min' call
                  var a_1 = absL1(get_0(a, k, k - 1 | 0));
                  var b_1 = absL1(get_0(a, k - 1 | 0, k));
                  var ba = Math.min(a_1, b_1);
                  // Inline function 'kotlin.math.max' call
                  var a_2 = absL1(get_0(a, k, k));
                  var b_2 = absL1(get_0(a, k - 1 | 0, k - 1 | 0).minus_vtej6p_k$(get_0(a, k, k)));
                  var aa = Math.max(a_2, b_2);
                  // Inline function 'kotlin.math.min' call
                  var a_3 = absL1(get_0(a, k, k));
                  var b_3 = absL1(get_0(a, k - 1 | 0, k - 1 | 0).minus_vtej6p_k$(get_0(a, k, k)));
                  var bb = Math.min(a_3, b_3);
                  var s = aa + ab;
                  var tmp_7 = ba * (ab / s);
                  // Inline function 'kotlin.math.max' call
                  var b_4 = ulp * (bb * (aa / s));
                  if (tmp_7 <= Math.max(smlnum, b_4)) {
                    tmp$ret$8 = k;
                    break $l$block_0;
                  }
                }
              }
               while (!(k === last));
            tmp$ret$8 = l;
          }
          l = tmp$ret$8;
          if (l > 0) {
            set(a, l, l - 1 | 0, Companion_getInstance_2().get_zero_woypkh_k$());
          }
          if (l >= i_0) {
            failedToConverge = false;
            break $l$loop;
          }
          kdefl = kdefl + 1 | 0;
          var kExceptionalShift = 10;
          var dat1 = 0.75;
          var s_0;
          var t;
          var u;
          if ((kdefl % imul(2, kExceptionalShift) | 0) === 0) {
            // Inline function 'kotlin.math.abs' call
            var x_2 = get_0(a, i_0, i_0 - 1 | 0).get_re_kntnpg_k$();
            s_0 = dat1 * Math.abs(x_2);
            t = get_0(a, i_0, i_0).plus_xnnzhe_k$(s_0);
          } else if ((kdefl % kExceptionalShift | 0) === 0) {
            // Inline function 'kotlin.math.abs' call
            var x_3 = get_0(a, l + 1 | 0, l).get_re_kntnpg_k$();
            s_0 = dat1 * Math.abs(x_3);
            t = get_0(a, l, l).plus_xnnzhe_k$(s_0);
          } else {
            t = get_0(a, i_0, i_0);
            u = csqrt(get_0(a, i_0 - 1 | 0, i_0)).times_c0fmev_k$(csqrt(get_0(a, i_0, i_0 - 1 | 0)));
            s_0 = absL1(u);
            if (!(s_0 === 0.0)) {
              var x_4 = get_0(a, i_0 - 1 | 0, i_0 - 1 | 0).minus_vtej6p_k$(t).times_422v76_k$(0.5);
              var sx = absL1(x_4);
              // Inline function 'kotlin.math.max' call
              var a_4 = s_0;
              var b_5 = absL1(x_4);
              s_0 = Math.max(a_4, b_5);
              var y = csqrt(x_4.div_nq5qk9_k$(s_0).times_c0fmev_k$(x_4.div_nq5qk9_k$(s_0)).plus_8lqpe3_k$(u.div_nq5qk9_k$(s_0).times_c0fmev_k$(u.div_nq5qk9_k$(s_0)))).times_422v76_k$(s_0);
              if (sx > 0.0 ? x_4.get_re_kntnpg_k$() / sx * y.get_re_kntnpg_k$() + x_4.get_im_kntnwz_k$() / sx * y.get_im_kntnwz_k$() < 0.0 : false) {
                y = y.unaryMinus_6uz0qp_k$();
              }
              t = t.minus_vtej6p_k$(u.times_c0fmev_k$(u.div_ra8ixu_k$(x_4.plus_8lqpe3_k$(y))));
            }
          }
          var h11;
          var h11s;
          var h22;
          var h21;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$21;
          $l$block_1: {
            // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.qrShiftedFloat.<anonymous>' call
            var inductionVariable_2 = i_0 - 1 | 0;
            var last_0 = l;
            if (last_0 <= inductionVariable_2)
              do {
                var m = inductionVariable_2;
                inductionVariable_2 = inductionVariable_2 + -1 | 0;
                h11 = get_0(a, m, m);
                h22 = get_0(a, m + 1 | 0, m + 1 | 0);
                h11s = h11.minus_vtej6p_k$(t);
                h21 = toComplexFloat(get_0(a, m + 1 | 0, m).get_re_kntnpg_k$());
                s_0 = absL1(h11s) + h21.abs_22cy_k$();
                h11s = h11s.div_nq5qk9_k$(s_0);
                h21 = h21.div_nq5qk9_k$(s_0);
                set_0(v, 0, h11s);
                set_0(v, 1, h21);
                if (m > l) {
                  var h10 = get_0(a, m, m - 1 | 0);
                  if (h10.abs_22cy_k$() * h21.abs_22cy_k$() <= ulp * (absL1(h11s) * (absL1(h11) + absL1(h22)))) {
                    tmp$ret$21 = m;
                    break $l$block_1;
                  }
                }
              }
               while (!(m === last_0));
            tmp$ret$21 = l;
          }
          var m_0 = tmp$ret$21;
          var inductionVariable_3 = m_0;
          var last_1 = i_0;
          if (inductionVariable_3 < last_1)
            do {
              var k_0 = inductionVariable_3;
              inductionVariable_3 = inductionVariable_3 + 1 | 0;
              if (k_0 > m_0) {
                set_0(v, 0, get_0(a, k_0, k_0 - 1 | 0));
                set_0(v, 1, get_0(a, k_0 + 1 | 0, k_0 - 1 | 0));
              }
              var tmp_8 = get(v, 0);
              var tmp_9 = get_3(v, until(1, 2));
              var tmp5_container = computeHouseholderReflectorInplace(2, tmp_8, tmp_9 instanceof NDArray ? tmp_9 : THROW_CCE());
              var v1 = tmp5_container.component1_7eebsc_k$();
              var t1 = tmp5_container.component2_7eebsb_k$();
              set_0(v, 0, v1);
              if (k_0 > m_0) {
                set(a, k_0, k_0 - 1 | 0, get(v, 0));
                set(a, k_0 + 1 | 0, k_0 - 1 | 0, Companion_getInstance_2().get_zero_woypkh_k$());
              }
              var v2 = get(v, 1);
              var t2 = t1.times_c0fmev_k$(v2).get_re_kntnpg_k$();
              var inductionVariable_4 = k_0;
              if (inductionVariable_4 < n)
                do {
                  var j = inductionVariable_4;
                  inductionVariable_4 = inductionVariable_4 + 1 | 0;
                  var sum = t1.conjugate_b863jc_k$().times_c0fmev_k$(get_0(a, k_0, j)).plus_8lqpe3_k$(get_0(a, k_0 + 1 | 0, j).times_422v76_k$(t2));
                  set(a, k_0, j, get_0(a, k_0, j).minus_vtej6p_k$(sum));
                  set(a, k_0 + 1 | 0, j, get_0(a, k_0 + 1 | 0, j).minus_vtej6p_k$(sum.times_c0fmev_k$(v2)));
                }
                 while (inductionVariable_4 < n);
              var inductionVariable_5 = 0;
              // Inline function 'kotlin.math.min' call
              var a_5 = k_0 + 2 | 0;
              var b_6 = i_0;
              var last_2 = Math.min(a_5, b_6) + 1 | 0;
              if (inductionVariable_5 < last_2)
                do {
                  var j_0 = inductionVariable_5;
                  inductionVariable_5 = inductionVariable_5 + 1 | 0;
                  var sum_0 = t1.times_c0fmev_k$(get_0(a, j_0, k_0)).plus_8lqpe3_k$(get_0(a, j_0, k_0 + 1 | 0).times_422v76_k$(t2));
                  set(a, j_0, k_0, get_0(a, j_0, k_0).minus_vtej6p_k$(sum_0));
                  var tmp16_index1 = k_0 + 1 | 0;
                  set(a, j_0, tmp16_index1, get_0(a, j_0, tmp16_index1).minus_vtej6p_k$(sum_0.times_c0fmev_k$(v2.conjugate_b863jc_k$())));
                }
                 while (inductionVariable_5 < last_2);
              var inductionVariable_6 = 0;
              if (inductionVariable_6 < n)
                do {
                  var j_1 = inductionVariable_6;
                  inductionVariable_6 = inductionVariable_6 + 1 | 0;
                  var sum_1 = t1.times_c0fmev_k$(get_0(z, j_1, k_0)).plus_8lqpe3_k$(get_0(z, j_1, k_0 + 1 | 0).times_422v76_k$(t2));
                  set(z, j_1, k_0, get_0(z, j_1, k_0).minus_vtej6p_k$(sum_1));
                  var tmp23_index1 = k_0 + 1 | 0;
                  set(z, j_1, tmp23_index1, get_0(z, j_1, tmp23_index1).minus_vtej6p_k$(sum_1.times_c0fmev_k$(v2.conjugate_b863jc_k$())));
                }
                 while (inductionVariable_6 < n);
              if (k_0 === m_0 ? m_0 > l : false) {
                var temp = Companion_getInstance_2().get_one_18iz2b_k$().minus_vtej6p_k$(t1);
                temp = temp.div_nq5qk9_k$(temp.abs_22cy_k$());
                set(a, m_0 + 1 | 0, m_0, get_0(a, m_0 + 1 | 0, m_0).times_c0fmev_k$(temp.conjugate_b863jc_k$()));
                if ((m_0 + 2 | 0) < i_0) {
                  var tmp25_index0 = m_0 + 2 | 0;
                  var tmp26_index1 = m_0 + 1 | 0;
                  set(a, tmp25_index0, tmp26_index1, get_0(a, tmp25_index0, tmp26_index1).times_c0fmev_k$(temp));
                }
                var inductionVariable_7 = m_0;
                var last_3 = i_0;
                if (inductionVariable_7 <= last_3)
                  do {
                    var j_2 = inductionVariable_7;
                    inductionVariable_7 = inductionVariable_7 + 1 | 0;
                    if (!(j_2 === (m_0 + 1 | 0))) {
                      if (n > (j_2 + 1 | 0)) {
                        var tmp_10 = get_1(a, j_2, until(j_2 + 1 | 0, n));
                        timesAssign(tmp_10 instanceof NDArray ? tmp_10 : THROW_CCE(), temp);
                      }
                      var tmp_11 = get_2(a, until(0, j_2), j_2);
                      timesAssign(tmp_11 instanceof NDArray ? tmp_11 : THROW_CCE(), temp.conjugate_b863jc_k$());
                      var tmp_12 = get_2(z, until(0, n), j_2);
                      timesAssign(tmp_12 instanceof NDArray ? tmp_12 : THROW_CCE(), temp.conjugate_b863jc_k$());
                    }
                  }
                   while (!(j_2 === last_3));
              }
            }
             while (inductionVariable_3 < last_1);
          var temp_0 = get_0(a, i_0, i_0 - 1 | 0);
          if (!(temp_0.get_im_kntnwz_k$() === 0.0)) {
            var rtemp = toComplexFloat(temp_0.abs_22cy_k$());
            set(a, i_0, i_0 - 1 | 0, rtemp);
            temp_0 = temp_0.div_ra8ixu_k$(rtemp);
            if (n > (i_0 + 1 | 0)) {
              var tmp_13 = get_1(a, i_0, until(i_0 + 1 | 0, n));
              timesAssign(tmp_13 instanceof NDArray ? tmp_13 : THROW_CCE(), temp_0.conjugate_b863jc_k$());
            }
            var tmp_14 = get_2(a, until(0, i_0), i_0);
            timesAssign(tmp_14 instanceof NDArray ? tmp_14 : THROW_CCE(), temp_0);
            var tmp_15 = get_2(z, until(0, n), i_0);
            timesAssign(tmp_15 instanceof NDArray ? tmp_15 : THROW_CCE(), temp_0);
          }
        }
         while (inductionVariable_0 < itmax);
      if (failedToConverge) {
        throw ArithmeticException_init_$Create$('failed to converge with trialsNumber = ' + trialsNumber);
      }
      kdefl = 0;
      i_0 = l - 1 | 0;
    }
    return new Pair(a, z);
  }
  function qrShiftedDouble(a, trialsNumber) {
    trialsNumber = trialsNumber === VOID ? 30 : trialsNumber;
    // Inline function 'kotlin.collections.component1' call
    var n = a.get_shape_iyi9a0_k$()[0];
    // Inline function 'org.jetbrains.kotlinx.multik.api.identity' call
    var this_0 = Multik_getInstance();
    var n_0 = a.get_shape_iyi9a0_k$()[0];
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.Companion.ofKClass' call
    Companion_getInstance();
    var type = getKClass(ComplexDouble);
    var tmp;
    if (type.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp = DataType_ByteDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp = DataType_ShortDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp = DataType_IntDataType_getInstance();
    } else if (type.equals(getKClass(Long))) {
      tmp = DataType_LongDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp = DataType_FloatDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp = DataType_DoubleDataType_getInstance();
    } else if (type.equals(getKClass(ComplexFloat))) {
      tmp = DataType_ComplexFloatDataType_getInstance();
    } else if (type.equals(getKClass(ComplexDouble))) {
      tmp = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, got ' + type.get_simpleName_r6f8py_k$());
    }
    var dtype = tmp;
    var z = identity(this_0, n_0, dtype);
    // Inline function 'org.jetbrains.kotlinx.multik.api.zeros' call
    var this_1 = Multik_getInstance();
    // Inline function 'kotlin.intArrayOf' call
    var tmp_0 = new Int32Array([2]);
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.Companion.ofKClass' call
    Companion_getInstance();
    var type_0 = getKClass(ComplexDouble);
    var tmp_1;
    if (type_0.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp_1 = DataType_ByteDataType_getInstance();
    } else if (type_0.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp_1 = DataType_ShortDataType_getInstance();
    } else if (type_0.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp_1 = DataType_IntDataType_getInstance();
    } else if (type_0.equals(getKClass(Long))) {
      tmp_1 = DataType_LongDataType_getInstance();
    } else if (type_0.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp_1 = DataType_FloatDataType_getInstance();
    } else if (type_0.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp_1 = DataType_DoubleDataType_getInstance();
    } else if (type_0.equals(getKClass(ComplexFloat))) {
      tmp_1 = DataType_ComplexFloatDataType_getInstance();
    } else if (type_0.equals(getKClass(ComplexDouble))) {
      tmp_1 = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, got ' + type_0.get_simpleName_r6f8py_k$());
    }
    var tmp$ret$4 = tmp_1;
    var v = zeros(this_1, tmp_0, tmp$ret$4);
    if (!(a instanceof NDArray))
      THROW_CCE();
    var inductionVariable = 1;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(get_0(a, i, i - 1 | 0).get_im_kntnwz_k$() === 0.0)) {
          var sc = get_0(a, i, i - 1 | 0).div_k6dnjf_k$(absL1_0(get_0(a, i, i - 1 | 0)));
          sc = sc.conjugate_b863jc_k$().div_k6dnjf_k$(sc.abs_22cy_k$());
          set(a, i, i - 1 | 0, toComplexDouble(get_0(a, i, i - 1 | 0).abs_22cy_k$()));
          var tmp_2 = get_1(a, i, until(i, n));
          timesAssign(tmp_2 instanceof NDArray ? tmp_2 : THROW_CCE(), sc);
          // Inline function 'kotlin.math.min' call
          var b = i + 2 | 0;
          var tmp$ret$6 = Math.min(n, b);
          var tmp_3 = get_2(a, until(0, tmp$ret$6), i);
          timesAssign(tmp_3 instanceof NDArray ? tmp_3 : THROW_CCE(), sc.conjugate_b863jc_k$());
          var tmp_4 = get_2(z, until(0, n), i);
          timesAssign(tmp_4 instanceof NDArray ? tmp_4 : THROW_CCE(), sc.conjugate_b863jc_k$());
        }
      }
       while (inductionVariable < n);
    var ulp = 1.0E-16;
    var smlnum = 1.0E-300 * (n / ulp);
    // Inline function 'kotlin.math.max' call
    var tmp$ret$7 = Math.max(10, n);
    var itmax = imul(trialsNumber, tmp$ret$7);
    var kdefl = 0;
    var i_0 = n - 1 | 0;
    while (i_0 >= 0) {
      var l = 0;
      var failedToConverge = true;
      var inductionVariable_0 = 0;
      if (inductionVariable_0 < itmax)
        $l$loop: do {
          var iteration = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$8;
          $l$block_0: {
            // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.qrShiftedDouble.<anonymous>' call
            var inductionVariable_1 = i_0;
            var last = l + 1 | 0;
            if (last <= inductionVariable_1)
              do {
                var k = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + -1 | 0;
                if (absL1_0(get_0(a, k, k - 1 | 0)) < smlnum) {
                  tmp$ret$8 = k;
                  break $l$block_0;
                }
                var tst = absL1_0(get_0(a, k - 1 | 0, k - 1 | 0)) + absL1_0(get_0(a, k, k));
                if (tst === 0.0) {
                  if (k >= 2) {
                    var tmp_5 = tst;
                    // Inline function 'kotlin.math.abs' call
                    var x = get_0(a, k - 1 | 0, k - 2 | 0).get_re_kntnpg_k$();
                    tst = tmp_5 + Math.abs(x);
                  }
                  if ((k + 2 | 0) <= n) {
                    var tmp_6 = tst;
                    // Inline function 'kotlin.math.abs' call
                    var x_0 = get_0(a, k + 1 | 0, k).get_re_kntnpg_k$();
                    tst = tmp_6 + Math.abs(x_0);
                  }
                }
                // Inline function 'kotlin.math.abs' call
                var x_1 = get_0(a, k, k - 1 | 0).get_re_kntnpg_k$();
                if (Math.abs(x_1) <= ulp * tst) {
                  // Inline function 'kotlin.math.max' call
                  var a_0 = absL1_0(get_0(a, k, k - 1 | 0));
                  var b_0 = absL1_0(get_0(a, k - 1 | 0, k));
                  var ab = Math.max(a_0, b_0);
                  // Inline function 'kotlin.math.min' call
                  var a_1 = absL1_0(get_0(a, k, k - 1 | 0));
                  var b_1 = absL1_0(get_0(a, k - 1 | 0, k));
                  var ba = Math.min(a_1, b_1);
                  // Inline function 'kotlin.math.max' call
                  var a_2 = absL1_0(get_0(a, k, k));
                  var b_2 = absL1_0(get_0(a, k - 1 | 0, k - 1 | 0).minus_wp99j0_k$(get_0(a, k, k)));
                  var aa = Math.max(a_2, b_2);
                  // Inline function 'kotlin.math.min' call
                  var a_3 = absL1_0(get_0(a, k, k));
                  var b_3 = absL1_0(get_0(a, k - 1 | 0, k - 1 | 0).minus_wp99j0_k$(get_0(a, k, k)));
                  var bb = Math.min(a_3, b_3);
                  var s = aa + ab;
                  var tmp_7 = ba * (ab / s);
                  // Inline function 'kotlin.math.max' call
                  var b_4 = ulp * (bb * (aa / s));
                  if (tmp_7 <= Math.max(smlnum, b_4)) {
                    tmp$ret$8 = k;
                    break $l$block_0;
                  }
                }
              }
               while (!(k === last));
            tmp$ret$8 = l;
          }
          l = tmp$ret$8;
          if (l > 0) {
            set(a, l, l - 1 | 0, Companion_getInstance_3().get_zero_woypkh_k$());
          }
          if (l >= i_0) {
            failedToConverge = false;
            break $l$loop;
          }
          kdefl = kdefl + 1 | 0;
          var kExceptionalShift = 10;
          var dat1 = 0.75;
          var s_0;
          var t;
          var u;
          if ((kdefl % imul(2, kExceptionalShift) | 0) === 0) {
            // Inline function 'kotlin.math.abs' call
            var x_2 = get_0(a, i_0, i_0 - 1 | 0).get_re_kntnpg_k$();
            s_0 = dat1 * Math.abs(x_2);
            t = get_0(a, i_0, i_0).plus_pjpmi4_k$(s_0);
          } else if ((kdefl % kExceptionalShift | 0) === 0) {
            // Inline function 'kotlin.math.abs' call
            var x_3 = get_0(a, l + 1 | 0, l).get_re_kntnpg_k$();
            s_0 = dat1 * Math.abs(x_3);
            t = get_0(a, l, l).plus_pjpmi4_k$(s_0);
          } else {
            t = get_0(a, i_0, i_0);
            u = csqrt_0(get_0(a, i_0 - 1 | 0, i_0)).times_czwimy_k$(csqrt_0(get_0(a, i_0, i_0 - 1 | 0)));
            s_0 = absL1_0(u);
            if (!(s_0 === 0.0)) {
              var x_4 = get_0(a, i_0 - 1 | 0, i_0 - 1 | 0).minus_wp99j0_k$(t).times_qz1dds_k$(0.5);
              var sx = absL1_0(x_4);
              // Inline function 'kotlin.math.max' call
              var a_4 = s_0;
              var b_5 = absL1_0(x_4);
              s_0 = Math.max(a_4, b_5);
              var y = csqrt_0(x_4.div_k6dnjf_k$(s_0).times_czwimy_k$(x_4.div_k6dnjf_k$(s_0)).plus_nev5n6_k$(u.div_k6dnjf_k$(s_0).times_czwimy_k$(u.div_k6dnjf_k$(s_0)))).times_qz1dds_k$(s_0);
              if (sx > 0.0 ? x_4.get_re_kntnpg_k$() / sx * y.get_re_kntnpg_k$() + x_4.get_im_kntnwz_k$() / sx * y.get_im_kntnwz_k$() < 0.0 : false) {
                y = y.unaryMinus_6uz0qp_k$();
              }
              t = t.minus_wp99j0_k$(u.times_czwimy_k$(u.div_y9b5uj_k$(x_4.plus_nev5n6_k$(y))));
            }
          }
          var h11;
          var h11s;
          var h22;
          var h21;
          // Inline function 'kotlin.run' call
          // Inline function 'kotlin.contracts.contract' call
          var tmp$ret$21;
          $l$block_1: {
            // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.qrShiftedDouble.<anonymous>' call
            var inductionVariable_2 = i_0 - 1 | 0;
            var last_0 = l;
            if (last_0 <= inductionVariable_2)
              do {
                var m = inductionVariable_2;
                inductionVariable_2 = inductionVariable_2 + -1 | 0;
                h11 = get_0(a, m, m);
                h22 = get_0(a, m + 1 | 0, m + 1 | 0);
                h11s = h11.minus_wp99j0_k$(t);
                h21 = toComplexDouble(get_0(a, m + 1 | 0, m).get_re_kntnpg_k$());
                s_0 = absL1_0(h11s) + h21.abs_22cy_k$();
                h11s = h11s.div_k6dnjf_k$(s_0);
                h21 = h21.div_k6dnjf_k$(s_0);
                set_0(v, 0, h11s);
                set_0(v, 1, h21);
                if (m > l) {
                  var h10 = get_0(a, m, m - 1 | 0);
                  if (h10.abs_22cy_k$() * h21.abs_22cy_k$() <= ulp * (absL1_0(h11s) * (absL1_0(h11) + absL1_0(h22)))) {
                    tmp$ret$21 = m;
                    break $l$block_1;
                  }
                }
              }
               while (!(m === last_0));
            tmp$ret$21 = l;
          }
          var m_0 = tmp$ret$21;
          var inductionVariable_3 = m_0;
          var last_1 = i_0;
          if (inductionVariable_3 < last_1)
            do {
              var k_0 = inductionVariable_3;
              inductionVariable_3 = inductionVariable_3 + 1 | 0;
              if (k_0 > m_0) {
                set_0(v, 0, get_0(a, k_0, k_0 - 1 | 0));
                set_0(v, 1, get_0(a, k_0 + 1 | 0, k_0 - 1 | 0));
              }
              var tmp_8 = get(v, 0);
              var tmp_9 = get_3(v, until(1, 2));
              var tmp5_container = computeHouseholderReflectorInplace_0(2, tmp_8, tmp_9 instanceof NDArray ? tmp_9 : THROW_CCE());
              var v1 = tmp5_container.component1_7eebsc_k$();
              var t1 = tmp5_container.component2_7eebsb_k$();
              set_0(v, 0, v1);
              if (k_0 > m_0) {
                set(a, k_0, k_0 - 1 | 0, get(v, 0));
                set(a, k_0 + 1 | 0, k_0 - 1 | 0, Companion_getInstance_3().get_zero_woypkh_k$());
              }
              var v2 = get(v, 1);
              var t2 = t1.times_czwimy_k$(v2).get_re_kntnpg_k$();
              var inductionVariable_4 = k_0;
              if (inductionVariable_4 < n)
                do {
                  var j = inductionVariable_4;
                  inductionVariable_4 = inductionVariable_4 + 1 | 0;
                  var sum = t1.conjugate_b863jc_k$().times_czwimy_k$(get_0(a, k_0, j)).plus_nev5n6_k$(get_0(a, k_0 + 1 | 0, j).times_qz1dds_k$(t2));
                  set(a, k_0, j, get_0(a, k_0, j).minus_wp99j0_k$(sum));
                  set(a, k_0 + 1 | 0, j, get_0(a, k_0 + 1 | 0, j).minus_wp99j0_k$(sum.times_czwimy_k$(v2)));
                }
                 while (inductionVariable_4 < n);
              var inductionVariable_5 = 0;
              // Inline function 'kotlin.math.min' call
              var a_5 = k_0 + 2 | 0;
              var b_6 = i_0;
              var last_2 = Math.min(a_5, b_6) + 1 | 0;
              if (inductionVariable_5 < last_2)
                do {
                  var j_0 = inductionVariable_5;
                  inductionVariable_5 = inductionVariable_5 + 1 | 0;
                  var sum_0 = t1.times_czwimy_k$(get_0(a, j_0, k_0)).plus_nev5n6_k$(get_0(a, j_0, k_0 + 1 | 0).times_qz1dds_k$(t2));
                  set(a, j_0, k_0, get_0(a, j_0, k_0).minus_wp99j0_k$(sum_0));
                  var tmp16_index1 = k_0 + 1 | 0;
                  set(a, j_0, tmp16_index1, get_0(a, j_0, tmp16_index1).minus_wp99j0_k$(sum_0.times_czwimy_k$(v2.conjugate_b863jc_k$())));
                }
                 while (inductionVariable_5 < last_2);
              var inductionVariable_6 = 0;
              if (inductionVariable_6 < n)
                do {
                  var j_1 = inductionVariable_6;
                  inductionVariable_6 = inductionVariable_6 + 1 | 0;
                  var sum_1 = t1.times_czwimy_k$(get_0(z, j_1, k_0)).plus_nev5n6_k$(get_0(z, j_1, k_0 + 1 | 0).times_qz1dds_k$(t2));
                  set(z, j_1, k_0, get_0(z, j_1, k_0).minus_wp99j0_k$(sum_1));
                  var tmp23_index1 = k_0 + 1 | 0;
                  set(z, j_1, tmp23_index1, get_0(z, j_1, tmp23_index1).minus_wp99j0_k$(sum_1.times_czwimy_k$(v2.conjugate_b863jc_k$())));
                }
                 while (inductionVariable_6 < n);
              if (k_0 === m_0 ? m_0 > l : false) {
                var temp = Companion_getInstance_2().get_one_18iz2b_k$().minus_wp99j0_k$(t1);
                temp = temp.div_k6dnjf_k$(temp.abs_22cy_k$());
                set(a, m_0 + 1 | 0, m_0, get_0(a, m_0 + 1 | 0, m_0).times_czwimy_k$(temp.conjugate_b863jc_k$()));
                if ((m_0 + 2 | 0) < i_0) {
                  var tmp25_index0 = m_0 + 2 | 0;
                  var tmp26_index1 = m_0 + 1 | 0;
                  set(a, tmp25_index0, tmp26_index1, get_0(a, tmp25_index0, tmp26_index1).times_czwimy_k$(temp));
                }
                var inductionVariable_7 = m_0;
                var last_3 = i_0;
                if (inductionVariable_7 <= last_3)
                  do {
                    var j_2 = inductionVariable_7;
                    inductionVariable_7 = inductionVariable_7 + 1 | 0;
                    if (!(j_2 === (m_0 + 1 | 0))) {
                      if (n > (j_2 + 1 | 0)) {
                        var tmp_10 = get_1(a, j_2, until(j_2 + 1 | 0, n));
                        timesAssign(tmp_10 instanceof NDArray ? tmp_10 : THROW_CCE(), temp);
                      }
                      var tmp_11 = get_2(a, until(0, j_2), j_2);
                      timesAssign(tmp_11 instanceof NDArray ? tmp_11 : THROW_CCE(), temp.conjugate_b863jc_k$());
                      var tmp_12 = get_2(z, until(0, n), j_2);
                      timesAssign(tmp_12 instanceof NDArray ? tmp_12 : THROW_CCE(), temp.conjugate_b863jc_k$());
                    }
                  }
                   while (!(j_2 === last_3));
              }
            }
             while (inductionVariable_3 < last_1);
          var temp_0 = get_0(a, i_0, i_0 - 1 | 0);
          if (!(temp_0.get_im_kntnwz_k$() === 0.0)) {
            var rtemp = toComplexDouble(temp_0.abs_22cy_k$());
            set(a, i_0, i_0 - 1 | 0, rtemp);
            temp_0 = temp_0.div_y9b5uj_k$(rtemp);
            if (n > (i_0 + 1 | 0)) {
              var tmp_13 = get_1(a, i_0, until(i_0 + 1 | 0, n));
              timesAssign(tmp_13 instanceof NDArray ? tmp_13 : THROW_CCE(), temp_0.conjugate_b863jc_k$());
            }
            var tmp_14 = get_2(a, until(0, i_0), i_0);
            timesAssign(tmp_14 instanceof NDArray ? tmp_14 : THROW_CCE(), temp_0);
            var tmp_15 = get_2(z, until(0, n), i_0);
            timesAssign(tmp_15 instanceof NDArray ? tmp_15 : THROW_CCE(), temp_0);
          }
        }
         while (inductionVariable_0 < itmax);
      if (failedToConverge) {
        throw ArithmeticException_init_$Create$('failed to converge with trialsNumber = ' + trialsNumber);
      }
      kdefl = 0;
      i_0 = l - 1 | 0;
    }
    return new Pair(a, z);
  }
  function absL1(a) {
    // Inline function 'kotlin.math.abs' call
    var x = a.get_re_kntnpg_k$();
    var tmp = Math.abs(x);
    // Inline function 'kotlin.math.abs' call
    var x_0 = a.get_im_kntnwz_k$();
    return tmp + Math.abs(x_0);
  }
  function computeHouseholderReflectorInplace(n, alpha, x) {
    var tmp = alpha;
    if (n <= 0) {
      return new Pair(tmp, Companion_getInstance_2().get_zero_woypkh_k$());
    }
    var xnorm = 0.0;
    var inductionVariable = 0;
    var last = n - 1 | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        xnorm = xnorm + get(x, i).times_c0fmev_k$(get(x, i).conjugate_b863jc_k$()).get_re_kntnpg_k$();
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.math.sqrt' call
    // Inline function 'kotlin.math.max' call
    var a = xnorm;
    var x_0 = Math.max(a, 0.0);
    xnorm = Math.sqrt(x_0);
    var alphr = alpha.get_re_kntnpg_k$();
    var alphi = alpha.get_im_kntnwz_k$();
    if (xnorm === 0.0 ? alphi === 0.0 : false) {
      return new Pair(tmp, Companion_getInstance_2().get_zero_woypkh_k$());
    }
    var tmp_0 = -signum(alphr);
    // Inline function 'kotlin.math.sqrt' call
    var x_1 = alphr * alphr + alphi * alphi + xnorm * xnorm;
    var beta = tmp_0 * Math.sqrt(x_1);
    var safemin = 1.4E-45;
    var rsafemin = 1.0 / safemin;
    var knt = 0;
    $l$loop_0: while (true) {
      // Inline function 'kotlin.math.abs' call
      var x_2 = beta;
      if (!(Math.abs(x_2) < safemin)) {
        break $l$loop_0;
      }
      knt = knt + 1 | 0;
      var tmp_1 = get_3(x, until(0, n - 1 | 0));
      timesAssign(tmp_1 instanceof NDArray ? tmp_1 : THROW_CCE(), toComplexFloat(rsafemin));
      beta = beta * rsafemin;
      alphi = alphi * rsafemin;
      alphr = alphr * safemin;
      var tmp_2;
      // Inline function 'kotlin.math.abs' call
      var x_3 = beta;
      if (Math.abs(x_3) < safemin) {
        tmp_2 = knt < 20;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        continue $l$loop_0;
      }
      xnorm = 0.0;
      var inductionVariable_0 = 0;
      var last_0 = n - 1 | 0;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          xnorm = xnorm + get(x, i_0).times_c0fmev_k$(get(x, i_0).conjugate_b863jc_k$()).get_re_kntnpg_k$();
        }
         while (inductionVariable_0 < last_0);
      // Inline function 'kotlin.math.sqrt' call
      // Inline function 'kotlin.math.max' call
      var a_0 = xnorm;
      var x_4 = Math.max(a_0, 0.0);
      xnorm = Math.sqrt(x_4);
      tmp = new ComplexFloat(alphr, alphi);
      var tmp_3 = -signum(alphr);
      // Inline function 'kotlin.math.sqrt' call
      var x_5 = alphr * alphr + alphi * alphi + xnorm * xnorm;
      beta = tmp_3 * Math.sqrt(x_5);
    }
    var tau = new ComplexFloat((beta - alphr) / beta, -alphi / beta);
    tmp = toComplexFloat(1.0).div_ra8ixu_k$(tmp.minus_brujug_k$(beta));
    var tmp_4 = get_3(x, until(0, n - 1 | 0));
    timesAssign(tmp_4 instanceof NDArray ? tmp_4 : THROW_CCE(), tmp);
    var inductionVariable_1 = 1;
    var last_1 = knt;
    if (inductionVariable_1 <= last_1)
      do {
        var j = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        beta = beta * safemin;
      }
       while (!(j === last_1));
    return new Pair(toComplexFloat(beta), tau);
  }
  function absL1_0(a) {
    // Inline function 'kotlin.math.abs' call
    var x = a.get_re_kntnpg_k$();
    var tmp = Math.abs(x);
    // Inline function 'kotlin.math.abs' call
    var x_0 = a.get_im_kntnwz_k$();
    return tmp + Math.abs(x_0);
  }
  function computeHouseholderReflectorInplace_0(n, alpha, x) {
    var tmp = alpha;
    if (n <= 0) {
      return new Pair(tmp, Companion_getInstance_3().get_zero_woypkh_k$());
    }
    var xnorm = 0.0;
    var inductionVariable = 0;
    var last = n - 1 | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        xnorm = xnorm + get(x, i).times_czwimy_k$(get(x, i).conjugate_b863jc_k$()).get_re_kntnpg_k$();
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.math.sqrt' call
    // Inline function 'kotlin.math.max' call
    var a = xnorm;
    var x_0 = Math.max(a, 0.0);
    xnorm = Math.sqrt(x_0);
    var alphr = alpha.get_re_kntnpg_k$();
    var alphi = alpha.get_im_kntnwz_k$();
    if (xnorm === 0.0 ? alphi === 0.0 : false) {
      return new Pair(tmp, Companion_getInstance_3().get_zero_woypkh_k$());
    }
    var tmp_0 = -signum_0(alphr);
    // Inline function 'kotlin.math.sqrt' call
    var x_1 = alphr * alphr + alphi * alphi + xnorm * xnorm;
    var beta = tmp_0 * Math.sqrt(x_1);
    var safemin = 2.0E-300;
    var rsafemin = 1.0 / safemin;
    var knt = 0;
    $l$loop_0: while (true) {
      // Inline function 'kotlin.math.abs' call
      var x_2 = beta;
      if (!(Math.abs(x_2) < safemin)) {
        break $l$loop_0;
      }
      knt = knt + 1 | 0;
      var tmp_1 = get_3(x, until(0, n - 1 | 0));
      timesAssign(tmp_1 instanceof NDArray ? tmp_1 : THROW_CCE(), toComplexDouble(rsafemin));
      beta = beta * rsafemin;
      alphi = alphi * rsafemin;
      alphr = alphr * safemin;
      var tmp_2;
      // Inline function 'kotlin.math.abs' call
      var x_3 = beta;
      if (Math.abs(x_3) < safemin) {
        tmp_2 = knt < 20;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        continue $l$loop_0;
      }
      xnorm = 0.0;
      var inductionVariable_0 = 0;
      var last_0 = n - 1 | 0;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          xnorm = xnorm + get(x, i_0).times_czwimy_k$(get(x, i_0).conjugate_b863jc_k$()).get_re_kntnpg_k$();
        }
         while (inductionVariable_0 < last_0);
      // Inline function 'kotlin.math.sqrt' call
      // Inline function 'kotlin.math.max' call
      var a_0 = xnorm;
      var x_4 = Math.max(a_0, 0.0);
      xnorm = Math.sqrt(x_4);
      tmp = new ComplexDouble(alphr, alphi);
      var tmp_3 = -signum_0(alphr);
      // Inline function 'kotlin.math.sqrt' call
      var x_5 = alphr * alphr + alphi * alphi + xnorm * xnorm;
      beta = tmp_3 * Math.sqrt(x_5);
    }
    var tau = new ComplexDouble((beta - alphr) / beta, -alphi / beta);
    tmp = toComplexDouble(1.0).div_y9b5uj_k$(tmp.minus_ur3tau_k$(beta));
    var tmp_4 = get_3(x, until(0, n - 1 | 0));
    timesAssign(tmp_4 instanceof NDArray ? tmp_4 : THROW_CCE(), tmp);
    var inductionVariable_1 = 1;
    var last_1 = knt;
    if (inductionVariable_1 <= last_1)
      do {
        var j = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        beta = beta * safemin;
      }
       while (!(j === last_1));
    return new Pair(toComplexDouble(beta), tau);
  }
  function signum(x) {
    var tmp;
    if (x === 0.0) {
      tmp = 1.0;
    } else {
      // Inline function 'kotlin.math.sign' call
      tmp = sign(x);
    }
    return tmp;
  }
  function signum_0(x) {
    var tmp;
    if (x === 0.0) {
      tmp = 1.0;
    } else {
      // Inline function 'kotlin.math.sign' call
      tmp = sign(x);
    }
    return tmp;
  }
  function eigenvaluesFloat$lambda($upperTriangular) {
    return function (it) {
      return get_0($upperTriangular, it, it);
    };
  }
  function eigenvaluesDouble$lambda($upperTriangular) {
    return function (it) {
      return get_0($upperTriangular, it, it);
    };
  }
  function upperHessenbergFloat(a) {
    var tmp0_container = a.get_shape_iyi9a0_k$();
    // Inline function 'kotlin.collections.component1' call
    var n = tmp0_container[0];
    // Inline function 'kotlin.collections.component2' call
    var m = tmp0_container[1];
    // Inline function 'org.jetbrains.kotlinx.multik.api.identity' call
    var this_0 = Multik_getInstance();
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.Companion.ofKClass' call
    Companion_getInstance();
    var type = getKClass(ComplexFloat);
    var tmp;
    if (type.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp = DataType_ByteDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp = DataType_ShortDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp = DataType_IntDataType_getInstance();
    } else if (type.equals(getKClass(Long))) {
      tmp = DataType_LongDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp = DataType_FloatDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp = DataType_DoubleDataType_getInstance();
    } else if (type.equals(getKClass(ComplexFloat))) {
      tmp = DataType_ComplexFloatDataType_getInstance();
    } else if (type.equals(getKClass(ComplexDouble))) {
      tmp = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, got ' + type.get_simpleName_r6f8py_k$());
    }
    var dtype = tmp;
    var id = identity(this_0, n, dtype);
    var ans = a instanceof NDArray ? a : THROW_CCE();
    var inductionVariable = 1;
    var last = n - 1 | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp2_container = householderTransformComplexFloat(get_4(ans, until(i, n), until(i - 1 | 0, m)));
        var tau = tmp2_container.component1_7eebsc_k$();
        var v = tmp2_container.component2_7eebsb_k$();
        var submatrix = get_4(ans, until(i, n), until(i - 1 | 0, m));
        submatrix = applyHouseholderComplexFloat(submatrix, tau, v);
        var inductionVariable_0 = i;
        if (inductionVariable_0 < n)
          do {
            var i1 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var inductionVariable_1 = i - 1 | 0;
            if (inductionVariable_1 < m)
              do {
                var j1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                set(ans, i1, j1, get_0(submatrix, i1 - i | 0, j1 - (i - 1 | 0) | 0));
              }
               while (inductionVariable_1 < m);
          }
           while (inductionVariable_0 < n);
        ans = conjTranspose(ans);
        submatrix = get_4(ans, until(i, n), until(0, m));
        submatrix = applyHouseholderComplexFloat(submatrix, tau, v);
        var inductionVariable_2 = i;
        if (inductionVariable_2 < n)
          do {
            var i1_0 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var inductionVariable_3 = 0;
            if (inductionVariable_3 < m)
              do {
                var j1_0 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                set(ans, i1_0, j1_0, get_0(submatrix, i1_0 - i | 0, j1_0));
              }
               while (inductionVariable_3 < m);
          }
           while (inductionVariable_2 < n);
        ans = conjTranspose(ans);
        submatrix = applyHouseholderComplexFloat(get_4(id, until(i, id.get_shape_iyi9a0_k$()[0]), until(0, id.get_shape_iyi9a0_k$()[1])), tau, v);
        var inductionVariable_4 = i;
        var last_0 = id.get_shape_iyi9a0_k$()[0];
        if (inductionVariable_4 < last_0)
          do {
            var i1_1 = inductionVariable_4;
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            var inductionVariable_5 = 0;
            var last_1 = id.get_shape_iyi9a0_k$()[1];
            if (inductionVariable_5 < last_1)
              do {
                var j1_1 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                set(id, i1_1, j1_1, get_0(submatrix, i1_1 - i | 0, j1_1));
              }
               while (inductionVariable_5 < last_1);
          }
           while (inductionVariable_4 < last_0);
      }
       while (inductionVariable < last);
    id = conjTranspose(id);
    var inductionVariable_6 = 2;
    if (inductionVariable_6 < n)
      do {
        var i_0 = inductionVariable_6;
        inductionVariable_6 = inductionVariable_6 + 1 | 0;
        var inductionVariable_7 = 0;
        var last_2 = i_0 - 1 | 0;
        if (inductionVariable_7 < last_2)
          do {
            var j = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            set(ans, i_0, j, Companion_getInstance_2().get_zero_woypkh_k$());
          }
           while (inductionVariable_7 < last_2);
      }
       while (inductionVariable_6 < n);
    return new Pair(id, ans);
  }
  function upperHessenbergDouble(a) {
    var tmp0_container = a.get_shape_iyi9a0_k$();
    // Inline function 'kotlin.collections.component1' call
    var n = tmp0_container[0];
    // Inline function 'kotlin.collections.component2' call
    var m = tmp0_container[1];
    // Inline function 'org.jetbrains.kotlinx.multik.api.identity' call
    var this_0 = Multik_getInstance();
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.Companion.ofKClass' call
    Companion_getInstance();
    var type = getKClass(ComplexDouble);
    var tmp;
    if (type.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp = DataType_ByteDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp = DataType_ShortDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp = DataType_IntDataType_getInstance();
    } else if (type.equals(getKClass(Long))) {
      tmp = DataType_LongDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp = DataType_FloatDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp = DataType_DoubleDataType_getInstance();
    } else if (type.equals(getKClass(ComplexFloat))) {
      tmp = DataType_ComplexFloatDataType_getInstance();
    } else if (type.equals(getKClass(ComplexDouble))) {
      tmp = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, got ' + type.get_simpleName_r6f8py_k$());
    }
    var dtype = tmp;
    var id = identity(this_0, n, dtype);
    var ans = a instanceof NDArray ? a : THROW_CCE();
    var inductionVariable = 1;
    var last = n - 1 | 0;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp2_container = householderTransformComplexDouble(get_4(ans, until(i, n), until(i - 1 | 0, m)));
        var tau = tmp2_container.component1_7eebsc_k$();
        var v = tmp2_container.component2_7eebsb_k$();
        var submatrix = get_4(ans, until(i, n), until(i - 1 | 0, m));
        submatrix = applyHouseholderComplexDouble(submatrix, tau, v);
        var inductionVariable_0 = i;
        if (inductionVariable_0 < n)
          do {
            var i1 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var inductionVariable_1 = i - 1 | 0;
            if (inductionVariable_1 < m)
              do {
                var j1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                set(ans, i1, j1, get_0(submatrix, i1 - i | 0, j1 - (i - 1 | 0) | 0));
              }
               while (inductionVariable_1 < m);
          }
           while (inductionVariable_0 < n);
        ans = conjTranspose_0(ans);
        submatrix = get_4(ans, until(i, n), until(0, m));
        submatrix = applyHouseholderComplexDouble(submatrix, tau, v);
        var inductionVariable_2 = i;
        if (inductionVariable_2 < n)
          do {
            var i1_0 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var inductionVariable_3 = 0;
            if (inductionVariable_3 < m)
              do {
                var j1_0 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                set(ans, i1_0, j1_0, get_0(submatrix, i1_0 - i | 0, j1_0));
              }
               while (inductionVariable_3 < m);
          }
           while (inductionVariable_2 < n);
        ans = conjTranspose_0(ans);
        submatrix = applyHouseholderComplexDouble(get_4(id, until(i, id.get_shape_iyi9a0_k$()[0]), until(0, id.get_shape_iyi9a0_k$()[1])), tau, v);
        var inductionVariable_4 = i;
        var last_0 = id.get_shape_iyi9a0_k$()[0];
        if (inductionVariable_4 < last_0)
          do {
            var i1_1 = inductionVariable_4;
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            var inductionVariable_5 = 0;
            var last_1 = id.get_shape_iyi9a0_k$()[1];
            if (inductionVariable_5 < last_1)
              do {
                var j1_1 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                set(id, i1_1, j1_1, get_0(submatrix, i1_1 - i | 0, j1_1));
              }
               while (inductionVariable_5 < last_1);
          }
           while (inductionVariable_4 < last_0);
      }
       while (inductionVariable < last);
    id = conjTranspose_0(id);
    var inductionVariable_6 = 2;
    if (inductionVariable_6 < n)
      do {
        var i_0 = inductionVariable_6;
        inductionVariable_6 = inductionVariable_6 + 1 | 0;
        var inductionVariable_7 = 0;
        var last_2 = i_0 - 1 | 0;
        if (inductionVariable_7 < last_2)
          do {
            var j = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            set(ans, i_0, j, Companion_getInstance_3().get_zero_woypkh_k$());
          }
           while (inductionVariable_7 < last_2);
      }
       while (inductionVariable_6 < n);
    return new Pair(id, ans);
  }
  function normFro(mat, offset, strides, n, m, power) {
    var result = 0.0;
    // Inline function 'kotlin.collections.component1' call
    var stride0 = strides[0];
    // Inline function 'kotlin.collections.component2' call
    var stride1 = strides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var matInd = imul(i, stride0) + offset | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < m)
          do {
            var k = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.math.abs' call
            var x = mat[matInd + imul(k, stride1) | 0];
            var absValue = Math.abs(x);
            var tmp = result;
            // Inline function 'kotlin.math.pow' call
            result = tmp + Math.pow(absValue, power);
          }
           while (inductionVariable_0 < m);
      }
       while (inductionVariable < n);
    // Inline function 'kotlin.math.pow' call
    var this_0 = result;
    var x_0 = 1.0 / power;
    return Math.pow(this_0, x_0);
  }
  function norm1(mat, offset, strides, n, m) {
    var result = 0.0;
    // Inline function 'kotlin.collections.component1' call
    var stride0 = strides[0];
    // Inline function 'kotlin.collections.component2' call
    var stride1 = strides[1];
    var inductionVariable = 0;
    if (inductionVariable < m)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var matIdx = imul(j, stride1);
        var sum = 0.0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < n)
          do {
            var i = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp = sum;
            // Inline function 'kotlin.math.abs' call
            var x = mat[matIdx + (imul(i, stride0) + offset | 0) | 0];
            sum = tmp + Math.abs(x);
          }
           while (inductionVariable_0 < n);
        if (result < sum)
          result = sum;
      }
       while (inductionVariable < m);
    return result;
  }
  function normMax(mat, offset, strides, n, m) {
    var result = mat[offset];
    // Inline function 'kotlin.collections.component1' call
    var stride0 = strides[0];
    // Inline function 'kotlin.collections.component2' call
    var stride1 = strides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var matIdx = imul(i, stride0) + offset | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < m)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.math.abs' call
            var x = mat[matIdx + imul(j, stride1) | 0];
            var element = Math.abs(x);
            if (result < element)
              result = element;
          }
           while (inductionVariable_0 < m);
      }
       while (inductionVariable < n);
    return result;
  }
  function normInf(mat, offset, strides, n, m) {
    var result = 0.0;
    // Inline function 'kotlin.collections.component1' call
    var stride0 = strides[0];
    // Inline function 'kotlin.collections.component2' call
    var stride1 = strides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var matIdx = imul(i, stride0) + offset | 0;
        var sum = 0.0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < m)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp = sum;
            // Inline function 'kotlin.math.abs' call
            var x = mat[matIdx + imul(j, stride1) | 0];
            sum = tmp + Math.abs(x);
          }
           while (inductionVariable_0 < m);
        if (result < sum)
          result = sum;
      }
       while (inductionVariable < n);
    return result;
  }
  function normFro_0(mat, offset, strides, n, m, power) {
    var result = 0.0;
    // Inline function 'kotlin.collections.component1' call
    var stride0 = strides[0];
    // Inline function 'kotlin.collections.component2' call
    var stride1 = strides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var matInd = imul(i, stride0) + offset | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < m)
          do {
            var k = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.math.abs' call
            var x = mat[matInd + imul(k, stride1) | 0];
            var absValue = Math.abs(x);
            var tmp = result;
            // Inline function 'kotlin.math.pow' call
            result = tmp + Math.pow(absValue, power);
          }
           while (inductionVariable_0 < m);
      }
       while (inductionVariable < n);
    // Inline function 'kotlin.math.pow' call
    var this_0 = result;
    var x_0 = 1.0 / power;
    return Math.pow(this_0, x_0);
  }
  function norm1_0(mat, offset, strides, n, m) {
    var result = 0.0;
    // Inline function 'kotlin.collections.component1' call
    var stride0 = strides[0];
    // Inline function 'kotlin.collections.component2' call
    var stride1 = strides[1];
    var inductionVariable = 0;
    if (inductionVariable < m)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var matIdx = imul(j, stride1);
        var sum = 0.0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < n)
          do {
            var i = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp = sum;
            // Inline function 'kotlin.math.abs' call
            var x = mat[matIdx + (imul(i, stride0) + offset | 0) | 0];
            sum = tmp + Math.abs(x);
          }
           while (inductionVariable_0 < n);
        if (result < sum)
          result = sum;
      }
       while (inductionVariable < m);
    return result;
  }
  function normMax_0(mat, offset, strides, n, m) {
    var result = mat[offset];
    // Inline function 'kotlin.collections.component1' call
    var stride0 = strides[0];
    // Inline function 'kotlin.collections.component2' call
    var stride1 = strides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var matIdx = imul(i, stride0) + offset | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < m)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.math.abs' call
            var x = mat[matIdx + imul(j, stride1) | 0];
            var element = Math.abs(x);
            if (result < element)
              result = element;
          }
           while (inductionVariable_0 < m);
      }
       while (inductionVariable < n);
    return result;
  }
  function normInf_0(mat, offset, strides, n, m) {
    var result = 0.0;
    // Inline function 'kotlin.collections.component1' call
    var stride0 = strides[0];
    // Inline function 'kotlin.collections.component2' call
    var stride1 = strides[1];
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var matIdx = imul(i, stride0) + offset | 0;
        var sum = 0.0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < m)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp = sum;
            // Inline function 'kotlin.math.abs' call
            var x = mat[matIdx + imul(j, stride1) | 0];
            sum = tmp + Math.abs(x);
          }
           while (inductionVariable_0 < m);
        if (result < sum)
          result = sum;
      }
       while (inductionVariable < n);
    return result;
  }
  function pluCompressed(mat) {
    var tmp0_container = mat.get_shape_iyi9a0_k$();
    // Inline function 'kotlin.collections.component1' call
    var n = tmp0_container[0];
    // Inline function 'kotlin.collections.component2' call
    var m = tmp0_container[1];
    // Inline function 'kotlin.math.min' call
    var nm = Math.min(n, m);
    // Inline function 'org.jetbrains.kotlinx.multik.api.zeros' call
    var this_0 = Multik_getInstance();
    // Inline function 'kotlin.intArrayOf' call
    var tmp = new Int32Array([nm]);
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.Companion.ofKClass' call
    Companion_getInstance();
    var type = PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$();
    var tmp_0;
    if (type.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp_0 = DataType_ByteDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp_0 = DataType_ShortDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp_0 = DataType_IntDataType_getInstance();
    } else if (type.equals(getKClass(Long))) {
      tmp_0 = DataType_LongDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp_0 = DataType_FloatDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp_0 = DataType_DoubleDataType_getInstance();
    } else if (type.equals(getKClass(ComplexFloat))) {
      tmp_0 = DataType_ComplexFloatDataType_getInstance();
    } else if (type.equals(getKClass(ComplexDouble))) {
      tmp_0 = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, got ' + type.get_simpleName_r6f8py_k$());
    }
    var tmp$ret$4 = tmp_0;
    var perm = zeros(this_0, tmp, tmp$ret$4);
    var tmp_1 = Multik_getInstance();
    // Inline function 'kotlin.intArrayOf' call
    var tmp$ret$6 = new Int32Array([n, nm]);
    var L = zeros(tmp_1, tmp$ret$6, mat.get_dtype_iqhi0l_k$());
    var tmp_2 = Multik_getInstance();
    // Inline function 'kotlin.intArrayOf' call
    var tmp$ret$7 = new Int32Array([nm, m]);
    var U = zeros(tmp_2, tmp$ret$7, mat.get_dtype_iqhi0l_k$());
    switch (mat.get_dtype_iqhi0l_k$().get_ordinal_ip24qg_k$()) {
      case 5:
        pluDecompositionInplace(mat instanceof NDArray ? mat : THROW_CCE(), perm);
        fillLowerMatrix(L instanceof NDArray ? L : THROW_CCE(), mat, 1.0);
        break;
      case 4:
        pluDecompositionInplaceF(mat instanceof NDArray ? mat : THROW_CCE(), perm);
        fillLowerMatrix(L instanceof NDArray ? L : THROW_CCE(), mat, 1.0);
        break;
      case 7:
        pluDecompositionInplaceComplexDouble(mat instanceof NDArray ? mat : THROW_CCE(), perm);
        fillLowerMatrix(L instanceof NDArray ? L : THROW_CCE(), mat, Companion_getInstance_3().get_one_18iz2b_k$());
        break;
      case 6:
        pluDecompositionInplaceComplexFloat(mat instanceof NDArray ? mat : THROW_CCE(), perm);
        fillLowerMatrix(L instanceof NDArray ? L : THROW_CCE(), mat, Companion_getInstance_2().get_one_18iz2b_k$());
        break;
      default:
        throw UnsupportedOperationException_init_$Create$();
    }
    var inductionVariable = 0;
    var last = U.get_shape_iyi9a0_k$()[0];
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = i;
        var last_0 = U.get_shape_iyi9a0_k$()[1];
        if (inductionVariable_0 < last_0)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            set(U, i, j, get_0(mat, i, j));
          }
           while (inductionVariable_0 < last_0);
      }
       while (inductionVariable < last);
    return new Triple(perm, L, U);
  }
  function pluDecompositionInplace(a, rowPerm) {
    // Inline function 'kotlin.math.min' call
    var a_0 = a.get_shape_iyi9a0_k$()[1];
    var b = a.get_shape_iyi9a0_k$()[0];
    var n1 = Math.min(a_0, b) / 2 | 0;
    var n2 = a.get_shape_iyi9a0_k$()[1] - n1 | 0;
    if (a.get_shape_iyi9a0_k$()[1] === 0 ? true : a.get_shape_iyi9a0_k$()[0] === 0)
      return Unit_getInstance();
    if (a.get_shape_iyi9a0_k$()[0] === 1)
      return Unit_getInstance();
    if (a.get_shape_iyi9a0_k$()[1] === 1) {
      var imax = 0;
      var elemmax = get_0(a, 0, 0);
      var inductionVariable = 1;
      var last = a.get_shape_iyi9a0_k$()[0];
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.math.abs' call
          var x = get_0(a, i, 0);
          var tmp = Math.abs(x);
          // Inline function 'kotlin.math.abs' call
          var x_0 = elemmax;
          if (tmp > Math.abs(x_0)) {
            elemmax = get_0(a, i, 0);
            imax = i;
          }
        }
         while (inductionVariable < last);
      if (!(elemmax === 0.0)) {
        // Inline function 'kotlin.also' call
        var this_0 = get_0(a, imax, 0);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplace.<anonymous>' call
        set(a, imax, 0, get_0(a, 0, 0));
        set(a, 0, 0, this_0);
        set_0(rowPerm, 0, imax);
        var inductionVariable_0 = 1;
        var last_0 = a.get_shape_iyi9a0_k$()[0];
        if (inductionVariable_0 < last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            set(a, i_0, 0, get_0(a, i_0, 0) / elemmax);
          }
           while (inductionVariable_0 < last_0);
      }
      return Unit_getInstance();
    }
    var tmp_0 = get_4(a, until(0, a.get_shape_iyi9a0_k$()[0]), until(0, n1));
    var tmp_1 = tmp_0 instanceof NDArray ? tmp_0 : THROW_CCE();
    // Inline function 'kotlin.math.min' call
    var a_1 = a.get_shape_iyi9a0_k$()[0];
    var tmp$ret$4 = Math.min(a_1, n1);
    var tmp_2 = get_3(rowPerm, until(0, tmp$ret$4));
    pluDecompositionInplace(tmp_1, tmp_2 instanceof NDArray ? tmp_2 : THROW_CCE());
    // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.swapLines' call
    var to2 = a.get_shape_iyi9a0_k$()[1];
    var to1 = rowPerm.get_size_woubt6_k$();
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < to1)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        if (!(get(rowPerm, i_1) === 0)) {
          var inductionVariable_2 = n1;
          if (inductionVariable_2 < to2)
            do {
              var j = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + 1 | 0;
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplace.<anonymous>' call
              // Inline function 'kotlin.also' call
              var this_1 = get_0(a, i_1 + get(rowPerm, i_1) | 0, j);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplace.<anonymous>.<anonymous>' call
              set(a, i_1 + get(rowPerm, i_1) | 0, j, get_0(a, i_1, j));
              set(a, i_1, j, this_1);
            }
             while (inductionVariable_2 < to2);
        }
      }
       while (inductionVariable_1 < to1);
    var aSlice = get_4(a, until(0, n1), until(0, n1));
    var tmp_3 = get_4(a, until(0, n1), until(n1, n1 + n2 | 0));
    var x_1 = tmp_3 instanceof NDArray ? tmp_3 : THROW_CCE();
    // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveLowerTriangleSystem' call
    var sizeA = aSlice.get_shape_iyi9a0_k$()[1];
    var sizeX = x_1.get_shape_iyi9a0_k$()[1];
    var inductionVariable_3 = 0;
    if (inductionVariable_3 < sizeA)
      do {
        var i_2 = inductionVariable_3;
        inductionVariable_3 = inductionVariable_3 + 1 | 0;
        var inductionVariable_4 = i_2 + 1 | 0;
        if (inductionVariable_4 < sizeA)
          do {
            var k = inductionVariable_4;
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            var inductionVariable_5 = 0;
            if (inductionVariable_5 < sizeX)
              do {
                var j_0 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplace.<anonymous>' call
                set(x_1, k, j_0, get_0(x_1, k, j_0) - get_0(aSlice, k, i_2) * get_0(x_1, i_2, j_0));
              }
               while (inductionVariable_5 < sizeX);
          }
           while (inductionVariable_4 < sizeA);
      }
       while (inductionVariable_3 < sizeA);
    var update = dotMatrix(get_4(a, until(n1, a.get_shape_iyi9a0_k$()[0]), until(0, n1)), get_4(a, until(0, n1), until(n1, n1 + n2 | 0)));
    var inductionVariable_6 = n1;
    var last_1 = a.get_shape_iyi9a0_k$()[0];
    if (inductionVariable_6 < last_1)
      do {
        var i_3 = inductionVariable_6;
        inductionVariable_6 = inductionVariable_6 + 1 | 0;
        var inductionVariable_7 = n1;
        var last_2 = n1 + n2 | 0;
        if (inductionVariable_7 < last_2)
          do {
            var j_1 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            set(a, i_3, j_1, get_0(a, i_3, j_1) - get_0(update, i_3 - n1 | 0, j_1 - n1 | 0));
          }
           while (inductionVariable_7 < last_2);
      }
       while (inductionVariable_6 < last_1);
    var tmp_4 = get_4(a, until(n1, a.get_shape_iyi9a0_k$()[0]), until(n1, a.get_shape_iyi9a0_k$()[1]));
    var tmp_5 = tmp_4 instanceof NDArray ? tmp_4 : THROW_CCE();
    // Inline function 'kotlin.math.min' call
    var a_2 = a.get_shape_iyi9a0_k$()[0];
    var b_0 = a.get_shape_iyi9a0_k$()[1];
    var tmp$ret$6 = Math.min(a_2, b_0);
    var tmp_6 = get_3(rowPerm, until(n1, tmp$ret$6));
    pluDecompositionInplace(tmp_5, tmp_6 instanceof NDArray ? tmp_6 : THROW_CCE());
    // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.swapLines' call
    var to1_0 = rowPerm.get_size_woubt6_k$();
    var inductionVariable_8 = n1;
    if (inductionVariable_8 < to1_0)
      do {
        var i_4 = inductionVariable_8;
        inductionVariable_8 = inductionVariable_8 + 1 | 0;
        if (!(get(rowPerm, i_4) === 0)) {
          var inductionVariable_9 = 0;
          if (inductionVariable_9 < n1)
            do {
              var j_2 = inductionVariable_9;
              inductionVariable_9 = inductionVariable_9 + 1 | 0;
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplace.<anonymous>' call
              // Inline function 'kotlin.also' call
              var this_2 = get_0(a, i_4 + get(rowPerm, i_4) | 0, j_2);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplace.<anonymous>.<anonymous>' call
              set(a, i_4 + get(rowPerm, i_4) | 0, j_2, get_0(a, i_4, j_2));
              set(a, i_4, j_2, this_2);
            }
             while (inductionVariable_9 < n1);
        }
      }
       while (inductionVariable_8 < to1_0);
  }
  function fillLowerMatrix(L, a, one) {
    var inductionVariable = 0;
    var last = L.get_shape_iyi9a0_k$()[0];
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 <= i)
          $l$loop: do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var tmp;
            if (j >= L.get_shape_iyi9a0_k$()[1]) {
              break $l$loop;
            } else if (i === j) {
              tmp = one;
            } else {
              tmp = get_0(a, i, j);
            }
            set(L, i, j, tmp);
          }
           while (!(j === i));
      }
       while (inductionVariable < last);
  }
  function pluDecompositionInplaceF(a, rowPerm) {
    // Inline function 'kotlin.math.min' call
    var a_0 = a.get_shape_iyi9a0_k$()[1];
    var b = a.get_shape_iyi9a0_k$()[0];
    var n1 = Math.min(a_0, b) / 2 | 0;
    var n2 = a.get_shape_iyi9a0_k$()[1] - n1 | 0;
    if (a.get_shape_iyi9a0_k$()[1] === 0 ? true : a.get_shape_iyi9a0_k$()[0] === 0)
      return Unit_getInstance();
    if (a.get_shape_iyi9a0_k$()[0] === 1)
      return Unit_getInstance();
    if (a.get_shape_iyi9a0_k$()[1] === 1) {
      var imax = 0;
      var elemmax = get_0(a, 0, 0);
      var inductionVariable = 1;
      var last = a.get_shape_iyi9a0_k$()[0];
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.math.abs' call
          var x = get_0(a, i, 0);
          var tmp = Math.abs(x);
          // Inline function 'kotlin.math.abs' call
          var x_0 = elemmax;
          if (tmp > Math.abs(x_0)) {
            elemmax = get_0(a, i, 0);
            imax = i;
          }
        }
         while (inductionVariable < last);
      if (!(elemmax === 0.0)) {
        // Inline function 'kotlin.also' call
        var this_0 = get_0(a, imax, 0);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplaceF.<anonymous>' call
        set(a, imax, 0, get_0(a, 0, 0));
        set(a, 0, 0, this_0);
        set_0(rowPerm, 0, imax);
        var inductionVariable_0 = 1;
        var last_0 = a.get_shape_iyi9a0_k$()[0];
        if (inductionVariable_0 < last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            set(a, i_0, 0, get_0(a, i_0, 0) / elemmax);
          }
           while (inductionVariable_0 < last_0);
      }
      return Unit_getInstance();
    }
    var tmp_0 = get_4(a, until(0, a.get_shape_iyi9a0_k$()[0]), until(0, n1));
    var tmp_1 = tmp_0 instanceof NDArray ? tmp_0 : THROW_CCE();
    // Inline function 'kotlin.math.min' call
    var a_1 = a.get_shape_iyi9a0_k$()[0];
    var tmp$ret$4 = Math.min(a_1, n1);
    var tmp_2 = get_3(rowPerm, until(0, tmp$ret$4));
    pluDecompositionInplaceF(tmp_1, tmp_2 instanceof NDArray ? tmp_2 : THROW_CCE());
    // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.swapLines' call
    var to2 = a.get_shape_iyi9a0_k$()[1];
    var to1 = rowPerm.get_size_woubt6_k$();
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < to1)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        if (!(get(rowPerm, i_1) === 0)) {
          var inductionVariable_2 = n1;
          if (inductionVariable_2 < to2)
            do {
              var j = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + 1 | 0;
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplaceF.<anonymous>' call
              // Inline function 'kotlin.also' call
              var this_1 = get_0(a, i_1 + get(rowPerm, i_1) | 0, j);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplaceF.<anonymous>.<anonymous>' call
              set(a, i_1 + get(rowPerm, i_1) | 0, j, get_0(a, i_1, j));
              set(a, i_1, j, this_1);
            }
             while (inductionVariable_2 < to2);
        }
      }
       while (inductionVariable_1 < to1);
    var aSlice = get_4(a, until(0, n1), until(0, n1));
    var tmp_3 = get_4(a, until(0, n1), until(n1, n1 + n2 | 0));
    var x_1 = tmp_3 instanceof NDArray ? tmp_3 : THROW_CCE();
    // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveLowerTriangleSystem' call
    var sizeA = aSlice.get_shape_iyi9a0_k$()[1];
    var sizeX = x_1.get_shape_iyi9a0_k$()[1];
    var inductionVariable_3 = 0;
    if (inductionVariable_3 < sizeA)
      do {
        var i_2 = inductionVariable_3;
        inductionVariable_3 = inductionVariable_3 + 1 | 0;
        var inductionVariable_4 = i_2 + 1 | 0;
        if (inductionVariable_4 < sizeA)
          do {
            var k = inductionVariable_4;
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            var inductionVariable_5 = 0;
            if (inductionVariable_5 < sizeX)
              do {
                var j_0 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplaceF.<anonymous>' call
                set(x_1, k, j_0, get_0(x_1, k, j_0) - get_0(aSlice, k, i_2) * get_0(x_1, i_2, j_0));
              }
               while (inductionVariable_5 < sizeX);
          }
           while (inductionVariable_4 < sizeA);
      }
       while (inductionVariable_3 < sizeA);
    var update = dotMatrix(get_4(a, until(n1, a.get_shape_iyi9a0_k$()[0]), until(0, n1)), get_4(a, until(0, n1), until(n1, n1 + n2 | 0)));
    var inductionVariable_6 = n1;
    var last_1 = a.get_shape_iyi9a0_k$()[0];
    if (inductionVariable_6 < last_1)
      do {
        var i_3 = inductionVariable_6;
        inductionVariable_6 = inductionVariable_6 + 1 | 0;
        var inductionVariable_7 = n1;
        var last_2 = n1 + n2 | 0;
        if (inductionVariable_7 < last_2)
          do {
            var j_1 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            set(a, i_3, j_1, get_0(a, i_3, j_1) - get_0(update, i_3 - n1 | 0, j_1 - n1 | 0));
          }
           while (inductionVariable_7 < last_2);
      }
       while (inductionVariable_6 < last_1);
    var tmp_4 = get_4(a, until(n1, a.get_shape_iyi9a0_k$()[0]), until(n1, a.get_shape_iyi9a0_k$()[1]));
    var tmp_5 = tmp_4 instanceof NDArray ? tmp_4 : THROW_CCE();
    // Inline function 'kotlin.math.min' call
    var a_2 = a.get_shape_iyi9a0_k$()[0];
    var b_0 = a.get_shape_iyi9a0_k$()[1];
    var tmp$ret$6 = Math.min(a_2, b_0);
    var tmp_6 = get_3(rowPerm, until(n1, tmp$ret$6));
    pluDecompositionInplaceF(tmp_5, tmp_6 instanceof NDArray ? tmp_6 : THROW_CCE());
    // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.swapLines' call
    var to1_0 = rowPerm.get_size_woubt6_k$();
    var inductionVariable_8 = n1;
    if (inductionVariable_8 < to1_0)
      do {
        var i_4 = inductionVariable_8;
        inductionVariable_8 = inductionVariable_8 + 1 | 0;
        if (!(get(rowPerm, i_4) === 0)) {
          var inductionVariable_9 = 0;
          if (inductionVariable_9 < n1)
            do {
              var j_2 = inductionVariable_9;
              inductionVariable_9 = inductionVariable_9 + 1 | 0;
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplaceF.<anonymous>' call
              // Inline function 'kotlin.also' call
              var this_2 = get_0(a, i_4 + get(rowPerm, i_4) | 0, j_2);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplaceF.<anonymous>.<anonymous>' call
              set(a, i_4 + get(rowPerm, i_4) | 0, j_2, get_0(a, i_4, j_2));
              set(a, i_4, j_2, this_2);
            }
             while (inductionVariable_9 < n1);
        }
      }
       while (inductionVariable_8 < to1_0);
  }
  function pluDecompositionInplaceComplexDouble(a, rowPerm) {
    // Inline function 'kotlin.math.min' call
    var a_0 = a.get_shape_iyi9a0_k$()[1];
    var b = a.get_shape_iyi9a0_k$()[0];
    var n1 = Math.min(a_0, b) / 2 | 0;
    var n2 = a.get_shape_iyi9a0_k$()[1] - n1 | 0;
    if (a.get_shape_iyi9a0_k$()[1] === 0 ? true : a.get_shape_iyi9a0_k$()[0] === 0)
      return Unit_getInstance();
    if (a.get_shape_iyi9a0_k$()[0] === 1)
      return Unit_getInstance();
    if (a.get_shape_iyi9a0_k$()[1] === 1) {
      var imax = 0;
      var elemmax = get_0(a, 0, 0);
      var inductionVariable = 1;
      var last = a.get_shape_iyi9a0_k$()[0];
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (get_0(a, i, 0).abs_22cy_k$() > elemmax.abs_22cy_k$()) {
            elemmax = get_0(a, i, 0);
            imax = i;
          }
        }
         while (inductionVariable < last);
      if (!elemmax.equals(Companion_getInstance_3().get_zero_woypkh_k$())) {
        // Inline function 'kotlin.also' call
        var this_0 = get_0(a, imax, 0);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplaceComplexDouble.<anonymous>' call
        set(a, imax, 0, get_0(a, 0, 0));
        set(a, 0, 0, this_0);
        set_0(rowPerm, 0, imax);
        var inductionVariable_0 = 1;
        var last_0 = a.get_shape_iyi9a0_k$()[0];
        if (inductionVariable_0 < last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            set(a, i_0, 0, get_0(a, i_0, 0).div_y9b5uj_k$(elemmax));
          }
           while (inductionVariable_0 < last_0);
      }
      return Unit_getInstance();
    }
    var tmp = get_4(a, until(0, a.get_shape_iyi9a0_k$()[0]), until(0, n1));
    var tmp_0 = tmp instanceof NDArray ? tmp : THROW_CCE();
    // Inline function 'kotlin.math.min' call
    var a_1 = a.get_shape_iyi9a0_k$()[0];
    var tmp$ret$2 = Math.min(a_1, n1);
    var tmp_1 = get_3(rowPerm, until(0, tmp$ret$2));
    pluDecompositionInplaceComplexDouble(tmp_0, tmp_1 instanceof NDArray ? tmp_1 : THROW_CCE());
    // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.swapLines' call
    var to2 = a.get_shape_iyi9a0_k$()[1];
    var to1 = rowPerm.get_size_woubt6_k$();
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < to1)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        if (!(get(rowPerm, i_1) === 0)) {
          var inductionVariable_2 = n1;
          if (inductionVariable_2 < to2)
            do {
              var j = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + 1 | 0;
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplaceComplexDouble.<anonymous>' call
              // Inline function 'kotlin.also' call
              var this_1 = get_0(a, i_1 + get(rowPerm, i_1) | 0, j);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplaceComplexDouble.<anonymous>.<anonymous>' call
              set(a, i_1 + get(rowPerm, i_1) | 0, j, get_0(a, i_1, j));
              set(a, i_1, j, this_1);
            }
             while (inductionVariable_2 < to2);
        }
      }
       while (inductionVariable_1 < to1);
    var aSlice = get_4(a, until(0, n1), until(0, n1));
    var tmp_2 = get_4(a, until(0, n1), until(n1, n1 + n2 | 0));
    var x = tmp_2 instanceof NDArray ? tmp_2 : THROW_CCE();
    // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveLowerTriangleSystem' call
    var sizeA = aSlice.get_shape_iyi9a0_k$()[1];
    var sizeX = x.get_shape_iyi9a0_k$()[1];
    var inductionVariable_3 = 0;
    if (inductionVariable_3 < sizeA)
      do {
        var i_2 = inductionVariable_3;
        inductionVariable_3 = inductionVariable_3 + 1 | 0;
        var inductionVariable_4 = i_2 + 1 | 0;
        if (inductionVariable_4 < sizeA)
          do {
            var k = inductionVariable_4;
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            var inductionVariable_5 = 0;
            if (inductionVariable_5 < sizeX)
              do {
                var j_0 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplaceComplexDouble.<anonymous>' call
                set(x, k, j_0, get_0(x, k, j_0).minus_wp99j0_k$(get_0(aSlice, k, i_2).times_czwimy_k$(get_0(x, i_2, j_0))));
              }
               while (inductionVariable_5 < sizeX);
          }
           while (inductionVariable_4 < sizeA);
      }
       while (inductionVariable_3 < sizeA);
    var update = dotMatrixComplex(get_4(a, until(n1, a.get_shape_iyi9a0_k$()[0]), until(0, n1)), get_4(a, until(0, n1), until(n1, n1 + n2 | 0)));
    var inductionVariable_6 = n1;
    var last_1 = a.get_shape_iyi9a0_k$()[0];
    if (inductionVariable_6 < last_1)
      do {
        var i_3 = inductionVariable_6;
        inductionVariable_6 = inductionVariable_6 + 1 | 0;
        var inductionVariable_7 = n1;
        var last_2 = n1 + n2 | 0;
        if (inductionVariable_7 < last_2)
          do {
            var j_1 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            set(a, i_3, j_1, get_0(a, i_3, j_1).minus_wp99j0_k$(get_0(update, i_3 - n1 | 0, j_1 - n1 | 0)));
          }
           while (inductionVariable_7 < last_2);
      }
       while (inductionVariable_6 < last_1);
    var tmp_3 = get_4(a, until(n1, a.get_shape_iyi9a0_k$()[0]), until(n1, a.get_shape_iyi9a0_k$()[1]));
    var tmp_4 = tmp_3 instanceof NDArray ? tmp_3 : THROW_CCE();
    // Inline function 'kotlin.math.min' call
    var a_2 = a.get_shape_iyi9a0_k$()[0];
    var b_0 = a.get_shape_iyi9a0_k$()[1];
    var tmp$ret$4 = Math.min(a_2, b_0);
    var tmp_5 = get_3(rowPerm, until(n1, tmp$ret$4));
    pluDecompositionInplaceComplexDouble(tmp_4, tmp_5 instanceof NDArray ? tmp_5 : THROW_CCE());
    // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.swapLines' call
    var to1_0 = rowPerm.get_size_woubt6_k$();
    var inductionVariable_8 = n1;
    if (inductionVariable_8 < to1_0)
      do {
        var i_4 = inductionVariable_8;
        inductionVariable_8 = inductionVariable_8 + 1 | 0;
        if (!(get(rowPerm, i_4) === 0)) {
          var inductionVariable_9 = 0;
          if (inductionVariable_9 < n1)
            do {
              var j_2 = inductionVariable_9;
              inductionVariable_9 = inductionVariable_9 + 1 | 0;
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplaceComplexDouble.<anonymous>' call
              // Inline function 'kotlin.also' call
              var this_2 = get_0(a, i_4 + get(rowPerm, i_4) | 0, j_2);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplaceComplexDouble.<anonymous>.<anonymous>' call
              set(a, i_4 + get(rowPerm, i_4) | 0, j_2, get_0(a, i_4, j_2));
              set(a, i_4, j_2, this_2);
            }
             while (inductionVariable_9 < n1);
        }
      }
       while (inductionVariable_8 < to1_0);
  }
  function pluDecompositionInplaceComplexFloat(a, rowPerm) {
    // Inline function 'kotlin.math.min' call
    var a_0 = a.get_shape_iyi9a0_k$()[1];
    var b = a.get_shape_iyi9a0_k$()[0];
    var n1 = Math.min(a_0, b) / 2 | 0;
    var n2 = a.get_shape_iyi9a0_k$()[1] - n1 | 0;
    if (a.get_shape_iyi9a0_k$()[1] === 0 ? true : a.get_shape_iyi9a0_k$()[0] === 0)
      return Unit_getInstance();
    if (a.get_shape_iyi9a0_k$()[0] === 1)
      return Unit_getInstance();
    if (a.get_shape_iyi9a0_k$()[1] === 1) {
      var imax = 0;
      var elemmax = get_0(a, 0, 0);
      var inductionVariable = 1;
      var last = a.get_shape_iyi9a0_k$()[0];
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (get_0(a, i, 0).abs_22cy_k$() > elemmax.abs_22cy_k$()) {
            elemmax = get_0(a, i, 0);
            imax = i;
          }
        }
         while (inductionVariable < last);
      if (!elemmax.equals(Companion_getInstance_2().get_zero_woypkh_k$())) {
        // Inline function 'kotlin.also' call
        var this_0 = get_0(a, imax, 0);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplaceComplexFloat.<anonymous>' call
        set(a, imax, 0, get_0(a, 0, 0));
        set(a, 0, 0, this_0);
        set_0(rowPerm, 0, imax);
        var inductionVariable_0 = 1;
        var last_0 = a.get_shape_iyi9a0_k$()[0];
        if (inductionVariable_0 < last_0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            set(a, i_0, 0, get_0(a, i_0, 0).div_ra8ixu_k$(elemmax));
          }
           while (inductionVariable_0 < last_0);
      }
      return Unit_getInstance();
    }
    var tmp = get_4(a, until(0, a.get_shape_iyi9a0_k$()[0]), until(0, n1));
    var tmp_0 = tmp instanceof NDArray ? tmp : THROW_CCE();
    // Inline function 'kotlin.math.min' call
    var a_1 = a.get_shape_iyi9a0_k$()[0];
    var tmp$ret$2 = Math.min(a_1, n1);
    var tmp_1 = get_3(rowPerm, until(0, tmp$ret$2));
    pluDecompositionInplaceComplexFloat(tmp_0, tmp_1 instanceof NDArray ? tmp_1 : THROW_CCE());
    // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.swapLines' call
    var to2 = a.get_shape_iyi9a0_k$()[1];
    var to1 = rowPerm.get_size_woubt6_k$();
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < to1)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        if (!(get(rowPerm, i_1) === 0)) {
          var inductionVariable_2 = n1;
          if (inductionVariable_2 < to2)
            do {
              var j = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + 1 | 0;
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplaceComplexFloat.<anonymous>' call
              // Inline function 'kotlin.also' call
              var this_1 = get_0(a, i_1 + get(rowPerm, i_1) | 0, j);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplaceComplexFloat.<anonymous>.<anonymous>' call
              set(a, i_1 + get(rowPerm, i_1) | 0, j, get_0(a, i_1, j));
              set(a, i_1, j, this_1);
            }
             while (inductionVariable_2 < to2);
        }
      }
       while (inductionVariable_1 < to1);
    var aSlice = get_4(a, until(0, n1), until(0, n1));
    var tmp_2 = get_4(a, until(0, n1), until(n1, n1 + n2 | 0));
    var x = tmp_2 instanceof NDArray ? tmp_2 : THROW_CCE();
    // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveLowerTriangleSystem' call
    var sizeA = aSlice.get_shape_iyi9a0_k$()[1];
    var sizeX = x.get_shape_iyi9a0_k$()[1];
    var inductionVariable_3 = 0;
    if (inductionVariable_3 < sizeA)
      do {
        var i_2 = inductionVariable_3;
        inductionVariable_3 = inductionVariable_3 + 1 | 0;
        var inductionVariable_4 = i_2 + 1 | 0;
        if (inductionVariable_4 < sizeA)
          do {
            var k = inductionVariable_4;
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            var inductionVariable_5 = 0;
            if (inductionVariable_5 < sizeX)
              do {
                var j_0 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplaceComplexFloat.<anonymous>' call
                set(x, k, j_0, get_0(x, k, j_0).minus_vtej6p_k$(get_0(aSlice, k, i_2).times_c0fmev_k$(get_0(x, i_2, j_0))));
              }
               while (inductionVariable_5 < sizeX);
          }
           while (inductionVariable_4 < sizeA);
      }
       while (inductionVariable_3 < sizeA);
    var update = dotMatrixComplex(get_4(a, until(n1, a.get_shape_iyi9a0_k$()[0]), until(0, n1)), get_4(a, until(0, n1), until(n1, n1 + n2 | 0)));
    var inductionVariable_6 = n1;
    var last_1 = a.get_shape_iyi9a0_k$()[0];
    if (inductionVariable_6 < last_1)
      do {
        var i_3 = inductionVariable_6;
        inductionVariable_6 = inductionVariable_6 + 1 | 0;
        var inductionVariable_7 = n1;
        var last_2 = n1 + n2 | 0;
        if (inductionVariable_7 < last_2)
          do {
            var j_1 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            set(a, i_3, j_1, get_0(a, i_3, j_1).minus_vtej6p_k$(get_0(update, i_3 - n1 | 0, j_1 - n1 | 0)));
          }
           while (inductionVariable_7 < last_2);
      }
       while (inductionVariable_6 < last_1);
    var tmp_3 = get_4(a, until(n1, a.get_shape_iyi9a0_k$()[0]), until(n1, a.get_shape_iyi9a0_k$()[1]));
    var tmp_4 = tmp_3 instanceof NDArray ? tmp_3 : THROW_CCE();
    // Inline function 'kotlin.math.min' call
    var a_2 = a.get_shape_iyi9a0_k$()[0];
    var b_0 = a.get_shape_iyi9a0_k$()[1];
    var tmp$ret$4 = Math.min(a_2, b_0);
    var tmp_5 = get_3(rowPerm, until(n1, tmp$ret$4));
    pluDecompositionInplaceComplexFloat(tmp_4, tmp_5 instanceof NDArray ? tmp_5 : THROW_CCE());
    // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.swapLines' call
    var to1_0 = rowPerm.get_size_woubt6_k$();
    var inductionVariable_8 = n1;
    if (inductionVariable_8 < to1_0)
      do {
        var i_4 = inductionVariable_8;
        inductionVariable_8 = inductionVariable_8 + 1 | 0;
        if (!(get(rowPerm, i_4) === 0)) {
          var inductionVariable_9 = 0;
          if (inductionVariable_9 < n1)
            do {
              var j_2 = inductionVariable_9;
              inductionVariable_9 = inductionVariable_9 + 1 | 0;
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplaceComplexFloat.<anonymous>' call
              // Inline function 'kotlin.also' call
              var this_2 = get_0(a, i_4 + get(rowPerm, i_4) | 0, j_2);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.pluDecompositionInplaceComplexFloat.<anonymous>.<anonymous>' call
              set(a, i_4 + get(rowPerm, i_4) | 0, j_2, get_0(a, i_4, j_2));
              set(a, i_4, j_2, this_2);
            }
             while (inductionVariable_9 < n1);
        }
      }
       while (inductionVariable_8 < to1_0);
  }
  function solveLowerTriangleSystem(sizeA, sizeX, action) {
    var inductionVariable = 0;
    if (inductionVariable < sizeA)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = i + 1 | 0;
        if (inductionVariable_0 < sizeA)
          do {
            var k = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var inductionVariable_1 = 0;
            if (inductionVariable_1 < sizeX)
              do {
                var j = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                action(i, k, j);
              }
               while (inductionVariable_1 < sizeX);
          }
           while (inductionVariable_0 < sizeA);
      }
       while (inductionVariable < sizeA);
  }
  function qrDouble(mat) {
    // Inline function 'org.jetbrains.kotlinx.multik.api.identity' call
    var this_0 = Multik_getInstance();
    var n = mat.get_shape_iyi9a0_k$()[0];
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.Companion.ofKClass' call
    Companion_getInstance();
    var type = PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$();
    var tmp;
    if (type.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp = DataType_ByteDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp = DataType_ShortDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp = DataType_IntDataType_getInstance();
    } else if (type.equals(getKClass(Long))) {
      tmp = DataType_LongDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp = DataType_FloatDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp = DataType_DoubleDataType_getInstance();
    } else if (type.equals(getKClass(ComplexFloat))) {
      tmp = DataType_ComplexFloatDataType_getInstance();
    } else if (type.equals(getKClass(ComplexDouble))) {
      tmp = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, got ' + type.get_simpleName_r6f8py_k$());
    }
    var dtype = tmp;
    var q = identity(this_0, n, dtype);
    var tmp_0 = mat.deepCopy_adwlmp_k$();
    var r = tmp_0 instanceof NDArray ? tmp_0 : THROW_CCE();
    var inductionVariable = 0;
    // Inline function 'kotlin.math.min' call
    var a = mat.get_shape_iyi9a0_k$()[0];
    var b = mat.get_shape_iyi9a0_k$()[1];
    var last = Math.min(a, b);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp_1 = get_4(r, until(i, r.get_shape_iyi9a0_k$()[0]), until(i, r.get_shape_iyi9a0_k$()[1]));
        var tmp1_container = householderTransformDouble(tmp_1 instanceof NDArray ? tmp_1 : THROW_CCE());
        var tau = tmp1_container.component1_7eebsc_k$();
        var v = tmp1_container.component2_7eebsb_k$();
        var tmp_2 = get_4(r, until(i, r.get_shape_iyi9a0_k$()[0]), until(i, r.get_shape_iyi9a0_k$()[1]));
        var appliedR = applyHouseholderDouble(tmp_2 instanceof NDArray ? tmp_2 : THROW_CCE(), tau, v);
        var inductionVariable_0 = i;
        var last_0 = r.get_shape_iyi9a0_k$()[0];
        if (inductionVariable_0 < last_0)
          do {
            var d0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var inductionVariable_1 = i;
            var last_1 = r.get_shape_iyi9a0_k$()[1];
            if (inductionVariable_1 < last_1)
              do {
                var d1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                set(r, d0, d1, get_0(appliedR, d0 - i | 0, d1 - i | 0));
              }
               while (inductionVariable_1 < last_1);
          }
           while (inductionVariable_0 < last_0);
        q = q.transpose_4o7gha_k$(new Int32Array([]));
        var tmp_3 = get_4(q, until(i, q.get_shape_iyi9a0_k$()[0]), until(0, q.get_shape_iyi9a0_k$()[1]));
        var appliedQ = applyHouseholderDouble(tmp_3 instanceof NDArray ? tmp_3 : THROW_CCE(), tau, v);
        var inductionVariable_2 = i;
        var last_2 = q.get_shape_iyi9a0_k$()[0];
        if (inductionVariable_2 < last_2)
          do {
            var d0_0 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var inductionVariable_3 = 0;
            var last_3 = q.get_shape_iyi9a0_k$()[1];
            if (inductionVariable_3 < last_3)
              do {
                var d1_0 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                set(q, d0_0, d1_0, get_0(appliedQ, d0_0 - i | 0, d1_0));
              }
               while (inductionVariable_3 < last_3);
          }
           while (inductionVariable_2 < last_2);
        q = q.transpose_4o7gha_k$(new Int32Array([]));
      }
       while (inductionVariable < last);
    return new Pair(q, r);
  }
  function qrFloat(mat) {
    // Inline function 'org.jetbrains.kotlinx.multik.api.identity' call
    var this_0 = Multik_getInstance();
    var n = mat.get_shape_iyi9a0_k$()[0];
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.Companion.ofKClass' call
    Companion_getInstance();
    var type = PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$();
    var tmp;
    if (type.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp = DataType_ByteDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp = DataType_ShortDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp = DataType_IntDataType_getInstance();
    } else if (type.equals(getKClass(Long))) {
      tmp = DataType_LongDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp = DataType_FloatDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp = DataType_DoubleDataType_getInstance();
    } else if (type.equals(getKClass(ComplexFloat))) {
      tmp = DataType_ComplexFloatDataType_getInstance();
    } else if (type.equals(getKClass(ComplexDouble))) {
      tmp = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, got ' + type.get_simpleName_r6f8py_k$());
    }
    var dtype = tmp;
    var q = identity(this_0, n, dtype);
    var tmp_0 = mat.deepCopy_adwlmp_k$();
    var r = tmp_0 instanceof NDArray ? tmp_0 : THROW_CCE();
    var inductionVariable = 0;
    // Inline function 'kotlin.math.min' call
    var a = mat.get_shape_iyi9a0_k$()[0];
    var b = mat.get_shape_iyi9a0_k$()[1];
    var last = Math.min(a, b);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp_1 = get_4(r, until(i, r.get_shape_iyi9a0_k$()[0]), until(i, r.get_shape_iyi9a0_k$()[1]));
        var tmp1_container = householderTransformFloat(tmp_1 instanceof NDArray ? tmp_1 : THROW_CCE());
        var tau = tmp1_container.component1_7eebsc_k$();
        var v = tmp1_container.component2_7eebsb_k$();
        var tmp_2 = get_4(r, until(i, r.get_shape_iyi9a0_k$()[0]), until(i, r.get_shape_iyi9a0_k$()[1]));
        var appliedR = applyHouseholderFloat(tmp_2 instanceof NDArray ? tmp_2 : THROW_CCE(), tau, v);
        var inductionVariable_0 = i;
        var last_0 = r.get_shape_iyi9a0_k$()[0];
        if (inductionVariable_0 < last_0)
          do {
            var d0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var inductionVariable_1 = i;
            var last_1 = r.get_shape_iyi9a0_k$()[1];
            if (inductionVariable_1 < last_1)
              do {
                var d1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                set(r, d0, d1, get_0(appliedR, d0 - i | 0, d1 - i | 0));
              }
               while (inductionVariable_1 < last_1);
          }
           while (inductionVariable_0 < last_0);
        q = q.transpose_4o7gha_k$(new Int32Array([]));
        var tmp_3 = get_4(q, until(i, q.get_shape_iyi9a0_k$()[0]), until(0, q.get_shape_iyi9a0_k$()[1]));
        var appliedQ = applyHouseholderFloat(tmp_3 instanceof NDArray ? tmp_3 : THROW_CCE(), tau, v);
        var inductionVariable_2 = i;
        var last_2 = q.get_shape_iyi9a0_k$()[0];
        if (inductionVariable_2 < last_2)
          do {
            var d0_0 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var inductionVariable_3 = 0;
            var last_3 = q.get_shape_iyi9a0_k$()[1];
            if (inductionVariable_3 < last_3)
              do {
                var d1_0 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                set(q, d0_0, d1_0, get_0(appliedQ, d0_0 - i | 0, d1_0));
              }
               while (inductionVariable_3 < last_3);
          }
           while (inductionVariable_2 < last_2);
        q = q.transpose_4o7gha_k$(new Int32Array([]));
      }
       while (inductionVariable < last);
    return new Pair(q, r);
  }
  function qrComplexFloat(mat) {
    // Inline function 'org.jetbrains.kotlinx.multik.api.identity' call
    var this_0 = Multik_getInstance();
    var n = mat.get_shape_iyi9a0_k$()[0];
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.Companion.ofKClass' call
    Companion_getInstance();
    var type = getKClass(ComplexFloat);
    var tmp;
    if (type.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp = DataType_ByteDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp = DataType_ShortDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp = DataType_IntDataType_getInstance();
    } else if (type.equals(getKClass(Long))) {
      tmp = DataType_LongDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp = DataType_FloatDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp = DataType_DoubleDataType_getInstance();
    } else if (type.equals(getKClass(ComplexFloat))) {
      tmp = DataType_ComplexFloatDataType_getInstance();
    } else if (type.equals(getKClass(ComplexDouble))) {
      tmp = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, got ' + type.get_simpleName_r6f8py_k$());
    }
    var dtype = tmp;
    var q = identity(this_0, n, dtype);
    var tmp_0 = mat.deepCopy_adwlmp_k$();
    var r = tmp_0 instanceof NDArray ? tmp_0 : THROW_CCE();
    var inductionVariable = 0;
    // Inline function 'kotlin.math.min' call
    var a = mat.get_shape_iyi9a0_k$()[0];
    var b = mat.get_shape_iyi9a0_k$()[1];
    var last = Math.min(a, b);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_container = householderTransformComplexFloat(get_4(r, until(i, r.get_shape_iyi9a0_k$()[0]), until(i, r.get_shape_iyi9a0_k$()[1])));
        var tau = tmp1_container.component1_7eebsc_k$();
        var v = tmp1_container.component2_7eebsb_k$();
        var tmp_1 = get_4(r, until(i, r.get_shape_iyi9a0_k$()[0]), until(i, r.get_shape_iyi9a0_k$()[1]));
        var appliedR = applyHouseholderComplexFloat(tmp_1 instanceof NDArray ? tmp_1 : THROW_CCE(), tau, v);
        var inductionVariable_0 = i;
        var last_0 = r.get_shape_iyi9a0_k$()[0];
        if (inductionVariable_0 < last_0)
          do {
            var d0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var inductionVariable_1 = i;
            var last_1 = r.get_shape_iyi9a0_k$()[1];
            if (inductionVariable_1 < last_1)
              do {
                var d1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                set(r, d0, d1, get_0(appliedR, d0 - i | 0, d1 - i | 0));
              }
               while (inductionVariable_1 < last_1);
          }
           while (inductionVariable_0 < last_0);
        q = q.transpose_4o7gha_k$(new Int32Array([]));
        var inductionVariable_2 = 0;
        var last_2 = q.get_shape_iyi9a0_k$()[0];
        if (inductionVariable_2 < last_2)
          do {
            var i1 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var inductionVariable_3 = 0;
            var last_3 = q.get_shape_iyi9a0_k$()[1];
            if (inductionVariable_3 < last_3)
              do {
                var j1 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                set(q, i1, j1, get_0(q, i1, j1).conjugate_b863jc_k$());
              }
               while (inductionVariable_3 < last_3);
          }
           while (inductionVariable_2 < last_2);
        var tmp_2 = get_4(q, until(i, q.get_shape_iyi9a0_k$()[0]), until(0, q.get_shape_iyi9a0_k$()[1]));
        var appliedQ = applyHouseholderComplexFloat(tmp_2 instanceof NDArray ? tmp_2 : THROW_CCE(), tau, v);
        var inductionVariable_4 = i;
        var last_4 = q.get_shape_iyi9a0_k$()[0];
        if (inductionVariable_4 < last_4)
          do {
            var d0_0 = inductionVariable_4;
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            var inductionVariable_5 = 0;
            var last_5 = q.get_shape_iyi9a0_k$()[1];
            if (inductionVariable_5 < last_5)
              do {
                var d1_0 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                set(q, d0_0, d1_0, get_0(appliedQ, d0_0 - i | 0, d1_0));
              }
               while (inductionVariable_5 < last_5);
          }
           while (inductionVariable_4 < last_4);
        q = q.transpose_4o7gha_k$(new Int32Array([]));
        var inductionVariable_6 = 0;
        var last_6 = q.get_shape_iyi9a0_k$()[0];
        if (inductionVariable_6 < last_6)
          do {
            var i1_0 = inductionVariable_6;
            inductionVariable_6 = inductionVariable_6 + 1 | 0;
            var inductionVariable_7 = 0;
            var last_7 = q.get_shape_iyi9a0_k$()[1];
            if (inductionVariable_7 < last_7)
              do {
                var j1_0 = inductionVariable_7;
                inductionVariable_7 = inductionVariable_7 + 1 | 0;
                set(q, i1_0, j1_0, get_0(q, i1_0, j1_0).conjugate_b863jc_k$());
              }
               while (inductionVariable_7 < last_7);
          }
           while (inductionVariable_6 < last_6);
      }
       while (inductionVariable < last);
    var inductionVariable_8 = 1;
    var last_8 = q.get_shape_iyi9a0_k$()[0];
    if (inductionVariable_8 < last_8)
      do {
        var i_0 = inductionVariable_8;
        inductionVariable_8 = inductionVariable_8 + 1 | 0;
        var inductionVariable_9 = 0;
        if (inductionVariable_9 < i_0)
          do {
            var j = inductionVariable_9;
            inductionVariable_9 = inductionVariable_9 + 1 | 0;
            set(r, i_0, j, Companion_getInstance_2().get_zero_woypkh_k$());
          }
           while (inductionVariable_9 < i_0);
      }
       while (inductionVariable_8 < last_8);
    return new Pair(q, r);
  }
  function qrComplexDouble(mat) {
    // Inline function 'org.jetbrains.kotlinx.multik.api.identity' call
    var this_0 = Multik_getInstance();
    var n = mat.get_shape_iyi9a0_k$()[0];
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.Companion.ofKClass' call
    Companion_getInstance();
    var type = getKClass(ComplexDouble);
    var tmp;
    if (type.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp = DataType_ByteDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp = DataType_ShortDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp = DataType_IntDataType_getInstance();
    } else if (type.equals(getKClass(Long))) {
      tmp = DataType_LongDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp = DataType_FloatDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp = DataType_DoubleDataType_getInstance();
    } else if (type.equals(getKClass(ComplexFloat))) {
      tmp = DataType_ComplexFloatDataType_getInstance();
    } else if (type.equals(getKClass(ComplexDouble))) {
      tmp = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, got ' + type.get_simpleName_r6f8py_k$());
    }
    var dtype = tmp;
    var q = identity(this_0, n, dtype);
    var tmp_0 = mat.deepCopy_adwlmp_k$();
    var r = tmp_0 instanceof NDArray ? tmp_0 : THROW_CCE();
    var inductionVariable = 0;
    // Inline function 'kotlin.math.min' call
    var a = mat.get_shape_iyi9a0_k$()[0];
    var b = mat.get_shape_iyi9a0_k$()[1];
    var last = Math.min(a, b);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp_1 = get_4(r, until(i, r.get_shape_iyi9a0_k$()[0]), until(i, r.get_shape_iyi9a0_k$()[1]));
        var tmp1_container = householderTransformComplexDouble(tmp_1 instanceof NDArray ? tmp_1 : THROW_CCE());
        var tau = tmp1_container.component1_7eebsc_k$();
        var v = tmp1_container.component2_7eebsb_k$();
        var tmp_2 = get_4(r, until(i, r.get_shape_iyi9a0_k$()[0]), until(i, r.get_shape_iyi9a0_k$()[1]));
        var appliedR = applyHouseholderComplexDouble(tmp_2 instanceof NDArray ? tmp_2 : THROW_CCE(), tau, v);
        var inductionVariable_0 = i;
        var last_0 = r.get_shape_iyi9a0_k$()[0];
        if (inductionVariable_0 < last_0)
          do {
            var d0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var inductionVariable_1 = i;
            var last_1 = r.get_shape_iyi9a0_k$()[1];
            if (inductionVariable_1 < last_1)
              do {
                var d1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                set(r, d0, d1, get_0(appliedR, d0 - i | 0, d1 - i | 0));
              }
               while (inductionVariable_1 < last_1);
          }
           while (inductionVariable_0 < last_0);
        q = q.transpose_4o7gha_k$(new Int32Array([]));
        var inductionVariable_2 = 0;
        var last_2 = q.get_shape_iyi9a0_k$()[0];
        if (inductionVariable_2 < last_2)
          do {
            var i1 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            var inductionVariable_3 = 0;
            var last_3 = q.get_shape_iyi9a0_k$()[1];
            if (inductionVariable_3 < last_3)
              do {
                var j1 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                set(q, i1, j1, get_0(q, i1, j1).conjugate_b863jc_k$());
              }
               while (inductionVariable_3 < last_3);
          }
           while (inductionVariable_2 < last_2);
        var tmp_3 = get_4(q, until(i, q.get_shape_iyi9a0_k$()[0]), until(0, q.get_shape_iyi9a0_k$()[1]));
        var appliedQ = applyHouseholderComplexDouble(tmp_3 instanceof NDArray ? tmp_3 : THROW_CCE(), tau, v);
        var inductionVariable_4 = i;
        var last_4 = q.get_shape_iyi9a0_k$()[0];
        if (inductionVariable_4 < last_4)
          do {
            var d0_0 = inductionVariable_4;
            inductionVariable_4 = inductionVariable_4 + 1 | 0;
            var inductionVariable_5 = 0;
            var last_5 = q.get_shape_iyi9a0_k$()[1];
            if (inductionVariable_5 < last_5)
              do {
                var d1_0 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                set(q, d0_0, d1_0, get_0(appliedQ, d0_0 - i | 0, d1_0));
              }
               while (inductionVariable_5 < last_5);
          }
           while (inductionVariable_4 < last_4);
        q = q.transpose_4o7gha_k$(new Int32Array([]));
        var inductionVariable_6 = 0;
        var last_6 = q.get_shape_iyi9a0_k$()[0];
        if (inductionVariable_6 < last_6)
          do {
            var i1_0 = inductionVariable_6;
            inductionVariable_6 = inductionVariable_6 + 1 | 0;
            var inductionVariable_7 = 0;
            var last_7 = q.get_shape_iyi9a0_k$()[1];
            if (inductionVariable_7 < last_7)
              do {
                var j1_0 = inductionVariable_7;
                inductionVariable_7 = inductionVariable_7 + 1 | 0;
                set(q, i1_0, j1_0, get_0(q, i1_0, j1_0).conjugate_b863jc_k$());
              }
               while (inductionVariable_7 < last_7);
          }
           while (inductionVariable_6 < last_6);
      }
       while (inductionVariable < last);
    var inductionVariable_8 = 1;
    var last_8 = q.get_shape_iyi9a0_k$()[0];
    if (inductionVariable_8 < last_8)
      do {
        var i_0 = inductionVariable_8;
        inductionVariable_8 = inductionVariable_8 + 1 | 0;
        var inductionVariable_9 = 0;
        if (inductionVariable_9 < i_0)
          do {
            var j = inductionVariable_9;
            inductionVariable_9 = inductionVariable_9 + 1 | 0;
            set(r, i_0, j, Companion_getInstance_3().get_zero_woypkh_k$());
          }
           while (inductionVariable_9 < i_0);
      }
       while (inductionVariable_8 < last_8);
    return new Pair(q, r);
  }
  function householderTransformDouble(x) {
    var alpha = get_0(x, 0, 0);
    var xnorm = 0.0;
    var inductionVariable = 1;
    var last = x.get_shape_iyi9a0_k$()[0];
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        xnorm = xnorm + get_0(x, i, 0) * get_0(x, i, 0);
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.math.sqrt' call
    var x_0 = xnorm;
    xnorm = Math.sqrt(x_0);
    // Inline function 'org.jetbrains.kotlinx.multik.api.zeros' call
    var this_0 = Multik_getInstance();
    var dim1 = x.get_shape_iyi9a0_k$()[0];
    // Inline function 'kotlin.intArrayOf' call
    var tmp = new Int32Array([dim1]);
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.Companion.ofKClass' call
    Companion_getInstance();
    var type = PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$();
    var tmp_0;
    if (type.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp_0 = DataType_ByteDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp_0 = DataType_ShortDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp_0 = DataType_IntDataType_getInstance();
    } else if (type.equals(getKClass(Long))) {
      tmp_0 = DataType_LongDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp_0 = DataType_FloatDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp_0 = DataType_DoubleDataType_getInstance();
    } else if (type.equals(getKClass(ComplexFloat))) {
      tmp_0 = DataType_ComplexFloatDataType_getInstance();
    } else if (type.equals(getKClass(ComplexDouble))) {
      tmp_0 = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, got ' + type.get_simpleName_r6f8py_k$());
    }
    var tmp$ret$2 = tmp_0;
    var v = zeros(this_0, tmp, tmp$ret$2);
    set_0(v, 0, 1.0);
    if (xnorm === 0.0) {
      return new Pair(0.0, v);
    }
    var tmp_1 = -(alpha >= 0.0 ? 1 : -1) | 0;
    // Inline function 'kotlin.math.hypot' call
    var y = xnorm;
    var beta = tmp_1 * hypot(alpha, y);
    var tau = (beta - alpha) / beta;
    var alphaMinusBeta = alpha - beta;
    var inductionVariable_0 = 1;
    var last_0 = v.get_size_woubt6_k$();
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        set_0(v, i_0, get_0(x, i_0, 0) / alphaMinusBeta);
      }
       while (inductionVariable_0 < last_0);
    return new Pair(tau, v);
  }
  function applyHouseholderDouble(x, tau, v) {
    var applied = x.deepCopy_adwlmp_k$();
    var inductionVariable = 0;
    var last = x.get_shape_iyi9a0_k$()[1];
    if (inductionVariable < last)
      do {
        var columnNumber = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var scal = 0.0;
        var inductionVariable_0 = 0;
        var last_0 = v.get_size_woubt6_k$();
        if (inductionVariable_0 < last_0)
          do {
            var i = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            scal = scal + get(v, i) * get_0(x, i, columnNumber);
          }
           while (inductionVariable_0 < last_0);
        var inductionVariable_1 = 0;
        var last_1 = v.get_size_woubt6_k$();
        if (inductionVariable_1 < last_1)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            set(applied, i_0, columnNumber, get_0(applied, i_0, columnNumber) - tau * scal * get(v, i_0));
          }
           while (inductionVariable_1 < last_1);
      }
       while (inductionVariable < last);
    return applied;
  }
  function householderTransformFloat(x) {
    var alpha = get_0(x, 0, 0);
    var xnorm = 0.0;
    var inductionVariable = 1;
    var last = x.get_shape_iyi9a0_k$()[0];
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        xnorm = xnorm + get_0(x, i, 0) * get_0(x, i, 0);
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.math.sqrt' call
    var x_0 = xnorm;
    xnorm = Math.sqrt(x_0);
    // Inline function 'org.jetbrains.kotlinx.multik.api.zeros' call
    var this_0 = Multik_getInstance();
    var dim1 = x.get_shape_iyi9a0_k$()[0];
    // Inline function 'kotlin.intArrayOf' call
    var tmp = new Int32Array([dim1]);
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.Companion.ofKClass' call
    Companion_getInstance();
    var type = PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$();
    var tmp_0;
    if (type.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp_0 = DataType_ByteDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp_0 = DataType_ShortDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp_0 = DataType_IntDataType_getInstance();
    } else if (type.equals(getKClass(Long))) {
      tmp_0 = DataType_LongDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp_0 = DataType_FloatDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp_0 = DataType_DoubleDataType_getInstance();
    } else if (type.equals(getKClass(ComplexFloat))) {
      tmp_0 = DataType_ComplexFloatDataType_getInstance();
    } else if (type.equals(getKClass(ComplexDouble))) {
      tmp_0 = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, got ' + type.get_simpleName_r6f8py_k$());
    }
    var tmp$ret$2 = tmp_0;
    var v = zeros(this_0, tmp, tmp$ret$2);
    set_0(v, 0, 1.0);
    if (xnorm === 0.0) {
      return new Pair(0.0, v);
    }
    var tmp_1 = -(alpha >= 0.0 ? 1 : -1) | 0;
    // Inline function 'kotlin.math.hypot' call
    var y = xnorm;
    var beta = tmp_1 * hypot(alpha, y);
    var tau = (beta - alpha) / beta;
    var alphaMinusBeta = alpha - beta;
    var inductionVariable_0 = 1;
    var last_0 = v.get_size_woubt6_k$();
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        set_0(v, i_0, get_0(x, i_0, 0) / alphaMinusBeta);
      }
       while (inductionVariable_0 < last_0);
    return new Pair(tau, v);
  }
  function applyHouseholderFloat(x, tau, v) {
    var applied = x.deepCopy_adwlmp_k$();
    var inductionVariable = 0;
    var last = x.get_shape_iyi9a0_k$()[1];
    if (inductionVariable < last)
      do {
        var columnNumber = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var scal = 0.0;
        var inductionVariable_0 = 0;
        var last_0 = v.get_size_woubt6_k$();
        if (inductionVariable_0 < last_0)
          do {
            var i = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            scal = scal + get(v, i) * get_0(x, i, columnNumber);
          }
           while (inductionVariable_0 < last_0);
        var inductionVariable_1 = 0;
        var last_1 = v.get_size_woubt6_k$();
        if (inductionVariable_1 < last_1)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            set(applied, i_0, columnNumber, get_0(applied, i_0, columnNumber) - tau * scal * get(v, i_0));
          }
           while (inductionVariable_1 < last_1);
      }
       while (inductionVariable < last);
    return applied;
  }
  function householderTransformComplexFloat(x) {
    var alpha = get_0(x, 0, 0);
    var xnorm = 0.0;
    var inductionVariable = 1;
    var last = x.get_shape_iyi9a0_k$()[0];
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        xnorm = xnorm + get_0(x, i, 0).times_c0fmev_k$(get_0(x, i, 0).conjugate_b863jc_k$()).abs_22cy_k$();
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.math.sqrt' call
    var x_0 = xnorm;
    xnorm = Math.sqrt(x_0);
    // Inline function 'org.jetbrains.kotlinx.multik.api.zeros' call
    var this_0 = Multik_getInstance();
    var dim1 = x.get_shape_iyi9a0_k$()[0];
    // Inline function 'kotlin.intArrayOf' call
    var tmp = new Int32Array([dim1]);
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.Companion.ofKClass' call
    Companion_getInstance();
    var type = getKClass(ComplexFloat);
    var tmp_0;
    if (type.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp_0 = DataType_ByteDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp_0 = DataType_ShortDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp_0 = DataType_IntDataType_getInstance();
    } else if (type.equals(getKClass(Long))) {
      tmp_0 = DataType_LongDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp_0 = DataType_FloatDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp_0 = DataType_DoubleDataType_getInstance();
    } else if (type.equals(getKClass(ComplexFloat))) {
      tmp_0 = DataType_ComplexFloatDataType_getInstance();
    } else if (type.equals(getKClass(ComplexDouble))) {
      tmp_0 = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, got ' + type.get_simpleName_r6f8py_k$());
    }
    var tmp$ret$2 = tmp_0;
    var v = zeros(this_0, tmp, tmp$ret$2);
    set_0(v, 0, Companion_getInstance_2().get_one_18iz2b_k$());
    if (xnorm === 0.0) {
      return new Pair(Companion_getInstance_2().get_zero_woypkh_k$(), v);
    }
    var tmp_1 = -(alpha.get_re_kntnpg_k$() >= 0.0 ? 1 : -1) | 0;
    // Inline function 'kotlin.math.sqrt' call
    var x_1 = alpha.get_re_kntnpg_k$() * alpha.get_re_kntnpg_k$() + alpha.get_im_kntnwz_k$() * alpha.get_im_kntnwz_k$() + xnorm * xnorm;
    var beta = tmp_1 * Math.sqrt(x_1);
    var tau = toComplexFloat(beta).minus_vtej6p_k$(alpha).div_ra8ixu_k$(toComplexFloat(beta));
    var coeff = Companion_getInstance_2().get_one_18iz2b_k$().div_ra8ixu_k$(alpha.minus_brujug_k$(beta));
    var inductionVariable_0 = 1;
    var last_0 = v.get_size_woubt6_k$();
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        set_0(v, i_0, get_0(x, i_0, 0).times_c0fmev_k$(coeff));
      }
       while (inductionVariable_0 < last_0);
    return new Pair(tau.conjugate_b863jc_k$(), v);
  }
  function applyHouseholderComplexFloat(x, tau, v) {
    var tmp = x.deepCopy_adwlmp_k$();
    var applied = tmp instanceof NDArray ? tmp : THROW_CCE();
    var inductionVariable = 0;
    var last = x.get_shape_iyi9a0_k$()[1];
    if (inductionVariable < last)
      do {
        var columnNumber = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var scal = Companion_getInstance_2().get_zero_woypkh_k$();
        var inductionVariable_0 = 0;
        var last_0 = v.get_size_woubt6_k$();
        if (inductionVariable_0 < last_0)
          do {
            var i = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            scal = scal.plus_8lqpe3_k$(get(v, i).conjugate_b863jc_k$().times_c0fmev_k$(get_0(x, i, columnNumber)));
          }
           while (inductionVariable_0 < last_0);
        var inductionVariable_1 = 0;
        var last_1 = v.get_size_woubt6_k$();
        if (inductionVariable_1 < last_1)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            set(applied, i_0, columnNumber, get_0(applied, i_0, columnNumber).minus_vtej6p_k$(tau.times_c0fmev_k$(scal).times_c0fmev_k$(get(v, i_0))));
          }
           while (inductionVariable_1 < last_1);
      }
       while (inductionVariable < last);
    return applied;
  }
  function householderTransformComplexDouble(x) {
    var alpha = get_0(x, 0, 0);
    var xnorm = 0.0;
    var inductionVariable = 1;
    var last = x.get_shape_iyi9a0_k$()[0];
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        xnorm = xnorm + get_0(x, i, 0).times_czwimy_k$(get_0(x, i, 0).conjugate_b863jc_k$()).abs_22cy_k$();
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.math.sqrt' call
    var x_0 = xnorm;
    xnorm = Math.sqrt(x_0);
    // Inline function 'org.jetbrains.kotlinx.multik.api.zeros' call
    var this_0 = Multik_getInstance();
    var dim1 = x.get_shape_iyi9a0_k$()[0];
    // Inline function 'kotlin.intArrayOf' call
    var tmp = new Int32Array([dim1]);
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.Companion.ofKClass' call
    Companion_getInstance();
    var type = getKClass(ComplexDouble);
    var tmp_0;
    if (type.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp_0 = DataType_ByteDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp_0 = DataType_ShortDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp_0 = DataType_IntDataType_getInstance();
    } else if (type.equals(getKClass(Long))) {
      tmp_0 = DataType_LongDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp_0 = DataType_FloatDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp_0 = DataType_DoubleDataType_getInstance();
    } else if (type.equals(getKClass(ComplexFloat))) {
      tmp_0 = DataType_ComplexFloatDataType_getInstance();
    } else if (type.equals(getKClass(ComplexDouble))) {
      tmp_0 = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, got ' + type.get_simpleName_r6f8py_k$());
    }
    var tmp$ret$2 = tmp_0;
    var v = zeros(this_0, tmp, tmp$ret$2);
    set_0(v, 0, Companion_getInstance_3().get_one_18iz2b_k$());
    if (xnorm === 0.0) {
      return new Pair(Companion_getInstance_3().get_zero_woypkh_k$(), v);
    }
    var tmp_1 = -(alpha.get_re_kntnpg_k$() >= 0.0 ? 1 : -1) | 0;
    // Inline function 'kotlin.math.sqrt' call
    var x_1 = alpha.get_re_kntnpg_k$() * alpha.get_re_kntnpg_k$() + alpha.get_im_kntnwz_k$() * alpha.get_im_kntnwz_k$() + xnorm * xnorm;
    var beta = tmp_1 * Math.sqrt(x_1);
    var tau = toComplexDouble(beta).minus_wp99j0_k$(alpha).div_y9b5uj_k$(toComplexDouble(beta));
    var coeff = Companion_getInstance_3().get_one_18iz2b_k$().div_y9b5uj_k$(alpha.minus_ur3tau_k$(beta));
    var inductionVariable_0 = 1;
    var last_0 = v.get_size_woubt6_k$();
    if (inductionVariable_0 < last_0)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        set_0(v, i_0, get_0(x, i_0, 0).times_czwimy_k$(coeff));
      }
       while (inductionVariable_0 < last_0);
    return new Pair(tau.conjugate_b863jc_k$(), v);
  }
  function applyHouseholderComplexDouble(x, tau, v) {
    var tmp = x.deepCopy_adwlmp_k$();
    var applied = tmp instanceof NDArray ? tmp : THROW_CCE();
    var inductionVariable = 0;
    var last = x.get_shape_iyi9a0_k$()[1];
    if (inductionVariable < last)
      do {
        var columnNumber = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var scal = Companion_getInstance_3().get_zero_woypkh_k$();
        var inductionVariable_0 = 0;
        var last_0 = v.get_size_woubt6_k$();
        if (inductionVariable_0 < last_0)
          do {
            var i = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            scal = scal.plus_nev5n6_k$(get(v, i).conjugate_b863jc_k$().times_czwimy_k$(get_0(x, i, columnNumber)));
          }
           while (inductionVariable_0 < last_0);
        var inductionVariable_1 = 0;
        var last_1 = v.get_size_woubt6_k$();
        if (inductionVariable_1 < last_1)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            set(applied, i_0, columnNumber, get_0(applied, i_0, columnNumber).minus_wp99j0_k$(tau.times_czwimy_k$(scal).times_czwimy_k$(get(v, i_0))));
          }
           while (inductionVariable_1 < last_1);
      }
       while (inductionVariable < last);
    return applied;
  }
  function solveDouble(a, b, singularityErrorLevel) {
    singularityErrorLevel = singularityErrorLevel === VOID ? 1.0E-7 : singularityErrorLevel;
    var tmp0_container = pluCompressed(a);
    var P = tmp0_container.component1_7eebsc_k$();
    var L = tmp0_container.component2_7eebsb_k$();
    var U = tmp0_container.component3_7eebsa_k$();
    var tmp = b.deepCopy_adwlmp_k$();
    var _b = tmp instanceof NDArray ? tmp : THROW_CCE();
    // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.swapLines' call
    var to2 = _b.get_shape_iyi9a0_k$()[1];
    var to1 = P.get_size_woubt6_k$();
    var inductionVariable = 0;
    if (inductionVariable < to1)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(get(P, i) === 0)) {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < to2)
            do {
              var j = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveDouble.<anonymous>' call
              // Inline function 'kotlin.also' call
              var this_0 = get_0(_b, i + get(P, i) | 0, j);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveDouble.<anonymous>.<anonymous>' call
              set(_b, i + get(P, i) | 0, j, get_0(_b, i, j));
              set(_b, i, j, this_0);
            }
             while (inductionVariable_0 < to2);
        }
      }
       while (inductionVariable < to1);
    var inductionVariable_1 = 0;
    var last = U.get_shape_iyi9a0_k$()[0];
    if (inductionVariable_1 < last)
      do {
        var i_0 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        // Inline function 'kotlin.math.abs' call
        var x = get_0(U, i_0, i_0);
        if (Math.abs(x) < singularityErrorLevel) {
          throw ArithmeticException_init_$Create$('Matrix a is singular or almost singular');
        }
      }
       while (inductionVariable_1 < last);
    return solveTriangle(U, solveTriangle(L, _b), false);
  }
  function solveFloat(a, b, singularityErrorLevel) {
    singularityErrorLevel = singularityErrorLevel === VOID ? 1.0E-6 : singularityErrorLevel;
    var tmp0_container = pluCompressed(a);
    var P = tmp0_container.component1_7eebsc_k$();
    var L = tmp0_container.component2_7eebsb_k$();
    var U = tmp0_container.component3_7eebsa_k$();
    var tmp = b.deepCopy_adwlmp_k$();
    var _b = tmp instanceof NDArray ? tmp : THROW_CCE();
    // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.swapLines' call
    var to2 = _b.get_shape_iyi9a0_k$()[1];
    var to1 = P.get_size_woubt6_k$();
    var inductionVariable = 0;
    if (inductionVariable < to1)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(get(P, i) === 0)) {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < to2)
            do {
              var j = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveFloat.<anonymous>' call
              // Inline function 'kotlin.also' call
              var this_0 = get_0(_b, i + get(P, i) | 0, j);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveFloat.<anonymous>.<anonymous>' call
              set(_b, i + get(P, i) | 0, j, get_0(_b, i, j));
              set(_b, i, j, this_0);
            }
             while (inductionVariable_0 < to2);
        }
      }
       while (inductionVariable < to1);
    var inductionVariable_1 = 0;
    var last = U.get_shape_iyi9a0_k$()[0];
    if (inductionVariable_1 < last)
      do {
        var i_0 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        // Inline function 'kotlin.math.abs' call
        var x = get_0(U, i_0, i_0);
        if (Math.abs(x) < singularityErrorLevel) {
          throw ArithmeticException_init_$Create$('Matrix a is singular or almost singular');
        }
      }
       while (inductionVariable_1 < last);
    return solveTriangleF(U, solveTriangleF(L, _b), false);
  }
  function solveComplexDouble(a, b, singularityErrorLevel) {
    singularityErrorLevel = singularityErrorLevel === VOID ? 1.0E-7 : singularityErrorLevel;
    var tmp0_container = pluCompressed(a);
    var P = tmp0_container.component1_7eebsc_k$();
    var L = tmp0_container.component2_7eebsb_k$();
    var U = tmp0_container.component3_7eebsa_k$();
    var tmp = b.deepCopy_adwlmp_k$();
    var _b = tmp instanceof NDArray ? tmp : THROW_CCE();
    // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.swapLines' call
    var to2 = _b.get_shape_iyi9a0_k$()[1];
    var to1 = P.get_size_woubt6_k$();
    var inductionVariable = 0;
    if (inductionVariable < to1)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(get(P, i) === 0)) {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < to2)
            do {
              var j = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveComplexDouble.<anonymous>' call
              // Inline function 'kotlin.also' call
              var this_0 = get_0(_b, i + get(P, i) | 0, j);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveComplexDouble.<anonymous>.<anonymous>' call
              set(_b, i + get(P, i) | 0, j, get_0(_b, i, j));
              set(_b, i, j, this_0);
            }
             while (inductionVariable_0 < to2);
        }
      }
       while (inductionVariable < to1);
    var inductionVariable_1 = 0;
    var last = U.get_shape_iyi9a0_k$()[0];
    if (inductionVariable_1 < last)
      do {
        var i_0 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        if (get_0(U, i_0, i_0).abs_22cy_k$() < singularityErrorLevel) {
          throw ArithmeticException_init_$Create$('Matrix a is singular or almost singular');
        }
      }
       while (inductionVariable_1 < last);
    return solveTriangleComplexDouble(U, solveTriangleComplexDouble(L, _b), false);
  }
  function solveComplexFloat(a, b, singularityErrorLevel) {
    singularityErrorLevel = singularityErrorLevel === VOID ? 1.0E-6 : singularityErrorLevel;
    var tmp0_container = pluCompressed(a);
    var P = tmp0_container.component1_7eebsc_k$();
    var L = tmp0_container.component2_7eebsb_k$();
    var U = tmp0_container.component3_7eebsa_k$();
    var tmp = b.deepCopy_adwlmp_k$();
    var _b = tmp instanceof NDArray ? tmp : THROW_CCE();
    // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.swapLines' call
    var to2 = _b.get_shape_iyi9a0_k$()[1];
    var to1 = P.get_size_woubt6_k$();
    var inductionVariable = 0;
    if (inductionVariable < to1)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(get(P, i) === 0)) {
          var inductionVariable_0 = 0;
          if (inductionVariable_0 < to2)
            do {
              var j = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveComplexFloat.<anonymous>' call
              // Inline function 'kotlin.also' call
              var this_0 = get_0(_b, i + get(P, i) | 0, j);
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveComplexFloat.<anonymous>.<anonymous>' call
              set(_b, i + get(P, i) | 0, j, get_0(_b, i, j));
              set(_b, i, j, this_0);
            }
             while (inductionVariable_0 < to2);
        }
      }
       while (inductionVariable < to1);
    var inductionVariable_1 = 0;
    var last = U.get_shape_iyi9a0_k$()[0];
    if (inductionVariable_1 < last)
      do {
        var i_0 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        if (get_0(U, i_0, i_0).abs_22cy_k$() < singularityErrorLevel) {
          throw ArithmeticException_init_$Create$('Matrix a is singular or almost singular');
        }
      }
       while (inductionVariable_1 < last);
    return solveTriangleComplexFloat(U, solveTriangleComplexFloat(L, _b), false);
  }
  function solveTriangle(a, b, isLowerTriangle) {
    isLowerTriangle = isLowerTriangle === VOID ? true : isLowerTriangle;
    // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveTriangleleCommon' call
    var tmp = b.deepCopy_adwlmp_k$();
    var x = tmp instanceof NDArray ? tmp : THROW_CCE();
    var inductionVariable = 0;
    var last = x.get_shape_iyi9a0_k$()[0];
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        var last_0 = x.get_shape_iyi9a0_k$()[1];
        if (inductionVariable_0 < last_0)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveTriangle.<anonymous>' call
            var tmp$ret$0 = get_0(x, i, j) / get_0(a, i, i);
            set(x, i, j, tmp$ret$0);
          }
           while (inductionVariable_0 < last_0);
      }
       while (inductionVariable < last);
    if (isLowerTriangle) {
      var inductionVariable_1 = 0;
      var last_1 = x.get_shape_iyi9a0_k$()[0];
      if (inductionVariable_1 < last_1)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var inductionVariable_2 = i_0 + 1 | 0;
          var last_2 = x.get_shape_iyi9a0_k$()[0];
          if (inductionVariable_2 < last_2)
            do {
              var k = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + 1 | 0;
              var inductionVariable_3 = 0;
              var last_3 = x.get_shape_iyi9a0_k$()[1];
              if (inductionVariable_3 < last_3)
                do {
                  var j_0 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveTriangle.<anonymous>' call
                  var tmp$ret$1 = get_0(x, k, j_0) - get_0(a, k, i_0) * get_0(x, i_0, j_0) / get_0(a, k, k);
                  set(x, k, j_0, tmp$ret$1);
                }
                 while (inductionVariable_3 < last_3);
            }
             while (inductionVariable_2 < last_2);
        }
         while (inductionVariable_1 < last_1);
    } else {
      var inductionVariable_4 = x.get_shape_iyi9a0_k$()[0] - 1 | 0;
      if (0 <= inductionVariable_4)
        do {
          var i_1 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + -1 | 0;
          var inductionVariable_5 = i_1 - 1 | 0;
          if (0 <= inductionVariable_5)
            do {
              var k_0 = inductionVariable_5;
              inductionVariable_5 = inductionVariable_5 + -1 | 0;
              var inductionVariable_6 = 0;
              var last_4 = x.get_shape_iyi9a0_k$()[1];
              if (inductionVariable_6 < last_4)
                do {
                  var j_1 = inductionVariable_6;
                  inductionVariable_6 = inductionVariable_6 + 1 | 0;
                  // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveTriangle.<anonymous>' call
                  var tmp$ret$2 = get_0(x, k_0, j_1) - get_0(a, k_0, i_1) * get_0(x, i_1, j_1) / get_0(a, k_0, k_0);
                  set(x, k_0, j_1, tmp$ret$2);
                }
                 while (inductionVariable_6 < last_4);
            }
             while (0 <= inductionVariable_5);
        }
         while (0 <= inductionVariable_4);
    }
    return x;
  }
  function solveTriangleF(a, b, isLowerTriangle) {
    isLowerTriangle = isLowerTriangle === VOID ? true : isLowerTriangle;
    // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveTriangleleCommon' call
    var tmp = b.deepCopy_adwlmp_k$();
    var x = tmp instanceof NDArray ? tmp : THROW_CCE();
    var inductionVariable = 0;
    var last = x.get_shape_iyi9a0_k$()[0];
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        var last_0 = x.get_shape_iyi9a0_k$()[1];
        if (inductionVariable_0 < last_0)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveTriangleF.<anonymous>' call
            var tmp$ret$0 = get_0(x, i, j) / get_0(a, i, i);
            set(x, i, j, tmp$ret$0);
          }
           while (inductionVariable_0 < last_0);
      }
       while (inductionVariable < last);
    if (isLowerTriangle) {
      var inductionVariable_1 = 0;
      var last_1 = x.get_shape_iyi9a0_k$()[0];
      if (inductionVariable_1 < last_1)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var inductionVariable_2 = i_0 + 1 | 0;
          var last_2 = x.get_shape_iyi9a0_k$()[0];
          if (inductionVariable_2 < last_2)
            do {
              var k = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + 1 | 0;
              var inductionVariable_3 = 0;
              var last_3 = x.get_shape_iyi9a0_k$()[1];
              if (inductionVariable_3 < last_3)
                do {
                  var j_0 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveTriangleF.<anonymous>' call
                  var tmp$ret$1 = get_0(x, k, j_0) - get_0(a, k, i_0) * get_0(x, i_0, j_0) / get_0(a, k, k);
                  set(x, k, j_0, tmp$ret$1);
                }
                 while (inductionVariable_3 < last_3);
            }
             while (inductionVariable_2 < last_2);
        }
         while (inductionVariable_1 < last_1);
    } else {
      var inductionVariable_4 = x.get_shape_iyi9a0_k$()[0] - 1 | 0;
      if (0 <= inductionVariable_4)
        do {
          var i_1 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + -1 | 0;
          var inductionVariable_5 = i_1 - 1 | 0;
          if (0 <= inductionVariable_5)
            do {
              var k_0 = inductionVariable_5;
              inductionVariable_5 = inductionVariable_5 + -1 | 0;
              var inductionVariable_6 = 0;
              var last_4 = x.get_shape_iyi9a0_k$()[1];
              if (inductionVariable_6 < last_4)
                do {
                  var j_1 = inductionVariable_6;
                  inductionVariable_6 = inductionVariable_6 + 1 | 0;
                  // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveTriangleF.<anonymous>' call
                  var tmp$ret$2 = get_0(x, k_0, j_1) - get_0(a, k_0, i_1) * get_0(x, i_1, j_1) / get_0(a, k_0, k_0);
                  set(x, k_0, j_1, tmp$ret$2);
                }
                 while (inductionVariable_6 < last_4);
            }
             while (0 <= inductionVariable_5);
        }
         while (0 <= inductionVariable_4);
    }
    return x;
  }
  function solveTriangleComplexDouble(a, b, isLowerTriangle) {
    isLowerTriangle = isLowerTriangle === VOID ? true : isLowerTriangle;
    // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveTriangleleCommon' call
    var tmp = b.deepCopy_adwlmp_k$();
    var x = tmp instanceof NDArray ? tmp : THROW_CCE();
    var inductionVariable = 0;
    var last = x.get_shape_iyi9a0_k$()[0];
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        var last_0 = x.get_shape_iyi9a0_k$()[1];
        if (inductionVariable_0 < last_0)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveTriangleComplexDouble.<anonymous>' call
            var cf1 = get_0(x, i, j);
            var cf2 = get_0(a, i, i);
            var tmp$ret$0 = cf1.div_y9b5uj_k$(cf2);
            set(x, i, j, tmp$ret$0);
          }
           while (inductionVariable_0 < last_0);
      }
       while (inductionVariable < last);
    if (isLowerTriangle) {
      var inductionVariable_1 = 0;
      var last_1 = x.get_shape_iyi9a0_k$()[0];
      if (inductionVariable_1 < last_1)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var inductionVariable_2 = i_0 + 1 | 0;
          var last_2 = x.get_shape_iyi9a0_k$()[0];
          if (inductionVariable_2 < last_2)
            do {
              var k = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + 1 | 0;
              var inductionVariable_3 = 0;
              var last_3 = x.get_shape_iyi9a0_k$()[1];
              if (inductionVariable_3 < last_3)
                do {
                  var j_0 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveTriangleComplexDouble.<anonymous>' call
                  var cf1_0 = get_0(x, k, j_0);
                  var cf2_0 = get_0(a, k, i_0);
                  var cf3 = get_0(x, i_0, j_0);
                  var cf4 = get_0(a, k, k);
                  var tmp$ret$1 = cf1_0.minus_wp99j0_k$(cf2_0.times_czwimy_k$(cf3).div_y9b5uj_k$(cf4));
                  set(x, k, j_0, tmp$ret$1);
                }
                 while (inductionVariable_3 < last_3);
            }
             while (inductionVariable_2 < last_2);
        }
         while (inductionVariable_1 < last_1);
    } else {
      var inductionVariable_4 = x.get_shape_iyi9a0_k$()[0] - 1 | 0;
      if (0 <= inductionVariable_4)
        do {
          var i_1 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + -1 | 0;
          var inductionVariable_5 = i_1 - 1 | 0;
          if (0 <= inductionVariable_5)
            do {
              var k_0 = inductionVariable_5;
              inductionVariable_5 = inductionVariable_5 + -1 | 0;
              var inductionVariable_6 = 0;
              var last_4 = x.get_shape_iyi9a0_k$()[1];
              if (inductionVariable_6 < last_4)
                do {
                  var j_1 = inductionVariable_6;
                  inductionVariable_6 = inductionVariable_6 + 1 | 0;
                  // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveTriangleComplexDouble.<anonymous>' call
                  var cf1_1 = get_0(x, k_0, j_1);
                  var cf2_1 = get_0(a, k_0, i_1);
                  var cf3_0 = get_0(x, i_1, j_1);
                  var cf4_0 = get_0(a, k_0, k_0);
                  var tmp$ret$2 = cf1_1.minus_wp99j0_k$(cf2_1.times_czwimy_k$(cf3_0).div_y9b5uj_k$(cf4_0));
                  set(x, k_0, j_1, tmp$ret$2);
                }
                 while (inductionVariable_6 < last_4);
            }
             while (0 <= inductionVariable_5);
        }
         while (0 <= inductionVariable_4);
    }
    return x;
  }
  function solveTriangleComplexFloat(a, b, isLowerTriangle) {
    isLowerTriangle = isLowerTriangle === VOID ? true : isLowerTriangle;
    // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveTriangleleCommon' call
    var tmp = b.deepCopy_adwlmp_k$();
    var x = tmp instanceof NDArray ? tmp : THROW_CCE();
    var inductionVariable = 0;
    var last = x.get_shape_iyi9a0_k$()[0];
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        var last_0 = x.get_shape_iyi9a0_k$()[1];
        if (inductionVariable_0 < last_0)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveTriangleComplexFloat.<anonymous>' call
            var cf1 = get_0(x, i, j);
            var cf2 = get_0(a, i, i);
            var tmp$ret$0 = cf1.div_ra8ixu_k$(cf2);
            set(x, i, j, tmp$ret$0);
          }
           while (inductionVariable_0 < last_0);
      }
       while (inductionVariable < last);
    if (isLowerTriangle) {
      var inductionVariable_1 = 0;
      var last_1 = x.get_shape_iyi9a0_k$()[0];
      if (inductionVariable_1 < last_1)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var inductionVariable_2 = i_0 + 1 | 0;
          var last_2 = x.get_shape_iyi9a0_k$()[0];
          if (inductionVariable_2 < last_2)
            do {
              var k = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + 1 | 0;
              var inductionVariable_3 = 0;
              var last_3 = x.get_shape_iyi9a0_k$()[1];
              if (inductionVariable_3 < last_3)
                do {
                  var j_0 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveTriangleComplexFloat.<anonymous>' call
                  var cf1_0 = get_0(x, k, j_0);
                  var cf2_0 = get_0(a, k, i_0);
                  var cf3 = get_0(x, i_0, j_0);
                  var cf4 = get_0(a, k, k);
                  var tmp$ret$1 = cf1_0.minus_vtej6p_k$(cf2_0.times_c0fmev_k$(cf3).div_ra8ixu_k$(cf4));
                  set(x, k, j_0, tmp$ret$1);
                }
                 while (inductionVariable_3 < last_3);
            }
             while (inductionVariable_2 < last_2);
        }
         while (inductionVariable_1 < last_1);
    } else {
      var inductionVariable_4 = x.get_shape_iyi9a0_k$()[0] - 1 | 0;
      if (0 <= inductionVariable_4)
        do {
          var i_1 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + -1 | 0;
          var inductionVariable_5 = i_1 - 1 | 0;
          if (0 <= inductionVariable_5)
            do {
              var k_0 = inductionVariable_5;
              inductionVariable_5 = inductionVariable_5 + -1 | 0;
              var inductionVariable_6 = 0;
              var last_4 = x.get_shape_iyi9a0_k$()[1];
              if (inductionVariable_6 < last_4)
                do {
                  var j_1 = inductionVariable_6;
                  inductionVariable_6 = inductionVariable_6 + 1 | 0;
                  // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.solveTriangleComplexFloat.<anonymous>' call
                  var cf1_1 = get_0(x, k_0, j_1);
                  var cf2_1 = get_0(a, k_0, i_1);
                  var cf3_0 = get_0(x, i_1, j_1);
                  var cf4_0 = get_0(a, k_0, k_0);
                  var tmp$ret$2 = cf1_1.minus_vtej6p_k$(cf2_1.times_c0fmev_k$(cf3_0).div_ra8ixu_k$(cf4_0));
                  set(x, k_0, j_1, tmp$ret$2);
                }
                 while (inductionVariable_6 < last_4);
            }
             while (0 <= inductionVariable_5);
        }
         while (0 <= inductionVariable_4);
    }
    return x;
  }
  function solveTriangleleCommon(a, x, isLowerTriangle, actionFirst, actionSecond) {
    isLowerTriangle = isLowerTriangle === VOID ? true : isLowerTriangle;
    var inductionVariable = 0;
    var last = x.get_shape_iyi9a0_k$()[0];
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        var last_0 = x.get_shape_iyi9a0_k$()[1];
        if (inductionVariable_0 < last_0)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            set(x, i, j, actionFirst(get_0(x, i, j), get_0(a, i, i)));
          }
           while (inductionVariable_0 < last_0);
      }
       while (inductionVariable < last);
    if (isLowerTriangle) {
      var inductionVariable_1 = 0;
      var last_1 = x.get_shape_iyi9a0_k$()[0];
      if (inductionVariable_1 < last_1)
        do {
          var i_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var inductionVariable_2 = i_0 + 1 | 0;
          var last_2 = x.get_shape_iyi9a0_k$()[0];
          if (inductionVariable_2 < last_2)
            do {
              var k = inductionVariable_2;
              inductionVariable_2 = inductionVariable_2 + 1 | 0;
              var inductionVariable_3 = 0;
              var last_3 = x.get_shape_iyi9a0_k$()[1];
              if (inductionVariable_3 < last_3)
                do {
                  var j_0 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  set(x, k, j_0, actionSecond(get_0(x, k, j_0), get_0(a, k, i_0), get_0(x, i_0, j_0), get_0(a, k, k)));
                }
                 while (inductionVariable_3 < last_3);
            }
             while (inductionVariable_2 < last_2);
        }
         while (inductionVariable_1 < last_1);
    } else {
      var inductionVariable_4 = x.get_shape_iyi9a0_k$()[0] - 1 | 0;
      if (0 <= inductionVariable_4)
        do {
          var i_1 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + -1 | 0;
          var inductionVariable_5 = i_1 - 1 | 0;
          if (0 <= inductionVariable_5)
            do {
              var k_0 = inductionVariable_5;
              inductionVariable_5 = inductionVariable_5 + -1 | 0;
              var inductionVariable_6 = 0;
              var last_4 = x.get_shape_iyi9a0_k$()[1];
              if (inductionVariable_6 < last_4)
                do {
                  var j_1 = inductionVariable_6;
                  inductionVariable_6 = inductionVariable_6 + 1 | 0;
                  set(x, k_0, j_1, actionSecond(get_0(x, k_0, j_1), get_0(a, k_0, i_1), get_0(x, i_1, j_1), get_0(a, k_0, k_0)));
                }
                 while (inductionVariable_6 < last_4);
            }
             while (0 <= inductionVariable_5);
        }
         while (0 <= inductionVariable_4);
    }
    return x;
  }
  function requireSquare(shape) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(shape[0] === shape[1])) {
      // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.requireSquare.<anonymous>' call
      var message = 'Square matrix expected, shape=(' + shape[0] + ', ' + shape[1] + ') given';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function requireDotShape(aShape, bShape) {
    // Inline function 'kotlin.contracts.contract' call
    var tmp;
    if (!(aShape[1] === bShape[0])) {
      // Inline function 'org.jetbrains.kotlinx.multik.kotlin.linalg.requireDotShape.<anonymous>' call
      var message = 'Shapes mismatch: shapes ' + (joinToString(aShape, VOID, '(', ')') + ' and ') + (joinToString(bShape, VOID, '(', ')') + ' not aligned: ') + ('' + aShape[1] + ' (dim 1) != ' + bShape[0] + ' (dim 0)');
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function swapLines(rowPerm, from1, to1, from2, to2, swap) {
    from1 = from1 === VOID ? 0 : from1;
    to1 = to1 === VOID ? rowPerm.get_size_woubt6_k$() : to1;
    from2 = from2 === VOID ? 0 : from2;
    var inductionVariable = from1;
    if (inductionVariable < to1)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(get(rowPerm, i) === 0)) {
          var inductionVariable_0 = from2;
          if (inductionVariable_0 < to2)
            do {
              var j = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              swap(i, j);
            }
             while (inductionVariable_0 < to2);
        }
      }
       while (inductionVariable < to1);
  }
  function csqrt(a) {
    var arg = a.angle_1jch5f_k$();
    var absval = a.abs_22cy_k$();
    // Inline function 'kotlin.math.sqrt' call
    var tmp = Math.sqrt(absval);
    // Inline function 'kotlin.math.cos' call
    var x = arg / 2;
    var tmp_0 = tmp * Math.cos(x);
    // Inline function 'kotlin.math.sqrt' call
    var tmp_1 = Math.sqrt(absval);
    // Inline function 'kotlin.math.sin' call
    var x_0 = arg / 2;
    var tmp$ret$3 = Math.sin(x_0);
    return new ComplexFloat(tmp_0, tmp_1 * tmp$ret$3);
  }
  function csqrt_0(a) {
    var arg = a.angle_1jch5f_k$();
    var absval = a.abs_22cy_k$();
    // Inline function 'kotlin.math.sqrt' call
    var tmp = Math.sqrt(absval);
    // Inline function 'kotlin.math.cos' call
    var x = arg / 2;
    var tmp_0 = tmp * Math.cos(x);
    // Inline function 'kotlin.math.sqrt' call
    var tmp_1 = Math.sqrt(absval);
    // Inline function 'kotlin.math.sin' call
    var x_0 = arg / 2;
    var tmp$ret$3 = Math.sin(x_0);
    return new ComplexDouble(tmp_0, tmp_1 * tmp$ret$3);
  }
  function conjTranspose(_this__u8e3s4) {
    // Inline function 'org.jetbrains.kotlinx.multik.api.zeros' call
    var this_0 = Multik_getInstance();
    var dim1 = _this__u8e3s4.get_shape_iyi9a0_k$()[1];
    var dim2 = _this__u8e3s4.get_shape_iyi9a0_k$()[0];
    // Inline function 'kotlin.intArrayOf' call
    var tmp = new Int32Array([dim1, dim2]);
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.Companion.ofKClass' call
    Companion_getInstance();
    var type = getKClass(ComplexFloat);
    var tmp_0;
    if (type.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp_0 = DataType_ByteDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp_0 = DataType_ShortDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp_0 = DataType_IntDataType_getInstance();
    } else if (type.equals(getKClass(Long))) {
      tmp_0 = DataType_LongDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp_0 = DataType_FloatDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp_0 = DataType_DoubleDataType_getInstance();
    } else if (type.equals(getKClass(ComplexFloat))) {
      tmp_0 = DataType_ComplexFloatDataType_getInstance();
    } else if (type.equals(getKClass(ComplexDouble))) {
      tmp_0 = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, got ' + type.get_simpleName_r6f8py_k$());
    }
    var tmp$ret$1 = tmp_0;
    var ans = zeros(this_0, tmp, tmp$ret$1);
    var inductionVariable = 0;
    var last = ans.get_shape_iyi9a0_k$()[0];
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        var last_0 = ans.get_shape_iyi9a0_k$()[1];
        if (inductionVariable_0 < last_0)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            set(ans, i, j, get_0(_this__u8e3s4, j, i).conjugate_b863jc_k$());
          }
           while (inductionVariable_0 < last_0);
      }
       while (inductionVariable < last);
    return ans;
  }
  function conjTranspose_0(_this__u8e3s4) {
    // Inline function 'org.jetbrains.kotlinx.multik.api.zeros' call
    var this_0 = Multik_getInstance();
    var dim1 = _this__u8e3s4.get_shape_iyi9a0_k$()[1];
    var dim2 = _this__u8e3s4.get_shape_iyi9a0_k$()[0];
    // Inline function 'kotlin.intArrayOf' call
    var tmp = new Int32Array([dim1, dim2]);
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.Companion.ofKClass' call
    Companion_getInstance();
    var type = getKClass(ComplexDouble);
    var tmp_0;
    if (type.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp_0 = DataType_ByteDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp_0 = DataType_ShortDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp_0 = DataType_IntDataType_getInstance();
    } else if (type.equals(getKClass(Long))) {
      tmp_0 = DataType_LongDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp_0 = DataType_FloatDataType_getInstance();
    } else if (type.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp_0 = DataType_DoubleDataType_getInstance();
    } else if (type.equals(getKClass(ComplexFloat))) {
      tmp_0 = DataType_ComplexFloatDataType_getInstance();
    } else if (type.equals(getKClass(ComplexDouble))) {
      tmp_0 = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, got ' + type.get_simpleName_r6f8py_k$());
    }
    var tmp$ret$1 = tmp_0;
    var ans = zeros(this_0, tmp, tmp$ret$1);
    var inductionVariable = 0;
    var last = ans.get_shape_iyi9a0_k$()[0];
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        var last_0 = ans.get_shape_iyi9a0_k$()[1];
        if (inductionVariable_0 < last_0)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            set(ans, i, j, get_0(_this__u8e3s4, j, i).conjugate_b863jc_k$());
          }
           while (inductionVariable_0 < last_0);
      }
       while (inductionVariable < last);
    return ans;
  }
  function KEMath$max$lambda($min) {
    return function (it) {
      return $min;
    };
  }
  function KEMath$min$lambda($max) {
    return function (it) {
      return $max;
    };
  }
  function KEMath() {
    KEMath_instance = this;
  }
  protoOf(KEMath).get_mathEx_gj17fo_k$ = function () {
    return KEMathEx_getInstance();
  };
  protoOf(KEMath).argMax_z87v2k_k$ = function (a) {
    var arg = 0;
    var count = 0;
    var max = first(a);
    var tmp0_iterator = a.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var el = tmp0_iterator.next_20eer_k$();
      if (compareTo(max, el) < 0) {
        max = el;
        arg = count;
      }
      count = count + 1 | 0;
    }
    return arg;
  };
  protoOf(KEMath).argMax_vnv1gi_k$ = function (a, axis) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(a.get_dim_18j7c1_k$().get_d_1mhr5n_k$() > 1)) {
      // Inline function 'org.jetbrains.kotlinx.multik.kotlin.math.KEMath.argMax.<anonymous>' call
      var message = 'NDArray of dimension one, use the `argMax` function without axis.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= axis ? axis < a.get_dim_18j7c1_k$().get_d_1mhr5n_k$() : false)) {
      // Inline function 'org.jetbrains.kotlinx.multik.kotlin.math.KEMath.argMax.<anonymous>' call
      var message_0 = 'axis ' + axis + ' is out of bounds for this ndarray of dimension ' + a.get_dim_18j7c1_k$().get_d_1mhr5n_k$() + '.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var newShape = remove(a.get_shape_iyi9a0_k$(), axis);
    var min = this.min_rc7y7c_k$(a);
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var inductionVariable = 0;
    var last = newShape.length;
    while (inductionVariable < last) {
      var element = newShape[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = imul(accumulator, element);
    }
    var size = accumulator;
    // Inline function 'kotlin.collections.MutableList' call
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size)
      do {
        var index = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'org.jetbrains.kotlinx.multik.kotlin.math.KEMath.argMax.<anonymous>' call
        list.add_utx5q5_k$(min);
      }
       while (inductionVariable_0 < size);
    var maxArray = list;
    var argMaxData = initMemoryView(size, DataType_IntDataType_getInstance());
    // Inline function 'kotlin.collections.mutableMapOf' call
    var indexMap = LinkedHashMap_init_$Create$();
    var inductionVariable_1 = 0;
    var last_0 = a.get_shape_iyi9a0_k$().length - 1 | 0;
    if (inductionVariable_1 <= last_0)
      $l$loop: do {
        var i = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        if (i === axis)
          continue $l$loop;
        // Inline function 'kotlin.collections.set' call
        var value = RInt__until_impl_2ge59w(get_r(0), a.get_shape_iyi9a0_k$()[i]);
        indexMap.put_4fpzoq_k$(i, value);
      }
       while (inductionVariable_1 <= last_0);
    var inductionVariable_2 = 0;
    var last_1 = a.get_shape_iyi9a0_k$()[axis];
    if (inductionVariable_2 < last_1)
      do {
        var index_0 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var value_0 = new RInt(get_r(index_0));
        indexMap.put_4fpzoq_k$(axis, value_0);
        var t = slice(a, indexMap);
        var count = 0;
        var tmp2_iterator = t.iterator_jk1svi_k$();
        while (tmp2_iterator.hasNext_bitz1p_k$()) {
          var el = tmp2_iterator.next_20eer_k$();
          if (compareTo(maxArray.get_c1px32_k$(count), el) < 0) {
            argMaxData.set_52lp9l_k$(count, index_0);
            maxArray.set_82063s_k$(count, el);
          }
          count = count + 1 | 0;
        }
      }
       while (inductionVariable_2 < last_1);
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.dimensionOf' call
    var dim = newShape.length;
    var tmp;
    switch (dim) {
      case 1:
        tmp = Companion_getInstance_1();
        break;
      case 2:
        tmp = Companion_getInstance_0();
        break;
      case 3:
        tmp = Companion_getInstance_4();
        break;
      case 4:
        tmp = Companion_getInstance_5();
        break;
      default:
        tmp = new DN(dim);
        break;
    }
    var tmp$ret$7 = isInterface(tmp, Dimension) ? tmp : THROW_CCE();
    return new NDArray(argMaxData, 0, newShape, VOID, tmp$ret$7);
  };
  protoOf(KEMath).argMaxD2_9ppsl1_k$ = function (a, axis) {
    return this.argMax_vnv1gi_k$(a, axis);
  };
  protoOf(KEMath).argMaxD3_p2ha1h_k$ = function (a, axis) {
    return this.argMax_vnv1gi_k$(a, axis);
  };
  protoOf(KEMath).argMaxD4_ulvah7_k$ = function (a, axis) {
    return this.argMax_vnv1gi_k$(a, axis);
  };
  protoOf(KEMath).argMaxDN_dgf1it_k$ = function (a, axis) {
    return this.argMax_vnv1gi_k$(a, axis);
  };
  protoOf(KEMath).argMin_mwq6hu_k$ = function (a) {
    var arg = 0;
    var count = 0;
    var min = first(a);
    var tmp0_iterator = a.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var el = tmp0_iterator.next_20eer_k$();
      if (compareTo(min, el) > 0) {
        min = el;
        arg = count;
      }
      count = count + 1 | 0;
    }
    return arg;
  };
  protoOf(KEMath).argMin_163kts_k$ = function (a, axis) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(a.get_dim_18j7c1_k$().get_d_1mhr5n_k$() > 1)) {
      // Inline function 'org.jetbrains.kotlinx.multik.kotlin.math.KEMath.argMin.<anonymous>' call
      var message = 'NDArray of dimension one, use the `argMin` function without axis.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= axis ? axis < a.get_dim_18j7c1_k$().get_d_1mhr5n_k$() : false)) {
      // Inline function 'org.jetbrains.kotlinx.multik.kotlin.math.KEMath.argMin.<anonymous>' call
      var message_0 = 'axis ' + axis + ' is out of bounds for this ndarray of dimension ' + a.get_dim_18j7c1_k$().get_d_1mhr5n_k$() + '.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var newShape = remove(a.get_shape_iyi9a0_k$(), axis);
    var max = this.max_eg1xsm_k$(a);
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var inductionVariable = 0;
    var last = newShape.length;
    while (inductionVariable < last) {
      var element = newShape[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = imul(accumulator, element);
    }
    var size = accumulator;
    // Inline function 'kotlin.collections.MutableList' call
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size)
      do {
        var index = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'org.jetbrains.kotlinx.multik.kotlin.math.KEMath.argMin.<anonymous>' call
        list.add_utx5q5_k$(max);
      }
       while (inductionVariable_0 < size);
    var minArray = list;
    var argMinData = initMemoryView(size, DataType_IntDataType_getInstance());
    // Inline function 'kotlin.collections.mutableMapOf' call
    var indexMap = LinkedHashMap_init_$Create$();
    var inductionVariable_1 = 0;
    var last_0 = a.get_shape_iyi9a0_k$().length - 1 | 0;
    if (inductionVariable_1 <= last_0)
      $l$loop: do {
        var i = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        if (i === axis)
          continue $l$loop;
        // Inline function 'kotlin.collections.set' call
        var value = RInt__until_impl_2ge59w(get_r(0), a.get_shape_iyi9a0_k$()[i]);
        indexMap.put_4fpzoq_k$(i, value);
      }
       while (inductionVariable_1 <= last_0);
    var inductionVariable_2 = 0;
    var last_1 = a.get_shape_iyi9a0_k$()[axis];
    if (inductionVariable_2 < last_1)
      do {
        var index_0 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var value_0 = new RInt(get_r(index_0));
        indexMap.put_4fpzoq_k$(axis, value_0);
        var t = slice(a, indexMap);
        var count = 0;
        var tmp2_iterator = t.iterator_jk1svi_k$();
        while (tmp2_iterator.hasNext_bitz1p_k$()) {
          var el = tmp2_iterator.next_20eer_k$();
          if (compareTo(minArray.get_c1px32_k$(count), el) > 0) {
            argMinData.set_52lp9l_k$(count, index_0);
            minArray.set_82063s_k$(count, el);
          }
          count = count + 1 | 0;
        }
      }
       while (inductionVariable_2 < last_1);
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.dimensionOf' call
    var dim = newShape.length;
    var tmp;
    switch (dim) {
      case 1:
        tmp = Companion_getInstance_1();
        break;
      case 2:
        tmp = Companion_getInstance_0();
        break;
      case 3:
        tmp = Companion_getInstance_4();
        break;
      case 4:
        tmp = Companion_getInstance_5();
        break;
      default:
        tmp = new DN(dim);
        break;
    }
    var tmp$ret$7 = isInterface(tmp, Dimension) ? tmp : THROW_CCE();
    return new NDArray(argMinData, 0, newShape, VOID, tmp$ret$7);
  };
  protoOf(KEMath).argMinD2_vsaazh_k$ = function (a, axis) {
    return this.argMin_163kts_k$(a, axis);
  };
  protoOf(KEMath).argMinD3_gfitj1_k$ = function (a, axis) {
    return this.argMin_163kts_k$(a, axis);
  };
  protoOf(KEMath).argMinD4_12rc2l_k$ = function (a, axis) {
    return this.argMin_163kts_k$(a, axis);
  };
  protoOf(KEMath).argMinDN_s1l21p_k$ = function (a, axis) {
    return this.argMin_163kts_k$(a, axis);
  };
  protoOf(KEMath).max_eg1xsm_k$ = function (a) {
    var max = first(a);
    var tmp0_iterator = a.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var el = tmp0_iterator.next_20eer_k$();
      if (compareTo(max, el) < 0)
        max = el;
    }
    return max;
  };
  protoOf(KEMath).max_atn8iw_k$ = function (a, axis) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(a.get_dim_18j7c1_k$().get_d_1mhr5n_k$() > 1)) {
      // Inline function 'org.jetbrains.kotlinx.multik.kotlin.math.KEMath.max.<anonymous>' call
      var message = 'NDArray of dimension one, use the `max` function without axis.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= axis ? axis < a.get_dim_18j7c1_k$().get_d_1mhr5n_k$() : false)) {
      // Inline function 'org.jetbrains.kotlinx.multik.kotlin.math.KEMath.max.<anonymous>' call
      var message_0 = 'axis ' + axis + ' is out of bounds for this ndarray of dimension ' + a.get_dim_18j7c1_k$().get_d_1mhr5n_k$() + '.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var newShape = remove(a.get_shape_iyi9a0_k$(), axis);
    var min = this.min_rc7y7c_k$(a);
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var inductionVariable = 0;
    var last = newShape.length;
    while (inductionVariable < last) {
      var element = newShape[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = imul(accumulator, element);
    }
    var size = accumulator;
    var tmp = a.get_dtype_iqhi0l_k$();
    var maxData = initMemoryView_0(size, tmp, KEMath$max$lambda(min));
    // Inline function 'kotlin.collections.mutableMapOf' call
    var indexMap = LinkedHashMap_init_$Create$();
    var inductionVariable_0 = 0;
    var last_0 = a.get_shape_iyi9a0_k$().length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      $l$loop: do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (i === axis)
          continue $l$loop;
        // Inline function 'kotlin.collections.set' call
        var value = RInt__until_impl_2ge59w(get_r(0), a.get_shape_iyi9a0_k$()[i]);
        indexMap.put_4fpzoq_k$(i, value);
      }
       while (inductionVariable_0 <= last_0);
    var inductionVariable_1 = 0;
    var last_1 = a.get_shape_iyi9a0_k$()[axis];
    if (inductionVariable_1 < last_1)
      do {
        var index = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var value_0 = new RInt(get_r(index));
        indexMap.put_4fpzoq_k$(axis, value_0);
        var t = slice(a, indexMap);
        var count = 0;
        var tmp2_iterator = t.iterator_jk1svi_k$();
        while (tmp2_iterator.hasNext_bitz1p_k$()) {
          var el = tmp2_iterator.next_20eer_k$();
          if (compareTo(maxData.get_c1px32_k$(count), el) < 0) {
            maxData.set_52lp9l_k$(count, el);
          }
          count = count + 1 | 0;
        }
      }
       while (inductionVariable_1 < last_1);
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.dimensionOf' call
    var dim = newShape.length;
    var tmp_0;
    switch (dim) {
      case 1:
        tmp_0 = Companion_getInstance_1();
        break;
      case 2:
        tmp_0 = Companion_getInstance_0();
        break;
      case 3:
        tmp_0 = Companion_getInstance_4();
        break;
      case 4:
        tmp_0 = Companion_getInstance_5();
        break;
      default:
        tmp_0 = new DN(dim);
        break;
    }
    var tmp$ret$5 = isInterface(tmp_0, Dimension) ? tmp_0 : THROW_CCE();
    return new NDArray(maxData, 0, newShape, VOID, tmp$ret$5);
  };
  protoOf(KEMath).maxD2_t8qml1_k$ = function (a, axis) {
    return this.max_atn8iw_k$(a, axis);
  };
  protoOf(KEMath).maxD3_dvz54l_k$ = function (a, axis) {
    return this.max_atn8iw_k$(a, axis);
  };
  protoOf(KEMath).maxD4_1gscbv_k$ = function (a, axis) {
    return this.max_atn8iw_k$(a, axis);
  };
  protoOf(KEMath).maxDN_pi1dn9_k$ = function (a, axis) {
    return this.max_atn8iw_k$(a, axis);
  };
  protoOf(KEMath).min_rc7y7c_k$ = function (a) {
    var min = first(a);
    var tmp0_iterator = a.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var el = tmp0_iterator.next_20eer_k$();
      if (compareTo(min, el) > 0)
        min = el;
    }
    return min;
  };
  protoOf(KEMath).min_rdi75y_k$ = function (a, axis) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(a.get_dim_18j7c1_k$().get_d_1mhr5n_k$() > 1)) {
      // Inline function 'org.jetbrains.kotlinx.multik.kotlin.math.KEMath.min.<anonymous>' call
      var message = 'NDArray of dimension one, use the `min` function without axis.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= axis ? axis < a.get_dim_18j7c1_k$().get_d_1mhr5n_k$() : false)) {
      // Inline function 'org.jetbrains.kotlinx.multik.kotlin.math.KEMath.min.<anonymous>' call
      var message_0 = 'axis ' + axis + ' is out of bounds for this ndarray of dimension ' + a.get_dim_18j7c1_k$().get_d_1mhr5n_k$() + '.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var newShape = remove(a.get_shape_iyi9a0_k$(), axis);
    var max = this.max_eg1xsm_k$(a);
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var inductionVariable = 0;
    var last = newShape.length;
    while (inductionVariable < last) {
      var element = newShape[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = imul(accumulator, element);
    }
    var size = accumulator;
    var tmp = a.get_dtype_iqhi0l_k$();
    var minData = initMemoryView_0(size, tmp, KEMath$min$lambda(max));
    // Inline function 'kotlin.collections.mutableMapOf' call
    var indexMap = LinkedHashMap_init_$Create$();
    var inductionVariable_0 = 0;
    var last_0 = a.get_shape_iyi9a0_k$().length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      $l$loop: do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (i === axis)
          continue $l$loop;
        // Inline function 'kotlin.collections.set' call
        var value = RInt__until_impl_2ge59w(get_r(0), a.get_shape_iyi9a0_k$()[i]);
        indexMap.put_4fpzoq_k$(i, value);
      }
       while (inductionVariable_0 <= last_0);
    var inductionVariable_1 = 0;
    var last_1 = a.get_shape_iyi9a0_k$()[axis];
    if (inductionVariable_1 < last_1)
      do {
        var index = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var value_0 = new RInt(get_r(index));
        indexMap.put_4fpzoq_k$(axis, value_0);
        var t = slice(a, indexMap);
        var count = 0;
        var tmp2_iterator = t.iterator_jk1svi_k$();
        while (tmp2_iterator.hasNext_bitz1p_k$()) {
          var el = tmp2_iterator.next_20eer_k$();
          if (compareTo(minData.get_c1px32_k$(count), el) > 0) {
            minData.set_52lp9l_k$(count, el);
          }
          count = count + 1 | 0;
        }
      }
       while (inductionVariable_1 < last_1);
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.dimensionOf' call
    var dim = newShape.length;
    var tmp_0;
    switch (dim) {
      case 1:
        tmp_0 = Companion_getInstance_1();
        break;
      case 2:
        tmp_0 = Companion_getInstance_0();
        break;
      case 3:
        tmp_0 = Companion_getInstance_4();
        break;
      case 4:
        tmp_0 = Companion_getInstance_5();
        break;
      default:
        tmp_0 = new DN(dim);
        break;
    }
    var tmp$ret$5 = isInterface(tmp_0, Dimension) ? tmp_0 : THROW_CCE();
    return new NDArray(minData, 0, newShape, VOID, tmp$ret$5);
  };
  protoOf(KEMath).minD2_adbtl_k$ = function (a, axis) {
    return this.min_rdi75y_k$(a, axis);
  };
  protoOf(KEMath).minD3_fn4ta1_k$ = function (a, axis) {
    return this.min_rdi75y_k$(a, axis);
  };
  protoOf(KEMath).minD4_uzwaqh_k$ = function (a, axis) {
    return this.min_rdi75y_k$(a, axis);
  };
  protoOf(KEMath).minDN_412krd_k$ = function (a, axis) {
    return this.min_rdi75y_k$(a, axis);
  };
  protoOf(KEMath).sum_9q6oq7_k$ = function (a) {
    return summation(a);
  };
  protoOf(KEMath).sum_hldkm9_k$ = function (a, axis) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(a.get_dim_18j7c1_k$().get_d_1mhr5n_k$() > 1)) {
      // Inline function 'org.jetbrains.kotlinx.multik.kotlin.math.KEMath.sum.<anonymous>' call
      var message = 'NDArray of dimension one, use the `sum` function without axis.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= axis ? axis < a.get_dim_18j7c1_k$().get_d_1mhr5n_k$() : false)) {
      // Inline function 'org.jetbrains.kotlinx.multik.kotlin.math.KEMath.sum.<anonymous>' call
      var message_0 = 'axis ' + axis + ' is out of bounds for this ndarray of dimension ' + a.get_dim_18j7c1_k$().get_d_1mhr5n_k$() + '.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var newShape = remove(a.get_shape_iyi9a0_k$(), axis);
    var ret = zeros(Multik_getInstance(), newShape, a.get_dtype_iqhi0l_k$());
    // Inline function 'kotlin.collections.mutableMapOf' call
    var indexMap = LinkedHashMap_init_$Create$();
    var inductionVariable = 0;
    var last = a.get_shape_iyi9a0_k$().length - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i === axis)
          continue $l$loop;
        // Inline function 'kotlin.collections.set' call
        var value = RInt__until_impl_2ge59w(get_r(0), a.get_shape_iyi9a0_k$()[i]);
        indexMap.put_4fpzoq_k$(i, value);
      }
       while (inductionVariable <= last);
    var inductionVariable_0 = 0;
    var last_0 = a.get_shape_iyi9a0_k$()[axis];
    if (inductionVariable_0 < last_0)
      do {
        var index = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var value_0 = new RInt(get_r(index));
        indexMap.put_4fpzoq_k$(axis, value_0);
        plusAssign(ret, slice(a, indexMap));
      }
       while (inductionVariable_0 < last_0);
    return ret;
  };
  protoOf(KEMath).sumD2_tq4fam_k$ = function (a, axis) {
    return this.sum_hldkm9_k$(a, axis);
  };
  protoOf(KEMath).sumD3_edcxu6_k$ = function (a, axis) {
    return this.sum_hldkm9_k$(a, axis);
  };
  protoOf(KEMath).sumD4_zejma_k$ = function (a, axis) {
    return this.sum_hldkm9_k$(a, axis);
  };
  protoOf(KEMath).sumDN_pzf6cu_k$ = function (a, axis) {
    return this.sum_hldkm9_k$(a, axis);
  };
  protoOf(KEMath).cumSum_ieg9jq_k$ = function (a) {
    var tmp = initMemoryView(a.get_size_woubt6_k$(), DataType_DoubleDataType_getInstance());
    // Inline function 'kotlin.intArrayOf' call
    var tmp$ret$0 = new Int32Array([a.get_size_woubt6_k$()]);
    var ret = new NDArray(tmp, VOID, tmp$ret$0, VOID, Companion_getInstance_1());
    var ind = 0;
    var accum = 0.0;
    var compens = 0.0;
    var tmp0_iterator = a.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var el = tmp0_iterator.next_20eer_k$();
      var y = numberToDouble(el) - compens;
      var t = accum + y;
      compens = t - accum - y;
      accum = t;
      var tmp1 = ind;
      ind = tmp1 + 1 | 0;
      set_0(ret, tmp1, accum);
    }
    return ret.asType_6yutyo_k$(a.get_dtype_iqhi0l_k$());
  };
  protoOf(KEMath).cumSum_xdeawu_k$ = function (a, axis) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= axis ? axis < a.get_dim_18j7c1_k$().get_d_1mhr5n_k$() : false)) {
      // Inline function 'org.jetbrains.kotlinx.multik.kotlin.math.KEMath.cumSum.<anonymous>' call
      var message = 'axis ' + axis + ' is out of bounds for this ndarray of dimension ' + a.get_dim_18j7c1_k$().get_d_1mhr5n_k$() + '.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var ret = (a instanceof NDArray ? a : THROW_CCE()).deepCopy_adwlmp_k$();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var indexMap = LinkedHashMap_init_$Create$();
    var inductionVariable = 0;
    var last = a.get_shape_iyi9a0_k$().length - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (i === axis)
          continue $l$loop;
        // Inline function 'kotlin.collections.set' call
        var value = RInt__until_impl_2ge59w(get_r(0), a.get_shape_iyi9a0_k$()[i]);
        indexMap.put_4fpzoq_k$(i, value);
      }
       while (inductionVariable <= last);
    var inductionVariable_0 = 1;
    var last_0 = a.get_shape_iyi9a0_k$()[axis];
    if (inductionVariable_0 < last_0)
      do {
        var index = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var value_0 = new RInt(get_r(index));
        indexMap.put_4fpzoq_k$(axis, value_0);
        var tmp = slice(ret, indexMap);
        // Inline function 'kotlin.collections.set' call
        var value_1 = new RInt(RInt__minus_impl_xkujuu(get_r(index), get_r(1)));
        indexMap.put_4fpzoq_k$(axis, value_1);
        plusAssign(tmp, slice(ret, indexMap));
      }
       while (inductionVariable_0 < last_0);
    return ret;
  };
  var KEMath_instance;
  function KEMath_getInstance() {
    if (KEMath_instance == null)
      new KEMath();
    return KEMath_instance;
  }
  function remove(_this__u8e3s4, pos) {
    var tmp;
    if (pos === 0) {
      tmp = sliceArray(_this__u8e3s4, numberRangeToNumber(1, get_lastIndex(_this__u8e3s4)));
    } else if (pos === get_lastIndex(_this__u8e3s4)) {
      tmp = sliceArray(_this__u8e3s4, until(0, get_lastIndex(_this__u8e3s4)));
    } else {
      // Inline function 'kotlin.collections.plus' call
      var this_0 = sliceArray(_this__u8e3s4, until(0, pos));
      var elements = sliceArray(_this__u8e3s4, numberRangeToNumber(pos + 1 | 0, get_lastIndex(_this__u8e3s4)));
      tmp = primitiveArrayConcat([this_0, elements]);
    }
    return tmp;
  }
  function summation(a) {
    var tmp;
    switch (a.get_dtype_iqhi0l_k$().get_ordinal_ip24qg_k$()) {
      case 4:
        var accum = 0.0;
        var compens = 0.0;
        var tmp_0;
        if (a.get_consistent_si7i05_k$()) {
          tmp_0 = floatArrayIterator(a.get_data_wokkxf_k$().getFloatArray_m77gkt_k$());
        } else {
          tmp_0 = (isInterface(a, MultiArray) ? a : THROW_CCE()).iterator_jk1svi_k$();
        }

        var iter = tmp_0;
        // Inline function 'kotlin.collections.iterator' call

        var tmp1_iterator = iter;
        while (tmp1_iterator.hasNext_bitz1p_k$()) {
          var el = tmp1_iterator.next_20eer_k$();
          var y = el - compens;
          var t = accum + y;
          compens = t - accum - y;
          accum = t;
        }

        tmp = accum;
        break;
      case 5:
        var accum_0 = 0.0;
        var compens_0 = 0.0;
        var tmp_1;
        if (a.get_consistent_si7i05_k$()) {
          tmp_1 = doubleArrayIterator(a.get_data_wokkxf_k$().getDoubleArray_x8889e_k$());
        } else {
          tmp_1 = (isInterface(a, MultiArray) ? a : THROW_CCE()).iterator_jk1svi_k$();
        }

        var iter_0 = tmp_1;
        // Inline function 'kotlin.collections.iterator' call

        var tmp2_iterator = iter_0;
        while (tmp2_iterator.hasNext_bitz1p_k$()) {
          var el_0 = tmp2_iterator.next_20eer_k$();
          var y_0 = el_0 - compens_0;
          var t_0 = accum_0 + y_0;
          compens_0 = t_0 - accum_0 - y_0;
          accum_0 = t_0;
        }

        tmp = accum_0;
        break;
      case 2:
        var accum_1 = 0;
        var tmp_2;
        if (a.get_consistent_si7i05_k$()) {
          tmp_2 = intArrayIterator(a.get_data_wokkxf_k$().getIntArray_rs62n4_k$());
        } else {
          tmp_2 = (isInterface(a, MultiArray) ? a : THROW_CCE()).iterator_jk1svi_k$();
        }

        var iter_1 = tmp_2;
        // Inline function 'kotlin.collections.iterator' call

        var tmp3_iterator = iter_1;
        while (tmp3_iterator.hasNext_bitz1p_k$()) {
          var el_1 = tmp3_iterator.next_20eer_k$();
          accum_1 = accum_1 + el_1 | 0;
        }

        tmp = accum_1;
        break;
      case 3:
        var accum_2 = new Long(0, 0);
        var tmp_3;
        if (a.get_consistent_si7i05_k$()) {
          tmp_3 = longArrayIterator(a.get_data_wokkxf_k$().getLongArray_1i1953_k$());
        } else {
          tmp_3 = (isInterface(a, MultiArray) ? a : THROW_CCE()).iterator_jk1svi_k$();
        }

        var iter_2 = tmp_3;
        // Inline function 'kotlin.collections.iterator' call

        var tmp4_iterator = iter_2;
        while (tmp4_iterator.hasNext_bitz1p_k$()) {
          var el_2 = tmp4_iterator.next_20eer_k$();
          accum_2 = accum_2.plus_r93sks_k$(el_2);
        }

        tmp = accum_2;
        break;
      case 1:
        var accum_3 = 0;
        var tmp_4;
        if (a.get_consistent_si7i05_k$()) {
          tmp_4 = shortArrayIterator(a.get_data_wokkxf_k$().getShortArray_kijo6r_k$());
        } else {
          tmp_4 = (isInterface(a, MultiArray) ? a : THROW_CCE()).iterator_jk1svi_k$();
        }

        var iter_3 = tmp_4;
        // Inline function 'kotlin.collections.iterator' call

        var tmp5_iterator = iter_3;
        while (tmp5_iterator.hasNext_bitz1p_k$()) {
          var el_3 = tmp5_iterator.next_20eer_k$();
          accum_3 = accum_3 + el_3 | 0;
        }

        tmp = accum_3;
        break;
      case 0:
        var accum_4 = 0;
        var tmp_5;
        if (a.get_consistent_si7i05_k$()) {
          tmp_5 = byteArrayIterator(a.get_data_wokkxf_k$().getByteArray_yjfvk5_k$());
        } else {
          tmp_5 = (isInterface(a, MultiArray) ? a : THROW_CCE()).iterator_jk1svi_k$();
        }

        var iter_4 = tmp_5;
        // Inline function 'kotlin.collections.iterator' call

        var tmp6_iterator = iter_4;
        while (tmp6_iterator.hasNext_bitz1p_k$()) {
          var el_4 = tmp6_iterator.next_20eer_k$();
          accum_4 = accum_4 + el_4 | 0;
        }

        tmp = accum_4;
        break;
      default:
        var reason = 'Complex numbers';
        throw new NotImplementedError('An operation is not implemented: ' + reason);
    }
    var tmp_6 = tmp;
    return isNumber(tmp_6) ? tmp_6 : THROW_CCE();
  }
  function mathOperation($this, a, function_0) {
    var iter = a.iterator_jk1svi_k$();
    var tmp = a.get_size_woubt6_k$();
    var tmp_0 = DataType_DoubleDataType_getInstance();
    var data = initMemoryView_0(tmp, tmp_0, KEMathEx$mathOperation$lambda(iter, function_0));
    return new NDArray(data, 0, a.get_shape_iyi9a0_k$(), VOID, a.get_dim_18j7c1_k$());
  }
  function mathOperation_0($this, a, function_0) {
    var iter = a.iterator_jk1svi_k$();
    var tmp = a.get_size_woubt6_k$();
    var tmp_0 = DataType_FloatDataType_getInstance();
    var data = initMemoryView_0(tmp, tmp_0, KEMathEx$mathOperation$lambda_0(iter, function_0));
    return new NDArray(data, 0, a.get_shape_iyi9a0_k$(), VOID, a.get_dim_18j7c1_k$());
  }
  function mathOperation_1($this, a, function_0) {
    var iter = a.iterator_jk1svi_k$();
    var tmp = a.get_size_woubt6_k$();
    var tmp_0 = a.get_dtype_iqhi0l_k$();
    var data = initMemoryView_0(tmp, tmp_0, KEMathEx$mathOperation$lambda_1(iter, function_0));
    return new NDArray(data, 0, a.get_shape_iyi9a0_k$(), VOID, a.get_dim_18j7c1_k$());
  }
  function KEMathEx$exp$lambda(it) {
    // Inline function 'kotlin.math.exp' call
    return Math.exp(it);
  }
  function KEMathEx$expF$lambda(it) {
    // Inline function 'kotlin.math.exp' call
    return Math.exp(it);
  }
  function KEMathEx$expCF$lambda(it) {
    // Inline function 'kotlin.math.exp' call
    var x = it.get_re_kntnpg_k$();
    var expReal = Math.exp(x);
    // Inline function 'kotlin.math.cos' call
    var x_0 = it.get_im_kntnwz_k$();
    var tmp = expReal * Math.cos(x_0);
    // Inline function 'kotlin.math.sin' call
    var x_1 = it.get_im_kntnwz_k$();
    var tmp$ret$2 = Math.sin(x_1);
    return new ComplexFloat(tmp, expReal * tmp$ret$2);
  }
  function KEMathEx$expCD$lambda(it) {
    // Inline function 'kotlin.math.exp' call
    var x = it.get_re_kntnpg_k$();
    var expReal = Math.exp(x);
    // Inline function 'kotlin.math.cos' call
    var x_0 = it.get_im_kntnwz_k$();
    var tmp = expReal * Math.cos(x_0);
    // Inline function 'kotlin.math.sin' call
    var x_1 = it.get_im_kntnwz_k$();
    var tmp$ret$2 = Math.sin(x_1);
    return new ComplexDouble(tmp, expReal * tmp$ret$2);
  }
  function KEMathEx$log$lambda(it) {
    // Inline function 'kotlin.math.ln' call
    return Math.log(it);
  }
  function KEMathEx$logF$lambda(it) {
    // Inline function 'kotlin.math.ln' call
    return Math.log(it);
  }
  function KEMathEx$logCF$lambda(it) {
    return new ComplexFloat(it.abs_22cy_k$(), it.angle_1jch5f_k$());
  }
  function KEMathEx$logCD$lambda(it) {
    return new ComplexDouble(it.abs_22cy_k$(), it.angle_1jch5f_k$());
  }
  function KEMathEx$sin$lambda(it) {
    // Inline function 'kotlin.math.sin' call
    return Math.sin(it);
  }
  function KEMathEx$sinF$lambda(it) {
    // Inline function 'kotlin.math.sin' call
    return Math.sin(it);
  }
  function KEMathEx$sinCF$lambda(it) {
    // Inline function 'kotlin.math.sin' call
    var x = it.get_re_kntnpg_k$();
    var tmp = Math.sin(x);
    // Inline function 'kotlin.math.cosh' call
    var x_0 = it.get_im_kntnwz_k$();
    var tmp_0 = tmp * cosh(x_0);
    // Inline function 'kotlin.math.cos' call
    var x_1 = it.get_re_kntnpg_k$();
    var tmp_1 = Math.cos(x_1);
    // Inline function 'kotlin.math.sinh' call
    var x_2 = it.get_im_kntnwz_k$();
    var tmp$ret$3 = sinh(x_2);
    return new ComplexFloat(tmp_0, tmp_1 * tmp$ret$3);
  }
  function KEMathEx$sinCD$lambda(it) {
    // Inline function 'kotlin.math.sin' call
    var x = it.get_re_kntnpg_k$();
    var tmp = Math.sin(x);
    // Inline function 'kotlin.math.cosh' call
    var x_0 = it.get_im_kntnwz_k$();
    var tmp_0 = tmp * cosh(x_0);
    // Inline function 'kotlin.math.cos' call
    var x_1 = it.get_re_kntnpg_k$();
    var tmp_1 = Math.cos(x_1);
    // Inline function 'kotlin.math.sinh' call
    var x_2 = it.get_im_kntnwz_k$();
    var tmp$ret$3 = sinh(x_2);
    return new ComplexDouble(tmp_0, tmp_1 * tmp$ret$3);
  }
  function KEMathEx$cos$lambda(it) {
    // Inline function 'kotlin.math.cos' call
    return Math.cos(it);
  }
  function KEMathEx$cosF$lambda(it) {
    // Inline function 'kotlin.math.cos' call
    return Math.cos(it);
  }
  function KEMathEx$cosCF$lambda(it) {
    // Inline function 'kotlin.math.cos' call
    var x = it.get_re_kntnpg_k$();
    var tmp = Math.cos(x);
    // Inline function 'kotlin.math.cosh' call
    var x_0 = it.get_im_kntnwz_k$();
    var tmp_0 = tmp * cosh(x_0);
    // Inline function 'kotlin.math.sin' call
    var x_1 = it.get_re_kntnpg_k$();
    var tmp_1 = Math.sin(x_1);
    // Inline function 'kotlin.math.sinh' call
    var x_2 = it.get_im_kntnwz_k$();
    var tmp$ret$3 = sinh(x_2);
    return new ComplexFloat(tmp_0, tmp_1 * tmp$ret$3);
  }
  function KEMathEx$cosCD$lambda(it) {
    // Inline function 'kotlin.math.cos' call
    var x = it.get_re_kntnpg_k$();
    var tmp = Math.cos(x);
    // Inline function 'kotlin.math.cosh' call
    var x_0 = it.get_im_kntnwz_k$();
    var tmp_0 = tmp * cosh(x_0);
    // Inline function 'kotlin.math.sin' call
    var x_1 = it.get_re_kntnpg_k$();
    var tmp_1 = Math.sin(x_1);
    // Inline function 'kotlin.math.sinh' call
    var x_2 = it.get_im_kntnwz_k$();
    var tmp$ret$3 = sinh(x_2);
    return new ComplexDouble(tmp_0, tmp_1 * tmp$ret$3);
  }
  function KEMathEx$mathOperation$lambda($iter, $function) {
    return function (it) {
      return $iter.hasNext_bitz1p_k$() ? $function(numberToDouble($iter.next_20eer_k$())) : 0.0;
    };
  }
  function KEMathEx$mathOperation$lambda_0($iter, $function) {
    return function (it) {
      return $iter.hasNext_bitz1p_k$() ? $function($iter.next_20eer_k$()) : 0.0;
    };
  }
  function KEMathEx$mathOperation$lambda_1($iter, $function) {
    return function (it) {
      var tmp;
      if (!$iter.hasNext_bitz1p_k$()) {
        throw Exception_init_$Create$('');
      }
      return $function($iter.next_20eer_k$());
    };
  }
  function KEMathEx() {
    KEMathEx_instance = this;
  }
  protoOf(KEMathEx).exp_ws8oyl_k$ = function (a) {
    return mathOperation(this, a, KEMathEx$exp$lambda);
  };
  protoOf(KEMathEx).expF_80m2xm_k$ = function (a) {
    return mathOperation_0(this, a, KEMathEx$expF$lambda);
  };
  protoOf(KEMathEx).expCF_4luoi6_k$ = function (a) {
    return mathOperation_1(this, a, KEMathEx$expCF$lambda);
  };
  protoOf(KEMathEx).expCD_aq6t93_k$ = function (a) {
    return mathOperation_1(this, a, KEMathEx$expCD$lambda);
  };
  protoOf(KEMathEx).log_ff07zq_k$ = function (a) {
    return mathOperation(this, a, KEMathEx$log$lambda);
  };
  protoOf(KEMathEx).logF_l3dur7_k$ = function (a) {
    return mathOperation_0(this, a, KEMathEx$logF$lambda);
  };
  protoOf(KEMathEx).logCF_v6w0bd_k$ = function (a) {
    return mathOperation_1(this, a, KEMathEx$logCF$lambda);
  };
  protoOf(KEMathEx).logCD_g0moxc_k$ = function (a) {
    return mathOperation_1(this, a, KEMathEx$logCD$lambda);
  };
  protoOf(KEMathEx).sin_493g0y_k$ = function (a) {
    return mathOperation(this, a, KEMathEx$sin$lambda);
  };
  protoOf(KEMathEx).sinF_bx69nj_k$ = function (a) {
    return mathOperation_0(this, a, KEMathEx$sinF$lambda);
  };
  protoOf(KEMathEx).sinCF_o9ivjh_k$ = function (a) {
    return mathOperation_1(this, a, KEMathEx$sinCF$lambda);
  };
  protoOf(KEMathEx).sinCD_hnln0k_k$ = function (a) {
    return mathOperation_1(this, a, KEMathEx$sinCD$lambda);
  };
  protoOf(KEMathEx).cos_rsmb2l_k$ = function (a) {
    return mathOperation(this, a, KEMathEx$cos$lambda);
  };
  protoOf(KEMathEx).cosF_q75768_k$ = function (a) {
    return mathOperation_0(this, a, KEMathEx$cosF$lambda);
  };
  protoOf(KEMathEx).cosCF_1a7vvo_k$ = function (a) {
    return mathOperation_1(this, a, KEMathEx$cosCF$lambda);
  };
  protoOf(KEMathEx).cosCD_sbenbn_k$ = function (a) {
    return mathOperation_1(this, a, KEMathEx$cosCD$lambda);
  };
  var KEMathEx_instance;
  function KEMathEx_getInstance() {
    if (KEMathEx_instance == null)
      new KEMathEx();
    return KEMathEx_instance;
  }
  function KEStatistics() {
    KEStatistics_instance = this;
  }
  protoOf(KEStatistics).median_pmi500_k$ = function (a) {
    var size = a.get_size_woubt6_k$();
    var tmp;
    if (size === 1) {
      tmp = numberToDouble(first(a));
    } else if (size > 1) {
      var sorted_0 = sorted(a);
      var mid = size / 2 | 0;
      var tmp_0;
      if (!((size % 2 | 0) === 0)) {
        tmp_0 = numberToDouble(sorted_0.get_data_wokkxf_k$().get_c1px32_k$(mid));
      } else {
        tmp_0 = (numberToDouble(sorted_0.get_data_wokkxf_k$().get_c1px32_k$(mid - 1 | 0)) + numberToDouble(sorted_0.get_data_wokkxf_k$().get_c1px32_k$(mid))) / 2;
      }
      tmp = tmp_0;
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(KEStatistics).average_4l27s0_k$ = function (a, weights) {
    if (weights == null)
      return this.mean_i8qaph_k$(a);
    return numberToDouble(KEMath_getInstance().sum_9q6oq7_k$(times(a, weights))) / numberToDouble(KEMath_getInstance().sum_9q6oq7_k$(weights));
  };
  protoOf(KEStatistics).mean_i8qaph_k$ = function (a) {
    var ret = KEMath_getInstance().sum_9q6oq7_k$(a);
    return numberToDouble(ret) / a.get_size_woubt6_k$();
  };
  protoOf(KEStatistics).mean_grlo87_k$ = function (a, axis) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(a.get_dim_18j7c1_k$().get_d_1mhr5n_k$() > 1)) {
      // Inline function 'org.jetbrains.kotlinx.multik.kotlin.stat.KEStatistics.mean.<anonymous>' call
      var message = 'NDArray of dimension one, use the `mean` function without axis.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= axis ? axis < a.get_dim_18j7c1_k$().get_d_1mhr5n_k$() : false)) {
      // Inline function 'org.jetbrains.kotlinx.multik.kotlin.stat.KEStatistics.mean.<anonymous>' call
      var message_0 = 'axis ' + axis + ' is out of bounds for this ndarray of dimension ' + a.get_dim_18j7c1_k$().get_d_1mhr5n_k$() + '.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var newShape = remove(a.get_shape_iyi9a0_k$(), axis);
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var inductionVariable = 0;
    var last = newShape.length;
    while (inductionVariable < last) {
      var element = newShape[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = imul(accumulator, element);
    }
    var tmp$ret$3 = accumulator;
    var retData = initMemoryView(tmp$ret$3, DataType_DoubleDataType_getInstance());
    // Inline function 'kotlin.collections.mutableMapOf' call
    var indexMap = LinkedHashMap_init_$Create$();
    var inductionVariable_0 = 0;
    var last_0 = a.get_shape_iyi9a0_k$().length - 1 | 0;
    if (inductionVariable_0 <= last_0)
      $l$loop: do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        if (i === axis)
          continue $l$loop;
        // Inline function 'kotlin.collections.set' call
        var value = RInt__until_impl_2ge59w(get_r(0), a.get_shape_iyi9a0_k$()[i]);
        indexMap.put_4fpzoq_k$(i, value);
      }
       while (inductionVariable_0 <= last_0);
    var inductionVariable_1 = 0;
    var last_1 = a.get_shape_iyi9a0_k$()[axis];
    if (inductionVariable_1 < last_1)
      do {
        var index = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        // Inline function 'kotlin.collections.set' call
        var value_0 = new RInt(get_r(index));
        indexMap.put_4fpzoq_k$(axis, value_0);
        var t = slice(a, indexMap);
        var count = 0;
        var tmp2_iterator = t.iterator_jk1svi_k$();
        while (tmp2_iterator.hasNext_bitz1p_k$()) {
          var element_0 = tmp2_iterator.next_20eer_k$();
          var tmp4_index0 = count;
          retData.set_52lp9l_k$(tmp4_index0, retData.get_c1px32_k$(tmp4_index0) + numberToDouble(element_0));
          count = count + 1 | 0;
        }
      }
       while (inductionVariable_1 < last_1);
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.dimensionOf' call
    var dim = newShape.length;
    var tmp;
    switch (dim) {
      case 1:
        tmp = Companion_getInstance_1();
        break;
      case 2:
        tmp = Companion_getInstance_0();
        break;
      case 3:
        tmp = Companion_getInstance_4();
        break;
      case 4:
        tmp = Companion_getInstance_5();
        break;
      default:
        tmp = new DN(dim);
        break;
    }
    var tmp$ret$5 = isInterface(tmp, Dimension) ? tmp : THROW_CCE();
    return div(new NDArray(retData, 0, newShape, VOID, tmp$ret$5), a.get_shape_iyi9a0_k$()[axis]);
  };
  protoOf(KEStatistics).meanD2_kgxclo_k$ = function (a, axis) {
    return this.mean_grlo87_k$(a, axis);
  };
  protoOf(KEStatistics).meanD3_z7f7x0_k$ = function (a, axis) {
    return this.mean_grlo87_k$(a, axis);
  };
  protoOf(KEStatistics).meanD4_junqgk_k$ = function (a, axis) {
    return this.mean_grlo87_k$(a, axis);
  };
  protoOf(KEStatistics).meanDN_o7mljg_k$ = function (a, axis) {
    return this.mean_grlo87_k$(a, axis);
  };
  var KEStatistics_instance;
  function KEStatistics_getInstance() {
    if (KEStatistics_instance == null)
      new KEStatistics();
    return KEStatistics_instance;
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
    this_0.put_4fpzoq_k$(key, value);
  }
  var EngineInitializer_instance;
  function EngineInitializer_getInstance() {
    if (EngineInitializer_instance == null)
      new EngineInitializer();
    return EngineInitializer_instance;
  }
  //region block: post-declaration
  protoOf(KELinAlgEx).normF$default_x889r4_k$ = normF$default;
  protoOf(KELinAlgEx).norm$default_w2yvwb_k$ = norm$default;
  protoOf(KEStatistics).average$default_8r7m3b_k$ = average$default;
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
    var $org$jetbrains$kotlinx$multik$kotlin = $org$jetbrains$kotlinx$multik.kotlin || ($org$jetbrains$kotlinx$multik.kotlin = {});
    defineProp($org$jetbrains$kotlinx$multik$kotlin, 'initializer', get_initializer);
  }
  $jsExportAll$(_);
  _.$jsExportAll$ = $jsExportAll$;
  _.$_$ = _.$_$ || {};
  _.$_$.a = KEEngine;
  //endregion
  return _;
}));

//# sourceMappingURL=multik-multik-kotlin.js.map
