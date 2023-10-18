(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'KotlinBigInteger-bignum-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'KotlinBigInteger-bignum-js-ir'.");
    }
    root['KotlinBigInteger-bignum-js-ir'] = factory(typeof this['KotlinBigInteger-bignum-js-ir'] === 'undefined' ? {} : this['KotlinBigInteger-bignum-js-ir'], this['kotlin-kotlin-stdlib']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var log10 = Math.log10;
  var protoOf = kotlin_kotlin.$_$.ye;
  var VOID = kotlin_kotlin.$_$.f;
  var interfaceMeta = kotlin_kotlin.$_$.wd;
  var setMetadataFor = kotlin_kotlin.$_$.ze;
  var THROW_IAE = kotlin_kotlin.$_$.qj;
  var Unit_getInstance = kotlin_kotlin.$_$.d5;
  var Enum = kotlin_kotlin.$_$.dj;
  var classMeta = kotlin_kotlin.$_$.id;
  var hashCode = kotlin_kotlin.$_$.ud;
  var THROW_CCE = kotlin_kotlin.$_$.pj;
  var toLong = kotlin_kotlin.$_$.cf;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.z1;
  var Pair = kotlin_kotlin.$_$.mj;
  var Long = kotlin_kotlin.$_$.jj;
  var ArithmeticException_init_$Create$ = kotlin_kotlin.$_$.d1;
  var ensureNotNull = kotlin_kotlin.$_$.fk;
  var DoubleCompanionObject_getInstance = kotlin_kotlin.$_$.n4;
  var FloatCompanionObject_getInstance = kotlin_kotlin.$_$.o4;
  var ULong = kotlin_kotlin.$_$.xj;
  var UInt = kotlin_kotlin.$_$.vj;
  var UShort = kotlin_kotlin.$_$.zj;
  var UByte = kotlin_kotlin.$_$.tj;
  var get_lastIndex = kotlin_kotlin.$_$.kh;
  var charSequenceGet = kotlin_kotlin.$_$.fd;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h2;
  var contains = kotlin_kotlin.$_$.wg;
  var charSequenceLength = kotlin_kotlin.$_$.gd;
  var charArrayOf = kotlin_kotlin.$_$.dd;
  var split = kotlin_kotlin.$_$.wh;
  var listOf = kotlin_kotlin.$_$.r8;
  var toLong_0 = kotlin_kotlin.$_$.ki;
  var numberToLong = kotlin_kotlin.$_$.ue;
  var objectMeta = kotlin_kotlin.$_$.xe;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nk;
  var Triple = kotlin_kotlin.$_$.rj;
  var numberToDouble = kotlin_kotlin.$_$.se;
  var Companion_getInstance = kotlin_kotlin.$_$.x4;
  var until = kotlin_kotlin.$_$.vf;
  var substring = kotlin_kotlin.$_$.ai;
  var abs = kotlin_kotlin.$_$.gf;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.j;
  var toDouble = kotlin_kotlin.$_$.fi;
  var isNumber = kotlin_kotlin.$_$.he;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var split_0 = kotlin_kotlin.$_$.xh;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.p4;
  var abs_0 = kotlin_kotlin.$_$.ff;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c1;
  var Comparable = kotlin_kotlin.$_$.zi;
  var getKClass = kotlin_kotlin.$_$.d;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.t4;
  var objectCreate = kotlin_kotlin.$_$.we;
  var NumberFormatException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var contains_0 = kotlin_kotlin.$_$.kf;
  var isEmpty = kotlin_kotlin.$_$.lf;
  var ClosedRange = kotlin_kotlin.$_$.mf;
  var Iterable = kotlin_kotlin.$_$.j5;
  var Iterator = kotlin_kotlin.$_$.k5;
  var toString = kotlin_kotlin.$_$.ef;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var _ULongArray___get_size__impl__ju6dtr = kotlin_kotlin.$_$.y3;
  var _ULongArray___get_storage__impl__28e64j = kotlin_kotlin.$_$.z3;
  var copyOf = kotlin_kotlin.$_$.w6;
  var _ULongArray___init__impl__twm1l3 = kotlin_kotlin.$_$.s3;
  var equals = kotlin_kotlin.$_$.md;
  var ULongArray = kotlin_kotlin.$_$.wj;
  var ULongArray__get_impl_pr71q9 = kotlin_kotlin.$_$.t3;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.o3;
  var numberToInt = kotlin_kotlin.$_$.te;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.n3;
  var ULongArray__set_impl_z19mvh = kotlin_kotlin.$_$.x3;
  var ULongArray__iterator_impl_cq4d2h = kotlin_kotlin.$_$.w3;
  var ULong__hashCode_impl_6hv2lb = kotlin_kotlin.$_$.p3;
  var ByteCompanionObject_getInstance = kotlin_kotlin.$_$.m4;
  var toByte = kotlin_kotlin.$_$.bf;
  var ShortCompanionObject_getInstance = kotlin_kotlin.$_$.q4;
  var toShort = kotlin_kotlin.$_$.df;
  var Companion_getInstance_0 = kotlin_kotlin.$_$.a5;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.b3;
  var Companion_getInstance_1 = kotlin_kotlin.$_$.b5;
  var Companion_getInstance_2 = kotlin_kotlin.$_$.z4;
  var _UByte___get_data__impl__jof9qr = kotlin_kotlin.$_$.s2;
  var _UByte___init__impl__g9hnc4 = kotlin_kotlin.$_$.r2;
  var Companion_getInstance_3 = kotlin_kotlin.$_$.c5;
  var _UShort___get_data__impl__g0245 = kotlin_kotlin.$_$.b4;
  var _UShort___init__impl__jigrne = kotlin_kotlin.$_$.a4;
  var println = kotlin_kotlin.$_$.wc;
  var UIntArray = kotlin_kotlin.$_$.uj;
  var UIntArray__hashCode_impl_hr7ost = kotlin_kotlin.$_$.h3;
  var getBooleanHashCode = kotlin_kotlin.$_$.pd;
  var _UIntArray___get_size__impl__r6l8ci = kotlin_kotlin.$_$.l3;
  var _UIntArray___get_storage__impl__92a0v0 = kotlin_kotlin.$_$.m3;
  var copyOfRange = kotlin_kotlin.$_$.r6;
  var _UIntArray___init__impl__ghjpc6 = kotlin_kotlin.$_$.f3;
  var contentEquals = kotlin_kotlin.$_$.g6;
  var UIntArray__isEmpty_impl_vd8j4n = kotlin_kotlin.$_$.i3;
  var _UByteArray___init__impl__ip4y9n = kotlin_kotlin.$_$.u2;
  var emptyList = kotlin_kotlin.$_$.i7;
  var UIntArray__iterator_impl_tkdv7k = kotlin_kotlin.$_$.j3;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.c3;
  var addAll = kotlin_kotlin.$_$.u5;
  var takeLast = kotlin_kotlin.$_$.na;
  var chunked = kotlin_kotlin.$_$.b6;
  var reversed = kotlin_kotlin.$_$.t9;
  var flatten = kotlin_kotlin.$_$.r7;
  var listOf_0 = kotlin_kotlin.$_$.q8;
  var plus = kotlin_kotlin.$_$.i9;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.i;
  var toUIntArray = kotlin_kotlin.$_$.mb;
  var copyToArray = kotlin_kotlin.$_$.d7;
  var toList = kotlin_kotlin.$_$.ab;
  var checkIndexOverflow = kotlin_kotlin.$_$.a6;
  var get_lastIndex_0 = kotlin_kotlin.$_$.i8;
  var UIntArray__get_impl_gp5kza = kotlin_kotlin.$_$.g3;
  var take = kotlin_kotlin.$_$.pa;
  var toList_0 = kotlin_kotlin.$_$.ya;
  var UByteArray = kotlin_kotlin.$_$.sj;
  var toList_1 = kotlin_kotlin.$_$.za;
  var UByteArray__iterator_impl_509y1p = kotlin_kotlin.$_$.x2;
  var toUByteArray = kotlin_kotlin.$_$.lb;
  var UInt__toString_impl_dbgl21 = kotlin_kotlin.$_$.d3;
  var _UIntArray___init__impl__ghjpc6_0 = kotlin_kotlin.$_$.e3;
  var uintCompare = kotlin_kotlin.$_$.wk;
  var UIntArray__set_impl_7f2zu2 = kotlin_kotlin.$_$.k3;
  var slice = kotlin_kotlin.$_$.ba;
  var uintDivide = kotlin_kotlin.$_$.xk;
  var uintRemainder = kotlin_kotlin.$_$.yk;
  var ulongDivide = kotlin_kotlin.$_$.al;
  var ulongCompare = kotlin_kotlin.$_$.zk;
  var minOf = kotlin_kotlin.$_$.yb;
  var toString_0 = kotlin_kotlin.$_$.li;
  var isCharSequence = kotlin_kotlin.$_$.be;
  var reversed_0 = kotlin_kotlin.$_$.uh;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var joinToString = kotlin_kotlin.$_$.f8;
  var reversed_1 = kotlin_kotlin.$_$.u9;
  var drop = kotlin_kotlin.$_$.h7;
  var dropLast = kotlin_kotlin.$_$.g7;
  var NotImplementedError = kotlin_kotlin.$_$.lj;
  var copyOfRange_0 = kotlin_kotlin.$_$.s6;
  var contentEquals_0 = kotlin_kotlin.$_$.l6;
  var ULongArray__hashCode_impl_aze4wa = kotlin_kotlin.$_$.u3;
  var ULongArray__isEmpty_impl_c3yngu = kotlin_kotlin.$_$.v3;
  var longArrayOf = kotlin_kotlin.$_$.me;
  var longArray = kotlin_kotlin.$_$.ne;
  var arrayCopy = kotlin_kotlin.$_$.w5;
  var toULongArray = kotlin_kotlin.$_$.nb;
  var slice_0 = kotlin_kotlin.$_$.ca;
  var _ULongArray___init__impl__twm1l3_0 = kotlin_kotlin.$_$.r3;
  var ulongRemainder = kotlin_kotlin.$_$.bl;
  var get_indices = kotlin_kotlin.$_$.v7;
  var toString_1 = kotlin_kotlin.$_$.ni;
  var _UByteArray___get_size__impl__h6pkdv = kotlin_kotlin.$_$.z2;
  var _UByteArray___init__impl__ip4y9n_0 = kotlin_kotlin.$_$.v2;
  var _UByteArray___get_storage__impl__d4kctt = kotlin_kotlin.$_$.a3;
  var primitiveArrayConcat = kotlin_kotlin.$_$.e;
  var UByteArray__get_impl_t5f3hv = kotlin_kotlin.$_$.w2;
  var get_lastIndex_1 = kotlin_kotlin.$_$.j8;
  var take_0 = kotlin_kotlin.$_$.oa;
  var reversedArray = kotlin_kotlin.$_$.s9;
  var toString_2 = kotlin_kotlin.$_$.m2;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.i2;
  var Char__minus_impl_a2frrh_0 = kotlin_kotlin.$_$.j2;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.l2;
  //endregion
  //region block: pre-declaration
  function parseString$default(string, base, $super) {
    base = base === VOID ? 10 : base;
    return $super === VOID ? this.parseString_rj8x8i_k$(string, base) : $super.parseString_rj8x8i_k$.call(this, string, base);
  }
  function tryFromFloat$default(float, exactRequired, $super) {
    exactRequired = exactRequired === VOID ? false : exactRequired;
    return $super === VOID ? this.tryFromFloat_izmgak_k$(float, exactRequired) : $super.tryFromFloat_izmgak_k$.call(this, float, exactRequired);
  }
  function tryFromDouble$default(double, exactRequired, $super) {
    exactRequired = exactRequired === VOID ? false : exactRequired;
    return $super === VOID ? this.tryFromDouble_r3v8np_k$(double, exactRequired) : $super.tryFromDouble_r3v8np_k$.call(this, double, exactRequired);
  }
  setMetadataFor(Creator, 'Creator', interfaceMeta);
  setMetadataFor(Util, 'Util', interfaceMeta);
  function get_isNegative() {
    return this.signum_exb08b_k$() < 0;
  }
  function get_isPositive() {
    return this.signum_exb08b_k$() > 0;
  }
  setMetadataFor(BigNumber, 'BigNumber', interfaceMeta);
  function plus_0(other) {
    return this.getInstance_rhh4hh_k$().add_vp5qlp_k$(other);
  }
  function minus(other) {
    return this.getInstance_rhh4hh_k$().subtract_tgddne_k$(other);
  }
  function times(other) {
    return this.getInstance_rhh4hh_k$().multiply_t4mx56_k$(other);
  }
  function div(other) {
    return this.getInstance_rhh4hh_k$().divide_gsrehh_k$(other);
  }
  function rem(other) {
    return this.getInstance_rhh4hh_k$().remainder_xdfn55_k$(other);
  }
  function plus_1(int) {
    return this.getInstance_rhh4hh_k$().add_vp5qlp_k$(this.getCreator_y5p0ja_k$().fromInt_wjro43_k$(int));
  }
  function plus_2(long) {
    return this.getInstance_rhh4hh_k$().add_vp5qlp_k$(this.getCreator_y5p0ja_k$().fromLong_rbvu5k_k$(long));
  }
  function plus_3(short) {
    return this.getInstance_rhh4hh_k$().add_vp5qlp_k$(this.getCreator_y5p0ja_k$().fromShort_qmrdxi_k$(short));
  }
  function plus_4(byte) {
    return this.getInstance_rhh4hh_k$().add_vp5qlp_k$(this.getCreator_y5p0ja_k$().fromByte_i1k4na_k$(byte));
  }
  function times_0(int) {
    return this.getInstance_rhh4hh_k$().multiply_t4mx56_k$(this.getCreator_y5p0ja_k$().fromInt_wjro43_k$(int));
  }
  function times_1(long) {
    return this.getInstance_rhh4hh_k$().multiply_t4mx56_k$(this.getCreator_y5p0ja_k$().fromLong_rbvu5k_k$(long));
  }
  function times_2(short) {
    return this.getInstance_rhh4hh_k$().multiply_t4mx56_k$(this.getCreator_y5p0ja_k$().fromShort_qmrdxi_k$(short));
  }
  function times_3(byte) {
    return this.getInstance_rhh4hh_k$().multiply_t4mx56_k$(this.getCreator_y5p0ja_k$().fromByte_i1k4na_k$(byte));
  }
  function minus_0(int) {
    return this.getInstance_rhh4hh_k$().subtract_tgddne_k$(this.getCreator_y5p0ja_k$().fromInt_wjro43_k$(int));
  }
  function minus_1(long) {
    return this.getInstance_rhh4hh_k$().subtract_tgddne_k$(this.getCreator_y5p0ja_k$().fromLong_rbvu5k_k$(long));
  }
  function minus_2(short) {
    return this.getInstance_rhh4hh_k$().subtract_tgddne_k$(this.getCreator_y5p0ja_k$().fromShort_qmrdxi_k$(short));
  }
  function minus_3(byte) {
    return this.getInstance_rhh4hh_k$().subtract_tgddne_k$(this.getCreator_y5p0ja_k$().fromByte_i1k4na_k$(byte));
  }
  function div_0(int) {
    return this.getInstance_rhh4hh_k$().divide_gsrehh_k$(this.getCreator_y5p0ja_k$().fromInt_wjro43_k$(int));
  }
  function div_1(long) {
    return this.getInstance_rhh4hh_k$().divide_gsrehh_k$(this.getCreator_y5p0ja_k$().fromLong_rbvu5k_k$(long));
  }
  function div_2(short) {
    return this.getInstance_rhh4hh_k$().divide_gsrehh_k$(this.getCreator_y5p0ja_k$().fromShort_qmrdxi_k$(short));
  }
  function div_3(byte) {
    return this.getInstance_rhh4hh_k$().divide_gsrehh_k$(this.getCreator_y5p0ja_k$().fromByte_i1k4na_k$(byte));
  }
  function rem_0(int) {
    return this.getInstance_rhh4hh_k$().remainder_xdfn55_k$(this.getCreator_y5p0ja_k$().fromInt_wjro43_k$(int));
  }
  function rem_1(long) {
    return this.getInstance_rhh4hh_k$().remainder_xdfn55_k$(this.getCreator_y5p0ja_k$().fromLong_rbvu5k_k$(long));
  }
  function rem_2(short) {
    return this.getInstance_rhh4hh_k$().remainder_xdfn55_k$(this.getCreator_y5p0ja_k$().fromShort_qmrdxi_k$(short));
  }
  function rem_3(byte) {
    return this.getInstance_rhh4hh_k$().remainder_xdfn55_k$(this.getCreator_y5p0ja_k$().fromByte_i1k4na_k$(byte));
  }
  setMetadataFor(CommonBigNumberOperations, 'CommonBigNumberOperations', interfaceMeta);
  function intValue$default(exactRequired, $super) {
    exactRequired = exactRequired === VOID ? true : exactRequired;
    return $super === VOID ? this.intValue_7o5gpp_k$(exactRequired) : $super.intValue_7o5gpp_k$.call(this, exactRequired);
  }
  function longValue$default(exactRequired, $super) {
    exactRequired = exactRequired === VOID ? true : exactRequired;
    return $super === VOID ? this.longValue_919ii8_k$(exactRequired) : $super.longValue_919ii8_k$.call(this, exactRequired);
  }
  function byteValue$default(exactRequired, $super) {
    exactRequired = exactRequired === VOID ? true : exactRequired;
    return $super === VOID ? this.byteValue_eif72c_k$(exactRequired) : $super.byteValue_eif72c_k$.call(this, exactRequired);
  }
  function shortValue$default(exactRequired, $super) {
    exactRequired = exactRequired === VOID ? true : exactRequired;
    return $super === VOID ? this.shortValue_w04c9c_k$(exactRequired) : $super.shortValue_w04c9c_k$.call(this, exactRequired);
  }
  function uintValue$default(exactRequired, $super) {
    exactRequired = exactRequired === VOID ? true : exactRequired;
    return $super === VOID ? this.uintValue_8037ik_k$(exactRequired) : $super.uintValue_8037ik_k$.call(this, exactRequired).data_1;
  }
  function ulongValue$default(exactRequired, $super) {
    exactRequired = exactRequired === VOID ? true : exactRequired;
    return $super === VOID ? this.ulongValue_759jq8_k$(exactRequired) : $super.ulongValue_759jq8_k$.call(this, exactRequired).data_1;
  }
  function ubyteValue$default(exactRequired, $super) {
    exactRequired = exactRequired === VOID ? true : exactRequired;
    return $super === VOID ? this.ubyteValue_v7eqw0_k$(exactRequired) : $super.ubyteValue_v7eqw0_k$.call(this, exactRequired).data_1;
  }
  function ushortValue$default(exactRequired, $super) {
    exactRequired = exactRequired === VOID ? true : exactRequired;
    return $super === VOID ? this.ushortValue_epxg36_k$(exactRequired) : $super.ushortValue_epxg36_k$.call(this, exactRequired).data_1;
  }
  function floatValue$default(exactRequired, $super) {
    exactRequired = exactRequired === VOID ? true : exactRequired;
    return $super === VOID ? this.floatValue_cm9a28_k$(exactRequired) : $super.floatValue_cm9a28_k$.call(this, exactRequired);
  }
  function doubleValue$default(exactRequired, $super) {
    exactRequired = exactRequired === VOID ? true : exactRequired;
    return $super === VOID ? this.doubleValue_uyt9c5_k$(exactRequired) : $super.doubleValue_uyt9c5_k$.call(this, exactRequired);
  }
  setMetadataFor(NarrowingOperations, 'NarrowingOperations', interfaceMeta);
  setMetadataFor(ByteArraySerializable, 'ByteArraySerializable', interfaceMeta);
  setMetadataFor(BitwiseCapable, 'BitwiseCapable', interfaceMeta);
  setMetadataFor(ByteArrayDeserializable, 'ByteArrayDeserializable', interfaceMeta);
  setMetadataFor(Endianness, 'Endianness', classMeta, Enum);
  setMetadataFor(ModularQuotientAndRemainder, 'ModularQuotientAndRemainder', classMeta);
  setMetadataFor(SignificantDecider, 'SignificantDecider', classMeta, Enum);
  setMetadataFor(Companion, 'Companion', objectMeta, VOID, [Creator]);
  setMetadataFor(ScaleOps, 'ScaleOps', classMeta, Enum);
  setMetadataFor(BigDecimal, 'BigDecimal', classMeta, VOID, [BigNumber, CommonBigNumberOperations, NarrowingOperations, Comparable]);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  setMetadataFor(DecimalMode, 'DecimalMode', classMeta, VOID, VOID, DecimalMode);
  setMetadataFor(RoundingMode, 'RoundingMode', classMeta, Enum);
  setMetadataFor(Companion_1, 'Companion', objectMeta, VOID, [Creator, Util, ByteArrayDeserializable]);
  setMetadataFor(QuotientAndRemainder, 'QuotientAndRemainder', classMeta);
  setMetadataFor(SqareRootAndRemainder, 'SqareRootAndRemainder', classMeta);
  setMetadataFor(BigIntegerRange, 'BigIntegerRange', classMeta, VOID, [ClosedRange, Iterable]);
  setMetadataFor(BigIntegerIterator, 'BigIntegerIterator', classMeta, VOID, [Iterator]);
  setMetadataFor(BigInteger, 'BigInteger', classMeta, VOID, [BigNumber, CommonBigNumberOperations, NarrowingOperations, BitwiseCapable, Comparable, ByteArraySerializable]);
  function toUIntArrayRepresentedAsTypedUByteArray$default(operand, endianness, $super) {
    endianness = endianness === VOID ? Endianness_BIG_getInstance() : endianness;
    return $super === VOID ? this.toUIntArrayRepresentedAsTypedUByteArray_2d6ofv_k$(operand, endianness) : $super.toUIntArrayRepresentedAsTypedUByteArray_2d6ofv_k$.call(this, new UIntArray(operand), endianness);
  }
  function toUIntArrayRepresentedAsUByteArray$default(operand, endianness, $super) {
    endianness = endianness === VOID ? Endianness_BIG_getInstance() : endianness;
    return $super === VOID ? this.toUIntArrayRepresentedAsUByteArray_rm9yxp_k$(operand, endianness) : $super.toUIntArrayRepresentedAsUByteArray_rm9yxp_k$.call(this, new UIntArray(operand), endianness).storage_1;
  }
  setMetadataFor(BigInteger32ArithmeticInterface, 'BigInteger32ArithmeticInterface', interfaceMeta);
  setMetadataFor(BigIntegerArithmetic, 'BigIntegerArithmetic', interfaceMeta);
  setMetadataFor(Sign, 'Sign', classMeta, Enum);
  setMetadataFor(Platform, 'Platform', classMeta, Enum);
  setMetadataFor(Sextuple, 'Sextuple', classMeta);
  setMetadataFor(Quadruple, 'Quadruple', classMeta);
  setMetadataFor(SignedUIntArray, 'SignedUIntArray', classMeta);
  setMetadataFor(BigInteger32Arithmetic, 'BigInteger32Arithmetic', objectMeta, VOID, [BigInteger32ArithmeticInterface]);
  setMetadataFor(SignedULongArray, 'SignedULongArray', classMeta);
  setMetadataFor(BigInteger63Arithmetic, 'BigInteger63Arithmetic', objectMeta, VOID, [BigIntegerArithmetic]);
  setMetadataFor(ModularBigInteger$Companion$creatorForModulo$1, VOID, classMeta, VOID, [Creator]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(ModularBigInteger, 'ModularBigInteger', classMeta, VOID, [BigNumber, CommonBigNumberOperations, NarrowingOperations, ByteArraySerializable]);
  setMetadataFor(RuntimePlatform, 'RuntimePlatform', objectMeta);
  //endregion
  function Creator() {
  }
  function Util() {
  }
  function BigNumber() {
  }
  function CommonBigNumberOperations() {
  }
  function NarrowingOperations() {
  }
  function ByteArraySerializable() {
  }
  function BitwiseCapable() {
  }
  function ByteArrayDeserializable() {
  }
  var Endianness_BIG_instance;
  var Endianness_LITTLE_instance;
  function values() {
    return [Endianness_BIG_getInstance(), Endianness_LITTLE_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'BIG':
        return Endianness_BIG_getInstance();
      case 'LITTLE':
        return Endianness_LITTLE_getInstance();
      default:
        Endianness_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Endianness_entriesInitialized;
  function Endianness_initEntries() {
    if (Endianness_entriesInitialized)
      return Unit_getInstance();
    Endianness_entriesInitialized = true;
    Endianness_BIG_instance = new Endianness('BIG', 0);
    Endianness_LITTLE_instance = new Endianness('LITTLE', 1);
  }
  function Endianness(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Endianness_BIG_getInstance() {
    Endianness_initEntries();
    return Endianness_BIG_instance;
  }
  function Endianness_LITTLE_getInstance() {
    Endianness_initEntries();
    return Endianness_LITTLE_instance;
  }
  function ModularQuotientAndRemainder(quotient, remainder) {
    this.quotient_1 = quotient;
    this.remainder_1 = remainder;
  }
  protoOf(ModularQuotientAndRemainder).get_quotient_ooukvo_k$ = function () {
    return this.quotient_1;
  };
  protoOf(ModularQuotientAndRemainder).get_remainder_mwecu4_k$ = function () {
    return this.remainder_1;
  };
  protoOf(ModularQuotientAndRemainder).component1_7eebsc_k$ = function () {
    return this.quotient_1;
  };
  protoOf(ModularQuotientAndRemainder).component2_7eebsb_k$ = function () {
    return this.remainder_1;
  };
  protoOf(ModularQuotientAndRemainder).copy_nm7ljp_k$ = function (quotient, remainder) {
    return new ModularQuotientAndRemainder(quotient, remainder);
  };
  protoOf(ModularQuotientAndRemainder).copy$default_pr1es0_k$ = function (quotient, remainder, $super) {
    quotient = quotient === VOID ? this.quotient_1 : quotient;
    remainder = remainder === VOID ? this.remainder_1 : remainder;
    return $super === VOID ? this.copy_nm7ljp_k$(quotient, remainder) : $super.copy_nm7ljp_k$.call(this, quotient, remainder);
  };
  protoOf(ModularQuotientAndRemainder).toString = function () {
    return 'ModularQuotientAndRemainder(quotient=' + this.quotient_1 + ', remainder=' + this.remainder_1 + ')';
  };
  protoOf(ModularQuotientAndRemainder).hashCode = function () {
    var result = hashCode(this.quotient_1);
    result = imul(result, 31) + hashCode(this.remainder_1) | 0;
    return result;
  };
  protoOf(ModularQuotientAndRemainder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ModularQuotientAndRemainder))
      return false;
    var tmp0_other_with_cast = other instanceof ModularQuotientAndRemainder ? other : THROW_CCE();
    if (!this.quotient_1.equals(tmp0_other_with_cast.quotient_1))
      return false;
    if (!this.remainder_1.equals(tmp0_other_with_cast.remainder_1))
      return false;
    return true;
  };
  var SignificantDecider_FIVE_instance;
  var SignificantDecider_LESS_THAN_FIVE_instance;
  var SignificantDecider_MORE_THAN_FIVE_instance;
  function values_0() {
    return [SignificantDecider_FIVE_getInstance(), SignificantDecider_LESS_THAN_FIVE_getInstance(), SignificantDecider_MORE_THAN_FIVE_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'FIVE':
        return SignificantDecider_FIVE_getInstance();
      case 'LESS_THAN_FIVE':
        return SignificantDecider_LESS_THAN_FIVE_getInstance();
      case 'MORE_THAN_FIVE':
        return SignificantDecider_MORE_THAN_FIVE_getInstance();
      default:
        SignificantDecider_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var SignificantDecider_entriesInitialized;
  function SignificantDecider_initEntries() {
    if (SignificantDecider_entriesInitialized)
      return Unit_getInstance();
    SignificantDecider_entriesInitialized = true;
    SignificantDecider_FIVE_instance = new SignificantDecider('FIVE', 0);
    SignificantDecider_LESS_THAN_FIVE_instance = new SignificantDecider('LESS_THAN_FIVE', 1);
    SignificantDecider_MORE_THAN_FIVE_instance = new SignificantDecider('MORE_THAN_FIVE', 2);
  }
  function _get_double10pow__rixyp5($this) {
    return $this.double10pow_1;
  }
  function _get_maximumDouble__boa8dc($this) {
    return $this.maximumDouble_1;
  }
  function _get_leastSignificantDouble__ujhrm8($this) {
    return $this.leastSignificantDouble_1;
  }
  function _get_float10pow__736wuq($this) {
    return $this.float10pow_1;
  }
  function _get_maximumFloat__19w33j($this) {
    return $this.maximumFloat_1;
  }
  function _get_leastSignificantFloat__6sbtzz($this) {
    return $this.leastSignificantFloat_1;
  }
  function roundOrDont($this, significand, exponent, decimalMode) {
    var tmp;
    if (decimalMode.get_isPrecisionUnlimited_ayf8d2_k$()) {
      tmp = new BigDecimal(significand, exponent);
    } else {
      tmp = roundSignificand($this, significand, exponent, decimalMode);
    }
    return tmp;
  }
  function SignificantDecider(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function determineDecider($this, discarded) {
    var tmp = Companion_getInstance_6().get_TEN_18jk30_k$();
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0 = discarded.numberOfDecimalDigits_wouqvd_k$().minus_mfbszm_k$(toLong(1));
    var scale = tmp.pow_3xn4h6_k$(tmp$ret$0);
    var divrem = discarded.divrem_kdohd1_k$(scale);
    var significant = divrem.get_quotient_ooukvo_k$().abs_22cy_k$().intValue_7o5gpp_k$(true);
    var rest = divrem.get_remainder_mwecu4_k$().abs_22cy_k$();
    var tmp_0;
    if (significant === 5) {
      var tmp_1;
      if (rest.equals(Companion_getInstance_6().get_ZERO_wodlgx_k$())) {
        tmp_1 = SignificantDecider_FIVE_getInstance();
      } else {
        tmp_1 = SignificantDecider_MORE_THAN_FIVE_getInstance();
      }
      tmp_0 = tmp_1;
    } else if (significant > 5) {
      tmp_0 = SignificantDecider_MORE_THAN_FIVE_getInstance();
    } else if (significant < 5) {
      tmp_0 = SignificantDecider_LESS_THAN_FIVE_getInstance();
    } else {
      throw RuntimeException_init_$Create$("Couldn't determine decider");
    }
    return tmp_0;
  }
  function roundDiscarded($this, significand, discarded, decimalMode) {
    var toDiscard = significand.numberOfDecimalDigits_wouqvd_k$().minus_mfbszm_k$(decimalMode.get_decimalPrecision_1lnz0q_k$());
    var tmp;
    if (toDiscard.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
      var additionallyDiscarded = significand.divrem_kdohd1_k$(Companion_getInstance_6().get_TEN_18jk30_k$().pow_3xn4h6_k$(toDiscard));
      tmp = new Pair(additionallyDiscarded.get_quotient_ooukvo_k$(), additionallyDiscarded.get_remainder_mwecu4_k$());
    } else {
      tmp = new Pair(significand, discarded);
    }
    var tmp0_container = tmp;
    var result = tmp0_container.component1_7eebsc_k$();
    var remainder = tmp0_container.component2_7eebsb_k$();
    var tmp_0;
    if (significand.equals(Companion_getInstance_6().get_ZERO_wodlgx_k$())) {
      tmp_0 = discarded.get_sign_woubd2_k$();
    } else {
      tmp_0 = significand.get_sign_woubd2_k$();
    }
    var sign = tmp_0;
    if (!decimalMode.get_roundingMode_uxzxk0_k$().equals(RoundingMode_AWAY_FROM_ZERO_getInstance()) ? !decimalMode.get_roundingMode_uxzxk0_k$().equals(RoundingMode_TOWARDS_ZERO_getInstance()) : false) {
      if (remainder.isZero_jihrta_k$()) {
        return result;
      }
    } else {
      if (remainder.isZero_jihrta_k$() ? discarded.isZero_jihrta_k$() : false) {
        return result;
      }
    }
    var decider = determineDecider($this, remainder);
    switch (decimalMode.get_roundingMode_uxzxk0_k$().get_ordinal_ip24qg_k$()) {
      case 2:
        if (sign.equals(Sign_POSITIVE_getInstance())) {
          result = result.inc_28ke_k$();
        } else {
          result = result.dec_24n6_k$();
        }

        break;
      case 3:
        break;
      case 1:
        if (sign.equals(Sign_POSITIVE_getInstance())) {
          result = result.inc_28ke_k$();
        }

        break;
      case 0:
        if (!sign.equals(Sign_POSITIVE_getInstance())) {
          result = result.dec_24n6_k$();
        }

        break;
      case 5:
        switch (sign.get_ordinal_ip24qg_k$()) {
          case 0:
            if (!decider.equals(SignificantDecider_LESS_THAN_FIVE_getInstance())) {
              result = result.inc_28ke_k$();
            }

            break;
          case 1:
            if (!decider.equals(SignificantDecider_LESS_THAN_FIVE_getInstance())) {
              result = result.dec_24n6_k$();
            }

            break;
          case 2:
            break;
        }

        break;
      case 6:
        switch (sign.get_ordinal_ip24qg_k$()) {
          case 0:
            if (decider.equals(SignificantDecider_MORE_THAN_FIVE_getInstance())) {
              result = result.inc_28ke_k$();
            }

            break;
          case 1:
            if (decider.equals(SignificantDecider_MORE_THAN_FIVE_getInstance())) {
              result = result.dec_24n6_k$();
            }

            break;
          case 2:
            break;
        }

        break;
      case 7:
        switch (sign.get_ordinal_ip24qg_k$()) {
          case 0:
            if (!decider.equals(SignificantDecider_LESS_THAN_FIVE_getInstance())) {
              result = result.inc_28ke_k$();
            }

            break;
          case 1:
            if (decider.equals(SignificantDecider_MORE_THAN_FIVE_getInstance())) {
              result = result.dec_24n6_k$();
            }

            break;
          case 2:
            break;
        }

        break;
      case 8:
        switch (sign.get_ordinal_ip24qg_k$()) {
          case 0:
            if (decider.equals(SignificantDecider_MORE_THAN_FIVE_getInstance())) {
              result = result.inc_28ke_k$();
            }

            break;
          case 1:
            if (!decider.equals(SignificantDecider_LESS_THAN_FIVE_getInstance())) {
              result = result.dec_24n6_k$();
            }

            break;
          case 2:
            break;
        }

        break;
      case 9:
        if (decider.equals(SignificantDecider_FIVE_getInstance())) {
          if (significand.rem_agrhqa_k$(2).equals(Companion_getInstance_6().get_ONE_18jnkz_k$())) {
            switch (sign.get_ordinal_ip24qg_k$()) {
              case 0:
                if (!decider.equals(SignificantDecider_LESS_THAN_FIVE_getInstance())) {
                  result = result.inc_28ke_k$();
                }

                break;
              case 1:
                if (!decider.equals(SignificantDecider_LESS_THAN_FIVE_getInstance())) {
                  result = result.dec_24n6_k$();
                }

                break;
              case 2:
                break;
            }
          } else {
            switch (sign.get_ordinal_ip24qg_k$()) {
              case 0:
                if (decider.equals(SignificantDecider_MORE_THAN_FIVE_getInstance())) {
                  result = result.inc_28ke_k$();
                }

                break;
              case 1:
                if (!decider.equals(SignificantDecider_LESS_THAN_FIVE_getInstance())) {
                  result = result.dec_24n6_k$();
                }

                break;
              case 2:
                break;
            }
          }
        } else if (decider.equals(SignificantDecider_MORE_THAN_FIVE_getInstance())) {
          if (sign.equals(Sign_POSITIVE_getInstance())) {
            result = result.inc_28ke_k$();
          }
          if (sign.equals(Sign_NEGATIVE_getInstance())) {
            result = result.dec_24n6_k$();
          }
        }

        break;
      case 10:
        if (decider.equals(SignificantDecider_FIVE_getInstance())) {
          if (significand.rem_agrhqa_k$(2).equals(Companion_getInstance_6().get_ZERO_wodlgx_k$())) {
            switch (sign.get_ordinal_ip24qg_k$()) {
              case 0:
                if (!decider.equals(SignificantDecider_LESS_THAN_FIVE_getInstance())) {
                  result = result.inc_28ke_k$();
                }

                break;
              case 1:
                if (!decider.equals(SignificantDecider_LESS_THAN_FIVE_getInstance())) {
                  result = result.dec_24n6_k$();
                }

                break;
              case 2:
                break;
            }
          } else {
            switch (sign.get_ordinal_ip24qg_k$()) {
              case 0:
                if (decider.equals(SignificantDecider_MORE_THAN_FIVE_getInstance())) {
                  result = result.inc_28ke_k$();
                }

                break;
              case 1:
                if (!decider.equals(SignificantDecider_LESS_THAN_FIVE_getInstance())) {
                  result = result.dec_24n6_k$();
                }

                break;
              case 2:
                break;
            }
          }
        } else if (decider.equals(SignificantDecider_MORE_THAN_FIVE_getInstance())) {
          if (sign.equals(Sign_POSITIVE_getInstance())) {
            result = result.inc_28ke_k$();
          }
          if (sign.equals(Sign_NEGATIVE_getInstance())) {
            result = result.dec_24n6_k$();
          }
        }

        break;
      case 4:
        throw ArithmeticException_init_$Create$('Non-terminating result of division operation. Specify decimalPrecision');
    }
    return result;
  }
  function roundSignificand($this, significand, exponent, decimalMode) {
    if (significand.equals(Companion_getInstance_6().get_ZERO_wodlgx_k$())) {
      return new BigDecimal(Companion_getInstance_6().get_ZERO_wodlgx_k$(), exponent, decimalMode);
    }
    var significandDigits = significand.numberOfDecimalDigits_wouqvd_k$();
    var tmp;
    if (decimalMode.get_usingScale_nxygf_k$()) {
      tmp = decimalMode.get_decimalPrecision_1lnz0q_k$().plus_r93sks_k$(decimalMode.get_scale_iyf28x_k$());
    } else {
      tmp = decimalMode.get_decimalPrecision_1lnz0q_k$();
    }
    var desiredPrecision = tmp;
    var tmp_0;
    if (desiredPrecision.compareTo_9jj042_k$(significandDigits) > 0) {
      var extendedSignificand = significand.times_wzgsx4_k$(Companion_getInstance_6().get_TEN_18jk30_k$().pow_3xn4h6_k$(desiredPrecision.minus_mfbszm_k$(significandDigits)));
      tmp_0 = new BigDecimal(extendedSignificand, exponent, decimalMode);
    } else if (desiredPrecision.compareTo_9jj042_k$(significandDigits) < 0) {
      var divRem = significand.divrem_kdohd1_k$(Companion_getInstance_6().get_TEN_18jk30_k$().pow_3xn4h6_k$(significandDigits.minus_mfbszm_k$(desiredPrecision)));
      var resolvedRemainder = divRem.get_remainder_mwecu4_k$();
      if (divRem.get_remainder_mwecu4_k$().equals(Companion_getInstance_6().get_ZERO_wodlgx_k$())) {
        return new BigDecimal(divRem.get_quotient_ooukvo_k$(), exponent, decimalMode);
      }
      var tmp_1;
      if (significand.numberOfDecimalDigits_wouqvd_k$().equals(divRem.get_quotient_ooukvo_k$().numberOfDecimalDigits_wouqvd_k$().plus_r93sks_k$(divRem.get_remainder_mwecu4_k$().numberOfDecimalDigits_wouqvd_k$()))) {
        var newSignificand = roundDiscarded($this, divRem.get_quotient_ooukvo_k$(), resolvedRemainder, decimalMode);
        var exponentModifier = newSignificand.numberOfDecimalDigits_wouqvd_k$().minus_mfbszm_k$(divRem.get_quotient_ooukvo_k$().numberOfDecimalDigits_wouqvd_k$());
        tmp_1 = new BigDecimal(newSignificand, exponent.plus_r93sks_k$(exponentModifier), decimalMode);
      } else {
        tmp_1 = $this.handleZeroRounding_69s444_k$(divRem.get_quotient_ooukvo_k$(), exponent, decimalMode);
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = new BigDecimal(significand, exponent, decimalMode);
    }
    return tmp_0;
  }
  function applyScale($this, significand, exponent, decimalMode) {
    if (!decimalMode.get_usingScale_nxygf_k$()) {
      return new BigDecimal(significand, exponent, decimalMode);
    }
    var tmp;
    if (exponent.compareTo_9jj042_k$(new Long(0, 0)) >= 0) {
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$0 = exponent.plus_r93sks_k$(decimalMode.get_scale_iyf28x_k$()).plus_r93sks_k$(toLong(1));
      tmp = new DecimalMode(tmp$ret$0, decimalMode.get_roundingMode_uxzxk0_k$());
    } else if (exponent.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$1 = decimalMode.get_scale_iyf28x_k$().plus_r93sks_k$(toLong(1));
      tmp = new DecimalMode(tmp$ret$1, decimalMode.get_roundingMode_uxzxk0_k$());
    } else {
      throw RuntimeException_init_$Create$('Unexpected state');
    }
    var workMode = tmp;
    var tmp_0;
    if (exponent.compareTo_9jj042_k$(new Long(0, 0)) >= 0) {
      tmp_0 = roundSignificand($this, significand, exponent, workMode);
    } else {
      var temp = (new BigDecimal(significand, exponent)).plus_gv6ohq_k$(significand.signum_exb08b_k$());
      tmp_0 = roundSignificand($this, temp.significand_1, temp.exponent_1, workMode).minus_vfk7ag_k$(significand.signum_exb08b_k$());
    }
    return tmp_0;
  }
  function resolveDecimalMode($this, firstDecimalMode, secondDecimalMode, suppliedDecimalMode) {
    var tmp;
    if (!(suppliedDecimalMode == null)) {
      tmp = suppliedDecimalMode;
    } else {
      if (firstDecimalMode == null ? secondDecimalMode == null : false) {
        return new DecimalMode();
      }
      if (firstDecimalMode == null ? !(secondDecimalMode == null) : false) {
        return secondDecimalMode;
      }
      if (secondDecimalMode == null ? !(firstDecimalMode == null) : false) {
        return firstDecimalMode;
      }
      if (!ensureNotNull(firstDecimalMode).get_roundingMode_uxzxk0_k$().equals(ensureNotNull(secondDecimalMode).get_roundingMode_uxzxk0_k$())) {
        throw ArithmeticException_init_$Create$('Different rounding modes! This: ' + firstDecimalMode.get_roundingMode_uxzxk0_k$() + ' Other: ' + secondDecimalMode.get_roundingMode_uxzxk0_k$());
      }
      var tmp_0;
      if (firstDecimalMode.get_decimalPrecision_1lnz0q_k$().compareTo_9jj042_k$(secondDecimalMode.get_decimalPrecision_1lnz0q_k$()) >= 0) {
        tmp_0 = firstDecimalMode;
      } else {
        tmp_0 = secondDecimalMode;
      }
      var unifiedDecimalMode = tmp_0;
      tmp = unifiedDecimalMode;
    }
    return tmp;
  }
  function SignificantDecider_FIVE_getInstance() {
    SignificantDecider_initEntries();
    return SignificantDecider_FIVE_instance;
  }
  function SignificantDecider_LESS_THAN_FIVE_getInstance() {
    SignificantDecider_initEntries();
    return SignificantDecider_LESS_THAN_FIVE_instance;
  }
  function SignificantDecider_MORE_THAN_FIVE_getInstance() {
    SignificantDecider_initEntries();
    return SignificantDecider_MORE_THAN_FIVE_instance;
  }
  var ScaleOps_Max_instance;
  var ScaleOps_Min_instance;
  var ScaleOps_Add_instance;
  function values_1() {
    return [ScaleOps_Max_getInstance(), ScaleOps_Min_getInstance(), ScaleOps_Add_getInstance()];
  }
  function valueOf_1(value) {
    switch (value) {
      case 'Max':
        return ScaleOps_Max_getInstance();
      case 'Min':
        return ScaleOps_Min_getInstance();
      case 'Add':
        return ScaleOps_Add_getInstance();
      default:
        ScaleOps_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var ScaleOps_entriesInitialized;
  function ScaleOps_initEntries() {
    if (ScaleOps_entriesInitialized)
      return Unit_getInstance();
    ScaleOps_entriesInitialized = true;
    ScaleOps_Max_instance = new ScaleOps('Max', 0);
    ScaleOps_Min_instance = new ScaleOps('Min', 1);
    ScaleOps_Add_instance = new ScaleOps('Add', 2);
  }
  function Companion() {
    Companion_instance = this;
    this.ZERO_1 = new BigDecimal(Companion_getInstance_6().get_ZERO_wodlgx_k$());
    this.ONE_1 = new BigDecimal(Companion_getInstance_6().get_ONE_18jnkz_k$());
    this.TWO_1 = new BigDecimal(Companion_getInstance_6().get_TWO_18jjnh_k$());
    this.TEN_1 = new BigDecimal(Companion_getInstance_6().get_TEN_18jk30_k$(), new Long(1, 0));
    this.useToStringExpanded_1 = false;
    var tmp = this;
    // Inline function 'kotlin.doubleArrayOf' call
    tmp.double10pow_1 = new Float64Array([1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, 1.0E7, 1.0E8, 1.0E9, 1.0E10, 1.0E11, 1.0E12, 1.0E13, 1.0E14, 1.0E15, 1.0E16, 1.0E17, 1.0E18, 1.0E19, 1.0E20, 1.0E21, 1.0E22]);
    this.maximumDouble_1 = this.fromDouble$default_4guygt_k$(DoubleCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$());
    this.leastSignificantDouble_1 = this.fromDouble$default_4guygt_k$(DoubleCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$());
    var tmp_0 = this;
    // Inline function 'kotlin.floatArrayOf' call
    tmp_0.float10pow_1 = new Float32Array([1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, 1.0E7, 1.0E8, 1.0E9, 1.0E10]);
    this.maximumFloat_1 = this.fromFloat$default_ur40zs_k$(FloatCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$());
    this.leastSignificantFloat_1 = this.fromFloat$default_ur40zs_k$(FloatCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$());
  }
  protoOf(Companion).get_ZERO_wodlgx_k$ = function () {
    return this.ZERO_1;
  };
  protoOf(Companion).get_ONE_18jnkz_k$ = function () {
    return this.ONE_1;
  };
  protoOf(Companion).get_TWO_18jjnh_k$ = function () {
    return this.TWO_1;
  };
  protoOf(Companion).get_TEN_18jk30_k$ = function () {
    return this.TEN_1;
  };
  protoOf(Companion).set_useToStringExpanded_1smlnq_k$ = function (_set____db54di) {
    this.useToStringExpanded_1 = _set____db54di;
  };
  protoOf(Companion).get_useToStringExpanded_n0i265_k$ = function () {
    return this.useToStringExpanded_1;
  };
  protoOf(Companion).handleZeroRounding_69s444_k$ = function (significand, exponent, decimalMode) {
    var tmp;
    if (significand.get_sign_woubd2_k$().equals(Sign_POSITIVE_getInstance())) {
      var tmp_0;
      switch (decimalMode.get_roundingMode_uxzxk0_k$().get_ordinal_ip24qg_k$()) {
        case 1:
        case 2:
          var increasedSignificand = significand.inc_28ke_k$();
          var exponentModifier = increasedSignificand.numberOfDecimalDigits_wouqvd_k$().minus_mfbszm_k$(significand.numberOfDecimalDigits_wouqvd_k$());
          tmp_0 = new BigDecimal(increasedSignificand, exponent.plus_r93sks_k$(exponentModifier), decimalMode);
          break;
        default:
          tmp_0 = new BigDecimal(significand, exponent, decimalMode);
          break;
      }
      tmp = tmp_0;
    } else if (significand.get_sign_woubd2_k$().equals(Sign_NEGATIVE_getInstance())) {
      var tmp_1;
      switch (decimalMode.get_roundingMode_uxzxk0_k$().get_ordinal_ip24qg_k$()) {
        case 0:
        case 2:
          var increasedSignificand_0 = significand.dec_24n6_k$();
          var exponentModifier_0 = increasedSignificand_0.numberOfDecimalDigits_wouqvd_k$().minus_mfbszm_k$(significand.numberOfDecimalDigits_wouqvd_k$());
          tmp_1 = new BigDecimal(increasedSignificand_0, exponent.plus_r93sks_k$(exponentModifier_0), decimalMode);
          break;
        default:
          tmp_1 = new BigDecimal(significand, exponent, decimalMode);
          break;
      }
      tmp = tmp_1;
    } else {
      tmp = new BigDecimal(significand, exponent, decimalMode);
    }
    return tmp;
  };
  protoOf(Companion).fromBigDecimal_wbnk7o_k$ = function (bigDecimal, decimalMode) {
    return (new BigDecimal(bigDecimal.significand_1, bigDecimal.exponent_1, decimalMode)).roundSignificand_epby2m_k$(decimalMode);
  };
  protoOf(Companion).fromBigDecimal$default_e7bfk7_k$ = function (bigDecimal, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromBigDecimal_wbnk7o_k$(bigDecimal, decimalMode) : $super.fromBigDecimal_wbnk7o_k$.call(this, bigDecimal, decimalMode);
  };
  protoOf(Companion).fromBigInteger_chn2b5_k$ = function (bigInteger, decimalMode) {
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0 = bigInteger.numberOfDecimalDigits_wouqvd_k$().minus_mfbszm_k$(toLong(1));
    return (new BigDecimal(bigInteger, tmp$ret$0, decimalMode)).roundSignificand_epby2m_k$(decimalMode);
  };
  protoOf(Companion).fromBigInteger$default_tjxsts_k$ = function (bigInteger, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromBigInteger_chn2b5_k$(bigInteger, decimalMode) : $super.fromBigInteger_chn2b5_k$.call(this, bigInteger, decimalMode);
  };
  protoOf(Companion).fromLong_lu5zyj_k$ = function (long, decimalMode) {
    var bigint = Companion_getInstance_6().fromLong_rbvu5k_k$(long);
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0 = bigint.numberOfDecimalDigits_wouqvd_k$().minus_mfbszm_k$(toLong(1));
    return (new BigDecimal(bigint, tmp$ret$0, decimalMode)).roundSignificand_epby2m_k$(decimalMode);
  };
  protoOf(Companion).fromLong$default_9v6fei_k$ = function (long, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromLong_lu5zyj_k$(long, decimalMode) : $super.fromLong_lu5zyj_k$.call(this, long, decimalMode);
  };
  protoOf(Companion).fromULong_qdg26j_k$ = function (uLong, decimalMode) {
    var bigint = Companion_getInstance_6().fromULong_bnyibi_k$(uLong);
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0 = bigint.numberOfDecimalDigits_wouqvd_k$().minus_mfbszm_k$(toLong(1));
    return (new BigDecimal(bigint, tmp$ret$0, decimalMode)).roundSignificand_epby2m_k$(decimalMode);
  };
  protoOf(Companion).fromULong$default_dtal8w_k$ = function (uLong, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromULong_qdg26j_k$(uLong, decimalMode) : $super.fromULong_qdg26j_k$.call(this, new ULong(uLong), decimalMode);
  };
  protoOf(Companion).fromInt_74zh40_k$ = function (int, decimalMode) {
    var bigint = Companion_getInstance_6().fromInt_wjro43_k$(int);
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0 = bigint.numberOfDecimalDigits_wouqvd_k$().minus_mfbszm_k$(toLong(1));
    return (new BigDecimal(bigint, tmp$ret$0, decimalMode)).roundSignificand_epby2m_k$(decimalMode);
  };
  protoOf(Companion).fromInt$default_xm2ij_k$ = function (int, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromInt_74zh40_k$(int, decimalMode) : $super.fromInt_74zh40_k$.call(this, int, decimalMode);
  };
  protoOf(Companion).fromUInt_wti0tq_k$ = function (uInt, decimalMode) {
    var bigint = Companion_getInstance_6().fromUInt_gep9wf_k$(uInt);
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0 = bigint.numberOfDecimalDigits_wouqvd_k$().minus_mfbszm_k$(toLong(1));
    return (new BigDecimal(bigint, tmp$ret$0, decimalMode)).roundSignificand_epby2m_k$(decimalMode);
  };
  protoOf(Companion).fromUInt$default_3m5jdf_k$ = function (uInt, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromUInt_wti0tq_k$(uInt, decimalMode) : $super.fromUInt_wti0tq_k$.call(this, new UInt(uInt), decimalMode);
  };
  protoOf(Companion).fromUShort_5hlwvb_k$ = function (uShort, decimalMode) {
    var bigint = Companion_getInstance_6().fromUShort_gkl0ii_k$(uShort);
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0 = bigint.numberOfDecimalDigits_wouqvd_k$().minus_mfbszm_k$(toLong(1));
    return (new BigDecimal(bigint, tmp$ret$0, decimalMode)).roundSignificand_epby2m_k$(decimalMode);
  };
  protoOf(Companion).fromUShort$default_xomhsk_k$ = function (uShort, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromUShort_5hlwvb_k$(uShort, decimalMode) : $super.fromUShort_5hlwvb_k$.call(this, new UShort(uShort), decimalMode);
  };
  protoOf(Companion).fromShort_jfhv6b_k$ = function (short, decimalMode) {
    var bigint = Companion_getInstance_6().fromShort_qmrdxi_k$(short);
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0 = bigint.numberOfDecimalDigits_wouqvd_k$().minus_mfbszm_k$(toLong(1));
    return (new BigDecimal(bigint, tmp$ret$0, decimalMode)).roundSignificand_epby2m_k$(decimalMode);
  };
  protoOf(Companion).fromShort$default_ge2imw_k$ = function (short, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromShort_jfhv6b_k$(short, decimalMode) : $super.fromShort_jfhv6b_k$.call(this, short, decimalMode);
  };
  protoOf(Companion).fromUByte_f69m69_k$ = function (uByte, decimalMode) {
    var bigint = Companion_getInstance_6().fromUByte_nkoevi_k$(uByte);
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0 = bigint.numberOfDecimalDigits_wouqvd_k$().minus_mfbszm_k$(toLong(1));
    return (new BigDecimal(bigint, tmp$ret$0, decimalMode)).roundSignificand_epby2m_k$(decimalMode);
  };
  protoOf(Companion).fromUByte$default_kmeqro_k$ = function (uByte, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromUByte_f69m69_k$(uByte, decimalMode) : $super.fromUByte_f69m69_k$.call(this, new UByte(uByte), decimalMode);
  };
  protoOf(Companion).fromByte_frvgkt_k$ = function (byte, decimalMode) {
    var bigint = Companion_getInstance_6().fromByte_i1k4na_k$(byte);
    // Inline function 'kotlin.Long.minus' call
    var tmp$ret$0 = bigint.numberOfDecimalDigits_wouqvd_k$().minus_mfbszm_k$(toLong(1));
    return (new BigDecimal(bigint, tmp$ret$0, decimalMode)).roundSignificand_epby2m_k$(decimalMode);
  };
  protoOf(Companion).fromByte$default_irf0a0_k$ = function (byte, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromByte_frvgkt_k$(byte, decimalMode) : $super.fromByte_frvgkt_k$.call(this, byte, decimalMode);
  };
  protoOf(Companion).fromLongAsSignificand_mg8zkg_k$ = function (long, decimalMode) {
    return (new BigDecimal(Companion_getInstance_6().fromLong_rbvu5k_k$(long), new Long(0, 0), decimalMode)).roundSignificand_epby2m_k$(decimalMode);
  };
  protoOf(Companion).fromLongAsSignificand$default_wpxk0l_k$ = function (long, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromLongAsSignificand_mg8zkg_k$(long, decimalMode) : $super.fromLongAsSignificand_mg8zkg_k$.call(this, long, decimalMode);
  };
  protoOf(Companion).fromIntAsSignificand_3528hl_k$ = function (int, decimalMode) {
    return (new BigDecimal(Companion_getInstance_6().fromInt_wjro43_k$(int), new Long(0, 0), decimalMode)).roundSignificand_epby2m_k$(decimalMode);
  };
  protoOf(Companion).fromIntAsSignificand$default_gqlo5a_k$ = function (int, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromIntAsSignificand_3528hl_k$(int, decimalMode) : $super.fromIntAsSignificand_3528hl_k$.call(this, int, decimalMode);
  };
  protoOf(Companion).fromShortAsSignificand_aqzg4m_k$ = function (short, decimalMode) {
    return (new BigDecimal(Companion_getInstance_6().fromShort_qmrdxi_k$(short), new Long(0, 0), decimalMode)).roundSignificand_epby2m_k$(decimalMode);
  };
  protoOf(Companion).fromShortAsSignificand$default_qhbw23_k$ = function (short, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromShortAsSignificand_aqzg4m_k$(short, decimalMode) : $super.fromShortAsSignificand_aqzg4m_k$.call(this, short, decimalMode);
  };
  protoOf(Companion).fromByteAsSignificand_j342li_k$ = function (byte, decimalMode) {
    return (new BigDecimal(Companion_getInstance_6().fromByte_i1k4na_k$(byte), new Long(0, 0), decimalMode)).roundSignificand_epby2m_k$(decimalMode);
  };
  protoOf(Companion).fromByteAsSignificand$default_lgriq3_k$ = function (byte, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromByteAsSignificand_j342li_k$(byte, decimalMode) : $super.fromByteAsSignificand_j342li_k$.call(this, byte, decimalMode);
  };
  protoOf(Companion).fromFloat_2eb8dv_k$ = function (float, decimalMode) {
    var floatString = float.toString();
    var tmp;
    if (contains(floatString, _Char___init__impl__6a9atx(46)) ? !contains(floatString, _Char___init__impl__6a9atx(69), true) : false) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.dropLastWhile' call
        var inductionVariable = get_lastIndex(floatString);
        if (0 <= inductionVariable)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            // Inline function 'com.ionspin.kotlin.bignum.decimal.Companion.fromFloat.<anonymous>' call
            if (!(charSequenceGet(floatString, index) === _Char___init__impl__6a9atx(48))) {
              // Inline function 'kotlin.text.substring' call
              var endIndex = index + 1 | 0;
              // Inline function 'kotlin.js.asDynamic' call
              tmp$ret$3 = floatString.substring(0, endIndex);
              break $l$block;
            }
          }
           while (0 <= inductionVariable);
        tmp$ret$3 = '';
      }
      tmp = this.parseStringWithMode_3yqxy_k$(tmp$ret$3, decimalMode).roundSignificand_epby2m_k$(decimalMode);
    } else {
      tmp = this.parseStringWithMode_3yqxy_k$(floatString, decimalMode).roundSignificand_epby2m_k$(decimalMode);
    }
    return tmp;
  };
  protoOf(Companion).fromFloat$default_ur40zs_k$ = function (float, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromFloat_2eb8dv_k$(float, decimalMode) : $super.fromFloat_2eb8dv_k$.call(this, float, decimalMode);
  };
  protoOf(Companion).fromDouble_vfrbvc_k$ = function (double, decimalMode) {
    var doubleString = double.toString();
    var tmp;
    if (contains(doubleString, _Char___init__impl__6a9atx(46)) ? !contains(doubleString, _Char___init__impl__6a9atx(69), true) : false) {
      var tmp$ret$3;
      $l$block: {
        // Inline function 'kotlin.text.dropLastWhile' call
        var inductionVariable = get_lastIndex(doubleString);
        if (0 <= inductionVariable)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + -1 | 0;
            // Inline function 'com.ionspin.kotlin.bignum.decimal.Companion.fromDouble.<anonymous>' call
            if (!(charSequenceGet(doubleString, index) === _Char___init__impl__6a9atx(48))) {
              // Inline function 'kotlin.text.substring' call
              var endIndex = index + 1 | 0;
              // Inline function 'kotlin.js.asDynamic' call
              tmp$ret$3 = doubleString.substring(0, endIndex);
              break $l$block;
            }
          }
           while (0 <= inductionVariable);
        tmp$ret$3 = '';
      }
      tmp = this.parseStringWithMode_3yqxy_k$(tmp$ret$3, decimalMode).roundSignificand_epby2m_k$(decimalMode);
    } else {
      tmp = this.parseStringWithMode_3yqxy_k$(doubleString, decimalMode).roundSignificand_epby2m_k$(decimalMode).roundSignificand_epby2m_k$(decimalMode);
    }
    return tmp;
  };
  protoOf(Companion).fromDouble$default_4guygt_k$ = function (double, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromDouble_vfrbvc_k$(double, decimalMode) : $super.fromDouble_vfrbvc_k$.call(this, double, decimalMode);
  };
  protoOf(Companion).fromBigIntegerWithExponent_66e076_k$ = function (bigInteger, exponent, decimalMode) {
    return (new BigDecimal(bigInteger, exponent, decimalMode)).roundSignificand_epby2m_k$(decimalMode);
  };
  protoOf(Companion).fromBigIntegerWithExponent$default_2c79gn_k$ = function (bigInteger, exponent, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromBigIntegerWithExponent_66e076_k$(bigInteger, exponent, decimalMode) : $super.fromBigIntegerWithExponent_66e076_k$.call(this, bigInteger, exponent, decimalMode);
  };
  protoOf(Companion).fromLongWithExponent_4fd08o_k$ = function (long, exponent, decimalMode) {
    var bigint = Companion_getInstance_6().fromLong_rbvu5k_k$(long);
    return (new BigDecimal(bigint, exponent, decimalMode)).roundSignificand_epby2m_k$(decimalMode);
  };
  protoOf(Companion).fromLongWithExponent$default_ju0hx5_k$ = function (long, exponent, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromLongWithExponent_4fd08o_k$(long, exponent, decimalMode) : $super.fromLongWithExponent_4fd08o_k$.call(this, long, exponent, decimalMode);
  };
  protoOf(Companion).fromIntWithExponent_8qcyrn_k$ = function (int, exponent, decimalMode) {
    var bigint = Companion_getInstance_6().fromInt_wjro43_k$(int);
    return (new BigDecimal(bigint, exponent, decimalMode)).roundSignificand_epby2m_k$(decimalMode);
  };
  protoOf(Companion).fromIntWithExponent$default_ok91wk_k$ = function (int, exponent, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromIntWithExponent_8qcyrn_k$(int, exponent, decimalMode) : $super.fromIntWithExponent_8qcyrn_k$.call(this, int, exponent, decimalMode);
  };
  protoOf(Companion).fromShortWithExponent_mvtf86_k$ = function (short, exponent, decimalMode) {
    var bigint = Companion_getInstance_6().fromShort_qmrdxi_k$(short);
    return (new BigDecimal(bigint, exponent, decimalMode)).roundSignificand_epby2m_k$(decimalMode);
  };
  protoOf(Companion).fromShortWithExponent$default_vwo6ll_k$ = function (short, exponent, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromShortWithExponent_mvtf86_k$(short, exponent, decimalMode) : $super.fromShortWithExponent_mvtf86_k$.call(this, short, exponent, decimalMode);
  };
  protoOf(Companion).fromByteWithExponent_w4a46i_k$ = function (byte, exponent, decimalMode) {
    var bigint = Companion_getInstance_6().fromByte_i1k4na_k$(byte);
    return (new BigDecimal(bigint, exponent, decimalMode)).roundSignificand_epby2m_k$(decimalMode);
  };
  protoOf(Companion).fromByteWithExponent$default_2ywcbb_k$ = function (byte, exponent, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.fromByteWithExponent_w4a46i_k$(byte, exponent, decimalMode) : $super.fromByteWithExponent_w4a46i_k$.call(this, byte, exponent, decimalMode);
  };
  protoOf(Companion).fromBigInteger_vytzoc_k$ = function (bigInteger) {
    return this.fromBigInteger_chn2b5_k$(bigInteger, null);
  };
  protoOf(Companion).fromULong_bnyibi_k$ = function (uLong) {
    return this.fromULong_qdg26j_k$(uLong, null);
  };
  protoOf(Companion).fromUInt_gep9wf_k$ = function (uInt) {
    return this.fromUInt_wti0tq_k$(uInt, null);
  };
  protoOf(Companion).fromUShort_gkl0ii_k$ = function (uShort) {
    return this.fromUShort_5hlwvb_k$(uShort, null);
  };
  protoOf(Companion).fromUByte_nkoevi_k$ = function (uByte) {
    return this.fromUByte_f69m69_k$(uByte, null);
  };
  protoOf(Companion).fromLong_rbvu5k_k$ = function (long) {
    return this.fromLong_lu5zyj_k$(long, null);
  };
  protoOf(Companion).fromInt_wjro43_k$ = function (int) {
    return this.fromInt_74zh40_k$(int, null);
  };
  protoOf(Companion).fromShort_qmrdxi_k$ = function (short) {
    return this.fromShort_jfhv6b_k$(short, null);
  };
  protoOf(Companion).fromByte_i1k4na_k$ = function (byte) {
    return this.fromByte_frvgkt_k$(byte, null);
  };
  protoOf(Companion).tryFromFloat_izmgak_k$ = function (float, exactRequired) {
    return this.fromFloat_2eb8dv_k$(float, null);
  };
  protoOf(Companion).tryFromDouble_r3v8np_k$ = function (double, exactRequired) {
    return this.fromDouble_vfrbvc_k$(double, null);
  };
  protoOf(Companion).parseString_rj8x8i_k$ = function (string, base) {
    return this.parseStringWithMode_3yqxy_k$(string, null);
  };
  protoOf(Companion).parseString_9f3uqe_k$ = function (string) {
    return this.parseStringWithMode$default_gsk4sf_k$(string);
  };
  protoOf(Companion).parseStringWithMode_3yqxy_k$ = function (floatingPointString, decimalMode) {
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(floatingPointString) === 0) {
      throw ArithmeticException_init_$Create$('Empty string is not a valid decimal number');
    }
    if (contains(floatingPointString, _Char___init__impl__6a9atx(69), true)) {
      var tmp;
      if (!contains(floatingPointString, _Char___init__impl__6a9atx(46))) {
        var splitAroundE = split(floatingPointString, charArrayOf([_Char___init__impl__6a9atx(69), _Char___init__impl__6a9atx(101)]));
        tmp = listOf([splitAroundE.get_c1px32_k$(0), '0E' + splitAroundE.get_c1px32_k$(1)]);
      } else {
        tmp = split(floatingPointString, charArrayOf([_Char___init__impl__6a9atx(46)]));
      }
      var split_0 = tmp;
      if (split_0.get_size_woubt6_k$() === 2) {
        var signPresent = charSequenceGet(floatingPointString, 0) === _Char___init__impl__6a9atx(45) ? true : charSequenceGet(floatingPointString, 0) === _Char___init__impl__6a9atx(43);
        var tmp_0;
        if (signPresent) {
          tmp_0 = 1;
        } else {
          tmp_0 = 0;
        }
        var leftStart = tmp_0;
        var tmp_1;
        if (signPresent) {
          var tmp_2;
          if (charSequenceGet(floatingPointString, 0) === _Char___init__impl__6a9atx(45)) {
            tmp_2 = Sign_NEGATIVE_getInstance();
          } else {
            tmp_2 = Sign_POSITIVE_getInstance();
          }
          tmp_1 = tmp_2;
        } else {
          tmp_1 = Sign_POSITIVE_getInstance();
        }
        var sign = tmp_1;
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        var left = split_0.get_c1px32_k$(0).substring(leftStart);
        var rightSplit = split(split_0.get_c1px32_k$(1), charArrayOf([_Char___init__impl__6a9atx(69), _Char___init__impl__6a9atx(101)]));
        var right = rightSplit.get_c1px32_k$(0);
        var exponentSplit = rightSplit.get_c1px32_k$(1);
        var exponentSignPresent = charSequenceGet(exponentSplit, 0) === _Char___init__impl__6a9atx(45) ? true : charSequenceGet(exponentSplit, 0) === _Char___init__impl__6a9atx(43);
        var tmp_3;
        if (charSequenceGet(exponentSplit, 0) === _Char___init__impl__6a9atx(45)) {
          tmp_3 = Sign_NEGATIVE_getInstance();
        } else {
          tmp_3 = Sign_POSITIVE_getInstance();
        }
        var exponentSign = tmp_3;
        var tmp_4;
        if (exponentSignPresent) {
          tmp_4 = 1;
        } else {
          tmp_4 = 0;
        }
        var skipSignIfPresent = tmp_4;
        // Inline function 'kotlin.text.substring' call
        // Inline function 'kotlin.js.asDynamic' call
        var exponentString = exponentSplit.substring(skipSignIfPresent);
        var tmp_5;
        if (exponentSign.equals(Sign_POSITIVE_getInstance())) {
          tmp_5 = toLong_0(exponentString, 10);
        } else {
          // Inline function 'kotlin.Long.times' call
          tmp_5 = toLong_0(exponentString, 10).times_nfzjiw_k$(toLong(-1));
        }
        var exponent = tmp_5;
        var tmp$ret$7;
        $l$block: {
          // Inline function 'kotlin.text.indexOfFirst' call
          var inductionVariable = 0;
          var last = charSequenceLength(left) - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              // Inline function 'com.ionspin.kotlin.bignum.decimal.Companion.parseStringWithMode.<anonymous>' call
              if (!(charSequenceGet(left, index) === _Char___init__impl__6a9atx(48))) {
                tmp$ret$7 = index;
                break $l$block;
              }
            }
             while (inductionVariable <= last);
          tmp$ret$7 = -1;
        }
        var leftFirstNonZero = tmp$ret$7;
        if (leftFirstNonZero === -1) {
          leftFirstNonZero = 0;
        }
        var tmp$ret$9;
        $l$block_0: {
          // Inline function 'kotlin.text.indexOfLast' call
          var inductionVariable_0 = charSequenceLength(right) - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var index_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              // Inline function 'com.ionspin.kotlin.bignum.decimal.Companion.parseStringWithMode.<anonymous>' call
              if (!(charSequenceGet(right, index_0) === _Char___init__impl__6a9atx(48))) {
                tmp$ret$9 = index_0;
                break $l$block_0;
              }
            }
             while (0 <= inductionVariable_0);
          tmp$ret$9 = -1;
        }
        var rightLastNonZero = tmp$ret$9;
        if (rightLastNonZero === -1) {
          rightLastNonZero = right.length - 1 | 0;
        }
        // Inline function 'kotlin.text.substring' call
        var startIndex = leftFirstNonZero;
        var endIndex = left.length;
        // Inline function 'kotlin.js.asDynamic' call
        var leftTruncated = left.substring(startIndex, endIndex);
        // Inline function 'kotlin.text.substring' call
        var endIndex_0 = rightLastNonZero + 1 | 0;
        // Inline function 'kotlin.js.asDynamic' call
        var rightTruncated = right.substring(0, endIndex_0);
        var significand = Companion_getInstance_6().parseString_rj8x8i_k$(leftTruncated + rightTruncated, 10);
        if (significand.equals(Companion_getInstance_6().get_ZERO_wodlgx_k$())) {
          sign = Sign_ZERO_getInstance();
        }
        if (sign.equals(Sign_NEGATIVE_getInstance())) {
          significand = significand.negate_hcqk8u_k$();
        }
        var tmp_6;
        if (!(leftTruncated === '0')) {
          // Inline function 'kotlin.Long.minus' call
          // Inline function 'kotlin.Long.plus' call
          var other = leftTruncated.length;
          tmp_6 = exponent.plus_r93sks_k$(toLong(other)).minus_mfbszm_k$(toLong(1));
        } else {
          // Inline function 'kotlin.Long.minus' call
          tmp_6 = exponent.minus_mfbszm_k$(numberToLong(rightTruncated.length).minus_mfbszm_k$(significand.numberOfDecimalDigits_wouqvd_k$())).minus_mfbszm_k$(toLong(1));
        }
        var exponentModifiedByFloatingPointPosition = tmp_6;
        return new BigDecimal(significand, exponentModifiedByFloatingPointPosition, decimalMode);
      } else
        throw ArithmeticException_init_$Create$('Invalid (or unsupported) floating point number format: ' + floatingPointString);
    } else {
      if (contains(floatingPointString, _Char___init__impl__6a9atx(46))) {
        var split_1 = split(floatingPointString, charArrayOf([_Char___init__impl__6a9atx(46)]));
        if (split_1.get_size_woubt6_k$() === 2) {
          var signPresent_0 = charSequenceGet(floatingPointString, 0) === _Char___init__impl__6a9atx(45) ? true : charSequenceGet(floatingPointString, 0) === _Char___init__impl__6a9atx(43);
          var tmp_7;
          if (signPresent_0) {
            tmp_7 = 1;
          } else {
            tmp_7 = 0;
          }
          var leftStart_0 = tmp_7;
          var tmp_8;
          if (signPresent_0) {
            var tmp_9;
            if (charSequenceGet(floatingPointString, 0) === _Char___init__impl__6a9atx(45)) {
              tmp_9 = Sign_NEGATIVE_getInstance();
            } else {
              tmp_9 = Sign_POSITIVE_getInstance();
            }
            tmp_8 = tmp_9;
          } else {
            tmp_8 = Sign_POSITIVE_getInstance();
          }
          var sign_0 = tmp_8;
          // Inline function 'kotlin.text.substring' call
          // Inline function 'kotlin.js.asDynamic' call
          var left_0 = split_1.get_c1px32_k$(0).substring(leftStart_0);
          var right_0 = split_1.get_c1px32_k$(1);
          var tmp$ret$20;
          $l$block_1: {
            // Inline function 'kotlin.text.indexOfFirst' call
            var inductionVariable_1 = 0;
            var last_0 = charSequenceLength(left_0) - 1 | 0;
            if (inductionVariable_1 <= last_0)
              do {
                var index_1 = inductionVariable_1;
                inductionVariable_1 = inductionVariable_1 + 1 | 0;
                // Inline function 'com.ionspin.kotlin.bignum.decimal.Companion.parseStringWithMode.<anonymous>' call
                if (!(charSequenceGet(left_0, index_1) === _Char___init__impl__6a9atx(48))) {
                  tmp$ret$20 = index_1;
                  break $l$block_1;
                }
              }
               while (inductionVariable_1 <= last_0);
            tmp$ret$20 = -1;
          }
          var leftFirstNonZero_0 = tmp$ret$20;
          if (leftFirstNonZero_0 === -1) {
            leftFirstNonZero_0 = 0;
          }
          var tmp$ret$22;
          $l$block_2: {
            // Inline function 'kotlin.text.indexOfLast' call
            var inductionVariable_2 = charSequenceLength(right_0) - 1 | 0;
            if (0 <= inductionVariable_2)
              do {
                var index_2 = inductionVariable_2;
                inductionVariable_2 = inductionVariable_2 + -1 | 0;
                // Inline function 'com.ionspin.kotlin.bignum.decimal.Companion.parseStringWithMode.<anonymous>' call
                if (!(charSequenceGet(right_0, index_2) === _Char___init__impl__6a9atx(48))) {
                  tmp$ret$22 = index_2;
                  break $l$block_2;
                }
              }
               while (0 <= inductionVariable_2);
            tmp$ret$22 = -1;
          }
          var rightLastNonZero_0 = tmp$ret$22;
          if (rightLastNonZero_0 === -1) {
            rightLastNonZero_0 = right_0.length - 1 | 0;
          }
          // Inline function 'kotlin.text.substring' call
          var startIndex_0 = leftFirstNonZero_0;
          var endIndex_1 = left_0.length;
          // Inline function 'kotlin.js.asDynamic' call
          var leftTruncated_0 = left_0.substring(startIndex_0, endIndex_1);
          // Inline function 'kotlin.text.substring' call
          var endIndex_2 = rightLastNonZero_0 + 1 | 0;
          // Inline function 'kotlin.js.asDynamic' call
          var rightTruncated_0 = right_0.substring(0, endIndex_2);
          var significand_0 = Companion_getInstance_6().parseString_rj8x8i_k$(leftTruncated_0 + rightTruncated_0, 10);
          var tmp_10;
          var tmp_11;
          // Inline function 'kotlin.text.isNotEmpty' call
          if (charSequenceLength(leftTruncated_0) > 0) {
            tmp_11 = !(charSequenceGet(leftTruncated_0, 0) === _Char___init__impl__6a9atx(48));
          } else {
            tmp_11 = false;
          }
          if (tmp_11) {
            tmp_10 = leftTruncated_0.length - 1 | 0;
          } else {
            var tmp$ret$29;
            $l$block_3: {
              // Inline function 'kotlin.text.indexOfFirst' call
              var inductionVariable_3 = 0;
              var last_1 = charSequenceLength(rightTruncated_0) - 1 | 0;
              if (inductionVariable_3 <= last_1)
                do {
                  var index_3 = inductionVariable_3;
                  inductionVariable_3 = inductionVariable_3 + 1 | 0;
                  // Inline function 'com.ionspin.kotlin.bignum.decimal.Companion.parseStringWithMode.<anonymous>' call
                  if (!(charSequenceGet(rightTruncated_0, index_3) === _Char___init__impl__6a9atx(48))) {
                    tmp$ret$29 = index_3;
                    break $l$block_3;
                  }
                }
                 while (inductionVariable_3 <= last_1);
              tmp$ret$29 = -1;
            }
            tmp_10 = imul(tmp$ret$29 + 1 | 0, -1);
          }
          var exponent_0 = tmp_10;
          if (significand_0.equals(Companion_getInstance_6().get_ZERO_wodlgx_k$())) {
            sign_0 = Sign_ZERO_getInstance();
          }
          if (sign_0.equals(Sign_NEGATIVE_getInstance())) {
            significand_0 = significand_0.negate_hcqk8u_k$();
          }
          return new BigDecimal(significand_0, toLong(exponent_0), decimalMode);
        } else
          throw ArithmeticException_init_$Create$('Invalid (or unsupported) floating point number format: ' + floatingPointString);
      } else {
        var significand_1 = Companion_getInstance_6().parseString_rj8x8i_k$(floatingPointString, 10);
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$30 = significand_1.numberOfDecimalDigits_wouqvd_k$().minus_mfbszm_k$(toLong(1));
        return new BigDecimal(significand_1, tmp$ret$30, decimalMode);
      }
    }
  };
  protoOf(Companion).parseStringWithMode$default_gsk4sf_k$ = function (floatingPointString, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.parseStringWithMode_3yqxy_k$(floatingPointString, decimalMode) : $super.parseStringWithMode_3yqxy_k$.call(this, floatingPointString, decimalMode);
  };
  var Companion_instance;
  function Companion_getInstance_4() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function removeTrailingZeroes($this, bigDecimal) {
    if (bigDecimal.equals(Companion_getInstance_4().ZERO_1))
      return $this;
    var significand = bigDecimal.significand_1;
    var divisionResult = new QuotientAndRemainder(bigDecimal.significand_1, Companion_getInstance_6().get_ZERO_wodlgx_k$());
    do {
      divisionResult = divisionResult.get_quotient_ooukvo_k$().divrem_kdohd1_k$(Companion_getInstance_6().get_TEN_18jk30_k$());
      if (divisionResult.get_remainder_mwecu4_k$().equals(Companion_getInstance_6().get_ZERO_wodlgx_k$())) {
        significand = divisionResult.get_quotient_ooukvo_k$();
      }
    }
     while (divisionResult.get_remainder_mwecu4_k$().equals(Companion_getInstance_6().get_ZERO_wodlgx_k$()));
    return new BigDecimal(significand, bigDecimal.exponent_1);
  }
  function integerDiv($this, other, decimalMode) {
    var resolvedDecimalMode = resolveDecimalMode(Companion_getInstance_4(), $this.decimalMode_1, other.decimalMode_1, decimalMode);
    var newExponent = $this.exponent_1.minus_mfbszm_k$(other.exponent_1);
    var newSignificand = $this.significand_1.div_7cbhfh_k$(other.significand_1);
    return roundOrDont(Companion_getInstance_4(), newSignificand, newExponent, resolvedDecimalMode);
  }
  function integerDiv$default($this, other, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return integerDiv($this, other, decimalMode);
  }
  function rem_4($this, other, decimalMode) {
    var resolvedDecimalMode = resolveDecimalMode(Companion_getInstance_4(), $this.decimalMode_1, other.decimalMode_1, decimalMode);
    var newExponent = $this.exponent_1.minus_mfbszm_k$(other.exponent_1);
    var newSignificand = $this.significand_1.rem_rzdobw_k$(other.significand_1);
    return roundOrDont(Companion_getInstance_4(), newSignificand, newExponent, resolvedDecimalMode);
  }
  function rem$default($this, other, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return rem_4($this, other, decimalMode);
  }
  function divrem($this, other, decimalMode) {
    var resolvedDecimalMode = resolveDecimalMode(Companion_getInstance_4(), $this.decimalMode_1, other.decimalMode_1, decimalMode);
    // Inline function 'kotlin.math.max' call
    var a = $this.exponent_1;
    var b = other.exponent_1;
    var newExponent = a.compareTo_9jj042_k$(b) >= 0 ? a : b;
    var newSignificand = $this.significand_1.div_7cbhfh_k$(other.significand_1);
    var newRemainderSignificand = $this.significand_1.rem_rzdobw_k$(other.significand_1);
    return new Pair(roundOrDont(Companion_getInstance_4(), newSignificand, newExponent, resolvedDecimalMode), roundOrDont(Companion_getInstance_4(), newRemainderSignificand, newExponent, resolvedDecimalMode));
  }
  function divrem$default($this, other, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return divrem($this, other, decimalMode);
  }
  function ScaleOps(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function computeMode($this, other, op) {
    var tmp;
    if ((($this.decimalMode_1 == null ? true : $this.decimalMode_1.get_isPrecisionUnlimited_ayf8d2_k$()) ? true : other.decimalMode_1 == null) ? true : other.decimalMode_1.get_isPrecisionUnlimited_ayf8d2_k$()) {
      tmp = Companion_getInstance_5().get_DEFAULT_wccqmg_k$();
    } else {
      // Inline function 'kotlin.math.max' call
      var a = $this.decimalMode_1.get_decimalPrecision_1lnz0q_k$();
      var b = other.decimalMode_1.get_decimalPrecision_1lnz0q_k$();
      var tmp_0 = a.compareTo_9jj042_k$(b) >= 0 ? a : b;
      var tmp_1 = $this.decimalMode_1.get_roundingMode_uxzxk0_k$();
      var tmp_2;
      if ($this.decimalMode_1.get_usingScale_nxygf_k$() ? other.decimalMode_1.get_usingScale_nxygf_k$() : false) {
        var tmp_3;
        switch (op.get_ordinal_ip24qg_k$()) {
          case 0:
            // Inline function 'kotlin.math.max' call

            var a_0 = $this.decimalMode_1.get_scale_iyf28x_k$();
            var b_0 = other.decimalMode_1.get_scale_iyf28x_k$();
            tmp_3 = a_0.compareTo_9jj042_k$(b_0) >= 0 ? a_0 : b_0;
            break;
          case 1:
            // Inline function 'kotlin.math.min' call

            var a_1 = $this.decimalMode_1.get_scale_iyf28x_k$();
            var b_1 = other.decimalMode_1.get_scale_iyf28x_k$();
            tmp_3 = a_1.compareTo_9jj042_k$(b_1) <= 0 ? a_1 : b_1;
            break;
          case 2:
            tmp_3 = $this.decimalMode_1.get_scale_iyf28x_k$().plus_r93sks_k$(other.decimalMode_1.get_scale_iyf28x_k$());
            break;
          default:
            noWhenBranchMatchedException();
            break;
        }
        tmp_2 = tmp_3;
      } else {
        tmp_2 = new Long(-1, -1);
      }
      tmp = new DecimalMode(tmp_0, tmp_1, tmp_2);
    }
    return tmp;
  }
  function checkWholeness($this, exactRequired) {
    if (exactRequired ? !$this.isWholeNumber_olkfca_k$() : false)
      throw ArithmeticException_init_$Create$('Cannot convert to int and provide exact value');
  }
  function getRidOfRadix($this, bigDecimal) {
    var precision = bigDecimal.significand_1.numberOfDecimalDigits_wouqvd_k$();
    // Inline function 'kotlin.Long.plus' call
    var newExponent = bigDecimal.exponent_1.minus_mfbszm_k$(precision).plus_r93sks_k$(toLong(1));
    return new BigDecimal(bigDecimal.significand_1, newExponent);
  }
  function bringSignificandToSameExponent($this, first, second) {
    var firstPrepared = getRidOfRadix($this, first);
    var secondPrepared = getRidOfRadix($this, second);
    var firstPreparedExponent = firstPrepared.exponent_1;
    var secondPreparedExponent = secondPrepared.exponent_1;
    var tmp;
    if (first.exponent_1.compareTo_9jj042_k$(second.exponent_1) > 0) {
      var moveFirstBy = firstPreparedExponent.minus_mfbszm_k$(secondPreparedExponent);
      var tmp_0;
      if (moveFirstBy.compareTo_9jj042_k$(new Long(0, 0)) >= 0) {
        var movedFirst = firstPrepared.significand_1.times_wzgsx4_k$(toBigInteger(10).pow_3xn4h6_k$(moveFirstBy));
        return new Triple(movedFirst, second.significand_1, secondPreparedExponent);
      } else {
        var tmp_1 = toBigInteger(10);
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$0 = moveFirstBy.times_nfzjiw_k$(toLong(-1));
        var movedSecond = secondPrepared.significand_1.times_wzgsx4_k$(tmp_1.pow_3xn4h6_k$(tmp$ret$0));
        tmp_0 = new Triple(first.significand_1, movedSecond, firstPreparedExponent);
      }
      tmp = tmp_0;
    } else if (first.exponent_1.compareTo_9jj042_k$(second.exponent_1) < 0) {
      var moveSecondBy = secondPreparedExponent.minus_mfbszm_k$(firstPreparedExponent);
      var tmp_2;
      if (moveSecondBy.compareTo_9jj042_k$(new Long(0, 0)) >= 0) {
        var movedSecond_0 = secondPrepared.significand_1.times_wzgsx4_k$(toBigInteger(10).pow_3xn4h6_k$(moveSecondBy));
        tmp_2 = new Triple(first.significand_1, movedSecond_0, firstPreparedExponent);
      } else {
        var tmp_3 = toBigInteger(10);
        // Inline function 'kotlin.Long.times' call
        var tmp$ret$1 = moveSecondBy.times_nfzjiw_k$(toLong(-1));
        var movedFirst_0 = firstPrepared.significand_1.times_wzgsx4_k$(tmp_3.pow_3xn4h6_k$(tmp$ret$1));
        tmp_2 = new Triple(movedFirst_0, second.significand_1, firstPreparedExponent);
      }
      return tmp_2;
    } else if (first.exponent_1.equals(second.exponent_1)) {
      var delta = firstPreparedExponent.minus_mfbszm_k$(secondPreparedExponent);
      var tmp_4;
      if (delta.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
        var movedFirst_1 = first.significand_1.times_wzgsx4_k$(toBigInteger(10).pow_3xn4h6_k$(delta));
        tmp_4 = new Triple(movedFirst_1, second.significand_1, firstPreparedExponent);
      } else {
        if (delta.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
          var tmp_5 = toBigInteger(10);
          // Inline function 'kotlin.Long.times' call
          var tmp$ret$2 = delta.times_nfzjiw_k$(toLong(-1));
          var movedSecond_1 = second.significand_1.times_wzgsx4_k$(tmp_5.pow_3xn4h6_k$(tmp$ret$2));
          tmp_4 = new Triple(first.significand_1, movedSecond_1, firstPreparedExponent);
        } else {
          // Inline function 'kotlin.Long.compareTo' call
          if (delta.compareTo_9jj042_k$(toLong(0)) === 0) {
            tmp_4 = new Triple(first.significand_1, second.significand_1, firstPreparedExponent);
          } else {
            throw RuntimeException_init_$Create$('Invalid delta: ' + delta.toString());
          }
        }
      }
      return tmp_4;
    } else {
      throw RuntimeException_init_$Create$('Invalid comparison state BigInteger: ' + first.exponent_1.toString() + ', ' + second.exponent_1.toString());
    }
    return tmp;
  }
  function javascriptNumberComparison($this, number) {
    var double = numberToDouble(number);
    var tmp;
    if (double > Companion_getInstance().get_MAX_VALUE_54a9lf_k$().toDouble_ygsx0s_k$()) {
      tmp = $this.compare_8w8nxf_k$(Companion_getInstance_4().parseString_9f3uqe_k$(double.toString()));
    } else if (double % 1 === 0.0) {
      tmp = $this.compare_8w8nxf_k$(Companion_getInstance_4().fromLong_rbvu5k_k$(numberToLong(number)));
    } else {
      tmp = $this.compare_8w8nxf_k$(toBigDecimal(numberToDouble(number)));
    }
    return tmp;
  }
  function noExponentStringtoScientificNotation($this, input) {
    return placeADotInString($this, input, input.length - 1 | 0) + ('E+' + (input.length - 1 | 0));
  }
  function placeADotInStringExpanded($this, input, position) {
    var prefix = substring(input, until(0, input.length - position | 0));
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.text.dropLastWhile' call
      var this_0 = substring(input, until(input.length - position | 0, input.length));
      var inductionVariable = get_lastIndex(this_0);
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'com.ionspin.kotlin.bignum.decimal.BigDecimal.placeADotInStringExpanded.<anonymous>' call
          if (!(charSequenceGet(this_0, index) === _Char___init__impl__6a9atx(48))) {
            // Inline function 'kotlin.text.substring' call
            var endIndex = index + 1 | 0;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$3 = this_0.substring(0, endIndex);
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$3 = '';
    }
    var suffix = tmp$ret$3;
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(suffix) > 0) {
      tmp = prefix + '.' + suffix;
    } else {
      tmp = prefix;
    }
    return tmp;
  }
  function placeADotInString($this, input, position) {
    var prefix = substring(input, until(0, input.length - position | 0));
    var suffix = substring(input, until(input.length - position | 0, input.length));
    var prepared = prefix + '.' + suffix;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.text.dropLastWhile' call
      var inductionVariable = get_lastIndex(prepared);
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'com.ionspin.kotlin.bignum.decimal.BigDecimal.placeADotInString.<anonymous>' call
          if (!(charSequenceGet(prepared, index) === _Char___init__impl__6a9atx(48))) {
            // Inline function 'kotlin.text.substring' call
            var endIndex = index + 1 | 0;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$3 = prepared.substring(0, endIndex);
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$3 = '';
    }
    return tmp$ret$3;
  }
  function ScaleOps_Max_getInstance() {
    ScaleOps_initEntries();
    return ScaleOps_Max_instance;
  }
  function ScaleOps_Min_getInstance() {
    ScaleOps_initEntries();
    return ScaleOps_Min_instance;
  }
  function ScaleOps_Add_getInstance() {
    ScaleOps_initEntries();
    return ScaleOps_Add_instance;
  }
  function BigDecimal(_significand, _exponent, _decimalMode) {
    Companion_getInstance_4();
    _exponent = _exponent === VOID ? new Long(0, 0) : _exponent;
    _decimalMode = _decimalMode === VOID ? null : _decimalMode;
    if (!(_decimalMode == null) ? _decimalMode.get_usingScale_nxygf_k$() : false) {
      var wrk = applyScale(Companion_getInstance_4(), _significand, _exponent, _decimalMode);
      if (!wrk.isZero_jihrta_k$()) {
        this.significand_1 = wrk.significand_1;
        this.exponent_1 = wrk.exponent_1;
        var newPrecision = this.significand_1.numberOfDecimalDigits_wouqvd_k$();
        this.precision_1 = newPrecision;
        this.decimalMode_1 = _decimalMode.copy$default_viwfyk_k$(newPrecision);
      } else {
        this.significand_1 = wrk.significand_1;
        this.exponent_1 = wrk.exponent_1.times_nfzjiw_k$(_decimalMode.get_decimalPrecision_1lnz0q_k$().plus_r93sks_k$(_decimalMode.get_scale_iyf28x_k$()));
        this.precision_1 = _decimalMode.get_decimalPrecision_1lnz0q_k$().plus_r93sks_k$(_decimalMode.get_scale_iyf28x_k$());
        this.decimalMode_1 = _decimalMode.copy$default_viwfyk_k$(this.precision_1);
      }
    } else {
      this.significand_1 = _significand;
      this.precision_1 = _significand.numberOfDecimalDigits_wouqvd_k$();
      this.exponent_1 = _exponent;
      this.decimalMode_1 = _decimalMode;
    }
    var tmp = this;
    var tmp0_safe_receiver = this.decimalMode_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_decimalPrecision_1lnz0q_k$();
    tmp.precisionLimit_1 = tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs;
    var tmp_0 = this;
    var tmp0_safe_receiver_0 = this.decimalMode_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.get_roundingMode_uxzxk0_k$();
    tmp_0.roundingMode_1 = tmp1_elvis_lhs_0 == null ? RoundingMode_NONE_getInstance() : tmp1_elvis_lhs_0;
    var tmp_1 = this;
    var tmp0_safe_receiver_1 = this.decimalMode_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : tmp0_safe_receiver_1.get_scale_iyf28x_k$();
    tmp_1.scale_1 = tmp1_elvis_lhs_1 == null ? new Long(-1, -1) : tmp1_elvis_lhs_1;
    this.usingScale_1 = this.scale_1.compareTo_9jj042_k$(new Long(0, 0)) >= 0;
  }
  protoOf(BigDecimal).get_precision_e8tfsb_k$ = function () {
    return this.precision_1;
  };
  protoOf(BigDecimal).get_significand_2b6rly_k$ = function () {
    return this.significand_1;
  };
  protoOf(BigDecimal).get_exponent_7ddt2w_k$ = function () {
    return this.exponent_1;
  };
  protoOf(BigDecimal).get_decimalMode_8x5d5h_k$ = function () {
    return this.decimalMode_1;
  };
  protoOf(BigDecimal).get_precisionLimit_es4j52_k$ = function () {
    return this.precisionLimit_1;
  };
  protoOf(BigDecimal).get_roundingMode_uxzxk0_k$ = function () {
    return this.roundingMode_1;
  };
  protoOf(BigDecimal).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(BigDecimal).get_usingScale_nxygf_k$ = function () {
    return this.usingScale_1;
  };
  protoOf(BigDecimal).scale_des3c4_k$ = function (scale) {
    if (scale.compareTo_9jj042_k$(new Long(0, 0)) < 0)
      throw ArithmeticException_init_$Create$('Negative Scale is unsupported.');
    var tmp;
    if (this.decimalMode_1 == null) {
      var tmp_0;
      if (scale.equals(new Long(-1, -1))) {
        tmp_0 = Companion_getInstance_5().get_DEFAULT_wccqmg_k$();
      } else {
        tmp_0 = new DecimalMode(new Long(0, 0), RoundingMode_ROUND_HALF_AWAY_FROM_ZERO_getInstance(), scale);
      }
      tmp = tmp_0;
    } else {
      tmp = new DecimalMode(this.decimalMode_1.get_decimalPrecision_1lnz0q_k$().minus_mfbszm_k$(this.decimalMode_1.get_scale_iyf28x_k$()), this.decimalMode_1.get_roundingMode_uxzxk0_k$(), scale);
    }
    var mode = tmp;
    return new BigDecimal(this.significand_1, this.exponent_1, mode);
  };
  protoOf(BigDecimal).removeScale_51od0a_k$ = function () {
    var tmp0_safe_receiver = this.decimalMode_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_decimalPrecision_1lnz0q_k$();
    var tmp = tmp1_elvis_lhs == null ? new Long(0, 0) : tmp1_elvis_lhs;
    var tmp2_safe_receiver = this.decimalMode_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.get_roundingMode_uxzxk0_k$();
    return new BigDecimal(this.significand_1, this.exponent_1, new DecimalMode(tmp, tmp3_elvis_lhs == null ? RoundingMode_NONE_getInstance() : tmp3_elvis_lhs, new Long(-1, -1)));
  };
  protoOf(BigDecimal).getCreator_y5p0ja_k$ = function () {
    return Companion_getInstance_4();
  };
  protoOf(BigDecimal).getInstance_rhh4hh_k$ = function () {
    return this;
  };
  protoOf(BigDecimal).add_h439sv_k$ = function (other) {
    return this.add_t025w2_k$(other, computeMode(this, other, ScaleOps_Max_getInstance()));
  };
  protoOf(BigDecimal).add_vp5qlp_k$ = function (other) {
    return this.add_h439sv_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  protoOf(BigDecimal).add_t025w2_k$ = function (other, decimalMode) {
    var resolvedDecimalMode = resolveDecimalMode(Companion_getInstance_4(), this.decimalMode_1, other.decimalMode_1, decimalMode);
    if (this.equals(Companion_getInstance_4().ZERO_1)) {
      return roundOrDont(Companion_getInstance_4(), other.significand_1, other.exponent_1, resolvedDecimalMode);
    }
    if (other.equals(Companion_getInstance_4().ZERO_1)) {
      return roundOrDont(Companion_getInstance_4(), this.significand_1, this.exponent_1, resolvedDecimalMode);
    }
    var tmp0_container = bringSignificandToSameExponent(this, this, other);
    var first = tmp0_container.component1_7eebsc_k$();
    var second = tmp0_container.component2_7eebsb_k$();
    var firstNumOfDigits = first.numberOfDecimalDigits_wouqvd_k$();
    var secondNumOfDigits = second.numberOfDecimalDigits_wouqvd_k$();
    var newSignificand = first.plus_f4xvv8_k$(second);
    var newSignificandNumOfDigit = newSignificand.numberOfDecimalDigits_wouqvd_k$();
    var tmp;
    if (firstNumOfDigits.compareTo_9jj042_k$(secondNumOfDigits) > 0) {
      tmp = firstNumOfDigits;
    } else {
      tmp = secondNumOfDigits;
    }
    var largerOperand = tmp;
    var carryDetected = newSignificandNumOfDigit.minus_mfbszm_k$(largerOperand);
    // Inline function 'kotlin.math.max' call
    var a = this.exponent_1;
    var b = other.exponent_1;
    var newExponent = (a.compareTo_9jj042_k$(b) >= 0 ? a : b).plus_r93sks_k$(carryDetected);
    var tmp_0;
    if (resolvedDecimalMode.get_usingScale_nxygf_k$()) {
      tmp_0 = roundOrDont(Companion_getInstance_4(), newSignificand, newExponent, resolvedDecimalMode.copy$default_viwfyk_k$(newSignificandNumOfDigit));
    } else {
      tmp_0 = roundOrDont(Companion_getInstance_4(), newSignificand, newExponent, resolvedDecimalMode);
    }
    return tmp_0;
  };
  protoOf(BigDecimal).add$default_4n64nr_k$ = function (other, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.add_t025w2_k$(other, decimalMode) : $super.add_t025w2_k$.call(this, other, decimalMode);
  };
  protoOf(BigDecimal).subtract_kj8jaq_k$ = function (other) {
    return this.subtract_xypt0b_k$(other, computeMode(this, other, ScaleOps_Max_getInstance()));
  };
  protoOf(BigDecimal).subtract_tgddne_k$ = function (other) {
    return this.subtract_kj8jaq_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  protoOf(BigDecimal).subtract_xypt0b_k$ = function (other, decimalMode) {
    var resolvedDecimalMode = resolveDecimalMode(Companion_getInstance_4(), this.decimalMode_1, other.decimalMode_1, decimalMode);
    if (this.equals(Companion_getInstance_4().ZERO_1)) {
      return roundOrDont(Companion_getInstance_4(), other.significand_1.negate_hcqk8u_k$(), other.exponent_1, resolvedDecimalMode);
    }
    if (other.equals(Companion_getInstance_4().ZERO_1)) {
      return roundOrDont(Companion_getInstance_4(), this.significand_1, this.exponent_1, resolvedDecimalMode);
    }
    var tmp0_container = bringSignificandToSameExponent(this, this, other);
    var first = tmp0_container.component1_7eebsc_k$();
    var second = tmp0_container.component2_7eebsb_k$();
    var firstNumOfDigits = first.numberOfDecimalDigits_wouqvd_k$();
    var secondNumOfDigits = second.numberOfDecimalDigits_wouqvd_k$();
    var newSignificand = first.minus_e48fwe_k$(second);
    var newSignificandNumOfDigit = newSignificand.numberOfDecimalDigits_wouqvd_k$();
    var tmp;
    if (firstNumOfDigits.compareTo_9jj042_k$(secondNumOfDigits) > 0) {
      tmp = firstNumOfDigits;
    } else {
      tmp = secondNumOfDigits;
    }
    var largerOperand = tmp;
    var borrowDetected = newSignificandNumOfDigit.minus_mfbszm_k$(largerOperand);
    // Inline function 'kotlin.math.max' call
    var a = this.exponent_1;
    var b = other.exponent_1;
    var newExponent = (a.compareTo_9jj042_k$(b) >= 0 ? a : b).plus_r93sks_k$(borrowDetected);
    if (this.usingScale_1) {
      return roundOrDont(Companion_getInstance_4(), newSignificand, newExponent, resolvedDecimalMode.copy$default_viwfyk_k$(newSignificandNumOfDigit));
    } else {
      return roundOrDont(Companion_getInstance_4(), newSignificand, newExponent, resolvedDecimalMode);
    }
  };
  protoOf(BigDecimal).subtract$default_9rnhsa_k$ = function (other, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.subtract_xypt0b_k$(other, decimalMode) : $super.subtract_xypt0b_k$.call(this, other, decimalMode);
  };
  protoOf(BigDecimal).multiply_12u20y_k$ = function (other) {
    return this.multiply_65ct85_k$(other, computeMode(this, other, ScaleOps_Max_getInstance()));
  };
  protoOf(BigDecimal).multiply_t4mx56_k$ = function (other) {
    return this.multiply_12u20y_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  protoOf(BigDecimal).multiply_65ct85_k$ = function (other, decimalMode) {
    var resolvedDecimalMode = resolveDecimalMode(Companion_getInstance_4(), this.decimalMode_1, other.decimalMode_1, decimalMode);
    var firstNumOfDigits = this.significand_1.numberOfDecimalDigits_wouqvd_k$();
    var secondNumOfDigits = other.significand_1.numberOfDecimalDigits_wouqvd_k$();
    var newSignificand = this.significand_1.times_wzgsx4_k$(other.significand_1);
    var newSignificandNumOfDigit = newSignificand.numberOfDecimalDigits_wouqvd_k$();
    var moveExponent = newSignificandNumOfDigit.minus_mfbszm_k$(firstNumOfDigits.plus_r93sks_k$(secondNumOfDigits));
    // Inline function 'kotlin.Long.plus' call
    var newExponent = this.exponent_1.plus_r93sks_k$(other.exponent_1).plus_r93sks_k$(moveExponent).plus_r93sks_k$(toLong(1));
    var tmp;
    if (resolvedDecimalMode.get_usingScale_nxygf_k$()) {
      tmp = roundOrDont(Companion_getInstance_4(), newSignificand, newExponent, resolvedDecimalMode.copy$default_viwfyk_k$(newSignificandNumOfDigit));
    } else {
      tmp = roundOrDont(Companion_getInstance_4(), newSignificand, newExponent, resolvedDecimalMode);
    }
    return tmp;
  };
  protoOf(BigDecimal).multiply$default_rls6ai_k$ = function (other, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.multiply_65ct85_k$(other, decimalMode) : $super.multiply_65ct85_k$.call(this, other, decimalMode);
  };
  protoOf(BigDecimal).divide_v5rlmf_k$ = function (other) {
    return this.divide_vx8k46_k$(other, computeMode(this, other, ScaleOps_Max_getInstance()));
  };
  protoOf(BigDecimal).divide_gsrehh_k$ = function (other) {
    return this.divide_v5rlmf_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  protoOf(BigDecimal).divide_vx8k46_k$ = function (other, decimalMode) {
    var resolvedDecimalMode = resolveDecimalMode(Companion_getInstance_4(), this.decimalMode_1, other.decimalMode_1, decimalMode);
    if (resolvedDecimalMode.get_isPrecisionUnlimited_ayf8d2_k$() ? !resolvedDecimalMode.get_usingScale_nxygf_k$() : false) {
      var newExponent = this.exponent_1.minus_mfbszm_k$(other.exponent_1);
      // Inline function 'kotlin.Long.plus' call
      // Inline function 'kotlin.Long.times' call
      var power = other.precision_1.times_nfzjiw_k$(toLong(2)).plus_r93sks_k$(toLong(6));
      var thisPrepared = this.significand_1.times_wzgsx4_k$(Companion_getInstance_6().get_TEN_18jk30_k$().pow_3xn4h6_k$(power));
      var divRem = thisPrepared.divrem_kdohd1_k$(other.significand_1);
      var result = divRem.get_quotient_ooukvo_k$();
      // Inline function 'kotlin.Long.minus' call
      var expectedDiff = other.precision_1.minus_mfbszm_k$(toLong(1));
      var exponentModifier = expectedDiff.plus_r93sks_k$(result.numberOfDecimalDigits_wouqvd_k$().minus_mfbszm_k$(thisPrepared.numberOfDecimalDigits_wouqvd_k$()));
      if (!divRem.get_remainder_mwecu4_k$().equals(Companion_getInstance_6().get_ZERO_wodlgx_k$())) {
        throw ArithmeticException_init_$Create$('Non-terminating result of division operation (i.e. 1/3 = 0.3333... library needs to know when to stop and how to round up at that point). Specify decimalPrecision inside your decimal mode.');
      }
      return new BigDecimal(result, newExponent.plus_r93sks_k$(exponentModifier), resolvedDecimalMode);
    } else {
      // Inline function 'kotlin.Long.minus' call
      var newExponent_0 = this.exponent_1.minus_mfbszm_k$(other.exponent_1).minus_mfbszm_k$(toLong(1));
      var desiredPrecision = resolvedDecimalMode.get_decimalPrecision_1lnz0q_k$();
      var power_0 = desiredPrecision.minus_mfbszm_k$(this.precision_1).plus_r93sks_k$(other.precision_1);
      var tmp;
      if (power_0.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
        tmp = this.significand_1.times_wzgsx4_k$(toBigInteger(10).pow_3xn4h6_k$(power_0));
      } else if (power_0.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
        var tmp_0 = toBigInteger(10);
        // Inline function 'kotlin.math.absoluteValue' call
        var tmp$ret$4 = abs(power_0);
        tmp = this.significand_1.div_7cbhfh_k$(tmp_0.pow_3xn4h6_k$(tmp$ret$4));
      } else {
        tmp = this.significand_1;
      }
      var thisPrepared_0 = tmp;
      var divRem_0 = thisPrepared_0.divrem_kdohd1_k$(other.significand_1);
      var result_0 = divRem_0.get_quotient_ooukvo_k$();
      if (result_0.equals(Companion_getInstance_6().get_ZERO_wodlgx_k$())) {
        newExponent_0 = newExponent_0.dec_24n6_k$();
      }
      var exponentModifier_0 = result_0.numberOfDecimalDigits_wouqvd_k$().minus_mfbszm_k$(resolvedDecimalMode.get_decimalPrecision_1lnz0q_k$());
      var tmp_1;
      if (this.usingScale_1) {
        tmp_1 = new BigDecimal(roundDiscarded(Companion_getInstance_4(), result_0, divRem_0.get_remainder_mwecu4_k$(), resolvedDecimalMode), newExponent_0.plus_r93sks_k$(exponentModifier_0), resolvedDecimalMode.copy$default_viwfyk_k$(result_0.numberOfDecimalDigits_wouqvd_k$()));
      } else {
        tmp_1 = new BigDecimal(roundDiscarded(Companion_getInstance_4(), result_0, divRem_0.get_remainder_mwecu4_k$(), resolvedDecimalMode), newExponent_0.plus_r93sks_k$(exponentModifier_0), resolvedDecimalMode);
      }
      return tmp_1;
    }
  };
  protoOf(BigDecimal).divide$default_5on8cx_k$ = function (other, decimalMode, $super) {
    decimalMode = decimalMode === VOID ? null : decimalMode;
    return $super === VOID ? this.divide_vx8k46_k$(other, decimalMode) : $super.divide_vx8k46_k$.call(this, other, decimalMode);
  };
  protoOf(BigDecimal).remainder_8lm3j7_k$ = function (other) {
    return this.divideAndRemainder_sn3zc5_k$(other).get_second_jf7fjx_k$();
  };
  protoOf(BigDecimal).remainder_xdfn55_k$ = function (other) {
    return this.remainder_8lm3j7_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  protoOf(BigDecimal).divideAndRemainder_sn3zc5_k$ = function (other) {
    if (this.exponent_1.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
      return new Pair(Companion_getInstance_4().ZERO_1, this);
    }
    if (other.abs_22cy_k$().compareTo_m610zm_k$(this.abs_22cy_k$()) > 0) {
      return new Pair(Companion_getInstance_4().ZERO_1, this);
    }
    var tmp0_safe_receiver = this.decimalMode_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$0 = this.exponent_1.plus_r93sks_k$(toLong(1));
      tmp = tmp0_safe_receiver.copy$default_viwfyk_k$(tmp$ret$0);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$1 = this.exponent_1.plus_r93sks_k$(toLong(1));
      tmp_0 = new DecimalMode(tmp$ret$1, RoundingMode_FLOOR_getInstance());
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var resolvedRoundingMode = tmp_0;
    var quotient = this.divide_vx8k46_k$(other, resolvedRoundingMode);
    var quotientInfinitePrecision = quotient.copy$default_qt3yf_k$(VOID, VOID, Companion_getInstance_5().get_DEFAULT_wccqmg_k$());
    var remainder = this.minus_89qnhu_k$(quotientInfinitePrecision.times_605tr0_k$(other));
    return new Pair(quotient, remainder);
  };
  protoOf(BigDecimal).divideAndRemainder_mqts87_k$ = function (other) {
    return this.divideAndRemainder_sn3zc5_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  protoOf(BigDecimal).isZero_jihrta_k$ = function () {
    return this.significand_1.isZero_jihrta_k$();
  };
  protoOf(BigDecimal).copy_ttrw7q_k$ = function (significand, exponent, decimalMode) {
    return new BigDecimal(significand, exponent, decimalMode);
  };
  protoOf(BigDecimal).copy$default_qt3yf_k$ = function (significand, exponent, decimalMode, $super) {
    significand = significand === VOID ? this.significand_1 : significand;
    exponent = exponent === VOID ? this.exponent_1 : exponent;
    decimalMode = decimalMode === VOID ? this.decimalMode_1 : decimalMode;
    return $super === VOID ? this.copy_ttrw7q_k$(significand, exponent, decimalMode) : $super.copy_ttrw7q_k$.call(this, significand, exponent, decimalMode);
  };
  protoOf(BigDecimal).moveDecimalPoint_tnt9uw_k$ = function (places) {
    if (places === 0) {
      return this;
    }
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0 = this.exponent_1.plus_r93sks_k$(toLong(places));
    return this.copy$default_qt3yf_k$(VOID, tmp$ret$0);
  };
  protoOf(BigDecimal).moveDecimalPoint_jegxtu_k$ = function (places) {
    if (places.equals(new Long(0, 0))) {
      return this;
    }
    return this.copy$default_qt3yf_k$(VOID, this.exponent_1.plus_r93sks_k$(places));
  };
  protoOf(BigDecimal).pow_iykav4_k$ = function (exponent) {
    return this.pow_3xn4h6_k$(toLong(exponent));
  };
  protoOf(BigDecimal).floor_1m2c5o_k$ = function () {
    if (this.exponent_1.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
      var tmp;
      switch (this.significand_1.get_sign_woubd2_k$().get_ordinal_ip24qg_k$()) {
        case 0:
          tmp = Companion_getInstance_4().ZERO_1;
          break;
        case 1:
          tmp = Companion_getInstance_4().ONE_1.negate_hcqk8u_k$();
          break;
        case 2:
          tmp = Companion_getInstance_4().ZERO_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    }
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0 = this.exponent_1.plus_r93sks_k$(toLong(1));
    return this.roundSignificand_epby2m_k$(new DecimalMode(tmp$ret$0, RoundingMode_FLOOR_getInstance()));
  };
  protoOf(BigDecimal).ceil_1td6t_k$ = function () {
    if (this.isZero_jihrta_k$()) {
      return Companion_getInstance_4().ZERO_1;
    }
    if (this.exponent_1.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
      var tmp;
      switch (this.significand_1.get_sign_woubd2_k$().get_ordinal_ip24qg_k$()) {
        case 0:
          tmp = Companion_getInstance_4().ONE_1;
          break;
        case 1:
          tmp = Companion_getInstance_4().ZERO_1;
          break;
        case 2:
          tmp = Companion_getInstance_4().ZERO_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    }
    // Inline function 'kotlin.Long.plus' call
    var tmp$ret$0 = this.exponent_1.plus_r93sks_k$(toLong(1));
    return this.roundSignificand_epby2m_k$(new DecimalMode(tmp$ret$0, RoundingMode_CEILING_getInstance()));
  };
  protoOf(BigDecimal).toBigInteger_xwiad5_k$ = function () {
    if (this.exponent_1.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
      return Companion_getInstance_6().get_ZERO_wodlgx_k$();
    }
    var precisionExponentDiff = this.exponent_1.minus_mfbszm_k$(this.precision_1);
    var tmp;
    if (precisionExponentDiff.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
      var tmp_0 = toBigInteger(10);
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$0 = precisionExponentDiff.plus_r93sks_k$(toLong(1));
      tmp = this.significand_1.times_wzgsx4_k$(tmp_0.pow_3xn4h6_k$(tmp$ret$0));
    } else if (precisionExponentDiff.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
      var tmp_1 = toBigInteger(10);
      // Inline function 'kotlin.Long.minus' call
      // Inline function 'kotlin.math.absoluteValue' call
      var tmp$ret$2 = abs(precisionExponentDiff).minus_mfbszm_k$(toLong(1));
      tmp = this.significand_1.div_7cbhfh_k$(tmp_1.pow_3xn4h6_k$(tmp$ret$2));
    } else {
      tmp = this.significand_1.times_kr2a3y_k$(10);
    }
    return tmp;
  };
  protoOf(BigDecimal).numberOfDecimalDigits_wouqvd_k$ = function () {
    var tmp;
    var containsUpper = this.precision_1;
    var containsArg = this.exponent_1;
    if ((new Long(1, 0)).compareTo_9jj042_k$(containsArg) <= 0 ? containsArg.compareTo_9jj042_k$(containsUpper) < 0 : false) {
      tmp = this.precision_1;
    } else {
      if (this.exponent_1.compareTo_9jj042_k$(new Long(0, 0)) > 0 ? this.exponent_1.compareTo_9jj042_k$(this.precision_1) > 0 : false) {
        // Inline function 'kotlin.Long.plus' call
        tmp = this.exponent_1.plus_r93sks_k$(toLong(1));
      } else {
        if (this.exponent_1.compareTo_9jj042_k$(new Long(0, 0)) > 0 ? this.exponent_1.equals(this.precision_1) : false) {
          // Inline function 'kotlin.Long.plus' call
          tmp = this.precision_1.plus_r93sks_k$(toLong(1));
        } else {
          if (this.exponent_1.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
            // Inline function 'kotlin.math.absoluteValue' call
            var this_0 = this.exponent_1;
            tmp = abs(this_0).plus_r93sks_k$(this.precision_1);
          } else {
            if (this.exponent_1.equals(new Long(0, 0))) {
              tmp = removeTrailingZeroes(this, this).precision_1;
            } else {
              throw RuntimeException_init_$Create$('Invalid case when getting number of decimal digits');
            }
          }
        }
      }
    }
    var numberOfDigits = tmp;
    return numberOfDigits;
  };
  protoOf(BigDecimal).toString_w4mr8s_k$ = function (base) {
    if (!(base === 10)) {
      throw RuntimeException_init_$Create$('BigDecimal in base other than 10 is not supported yet');
    }
    return this.toString();
  };
  protoOf(BigDecimal).divrem_hzbdbb_k$ = function (other) {
    return this.divideAndRemainder_sn3zc5_k$(other);
  };
  protoOf(BigDecimal).plus_ubj3so_k$ = function (other) {
    return this.add_t025w2_k$(other, computeMode(this, other, ScaleOps_Max_getInstance()));
  };
  protoOf(BigDecimal).plus_f4xvv8_k$ = function (other) {
    return this.plus_ubj3so_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  protoOf(BigDecimal).minus_89qnhu_k$ = function (other) {
    return this.subtract_xypt0b_k$(other, computeMode(this, other, ScaleOps_Max_getInstance()));
  };
  protoOf(BigDecimal).minus_e48fwe_k$ = function (other) {
    return this.minus_89qnhu_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  protoOf(BigDecimal).times_605tr0_k$ = function (other) {
    return this.multiply_65ct85_k$(other, computeMode(this, other, ScaleOps_Max_getInstance()));
  };
  protoOf(BigDecimal).times_wzgsx4_k$ = function (other) {
    return this.times_605tr0_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  protoOf(BigDecimal).div_gatsxd_k$ = function (other) {
    return this.divide_vx8k46_k$(other, computeMode(this, other, ScaleOps_Max_getInstance()));
  };
  protoOf(BigDecimal).div_7cbhfh_k$ = function (other) {
    return this.div_gatsxd_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  protoOf(BigDecimal).rem_5mbhmw_k$ = function (other) {
    return rem_4(this, other, null);
  };
  protoOf(BigDecimal).rem_rzdobw_k$ = function (other) {
    return this.rem_5mbhmw_k$(other instanceof BigDecimal ? other : THROW_CCE());
  };
  protoOf(BigDecimal).unaryMinus_6uz0qp_k$ = function () {
    return new BigDecimal(this.significand_1.negate_hcqk8u_k$(), this.exponent_1, this.decimalMode_1);
  };
  protoOf(BigDecimal).secureOverwrite_5au9ks_k$ = function () {
    this.significand_1.secureOverwrite_5au9ks_k$();
  };
  protoOf(BigDecimal).inc_28ke_k$ = function () {
    return this.plus_gv6ohq_k$(1);
  };
  protoOf(BigDecimal).dec_24n6_k$ = function () {
    return this.minus_vfk7ag_k$(1);
  };
  protoOf(BigDecimal).abs_22cy_k$ = function () {
    return new BigDecimal(this.significand_1.abs_22cy_k$(), this.exponent_1, this.decimalMode_1);
  };
  protoOf(BigDecimal).negate_hcqk8u_k$ = function () {
    return new BigDecimal(this.significand_1.negate_hcqk8u_k$(), this.exponent_1, this.decimalMode_1);
  };
  protoOf(BigDecimal).pow_3xn4h6_k$ = function (exponent) {
    if (this.equals(Companion_getInstance_4().ZERO_1) ? exponent.compareTo_9jj042_k$(new Long(0, 0)) < 0 : false) {
      throw ArithmeticException_init_$Create$('Negative exponentiation of zero is not defined.');
    }
    var result = this;
    var tmp;
    if (exponent.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
      var inductionVariable = new Long(0, 0);
      // Inline function 'kotlin.Long.minus' call
      var last = exponent.minus_mfbszm_k$(toLong(1));
      if (inductionVariable.compareTo_9jj042_k$(last) < 0)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable.plus_r93sks_k$(new Long(1, 0));
          result = result.times_605tr0_k$(this);
        }
         while (inductionVariable.compareTo_9jj042_k$(last) < 0);
      tmp = result;
    } else if (exponent.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
      if (exponent.equals(Companion_getInstance().get_MIN_VALUE_7nmmor_k$())) {
        var inductionVariable_0 = new Long(0, 0);
        var last_0 = Companion_getInstance().get_MAX_VALUE_54a9lf_k$();
        if (inductionVariable_0.compareTo_9jj042_k$(last_0) <= 0)
          do {
            var i_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0.plus_r93sks_k$(new Long(1, 0));
            result = result.div_gatsxd_k$(this);
          }
           while (!i_0.equals(last_0));
        result = result.div_gatsxd_k$(this);
      } else {
        var inductionVariable_1 = new Long(0, 0);
        // Inline function 'kotlin.math.absoluteValue' call
        var last_1 = abs(exponent);
        if (inductionVariable_1.compareTo_9jj042_k$(last_1) <= 0)
          do {
            var i_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1.plus_r93sks_k$(new Long(1, 0));
            result = result.div_gatsxd_k$(this);
          }
           while (!i_1.equals(last_1));
      }
      tmp = result;
    } else {
      tmp = Companion_getInstance_4().ONE_1;
    }
    return tmp;
  };
  protoOf(BigDecimal).signum_exb08b_k$ = function () {
    return this.significand_1.signum_exb08b_k$();
  };
  protoOf(BigDecimal).intValue_7o5gpp_k$ = function (exactRequired) {
    checkWholeness(this, exactRequired);
    return this.toBigInteger_xwiad5_k$().intValue_7o5gpp_k$(exactRequired);
  };
  protoOf(BigDecimal).longValue_919ii8_k$ = function (exactRequired) {
    checkWholeness(this, exactRequired);
    return this.toBigInteger_xwiad5_k$().longValue_919ii8_k$(exactRequired);
  };
  protoOf(BigDecimal).byteValue_eif72c_k$ = function (exactRequired) {
    checkWholeness(this, exactRequired);
    return this.toBigInteger_xwiad5_k$().byteValue_eif72c_k$(exactRequired);
  };
  protoOf(BigDecimal).shortValue_w04c9c_k$ = function (exactRequired) {
    checkWholeness(this, exactRequired);
    return this.toBigInteger_xwiad5_k$().shortValue_w04c9c_k$(exactRequired);
  };
  protoOf(BigDecimal).uintValue_8037ik_k$ = function (exactRequired) {
    checkWholeness(this, exactRequired);
    return this.toBigInteger_xwiad5_k$().uintValue_8037ik_k$(exactRequired);
  };
  protoOf(BigDecimal).ulongValue_759jq8_k$ = function (exactRequired) {
    checkWholeness(this, exactRequired);
    return this.toBigInteger_xwiad5_k$().ulongValue_759jq8_k$(exactRequired);
  };
  protoOf(BigDecimal).ubyteValue_v7eqw0_k$ = function (exactRequired) {
    checkWholeness(this, exactRequired);
    return this.toBigInteger_xwiad5_k$().ubyteValue_v7eqw0_k$(exactRequired);
  };
  protoOf(BigDecimal).ushortValue_epxg36_k$ = function (exactRequired) {
    checkWholeness(this, exactRequired);
    return this.toBigInteger_xwiad5_k$().ushortValue_epxg36_k$(exactRequired);
  };
  protoOf(BigDecimal).isWholeNumber_olkfca_k$ = function () {
    var res = this.abs_22cy_k$().divrem_hzbdbb_k$(Companion_getInstance_4().ONE_1);
    var isWholeNumber = res.get_second_jf7fjx_k$().isZero_jihrta_k$();
    return isWholeNumber;
  };
  protoOf(BigDecimal).floatValue_cm9a28_k$ = function (exactRequired) {
    if (exactRequired) {
      var exactPossible = true;
      if (this.exponent_1.compareTo_9jj042_k$(new Long(-45, -1)) < 0 ? true : this.exponent_1.compareTo_9jj042_k$(new Long(38, 0)) > 0) {
        exactPossible = false;
      }
      var tmp;
      // Inline function 'kotlin.Long.minus' call
      if (this.precision_1.minus_mfbszm_k$(this.exponent_1).minus_mfbszm_k$(toLong(1)).compareTo_9jj042_k$(new Long(0, 0)) > 0) {
        var tmp_0;
        if (this.exponent_1.compareTo_9jj042_k$(new Long(0, 0)) >= 0) {
          var tmp_1 = Companion_getInstance_6().get_TEN_18jk30_k$();
          // Inline function 'kotlin.Long.minus' call
          var tmp$ret$1 = this.precision_1.minus_mfbszm_k$(this.exponent_1).minus_mfbszm_k$(toLong(1));
          tmp_0 = this.significand_1.div_7cbhfh_k$(tmp_1.pow_3xn4h6_k$(tmp$ret$1));
        } else {
          tmp_0 = Companion_getInstance_6().get_ZERO_wodlgx_k$();
        }
        var integerPart = tmp_0;
        var integerPartBitLength = get_chosenArithmetic().bitLength_pgr2wb_k$(integerPart.get_magnitude_98l7vf_k$());
        var tmp_2 = Companion_getInstance_6().get_TEN_18jk30_k$();
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$2 = this.precision_1.minus_mfbszm_k$(this.exponent_1).minus_mfbszm_k$(toLong(1));
        var fractionPart = this.significand_1.divrem_kdohd1_k$(tmp_2.pow_3xn4h6_k$(tmp$ret$2)).get_remainder_mwecu4_k$();
        var fractionConvertTemp = new BigDecimal(fractionPart, new Long(-1, -1));
        // Inline function 'kotlin.collections.mutableListOf' call
        var bitList = ArrayList_init_$Create$();
        var counter = 0;
        while (!fractionConvertTemp.equals(Companion_getInstance_4().ZERO_1) ? counter <= 24 : false) {
          var multiplied = fractionConvertTemp.times_kr2a3y_k$(2);
          var tmp_3;
          if (multiplied.compareTo_m610zm_k$(Companion_getInstance_4().ONE_1) >= 0) {
            tmp_3 = 1;
          } else {
            tmp_3 = 0;
          }
          var bit = tmp_3;
          bitList.add_utx5q5_k$(bit);
          var tmp_4;
          if (bit === 1) {
            tmp_4 = multiplied.divrem_hzbdbb_k$(Companion_getInstance_4().TEN_1).get_second_jf7fjx_k$();
          } else {
            tmp_4 = multiplied;
          }
          fractionConvertTemp = tmp_4;
          counter = counter + 1 | 0;
        }
        var bitSum = integerPartBitLength + bitList.get_size_woubt6_k$() | 0;
        tmp = bitSum;
      } else {
        var trailingZeroBits = get_chosenArithmetic().trailingZeroBits_oa1zq6_k$(this.significand_1.get_magnitude_98l7vf_k$());
        var bitSum_0 = get_chosenArithmetic().bitLength_pgr2wb_k$(this.significand_1.get_magnitude_98l7vf_k$());
        tmp = bitSum_0 - trailingZeroBits | 0;
      }
      var totalBits = tmp;
      if (totalBits > 24) {
        exactPossible = false;
      }
      if (!exactPossible) {
        throw ArithmeticException_init_$Create$('Value cannot be narrowed to float');
      }
    }
    // Inline function 'kotlin.Long.minus' call
    var divExponent = this.precision_1.minus_mfbszm_k$(toLong(1)).minus_mfbszm_k$(this.exponent_1);
    var f = this.significand_1.longValue_919ii8_k$(exactRequired);
    var tmp_5;
    if (divExponent.compareTo_9jj042_k$(new Long(0, 0)) >= 0 ? divExponent.compareTo_9jj042_k$(toLong(Companion_getInstance_4().float10pow_1.length)) < 0 : false) {
      // Inline function 'kotlin.Long.div' call
      var other = Companion_getInstance_4().float10pow_1[divExponent.toInt_1tsl84_k$()];
      tmp_5 = f.toFloat_jhbgwv_k$() / other;
    } else {
      // Inline function 'kotlin.text.toFloat' call
      var this_0 = this.toString();
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_5 = toDouble(this_0);
    }
    return tmp_5;
  };
  protoOf(BigDecimal).doubleValue_uyt9c5_k$ = function (exactRequired) {
    if (exactRequired) {
      var exactPossible = true;
      if (this.exponent_1.compareTo_9jj042_k$(new Long(-324, -1)) < 0 ? true : this.exponent_1.compareTo_9jj042_k$(new Long(308, 0)) > 0) {
        exactPossible = false;
      }
      var tmp;
      // Inline function 'kotlin.Long.minus' call
      if (this.precision_1.minus_mfbszm_k$(this.exponent_1).minus_mfbszm_k$(toLong(1)).compareTo_9jj042_k$(new Long(0, 0)) > 0) {
        var tmp_0;
        if (this.exponent_1.compareTo_9jj042_k$(new Long(0, 0)) >= 0) {
          var tmp_1 = Companion_getInstance_6().get_TEN_18jk30_k$();
          // Inline function 'kotlin.Long.minus' call
          var tmp$ret$1 = this.precision_1.minus_mfbszm_k$(this.exponent_1).minus_mfbszm_k$(toLong(1));
          tmp_0 = this.significand_1.div_7cbhfh_k$(tmp_1.pow_3xn4h6_k$(tmp$ret$1));
        } else {
          tmp_0 = Companion_getInstance_6().get_ZERO_wodlgx_k$();
        }
        var integerPart = tmp_0;
        var integerPartBitLength = get_chosenArithmetic().bitLength_pgr2wb_k$(integerPart.get_magnitude_98l7vf_k$());
        var tmp_2 = Companion_getInstance_6().get_TEN_18jk30_k$();
        // Inline function 'kotlin.Long.minus' call
        var tmp$ret$2 = this.precision_1.minus_mfbszm_k$(this.exponent_1).minus_mfbszm_k$(toLong(1));
        var fractionPart = this.significand_1.divrem_kdohd1_k$(tmp_2.pow_3xn4h6_k$(tmp$ret$2)).get_remainder_mwecu4_k$();
        var fractionConvertTemp = new BigDecimal(fractionPart, new Long(-1, -1));
        // Inline function 'kotlin.collections.mutableListOf' call
        var bitList = ArrayList_init_$Create$();
        var counter = 0;
        while (!fractionConvertTemp.equals(Companion_getInstance_4().ZERO_1) ? counter <= 53 : false) {
          var multiplied = fractionConvertTemp.times_kr2a3y_k$(2);
          var tmp_3;
          if (multiplied.compareTo_m610zm_k$(Companion_getInstance_4().ONE_1) >= 0) {
            tmp_3 = 1;
          } else {
            tmp_3 = 0;
          }
          var bit = tmp_3;
          bitList.add_utx5q5_k$(bit);
          var tmp_4;
          if (bit === 1) {
            tmp_4 = multiplied.divrem_hzbdbb_k$(Companion_getInstance_4().TEN_1).get_second_jf7fjx_k$();
          } else {
            tmp_4 = multiplied;
          }
          fractionConvertTemp = tmp_4;
          counter = counter + 1 | 0;
        }
        var bitSum = integerPartBitLength + bitList.get_size_woubt6_k$() | 0;
        tmp = bitSum;
      } else {
        var trailingZeroBits = get_chosenArithmetic().trailingZeroBits_oa1zq6_k$(this.significand_1.get_magnitude_98l7vf_k$());
        var bitSum_0 = get_chosenArithmetic().bitLength_pgr2wb_k$(this.significand_1.get_magnitude_98l7vf_k$());
        tmp = bitSum_0 - trailingZeroBits | 0;
      }
      var totalBits = tmp;
      if (totalBits > 53) {
        exactPossible = false;
      }
      if (!exactPossible) {
        throw ArithmeticException_init_$Create$('Value cannot be narrowed to float');
      }
    }
    // Inline function 'kotlin.Long.minus' call
    var divExponent = this.precision_1.minus_mfbszm_k$(toLong(1)).minus_mfbszm_k$(this.exponent_1);
    var l = this.significand_1.longValue_919ii8_k$(exactRequired);
    if (this.significand_1.compareTo_m610zm_k$(Companion_getInstance().get_MAX_VALUE_54a9lf_k$()) > 0 ? true : this.significand_1.compareTo_m610zm_k$(Companion_getInstance().get_MIN_VALUE_7nmmor_k$()) < 0) {
      return toDouble(this.toString());
    }
    var tmp_5;
    if ((numberToLong(l.toDouble_ygsx0s_k$()).equals(l) ? divExponent.compareTo_9jj042_k$(new Long(0, 0)) >= 0 : false) ? divExponent.compareTo_9jj042_k$(toLong(Companion_getInstance_4().double10pow_1.length)) < 0 : false) {
      // Inline function 'kotlin.Long.div' call
      var other = Companion_getInstance_4().double10pow_1[divExponent.toInt_1tsl84_k$()];
      tmp_5 = l.toDouble_ygsx0s_k$() / other;
    } else {
      tmp_5 = toDouble(this.toString());
    }
    return tmp_5;
  };
  protoOf(BigDecimal).roundSignificand_epby2m_k$ = function (decimalMode) {
    if (decimalMode == null) {
      return this;
    }
    return roundSignificand(Companion_getInstance_4(), this.significand_1, this.exponent_1, decimalMode);
  };
  protoOf(BigDecimal).roundToDigitPosition_kbp9g5_k$ = function (digitPosition, roundingMode) {
    if (digitPosition.equals(new Long(0, 0))) {
      throw ArithmeticException_init_$Create$('Rounding to 0 position is not supported');
    }
    var tmp;
    if (this.exponent_1.compareTo_9jj042_k$(new Long(0, 0)) >= 0) {
      tmp = this.roundSignificand_epby2m_k$(new DecimalMode(digitPosition, roundingMode));
    } else {
      tmp = this.plus_gv6ohq_k$(this.signum_exb08b_k$()).roundSignificand_epby2m_k$(new DecimalMode(digitPosition, roundingMode)).minus_vfk7ag_k$(this.signum_exb08b_k$());
    }
    var rounded = tmp;
    var tmp_0;
    if (this.decimalMode_1 == null) {
      tmp_0 = new BigDecimal(rounded.significand_1, rounded.exponent_1);
    } else {
      tmp_0 = new BigDecimal(rounded.significand_1, rounded.exponent_1, this.decimalMode_1);
    }
    return tmp_0;
  };
  protoOf(BigDecimal).roundToDigitPosition$default_prwsyo_k$ = function (digitPosition, roundingMode, $super) {
    roundingMode = roundingMode === VOID ? this.roundingMode_1 : roundingMode;
    return $super === VOID ? this.roundToDigitPosition_kbp9g5_k$(digitPosition, roundingMode) : $super.roundToDigitPosition_kbp9g5_k$.call(this, digitPosition, roundingMode);
  };
  protoOf(BigDecimal).roundToDigitPositionAfterDecimalPoint_9ie4uk_k$ = function (digitPosition, roundingMode) {
    if (digitPosition.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
      throw ArithmeticException_init_$Create$("This method doesn't support negative digit position");
    }
    var tmp;
    if (this.exponent_1.compareTo_9jj042_k$(new Long(0, 0)) >= 0) {
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$0 = this.exponent_1.plus_r93sks_k$(digitPosition).plus_r93sks_k$(toLong(1));
      tmp = this.roundToDigitPosition_kbp9g5_k$(tmp$ret$0, roundingMode);
    } else if (this.exponent_1.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$1 = digitPosition.plus_r93sks_k$(toLong(1));
      tmp = this.roundToDigitPosition_kbp9g5_k$(tmp$ret$1, roundingMode);
    } else {
      throw RuntimeException_init_$Create$('Unexpected state');
    }
    var rounded = tmp;
    var tmp_0;
    if (this.decimalMode_1 == null) {
      tmp_0 = new BigDecimal(rounded.significand_1, rounded.exponent_1);
    } else {
      tmp_0 = new BigDecimal(rounded.significand_1, rounded.exponent_1, this.decimalMode_1);
    }
    return tmp_0;
  };
  protoOf(BigDecimal).compare_8w8nxf_k$ = function (other) {
    var tmp;
    if (this.exponent_1.equals(other.exponent_1) ? this.precision_1.equals(other.precision_1) : false) {
      tmp = this.significand_1.compare_ivkmfz_k$(other.significand_1);
    } else {
      var tmp0_container = bringSignificandToSameExponent(this, this, other);
      var preparedFirst = tmp0_container.component1_7eebsc_k$();
      var preparedSecond = tmp0_container.component2_7eebsb_k$();
      tmp = preparedFirst.compare_ivkmfz_k$(preparedSecond);
    }
    return tmp;
  };
  protoOf(BigDecimal).compareTo_m610zm_k$ = function (other) {
    if (isNumber(other)) {
      if (RuntimePlatform_getInstance().currentPlatform_2rav3o_k$().equals(Platform_JS_getInstance())) {
        return javascriptNumberComparison(this, other);
      }
    }
    var tmp;
    if (other instanceof BigDecimal) {
      tmp = this.compare_8w8nxf_k$(other);
    } else {
      if (other instanceof Long) {
        tmp = this.compare_8w8nxf_k$(Companion_getInstance_4().fromLong_rbvu5k_k$(other));
      } else {
        if (typeof other === 'number') {
          tmp = this.compare_8w8nxf_k$(Companion_getInstance_4().fromInt_wjro43_k$(other));
        } else {
          if (typeof other === 'number') {
            tmp = this.compare_8w8nxf_k$(Companion_getInstance_4().fromShort_qmrdxi_k$(other));
          } else {
            if (typeof other === 'number') {
              tmp = this.compare_8w8nxf_k$(Companion_getInstance_4().fromByte_i1k4na_k$(other));
            } else {
              if (typeof other === 'number') {
                tmp = this.compare_8w8nxf_k$(Companion_getInstance_4().fromDouble$default_4guygt_k$(other));
              } else {
                if (typeof other === 'number') {
                  tmp = this.compare_8w8nxf_k$(Companion_getInstance_4().fromFloat$default_ur40zs_k$(other));
                } else {
                  throw RuntimeException_init_$Create$('Invalid comparison type for BigDecimal: ' + getKClassFromExpression(other).get_simpleName_r6f8py_k$());
                }
              }
            }
          }
        }
      }
    }
    return tmp;
  };
  protoOf(BigDecimal).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_m610zm_k$(!(other == null) ? other : THROW_CCE());
  };
  protoOf(BigDecimal).equals = function (other) {
    var tmp;
    if (other instanceof BigDecimal) {
      tmp = this.compare_8w8nxf_k$(other);
    } else {
      if (other instanceof Long) {
        tmp = this.compare_8w8nxf_k$(Companion_getInstance_4().fromLong_rbvu5k_k$(other));
      } else {
        if (!(other == null) ? typeof other === 'number' : false) {
          tmp = this.compare_8w8nxf_k$(Companion_getInstance_4().fromInt_wjro43_k$(other));
        } else {
          if (!(other == null) ? typeof other === 'number' : false) {
            tmp = this.compare_8w8nxf_k$(Companion_getInstance_4().fromShort_qmrdxi_k$(other));
          } else {
            if (!(other == null) ? typeof other === 'number' : false) {
              tmp = this.compare_8w8nxf_k$(Companion_getInstance_4().fromByte_i1k4na_k$(other));
            } else {
              if (!(other == null) ? typeof other === 'number' : false) {
                tmp = this.compare_8w8nxf_k$(Companion_getInstance_4().fromDouble$default_4guygt_k$(other));
              } else {
                if (!(other == null) ? typeof other === 'number' : false) {
                  tmp = this.compare_8w8nxf_k$(Companion_getInstance_4().fromFloat$default_ur40zs_k$(other));
                } else {
                  tmp = -1;
                }
              }
            }
          }
        }
      }
    }
    var comparison = tmp;
    return comparison === 0;
  };
  protoOf(BigDecimal).hashCode = function () {
    if (this.equals(Companion_getInstance_4().ZERO_1)) {
      return 0;
    }
    return removeTrailingZeroes(this, this).significand_1.hashCode() + this.exponent_1.hashCode() | 0;
  };
  protoOf(BigDecimal).toString = function () {
    if (Companion_getInstance_4().useToStringExpanded_1) {
      return this.toStringExpanded_bbeedh_k$();
    }
    var significandString = this.significand_1.toString_w4mr8s_k$(10);
    var tmp;
    if (this.significand_1.compareTo_m610zm_k$(0) < 0) {
      tmp = 2;
    } else {
      tmp = 1;
    }
    var modifier = tmp;
    var tmp_0;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.text.dropLastWhile' call
      var this_0 = this.significand_1.toString();
      var inductionVariable = get_lastIndex(this_0);
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'com.ionspin.kotlin.bignum.decimal.BigDecimal.toString.<anonymous>' call
          if (!(charSequenceGet(this_0, index) === _Char___init__impl__6a9atx(48))) {
            // Inline function 'kotlin.text.substring' call
            var endIndex = index + 1 | 0;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$3 = this_0.substring(0, endIndex);
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$3 = '';
    }
    if (tmp$ret$3.length <= 1) {
      tmp_0 = '0';
    } else {
      tmp_0 = '';
    }
    var expand = tmp_0;
    var tmp_1;
    if (this.exponent_1.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
      tmp_1 = placeADotInString(this, significandString, significandString.length - modifier | 0) + expand + 'E+' + this.exponent_1.toString();
    } else if (this.exponent_1.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
      tmp_1 = placeADotInString(this, significandString, significandString.length - modifier | 0) + expand + 'E' + this.exponent_1.toString();
    } else if (this.exponent_1.equals(new Long(0, 0))) {
      tmp_1 = placeADotInString(this, significandString, significandString.length - modifier | 0) + expand;
    } else {
      throw RuntimeException_init_$Create$('Invalid state, please report a bug (Integer compareTo invalid)');
    }
    return tmp_1;
  };
  protoOf(BigDecimal).toPlainString_6qmubk_k$ = function () {
    var expandedString = this.toStringExpanded_bbeedh_k$();
    var tmp;
    if (this.usingScale_1 ? this.scale_1.compareTo_9jj042_k$(new Long(0, 0)) > 0 : false) {
      var split = split_0(expandedString, ['.']);
      var tmp_0;
      if (split.get_size_woubt6_k$() === 1) {
        tmp_0 = expandedString + '.' + times_4(_Char___init__impl__6a9atx(48), this.scale_1);
      } else {
        // Inline function 'kotlin.Long.minus' call
        var this_0 = this.scale_1;
        var other = split.get_c1px32_k$(1).length;
        var missingZeroCount = this_0.minus_mfbszm_k$(toLong(other));
        var tmp_1;
        if (missingZeroCount.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
          tmp_1 = expandedString + times_4(_Char___init__impl__6a9atx(48), missingZeroCount);
        } else {
          tmp_1 = expandedString;
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else {
      tmp = expandedString;
    }
    var finalString = tmp;
    return finalString;
  };
  protoOf(BigDecimal).toStringExpanded_bbeedh_k$ = function () {
    if (this.equals(Companion_getInstance_4().ZERO_1)) {
      return '0';
    }
    var digits = this.significand_1.numberOfDecimalDigits_wouqvd_k$();
    if (this.exponent_1.compareTo_9jj042_k$(toLong(IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$())) > 0) {
      throw RuntimeException_init_$Create$('Invalid toStringExpanded request (exponent > Int.MAX_VALUE)');
    }
    var significandString = this.significand_1.toStringWithoutSign_ueumcf_k$(10);
    var tmp;
    if (this.significand_1.get_sign_woubd2_k$().equals(Sign_NEGATIVE_getInstance())) {
      tmp = '-';
    } else {
      tmp = '';
    }
    var sign = tmp;
    var tmp_0;
    if (this.exponent_1.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
      // Inline function 'kotlin.Long.plus' call
      var diffBigInt = this.exponent_1.minus_mfbszm_k$(digits).plus_r93sks_k$(toLong(1));
      var tmp_1;
      if (diffBigInt.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
        var expandZeros = this.times_yb71bh_k$(diffBigInt, _Char___init__impl__6a9atx(48));
        tmp_1 = significandString + expandZeros;
      } else {
        tmp_1 = placeADotInStringExpanded(this, significandString, (significandString.length - this.exponent_1.toInt_1tsl84_k$() | 0) - 1 | 0);
      }
      tmp_0 = tmp_1;
    } else if (this.exponent_1.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
      // Inline function 'kotlin.math.absoluteValue' call
      var this_0 = this.exponent_1.toInt_1tsl84_k$();
      var diffInt = abs_0(this_0);
      var tmp_2;
      if (diffInt > 0) {
        // Inline function 'kotlin.math.absoluteValue' call
        var this_1 = this.exponent_1;
        var tmp$ret$2 = abs(this_1);
        var expandZeros_0 = this.times_yb71bh_k$(tmp$ret$2, _Char___init__impl__6a9atx(48));
        tmp_2 = placeADotInStringExpanded(this, expandZeros_0 + significandString, (diffInt + significandString.length | 0) - 1 | 0);
      } else {
        tmp_2 = placeADotInStringExpanded(this, significandString, significandString.length - 1 | 0);
      }
      tmp_0 = tmp_2;
    } else if (this.exponent_1.equals(new Long(0, 0))) {
      if (digits.equals(new Long(1, 0))) {
        return sign + significandString;
      }
      tmp_0 = placeADotInStringExpanded(this, significandString, significandString.length - 1 | 0);
    } else {
      throw RuntimeException_init_$Create$('Invalid state, please report a bug (Integer compareTo invalid)');
    }
    var adjusted = tmp_0;
    return sign + adjusted;
  };
  protoOf(BigDecimal).times_yb71bh_k$ = function (_this__u8e3s4, char) {
    if (_this__u8e3s4.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
      throw RuntimeException_init_$Create$('Char cannot be multiplied with negative number');
    }
    var counter = _this__u8e3s4;
    var stringBuilder = StringBuilder_init_$Create$();
    while (counter.compareTo_9jj042_k$(new Long(0, 0)) > 0) {
      stringBuilder.append_am5a4z_k$(char);
      counter = counter.dec_24n6_k$();
    }
    return stringBuilder.toString();
  };
  function toBigDecimal(_this__u8e3s4, exponentModifier, decimalMode) {
    exponentModifier = exponentModifier === VOID ? null : exponentModifier;
    decimalMode = decimalMode === VOID ? null : decimalMode;
    var tmp = Companion_getInstance_4().fromDouble_vfrbvc_k$(_this__u8e3s4, decimalMode);
    return tmp.moveDecimalPoint_jegxtu_k$(exponentModifier == null ? new Long(0, 0) : exponentModifier);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.DEFAULT_1 = new DecimalMode();
    this.US_CURRENCY_1 = new DecimalMode(new Long(30, 0), RoundingMode_ROUND_HALF_AWAY_FROM_ZERO_getInstance(), new Long(2, 0));
  }
  protoOf(Companion_0).get_DEFAULT_wccqmg_k$ = function () {
    return this.DEFAULT_1;
  };
  protoOf(Companion_0).get_US_CURRENCY_c94pwp_k$ = function () {
    return this.US_CURRENCY_1;
  };
  var Companion_instance_0;
  function Companion_getInstance_5() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function DecimalMode(decimalPrecision, roundingMode, scale) {
    Companion_getInstance_5();
    decimalPrecision = decimalPrecision === VOID ? new Long(0, 0) : decimalPrecision;
    roundingMode = roundingMode === VOID ? RoundingMode_NONE_getInstance() : roundingMode;
    scale = scale === VOID ? new Long(-1, -1) : scale;
    this.decimalPrecision_1 = decimalPrecision;
    this.roundingMode_1 = roundingMode;
    this.scale_1 = scale;
    if (this.decimalPrecision_1.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
      throw ArithmeticException_init_$Create$('Negative decimal precision is not allowed.');
    }
    this.isPrecisionUnlimited_1 = this.decimalPrecision_1.equals(new Long(0, 0));
    this.usingScale_1 = this.scale_1.compareTo_9jj042_k$(new Long(0, 0)) >= 0;
    if ((!this.usingScale_1 ? this.decimalPrecision_1.equals(new Long(0, 0)) : false) ? !this.roundingMode_1.equals(RoundingMode_NONE_getInstance()) : false) {
      throw ArithmeticException_init_$Create$('Rounding mode with 0 digits precision.');
    }
    if (this.scale_1.compareTo_9jj042_k$(new Long(-1, -1)) < 0) {
      throw ArithmeticException_init_$Create$('Negative Scale is unsupported.');
    }
    if (this.usingScale_1 ? this.roundingMode_1.equals(RoundingMode_NONE_getInstance()) : false) {
      throw ArithmeticException_init_$Create$('Scale of ' + this.scale_1.toString() + ' digits to the right of the decimal requires a RoundingMode that is not NONE.');
    }
  }
  protoOf(DecimalMode).get_decimalPrecision_1lnz0q_k$ = function () {
    return this.decimalPrecision_1;
  };
  protoOf(DecimalMode).get_roundingMode_uxzxk0_k$ = function () {
    return this.roundingMode_1;
  };
  protoOf(DecimalMode).get_scale_iyf28x_k$ = function () {
    return this.scale_1;
  };
  protoOf(DecimalMode).get_isPrecisionUnlimited_ayf8d2_k$ = function () {
    return this.isPrecisionUnlimited_1;
  };
  protoOf(DecimalMode).get_usingScale_nxygf_k$ = function () {
    return this.usingScale_1;
  };
  protoOf(DecimalMode).component1_7eebsc_k$ = function () {
    return this.decimalPrecision_1;
  };
  protoOf(DecimalMode).component2_7eebsb_k$ = function () {
    return this.roundingMode_1;
  };
  protoOf(DecimalMode).component3_7eebsa_k$ = function () {
    return this.scale_1;
  };
  protoOf(DecimalMode).copy_ytao5h_k$ = function (decimalPrecision, roundingMode, scale) {
    return new DecimalMode(decimalPrecision, roundingMode, scale);
  };
  protoOf(DecimalMode).copy$default_viwfyk_k$ = function (decimalPrecision, roundingMode, scale, $super) {
    decimalPrecision = decimalPrecision === VOID ? this.decimalPrecision_1 : decimalPrecision;
    roundingMode = roundingMode === VOID ? this.roundingMode_1 : roundingMode;
    scale = scale === VOID ? this.scale_1 : scale;
    return $super === VOID ? this.copy_ytao5h_k$(decimalPrecision, roundingMode, scale) : $super.copy_ytao5h_k$.call(this, decimalPrecision, roundingMode, scale);
  };
  protoOf(DecimalMode).toString = function () {
    return 'DecimalMode(decimalPrecision=' + this.decimalPrecision_1.toString() + ', roundingMode=' + this.roundingMode_1 + ', scale=' + this.scale_1.toString() + ')';
  };
  protoOf(DecimalMode).hashCode = function () {
    var result = this.decimalPrecision_1.hashCode();
    result = imul(result, 31) + this.roundingMode_1.hashCode() | 0;
    result = imul(result, 31) + this.scale_1.hashCode() | 0;
    return result;
  };
  protoOf(DecimalMode).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DecimalMode))
      return false;
    var tmp0_other_with_cast = other instanceof DecimalMode ? other : THROW_CCE();
    if (!this.decimalPrecision_1.equals(tmp0_other_with_cast.decimalPrecision_1))
      return false;
    if (!this.roundingMode_1.equals(tmp0_other_with_cast.roundingMode_1))
      return false;
    if (!this.scale_1.equals(tmp0_other_with_cast.scale_1))
      return false;
    return true;
  };
  var RoundingMode_FLOOR_instance;
  var RoundingMode_CEILING_instance;
  var RoundingMode_AWAY_FROM_ZERO_instance;
  var RoundingMode_TOWARDS_ZERO_instance;
  var RoundingMode_NONE_instance;
  var RoundingMode_ROUND_HALF_AWAY_FROM_ZERO_instance;
  var RoundingMode_ROUND_HALF_TOWARDS_ZERO_instance;
  var RoundingMode_ROUND_HALF_CEILING_instance;
  var RoundingMode_ROUND_HALF_FLOOR_instance;
  var RoundingMode_ROUND_HALF_TO_EVEN_instance;
  var RoundingMode_ROUND_HALF_TO_ODD_instance;
  function values_2() {
    return [RoundingMode_FLOOR_getInstance(), RoundingMode_CEILING_getInstance(), RoundingMode_AWAY_FROM_ZERO_getInstance(), RoundingMode_TOWARDS_ZERO_getInstance(), RoundingMode_NONE_getInstance(), RoundingMode_ROUND_HALF_AWAY_FROM_ZERO_getInstance(), RoundingMode_ROUND_HALF_TOWARDS_ZERO_getInstance(), RoundingMode_ROUND_HALF_CEILING_getInstance(), RoundingMode_ROUND_HALF_FLOOR_getInstance(), RoundingMode_ROUND_HALF_TO_EVEN_getInstance(), RoundingMode_ROUND_HALF_TO_ODD_getInstance()];
  }
  function valueOf_2(value) {
    switch (value) {
      case 'FLOOR':
        return RoundingMode_FLOOR_getInstance();
      case 'CEILING':
        return RoundingMode_CEILING_getInstance();
      case 'AWAY_FROM_ZERO':
        return RoundingMode_AWAY_FROM_ZERO_getInstance();
      case 'TOWARDS_ZERO':
        return RoundingMode_TOWARDS_ZERO_getInstance();
      case 'NONE':
        return RoundingMode_NONE_getInstance();
      case 'ROUND_HALF_AWAY_FROM_ZERO':
        return RoundingMode_ROUND_HALF_AWAY_FROM_ZERO_getInstance();
      case 'ROUND_HALF_TOWARDS_ZERO':
        return RoundingMode_ROUND_HALF_TOWARDS_ZERO_getInstance();
      case 'ROUND_HALF_CEILING':
        return RoundingMode_ROUND_HALF_CEILING_getInstance();
      case 'ROUND_HALF_FLOOR':
        return RoundingMode_ROUND_HALF_FLOOR_getInstance();
      case 'ROUND_HALF_TO_EVEN':
        return RoundingMode_ROUND_HALF_TO_EVEN_getInstance();
      case 'ROUND_HALF_TO_ODD':
        return RoundingMode_ROUND_HALF_TO_ODD_getInstance();
      default:
        RoundingMode_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var RoundingMode_entriesInitialized;
  function RoundingMode_initEntries() {
    if (RoundingMode_entriesInitialized)
      return Unit_getInstance();
    RoundingMode_entriesInitialized = true;
    RoundingMode_FLOOR_instance = new RoundingMode('FLOOR', 0);
    RoundingMode_CEILING_instance = new RoundingMode('CEILING', 1);
    RoundingMode_AWAY_FROM_ZERO_instance = new RoundingMode('AWAY_FROM_ZERO', 2);
    RoundingMode_TOWARDS_ZERO_instance = new RoundingMode('TOWARDS_ZERO', 3);
    RoundingMode_NONE_instance = new RoundingMode('NONE', 4);
    RoundingMode_ROUND_HALF_AWAY_FROM_ZERO_instance = new RoundingMode('ROUND_HALF_AWAY_FROM_ZERO', 5);
    RoundingMode_ROUND_HALF_TOWARDS_ZERO_instance = new RoundingMode('ROUND_HALF_TOWARDS_ZERO', 6);
    RoundingMode_ROUND_HALF_CEILING_instance = new RoundingMode('ROUND_HALF_CEILING', 7);
    RoundingMode_ROUND_HALF_FLOOR_instance = new RoundingMode('ROUND_HALF_FLOOR', 8);
    RoundingMode_ROUND_HALF_TO_EVEN_instance = new RoundingMode('ROUND_HALF_TO_EVEN', 9);
    RoundingMode_ROUND_HALF_TO_ODD_instance = new RoundingMode('ROUND_HALF_TO_ODD', 10);
  }
  function RoundingMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RoundingMode_FLOOR_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_FLOOR_instance;
  }
  function RoundingMode_CEILING_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_CEILING_instance;
  }
  function RoundingMode_AWAY_FROM_ZERO_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_AWAY_FROM_ZERO_instance;
  }
  function RoundingMode_TOWARDS_ZERO_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_TOWARDS_ZERO_instance;
  }
  function RoundingMode_NONE_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_NONE_instance;
  }
  function RoundingMode_ROUND_HALF_AWAY_FROM_ZERO_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_ROUND_HALF_AWAY_FROM_ZERO_instance;
  }
  function RoundingMode_ROUND_HALF_TOWARDS_ZERO_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_ROUND_HALF_TOWARDS_ZERO_instance;
  }
  function RoundingMode_ROUND_HALF_CEILING_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_ROUND_HALF_CEILING_instance;
  }
  function RoundingMode_ROUND_HALF_FLOOR_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_ROUND_HALF_FLOOR_instance;
  }
  function RoundingMode_ROUND_HALF_TO_EVEN_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_ROUND_HALF_TO_EVEN_instance;
  }
  function RoundingMode_ROUND_HALF_TO_ODD_getInstance() {
    RoundingMode_initEntries();
    return RoundingMode_ROUND_HALF_TO_ODD_instance;
  }
  function _get_arithmetic__88c6an($this) {
    return $this.arithmetic_1;
  }
  function _get_endInclusive__c3dm3e($this) {
    return $this.endInclusive_1;
  }
  function _set_current__qj3kk($this, _set____db54di) {
    $this.current_1 = _set____db54di;
  }
  function _get_current__qcrdxk($this) {
    return $this.current_1;
  }
  function BigInteger_init_$Init$(long, $this) {
    var tmp = Companion_getInstance_6().arithmetic_1.fromLong_ovick_k$(long);
    // Inline function 'com.ionspin.kotlin.bignum.integer.Companion.determinSignFromNumber' call
    Companion_getInstance_6();
    var tmp0_subject = getKClass(Long);
    var tmp_0;
    if (tmp0_subject.equals(getKClass(Long))) {
      if (!(long instanceof Long))
        THROW_CCE();
      tmp_0 = long.compareTo_9jj042_k$(new Long(0, 0)) < 0 ? Sign_NEGATIVE_getInstance() : long.compareTo_9jj042_k$(new Long(0, 0)) > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      if (typeof long !== 'number')
        THROW_CCE();
      tmp_0 = long < 0 ? Sign_NEGATIVE_getInstance() : long > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      if (typeof long !== 'number')
        THROW_CCE();
      tmp_0 = long < 0 ? Sign_NEGATIVE_getInstance() : long > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      if (typeof long !== 'number')
        THROW_CCE();
      tmp_0 = long < 0 ? Sign_NEGATIVE_getInstance() : long > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else {
      throw RuntimeException_init_$Create$('Unsupported type ' + getKClass(Long));
    }
    var tmp$ret$0 = tmp_0;
    BigInteger.call($this, tmp, tmp$ret$0);
    return $this;
  }
  function BigInteger_init_$Create$(long) {
    return BigInteger_init_$Init$(long, objectCreate(protoOf(BigInteger)));
  }
  function BigInteger_init_$Init$_0(int, $this) {
    var tmp = Companion_getInstance_6().arithmetic_1.fromInt_npyrg9_k$(int);
    // Inline function 'com.ionspin.kotlin.bignum.integer.Companion.determinSignFromNumber' call
    Companion_getInstance_6();
    var tmp0_subject = PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$();
    var tmp_0;
    if (tmp0_subject.equals(getKClass(Long))) {
      if (!(int instanceof Long))
        THROW_CCE();
      tmp_0 = int.compareTo_9jj042_k$(new Long(0, 0)) < 0 ? Sign_NEGATIVE_getInstance() : int.compareTo_9jj042_k$(new Long(0, 0)) > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      if (typeof int !== 'number')
        THROW_CCE();
      tmp_0 = int < 0 ? Sign_NEGATIVE_getInstance() : int > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      if (typeof int !== 'number')
        THROW_CCE();
      tmp_0 = int < 0 ? Sign_NEGATIVE_getInstance() : int > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      if (typeof int !== 'number')
        THROW_CCE();
      tmp_0 = int < 0 ? Sign_NEGATIVE_getInstance() : int > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else {
      throw RuntimeException_init_$Create$('Unsupported type ' + PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$());
    }
    var tmp$ret$0 = tmp_0;
    BigInteger.call($this, tmp, tmp$ret$0);
    return $this;
  }
  function BigInteger_init_$Create$_0(int) {
    return BigInteger_init_$Init$_0(int, objectCreate(protoOf(BigInteger)));
  }
  function BigInteger_init_$Init$_1(short, $this) {
    var tmp = Companion_getInstance_6().arithmetic_1.fromShort_29lh2y_k$(short);
    // Inline function 'com.ionspin.kotlin.bignum.integer.Companion.determinSignFromNumber' call
    Companion_getInstance_6();
    var tmp0_subject = PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$();
    var tmp_0;
    if (tmp0_subject.equals(getKClass(Long))) {
      if (!(short instanceof Long))
        THROW_CCE();
      tmp_0 = short.compareTo_9jj042_k$(new Long(0, 0)) < 0 ? Sign_NEGATIVE_getInstance() : short.compareTo_9jj042_k$(new Long(0, 0)) > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      if (typeof short !== 'number')
        THROW_CCE();
      tmp_0 = short < 0 ? Sign_NEGATIVE_getInstance() : short > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      if (typeof short !== 'number')
        THROW_CCE();
      tmp_0 = short < 0 ? Sign_NEGATIVE_getInstance() : short > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      if (typeof short !== 'number')
        THROW_CCE();
      tmp_0 = short < 0 ? Sign_NEGATIVE_getInstance() : short > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else {
      throw RuntimeException_init_$Create$('Unsupported type ' + PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$());
    }
    var tmp$ret$0 = tmp_0;
    BigInteger.call($this, tmp, tmp$ret$0);
    return $this;
  }
  function BigInteger_init_$Create$_1(short) {
    return BigInteger_init_$Init$_1(short, objectCreate(protoOf(BigInteger)));
  }
  function BigInteger_init_$Init$_2(byte, $this) {
    var tmp = Companion_getInstance_6().arithmetic_1.fromByte_6nm3ne_k$(byte);
    // Inline function 'com.ionspin.kotlin.bignum.integer.Companion.determinSignFromNumber' call
    Companion_getInstance_6();
    var tmp0_subject = PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$();
    var tmp_0;
    if (tmp0_subject.equals(getKClass(Long))) {
      if (!(byte instanceof Long))
        THROW_CCE();
      tmp_0 = byte.compareTo_9jj042_k$(new Long(0, 0)) < 0 ? Sign_NEGATIVE_getInstance() : byte.compareTo_9jj042_k$(new Long(0, 0)) > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_intClass_mw4y9a_k$())) {
      if (typeof byte !== 'number')
        THROW_CCE();
      tmp_0 = byte < 0 ? Sign_NEGATIVE_getInstance() : byte > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_shortClass_5ajsv9_k$())) {
      if (typeof byte !== 'number')
        THROW_CCE();
      tmp_0 = byte < 0 ? Sign_NEGATIVE_getInstance() : byte > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else if (tmp0_subject.equals(PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$())) {
      if (typeof byte !== 'number')
        THROW_CCE();
      tmp_0 = byte < 0 ? Sign_NEGATIVE_getInstance() : byte > 0 ? Sign_POSITIVE_getInstance() : Sign_ZERO_getInstance();
    } else {
      throw RuntimeException_init_$Create$('Unsupported type ' + PrimitiveClasses_getInstance().get_byteClass_pu7s61_k$());
    }
    var tmp$ret$0 = tmp_0;
    BigInteger.call($this, tmp, tmp$ret$0);
    return $this;
  }
  function BigInteger_init_$Create$_2(byte) {
    return BigInteger_init_$Init$_2(byte, objectCreate(protoOf(BigInteger)));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.arithmetic_1 = get_chosenArithmetic();
    this.ZERO_1 = new BigInteger(this.arithmetic_1.get_ZERO_e9sg11_k$(), Sign_ZERO_getInstance());
    this.ONE_1 = new BigInteger(this.arithmetic_1.get_ONE_er0101_k$(), Sign_POSITIVE_getInstance());
    this.TWO_1 = new BigInteger(this.arithmetic_1.get_TWO_w5qidl_k$(), Sign_POSITIVE_getInstance());
    this.TEN_1 = new BigInteger(this.arithmetic_1.get_TEN_wsqrg8_k$(), Sign_POSITIVE_getInstance());
    var tmp = this;
    // Inline function 'kotlin.math.log10' call
    tmp.LOG_10_OF_2__1 = log10(2.0);
  }
  protoOf(Companion_1).get_ZERO_wodlgx_k$ = function () {
    return this.ZERO_1;
  };
  protoOf(Companion_1).get_ONE_18jnkz_k$ = function () {
    return this.ONE_1;
  };
  protoOf(Companion_1).get_TWO_18jjnh_k$ = function () {
    return this.TWO_1;
  };
  protoOf(Companion_1).get_TEN_18jk30_k$ = function () {
    return this.TEN_1;
  };
  protoOf(Companion_1).get_LOG_10_OF_2_5oia3e_k$ = function () {
    return this.LOG_10_OF_2__1;
  };
  protoOf(Companion_1).createFromWordArray_erl7mz_k$ = function (wordArray, requestedSign) {
    return new BigInteger(wordArray, requestedSign);
  };
  protoOf(Companion_1).parseString_rj8x8i_k$ = function (string, base) {
    if (base < 2 ? true : base > 36) {
      throw NumberFormatException_init_$Create$('Unsupported base: ' + base + '. Supported base range is from 2 to 36');
    }
    var decimal = contains(string, _Char___init__impl__6a9atx(46));
    if (decimal) {
      var bigDecimal = Companion_getInstance_4().parseString_9f3uqe_k$(string);
      var isActuallyDecimal = bigDecimal.minus_89qnhu_k$(bigDecimal.floor_1m2c5o_k$()).compareTo_m610zm_k$(0) > 0;
      if (isActuallyDecimal) {
        throw NumberFormatException_init_$Create$('Supplied string is decimal, which cannot be converted to BigInteger without precision loss.');
      }
      return bigDecimal.toBigInteger_xwiad5_k$();
    }
    var signed = charSequenceGet(string, 0) === _Char___init__impl__6a9atx(45) ? true : charSequenceGet(string, 0) === _Char___init__impl__6a9atx(43);
    var tmp;
    if (signed) {
      if (string.length === 1) {
        throw NumberFormatException_init_$Create$('Invalid big integer: ' + string);
      }
      var tmp_0;
      if (charSequenceGet(string, 0) === _Char___init__impl__6a9atx(45)) {
        tmp_0 = Sign_NEGATIVE_getInstance();
      } else {
        tmp_0 = Sign_POSITIVE_getInstance();
      }
      var isNegative = tmp_0;
      if (string.length === 2 ? charSequenceGet(string, 1) === _Char___init__impl__6a9atx(48) : false) {
        return this.ZERO_1;
      }
      // Inline function 'kotlin.text.substring' call
      var endIndex = string.length;
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$1 = string.substring(1, endIndex);
      tmp = new BigInteger(this.arithmetic_1.parseForBase_ig4yjr_k$(tmp$ret$1, base), isNegative);
    } else {
      if (string.length === 1 ? charSequenceGet(string, 0) === _Char___init__impl__6a9atx(48) : false) {
        return this.ZERO_1;
      }
      tmp = new BigInteger(this.arithmetic_1.parseForBase_ig4yjr_k$(string, base), Sign_POSITIVE_getInstance());
    }
    return tmp;
  };
  protoOf(Companion_1).fromWordArray_kohhvz_k$ = function (wordArray, sign) {
    return new BigInteger(wordArray, sign);
  };
  protoOf(Companion_1).fromBigInteger_vytzoc_k$ = function (bigInteger) {
    return bigInteger;
  };
  protoOf(Companion_1).fromULong_bnyibi_k$ = function (uLong) {
    return new BigInteger(this.arithmetic_1.fromULong_v4p5f6_k$(uLong), Sign_POSITIVE_getInstance());
  };
  protoOf(Companion_1).fromUInt_gep9wf_k$ = function (uInt) {
    return new BigInteger(this.arithmetic_1.fromUInt_vnajor_k$(uInt), Sign_POSITIVE_getInstance());
  };
  protoOf(Companion_1).fromUShort_gkl0ii_k$ = function (uShort) {
    return new BigInteger(this.arithmetic_1.fromUShort_e4zbda_k$(uShort), Sign_POSITIVE_getInstance());
  };
  protoOf(Companion_1).fromUByte_nkoevi_k$ = function (uByte) {
    return new BigInteger(this.arithmetic_1.fromUByte_akq2u2_k$(uByte), Sign_POSITIVE_getInstance());
  };
  protoOf(Companion_1).fromLong_rbvu5k_k$ = function (long) {
    return BigInteger_init_$Create$(long);
  };
  protoOf(Companion_1).fromInt_wjro43_k$ = function (int) {
    return BigInteger_init_$Create$_0(int);
  };
  protoOf(Companion_1).fromShort_qmrdxi_k$ = function (short) {
    return BigInteger_init_$Create$_1(short);
  };
  protoOf(Companion_1).fromByte_i1k4na_k$ = function (byte) {
    return BigInteger_init_$Create$_2(byte);
  };
  protoOf(Companion_1).tryFromFloat_izmgak_k$ = function (float, exactRequired) {
    // Inline function 'kotlin.math.floor' call
    var floatDecimalPart = float - Math.floor(float);
    var tmp = Companion_getInstance_4();
    // Inline function 'kotlin.math.floor' call
    var tmp$ret$1 = Math.floor(float);
    var bigDecimal = tmp.fromFloat_2eb8dv_k$(tmp$ret$1, null);
    if (exactRequired) {
      if (floatDecimalPart > 0.0) {
        throw ArithmeticException_init_$Create$('Cant create BigInteger without precision loss, and exact  value was required');
      }
    }
    return bigDecimal.toBigInteger_xwiad5_k$();
  };
  protoOf(Companion_1).tryFromDouble_r3v8np_k$ = function (double, exactRequired) {
    // Inline function 'kotlin.math.floor' call
    var doubleDecimalPart = double - Math.floor(double);
    var tmp = Companion_getInstance_4();
    // Inline function 'kotlin.math.floor' call
    var tmp$ret$1 = Math.floor(double);
    var bigDecimal = tmp.fromDouble_vfrbvc_k$(tmp$ret$1, null);
    if (exactRequired) {
      if (doubleDecimalPart > 0.0) {
        throw ArithmeticException_init_$Create$('Cant create BigInteger without precision loss, and exact  value was required');
      }
    }
    return bigDecimal.toBigInteger_xwiad5_k$();
  };
  protoOf(Companion_1).max_1n00mc_k$ = function (first, second) {
    var tmp;
    if (first.compareTo_m610zm_k$(second) > 0) {
      tmp = first;
    } else {
      tmp = second;
    }
    return tmp;
  };
  protoOf(Companion_1).max_l1twj2_k$ = function (first, second) {
    var tmp = first instanceof BigInteger ? first : THROW_CCE();
    return this.max_1n00mc_k$(tmp, second instanceof BigInteger ? second : THROW_CCE());
  };
  protoOf(Companion_1).min_rb7vw6_k$ = function (first, second) {
    var tmp;
    if (first.compareTo_m610zm_k$(second) < 0) {
      tmp = first;
    } else {
      tmp = second;
    }
    return tmp;
  };
  protoOf(Companion_1).min_vd3m68_k$ = function (first, second) {
    var tmp = first instanceof BigInteger ? first : THROW_CCE();
    return this.min_rb7vw6_k$(tmp, second instanceof BigInteger ? second : THROW_CCE());
  };
  protoOf(Companion_1).fromUByteArray_h4e7hi_k$ = function (source, sign) {
    var result = this.arithmetic_1.fromUByteArray_dsi08q_k$(source);
    return new BigInteger(result, sign);
  };
  protoOf(Companion_1).fromByteArray_qodr7f_k$ = function (source, sign) {
    var result = this.arithmetic_1.fromByteArray_hdcat7_k$(source);
    return new BigInteger(result, sign);
  };
  var Companion_instance_1;
  function Companion_getInstance_6() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function isResultZero($this, resultMagnitude) {
    return Companion_getInstance_6().arithmetic_1.compare_23l5gr_k$(resultMagnitude, Companion_getInstance_6().arithmetic_1.get_ZERO_e9sg11_k$()) === 0;
  }
  function d1reciprocalRecursive($this) {
    return new BigInteger(Companion_getInstance_6().arithmetic_1.reciprocal_8ovoxe_k$($this.magnitude_1).get_first_irdx8n_k$().storage_1, $this.sign_1);
  }
  function naiveGcd($this, other) {
    var u = $this;
    var v = other;
    while (!v.equals(Companion_getInstance_6().ZERO_1)) {
      var tmpU = u;
      u = v;
      v = tmpU.rem_rzdobw_k$(v);
    }
    return u;
  }
  function exponentiationBySquaring($this, y, x, n) {
    var $this_0 = $this;
    var y_0 = y;
    var x_0 = x;
    var n_0 = n;
    $l$1: do {
      $l$0: do {
        var tmp;
        if (n_0.equals(Companion_getInstance_6().ZERO_1)) {
          tmp = y_0;
        } else if (n_0.equals(Companion_getInstance_6().ONE_1)) {
          tmp = x_0.times_wzgsx4_k$(y_0);
        } else if (n_0.mod_y8e6yq_k$(Companion_getInstance_6().TWO_1).equals(Companion_getInstance_6().ZERO_1)) {
          $this_0 = $this_0;
          y_0 = y_0;
          x_0 = x_0.times_wzgsx4_k$(x_0);
          n_0 = n_0.div_fxyyjd_k$(2);
          continue $l$0;
        } else {
          $this_0 = $this_0;
          y_0 = x_0.times_wzgsx4_k$(y_0);
          x_0 = x_0.times_wzgsx4_k$(x_0);
          n_0 = n_0.minus_vfk7ag_k$(1).div_fxyyjd_k$(2);
          continue $l$0;
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function javascriptNumberComparison_0($this, number) {
    var double = numberToDouble(number);
    var tmp;
    if (double > Companion_getInstance().get_MAX_VALUE_54a9lf_k$().toDouble_ygsx0s_k$()) {
      tmp = $this.compare_ivkmfz_k$(Companion_getInstance_6().parseString$default_73kf6g_k$(double.toString()));
    } else if (double % 1 === 0.0) {
      tmp = $this.compare_ivkmfz_k$(Companion_getInstance_6().fromLong_rbvu5k_k$(numberToLong(number)));
    } else {
      var tmp_0 = numberToDouble(number);
      tmp = $this.compareFloatAndBigInt_cfeagv_k$(tmp_0, BigInteger$javascriptNumberComparison$lambda($this));
    }
    return tmp;
  }
  function QuotientAndRemainder(quotient, remainder) {
    this.quotient_1 = quotient;
    this.remainder_1 = remainder;
  }
  protoOf(QuotientAndRemainder).get_quotient_ooukvo_k$ = function () {
    return this.quotient_1;
  };
  protoOf(QuotientAndRemainder).get_remainder_mwecu4_k$ = function () {
    return this.remainder_1;
  };
  protoOf(QuotientAndRemainder).component1_7eebsc_k$ = function () {
    return this.quotient_1;
  };
  protoOf(QuotientAndRemainder).component2_7eebsb_k$ = function () {
    return this.remainder_1;
  };
  protoOf(QuotientAndRemainder).copy_53p6ct_k$ = function (quotient, remainder) {
    return new QuotientAndRemainder(quotient, remainder);
  };
  protoOf(QuotientAndRemainder).copy$default_141y75_k$ = function (quotient, remainder, $super) {
    quotient = quotient === VOID ? this.quotient_1 : quotient;
    remainder = remainder === VOID ? this.remainder_1 : remainder;
    return $super === VOID ? this.copy_53p6ct_k$(quotient, remainder) : $super.copy_53p6ct_k$.call(this, quotient, remainder);
  };
  protoOf(QuotientAndRemainder).toString = function () {
    return 'QuotientAndRemainder(quotient=' + this.quotient_1 + ', remainder=' + this.remainder_1 + ')';
  };
  protoOf(QuotientAndRemainder).hashCode = function () {
    var result = this.quotient_1.hashCode();
    result = imul(result, 31) + this.remainder_1.hashCode() | 0;
    return result;
  };
  protoOf(QuotientAndRemainder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof QuotientAndRemainder))
      return false;
    var tmp0_other_with_cast = other instanceof QuotientAndRemainder ? other : THROW_CCE();
    if (!this.quotient_1.equals(tmp0_other_with_cast.quotient_1))
      return false;
    if (!this.remainder_1.equals(tmp0_other_with_cast.remainder_1))
      return false;
    return true;
  };
  function SqareRootAndRemainder(squareRoot, remainder) {
    this.squareRoot_1 = squareRoot;
    this.remainder_1 = remainder;
  }
  protoOf(SqareRootAndRemainder).get_squareRoot_ee9c88_k$ = function () {
    return this.squareRoot_1;
  };
  protoOf(SqareRootAndRemainder).get_remainder_mwecu4_k$ = function () {
    return this.remainder_1;
  };
  protoOf(SqareRootAndRemainder).component1_7eebsc_k$ = function () {
    return this.squareRoot_1;
  };
  protoOf(SqareRootAndRemainder).component2_7eebsb_k$ = function () {
    return this.remainder_1;
  };
  protoOf(SqareRootAndRemainder).copy_53p6ct_k$ = function (squareRoot, remainder) {
    return new SqareRootAndRemainder(squareRoot, remainder);
  };
  protoOf(SqareRootAndRemainder).copy$default_be2j8m_k$ = function (squareRoot, remainder, $super) {
    squareRoot = squareRoot === VOID ? this.squareRoot_1 : squareRoot;
    remainder = remainder === VOID ? this.remainder_1 : remainder;
    return $super === VOID ? this.copy_53p6ct_k$(squareRoot, remainder) : $super.copy_53p6ct_k$.call(this, squareRoot, remainder);
  };
  protoOf(SqareRootAndRemainder).toString = function () {
    return 'SqareRootAndRemainder(squareRoot=' + this.squareRoot_1 + ', remainder=' + this.remainder_1 + ')';
  };
  protoOf(SqareRootAndRemainder).hashCode = function () {
    var result = this.squareRoot_1.hashCode();
    result = imul(result, 31) + this.remainder_1.hashCode() | 0;
    return result;
  };
  protoOf(SqareRootAndRemainder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SqareRootAndRemainder))
      return false;
    var tmp0_other_with_cast = other instanceof SqareRootAndRemainder ? other : THROW_CCE();
    if (!this.squareRoot_1.equals(tmp0_other_with_cast.squareRoot_1))
      return false;
    if (!this.remainder_1.equals(tmp0_other_with_cast.remainder_1))
      return false;
    return true;
  };
  function BigIntegerRange(start, endInclusive) {
    this.start_1 = start;
    this.endInclusive_1 = endInclusive;
  }
  protoOf(BigIntegerRange).get_start_iypx6h_k$ = function () {
    return this.start_1;
  };
  protoOf(BigIntegerRange).get_endInclusive_r07xpi_k$ = function () {
    return this.endInclusive_1;
  };
  protoOf(BigIntegerRange).iterator_jk1svi_k$ = function () {
    return new BigIntegerIterator(this.start_1, this.endInclusive_1);
  };
  function BigIntegerIterator(start, endInclusive) {
    this.endInclusive_1 = endInclusive;
    this.current_1 = start;
  }
  protoOf(BigIntegerIterator).hasNext_bitz1p_k$ = function () {
    return this.current_1.compareTo_m610zm_k$(this.endInclusive_1) <= 0;
  };
  protoOf(BigIntegerIterator).next_20eer_k$ = function () {
    var tmp1 = this.current_1;
    this.current_1 = tmp1.inc_28ke_k$();
    return tmp1;
  };
  function BigInteger$compareTo$lambda(this$0) {
    return function (it) {
      return this$0.compare_ivkmfz_k$(it);
    };
  }
  function BigInteger$compareTo$lambda_0(this$0) {
    return function (it) {
      return this$0.compare_ivkmfz_k$(it);
    };
  }
  function BigInteger$javascriptNumberComparison$lambda(this$0) {
    return function (it) {
      return this$0.compare_ivkmfz_k$(it);
    };
  }
  function BigInteger(wordArray, requestedSign) {
    Companion_getInstance_6();
    if (requestedSign.equals(Sign_ZERO_getInstance())) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!isResultZero(this, wordArray)) {
        // Inline function 'com.ionspin.kotlin.bignum.integer.BigInteger.<anonymous>' call
        var message = 'sign should be Sign.ZERO iff magnitude has a value of 0';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
    }
    this.magnitude_1 = BigInteger63Arithmetic_getInstance().removeLeadingZeros_hl2d3p_k$(wordArray);
    var tmp = this;
    var tmp_0;
    if (isResultZero(this, this.magnitude_1)) {
      tmp_0 = Sign_ZERO_getInstance();
    } else {
      tmp_0 = requestedSign;
    }
    tmp.sign_1 = tmp_0;
    this.numberOfWords_1 = _ULongArray___get_size__impl__ju6dtr(this.magnitude_1);
    this.stringRepresentation_1 = null;
  }
  protoOf(BigInteger).getCreator_y5p0ja_k$ = function () {
    return Companion_getInstance_6();
  };
  protoOf(BigInteger).getInstance_rhh4hh_k$ = function () {
    return this;
  };
  protoOf(BigInteger).getBackingArrayCopy_idgssd_k$ = function () {
    // Inline function 'kotlin.collections.copyOf' call
    var this_0 = this.magnitude_1;
    return _ULongArray___init__impl__twm1l3(copyOf(_ULongArray___get_storage__impl__28e64j(this_0)));
  };
  protoOf(BigInteger).getSign_18qril_k$ = function () {
    return this.sign_1;
  };
  protoOf(BigInteger).get_magnitude_98l7vf_k$ = function () {
    return this.magnitude_1;
  };
  protoOf(BigInteger).get_sign_woubd2_k$ = function () {
    return this.sign_1;
  };
  protoOf(BigInteger).get_numberOfWords_n1dbq8_k$ = function () {
    return this.numberOfWords_1;
  };
  protoOf(BigInteger).set_stringRepresentation_n001lw_k$ = function (_set____db54di) {
    this.stringRepresentation_1 = _set____db54di;
  };
  protoOf(BigInteger).get_stringRepresentation_aq9wmx_k$ = function () {
    return this.stringRepresentation_1;
  };
  protoOf(BigInteger).add_enpbtp_k$ = function (other) {
    var comparison = Companion_getInstance_6().arithmetic_1.compare_23l5gr_k$(this.magnitude_1, other.magnitude_1);
    var tmp;
    if (other.sign_1.equals(this.sign_1)) {
      return new BigInteger(Companion_getInstance_6().arithmetic_1.add_fdm03p_k$(this.magnitude_1, other.magnitude_1), this.sign_1);
    } else {
      var tmp_0;
      if (comparison > 0) {
        tmp_0 = new BigInteger(Companion_getInstance_6().arithmetic_1.subtract_tkmoqg_k$(this.magnitude_1, other.magnitude_1), this.sign_1);
      } else if (comparison < 0) {
        tmp_0 = new BigInteger(Companion_getInstance_6().arithmetic_1.subtract_tkmoqg_k$(other.magnitude_1, this.magnitude_1), other.sign_1);
      } else {
        tmp_0 = Companion_getInstance_6().ZERO_1;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(BigInteger).add_vp5qlp_k$ = function (other) {
    return this.add_enpbtp_k$(other instanceof BigInteger ? other : THROW_CCE());
  };
  protoOf(BigInteger).subtract_v0msb4_k$ = function (other) {
    var comparison = Companion_getInstance_6().arithmetic_1.compare_23l5gr_k$(this.magnitude_1, other.magnitude_1);
    if (this.equals(Companion_getInstance_6().ZERO_1)) {
      return other.negate_hcqk8u_k$();
    }
    if (other.equals(Companion_getInstance_6().ZERO_1)) {
      return this;
    }
    var tmp;
    if (other.sign_1.equals(this.sign_1)) {
      var tmp_0;
      if (comparison > 0) {
        tmp_0 = new BigInteger(Companion_getInstance_6().arithmetic_1.subtract_tkmoqg_k$(this.magnitude_1, other.magnitude_1), this.sign_1);
      } else if (comparison < 0) {
        tmp_0 = new BigInteger(Companion_getInstance_6().arithmetic_1.subtract_tkmoqg_k$(other.magnitude_1, this.magnitude_1), this.sign_1.not_2cb7_k$());
      } else {
        tmp_0 = Companion_getInstance_6().ZERO_1;
      }
      tmp = tmp_0;
    } else {
      return new BigInteger(Companion_getInstance_6().arithmetic_1.add_fdm03p_k$(this.magnitude_1, other.magnitude_1), this.sign_1);
    }
    return tmp;
  };
  protoOf(BigInteger).subtract_tgddne_k$ = function (other) {
    return this.subtract_v0msb4_k$(other instanceof BigInteger ? other : THROW_CCE());
  };
  protoOf(BigInteger).multiply_8eknxc_k$ = function (other) {
    if (this.isZero_jihrta_k$() ? true : other.isZero_jihrta_k$()) {
      return Companion_getInstance_6().ZERO_1;
    }
    if (other.equals(Companion_getInstance_6().ONE_1)) {
      return this;
    }
    var tmp;
    if (!this.sign_1.equals(other.sign_1)) {
      tmp = Sign_NEGATIVE_getInstance();
    } else {
      tmp = Sign_POSITIVE_getInstance();
    }
    var sign = tmp;
    var tmp_0;
    if (sign.equals(Sign_POSITIVE_getInstance())) {
      tmp_0 = new BigInteger(Companion_getInstance_6().arithmetic_1.multiply_2l587c_k$(this.magnitude_1, other.magnitude_1), sign);
    } else {
      tmp_0 = new BigInteger(Companion_getInstance_6().arithmetic_1.multiply_2l587c_k$(this.magnitude_1, other.magnitude_1), sign);
    }
    return tmp_0;
  };
  protoOf(BigInteger).multiply_t4mx56_k$ = function (other) {
    return this.multiply_8eknxc_k$(other instanceof BigInteger ? other : THROW_CCE());
  };
  protoOf(BigInteger).divide_69ukmt_k$ = function (other) {
    if (other.isZero_jihrta_k$()) {
      throw ArithmeticException_init_$Create$('Division by zero! ' + this + ' / ' + other);
    }
    var result = Companion_getInstance_6().arithmetic_1.divide_f7otrd_k$(this.magnitude_1, other.magnitude_1).get_first_irdx8n_k$().storage_1;
    var tmp;
    if (equals(result, Companion_getInstance_6().arithmetic_1.get_ZERO_e9sg11_k$())) {
      tmp = Companion_getInstance_6().ZERO_1;
    } else {
      var tmp_0;
      if (!this.sign_1.equals(other.sign_1)) {
        tmp_0 = Sign_NEGATIVE_getInstance();
      } else {
        tmp_0 = Sign_POSITIVE_getInstance();
      }
      var sign = tmp_0;
      tmp = new BigInteger(result, sign);
    }
    return tmp;
  };
  protoOf(BigInteger).divide_gsrehh_k$ = function (other) {
    return this.divide_69ukmt_k$(other instanceof BigInteger ? other : THROW_CCE());
  };
  protoOf(BigInteger).remainder_rc2jq7_k$ = function (other) {
    if (other.isZero_jihrta_k$()) {
      throw ArithmeticException_init_$Create$('Division by zero! ' + this + ' / ' + other);
    }
    var tmp;
    if (!this.sign_1.equals(other.sign_1)) {
      tmp = Sign_NEGATIVE_getInstance();
    } else {
      tmp = Sign_POSITIVE_getInstance();
    }
    var sign = tmp;
    var result = Companion_getInstance_6().arithmetic_1.divide_f7otrd_k$(this.magnitude_1, other.magnitude_1).get_second_jf7fjx_k$().storage_1;
    if (equals(result, Companion_getInstance_6().arithmetic_1.get_ZERO_e9sg11_k$())) {
      sign = Sign_ZERO_getInstance();
    }
    return new BigInteger(result, sign);
  };
  protoOf(BigInteger).remainder_xdfn55_k$ = function (other) {
    return this.remainder_rc2jq7_k$(other instanceof BigInteger ? other : THROW_CCE());
  };
  protoOf(BigInteger).divideAndRemainder_muhv4t_k$ = function (other) {
    if (other.isZero_jihrta_k$()) {
      throw ArithmeticException_init_$Create$('Division by zero! ' + this + ' / ' + other);
    }
    var tmp;
    if (!this.sign_1.equals(other.sign_1)) {
      tmp = Sign_NEGATIVE_getInstance();
    } else {
      tmp = Sign_POSITIVE_getInstance();
    }
    var sign = tmp;
    var result = Companion_getInstance_6().arithmetic_1.divide_f7otrd_k$(this.magnitude_1, other.magnitude_1);
    var tmp_0;
    if (result.get_first_irdx8n_k$().equals(new ULongArray(Companion_getInstance_6().arithmetic_1.get_ZERO_e9sg11_k$()))) {
      tmp_0 = Companion_getInstance_6().ZERO_1;
    } else {
      tmp_0 = new BigInteger(result.get_first_irdx8n_k$().storage_1, sign);
    }
    var quotient = tmp_0;
    var tmp_1;
    if (result.get_second_jf7fjx_k$().equals(new ULongArray(Companion_getInstance_6().arithmetic_1.get_ZERO_e9sg11_k$()))) {
      tmp_1 = Companion_getInstance_6().ZERO_1;
    } else {
      tmp_1 = new BigInteger(result.get_second_jf7fjx_k$().storage_1, this.sign_1);
    }
    var remainder = tmp_1;
    return new Pair(quotient, remainder);
  };
  protoOf(BigInteger).divideAndRemainder_mqts87_k$ = function (other) {
    return this.divideAndRemainder_muhv4t_k$(other instanceof BigInteger ? other : THROW_CCE());
  };
  protoOf(BigInteger).sqrt_23u3k_k$ = function () {
    return new BigInteger(Companion_getInstance_6().arithmetic_1.sqrt_8g6jqw_k$(this.magnitude_1).get_first_irdx8n_k$().storage_1, this.sign_1);
  };
  protoOf(BigInteger).sqrtAndRemainder_n2e1f6_k$ = function () {
    return new SqareRootAndRemainder(new BigInteger(Companion_getInstance_6().arithmetic_1.sqrt_8g6jqw_k$(this.magnitude_1).get_first_irdx8n_k$().storage_1, this.sign_1), new BigInteger(Companion_getInstance_6().arithmetic_1.sqrt_8g6jqw_k$(this.magnitude_1).get_second_jf7fjx_k$().storage_1, this.sign_1));
  };
  protoOf(BigInteger).gcd_zd7ttw_k$ = function (other) {
    return new BigInteger(Companion_getInstance_6().arithmetic_1.gcd_ybis7o_k$(this.magnitude_1, other.magnitude_1), Sign_POSITIVE_getInstance());
  };
  protoOf(BigInteger).modInverse_crfdva_k$ = function (modulo) {
    if (!this.gcd_zd7ttw_k$(modulo).equals(Companion_getInstance_6().ONE_1)) {
      throw ArithmeticException_init_$Create$('BigInteger is not invertible. This and modulus are not relatively prime (coprime)');
    }
    var u = Companion_getInstance_6().ONE_1;
    var w = Companion_getInstance_6().ZERO_1;
    var b = this;
    var c = modulo;
    while (!c.equals(Companion_getInstance_6().ZERO_1)) {
      var tmp0_container = b.divrem_kdohd1_k$(c);
      var q = tmp0_container.component1_7eebsc_k$();
      var r = tmp0_container.component2_7eebsb_k$();
      b = c;
      c = r;
      var tmpU = u;
      u = w;
      w = tmpU.minus_e48fwe_k$(q.times_wzgsx4_k$(w));
    }
    return u;
  };
  protoOf(BigInteger).mod_y8e6yq_k$ = function (modulo) {
    var result = this.rem_rzdobw_k$(modulo);
    var tmp;
    if (result.compareTo_m610zm_k$(0) < 0) {
      tmp = result.plus_f4xvv8_k$(modulo);
    } else {
      tmp = result;
    }
    return tmp;
  };
  protoOf(BigInteger).compare_ivkmfz_k$ = function (other) {
    if (this.isZero_jihrta_k$() ? other.isZero_jihrta_k$() : false)
      return 0;
    if (other.isZero_jihrta_k$() ? this.sign_1.equals(Sign_POSITIVE_getInstance()) : false)
      return 1;
    if (other.isZero_jihrta_k$() ? this.sign_1.equals(Sign_NEGATIVE_getInstance()) : false)
      return -1;
    if (this.isZero_jihrta_k$() ? other.sign_1.equals(Sign_POSITIVE_getInstance()) : false)
      return -1;
    if (this.isZero_jihrta_k$() ? other.sign_1.equals(Sign_NEGATIVE_getInstance()) : false)
      return 1;
    if (!this.sign_1.equals(other.sign_1))
      return this.sign_1.equals(Sign_POSITIVE_getInstance()) ? 1 : -1;
    var result = Companion_getInstance_6().arithmetic_1.compare_23l5gr_k$(this.magnitude_1, other.magnitude_1);
    var tmp;
    if (this.sign_1.equals(Sign_NEGATIVE_getInstance()) ? other.sign_1.equals(Sign_NEGATIVE_getInstance()) : false) {
      tmp = imul(result, -1);
    } else {
      tmp = result;
    }
    return tmp;
  };
  protoOf(BigInteger).isZero_jihrta_k$ = function () {
    return this.sign_1.equals(Sign_ZERO_getInstance()) ? true : get_chosenArithmetic().compare_23l5gr_k$(this.magnitude_1, get_chosenArithmetic().get_ZERO_e9sg11_k$()) === 0;
  };
  protoOf(BigInteger).negate_hcqk8u_k$ = function () {
    return new BigInteger(this.magnitude_1, this.sign_1.not_2cb7_k$());
  };
  protoOf(BigInteger).abs_22cy_k$ = function () {
    return new BigInteger(this.magnitude_1, Sign_POSITIVE_getInstance());
  };
  protoOf(BigInteger).factorial_ly8spn_k$ = function () {
    var result = Companion_getInstance_6().ONE_1;
    var element = Companion_getInstance_6().ONE_1;
    var abs = this.abs_22cy_k$();
    while (element.compareTo_m610zm_k$(abs) <= 0) {
      result = result.times_wzgsx4_k$(element);
      element = element.inc_28ke_k$();
    }
    var tmp;
    if (this.get_isNegative_i24zqw_k$()) {
      tmp = result.unaryMinus_6uz0qp_k$();
    } else {
      tmp = result;
    }
    return tmp;
  };
  protoOf(BigInteger).pow_cw79ck_k$ = function (exponent) {
    if (exponent.compareTo_m610zm_k$(Companion_getInstance_6().ZERO_1) < 0)
      throw ArithmeticException_init_$Create$('Negative exponent not supported with BigInteger');
    if (exponent.compareTo_m610zm_k$(Companion_getInstance().get_MAX_VALUE_54a9lf_k$()) <= 0) {
      // Inline function 'kotlin.ULong.toLong' call
      var this_0 = ULongArray__get_impl_pr71q9(exponent.magnitude_1, 0);
      var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0);
      return this.pow_3xn4h6_k$(tmp$ret$0);
    }
    return exponentiationBySquaring(this, Companion_getInstance_6().ONE_1, this, exponent);
  };
  protoOf(BigInteger).pow_3xn4h6_k$ = function (exponent) {
    if (exponent.compareTo_9jj042_k$(new Long(0, 0)) < 0) {
      throw ArithmeticException_init_$Create$('Negative exponent not supported with BigInteger');
    }
    var tmp;
    if (this.equals(Companion_getInstance_6().ZERO_1)) {
      tmp = Companion_getInstance_6().ZERO_1;
    } else if (this.equals(Companion_getInstance_6().ONE_1)) {
      tmp = Companion_getInstance_6().ONE_1;
    } else {
      var tmp_0;
      if (this.sign_1.equals(Sign_NEGATIVE_getInstance())) {
        var tmp_1;
        // Inline function 'kotlin.Long.rem' call
        if (exponent.rem_bsnl9o_k$(toLong(2)).equals(new Long(0, 0))) {
          tmp_1 = Sign_POSITIVE_getInstance();
        } else {
          tmp_1 = Sign_NEGATIVE_getInstance();
        }
        tmp_0 = tmp_1;
      } else {
        tmp_0 = Sign_POSITIVE_getInstance();
      }
      var sign = tmp_0;
      tmp = new BigInteger(Companion_getInstance_6().arithmetic_1.pow_l8706q_k$(this.magnitude_1, exponent), sign);
    }
    return tmp;
  };
  protoOf(BigInteger).pow_iykav4_k$ = function (exponent) {
    return this.pow_3xn4h6_k$(toLong(exponent));
  };
  protoOf(BigInteger).signum_exb08b_k$ = function () {
    var tmp;
    switch (this.sign_1.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = 1;
        break;
      case 1:
        tmp = -1;
        break;
      case 2:
        tmp = 0;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(BigInteger).bitAt_rl2r02_k$ = function (position) {
    return Companion_getInstance_6().arithmetic_1.bitAt_6f5eh6_k$(this.magnitude_1, position);
  };
  protoOf(BigInteger).setBitAt_d57idx_k$ = function (position, bit) {
    return new BigInteger(Companion_getInstance_6().arithmetic_1.setBitAt_5jbtpb_k$(this.magnitude_1, position, bit), this.sign_1);
  };
  protoOf(BigInteger).bitLength_9mbxrh_k$ = function () {
    return Companion_getInstance_6().arithmetic_1.bitLength_pgr2wb_k$(this.magnitude_1);
  };
  protoOf(BigInteger).numberOfDecimalDigits_wouqvd_k$ = function () {
    if (this.isZero_jihrta_k$()) {
      return new Long(1, 0);
    }
    var bitLength = Companion_getInstance_6().arithmetic_1.bitLength_pgr2wb_k$(this.magnitude_1);
    // Inline function 'kotlin.math.ceil' call
    var x = (bitLength - 1 | 0) * Companion_getInstance_6().LOG_10_OF_2__1;
    var minDigit = Math.ceil(x);
    var tmp = this.div_7cbhfh_k$(toBigInteger(10).pow_iykav4_k$(numberToInt(minDigit)));
    var counter = new Long(0, 0);
    while (!(tmp.compareTo_m610zm_k$(0) === 0)) {
      tmp = tmp.div_fxyyjd_k$(10);
      counter = counter.inc_28ke_k$();
    }
    // Inline function 'kotlin.Long.plus' call
    var this_0 = counter;
    var other = numberToInt(minDigit);
    return this_0.plus_r93sks_k$(toLong(other));
  };
  protoOf(BigInteger).shl_bg8if3_k$ = function (places) {
    return new BigInteger(Companion_getInstance_6().arithmetic_1.shiftLeft_luzpnv_k$(this.magnitude_1, places), this.sign_1);
  };
  protoOf(BigInteger).shr_9fl3wl_k$ = function (places) {
    var result = new BigInteger(Companion_getInstance_6().arithmetic_1.shiftRight_24xxbu_k$(this.magnitude_1, places), this.sign_1);
    if (equals(result.magnitude_1, Companion_getInstance_6().arithmetic_1.get_ZERO_e9sg11_k$())) {
      return Companion_getInstance_6().ZERO_1;
    }
    return result;
  };
  protoOf(BigInteger).unaryMinus_6uz0qp_k$ = function () {
    return this.negate_hcqk8u_k$();
  };
  protoOf(BigInteger).secureOverwrite_5au9ks_k$ = function () {
    var inductionVariable = 0;
    var last = _ULongArray___get_size__impl__ju6dtr(this.magnitude_1);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        ULongArray__set_impl_z19mvh(this.magnitude_1, i, _ULong___init__impl__c78o9k(new Long(0, 0)));
      }
       while (inductionVariable < last);
  };
  protoOf(BigInteger).dec_24n6_k$ = function () {
    return this.minus_e48fwe_k$(Companion_getInstance_6().ONE_1);
  };
  protoOf(BigInteger).inc_28ke_k$ = function () {
    return this.plus_f4xvv8_k$(Companion_getInstance_6().ONE_1);
  };
  protoOf(BigInteger).divrem_kdohd1_k$ = function (other) {
    var result = this.divideAndRemainder_muhv4t_k$(other);
    return new QuotientAndRemainder(result.get_first_irdx8n_k$(), result.get_second_jf7fjx_k$());
  };
  protoOf(BigInteger).and_b3jynh_k$ = function (other) {
    return new BigInteger(Companion_getInstance_6().arithmetic_1.and_6i7kg5_k$(this.magnitude_1, other.magnitude_1), this.sign_1);
  };
  protoOf(BigInteger).and_1776du_k$ = function (other) {
    return this.and_b3jynh_k$(other instanceof BigInteger ? other : THROW_CCE());
  };
  protoOf(BigInteger).or_4gzcv3_k$ = function (other) {
    return new BigInteger(Companion_getInstance_6().arithmetic_1.or_nlpkc9_k$(this.magnitude_1, other.magnitude_1), this.sign_1);
  };
  protoOf(BigInteger).or_61g3ju_k$ = function (other) {
    return this.or_4gzcv3_k$(other instanceof BigInteger ? other : THROW_CCE());
  };
  protoOf(BigInteger).xor_bz6i53_k$ = function (other) {
    var resultMagnitude = Companion_getInstance_6().arithmetic_1.xor_44odvj_k$(this.magnitude_1, other.magnitude_1);
    var resultSign = !!(this.get_isNegative_i24zqw_k$() ^ other.get_isNegative_i24zqw_k$()) ? Sign_NEGATIVE_getInstance() : isResultZero(this, resultMagnitude) ? Sign_ZERO_getInstance() : Sign_POSITIVE_getInstance();
    return new BigInteger(resultMagnitude, resultSign);
  };
  protoOf(BigInteger).xor_9pf34e_k$ = function (other) {
    return this.xor_bz6i53_k$(other instanceof BigInteger ? other : THROW_CCE());
  };
  protoOf(BigInteger).not_2cb7_k$ = function () {
    return new BigInteger(Companion_getInstance_6().arithmetic_1.not_nout9b_k$(this.magnitude_1), this.sign_1);
  };
  protoOf(BigInteger).compareTo_m610zm_k$ = function (other) {
    if (isNumber(other)) {
      if (RuntimePlatform_getInstance().currentPlatform_2rav3o_k$().equals(Platform_JS_getInstance())) {
        return javascriptNumberComparison_0(this, other);
      }
    }
    var tmp;
    if (other instanceof BigInteger) {
      tmp = this.compare_ivkmfz_k$(other);
    } else {
      if (other instanceof Long) {
        tmp = this.compare_ivkmfz_k$(Companion_getInstance_6().fromLong_rbvu5k_k$(other));
      } else {
        if (typeof other === 'number') {
          tmp = this.compare_ivkmfz_k$(Companion_getInstance_6().fromInt_wjro43_k$(other));
        } else {
          if (typeof other === 'number') {
            tmp = this.compare_ivkmfz_k$(Companion_getInstance_6().fromShort_qmrdxi_k$(other));
          } else {
            if (typeof other === 'number') {
              tmp = this.compare_ivkmfz_k$(Companion_getInstance_6().fromByte_i1k4na_k$(other));
            } else {
              if (other instanceof ULong) {
                tmp = this.compare_ivkmfz_k$(Companion_getInstance_6().fromULong_bnyibi_k$(other.data_1));
              } else {
                if (other instanceof UInt) {
                  tmp = this.compare_ivkmfz_k$(Companion_getInstance_6().fromUInt_gep9wf_k$(other.data_1));
                } else {
                  if (other instanceof UShort) {
                    tmp = this.compare_ivkmfz_k$(Companion_getInstance_6().fromUShort_gkl0ii_k$(other.data_1));
                  } else {
                    if (other instanceof UByte) {
                      tmp = this.compare_ivkmfz_k$(Companion_getInstance_6().fromUByte_nkoevi_k$(other.data_1));
                    } else {
                      if (typeof other === 'number') {
                        tmp = this.compareFloatAndBigInt_cfeagv_k$(other, BigInteger$compareTo$lambda(this));
                      } else {
                        if (typeof other === 'number') {
                          tmp = this.compareDoubleAndBigInt_sh52eq_k$(other, BigInteger$compareTo$lambda_0(this));
                        } else {
                          throw RuntimeException_init_$Create$('Invalid comparison type for BigInteger: ' + getKClassFromExpression(other));
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
    return tmp;
  };
  protoOf(BigInteger).compareTo_hpufkf_k$ = function (other) {
    return this.compareTo_m610zm_k$(!(other == null) ? other : THROW_CCE());
  };
  protoOf(BigInteger).compareFloatAndBigInt_cfeagv_k$ = function (float, comparisonBlock) {
    // Inline function 'kotlin.math.floor' call
    var withoutDecimalPart = Math.floor(float);
    var hasDecimalPart = !(float % 1 === 0.0);
    var tmp;
    if (hasDecimalPart) {
      var comparisonResult = comparisonBlock(Companion_getInstance_6().tryFromFloat$default_ghen6e_k$(withoutDecimalPart + 1));
      var tmp_0;
      if (comparisonResult === 0) {
        tmp_0 = 1;
      } else {
        tmp_0 = comparisonResult;
      }
      tmp = tmp_0;
    } else {
      tmp = comparisonBlock(Companion_getInstance_6().tryFromFloat$default_ghen6e_k$(withoutDecimalPart));
    }
    return tmp;
  };
  protoOf(BigInteger).compareDoubleAndBigInt_sh52eq_k$ = function (double, comparisonBlock) {
    // Inline function 'kotlin.math.floor' call
    var withoutDecimalPart = Math.floor(double);
    var hasDecimalPart = !(double % 1 === 0.0);
    var tmp;
    if (hasDecimalPart) {
      var comparisonResult = comparisonBlock(Companion_getInstance_6().tryFromDouble$default_ofs7np_k$(withoutDecimalPart + 1));
      var tmp_0;
      if (comparisonResult === 0) {
        tmp_0 = 1;
      } else {
        tmp_0 = comparisonResult;
      }
      tmp = tmp_0;
    } else {
      tmp = comparisonBlock(Companion_getInstance_6().tryFromDouble$default_ofs7np_k$(withoutDecimalPart));
    }
    return tmp;
  };
  protoOf(BigInteger).equals = function (other) {
    var tmp;
    if (other instanceof BigInteger) {
      tmp = this.compare_ivkmfz_k$(other);
    } else {
      if (other instanceof Long) {
        tmp = this.compare_ivkmfz_k$(Companion_getInstance_6().fromLong_rbvu5k_k$(other));
      } else {
        if (!(other == null) ? typeof other === 'number' : false) {
          tmp = this.compare_ivkmfz_k$(Companion_getInstance_6().fromInt_wjro43_k$(other));
        } else {
          if (!(other == null) ? typeof other === 'number' : false) {
            tmp = this.compare_ivkmfz_k$(Companion_getInstance_6().fromShort_qmrdxi_k$(other));
          } else {
            if (!(other == null) ? typeof other === 'number' : false) {
              tmp = this.compare_ivkmfz_k$(Companion_getInstance_6().fromByte_i1k4na_k$(other));
            } else {
              if (other instanceof ULong) {
                tmp = this.compare_ivkmfz_k$(Companion_getInstance_6().fromULong_bnyibi_k$(other.data_1));
              } else {
                if (other instanceof UInt) {
                  tmp = this.compare_ivkmfz_k$(Companion_getInstance_6().fromUInt_gep9wf_k$(other.data_1));
                } else {
                  if (other instanceof UShort) {
                    tmp = this.compare_ivkmfz_k$(Companion_getInstance_6().fromUShort_gkl0ii_k$(other.data_1));
                  } else {
                    if (other instanceof UByte) {
                      tmp = this.compare_ivkmfz_k$(Companion_getInstance_6().fromUByte_nkoevi_k$(other.data_1));
                    } else {
                      tmp = -1;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    var comparison = tmp;
    return comparison === 0;
  };
  protoOf(BigInteger).hashCode = function () {
    // Inline function 'kotlin.collections.fold' call
    var this_0 = this.magnitude_1;
    var accumulator = 0;
    var tmp0_iterator = ULongArray__iterator_impl_cq4d2h(this_0);
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$().data_1;
      // Inline function 'com.ionspin.kotlin.bignum.integer.BigInteger.hashCode.<anonymous>' call
      accumulator = accumulator + ULong__hashCode_impl_6hv2lb(element) | 0;
    }
    return accumulator + this.sign_1.hashCode() | 0;
  };
  protoOf(BigInteger).toString = function () {
    return this.toString_w4mr8s_k$(10);
  };
  protoOf(BigInteger).toString_w4mr8s_k$ = function (base) {
    var tmp;
    if (this.sign_1.equals(Sign_NEGATIVE_getInstance())) {
      tmp = '-';
    } else {
      tmp = '';
    }
    var sign = tmp;
    return sign + this.toStringWithoutSign_ueumcf_k$(base);
  };
  protoOf(BigInteger).toStringWithoutSign_ueumcf_k$ = function (base) {
    return Companion_getInstance_6().arithmetic_1.toString_t6xuz8_k$(this.magnitude_1, base);
  };
  protoOf(BigInteger).times_egl6ah_k$ = function (char) {
    if (this.compareTo_m610zm_k$(0) < 0) {
      throw RuntimeException_init_$Create$('Char cannot be multiplied with negative number');
    }
    var counter = this;
    var stringBuilder = StringBuilder_init_$Create$();
    while (counter.compareTo_m610zm_k$(0) > 0) {
      stringBuilder.append_am5a4z_k$(char);
      counter = counter.dec_24n6_k$();
    }
    return stringBuilder.toString();
  };
  protoOf(BigInteger).toModularBigInteger_pml7ux_k$ = function (modulo) {
    var creator = Companion_getInstance_7().creatorForModulo_exd2r5_k$(modulo);
    return creator.fromBigInteger_vytzoc_k$(this);
  };
  protoOf(BigInteger).intValue_7o5gpp_k$ = function (exactRequired) {
    if (exactRequired ? this.compareTo_m610zm_k$(IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$()) > 0 ? true : this.compareTo_m610zm_k$(IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$()) < 0 : false) {
      throw ArithmeticException_init_$Create$('Cannot convert to int and provide exact value');
    }
    // Inline function 'kotlin.ULong.toInt' call
    var this_0 = ULongArray__get_impl_pr71q9(this.magnitude_1, 0);
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0).toInt_1tsl84_k$();
    return imul(tmp$ret$0, this.signum_exb08b_k$());
  };
  protoOf(BigInteger).longValue_919ii8_k$ = function (exactRequired) {
    if (exactRequired ? this.compareTo_m610zm_k$(Companion_getInstance().get_MAX_VALUE_54a9lf_k$()) > 0 ? true : this.compareTo_m610zm_k$(Companion_getInstance().get_MIN_VALUE_7nmmor_k$()) < 0 : false) {
      throw ArithmeticException_init_$Create$('Cannot convert to long and provide exact value');
    }
    var tmp;
    if (_ULongArray___get_size__impl__ju6dtr(this.magnitude_1) > 1) {
      // Inline function 'kotlin.ULong.shl' call
      var this_0 = ULongArray__get_impl_pr71q9(this.magnitude_1, 1);
      var firstBit = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).shl_bg8if3_k$(63));
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.ULong.toLong' call
      var this_1 = ULongArray__get_impl_pr71q9(this.magnitude_1, 0);
      var tmp_0 = _ULong___get_data__impl__fggpzb(this_1);
      // Inline function 'kotlin.ULong.toLong' call
      var tmp$ret$2 = _ULong___get_data__impl__fggpzb(firstBit);
      var this_2 = tmp_0.or_v7fvkl_k$(tmp$ret$2);
      var other = this.signum_exb08b_k$();
      tmp = this_2.times_nfzjiw_k$(toLong(other));
    } else {
      // Inline function 'kotlin.Long.times' call
      // Inline function 'kotlin.ULong.toLong' call
      var this_3 = ULongArray__get_impl_pr71q9(this.magnitude_1, 0);
      var this_4 = _ULong___get_data__impl__fggpzb(this_3);
      var other_0 = this.signum_exb08b_k$();
      return this_4.times_nfzjiw_k$(toLong(other_0));
    }
    return tmp;
  };
  protoOf(BigInteger).byteValue_eif72c_k$ = function (exactRequired) {
    if (exactRequired ? this.compareTo_m610zm_k$(ByteCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$()) > 0 ? true : this.compareTo_m610zm_k$(ByteCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$()) < 0 : false) {
      throw ArithmeticException_init_$Create$('Cannot convert to byte and provide exact value');
    }
    // Inline function 'kotlin.ULong.toByte' call
    var this_0 = ULongArray__get_impl_pr71q9(this.magnitude_1, 0);
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0).toByte_edm0nx_k$();
    return toByte(tmp$ret$0 * this.signum_exb08b_k$() | 0);
  };
  protoOf(BigInteger).shortValue_w04c9c_k$ = function (exactRequired) {
    if (exactRequired ? this.compareTo_m610zm_k$(ShortCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$()) > 0 ? true : this.compareTo_m610zm_k$(ShortCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$()) < 0 : false) {
      throw ArithmeticException_init_$Create$('Cannot convert to short and provide exact value');
    }
    // Inline function 'kotlin.ULong.toShort' call
    var this_0 = ULongArray__get_impl_pr71q9(this.magnitude_1, 0);
    var tmp$ret$0 = _ULong___get_data__impl__fggpzb(this_0).toShort_ja8oqn_k$();
    return toShort(tmp$ret$0 * this.signum_exb08b_k$() | 0);
  };
  protoOf(BigInteger).uintValue_8037ik_k$ = function (exactRequired) {
    if (exactRequired ? this.compareTo_m610zm_k$(new UInt(Companion_getInstance_0().get_MAX_VALUE_bmdakz_k$())) > 0 ? true : this.get_isNegative_i24zqw_k$() : false) {
      throw ArithmeticException_init_$Create$('Cannot convert to unsigned int and provide exact value');
    }
    // Inline function 'kotlin.ULong.toUInt' call
    var this_0 = ULongArray__get_impl_pr71q9(this.magnitude_1, 0);
    // Inline function 'kotlin.toUInt' call
    var this_1 = _ULong___get_data__impl__fggpzb(this_0);
    return _UInt___init__impl__l7qpdl(this_1.toInt_1tsl84_k$());
  };
  protoOf(BigInteger).ulongValue_759jq8_k$ = function (exactRequired) {
    if (exactRequired ? this.compareTo_m610zm_k$(new ULong(Companion_getInstance_1().get_MAX_VALUE_53xrtk_k$())) > 0 ? true : this.get_isNegative_i24zqw_k$() : false) {
      throw ArithmeticException_init_$Create$('Cannot convert to unsigned long and provide exact value');
    }
    var tmp;
    if (_ULongArray___get_size__impl__ju6dtr(this.magnitude_1) > 1) {
      // Inline function 'kotlin.ULong.shl' call
      var this_0 = ULongArray__get_impl_pr71q9(this.magnitude_1, 1);
      var firstBit = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).shl_bg8if3_k$(63));
      // Inline function 'kotlin.ULong.or' call
      var this_1 = ULongArray__get_impl_pr71q9(this.magnitude_1, 0);
      tmp = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(firstBit)));
    } else {
      return ULongArray__get_impl_pr71q9(this.magnitude_1, 0);
    }
    return tmp;
  };
  protoOf(BigInteger).ubyteValue_v7eqw0_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      var tmp_0;
      // Inline function 'kotlin.UByte.toUInt' call
      var this_0 = Companion_getInstance_2().get_MAX_VALUE_53rlic_k$();
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(_UByte___get_data__impl__jof9qr(this_0) & 255);
      if (this.compareTo_m610zm_k$(new UInt(tmp$ret$0)) > 0) {
        tmp_0 = true;
      } else {
        tmp_0 = this.get_isNegative_i24zqw_k$();
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to unsigned byte and provide exact value');
    }
    // Inline function 'kotlin.ULong.toUByte' call
    var this_1 = ULongArray__get_impl_pr71q9(this.magnitude_1, 0);
    // Inline function 'kotlin.toUByte' call
    var this_2 = _ULong___get_data__impl__fggpzb(this_1);
    return _UByte___init__impl__g9hnc4(this_2.toByte_edm0nx_k$());
  };
  protoOf(BigInteger).ushortValue_epxg36_k$ = function (exactRequired) {
    var tmp;
    var tmp_0;
    if (exactRequired) {
      // Inline function 'kotlin.UShort.toUInt' call
      var this_0 = Companion_getInstance_3().get_MAX_VALUE_gfkyu8_k$();
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(_UShort___get_data__impl__g0245(this_0) & 65535);
      tmp_0 = this.compareTo_m610zm_k$(new UInt(tmp$ret$0)) > 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = this.get_isNegative_i24zqw_k$();
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to unsigned short and provide exact value');
    }
    // Inline function 'kotlin.ULong.toUShort' call
    var this_1 = ULongArray__get_impl_pr71q9(this.magnitude_1, 0);
    // Inline function 'kotlin.toUShort' call
    var this_2 = _ULong___get_data__impl__fggpzb(this_1);
    return _UShort___init__impl__jigrne(this_2.toShort_ja8oqn_k$());
  };
  protoOf(BigInteger).floatValue_cm9a28_k$ = function (exactRequired) {
    if (exactRequired ? this.abs_22cy_k$().compareTo_m610zm_k$(FloatCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$()) > 0 : false) {
      throw ArithmeticException_init_$Create$('Cannot convert to float and provide exact value');
    }
    // Inline function 'kotlin.text.toFloat' call
    var this_0 = this.toString();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toDouble(this_0);
  };
  protoOf(BigInteger).doubleValue_uyt9c5_k$ = function (exactRequired) {
    if (exactRequired ? this.abs_22cy_k$().compareTo_m610zm_k$(DoubleCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$()) > 0 : false) {
      println(this.abs_22cy_k$());
      println(DoubleCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$());
      if (this.abs_22cy_k$().compareTo_m610zm_k$(DoubleCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$()) > 0) {
        println('huh');
      }
      throw ArithmeticException_init_$Create$('Cannot convert to double and provide exact value');
    }
    return toDouble(this.toString());
  };
  protoOf(BigInteger).toUByteArray_vpwqbl_k$ = function () {
    return Companion_getInstance_6().arithmetic_1.toUByteArray_aqrniv_k$(this.magnitude_1);
  };
  protoOf(BigInteger).toByteArray_qczt2u_k$ = function () {
    return Companion_getInstance_6().arithmetic_1.toByteArray_qci4lq_k$(this.magnitude_1);
  };
  protoOf(BigInteger).rangeTo_58sndg_k$ = function (other) {
    return new BigIntegerRange(this, other);
  };
  function BigInteger32ArithmeticInterface() {
  }
  function BigIntegerArithmetic() {
  }
  var Sign_POSITIVE_instance;
  var Sign_NEGATIVE_instance;
  var Sign_ZERO_instance;
  function values_3() {
    return [Sign_POSITIVE_getInstance(), Sign_NEGATIVE_getInstance(), Sign_ZERO_getInstance()];
  }
  function valueOf_3(value) {
    switch (value) {
      case 'POSITIVE':
        return Sign_POSITIVE_getInstance();
      case 'NEGATIVE':
        return Sign_NEGATIVE_getInstance();
      case 'ZERO':
        return Sign_ZERO_getInstance();
      default:
        Sign_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Sign_entriesInitialized;
  function Sign_initEntries() {
    if (Sign_entriesInitialized)
      return Unit_getInstance();
    Sign_entriesInitialized = true;
    Sign_POSITIVE_instance = new Sign('POSITIVE', 0);
    Sign_NEGATIVE_instance = new Sign('NEGATIVE', 1);
    Sign_ZERO_instance = new Sign('ZERO', 2);
  }
  function Sign(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(Sign).not_2cb7_k$ = function () {
    var tmp;
    switch (this.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = Sign_NEGATIVE_getInstance();
        break;
      case 1:
        tmp = Sign_POSITIVE_getInstance();
        break;
      case 2:
        tmp = Sign_ZERO_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(Sign).toInt_1tsl84_k$ = function () {
    var tmp;
    switch (this.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = 1;
        break;
      case 1:
        tmp = -1;
        break;
      case 2:
        tmp = 0;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function Sign_POSITIVE_getInstance() {
    Sign_initEntries();
    return Sign_POSITIVE_instance;
  }
  function Sign_NEGATIVE_getInstance() {
    Sign_initEntries();
    return Sign_NEGATIVE_instance;
  }
  function Sign_ZERO_getInstance() {
    Sign_initEntries();
    return Sign_ZERO_instance;
  }
  function toBigInteger(_this__u8e3s4) {
    return Companion_getInstance_6().fromInt_wjro43_k$(_this__u8e3s4);
  }
  function get_chosenArithmetic() {
    _init_properties_Configuration_kt__48zwcc();
    return chosenArithmetic;
  }
  var chosenArithmetic;
  var properties_initialized_Configuration_kt_gex7mu;
  function _init_properties_Configuration_kt__48zwcc() {
    if (!properties_initialized_Configuration_kt_gex7mu) {
      properties_initialized_Configuration_kt_gex7mu = true;
      chosenArithmetic = BigInteger63Arithmetic_getInstance();
    }
  }
  var Platform_JVM_instance;
  var Platform_NATIVE_instance;
  var Platform_JS_instance;
  function values_4() {
    return [Platform_JVM_getInstance(), Platform_NATIVE_getInstance(), Platform_JS_getInstance()];
  }
  function valueOf_4(value) {
    switch (value) {
      case 'JVM':
        return Platform_JVM_getInstance();
      case 'NATIVE':
        return Platform_NATIVE_getInstance();
      case 'JS':
        return Platform_JS_getInstance();
      default:
        Platform_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_getInstance();
    Platform_entriesInitialized = true;
    Platform_JVM_instance = new Platform('JVM', 0);
    Platform_NATIVE_instance = new Platform('NATIVE', 1);
    Platform_JS_instance = new Platform('JS', 2);
  }
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Platform_JVM_getInstance() {
    Platform_initEntries();
    return Platform_JVM_instance;
  }
  function Platform_NATIVE_getInstance() {
    Platform_initEntries();
    return Platform_NATIVE_instance;
  }
  function Platform_JS_getInstance() {
    Platform_initEntries();
    return Platform_JS_instance;
  }
  function Sextuple(a, b, c, d, e, f) {
    this.a_1 = a;
    this.b_1 = b;
    this.c_1 = c;
    this.d_1 = d;
    this.e_1 = e;
    this.f_1 = f;
  }
  protoOf(Sextuple).get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  protoOf(Sextuple).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(Sextuple).get_c_1mhr5m_k$ = function () {
    return this.c_1;
  };
  protoOf(Sextuple).get_d_1mhr5n_k$ = function () {
    return this.d_1;
  };
  protoOf(Sextuple).get_e_1mhr5o_k$ = function () {
    return this.e_1;
  };
  protoOf(Sextuple).get_f_1mhr5p_k$ = function () {
    return this.f_1;
  };
  protoOf(Sextuple).component1_7eebsc_k$ = function () {
    return this.a_1;
  };
  protoOf(Sextuple).component2_7eebsb_k$ = function () {
    return this.b_1;
  };
  protoOf(Sextuple).component3_7eebsa_k$ = function () {
    return this.c_1;
  };
  protoOf(Sextuple).component4_7eebs9_k$ = function () {
    return this.d_1;
  };
  protoOf(Sextuple).component5_7eebs8_k$ = function () {
    return this.e_1;
  };
  protoOf(Sextuple).component6_7eebs7_k$ = function () {
    return this.f_1;
  };
  protoOf(Sextuple).copy_mud51k_k$ = function (a, b, c, d, e, f) {
    return new Sextuple(a, b, c, d, e, f);
  };
  protoOf(Sextuple).copy$default_w8mk28_k$ = function (a, b, c, d, e, f, $super) {
    a = a === VOID ? this.a_1 : a;
    b = b === VOID ? this.b_1 : b;
    c = c === VOID ? this.c_1 : c;
    d = d === VOID ? this.d_1 : d;
    e = e === VOID ? this.e_1 : e;
    f = f === VOID ? this.f_1 : f;
    return $super === VOID ? this.copy_mud51k_k$(a, b, c, d, e, f) : $super.copy_mud51k_k$.call(this, a, b, c, d, e, f);
  };
  protoOf(Sextuple).toString = function () {
    return 'Sextuple(a=' + this.a_1 + ', b=' + this.b_1 + ', c=' + this.c_1 + ', d=' + this.d_1 + ', e=' + this.e_1 + ', f=' + this.f_1 + ')';
  };
  protoOf(Sextuple).hashCode = function () {
    var result = this.a_1 == null ? 0 : hashCode(this.a_1);
    result = imul(result, 31) + (this.b_1 == null ? 0 : hashCode(this.b_1)) | 0;
    result = imul(result, 31) + (this.c_1 == null ? 0 : hashCode(this.c_1)) | 0;
    result = imul(result, 31) + (this.d_1 == null ? 0 : hashCode(this.d_1)) | 0;
    result = imul(result, 31) + (this.e_1 == null ? 0 : hashCode(this.e_1)) | 0;
    result = imul(result, 31) + (this.f_1 == null ? 0 : hashCode(this.f_1)) | 0;
    return result;
  };
  protoOf(Sextuple).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Sextuple))
      return false;
    var tmp0_other_with_cast = other instanceof Sextuple ? other : THROW_CCE();
    if (!equals(this.a_1, tmp0_other_with_cast.a_1))
      return false;
    if (!equals(this.b_1, tmp0_other_with_cast.b_1))
      return false;
    if (!equals(this.c_1, tmp0_other_with_cast.c_1))
      return false;
    if (!equals(this.d_1, tmp0_other_with_cast.d_1))
      return false;
    if (!equals(this.e_1, tmp0_other_with_cast.e_1))
      return false;
    if (!equals(this.f_1, tmp0_other_with_cast.f_1))
      return false;
    return true;
  };
  function Quadruple(a, b, c, d) {
    this.a_1 = a;
    this.b_1 = b;
    this.c_1 = c;
    this.d_1 = d;
  }
  protoOf(Quadruple).get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  protoOf(Quadruple).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(Quadruple).get_c_1mhr5m_k$ = function () {
    return this.c_1;
  };
  protoOf(Quadruple).get_d_1mhr5n_k$ = function () {
    return this.d_1;
  };
  protoOf(Quadruple).component1_7eebsc_k$ = function () {
    return this.a_1;
  };
  protoOf(Quadruple).component2_7eebsb_k$ = function () {
    return this.b_1;
  };
  protoOf(Quadruple).component3_7eebsa_k$ = function () {
    return this.c_1;
  };
  protoOf(Quadruple).component4_7eebs9_k$ = function () {
    return this.d_1;
  };
  protoOf(Quadruple).copy_hxkmbx_k$ = function (a, b, c, d) {
    return new Quadruple(a, b, c, d);
  };
  protoOf(Quadruple).copy$default_uocxhf_k$ = function (a, b, c, d, $super) {
    a = a === VOID ? this.a_1 : a;
    b = b === VOID ? this.b_1 : b;
    c = c === VOID ? this.c_1 : c;
    d = d === VOID ? this.d_1 : d;
    return $super === VOID ? this.copy_hxkmbx_k$(a, b, c, d) : $super.copy_hxkmbx_k$.call(this, a, b, c, d);
  };
  protoOf(Quadruple).toString = function () {
    return 'Quadruple(a=' + this.a_1 + ', b=' + this.b_1 + ', c=' + this.c_1 + ', d=' + this.d_1 + ')';
  };
  protoOf(Quadruple).hashCode = function () {
    var result = this.a_1 == null ? 0 : hashCode(this.a_1);
    result = imul(result, 31) + (this.b_1 == null ? 0 : hashCode(this.b_1)) | 0;
    result = imul(result, 31) + (this.c_1 == null ? 0 : hashCode(this.c_1)) | 0;
    result = imul(result, 31) + (this.d_1 == null ? 0 : hashCode(this.d_1)) | 0;
    return result;
  };
  protoOf(Quadruple).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Quadruple))
      return false;
    var tmp0_other_with_cast = other instanceof Quadruple ? other : THROW_CCE();
    if (!equals(this.a_1, tmp0_other_with_cast.a_1))
      return false;
    if (!equals(this.b_1, tmp0_other_with_cast.b_1))
      return false;
    if (!equals(this.c_1, tmp0_other_with_cast.c_1))
      return false;
    if (!equals(this.d_1, tmp0_other_with_cast.d_1))
      return false;
    return true;
  };
  function SignedUIntArray(unsignedValue, sign) {
    this.unsignedValue_1 = unsignedValue;
    this.sign_1 = sign;
  }
  protoOf(SignedUIntArray).get_unsignedValue_882ixs_k$ = function () {
    return this.unsignedValue_1;
  };
  protoOf(SignedUIntArray).get_sign_woubd2_k$ = function () {
    return this.sign_1;
  };
  protoOf(SignedUIntArray).component1_k11wzl_k$ = function () {
    return this.unsignedValue_1;
  };
  protoOf(SignedUIntArray).component2_7eebsb_k$ = function () {
    return this.sign_1;
  };
  protoOf(SignedUIntArray).copy_g8mots_k$ = function (unsignedValue, sign) {
    return new SignedUIntArray(unsignedValue, sign);
  };
  protoOf(SignedUIntArray).copy$default_sat5jc_k$ = function (unsignedValue, sign, $super) {
    unsignedValue = unsignedValue === VOID ? this.unsignedValue_1 : unsignedValue;
    sign = sign === VOID ? this.sign_1 : sign;
    return $super === VOID ? this.copy_g8mots_k$(unsignedValue, sign) : $super.copy_g8mots_k$.call(this, new UIntArray(unsignedValue), sign);
  };
  protoOf(SignedUIntArray).toString = function () {
    return 'SignedUIntArray(unsignedValue=' + new UIntArray(this.unsignedValue_1) + ', sign=' + this.sign_1 + ')';
  };
  protoOf(SignedUIntArray).hashCode = function () {
    var result = UIntArray__hashCode_impl_hr7ost(this.unsignedValue_1);
    result = imul(result, 31) + getBooleanHashCode(this.sign_1) | 0;
    return result;
  };
  protoOf(SignedUIntArray).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SignedUIntArray))
      return false;
    var tmp0_other_with_cast = other instanceof SignedUIntArray ? other : THROW_CCE();
    if (!equals(this.unsignedValue_1, tmp0_other_with_cast.unsignedValue_1))
      return false;
    if (!(this.sign_1 === tmp0_other_with_cast.sign_1))
      return false;
    return true;
  };
  function signedAdd($this, first, second) {
    var tmp;
    if (!!(first.sign_1 ^ second.sign_1)) {
      var tmp_0;
      if ($this.compareTo_bw0y4u_k$(first.unsignedValue_1, second.unsignedValue_1) > 0) {
        tmp_0 = new SignedUIntArray($this.minus_qob5ez_k$(first.unsignedValue_1, second.unsignedValue_1), first.sign_1);
      } else {
        tmp_0 = new SignedUIntArray($this.minus_qob5ez_k$(second.unsignedValue_1, first.unsignedValue_1), second.sign_1);
      }
      tmp = tmp_0;
    } else {
      tmp = new SignedUIntArray($this.plus_9mqg7p_k$(first.unsignedValue_1, second.unsignedValue_1), first.sign_1);
    }
    return tmp;
  }
  function signedSubtract($this, first, second) {
    return signedAdd($this, first, second.copy$default_sat5jc_k$(VOID, !second.sign_1));
  }
  function signedMultiply($this, first, second) {
    return new SignedUIntArray($this.times_239av3_k$(first.unsignedValue_1, second.unsignedValue_1), !!!(first.sign_1 ^ second.sign_1));
  }
  function signedDivide($this, first, second) {
    return new SignedUIntArray($this.div_reimqc_k$(first.unsignedValue_1, second.unsignedValue_1), !!!(first.sign_1 ^ second.sign_1));
  }
  function signedRemainder($this, first, second) {
    return new SignedUIntArray($this.rem_lt66t_k$(first.unsignedValue_1, second.unsignedValue_1), !!!(first.sign_1 ^ second.sign_1));
  }
  function checkReciprocal($this, operand, reciprocal) {
    var product = $this.times_239av3_k$(operand, reciprocal.get_first_irdx8n_k$().storage_1);
    var check = $this.shr_fl2abe_k$(product, reciprocal.get_second_jf7fjx_k$());
    var tmp;
    if (!equals(check, $this.ONE_1)) {
      tmp = new Pair(reciprocal.get_first_irdx8n_k$(), reciprocal.get_second_jf7fjx_k$() - 1 | 0);
    } else {
      tmp = new Pair(reciprocal.get_first_irdx8n_k$(), reciprocal.get_second_jf7fjx_k$());
    }
    return tmp;
  }
  function reqursiveSqrt($this, operand) {
    var n = _UIntArray___get_size__impl__r6l8ci(operand);
    // Inline function 'kotlin.math.floor' call
    var x = (n - 1 | 0) / 4;
    var tmp$ret$0 = Math.floor(x);
    var l = numberToInt(tmp$ret$0);
    if (l === 0) {
      return $this.basecaseSqrt_fe9q9t_k$(operand);
    }
    var step = n / 4 | 0;
    var stepRemainder = n % 4 | 0;
    var baseLPowerShift = imul(32, l);
    // Inline function 'kotlin.collections.copyOfRange' call
    var fromIndex = n - (imul(3, step) + stepRemainder | 0) | 0;
    var toIndex = n - (imul(2, step) + stepRemainder | 0) | 0;
    var a1 = _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(operand), fromIndex, toIndex));
    // Inline function 'kotlin.collections.copyOfRange' call
    var toIndex_0 = n - (imul(3, step) + stepRemainder | 0) | 0;
    var a0 = _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(operand), 0, toIndex_0));
    // Inline function 'kotlin.collections.copyOfRange' call
    var fromIndex_0 = n - (imul(2, step) + stepRemainder | 0) | 0;
    var a3a2 = _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(operand), fromIndex_0, n));
    var tmp0_container = reqursiveSqrt($this, a3a2);
    var sPrim = tmp0_container.component1_7eebsc_k$().storage_1;
    var rPrim = tmp0_container.component2_7eebsb_k$().storage_1;
    var tmp1_container = $this.basicDivide2_80atrp_k$($this.plus_9mqg7p_k$($this.shl_236f9c_k$(rPrim, baseLPowerShift), a1), $this.shl_236f9c_k$(sPrim, 1));
    var q = tmp1_container.component1_7eebsc_k$().storage_1;
    var u = tmp1_container.component2_7eebsb_k$().storage_1;
    var s = $this.plus_9mqg7p_k$($this.shl_236f9c_k$(sPrim, baseLPowerShift), q);
    var r = $this.minus_qob5ez_k$($this.plus_9mqg7p_k$($this.shl_236f9c_k$(u, baseLPowerShift), a0), $this.times_239av3_k$(q, q));
    return new Pair(new UIntArray(s), new UIntArray(r));
  }
  function euclideanGcd($this, first, second) {
    var u = first;
    var v = second;
    while (!equals(v, $this.ZERO_1)) {
      var tmpU = u;
      u = v;
      v = $this.rem_lt66t_k$(tmpU, v);
    }
    return u;
  }
  function binaryGcd($this, first, second) {
    var $this_0 = $this;
    var first_0 = first;
    var second_0 = second;
    $l$1: do {
      $l$0: do {
        if (contentEquals(first_0, second_0)) {
          return first_0;
        }
        if (contentEquals(first_0, $this_0.ZERO_1)) {
          return second_0;
        }
        if (contentEquals(second_0, $this_0.ZERO_1)) {
          return first_0;
        }
        if (contentEquals($this_0.and_c5bi3o_k$(first_0, $this_0.ONE_1), $this_0.ZERO_1)) {
          if (contentEquals($this_0.and_c5bi3o_k$(second_0, $this_0.ONE_1), $this_0.ZERO_1)) {
            return $this_0.shl_236f9c_k$(binaryGcd($this_0, $this_0.shr_fl2abe_k$(first_0, 1), $this_0.shr_fl2abe_k$(second_0, 1)), 1);
          } else {
            var tmp0 = $this_0;
            var tmp1 = $this_0.shr_fl2abe_k$(first_0, 1);
            $this_0 = tmp0;
            first_0 = tmp1;
            second_0 = second_0;
            continue $l$0;
          }
        }
        if (contentEquals($this_0.and_c5bi3o_k$(second_0, $this_0.ONE_1), $this_0.ZERO_1)) {
          var tmp3 = $this_0;
          var tmp5 = $this_0.shr_fl2abe_k$(second_0, 1);
          $this_0 = tmp3;
          first_0 = first_0;
          second_0 = tmp5;
          continue $l$0;
        }
        var tmp;
        if ($this_0.compare_nba68r_k$(first_0, second_0) === 1) {
          var tmp6 = $this_0;
          var tmp7 = $this_0.shr_fl2abe_k$($this_0.subtract_n0lojl_k$(first_0, second_0), 1);
          $this_0 = tmp6;
          first_0 = tmp7;
          second_0 = second_0;
          continue $l$0;
        } else {
          var tmp9 = $this_0;
          var tmp10 = $this_0.shr_fl2abe_k$($this_0.subtract_n0lojl_k$(second_0, first_0), 1);
          var tmp11 = first_0;
          $this_0 = tmp9;
          first_0 = tmp10;
          second_0 = tmp11;
          continue $l$0;
        }
      }
       while (false);
    }
     while (true);
  }
  function oldToByteArray($this, operand, sign) {
    if (UIntArray__isEmpty_impl_vd8j4n(operand)) {
      // Inline function 'kotlin.emptyArray' call
      return [];
    }
    // Inline function 'kotlin.collections.toUByteArray' call
    // Inline function 'kotlin.byteArrayOf' call
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$3 = (new Int8Array([1])).slice();
    _UByteArray___init__impl__ip4y9n(tmp$ret$3);
    var bitLength = $this.bitLength_5uyy7h_k$(operand);
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp;
    switch (sign.get_ordinal_ip24qg_k$()) {
      case 2:
        tmp = emptyList();
        break;
      case 0:
        // Inline function 'kotlin.collections.flatMap' call

        // Inline function 'kotlin.collections.flatMapTo' call

        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = UIntArray__iterator_impl_tkdv7k(operand);
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$().data_1;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldToByteArray.<anonymous>' call
          // Inline function 'kotlin.UInt.toByte' call
          // Inline function 'kotlin.UInt.and' call
          // Inline function 'kotlin.UInt.shr' call
          var this_0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) >>> 24 | 0);
          var other = _UInt___init__impl__l7qpdl(255);
          var this_1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) & _UInt___get_data__impl__f0vqqw(other));
          var tmp_0 = toByte(_UInt___get_data__impl__f0vqqw(this_1));
          // Inline function 'kotlin.UInt.toByte' call
          // Inline function 'kotlin.UInt.and' call
          // Inline function 'kotlin.UInt.shr' call
          var this_2 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) >>> 16 | 0);
          var other_0 = _UInt___init__impl__l7qpdl(255);
          var this_3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_2) & _UInt___get_data__impl__f0vqqw(other_0));
          var tmp_1 = toByte(_UInt___get_data__impl__f0vqqw(this_3));
          // Inline function 'kotlin.UInt.toByte' call
          // Inline function 'kotlin.UInt.and' call
          // Inline function 'kotlin.UInt.shr' call
          var this_4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) >>> 8 | 0);
          var other_1 = _UInt___init__impl__l7qpdl(255);
          var this_5 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_4) & _UInt___get_data__impl__f0vqqw(other_1));
          var tmp_2 = toByte(_UInt___get_data__impl__f0vqqw(this_5));
          // Inline function 'kotlin.UInt.toByte' call
          // Inline function 'kotlin.UInt.and' call
          var other_2 = _UInt___init__impl__l7qpdl(255);
          var this_6 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) & _UInt___get_data__impl__f0vqqw(other_2));
          var tmp$ret$15 = toByte(_UInt___get_data__impl__f0vqqw(this_6));
          var list = listOf([tmp_0, tmp_1, tmp_2, tmp$ret$15]);
          addAll(destination, list);
        }

        var collected = flatten(reversed(chunked(takeLast(destination, imul(_UIntArray___get_size__impl__r6l8ci(operand), 4) + 1 | 0), 4)));
        var tmp_3;
        if ((bitLength % 8 | 0) === 0) {
          tmp_3 = plus(listOf_0(0), collected);
        } else {
          tmp_3 = collected;
        }

        var corrected = tmp_3;
        tmp = corrected;
        break;
      case 1:
        // Inline function 'kotlin.collections.map' call

        // Inline function 'kotlin.collections.mapTo' call

        var destination_0 = ArrayList_init_$Create$_0(_UIntArray___get_size__impl__r6l8ci(operand));
        var tmp0_iterator_0 = UIntArray__iterator_impl_tkdv7k(operand);
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator_0.next_20eer_k$().data_1;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldToByteArray.<anonymous>' call
          // Inline function 'kotlin.UInt.inv' call
          var tmp$ret$20 = _UInt___init__impl__l7qpdl(~_UInt___get_data__impl__f0vqqw(item));
          destination_0.add_utx5q5_k$(new UInt(tmp$ret$20));
        }

        var inverted = toUIntArray(destination_0);
        var converted = $this.plus_stmrwq_k$(inverted, _UInt___init__impl__l7qpdl(1));
        // Inline function 'kotlin.collections.flatMap' call

        // Inline function 'kotlin.collections.flatMapTo' call

        var destination_1 = ArrayList_init_$Create$();
        var tmp0_iterator_1 = UIntArray__iterator_impl_tkdv7k(converted);
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_1.next_20eer_k$().data_1;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldToByteArray.<anonymous>' call
          // Inline function 'kotlin.UInt.toByte' call
          // Inline function 'kotlin.UInt.and' call
          // Inline function 'kotlin.UInt.shr' call
          var this_7 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_0) >>> 24 | 0);
          var other_3 = _UInt___init__impl__l7qpdl(255);
          var this_8 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_7) & _UInt___get_data__impl__f0vqqw(other_3));
          var tmp_4 = toByte(_UInt___get_data__impl__f0vqqw(this_8));
          // Inline function 'kotlin.UInt.toByte' call
          // Inline function 'kotlin.UInt.and' call
          // Inline function 'kotlin.UInt.shr' call
          var this_9 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_0) >>> 16 | 0);
          var other_4 = _UInt___init__impl__l7qpdl(255);
          var this_10 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_9) & _UInt___get_data__impl__f0vqqw(other_4));
          var tmp_5 = toByte(_UInt___get_data__impl__f0vqqw(this_10));
          // Inline function 'kotlin.UInt.toByte' call
          // Inline function 'kotlin.UInt.and' call
          // Inline function 'kotlin.UInt.shr' call
          var this_11 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_0) >>> 8 | 0);
          var other_5 = _UInt___init__impl__l7qpdl(255);
          var this_12 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_11) & _UInt___get_data__impl__f0vqqw(other_5));
          var tmp_6 = toByte(_UInt___get_data__impl__f0vqqw(this_12));
          // Inline function 'kotlin.UInt.toByte' call
          // Inline function 'kotlin.UInt.and' call
          var other_6 = _UInt___init__impl__l7qpdl(255);
          var this_13 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_0) & _UInt___get_data__impl__f0vqqw(other_6));
          var tmp$ret$33 = toByte(_UInt___get_data__impl__f0vqqw(this_13));
          var list_0 = listOf([tmp_4, tmp_5, tmp_6, tmp$ret$33]);
          addAll(destination_1, list_0);
        }

        var collected_0 = flatten(reversed(chunked(takeLast(destination_1, imul(_UIntArray___get_size__impl__r6l8ci(operand), 4) + 1 | 0), 4)));
        var tmp_7;
        if ((bitLength % 8 | 0) === 0) {
          tmp_7 = plus(listOf_0(-1), collected_0);
        } else {
          tmp_7 = collected_0;
        }

        var corrected_0 = tmp_7;
        // Inline function 'kotlin.collections.takeWhile' call

        var list_1 = ArrayList_init_$Create$();
        var tmp0_iterator_2 = corrected_0.iterator_jk1svi_k$();
        $l$loop: while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
          var item_0 = tmp0_iterator_2.next_20eer_k$();
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldToByteArray.<anonymous>' call
          if (!(item_0 === -1))
            break $l$loop;
          list_1.add_utx5q5_k$(item_0);
        }

        var signExtensionCount = list_1.get_size_woubt6_k$();
        var tmp_8;
        if (signExtensionCount > 1) {
          tmp_8 = corrected_0.subList_xle3r2_k$(signExtensionCount - 1 | 0, corrected_0.get_size_woubt6_k$());
        } else {
          tmp_8 = corrected_0;
        }

        var perfected = tmp_8;
        tmp = perfected;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var this_14 = tmp;
    return copyToArray(this_14);
  }
  function oldFromByteArray($this, byteArray) {
    var sign = (byteArray[0] >>> 7 | 0) & 1;
    var chunked_0 = chunked(reversed(toList(byteArray)), 4);
    var tmp;
    switch (sign) {
      case 0:
        tmp = Sign_POSITIVE_getInstance();
        break;
      case 1:
        tmp = Sign_NEGATIVE_getInstance();
        break;
      default:
        throw RuntimeException_init_$Create$('Invalid sign value when converting from byte array');
    }
    var resolvedSign = tmp;
    var tmp_0;
    switch (resolvedSign.get_ordinal_ip24qg_k$()) {
      case 0:
        // Inline function 'kotlin.collections.flatMap' call

        // Inline function 'kotlin.collections.flatMapTo' call

        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = chunked_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>' call
          // Inline function 'kotlin.collections.foldIndexed' call
          var this_0 = reversed(element);
          var index = 0;
          var accumulator = _UInt___init__impl__l7qpdl(0);
          var tmp0_iterator_0 = this_0.iterator_jk1svi_k$();
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var element_0 = tmp0_iterator_0.next_20eer_k$();
            // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>.<anonymous>' call
            var tmp1 = index;
            index = tmp1 + 1 | 0;
            var index_0 = checkIndexOverflow(tmp1);
            // Inline function 'kotlin.UInt.plus' call
            var this_1 = accumulator;
            // Inline function 'kotlin.UInt.shl' call
            // Inline function 'kotlin.UInt.and' call
            // Inline function 'kotlin.toUInt' call
            var this_2 = _UInt___init__impl__l7qpdl(element_0);
            var other = _UInt___init__impl__l7qpdl(255);
            var this_3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_2) & _UInt___get_data__impl__f0vqqw(other));
            var bitCount = imul(element.get_size_woubt6_k$() - 1 | 0, 8) - imul(index_0, 8) | 0;
            var other_0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_3) << bitCount);
            accumulator = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_1) + _UInt___get_data__impl__f0vqqw(other_0) | 0);
          }
          var result = accumulator;
          var discard = 4 - element.get_size_woubt6_k$() | 0;
          // Inline function 'kotlin.UInt.shr' call
          // Inline function 'kotlin.UInt.shl' call
          var bitCount_0 = imul(8, discard);
          var this_4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(result) << bitCount_0);
          var bitCount_1 = imul(8, discard);
          var discarded = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_4) >>> bitCount_1 | 0);
          // Inline function 'kotlin.uintArrayOf' call
          var tmp$ret$8 = _UIntArray___init__impl__ghjpc6(new Int32Array([discarded]));
          var list = new UIntArray(tmp$ret$8);
          addAll(destination, list);
        }

        var collected = toUIntArray(destination);
        if (contentEquals(collected, $this.ZERO_1)) {
          return new Pair(new UIntArray($this.ZERO_1), Sign_ZERO_getInstance());
        }

        var tmp$ret$14;
        $l$block: {
          // Inline function 'kotlin.collections.dropLastWhile' call
          // Inline function 'kotlin.collections.lastIndex' call
          var inductionVariable = get_lastIndex_0(_UIntArray___get_storage__impl__92a0v0(collected));
          if (0 <= inductionVariable)
            do {
              var index_1 = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>' call
              if (!(UIntArray__get_impl_gp5kza(collected, index_1) === _UInt___init__impl__l7qpdl(0))) {
                tmp$ret$14 = take(collected, index_1 + 1 | 0);
                break $l$block;
              }
            }
             while (0 <= inductionVariable);
          tmp$ret$14 = emptyList();
        }

        var corrected = toUIntArray(tmp$ret$14);
        tmp_0 = new Pair(new UIntArray($this.removeLeadingZeros_ited7a_k$(corrected)), resolvedSign);
        break;
      case 1:
        // Inline function 'kotlin.collections.flatMap' call

        // Inline function 'kotlin.collections.flatMapTo' call

        var destination_0 = ArrayList_init_$Create$();
        var tmp0_iterator_1 = chunked_0.iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var element_1 = tmp0_iterator_1.next_20eer_k$();
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>' call
          // Inline function 'kotlin.collections.foldIndexed' call
          var this_5 = reversed(element_1);
          var index_2 = 0;
          var accumulator_0 = _UInt___init__impl__l7qpdl(0);
          var tmp0_iterator_2 = this_5.iterator_jk1svi_k$();
          while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
            var element_2 = tmp0_iterator_2.next_20eer_k$();
            // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>.<anonymous>' call
            var tmp1_0 = index_2;
            index_2 = tmp1_0 + 1 | 0;
            var index_3 = checkIndexOverflow(tmp1_0);
            // Inline function 'kotlin.UInt.plus' call
            var this_6 = accumulator_0;
            // Inline function 'kotlin.UInt.shl' call
            // Inline function 'kotlin.toUInt' call
            var this_7 = _UInt___init__impl__l7qpdl(element_2);
            var bitCount_2 = imul(element_1.get_size_woubt6_k$() - 1 | 0, 8) - imul(index_3, 8) | 0;
            var other_1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_7) << bitCount_2);
            accumulator_0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_6) + _UInt___get_data__impl__f0vqqw(other_1) | 0);
          }
          var result_0 = accumulator_0;
          // Inline function 'kotlin.uintArrayOf' call
          var tmp$ret$20 = _UIntArray___init__impl__ghjpc6(new Int32Array([result_0]));
          var list_0 = new UIntArray(tmp$ret$20);
          addAll(destination_0, list_0);
        }

        var collected_0 = toUIntArray(destination_0);
        var subtracted = $this.minus_t2i93g_k$(collected_0, _UInt___init__impl__l7qpdl(1));
        // Inline function 'kotlin.collections.map' call

        // Inline function 'kotlin.collections.mapTo' call

        var destination_1 = ArrayList_init_$Create$_0(_UIntArray___get_size__impl__r6l8ci(subtracted));
        var tmp0_iterator_3 = UIntArray__iterator_impl_tkdv7k(subtracted);
        while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator_3.next_20eer_k$().data_1;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>' call
          // Inline function 'kotlin.UInt.inv' call
          var tmp$ret$25 = _UInt___init__impl__l7qpdl(~_UInt___get_data__impl__f0vqqw(item));
          destination_1.add_utx5q5_k$(new UInt(tmp$ret$25));
        }

        var inverted = toUIntArray(destination_1);
        if (contentEquals(collected_0, $this.ZERO_1)) {
          return new Pair(new UIntArray($this.ZERO_1), Sign_ZERO_getInstance());
        }

        tmp_0 = new Pair(new UIntArray($this.removeLeadingZeros_ited7a_k$(inverted)), resolvedSign);
        break;
      case 2:
        throw RuntimeException_init_$Create$("Bug in fromByteArray, sign shouldn't ever be zero at this point.");
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_0;
  }
  function oldFromByteArray_0($this, byteArray) {
    var sign = (byteArray[0] >>> 7 | 0) & 1;
    var chunked_0 = chunked(reversed(toList_0(byteArray)), 4);
    var tmp;
    switch (sign) {
      case 0:
        tmp = Sign_POSITIVE_getInstance();
        break;
      case 1:
        tmp = Sign_NEGATIVE_getInstance();
        break;
      default:
        throw RuntimeException_init_$Create$('Invalid sign value when converting from byte array');
    }
    var resolvedSign = tmp;
    var tmp_0;
    switch (resolvedSign.get_ordinal_ip24qg_k$()) {
      case 0:
        // Inline function 'kotlin.collections.flatMap' call

        // Inline function 'kotlin.collections.flatMapTo' call

        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = chunked_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>' call
          // Inline function 'kotlin.collections.foldIndexed' call
          var this_0 = reversed(element);
          var index = 0;
          var accumulator = _UInt___init__impl__l7qpdl(0);
          var tmp0_iterator_0 = this_0.iterator_jk1svi_k$();
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var element_0 = tmp0_iterator_0.next_20eer_k$();
            // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>.<anonymous>' call
            var tmp1 = index;
            index = tmp1 + 1 | 0;
            var index_0 = checkIndexOverflow(tmp1);
            // Inline function 'kotlin.UInt.plus' call
            var this_1 = accumulator;
            // Inline function 'kotlin.UInt.shl' call
            // Inline function 'kotlin.UInt.and' call
            // Inline function 'kotlin.toUInt' call
            var this_2 = _UInt___init__impl__l7qpdl(element_0);
            var other = _UInt___init__impl__l7qpdl(255);
            var this_3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_2) & _UInt___get_data__impl__f0vqqw(other));
            var bitCount = imul(element.get_size_woubt6_k$() - 1 | 0, 8) - imul(index_0, 8) | 0;
            var other_0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_3) << bitCount);
            accumulator = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_1) + _UInt___get_data__impl__f0vqqw(other_0) | 0);
          }
          var result = accumulator;
          var discard = 4 - element.get_size_woubt6_k$() | 0;
          // Inline function 'kotlin.UInt.shr' call
          // Inline function 'kotlin.UInt.shl' call
          var bitCount_0 = imul(8, discard);
          var this_4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(result) << bitCount_0);
          var bitCount_1 = imul(8, discard);
          var discarded = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_4) >>> bitCount_1 | 0);
          // Inline function 'kotlin.uintArrayOf' call
          var tmp$ret$8 = _UIntArray___init__impl__ghjpc6(new Int32Array([discarded]));
          var list = new UIntArray(tmp$ret$8);
          addAll(destination, list);
        }

        var collected = toUIntArray(destination);
        if (contentEquals(collected, $this.ZERO_1)) {
          return new Pair(new UIntArray($this.ZERO_1), Sign_ZERO_getInstance());
        }

        var tmp$ret$14;
        $l$block: {
          // Inline function 'kotlin.collections.dropLastWhile' call
          // Inline function 'kotlin.collections.lastIndex' call
          var inductionVariable = get_lastIndex_0(_UIntArray___get_storage__impl__92a0v0(collected));
          if (0 <= inductionVariable)
            do {
              var index_1 = inductionVariable;
              inductionVariable = inductionVariable + -1 | 0;
              // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>' call
              if (!(UIntArray__get_impl_gp5kza(collected, index_1) === _UInt___init__impl__l7qpdl(0))) {
                tmp$ret$14 = take(collected, index_1 + 1 | 0);
                break $l$block;
              }
            }
             while (0 <= inductionVariable);
          tmp$ret$14 = emptyList();
        }

        var corrected = toUIntArray(tmp$ret$14);
        tmp_0 = new Pair(new UIntArray($this.removeLeadingZeros_ited7a_k$(corrected)), resolvedSign);
        break;
      case 1:
        // Inline function 'kotlin.collections.flatMap' call

        // Inline function 'kotlin.collections.flatMapTo' call

        var destination_0 = ArrayList_init_$Create$();
        var tmp0_iterator_1 = chunked_0.iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var element_1 = tmp0_iterator_1.next_20eer_k$();
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>' call
          // Inline function 'kotlin.collections.foldIndexed' call
          var this_5 = reversed(element_1);
          var index_2 = 0;
          var accumulator_0 = _UInt___init__impl__l7qpdl(0);
          var tmp0_iterator_2 = this_5.iterator_jk1svi_k$();
          while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
            var element_2 = tmp0_iterator_2.next_20eer_k$();
            // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>.<anonymous>' call
            var tmp1_0 = index_2;
            index_2 = tmp1_0 + 1 | 0;
            var index_3 = checkIndexOverflow(tmp1_0);
            // Inline function 'kotlin.UInt.plus' call
            var this_6 = accumulator_0;
            // Inline function 'kotlin.UInt.shl' call
            // Inline function 'kotlin.toUInt' call
            var this_7 = _UInt___init__impl__l7qpdl(element_2);
            var bitCount_2 = imul(element_1.get_size_woubt6_k$() - 1 | 0, 8) - imul(index_3, 8) | 0;
            var other_1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_7) << bitCount_2);
            accumulator_0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_6) + _UInt___get_data__impl__f0vqqw(other_1) | 0);
          }
          var result_0 = accumulator_0;
          // Inline function 'kotlin.uintArrayOf' call
          var tmp$ret$20 = _UIntArray___init__impl__ghjpc6(new Int32Array([result_0]));
          var list_0 = new UIntArray(tmp$ret$20);
          addAll(destination_0, list_0);
        }

        var collected_0 = toUIntArray(destination_0);
        var subtracted = $this.minus_t2i93g_k$(collected_0, _UInt___init__impl__l7qpdl(1));
        // Inline function 'kotlin.collections.map' call

        // Inline function 'kotlin.collections.mapTo' call

        var destination_1 = ArrayList_init_$Create$_0(_UIntArray___get_size__impl__r6l8ci(subtracted));
        var tmp0_iterator_3 = UIntArray__iterator_impl_tkdv7k(subtracted);
        while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator_3.next_20eer_k$().data_1;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromByteArray.<anonymous>' call
          // Inline function 'kotlin.UInt.inv' call
          var tmp$ret$25 = _UInt___init__impl__l7qpdl(~_UInt___get_data__impl__f0vqqw(item));
          destination_1.add_utx5q5_k$(new UInt(tmp$ret$25));
        }

        var inverted = toUIntArray(destination_1);
        if (contentEquals(collected_0, $this.ZERO_1)) {
          return new Pair(new UIntArray($this.ZERO_1), Sign_ZERO_getInstance());
        }

        tmp_0 = new Pair(new UIntArray($this.removeLeadingZeros_ited7a_k$(inverted)), resolvedSign);
        break;
      case 2:
        throw RuntimeException_init_$Create$("Bug in fromByteArray, sign shouldn't ever be zero at this point.");
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_0;
  }
  function oldFromUByteArray($this, uByteArray, endianness) {
    var tmp;
    switch (endianness.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = chunked(reversed(toList(uByteArray)), 4);
        break;
      case 1:
        tmp = chunked(toList(uByteArray), 4);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var chunked_0 = tmp;
    var resolvedSign = Sign_POSITIVE_getInstance();
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = chunked_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromUByteArray.<anonymous>' call
      // Inline function 'kotlin.collections.foldIndexed' call
      var this_0 = reversed(element);
      var index = 0;
      var accumulator = _UInt___init__impl__l7qpdl(0);
      var tmp0_iterator_0 = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$().data_1;
        // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromUByteArray.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var index_0 = checkIndexOverflow(tmp1);
        // Inline function 'kotlin.UInt.plus' call
        var this_1 = accumulator;
        // Inline function 'kotlin.UInt.shl' call
        // Inline function 'kotlin.UInt.and' call
        // Inline function 'kotlin.UByte.toUInt' call
        var this_2 = _UInt___init__impl__l7qpdl(_UByte___get_data__impl__jof9qr(element_0) & 255);
        var other = _UInt___init__impl__l7qpdl(255);
        var this_3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_2) & _UInt___get_data__impl__f0vqqw(other));
        var bitCount = imul(element.get_size_woubt6_k$() - 1 | 0, 8) - imul(index_0, 8) | 0;
        var other_0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_3) << bitCount);
        accumulator = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_1) + _UInt___get_data__impl__f0vqqw(other_0) | 0);
      }
      var result = accumulator;
      var discard = 4 - element.get_size_woubt6_k$() | 0;
      // Inline function 'kotlin.UInt.shr' call
      // Inline function 'kotlin.UInt.shl' call
      var bitCount_0 = imul(8, discard);
      var this_4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(result) << bitCount_0);
      var bitCount_1 = imul(8, discard);
      var discarded = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_4) >>> bitCount_1 | 0);
      // Inline function 'kotlin.uintArrayOf' call
      var tmp$ret$8 = _UIntArray___init__impl__ghjpc6(new Int32Array([discarded]));
      var list = new UIntArray(tmp$ret$8);
      addAll(destination, list);
    }
    var collected = toUIntArray(destination);
    if (contentEquals(collected, $this.ZERO_1)) {
      return new Pair(new UIntArray($this.ZERO_1), Sign_ZERO_getInstance());
    }
    var tmp$ret$14;
    $l$block: {
      // Inline function 'kotlin.collections.dropLastWhile' call
      // Inline function 'kotlin.collections.lastIndex' call
      var inductionVariable = get_lastIndex_0(_UIntArray___get_storage__impl__92a0v0(collected));
      if (0 <= inductionVariable)
        do {
          var index_1 = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromUByteArray.<anonymous>' call
          if (!(UIntArray__get_impl_gp5kza(collected, index_1) === _UInt___init__impl__l7qpdl(0))) {
            tmp$ret$14 = take(collected, index_1 + 1 | 0);
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$14 = emptyList();
    }
    var corrected = toUIntArray(tmp$ret$14);
    return new Pair(new UIntArray($this.removeLeadingZeros_ited7a_k$(corrected)), resolvedSign);
  }
  function oldFromUByteArray_0($this, uByteArray, endianness) {
    var tmp;
    switch (endianness.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = chunked(reversed(toList_1(new UByteArray(uByteArray))), 4);
        break;
      case 1:
        tmp = chunked(toList_1(new UByteArray(uByteArray)), 4);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var chunked_0 = tmp;
    var resolvedSign = Sign_POSITIVE_getInstance();
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = chunked_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromUByteArray.<anonymous>' call
      // Inline function 'kotlin.collections.foldIndexed' call
      var this_0 = reversed(element);
      var index = 0;
      var accumulator = _UInt___init__impl__l7qpdl(0);
      var tmp0_iterator_0 = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$().data_1;
        // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromUByteArray.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var index_0 = checkIndexOverflow(tmp1);
        // Inline function 'kotlin.UInt.plus' call
        var this_1 = accumulator;
        // Inline function 'kotlin.UInt.shl' call
        // Inline function 'kotlin.UInt.and' call
        // Inline function 'kotlin.UByte.toUInt' call
        var this_2 = _UInt___init__impl__l7qpdl(_UByte___get_data__impl__jof9qr(element_0) & 255);
        var other = _UInt___init__impl__l7qpdl(255);
        var this_3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_2) & _UInt___get_data__impl__f0vqqw(other));
        var bitCount = imul(element.get_size_woubt6_k$() - 1 | 0, 8) - imul(index_0, 8) | 0;
        var other_0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_3) << bitCount);
        accumulator = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_1) + _UInt___get_data__impl__f0vqqw(other_0) | 0);
      }
      var result = accumulator;
      var discard = 4 - element.get_size_woubt6_k$() | 0;
      // Inline function 'kotlin.UInt.shr' call
      // Inline function 'kotlin.UInt.shl' call
      var bitCount_0 = imul(8, discard);
      var this_4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(result) << bitCount_0);
      var bitCount_1 = imul(8, discard);
      var discarded = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_4) >>> bitCount_1 | 0);
      // Inline function 'kotlin.uintArrayOf' call
      var tmp$ret$8 = _UIntArray___init__impl__ghjpc6(new Int32Array([discarded]));
      var list = new UIntArray(tmp$ret$8);
      addAll(destination, list);
    }
    var collected = toUIntArray(destination);
    if (contentEquals(collected, $this.ZERO_1)) {
      return new Pair(new UIntArray($this.ZERO_1), Sign_ZERO_getInstance());
    }
    var tmp$ret$14;
    $l$block: {
      // Inline function 'kotlin.collections.dropLastWhile' call
      // Inline function 'kotlin.collections.lastIndex' call
      var inductionVariable = get_lastIndex_0(_UIntArray___get_storage__impl__92a0v0(collected));
      if (0 <= inductionVariable)
        do {
          var index_1 = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.oldFromUByteArray.<anonymous>' call
          if (!(UIntArray__get_impl_gp5kza(collected, index_1) === _UInt___init__impl__l7qpdl(0))) {
            tmp$ret$14 = take(collected, index_1 + 1 | 0);
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$14 = emptyList();
    }
    var corrected = toUIntArray(tmp$ret$14);
    return new Pair(new UIntArray($this.removeLeadingZeros_ited7a_k$(corrected)), resolvedSign);
  }
  function dropLeadingZeros(_this__u8e3s4, $this) {
    // Inline function 'kotlin.collections.dropWhile' call
    var yielding = false;
    var list = ArrayList_init_$Create$();
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      if (yielding) {
        list.add_utx5q5_k$(item);
      } else {
        // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.dropLeadingZeros.<anonymous>' call
        if (!(item === 0)) {
          list.add_utx5q5_k$(item);
          yielding = true;
        }
      }
    }
    return list;
  }
  function dropLeadingZeros_0(_this__u8e3s4, $this) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.dropWhile' call
    var yielding = false;
    var list = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var item = _this__u8e3s4[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (yielding) {
        list.add_utx5q5_k$(item);
      } else {
        // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.dropLeadingZeros.<anonymous>' call
        if (!(item === 0)) {
          list.add_utx5q5_k$(item);
          yielding = true;
        }
      }
    }
    return copyToArray(list);
  }
  function dropLeadingZeros_1(_this__u8e3s4, $this) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.dropWhile' call
    var yielding = false;
    var list = ArrayList_init_$Create$();
    var inductionVariable = 0;
    var last = _this__u8e3s4.length;
    while (inductionVariable < last) {
      var item = _this__u8e3s4[inductionVariable].data_1;
      inductionVariable = inductionVariable + 1 | 0;
      if (yielding) {
        list.add_utx5q5_k$(new UByte(item));
      } else {
        // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.dropLeadingZeros.<anonymous>' call
        // Inline function 'kotlin.toUByte' call
        if (!(item === _UByte___init__impl__g9hnc4(toByte(0)))) {
          list.add_utx5q5_k$(new UByte(item));
          yielding = true;
        }
      }
    }
    return copyToArray(list);
  }
  function dropLeadingZeros_2(_this__u8e3s4, $this) {
    // Inline function 'kotlin.collections.dropWhile' call
    var yielding = false;
    var list = ArrayList_init_$Create$();
    var tmp0_iterator = UByteArray__iterator_impl_509y1p(_this__u8e3s4);
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$().data_1;
      if (yielding) {
        list.add_utx5q5_k$(new UByte(item));
      } else {
        // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.dropLeadingZeros.<anonymous>' call
        // Inline function 'kotlin.toUByte' call
        if (!(item === _UByte___init__impl__g9hnc4(toByte(0)))) {
          list.add_utx5q5_k$(new UByte(item));
          yielding = true;
        }
      }
    }
    return toUByteArray(list);
  }
  function BigInteger32Arithmetic$toUnsignedIntArrayCodeFormat$lambda(it) {
    return UInt__toString_impl_dbgl21(it.data_1) + 'U';
  }
  function BigInteger32Arithmetic() {
    BigInteger32Arithmetic_instance = this;
    var tmp = this;
    // Inline function 'kotlin.intArrayOf' call
    tmp._emitIntArray_1 = new Int32Array([]);
    this.baseMask_1 = _ULong___init__impl__c78o9k(new Long(-1, 0));
    this.baseMaskInt_1 = _UInt___init__impl__l7qpdl(-1);
    this.overflowMask_1 = _ULong___init__impl__c78o9k(new Long(0, 1));
    this.lowerMask_1 = _ULong___init__impl__c78o9k(new Long(65535, 0));
    this.base_1 = _UInt___init__impl__l7qpdl(-1);
    this.basePowerOfTwo_1 = 32;
    this.wordSizeInBits_1 = 32;
    this.ZERO_1 = _UIntArray___init__impl__ghjpc6_0(0);
    var tmp_0 = this;
    // Inline function 'kotlin.UIntArray' call
    var tmp_1 = 0;
    var tmp_2 = new Int32Array(1);
    while (tmp_1 < 1) {
      var tmp_3 = tmp_1;
      // Inline function 'kotlin.UInt.toInt' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.ONE.<anonymous>' call
      var this_0 = _UInt___init__impl__l7qpdl(1);
      tmp_2[tmp_3] = _UInt___get_data__impl__f0vqqw(this_0);
      tmp_1 = tmp_1 + 1 | 0;
    }
    tmp_0.ONE_1 = _UIntArray___init__impl__ghjpc6(tmp_2);
    var tmp_4 = this;
    // Inline function 'kotlin.UIntArray' call
    var tmp_5 = 0;
    var tmp_6 = new Int32Array(1);
    while (tmp_5 < 1) {
      var tmp_7 = tmp_5;
      // Inline function 'kotlin.UInt.toInt' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.TWO.<anonymous>' call
      var this_1 = _UInt___init__impl__l7qpdl(2);
      tmp_6[tmp_7] = _UInt___get_data__impl__f0vqqw(this_1);
      tmp_5 = tmp_5 + 1 | 0;
    }
    tmp_4.TWO_1 = _UIntArray___init__impl__ghjpc6(tmp_6);
    var tmp_8 = this;
    // Inline function 'kotlin.UIntArray' call
    var tmp_9 = 0;
    var tmp_10 = new Int32Array(1);
    while (tmp_9 < 1) {
      var tmp_11 = tmp_9;
      // Inline function 'kotlin.UInt.toInt' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.TEN.<anonymous>' call
      var this_2 = _UInt___init__impl__l7qpdl(10);
      tmp_10[tmp_11] = _UInt___get_data__impl__f0vqqw(this_2);
      tmp_9 = tmp_9 + 1 | 0;
    }
    tmp_8.TEN_1 = _UIntArray___init__impl__ghjpc6(tmp_10);
    this.karatsubaThreshold_1 = 60;
    this.toomCookThreshold_1 = 15000;
    this.SIGNED_POSITIVE_TWO_1 = new SignedUIntArray(this.TWO_1, true);
  }
  protoOf(BigInteger32Arithmetic).get__emitIntArray_vjsnkj_k$ = function () {
    return this._emitIntArray_1;
  };
  protoOf(BigInteger32Arithmetic).get_baseMask_kw7zlr_k$ = function () {
    return this.baseMask_1;
  };
  protoOf(BigInteger32Arithmetic).get_baseMaskInt_g7qm6n_k$ = function () {
    return this.baseMaskInt_1;
  };
  protoOf(BigInteger32Arithmetic).get_overflowMask_ptw9aq_k$ = function () {
    return this.overflowMask_1;
  };
  protoOf(BigInteger32Arithmetic).get_lowerMask_7x4nb3_k$ = function () {
    return this.lowerMask_1;
  };
  protoOf(BigInteger32Arithmetic).get_base_ram0w0_k$ = function () {
    return this.base_1;
  };
  protoOf(BigInteger32Arithmetic).get_basePowerOfTwo_4zvm3u_k$ = function () {
    return this.basePowerOfTwo_1;
  };
  protoOf(BigInteger32Arithmetic).get_wordSizeInBits_q6hmfz_k$ = function () {
    return this.wordSizeInBits_1;
  };
  protoOf(BigInteger32Arithmetic).get_ZERO_6qy7ni_k$ = function () {
    return this.ZERO_1;
  };
  protoOf(BigInteger32Arithmetic).get_ONE_25f4iy_k$ = function () {
    return this.ONE_1;
  };
  protoOf(BigInteger32Arithmetic).get_TWO_hetjgw_k$ = function () {
    return this.TWO_1;
  };
  protoOf(BigInteger32Arithmetic).get_TEN_wc54v_k$ = function () {
    return this.TEN_1;
  };
  protoOf(BigInteger32Arithmetic).get_karatsubaThreshold_iz6kh0_k$ = function () {
    return this.karatsubaThreshold_1;
  };
  protoOf(BigInteger32Arithmetic).get_toomCookThreshold_rqmabj_k$ = function () {
    return this.toomCookThreshold_1;
  };
  protoOf(BigInteger32Arithmetic).numberOfLeadingZerosInAWord_mozva4_k$ = function (value) {
    var x = value;
    var y;
    var n = this.basePowerOfTwo_1;
    // Inline function 'kotlin.UInt.shr' call
    var this_0 = x;
    y = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) >>> 16 | 0);
    if (!(y === _UInt___init__impl__l7qpdl(0))) {
      n = n - 16 | 0;
      x = y;
    }
    // Inline function 'kotlin.UInt.shr' call
    var this_1 = x;
    y = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_1) >>> 8 | 0);
    if (!(y === _UInt___init__impl__l7qpdl(0))) {
      n = n - 8 | 0;
      x = y;
    }
    // Inline function 'kotlin.UInt.shr' call
    var this_2 = x;
    y = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_2) >>> 4 | 0);
    if (!(y === _UInt___init__impl__l7qpdl(0))) {
      n = n - 4 | 0;
      x = y;
    }
    // Inline function 'kotlin.UInt.shr' call
    var this_3 = x;
    y = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_3) >>> 2 | 0);
    if (!(y === _UInt___init__impl__l7qpdl(0))) {
      n = n - 2 | 0;
      x = y;
    }
    // Inline function 'kotlin.UInt.shr' call
    var this_4 = x;
    y = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_4) >>> 1 | 0);
    if (!(y === _UInt___init__impl__l7qpdl(0))) {
      return n - 2 | 0;
    }
    var tmp = n;
    // Inline function 'kotlin.UInt.toInt' call
    var this_5 = x;
    return tmp - _UInt___get_data__impl__f0vqqw(this_5) | 0;
  };
  protoOf(BigInteger32Arithmetic).numberOfTrailingZerosInAWord_39th6a_k$ = function (value) {
    var x = value;
    var y;
    var n = 32;
    // Inline function 'kotlin.UInt.and' call
    // Inline function 'kotlin.UInt.shl' call
    var this_0 = x;
    var this_1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) << 16);
    var other = this.baseMaskInt_1;
    y = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_1) & _UInt___get_data__impl__f0vqqw(other));
    if (!(y === _UInt___init__impl__l7qpdl(0))) {
      n = n - 16 | 0;
      x = y;
    }
    // Inline function 'kotlin.UInt.and' call
    // Inline function 'kotlin.UInt.shl' call
    var this_2 = x;
    var this_3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_2) << 8);
    var other_0 = this.baseMaskInt_1;
    y = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_3) & _UInt___get_data__impl__f0vqqw(other_0));
    if (!(y === _UInt___init__impl__l7qpdl(0))) {
      n = n - 8 | 0;
      x = y;
    }
    // Inline function 'kotlin.UInt.and' call
    // Inline function 'kotlin.UInt.shl' call
    var this_4 = x;
    var this_5 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_4) << 4);
    var other_1 = this.baseMaskInt_1;
    y = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_5) & _UInt___get_data__impl__f0vqqw(other_1));
    if (!(y === _UInt___init__impl__l7qpdl(0))) {
      n = n - 4 | 0;
      x = y;
    }
    // Inline function 'kotlin.UInt.and' call
    // Inline function 'kotlin.UInt.shl' call
    var this_6 = x;
    var this_7 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_6) << 2);
    var other_2 = this.baseMaskInt_1;
    y = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_7) & _UInt___get_data__impl__f0vqqw(other_2));
    if (!(y === _UInt___init__impl__l7qpdl(0))) {
      n = n - 2 | 0;
      x = y;
    }
    // Inline function 'kotlin.UInt.and' call
    // Inline function 'kotlin.UInt.shl' call
    var this_8 = x;
    var this_9 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_8) << 1);
    var other_3 = this.baseMaskInt_1;
    y = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_9) & _UInt___get_data__impl__f0vqqw(other_3));
    if (!(y === _UInt___init__impl__l7qpdl(0))) {
      return n - 2 | 0;
    }
    var tmp = n;
    // Inline function 'kotlin.UInt.toInt' call
    var this_10 = x;
    return tmp - _UInt___get_data__impl__f0vqqw(this_10) | 0;
  };
  protoOf(BigInteger32Arithmetic).bitLength_5uyy7h_k$ = function (value) {
    if (UIntArray__isEmpty_impl_vd8j4n(value)) {
      return 0;
    }
    var mostSignificant = UIntArray__get_impl_gp5kza(value, _UIntArray___get_size__impl__r6l8ci(value) - 1 | 0);
    return this.bitLength_3jopvy_k$(mostSignificant) + imul(_UIntArray___get_size__impl__r6l8ci(value) - 1 | 0, this.basePowerOfTwo_1) | 0;
  };
  protoOf(BigInteger32Arithmetic).bitLength_3jopvy_k$ = function (value) {
    return this.basePowerOfTwo_1 - this.numberOfLeadingZerosInAWord_mozva4_k$(value) | 0;
  };
  protoOf(BigInteger32Arithmetic).trailingZeroBits_vepp7f_k$ = function (value) {
    return this.numberOfTrailingZerosInAWord_39th6a_k$(value);
  };
  protoOf(BigInteger32Arithmetic).trailingZeroBits_fg371y_k$ = function (value) {
    if (contentEquals(value, this.ZERO_1)) {
      return 0;
    }
    // Inline function 'kotlin.collections.count' call
    // Inline function 'kotlin.collections.takeWhile' call
    var list = ArrayList_init_$Create$();
    var tmp0_iterator = UIntArray__iterator_impl_tkdv7k(value);
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$().data_1;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.trailingZeroBits.<anonymous>' call
      if (!(item === _UInt___init__impl__l7qpdl(0)))
        break $l$loop;
      list.add_utx5q5_k$(new UInt(item));
    }
    var zeroWordsCount = list.get_size_woubt6_k$();
    if (zeroWordsCount === _UIntArray___get_size__impl__r6l8ci(value)) {
      return 0;
    }
    return this.trailingZeroBits_vepp7f_k$(UIntArray__get_impl_gp5kza(value, zeroWordsCount)) + imul(zeroWordsCount, 63) | 0;
  };
  protoOf(BigInteger32Arithmetic).removeLeadingZeros_ited7a_k$ = function (bigInteger) {
    // Inline function 'kotlin.collections.indexOfLast' call
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfLast' call
      var this_0 = _UIntArray___get_storage__impl__92a0v0(bigInteger);
      var inductionVariable = this_0.length - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'kotlin.collections.indexOfLast.<anonymous>' call
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.removeLeadingZeros.<anonymous>' call
          // Inline function 'kotlin.toUInt' call
          var this_1 = this_0[index];
          if (!(_UInt___init__impl__l7qpdl(this_1) === _UInt___init__impl__l7qpdl(0))) {
            tmp$ret$3 = index;
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$3 = -1;
    }
    var firstEmpty = tmp$ret$3 + 1 | 0;
    if (firstEmpty === -1 ? true : firstEmpty === 0) {
      return this.ZERO_1;
    }
    // Inline function 'kotlin.collections.copyOfRange' call
    return _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(bigInteger), 0, firstEmpty));
  };
  protoOf(BigInteger32Arithmetic).countLeadingZeroWords_njjjmy_k$ = function (bigInteger) {
    var lastNonEmptyIndex = _UIntArray___get_size__impl__r6l8ci(bigInteger) - 1 | 0;
    if (lastNonEmptyIndex <= 0) {
      return 0;
    }
    var element = UIntArray__get_impl_gp5kza(bigInteger, lastNonEmptyIndex);
    while (element === _UInt___init__impl__l7qpdl(0) ? lastNonEmptyIndex > 0 : false) {
      lastNonEmptyIndex = lastNonEmptyIndex - 1 | 0;
      element = UIntArray__get_impl_gp5kza(bigInteger, lastNonEmptyIndex);
    }
    if (UIntArray__get_impl_gp5kza(bigInteger, lastNonEmptyIndex) === _UInt___init__impl__l7qpdl(0)) {
      lastNonEmptyIndex = lastNonEmptyIndex - 1 | 0;
    }
    return (_UIntArray___get_size__impl__r6l8ci(bigInteger) - lastNonEmptyIndex | 0) - 1 | 0;
  };
  protoOf(BigInteger32Arithmetic).shiftLeft_4kwzc4_k$ = function (operand, places) {
    if (UIntArray__isEmpty_impl_vd8j4n(operand) ? true : places === 0) {
      return operand;
    }
    var originalSize = _UIntArray___get_size__impl__r6l8ci(operand);
    var leadingZeros = this.numberOfLeadingZerosInAWord_mozva4_k$(UIntArray__get_impl_gp5kza(operand, _UIntArray___get_size__impl__r6l8ci(operand) - 1 | 0));
    var shiftWords = places / this.basePowerOfTwo_1 | 0;
    var shiftBits = places % this.basePowerOfTwo_1 | 0;
    var tmp;
    if (shiftBits > leadingZeros) {
      tmp = shiftWords + 1 | 0;
    } else {
      tmp = shiftWords;
    }
    var wordsNeeded = tmp;
    if (shiftBits === 0) {
      // Inline function 'kotlin.UIntArray' call
      var tmp_0 = 0;
      var tmp_1 = _UIntArray___get_size__impl__r6l8ci(operand) + wordsNeeded | 0;
      var tmp_2 = new Int32Array(tmp_1);
      while (tmp_0 < tmp_1) {
        var tmp_3 = tmp_0;
        // Inline function 'kotlin.UInt.toInt' call
        // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.shiftLeft.<anonymous>' call
        var this_0 = (0 <= tmp_3 ? tmp_3 < shiftWords : false) ? _UInt___init__impl__l7qpdl(0) : UIntArray__get_impl_gp5kza(operand, tmp_3 - shiftWords | 0);
        tmp_2[tmp_3] = _UInt___get_data__impl__f0vqqw(this_0);
        tmp_0 = tmp_0 + 1 | 0;
      }
      return _UIntArray___init__impl__ghjpc6(tmp_2);
    }
    // Inline function 'kotlin.UIntArray' call
    var tmp_4 = 0;
    var tmp_5 = _UIntArray___get_size__impl__r6l8ci(operand) + wordsNeeded | 0;
    var tmp_6 = new Int32Array(tmp_5);
    while (tmp_4 < tmp_5) {
      var tmp_7 = tmp_4;
      // Inline function 'kotlin.UInt.toInt' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.shiftLeft.<anonymous>' call
      var tmp_8;
      if (0 <= tmp_7 ? tmp_7 < shiftWords : false) {
        tmp_8 = _UInt___init__impl__l7qpdl(0);
      } else {
        if (tmp_7 === shiftWords) {
          // Inline function 'kotlin.UInt.shl' call
          var this_1 = UIntArray__get_impl_gp5kza(operand, tmp_7 - shiftWords | 0);
          tmp_8 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_1) << shiftBits);
        } else {
          var containsLower = shiftWords + 1 | 0;
          if (tmp_7 < (originalSize + shiftWords | 0) ? containsLower <= tmp_7 : false) {
            // Inline function 'kotlin.UInt.or' call
            // Inline function 'kotlin.UInt.shl' call
            var this_2 = UIntArray__get_impl_gp5kza(operand, tmp_7 - shiftWords | 0);
            var this_3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_2) << shiftBits);
            // Inline function 'kotlin.UInt.shr' call
            var this_4 = UIntArray__get_impl_gp5kza(operand, (tmp_7 - shiftWords | 0) - 1 | 0);
            var bitCount = BigInteger32Arithmetic_getInstance().basePowerOfTwo_1 - shiftBits | 0;
            var other = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_4) >>> bitCount | 0);
            tmp_8 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_3) | _UInt___get_data__impl__f0vqqw(other));
          } else {
            if (tmp_7 === ((originalSize + wordsNeeded | 0) - 1 | 0)) {
              // Inline function 'kotlin.UInt.shr' call
              var this_5 = UIntArray__get_impl_gp5kza(operand, tmp_7 - wordsNeeded | 0);
              var bitCount_0 = BigInteger32Arithmetic_getInstance().basePowerOfTwo_1 - shiftBits | 0;
              tmp_8 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_5) >>> bitCount_0 | 0);
            } else {
              throw RuntimeException_init_$Create$('Invalid case ' + tmp_7);
            }
          }
        }
      }
      var this_6 = tmp_8;
      tmp_6[tmp_7] = _UInt___get_data__impl__f0vqqw(this_6);
      tmp_4 = tmp_4 + 1 | 0;
    }
    return _UIntArray___init__impl__ghjpc6(tmp_6);
  };
  protoOf(BigInteger32Arithmetic).shiftRight_1gj8c5_k$ = function (operand, places) {
    if (UIntArray__isEmpty_impl_vd8j4n(operand) ? true : places === 0) {
      return operand;
    }
    var shiftBits = places % this.basePowerOfTwo_1 | 0;
    var wordsToDiscard = places / this.basePowerOfTwo_1 | 0;
    if (wordsToDiscard >= _UIntArray___get_size__impl__r6l8ci(operand)) {
      return this.ZERO_1;
    }
    if (shiftBits === 0) {
      // Inline function 'kotlin.collections.copyOfRange' call
      var toIndex = _UIntArray___get_size__impl__r6l8ci(operand);
      return _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(operand), wordsToDiscard, toIndex));
    }
    if (_UIntArray___get_size__impl__r6l8ci(operand) > 1 ? (_UIntArray___get_size__impl__r6l8ci(operand) - wordsToDiscard | 0) === 1 : false) {
      // Inline function 'kotlin.uintArrayOf' call
      // Inline function 'kotlin.UInt.shr' call
      var this_0 = UIntArray__get_impl_gp5kza(operand, _UIntArray___get_size__impl__r6l8ci(operand) - 1 | 0);
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) >>> shiftBits | 0);
      return _UIntArray___init__impl__ghjpc6(new Int32Array([tmp$ret$1]));
    }
    // Inline function 'kotlin.UIntArray' call
    var tmp = 0;
    var tmp_0 = _UIntArray___get_size__impl__r6l8ci(operand) - wordsToDiscard | 0;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.UInt.toInt' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.shiftRight.<anonymous>' call
      var tmp_3;
      if (0 <= tmp_2 ? tmp_2 < ((_UIntArray___get_size__impl__r6l8ci(operand) - 1 | 0) - wordsToDiscard | 0) : false) {
        // Inline function 'kotlin.UInt.or' call
        // Inline function 'kotlin.UInt.shr' call
        var this_1 = UIntArray__get_impl_gp5kza(operand, tmp_2 + wordsToDiscard | 0);
        var this_2 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_1) >>> shiftBits | 0);
        // Inline function 'kotlin.UInt.shl' call
        var this_3 = UIntArray__get_impl_gp5kza(operand, (tmp_2 + wordsToDiscard | 0) + 1 | 0);
        var bitCount = BigInteger32Arithmetic_getInstance().basePowerOfTwo_1 - shiftBits | 0;
        var other = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_3) << bitCount);
        tmp_3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_2) | _UInt___get_data__impl__f0vqqw(other));
      } else if (tmp_2 === ((_UIntArray___get_size__impl__r6l8ci(operand) - 1 | 0) - wordsToDiscard | 0)) {
        // Inline function 'kotlin.UInt.shr' call
        var this_4 = UIntArray__get_impl_gp5kza(operand, tmp_2 + wordsToDiscard | 0);
        tmp_3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_4) >>> shiftBits | 0);
      } else {
        throw RuntimeException_init_$Create$('Invalid case ' + tmp_2);
      }
      var this_5 = tmp_3;
      tmp_1[tmp_2] = _UInt___get_data__impl__f0vqqw(this_5);
      tmp = tmp + 1 | 0;
    }
    var result = _UIntArray___init__impl__ghjpc6(tmp_1);
    return this.removeLeadingZeros_ited7a_k$(result);
  };
  protoOf(BigInteger32Arithmetic).normalize_i4tzil_k$ = function (dividend, divisor) {
    var divisorSize = _UIntArray___get_size__impl__r6l8ci(divisor);
    var normalizationShift = this.numberOfLeadingZerosInAWord_mozva4_k$(UIntArray__get_impl_gp5kza(divisor, divisorSize - 1 | 0));
    var divisorNormalized = this.shl_236f9c_k$(divisor, normalizationShift);
    var dividendNormalized = this.shl_236f9c_k$(dividend, normalizationShift);
    return new Triple(new UIntArray(dividendNormalized), new UIntArray(divisorNormalized), normalizationShift);
  };
  protoOf(BigInteger32Arithmetic).normalize_a62dbn_k$ = function (operand) {
    var normalizationShift = this.numberOfLeadingZerosInAWord_mozva4_k$(UIntArray__get_impl_gp5kza(operand, _UIntArray___get_size__impl__r6l8ci(operand) - 1 | 0));
    return new Pair(new UIntArray(this.shl_236f9c_k$(operand, normalizationShift)), normalizationShift);
  };
  protoOf(BigInteger32Arithmetic).denormalize_81y8dj_k$ = function (remainderNormalized, normalizationShift) {
    var remainder = this.shr_fl2abe_k$(remainderNormalized, normalizationShift);
    return remainder;
  };
  protoOf(BigInteger32Arithmetic).compare_nba68r_k$ = function (first, second) {
    var firstStart = _UIntArray___get_size__impl__r6l8ci(first) - this.countLeadingZeroWords_njjjmy_k$(first) | 0;
    var secondStart = _UIntArray___get_size__impl__r6l8ci(second) - this.countLeadingZeroWords_njjjmy_k$(second) | 0;
    if (firstStart > secondStart) {
      return 1;
    }
    if (secondStart > firstStart) {
      return -1;
    }
    var counter = firstStart - 1 | 0;
    var firstIsLarger = false;
    var bothAreEqual = true;
    $l$loop_0: while (counter >= 0) {
      // Inline function 'kotlin.UInt.compareTo' call
      var this_0 = UIntArray__get_impl_gp5kza(first, counter);
      var other = UIntArray__get_impl_gp5kza(second, counter);
      if (uintCompare(_UInt___get_data__impl__f0vqqw(this_0), _UInt___get_data__impl__f0vqqw(other)) > 0) {
        firstIsLarger = true;
        bothAreEqual = false;
        break $l$loop_0;
      }
      // Inline function 'kotlin.UInt.compareTo' call
      var this_1 = UIntArray__get_impl_gp5kza(first, counter);
      var other_0 = UIntArray__get_impl_gp5kza(second, counter);
      if (uintCompare(_UInt___get_data__impl__f0vqqw(this_1), _UInt___get_data__impl__f0vqqw(other_0)) < 0) {
        firstIsLarger = false;
        bothAreEqual = false;
        break $l$loop_0;
      }
      counter = counter - 1 | 0;
    }
    if (bothAreEqual) {
      return 0;
    }
    if (firstIsLarger) {
      return 1;
    } else {
      return -1;
    }
  };
  protoOf(BigInteger32Arithmetic).add_nlzu36_k$ = function (first, second) {
    if (_UIntArray___get_size__impl__r6l8ci(first) === 1 ? UIntArray__get_impl_gp5kza(first, 0) === _UInt___init__impl__l7qpdl(0) : false)
      return second;
    if (_UIntArray___get_size__impl__r6l8ci(second) === 1 ? UIntArray__get_impl_gp5kza(second, 0) === _UInt___init__impl__l7qpdl(0) : false)
      return first;
    var tmp;
    if (_UIntArray___get_size__impl__r6l8ci(first) > _UIntArray___get_size__impl__r6l8ci(second)) {
      tmp = new Quadruple(_UIntArray___get_size__impl__r6l8ci(first), _UIntArray___get_size__impl__r6l8ci(second), new UIntArray(first), new UIntArray(second));
    } else {
      tmp = new Quadruple(_UIntArray___get_size__impl__r6l8ci(second), _UIntArray___get_size__impl__r6l8ci(first), new UIntArray(second), new UIntArray(first));
    }
    var tmp0_container = tmp;
    var maxLength = tmp0_container.component1_7eebsc_k$();
    var minLength = tmp0_container.component2_7eebsb_k$();
    var largerData = tmp0_container.component3_7eebsa_k$().storage_1;
    var smallerData = tmp0_container.component4_7eebs9_k$().storage_1;
    // Inline function 'kotlin.UIntArray' call
    var tmp_0 = 0;
    var tmp_1 = maxLength + 1 | 0;
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      // Inline function 'kotlin.UInt.toInt' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.add.<anonymous>' call
      var this_0 = _UInt___init__impl__l7qpdl(0);
      tmp_2[tmp_3] = _UInt___get_data__impl__f0vqqw(this_0);
      tmp_0 = tmp_0 + 1 | 0;
    }
    var result = _UIntArray___init__impl__ghjpc6(tmp_2);
    var i = 0;
    var sum = _ULong___init__impl__c78o9k(new Long(0, 0));
    while (i < minLength) {
      // Inline function 'kotlin.ULong.plus' call
      // Inline function 'kotlin.ULong.plus' call
      var this_1 = sum;
      // Inline function 'kotlin.ULong.plus' call
      // Inline function 'kotlin.UInt.toULong' call
      var this_2 = UIntArray__get_impl_gp5kza(largerData, i);
      var other = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_2)).and_4spn93_k$(new Long(-1, 0)));
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ULong.plus' call
      // Inline function 'kotlin.UInt.toULong' call
      var this_4 = UIntArray__get_impl_gp5kza(smallerData, i);
      var other_0 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_4)).and_4spn93_k$(new Long(-1, 0)));
      sum = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other_0)));
      var tmp_4 = i;
      // Inline function 'kotlin.ULong.toUInt' call
      // Inline function 'kotlin.ULong.and' call
      var this_5 = sum;
      var other_1 = this.baseMask_1;
      var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_1)));
      // Inline function 'kotlin.toUInt' call
      var this_7 = _ULong___get_data__impl__fggpzb(this_6);
      var tmp$ret$12 = _UInt___init__impl__l7qpdl(this_7.toInt_1tsl84_k$());
      UIntArray__set_impl_7f2zu2(result, tmp_4, tmp$ret$12);
      // Inline function 'kotlin.ULong.shr' call
      var this_8 = sum;
      var bitCount = this.basePowerOfTwo_1;
      sum = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_8).ushr_z7nmq8_k$(bitCount));
      i = i + 1 | 0;
    }
    while (true) {
      if (equals(sum, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
        while (i < maxLength) {
          UIntArray__set_impl_7f2zu2(result, i, UIntArray__get_impl_gp5kza(largerData, i));
          i = i + 1 | 0;
        }
        var tmp_5;
        if (UIntArray__get_impl_gp5kza(result, _UIntArray___get_size__impl__r6l8ci(result) - 1 | 0) === _UInt___init__impl__l7qpdl(0)) {
          // Inline function 'kotlin.collections.copyOfRange' call
          var toIndex = _UIntArray___get_size__impl__r6l8ci(result) - 1 | 0;
          tmp_5 = _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(result), 0, toIndex));
        } else {
          tmp_5 = result;
        }
        return tmp_5;
      }
      if (i === maxLength) {
        // Inline function 'kotlin.ULong.toUInt' call
        var this_9 = sum;
        // Inline function 'kotlin.toUInt' call
        var this_10 = _ULong___get_data__impl__fggpzb(this_9);
        var tmp$ret$16 = _UInt___init__impl__l7qpdl(this_10.toInt_1tsl84_k$());
        UIntArray__set_impl_7f2zu2(result, maxLength, tmp$ret$16);
        return result;
      }
      // Inline function 'kotlin.ULong.plus' call
      var this_11 = sum;
      // Inline function 'kotlin.ULong.plus' call
      // Inline function 'kotlin.UInt.toULong' call
      var this_12 = UIntArray__get_impl_gp5kza(largerData, i);
      var other_2 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_12)).and_4spn93_k$(new Long(-1, 0)));
      sum = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_11).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other_2)));
      var tmp_6 = i;
      // Inline function 'kotlin.ULong.toUInt' call
      // Inline function 'kotlin.ULong.and' call
      var this_13 = sum;
      var other_3 = this.baseMask_1;
      var this_14 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_13).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_3)));
      // Inline function 'kotlin.toUInt' call
      var this_15 = _ULong___get_data__impl__fggpzb(this_14);
      var tmp$ret$22 = _UInt___init__impl__l7qpdl(this_15.toInt_1tsl84_k$());
      UIntArray__set_impl_7f2zu2(result, tmp_6, tmp$ret$22);
      // Inline function 'kotlin.ULong.shr' call
      var this_16 = sum;
      var bitCount_0 = this.basePowerOfTwo_1;
      sum = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_16).ushr_z7nmq8_k$(bitCount_0));
      i = i + 1 | 0;
    }
  };
  protoOf(BigInteger32Arithmetic).subtract_n0lojl_k$ = function (first, second) {
    var firstWithoutLeadingZeroes = this.removeLeadingZeros_ited7a_k$(first);
    var secondWithoutLeadingZeroes = this.removeLeadingZeros_ited7a_k$(second);
    var firstIsLarger = this.compare_nba68r_k$(firstWithoutLeadingZeroes, secondWithoutLeadingZeroes) === 1;
    var tmp;
    if (firstIsLarger) {
      tmp = new Quadruple(_UIntArray___get_size__impl__r6l8ci(firstWithoutLeadingZeroes), _UIntArray___get_size__impl__r6l8ci(secondWithoutLeadingZeroes), new UIntArray(firstWithoutLeadingZeroes), new UIntArray(secondWithoutLeadingZeroes));
    } else {
      tmp = new Quadruple(_UIntArray___get_size__impl__r6l8ci(secondWithoutLeadingZeroes), _UIntArray___get_size__impl__r6l8ci(firstWithoutLeadingZeroes), new UIntArray(secondWithoutLeadingZeroes), new UIntArray(firstWithoutLeadingZeroes));
    }
    var tmp0_container = tmp;
    var largerLength = tmp0_container.component1_7eebsc_k$();
    var smallerLength = tmp0_container.component2_7eebsb_k$();
    var largerData = tmp0_container.component3_7eebsa_k$().storage_1;
    var smallerData = tmp0_container.component4_7eebs9_k$().storage_1;
    // Inline function 'kotlin.UIntArray' call
    var tmp_0 = 0;
    var tmp_1 = largerLength + 1 | 0;
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      // Inline function 'kotlin.UInt.toInt' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.subtract.<anonymous>' call
      var this_0 = _UInt___init__impl__l7qpdl(0);
      tmp_2[tmp_3] = _UInt___get_data__impl__f0vqqw(this_0);
      tmp_0 = tmp_0 + 1 | 0;
    }
    var result = _UIntArray___init__impl__ghjpc6(tmp_2);
    var i = 0;
    var diff = _ULong___init__impl__c78o9k(new Long(0, 0));
    while (i < smallerLength) {
      if (i >= _UIntArray___get_size__impl__r6l8ci(largerData)) {
        println('Breakpoint');
      }
      if (i >= _UIntArray___get_size__impl__r6l8ci(smallerData)) {
        println('Breakpoint');
      }
      // Inline function 'kotlin.ULong.minus' call
      // Inline function 'kotlin.ULong.minus' call
      // Inline function 'kotlin.UInt.toULong' call
      var this_1 = UIntArray__get_impl_gp5kza(largerData, i);
      var this_2 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_1)).and_4spn93_k$(new Long(-1, 0)));
      // Inline function 'kotlin.ULong.minus' call
      // Inline function 'kotlin.UInt.toULong' call
      var this_3 = UIntArray__get_impl_gp5kza(smallerData, i);
      var other = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_3)).and_4spn93_k$(new Long(-1, 0)));
      var this_4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).minus_mfbszm_k$(_ULong___get_data__impl__fggpzb(other)));
      var other_0 = diff;
      diff = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).minus_mfbszm_k$(_ULong___get_data__impl__fggpzb(other_0)));
      var tmp_4 = i;
      // Inline function 'kotlin.ULong.toUInt' call
      var this_5 = diff;
      // Inline function 'kotlin.toUInt' call
      var this_6 = _ULong___get_data__impl__fggpzb(this_5);
      var tmp$ret$10 = _UInt___init__impl__l7qpdl(this_6.toInt_1tsl84_k$());
      UIntArray__set_impl_7f2zu2(result, tmp_4, tmp$ret$10);
      // Inline function 'kotlin.ULong.shr' call
      // Inline function 'kotlin.ULong.and' call
      var this_7 = diff;
      var other_1 = this.overflowMask_1;
      var this_8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_7).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_1)));
      var bitCount = this.wordSizeInBits_1;
      diff = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_8).ushr_z7nmq8_k$(bitCount));
      i = i + 1 | 0;
    }
    while (!equals(diff, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.UInt.minus' call
      var this_9 = UIntArray__get_impl_gp5kza(largerData, i);
      var other_2 = diff;
      // Inline function 'kotlin.ULong.minus' call
      // Inline function 'kotlin.UInt.toULong' call
      var this_10 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_9)).and_4spn93_k$(new Long(-1, 0)));
      diff = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_10).minus_mfbszm_k$(_ULong___get_data__impl__fggpzb(other_2)));
      var tmp_5 = i;
      // Inline function 'kotlin.UInt.and' call
      // Inline function 'kotlin.ULong.toUInt' call
      var this_11 = diff;
      // Inline function 'kotlin.toUInt' call
      var this_12 = _ULong___get_data__impl__fggpzb(this_11);
      var this_13 = _UInt___init__impl__l7qpdl(this_12.toInt_1tsl84_k$());
      var other_3 = this.baseMaskInt_1;
      var tmp$ret$18 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_13) & _UInt___get_data__impl__f0vqqw(other_3));
      UIntArray__set_impl_7f2zu2(result, tmp_5, tmp$ret$18);
      // Inline function 'kotlin.ULong.shr' call
      // Inline function 'kotlin.ULong.and' call
      var this_14 = diff;
      var other_4 = this.overflowMask_1;
      var this_15 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_14).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_4)));
      var bitCount_0 = this.wordSizeInBits_1;
      diff = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_15).ushr_z7nmq8_k$(bitCount_0));
      i = i + 1 | 0;
    }
    while (i < largerLength) {
      UIntArray__set_impl_7f2zu2(result, i, UIntArray__get_impl_gp5kza(largerData, i));
      i = i + 1 | 0;
    }
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$();
    var tmp0_iterator = UIntArray__iterator_impl_tkdv7k(result);
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$().data_1;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.subtract.<anonymous>' call
      if (element === _UInt___init__impl__l7qpdl(0)) {
        destination.add_utx5q5_k$(new UInt(element));
      }
    }
    if (destination.isEmpty_y1axqb_k$()) {
      return this.ZERO_1;
    }
    // Inline function 'kotlin.collections.indexOfLast' call
    var tmp$ret$27;
    $l$block: {
      // Inline function 'kotlin.collections.indexOfLast' call
      var this_16 = _UIntArray___get_storage__impl__92a0v0(result);
      var inductionVariable = this_16.length - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          // Inline function 'kotlin.collections.indexOfLast.<anonymous>' call
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.subtract.<anonymous>' call
          // Inline function 'kotlin.toUInt' call
          var this_17 = this_16[index];
          if (!(_UInt___init__impl__l7qpdl(this_17) === _UInt___init__impl__l7qpdl(0))) {
            tmp$ret$27 = index;
            break $l$block;
          }
        }
         while (0 <= inductionVariable);
      tmp$ret$27 = -1;
    }
    var firstEmpty = tmp$ret$27 + 1 | 0;
    // Inline function 'kotlin.collections.copyOfRange' call
    return _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(result), 0, firstEmpty));
  };
  protoOf(BigInteger32Arithmetic).multiply_d0bsz5_k$ = function (first, second) {
    // Inline function 'kotlin.UInt.times' call
    var result = _UInt___init__impl__l7qpdl(imul(_UInt___get_data__impl__f0vqqw(first), _UInt___get_data__impl__f0vqqw(second)));
    // Inline function 'kotlin.UInt.toUInt' call
    // Inline function 'kotlin.UInt.shr' call
    var bitCount = this.basePowerOfTwo_1;
    var high = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(result) >>> bitCount | 0);
    // Inline function 'kotlin.UInt.toUInt' call
    var low = result;
    // Inline function 'kotlin.uintArrayOf' call
    var tmp$ret$4 = _UIntArray___init__impl__ghjpc6(new Int32Array([low, high]));
    return this.removeLeadingZeros_ited7a_k$(tmp$ret$4);
  };
  protoOf(BigInteger32Arithmetic).multiply_7zb58u_k$ = function (first, second) {
    var result = _UIntArray___init__impl__ghjpc6_0(_UIntArray___get_size__impl__r6l8ci(first) + 1 | 0);
    var product;
    var sum;
    var inductionVariable = 0;
    var last = _UIntArray___get_size__impl__r6l8ci(first);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.ULong.times' call
        // Inline function 'kotlin.UInt.toULong' call
        var this_0 = UIntArray__get_impl_gp5kza(first, i);
        // Inline function 'kotlin.ULong.times' call
        var this_1 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_0)).and_4spn93_k$(new Long(-1, 0)));
        // Inline function 'kotlin.UInt.toULong' call
        var other = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(second)).and_4spn93_k$(new Long(-1, 0)));
        product = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).times_nfzjiw_k$(_ULong___get_data__impl__fggpzb(other)));
        // Inline function 'kotlin.ULong.plus' call
        // Inline function 'kotlin.UInt.toULong' call
        var this_2 = UIntArray__get_impl_gp5kza(result, i);
        var this_3 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_2)).and_4spn93_k$(new Long(-1, 0)));
        // Inline function 'kotlin.ULong.toUInt' call
        // Inline function 'kotlin.ULong.and' call
        var other_0 = this.baseMask_1;
        var this_4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(product).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_0)));
        // Inline function 'kotlin.toUInt' call
        var this_5 = _ULong___get_data__impl__fggpzb(this_4);
        // Inline function 'kotlin.ULong.plus' call
        // Inline function 'kotlin.UInt.toULong' call
        var this_6 = _UInt___init__impl__l7qpdl(this_5.toInt_1tsl84_k$());
        var other_1 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_6)).and_4spn93_k$(new Long(-1, 0)));
        sum = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other_1)));
        // Inline function 'kotlin.ULong.toUInt' call
        // Inline function 'kotlin.ULong.and' call
        var this_7 = sum;
        var other_2 = this.baseMask_1;
        var this_8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_7).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_2)));
        // Inline function 'kotlin.toUInt' call
        var this_9 = _ULong___get_data__impl__fggpzb(this_8);
        var tmp$ret$13 = _UInt___init__impl__l7qpdl(this_9.toInt_1tsl84_k$());
        UIntArray__set_impl_7f2zu2(result, i, tmp$ret$13);
        // Inline function 'kotlin.ULong.shr' call
        var this_10 = sum;
        var bitCount = this.basePowerOfTwo_1;
        sum = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_10).ushr_z7nmq8_k$(bitCount));
        var tmp = i + 1 | 0;
        // Inline function 'kotlin.UInt.plus' call
        // Inline function 'kotlin.ULong.toUInt' call
        // Inline function 'kotlin.ULong.shr' call
        var bitCount_0 = this.basePowerOfTwo_1;
        var this_11 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(product).ushr_z7nmq8_k$(bitCount_0));
        // Inline function 'kotlin.toUInt' call
        var this_12 = _ULong___get_data__impl__fggpzb(this_11);
        var this_13 = _UInt___init__impl__l7qpdl(this_12.toInt_1tsl84_k$());
        // Inline function 'kotlin.ULong.toUInt' call
        var this_14 = sum;
        // Inline function 'kotlin.toUInt' call
        var this_15 = _ULong___get_data__impl__fggpzb(this_14);
        var other_3 = _UInt___init__impl__l7qpdl(this_15.toInt_1tsl84_k$());
        var tmp$ret$20 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_13) + _UInt___get_data__impl__f0vqqw(other_3) | 0);
        UIntArray__set_impl_7f2zu2(result, tmp, tmp$ret$20);
      }
       while (inductionVariable < last);
    return this.removeLeadingZeros_ited7a_k$(result);
  };
  protoOf(BigInteger32Arithmetic).karatsubaMultiply_p2as9r_k$ = function (firstUnsigned, secondUnsigned) {
    var first = new SignedUIntArray(firstUnsigned, true);
    var second = new SignedUIntArray(secondUnsigned, true);
    // Inline function 'kotlin.math.max' call
    var a = _UIntArray___get_size__impl__r6l8ci(first.unsignedValue_1);
    var b = _UIntArray___get_size__impl__r6l8ci(second.unsignedValue_1);
    var halfLength = (Math.max(a, b) + 1 | 0) / 2 | 0;
    var mask = this.subtract_n0lojl_k$(this.shl_236f9c_k$(this.ONE_1, imul(halfLength, this.wordSizeInBits_1)), this.ONE_1);
    var firstLower = this.and_m2lsyn_k$(first, mask);
    var firstHigher = this.shr_q5mf3x_k$(first, imul(halfLength, this.wordSizeInBits_1));
    var secondLower = this.and_m2lsyn_k$(second, mask);
    var secondHigher = this.shr_q5mf3x_k$(second, imul(halfLength, this.wordSizeInBits_1));
    var higherProduct = this.times_piylck_k$(firstHigher, secondHigher);
    var lowerProduct = this.times_piylck_k$(firstLower, secondLower);
    var middleProduct = this.times_piylck_k$(this.plus_4gfpjs_k$(firstHigher, firstLower), this.plus_4gfpjs_k$(secondHigher, secondLower));
    var result = this.plus_4gfpjs_k$(this.plus_4gfpjs_k$(this.shl_70fb3r_k$(higherProduct, imul(imul(2, this.wordSizeInBits_1), halfLength)), this.shl_70fb3r_k$(this.minus_6y7u4i_k$(this.minus_6y7u4i_k$(middleProduct, higherProduct), lowerProduct), imul(this.wordSizeInBits_1, halfLength))), lowerProduct);
    return result.unsignedValue_1;
  };
  protoOf(BigInteger32Arithmetic).prependULongArray_8ylu8g_k$ = function (original, numberOfWords, value) {
    // Inline function 'kotlin.UIntArray' call
    var tmp = 0;
    var tmp_0 = _UIntArray___get_size__impl__r6l8ci(original) + numberOfWords | 0;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.UInt.toInt' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.prependULongArray.<anonymous>' call
      var this_0 = tmp_2 < numberOfWords ? value : UIntArray__get_impl_gp5kza(original, tmp_2 - numberOfWords | 0);
      tmp_1[tmp_2] = _UInt___get_data__impl__f0vqqw(this_0);
      tmp = tmp + 1 | 0;
    }
    return _UIntArray___init__impl__ghjpc6(tmp_1);
  };
  protoOf(BigInteger32Arithmetic).extendUIntArray_4vk1vj_k$ = function (original, numberOfWords, value) {
    // Inline function 'kotlin.UIntArray' call
    var tmp = 0;
    var tmp_0 = _UIntArray___get_size__impl__r6l8ci(original) + numberOfWords | 0;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.UInt.toInt' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.extendUIntArray.<anonymous>' call
      var this_0 = tmp_2 < _UIntArray___get_size__impl__r6l8ci(original) ? UIntArray__get_impl_gp5kza(original, tmp_2) : value;
      tmp_1[tmp_2] = _UInt___get_data__impl__f0vqqw(this_0);
      tmp = tmp + 1 | 0;
    }
    return _UIntArray___init__impl__ghjpc6(tmp_1);
  };
  protoOf(BigInteger32Arithmetic).toomCook3Multiply_5impx9_k$ = function (firstUnchecked, secondUnchecked) {
    var tmp;
    if (!((_UIntArray___get_size__impl__r6l8ci(firstUnchecked) % 3 | 0) === 0)) {
      // Inline function 'kotlin.collections.asIterable' call
      // Inline function 'kotlin.UIntArray' call
      var tmp_0 = 0;
      var tmp_1 = imul((_UIntArray___get_size__impl__r6l8ci(firstUnchecked) + 2 | 0) / 3 | 0, 3) - _UIntArray___get_size__impl__r6l8ci(firstUnchecked) | 0;
      var tmp_2 = new Int32Array(tmp_1);
      while (tmp_0 < tmp_1) {
        var tmp_3 = tmp_0;
        // Inline function 'kotlin.UInt.toInt' call
        // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.toomCook3Multiply.<anonymous>' call
        var this_0 = _UInt___init__impl__l7qpdl(0);
        tmp_2[tmp_3] = _UInt___get_data__impl__f0vqqw(this_0);
        tmp_0 = tmp_0 + 1 | 0;
      }
      var tmp$ret$3 = _UIntArray___init__impl__ghjpc6(tmp_2);
      var tmp$ret$4 = new UIntArray(tmp$ret$3);
      tmp = plus(new UIntArray(firstUnchecked), tmp$ret$4);
    } else {
      tmp = new UIntArray(firstUnchecked);
    }
    var first = toUIntArray(tmp);
    var tmp_4;
    if (!((_UIntArray___get_size__impl__r6l8ci(secondUnchecked) % 3 | 0) === 0)) {
      // Inline function 'kotlin.collections.asIterable' call
      // Inline function 'kotlin.UIntArray' call
      var tmp_5 = 0;
      var tmp_6 = imul((_UIntArray___get_size__impl__r6l8ci(secondUnchecked) + 2 | 0) / 3 | 0, 3) - _UIntArray___get_size__impl__r6l8ci(secondUnchecked) | 0;
      var tmp_7 = new Int32Array(tmp_6);
      while (tmp_5 < tmp_6) {
        var tmp_8 = tmp_5;
        // Inline function 'kotlin.UInt.toInt' call
        // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.toomCook3Multiply.<anonymous>' call
        var this_1 = _UInt___init__impl__l7qpdl(0);
        tmp_7[tmp_8] = _UInt___get_data__impl__f0vqqw(this_1);
        tmp_5 = tmp_5 + 1 | 0;
      }
      var tmp$ret$8 = _UIntArray___init__impl__ghjpc6(tmp_7);
      var tmp$ret$9 = new UIntArray(tmp$ret$8);
      tmp_4 = plus(new UIntArray(secondUnchecked), tmp$ret$9);
    } else {
      tmp_4 = new UIntArray(secondUnchecked);
    }
    var second = toUIntArray(tmp_4);
    var firstLength = _UIntArray___get_size__impl__r6l8ci(first);
    var secondLength = _UIntArray___get_size__impl__r6l8ci(second);
    var tmp_9;
    if (firstLength > secondLength) {
      var prepared = this.extendUIntArray_4vk1vj_k$(second, firstLength - secondLength | 0, _UInt___init__impl__l7qpdl(0));
      tmp_9 = new Pair(new UIntArray(first), new UIntArray(prepared));
    } else if (firstLength < secondLength) {
      var prepared_0 = this.extendUIntArray_4vk1vj_k$(first, secondLength - firstLength | 0, _UInt___init__impl__l7qpdl(0));
      tmp_9 = new Pair(new UIntArray(prepared_0), new UIntArray(second));
    } else {
      tmp_9 = new Pair(new UIntArray(first), new UIntArray(second));
    }
    var tmp0_container = tmp_9;
    var firstPrepared = tmp0_container.component1_7eebsc_k$().storage_1;
    var secondPrepared = tmp0_container.component2_7eebsb_k$().storage_1;
    // Inline function 'kotlin.math.max' call
    var a = _UIntArray___get_size__impl__r6l8ci(first);
    var b = _UIntArray___get_size__impl__r6l8ci(second);
    var longestLength = Math.max(a, b);
    var extendedDigit = (longestLength + 2 | 0) / 3 | 0;
    var m0 = new SignedUIntArray(toUIntArray(slice(firstPrepared, until(0, extendedDigit))), true);
    var m1 = new SignedUIntArray(toUIntArray(slice(firstPrepared, until(extendedDigit, imul(extendedDigit, 2)))), true);
    var m2 = new SignedUIntArray(toUIntArray(slice(firstPrepared, until(imul(extendedDigit, 2), imul(extendedDigit, 3)))), true);
    var n0 = new SignedUIntArray(toUIntArray(slice(secondPrepared, until(0, extendedDigit))), true);
    var n1 = new SignedUIntArray(toUIntArray(slice(secondPrepared, until(extendedDigit, imul(extendedDigit, 2)))), true);
    var n2 = new SignedUIntArray(toUIntArray(slice(secondPrepared, until(imul(extendedDigit, 2), imul(extendedDigit, 3)))), true);
    var p0 = this.plus_4gfpjs_k$(m0, m2);
    var pe0 = m0;
    var pe1 = this.plus_4gfpjs_k$(p0, m1);
    var pem1 = this.minus_6y7u4i_k$(p0, m1);
    var doublePemM2 = this.times_piylck_k$(this.plus_4gfpjs_k$(pem1, m2), this.SIGNED_POSITIVE_TWO_1);
    var pem2 = this.minus_6y7u4i_k$(doublePemM2, m0);
    var pinf = m2;
    var q0 = this.plus_4gfpjs_k$(n0, n2);
    var qe0 = n0;
    var qe1 = this.plus_4gfpjs_k$(q0, n1);
    var qem1 = this.minus_6y7u4i_k$(q0, n1);
    var doubleQemN2 = this.times_piylck_k$(this.plus_4gfpjs_k$(qem1, n2), this.SIGNED_POSITIVE_TWO_1);
    var qem2 = this.minus_6y7u4i_k$(doubleQemN2, n0);
    var qinf = n2;
    var re0 = this.times_piylck_k$(pe0, qe0);
    var re1 = this.times_piylck_k$(pe1, qe1);
    var rem1 = this.times_piylck_k$(pem1, qem1);
    var rem2 = this.times_piylck_k$(pem2, qem2);
    var rinf = this.times_piylck_k$(pinf, qinf);
    var r0 = re0;
    var r4 = rinf;
    var rem2re1diff = this.minus_6y7u4i_k$(rem2, re1);
    // Inline function 'kotlin.uintArrayOf' call
    var tmp$ret$11 = _UIntArray___init__impl__ghjpc6(new Int32Array([_UInt___init__impl__l7qpdl(3)]));
    var r3 = this.div_12nggx_k$(rem2re1diff, new SignedUIntArray(tmp$ret$11, true));
    var r1 = this.shr_q5mf3x_k$(this.minus_6y7u4i_k$(re1, rem1), 1);
    var r2 = this.minus_6y7u4i_k$(rem1, r0);
    r3 = this.plus_4gfpjs_k$(this.shr_q5mf3x_k$(this.minus_6y7u4i_k$(r2, r3), 1), this.times_piylck_k$(this.SIGNED_POSITIVE_TWO_1, rinf));
    r2 = this.minus_6y7u4i_k$(this.plus_4gfpjs_k$(r2, r1), r4);
    r1 = this.minus_6y7u4i_k$(r1, r3);
    var bShiftAmount = imul(extendedDigit, this.wordSizeInBits_1);
    var rb0 = r0;
    var rb1 = this.shl_70fb3r_k$(r1, bShiftAmount);
    var rb2 = this.shl_70fb3r_k$(r2, imul(bShiftAmount, 2));
    var rb3 = this.shl_70fb3r_k$(r3, imul(bShiftAmount, 3));
    var rb4 = this.shl_70fb3r_k$(r4, imul(bShiftAmount, 4));
    var rb = this.plus_4gfpjs_k$(this.plus_4gfpjs_k$(this.plus_4gfpjs_k$(this.plus_4gfpjs_k$(rb0, rb1), rb2), rb3), rb4);
    return rb.unsignedValue_1;
  };
  protoOf(BigInteger32Arithmetic).get_SIGNED_POSITIVE_TWO_icygcg_k$ = function () {
    return this.SIGNED_POSITIVE_TWO_1;
  };
  protoOf(BigInteger32Arithmetic).plus_4gfpjs_k$ = function (_this__u8e3s4, other) {
    return signedAdd(this, _this__u8e3s4, other);
  };
  protoOf(BigInteger32Arithmetic).minus_6y7u4i_k$ = function (_this__u8e3s4, other) {
    return signedSubtract(this, _this__u8e3s4, other);
  };
  protoOf(BigInteger32Arithmetic).times_piylck_k$ = function (_this__u8e3s4, other) {
    return signedMultiply(this, _this__u8e3s4, other);
  };
  protoOf(BigInteger32Arithmetic).div_12nggx_k$ = function (_this__u8e3s4, other) {
    return signedDivide(this, _this__u8e3s4, other);
  };
  protoOf(BigInteger32Arithmetic).rem_5penl4_k$ = function (_this__u8e3s4, other) {
    return signedRemainder(this, _this__u8e3s4, other);
  };
  protoOf(BigInteger32Arithmetic).shr_q5mf3x_k$ = function (_this__u8e3s4, places) {
    return new SignedUIntArray(this.shr_fl2abe_k$(_this__u8e3s4.unsignedValue_1, places), _this__u8e3s4.sign_1);
  };
  protoOf(BigInteger32Arithmetic).shl_70fb3r_k$ = function (_this__u8e3s4, places) {
    return new SignedUIntArray(this.shl_236f9c_k$(_this__u8e3s4.unsignedValue_1, places), _this__u8e3s4.sign_1);
  };
  protoOf(BigInteger32Arithmetic).and_m2lsyn_k$ = function (_this__u8e3s4, operand) {
    return new SignedUIntArray(this.and_c5bi3o_k$(_this__u8e3s4.unsignedValue_1, operand), _this__u8e3s4.sign_1);
  };
  protoOf(BigInteger32Arithmetic).multiply_rpjazz_k$ = function (first, second) {
    if (equals(first, this.ZERO_1) ? true : equals(second, this.ZERO_1)) {
      return this.ZERO_1;
    }
    if (_UIntArray___get_size__impl__r6l8ci(first) >= 60 ? true : _UIntArray___get_size__impl__r6l8ci(second) === 60) {
      return this.karatsubaMultiply_p2as9r_k$(first, second);
    }
    // Inline function 'kotlin.collections.foldIndexed' call
    var index = 0;
    var accumulator = this.ZERO_1;
    var tmp0_iterator = UIntArray__iterator_impl_tkdv7k(second);
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$().data_1;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.multiply.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var acc = accumulator;
      accumulator = BigInteger32Arithmetic_getInstance().plus_9mqg7p_k$(acc, BigInteger32Arithmetic_getInstance().shl_236f9c_k$(BigInteger32Arithmetic_getInstance().multiply_7zb58u_k$(first, element), imul(tmp1, BigInteger32Arithmetic_getInstance().basePowerOfTwo_1)));
    }
    var tmp$ret$1 = accumulator;
    return this.removeLeadingZeros_ited7a_k$(tmp$ret$1);
  };
  protoOf(BigInteger32Arithmetic).multiplyNoKaratsuba_bnbtx4_k$ = function (first, second) {
    if (equals(first, this.ZERO_1) ? true : equals(second, this.ZERO_1)) {
      return this.ZERO_1;
    }
    if (_UIntArray___get_size__impl__r6l8ci(first) >= 60 ? true : _UIntArray___get_size__impl__r6l8ci(second) === 60) {
      return this.karatsubaMultiply_p2as9r_k$(first, second);
    }
    // Inline function 'kotlin.collections.foldIndexed' call
    var index = 0;
    var accumulator = this.ZERO_1;
    var tmp0_iterator = UIntArray__iterator_impl_tkdv7k(second);
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$().data_1;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.multiplyNoKaratsuba.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var acc = accumulator;
      accumulator = BigInteger32Arithmetic_getInstance().plus_9mqg7p_k$(acc, BigInteger32Arithmetic_getInstance().shl_236f9c_k$(BigInteger32Arithmetic_getInstance().multiply_7zb58u_k$(first, element), imul(tmp1, BigInteger32Arithmetic_getInstance().basePowerOfTwo_1)));
    }
    var tmp$ret$1 = accumulator;
    return this.removeLeadingZeros_ited7a_k$(tmp$ret$1);
  };
  protoOf(BigInteger32Arithmetic).pow_qucbzx_k$ = function (base, exponent) {
    if (exponent.equals(new Long(0, 0))) {
      return this.ONE_1;
    }
    if (exponent.equals(new Long(1, 0))) {
      return base;
    }
    var helperVar = this.ONE_1;
    var exponentVar = exponent;
    var baseVar = base;
    while (exponentVar.compareTo_9jj042_k$(new Long(1, 0)) > 0) {
      // Inline function 'kotlin.Long.rem' call
      if (exponentVar.rem_bsnl9o_k$(toLong(2)).equals(new Long(0, 0))) {
        baseVar = this.times_239av3_k$(baseVar, baseVar);
        // Inline function 'kotlin.Long.div' call
        exponentVar = exponentVar.div_jun7gj_k$(toLong(2));
      } else {
        helperVar = this.times_239av3_k$(baseVar, helperVar);
        baseVar = this.times_239av3_k$(baseVar, baseVar);
        // Inline function 'kotlin.Long.div' call
        // Inline function 'kotlin.Long.minus' call
        exponentVar = exponentVar.minus_mfbszm_k$(toLong(1)).div_jun7gj_k$(toLong(2));
      }
    }
    return this.times_239av3_k$(helperVar, baseVar);
  };
  protoOf(BigInteger32Arithmetic).divide_9m0nlz_k$ = function (first, second) {
    return this.basicDivide_1s2n9j_k$(first, second);
  };
  protoOf(BigInteger32Arithmetic).basicDivide_1s2n9j_k$ = function (unnormalizedDividend, unnormalizedDivisor) {
    if (this.compareTo_bw0y4u_k$(unnormalizedDivisor, unnormalizedDividend) > 0) {
      return new Pair(new UIntArray(this.ZERO_1), new UIntArray(unnormalizedDividend));
    }
    if (_UIntArray___get_size__impl__r6l8ci(unnormalizedDivisor) === 1 ? _UIntArray___get_size__impl__r6l8ci(unnormalizedDividend) === 1 : false) {
      // Inline function 'kotlin.uintArrayOf' call
      // Inline function 'kotlin.UInt.div' call
      var this_0 = UIntArray__get_impl_gp5kza(unnormalizedDividend, 0);
      var other = UIntArray__get_impl_gp5kza(unnormalizedDivisor, 0);
      var tmp$ret$0 = uintDivide(this_0, other);
      var tmp$ret$1 = _UIntArray___init__impl__ghjpc6(new Int32Array([tmp$ret$0]));
      var tmp = this.removeLeadingZeros_ited7a_k$(tmp$ret$1);
      // Inline function 'kotlin.uintArrayOf' call
      // Inline function 'kotlin.UInt.rem' call
      var this_1 = UIntArray__get_impl_gp5kza(unnormalizedDividend, 0);
      var other_0 = UIntArray__get_impl_gp5kza(unnormalizedDivisor, 0);
      var tmp$ret$2 = uintRemainder(this_1, other_0);
      var tmp$ret$3 = _UIntArray___init__impl__ghjpc6(new Int32Array([tmp$ret$2]));
      return new Pair(new UIntArray(tmp), new UIntArray(this.removeLeadingZeros_ited7a_k$(tmp$ret$3)));
    }
    var bitPrecision = this.bitLength_5uyy7h_k$(unnormalizedDividend) - this.bitLength_5uyy7h_k$(unnormalizedDivisor) | 0;
    if (bitPrecision === 0) {
      // Inline function 'kotlin.uintArrayOf' call
      var tmp$ret$4 = _UIntArray___init__impl__ghjpc6(new Int32Array([_UInt___init__impl__l7qpdl(1)]));
      return new Pair(new UIntArray(tmp$ret$4), new UIntArray(this.minus_qob5ez_k$(unnormalizedDividend, unnormalizedDivisor)));
    }
    var tmp0_container = this.normalize_i4tzil_k$(unnormalizedDividend, unnormalizedDivisor);
    var dividend = tmp0_container.component1_7eebsc_k$().storage_1;
    var divisor = tmp0_container.component2_7eebsb_k$().storage_1;
    var normalizationShift = tmp0_container.component3_7eebsa_k$();
    var dividendSize = _UIntArray___get_size__impl__r6l8ci(dividend);
    var divisorSize = _UIntArray___get_size__impl__r6l8ci(divisor);
    var wordPrecision = dividendSize - divisorSize | 0;
    var qjhat;
    var reconstructedQuotient;
    var quotient = _UIntArray___init__impl__ghjpc6_0(wordPrecision);
    var divisorTimesBaseToPowerOfM = this.shl_236f9c_k$(divisor, imul(wordPrecision, this.basePowerOfTwo_1));
    if (this.compareTo_bw0y4u_k$(dividend, divisorTimesBaseToPowerOfM) >= 0) {
      quotient = _UIntArray___init__impl__ghjpc6_0(wordPrecision + 1 | 0);
      UIntArray__set_impl_7f2zu2(quotient, wordPrecision, _UInt___init__impl__l7qpdl(1));
      dividend = this.minus_qob5ez_k$(dividend, divisorTimesBaseToPowerOfM);
    }
    var inductionVariable = wordPrecision - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0;
        if ((divisorSize + j | 0) < _UIntArray___get_size__impl__r6l8ci(dividend)) {
          // Inline function 'kotlin.ULong.div' call
          // Inline function 'kotlin.ULong.plus' call
          // Inline function 'kotlin.ULong.shl' call
          // Inline function 'kotlin.UInt.toULong' call
          var this_2 = UIntArray__get_impl_gp5kza(dividend, divisorSize + j | 0);
          var this_3 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_2)).and_4spn93_k$(new Long(-1, 0)));
          var bitCount = this.basePowerOfTwo_1;
          var this_4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).shl_bg8if3_k$(bitCount));
          // Inline function 'kotlin.ULong.plus' call
          // Inline function 'kotlin.UInt.toULong' call
          var this_5 = UIntArray__get_impl_gp5kza(dividend, (divisorSize + j | 0) - 1 | 0);
          var other_1 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_5)).and_4spn93_k$(new Long(-1, 0)));
          var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other_1)));
          // Inline function 'kotlin.ULong.div' call
          // Inline function 'kotlin.UInt.toULong' call
          var this_7 = UIntArray__get_impl_gp5kza(divisor, divisorSize - 1 | 0);
          var other_2 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_7)).and_4spn93_k$(new Long(-1, 0)));
          tmp_0 = ulongDivide(this_6, other_2);
        } else {
          var tmp_1;
          if ((divisorSize + j | 0) === _UIntArray___get_size__impl__r6l8ci(dividend)) {
            // Inline function 'kotlin.UInt.toULong' call
            // Inline function 'kotlin.UInt.div' call
            var this_8 = UIntArray__get_impl_gp5kza(dividend, (divisorSize + j | 0) - 1 | 0);
            var other_3 = UIntArray__get_impl_gp5kza(divisor, divisorSize - 1 | 0);
            var this_9 = uintDivide(this_8, other_3);
            tmp_1 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_9)).and_4spn93_k$(new Long(-1, 0)));
          } else {
            tmp_1 = _ULong___init__impl__c78o9k(new Long(0, 0));
          }
          tmp_0 = tmp_1;
        }
        qjhat = tmp_0;
        var tmp_2 = quotient;
        var tmp_3;
        // Inline function 'kotlin.ULong.compareTo' call
        // Inline function 'kotlin.UInt.minus' call
        var this_10 = this.base_1;
        var other_4 = _ULong___init__impl__c78o9k(new Long(1, 0));
        // Inline function 'kotlin.ULong.minus' call
        // Inline function 'kotlin.UInt.toULong' call
        var this_11 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_10)).and_4spn93_k$(new Long(-1, 0)));
        var other_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_11).minus_mfbszm_k$(_ULong___get_data__impl__fggpzb(other_4)));
        if (ulongCompare(_ULong___get_data__impl__fggpzb(qjhat), _ULong___get_data__impl__fggpzb(other_5)) < 0) {
          // Inline function 'kotlin.ULong.toUInt' call
          // Inline function 'kotlin.toUInt' call
          var this_12 = _ULong___get_data__impl__fggpzb(qjhat);
          tmp_3 = _UInt___init__impl__l7qpdl(this_12.toInt_1tsl84_k$());
        } else {
          // Inline function 'kotlin.UInt.minus' call
          var this_13 = this.base_1;
          var other_6 = _UInt___init__impl__l7qpdl(1);
          tmp_3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_13) - _UInt___get_data__impl__f0vqqw(other_6) | 0);
        }
        UIntArray__set_impl_7f2zu2(tmp_2, j, tmp_3);
        reconstructedQuotient = this.shl_236f9c_k$(this.times_bpgx5u_k$(divisor, UIntArray__get_impl_gp5kza(quotient, j)), imul(j, this.basePowerOfTwo_1));
        while (this.compareTo_bw0y4u_k$(reconstructedQuotient, dividend) > 0) {
          var tmp_4 = quotient;
          // Inline function 'kotlin.UInt.minus' call
          var this_14 = UIntArray__get_impl_gp5kza(quotient, j);
          var other_7 = _UInt___init__impl__l7qpdl(1);
          var tmp$ret$22 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_14) - _UInt___get_data__impl__f0vqqw(other_7) | 0);
          UIntArray__set_impl_7f2zu2(tmp_4, j, tmp$ret$22);
          reconstructedQuotient = this.shl_236f9c_k$(this.times_bpgx5u_k$(divisor, UIntArray__get_impl_gp5kza(quotient, j)), imul(j, this.basePowerOfTwo_1));
        }
        dividend = this.minus_qob5ez_k$(dividend, reconstructedQuotient);
      }
       while (0 <= inductionVariable);
    while (this.compareTo_bw0y4u_k$(dividend, divisor) >= 0) {
      quotient = this.plus_stmrwq_k$(quotient, _UInt___init__impl__l7qpdl(1));
      dividend = this.minus_qob5ez_k$(dividend, divisor);
    }
    var denormRemainder = this.denormalize_81y8dj_k$(dividend, normalizationShift);
    return new Pair(new UIntArray(this.removeLeadingZeros_ited7a_k$(quotient)), new UIntArray(denormRemainder));
  };
  protoOf(BigInteger32Arithmetic).basicDivide2_80atrp_k$ = function (unnormalizedDividend, unnormalizedDivisor) {
    var tmp0_container = this.normalize_i4tzil_k$(unnormalizedDividend, unnormalizedDivisor);
    var a = tmp0_container.component1_7eebsc_k$().storage_1;
    var b = tmp0_container.component2_7eebsb_k$().storage_1;
    var shift = tmp0_container.component3_7eebsa_k$();
    var m = _UIntArray___get_size__impl__r6l8ci(a) - _UIntArray___get_size__impl__r6l8ci(b) | 0;
    var bmb = this.shl_236f9c_k$(b, imul(m, this.wordSizeInBits_1));
    // Inline function 'kotlin.UIntArray' call
    var tmp = 0;
    var tmp_0 = m + 1 | 0;
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.UInt.toInt' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.basicDivide2.<anonymous>' call
      var this_0 = _UInt___init__impl__l7qpdl(0);
      tmp_1[tmp_2] = _UInt___get_data__impl__f0vqqw(this_0);
      tmp = tmp + 1 | 0;
    }
    var q = _UIntArray___init__impl__ghjpc6(tmp_1);
    if (this.compareTo_bw0y4u_k$(a, bmb) > 0) {
      UIntArray__set_impl_7f2zu2(q, m, _UInt___init__impl__l7qpdl(1));
      a = this.minus_qob5ez_k$(a, bmb);
    }
    var qjhat = this.ZERO_1;
    var qjhatULong = _ULong___init__impl__c78o9k(new Long(0, 0));
    var bjb = this.ZERO_1;
    var delta = this.ZERO_1;
    var inductionVariable = m - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        // Inline function 'kotlin.ULong.div' call
        // Inline function 'kotlin.collections.copyOfRange' call
        var this_1 = a;
        var fromIndex = _UIntArray___get_size__impl__r6l8ci(b) - 1 | 0;
        var toIndex = _UIntArray___get_size__impl__r6l8ci(b) + 1 | 0;
        var tmp$ret$4 = _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(this_1), fromIndex, toIndex));
        var this_2 = this.toULongExact_jvytdw_k$(tmp$ret$4);
        // Inline function 'kotlin.ULong.div' call
        // Inline function 'kotlin.UInt.toULong' call
        var this_3 = UIntArray__get_impl_gp5kza(b, _UIntArray___get_size__impl__r6l8ci(b) - 1 | 0);
        var other = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_3)).and_4spn93_k$(new Long(-1, 0)));
        qjhatULong = ulongDivide(this_2, other);
        var tmp_3 = q;
        // Inline function 'kotlin.ULong.toUInt' call
        // Inline function 'kotlin.math.min' call
        var a_0 = qjhatULong;
        var b_0 = this.baseMask_1;
        var this_4 = minOf(a_0, b_0);
        // Inline function 'kotlin.toUInt' call
        var this_5 = _ULong___get_data__impl__fggpzb(this_4);
        var tmp$ret$10 = _UInt___init__impl__l7qpdl(this_5.toInt_1tsl84_k$());
        UIntArray__set_impl_7f2zu2(tmp_3, j, tmp$ret$10);
        bjb = this.shl_236f9c_k$(b, imul(j, this.wordSizeInBits_1));
        var qjBjb = this.shl_236f9c_k$(this.times_bpgx5u_k$(b, UIntArray__get_impl_gp5kza(q, j)), imul(j, this.wordSizeInBits_1));
        if (this.compareTo_bw0y4u_k$(qjBjb, a) > 0) {
          delta = this.minus_qob5ez_k$(qjBjb, a);
          while (this.compareTo_bw0y4u_k$(delta, qjBjb) > 0) {
            var tmp_4 = q;
            // Inline function 'kotlin.UInt.minus' call
            var this_6 = UIntArray__get_impl_gp5kza(q, j);
            var other_0 = _UInt___init__impl__l7qpdl(1);
            var tmp$ret$11 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_6) - _UInt___get_data__impl__f0vqqw(other_0) | 0);
            UIntArray__set_impl_7f2zu2(tmp_4, j, tmp$ret$11);
            delta = this.minus_qob5ez_k$(delta, bjb);
          }
          a = this.shl_236f9c_k$(this.minus_qob5ez_k$(a, this.times_bpgx5u_k$(b, UIntArray__get_impl_gp5kza(q, j))), imul(j, this.wordSizeInBits_1));
        } else {
          a = this.minus_qob5ez_k$(a, qjBjb);
        }
      }
       while (0 <= inductionVariable);
    var denormRemainder = this.denormalize_81y8dj_k$(a, shift);
    return new Pair(new UIntArray(this.removeLeadingZeros_ited7a_k$(q)), new UIntArray(denormRemainder));
  };
  protoOf(BigInteger32Arithmetic).d1ReciprocalRecursiveWordVersion_rqgyir_k$ = function (a) {
    var n = _UIntArray___get_size__impl__r6l8ci(a) - 1 | 0;
    if (n <= 2) {
      var tmp;
      if (n === 0) {
        tmp = 1;
      } else {
        tmp = n;
      }
      var corrected = tmp;
      var rhoPowered = this.shl_236f9c_k$(this.ONE_1, imul(imul(corrected, 2), this.wordSizeInBits_1));
      var x = this.div_reimqc_k$(rhoPowered, a);
      var r = this.minus_qob5ez_k$(rhoPowered, this.times_239av3_k$(x, a));
      return new Pair(new UIntArray(x), new UIntArray(r));
    }
    // Inline function 'kotlin.math.floor' call
    var x_0 = (n - 1 | 0) / 2;
    var tmp$ret$0 = Math.floor(x_0);
    var l = numberToInt(tmp$ret$0);
    var h = n - l | 0;
    // Inline function 'kotlin.collections.copyOfRange' call
    var fromIndex = (_UIntArray___get_size__impl__r6l8ci(a) - h | 0) - 1 | 0;
    var toIndex = _UIntArray___get_size__impl__r6l8ci(a);
    var ah = _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(a), fromIndex, toIndex));
    // Inline function 'kotlin.collections.copyOfRange' call
    var al = _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(a), 0, l));
    var tmp0_container = this.d1ReciprocalRecursiveWordVersion_rqgyir_k$(ah);
    var xh = tmp0_container.component1_7eebsc_k$().storage_1;
    var rh = tmp0_container.component2_7eebsb_k$().storage_1;
    var s = this.times_239av3_k$(al, xh);
    var rhRhoL = this.shl_236f9c_k$(rh, imul(l, this.wordSizeInBits_1));
    var tmp_0;
    if (this.compareTo_bw0y4u_k$(rhRhoL, s) >= 0) {
      tmp_0 = this.minus_qob5ez_k$(rhRhoL, s);
    } else {
      xh = this.minus_qob5ez_k$(xh, this.ONE_1);
      tmp_0 = this.minus_qob5ez_k$(this.plus_9mqg7p_k$(rhRhoL, a), s);
    }
    var t = tmp_0;
    var tm = this.shr_fl2abe_k$(t, imul(h, this.wordSizeInBits_1));
    var d = this.shr_fl2abe_k$(this.times_239av3_k$(xh, tm), imul(h, this.wordSizeInBits_1));
    var x_1 = this.plus_9mqg7p_k$(this.shl_236f9c_k$(xh, imul(l, this.wordSizeInBits_1)), d);
    var r_0 = this.minus_qob5ez_k$(this.shl_236f9c_k$(t, imul(l, this.wordSizeInBits_1)), this.times_239av3_k$(a, d));
    if (this.compareTo_bw0y4u_k$(r_0, a) >= 0) {
      x_1 = this.plus_9mqg7p_k$(x_1, this.ONE_1);
      r_0 = this.minus_qob5ez_k$(r_0, a);
      if (this.compareTo_bw0y4u_k$(r_0, a) >= 0) {
        x_1 = this.plus_9mqg7p_k$(x_1, this.ONE_1);
        r_0 = this.minus_qob5ez_k$(r_0, a);
      }
    }
    return new Pair(new UIntArray(x_1), new UIntArray(r_0));
  };
  protoOf(BigInteger32Arithmetic).reciprocalSingleWord_cmfev_k$ = function (operand) {
    var bitLength = this.bitLength_3jopvy_k$(operand);
    var requiredPrecision = imul(bitLength, 4);
    if (imul(bitLength, 2) <= 63) {
      // Inline function 'kotlin.ULong.shl' call
      var this_0 = _ULong___init__impl__c78o9k(new Long(1, 0));
      var base = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).shl_bg8if3_k$(requiredPrecision));
      // Inline function 'kotlin.ULong.div' call
      // Inline function 'kotlin.ULong.div' call
      // Inline function 'kotlin.UInt.toULong' call
      var other = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(operand)).and_4spn93_k$(new Long(-1, 0)));
      var result = ulongDivide(base, other);
      // Inline function 'kotlin.uintArrayOf' call
      var tmp = _UIntArray___init__impl__ghjpc6(new Int32Array([operand]));
      // Inline function 'kotlin.uintArrayOf' call
      // Inline function 'kotlin.ULong.toUInt' call
      // Inline function 'kotlin.toUInt' call
      var this_1 = _ULong___get_data__impl__fggpzb(result);
      var tmp$ret$6 = _UInt___init__impl__l7qpdl(this_1.toInt_1tsl84_k$());
      var tmp$ret$7 = _UIntArray___init__impl__ghjpc6(new Int32Array([tmp$ret$6]));
      return checkReciprocal(this, tmp, new Pair(new UIntArray(tmp$ret$7), requiredPrecision));
    } else {
      var base_0 = this.shl_236f9c_k$(this.ONE_1, requiredPrecision);
      var result_0 = this.div_bf2wb7_k$(base_0, operand);
      // Inline function 'kotlin.uintArrayOf' call
      var tmp$ret$8 = _UIntArray___init__impl__ghjpc6(new Int32Array([operand]));
      return checkReciprocal(this, tmp$ret$8, new Pair(new UIntArray(result_0), requiredPrecision));
    }
  };
  protoOf(BigInteger32Arithmetic).reciprocal_vit5ei_k$ = function (operand) {
    return this.d1ReciprocalRecursiveWordVersion_rqgyir_k$(operand);
  };
  protoOf(BigInteger32Arithmetic).reciprocalDivision_9yv1nd_k$ = function (first, second) {
    var reciprocalExtension = _UIntArray___get_size__impl__r6l8ci(first) - _UIntArray___get_size__impl__r6l8ci(second) | 0;
    var precisionShift = imul(imul(reciprocalExtension, 2), this.wordSizeInBits_1);
    var secondHighPrecision = this.shl_236f9c_k$(second, precisionShift);
    var secondReciprocalWithRemainder = this.d1ReciprocalRecursiveWordVersion_rqgyir_k$(secondHighPrecision);
    var secondReciprocal = secondReciprocalWithRemainder.get_first_irdx8n_k$().storage_1;
    var product = this.times_239av3_k$(first, secondReciprocal);
    if (this.compareTo_95raax_k$(product, _UInt___init__impl__l7qpdl(0)) === 0) {
      return new Pair(new UIntArray(this.ZERO_1), new UIntArray(first));
    }
    if (_UIntArray___get_size__impl__r6l8ci(product) === 1) {
      var tmp = product;
      // Inline function 'kotlin.UInt.minus' call
      var this_0 = this.baseMaskInt_1;
      var other = _UInt___init__impl__l7qpdl(1);
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) - _UInt___get_data__impl__f0vqqw(other) | 0);
      if (this.compareTo_95raax_k$(tmp, tmp$ret$0) >= 0) {
        product = this.plus_9mqg7p_k$(product, this.ONE_1);
      }
    } else {
      var importantWord = UIntArray__get_impl_gp5kza(product, _UIntArray___get_size__impl__r6l8ci(product) - _UIntArray___get_size__impl__r6l8ci(second) | 0);
      // Inline function 'kotlin.UInt.compareTo' call
      var other_0 = this.baseMask_1;
      // Inline function 'kotlin.ULong.compareTo' call
      // Inline function 'kotlin.UInt.toULong' call
      var this_1 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(importantWord)).and_4spn93_k$(new Long(-1, 0)));
      if (ulongCompare(_ULong___get_data__impl__fggpzb(this_1), _ULong___get_data__impl__fggpzb(other_0)) >= 0) {
        // Inline function 'kotlin.UIntArray' call
        var tmp_0 = 0;
        var tmp_1 = _UIntArray___get_size__impl__r6l8ci(product);
        var tmp_2 = new Int32Array(tmp_1);
        while (tmp_0 < tmp_1) {
          var tmp_3 = tmp_0;
          // Inline function 'kotlin.UInt.toInt' call
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.reciprocalDivision.<anonymous>' call
          var tmp_4;
          if (tmp_3 === (_UIntArray___get_size__impl__r6l8ci(product) - 1 | 0)) {
            // Inline function 'kotlin.UInt.plus' call
            var this_2 = UIntArray__get_impl_gp5kza(product, _UIntArray___get_size__impl__r6l8ci(product) - 1 | 0);
            var other_1 = _UInt___init__impl__l7qpdl(1);
            tmp_4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_2) + _UInt___get_data__impl__f0vqqw(other_1) | 0);
          } else {
            tmp_4 = _UInt___init__impl__l7qpdl(0);
          }
          var this_3 = tmp_4;
          tmp_2[tmp_3] = _UInt___get_data__impl__f0vqqw(this_3);
          tmp_0 = tmp_0 + 1 | 0;
        }
        product = _UIntArray___init__impl__ghjpc6(tmp_2);
      }
    }
    var numberOfWords = (_UIntArray___get_size__impl__r6l8ci(product) - imul(_UIntArray___get_size__impl__r6l8ci(secondReciprocal), 2) | 0) + imul(reciprocalExtension, 2) | 0;
    if (numberOfWords === 0) {
      numberOfWords = 1;
    }
    // Inline function 'kotlin.collections.copyOfRange' call
    var this_4 = product;
    var fromIndex = _UIntArray___get_size__impl__r6l8ci(product) - numberOfWords | 0;
    var toIndex = _UIntArray___get_size__impl__r6l8ci(product);
    var result = _UIntArray___init__impl__ghjpc6(copyOfRange(_UIntArray___get_storage__impl__92a0v0(this_4), fromIndex, toIndex));
    var remainder = this.minus_qob5ez_k$(first, this.times_239av3_k$(result, second));
    return new Pair(new UIntArray(result), new UIntArray(remainder));
  };
  protoOf(BigInteger32Arithmetic).sqrt_bv061s_k$ = function (operand) {
    return reqursiveSqrt(this, operand);
  };
  protoOf(BigInteger32Arithmetic).basecaseSqrt_fe9q9t_k$ = function (operand) {
    var sqrt = this.sqrtInt_w6fjyc_k$(operand);
    var remainder = this.minus_qob5ez_k$(operand, this.times_239av3_k$(sqrt, sqrt));
    return new Pair(new UIntArray(sqrt), new UIntArray(remainder));
  };
  protoOf(BigInteger32Arithmetic).sqrtInt_w6fjyc_k$ = function (operand) {
    var u = operand;
    var s;
    var tmp;
    do {
      s = u;
      tmp = this.plus_9mqg7p_k$(s, this.basicDivide2_80atrp_k$(operand, s).get_first_irdx8n_k$().storage_1);
      u = this.shr_fl2abe_k$(tmp, 1);
    }
     while (this.compareTo_bw0y4u_k$(u, s) < 0);
    return s;
  };
  protoOf(BigInteger32Arithmetic).gcd_1cokcr_k$ = function (first, second) {
    var tmp;
    if (_UIntArray___get_size__impl__r6l8ci(first) > 150 ? true : _UIntArray___get_size__impl__r6l8ci(second) > 150) {
      tmp = euclideanGcd(this, first, second);
    } else {
      tmp = binaryGcd(this, first, second);
    }
    return tmp;
  };
  protoOf(BigInteger32Arithmetic).parseForBase_xftrv2_k$ = function (number, base) {
    var parsed = this.ZERO_1;
    // Inline function 'kotlin.text.forEach' call
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(number)) {
      var element = charSequenceGet(number, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.parseForBase.<anonymous>' call
      var tmp = BigInteger32Arithmetic_getInstance();
      var tmp_0 = BigInteger32Arithmetic_getInstance();
      var tmp_1 = parsed;
      // Inline function 'kotlin.toUInt' call
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(base);
      var tmp_2 = tmp_0.times_bpgx5u_k$(tmp_1, tmp$ret$0);
      // Inline function 'kotlin.toUInt' call
      var this_0 = toDigit(element, base);
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(this_0);
      parsed = tmp.plus_stmrwq_k$(tmp_2, tmp$ret$1);
    }
    return parsed;
  };
  protoOf(BigInteger32Arithmetic).toString_uzlc0k_k$ = function (operand, base) {
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.collections.copyOf' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$1 = _UIntArray___get_storage__impl__92a0v0(operand).slice();
    var copy = _UIntArray___init__impl__ghjpc6(tmp$ret$1);
    // Inline function 'kotlin.uintArrayOf' call
    // Inline function 'kotlin.toUInt' call
    var tmp$ret$3 = _UInt___init__impl__l7qpdl(base);
    var baseArray = _UIntArray___init__impl__ghjpc6(new Int32Array([tmp$ret$3]));
    var stringBuilder = StringBuilder_init_$Create$();
    while (!equals(copy, this.ZERO_1)) {
      var divremResult = this.divrem_uluix5_k$(copy, baseArray);
      if (UIntArray__isEmpty_impl_vd8j4n(divremResult.get_second_jf7fjx_k$().storage_1)) {
        stringBuilder.append_t8pm91_k$(0);
      } else {
        stringBuilder.append_22ad7x_k$(toString_0(UIntArray__get_impl_gp5kza(divremResult.get_second_jf7fjx_k$().storage_1, 0), base));
      }
      copy = divremResult.get_first_irdx8n_k$().storage_1;
    }
    // Inline function 'kotlin.text.reversed' call
    var this_0 = stringBuilder.toString();
    return toString(reversed_0(isCharSequence(this_0) ? this_0 : THROW_CCE()));
  };
  protoOf(BigInteger32Arithmetic).numberOfDecimalDigits_672smv_k$ = function (operand) {
    var bitLenght = this.bitLength_5uyy7h_k$(operand);
    // Inline function 'kotlin.math.ceil' call
    var x = (bitLenght - 1 | 0) * Companion_getInstance_6().get_LOG_10_OF_2_5oia3e_k$();
    var minDigit = Math.ceil(x);
    var tmp = this.div_reimqc_k$(operand, this.pow_qucbzx_k$(this.TEN_1, numberToLong(minDigit)));
    var counter = new Long(0, 0);
    while (!(this.compare_nba68r_k$(tmp, this.ZERO_1) === 0)) {
      tmp = this.div_reimqc_k$(tmp, this.TEN_1);
      counter = counter.inc_28ke_k$();
    }
    // Inline function 'kotlin.Long.plus' call
    var this_0 = counter;
    var other = numberToInt(minDigit);
    return this_0.plus_r93sks_k$(toLong(other));
  };
  protoOf(BigInteger32Arithmetic).and_c5bi3o_k$ = function (operand, mask) {
    // Inline function 'kotlin.UIntArray' call
    var tmp = 0;
    var tmp_0 = _UIntArray___get_size__impl__r6l8ci(operand);
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.UInt.toInt' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.and.<anonymous>' call
      var tmp_3;
      if (tmp_2 < _UIntArray___get_size__impl__r6l8ci(mask)) {
        // Inline function 'kotlin.UInt.and' call
        var this_0 = UIntArray__get_impl_gp5kza(operand, tmp_2);
        var other = UIntArray__get_impl_gp5kza(mask, tmp_2);
        tmp_3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) & _UInt___get_data__impl__f0vqqw(other));
      } else {
        tmp_3 = _UInt___init__impl__l7qpdl(0);
      }
      var this_1 = tmp_3;
      tmp_1[tmp_2] = _UInt___get_data__impl__f0vqqw(this_1);
      tmp = tmp + 1 | 0;
    }
    var tmp$ret$4 = _UIntArray___init__impl__ghjpc6(tmp_1);
    return this.removeLeadingZeros_ited7a_k$(tmp$ret$4);
  };
  protoOf(BigInteger32Arithmetic).or_mvwqnk_k$ = function (operand, mask) {
    // Inline function 'kotlin.UIntArray' call
    var tmp = 0;
    var tmp_0 = _UIntArray___get_size__impl__r6l8ci(operand);
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.UInt.toInt' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.or.<anonymous>' call
      var tmp_3;
      if (tmp_2 < _UIntArray___get_size__impl__r6l8ci(mask)) {
        // Inline function 'kotlin.UInt.or' call
        var this_0 = UIntArray__get_impl_gp5kza(operand, tmp_2);
        var other = UIntArray__get_impl_gp5kza(mask, tmp_2);
        tmp_3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) | _UInt___get_data__impl__f0vqqw(other));
      } else {
        tmp_3 = UIntArray__get_impl_gp5kza(operand, tmp_2);
      }
      var this_1 = tmp_3;
      tmp_1[tmp_2] = _UInt___get_data__impl__f0vqqw(this_1);
      tmp = tmp + 1 | 0;
    }
    var tmp$ret$4 = _UIntArray___init__impl__ghjpc6(tmp_1);
    return this.removeLeadingZeros_ited7a_k$(tmp$ret$4);
  };
  protoOf(BigInteger32Arithmetic).xor_so3m3c_k$ = function (operand, mask) {
    // Inline function 'kotlin.UIntArray' call
    var tmp = 0;
    var tmp_0 = _UIntArray___get_size__impl__r6l8ci(operand);
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.UInt.toInt' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.xor.<anonymous>' call
      var tmp_3;
      if (tmp_2 < _UIntArray___get_size__impl__r6l8ci(mask)) {
        // Inline function 'kotlin.UInt.xor' call
        var this_0 = UIntArray__get_impl_gp5kza(operand, tmp_2);
        var other = UIntArray__get_impl_gp5kza(mask, tmp_2);
        tmp_3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) ^ _UInt___get_data__impl__f0vqqw(other));
      } else {
        // Inline function 'kotlin.UInt.xor' call
        var this_1 = UIntArray__get_impl_gp5kza(operand, tmp_2);
        var other_0 = _UInt___init__impl__l7qpdl(0);
        tmp_3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_1) ^ _UInt___get_data__impl__f0vqqw(other_0));
      }
      var this_2 = tmp_3;
      tmp_1[tmp_2] = _UInt___get_data__impl__f0vqqw(this_2);
      tmp = tmp + 1 | 0;
    }
    var tmp$ret$5 = _UIntArray___init__impl__ghjpc6(tmp_1);
    return this.removeLeadingZeros_ited7a_k$(tmp$ret$5);
  };
  protoOf(BigInteger32Arithmetic).not_duahi8_k$ = function (operand) {
    // Inline function 'kotlin.UIntArray' call
    var tmp = 0;
    var tmp_0 = _UIntArray___get_size__impl__r6l8ci(operand);
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.UInt.toInt' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.not.<anonymous>' call
      // Inline function 'kotlin.UInt.inv' call
      var this_0 = UIntArray__get_impl_gp5kza(operand, tmp_2);
      var this_1 = _UInt___init__impl__l7qpdl(~_UInt___get_data__impl__f0vqqw(this_0));
      tmp_1[tmp_2] = _UInt___get_data__impl__f0vqqw(this_1);
      tmp = tmp + 1 | 0;
    }
    var tmp$ret$4 = _UIntArray___init__impl__ghjpc6(tmp_1);
    return this.removeLeadingZeros_ited7a_k$(tmp$ret$4);
  };
  protoOf(BigInteger32Arithmetic).shl_236f9c_k$ = function (_this__u8e3s4, places) {
    return this.shiftLeft_4kwzc4_k$(_this__u8e3s4, places);
  };
  protoOf(BigInteger32Arithmetic).shr_fl2abe_k$ = function (_this__u8e3s4, places) {
    return this.shiftRight_1gj8c5_k$(_this__u8e3s4, places);
  };
  protoOf(BigInteger32Arithmetic).bitAt_2ndsxe_k$ = function (operand, position) {
    // Inline function 'kotlin.Long.div' call
    if (position.div_jun7gj_k$(toLong(63)).compareTo_9jj042_k$(toLong(IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$())) > 0) {
      throw RuntimeException_init_$Create$('Invalid bit index, too large, cannot access word (Word position > Int.MAX_VALUE');
    }
    // Inline function 'kotlin.Long.div' call
    var wordPosition = position.div_jun7gj_k$(toLong(63));
    if (wordPosition.compareTo_9jj042_k$(toLong(_UIntArray___get_size__impl__r6l8ci(operand))) >= 0) {
      return false;
    }
    // Inline function 'kotlin.Long.rem' call
    var bitPosition = position.rem_bsnl9o_k$(toLong(63));
    var word = UIntArray__get_impl_gp5kza(operand, wordPosition.toInt_1tsl84_k$());
    // Inline function 'kotlin.UInt.and' call
    // Inline function 'kotlin.UInt.shl' call
    var this_0 = _UInt___init__impl__l7qpdl(1);
    var bitCount = bitPosition.toInt_1tsl84_k$();
    var other = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) << bitCount);
    return _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(word) & _UInt___get_data__impl__f0vqqw(other)) === _UInt___init__impl__l7qpdl(1);
  };
  protoOf(BigInteger32Arithmetic).setBitAt_uk7oe_k$ = function (operand, position, bit) {
    // Inline function 'kotlin.Long.div' call
    if (position.div_jun7gj_k$(toLong(63)).compareTo_9jj042_k$(toLong(IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$())) > 0) {
      throw RuntimeException_init_$Create$('Invalid bit index, too large, cannot access word (Word position > Int.MAX_VALUE');
    }
    // Inline function 'kotlin.Long.div' call
    var wordPosition = position.div_jun7gj_k$(toLong(63));
    if (wordPosition.compareTo_9jj042_k$(toLong(_UIntArray___get_size__impl__r6l8ci(operand))) >= 0) {
      throw IndexOutOfBoundsException_init_$Create$('Invalid position, addressed word ' + wordPosition.toString() + ' larger than number of words ' + _UIntArray___get_size__impl__r6l8ci(operand));
    }
    // Inline function 'kotlin.Long.rem' call
    var bitPosition = position.rem_bsnl9o_k$(toLong(63));
    // Inline function 'kotlin.UInt.shl' call
    var this_0 = _UInt___init__impl__l7qpdl(1);
    var bitCount = bitPosition.toInt_1tsl84_k$();
    var setMask = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) << bitCount);
    // Inline function 'kotlin.UIntArray' call
    var tmp = 0;
    var tmp_0 = _UIntArray___get_size__impl__r6l8ci(operand);
    var tmp_1 = new Int32Array(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.UInt.toInt' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.setBitAt.<anonymous>' call
      var tmp_3;
      if (tmp_2 === wordPosition.toInt_1tsl84_k$()) {
        var tmp_4;
        if (bit) {
          // Inline function 'kotlin.UInt.or' call
          var this_1 = UIntArray__get_impl_gp5kza(operand, tmp_2);
          tmp_4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_1) | _UInt___get_data__impl__f0vqqw(setMask));
        } else {
          // Inline function 'kotlin.UInt.xor' call
          var this_2 = UIntArray__get_impl_gp5kza(operand, tmp_2);
          tmp_4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_2) ^ _UInt___get_data__impl__f0vqqw(setMask));
        }
        tmp_3 = tmp_4;
      } else {
        tmp_3 = UIntArray__get_impl_gp5kza(operand, tmp_2);
      }
      var this_3 = tmp_3;
      tmp_1[tmp_2] = _UInt___get_data__impl__f0vqqw(this_3);
      tmp = tmp + 1 | 0;
    }
    return _UIntArray___init__impl__ghjpc6(tmp_1);
  };
  protoOf(BigInteger32Arithmetic).plus_9mqg7p_k$ = function (_this__u8e3s4, other) {
    return this.add_nlzu36_k$(_this__u8e3s4, other);
  };
  protoOf(BigInteger32Arithmetic).minus_qob5ez_k$ = function (_this__u8e3s4, other) {
    return this.subtract_n0lojl_k$(_this__u8e3s4, other);
  };
  protoOf(BigInteger32Arithmetic).times_239av3_k$ = function (_this__u8e3s4, other) {
    return this.multiply_rpjazz_k$(_this__u8e3s4, other);
  };
  protoOf(BigInteger32Arithmetic).plus_stmrwq_k$ = function (_this__u8e3s4, other) {
    // Inline function 'kotlin.uintArrayOf' call
    var tmp$ret$0 = _UIntArray___init__impl__ghjpc6(new Int32Array([other]));
    return this.add_nlzu36_k$(_this__u8e3s4, tmp$ret$0);
  };
  protoOf(BigInteger32Arithmetic).minus_t2i93g_k$ = function (_this__u8e3s4, other) {
    // Inline function 'kotlin.uintArrayOf' call
    var tmp$ret$0 = _UIntArray___init__impl__ghjpc6(new Int32Array([other]));
    return this.subtract_n0lojl_k$(_this__u8e3s4, tmp$ret$0);
  };
  protoOf(BigInteger32Arithmetic).times_bpgx5u_k$ = function (_this__u8e3s4, other) {
    return this.multiply_7zb58u_k$(_this__u8e3s4, other);
  };
  protoOf(BigInteger32Arithmetic).div_bf2wb7_k$ = function (_this__u8e3s4, other) {
    // Inline function 'kotlin.uintArrayOf' call
    var tmp$ret$0 = _UIntArray___init__impl__ghjpc6(new Int32Array([other]));
    return this.divide_9m0nlz_k$(_this__u8e3s4, tmp$ret$0).get_first_irdx8n_k$().storage_1;
  };
  protoOf(BigInteger32Arithmetic).rem_xz7gzu_k$ = function (_this__u8e3s4, other) {
    // Inline function 'kotlin.uintArrayOf' call
    var tmp$ret$0 = _UIntArray___init__impl__ghjpc6(new Int32Array([other]));
    return this.divide_9m0nlz_k$(_this__u8e3s4, tmp$ret$0).get_second_jf7fjx_k$().storage_1;
  };
  protoOf(BigInteger32Arithmetic).div_reimqc_k$ = function (_this__u8e3s4, other) {
    return this.divide_9m0nlz_k$(_this__u8e3s4, other).get_first_irdx8n_k$().storage_1;
  };
  protoOf(BigInteger32Arithmetic).rem_lt66t_k$ = function (_this__u8e3s4, other) {
    return this.divide_9m0nlz_k$(_this__u8e3s4, other).get_second_jf7fjx_k$().storage_1;
  };
  protoOf(BigInteger32Arithmetic).divrem_uluix5_k$ = function (_this__u8e3s4, other) {
    return this.divide_9m0nlz_k$(_this__u8e3s4, other);
  };
  protoOf(BigInteger32Arithmetic).compareTo_bw0y4u_k$ = function (_this__u8e3s4, other) {
    return this.compare_nba68r_k$(_this__u8e3s4, other);
  };
  protoOf(BigInteger32Arithmetic).compareTo_95raax_k$ = function (_this__u8e3s4, other) {
    // Inline function 'kotlin.uintArrayOf' call
    var tmp$ret$0 = _UIntArray___init__impl__ghjpc6(new Int32Array([other]));
    return this.compare_nba68r_k$(_this__u8e3s4, tmp$ret$0);
  };
  protoOf(BigInteger32Arithmetic).toUnsignedIntArrayCodeFormat_5hn6im_k$ = function (array) {
    return joinToString(new UIntArray(array), ', ', 'uintArrayOf(', ')', VOID, VOID, BigInteger32Arithmetic$toUnsignedIntArrayCodeFormat$lambda);
  };
  protoOf(BigInteger32Arithmetic).fromULong_592c2d_k$ = function (uLong) {
    // Inline function 'kotlin.uintArrayOf' call
    // Inline function 'kotlin.ULong.toUInt' call
    // Inline function 'kotlin.ULong.shr' call
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(0, -1));
    var this_0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(uLong).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
    var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).ushr_z7nmq8_k$(32));
    // Inline function 'kotlin.toUInt' call
    var this_2 = _ULong___get_data__impl__fggpzb(this_1);
    var tmp = _UInt___init__impl__l7qpdl(this_2.toInt_1tsl84_k$());
    // Inline function 'kotlin.ULong.toUInt' call
    // Inline function 'kotlin.toUInt' call
    var this_3 = _ULong___get_data__impl__fggpzb(uLong);
    var tmp$ret$5 = _UInt___init__impl__l7qpdl(this_3.toInt_1tsl84_k$());
    return _UIntArray___init__impl__ghjpc6(new Int32Array([tmp, tmp$ret$5]));
  };
  protoOf(BigInteger32Arithmetic).fromUInt_sunvfy_k$ = function (uInt) {
    // Inline function 'kotlin.uintArrayOf' call
    return _UIntArray___init__impl__ghjpc6(new Int32Array([uInt]));
  };
  protoOf(BigInteger32Arithmetic).fromUShort_4cupl_k$ = function (uShort) {
    // Inline function 'kotlin.uintArrayOf' call
    // Inline function 'kotlin.UShort.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(_UShort___get_data__impl__g0245(uShort) & 65535);
    return _UIntArray___init__impl__ghjpc6(new Int32Array([tmp$ret$0]));
  };
  protoOf(BigInteger32Arithmetic).fromUByte_occpr_k$ = function (uByte) {
    // Inline function 'kotlin.uintArrayOf' call
    // Inline function 'kotlin.UByte.toUInt' call
    var tmp$ret$0 = _UInt___init__impl__l7qpdl(_UByte___get_data__impl__jof9qr(uByte) & 255);
    return _UIntArray___init__impl__ghjpc6(new Int32Array([tmp$ret$0]));
  };
  protoOf(BigInteger32Arithmetic).fromLong_u579ed_k$ = function (long) {
    // Inline function 'kotlin.uintArrayOf' call
    // Inline function 'kotlin.ULong.toUInt' call
    // Inline function 'kotlin.ULong.shr' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    var this_0 = _ULong___init__impl__c78o9k(long);
    var other = _ULong___init__impl__c78o9k(new Long(0, -1));
    var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
    var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).ushr_z7nmq8_k$(32));
    // Inline function 'kotlin.toUInt' call
    var this_3 = _ULong___get_data__impl__fggpzb(this_2);
    var tmp = _UInt___init__impl__l7qpdl(this_3.toInt_1tsl84_k$());
    // Inline function 'kotlin.toUInt' call
    // Inline function 'kotlin.math.absoluteValue' call
    var this_4 = abs(long);
    var tmp$ret$6 = _UInt___init__impl__l7qpdl(this_4.toInt_1tsl84_k$());
    return _UIntArray___init__impl__ghjpc6(new Int32Array([tmp, tmp$ret$6]));
  };
  protoOf(BigInteger32Arithmetic).fromInt_soq880_k$ = function (int) {
    // Inline function 'kotlin.uintArrayOf' call
    // Inline function 'kotlin.toUInt' call
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = abs_0(int);
    var tmp$ret$1 = _UInt___init__impl__l7qpdl(this_0);
    return _UIntArray___init__impl__ghjpc6(new Int32Array([tmp$ret$1]));
  };
  protoOf(BigInteger32Arithmetic).fromShort_9fdnxv_k$ = function (short) {
    // Inline function 'kotlin.uintArrayOf' call
    // Inline function 'kotlin.toUInt' call
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = abs_0(short);
    var tmp$ret$1 = _UInt___init__impl__l7qpdl(this_0);
    return _UIntArray___init__impl__ghjpc6(new Int32Array([tmp$ret$1]));
  };
  protoOf(BigInteger32Arithmetic).fromByte_91m8nh_k$ = function (byte) {
    // Inline function 'kotlin.uintArrayOf' call
    // Inline function 'kotlin.toUInt' call
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = abs_0(byte);
    var tmp$ret$1 = _UInt___init__impl__l7qpdl(this_0);
    return _UIntArray___init__impl__ghjpc6(new Int32Array([tmp$ret$1]));
  };
  protoOf(BigInteger32Arithmetic).toULongExact_jvytdw_k$ = function (operand) {
    if (_UIntArray___get_size__impl__r6l8ci(operand) > 2) {
      throw ArithmeticException_init_$Create$('Exact conversion not possible, operand size ' + _UIntArray___get_size__impl__r6l8ci(operand));
    }
    var result = _ULong___init__impl__c78o9k(new Long(0, 0));
    var inductionVariable = _UIntArray___get_size__impl__r6l8ci(operand) - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        // Inline function 'kotlin.ULong.plus' call
        var this_0 = result;
        // Inline function 'kotlin.ULong.shl' call
        // Inline function 'kotlin.UInt.toULong' call
        var this_1 = UIntArray__get_impl_gp5kza(operand, i);
        var this_2 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_1)).and_4spn93_k$(new Long(-1, 0)));
        var bitCount = imul(i, this.wordSizeInBits_1);
        var other = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).shl_bg8if3_k$(bitCount));
        result = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other)));
      }
       while (0 <= inductionVariable);
    return result;
  };
  protoOf(BigInteger32Arithmetic).toUIntArrayRepresentedAsTypedUByteArray_2d6ofv_k$ = function (operand, endianness) {
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp;
    switch (endianness.get_ordinal_ip24qg_k$()) {
      case 0:
        var index = 0;
        // Inline function 'kotlin.collections.flatMap' call

        // Inline function 'kotlin.collections.flatMapTo' call

        var this_0 = reversed_1(operand);
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$().data_1;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.toUIntArrayRepresentedAsTypedUByteArray.<anonymous>' call
          var tmp_0;
          if (index === (_UIntArray___get_size__impl__r6l8ci(operand) - 1 | 0)) {
            tmp_0 = BigInteger32Arithmetic_getInstance().numberOfLeadingZerosInAWord_mozva4_k$(element) / 8 | 0;
          } else {
            tmp_0 = 0;
          }
          var leadingZeroBytes = tmp_0;
          // Inline function 'kotlin.UInt.toUByte' call
          // Inline function 'kotlin.UInt.and' call
          // Inline function 'kotlin.UInt.shr' call
          var this_1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) >>> 24 | 0);
          var other = _UInt___init__impl__l7qpdl(255);
          var this_2 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_1) & _UInt___get_data__impl__f0vqqw(other));
          // Inline function 'kotlin.toUByte' call
          var this_3 = _UInt___get_data__impl__f0vqqw(this_2);
          var tmp_1 = _UByte___init__impl__g9hnc4(toByte(this_3));
          // Inline function 'kotlin.UInt.toUByte' call
          // Inline function 'kotlin.UInt.and' call
          // Inline function 'kotlin.UInt.shr' call
          var this_4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) >>> 16 | 0);
          var other_0 = _UInt___init__impl__l7qpdl(255);
          var this_5 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_4) & _UInt___get_data__impl__f0vqqw(other_0));
          // Inline function 'kotlin.toUByte' call
          var this_6 = _UInt___get_data__impl__f0vqqw(this_5);
          var tmp_2 = _UByte___init__impl__g9hnc4(toByte(this_6));
          // Inline function 'kotlin.UInt.toUByte' call
          // Inline function 'kotlin.UInt.and' call
          // Inline function 'kotlin.UInt.shr' call
          var this_7 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) >>> 8 | 0);
          var other_1 = _UInt___init__impl__l7qpdl(255);
          var this_8 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_7) & _UInt___get_data__impl__f0vqqw(other_1));
          // Inline function 'kotlin.toUByte' call
          var this_9 = _UInt___get_data__impl__f0vqqw(this_8);
          var tmp_3 = _UByte___init__impl__g9hnc4(toByte(this_9));
          // Inline function 'kotlin.UInt.toUByte' call
          // Inline function 'kotlin.UInt.and' call
          var other_2 = _UInt___init__impl__l7qpdl(255);
          var this_10 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) & _UInt___get_data__impl__f0vqqw(other_2));
          // Inline function 'kotlin.toUByte' call
          var this_11 = _UInt___get_data__impl__f0vqqw(this_10);
          var tmp$ret$14 = _UByte___init__impl__g9hnc4(toByte(this_11));
          var converted = listOf([new UByte(tmp_1), new UByte(tmp_2), new UByte(tmp_3), new UByte(tmp$ret$14)]);
          index = index + 1 | 0;
          var list = drop(converted, leadingZeroBytes);
          addAll(destination, list);
        }

        var collected = destination;
        tmp = collected;
        break;
      case 1:
        var index_0 = 0;
        // Inline function 'kotlin.collections.flatMap' call

        // Inline function 'kotlin.collections.flatMapTo' call

        var this_12 = reversed_1(operand);
        var destination_0 = ArrayList_init_$Create$();
        var tmp0_iterator_0 = this_12.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$().data_1;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.toUIntArrayRepresentedAsTypedUByteArray.<anonymous>' call
          var tmp_4;
          if (index_0 === (_UIntArray___get_size__impl__r6l8ci(operand) - 1 | 0)) {
            tmp_4 = BigInteger32Arithmetic_getInstance().numberOfLeadingZerosInAWord_mozva4_k$(element_0) / 8 | 0;
          } else {
            tmp_4 = 0;
          }
          var leadingZeroBytes_0 = tmp_4;
          // Inline function 'kotlin.UInt.toUByte' call
          // Inline function 'kotlin.UInt.and' call
          var other_3 = _UInt___init__impl__l7qpdl(255);
          var this_13 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_0) & _UInt___get_data__impl__f0vqqw(other_3));
          // Inline function 'kotlin.toUByte' call
          var this_14 = _UInt___get_data__impl__f0vqqw(this_13);
          var tmp_5 = _UByte___init__impl__g9hnc4(toByte(this_14));
          // Inline function 'kotlin.UInt.toUByte' call
          // Inline function 'kotlin.UInt.and' call
          // Inline function 'kotlin.UInt.shr' call
          var this_15 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_0) >>> 8 | 0);
          var other_4 = _UInt___init__impl__l7qpdl(255);
          var this_16 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_15) & _UInt___get_data__impl__f0vqqw(other_4));
          // Inline function 'kotlin.toUByte' call
          var this_17 = _UInt___get_data__impl__f0vqqw(this_16);
          var tmp_6 = _UByte___init__impl__g9hnc4(toByte(this_17));
          // Inline function 'kotlin.UInt.toUByte' call
          // Inline function 'kotlin.UInt.and' call
          // Inline function 'kotlin.UInt.shr' call
          var this_18 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_0) >>> 16 | 0);
          var other_5 = _UInt___init__impl__l7qpdl(255);
          var this_19 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_18) & _UInt___get_data__impl__f0vqqw(other_5));
          // Inline function 'kotlin.toUByte' call
          var this_20 = _UInt___get_data__impl__f0vqqw(this_19);
          var tmp_7 = _UByte___init__impl__g9hnc4(toByte(this_20));
          // Inline function 'kotlin.UInt.toUByte' call
          // Inline function 'kotlin.UInt.and' call
          // Inline function 'kotlin.UInt.shr' call
          var this_21 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_0) >>> 24 | 0);
          var other_6 = _UInt___init__impl__l7qpdl(255);
          var this_22 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_21) & _UInt___get_data__impl__f0vqqw(other_6));
          // Inline function 'kotlin.toUByte' call
          var this_23 = _UInt___get_data__impl__f0vqqw(this_22);
          var tmp$ret$32 = _UByte___init__impl__g9hnc4(toByte(this_23));
          var converted_0 = listOf([new UByte(tmp_5), new UByte(tmp_6), new UByte(tmp_7), new UByte(tmp$ret$32)]);
          index_0 = index_0 + 1 | 0;
          var list_0 = dropLast(converted_0, leadingZeroBytes_0);
          addAll(destination_0, list_0);
        }

        var collected_0 = destination_0;
        tmp = collected_0;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var this_24 = tmp;
    var corrected = copyToArray(this_24);
    return dropLeadingZeros_1(corrected, this);
  };
  protoOf(BigInteger32Arithmetic).toUIntArrayRepresentedAsUByteArray_rm9yxp_k$ = function (operand, endianness) {
    var tmp;
    switch (endianness.get_ordinal_ip24qg_k$()) {
      case 0:
        var index = 0;
        // Inline function 'kotlin.collections.flatMap' call

        // Inline function 'kotlin.collections.flatMapTo' call

        var this_0 = reversed_1(operand);
        var destination = ArrayList_init_$Create$();
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$().data_1;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.toUIntArrayRepresentedAsUByteArray.<anonymous>' call
          var tmp_0;
          if (index === (_UIntArray___get_size__impl__r6l8ci(operand) - 1 | 0)) {
            tmp_0 = BigInteger32Arithmetic_getInstance().numberOfLeadingZerosInAWord_mozva4_k$(element) / 8 | 0;
          } else {
            tmp_0 = 0;
          }
          var leadingZeroBytes = tmp_0;
          // Inline function 'kotlin.UInt.toUByte' call
          // Inline function 'kotlin.UInt.and' call
          // Inline function 'kotlin.UInt.shr' call
          var this_1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) >>> 24 | 0);
          var other = _UInt___init__impl__l7qpdl(255);
          var this_2 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_1) & _UInt___get_data__impl__f0vqqw(other));
          // Inline function 'kotlin.toUByte' call
          var this_3 = _UInt___get_data__impl__f0vqqw(this_2);
          var tmp_1 = _UByte___init__impl__g9hnc4(toByte(this_3));
          // Inline function 'kotlin.UInt.toUByte' call
          // Inline function 'kotlin.UInt.and' call
          // Inline function 'kotlin.UInt.shr' call
          var this_4 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) >>> 16 | 0);
          var other_0 = _UInt___init__impl__l7qpdl(255);
          var this_5 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_4) & _UInt___get_data__impl__f0vqqw(other_0));
          // Inline function 'kotlin.toUByte' call
          var this_6 = _UInt___get_data__impl__f0vqqw(this_5);
          var tmp_2 = _UByte___init__impl__g9hnc4(toByte(this_6));
          // Inline function 'kotlin.UInt.toUByte' call
          // Inline function 'kotlin.UInt.and' call
          // Inline function 'kotlin.UInt.shr' call
          var this_7 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) >>> 8 | 0);
          var other_1 = _UInt___init__impl__l7qpdl(255);
          var this_8 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_7) & _UInt___get_data__impl__f0vqqw(other_1));
          // Inline function 'kotlin.toUByte' call
          var this_9 = _UInt___get_data__impl__f0vqqw(this_8);
          var tmp_3 = _UByte___init__impl__g9hnc4(toByte(this_9));
          // Inline function 'kotlin.UInt.toUByte' call
          // Inline function 'kotlin.UInt.and' call
          var other_2 = _UInt___init__impl__l7qpdl(255);
          var this_10 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element) & _UInt___get_data__impl__f0vqqw(other_2));
          // Inline function 'kotlin.toUByte' call
          var this_11 = _UInt___get_data__impl__f0vqqw(this_10);
          var tmp$ret$14 = _UByte___init__impl__g9hnc4(toByte(this_11));
          var converted = listOf([new UByte(tmp_1), new UByte(tmp_2), new UByte(tmp_3), new UByte(tmp$ret$14)]);
          index = index + 1 | 0;
          var list = drop(converted, leadingZeroBytes);
          addAll(destination, list);
        }

        var collected = destination;
        tmp = collected;
        break;
      case 1:
        // Inline function 'kotlin.collections.flatMap' call

        // Inline function 'kotlin.collections.flatMapTo' call

        var destination_0 = ArrayList_init_$Create$();
        var tmp0_iterator_0 = UIntArray__iterator_impl_tkdv7k(operand);
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$().data_1;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.toUIntArrayRepresentedAsUByteArray.<anonymous>' call
          var index_0 = 0;
          // Inline function 'kotlin.collections.flatMap' call
          // Inline function 'kotlin.collections.flatMapTo' call
          var this_12 = reversed_1(operand);
          var destination_1 = ArrayList_init_$Create$();
          var tmp0_iterator_1 = this_12.iterator_jk1svi_k$();
          while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
            var element_1 = tmp0_iterator_1.next_20eer_k$().data_1;
            // Inline function 'com.ionspin.kotlin.bignum.integer.base32.BigInteger32Arithmetic.toUIntArrayRepresentedAsUByteArray.<anonymous>.<anonymous>' call
            var tmp_4;
            if (index_0 === (_UIntArray___get_size__impl__r6l8ci(operand) - 1 | 0)) {
              tmp_4 = BigInteger32Arithmetic_getInstance().numberOfLeadingZerosInAWord_mozva4_k$(element_1) / 8 | 0;
            } else {
              tmp_4 = 0;
            }
            var leadingZeroBytes_0 = tmp_4;
            // Inline function 'kotlin.UInt.toUByte' call
            // Inline function 'kotlin.UInt.and' call
            var other_3 = _UInt___init__impl__l7qpdl(255);
            var this_13 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_1) & _UInt___get_data__impl__f0vqqw(other_3));
            // Inline function 'kotlin.toUByte' call
            var this_14 = _UInt___get_data__impl__f0vqqw(this_13);
            var tmp_5 = _UByte___init__impl__g9hnc4(toByte(this_14));
            // Inline function 'kotlin.UInt.toUByte' call
            // Inline function 'kotlin.UInt.and' call
            // Inline function 'kotlin.UInt.shr' call
            var this_15 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_1) >>> 8 | 0);
            var other_4 = _UInt___init__impl__l7qpdl(255);
            var this_16 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_15) & _UInt___get_data__impl__f0vqqw(other_4));
            // Inline function 'kotlin.toUByte' call
            var this_17 = _UInt___get_data__impl__f0vqqw(this_16);
            var tmp_6 = _UByte___init__impl__g9hnc4(toByte(this_17));
            // Inline function 'kotlin.UInt.toUByte' call
            // Inline function 'kotlin.UInt.and' call
            // Inline function 'kotlin.UInt.shr' call
            var this_18 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_1) >>> 16 | 0);
            var other_5 = _UInt___init__impl__l7qpdl(255);
            var this_19 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_18) & _UInt___get_data__impl__f0vqqw(other_5));
            // Inline function 'kotlin.toUByte' call
            var this_20 = _UInt___get_data__impl__f0vqqw(this_19);
            var tmp_7 = _UByte___init__impl__g9hnc4(toByte(this_20));
            // Inline function 'kotlin.UInt.toUByte' call
            // Inline function 'kotlin.UInt.and' call
            // Inline function 'kotlin.UInt.shr' call
            var this_21 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(element_1) >>> 24 | 0);
            var other_6 = _UInt___init__impl__l7qpdl(255);
            var this_22 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_21) & _UInt___get_data__impl__f0vqqw(other_6));
            // Inline function 'kotlin.toUByte' call
            var this_23 = _UInt___get_data__impl__f0vqqw(this_22);
            var tmp$ret$32 = _UByte___init__impl__g9hnc4(toByte(this_23));
            var converted_0 = listOf([new UByte(tmp_5), new UByte(tmp_6), new UByte(tmp_7), new UByte(tmp$ret$32)]);
            index_0 = index_0 + 1 | 0;
            var list_0 = dropLast(converted_0, leadingZeroBytes_0);
            addAll(destination_1, list_0);
          }
          var collected_0 = destination_1;
          var list_1 = collected_0;
          addAll(destination_0, list_1);
        }

        var collected_1 = destination_0;
        tmp = new UByteArray(toUByteArray(collected_1));
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var corrected = tmp;
    return toUByteArray(corrected);
  };
  protoOf(BigInteger32Arithmetic).fromUByteArray_xokeva_k$ = function (source) {
    // Inline function 'kotlin.TODO' call
    var reason = 'not implemented yet';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(BigInteger32Arithmetic).fromByteArray_d3r0u1_k$ = function (source) {
    // Inline function 'kotlin.TODO' call
    var reason = 'not implemented yet';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(BigInteger32Arithmetic).toUByteArray_my31rz_k$ = function (operand) {
    // Inline function 'kotlin.TODO' call
    var reason = 'not implemented yet';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  protoOf(BigInteger32Arithmetic).toByteArray_r95112_k$ = function (operand) {
    // Inline function 'kotlin.TODO' call
    var reason = 'not implemented yet';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  var BigInteger32Arithmetic_instance;
  function BigInteger32Arithmetic_getInstance() {
    if (BigInteger32Arithmetic_instance == null)
      new BigInteger32Arithmetic();
    return BigInteger32Arithmetic_instance;
  }
  function possibleAdditionOverflow($this, largerLength, smallerLength, largerData, smallerData, largerStart, smallerStart) {
    var firstMostSignificant = ULongArray__get_impl_pr71q9(largerData, largerStart - 1 | 0);
    var secondMostSignificant = ULongArray__get_impl_pr71q9(smallerData, smallerStart - 1 | 0);
    var tmp;
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(0, 1610612736));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(firstMostSignificant).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
    if (!equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      tmp = true;
    } else {
      // Inline function 'kotlin.ULong.and' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(0, 1610612736));
      var tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(secondMostSignificant).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = !equals(tmp$ret$1, _ULong___init__impl__c78o9k(new Long(0, 0)));
    }
    var possibleOverflow = tmp;
    return possibleOverflow;
  }
  function multiplyWithCorrectedSize($this, first, second, firstCorrectedSize, secondCorrectedSize) {
    if (isZero(first, $this) ? true : isZero(second, $this)) {
      return $this.ZERO_1;
    }
    if ((firstCorrectedSize >= 120 ? true : secondCorrectedSize >= 120) ? firstCorrectedSize <= 15000 ? true : secondCorrectedSize < 15000 : false) {
      return karatsubaMultiplyWithCorrectedSizes($this, first, second, firstCorrectedSize, secondCorrectedSize);
    }
    if (firstCorrectedSize >= 15000 ? secondCorrectedSize >= 15000 : false) {
      return $this.toomCook3Multiply_6f7jui_k$(first, second);
    }
    return basecaseMultiplyWithCorrectedSize($this, first, second, firstCorrectedSize, secondCorrectedSize);
  }
  function basecaseMultiplyWithCorrectedSize($this, first, second, firstCorrectedSizeStart, secondCorrectedSizeStart) {
    var resultArray = $this.ZERO_1;
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = ULongArray__iterator_impl_cq4d2h(second);
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$().data_1;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.basecaseMultiplyWithCorrectedSize.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      if (tmp1 <= secondCorrectedSizeStart) {
        resultArray = BigInteger63Arithmetic_getInstance().plus_g611sc_k$(resultArray, BigInteger63Arithmetic_getInstance().shl_bajctt_k$(BigInteger63Arithmetic_getInstance().baseMultiply_97jr64_k$(first, item), imul(tmp1, BigInteger63Arithmetic_getInstance().basePowerOfTwo_1)));
      }
    }
    return resultArray;
  }
  function karatsubaMultiplyWithCorrectedSizes($this, firstUnsigned, secondUnsigned, firstCorrectedSize, secondCorrectedSize) {
    var first = new SignedULongArray(firstUnsigned, true);
    var second = new SignedULongArray(secondUnsigned, true);
    // Inline function 'kotlin.math.max' call
    var halfLength = (Math.max(firstCorrectedSize, secondCorrectedSize) + 1 | 0) / 2 | 0;
    var mask = $this.minus_ofsygz_k$($this.shl_bajctt_k$($this.ONE_1, imul(halfLength, $this.wordSizeInBits_1)), _ULong___init__impl__c78o9k(new Long(1, 0)));
    var firstLower = $this.and_4aohjo_k$(first, mask);
    var firstHigher = $this.shr_1ylobi_k$(first, imul(halfLength, $this.wordSizeInBits_1));
    var secondLower = $this.and_4aohjo_k$(second, mask);
    var secondHigher = $this.shr_1ylobi_k$(second, imul(halfLength, $this.wordSizeInBits_1));
    var higherProduct = $this.times_tdl5se_k$(firstHigher, secondHigher);
    var lowerProduct = $this.times_tdl5se_k$(firstLower, secondLower);
    var middleProduct = $this.times_tdl5se_k$($this.plus_jxwqbe_k$(firstHigher, firstLower), $this.plus_jxwqbe_k$(secondHigher, secondLower));
    var result = $this.plus_jxwqbe_k$($this.plus_jxwqbe_k$($this.shl_oblxk4_k$(higherProduct, imul(imul(2, $this.wordSizeInBits_1), halfLength)), $this.shl_oblxk4_k$($this.minus_emc2xw_k$($this.minus_emc2xw_k$(middleProduct, higherProduct), lowerProduct), imul($this.wordSizeInBits_1, halfLength))), lowerProduct);
    return result.unsignedValue_1;
  }
  function unbalancedReciprocal($this, a, diff) {
    var n = (_ULongArray___get_size__impl__ju6dtr(a) - 1 | 0) - diff | 0;
    // Inline function 'kotlin.collections.copyOfRange' call
    var fromIndex = n + 1 | 0;
    var toIndex = _ULongArray___get_size__impl__ju6dtr(a);
    var a0 = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(a), fromIndex, toIndex));
    // Inline function 'kotlin.collections.copyOfRange' call
    var a1 = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(a), 0, n));
    var tmp0_container = $this.d1ReciprocalRecursiveWordVersion_87t7vp_k$(a0);
    var x = tmp0_container.component1_7eebsc_k$().storage_1;
    var r = tmp0_container.component2_7eebsb_k$().storage_1;
    if (equals(x, $this.shl_bajctt_k$($this.ONE_1, imul(n, 63)))) {
      if ($this.compareTo_rqoxvi_k$(a1, $this.ZERO_1) === 0) {
        r = $this.ZERO_1;
      } else {
        x = $this.minus_dhhhr6_k$(x, $this.ONE_1);
        r = $this.minus_dhhhr6_k$(a, $this.shl_bajctt_k$(a1, imul(n, 63)));
      }
    } else {
      var rRhoD = $this.shl_bajctt_k$(r, diff);
      var a1x = $this.times_spd79k_k$(a1, x);
      if ($this.compareTo_rqoxvi_k$(rRhoD, a1x) > 0) {
        r = $this.minus_dhhhr6_k$(rRhoD, a1x);
      } else {
        x = $this.minus_dhhhr6_k$(x, $this.ONE_1);
        r = $this.minus_dhhhr6_k$(rRhoD, $this.times_spd79k_k$(a1, x));
      }
    }
    return new Pair(new ULongArray(x), new ULongArray(r));
  }
  function reqursiveSqrt_0($this, operand) {
    var n = _ULongArray___get_size__impl__ju6dtr(operand);
    // Inline function 'kotlin.math.floor' call
    var x = (n - 1 | 0) / 4;
    var tmp$ret$0 = Math.floor(x);
    var l = numberToInt(tmp$ret$0);
    if (l === 0) {
      return $this.basecaseSqrt_3qz8rr_k$(operand);
    }
    var step = n / 4 | 0;
    var stepRemainder = n % 4 | 0;
    var baseLPowerShift = imul(63, l);
    // Inline function 'kotlin.collections.copyOfRange' call
    var fromIndex = n - (imul(3, step) + stepRemainder | 0) | 0;
    var toIndex = n - (imul(2, step) + stepRemainder | 0) | 0;
    var a1 = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(operand), fromIndex, toIndex));
    // Inline function 'kotlin.collections.copyOfRange' call
    var toIndex_0 = n - (imul(3, step) + stepRemainder | 0) | 0;
    var a0 = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(operand), 0, toIndex_0));
    // Inline function 'kotlin.collections.copyOfRange' call
    var fromIndex_0 = n - (imul(2, step) + stepRemainder | 0) | 0;
    var a3a2 = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(operand), fromIndex_0, n));
    var tmp0_container = reqursiveSqrt_0($this, a3a2);
    var sPrim = tmp0_container.component1_7eebsc_k$().storage_1;
    var rPrim = tmp0_container.component2_7eebsb_k$().storage_1;
    var tmp1_container = $this.divrem_xaac4n_k$($this.plus_g611sc_k$($this.shl_bajctt_k$(rPrim, baseLPowerShift), a1), $this.shl_bajctt_k$(sPrim, 1));
    var q = tmp1_container.component1_7eebsc_k$().storage_1;
    var u = tmp1_container.component2_7eebsb_k$().storage_1;
    var s = $this.plus_g611sc_k$($this.shl_bajctt_k$(sPrim, baseLPowerShift), q);
    var r = $this.minus_dhhhr6_k$($this.plus_g611sc_k$($this.shl_bajctt_k$(u, baseLPowerShift), a0), $this.times_spd79k_k$(q, q));
    return new Pair(new ULongArray(s), new ULongArray(r));
  }
  function isZero(_this__u8e3s4, $this) {
    if (equals(_this__u8e3s4, $this.ZERO_1))
      return true;
    if (_ULongArray___get_size__impl__ju6dtr(_this__u8e3s4) === 1 ? equals(ULongArray__get_impl_pr71q9(_this__u8e3s4, 0), _ULong___init__impl__c78o9k(new Long(0, 0))) : false)
      return true;
    if ((_ULongArray___get_size__impl__ju6dtr(_this__u8e3s4) - $this.countLeadingZeroWords_blnloi_k$(_this__u8e3s4) | 0) === 0)
      return true;
    return false;
  }
  function euclideanGcd_0($this, first, second) {
    var u = first;
    var v = second;
    while (!isZero(v, $this)) {
      var tmpU = u;
      u = v;
      v = $this.rem_ss0xg_k$(tmpU, v);
    }
    return u;
  }
  function binaryGcd_0($this, first, second) {
    var $this_0 = $this;
    var first_0 = first;
    var second_0 = second;
    $l$1: do {
      $l$0: do {
        if (contentEquals_0(first_0, second_0)) {
          return first_0;
        }
        if (isZero(first_0, $this_0)) {
          return second_0;
        }
        if (isZero(second_0, $this_0)) {
          return first_0;
        }
        if (isZero($this_0.and_6i7kg5_k$(first_0, $this_0.ONE_1), $this_0)) {
          if (isZero($this_0.and_6i7kg5_k$(second_0, $this_0.ONE_1), $this_0)) {
            return $this_0.shl_bajctt_k$(binaryGcd_0($this_0, $this_0.shr_wxaux5_k$(first_0, 1), $this_0.shr_wxaux5_k$(second_0, 1)), 1);
          } else {
            var tmp0 = $this_0;
            var tmp1 = $this_0.shr_wxaux5_k$(first_0, 1);
            $this_0 = tmp0;
            first_0 = tmp1;
            second_0 = second_0;
            continue $l$0;
          }
        }
        if (isZero($this_0.and_6i7kg5_k$(second_0, $this_0.ONE_1), $this_0)) {
          var tmp3 = $this_0;
          var tmp5 = $this_0.shr_wxaux5_k$(second_0, 1);
          $this_0 = tmp3;
          first_0 = first_0;
          second_0 = tmp5;
          continue $l$0;
        }
        var tmp;
        if ($this_0.compare_23l5gr_k$(first_0, second_0) === 1) {
          var tmp6 = $this_0;
          var tmp7 = $this_0.shr_wxaux5_k$($this_0.subtract_tkmoqg_k$(first_0, second_0), 1);
          $this_0 = tmp6;
          first_0 = tmp7;
          second_0 = second_0;
          continue $l$0;
        } else {
          var tmp9 = $this_0;
          var tmp10 = $this_0.shr_wxaux5_k$($this_0.subtract_tkmoqg_k$(second_0, first_0), 1);
          var tmp11 = first_0;
          $this_0 = tmp9;
          first_0 = tmp10;
          second_0 = tmp11;
          continue $l$0;
        }
      }
       while (false);
    }
     while (true);
  }
  function SignedULongArray(unsignedValue, sign) {
    this.unsignedValue_1 = unsignedValue;
    this.sign_1 = sign;
  }
  protoOf(SignedULongArray).get_unsignedValue_vgx9tl_k$ = function () {
    return this.unsignedValue_1;
  };
  protoOf(SignedULongArray).get_sign_woubd2_k$ = function () {
    return this.sign_1;
  };
  protoOf(SignedULongArray).component1_sr9yh4_k$ = function () {
    return this.unsignedValue_1;
  };
  protoOf(SignedULongArray).component2_7eebsb_k$ = function () {
    return this.sign_1;
  };
  protoOf(SignedULongArray).copy_w53t1k_k$ = function (unsignedValue, sign) {
    return new SignedULongArray(unsignedValue, sign);
  };
  protoOf(SignedULongArray).copy$default_vcmbgp_k$ = function (unsignedValue, sign, $super) {
    unsignedValue = unsignedValue === VOID ? this.unsignedValue_1 : unsignedValue;
    sign = sign === VOID ? this.sign_1 : sign;
    return $super === VOID ? this.copy_w53t1k_k$(unsignedValue, sign) : $super.copy_w53t1k_k$.call(this, new ULongArray(unsignedValue), sign);
  };
  protoOf(SignedULongArray).toString = function () {
    return 'SignedULongArray(unsignedValue=' + new ULongArray(this.unsignedValue_1) + ', sign=' + this.sign_1 + ')';
  };
  protoOf(SignedULongArray).hashCode = function () {
    var result = ULongArray__hashCode_impl_aze4wa(this.unsignedValue_1);
    result = imul(result, 31) + getBooleanHashCode(this.sign_1) | 0;
    return result;
  };
  protoOf(SignedULongArray).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SignedULongArray))
      return false;
    var tmp0_other_with_cast = other instanceof SignedULongArray ? other : THROW_CCE();
    if (!equals(this.unsignedValue_1, tmp0_other_with_cast.unsignedValue_1))
      return false;
    if (!(this.sign_1 === tmp0_other_with_cast.sign_1))
      return false;
    return true;
  };
  function signedAdd_0($this, first, second) {
    var tmp;
    if (!!(first.sign_1 ^ second.sign_1)) {
      var tmp_0;
      if ($this.compareTo_rqoxvi_k$(first.unsignedValue_1, second.unsignedValue_1) > 0) {
        tmp_0 = new SignedULongArray($this.minus_dhhhr6_k$(first.unsignedValue_1, second.unsignedValue_1), first.sign_1);
      } else {
        tmp_0 = new SignedULongArray($this.minus_dhhhr6_k$(second.unsignedValue_1, first.unsignedValue_1), second.sign_1);
      }
      tmp = tmp_0;
    } else {
      tmp = new SignedULongArray($this.plus_g611sc_k$(first.unsignedValue_1, second.unsignedValue_1), first.sign_1);
    }
    return tmp;
  }
  function signedSubtract_0($this, first, second) {
    return signedAdd_0($this, first, second.copy$default_vcmbgp_k$(VOID, !second.sign_1));
  }
  function signedMultiply_0($this, first, second) {
    return new SignedULongArray($this.times_spd79k_k$(first.unsignedValue_1, second.unsignedValue_1), !!!(first.sign_1 ^ second.sign_1));
  }
  function signedDivide_0($this, first, second) {
    return new SignedULongArray($this.div_s0tcn1_k$(first.unsignedValue_1, second.unsignedValue_1), !!!(first.sign_1 ^ second.sign_1));
  }
  function signedRemainder_0($this, first, second) {
    return new SignedULongArray($this.rem_ss0xg_k$(first.unsignedValue_1, second.unsignedValue_1), !!!(first.sign_1 ^ second.sign_1));
  }
  function debugOperandsCheck($this, first, second) {
    if (false ? ULongArray__isEmpty_impl_c3yngu(first) ? true : ULongArray__isEmpty_impl_c3yngu(second) : false) {
      throw RuntimeException_init_$Create$('Empty operands');
    }
  }
  function BigInteger63Arithmetic() {
    BigInteger63Arithmetic_instance = this;
    var tmp = this;
    // Inline function 'kotlin.longArrayOf' call
    tmp._emitLongArray_1 = longArrayOf([]);
    var tmp_0 = this;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp_0.ZERO_1 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0))]));
    var tmp_1 = this;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp_1.ONE_1 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1, 0))]));
    var tmp_2 = this;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp_2.TWO_1 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(2, 0))]));
    var tmp_3 = this;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp_3.TEN_1 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(10, 0))]));
    var tmp_4 = this;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp_4.reciprocalOf3In2ToThePowerOf63__1 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-1431655765, 715827882))]));
    this.basePowerOfTwo_1 = 63;
    this.wordSizeInBits_1 = 63;
    this.baseMask_1 = _ULong___init__impl__c78o9k(new Long(-1, 2147483647));
    var tmp_5 = this;
    // Inline function 'kotlin.ulongArrayOf' call
    tmp_5.baseMaskArray_1 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-1, 2147483647))]));
    this.lowMask_1 = _ULong___init__impl__c78o9k(new Long(-1, 0));
    this.highMask_1 = _ULong___init__impl__c78o9k(new Long(0, 2147483647));
    this.overflowMask_1 = _ULong___init__impl__c78o9k(new Long(0, -2147483648));
    this.karatsubaThreshold_1 = 120;
    this.toomCookThreshold_1 = 15000;
    this.debugEnabled_1 = false;
    this.SIGNED_POSITIVE_TWO_1 = new SignedULongArray(BigInteger63Arithmetic_getInstance().TWO_1, true);
    var tmp_6 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_7 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_8 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(10, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_9 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(100, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_10 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1000, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_11 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(10000, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_12 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(100000, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_13 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1000000, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_14 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(10000000, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_15 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(100000000, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_16 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1000000000, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_17 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1410065408, 2))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_18 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1215752192, 23))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_19 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-727379968, 232))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_20 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1316134912, 2328))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_21 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(276447232, 23283))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_22 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-1530494976, 232830))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_23 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1874919424, 2328306))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_24 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1569325056, 23283064))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_25 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-1486618624, 232830643))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_26 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-1981284352, 180822788)), _ULong___init__impl__c78o9k(new Long(1, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_27 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1661992960, 1808227885)), _ULong___init__impl__c78o9k(new Long(10, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_28 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-559939584, 902409669)), _ULong___init__impl__c78o9k(new Long(108, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_29 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-1304428544, 434162106)), _ULong___init__impl__c78o9k(new Long(1084, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_30 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-159383552, 46653770)), _ULong___init__impl__c78o9k(new Long(10842, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_31 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-1593835520, 466537709)), _ULong___init__impl__c78o9k(new Long(108420, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_32 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1241513984, 370409800)), _ULong___init__impl__c78o9k(new Long(1084202, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_33 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-469762048, 1556614354)), _ULong___init__impl__c78o9k(new Long(10842021, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_34 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-402653184, 533758012)), _ULong___init__impl__c78o9k(new Long(108420217, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_35 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(268435456, 1042612833)), _ULong___init__impl__c78o9k(new Long(1084202172, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_36 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-1610612736, 1836193738)), _ULong___init__impl__c78o9k(new Long(-2042880164, 2))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_37 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(1073741824, 1182068202)), _ULong___init__impl__c78o9k(new Long(1046034848, 25))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_38 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(-2147483648, 1083263782)), _ULong___init__impl__c78o9k(new Long(1870413893, 252))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_39 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 95219585)), _ULong___init__impl__c78o9k(new Long(1524269751, 2524))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_40 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 952195850)), _ULong___init__impl__c78o9k(new Long(-1937171674, 25243))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_41 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 932023908)), _ULong___init__impl__c78o9k(new Long(2103119744, 252435))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_42 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 730304488)), _ULong___init__impl__c78o9k(new Long(-443639036, 2524354))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_43 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 860593936)), _ULong___init__impl__c78o9k(new Long(-141423061, 25243548))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_44 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 16004768)), _ULong___init__impl__c78o9k(new Long(-1414230606, 252435489))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_45 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 160047680)), _ULong___init__impl__c78o9k(new Long(-1257404172, 376871248)), _ULong___init__impl__c78o9k(new Long(1, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_46 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 1600476800)), _ULong___init__impl__c78o9k(new Long(310860168, 1621228839)), _ULong___init__impl__c78o9k(new Long(11, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_47 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 972382464)), _ULong___init__impl__c78o9k(new Long(-1186365609, 1179902854)), _ULong___init__impl__c78o9k(new Long(117, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_48 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 1133890048)), _ULong___init__impl__c78o9k(new Long(1021245802, 1061610307)), _ULong___init__impl__c78o9k(new Long(1175, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_49 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 601482240)), _ULong___init__impl__c78o9k(new Long(1622523433, 2026168480)), _ULong___init__impl__c78o9k(new Long(11754, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_50 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 1719855104)), _ULong___init__impl__c78o9k(new Long(-954634852, 934331971)), _ULong___init__impl__c78o9k(new Long(117549, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_51 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 18681856)), _ULong___init__impl__c78o9k(new Long(-956413920, 753385125)), _ULong___init__impl__c78o9k(new Long(1175494, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_52 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 186818560)), _ULong___init__impl__c78o9k(new Long(-974204608, 1091400313)), _ULong___init__impl__c78o9k(new Long(11754943, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_53 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 1868185600)), _ULong___init__impl__c78o9k(new Long(-1152111488, 176584897)), _ULong___init__impl__c78o9k(new Long(117549435, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_54 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 1501986816)), _ULong___init__impl__c78o9k(new Long(1363787016, 1765848977)), _ULong___init__impl__c78o9k(new Long(1175494350, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_55 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 2134966272)), _ULong___init__impl__c78o9k(new Long(752968278, 478620589)), _ULong___init__impl__c78o9k(new Long(-1129958380, 2))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_56 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 2022309888)), _ULong___init__impl__c78o9k(new Long(-1060251803, 491238595)), _ULong___init__impl__c78o9k(new Long(1585318090, 27))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_57 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 895746048)), _ULong___init__impl__c78o9k(new Long(-2012583429, 617418661)), _ULong___init__impl__c78o9k(new Long(-1326688282, 273))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_58 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 367525888)), _ULong___init__impl__c78o9k(new Long(1349002194, 1879219319)), _ULong___init__impl__c78o9k(new Long(-381980930, 2736))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_59 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 1527775232)), _ULong___init__impl__c78o9k(new Long(605120053, 1612324009)), _ULong___init__impl__c78o9k(new Long(475158004, 27369))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_60 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 245366784)), _ULong___init__impl__c78o9k(new Long(1756233241, 1090854555)), _ULong___init__impl__c78o9k(new Long(456612751, 273691))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_61 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 306184192)), _ULong___init__impl__c78o9k(new Long(382463227, 171127314)), _ULong___init__impl__c78o9k(new Long(271160219, 2736911))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_62 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 914358272)), _ULong___init__impl__c78o9k(new Long(-470335025, 1711273140)), _ULong___init__impl__c78o9k(new Long(-1583365106, 27369110))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_63 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 553648128)), _ULong___init__impl__c78o9k(new Long(-408382950, 2080345872)), _ULong___init__impl__c78o9k(new Long(1346218131, 273691106))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_64 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 1241513984)), _ULong___init__impl__c78o9k(new Long(211137798, 1476105897)), _ULong___init__impl__c78o9k(new Long(577279431, 589427415)), _ULong___init__impl__c78o9k(new Long(1, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_65 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 1677721600)), _ULong___init__impl__c78o9k(new Long(2111377985, 1876157082)), _ULong___init__impl__c78o9k(new Long(1477827020, 1599306855)), _ULong___init__impl__c78o9k(new Long(12, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_66 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 1744830464)), _ULong___init__impl__c78o9k(new Long(-361056623, 1581701640)), _ULong___init__impl__c78o9k(new Long(1893368320, 960683017)), _ULong___init__impl__c78o9k(new Long(127, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_67 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 268435456)), _ULong___init__impl__c78o9k(new Long(684401074, 784630873)), _ULong___init__impl__c78o9k(new Long(1753814023, 1016895582)), _ULong___init__impl__c78o9k(new Long(1274, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_68 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 536870912)), _ULong___init__impl__c78o9k(new Long(-1745923851, 1403857787)), _ULong___init__impl__c78o9k(new Long(358271049, 1579021232)), _ULong___init__impl__c78o9k(new Long(12744, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_69 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 1073741824)), _ULong___init__impl__c78o9k(new Long(-279369324, 1153675987)), _ULong___init__impl__c78o9k(new Long(-712256800, 757826784)), _ULong___init__impl__c78o9k(new Long(127447, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_70 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(1501274061, 799341639)), _ULong___init__impl__c78o9k(new Long(1467366597, 1135816904)), _ULong___init__impl__c78o9k(new Long(1274473, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_71 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(2127838722, 1550965449)), _ULong___init__impl__c78o9k(new Long(1788764085, 620750803)), _ULong___init__impl__c78o9k(new Long(12744735, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_72 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-196449260, 477268958)), _ULong___init__impl__c78o9k(new Long(707771673, 1912540738)), _ULong___init__impl__c78o9k(new Long(127447352, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_73 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-1964492600, 477722293)), _ULong___init__impl__c78o9k(new Long(-1512217860, 1945538197)), _ULong___init__impl__c78o9k(new Long(1274473528, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_74 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(1829910480, 482255639)), _ULong___init__impl__c78o9k(new Long(2057690586, 128029144)), _ULong___init__impl__c78o9k(new Long(-140166599, 2))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_75 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(1119235616, 527589098)), _ULong___init__impl__c78o9k(new Long(-897930618, 1280291444)), _ULong___init__impl__c78o9k(new Long(-1401665990, 29))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_76 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-1692545728, 980923686)), _ULong___init__impl__c78o9k(new Long(-389371586, 2065496207)), _ULong___init__impl__c78o9k(new Long(-1131758007, 296))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_77 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(254411904, 1219302274)), _ULong___init__impl__c78o9k(new Long(401251440, 1327609247)), _ULong___init__impl__c78o9k(new Long(1567321827, 2967))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_78 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-1750848256, 1455604500)), _ULong___init__impl__c78o9k(new Long(-282452891, 391190582)), _ULong___init__impl__c78o9k(new Long(-1506650908, 29673))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_79 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-328613376, 1671143117)), _ULong___init__impl__c78o9k(new Long(1470438392, 1764422181)), _ULong___init__impl__c78o9k(new Long(2113360105, 296736))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_80 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(1008833536, 1679045643)), _ULong___init__impl__c78o9k(new Long(1819482039, 464352629)), _ULong___init__impl__c78o9k(new Long(-341235422, 2967364))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_81 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(1498400768, 1758070896)), _ULong___init__impl__c78o9k(new Long(1014951213, 348558998)), _ULong___init__impl__c78o9k(new Long(882613078, 29673649))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_82 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(2099105792, 400839779)), _ULong___init__impl__c78o9k(new Long(1559577546, 1338106334)), _ULong___init__impl__c78o9k(new Long(236196189, 296736492))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_83 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-483778560, 1860914146)), _ULong___init__impl__c78o9k(new Long(-1584093723, 496161455)), _ULong___init__impl__c78o9k(new Long(-1933005400, 819881272)), _ULong___init__impl__c78o9k(new Long(1, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_84 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-542818304, 1429272284)), _ULong___init__impl__c78o9k(new Long(1338931962, 666647260)), _ULong___init__impl__c78o9k(new Long(2144782482, 1756361781)), _ULong___init__impl__c78o9k(new Long(13, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_85 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-1133215744, 1407820960)), _ULong___init__impl__c78o9k(new Long(504417738, 224021659)), _ULong___init__impl__c78o9k(new Long(-27011657, 383748630)), _ULong___init__impl__c78o9k(new Long(138, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_86 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(1552744448, 1193307719)), _ULong___init__impl__c78o9k(new Long(749210090, 92732943)), _ULong___init__impl__c78o9k(new Long(-270116569, 1690002661)), _ULong___init__impl__c78o9k(new Long(1381, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_87 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-1652424704, 1195658953)), _ULong___init__impl__c78o9k(new Long(-1097833687, 927329431)), _ULong___init__impl__c78o9k(new Long(1593801606, 1867641083)), _ULong___init__impl__c78o9k(new Long(13817, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_88 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(655622144, 1219171296)), _ULong___init__impl__c78o9k(new Long(1906565023, 683359725)), _ULong___init__impl__c78o9k(new Long(-1241853120, 1496541649)), _ULong___init__impl__c78o9k(new Long(138178, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_89 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-2033713152, 1454294721)), _ULong___init__impl__c78o9k(new Long(1885781051, 391146310)), _ULong___init__impl__c78o9k(new Long(466370691, 2080514609)), _ULong___init__impl__c78o9k(new Long(1381786, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_90 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(1137704960, 1658045327)), _ULong___init__impl__c78o9k(new Long(1677941332, 1763979456)), _ULong___init__impl__c78o9k(new Long(368739615, 1477793259)), _ULong___init__impl__c78o9k(new Long(13817869, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_91 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-1507852288, 1548067736)), _ULong___init__impl__c78o9k(new Long(-400455857, 459925379)), _ULong___init__impl__c78o9k(new Long(-607571138, 1893030702)), _ULong___init__impl__c78o9k(new Long(138178696, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_92 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(2101346304, 448291830)), _ULong___init__impl__c78o9k(new Long(290408733, 304286503)), _ULong___init__impl__c78o9k(new Long(-1780744082, 1750437844)), _ULong___init__impl__c78o9k(new Long(1381786968, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_93 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-461373440, 187951008)), _ULong___init__impl__c78o9k(new Long(-1390879964, 895381382)), _ULong___init__impl__c78o9k(new Long(-627571635, 324509261)), _ULong___init__impl__c78o9k(new Long(932967800, 3))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_94 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-318767104, 1879510088)), _ULong___init__impl__c78o9k(new Long(-1023897752, 363879234)), _ULong___init__impl__c78o9k(new Long(-1980749050, 1097608970)), _ULong___init__impl__c78o9k(new Long(739743409, 32))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_95 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(1107296256, 1615231705)), _ULong___init__impl__c78o9k(new Long(-1649042920, 1491308699)), _ULong___init__impl__c78o9k(new Long(1667345981, 238671465)), _ULong___init__impl__c78o9k(new Long(-1192500497, 321))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_96 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-1811939328, 1119931516)), _ULong___init__impl__c78o9k(new Long(689439991, 2028185108)), _ULong___init__impl__c78o9k(new Long(-506409368, 239231005)), _ULong___init__impl__c78o9k(new Long(959896919, 3217))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_97 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-939524096, 461896925)), _ULong___init__impl__c78o9k(new Long(-1695534677, 954498249)), _ULong___init__impl__c78o9k(new Long(-769126375, 244826410)), _ULong___init__impl__c78o9k(new Long(1009034599, 32172))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_98 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-805306368, 324001961)), _ULong___init__impl__c78o9k(new Long(224522416, 955047904)), _ULong___init__impl__c78o9k(new Long(898670846, 300780460)), _ULong___init__impl__c78o9k(new Long(1500411399, 321722))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_99 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(536870912, 1092535970)), _ULong___init__impl__c78o9k(new Long(-2049743135, 960544448)), _ULong___init__impl__c78o9k(new Long(396773872, 860320954)), _ULong___init__impl__c78o9k(new Long(2119212103, 3217223))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_100 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(1073741824, 187941461)), _ULong___init__impl__c78o9k(new Long(977405135, 1015509893)), _ULong___init__impl__c78o9k(new Long(-327228572, 13274948)), _ULong___init__impl__c78o9k(new Long(-282715446, 32172234))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_101 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(-2147483648, 1879414612)), _ULong___init__impl__c78o9k(new Long(1184116758, 1565164340)), _ULong___init__impl__c78o9k(new Long(1022681580, 132749489)), _ULong___init__impl__c78o9k(new Long(1467812836, 321722349))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_102 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(0, 1614276941)), _ULong___init__impl__c78o9k(new Long(-1043734300, 619257866)), _ULong___init__impl__c78o9k(new Long(1636881215, 1327494892)), _ULong___init__impl__c78o9k(new Long(1793226472, 1069739845)), _ULong___init__impl__c78o9k(new Long(1, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_103 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(0, 1110383874)), _ULong___init__impl__c78o9k(new Long(-1847408401, 1897611371)), _ULong___init__impl__c78o9k(new Long(-811057032, 390047035)), _ULong___init__impl__c78o9k(new Long(752395542, 2107463862)), _ULong___init__impl__c78o9k(new Long(14, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_104 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(0, 366420500)), _ULong___init__impl__c78o9k(new Long(-1294214821, 1796244531)), _ULong___init__impl__c78o9k(new Long(479364280, 1752986710)), _ULong___init__impl__c78o9k(new Long(-1065979171, 1747285789)), _ULong___init__impl__c78o9k(new Long(149, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_105 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(0, 1516721352)), _ULong___init__impl__c78o9k(new Long(-57246321, 782576132)), _ULong___init__impl__c78o9k(new Long(498675512, 349997917)), _ULong___init__impl__c78o9k(new Long(-2069857110, 292988713)), _ULong___init__impl__c78o9k(new Long(1498, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp_106 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(0, 134827984)), _ULong___init__impl__c78o9k(new Long(-572463203, 1383310385)), _ULong___init__impl__c78o9k(new Long(691787827, 1352495523)), _ULong___init__impl__c78o9k(new Long(776265381, 782403487)), _ULong___init__impl__c78o9k(new Long(14981, 0))]));
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp$ret$107 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(0, 1348279840)), _ULong___init__impl__c78o9k(new Long(-1429664734, 948201970)), _ULong___init__impl__c78o9k(new Long(-1672056316, 640053343)), _ULong___init__impl__c78o9k(new Long(-827280776, 1381583927)), _ULong___init__impl__c78o9k(new Long(149813, 0))]));
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_6.powersOf10__1 = [new ULongArray(tmp_7), new ULongArray(tmp_8), new ULongArray(tmp_9), new ULongArray(tmp_10), new ULongArray(tmp_11), new ULongArray(tmp_12), new ULongArray(tmp_13), new ULongArray(tmp_14), new ULongArray(tmp_15), new ULongArray(tmp_16), new ULongArray(tmp_17), new ULongArray(tmp_18), new ULongArray(tmp_19), new ULongArray(tmp_20), new ULongArray(tmp_21), new ULongArray(tmp_22), new ULongArray(tmp_23), new ULongArray(tmp_24), new ULongArray(tmp_25), new ULongArray(tmp_26), new ULongArray(tmp_27), new ULongArray(tmp_28), new ULongArray(tmp_29), new ULongArray(tmp_30), new ULongArray(tmp_31), new ULongArray(tmp_32), new ULongArray(tmp_33), new ULongArray(tmp_34), new ULongArray(tmp_35), new ULongArray(tmp_36), new ULongArray(tmp_37), new ULongArray(tmp_38), new ULongArray(tmp_39), new ULongArray(tmp_40), new ULongArray(tmp_41), new ULongArray(tmp_42), new ULongArray(tmp_43), new ULongArray(tmp_44), new ULongArray(tmp_45), new ULongArray(tmp_46), new ULongArray(tmp_47), new ULongArray(tmp_48), new ULongArray(tmp_49), new ULongArray(tmp_50), new ULongArray(tmp_51), new ULongArray(tmp_52), new ULongArray(tmp_53), new ULongArray(tmp_54), new ULongArray(tmp_55), new ULongArray(tmp_56), new ULongArray(tmp_57), new ULongArray(tmp_58), new ULongArray(tmp_59), new ULongArray(tmp_60), new ULongArray(tmp_61), new ULongArray(tmp_62), new ULongArray(tmp_63), new ULongArray(tmp_64), new ULongArray(tmp_65), new ULongArray(tmp_66), new ULongArray(tmp_67), new ULongArray(tmp_68), new ULongArray(tmp_69), new ULongArray(tmp_70), new ULongArray(tmp_71), new ULongArray(tmp_72), new ULongArray(tmp_73), new ULongArray(tmp_74), new ULongArray(tmp_75), new ULongArray(tmp_76), new ULongArray(tmp_77), new ULongArray(tmp_78), new ULongArray(tmp_79), new ULongArray(tmp_80), new ULongArray(tmp_81), new ULongArray(tmp_82), new ULongArray(tmp_83), new ULongArray(tmp_84), new ULongArray(tmp_85), new ULongArray(tmp_86), new ULongArray(tmp_87), new ULongArray(tmp_88), new ULongArray(tmp_89), new ULongArray(tmp_90), new ULongArray(tmp_91), new ULongArray(tmp_92), new ULongArray(tmp_93), new ULongArray(tmp_94), new ULongArray(tmp_95), new ULongArray(tmp_96), new ULongArray(tmp_97), new ULongArray(tmp_98), new ULongArray(tmp_99), new ULongArray(tmp_100), new ULongArray(tmp_101), new ULongArray(tmp_102), new ULongArray(tmp_103), new ULongArray(tmp_104), new ULongArray(tmp_105), new ULongArray(tmp_106), new ULongArray(tmp$ret$107)];
  }
  protoOf(BigInteger63Arithmetic).get__emitLongArray_5zzln0_k$ = function () {
    return this._emitLongArray_1;
  };
  protoOf(BigInteger63Arithmetic).get_ZERO_e9sg11_k$ = function () {
    return this.ZERO_1;
  };
  protoOf(BigInteger63Arithmetic).get_ONE_er0101_k$ = function () {
    return this.ONE_1;
  };
  protoOf(BigInteger63Arithmetic).get_TWO_w5qidl_k$ = function () {
    return this.TWO_1;
  };
  protoOf(BigInteger63Arithmetic).get_TEN_wsqrg8_k$ = function () {
    return this.TEN_1;
  };
  protoOf(BigInteger63Arithmetic).get_reciprocalOf3In2ToThePowerOf63_92040b_k$ = function () {
    return this.reciprocalOf3In2ToThePowerOf63__1;
  };
  protoOf(BigInteger63Arithmetic).get_basePowerOfTwo_4zvm3u_k$ = function () {
    return this.basePowerOfTwo_1;
  };
  protoOf(BigInteger63Arithmetic).get_wordSizeInBits_q6hmfz_k$ = function () {
    return this.wordSizeInBits_1;
  };
  protoOf(BigInteger63Arithmetic).get_baseMask_kw7zlr_k$ = function () {
    return this.baseMask_1;
  };
  protoOf(BigInteger63Arithmetic).get_baseMaskArray_enlon_k$ = function () {
    return this.baseMaskArray_1;
  };
  protoOf(BigInteger63Arithmetic).get_lowMask_59rinm_k$ = function () {
    return this.lowMask_1;
  };
  protoOf(BigInteger63Arithmetic).get_highMask_q08rm6_k$ = function () {
    return this.highMask_1;
  };
  protoOf(BigInteger63Arithmetic).get_overflowMask_ptw9aq_k$ = function () {
    return this.overflowMask_1;
  };
  protoOf(BigInteger63Arithmetic).get_karatsubaThreshold_iz6kh0_k$ = function () {
    return this.karatsubaThreshold_1;
  };
  protoOf(BigInteger63Arithmetic).get_toomCookThreshold_rqmabj_k$ = function () {
    return this.toomCookThreshold_1;
  };
  protoOf(BigInteger63Arithmetic).get_debugEnabled_751hl5_k$ = function () {
    return this.debugEnabled_1;
  };
  protoOf(BigInteger63Arithmetic).numberOfLeadingZerosInAWord_pgcg7w_k$ = function (value) {
    var x = value;
    var y;
    var n = 63;
    // Inline function 'kotlin.ULong.shr' call
    var this_0 = x;
    y = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).ushr_z7nmq8_k$(32));
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 32 | 0;
      x = y;
    }
    // Inline function 'kotlin.ULong.shr' call
    var this_1 = x;
    y = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).ushr_z7nmq8_k$(16));
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 16 | 0;
      x = y;
    }
    // Inline function 'kotlin.ULong.shr' call
    var this_2 = x;
    y = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).ushr_z7nmq8_k$(8));
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 8 | 0;
      x = y;
    }
    // Inline function 'kotlin.ULong.shr' call
    var this_3 = x;
    y = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).ushr_z7nmq8_k$(4));
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 4 | 0;
      x = y;
    }
    // Inline function 'kotlin.ULong.shr' call
    var this_4 = x;
    y = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).ushr_z7nmq8_k$(2));
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 2 | 0;
      x = y;
    }
    // Inline function 'kotlin.ULong.shr' call
    var this_5 = x;
    y = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).ushr_z7nmq8_k$(1));
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      return n - 2 | 0;
    }
    var tmp = n;
    // Inline function 'kotlin.ULong.toInt' call
    var this_6 = x;
    return tmp - _ULong___get_data__impl__fggpzb(this_6).toInt_1tsl84_k$() | 0;
  };
  protoOf(BigInteger63Arithmetic).numberOfLeadingZeroesInA64BitWord_5xf7ho_k$ = function (value) {
    var x = value;
    var y;
    var n = 64;
    // Inline function 'kotlin.ULong.shr' call
    var this_0 = x;
    y = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).ushr_z7nmq8_k$(32));
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 32 | 0;
      x = y;
    }
    // Inline function 'kotlin.ULong.shr' call
    var this_1 = x;
    y = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).ushr_z7nmq8_k$(16));
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 16 | 0;
      x = y;
    }
    // Inline function 'kotlin.ULong.shr' call
    var this_2 = x;
    y = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).ushr_z7nmq8_k$(8));
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 8 | 0;
      x = y;
    }
    // Inline function 'kotlin.ULong.shr' call
    var this_3 = x;
    y = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).ushr_z7nmq8_k$(4));
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 4 | 0;
      x = y;
    }
    // Inline function 'kotlin.ULong.shr' call
    var this_4 = x;
    y = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).ushr_z7nmq8_k$(2));
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 2 | 0;
      x = y;
    }
    // Inline function 'kotlin.ULong.shr' call
    var this_5 = x;
    y = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).ushr_z7nmq8_k$(1));
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      return n - 2 | 0;
    }
    var tmp = n;
    // Inline function 'kotlin.ULong.toInt' call
    var this_6 = x;
    return tmp - _ULong___get_data__impl__fggpzb(this_6).toInt_1tsl84_k$() | 0;
  };
  protoOf(BigInteger63Arithmetic).numberOfTrailingZerosInAWord_slrqku_k$ = function (value) {
    var x = value;
    var y;
    var n = 63;
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.ULong.shl' call
    var this_0 = x;
    var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).shl_bg8if3_k$(32));
    var other = this.baseMask_1;
    y = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 32 | 0;
      x = y;
    }
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.ULong.shl' call
    var this_2 = x;
    var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).shl_bg8if3_k$(16));
    var other_0 = this.baseMask_1;
    y = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_0)));
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 16 | 0;
      x = y;
    }
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.ULong.shl' call
    var this_4 = x;
    var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).shl_bg8if3_k$(8));
    var other_1 = this.baseMask_1;
    y = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_1)));
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 8 | 0;
      x = y;
    }
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.ULong.shl' call
    var this_6 = x;
    var this_7 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_6).shl_bg8if3_k$(4));
    var other_2 = this.baseMask_1;
    y = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_7).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_2)));
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 4 | 0;
      x = y;
    }
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.ULong.shl' call
    var this_8 = x;
    var this_9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_8).shl_bg8if3_k$(2));
    var other_3 = this.baseMask_1;
    y = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_9).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_3)));
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      n = n - 2 | 0;
      x = y;
    }
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.ULong.shl' call
    var this_10 = x;
    var this_11 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_10).shl_bg8if3_k$(1));
    var other_4 = this.baseMask_1;
    y = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_11).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_4)));
    if (!equals(y, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      return n - 2 | 0;
    }
    var tmp = n;
    // Inline function 'kotlin.ULong.toInt' call
    var this_12 = x;
    return tmp - _ULong___get_data__impl__fggpzb(this_12).toInt_1tsl84_k$() | 0;
  };
  protoOf(BigInteger63Arithmetic).bitLength_pgr2wb_k$ = function (value) {
    if (isZero(value, this)) {
      return 0;
    }
    var start = (_ULongArray___get_size__impl__ju6dtr(value) - this.countLeadingZeroWords_blnloi_k$(value) | 0) - 1 | 0;
    var mostSignificant = ULongArray__get_impl_pr71q9(value, start);
    return this.bitLength_lpvoni_k$(mostSignificant) + imul(start, 63) | 0;
  };
  protoOf(BigInteger63Arithmetic).bitLengthFor64BitArray_xi0ya0_k$ = function (value) {
    if (isZero(value, this)) {
      return 0;
    }
    var mostSignificant = ULongArray__get_impl_pr71q9(value, _ULongArray___get_size__impl__ju6dtr(value) - 1 | 0);
    return this.bitLengthFor64BitWord_1kmcf6_k$(mostSignificant) + imul(_ULongArray___get_size__impl__ju6dtr(value) - 1 | 0, 64) | 0;
  };
  protoOf(BigInteger63Arithmetic).bitLength_lpvoni_k$ = function (value) {
    return 63 - this.numberOfLeadingZerosInAWord_pgcg7w_k$(value) | 0;
  };
  protoOf(BigInteger63Arithmetic).bitLengthFor64BitWord_1kmcf6_k$ = function (value) {
    return 64 - this.numberOfLeadingZeroesInA64BitWord_5xf7ho_k$(value) | 0;
  };
  protoOf(BigInteger63Arithmetic).trailingZeroBits_r18q91_k$ = function (value) {
    return this.numberOfTrailingZerosInAWord_slrqku_k$(value);
  };
  protoOf(BigInteger63Arithmetic).trailingZeroBits_oa1zq6_k$ = function (value) {
    if (isZero(value, this)) {
      return 0;
    }
    // Inline function 'kotlin.collections.count' call
    // Inline function 'kotlin.collections.takeWhile' call
    var list = ArrayList_init_$Create$();
    var tmp0_iterator = ULongArray__iterator_impl_cq4d2h(value);
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$().data_1;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.trailingZeroBits.<anonymous>' call
      if (!equals(item, _ULong___init__impl__c78o9k(new Long(0, 0))))
        break $l$loop;
      list.add_utx5q5_k$(new ULong(item));
    }
    var zeroWordsCount = list.get_size_woubt6_k$();
    if (zeroWordsCount === _ULongArray___get_size__impl__ju6dtr(value)) {
      return 0;
    }
    return this.trailingZeroBits_r18q91_k$(ULongArray__get_impl_pr71q9(value, zeroWordsCount)) + imul(zeroWordsCount, 63) | 0;
  };
  protoOf(BigInteger63Arithmetic).removeLeadingZeros_hl2d3p_k$ = function (bigInteger) {
    var correctedSize = _ULongArray___get_size__impl__ju6dtr(bigInteger) - this.countLeadingZeroWords_blnloi_k$(bigInteger) | 0;
    if (correctedSize === 0) {
      return this.ZERO_1;
    }
    if (_ULongArray___get_size__impl__ju6dtr(bigInteger) === correctedSize) {
      return bigInteger;
    }
    if (false ? (_ULongArray___get_size__impl__ju6dtr(bigInteger) - correctedSize | 0) > 1000 : false) {
      println('RLZ original array : ' + _ULongArray___get_size__impl__ju6dtr(bigInteger) + ' contains: ' + ((_ULongArray___get_size__impl__ju6dtr(bigInteger) - correctedSize | 0) - 1 | 0) + ' zeros');
    }
    // Inline function 'kotlin.collections.copyOfRange' call
    return _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(bigInteger), 0, correctedSize));
  };
  protoOf(BigInteger63Arithmetic).countLeadingZeroWords_blnloi_k$ = function (bigInteger) {
    var lastNonEmptyIndex = _ULongArray___get_size__impl__ju6dtr(bigInteger) - 1 | 0;
    if (lastNonEmptyIndex <= 0) {
      return 0;
    }
    var element = ULongArray__get_impl_pr71q9(bigInteger, lastNonEmptyIndex);
    while (equals(element, _ULong___init__impl__c78o9k(new Long(0, 0))) ? lastNonEmptyIndex > 0 : false) {
      lastNonEmptyIndex = lastNonEmptyIndex - 1 | 0;
      element = ULongArray__get_impl_pr71q9(bigInteger, lastNonEmptyIndex);
    }
    if (equals(ULongArray__get_impl_pr71q9(bigInteger, lastNonEmptyIndex), _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      lastNonEmptyIndex = lastNonEmptyIndex - 1 | 0;
    }
    return (_ULongArray___get_size__impl__ju6dtr(bigInteger) - lastNonEmptyIndex | 0) - 1 | 0;
  };
  protoOf(BigInteger63Arithmetic).shiftLeft_luzpnv_k$ = function (operand, places) {
    if (isZero(operand, this)) {
      return operand;
    }
    if (places === 0) {
      return operand;
    }
    if (ULongArray__isEmpty_impl_c3yngu(operand)) {
      return this.ZERO_1;
    }
    var leadingZeroWords = this.countLeadingZeroWords_blnloi_k$(operand);
    if (_ULongArray___get_size__impl__ju6dtr(operand) === leadingZeroWords) {
      return this.ZERO_1;
    }
    var originalSize = _ULongArray___get_size__impl__ju6dtr(operand) - leadingZeroWords | 0;
    var leadingZeros = this.numberOfLeadingZerosInAWord_pgcg7w_k$(ULongArray__get_impl_pr71q9(operand, originalSize - 1 | 0));
    var shiftWords = places / this.basePowerOfTwo_1 | 0;
    var shiftBits = places % this.basePowerOfTwo_1 | 0;
    var tmp;
    if (shiftBits > leadingZeros) {
      tmp = shiftWords + 1 | 0;
    } else {
      tmp = shiftWords;
    }
    var wordsNeeded = tmp;
    if (shiftBits === 0) {
      // Inline function 'kotlin.ULongArray' call
      var tmp_0 = 0;
      var tmp_1 = originalSize + wordsNeeded | 0;
      var tmp_2 = longArray(tmp_1);
      while (tmp_0 < tmp_1) {
        var tmp_3 = tmp_0;
        // Inline function 'kotlin.ULong.toLong' call
        // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.shiftLeft.<anonymous>' call
        var this_0 = (0 <= tmp_3 ? tmp_3 < shiftWords : false) ? _ULong___init__impl__c78o9k(new Long(0, 0)) : ULongArray__get_impl_pr71q9(operand, tmp_3 - shiftWords | 0);
        tmp_2[tmp_3] = _ULong___get_data__impl__fggpzb(this_0);
        tmp_0 = tmp_0 + 1 | 0;
      }
      return _ULongArray___init__impl__twm1l3(tmp_2);
    }
    // Inline function 'kotlin.ULongArray' call
    var tmp_4 = 0;
    var tmp_5 = originalSize + wordsNeeded | 0;
    var tmp_6 = longArray(tmp_5);
    while (tmp_4 < tmp_5) {
      var tmp_7 = tmp_4;
      // Inline function 'kotlin.ULong.toLong' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.shiftLeft.<anonymous>' call
      var tmp_8;
      if (0 <= tmp_7 ? tmp_7 < shiftWords : false) {
        tmp_8 = _ULong___init__impl__c78o9k(new Long(0, 0));
      } else {
        if (tmp_7 === shiftWords) {
          // Inline function 'kotlin.ULong.and' call
          // Inline function 'kotlin.ULong.shl' call
          var this_1 = ULongArray__get_impl_pr71q9(operand, tmp_7 - shiftWords | 0);
          var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).shl_bg8if3_k$(shiftBits));
          var other = BigInteger63Arithmetic_getInstance().baseMask_1;
          tmp_8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
        } else {
          var containsLower = shiftWords + 1 | 0;
          if (tmp_7 < (originalSize + shiftWords | 0) ? containsLower <= tmp_7 : false) {
            // Inline function 'kotlin.ULong.or' call
            // Inline function 'kotlin.ULong.and' call
            // Inline function 'kotlin.ULong.shl' call
            var this_3 = ULongArray__get_impl_pr71q9(operand, tmp_7 - shiftWords | 0);
            var this_4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).shl_bg8if3_k$(shiftBits));
            var other_0 = BigInteger63Arithmetic_getInstance().baseMask_1;
            var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_0)));
            // Inline function 'kotlin.ULong.shr' call
            var this_6 = ULongArray__get_impl_pr71q9(operand, (tmp_7 - shiftWords | 0) - 1 | 0);
            var bitCount = BigInteger63Arithmetic_getInstance().basePowerOfTwo_1 - shiftBits | 0;
            var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_6).ushr_z7nmq8_k$(bitCount));
            tmp_8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other_1)));
          } else {
            if (tmp_7 === ((originalSize + wordsNeeded | 0) - 1 | 0)) {
              // Inline function 'kotlin.ULong.shr' call
              var this_7 = ULongArray__get_impl_pr71q9(operand, tmp_7 - wordsNeeded | 0);
              var bitCount_0 = BigInteger63Arithmetic_getInstance().basePowerOfTwo_1 - shiftBits | 0;
              tmp_8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_7).ushr_z7nmq8_k$(bitCount_0));
            } else {
              throw RuntimeException_init_$Create$('Invalid case ' + tmp_7);
            }
          }
        }
      }
      var this_8 = tmp_8;
      tmp_6[tmp_7] = _ULong___get_data__impl__fggpzb(this_8);
      tmp_4 = tmp_4 + 1 | 0;
    }
    return _ULongArray___init__impl__twm1l3(tmp_6);
  };
  protoOf(BigInteger63Arithmetic).shiftRight_24xxbu_k$ = function (operand, places) {
    if (ULongArray__isEmpty_impl_c3yngu(operand) ? true : places === 0) {
      return operand;
    }
    var leadingZeroWords = this.countLeadingZeroWords_blnloi_k$(operand);
    var realOperandSize = _ULongArray___get_size__impl__ju6dtr(operand) - leadingZeroWords | 0;
    var shiftBits = places % this.basePowerOfTwo_1 | 0;
    var wordsToDiscard = places / this.basePowerOfTwo_1 | 0;
    if (wordsToDiscard >= realOperandSize) {
      return this.ZERO_1;
    }
    if (shiftBits === 0) {
      // Inline function 'kotlin.collections.copyOfRange' call
      var fromIndex = realOperandSize - wordsToDiscard | 0;
      _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(operand), fromIndex, realOperandSize));
    }
    if (realOperandSize > 1 ? (realOperandSize - wordsToDiscard | 0) === 1 : false) {
      // Inline function 'kotlin.ulongArrayOf' call
      // Inline function 'kotlin.ULong.shr' call
      var this_0 = ULongArray__get_impl_pr71q9(operand, realOperandSize - 1 | 0);
      var tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).ushr_z7nmq8_k$(shiftBits));
      return _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$1]));
    }
    var newLength = realOperandSize - wordsToDiscard | 0;
    if (newLength === 0) {
      return this.ZERO_1;
    }
    // Inline function 'kotlin.ULongArray' call
    var tmp = 0;
    var tmp_0 = realOperandSize - wordsToDiscard | 0;
    var tmp_1 = longArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.ULong.toLong' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.shiftRight.<anonymous>' call
      var tmp_3;
      if (0 <= tmp_2 ? tmp_2 < ((realOperandSize - 1 | 0) - wordsToDiscard | 0) : false) {
        // Inline function 'kotlin.ULong.or' call
        // Inline function 'kotlin.ULong.shr' call
        var this_1 = ULongArray__get_impl_pr71q9(operand, tmp_2 + wordsToDiscard | 0);
        var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).ushr_z7nmq8_k$(shiftBits));
        // Inline function 'kotlin.ULong.and' call
        // Inline function 'kotlin.ULong.shl' call
        var this_3 = ULongArray__get_impl_pr71q9(operand, (tmp_2 + wordsToDiscard | 0) + 1 | 0);
        var bitCount = BigInteger63Arithmetic_getInstance().basePowerOfTwo_1 - shiftBits | 0;
        var this_4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).shl_bg8if3_k$(bitCount));
        var other = BigInteger63Arithmetic_getInstance().baseMask_1;
        var other_0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
        tmp_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other_0)));
      } else if (tmp_2 === ((realOperandSize - 1 | 0) - wordsToDiscard | 0)) {
        // Inline function 'kotlin.ULong.shr' call
        var this_5 = ULongArray__get_impl_pr71q9(operand, tmp_2 + wordsToDiscard | 0);
        tmp_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).ushr_z7nmq8_k$(shiftBits));
      } else {
        throw RuntimeException_init_$Create$('Invalid case ' + tmp_2);
      }
      var this_6 = tmp_3;
      tmp_1[tmp_2] = _ULong___get_data__impl__fggpzb(this_6);
      tmp = tmp + 1 | 0;
    }
    var result = _ULongArray___init__impl__twm1l3(tmp_1);
    return result;
  };
  protoOf(BigInteger63Arithmetic).compareWithStartIndexes_z2xll_k$ = function (first, second, firstStart, secondStart) {
    if (firstStart > secondStart) {
      return 1;
    }
    if (secondStart > firstStart) {
      return -1;
    }
    var counter = firstStart - 1 | 0;
    var firstIsLarger = false;
    var bothAreEqual = true;
    $l$loop_0: while (counter >= 0) {
      // Inline function 'kotlin.ULong.compareTo' call
      var this_0 = ULongArray__get_impl_pr71q9(first, counter);
      var other = ULongArray__get_impl_pr71q9(second, counter);
      if (ulongCompare(_ULong___get_data__impl__fggpzb(this_0), _ULong___get_data__impl__fggpzb(other)) > 0) {
        firstIsLarger = true;
        bothAreEqual = false;
        break $l$loop_0;
      }
      // Inline function 'kotlin.ULong.compareTo' call
      var this_1 = ULongArray__get_impl_pr71q9(first, counter);
      var other_0 = ULongArray__get_impl_pr71q9(second, counter);
      if (ulongCompare(_ULong___get_data__impl__fggpzb(this_1), _ULong___get_data__impl__fggpzb(other_0)) < 0) {
        firstIsLarger = false;
        bothAreEqual = false;
        break $l$loop_0;
      }
      counter = counter - 1 | 0;
    }
    if (bothAreEqual) {
      return 0;
    }
    if (firstIsLarger) {
      return 1;
    } else {
      return -1;
    }
  };
  protoOf(BigInteger63Arithmetic).compare_23l5gr_k$ = function (first, second) {
    var firstStart = _ULongArray___get_size__impl__ju6dtr(first) - this.countLeadingZeroWords_blnloi_k$(first) | 0;
    var secondStart = _ULongArray___get_size__impl__ju6dtr(second) - this.countLeadingZeroWords_blnloi_k$(second) | 0;
    return this.compareWithStartIndexes_z2xll_k$(first, second, firstStart, secondStart);
  };
  protoOf(BigInteger63Arithmetic).numberOfDecimalDigits_y3zonj_k$ = function (operand) {
    var bitLenght = this.bitLength_pgr2wb_k$(operand);
    // Inline function 'kotlin.math.ceil' call
    var x = (bitLenght - 1 | 0) * Companion_getInstance_6().get_LOG_10_OF_2_5oia3e_k$();
    var minDigit = Math.ceil(x);
    var tmp = this.div_s0tcn1_k$(operand, this.pow_l8706q_k$(this.TEN_1, numberToLong(minDigit)));
    var counter = new Long(0, 0);
    while (!(this.compare_23l5gr_k$(tmp, this.ZERO_1) === 0)) {
      tmp = this.div_s0tcn1_k$(tmp, this.TEN_1);
      counter = counter.inc_28ke_k$();
    }
    // Inline function 'kotlin.Long.plus' call
    var this_0 = counter;
    var other = numberToInt(minDigit);
    return this_0.plus_r93sks_k$(toLong(other));
  };
  protoOf(BigInteger63Arithmetic).baseAddIntoArray_5ti4rt_k$ = function (resultArray, resultArrayStart, first, second) {
    if (isZero(first, this)) {
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = _ULongArray___get_size__impl__ju6dtr(first);
      // Inline function 'kotlin.collections.copyInto' call
      var this_0 = _ULongArray___get_storage__impl__28e64j(first);
      var destination = _ULongArray___get_storage__impl__28e64j(resultArray);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = this_0;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, destination, resultArrayStart, 0, endIndex);
      return Unit_getInstance();
    }
    if (isZero(second, this)) {
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex_0 = _ULongArray___get_size__impl__ju6dtr(second);
      // Inline function 'kotlin.collections.copyInto' call
      var this_1 = _ULongArray___get_storage__impl__28e64j(second);
      var destination_0 = _ULongArray___get_storage__impl__28e64j(resultArray);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = this_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp_0, destination_0, resultArrayStart, 0, endIndex_0);
      return Unit_getInstance();
    }
    var firstStart = _ULongArray___get_size__impl__ju6dtr(first) - this.countLeadingZeroWords_blnloi_k$(first) | 0;
    var secondStart = _ULongArray___get_size__impl__ju6dtr(second) - this.countLeadingZeroWords_blnloi_k$(second) | 0;
    var tmp_1;
    if (firstStart > secondStart) {
      tmp_1 = new Sextuple(_ULongArray___get_size__impl__ju6dtr(first), _ULongArray___get_size__impl__ju6dtr(second), new ULongArray(first), new ULongArray(second), firstStart, secondStart);
    } else {
      tmp_1 = new Sextuple(_ULongArray___get_size__impl__ju6dtr(second), _ULongArray___get_size__impl__ju6dtr(first), new ULongArray(second), new ULongArray(first), secondStart, firstStart);
    }
    var tmp0_container = tmp_1;
    var largerLength = tmp0_container.component1_7eebsc_k$();
    var smallerLength = tmp0_container.component2_7eebsb_k$();
    var largerData = tmp0_container.component3_7eebsa_k$().storage_1;
    var smallerData = tmp0_container.component4_7eebs9_k$().storage_1;
    var largerStart = tmp0_container.component5_7eebs8_k$();
    var smallerStart = tmp0_container.component6_7eebs7_k$();
    var i = 0;
    var sum = _ULong___init__impl__c78o9k(new Long(0, 0));
    while (i < smallerStart) {
      // Inline function 'kotlin.ULong.plus' call
      // Inline function 'kotlin.ULong.plus' call
      var this_2 = sum;
      var other = ULongArray__get_impl_pr71q9(largerData, i);
      var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other)));
      var other_0 = ULongArray__get_impl_pr71q9(smallerData, i);
      sum = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other_0)));
      var tmp_2 = i + resultArrayStart | 0;
      // Inline function 'kotlin.ULong.and' call
      var this_4 = sum;
      var other_1 = this.baseMask_1;
      var tmp$ret$14 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_1)));
      ULongArray__set_impl_z19mvh(resultArray, tmp_2, tmp$ret$14);
      // Inline function 'kotlin.ULong.shr' call
      var this_5 = sum;
      sum = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).ushr_z7nmq8_k$(63));
      i = i + 1 | 0;
    }
    while (true) {
      if (equals(sum, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
        while (i < largerStart) {
          ULongArray__set_impl_z19mvh(resultArray, i + resultArrayStart | 0, ULongArray__get_impl_pr71q9(largerData, i));
          i = i + 1 | 0;
        }
        return Unit_getInstance();
      }
      if (i === largerLength) {
        ULongArray__set_impl_z19mvh(resultArray, largerLength + resultArrayStart | 0, sum);
        return Unit_getInstance();
      }
      // Inline function 'kotlin.ULong.plus' call
      var this_6 = sum;
      var other_2 = ULongArray__get_impl_pr71q9(largerData, i);
      sum = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_6).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other_2)));
      var tmp_3 = i;
      // Inline function 'kotlin.ULong.and' call
      var this_7 = sum;
      var other_3 = this.baseMask_1;
      var tmp$ret$17 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_7).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_3)));
      ULongArray__set_impl_z19mvh(resultArray, tmp_3, tmp$ret$17);
      // Inline function 'kotlin.ULong.shr' call
      var this_8 = sum;
      sum = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_8).ushr_z7nmq8_k$(63));
      i = i + 1 | 0;
    }
  };
  protoOf(BigInteger63Arithmetic).add_fdm03p_k$ = function (first, second) {
    if (isZero(first, this))
      return second;
    if (isZero(second, this))
      return first;
    var firstStart = _ULongArray___get_size__impl__ju6dtr(first) - this.countLeadingZeroWords_blnloi_k$(first) | 0;
    var secondStart = _ULongArray___get_size__impl__ju6dtr(second) - this.countLeadingZeroWords_blnloi_k$(second) | 0;
    var tmp;
    if (firstStart > secondStart) {
      tmp = new Sextuple(_ULongArray___get_size__impl__ju6dtr(first), _ULongArray___get_size__impl__ju6dtr(second), new ULongArray(first), new ULongArray(second), firstStart, secondStart);
    } else {
      tmp = new Sextuple(_ULongArray___get_size__impl__ju6dtr(second), _ULongArray___get_size__impl__ju6dtr(first), new ULongArray(second), new ULongArray(first), secondStart, firstStart);
    }
    var tmp0_container = tmp;
    var largerLength = tmp0_container.component1_7eebsc_k$();
    var smallerLength = tmp0_container.component2_7eebsb_k$();
    var largerData = tmp0_container.component3_7eebsa_k$().storage_1;
    var smallerData = tmp0_container.component4_7eebs9_k$().storage_1;
    var largerStart = tmp0_container.component5_7eebs8_k$();
    var smallerStart = tmp0_container.component6_7eebs7_k$();
    // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.possibleAdditionOverflow' call
    var firstMostSignificant = ULongArray__get_impl_pr71q9(largerData, largerStart - 1 | 0);
    var secondMostSignificant = ULongArray__get_impl_pr71q9(smallerData, smallerStart - 1 | 0);
    var tmp_0;
    // Inline function 'kotlin.ULong.and' call
    var other = _ULong___init__impl__c78o9k(new Long(0, 1610612736));
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(firstMostSignificant).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
    if (!equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.ULong.and' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(0, 1610612736));
      var tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(secondMostSignificant).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_0)));
      tmp_0 = !equals(tmp$ret$1, _ULong___init__impl__c78o9k(new Long(0, 0)));
    }
    var possibleOverflow = tmp_0;
    var possibleOverflow_0 = possibleOverflow;
    var tmp_1;
    if (possibleOverflow_0) {
      // Inline function 'kotlin.ULongArray' call
      var tmp_2 = 0;
      var tmp_3 = largerLength + 1 | 0;
      var tmp_4 = longArray(tmp_3);
      while (tmp_2 < tmp_3) {
        var tmp_5 = tmp_2;
        // Inline function 'kotlin.ULong.toLong' call
        // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.add.<anonymous>' call
        var this_0 = _ULong___init__impl__c78o9k(new Long(0, 0));
        tmp_4[tmp_5] = _ULong___get_data__impl__fggpzb(this_0);
        tmp_2 = tmp_2 + 1 | 0;
      }
      tmp_1 = _ULongArray___init__impl__twm1l3(tmp_4);
    } else {
      // Inline function 'kotlin.ULongArray' call
      var tmp_6 = 0;
      var tmp_7 = longArray(largerLength);
      while (tmp_6 < largerLength) {
        var tmp_8 = tmp_6;
        // Inline function 'kotlin.ULong.toLong' call
        // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.add.<anonymous>' call
        var this_1 = _ULong___init__impl__c78o9k(new Long(0, 0));
        tmp_7[tmp_8] = _ULong___get_data__impl__fggpzb(this_1);
        tmp_6 = tmp_6 + 1 | 0;
      }
      tmp_1 = _ULongArray___init__impl__twm1l3(tmp_7);
    }
    var result = tmp_1;
    this.baseAddIntoArray_5ti4rt_k$(result, 0, first, second);
    var tmp_9;
    if (possibleOverflow_0) {
      tmp_9 = this.removeLeadingZeros_hl2d3p_k$(result);
    } else {
      tmp_9 = result;
    }
    return tmp_9;
  };
  protoOf(BigInteger63Arithmetic).oldAdd_lf90bm_k$ = function (first, second) {
    if (isZero(first, this))
      return second;
    if (isZero(second, this))
      return first;
    var firstStart = _ULongArray___get_size__impl__ju6dtr(first) - this.countLeadingZeroWords_blnloi_k$(first) | 0;
    var secondStart = _ULongArray___get_size__impl__ju6dtr(second) - this.countLeadingZeroWords_blnloi_k$(second) | 0;
    var tmp;
    if (firstStart > secondStart) {
      tmp = new Sextuple(_ULongArray___get_size__impl__ju6dtr(first), _ULongArray___get_size__impl__ju6dtr(second), new ULongArray(first), new ULongArray(second), firstStart, secondStart);
    } else {
      tmp = new Sextuple(_ULongArray___get_size__impl__ju6dtr(second), _ULongArray___get_size__impl__ju6dtr(first), new ULongArray(second), new ULongArray(first), secondStart, firstStart);
    }
    var tmp0_container = tmp;
    var largerLength = tmp0_container.component1_7eebsc_k$();
    var smallerLength = tmp0_container.component2_7eebsb_k$();
    var largerData = tmp0_container.component3_7eebsa_k$().storage_1;
    var smallerData = tmp0_container.component4_7eebs9_k$().storage_1;
    var largerStart = tmp0_container.component5_7eebs8_k$();
    var smallerStart = tmp0_container.component6_7eebs7_k$();
    // Inline function 'kotlin.ULongArray' call
    var tmp_0 = 0;
    var tmp_1 = largerStart + 1 | 0;
    var tmp_2 = longArray(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      // Inline function 'kotlin.ULong.toLong' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.oldAdd.<anonymous>' call
      var this_0 = _ULong___init__impl__c78o9k(new Long(0, 0));
      tmp_2[tmp_3] = _ULong___get_data__impl__fggpzb(this_0);
      tmp_0 = tmp_0 + 1 | 0;
    }
    var result = _ULongArray___init__impl__twm1l3(tmp_2);
    var i = 0;
    var sum = _ULong___init__impl__c78o9k(new Long(0, 0));
    while (i < smallerStart) {
      // Inline function 'kotlin.ULong.plus' call
      // Inline function 'kotlin.ULong.plus' call
      var this_1 = sum;
      var other = ULongArray__get_impl_pr71q9(largerData, i);
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other)));
      var other_0 = ULongArray__get_impl_pr71q9(smallerData, i);
      sum = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other_0)));
      var tmp_4 = i;
      // Inline function 'kotlin.ULong.and' call
      var this_3 = sum;
      var other_1 = this.baseMask_1;
      var tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_1)));
      ULongArray__set_impl_z19mvh(result, tmp_4, tmp$ret$6);
      // Inline function 'kotlin.ULong.shr' call
      var this_4 = sum;
      sum = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).ushr_z7nmq8_k$(63));
      i = i + 1 | 0;
    }
    while (true) {
      if (equals(sum, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
        while (i < largerStart) {
          ULongArray__set_impl_z19mvh(result, i, ULongArray__get_impl_pr71q9(largerData, i));
          i = i + 1 | 0;
        }
        var tmp_5;
        if (equals(ULongArray__get_impl_pr71q9(result, _ULongArray___get_size__impl__ju6dtr(result) - 1 | 0), _ULong___init__impl__c78o9k(new Long(0, 0)))) {
          if ((_ULongArray___get_size__impl__ju6dtr(result) - 1 | 0) === 0) {
            return this.ZERO_1;
          }
          // Inline function 'kotlin.collections.copyOfRange' call
          var toIndex = _ULongArray___get_size__impl__ju6dtr(result) - 1 | 0;
          tmp_5 = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(result), 0, toIndex));
        } else {
          tmp_5 = result;
        }
        var final = tmp_5;
        return final;
      }
      if (i === largerLength) {
        ULongArray__set_impl_z19mvh(result, largerLength, sum);
        return result;
      }
      // Inline function 'kotlin.ULong.plus' call
      var this_5 = sum;
      var other_2 = ULongArray__get_impl_pr71q9(largerData, i);
      sum = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other_2)));
      var tmp_6 = i;
      // Inline function 'kotlin.ULong.and' call
      var this_6 = sum;
      var other_3 = this.baseMask_1;
      var tmp$ret$10 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_6).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_3)));
      ULongArray__set_impl_z19mvh(result, tmp_6, tmp$ret$10);
      // Inline function 'kotlin.ULong.shr' call
      var this_7 = sum;
      sum = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_7).ushr_z7nmq8_k$(63));
      i = i + 1 | 0;
    }
  };
  protoOf(BigInteger63Arithmetic).subtractWithStartIndexes_aq1fjw_k$ = function (first, second, firstStart, secondStart) {
    var comparison = this.compareWithStartIndexes_z2xll_k$(first, second, firstStart, secondStart);
    var firstSize = firstStart + 1 | 0;
    var secondSize = secondStart + 1 | 0;
    var firstIsLarger = comparison === 1;
    if (comparison === 0)
      return this.ZERO_1;
    if (secondSize === 1 ? equals(ULongArray__get_impl_pr71q9(second, 0), _ULong___init__impl__c78o9k(new Long(0, 0))) : false) {
      return first;
    }
    if (!firstIsLarger) {
      throw RuntimeException_init_$Create$('subtract result less than zero');
    }
    var tmp;
    if (firstIsLarger) {
      tmp = new Quadruple(new ULongArray(first), new ULongArray(second), firstStart, secondStart);
    } else {
      tmp = new Quadruple(new ULongArray(second), new ULongArray(first), secondStart, firstStart);
    }
    var tmp0_container = tmp;
    var largerData = tmp0_container.component1_7eebsc_k$().storage_1;
    var smallerData = tmp0_container.component2_7eebsb_k$().storage_1;
    var largerStart = tmp0_container.component3_7eebsa_k$();
    var smallerStart = tmp0_container.component4_7eebs9_k$();
    // Inline function 'kotlin.ULongArray' call
    var tmp_0 = 0;
    var tmp_1 = longArray(largerStart);
    while (tmp_0 < largerStart) {
      var tmp_2 = tmp_0;
      // Inline function 'kotlin.ULong.toLong' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.subtractWithStartIndexes.<anonymous>' call
      var this_0 = _ULong___init__impl__c78o9k(new Long(0, 0));
      tmp_1[tmp_2] = _ULong___get_data__impl__fggpzb(this_0);
      tmp_0 = tmp_0 + 1 | 0;
    }
    var result = _ULongArray___init__impl__twm1l3(tmp_1);
    var i = 0;
    var diff = _ULong___init__impl__c78o9k(new Long(0, 0));
    while (i < smallerStart) {
      // Inline function 'kotlin.ULong.minus' call
      // Inline function 'kotlin.ULong.minus' call
      var this_1 = ULongArray__get_impl_pr71q9(largerData, i);
      var other = ULongArray__get_impl_pr71q9(smallerData, i);
      var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).minus_mfbszm_k$(_ULong___get_data__impl__fggpzb(other)));
      var other_0 = diff;
      diff = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).minus_mfbszm_k$(_ULong___get_data__impl__fggpzb(other_0)));
      var tmp_3 = i;
      // Inline function 'kotlin.ULong.and' call
      var this_3 = diff;
      var other_1 = this.baseMask_1;
      var tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_1)));
      ULongArray__set_impl_z19mvh(result, tmp_3, tmp$ret$6);
      // Inline function 'kotlin.ULong.shr' call
      var this_4 = diff;
      diff = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).ushr_z7nmq8_k$(63));
      i = i + 1 | 0;
    }
    while (!equals(diff, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ULong.minus' call
      var this_5 = ULongArray__get_impl_pr71q9(largerData, i);
      var other_2 = diff;
      diff = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).minus_mfbszm_k$(_ULong___get_data__impl__fggpzb(other_2)));
      var tmp_4 = i;
      // Inline function 'kotlin.ULong.and' call
      var this_6 = diff;
      var other_3 = this.baseMask_1;
      var tmp$ret$9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_6).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_3)));
      ULongArray__set_impl_z19mvh(result, tmp_4, tmp$ret$9);
      // Inline function 'kotlin.ULong.shr' call
      var this_7 = diff;
      diff = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_7).ushr_z7nmq8_k$(63));
      i = i + 1 | 0;
    }
    while (i < largerStart) {
      ULongArray__set_impl_z19mvh(result, i, ULongArray__get_impl_pr71q9(largerData, i));
      i = i + 1 | 0;
    }
    if (this.countLeadingZeroWords_blnloi_k$(result) === (_ULongArray___get_size__impl__ju6dtr(result) - 1 | 0) ? equals(ULongArray__get_impl_pr71q9(result, 0), _ULong___init__impl__c78o9k(new Long(0, 0))) : false) {
      return this.ZERO_1;
    }
    return this.removeLeadingZeros_hl2d3p_k$(result);
  };
  protoOf(BigInteger63Arithmetic).subtract_tkmoqg_k$ = function (first, second) {
    var firstStart = _ULongArray___get_size__impl__ju6dtr(first) - this.countLeadingZeroWords_blnloi_k$(first) | 0;
    var secondStart = _ULongArray___get_size__impl__ju6dtr(second) - this.countLeadingZeroWords_blnloi_k$(second) | 0;
    return this.subtractWithStartIndexes_aq1fjw_k$(first, second, firstStart, secondStart);
  };
  protoOf(BigInteger63Arithmetic).multiply_2l587c_k$ = function (first, second) {
    var firstCorrectedSize = _ULongArray___get_size__impl__ju6dtr(first) - this.countLeadingZeroWords_blnloi_k$(first) | 0;
    var secondCorrectedSize = _ULongArray___get_size__impl__ju6dtr(second) - this.countLeadingZeroWords_blnloi_k$(second) | 0;
    return multiplyWithCorrectedSize(this, first, second, firstCorrectedSize, secondCorrectedSize);
  };
  protoOf(BigInteger63Arithmetic).basecaseMultiply_tol0yx_k$ = function (first, second) {
    var firstCorrectedSizeStart = _ULongArray___get_size__impl__ju6dtr(first) - this.countLeadingZeroWords_blnloi_k$(first) | 0;
    var secondCorrectedSizeStart = _ULongArray___get_size__impl__ju6dtr(second) - this.countLeadingZeroWords_blnloi_k$(second) | 0;
    return basecaseMultiplyWithCorrectedSize(this, first, second, firstCorrectedSizeStart, secondCorrectedSizeStart);
  };
  protoOf(BigInteger63Arithmetic).combaMultiply_5zd6ec_k$ = function (first, second) {
  };
  protoOf(BigInteger63Arithmetic).karatsubaMultiply_hto7e0_k$ = function (firstUnsigned, secondUnsigned) {
    var firstCorrectedSize = _ULongArray___get_size__impl__ju6dtr(firstUnsigned) - this.countLeadingZeroWords_blnloi_k$(firstUnsigned) | 0;
    var secondCorrectedSize = _ULongArray___get_size__impl__ju6dtr(secondUnsigned) - this.countLeadingZeroWords_blnloi_k$(secondUnsigned) | 0;
    return karatsubaMultiplyWithCorrectedSizes(this, firstUnsigned, secondUnsigned, firstCorrectedSize, secondCorrectedSize);
  };
  protoOf(BigInteger63Arithmetic).prependULongArray_ketf9r_k$ = function (original, numberOfWords, value) {
    // Inline function 'kotlin.ULongArray' call
    var tmp = 0;
    var tmp_0 = _ULongArray___get_size__impl__ju6dtr(original) + numberOfWords | 0;
    var tmp_1 = longArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.ULong.toLong' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.prependULongArray.<anonymous>' call
      var this_0 = tmp_2 < numberOfWords ? value : ULongArray__get_impl_pr71q9(original, tmp_2 - numberOfWords | 0);
      tmp_1[tmp_2] = _ULong___get_data__impl__fggpzb(this_0);
      tmp = tmp + 1 | 0;
    }
    return _ULongArray___init__impl__twm1l3(tmp_1);
  };
  protoOf(BigInteger63Arithmetic).extendULongArray_owb2fv_k$ = function (original, numberOfWords, value) {
    // Inline function 'kotlin.ULongArray' call
    var tmp = 0;
    var tmp_0 = _ULongArray___get_size__impl__ju6dtr(original) + numberOfWords | 0;
    var tmp_1 = longArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.ULong.toLong' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.extendULongArray.<anonymous>' call
      var this_0 = tmp_2 < _ULongArray___get_size__impl__ju6dtr(original) ? ULongArray__get_impl_pr71q9(original, tmp_2) : value;
      tmp_1[tmp_2] = _ULong___get_data__impl__fggpzb(this_0);
      tmp = tmp + 1 | 0;
    }
    return _ULongArray___init__impl__twm1l3(tmp_1);
  };
  protoOf(BigInteger63Arithmetic).toomCook3Multiply_6f7jui_k$ = function (firstUnchecked, secondUnchecked) {
    var tmp;
    if (!((_ULongArray___get_size__impl__ju6dtr(firstUnchecked) % 3 | 0) === 0)) {
      // Inline function 'kotlin.collections.asIterable' call
      // Inline function 'kotlin.ULongArray' call
      var tmp_0 = 0;
      var tmp_1 = imul((_ULongArray___get_size__impl__ju6dtr(firstUnchecked) + 2 | 0) / 3 | 0, 3) - _ULongArray___get_size__impl__ju6dtr(firstUnchecked) | 0;
      var tmp_2 = longArray(tmp_1);
      while (tmp_0 < tmp_1) {
        var tmp_3 = tmp_0;
        // Inline function 'kotlin.ULong.toLong' call
        // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.toomCook3Multiply.<anonymous>' call
        var this_0 = _ULong___init__impl__c78o9k(new Long(0, 0));
        tmp_2[tmp_3] = _ULong___get_data__impl__fggpzb(this_0);
        tmp_0 = tmp_0 + 1 | 0;
      }
      var tmp$ret$3 = _ULongArray___init__impl__twm1l3(tmp_2);
      var tmp$ret$4 = new ULongArray(tmp$ret$3);
      tmp = plus(new ULongArray(firstUnchecked), tmp$ret$4);
    } else {
      tmp = new ULongArray(firstUnchecked);
    }
    var first = toULongArray(tmp);
    var tmp_4;
    if (!((_ULongArray___get_size__impl__ju6dtr(secondUnchecked) % 3 | 0) === 0)) {
      // Inline function 'kotlin.collections.asIterable' call
      // Inline function 'kotlin.ULongArray' call
      var tmp_5 = 0;
      var tmp_6 = imul((_ULongArray___get_size__impl__ju6dtr(secondUnchecked) + 2 | 0) / 3 | 0, 3) - _ULongArray___get_size__impl__ju6dtr(secondUnchecked) | 0;
      var tmp_7 = longArray(tmp_6);
      while (tmp_5 < tmp_6) {
        var tmp_8 = tmp_5;
        // Inline function 'kotlin.ULong.toLong' call
        // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.toomCook3Multiply.<anonymous>' call
        var this_1 = _ULong___init__impl__c78o9k(new Long(0, 0));
        tmp_7[tmp_8] = _ULong___get_data__impl__fggpzb(this_1);
        tmp_5 = tmp_5 + 1 | 0;
      }
      var tmp$ret$8 = _ULongArray___init__impl__twm1l3(tmp_7);
      var tmp$ret$9 = new ULongArray(tmp$ret$8);
      tmp_4 = plus(new ULongArray(secondUnchecked), tmp$ret$9);
    } else {
      tmp_4 = new ULongArray(secondUnchecked);
    }
    var second = toULongArray(tmp_4);
    var firstLength = _ULongArray___get_size__impl__ju6dtr(first);
    var secondLength = _ULongArray___get_size__impl__ju6dtr(second);
    var tmp_9;
    if (firstLength > secondLength) {
      var prepared = this.extendULongArray_owb2fv_k$(second, firstLength - secondLength | 0, _ULong___init__impl__c78o9k(new Long(0, 0)));
      tmp_9 = new Pair(new ULongArray(first), new ULongArray(prepared));
    } else if (firstLength < secondLength) {
      var prepared_0 = this.extendULongArray_owb2fv_k$(first, secondLength - firstLength | 0, _ULong___init__impl__c78o9k(new Long(0, 0)));
      tmp_9 = new Pair(new ULongArray(prepared_0), new ULongArray(second));
    } else {
      tmp_9 = new Pair(new ULongArray(first), new ULongArray(second));
    }
    var tmp0_container = tmp_9;
    var firstPrepared = tmp0_container.component1_7eebsc_k$().storage_1;
    var secondPrepared = tmp0_container.component2_7eebsb_k$().storage_1;
    // Inline function 'kotlin.math.max' call
    var a = _ULongArray___get_size__impl__ju6dtr(first);
    var b = _ULongArray___get_size__impl__ju6dtr(second);
    var longestLength = Math.max(a, b);
    var extendedDigit = (longestLength + 2 | 0) / 3 | 0;
    var m0 = new SignedULongArray(toULongArray(slice_0(firstPrepared, until(0, extendedDigit))), true);
    var m1 = new SignedULongArray(toULongArray(slice_0(firstPrepared, until(extendedDigit, imul(extendedDigit, 2)))), true);
    var m2 = new SignedULongArray(toULongArray(slice_0(firstPrepared, until(imul(extendedDigit, 2), imul(extendedDigit, 3)))), true);
    var n0 = new SignedULongArray(toULongArray(slice_0(secondPrepared, until(0, extendedDigit))), true);
    var n1 = new SignedULongArray(toULongArray(slice_0(secondPrepared, until(extendedDigit, imul(extendedDigit, 2)))), true);
    var n2 = new SignedULongArray(toULongArray(slice_0(secondPrepared, until(imul(extendedDigit, 2), imul(extendedDigit, 3)))), true);
    var p0 = this.plus_jxwqbe_k$(m0, m2);
    var pe0 = m0;
    var pe1 = this.plus_jxwqbe_k$(p0, m1);
    var pem1 = this.minus_emc2xw_k$(p0, m1);
    var doublePemM2 = this.times_tdl5se_k$(this.plus_jxwqbe_k$(pem1, m2), this.SIGNED_POSITIVE_TWO_1);
    var pem2 = this.minus_emc2xw_k$(doublePemM2, m0);
    var pinf = m2;
    var q0 = this.plus_jxwqbe_k$(n0, n2);
    var qe0 = n0;
    var qe1 = this.plus_jxwqbe_k$(q0, n1);
    var qem1 = this.minus_emc2xw_k$(q0, n1);
    var doubleQemN2 = this.times_tdl5se_k$(this.plus_jxwqbe_k$(qem1, n2), this.SIGNED_POSITIVE_TWO_1);
    var qem2 = this.minus_emc2xw_k$(doubleQemN2, n0);
    var qinf = n2;
    var re0 = this.times_tdl5se_k$(pe0, qe0);
    var re1 = this.times_tdl5se_k$(pe1, qe1);
    var rem1 = this.times_tdl5se_k$(pem1, qem1);
    var rem2 = this.times_tdl5se_k$(pem2, qem2);
    var rinf = this.times_tdl5se_k$(pinf, qinf);
    var r0 = re0;
    var r4 = rinf;
    var rem2re1diff = this.minus_emc2xw_k$(rem2, re1);
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp$ret$11 = _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(3, 0))]));
    var r3 = this.div_g610n1_k$(rem2re1diff, new SignedULongArray(tmp$ret$11, true));
    var r1 = this.shr_1ylobi_k$(this.minus_emc2xw_k$(re1, rem1), 1);
    var r2 = this.minus_emc2xw_k$(rem1, r0);
    r3 = this.plus_jxwqbe_k$(this.shr_1ylobi_k$(this.minus_emc2xw_k$(r2, r3), 1), this.times_tdl5se_k$(this.SIGNED_POSITIVE_TWO_1, rinf));
    r2 = this.minus_emc2xw_k$(this.plus_jxwqbe_k$(r2, r1), r4);
    r1 = this.minus_emc2xw_k$(r1, r3);
    var bShiftAmount = imul(extendedDigit, 63);
    var rb0 = r0;
    var rb1 = this.shl_oblxk4_k$(r1, bShiftAmount);
    var rb2 = this.shl_oblxk4_k$(r2, imul(bShiftAmount, 2));
    var rb3 = this.shl_oblxk4_k$(r3, imul(bShiftAmount, 3));
    var rb4 = this.shl_oblxk4_k$(r4, imul(bShiftAmount, 4));
    var rb = this.plus_jxwqbe_k$(this.plus_jxwqbe_k$(this.plus_jxwqbe_k$(this.plus_jxwqbe_k$(rb0, rb1), rb2), rb3), rb4);
    return rb.unsignedValue_1;
  };
  protoOf(BigInteger63Arithmetic).toomCook3WithCorrectedSizes_d5aaez_k$ = function (firstUnchecked, secondUnchecked) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError('An operation is not implemented: ' + '');
  };
  protoOf(BigInteger63Arithmetic).fftMultiply_bg2uu4_k$ = function (first, second) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  };
  protoOf(BigInteger63Arithmetic).baseMultiply_97jr64_k$ = function (first, second) {
    var firstCorrectedSize = _ULongArray___get_size__impl__ju6dtr(first) - this.countLeadingZeroWords_blnloi_k$(first) | 0;
    return this.baseMultiplyWithCorrectedSize_icegmq_k$(first, second, firstCorrectedSize);
  };
  protoOf(BigInteger63Arithmetic).baseMultiplyIntoArray_q9rhwb_k$ = function (result, resultStart, resultEnd, first, second) {
    // Inline function 'kotlin.TODO' call
    throw new NotImplementedError();
  };
  protoOf(BigInteger63Arithmetic).baseMultiplyWithCorrectedSize_icegmq_k$ = function (first, second, firstCorrectedSize) {
    // Inline function 'kotlin.ULong.and' call
    var other = this.lowMask_1;
    var secondLow = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(second).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
    // Inline function 'kotlin.ULong.shr' call
    var secondHigh = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(second).ushr_z7nmq8_k$(32));
    var requiredBits = this.bitLength_pgr2wb_k$(first) + this.bitLength_lpvoni_k$(second) | 0;
    var tmp;
    if (!((requiredBits % 63 | 0) === 0)) {
      tmp = (requiredBits / 63 | 0) + 1 | 0;
    } else {
      tmp = requiredBits / 63 | 0;
    }
    var requiredWords = tmp;
    var result = _ULongArray___init__impl__twm1l3_0(requiredWords);
    var carryIntoNextRound = _ULong___init__impl__c78o9k(new Long(0, 0));
    var i = 0;
    var j = 0;
    while (i < firstCorrectedSize) {
      // Inline function 'kotlin.ULong.and' call
      var this_0 = ULongArray__get_impl_pr71q9(first, i);
      var other_0 = this.lowMask_1;
      var firstLow = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_0)));
      // Inline function 'kotlin.ULong.shr' call
      var this_1 = ULongArray__get_impl_pr71q9(first, i);
      var firstHigh = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).ushr_z7nmq8_k$(32));
      i = i + 1 | 0;
      // Inline function 'kotlin.ULong.times' call
      var lowerProduct = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(firstLow).times_nfzjiw_k$(_ULong___get_data__impl__fggpzb(secondLow)));
      // Inline function 'kotlin.ULong.shr' call
      var lowerCarry = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(lowerProduct).ushr_z7nmq8_k$(63));
      // Inline function 'kotlin.ULong.plus' call
      var this_2 = carryIntoNextRound;
      // Inline function 'kotlin.ULong.and' call
      var other_1 = this.baseMask_1;
      var other_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(lowerProduct).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_1)));
      var lowResult = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other_2)));
      // Inline function 'kotlin.ULong.plus' call
      var this_3 = lowerCarry;
      // Inline function 'kotlin.ULong.shr' call
      var this_4 = lowResult;
      var other_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).ushr_z7nmq8_k$(63));
      lowerCarry = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other_3)));
      // Inline function 'kotlin.ULong.and' call
      var this_5 = lowResult;
      var other_4 = this.baseMask_1;
      lowResult = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_4)));
      // Inline function 'kotlin.ULong.plus' call
      // Inline function 'kotlin.ULong.times' call
      var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(firstLow).times_nfzjiw_k$(_ULong___get_data__impl__fggpzb(secondHigh)));
      // Inline function 'kotlin.ULong.times' call
      var other_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(secondLow).times_nfzjiw_k$(_ULong___get_data__impl__fggpzb(firstHigh)));
      var middleProduct = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_6).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other_5)));
      var middleCarry = lowerCarry;
      // Inline function 'kotlin.ULong.plus' call
      var this_7 = middleCarry;
      // Inline function 'kotlin.ULong.shr' call
      var other_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(middleProduct).ushr_z7nmq8_k$(31));
      middleCarry = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_7).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other_6)));
      // Inline function 'kotlin.ULong.plus' call
      var this_8 = lowResult;
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shl' call
      var this_9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(middleProduct).shl_bg8if3_k$(32));
      var other_7 = this.baseMask_1;
      var other_8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_9).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_7)));
      lowResult = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_8).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other_8)));
      // Inline function 'kotlin.ULong.plus' call
      var this_10 = middleCarry;
      // Inline function 'kotlin.ULong.shr' call
      var this_11 = lowResult;
      var other_9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_11).ushr_z7nmq8_k$(63));
      middleCarry = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_10).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other_9)));
      var tmp_0 = j;
      // Inline function 'kotlin.ULong.and' call
      var this_12 = lowResult;
      var other_10 = this.baseMask_1;
      var tmp$ret$21 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_12).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_10)));
      ULongArray__set_impl_z19mvh(result, tmp_0, tmp$ret$21);
      var highResult = middleCarry;
      // Inline function 'kotlin.ULong.shl' call
      // Inline function 'kotlin.ULong.times' call
      var this_13 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(firstHigh).times_nfzjiw_k$(_ULong___get_data__impl__fggpzb(secondHigh)));
      var higherProduct = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_13).shl_bg8if3_k$(1));
      // Inline function 'kotlin.ULong.plus' call
      var this_14 = highResult;
      highResult = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_14).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(higherProduct)));
      carryIntoNextRound = highResult;
      j = j + 1 | 0;
    }
    if (!equals(carryIntoNextRound, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      ULongArray__set_impl_z19mvh(result, j, carryIntoNextRound);
    }
    return result;
  };
  protoOf(BigInteger63Arithmetic).multiply_yu9lq0_k$ = function (first, second) {
    if (equals(first, _ULong___init__impl__c78o9k(new Long(0, 0))) ? true : equals(second, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ulongArrayOf' call
      return _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0))]));
    }
    // Inline function 'kotlin.ULong.and' call
    var other = this.lowMask_1;
    var firstLow = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(first).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
    // Inline function 'kotlin.ULong.shr' call
    var firstHigh = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(first).ushr_z7nmq8_k$(32));
    // Inline function 'kotlin.ULong.and' call
    var other_0 = this.lowMask_1;
    var secondLow = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(second).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_0)));
    // Inline function 'kotlin.ULong.shr' call
    var secondHigh = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(second).ushr_z7nmq8_k$(32));
    // Inline function 'kotlin.ULong.times' call
    var lowerProduct = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(firstLow).times_nfzjiw_k$(_ULong___get_data__impl__fggpzb(secondLow)));
    // Inline function 'kotlin.ULong.shr' call
    var lowCarry = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(lowerProduct).ushr_z7nmq8_k$(63));
    // Inline function 'kotlin.ULong.and' call
    var other_1 = this.baseMask_1;
    var lowResult = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(lowerProduct).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_1)));
    // Inline function 'kotlin.ULong.plus' call
    // Inline function 'kotlin.ULong.times' call
    var this_0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(firstLow).times_nfzjiw_k$(_ULong___get_data__impl__fggpzb(secondHigh)));
    // Inline function 'kotlin.ULong.times' call
    var other_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(secondLow).times_nfzjiw_k$(_ULong___get_data__impl__fggpzb(firstHigh)));
    var middleProduct = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other_2)));
    var middleCarry = lowCarry;
    // Inline function 'kotlin.ULong.plus' call
    var this_1 = middleCarry;
    // Inline function 'kotlin.ULong.shr' call
    var other_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(middleProduct).ushr_z7nmq8_k$(31));
    middleCarry = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other_3)));
    // Inline function 'kotlin.ULong.plus' call
    var this_2 = lowResult;
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.ULong.shl' call
    var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(middleProduct).shl_bg8if3_k$(32));
    var other_4 = this.baseMask_1;
    var other_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_4)));
    lowResult = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other_5)));
    // Inline function 'kotlin.ULong.plus' call
    var this_4 = middleCarry;
    // Inline function 'kotlin.ULong.shr' call
    var this_5 = lowResult;
    var other_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).ushr_z7nmq8_k$(63));
    middleCarry = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other_6)));
    var highResult = middleCarry;
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.times' call
    var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(firstHigh).times_nfzjiw_k$(_ULong___get_data__impl__fggpzb(secondHigh)));
    var higherProduct = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_6).shl_bg8if3_k$(1));
    // Inline function 'kotlin.ULong.plus' call
    var this_7 = highResult;
    highResult = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_7).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(higherProduct)));
    // Inline function 'kotlin.ulongArrayOf' call
    // Inline function 'kotlin.ULong.and' call
    var this_8 = lowResult;
    var other_7 = this.baseMask_1;
    var tmp$ret$21 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_8).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_7)));
    var tmp$ret$22 = _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$21, highResult]));
    return this.removeLeadingZeros_hl2d3p_k$(tmp$ret$22);
  };
  protoOf(BigInteger63Arithmetic).pow_l8706q_k$ = function (base, exponent) {
    if (exponent.equals(new Long(0, 0))) {
      return this.ONE_1;
    }
    if (exponent.equals(new Long(1, 0))) {
      return base;
    }
    if ((_ULongArray___get_size__impl__ju6dtr(base) === 1 ? equals(ULongArray__get_impl_pr71q9(base, 0), _ULong___init__impl__c78o9k(new Long(10, 0))) : false) ? exponent.compareTo_9jj042_k$(toLong(this.powersOf10__1.length)) < 0 : false) {
      return this.powersOf10__1[exponent.toInt_1tsl84_k$()].storage_1;
    }
    var firstCorrectedSize = _ULongArray___get_size__impl__ju6dtr(base) - this.countLeadingZeroWords_blnloi_k$(base) | 0;
    var helperVar = this.ONE_1;
    var exponentVar = exponent;
    var baseVar = base;
    while (exponentVar.compareTo_9jj042_k$(new Long(1, 0)) > 0) {
      // Inline function 'kotlin.Long.rem' call
      if (exponentVar.rem_bsnl9o_k$(toLong(2)).equals(new Long(0, 0))) {
        baseVar = this.times_spd79k_k$(baseVar, baseVar);
        // Inline function 'kotlin.Long.div' call
        exponentVar = exponentVar.div_jun7gj_k$(toLong(2));
      } else {
        helperVar = this.times_spd79k_k$(baseVar, helperVar);
        baseVar = this.times_spd79k_k$(baseVar, baseVar);
        // Inline function 'kotlin.Long.div' call
        // Inline function 'kotlin.Long.minus' call
        exponentVar = exponentVar.minus_mfbszm_k$(toLong(1)).div_jun7gj_k$(toLong(2));
      }
    }
    return this.times_spd79k_k$(helperVar, baseVar);
  };
  protoOf(BigInteger63Arithmetic).normalize_2uyjb1_k$ = function (dividend, divisor) {
    var divisorSize = _ULongArray___get_size__impl__ju6dtr(divisor);
    var normalizationShift = this.numberOfLeadingZerosInAWord_pgcg7w_k$(ULongArray__get_impl_pr71q9(divisor, divisorSize - 1 | 0));
    var divisorNormalized = this.shl_bajctt_k$(divisor, normalizationShift);
    var dividendNormalized = this.shl_bajctt_k$(dividend, normalizationShift);
    return new Triple(new ULongArray(dividendNormalized), new ULongArray(divisorNormalized), normalizationShift);
  };
  protoOf(BigInteger63Arithmetic).normalize_52zr8l_k$ = function (operand) {
    var normalizationShift = this.numberOfLeadingZerosInAWord_pgcg7w_k$(ULongArray__get_impl_pr71q9(operand, _ULongArray___get_size__impl__ju6dtr(operand) - 1 | 0));
    return new Pair(new ULongArray(this.shl_bajctt_k$(operand, normalizationShift)), normalizationShift);
  };
  protoOf(BigInteger63Arithmetic).denormalize_fsx14_k$ = function (remainderNormalized, normalizationShift) {
    var remainder = this.shr_wxaux5_k$(remainderNormalized, normalizationShift);
    return remainder;
  };
  protoOf(BigInteger63Arithmetic).baseDivide_dgg146_k$ = function (unnormalizedDividend, unnormalizedDivisor) {
    if (this.compareTo_rqoxvi_k$(unnormalizedDivisor, unnormalizedDividend) > 0) {
      return new Pair(new ULongArray(this.ZERO_1), new ULongArray(unnormalizedDividend));
    }
    if (_ULongArray___get_size__impl__ju6dtr(unnormalizedDivisor) === 1 ? _ULongArray___get_size__impl__ju6dtr(unnormalizedDividend) === 1 : false) {
      // Inline function 'kotlin.ulongArrayOf' call
      // Inline function 'kotlin.ULong.div' call
      var this_0 = ULongArray__get_impl_pr71q9(unnormalizedDividend, 0);
      var other = ULongArray__get_impl_pr71q9(unnormalizedDivisor, 0);
      var tmp$ret$0 = ulongDivide(this_0, other);
      var tmp$ret$1 = _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$0]));
      var tmp = this.removeLeadingZeros_hl2d3p_k$(tmp$ret$1);
      // Inline function 'kotlin.ulongArrayOf' call
      // Inline function 'kotlin.ULong.rem' call
      var this_1 = ULongArray__get_impl_pr71q9(unnormalizedDividend, 0);
      var other_0 = ULongArray__get_impl_pr71q9(unnormalizedDivisor, 0);
      var tmp$ret$2 = ulongRemainder(this_1, other_0);
      var tmp$ret$3 = _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$2]));
      return new Pair(new ULongArray(tmp), new ULongArray(this.removeLeadingZeros_hl2d3p_k$(tmp$ret$3)));
    }
    var bitPrecision = this.bitLength_pgr2wb_k$(unnormalizedDividend) - this.bitLength_pgr2wb_k$(unnormalizedDivisor) | 0;
    if (bitPrecision === 0) {
      return new Pair(new ULongArray(this.ONE_1), new ULongArray(this.minus_dhhhr6_k$(unnormalizedDividend, unnormalizedDivisor)));
    }
    var tmp0_container = this.normalize_2uyjb1_k$(unnormalizedDividend, unnormalizedDivisor);
    var dividend = tmp0_container.component1_7eebsc_k$().storage_1;
    var divisor = tmp0_container.component2_7eebsb_k$().storage_1;
    var normalizationShift = tmp0_container.component3_7eebsa_k$();
    var dividendSize = _ULongArray___get_size__impl__ju6dtr(dividend);
    var divisorSize = _ULongArray___get_size__impl__ju6dtr(divisor);
    var divisorCorrectedSize = _ULongArray___get_size__impl__ju6dtr(divisor) - this.countLeadingZeroWords_blnloi_k$(divisor) | 0;
    var wordPrecision = dividendSize - divisorSize | 0;
    var qjhat;
    var reconstructedQuotient;
    var quotient = _ULongArray___init__impl__twm1l3_0(wordPrecision);
    var divisorTimesBaseToPowerOfM = this.shl_bajctt_k$(divisor, imul(wordPrecision, this.basePowerOfTwo_1));
    if (this.compareTo_rqoxvi_k$(dividend, divisorTimesBaseToPowerOfM) >= 0) {
      quotient = _ULongArray___init__impl__twm1l3_0(wordPrecision + 1 | 0);
      ULongArray__set_impl_z19mvh(quotient, wordPrecision, _ULong___init__impl__c78o9k(new Long(1, 0)));
      dividend = this.minus_dhhhr6_k$(dividend, divisorTimesBaseToPowerOfM);
    }
    var inductionVariable = wordPrecision - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_0;
        if ((divisorSize + j | 0) < _ULongArray___get_size__impl__ju6dtr(dividend)) {
          // Inline function 'kotlin.ulongArrayOf' call
          var tmp$ret$4 = _ULongArray___init__impl__twm1l3(longArrayOf([ULongArray__get_impl_pr71q9(dividend, divisorSize + j | 0)]));
          tmp_0 = this.plus_vebw13_k$(this.shl_bajctt_k$(tmp$ret$4, this.basePowerOfTwo_1), ULongArray__get_impl_pr71q9(dividend, (divisorSize + j | 0) - 1 | 0));
        } else {
          var tmp_1;
          if ((divisorSize + j | 0) === _ULongArray___get_size__impl__ju6dtr(dividend)) {
            // Inline function 'kotlin.ulongArrayOf' call
            tmp_1 = _ULongArray___init__impl__twm1l3(longArrayOf([ULongArray__get_impl_pr71q9(dividend, (divisorSize + j | 0) - 1 | 0)]));
          } else {
            tmp_1 = this.ZERO_1;
          }
          tmp_0 = tmp_1;
        }
        var twoDigit = tmp_0;
        var tmp_2 = BigInteger32Arithmetic_getInstance();
        var tmp_3 = this.to32Bit_4ee8qi_k$(twoDigit);
        // Inline function 'kotlin.ulongArrayOf' call
        var tmp$ret$6 = _ULongArray___init__impl__twm1l3(longArrayOf([ULongArray__get_impl_pr71q9(divisor, divisorSize - 1 | 0)]));
        var convertedResult = tmp_2.divide_9m0nlz_k$(tmp_3, this.to32Bit_4ee8qi_k$(tmp$ret$6));
        qjhat = this.from32Bit_ys3bk6_k$(convertedResult.get_first_irdx8n_k$().storage_1);
        var tmp_4 = quotient;
        var tmp_5;
        var tmp_6 = qjhat;
        // Inline function 'kotlin.ULong.minus' call
        var this_2 = this.baseMask_1;
        var other_1 = _ULong___init__impl__c78o9k(new Long(1, 0));
        var tmp$ret$7 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).minus_mfbszm_k$(_ULong___get_data__impl__fggpzb(other_1)));
        if (this.compareTo_u5d14v_k$(tmp_6, tmp$ret$7) < 0) {
          tmp_5 = ULongArray__get_impl_pr71q9(qjhat, 0);
        } else {
          tmp_5 = this.baseMask_1;
        }
        ULongArray__set_impl_z19mvh(tmp_4, j, tmp_5);
        reconstructedQuotient = this.shl_bajctt_k$(this.baseMultiplyWithCorrectedSize_icegmq_k$(divisor, ULongArray__get_impl_pr71q9(quotient, j), divisorCorrectedSize), imul(j, this.basePowerOfTwo_1));
        while (this.compareTo_rqoxvi_k$(reconstructedQuotient, dividend) > 0) {
          var tmp_7 = quotient;
          // Inline function 'kotlin.ULong.minus' call
          var this_3 = ULongArray__get_impl_pr71q9(quotient, j);
          // Inline function 'kotlin.ULong.minus' call
          // Inline function 'kotlin.UInt.toULong' call
          var this_4 = _UInt___init__impl__l7qpdl(1);
          var other_2 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_4)).and_4spn93_k$(new Long(-1, 0)));
          var tmp$ret$10 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).minus_mfbszm_k$(_ULong___get_data__impl__fggpzb(other_2)));
          ULongArray__set_impl_z19mvh(tmp_7, j, tmp$ret$10);
          reconstructedQuotient = this.shl_bajctt_k$(this.baseMultiplyWithCorrectedSize_icegmq_k$(divisor, ULongArray__get_impl_pr71q9(quotient, j), divisorCorrectedSize), imul(j, this.basePowerOfTwo_1));
        }
        dividend = this.minus_dhhhr6_k$(dividend, reconstructedQuotient);
      }
       while (0 <= inductionVariable);
    while (this.compareTo_rqoxvi_k$(dividend, divisor) >= 0) {
      quotient = this.plus_vebw13_k$(quotient, _ULong___init__impl__c78o9k(new Long(1, 0)));
      dividend = this.minus_dhhhr6_k$(dividend, divisor);
    }
    var denormRemainder = this.denormalize_fsx14_k$(dividend, normalizationShift);
    return new Pair(new ULongArray(this.removeLeadingZeros_hl2d3p_k$(quotient)), new ULongArray(denormRemainder));
  };
  protoOf(BigInteger63Arithmetic).basicDivide2_n2da7v_k$ = function (unnormalizedDividend, unnormalizedDivisor) {
    var tmp0_container = this.normalize_2uyjb1_k$(unnormalizedDividend, unnormalizedDivisor);
    var a = tmp0_container.component1_7eebsc_k$().storage_1;
    var b = tmp0_container.component2_7eebsb_k$().storage_1;
    var shift = tmp0_container.component3_7eebsa_k$();
    var m = _ULongArray___get_size__impl__ju6dtr(a) - _ULongArray___get_size__impl__ju6dtr(b) | 0;
    var bmb = this.shl_bajctt_k$(b, imul(m, this.wordSizeInBits_1));
    // Inline function 'kotlin.ULongArray' call
    var tmp = 0;
    var tmp_0 = m + 1 | 0;
    var tmp_1 = longArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.ULong.toLong' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.basicDivide2.<anonymous>' call
      var this_0 = _ULong___init__impl__c78o9k(new Long(0, 0));
      tmp_1[tmp_2] = _ULong___get_data__impl__fggpzb(this_0);
      tmp = tmp + 1 | 0;
    }
    var q = _ULongArray___init__impl__twm1l3(tmp_1);
    if (this.compareTo_rqoxvi_k$(a, bmb) > 0) {
      ULongArray__set_impl_z19mvh(q, m, _ULong___init__impl__c78o9k(new Long(1, 0)));
      a = this.minus_dhhhr6_k$(a, bmb);
    }
    var qjhat = this.ZERO_1;
    var qjhatULong = this.ZERO_1;
    var bjb = this.ZERO_1;
    var delta = this.ZERO_1;
    var inductionVariable = m - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var tmp_3 = BigInteger32Arithmetic_getInstance();
        // Inline function 'kotlin.collections.copyOfRange' call
        var this_1 = a;
        var fromIndex = _ULongArray___get_size__impl__ju6dtr(b) - 1 | 0;
        var toIndex = _ULongArray___get_size__impl__ju6dtr(b) + 1 | 0;
        var tmp$ret$4 = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(this_1), fromIndex, toIndex));
        var tmp_4 = this.to32Bit_4ee8qi_k$(tmp$ret$4);
        // Inline function 'kotlin.ulongArrayOf' call
        var tmp$ret$5 = _ULongArray___init__impl__twm1l3(longArrayOf([ULongArray__get_impl_pr71q9(b, _ULongArray___get_size__impl__ju6dtr(b) - 1 | 0)]));
        qjhatULong = this.from32Bit_ys3bk6_k$(tmp_3.divide_9m0nlz_k$(tmp_4, this.to32Bit_4ee8qi_k$(tmp$ret$5)).get_first_irdx8n_k$().storage_1);
        ULongArray__set_impl_z19mvh(q, j, ULongArray__get_impl_pr71q9(this.min_aoj3pm_k$(qjhatULong, this.baseMaskArray_1), 0));
        bjb = this.shl_bajctt_k$(b, imul(j, BigInteger32Arithmetic_getInstance().get_wordSizeInBits_q6hmfz_k$()));
        var qjBjb = this.shl_bajctt_k$(this.times_dwwo31_k$(b, ULongArray__get_impl_pr71q9(q, j)), imul(j, this.wordSizeInBits_1));
        if (this.compareTo_rqoxvi_k$(qjBjb, a) > 0) {
          delta = this.minus_dhhhr6_k$(qjBjb, a);
          while (this.compareTo_rqoxvi_k$(delta, qjBjb) > 0) {
            var tmp_5 = q;
            // Inline function 'kotlin.ULong.minus' call
            var this_2 = ULongArray__get_impl_pr71q9(q, j);
            // Inline function 'kotlin.ULong.minus' call
            // Inline function 'kotlin.UInt.toULong' call
            var this_3 = _UInt___init__impl__l7qpdl(1);
            var other = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_3)).and_4spn93_k$(new Long(-1, 0)));
            var tmp$ret$8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).minus_mfbszm_k$(_ULong___get_data__impl__fggpzb(other)));
            ULongArray__set_impl_z19mvh(tmp_5, j, tmp$ret$8);
            delta = this.minus_dhhhr6_k$(delta, bjb);
          }
          a = this.shl_bajctt_k$(this.minus_dhhhr6_k$(a, this.times_dwwo31_k$(b, ULongArray__get_impl_pr71q9(q, j))), imul(j, BigInteger32Arithmetic_getInstance().get_wordSizeInBits_q6hmfz_k$()));
        } else {
          a = this.minus_dhhhr6_k$(a, qjBjb);
        }
      }
       while (0 <= inductionVariable);
    var denormRemainder = this.denormalize_fsx14_k$(a, shift);
    return new Pair(new ULongArray(this.removeLeadingZeros_hl2d3p_k$(q)), new ULongArray(denormRemainder));
  };
  protoOf(BigInteger63Arithmetic).exactDivideBy3_9ojiwg_k$ = function (operand) {
    var base = Companion_getInstance_6().get_ONE_18jnkz_k$().shl_bg8if3_k$(imul(_ULongArray___get_size__impl__ju6dtr(operand), 63));
    var creator = Companion_getInstance_7().creatorForModulo_exd2r5_k$(base);
    var reciprocalOf3 = creator.fromInt_wjro43_k$(3).inverse_wevods_k$();
    var multipliedByInverse = this.multiply_2l587c_k$(operand, toULongArray(new ULongArray(reciprocalOf3.toBigInteger_xwiad5_k$().get_magnitude_98l7vf_k$())));
    // Inline function 'kotlin.collections.indices' call
    var tmp$ret$0 = get_indices(_ULongArray___get_storage__impl__28e64j(operand));
    return toULongArray(slice_0(multipliedByInverse, tmp$ret$0));
  };
  protoOf(BigInteger63Arithmetic).exactDivideBy3Better_xsswgw_k$ = function (operand) {
    return operand;
  };
  protoOf(BigInteger63Arithmetic).reciprocal_8ovoxe_k$ = function (operand) {
    return this.d1ReciprocalRecursiveWordVersion_87t7vp_k$(operand);
  };
  protoOf(BigInteger63Arithmetic).d1ReciprocalRecursive_4ud3r1_k$ = function (a) {
    var fullBitLenght = this.bitLength_pgr2wb_k$(a);
    var tmp;
    if (fullBitLenght > 63) {
      tmp = fullBitLenght - 63 | 0;
    } else {
      tmp = fullBitLenght;
    }
    var n = tmp;
    if (n <= 30) {
      // Inline function 'kotlin.ULong.shl' call
      var this_0 = _ULong___init__impl__c78o9k(new Long(1, 0));
      var bitCount = imul(n, 2);
      var rhoPowered = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).shl_bg8if3_k$(bitCount));
      var longA = ULongArray__get_impl_pr71q9(a, 0);
      // Inline function 'kotlin.ULong.div' call
      var x = ulongDivide(rhoPowered, longA);
      // Inline function 'kotlin.ULong.minus' call
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(x).times_nfzjiw_k$(_ULong___get_data__impl__fggpzb(longA)));
      var r = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(rhoPowered).minus_mfbszm_k$(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.ulongArrayOf' call
      var tmp_0 = _ULongArray___init__impl__twm1l3(longArrayOf([x]));
      // Inline function 'kotlin.ulongArrayOf' call
      var tmp$ret$5 = _ULongArray___init__impl__twm1l3(longArrayOf([r]));
      return new Pair(new ULongArray(tmp_0), new ULongArray(tmp$ret$5));
    }
    // Inline function 'kotlin.math.floor' call
    var x_0 = (n - 1 | 0) / 2;
    var tmp$ret$6 = Math.floor(x_0);
    var l = numberToInt(tmp$ret$6);
    var h = n - l | 0;
    var mask = this.minus_dhhhr6_k$(this.shl_bajctt_k$(this.ONE_1, l), this.ONE_1);
    var ah = this.shr_wxaux5_k$(a, l);
    var al = this.and_6i7kg5_k$(a, mask);
    var tmp0_container = this.d1ReciprocalRecursive_4ud3r1_k$(ah);
    var xh = tmp0_container.component1_7eebsc_k$().storage_1;
    var rh = tmp0_container.component2_7eebsb_k$().storage_1;
    var s = this.times_spd79k_k$(al, xh);
    var rhRhoL = this.shl_bajctt_k$(rh, l);
    var tmp_1;
    if (this.compareTo_rqoxvi_k$(rhRhoL, s) >= 0) {
      tmp_1 = this.minus_dhhhr6_k$(rhRhoL, s);
    } else {
      xh = this.minus_dhhhr6_k$(xh, this.ONE_1);
      tmp_1 = this.minus_dhhhr6_k$(this.plus_g611sc_k$(rhRhoL, a), s);
    }
    var t = tmp_1;
    var tm = this.shr_wxaux5_k$(t, h);
    var d = this.shr_wxaux5_k$(this.times_spd79k_k$(xh, tm), h);
    var x_1 = this.plus_g611sc_k$(this.shl_bajctt_k$(xh, l), d);
    var r_0 = this.minus_dhhhr6_k$(this.shl_bajctt_k$(t, l), this.times_spd79k_k$(a, d));
    if (this.compareTo_rqoxvi_k$(r_0, a) >= 0) {
      x_1 = this.plus_g611sc_k$(x_1, this.ONE_1);
      r_0 = this.minus_dhhhr6_k$(r_0, a);
      if (this.compareTo_rqoxvi_k$(r_0, a) >= 0) {
        x_1 = this.plus_g611sc_k$(x_1, this.ONE_1);
        r_0 = this.minus_dhhhr6_k$(r_0, a);
      }
    }
    return new Pair(new ULongArray(x_1), new ULongArray(r_0));
  };
  protoOf(BigInteger63Arithmetic).d1ReciprocalRecursiveWordVersion_87t7vp_k$ = function (a) {
    var n = _ULongArray___get_size__impl__ju6dtr(a) - 1 | 0;
    if (n <= 2) {
      var tmp;
      if (n === 0) {
        tmp = 1;
      } else {
        tmp = n;
      }
      var corrected = tmp;
      var rhoPowered = this.shl_bajctt_k$(this.ONE_1, imul(imul(corrected, 2), this.wordSizeInBits_1));
      var x = this.div_s0tcn1_k$(rhoPowered, a);
      var r = this.minus_dhhhr6_k$(rhoPowered, this.times_spd79k_k$(x, a));
      return new Pair(new ULongArray(x), new ULongArray(r));
    }
    // Inline function 'kotlin.math.floor' call
    var x_0 = (n - 1 | 0) / 2;
    var tmp$ret$0 = Math.floor(x_0);
    var l = numberToInt(tmp$ret$0);
    var h = n - l | 0;
    // Inline function 'kotlin.collections.copyOfRange' call
    var fromIndex = (_ULongArray___get_size__impl__ju6dtr(a) - h | 0) - 1 | 0;
    var toIndex = _ULongArray___get_size__impl__ju6dtr(a);
    var ah = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(a), fromIndex, toIndex));
    // Inline function 'kotlin.collections.copyOfRange' call
    var al = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(a), 0, l));
    var tmp0_container = this.d1ReciprocalRecursiveWordVersion_87t7vp_k$(ah);
    var xh = tmp0_container.component1_7eebsc_k$().storage_1;
    var rh = tmp0_container.component2_7eebsb_k$().storage_1;
    var s = this.times_spd79k_k$(al, xh);
    var rhRhoL = this.shl_bajctt_k$(rh, imul(l, this.wordSizeInBits_1));
    var tmp_0;
    if (this.compareTo_rqoxvi_k$(rhRhoL, s) >= 0) {
      tmp_0 = this.minus_dhhhr6_k$(rhRhoL, s);
    } else {
      xh = this.minus_dhhhr6_k$(xh, this.ONE_1);
      tmp_0 = this.minus_dhhhr6_k$(this.plus_g611sc_k$(rhRhoL, a), s);
    }
    var t = tmp_0;
    var tm = this.shr_wxaux5_k$(t, imul(h, this.wordSizeInBits_1));
    var d = this.shr_wxaux5_k$(this.times_spd79k_k$(xh, tm), imul(h, this.wordSizeInBits_1));
    var x_1 = this.plus_g611sc_k$(this.shl_bajctt_k$(xh, imul(l, this.wordSizeInBits_1)), d);
    var r_0 = this.minus_dhhhr6_k$(this.shl_bajctt_k$(t, imul(l, this.wordSizeInBits_1)), this.times_spd79k_k$(a, d));
    if (this.compareTo_rqoxvi_k$(r_0, a) >= 0) {
      x_1 = this.plus_g611sc_k$(x_1, this.ONE_1);
      r_0 = this.minus_dhhhr6_k$(r_0, a);
      if (this.compareTo_rqoxvi_k$(r_0, a) >= 0) {
        x_1 = this.plus_g611sc_k$(x_1, this.ONE_1);
        r_0 = this.minus_dhhhr6_k$(r_0, a);
      }
    }
    return new Pair(new ULongArray(x_1), new ULongArray(r_0));
  };
  protoOf(BigInteger63Arithmetic).convertTo64BitRepresentation_39rx0m_k$ = function (operand) {
    if (isZero(operand, this))
      return this.ZERO_1;
    var length = this.bitLength_pgr2wb_k$(operand);
    var tmp;
    if ((length % 64 | 0) === 0) {
      tmp = length / 64 | 0;
    } else {
      tmp = (length / 64 | 0) + 1 | 0;
    }
    var requiredLength = tmp;
    var wordStep;
    var shiftAmount;
    var result = _ULongArray___init__impl__twm1l3_0(requiredLength);
    var inductionVariable = 0;
    if (inductionVariable < requiredLength)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        wordStep = i / 63 | 0;
        shiftAmount = i % 63 | 0;
        if (((i + wordStep | 0) + 1 | 0) < _ULongArray___get_size__impl__ju6dtr(operand)) {
          // Inline function 'kotlin.ULong.or' call
          // Inline function 'kotlin.ULong.shr' call
          var this_0 = ULongArray__get_impl_pr71q9(operand, i + wordStep | 0);
          var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).ushr_z7nmq8_k$(shiftAmount));
          // Inline function 'kotlin.ULong.shl' call
          var this_2 = ULongArray__get_impl_pr71q9(operand, (i + wordStep | 0) + 1 | 0);
          var bitCount = 63 - shiftAmount | 0;
          var other = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).shl_bg8if3_k$(bitCount));
          var tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other)));
          ULongArray__set_impl_z19mvh(result, i, tmp$ret$2);
        } else {
          // Inline function 'kotlin.ULong.shr' call
          var this_3 = ULongArray__get_impl_pr71q9(operand, i + wordStep | 0);
          var tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).ushr_z7nmq8_k$(shiftAmount));
          ULongArray__set_impl_z19mvh(result, i, tmp$ret$3);
        }
      }
       while (inductionVariable < requiredLength);
    return this.removeLeadingZeros_hl2d3p_k$(result);
  };
  protoOf(BigInteger63Arithmetic).convertTo32BitRepresentation_lnpo3y_k$ = function (operand) {
    var power64Representation = this.convertTo64BitRepresentation_39rx0m_k$(operand);
    var result = _UIntArray___init__impl__ghjpc6_0(imul(_ULongArray___get_size__impl__ju6dtr(power64Representation), 2));
    var inductionVariable = 0;
    var last = _ULongArray___get_size__impl__ju6dtr(power64Representation);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = imul(2, i);
        // Inline function 'kotlin.ULong.toUInt' call
        // Inline function 'kotlin.ULong.and' call
        var this_0 = ULongArray__get_impl_pr71q9(power64Representation, i);
        // Inline function 'kotlin.UInt.toULong' call
        var this_1 = BigInteger32Arithmetic_getInstance().get_base_ram0w0_k$();
        var other = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_1)).and_4spn93_k$(new Long(-1, 0)));
        var this_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
        // Inline function 'kotlin.toUInt' call
        var this_3 = _ULong___get_data__impl__fggpzb(this_2);
        var tmp$ret$3 = _UInt___init__impl__l7qpdl(this_3.toInt_1tsl84_k$());
        UIntArray__set_impl_7f2zu2(result, tmp, tmp$ret$3);
        var tmp_0 = imul(2, i) + 1 | 0;
        // Inline function 'kotlin.ULong.toUInt' call
        // Inline function 'kotlin.ULong.shr' call
        var this_4 = ULongArray__get_impl_pr71q9(power64Representation, i);
        var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).ushr_z7nmq8_k$(32));
        // Inline function 'kotlin.toUInt' call
        var this_6 = _ULong___get_data__impl__fggpzb(this_5);
        var tmp$ret$6 = _UInt___init__impl__l7qpdl(this_6.toInt_1tsl84_k$());
        UIntArray__set_impl_7f2zu2(result, tmp_0, tmp$ret$6);
      }
       while (inductionVariable < last);
    return BigInteger32Arithmetic_getInstance().removeLeadingZeros_ited7a_k$(result);
  };
  protoOf(BigInteger63Arithmetic).convertFrom32BitRepresentation_1w3khe_k$ = function (operand) {
    if (_UIntArray___get_size__impl__r6l8ci(operand) === 0) {
      return this.ZERO_1;
    }
    if (_UIntArray___get_size__impl__r6l8ci(operand) === 1) {
      // Inline function 'kotlin.ulongArrayOf' call
      // Inline function 'kotlin.UInt.toULong' call
      var this_0 = UIntArray__get_impl_gp5kza(operand, 0);
      var tmp$ret$0 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_0)).and_4spn93_k$(new Long(-1, 0)));
      return _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$0]));
    }
    var length = BigInteger32Arithmetic_getInstance().bitLength_5uyy7h_k$(operand);
    var tmp;
    if ((length % 63 | 0) === 0) {
      tmp = length / 63 | 0;
    } else {
      tmp = (length / 63 | 0) + 1 | 0;
    }
    var requiredLength = tmp;
    var result = _ULongArray___init__impl__twm1l3_0(requiredLength);
    var skipWordCount;
    var inductionVariable = 0;
    if (inductionVariable < requiredLength)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        skipWordCount = i / 32 | 0;
        var shiftAmount = i % 32 | 0;
        var position = imul(i, 2) - skipWordCount | 0;
        if (requiredLength === 2) {
          // Inline function 'kotlin.ULong.or' call
          // Inline function 'kotlin.UInt.toULong' call
          var this_1 = UIntArray__get_impl_gp5kza(operand, 0);
          var this_2 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_1)).and_4spn93_k$(new Long(-1, 0)));
          // Inline function 'kotlin.ULong.and' call
          // Inline function 'kotlin.ULong.shl' call
          // Inline function 'kotlin.UInt.toULong' call
          var this_3 = UIntArray__get_impl_gp5kza(operand, 1);
          var this_4 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_3)).and_4spn93_k$(new Long(-1, 0)));
          var this_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).shl_bg8if3_k$(32));
          var other = this.highMask_1;
          var other_0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
          var tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other_0)));
          ULongArray__set_impl_z19mvh(result, 0, tmp$ret$6);
          if (_UIntArray___get_size__impl__r6l8ci(operand) === 4) {
            // Inline function 'kotlin.ULong.or' call
            // Inline function 'kotlin.ULong.or' call
            // Inline function 'kotlin.ULong.shr' call
            // Inline function 'kotlin.UInt.toULong' call
            var this_6 = UIntArray__get_impl_gp5kza(operand, 1);
            var this_7 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_6)).and_4spn93_k$(new Long(-1, 0)));
            var this_8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_7).ushr_z7nmq8_k$(31));
            // Inline function 'kotlin.ULong.shl' call
            // Inline function 'kotlin.UInt.toULong' call
            var this_9 = UIntArray__get_impl_gp5kza(operand, 2);
            var this_10 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_9)).and_4spn93_k$(new Long(-1, 0)));
            var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_10).shl_bg8if3_k$(1));
            var this_11 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_8).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other_1)));
            // Inline function 'kotlin.ULong.shl' call
            // Inline function 'kotlin.UInt.toULong' call
            var this_12 = UIntArray__get_impl_gp5kza(operand, 3);
            var this_13 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_12)).and_4spn93_k$(new Long(-1, 0)));
            var other_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_13).shl_bg8if3_k$(33));
            var tmp$ret$14 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_11).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other_2)));
            ULongArray__set_impl_z19mvh(result, 1, tmp$ret$14);
          } else {
            if (_UIntArray___get_size__impl__r6l8ci(operand) > 2) {
              // Inline function 'kotlin.ULong.or' call
              // Inline function 'kotlin.ULong.shr' call
              // Inline function 'kotlin.UInt.toULong' call
              var this_14 = UIntArray__get_impl_gp5kza(operand, 1);
              var this_15 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_14)).and_4spn93_k$(new Long(-1, 0)));
              var this_16 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_15).ushr_z7nmq8_k$(31));
              // Inline function 'kotlin.ULong.shl' call
              // Inline function 'kotlin.UInt.toULong' call
              var this_17 = UIntArray__get_impl_gp5kza(operand, 2);
              var this_18 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_17)).and_4spn93_k$(new Long(-1, 0)));
              var other_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_18).shl_bg8if3_k$(1));
              var tmp$ret$19 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_16).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other_3)));
              ULongArray__set_impl_z19mvh(result, 1, tmp$ret$19);
            } else {
              // Inline function 'kotlin.ULong.shr' call
              // Inline function 'kotlin.UInt.toULong' call
              var this_19 = UIntArray__get_impl_gp5kza(operand, 1);
              var this_20 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_19)).and_4spn93_k$(new Long(-1, 0)));
              var tmp$ret$21 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_20).ushr_z7nmq8_k$(31));
              ULongArray__set_impl_z19mvh(result, 1, tmp$ret$21);
            }
          }
        } else {
          if (i === 0) {
            // Inline function 'kotlin.ULong.or' call
            // Inline function 'kotlin.UInt.toULong' call
            var this_21 = UIntArray__get_impl_gp5kza(operand, 0);
            var this_22 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_21)).and_4spn93_k$(new Long(-1, 0)));
            // Inline function 'kotlin.ULong.and' call
            // Inline function 'kotlin.ULong.shl' call
            // Inline function 'kotlin.UInt.toULong' call
            var this_23 = UIntArray__get_impl_gp5kza(operand, 1);
            var this_24 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_23)).and_4spn93_k$(new Long(-1, 0)));
            var this_25 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_24).shl_bg8if3_k$(32));
            var other_4 = this.highMask_1;
            var other_5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_25).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_4)));
            var tmp$ret$26 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_22).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other_5)));
            ULongArray__set_impl_z19mvh(result, i, tmp$ret$26);
          } else if (1 <= i ? i < (requiredLength - 1 | 0) : false) {
            // Inline function 'kotlin.ULong.or' call
            // Inline function 'kotlin.ULong.or' call
            // Inline function 'kotlin.ULong.shr' call
            // Inline function 'kotlin.UInt.toULong' call
            var this_26 = UIntArray__get_impl_gp5kza(operand, position - 1 | 0);
            var this_27 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_26)).and_4spn93_k$(new Long(-1, 0)));
            var bitCount = 32 - shiftAmount | 0;
            var this_28 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_27).ushr_z7nmq8_k$(bitCount));
            // Inline function 'kotlin.ULong.shl' call
            // Inline function 'kotlin.UInt.toULong' call
            var this_29 = UIntArray__get_impl_gp5kza(operand, position);
            var this_30 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_29)).and_4spn93_k$(new Long(-1, 0)));
            var other_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_30).shl_bg8if3_k$(shiftAmount));
            var this_31 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_28).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other_6)));
            // Inline function 'kotlin.ULong.and' call
            // Inline function 'kotlin.ULong.shl' call
            // Inline function 'kotlin.UInt.toULong' call
            var this_32 = UIntArray__get_impl_gp5kza(operand, position + 1 | 0);
            var this_33 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_32)).and_4spn93_k$(new Long(-1, 0)));
            var bitCount_0 = 32 + shiftAmount | 0;
            var this_34 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_33).shl_bg8if3_k$(bitCount_0));
            var other_7 = this.highMask_1;
            var other_8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_34).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_7)));
            var tmp$ret$35 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_31).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other_8)));
            ULongArray__set_impl_z19mvh(result, i, tmp$ret$35);
          } else if (i === (requiredLength - 1 | 0)) {
            if (position < _UIntArray___get_size__impl__r6l8ci(operand)) {
              // Inline function 'kotlin.ULong.or' call
              // Inline function 'kotlin.ULong.shr' call
              // Inline function 'kotlin.UInt.toULong' call
              var this_35 = UIntArray__get_impl_gp5kza(operand, position - 1 | 0);
              var this_36 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_35)).and_4spn93_k$(new Long(-1, 0)));
              var bitCount_1 = 32 - shiftAmount | 0;
              var this_37 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_36).ushr_z7nmq8_k$(bitCount_1));
              // Inline function 'kotlin.ULong.shl' call
              // Inline function 'kotlin.UInt.toULong' call
              var this_38 = UIntArray__get_impl_gp5kza(operand, position);
              var this_39 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_38)).and_4spn93_k$(new Long(-1, 0)));
              var other_9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_39).shl_bg8if3_k$(shiftAmount));
              var tmp$ret$40 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_37).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other_9)));
              ULongArray__set_impl_z19mvh(result, i, tmp$ret$40);
            } else {
              // Inline function 'kotlin.ULong.shr' call
              // Inline function 'kotlin.UInt.toULong' call
              var this_40 = UIntArray__get_impl_gp5kza(operand, position - 1 | 0);
              var this_41 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_40)).and_4spn93_k$(new Long(-1, 0)));
              var bitCount_2 = 32 - shiftAmount | 0;
              var tmp$ret$42 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_41).ushr_z7nmq8_k$(bitCount_2));
              ULongArray__set_impl_z19mvh(result, i, tmp$ret$42);
            }
          }
        }
      }
       while (inductionVariable < requiredLength);
    return result;
  };
  protoOf(BigInteger63Arithmetic).convertFrom64BitRepresentation_wk01md_k$ = function (operand) {
    if (_ULongArray___get_size__impl__ju6dtr(operand) === 0) {
      return this.ZERO_1;
    }
    if (_ULongArray___get_size__impl__ju6dtr(operand) === 1) {
      var result = _ULongArray___init__impl__twm1l3_0(2);
      // Inline function 'kotlin.ULong.and' call
      var this_0 = ULongArray__get_impl_pr71q9(operand, 0);
      var other = this.baseMask_1;
      var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
      ULongArray__set_impl_z19mvh(result, 0, tmp$ret$0);
      // Inline function 'kotlin.ULong.shr' call
      var this_1 = ULongArray__get_impl_pr71q9(operand, 0);
      var tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).ushr_z7nmq8_k$(63));
      ULongArray__set_impl_z19mvh(result, 1, tmp$ret$1);
      return result;
    }
    var length = this.bitLengthFor64BitArray_xi0ya0_k$(operand);
    var tmp;
    if ((length % 63 | 0) === 0) {
      tmp = length / 63 | 0;
    } else {
      tmp = (length / 63 | 0) + 1 | 0;
    }
    var requiredLength = tmp;
    if (requiredLength === 2) {
      var result_0 = _ULongArray___init__impl__twm1l3_0(2);
      // Inline function 'kotlin.ULong.and' call
      var this_2 = ULongArray__get_impl_pr71q9(operand, 0);
      var other_0 = this.baseMask_1;
      var tmp$ret$2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_0)));
      ULongArray__set_impl_z19mvh(result_0, 0, tmp$ret$2);
      // Inline function 'kotlin.ULong.or' call
      // Inline function 'kotlin.ULong.shl' call
      var this_3 = ULongArray__get_impl_pr71q9(operand, 1);
      var this_4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).shl_bg8if3_k$(1));
      // Inline function 'kotlin.ULong.shr' call
      var this_5 = ULongArray__get_impl_pr71q9(operand, 0);
      var other_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).ushr_z7nmq8_k$(63));
      var tmp$ret$5 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other_1)));
      ULongArray__set_impl_z19mvh(result_0, 1, tmp$ret$5);
      return result_0;
    }
    var result_1 = _ULongArray___init__impl__twm1l3_0(requiredLength);
    var skipWordCount;
    var inductionVariable = 0;
    if (inductionVariable < requiredLength)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        skipWordCount = i / 64 | 0;
        var shiftAmount = i % 64 | 0;
        var position = i - skipWordCount | 0;
        if (i === 0) {
          // Inline function 'kotlin.ULong.and' call
          var this_6 = ULongArray__get_impl_pr71q9(operand, 0);
          var other_2 = this.baseMask_1;
          var tmp$ret$6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_6).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_2)));
          ULongArray__set_impl_z19mvh(result_1, i, tmp$ret$6);
        } else if (1 <= i ? i < (requiredLength - 1 | 0) : false) {
          var tmp_0;
          if (shiftAmount > 0) {
            // Inline function 'kotlin.ULong.and' call
            // Inline function 'kotlin.ULong.or' call
            // Inline function 'kotlin.ULong.shr' call
            var this_7 = ULongArray__get_impl_pr71q9(operand, position - 1 | 0);
            var bitCount = 64 - shiftAmount | 0;
            var this_8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_7).ushr_z7nmq8_k$(bitCount));
            // Inline function 'kotlin.ULong.shl' call
            var this_9 = ULongArray__get_impl_pr71q9(operand, position);
            var other_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_9).shl_bg8if3_k$(shiftAmount));
            var this_10 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_8).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other_3)));
            var other_4 = this.baseMask_1;
            tmp_0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_10).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_4)));
          } else {
            // Inline function 'kotlin.ULong.and' call
            // Inline function 'kotlin.ULong.shl' call
            var this_11 = ULongArray__get_impl_pr71q9(operand, position);
            var this_12 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_11).shl_bg8if3_k$(shiftAmount));
            var other_5 = this.baseMask_1;
            tmp_0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_12).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_5)));
          }
          ULongArray__set_impl_z19mvh(result_1, i, tmp_0);
        } else if (i === (requiredLength - 1 | 0)) {
          if (position < _ULongArray___get_size__impl__ju6dtr(operand)) {
            var tmp_1;
            if (shiftAmount > 0) {
              // Inline function 'kotlin.ULong.and' call
              // Inline function 'kotlin.ULong.or' call
              // Inline function 'kotlin.ULong.shr' call
              var this_13 = ULongArray__get_impl_pr71q9(operand, position - 1 | 0);
              var bitCount_0 = 64 - shiftAmount | 0;
              var this_14 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_13).ushr_z7nmq8_k$(bitCount_0));
              // Inline function 'kotlin.ULong.shl' call
              var this_15 = ULongArray__get_impl_pr71q9(operand, position);
              var other_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_15).shl_bg8if3_k$(shiftAmount));
              var this_16 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_14).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other_6)));
              var other_7 = this.baseMask_1;
              tmp_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_16).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_7)));
            } else {
              // Inline function 'kotlin.ULong.and' call
              // Inline function 'kotlin.ULong.shl' call
              var this_17 = ULongArray__get_impl_pr71q9(operand, position);
              var this_18 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_17).shl_bg8if3_k$(shiftAmount));
              var other_8 = this.baseMask_1;
              tmp_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_18).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_8)));
            }
            ULongArray__set_impl_z19mvh(result_1, i, tmp_1);
          } else {
            var tmp_2;
            if (shiftAmount > 0) {
              // Inline function 'kotlin.ULong.shr' call
              var this_19 = ULongArray__get_impl_pr71q9(operand, position - 1 | 0);
              var bitCount_1 = 64 - shiftAmount | 0;
              tmp_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_19).ushr_z7nmq8_k$(bitCount_1));
            } else {
              tmp_2 = _ULong___init__impl__c78o9k(new Long(0, 0));
            }
            ULongArray__set_impl_z19mvh(result_1, i, tmp_2);
          }
        }
      }
       while (inductionVariable < requiredLength);
    return result_1;
  };
  protoOf(BigInteger63Arithmetic).divide_f7otrd_k$ = function (first, second) {
    return this.baseDivide_dgg146_k$(first, second);
  };
  protoOf(BigInteger63Arithmetic).reciprocalDivision_vkkljr_k$ = function (first, second) {
    if (_ULongArray___get_size__impl__ju6dtr(first) < _ULongArray___get_size__impl__ju6dtr(second)) {
      throw RuntimeException_init_$Create$('Invalid division: ' + _ULongArray___get_size__impl__ju6dtr(first) + ' words / ' + _ULongArray___get_size__impl__ju6dtr(second) + ' words');
    }
    var tmp;
    if (_ULongArray___get_size__impl__ju6dtr(second) === 1) {
      tmp = 1;
    } else {
      tmp = _ULongArray___get_size__impl__ju6dtr(second) - 1 | 0;
    }
    var shift = tmp;
    var precisionExtension = (_ULongArray___get_size__impl__ju6dtr(first) - _ULongArray___get_size__impl__ju6dtr(second) | 0) + 1 | 0;
    // Inline function 'kotlin.ULongArray' call
    var tmp_0 = 0;
    var tmp_1 = _ULongArray___get_size__impl__ju6dtr(second) + precisionExtension | 0;
    var tmp_2 = longArray(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      // Inline function 'kotlin.ULong.toLong' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.reciprocalDivision.<anonymous>' call
      var this_0 = tmp_3 >= precisionExtension ? ULongArray__get_impl_pr71q9(second, tmp_3 - precisionExtension | 0) : _ULong___init__impl__c78o9k(new Long(0, 0));
      tmp_2[tmp_3] = _ULong___get_data__impl__fggpzb(this_0);
      tmp_0 = tmp_0 + 1 | 0;
    }
    var secondHigherPrecision = _ULongArray___init__impl__twm1l3(tmp_2);
    var secondReciprocalWithRemainder = this.d1ReciprocalRecursiveWordVersion_87t7vp_k$(secondHigherPrecision);
    var secondReciprocal = secondReciprocalWithRemainder.get_first_irdx8n_k$().storage_1;
    var product = this.times_spd79k_k$(first, secondReciprocal);
    if (this.compareTo_u5d14v_k$(product, _ULong___init__impl__c78o9k(new Long(0, 0))) === 0) {
      return new Pair(new ULongArray(this.ZERO_1), new ULongArray(first));
    }
    if (_ULongArray___get_size__impl__ju6dtr(product) === 1) {
      var tmp_4 = product;
      // Inline function 'kotlin.ULong.minus' call
      var this_1 = this.baseMask_1;
      var other = _ULong___init__impl__c78o9k(new Long(1, 0));
      var tmp$ret$4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).minus_mfbszm_k$(_ULong___get_data__impl__fggpzb(other)));
      if (this.compareTo_u5d14v_k$(tmp_4, tmp$ret$4) >= 0) {
        product = this.plus_g611sc_k$(product, this.ONE_1);
      }
    } else {
      var importantWord = ULongArray__get_impl_pr71q9(product, _ULongArray___get_size__impl__ju6dtr(product) - _ULongArray___get_size__impl__ju6dtr(second) | 0);
      // Inline function 'kotlin.ULong.compareTo' call
      var other_0 = this.baseMask_1;
      if (ulongCompare(_ULong___get_data__impl__fggpzb(importantWord), _ULong___get_data__impl__fggpzb(other_0)) >= 0) {
        // Inline function 'kotlin.ULongArray' call
        var tmp_5 = 0;
        var tmp_6 = _ULongArray___get_size__impl__ju6dtr(product);
        var tmp_7 = longArray(tmp_6);
        while (tmp_5 < tmp_6) {
          var tmp_8 = tmp_5;
          // Inline function 'kotlin.ULong.toLong' call
          // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.reciprocalDivision.<anonymous>' call
          var tmp_9;
          if (tmp_8 === (_ULongArray___get_size__impl__ju6dtr(product) - 1 | 0)) {
            // Inline function 'kotlin.ULong.plus' call
            var this_2 = ULongArray__get_impl_pr71q9(product, _ULongArray___get_size__impl__ju6dtr(product) - 1 | 0);
            var other_1 = _ULong___init__impl__c78o9k(new Long(1, 0));
            tmp_9 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).plus_r93sks_k$(_ULong___get_data__impl__fggpzb(other_1)));
          } else {
            tmp_9 = _ULong___init__impl__c78o9k(new Long(0, 0));
          }
          var this_3 = tmp_9;
          tmp_7[tmp_8] = _ULong___get_data__impl__fggpzb(this_3);
          tmp_5 = tmp_5 + 1 | 0;
        }
        product = _ULongArray___init__impl__twm1l3(tmp_7);
      }
    }
    // Inline function 'kotlin.collections.copyOfRange' call
    var this_4 = product;
    var fromIndex = imul(2, shift) + precisionExtension | 0;
    var toIndex = _ULongArray___get_size__impl__ju6dtr(product);
    var result = _ULongArray___init__impl__twm1l3(copyOfRange_0(_ULongArray___get_storage__impl__28e64j(this_4), fromIndex, toIndex));
    var remainder = this.minus_dhhhr6_k$(first, this.times_spd79k_k$(result, second));
    return new Pair(new ULongArray(result), new ULongArray(remainder));
  };
  protoOf(BigInteger63Arithmetic).sqrt_8g6jqw_k$ = function (operand) {
    return reqursiveSqrt_0(this, operand);
  };
  protoOf(BigInteger63Arithmetic).basecaseSqrt_3qz8rr_k$ = function (operand) {
    var sqrt = this.sqrtInt_9th7jv_k$(operand);
    var remainder = this.minus_dhhhr6_k$(operand, this.times_spd79k_k$(sqrt, sqrt));
    return new Pair(new ULongArray(sqrt), new ULongArray(remainder));
  };
  protoOf(BigInteger63Arithmetic).sqrtInt_9th7jv_k$ = function (operand) {
    var u = operand;
    var s = this.ZERO_1;
    var tmp = this.ZERO_1;
    do {
      s = u;
      tmp = this.plus_g611sc_k$(s, this.div_s0tcn1_k$(operand, s));
      u = this.shr_wxaux5_k$(tmp, 1);
    }
     while (this.compareTo_rqoxvi_k$(u, s) < 0);
    return s;
  };
  protoOf(BigInteger63Arithmetic).gcd_ybis7o_k$ = function (first, second) {
    var tmp;
    if (_ULongArray___get_size__impl__ju6dtr(first) > 150 ? true : _ULongArray___get_size__impl__ju6dtr(second) > 150) {
      tmp = euclideanGcd_0(this, first, second);
    } else {
      tmp = binaryGcd_0(this, first, second);
    }
    return tmp;
  };
  protoOf(BigInteger63Arithmetic).get_SIGNED_POSITIVE_TWO_icygcg_k$ = function () {
    return this.SIGNED_POSITIVE_TWO_1;
  };
  protoOf(BigInteger63Arithmetic).plus_jxwqbe_k$ = function (_this__u8e3s4, other) {
    return signedAdd_0(this, _this__u8e3s4, other);
  };
  protoOf(BigInteger63Arithmetic).minus_emc2xw_k$ = function (_this__u8e3s4, other) {
    return signedSubtract_0(this, _this__u8e3s4, other);
  };
  protoOf(BigInteger63Arithmetic).times_tdl5se_k$ = function (_this__u8e3s4, other) {
    return signedMultiply_0(this, _this__u8e3s4, other);
  };
  protoOf(BigInteger63Arithmetic).div_g610n1_k$ = function (_this__u8e3s4, other) {
    return signedDivide_0(this, _this__u8e3s4, other);
  };
  protoOf(BigInteger63Arithmetic).rem_8rnao6_k$ = function (_this__u8e3s4, other) {
    return signedRemainder_0(this, _this__u8e3s4, other);
  };
  protoOf(BigInteger63Arithmetic).shr_1ylobi_k$ = function (_this__u8e3s4, places) {
    return new SignedULongArray(this.shr_wxaux5_k$(_this__u8e3s4.unsignedValue_1, places), _this__u8e3s4.sign_1);
  };
  protoOf(BigInteger63Arithmetic).shl_oblxk4_k$ = function (_this__u8e3s4, places) {
    return new SignedULongArray(this.shl_bajctt_k$(_this__u8e3s4.unsignedValue_1, places), _this__u8e3s4.sign_1);
  };
  protoOf(BigInteger63Arithmetic).and_4aohjo_k$ = function (_this__u8e3s4, operand) {
    return new SignedULongArray(this.and_6i7kg5_k$(_this__u8e3s4.unsignedValue_1, operand), _this__u8e3s4.sign_1);
  };
  protoOf(BigInteger63Arithmetic).min_aoj3pm_k$ = function (first, second) {
    var tmp;
    if (this.compareTo_rqoxvi_k$(first, second) < 0) {
      tmp = first;
    } else {
      tmp = second;
    }
    return tmp;
  };
  protoOf(BigInteger63Arithmetic).max_og7nyg_k$ = function (first, second) {
    var tmp;
    if (this.compareTo_rqoxvi_k$(first, second) > 0) {
      tmp = first;
    } else {
      tmp = second;
    }
    return tmp;
  };
  protoOf(BigInteger63Arithmetic).parseForBase_ig4yjr_k$ = function (number, base) {
    var parsed = this.ZERO_1;
    // Inline function 'kotlin.text.forEach' call
    // Inline function 'kotlin.text.toLowerCase' call
    // Inline function 'kotlin.js.asDynamic' call
    var indexedObject = number.toLowerCase();
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(indexedObject)) {
      var element = charSequenceGet(indexedObject, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.parseForBase.<anonymous>' call
      var tmp = BigInteger63Arithmetic_getInstance();
      var tmp_0 = BigInteger63Arithmetic_getInstance();
      var tmp_1 = parsed;
      // Inline function 'kotlin.toULong' call
      var tmp$ret$2 = _ULong___init__impl__c78o9k(toLong(base));
      var tmp_2 = tmp_0.times_dwwo31_k$(tmp_1, tmp$ret$2);
      // Inline function 'kotlin.toULong' call
      var this_0 = toDigit(element, base);
      var tmp$ret$3 = _ULong___init__impl__c78o9k(toLong(this_0));
      parsed = tmp.plus_vebw13_k$(tmp_2, tmp$ret$3);
    }
    return this.removeLeadingZeros_hl2d3p_k$(parsed);
  };
  protoOf(BigInteger63Arithmetic).toString_t6xuz8_k$ = function (operand, base) {
    // Inline function 'kotlin.collections.copyOf' call
    var copy = _ULongArray___init__impl__twm1l3(copyOf(_ULongArray___get_storage__impl__28e64j(operand)));
    // Inline function 'kotlin.ulongArrayOf' call
    // Inline function 'kotlin.toULong' call
    var tmp$ret$1 = _ULong___init__impl__c78o9k(toLong(base));
    var baseArray = _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$1]));
    var stringBuilder = StringBuilder_init_$Create$();
    while (!equals(copy, this.ZERO_1)) {
      var divremResult = this.divrem_xaac4n_k$(copy, baseArray);
      if (ULongArray__isEmpty_impl_c3yngu(divremResult.get_second_jf7fjx_k$().storage_1)) {
        stringBuilder.append_t8pm91_k$(0);
      } else {
        stringBuilder.append_22ad7x_k$(toString_1(ULongArray__get_impl_pr71q9(divremResult.get_second_jf7fjx_k$().storage_1, 0), base));
      }
      copy = divremResult.get_first_irdx8n_k$().storage_1;
    }
    // Inline function 'kotlin.text.reversed' call
    var this_0 = stringBuilder.toString();
    return toString(reversed_0(isCharSequence(this_0) ? this_0 : THROW_CCE()));
  };
  protoOf(BigInteger63Arithmetic).and_6i7kg5_k$ = function (operand, mask) {
    var tmp;
    if (_ULongArray___get_size__impl__ju6dtr(operand) > _ULongArray___get_size__impl__ju6dtr(mask)) {
      tmp = new Pair(new ULongArray(operand), new ULongArray(mask));
    } else {
      tmp = new Pair(new ULongArray(mask), new ULongArray(operand));
    }
    var tmp0_container = tmp;
    var bigger = tmp0_container.component1_7eebsc_k$().storage_1;
    var smaller = tmp0_container.component2_7eebsb_k$().storage_1;
    // Inline function 'kotlin.ULongArray' call
    var tmp_0 = 0;
    var tmp_1 = _ULongArray___get_size__impl__ju6dtr(smaller);
    var tmp_2 = longArray(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      // Inline function 'kotlin.ULong.toLong' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.and.<anonymous>' call
      // Inline function 'kotlin.ULong.and' call
      var this_0 = ULongArray__get_impl_pr71q9(operand, tmp_3);
      var other = ULongArray__get_impl_pr71q9(mask, tmp_3);
      var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
      tmp_2[tmp_3] = _ULong___get_data__impl__fggpzb(this_1);
      tmp_0 = tmp_0 + 1 | 0;
    }
    return _ULongArray___init__impl__twm1l3(tmp_2);
  };
  protoOf(BigInteger63Arithmetic).or_nlpkc9_k$ = function (operand, mask) {
    // Inline function 'kotlin.ULongArray' call
    var tmp = 0;
    var tmp_0 = _ULongArray___get_size__impl__ju6dtr(operand);
    var tmp_1 = longArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.ULong.toLong' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.or.<anonymous>' call
      var tmp_3;
      if (tmp_2 < _ULongArray___get_size__impl__ju6dtr(mask)) {
        // Inline function 'kotlin.ULong.or' call
        var this_0 = ULongArray__get_impl_pr71q9(operand, tmp_2);
        var other = ULongArray__get_impl_pr71q9(mask, tmp_2);
        tmp_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other)));
      } else {
        tmp_3 = ULongArray__get_impl_pr71q9(operand, tmp_2);
      }
      var this_1 = tmp_3;
      tmp_1[tmp_2] = _ULong___get_data__impl__fggpzb(this_1);
      tmp = tmp + 1 | 0;
    }
    var tmp$ret$4 = _ULongArray___init__impl__twm1l3(tmp_1);
    return this.removeLeadingZeros_hl2d3p_k$(tmp$ret$4);
  };
  protoOf(BigInteger63Arithmetic).xor_44odvj_k$ = function (operand, mask) {
    if (_ULongArray___get_size__impl__ju6dtr(operand) < _ULongArray___get_size__impl__ju6dtr(mask))
      return this.xor_44odvj_k$(mask, operand);
    // Inline function 'kotlin.ULongArray' call
    var tmp = 0;
    var tmp_0 = _ULongArray___get_size__impl__ju6dtr(operand);
    var tmp_1 = longArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.ULong.toLong' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.xor.<anonymous>' call
      var tmp_3;
      if (tmp_2 < _ULongArray___get_size__impl__ju6dtr(mask)) {
        // Inline function 'kotlin.ULong.xor' call
        var this_0 = ULongArray__get_impl_pr71q9(operand, tmp_2);
        var other = ULongArray__get_impl_pr71q9(mask, tmp_2);
        tmp_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).xor_qzz94j_k$(_ULong___get_data__impl__fggpzb(other)));
      } else {
        // Inline function 'kotlin.ULong.xor' call
        var this_1 = ULongArray__get_impl_pr71q9(operand, tmp_2);
        var other_0 = _ULong___init__impl__c78o9k(new Long(0, 0));
        tmp_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).xor_qzz94j_k$(_ULong___get_data__impl__fggpzb(other_0)));
      }
      var this_2 = tmp_3;
      tmp_1[tmp_2] = _ULong___get_data__impl__fggpzb(this_2);
      tmp = tmp + 1 | 0;
    }
    var tmp$ret$5 = _ULongArray___init__impl__twm1l3(tmp_1);
    return this.removeLeadingZeros_hl2d3p_k$(tmp$ret$5);
  };
  protoOf(BigInteger63Arithmetic).not_nout9b_k$ = function (operand) {
    var leadingZeros = this.numberOfLeadingZerosInAWord_pgcg7w_k$(ULongArray__get_impl_pr71q9(operand, _ULongArray___get_size__impl__ju6dtr(operand) - 1 | 0));
    // Inline function 'kotlin.ULong.inv' call
    // Inline function 'kotlin.ULong.shl' call
    // Inline function 'kotlin.ULong.minus' call
    // Inline function 'kotlin.ULong.shl' call
    var this_0 = _ULong___init__impl__c78o9k(new Long(1, 0));
    var bitCount = leadingZeros + 1 | 0;
    var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).shl_bg8if3_k$(bitCount));
    // Inline function 'kotlin.ULong.minus' call
    // Inline function 'kotlin.UInt.toULong' call
    var this_2 = _UInt___init__impl__l7qpdl(1);
    var other = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(this_2)).and_4spn93_k$(new Long(-1, 0)));
    var this_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).minus_mfbszm_k$(_ULong___get_data__impl__fggpzb(other)));
    var bitCount_0 = this.basePowerOfTwo_1 - leadingZeros | 0;
    var this_4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).shl_bg8if3_k$(bitCount_0));
    var cleanupMask = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).inv_28kx_k$());
    // Inline function 'kotlin.ULongArray' call
    var tmp = 0;
    var tmp_0 = _ULongArray___get_size__impl__ju6dtr(operand);
    var tmp_1 = longArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.ULong.toLong' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.not.<anonymous>' call
      var tmp_3;
      if (tmp_2 < (_ULongArray___get_size__impl__ju6dtr(operand) - 2 | 0)) {
        // Inline function 'kotlin.ULong.and' call
        // Inline function 'kotlin.ULong.inv' call
        var this_5 = ULongArray__get_impl_pr71q9(operand, tmp_2);
        var this_6 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).inv_28kx_k$());
        var other_0 = BigInteger63Arithmetic_getInstance().baseMask_1;
        tmp_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_6).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_0)));
      } else {
        // Inline function 'kotlin.ULong.and' call
        // Inline function 'kotlin.ULong.inv' call
        var this_7 = ULongArray__get_impl_pr71q9(operand, tmp_2);
        var this_8 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_7).inv_28kx_k$());
        tmp_3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_8).and_4spn93_k$(_ULong___get_data__impl__fggpzb(cleanupMask)));
      }
      var this_9 = tmp_3;
      tmp_1[tmp_2] = _ULong___get_data__impl__fggpzb(this_9);
      tmp = tmp + 1 | 0;
    }
    var inverted = _ULongArray___init__impl__twm1l3(tmp_1);
    return inverted;
  };
  protoOf(BigInteger63Arithmetic).shl_bajctt_k$ = function (_this__u8e3s4, places) {
    return this.shiftLeft_luzpnv_k$(_this__u8e3s4, places);
  };
  protoOf(BigInteger63Arithmetic).shr_wxaux5_k$ = function (_this__u8e3s4, places) {
    return this.shiftRight_24xxbu_k$(_this__u8e3s4, places);
  };
  protoOf(BigInteger63Arithmetic).bitAt_6f5eh6_k$ = function (operand, position) {
    // Inline function 'kotlin.Long.div' call
    if (position.div_jun7gj_k$(toLong(63)).compareTo_9jj042_k$(toLong(IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$())) > 0) {
      throw RuntimeException_init_$Create$('Invalid bit index, too large, cannot access word (Word position > Int.MAX_VALUE');
    }
    // Inline function 'kotlin.Long.div' call
    var wordPosition = position.div_jun7gj_k$(toLong(63));
    if (wordPosition.compareTo_9jj042_k$(toLong(_ULongArray___get_size__impl__ju6dtr(operand))) >= 0) {
      return false;
    }
    // Inline function 'kotlin.Long.rem' call
    var bitPosition = position.rem_bsnl9o_k$(toLong(63));
    var word = ULongArray__get_impl_pr71q9(operand, wordPosition.toInt_1tsl84_k$());
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.ULong.shl' call
    var this_0 = _ULong___init__impl__c78o9k(new Long(1, 0));
    var bitCount = bitPosition.toInt_1tsl84_k$();
    var other = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).shl_bg8if3_k$(bitCount));
    var tmp$ret$4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(word).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
    return !equals(tmp$ret$4, _ULong___init__impl__c78o9k(new Long(0, 0)));
  };
  protoOf(BigInteger63Arithmetic).setBitAt_5jbtpb_k$ = function (operand, position, bit) {
    // Inline function 'kotlin.Long.div' call
    if (position.div_jun7gj_k$(toLong(63)).compareTo_9jj042_k$(toLong(IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$())) > 0) {
      throw RuntimeException_init_$Create$('Invalid bit index, too large, cannot access word (Word position > Int.MAX_VALUE');
    }
    // Inline function 'kotlin.Long.div' call
    var wordPosition = position.div_jun7gj_k$(toLong(63));
    if (wordPosition.compareTo_9jj042_k$(toLong(_ULongArray___get_size__impl__ju6dtr(operand))) >= 0) {
      throw IndexOutOfBoundsException_init_$Create$('Invalid position, addressed word ' + wordPosition.toString() + ' larger than number of words ' + _ULongArray___get_size__impl__ju6dtr(operand));
    }
    // Inline function 'kotlin.Long.rem' call
    var bitPosition = position.rem_bsnl9o_k$(toLong(63));
    // Inline function 'kotlin.ULong.shl' call
    var this_0 = _ULong___init__impl__c78o9k(new Long(1, 0));
    var bitCount = bitPosition.toInt_1tsl84_k$();
    var setMask = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).shl_bg8if3_k$(bitCount));
    // Inline function 'kotlin.ULongArray' call
    var tmp = 0;
    var tmp_0 = _ULongArray___get_size__impl__ju6dtr(operand);
    var tmp_1 = longArray(tmp_0);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.ULong.toLong' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.setBitAt.<anonymous>' call
      var tmp_3;
      if (tmp_2 === wordPosition.toInt_1tsl84_k$()) {
        var tmp_4;
        if (bit) {
          // Inline function 'kotlin.ULong.or' call
          var this_1 = ULongArray__get_impl_pr71q9(operand, tmp_2);
          tmp_4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(setMask)));
        } else {
          // Inline function 'kotlin.ULong.xor' call
          var this_2 = ULongArray__get_impl_pr71q9(operand, tmp_2);
          tmp_4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).xor_qzz94j_k$(_ULong___get_data__impl__fggpzb(setMask)));
        }
        tmp_3 = tmp_4;
      } else {
        tmp_3 = ULongArray__get_impl_pr71q9(operand, tmp_2);
      }
      var this_3 = tmp_3;
      tmp_1[tmp_2] = _ULong___get_data__impl__fggpzb(this_3);
      tmp = tmp + 1 | 0;
    }
    return _ULongArray___init__impl__twm1l3(tmp_1);
  };
  protoOf(BigInteger63Arithmetic).plus_g611sc_k$ = function (_this__u8e3s4, other) {
    return this.add_fdm03p_k$(_this__u8e3s4, other);
  };
  protoOf(BigInteger63Arithmetic).minus_dhhhr6_k$ = function (_this__u8e3s4, other) {
    return this.subtract_tkmoqg_k$(_this__u8e3s4, other);
  };
  protoOf(BigInteger63Arithmetic).times_spd79k_k$ = function (_this__u8e3s4, other) {
    return this.multiply_2l587c_k$(_this__u8e3s4, other);
  };
  protoOf(BigInteger63Arithmetic).plus_vebw13_k$ = function (_this__u8e3s4, other) {
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp$ret$0 = _ULongArray___init__impl__twm1l3(longArrayOf([other]));
    return this.add_fdm03p_k$(_this__u8e3s4, tmp$ret$0);
  };
  protoOf(BigInteger63Arithmetic).minus_ofsygz_k$ = function (_this__u8e3s4, other) {
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp$ret$0 = _ULongArray___init__impl__twm1l3(longArrayOf([other]));
    return this.subtract_tkmoqg_k$(_this__u8e3s4, tmp$ret$0);
  };
  protoOf(BigInteger63Arithmetic).times_dwwo31_k$ = function (_this__u8e3s4, other) {
    return this.baseMultiply_97jr64_k$(_this__u8e3s4, other);
  };
  protoOf(BigInteger63Arithmetic).div_tmpxoi_k$ = function (_this__u8e3s4, other) {
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp$ret$0 = _ULongArray___init__impl__twm1l3(longArrayOf([other]));
    return this.divide_f7otrd_k$(_this__u8e3s4, tmp$ret$0).get_first_irdx8n_k$().storage_1;
  };
  protoOf(BigInteger63Arithmetic).rem_lyl255_k$ = function (_this__u8e3s4, other) {
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp$ret$0 = _ULongArray___init__impl__twm1l3(longArrayOf([other]));
    return this.divide_f7otrd_k$(_this__u8e3s4, tmp$ret$0).get_second_jf7fjx_k$().storage_1;
  };
  protoOf(BigInteger63Arithmetic).div_s0tcn1_k$ = function (_this__u8e3s4, other) {
    return this.divide_f7otrd_k$(_this__u8e3s4, other).get_first_irdx8n_k$().storage_1;
  };
  protoOf(BigInteger63Arithmetic).rem_ss0xg_k$ = function (_this__u8e3s4, other) {
    return this.divide_f7otrd_k$(_this__u8e3s4, other).get_second_jf7fjx_k$().storage_1;
  };
  protoOf(BigInteger63Arithmetic).divrem_xaac4n_k$ = function (_this__u8e3s4, other) {
    return this.divide_f7otrd_k$(_this__u8e3s4, other);
  };
  protoOf(BigInteger63Arithmetic).compareTo_rqoxvi_k$ = function (_this__u8e3s4, other) {
    return this.compare_23l5gr_k$(_this__u8e3s4, other);
  };
  protoOf(BigInteger63Arithmetic).compareTo_u5d14v_k$ = function (_this__u8e3s4, other) {
    // Inline function 'kotlin.ulongArrayOf' call
    var tmp$ret$0 = _ULongArray___init__impl__twm1l3(longArrayOf([other]));
    return this.compare_23l5gr_k$(_this__u8e3s4, tmp$ret$0);
  };
  protoOf(BigInteger63Arithmetic).to32Bit_4ee8qi_k$ = function (_this__u8e3s4) {
    return this.convertTo32BitRepresentation_lnpo3y_k$(_this__u8e3s4);
  };
  protoOf(BigInteger63Arithmetic).from32Bit_ys3bk6_k$ = function (_this__u8e3s4) {
    return this.convertFrom32BitRepresentation_1w3khe_k$(_this__u8e3s4);
  };
  protoOf(BigInteger63Arithmetic).fromULong_v4p5f6_k$ = function (uLong) {
    var tmp;
    // Inline function 'kotlin.ULong.and' call
    var other = this.overflowMask_1;
    var tmp$ret$0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(uLong).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
    if (!equals(tmp$ret$0, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
      // Inline function 'kotlin.ulongArrayOf' call
      // Inline function 'kotlin.ULong.and' call
      var other_0 = this.baseMask_1;
      var tmp$ret$1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(uLong).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_0)));
      tmp = _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$1, _ULong___init__impl__c78o9k(new Long(1, 0))]));
    } else {
      // Inline function 'kotlin.ulongArrayOf' call
      tmp = _ULongArray___init__impl__twm1l3(longArrayOf([uLong]));
    }
    return tmp;
  };
  protoOf(BigInteger63Arithmetic).fromUInt_vnajor_k$ = function (uInt) {
    // Inline function 'kotlin.ulongArrayOf' call
    // Inline function 'kotlin.UInt.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(toLong(_UInt___get_data__impl__f0vqqw(uInt)).and_4spn93_k$(new Long(-1, 0)));
    return _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$0]));
  };
  protoOf(BigInteger63Arithmetic).fromUShort_e4zbda_k$ = function (uShort) {
    // Inline function 'kotlin.ulongArrayOf' call
    // Inline function 'kotlin.UShort.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(toLong(_UShort___get_data__impl__g0245(uShort)).and_4spn93_k$(new Long(65535, 0)));
    return _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$0]));
  };
  protoOf(BigInteger63Arithmetic).fromUByte_akq2u2_k$ = function (uByte) {
    // Inline function 'kotlin.ulongArrayOf' call
    // Inline function 'kotlin.UByte.toULong' call
    var tmp$ret$0 = _ULong___init__impl__c78o9k(toLong(_UByte___get_data__impl__jof9qr(uByte)).and_4spn93_k$(new Long(255, 0)));
    return _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$0]));
  };
  protoOf(BigInteger63Arithmetic).fromLong_ovick_k$ = function (long) {
    if (long.equals(Companion_getInstance().get_MIN_VALUE_7nmmor_k$())) {
      // Inline function 'kotlin.ulongArrayOf' call
      return _ULongArray___init__impl__twm1l3(longArrayOf([_ULong___init__impl__c78o9k(new Long(0, 0)), _ULong___init__impl__c78o9k(new Long(1, 0))]));
    }
    // Inline function 'kotlin.ulongArrayOf' call
    // Inline function 'kotlin.ULong.and' call
    // Inline function 'kotlin.toULong' call
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = abs(long);
    var this_1 = _ULong___init__impl__c78o9k(this_0);
    var other = this.baseMask_1;
    var tmp$ret$3 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_1).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
    return _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$3]));
  };
  protoOf(BigInteger63Arithmetic).fromInt_npyrg9_k$ = function (int) {
    // Inline function 'kotlin.ulongArrayOf' call
    // Inline function 'kotlin.toULong' call
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = toLong(int);
    var this_1 = abs(this_0);
    var tmp$ret$1 = _ULong___init__impl__c78o9k(this_1);
    return _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$1]));
  };
  protoOf(BigInteger63Arithmetic).fromShort_29lh2y_k$ = function (short) {
    // Inline function 'kotlin.ulongArrayOf' call
    // Inline function 'kotlin.toULong' call
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = abs_0(short);
    var tmp$ret$1 = _ULong___init__impl__c78o9k(toLong(this_0));
    return _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$1]));
  };
  protoOf(BigInteger63Arithmetic).fromByte_6nm3ne_k$ = function (byte) {
    // Inline function 'kotlin.ulongArrayOf' call
    // Inline function 'kotlin.toULong' call
    // Inline function 'kotlin.math.absoluteValue' call
    var this_0 = abs_0(byte);
    var tmp$ret$1 = _ULong___init__impl__c78o9k(toLong(this_0));
    return _ULongArray___init__impl__twm1l3(longArrayOf([tmp$ret$1]));
  };
  protoOf(BigInteger63Arithmetic).fromUByteArray_dsi08q_k$ = function (source) {
    var padLength = 8 - (_UByteArray___get_size__impl__h6pkdv(source) % 8 | 0) | 0;
    // Inline function 'kotlin.collections.plus' call
    var this_0 = _UByteArray___init__impl__ip4y9n_0(padLength);
    // Inline function 'kotlin.collections.plus' call
    var this_1 = _UByteArray___get_storage__impl__d4kctt(this_0);
    var elements = _UByteArray___get_storage__impl__d4kctt(source);
    var tmp$ret$0 = primitiveArrayConcat([this_1, elements]);
    var paddedSource = _UByteArray___init__impl__ip4y9n(tmp$ret$0);
    var trimmedSource = toUByteArray(flatten(reversed(chunked(new UByteArray(paddedSource), 8))));
    var ulongsCount = _UByteArray___get_size__impl__h6pkdv(trimmedSource) / 8 | 0;
    var ulongRest = _UByteArray___get_size__impl__h6pkdv(trimmedSource) % 8 | 0;
    var ulongArray = _ULongArray___init__impl__twm1l3_0(ulongsCount + 1 | 0);
    var inductionVariable = 0;
    if (inductionVariable < ulongsCount)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var inductionVariable_0 = 0;
        if (inductionVariable_0 < 8)
          do {
            var j = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            // Inline function 'kotlin.ULong.or' call
            var this_2 = ULongArray__get_impl_pr71q9(ulongArray, i);
            // Inline function 'kotlin.ULong.shl' call
            // Inline function 'kotlin.UByte.toULong' call
            var this_3 = UByteArray__get_impl_t5f3hv(trimmedSource, imul(i, 8) + j | 0);
            var this_4 = _ULong___init__impl__c78o9k(toLong(_UByte___get_data__impl__jof9qr(this_3)).and_4spn93_k$(new Long(255, 0)));
            var bitCount = 56 - imul(j, 8) | 0;
            var other = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).shl_bg8if3_k$(bitCount));
            var tmp$ret$4 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_2).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other)));
            ULongArray__set_impl_z19mvh(ulongArray, i, tmp$ret$4);
          }
           while (inductionVariable_0 < 8);
      }
       while (inductionVariable < ulongsCount);
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < ulongRest)
      do {
        var i_0 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var tmp = _ULongArray___get_size__impl__ju6dtr(ulongArray) - 1 | 0;
        // Inline function 'kotlin.ULong.or' call
        var this_5 = ULongArray__get_impl_pr71q9(ulongArray, _ULongArray___get_size__impl__ju6dtr(ulongArray) - 1 | 0);
        // Inline function 'kotlin.ULong.shl' call
        // Inline function 'kotlin.UByte.toULong' call
        var this_6 = UByteArray__get_impl_t5f3hv(trimmedSource, imul(ulongsCount, 8) + i_0 | 0);
        var this_7 = _ULong___init__impl__c78o9k(toLong(_UByte___get_data__impl__jof9qr(this_6)).and_4spn93_k$(new Long(255, 0)));
        var bitCount_0 = imul(ulongRest - 1 | 0, 8) - imul(i_0, 8) | 0;
        var other_0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_7).shl_bg8if3_k$(bitCount_0));
        var tmp$ret$7 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other_0)));
        ULongArray__set_impl_z19mvh(ulongArray, tmp, tmp$ret$7);
      }
       while (inductionVariable_1 < ulongRest);
    var tmp$ret$10;
    $l$block: {
      // Inline function 'kotlin.collections.dropLastWhile' call
      // Inline function 'kotlin.collections.lastIndex' call
      var inductionVariable_2 = get_lastIndex_1(_ULongArray___get_storage__impl__28e64j(ulongArray));
      if (0 <= inductionVariable_2)
        do {
          var index = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + -1 | 0;
          // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.fromUByteArray.<anonymous>' call
          var it = ULongArray__get_impl_pr71q9(ulongArray, index);
          if (!equals(it, _ULong___init__impl__c78o9k(new Long(0, 0)))) {
            tmp$ret$10 = take_0(ulongArray, index + 1 | 0);
            break $l$block;
          }
        }
         while (0 <= inductionVariable_2);
      tmp$ret$10 = emptyList();
    }
    var result = this.convertFrom64BitRepresentation_wk01md_k$(toULongArray(tmp$ret$10));
    return result;
  };
  protoOf(BigInteger63Arithmetic).fromByteArray_hdcat7_k$ = function (source) {
    // Inline function 'kotlin.collections.asUByteArray' call
    var tmp$ret$0 = _UByteArray___init__impl__ip4y9n(source);
    return this.fromUByteArray_dsi08q_k$(tmp$ret$0);
  };
  protoOf(BigInteger63Arithmetic).toUByteArray_aqrniv_k$ = function (operand) {
    // Inline function 'kotlin.collections.reversedArray' call
    var this_0 = this.convertTo64BitRepresentation_39rx0m_k$(operand);
    var as64Bit = _ULongArray___init__impl__twm1l3(reversedArray(_ULongArray___get_storage__impl__28e64j(this_0)));
    var result = _UByteArray___init__impl__ip4y9n_0(imul(_ULongArray___get_size__impl__ju6dtr(as64Bit), 8));
    var inductionVariable = 0;
    var last = _ULongArray___get_size__impl__ju6dtr(as64Bit);
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var this_1 = toBigEndianUByteArray(ULongArray__get_impl_pr71q9(as64Bit, i));
        var destinationOffset = imul(i, 8);
        // Inline function 'kotlin.collections.copyInto' call
        var this_2 = _UByteArray___get_storage__impl__d4kctt(this_1);
        var destination = _UByteArray___get_storage__impl__d4kctt(result);
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = this_2;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, destination, destinationOffset, 0, 8);
      }
       while (inductionVariable < last);
    // Inline function 'kotlin.collections.dropWhile' call
    var yielding = false;
    var list = ArrayList_init_$Create$();
    var tmp0_iterator = UByteArray__iterator_impl_509y1p(result);
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$().data_1;
      if (yielding) {
        list.add_utx5q5_k$(new UByte(item));
      } else {
        // Inline function 'com.ionspin.kotlin.bignum.integer.base63.array.BigInteger63Arithmetic.toUByteArray.<anonymous>' call
        // Inline function 'kotlin.UByte.toUInt' call
        if (!(_UInt___init__impl__l7qpdl(_UByte___get_data__impl__jof9qr(item) & 255) === _UInt___init__impl__l7qpdl(0))) {
          list.add_utx5q5_k$(new UByte(item));
          yielding = true;
        }
      }
    }
    return toUByteArray(list);
  };
  protoOf(BigInteger63Arithmetic).toByteArray_qci4lq_k$ = function (operand) {
    // Inline function 'kotlin.collections.asByteArray' call
    var this_0 = this.toUByteArray_aqrniv_k$(operand);
    return _UByteArray___get_storage__impl__d4kctt(this_0);
  };
  protoOf(BigInteger63Arithmetic).get_powersOf10_cldtlf_k$ = function () {
    return this.powersOf10__1;
  };
  var BigInteger63Arithmetic_instance;
  function BigInteger63Arithmetic_getInstance() {
    if (BigInteger63Arithmetic_instance == null)
      new BigInteger63Arithmetic();
    return BigInteger63Arithmetic_instance;
  }
  function toBigEndianUByteArray(_this__u8e3s4) {
    // Inline function 'kotlin.UByteArray' call
    var tmp = 0;
    var tmp_0 = new Int8Array(8);
    while (tmp < 8) {
      var tmp_1 = tmp;
      // Inline function 'kotlin.UByte.toByte' call
      // Inline function 'com.ionspin.kotlin.bignum.integer.util.toBigEndianUByteArray.<anonymous>' call
      // Inline function 'kotlin.ULong.toUByte' call
      // Inline function 'kotlin.ULong.and' call
      // Inline function 'kotlin.ULong.shr' call
      var bitCount = 56 - imul(tmp_1, 8) | 0;
      var this_0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(_this__u8e3s4).ushr_z7nmq8_k$(bitCount));
      var other = _ULong___init__impl__c78o9k(new Long(255, 0));
      var this_1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_0).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toUByte' call
      var this_2 = _ULong___get_data__impl__fggpzb(this_1);
      var this_3 = _UByte___init__impl__g9hnc4(this_2.toByte_edm0nx_k$());
      tmp_0[tmp_1] = _UByte___get_data__impl__jof9qr(this_3);
      tmp = tmp + 1 | 0;
    }
    return _UByteArray___init__impl__ip4y9n(tmp_0);
  }
  function toDigit(_this__u8e3s4, base) {
    base = base === VOID ? 10 : base;
    var tmp;
    if (_Char___init__impl__6a9atx(48) <= _this__u8e3s4 ? _this__u8e3s4 <= _Char___init__impl__6a9atx(57) : false) {
      tmp = Char__toInt_impl_vasixd(Char__minus_impl_a2frrh_0(_this__u8e3s4, 48));
    } else if (_Char___init__impl__6a9atx(97) <= _this__u8e3s4 ? _this__u8e3s4 <= _Char___init__impl__6a9atx(122) : false) {
      tmp = Char__minus_impl_a2frrh(_this__u8e3s4, _Char___init__impl__6a9atx(97)) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65) <= _this__u8e3s4 ? _this__u8e3s4 <= _Char___init__impl__6a9atx(90) : false) {
      tmp = Char__minus_impl_a2frrh(_this__u8e3s4, _Char___init__impl__6a9atx(65)) + 10 | 0;
    } else if (_Char___init__impl__6a9atx(65313) <= _this__u8e3s4 ? _this__u8e3s4 <= _Char___init__impl__6a9atx(65338) : false) {
      tmp = Char__minus_impl_a2frrh(_this__u8e3s4, _Char___init__impl__6a9atx(65313)) - 10 | 0;
    } else if (_Char___init__impl__6a9atx(65345) <= _this__u8e3s4 ? _this__u8e3s4 <= _Char___init__impl__6a9atx(65370) : false) {
      tmp = Char__minus_impl_a2frrh(_this__u8e3s4, _Char___init__impl__6a9atx(65345)) - 10 | 0;
    } else if (_this__u8e3s4 === _Char___init__impl__6a9atx(46)) {
      throw NumberFormatException_init_$Create$('Invalid digit for radix ' + toString_2(_this__u8e3s4) + ' (Possibly a decimal value, which is not supported by BigInteger parser');
    } else {
      throw NumberFormatException_init_$Create$('Invalid digit for radix ' + toString_2(_this__u8e3s4));
    }
    var digit = tmp;
    if (digit < 0 ? true : digit >= base) {
      throw NumberFormatException_init_$Create$(toString_2(_this__u8e3s4) + ' is not a valid digit for number system with base ' + base);
    }
    return digit;
  }
  function times_4(_this__u8e3s4, count) {
    var stringBuilder = StringBuilder_init_$Create$();
    var inductionVariable = new Long(0, 0);
    if (inductionVariable.compareTo_9jj042_k$(count) < 0)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable.plus_r93sks_k$(new Long(1, 0));
        stringBuilder.append_am5a4z_k$(_this__u8e3s4);
      }
       while (inductionVariable.compareTo_9jj042_k$(count) < 0);
    return stringBuilder.toString();
  }
  function prep(_this__u8e3s4, $this) {
    var result = _this__u8e3s4.rem_rzdobw_k$($this.$modulo_1);
    var tmp;
    switch (result.get_sign_woubd2_k$().get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = result;
        break;
      case 1:
        tmp = result.plus_f4xvv8_k$($this.$modulo_1);
        break;
      case 2:
        tmp = Companion_getInstance_6().get_ZERO_wodlgx_k$();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function ModularBigInteger$Companion$creatorForModulo$1($modulo) {
    this.$modulo_1 = $modulo;
    this.ZERO_1 = new ModularBigInteger(Companion_getInstance_6().get_ZERO_wodlgx_k$(), $modulo, this);
    this.ONE_1 = new ModularBigInteger(Companion_getInstance_6().get_ONE_18jnkz_k$(), $modulo, this);
    this.TWO_1 = new ModularBigInteger(Companion_getInstance_6().get_TWO_18jjnh_k$(), $modulo, this);
    this.TEN_1 = new ModularBigInteger(Companion_getInstance_6().get_TEN_18jk30_k$(), $modulo, this);
  }
  protoOf(ModularBigInteger$Companion$creatorForModulo$1).get_ZERO_wodlgx_k$ = function () {
    return this.ZERO_1;
  };
  protoOf(ModularBigInteger$Companion$creatorForModulo$1).get_ONE_18jnkz_k$ = function () {
    return this.ONE_1;
  };
  protoOf(ModularBigInteger$Companion$creatorForModulo$1).get_TWO_18jjnh_k$ = function () {
    return this.TWO_1;
  };
  protoOf(ModularBigInteger$Companion$creatorForModulo$1).get_TEN_18jk30_k$ = function () {
    return this.TEN_1;
  };
  protoOf(ModularBigInteger$Companion$creatorForModulo$1).fromBigInteger_vytzoc_k$ = function (bigInteger) {
    return new ModularBigInteger(prep(bigInteger, this), this.$modulo_1, this);
  };
  protoOf(ModularBigInteger$Companion$creatorForModulo$1).parseString_rj8x8i_k$ = function (string, base) {
    return new ModularBigInteger(prep(Companion_getInstance_6().parseString_rj8x8i_k$(string, base), this), this.$modulo_1, this);
  };
  protoOf(ModularBigInteger$Companion$creatorForModulo$1).fromULong_bnyibi_k$ = function (uLong) {
    return new ModularBigInteger(prep(Companion_getInstance_6().fromULong_bnyibi_k$(uLong), this), this.$modulo_1, this);
  };
  protoOf(ModularBigInteger$Companion$creatorForModulo$1).fromUInt_gep9wf_k$ = function (uInt) {
    return new ModularBigInteger(prep(Companion_getInstance_6().fromUInt_gep9wf_k$(uInt), this), this.$modulo_1, this);
  };
  protoOf(ModularBigInteger$Companion$creatorForModulo$1).fromUShort_gkl0ii_k$ = function (uShort) {
    return new ModularBigInteger(prep(Companion_getInstance_6().fromUShort_gkl0ii_k$(uShort), this), this.$modulo_1, this);
  };
  protoOf(ModularBigInteger$Companion$creatorForModulo$1).fromUByte_nkoevi_k$ = function (uByte) {
    return new ModularBigInteger(prep(Companion_getInstance_6().fromUByte_nkoevi_k$(uByte), this), this.$modulo_1, this);
  };
  protoOf(ModularBigInteger$Companion$creatorForModulo$1).fromLong_rbvu5k_k$ = function (long) {
    return new ModularBigInteger(prep(Companion_getInstance_6().fromLong_rbvu5k_k$(long), this), this.$modulo_1, this);
  };
  protoOf(ModularBigInteger$Companion$creatorForModulo$1).fromInt_wjro43_k$ = function (int) {
    return new ModularBigInteger(prep(Companion_getInstance_6().fromInt_wjro43_k$(int), this), this.$modulo_1, this);
  };
  protoOf(ModularBigInteger$Companion$creatorForModulo$1).fromShort_qmrdxi_k$ = function (short) {
    return new ModularBigInteger(prep(Companion_getInstance_6().fromShort_qmrdxi_k$(short), this), this.$modulo_1, this);
  };
  protoOf(ModularBigInteger$Companion$creatorForModulo$1).fromByte_i1k4na_k$ = function (byte) {
    return new ModularBigInteger(prep(Companion_getInstance_6().fromByte_i1k4na_k$(byte), this), this.$modulo_1, this);
  };
  protoOf(ModularBigInteger$Companion$creatorForModulo$1).tryFromFloat_izmgak_k$ = function (float, exactRequired) {
    return new ModularBigInteger(prep(Companion_getInstance_6().tryFromFloat_izmgak_k$(float, exactRequired), this), this.$modulo_1, this);
  };
  protoOf(ModularBigInteger$Companion$creatorForModulo$1).tryFromDouble_r3v8np_k$ = function (double, exactRequired) {
    return new ModularBigInteger(prep(Companion_getInstance_6().tryFromDouble_r3v8np_k$(double, exactRequired), this), this.$modulo_1, this);
  };
  function _get_creator__5ri6cb($this) {
    return $this.creator_1;
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  protoOf(Companion_2).creatorForModulo_dow7pq_k$ = function (modulo) {
    return this.creatorForModulo_exd2r5_k$(Companion_getInstance_6().fromULong_bnyibi_k$(modulo));
  };
  protoOf(Companion_2).creatorForModulo_qzk6eq_k$ = function (modulo) {
    return this.creatorForModulo_exd2r5_k$(Companion_getInstance_6().fromUInt_gep9wf_k$(modulo));
  };
  protoOf(Companion_2).creatorForModulo_7ydhqw_k$ = function (modulo) {
    return this.creatorForModulo_exd2r5_k$(Companion_getInstance_6().fromUShort_gkl0ii_k$(modulo));
  };
  protoOf(Companion_2).creatorForModulo_j3foni_k$ = function (modulo) {
    return this.creatorForModulo_exd2r5_k$(Companion_getInstance_6().fromUByte_nkoevi_k$(modulo));
  };
  protoOf(Companion_2).creatorForModulo_4ms03f_k$ = function (modulo) {
    return this.creatorForModulo_exd2r5_k$(Companion_getInstance_6().fromLong_rbvu5k_k$(modulo));
  };
  protoOf(Companion_2).creatorForModulo_bk27rv_k$ = function (modulo) {
    return this.creatorForModulo_exd2r5_k$(Companion_getInstance_6().fromInt_wjro43_k$(modulo));
  };
  protoOf(Companion_2).creatorForModulo_z590w5_k$ = function (modulo) {
    return this.creatorForModulo_exd2r5_k$(Companion_getInstance_6().fromShort_qmrdxi_k$(modulo));
  };
  protoOf(Companion_2).creatorForModulo_lugw9n_k$ = function (modulo) {
    return this.creatorForModulo_exd2r5_k$(Companion_getInstance_6().fromByte_i1k4na_k$(modulo));
  };
  protoOf(Companion_2).creatorForModulo_exd2r5_k$ = function (modulo) {
    return new ModularBigInteger$Companion$creatorForModulo$1(modulo);
  };
  var Companion_instance_2;
  function Companion_getInstance_7() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function assertSameModulo($this, other) {
    if (!$this.modulus_1.equals(other.modulus_1)) {
      throw RuntimeException_init_$Create$('Different moduli! This ' + $this.modulus_1 + '\n Other ' + other.modulus_1);
    }
  }
  function checkIfDivisible($this, other) {
    if (!other.residue_1.gcd_zd7ttw_k$($this.modulus_1).equals(Companion_getInstance_6().get_ONE_18jnkz_k$())) {
      throw ArithmeticException_init_$Create$('BigInteger is not invertible. Operand and modulus are not relatively prime (coprime)');
    }
  }
  function ModularBigInteger(signedResidue, modulus, creator) {
    Companion_getInstance_7();
    this.modulus_1 = modulus;
    this.creator_1 = creator;
    var tmp = this;
    var tmp_0;
    switch (signedResidue.get_sign_woubd2_k$().get_ordinal_ip24qg_k$()) {
      case 0:
        tmp_0 = signedResidue;
        break;
      case 1:
        tmp_0 = signedResidue.plus_f4xvv8_k$(this.modulus_1);
        break;
      case 2:
        tmp_0 = Companion_getInstance_6().get_ZERO_wodlgx_k$();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    tmp.residue_1 = tmp_0;
    if (this.modulus_1.get_sign_woubd2_k$().equals(Sign_NEGATIVE_getInstance())) {
      throw ArithmeticException_init_$Create$('Modulus must be a positive number');
    }
  }
  protoOf(ModularBigInteger).get_modulus_lkc4ge_k$ = function () {
    return this.modulus_1;
  };
  protoOf(ModularBigInteger).get_residue_jescrm_k$ = function () {
    return this.residue_1;
  };
  protoOf(ModularBigInteger).getCreator_y5p0ja_k$ = function () {
    return this.creator_1;
  };
  protoOf(ModularBigInteger).getInstance_rhh4hh_k$ = function () {
    return this;
  };
  protoOf(ModularBigInteger).add_j9xjp0_k$ = function (other) {
    assertSameModulo(this, other);
    return new ModularBigInteger(this.residue_1.plus_f4xvv8_k$(other.residue_1).rem_rzdobw_k$(this.modulus_1), this.modulus_1, this.creator_1);
  };
  protoOf(ModularBigInteger).add_vp5qlp_k$ = function (other) {
    return this.add_j9xjp0_k$(other instanceof ModularBigInteger ? other : THROW_CCE());
  };
  protoOf(ModularBigInteger).subtract_pvtsef_k$ = function (other) {
    assertSameModulo(this, other);
    return new ModularBigInteger(this.residue_1.minus_e48fwe_k$(other.residue_1).rem_rzdobw_k$(this.modulus_1), this.modulus_1, this.creator_1);
  };
  protoOf(ModularBigInteger).subtract_tgddne_k$ = function (other) {
    return this.subtract_pvtsef_k$(other instanceof ModularBigInteger ? other : THROW_CCE());
  };
  protoOf(ModularBigInteger).multiply_90z6s7_k$ = function (other) {
    assertSameModulo(this, other);
    return new ModularBigInteger(this.residue_1.times_wzgsx4_k$(other.residue_1).rem_rzdobw_k$(this.modulus_1), this.modulus_1, this.creator_1);
  };
  protoOf(ModularBigInteger).multiply_t4mx56_k$ = function (other) {
    return this.multiply_90z6s7_k$(other instanceof ModularBigInteger ? other : THROW_CCE());
  };
  protoOf(ModularBigInteger).divide_zha8r0_k$ = function (other) {
    assertSameModulo(this, other);
    var modInverse = other.residue_1.modInverse_crfdva_k$(this.modulus_1);
    var result = modInverse.times_wzgsx4_k$(this.residue_1).rem_rzdobw_k$(this.modulus_1);
    return new ModularBigInteger(result, this.modulus_1, this.creator_1);
  };
  protoOf(ModularBigInteger).divide_gsrehh_k$ = function (other) {
    return this.divide_zha8r0_k$(other instanceof ModularBigInteger ? other : THROW_CCE());
  };
  protoOf(ModularBigInteger).remainder_ttrugo_k$ = function (other) {
    assertSameModulo(this, other);
    checkIfDivisible(this, other);
    var remainder = this.residue_1.rem_rzdobw_k$(other.residue_1);
    var result = remainder.rem_rzdobw_k$(this.modulus_1);
    return new ModularBigInteger(result, this.modulus_1, this.creator_1);
  };
  protoOf(ModularBigInteger).remainder_xdfn55_k$ = function (other) {
    return this.remainder_ttrugo_k$(other instanceof ModularBigInteger ? other : THROW_CCE());
  };
  protoOf(ModularBigInteger).divideAndRemainder_e9youe_k$ = function (other) {
    assertSameModulo(this, other);
    checkIfDivisible(this, other);
    var quotientAndRemainder = this.residue_1.divrem_kdohd1_k$(other.residue_1);
    var quotient = quotientAndRemainder.get_quotient_ooukvo_k$().rem_rzdobw_k$(this.modulus_1);
    var remainder = quotientAndRemainder.get_remainder_mwecu4_k$().rem_rzdobw_k$(this.modulus_1);
    return new Pair(new ModularBigInteger(quotient, this.modulus_1, this.creator_1), new ModularBigInteger(remainder, this.modulus_1, this.creator_1));
  };
  protoOf(ModularBigInteger).divideAndRemainder_mqts87_k$ = function (other) {
    return this.divideAndRemainder_e9youe_k$(other instanceof ModularBigInteger ? other : THROW_CCE());
  };
  protoOf(ModularBigInteger).inverse_wevods_k$ = function () {
    var inverse = this.residue_1.modInverse_crfdva_k$(this.modulus_1);
    return new ModularBigInteger(inverse, this.modulus_1, this.creator_1);
  };
  protoOf(ModularBigInteger).compare_87vtmg_k$ = function (other) {
    assertSameModulo(this, other);
    return this.residue_1.compareTo_m610zm_k$(other.residue_1);
  };
  protoOf(ModularBigInteger).isZero_jihrta_k$ = function () {
    return this.residue_1.isZero_jihrta_k$();
  };
  protoOf(ModularBigInteger).negate_hcqk8u_k$ = function () {
    return this;
  };
  protoOf(ModularBigInteger).abs_22cy_k$ = function () {
    return this;
  };
  protoOf(ModularBigInteger).pow_it6u2z_k$ = function (exponent) {
    return this.pow_cw79ck_k$(exponent.residue_1);
  };
  protoOf(ModularBigInteger).pow_cw79ck_k$ = function (exponent) {
    var e = exponent;
    var tmp;
    if (this.modulus_1.equals(Companion_getInstance_6().get_ONE_18jnkz_k$())) {
      tmp = this.creator_1.get_ZERO_wodlgx_k$();
    } else {
      var residue = Companion_getInstance_6().get_ONE_18jnkz_k$();
      var base = this.residue_1;
      while (e.compareTo_m610zm_k$(0) > 0) {
        if (e.rem_agrhqa_k$(2).equals(Companion_getInstance_6().get_ONE_18jnkz_k$())) {
          residue = residue.times_wzgsx4_k$(base).rem_rzdobw_k$(this.modulus_1);
        }
        e = e.shr_9fl3wl_k$(1);
        base = base.pow_iykav4_k$(2).rem_rzdobw_k$(this.modulus_1);
      }
      tmp = new ModularBigInteger(residue, this.modulus_1, this.creator_1);
    }
    return tmp;
  };
  protoOf(ModularBigInteger).pow_3xn4h6_k$ = function (exponent) {
    return new ModularBigInteger(this.residue_1.pow_3xn4h6_k$(exponent).rem_rzdobw_k$(this.modulus_1), this.modulus_1, this.creator_1);
  };
  protoOf(ModularBigInteger).pow_iykav4_k$ = function (exponent) {
    return new ModularBigInteger(this.residue_1.pow_iykav4_k$(exponent).rem_rzdobw_k$(this.modulus_1), this.modulus_1, this.creator_1);
  };
  protoOf(ModularBigInteger).signum_exb08b_k$ = function () {
    return this.residue_1.signum_exb08b_k$();
  };
  protoOf(ModularBigInteger).numberOfDecimalDigits_wouqvd_k$ = function () {
    return this.residue_1.numberOfDecimalDigits_wouqvd_k$();
  };
  protoOf(ModularBigInteger).unaryMinus_6uz0qp_k$ = function () {
    return this.negate_hcqk8u_k$();
  };
  protoOf(ModularBigInteger).secureOverwrite_5au9ks_k$ = function () {
    this.residue_1.secureOverwrite_5au9ks_k$();
  };
  protoOf(ModularBigInteger).rem_w11qrx_k$ = function (other) {
    return this.remainder_ttrugo_k$(other);
  };
  protoOf(ModularBigInteger).rem_rzdobw_k$ = function (other) {
    return this.rem_w11qrx_k$(other instanceof ModularBigInteger ? other : THROW_CCE());
  };
  protoOf(ModularBigInteger).compareTo_m610zm_k$ = function (other) {
    var tmp;
    if (other instanceof ModularBigInteger) {
      tmp = this.compare_87vtmg_k$(other);
    } else {
      if (other instanceof BigInteger) {
        tmp = this.residue_1.compare_ivkmfz_k$(other);
      } else {
        if (other instanceof Long) {
          tmp = this.compare_87vtmg_k$(this.creator_1.fromLong_rbvu5k_k$(other));
        } else {
          if (typeof other === 'number') {
            tmp = this.compare_87vtmg_k$(this.creator_1.fromInt_wjro43_k$(other));
          } else {
            if (typeof other === 'number') {
              tmp = this.compare_87vtmg_k$(this.creator_1.fromShort_qmrdxi_k$(other));
            } else {
              if (typeof other === 'number') {
                tmp = this.compare_87vtmg_k$(this.creator_1.fromByte_i1k4na_k$(other));
              } else {
                throw RuntimeException_init_$Create$('Invalid comparison type for BigInteger: ' + toString(other));
              }
            }
          }
        }
      }
    }
    return tmp;
  };
  protoOf(ModularBigInteger).equals = function (other) {
    var tmp;
    if (other == null) {
      tmp = false;
    } else {
      tmp = this.compareTo_m610zm_k$(other) === 0;
    }
    return tmp;
  };
  protoOf(ModularBigInteger).toString = function () {
    return this.residue_1.toString();
  };
  protoOf(ModularBigInteger).toString_w4mr8s_k$ = function (base) {
    return this.residue_1.toString_w4mr8s_k$(base);
  };
  protoOf(ModularBigInteger).toStringWithModulo_yq20a8_k$ = function (base) {
    return this.residue_1.toString_w4mr8s_k$(base) + ' mod ' + this.modulus_1.toString_w4mr8s_k$(base);
  };
  protoOf(ModularBigInteger).toStringWithModulo$default_3e9056_k$ = function (base, $super) {
    base = base === VOID ? 10 : base;
    return $super === VOID ? this.toStringWithModulo_yq20a8_k$(base) : $super.toStringWithModulo_yq20a8_k$.call(this, base);
  };
  protoOf(ModularBigInteger).divrem_62mu2k_k$ = function (other) {
    var result = this.divideAndRemainder_e9youe_k$(other);
    return new ModularQuotientAndRemainder(result.get_first_irdx8n_k$(), result.get_second_jf7fjx_k$());
  };
  protoOf(ModularBigInteger).toBigInteger_xwiad5_k$ = function () {
    return this.residue_1;
  };
  protoOf(ModularBigInteger).checkIfDivisibleBoolean_bf7n4w_k$ = function (first, second) {
    return second.residue_1.gcd_zd7ttw_k$(first.modulus_1).equals(Companion_getInstance_6().get_ONE_18jnkz_k$());
  };
  protoOf(ModularBigInteger).intValue_7o5gpp_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      // Inline function 'kotlin.toUInt' call
      var this_0 = IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$();
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
      tmp = this.residue_1.compareTo_m610zm_k$(new UInt(tmp$ret$0)) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to int and provide exact value');
    }
    return this.residue_1.intValue_7o5gpp_k$(exactRequired);
  };
  protoOf(ModularBigInteger).longValue_919ii8_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      // Inline function 'kotlin.toUInt' call
      var this_0 = Companion_getInstance().get_MAX_VALUE_54a9lf_k$();
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0.toInt_1tsl84_k$());
      tmp = this.residue_1.compareTo_m610zm_k$(new UInt(tmp$ret$0)) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to long and provide exact value');
    }
    return this.residue_1.longValue_919ii8_k$(exactRequired);
  };
  protoOf(ModularBigInteger).byteValue_eif72c_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      // Inline function 'kotlin.toUInt' call
      var this_0 = ByteCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$();
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
      tmp = this.residue_1.compareTo_m610zm_k$(new UInt(tmp$ret$0)) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to byte and provide exact value');
    }
    return this.residue_1.byteValue_eif72c_k$(exactRequired);
  };
  protoOf(ModularBigInteger).shortValue_w04c9c_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      // Inline function 'kotlin.toUInt' call
      var this_0 = ShortCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$();
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(this_0);
      tmp = this.residue_1.compareTo_m610zm_k$(new UInt(tmp$ret$0)) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to short and provide exact value');
    }
    return this.residue_1.shortValue_w04c9c_k$(exactRequired);
  };
  protoOf(ModularBigInteger).uintValue_8037ik_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      // Inline function 'kotlin.UInt.toUInt' call
      var tmp$ret$0 = Companion_getInstance_0().get_MAX_VALUE_bmdakz_k$();
      tmp = this.residue_1.compareTo_m610zm_k$(new UInt(tmp$ret$0)) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to unsigned int and provide exact value');
    }
    return this.residue_1.uintValue_8037ik_k$(exactRequired);
  };
  protoOf(ModularBigInteger).ulongValue_759jq8_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      // Inline function 'kotlin.ULong.toUInt' call
      var this_0 = Companion_getInstance_1().get_MAX_VALUE_53xrtk_k$();
      // Inline function 'kotlin.toUInt' call
      var this_1 = _ULong___get_data__impl__fggpzb(this_0);
      var tmp$ret$1 = _UInt___init__impl__l7qpdl(this_1.toInt_1tsl84_k$());
      tmp = this.residue_1.compareTo_m610zm_k$(new UInt(tmp$ret$1)) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to unsigned long and provide exact value');
    }
    return this.residue_1.ulongValue_759jq8_k$(exactRequired);
  };
  protoOf(ModularBigInteger).ubyteValue_v7eqw0_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      // Inline function 'kotlin.UByte.toUInt' call
      var this_0 = Companion_getInstance_2().get_MAX_VALUE_53rlic_k$();
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(_UByte___get_data__impl__jof9qr(this_0) & 255);
      tmp = this.residue_1.compareTo_m610zm_k$(new UInt(tmp$ret$0)) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to unsigned byte and provide exact value');
    }
    return this.residue_1.ubyteValue_v7eqw0_k$(exactRequired);
  };
  protoOf(ModularBigInteger).ushortValue_epxg36_k$ = function (exactRequired) {
    var tmp;
    if (exactRequired) {
      // Inline function 'kotlin.UShort.toUInt' call
      var this_0 = Companion_getInstance_3().get_MAX_VALUE_gfkyu8_k$();
      var tmp$ret$0 = _UInt___init__impl__l7qpdl(_UShort___get_data__impl__g0245(this_0) & 65535);
      tmp = this.residue_1.compareTo_m610zm_k$(new UInt(tmp$ret$0)) > 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      throw ArithmeticException_init_$Create$('Cannot convert to unsigned short and provide exact value');
    }
    return this.residue_1.ushortValue_epxg36_k$(exactRequired);
  };
  protoOf(ModularBigInteger).floatValue_cm9a28_k$ = function (exactRequired) {
    return this.residue_1.floatValue$default_hzri28_k$();
  };
  protoOf(ModularBigInteger).doubleValue_uyt9c5_k$ = function (exactRequired) {
    return this.residue_1.doubleValue$default_o42zkr_k$();
  };
  protoOf(ModularBigInteger).toUByteArray_vpwqbl_k$ = function () {
    return this.residue_1.toUByteArray_vpwqbl_k$();
  };
  protoOf(ModularBigInteger).toByteArray_qczt2u_k$ = function () {
    return this.residue_1.toByteArray_qczt2u_k$();
  };
  function RuntimePlatform() {
    RuntimePlatform_instance = this;
  }
  protoOf(RuntimePlatform).currentPlatform_2rav3o_k$ = function () {
    return Platform_JS_getInstance();
  };
  var RuntimePlatform_instance;
  function RuntimePlatform_getInstance() {
    if (RuntimePlatform_instance == null)
      new RuntimePlatform();
    return RuntimePlatform_instance;
  }
  //region block: post-declaration
  protoOf(Companion).tryFromFloat$default_ghen6e_k$ = tryFromFloat$default;
  protoOf(Companion).tryFromDouble$default_ofs7np_k$ = tryFromDouble$default;
  protoOf(Companion).parseString$default_73kf6g_k$ = parseString$default;
  protoOf(BigDecimal).intValue$default_bexfr7_k$ = intValue$default;
  protoOf(BigDecimal).longValue$default_6v5prk_k$ = longValue$default;
  protoOf(BigDecimal).byteValue$default_wtbm04_k$ = byteValue$default;
  protoOf(BigDecimal).shortValue$default_dvb900_k$ = shortValue$default;
  protoOf(BigDecimal).uintValue$default_w5bc0k_k$ = uintValue$default;
  protoOf(BigDecimal).ulongValue$default_54nbi8_k$ = ulongValue$default;
  protoOf(BigDecimal).ubyteValue$default_p8yyyo_k$ = ubyteValue$default;
  protoOf(BigDecimal).ushortValue$default_ykpdjm_k$ = ushortValue$default;
  protoOf(BigDecimal).floatValue$default_hzri28_k$ = floatValue$default;
  protoOf(BigDecimal).doubleValue$default_o42zkr_k$ = doubleValue$default;
  protoOf(BigDecimal).get_isNegative_i24zqw_k$ = get_isNegative;
  protoOf(BigDecimal).get_isPositive_kxbjuc_k$ = get_isPositive;
  protoOf(BigDecimal).plus_gv6ohq_k$ = plus_1;
  protoOf(BigDecimal).plus_r93sks_k$ = plus_2;
  protoOf(BigDecimal).plus_7d0ae6_k$ = plus_3;
  protoOf(BigDecimal).plus_hard1a_k$ = plus_4;
  protoOf(BigDecimal).minus_vfk7ag_k$ = minus_0;
  protoOf(BigDecimal).minus_mfbszm_k$ = minus_1;
  protoOf(BigDecimal).minus_t8tq14_k$ = minus_2;
  protoOf(BigDecimal).minus_m4jcmg_k$ = minus_3;
  protoOf(BigDecimal).times_kr2a3y_k$ = times_0;
  protoOf(BigDecimal).times_nfzjiw_k$ = times_1;
  protoOf(BigDecimal).times_pycwwe_k$ = times_2;
  protoOf(BigDecimal).times_l3vm36_k$ = times_3;
  protoOf(BigDecimal).div_fxyyjd_k$ = div_0;
  protoOf(BigDecimal).div_jun7gj_k$ = div_1;
  protoOf(BigDecimal).div_haijbb_k$ = div_2;
  protoOf(BigDecimal).div_op7y5j_k$ = div_3;
  protoOf(BigDecimal).rem_agrhqa_k$ = rem_0;
  protoOf(BigDecimal).rem_bsnl9o_k$ = rem_1;
  protoOf(BigDecimal).rem_g0zx5q_k$ = rem_2;
  protoOf(BigDecimal).rem_wr7kce_k$ = rem_3;
  protoOf(Companion_1).parseString$default_73kf6g_k$ = parseString$default;
  protoOf(Companion_1).tryFromFloat$default_ghen6e_k$ = tryFromFloat$default;
  protoOf(Companion_1).tryFromDouble$default_ofs7np_k$ = tryFromDouble$default;
  protoOf(BigIntegerRange).contains_3tkdvy_k$ = contains_0;
  protoOf(BigIntegerRange).isEmpty_y1axqb_k$ = isEmpty;
  protoOf(BigInteger).intValue$default_bexfr7_k$ = intValue$default;
  protoOf(BigInteger).longValue$default_6v5prk_k$ = longValue$default;
  protoOf(BigInteger).byteValue$default_wtbm04_k$ = byteValue$default;
  protoOf(BigInteger).shortValue$default_dvb900_k$ = shortValue$default;
  protoOf(BigInteger).uintValue$default_w5bc0k_k$ = uintValue$default;
  protoOf(BigInteger).ulongValue$default_54nbi8_k$ = ulongValue$default;
  protoOf(BigInteger).ubyteValue$default_p8yyyo_k$ = ubyteValue$default;
  protoOf(BigInteger).ushortValue$default_ykpdjm_k$ = ushortValue$default;
  protoOf(BigInteger).floatValue$default_hzri28_k$ = floatValue$default;
  protoOf(BigInteger).doubleValue$default_o42zkr_k$ = doubleValue$default;
  protoOf(BigInteger).get_isNegative_i24zqw_k$ = get_isNegative;
  protoOf(BigInteger).get_isPositive_kxbjuc_k$ = get_isPositive;
  protoOf(BigInteger).plus_f4xvv8_k$ = plus_0;
  protoOf(BigInteger).plus_gv6ohq_k$ = plus_1;
  protoOf(BigInteger).plus_r93sks_k$ = plus_2;
  protoOf(BigInteger).plus_7d0ae6_k$ = plus_3;
  protoOf(BigInteger).plus_hard1a_k$ = plus_4;
  protoOf(BigInteger).minus_e48fwe_k$ = minus;
  protoOf(BigInteger).minus_vfk7ag_k$ = minus_0;
  protoOf(BigInteger).minus_mfbszm_k$ = minus_1;
  protoOf(BigInteger).minus_t8tq14_k$ = minus_2;
  protoOf(BigInteger).minus_m4jcmg_k$ = minus_3;
  protoOf(BigInteger).times_wzgsx4_k$ = times;
  protoOf(BigInteger).times_kr2a3y_k$ = times_0;
  protoOf(BigInteger).times_nfzjiw_k$ = times_1;
  protoOf(BigInteger).times_pycwwe_k$ = times_2;
  protoOf(BigInteger).times_l3vm36_k$ = times_3;
  protoOf(BigInteger).div_7cbhfh_k$ = div;
  protoOf(BigInteger).div_fxyyjd_k$ = div_0;
  protoOf(BigInteger).div_jun7gj_k$ = div_1;
  protoOf(BigInteger).div_haijbb_k$ = div_2;
  protoOf(BigInteger).div_op7y5j_k$ = div_3;
  protoOf(BigInteger).rem_rzdobw_k$ = rem;
  protoOf(BigInteger).rem_agrhqa_k$ = rem_0;
  protoOf(BigInteger).rem_bsnl9o_k$ = rem_1;
  protoOf(BigInteger).rem_g0zx5q_k$ = rem_2;
  protoOf(BigInteger).rem_wr7kce_k$ = rem_3;
  protoOf(BigInteger32Arithmetic).toUIntArrayRepresentedAsTypedUByteArray$default_jz6pev_k$ = toUIntArrayRepresentedAsTypedUByteArray$default;
  protoOf(BigInteger32Arithmetic).toUIntArrayRepresentedAsUByteArray$default_cjtszl_k$ = toUIntArrayRepresentedAsUByteArray$default;
  protoOf(ModularBigInteger$Companion$creatorForModulo$1).parseString$default_73kf6g_k$ = parseString$default;
  protoOf(ModularBigInteger$Companion$creatorForModulo$1).tryFromFloat$default_ghen6e_k$ = tryFromFloat$default;
  protoOf(ModularBigInteger$Companion$creatorForModulo$1).tryFromDouble$default_ofs7np_k$ = tryFromDouble$default;
  protoOf(ModularBigInteger).intValue$default_bexfr7_k$ = intValue$default;
  protoOf(ModularBigInteger).longValue$default_6v5prk_k$ = longValue$default;
  protoOf(ModularBigInteger).byteValue$default_wtbm04_k$ = byteValue$default;
  protoOf(ModularBigInteger).shortValue$default_dvb900_k$ = shortValue$default;
  protoOf(ModularBigInteger).uintValue$default_w5bc0k_k$ = uintValue$default;
  protoOf(ModularBigInteger).ulongValue$default_54nbi8_k$ = ulongValue$default;
  protoOf(ModularBigInteger).ubyteValue$default_p8yyyo_k$ = ubyteValue$default;
  protoOf(ModularBigInteger).ushortValue$default_ykpdjm_k$ = ushortValue$default;
  protoOf(ModularBigInteger).floatValue$default_hzri28_k$ = floatValue$default;
  protoOf(ModularBigInteger).doubleValue$default_o42zkr_k$ = doubleValue$default;
  protoOf(ModularBigInteger).get_isNegative_i24zqw_k$ = get_isNegative;
  protoOf(ModularBigInteger).get_isPositive_kxbjuc_k$ = get_isPositive;
  protoOf(ModularBigInteger).plus_f4xvv8_k$ = plus_0;
  protoOf(ModularBigInteger).plus_gv6ohq_k$ = plus_1;
  protoOf(ModularBigInteger).plus_r93sks_k$ = plus_2;
  protoOf(ModularBigInteger).plus_7d0ae6_k$ = plus_3;
  protoOf(ModularBigInteger).plus_hard1a_k$ = plus_4;
  protoOf(ModularBigInteger).minus_e48fwe_k$ = minus;
  protoOf(ModularBigInteger).minus_vfk7ag_k$ = minus_0;
  protoOf(ModularBigInteger).minus_mfbszm_k$ = minus_1;
  protoOf(ModularBigInteger).minus_t8tq14_k$ = minus_2;
  protoOf(ModularBigInteger).minus_m4jcmg_k$ = minus_3;
  protoOf(ModularBigInteger).times_wzgsx4_k$ = times;
  protoOf(ModularBigInteger).times_kr2a3y_k$ = times_0;
  protoOf(ModularBigInteger).times_nfzjiw_k$ = times_1;
  protoOf(ModularBigInteger).times_pycwwe_k$ = times_2;
  protoOf(ModularBigInteger).times_l3vm36_k$ = times_3;
  protoOf(ModularBigInteger).div_7cbhfh_k$ = div;
  protoOf(ModularBigInteger).div_fxyyjd_k$ = div_0;
  protoOf(ModularBigInteger).div_jun7gj_k$ = div_1;
  protoOf(ModularBigInteger).div_haijbb_k$ = div_2;
  protoOf(ModularBigInteger).div_op7y5j_k$ = div_3;
  protoOf(ModularBigInteger).rem_agrhqa_k$ = rem_0;
  protoOf(ModularBigInteger).rem_bsnl9o_k$ = rem_1;
  protoOf(ModularBigInteger).rem_g0zx5q_k$ = rem_2;
  protoOf(ModularBigInteger).rem_wr7kce_k$ = rem_3;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = toBigInteger;
  _.$_$.b = Companion_getInstance_6;
  //endregion
  return _;
}));

//# sourceMappingURL=KotlinBigInteger-bignum-js-ir.js.map
