(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'multik-multik-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'multik-multik-core'.");
    }
    root['multik-multik-core'] = factory(typeof this['multik-multik-core'] === 'undefined' ? {} : this['multik-multik-core'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.ye;
  var THROW_CCE = kotlin_kotlin.$_$.pj;
  var Annotation = kotlin_kotlin.$_$.xi;
  var classMeta = kotlin_kotlin.$_$.id;
  var setMetadataFor = kotlin_kotlin.$_$.ze;
  var VOID = kotlin_kotlin.$_$.f;
  var isInterface = kotlin_kotlin.$_$.fe;
  var toString = kotlin_kotlin.$_$.ef;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var Long = kotlin_kotlin.$_$.jj;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nk;
  var Unit_getInstance = kotlin_kotlin.$_$.d5;
  var Map = kotlin_kotlin.$_$.p5;
  var objectMeta = kotlin_kotlin.$_$.xe;
  var objectCreate = kotlin_kotlin.$_$.we;
  var captureStack = kotlin_kotlin.$_$.cd;
  var Exception = kotlin_kotlin.$_$.fj;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.i1;
  var interfaceMeta = kotlin_kotlin.$_$.wd;
  var to = kotlin_kotlin.$_$.vk;
  var mutableMapOf = kotlin_kotlin.$_$.b9;
  var toList = kotlin_kotlin.$_$.ab;
  var THROW_IAE = kotlin_kotlin.$_$.qj;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h2;
  var Enum = kotlin_kotlin.$_$.dj;
  var numberToDouble = kotlin_kotlin.$_$.se;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.o4;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var isNaN_0 = kotlin_kotlin.$_$.jk;
  var isNaN_1 = kotlin_kotlin.$_$.kk;
  var toBits = kotlin_kotlin.$_$.sk;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.n4;
  var toBits_0 = kotlin_kotlin.$_$.tk;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.w1;
  var IndexOutOfBoundsException = kotlin_kotlin.$_$.ij;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.b1;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var Iterator = kotlin_kotlin.$_$.k5;
  var IntRange = kotlin_kotlin.$_$.nf;
  var arrayCopy = kotlin_kotlin.$_$.w5;
  var equals = kotlin_kotlin.$_$.md;
  var contentHashCode = kotlin_kotlin.$_$.p6;
  var contentHashCode_0 = kotlin_kotlin.$_$.o6;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.r1;
  var ensureNotNull = kotlin_kotlin.$_$.fk;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var getKClass = kotlin_kotlin.$_$.d;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.t4;
  var get_lastIndex = kotlin_kotlin.$_$.i8;
  var until = kotlin_kotlin.$_$.vf;
  var sliceArray = kotlin_kotlin.$_$.aa;
  var numberRangeToNumber = kotlin_kotlin.$_$.pe;
  var primitiveArrayConcat = kotlin_kotlin.$_$.e;
  var compareTo = kotlin_kotlin.$_$.jd;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var toIntArray = kotlin_kotlin.$_$.va;
  var first = kotlin_kotlin.$_$.o7;
  var contentEquals = kotlin_kotlin.$_$.j6;
  var contentToString = kotlin_kotlin.$_$.q6;
  var Iterable = kotlin_kotlin.$_$.j5;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.c2;
  var longArray = kotlin_kotlin.$_$.ne;
  var get_indices = kotlin_kotlin.$_$.z7;
  var get_lastIndex_0 = kotlin_kotlin.$_$.m8;
  var floatArrayIterator = kotlin_kotlin.$_$.od;
  var contentEquals_0 = kotlin_kotlin.$_$.f6;
  var getNumberHashCode = kotlin_kotlin.$_$.qd;
  var get_indices_0 = kotlin_kotlin.$_$.x7;
  var intArrayIterator = kotlin_kotlin.$_$.vd;
  var get_indices_1 = kotlin_kotlin.$_$.a8;
  var get_lastIndex_1 = kotlin_kotlin.$_$.h8;
  var doubleArrayIterator = kotlin_kotlin.$_$.ld;
  var contentEquals_1 = kotlin_kotlin.$_$.h6;
  var get_indices_2 = kotlin_kotlin.$_$.v7;
  var get_lastIndex_2 = kotlin_kotlin.$_$.j8;
  var longArrayIterator = kotlin_kotlin.$_$.le;
  var copyOf = kotlin_kotlin.$_$.w6;
  var contentEquals_2 = kotlin_kotlin.$_$.i6;
  var get_indices_3 = kotlin_kotlin.$_$.u7;
  var get_lastIndex_3 = kotlin_kotlin.$_$.n8;
  var shortArrayIterator = kotlin_kotlin.$_$.af;
  var contentEquals_3 = kotlin_kotlin.$_$.m6;
  var toShort = kotlin_kotlin.$_$.df;
  var get_indices_4 = kotlin_kotlin.$_$.y7;
  var get_lastIndex_4 = kotlin_kotlin.$_$.l8;
  var byteArrayIterator = kotlin_kotlin.$_$.bd;
  var contentEquals_4 = kotlin_kotlin.$_$.k6;
  var toByte = kotlin_kotlin.$_$.bf;
  var first_0 = kotlin_kotlin.$_$.q7;
  var mapOf = kotlin_kotlin.$_$.u8;
  var ClassCastException_init_$Create$ = kotlin_kotlin.$_$.e1;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.p4;
  var lazy = kotlin_kotlin.$_$.mk;
  var hashCode = kotlin_kotlin.$_$.ud;
  var joinToString = kotlin_kotlin.$_$.e8;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.u1;
  var KProperty1 = kotlin_kotlin.$_$.zf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sd;
  var isNumber = kotlin_kotlin.$_$.he;
  var toSet = kotlin_kotlin.$_$.kb;
  var reversedArray = kotlin_kotlin.$_$.r9;
  var toList_0 = kotlin_kotlin.$_$.wa;
  var withIndex = kotlin_kotlin.$_$.sb;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c6;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var minus = kotlin_kotlin.$_$.y8;
  var sliceArray_0 = kotlin_kotlin.$_$.z9;
  var toMutableList = kotlin_kotlin.$_$.eb;
  var sorted = kotlin_kotlin.$_$.fa;
  var listOf = kotlin_kotlin.$_$.q8;
  var Collection = kotlin_kotlin.$_$.f5;
  var toMutableList_0 = kotlin_kotlin.$_$.db;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.j1;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.c1;
  var repeat = kotlin_kotlin.$_$.qh;
  var isEmpty = kotlin_kotlin.$_$.lf;
  var ClosedRange = kotlin_kotlin.$_$.mf;
  var sort = kotlin_kotlin.$_$.ha;
  var sort_0 = kotlin_kotlin.$_$.ma;
  var sort_1 = kotlin_kotlin.$_$.ja;
  var sort_2 = kotlin_kotlin.$_$.la;
  var sort_3 = kotlin_kotlin.$_$.ka;
  var sort_4 = kotlin_kotlin.$_$.ia;
  var Exception_init_$Create$_0 = kotlin_kotlin.$_$.h1;
  var numberToByte = kotlin_kotlin.$_$.qe;
  var numberToShort = kotlin_kotlin.$_$.ve;
  var numberToLong = kotlin_kotlin.$_$.ue;
  var numberToInt = kotlin_kotlin.$_$.te;
  var List = kotlin_kotlin.$_$.n5;
  var checkIndexOverflow = kotlin_kotlin.$_$.a6;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  //endregion
  //region block: pre-declaration
  setMetadataFor(ExperimentalMultikApi, 'ExperimentalMultikApi', classMeta, VOID, [Annotation]);
  setMetadataFor(EngineType, 'EngineType', classMeta);
  setMetadataFor(Engine, 'Engine', classMeta);
  setMetadataFor(Companion, 'Companion', objectMeta, Engine);
  setMetadataFor(DefaultEngineType, 'DefaultEngineType', objectMeta, EngineType);
  setMetadataFor(EngineMultikException, 'EngineMultikException', classMeta, Exception, VOID, EngineMultikException_init_$Create$);
  setMetadataFor(KEEngineType, 'KEEngineType', objectMeta, EngineType);
  setMetadataFor(NativeEngineType, 'NativeEngineType', objectMeta, EngineType);
  function getEngine$default(type, $super) {
    type = type === VOID ? null : type;
    return $super === VOID ? this.getEngine_g570lt_k$(type) : $super.getEngine_g570lt_k$.call(this, type);
  }
  setMetadataFor(EngineFactory, 'EngineFactory', interfaceMeta);
  setMetadataFor(Multik, 'Multik', objectMeta);
  setMetadataFor(LinAlg, 'LinAlg', interfaceMeta);
  function normF$default(mat, norm, $super) {
    norm = norm === VOID ? Norm_Fro_getInstance() : norm;
    return $super === VOID ? this.normF_epcj1p_k$(mat, norm) : $super.normF_epcj1p_k$.call(this, mat, norm);
  }
  function norm$default(mat, norm, $super) {
    norm = norm === VOID ? Norm_Fro_getInstance() : norm;
    return $super === VOID ? this.norm_8u084u_k$(mat, norm) : $super.norm_8u084u_k$.call(this, mat, norm);
  }
  setMetadataFor(LinAlgEx, 'LinAlgEx', interfaceMeta);
  setMetadataFor(Norm, 'Norm', classMeta, Enum);
  setMetadataFor(Math_0, 'Math', interfaceMeta);
  setMetadataFor(MathEx, 'MathEx', interfaceMeta);
  function average$default(a, weights, $super) {
    weights = weights === VOID ? null : weights;
    return $super === VOID ? this.average_4l27s0_k$(a, weights) : $super.average_4l27s0_k$.call(this, a, weights);
  }
  setMetadataFor(Statistics, 'Statistics', interfaceMeta);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(Complex, 'Complex', interfaceMeta);
  setMetadataFor(ComplexFloat, 'ComplexFloat', classMeta, VOID, [Complex]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(ComplexDouble, 'ComplexDouble', classMeta, VOID, [Complex]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(ComplexFloatIterator, 'ComplexFloatIterator', classMeta, VOID, [Iterator]);
  setMetadataFor(ArrayComplexFloatIterator, 'ArrayComplexFloatIterator', classMeta, ComplexFloatIterator);
  setMetadataFor(ComplexDoubleIterator, 'ComplexDoubleIterator', classMeta, VOID, [Iterator]);
  setMetadataFor(ArrayComplexDoubleIterator, 'ArrayComplexDoubleIterator', classMeta, ComplexDoubleIterator);
  setMetadataFor(ComplexFloatArray, 'ComplexFloatArray', classMeta, VOID, VOID, ComplexFloatArray);
  setMetadataFor(ComplexDoubleArray, 'ComplexDoubleArray', classMeta, VOID, VOID, ComplexDoubleArray);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(DataType, 'DataType', classMeta, Enum);
  setMetadataFor(Dimension, 'Dimension', interfaceMeta);
  setMetadataFor(DimN, 'DimN', interfaceMeta, VOID, [Dimension]);
  setMetadataFor(Dim4, 'Dim4', interfaceMeta, VOID, [DimN]);
  setMetadataFor(Dim3, 'Dim3', interfaceMeta, VOID, [Dim4]);
  setMetadataFor(Dim2, 'Dim2', interfaceMeta, VOID, [Dim3]);
  setMetadataFor(Dim1, 'Dim1', interfaceMeta, VOID, [Dim2]);
  setMetadataFor(D1, 'D1', classMeta, VOID, [Dimension, Dim1]);
  setMetadataFor(Companion_4, 'Companion', objectMeta, D1);
  setMetadataFor(D2, 'D2', classMeta, VOID, [Dimension, Dim2]);
  setMetadataFor(Companion_5, 'Companion', objectMeta, D2);
  setMetadataFor(D3, 'D3', classMeta, VOID, [Dimension, Dim3]);
  setMetadataFor(Companion_6, 'Companion', objectMeta, D3);
  setMetadataFor(D4, 'D4', classMeta, VOID, [Dimension, Dim4]);
  setMetadataFor(Companion_7, 'Companion', objectMeta, D4);
  setMetadataFor(DN, 'DN', classMeta, VOID, [Dimension, DimN]);
  function copyInto$default(destination, destinationOffset, startIndex, endIndex, $super) {
    destinationOffset = destinationOffset === VOID ? 0 : destinationOffset;
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? this.get_size_woubt6_k$() : endIndex;
    return $super === VOID ? this.copyInto_mp34x0_k$(destination, destinationOffset, startIndex, endIndex) : $super.copyInto_mp34x0_k$.call(this, destination, destinationOffset, startIndex, endIndex);
  }
  setMetadataFor(ImmutableMemoryView, 'ImmutableMemoryView', interfaceMeta, VOID, [Iterable]);
  setMetadataFor(MemoryView, 'MemoryView', classMeta, VOID, [ImmutableMemoryView]);
  setMetadataFor(MemoryViewFloatArray, 'MemoryViewFloatArray', classMeta, MemoryView);
  setMetadataFor(MemoryViewIntArray, 'MemoryViewIntArray', classMeta, MemoryView);
  setMetadataFor(MemoryViewDoubleArray, 'MemoryViewDoubleArray', classMeta, MemoryView);
  setMetadataFor(MemoryViewLongArray, 'MemoryViewLongArray', classMeta, MemoryView);
  setMetadataFor(MemoryViewShortArray, 'MemoryViewShortArray', classMeta, MemoryView);
  setMetadataFor(MemoryViewByteArray, 'MemoryViewByteArray', classMeta, MemoryView);
  setMetadataFor(MemoryViewComplexFloatArray, 'MemoryViewComplexFloatArray', classMeta, MemoryView);
  setMetadataFor(MemoryViewComplexDoubleArray, 'MemoryViewComplexDoubleArray', classMeta, MemoryView);
  function get_dtype() {
    return this.get_data_wokkxf_k$().get_dtype_iqhi0l_k$();
  }
  function cat$default(other, axis, $super) {
    axis = axis === VOID ? 0 : axis;
    return $super === VOID ? this.cat_ut5tya_k$(other, axis) : $super.cat_ut5tya_k$.call(this, other, axis);
  }
  function cat$default_0(other, axis, $super) {
    axis = axis === VOID ? 0 : axis;
    return $super === VOID ? this.cat_ajpab0_k$(other, axis) : $super.cat_ajpab0_k$.call(this, other, axis);
  }
  setMetadataFor(MultiArray, 'MultiArray', interfaceMeta);
  setMetadataFor(ReadableView, 'ReadableView', classMeta);
  setMetadataFor(MultiIndexProgression, 'MultiIndexProgression', classMeta);
  setMetadataFor(MultiIndexIterator, 'MultiIndexIterator', classMeta, VOID, [Iterator]);
  setMetadataFor(MutableMultiArray, 'MutableMultiArray', interfaceMeta, VOID, [MultiArray]);
  setMetadataFor(NDArray, 'NDArray', classMeta, VOID, [MutableMultiArray]);
  setMetadataFor(NDArrayIterator, 'NDArrayIterator', classMeta, VOID, [Iterator]);
  setMetadataFor(Indexing, 'Indexing', interfaceMeta);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(Slice, 'Slice', classMeta, VOID, [Indexing, ClosedRange]);
  setMetadataFor(RInt, 'RInt', classMeta, VOID, [Indexing]);
  setMetadataFor(CopyStrategy, 'CopyStrategy', classMeta, Enum);
  //endregion
  function ExperimentalMultikApi() {
  }
  protoOf(ExperimentalMultikApi).equals = function (other) {
    if (!(other instanceof ExperimentalMultikApi))
      return false;
    other instanceof ExperimentalMultikApi || THROW_CCE();
    return true;
  };
  protoOf(ExperimentalMultikApi).hashCode = function () {
    return 0;
  };
  protoOf(ExperimentalMultikApi).toString = function () {
    return '@org.jetbrains.kotlinx.multik.api.ExperimentalMultikApi()';
  };
  function zeros(_this__u8e3s4, dims, dtype) {
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.dimensionOf' call
    var dim = dims.length;
    var tmp;
    switch (dim) {
      case 1:
        tmp = Companion_getInstance_4();
        break;
      case 2:
        tmp = Companion_getInstance_5();
        break;
      case 3:
        tmp = Companion_getInstance_6();
        break;
      case 4:
        tmp = Companion_getInstance_7();
        break;
      default:
        tmp = new DN(dim);
        break;
    }
    var dim_0 = isInterface(tmp, Dimension) ? tmp : THROW_CCE();
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requireDimension' call
    var shapeSize = dims.length;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(dim_0.get_d_1mhr5n_k$() === shapeSize ? true : dim_0.get_d_1mhr5n_k$() > 4 ? shapeSize > 4 : false)) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requireDimension.<anonymous>' call
      var message = "Dimension doesn't match the size of the shape: dimension (" + dim_0.get_d_1mhr5n_k$() + ') != ' + shapeSize + ' shape size.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var inductionVariable = 0;
    var last = dims.length;
    while (inductionVariable < last) {
      var element = dims[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = imul(accumulator, element);
    }
    var size = accumulator;
    var data = initMemoryView_0(size, dtype);
    return new NDArray(data, VOID, dims, VOID, dim_0);
  }
  function identity(_this__u8e3s4, n, dtype) {
    // Inline function 'kotlin.intArrayOf' call
    var shape = new Int32Array([n, n]);
    var ret = new NDArray(initMemoryView_0(imul(n, n), dtype), VOID, shape, VOID, Companion_getInstance_5());
    var tmp;
    switch (dtype.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = 1;
        break;
      case 1:
        tmp = 1;
        break;
      case 2:
        tmp = 1;
        break;
      case 3:
        tmp = new Long(1, 0);
        break;
      case 4:
        tmp = 1.0;
        break;
      case 5:
        tmp = 1.0;
        break;
      case 6:
        tmp = Companion_getInstance_0().get_one_18iz2b_k$();
        break;
      case 7:
        tmp = Companion_getInstance_1().get_one_18iz2b_k$();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var one = tmp;
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        set_0(ret, i, i, !(one == null) ? one : THROW_CCE());
      }
       while (inductionVariable < n);
    return ret;
  }
  function EngineType(name) {
    this.name_1 = name;
  }
  protoOf(EngineType).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  function _get_enginesProvider__1usoxd($this) {
    return $this.enginesProvider_1;
  }
  function Companion() {
    Companion_instance = this;
    Engine.call(this);
    this.enginesProvider_1 = enginesProvider();
    this.defaultEngine_1 = null;
  }
  protoOf(Companion).set_defaultEngine_yvxq7h_k$ = function (_set____db54di) {
    this.defaultEngine_1 = _set____db54di;
  };
  protoOf(Companion).get_defaultEngine_85w2pm_k$ = function () {
    return this.defaultEngine_1;
  };
  protoOf(Companion).loadEngine_nkb6dk_k$ = function () {
    var tmp = this;
    var tmp_0;
    if (this.enginesProvider_1.containsKey_aw81wo_k$(DefaultEngineType_getInstance())) {
      tmp_0 = DefaultEngineType_getInstance();
    } else {
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.enginesProvider_1.isEmpty_y1axqb_k$()) {
        // Inline function 'kotlin.collections.iterator' call
        tmp_0 = this.enginesProvider_1.get_entries_p20ztl_k$().iterator_jk1svi_k$().next_20eer_k$().get_key_18j28a_k$();
      } else {
        tmp_0 = null;
      }
    }
    tmp.defaultEngine_1 = tmp_0;
  };
  protoOf(Companion).get_name_woqyms_k$ = function () {
    throw new EngineMultikException('For a companion object, the name is undefined.');
  };
  protoOf(Companion).get_type_wovaf7_k$ = function () {
    throw new EngineMultikException('For a companion object, the type is undefined.');
  };
  protoOf(Companion).getDefaultEngine_93vd8z_k$ = function () {
    var tmp0_safe_receiver = this.defaultEngine_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.name_1;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.let' call
      this.loadEngine_nkb6dk_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.kotlinx.multik.api.Companion.getDefaultEngine.<anonymous>' call
      var tmp0_safe_receiver_0 = Companion_getInstance().defaultEngine_1;
      tmp = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.name_1;
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Companion).setDefaultEngine_kclfl_k$ = function (type) {
    if (!this.enginesProvider_1.containsKey_aw81wo_k$(type))
      throw new EngineMultikException('This type of engine is not available.');
    this.defaultEngine_1 = type;
  };
  protoOf(Companion).getMath_18ur2a_k$ = function () {
    if (this.enginesProvider_1.isEmpty_y1axqb_k$())
      throw new EngineMultikException('The map of engines is empty. Can not provide Math implementation.');
    if (this.defaultEngine_1 == null) {
      this.loadEngine_nkb6dk_k$();
    }
    // Inline function 'kotlin.collections.get' call
    var this_0 = this.enginesProvider_1;
    var key = this.defaultEngine_1;
    var tmp0_safe_receiver = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).get_wei43m_k$(key);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getMath_18ur2a_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw new EngineMultikException('The used engine type is not defined.');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Companion).getLinAlg_9t8ny9_k$ = function () {
    if (this.enginesProvider_1.isEmpty_y1axqb_k$())
      throw new EngineMultikException('The map of engines is empty. Can not provide LinAlg implementation.');
    if (this.defaultEngine_1 == null) {
      this.loadEngine_nkb6dk_k$();
    }
    // Inline function 'kotlin.collections.get' call
    var this_0 = this.enginesProvider_1;
    var key = this.defaultEngine_1;
    var tmp0_safe_receiver = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).get_wei43m_k$(key);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getLinAlg_9t8ny9_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw new EngineMultikException('The used engine type is not defined.');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Companion).getStatistics_6hl59j_k$ = function () {
    if (this.enginesProvider_1.isEmpty_y1axqb_k$())
      throw new EngineMultikException('The map of engines is empty. Can not provide Statistics implementation.');
    if (this.defaultEngine_1 == null) {
      this.loadEngine_nkb6dk_k$();
    }
    // Inline function 'kotlin.collections.get' call
    var this_0 = this.enginesProvider_1;
    var key = this.defaultEngine_1;
    var tmp0_safe_receiver = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).get_wei43m_k$(key);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.getStatistics_6hl59j_k$();
    var tmp;
    if (tmp1_elvis_lhs == null) {
      throw new EngineMultikException('The used engine type is not defined.');
    } else {
      tmp = tmp1_elvis_lhs;
    }
    return tmp;
  };
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
  function EngineMultikException_init_$Init$($this) {
    EngineMultikException.call($this, '');
    return $this;
  }
  function EngineMultikException_init_$Create$() {
    var tmp = EngineMultikException_init_$Init$(objectCreate(protoOf(EngineMultikException)));
    captureStack(tmp, EngineMultikException_init_$Create$);
    return tmp;
  }
  function EngineMultikException(message) {
    Exception_init_$Init$(message, this);
    captureStack(this, EngineMultikException);
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
  function NativeEngineType() {
    NativeEngineType_instance = this;
    EngineType.call(this, 'NATIVE');
  }
  var NativeEngineType_instance;
  function NativeEngineType_getInstance() {
    if (NativeEngineType_instance == null)
      new NativeEngineType();
    return NativeEngineType_instance;
  }
  function EngineFactory() {
  }
  function _get__engines__ex3msn($this) {
    return $this._engines_1;
  }
  function Multik() {
    Multik_instance = this;
    this._engines_1 = mutableMapOf([to('DEFAULT', DefaultEngineType_getInstance()), to('KOTLIN', KEEngineType_getInstance()), to('NATIVE', NativeEngineType_getInstance())]);
  }
  protoOf(Multik).get_engine_cxlavf_k$ = function () {
    return Companion_getInstance().getDefaultEngine_93vd8z_k$();
  };
  protoOf(Multik).get_engines_p9bypk_k$ = function () {
    return this._engines_1;
  };
  protoOf(Multik).get_math_woqbtd_k$ = function () {
    return Companion_getInstance().getMath_18ur2a_k$();
  };
  protoOf(Multik).get_linalg_g69zlg_k$ = function () {
    return Companion_getInstance().getLinAlg_9t8ny9_k$();
  };
  protoOf(Multik).get_stat_woujdp_k$ = function () {
    return Companion_getInstance().getStatistics_6hl59j_k$();
  };
  protoOf(Multik).addEngine_wiodpf_k$ = function (type) {
    if (!this._engines_1.containsKey_aw81wo_k$(type.get_name_woqyms_k$())) {
      // Inline function 'kotlin.collections.set' call
      var this_0 = this._engines_1;
      var key = type.get_name_woqyms_k$();
      this_0.put_4fpzoq_k$(key, type);
    }
  };
  protoOf(Multik).setEngine_ijones_k$ = function (type) {
    // Inline function 'kotlin.collections.contains' call
    var this_0 = this.get_engines_p9bypk_k$();
    // Inline function 'kotlin.collections.containsKey' call
    var key = type.get_name_woqyms_k$();
    if ((isInterface(this_0, Map) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(key)) {
      Companion_getInstance().setDefaultEngine_kclfl_k$(type);
    }
  };
  protoOf(Multik).get_4gp7is_k$ = function (elements) {
    return toList(elements);
  };
  var Multik_instance;
  function Multik_getInstance() {
    if (Multik_instance == null)
      new Multik();
    return Multik_instance;
  }
  function LinAlg() {
  }
  function LinAlgEx() {
  }
  var Norm_Max_instance;
  var Norm_N1_instance;
  var Norm_Inf_instance;
  var Norm_Fro_instance;
  function values() {
    return [Norm_Max_getInstance(), Norm_N1_getInstance(), Norm_Inf_getInstance(), Norm_Fro_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'Max':
        return Norm_Max_getInstance();
      case 'N1':
        return Norm_N1_getInstance();
      case 'Inf':
        return Norm_Inf_getInstance();
      case 'Fro':
        return Norm_Fro_getInstance();
      default:
        Norm_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Norm_entriesInitialized;
  function Norm_initEntries() {
    if (Norm_entriesInitialized)
      return Unit_getInstance();
    Norm_entriesInitialized = true;
    Norm_Max_instance = new Norm('Max', 0, _Char___init__impl__6a9atx(77));
    Norm_N1_instance = new Norm('N1', 1, _Char___init__impl__6a9atx(49));
    Norm_Inf_instance = new Norm('Inf', 2, _Char___init__impl__6a9atx(73));
    Norm_Fro_instance = new Norm('Fro', 3, _Char___init__impl__6a9atx(70));
  }
  function Norm(name, ordinal, lapackCode) {
    Enum.call(this, name, ordinal);
    this.lapackCode_1 = lapackCode;
  }
  protoOf(Norm).get_lapackCode_y5s1ba_k$ = function () {
    return this.lapackCode_1;
  };
  function Norm_Max_getInstance() {
    Norm_initEntries();
    return Norm_Max_instance;
  }
  function Norm_N1_getInstance() {
    Norm_initEntries();
    return Norm_N1_instance;
  }
  function Norm_Inf_getInstance() {
    Norm_initEntries();
    return Norm_Inf_instance;
  }
  function Norm_Fro_getInstance() {
    Norm_initEntries();
    return Norm_Fro_instance;
  }
  function dot(_this__u8e3s4, a, b) {
    return _this__u8e3s4.get_linAlgEx_com6e1_k$().dotMM_nz33tu_k$(a, b);
  }
  function Math_0() {
  }
  function MathEx() {
  }
  function Statistics() {
  }
  function ComplexFloat_init_$Init$(re, im, $this) {
    ComplexFloat.call($this, numberToDouble(re), numberToDouble(im));
    return $this;
  }
  function ComplexFloat_init_$Create$(re, im) {
    return ComplexFloat_init_$Init$(re, im, objectCreate(protoOf(ComplexFloat)));
  }
  function ComplexFloat_init_$Init$_0(re, $this) {
    ComplexFloat.call($this, numberToDouble(re), 0.0);
    return $this;
  }
  function ComplexFloat_init_$Create$_0(re) {
    return ComplexFloat_init_$Init$_0(re, objectCreate(protoOf(ComplexFloat)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
  }
  protoOf(Companion_0).get_one_18iz2b_k$ = function () {
    return new ComplexFloat(1.0, 0.0);
  };
  protoOf(Companion_0).get_zero_woypkh_k$ = function () {
    return new ComplexFloat(0.0, 0.0);
  };
  protoOf(Companion_0).get_NaN_18jnv2_k$ = function () {
    return new ComplexFloat(FloatCompanionObject_getInstance().get_NaN_18jnv2_k$(), FloatCompanionObject_getInstance().get_NaN_18jnv2_k$());
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ComplexFloat(re, im) {
    Companion_getInstance_0();
    this.re_1 = re;
    this.im_1 = im;
  }
  protoOf(ComplexFloat).get_re_kntnpg_k$ = function () {
    return this.re_1;
  };
  protoOf(ComplexFloat).get_im_kntnwz_k$ = function () {
    return this.im_1;
  };
  protoOf(ComplexFloat).conjugate_b863jc_k$ = function () {
    return new ComplexFloat(this.re_1, -this.im_1);
  };
  protoOf(ComplexFloat).abs_22cy_k$ = function () {
    // Inline function 'kotlin.math.sqrt' call
    var x = this.re_1 * this.re_1 + this.im_1 * this.im_1;
    return Math.sqrt(x);
  };
  protoOf(ComplexFloat).angle_1jch5f_k$ = function () {
    // Inline function 'kotlin.math.atan2' call
    var y = this.im_1;
    var x = this.re_1;
    return Math.atan2(y, x);
  };
  protoOf(ComplexFloat).plus_hard1a_k$ = function (other) {
    return new ComplexFloat(this.re_1 + other, this.im_1);
  };
  protoOf(ComplexFloat).plus_7d0ae6_k$ = function (other) {
    return new ComplexFloat(this.re_1 + other, this.im_1);
  };
  protoOf(ComplexFloat).plus_gv6ohq_k$ = function (other) {
    return new ComplexFloat(this.re_1 + other, this.im_1);
  };
  protoOf(ComplexFloat).plus_r93sks_k$ = function (other) {
    return new ComplexFloat(this.re_1 + other.toFloat_jhbgwv_k$(), this.im_1);
  };
  protoOf(ComplexFloat).plus_xnnzhe_k$ = function (other) {
    return new ComplexFloat(this.re_1 + other, this.im_1);
  };
  protoOf(ComplexFloat).plus_pjpmi4_k$ = function (other) {
    return new ComplexDouble(this.re_1 + other, this.im_1);
  };
  protoOf(ComplexFloat).plus_8lqpe3_k$ = function (other) {
    return new ComplexFloat(this.re_1 + other.re_1, this.im_1 + other.im_1);
  };
  protoOf(ComplexFloat).plus_nev5n6_k$ = function (other) {
    return new ComplexDouble(this.re_1 + other.re_1, this.im_1 + other.im_1);
  };
  protoOf(ComplexFloat).minus_m4jcmg_k$ = function (other) {
    return new ComplexFloat(this.re_1 - other, this.im_1);
  };
  protoOf(ComplexFloat).minus_t8tq14_k$ = function (other) {
    return new ComplexFloat(this.re_1 - other, this.im_1);
  };
  protoOf(ComplexFloat).minus_vfk7ag_k$ = function (other) {
    return new ComplexFloat(this.re_1 - other, this.im_1);
  };
  protoOf(ComplexFloat).minus_mfbszm_k$ = function (other) {
    return new ComplexFloat(this.re_1 - other.toFloat_jhbgwv_k$(), this.im_1);
  };
  protoOf(ComplexFloat).minus_brujug_k$ = function (other) {
    return new ComplexFloat(this.re_1 - other, this.im_1);
  };
  protoOf(ComplexFloat).minus_ur3tau_k$ = function (other) {
    return new ComplexDouble(this.re_1 - other, this.im_1);
  };
  protoOf(ComplexFloat).minus_vtej6p_k$ = function (other) {
    return new ComplexFloat(this.re_1 - other.re_1, this.im_1 - other.im_1);
  };
  protoOf(ComplexFloat).minus_wp99j0_k$ = function (other) {
    return new ComplexDouble(this.re_1 - other.re_1, this.im_1 - other.im_1);
  };
  protoOf(ComplexFloat).times_l3vm36_k$ = function (other) {
    return new ComplexFloat(this.re_1 * other, this.im_1 * other);
  };
  protoOf(ComplexFloat).times_pycwwe_k$ = function (other) {
    return new ComplexFloat(this.re_1 * other, this.im_1 * other);
  };
  protoOf(ComplexFloat).times_kr2a3y_k$ = function (other) {
    return new ComplexFloat(this.re_1 * other, this.im_1 * other);
  };
  protoOf(ComplexFloat).times_nfzjiw_k$ = function (other) {
    return new ComplexFloat(this.re_1 * other.toFloat_jhbgwv_k$(), this.im_1 * other.toFloat_jhbgwv_k$());
  };
  protoOf(ComplexFloat).times_422v76_k$ = function (other) {
    return new ComplexFloat(this.re_1 * other, this.im_1 * other);
  };
  protoOf(ComplexFloat).times_qz1dds_k$ = function (other) {
    return new ComplexDouble(this.re_1 * other, this.im_1 * other);
  };
  protoOf(ComplexFloat).times_c0fmev_k$ = function (other) {
    return new ComplexFloat(this.re_1 * other.re_1 - this.im_1 * other.im_1, this.re_1 * other.im_1 + other.re_1 * this.im_1);
  };
  protoOf(ComplexFloat).times_czwimy_k$ = function (other) {
    return new ComplexDouble(this.re_1 * other.re_1 - this.im_1 * other.im_1, this.re_1 * other.im_1 + other.re_1 * this.im_1);
  };
  protoOf(ComplexFloat).div_op7y5j_k$ = function (other) {
    return new ComplexFloat(this.re_1 / other, this.im_1 / other);
  };
  protoOf(ComplexFloat).div_haijbb_k$ = function (other) {
    return new ComplexFloat(this.re_1 / other, this.im_1 / other);
  };
  protoOf(ComplexFloat).div_fxyyjd_k$ = function (other) {
    return new ComplexFloat(this.re_1 / other, this.im_1 / other);
  };
  protoOf(ComplexFloat).div_jun7gj_k$ = function (other) {
    return new ComplexFloat(this.re_1 / other.toFloat_jhbgwv_k$(), this.im_1 / other.toFloat_jhbgwv_k$());
  };
  protoOf(ComplexFloat).div_nq5qk9_k$ = function (other) {
    return new ComplexFloat(this.re_1 / other, this.im_1 / other);
  };
  protoOf(ComplexFloat).div_k6dnjf_k$ = function (other) {
    return new ComplexDouble(this.re_1 / other, this.im_1 / other);
  };
  protoOf(ComplexFloat).div_ra8ixu_k$ = function (other) {
    var tmp;
    // Inline function 'kotlin.math.abs' call
    var x = other.re_1;
    var tmp_0 = Math.abs(x);
    // Inline function 'kotlin.math.abs' call
    var x_0 = other.im_1;
    if (tmp_0 > Math.abs(x_0)) {
      var dr = other.im_1 / other.re_1;
      var dd = other.re_1 + dr * other.im_1;
      if (isNaN_0(dd) ? true : dd === 0.0)
        throw ArithmeticException_init_$Create$('Division by zero or infinity');
      tmp = new ComplexFloat((this.re_1 + this.im_1 * dr) / dd, (this.im_1 - this.re_1 * dr) / dd);
    } else {
      if (other.im_1 === 0.0) {
        throw ArithmeticException_init_$Create$('Division by zero');
      } else {
        var dr_0 = other.re_1 / other.im_1;
        var dd_0 = other.im_1 + dr_0 * other.re_1;
        if (isNaN_0(dd_0) ? true : dd_0 === 0.0)
          throw ArithmeticException_init_$Create$('Division by zero or infinity');
        tmp = new ComplexFloat((this.re_1 * dr_0 + this.im_1) / dd_0, (this.im_1 * dr_0 - this.re_1) / dd_0);
      }
    }
    return tmp;
  };
  protoOf(ComplexFloat).div_y9b5uj_k$ = function (other) {
    var tmp;
    // Inline function 'kotlin.math.abs' call
    var x = other.re_1;
    var tmp_0 = Math.abs(x);
    // Inline function 'kotlin.math.abs' call
    var x_0 = other.im_1;
    if (tmp_0 > Math.abs(x_0)) {
      var dr = other.im_1 / other.re_1;
      var dd = other.re_1 + dr * other.im_1;
      if (isNaN_1(dd) ? true : dd === 0.0)
        throw ArithmeticException_init_$Create$('Division by zero or infinity');
      tmp = new ComplexDouble((this.re_1 + this.im_1 * dr) / dd, (this.im_1 - this.re_1 * dr) / dd);
    } else {
      if (other.im_1 === 0.0) {
        throw ArithmeticException_init_$Create$('Division by zero');
      } else {
        var dr_0 = other.re_1 / other.im_1;
        var dd_0 = other.im_1 + dr_0 * other.re_1;
        if (isNaN_1(dd_0) ? true : dd_0 === 0.0)
          throw ArithmeticException_init_$Create$('Division by zero or infinity');
        tmp = new ComplexDouble((this.re_1 * dr_0 + this.im_1) / dd_0, (this.im_1 * dr_0 - this.re_1) / dd_0);
      }
    }
    return tmp;
  };
  protoOf(ComplexFloat).unaryPlus_g9fn1l_k$ = function () {
    return this;
  };
  protoOf(ComplexFloat).unaryMinus_6uz0qp_k$ = function () {
    return new ComplexFloat(-this.re_1, -this.im_1);
  };
  protoOf(ComplexFloat).component1_7eebsc_k$ = function () {
    return this.re_1;
  };
  protoOf(ComplexFloat).component2_7eebsb_k$ = function () {
    return this.im_1;
  };
  protoOf(ComplexFloat).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      if (other instanceof ComplexFloat) {
        tmp = this.re_1 === other.re_1 ? this.im_1 === other.im_1 : false;
      } else {
        tmp = false;
      }
    }
    return tmp;
  };
  protoOf(ComplexFloat).hashCode = function () {
    return imul(31, toBits(this.re_1)) + toBits(this.im_1) | 0;
  };
  protoOf(ComplexFloat).toString = function () {
    return '' + this.re_1 + '+(' + this.im_1 + ')i';
  };
  function ComplexDouble_init_$Init$(re, im, $this) {
    ComplexDouble.call($this, numberToDouble(re), numberToDouble(im));
    return $this;
  }
  function ComplexDouble_init_$Create$(re, im) {
    return ComplexDouble_init_$Init$(re, im, objectCreate(protoOf(ComplexDouble)));
  }
  function ComplexDouble_init_$Init$_0(re, $this) {
    ComplexDouble.call($this, numberToDouble(re), 0.0);
    return $this;
  }
  function ComplexDouble_init_$Create$_0(re) {
    return ComplexDouble_init_$Init$_0(re, objectCreate(protoOf(ComplexDouble)));
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).get_one_18iz2b_k$ = function () {
    return new ComplexDouble(1.0, 0.0);
  };
  protoOf(Companion_1).get_zero_woypkh_k$ = function () {
    return new ComplexDouble(0.0, 0.0);
  };
  protoOf(Companion_1).get_NaN_18jnv2_k$ = function () {
    return new ComplexDouble(DoubleCompanionObject_getInstance().get_NaN_18jnv2_k$(), DoubleCompanionObject_getInstance().get_NaN_18jnv2_k$());
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function ComplexDouble(re, im) {
    Companion_getInstance_1();
    this.re_1 = re;
    this.im_1 = im;
  }
  protoOf(ComplexDouble).get_re_kntnpg_k$ = function () {
    return this.re_1;
  };
  protoOf(ComplexDouble).get_im_kntnwz_k$ = function () {
    return this.im_1;
  };
  protoOf(ComplexDouble).conjugate_b863jc_k$ = function () {
    return new ComplexDouble(this.re_1, -this.im_1);
  };
  protoOf(ComplexDouble).abs_22cy_k$ = function () {
    // Inline function 'kotlin.math.sqrt' call
    var x = this.re_1 * this.re_1 + this.im_1 * this.im_1;
    return Math.sqrt(x);
  };
  protoOf(ComplexDouble).angle_1jch5f_k$ = function () {
    // Inline function 'kotlin.math.atan2' call
    var y = this.im_1;
    var x = this.re_1;
    return Math.atan2(y, x);
  };
  protoOf(ComplexDouble).plus_hard1a_k$ = function (other) {
    return new ComplexDouble(this.re_1 + other, this.im_1);
  };
  protoOf(ComplexDouble).plus_7d0ae6_k$ = function (other) {
    return new ComplexDouble(this.re_1 + other, this.im_1);
  };
  protoOf(ComplexDouble).plus_gv6ohq_k$ = function (other) {
    return new ComplexDouble(this.re_1 + other, this.im_1);
  };
  protoOf(ComplexDouble).plus_r93sks_k$ = function (other) {
    return new ComplexDouble(this.re_1 + other.toDouble_ygsx0s_k$(), this.im_1);
  };
  protoOf(ComplexDouble).plus_xnnzhe_k$ = function (other) {
    return new ComplexDouble(this.re_1 + other, this.im_1);
  };
  protoOf(ComplexDouble).plus_pjpmi4_k$ = function (other) {
    return new ComplexDouble(this.re_1 + other, this.im_1);
  };
  protoOf(ComplexDouble).plus_8lqpe3_k$ = function (other) {
    return new ComplexDouble(this.re_1 + other.re_1, this.im_1 + other.im_1);
  };
  protoOf(ComplexDouble).plus_nev5n6_k$ = function (other) {
    return new ComplexDouble(this.re_1 + other.re_1, this.im_1 + other.im_1);
  };
  protoOf(ComplexDouble).minus_m4jcmg_k$ = function (other) {
    return new ComplexDouble(this.re_1 - other, this.im_1);
  };
  protoOf(ComplexDouble).minus_t8tq14_k$ = function (other) {
    return new ComplexDouble(this.re_1 - other, this.im_1);
  };
  protoOf(ComplexDouble).minus_vfk7ag_k$ = function (other) {
    return new ComplexDouble(this.re_1 - other, this.im_1);
  };
  protoOf(ComplexDouble).minus_mfbszm_k$ = function (other) {
    return new ComplexDouble(this.re_1 - other.toDouble_ygsx0s_k$(), this.im_1);
  };
  protoOf(ComplexDouble).minus_brujug_k$ = function (other) {
    return new ComplexDouble(this.re_1 - other, this.im_1);
  };
  protoOf(ComplexDouble).minus_ur3tau_k$ = function (other) {
    return new ComplexDouble(this.re_1 - other, this.im_1);
  };
  protoOf(ComplexDouble).minus_vtej6p_k$ = function (other) {
    return new ComplexDouble(this.re_1 - other.re_1, this.im_1 - other.im_1);
  };
  protoOf(ComplexDouble).minus_wp99j0_k$ = function (other) {
    return new ComplexDouble(this.re_1 - other.re_1, this.im_1 - other.im_1);
  };
  protoOf(ComplexDouble).times_l3vm36_k$ = function (other) {
    return new ComplexDouble(this.re_1 * other, this.im_1 * other);
  };
  protoOf(ComplexDouble).times_pycwwe_k$ = function (other) {
    return new ComplexDouble(this.re_1 * other, this.im_1 * other);
  };
  protoOf(ComplexDouble).times_kr2a3y_k$ = function (other) {
    return new ComplexDouble(this.re_1 * other, this.im_1 * other);
  };
  protoOf(ComplexDouble).times_nfzjiw_k$ = function (other) {
    return new ComplexDouble(this.re_1 * other.toDouble_ygsx0s_k$(), this.im_1 * other.toDouble_ygsx0s_k$());
  };
  protoOf(ComplexDouble).times_422v76_k$ = function (other) {
    return new ComplexDouble(this.re_1 * other, this.im_1 * other);
  };
  protoOf(ComplexDouble).times_qz1dds_k$ = function (other) {
    return new ComplexDouble(this.re_1 * other, this.im_1 * other);
  };
  protoOf(ComplexDouble).times_c0fmev_k$ = function (other) {
    return new ComplexDouble(this.re_1 * other.re_1 - this.im_1 * other.im_1, this.re_1 * other.im_1 + other.re_1 * this.im_1);
  };
  protoOf(ComplexDouble).times_czwimy_k$ = function (other) {
    return new ComplexDouble(this.re_1 * other.re_1 - this.im_1 * other.im_1, this.re_1 * other.im_1 + other.re_1 * this.im_1);
  };
  protoOf(ComplexDouble).div_op7y5j_k$ = function (other) {
    return new ComplexDouble(this.re_1 / other, this.im_1 / other);
  };
  protoOf(ComplexDouble).div_haijbb_k$ = function (other) {
    return new ComplexDouble(this.re_1 / other, this.im_1 / other);
  };
  protoOf(ComplexDouble).div_fxyyjd_k$ = function (other) {
    return new ComplexDouble(this.re_1 / other, this.im_1 / other);
  };
  protoOf(ComplexDouble).div_jun7gj_k$ = function (other) {
    return new ComplexDouble(this.re_1 / other.toDouble_ygsx0s_k$(), this.im_1 / other.toDouble_ygsx0s_k$());
  };
  protoOf(ComplexDouble).div_nq5qk9_k$ = function (other) {
    return new ComplexDouble(this.re_1 / other, this.im_1 / other);
  };
  protoOf(ComplexDouble).div_k6dnjf_k$ = function (other) {
    return new ComplexDouble(this.re_1 / other, this.im_1 / other);
  };
  protoOf(ComplexDouble).div_ra8ixu_k$ = function (other) {
    var tmp;
    // Inline function 'kotlin.math.abs' call
    var x = other.re_1;
    var tmp_0 = Math.abs(x);
    // Inline function 'kotlin.math.abs' call
    var x_0 = other.im_1;
    if (tmp_0 > Math.abs(x_0)) {
      var dr = other.im_1 / other.re_1;
      var dd = other.re_1 + dr * other.im_1;
      if (isNaN_0(dd) ? true : dd === 0.0)
        throw ArithmeticException_init_$Create$('Division by zero or infinity');
      tmp = new ComplexDouble((this.re_1 + this.im_1 * dr) / dd, (this.im_1 - this.re_1 * dr) / dd);
    } else {
      if (other.im_1 === 0.0) {
        throw ArithmeticException_init_$Create$('Division by zero');
      } else {
        var dr_0 = other.re_1 / other.im_1;
        var dd_0 = other.im_1 + dr_0 * other.re_1;
        if (isNaN_0(dd_0) ? true : dd_0 === 0.0)
          throw ArithmeticException_init_$Create$('Division by zero or infinity');
        tmp = new ComplexDouble((this.re_1 * dr_0 + this.im_1) / dd_0, (this.im_1 * dr_0 - this.re_1) / dd_0);
      }
    }
    return tmp;
  };
  protoOf(ComplexDouble).div_y9b5uj_k$ = function (other) {
    var tmp;
    // Inline function 'kotlin.math.abs' call
    var x = other.re_1;
    var tmp_0 = Math.abs(x);
    // Inline function 'kotlin.math.abs' call
    var x_0 = other.im_1;
    if (tmp_0 > Math.abs(x_0)) {
      var dr = other.im_1 / other.re_1;
      var dd = other.re_1 + dr * other.im_1;
      if (isNaN_1(dd) ? true : dd === 0.0)
        throw ArithmeticException_init_$Create$('Division by zero or infinity');
      tmp = new ComplexDouble((this.re_1 + this.im_1 * dr) / dd, (this.im_1 - this.re_1 * dr) / dd);
    } else {
      if (other.im_1 === 0.0) {
        throw ArithmeticException_init_$Create$('Division by zero');
      } else {
        var dr_0 = other.re_1 / other.im_1;
        var dd_0 = other.im_1 + dr_0 * other.re_1;
        if (isNaN_1(dd_0) ? true : dd_0 === 0.0)
          throw ArithmeticException_init_$Create$('Division by zero or infinity');
        tmp = new ComplexDouble((this.re_1 * dr_0 + this.im_1) / dd_0, (this.im_1 * dr_0 - this.re_1) / dd_0);
      }
    }
    return tmp;
  };
  protoOf(ComplexDouble).unaryPlus_g9fn1l_k$ = function () {
    return this;
  };
  protoOf(ComplexDouble).unaryMinus_6uz0qp_k$ = function () {
    return new ComplexDouble(-this.re_1, -this.im_1);
  };
  protoOf(ComplexDouble).component1_7eebsc_k$ = function () {
    return this.re_1;
  };
  protoOf(ComplexDouble).component2_7eebsb_k$ = function () {
    return this.im_1;
  };
  protoOf(ComplexDouble).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      if (other instanceof ComplexDouble) {
        tmp = this.re_1 === other.re_1 ? this.im_1 === other.im_1 : false;
      } else {
        tmp = false;
      }
    }
    return tmp;
  };
  protoOf(ComplexDouble).hashCode = function () {
    return imul(31, toBits_0(this.re_1).hashCode()) + toBits_0(this.im_1).hashCode() | 0;
  };
  protoOf(ComplexDouble).toString = function () {
    return '' + this.re_1 + '+(' + this.im_1 + ')i';
  };
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).r_d9edae_k$ = function (re) {
    return new ComplexFloat(re, 0.0);
  };
  protoOf(Companion_2).r_9l1pp0_k$ = function (re) {
    return new ComplexDouble(re, 0.0);
  };
  protoOf(Companion_2).i_1rbo9d_k$ = function (im) {
    return new ComplexFloat(0.0, im);
  };
  protoOf(Companion_2).i_5gahj7_k$ = function (im) {
    return new ComplexDouble(0.0, im);
  };
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Complex() {
  }
  function iterator(array) {
    return new ArrayComplexFloatIterator(array);
  }
  function iterator_0(array) {
    return new ArrayComplexDoubleIterator(array);
  }
  function _get_array__jslnqg($this) {
    return $this.array_1;
  }
  function _set_index__fyfqnn($this, _set____db54di) {
    $this.index_1 = _set____db54di;
  }
  function _get_index__g2optt($this) {
    return $this.index_1;
  }
  function ArrayComplexFloatIterator(array) {
    ComplexFloatIterator.call(this);
    this.array_1 = array;
    this.index_1 = 0;
  }
  protoOf(ArrayComplexFloatIterator).hasNext_bitz1p_k$ = function () {
    return this.index_1 < this.array_1.get_size_woubt6_k$();
  };
  protoOf(ArrayComplexFloatIterator).nextComplexFloat_kk41sv_k$ = function () {
    var tmp;
    try {
      var tmp1 = this.index_1;
      this.index_1 = tmp1 + 1 | 0;
      tmp = this.array_1.get_c1px32_k$(tmp1);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof IndexOutOfBoundsException) {
        var e = $p;
        this.index_1 = this.index_1 - 1 | 0;
        throw NoSuchElementException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  function _get_array__jslnqg_0($this) {
    return $this.array_1;
  }
  function _set_index__fyfqnn_0($this, _set____db54di) {
    $this.index_1 = _set____db54di;
  }
  function _get_index__g2optt_0($this) {
    return $this.index_1;
  }
  function ArrayComplexDoubleIterator(array) {
    ComplexDoubleIterator.call(this);
    this.array_1 = array;
    this.index_1 = 0;
  }
  protoOf(ArrayComplexDoubleIterator).hasNext_bitz1p_k$ = function () {
    return this.index_1 < this.array_1.get_size_woubt6_k$();
  };
  protoOf(ArrayComplexDoubleIterator).nextComplexDouble_2uuydu_k$ = function () {
    var tmp;
    try {
      var tmp1 = this.index_1;
      this.index_1 = tmp1 + 1 | 0;
      tmp = this.array_1.get_c1px32_k$(tmp1);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof IndexOutOfBoundsException) {
        var e = $p;
        this.index_1 = this.index_1 - 1 | 0;
        throw NoSuchElementException_init_$Create$(e.message);
      } else {
        throw $p;
      }
    }
    return tmp;
  };
  function _get__size__kqacr3($this) {
    return $this._size_1;
  }
  function _get_data__d5abxd($this) {
    return $this.data_1;
  }
  function ComplexFloatArray_init_$Init$(size, init, $this) {
    ComplexFloatArray.call($this, size);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_container = init(i);
        var re = tmp1_container.component1_7eebsc_k$();
        var im = tmp1_container.component2_7eebsb_k$();
        var index = imul(i, 2);
        $this.data_1[index] = re;
        $this.data_1[index + 1 | 0] = im;
      }
       while (inductionVariable < size);
    return $this;
  }
  function ComplexFloatArray_init_$Create$(size, init) {
    return ComplexFloatArray_init_$Init$(size, init, objectCreate(protoOf(ComplexFloatArray)));
  }
  function ComplexFloatArray(size) {
    size = size === VOID ? 0 : size;
    this.size_1 = size;
    this._size_1 = imul(this.size_1, 2);
    this.data_1 = new Float32Array(this._size_1);
  }
  protoOf(ComplexFloatArray).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(ComplexFloatArray).get_c1px32_k$ = function (index) {
    checkElementIndex(index, this.size_1);
    var i = index << 1;
    return new ComplexFloat(this.data_1[i], this.data_1[i + 1 | 0]);
  };
  protoOf(ComplexFloatArray).set_31o1op_k$ = function (index, value) {
    checkElementIndex(index, this.size_1);
    var i = index << 1;
    this.data_1[i] = value.get_re_kntnpg_k$();
    this.data_1[i + 1 | 0] = value.get_im_kntnwz_k$();
  };
  protoOf(ComplexFloatArray).getFlatArray_j8ml3q_k$ = function () {
    return this.data_1;
  };
  protoOf(ComplexFloatArray).iterator_jk1svi_k$ = function () {
    return iterator(this);
  };
  protoOf(ComplexFloatArray).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      if (other instanceof ComplexFloatArray) {
        tmp = contentEquals_5(this, other);
      } else {
        tmp = false;
      }
    }
    return tmp;
  };
  protoOf(ComplexFloatArray).hashCode = function () {
    return contentHashCode_1(this);
  };
  protoOf(ComplexFloatArray).toString = function () {
    var sb = StringBuilder_init_$Create$(2 + imul(this._size_1, 3) | 0);
    sb.append_22ad7x_k$('[');
    var i = 0;
    while (i < this._size_1) {
      if (i > 0) {
        sb.append_22ad7x_k$(', ');
      }
      var tmp = this.data_1[i];
      i = i + 1 | 0;
      sb.append_22ad7x_k$('' + tmp + ' + ' + this.data_1[i] + 'i');
      i = i + 1 | 0;
    }
    sb.append_22ad7x_k$(']');
    return sb.toString();
  };
  function _get__size__kqacr3_0($this) {
    return $this._size_1;
  }
  function _get_data__d5abxd_0($this) {
    return $this.data_1;
  }
  function ComplexDoubleArray_init_$Init$(size, init, $this) {
    ComplexDoubleArray.call($this, size);
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_container = init(i);
        var re = tmp1_container.component1_7eebsc_k$();
        var im = tmp1_container.component2_7eebsb_k$();
        var index = imul(i, 2);
        $this.data_1[index] = re;
        $this.data_1[index + 1 | 0] = im;
      }
       while (inductionVariable < size);
    return $this;
  }
  function ComplexDoubleArray_init_$Create$(size, init) {
    return ComplexDoubleArray_init_$Init$(size, init, objectCreate(protoOf(ComplexDoubleArray)));
  }
  function ComplexDoubleArray(size) {
    size = size === VOID ? 0 : size;
    this.size_1 = size;
    this._size_1 = imul(this.size_1, 2);
    this.data_1 = new Float64Array(this._size_1);
  }
  protoOf(ComplexDoubleArray).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(ComplexDoubleArray).get_c1px32_k$ = function (index) {
    checkElementIndex(index, this.size_1);
    var i = index << 1;
    return new ComplexDouble(this.data_1[i], this.data_1[i + 1 | 0]);
  };
  protoOf(ComplexDoubleArray).set_hzotmi_k$ = function (index, value) {
    checkElementIndex(index, this.size_1);
    var i = index << 1;
    this.data_1[i] = value.get_re_kntnpg_k$();
    this.data_1[i + 1 | 0] = value.get_im_kntnwz_k$();
  };
  protoOf(ComplexDoubleArray).getFlatArray_j8ml3q_k$ = function () {
    return this.data_1;
  };
  protoOf(ComplexDoubleArray).iterator_jk1svi_k$ = function () {
    return iterator_0(this);
  };
  protoOf(ComplexDoubleArray).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      if (other instanceof ComplexDoubleArray) {
        tmp = contentEquals_6(this, other);
      } else {
        tmp = false;
      }
    }
    return tmp;
  };
  protoOf(ComplexDoubleArray).hashCode = function () {
    return contentHashCode_2(this);
  };
  protoOf(ComplexDoubleArray).toString = function () {
    var sb = StringBuilder_init_$Create$(2 + imul(this._size_1, 3) | 0);
    sb.append_22ad7x_k$('[');
    var i = 0;
    while (i < this._size_1) {
      if (i > 0) {
        sb.append_22ad7x_k$(', ');
      }
      var tmp = this.data_1[i];
      i = i + 1 | 0;
      sb.append_22ad7x_k$('' + tmp + ' + ' + this.data_1[i] + 'i');
      i = i + 1 | 0;
    }
    sb.append_22ad7x_k$(']');
    return sb.toString();
  };
  function checkElementIndex(index, size) {
    if (index < 0 ? true : index >= size)
      throw IndexOutOfBoundsException_init_$Create$('index: ' + index + ', size: ' + size);
  }
  function ComplexFloatIterator() {
  }
  protoOf(ComplexFloatIterator).next_20eer_k$ = function () {
    return this.nextComplexFloat_kk41sv_k$();
  };
  function ComplexDoubleIterator() {
  }
  protoOf(ComplexDoubleIterator).next_20eer_k$ = function () {
    return this.nextComplexDouble_2uuydu_k$();
  };
  function toComplexFloat(_this__u8e3s4) {
    return new ComplexFloat(numberToDouble(_this__u8e3s4), 0.0);
  }
  function toComplexDouble(_this__u8e3s4) {
    return new ComplexDouble(numberToDouble(_this__u8e3s4), 0.0);
  }
  function get_indices_5(_this__u8e3s4) {
    return new IntRange(0, get_lastIndex_5(_this__u8e3s4));
  }
  function get_lastIndex_5(_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
  }
  function copyOf_0(_this__u8e3s4) {
    var ret = new ComplexFloatArray(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = _this__u8e3s4.getFlatArray_j8ml3q_k$();
    var destination = ret.getFlatArray_j8ml3q_k$();
    var endIndex = imul(ret.get_size_woubt6_k$(), 2);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination, 0, 0, endIndex);
    return ret;
  }
  function copyInto(_this__u8e3s4, destination, destinationOffset, startIndex, endIndex) {
    destinationOffset = destinationOffset === VOID ? 0 : destinationOffset;
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? _this__u8e3s4.get_size_woubt6_k$() : endIndex;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = _this__u8e3s4.getFlatArray_j8ml3q_k$();
    var destination_0 = destination.getFlatArray_j8ml3q_k$();
    var destinationOffset_0 = imul(destinationOffset, 2);
    var startIndex_0 = imul(startIndex, 2);
    var endIndex_0 = imul(endIndex, 2);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination_0, destinationOffset_0, startIndex_0, endIndex_0);
    return destination;
  }
  function get_indices_6(_this__u8e3s4) {
    return new IntRange(0, get_lastIndex_6(_this__u8e3s4));
  }
  function get_lastIndex_6(_this__u8e3s4) {
    return _this__u8e3s4.get_size_woubt6_k$() - 1 | 0;
  }
  function copyOf_1(_this__u8e3s4) {
    var ret = new ComplexDoubleArray(_this__u8e3s4.get_size_woubt6_k$());
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = _this__u8e3s4.getFlatArray_j8ml3q_k$();
    var destination = ret.getFlatArray_j8ml3q_k$();
    var endIndex = imul(ret.get_size_woubt6_k$(), 2);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination, 0, 0, endIndex);
    return ret;
  }
  function copyInto_0(_this__u8e3s4, destination, destinationOffset, startIndex, endIndex) {
    destinationOffset = destinationOffset === VOID ? 0 : destinationOffset;
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? _this__u8e3s4.get_size_woubt6_k$() : endIndex;
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = _this__u8e3s4.getFlatArray_j8ml3q_k$();
    var destination_0 = destination.getFlatArray_j8ml3q_k$();
    var destinationOffset_0 = imul(destinationOffset, 2);
    var startIndex_0 = imul(startIndex, 2);
    var endIndex_0 = imul(endIndex, 2);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination_0, destinationOffset_0, startIndex_0, endIndex_0);
    return destination;
  }
  function contentEquals_5(_this__u8e3s4, other) {
    var tmp2_safe_receiver = _this__u8e3s4 == null ? null : _this__u8e3s4.getFlatArray_j8ml3q_k$();
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = equals(tmp2_safe_receiver, other == null ? null : other.getFlatArray_j8ml3q_k$());
    }
    return tmp === true;
  }
  function contentHashCode_1(_this__u8e3s4) {
    return contentHashCode(_this__u8e3s4 == null ? null : _this__u8e3s4.getFlatArray_j8ml3q_k$());
  }
  function contentEquals_6(_this__u8e3s4, other) {
    var tmp2_safe_receiver = _this__u8e3s4 == null ? null : _this__u8e3s4.getFlatArray_j8ml3q_k$();
    var tmp;
    if (tmp2_safe_receiver == null) {
      tmp = null;
    } else {
      tmp = equals(tmp2_safe_receiver, other == null ? null : other.getFlatArray_j8ml3q_k$());
    }
    return tmp === true;
  }
  function contentHashCode_2(_this__u8e3s4) {
    return contentHashCode_0(_this__u8e3s4 == null ? null : _this__u8e3s4.getFlatArray_j8ml3q_k$());
  }
  var DataType_ByteDataType_instance;
  var DataType_ShortDataType_instance;
  var DataType_IntDataType_instance;
  var DataType_LongDataType_instance;
  var DataType_FloatDataType_instance;
  var DataType_DoubleDataType_instance;
  var DataType_ComplexFloatDataType_instance;
  var DataType_ComplexDoubleDataType_instance;
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).of_xanmn3_k$ = function (i) {
    var tmp;
    switch (i) {
      case 1:
        tmp = DataType_ByteDataType_getInstance();
        break;
      case 2:
        tmp = DataType_ShortDataType_getInstance();
        break;
      case 3:
        tmp = DataType_IntDataType_getInstance();
        break;
      case 4:
        tmp = DataType_LongDataType_getInstance();
        break;
      case 5:
        tmp = DataType_FloatDataType_getInstance();
        break;
      case 6:
        tmp = DataType_DoubleDataType_getInstance();
        break;
      case 7:
        tmp = DataType_ComplexFloatDataType_getInstance();
        break;
      case 8:
        tmp = DataType_ComplexDoubleDataType_getInstance();
        break;
      default:
        throw IllegalStateException_init_$Create$('One of the primitive types indexes was expected, got ' + i);
    }
    return tmp;
  };
  protoOf(Companion_3).of_v7mo9m_k$ = function (element) {
    if (element == null)
      throw IllegalStateException_init_$Create$('Element is null cannot find type');
    var tmp1_subject = getKClassFromExpression(ensureNotNull(element));
    var tmp;
    if (tmp1_subject.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      tmp = DataType_ByteDataType_getInstance();
    } else if (tmp1_subject.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      tmp = DataType_ShortDataType_getInstance();
    } else if (tmp1_subject.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      tmp = DataType_IntDataType_getInstance();
    } else if (tmp1_subject.equals(getKClass(Long))) {
      tmp = DataType_LongDataType_getInstance();
    } else if (tmp1_subject.equals(PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$())) {
      tmp = DataType_FloatDataType_getInstance();
    } else if (tmp1_subject.equals(PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$())) {
      tmp = DataType_DoubleDataType_getInstance();
    } else if (tmp1_subject.equals(getKClass(ComplexFloat))) {
      tmp = DataType_ComplexFloatDataType_getInstance();
    } else if (tmp1_subject.equals(getKClass(ComplexDouble))) {
      tmp = DataType_ComplexDoubleDataType_getInstance();
    } else {
      throw IllegalStateException_init_$Create$('One of the primitive types was expected, ' + ('got ' + getKClassFromExpression(ensureNotNull(element)).get_simpleName_r6f8py_k$()));
    }
    return tmp;
  };
  var Companion_instance_3;
  function Companion_getInstance_3() {
    DataType_initEntries();
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function values_0() {
    return [DataType_ByteDataType_getInstance(), DataType_ShortDataType_getInstance(), DataType_IntDataType_getInstance(), DataType_LongDataType_getInstance(), DataType_FloatDataType_getInstance(), DataType_DoubleDataType_getInstance(), DataType_ComplexFloatDataType_getInstance(), DataType_ComplexDoubleDataType_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'ByteDataType':
        return DataType_ByteDataType_getInstance();
      case 'ShortDataType':
        return DataType_ShortDataType_getInstance();
      case 'IntDataType':
        return DataType_IntDataType_getInstance();
      case 'LongDataType':
        return DataType_LongDataType_getInstance();
      case 'FloatDataType':
        return DataType_FloatDataType_getInstance();
      case 'DoubleDataType':
        return DataType_DoubleDataType_getInstance();
      case 'ComplexFloatDataType':
        return DataType_ComplexFloatDataType_getInstance();
      case 'ComplexDoubleDataType':
        return DataType_ComplexDoubleDataType_getInstance();
      default:
        DataType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var DataType_entriesInitialized;
  function DataType_initEntries() {
    if (DataType_entriesInitialized)
      return Unit_getInstance();
    DataType_entriesInitialized = true;
    DataType_ByteDataType_instance = new DataType('ByteDataType', 0, 1, 1, PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$());
    DataType_ShortDataType_instance = new DataType('ShortDataType', 1, 2, 2, PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$());
    DataType_IntDataType_instance = new DataType('IntDataType', 2, 3, 4, PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$());
    DataType_LongDataType_instance = new DataType('LongDataType', 3, 4, 8, getKClass(Long));
    DataType_FloatDataType_instance = new DataType('FloatDataType', 4, 5, 4, PrimitiveClasses_getInstance().get_floatClass_xlwq2t_k$());
    DataType_DoubleDataType_instance = new DataType('DoubleDataType', 5, 6, 8, PrimitiveClasses_getInstance().get_doubleClass_dahzcy_k$());
    DataType_ComplexFloatDataType_instance = new DataType('ComplexFloatDataType', 6, 7, 8, getKClass(ComplexFloat));
    DataType_ComplexDoubleDataType_instance = new DataType('ComplexDoubleDataType', 7, 8, 16, getKClass(ComplexDouble));
    Companion_getInstance_3();
  }
  function DataType(name, ordinal, nativeCode, itemSize, clazz) {
    Enum.call(this, name, ordinal);
    this.nativeCode_1 = nativeCode;
    this.itemSize_1 = itemSize;
    this.clazz_1 = clazz;
  }
  protoOf(DataType).get_nativeCode_v5ls8d_k$ = function () {
    return this.nativeCode_1;
  };
  protoOf(DataType).get_itemSize_cbw2gz_k$ = function () {
    return this.itemSize_1;
  };
  protoOf(DataType).get_clazz_ips3zj_k$ = function () {
    return this.clazz_1;
  };
  protoOf(DataType).isNumber_5yj4dp_k$ = function () {
    switch (this.nativeCode_1) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        return true;
      default:
        return false;
    }
  };
  protoOf(DataType).isComplex_64pq1y_k$ = function () {
    return !this.isNumber_5yj4dp_k$();
  };
  function DataType_ByteDataType_getInstance() {
    DataType_initEntries();
    return DataType_ByteDataType_instance;
  }
  function DataType_ShortDataType_getInstance() {
    DataType_initEntries();
    return DataType_ShortDataType_instance;
  }
  function DataType_IntDataType_getInstance() {
    DataType_initEntries();
    return DataType_IntDataType_instance;
  }
  function DataType_LongDataType_getInstance() {
    DataType_initEntries();
    return DataType_LongDataType_instance;
  }
  function DataType_FloatDataType_getInstance() {
    DataType_initEntries();
    return DataType_FloatDataType_instance;
  }
  function DataType_DoubleDataType_getInstance() {
    DataType_initEntries();
    return DataType_DoubleDataType_instance;
  }
  function DataType_ComplexFloatDataType_getInstance() {
    DataType_initEntries();
    return DataType_ComplexFloatDataType_instance;
  }
  function DataType_ComplexDoubleDataType_getInstance() {
    DataType_initEntries();
    return DataType_ComplexDoubleDataType_instance;
  }
  function Dimension() {
  }
  function Companion_4() {
    Companion_instance_4 = this;
    D1.call(this);
  }
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function D1(d) {
    Companion_getInstance_4();
    d = d === VOID ? 1 : d;
    this.d_1 = d;
  }
  protoOf(D1).get_d_1mhr5n_k$ = function () {
    return this.d_1;
  };
  protoOf(D1).equals = function (other) {
    if (this === other)
      return true;
    if (!(other == null) ? !getKClassFromExpression(this).equals(getKClassFromExpression(other)) : false)
      return false;
    if (!(other instanceof DN))
      THROW_CCE();
    if (!(this.get_d_1mhr5n_k$() === other.d_1))
      return false;
    return true;
  };
  protoOf(D1).hashCode = function () {
    return imul(31, this.get_d_1mhr5n_k$());
  };
  protoOf(D1).toString = function () {
    return 'dimension: ' + this.get_d_1mhr5n_k$();
  };
  function Companion_5() {
    Companion_instance_5 = this;
    D2.call(this);
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function D2(d) {
    Companion_getInstance_5();
    d = d === VOID ? 2 : d;
    this.d_1 = d;
  }
  protoOf(D2).get_d_1mhr5n_k$ = function () {
    return this.d_1;
  };
  protoOf(D2).equals = function (other) {
    if (this === other)
      return true;
    if (!(other == null) ? !getKClassFromExpression(this).equals(getKClassFromExpression(other)) : false)
      return false;
    if (!(other instanceof DN))
      THROW_CCE();
    if (!(this.get_d_1mhr5n_k$() === other.d_1))
      return false;
    return true;
  };
  protoOf(D2).hashCode = function () {
    return imul(31, this.get_d_1mhr5n_k$());
  };
  protoOf(D2).toString = function () {
    return 'dimension: ' + this.get_d_1mhr5n_k$();
  };
  function Companion_6() {
    Companion_instance_6 = this;
    D3.call(this);
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function D3(d) {
    Companion_getInstance_6();
    d = d === VOID ? 3 : d;
    this.d_1 = d;
  }
  protoOf(D3).get_d_1mhr5n_k$ = function () {
    return this.d_1;
  };
  protoOf(D3).equals = function (other) {
    if (this === other)
      return true;
    if (!(other == null) ? !getKClassFromExpression(this).equals(getKClassFromExpression(other)) : false)
      return false;
    if (!(other instanceof DN))
      THROW_CCE();
    if (!(this.get_d_1mhr5n_k$() === other.d_1))
      return false;
    return true;
  };
  protoOf(D3).hashCode = function () {
    return imul(31, this.get_d_1mhr5n_k$());
  };
  protoOf(D3).toString = function () {
    return 'dimension: ' + this.get_d_1mhr5n_k$();
  };
  function Companion_7() {
    Companion_instance_7 = this;
    D4.call(this);
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function D4(d) {
    Companion_getInstance_7();
    d = d === VOID ? 4 : d;
    this.d_1 = d;
  }
  protoOf(D4).get_d_1mhr5n_k$ = function () {
    return this.d_1;
  };
  protoOf(D4).equals = function (other) {
    if (this === other)
      return true;
    if (!(other == null) ? !getKClassFromExpression(this).equals(getKClassFromExpression(other)) : false)
      return false;
    if (!(other instanceof DN))
      THROW_CCE();
    if (!(this.get_d_1mhr5n_k$() === other.d_1))
      return false;
    return true;
  };
  protoOf(D4).hashCode = function () {
    return imul(31, this.get_d_1mhr5n_k$());
  };
  protoOf(D4).toString = function () {
    return 'dimension: ' + this.get_d_1mhr5n_k$();
  };
  function DN(d) {
    this.d_1 = d;
  }
  protoOf(DN).get_d_1mhr5n_k$ = function () {
    return this.d_1;
  };
  protoOf(DN).equals = function (other) {
    if (this === other)
      return true;
    if (!(other == null) ? !getKClassFromExpression(this).equals(getKClassFromExpression(other)) : false)
      return false;
    if (!(other instanceof DN))
      THROW_CCE();
    if (!(this.d_1 === other.d_1))
      return false;
    return true;
  };
  protoOf(DN).hashCode = function () {
    return imul(31, this.d_1);
  };
  protoOf(DN).toString = function () {
    return 'dimension: ' + this.d_1;
  };
  function Dim1() {
  }
  function Dim2() {
  }
  function Dim3() {
  }
  function Dim4() {
  }
  function DimN() {
  }
  function dimensionOf(dim) {
    var tmp;
    switch (dim) {
      case 1:
        tmp = Companion_getInstance_4();
        break;
      case 2:
        tmp = Companion_getInstance_5();
        break;
      case 3:
        tmp = Companion_getInstance_6();
        break;
      case 4:
        tmp = Companion_getInstance_7();
        break;
      default:
        tmp = new DN(dim);
        break;
    }
    return isInterface(tmp, Dimension) ? tmp : THROW_CCE();
  }
  function computeStrides(shape) {
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var this_0 = shape.slice();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.computeStrides.<anonymous>' call
    this_0[get_lastIndex(this_0)] = 1;
    var inductionVariable = get_lastIndex(this_0) - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        this_0[i] = imul(this_0[i + 1 | 0], shape[i + 1 | 0]);
      }
       while (0 <= inductionVariable);
    return this_0;
  }
  function requirePositiveShape(dim) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(dim > 0)) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requirePositiveShape.<anonymous>' call
      var message = 'Shape must be positive but was ' + dim + '.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function actualAxis(_this__u8e3s4, axis) {
    return axis < 0 ? _this__u8e3s4.get_dim_18j7c1_k$().get_d_1mhr5n_k$() + axis | 0 : axis;
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
  function compareTo_0(_this__u8e3s4, other) {
    var tmp;
    var tmp_0;
    if (typeof _this__u8e3s4 === 'number') {
      tmp_0 = typeof other === 'number';
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = compareTo(_this__u8e3s4, other);
    } else {
      var tmp_1;
      if (typeof _this__u8e3s4 === 'number') {
        tmp_1 = typeof other === 'number';
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp = compareTo(_this__u8e3s4, other);
      } else {
        var tmp_2;
        if (typeof _this__u8e3s4 === 'number') {
          tmp_2 = typeof other === 'number';
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          tmp = compareTo(_this__u8e3s4, other);
        } else {
          var tmp_3;
          if (_this__u8e3s4 instanceof Long) {
            tmp_3 = other instanceof Long;
          } else {
            tmp_3 = false;
          }
          if (tmp_3) {
            tmp = _this__u8e3s4.compareTo_9jj042_k$(other);
          } else {
            var tmp_4;
            if (typeof _this__u8e3s4 === 'number') {
              tmp_4 = typeof other === 'number';
            } else {
              tmp_4 = false;
            }
            if (tmp_4) {
              tmp = compareTo(_this__u8e3s4, other);
            } else {
              var tmp_5;
              if (typeof _this__u8e3s4 === 'number') {
                tmp_5 = typeof other === 'number';
              } else {
                tmp_5 = false;
              }
              if (tmp_5) {
                tmp = compareTo(_this__u8e3s4, other);
              } else {
                tmp = compareTo(numberToDouble(_this__u8e3s4), numberToDouble(other));
              }
            }
          }
        }
      }
    }
    return tmp;
  }
  function removeAll(_this__u8e3s4, indices) {
    var tmp;
    if (indices.isEmpty_y1axqb_k$()) {
      tmp = _this__u8e3s4;
    } else if (indices.get_size_woubt6_k$() === 1) {
      tmp = remove(_this__u8e3s4, first(indices));
    } else {
      // Inline function 'kotlin.collections.filterIndexed' call
      // Inline function 'kotlin.collections.filterIndexedTo' call
      var destination = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = _this__u8e3s4.length;
      while (inductionVariable < last) {
        var item = _this__u8e3s4[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.filterIndexedTo.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.removeAll.<anonymous>' call
        if (!indices.contains_aljjnj_k$(tmp1)) {
          destination.add_utx5q5_k$(item);
        }
      }
      tmp = toIntArray(destination);
    }
    return tmp;
  }
  function requireDimension(dim, shapeSize) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(dim.get_d_1mhr5n_k$() === shapeSize ? true : dim.get_d_1mhr5n_k$() > 4 ? shapeSize > 4 : false)) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requireDimension.<anonymous>' call
      var message = "Dimension doesn't match the size of the shape: dimension (" + dim.get_d_1mhr5n_k$() + ') != ' + shapeSize + ' shape size.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function requireEqualShape(left, right) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!contentEquals(left, right)) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requireEqualShape.<anonymous>' call
      var message = "Array shapes don't match: " + contentToString(left) + ' != ' + contentToString(right);
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  function ImmutableMemoryView() {
  }
  function MemoryView() {
  }
  protoOf(MemoryView).getByteArray_yjfvk5_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(MemoryView).getShortArray_kijo6r_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(MemoryView).getIntArray_rs62n4_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(MemoryView).getLongArray_1i1953_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(MemoryView).getFloatArray_m77gkt_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(MemoryView).getDoubleArray_x8889e_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(MemoryView).getComplexFloatArray_56zcs7_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(MemoryView).getComplexDoubleArray_u2qur2_k$ = function () {
    throw UnsupportedOperationException_init_$Create$();
  };
  protoOf(MemoryView).plusAssign_gwr7uw_k$ = function (other) {
    var tmp;
    if (this instanceof MemoryViewFloatArray) {
      tmp = other instanceof MemoryViewFloatArray;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.plusAssign_62svqs_k$(other);
    } else {
      var tmp_0;
      if (this instanceof MemoryViewIntArray) {
        tmp_0 = other instanceof MemoryViewIntArray;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        this.plusAssign_nrmugc_k$(other);
      } else {
        var tmp_1;
        if (this instanceof MemoryViewDoubleArray) {
          tmp_1 = other instanceof MemoryViewDoubleArray;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          this.plusAssign_kkp59a_k$(other);
        } else {
          var tmp_2;
          if (this instanceof MemoryViewLongArray) {
            tmp_2 = other instanceof MemoryViewLongArray;
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            this.plusAssign_bfr53t_k$(other);
          } else {
            var tmp_3;
            if (this instanceof MemoryViewShortArray) {
              tmp_3 = other instanceof MemoryViewShortArray;
            } else {
              tmp_3 = false;
            }
            if (tmp_3) {
              this.plusAssign_gg6uz0_k$(other);
            } else {
              var tmp_4;
              if (this instanceof MemoryViewByteArray) {
                tmp_4 = other instanceof MemoryViewByteArray;
              } else {
                tmp_4 = false;
              }
              if (tmp_4) {
                this.plusAssign_kpw5v4_k$(other);
              } else {
                var tmp_5;
                if (this instanceof MemoryViewComplexFloatArray) {
                  tmp_5 = other instanceof MemoryViewComplexFloatArray;
                } else {
                  tmp_5 = false;
                }
                if (tmp_5) {
                  this.plusAssign_cfch7t_k$(other);
                } else {
                  var tmp_6;
                  if (this instanceof MemoryViewComplexDoubleArray) {
                    tmp_6 = other instanceof MemoryViewComplexDoubleArray;
                  } else {
                    tmp_6 = false;
                  }
                  if (tmp_6) {
                    this.plusAssign_c8fe19_k$(other);
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  protoOf(MemoryView).plusAssign_xac6iy_k$ = function (other) {
    var tmp;
    if (this instanceof MemoryViewFloatArray) {
      tmp = !(other == null) ? typeof other === 'number' : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.plusAssign_xjcc2p_k$(other);
    } else {
      var tmp_0;
      if (this instanceof MemoryViewIntArray) {
        tmp_0 = !(other == null) ? typeof other === 'number' : false;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        this.plusAssign_8mmvnl_k$(other);
      } else {
        var tmp_1;
        if (this instanceof MemoryViewDoubleArray) {
          tmp_1 = !(other == null) ? typeof other === 'number' : false;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          this.plusAssign_hd7up9_k$(other);
        } else {
          var tmp_2;
          if (this instanceof MemoryViewLongArray) {
            tmp_2 = other instanceof Long;
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            this.plusAssign_p5ji1h_k$(other);
          } else {
            var tmp_3;
            if (this instanceof MemoryViewShortArray) {
              tmp_3 = !(other == null) ? typeof other === 'number' : false;
            } else {
              tmp_3 = false;
            }
            if (tmp_3) {
              this.plusAssign_kfgysh_k$(other);
            } else {
              var tmp_4;
              if (this instanceof MemoryViewByteArray) {
                tmp_4 = !(other == null) ? typeof other === 'number' : false;
              } else {
                tmp_4 = false;
              }
              if (tmp_4) {
                this.plusAssign_kzsn9d_k$(other);
              } else {
                var tmp_5;
                if (this instanceof MemoryViewComplexFloatArray) {
                  tmp_5 = other instanceof ComplexFloat;
                } else {
                  tmp_5 = false;
                }
                if (tmp_5) {
                  this.plusAssign_1edp6e_k$(other);
                } else {
                  var tmp_6;
                  if (this instanceof MemoryViewComplexDoubleArray) {
                    tmp_6 = other instanceof ComplexDouble;
                  } else {
                    tmp_6 = false;
                  }
                  if (tmp_6) {
                    this.plusAssign_x27y4z_k$(other);
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  protoOf(MemoryView).minusAssign_xybx26_k$ = function (other) {
    var tmp;
    if (this instanceof MemoryViewFloatArray) {
      tmp = other instanceof MemoryViewFloatArray;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.minusAssign_hrrk3a_k$(other);
    } else {
      var tmp_0;
      if (this instanceof MemoryViewIntArray) {
        tmp_0 = other instanceof MemoryViewIntArray;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        this.minusAssign_qg6ehi_k$(other);
      } else {
        var tmp_1;
        if (this instanceof MemoryViewDoubleArray) {
          tmp_1 = other instanceof MemoryViewDoubleArray;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          this.minusAssign_qgnw0c_k$(other);
        } else {
          var tmp_2;
          if (this instanceof MemoryViewLongArray) {
            tmp_2 = other instanceof MemoryViewLongArray;
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            this.minusAssign_vhqx4z_k$(other);
          } else {
            var tmp_3;
            if (this instanceof MemoryViewShortArray) {
              tmp_3 = other instanceof MemoryViewShortArray;
            } else {
              tmp_3 = false;
            }
            if (tmp_3) {
              this.minusAssign_uqcr62_k$(other);
            } else {
              var tmp_4;
              if (this instanceof MemoryViewByteArray) {
                tmp_4 = other instanceof MemoryViewByteArray;
              } else {
                tmp_4 = false;
              }
              if (tmp_4) {
                this.minusAssign_nwdty_k$(other);
              } else {
                var tmp_5;
                if (this instanceof MemoryViewComplexFloatArray) {
                  tmp_5 = other instanceof MemoryViewComplexFloatArray;
                } else {
                  tmp_5 = false;
                }
                if (tmp_5) {
                  this.minusAssign_3dh1j3_k$(other);
                } else {
                  var tmp_6;
                  if (this instanceof MemoryViewComplexDoubleArray) {
                    tmp_6 = other instanceof MemoryViewComplexDoubleArray;
                  } else {
                    tmp_6 = false;
                  }
                  if (tmp_6) {
                    this.minusAssign_pk9lzd_k$(other);
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  protoOf(MemoryView).minusAssign_x73sio_k$ = function (other) {
    var tmp;
    if (this instanceof MemoryViewFloatArray) {
      tmp = !(other == null) ? typeof other === 'number' : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.minusAssign_kpy14n_k$(other);
    } else {
      var tmp_0;
      if (this instanceof MemoryViewIntArray) {
        tmp_0 = !(other == null) ? typeof other === 'number' : false;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        this.minusAssign_p980fd_k$(other);
      } else {
        var tmp_1;
        if (this instanceof MemoryViewDoubleArray) {
          tmp_1 = !(other == null) ? typeof other === 'number' : false;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          this.minusAssign_p9jhwp_k$(other);
        } else {
          var tmp_2;
          if (this instanceof MemoryViewLongArray) {
            tmp_2 = other instanceof Long;
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            this.minusAssign_elja0x_k$(other);
          } else {
            var tmp_3;
            if (this instanceof MemoryViewShortArray) {
              tmp_3 = !(other == null) ? typeof other === 'number' : false;
            } else {
              tmp_3 = false;
            }
            if (tmp_3) {
              this.minusAssign_7m2nuf_k$(other);
            } else {
              var tmp_4;
              if (this instanceof MemoryViewByteArray) {
                tmp_4 = !(other == null) ? typeof other === 'number' : false;
              } else {
                tmp_4 = false;
              }
              if (tmp_4) {
                this.minusAssign_aa8mnd_k$(other);
              } else {
                var tmp_5;
                if (this instanceof MemoryViewComplexFloatArray) {
                  tmp_5 = other instanceof ComplexFloat;
                } else {
                  tmp_5 = false;
                }
                if (tmp_5) {
                  this.minusAssign_whqhsw_k$(other);
                } else {
                  var tmp_6;
                  if (this instanceof MemoryViewComplexDoubleArray) {
                    tmp_6 = other instanceof ComplexDouble;
                  } else {
                    tmp_6 = false;
                  }
                  if (tmp_6) {
                    this.minusAssign_7fbzk3_k$(other);
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  protoOf(MemoryView).timesAssign_56rgs4_k$ = function (other) {
    var tmp;
    if (this instanceof MemoryViewFloatArray) {
      tmp = other instanceof MemoryViewFloatArray;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.timesAssign_qnwb4w_k$(other);
    } else {
      var tmp_0;
      if (this instanceof MemoryViewIntArray) {
        tmp_0 = other instanceof MemoryViewIntArray;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        this.timesAssign_2e2ygw_k$(other);
      } else {
        var tmp_1;
        if (this instanceof MemoryViewDoubleArray) {
          tmp_1 = other instanceof MemoryViewDoubleArray;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          this.timesAssign_dx8a5y_k$(other);
        } else {
          var tmp_2;
          if (this instanceof MemoryViewLongArray) {
            tmp_2 = other instanceof MemoryViewLongArray;
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            this.timesAssign_hrthil_k$(other);
          } else {
            var tmp_3;
            if (this instanceof MemoryViewShortArray) {
              tmp_3 = other instanceof MemoryViewShortArray;
            } else {
              tmp_3 = false;
            }
            if (tmp_3) {
              this.timesAssign_44wkf4_k$(other);
            } else {
              var tmp_4;
              if (this instanceof MemoryViewByteArray) {
                tmp_4 = other instanceof MemoryViewByteArray;
              } else {
                tmp_4 = false;
              }
              if (tmp_4) {
                this.timesAssign_edttgc_k$(other);
              } else {
                var tmp_5;
                if (this instanceof MemoryViewComplexFloatArray) {
                  tmp_5 = other instanceof MemoryViewComplexFloatArray;
                } else {
                  tmp_5 = false;
                }
                if (tmp_5) {
                  this.timesAssign_atx49h_k$(other);
                } else {
                  var tmp_6;
                  if (this instanceof MemoryViewComplexDoubleArray) {
                    tmp_6 = other instanceof MemoryViewComplexDoubleArray;
                  } else {
                    tmp_6 = false;
                  }
                  if (tmp_6) {
                    this.timesAssign_hh10wv_k$(other);
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  protoOf(MemoryView).timesAssign_yswwui_k$ = function (other) {
    var tmp;
    if (this instanceof MemoryViewFloatArray) {
      tmp = !(other == null) ? typeof other === 'number' : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.timesAssign_9pohfx_k$(other);
    } else {
      var tmp_0;
      if (this instanceof MemoryViewIntArray) {
        tmp_0 = !(other == null) ? typeof other === 'number' : false;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        this.timesAssign_mks6xf_k$(other);
      } else {
        var tmp_1;
        if (this instanceof MemoryViewDoubleArray) {
          tmp_1 = !(other == null) ? typeof other === 'number' : false;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          this.timesAssign_ush5a7_k$(other);
        } else {
          var tmp_2;
          if (this instanceof MemoryViewLongArray) {
            tmp_2 = other instanceof Long;
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            this.timesAssign_vvrqxj_k$(other);
          } else {
            var tmp_3;
            if (this instanceof MemoryViewShortArray) {
              tmp_3 = !(other == null) ? typeof other === 'number' : false;
            } else {
              tmp_3 = false;
            }
            if (tmp_3) {
              this.timesAssign_3e6vub_k$(other);
            } else {
              var tmp_4;
              if (this instanceof MemoryViewByteArray) {
                tmp_4 = !(other == null) ? typeof other === 'number' : false;
              } else {
                tmp_4 = false;
              }
              if (tmp_4) {
                this.timesAssign_6zzu99_k$(other);
              } else {
                var tmp_5;
                if (this instanceof MemoryViewComplexFloatArray) {
                  tmp_5 = other instanceof ComplexFloat;
                } else {
                  tmp_5 = false;
                }
                if (tmp_5) {
                  this.timesAssign_4ft022_k$(other);
                } else {
                  var tmp_6;
                  if (this instanceof MemoryViewComplexDoubleArray) {
                    tmp_6 = other instanceof ComplexDouble;
                  } else {
                    tmp_6 = false;
                  }
                  if (tmp_6) {
                    this.timesAssign_9v5muf_k$(other);
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  protoOf(MemoryView).divAssign_k4hv35_k$ = function (other) {
    var tmp;
    if (this instanceof MemoryViewFloatArray) {
      tmp = other instanceof MemoryViewFloatArray;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.divAssign_lrqraj_k$(other);
    } else {
      var tmp_0;
      if (this instanceof MemoryViewIntArray) {
        tmp_0 = other instanceof MemoryViewIntArray;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        this.divAssign_32mt3f_k$(other);
      } else {
        var tmp_1;
        if (this instanceof MemoryViewDoubleArray) {
          tmp_1 = other instanceof MemoryViewDoubleArray;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          this.divAssign_s7zd9n_k$(other);
        } else {
          var tmp_2;
          if (this instanceof MemoryViewLongArray) {
            tmp_2 = other instanceof MemoryViewLongArray;
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            this.divAssign_1nxfxe_k$(other);
          } else {
            var tmp_3;
            if (this instanceof MemoryViewShortArray) {
              tmp_3 = other instanceof MemoryViewShortArray;
            } else {
              tmp_3 = false;
            }
            if (tmp_3) {
              this.divAssign_r8zf9_k$(other);
            } else {
              var tmp_4;
              if (this instanceof MemoryViewByteArray) {
                tmp_4 = other instanceof MemoryViewByteArray;
              } else {
                tmp_4 = false;
              }
              if (tmp_4) {
                this.divAssign_uhpv1j_k$(other);
              } else {
                var tmp_5;
                if (this instanceof MemoryViewComplexFloatArray) {
                  tmp_5 = other instanceof MemoryViewComplexFloatArray;
                } else {
                  tmp_5 = false;
                }
                if (tmp_5) {
                  this.divAssign_2gr0yo_k$(other);
                } else {
                  var tmp_6;
                  if (this instanceof MemoryViewComplexDoubleArray) {
                    tmp_6 = other instanceof MemoryViewComplexDoubleArray;
                  } else {
                    tmp_6 = false;
                  }
                  if (tmp_6) {
                    this.divAssign_4f54oa_k$(other);
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  protoOf(MemoryView).divAssign_ibwwan_k$ = function (other) {
    var tmp;
    if (this instanceof MemoryViewFloatArray) {
      tmp = !(other == null) ? typeof other === 'number' : false;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.divAssign_yyq0xk_k$(other);
    } else {
      var tmp_0;
      if (this instanceof MemoryViewIntArray) {
        tmp_0 = !(other == null) ? typeof other === 'number' : false;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        this.divAssign_lu0jmg_k$(other);
      } else {
        var tmp_1;
        if (this instanceof MemoryViewDoubleArray) {
          tmp_1 = !(other == null) ? typeof other === 'number' : false;
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          this.divAssign_4m3nl6_k$(other);
        } else {
          var tmp_2;
          if (this instanceof MemoryViewLongArray) {
            tmp_2 = other instanceof Long;
          } else {
            tmp_2 = false;
          }
          if (tmp_2) {
            this.divAssign_lc7jya_k$(other);
          } else {
            var tmp_3;
            if (this instanceof MemoryViewShortArray) {
              tmp_3 = !(other == null) ? typeof other === 'number' : false;
            } else {
              tmp_3 = false;
            }
            if (tmp_3) {
              this.divAssign_luunnc_k$(other);
            } else {
              var tmp_4;
              if (this instanceof MemoryViewByteArray) {
                tmp_4 = !(other == null) ? typeof other === 'number' : false;
              } else {
                tmp_4 = false;
              }
              if (tmp_4) {
                this.divAssign_3jkcq0_k$(other);
              } else {
                var tmp_5;
                if (this instanceof MemoryViewComplexFloatArray) {
                  tmp_5 = other instanceof ComplexFloat;
                } else {
                  tmp_5 = false;
                }
                if (tmp_5) {
                  this.divAssign_l2xiht_k$(other);
                } else {
                  var tmp_6;
                  if (this instanceof MemoryViewComplexDoubleArray) {
                    tmp_6 = other instanceof ComplexDouble;
                  } else {
                    tmp_6 = false;
                  }
                  if (tmp_6) {
                    this.divAssign_jnr07w_k$(other);
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  function initMemoryView(size, dataType, init) {
    var tmp;
    switch (dataType.get_ordinal_ip24qg_k$()) {
      case 0:
        var tmp_0 = 0;
        var tmp_1 = new Int8Array(size);
        var tmp0 = typeof init === 'function' ? init : THROW_CCE();
        while (tmp_0 < size) {
          var tmp_2 = tmp_0;
          tmp_1[tmp_2] = tmp0(tmp_2);
          tmp_0 = tmp_0 + 1 | 0;
        }

        tmp = new MemoryViewByteArray(tmp_1);
        break;
      case 1:
        var tmp_3 = 0;
        var tmp_4 = new Int16Array(size);
        var tmp0_0 = typeof init === 'function' ? init : THROW_CCE();
        while (tmp_3 < size) {
          var tmp_5 = tmp_3;
          tmp_4[tmp_5] = tmp0_0(tmp_5);
          tmp_3 = tmp_3 + 1 | 0;
        }

        tmp = new MemoryViewShortArray(tmp_4);
        break;
      case 2:
        var tmp_6 = 0;
        var tmp_7 = new Int32Array(size);
        var tmp0_1 = typeof init === 'function' ? init : THROW_CCE();
        while (tmp_6 < size) {
          var tmp_8 = tmp_6;
          tmp_7[tmp_8] = tmp0_1(tmp_8);
          tmp_6 = tmp_6 + 1 | 0;
        }

        tmp = new MemoryViewIntArray(tmp_7);
        break;
      case 3:
        var tmp_9 = 0;
        var tmp_10 = longArray(size);
        var tmp0_2 = typeof init === 'function' ? init : THROW_CCE();
        while (tmp_9 < size) {
          var tmp_11 = tmp_9;
          tmp_10[tmp_11] = tmp0_2(tmp_11);
          tmp_9 = tmp_9 + 1 | 0;
        }

        tmp = new MemoryViewLongArray(tmp_10);
        break;
      case 4:
        var tmp_12 = 0;
        var tmp_13 = new Float32Array(size);
        var tmp0_3 = typeof init === 'function' ? init : THROW_CCE();
        while (tmp_12 < size) {
          var tmp_14 = tmp_12;
          tmp_13[tmp_14] = tmp0_3(tmp_14);
          tmp_12 = tmp_12 + 1 | 0;
        }

        tmp = new MemoryViewFloatArray(tmp_13);
        break;
      case 5:
        var tmp_15 = 0;
        var tmp_16 = new Float64Array(size);
        var tmp0_4 = typeof init === 'function' ? init : THROW_CCE();
        while (tmp_15 < size) {
          var tmp_17 = tmp_15;
          tmp_16[tmp_17] = tmp0_4(tmp_17);
          tmp_15 = tmp_15 + 1 | 0;
        }

        tmp = new MemoryViewDoubleArray(tmp_16);
        break;
      case 6:
        tmp = new MemoryViewComplexFloatArray(ComplexFloatArray_init_$Create$(size, typeof init === 'function' ? init : THROW_CCE()));
        break;
      case 7:
        tmp = new MemoryViewComplexDoubleArray(ComplexDoubleArray_init_$Create$(size, typeof init === 'function' ? init : THROW_CCE()));
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var t = tmp;
    return t instanceof MemoryView ? t : THROW_CCE();
  }
  function initMemoryView_0(size, dataType) {
    var tmp;
    switch (dataType.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = new MemoryViewByteArray(new Int8Array(size));
        break;
      case 1:
        tmp = new MemoryViewShortArray(new Int16Array(size));
        break;
      case 2:
        tmp = new MemoryViewIntArray(new Int32Array(size));
        break;
      case 3:
        tmp = new MemoryViewLongArray(longArray(size));
        break;
      case 4:
        tmp = new MemoryViewFloatArray(new Float32Array(size));
        break;
      case 5:
        tmp = new MemoryViewDoubleArray(new Float64Array(size));
        break;
      case 6:
        tmp = new MemoryViewComplexFloatArray(new ComplexFloatArray(size));
        break;
      case 7:
        tmp = new MemoryViewComplexDoubleArray(new ComplexDoubleArray(size));
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var t = tmp;
    return t instanceof MemoryView ? t : THROW_CCE();
  }
  function MemoryViewFloatArray(data) {
    MemoryView.call(this);
    this.data_1 = data;
    this.dtype_1 = DataType_FloatDataType_getInstance();
    this.size_1 = this.data_1.length;
    this.indices_1 = get_indices(this.data_1);
    this.lastIndex_1 = get_lastIndex_0(this.data_1);
  }
  protoOf(MemoryViewFloatArray).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(MemoryViewFloatArray).get_dtype_iqhi0l_k$ = function () {
    return this.dtype_1;
  };
  protoOf(MemoryViewFloatArray).set_size_e2677a_k$ = function (_set____db54di) {
    this.size_1 = _set____db54di;
  };
  protoOf(MemoryViewFloatArray).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(MemoryViewFloatArray).set_indices_6f5wkc_k$ = function (_set____db54di) {
    this.indices_1 = _set____db54di;
  };
  protoOf(MemoryViewFloatArray).get_indices_xelk8u_k$ = function () {
    return this.indices_1;
  };
  protoOf(MemoryViewFloatArray).set_lastIndex_mit0mh_k$ = function (_set____db54di) {
    this.lastIndex_1 = _set____db54di;
  };
  protoOf(MemoryViewFloatArray).get_lastIndex_tk4gr1_k$ = function () {
    return this.lastIndex_1;
  };
  protoOf(MemoryViewFloatArray).get_c1px32_k$ = function (index) {
    return this.data_1[index];
  };
  protoOf(MemoryViewFloatArray).set_4eugj6_k$ = function (index, value) {
    this.data_1[index] = value;
  };
  protoOf(MemoryViewFloatArray).set_52lp9l_k$ = function (index, value) {
    return this.set_4eugj6_k$(index, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(MemoryViewFloatArray).getFloatArray_m77gkt_k$ = function () {
    return this.data_1;
  };
  protoOf(MemoryViewFloatArray).iterator_jk1svi_k$ = function () {
    return floatArrayIterator(this.data_1);
  };
  protoOf(MemoryViewFloatArray).copyOf_mek8us_k$ = function () {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.data_1.slice();
    return new MemoryViewFloatArray(tmp$ret$1);
  };
  protoOf(MemoryViewFloatArray).copyInto_yik7on_k$ = function (destination, destinationOffset, startIndex, endIndex) {
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.data_1;
    var destination_0 = destination.getFloatArray_m77gkt_k$();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination_0, destinationOffset, startIndex, endIndex);
    return destination;
  };
  protoOf(MemoryViewFloatArray).copyInto_mp34x0_k$ = function (destination, destinationOffset, startIndex, endIndex) {
    return this.copyInto_yik7on_k$(destination, destinationOffset, startIndex, endIndex);
  };
  protoOf(MemoryViewFloatArray).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      if (!(other == null) ? !getKClassFromExpression(this).equals(getKClassFromExpression(other)) : false) {
        tmp = false;
      } else {
        if (!(other instanceof MemoryViewFloatArray)) {
          tmp = false;
        } else {
          if (!(this.size_1 === other.size_1)) {
            tmp = false;
          } else {
            tmp = contentEquals_0(this.data_1, other.data_1);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(MemoryViewFloatArray).hashCode = function () {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = until(0, this.size_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.MemoryViewFloatArray.hashCode.<anonymous>' call
      var acc = accumulator;
      accumulator = imul(31, acc) + getNumberHashCode(this.data_1[element]) | 0;
    }
    return accumulator;
  };
  protoOf(MemoryViewFloatArray).plusAssign_62svqs_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] + other.data_1[i];
      }
       while (!(i === last));
  };
  protoOf(MemoryViewFloatArray).plusAssign_xjcc2p_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] + other;
      }
       while (!(i === last));
  };
  protoOf(MemoryViewFloatArray).plusAssign_xac6iy_k$ = function (other) {
    return this.plusAssign_xjcc2p_k$((!(other == null) ? typeof other === 'number' : false) ? other : THROW_CCE());
  };
  protoOf(MemoryViewFloatArray).minusAssign_hrrk3a_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] - other.data_1[i];
      }
       while (!(i === last));
  };
  protoOf(MemoryViewFloatArray).minusAssign_kpy14n_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] - other;
      }
       while (!(i === last));
  };
  protoOf(MemoryViewFloatArray).minusAssign_x73sio_k$ = function (other) {
    return this.minusAssign_kpy14n_k$((!(other == null) ? typeof other === 'number' : false) ? other : THROW_CCE());
  };
  protoOf(MemoryViewFloatArray).timesAssign_qnwb4w_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] * other.data_1[i];
      }
       while (!(i === last));
  };
  protoOf(MemoryViewFloatArray).timesAssign_9pohfx_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] * other;
      }
       while (!(i === last));
  };
  protoOf(MemoryViewFloatArray).timesAssign_yswwui_k$ = function (other) {
    return this.timesAssign_9pohfx_k$((!(other == null) ? typeof other === 'number' : false) ? other : THROW_CCE());
  };
  protoOf(MemoryViewFloatArray).divAssign_lrqraj_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] / other.data_1[i];
      }
       while (!(i === last));
  };
  protoOf(MemoryViewFloatArray).divAssign_yyq0xk_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] / other;
      }
       while (!(i === last));
  };
  protoOf(MemoryViewFloatArray).divAssign_ibwwan_k$ = function (other) {
    return this.divAssign_yyq0xk_k$((!(other == null) ? typeof other === 'number' : false) ? other : THROW_CCE());
  };
  function MemoryViewIntArray(data) {
    MemoryView.call(this);
    this.data_1 = data;
    this.dtype_1 = DataType_IntDataType_getInstance();
    this.size_1 = this.data_1.length;
    this.indices_1 = get_indices_0(this.data_1);
    this.lastIndex_1 = get_lastIndex(this.data_1);
  }
  protoOf(MemoryViewIntArray).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(MemoryViewIntArray).get_dtype_iqhi0l_k$ = function () {
    return this.dtype_1;
  };
  protoOf(MemoryViewIntArray).set_size_e2677a_k$ = function (_set____db54di) {
    this.size_1 = _set____db54di;
  };
  protoOf(MemoryViewIntArray).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(MemoryViewIntArray).set_indices_6f5wkc_k$ = function (_set____db54di) {
    this.indices_1 = _set____db54di;
  };
  protoOf(MemoryViewIntArray).get_indices_xelk8u_k$ = function () {
    return this.indices_1;
  };
  protoOf(MemoryViewIntArray).set_lastIndex_mit0mh_k$ = function (_set____db54di) {
    this.lastIndex_1 = _set____db54di;
  };
  protoOf(MemoryViewIntArray).get_lastIndex_tk4gr1_k$ = function () {
    return this.lastIndex_1;
  };
  protoOf(MemoryViewIntArray).get_c1px32_k$ = function (index) {
    return this.data_1[index];
  };
  protoOf(MemoryViewIntArray).set_g707pu_k$ = function (index, value) {
    this.data_1[index] = value;
  };
  protoOf(MemoryViewIntArray).set_52lp9l_k$ = function (index, value) {
    return this.set_g707pu_k$(index, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(MemoryViewIntArray).getIntArray_rs62n4_k$ = function () {
    return this.data_1;
  };
  protoOf(MemoryViewIntArray).iterator_jk1svi_k$ = function () {
    return intArrayIterator(this.data_1);
  };
  protoOf(MemoryViewIntArray).copyOf_mek8us_k$ = function () {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.data_1.slice();
    return new MemoryViewIntArray(tmp$ret$1);
  };
  protoOf(MemoryViewIntArray).copyInto_unuv8a_k$ = function (destination, destinationOffset, startIndex, endIndex) {
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.data_1;
    var destination_0 = destination.getIntArray_rs62n4_k$();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination_0, destinationOffset, startIndex, endIndex);
    return destination;
  };
  protoOf(MemoryViewIntArray).copyInto_mp34x0_k$ = function (destination, destinationOffset, startIndex, endIndex) {
    return this.copyInto_unuv8a_k$(destination, destinationOffset, startIndex, endIndex);
  };
  protoOf(MemoryViewIntArray).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      if (!(other == null) ? !getKClassFromExpression(this).equals(getKClassFromExpression(other)) : false) {
        tmp = false;
      } else {
        if (!(other instanceof MemoryViewIntArray)) {
          tmp = false;
        } else {
          if (!(this.size_1 === other.size_1)) {
            tmp = false;
          } else {
            tmp = contentEquals(this.data_1, other.data_1);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(MemoryViewIntArray).hashCode = function () {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = until(0, this.size_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.MemoryViewIntArray.hashCode.<anonymous>' call
      var acc = accumulator;
      accumulator = imul(31, acc) + this.data_1[element] | 0;
    }
    return accumulator;
  };
  protoOf(MemoryViewIntArray).plusAssign_nrmugc_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] + other.data_1[i] | 0;
      }
       while (!(i === last));
  };
  protoOf(MemoryViewIntArray).plusAssign_8mmvnl_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] + other | 0;
      }
       while (!(i === last));
  };
  protoOf(MemoryViewIntArray).plusAssign_xac6iy_k$ = function (other) {
    return this.plusAssign_8mmvnl_k$((!(other == null) ? typeof other === 'number' : false) ? other : THROW_CCE());
  };
  protoOf(MemoryViewIntArray).minusAssign_qg6ehi_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] - other.data_1[i] | 0;
      }
       while (!(i === last));
  };
  protoOf(MemoryViewIntArray).minusAssign_p980fd_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] - other | 0;
      }
       while (!(i === last));
  };
  protoOf(MemoryViewIntArray).minusAssign_x73sio_k$ = function (other) {
    return this.minusAssign_p980fd_k$((!(other == null) ? typeof other === 'number' : false) ? other : THROW_CCE());
  };
  protoOf(MemoryViewIntArray).timesAssign_2e2ygw_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = imul(tmp1_array[tmp2_index0], other.data_1[i]);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewIntArray).timesAssign_mks6xf_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = imul(tmp1_array[tmp2_index0], other);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewIntArray).timesAssign_yswwui_k$ = function (other) {
    return this.timesAssign_mks6xf_k$((!(other == null) ? typeof other === 'number' : false) ? other : THROW_CCE());
  };
  protoOf(MemoryViewIntArray).divAssign_32mt3f_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] / other.data_1[i] | 0;
      }
       while (!(i === last));
  };
  protoOf(MemoryViewIntArray).divAssign_lu0jmg_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] + other | 0;
      }
       while (!(i === last));
  };
  protoOf(MemoryViewIntArray).divAssign_ibwwan_k$ = function (other) {
    return this.divAssign_lu0jmg_k$((!(other == null) ? typeof other === 'number' : false) ? other : THROW_CCE());
  };
  function MemoryViewDoubleArray(data) {
    MemoryView.call(this);
    this.data_1 = data;
    this.dtype_1 = DataType_DoubleDataType_getInstance();
    this.size_1 = this.data_1.length;
    this.indices_1 = get_indices_1(this.data_1);
    this.lastIndex_1 = get_lastIndex_1(this.data_1);
  }
  protoOf(MemoryViewDoubleArray).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(MemoryViewDoubleArray).get_dtype_iqhi0l_k$ = function () {
    return this.dtype_1;
  };
  protoOf(MemoryViewDoubleArray).set_size_e2677a_k$ = function (_set____db54di) {
    this.size_1 = _set____db54di;
  };
  protoOf(MemoryViewDoubleArray).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(MemoryViewDoubleArray).set_indices_6f5wkc_k$ = function (_set____db54di) {
    this.indices_1 = _set____db54di;
  };
  protoOf(MemoryViewDoubleArray).get_indices_xelk8u_k$ = function () {
    return this.indices_1;
  };
  protoOf(MemoryViewDoubleArray).set_lastIndex_mit0mh_k$ = function (_set____db54di) {
    this.lastIndex_1 = _set____db54di;
  };
  protoOf(MemoryViewDoubleArray).get_lastIndex_tk4gr1_k$ = function () {
    return this.lastIndex_1;
  };
  protoOf(MemoryViewDoubleArray).get_c1px32_k$ = function (index) {
    return this.data_1[index];
  };
  protoOf(MemoryViewDoubleArray).set_mvap1c_k$ = function (index, value) {
    this.data_1[index] = value;
  };
  protoOf(MemoryViewDoubleArray).set_52lp9l_k$ = function (index, value) {
    return this.set_mvap1c_k$(index, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(MemoryViewDoubleArray).getDoubleArray_x8889e_k$ = function () {
    return this.data_1;
  };
  protoOf(MemoryViewDoubleArray).iterator_jk1svi_k$ = function () {
    return doubleArrayIterator(this.data_1);
  };
  protoOf(MemoryViewDoubleArray).copyOf_mek8us_k$ = function () {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.data_1.slice();
    return new MemoryViewDoubleArray(tmp$ret$1);
  };
  protoOf(MemoryViewDoubleArray).copyInto_ao0836_k$ = function (destination, destinationOffset, startIndex, endIndex) {
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.data_1;
    var destination_0 = destination.getDoubleArray_x8889e_k$();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination_0, destinationOffset, startIndex, endIndex);
    return destination;
  };
  protoOf(MemoryViewDoubleArray).copyInto_mp34x0_k$ = function (destination, destinationOffset, startIndex, endIndex) {
    return this.copyInto_ao0836_k$(destination, destinationOffset, startIndex, endIndex);
  };
  protoOf(MemoryViewDoubleArray).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      if (!(other == null) ? !getKClassFromExpression(this).equals(getKClassFromExpression(other)) : false) {
        tmp = false;
      } else {
        if (!(other instanceof MemoryViewDoubleArray)) {
          tmp = false;
        } else {
          if (!(this.size_1 === other.size_1)) {
            tmp = false;
          } else {
            tmp = contentEquals_1(this.data_1, other.data_1);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(MemoryViewDoubleArray).hashCode = function () {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = until(0, this.size_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.MemoryViewDoubleArray.hashCode.<anonymous>' call
      var acc = accumulator;
      accumulator = imul(31, acc) + getNumberHashCode(this.data_1[element]) | 0;
    }
    return accumulator;
  };
  protoOf(MemoryViewDoubleArray).plusAssign_kkp59a_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] + other.data_1[i];
      }
       while (!(i === last));
  };
  protoOf(MemoryViewDoubleArray).plusAssign_hd7up9_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] + other;
      }
       while (!(i === last));
  };
  protoOf(MemoryViewDoubleArray).plusAssign_xac6iy_k$ = function (other) {
    return this.plusAssign_hd7up9_k$((!(other == null) ? typeof other === 'number' : false) ? other : THROW_CCE());
  };
  protoOf(MemoryViewDoubleArray).minusAssign_qgnw0c_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] - other.data_1[i];
      }
       while (!(i === last));
  };
  protoOf(MemoryViewDoubleArray).minusAssign_p9jhwp_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] - other;
      }
       while (!(i === last));
  };
  protoOf(MemoryViewDoubleArray).minusAssign_x73sio_k$ = function (other) {
    return this.minusAssign_p9jhwp_k$((!(other == null) ? typeof other === 'number' : false) ? other : THROW_CCE());
  };
  protoOf(MemoryViewDoubleArray).timesAssign_dx8a5y_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] * other.data_1[i];
      }
       while (!(i === last));
  };
  protoOf(MemoryViewDoubleArray).timesAssign_ush5a7_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] * other;
      }
       while (!(i === last));
  };
  protoOf(MemoryViewDoubleArray).timesAssign_yswwui_k$ = function (other) {
    return this.timesAssign_ush5a7_k$((!(other == null) ? typeof other === 'number' : false) ? other : THROW_CCE());
  };
  protoOf(MemoryViewDoubleArray).divAssign_s7zd9n_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] / other.data_1[i];
      }
       while (!(i === last));
  };
  protoOf(MemoryViewDoubleArray).divAssign_4m3nl6_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0] / other;
      }
       while (!(i === last));
  };
  protoOf(MemoryViewDoubleArray).divAssign_ibwwan_k$ = function (other) {
    return this.divAssign_4m3nl6_k$((!(other == null) ? typeof other === 'number' : false) ? other : THROW_CCE());
  };
  function MemoryViewLongArray(data) {
    MemoryView.call(this);
    this.data_1 = data;
    this.dtype_1 = DataType_LongDataType_getInstance();
    this.size_1 = this.data_1.length;
    this.indices_1 = get_indices_2(this.data_1);
    this.lastIndex_1 = get_lastIndex_2(this.data_1);
  }
  protoOf(MemoryViewLongArray).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(MemoryViewLongArray).get_dtype_iqhi0l_k$ = function () {
    return this.dtype_1;
  };
  protoOf(MemoryViewLongArray).set_size_e2677a_k$ = function (_set____db54di) {
    this.size_1 = _set____db54di;
  };
  protoOf(MemoryViewLongArray).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(MemoryViewLongArray).set_indices_6f5wkc_k$ = function (_set____db54di) {
    this.indices_1 = _set____db54di;
  };
  protoOf(MemoryViewLongArray).get_indices_xelk8u_k$ = function () {
    return this.indices_1;
  };
  protoOf(MemoryViewLongArray).set_lastIndex_mit0mh_k$ = function (_set____db54di) {
    this.lastIndex_1 = _set____db54di;
  };
  protoOf(MemoryViewLongArray).get_lastIndex_tk4gr1_k$ = function () {
    return this.lastIndex_1;
  };
  protoOf(MemoryViewLongArray).get_c1px32_k$ = function (index) {
    return this.data_1[index];
  };
  protoOf(MemoryViewLongArray).set_e163hk_k$ = function (index, value) {
    this.data_1[index] = value;
  };
  protoOf(MemoryViewLongArray).set_52lp9l_k$ = function (index, value) {
    return this.set_e163hk_k$(index, value instanceof Long ? value : THROW_CCE());
  };
  protoOf(MemoryViewLongArray).getLongArray_1i1953_k$ = function () {
    return this.data_1;
  };
  protoOf(MemoryViewLongArray).iterator_jk1svi_k$ = function () {
    return longArrayIterator(this.data_1);
  };
  protoOf(MemoryViewLongArray).copyOf_mek8us_k$ = function () {
    return new MemoryViewLongArray(copyOf(this.data_1));
  };
  protoOf(MemoryViewLongArray).copyInto_85h5ve_k$ = function (destination, destinationOffset, startIndex, endIndex) {
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.data_1;
    var destination_0 = destination.getLongArray_1i1953_k$();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination_0, destinationOffset, startIndex, endIndex);
    return destination;
  };
  protoOf(MemoryViewLongArray).copyInto_mp34x0_k$ = function (destination, destinationOffset, startIndex, endIndex) {
    return this.copyInto_85h5ve_k$(destination, destinationOffset, startIndex, endIndex);
  };
  protoOf(MemoryViewLongArray).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      if (!(other == null) ? !getKClassFromExpression(this).equals(getKClassFromExpression(other)) : false) {
        tmp = false;
      } else {
        if (!(other instanceof MemoryViewLongArray)) {
          tmp = false;
        } else {
          if (!(this.size_1 === other.size_1)) {
            tmp = false;
          } else {
            tmp = contentEquals_2(this.data_1, other.data_1);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(MemoryViewLongArray).hashCode = function () {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = until(0, this.size_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.MemoryViewLongArray.hashCode.<anonymous>' call
      var acc = accumulator;
      accumulator = imul(31, acc) + this.data_1[element].hashCode() | 0;
    }
    return accumulator;
  };
  protoOf(MemoryViewLongArray).plusAssign_bfr53t_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0].plus_r93sks_k$(other.data_1[i]);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewLongArray).plusAssign_p5ji1h_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0].plus_r93sks_k$(other);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewLongArray).plusAssign_xac6iy_k$ = function (other) {
    return this.plusAssign_p5ji1h_k$(other instanceof Long ? other : THROW_CCE());
  };
  protoOf(MemoryViewLongArray).minusAssign_vhqx4z_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0].minus_mfbszm_k$(other.data_1[i]);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewLongArray).minusAssign_elja0x_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0].minus_mfbszm_k$(other);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewLongArray).minusAssign_x73sio_k$ = function (other) {
    return this.minusAssign_elja0x_k$(other instanceof Long ? other : THROW_CCE());
  };
  protoOf(MemoryViewLongArray).timesAssign_hrthil_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0].times_nfzjiw_k$(other.data_1[i]);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewLongArray).timesAssign_vvrqxj_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0].times_nfzjiw_k$(other);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewLongArray).timesAssign_yswwui_k$ = function (other) {
    return this.timesAssign_vvrqxj_k$(other instanceof Long ? other : THROW_CCE());
  };
  protoOf(MemoryViewLongArray).divAssign_1nxfxe_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0].div_jun7gj_k$(other.data_1[i]);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewLongArray).divAssign_lc7jya_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array[tmp2_index0] = tmp1_array[tmp2_index0].div_jun7gj_k$(other);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewLongArray).divAssign_ibwwan_k$ = function (other) {
    return this.divAssign_lc7jya_k$(other instanceof Long ? other : THROW_CCE());
  };
  function MemoryViewShortArray(data) {
    MemoryView.call(this);
    this.data_1 = data;
    this.dtype_1 = DataType_ShortDataType_getInstance();
    this.size_1 = this.data_1.length;
    this.indices_1 = get_indices_3(this.data_1);
    this.lastIndex_1 = get_lastIndex_3(this.data_1);
  }
  protoOf(MemoryViewShortArray).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(MemoryViewShortArray).get_dtype_iqhi0l_k$ = function () {
    return this.dtype_1;
  };
  protoOf(MemoryViewShortArray).set_size_e2677a_k$ = function (_set____db54di) {
    this.size_1 = _set____db54di;
  };
  protoOf(MemoryViewShortArray).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(MemoryViewShortArray).set_indices_6f5wkc_k$ = function (_set____db54di) {
    this.indices_1 = _set____db54di;
  };
  protoOf(MemoryViewShortArray).get_indices_xelk8u_k$ = function () {
    return this.indices_1;
  };
  protoOf(MemoryViewShortArray).set_lastIndex_mit0mh_k$ = function (_set____db54di) {
    this.lastIndex_1 = _set____db54di;
  };
  protoOf(MemoryViewShortArray).get_lastIndex_tk4gr1_k$ = function () {
    return this.lastIndex_1;
  };
  protoOf(MemoryViewShortArray).get_c1px32_k$ = function (index) {
    return this.data_1[index];
  };
  protoOf(MemoryViewShortArray).set_hiptte_k$ = function (index, value) {
    this.data_1[index] = value;
  };
  protoOf(MemoryViewShortArray).set_52lp9l_k$ = function (index, value) {
    return this.set_hiptte_k$(index, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(MemoryViewShortArray).getShortArray_kijo6r_k$ = function () {
    return this.data_1;
  };
  protoOf(MemoryViewShortArray).iterator_jk1svi_k$ = function () {
    return shortArrayIterator(this.data_1);
  };
  protoOf(MemoryViewShortArray).copyOf_mek8us_k$ = function () {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.data_1.slice();
    return new MemoryViewShortArray(tmp$ret$1);
  };
  protoOf(MemoryViewShortArray).copyInto_oou7zt_k$ = function (destination, destinationOffset, startIndex, endIndex) {
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.data_1;
    var destination_0 = destination.getShortArray_kijo6r_k$();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination_0, destinationOffset, startIndex, endIndex);
    return destination;
  };
  protoOf(MemoryViewShortArray).copyInto_mp34x0_k$ = function (destination, destinationOffset, startIndex, endIndex) {
    return this.copyInto_oou7zt_k$(destination, destinationOffset, startIndex, endIndex);
  };
  protoOf(MemoryViewShortArray).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      if (!(other == null) ? !getKClassFromExpression(this).equals(getKClassFromExpression(other)) : false) {
        tmp = false;
      } else {
        if (!(other instanceof MemoryViewShortArray)) {
          tmp = false;
        } else {
          if (!(this.size_1 === other.size_1)) {
            tmp = false;
          } else {
            tmp = contentEquals_3(this.data_1, other.data_1);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(MemoryViewShortArray).hashCode = function () {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = until(0, this.size_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.MemoryViewShortArray.hashCode.<anonymous>' call
      var acc = accumulator;
      accumulator = imul(31, acc) + this.data_1[element] | 0;
    }
    return accumulator;
  };
  protoOf(MemoryViewShortArray).plusAssign_gg6uz0_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.data_1[i] = toShort(this.data_1[i] + other.data_1[i]);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewShortArray).plusAssign_kfgysh_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.data_1[i] = toShort(this.data_1[i] + other);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewShortArray).plusAssign_xac6iy_k$ = function (other) {
    return this.plusAssign_kfgysh_k$((!(other == null) ? typeof other === 'number' : false) ? other : THROW_CCE());
  };
  protoOf(MemoryViewShortArray).minusAssign_uqcr62_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.data_1[i] = toShort(this.data_1[i] - other.data_1[i]);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewShortArray).minusAssign_7m2nuf_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.data_1[i] = toShort(this.data_1[i] - other);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewShortArray).minusAssign_x73sio_k$ = function (other) {
    return this.minusAssign_7m2nuf_k$((!(other == null) ? typeof other === 'number' : false) ? other : THROW_CCE());
  };
  protoOf(MemoryViewShortArray).timesAssign_44wkf4_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.data_1[i] = toShort(this.data_1[i] * other.data_1[i] | 0);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewShortArray).timesAssign_3e6vub_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.data_1[i] = toShort(this.data_1[i] * other | 0);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewShortArray).timesAssign_yswwui_k$ = function (other) {
    return this.timesAssign_3e6vub_k$((!(other == null) ? typeof other === 'number' : false) ? other : THROW_CCE());
  };
  protoOf(MemoryViewShortArray).divAssign_r8zf9_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.data_1[i] = toShort(this.data_1[i] / other.data_1[i] | 0);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewShortArray).divAssign_luunnc_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.data_1[i] = toShort(this.data_1[i] / other | 0);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewShortArray).divAssign_ibwwan_k$ = function (other) {
    return this.divAssign_luunnc_k$((!(other == null) ? typeof other === 'number' : false) ? other : THROW_CCE());
  };
  function MemoryViewByteArray(data) {
    MemoryView.call(this);
    this.data_1 = data;
    this.dtype_1 = DataType_ByteDataType_getInstance();
    this.size_1 = this.data_1.length;
    this.indices_1 = get_indices_4(this.data_1);
    this.lastIndex_1 = get_lastIndex_4(this.data_1);
  }
  protoOf(MemoryViewByteArray).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(MemoryViewByteArray).get_dtype_iqhi0l_k$ = function () {
    return this.dtype_1;
  };
  protoOf(MemoryViewByteArray).set_size_e2677a_k$ = function (_set____db54di) {
    this.size_1 = _set____db54di;
  };
  protoOf(MemoryViewByteArray).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(MemoryViewByteArray).set_indices_6f5wkc_k$ = function (_set____db54di) {
    this.indices_1 = _set____db54di;
  };
  protoOf(MemoryViewByteArray).get_indices_xelk8u_k$ = function () {
    return this.indices_1;
  };
  protoOf(MemoryViewByteArray).set_lastIndex_mit0mh_k$ = function (_set____db54di) {
    this.lastIndex_1 = _set____db54di;
  };
  protoOf(MemoryViewByteArray).get_lastIndex_tk4gr1_k$ = function () {
    return this.lastIndex_1;
  };
  protoOf(MemoryViewByteArray).get_c1px32_k$ = function (index) {
    return this.data_1[index];
  };
  protoOf(MemoryViewByteArray).set_w461ta_k$ = function (index, value) {
    this.data_1[index] = value;
  };
  protoOf(MemoryViewByteArray).set_52lp9l_k$ = function (index, value) {
    return this.set_w461ta_k$(index, (!(value == null) ? typeof value === 'number' : false) ? value : THROW_CCE());
  };
  protoOf(MemoryViewByteArray).getByteArray_yjfvk5_k$ = function () {
    return this.data_1;
  };
  protoOf(MemoryViewByteArray).iterator_jk1svi_k$ = function () {
    return byteArrayIterator(this.data_1);
  };
  protoOf(MemoryViewByteArray).copyOf_mek8us_k$ = function () {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.data_1.slice();
    return new MemoryViewByteArray(tmp$ret$1);
  };
  protoOf(MemoryViewByteArray).copyInto_uyyzdn_k$ = function (destination, destinationOffset, startIndex, endIndex) {
    // Inline function 'kotlin.collections.copyInto' call
    var this_0 = this.data_1;
    var destination_0 = destination.getByteArray_yjfvk5_k$();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_0;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination_0, destinationOffset, startIndex, endIndex);
    return destination;
  };
  protoOf(MemoryViewByteArray).copyInto_mp34x0_k$ = function (destination, destinationOffset, startIndex, endIndex) {
    return this.copyInto_uyyzdn_k$(destination, destinationOffset, startIndex, endIndex);
  };
  protoOf(MemoryViewByteArray).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      if (!(other == null) ? !getKClassFromExpression(this).equals(getKClassFromExpression(other)) : false) {
        tmp = false;
      } else {
        if (!(other instanceof MemoryViewByteArray)) {
          tmp = false;
        } else {
          if (!(this.size_1 === other.size_1)) {
            tmp = false;
          } else {
            tmp = contentEquals_4(this.data_1, other.data_1);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(MemoryViewByteArray).hashCode = function () {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = until(0, this.size_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.MemoryViewByteArray.hashCode.<anonymous>' call
      var acc = accumulator;
      accumulator = imul(31, acc) + this.data_1[element] | 0;
    }
    return accumulator;
  };
  protoOf(MemoryViewByteArray).plusAssign_kpw5v4_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.data_1[i] = toByte(this.data_1[i] + other.data_1[i]);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewByteArray).plusAssign_kzsn9d_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.data_1[i] = toByte(this.data_1[i] + other);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewByteArray).plusAssign_xac6iy_k$ = function (other) {
    return this.plusAssign_kzsn9d_k$((!(other == null) ? typeof other === 'number' : false) ? other : THROW_CCE());
  };
  protoOf(MemoryViewByteArray).minusAssign_nwdty_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.data_1[i] = toByte(this.data_1[i] - other.data_1[i]);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewByteArray).minusAssign_aa8mnd_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.data_1[i] = toByte(this.data_1[i] - other);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewByteArray).minusAssign_x73sio_k$ = function (other) {
    return this.minusAssign_aa8mnd_k$((!(other == null) ? typeof other === 'number' : false) ? other : THROW_CCE());
  };
  protoOf(MemoryViewByteArray).timesAssign_edttgc_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.data_1[i] = toByte(this.data_1[i] * other.data_1[i] | 0);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewByteArray).timesAssign_6zzu99_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.data_1[i] = toByte(this.data_1[i] * other | 0);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewByteArray).timesAssign_yswwui_k$ = function (other) {
    return this.timesAssign_6zzu99_k$((!(other == null) ? typeof other === 'number' : false) ? other : THROW_CCE());
  };
  protoOf(MemoryViewByteArray).divAssign_uhpv1j_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.data_1[i] = toByte(this.data_1[i] / other.data_1[i] | 0);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewByteArray).divAssign_3jkcq0_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.data_1[i] = toByte(this.data_1[i] / other | 0);
      }
       while (!(i === last));
  };
  protoOf(MemoryViewByteArray).divAssign_ibwwan_k$ = function (other) {
    return this.divAssign_3jkcq0_k$((!(other == null) ? typeof other === 'number' : false) ? other : THROW_CCE());
  };
  function MemoryViewComplexFloatArray(data) {
    MemoryView.call(this);
    this.data_1 = data;
    this.dtype_1 = DataType_ComplexFloatDataType_getInstance();
    this.size_1 = this.data_1.get_size_woubt6_k$();
    this.indices_1 = get_indices_5(this.data_1);
    this.lastIndex_1 = get_lastIndex_5(this.data_1);
  }
  protoOf(MemoryViewComplexFloatArray).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(MemoryViewComplexFloatArray).get_dtype_iqhi0l_k$ = function () {
    return this.dtype_1;
  };
  protoOf(MemoryViewComplexFloatArray).set_size_e2677a_k$ = function (_set____db54di) {
    this.size_1 = _set____db54di;
  };
  protoOf(MemoryViewComplexFloatArray).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(MemoryViewComplexFloatArray).set_indices_6f5wkc_k$ = function (_set____db54di) {
    this.indices_1 = _set____db54di;
  };
  protoOf(MemoryViewComplexFloatArray).get_indices_xelk8u_k$ = function () {
    return this.indices_1;
  };
  protoOf(MemoryViewComplexFloatArray).set_lastIndex_mit0mh_k$ = function (_set____db54di) {
    this.lastIndex_1 = _set____db54di;
  };
  protoOf(MemoryViewComplexFloatArray).get_lastIndex_tk4gr1_k$ = function () {
    return this.lastIndex_1;
  };
  protoOf(MemoryViewComplexFloatArray).get_c1px32_k$ = function (index) {
    return this.data_1.get_c1px32_k$(index);
  };
  protoOf(MemoryViewComplexFloatArray).set_31o1op_k$ = function (index, value) {
    this.data_1.set_31o1op_k$(index, value);
  };
  protoOf(MemoryViewComplexFloatArray).set_52lp9l_k$ = function (index, value) {
    return this.set_31o1op_k$(index, value instanceof ComplexFloat ? value : THROW_CCE());
  };
  protoOf(MemoryViewComplexFloatArray).getFloatArray_m77gkt_k$ = function () {
    return this.data_1.getFlatArray_j8ml3q_k$();
  };
  protoOf(MemoryViewComplexFloatArray).getComplexFloatArray_56zcs7_k$ = function () {
    return this.data_1;
  };
  protoOf(MemoryViewComplexFloatArray).iterator_jk1svi_k$ = function () {
    return this.data_1.iterator_jk1svi_k$();
  };
  protoOf(MemoryViewComplexFloatArray).copyOf_mek8us_k$ = function () {
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.complex.copyOf' call
    var this_0 = this.data_1;
    var ret = new ComplexFloatArray(this_0.get_size_woubt6_k$());
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = this_0.getFlatArray_j8ml3q_k$();
    var destination = ret.getFlatArray_j8ml3q_k$();
    var endIndex = imul(ret.get_size_woubt6_k$(), 2);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination, 0, 0, endIndex);
    return new MemoryViewComplexFloatArray(ret);
  };
  protoOf(MemoryViewComplexFloatArray).copyInto_efp5d4_k$ = function (destination, destinationOffset, startIndex, endIndex) {
    copyInto(this.data_1, destination.getComplexFloatArray_56zcs7_k$(), destinationOffset, startIndex, endIndex);
    return destination;
  };
  protoOf(MemoryViewComplexFloatArray).copyInto_mp34x0_k$ = function (destination, destinationOffset, startIndex, endIndex) {
    return this.copyInto_efp5d4_k$(destination, destinationOffset, startIndex, endIndex);
  };
  protoOf(MemoryViewComplexFloatArray).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      if (!(other == null) ? !getKClassFromExpression(this).equals(getKClassFromExpression(other)) : false) {
        tmp = false;
      } else {
        if (!(other instanceof MemoryViewComplexFloatArray)) {
          tmp = false;
        } else {
          if (!(this.size_1 === other.size_1)) {
            tmp = false;
          } else {
            tmp = this.data_1.equals(other.data_1);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(MemoryViewComplexFloatArray).hashCode = function () {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = until(0, this.size_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.MemoryViewComplexFloatArray.hashCode.<anonymous>' call
      var acc = accumulator;
      accumulator = imul(31, acc) + this.data_1.get_c1px32_k$(element).hashCode() | 0;
    }
    return accumulator;
  };
  protoOf(MemoryViewComplexFloatArray).plusAssign_cfch7t_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array.set_31o1op_k$(tmp2_index0, tmp1_array.get_c1px32_k$(tmp2_index0).plus_8lqpe3_k$(other.data_1.get_c1px32_k$(i)));
      }
       while (!(i === last));
  };
  protoOf(MemoryViewComplexFloatArray).plusAssign_1edp6e_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array.set_31o1op_k$(tmp2_index0, tmp1_array.get_c1px32_k$(tmp2_index0).plus_8lqpe3_k$(other));
      }
       while (!(i === last));
  };
  protoOf(MemoryViewComplexFloatArray).plusAssign_xac6iy_k$ = function (other) {
    return this.plusAssign_1edp6e_k$(other instanceof ComplexFloat ? other : THROW_CCE());
  };
  protoOf(MemoryViewComplexFloatArray).minusAssign_3dh1j3_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array.set_31o1op_k$(tmp2_index0, tmp1_array.get_c1px32_k$(tmp2_index0).minus_vtej6p_k$(other.data_1.get_c1px32_k$(i)));
      }
       while (!(i === last));
  };
  protoOf(MemoryViewComplexFloatArray).minusAssign_whqhsw_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array.set_31o1op_k$(tmp2_index0, tmp1_array.get_c1px32_k$(tmp2_index0).minus_vtej6p_k$(other));
      }
       while (!(i === last));
  };
  protoOf(MemoryViewComplexFloatArray).minusAssign_x73sio_k$ = function (other) {
    return this.minusAssign_whqhsw_k$(other instanceof ComplexFloat ? other : THROW_CCE());
  };
  protoOf(MemoryViewComplexFloatArray).timesAssign_atx49h_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array.set_31o1op_k$(tmp2_index0, tmp1_array.get_c1px32_k$(tmp2_index0).times_c0fmev_k$(other.data_1.get_c1px32_k$(i)));
      }
       while (!(i === last));
  };
  protoOf(MemoryViewComplexFloatArray).timesAssign_4ft022_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array.set_31o1op_k$(tmp2_index0, tmp1_array.get_c1px32_k$(tmp2_index0).times_c0fmev_k$(other));
      }
       while (!(i === last));
  };
  protoOf(MemoryViewComplexFloatArray).timesAssign_yswwui_k$ = function (other) {
    return this.timesAssign_4ft022_k$(other instanceof ComplexFloat ? other : THROW_CCE());
  };
  protoOf(MemoryViewComplexFloatArray).divAssign_2gr0yo_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array.set_31o1op_k$(tmp2_index0, tmp1_array.get_c1px32_k$(tmp2_index0).div_ra8ixu_k$(other.data_1.get_c1px32_k$(i)));
      }
       while (!(i === last));
  };
  protoOf(MemoryViewComplexFloatArray).divAssign_l2xiht_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array.set_31o1op_k$(tmp2_index0, tmp1_array.get_c1px32_k$(tmp2_index0).div_ra8ixu_k$(other));
      }
       while (!(i === last));
  };
  protoOf(MemoryViewComplexFloatArray).divAssign_ibwwan_k$ = function (other) {
    return this.divAssign_l2xiht_k$(other instanceof ComplexFloat ? other : THROW_CCE());
  };
  function MemoryViewComplexDoubleArray(data) {
    MemoryView.call(this);
    this.data_1 = data;
    this.dtype_1 = DataType_ComplexDoubleDataType_getInstance();
    this.size_1 = this.data_1.get_size_woubt6_k$();
    this.indices_1 = get_indices_6(this.data_1);
    this.lastIndex_1 = get_lastIndex_6(this.data_1);
  }
  protoOf(MemoryViewComplexDoubleArray).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(MemoryViewComplexDoubleArray).get_dtype_iqhi0l_k$ = function () {
    return this.dtype_1;
  };
  protoOf(MemoryViewComplexDoubleArray).set_size_e2677a_k$ = function (_set____db54di) {
    this.size_1 = _set____db54di;
  };
  protoOf(MemoryViewComplexDoubleArray).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(MemoryViewComplexDoubleArray).set_indices_6f5wkc_k$ = function (_set____db54di) {
    this.indices_1 = _set____db54di;
  };
  protoOf(MemoryViewComplexDoubleArray).get_indices_xelk8u_k$ = function () {
    return this.indices_1;
  };
  protoOf(MemoryViewComplexDoubleArray).set_lastIndex_mit0mh_k$ = function (_set____db54di) {
    this.lastIndex_1 = _set____db54di;
  };
  protoOf(MemoryViewComplexDoubleArray).get_lastIndex_tk4gr1_k$ = function () {
    return this.lastIndex_1;
  };
  protoOf(MemoryViewComplexDoubleArray).get_c1px32_k$ = function (index) {
    return this.data_1.get_c1px32_k$(index);
  };
  protoOf(MemoryViewComplexDoubleArray).set_hzotmi_k$ = function (index, value) {
    this.data_1.set_hzotmi_k$(index, value);
  };
  protoOf(MemoryViewComplexDoubleArray).set_52lp9l_k$ = function (index, value) {
    return this.set_hzotmi_k$(index, value instanceof ComplexDouble ? value : THROW_CCE());
  };
  protoOf(MemoryViewComplexDoubleArray).getDoubleArray_x8889e_k$ = function () {
    return this.data_1.getFlatArray_j8ml3q_k$();
  };
  protoOf(MemoryViewComplexDoubleArray).getComplexDoubleArray_u2qur2_k$ = function () {
    return this.data_1;
  };
  protoOf(MemoryViewComplexDoubleArray).iterator_jk1svi_k$ = function () {
    return this.data_1.iterator_jk1svi_k$();
  };
  protoOf(MemoryViewComplexDoubleArray).copyOf_mek8us_k$ = function () {
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.complex.copyOf' call
    var this_0 = this.data_1;
    var ret = new ComplexDoubleArray(this_0.get_size_woubt6_k$());
    // Inline function 'kotlin.collections.copyInto' call
    var this_1 = this_0.getFlatArray_j8ml3q_k$();
    var destination = ret.getFlatArray_j8ml3q_k$();
    var endIndex = imul(ret.get_size_woubt6_k$(), 2);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this_1;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp, destination, 0, 0, endIndex);
    return new MemoryViewComplexDoubleArray(ret);
  };
  protoOf(MemoryViewComplexDoubleArray).copyInto_6599rh_k$ = function (destination, destinationOffset, startIndex, endIndex) {
    copyInto_0(this.data_1, destination.getComplexDoubleArray_u2qur2_k$(), destinationOffset, startIndex, endIndex);
    return destination;
  };
  protoOf(MemoryViewComplexDoubleArray).copyInto_mp34x0_k$ = function (destination, destinationOffset, startIndex, endIndex) {
    return this.copyInto_6599rh_k$(destination, destinationOffset, startIndex, endIndex);
  };
  protoOf(MemoryViewComplexDoubleArray).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      if (!(other == null) ? !getKClassFromExpression(this).equals(getKClassFromExpression(other)) : false) {
        tmp = false;
      } else {
        if (!(other instanceof MemoryViewComplexDoubleArray)) {
          tmp = false;
        } else {
          if (!(this.size_1 === other.size_1)) {
            tmp = false;
          } else {
            tmp = this.data_1.equals(other.data_1);
          }
        }
      }
    }
    return tmp;
  };
  protoOf(MemoryViewComplexDoubleArray).hashCode = function () {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var tmp0_iterator = until(0, this.size_1).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.MemoryViewComplexDoubleArray.hashCode.<anonymous>' call
      var acc = accumulator;
      accumulator = imul(31, acc) + this.data_1.get_c1px32_k$(element).hashCode() | 0;
    }
    return accumulator;
  };
  protoOf(MemoryViewComplexDoubleArray).plusAssign_c8fe19_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array.set_hzotmi_k$(tmp2_index0, tmp1_array.get_c1px32_k$(tmp2_index0).plus_nev5n6_k$(other.data_1.get_c1px32_k$(i)));
      }
       while (!(i === last));
  };
  protoOf(MemoryViewComplexDoubleArray).plusAssign_x27y4z_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array.set_hzotmi_k$(tmp2_index0, tmp1_array.get_c1px32_k$(tmp2_index0).plus_nev5n6_k$(other));
      }
       while (!(i === last));
  };
  protoOf(MemoryViewComplexDoubleArray).plusAssign_xac6iy_k$ = function (other) {
    return this.plusAssign_x27y4z_k$(other instanceof ComplexDouble ? other : THROW_CCE());
  };
  protoOf(MemoryViewComplexDoubleArray).minusAssign_pk9lzd_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array.set_hzotmi_k$(tmp2_index0, tmp1_array.get_c1px32_k$(tmp2_index0).minus_wp99j0_k$(other.data_1.get_c1px32_k$(i)));
      }
       while (!(i === last));
  };
  protoOf(MemoryViewComplexDoubleArray).minusAssign_7fbzk3_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array.set_hzotmi_k$(tmp2_index0, tmp1_array.get_c1px32_k$(tmp2_index0).minus_wp99j0_k$(other));
      }
       while (!(i === last));
  };
  protoOf(MemoryViewComplexDoubleArray).minusAssign_x73sio_k$ = function (other) {
    return this.minusAssign_7fbzk3_k$(other instanceof ComplexDouble ? other : THROW_CCE());
  };
  protoOf(MemoryViewComplexDoubleArray).timesAssign_hh10wv_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array.set_hzotmi_k$(tmp2_index0, tmp1_array.get_c1px32_k$(tmp2_index0).times_czwimy_k$(other.data_1.get_c1px32_k$(i)));
      }
       while (!(i === last));
  };
  protoOf(MemoryViewComplexDoubleArray).timesAssign_9v5muf_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array.set_hzotmi_k$(tmp2_index0, tmp1_array.get_c1px32_k$(tmp2_index0).times_czwimy_k$(other));
      }
       while (!(i === last));
  };
  protoOf(MemoryViewComplexDoubleArray).timesAssign_yswwui_k$ = function (other) {
    return this.timesAssign_9v5muf_k$(other instanceof ComplexDouble ? other : THROW_CCE());
  };
  protoOf(MemoryViewComplexDoubleArray).divAssign_4f54oa_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array.set_hzotmi_k$(tmp2_index0, tmp1_array.get_c1px32_k$(tmp2_index0).div_y9b5uj_k$(other.data_1.get_c1px32_k$(i)));
      }
       while (!(i === last));
  };
  protoOf(MemoryViewComplexDoubleArray).divAssign_jnr07w_k$ = function (other) {
    var progression = this.indices_1;
    var inductionVariable = progression.get_first_irdx8n_k$();
    var last = progression.get_last_wopotb_k$();
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_array = this.data_1;
        var tmp2_index0 = i;
        tmp1_array.set_hzotmi_k$(tmp2_index0, tmp1_array.get_c1px32_k$(tmp2_index0).div_y9b5uj_k$(other));
      }
       while (!(i === last));
  };
  protoOf(MemoryViewComplexDoubleArray).divAssign_ibwwan_k$ = function (other) {
    return this.divAssign_jnr07w_k$(other instanceof ComplexDouble ? other : THROW_CCE());
  };
  function MultiArray() {
  }
  function get(_this__u8e3s4, index) {
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    var value = 0 <= index ? index < _this__u8e3s4.get_shape_iyi9a0_k$()[0] : false;
    var size = _this__u8e3s4.get_shape_iyi9a0_k$()[0];
    if (!value) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' is out of bounds shape dimension ' + 0 + ' with size ' + size);
    }
    return _this__u8e3s4.get_data_wokkxf_k$().get_c1px32_k$(_this__u8e3s4.get_offset_hjmqak_k$() + imul(first_0(_this__u8e3s4.get_strides_tusw1b_k$()), index) | 0);
  }
  function get_0(_this__u8e3s4, ind1, ind2) {
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    var value = 0 <= ind1 ? ind1 < _this__u8e3s4.get_shape_iyi9a0_k$()[0] : false;
    var size = _this__u8e3s4.get_shape_iyi9a0_k$()[0];
    if (!value) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + ind1 + ' is out of bounds shape dimension ' + 0 + ' with size ' + size);
    }
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    var value_0 = 0 <= ind2 ? ind2 < _this__u8e3s4.get_shape_iyi9a0_k$()[1] : false;
    var size_0 = _this__u8e3s4.get_shape_iyi9a0_k$()[1];
    if (!value_0) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + ind2 + ' is out of bounds shape dimension ' + 1 + ' with size ' + size_0);
    }
    return _this__u8e3s4.get_data_wokkxf_k$().get_c1px32_k$((_this__u8e3s4.get_offset_hjmqak_k$() + imul(_this__u8e3s4.get_strides_tusw1b_k$()[0], ind1) | 0) + imul(_this__u8e3s4.get_strides_tusw1b_k$()[1], ind2) | 0);
  }
  function get_1(_this__u8e3s4, ind1, ind2, ind3) {
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    var value = 0 <= ind1 ? ind1 < _this__u8e3s4.get_shape_iyi9a0_k$()[0] : false;
    var size = _this__u8e3s4.get_shape_iyi9a0_k$()[0];
    if (!value) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + ind1 + ' is out of bounds shape dimension ' + 0 + ' with size ' + size);
    }
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    var value_0 = 0 <= ind2 ? ind2 < _this__u8e3s4.get_shape_iyi9a0_k$()[1] : false;
    var size_0 = _this__u8e3s4.get_shape_iyi9a0_k$()[1];
    if (!value_0) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + ind2 + ' is out of bounds shape dimension ' + 1 + ' with size ' + size_0);
    }
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    var value_1 = 0 <= ind3 ? ind3 < _this__u8e3s4.get_shape_iyi9a0_k$()[2] : false;
    var size_1 = _this__u8e3s4.get_shape_iyi9a0_k$()[2];
    if (!value_1) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + ind3 + ' is out of bounds shape dimension ' + 2 + ' with size ' + size_1);
    }
    return _this__u8e3s4.get_data_wokkxf_k$().get_c1px32_k$(((_this__u8e3s4.get_offset_hjmqak_k$() + imul(_this__u8e3s4.get_strides_tusw1b_k$()[0], ind1) | 0) + imul(_this__u8e3s4.get_strides_tusw1b_k$()[1], ind2) | 0) + imul(_this__u8e3s4.get_strides_tusw1b_k$()[2], ind3) | 0);
  }
  function get_2(_this__u8e3s4, ind1, ind2, ind3, ind4) {
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    var value = 0 <= ind1 ? ind1 < _this__u8e3s4.get_shape_iyi9a0_k$()[0] : false;
    var size = _this__u8e3s4.get_shape_iyi9a0_k$()[0];
    if (!value) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + ind1 + ' is out of bounds shape dimension ' + 0 + ' with size ' + size);
    }
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    var value_0 = 0 <= ind2 ? ind2 < _this__u8e3s4.get_shape_iyi9a0_k$()[1] : false;
    var size_0 = _this__u8e3s4.get_shape_iyi9a0_k$()[1];
    if (!value_0) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + ind2 + ' is out of bounds shape dimension ' + 1 + ' with size ' + size_0);
    }
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    var value_1 = 0 <= ind3 ? ind3 < _this__u8e3s4.get_shape_iyi9a0_k$()[2] : false;
    var size_1 = _this__u8e3s4.get_shape_iyi9a0_k$()[2];
    if (!value_1) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + ind3 + ' is out of bounds shape dimension ' + 2 + ' with size ' + size_1);
    }
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    var value_2 = 0 <= ind4 ? ind4 < _this__u8e3s4.get_shape_iyi9a0_k$()[3] : false;
    var size_2 = _this__u8e3s4.get_shape_iyi9a0_k$()[3];
    if (!value_2) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + ind4 + ' is out of bounds shape dimension ' + 3 + ' with size ' + size_2);
    }
    return _this__u8e3s4.get_data_wokkxf_k$().get_c1px32_k$((((_this__u8e3s4.get_offset_hjmqak_k$() + imul(_this__u8e3s4.get_strides_tusw1b_k$()[0], ind1) | 0) + imul(_this__u8e3s4.get_strides_tusw1b_k$()[1], ind2) | 0) + imul(_this__u8e3s4.get_strides_tusw1b_k$()[2], ind3) | 0) + imul(_this__u8e3s4.get_strides_tusw1b_k$()[3], ind4) | 0);
  }
  function _get_base__d46q3e($this) {
    return $this.base_1;
  }
  function ReadableView(base) {
    this.base_1 = base;
  }
  protoOf(ReadableView).get_j2zj3f_k$ = function (indices) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = this.base_1;
    var inductionVariable = 0;
    var last = indices.length;
    while (inductionVariable < last) {
      var element = indices[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.ReadableView.get.<anonymous>' call
      var m = accumulator;
      accumulator = view(m, element);
    }
    return accumulator;
  };
  function get_V(_this__u8e3s4) {
    return new ReadableView(_this__u8e3s4);
  }
  function checkBounds(value, index, axis, size) {
    if (!value) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' is out of bounds shape dimension ' + axis + ' with size ' + size);
    }
  }
  function view(_this__u8e3s4, index, axis) {
    axis = axis === VOID ? 0 : axis;
    return view_0(_this__u8e3s4, index, axis);
  }
  function view_0(_this__u8e3s4, index, axis) {
    axis = axis === VOID ? 0 : axis;
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    if (!(0 <= index ? index < _this__u8e3s4.get_shape_iyi9a0_k$()[axis] : false)) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' is out of bounds shape dimension ' + axis + ' with size ' + axis);
    }
    var tmp = _this__u8e3s4.get_data_wokkxf_k$();
    var tmp_0 = _this__u8e3s4.get_offset_hjmqak_k$() + imul(_this__u8e3s4.get_strides_tusw1b_k$()[axis], index) | 0;
    var tmp_1 = remove(_this__u8e3s4.get_shape_iyi9a0_k$(), axis);
    var tmp_2 = remove(_this__u8e3s4.get_strides_tusw1b_k$(), axis);
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.dimensionOf' call
    var dim = _this__u8e3s4.get_dim_18j7c1_k$().get_d_1mhr5n_k$() - 1 | 0;
    var tmp_3;
    switch (dim) {
      case 1:
        tmp_3 = Companion_getInstance_4();
        break;
      case 2:
        tmp_3 = Companion_getInstance_5();
        break;
      case 3:
        tmp_3 = Companion_getInstance_6();
        break;
      case 4:
        tmp_3 = Companion_getInstance_7();
        break;
      default:
        tmp_3 = new DN(dim);
        break;
    }
    var tmp_4 = isInterface(tmp_3, Dimension) ? tmp_3 : THROW_CCE();
    var tmp0_elvis_lhs = _this__u8e3s4.get_base_wojaxm_k$();
    return new NDArray(tmp, tmp_0, tmp_1, tmp_2, tmp_4, tmp0_elvis_lhs == null ? _this__u8e3s4 : tmp0_elvis_lhs);
  }
  function slice(_this__u8e3s4, indexing) {
    var newOffset = _this__u8e3s4.get_offset_hjmqak_k$();
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newShape = _this__u8e3s4.get_shape_iyi9a0_k$().slice();
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newStrides = _this__u8e3s4.get_strides_tusw1b_k$().slice();
    // Inline function 'kotlin.collections.mutableListOf' call
    var removeAxes = ArrayList_init_$Create$();
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator = indexing.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var ind = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.require' call
      var containsUpper = _this__u8e3s4.get_dim_18j7c1_k$().get_d_1mhr5n_k$();
      var containsArg = ind.get_key_18j28a_k$();
      // Inline function 'kotlin.contracts.contract' call
      if (!(0 <= containsArg ? containsArg < containsUpper : false)) {
        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.slice.<anonymous>' call
        var message = 'axis out of bounds: ' + ind.get_key_18j28a_k$();
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      var tmp1_subject = ind.get_value_j01efc_k$();
      if (tmp1_subject instanceof RInt) {
        var tmp = ind.get_value_j01efc_k$();
        var index = _RInt___get_data__impl__px4ib9(tmp instanceof RInt ? tmp.data_1 : THROW_CCE());
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(0 <= index ? index < _this__u8e3s4.get_shape_iyi9a0_k$()[ind.get_key_18j28a_k$()] : false)) {
          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.slice.<anonymous>' call
          var message_0 = 'Index ' + index + ' out of bounds at [0, ' + (_this__u8e3s4.get_shape_iyi9a0_k$()[ind.get_key_18j28a_k$()] - 1 | 0) + ']';
          throw IllegalArgumentException_init_$Create$(toString(message_0));
        }
        newOffset = newOffset + imul(newStrides[ind.get_key_18j28a_k$()], index) | 0;
        removeAxes.add_utx5q5_k$(ind.get_key_18j28a_k$());
      } else {
        if (tmp1_subject instanceof Slice) {
          var tmp_0 = ind.get_value_j01efc_k$();
          var index_0 = tmp_0 instanceof Slice ? tmp_0 : THROW_CCE();
          var tmp_1;
          if (!(index_0.get_start_iypx6h_k$() === -1)) {
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!(index_0.get_start_iypx6h_k$() > -1)) {
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.slice.<anonymous>' call
              var message_1 = 'slicing start index must be positive, but was ' + index_0.get_start_iypx6h_k$();
              throw IllegalStateException_init_$Create$(toString(message_1));
            }
            tmp_1 = index_0.get_start_iypx6h_k$();
          } else {
            tmp_1 = 0;
          }
          var actualFrom = tmp_1;
          var tmp_2;
          if (!(index_0.get_stop_woujpn_k$() === -1)) {
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!(index_0.get_stop_woujpn_k$() <= _this__u8e3s4.get_shape_iyi9a0_k$()[ind.get_key_18j28a_k$()])) {
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.slice.<anonymous>' call
              var message_2 = 'slicing end index out of bounds: ' + index_0.get_stop_woujpn_k$() + ' > ' + _this__u8e3s4.get_shape_iyi9a0_k$()[ind.get_key_18j28a_k$()];
              throw IllegalStateException_init_$Create$(toString(message_2));
            }
            tmp_2 = index_0.get_stop_woujpn_k$();
          } else {
            // Inline function 'kotlin.check' call
            // Inline function 'kotlin.contracts.contract' call
            if (!(_this__u8e3s4.get_shape_iyi9a0_k$()[ind.get_key_18j28a_k$()] > index_0.get_start_iypx6h_k$())) {
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.slice.<anonymous>' call
              var message_3 = 'slicing start index out of bounds: ' + actualFrom + ' >= ' + _this__u8e3s4.get_shape_iyi9a0_k$()[ind.get_key_18j28a_k$()];
              throw IllegalStateException_init_$Create$(toString(message_3));
            }
            tmp_2 = _this__u8e3s4.get_shape_iyi9a0_k$()[ind.get_key_18j28a_k$()] - 1 | 0;
          }
          var actualTo = tmp_2;
          newOffset = newOffset + imul(actualFrom, newStrides[ind.get_key_18j28a_k$()]) | 0;
          newShape[ind.get_key_18j28a_k$()] = actualFrom > actualTo ? 0 : ((actualTo - actualFrom | 0) + index_0.get_step_woujh1_k$() | 0) / index_0.get_step_woujh1_k$() | 0;
          var tmp2_array = newStrides;
          var tmp3_index0 = ind.get_key_18j28a_k$();
          tmp2_array[tmp3_index0] = imul(tmp2_array[tmp3_index0], index_0.get_step_woujh1_k$());
        }
      }
    }
    newShape = removeAll(newShape, removeAxes);
    newStrides = removeAll(newStrides, removeAxes);
    var tmp_3 = _this__u8e3s4.get_data_wokkxf_k$();
    var tmp_4 = newOffset;
    var tmp_5 = newShape;
    var tmp_6 = newStrides;
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.dimensionOf' call
    var dim = newShape.length;
    var tmp_7;
    switch (dim) {
      case 1:
        tmp_7 = Companion_getInstance_4();
        break;
      case 2:
        tmp_7 = Companion_getInstance_5();
        break;
      case 3:
        tmp_7 = Companion_getInstance_6();
        break;
      case 4:
        tmp_7 = Companion_getInstance_7();
        break;
      default:
        tmp_7 = new DN(dim);
        break;
    }
    var tmp_8 = isInterface(tmp_7, Dimension) ? tmp_7 : THROW_CCE();
    var tmp4_elvis_lhs = _this__u8e3s4.get_base_wojaxm_k$();
    return new NDArray(tmp_3, tmp_4, tmp_5, tmp_6, tmp_8, tmp4_elvis_lhs == null ? _this__u8e3s4 : tmp4_elvis_lhs);
  }
  function get_3(_this__u8e3s4, ind1, ind2) {
    return slice(_this__u8e3s4, mapOf([to(0, toSlice(ind1)), to(1, toSlice(ind2))]));
  }
  function get_4(_this__u8e3s4, ind1, ind2) {
    return slice(_this__u8e3s4, mapOf([to(0, new RInt(get_r(ind1))), to(1, toSlice(ind2))]));
  }
  function get_5(_this__u8e3s4, ind1, ind2) {
    return slice(_this__u8e3s4, mapOf([to(0, toSlice(ind1)), to(1, new RInt(get_r(ind2)))]));
  }
  function get_6(_this__u8e3s4, index) {
    return slice_0(_this__u8e3s4, index);
  }
  function slice_0(_this__u8e3s4, inSlice, axis) {
    axis = axis === VOID ? 0 : axis;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= axis ? axis < _this__u8e3s4.get_dim_18j7c1_k$().get_d_1mhr5n_k$() : false)) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.slice.<anonymous>' call
      var message = 'axis out of bounds: ' + axis;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var slice = toSlice(inSlice);
    var tmp;
    if (!(slice.get_start_iypx6h_k$() === -1)) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(slice.get_start_iypx6h_k$() > -1)) {
        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.slice.<anonymous>' call
        var message_0 = 'slicing start index must be positive, but was ' + slice.get_start_iypx6h_k$();
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      tmp = slice.get_start_iypx6h_k$();
    } else {
      tmp = 0;
    }
    var actualFrom = tmp;
    var tmp_0;
    if (!(slice.get_stop_woujpn_k$() === -1)) {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(slice.get_stop_woujpn_k$() <= _this__u8e3s4.get_shape_iyi9a0_k$()[axis])) {
        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.slice.<anonymous>' call
        var message_1 = 'slicing end index out of bounds: ' + slice.get_stop_woujpn_k$() + ' > ' + _this__u8e3s4.get_shape_iyi9a0_k$()[axis];
        throw IllegalStateException_init_$Create$(toString(message_1));
      }
      tmp_0 = slice.get_stop_woujpn_k$();
    } else {
      // Inline function 'kotlin.check' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(_this__u8e3s4.get_shape_iyi9a0_k$()[axis] > actualFrom)) {
        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.slice.<anonymous>' call
        var message_2 = 'slicing start index out of bounds: ' + actualFrom + ' >= ' + _this__u8e3s4.get_shape_iyi9a0_k$()[axis];
        throw IllegalStateException_init_$Create$(toString(message_2));
      }
      tmp_0 = _this__u8e3s4.get_shape_iyi9a0_k$()[axis] - 1 | 0;
    }
    var actualTo = tmp_0;
    // Inline function 'kotlin.apply' call
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var this_0 = _this__u8e3s4.get_strides_tusw1b_k$().slice();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.slice.<anonymous>' call
    this_0[axis] = imul(this_0[axis], slice.get_step_woujh1_k$());
    var sliceStrides = this_0;
    var tmp_1;
    if (actualFrom > actualTo) {
      // Inline function 'kotlin.intArrayOf' call
      tmp_1 = new Int32Array([0]);
    } else {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.collections.copyOf' call
      // Inline function 'kotlin.js.asDynamic' call
      var this_1 = _this__u8e3s4.get_shape_iyi9a0_k$().slice();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.slice.<anonymous>' call
      this_1[axis] = ((actualTo - actualFrom | 0) + slice.get_step_woujh1_k$() | 0) / slice.get_step_woujh1_k$() | 0;
      tmp_1 = this_1;
    }
    var sliceShape = tmp_1;
    var tmp_2 = _this__u8e3s4.get_data_wokkxf_k$();
    var tmp_3 = _this__u8e3s4.get_offset_hjmqak_k$() + imul(actualFrom, _this__u8e3s4.get_strides_tusw1b_k$()[axis]) | 0;
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.dimensionOf' call
    var dim = sliceShape.length;
    var tmp_4;
    switch (dim) {
      case 1:
        tmp_4 = Companion_getInstance_4();
        break;
      case 2:
        tmp_4 = Companion_getInstance_5();
        break;
      case 3:
        tmp_4 = Companion_getInstance_6();
        break;
      case 4:
        tmp_4 = Companion_getInstance_7();
        break;
      default:
        tmp_4 = new DN(dim);
        break;
    }
    var tmp_5 = isInterface(tmp_4, Dimension) ? tmp_4 : THROW_CCE();
    var tmp0_elvis_lhs = _this__u8e3s4.get_base_wojaxm_k$();
    return new NDArray(tmp_2, tmp_3, sliceShape, sliceStrides, tmp_5, tmp0_elvis_lhs == null ? _this__u8e3s4 : tmp0_elvis_lhs);
  }
  function asDNArray(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof NDArray)
      return _this__u8e3s4.asDNArray_uk0xvh_k$();
    else {
      throw ClassCastException_init_$Create$('Cannot cast MultiArray to NDArray of dimension n.');
    }
  }
  function get_7(_this__u8e3s4, index) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index.length === _this__u8e3s4.get_dim_18j7c1_k$().get_d_1mhr5n_k$())) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.get.<anonymous>' call
      var message = "number of indices doesn't match dimension: " + index.length + ' != ' + _this__u8e3s4.get_dim_18j7c1_k$().get_d_1mhr5n_k$();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    var last = index.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
        var containsUpper = _this__u8e3s4.get_shape_iyi9a0_k$()[i];
        var containsArg = index[i];
        var value = 0 <= containsArg ? containsArg < containsUpper : false;
        var index_0 = index[i];
        var size = _this__u8e3s4.get_shape_iyi9a0_k$()[i];
        if (!value) {
          throw IndexOutOfBoundsException_init_$Create$('Index ' + index_0 + ' is out of bounds shape dimension ' + i + ' with size ' + size);
        }
      }
       while (inductionVariable <= last);
    var tmp = _this__u8e3s4.get_data_wokkxf_k$();
    // Inline function 'kotlin.collections.foldIndexed' call
    var this_0 = _this__u8e3s4.get_strides_tusw1b_k$();
    var index_1 = 0;
    var accumulator = _this__u8e3s4.get_offset_hjmqak_k$();
    var inductionVariable_0 = 0;
    var last_0 = this_0.length;
    while (inductionVariable_0 < last_0) {
      var element = this_0[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.get.<anonymous>' call
      var tmp1 = index_1;
      index_1 = tmp1 + 1 | 0;
      accumulator = accumulator + imul(index[tmp1], element) | 0;
    }
    var tmp$ret$2 = accumulator;
    return tmp.get_c1px32_k$(tmp$ret$2);
  }
  function MultiIndexProgression$reverse$delegate$lambda(this$0) {
    return function () {
      return downTo(this$0.last_1, this$0.first_1);
    };
  }
  function MultiIndexProgression(first, last, step) {
    step = step === VOID ? 1 : step;
    this.first_1 = first;
    this.last_1 = last;
    this.step_1 = step;
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.step_1 === 0)) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.MultiIndexProgression.<anonymous>' call
      var message = 'Step must be non-zero.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.step_1 === IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$())) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.MultiIndexProgression.<anonymous>' call
      var message_0 = 'Step must be greater than Int.MIN_VALUE to avoid overflow on negation.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.first_1.length === this.last_1.length)) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.MultiIndexProgression.<anonymous>' call
      var message_1 = 'Sizes first and last must be identical.';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var tmp = this;
    tmp.reverse$delegate_1 = lazy(MultiIndexProgression$reverse$delegate$lambda(this));
  }
  protoOf(MultiIndexProgression).get_first_irdx8n_k$ = function () {
    return this.first_1;
  };
  protoOf(MultiIndexProgression).get_last_wopotb_k$ = function () {
    return this.last_1;
  };
  protoOf(MultiIndexProgression).get_step_woujh1_k$ = function () {
    return this.step_1;
  };
  protoOf(MultiIndexProgression).get_reverse_jgdgxl_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.reverse$delegate_1;
    reverse$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(MultiIndexProgression).iterator_jk1svi_k$ = function () {
    return new MultiIndexIterator(this.first_1, this.last_1, this.step_1);
  };
  protoOf(MultiIndexProgression).equals = function (other) {
    var tmp;
    if (other instanceof MultiIndexProgression) {
      tmp = contentEquals(this.first_1, other.first_1) ? contentEquals(this.last_1, other.last_1) : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(MultiIndexProgression).hashCode = function () {
    // Inline function 'kotlin.collections.plus' call
    var this_0 = this.first_1;
    var elements = this.last_1;
    var tmp$ret$0 = primitiveArrayConcat([this_0, elements]);
    return hashCode(tmp$ret$0);
  };
  protoOf(MultiIndexProgression).toString = function () {
    return joinToString(this.first_1, VOID, '(', ')') + '..' + joinToString(this.last_1, VOID, '(', ')');
  };
  function rangeTo(_this__u8e3s4, other) {
    return new MultiIndexProgression(_this__u8e3s4, other);
  }
  function downTo(_this__u8e3s4, to) {
    return new MultiIndexProgression(_this__u8e3s4, to, -1);
  }
  function _get_step__ddv2tb($this) {
    return $this.step_1;
  }
  function _get_startElement__2c62sv($this) {
    return $this.startElement_1;
  }
  function _get_finalElement__gc6m3p($this) {
    return $this.finalElement_1;
  }
  function _set_hasNext__86v2bs($this, _set____db54di) {
    $this.hasNext_1 = _set____db54di;
  }
  function _get_hasNext__xt3cos($this) {
    return $this.hasNext_1;
  }
  function _get_next__daux88($this) {
    return $this.next_1;
  }
  function plusAssign(_this__u8e3s4, $this, value) {
    var inductionVariable = _this__u8e3s4.length - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var t = _this__u8e3s4[i] + value | 0;
        if (t > $this.finalElement_1[i] ? !(i === 0) : false) {
          _this__u8e3s4[i] = $this.startElement_1[i];
        } else {
          _this__u8e3s4[i] = t;
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
  }
  function minusAssign(_this__u8e3s4, $this, value) {
    var inductionVariable = _this__u8e3s4.length - 1 | 0;
    if (0 <= inductionVariable)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var t = _this__u8e3s4[i] - value | 0;
        if (t < $this.finalElement_1[i] ? !(i === 0) : false) {
          _this__u8e3s4[i] = $this.startElement_1[i];
        } else {
          _this__u8e3s4[i] = t;
          break $l$loop;
        }
      }
       while (0 <= inductionVariable);
  }
  function compareTo_1(_this__u8e3s4, $this, other) {
    var tmp;
    var tmp_0;
    if (_this__u8e3s4 === other) {
      tmp_0 = true;
    } else {
      var tmp_1;
      // Inline function 'kotlin.collections.isEmpty' call
      if (_this__u8e3s4.length === 0) {
        // Inline function 'kotlin.collections.isEmpty' call
        tmp_1 = other.length === 0;
      } else {
        tmp_1 = false;
      }
      tmp_0 = tmp_1;
    }
    if (tmp_0) {
      tmp = 0;
    } else {
      // Inline function 'kotlin.collections.isEmpty' call
      if (_this__u8e3s4.length === 0) {
        tmp = -1;
      } else {
        // Inline function 'kotlin.collections.isEmpty' call
        if (other.length === 0) {
          tmp = 1;
        } else {
          var inductionVariable = 0;
          var last = _this__u8e3s4.length - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              if (_this__u8e3s4[index] < other[index])
                return -1;
              if (_this__u8e3s4[index] > other[index])
                return 1;
            }
             while (inductionVariable <= last);
          tmp = 0;
        }
      }
    }
    return tmp;
  }
  function MultiIndexIterator(first, last, step) {
    this.step_1 = step;
    var tmp = this;
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.startElement_1 = first.slice();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.finalElement_1 = last.slice();
    this.hasNext_1 = this.step_1 > 0 ? compareTo_1(first, this, last) <= 0 : compareTo_1(first, this, last) >= 0;
    var tmp_1 = this;
    var tmp_2;
    if (this.hasNext_1) {
      // Inline function 'kotlin.apply' call
      // Inline function 'kotlin.collections.copyOf' call
      // Inline function 'kotlin.js.asDynamic' call
      var this_0 = first.slice();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.MultiIndexIterator.next.<anonymous>' call
      var tmp1_index0 = get_lastIndex(this_0);
      this_0[tmp1_index0] = this_0[tmp1_index0] - this.step_1 | 0;
      tmp_2 = this_0;
    } else {
      tmp_2 = this.finalElement_1;
    }
    tmp_1.next_1 = tmp_2;
  }
  protoOf(MultiIndexIterator).hasNext_bitz1p_k$ = function () {
    return this.hasNext_1;
  };
  protoOf(MultiIndexIterator).next_20eer_k$ = function () {
    if (this.step_1 > 0) {
      plusAssign(this.next_1, this, this.step_1);
      if (compareTo_1(this.next_1, this, this.finalElement_1) >= 0) {
        if (!this.hasNext_1)
          throw NoSuchElementException_init_$Create$_0();
        this.hasNext_1 = false;
      }
    } else {
      minusAssign(this.next_1, this, -this.step_1 | 0);
      if (compareTo_1(this.next_1, this, this.finalElement_1) <= 0) {
        if (!this.hasNext_1)
          throw NoSuchElementException_init_$Create$_0();
        this.hasNext_1 = false;
      }
    }
    return this.next_1;
  };
  function reverse$factory() {
    return getPropertyCallableRef('reverse', 1, KProperty1, function (receiver) {
      return receiver.get_reverse_jgdgxl_k$();
    }, null);
  }
  function MutableMultiArray() {
  }
  function set(_this__u8e3s4, index, value) {
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    var value_0 = 0 <= index ? index < _this__u8e3s4.get_shape_iyi9a0_k$()[0] : false;
    var size = _this__u8e3s4.get_shape_iyi9a0_k$()[0];
    if (!value_0) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + index + ' is out of bounds shape dimension ' + 0 + ' with size ' + size);
    }
    _this__u8e3s4.get_data_wokkxf_k$().set_52lp9l_k$(_this__u8e3s4.get_offset_hjmqak_k$() + imul(first_0(_this__u8e3s4.get_strides_tusw1b_k$()), index) | 0, value);
  }
  function set_0(_this__u8e3s4, ind1, ind2, value) {
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    var value_0 = 0 <= ind1 ? ind1 < _this__u8e3s4.get_shape_iyi9a0_k$()[0] : false;
    var size = _this__u8e3s4.get_shape_iyi9a0_k$()[0];
    if (!value_0) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + ind1 + ' is out of bounds shape dimension ' + 0 + ' with size ' + size);
    }
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    var value_1 = 0 <= ind2 ? ind2 < _this__u8e3s4.get_shape_iyi9a0_k$()[1] : false;
    var size_0 = _this__u8e3s4.get_shape_iyi9a0_k$()[1];
    if (!value_1) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + ind2 + ' is out of bounds shape dimension ' + 1 + ' with size ' + size_0);
    }
    _this__u8e3s4.get_data_wokkxf_k$().set_52lp9l_k$((_this__u8e3s4.get_offset_hjmqak_k$() + imul(_this__u8e3s4.get_strides_tusw1b_k$()[0], ind1) | 0) + imul(_this__u8e3s4.get_strides_tusw1b_k$()[1], ind2) | 0, value);
  }
  function set_1(_this__u8e3s4, index, value) {
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(index.length === _this__u8e3s4.get_dim_18j7c1_k$().get_d_1mhr5n_k$())) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.set.<anonymous>' call
      var message = "number of indices doesn't match dimension: " + index.length + ' != ' + _this__u8e3s4.get_dim_18j7c1_k$().get_d_1mhr5n_k$();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    var last = index.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
        var containsUpper = _this__u8e3s4.get_shape_iyi9a0_k$()[i];
        var containsArg = index[i];
        var value_0 = 0 <= containsArg ? containsArg < containsUpper : false;
        var index_0 = index[i];
        var size = _this__u8e3s4.get_shape_iyi9a0_k$()[i];
        if (!value_0) {
          throw IndexOutOfBoundsException_init_$Create$('Index ' + index_0 + ' is out of bounds shape dimension ' + i + ' with size ' + size);
        }
      }
       while (inductionVariable <= last);
    var tmp = _this__u8e3s4.get_data_wokkxf_k$();
    // Inline function 'kotlin.collections.foldIndexed' call
    var this_0 = _this__u8e3s4.get_strides_tusw1b_k$();
    var index_1 = 0;
    var accumulator = _this__u8e3s4.get_offset_hjmqak_k$();
    var inductionVariable_0 = 0;
    var last_0 = this_0.length;
    while (inductionVariable_0 < last_0) {
      var element = this_0[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.set.<anonymous>' call
      var tmp1 = index_1;
      index_1 = tmp1 + 1 | 0;
      accumulator = accumulator + imul(index[tmp1], element) | 0;
    }
    var tmp$ret$2 = accumulator;
    tmp.set_52lp9l_k$(tmp$ret$2, value);
  }
  function set_2(_this__u8e3s4, ind1, ind2, ind3, value) {
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    var value_0 = 0 <= ind1 ? ind1 < _this__u8e3s4.get_shape_iyi9a0_k$()[0] : false;
    var size = _this__u8e3s4.get_shape_iyi9a0_k$()[0];
    if (!value_0) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + ind1 + ' is out of bounds shape dimension ' + 0 + ' with size ' + size);
    }
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    var value_1 = 0 <= ind2 ? ind2 < _this__u8e3s4.get_shape_iyi9a0_k$()[1] : false;
    var size_0 = _this__u8e3s4.get_shape_iyi9a0_k$()[1];
    if (!value_1) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + ind2 + ' is out of bounds shape dimension ' + 1 + ' with size ' + size_0);
    }
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    var value_2 = 0 <= ind3 ? ind3 < _this__u8e3s4.get_shape_iyi9a0_k$()[2] : false;
    var size_1 = _this__u8e3s4.get_shape_iyi9a0_k$()[2];
    if (!value_2) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + ind3 + ' is out of bounds shape dimension ' + 2 + ' with size ' + size_1);
    }
    _this__u8e3s4.get_data_wokkxf_k$().set_52lp9l_k$(((_this__u8e3s4.get_offset_hjmqak_k$() + imul(_this__u8e3s4.get_strides_tusw1b_k$()[0], ind1) | 0) + imul(_this__u8e3s4.get_strides_tusw1b_k$()[1], ind2) | 0) + imul(_this__u8e3s4.get_strides_tusw1b_k$()[2], ind3) | 0, value);
  }
  function set_3(_this__u8e3s4, ind1, ind2, ind3, ind4, value) {
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    var value_0 = 0 <= ind1 ? ind1 < _this__u8e3s4.get_shape_iyi9a0_k$()[0] : false;
    var size = _this__u8e3s4.get_shape_iyi9a0_k$()[0];
    if (!value_0) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + ind1 + ' is out of bounds shape dimension ' + 0 + ' with size ' + size);
    }
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    var value_1 = 0 <= ind2 ? ind2 < _this__u8e3s4.get_shape_iyi9a0_k$()[1] : false;
    var size_0 = _this__u8e3s4.get_shape_iyi9a0_k$()[1];
    if (!value_1) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + ind2 + ' is out of bounds shape dimension ' + 1 + ' with size ' + size_0);
    }
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    var value_2 = 0 <= ind3 ? ind3 < _this__u8e3s4.get_shape_iyi9a0_k$()[2] : false;
    var size_1 = _this__u8e3s4.get_shape_iyi9a0_k$()[2];
    if (!value_2) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + ind3 + ' is out of bounds shape dimension ' + 2 + ' with size ' + size_1);
    }
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.checkBounds' call
    var value_3 = 0 <= ind4 ? ind4 < _this__u8e3s4.get_shape_iyi9a0_k$()[3] : false;
    var size_2 = _this__u8e3s4.get_shape_iyi9a0_k$()[3];
    if (!value_3) {
      throw IndexOutOfBoundsException_init_$Create$('Index ' + ind4 + ' is out of bounds shape dimension ' + 3 + ' with size ' + size_2);
    }
    _this__u8e3s4.get_data_wokkxf_k$().set_52lp9l_k$((((_this__u8e3s4.get_offset_hjmqak_k$() + imul(_this__u8e3s4.get_strides_tusw1b_k$()[0], ind1) | 0) + imul(_this__u8e3s4.get_strides_tusw1b_k$()[1], ind2) | 0) + imul(_this__u8e3s4.get_strides_tusw1b_k$()[2], ind3) | 0) + imul(_this__u8e3s4.get_strides_tusw1b_k$()[3], ind4) | 0, value);
  }
  function NDArray$asType$lambda(this$0) {
    return function (it) {
      var tmp = this$0.data_1.get_c1px32_k$(it);
      return isNumber(tmp) ? tmp : THROW_CCE();
    };
  }
  function NDArray(data, offset, shape, strides, dim, base) {
    offset = offset === VOID ? 0 : offset;
    strides = strides === VOID ? computeStrides(shape) : strides;
    base = base === VOID ? null : base;
    this.offset_1 = offset;
    this.shape_1 = shape;
    this.strides_1 = strides;
    this.dim_1 = dim;
    this.base_1 = base;
    // Inline function 'kotlin.check' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.shape_1.length === 0)) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.<anonymous>' call
      var message = "Shape can't be empty.";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp = this;
    tmp.data_1 = data instanceof MemoryView ? data : THROW_CCE();
  }
  protoOf(NDArray).get_offset_hjmqak_k$ = function () {
    return this.offset_1;
  };
  protoOf(NDArray).get_shape_iyi9a0_k$ = function () {
    return this.shape_1;
  };
  protoOf(NDArray).get_strides_tusw1b_k$ = function () {
    return this.strides_1;
  };
  protoOf(NDArray).get_dim_18j7c1_k$ = function () {
    return this.dim_1;
  };
  protoOf(NDArray).get_base_wojaxm_k$ = function () {
    return this.base_1;
  };
  protoOf(NDArray).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(NDArray).get_size_woubt6_k$ = function () {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var indexedObject = this.shape_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var element = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = imul(accumulator, element);
    }
    return accumulator;
  };
  protoOf(NDArray).get_consistent_si7i05_k$ = function () {
    return (this.offset_1 === 0 ? this.get_size_woubt6_k$() === this.data_1.get_size_woubt6_k$() : false) ? contentEquals(this.strides_1, computeStrides(this.shape_1)) : false;
  };
  protoOf(NDArray).get_indices_xelk8u_k$ = function () {
    return until(0, this.get_size_woubt6_k$());
  };
  protoOf(NDArray).get_multiIndices_5j6nav_k$ = function () {
    var tmp = new Int32Array(this.dim_1.get_d_1mhr5n_k$());
    var tmp_0 = 0;
    var tmp_1 = this.dim_1.get_d_1mhr5n_k$();
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      tmp_2[tmp_3] = this.shape_1[tmp_3] - 1 | 0;
      tmp_0 = tmp_0 + 1 | 0;
    }
    return rangeTo(tmp, tmp_2);
  };
  protoOf(NDArray).isScalar_3verm2_k$ = function () {
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (this.shape_1.length === 0) {
      tmp = true;
    } else {
      tmp = this.shape_1.length === 1 ? first_0(this.shape_1) === 1 : false;
    }
    return tmp;
  };
  protoOf(NDArray).isEmpty_y1axqb_k$ = function () {
    return this.get_size_woubt6_k$() === 0;
  };
  protoOf(NDArray).isNotEmpty_cjxbwk_k$ = function () {
    return !this.isEmpty_y1axqb_k$();
  };
  protoOf(NDArray).iterator_jk1svi_k$ = function () {
    return this.get_consistent_si7i05_k$() ? this.data_1.iterator_jk1svi_k$() : new NDArrayIterator(this.data_1, this.offset_1, this.strides_1, this.shape_1);
  };
  protoOf(NDArray).asType_6yutyo_k$ = function (dataType) {
    var tmp = this.data_1.get_size_woubt6_k$();
    var newData = initMemoryView(tmp, dataType, NDArray$asType$lambda(this));
    return new NDArray(newData, this.offset_1, this.shape_1, this.strides_1, this.dim_1);
  };
  protoOf(NDArray).copy_1tks5_k$ = function () {
    var tmp = this.data_1.copyOf_mek8us_k$();
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this.shape_1.slice();
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = this.strides_1.slice();
    return new NDArray(tmp, this.offset_1, tmp_0, tmp$ret$3, this.dim_1);
  };
  protoOf(NDArray).deepCopy_adwlmp_k$ = function () {
    var data;
    if (this.get_consistent_si7i05_k$()) {
      data = this.data_1.copyOf_mek8us_k$();
    } else {
      data = initMemoryView_0(this.get_size_woubt6_k$(), this.get_dtype_iqhi0l_k$());
      var index = 0;
      var tmp0_iterator = this.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var el = tmp0_iterator.next_20eer_k$();
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        data.set_52lp9l_k$(tmp1, el);
      }
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = this.shape_1.slice();
    return new NDArray(data, 0, tmp$ret$1, VOID, this.dim_1);
  };
  protoOf(NDArray).flatten_cvohks_k$ = function () {
    var tmp;
    if (this.get_consistent_si7i05_k$()) {
      tmp = this.data_1.copyOf_mek8us_k$();
    } else {
      var tmpData = initMemoryView_0(this.get_size_woubt6_k$(), this.get_dtype_iqhi0l_k$());
      var index = 0;
      var tmp0_iterator = this.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var el = tmp0_iterator.next_20eer_k$();
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        tmpData.set_52lp9l_k$(tmp1, el);
      }
      tmp = tmpData;
    }
    var data = tmp;
    // Inline function 'kotlin.intArrayOf' call
    var tmp$ret$0 = new Int32Array([this.get_size_woubt6_k$()]);
    return new NDArray(data, 0, tmp$ret$0, VOID, Companion_getInstance_4());
  };
  protoOf(NDArray).reshape_9zb96y_k$ = function (dim1) {
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requirePositiveShape' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(dim1 > 0)) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requirePositiveShape.<anonymous>' call
      var message = 'Shape must be positive but was ' + dim1 + '.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(dim1 === this.get_size_woubt6_k$())) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.reshape.<anonymous>' call
      var message_0 = 'Cannot reshape array of size ' + this.get_size_woubt6_k$() + ' into a new shape (' + dim1 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var newData = this.get_consistent_si7i05_k$() ? this.data_1 : this.deepCopy_adwlmp_k$().data_1;
    var tmp;
    if (this.get_consistent_si7i05_k$()) {
      var tmp0_elvis_lhs = this.base_1;
      tmp = tmp0_elvis_lhs == null ? this : tmp0_elvis_lhs;
    } else {
      tmp = null;
    }
    var newBase = tmp;
    var newOffset = this.get_consistent_si7i05_k$() ? this.offset_1 : 0;
    var tmp_0;
    if (this.dim_1.get_d_1mhr5n_k$() === 1 ? first_0(this.shape_1) === dim1 : false) {
      tmp_0 = this instanceof NDArray ? this : THROW_CCE();
    } else {
      // Inline function 'kotlin.intArrayOf' call
      var tmp$ret$2 = new Int32Array([dim1]);
      tmp_0 = new NDArray(newData, newOffset, tmp$ret$2, VOID, Companion_getInstance_4(), newBase);
    }
    return tmp_0;
  };
  protoOf(NDArray).reshape_iibt4i_k$ = function (dim1, dim2) {
    // Inline function 'kotlin.intArrayOf' call
    var newShape = new Int32Array([dim1, dim2]);
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = newShape.length;
    while (inductionVariable < last) {
      var element = newShape[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.reshape.<anonymous>' call
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requirePositiveShape' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(element > 0)) {
        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requirePositiveShape.<anonymous>' call
        var message = 'Shape must be positive but was ' + element + '.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(imul(dim1, dim2) === this.get_size_woubt6_k$())) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.reshape.<anonymous>' call
      var message_0 = 'Cannot reshape array of size ' + this.get_size_woubt6_k$() + ' into a new shape (' + dim1 + ', ' + dim2 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var newData = this.get_consistent_si7i05_k$() ? this.data_1 : this.deepCopy_adwlmp_k$().data_1;
    var tmp;
    if (this.get_consistent_si7i05_k$()) {
      var tmp0_elvis_lhs = this.base_1;
      tmp = tmp0_elvis_lhs == null ? this : tmp0_elvis_lhs;
    } else {
      tmp = null;
    }
    var newBase = tmp;
    var newOffset = this.get_consistent_si7i05_k$() ? this.offset_1 : 0;
    var tmp_0;
    if (contentEquals(this.shape_1, newShape)) {
      tmp_0 = this instanceof NDArray ? this : THROW_CCE();
    } else {
      tmp_0 = new NDArray(newData, newOffset, newShape, VOID, Companion_getInstance_5(), newBase);
    }
    return tmp_0;
  };
  protoOf(NDArray).reshape_ue06a2_k$ = function (dim1, dim2, dim3) {
    // Inline function 'kotlin.intArrayOf' call
    var newShape = new Int32Array([dim1, dim2, dim3]);
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = newShape.length;
    while (inductionVariable < last) {
      var element = newShape[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.reshape.<anonymous>' call
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requirePositiveShape' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(element > 0)) {
        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requirePositiveShape.<anonymous>' call
        var message = 'Shape must be positive but was ' + element + '.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(imul(imul(dim1, dim2), dim3) === this.get_size_woubt6_k$())) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.reshape.<anonymous>' call
      var message_0 = 'Cannot reshape array of size ' + this.get_size_woubt6_k$() + ' into a new shape (' + dim1 + ', ' + dim2 + ', ' + dim3 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var newData = this.get_consistent_si7i05_k$() ? this.data_1 : this.deepCopy_adwlmp_k$().data_1;
    var tmp;
    if (this.get_consistent_si7i05_k$()) {
      var tmp0_elvis_lhs = this.base_1;
      tmp = tmp0_elvis_lhs == null ? this : tmp0_elvis_lhs;
    } else {
      tmp = null;
    }
    var newBase = tmp;
    var newOffset = this.get_consistent_si7i05_k$() ? this.offset_1 : 0;
    var tmp_0;
    if (contentEquals(this.shape_1, newShape)) {
      tmp_0 = this instanceof NDArray ? this : THROW_CCE();
    } else {
      tmp_0 = new NDArray(newData, newOffset, newShape, VOID, Companion_getInstance_6(), newBase);
    }
    return tmp_0;
  };
  protoOf(NDArray).reshape_7ubir6_k$ = function (dim1, dim2, dim3, dim4) {
    // Inline function 'kotlin.intArrayOf' call
    var newShape = new Int32Array([dim1, dim2, dim3, dim4]);
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = newShape.length;
    while (inductionVariable < last) {
      var element = newShape[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.reshape.<anonymous>' call
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requirePositiveShape' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(element > 0)) {
        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requirePositiveShape.<anonymous>' call
        var message = 'Shape must be positive but was ' + element + '.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(imul(imul(imul(dim1, dim2), dim3), dim4) === this.get_size_woubt6_k$())) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.reshape.<anonymous>' call
      var message_0 = 'Cannot reshape array of size ' + this.get_size_woubt6_k$() + ' into a new shape (' + dim1 + ', ' + dim2 + ', ' + dim3 + ', ' + dim4 + ')';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var newData = this.get_consistent_si7i05_k$() ? this.data_1 : this.deepCopy_adwlmp_k$().data_1;
    var tmp;
    if (this.get_consistent_si7i05_k$()) {
      var tmp0_elvis_lhs = this.base_1;
      tmp = tmp0_elvis_lhs == null ? this : tmp0_elvis_lhs;
    } else {
      tmp = null;
    }
    var newBase = tmp;
    var newOffset = this.get_consistent_si7i05_k$() ? this.offset_1 : 0;
    var tmp_0;
    if (contentEquals(this.shape_1, newShape)) {
      tmp_0 = this instanceof NDArray ? this : THROW_CCE();
    } else {
      tmp_0 = new NDArray(newData, newOffset, newShape, VOID, Companion_getInstance_7(), newBase);
    }
    return tmp_0;
  };
  protoOf(NDArray).reshape_am2v8d_k$ = function (dim1, dim2, dim3, dim4, dims) {
    // Inline function 'kotlin.collections.plus' call
    // Inline function 'kotlin.intArrayOf' call
    var this_0 = new Int32Array([dim1, dim2, dim3, dim4]);
    var newShape = primitiveArrayConcat([this_0, dims]);
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = newShape.length;
    while (inductionVariable < last) {
      var element = newShape[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.reshape.<anonymous>' call
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requirePositiveShape' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(element > 0)) {
        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requirePositiveShape.<anonymous>' call
        var message = 'Shape must be positive but was ' + element + '.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 1;
    var inductionVariable_0 = 0;
    var last_0 = newShape.length;
    while (inductionVariable_0 < last_0) {
      var element_0 = newShape[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      accumulator = imul(accumulator, element_0);
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!(accumulator === this.get_size_woubt6_k$())) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.reshape.<anonymous>' call
      var message_0 = 'Cannot reshape array of size ' + this.get_size_woubt6_k$() + ' into a new shape ' + joinToString(newShape, VOID, '(', ')');
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var newData = this.get_consistent_si7i05_k$() ? this.data_1 : this.deepCopy_adwlmp_k$().data_1;
    var tmp;
    if (this.get_consistent_si7i05_k$()) {
      var tmp0_elvis_lhs = this.base_1;
      tmp = tmp0_elvis_lhs == null ? this : tmp0_elvis_lhs;
    } else {
      tmp = null;
    }
    var newBase = tmp;
    var newOffset = this.get_consistent_si7i05_k$() ? this.offset_1 : 0;
    var tmp_0;
    if (contentEquals(this.shape_1, newShape)) {
      tmp_0 = this instanceof NDArray ? this : THROW_CCE();
    } else {
      tmp_0 = new NDArray(newData, newOffset, newShape, VOID, new DN(newShape.length), newBase);
    }
    return tmp_0;
  };
  protoOf(NDArray).transpose_4o7gha_k$ = function (axes) {
    // Inline function 'kotlin.require' call
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (axes.length === 0) {
      tmp = true;
    } else {
      tmp = axes.length === this.dim_1.get_d_1mhr5n_k$();
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.transpose.<anonymous>' call
      var message = 'All dimensions must be indicated.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inductionVariable = 0;
    var last = axes.length;
    while (inductionVariable < last) {
      var axis = axes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!(0 <= axis ? axis < this.dim_1.get_d_1mhr5n_k$() : false)) {
        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.transpose.<anonymous>' call
        var message_0 = 'Dimension must be from 0 to ' + this.dim_1.get_d_1mhr5n_k$() + '.';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
    }
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(toSet(axes).get_size_woubt6_k$() === axes.length)) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.transpose.<anonymous>' call
      var message_1 = 'The specified dimensions must be unique.';
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    if (this.dim_1.get_d_1mhr5n_k$() === 1)
      return new NDArray(this.data_1, this.offset_1, this.shape_1, this.strides_1, this.dim_1);
    var newShape;
    var newStrides;
    // Inline function 'kotlin.collections.isEmpty' call
    if (axes.length === 0) {
      newShape = reversedArray(this.shape_1);
      newStrides = reversedArray(this.strides_1);
    } else {
      newShape = new Int32Array(this.shape_1.length);
      newStrides = new Int32Array(this.strides_1.length);
      var inductionVariable_0 = 0;
      var last_0 = axes.length;
      while (inductionVariable_0 < last_0) {
        var i = inductionVariable_0;
        var axis_0 = axes[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        newShape[i] = this.shape_1[axis_0];
        newStrides[i] = this.strides_1[axis_0];
      }
    }
    var tmp3_elvis_lhs = this.base_1;
    return new NDArray(this.data_1, this.offset_1, newShape, newStrides, this.dim_1, tmp3_elvis_lhs == null ? this : tmp3_elvis_lhs);
  };
  protoOf(NDArray).squeeze_zcvlpz_k$ = function (axes) {
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (axes.length === 0) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = withIndex(this.shape_1);
      var destination = ArrayList_init_$Create$();
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.squeeze.<anonymous>' call
        if (element.get_value_j01efc_k$() === 1) {
          destination.add_utx5q5_k$(element);
        }
      }
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$_0(collectionSizeOrDefault(destination, 10));
      var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.squeeze.<anonymous>' call
        var tmp$ret$4 = item.get_index_it478p_k$();
        destination_0.add_utx5q5_k$(tmp$ret$4);
      }
      tmp = destination_0;
    } else {
      // Inline function 'kotlin.require' call
      var tmp$ret$8;
      $l$block: {
        // Inline function 'kotlin.collections.all' call
        var inductionVariable = 0;
        var last = axes.length;
        while (inductionVariable < last) {
          var element_0 = axes[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.squeeze.<anonymous>' call
          if (!(this.shape_1[element_0] === 1)) {
            tmp$ret$8 = false;
            break $l$block;
          }
        }
        tmp$ret$8 = true;
      }
      // Inline function 'kotlin.contracts.contract' call
      if (!tmp$ret$8) {
        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.squeeze.<anonymous>' call
        var message = 'Cannot select an axis to squeeze out which has size not equal to one.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = toList_0(axes);
    }
    var cutAxes = tmp;
    var newShape = sliceArray_0(this.shape_1, minus(get_indices_0(this.shape_1), cutAxes));
    var tmp_0 = new DN(newShape.length);
    var tmp0_elvis_lhs = this.base_1;
    return new NDArray(this.data_1, this.offset_1, newShape, VOID, tmp_0, tmp0_elvis_lhs == null ? this : tmp0_elvis_lhs);
  };
  protoOf(NDArray).unsqueeze_cliue6_k$ = function (axes) {
    var newShape = toMutableList(this.shape_1);
    var tmp0_iterator = sorted(axes).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var axis = tmp0_iterator.next_20eer_k$();
      newShape.add_dl6gt3_k$(axis, 1);
    }
    var newData = this.get_consistent_si7i05_k$() ? this.data_1 : this.deepCopy_adwlmp_k$().data_1;
    var tmp;
    if (this.get_consistent_si7i05_k$()) {
      var tmp1_elvis_lhs = this.base_1;
      tmp = tmp1_elvis_lhs == null ? this : tmp1_elvis_lhs;
    } else {
      tmp = null;
    }
    var newBase = tmp;
    var newOffset = this.get_consistent_si7i05_k$() ? this.offset_1 : 0;
    return new NDArray(newData, newOffset, toIntArray(newShape), VOID, new DN(newShape.get_size_woubt6_k$()), newBase);
  };
  protoOf(NDArray).cat_z7nyra_k$ = function (other) {
    return this.cat_ajpab0_k$(listOf(other), 0);
  };
  protoOf(NDArray).cat_ut5tya_k$ = function (other, axis) {
    return this.cat_ajpab0_k$(listOf(other), axis);
  };
  protoOf(NDArray).cat_ajpab0_k$ = function (other, axis) {
    var actualAxis_0 = actualAxis(this, axis);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= actualAxis_0 ? actualAxis_0 < this.dim_1.get_d_1mhr5n_k$() : false)) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.cat.<anonymous>' call
      var message = 'Axis ' + axis + ' is out of bounds for array of dimension ' + this.dim_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var arr = first(other);
    // Inline function 'kotlin.require' call
    var tmp$ret$1;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var this_0 = withIndex(this.shape_1);
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$1 = true;
        break $l$block_0;
      }
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.cat.<anonymous>' call
        if (!(element.get_index_it478p_k$() === axis ? true : element.get_value_j01efc_k$() === arr.get_shape_iyi9a0_k$()[element.get_index_it478p_k$()])) {
          tmp$ret$1 = false;
          break $l$block_0;
        }
      }
      tmp$ret$1 = true;
    }
    // Inline function 'kotlin.contracts.contract' call
    if (!tmp$ret$1) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.cat.<anonymous>' call
      var message_0 = 'All dimensions of input arrays for the concatenation axis must match exactly.';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var newShape = this.shape_1.slice();
    var tmp_0 = this.shape_1[actualAxis_0];
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var tmp0_iterator_0 = other.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      var tmp_1 = sum;
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.cat.<anonymous>' call
      sum = tmp_1 + element_0.get_shape_iyi9a0_k$()[actualAxis_0] | 0;
    }
    newShape[actualAxis_0] = tmp_0 + sum | 0;
    var tmp_2 = this.get_size_woubt6_k$();
    // Inline function 'kotlin.collections.sumOf' call
    var sum_0 = 0;
    var tmp0_iterator_1 = other.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_1 = tmp0_iterator_1.next_20eer_k$();
      var tmp_3 = sum_0;
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.cat.<anonymous>' call
      sum_0 = tmp_3 + element_1.get_size_woubt6_k$() | 0;
    }
    var newSize = tmp_2 + sum_0 | 0;
    // Inline function 'kotlin.also' call
    var this_1 = toMutableList_0(other);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.cat.<anonymous>' call
    this_1.add_dl6gt3_k$(0, this);
    var arrays = this_1;
    var result = new NDArray(initMemoryView_0(newSize, this.get_dtype_iqhi0l_k$()), 0, newShape, VOID, this.dim_1);
    concatenate(arrays, result, actualAxis_0);
    return result;
  };
  protoOf(NDArray).asD1Array_gtpwfu_k$ = function () {
    if (this.dim_1.get_d_1mhr5n_k$() === 1) {
      return this instanceof NDArray ? this : THROW_CCE();
    } else
      throw ClassCastException_init_$Create$('Cannot cast NDArray of dimension ' + this.dim_1.get_d_1mhr5n_k$() + ' to NDArray of dimension 1.');
  };
  protoOf(NDArray).asD2Array_hariu1_k$ = function () {
    if (this.dim_1.get_d_1mhr5n_k$() === 2) {
      return this instanceof NDArray ? this : THROW_CCE();
    } else
      throw ClassCastException_init_$Create$('Cannot cast NDArray of dimension ' + this.dim_1.get_d_1mhr5n_k$() + ' to NDArray of dimension 2.');
  };
  protoOf(NDArray).asD3Array_hrt588_k$ = function () {
    if (this.dim_1.get_d_1mhr5n_k$() === 3) {
      return this instanceof NDArray ? this : THROW_CCE();
    } else
      throw ClassCastException_init_$Create$('Cannot cast NDArray of dimension ' + this.dim_1.get_d_1mhr5n_k$() + ' to NDArray of dimension 3.');
  };
  protoOf(NDArray).asD4Array_i8urmf_k$ = function () {
    if (this.dim_1.get_d_1mhr5n_k$() === 4) {
      return this instanceof NDArray ? this : THROW_CCE();
    } else
      throw ClassCastException_init_$Create$('Cannot cast NDArray of dimension ' + this.dim_1.get_d_1mhr5n_k$() + ' to NDArray of dimension 4.');
  };
  protoOf(NDArray).asDNArray_uk0xvh_k$ = function () {
    if (this.dim_1.get_d_1mhr5n_k$() === -1)
      throw Exception_init_$Create$('Array dimension is undefined');
    if (this.dim_1.get_d_1mhr5n_k$() > 4) {
      return this instanceof NDArray ? this : THROW_CCE();
    }
    var tmp = new DN(this.dim_1.get_d_1mhr5n_k$());
    var tmp0_elvis_lhs = this.base_1;
    return new NDArray(this.data_1, this.offset_1, this.shape_1, this.strides_1, tmp, tmp0_elvis_lhs == null ? this : tmp0_elvis_lhs);
  };
  protoOf(NDArray).equals = function (other) {
    if (this === other)
      return true;
    if (!(other == null) ? !getKClassFromExpression(this).equals(getKClassFromExpression(other)) : false)
      return false;
    if (!(other instanceof NDArray))
      THROW_CCE();
    if (!(this.get_size_woubt6_k$() === other.get_size_woubt6_k$()))
      return false;
    if (!contentEquals(this.shape_1, other.shape_1))
      return false;
    if (!this.get_dtype_iqhi0l_k$().equals(other.get_dtype_iqhi0l_k$()))
      return false;
    if (!equals(this.dim_1, other.dim_1))
      return false;
    var thIt = this.iterator_jk1svi_k$();
    var othIt = other.iterator_jk1svi_k$();
    while (thIt.hasNext_bitz1p_k$() ? othIt.hasNext_bitz1p_k$() : false) {
      if (!equals(thIt.next_20eer_k$(), othIt.next_20eer_k$()))
        return false;
    }
    return true;
  };
  protoOf(NDArray).hashCode = function () {
    var result = 1;
    var tmp0_iterator = this.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var el = tmp0_iterator.next_20eer_k$();
      var tmp = imul(31, result);
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = el == null ? null : hashCode(el);
      result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    }
    return result;
  };
  protoOf(NDArray).toString = function () {
    var tmp;
    switch (this.dim_1.get_d_1mhr5n_k$()) {
      case 1:
        // Inline function 'kotlin.text.buildString' call

        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'kotlin.apply' call

        var this_0 = StringBuilder_init_$Create$_0();
        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.toString.<anonymous>' call

        if (this instanceof NDArray)
          this;
        else
          THROW_CCE();
        this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(91));
        var inductionVariable = 0;
        var last = first_0(this.shape_1);
        if (inductionVariable < last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            this_0.append_t8pm91_k$(get(this, i));
            if (i < (first_0(this.shape_1) - 1 | 0)) {
              this_0.append_22ad7x_k$(', ');
            }
          }
           while (inductionVariable < last);
        this_0.append_am5a4z_k$(_Char___init__impl__6a9atx(93));
        tmp = this_0.toString();
        break;
      case 2:
        // Inline function 'kotlin.text.buildString' call

        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'kotlin.apply' call

        var this_1 = StringBuilder_init_$Create$_0();
        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.toString.<anonymous>' call

        if (this instanceof NDArray)
          this;
        else
          THROW_CCE();
        this_1.append_am5a4z_k$(_Char___init__impl__6a9atx(91));
        var inductionVariable_0 = 0;
        var last_0 = this.shape_1[0];
        if (inductionVariable_0 < last_0)
          do {
            var ax0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            this_1.append_am5a4z_k$(_Char___init__impl__6a9atx(91));
            var inductionVariable_1 = 0;
            var last_1 = this.shape_1[1];
            if (inductionVariable_1 < last_1)
              do {
                var ax1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                this_1.append_t8pm91_k$(get_0(this, ax0, ax1));
                if (ax1 < (this.shape_1[1] - 1 | 0)) {
                  this_1.append_22ad7x_k$(', ');
                }
              }
               while (inductionVariable_1 < last_1);
            this_1.append_am5a4z_k$(_Char___init__impl__6a9atx(93));
            if (ax0 < (this.shape_1[0] - 1 | 0)) {
              this_1.append_22ad7x_k$(',\n');
            }
          }
           while (inductionVariable_0 < last_0);
        this_1.append_am5a4z_k$(_Char___init__impl__6a9atx(93));
        tmp = this_1.toString();
        break;
      case 3:
        // Inline function 'kotlin.text.buildString' call

        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'kotlin.apply' call

        var this_2 = StringBuilder_init_$Create$_0();
        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.toString.<anonymous>' call

        if (this instanceof NDArray)
          this;
        else
          THROW_CCE();
        this_2.append_am5a4z_k$(_Char___init__impl__6a9atx(91));
        var inductionVariable_2 = 0;
        var last_2 = this.shape_1[0];
        if (inductionVariable_2 < last_2)
          do {
            var ax0_0 = inductionVariable_2;
            inductionVariable_2 = inductionVariable_2 + 1 | 0;
            this_2.append_am5a4z_k$(_Char___init__impl__6a9atx(91));
            var inductionVariable_3 = 0;
            var last_3 = this.shape_1[1];
            if (inductionVariable_3 < last_3)
              do {
                var ax1_0 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                this_2.append_am5a4z_k$(_Char___init__impl__6a9atx(91));
                var inductionVariable_4 = 0;
                var last_4 = this.shape_1[2];
                if (inductionVariable_4 < last_4)
                  do {
                    var ax2 = inductionVariable_4;
                    inductionVariable_4 = inductionVariable_4 + 1 | 0;
                    this_2.append_t8pm91_k$(get_1(this, ax0_0, ax1_0, ax2));
                    if (ax2 < (this.shape_1[2] - 1 | 0)) {
                      this_2.append_22ad7x_k$(', ');
                    }
                  }
                   while (inductionVariable_4 < last_4);
                this_2.append_am5a4z_k$(_Char___init__impl__6a9atx(93));
                if (ax1_0 < (this.shape_1[1] - 1 | 0)) {
                  this_2.append_22ad7x_k$(',\n');
                }
              }
               while (inductionVariable_3 < last_3);
            this_2.append_am5a4z_k$(_Char___init__impl__6a9atx(93));
            if (ax0_0 < (this.shape_1[0] - 1 | 0)) {
              this_2.append_22ad7x_k$(',\n\n');
            }
          }
           while (inductionVariable_2 < last_2);
        this_2.append_am5a4z_k$(_Char___init__impl__6a9atx(93));
        tmp = this_2.toString();
        break;
      case 4:
        // Inline function 'kotlin.text.buildString' call

        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'kotlin.apply' call

        var this_3 = StringBuilder_init_$Create$_0();
        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.toString.<anonymous>' call

        if (this instanceof NDArray)
          this;
        else
          THROW_CCE();
        this_3.append_am5a4z_k$(_Char___init__impl__6a9atx(91));
        var inductionVariable_5 = 0;
        var last_5 = this.shape_1[0];
        if (inductionVariable_5 < last_5)
          do {
            var ax0_1 = inductionVariable_5;
            inductionVariable_5 = inductionVariable_5 + 1 | 0;
            this_3.append_am5a4z_k$(_Char___init__impl__6a9atx(91));
            var inductionVariable_6 = 0;
            var last_6 = this.shape_1[1];
            if (inductionVariable_6 < last_6)
              do {
                var ax1_1 = inductionVariable_6;
                inductionVariable_6 = inductionVariable_6 + 1 | 0;
                this_3.append_am5a4z_k$(_Char___init__impl__6a9atx(91));
                var inductionVariable_7 = 0;
                var last_7 = this.shape_1[2];
                if (inductionVariable_7 < last_7)
                  do {
                    var ax2_0 = inductionVariable_7;
                    inductionVariable_7 = inductionVariable_7 + 1 | 0;
                    this_3.append_am5a4z_k$(_Char___init__impl__6a9atx(91));
                    var inductionVariable_8 = 0;
                    var last_8 = this.shape_1[3];
                    if (inductionVariable_8 < last_8)
                      do {
                        var ax3 = inductionVariable_8;
                        inductionVariable_8 = inductionVariable_8 + 1 | 0;
                        this_3.append_t8pm91_k$(get_2(this, ax0_1, ax1_1, ax2_0, ax3));
                        if (ax3 < (this.shape_1[3] - 1 | 0)) {
                          this_3.append_22ad7x_k$(', ');
                        }
                      }
                       while (inductionVariable_8 < last_8);
                    this_3.append_am5a4z_k$(_Char___init__impl__6a9atx(93));
                    if (ax2_0 < (this.shape_1[2] - 1 | 0)) {
                      this_3.append_22ad7x_k$(',\n');
                    }
                  }
                   while (inductionVariable_7 < last_7);
                this_3.append_am5a4z_k$(_Char___init__impl__6a9atx(93));
                if (ax1_1 < (this.shape_1[1] - 1 | 0)) {
                  this_3.append_22ad7x_k$(',\n\n');
                }
              }
               while (inductionVariable_6 < last_6);
            this_3.append_am5a4z_k$(_Char___init__impl__6a9atx(93));
            if (ax0_1 < (this.shape_1[0] - 1 | 0)) {
              this_3.append_22ad7x_k$(',\n\n\n');
            }
          }
           while (inductionVariable_5 < last_5);
        this_3.append_am5a4z_k$(_Char___init__impl__6a9atx(93));
        tmp = this_3.toString();
        break;
      default:
        // Inline function 'kotlin.text.buildString' call

        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'kotlin.apply' call

        var this_4 = StringBuilder_init_$Create$_0();
        // Inline function 'kotlin.contracts.contract' call

        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.NDArray.toString.<anonymous>' call

        if (this instanceof NDArray)
          this;
        else
          THROW_CCE();
        this_4.append_am5a4z_k$(_Char___init__impl__6a9atx(91));
        var inductionVariable_9 = 0;
        var last_9 = first_0(this.shape_1);
        if (inductionVariable_9 < last_9)
          do {
            var ind = inductionVariable_9;
            inductionVariable_9 = inductionVariable_9 + 1 | 0;
            this_4.append_22ad7x_k$(toString(get_V(this).get_j2zj3f_k$(new Int32Array([ind]))));
            if (ind < (first_0(this.shape_1) - 1 | 0)) {
              var newLine = repeat('\n', this.dim_1.get_d_1mhr5n_k$() - 1 | 0);
              this_4.append_22ad7x_k$(',' + newLine);
            }
          }
           while (inductionVariable_9 < last_9);
        this_4.append_am5a4z_k$(_Char___init__impl__6a9atx(93));
        tmp = this_4.toString();
        break;
    }
    return tmp;
  };
  function _get_data__d5abxd_1($this) {
    return $this.data_1;
  }
  function _get_offset__c6qzmg($this) {
    return $this.offset_1;
  }
  function _get_strides__66te21($this) {
    return $this.strides_1;
  }
  function _get_shape__bfkypc($this) {
    return $this.shape_1;
  }
  function _get_index__g2optt_1($this) {
    return $this.index_1;
  }
  function NDArrayIterator(data, offset, strides, shape) {
    offset = offset === VOID ? 0 : offset;
    this.data_1 = data;
    this.offset_1 = offset;
    this.strides_1 = strides;
    this.shape_1 = shape;
    this.index_1 = new Int32Array(this.shape_1.length);
  }
  protoOf(NDArrayIterator).hasNext_bitz1p_k$ = function () {
    var inductionVariable = 0;
    var last = this.shape_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (this.index_1[i] >= this.shape_1[i])
          return false;
      }
       while (inductionVariable <= last);
    return true;
  };
  protoOf(NDArrayIterator).next_20eer_k$ = function () {
    var p = this.offset_1;
    var inductionVariable = 0;
    var last = this.shape_1.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        p = p + imul(this.strides_1[i], this.index_1[i]) | 0;
      }
       while (inductionVariable <= last);
    var inductionVariable_0 = this.shape_1.length - 1 | 0;
    if (0 <= inductionVariable_0)
      $l$loop: do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + -1 | 0;
        var t = this.index_1[i_0] + 1 | 0;
        if (t >= this.shape_1[i_0] ? !(i_0 === 0) : false) {
          this.index_1[i_0] = 0;
        } else {
          this.index_1[i_0] = t;
          break $l$loop;
        }
      }
       while (0 <= inductionVariable_0);
    return this.data_1.get_c1px32_k$(p);
  };
  function Indexing() {
  }
  function Companion_8() {
    Companion_instance_8 = this;
  }
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function _set__start__4o0zcc($this, _set____db54di) {
    $this._start_1 = _set____db54di;
  }
  function _get__start__37aepk($this) {
    return $this._start_1;
  }
  function _set__stop__bb0wp0($this, _set____db54di) {
    $this._stop_1 = _set____db54di;
  }
  function _get__stop__kq3jsg($this) {
    return $this._stop_1;
  }
  function Slice(start, stop, step) {
    Companion_getInstance_8();
    if ((step === 0 ? !(start === 0) : false) ? !(stop === 0) : false)
      throw IllegalArgumentException_init_$Create$('Step must be non-zero.');
    if (step === IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$())
      throw IllegalArgumentException_init_$Create$('Step must be greater than Int.MIN_VALUE to avoid overflow on negation.');
    this._start_1 = start;
    this._stop_1 = stop;
    var tmp = this;
    var tmp_0;
    if (step < 0) {
      throw IllegalArgumentException_init_$Create$('Step must be positive.');
    } else {
      tmp_0 = step;
    }
    tmp.step_1 = tmp_0;
  }
  protoOf(Slice).get_step_woujh1_k$ = function () {
    return this.step_1;
  };
  protoOf(Slice).get_start_iypx6h_k$ = function () {
    return this._start_1;
  };
  protoOf(Slice).get_stop_woujpn_k$ = function () {
    return this._stop_1;
  };
  protoOf(Slice).get_endInclusive_r07xpi_k$ = function () {
    return this.get_stop_woujpn_k$();
  };
  protoOf(Slice).rangeTo_13bwog_k$ = function (step) {
    return new Slice(this._start_1, this._stop_1, _RInt___get_data__impl__px4ib9(step));
  };
  protoOf(Slice).rangeTo_d1bgzk_k$ = function (step) {
    return new Slice(this._start_1, this._stop_1, step);
  };
  protoOf(Slice).contains_7q95ev_k$ = function (value) {
    var containsLower = this.get_start_iypx6h_k$();
    return value <= this.get_stop_woujpn_k$() ? containsLower <= value : false;
  };
  protoOf(Slice).contains_3tkdvy_k$ = function (value) {
    return this.contains_7q95ev_k$(typeof value === 'number' ? value : THROW_CCE());
  };
  protoOf(Slice).equals = function (other) {
    var tmp;
    if (other instanceof Slice) {
      tmp = (this.isEmpty_y1axqb_k$() ? other.isEmpty_y1axqb_k$() : false) ? true : (this.get_start_iypx6h_k$() === other.get_start_iypx6h_k$() ? this.get_stop_woujpn_k$() === other.get_stop_woujpn_k$() : false) ? this.step_1 === other.step_1 : false;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Slice).hashCode = function () {
    return this.isEmpty_y1axqb_k$() ? -1 : (imul(31, this.get_start_iypx6h_k$()) + this.get_stop_woujpn_k$() | 0) + this.step_1 | 0;
  };
  protoOf(Slice).toString = function () {
    return '' + this.get_start_iypx6h_k$() + '..' + this.get_stop_woujpn_k$() + '..' + this.step_1;
  };
  function _RInt___init__impl__ch6qs(data) {
    return data;
  }
  function _RInt___get_data__impl__px4ib9($this) {
    return $this;
  }
  function RInt__plus_impl_ke1zgq($this, r) {
    return _RInt___init__impl__ch6qs(_RInt___get_data__impl__px4ib9($this) + _RInt___get_data__impl__px4ib9(r) | 0);
  }
  function RInt__minus_impl_xkujuu($this, r) {
    return _RInt___init__impl__ch6qs(_RInt___get_data__impl__px4ib9($this) - _RInt___get_data__impl__px4ib9(r) | 0);
  }
  function RInt__times_impl_z5qxus($this, r) {
    return _RInt___init__impl__ch6qs(imul(_RInt___get_data__impl__px4ib9($this), _RInt___get_data__impl__px4ib9(r)));
  }
  function RInt__div_impl_8hbozr($this, r) {
    return _RInt___init__impl__ch6qs(_RInt___get_data__impl__px4ib9($this) / _RInt___get_data__impl__px4ib9(r) | 0);
  }
  function RInt__rangeTo_impl_ytq7iq($this, that) {
    return new Slice(_RInt___get_data__impl__px4ib9($this), _RInt___get_data__impl__px4ib9(that), 1);
  }
  function RInt__rangeTo_impl_ytq7iq_0($this, that) {
    return new Slice(_RInt___get_data__impl__px4ib9($this), that, 1);
  }
  function RInt__until_impl_2ge59w($this, that) {
    return new Slice(_RInt___get_data__impl__px4ib9($this), _RInt___get_data__impl__px4ib9(that) - 1 | 0, 1);
  }
  function RInt__until_impl_2ge59w_0($this, that) {
    return new Slice(_RInt___get_data__impl__px4ib9($this), that - 1 | 0, 1);
  }
  function RInt__toString_impl_skvaxw($this) {
    return 'RInt(data=' + $this + ')';
  }
  function RInt__hashCode_impl_6tpe51($this) {
    return $this;
  }
  function RInt__equals_impl_jbbdkh($this, other) {
    if (!(other instanceof RInt))
      return false;
    if (!($this === (other instanceof RInt ? other.data_1 : THROW_CCE())))
      return false;
    return true;
  }
  function RInt(data) {
    this.data_1 = data;
  }
  protoOf(RInt).toString = function () {
    return RInt__toString_impl_skvaxw(this.data_1);
  };
  protoOf(RInt).hashCode = function () {
    return RInt__hashCode_impl_6tpe51(this.data_1);
  };
  protoOf(RInt).equals = function (other) {
    return RInt__equals_impl_jbbdkh(this.data_1, other);
  };
  function get_r(_this__u8e3s4) {
    return _RInt___init__impl__ch6qs(_this__u8e3s4);
  }
  function toSlice(_this__u8e3s4) {
    var tmp;
    if (_this__u8e3s4 instanceof Slice) {
      tmp = _this__u8e3s4;
    } else {
      if (_this__u8e3s4 instanceof IntRange) {
        tmp = toSlice_0(_this__u8e3s4);
      } else {
        throw IllegalStateException_init_$Create$('' + getKClassFromExpression(_this__u8e3s4) + ' not supported, please use Slice or IntRange.');
      }
    }
    return tmp;
  }
  function toSlice_0(_this__u8e3s4) {
    return new Slice(_this__u8e3s4.get_first_irdx8n_k$(), _this__u8e3s4.get_last_wopotb_k$(), 1);
  }
  function first_1(_this__u8e3s4) {
    if (_this__u8e3s4.isEmpty_y1axqb_k$())
      throw NoSuchElementException_init_$Create$('NDArray is empty.');
    return _this__u8e3s4.get_data_wokkxf_k$().get_c1px32_k$(_this__u8e3s4.get_offset_hjmqak_k$());
  }
  function sorted_0(_this__u8e3s4) {
    var tmp = _this__u8e3s4.deepCopy_adwlmp_k$();
    var ret = tmp instanceof NDArray ? tmp : THROW_CCE();
    switch (_this__u8e3s4.get_dtype_iqhi0l_k$().get_ordinal_ip24qg_k$()) {
      case 0:
        sort(ret.get_data_wokkxf_k$().getByteArray_yjfvk5_k$());
        break;
      case 1:
        sort_0(ret.get_data_wokkxf_k$().getShortArray_kijo6r_k$());
        break;
      case 2:
        sort_1(ret.get_data_wokkxf_k$().getIntArray_rs62n4_k$());
        break;
      case 3:
        sort_2(ret.get_data_wokkxf_k$().getLongArray_1i1953_k$());
        break;
      case 4:
        sort_3(ret.get_data_wokkxf_k$().getFloatArray_m77gkt_k$());
        break;
      case 5:
        sort_4(ret.get_data_wokkxf_k$().getDoubleArray_x8889e_k$());
        break;
      case 6:
      case 7:
        throw Exception_init_$Create$('Complex numbers cannot be sorted.');
    }
    return ret;
  }
  function toType(_this__u8e3s4, dtype, copy) {
    copy = copy === VOID ? CopyStrategy_FULL_getInstance() : copy;
    if (_this__u8e3s4.get_dtype_iqhi0l_k$().equals(dtype)) {
      var tmp = copy.equals(CopyStrategy_FULL_getInstance()) ? _this__u8e3s4.copy_1tks5_k$() : _this__u8e3s4.deepCopy_adwlmp_k$();
      return tmp instanceof NDArray ? tmp : THROW_CCE();
    }
    var size;
    var iterData;
    var offset;
    var strides;
    if (copy.equals(CopyStrategy_FULL_getInstance())) {
      size = _this__u8e3s4.get_data_wokkxf_k$().get_size_woubt6_k$();
      iterData = _this__u8e3s4.get_data_wokkxf_k$().iterator_jk1svi_k$();
      offset = _this__u8e3s4.get_offset_hjmqak_k$();
      // Inline function 'kotlin.collections.copyOf' call
      // Inline function 'kotlin.js.asDynamic' call
      strides = _this__u8e3s4.get_strides_tusw1b_k$().slice();
    } else {
      size = _this__u8e3s4.get_size_woubt6_k$();
      iterData = _this__u8e3s4.iterator_jk1svi_k$();
      offset = 0;
      strides = computeStrides(_this__u8e3s4.get_shape_iyi9a0_k$());
    }
    var isNumber = _this__u8e3s4.get_dtype_iqhi0l_k$().isNumber_5yj4dp_k$();
    var view = initMemoryView_0(size, dtype);
    if (isNumber ? dtype.equals(DataType_FloatDataType_getInstance()) : false) {
      var d = view.getFloatArray_m77gkt_k$();
      var count = 0;
      // Inline function 'kotlin.apply' call
      var this_0 = isInterface(iterData, Iterator) ? iterData : THROW_CCE();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.toType.<anonymous>' call
      while (this_0.hasNext_bitz1p_k$()) {
        var tmp0 = count;
        count = tmp0 + 1 | 0;
        d[tmp0] = numberToDouble(this_0.next_20eer_k$());
      }
    } else if (isNumber ? dtype.equals(DataType_DoubleDataType_getInstance()) : false) {
      var d_0 = view.getDoubleArray_x8889e_k$();
      var count_0 = 0;
      // Inline function 'kotlin.apply' call
      var this_1 = isInterface(iterData, Iterator) ? iterData : THROW_CCE();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.toType.<anonymous>' call
      while (this_1.hasNext_bitz1p_k$()) {
        var tmp0_0 = count_0;
        count_0 = tmp0_0 + 1 | 0;
        d_0[tmp0_0] = numberToDouble(this_1.next_20eer_k$());
      }
    } else if (isNumber ? dtype.equals(DataType_IntDataType_getInstance()) : false) {
      var d_1 = view.getIntArray_rs62n4_k$();
      var count_1 = 0;
      // Inline function 'kotlin.apply' call
      var this_2 = isInterface(iterData, Iterator) ? iterData : THROW_CCE();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.toType.<anonymous>' call
      while (this_2.hasNext_bitz1p_k$()) {
        var tmp0_1 = count_1;
        count_1 = tmp0_1 + 1 | 0;
        d_1[tmp0_1] = numberToInt(this_2.next_20eer_k$());
      }
    } else if (isNumber ? dtype.equals(DataType_LongDataType_getInstance()) : false) {
      var d_2 = view.getLongArray_1i1953_k$();
      var count_2 = 0;
      // Inline function 'kotlin.apply' call
      var this_3 = isInterface(iterData, Iterator) ? iterData : THROW_CCE();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.toType.<anonymous>' call
      while (this_3.hasNext_bitz1p_k$()) {
        var tmp0_2 = count_2;
        count_2 = tmp0_2 + 1 | 0;
        d_2[tmp0_2] = numberToLong(this_3.next_20eer_k$());
      }
    } else if (!isNumber ? dtype.equals(DataType_ComplexFloatDataType_getInstance()) : false) {
      var d_3 = view.getComplexFloatArray_56zcs7_k$();
      var count_3 = 0;
      // Inline function 'kotlin.apply' call
      var this_4 = isInterface(iterData, Iterator) ? iterData : THROW_CCE();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.toType.<anonymous>' call
      while (this_4.hasNext_bitz1p_k$()) {
        var c = this_4.next_20eer_k$();
        var tmp0_3 = count_3;
        count_3 = tmp0_3 + 1 | 0;
        d_3.set_31o1op_k$(tmp0_3, ComplexFloat_init_$Create$(c.get_re_kntnpg_k$(), c.get_im_kntnwz_k$()));
      }
    } else if (!isNumber ? dtype.equals(DataType_ComplexDoubleDataType_getInstance()) : false) {
      var d_4 = view.getComplexDoubleArray_u2qur2_k$();
      var count_4 = 0;
      // Inline function 'kotlin.apply' call
      var this_5 = isInterface(iterData, Iterator) ? iterData : THROW_CCE();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.toType.<anonymous>' call
      while (this_5.hasNext_bitz1p_k$()) {
        var c_0 = this_5.next_20eer_k$();
        var tmp0_4 = count_4;
        count_4 = tmp0_4 + 1 | 0;
        d_4.set_hzotmi_k$(tmp0_4, ComplexDouble_init_$Create$(c_0.get_re_kntnpg_k$(), c_0.get_im_kntnwz_k$()));
      }
    } else if (isNumber ? dtype.equals(DataType_ComplexFloatDataType_getInstance()) : false) {
      var d_5 = view.getComplexFloatArray_56zcs7_k$();
      var count_5 = 0;
      // Inline function 'kotlin.apply' call
      var this_6 = isInterface(iterData, Iterator) ? iterData : THROW_CCE();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.toType.<anonymous>' call
      while (this_6.hasNext_bitz1p_k$()) {
        var tmp0_5 = count_5;
        count_5 = tmp0_5 + 1 | 0;
        d_5.set_31o1op_k$(tmp0_5, ComplexFloat_init_$Create$(this_6.next_20eer_k$(), 0.0));
      }
    } else if (isNumber ? dtype.equals(DataType_ComplexDoubleDataType_getInstance()) : false) {
      var d_6 = view.getComplexDoubleArray_u2qur2_k$();
      var count_6 = 0;
      // Inline function 'kotlin.apply' call
      var this_7 = isInterface(iterData, Iterator) ? iterData : THROW_CCE();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.toType.<anonymous>' call
      while (this_7.hasNext_bitz1p_k$()) {
        var tmp0_6 = count_6;
        count_6 = tmp0_6 + 1 | 0;
        d_6.set_hzotmi_k$(tmp0_6, ComplexDouble_init_$Create$(this_7.next_20eer_k$(), 0.0));
      }
    } else if (isNumber ? dtype.equals(DataType_ShortDataType_getInstance()) : false) {
      var d_7 = view.getShortArray_kijo6r_k$();
      var count_7 = 0;
      // Inline function 'kotlin.apply' call
      var this_8 = isInterface(iterData, Iterator) ? iterData : THROW_CCE();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.toType.<anonymous>' call
      while (this_8.hasNext_bitz1p_k$()) {
        var tmp0_7 = count_7;
        count_7 = tmp0_7 + 1 | 0;
        d_7[tmp0_7] = numberToShort(this_8.next_20eer_k$());
      }
    } else if (isNumber ? dtype.equals(DataType_ByteDataType_getInstance()) : false) {
      var d_8 = view.getByteArray_yjfvk5_k$();
      var count_8 = 0;
      // Inline function 'kotlin.apply' call
      var this_9 = isInterface(iterData, Iterator) ? iterData : THROW_CCE();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.toType.<anonymous>' call
      while (this_9.hasNext_bitz1p_k$()) {
        var tmp0_8 = count_8;
        count_8 = tmp0_8 + 1 | 0;
        d_8[tmp0_8] = numberToByte(this_9.next_20eer_k$());
      }
    } else
      throw Exception_init_$Create$_0();
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$13 = _this__u8e3s4.get_shape_iyi9a0_k$().slice();
    return new NDArray(view, offset, tmp$ret$13, strides, _this__u8e3s4.get_dim_18j7c1_k$());
  }
  var CopyStrategy_FULL_instance;
  var CopyStrategy_MEANINGFUL_instance;
  function values_1() {
    return [CopyStrategy_FULL_getInstance(), CopyStrategy_MEANINGFUL_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'FULL':
        return CopyStrategy_FULL_getInstance();
      case 'MEANINGFUL':
        return CopyStrategy_MEANINGFUL_getInstance();
      default:
        CopyStrategy_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var CopyStrategy_entriesInitialized;
  function CopyStrategy_initEntries() {
    if (CopyStrategy_entriesInitialized)
      return Unit_getInstance();
    CopyStrategy_entriesInitialized = true;
    CopyStrategy_FULL_instance = new CopyStrategy('FULL', 0);
    CopyStrategy_MEANINGFUL_instance = new CopyStrategy('MEANINGFUL', 1);
  }
  function CopyStrategy(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function CopyStrategy_FULL_getInstance() {
    CopyStrategy_initEntries();
    return CopyStrategy_FULL_instance;
  }
  function CopyStrategy_MEANINGFUL_getInstance() {
    CopyStrategy_initEntries();
    return CopyStrategy_MEANINGFUL_instance;
  }
  function concatenate(arrays, dest, axis) {
    axis = axis === VOID ? 0 : axis;
    if (axis === 0) {
      var offset = 0;
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var tmp0_iterator = arrays.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.concatenate.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        checkIndexOverflow(tmp1);
        if (item.get_consistent_si7i05_k$()) {
          item.get_data_wokkxf_k$().copyInto_mp34x0_k$(dest.get_data_wokkxf_k$(), offset, 0, item.get_size_woubt6_k$());
        } else {
          var index_0 = offset;
          var tmp0_iterator_0 = item.iterator_jk1svi_k$();
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var el = tmp0_iterator_0.next_20eer_k$();
            var tmp = dest.get_data_wokkxf_k$();
            var tmp1_0 = index_0;
            index_0 = tmp1_0 + 1 | 0;
            tmp.set_52lp9l_k$(tmp1_0, el);
          }
        }
        offset = offset + item.get_size_woubt6_k$() | 0;
      }
    } else {
      var index_1 = 0;
      var arrDim = first(arrays).get_dim_18j7c1_k$();
      var inductionVariable = 0;
      var last = dest.get_shape_iyi9a0_k$()[0];
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (equals(arrDim, Companion_getInstance_4())) {
            if (!isInterface(arrays, List))
              THROW_CCE();
            var tmp2_iterator = arrays.iterator_jk1svi_k$();
            while (tmp2_iterator.hasNext_bitz1p_k$()) {
              var array = tmp2_iterator.next_20eer_k$();
              var tmp_0 = dest.get_data_wokkxf_k$();
              var tmp3 = index_1;
              index_1 = tmp3 + 1 | 0;
              tmp_0.set_52lp9l_k$(tmp3, get(array, i));
            }
          } else if (equals(arrDim, Companion_getInstance_5())) {
            if (!isInterface(arrays, List))
              THROW_CCE();
            if (axis === 1) {
              var tmp5_iterator = arrays.iterator_jk1svi_k$();
              while (tmp5_iterator.hasNext_bitz1p_k$()) {
                var array_0 = tmp5_iterator.next_20eer_k$();
                var inductionVariable_0 = 0;
                var last_0 = array_0.get_shape_iyi9a0_k$()[1];
                if (inductionVariable_0 < last_0)
                  do {
                    var j = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var tmp_1 = dest.get_data_wokkxf_k$();
                    var tmp7 = index_1;
                    index_1 = tmp7 + 1 | 0;
                    tmp_1.set_52lp9l_k$(tmp7, get_0(array_0, i, j));
                  }
                   while (inductionVariable_0 < last_0);
              }
            } else if (axis === 2) {
              var inductionVariable_1 = 0;
              var last_1 = dest.get_shape_iyi9a0_k$()[1];
              if (inductionVariable_1 < last_1)
                do {
                  var j_0 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var tmp9_iterator = arrays.iterator_jk1svi_k$();
                  while (tmp9_iterator.hasNext_bitz1p_k$()) {
                    var array_1 = tmp9_iterator.next_20eer_k$();
                    var tmp_2 = dest.get_data_wokkxf_k$();
                    var tmp10 = index_1;
                    index_1 = tmp10 + 1 | 0;
                    tmp_2.set_52lp9l_k$(tmp10, get_0(array_1, i, j_0));
                  }
                }
                 while (inductionVariable_1 < last_1);
            }
          } else if (equals(arrDim, Companion_getInstance_6())) {
            if (!isInterface(arrays, List))
              THROW_CCE();
            switch (axis) {
              case 1:
                var tmp12_iterator = arrays.iterator_jk1svi_k$();
                while (tmp12_iterator.hasNext_bitz1p_k$()) {
                  var array_2 = tmp12_iterator.next_20eer_k$();
                  var inductionVariable_2 = 0;
                  var last_2 = array_2.get_shape_iyi9a0_k$()[1];
                  if (inductionVariable_2 < last_2)
                    do {
                      var j_1 = inductionVariable_2;
                      inductionVariable_2 = inductionVariable_2 + 1 | 0;
                      var inductionVariable_3 = 0;
                      var last_3 = dest.get_shape_iyi9a0_k$()[2];
                      if (inductionVariable_3 < last_3)
                        do {
                          var l = inductionVariable_3;
                          inductionVariable_3 = inductionVariable_3 + 1 | 0;
                          var tmp_3 = dest.get_data_wokkxf_k$();
                          var tmp15 = index_1;
                          index_1 = tmp15 + 1 | 0;
                          tmp_3.set_52lp9l_k$(tmp15, get_1(array_2, i, j_1, l));
                        }
                         while (inductionVariable_3 < last_3);
                    }
                     while (inductionVariable_2 < last_2);
                }

                break;
              case 2:
                var inductionVariable_4 = 0;
                var last_4 = dest.get_shape_iyi9a0_k$()[1];
                if (inductionVariable_4 < last_4)
                  do {
                    var j_2 = inductionVariable_4;
                    inductionVariable_4 = inductionVariable_4 + 1 | 0;
                    var tmp17_iterator = arrays.iterator_jk1svi_k$();
                    while (tmp17_iterator.hasNext_bitz1p_k$()) {
                      var array_3 = tmp17_iterator.next_20eer_k$();
                      var inductionVariable_5 = 0;
                      var last_5 = array_3.get_shape_iyi9a0_k$()[2];
                      if (inductionVariable_5 < last_5)
                        do {
                          var l_0 = inductionVariable_5;
                          inductionVariable_5 = inductionVariable_5 + 1 | 0;
                          var tmp_4 = dest.get_data_wokkxf_k$();
                          var tmp19 = index_1;
                          index_1 = tmp19 + 1 | 0;
                          tmp_4.set_52lp9l_k$(tmp19, get_1(array_3, i, j_2, l_0));
                        }
                         while (inductionVariable_5 < last_5);
                    }
                  }
                   while (inductionVariable_4 < last_4);
                break;
              case 3:
                var inductionVariable_6 = 0;
                var last_6 = dest.get_shape_iyi9a0_k$()[1];
                if (inductionVariable_6 < last_6)
                  do {
                    var j_3 = inductionVariable_6;
                    inductionVariable_6 = inductionVariable_6 + 1 | 0;
                    var inductionVariable_7 = 0;
                    var last_7 = dest.get_shape_iyi9a0_k$()[2];
                    if (inductionVariable_7 < last_7)
                      do {
                        var l_1 = inductionVariable_7;
                        inductionVariable_7 = inductionVariable_7 + 1 | 0;
                        var tmp22_iterator = arrays.iterator_jk1svi_k$();
                        while (tmp22_iterator.hasNext_bitz1p_k$()) {
                          var array_4 = tmp22_iterator.next_20eer_k$();
                          var tmp_5 = dest.get_data_wokkxf_k$();
                          var tmp23 = index_1;
                          index_1 = tmp23 + 1 | 0;
                          tmp_5.set_52lp9l_k$(tmp23, get_1(array_4, i, j_3, l_1));
                        }
                      }
                       while (inductionVariable_7 < last_7);
                  }
                   while (inductionVariable_6 < last_6);
                break;
            }
          } else if (equals(arrDim, Companion_getInstance_7())) {
            if (!isInterface(arrays, List))
              THROW_CCE();
            switch (axis) {
              case 1:
                var tmp25_iterator = arrays.iterator_jk1svi_k$();
                while (tmp25_iterator.hasNext_bitz1p_k$()) {
                  var array_5 = tmp25_iterator.next_20eer_k$();
                  var inductionVariable_8 = 0;
                  var last_8 = array_5.get_shape_iyi9a0_k$()[1];
                  if (inductionVariable_8 < last_8)
                    do {
                      var j_4 = inductionVariable_8;
                      inductionVariable_8 = inductionVariable_8 + 1 | 0;
                      var inductionVariable_9 = 0;
                      var last_9 = dest.get_shape_iyi9a0_k$()[2];
                      if (inductionVariable_9 < last_9)
                        do {
                          var l_2 = inductionVariable_9;
                          inductionVariable_9 = inductionVariable_9 + 1 | 0;
                          var inductionVariable_10 = 0;
                          var last_10 = dest.get_shape_iyi9a0_k$()[3];
                          if (inductionVariable_10 < last_10)
                            do {
                              var h = inductionVariable_10;
                              inductionVariable_10 = inductionVariable_10 + 1 | 0;
                              var tmp_6 = dest.get_data_wokkxf_k$();
                              var tmp29 = index_1;
                              index_1 = tmp29 + 1 | 0;
                              tmp_6.set_52lp9l_k$(tmp29, get_2(array_5, i, j_4, l_2, h));
                            }
                             while (inductionVariable_10 < last_10);
                        }
                         while (inductionVariable_9 < last_9);
                    }
                     while (inductionVariable_8 < last_8);
                }

                break;
              case 2:
                var inductionVariable_11 = 0;
                var last_11 = dest.get_shape_iyi9a0_k$()[1];
                if (inductionVariable_11 < last_11)
                  do {
                    var j_5 = inductionVariable_11;
                    inductionVariable_11 = inductionVariable_11 + 1 | 0;
                    var tmp31_iterator = arrays.iterator_jk1svi_k$();
                    while (tmp31_iterator.hasNext_bitz1p_k$()) {
                      var array_6 = tmp31_iterator.next_20eer_k$();
                      var inductionVariable_12 = 0;
                      var last_12 = array_6.get_shape_iyi9a0_k$()[2];
                      if (inductionVariable_12 < last_12)
                        do {
                          var l_3 = inductionVariable_12;
                          inductionVariable_12 = inductionVariable_12 + 1 | 0;
                          var inductionVariable_13 = 0;
                          var last_13 = dest.get_shape_iyi9a0_k$()[3];
                          if (inductionVariable_13 < last_13)
                            do {
                              var h_0 = inductionVariable_13;
                              inductionVariable_13 = inductionVariable_13 + 1 | 0;
                              var tmp_7 = dest.get_data_wokkxf_k$();
                              var tmp34 = index_1;
                              index_1 = tmp34 + 1 | 0;
                              tmp_7.set_52lp9l_k$(tmp34, get_2(array_6, i, j_5, l_3, h_0));
                            }
                             while (inductionVariable_13 < last_13);
                        }
                         while (inductionVariable_12 < last_12);
                    }
                  }
                   while (inductionVariable_11 < last_11);
                break;
              case 3:
                var inductionVariable_14 = 0;
                var last_14 = dest.get_shape_iyi9a0_k$()[1];
                if (inductionVariable_14 < last_14)
                  do {
                    var j_6 = inductionVariable_14;
                    inductionVariable_14 = inductionVariable_14 + 1 | 0;
                    var inductionVariable_15 = 0;
                    var last_15 = dest.get_shape_iyi9a0_k$()[2];
                    if (inductionVariable_15 < last_15)
                      do {
                        var l_4 = inductionVariable_15;
                        inductionVariable_15 = inductionVariable_15 + 1 | 0;
                        var tmp37_iterator = arrays.iterator_jk1svi_k$();
                        while (tmp37_iterator.hasNext_bitz1p_k$()) {
                          var array_7 = tmp37_iterator.next_20eer_k$();
                          var inductionVariable_16 = 0;
                          var last_16 = array_7.get_shape_iyi9a0_k$()[3];
                          if (inductionVariable_16 < last_16)
                            do {
                              var h_1 = inductionVariable_16;
                              inductionVariable_16 = inductionVariable_16 + 1 | 0;
                              var tmp_8 = dest.get_data_wokkxf_k$();
                              var tmp39 = index_1;
                              index_1 = tmp39 + 1 | 0;
                              tmp_8.set_52lp9l_k$(tmp39, get_2(array_7, i, j_6, l_4, h_1));
                            }
                             while (inductionVariable_16 < last_16);
                        }
                      }
                       while (inductionVariable_15 < last_15);
                  }
                   while (inductionVariable_14 < last_14);
                break;
              case 4:
                var inductionVariable_17 = 0;
                var last_17 = dest.get_shape_iyi9a0_k$()[1];
                if (inductionVariable_17 < last_17)
                  do {
                    var j_7 = inductionVariable_17;
                    inductionVariable_17 = inductionVariable_17 + 1 | 0;
                    var inductionVariable_18 = 0;
                    var last_18 = dest.get_shape_iyi9a0_k$()[2];
                    if (inductionVariable_18 < last_18)
                      do {
                        var l_5 = inductionVariable_18;
                        inductionVariable_18 = inductionVariable_18 + 1 | 0;
                        var inductionVariable_19 = 0;
                        var last_19 = dest.get_shape_iyi9a0_k$()[3];
                        if (inductionVariable_19 < last_19)
                          do {
                            var h_2 = inductionVariable_19;
                            inductionVariable_19 = inductionVariable_19 + 1 | 0;
                            var tmp43_iterator = arrays.iterator_jk1svi_k$();
                            while (tmp43_iterator.hasNext_bitz1p_k$()) {
                              var array_8 = tmp43_iterator.next_20eer_k$();
                              var tmp_9 = dest.get_data_wokkxf_k$();
                              var tmp44 = index_1;
                              index_1 = tmp44 + 1 | 0;
                              tmp_9.set_52lp9l_k$(tmp44, get_2(array_8, i, j_7, l_5, h_2));
                            }
                          }
                           while (inductionVariable_19 < last_19);
                      }
                       while (inductionVariable_18 < last_18);
                  }
                   while (inductionVariable_17 < last_17);
                break;
            }
          } else
            throw UnsupportedOperationException_init_$Create$();
        }
         while (inductionVariable < last);
    }
    return dest;
  }
  function plusAssign_0(_this__u8e3s4, other) {
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requireEqualShape' call
    var left = _this__u8e3s4.get_shape_iyi9a0_k$();
    var right = other.get_shape_iyi9a0_k$();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!contentEquals(left, right)) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requireEqualShape.<anonymous>' call
      var message = "Array shapes don't match: " + contentToString(left) + ' != ' + contentToString(right);
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (_this__u8e3s4.get_consistent_si7i05_k$() ? other.get_consistent_si7i05_k$() : false) {
      var tmp = _this__u8e3s4.get_data_wokkxf_k$();
      var tmp_0 = other.get_data_wokkxf_k$();
      tmp.plusAssign_gwr7uw_k$(tmp_0 instanceof MemoryView ? tmp_0 : THROW_CCE());
    } else {
      switch (_this__u8e3s4.get_dtype_iqhi0l_k$().get_ordinal_ip24qg_k$()) {
        case 5:
          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call

          var this_0 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
          var tmp_1 = other.iterator_jk1svi_k$();
          var other_0 = isInterface(tmp_1, Iterator) ? tmp_1 : THROW_CCE();
          if (this_0.get_consistent_si7i05_k$()) {
            var progression = this_0.get_indices_xelk8u_k$();
            var inductionVariable = progression.get_first_irdx8n_k$();
            var last = progression.get_last_wopotb_k$();
            if (inductionVariable <= last)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var tmp_2 = this_0.get_data_wokkxf_k$();
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.plusAssign.<anonymous>' call
                var tmp$ret$1 = this_0.get_data_wokkxf_k$().get_c1px32_k$(i) + other_0.next_20eer_k$();
                tmp_2.set_52lp9l_k$(i, tmp$ret$1);
              }
               while (!(i === last));
          } else {
            var left_0 = asDNArray(this_0);
            var tmp1_iterator = this_0.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp1_iterator.hasNext_bitz1p_k$()) {
              var index = tmp1_iterator.next_20eer_k$();
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.plusAssign.<anonymous>' call
              var tmp$ret$2 = get_7(left_0, index) + other_0.next_20eer_k$();
              set_1(left_0, index, tmp$ret$2);
            }
          }

          break;
        case 4:
          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call

          var this_1 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
          var tmp_3 = other.iterator_jk1svi_k$();
          var other_1 = isInterface(tmp_3, Iterator) ? tmp_3 : THROW_CCE();
          if (this_1.get_consistent_si7i05_k$()) {
            var progression_0 = this_1.get_indices_xelk8u_k$();
            var inductionVariable_0 = progression_0.get_first_irdx8n_k$();
            var last_0 = progression_0.get_last_wopotb_k$();
            if (inductionVariable_0 <= last_0)
              do {
                var i_0 = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var tmp_4 = this_1.get_data_wokkxf_k$();
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.plusAssign.<anonymous>' call
                var tmp$ret$3 = this_1.get_data_wokkxf_k$().get_c1px32_k$(i_0) + other_1.next_20eer_k$();
                tmp_4.set_52lp9l_k$(i_0, tmp$ret$3);
              }
               while (!(i_0 === last_0));
          } else {
            var left_1 = asDNArray(this_1);
            var tmp1_iterator_0 = this_1.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp1_iterator_0.hasNext_bitz1p_k$()) {
              var index_0 = tmp1_iterator_0.next_20eer_k$();
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.plusAssign.<anonymous>' call
              var tmp$ret$4 = get_7(left_1, index_0) + other_1.next_20eer_k$();
              set_1(left_1, index_0, tmp$ret$4);
            }
          }

          break;
        case 2:
          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call

          var this_2 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
          var tmp_5 = other.iterator_jk1svi_k$();
          var other_2 = isInterface(tmp_5, Iterator) ? tmp_5 : THROW_CCE();
          if (this_2.get_consistent_si7i05_k$()) {
            var progression_1 = this_2.get_indices_xelk8u_k$();
            var inductionVariable_1 = progression_1.get_first_irdx8n_k$();
            var last_1 = progression_1.get_last_wopotb_k$();
            if (inductionVariable_1 <= last_1)
              do {
                var i_1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                var tmp_6 = this_2.get_data_wokkxf_k$();
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.plusAssign.<anonymous>' call
                var tmp$ret$5 = this_2.get_data_wokkxf_k$().get_c1px32_k$(i_1) + other_2.next_20eer_k$() | 0;
                tmp_6.set_52lp9l_k$(i_1, tmp$ret$5);
              }
               while (!(i_1 === last_1));
          } else {
            var left_2 = asDNArray(this_2);
            var tmp1_iterator_1 = this_2.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp1_iterator_1.hasNext_bitz1p_k$()) {
              var index_1 = tmp1_iterator_1.next_20eer_k$();
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.plusAssign.<anonymous>' call
              var tmp$ret$6 = get_7(left_2, index_1) + other_2.next_20eer_k$() | 0;
              set_1(left_2, index_1, tmp$ret$6);
            }
          }

          break;
        case 3:
          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call

          var this_3 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
          var tmp_7 = other.iterator_jk1svi_k$();
          var other_3 = isInterface(tmp_7, Iterator) ? tmp_7 : THROW_CCE();
          if (this_3.get_consistent_si7i05_k$()) {
            var progression_2 = this_3.get_indices_xelk8u_k$();
            var inductionVariable_2 = progression_2.get_first_irdx8n_k$();
            var last_2 = progression_2.get_last_wopotb_k$();
            if (inductionVariable_2 <= last_2)
              do {
                var i_2 = inductionVariable_2;
                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                var tmp_8 = this_3.get_data_wokkxf_k$();
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.plusAssign.<anonymous>' call
                var a = this_3.get_data_wokkxf_k$().get_c1px32_k$(i_2);
                var b = other_3.next_20eer_k$();
                var tmp$ret$7 = a.plus_r93sks_k$(b);
                tmp_8.set_52lp9l_k$(i_2, tmp$ret$7);
              }
               while (!(i_2 === last_2));
          } else {
            var left_3 = asDNArray(this_3);
            var tmp1_iterator_2 = this_3.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp1_iterator_2.hasNext_bitz1p_k$()) {
              var index_2 = tmp1_iterator_2.next_20eer_k$();
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.plusAssign.<anonymous>' call
              var a_0 = get_7(left_3, index_2);
              var b_0 = other_3.next_20eer_k$();
              var tmp$ret$8 = a_0.plus_r93sks_k$(b_0);
              set_1(left_3, index_2, tmp$ret$8);
            }
          }

          break;
        case 6:
          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call

          var this_4 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
          var tmp_9 = other.iterator_jk1svi_k$();
          var other_4 = isInterface(tmp_9, Iterator) ? tmp_9 : THROW_CCE();
          if (this_4.get_consistent_si7i05_k$()) {
            var progression_3 = this_4.get_indices_xelk8u_k$();
            var inductionVariable_3 = progression_3.get_first_irdx8n_k$();
            var last_3 = progression_3.get_last_wopotb_k$();
            if (inductionVariable_3 <= last_3)
              do {
                var i_3 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                var tmp_10 = this_4.get_data_wokkxf_k$();
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.plusAssign.<anonymous>' call
                var a_1 = this_4.get_data_wokkxf_k$().get_c1px32_k$(i_3);
                var b_1 = other_4.next_20eer_k$();
                var tmp$ret$9 = a_1.plus_8lqpe3_k$(b_1);
                tmp_10.set_52lp9l_k$(i_3, tmp$ret$9);
              }
               while (!(i_3 === last_3));
          } else {
            var left_4 = asDNArray(this_4);
            var tmp1_iterator_3 = this_4.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp1_iterator_3.hasNext_bitz1p_k$()) {
              var index_3 = tmp1_iterator_3.next_20eer_k$();
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.plusAssign.<anonymous>' call
              var a_2 = get_7(left_4, index_3);
              var b_2 = other_4.next_20eer_k$();
              var tmp$ret$10 = a_2.plus_8lqpe3_k$(b_2);
              set_1(left_4, index_3, tmp$ret$10);
            }
          }

          break;
        case 7:
          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call

          var this_5 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
          var tmp_11 = other.iterator_jk1svi_k$();
          var other_5 = isInterface(tmp_11, Iterator) ? tmp_11 : THROW_CCE();
          if (this_5.get_consistent_si7i05_k$()) {
            var progression_4 = this_5.get_indices_xelk8u_k$();
            var inductionVariable_4 = progression_4.get_first_irdx8n_k$();
            var last_4 = progression_4.get_last_wopotb_k$();
            if (inductionVariable_4 <= last_4)
              do {
                var i_4 = inductionVariable_4;
                inductionVariable_4 = inductionVariable_4 + 1 | 0;
                var tmp_12 = this_5.get_data_wokkxf_k$();
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.plusAssign.<anonymous>' call
                var a_3 = this_5.get_data_wokkxf_k$().get_c1px32_k$(i_4);
                var b_3 = other_5.next_20eer_k$();
                var tmp$ret$11 = a_3.plus_nev5n6_k$(b_3);
                tmp_12.set_52lp9l_k$(i_4, tmp$ret$11);
              }
               while (!(i_4 === last_4));
          } else {
            var left_5 = asDNArray(this_5);
            var tmp1_iterator_4 = this_5.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp1_iterator_4.hasNext_bitz1p_k$()) {
              var index_4 = tmp1_iterator_4.next_20eer_k$();
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.plusAssign.<anonymous>' call
              var a_4 = get_7(left_5, index_4);
              var b_4 = other_5.next_20eer_k$();
              var tmp$ret$12 = a_4.plus_nev5n6_k$(b_4);
              set_1(left_5, index_4, tmp$ret$12);
            }
          }

          break;
        case 1:
          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call

          var this_6 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
          var tmp_13 = other.iterator_jk1svi_k$();
          var other_6 = isInterface(tmp_13, Iterator) ? tmp_13 : THROW_CCE();
          if (this_6.get_consistent_si7i05_k$()) {
            var progression_5 = this_6.get_indices_xelk8u_k$();
            var inductionVariable_5 = progression_5.get_first_irdx8n_k$();
            var last_5 = progression_5.get_last_wopotb_k$();
            if (inductionVariable_5 <= last_5)
              do {
                var i_5 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                var tmp_14 = this_6.get_data_wokkxf_k$();
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.plusAssign.<anonymous>' call
                var a_5 = this_6.get_data_wokkxf_k$().get_c1px32_k$(i_5);
                var b_5 = other_6.next_20eer_k$();
                var tmp$ret$13 = toShort(a_5 + b_5);
                tmp_14.set_52lp9l_k$(i_5, tmp$ret$13);
              }
               while (!(i_5 === last_5));
          } else {
            var left_6 = asDNArray(this_6);
            var tmp1_iterator_5 = this_6.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp1_iterator_5.hasNext_bitz1p_k$()) {
              var index_5 = tmp1_iterator_5.next_20eer_k$();
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.plusAssign.<anonymous>' call
              var a_6 = get_7(left_6, index_5);
              var b_6 = other_6.next_20eer_k$();
              var tmp$ret$14 = toShort(a_6 + b_6);
              set_1(left_6, index_5, tmp$ret$14);
            }
          }

          break;
        case 0:
          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call

          var this_7 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
          var tmp_15 = other.iterator_jk1svi_k$();
          var other_7 = isInterface(tmp_15, Iterator) ? tmp_15 : THROW_CCE();
          if (this_7.get_consistent_si7i05_k$()) {
            var progression_6 = this_7.get_indices_xelk8u_k$();
            var inductionVariable_6 = progression_6.get_first_irdx8n_k$();
            var last_6 = progression_6.get_last_wopotb_k$();
            if (inductionVariable_6 <= last_6)
              do {
                var i_6 = inductionVariable_6;
                inductionVariable_6 = inductionVariable_6 + 1 | 0;
                var tmp_16 = this_7.get_data_wokkxf_k$();
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.plusAssign.<anonymous>' call
                var a_7 = this_7.get_data_wokkxf_k$().get_c1px32_k$(i_6);
                var b_7 = other_7.next_20eer_k$();
                var tmp$ret$15 = toByte(a_7 + b_7);
                tmp_16.set_52lp9l_k$(i_6, tmp$ret$15);
              }
               while (!(i_6 === last_6));
          } else {
            var left_7 = asDNArray(this_7);
            var tmp1_iterator_6 = this_7.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp1_iterator_6.hasNext_bitz1p_k$()) {
              var index_6 = tmp1_iterator_6.next_20eer_k$();
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.plusAssign.<anonymous>' call
              var a_8 = get_7(left_7, index_6);
              var b_8 = other_7.next_20eer_k$();
              var tmp$ret$16 = toByte(a_8 + b_8);
              set_1(left_7, index_6, tmp$ret$16);
            }
          }

          break;
      }
    }
  }
  function times(_this__u8e3s4, other) {
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requireEqualShape' call
    var left = _this__u8e3s4.get_shape_iyi9a0_k$();
    var right = other.get_shape_iyi9a0_k$();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!contentEquals(left, right)) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requireEqualShape.<anonymous>' call
      var message = "Array shapes don't match: " + contentToString(left) + ' != ' + contentToString(right);
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp;
    if (_this__u8e3s4.get_consistent_si7i05_k$()) {
      tmp = (_this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE()).copy_1tks5_k$();
    } else {
      tmp = (_this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE()).deepCopy_adwlmp_k$();
    }
    var ret = tmp;
    timesAssign_0(ret, other);
    return ret;
  }
  function div(_this__u8e3s4, other) {
    var tmp;
    if (_this__u8e3s4.get_consistent_si7i05_k$()) {
      tmp = (_this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE()).copy_1tks5_k$();
    } else {
      tmp = (_this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE()).deepCopy_adwlmp_k$();
    }
    var ret = tmp;
    divAssign(ret, other);
    return ret;
  }
  function timesAssign(_this__u8e3s4, other) {
    if (_this__u8e3s4.get_consistent_si7i05_k$()) {
      _this__u8e3s4.get_data_wokkxf_k$().timesAssign_yswwui_k$(other);
    } else {
      if (!(other == null) ? typeof other === 'number' : false) {
        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call
        var this_0 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
        switch (this_0.get_dim_18j7c1_k$().get_d_1mhr5n_k$()) {
          case 1:
            if (!isInterface(this_0, MutableMultiArray))
              THROW_CCE();
            var progression = this_0.get_indices_xelk8u_k$();
            var inductionVariable = progression.get_first_irdx8n_k$();
            var last = progression.get_last_wopotb_k$();
            if (inductionVariable <= last)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                var tmp$ret$0 = get(this_0, i) * other;
                set(this_0, i, tmp$ret$0);
              }
               while (!(i === last));
            break;
          case 2:
            if (!isInterface(this_0, MutableMultiArray))
              THROW_CCE();
            var tmp2_iterator = this_0.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp2_iterator.hasNext_bitz1p_k$()) {
              var i_0 = tmp2_iterator.next_20eer_k$();
              var tmp = i_0[0];
              var tmp_0 = i_0[1];
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
              var tmp$ret$1 = get_0(this_0, i_0[0], i_0[1]) * other;
              set_0(this_0, tmp, tmp_0, tmp$ret$1);
            }

            break;
          case 3:
            if (!isInterface(this_0, MutableMultiArray))
              THROW_CCE();
            var tmp3_iterator = this_0.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp3_iterator.hasNext_bitz1p_k$()) {
              var i_1 = tmp3_iterator.next_20eer_k$();
              var tmp_1 = i_1[0];
              var tmp_2 = i_1[1];
              var tmp_3 = i_1[2];
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
              var tmp$ret$2 = get_1(this_0, i_1[0], i_1[1], i_1[2]) * other;
              set_2(this_0, tmp_1, tmp_2, tmp_3, tmp$ret$2);
            }

            break;
          case 4:
            if (!isInterface(this_0, MutableMultiArray))
              THROW_CCE();
            var tmp4_iterator = this_0.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp4_iterator.hasNext_bitz1p_k$()) {
              var i_2 = tmp4_iterator.next_20eer_k$();
              var tmp_4 = i_2[0];
              var tmp_5 = i_2[1];
              var tmp_6 = i_2[2];
              var tmp_7 = i_2[3];
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
              var tmp$ret$3 = get_2(this_0, i_2[0], i_2[1], i_2[2], i_2[3]) * other;
              set_3(this_0, tmp_4, tmp_5, tmp_6, tmp_7, tmp$ret$3);
            }

            break;
          default:
            var left = asDNArray(this_0);
            var tmp5_iterator = this_0.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp5_iterator.hasNext_bitz1p_k$()) {
              var index = tmp5_iterator.next_20eer_k$();
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
              var tmp$ret$4 = get_7(left, index) * other;
              set_1(left, index, tmp$ret$4);
            }

            break;
        }
      } else {
        if (!(other == null) ? typeof other === 'number' : false) {
          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call
          var this_1 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
          switch (this_1.get_dim_18j7c1_k$().get_d_1mhr5n_k$()) {
            case 1:
              if (!isInterface(this_1, MutableMultiArray))
                THROW_CCE();
              var progression_0 = this_1.get_indices_xelk8u_k$();
              var inductionVariable_0 = progression_0.get_first_irdx8n_k$();
              var last_0 = progression_0.get_last_wopotb_k$();
              if (inductionVariable_0 <= last_0)
                do {
                  var i_3 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                  var tmp$ret$5 = get(this_1, i_3) * other;
                  set(this_1, i_3, tmp$ret$5);
                }
                 while (!(i_3 === last_0));
              break;
            case 2:
              if (!isInterface(this_1, MutableMultiArray))
                THROW_CCE();
              var tmp2_iterator_0 = this_1.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
              while (tmp2_iterator_0.hasNext_bitz1p_k$()) {
                var i_4 = tmp2_iterator_0.next_20eer_k$();
                var tmp_8 = i_4[0];
                var tmp_9 = i_4[1];
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                var tmp$ret$6 = get_0(this_1, i_4[0], i_4[1]) * other;
                set_0(this_1, tmp_8, tmp_9, tmp$ret$6);
              }

              break;
            case 3:
              if (!isInterface(this_1, MutableMultiArray))
                THROW_CCE();
              var tmp3_iterator_0 = this_1.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
              while (tmp3_iterator_0.hasNext_bitz1p_k$()) {
                var i_5 = tmp3_iterator_0.next_20eer_k$();
                var tmp_10 = i_5[0];
                var tmp_11 = i_5[1];
                var tmp_12 = i_5[2];
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                var tmp$ret$7 = get_1(this_1, i_5[0], i_5[1], i_5[2]) * other;
                set_2(this_1, tmp_10, tmp_11, tmp_12, tmp$ret$7);
              }

              break;
            case 4:
              if (!isInterface(this_1, MutableMultiArray))
                THROW_CCE();
              var tmp4_iterator_0 = this_1.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
              while (tmp4_iterator_0.hasNext_bitz1p_k$()) {
                var i_6 = tmp4_iterator_0.next_20eer_k$();
                var tmp_13 = i_6[0];
                var tmp_14 = i_6[1];
                var tmp_15 = i_6[2];
                var tmp_16 = i_6[3];
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                var tmp$ret$8 = get_2(this_1, i_6[0], i_6[1], i_6[2], i_6[3]) * other;
                set_3(this_1, tmp_13, tmp_14, tmp_15, tmp_16, tmp$ret$8);
              }

              break;
            default:
              var left_0 = asDNArray(this_1);
              var tmp5_iterator_0 = this_1.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
              while (tmp5_iterator_0.hasNext_bitz1p_k$()) {
                var index_0 = tmp5_iterator_0.next_20eer_k$();
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                var tmp$ret$9 = get_7(left_0, index_0) * other;
                set_1(left_0, index_0, tmp$ret$9);
              }

              break;
          }
        } else {
          if (!(other == null) ? typeof other === 'number' : false) {
            // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call
            var this_2 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
            switch (this_2.get_dim_18j7c1_k$().get_d_1mhr5n_k$()) {
              case 1:
                if (!isInterface(this_2, MutableMultiArray))
                  THROW_CCE();
                var progression_1 = this_2.get_indices_xelk8u_k$();
                var inductionVariable_1 = progression_1.get_first_irdx8n_k$();
                var last_1 = progression_1.get_last_wopotb_k$();
                if (inductionVariable_1 <= last_1)
                  do {
                    var i_7 = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                    var a = get(this_2, i_7);
                    var tmp$ret$10 = imul(a, other);
                    set(this_2, i_7, tmp$ret$10);
                  }
                   while (!(i_7 === last_1));
                break;
              case 2:
                if (!isInterface(this_2, MutableMultiArray))
                  THROW_CCE();
                var tmp2_iterator_1 = this_2.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                while (tmp2_iterator_1.hasNext_bitz1p_k$()) {
                  var i_8 = tmp2_iterator_1.next_20eer_k$();
                  var tmp_17 = i_8[0];
                  var tmp_18 = i_8[1];
                  // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                  var a_0 = get_0(this_2, i_8[0], i_8[1]);
                  var tmp$ret$11 = imul(a_0, other);
                  set_0(this_2, tmp_17, tmp_18, tmp$ret$11);
                }

                break;
              case 3:
                if (!isInterface(this_2, MutableMultiArray))
                  THROW_CCE();
                var tmp3_iterator_1 = this_2.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                while (tmp3_iterator_1.hasNext_bitz1p_k$()) {
                  var i_9 = tmp3_iterator_1.next_20eer_k$();
                  var tmp_19 = i_9[0];
                  var tmp_20 = i_9[1];
                  var tmp_21 = i_9[2];
                  // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                  var a_1 = get_1(this_2, i_9[0], i_9[1], i_9[2]);
                  var tmp$ret$12 = imul(a_1, other);
                  set_2(this_2, tmp_19, tmp_20, tmp_21, tmp$ret$12);
                }

                break;
              case 4:
                if (!isInterface(this_2, MutableMultiArray))
                  THROW_CCE();
                var tmp4_iterator_1 = this_2.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                while (tmp4_iterator_1.hasNext_bitz1p_k$()) {
                  var i_10 = tmp4_iterator_1.next_20eer_k$();
                  var tmp_22 = i_10[0];
                  var tmp_23 = i_10[1];
                  var tmp_24 = i_10[2];
                  var tmp_25 = i_10[3];
                  // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                  var a_2 = get_2(this_2, i_10[0], i_10[1], i_10[2], i_10[3]);
                  var tmp$ret$13 = imul(a_2, other);
                  set_3(this_2, tmp_22, tmp_23, tmp_24, tmp_25, tmp$ret$13);
                }

                break;
              default:
                var left_1 = asDNArray(this_2);
                var tmp5_iterator_1 = this_2.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                while (tmp5_iterator_1.hasNext_bitz1p_k$()) {
                  var index_1 = tmp5_iterator_1.next_20eer_k$();
                  // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                  var a_3 = get_7(left_1, index_1);
                  var tmp$ret$14 = imul(a_3, other);
                  set_1(left_1, index_1, tmp$ret$14);
                }

                break;
            }
          } else {
            if (other instanceof Long) {
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call
              var this_3 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
              switch (this_3.get_dim_18j7c1_k$().get_d_1mhr5n_k$()) {
                case 1:
                  if (!isInterface(this_3, MutableMultiArray))
                    THROW_CCE();
                  var progression_2 = this_3.get_indices_xelk8u_k$();
                  var inductionVariable_2 = progression_2.get_first_irdx8n_k$();
                  var last_2 = progression_2.get_last_wopotb_k$();
                  if (inductionVariable_2 <= last_2)
                    do {
                      var i_11 = inductionVariable_2;
                      inductionVariable_2 = inductionVariable_2 + 1 | 0;
                      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                      var tmp$ret$15 = get(this_3, i_11).times_nfzjiw_k$(other);
                      set(this_3, i_11, tmp$ret$15);
                    }
                     while (!(i_11 === last_2));
                  break;
                case 2:
                  if (!isInterface(this_3, MutableMultiArray))
                    THROW_CCE();
                  var tmp2_iterator_2 = this_3.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                  while (tmp2_iterator_2.hasNext_bitz1p_k$()) {
                    var i_12 = tmp2_iterator_2.next_20eer_k$();
                    var tmp_26 = i_12[0];
                    var tmp_27 = i_12[1];
                    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                    var tmp$ret$16 = get_0(this_3, i_12[0], i_12[1]).times_nfzjiw_k$(other);
                    set_0(this_3, tmp_26, tmp_27, tmp$ret$16);
                  }

                  break;
                case 3:
                  if (!isInterface(this_3, MutableMultiArray))
                    THROW_CCE();
                  var tmp3_iterator_2 = this_3.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                  while (tmp3_iterator_2.hasNext_bitz1p_k$()) {
                    var i_13 = tmp3_iterator_2.next_20eer_k$();
                    var tmp_28 = i_13[0];
                    var tmp_29 = i_13[1];
                    var tmp_30 = i_13[2];
                    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                    var tmp$ret$17 = get_1(this_3, i_13[0], i_13[1], i_13[2]).times_nfzjiw_k$(other);
                    set_2(this_3, tmp_28, tmp_29, tmp_30, tmp$ret$17);
                  }

                  break;
                case 4:
                  if (!isInterface(this_3, MutableMultiArray))
                    THROW_CCE();
                  var tmp4_iterator_2 = this_3.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                  while (tmp4_iterator_2.hasNext_bitz1p_k$()) {
                    var i_14 = tmp4_iterator_2.next_20eer_k$();
                    var tmp_31 = i_14[0];
                    var tmp_32 = i_14[1];
                    var tmp_33 = i_14[2];
                    var tmp_34 = i_14[3];
                    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                    var tmp$ret$18 = get_2(this_3, i_14[0], i_14[1], i_14[2], i_14[3]).times_nfzjiw_k$(other);
                    set_3(this_3, tmp_31, tmp_32, tmp_33, tmp_34, tmp$ret$18);
                  }

                  break;
                default:
                  var left_2 = asDNArray(this_3);
                  var tmp5_iterator_2 = this_3.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                  while (tmp5_iterator_2.hasNext_bitz1p_k$()) {
                    var index_2 = tmp5_iterator_2.next_20eer_k$();
                    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                    var tmp$ret$19 = get_7(left_2, index_2).times_nfzjiw_k$(other);
                    set_1(left_2, index_2, tmp$ret$19);
                  }

                  break;
              }
            } else {
              if (other instanceof ComplexFloat) {
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call
                var this_4 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
                switch (this_4.get_dim_18j7c1_k$().get_d_1mhr5n_k$()) {
                  case 1:
                    if (!isInterface(this_4, MutableMultiArray))
                      THROW_CCE();
                    var progression_3 = this_4.get_indices_xelk8u_k$();
                    var inductionVariable_3 = progression_3.get_first_irdx8n_k$();
                    var last_3 = progression_3.get_last_wopotb_k$();
                    if (inductionVariable_3 <= last_3)
                      do {
                        var i_15 = inductionVariable_3;
                        inductionVariable_3 = inductionVariable_3 + 1 | 0;
                        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                        var tmp$ret$20 = get(this_4, i_15).times_c0fmev_k$(other);
                        set(this_4, i_15, tmp$ret$20);
                      }
                       while (!(i_15 === last_3));
                    break;
                  case 2:
                    if (!isInterface(this_4, MutableMultiArray))
                      THROW_CCE();
                    var tmp2_iterator_3 = this_4.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                    while (tmp2_iterator_3.hasNext_bitz1p_k$()) {
                      var i_16 = tmp2_iterator_3.next_20eer_k$();
                      var tmp_35 = i_16[0];
                      var tmp_36 = i_16[1];
                      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                      var tmp$ret$21 = get_0(this_4, i_16[0], i_16[1]).times_c0fmev_k$(other);
                      set_0(this_4, tmp_35, tmp_36, tmp$ret$21);
                    }

                    break;
                  case 3:
                    if (!isInterface(this_4, MutableMultiArray))
                      THROW_CCE();
                    var tmp3_iterator_3 = this_4.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                    while (tmp3_iterator_3.hasNext_bitz1p_k$()) {
                      var i_17 = tmp3_iterator_3.next_20eer_k$();
                      var tmp_37 = i_17[0];
                      var tmp_38 = i_17[1];
                      var tmp_39 = i_17[2];
                      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                      var tmp$ret$22 = get_1(this_4, i_17[0], i_17[1], i_17[2]).times_c0fmev_k$(other);
                      set_2(this_4, tmp_37, tmp_38, tmp_39, tmp$ret$22);
                    }

                    break;
                  case 4:
                    if (!isInterface(this_4, MutableMultiArray))
                      THROW_CCE();
                    var tmp4_iterator_3 = this_4.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                    while (tmp4_iterator_3.hasNext_bitz1p_k$()) {
                      var i_18 = tmp4_iterator_3.next_20eer_k$();
                      var tmp_40 = i_18[0];
                      var tmp_41 = i_18[1];
                      var tmp_42 = i_18[2];
                      var tmp_43 = i_18[3];
                      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                      var tmp$ret$23 = get_2(this_4, i_18[0], i_18[1], i_18[2], i_18[3]).times_c0fmev_k$(other);
                      set_3(this_4, tmp_40, tmp_41, tmp_42, tmp_43, tmp$ret$23);
                    }

                    break;
                  default:
                    var left_3 = asDNArray(this_4);
                    var tmp5_iterator_3 = this_4.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                    while (tmp5_iterator_3.hasNext_bitz1p_k$()) {
                      var index_3 = tmp5_iterator_3.next_20eer_k$();
                      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                      var tmp$ret$24 = get_7(left_3, index_3).times_c0fmev_k$(other);
                      set_1(left_3, index_3, tmp$ret$24);
                    }

                    break;
                }
              } else {
                if (other instanceof ComplexDouble) {
                  // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call
                  var this_5 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
                  switch (this_5.get_dim_18j7c1_k$().get_d_1mhr5n_k$()) {
                    case 1:
                      if (!isInterface(this_5, MutableMultiArray))
                        THROW_CCE();
                      var progression_4 = this_5.get_indices_xelk8u_k$();
                      var inductionVariable_4 = progression_4.get_first_irdx8n_k$();
                      var last_4 = progression_4.get_last_wopotb_k$();
                      if (inductionVariable_4 <= last_4)
                        do {
                          var i_19 = inductionVariable_4;
                          inductionVariable_4 = inductionVariable_4 + 1 | 0;
                          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                          var tmp$ret$25 = get(this_5, i_19).times_czwimy_k$(other);
                          set(this_5, i_19, tmp$ret$25);
                        }
                         while (!(i_19 === last_4));
                      break;
                    case 2:
                      if (!isInterface(this_5, MutableMultiArray))
                        THROW_CCE();
                      var tmp2_iterator_4 = this_5.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                      while (tmp2_iterator_4.hasNext_bitz1p_k$()) {
                        var i_20 = tmp2_iterator_4.next_20eer_k$();
                        var tmp_44 = i_20[0];
                        var tmp_45 = i_20[1];
                        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                        var tmp$ret$26 = get_0(this_5, i_20[0], i_20[1]).times_czwimy_k$(other);
                        set_0(this_5, tmp_44, tmp_45, tmp$ret$26);
                      }

                      break;
                    case 3:
                      if (!isInterface(this_5, MutableMultiArray))
                        THROW_CCE();
                      var tmp3_iterator_4 = this_5.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                      while (tmp3_iterator_4.hasNext_bitz1p_k$()) {
                        var i_21 = tmp3_iterator_4.next_20eer_k$();
                        var tmp_46 = i_21[0];
                        var tmp_47 = i_21[1];
                        var tmp_48 = i_21[2];
                        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                        var tmp$ret$27 = get_1(this_5, i_21[0], i_21[1], i_21[2]).times_czwimy_k$(other);
                        set_2(this_5, tmp_46, tmp_47, tmp_48, tmp$ret$27);
                      }

                      break;
                    case 4:
                      if (!isInterface(this_5, MutableMultiArray))
                        THROW_CCE();
                      var tmp4_iterator_4 = this_5.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                      while (tmp4_iterator_4.hasNext_bitz1p_k$()) {
                        var i_22 = tmp4_iterator_4.next_20eer_k$();
                        var tmp_49 = i_22[0];
                        var tmp_50 = i_22[1];
                        var tmp_51 = i_22[2];
                        var tmp_52 = i_22[3];
                        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                        var tmp$ret$28 = get_2(this_5, i_22[0], i_22[1], i_22[2], i_22[3]).times_czwimy_k$(other);
                        set_3(this_5, tmp_49, tmp_50, tmp_51, tmp_52, tmp$ret$28);
                      }

                      break;
                    default:
                      var left_4 = asDNArray(this_5);
                      var tmp5_iterator_4 = this_5.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                      while (tmp5_iterator_4.hasNext_bitz1p_k$()) {
                        var index_4 = tmp5_iterator_4.next_20eer_k$();
                        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                        var tmp$ret$29 = get_7(left_4, index_4).times_czwimy_k$(other);
                        set_1(left_4, index_4, tmp$ret$29);
                      }

                      break;
                  }
                } else {
                  if (!(other == null) ? typeof other === 'number' : false) {
                    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call
                    var this_6 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
                    switch (this_6.get_dim_18j7c1_k$().get_d_1mhr5n_k$()) {
                      case 1:
                        if (!isInterface(this_6, MutableMultiArray))
                          THROW_CCE();
                        var progression_5 = this_6.get_indices_xelk8u_k$();
                        var inductionVariable_5 = progression_5.get_first_irdx8n_k$();
                        var last_5 = progression_5.get_last_wopotb_k$();
                        if (inductionVariable_5 <= last_5)
                          do {
                            var i_23 = inductionVariable_5;
                            inductionVariable_5 = inductionVariable_5 + 1 | 0;
                            // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                            var a_4 = get(this_6, i_23);
                            var tmp$ret$30 = toShort(a_4 * other | 0);
                            set(this_6, i_23, tmp$ret$30);
                          }
                           while (!(i_23 === last_5));
                        break;
                      case 2:
                        if (!isInterface(this_6, MutableMultiArray))
                          THROW_CCE();
                        var tmp2_iterator_5 = this_6.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                        while (tmp2_iterator_5.hasNext_bitz1p_k$()) {
                          var i_24 = tmp2_iterator_5.next_20eer_k$();
                          var tmp_53 = i_24[0];
                          var tmp_54 = i_24[1];
                          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                          var a_5 = get_0(this_6, i_24[0], i_24[1]);
                          var tmp$ret$31 = toShort(a_5 * other | 0);
                          set_0(this_6, tmp_53, tmp_54, tmp$ret$31);
                        }

                        break;
                      case 3:
                        if (!isInterface(this_6, MutableMultiArray))
                          THROW_CCE();
                        var tmp3_iterator_5 = this_6.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                        while (tmp3_iterator_5.hasNext_bitz1p_k$()) {
                          var i_25 = tmp3_iterator_5.next_20eer_k$();
                          var tmp_55 = i_25[0];
                          var tmp_56 = i_25[1];
                          var tmp_57 = i_25[2];
                          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                          var a_6 = get_1(this_6, i_25[0], i_25[1], i_25[2]);
                          var tmp$ret$32 = toShort(a_6 * other | 0);
                          set_2(this_6, tmp_55, tmp_56, tmp_57, tmp$ret$32);
                        }

                        break;
                      case 4:
                        if (!isInterface(this_6, MutableMultiArray))
                          THROW_CCE();
                        var tmp4_iterator_5 = this_6.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                        while (tmp4_iterator_5.hasNext_bitz1p_k$()) {
                          var i_26 = tmp4_iterator_5.next_20eer_k$();
                          var tmp_58 = i_26[0];
                          var tmp_59 = i_26[1];
                          var tmp_60 = i_26[2];
                          var tmp_61 = i_26[3];
                          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                          var a_7 = get_2(this_6, i_26[0], i_26[1], i_26[2], i_26[3]);
                          var tmp$ret$33 = toShort(a_7 * other | 0);
                          set_3(this_6, tmp_58, tmp_59, tmp_60, tmp_61, tmp$ret$33);
                        }

                        break;
                      default:
                        var left_5 = asDNArray(this_6);
                        var tmp5_iterator_5 = this_6.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                        while (tmp5_iterator_5.hasNext_bitz1p_k$()) {
                          var index_5 = tmp5_iterator_5.next_20eer_k$();
                          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                          var a_8 = get_7(left_5, index_5);
                          var tmp$ret$34 = toShort(a_8 * other | 0);
                          set_1(left_5, index_5, tmp$ret$34);
                        }

                        break;
                    }
                  } else {
                    if (!(other == null) ? typeof other === 'number' : false) {
                      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call
                      var this_7 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
                      switch (this_7.get_dim_18j7c1_k$().get_d_1mhr5n_k$()) {
                        case 1:
                          if (!isInterface(this_7, MutableMultiArray))
                            THROW_CCE();
                          var progression_6 = this_7.get_indices_xelk8u_k$();
                          var inductionVariable_6 = progression_6.get_first_irdx8n_k$();
                          var last_6 = progression_6.get_last_wopotb_k$();
                          if (inductionVariable_6 <= last_6)
                            do {
                              var i_27 = inductionVariable_6;
                              inductionVariable_6 = inductionVariable_6 + 1 | 0;
                              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                              var a_9 = get(this_7, i_27);
                              var tmp$ret$35 = toByte(a_9 * other | 0);
                              set(this_7, i_27, tmp$ret$35);
                            }
                             while (!(i_27 === last_6));
                          break;
                        case 2:
                          if (!isInterface(this_7, MutableMultiArray))
                            THROW_CCE();
                          var tmp2_iterator_6 = this_7.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                          while (tmp2_iterator_6.hasNext_bitz1p_k$()) {
                            var i_28 = tmp2_iterator_6.next_20eer_k$();
                            var tmp_62 = i_28[0];
                            var tmp_63 = i_28[1];
                            // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                            var a_10 = get_0(this_7, i_28[0], i_28[1]);
                            var tmp$ret$36 = toByte(a_10 * other | 0);
                            set_0(this_7, tmp_62, tmp_63, tmp$ret$36);
                          }

                          break;
                        case 3:
                          if (!isInterface(this_7, MutableMultiArray))
                            THROW_CCE();
                          var tmp3_iterator_6 = this_7.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                          while (tmp3_iterator_6.hasNext_bitz1p_k$()) {
                            var i_29 = tmp3_iterator_6.next_20eer_k$();
                            var tmp_64 = i_29[0];
                            var tmp_65 = i_29[1];
                            var tmp_66 = i_29[2];
                            // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                            var a_11 = get_1(this_7, i_29[0], i_29[1], i_29[2]);
                            var tmp$ret$37 = toByte(a_11 * other | 0);
                            set_2(this_7, tmp_64, tmp_65, tmp_66, tmp$ret$37);
                          }

                          break;
                        case 4:
                          if (!isInterface(this_7, MutableMultiArray))
                            THROW_CCE();
                          var tmp4_iterator_6 = this_7.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                          while (tmp4_iterator_6.hasNext_bitz1p_k$()) {
                            var i_30 = tmp4_iterator_6.next_20eer_k$();
                            var tmp_67 = i_30[0];
                            var tmp_68 = i_30[1];
                            var tmp_69 = i_30[2];
                            var tmp_70 = i_30[3];
                            // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                            var a_12 = get_2(this_7, i_30[0], i_30[1], i_30[2], i_30[3]);
                            var tmp$ret$38 = toByte(a_12 * other | 0);
                            set_3(this_7, tmp_67, tmp_68, tmp_69, tmp_70, tmp$ret$38);
                          }

                          break;
                        default:
                          var left_6 = asDNArray(this_7);
                          var tmp5_iterator_6 = this_7.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                          while (tmp5_iterator_6.hasNext_bitz1p_k$()) {
                            var index_6 = tmp5_iterator_6.next_20eer_k$();
                            // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                            var a_13 = get_7(left_6, index_6);
                            var tmp$ret$39 = toByte(a_13 * other | 0);
                            set_1(left_6, index_6, tmp$ret$39);
                          }

                          break;
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
  }
  function commonAssignOp(_this__u8e3s4, other, op) {
    if (_this__u8e3s4.get_consistent_si7i05_k$()) {
      var progression = _this__u8e3s4.get_indices_xelk8u_k$();
      var inductionVariable = progression.get_first_irdx8n_k$();
      var last = progression.get_last_wopotb_k$();
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          _this__u8e3s4.get_data_wokkxf_k$().set_52lp9l_k$(i, op(_this__u8e3s4.get_data_wokkxf_k$().get_c1px32_k$(i), other.next_20eer_k$()));
        }
         while (!(i === last));
    } else {
      var left = asDNArray(_this__u8e3s4);
      var tmp1_iterator = _this__u8e3s4.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
      while (tmp1_iterator.hasNext_bitz1p_k$()) {
        var index = tmp1_iterator.next_20eer_k$();
        set_1(left, index, op(get_7(left, index), other.next_20eer_k$()));
      }
    }
  }
  function timesAssign_0(_this__u8e3s4, other) {
    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requireEqualShape' call
    var left = _this__u8e3s4.get_shape_iyi9a0_k$();
    var right = other.get_shape_iyi9a0_k$();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!contentEquals(left, right)) {
      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.data.requireEqualShape.<anonymous>' call
      var message = "Array shapes don't match: " + contentToString(left) + ' != ' + contentToString(right);
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (_this__u8e3s4.get_consistent_si7i05_k$() ? other.get_consistent_si7i05_k$() : false) {
      var tmp = _this__u8e3s4.get_data_wokkxf_k$();
      var tmp_0 = other.get_data_wokkxf_k$();
      tmp.timesAssign_56rgs4_k$(tmp_0 instanceof MemoryView ? tmp_0 : THROW_CCE());
    } else {
      switch (_this__u8e3s4.get_dtype_iqhi0l_k$().get_ordinal_ip24qg_k$()) {
        case 5:
          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call

          var this_0 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
          var tmp_1 = other.iterator_jk1svi_k$();
          var other_0 = isInterface(tmp_1, Iterator) ? tmp_1 : THROW_CCE();
          if (this_0.get_consistent_si7i05_k$()) {
            var progression = this_0.get_indices_xelk8u_k$();
            var inductionVariable = progression.get_first_irdx8n_k$();
            var last = progression.get_last_wopotb_k$();
            if (inductionVariable <= last)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                var tmp_2 = this_0.get_data_wokkxf_k$();
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                var tmp$ret$1 = this_0.get_data_wokkxf_k$().get_c1px32_k$(i) * other_0.next_20eer_k$();
                tmp_2.set_52lp9l_k$(i, tmp$ret$1);
              }
               while (!(i === last));
          } else {
            var left_0 = asDNArray(this_0);
            var tmp1_iterator = this_0.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp1_iterator.hasNext_bitz1p_k$()) {
              var index = tmp1_iterator.next_20eer_k$();
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
              var tmp$ret$2 = get_7(left_0, index) * other_0.next_20eer_k$();
              set_1(left_0, index, tmp$ret$2);
            }
          }

          break;
        case 4:
          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call

          var this_1 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
          var tmp_3 = other.iterator_jk1svi_k$();
          var other_1 = isInterface(tmp_3, Iterator) ? tmp_3 : THROW_CCE();
          if (this_1.get_consistent_si7i05_k$()) {
            var progression_0 = this_1.get_indices_xelk8u_k$();
            var inductionVariable_0 = progression_0.get_first_irdx8n_k$();
            var last_0 = progression_0.get_last_wopotb_k$();
            if (inductionVariable_0 <= last_0)
              do {
                var i_0 = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                var tmp_4 = this_1.get_data_wokkxf_k$();
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                var tmp$ret$3 = this_1.get_data_wokkxf_k$().get_c1px32_k$(i_0) * other_1.next_20eer_k$();
                tmp_4.set_52lp9l_k$(i_0, tmp$ret$3);
              }
               while (!(i_0 === last_0));
          } else {
            var left_1 = asDNArray(this_1);
            var tmp1_iterator_0 = this_1.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp1_iterator_0.hasNext_bitz1p_k$()) {
              var index_0 = tmp1_iterator_0.next_20eer_k$();
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
              var tmp$ret$4 = get_7(left_1, index_0) * other_1.next_20eer_k$();
              set_1(left_1, index_0, tmp$ret$4);
            }
          }

          break;
        case 2:
          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call

          var this_2 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
          var tmp_5 = other.iterator_jk1svi_k$();
          var other_2 = isInterface(tmp_5, Iterator) ? tmp_5 : THROW_CCE();
          if (this_2.get_consistent_si7i05_k$()) {
            var progression_1 = this_2.get_indices_xelk8u_k$();
            var inductionVariable_1 = progression_1.get_first_irdx8n_k$();
            var last_1 = progression_1.get_last_wopotb_k$();
            if (inductionVariable_1 <= last_1)
              do {
                var i_1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                var tmp_6 = this_2.get_data_wokkxf_k$();
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                var a = this_2.get_data_wokkxf_k$().get_c1px32_k$(i_1);
                var b = other_2.next_20eer_k$();
                var tmp$ret$5 = imul(a, b);
                tmp_6.set_52lp9l_k$(i_1, tmp$ret$5);
              }
               while (!(i_1 === last_1));
          } else {
            var left_2 = asDNArray(this_2);
            var tmp1_iterator_1 = this_2.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp1_iterator_1.hasNext_bitz1p_k$()) {
              var index_1 = tmp1_iterator_1.next_20eer_k$();
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
              var a_0 = get_7(left_2, index_1);
              var b_0 = other_2.next_20eer_k$();
              var tmp$ret$6 = imul(a_0, b_0);
              set_1(left_2, index_1, tmp$ret$6);
            }
          }

          break;
        case 3:
          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call

          var this_3 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
          var tmp_7 = other.iterator_jk1svi_k$();
          var other_3 = isInterface(tmp_7, Iterator) ? tmp_7 : THROW_CCE();
          if (this_3.get_consistent_si7i05_k$()) {
            var progression_2 = this_3.get_indices_xelk8u_k$();
            var inductionVariable_2 = progression_2.get_first_irdx8n_k$();
            var last_2 = progression_2.get_last_wopotb_k$();
            if (inductionVariable_2 <= last_2)
              do {
                var i_2 = inductionVariable_2;
                inductionVariable_2 = inductionVariable_2 + 1 | 0;
                var tmp_8 = this_3.get_data_wokkxf_k$();
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                var a_1 = this_3.get_data_wokkxf_k$().get_c1px32_k$(i_2);
                var b_1 = other_3.next_20eer_k$();
                var tmp$ret$7 = a_1.times_nfzjiw_k$(b_1);
                tmp_8.set_52lp9l_k$(i_2, tmp$ret$7);
              }
               while (!(i_2 === last_2));
          } else {
            var left_3 = asDNArray(this_3);
            var tmp1_iterator_2 = this_3.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp1_iterator_2.hasNext_bitz1p_k$()) {
              var index_2 = tmp1_iterator_2.next_20eer_k$();
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
              var a_2 = get_7(left_3, index_2);
              var b_2 = other_3.next_20eer_k$();
              var tmp$ret$8 = a_2.times_nfzjiw_k$(b_2);
              set_1(left_3, index_2, tmp$ret$8);
            }
          }

          break;
        case 6:
          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call

          var this_4 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
          var tmp_9 = other.iterator_jk1svi_k$();
          var other_4 = isInterface(tmp_9, Iterator) ? tmp_9 : THROW_CCE();
          if (this_4.get_consistent_si7i05_k$()) {
            var progression_3 = this_4.get_indices_xelk8u_k$();
            var inductionVariable_3 = progression_3.get_first_irdx8n_k$();
            var last_3 = progression_3.get_last_wopotb_k$();
            if (inductionVariable_3 <= last_3)
              do {
                var i_3 = inductionVariable_3;
                inductionVariable_3 = inductionVariable_3 + 1 | 0;
                var tmp_10 = this_4.get_data_wokkxf_k$();
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                var a_3 = this_4.get_data_wokkxf_k$().get_c1px32_k$(i_3);
                var b_3 = other_4.next_20eer_k$();
                var tmp$ret$9 = a_3.times_c0fmev_k$(b_3);
                tmp_10.set_52lp9l_k$(i_3, tmp$ret$9);
              }
               while (!(i_3 === last_3));
          } else {
            var left_4 = asDNArray(this_4);
            var tmp1_iterator_3 = this_4.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp1_iterator_3.hasNext_bitz1p_k$()) {
              var index_3 = tmp1_iterator_3.next_20eer_k$();
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
              var a_4 = get_7(left_4, index_3);
              var b_4 = other_4.next_20eer_k$();
              var tmp$ret$10 = a_4.times_c0fmev_k$(b_4);
              set_1(left_4, index_3, tmp$ret$10);
            }
          }

          break;
        case 7:
          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call

          var this_5 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
          var tmp_11 = other.iterator_jk1svi_k$();
          var other_5 = isInterface(tmp_11, Iterator) ? tmp_11 : THROW_CCE();
          if (this_5.get_consistent_si7i05_k$()) {
            var progression_4 = this_5.get_indices_xelk8u_k$();
            var inductionVariable_4 = progression_4.get_first_irdx8n_k$();
            var last_4 = progression_4.get_last_wopotb_k$();
            if (inductionVariable_4 <= last_4)
              do {
                var i_4 = inductionVariable_4;
                inductionVariable_4 = inductionVariable_4 + 1 | 0;
                var tmp_12 = this_5.get_data_wokkxf_k$();
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                var a_5 = this_5.get_data_wokkxf_k$().get_c1px32_k$(i_4);
                var b_5 = other_5.next_20eer_k$();
                var tmp$ret$11 = a_5.times_czwimy_k$(b_5);
                tmp_12.set_52lp9l_k$(i_4, tmp$ret$11);
              }
               while (!(i_4 === last_4));
          } else {
            var left_5 = asDNArray(this_5);
            var tmp1_iterator_4 = this_5.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp1_iterator_4.hasNext_bitz1p_k$()) {
              var index_4 = tmp1_iterator_4.next_20eer_k$();
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
              var a_6 = get_7(left_5, index_4);
              var b_6 = other_5.next_20eer_k$();
              var tmp$ret$12 = a_6.times_czwimy_k$(b_6);
              set_1(left_5, index_4, tmp$ret$12);
            }
          }

          break;
        case 1:
          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call

          var this_6 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
          var tmp_13 = other.iterator_jk1svi_k$();
          var other_6 = isInterface(tmp_13, Iterator) ? tmp_13 : THROW_CCE();
          if (this_6.get_consistent_si7i05_k$()) {
            var progression_5 = this_6.get_indices_xelk8u_k$();
            var inductionVariable_5 = progression_5.get_first_irdx8n_k$();
            var last_5 = progression_5.get_last_wopotb_k$();
            if (inductionVariable_5 <= last_5)
              do {
                var i_5 = inductionVariable_5;
                inductionVariable_5 = inductionVariable_5 + 1 | 0;
                var tmp_14 = this_6.get_data_wokkxf_k$();
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                var a_7 = this_6.get_data_wokkxf_k$().get_c1px32_k$(i_5);
                var b_7 = other_6.next_20eer_k$();
                var tmp$ret$13 = toShort(a_7 * b_7 | 0);
                tmp_14.set_52lp9l_k$(i_5, tmp$ret$13);
              }
               while (!(i_5 === last_5));
          } else {
            var left_6 = asDNArray(this_6);
            var tmp1_iterator_5 = this_6.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp1_iterator_5.hasNext_bitz1p_k$()) {
              var index_5 = tmp1_iterator_5.next_20eer_k$();
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
              var a_8 = get_7(left_6, index_5);
              var b_8 = other_6.next_20eer_k$();
              var tmp$ret$14 = toShort(a_8 * b_8 | 0);
              set_1(left_6, index_5, tmp$ret$14);
            }
          }

          break;
        case 0:
          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call

          var this_7 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
          var tmp_15 = other.iterator_jk1svi_k$();
          var other_7 = isInterface(tmp_15, Iterator) ? tmp_15 : THROW_CCE();
          if (this_7.get_consistent_si7i05_k$()) {
            var progression_6 = this_7.get_indices_xelk8u_k$();
            var inductionVariable_6 = progression_6.get_first_irdx8n_k$();
            var last_6 = progression_6.get_last_wopotb_k$();
            if (inductionVariable_6 <= last_6)
              do {
                var i_6 = inductionVariable_6;
                inductionVariable_6 = inductionVariable_6 + 1 | 0;
                var tmp_16 = this_7.get_data_wokkxf_k$();
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
                var a_9 = this_7.get_data_wokkxf_k$().get_c1px32_k$(i_6);
                var b_9 = other_7.next_20eer_k$();
                var tmp$ret$15 = toByte(a_9 * b_9 | 0);
                tmp_16.set_52lp9l_k$(i_6, tmp$ret$15);
              }
               while (!(i_6 === last_6));
          } else {
            var left_7 = asDNArray(this_7);
            var tmp1_iterator_6 = this_7.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp1_iterator_6.hasNext_bitz1p_k$()) {
              var index_6 = tmp1_iterator_6.next_20eer_k$();
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.timesAssign.<anonymous>' call
              var a_10 = get_7(left_7, index_6);
              var b_10 = other_7.next_20eer_k$();
              var tmp$ret$16 = toByte(a_10 * b_10 | 0);
              set_1(left_7, index_6, tmp$ret$16);
            }
          }

          break;
      }
    }
  }
  function divAssign(_this__u8e3s4, other) {
    if (_this__u8e3s4.get_consistent_si7i05_k$()) {
      _this__u8e3s4.get_data_wokkxf_k$().divAssign_ibwwan_k$(other);
    } else {
      if (!(other == null) ? typeof other === 'number' : false) {
        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call
        var this_0 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
        switch (this_0.get_dim_18j7c1_k$().get_d_1mhr5n_k$()) {
          case 1:
            if (!isInterface(this_0, MutableMultiArray))
              THROW_CCE();
            var progression = this_0.get_indices_xelk8u_k$();
            var inductionVariable = progression.get_first_irdx8n_k$();
            var last = progression.get_last_wopotb_k$();
            if (inductionVariable <= last)
              do {
                var i = inductionVariable;
                inductionVariable = inductionVariable + 1 | 0;
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                var tmp$ret$0 = get(this_0, i) / other;
                set(this_0, i, tmp$ret$0);
              }
               while (!(i === last));
            break;
          case 2:
            if (!isInterface(this_0, MutableMultiArray))
              THROW_CCE();
            var tmp2_iterator = this_0.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp2_iterator.hasNext_bitz1p_k$()) {
              var i_0 = tmp2_iterator.next_20eer_k$();
              var tmp = i_0[0];
              var tmp_0 = i_0[1];
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
              var tmp$ret$1 = get_0(this_0, i_0[0], i_0[1]) / other;
              set_0(this_0, tmp, tmp_0, tmp$ret$1);
            }

            break;
          case 3:
            if (!isInterface(this_0, MutableMultiArray))
              THROW_CCE();
            var tmp3_iterator = this_0.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp3_iterator.hasNext_bitz1p_k$()) {
              var i_1 = tmp3_iterator.next_20eer_k$();
              var tmp_1 = i_1[0];
              var tmp_2 = i_1[1];
              var tmp_3 = i_1[2];
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
              var tmp$ret$2 = get_1(this_0, i_1[0], i_1[1], i_1[2]) / other;
              set_2(this_0, tmp_1, tmp_2, tmp_3, tmp$ret$2);
            }

            break;
          case 4:
            if (!isInterface(this_0, MutableMultiArray))
              THROW_CCE();
            var tmp4_iterator = this_0.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp4_iterator.hasNext_bitz1p_k$()) {
              var i_2 = tmp4_iterator.next_20eer_k$();
              var tmp_4 = i_2[0];
              var tmp_5 = i_2[1];
              var tmp_6 = i_2[2];
              var tmp_7 = i_2[3];
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
              var tmp$ret$3 = get_2(this_0, i_2[0], i_2[1], i_2[2], i_2[3]) / other;
              set_3(this_0, tmp_4, tmp_5, tmp_6, tmp_7, tmp$ret$3);
            }

            break;
          default:
            var left = asDNArray(this_0);
            var tmp5_iterator = this_0.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
            while (tmp5_iterator.hasNext_bitz1p_k$()) {
              var index = tmp5_iterator.next_20eer_k$();
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
              var tmp$ret$4 = get_7(left, index) / other;
              set_1(left, index, tmp$ret$4);
            }

            break;
        }
      } else {
        if (!(other == null) ? typeof other === 'number' : false) {
          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call
          var this_1 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
          switch (this_1.get_dim_18j7c1_k$().get_d_1mhr5n_k$()) {
            case 1:
              if (!isInterface(this_1, MutableMultiArray))
                THROW_CCE();
              var progression_0 = this_1.get_indices_xelk8u_k$();
              var inductionVariable_0 = progression_0.get_first_irdx8n_k$();
              var last_0 = progression_0.get_last_wopotb_k$();
              if (inductionVariable_0 <= last_0)
                do {
                  var i_3 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                  var tmp$ret$5 = get(this_1, i_3) / other;
                  set(this_1, i_3, tmp$ret$5);
                }
                 while (!(i_3 === last_0));
              break;
            case 2:
              if (!isInterface(this_1, MutableMultiArray))
                THROW_CCE();
              var tmp2_iterator_0 = this_1.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
              while (tmp2_iterator_0.hasNext_bitz1p_k$()) {
                var i_4 = tmp2_iterator_0.next_20eer_k$();
                var tmp_8 = i_4[0];
                var tmp_9 = i_4[1];
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                var tmp$ret$6 = get_0(this_1, i_4[0], i_4[1]) / other;
                set_0(this_1, tmp_8, tmp_9, tmp$ret$6);
              }

              break;
            case 3:
              if (!isInterface(this_1, MutableMultiArray))
                THROW_CCE();
              var tmp3_iterator_0 = this_1.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
              while (tmp3_iterator_0.hasNext_bitz1p_k$()) {
                var i_5 = tmp3_iterator_0.next_20eer_k$();
                var tmp_10 = i_5[0];
                var tmp_11 = i_5[1];
                var tmp_12 = i_5[2];
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                var tmp$ret$7 = get_1(this_1, i_5[0], i_5[1], i_5[2]) / other;
                set_2(this_1, tmp_10, tmp_11, tmp_12, tmp$ret$7);
              }

              break;
            case 4:
              if (!isInterface(this_1, MutableMultiArray))
                THROW_CCE();
              var tmp4_iterator_0 = this_1.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
              while (tmp4_iterator_0.hasNext_bitz1p_k$()) {
                var i_6 = tmp4_iterator_0.next_20eer_k$();
                var tmp_13 = i_6[0];
                var tmp_14 = i_6[1];
                var tmp_15 = i_6[2];
                var tmp_16 = i_6[3];
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                var tmp$ret$8 = get_2(this_1, i_6[0], i_6[1], i_6[2], i_6[3]) / other;
                set_3(this_1, tmp_13, tmp_14, tmp_15, tmp_16, tmp$ret$8);
              }

              break;
            default:
              var left_0 = asDNArray(this_1);
              var tmp5_iterator_0 = this_1.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
              while (tmp5_iterator_0.hasNext_bitz1p_k$()) {
                var index_0 = tmp5_iterator_0.next_20eer_k$();
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                var tmp$ret$9 = get_7(left_0, index_0) / other;
                set_1(left_0, index_0, tmp$ret$9);
              }

              break;
          }
        } else {
          if (!(other == null) ? typeof other === 'number' : false) {
            // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call
            var this_2 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
            switch (this_2.get_dim_18j7c1_k$().get_d_1mhr5n_k$()) {
              case 1:
                if (!isInterface(this_2, MutableMultiArray))
                  THROW_CCE();
                var progression_1 = this_2.get_indices_xelk8u_k$();
                var inductionVariable_1 = progression_1.get_first_irdx8n_k$();
                var last_1 = progression_1.get_last_wopotb_k$();
                if (inductionVariable_1 <= last_1)
                  do {
                    var i_7 = inductionVariable_1;
                    inductionVariable_1 = inductionVariable_1 + 1 | 0;
                    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                    var tmp$ret$10 = get(this_2, i_7) / other | 0;
                    set(this_2, i_7, tmp$ret$10);
                  }
                   while (!(i_7 === last_1));
                break;
              case 2:
                if (!isInterface(this_2, MutableMultiArray))
                  THROW_CCE();
                var tmp2_iterator_1 = this_2.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                while (tmp2_iterator_1.hasNext_bitz1p_k$()) {
                  var i_8 = tmp2_iterator_1.next_20eer_k$();
                  var tmp_17 = i_8[0];
                  var tmp_18 = i_8[1];
                  // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                  var tmp$ret$11 = get_0(this_2, i_8[0], i_8[1]) / other | 0;
                  set_0(this_2, tmp_17, tmp_18, tmp$ret$11);
                }

                break;
              case 3:
                if (!isInterface(this_2, MutableMultiArray))
                  THROW_CCE();
                var tmp3_iterator_1 = this_2.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                while (tmp3_iterator_1.hasNext_bitz1p_k$()) {
                  var i_9 = tmp3_iterator_1.next_20eer_k$();
                  var tmp_19 = i_9[0];
                  var tmp_20 = i_9[1];
                  var tmp_21 = i_9[2];
                  // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                  var tmp$ret$12 = get_1(this_2, i_9[0], i_9[1], i_9[2]) / other | 0;
                  set_2(this_2, tmp_19, tmp_20, tmp_21, tmp$ret$12);
                }

                break;
              case 4:
                if (!isInterface(this_2, MutableMultiArray))
                  THROW_CCE();
                var tmp4_iterator_1 = this_2.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                while (tmp4_iterator_1.hasNext_bitz1p_k$()) {
                  var i_10 = tmp4_iterator_1.next_20eer_k$();
                  var tmp_22 = i_10[0];
                  var tmp_23 = i_10[1];
                  var tmp_24 = i_10[2];
                  var tmp_25 = i_10[3];
                  // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                  var tmp$ret$13 = get_2(this_2, i_10[0], i_10[1], i_10[2], i_10[3]) / other | 0;
                  set_3(this_2, tmp_22, tmp_23, tmp_24, tmp_25, tmp$ret$13);
                }

                break;
              default:
                var left_1 = asDNArray(this_2);
                var tmp5_iterator_1 = this_2.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                while (tmp5_iterator_1.hasNext_bitz1p_k$()) {
                  var index_1 = tmp5_iterator_1.next_20eer_k$();
                  // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                  var tmp$ret$14 = get_7(left_1, index_1) / other | 0;
                  set_1(left_1, index_1, tmp$ret$14);
                }

                break;
            }
          } else {
            if (other instanceof Long) {
              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call
              var this_3 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
              switch (this_3.get_dim_18j7c1_k$().get_d_1mhr5n_k$()) {
                case 1:
                  if (!isInterface(this_3, MutableMultiArray))
                    THROW_CCE();
                  var progression_2 = this_3.get_indices_xelk8u_k$();
                  var inductionVariable_2 = progression_2.get_first_irdx8n_k$();
                  var last_2 = progression_2.get_last_wopotb_k$();
                  if (inductionVariable_2 <= last_2)
                    do {
                      var i_11 = inductionVariable_2;
                      inductionVariable_2 = inductionVariable_2 + 1 | 0;
                      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                      var tmp$ret$15 = get(this_3, i_11).div_jun7gj_k$(other);
                      set(this_3, i_11, tmp$ret$15);
                    }
                     while (!(i_11 === last_2));
                  break;
                case 2:
                  if (!isInterface(this_3, MutableMultiArray))
                    THROW_CCE();
                  var tmp2_iterator_2 = this_3.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                  while (tmp2_iterator_2.hasNext_bitz1p_k$()) {
                    var i_12 = tmp2_iterator_2.next_20eer_k$();
                    var tmp_26 = i_12[0];
                    var tmp_27 = i_12[1];
                    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                    var tmp$ret$16 = get_0(this_3, i_12[0], i_12[1]).div_jun7gj_k$(other);
                    set_0(this_3, tmp_26, tmp_27, tmp$ret$16);
                  }

                  break;
                case 3:
                  if (!isInterface(this_3, MutableMultiArray))
                    THROW_CCE();
                  var tmp3_iterator_2 = this_3.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                  while (tmp3_iterator_2.hasNext_bitz1p_k$()) {
                    var i_13 = tmp3_iterator_2.next_20eer_k$();
                    var tmp_28 = i_13[0];
                    var tmp_29 = i_13[1];
                    var tmp_30 = i_13[2];
                    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                    var tmp$ret$17 = get_1(this_3, i_13[0], i_13[1], i_13[2]).div_jun7gj_k$(other);
                    set_2(this_3, tmp_28, tmp_29, tmp_30, tmp$ret$17);
                  }

                  break;
                case 4:
                  if (!isInterface(this_3, MutableMultiArray))
                    THROW_CCE();
                  var tmp4_iterator_2 = this_3.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                  while (tmp4_iterator_2.hasNext_bitz1p_k$()) {
                    var i_14 = tmp4_iterator_2.next_20eer_k$();
                    var tmp_31 = i_14[0];
                    var tmp_32 = i_14[1];
                    var tmp_33 = i_14[2];
                    var tmp_34 = i_14[3];
                    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                    var tmp$ret$18 = get_2(this_3, i_14[0], i_14[1], i_14[2], i_14[3]).div_jun7gj_k$(other);
                    set_3(this_3, tmp_31, tmp_32, tmp_33, tmp_34, tmp$ret$18);
                  }

                  break;
                default:
                  var left_2 = asDNArray(this_3);
                  var tmp5_iterator_2 = this_3.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                  while (tmp5_iterator_2.hasNext_bitz1p_k$()) {
                    var index_2 = tmp5_iterator_2.next_20eer_k$();
                    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                    var tmp$ret$19 = get_7(left_2, index_2).div_jun7gj_k$(other);
                    set_1(left_2, index_2, tmp$ret$19);
                  }

                  break;
              }
            } else {
              if (other instanceof ComplexFloat) {
                // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call
                var this_4 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
                switch (this_4.get_dim_18j7c1_k$().get_d_1mhr5n_k$()) {
                  case 1:
                    if (!isInterface(this_4, MutableMultiArray))
                      THROW_CCE();
                    var progression_3 = this_4.get_indices_xelk8u_k$();
                    var inductionVariable_3 = progression_3.get_first_irdx8n_k$();
                    var last_3 = progression_3.get_last_wopotb_k$();
                    if (inductionVariable_3 <= last_3)
                      do {
                        var i_15 = inductionVariable_3;
                        inductionVariable_3 = inductionVariable_3 + 1 | 0;
                        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                        var tmp$ret$20 = get(this_4, i_15).div_ra8ixu_k$(other);
                        set(this_4, i_15, tmp$ret$20);
                      }
                       while (!(i_15 === last_3));
                    break;
                  case 2:
                    if (!isInterface(this_4, MutableMultiArray))
                      THROW_CCE();
                    var tmp2_iterator_3 = this_4.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                    while (tmp2_iterator_3.hasNext_bitz1p_k$()) {
                      var i_16 = tmp2_iterator_3.next_20eer_k$();
                      var tmp_35 = i_16[0];
                      var tmp_36 = i_16[1];
                      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                      var tmp$ret$21 = get_0(this_4, i_16[0], i_16[1]).div_ra8ixu_k$(other);
                      set_0(this_4, tmp_35, tmp_36, tmp$ret$21);
                    }

                    break;
                  case 3:
                    if (!isInterface(this_4, MutableMultiArray))
                      THROW_CCE();
                    var tmp3_iterator_3 = this_4.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                    while (tmp3_iterator_3.hasNext_bitz1p_k$()) {
                      var i_17 = tmp3_iterator_3.next_20eer_k$();
                      var tmp_37 = i_17[0];
                      var tmp_38 = i_17[1];
                      var tmp_39 = i_17[2];
                      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                      var tmp$ret$22 = get_1(this_4, i_17[0], i_17[1], i_17[2]).div_ra8ixu_k$(other);
                      set_2(this_4, tmp_37, tmp_38, tmp_39, tmp$ret$22);
                    }

                    break;
                  case 4:
                    if (!isInterface(this_4, MutableMultiArray))
                      THROW_CCE();
                    var tmp4_iterator_3 = this_4.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                    while (tmp4_iterator_3.hasNext_bitz1p_k$()) {
                      var i_18 = tmp4_iterator_3.next_20eer_k$();
                      var tmp_40 = i_18[0];
                      var tmp_41 = i_18[1];
                      var tmp_42 = i_18[2];
                      var tmp_43 = i_18[3];
                      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                      var tmp$ret$23 = get_2(this_4, i_18[0], i_18[1], i_18[2], i_18[3]).div_ra8ixu_k$(other);
                      set_3(this_4, tmp_40, tmp_41, tmp_42, tmp_43, tmp$ret$23);
                    }

                    break;
                  default:
                    var left_3 = asDNArray(this_4);
                    var tmp5_iterator_3 = this_4.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                    while (tmp5_iterator_3.hasNext_bitz1p_k$()) {
                      var index_3 = tmp5_iterator_3.next_20eer_k$();
                      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                      var tmp$ret$24 = get_7(left_3, index_3).div_ra8ixu_k$(other);
                      set_1(left_3, index_3, tmp$ret$24);
                    }

                    break;
                }
              } else {
                if (other instanceof ComplexDouble) {
                  // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call
                  var this_5 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
                  switch (this_5.get_dim_18j7c1_k$().get_d_1mhr5n_k$()) {
                    case 1:
                      if (!isInterface(this_5, MutableMultiArray))
                        THROW_CCE();
                      var progression_4 = this_5.get_indices_xelk8u_k$();
                      var inductionVariable_4 = progression_4.get_first_irdx8n_k$();
                      var last_4 = progression_4.get_last_wopotb_k$();
                      if (inductionVariable_4 <= last_4)
                        do {
                          var i_19 = inductionVariable_4;
                          inductionVariable_4 = inductionVariable_4 + 1 | 0;
                          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                          var tmp$ret$25 = get(this_5, i_19).div_y9b5uj_k$(other);
                          set(this_5, i_19, tmp$ret$25);
                        }
                         while (!(i_19 === last_4));
                      break;
                    case 2:
                      if (!isInterface(this_5, MutableMultiArray))
                        THROW_CCE();
                      var tmp2_iterator_4 = this_5.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                      while (tmp2_iterator_4.hasNext_bitz1p_k$()) {
                        var i_20 = tmp2_iterator_4.next_20eer_k$();
                        var tmp_44 = i_20[0];
                        var tmp_45 = i_20[1];
                        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                        var tmp$ret$26 = get_0(this_5, i_20[0], i_20[1]).div_y9b5uj_k$(other);
                        set_0(this_5, tmp_44, tmp_45, tmp$ret$26);
                      }

                      break;
                    case 3:
                      if (!isInterface(this_5, MutableMultiArray))
                        THROW_CCE();
                      var tmp3_iterator_4 = this_5.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                      while (tmp3_iterator_4.hasNext_bitz1p_k$()) {
                        var i_21 = tmp3_iterator_4.next_20eer_k$();
                        var tmp_46 = i_21[0];
                        var tmp_47 = i_21[1];
                        var tmp_48 = i_21[2];
                        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                        var tmp$ret$27 = get_1(this_5, i_21[0], i_21[1], i_21[2]).div_y9b5uj_k$(other);
                        set_2(this_5, tmp_46, tmp_47, tmp_48, tmp$ret$27);
                      }

                      break;
                    case 4:
                      if (!isInterface(this_5, MutableMultiArray))
                        THROW_CCE();
                      var tmp4_iterator_4 = this_5.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                      while (tmp4_iterator_4.hasNext_bitz1p_k$()) {
                        var i_22 = tmp4_iterator_4.next_20eer_k$();
                        var tmp_49 = i_22[0];
                        var tmp_50 = i_22[1];
                        var tmp_51 = i_22[2];
                        var tmp_52 = i_22[3];
                        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                        var tmp$ret$28 = get_2(this_5, i_22[0], i_22[1], i_22[2], i_22[3]).div_y9b5uj_k$(other);
                        set_3(this_5, tmp_49, tmp_50, tmp_51, tmp_52, tmp$ret$28);
                      }

                      break;
                    default:
                      var left_4 = asDNArray(this_5);
                      var tmp5_iterator_4 = this_5.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                      while (tmp5_iterator_4.hasNext_bitz1p_k$()) {
                        var index_4 = tmp5_iterator_4.next_20eer_k$();
                        // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                        var tmp$ret$29 = get_7(left_4, index_4).div_y9b5uj_k$(other);
                        set_1(left_4, index_4, tmp$ret$29);
                      }

                      break;
                  }
                } else {
                  if (!(other == null) ? typeof other === 'number' : false) {
                    // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call
                    var this_6 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
                    switch (this_6.get_dim_18j7c1_k$().get_d_1mhr5n_k$()) {
                      case 1:
                        if (!isInterface(this_6, MutableMultiArray))
                          THROW_CCE();
                        var progression_5 = this_6.get_indices_xelk8u_k$();
                        var inductionVariable_5 = progression_5.get_first_irdx8n_k$();
                        var last_5 = progression_5.get_last_wopotb_k$();
                        if (inductionVariable_5 <= last_5)
                          do {
                            var i_23 = inductionVariable_5;
                            inductionVariable_5 = inductionVariable_5 + 1 | 0;
                            // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                            var a = get(this_6, i_23);
                            var tmp$ret$30 = toShort(a / other | 0);
                            set(this_6, i_23, tmp$ret$30);
                          }
                           while (!(i_23 === last_5));
                        break;
                      case 2:
                        if (!isInterface(this_6, MutableMultiArray))
                          THROW_CCE();
                        var tmp2_iterator_5 = this_6.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                        while (tmp2_iterator_5.hasNext_bitz1p_k$()) {
                          var i_24 = tmp2_iterator_5.next_20eer_k$();
                          var tmp_53 = i_24[0];
                          var tmp_54 = i_24[1];
                          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                          var a_0 = get_0(this_6, i_24[0], i_24[1]);
                          var tmp$ret$31 = toShort(a_0 / other | 0);
                          set_0(this_6, tmp_53, tmp_54, tmp$ret$31);
                        }

                        break;
                      case 3:
                        if (!isInterface(this_6, MutableMultiArray))
                          THROW_CCE();
                        var tmp3_iterator_5 = this_6.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                        while (tmp3_iterator_5.hasNext_bitz1p_k$()) {
                          var i_25 = tmp3_iterator_5.next_20eer_k$();
                          var tmp_55 = i_25[0];
                          var tmp_56 = i_25[1];
                          var tmp_57 = i_25[2];
                          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                          var a_1 = get_1(this_6, i_25[0], i_25[1], i_25[2]);
                          var tmp$ret$32 = toShort(a_1 / other | 0);
                          set_2(this_6, tmp_55, tmp_56, tmp_57, tmp$ret$32);
                        }

                        break;
                      case 4:
                        if (!isInterface(this_6, MutableMultiArray))
                          THROW_CCE();
                        var tmp4_iterator_5 = this_6.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                        while (tmp4_iterator_5.hasNext_bitz1p_k$()) {
                          var i_26 = tmp4_iterator_5.next_20eer_k$();
                          var tmp_58 = i_26[0];
                          var tmp_59 = i_26[1];
                          var tmp_60 = i_26[2];
                          var tmp_61 = i_26[3];
                          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                          var a_2 = get_2(this_6, i_26[0], i_26[1], i_26[2], i_26[3]);
                          var tmp$ret$33 = toShort(a_2 / other | 0);
                          set_3(this_6, tmp_58, tmp_59, tmp_60, tmp_61, tmp$ret$33);
                        }

                        break;
                      default:
                        var left_5 = asDNArray(this_6);
                        var tmp5_iterator_5 = this_6.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                        while (tmp5_iterator_5.hasNext_bitz1p_k$()) {
                          var index_5 = tmp5_iterator_5.next_20eer_k$();
                          // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                          var a_3 = get_7(left_5, index_5);
                          var tmp$ret$34 = toShort(a_3 / other | 0);
                          set_1(left_5, index_5, tmp$ret$34);
                        }

                        break;
                    }
                  } else {
                    if (!(other == null) ? typeof other === 'number' : false) {
                      // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.commonAssignOp' call
                      var this_7 = _this__u8e3s4 instanceof NDArray ? _this__u8e3s4 : THROW_CCE();
                      switch (this_7.get_dim_18j7c1_k$().get_d_1mhr5n_k$()) {
                        case 1:
                          if (!isInterface(this_7, MutableMultiArray))
                            THROW_CCE();
                          var progression_6 = this_7.get_indices_xelk8u_k$();
                          var inductionVariable_6 = progression_6.get_first_irdx8n_k$();
                          var last_6 = progression_6.get_last_wopotb_k$();
                          if (inductionVariable_6 <= last_6)
                            do {
                              var i_27 = inductionVariable_6;
                              inductionVariable_6 = inductionVariable_6 + 1 | 0;
                              // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                              var a_4 = get(this_7, i_27);
                              var tmp$ret$35 = toByte(a_4 / other | 0);
                              set(this_7, i_27, tmp$ret$35);
                            }
                             while (!(i_27 === last_6));
                          break;
                        case 2:
                          if (!isInterface(this_7, MutableMultiArray))
                            THROW_CCE();
                          var tmp2_iterator_6 = this_7.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                          while (tmp2_iterator_6.hasNext_bitz1p_k$()) {
                            var i_28 = tmp2_iterator_6.next_20eer_k$();
                            var tmp_62 = i_28[0];
                            var tmp_63 = i_28[1];
                            // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                            var a_5 = get_0(this_7, i_28[0], i_28[1]);
                            var tmp$ret$36 = toByte(a_5 / other | 0);
                            set_0(this_7, tmp_62, tmp_63, tmp$ret$36);
                          }

                          break;
                        case 3:
                          if (!isInterface(this_7, MutableMultiArray))
                            THROW_CCE();
                          var tmp3_iterator_6 = this_7.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                          while (tmp3_iterator_6.hasNext_bitz1p_k$()) {
                            var i_29 = tmp3_iterator_6.next_20eer_k$();
                            var tmp_64 = i_29[0];
                            var tmp_65 = i_29[1];
                            var tmp_66 = i_29[2];
                            // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                            var a_6 = get_1(this_7, i_29[0], i_29[1], i_29[2]);
                            var tmp$ret$37 = toByte(a_6 / other | 0);
                            set_2(this_7, tmp_64, tmp_65, tmp_66, tmp$ret$37);
                          }

                          break;
                        case 4:
                          if (!isInterface(this_7, MutableMultiArray))
                            THROW_CCE();
                          var tmp4_iterator_6 = this_7.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                          while (tmp4_iterator_6.hasNext_bitz1p_k$()) {
                            var i_30 = tmp4_iterator_6.next_20eer_k$();
                            var tmp_67 = i_30[0];
                            var tmp_68 = i_30[1];
                            var tmp_69 = i_30[2];
                            var tmp_70 = i_30[3];
                            // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                            var a_7 = get_2(this_7, i_30[0], i_30[1], i_30[2], i_30[3]);
                            var tmp$ret$38 = toByte(a_7 / other | 0);
                            set_3(this_7, tmp_67, tmp_68, tmp_69, tmp_70, tmp$ret$38);
                          }

                          break;
                        default:
                          var left_6 = asDNArray(this_7);
                          var tmp5_iterator_6 = this_7.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
                          while (tmp5_iterator_6.hasNext_bitz1p_k$()) {
                            var index_6 = tmp5_iterator_6.next_20eer_k$();
                            // Inline function 'org.jetbrains.kotlinx.multik.ndarray.operations.divAssign.<anonymous>' call
                            var a_8 = get_7(left_6, index_6);
                            var tmp$ret$39 = toByte(a_8 / other | 0);
                            set_1(left_6, index_6, tmp$ret$39);
                          }

                          break;
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
  }
  function commonAssignOp_0(_this__u8e3s4, other, op) {
    switch (_this__u8e3s4.get_dim_18j7c1_k$().get_d_1mhr5n_k$()) {
      case 1:
        if (!isInterface(_this__u8e3s4, MutableMultiArray))
          THROW_CCE();
        var progression = _this__u8e3s4.get_indices_xelk8u_k$();
        var inductionVariable = progression.get_first_irdx8n_k$();
        var last = progression.get_last_wopotb_k$();
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            set(_this__u8e3s4, i, op(get(_this__u8e3s4, i), other));
          }
           while (!(i === last));
        break;
      case 2:
        if (!isInterface(_this__u8e3s4, MutableMultiArray))
          THROW_CCE();
        var tmp2_iterator = _this__u8e3s4.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
        while (tmp2_iterator.hasNext_bitz1p_k$()) {
          var i_0 = tmp2_iterator.next_20eer_k$();
          set_0(_this__u8e3s4, i_0[0], i_0[1], op(get_0(_this__u8e3s4, i_0[0], i_0[1]), other));
        }

        break;
      case 3:
        if (!isInterface(_this__u8e3s4, MutableMultiArray))
          THROW_CCE();
        var tmp3_iterator = _this__u8e3s4.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
        while (tmp3_iterator.hasNext_bitz1p_k$()) {
          var i_1 = tmp3_iterator.next_20eer_k$();
          set_2(_this__u8e3s4, i_1[0], i_1[1], i_1[2], op(get_1(_this__u8e3s4, i_1[0], i_1[1], i_1[2]), other));
        }

        break;
      case 4:
        if (!isInterface(_this__u8e3s4, MutableMultiArray))
          THROW_CCE();
        var tmp4_iterator = _this__u8e3s4.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
        while (tmp4_iterator.hasNext_bitz1p_k$()) {
          var i_2 = tmp4_iterator.next_20eer_k$();
          set_3(_this__u8e3s4, i_2[0], i_2[1], i_2[2], i_2[3], op(get_2(_this__u8e3s4, i_2[0], i_2[1], i_2[2], i_2[3]), other));
        }

        break;
      default:
        var left = asDNArray(_this__u8e3s4);
        var tmp5_iterator = _this__u8e3s4.get_multiIndices_5j6nav_k$().iterator_jk1svi_k$();
        while (tmp5_iterator.hasNext_bitz1p_k$()) {
          var index = tmp5_iterator.next_20eer_k$();
          set_1(left, index, op(get_7(left, index), other));
        }

        break;
    }
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
  //region block: post-declaration
  protoOf(MemoryView).copyInto$default_xpd7xg_k$ = copyInto$default;
  protoOf(NDArray).cat$default_bp8zs3_k$ = cat$default;
  protoOf(NDArray).cat$default_v4fff7_k$ = cat$default_0;
  protoOf(NDArray).get_dtype_iqhi0l_k$ = get_dtype;
  protoOf(Slice).isEmpty_y1axqb_k$ = isEmpty;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = DataType_ByteDataType_getInstance;
  _.$_$.b = DataType_ComplexDoubleDataType_getInstance;
  _.$_$.c = DataType_ComplexFloatDataType_getInstance;
  _.$_$.d = DataType_DoubleDataType_getInstance;
  _.$_$.e = DataType_FloatDataType_getInstance;
  _.$_$.f = DataType_IntDataType_getInstance;
  _.$_$.g = DataType_LongDataType_getInstance;
  _.$_$.h = DataType_ShortDataType_getInstance;
  _.$_$.i = CopyStrategy_FULL_getInstance;
  _.$_$.j = CopyStrategy_MEANINGFUL_getInstance;
  _.$_$.k = normF$default;
  _.$_$.l = norm$default;
  _.$_$.m = average$default;
  _.$_$.n = getEngine$default;
  _.$_$.o = RInt__minus_impl_xkujuu;
  _.$_$.p = RInt__until_impl_2ge59w_0;
  _.$_$.q = DefaultEngineType_getInstance;
  _.$_$.r = KEEngineType_getInstance;
  _.$_$.s = Multik_getInstance;
  _.$_$.t = NativeEngineType_getInstance;
  _.$_$.u = Companion_getInstance_1;
  _.$_$.v = Companion_getInstance_0;
  _.$_$.w = Companion_getInstance_4;
  _.$_$.x = Companion_getInstance_5;
  _.$_$.y = Companion_getInstance_6;
  _.$_$.z = Companion_getInstance_7;
  _.$_$.a1 = Companion_getInstance_3;
  _.$_$.b1 = LinAlgEx;
  _.$_$.c1 = LinAlg;
  _.$_$.d1 = dot;
  _.$_$.e1 = MathEx;
  _.$_$.f1 = Math_0;
  _.$_$.g1 = Statistics;
  _.$_$.h1 = EngineFactory;
  _.$_$.i1 = Engine;
  _.$_$.j1 = get_enginesStore;
  _.$_$.k1 = identity;
  _.$_$.l1 = zeros;
  _.$_$.m1 = ComplexDouble;
  _.$_$.n1 = ComplexFloat;
  _.$_$.o1 = Complex;
  _.$_$.p1 = toComplexDouble;
  _.$_$.q1 = toComplexFloat;
  _.$_$.r1 = DN;
  _.$_$.s1 = Dimension;
  _.$_$.t1 = MultiArray;
  _.$_$.u1 = NDArray;
  _.$_$.v1 = RInt;
  _.$_$.w1 = compareTo_0;
  _.$_$.x1 = get_4;
  _.$_$.y1 = get;
  _.$_$.z1 = get_5;
  _.$_$.a2 = get_6;
  _.$_$.b2 = get_3;
  _.$_$.c2 = get_0;
  _.$_$.d2 = initMemoryView_0;
  _.$_$.e2 = initMemoryView;
  _.$_$.f2 = get_r;
  _.$_$.g2 = set_0;
  _.$_$.h2 = set;
  _.$_$.i2 = slice;
  _.$_$.j2 = div;
  _.$_$.k2 = first_1;
  _.$_$.l2 = plusAssign_0;
  _.$_$.m2 = sorted_0;
  _.$_$.n2 = timesAssign;
  _.$_$.o2 = times;
  _.$_$.p2 = toType;
  //endregion
  return _;
}));

//# sourceMappingURL=multik-multik-core.js.map
