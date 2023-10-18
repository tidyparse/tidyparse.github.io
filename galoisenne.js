(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './KotlinBigInteger-bignum-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./KotlinBigInteger-bignum-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'galoisenne'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'galoisenne'.");
    }
    if (typeof this['KotlinBigInteger-bignum-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'galoisenne'. Its dependency 'KotlinBigInteger-bignum-js-ir' was not found. Please, check whether 'KotlinBigInteger-bignum-js-ir' is loaded prior to 'galoisenne'.");
    }
    root.galoisenne = factory(typeof galoisenne === 'undefined' ? {} : galoisenne, this['kotlin-kotlin-stdlib'], this['KotlinBigInteger-bignum-js-ir']);
  }
}(this, function (_, kotlin_kotlin, kotlin_com_ionspin_kotlin_bignum) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var tanh = Math.tanh;
  var log2 = Math.log2;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.c6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.i;
  var VOID = kotlin_kotlin.$_$.f;
  var getStringHashCode = kotlin_kotlin.$_$.td;
  var Random = kotlin_kotlin.$_$.if;
  var Collection = kotlin_kotlin.$_$.f5;
  var isInterface = kotlin_kotlin.$_$.fe;
  var numberRangeToNumber = kotlin_kotlin.$_$.pe;
  var THROW_CCE = kotlin_kotlin.$_$.pj;
  var KClass = kotlin_kotlin.$_$.wf;
  var NotImplementedError = kotlin_kotlin.$_$.lj;
  var getKClassFromExpression = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.ef;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.o1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.j;
  var replaceFirst = kotlin_kotlin.$_$.rh;
  var split = kotlin_kotlin.$_$.xh;
  var isCharSequence = kotlin_kotlin.$_$.be;
  var trim = kotlin_kotlin.$_$.ui;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.a1;
  var replace = kotlin_kotlin.$_$.sh;
  var lines = kotlin_kotlin.$_$.nh;
  var isBlank = kotlin_kotlin.$_$.eh;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.u1;
  var compareTo = kotlin_kotlin.$_$.jd;
  var until = kotlin_kotlin.$_$.vf;
  var ensureNotNull = kotlin_kotlin.$_$.fk;
  var joinToString = kotlin_kotlin.$_$.f8;
  var toList = kotlin_kotlin.$_$.za;
  var equals = kotlin_kotlin.$_$.md;
  var compareBy = kotlin_kotlin.$_$.wb;
  var sortedWith = kotlin_kotlin.$_$.ea;
  var numberToInt = kotlin_kotlin.$_$.te;
  var to = kotlin_kotlin.$_$.vk;
  var plus = kotlin_kotlin.$_$.i9;
  var checkIndexOverflow = kotlin_kotlin.$_$.a6;
  var drop = kotlin_kotlin.$_$.zg;
  var dropLast = kotlin_kotlin.$_$.yg;
  var charSequenceLength = kotlin_kotlin.$_$.gd;
  var substringBefore = kotlin_kotlin.$_$.zh;
  var padStart = kotlin_kotlin.$_$.ph;
  var substringAfter = kotlin_kotlin.$_$.yh;
  var padEnd = kotlin_kotlin.$_$.oh;
  var toCharArray = kotlin_kotlin.$_$.di;
  var toSet = kotlin_kotlin.$_$.jb;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.j1;
  var protoOf = kotlin_kotlin.$_$.ye;
  var classMeta = kotlin_kotlin.$_$.id;
  var setMetadataFor = kotlin_kotlin.$_$.ze;
  var objectMeta = kotlin_kotlin.$_$.xe;
  var Unit_getInstance = kotlin_kotlin.$_$.d5;
  var Exception = kotlin_kotlin.$_$.fj;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.u;
  var Map = kotlin_kotlin.$_$.p5;
  var objectCreate = kotlin_kotlin.$_$.we;
  var copyToArray = kotlin_kotlin.$_$.d7;
  var toSet_0 = kotlin_kotlin.$_$.ib;
  var toSet_1 = kotlin_kotlin.$_$.hb;
  var emptySet = kotlin_kotlin.$_$.k7;
  var firstOrNull = kotlin_kotlin.$_$.n7;
  var interfaceMeta = kotlin_kotlin.$_$.wd;
  var KProperty0 = kotlin_kotlin.$_$.yf;
  var getPropertyCallableRef = kotlin_kotlin.$_$.sd;
  var KMutableProperty1 = kotlin_kotlin.$_$.xf;
  var setOf = kotlin_kotlin.$_$.v9;
  var toList_0 = kotlin_kotlin.$_$.ii;
  var zipWithNext = kotlin_kotlin.$_$.tb;
  var toString_0 = kotlin_kotlin.$_$.m2;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v;
  var take = kotlin_kotlin.$_$.qg;
  var toList_1 = kotlin_kotlin.$_$.rg;
  var Pair = kotlin_kotlin.$_$.mj;
  var addAll = kotlin_kotlin.$_$.u5;
  var intersect = kotlin_kotlin.$_$.d8;
  var plus_0 = kotlin_kotlin.$_$.g9;
  var KProperty1 = kotlin_kotlin.$_$.zf;
  var charSequenceGet = kotlin_kotlin.$_$.fd;
  var Char = kotlin_kotlin.$_$.yi;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.h2;
  var mapCapacity = kotlin_kotlin.$_$.s8;
  var coerceAtLeast = kotlin_kotlin.$_$.pf;
  var LinkedHashMap_init_$Create$_1 = kotlin_kotlin.$_$.r;
  var toMutableMap = kotlin_kotlin.$_$.fb;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.qk;
  var flatten = kotlin_kotlin.$_$.r7;
  var toMutableSet = kotlin_kotlin.$_$.gb;
  var retainAll = kotlin_kotlin.$_$.q9;
  var lazy = kotlin_kotlin.$_$.mk;
  var get_indices = kotlin_kotlin.$_$.c8;
  var zip = kotlin_kotlin.$_$.ub;
  var toMap = kotlin_kotlin.$_$.cb;
  var println = kotlin_kotlin.$_$.wc;
  var List = kotlin_kotlin.$_$.n5;
  var minus = kotlin_kotlin.$_$.z8;
  var plus_1 = kotlin_kotlin.$_$.f9;
  var contains = kotlin_kotlin.$_$.vg;
  var listOf = kotlin_kotlin.$_$.r8;
  var Triple = kotlin_kotlin.$_$.rj;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.w1;
  var hashCode = kotlin_kotlin.$_$.ud;
  var Set = kotlin_kotlin.$_$.t5;
  var plus_2 = kotlin_kotlin.$_$.e9;
  var Comparator = kotlin_kotlin.$_$.aj;
  var compareValues = kotlin_kotlin.$_$.xb;
  var minus_0 = kotlin_kotlin.$_$.x8;
  var listOf_0 = kotlin_kotlin.$_$.q8;
  var fillArrayVal = kotlin_kotlin.$_$.nd;
  var toIntArray = kotlin_kotlin.$_$.va;
  var emptyList = kotlin_kotlin.$_$.i7;
  var dropLast_0 = kotlin_kotlin.$_$.g7;
  var last = kotlin_kotlin.$_$.p8;
  var plus_3 = kotlin_kotlin.$_$.j9;
  var removeAll = kotlin_kotlin.$_$.l9;
  var toMutableList = kotlin_kotlin.$_$.db;
  var takeLast = kotlin_kotlin.$_$.na;
  var drop_0 = kotlin_kotlin.$_$.h7;
  var first = kotlin_kotlin.$_$.p7;
  var mutableSetOf = kotlin_kotlin.$_$.c9;
  var toSet_2 = kotlin_kotlin.$_$.sg;
  var toBigInteger = kotlin_com_ionspin_kotlin_bignum.$_$.a;
  var toInt = kotlin_kotlin.$_$.hi;
  var shuffled = kotlin_kotlin.$_$.x9;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var Companion_getInstance = kotlin_com_ionspin_kotlin_bignum.$_$.b;
  var map = kotlin_kotlin.$_$.kg;
  var addAll_0 = kotlin_kotlin.$_$.v5;
  var distinct = kotlin_kotlin.$_$.f7;
  var CoroutineImpl = kotlin_kotlin.$_$.qc;
  var SequenceScope = kotlin_kotlin.$_$.bg;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.ac;
  var asSequence = kotlin_kotlin.$_$.z5;
  var sequence = kotlin_kotlin.$_$.og;
  var generateSequence = kotlin_kotlin.$_$.jg;
  var Default_getInstance = kotlin_kotlin.$_$.s4;
  var random = kotlin_kotlin.$_$.k9;
  var emptyMap = kotlin_kotlin.$_$.j7;
  var mapOf = kotlin_kotlin.$_$.t8;
  var distinct_0 = kotlin_kotlin.$_$.dg;
  var sequenceOf = kotlin_kotlin.$_$.ng;
  var Monotonic_getInstance = kotlin_kotlin.$_$.v4;
  var ValueTimeMark__elapsedNow_impl_eonqvs = kotlin_kotlin.$_$.g2;
  var TimedValue = kotlin_kotlin.$_$.wi;
  var Duration = kotlin_kotlin.$_$.vi;
  var SuspendFunction1 = kotlin_kotlin.$_$.rc;
  var booleanArray = kotlin_kotlin.$_$.ad;
  var booleanArrayOf = kotlin_kotlin.$_$.zc;
  var first_0 = kotlin_kotlin.$_$.bh;
  var last_0 = kotlin_kotlin.$_$.mh;
  var setOf_0 = kotlin_kotlin.$_$.w9;
  var filterNot = kotlin_kotlin.$_$.eg;
  var zip_0 = kotlin_kotlin.$_$.tg;
  var toMap_0 = kotlin_kotlin.$_$.bb;
  var toBooleanArray = kotlin_kotlin.$_$.ra;
  var first_1 = kotlin_kotlin.$_$.o7;
  var asReversed = kotlin_kotlin.$_$.y5;
  var union = kotlin_kotlin.$_$.ob;
  var Char__rangeTo_impl_tkncvp = kotlin_kotlin.$_$.k2;
  var plus_4 = kotlin_kotlin.$_$.mg;
  var filter = kotlin_kotlin.$_$.fg;
  var onEach = kotlin_kotlin.$_$.lg;
  var firstOrNull_0 = kotlin_kotlin.$_$.m7;
  var flatMap = kotlin_kotlin.$_$.hg;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var takeWhile = kotlin_kotlin.$_$.pg;
  var unzip = kotlin_kotlin.$_$.pb;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.e2;
  var toLong = kotlin_kotlin.$_$.cf;
  var removeFirst = kotlin_kotlin.$_$.o9;
  var joinToString_0 = kotlin_kotlin.$_$.g8;
  var replace_0 = kotlin_kotlin.$_$.th;
  var charArrayOf = kotlin_kotlin.$_$.dd;
  var split_0 = kotlin_kotlin.$_$.wh;
  var IntCompanionObject_getInstance = kotlin_kotlin.$_$.p4;
  var downTo = kotlin_kotlin.$_$.tf;
  var plus_5 = kotlin_kotlin.$_$.h9;
  var toDoubleArray = kotlin_kotlin.$_$.ta;
  var toString_1 = kotlin_kotlin.$_$.mi;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.o3;
  var Long = kotlin_kotlin.$_$.jj;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.n3;
  var ULongRange = kotlin_kotlin.$_$.of;
  var nextULong = kotlin_kotlin.$_$.jf;
  var ULong = kotlin_kotlin.$_$.xj;
  var mapOf_0 = kotlin_kotlin.$_$.u8;
  var plus_6 = kotlin_kotlin.$_$.d9;
  var toList_2 = kotlin_kotlin.$_$.xa;
  var take_0 = kotlin_kotlin.$_$.qa;
  var getOrNull = kotlin_kotlin.$_$.s7;
  var toList_3 = kotlin_kotlin.$_$.ab;
  var windowed = kotlin_kotlin.$_$.qb;
  var mutableListOf = kotlin_kotlin.$_$.a9;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.t1;
  var getObjectHashCode = kotlin_kotlin.$_$.rd;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c1;
  var isWhitespace = kotlin_kotlin.$_$.jh;
  var distinct_1 = kotlin_kotlin.$_$.e7;
  var maxOrNull = kotlin_kotlin.$_$.v8;
  var chunked = kotlin_kotlin.$_$.b6;
  var sorted = kotlin_kotlin.$_$.ga;
  var minus_1 = kotlin_kotlin.$_$.w8;
  var toString_2 = kotlin_kotlin.$_$.uk;
  var digitToInt = kotlin_kotlin.$_$.xg;
  var toDoubleArray_0 = kotlin_kotlin.$_$.sa;
  var filterNotNull = kotlin_kotlin.$_$.l7;
  var contentEquals = kotlin_kotlin.$_$.h6;
  var trimIndent = kotlin_kotlin.$_$.ti;
  var newThrowable = kotlin_kotlin.$_$.oe;
  var stackTraceToString = kotlin_kotlin.$_$.pk;
  var generateSequence_0 = kotlin_kotlin.$_$.ig;
  var Sequence = kotlin_kotlin.$_$.cg;
  var ReadOnlyProperty = kotlin_kotlin.$_$.hf;
  var abs = kotlin_kotlin.$_$.ff;
  var first_2 = kotlin_kotlin.$_$.gg;
  var contains_0 = kotlin_kotlin.$_$.d6;
  var removeLast = kotlin_kotlin.$_$.p9;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.nk;
  var get_lastIndex = kotlin_kotlin.$_$.k8;
  var removeAll_0 = kotlin_kotlin.$_$.m9;
  var sortWith = kotlin_kotlin.$_$.da;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.p;
  var THROW_IAE = kotlin_kotlin.$_$.qj;
  var enumEntries = kotlin_kotlin.$_$.vc;
  var Enum = kotlin_kotlin.$_$.dj;
  var MutableList = kotlin_kotlin.$_$.q5;
  //endregion
  //region block: pre-declaration
  setMetadataFor(BVec_3, 'BVec', classMeta);
  setMetadataFor(BVec10, 'BVec10', classMeta, BVec_3);
  setMetadataFor(Bool, 'Bool', classMeta);
  setMetadataFor(龖, '\u9F96', objectMeta, Bool);
  setMetadataFor(口, '\u53E3', objectMeta, Bool);
  setMetadataFor(BVec4, 'BVec4', classMeta, BVec_3);
  setMetadataFor(BVec2, 'BVec2', classMeta, BVec_3);
  setMetadataFor(BVec5, 'BVec5', classMeta, BVec_3);
  setMetadataFor(LRUCache, 'LRUCache', classMeta, VOID, VOID, LRUCache);
  setMetadataFor(Companion, 'Companion', objectMeta);
  function V(out) {
    var reason = 'Must override me if you want a fresh vertex';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  }
  function G() {
    var tmp = this.get_G0_kntory_k$();
    // Inline function 'kotlin.collections.setOf' call
    return tmp(emptySet());
  }
  function G_0(graphs) {
    return this.G_14nq2q_k$(toList_3(graphs));
  }
  function G_1(vertices) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(vertices.length);
    var inductionVariable = 0;
    var last = vertices.length;
    while (inductionVariable < last) {
      var item = vertices[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'ai.hypergraph.kaliningraph.types.IGF.G.<anonymous>' call
      var tmp$ret$0 = get_graph_0(item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return this.G_14nq2q_k$(destination);
  }
  function G_2(list) {
    // Inline function 'kotlin.let' call
    var tmp;
    if (list.isEmpty_y1axqb_k$()) {
      // Inline function 'kotlin.collections.setOf' call
      tmp = emptySet();
    } else if (allAre(list, this.G_1z_k$())) {
      // Inline function 'kotlin.collections.fold' call
      var accumulator = this.G_1z_k$();
      var tmp0_iterator = list.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.types.IGF.G.<anonymous>' call
        accumulator = accumulator.plus_ru5xrw_k$(isInterface(element, IGraph) ? element : THROW_CCE());
      }
      tmp = accumulator;
    } else if (allAre(list, first_1(list))) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(list, 10));
      var tmp0_iterator_0 = list.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.types.IGF.G.<anonymous>' call
        var tmp$ret$3 = isInterface(item, IVertex) ? item : THROW_CCE();
        destination.add_utx5q5_k$(tmp$ret$3);
      }
      tmp = toSet_1(destination);
    } else {
      throw Exception_init_$Create$('Unsupported constructor: G(' + joinToString(list, ',', VOID, VOID, VOID, VOID, IGF$G$lambda) + ')');
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.IGF.G.<anonymous>' call
    var it = tmp;
    return this.get_G0_kntory_k$()(it);
  }
  setMetadataFor(IGF, 'IGF', interfaceMeta);
  setMetadataFor(AGF, 'AGF', classMeta, VOID, [IGF]);
  setMetadataFor(Encodable, 'Encodable', interfaceMeta);
  function neighbors(k, vertices) {
    var tmp;
    if (k === 0 ? true : equals(neighbors_0(vertices, this), vertices)) {
      tmp = vertices;
    } else {
      var tmp_0 = k - 1 | 0;
      var tmp_1 = plus_1(vertices, neighbors_0(vertices, this));
      tmp = this.neighbors_2gwtm7_k$(tmp_0, plus_0(tmp_1, isInterface(this, IVertex) ? this : THROW_CCE()));
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
    return $super === VOID ? this.neighbors_2gwtm7_k$(k, vertices) : neighbors(k, vertices);
  }
  function neighborhood() {
    return this.get_G0_kntory_k$()(closure(this.neighbors$default_1qz5l5_k$(0), this));
  }
  setMetadataFor(IVertex, 'IVertex', interfaceMeta, VOID, [IGF, Encodable]);
  setMetadataFor(Vertex, 'Vertex', classMeta, AGF, [AGF, IVertex]);
  function get_E0() {
    return CGFamily$_get_E_$lambda_4bjp4r;
  }
  function get_V0() {
    return CGFamily$_get_V_$lambda_6mkagk;
  }
  function get_G0() {
    return CGFamily$_get_G_$lambda_fkfpj1;
  }
  setMetadataFor(CGFamily, 'CGFamily', interfaceMeta, VOID, [IGF]);
  setMetadataFor(Gate, 'Gate', classMeta, Vertex, [Vertex, CGFamily]);
  setMetadataFor(Var, 'Var', classMeta, Gate, VOID, Var);
  function get(cond) {
    // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
    var this_0 = this.get_vertices_6eva2q_k$();
    // Inline function 'kotlin.apply' call
    var this_1 = toMutableSet(this_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
    retainAll(this_1, cond);
    return this_1;
  }
  function get_index() {
    return new VIndex(this.get_vertices_6eva2q_k$());
  }
  function get_0(vertexIdx) {
    return this.get_index_it478p_k$().get_c1px32_k$(vertexIdx);
  }
  function plus_7(that) {
    return this.get_G0_kntory_k$()(plus_1(plus_1(this.minus_b827a_k$(that), this.join_iynfpw_k$(that)), minus_0(that, this)));
  }
  function minus_2(graph) {
    return this.get_G0_kntory_k$()(minus_0(this.get_vertices_6eva2q_k$(), graph.get_vertices_6eva2q_k$()));
  }
  function join(that) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.sortedBy' call
    var this_0 = intersect(this.get_vertices_6eva2q_k$(), that.get_vertices_6eva2q_k$());
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp = IGraph$join$lambda;
    var tmp$ret$0 = new sam$kotlin_Comparator$0_2(tmp);
    var tmp$ret$1 = sortedWith(this_0, tmp$ret$0);
    var tmp_0 = toSet_1(tmp$ret$1);
    // Inline function 'kotlin.collections.sortedBy' call
    var this_1 = intersect(that.get_vertices_6eva2q_k$(), this.get_vertices_6eva2q_k$());
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_1 = IGraph$join$lambda_0;
    var tmp$ret$2 = new sam$kotlin_Comparator$0_2(tmp_1);
    var tmp$ret$3 = sortedWith(this_1, tmp$ret$2);
    var this_2 = zip(tmp_0, toSet_1(tmp$ret$3));
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator = this_2.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.join.<anonymous>' call
      var left = item.component1_7eebsc_k$();
      var right = item.component2_7eebsb_k$();
      var tmp_2 = this.get_V0_kntof1_k$();
      var tmp$ret$4 = tmp_2(left, IGraph$join$lambda_1(left, right));
      destination.add_utx5q5_k$(tmp$ret$4);
    }
    return toSet_1(destination);
  }
  function reversed() {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.associateWith' call
    var this_0 = this.get_vertices_6eva2q_k$();
    var result = LinkedHashMap_init_$Create$_1(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
    // Inline function 'kotlin.collections.associateWithTo' call
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.reversed.<anonymous>' call
      // Inline function 'kotlin.collections.setOf' call
      var tmp$ret$1 = emptySet();
      result.put_4fpzoq_k$(element, tmp$ret$1);
    }
    var tmp = result;
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var this_1 = this.get_vertices_6eva2q_k$();
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.reversed.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_2 = get_outgoing(element_0);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
      var tmp0_iterator_1 = this_2.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_1.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.reversed.<anonymous>.<anonymous>' call
        var tmp$ret$4 = to(item.get_target_juba8q_k$(), this.get_E0_kntoto_k$()(item.get_target_juba8q_k$(), element_0));
        destination_0.add_utx5q5_k$(tmp$ret$4);
      }
      var list = destination_0;
      addAll(destination, list);
    }
    // Inline function 'kotlin.collections.groupByTo' call
    var destination_1 = LinkedHashMap_init_$Create$();
    var tmp0_iterator_2 = destination.iterator_jk1svi_k$();
    while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
      var element_1 = tmp0_iterator_2.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.reversed.<anonymous>' call
      var key = element_1.get_first_irdx8n_k$();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination_1.get_wei43m_k$(key);
      var tmp_0;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination_1.put_4fpzoq_k$(key, answer);
        tmp_0 = answer;
      } else {
        tmp_0 = value;
      }
      var list_0 = tmp_0;
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.reversed.<anonymous>' call
      var tmp$ret$13 = element_1.get_second_jf7fjx_k$();
      list_0.add_utx5q5_k$(tmp$ret$13);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_2 = LinkedHashMap_init_$Create$_1(mapCapacity(destination_1.get_size_woubt6_k$()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_3 = destination_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
      var element_2 = tmp0_iterator_3.next_20eer_k$();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_1 = element_2.get_key_18j28a_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.reversed.<anonymous>' call
      // Inline function 'kotlin.collections.component2' call
      var v = element_2.get_value_j01efc_k$();
      var tmp$ret$18 = toSet_1(v);
      destination_2.put_4fpzoq_k$(tmp_1, tmp$ret$18);
    }
    var this_3 = plus_6(tmp, destination_2);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_3 = ArrayList_init_$Create$(this_3.get_size_woubt6_k$());
    // Inline function 'kotlin.collections.iterator' call
    var tmp0_iterator_4 = this_3.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator_4.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator_4.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.reversed.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var k = item_0.get_key_18j28a_k$();
      // Inline function 'kotlin.collections.component2' call
      var v_0 = item_0.get_value_j01efc_k$();
      var tmp_2 = this.get_V0_kntof1_k$();
      var tmp$ret$25 = tmp_2(k, IGraph$reversed$lambda(v_0));
      destination_3.add_utx5q5_k$(tmp$ret$25);
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.reversed.<anonymous>' call
    var it = toSet_1(destination_3);
    return this.get_G0_kntory_k$()(it);
  }
  function isomorphicTo(that) {
    return (this.get_size_woubt6_k$() === that.get_size_woubt6_k$() ? get_edges(this).get_size_woubt6_k$() === get_edges(that).get_size_woubt6_k$() : false) ? contentEquals(this.encode_lh9aei_k$(), that.encode_lh9aei_k$()) : false;
  }
  function vwise(lf) {
    var tmp = this.get_size_woubt6_k$();
    return DoubleMatrix_init_$Create$_0(tmp, VOID, IGraph$vwise$lambda(this, lf));
  }
  function reachSequence(from, ADJ, terminateOnFixpoint) {
    return sequence(IGraph$reachSequence$slambda_0(this, from, ADJ, terminateOnFixpoint, null));
  }
  function reachSequence$default(from, ADJ, terminateOnFixpoint, $super) {
    ADJ = ADJ === VOID ? get_A_AUG(this) : ADJ;
    terminateOnFixpoint = terminateOnFixpoint === VOID ? false : terminateOnFixpoint;
    return $super === VOID ? this.reachSequence_7ylrtp_k$(from, ADJ, terminateOnFixpoint) : reachSequence(from, ADJ, terminateOnFixpoint);
  }
  function reachability(from, steps) {
    // Inline function 'kotlin.collections.mapIndexed' call
    var tmp = pow_0(get_A_AUG(this), steps - 1 | 0);
    // Inline function 'kotlin.also' call
    var tmp_0 = this.get_vertices_6eva2q_k$().get_size_woubt6_k$();
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.get_vertices_6eva2q_k$();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.reachability.<anonymous>' call
      var tmp$ret$0 = from.contains_aljjnj_k$(item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var this_1 = new BooleanMatrix(tmp_0, 1, destination);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.reachability.<anonymous>' call
    println('v: ' + this_1.shape_1t4tk1_k$());
    var this_2 = tmp.times_opju7w_k$(this_1).get_data_wokkxf_k$();
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var index = 0;
    var tmp0_iterator_0 = this_2.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.reachability.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var i = checkIndexOverflow(tmp1);
      var tmp$ret$4 = item_0 ? this.get_index_it478p_k$().get_c1px32_k$(i) : null;
      destination_0.add_utx5q5_k$(tmp$ret$4);
    }
    return toSet_1(filterNotNull(destination_0));
  }
  function transitiveClosure(vtxs) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = get_edgList(this);
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.transitiveClosure.<anonymous>' call
      if (vtxs.contains_aljjnj_k$(element.get_first_irdx8n_k$())) {
        destination.add_utx5q5_k$(element);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
    var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.transitiveClosure.<anonymous>' call
      var tmp$ret$3 = item.get_second_jf7fjx_k$().get_target_juba8q_k$();
      destination_0.add_utx5q5_k$(tmp$ret$3);
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.transitiveClosure.<anonymous>' call
    var it = minus_0(toSet_1(destination_0), vtxs);
    return it.isEmpty_y1axqb_k$() ? vtxs : this.transitiveClosure_s5t4xa_k$(plus_1(vtxs, it));
  }
  function randomWalk(r) {
    return new RandomWalk(r, isInterface(this, IGraph) ? this : THROW_CCE());
  }
  function randomWalk$default(r, $super) {
    r = r === VOID ? Default_getInstance() : r;
    return $super === VOID ? this.randomWalk_b6vhw1_k$(r) : randomWalk(r);
  }
  function asString() {
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_edgList(this);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.asString.<anonymous>' call
      var tmp$ret$0 = '' + item.get_first_irdx8n_k$() + ' -> ' + item.get_second_jf7fjx_k$().get_target_juba8q_k$();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return formatAsGrid(destination).toString();
  }
  function toDot() {
    var tmp = this.get_vertices_6eva2q_k$();
    var tmp_0 = joinToString(tmp, '\n', VOID, VOID, VOID, VOID, IGraph$toDot$lambda);
    var tmp_1 = get_edgList(this);
    return trimIndent('\n      strict digraph {\n          graph ["concentrate"="true","rankdir"="LR","bgcolor"="transparent","margin"="0.0","compound"="true","nslimit"="20"]\n          ' + tmp_0 + ' \n          ' + joinToString(tmp_1, '\n', VOID, VOID, VOID, VOID, IGraph$toDot$lambda_0) + '\n      }\n    ');
  }
  setMetadataFor(IGraph, 'IGraph', interfaceMeta, VOID, [IGF, Set, Encodable]);
  setMetadataFor(Graph, 'Graph', classMeta, AGF, [AGF, IGraph, Set]);
  setMetadataFor(ComputationGraph, 'ComputationGraph', classMeta, Graph, [Graph, CGFamily]);
  function component1() {
    return this.get_source_jl0x7o_k$();
  }
  function component2() {
    return this.get_target_juba8q_k$();
  }
  setMetadataFor(IEdge, 'IEdge', interfaceMeta, VOID, [IGF]);
  setMetadataFor(Edge, 'Edge', classMeta, AGF, [AGF, IEdge]);
  setMetadataFor(UnlabeledEdge, 'UnlabeledEdge', classMeta, Edge, [Edge, CGFamily]);
  setMetadataFor(Op, 'Op', interfaceMeta);
  setMetadataFor(TopOp, 'TopOp', classMeta);
  setMetadataFor(Monad, 'Monad', interfaceMeta, VOID, [Op]);
  setMetadataFor(Dyad, 'Dyad', interfaceMeta, VOID, [Op]);
  setMetadataFor(sum, 'sum', objectMeta, TopOp, [TopOp, Monad, Dyad]);
  setMetadataFor(sub, 'sub', objectMeta, TopOp, [TopOp, Monad, Dyad]);
  setMetadataFor(TrigFun, 'TrigFun', interfaceMeta, VOID, [Monad]);
  setMetadataFor(sin, 'sin', objectMeta, TopOp, [TopOp, TrigFun]);
  setMetadataFor(cos, 'cos', objectMeta, TopOp, [TopOp, TrigFun]);
  setMetadataFor(tan, 'tan', objectMeta, TopOp, [TopOp, TrigFun]);
  setMetadataFor(id, 'id', objectMeta, TopOp, [TopOp, Monad]);
  setMetadataFor(transpose, 'transpose', objectMeta, TopOp, [TopOp, Monad]);
  setMetadataFor(prod, 'prod', objectMeta, TopOp, [TopOp, Dyad]);
  setMetadataFor(odot, 'odot', objectMeta, TopOp, [TopOp, Dyad]);
  setMetadataFor(ratio, 'ratio', objectMeta, TopOp, [TopOp, Dyad]);
  setMetadataFor(eql, 'eql', objectMeta, TopOp, [TopOp, Dyad]);
  setMetadataFor(dot_0, 'dot', objectMeta, TopOp, [TopOp, Dyad]);
  setMetadataFor(pow_1, 'pow', objectMeta, TopOp, [TopOp, Dyad]);
  setMetadataFor(log, 'log', objectMeta, TopOp, [TopOp, Dyad]);
  setMetadataFor(d, 'd', objectMeta, TopOp, [TopOp, Dyad]);
  setMetadataFor(Polyad, 'Polyad', interfaceMeta, VOID, [Op]);
  setMetadataFor(λ, '\u03BB', objectMeta, TopOp, [TopOp, Polyad]);
  setMetadataFor(Σ, '\u03A3', objectMeta, TopOp, [TopOp, Polyad]);
  setMetadataFor(Π, '\u03A0', objectMeta, TopOp, [TopOp, Polyad]);
  setMetadataFor(map_1, 'map', objectMeta, TopOp, [TopOp, Polyad]);
  setMetadataFor(Ops, 'Ops', objectMeta);
  setMetadataFor(CircuitBuilder, 'CircuitBuilder', classMeta, VOID, VOID, CircuitBuilder);
  function get_E0_0() {
    return LGFamily$_get_E_$lambda_nhvv0c;
  }
  function get_G0_0() {
    return LGFamily$_get_G_$lambda_c8zum2;
  }
  function get_V0_0() {
    return LGFamily$_get_V_$lambda_yfzuln;
  }
  function V_0(out) {
    return LGVertex_init_$Create$(randomString(), VOID, out);
  }
  function V_1(out) {
    return this.V_5ojmx0_k$(out);
  }
  setMetadataFor(LGFamily, 'LGFamily', interfaceMeta, VOID, [IGF]);
  setMetadataFor(LabeledGraph, 'LabeledGraph', classMeta, Graph, [Graph, LGFamily], LabeledGraph);
  setMetadataFor(Companion_0, 'Companion', objectMeta, LabeledGraph);
  setMetadataFor(ProtoEdge, 'ProtoEdge', classMeta);
  setMetadataFor(LGBuilder, 'LGBuilder', classMeta);
  setMetadataFor(LGVertex, 'LGVertex', classMeta, Vertex, [Vertex, LGFamily], LGVertex_init_$Create$);
  setMetadataFor(LabeledEdge, 'LabeledEdge', classMeta, Edge, [Edge, LGFamily]);
  setMetadataFor(BiMap, 'BiMap', classMeta);
  setMetadataFor(Bindex, 'Bindex', classMeta, VOID, [List]);
  setMetadataFor(JoinMap, 'JoinMap', classMeta);
  setMetadataFor(FrozenCFG, 'FrozenCFG', classMeta, VOID, [Set]);
  setMetadataFor(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(CFL, 'CFL', classMeta);
  setMetadataFor(REL, 'REL', classMeta);
  setMetadataFor(CJL, 'CJL', classMeta);
  setMetadataFor(PTree$sampleWithoutReplacement$slambda, 'PTree$sampleWithoutReplacement$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(PTree, 'PTree', classMeta, VOID, VOID, PTree);
  setMetadataFor(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(sam$kotlin_Comparator$0_1, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(Tree, 'Tree', classMeta);
  setMetadataFor(LFSR$slambda, 'LFSR$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  function get_1(t) {
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp0_elvis_lhs = this.get_map_18j0ul_k$().get_wei43m_k$(t);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'ai.hypergraph.kaliningraph.tensor.SparseTensor.get.<anonymous>' call
      tmp = 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function set(index, i) {
    // Inline function 'kotlin.collections.set' call
    this.get_map_18j0ul_k$().put_4fpzoq_k$(index, i);
  }
  function count(selector) {
    // Inline function 'kotlin.collections.sumOf' call
    var sum = 0;
    var tmp0_iterator = this.get_map_18j0ul_k$().get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      var tmp = sum;
      // Inline function 'ai.hypergraph.kaliningraph.tensor.SparseTensor.count.<anonymous>' call
      sum = tmp + (selector(element.get_key_18j28a_k$()) ? element.get_value_j01efc_k$() : 0) | 0;
    }
    return sum;
  }
  setMetadataFor(SparseTensor, 'SparseTensor', interfaceMeta);
  function get_map() {
    throw new NotImplementedError();
  }
  function shape() {
    return cc(this.get_numRows_vts1uy_k$(), this.get_numCols_vu1mxc_k$());
  }
  function get_2(r, c) {
    var reason = 'Implement support for named indexing';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  }
  function plus_8(t) {
    var tmp = equals(this.shape_1t4tk1_k$(), t.shape_1t4tk1_k$());
    return this.safeJoin$default_1uhuxp_k$(t, VOID, tmp, Matrix$plus$lambda(this, t));
  }
  function times(t) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.tensor.Matrix.times.<anonymous>' call
    var tt = get_transpose(t);
    var tmp = this.get_numCols_vu1mxc_k$() === t.get_numRows_vts1uy_k$();
    return this.safeJoin$default_1uhuxp_k$(t, VOID, tmp, Matrix$times$lambda(this, tt));
  }
  function squareUpperTriangular() {
    var tmp = this.get_numRows_vts1uy_k$();
    var tmp_0 = this.get_numCols_vu1mxc_k$();
    // Inline function 'kotlin.collections.map' call
    var this_0 = allPairs(this.get_numRows_vts1uy_k$(), this.get_numCols_vu1mxc_k$());
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.tensor.Matrix.squareUpperTriangular.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var i = item.get_c1px32_k$(0);
      // Inline function 'kotlin.collections.component2' call
      var j = item.get_c1px32_k$(1);
      var tmp$ret$2 = j <= i ? this.get_algebra_dvz2yp_k$().get_nil_18izx4_k$() : this.dot_dhgddr_k$(take_0(drop_0(this.get_c1px32_k$(i), i + 1 | 0), j), take_0(drop_0(get_cols(this).get_c1px32_k$(j), i + 1 | 0), j));
      destination.add_utx5q5_k$(tmp$ret$2);
    }
    return this.new$default_81ros5_k$(tmp, tmp_0, destination);
  }
  function map_0(f) {
    var tmp = this.get_numRows_vts1uy_k$();
    var tmp_0 = this.get_numCols_vu1mxc_k$();
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.get_data_wokkxf_k$();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      destination.add_utx5q5_k$(f(item));
    }
    var tmp_1 = destination;
    return this.new$default_81ros5_k$(tmp, tmp_0, isInterface(tmp_1, List) ? tmp_1 : THROW_CCE());
  }
  function getElements(filterBy) {
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var this_0 = allPairs(this.get_numRows_vts1uy_k$(), this.get_numCols_vu1mxc_k$());
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'ai.hypergraph.kaliningraph.tensor.Matrix.getElements.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var r = element.get_c1px32_k$(0);
      // Inline function 'kotlin.collections.component2' call
      var c = element.get_c1px32_k$(1);
      var tmp0_safe_receiver = filterBy(r, c) ? this.get_bzg6vq_k$(r, c) : null;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.add_utx5q5_k$(tmp0_safe_receiver);
      }
    }
    return destination;
  }
  function dot(_this__u8e3s4, es) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(_this__u8e3s4.get_size_woubt6_k$() === es.get_size_woubt6_k$())) {
      // Inline function 'ai.hypergraph.kaliningraph.tensor.Matrix.dot.<anonymous>' call
      var message = 'Length mismatch: ' + _this__u8e3s4.get_size_woubt6_k$() + ' . ' + es.get_size_woubt6_k$();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.tensor.Matrix.dot.<anonymous>' call
    // Inline function 'kotlin.with' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.tensor.Matrix.dot.<anonymous>.<anonymous>' call
    var $this$with = this.get_algebra_dvz2yp_k$();
    // Inline function 'kotlin.collections.reduce' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = zip(_this__u8e3s4, es);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.tensor.Matrix.dot.<anonymous>.<anonymous>.<anonymous>' call
      var a = item.component1_7eebsc_k$();
      var b = item.component2_7eebsb_k$();
      var tmp$ret$1 = $this$with.times_v2bgcq_k$(a, b);
      destination.add_utx5q5_k$(tmp$ret$1);
    }
    var iterator = destination.iterator_jk1svi_k$();
    if (!iterator.hasNext_bitz1p_k$())
      throw UnsupportedOperationException_init_$Create$("Empty collection can't be reduced.");
    var accumulator = iterator.next_20eer_k$();
    while (iterator.hasNext_bitz1p_k$()) {
      // Inline function 'ai.hypergraph.kaliningraph.tensor.Matrix.dot.<anonymous>.<anonymous>.<anonymous>' call
      var a_0 = accumulator;
      var b_0 = iterator.next_20eer_k$();
      accumulator = $this$with.plus_oqaz3q_k$(a_0, b_0);
    }
    return accumulator;
  }
  function new$default(rows, cols, data, alg, $super) {
    rows = rows === VOID ? this.get_numRows_vts1uy_k$() : rows;
    cols = cols === VOID ? this.get_numCols_vu1mxc_k$() : cols;
    alg = alg === VOID ? this.get_algebra_dvz2yp_k$() : alg;
    return $super === VOID ? this.new_h99czx_k$(rows, cols, data, alg) : $super.new_h99czx_k$.call(this, rows, cols, data, alg);
  }
  function safeJoin(that, ids, criteria, op) {
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!criteria) {
      // Inline function 'ai.hypergraph.kaliningraph.tensor.Matrix.safeJoin.<anonymous>' call
      var message = 'Dimension mismatch: ' + this.get_numRows_vts1uy_k$() + ',' + this.get_numCols_vu1mxc_k$() + ' . ' + that.get_numRows_vts1uy_k$() + ',' + that.get_numCols_vu1mxc_k$();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.tensor.Matrix.safeJoin.<anonymous>' call
    var tmp = this.get_numRows_vts1uy_k$();
    var tmp_0 = that.get_numCols_vu1mxc_k$();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(ids, 10));
    var tmp0_iterator = ids.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.tensor.Matrix.safeJoin.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.component1' call
      var i = item.get_c1px32_k$(0);
      // Inline function 'kotlin.collections.component2' call
      var j = item.get_c1px32_k$(1);
      var tmp$ret$3 = op(this.get_algebra_dvz2yp_k$(), i, j);
      destination.add_utx5q5_k$(tmp$ret$3);
    }
    return this.new$default_81ros5_k$(tmp, tmp_0, destination);
  }
  function safeJoin$default(that, ids, criteria, op, $super) {
    ids = ids === VOID ? allPairs(this.get_numRows_vts1uy_k$(), that.get_numCols_vu1mxc_k$()) : ids;
    return $super === VOID ? this.safeJoin_3w60tv_k$(that, ids, criteria, op) : safeJoin(that, ids, criteria, op);
  }
  function get_3(r, c) {
    return this.get_data_wokkxf_k$().get_c1px32_k$(imul(r, this.get_numCols_vu1mxc_k$()) + c | 0);
  }
  function get_4(r) {
    return toList(this.get_data_wokkxf_k$()).subList_xle3r2_k$(imul(r, this.get_numCols_vu1mxc_k$()), imul(r, this.get_numCols_vu1mxc_k$()) + this.get_numCols_vu1mxc_k$() | 0);
  }
  setMetadataFor(Matrix, 'Matrix', interfaceMeta, VOID, [SparseTensor]);
  setMetadataFor(AbstractMatrix, 'AbstractMatrix', classMeta, VOID, [Matrix]);
  setMetadataFor(DoubleMatrix, 'DoubleMatrix', classMeta, AbstractMatrix);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(UTMatrix, 'UTMatrix', classMeta, AbstractMatrix);
  setMetadataFor(FreeMatrix, 'FreeMatrix', classMeta, AbstractMatrix);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(BooleanMatrix, 'BooleanMatrix', classMeta, AbstractMatrix);
  function fetch(intRange) {
    return this.subList_xle3r2_k$(toInt_0(intRange.get_first_irdx8n_k$()), toInt_0(intRange.get_second_jf7fjx_k$()));
  }
  setMetadataFor(VT, 'VT', interfaceMeta, VOID, [List]);
  setMetadataFor(of, 'of', classMeta, VOID, [VT, List]);
  setMetadataFor(Π4, '\u03A04', classMeta);
  setMetadataFor(powerset$slambda, 'powerset$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(B, 'B', classMeta);
  setMetadataFor(F, 'F', classMeta, B, VOID, F);
  setMetadataFor(Companion_4, 'Companion', objectMeta, F);
  setMetadataFor(Ø, '\xD8', objectMeta, B);
  setMetadataFor(T, 'T', classMeta, B, VOID, T);
  setMetadataFor(Companion_5, 'Companion', objectMeta, T);
  setMetadataFor(S, 'S', classMeta);
  setMetadataFor(O, 'O', objectMeta, S);
  setMetadataFor(D, 'D', classMeta);
  setMetadataFor(_0_, '_0_', classMeta, D, VOID, _0_);
  setMetadataFor(Companion_6, 'Companion', objectMeta, _0_);
  setMetadataFor(_1_, '_1_', classMeta, D, VOID, _1_);
  setMetadataFor(Companion_7, 'Companion', objectMeta, _1_);
  setMetadataFor(_2_, '_2_', classMeta, D, VOID, _2_);
  setMetadataFor(Companion_8, 'Companion', objectMeta, _2_);
  setMetadataFor(_3_, '_3_', classMeta, D, VOID, _3_);
  setMetadataFor(Companion_9, 'Companion', objectMeta, _3_);
  setMetadataFor(_4_, '_4_', classMeta, D, VOID, _4_);
  setMetadataFor(Companion_10, 'Companion', objectMeta, _4_);
  setMetadataFor(_5_, '_5_', classMeta, D, VOID, _5_);
  setMetadataFor(Companion_11, 'Companion', objectMeta, _5_);
  setMetadataFor(_6_, '_6_', classMeta, D, VOID, _6_);
  setMetadataFor(Companion_12, 'Companion', objectMeta, _6_);
  setMetadataFor(_7_, '_7_', classMeta, D, VOID, _7_);
  setMetadataFor(Companion_13, 'Companion', objectMeta, _7_);
  setMetadataFor(_8_, '_8_', classMeta, D, VOID, _8_);
  setMetadataFor(Companion_14, 'Companion', objectMeta, _8_);
  setMetadataFor(_9_, '_9_', classMeta, D, VOID, _9_);
  setMetadataFor(Companion_15, 'Companion', objectMeta, _9_);
  setMetadataFor(VIndex, 'VIndex', classMeta);
  setMetadataFor(sam$kotlin_Comparator$0_2, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(IGraph$reachSequence$slambda, 'IGraph$reachSequence$slambda', classMeta, CoroutineImpl, [CoroutineImpl], VOID, VOID, VOID, [1]);
  setMetadataFor(RandomWalk, 'RandomWalk', classMeta, VOID, [Sequence]);
  setMetadataFor(sam$kotlin_properties_ReadOnlyProperty$0, 'sam$kotlin_properties_ReadOnlyProperty$0', classMeta, VOID, [ReadOnlyProperty]);
  function get_one() {
    return this.next_ely74e_k$(this.get_nil_18izx4_k$());
  }
  function plus_9(_this__u8e3s4, t) {
    return plus_10(this, _this__u8e3s4, t);
  }
  function times_0(_this__u8e3s4, t) {
    return times_6(this, _this__u8e3s4, t);
  }
  function pow(_this__u8e3s4, t) {
    return pow_2(this, _this__u8e3s4, t);
  }
  setMetadataFor(Nat, 'Nat', interfaceMeta);
  function next(_this__u8e3s4) {
    return this.plus_oqaz3q_k$(_this__u8e3s4, this.get_one_18iz2b_k$());
  }
  setMetadataFor(Group, 'Group', interfaceMeta, VOID, [Nat]);
  setMetadataFor(Ring, 'Ring', interfaceMeta, VOID, [Group]);
  function minus_3(_this__u8e3s4, t) {
    return minus_5(this, _this__u8e3s4, t);
  }
  function div(_this__u8e3s4, t) {
    return div_0(this, _this__u8e3s4, t);
  }
  setMetadataFor(Field, 'Field', interfaceMeta, VOID, [Ring]);
  setMetadataFor(of_0, 'of', classMeta, VOID, [Field]);
  setMetadataFor(of_1, 'of', classMeta, VOID, [Ring]);
  setMetadataFor(of_2, 'of', classMeta, VOID, [Group]);
  setMetadataFor(of_3, 'of', classMeta, VOID, [Nat]);
  setMetadataFor(数, '\u6570', classMeta);
  setMetadataFor(零, '\u96F6', classMeta, 数, VOID, 零);
  setMetadataFor(Companion_16, 'Companion', objectMeta, 零);
  setMetadataFor(一, '\u4E00', classMeta, 数, VOID, 一);
  setMetadataFor(Companion_17, 'Companion', objectMeta, 一);
  setMetadataFor(无, '\u65E0', objectMeta, 数);
  setMetadataFor(二, '\u4E8C', classMeta, 数, VOID, 二);
  setMetadataFor(Companion_18, 'Companion', objectMeta, 二);
  setMetadataFor(三, '\u4E09', classMeta, 数, VOID, 三);
  setMetadataFor(Companion_19, 'Companion', objectMeta, 三);
  setMetadataFor(四, '\u56DB', classMeta, 数, VOID, 四);
  setMetadataFor(Companion_20, 'Companion', objectMeta, 四);
  setMetadataFor(五, '\u4E94', classMeta, 数, VOID, 五);
  setMetadataFor(Companion_21, 'Companion', objectMeta, 五);
  setMetadataFor(六, '\u516D', classMeta, 数, VOID, 六);
  setMetadataFor(Companion_22, 'Companion', objectMeta, 六);
  setMetadataFor(七, '\u4E03', classMeta, 数, VOID, 七);
  setMetadataFor(Companion_23, 'Companion', objectMeta, 七);
  setMetadataFor(八, '\u516B', classMeta, 数, VOID, 八);
  setMetadataFor(Companion_24, 'Companion', objectMeta, 八);
  setMetadataFor(九, '\u4E5D', classMeta, 数, VOID, 九);
  setMetadataFor(Companion_25, 'Companion', objectMeta, 九);
  setMetadataFor(Model, 'Model', classMeta, VOID, [Map]);
  setMetadataFor(sam$kotlin_Comparator$0_3, 'sam$kotlin_Comparator$0', classMeta, VOID, [Comparator]);
  setMetadataFor(CDCL, 'CDCL', classMeta);
  setMetadataFor(SolverType, 'SolverType', classMeta, Enum);
  setMetadataFor(Clause, 'Clause', classMeta, VOID, [MutableList]);
  setMetadataFor(Solver, 'Solver', interfaceMeta);
  setMetadataFor(Kosat, 'Kosat', classMeta, VOID, [Solver]);
  setMetadataFor(VarState, 'VarState', classMeta);
  setMetadataFor(VarValue, 'VarValue', classMeta, Enum);
  setMetadataFor(PriorityQueue, 'PriorityQueue', classMeta);
  setMetadataFor(Restarter, 'Restarter', classMeta);
  setMetadataFor(VariableSelector, 'VariableSelector', classMeta);
  setMetadataFor(VSIDS, 'VSIDS', classMeta, VariableSelector);
  //endregion
  function get_ACT_TANH() {
    _init_properties_CommonUtils_kt__3s0my4();
    return ACT_TANH;
  }
  var ACT_TANH;
  function get_NORM_AVG() {
    _init_properties_CommonUtils_kt__3s0my4();
    return NORM_AVG;
  }
  var NORM_AVG;
  function elwise(_this__u8e3s4, op) {
    _init_properties_CommonUtils_kt__3s0my4();
    // Inline function 'kotlin.collections.map' call
    var this_0 = _this__u8e3s4.get_data_wokkxf_k$();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.elwise.<anonymous>' call
      var tmp$ret$0 = op(item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return _this__u8e3s4.new$default_81ros5_k$(VOID, VOID, destination);
  }
  function meanNorm(_this__u8e3s4) {
    _init_properties_CommonUtils_kt__3s0my4();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.fold' call
    var this_0 = _this__u8e3s4.get_data_wokkxf_k$();
    var accumulator = VT_0(0.0, 0.0, 0.0);
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.meanNorm.<anonymous>' call
      var name_for_destructuring_parameter_0_fjsvno = accumulator;
      // Inline function 'kotlin.collections.component1' call
      var a = name_for_destructuring_parameter_0_fjsvno.get_c1px32_k$(0);
      // Inline function 'kotlin.collections.component2' call
      var b = name_for_destructuring_parameter_0_fjsvno.get_c1px32_k$(1);
      // Inline function 'kotlin.collections.component3' call
      var c = name_for_destructuring_parameter_0_fjsvno.get_c1px32_k$(2);
      var tmp = a + element / _this__u8e3s4.get_data_wokkxf_k$().get_size_woubt6_k$();
      // Inline function 'kotlin.math.min' call
      var tmp_0 = Math.min(b, element);
      // Inline function 'kotlin.math.max' call
      var tmp$ret$4 = Math.max(c, element);
      accumulator = VT_0(tmp, tmp_0, tmp$ret$4);
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.meanNorm.<anonymous>' call
    var name_for_destructuring_parameter_0_fjsvno_0 = accumulator;
    // Inline function 'kotlin.collections.component1' call
    var μ = name_for_destructuring_parameter_0_fjsvno_0.get_c1px32_k$(0);
    // Inline function 'kotlin.collections.component2' call
    var min = name_for_destructuring_parameter_0_fjsvno_0.get_c1px32_k$(1);
    // Inline function 'kotlin.collections.component3' call
    var max = name_for_destructuring_parameter_0_fjsvno_0.get_c1px32_k$(2);
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
    return DoubleMatrix_init_$Create$_0(tmp, tmp_0, toDoubleMatrix$lambda(_this__u8e3s4));
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
        tmp = _this__u8e3s4.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
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
  function pow_0(_this__u8e3s4, i) {
    _init_properties_CommonUtils_kt__3s0my4();
    // Inline function 'kotlin.collections.fold' call
    var accumulator = _this__u8e3s4;
    var tmp0_iterator = numberRangeToNumber(0, i).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.pow.<anonymous>' call
      accumulator = accumulator.times_opju7w_k$(isInterface(_this__u8e3s4, Matrix) ? _this__u8e3s4 : THROW_CCE());
    }
    var tmp = accumulator;
    return isInterface(tmp, Matrix) ? tmp : THROW_CCE();
  }
  function get_DEFAULT_FEATURE_LEN() {
    return DEFAULT_FEATURE_LEN;
  }
  var DEFAULT_FEATURE_LEN;
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
      tmp = getKClassFromExpression(_this__u8e3s4).isInstance_6tn68w_k$(that);
    } else {
      var tmp_1;
      if (!isInterface(_this__u8e3s4, KClass)) {
        tmp_1 = isInterface(that, KClass);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp = getKClassFromExpression(_this__u8e3s4).isInstance_6tn68w_k$(that);
      } else {
        var tmp_2;
        if (isInterface(_this__u8e3s4, KClass)) {
          tmp_2 = isInterface(that, KClass);
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          tmp = _this__u8e3s4.isInstance_6tn68w_k$(that);
        } else {
          var tmp_3;
          if (isInterface(_this__u8e3s4, KClass)) {
            tmp_3 = !isInterface(that, KClass);
          } else {
            tmp_3 = false;
          }
          if (tmp_3) {
            tmp = _this__u8e3s4.isInstance_6tn68w_k$(that);
          } else {
            throw new NotImplementedError();
          }
        }
      }
    }
    return tmp;
  }
  function choose(_this__u8e3s4, k) {
    _init_properties_CommonUtils_kt__3s0my4();
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= k ? 0 <= _this__u8e3s4 : false)) {
      // Inline function 'ai.hypergraph.kaliningraph.choose.<anonymous>' call
      var message = 'Bad (k, n) = (' + k + ', ' + _this__u8e3s4 + ')!';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (k > _this__u8e3s4 ? true : k < 0)
      return 0;
    if (k > (_this__u8e3s4 / 2 | 0))
      return choose(_this__u8e3s4, _this__u8e3s4 - k | 0);
    var result = 1;
    var inductionVariable = 1;
    if (inductionVariable <= k)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = imul(result, (_this__u8e3s4 - i | 0) + 1 | 0) / i | 0;
      }
       while (!(i === k));
    return result;
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
      return $it.nextDouble_s2xvfg_k$();
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
  function get_BRACKETS() {
    _init_properties_StringUtils_kt__hudgtq();
    return BRACKETS;
  }
  var BRACKETS;
  function get_JUST_PARENS() {
    _init_properties_StringUtils_kt__hudgtq();
    return JUST_PARENS;
  }
  var JUST_PARENS;
  function formatAsGrid(_this__u8e3s4, cols) {
    cols = cols === VOID ? -1 : cols;
    _init_properties_StringUtils_kt__hudgtq();
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.groupByTo' call
    var destination = LinkedHashMap_init_$Create$();
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.<anonymous>' call
      var key = formatAsGrid$LHS(element);
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination.get_wei43m_k$(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination.put_4fpzoq_k$(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.add_utx5q5_k$(element);
    }
    var groups = destination;
    return formatAsGrid$rec(_this__u8e3s4, cols, groups);
  }
  function splitProd(_this__u8e3s4) {
    _init_properties_StringUtils_kt__hudgtq();
    // Inline function 'kotlin.collections.map' call
    var this_0 = split(replaceFirst(_this__u8e3s4, '->', '\u2192'), ['\u2192']);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.splitProd.<anonymous>' call
      // Inline function 'kotlin.text.trim' call
      var tmp$ret$1 = toString(trim(isCharSequence(item) ? item : THROW_CCE()));
      destination.add_utx5q5_k$(tmp$ret$1);
    }
    return destination;
  }
  function carveSeams(_this__u8e3s4, toRemove) {
    toRemove = toRemove === VOID ? Regex_init_$Create$('\\s{2,}') : toRemove;
    _init_properties_StringUtils_kt__hudgtq();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = lines(replace(_this__u8e3s4, '  |  ', '    '));
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.carveSeams.<anonymous>' call
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(element)) {
        destination.add_utx5q5_k$(element);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
    var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.carveSeams.<anonymous>' call
      var tmp$ret$4 = split(item, ['\u2192']);
      destination_0.add_utx5q5_k$(tmp$ret$4);
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.carveSeams.<anonymous>' call
    // Inline function 'kotlin.collections.minOf' call
    var iterator = destination_0.iterator_jk1svi_k$();
    if (!iterator.hasNext_bitz1p_k$())
      throw NoSuchElementException_init_$Create$();
    // Inline function 'ai.hypergraph.kaliningraph.carveSeams.<anonymous>.<anonymous>' call
    var minValue = iterator.next_20eer_k$().get_size_woubt6_k$();
    while (iterator.hasNext_bitz1p_k$()) {
      // Inline function 'ai.hypergraph.kaliningraph.carveSeams.<anonymous>.<anonymous>' call
      var v = iterator.next_20eer_k$().get_size_woubt6_k$();
      if (compareTo(minValue, v) > 0) {
        minValue = v;
      }
    }
    var minCols = minValue;
    // Inline function 'kotlin.collections.map' call
    var this_1 = until(0, minCols);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator_1 = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.carveSeams.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.minOf' call
      var iterator_0 = col(destination_0, item_0).iterator_jk1svi_k$();
      if (!iterator_0.hasNext_bitz1p_k$())
        throw NoSuchElementException_init_$Create$();
      // Inline function 'ai.hypergraph.kaliningraph.carveSeams.<anonymous>.<anonymous>.<anonymous>' call
      var it = iterator_0.next_20eer_k$();
      var minValue_0 = ensureNotNull(toRemove.find$default_xakyli_k$(it)).get_value_j01efc_k$().length;
      while (iterator_0.hasNext_bitz1p_k$()) {
        // Inline function 'ai.hypergraph.kaliningraph.carveSeams.<anonymous>.<anonymous>.<anonymous>' call
        var it_0 = iterator_0.next_20eer_k$();
        var v_0 = ensureNotNull(toRemove.find$default_xakyli_k$(it_0)).get_value_j01efc_k$().length;
        if (compareTo(minValue_0, v_0) > 0) {
          minValue_0 = v_0;
        }
      }
      var tmp$ret$13 = minValue_0;
      destination_1.add_utx5q5_k$(tmp$ret$13);
    }
    var takeAway = destination_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(takeAway, 10));
    var tmp0_iterator_2 = takeAway.iterator_jk1svi_k$();
    while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
      var item_1 = tmp0_iterator_2.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.carveSeams.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var list = ArrayList_init_$Create$(item_1);
      // Inline function 'kotlin.repeat' call
      // Inline function 'kotlin.contracts.contract' call
      var inductionVariable = 0;
      if (inductionVariable < item_1)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlin.collections.MutableList.<anonymous>' call
          // Inline function 'ai.hypergraph.kaliningraph.carveSeams.<anonymous>.<anonymous>.<anonymous>' call
          list.add_utx5q5_k$(' ');
        }
         while (inductionVariable < item_1);
      var tmp$ret$19 = joinToString(list, '');
      destination_2.add_utx5q5_k$(tmp$ret$19);
    }
    var subs = destination_2;
    return joinToString(destination_0, '\n', '\n', VOID, VOID, VOID, carveSeams$lambda(minCols, subs));
  }
  function col(_this__u8e3s4, i) {
    _init_properties_StringUtils_kt__hudgtq();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.col.<anonymous>' call
      var tmp$ret$0 = item.get_c1px32_k$(i);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return destination;
  }
  function levenshtein(s1, s2) {
    _init_properties_StringUtils_kt__hudgtq();
    return levenshtein_0(toList(tokenizeByWhitespace(s1)), toList(tokenizeByWhitespace(s2)));
  }
  function levenshtein_0(o1, o2) {
    _init_properties_StringUtils_kt__hudgtq();
    var prev = new Int32Array(o2.get_size_woubt6_k$() + 1 | 0);
    var inductionVariable = 0;
    var last = o2.get_size_woubt6_k$() + 1 | 0;
    if (inductionVariable < last)
      do {
        var j = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        prev[j] = j;
      }
       while (inductionVariable < last);
    var inductionVariable_0 = 1;
    var last_0 = o1.get_size_woubt6_k$() + 1 | 0;
    if (inductionVariable_0 < last_0)
      do {
        var i = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var curr = new Int32Array(o2.get_size_woubt6_k$() + 1 | 0);
        curr[0] = i;
        var inductionVariable_1 = 1;
        var last_1 = o2.get_size_woubt6_k$() + 1 | 0;
        if (inductionVariable_1 < last_1)
          do {
            var j_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var d1 = prev[j_0] + 1 | 0;
            var d2 = curr[j_0 - 1 | 0] + 1 | 0;
            var d3 = prev[j_0 - 1 | 0] + (equals(o1.get_c1px32_k$(i - 1 | 0), o2.get_c1px32_k$(j_0 - 1 | 0)) ? 0 : 1) | 0;
            // Inline function 'kotlin.math.min' call
            // Inline function 'kotlin.math.min' call
            var a = Math.min(d1, d2);
            curr[j_0] = Math.min(a, d3);
          }
           while (inductionVariable_1 < last_1);
        prev = curr;
      }
       while (inductionVariable_0 < last_0);
    return prev[o2.get_size_woubt6_k$()];
  }
  function formatAsGrid$tok(_this__u8e3s4) {
    return splitProd(_this__u8e3s4);
  }
  function formatAsGrid$LHS(_this__u8e3s4) {
    return formatAsGrid$tok(_this__u8e3s4).get_c1px32_k$(0);
  }
  function formatAsGrid$RHS(_this__u8e3s4) {
    return formatAsGrid$tok(_this__u8e3s4).get_c1px32_k$(1);
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
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>' call
          var tmp$ret$0 = formatAsGrid(_this__u8e3s4, item);
          destination.add_utx5q5_k$(tmp$ret$0);
        }
        var iterator = destination.iterator_jk1svi_k$();
        if (!iterator.hasNext_bitz1p_k$())
          throw NoSuchElementException_init_$Create$();
        var minElem = iterator.next_20eer_k$();
        if (!iterator.hasNext_bitz1p_k$()) {
          tmp$ret$3 = minElem;
          break $l$block;
        }
        // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>' call
        var minValue = minElem.toString().length;
        do {
          var e = iterator.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>' call
          var v = e.toString().length;
          if (compareTo(minValue, v) > 0) {
            minElem = e;
            minValue = v;
          }
        }
         while (iterator.hasNext_bitz1p_k$());
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
      var x = productions.get_size_woubt6_k$() / $cols;
      var tmp$ret$6 = Math.ceil(x);
      var tmp0_container = to($cols, numberToInt(tmp$ret$6));
      var cols = tmp0_container.component1_7eebsc_k$();
      var rows = tmp0_container.component2_7eebsb_k$();
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = imul(cols, rows) - productions.get_size_woubt6_k$() | 0;
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
          list.add_utx5q5_k$('');
        }
         while (inductionVariable < size);
      var padded = plus(productions, list);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>' call
      var up = get_transpose(new FreeMatrix(cols, rows, padded));
      var tmp_3 = up.get_numRows_vts1uy_k$();
      var tmp_4 = up.get_numCols_vu1mxc_k$();
      tmp = FreeMatrix_init_$Create$_1(tmp_3, tmp_4, formatAsGrid$rec$lambda_3(up));
    }
    return tmp;
  }
  function carveSeams$lambda($minCols, $subs) {
    return function (it) {
      // Inline function 'kotlin.collections.mapIndexed' call
      // Inline function 'kotlin.collections.mapIndexedTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(it, 10));
      var index = 0;
      var tmp0_iterator = it.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.carveSeams.<anonymous>.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var i = checkIndexOverflow(tmp1);
        var tmp$ret$0 = i < $minCols ? replaceFirst(item, $subs.get_c1px32_k$(i), '   ') : item;
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      return dropLast(drop(joinToString(destination, '\u2192'), 4), 3);
    };
  }
  function formatAsGrid$rec$lambda($groups) {
    return function (it) {
      // Inline function 'kotlin.collections.maxOf' call
      var iterator = ensureNotNull($groups.get_wei43m_k$(formatAsGrid$LHS(it))).iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$())
        throw NoSuchElementException_init_$Create$();
      // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>.<anonymous>' call
      var maxValue = iterator.next_20eer_k$().length;
      while (iterator.hasNext_bitz1p_k$()) {
        // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>.<anonymous>' call
        var v = iterator.next_20eer_k$().length;
        if (compareTo(maxValue, v) < 0) {
          maxValue = v;
        }
      }
      return maxValue;
    };
  }
  function formatAsGrid$rec$lambda_0($groups) {
    return function (it) {
      return -ensureNotNull($groups.get_wei43m_k$(formatAsGrid$LHS(it))).get_size_woubt6_k$() | 0;
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
      var this_0 = $up.get_bzg6vq_k$(r, c);
      if (charSequenceLength(this_0) === 0) {
        return '';
      }
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>.<anonymous>.<anonymous>' call
      var it = splitProd($up.get_bzg6vq_k$(r, c));
      var tmp0_container = to(it.get_c1px32_k$(0), it.get_c1px32_k$(1));
      var lhs = tmp0_container.component1_7eebsc_k$();
      var rhs = tmp0_container.component2_7eebsb_k$();
      // Inline function 'kotlin.collections.maxOf' call
      var iterator = get_transpose($up).get_c1px32_k$(c).iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$())
        throw NoSuchElementException_init_$Create$();
      // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>.<anonymous>.<anonymous>' call
      var it_0 = iterator.next_20eer_k$();
      var maxValue = substringBefore(it_0, ' -> ').length;
      while (iterator.hasNext_bitz1p_k$()) {
        // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>.<anonymous>.<anonymous>' call
        var it_1 = iterator.next_20eer_k$();
        var v = substringBefore(it_1, ' -> ').length;
        if (compareTo(maxValue, v) < 0) {
          maxValue = v;
        }
      }
      var tmp$ret$5 = maxValue;
      var lp = padStart(lhs, tmp$ret$5);
      // Inline function 'kotlin.collections.maxOf' call
      var iterator_0 = get_transpose($up).get_c1px32_k$(c).iterator_jk1svi_k$();
      if (!iterator_0.hasNext_bitz1p_k$())
        throw NoSuchElementException_init_$Create$();
      // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>.<anonymous>.<anonymous>' call
      var it_2 = iterator_0.next_20eer_k$();
      var maxValue_0 = substringAfter(it_2, ' -> ').length;
      while (iterator_0.hasNext_bitz1p_k$()) {
        // Inline function 'ai.hypergraph.kaliningraph.formatAsGrid.rec.<anonymous>.<anonymous>.<anonymous>' call
        var it_3 = iterator_0.next_20eer_k$();
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
  function get_ecaAlgebra() {
    _init_properties_ECA_kt__is5dwv();
    return ecaAlgebra;
  }
  var ecaAlgebra;
  function get_eca10() {
    _init_properties_ECA_kt__is5dwv();
    return eca10;
  }
  var eca10;
  function get_eca4() {
    _init_properties_ECA_kt__is5dwv();
    return eca4;
  }
  var eca4;
  function kernelAlgebra() {
    _init_properties_ECA_kt__is5dwv();
    var tmp = kernelAlgebra$lambda;
    return new of_1(null, VOID, tmp, kernelAlgebra$lambda_0);
  }
  function eca(_this__u8e3s4, op0, op1, op2, op3, op4, op5, op6, op7, op8, op9) {
    _init_properties_ECA_kt__is5dwv();
    return new BVec10(op0(_this__u8e3s4.get_b9_knto4g_k$(), _this__u8e3s4.get_b0_knto4p_k$(), _this__u8e3s4.get_b1_knto4o_k$()), op1(_this__u8e3s4.get_b0_knto4p_k$(), _this__u8e3s4.get_b1_knto4o_k$(), _this__u8e3s4.get_b2_knto4n_k$()), op2(_this__u8e3s4.get_b1_knto4o_k$(), _this__u8e3s4.get_b2_knto4n_k$(), _this__u8e3s4.get_b3_knto4m_k$()), op3(_this__u8e3s4.get_b2_knto4n_k$(), _this__u8e3s4.get_b3_knto4m_k$(), _this__u8e3s4.get_b4_knto4l_k$()), op4(_this__u8e3s4.get_b3_knto4m_k$(), _this__u8e3s4.get_b4_knto4l_k$(), _this__u8e3s4.get_b5_knto4k_k$()), op5(_this__u8e3s4.get_b4_knto4l_k$(), _this__u8e3s4.get_b5_knto4k_k$(), _this__u8e3s4.get_b6_knto4j_k$()), op6(_this__u8e3s4.get_b5_knto4k_k$(), _this__u8e3s4.get_b6_knto4j_k$(), _this__u8e3s4.get_b7_knto4i_k$()), op7(_this__u8e3s4.get_b6_knto4j_k$(), _this__u8e3s4.get_b7_knto4i_k$(), _this__u8e3s4.get_b8_knto4h_k$()), op8(_this__u8e3s4.get_b7_knto4i_k$(), _this__u8e3s4.get_b8_knto4h_k$(), _this__u8e3s4.get_b9_knto4g_k$()), op9(_this__u8e3s4.get_b8_knto4h_k$(), _this__u8e3s4.get_b9_knto4g_k$(), _this__u8e3s4.get_b0_knto4p_k$()));
  }
  function r(p, q, r) {
    _init_properties_ECA_kt__is5dwv();
    return 龖_getInstance();
  }
  function r_0(p, q, r) {
    _init_properties_ECA_kt__is5dwv();
    return 龖_getInstance();
  }
  function r_1(p, q, r) {
    _init_properties_ECA_kt__is5dwv();
    return 口_getInstance();
  }
  function r_2(p, q, r) {
    _init_properties_ECA_kt__is5dwv();
    return 龖_getInstance();
  }
  function r_3(p, q, r) {
    _init_properties_ECA_kt__is5dwv();
    return 口_getInstance();
  }
  function r_4(p, q, r) {
    _init_properties_ECA_kt__is5dwv();
    return 口_getInstance();
  }
  function r_5(p, q, r) {
    _init_properties_ECA_kt__is5dwv();
    return 龖_getInstance();
  }
  function r_6(p, q, r) {
    _init_properties_ECA_kt__is5dwv();
    return 龖_getInstance();
  }
  function eca_0(_this__u8e3s4, op0, op1, op2, op3) {
    _init_properties_ECA_kt__is5dwv();
    return new BVec4(op0(_this__u8e3s4.get_d_1mhr5n_k$(), _this__u8e3s4.get_a_1mhr5k_k$(), _this__u8e3s4.get_b_1mhr5l_k$()), op1(_this__u8e3s4.get_a_1mhr5k_k$(), _this__u8e3s4.get_b_1mhr5l_k$(), _this__u8e3s4.get_c_1mhr5m_k$()), op2(_this__u8e3s4.get_b_1mhr5l_k$(), _this__u8e3s4.get_c_1mhr5m_k$(), _this__u8e3s4.get_d_1mhr5n_k$()), op3(_this__u8e3s4.get_c_1mhr5m_k$(), _this__u8e3s4.get_d_1mhr5n_k$(), _this__u8e3s4.get_a_1mhr5k_k$()));
  }
  function kernelPlus(a, b) {
    _init_properties_ECA_kt__is5dwv();
    var tmp0_subject = to_0(nullity(a), nullity(b));
    var tmp;
    if (tmp0_subject.equals(to_0(to_1(to(2, 2), 2), to_1(to(2, 2), 2)))) {
      tmp = null;
    } else if (tmp0_subject.equals(to_0(to_1(to(2, 2), 2), to_1(to(0, 1), 0)))) {
      tmp = to_1(to(get_π2(ensureNotNull(b)), null), null);
    } else if (tmp0_subject.equals(to_0(ensureNotNull(a), ensureNotNull(a)))) {
      throw Exception_init_$Create$('Ruled out cases where a is nullable');
    } else if (tmp0_subject.equals(to_0(to_1(to(0, 1), 0), to_1(to(2, 2), 2)))) {
      tmp = to_1(to(null, null), get_π2(a));
    } else if (tmp0_subject.equals(to_0(to_1(to(1, 0), 0), to_1(to(2, 2), 2)))) {
      tmp = to_1(to(null, null), get_π1(a));
    } else if (tmp0_subject.equals(to_0(to_1(to(1, 1), 0), to_1(to(2, 2), 2)))) {
      tmp = to_1(to(null, get_π1(a)), get_π2(a));
    } else if (tmp0_subject.equals(to_0(to_1(to(1, 1), 1), to_1(to(2, 2), 2)))) {
      tmp = a;
    } else if (tmp0_subject.equals(to_0(to_1(to(0, 1), 1), to_1(to(2, 2), 2)))) {
      tmp = a;
    } else if (tmp0_subject.equals(to_0(to_1(to(0, 0), 1), to_1(to(2, 2), 2)))) {
      tmp = a;
    } else if (tmp0_subject.equals(to_0(ensureNotNull(b), ensureNotNull(b)))) {
      throw Exception_init_$Create$('Ruled out cases where b is nullable');
    } else if (tmp0_subject.equals(to_0(to_1(to(0, 0), 0), to_1(to(0, 1), 0)))) {
      tmp = to_1(to(get_π2(b), null), null);
    } else if (tmp0_subject.equals(to_0(to_1(to(0, 1), 0), to_1(to(0, 1), 0)))) {
      tmp = to_1(to(get_π2(a), get_π2(b)), null);
    } else if (tmp0_subject.equals(to_0(to_1(to(0, 0), 1), to_1(to(0, 1), 0)))) {
      tmp = to_1(to(get_π2(b), null), get_π3(a));
    } else if (tmp0_subject.equals(to_0(to_1(to(1, 0), 1), to_1(to(0, 1), 0)))) {
      tmp = to_1(to(get_π1(a), get_π2(b)), get_π3(a));
    } else if (tmp0_subject.equals(to_0(to_1(to(0, 1), 1), to_1(to(0, 1), 0)))) {
      tmp = to_1(to(get_π2(b), get_π2(a)), get_π3(a));
    } else if (tmp0_subject.equals(to_0(to_1(to(1, 0), 0), to_1(to(0, 1), 0)))) {
      tmp = to_1(to(get_π1(a), get_π2(b)), null);
    } else if (tmp0_subject.equals(to_0(to_1(to(1, 1), 0), to_1(to(0, 1), 0)))) {
      tmp = to_1(to(get_π1(a), get_π2(a)), get_π2(b));
    } else {
      throw Exception_init_$Create$('This should never have occurred!');
    }
    return tmp;
  }
  function kernelTimes(a, b) {
    _init_properties_ECA_kt__is5dwv();
    return to_0(nullity(a), nullity(b)).equals(to_0(to_1(to(0, 0), 0), to_1(to(0, 1), 0))) ? to_1(to(null, get_π2(ensureNotNull(b))), null) : null;
  }
  function nullity(_this__u8e3s4) {
    _init_properties_ECA_kt__is5dwv();
    return _this__u8e3s4 == null ? to_1(to(2, 2), 2) : to_1(to(compareTo(!(get_π1(_this__u8e3s4) == null), false), compareTo(!(get_π2(_this__u8e3s4) == null), false)), compareTo(!(get_π3(_this__u8e3s4) == null), false));
  }
  function r$ref() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_0() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_1() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_2() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_3() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_4() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_5() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_6() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_7() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_8() {
    var l = function (p0, p1, p2) {
      return r_5(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_9() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_10() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_11() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_12() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_13() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_14() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_15() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_16() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_17() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_18() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_19() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_20() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_21() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_22() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_23() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_24() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_25() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_26() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_27() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_28() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_29() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_30() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_31() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_32() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_33() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_34() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_35() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_36() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_37() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_38() {
    var l = function (p0, p1, p2) {
      return r_5(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_39() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_40() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_41() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_42() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_43() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_44() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_45() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_46() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_47() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_48() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_49() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_50() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_51() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_52() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_53() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_54() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_55() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_56() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_57() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_58() {
    var l = function (p0, p1, p2) {
      return r_5(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_59() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_60() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_61() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_62() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_63() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_64() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_65() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_66() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_67() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_68() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_69() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_70() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_71() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_72() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_73() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_74() {
    var l = function (p0, p1, p2) {
      return r_5(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_75() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_76() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_77() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_78() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_79() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_80() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_81() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_82() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_83() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_84() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_85() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_86() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_87() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_88() {
    var l = function (p0, p1, p2) {
      return r_5(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_89() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_90() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_91() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_92() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_93() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_94() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_95() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_96() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_97() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_98() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_99() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_100() {
    var l = function (p0, p1, p2) {
      return r_5(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_101() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_102() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_103() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_104() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_105() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_106() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_107() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_108() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_109() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_110() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_111() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_112() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_113() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_114() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_115() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_116() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_117() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_118() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_119() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_120() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_121() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_122() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_123() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_124() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_125() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_126() {
    var l = function (p0, p1, p2) {
      return r_5(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_127() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_128() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_129() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_130() {
    var l = function (p0, p1, p2) {
      return r_5(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_131() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_132() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_133() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_134() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_135() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_136() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_137() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_138() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_139() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_140() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_141() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_142() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_143() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_144() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_145() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_146() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_147() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_148() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_149() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_150() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_151() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_152() {
    var l = function (p0, p1, p2) {
      return r_5(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_153() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_154() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_155() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_156() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_157() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_158() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_159() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_160() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_161() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_162() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_163() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_164() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_165() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_166() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_167() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_168() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_169() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_170() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_171() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_172() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_173() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_174() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_175() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_176() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_177() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_178() {
    var l = function (p0, p1, p2) {
      return r_5(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_179() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_180() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_181() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_182() {
    var l = function (p0, p1, p2) {
      return r_5(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_183() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_184() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_185() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_186() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_187() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_188() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_189() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_190() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_191() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_192() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_193() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_194() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_195() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_196() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_197() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_198() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_199() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_200() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_201() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_202() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_203() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_204() {
    var l = function (p0, p1, p2) {
      return r_5(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_205() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_206() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_207() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_208() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_209() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_210() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_211() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_212() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_213() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_214() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_215() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_216() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_217() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_218() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_219() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_220() {
    var l = function (p0, p1, p2) {
      return r_5(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_221() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_222() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_223() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_224() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_225() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_226() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_227() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_228() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_229() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_230() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_231() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_232() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_233() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_234() {
    var l = function (p0, p1, p2) {
      return r_5(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_235() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_236() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_237() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_238() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_239() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_240() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_241() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_242() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_243() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_244() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_245() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_246() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_247() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_248() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_249() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_250() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_251() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_252() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_253() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_254() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_255() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_256() {
    var l = function (p0, p1, p2) {
      return r_5(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_257() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_258() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_259() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_260() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_261() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_262() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_263() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_264() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_265() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_266() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_267() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_268() {
    var l = function (p0, p1, p2) {
      return r_4(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_269() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_270() {
    var l = function (p0, p1, p2) {
      return r_3(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_271() {
    var l = function (p0, p1, p2) {
      return r(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_272() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_273() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_274() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_275() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_276() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_277() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_278() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_279() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_280() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_281() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_282() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_283() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_284() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_285() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_286() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_287() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_288() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_289() {
    var l = function (p0, p1, p2) {
      return r_2(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_290() {
    var l = function (p0, p1, p2) {
      return r_6(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_291() {
    var l = function (p0, p1, p2) {
      return r_0(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function r$ref_292() {
    var l = function (p0, p1, p2) {
      return r_1(p0, p1, p2);
    };
    l.callableName = 'r';
    return l;
  }
  function kernelAlgebra$lambda($this$$receiver, a, b) {
    _init_properties_ECA_kt__is5dwv();
    return kernelPlus(a, b);
  }
  function kernelAlgebra$lambda_0($this$$receiver, a, b) {
    _init_properties_ECA_kt__is5dwv();
    return kernelTimes(a, b);
  }
  var properties_initialized_ECA_kt_lh754d;
  function _init_properties_ECA_kt__is5dwv() {
    if (!properties_initialized_ECA_kt_lh754d) {
      properties_initialized_ECA_kt_lh754d = true;
      ecaAlgebra = kernelAlgebra();
      var tmp = BVec(口_getInstance(), 口_getInstance(), 口_getInstance(), 口_getInstance(), 口_getInstance(), 口_getInstance(), 口_getInstance(), 口_getInstance(), 口_getInstance(), 龖_getInstance());
      var tmp_0 = r$ref();
      var tmp_1 = r$ref_0();
      var tmp_2 = r$ref_1();
      var tmp_3 = r$ref_2();
      var tmp_4 = r$ref_3();
      var tmp_5 = r$ref_4();
      var tmp_6 = r$ref_5();
      var tmp_7 = r$ref_6();
      var tmp_8 = r$ref_7();
      var tmp_9 = eca(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, r$ref_8());
      var tmp_10 = r$ref_9();
      var tmp_11 = r$ref_10();
      var tmp_12 = r$ref_11();
      var tmp_13 = r$ref_12();
      var tmp_14 = r$ref_13();
      var tmp_15 = r$ref_14();
      var tmp_16 = r$ref_15();
      var tmp_17 = r$ref_16();
      var tmp_18 = r$ref_17();
      var tmp_19 = eca(tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, r$ref_18());
      var tmp_20 = r$ref_19();
      var tmp_21 = r$ref_20();
      var tmp_22 = r$ref_21();
      var tmp_23 = r$ref_22();
      var tmp_24 = r$ref_23();
      var tmp_25 = r$ref_24();
      var tmp_26 = r$ref_25();
      var tmp_27 = r$ref_26();
      var tmp_28 = r$ref_27();
      var tmp_29 = eca(tmp_19, tmp_20, tmp_21, tmp_22, tmp_23, tmp_24, tmp_25, tmp_26, tmp_27, tmp_28, r$ref_28());
      var tmp_30 = r$ref_29();
      var tmp_31 = r$ref_30();
      var tmp_32 = r$ref_31();
      var tmp_33 = r$ref_32();
      var tmp_34 = r$ref_33();
      var tmp_35 = r$ref_34();
      var tmp_36 = r$ref_35();
      var tmp_37 = r$ref_36();
      var tmp_38 = r$ref_37();
      var tmp_39 = eca(tmp_29, tmp_30, tmp_31, tmp_32, tmp_33, tmp_34, tmp_35, tmp_36, tmp_37, tmp_38, r$ref_38());
      var tmp_40 = r$ref_39();
      var tmp_41 = r$ref_40();
      var tmp_42 = r$ref_41();
      var tmp_43 = r$ref_42();
      var tmp_44 = r$ref_43();
      var tmp_45 = r$ref_44();
      var tmp_46 = r$ref_45();
      var tmp_47 = r$ref_46();
      var tmp_48 = r$ref_47();
      var tmp_49 = eca(tmp_39, tmp_40, tmp_41, tmp_42, tmp_43, tmp_44, tmp_45, tmp_46, tmp_47, tmp_48, r$ref_48());
      var tmp_50 = r$ref_49();
      var tmp_51 = r$ref_50();
      var tmp_52 = r$ref_51();
      var tmp_53 = r$ref_52();
      var tmp_54 = r$ref_53();
      var tmp_55 = r$ref_54();
      var tmp_56 = r$ref_55();
      var tmp_57 = r$ref_56();
      var tmp_58 = r$ref_57();
      var tmp_59 = eca(tmp_49, tmp_50, tmp_51, tmp_52, tmp_53, tmp_54, tmp_55, tmp_56, tmp_57, tmp_58, r$ref_58());
      var tmp_60 = r$ref_59();
      var tmp_61 = r$ref_60();
      var tmp_62 = r$ref_61();
      var tmp_63 = r$ref_62();
      var tmp_64 = r$ref_63();
      var tmp_65 = r$ref_64();
      var tmp_66 = r$ref_65();
      var tmp_67 = r$ref_66();
      var tmp_68 = r$ref_67();
      var tmp_69 = eca(tmp_59, tmp_60, tmp_61, tmp_62, tmp_63, tmp_64, tmp_65, tmp_66, tmp_67, tmp_68, r$ref_68());
      var tmp_70 = r$ref_69();
      var tmp_71 = r$ref_70();
      var tmp_72 = r$ref_71();
      var tmp_73 = r$ref_72();
      var tmp_74 = r$ref_73();
      var tmp_75 = r$ref_74();
      var tmp_76 = r$ref_75();
      var tmp_77 = r$ref_76();
      var tmp_78 = r$ref_77();
      var tmp_79 = eca(tmp_69, tmp_70, tmp_71, tmp_72, tmp_73, tmp_74, tmp_75, tmp_76, tmp_77, tmp_78, r$ref_78());
      var tmp_80 = r$ref_79();
      var tmp_81 = r$ref_80();
      var tmp_82 = r$ref_81();
      var tmp_83 = r$ref_82();
      var tmp_84 = r$ref_83();
      var tmp_85 = r$ref_84();
      var tmp_86 = r$ref_85();
      var tmp_87 = r$ref_86();
      var tmp_88 = r$ref_87();
      var tmp_89 = eca(tmp_79, tmp_80, tmp_81, tmp_82, tmp_83, tmp_84, tmp_85, tmp_86, tmp_87, tmp_88, r$ref_88());
      var tmp_90 = r$ref_89();
      var tmp_91 = r$ref_90();
      var tmp_92 = r$ref_91();
      var tmp_93 = r$ref_92();
      var tmp_94 = r$ref_93();
      var tmp_95 = r$ref_94();
      var tmp_96 = r$ref_95();
      var tmp_97 = r$ref_96();
      var tmp_98 = r$ref_97();
      var tmp_99 = eca(tmp_89, tmp_90, tmp_91, tmp_92, tmp_93, tmp_94, tmp_95, tmp_96, tmp_97, tmp_98, r$ref_98());
      var tmp_100 = r$ref_99();
      var tmp_101 = r$ref_100();
      var tmp_102 = r$ref_101();
      var tmp_103 = r$ref_102();
      var tmp_104 = r$ref_103();
      var tmp_105 = r$ref_104();
      var tmp_106 = r$ref_105();
      var tmp_107 = r$ref_106();
      var tmp_108 = r$ref_107();
      var tmp_109 = eca(tmp_99, tmp_100, tmp_101, tmp_102, tmp_103, tmp_104, tmp_105, tmp_106, tmp_107, tmp_108, r$ref_108());
      var tmp_110 = r$ref_109();
      var tmp_111 = r$ref_110();
      var tmp_112 = r$ref_111();
      var tmp_113 = r$ref_112();
      var tmp_114 = r$ref_113();
      var tmp_115 = r$ref_114();
      var tmp_116 = r$ref_115();
      var tmp_117 = r$ref_116();
      var tmp_118 = r$ref_117();
      var tmp_119 = eca(tmp_109, tmp_110, tmp_111, tmp_112, tmp_113, tmp_114, tmp_115, tmp_116, tmp_117, tmp_118, r$ref_118());
      var tmp_120 = r$ref_119();
      var tmp_121 = r$ref_120();
      var tmp_122 = r$ref_121();
      var tmp_123 = r$ref_122();
      var tmp_124 = r$ref_123();
      var tmp_125 = r$ref_124();
      var tmp_126 = r$ref_125();
      var tmp_127 = r$ref_126();
      var tmp_128 = r$ref_127();
      var tmp_129 = eca(tmp_119, tmp_120, tmp_121, tmp_122, tmp_123, tmp_124, tmp_125, tmp_126, tmp_127, tmp_128, r$ref_128());
      var tmp_130 = r$ref_129();
      var tmp_131 = r$ref_130();
      var tmp_132 = r$ref_131();
      var tmp_133 = r$ref_132();
      var tmp_134 = r$ref_133();
      var tmp_135 = r$ref_134();
      var tmp_136 = r$ref_135();
      var tmp_137 = r$ref_136();
      var tmp_138 = r$ref_137();
      var tmp_139 = eca(tmp_129, tmp_130, tmp_131, tmp_132, tmp_133, tmp_134, tmp_135, tmp_136, tmp_137, tmp_138, r$ref_138());
      var tmp_140 = r$ref_139();
      var tmp_141 = r$ref_140();
      var tmp_142 = r$ref_141();
      var tmp_143 = r$ref_142();
      var tmp_144 = r$ref_143();
      var tmp_145 = r$ref_144();
      var tmp_146 = r$ref_145();
      var tmp_147 = r$ref_146();
      var tmp_148 = r$ref_147();
      var tmp_149 = eca(tmp_139, tmp_140, tmp_141, tmp_142, tmp_143, tmp_144, tmp_145, tmp_146, tmp_147, tmp_148, r$ref_148());
      var tmp_150 = r$ref_149();
      var tmp_151 = r$ref_150();
      var tmp_152 = r$ref_151();
      var tmp_153 = r$ref_152();
      var tmp_154 = r$ref_153();
      var tmp_155 = r$ref_154();
      var tmp_156 = r$ref_155();
      var tmp_157 = r$ref_156();
      var tmp_158 = r$ref_157();
      var tmp_159 = eca(tmp_149, tmp_150, tmp_151, tmp_152, tmp_153, tmp_154, tmp_155, tmp_156, tmp_157, tmp_158, r$ref_158());
      var tmp_160 = r$ref_159();
      var tmp_161 = r$ref_160();
      var tmp_162 = r$ref_161();
      var tmp_163 = r$ref_162();
      var tmp_164 = r$ref_163();
      var tmp_165 = r$ref_164();
      var tmp_166 = r$ref_165();
      var tmp_167 = r$ref_166();
      var tmp_168 = r$ref_167();
      var tmp_169 = eca(tmp_159, tmp_160, tmp_161, tmp_162, tmp_163, tmp_164, tmp_165, tmp_166, tmp_167, tmp_168, r$ref_168());
      var tmp_170 = r$ref_169();
      var tmp_171 = r$ref_170();
      var tmp_172 = r$ref_171();
      var tmp_173 = r$ref_172();
      var tmp_174 = r$ref_173();
      var tmp_175 = r$ref_174();
      var tmp_176 = r$ref_175();
      var tmp_177 = r$ref_176();
      var tmp_178 = r$ref_177();
      var tmp_179 = eca(tmp_169, tmp_170, tmp_171, tmp_172, tmp_173, tmp_174, tmp_175, tmp_176, tmp_177, tmp_178, r$ref_178());
      var tmp_180 = r$ref_179();
      var tmp_181 = r$ref_180();
      var tmp_182 = r$ref_181();
      var tmp_183 = r$ref_182();
      var tmp_184 = r$ref_183();
      var tmp_185 = r$ref_184();
      var tmp_186 = r$ref_185();
      var tmp_187 = r$ref_186();
      var tmp_188 = r$ref_187();
      var tmp_189 = eca(tmp_179, tmp_180, tmp_181, tmp_182, tmp_183, tmp_184, tmp_185, tmp_186, tmp_187, tmp_188, r$ref_188());
      var tmp_190 = r$ref_189();
      var tmp_191 = r$ref_190();
      var tmp_192 = r$ref_191();
      var tmp_193 = r$ref_192();
      var tmp_194 = r$ref_193();
      var tmp_195 = r$ref_194();
      var tmp_196 = r$ref_195();
      var tmp_197 = r$ref_196();
      var tmp_198 = r$ref_197();
      var tmp_199 = eca(tmp_189, tmp_190, tmp_191, tmp_192, tmp_193, tmp_194, tmp_195, tmp_196, tmp_197, tmp_198, r$ref_198());
      var tmp_200 = r$ref_199();
      var tmp_201 = r$ref_200();
      var tmp_202 = r$ref_201();
      var tmp_203 = r$ref_202();
      var tmp_204 = r$ref_203();
      var tmp_205 = r$ref_204();
      var tmp_206 = r$ref_205();
      var tmp_207 = r$ref_206();
      var tmp_208 = r$ref_207();
      var tmp_209 = eca(tmp_199, tmp_200, tmp_201, tmp_202, tmp_203, tmp_204, tmp_205, tmp_206, tmp_207, tmp_208, r$ref_208());
      var tmp_210 = r$ref_209();
      var tmp_211 = r$ref_210();
      var tmp_212 = r$ref_211();
      var tmp_213 = r$ref_212();
      var tmp_214 = r$ref_213();
      var tmp_215 = r$ref_214();
      var tmp_216 = r$ref_215();
      var tmp_217 = r$ref_216();
      var tmp_218 = r$ref_217();
      var tmp_219 = eca(tmp_209, tmp_210, tmp_211, tmp_212, tmp_213, tmp_214, tmp_215, tmp_216, tmp_217, tmp_218, r$ref_218());
      var tmp_220 = r$ref_219();
      var tmp_221 = r$ref_220();
      var tmp_222 = r$ref_221();
      var tmp_223 = r$ref_222();
      var tmp_224 = r$ref_223();
      var tmp_225 = r$ref_224();
      var tmp_226 = r$ref_225();
      var tmp_227 = r$ref_226();
      var tmp_228 = r$ref_227();
      var tmp_229 = eca(tmp_219, tmp_220, tmp_221, tmp_222, tmp_223, tmp_224, tmp_225, tmp_226, tmp_227, tmp_228, r$ref_228());
      var tmp_230 = r$ref_229();
      var tmp_231 = r$ref_230();
      var tmp_232 = r$ref_231();
      var tmp_233 = r$ref_232();
      var tmp_234 = r$ref_233();
      var tmp_235 = r$ref_234();
      var tmp_236 = r$ref_235();
      var tmp_237 = r$ref_236();
      var tmp_238 = r$ref_237();
      var tmp_239 = eca(tmp_229, tmp_230, tmp_231, tmp_232, tmp_233, tmp_234, tmp_235, tmp_236, tmp_237, tmp_238, r$ref_238());
      var tmp_240 = r$ref_239();
      var tmp_241 = r$ref_240();
      var tmp_242 = r$ref_241();
      var tmp_243 = r$ref_242();
      var tmp_244 = r$ref_243();
      var tmp_245 = r$ref_244();
      var tmp_246 = r$ref_245();
      var tmp_247 = r$ref_246();
      var tmp_248 = r$ref_247();
      var tmp_249 = eca(tmp_239, tmp_240, tmp_241, tmp_242, tmp_243, tmp_244, tmp_245, tmp_246, tmp_247, tmp_248, r$ref_248());
      var tmp_250 = r$ref_249();
      var tmp_251 = r$ref_250();
      var tmp_252 = r$ref_251();
      var tmp_253 = r$ref_252();
      var tmp_254 = r$ref_253();
      var tmp_255 = r$ref_254();
      var tmp_256 = r$ref_255();
      var tmp_257 = r$ref_256();
      var tmp_258 = r$ref_257();
      var tmp_259 = eca(tmp_249, tmp_250, tmp_251, tmp_252, tmp_253, tmp_254, tmp_255, tmp_256, tmp_257, tmp_258, r$ref_258());
      var tmp_260 = r$ref_259();
      var tmp_261 = r$ref_260();
      var tmp_262 = r$ref_261();
      var tmp_263 = r$ref_262();
      var tmp_264 = r$ref_263();
      var tmp_265 = r$ref_264();
      var tmp_266 = r$ref_265();
      var tmp_267 = r$ref_266();
      var tmp_268 = r$ref_267();
      eca10 = eca(tmp_259, tmp_260, tmp_261, tmp_262, tmp_263, tmp_264, tmp_265, tmp_266, tmp_267, tmp_268, r$ref_268());
      var tmp_269 = BVec_0(龖_getInstance(), 口_getInstance(), 口_getInstance(), 龖_getInstance());
      var tmp_270 = r$ref_269();
      var tmp_271 = r$ref_270();
      var tmp_272 = r$ref_271();
      var tmp_273 = eca_0(tmp_269, tmp_270, tmp_271, tmp_272, r$ref_272());
      var tmp_274 = r$ref_273();
      var tmp_275 = r$ref_274();
      var tmp_276 = r$ref_275();
      var tmp_277 = eca_0(tmp_273, tmp_274, tmp_275, tmp_276, r$ref_276());
      var tmp_278 = r$ref_277();
      var tmp_279 = r$ref_278();
      var tmp_280 = r$ref_279();
      var tmp_281 = eca_0(tmp_277, tmp_278, tmp_279, tmp_280, r$ref_280());
      var tmp_282 = r$ref_281();
      var tmp_283 = r$ref_282();
      var tmp_284 = r$ref_283();
      var tmp_285 = eca_0(tmp_281, tmp_282, tmp_283, tmp_284, r$ref_284());
      var tmp_286 = r$ref_285();
      var tmp_287 = r$ref_286();
      var tmp_288 = r$ref_287();
      var tmp_289 = eca_0(tmp_285, tmp_286, tmp_287, tmp_288, r$ref_288());
      var tmp_290 = r$ref_289();
      var tmp_291 = r$ref_290();
      var tmp_292 = r$ref_291();
      eca4 = eca_0(tmp_289, tmp_290, tmp_291, tmp_292, r$ref_292());
    }
  }
  function get_t() {
    _init_properties_LFSR_kt__rr05ll();
    return t;
  }
  var t;
  function get_lfsr4() {
    _init_properties_LFSR_kt__rr05ll();
    return lfsr4;
  }
  var lfsr4;
  function get_lfsr5() {
    _init_properties_LFSR_kt__rr05ll();
    return lfsr5;
  }
  var lfsr5;
  function BVec10(b0, b1, b2, b3, b4, b5, b6, b7, b8, b9) {
    BVec_3.call(this, [b0, b1, b2, b3, b4, b5, b6, b7, b8, b9]);
    this.b0__1 = b0;
    this.b1__1 = b1;
    this.b2__1 = b2;
    this.b3__1 = b3;
    this.b4__1 = b4;
    this.b5__1 = b5;
    this.b6__1 = b6;
    this.b7__1 = b7;
    this.b8__1 = b8;
    this.b9__1 = b9;
  }
  protoOf(BVec10).get_b0_knto4p_k$ = function () {
    return this.b0__1;
  };
  protoOf(BVec10).get_b1_knto4o_k$ = function () {
    return this.b1__1;
  };
  protoOf(BVec10).get_b2_knto4n_k$ = function () {
    return this.b2__1;
  };
  protoOf(BVec10).get_b3_knto4m_k$ = function () {
    return this.b3__1;
  };
  protoOf(BVec10).get_b4_knto4l_k$ = function () {
    return this.b4__1;
  };
  protoOf(BVec10).get_b5_knto4k_k$ = function () {
    return this.b5__1;
  };
  protoOf(BVec10).get_b6_knto4j_k$ = function () {
    return this.b6__1;
  };
  protoOf(BVec10).get_b7_knto4i_k$ = function () {
    return this.b7__1;
  };
  protoOf(BVec10).get_b8_knto4h_k$ = function () {
    return this.b8__1;
  };
  protoOf(BVec10).get_b9_knto4g_k$ = function () {
    return this.b9__1;
  };
  function 龖() {
    龖_instance = this;
    Bool.call(this, 龖_getInstance(), 口_getInstance());
    this.value_1 = true;
  }
  protoOf(龖).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  var 龖_instance;
  function 龖_getInstance() {
    if (龖_instance == null)
      new 龖();
    return 龖_instance;
  }
  function 口() {
    口_instance = this;
    Bool.call(this, 口_getInstance(), 龖_getInstance());
    this.value_1 = false;
  }
  protoOf(口).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  var 口_instance;
  function 口_getInstance() {
    if (口_instance == null)
      new 口();
    return 口_instance;
  }
  function BVec(b0, b1, b2, b3, b4, b5, b6, b7, b8, b9) {
    _init_properties_LFSR_kt__rr05ll();
    return new BVec10(b0, b1, b2, b3, b4, b5, b6, b7, b8, b9);
  }
  function BVec4(a, b, c, d) {
    BVec_3.call(this, [a, b, c, d]);
    this.a_1 = a;
    this.b_1 = b;
    this.c_1 = c;
    this.d_1 = d;
  }
  protoOf(BVec4).get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  protoOf(BVec4).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(BVec4).get_c_1mhr5m_k$ = function () {
    return this.c_1;
  };
  protoOf(BVec4).get_d_1mhr5n_k$ = function () {
    return this.d_1;
  };
  function BVec_0(a, b, c, d) {
    _init_properties_LFSR_kt__rr05ll();
    return new BVec4(a, b, c, d);
  }
  function BVec2(a, b) {
    BVec_3.call(this, [a, b]);
    this.a_1 = a;
    this.b_1 = b;
  }
  protoOf(BVec2).get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  protoOf(BVec2).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  function flip(_this__u8e3s4) {
    _init_properties_LFSR_kt__rr05ll();
    return new BVec2(flip_0(_this__u8e3s4.a_1), flip_0(_this__u8e3s4.b_1));
  }
  function BVec_1(a, b) {
    _init_properties_LFSR_kt__rr05ll();
    return new BVec2(a, b);
  }
  function lfsr(_this__u8e3s4) {
    _init_properties_LFSR_kt__rr05ll();
    return new BVec4(龖_getInstance(), _this__u8e3s4.a_1, _this__u8e3s4.b_1, _this__u8e3s4.c_1);
  }
  function lfsr_0(_this__u8e3s4) {
    _init_properties_LFSR_kt__rr05ll();
    return new BVec4(口_getInstance(), _this__u8e3s4.a_1, _this__u8e3s4.b_1, _this__u8e3s4.c_1);
  }
  function BVec5(a, b, c, d, e) {
    BVec_3.call(this, [a, b, c, d, e]);
    this.a_1 = a;
    this.b_1 = b;
    this.c_1 = c;
    this.d_1 = d;
    this.e_1 = e;
  }
  protoOf(BVec5).get_a_1mhr5k_k$ = function () {
    return this.a_1;
  };
  protoOf(BVec5).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(BVec5).get_c_1mhr5m_k$ = function () {
    return this.c_1;
  };
  protoOf(BVec5).get_d_1mhr5n_k$ = function () {
    return this.d_1;
  };
  protoOf(BVec5).get_e_1mhr5o_k$ = function () {
    return this.e_1;
  };
  function lfsr_1(_this__u8e3s4) {
    _init_properties_LFSR_kt__rr05ll();
    return new BVec5(口_getInstance(), _this__u8e3s4.a_1, _this__u8e3s4.b_1, _this__u8e3s4.c_1, _this__u8e3s4.d_1);
  }
  function lfsr_2(_this__u8e3s4) {
    _init_properties_LFSR_kt__rr05ll();
    return new BVec5(龖_getInstance(), _this__u8e3s4.a_1, _this__u8e3s4.b_1, _this__u8e3s4.c_1, _this__u8e3s4.d_1);
  }
  function BVec_2(a, b, c, d, e) {
    _init_properties_LFSR_kt__rr05ll();
    return new BVec5(a, b, c, d, e);
  }
  function BVec_3(data) {
    this.data_1 = data;
  }
  protoOf(BVec_3).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  function Bool(b, nb) {
    this.b_1 = b;
    this.nb_1 = nb;
  }
  protoOf(Bool).get_b_1mhr5l_k$ = function () {
    return this.b_1;
  };
  protoOf(Bool).get_nb_kntnsz_k$ = function () {
    return this.nb_1;
  };
  function flip_0(_this__u8e3s4) {
    _init_properties_LFSR_kt__rr05ll();
    return _this__u8e3s4.nb_1;
  }
  var properties_initialized_LFSR_kt_b2obdn;
  function _init_properties_LFSR_kt__rr05ll() {
    if (!properties_initialized_LFSR_kt_b2obdn) {
      properties_initialized_LFSR_kt_b2obdn = true;
      t = flip(BVec_1(龖_getInstance(), 口_getInstance()));
      lfsr4 = lfsr(lfsr_0(lfsr_0(lfsr(lfsr_0(lfsr_0(lfsr_0(lfsr(lfsr(lfsr(lfsr(lfsr_0(lfsr(lfsr_0(lfsr(BVec_0(龖_getInstance(), 口_getInstance(), 口_getInstance(), 龖_getInstance()))))))))))))))));
      lfsr5 = lfsr_1(lfsr_2(lfsr_2(lfsr_2(lfsr_1(lfsr_2(lfsr_2(lfsr_1(lfsr_1(lfsr_1(lfsr_2(lfsr_2(lfsr_2(lfsr_2(lfsr_2(lfsr_1(lfsr_1(lfsr_2(lfsr_2(lfsr_1(lfsr_2(lfsr_1(lfsr_1(lfsr_2(lfsr_1(lfsr_1(lfsr_1(lfsr_1(lfsr_2(lfsr_1(lfsr_2(lfsr_1(lfsr_2(lfsr_2(lfsr_2(lfsr_1(lfsr_2(lfsr_2(lfsr_1(lfsr_1(lfsr_1(lfsr_2(lfsr_2(lfsr_2(lfsr_2(BVec_2(龖_getInstance(), 口_getInstance(), 口_getInstance(), 龖_getInstance(), 龖_getInstance()))))))))))))))))))))))))))))))))))))))))))))));
    }
  }
  function _get_maxSize__tb5fbo($this) {
    return $this.maxSize_1;
  }
  function _get_sizeOf__1l3f4j($this) {
    return $this.sizeOf_1;
  }
  function _get_map__e6co1h($this) {
    return $this.map_1;
  }
  function _set_size__9twho6($this, _set____db54di) {
    $this.size_1 = _set____db54di;
  }
  function _get_size__ddoh9m($this) {
    return $this.size_1;
  }
  function trimToSize($this) {
    if ($this.size_1 <= $this.maxSize_1 ? true : $this.map_1.isEmpty_y1axqb_k$())
      return Unit_getInstance();
    try {
      var toEvict = $this.map_1.get_entries_p20ztl_k$().iterator_jk1svi_k$().next_20eer_k$();
      var key = toEvict.get_key_18j28a_k$();
      var value = toEvict.get_value_j01efc_k$();
      $this.map_1.remove_gppy8k_k$(key);
      $this.size_1 = $this.size_1 - $this.sizeOf_1(key, value) | 0;
      trimToSize($this);
    } catch ($p) {
      if ($p instanceof Exception) {
        var _ = $p;
      } else {
        throw $p;
      }
    }
  }
  function LRUCache$_init_$lambda_wrqm0(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
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
    this.maxSize_1 = maxSize;
    this.sizeOf_1 = sizeOf;
    this.map_1 = LinkedHashMap_init_$Create$_0(0, 0.75);
    this.size_1 = 0;
  }
  protoOf(LRUCache).getOrPut_ppgj9u_k$ = function (key, value) {
    var tmp0_elvis_lhs = this.map_1.get_wei43m_k$(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = value();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.cache.LRUCache.getOrPut.<anonymous>' call
      this.put_4fpzoq_k$(key, this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(LRUCache).get_wei43m_k$ = function (key) {
    return this.map_1.get_wei43m_k$(key);
  };
  protoOf(LRUCache).put_4fpzoq_k$ = function (key, value) {
    this.size_1 = this.size_1 + this.sizeOf_1(key, value) | 0;
    var prev = this.map_1.put_4fpzoq_k$(key, value);
    if (prev == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.size_1 = this.size_1 - this.sizeOf_1(key, prev) | 0;
    }
    trimToSize(this);
    return prev;
  };
  protoOf(LRUCache).remove_gppy8k_k$ = function (key) {
    var prev = this.map_1.remove_gppy8k_k$(key);
    if (prev == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      this.size_1 = this.size_1 - this.sizeOf_1(key, prev) | 0;
    }
    return prev;
  };
  protoOf(LRUCache).toString = function () {
    return '' + this.size_1 + '/' + this.maxSize_1 + ' cached=' + this.map_1;
  };
  protoOf(LRUCache).contains_vbgn2f_k$ = function (key) {
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.map_1;
    return (isInterface(this_0, Map) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(key);
  };
  function get_a() {
    _init_properties_ComputationGraph_kt__t7b6nb();
    return a$delegate.getValue_fbnwi2_k$(null, a$factory());
  }
  var a$delegate;
  function get_b() {
    _init_properties_ComputationGraph_kt__t7b6nb();
    return b$delegate.getValue_fbnwi2_k$(null, b$factory());
  }
  var b$delegate;
  function get_c() {
    _init_properties_ComputationGraph_kt__t7b6nb();
    return c$delegate.getValue_fbnwi2_k$(null, c$factory());
  }
  var c$delegate;
  function get_d() {
    _init_properties_ComputationGraph_kt__t7b6nb();
    return d$delegate.getValue_fbnwi2_k$(null, d$factory());
  }
  var d$delegate;
  function get_e() {
    _init_properties_ComputationGraph_kt__t7b6nb();
    return e$delegate.getValue_fbnwi2_k$(null, e$factory());
  }
  var e$delegate;
  function get_f() {
    _init_properties_ComputationGraph_kt__t7b6nb();
    return f$delegate.getValue_fbnwi2_k$(null, f$factory());
  }
  var f$delegate;
  function get_g() {
    _init_properties_ComputationGraph_kt__t7b6nb();
    return g$delegate.getValue_fbnwi2_k$(null, g$factory());
  }
  var g$delegate;
  function get_h() {
    _init_properties_ComputationGraph_kt__t7b6nb();
    return h$delegate.getValue_fbnwi2_k$(null, h$factory());
  }
  var h$delegate;
  function get_i() {
    _init_properties_ComputationGraph_kt__t7b6nb();
    return i$delegate.getValue_fbnwi2_k$(null, i$factory());
  }
  var i$delegate;
  function get_j() {
    _init_properties_ComputationGraph_kt__t7b6nb();
    return j$delegate.getValue_fbnwi2_k$(null, j$factory());
  }
  var j$delegate;
  function get_k() {
    _init_properties_ComputationGraph_kt__t7b6nb();
    return k$delegate.getValue_fbnwi2_k$(null, k$factory());
  }
  var k$delegate;
  function get_l() {
    _init_properties_ComputationGraph_kt__t7b6nb();
    return l$delegate.getValue_fbnwi2_k$(null, l$factory());
  }
  var l$delegate;
  function Gate_init_$Init$(op, gates, $this) {
    op = op === VOID ? id_getInstance() : op;
    Gate_init_$Init$_1(randomString(), op, gates.slice(), $this);
    return $this;
  }
  function Gate_init_$Create$(op, gates) {
    return Gate_init_$Init$(op, gates, objectCreate(protoOf(Gate)));
  }
  function Gate_init_$Init$_0(id, gates, $this) {
    id = id === VOID ? randomString() : id;
    Gate_init_$Init$_1(id, id_getInstance(), gates.slice(), $this);
    return $this;
  }
  function Gate_init_$Create$_0(id, gates) {
    return Gate_init_$Init$_0(id, gates, objectCreate(protoOf(Gate)));
  }
  function Gate_init_$Init$_1(id, op, gates, $this) {
    id = id === VOID ? randomString() : id;
    op = op === VOID ? id_getInstance() : op;
    Gate.call($this, id, op, Gate$_init_$lambda_if5pa8(gates));
    return $this;
  }
  function Gate_init_$Create$_1(id, op, gates) {
    return Gate_init_$Init$_1(id, op, gates, objectCreate(protoOf(Gate)));
  }
  function Gate_init_$Init$_2(id, edgeMap, $this) {
    id = id === VOID ? randomString() : id;
    Gate.call($this, id, id_getInstance(), edgeMap);
    return $this;
  }
  function Gate_init_$Create$_2(id, edgeMap) {
    return Gate_init_$Init$_2(id, edgeMap, objectCreate(protoOf(Gate)));
  }
  function Gate_init_$Init$_3(gate, edgeMap, $this) {
    Gate.call($this, gate.get_id_kntnx8_k$(), gate.op_1, edgeMap);
    return $this;
  }
  function Gate_init_$Create$_3(gate, edgeMap) {
    return Gate_init_$Init$_3(gate, edgeMap, objectCreate(protoOf(Gate)));
  }
  function Companion() {
    Companion_instance = this;
  }
  protoOf(Companion).wrap_av5uoc_k$ = function (value) {
    var tmp;
    if (value instanceof Gate) {
      tmp = value;
    } else {
      tmp = Gate_init_$Create$_0(toString(value), []);
    }
    return tmp;
  };
  protoOf(Companion).wrap_6jkdpa_k$ = function (left, right, op) {
    return op(this.wrap_av5uoc_k$(left), this.wrap_av5uoc_k$(right));
  };
  protoOf(Companion).wrapAll_dcrm5a_k$ = function (values) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(values.length);
    var inductionVariable = 0;
    var last = values.length;
    while (inductionVariable < last) {
      var item = values[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'ai.hypergraph.kaliningraph.graphs.Companion.wrapAll.<anonymous>' call
      var tmp$ret$0 = Companion_getInstance_0().wrap_av5uoc_k$(item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return copyToArray(destination);
  };
  var Companion_instance;
  function Companion_getInstance_0() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Gate$_init_$lambda_if5pa8($gates) {
    return function (s) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = toSet_0($gates);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.graphs.Gate.<init>.<anonymous>.<anonymous>' call
        var tmp$ret$0 = new UnlabeledEdge(s, item);
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      return toSet_1(destination);
    };
  }
  function Gate(id, op, edgeMap) {
    Companion_getInstance_0();
    id = id === VOID ? randomString() : id;
    op = op === VOID ? id_getInstance() : op;
    Vertex.call(this, id);
    this.op_1 = op;
    this.edgeMap_1 = edgeMap;
  }
  protoOf(Gate).get_op_kntnrq_k$ = function () {
    return this.op_1;
  };
  protoOf(Gate).get_edgeMap_tzvf62_k$ = function () {
    return this.edgeMap_1;
  };
  protoOf(Gate).toString = function () {
    return equals(this.op_1, id_getInstance()) ? this.get_id_kntnx8_k$() : toString(this.op_1);
  };
  protoOf(Gate).plus_crvq3g_k$ = function (that) {
    return Gate_init_$Create$(sum_getInstance(), [this, Companion_getInstance_0().wrap_av5uoc_k$(that)]);
  };
  protoOf(Gate).minus_c5ic26_k$ = function (that) {
    return Gate_init_$Create$(sub_getInstance(), [this, Companion_getInstance_0().wrap_av5uoc_k$(that)]);
  };
  protoOf(Gate).times_vzd5vs_k$ = function (that) {
    return Gate_init_$Create$(prod_getInstance(), [this, Companion_getInstance_0().wrap_av5uoc_k$(that)]);
  };
  protoOf(Gate).div_pipn7x_k$ = function (that) {
    return Gate_init_$Create$(ratio_getInstance(), [this, Companion_getInstance_0().wrap_av5uoc_k$(that)]);
  };
  protoOf(Gate).pow_urdzkq_k$ = function (that) {
    return Gate_init_$Create$(pow_getInstance(), [this, Companion_getInstance_0().wrap_av5uoc_k$(that)]);
  };
  protoOf(Gate).log_vh1j9i_k$ = function (that) {
    return Gate_init_$Create$(log_getInstance(), [this, Companion_getInstance_0().wrap_av5uoc_k$(that)]);
  };
  protoOf(Gate).unaryMinus_6uz0qp_k$ = function () {
    return Gate_init_$Create$(sub_getInstance(), [this]);
  };
  protoOf(Gate).sin_2fvc_k$ = function () {
    return Gate_init_$Create$(sin_getInstance(), [this]);
  };
  protoOf(Gate).cos_245j_k$ = function () {
    return Gate_init_$Create$(cos_getInstance(), [this]);
  };
  protoOf(Gate).tan_2gf5_k$ = function () {
    return Gate_init_$Create$(tan_getInstance(), [this]);
  };
  protoOf(Gate).d_gw8jqe_k$ = function (that) {
    return Gate_init_$Create$(d_getInstance(), [this, Companion_getInstance_0().wrap_av5uoc_k$(that)]);
  };
  protoOf(Gate).getValue_fbnwi2_k$ = function (a, prop) {
    return Gate_init_$Create$_0(prop.callableName, []);
  };
  protoOf(Gate).setValue_39l46n_k$ = function (builder, prop, value) {
    var tmp = builder;
    var tmp_0 = builder.graph_1;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.graphs.Gate.setValue.<anonymous>' call
    var it = Gate_init_$Create$_0(prop.callableName, [Gate_init_$Create$(eql_getInstance(), [value])]);
    var tmp$ret$1 = new ComputationGraph(get_graph_0(it), it);
    tmp.graph_1 = tmp_0.plus_ru5xrw_k$(tmp$ret$1);
  };
  function Var(name) {
    name = name === VOID ? randomString() : name;
    Gate_init_$Init$_0(name, [], this);
    this.name_1 = name;
  }
  protoOf(Var).get_name_woqyms_k$ = function () {
    return this.name_1;
  };
  function ComputationGraph_init_$Init$(vertices, $this) {
    var tmp;
    if (vertices === VOID) {
      // Inline function 'kotlin.collections.setOf' call
      tmp = emptySet();
    } else {
      tmp = vertices;
    }
    vertices = tmp;
    ComputationGraph.call($this, vertices, firstOrNull(vertices));
    return $this;
  }
  function ComputationGraph_init_$Create$(vertices) {
    return ComputationGraph_init_$Init$(vertices, objectCreate(protoOf(ComputationGraph)));
  }
  function ComputationGraph_init_$Init$_0(builder, $this) {
    // Inline function 'kotlin.also' call
    var this_0 = new CircuitBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.graphs.ComputationGraph.<init>.<anonymous>' call
    builder(this_0);
    ComputationGraph_init_$Init$(this_0.graph_1, $this);
    return $this;
  }
  function ComputationGraph_init_$Create$_0(builder) {
    return ComputationGraph_init_$Init$_0(builder, objectCreate(protoOf(ComputationGraph)));
  }
  function ComputationGraph(vertices, root) {
    var tmp;
    if (vertices === VOID) {
      // Inline function 'kotlin.collections.setOf' call
      tmp = emptySet();
    } else {
      tmp = vertices;
    }
    vertices = tmp;
    root = root === VOID ? firstOrNull(vertices) : root;
    Graph.call(this, vertices);
    this.vertices_2 = vertices;
    this.root_1 = root;
  }
  protoOf(ComputationGraph).get_vertices_6eva2q_k$ = function () {
    return this.vertices_2;
  };
  protoOf(ComputationGraph).get_root_wott0r_k$ = function () {
    return this.root_1;
  };
  function UnlabeledEdge(source, target) {
    Edge.call(this, source, target);
    this.source_2 = source;
    this.target_2 = target;
  }
  protoOf(UnlabeledEdge).get_source_jl0x7o_k$ = function () {
    return this.source_2;
  };
  protoOf(UnlabeledEdge).get_target_juba8q_k$ = function () {
    return this.target_2;
  };
  function CGFamily$_get_E_$lambda_4bjp4r(s, t) {
    return new UnlabeledEdge(s, t);
  }
  function CGFamily$_get_V_$lambda_6mkagk(old, edgeMap) {
    return Gate_init_$Create$_3(old, edgeMap);
  }
  function CGFamily$_get_G_$lambda_fkfpj1(vertices) {
    return ComputationGraph_init_$Create$(vertices);
  }
  function CGFamily() {
  }
  function Op() {
  }
  function TopOp() {
  }
  protoOf(TopOp).toString = function () {
    var tmp;
    if (this instanceof sum) {
      tmp = '+';
    } else {
      if (this instanceof sub) {
        tmp = '-';
      } else {
        if (this instanceof prod) {
          tmp = '*';
        } else {
          if (this instanceof ratio) {
            tmp = '/';
          } else {
            if (this instanceof odot) {
              tmp = '\u2299';
            } else {
              tmp = ensureNotNull(getKClassFromExpression(this).get_simpleName_r6f8py_k$());
            }
          }
        }
      }
    }
    return ' ' + tmp + ' ';
  };
  function sum() {
    sum_instance = this;
    TopOp.call(this);
  }
  var sum_instance;
  function sum_getInstance() {
    if (sum_instance == null)
      new sum();
    return sum_instance;
  }
  function sub() {
    sub_instance = this;
    TopOp.call(this);
  }
  var sub_instance;
  function sub_getInstance() {
    if (sub_instance == null)
      new sub();
    return sub_instance;
  }
  function sin() {
    sin_instance = this;
    TopOp.call(this);
  }
  var sin_instance;
  function sin_getInstance() {
    if (sin_instance == null)
      new sin();
    return sin_instance;
  }
  function cos() {
    cos_instance = this;
    TopOp.call(this);
  }
  var cos_instance;
  function cos_getInstance() {
    if (cos_instance == null)
      new cos();
    return cos_instance;
  }
  function tan() {
    tan_instance = this;
    TopOp.call(this);
  }
  var tan_instance;
  function tan_getInstance() {
    if (tan_instance == null)
      new tan();
    return tan_instance;
  }
  function id() {
    id_instance = this;
    TopOp.call(this);
  }
  var id_instance;
  function id_getInstance() {
    if (id_instance == null)
      new id();
    return id_instance;
  }
  function transpose() {
    transpose_instance = this;
    TopOp.call(this);
  }
  var transpose_instance;
  function transpose_getInstance() {
    if (transpose_instance == null)
      new transpose();
    return transpose_instance;
  }
  function prod() {
    prod_instance = this;
    TopOp.call(this);
  }
  var prod_instance;
  function prod_getInstance() {
    if (prod_instance == null)
      new prod();
    return prod_instance;
  }
  function odot() {
    odot_instance = this;
    TopOp.call(this);
  }
  var odot_instance;
  function odot_getInstance() {
    if (odot_instance == null)
      new odot();
    return odot_instance;
  }
  function ratio() {
    ratio_instance = this;
    TopOp.call(this);
  }
  var ratio_instance;
  function ratio_getInstance() {
    if (ratio_instance == null)
      new ratio();
    return ratio_instance;
  }
  function eql() {
    eql_instance = this;
    TopOp.call(this);
  }
  var eql_instance;
  function eql_getInstance() {
    if (eql_instance == null)
      new eql();
    return eql_instance;
  }
  function dot_0() {
    dot_instance = this;
    TopOp.call(this);
  }
  var dot_instance;
  function dot_getInstance() {
    if (dot_instance == null)
      new dot_0();
    return dot_instance;
  }
  function pow_1() {
    pow_instance = this;
    TopOp.call(this);
  }
  var pow_instance;
  function pow_getInstance() {
    if (pow_instance == null)
      new pow_1();
    return pow_instance;
  }
  function log() {
    log_instance = this;
    TopOp.call(this);
  }
  var log_instance;
  function log_getInstance() {
    if (log_instance == null)
      new log();
    return log_instance;
  }
  function d() {
    d_instance = this;
    TopOp.call(this);
  }
  var d_instance;
  function d_getInstance() {
    if (d_instance == null)
      new d();
    return d_instance;
  }
  function λ() {
    λ_instance = this;
    TopOp.call(this);
  }
  var λ_instance;
  function λ_getInstance() {
    if (λ_instance == null)
      new λ();
    return λ_instance;
  }
  function Σ() {
    Σ_instance = this;
    TopOp.call(this);
  }
  var Σ_instance;
  function Σ_getInstance() {
    if (Σ_instance == null)
      new Σ();
    return Σ_instance;
  }
  function Π() {
    Π_instance = this;
    TopOp.call(this);
  }
  var Π_instance;
  function Π_getInstance() {
    if (Π_instance == null)
      new Π();
    return Π_instance;
  }
  function map_1() {
    map_instance = this;
    TopOp.call(this);
  }
  var map_instance;
  function map_getInstance() {
    if (map_instance == null)
      new map_1();
    return map_instance;
  }
  function Ops() {
    Ops_instance = this;
  }
  var Ops_instance;
  function Ops_getInstance() {
    if (Ops_instance == null)
      new Ops();
    return Ops_instance;
  }
  function CircuitBuilder$plus$lambda(a, b) {
    return a.plus_crvq3g_k$(b);
  }
  function CircuitBuilder$minus$lambda(a, b) {
    return a.minus_c5ic26_k$(b);
  }
  function CircuitBuilder$times$lambda(a, b) {
    return a.times_vzd5vs_k$(b);
  }
  function CircuitBuilder$div$lambda(a, b) {
    return a.div_pipn7x_k$(b);
  }
  function CircuitBuilder() {
    this.graph_1 = ComputationGraph_init_$Create$();
    this.a$delegate_1 = new Var();
    this.b$delegate_1 = new Var();
    this.c$delegate_1 = new Var();
    this.d$delegate_1 = new Var();
    this.e$delegate_1 = new Var();
    this.f$delegate_1 = new Var();
    this.g$delegate_1 = new Var();
    this.h$delegate_1 = new Var();
    this.i$delegate_1 = new Var();
    this.j$delegate_1 = new Var();
    this.k$delegate_1 = new Var();
    this.l$delegate_1 = new Var();
  }
  protoOf(CircuitBuilder).set_graph_am1hge_k$ = function (_set____db54di) {
    this.graph_1 = _set____db54di;
  };
  protoOf(CircuitBuilder).get_graph_is3411_k$ = function () {
    return this.graph_1;
  };
  protoOf(CircuitBuilder).set_a_evf64r_k$ = function (_set____db54di) {
    return this.a$delegate_1.setValue_39l46n_k$(this, a$factory_0(), _set____db54di);
  };
  protoOf(CircuitBuilder).get_a_1mhr5k_k$ = function () {
    return this.a$delegate_1.getValue_fbnwi2_k$(this, a$factory_1());
  };
  protoOf(CircuitBuilder).set_b_2hcihi_k$ = function (_set____db54di) {
    return this.b$delegate_1.setValue_39l46n_k$(this, b$factory_0(), _set____db54di);
  };
  protoOf(CircuitBuilder).get_b_1mhr5l_k$ = function () {
    return this.b$delegate_1.getValue_fbnwi2_k$(this, b$factory_1());
  };
  protoOf(CircuitBuilder).set_c_ju473r_k$ = function (_set____db54di) {
    return this.c$delegate_1.setValue_39l46n_k$(this, c$factory_0(), _set____db54di);
  };
  protoOf(CircuitBuilder).get_c_1mhr5m_k$ = function () {
    return this.c$delegate_1.getValue_fbnwi2_k$(this, c$factory_1());
  };
  protoOf(CircuitBuilder).set_d_xu8694_k$ = function (_set____db54di) {
    return this.d$delegate_1.setValue_39l46n_k$(this, d$factory_0(), _set____db54di);
  };
  protoOf(CircuitBuilder).get_d_1mhr5n_k$ = function () {
    return this.d$delegate_1.getValue_fbnwi2_k$(this, d$factory_1());
  };
  protoOf(CircuitBuilder).set_e_ghghmv_k$ = function (_set____db54di) {
    return this.e$delegate_1.setValue_39l46n_k$(this, e$factory_0(), _set____db54di);
  };
  protoOf(CircuitBuilder).get_e_1mhr5o_k$ = function () {
    return this.e$delegate_1.getValue_fbnwi2_k$(this, e$factory_1());
  };
  protoOf(CircuitBuilder).set_f_vb6ze_k$ = function (_set____db54di) {
    return this.f$delegate_1.setValue_39l46n_k$(this, f$factory_0(), _set____db54di);
  };
  protoOf(CircuitBuilder).get_f_1mhr5p_k$ = function () {
    return this.f$delegate_1.getValue_fbnwi2_k$(this, f$factory_1());
  };
  protoOf(CircuitBuilder).set_g_i82vln_k$ = function (_set____db54di) {
    return this.g$delegate_1.setValue_39l46n_k$(this, g$factory_0(), _set____db54di);
  };
  protoOf(CircuitBuilder).get_g_1mhr5q_k$ = function () {
    return this.g$delegate_1.getValue_fbnwi2_k$(this, g$factory_1());
  };
  protoOf(CircuitBuilder).set_h_zg9hr8_k$ = function (_set____db54di) {
    return this.h$delegate_1.setValue_39l46n_k$(this, h$factory_0(), _set____db54di);
  };
  protoOf(CircuitBuilder).get_h_1mhr5r_k$ = function () {
    return this.h$delegate_1.getValue_fbnwi2_k$(this, h$factory_1());
  };
  protoOf(CircuitBuilder).set_i_i3ht4z_k$ = function (_set____db54di) {
    return this.i$delegate_1.setValue_39l46n_k$(this, i$factory_0(), _set____db54di);
  };
  protoOf(CircuitBuilder).get_i_1mhr5s_k$ = function () {
    return this.i$delegate_1.getValue_fbnwi2_k$(this, i$factory_1());
  };
  protoOf(CircuitBuilder).set_j_qq4iq_k$ = function (_set____db54di) {
    return this.j$delegate_1.setValue_39l46n_k$(this, j$factory_0(), _set____db54di);
  };
  protoOf(CircuitBuilder).get_j_1mhr5t_k$ = function () {
    return this.j$delegate_1.getValue_fbnwi2_k$(this, j$factory_1());
  };
  protoOf(CircuitBuilder).set_k_gm1k3j_k$ = function (_set____db54di) {
    return this.k$delegate_1.setValue_39l46n_k$(this, k$factory_0(), _set____db54di);
  };
  protoOf(CircuitBuilder).get_k_1mhr5u_k$ = function () {
    return this.k$delegate_1.getValue_fbnwi2_k$(this, k$factory_1());
  };
  protoOf(CircuitBuilder).set_l_xyt8ps_k$ = function (_set____db54di) {
    return this.l$delegate_1.setValue_39l46n_k$(this, l$factory_0(), _set____db54di);
  };
  protoOf(CircuitBuilder).get_l_1mhr5v_k$ = function () {
    return this.l$delegate_1.getValue_fbnwi2_k$(this, l$factory_1());
  };
  protoOf(CircuitBuilder).plus_vdcvzc_k$ = function (_this__u8e3s4, that) {
    return this.wrap_6jkdpa_k$(_this__u8e3s4, that, CircuitBuilder$plus$lambda);
  };
  protoOf(CircuitBuilder).minus_7hpu0y_k$ = function (_this__u8e3s4, that) {
    return this.wrap_6jkdpa_k$(_this__u8e3s4, that, CircuitBuilder$minus$lambda);
  };
  protoOf(CircuitBuilder).times_me9dv0_k$ = function (_this__u8e3s4, that) {
    return this.wrap_6jkdpa_k$(_this__u8e3s4, that, CircuitBuilder$times$lambda);
  };
  protoOf(CircuitBuilder).div_hcpezl_k$ = function (_this__u8e3s4, that) {
    return this.wrap_6jkdpa_k$(_this__u8e3s4, that, CircuitBuilder$div$lambda);
  };
  protoOf(CircuitBuilder).wrap_6jkdpa_k$ = function (left, right, op) {
    return op(Companion_getInstance_0().wrap_av5uoc_k$(left), Companion_getInstance_0().wrap_av5uoc_k$(right));
  };
  function Monad() {
  }
  function Dyad() {
  }
  function TrigFun() {
  }
  function Polyad() {
  }
  function a$factory() {
    return getPropertyCallableRef('a', 0, KProperty0, function () {
      return get_a();
    }, null);
  }
  function b$factory() {
    return getPropertyCallableRef('b', 0, KProperty0, function () {
      return get_b();
    }, null);
  }
  function c$factory() {
    return getPropertyCallableRef('c', 0, KProperty0, function () {
      return get_c();
    }, null);
  }
  function d$factory() {
    return getPropertyCallableRef('d', 0, KProperty0, function () {
      return get_d();
    }, null);
  }
  function e$factory() {
    return getPropertyCallableRef('e', 0, KProperty0, function () {
      return get_e();
    }, null);
  }
  function f$factory() {
    return getPropertyCallableRef('f', 0, KProperty0, function () {
      return get_f();
    }, null);
  }
  function g$factory() {
    return getPropertyCallableRef('g', 0, KProperty0, function () {
      return get_g();
    }, null);
  }
  function h$factory() {
    return getPropertyCallableRef('h', 0, KProperty0, function () {
      return get_h();
    }, null);
  }
  function i$factory() {
    return getPropertyCallableRef('i', 0, KProperty0, function () {
      return get_i();
    }, null);
  }
  function j$factory() {
    return getPropertyCallableRef('j', 0, KProperty0, function () {
      return get_j();
    }, null);
  }
  function k$factory() {
    return getPropertyCallableRef('k', 0, KProperty0, function () {
      return get_k();
    }, null);
  }
  function l$factory() {
    return getPropertyCallableRef('l', 0, KProperty0, function () {
      return get_l();
    }, null);
  }
  function a$factory_0() {
    return getPropertyCallableRef('a', 1, KMutableProperty1, function (receiver) {
      return receiver.get_a_1mhr5k_k$();
    }, function (receiver, value) {
      return receiver.set_a_evf64r_k$(value);
    });
  }
  function a$factory_1() {
    return getPropertyCallableRef('a', 1, KMutableProperty1, function (receiver) {
      return receiver.get_a_1mhr5k_k$();
    }, function (receiver, value) {
      return receiver.set_a_evf64r_k$(value);
    });
  }
  function b$factory_0() {
    return getPropertyCallableRef('b', 1, KMutableProperty1, function (receiver) {
      return receiver.get_b_1mhr5l_k$();
    }, function (receiver, value) {
      return receiver.set_b_2hcihi_k$(value);
    });
  }
  function b$factory_1() {
    return getPropertyCallableRef('b', 1, KMutableProperty1, function (receiver) {
      return receiver.get_b_1mhr5l_k$();
    }, function (receiver, value) {
      return receiver.set_b_2hcihi_k$(value);
    });
  }
  function c$factory_0() {
    return getPropertyCallableRef('c', 1, KMutableProperty1, function (receiver) {
      return receiver.get_c_1mhr5m_k$();
    }, function (receiver, value) {
      return receiver.set_c_ju473r_k$(value);
    });
  }
  function c$factory_1() {
    return getPropertyCallableRef('c', 1, KMutableProperty1, function (receiver) {
      return receiver.get_c_1mhr5m_k$();
    }, function (receiver, value) {
      return receiver.set_c_ju473r_k$(value);
    });
  }
  function d$factory_0() {
    return getPropertyCallableRef('d', 1, KMutableProperty1, function (receiver) {
      return receiver.get_d_1mhr5n_k$();
    }, function (receiver, value) {
      return receiver.set_d_xu8694_k$(value);
    });
  }
  function d$factory_1() {
    return getPropertyCallableRef('d', 1, KMutableProperty1, function (receiver) {
      return receiver.get_d_1mhr5n_k$();
    }, function (receiver, value) {
      return receiver.set_d_xu8694_k$(value);
    });
  }
  function e$factory_0() {
    return getPropertyCallableRef('e', 1, KMutableProperty1, function (receiver) {
      return receiver.get_e_1mhr5o_k$();
    }, function (receiver, value) {
      return receiver.set_e_ghghmv_k$(value);
    });
  }
  function e$factory_1() {
    return getPropertyCallableRef('e', 1, KMutableProperty1, function (receiver) {
      return receiver.get_e_1mhr5o_k$();
    }, function (receiver, value) {
      return receiver.set_e_ghghmv_k$(value);
    });
  }
  function f$factory_0() {
    return getPropertyCallableRef('f', 1, KMutableProperty1, function (receiver) {
      return receiver.get_f_1mhr5p_k$();
    }, function (receiver, value) {
      return receiver.set_f_vb6ze_k$(value);
    });
  }
  function f$factory_1() {
    return getPropertyCallableRef('f', 1, KMutableProperty1, function (receiver) {
      return receiver.get_f_1mhr5p_k$();
    }, function (receiver, value) {
      return receiver.set_f_vb6ze_k$(value);
    });
  }
  function g$factory_0() {
    return getPropertyCallableRef('g', 1, KMutableProperty1, function (receiver) {
      return receiver.get_g_1mhr5q_k$();
    }, function (receiver, value) {
      return receiver.set_g_i82vln_k$(value);
    });
  }
  function g$factory_1() {
    return getPropertyCallableRef('g', 1, KMutableProperty1, function (receiver) {
      return receiver.get_g_1mhr5q_k$();
    }, function (receiver, value) {
      return receiver.set_g_i82vln_k$(value);
    });
  }
  function h$factory_0() {
    return getPropertyCallableRef('h', 1, KMutableProperty1, function (receiver) {
      return receiver.get_h_1mhr5r_k$();
    }, function (receiver, value) {
      return receiver.set_h_zg9hr8_k$(value);
    });
  }
  function h$factory_1() {
    return getPropertyCallableRef('h', 1, KMutableProperty1, function (receiver) {
      return receiver.get_h_1mhr5r_k$();
    }, function (receiver, value) {
      return receiver.set_h_zg9hr8_k$(value);
    });
  }
  function i$factory_0() {
    return getPropertyCallableRef('i', 1, KMutableProperty1, function (receiver) {
      return receiver.get_i_1mhr5s_k$();
    }, function (receiver, value) {
      return receiver.set_i_i3ht4z_k$(value);
    });
  }
  function i$factory_1() {
    return getPropertyCallableRef('i', 1, KMutableProperty1, function (receiver) {
      return receiver.get_i_1mhr5s_k$();
    }, function (receiver, value) {
      return receiver.set_i_i3ht4z_k$(value);
    });
  }
  function j$factory_0() {
    return getPropertyCallableRef('j', 1, KMutableProperty1, function (receiver) {
      return receiver.get_j_1mhr5t_k$();
    }, function (receiver, value) {
      return receiver.set_j_qq4iq_k$(value);
    });
  }
  function j$factory_1() {
    return getPropertyCallableRef('j', 1, KMutableProperty1, function (receiver) {
      return receiver.get_j_1mhr5t_k$();
    }, function (receiver, value) {
      return receiver.set_j_qq4iq_k$(value);
    });
  }
  function k$factory_0() {
    return getPropertyCallableRef('k', 1, KMutableProperty1, function (receiver) {
      return receiver.get_k_1mhr5u_k$();
    }, function (receiver, value) {
      return receiver.set_k_gm1k3j_k$(value);
    });
  }
  function k$factory_1() {
    return getPropertyCallableRef('k', 1, KMutableProperty1, function (receiver) {
      return receiver.get_k_1mhr5u_k$();
    }, function (receiver, value) {
      return receiver.set_k_gm1k3j_k$(value);
    });
  }
  function l$factory_0() {
    return getPropertyCallableRef('l', 1, KMutableProperty1, function (receiver) {
      return receiver.get_l_1mhr5v_k$();
    }, function (receiver, value) {
      return receiver.set_l_xyt8ps_k$(value);
    });
  }
  function l$factory_1() {
    return getPropertyCallableRef('l', 1, KMutableProperty1, function (receiver) {
      return receiver.get_l_1mhr5v_k$();
    }, function (receiver, value) {
      return receiver.set_l_xyt8ps_k$(value);
    });
  }
  var properties_initialized_ComputationGraph_kt_5gmquh;
  function _init_properties_ComputationGraph_kt__t7b6nb() {
    if (!properties_initialized_ComputationGraph_kt_5gmquh) {
      properties_initialized_ComputationGraph_kt_5gmquh = true;
      a$delegate = new Var();
      b$delegate = new Var();
      c$delegate = new Var();
      d$delegate = new Var();
      e$delegate = new Var();
      f$delegate = new Var();
      g$delegate = new Var();
      h$delegate = new Var();
      i$delegate = new Var();
      j$delegate = new Var();
      k$delegate = new Var();
      l$delegate = new Var();
    }
  }
  function LabeledGraph$Companion$P$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    // Inline function 'kotlin.collections.component1' call
    var s = _name_for_destructuring_parameter_0__wldtmu.get_c1px32_k$(0);
    // Inline function 'kotlin.collections.component2' call
    var t = _name_for_destructuring_parameter_0__wldtmu.get_c1px32_k$(1);
    return LGVertex_init_$Create$(s, VOID, setOf(LGVertex_init_$Create$(t)));
  }
  function LabeledGraph_init_$Init$(vertices, $this) {
    LabeledGraph.call($this, toSet_0(vertices));
    return $this;
  }
  function LabeledGraph_init_$Create$(vertices) {
    return LabeledGraph_init_$Init$(vertices, objectCreate(protoOf(LabeledGraph)));
  }
  function LabeledGraph_init_$Init$_0(builder, $this) {
    // Inline function 'kotlin.also' call
    var this_0 = new LGBuilder();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.graphs.LabeledGraph.<init>.<anonymous>' call
    builder(this_0);
    LabeledGraph.call($this, this_0.mutGraph_1.reversed_4dh64e_k$());
    return $this;
  }
  function LabeledGraph_init_$Create$_0(builder) {
    return LabeledGraph_init_$Init$_0(builder, objectCreate(protoOf(LabeledGraph)));
  }
  function LabeledGraph_init_$Init$_1(graph, $this) {
    // Inline function 'kotlin.collections.fold' call
    // Inline function 'kotlin.text.split' call
    var this_0 = Regex_init_$Create$('\\s+').split_p7ck23_k$(graph, 0);
    var accumulator = new LabeledGraph();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.graphs.LabeledGraph.<init>.<anonymous>' call
      var acc = accumulator;
      var tmp = Companion_getInstance_1();
      // Inline function 'kotlin.collections.toTypedArray' call
      // Inline function 'kotlin.collections.map' call
      var this_1 = zipWithNext(toList_0(element));
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.graphs.LabeledGraph.<init>.<anonymous>.<anonymous>' call
        var a = item.component1_7eebsc_k$().value_1;
        var b = item.component2_7eebsb_k$().value_1;
        var tmp$ret$1 = cc(toString_0(a), toString_0(b));
        destination.add_utx5q5_k$(tmp$ret$1);
      }
      var tmp$ret$4 = copyToArray(destination);
      accumulator = acc.plus_ru5xrw_k$(tmp.P$default_3fwg8v_k$(tmp$ret$4.slice()));
    }
    var tmp$ret$6 = accumulator;
    LabeledGraph.call($this, tmp$ret$6);
    return $this;
  }
  function LabeledGraph_init_$Create$_1(graph) {
    return LabeledGraph_init_$Init$_1(graph, objectCreate(protoOf(LabeledGraph)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    LabeledGraph.call(this);
  }
  protoOf(Companion_0).P_v5d5l_k$ = function (adjList, p2v) {
    // Inline function 'kotlin.collections.fold' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(adjList.length);
    var inductionVariable = 0;
    var last = adjList.length;
    while (inductionVariable < last) {
      var item = adjList[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'ai.hypergraph.kaliningraph.graphs.Companion.P.<anonymous>' call
      var tmp$ret$0 = p2v(item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var accumulator = new LabeledGraph();
    var tmp0_iterator = destination.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.graphs.Companion.P.<anonymous>' call
      accumulator = accumulator.plus_ru5xrw_k$(get_graph_0(element));
    }
    var tmp$ret$4 = accumulator;
    return new LabeledGraph(tmp$ret$4);
  };
  protoOf(Companion_0).P$default_3fwg8v_k$ = function (adjList, p2v, $super) {
    var tmp;
    if (p2v === VOID) {
      tmp = LabeledGraph$Companion$P$lambda;
    } else {
      tmp = p2v;
    }
    p2v = tmp;
    return $super === VOID ? this.P_v5d5l_k$(adjList, p2v) : $super.P_v5d5l_k$.call(this, adjList, p2v);
  };
  protoOf(Companion_0).V_77re3y_k$ = function (out) {
    return this.V_5ojmx0_k$(out);
  };
  var Companion_instance_0;
  function Companion_getInstance_1() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function LabeledGraph$S$lambda(this$0) {
    return function (i, j) {
      return this$0.get_c1px32_k$(i).occupied_1;
    };
  }
  function LabeledGraph(vertices) {
    Companion_getInstance_1();
    var tmp;
    if (vertices === VOID) {
      // Inline function 'kotlin.collections.setOf' call
      tmp = emptySet();
    } else {
      tmp = vertices;
    }
    vertices = tmp;
    Graph.call(this, vertices);
    this.vertices_2 = vertices;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.accumuator_1 = LinkedHashSet_init_$Create$();
    this.description_1 = '';
  }
  protoOf(LabeledGraph).get_vertices_6eva2q_k$ = function () {
    return this.vertices_2;
  };
  protoOf(LabeledGraph).set_accumuator_bcpqik_k$ = function (_set____db54di) {
    this.accumuator_1 = _set____db54di;
  };
  protoOf(LabeledGraph).get_accumuator_k43qzp_k$ = function () {
    return this.accumuator_1;
  };
  protoOf(LabeledGraph).set_description_5tkket_k$ = function (_set____db54di) {
    this.description_1 = _set____db54di;
  };
  protoOf(LabeledGraph).get_description_emjre5_k$ = function () {
    return this.description_1;
  };
  protoOf(LabeledGraph).S_2b_k$ = function () {
    var tmp = this.get_vertices_6eva2q_k$().get_size_woubt6_k$();
    return BooleanMatrix_init_$Create$_1(tmp, 1, LabeledGraph$S$lambda(this));
  };
  protoOf(LabeledGraph).rewrite_pv38wv_k$ = function (substitution) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.graphs.LabeledGraph.rewrite.<anonymous>' call
    var it = replace(joinToString(toList_1(take(this.randomWalk$default_vd4xeu_k$(), 200)), ''), get_first(substitution), get_second(substitution));
    return LabeledGraph_init_$Create$_1(it);
  };
  protoOf(LabeledGraph).propagate_wwoms9_k$ = function () {
    // Inline function 'kotlin.collections.partition' call
    var this_0 = this.get_vertices_6eva2q_k$();
    var first = ArrayList_init_$Create$_0();
    var second = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.graphs.LabeledGraph.propagate.<anonymous>' call
      if (element.occupied_1) {
        first.add_utx5q5_k$(element);
      } else {
        second.add_utx5q5_k$(element);
      }
    }
    var tmp0_container = new Pair(first, second);
    var previousStates = tmp0_container.component1_7eebsc_k$();
    var unoccupied = tmp0_container.component2_7eebsb_k$();
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = previousStates.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.graphs.LabeledGraph.propagate.<anonymous>' call
      var list = get_neighbors(element_0);
      addAll(destination, list);
    }
    var nextStates = intersect(unoccupied, toSet_1(destination));
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_1 = previousStates.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_1 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.graphs.LabeledGraph.propagate.<anonymous>' call
      element_1.occupied_1 = false;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_2 = nextStates.iterator_jk1svi_k$();
    while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
      var element_2 = tmp0_iterator_2.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.graphs.LabeledGraph.propagate.<anonymous>' call
      element_2.occupied_1 = true;
      this.accumuator_1.add_utx5q5_k$(element_2.get_id_kntnx8_k$());
    }
  };
  protoOf(LabeledGraph).V_77re3y_k$ = function (out) {
    return this.V_5ojmx0_k$(out);
  };
  function ProtoEdge(source, label) {
    this.source_1 = source;
    this.label_1 = label;
  }
  protoOf(ProtoEdge).get_source_jl0x7o_k$ = function () {
    return this.source_1;
  };
  protoOf(ProtoEdge).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  function LGBuilder$minus$lambda($v, $this_minus) {
    return function (it) {
      return plus_0(get_outgoing($v), LabeledEdge_init_$Create$($v, $this_minus));
    };
  }
  function LGBuilder$plus$lambda($this_plus, $edge) {
    return function (it) {
      return plus_0(get_outgoing($this_plus), $edge);
    };
  }
  function LGBuilder() {
    this.mutGraph_1 = new LabeledGraph();
    this.a$delegate_1 = LGVertex_init_$Create$();
    this.b$delegate_1 = LGVertex_init_$Create$();
    this.c$delegate_1 = LGVertex_init_$Create$();
    this.d$delegate_1 = LGVertex_init_$Create$();
    this.e$delegate_1 = LGVertex_init_$Create$();
    this.f$delegate_1 = LGVertex_init_$Create$();
    this.g$delegate_1 = LGVertex_init_$Create$();
    this.h$delegate_1 = LGVertex_init_$Create$();
    this.i$delegate_1 = LGVertex_init_$Create$();
    this.j$delegate_1 = LGVertex_init_$Create$();
    this.k$delegate_1 = LGVertex_init_$Create$();
    this.l$delegate_1 = LGVertex_init_$Create$();
    this.m$delegate_1 = LGVertex_init_$Create$();
    this.n$delegate_1 = LGVertex_init_$Create$();
    this.o$delegate_1 = LGVertex_init_$Create$();
    this.p$delegate_1 = LGVertex_init_$Create$();
    this.q$delegate_1 = LGVertex_init_$Create$();
    this.r$delegate_1 = LGVertex_init_$Create$();
    this.s$delegate_1 = LGVertex_init_$Create$();
    this.t$delegate_1 = LGVertex_init_$Create$();
    this.u$delegate_1 = LGVertex_init_$Create$();
    this.v$delegate_1 = LGVertex_init_$Create$();
    this.w$delegate_1 = LGVertex_init_$Create$();
    this.x$delegate_1 = LGVertex_init_$Create$();
    this.y$delegate_1 = LGVertex_init_$Create$();
    this.z$delegate_1 = LGVertex_init_$Create$();
  }
  protoOf(LGBuilder).set_mutGraph_nac8hy_k$ = function (_set____db54di) {
    this.mutGraph_1 = _set____db54di;
  };
  protoOf(LGBuilder).get_mutGraph_hvw85x_k$ = function () {
    return this.mutGraph_1;
  };
  protoOf(LGBuilder).get_a_1mhr5k_k$ = function () {
    return this.a$delegate_1.getValue_fbnwi2_k$(this, a$factory_2());
  };
  protoOf(LGBuilder).get_b_1mhr5l_k$ = function () {
    return this.b$delegate_1.getValue_fbnwi2_k$(this, b$factory_2());
  };
  protoOf(LGBuilder).get_c_1mhr5m_k$ = function () {
    return this.c$delegate_1.getValue_fbnwi2_k$(this, c$factory_2());
  };
  protoOf(LGBuilder).get_d_1mhr5n_k$ = function () {
    return this.d$delegate_1.getValue_fbnwi2_k$(this, d$factory_2());
  };
  protoOf(LGBuilder).get_e_1mhr5o_k$ = function () {
    return this.e$delegate_1.getValue_fbnwi2_k$(this, e$factory_2());
  };
  protoOf(LGBuilder).get_f_1mhr5p_k$ = function () {
    return this.f$delegate_1.getValue_fbnwi2_k$(this, f$factory_2());
  };
  protoOf(LGBuilder).get_g_1mhr5q_k$ = function () {
    return this.g$delegate_1.getValue_fbnwi2_k$(this, g$factory_2());
  };
  protoOf(LGBuilder).get_h_1mhr5r_k$ = function () {
    return this.h$delegate_1.getValue_fbnwi2_k$(this, h$factory_2());
  };
  protoOf(LGBuilder).get_i_1mhr5s_k$ = function () {
    return this.i$delegate_1.getValue_fbnwi2_k$(this, i$factory_2());
  };
  protoOf(LGBuilder).get_j_1mhr5t_k$ = function () {
    return this.j$delegate_1.getValue_fbnwi2_k$(this, j$factory_2());
  };
  protoOf(LGBuilder).get_k_1mhr5u_k$ = function () {
    return this.k$delegate_1.getValue_fbnwi2_k$(this, k$factory_2());
  };
  protoOf(LGBuilder).get_l_1mhr5v_k$ = function () {
    return this.l$delegate_1.getValue_fbnwi2_k$(this, l$factory_2());
  };
  protoOf(LGBuilder).get_m_1mhr5w_k$ = function () {
    return this.m$delegate_1.getValue_fbnwi2_k$(this, m$factory());
  };
  protoOf(LGBuilder).get_n_1mhr5x_k$ = function () {
    return this.n$delegate_1.getValue_fbnwi2_k$(this, n$factory());
  };
  protoOf(LGBuilder).get_o_1mhr5y_k$ = function () {
    return this.o$delegate_1.getValue_fbnwi2_k$(this, o$factory());
  };
  protoOf(LGBuilder).get_p_1mhr5z_k$ = function () {
    return this.p$delegate_1.getValue_fbnwi2_k$(this, p$factory());
  };
  protoOf(LGBuilder).get_q_1mhr60_k$ = function () {
    return this.q$delegate_1.getValue_fbnwi2_k$(this, q$factory());
  };
  protoOf(LGBuilder).get_r_1mhr61_k$ = function () {
    return this.r$delegate_1.getValue_fbnwi2_k$(this, r$factory());
  };
  protoOf(LGBuilder).get_s_1mhr62_k$ = function () {
    return this.s$delegate_1.getValue_fbnwi2_k$(this, s$factory());
  };
  protoOf(LGBuilder).get_t_1mhr63_k$ = function () {
    return this.t$delegate_1.getValue_fbnwi2_k$(this, t$factory());
  };
  protoOf(LGBuilder).get_u_1mhr64_k$ = function () {
    return this.u$delegate_1.getValue_fbnwi2_k$(this, u$factory());
  };
  protoOf(LGBuilder).get_v_1mhr65_k$ = function () {
    return this.v$delegate_1.getValue_fbnwi2_k$(this, v$factory());
  };
  protoOf(LGBuilder).get_w_1mhr66_k$ = function () {
    return this.w$delegate_1.getValue_fbnwi2_k$(this, w$factory());
  };
  protoOf(LGBuilder).get_x_1mhr67_k$ = function () {
    return this.x$delegate_1.getValue_fbnwi2_k$(this, x$factory());
  };
  protoOf(LGBuilder).get_y_1mhr68_k$ = function () {
    return this.y$delegate_1.getValue_fbnwi2_k$(this, y$factory());
  };
  protoOf(LGBuilder).get_z_1mhr69_k$ = function () {
    return this.z$delegate_1.getValue_fbnwi2_k$(this, z$factory());
  };
  protoOf(LGBuilder).minus_v58iu6_k$ = function (_this__u8e3s4, v) {
    // Inline function 'kotlin.also' call
    var tmp = _this__u8e3s4.get_V0_kntof1_k$();
    var this_0 = tmp(v, LGBuilder$minus$lambda(v, _this__u8e3s4));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.graphs.LGBuilder.minus.<anonymous>' call
    this.mutGraph_1 = this.mutGraph_1.plus_ru5xrw_k$(get_graph_0(this_0));
    return this_0;
  };
  protoOf(LGBuilder).minus_yydgvt_k$ = function (_this__u8e3s4, v) {
    return this.minus_v58iu6_k$(_this__u8e3s4, LGVertex_init_$Create$(v));
  };
  protoOf(LGBuilder).minus_l7w0l_k$ = function (_this__u8e3s4, v) {
    return this.minus_v58iu6_k$(LGVertex_init_$Create$(_this__u8e3s4), v);
  };
  protoOf(LGBuilder).minus_ej5072_k$ = function (_this__u8e3s4, v) {
    return this.minus_v58iu6_k$(LGVertex_init_$Create$(_this__u8e3s4), LGVertex_init_$Create$(v));
  };
  protoOf(LGBuilder).set_ki5vw6_k$ = function (_this__u8e3s4, s, v) {
    return this.minus_3zm8az_k$(new ProtoEdge(LGVertex_init_$Create$(_this__u8e3s4), s), LGVertex_init_$Create$(v));
  };
  protoOf(LGBuilder).plus_p592rs_k$ = function (_this__u8e3s4, edge) {
    // Inline function 'kotlin.also' call
    var tmp = _this__u8e3s4.get_V0_kntof1_k$();
    var this_0 = tmp(_this__u8e3s4, LGBuilder$plus$lambda(_this__u8e3s4, edge));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.graphs.LGBuilder.plus.<anonymous>' call
    this.mutGraph_1 = this.mutGraph_1.plus_ru5xrw_k$(get_graph_0(this_0));
    return this_0;
  };
  protoOf(LGBuilder).plus_tc3ud4_k$ = function (_this__u8e3s4, vertex) {
    // Inline function 'kotlin.also' call
    var this_0 = get_graph_0(_this__u8e3s4).plus_ru5xrw_k$(get_graph_0(vertex));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.graphs.LGBuilder.plus.<anonymous>' call
    this.mutGraph_1 = this.mutGraph_1.plus_ru5xrw_k$(this_0);
    return this_0;
  };
  protoOf(LGBuilder).minus_3zm8az_k$ = function (_this__u8e3s4, target) {
    return this.plus_p592rs_k$(target, new LabeledEdge(target, _this__u8e3s4.source_1, _this__u8e3s4.label_1));
  };
  function LGVertex_init_$Init$(label, id, out, $this) {
    label = label === VOID ? randomString() : label;
    id = id === VOID ? label : id;
    out = out === VOID ? emptySet() : out;
    LGVertex.call($this, label, id, LGVertex$_init_$lambda_777syc(out));
    return $this;
  }
  function LGVertex_init_$Create$(label, id, out) {
    return LGVertex_init_$Init$(label, id, out, objectCreate(protoOf(LGVertex)));
  }
  function LGVertex_init_$Init$_0(lgv, edgeMap, $this) {
    LGVertex.call($this, lgv.get_label_iuj8p7_k$(), lgv.get_id_kntnx8_k$(), edgeMap);
    return $this;
  }
  function LGVertex_init_$Create$_0(lgv, edgeMap) {
    return LGVertex_init_$Init$_0(lgv, edgeMap, objectCreate(protoOf(LGVertex)));
  }
  function LGVertex$_init_$lambda_777syc($out) {
    return function (s) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = $out;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.graphs.LGVertex.<init>.<anonymous>.<anonymous>' call
        var tmp$ret$0 = LabeledEdge_init_$Create$(s, item);
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      return toSet_1(destination);
    };
  }
  function LGVertex(label, id, edgeMap) {
    label = label === VOID ? '' : label;
    id = id === VOID ? label : id;
    Vertex.call(this, id);
    this.label_1 = label;
    this.id_2 = id;
    this.edgeMap_1 = edgeMap;
    this.occupied_1 = false;
  }
  protoOf(LGVertex).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(LGVertex).get_id_kntnx8_k$ = function () {
    return this.id_2;
  };
  protoOf(LGVertex).get_edgeMap_tzvf62_k$ = function () {
    return this.edgeMap_1;
  };
  protoOf(LGVertex).set_occupied_z6tumy_k$ = function (_set____db54di) {
    this.occupied_1 = _set____db54di;
  };
  protoOf(LGVertex).get_occupied_ioyduh_k$ = function () {
    return this.occupied_1;
  };
  protoOf(LGVertex).encode_lh9aei_k$ = function () {
    return vectorize(this.get_label_iuj8p7_k$());
  };
  protoOf(LGVertex).getValue_fbnwi2_k$ = function (a, prop) {
    return LGVertex_init_$Create$(prop.callableName);
  };
  protoOf(LGVertex).toString = function () {
    return this.get_label_iuj8p7_k$();
  };
  protoOf(LGVertex).V_77re3y_k$ = function (out) {
    return this.V_5ojmx0_k$(out);
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
    this.source_2 = source;
    this.target_2 = target;
    this.label_1 = label;
  }
  protoOf(LabeledEdge).get_source_jl0x7o_k$ = function () {
    return this.source_2;
  };
  protoOf(LabeledEdge).get_target_juba8q_k$ = function () {
    return this.target_2;
  };
  protoOf(LabeledEdge).get_label_iuj8p7_k$ = function () {
    return this.label_1;
  };
  protoOf(LabeledEdge).V_77re3y_k$ = function (out) {
    return this.V_5ojmx0_k$(out);
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
  function a$factory_2() {
    return getPropertyCallableRef('a', 1, KProperty1, function (receiver) {
      return receiver.get_a_1mhr5k_k$();
    }, null);
  }
  function b$factory_2() {
    return getPropertyCallableRef('b', 1, KProperty1, function (receiver) {
      return receiver.get_b_1mhr5l_k$();
    }, null);
  }
  function c$factory_2() {
    return getPropertyCallableRef('c', 1, KProperty1, function (receiver) {
      return receiver.get_c_1mhr5m_k$();
    }, null);
  }
  function d$factory_2() {
    return getPropertyCallableRef('d', 1, KProperty1, function (receiver) {
      return receiver.get_d_1mhr5n_k$();
    }, null);
  }
  function e$factory_2() {
    return getPropertyCallableRef('e', 1, KProperty1, function (receiver) {
      return receiver.get_e_1mhr5o_k$();
    }, null);
  }
  function f$factory_2() {
    return getPropertyCallableRef('f', 1, KProperty1, function (receiver) {
      return receiver.get_f_1mhr5p_k$();
    }, null);
  }
  function g$factory_2() {
    return getPropertyCallableRef('g', 1, KProperty1, function (receiver) {
      return receiver.get_g_1mhr5q_k$();
    }, null);
  }
  function h$factory_2() {
    return getPropertyCallableRef('h', 1, KProperty1, function (receiver) {
      return receiver.get_h_1mhr5r_k$();
    }, null);
  }
  function i$factory_2() {
    return getPropertyCallableRef('i', 1, KProperty1, function (receiver) {
      return receiver.get_i_1mhr5s_k$();
    }, null);
  }
  function j$factory_2() {
    return getPropertyCallableRef('j', 1, KProperty1, function (receiver) {
      return receiver.get_j_1mhr5t_k$();
    }, null);
  }
  function k$factory_2() {
    return getPropertyCallableRef('k', 1, KProperty1, function (receiver) {
      return receiver.get_k_1mhr5u_k$();
    }, null);
  }
  function l$factory_2() {
    return getPropertyCallableRef('l', 1, KProperty1, function (receiver) {
      return receiver.get_l_1mhr5v_k$();
    }, null);
  }
  function m$factory() {
    return getPropertyCallableRef('m', 1, KProperty1, function (receiver) {
      return receiver.get_m_1mhr5w_k$();
    }, null);
  }
  function n$factory() {
    return getPropertyCallableRef('n', 1, KProperty1, function (receiver) {
      return receiver.get_n_1mhr5x_k$();
    }, null);
  }
  function o$factory() {
    return getPropertyCallableRef('o', 1, KProperty1, function (receiver) {
      return receiver.get_o_1mhr5y_k$();
    }, null);
  }
  function p$factory() {
    return getPropertyCallableRef('p', 1, KProperty1, function (receiver) {
      return receiver.get_p_1mhr5z_k$();
    }, null);
  }
  function q$factory() {
    return getPropertyCallableRef('q', 1, KProperty1, function (receiver) {
      return receiver.get_q_1mhr60_k$();
    }, null);
  }
  function r$factory() {
    return getPropertyCallableRef('r', 1, KProperty1, function (receiver) {
      return receiver.get_r_1mhr61_k$();
    }, null);
  }
  function s$factory() {
    return getPropertyCallableRef('s', 1, KProperty1, function (receiver) {
      return receiver.get_s_1mhr62_k$();
    }, null);
  }
  function t$factory() {
    return getPropertyCallableRef('t', 1, KProperty1, function (receiver) {
      return receiver.get_t_1mhr63_k$();
    }, null);
  }
  function u$factory() {
    return getPropertyCallableRef('u', 1, KProperty1, function (receiver) {
      return receiver.get_u_1mhr64_k$();
    }, null);
  }
  function v$factory() {
    return getPropertyCallableRef('v', 1, KProperty1, function (receiver) {
      return receiver.get_v_1mhr65_k$();
    }, null);
  }
  function w$factory() {
    return getPropertyCallableRef('w', 1, KProperty1, function (receiver) {
      return receiver.get_w_1mhr66_k$();
    }, null);
  }
  function x$factory() {
    return getPropertyCallableRef('x', 1, KProperty1, function (receiver) {
      return receiver.get_x_1mhr67_k$();
    }, null);
  }
  function y$factory() {
    return getPropertyCallableRef('y', 1, KProperty1, function (receiver) {
      return receiver.get_y_1mhr68_k$();
    }, null);
  }
  function z$factory() {
    return getPropertyCallableRef('z', 1, KProperty1, function (receiver) {
      return receiver.get_z_1mhr69_k$();
    }, null);
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
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return joinToString(destination, '');
  }
  function get_parikhBounds(_this__u8e3s4) {
    _init_properties_BarHillel_kt__q2uf55();
    return parikhBounds$delegate.getValue_4u4kqi_k$(_this__u8e3s4, parikhBounds$factory());
  }
  var parikhBounds$delegate;
  function parikhBounds$delegate$lambda($this$cache) {
    _init_properties_BarHillel_kt__q2uf55();
    var epsFree = get_noEpsilonOrNonterminalStubs($this$cache);
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var list = ArrayList_init_$Create$(20);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < 20)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'ai.hypergraph.kaliningraph.parsing.parikhBounds$delegate.<anonymous>.<anonymous>' call
        list.add_utx5q5_k$('_');
      }
       while (inductionVariable < 20);
    var temp = list;
    // Inline function 'kotlin.collections.associateWith' call
    var this_0 = get_nonterminals(epsFree);
    var result = LinkedHashMap_init_$Create$_1(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
    // Inline function 'kotlin.collections.associateWithTo' call
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.parikhBounds$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$3 = numberRangeToNumber(-1, -1);
      result.put_4fpzoq_k$(element, tmp$ret$3);
    }
    var map = toMutableMap(result);
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_1 = initPForestMat(epsFree, temp).seekFixpoint$default_gxrghs_k$().get_diagonals_sbpbg5_k$();
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var index_0 = 0;
    var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.parikhBounds$delegate.<anonymous>.<anonymous>' call
      var tmp1 = index_0;
      index_0 = tmp1 + 1 | 0;
      var index_1 = checkIndexOverflow(tmp1);
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'kotlin.collections.flatMapTo' call
      var destination_0 = ArrayList_init_$Create$_0();
      var tmp0_iterator_1 = item.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_1.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.parikhBounds$delegate.<anonymous>.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.collections.mapTo' call
        var destination_1 = ArrayList_init_$Create$(element_0.get_size_woubt6_k$());
        // Inline function 'kotlin.collections.iterator' call
        var tmp0_iterator_2 = element_0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
        while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
          var item_0 = tmp0_iterator_2.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.parikhBounds$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$7 = item_0.get_key_18j28a_k$();
          destination_1.add_utx5q5_k$(tmp$ret$7);
        }
        var list_0 = destination_1;
        addAll(destination_0, list_0);
      }
      var nonterminalsAtLevel = destination_0;
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_3 = nonterminalsAtLevel.iterator_jk1svi_k$();
      while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
        var element_1 = tmp0_iterator_3.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.parikhBounds$delegate.<anonymous>.<anonymous>.<anonymous>' call
        var tmp0_safe_receiver = map.get_wei43m_k$(element_1);
        var tmp;
        if (tmp0_safe_receiver == null) {
          tmp = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'ai.hypergraph.kaliningraph.parsing.parikhBounds$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
          tmp = numberRangeToNumber(tmp0_safe_receiver.get_first_irdx8n_k$() < 0 ? index_1 + 1 | 0 : tmp0_safe_receiver.get_first_irdx8n_k$(), index_1 + 1 | 0);
        }
        var tmp1_safe_receiver = tmp;
        if (tmp1_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          map.put_4fpzoq_k$(element_1, tmp1_safe_receiver);
        }
      }
      destination.add_utx5q5_k$(Unit_getInstance());
    }
    return map;
  }
  function parikhBounds$factory() {
    return getPropertyCallableRef('parikhBounds', 1, KProperty1, function (receiver) {
      return get_parikhBounds(receiver);
    }, null);
  }
  var properties_initialized_BarHillel_kt_11kppn;
  function _init_properties_BarHillel_kt__q2uf55() {
    if (!properties_initialized_BarHillel_kt_11kppn) {
      properties_initialized_BarHillel_kt_11kppn = true;
      parikhBounds$delegate = cache_0(VOID, parikhBounds$delegate$lambda);
    }
  }
  function get_language(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return language$delegate.getValue_4u4kqi_k$(_this__u8e3s4, language$factory());
  }
  var language$delegate;
  function get_delimiters(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return delimiters$delegate.getValue_4u4kqi_k$(_this__u8e3s4, delimiters$factory());
  }
  var delimiters$delegate;
  function get_nonterminals(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return nonterminals$delegate.getValue_4u4kqi_k$(_this__u8e3s4, nonterminals$factory());
  }
  var nonterminals$delegate;
  function get_symbols(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return symbols$delegate.getValue_4u4kqi_k$(_this__u8e3s4, symbols$factory());
  }
  var symbols$delegate;
  function get_terminals(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return terminals$delegate.getValue_4u4kqi_k$(_this__u8e3s4, terminals$factory());
  }
  var terminals$delegate;
  function get_terminalUnitProductions(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return terminalUnitProductions$delegate.getValue_4u4kqi_k$(_this__u8e3s4, terminalUnitProductions$factory());
  }
  var terminalUnitProductions$delegate;
  function get_unitProductions(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return unitProductions$delegate.getValue_4u4kqi_k$(_this__u8e3s4, unitProductions$factory());
  }
  var unitProductions$delegate;
  function get_nonterminalProductions(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return nonterminalProductions$delegate.getValue_4u4kqi_k$(_this__u8e3s4, nonterminalProductions$factory());
  }
  var nonterminalProductions$delegate;
  function get_unitNonterminals(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return unitNonterminals$delegate.getValue_4u4kqi_k$(_this__u8e3s4, unitNonterminals$factory());
  }
  var unitNonterminals$delegate;
  function get_bimap(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return bimap$delegate.getValue_4u4kqi_k$(_this__u8e3s4, bimap$factory());
  }
  var bimap$delegate;
  function get_tmap(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return tmap$delegate.getValue_4u4kqi_k$(_this__u8e3s4, tmap$factory());
  }
  var tmap$delegate;
  function get_vindex(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return vindex$delegate.getValue_4u4kqi_k$(_this__u8e3s4, vindex$factory());
  }
  var vindex$delegate;
  function get_bindex(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return bindex$delegate.getValue_4u4kqi_k$(_this__u8e3s4, bindex$factory());
  }
  var bindex$delegate;
  function get_normalForm(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return normalForm$delegate.getValue_4u4kqi_k$(_this__u8e3s4, normalForm$factory());
  }
  var normalForm$delegate;
  function get_depGraph(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return depGraph$delegate.getValue_4u4kqi_k$(_this__u8e3s4, depGraph$factory());
  }
  var depGraph$delegate;
  function get_revDepGraph(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return revDepGraph$delegate.getValue_4u4kqi_k$(_this__u8e3s4, revDepGraph$factory());
  }
  var revDepGraph$delegate;
  function get_originalForm(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return originalForm$delegate.getValue_4u4kqi_k$(_this__u8e3s4, originalForm$factory());
  }
  var originalForm$delegate;
  function get_nonparametricForm(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return nonparametricForm$delegate.getValue_4u4kqi_k$(_this__u8e3s4, nonparametricForm$factory());
  }
  var nonparametricForm$delegate;
  function get_reachability(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return reachability$delegate.getValue_4u4kqi_k$(_this__u8e3s4, reachability$factory());
  }
  var reachability$delegate;
  function get_unitReachability(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return unitReachability$delegate.getValue_4u4kqi_k$(_this__u8e3s4, unitReachability$factory());
  }
  var unitReachability$delegate;
  function get_noNonterminalStubs(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return noNonterminalStubs$delegate.getValue_4u4kqi_k$(_this__u8e3s4, noNonterminalStubs$factory());
  }
  var noNonterminalStubs$delegate;
  function get_noEpsilonOrNonterminalStubs(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return noEpsilonOrNonterminalStubs$delegate.getValue_4u4kqi_k$(_this__u8e3s4, noEpsilonOrNonterminalStubs$factory());
  }
  var noEpsilonOrNonterminalStubs$delegate;
  function get_parikhFPCache(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    parikhFPCache$delegate.getValue_4u4kqi_k$(_this__u8e3s4, parikhFPCache$factory());
    return throwKotlinNothingValueException();
  }
  var parikhFPCache$delegate;
  function get_generators(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return generators$delegate.getValue_4u4kqi_k$(_this__u8e3s4, generators$factory());
  }
  var generators$delegate;
  function get_nonterminalFormulas(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return nonterminalFormulas$delegate.getValue_4u4kqi_k$(_this__u8e3s4, nonterminalFormulas$factory());
  }
  var nonterminalFormulas$delegate;
  function get_pruneTreelikeNonterminals(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return pruneTreelikeNonterminals$delegate.getValue_4u4kqi_k$(_this__u8e3s4, pruneTreelikeNonterminals$factory());
  }
  var pruneTreelikeNonterminals$delegate;
  function get_joinMap(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return joinMap$delegate.getValue_4u4kqi_k$(_this__u8e3s4, joinMap$factory());
  }
  var joinMap$delegate;
  function get_LHS(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return _this__u8e3s4.get_first_irdx8n_k$();
  }
  function get_RHS(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.<get-RHS>.<anonymous>' call
    var it = _this__u8e3s4.get_second_jf7fjx_k$();
    var tmp;
    if (it.get_size_woubt6_k$() === 1) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(it, 10));
      var tmp0_iterator = it.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        var tmp$ret$0 = _get_RHS_$stripEscapeChars_o9u6es(item);
        destination.add_utx5q5_k$(tmp$ret$0);
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
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.L2RHS$delegate.<anonymous>.<anonymous>' call
        var key = get_LHS(element);
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.get_wei43m_k$(key);
        var tmp;
        if (value == null) {
          // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
          var answer = ArrayList_init_$Create$_0();
          destination.put_4fpzoq_k$(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.L2RHS$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$3 = get_RHS(element);
        list.add_utx5q5_k$(tmp$ret$3);
      }
      // Inline function 'kotlin.collections.mapValuesTo' call
      var destination_0 = LinkedHashMap_init_$Create$_1(mapCapacity(destination.get_size_woubt6_k$()));
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_iterator_0 = destination.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
        var tmp_0 = element_0.get_key_18j28a_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.L2RHS$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$7 = toSet_1(element_0.get_value_j01efc_k$());
        destination_0.put_4fpzoq_k$(tmp_0, tmp$ret$7);
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
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.R2LHS$delegate.<anonymous>.<anonymous>' call
        var key = get_RHS(element);
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.get_wei43m_k$(key);
        var tmp;
        if (value == null) {
          // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
          var answer = ArrayList_init_$Create$_0();
          destination.put_4fpzoq_k$(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.R2LHS$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$3 = get_LHS(element);
        list.add_utx5q5_k$(tmp$ret$3);
      }
      // Inline function 'kotlin.collections.mapValuesTo' call
      var destination_0 = LinkedHashMap_init_$Create$_1(mapCapacity(destination.get_size_woubt6_k$()));
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_iterator_0 = destination.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
        var tmp_0 = element_0.get_key_18j28a_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.R2LHS$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$7 = toSet_1(element_0.get_value_j01efc_k$());
        destination_0.put_4fpzoq_k$(tmp_0, tmp$ret$7);
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
      var tmp0_iterator = $cfg.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
        var l = tmp1_loop_parameter.component1_7eebsc_k$();
        var r = tmp1_loop_parameter.component2_7eebsb_k$();
        var tmp2_iterator = r.iterator_jk1svi_k$();
        while (tmp2_iterator.hasNext_bitz1p_k$()) {
          var symbol = tmp2_iterator.next_20eer_k$();
          // Inline function 'kotlin.collections.getOrPut' call
          var value = this_0.get_wei43m_k$(symbol);
          var tmp;
          if (value == null) {
            // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.TDEPS$delegate.<anonymous>.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.collections.mutableSetOf' call
            var answer = LinkedHashSet_init_$Create$();
            this_0.put_4fpzoq_k$(symbol, answer);
            tmp = answer;
          } else {
            tmp = value;
          }
          tmp.add_utx5q5_k$(l);
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
      var tmp0_iterator = $cfg.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var tmp1_loop_parameter = tmp0_iterator.next_20eer_k$();
        var l = tmp1_loop_parameter.component1_7eebsc_k$();
        var r = tmp1_loop_parameter.component2_7eebsb_k$();
        var tmp2_iterator = r.iterator_jk1svi_k$();
        while (tmp2_iterator.hasNext_bitz1p_k$()) {
          var symbol = tmp2_iterator.next_20eer_k$();
          // Inline function 'kotlin.collections.getOrPut' call
          var value = this_0.get_wei43m_k$(l);
          var tmp;
          if (value == null) {
            // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.NDEPS$delegate.<anonymous>.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.collections.mutableSetOf' call
            var answer = LinkedHashSet_init_$Create$();
            this_0.put_4fpzoq_k$(l, answer);
            tmp = answer;
          } else {
            tmp = value;
          }
          tmp.add_utx5q5_k$(symbol);
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
      var this_0 = this$0.get_R2LHS_ife3v2_k$();
      var destination = LinkedHashMap_init_$Create$();
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator = this_0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.TRIPL$delegate.<anonymous>.<anonymous>' call
        if (element.get_key_18j28a_k$().get_size_woubt6_k$() === 2) {
          destination.put_4fpzoq_k$(element.get_key_18j28a_k$(), element.get_value_j01efc_k$());
        }
      }
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(destination.get_size_woubt6_k$());
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_0 = destination.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.TRIPL$delegate.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.map' call
        var this_1 = item.get_value_j01efc_k$();
        // Inline function 'kotlin.collections.mapTo' call
        var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
        var tmp0_iterator_1 = this_1.iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var item_0 = tmp0_iterator_1.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.TRIPL$delegate.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$5 = to_1(to(item_0, item.get_key_18j28a_k$().get_c1px32_k$(0)), item.get_key_18j28a_k$().get_c1px32_k$(1));
          destination_1.add_utx5q5_k$(tmp$ret$5);
        }
        destination_0.add_utx5q5_k$(destination_1);
      }
      return flatten(destination_0);
    };
  }
  function BiMap$X2WZ$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.collections.mapValues' call
      // Inline function 'kotlin.collections.groupBy' call
      // Inline function 'kotlin.collections.groupByTo' call
      var this_0 = this$0.get_TRIPL_ih22la_k$();
      var destination = LinkedHashMap_init_$Create$();
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.X2WZ$delegate.<anonymous>.<anonymous>' call
        var key = element.get_second_jf7fjx_k$();
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.get_wei43m_k$(key);
        var tmp;
        if (value == null) {
          // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
          var answer = ArrayList_init_$Create$_0();
          destination.put_4fpzoq_k$(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        list.add_utx5q5_k$(element);
      }
      // Inline function 'kotlin.collections.mapValuesTo' call
      var destination_0 = LinkedHashMap_init_$Create$_1(mapCapacity(destination.get_size_woubt6_k$()));
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_iterator_0 = destination.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
        var tmp_0 = element_0.get_key_18j28a_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.X2WZ$delegate.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.map' call
        var this_1 = element_0.get_value_j01efc_k$();
        // Inline function 'kotlin.collections.mapTo' call
        var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
        var tmp0_iterator_1 = this_1.iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator_1.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.X2WZ$delegate.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$6 = to_1(to(item.get_first_irdx8n_k$(), item.get_second_jf7fjx_k$()), item.get_third_iz27um_k$());
          destination_1.add_utx5q5_k$(tmp$ret$6);
        }
        destination_0.put_4fpzoq_k$(tmp_0, destination_1);
      }
      return destination_0;
    };
  }
  function BiMap$UNITS$delegate$lambda$lambda($cfg) {
    return function (it) {
      return get_RHS(it).get_size_woubt6_k$() === 1 ? !get_nonterminals($cfg).contains_aljjnj_k$(get_RHS(it).get_c1px32_k$(0)) : false;
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
      var tmp0_iterator = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.UNITS$delegate.<anonymous>.<anonymous>' call
        var key = get_LHS(element);
        // Inline function 'kotlin.collections.getOrPut' call
        var value = destination.get_wei43m_k$(key);
        var tmp;
        if (value == null) {
          // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
          var answer = ArrayList_init_$Create$_0();
          destination.put_4fpzoq_k$(key, answer);
          tmp = answer;
        } else {
          tmp = value;
        }
        var list = tmp;
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.UNITS$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$5 = get_RHS(element).get_c1px32_k$(0);
        list.add_utx5q5_k$(tmp$ret$5);
      }
      // Inline function 'kotlin.collections.mapValuesTo' call
      var destination_0 = LinkedHashMap_init_$Create$_1(mapCapacity(destination.get_size_woubt6_k$()));
      // Inline function 'kotlin.collections.associateByTo' call
      var tmp0_iterator_0 = destination.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
        var tmp_0 = element_0.get_key_18j28a_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.BiMap.UNITS$delegate.<anonymous>.<anonymous>' call
        var tmp$ret$9 = toSet_1(element_0.get_value_j01efc_k$());
        destination_0.put_4fpzoq_k$(tmp_0, tmp$ret$9);
      }
      return destination_0;
    };
  }
  function BiMap(cfg) {
    var tmp = this;
    tmp.L2RHS$delegate_1 = lazy(BiMap$L2RHS$delegate$lambda(cfg));
    var tmp_0 = this;
    tmp_0.R2LHS$delegate_1 = lazy(BiMap$R2LHS$delegate$lambda(cfg));
    var tmp_1 = this;
    tmp_1.TDEPS$delegate_1 = lazy(BiMap$TDEPS$delegate$lambda(cfg));
    var tmp_2 = this;
    tmp_2.NDEPS$delegate_1 = lazy(BiMap$NDEPS$delegate$lambda(cfg));
    var tmp_3 = this;
    tmp_3.TRIPL$delegate_1 = lazy(BiMap$TRIPL$delegate$lambda(this));
    var tmp_4 = this;
    tmp_4.X2WZ$delegate_1 = lazy(BiMap$X2WZ$delegate$lambda(this));
    var tmp_5 = this;
    tmp_5.UNITS$delegate_1 = lazy(BiMap$UNITS$delegate$lambda(cfg));
  }
  protoOf(BiMap).get_L2RHS_ic3gr2_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.L2RHS$delegate_1;
    L2RHS$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(BiMap).get_R2LHS_ife3v2_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.R2LHS$delegate_1;
    R2LHS$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(BiMap).get_TDEPS_igt1tb_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.TDEPS$delegate_1;
    TDEPS$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(BiMap).get_NDEPS_idia95_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.NDEPS$delegate_1;
    NDEPS$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(BiMap).get_TRIPL_ih22la_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.TRIPL$delegate_1;
    TRIPL$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(BiMap).get_X2WZ_wobxja_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.X2WZ$delegate_1;
    X2WZ$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(BiMap).get_UNITS_ihjbc6_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.UNITS$delegate_1;
    UNITS$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(BiMap).get_wshmss_k$ = function (p) {
    var tmp0_elvis_lhs = this.get_R2LHS_ife3v2_k$().get_wei43m_k$(p);
    return tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
  };
  protoOf(BiMap).get_6bo4tg_k$ = function (p) {
    var tmp0_elvis_lhs = this.get_L2RHS_ic3gr2_k$().get_wei43m_k$(p);
    return tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
  };
  function Bindex_init_$Init$(map, $this) {
    var tmp = toSet_1(map.get_values_ksazhn_k$());
    var tmp_0 = toList(map.get_values_ksazhn_k$());
    // Inline function 'kotlin.collections.associate' call
    var this_0 = map.get_entries_p20ztl_k$();
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
    // Inline function 'kotlin.collections.associateTo' call
    var destination = LinkedHashMap_init_$Create$_1(capacity);
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.plusAssign' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Bindex.<init>.<anonymous>' call
      var pair = to(element.get_value_j01efc_k$(), element.get_key_18j28a_k$());
      destination.put_4fpzoq_k$(pair.get_first_irdx8n_k$(), pair.get_second_jf7fjx_k$());
    }
    Bindex.call($this, tmp, tmp_0, destination);
    return $this;
  }
  function Bindex_init_$Create$(map) {
    return Bindex_init_$Init$(map, objectCreate(protoOf(Bindex)));
  }
  function Bindex(set, indexedNTs, ntIndices) {
    indexedNTs = indexedNTs === VOID ? toList(set) : indexedNTs;
    ntIndices = ntIndices === VOID ? toMap(zip(indexedNTs, get_indices(indexedNTs))) : ntIndices;
    this.set_1 = set;
    this.indexedNTs_1 = indexedNTs;
    this.ntIndices_1 = ntIndices;
  }
  protoOf(Bindex).get_set_18iwav_k$ = function () {
    return this.set_1;
  };
  protoOf(Bindex).get_indexedNTs_7qf3q3_k$ = function () {
    return this.indexedNTs_1;
  };
  protoOf(Bindex).get_ntIndices_ijftm0_k$ = function () {
    return this.ntIndices_1;
  };
  protoOf(Bindex).get_size_woubt6_k$ = function () {
    return this.indexedNTs_1.get_size_woubt6_k$();
  };
  protoOf(Bindex).contains_ccp5tc_k$ = function (element) {
    return this.indexedNTs_1.contains_aljjnj_k$(element);
  };
  protoOf(Bindex).contains_aljjnj_k$ = function (element) {
    if (!(element == null ? true : !(element == null)))
      return false;
    return this.contains_ccp5tc_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(Bindex).containsAll_70schq_k$ = function (elements) {
    return this.indexedNTs_1.containsAll_xk45sd_k$(elements);
  };
  protoOf(Bindex).containsAll_xk45sd_k$ = function (elements) {
    return this.containsAll_70schq_k$(elements);
  };
  protoOf(Bindex).get_c1px32_k$ = function (index) {
    return this.indexedNTs_1.get_c1px32_k$(index);
  };
  protoOf(Bindex).indexOf_u97212_k$ = function (element) {
    return this.indexedNTs_1.indexOf_si1fv9_k$(element);
  };
  protoOf(Bindex).indexOf_si1fv9_k$ = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.indexOf_u97212_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(Bindex).isEmpty_y1axqb_k$ = function () {
    return this.indexedNTs_1.isEmpty_y1axqb_k$();
  };
  protoOf(Bindex).iterator_jk1svi_k$ = function () {
    return this.indexedNTs_1.iterator_jk1svi_k$();
  };
  protoOf(Bindex).lastIndexOf_wtunlo_k$ = function (element) {
    return this.indexedNTs_1.lastIndexOf_v2p1fv_k$(element);
  };
  protoOf(Bindex).lastIndexOf_v2p1fv_k$ = function (element) {
    if (!(element == null ? true : !(element == null)))
      return -1;
    return this.lastIndexOf_wtunlo_k$((element == null ? true : !(element == null)) ? element : THROW_CCE());
  };
  protoOf(Bindex).listIterator_xjshxw_k$ = function () {
    return this.indexedNTs_1.listIterator_xjshxw_k$();
  };
  protoOf(Bindex).listIterator_70e65o_k$ = function (index) {
    return this.indexedNTs_1.listIterator_70e65o_k$(index);
  };
  protoOf(Bindex).subList_xle3r2_k$ = function (fromIndex, toIndex) {
    return this.indexedNTs_1.subList_xle3r2_k$(fromIndex, toIndex);
  };
  protoOf(Bindex).get_51jv09_k$ = function (s) {
    var tmp0_elvis_lhs = this.ntIndices_1.get_wei43m_k$(s);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Bindex.get.<anonymous>' call
      println('Unknown nonterminal: ' + s);
      ensureNotNull(null);
      throwKotlinNothingValueException();
      tmp = 1;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Bindex).getUnsafe_950gs3_k$ = function (s) {
    return this.ntIndices_1.get_wei43m_k$(s);
  };
  protoOf(Bindex).toString = function () {
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_0 = this.indexedNTs_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Bindex.toString.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var tmp$ret$0 = '' + checkIndexOverflow(tmp1) + ': ' + item;
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return joinToString(destination, '\n', 'Bindex:\n', '\n');
  };
  function dependencyGraph(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return LabeledGraph_init_$Create$_0(dependencyGraph$lambda(_this__u8e3s4));
  }
  function revDependencyGraph(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return LabeledGraph_init_$Create$_0(revDependencyGraph$lambda(_this__u8e3s4));
  }
  function freeze(_this__u8e3s4) {
    _init_properties_CFG_kt__oelqcy();
    return new FrozenCFG(_this__u8e3s4);
  }
  function toFormula(_this__u8e3s4, nt) {
    _init_properties_CFG_kt__oelqcy();
    var tmp;
    if (get_terminals(_this__u8e3s4).contains_aljjnj_k$(nt)) {
      tmp = nt;
    } else if (!get_nonterminals(_this__u8e3s4).contains_aljjnj_k$(nt)) {
      tmp = 'false';
    } else {
      var tmp_0 = get_bimap(_this__u8e3s4).get_6bo4tg_k$(nt);
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
      if (!intersect(reachables, nonTreeLike).isEmpty_y1axqb_k$()) {
        tmp = false;
      } else {
        var tmp$ret$1;
        $l$block_0: {
          // Inline function 'kotlin.collections.all' call
          var tmp_0;
          if (isInterface(reachables, Collection)) {
            tmp_0 = reachables.isEmpty_y1axqb_k$();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$1 = true;
            break $l$block_0;
          }
          var tmp0_iterator = reachables.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.isTreelikeNonterminalIn.<anonymous>' call
            if (!(get_terminals(cfg).contains_aljjnj_k$(element) ? true : isTreelikeNonterminalIn(element, cfg, VOID, plus_1(nonTreeLike, reachables)))) {
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
    this.CFG_1 = CFG;
    var tmp = this;
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.sequences.associateWith' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.JoinMap.precomputedJoins.<anonymous>' call
    var it = choose_0(get_nonterminals(this.CFG_1), numberRangeToNumber(1, 3));
    var this_0 = times_3(it, it);
    var result = LinkedHashMap_init_$Create$();
    // Inline function 'kotlin.sequences.associateWithTo' call
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.JoinMap.precomputedJoins.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.JoinMap.precomputedJoins.<anonymous>.<anonymous>' call
      var l = element.component1_7eebsc_k$();
      var r = element.component2_7eebsb_k$();
      var tmp$ret$4 = this.join$default_f6zewq_k$(l, r);
      result.put_4fpzoq_k$(element, tmp$ret$4);
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.JoinMap.precomputedJoins.<anonymous>' call
    println('Precomputed join map has ' + result.get_size_woubt6_k$() + ' entries.');
    tmp.precomputedJoins_1 = toMutableMap(result);
  }
  protoOf(JoinMap).get_CFG_18jwo5_k$ = function () {
    return this.CFG_1;
  };
  protoOf(JoinMap).get_precomputedJoins_rejywy_k$ = function () {
    return this.precomputedJoins_1;
  };
  protoOf(JoinMap).join_gxbq63_k$ = function (l, r, tryCache) {
    var tmp;
    if (tryCache) {
      var tmp0_elvis_lhs = this.precomputedJoins_1.get_wei43m_k$(to(l, r));
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_0 = this.join_gxbq63_k$(l, r, false);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'ai.hypergraph.kaliningraph.parsing.JoinMap.join.<anonymous>' call
        // Inline function 'kotlin.collections.set' call
        var this_1 = this.precomputedJoins_1;
        var key = to(l, r);
        this_1.put_4fpzoq_k$(key, this_0);
        tmp_0 = this_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'kotlin.collections.flatMapTo' call
      var this_2 = times_4(l, r);
      var destination = ArrayList_init_$Create$_0();
      var tmp0_iterator = this_2.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.JoinMap.join.<anonymous>' call
        var l_0 = element.component1_7eebsc_k$();
        var r_0 = element.component2_7eebsb_k$();
        // Inline function 'kotlin.collections.map' call
        var this_3 = get_bimap(this.CFG_1).get_wshmss_k$(listOf([l_0, r_0]));
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
        var tmp0_iterator_0 = this_3.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.JoinMap.join.<anonymous>.<anonymous>' call
          var tmp$ret$1 = new Triple(item, l_0, r_0);
          destination_0.add_utx5q5_k$(tmp$ret$1);
        }
        var list = destination_0;
        addAll(destination, list);
      }
      tmp = toSet_1(destination);
    }
    return tmp;
  };
  protoOf(JoinMap).join$default_f6zewq_k$ = function (l, r, tryCache, $super) {
    tryCache = tryCache === VOID ? false : tryCache;
    return $super === VOID ? this.join_gxbq63_k$(l, r, tryCache) : $super.join_gxbq63_k$.call(this, l, r, tryCache);
  };
  protoOf(JoinMap).get_3qu1ii_k$ = function (l, r) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.join_gxbq63_k$(l, r, false);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.JoinMap.get.<anonymous>' call
      var tmp$ret$0 = item.get_first_irdx8n_k$();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return toSet_1(destination);
  };
  protoOf(JoinMap).get_7ykdg6_k$ = function (left, right) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(left, 10));
    var tmp0_iterator = left.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.JoinMap.get.<anonymous>' call
      var tmp$ret$0 = item.get_root_wott0r_k$();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var tmp = toSet_1(destination);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(right, 10));
    var tmp0_iterator_0 = right.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.JoinMap.get.<anonymous>' call
      var tmp$ret$3 = item_0.get_root_wott0r_k$();
      destination_0.add_utx5q5_k$(tmp$ret$3);
    }
    var this_0 = this.join_gxbq63_k$(tmp, toSet_1(destination_0), false);
    // Inline function 'kotlin.collections.mapTo' call
    var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator_1 = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var item_1 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.JoinMap.get.<anonymous>' call
      var rt = item_1.component1_7eebsc_k$();
      var l = item_1.component2_7eebsb_k$();
      var r = item_1.component3_7eebsa_k$();
      var tmp$ret$7;
      $l$block: {
        // Inline function 'kotlin.collections.first' call
        var tmp0_iterator_2 = left.iterator_jk1svi_k$();
        while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator_2.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.JoinMap.get.<anonymous>.<anonymous>' call
          if (element.get_root_wott0r_k$() === l) {
            tmp$ret$7 = element;
            break $l$block;
          }
        }
        throw NoSuchElementException_init_$Create$_0('Collection contains no element matching the predicate.');
      }
      var tmp_0 = tmp$ret$7;
      var tmp$ret$9;
      $l$block_0: {
        // Inline function 'kotlin.collections.first' call
        var tmp0_iterator_3 = right.iterator_jk1svi_k$();
        while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_3.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.JoinMap.get.<anonymous>.<anonymous>' call
          if (element_0.get_root_wott0r_k$() === r) {
            tmp$ret$9 = element_0;
            break $l$block_0;
          }
        }
        throw NoSuchElementException_init_$Create$_0('Collection contains no element matching the predicate.');
      }
      var tmp$ret$10 = new Tree(rt, null, [tmp_0, tmp$ret$9]);
      destination_1.add_utx5q5_k$(tmp$ret$10);
    }
    return toSet_1(destination_1);
  };
  function FrozenCFG(cfg) {
    this.cfg_1 = cfg;
    this.cfgId_1 = hashCode(this.cfg_1);
  }
  protoOf(FrozenCFG).get_cfg_18j85h_k$ = function () {
    return this.cfg_1;
  };
  protoOf(FrozenCFG).get_size_woubt6_k$ = function () {
    return this.cfg_1.get_size_woubt6_k$();
  };
  protoOf(FrozenCFG).contains_vrbm88_k$ = function (element) {
    return this.cfg_1.contains_aljjnj_k$(element);
  };
  protoOf(FrozenCFG).contains_aljjnj_k$ = function (element) {
    if (!(element instanceof Pair))
      return false;
    return this.contains_vrbm88_k$(element instanceof Pair ? element : THROW_CCE());
  };
  protoOf(FrozenCFG).containsAll_9p1x7w_k$ = function (elements) {
    return this.cfg_1.containsAll_xk45sd_k$(elements);
  };
  protoOf(FrozenCFG).containsAll_xk45sd_k$ = function (elements) {
    return this.containsAll_9p1x7w_k$(elements);
  };
  protoOf(FrozenCFG).isEmpty_y1axqb_k$ = function () {
    return this.cfg_1.isEmpty_y1axqb_k$();
  };
  protoOf(FrozenCFG).iterator_jk1svi_k$ = function () {
    return this.cfg_1.iterator_jk1svi_k$();
  };
  protoOf(FrozenCFG).get_cfgId_ipodbq_k$ = function () {
    return this.cfgId_1;
  };
  protoOf(FrozenCFG).equals = function (other) {
    var tmp;
    var tmp0_safe_receiver = other instanceof FrozenCFG ? other : null;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cfgId_1) === this.cfgId_1) {
      tmp = true;
    } else {
      tmp = equals((!(other == null) ? isInterface(other, Set) : false) ? other : null, this.cfg_1);
    }
    return tmp;
  };
  protoOf(FrozenCFG).hashCode = function () {
    return this.cfgId_1;
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
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
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
    var tmp0_iterator = $this$cache.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.nonterminals$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = get_LHS(item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return toSet_1(destination);
  }
  function symbols$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    var tmp = get_nonterminals($this$cache);
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = $this$cache.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
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
      return get_RHS(it).get_size_woubt6_k$() === 1 ? !get_nonterminals($this_cache).contains_aljjnj_k$(get_RHS(it).get_c1px32_k$(0)) : false;
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
    return get_RHS(it).get_size_woubt6_k$() === 1;
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
      return !get_terminalUnitProductions($this_cache).contains_aljjnj_k$(it);
    };
  }
  function unitNonterminals$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_terminalUnitProductions($this$cache);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.unitNonterminals$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = get_LHS(item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return toSet_1(destination);
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
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.tmap$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = to(get_bimap($this$cache).get_wshmss_k$(listOf_0(item)), item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.groupByTo' call
    var destination_0 = LinkedHashMap_init_$Create$();
    var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.tmap$delegate.<anonymous>.<anonymous>' call
      var key = element.get_first_irdx8n_k$();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination_0.get_wei43m_k$(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination_0.put_4fpzoq_k$(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.add_utx5q5_k$(element);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_1 = LinkedHashMap_init_$Create$_1(mapCapacity(destination_0.get_size_woubt6_k$()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_1 = destination_0.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element_0.get_key_18j28a_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.tmap$delegate.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_1 = element_0.get_value_j01efc_k$();
      // Inline function 'kotlin.collections.mapTo' call
      var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator_2 = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_2.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.tmap$delegate.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$9 = item_0.get_second_jf7fjx_k$();
        destination_2.add_utx5q5_k$(tmp$ret$9);
      }
      var tmp$ret$12 = toSet_1(destination_2);
      destination_1.put_4fpzoq_k$(tmp_0, tmp$ret$12);
    }
    return destination_1;
  }
  function vindex$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    var tmp = 0;
    var tmp_0 = get_bindex($this$cache).indexedNTs_1.get_size_woubt6_k$();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(tmp_0), null);
    while (tmp < tmp_0) {
      var tmp_2 = tmp;
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
      var this_0 = get_bimap($this$cache).get_6bo4tg_k$(get_bindex($this$cache).get_c1px32_k$(tmp_2));
      var predicate = vindex$delegate$lambda$lambda;
      // Inline function 'kotlin.apply' call
      var this_1 = toMutableSet(this_0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
      retainAll(this_1, predicate);
      // Inline function 'kotlin.collections.flatMapTo' call
      var destination = ArrayList_init_$Create$_0();
      var tmp0_iterator = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.vindex$delegate.<anonymous>.<anonymous>' call
        var list = listOf([get_bindex($this$cache).get_51jv09_k$(element.get_c1px32_k$(0)), get_bindex($this$cache).get_51jv09_k$(element.get_c1px32_k$(1))]);
        addAll(destination, list);
      }
      tmp_1[tmp_2] = toIntArray(destination);
      tmp = tmp + 1 | 0;
    }
    return tmp_1;
  }
  function vindex$delegate$lambda$lambda(it) {
    _init_properties_CFG_kt__oelqcy();
    return it.get_size_woubt6_k$() > 1;
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
    var tmp0_safe_receiver = get_rewriteHistory().get_wei43m_k$($this$cache);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_c1px32_k$(0);
    return tmp1_elvis_lhs == null ? $this$cache : tmp1_elvis_lhs;
  }
  function nonparametricForm$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    return ensureNotNull(get_rewriteHistory().get_wei43m_k$($this$cache)).get_c1px32_k$(1);
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
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.unitReachability$delegate.<anonymous>.<anonymous>' call
      // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.unitReachability$delegate.<anonymous>.<anonymous>.<anonymous>' call
      var it = LabeledGraph_init_$Create$_0(unitReachability$delegate$lambda$lambda($this$cache));
      var this_1 = plus_1(setOf(element), plus_1(transitiveClosure_0(it, setOf(element)), transitiveClosure_0(it.reversed_4dh64e_k$(), setOf(element))));
      var predicate = unitReachability$delegate$lambda$lambda_0($this$cache);
      // Inline function 'kotlin.apply' call
      var this_2 = toMutableSet(this_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
      retainAll(this_2, predicate);
      result.put_4fpzoq_k$(element, this_2);
    }
    return result;
  }
  function unitReachability$delegate$lambda$lambda($this_cache) {
    return function ($this$$receiver) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = get_unitProductions($this_cache);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.unitReachability$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$0 = to(get_LHS(item), get_RHS(item).get_c1px32_k$(0));
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.unitReachability$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var a = element.component1_7eebsc_k$();
        var b = element.component2_7eebsb_k$();
        $this$$receiver.minus_ej5072_k$(a, b);
      }
      return Unit_getInstance();
    };
  }
  function unitReachability$delegate$lambda$lambda_0($this_cache) {
    return function (it) {
      return get_nonterminals($this_cache).contains_aljjnj_k$(it);
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
    var this_1 = toSet_1(this_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.noNonterminalStubs$delegate.<anonymous>.<anonymous>' call
    var tmp = get_rewriteHistory();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.noNonterminalStubs$delegate.<anonymous>.<anonymous>.<anonymous>' call
    var it = freeze($this$cache);
    var tmp$ret$3 = plus(ensureNotNull(get_rewriteHistory().get_wei43m_k$(it)), listOf_0(it));
    tmp.put_4fpzoq_k$(this_1, tmp$ret$3);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.noNonterminalStubs$delegate.<anonymous>.<anonymous>' call
    get_blocked(this_1).addAll_4lagoh_k$(get_blocked($this$cache));
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
          tmp = this_0.isEmpty_y1axqb_k$();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
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
    var this_2 = toSet_1(this_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.noEpsilonOrNonterminalStubs$delegate.<anonymous>.<anonymous>' call
    var tmp = get_rewriteHistory();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.noEpsilonOrNonterminalStubs$delegate.<anonymous>.<anonymous>.<anonymous>' call
    var it = freeze($this$cache);
    var tmp$ret$5 = plus(ensureNotNull(get_rewriteHistory().get_wei43m_k$(it)), listOf_0(it));
    tmp.put_4fpzoq_k$(this_2, tmp$ret$5);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.noEpsilonOrNonterminalStubs$delegate.<anonymous>.<anonymous>' call
    get_blocked(this_2).addAll_4lagoh_k$(get_blocked($this$cache));
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
          tmp = this_0.isEmpty_y1axqb_k$();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
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
    throw new NotImplementedError();
  }
  function generators$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    // Inline function 'kotlin.collections.mapValues' call
    // Inline function 'kotlin.collections.groupBy' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault($this$cache, 10));
    var tmp0_iterator = $this$cache.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.generators$delegate.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_0 = get_RHS(item);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator_0 = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.generators$delegate.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$0 = to(item_0, get_LHS(item));
        destination_0.add_utx5q5_k$(tmp$ret$0);
      }
      destination.add_utx5q5_k$(destination_0);
    }
    // Inline function 'kotlin.collections.groupByTo' call
    var this_1 = flatten(destination);
    var destination_1 = LinkedHashMap_init_$Create$();
    var tmp0_iterator_1 = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.generators$delegate.<anonymous>.<anonymous>' call
      var key = element.get_first_irdx8n_k$();
      // Inline function 'kotlin.collections.getOrPut' call
      var value = destination_1.get_wei43m_k$(key);
      var tmp;
      if (value == null) {
        // Inline function 'kotlin.collections.groupByTo.<anonymous>' call
        var answer = ArrayList_init_$Create$_0();
        destination_1.put_4fpzoq_k$(key, answer);
        tmp = answer;
      } else {
        tmp = value;
      }
      var list = tmp;
      list.add_utx5q5_k$(element);
    }
    // Inline function 'kotlin.collections.mapValuesTo' call
    var destination_2 = LinkedHashMap_init_$Create$_1(mapCapacity(destination_1.get_size_woubt6_k$()));
    // Inline function 'kotlin.collections.associateByTo' call
    var tmp0_iterator_2 = destination_1.get_entries_p20ztl_k$().iterator_jk1svi_k$();
    while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_2.next_20eer_k$();
      // Inline function 'kotlin.collections.mapValuesTo.<anonymous>' call
      var tmp_0 = element_0.get_key_18j28a_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.generators$delegate.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_2 = element_0.get_value_j01efc_k$();
      // Inline function 'kotlin.collections.mapTo' call
      var destination_3 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
      var tmp0_iterator_3 = this_2.iterator_jk1svi_k$();
      while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
        var item_1 = tmp0_iterator_3.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.generators$delegate.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$12 = item_1.get_second_jf7fjx_k$();
        destination_3.add_utx5q5_k$(tmp$ret$12);
      }
      var tmp$ret$15 = toSet_1(destination_3);
      destination_2.put_4fpzoq_k$(tmp_0, tmp$ret$15);
    }
    return destination_2;
  }
  function nonterminalFormulas$delegate$lambda($this$cache) {
    _init_properties_CFG_kt__oelqcy();
    // Inline function 'kotlin.collections.associateWith' call
    var this_0 = get_nonterminals($this$cache);
    var result = LinkedHashMap_init_$Create$_1(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
    // Inline function 'kotlin.collections.associateWithTo' call
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.nonterminalFormulas$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = toFormula($this$cache, element);
      result.put_4fpzoq_k$(element, tmp$ret$0);
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
    var cfg = toSet_1(this_0);
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
    var tmp0_iterator = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.pruneTreelikeNonterminals$delegate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp$ret$4 = to(item, listOf_0('<' + item + '>'));
      destination.add_utx5q5_k$(tmp$ret$4);
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
    var tmp0_iterator_0 = this_3.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.pruneTreelikeNonterminals$delegate.<anonymous>.<anonymous>.<anonymous>' call
      var tmp$ret$9 = to(item_0, listOf_0('<' + item_0 + '>'));
      destination_0.add_utx5q5_k$(tmp$ret$9);
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
    var tmp0_iterator_1 = this_4.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var item_1 = tmp0_iterator_1.next_20eer_k$();
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
      var tmp0_iterator_2 = this_5.iterator_jk1svi_k$();
      while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
        var item_2 = tmp0_iterator_2.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.pruneTreelikeNonterminals$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$16 = to(item_1, get_RHS(item_2));
        destination_2.add_utx5q5_k$(tmp$ret$16);
      }
      destination_1.add_utx5q5_k$(destination_2);
    }
    var this_6 = toSet_1(flatten(destination_1));
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
    var tmp$ret$28 = plus(listOf_0(ensureNotNull(get_rewriteHistory().get_wei43m_k$(it_0)).get_c1px32_k$(0)), listOf_0(it_0));
    tmp_1.put_4fpzoq_k$(this_7, tmp$ret$28);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.pruneTreelikeNonterminals$delegate.<anonymous>.<anonymous>' call
    get_blocked(this_7).addAll_4lagoh_k$(get_blocked($this$cache));
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
          tmp_0 = this_0.isEmpty_y1axqb_k$();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
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
      return get_terminals($this_cache).contains_aljjnj_k$('<' + it + '>');
    };
  }
  function pruneTreelikeNonterminals$delegate$lambda$lambda_1(it) {
    _init_properties_CFG_kt__oelqcy();
    return isOrganicNonterminal(it);
  }
  function pruneTreelikeNonterminals$delegate$lambda$lambda_2($this_cache) {
    return function (it) {
      return isSyntheticNonterminal(it) ? get_nonterminals($this_cache).contains_aljjnj_k$(it) : false;
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
    return function ($this$$receiver) {
      var tmp0_iterator = $this_dependencyGraph.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.dependencyGraph.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_0 = element.get_second_jf7fjx_k$().iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.dependencyGraph.<anonymous>.<anonymous>.<anonymous>' call
          $this$$receiver.minus_ej5072_k$(get_LHS(element), element_0);
        }
      }
      return Unit_getInstance();
    };
  }
  function revDependencyGraph$lambda($this_revDependencyGraph) {
    return function ($this$$receiver) {
      var tmp0_iterator = $this_revDependencyGraph.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.revDependencyGraph.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_0 = element.get_second_jf7fjx_k$().iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.revDependencyGraph.<anonymous>.<anonymous>.<anonymous>' call
          $this$$receiver.minus_ej5072_k$(element_0, get_LHS(element));
        }
      }
      return Unit_getInstance();
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
  function delimiters$factory() {
    return getPropertyCallableRef('delimiters', 1, KProperty1, function (receiver) {
      return get_delimiters(receiver);
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
  function unitNonterminals$factory() {
    return getPropertyCallableRef('unitNonterminals', 1, KProperty1, function (receiver) {
      return get_unitNonterminals(receiver);
    }, null);
  }
  function bimap$factory() {
    return getPropertyCallableRef('bimap', 1, KProperty1, function (receiver) {
      return get_bimap(receiver);
    }, null);
  }
  function tmap$factory() {
    return getPropertyCallableRef('tmap', 1, KProperty1, function (receiver) {
      return get_tmap(receiver);
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
  function revDepGraph$factory() {
    return getPropertyCallableRef('revDepGraph', 1, KProperty1, function (receiver) {
      return get_revDepGraph(receiver);
    }, null);
  }
  function originalForm$factory() {
    return getPropertyCallableRef('originalForm', 1, KProperty1, function (receiver) {
      return get_originalForm(receiver);
    }, null);
  }
  function nonparametricForm$factory() {
    return getPropertyCallableRef('nonparametricForm', 1, KProperty1, function (receiver) {
      return get_nonparametricForm(receiver);
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
  function noNonterminalStubs$factory() {
    return getPropertyCallableRef('noNonterminalStubs', 1, KProperty1, function (receiver) {
      return get_noNonterminalStubs(receiver);
    }, null);
  }
  function noEpsilonOrNonterminalStubs$factory() {
    return getPropertyCallableRef('noEpsilonOrNonterminalStubs', 1, KProperty1, function (receiver) {
      return get_noEpsilonOrNonterminalStubs(receiver);
    }, null);
  }
  function parikhFPCache$factory() {
    return getPropertyCallableRef('parikhFPCache', 1, KProperty1, function (receiver) {
      return get_parikhFPCache(receiver);
    }, null);
  }
  function generators$factory() {
    return getPropertyCallableRef('generators', 1, KProperty1, function (receiver) {
      return get_generators(receiver);
    }, null);
  }
  function nonterminalFormulas$factory() {
    return getPropertyCallableRef('nonterminalFormulas', 1, KProperty1, function (receiver) {
      return get_nonterminalFormulas(receiver);
    }, null);
  }
  function pruneTreelikeNonterminals$factory() {
    return getPropertyCallableRef('pruneTreelikeNonterminals', 1, KProperty1, function (receiver) {
      return get_pruneTreelikeNonterminals(receiver);
    }, null);
  }
  function joinMap$factory() {
    return getPropertyCallableRef('joinMap', 1, KProperty1, function (receiver) {
      return get_joinMap(receiver);
    }, null);
  }
  function L2RHS$factory() {
    return getPropertyCallableRef('L2RHS', 1, KProperty1, function (receiver) {
      return receiver.get_L2RHS_ic3gr2_k$();
    }, null);
  }
  function R2LHS$factory() {
    return getPropertyCallableRef('R2LHS', 1, KProperty1, function (receiver) {
      return receiver.get_R2LHS_ife3v2_k$();
    }, null);
  }
  function TDEPS$factory() {
    return getPropertyCallableRef('TDEPS', 1, KProperty1, function (receiver) {
      return receiver.get_TDEPS_igt1tb_k$();
    }, null);
  }
  function NDEPS$factory() {
    return getPropertyCallableRef('NDEPS', 1, KProperty1, function (receiver) {
      return receiver.get_NDEPS_idia95_k$();
    }, null);
  }
  function TRIPL$factory() {
    return getPropertyCallableRef('TRIPL', 1, KProperty1, function (receiver) {
      return receiver.get_TRIPL_ih22la_k$();
    }, null);
  }
  function X2WZ$factory() {
    return getPropertyCallableRef('X2WZ', 1, KProperty1, function (receiver) {
      return receiver.get_X2WZ_wobxja_k$();
    }, null);
  }
  function UNITS$factory() {
    return getPropertyCallableRef('UNITS', 1, KProperty1, function (receiver) {
      return receiver.get_UNITS_ihjbc6_k$();
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
    return pretty$delegate.getValue_4u4kqi_k$(_this__u8e3s4, pretty$factory());
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
    var tmp0_iterator = $this$cache.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.pretty$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = pretty(item);
      destination.add_utx5q5_k$(tmp$ret$0);
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
  function get_language_0(_this__u8e3s4) {
    _init_properties_FLTheory_kt__k6sxcb();
    return language$delegate_0.getValue_4u4kqi_k$(_this__u8e3s4, language$factory_0());
  }
  var language$delegate_0;
  function get_asCFG(_this__u8e3s4) {
    _init_properties_FLTheory_kt__k6sxcb();
    return asCFG$delegate.getValue_4u4kqi_k$(_this__u8e3s4, asCFG$factory());
  }
  var asCFG$delegate;
  function get_asCJL(_this__u8e3s4) {
    _init_properties_FLTheory_kt__k6sxcb();
    return asCJL$delegate.getValue_4u4kqi_k$(_this__u8e3s4, asCJL$factory());
  }
  var asCJL$delegate;
  function CFL(cfg) {
    this.cfg_1 = cfg;
  }
  protoOf(CFL).get_cfg_18j85h_k$ = function () {
    return this.cfg_1;
  };
  protoOf(CFL).component1_7eebsc_k$ = function () {
    return this.cfg_1;
  };
  protoOf(CFL).copy_6fpa71_k$ = function (cfg) {
    return new CFL(cfg);
  };
  protoOf(CFL).copy$default_425gef_k$ = function (cfg, $super) {
    cfg = cfg === VOID ? this.cfg_1 : cfg;
    return $super === VOID ? this.copy_6fpa71_k$(cfg) : $super.copy_6fpa71_k$.call(this, cfg);
  };
  protoOf(CFL).toString = function () {
    return 'CFL(cfg=' + this.cfg_1 + ')';
  };
  protoOf(CFL).hashCode = function () {
    return hashCode(this.cfg_1);
  };
  protoOf(CFL).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CFL))
      return false;
    var tmp0_other_with_cast = other instanceof CFL ? other : THROW_CCE();
    if (!equals(this.cfg_1, tmp0_other_with_cast.cfg_1))
      return false;
    return true;
  };
  function REL(reg) {
    this.reg_1 = reg;
  }
  protoOf(REL).get_reg_18ix1x_k$ = function () {
    return this.reg_1;
  };
  protoOf(REL).component1_7eebsc_k$ = function () {
    return this.reg_1;
  };
  protoOf(REL).copy_bc94c1_k$ = function (reg) {
    return new REL(reg);
  };
  protoOf(REL).copy$default_8wvzjj_k$ = function (reg, $super) {
    reg = reg === VOID ? this.reg_1 : reg;
    return $super === VOID ? this.copy_bc94c1_k$(reg) : $super.copy_bc94c1_k$.call(this, reg);
  };
  protoOf(REL).toString = function () {
    return 'REL(reg=' + this.reg_1 + ')';
  };
  protoOf(REL).hashCode = function () {
    return hashCode(this.reg_1);
  };
  protoOf(REL).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof REL))
      return false;
    var tmp0_other_with_cast = other instanceof REL ? other : THROW_CCE();
    if (!equals(this.reg_1, tmp0_other_with_cast.reg_1))
      return false;
    return true;
  };
  function intersect_0($this, item) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this.get_cfgs_wok1co_k$();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.CJL.intersect.<anonymous>' call
      var tmp$ret$0 = item(item_0);
      destination.add_utx5q5_k$(tmp$ret$0);
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
        var tmp$ret$0 = item.cfg_1;
        destination.add_utx5q5_k$(tmp$ret$0);
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
    var this_0 = toSet_0(cfls);
    tmp.cfls_1 = copyToArray(this_0);
    var tmp_0 = this;
    tmp_0.cfgs$delegate_1 = cache_0(VOID, CJL$cfgs$delegate$lambda(cfls));
    var tmp_1 = this;
    tmp_1.nonterminals$delegate_1 = cache_0(VOID, CJL$nonterminals$delegate$lambda);
    var tmp_2 = this;
    tmp_2.terminals$delegate_1 = cache_0(VOID, CJL$terminals$delegate$lambda);
    var tmp_3 = this;
    tmp_3.symbols$delegate_1 = cache_0(VOID, CJL$symbols$delegate$lambda);
  }
  protoOf(CJL).get_cfls_wok1gz_k$ = function () {
    return this.cfls_1;
  };
  protoOf(CJL).get_cfgs_wok1co_k$ = function () {
    return this.cfgs$delegate_1.getValue_4u4kqi_k$(this, cfgs$factory());
  };
  protoOf(CJL).get_nonterminals_qaql5f_k$ = function () {
    return this.nonterminals$delegate_1.getValue_4u4kqi_k$(this, nonterminals$factory_0());
  };
  protoOf(CJL).get_terminals_suewxe_k$ = function () {
    return this.terminals$delegate_1.getValue_4u4kqi_k$(this, terminals$factory_0());
  };
  protoOf(CJL).get_symbols_rkfzm6_k$ = function () {
    return this.symbols$delegate_1.getValue_4u4kqi_k$(this, symbols$factory_0());
  };
  function language$delegate$lambda_0($this$cache) {
    _init_properties_FLTheory_kt__k6sxcb();
    return new REL($this$cache);
  }
  function asCFG$delegate$lambda($this$cache) {
    _init_properties_FLTheory_kt__k6sxcb();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault($this$cache, 10));
    var tmp0_iterator = $this$cache.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.asCFG$delegate.<anonymous>.<anonymous>' call
      var a = item.component1_7eebsc_k$();
      var b = item.component2_7eebsb_k$();
      var tmp$ret$0 = to(a, listOf_0(b));
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return toSet_1(destination);
  }
  function asCJL$delegate$lambda($this$cache) {
    _init_properties_FLTheory_kt__k6sxcb();
    return new CJL([get_language($this$cache)]);
  }
  function language$factory_0() {
    return getPropertyCallableRef('language', 1, KProperty1, function (receiver) {
      return get_language_0(receiver);
    }, null);
  }
  function asCFG$factory() {
    return getPropertyCallableRef('asCFG', 1, KProperty1, function (receiver) {
      return get_asCFG(receiver);
    }, null);
  }
  function asCJL$factory() {
    return getPropertyCallableRef('asCJL', 1, KProperty1, function (receiver) {
      return get_asCJL(receiver);
    }, null);
  }
  function cfgs$factory() {
    return getPropertyCallableRef('cfgs', 1, KProperty1, function (receiver) {
      return receiver.get_cfgs_wok1co_k$();
    }, null);
  }
  function nonterminals$factory_0() {
    return getPropertyCallableRef('nonterminals', 1, KProperty1, function (receiver) {
      return receiver.get_nonterminals_qaql5f_k$();
    }, null);
  }
  function terminals$factory_0() {
    return getPropertyCallableRef('terminals', 1, KProperty1, function (receiver) {
      return receiver.get_terminals_suewxe_k$();
    }, null);
  }
  function symbols$factory_0() {
    return getPropertyCallableRef('symbols', 1, KProperty1, function (receiver) {
      return receiver.get_symbols_rkfzm6_k$();
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
  function get_states(_this__u8e3s4) {
    _init_properties_FSA_kt__3gyuma();
    return states$delegate.getValue_4u4kqi_k$(_this__u8e3s4, states$factory());
  }
  var states$delegate;
  function states$delegate$lambda($this$cache) {
    _init_properties_FSA_kt__3gyuma();
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = $this$cache.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.states$delegate.<anonymous>.<anonymous>' call
      var list = listOf([get_π1(element), get_π3(element)]);
      addAll(destination, list);
    }
    return toSet_1(destination);
  }
  function states$factory() {
    return getPropertyCallableRef('states', 1, KProperty1, function (receiver) {
      return get_states(receiver);
    }, null);
  }
  var properties_initialized_FSA_kt_m71h0c;
  function _init_properties_FSA_kt__3gyuma() {
    if (!properties_initialized_FSA_kt_m71h0c) {
      properties_initialized_FSA_kt_m71h0c = true;
      states$delegate = cache_0(VOID, states$delegate$lambda);
    }
  }
  function get_LOR() {
    _init_properties_Formulas_kt__5jorkj();
    return LOR;
  }
  var LOR;
  function get_AND() {
    _init_properties_Formulas_kt__5jorkj();
    return AND;
  }
  var AND;
  function get_booleanFormulaCFG() {
    _init_properties_Formulas_kt__5jorkj();
    return booleanFormulaCFG;
  }
  var booleanFormulaCFG;
  var properties_initialized_Formulas_kt_zgkt01;
  function _init_properties_Formulas_kt__5jorkj() {
    if (!properties_initialized_Formulas_kt_zgkt01) {
      properties_initialized_Formulas_kt_zgkt01 = true;
      LOR = '%OR%';
      AND = '%AND%';
      booleanFormulaCFG = parseCFG('\n  O -> ' + get_LOR() + ' | ' + get_AND() + '\n  S -> S O S | ( S )\n  S -> true | false\n');
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
    rewrites.add_utx5q5_k$(this_0);
    var this_1 = eliminateParametricityFromLHS(this_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.normalize.<anonymous>.<anonymous>' call
    rewrites.add_utx5q5_k$(this_1);
    var this_2 = generateNonterminalStubs(transformIntoCNF(this_1));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.normalize.<anonymous>.<anonymous>' call
    get_rewriteHistory().put_4fpzoq_k$(freeze(this_2), rewrites);
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
    var this_1 = _this__u8e3s4.transitiveClosure_s5t4xa_k$(this_0);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.transitiveClosure.<anonymous>' call
      var tmp$ret$2 = item.get_label_iuj8p7_k$();
      destination.add_utx5q5_k$(tmp$ret$2);
    }
    return toSet_1(destination);
  }
  function transformIntoCNF(_this__u8e3s4) {
    _init_properties_Normalization_kt__nz9twr();
    return removeUselessSymbols(terminalsToUnitProds(refactorRHS(elimVarUnitProds(refactorEpsilonProds(addEpsilonProduction(_this__u8e3s4))))));
  }
  function isSyntheticNonterminal(_this__u8e3s4) {
    _init_properties_Normalization_kt__nz9twr();
    return (!(split(_this__u8e3s4, ['.']).get_size_woubt6_k$() === 1) ? true : contains(_this__u8e3s4, '\u03B5')) ? true : _this__u8e3s4 === 'START';
  }
  function isOrganicNonterminal(_this__u8e3s4) {
    _init_properties_Normalization_kt__nz9twr();
    return (split(_this__u8e3s4, ['.']).get_size_woubt6_k$() === 1 ? !contains(_this__u8e3s4, '\u03B5') : false) ? !(_this__u8e3s4 === 'START') : false;
  }
  function reachableSymbols(_this__u8e3s4, from) {
    from = from === VOID ? get_START_SYMBOL() : from;
    _init_properties_Normalization_kt__nz9twr();
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = get_reachability(_this__u8e3s4);
    var value = this_0.get_wei43m_k$(from);
    var tmp;
    if (value == null) {
      // Inline function 'ai.hypergraph.kaliningraph.parsing.reachableSymbols.<anonymous>' call
      var answer = transitiveClosure_0(get_depGraph(_this__u8e3s4), setOf(from));
      this_0.put_4fpzoq_k$(from, answer);
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
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.generateNonterminalStubs.<anonymous>' call
      var tmp$ret$2 = to(get_LHS(item), listOf_0('<' + get_LHS(item) + '>'));
      destination.add_utx5q5_k$(tmp$ret$2);
    }
    return plus_1(_this__u8e3s4, addEpsilonProduction(toSet_1(destination)));
  }
  function eliminateParametricityFromLHS(_this__u8e3s4, parameters) {
    var tmp;
    if (parameters === VOID) {
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'kotlin.collections.flatMapTo' call
      var this_0 = get_nonterminals(_this__u8e3s4);
      var destination = ArrayList_init_$Create$_0();
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromLHS.<anonymous>' call
        var list = getParametersIn(element, _this__u8e3s4);
        addAll(destination, list);
      }
      tmp = toSet_1(destination);
    } else {
      tmp = parameters;
    }
    parameters = tmp;
    _init_properties_Normalization_kt__nz9twr();
    var tmp_0;
    if (parameters.isEmpty_y1axqb_k$()) {
      tmp_0 = _this__u8e3s4;
    } else {
      var i = false;
      // Inline function 'kotlin.collections.setOf' call
      var tmp$ret$3 = emptySet();
      var tmp0_container = to('', tmp$ret$3);
      var ntReplaced = tmp0_container.component1_7eebsc_k$();
      var ntReplacements = tmp0_container.component2_7eebsb_k$();
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'kotlin.collections.flatMapTo' call
      var destination_0 = ArrayList_init_$Create$_0();
      var tmp0_iterator_0 = _this__u8e3s4.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        var tmp$ret$4;
        $l$block: {
          // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromLHS.<anonymous>' call
          var params = getParametersIn(get_LHS(element_0), _this__u8e3s4);
          if (params.isEmpty_y1axqb_k$() ? true : i) {
            tmp$ret$4 = listOf_0(element_0);
            break $l$block;
          }
          i = true;
          ntReplaced = get_LHS(element_0);
          // Inline function 'kotlin.collections.associateWith' call
          var result = LinkedHashMap_init_$Create$_1(coerceAtLeast(mapCapacity(collectionSizeOrDefault(params, 10)), 16));
          // Inline function 'kotlin.collections.associateWithTo' call
          var tmp0_iterator_1 = params.iterator_jk1svi_k$();
          while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
            var element_1 = tmp0_iterator_1.next_20eer_k$();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromLHS.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.collections.map' call
            var this_1 = get_bimap(_this__u8e3s4).get_6bo4tg_k$(element_1);
            // Inline function 'kotlin.collections.mapTo' call
            var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
            var tmp0_iterator_2 = this_1.iterator_jk1svi_k$();
            while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
              var item = tmp0_iterator_2.next_20eer_k$();
              // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromLHS.<anonymous>.<anonymous>.<anonymous>' call
              var tmp$ret$5 = item.get_c1px32_k$(0);
              destination_1.add_utx5q5_k$(tmp$ret$5);
            }
            var tmp$ret$8 = toSet_1(destination_1);
            result.put_4fpzoq_k$(element_1, tmp$ret$8);
          }
          var map = result;
          var tmp$ret$11;
          $l$block_1: {
            // Inline function 'kotlin.collections.maxByOrNull' call
            var iterator = map.get_entries_p20ztl_k$().iterator_jk1svi_k$();
            if (!iterator.hasNext_bitz1p_k$()) {
              tmp$ret$11 = null;
              break $l$block_1;
            }
            var maxElem = iterator.next_20eer_k$();
            if (!iterator.hasNext_bitz1p_k$()) {
              tmp$ret$11 = maxElem;
              break $l$block_1;
            }
            // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromLHS.<anonymous>.<anonymous>' call
            var maxValue = maxElem.get_value_j01efc_k$().get_size_woubt6_k$();
            do {
              var e = iterator.next_20eer_k$();
              // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromLHS.<anonymous>.<anonymous>' call
              var v = e.get_value_j01efc_k$().get_size_woubt6_k$();
              if (compareTo(maxValue, v) < 0) {
                maxElem = e;
                maxValue = v;
              }
            }
             while (iterator.hasNext_bitz1p_k$());
            tmp$ret$11 = maxElem;
          }
          var tmp0_container_0 = ensureNotNull(tmp$ret$11);
          // Inline function 'kotlin.collections.component1' call
          var s = tmp0_container_0.get_key_18j28a_k$();
          // Inline function 'kotlin.collections.component2' call
          var r = tmp0_container_0.get_value_j01efc_k$();
          // Inline function 'kotlin.collections.map' call
          // Inline function 'kotlin.collections.mapTo' call
          var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(r, 10));
          var tmp0_iterator_3 = r.iterator_jk1svi_k$();
          while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
            var item_0 = tmp0_iterator_3.next_20eer_k$();
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
            var tmp0_iterator_4 = this_3.iterator_jk1svi_k$();
            while (tmp0_iterator_4.hasNext_bitz1p_k$()) {
              var item_1 = tmp0_iterator_4.next_20eer_k$();
              // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromLHS.<anonymous>.<anonymous>.<anonymous>' call
              var tmp$ret$17 = replace(item_1, '<' + s + '>', '<' + item_0 + '>');
              destination_3.add_utx5q5_k$(tmp$ret$17);
            }
            var tmp$ret$20 = to(tmp_1, destination_3);
            destination_2.add_utx5q5_k$(tmp$ret$20);
          }
          tmp$ret$4 = destination_2;
        }
        var list_0 = tmp$ret$4;
        addAll(destination_0, list_0);
      }
      tmp_0 = eliminateParametricityFromLHS(eliminateParametricityFromRHS(toSet_1(destination_0), ntReplaced, ntReplacements));
    }
    return tmp_0;
  }
  function expandOr(_this__u8e3s4) {
    _init_properties_Normalization_kt__nz9twr();
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.expandOr.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.fold' call
      var this_0 = get_RHS(element);
      // Inline function 'kotlin.collections.listOf' call
      var tmp$ret$0 = emptyList();
      var accumulator = listOf_0(tmp$ret$0);
      var tmp0_iterator_0 = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.expandOr.<anonymous>.<anonymous>' call
        var acc = accumulator;
        var tmp;
        if (element_0 === '|') {
          // Inline function 'kotlin.collections.listOf' call
          var tmp$ret$1 = emptyList();
          tmp = plus(acc, listOf_0(tmp$ret$1));
        } else {
          tmp = plus(dropLast_0(acc, 1), listOf_0(plus_3(last(acc), element_0)));
        }
        accumulator = tmp;
      }
      var this_1 = accumulator;
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator_1 = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_1.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.expandOr.<anonymous>.<anonymous>' call
        var tmp$ret$4 = to(get_LHS(element), item);
        destination_0.add_utx5q5_k$(tmp$ret$4);
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return toSet_1(destination);
  }
  function addGlobalStartSymbol(_this__u8e3s4) {
    _init_properties_Normalization_kt__nz9twr();
    var tmp;
    if (get_nonterminals(_this__u8e3s4).contains_aljjnj_k$(get_START_SYMBOL())) {
      tmp = emptySet();
    } else {
      // Inline function 'kotlin.collections.map' call
      var this_0 = get_nonterminals(_this__u8e3s4);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.addGlobalStartSymbol.<anonymous>' call
        var tmp$ret$0 = to(get_START_SYMBOL(), listOf_0(item));
        destination.add_utx5q5_k$(tmp$ret$0);
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
          var tmp0_iterator = get_nonterminalProductions($this).iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.terminalsToUnitProds.<anonymous>' call
            var tmp$ret$0;
            $l$block_0: {
              // Inline function 'kotlin.collections.any' call
              var this_0 = get_RHS(element);
              var tmp;
              if (isInterface(this_0, Collection)) {
                tmp = this_0.isEmpty_y1axqb_k$();
              } else {
                tmp = false;
              }
              if (tmp) {
                tmp$ret$0 = false;
                break $l$block_0;
              }
              var tmp0_iterator_0 = this_0.iterator_jk1svi_k$();
              while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
                var element_0 = tmp0_iterator_0.next_20eer_k$();
                // Inline function 'ai.hypergraph.kaliningraph.parsing.terminalsToUnitProds.<anonymous>.<anonymous>' call
                if (!get_nonterminals($this).contains_aljjnj_k$(element_0)) {
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
          var tmp0_iterator_1 = get_RHS(mixProd).iterator_jk1svi_k$();
          while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator_1.next_20eer_k$();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.terminalsToUnitProds.<anonymous>' call
            if (!get_nonterminals($this).contains_aljjnj_k$(item)) {
              tmp$ret$5 = index;
              break $l$block_2;
            }
            index = index + 1 | 0;
          }
          tmp$ret$5 = -1;
        }
        var termIdx = tmp$ret$5;
        var freshName = 'F.' + get_RHS(mixProd).get_c1px32_k$(termIdx);
        // Inline function 'kotlin.also' call
        var this_1 = toMutableList(get_RHS(mixProd));
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'ai.hypergraph.kaliningraph.parsing.terminalsToUnitProds.<anonymous>' call
        this_1.set_82063s_k$(termIdx, freshName);
        var freshRHS = this_1;
        var newProd = to(freshName, listOf_0(get_RHS(mixProd).get_c1px32_k$(termIdx)));
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
          var tmp0_iterator = $this.iterator_jk1svi_k$();
          while (tmp0_iterator.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator.next_20eer_k$();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.refactorRHS.<anonymous>' call
            if (get_RHS(element).get_size_woubt6_k$() > 2) {
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
        var shortProd = to(get_LHS(longProd), plus_3(dropLast_0(get_RHS(longProd), 2), freshName));
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
        var tmp0_iterator = this_3.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.elimVarUnitProds.<anonymous>' call
          var tmp$ret$4 = get_LHS(item);
          destination.add_utx5q5_k$(tmp$ret$4);
        }
        var varsThatMapToMe = toSet_1(destination);
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
        var tmp0_iterator_0 = this_5.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var item_0 = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.elimVarUnitProds.<anonymous>' call
          var tmp$ret$9 = get_RHS(item_0);
          destination_0.add_utx5q5_k$(tmp$ret$9);
        }
        var thingsIMapTo = toSet_1(destination_0);
        // Inline function 'kotlin.collections.fold' call
        var accumulator = $this;
        var tmp0_iterator_1 = times_4(varsThatMapToMe, thingsIMapTo).iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator_1.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.elimVarUnitProds.<anonymous>' call
          var g = accumulator;
          accumulator = plus_0(g, element);
        }
        var tmp0 = accumulator;
        var tmp1 = toSet_1(drop_0(toVisit_0, 1));
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
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.refactorEpsilonProds.<anonymous>' call
      var tmp;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var this_1 = get_RHS(element);
        var tmp_0;
        if (isInterface(this_1, Collection)) {
          tmp_0 = this_1.isEmpty_y1axqb_k$();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.refactorEpsilonProds.<anonymous>.<anonymous>' call
          if (nlbls.contains_aljjnj_k$(element_0)) {
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
    var tmp0_iterator_1 = destination.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_1 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.refactorEpsilonProds.<anonymous>' call
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!get_RHS(element_1).isEmpty_y1axqb_k$()) {
        destination_0.add_utx5q5_k$(element_1);
      }
    }
    return toSet_1(destination_0);
  }
  function addEpsilonProduction(_this__u8e3s4) {
    _init_properties_Normalization_kt__nz9twr();
    // Inline function 'kotlin.collections.fold' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_0 = get_terminalUnitProductions(_this__u8e3s4);
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.addEpsilonProduction.<anonymous>' call
      if (!contains(pretty(element), '\u03B5')) {
        destination.add_utx5q5_k$(element);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
    var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.addEpsilonProduction.<anonymous>' call
      var tmp$ret$3 = get_LHS(item);
      destination_0.add_utx5q5_k$(tmp$ret$3);
    }
    var accumulator = _this__u8e3s4;
    var tmp0_iterator_1 = toSet_1(destination_0).iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_1.next_20eer_k$();
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
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.getParametersIn.<anonymous>' call
      var tmp$ret$0 = get_LHS(item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    // Inline function 'kotlin.collections.filterTo' call
    var destination_0 = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.getParametersIn.<anonymous>' call
      if (contains(_this__u8e3s4, '<' + element + '>')) {
        destination_0.add_utx5q5_k$(element);
      }
    }
    return destination_0;
  }
  function eliminateParametricityFromRHS(_this__u8e3s4, ntReplaced, ntReplacements) {
    _init_properties_Normalization_kt__nz9twr();
    var tmp;
    if (ntReplacements.isEmpty_y1axqb_k$()) {
      tmp = _this__u8e3s4;
    } else {
      // Inline function 'kotlin.collections.flatMap' call
      // Inline function 'kotlin.collections.flatMapTo' call
      var destination = ArrayList_init_$Create$_0();
      var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromRHS.<anonymous>' call
        var tmp_0;
        var tmp$ret$0;
        $l$block_0: {
          // Inline function 'kotlin.collections.none' call
          var this_0 = get_RHS(element);
          var tmp_1;
          if (isInterface(this_0, Collection)) {
            tmp_1 = this_0.isEmpty_y1axqb_k$();
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
          var tmp0_iterator_0 = this_0.iterator_jk1svi_k$();
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var element_0 = tmp0_iterator_0.next_20eer_k$();
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
          var tmp0_iterator_1 = ntReplacements.iterator_jk1svi_k$();
          while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator_1.next_20eer_k$();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromRHS.<anonymous>.<anonymous>' call
            var tmp_2 = get_LHS(element);
            // Inline function 'kotlin.collections.map' call
            var this_1 = get_RHS(element);
            // Inline function 'kotlin.collections.mapTo' call
            var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
            var tmp0_iterator_2 = this_1.iterator_jk1svi_k$();
            while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
              var item_0 = tmp0_iterator_2.next_20eer_k$();
              // Inline function 'ai.hypergraph.kaliningraph.parsing.eliminateParametricityFromRHS.<anonymous>.<anonymous>.<anonymous>' call
              var tmp$ret$2 = item_0 === ntReplaced ? item : item_0;
              destination_1.add_utx5q5_k$(tmp$ret$2);
            }
            var tmp$ret$5 = to(tmp_2, destination_1);
            destination_0.add_utx5q5_k$(tmp$ret$5);
          }
          tmp_0 = destination_0;
        }
        var list = tmp_0;
        addAll(destination, list);
      }
      tmp = toSet_1(destination);
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
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.genSym.<anonymous>' call
        var tmp$ret$0 = get_LHS(item);
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      tmp = toSet_1(destination);
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
        nextGenerating.remove_cedx0m_k$(t);
        // Inline function 'kotlin.collections.plusAssign' call
        allGenerating.add_utx5q5_k$(t);
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'kotlin.collections.filter' call
        var tmp0_elvis_lhs = get_bimap(_this__u8e3s4).get_TDEPS_igt1tb_k$().get_wei43m_k$(t);
        // Inline function 'kotlin.collections.filterTo' call
        var this_1 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
        var destination_0 = ArrayList_init_$Create$_0();
        var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.genSym.<anonymous>' call
          if (!allGenerating.contains_aljjnj_k$(element) ? !nextGenerating.contains_aljjnj_k$(element) : false) {
            destination_0.add_utx5q5_k$(element);
          }
        }
        addAll(nextGenerating, destination_0);
      }
       while (false);
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp$ret$7 = !nextGenerating.isEmpty_y1axqb_k$();
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
        nextReachable.remove_cedx0m_k$(t);
        // Inline function 'kotlin.collections.plusAssign' call
        allReachable.add_utx5q5_k$(t);
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'kotlin.collections.filter' call
        var tmp0_elvis_lhs = get_bimap(_this__u8e3s4).get_NDEPS_idia95_k$().get_wei43m_k$(t);
        // Inline function 'kotlin.collections.filterTo' call
        var this_0 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
        var destination = ArrayList_init_$Create$_0();
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.reachSym.<anonymous>' call
          if (!allReachable.contains_aljjnj_k$(element) ? !nextReachable.contains_aljjnj_k$(element) : false) {
            destination.add_utx5q5_k$(element);
          }
        }
        addAll(nextReachable, destination);
      }
       while (false);
      // Inline function 'kotlin.collections.isNotEmpty' call
      var tmp$ret$3 = !nextReachable.isEmpty_y1axqb_k$();
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
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.nullableNonterminals.<anonymous>' call
        var tmp$ret$2 = get_LHS(item);
        destination.add_utx5q5_k$(tmp$ret$2);
      }
      tmp = toSet_1(destination);
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
          var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var item_0 = tmp0_iterator_0.next_20eer_k$();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.nullableNonterminals.<anonymous>' call
            var tmp$ret$7 = get_LHS(item_0);
            destination_0.add_utx5q5_k$(tmp$ret$7);
          }
          $this = tmp0;
          nbls_0 = tmp1;
          nnts_0 = toSet_1(destination_0);
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
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.allSubSeq.<anonymous>' call
      if (nullables.contains_aljjnj_k$(get_RHS(_this__u8e3s4).get_c1px32_k$(element))) {
        destination.add_utx5q5_k$(element);
      }
    }
    var this_1 = toSet_2(powerset(destination));
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.allSubSeq.<anonymous>' call
      var tmp$ret$3 = to(get_LHS(_this__u8e3s4), drop_1(get_RHS(_this__u8e3s4), nullables, item));
      destination_0.add_utx5q5_k$(tmp$ret$3);
    }
    return toSet_1(destination_0);
  }
  function drop_1(_this__u8e3s4, nullables, keep) {
    _init_properties_Normalization_kt__nz9twr();
    // Inline function 'kotlin.collections.mapIndexedNotNull' call
    // Inline function 'kotlin.collections.mapIndexedNotNullTo' call
    var destination = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.mapIndexedNotNullTo.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      // Inline function 'ai.hypergraph.kaliningraph.parsing.drop.<anonymous>' call
      var i = checkIndexOverflow(tmp1);
      var tmp0_safe_receiver = (nullables.contains_aljjnj_k$(item) ? !keep.contains_aljjnj_k$(i) : false) ? null : (nullables.contains_aljjnj_k$(item) ? keep.contains_aljjnj_k$(i) : false) ? item : item;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination.add_utx5q5_k$(tmp0_safe_receiver);
      }
    }
    return destination;
  }
  function elimVarUnitProds$isVariableUnitProd(_this__u8e3s4, vars) {
    return get_RHS(_this__u8e3s4).get_size_woubt6_k$() === 1 ? vars.contains_aljjnj_k$(get_RHS(_this__u8e3s4).get_c1px32_k$(0)) : false;
  }
  function transitiveClosure$lambda($from) {
    return function (it) {
      return $from.contains_aljjnj_k$(it.get_label_iuj8p7_k$());
    };
  }
  function generateNonterminalStubs$lambda(it) {
    _init_properties_Normalization_kt__nz9twr();
    return isOrganicNonterminal(get_LHS(it));
  }
  function removeUselessSymbols$lambda($generating, $reachable) {
    return function (_name_for_destructuring_parameter_0__wldtmu) {
      var s = _name_for_destructuring_parameter_0__wldtmu.component1_7eebsc_k$();
      return !$generating.contains_aljjnj_k$(s) ? true : !$reachable.contains_aljjnj_k$(s);
    };
  }
  function elimVarUnitProds$lambda($vars) {
    return function (it) {
      return !elimVarUnitProds$isVariableUnitProd(it, $vars);
    };
  }
  function elimVarUnitProds$lambda_0($toElim) {
    return function (it) {
      return get_RHS(it).get_size_woubt6_k$() === 1 ? get_RHS(it).get_c1px32_k$(0) === $toElim : false;
    };
  }
  function elimVarUnitProds$lambda_1($toElim) {
    return function (it) {
      return get_LHS(it) === $toElim;
    };
  }
  function nullableNonterminals$lambda($nbls) {
    return function (it) {
      return $nbls.containsAll_xk45sd_k$(get_RHS(it));
    };
  }
  function nullableNonterminals$lambda_0($tmp1) {
    return function (it) {
      return $tmp1.containsAll_xk45sd_k$(get_RHS(it));
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
  function _get_choice__ksxcom($this) {
    // Inline function 'kotlin.getValue' call
    var this_0 = $this.choice$delegate_1;
    choice$factory();
    return this_0.get_value_j01efc_k$();
  }
  function decodeString($this, i) {
    if ($this.branches_1.isEmpty_y1axqb_k$())
      return to(contains($this.root_1, '\u03B5') ? '' : $this.root_1, i);
    var tmp0_container = to(i.div_fxyyjd_k$($this.branches_1.get_size_woubt6_k$()), i.mod_y8e6yq_k$(toBigInteger($this.branches_1.get_size_woubt6_k$())));
    var quotient1 = tmp0_container.component1_7eebsc_k$();
    var remainder = tmp0_container.component2_7eebsb_k$();
    var tmp1_container = $this.get_shuffledBranches_qwqnr0_k$().get_c1px32_k$(toInt(remainder.toString()));
    var lb = tmp1_container.component1_7eebsc_k$();
    var rb = tmp1_container.component2_7eebsb_k$();
    var tmp2_container = decodeString(lb, quotient1);
    var l = tmp2_container.component1_7eebsc_k$();
    var quotient2 = tmp2_container.component2_7eebsb_k$();
    var tmp3_container = decodeString(rb, quotient2);
    var r = tmp3_container.component1_7eebsc_k$();
    var quotient3 = tmp3_container.component2_7eebsb_k$();
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(l) === 0) {
      tmp = r;
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(r) === 0) {
        tmp = l;
      } else {
        tmp = l + ' ' + r;
      }
    }
    var concat = tmp;
    return to(concat, quotient3);
  }
  function decodeTree($this, i) {
    if ($this.branches_1.isEmpty_y1axqb_k$())
      return to(new Tree($this.root_1, VOID, []), i);
    var tmp0_container = to(i.div_fxyyjd_k$($this.branches_1.get_size_woubt6_k$()), i.mod_y8e6yq_k$(toBigInteger($this.branches_1.get_size_woubt6_k$())));
    var quotient1 = tmp0_container.component1_7eebsc_k$();
    var remainder = tmp0_container.component2_7eebsb_k$();
    var tmp1_container = $this.get_shuffledBranches_qwqnr0_k$().get_c1px32_k$(toInt(remainder.toString()));
    var lb = tmp1_container.component1_7eebsc_k$();
    var rb = tmp1_container.component2_7eebsb_k$();
    var tmp2_container = decodeTree(lb, quotient1);
    var l = tmp2_container.component1_7eebsc_k$();
    var quotient2 = tmp2_container.component2_7eebsb_k$();
    var tmp3_container = decodeTree(rb, quotient2);
    var r = tmp3_container.component1_7eebsc_k$();
    var quotient3 = tmp3_container.component2_7eebsb_k$();
    var tmp = l.get_root_wott0r_k$();
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [l, r];
    var concat = new Tree(tmp, VOID, tmp$ret$2.slice());
    return to(concat, quotient3);
  }
  function PTree$shuffledBranches$delegate$lambda(this$0) {
    return function () {
      return shuffled(this$0.branches_1);
    };
  }
  function PTree$totalTrees$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.branches_1.isEmpty_y1axqb_k$()) {
        tmp = Companion_getInstance().get_ONE_18jnkz_k$();
      } else {
        // Inline function 'kotlin.collections.reduce' call
        // Inline function 'kotlin.collections.map' call
        var this_0 = this$0.branches_1;
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.PTree.totalTrees$delegate.<anonymous>.<anonymous>' call
          var l = item.component1_7eebsc_k$();
          var r = item.component2_7eebsb_k$();
          var tmp$ret$0 = l.get_totalTrees_w0b4jq_k$().times_wzgsx4_k$(r.get_totalTrees_w0b4jq_k$());
          destination.add_utx5q5_k$(tmp$ret$0);
        }
        var iterator = destination.iterator_jk1svi_k$();
        if (!iterator.hasNext_bitz1p_k$())
          throw UnsupportedOperationException_init_$Create$("Empty collection can't be reduced.");
        var accumulator = iterator.next_20eer_k$();
        while (iterator.hasNext_bitz1p_k$()) {
          // Inline function 'ai.hypergraph.kaliningraph.parsing.PTree.totalTrees$delegate.<anonymous>.<anonymous>' call
          var acc = accumulator;
          var it = iterator.next_20eer_k$();
          accumulator = acc.plus_f4xvv8_k$(it);
        }
        tmp = accumulator;
      }
      return tmp;
    };
  }
  function PTree$depth$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.branches_1.isEmpty_y1axqb_k$()) {
        tmp = 0;
      } else {
        // Inline function 'kotlin.collections.maxOf' call
        var iterator = this$0.branches_1.iterator_jk1svi_k$();
        if (!iterator.hasNext_bitz1p_k$())
          throw NoSuchElementException_init_$Create$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.PTree.depth$delegate.<anonymous>.<anonymous>' call
        var name_for_destructuring_parameter_0_fjsvno = iterator.next_20eer_k$();
        var l = name_for_destructuring_parameter_0_fjsvno.component1_7eebsc_k$();
        var r = name_for_destructuring_parameter_0_fjsvno.component2_7eebsb_k$();
        // Inline function 'kotlin.comparisons.maxOf' call
        var a = l.get_depth_iq7qmy_k$();
        var b = r.get_depth_iq7qmy_k$();
        var maxValue = Math.max(a, b) + 1 | 0;
        while (iterator.hasNext_bitz1p_k$()) {
          // Inline function 'ai.hypergraph.kaliningraph.parsing.PTree.depth$delegate.<anonymous>.<anonymous>' call
          var name_for_destructuring_parameter_0_fjsvno_0 = iterator.next_20eer_k$();
          var l_0 = name_for_destructuring_parameter_0_fjsvno_0.component1_7eebsc_k$();
          var r_0 = name_for_destructuring_parameter_0_fjsvno_0.component2_7eebsb_k$();
          // Inline function 'kotlin.comparisons.maxOf' call
          var a_0 = l_0.get_depth_iq7qmy_k$();
          var b_0 = r_0.get_depth_iq7qmy_k$();
          var v = Math.max(a_0, b_0) + 1 | 0;
          if (compareTo(maxValue, v) < 0) {
            maxValue = v;
          }
        }
        tmp = maxValue;
      }
      return tmp;
    };
  }
  function PTree$choice$delegate$lambda$lambda(_name_for_destructuring_parameter_0__wldtmu) {
    var a = _name_for_destructuring_parameter_0__wldtmu.component1_7eebsc_k$();
    var b = _name_for_destructuring_parameter_0__wldtmu.component2_7eebsb_k$();
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    if (charSequenceLength(a) === 0) {
      tmp = b;
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(b) === 0) {
        tmp = a;
      } else {
        tmp = a + ' ' + b;
      }
    }
    return tmp;
  }
  function PTree$choice$delegate$lambda(this$0) {
    return function () {
      var tmp;
      if (this$0.branches_1.isEmpty_y1axqb_k$()) {
        tmp = listOf_0(contains(this$0.root_1, '\u03B5') ? '' : this$0.root_1);
      } else {
        // Inline function 'kotlin.collections.flatMap' call
        // Inline function 'kotlin.collections.flatMapTo' call
        var this_0 = this$0.get_shuffledBranches_qwqnr0_k$();
        var destination = ArrayList_init_$Create$_0();
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.PTree.choice$delegate.<anonymous>.<anonymous>' call
          var l = element.component1_7eebsc_k$();
          var r = element.component2_7eebsb_k$();
          var tmp_0 = times_3(l.choose_mifmjt_k$(), r.choose_mifmjt_k$());
          var list = map(tmp_0, PTree$choice$delegate$lambda$lambda);
          addAll_0(destination, list);
        }
        tmp = distinct(destination);
      }
      return tmp;
    };
  }
  function PTree$sampleWithoutReplacement$slambda(this$0, resultContinuation) {
    this.this$0__1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(PTree$sampleWithoutReplacement$slambda).invoke_ulduo1_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_w0dkqr_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(PTree$sampleWithoutReplacement$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_ulduo1_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(PTree$sampleWithoutReplacement$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            println('Total trees in PTree: ' + this.this$0__1.get_totalTrees_w0b4jq_k$());
            this.i0__1 = Companion_getInstance().get_ZERO_wodlgx_k$();
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!(this.i0__1.compareTo_m610zm_k$(this.this$0__1.get_totalTrees_w0b4jq_k$()) < 0)) {
              this.set_state_rjd8d0_k$(3);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(2);
            var tmp0 = this.i0__1;
            this.i0__1 = tmp0.inc_28ke_k$();
            suspendResult = this.$this$sequence_1.yield_3xhcex_k$(decodeString(this.this$0__1, tmp0).get_first_irdx8n_k$(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(PTree$sampleWithoutReplacement$slambda).create_w0dkqr_k$ = function ($this$sequence, completion) {
    var i = new PTree$sampleWithoutReplacement$slambda(this.this$0__1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(PTree$sampleWithoutReplacement$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_w0dkqr_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function PTree$sampleWithoutReplacement$slambda_0(this$0, resultContinuation) {
    var i = new PTree$sampleWithoutReplacement$slambda(this$0, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_ulduo1_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function PTree$sampleWithReplacement$lambda(this$0) {
    return function () {
      return this$0.sample_f1lhsm_k$();
    };
  }
  function PTree(root, branches) {
    root = root === VOID ? '\u03B5' : root;
    var tmp;
    if (branches === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = branches;
    }
    branches = tmp;
    this.root_1 = root;
    this.branches_1 = branches;
    var tmp_0 = this;
    tmp_0.shuffledBranches$delegate_1 = lazy(PTree$shuffledBranches$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.totalTrees$delegate_1 = lazy(PTree$totalTrees$delegate$lambda(this));
    var tmp_2 = this;
    tmp_2.depth$delegate_1 = lazy(PTree$depth$delegate$lambda(this));
    var tmp_3 = this;
    tmp_3.choice$delegate_1 = lazy(PTree$choice$delegate$lambda(this));
  }
  protoOf(PTree).get_root_wott0r_k$ = function () {
    return this.root_1;
  };
  protoOf(PTree).get_branches_w82auf_k$ = function () {
    return this.branches_1;
  };
  protoOf(PTree).get_shuffledBranches_qwqnr0_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.shuffledBranches$delegate_1;
    shuffledBranches$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(PTree).get_totalTrees_w0b4jq_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.totalTrees$delegate_1;
    totalTrees$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(PTree).get_depth_iq7qmy_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.depth$delegate_1;
    depth$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(PTree).choose_mifmjt_k$ = function () {
    return asSequence(_get_choice__ksxcom(this));
  };
  protoOf(PTree).sampleWithoutReplacement_yobfjo_k$ = function () {
    return sequence(PTree$sampleWithoutReplacement$slambda_0(this, null));
  };
  protoOf(PTree).sampleWithReplacement_83t9r2_k$ = function () {
    return generateSequence(PTree$sampleWithReplacement$lambda(this));
  };
  protoOf(PTree).sample_f1lhsm_k$ = function () {
    var tmp;
    if (this.branches_1.isEmpty_y1axqb_k$()) {
      tmp = contains(this.root_1, '\u03B5') ? '' : this.root_1;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.random' call
      var this_0 = this.branches_1;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.PTree.sample.<anonymous>' call
      var name_for_destructuring_parameter_0_fjsvno = random(this_0, Default_getInstance());
      var l = name_for_destructuring_parameter_0_fjsvno.component1_7eebsc_k$();
      var r = name_for_destructuring_parameter_0_fjsvno.component2_7eebsb_k$();
      var tmp0_container = to(l.sample_f1lhsm_k$(), r.sample_f1lhsm_k$());
      var a = tmp0_container.component1_7eebsc_k$();
      var b = tmp0_container.component2_7eebsb_k$();
      var tmp_0;
      // Inline function 'kotlin.text.isEmpty' call
      if (charSequenceLength(a) === 0) {
        tmp_0 = b;
      } else {
        // Inline function 'kotlin.text.isEmpty' call
        if (charSequenceLength(b) === 0) {
          tmp_0 = a;
        } else {
          tmp_0 = a + ' ' + b;
        }
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  function initPForestMat(_this__u8e3s4, tokens) {
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(tokens, 10));
    var tmp0_iterator = tokens.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.initPForestMat.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.associateWith' call
      var this_0 = !(item === get_HOLE_MARKER()) ? get_bimap(_this__u8e3s4).get_wshmss_k$(listOf_0(item)) : get_unitNonterminals(_this__u8e3s4);
      var result = LinkedHashMap_init_$Create$_1(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
      // Inline function 'kotlin.collections.associateWithTo' call
      var tmp0_iterator_0 = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.initPForestMat.<anonymous>.<anonymous>' call
        var tmp;
        if (!(item === get_HOLE_MARKER())) {
          tmp = PSingleton(item);
        } else {
          var tmp0_safe_receiver = get_bimap(_this__u8e3s4).get_UNITS_ihjbc6_k$().get_wei43m_k$(element);
          var tmp_0;
          if (tmp0_safe_receiver == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.collections.map' call
            // Inline function 'kotlin.collections.mapTo' call
            var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(tmp0_safe_receiver, 10));
            var tmp0_iterator_1 = tmp0_safe_receiver.iterator_jk1svi_k$();
            while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
              var item_0 = tmp0_iterator_1.next_20eer_k$();
              // Inline function 'ai.hypergraph.kaliningraph.parsing.initPForestMat.<anonymous>.<anonymous>.<anonymous>' call
              var tmp$ret$0 = PSingleton(item_0);
              destination_0.add_utx5q5_k$(tmp$ret$0);
            }
            tmp_0 = destination_0;
          }
          var tmp1_safe_receiver = tmp_0;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : flatten(tmp1_safe_receiver);
          var tmp_1;
          if (tmp2_elvis_lhs == null) {
            // Inline function 'kotlin.collections.listOf' call
            tmp_1 = emptyList();
          } else {
            tmp_1 = tmp2_elvis_lhs;
          }
          tmp = tmp_1;
        }
        var tmp$ret$4 = tmp;
        result.put_4fpzoq_k$(element, tmp$ret$4);
      }
      // Inline function 'kotlin.collections.mapTo' call
      var destination_1 = ArrayList_init_$Create$(result.get_size_woubt6_k$());
      // Inline function 'kotlin.collections.iterator' call
      var tmp0_iterator_2 = result.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
        var item_1 = tmp0_iterator_2.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.initPForestMat.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var k = item_1.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var v = item_1.get_value_j01efc_k$();
        var tmp$ret$10 = to(k, new PTree(k, v));
        destination_1.add_utx5q5_k$(tmp$ret$10);
      }
      var tmp$ret$13 = toMap(destination_1);
      destination.add_utx5q5_k$(tmp$ret$13);
    }
    var tmp_2 = copyToArray(destination);
    var tmp_3 = emptyMap();
    var tmp_4 = initPForestMat$lambda;
    return UTMatrix_init_$Create$(tmp_2, new of_1(tmp_3, VOID, tmp_4, initPForestMat$lambda_0(_this__u8e3s4)));
  }
  function PSingleton(v) {
    return listOf_0(to(new PTree(v), new PTree()));
  }
  function merge(X, Z) {
    // Inline function 'kotlin.collections.associateWith' call
    var this_0 = plus_1(X.get_keys_wop4xp_k$(), Z.get_keys_wop4xp_k$());
    var result = LinkedHashMap_init_$Create$_1(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
    // Inline function 'kotlin.collections.associateWithTo' call
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.merge.<anonymous>' call
      var tmp2_safe_receiver = X.get_wei43m_k$(element);
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.branches_1;
      var tmp;
      if (tmp3_elvis_lhs == null) {
        // Inline function 'kotlin.collections.listOf' call
        tmp = emptyList();
      } else {
        tmp = tmp3_elvis_lhs;
      }
      var tmp_0 = tmp;
      var tmp0_safe_receiver = Z.get_wei43m_k$(element);
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.branches_1;
      var tmp_1;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.collections.listOf' call
        tmp_1 = emptyList();
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var tmp$ret$2 = new PTree(element, plus(tmp_0, tmp_1));
      result.put_4fpzoq_k$(element, tmp$ret$2);
    }
    return result;
  }
  function joinSeq(_this__u8e3s4, X, Z) {
    // Inline function 'kotlin.collections.fold' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = get_bimap(_this__u8e3s4).get_TRIPL_ih22la_k$();
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.joinSeq.<anonymous>' call
      var x = element.component2_7eebsb_k$();
      var z = element.component3_7eebsa_k$();
      var tmp;
      // Inline function 'kotlin.collections.contains' call
      // Inline function 'kotlin.collections.containsKey' call
      if ((isInterface(X, Map) ? X : THROW_CCE()).containsKey_aw81wo_k$(x)) {
        // Inline function 'kotlin.collections.contains' call
        // Inline function 'kotlin.collections.containsKey' call
        tmp = (isInterface(Z, Map) ? Z : THROW_CCE()).containsKey_aw81wo_k$(z);
      } else {
        tmp = false;
      }
      if (tmp) {
        destination.add_utx5q5_k$(element);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
    var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.joinSeq.<anonymous>' call
      var w = item.component1_7eebsc_k$();
      var x_0 = item.component2_7eebsb_k$();
      var z_0 = item.component3_7eebsa_k$();
      var tmp$ret$7 = new PTree(w, listOf_0(to(ensureNotNull(X.get_wei43m_k$(x_0)), ensureNotNull(Z.get_wei43m_k$(z_0)))));
      destination_0.add_utx5q5_k$(tmp$ret$7);
    }
    // Inline function 'kotlin.collections.mapOf' call
    var accumulator = emptyMap();
    var tmp0_iterator_1 = destination_0.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.joinSeq.<anonymous>' call
      var acc = accumulator;
      accumulator = merge(mapOf(to(element_0.root_1, element_0)), acc);
    }
    return accumulator;
  }
  function enumSeq(_this__u8e3s4, tokens) {
    var tmp0_safe_receiver = startPTree(_this__u8e3s4, tokens);
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.sampleWithoutReplacement_yobfjo_k$();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : distinct_0(tmp1_safe_receiver);
    return tmp2_elvis_lhs == null ? sequenceOf([]) : tmp2_elvis_lhs;
  }
  function startPTree(_this__u8e3s4, tokens) {
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.time.measureTimedValue' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.time.measureTimedValue' call
    // Inline function 'kotlin.contracts.contract' call
    var mark = Monotonic_getInstance().markNow_ns2ype_k$();
    // Inline function 'ai.hypergraph.kaliningraph.parsing.startPTree.<anonymous>' call
    var result = last(initPForestMat(_this__u8e3s4, tokens).seekFixpoint$default_gxrghs_k$().get_diagonals_sbpbg5_k$()).get_c1px32_k$(0).get_wei43m_k$(get_START_SYMBOL());
    var this_0 = new TimedValue(result, ValueTimeMark__elapsedNow_impl_eonqvs(mark));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.startPTree.<anonymous>' call
    println('Time to compute parse forest: ' + new Duration(this_0.get_duration_6xjj0z_k$()));
    return this_0.get_value_j01efc_k$();
  }
  function initPForestMat$lambda($this$$receiver, x, y) {
    return merge(x, y);
  }
  function initPForestMat$lambda_0($this_initPForestMat) {
    return function ($this$$receiver, x, y) {
      return joinSeq($this_initPForestMat, x, y);
    };
  }
  function shuffledBranches$factory() {
    return getPropertyCallableRef('shuffledBranches', 1, KProperty1, function (receiver) {
      return receiver.get_shuffledBranches_qwqnr0_k$();
    }, null);
  }
  function totalTrees$factory() {
    return getPropertyCallableRef('totalTrees', 1, KProperty1, function (receiver) {
      return receiver.get_totalTrees_w0b4jq_k$();
    }, null);
  }
  function depth$factory() {
    return getPropertyCallableRef('depth', 1, KProperty1, function (receiver) {
      return receiver.get_depth_iq7qmy_k$();
    }, null);
  }
  function choice$factory() {
    return getPropertyCallableRef('choice', 1, KProperty1, function (receiver) {
      return _get_choice__ksxcom(receiver);
    }, null);
  }
  function get_bitwiseAlgebra(_this__u8e3s4) {
    _init_properties_SetValiant_kt__o4zw83();
    return bitwiseAlgebra$delegate.getValue_4u4kqi_k$(_this__u8e3s4, bitwiseAlgebra$factory());
  }
  var bitwiseAlgebra$delegate;
  function get_satLitAlgebra(_this__u8e3s4) {
    _init_properties_SetValiant_kt__o4zw83();
    return satLitAlgebra$delegate.getValue_4u4kqi_k$(_this__u8e3s4, satLitAlgebra$factory());
  }
  var satLitAlgebra$delegate;
  function get_HOLE_MARKER() {
    _init_properties_SetValiant_kt__o4zw83();
    return HOLE_MARKER;
  }
  var HOLE_MARKER;
  function get_freshNames() {
    _init_properties_SetValiant_kt__o4zw83();
    return freshNames;
  }
  var freshNames;
  function isNonterminalStubIn(_this__u8e3s4, cfg) {
    _init_properties_SetValiant_kt__o4zw83();
    return isNonterminalStub(_this__u8e3s4) ? get_nonterminals(cfg).contains_aljjnj_k$(dropLast(drop(_this__u8e3s4, 1), 1)) : false;
  }
  function stripEscapeChars(_this__u8e3s4, escapeSeq) {
    escapeSeq = escapeSeq === VOID ? '`' : escapeSeq;
    _init_properties_SetValiant_kt__o4zw83();
    return replace(_this__u8e3s4, escapeSeq, '');
  }
  function parseCFG(_this__u8e3s4, normalize, validate_0) {
    normalize = normalize === VOID ? true : normalize;
    validate_0 = validate_0 === VOID ? false : validate_0;
    _init_properties_SetValiant_kt__o4zw83();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = lines(validate_0 ? validate(_this__u8e3s4) : _this__u8e3s4);
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.parseCFG.<anonymous>' call
      if (contains(element, '->')) {
        destination.add_utx5q5_k$(element);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
    var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.parseCFG.<anonymous>' call
      var prod = splitProd(item);
      var tmp;
      if (2 === prod.get_size_woubt6_k$() ? !contains(prod.get_c1px32_k$(0), ' ') : false) {
        tmp = to(prod.get_c1px32_k$(0), tokenizeByWhitespace(prod.get_c1px32_k$(1)));
      } else {
        throw Exception_init_$Create$('Invalid production ' + prod.get_size_woubt6_k$() + ': ' + item);
      }
      var tmp$ret$3 = tmp;
      destination_0.add_utx5q5_k$(tmp$ret$3);
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.parseCFG.<anonymous>' call
    var it = toSet_1(destination_0);
    return normalize ? get_normalForm(it) : it;
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
      tmp_0 = first_0(_this__u8e3s4) === _Char___init__impl__6a9atx(60);
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
  function validate(_this__u8e3s4, presets, tokens, names) {
    presets = presets === VOID ? setOf_0(['|', '->']) : presets;
    var tmp;
    if (tokens === VOID) {
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = tokenizeByWhitespace(_this__u8e3s4);
      var destination = ArrayList_init_$Create$_0();
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.validate.<anonymous>' call
        if (!presets.contains_aljjnj_k$(element)) {
          destination.add_utx5q5_k$(element);
        }
      }
      tmp = asSequence(destination);
    } else {
      tmp = tokens;
    }
    tokens = tmp;
    var tmp_0;
    if (names === VOID) {
      var tmp_1 = get_freshNames();
      tmp_0 = toMap_0(zip_0(filterNot(tmp_1, validate$contains$ref(_this__u8e3s4)), tokens));
    } else {
      tmp_0 = names;
    }
    names = tmp_0;
    _init_properties_SetValiant_kt__o4zw83();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_1 = lines(_this__u8e3s4);
    var destination_0 = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(element_0)) {
        destination_0.add_utx5q5_k$(element_0);
      }
    }
    var tmp_2 = tokenizeByWhitespace(joinToString(destination_0, ' \\n '));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.validate.<anonymous>' call
    var it = joinToString(tmp_2, ' ', VOID, VOID, VOID, VOID, validate$lambda(names));
    var tmp_3;
    if (matches(it, CFGCFG(names.get_values_ksazhn_k$()))) {
      tmp_3 = _this__u8e3s4;
    } else {
      throw Exception_init_$Create$('!CFL: ' + it);
    }
    return tmp_3;
  }
  function matches(_this__u8e3s4, CFG) {
    _init_properties_SetValiant_kt__o4zw83();
    return isValid(CFG, tokenizeByWhitespace(_this__u8e3s4));
  }
  function CFGCFG(names) {
    _init_properties_SetValiant_kt__o4zw83();
    return parseCFG('\n    START -> CFG\n    CFG -> PRD | CFG \\n CFG\n    PRD -> VAR `->` RHS\n    VAR -> ' + joinToString(names, ' | ') + '\n    RHS -> VAR | RHS RHS | RHS `|` RHS\n  ', VOID, false);
  }
  function isValid(_this__u8e3s4, str) {
    _init_properties_SetValiant_kt__o4zw83();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.isValid.<anonymous>' call
    return last(initialUTBMatrix(_this__u8e3s4, pad3(str)).seekFixpoint$default_gxrghs_k$().get_diagonals_sbpbg5_k$()).get_c1px32_k$(0)[get_bindex(_this__u8e3s4).get_51jv09_k$(get_START_SYMBOL())];
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
    var tmp0_iterator = tokens.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTBMatrix.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTBMatrix.<anonymous>.<anonymous>' call
      var nts = bmp.get_wshmss_k$(listOf_0(item));
      var tmp;
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.none' call
        var tmp_0;
        if (isInterface(tokens, Collection)) {
          tmp_0 = tokens.isEmpty_y1axqb_k$();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator_0 = tokens.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator_0.next_20eer_k$();
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
        var tmp0_iterator_1 = nts.iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var item_0 = tmp0_iterator_1.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTBMatrix.<anonymous>.<anonymous>.<anonymous>' call
          var tmp0_elvis_lhs = unitReach.get_wei43m_k$(item_0);
          var tmp$ret$2 = tmp0_elvis_lhs == null ? setOf(item_0) : tmp0_elvis_lhs;
          destination_0.add_utx5q5_k$(tmp$ret$2);
        }
        tmp = toSet_1(flatten(destination_0));
      }
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTBMatrix.<anonymous>.<anonymous>' call
      var nts_0 = tmp;
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(allNTs, 10));
      var tmp0_iterator_2 = allNTs.iterator_jk1svi_k$();
      while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
        var item_1 = tmp0_iterator_2.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTBMatrix.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$7 = nts_0.contains_aljjnj_k$(item_1);
        destination_1.add_utx5q5_k$(tmp$ret$7);
      }
      var tmp$ret$12 = toBooleanArray(destination_1);
      destination.add_utx5q5_k$(tmp$ret$12);
    }
    var tmp$ret$15 = copyToArray(destination);
    return UTMatrix_init_$Create$(tmp$ret$15, get_bitwiseAlgebra(_this__u8e3s4));
  }
  function pad3(_this__u8e3s4) {
    _init_properties_SetValiant_kt__o4zw83();
    return _this__u8e3s4.isEmpty_y1axqb_k$() ? listOf(['\u03B5', '\u03B5', '\u03B5']) : _this__u8e3s4.get_size_woubt6_k$() === 1 ? listOf(['\u03B5', first_1(_this__u8e3s4), '\u03B5']) : _this__u8e3s4;
  }
  function isNonterminalStubInNTs(_this__u8e3s4, nts) {
    _init_properties_SetValiant_kt__o4zw83();
    return isNonterminalStub(_this__u8e3s4) ? nts.contains_aljjnj_k$(dropLast(drop(_this__u8e3s4, 1), 1)) : false;
  }
  function parse(_this__u8e3s4, s) {
    _init_properties_SetValiant_kt__o4zw83();
    var tmp;
    try {
      var tmp$ret$1;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator = parseForest(_this__u8e3s4, s).iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.parse.<anonymous>' call
          if (element.get_root_wott0r_k$() === get_START_SYMBOL()) {
            tmp$ret$1 = element;
            break $l$block;
          }
        }
        tmp$ret$1 = null;
      }
      var tmp0_safe_receiver = tmp$ret$1;
      tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.denormalize_sqp4d0_k$();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Exception) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    return tmp;
  }
  function parseForest(_this__u8e3s4, str) {
    _init_properties_SetValiant_kt__o4zw83();
    return last(solveFixedpoint(_this__u8e3s4, tokenizeByWhitespace(str)).get_c1px32_k$(0));
  }
  function solveFixedpoint(_this__u8e3s4, tokens, utMatrix) {
    utMatrix = utMatrix === VOID ? initialUTMatrix(_this__u8e3s4, tokens) : utMatrix;
    _init_properties_SetValiant_kt__o4zw83();
    return utMatrix.seekFixpoint$default_gxrghs_k$().toFullMatrix_k02fpn_k$();
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
    var tmp0_iterator = tokens.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTMatrix.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var i = checkIndexOverflow(tmp1);
      var tmp;
      if (item === get_HOLE_MARKER()) {
        // Inline function 'kotlin.collections.map' call
        var this_0 = toSet_1(flatten(get_unitReachability(_this__u8e3s4).get_values_ksazhn_k$()));
        // Inline function 'kotlin.collections.mapTo' call
        var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
        var tmp0_iterator_0 = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var item_0 = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTMatrix.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.map' call
          // Inline function 'kotlin.collections.filter' call
          // Inline function 'kotlin.collections.map' call
          // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
          var this_1 = bmp.get_6bo4tg_k$(item_0);
          var predicate = initialUTMatrix$lambda;
          // Inline function 'kotlin.apply' call
          var this_2 = toMutableSet(this_1);
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
          retainAll(this_2, predicate);
          // Inline function 'kotlin.collections.mapTo' call
          var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
          var tmp0_iterator_1 = this_2.iterator_jk1svi_k$();
          while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
            var item_1 = tmp0_iterator_1.next_20eer_k$();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTMatrix.<anonymous>.<anonymous>.<anonymous>' call
            var tmp$ret$2 = first_1(item_1);
            destination_1.add_utx5q5_k$(tmp$ret$2);
          }
          // Inline function 'kotlin.collections.filterTo' call
          var destination_2 = ArrayList_init_$Create$_0();
          var tmp0_iterator_2 = destination_1.iterator_jk1svi_k$();
          while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
            var element = tmp0_iterator_2.next_20eer_k$();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTMatrix.<anonymous>.<anonymous>.<anonymous>' call
            if (get_terminals(_this__u8e3s4).contains_aljjnj_k$(element)) {
              destination_2.add_utx5q5_k$(element);
            }
          }
          // Inline function 'kotlin.collections.mapTo' call
          var destination_3 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_2, 10));
          var tmp0_iterator_3 = destination_2.iterator_jk1svi_k$();
          while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
            var item_2 = tmp0_iterator_3.next_20eer_k$();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTMatrix.<anonymous>.<anonymous>.<anonymous>' call
            var tmp$ret$8 = new Tree(item_0, item_2, [], until(i, i + 1 | 0));
            destination_3.add_utx5q5_k$(tmp$ret$8);
          }
          destination_0.add_utx5q5_k$(destination_3);
        }
        tmp = toSet_1(flatten(destination_0));
      } else {
        // Inline function 'kotlin.collections.map' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTMatrix.<anonymous>.<anonymous>' call
        var nts = bmp.get_wshmss_k$(listOf_0(item));
        var tmp_0;
        var tmp$ret$14;
        $l$block_0: {
          // Inline function 'kotlin.collections.none' call
          var tmp_1;
          if (isInterface(tokens, Collection)) {
            tmp_1 = tokens.isEmpty_y1axqb_k$();
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp$ret$14 = true;
            break $l$block_0;
          }
          var tmp0_iterator_4 = tokens.iterator_jk1svi_k$();
          while (tmp0_iterator_4.hasNext_bitz1p_k$()) {
            var element_0 = tmp0_iterator_4.next_20eer_k$();
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
          var tmp0_iterator_5 = nts.iterator_jk1svi_k$();
          while (tmp0_iterator_5.hasNext_bitz1p_k$()) {
            var item_3 = tmp0_iterator_5.next_20eer_k$();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTMatrix.<anonymous>.<anonymous>.<anonymous>' call
            var tmp0_elvis_lhs = unitReach.get_wei43m_k$(item_3);
            var tmp$ret$16 = tmp0_elvis_lhs == null ? setOf(item_3) : tmp0_elvis_lhs;
            destination_4.add_utx5q5_k$(tmp$ret$16);
          }
          tmp_0 = toSet_1(flatten(destination_4));
        }
        var this_3 = tmp_0;
        // Inline function 'kotlin.collections.mapTo' call
        var destination_5 = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
        var tmp0_iterator_6 = this_3.iterator_jk1svi_k$();
        while (tmp0_iterator_6.hasNext_bitz1p_k$()) {
          var item_4 = tmp0_iterator_6.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.initialUTMatrix.<anonymous>.<anonymous>' call
          var tmp$ret$21 = new Tree(item_4, item, [], until(i, i + 1 | 0));
          destination_5.add_utx5q5_k$(tmp$ret$21);
        }
        tmp = toSet_1(destination_5);
      }
      var tmp$ret$24 = tmp;
      destination.add_utx5q5_k$(tmp$ret$24);
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
    var this_0 = times_4(left, right);
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.treeJoin.<anonymous>' call
      var lt = element.component1_7eebsc_k$();
      var rt = element.component2_7eebsb_k$();
      // Inline function 'kotlin.collections.map' call
      var this_1 = get_bimap(_this__u8e3s4).get_wshmss_k$(listOf([lt.get_root_wott0r_k$(), rt.get_root_wott0r_k$()]));
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.treeJoin.<anonymous>.<anonymous>' call
        var tmp$ret$0 = new Tree(item, null, [lt, rt]);
        destination_0.add_utx5q5_k$(tmp$ret$0);
      }
      var list = destination_0;
      addAll(destination, list);
    }
    return toSet_1(destination);
  }
  function isHoleTokenIn(_this__u8e3s4, cfg) {
    _init_properties_SetValiant_kt__o4zw83();
    return containsHole(_this__u8e3s4) ? true : isNonterminalStubIn(_this__u8e3s4, cfg);
  }
  function parseInvalidWithMaximalFragments(_this__u8e3s4, s) {
    _init_properties_SetValiant_kt__o4zw83();
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.collections.fold' call
    var this_0 = parseWithStubs(_this__u8e3s4, s).get_second_jf7fjx_k$();
    // Inline function 'kotlin.collections.setOf' call
    var accumulator = emptySet();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.parseInvalidWithMaximalFragments.<anonymous>' call
      var acc = accumulator;
      var tmp;
      var tmp$ret$1;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var tmp_0;
        if (isInterface(acc, Collection)) {
          tmp_0 = acc.isEmpty_y1axqb_k$();
        } else {
          tmp_0 = false;
        }
        if (tmp_0) {
          tmp$ret$1 = false;
          break $l$block_0;
        }
        var tmp0_iterator_0 = acc.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.parseInvalidWithMaximalFragments.<anonymous>.<anonymous>' call
          if (isStrictSubsetOf(element.get_span_wouger_k$(), element_0.get_span_wouger_k$())) {
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
    var tmp$ret$5 = new sam$kotlin_Comparator$0_0(tmp_1);
    return sortedWith(this_1, tmp$ret$5);
  }
  function containsHole(_this__u8e3s4) {
    _init_properties_SetValiant_kt__o4zw83();
    return contains(_this__u8e3s4, get_HOLE_MARKER());
  }
  function parseWithStubs(_this__u8e3s4, s) {
    _init_properties_SetValiant_kt__o4zw83();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.parseWithStubs.<anonymous>' call
    var it = asReversed(toUTMatrix(solveFixedpoint(_this__u8e3s4, tokenizeByWhitespace(s))).get_diagonals_sbpbg5_k$());
    // Inline function 'kotlin.collections.map' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
    var this_0 = it.get_c1px32_k$(0).get_c1px32_k$(0);
    var predicate = parseWithStubs$lambda;
    // Inline function 'kotlin.apply' call
    var this_1 = toMutableSet(this_0);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
    retainAll(this_1, predicate);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.parseWithStubs.<anonymous>.<anonymous>' call
      var tmp$ret$2 = item.denormalize_sqp4d0_k$();
      destination.add_utx5q5_k$(tmp$ret$2);
    }
    var tmp = toSet_1(destination);
    // Inline function 'kotlin.collections.map' call
    var this_2 = flatten(flatten(it));
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
    var tmp0_iterator_0 = this_2.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.parseWithStubs.<anonymous>.<anonymous>' call
      var tmp$ret$5 = item_0.denormalize_sqp4d0_k$();
      destination_0.add_utx5q5_k$(tmp$ret$5);
    }
    return to(tmp, destination_0);
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  function validate$contains(receiver, p0) {
    return contains(receiver, p0);
  }
  function bitwiseAlgebra$delegate$lambda($this$cache) {
    _init_properties_SetValiant_kt__o4zw83();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.bitwiseAlgebra$delegate.<anonymous>.<anonymous>' call
    var it = get_vindex($this$cache);
    var tmp = 0;
    var tmp_0 = get_nonterminals($this$cache).get_size_woubt6_k$();
    var tmp_1 = booleanArray(tmp_0);
    while (tmp < tmp_0) {
      tmp_1[tmp] = false;
      tmp = tmp + 1 | 0;
    }
    var tmp_2 = bitwiseAlgebra$delegate$lambda$lambda;
    return new of_1(tmp_1, VOID, tmp_2, bitwiseAlgebra$delegate$lambda$lambda_0(it));
  }
  function bitwiseAlgebra$delegate$lambda$lambda($this$$receiver, x, y) {
    _init_properties_SetValiant_kt__o4zw83();
    return union_0(x, y);
  }
  function bitwiseAlgebra$delegate$lambda$lambda_0($it) {
    return function ($this$$receiver, x, y) {
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
    var tmp_0 = get_nonterminals($this$cache).get_size_woubt6_k$();
    var tmp_1 = booleanArray(tmp_0);
    while (tmp < tmp_0) {
      tmp_1[tmp] = false;
      tmp = tmp + 1 | 0;
    }
    var tmp_2 = satLitAlgebra$delegate$lambda$lambda;
    return new of_1(tmp_1, VOID, tmp_2, satLitAlgebra$delegate$lambda$lambda_0(it));
  }
  function satLitAlgebra$delegate$lambda$lambda($this$$receiver, x, y) {
    _init_properties_SetValiant_kt__o4zw83();
    return maybeUnion(x, y);
  }
  function satLitAlgebra$delegate$lambda$lambda_0($it) {
    return function ($this$$receiver, x, y) {
      return maybeJoin($it, x, y);
    };
  }
  function freshNames$lambda(it) {
    _init_properties_SetValiant_kt__o4zw83();
    return toString_0(it.value_1);
  }
  function freshNames$lambda_0(_name_for_destructuring_parameter_0__wldtmu) {
    _init_properties_SetValiant_kt__o4zw83();
    var a = _name_for_destructuring_parameter_0__wldtmu.component1_7eebsc_k$();
    var b = _name_for_destructuring_parameter_0__wldtmu.component2_7eebsb_k$();
    return a + b;
  }
  function freshNames$lambda_1(it) {
    _init_properties_SetValiant_kt__o4zw83();
    return !(it === get_START_SYMBOL());
  }
  function validate$contains$ref($boundThis) {
    return function (p0) {
      return validate$contains($boundThis, p0);
    };
  }
  function validate$lambda($names) {
    return function (it) {
      var tmp0_elvis_lhs = $names.get_wei43m_k$(it);
      return tmp0_elvis_lhs == null ? it : tmp0_elvis_lhs;
    };
  }
  function initialUTMatrix$lambda(it) {
    _init_properties_SetValiant_kt__o4zw83();
    return it.get_size_woubt6_k$() === 1;
  }
  function makeForestAlgebra$lambda($this$$receiver, x, y) {
    _init_properties_SetValiant_kt__o4zw83();
    return union(x, y);
  }
  function makeForestAlgebra$lambda_0($this_makeForestAlgebra) {
    return function ($this$$receiver, x, y) {
      return treeJoin($this_makeForestAlgebra, x, y);
    };
  }
  function parseInvalidWithMaximalFragments$lambda(a, b) {
    _init_properties_SetValiant_kt__o4zw83();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.parseInvalidWithMaximalFragments.<anonymous>' call
    var tmp = a.get_span_wouger_k$().get_first_irdx8n_k$();
    // Inline function 'ai.hypergraph.kaliningraph.parsing.parseInvalidWithMaximalFragments.<anonymous>' call
    var tmp$ret$1 = b.get_span_wouger_k$().get_first_irdx8n_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function parseWithStubs$lambda(it) {
    _init_properties_SetValiant_kt__o4zw83();
    return it.get_root_wott0r_k$() === get_START_SYMBOL();
  }
  function bitwiseAlgebra$factory() {
    return getPropertyCallableRef('bitwiseAlgebra', 1, KProperty1, function (receiver) {
      return get_bitwiseAlgebra(receiver);
    }, null);
  }
  function satLitAlgebra$factory() {
    return getPropertyCallableRef('satLitAlgebra', 1, KProperty1, function (receiver) {
      return get_satLitAlgebra(receiver);
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
      var tmp_0 = times_3(it, it);
      var tmp_1 = plus_4(it, map(tmp_0, freshNames$lambda_0));
      freshNames = filter(tmp_1, freshNames$lambda_1);
    }
  }
  function set_MAX_SORT_CAPACITY(_set____db54di) {
    MAX_SORT_CAPACITY = _set____db54di;
  }
  function get_MAX_SORT_CAPACITY() {
    return MAX_SORT_CAPACITY;
  }
  var MAX_SORT_CAPACITY;
  function set_MAX_SAMPLE(_set____db54di) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    MAX_SAMPLE = _set____db54di;
  }
  function get_MAX_SAMPLE() {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return MAX_SAMPLE;
  }
  var MAX_SAMPLE;
  function set_MAX_TOKENS(_set____db54di) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    MAX_TOKENS = _set____db54di;
  }
  function get_MAX_TOKENS() {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return MAX_TOKENS;
  }
  var MAX_TOKENS;
  function set_TIMEOUT_MS(_set____db54di) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    TIMEOUT_MS = _set____db54di;
  }
  function get_TIMEOUT_MS() {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return TIMEOUT_MS;
  }
  var TIMEOUT_MS;
  function set_MAX_REPAIR(_set____db54di) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    MAX_REPAIR = _set____db54di;
  }
  function get_MAX_REPAIR() {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return MAX_REPAIR;
  }
  var MAX_REPAIR;
  function get_blocked(_this__u8e3s4) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return blocked$delegate.getValue_4u4kqi_k$(_this__u8e3s4, blocked$factory());
  }
  var blocked$delegate;
  function get_impossibleBigrams(_this__u8e3s4) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return impossibleBigrams$delegate.getValue_4u4kqi_k$(_this__u8e3s4, impossibleBigrams$factory());
  }
  var impossibleBigrams$delegate;
  function get_possibleBigrams(_this__u8e3s4) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return possibleBigrams$delegate.getValue_4u4kqi_k$(_this__u8e3s4, possibleBigrams$factory());
  }
  var possibleBigrams$delegate;
  function get_startSymbols(_this__u8e3s4) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return startSymbols$delegate.getValue_4u4kqi_k$(_this__u8e3s4, startSymbols$factory());
  }
  var startSymbols$delegate;
  function tokenizeByWhitespace(_this__u8e3s4) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.text.split' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_0 = Regex_init_$Create$('\\s+').split_p7ck23_k$(_this__u8e3s4, 0);
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.tokenizeByWhitespace.<anonymous>' call
      // Inline function 'kotlin.text.isNotBlank' call
      if (!isBlank(element)) {
        destination.add_utx5q5_k$(element);
      }
    }
    return destination;
  }
  function repair(prompt, cfg, coarsen, uncoarsen, synthesizer, updateProgress, filter_0, diagnostic, score, variations) {
    var tmp;
    if (coarsen === VOID) {
      tmp = repair$lambda;
    } else {
      tmp = coarsen;
    }
    coarsen = tmp;
    var tmp_0;
    if (uncoarsen === VOID) {
      tmp_0 = repair$lambda_0;
    } else {
      tmp_0 = uncoarsen;
    }
    uncoarsen = tmp_0;
    var tmp_1;
    if (updateProgress === VOID) {
      tmp_1 = repair$lambda_1;
    } else {
      tmp_1 = updateProgress;
    }
    updateProgress = tmp_1;
    filter_0 = filter_0 === VOID ? null : filter_0;
    diagnostic = diagnostic === VOID ? null : diagnostic;
    var tmp_2;
    if (score === VOID) {
      tmp_2 = repair$lambda_2(prompt);
    } else {
      tmp_2 = score;
    }
    score = tmp_2;
    var tmp_3;
    if (variations === VOID) {
      var tmp_4 = repair$lambda_3;
      var tmp_5 = repair$lambda_4;
      var tmp_6 = repair$lambda_5;
      tmp_3 = listOf([tmp_4, tmp_5, tmp_6, repair$lambda_6]);
    } else {
      tmp_3 = variations;
    }
    variations = tmp_3;
    _init_properties_SyntaxRepair_kt__jnbhn4();
    var coarsened = coarsen(prompt);
    println('Repairing: ' + prompt + (!(coarsened === prompt) ? '\nCoarsened: ' + coarsened : ''));
    var tokens = tokenizeByWhitespace(coarsened);
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(tokens, 10));
    var tmp0_iterator = tokens.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.repair.<anonymous>' call
      var tmp$ret$0 = get_terminals(cfg).contains_aljjnj_k$(item) ? item : get_HOLE_MARKER();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var tokensWithHoles = destination;
    var sanitized = joinToString(tokensWithHoles, ' ');
    var totalSamples = {_v: 0};
    var t = Monotonic_getInstance().markNow_ns2ype_k$();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.also' call
    // Inline function 'kotlin.collections.sortedBy' call
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.let' call
    var tmp_7 = synthesizeWithVariations(sanitized, cfg, false, VOID, variations, repair$lambda_7(t), updateProgress, synthesizer);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.repair.<anonymous>' call
    var it = map(tmp_7, repair$lambda_8(totalSamples, uncoarsen, prompt));
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.repair.<anonymous>' call
    var it_0 = !(filter_0 == null) ? filter(it, filter_0) : it;
    var tmp_8;
    if (!(diagnostic == null)) {
      tmp_8 = onEach(it_0, repair$lambda_9(diagnostic));
    } else {
      tmp_8 = it_0;
    }
    var tmp_9 = tmp_8;
    var this_0 = toList_1(take(map(tmp_9, repair$lambda_10(score)), get_MAX_SAMPLE()));
    // Inline function 'kotlin.comparisons.compareBy' call
    var tmp_10 = repair$lambda_11;
    var tmp$ret$7 = new sam$kotlin_Comparator$0_1(tmp_10);
    var this_1 = sortedWith(this_0, tmp$ret$7);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.repair.<anonymous>' call
    var tmp0_safe_receiver = firstOrNull_0(this_1);
    println('Best score: (' + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_second_jf7fjx_k$()) + ')');
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
    var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.repair.<anonymous>' call
      // Inline function 'kotlin.text.trim' call
      var this_2 = item_0.get_first_irdx8n_k$();
      var tmp$ret$11 = toString(trim(isCharSequence(this_2) ? this_2 : THROW_CCE()));
      destination_0.add_utx5q5_k$(tmp$ret$11);
    }
    var repairs = destination_0;
    if (!(filter_0 == null)) {
      println('Filtered out ' + (totalSamples._v - repairs.get_size_woubt6_k$() | 0) + '/' + totalSamples._v + ' invalid samples!');
    }
    return repairs;
  }
  function randomInsertions(_this__u8e3s4, tokens, numberOfEdits) {
    tokens = tokens === VOID ? plus_3(tokenizeByWhitespace(_this__u8e3s4), '') : tokens;
    numberOfEdits = numberOfEdits === VOID ? 1 : numberOfEdits;
    _init_properties_SyntaxRepair_kt__jnbhn4();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.randomInsertions.<anonymous>' call
    var sortedIndices = toSet_1(get_indices(tokens));
    var tmp = asSequence(numberRangeToNumber(1, numberOfEdits));
    var tmp_0 = flatMap(tmp, randomInsertions$lambda(sortedIndices));
    return map(tmp_0, randomInsertions$lambda_0(tokens));
  }
  function randomDeletions(_this__u8e3s4, exclusions, tokens, numberOfEdits) {
    tokens = tokens === VOID ? plus_3(tokenizeByWhitespace(_this__u8e3s4), '') : tokens;
    numberOfEdits = numberOfEdits === VOID ? 1 : numberOfEdits;
    _init_properties_SyntaxRepair_kt__jnbhn4();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var this_0 = toSet_1(get_indices(tokens));
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.randomDeletions.<anonymous>' call
      if (!exclusions.contains_aljjnj_k$(element)) {
        destination.add_utx5q5_k$(element);
      }
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.randomDeletions.<anonymous>' call
    var tmp = asSequence(numberRangeToNumber(1, numberOfEdits));
    var tmp_0 = flatMap(tmp, randomDeletions$lambda(destination));
    return map(tmp_0, randomDeletions$lambda_0(tokens));
  }
  function randomSingleSubtitutions(_this__u8e3s4, tokens, numberOfEdits, exclusions) {
    tokens = tokens === VOID ? tokenizeByWhitespace(_this__u8e3s4) : tokens;
    numberOfEdits = numberOfEdits === VOID ? 1 : numberOfEdits;
    var tmp;
    if (exclusions === VOID) {
      // Inline function 'kotlin.collections.setOf' call
      tmp = emptySet();
    } else {
      tmp = exclusions;
    }
    exclusions = tmp;
    _init_properties_SyntaxRepair_kt__jnbhn4();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.randomSingleSubtitutions.<anonymous>' call
    var sortedIndices = toSet_1(get_indices(tokens));
    var tmp_0 = asSequence(numberRangeToNumber(1, numberOfEdits));
    var tmp_1 = flatMap(tmp_0, randomSingleSubtitutions$lambda(sortedIndices));
    return map(tmp_1, randomSingleSubtitutions$lambda_0(tokens, exclusions));
  }
  function randomDoubleSubstitutions(_this__u8e3s4, tokens, padded, numberOfEdits, exclusions, shiftedExclusions) {
    tokens = tokens === VOID ? tokenizeByWhitespace(_this__u8e3s4) : tokens;
    var tmp;
    if (padded === VOID) {
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = tokens;
      var tmp$ret$0 = copyToArray(this_0);
      tmp = listOf(arrayConcat([[''], tmp$ret$0, ['']]));
    } else {
      tmp = padded;
    }
    padded = tmp;
    var tmp_0;
    if (numberOfEdits === VOID) {
      // Inline function 'kotlin.comparisons.minOf' call
      var b = tokens.get_size_woubt6_k$();
      tmp_0 = Math.min(2, b);
    } else {
      tmp_0 = numberOfEdits;
    }
    numberOfEdits = tmp_0;
    var tmp_1;
    if (exclusions === VOID) {
      // Inline function 'kotlin.collections.setOf' call
      tmp_1 = emptySet();
    } else {
      tmp_1 = exclusions;
    }
    exclusions = tmp_1;
    var tmp_2;
    if (shiftedExclusions === VOID) {
      // Inline function 'kotlin.collections.map' call
      var this_1 = exclusions;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.randomDoubleSubstitutions.<anonymous>' call
        var tmp$ret$0_0 = item + 1 | 0;
        destination.add_utx5q5_k$(tmp$ret$0_0);
      }
      tmp_2 = toSet_1(destination);
    } else {
      tmp_2 = shiftedExclusions;
    }
    shiftedExclusions = tmp_2;
    _init_properties_SyntaxRepair_kt__jnbhn4();
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.randomDoubleSubstitutions.<anonymous>' call
    var sortedIndices = toSet_1(get_indices(padded));
    var tmp_3 = asSequence(numberRangeToNumber(1, numberOfEdits));
    var tmp_4 = flatMap(tmp_3, randomDoubleSubstitutions$lambda(sortedIndices));
    return map(tmp_4, randomDoubleSubstitutions$lambda_0(padded, shiftedExclusions));
  }
  function synthesizeWithVariations(_this__u8e3s4, cfg, allowNTs, enablePruning, variations, takeMoreWhile, updateProgress, synthesizer) {
    allowNTs = allowNTs === VOID ? true : allowNTs;
    enablePruning = enablePruning === VOID ? false : enablePruning;
    var tmp;
    if (variations === VOID) {
      tmp = listOf_0(synthesizeWithVariations$lambda);
    } else {
      tmp = variations;
    }
    variations = tmp;
    var tmp_0;
    if (takeMoreWhile === VOID) {
      tmp_0 = synthesizeWithVariations$lambda_0;
    } else {
      tmp_0 = takeMoreWhile;
    }
    takeMoreWhile = tmp_0;
    var tmp_1;
    if (updateProgress === VOID) {
      tmp_1 = synthesizeWithVariations$lambda_1;
    } else {
      tmp_1 = updateProgress;
    }
    updateProgress = tmp_1;
    _init_properties_SyntaxRepair_kt__jnbhn4();
    var cfg_ = freeze(!allowNTs ? get_noNonterminalStubs(cfg) : cfg);
    var tmp_2;
    if (enablePruning) {
      tmp_2 = prune(cfg_, _this__u8e3s4);
    } else {
      // Inline function 'kotlin.collections.mutableListOf' call
      var tmp$ret$0 = ArrayList_init_$Create$_0();
      tmp_2 = to(_this__u8e3s4, tmp$ret$0);
    }
    var tmp0_container = tmp_2;
    var stringToSolve = tmp0_container.component1_7eebsc_k$();
    var reconstructor = tmp0_container.component2_7eebsb_k$();
    if (!(_this__u8e3s4 === stringToSolve)) {
      println('Before pruning: ' + _this__u8e3s4 + '\nAfter pruning: ' + stringToSolve);
    }
    var tokens = tokenizeByWhitespace(stringToSolve);
    if (get_MAX_TOKENS() < tokens.get_size_woubt6_k$()) {
      // Inline function 'kotlin.also' call
      var this_0 = sequenceOf([]);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.synthesizeWithVariations.<anonymous>' call
      println('Too many tokens: ' + stringToSolve);
      return this_0;
    }
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(reconstructor, 10));
    var tmp0_iterator = reconstructor.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.synthesizeWithVariations.<anonymous>' call
      var tmp$ret$2 = item.get_first_irdx8n_k$();
      destination.add_utx5q5_k$(tmp$ret$2);
    }
    var recStubs = toSet_1(destination);
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var this_1 = get_indices(tokens);
    var destination_0 = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.synthesizeWithVariations.<anonymous>' call
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.synthesizeWithVariations.<anonymous>.<anonymous>' call
      var it = tokens.get_c1px32_k$(element);
      if (get_blocked(cfg_).contains_aljjnj_k$(it) ? true : recStubs.contains_aljjnj_k$(it)) {
        destination_0.add_utx5q5_k$(element);
      }
    }
    var exclude = toSet_1(destination_0);
    // Inline function 'kotlin.collections.fold' call
    var accumulator = sequenceOf([stringToSolve]);
    var tmp0_iterator_1 = variations.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.synthesizeWithVariations.<anonymous>' call
      var a = accumulator;
      accumulator = plus_4(a, element_0(stringToSolve, exclude));
    }
    var tmp$ret$11 = accumulator;
    var allVariants = distinct_0(tmp$ret$11);
    var tmp_3 = filter(allVariants, synthesizeWithVariations$lambda_2(cfg));
    var tmp_4 = onEach(tmp_3, synthesizeWithVariations$lambda_3(updateProgress));
    var tmp_5 = flatMap(tmp_4, synthesizeWithVariations$lambda_4(cfg_, synthesizer));
    var tmp_6 = distinct_0(takeWhile(tmp_5, synthesizeWithVariations$lambda_5(takeMoreWhile)));
    return map(tmp_6, synthesizeWithVariations$lambda_6(reconstructor, cfg_));
  }
  function substitute(_this__u8e3s4, idxs, sub) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    // Inline function 'kotlin.text.trim' call
    // Inline function 'kotlin.collections.mapIndexed' call
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var index = 0;
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.substitute.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var i = checkIndexOverflow(tmp1);
      var tmp$ret$0 = !idxs.contains_aljjnj_k$(i) ? item : sub(item, i);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var this_0 = joinToString(destination, ' ');
    return toString(trim(isCharSequence(this_0) ? this_0 : THROW_CCE()));
  }
  function prune(_this__u8e3s4, string, minimumWidth, reconstructor) {
    minimumWidth = minimumWidth === VOID ? 4 : minimumWidth;
    var tmp;
    if (reconstructor === VOID) {
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.filterTo' call
      var this_0 = tokenizeByWhitespace(string);
      var destination = ArrayList_init_$Create$_0();
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.prune.<anonymous>' call
        if (isNonterminalStubIn(element, _this__u8e3s4)) {
          destination.add_utx5q5_k$(element);
        }
      }
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(destination, 10));
      var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.prune.<anonymous>' call
        var tmp$ret$3 = to(item, item);
        destination_0.add_utx5q5_k$(tmp$ret$3);
      }
      tmp = toMutableList(destination_0);
    } else {
      tmp = reconstructor;
    }
    reconstructor = tmp;
    _init_properties_SyntaxRepair_kt__jnbhn4();
    var tokens = tokenizeByWhitespace(string);
    var stubs = parseInvalidWithMaximalFragments(_this__u8e3s4, string);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_1 = ArrayList_init_$Create$_0();
    var tmp0_iterator_1 = stubs.iterator_jk1svi_k$();
    while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_1.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.prune.<anonymous>' call
      if (ensureNotNull(get_unitReachability(_this__u8e3s4).get_wei43m_k$(element_0.get_root_wott0r_k$())).contains_aljjnj_k$('START')) {
        destination_1.add_utx5q5_k$(element_0);
      }
    }
    // Inline function 'kotlin.collections.mapTo' call
    var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_1, 10));
    var tmp0_iterator_2 = destination_1.iterator_jk1svi_k$();
    while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
      var item_0 = tmp0_iterator_2.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.prune.<anonymous>' call
      var tmp$ret$9 = to(item_0.get_span_wouger_k$(), item_0);
      destination_2.add_utx5q5_k$(tmp$ret$9);
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.prune.<anonymous>' call
    var tmp0_container = unzip(destination_2);
    var spans = tmp0_container.component1_7eebsc_k$();
    var trees = tmp0_container.component2_7eebsb_k$();
    // Inline function 'kotlin.collections.filter' call
    // Inline function 'kotlin.collections.filterTo' call
    var destination_3 = ArrayList_init_$Create$_0();
    var tmp0_iterator_3 = trees.iterator_jk1svi_k$();
    while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
      var element_1 = tmp0_iterator_3.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.parsing.prune.<anonymous>.<anonymous>' call
      var tmp_0;
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.prune.<anonymous>.<anonymous>.<anonymous>' call
      var $this$run = element_1.get_span_wouger_k$();
      if (minimumWidth < ($this$run.get_last_wopotb_k$() - $this$run.get_first_irdx8n_k$() | 0)) {
        var tmp$ret$17;
        $l$block_0: {
          // Inline function 'kotlin.collections.none' call
          // Inline function 'kotlin.collections.filter' call
          // Inline function 'kotlin.collections.filterTo' call
          var destination_4 = ArrayList_init_$Create$_0();
          var tmp0_iterator_4 = spans.iterator_jk1svi_k$();
          while (tmp0_iterator_4.hasNext_bitz1p_k$()) {
            var element_2 = tmp0_iterator_4.next_20eer_k$();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.prune.<anonymous>.<anonymous>.<anonymous>' call
            if (!element_2.equals(element_1.get_span_wouger_k$())) {
              destination_4.add_utx5q5_k$(element_2);
            }
          }
          var tmp_1;
          if (isInterface(destination_4, Collection)) {
            tmp_1 = destination_4.isEmpty_y1axqb_k$();
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp$ret$17 = true;
            break $l$block_0;
          }
          var tmp0_iterator_5 = destination_4.iterator_jk1svi_k$();
          while (tmp0_iterator_5.hasNext_bitz1p_k$()) {
            var element_3 = tmp0_iterator_5.next_20eer_k$();
            // Inline function 'ai.hypergraph.kaliningraph.parsing.prune.<anonymous>.<anonymous>.<anonymous>' call
            // Inline function 'kotlin.collections.isNotEmpty' call
            if (!intersect(element_1.get_span_wouger_k$(), element_3).isEmpty_y1axqb_k$()) {
              tmp$ret$17 = false;
              break $l$block_0;
            }
          }
          tmp$ret$17 = true;
        }
        tmp_0 = tmp$ret$17;
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        destination_3.add_utx5q5_k$(element_1);
      }
    }
    var treesToBeChopped = destination_3;
    var totalPruned = 0;
    var previousNonterminals = 0;
    // Inline function 'kotlin.collections.mapNotNull' call
    // Inline function 'kotlin.collections.mapNotNullTo' call
    var this_1 = get_indices(tokens);
    var destination_5 = ArrayList_init_$Create$_0();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_6 = this_1.iterator_jk1svi_k$();
    while (tmp0_iterator_6.hasNext_bitz1p_k$()) {
      var element_4 = tmp0_iterator_6.next_20eer_k$();
      // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.prune.<anonymous>' call
      var tmp$ret$26;
      $l$block_1: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_7 = treesToBeChopped.iterator_jk1svi_k$();
        while (tmp0_iterator_7.hasNext_bitz1p_k$()) {
          var element_5 = tmp0_iterator_7.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.prune.<anonymous>.<anonymous>' call
          var progression = element_5.get_span_wouger_k$();
          var containsLower = progression.get_first_irdx8n_k$();
          if (element_4 <= progression.get_last_wopotb_k$() ? containsLower <= element_4 : false) {
            tmp$ret$26 = element_5;
            break $l$block_1;
          }
        }
        tmp$ret$26 = null;
      }
      var possibleTree = tmp$ret$26;
      var tmp_2;
      if (!(possibleTree == null)) {
        var tmp_3;
        if (element_4 === possibleTree.get_span_wouger_k$().get_first_irdx8n_k$()) {
          // Inline function 'kotlin.also' call
          var this_2 = '<' + possibleTree.get_root_wott0r_k$() + '>';
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'ai.hypergraph.kaliningraph.parsing.prune.<anonymous>.<anonymous>' call
          var tmp0_container_0 = to(this_2, possibleTree.contents_9drobq_k$());
          var a = tmp0_container_0.component1_7eebsc_k$();
          var b = tmp0_container_0.component2_7eebsb_k$();
          println('Reduced: ' + b + ' => ' + a);
          var tmp1 = previousNonterminals;
          previousNonterminals = tmp1 + 1 | 0;
          reconstructor.add_dl6gt3_k$(tmp1, to(a, b));
          tmp_3 = this_2;
        } else {
          totalPruned = totalPruned + 1 | 0;
          tmp_3 = null;
        }
        tmp_2 = tmp_3;
      } else {
        // Inline function 'kotlin.also' call
        var this_3 = tokens.get_c1px32_k$(element_4);
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'ai.hypergraph.kaliningraph.parsing.prune.<anonymous>.<anonymous>' call
        if (isNonterminalStubIn(this_3, _this__u8e3s4)) {
          previousNonterminals = previousNonterminals + 1 | 0;
        }
        tmp_2 = this_3;
      }
      var tmp0_safe_receiver = tmp_2;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.contracts.contract' call
        destination_5.add_utx5q5_k$(tmp0_safe_receiver);
      }
    }
    var prunedString = joinToString(destination_5, ' ');
    println('Pruned ' + totalPruned + ' tokens in total');
    return totalPruned === 0 ? to(string, reconstructor) : prune(_this__u8e3s4, prunedString, minimumWidth, reconstructor);
  }
  function sam$kotlin_Comparator$0_1(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_1).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
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
  function repair$lambda($this$null) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return $this$null;
  }
  function repair$lambda_0($this$null, it) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return $this$null;
  }
  function repair$lambda_1(it) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return Unit_getInstance();
  }
  function repair$lambda_2($prompt) {
    return function (it) {
      return levenshtein(it, $prompt);
    };
  }
  function repair$lambda_3(a, b) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return randomInsertions(a);
  }
  function repair$lambda_4(a, b) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return randomDeletions(a, b);
  }
  function repair$lambda_5(a, b) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return randomSingleSubtitutions(a, VOID, VOID, b);
  }
  function repair$lambda_6(a, b) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return randomDoubleSubstitutions(a, VOID, VOID, get_MAX_REPAIR(), b);
  }
  function repair$lambda_7($t) {
    return function () {
      return _Duration___get_inWholeMilliseconds__impl__msfiry(ValueTimeMark__elapsedNow_impl_eonqvs($t)).compareTo_9jj042_k$(toLong(get_TIMEOUT_MS())) < 0;
    };
  }
  function repair$lambda_8($totalSamples, $uncoarsen, $prompt) {
    return function (it) {
      var tmp0 = $totalSamples._v;
      $totalSamples._v = tmp0 + 1 | 0;
      return $uncoarsen(it, $prompt);
    };
  }
  function repair$lambda_9($diagnostic) {
    return function (it) {
      $diagnostic(it);
      return Unit_getInstance();
    };
  }
  function repair$lambda_10($score) {
    return function (it) {
      return to(it, $score(it));
    };
  }
  function repair$lambda_11(a, b) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'ai.hypergraph.kaliningraph.parsing.repair.<anonymous>' call
    var tmp = a.get_second_jf7fjx_k$();
    // Inline function 'ai.hypergraph.kaliningraph.parsing.repair.<anonymous>' call
    var tmp$ret$1 = b.get_second_jf7fjx_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function randomInsertions$lambda$lambda($k, $asArray) {
    return function (it) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = decodeCombo(it, $k);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.sampling.choose.<anonymous>.<anonymous>' call
        var tmp$ret$0 = $asArray[item];
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      return toSet_1(destination);
    };
  }
  function randomInsertions$lambda($sortedIndices) {
    return function (it) {
      // Inline function 'ai.hypergraph.kaliningraph.sampling.choose' call
      var this_0 = $sortedIndices;
      var numEl = choose(this_0.get_size_woubt6_k$(), it);
      var order = randomSequenceWithoutRepetition(numberRangeToNumber(0, numEl));
      // Inline function 'kotlin.collections.toTypedArray' call
      var asArray = copyToArray(this_0);
      var tmp;
      if (this_0.get_size_woubt6_k$() <= it) {
        tmp = sequenceOf([this_0]);
      } else {
        tmp = map(order, randomInsertions$lambda$lambda(it, asArray));
      }
      return tmp;
    };
  }
  function randomInsertions$lambda$lambda_0(it, _anonymous_parameter_1__qggqgd) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return '_ ' + it;
  }
  function randomInsertions$lambda_0($tokens) {
    return function (idxs) {
      return substitute($tokens, idxs, randomInsertions$lambda$lambda_0);
    };
  }
  function randomDeletions$lambda$lambda($k, $asArray) {
    return function (it) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = decodeCombo(it, $k);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.sampling.choose.<anonymous>.<anonymous>' call
        var tmp$ret$0 = $asArray[item];
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      return toSet_1(destination);
    };
  }
  function randomDeletions$lambda($sortedIndices) {
    return function (it) {
      // Inline function 'ai.hypergraph.kaliningraph.sampling.choose' call
      var this_0 = $sortedIndices;
      var numEl = choose(this_0.get_size_woubt6_k$(), it);
      // Inline function 'kotlin.collections.toTypedArray' call
      var asArray = copyToArray(this_0);
      var tmp;
      if (this_0.get_size_woubt6_k$() <= it) {
        tmp = sequenceOf([toSet_1(this_0)]);
      } else {
        var tmp_0 = asSequence(until(0, numEl));
        tmp = map(tmp_0, randomDeletions$lambda$lambda(it, asArray));
      }
      return tmp;
    };
  }
  function randomDeletions$lambda$lambda_0(it, _anonymous_parameter_1__qggqgd) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return '_';
  }
  function randomDeletions$lambda_0($tokens) {
    return function (idxs) {
      return substitute($tokens, idxs, randomDeletions$lambda$lambda_0);
    };
  }
  function randomSingleSubtitutions$lambda$lambda($k, $asArray) {
    return function (it) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = decodeCombo(it, $k);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.sampling.choose.<anonymous>.<anonymous>' call
        var tmp$ret$0 = $asArray[item];
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      return toSet_1(destination);
    };
  }
  function randomSingleSubtitutions$lambda($sortedIndices) {
    return function (it) {
      // Inline function 'ai.hypergraph.kaliningraph.sampling.choose' call
      var this_0 = $sortedIndices;
      var numEl = choose(this_0.get_size_woubt6_k$(), it);
      var order = randomSequenceWithoutRepetition(numberRangeToNumber(0, numEl));
      // Inline function 'kotlin.collections.toTypedArray' call
      var asArray = copyToArray(this_0);
      var tmp;
      if (this_0.get_size_woubt6_k$() <= it) {
        tmp = sequenceOf([this_0]);
      } else {
        tmp = map(order, randomSingleSubtitutions$lambda$lambda(it, asArray));
      }
      return tmp;
    };
  }
  function randomSingleSubtitutions$lambda$lambda_0($exclusions) {
    return function (it, i) {
      return $exclusions.contains_aljjnj_k$(i) ? it + ' _' : '_';
    };
  }
  function randomSingleSubtitutions$lambda_0($tokens, $exclusions) {
    return function (idxs) {
      return substitute($tokens, idxs, randomSingleSubtitutions$lambda$lambda_0($exclusions));
    };
  }
  function randomDoubleSubstitutions$lambda$lambda($k, $asArray) {
    return function (it) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = decodeCombo(it, $k);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.sampling.choose.<anonymous>.<anonymous>' call
        var tmp$ret$0 = $asArray[item];
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      return toSet_1(destination);
    };
  }
  function randomDoubleSubstitutions$lambda($sortedIndices) {
    return function (it) {
      // Inline function 'ai.hypergraph.kaliningraph.sampling.choose' call
      var this_0 = $sortedIndices;
      var numEl = choose(this_0.get_size_woubt6_k$(), it);
      var order = randomSequenceWithoutRepetition(numberRangeToNumber(0, numEl));
      // Inline function 'kotlin.collections.toTypedArray' call
      var asArray = copyToArray(this_0);
      var tmp;
      if (this_0.get_size_woubt6_k$() <= it) {
        tmp = sequenceOf([this_0]);
      } else {
        tmp = map(order, randomDoubleSubstitutions$lambda$lambda(it, asArray));
      }
      return tmp;
    };
  }
  function randomDoubleSubstitutions$lambda$lambda_0($shiftedExclusions) {
    return function (it, i) {
      return $shiftedExclusions.contains_aljjnj_k$(i) ? '_ ' + it + ' _' : '_ _';
    };
  }
  function randomDoubleSubstitutions$lambda_0($padded, $shiftedExclusions) {
    return function (idxs) {
      return substitute($padded, idxs, randomDoubleSubstitutions$lambda$lambda_0($shiftedExclusions));
    };
  }
  function synthesizeWithVariations$lambda(a, b) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return sequenceOf([]);
  }
  function synthesizeWithVariations$lambda_0() {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return true;
  }
  function synthesizeWithVariations$lambda_1(it) {
    _init_properties_SyntaxRepair_kt__jnbhn4();
    return Unit_getInstance();
  }
  function synthesizeWithVariations$lambda_2($cfg) {
    return function (s) {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.any' call
        var this_0 = tokenizeByWhitespace(s);
        var tmp;
        if (isInterface(this_0, Collection)) {
          tmp = this_0.isEmpty_y1axqb_k$();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.parsing.synthesizeWithVariations.<anonymous>.<anonymous>' call
          if (isHoleTokenIn(element, $cfg)) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
        }
        tmp$ret$0 = false;
      }
      return tmp$ret$0;
    };
  }
  function synthesizeWithVariations$lambda_3($updateProgress) {
    return function (it) {
      $updateProgress(it);
      return Unit_getInstance();
    };
  }
  function synthesizeWithVariations$lambda_4($cfg_, $synthesizer) {
    return function (variant) {
      var variantTokens = tokenizeByWhitespace(variant);
      // Inline function 'kotlin.run' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.synthesizeWithVariations.<anonymous>.<anonymous>' call
      var $this$run = $cfg_;
      return $synthesizer($this$run, variantTokens);
    };
  }
  function synthesizeWithVariations$lambda_5($takeMoreWhile) {
    return function (it) {
      return $takeMoreWhile();
    };
  }
  function synthesizeWithVariations$lambda_6($reconstructor, $cfg_) {
    return function (it) {
      var rec = toMutableList(toList($reconstructor));
      // Inline function 'kotlin.collections.filter' call
      // Inline function 'kotlin.collections.mapIndexed' call
      var this_0 = tokenizeByWhitespace(it);
      // Inline function 'kotlin.collections.mapIndexedTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var index = 0;
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.synthesizeWithVariations.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        checkIndexOverflow(tmp1);
        var tmp;
        if (contains(item, '\u03B5')) {
          tmp = '';
        } else {
          var tmp_0;
          if (isNonterminalStubIn(item, $cfg_)) {
            var tmp0_safe_receiver = firstOrNull_0(rec);
            tmp_0 = item === (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_first_irdx8n_k$());
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp = removeFirst(rec).get_second_jf7fjx_k$();
          } else {
            tmp = item;
          }
        }
        var tmp$ret$0 = tmp;
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      // Inline function 'kotlin.collections.filterTo' call
      var destination_0 = ArrayList_init_$Create$_0();
      var tmp0_iterator_0 = destination.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.parsing.synthesizeWithVariations.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.text.isNotBlank' call
        if (!isBlank(element)) {
          destination_0.add_utx5q5_k$(element);
        }
      }
      return joinToString(destination_0, ' ');
    };
  }
  function blocked$factory() {
    return getPropertyCallableRef('blocked', 1, KProperty1, function (receiver) {
      return get_blocked(receiver);
    }, null);
  }
  function impossibleBigrams$factory() {
    return getPropertyCallableRef('impossibleBigrams', 1, KProperty1, function (receiver) {
      return get_impossibleBigrams(receiver);
    }, null);
  }
  function possibleBigrams$factory() {
    return getPropertyCallableRef('possibleBigrams', 1, KProperty1, function (receiver) {
      return get_possibleBigrams(receiver);
    }, null);
  }
  function startSymbols$factory() {
    return getPropertyCallableRef('startSymbols', 1, KProperty1, function (receiver) {
      return get_startSymbols(receiver);
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
  function qtreeify($this) {
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if ($this.children_1.length === 0) {
      tmp = '\\texttt{' + $this.terminal_1 + '}';
    } else {
      var tmp_0 = '[.\\texttt{' + $this.root_1 + '} ';
      tmp = tmp_0 + joinToString_0($this.children_1, ' ', '', ' ]', VOID, VOID, Tree$qtreeify$lambda);
    }
    return tmp;
  }
  function htmlify(_this__u8e3s4, $this) {
    return replace_0(replace_0(_this__u8e3s4, _Char___init__impl__6a9atx(60), _Char___init__impl__6a9atx(10216)), _Char___init__impl__6a9atx(62), _Char___init__impl__6a9atx(10217));
  }
  function denormalize$removeSynthetic(_this__u8e3s4, refactoredChildren, isSynthetic) {
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (_this__u8e3s4.children_1.length === 0) {
      tmp = listOf_0(new Tree(_this__u8e3s4.root_1, _this__u8e3s4.terminal_1, [], _this__u8e3s4.span_1));
    } else {
      if (isSynthetic(_this__u8e3s4)) {
        tmp = refactoredChildren;
      } else {
        // Inline function 'kotlin.collections.toTypedArray' call
        var tmp$ret$4 = copyToArray(refactoredChildren);
        tmp = listOf_0(new Tree(_this__u8e3s4.root_1, VOID, tmp$ret$4.slice(), _this__u8e3s4.span_1));
      }
    }
    return tmp;
  }
  function denormalize$removeSynthetic$default(_this__u8e3s4, refactoredChildren, isSynthetic, $super) {
    var tmp;
    if (refactoredChildren === VOID) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = _this__u8e3s4.children_1;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(this_0.length);
      var inductionVariable = 0;
      var last = this_0.length;
      while (inductionVariable < last) {
        var item = this_0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'ai.hypergraph.kaliningraph.parsing.Tree.denormalize.removeSynthetic.<anonymous>' call
        var tmp$ret$0 = denormalize$removeSynthetic$default(item);
        destination.add_utx5q5_k$(tmp$ret$0);
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
      var tmp = getStringHashCode(this$0.root_1);
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = this$0.terminal_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      return (tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0) + getStringHashCode(this$0.contents_9drobq_k$()) | 0;
    };
  }
  function Tree$structureEncode$lambda(it) {
    return it.structureEncode_6al6cp_k$();
  }
  function Tree$toGraph$lambda(this$0, $j) {
    return function ($this$$receiver) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      var it = LGVertex_init_$Create$(this$0.root_1, this$0.root_1 + '.' + $j);
      $this$$receiver.minus_v58iu6_k$(it, it);
      return Unit_getInstance();
    };
  }
  function Tree$toGraph$lambda_0(this$0, $j) {
    return function ($this$$receiver) {
      var index = 0;
      var indexedObject = this$0.children_1;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'ai.hypergraph.kaliningraph.parsing.Tree.toGraph.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        $this$$receiver.minus_v58iu6_k$(LGVertex_init_$Create$(this$0.root_1, this$0.root_1 + '.' + $j), LGVertex_init_$Create$(item.root_1, item.root_1 + '.' + $j + '.' + tmp1));
      }
      return Unit_getInstance();
    };
  }
  function Tree$qtreeify$lambda(it) {
    return qtreeify(it);
  }
  function Tree$contents$lambda(it) {
    return it.contents_9drobq_k$();
  }
  function Tree$denormalize$removeSynthetic$lambda($this_removeSynthetic) {
    return function (it) {
      return 2 <= split_0($this_removeSynthetic.root_1, charArrayOf([_Char___init__impl__6a9atx(46)])).get_size_woubt6_k$();
    };
  }
  function Tree(root, terminal, children, span) {
    terminal = terminal === VOID ? null : terminal;
    var tmp;
    if (span === VOID) {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.fold' call
      var accumulator = to(IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$(), IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$());
      var inductionVariable = 0;
      var last = children.length;
      while (inductionVariable < last) {
        var element = children[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'ai.hypergraph.kaliningraph.parsing.Tree.<init>.<anonymous>' call
        var name_for_destructuring_parameter_0_fjsvno = accumulator;
        var a = name_for_destructuring_parameter_0_fjsvno.component1_7eebsc_k$();
        var b = name_for_destructuring_parameter_0_fjsvno.component2_7eebsb_k$();
        // Inline function 'kotlin.comparisons.minOf' call
        var b_0 = element.span_1.get_first_irdx8n_k$();
        var tmp_0 = Math.min(a, b_0);
        // Inline function 'kotlin.comparisons.maxOf' call
        var b_1 = element.span_1.get_last_wopotb_k$();
        var tmp$ret$1 = Math.max(b, b_1);
        accumulator = to(tmp_0, tmp$ret$1);
      }
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Tree.<init>.<anonymous>' call
      var it = accumulator;
      tmp = numberRangeToNumber(it.get_first_irdx8n_k$(), it.get_second_jf7fjx_k$());
    } else {
      tmp = span;
    }
    span = tmp;
    this.root_1 = root;
    this.terminal_1 = terminal;
    this.children_1 = children;
    this.span_1 = span;
    var tmp_1 = this;
    tmp_1.hash$delegate_1 = lazy(Tree$hash$delegate$lambda(this));
  }
  protoOf(Tree).get_root_wott0r_k$ = function () {
    return this.root_1;
  };
  protoOf(Tree).get_terminal_jow1tx_k$ = function () {
    return this.terminal_1;
  };
  protoOf(Tree).get_children_4cwbp4_k$ = function () {
    return this.children_1;
  };
  protoOf(Tree).get_span_wouger_k$ = function () {
    return this.span_1;
  };
  protoOf(Tree).get_hash_won4uv_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.hash$delegate_1;
    hash$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(Tree).toString = function () {
    return this.root_1;
  };
  protoOf(Tree).hashCode = function () {
    return this.get_hash_won4uv_k$();
  };
  protoOf(Tree).equals = function (other) {
    var tmp = this.hashCode();
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = other == null ? null : hashCode(other);
    return tmp === (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
  };
  protoOf(Tree).structureEncode_6al6cp_k$ = function () {
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (this.children_1.length === 0) {
      tmp = '()';
    } else {
      tmp = joinToString_0(this.children_1, VOID, '(', ')', VOID, VOID, Tree$structureEncode$lambda);
    }
    return tmp;
  };
  protoOf(Tree).toGraph_qr1zbb_k$ = function (j) {
    var tmp = LabeledGraph_init_$Create$_0(Tree$toGraph$lambda(this, j));
    // Inline function 'kotlin.collections.foldIndexed' call
    var this_0 = this.children_1;
    var index = 0;
    var accumulator = LabeledGraph_init_$Create$_0(Tree$toGraph$lambda_0(this, j));
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var element = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'ai.hypergraph.kaliningraph.parsing.Tree.toGraph.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      accumulator = accumulator.plus_ru5xrw_k$(element.toGraph_qr1zbb_k$(j + '.' + tmp1));
    }
    var tmp$ret$1 = accumulator;
    return tmp.plus_ru5xrw_k$(tmp$ret$1);
  };
  protoOf(Tree).toGraph$default_q62qpe_k$ = function (j, $super) {
    j = j === VOID ? '0' : j;
    return $super === VOID ? this.toGraph_qr1zbb_k$(j) : $super.toGraph_qr1zbb_k$.call(this, j);
  };
  protoOf(Tree).prettyPrint_g5oabh_k$ = function (buffer, prefix, nextPrefix) {
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (this.children_1.length === 0) {
      var tmp_0 = buffer + prefix;
      var tmp0_safe_receiver = this.terminal_1;
      tmp = tmp_0 + ('' + (tmp0_safe_receiver == null ? null : htmlify(tmp0_safe_receiver, this)) + ' [' + this.span_1.get_first_irdx8n_k$() + ']\n');
    } else {
      // Inline function 'kotlin.collections.foldIndexed' call
      var this_0 = this.children_1;
      var tmp_1 = buffer + prefix + htmlify(this.root_1, this);
      var tmp_2;
      var progression = this.span_1;
      var containsLower = progression.get_first_irdx8n_k$();
      if (!(-1 <= progression.get_last_wopotb_k$() ? containsLower <= -1 : false)) {
        tmp_2 = ' [' + this.span_1 + ']';
      } else {
        tmp_2 = '';
      }
      var index = 0;
      var accumulator = tmp_1 + tmp_2 + '\n';
      var inductionVariable = 0;
      var last = this_0.length;
      while (inductionVariable < last) {
        var element = this_0[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'ai.hypergraph.kaliningraph.parsing.Tree.prettyPrint.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var acc = accumulator;
        accumulator = tmp1 === (this.children_1.length - 1 | 0) ? element.prettyPrint_g5oabh_k$(acc + '', nextPrefix + '\u2514\u2500\u2500 ', nextPrefix + '    ') : element.prettyPrint_g5oabh_k$(acc, nextPrefix + '\u251C\u2500\u2500 ', nextPrefix + '\u2502   ');
      }
      tmp = accumulator;
    }
    return tmp;
  };
  protoOf(Tree).prettyPrint$default_loizcw_k$ = function (buffer, prefix, nextPrefix, $super) {
    buffer = buffer === VOID ? '' : buffer;
    prefix = prefix === VOID ? '' : prefix;
    nextPrefix = nextPrefix === VOID ? '' : nextPrefix;
    return $super === VOID ? this.prettyPrint_g5oabh_k$(buffer, prefix, nextPrefix) : $super.prettyPrint_g5oabh_k$.call(this, buffer, prefix, nextPrefix);
  };
  protoOf(Tree).latexify_nvglp2_k$ = function () {
    return '\\Tree ' + qtreeify(this);
  };
  protoOf(Tree).denormalize_sqp4d0_k$ = function () {
    return first_1(denormalize$removeSynthetic$default(this));
  };
  protoOf(Tree).contents_9drobq_k$ = function () {
    var tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (this.children_1.length === 0) {
      tmp = '' + this.terminal_1;
    } else {
      tmp = joinToString_0(this.children_1, ' ', VOID, VOID, VOID, VOID, Tree$contents$lambda);
    }
    return tmp;
  };
  function hash$factory() {
    return getPropertyCallableRef('hash', 1, KProperty1, function (receiver) {
      return receiver.get_hash_won4uv_k$();
    }, null);
  }
  function decodeCombo(_this__u8e3s4, k) {
    var choice = k - 1 | 0;
    while (choose(choice, k) < _this__u8e3s4) {
      choice = choice + 1 | 0;
    }
    var N = _this__u8e3s4;
    var kk = k;
    // Inline function 'kotlin.collections.mutableSetOf' call
    var result = LinkedHashSet_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = downTo(choice, 0).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.sampling.decodeCombo.<anonymous>' call
      if (choose(element, kk) <= N) {
        var tmp = N;
        var tmp0 = kk;
        kk = tmp0 - 1 | 0;
        N = tmp - choose(element, tmp0) | 0;
        result.add_utx5q5_k$(element);
      }
    }
    return result;
  }
  function get_lecuyerGenerator() {
    _init_properties_Samplers_kt__aqfyff();
    return lecuyerGenerator;
  }
  var lecuyerGenerator;
  function get_generator() {
    _init_properties_Samplers_kt__aqfyff();
    return generator;
  }
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
        var tmp$ret$1 = random(alphabet, Default_getInstance()).value_1;
        list.add_utx5q5_k$(new Char(tmp$ret$1));
      }
       while (inductionVariable < length);
    return joinToString(list, '');
  }
  function choose_0(_this__u8e3s4, i) {
    _init_properties_Samplers_kt__aqfyff();
    var tmp = asSequence(i);
    return distinct_0(flatMap(tmp, choose$lambda(_this__u8e3s4)));
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
        list.add_utx5q5_k$(base);
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
      var tmp0_iterator = dimensions.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.sampling.findAll.<anonymous>' call
        var tmp$ret$0 = item.get_size_woubt6_k$();
        destination.add_utx5q5_k$(tmp$ret$0);
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
      var tmp0_iterator_0 = dimensions.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.sampling.findAll.<anonymous>' call
        var tmp$ret$0_0 = shuffled(item_0);
        destination_0.add_utx5q5_k$(tmp$ret$0_0);
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
    if (i.isEmpty_y1axqb_k$()) {
      tmp = sequenceOf([l]);
    } else {
      var tmp_0 = asSequence(until(0, i.get_c1px32_k$(0)));
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
  function randomSequenceWithoutRepetition(range) {
    _init_properties_Samplers_kt__aqfyff();
    // Inline function 'kotlin.math.ceil' call
    // Inline function 'kotlin.math.log2' call
    var x = (range.get_last_wopotb_k$() - range.get_first_irdx8n_k$() | 0) + 1 | 0;
    var x_0 = log2(x);
    var tmp$ret$1 = Math.ceil(x_0);
    var tmp = LFSR(numberToInt(tmp$ret$1));
    var tmp_0 = filter(tmp, randomSequenceWithoutRepetition$lambda(range));
    return map(tmp_0, randomSequenceWithoutRepetition$lambda_0(range));
  }
  function LFSR(degree, primitivePolynomial) {
    degree = degree === VOID ? 16 : degree;
    var tmp;
    if (primitivePolynomial === VOID) {
      // Inline function 'kotlin.text.mapIndexedNotNull' call
      // Inline function 'kotlin.collections.random' call
      var this_0 = ensureNotNull(get_generator().get_wei43m_k$(degree));
      var tmp$ret$0 = random(this_0, Default_getInstance());
      // Inline function 'kotlin.text.mapIndexedNotNullTo' call
      var this_1 = toString_1(tmp$ret$0, 2);
      var destination = ArrayList_init_$Create$_0();
      // Inline function 'kotlin.text.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      while (inductionVariable < charSequenceLength(this_1)) {
        var item = charSequenceGet(this_1, inductionVariable);
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.text.mapIndexedNotNullTo.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        // Inline function 'ai.hypergraph.kaliningraph.sampling.LFSR.<anonymous>' call
        var tmp0_safe_receiver = item === _Char___init__impl__6a9atx(49) ? tmp1 : null;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.contracts.contract' call
          destination.add_utx5q5_k$(tmp0_safe_receiver);
        }
      }
      tmp = destination;
    } else {
      tmp = primitivePolynomial;
    }
    primitivePolynomial = tmp;
    _init_properties_Samplers_kt__aqfyff();
    var tmp_0;
    if (degree === 0) {
      tmp_0 = sequenceOf([]);
    } else {
      tmp_0 = sequence(LFSR$slambda_0(degree, primitivePolynomial, null));
    }
    return tmp_0;
  }
  function choose$lambda$lambda(it) {
    _init_properties_Samplers_kt__aqfyff();
    return toSet_1(it);
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
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.sampling.findAll.<anonymous>.<anonymous>' call
        var l = item.component1_7eebsc_k$();
        var i = item.component2_7eebsb_k$();
        var tmp$ret$0 = l.get_c1px32_k$(i);
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      return destination;
    };
  }
  function all$lambda($i, $l) {
    return function (it) {
      return all(drop_0($i, 1), plus_3($l, it));
    };
  }
  function randomVector$lambda() {
    _init_properties_Samplers_kt__aqfyff();
    return Default_getInstance().nextDouble_s2xvfg_k$();
  }
  function randomSequenceWithoutRepetition$lambda($range) {
    return function (it) {
      // Inline function 'kotlin.ULong.toInt' call
      var this_0 = it.data_1;
      return _ULong___get_data__impl__fggpzb(this_0).toInt_1tsl84_k$() <= ($range.get_last_wopotb_k$() - $range.get_first_irdx8n_k$() | 0);
    };
  }
  function randomSequenceWithoutRepetition$lambda_0($range) {
    return function (it) {
      var tmp = $range.get_first_irdx8n_k$();
      // Inline function 'kotlin.ULong.toInt' call
      var this_0 = it.data_1;
      return (tmp + _ULong___get_data__impl__fggpzb(this_0).toInt_1tsl84_k$() | 0) - 1 | 0;
    };
  }
  function LFSR$slambda($degree, $primitivePolynomial, resultContinuation) {
    this.$degree_1 = $degree;
    this.$primitivePolynomial_1 = $primitivePolynomial;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(LFSR$slambda).invoke_fcrr7i_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_3u8fp2_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(LFSR$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_fcrr7i_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(LFSR$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(4);
            this.max0__1 = (new Long(1, 0)).shl_bg8if3_k$(this.$degree_1);
            var tmp_0 = this;
            var tmp_1 = Default_getInstance();
            var this_0 = _ULong___init__impl__c78o9k(new Long(1, 0));
            var this_1 = this.max0__1;
            var other = _ULong___init__impl__c78o9k(this_1);
            tmp_0.vec01__1 = nextULong(tmp_1, new ULongRange(this_0, other));
            this.vec2__1 = this.vec01__1;
            this.i3__1 = 0;
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            var tmp_2 = this;
            var this_2 = this.$primitivePolynomial_1;
            var accumulator = _ULong___init__impl__c78o9k(new Long(0, 0));
            var tmp0_iterator = this_2.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var element = tmp0_iterator.next_20eer_k$();
              var this_3 = accumulator;
              var this_4 = this.vec2__1;
              var other_0 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_4).ushr_z7nmq8_k$(element));
              accumulator = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_3).xor_qzz94j_k$(_ULong___get_data__impl__fggpzb(other_0)));
            }

            var this_5 = accumulator;
            var other_1 = _ULong___init__impl__c78o9k(new Long(1, 0));
            tmp_2.bit4__1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_5).and_4spn93_k$(_ULong___get_data__impl__fggpzb(other_1)));
            var tmp_3 = this;
            var this_6 = this.vec2__1;
            var this_7 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_6).ushr_z7nmq8_k$(1));
            var this_8 = this.bit4__1;
            var bitCount = this.$degree_1 - 1 | 0;
            var other_2 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_8).shl_bg8if3_k$(bitCount));
            tmp_3.vec2__1 = _ULong___init__impl__c78o9k(_ULong___get_data__impl__fggpzb(this_7).or_v7fvkl_k$(_ULong___get_data__impl__fggpzb(other_2)));
            this.set_state_rjd8d0_k$(2);
            suspendResult = this.$this$sequence_1.yield_3xhcex_k$(new ULong(this.vec2__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.i3__1 = this.i3__1 + 1 | 0;
            var tmp_4 = toLong(this.i3__1);
            var this_9 = this.max0__1;
            if (tmp_4.compareTo_9jj042_k$(this_9.minus_mfbszm_k$(toLong(1))) < 0) {
              this.set_state_rjd8d0_k$(1);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 3:
            return Unit_getInstance();
          case 4:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 4) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(LFSR$slambda).create_3u8fp2_k$ = function ($this$sequence, completion) {
    var i = new LFSR$slambda(this.$degree_1, this.$primitivePolynomial_1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(LFSR$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_3u8fp2_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function LFSR$slambda_0($degree, $primitivePolynomial, resultContinuation) {
    var i = new LFSR$slambda($degree, $primitivePolynomial, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_fcrr7i_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
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
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.sampling.lecuyerGenerator.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var i = checkIndexOverflow(tmp1);
        var tmp$ret$0 = to(i, listOf_0(toLong(item)));
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      lecuyerGenerator = toMap(destination);
      var tmp = mapOf_0([to(0, listOf_0(new Long(0, 0))), to(1, listOf_0(new Long(1, 0))), to(2, listOf_0(new Long(7, 0))), to(3, listOf_0(new Long(11, 0))), to(4, listOf([new Long(19, 0), new Long(25, 0)])), to(5, listOf([new Long(37, 0), new Long(41, 0), new Long(47, 0), new Long(55, 0), new Long(59, 0), new Long(61, 0)])), to(6, listOf([new Long(67, 0), new Long(91, 0), new Long(97, 0), new Long(103, 0), new Long(109, 0), new Long(115, 0)])), to(7, listOf([new Long(131, 0), new Long(137, 0), new Long(143, 0), new Long(145, 0), new Long(157, 0), new Long(167, 0), new Long(171, 0), new Long(185, 0), new Long(191, 0), new Long(193, 0), new Long(203, 0), new Long(211, 0), new Long(213, 0), new Long(229, 0), new Long(239, 0), new Long(241, 0), new Long(247, 0), new Long(253, 0)])), to(8, listOf([new Long(285, 0), new Long(299, 0), new Long(301, 0), new Long(333, 0), new Long(351, 0), new Long(355, 0), new Long(357, 0), new Long(361, 0), new Long(369, 0), new Long(391, 0), new Long(397, 0), new Long(425, 0), new Long(451, 0), new Long(463, 0), new Long(487, 0), new Long(501, 0)])), to(9, listOf([new Long(529, 0), new Long(539, 0), new Long(545, 0), new Long(557, 0), new Long(563, 0), new Long(601, 0), new Long(607, 0), new Long(617, 0), new Long(623, 0), new Long(631, 0), new Long(637, 0), new Long(647, 0), new Long(661, 0), new Long(675, 0), new Long(677, 0), new Long(687, 0), new Long(695, 0), new Long(701, 0), new Long(719, 0), new Long(721, 0), new Long(731, 0), new Long(757, 0), new Long(761, 0), new Long(787, 0), new Long(789, 0), new Long(799, 0), new Long(803, 0), new Long(817, 0), new Long(827, 0), new Long(847, 0), new Long(859, 0), new Long(865, 0), new Long(875, 0), new Long(877, 0), new Long(883, 0), new Long(895, 0), new Long(901, 0), new Long(911, 0), new Long(949, 0), new Long(953, 0), new Long(967, 0), new Long(971, 0), new Long(973, 0), new Long(981, 0), new Long(985, 0), new Long(995, 0), new Long(1001, 0), new Long(1019, 0)])), to(10, listOf([new Long(1033, 0), new Long(1051, 0), new Long(1063, 0), new Long(1069, 0), new Long(1125, 0), new Long(1135, 0), new Long(1153, 0), new Long(1163, 0), new Long(1221, 0), new Long(1239, 0), new Long(1255, 0), new Long(1267, 0), new Long(1279, 0), new Long(1293, 0), new Long(1305, 0), new Long(1315, 0), new Long(1329, 0), new Long(1341, 0), new Long(1347, 0), new Long(1367, 0), new Long(1387, 0), new Long(1413, 0), new Long(1423, 0), new Long(1431, 0), new Long(1441, 0), new Long(1479, 0), new Long(1509, 0), new Long(1527, 0), new Long(1531, 0), new Long(1555, 0), new Long(1557, 0), new Long(1573, 0), new Long(1591, 0), new Long(1603, 0), new Long(1615, 0), new Long(1627, 0), new Long(1657, 0), new Long(1663, 0), new Long(1673, 0), new Long(1717, 0), new Long(1729, 0), new Long(1747, 0), new Long(1759, 0), new Long(1789, 0), new Long(1815, 0), new Long(1821, 0), new Long(1825, 0), new Long(1849, 0), new Long(1863, 0), new Long(1869, 0), new Long(1877, 0), new Long(1881, 0), new Long(1891, 0), new Long(1917, 0), new Long(1933, 0), new Long(1939, 0), new Long(1969, 0), new Long(2011, 0), new Long(2035, 0), new Long(2041, 0)])), to(11, listOf([new Long(2053, 0), new Long(2071, 0), new Long(2091, 0), new Long(2093, 0), new Long(2119, 0), new Long(2147, 0), new Long(2149, 0), new Long(2161, 0), new Long(2171, 0), new Long(2189, 0), new Long(2197, 0), new Long(2207, 0), new Long(2217, 0), new Long(2225, 0), new Long(2255, 0), new Long(2257, 0), new Long(2273, 0), new Long(2279, 0), new Long(2283, 0), new Long(2293, 0), new Long(2317, 0), new Long(2323, 0), new Long(2341, 0), new Long(2345, 0), new Long(2363, 0), new Long(2365, 0), new Long(2373, 0), new Long(2377, 0), new Long(2385, 0), new Long(2395, 0), new Long(2419, 0), new Long(2421, 0), new Long(2431, 0), new Long(2435, 0), new Long(2447, 0), new Long(2475, 0), new Long(2477, 0), new Long(2489, 0), new Long(2503, 0), new Long(2521, 0), new Long(2533, 0), new Long(2551, 0), new Long(2561, 0), new Long(2567, 0), new Long(2579, 0), new Long(2581, 0), new Long(2601, 0), new Long(2633, 0), new Long(2657, 0), new Long(2669, 0), new Long(2681, 0), new Long(2687, 0), new Long(2693, 0), new Long(2705, 0), new Long(2717, 0), new Long(2727, 0), new Long(2731, 0), new Long(2739, 0), new Long(2741, 0), new Long(2773, 0), new Long(2783, 0), new Long(2793, 0), new Long(2799, 0), new Long(2801, 0), new Long(2811, 0), new Long(2819, 0), new Long(2825, 0), new Long(2833, 0), new Long(2867, 0), new Long(2879, 0), new Long(2881, 0), new Long(2891, 0), new Long(2905, 0), new Long(2911, 0), new Long(2917, 0), new Long(2927, 0), new Long(2941, 0), new Long(2951, 0), new Long(2955, 0), new Long(2963, 0), new Long(2965, 0), new Long(2991, 0), new Long(2999, 0), new Long(3005, 0), new Long(3017, 0), new Long(3035, 0), new Long(3037, 0), new Long(3047, 0), new Long(3053, 0), new Long(3083, 0), new Long(3085, 0), new Long(3097, 0), new Long(3103, 0), new Long(3159, 0), new Long(3169, 0), new Long(3179, 0), new Long(3187, 0), new Long(3205, 0), new Long(3209, 0), new Long(3223, 0), new Long(3227, 0), new Long(3229, 0), new Long(3251, 0), new Long(3263, 0), new Long(3271, 0), new Long(3277, 0), new Long(3283, 0), new Long(3285, 0), new Long(3299, 0), new Long(3305, 0), new Long(3319, 0), new Long(3331, 0), new Long(3343, 0), new Long(3357, 0), new Long(3367, 0), new Long(3373, 0), new Long(3393, 0), new Long(3399, 0), new Long(3413, 0), new Long(3417, 0), new Long(3427, 0), new Long(3439, 0), new Long(3441, 0), new Long(3475, 0), new Long(3487, 0), new Long(3497, 0), new Long(3515, 0), new Long(3517, 0), new Long(3529, 0), new Long(3543, 0), new Long(3547, 0), new Long(3553, 0), new Long(3559, 0), new Long(3573, 0), new Long(3589, 0), new Long(3613, 0), new Long(3617, 0), new Long(3623, 0), new Long(3627, 0), new Long(3635, 0), new Long(3641, 0), new Long(3655, 0), new Long(3659, 0), new Long(3669, 0), new Long(3679, 0), new Long(3697, 0), new Long(3707, 0), new Long(3709, 0), new Long(3713, 0), new Long(3731, 0), new Long(3743, 0), new Long(3747, 0), new Long(3771, 0), new Long(3791, 0), new Long(3805, 0), new Long(3827, 0), new Long(3833, 0), new Long(3851, 0), new Long(3865, 0), new Long(3889, 0), new Long(3895, 0), new Long(3933, 0), new Long(3947, 0), new Long(3949, 0), new Long(3957, 0), new Long(3971, 0), new Long(3985, 0), new Long(3991, 0), new Long(3995, 0), new Long(4007, 0), new Long(4013, 0), new Long(4021, 0), new Long(4045, 0), new Long(4051, 0), new Long(4069, 0), new Long(4073, 0)])), to(12, listOf([new Long(4179, 0), new Long(4201, 0), new Long(4219, 0), new Long(4221, 0), new Long(4249, 0), new Long(4305, 0), new Long(4331, 0), new Long(4359, 0), new Long(4383, 0), new Long(4387, 0), new Long(4411, 0), new Long(4431, 0), new Long(4439, 0), new Long(4449, 0), new Long(4459, 0), new Long(4485, 0), new Long(4531, 0), new Long(4569, 0), new Long(4575, 0), new Long(4621, 0), new Long(4663, 0), new Long(4669, 0), new Long(4711, 0), new Long(4723, 0), new Long(4735, 0), new Long(4793, 0), new Long(4801, 0), new Long(4811, 0), new Long(4879, 0), new Long(4893, 0), new Long(4897, 0), new Long(4921, 0), new Long(4927, 0), new Long(4941, 0), new Long(4977, 0), new Long(5017, 0), new Long(5027, 0), new Long(5033, 0), new Long(5127, 0), new Long(5169, 0), new Long(5175, 0), new Long(5199, 0), new Long(5213, 0), new Long(5223, 0), new Long(5237, 0), new Long(5287, 0), new Long(5293, 0), new Long(5331, 0), new Long(5391, 0), new Long(5405, 0), new Long(5453, 0), new Long(5523, 0), new Long(5573, 0), new Long(5591, 0), new Long(5597, 0), new Long(5611, 0), new Long(5641, 0), new Long(5703, 0), new Long(5717, 0), new Long(5721, 0), new Long(5797, 0), new Long(5821, 0), new Long(5909, 0), new Long(5913, 0), new Long(5955, 0), new Long(5957, 0), new Long(6005, 0), new Long(6025, 0), new Long(6061, 0), new Long(6067, 0), new Long(6079, 0), new Long(6081, 0), new Long(6231, 0), new Long(6237, 0), new Long(6289, 0), new Long(6295, 0), new Long(6329, 0), new Long(6383, 0), new Long(6427, 0), new Long(6453, 0), new Long(6465, 0), new Long(6501, 0), new Long(6523, 0), new Long(6539, 0), new Long(6577, 0), new Long(6589, 0), new Long(6601, 0), new Long(6607, 0), new Long(6631, 0), new Long(6683, 0), new Long(6699, 0), new Long(6707, 0), new Long(6761, 0), new Long(6795, 0), new Long(6865, 0), new Long(6881, 0), new Long(6901, 0), new Long(6923, 0), new Long(6931, 0), new Long(6943, 0), new Long(6999, 0), new Long(7057, 0), new Long(7079, 0), new Long(7103, 0), new Long(7105, 0), new Long(7123, 0), new Long(7173, 0), new Long(7185, 0), new Long(7191, 0), new Long(7207, 0), new Long(7245, 0), new Long(7303, 0), new Long(7327, 0), new Long(7333, 0), new Long(7355, 0), new Long(7365, 0), new Long(7369, 0), new Long(7375, 0), new Long(7411, 0), new Long(7431, 0), new Long(7459, 0), new Long(7491, 0), new Long(7505, 0), new Long(7515, 0), new Long(7541, 0), new Long(7557, 0), new Long(7561, 0), new Long(7701, 0), new Long(7705, 0), new Long(7727, 0), new Long(7749, 0), new Long(7761, 0), new Long(7783, 0), new Long(7795, 0), new Long(7823, 0), new Long(7907, 0), new Long(7953, 0), new Long(7963, 0), new Long(7975, 0), new Long(8049, 0), new Long(8089, 0), new Long(8123, 0), new Long(8125, 0), new Long(8137, 0)])), to(13, listOf([new Long(8219, 0), new Long(8231, 0), new Long(8245, 0), new Long(8275, 0), new Long(8293, 0), new Long(8303, 0), new Long(8331, 0), new Long(8333, 0), new Long(8351, 0), new Long(8357, 0), new Long(8367, 0), new Long(8379, 0), new Long(8381, 0), new Long(8387, 0), new Long(8393, 0), new Long(8417, 0), new Long(8435, 0), new Long(8461, 0), new Long(8469, 0), new Long(8489, 0), new Long(8495, 0), new Long(8507, 0), new Long(8515, 0), new Long(8551, 0), new Long(8555, 0), new Long(8569, 0), new Long(8585, 0), new Long(8599, 0), new Long(8605, 0), new Long(8639, 0)])), to(14, listOf([new Long(16427, 0), new Long(16441, 0), new Long(16467, 0), new Long(16479, 0), new Long(16507, 0), new Long(16553, 0), new Long(16559, 0), new Long(16571, 0), new Long(16573, 0), new Long(16591, 0), new Long(16619, 0), new Long(16627, 0), new Long(16653, 0), new Long(16659, 0), new Long(16699, 0), new Long(16707, 0), new Long(16795, 0), new Long(16797, 0), new Long(16807, 0), new Long(16813, 0), new Long(16821, 0), new Long(16853, 0), new Long(16857, 0), new Long(16881, 0)])), to(15, listOf([new Long(32771, 0), new Long(32785, 0), new Long(32791, 0), new Long(32813, 0), new Long(32821, 0), new Long(32863, 0), new Long(32887, 0), new Long(32897, 0), new Long(32903, 0), new Long(32915, 0), new Long(32933, 0), new Long(32963, 0), new Long(32975, 0), new Long(32989, 0), new Long(32999, 0), new Long(33013, 0), new Long(33025, 0), new Long(33045, 0), new Long(33061, 0), new Long(33111, 0), new Long(33117, 0), new Long(33121, 0), new Long(33133, 0), new Long(33157, 0)])), to(16, listOf([new Long(65581, 0), new Long(65593, 0), new Long(65599, 0), new Long(65619, 0), new Long(65725, 0), new Long(65751, 0), new Long(65839, 0), new Long(65853, 0), new Long(65871, 0), new Long(65885, 0), new Long(65943, 0), new Long(65953, 0), new Long(65965, 0), new Long(65983, 0), new Long(65991, 0), new Long(66069, 0), new Long(66073, 0), new Long(66085, 0), new Long(66095, 0), new Long(66141, 0), new Long(66157, 0), new Long(66181, 0), new Long(66193, 0), new Long(66209, 0)])), to(17, listOf([new Long(131081, 0), new Long(131087, 0), new Long(131105, 0), new Long(131117, 0), new Long(131123, 0), new Long(131135, 0), new Long(131137, 0), new Long(131157, 0), new Long(131177, 0), new Long(131195, 0), new Long(131213, 0), new Long(131225, 0), new Long(131235, 0), new Long(131247, 0), new Long(131259, 0), new Long(131269, 0), new Long(131317, 0)])), to(18, listOf([new Long(262183, 0), new Long(262207, 0), new Long(262221, 0), new Long(262267, 0), new Long(262273, 0), new Long(262363, 0), new Long(262375, 0), new Long(262381, 0), new Long(262407, 0)])), to(19, listOf([new Long(524327, 0), new Long(524351, 0), new Long(524359, 0), new Long(524371, 0), new Long(524377, 0), new Long(524387, 0), new Long(524399, 0), new Long(524413, 0), new Long(524435, 0), new Long(524463, 0)])), to(20, listOf([new Long(1048585, 0), new Long(1048659, 0), new Long(1048677, 0), new Long(1048681, 0), new Long(1048699, 0)])), to(21, listOf([new Long(2097157, 0), new Long(2097191, 0), new Long(2097215, 0), new Long(2097253, 0)])), to(22, listOf([new Long(4194307, 0), new Long(4194361, 0)])), to(23, listOf([new Long(8388641, 0), new Long(8388651, 0), new Long(8388653, 0), new Long(8388659, 0), new Long(8388671, 0), new Long(8388685, 0), new Long(8388709, 0)])), to(24, listOf_0(new Long(16777243, 0))), to(25, listOf_0(new Long(33554441, 0))), to(26, listOf_0(new Long(67108935, 0))), to(27, listOf_0(new Long(134217767, 0))), to(28, listOf_0(new Long(268435465, 0))), to(29, listOf_0(new Long(536870917, 0))), to(30, listOf_0(new Long(1073741907, 0))), to(31, listOf_0(new Long(-2147483639, 0))), to(32, listOf_0(new Long(197, 1)))]);
      // Inline function 'kotlin.collections.associateWith' call
      var this_1 = numberRangeToNumber(33, 64);
      var result = LinkedHashMap_init_$Create$_1(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_1, 10)), 16));
      // Inline function 'kotlin.collections.associateWithTo' call
      var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.sampling.generator.<anonymous>' call
        var tmp$ret$0_0 = ensureNotNull(get_lecuyerGenerator().get_wei43m_k$(element));
        result.put_4fpzoq_k$(element, tmp$ret$0_0);
      }
      generator = plus_6(tmp, result);
    }
  }
  function get_idxs(_this__u8e3s4) {
    _init_properties_Tensor_kt__gweomx();
    return idxs$delegate.getValue_4u4kqi_k$(_this__u8e3s4, idxs$factory());
  }
  var idxs$delegate;
  function get_rows(_this__u8e3s4) {
    _init_properties_Tensor_kt__gweomx();
    return rows$delegate.getValue_4u4kqi_k$(_this__u8e3s4, rows$factory());
  }
  var rows$delegate;
  function get_cols(_this__u8e3s4) {
    _init_properties_Tensor_kt__gweomx();
    return cols$delegate.getValue_4u4kqi_k$(_this__u8e3s4, cols$factory());
  }
  var cols$delegate;
  function get_transpose(_this__u8e3s4) {
    _init_properties_Tensor_kt__gweomx();
    return transpose$delegate.getValue_4u4kqi_k$(_this__u8e3s4, transpose$factory());
  }
  var transpose$delegate;
  function get_BOOLEAN_ALGEBRA() {
    _init_properties_Tensor_kt__gweomx();
    return BOOLEAN_ALGEBRA;
  }
  var BOOLEAN_ALGEBRA;
  function get_XOR_ALGEBRA() {
    _init_properties_Tensor_kt__gweomx();
    return XOR_ALGEBRA;
  }
  var XOR_ALGEBRA;
  function get_INTEGER_FIELD() {
    _init_properties_Tensor_kt__gweomx();
    return INTEGER_FIELD;
  }
  var INTEGER_FIELD;
  function get_DOUBLE_FIELD() {
    _init_properties_Tensor_kt__gweomx();
    return DOUBLE_FIELD;
  }
  var DOUBLE_FIELD;
  function get_MINPLUS_ALGEBRA() {
    _init_properties_Tensor_kt__gweomx();
    return MINPLUS_ALGEBRA;
  }
  var MINPLUS_ALGEBRA;
  function get_MAXPLUS_ALGEBRA() {
    _init_properties_Tensor_kt__gweomx();
    return MAXPLUS_ALGEBRA;
  }
  var MAXPLUS_ALGEBRA;
  function get_GF2_ALGEBRA() {
    _init_properties_Tensor_kt__gweomx();
    return GF2_ALGEBRA;
  }
  var GF2_ALGEBRA;
  function DoubleMatrix$Companion$random$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return Default_getInstance().nextDouble_s2xvfg_k$();
  }
  function DoubleMatrix$Companion$one$lambda(i, j) {
    return i === j ? 1.0 : 0.0;
  }
  function DoubleMatrix$Companion$ones$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return 1.0;
  }
  function DoubleMatrix$Companion$zeroes$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return 0.0;
  }
  function DoubleMatrix_init_$Init$(elements, $this) {
    // Inline function 'kotlin.math.sqrt' call
    var x = elements.get_size_woubt6_k$();
    var tmp$ret$0 = Math.sqrt(x);
    DoubleMatrix.call($this, numberToInt(tmp$ret$0), VOID, elements);
    return $this;
  }
  function DoubleMatrix_init_$Create$(elements) {
    return DoubleMatrix_init_$Init$(elements, objectCreate(protoOf(DoubleMatrix)));
  }
  function DoubleMatrix_init_$Init$_0(numRows, numCols, f, $this) {
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
        list.add_utx5q5_k$(tmp$ret$0);
      }
       while (inductionVariable < size);
    DoubleMatrix.call($this, numRows, numCols, list);
    return $this;
  }
  function DoubleMatrix_init_$Create$_0(numRows, numCols, f) {
    return DoubleMatrix_init_$Init$_0(numRows, numCols, f, objectCreate(protoOf(DoubleMatrix)));
  }
  function DoubleMatrix_init_$Init$_1(rows, $this) {
    DoubleMatrix_init_$Init$(toList_2(rows), $this);
    return $this;
  }
  function DoubleMatrix_init_$Create$_1(rows) {
    return DoubleMatrix_init_$Init$_1(rows, objectCreate(protoOf(DoubleMatrix)));
  }
  function Companion_1() {
    Companion_instance_1 = this;
  }
  protoOf(Companion_1).random_7i125x_k$ = function (size) {
    return DoubleMatrix_init_$Create$_0(size, VOID, DoubleMatrix$Companion$random$lambda);
  };
  protoOf(Companion_1).one_yep1ki_k$ = function (size) {
    return DoubleMatrix_init_$Create$_0(size, VOID, DoubleMatrix$Companion$one$lambda);
  };
  protoOf(Companion_1).ones_5d0f85_k$ = function (size) {
    return DoubleMatrix_init_$Create$_0(size, VOID, DoubleMatrix$Companion$ones$lambda);
  };
  protoOf(Companion_1).zeroes_6uujzy_k$ = function (size) {
    return DoubleMatrix_init_$Create$_0(size, VOID, DoubleMatrix$Companion$zeroes$lambda);
  };
  protoOf(Companion_1).vector_v3mehg_k$ = function (data) {
    return new DoubleMatrix(1, data.length, toList_2(data), get_DOUBLE_FIELD());
  };
  var Companion_instance_1;
  function Companion_getInstance_2() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function DoubleMatrix(numRows, numCols, data, algebra) {
    Companion_getInstance_2();
    numCols = numCols === VOID ? numRows : numCols;
    algebra = algebra === VOID ? get_DOUBLE_FIELD() : algebra;
    AbstractMatrix.call(this, algebra, numRows, numCols);
    this.numRows_2 = numRows;
    this.numCols_2 = numCols;
    this.data_1 = data;
    this.algebra_2 = algebra;
  }
  protoOf(DoubleMatrix).get_numRows_vts1uy_k$ = function () {
    return this.numRows_2;
  };
  protoOf(DoubleMatrix).get_numCols_vu1mxc_k$ = function () {
    return this.numCols_2;
  };
  protoOf(DoubleMatrix).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(DoubleMatrix).get_algebra_dvz2yp_k$ = function () {
    return this.algebra_2;
  };
  protoOf(DoubleMatrix).minus_x055qs_k$ = function (that) {
    return this.plus_3dy6p4_k$(times_1(-1.0, that));
  };
  protoOf(DoubleMatrix).new_gd8h13_k$ = function (rows, cols, data, alg) {
    return new DoubleMatrix(rows, cols, data, alg);
  };
  protoOf(DoubleMatrix).new_h99czx_k$ = function (rows, cols, data, alg) {
    return this.new_gd8h13_k$(rows, cols, data, isInterface(alg, Field) ? alg : THROW_CCE());
  };
  function Matrix$plus$lambda(this$0, $t) {
    return function ($this$safeJoin, i, j) {
      return $this$safeJoin.plus_oqaz3q_k$(this$0.get_bzg6vq_k$(i, j), $t.get_bzg6vq_k$(i, j));
    };
  }
  function Matrix$times$lambda(this$0, $tt) {
    return function ($this$safeJoin, i, j) {
      return this$0.dot_dhgddr_k$(this$0.get_c1px32_k$(i), $tt.get_c1px32_k$(j));
    };
  }
  function Matrix() {
  }
  function flip_1(_this__u8e3s4, $this) {
    // Inline function 'kotlin.collections.List' call
    // Inline function 'kotlin.collections.MutableList' call
    var size = _this__u8e3s4.get_size_woubt6_k$();
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
        var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
          // Inline function 'ai.hypergraph.kaliningraph.tensor.Companion.flip.<anonymous>.<anonymous>' call
          // Inline function 'kotlin.collections.elementAtOrNull' call
          var tmp0_safe_receiver = getOrNull(element, index);
          if (tmp0_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            destination.add_utx5q5_k$(tmp0_safe_receiver);
          }
        }
        list.add_utx5q5_k$(destination);
      }
       while (inductionVariable < size);
    return list;
  }
  function UTMatrix_init_$Init$(ts, algebra, $this) {
    UTMatrix.call($this, listOf_0(toList_3(ts)), algebra);
    return $this;
  }
  function UTMatrix_init_$Create$(ts, algebra) {
    return UTMatrix_init_$Init$(ts, algebra, objectCreate(protoOf(UTMatrix)));
  }
  function UTMatrix_init_$Init$_0(numRows, numCols, data, alg, $this) {
    var tmp0_subject = data.get_size_woubt6_k$();
    var tmp;
    if (tmp0_subject === imul(numRows, numCols)) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = until(0, numRows);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.<init>.<anonymous>' call
        // Inline function 'kotlin.collections.mapNotNull' call
        // Inline function 'kotlin.collections.mapNotNullTo' call
        var this_1 = until(item + 1 | 0, numCols);
        var destination_0 = ArrayList_init_$Create$_0();
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'kotlin.collections.mapNotNullTo.<anonymous>' call
          // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.<init>.<anonymous>.<anonymous>' call
          var tmp0_safe_receiver = data.get_c1px32_k$(imul(item, numCols) + element | 0);
          if (tmp0_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.contracts.contract' call
            destination_0.add_utx5q5_k$(tmp0_safe_receiver);
          }
        }
        destination.add_utx5q5_k$(destination_0);
      }
      tmp = dropLast_0(flip_1(destination, Companion_getInstance_3()), 1);
    } else if (tmp0_subject === ((imul(numRows, numCols) - numRows | 0) / 2 | 0)) {
      // Inline function 'kotlin.collections.fold' call
      var this_2 = downTo(numCols - 1 | 0, 1);
      // Inline function 'kotlin.collections.listOf' call
      var tmp$ret$7 = emptyList();
      var accumulator = to(tmp$ret$7, 0);
      var tmp0_iterator_1 = this_2.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_1.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.<init>.<anonymous>' call
        var acc = accumulator;
        accumulator = to(plus(acc.get_first_irdx8n_k$(), listOf_0(data.subList_xle3r2_k$(acc.get_second_jf7fjx_k$(), acc.get_second_jf7fjx_k$() + element_0 | 0))), acc.get_second_jf7fjx_k$() + element_0 | 0);
      }
      var tmp$ret$9 = accumulator;
      tmp = flip_1(tmp$ret$9.get_first_irdx8n_k$(), Companion_getInstance_3());
    } else {
      throw Exception_init_$Create$('Invalid UTMatrix shape: ' + numRows + '.' + numCols + ' != ' + data.get_size_woubt6_k$());
    }
    UTMatrix.call($this, tmp, alg);
    return $this;
  }
  function UTMatrix_init_$Create$_0(numRows, numCols, data, alg) {
    return UTMatrix_init_$Init$_0(numRows, numCols, data, alg, objectCreate(protoOf(UTMatrix)));
  }
  function Companion_2() {
    Companion_instance_2 = this;
  }
  var Companion_instance_2;
  function Companion_getInstance_3() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function UTMatrix$data$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.collections.map' call
      var this_0 = flip_1(plus(this$0.diagonals_1, listOf_0(emptyList())), Companion_getInstance_3());
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.data$delegate.<anonymous>.<anonymous>' call
        // Inline function 'kotlin.collections.List' call
        // Inline function 'kotlin.collections.MutableList' call
        var size = (this$0.diagonals_1.get_size_woubt6_k$() + 1 | 0) - item.get_size_woubt6_k$() | 0;
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
            var tmp$ret$0 = this$0.algebra_2.get_nil_18izx4_k$();
            list.add_utx5q5_k$(tmp$ret$0);
          }
           while (inductionVariable < size);
        var tmp$ret$3 = plus(list, item);
        destination.add_utx5q5_k$(tmp$ret$3);
      }
      return flatten(destination);
    };
  }
  function UTMatrix$toFullMatrix$lambda(this$0) {
    return function (r, c) {
      return c <= r ? this$0.algebra_2.get_nil_18izx4_k$() : this$0.diagonals_1.get_c1px32_k$((c - r | 0) - 1 | 0).get_c1px32_k$(r);
    };
  }
  function UTMatrix(diagonals, algebra) {
    Companion_getInstance_3();
    AbstractMatrix.call(this, algebra, first_1(diagonals).get_size_woubt6_k$() + 1 | 0);
    this.diagonals_1 = diagonals;
    this.algebra_2 = algebra;
    var tmp = this;
    tmp.data$delegate_1 = lazy(UTMatrix$data$delegate$lambda(this));
  }
  protoOf(UTMatrix).get_diagonals_sbpbg5_k$ = function () {
    return this.diagonals_1;
  };
  protoOf(UTMatrix).get_algebra_dvz2yp_k$ = function () {
    return this.algebra_2;
  };
  protoOf(UTMatrix).get_data_wokkxf_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.data$delegate_1;
    data$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(UTMatrix).plus_531cym_k$ = function (t) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = zip(this.diagonals_1, t.diagonals_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.plus.<anonymous>' call
      var ld = item.component1_7eebsc_k$();
      var rd = item.component2_7eebsb_k$();
      // Inline function 'kotlin.collections.map' call
      var this_1 = zip(ld, rd);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.plus.<anonymous>.<anonymous>' call
        var l = item_0.component1_7eebsc_k$();
        var r = item_0.component2_7eebsb_k$();
        // Inline function 'kotlin.with' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.plus.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$2 = this.algebra_2.plus_oqaz3q_k$(l, r);
        destination_0.add_utx5q5_k$(tmp$ret$2);
      }
      destination.add_utx5q5_k$(destination_0);
    }
    return new UTMatrix(destination, this.algebra_2);
  };
  protoOf(UTMatrix).plus_3dy6p4_k$ = function (t) {
    return this.plus_531cym_k$(t instanceof UTMatrix ? t : THROW_CCE());
  };
  protoOf(UTMatrix).times_ztb7a_k$ = function (t) {
    return toUTMatrix(this.toFullMatrix_k02fpn_k$().times_opju7w_k$(t.toFullMatrix_k02fpn_k$()));
  };
  protoOf(UTMatrix).times_opju7w_k$ = function (t) {
    return this.times_ztb7a_k$(t instanceof UTMatrix ? t : THROW_CCE());
  };
  protoOf(UTMatrix).squared_whz509_k$ = function () {
    return toUTMatrix(this.toFullMatrix_k02fpn_k$().squareUpperTriangular_fx5y64_k$());
  };
  protoOf(UTMatrix).seekFixpoint_snvsnl_k$ = function (carry, iteration, maxIterations) {
    var tmp;
    if (last(this.diagonals_1).get_size_woubt6_k$() === 1) {
      tmp = this;
    } else if (iteration === maxIterations) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = downTo(last(this.diagonals_1).get_size_woubt6_k$() - 1 | 0, 1);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
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
            var tmp$ret$3 = this.algebra_2.get_nil_18izx4_k$();
            list.add_utx5q5_k$(tmp$ret$3);
          }
           while (inductionVariable < item);
        destination.add_utx5q5_k$(list);
      }
      tmp = new UTMatrix(plus(this.diagonals_1, destination), this.algebra_2);
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.collections.map' call
      var this_1 = windowed(carry, 2, 1);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpoint.<anonymous>' call
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.collections.fold' call
        // Inline function 'kotlin.collections.map' call
        var this_2 = zip(item_0.get_c1px32_k$(0).get_second_jf7fjx_k$(), item_0.get_c1px32_k$(1).get_third_iz27um_k$());
        // Inline function 'kotlin.collections.mapTo' call
        var destination_1 = ArrayList_init_$Create$(collectionSizeOrDefault(this_2, 10));
        var tmp0_iterator_1 = this_2.iterator_jk1svi_k$();
        while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
          var item_1 = tmp0_iterator_1.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpoint.<anonymous>.<anonymous>' call
          var l = item_1.component1_7eebsc_k$();
          var r = item_1.component2_7eebsb_k$();
          // Inline function 'kotlin.with' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpoint.<anonymous>.<anonymous>.<anonymous>' call
          var tmp$ret$11 = this.algebra_2.times_v2bgcq_k$(l, r);
          destination_1.add_utx5q5_k$(tmp$ret$11);
        }
        var accumulator = this.algebra_2.get_nil_18izx4_k$();
        var tmp0_iterator_2 = destination_1.iterator_jk1svi_k$();
        while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator_2.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpoint.<anonymous>.<anonymous>' call
          var t = accumulator;
          // Inline function 'kotlin.with' call
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpoint.<anonymous>.<anonymous>.<anonymous>' call
          accumulator = this.algebra_2.plus_oqaz3q_k$(element, t);
        }
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpoint.<anonymous>.<anonymous>' call
        var it = accumulator;
        var tmp$ret$20 = to_1(to(it, plus_3(item_0.get_c1px32_k$(0).get_second_jf7fjx_k$(), it)), plus(listOf_0(it), item_0.get_c1px32_k$(1).get_third_iz27um_k$()));
        destination_0.add_utx5q5_k$(tmp$ret$20);
      }
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpoint.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_2 = ArrayList_init_$Create$(collectionSizeOrDefault(destination_0, 10));
      var tmp0_iterator_3 = destination_0.iterator_jk1svi_k$();
      while (tmp0_iterator_3.hasNext_bitz1p_k$()) {
        var item_2 = tmp0_iterator_3.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpoint.<anonymous>.<anonymous>' call
        var tmp$ret$23 = item_2.get_first_irdx8n_k$();
        destination_2.add_utx5q5_k$(tmp$ret$23);
      }
      tmp = (new UTMatrix(plus(this.diagonals_1, listOf_0(destination_2)), this.algebra_2)).seekFixpoint_snvsnl_k$(destination_0, iteration + 1 | 0, maxIterations);
    }
    return tmp;
  };
  protoOf(UTMatrix).seekFixpoint$default_gxrghs_k$ = function (carry, iteration, maxIterations, $super) {
    var tmp;
    if (carry === VOID) {
      // Inline function 'kotlin.collections.map' call
      var this_0 = last(this.diagonals_1);
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpoint.<anonymous>' call
        var tmp$ret$0 = to_1(to(item, listOf_0(item)), listOf_0(item));
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      tmp = destination;
    } else {
      tmp = carry;
    }
    carry = tmp;
    iteration = iteration === VOID ? 0 : iteration;
    maxIterations = maxIterations === VOID ? first_1(this.diagonals_1).get_size_woubt6_k$() : maxIterations;
    return $super === VOID ? this.seekFixpoint_snvsnl_k$(carry, iteration, maxIterations) : $super.seekFixpoint_snvsnl_k$.call(this, carry, iteration, maxIterations);
  };
  protoOf(UTMatrix).seekFixpointFast_9rbws7_k$ = function (maxIterations) {
    var iteration = 0;
    var diagonalsMutable = toMutableList(this.diagonals_1);
    // Inline function 'kotlin.collections.map' call
    var this_0 = last(this.diagonals_1);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpointFast.<anonymous>' call
      var tmp$ret$0 = to_1(to(item, mutableListOf([item])), mutableListOf([item]));
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var carry = toMutableList(destination);
    while (iteration < maxIterations ? !(last(diagonalsMutable).get_size_woubt6_k$() === 1) : false) {
      // Inline function 'kotlin.collections.mutableListOf' call
      var next = ArrayList_init_$Create$_0();
      var inductionVariable = 1;
      var last_0 = carry.get_size_woubt6_k$();
      if (inductionVariable < last_0)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var acc = this.algebra_2.get_nil_18izx4_k$();
          var inductionVariable_0 = 0;
          var last_1 = carry.get_c1px32_k$(i - 1 | 0).get_second_jf7fjx_k$().get_size_woubt6_k$() - 1 | 0;
          if (inductionVariable_0 <= last_1)
            do {
              var j = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              // Inline function 'kotlin.with' call
              // Inline function 'kotlin.contracts.contract' call
              // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpointFast.<anonymous>' call
              var $this$with = this.algebra_2;
              acc = $this$with.plus_oqaz3q_k$(acc, $this$with.times_v2bgcq_k$(carry.get_c1px32_k$(i - 1 | 0).get_second_jf7fjx_k$().get_c1px32_k$(j), carry.get_c1px32_k$(i).get_third_iz27um_k$().get_c1px32_k$(j)));
            }
             while (inductionVariable_0 <= last_1);
          // Inline function 'kotlin.apply' call
          var this_1 = carry.get_c1px32_k$(i - 1 | 0).get_second_jf7fjx_k$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpointFast.<anonymous>' call
          this_1.add_utx5q5_k$(acc);
          var left = this_1;
          // Inline function 'kotlin.apply' call
          var this_2 = carry.get_c1px32_k$(i).get_third_iz27um_k$();
          // Inline function 'kotlin.contracts.contract' call
          // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpointFast.<anonymous>' call
          this_2.add_dl6gt3_k$(0, acc);
          var right = this_2;
          next.add_utx5q5_k$(new Triple(acc, left, right));
        }
         while (inductionVariable < last_0);
      // Inline function 'kotlin.collections.plusAssign' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(next, 10));
      var tmp0_iterator_0 = next.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.seekFixpointFast.<anonymous>' call
        var tmp$ret$8 = item_0.get_first_irdx8n_k$();
        destination_0.add_utx5q5_k$(tmp$ret$8);
      }
      diagonalsMutable.add_utx5q5_k$(destination_0);
      carry.clear_j9egeb_k$();
      carry.addAll_4lagoh_k$(next);
      iteration = iteration + 1 | 0;
    }
    return new UTMatrix(diagonalsMutable, this.algebra_2);
  };
  protoOf(UTMatrix).seekFixpointFast$default_gny29y_k$ = function (maxIterations, $super) {
    maxIterations = maxIterations === VOID ? first_1(this.diagonals_1).get_size_woubt6_k$() : maxIterations;
    return $super === VOID ? this.seekFixpointFast_9rbws7_k$(maxIterations) : $super.seekFixpointFast_9rbws7_k$.call(this, maxIterations);
  };
  protoOf(UTMatrix).toFullMatrix_k02fpn_k$ = function () {
    var tmp;
    if (!(last(this.diagonals_1).get_size_woubt6_k$() === 1)) {
      throw IndexOutOfBoundsException_init_$Create$('OOB: [' + first_1(this.diagonals_1).get_size_woubt6_k$() + ', ' + last(this.diagonals_1).get_size_woubt6_k$() + ']');
    } else {
      var tmp_0 = this.diagonals_1.get_size_woubt6_k$() + 1 | 0;
      var tmp_1 = this.diagonals_1.get_size_woubt6_k$() + 1 | 0;
      tmp = FreeMatrix_init_$Create$_2(this.algebra_2, tmp_0, tmp_1, UTMatrix$toFullMatrix$lambda(this));
    }
    return tmp;
  };
  protoOf(UTMatrix).new_gfpijo_k$ = function (rows, cols, data, alg) {
    return UTMatrix_init_$Create$_0(rows, cols, data, alg);
  };
  protoOf(UTMatrix).new_h99czx_k$ = function (rows, cols, data, alg) {
    return this.new_gfpijo_k$(rows, cols, data, isInterface(alg, Ring) ? alg : THROW_CCE());
  };
  protoOf(UTMatrix).map_3s35hz_k$ = function (f) {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.diagonals_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.tensor.UTMatrix.map.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(item, 10));
      var tmp0_iterator_0 = item.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_0.next_20eer_k$();
        destination_0.add_utx5q5_k$(f(item_0));
      }
      destination.add_utx5q5_k$(destination_0);
    }
    return new UTMatrix(destination, this.algebra_2);
  };
  function FreeMatrix_init_$Init$(elements, $this) {
    // Inline function 'kotlin.math.sqrt' call
    var x = elements.get_size_woubt6_k$();
    var tmp$ret$0 = Math.sqrt(x);
    FreeMatrix.call($this, numberToInt(tmp$ret$0), VOID, elements);
    return $this;
  }
  function FreeMatrix_init_$Create$(elements) {
    return FreeMatrix_init_$Init$(elements, objectCreate(protoOf(FreeMatrix)));
  }
  function FreeMatrix_init_$Init$_0(algebra, elements, $this) {
    // Inline function 'kotlin.math.sqrt' call
    var x = elements.get_size_woubt6_k$();
    var tmp$ret$0 = Math.sqrt(x);
    var tmp0_numRows = numberToInt(tmp$ret$0);
    FreeMatrix.call($this, tmp0_numRows, VOID, elements, algebra);
    return $this;
  }
  function FreeMatrix_init_$Create$_0(algebra, elements) {
    return FreeMatrix_init_$Init$_0(algebra, elements, objectCreate(protoOf(FreeMatrix)));
  }
  function FreeMatrix_init_$Init$_1(numRows, numCols, f, $this) {
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
        list.add_utx5q5_k$(tmp$ret$0);
      }
       while (inductionVariable < size);
    FreeMatrix.call($this, numRows, numCols, list);
    return $this;
  }
  function FreeMatrix_init_$Create$_1(numRows, numCols, f) {
    return FreeMatrix_init_$Init$_1(numRows, numCols, f, objectCreate(protoOf(FreeMatrix)));
  }
  function FreeMatrix_init_$Init$_2(algebra, numRows, numCols, f, $this) {
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
        list.add_utx5q5_k$(tmp$ret$0);
      }
       while (inductionVariable < size);
    FreeMatrix.call($this, numRows, numCols, list, algebra);
    return $this;
  }
  function FreeMatrix_init_$Create$_2(algebra, numRows, numCols, f) {
    return FreeMatrix_init_$Init$_2(algebra, numRows, numCols, f, objectCreate(protoOf(FreeMatrix)));
  }
  function FreeMatrix$toString$lambda($colWidth) {
    return function (it) {
      // Inline function 'kotlin.collections.mapIndexed' call
      // Inline function 'kotlin.collections.mapIndexedTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(it, 10));
      var index = 0;
      var tmp0_iterator = it.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.FreeMatrix.toString.<anonymous>.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var i = checkIndexOverflow(tmp1);
        var tmp$ret$0 = padEnd('' + item, $colWidth.get_c1px32_k$(i));
        destination.add_utx5q5_k$(tmp$ret$0);
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
    this.numRows_2 = numRows;
    this.numCols_2 = numCols;
    this.data_1 = data;
    this.algebra_2 = algebra;
  }
  protoOf(FreeMatrix).get_numRows_vts1uy_k$ = function () {
    return this.numRows_2;
  };
  protoOf(FreeMatrix).get_numCols_vu1mxc_k$ = function () {
    return this.numCols_2;
  };
  protoOf(FreeMatrix).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(FreeMatrix).get_algebra_dvz2yp_k$ = function () {
    return this.algebra_2;
  };
  protoOf(FreeMatrix).new_gfpijo_k$ = function (rows, cols, data, alg) {
    return new FreeMatrix(rows, cols, data, this.get_algebra_dvz2yp_k$());
  };
  protoOf(FreeMatrix).new_h99czx_k$ = function (rows, cols, data, alg) {
    return this.new_gfpijo_k$(rows, cols, data, isInterface(alg, Ring) ? alg : THROW_CCE());
  };
  protoOf(FreeMatrix).toString = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_cols(this);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.tensor.FreeMatrix.toString.<anonymous>' call
      // Inline function 'kotlin.collections.maxOf' call
      var iterator = item.iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$())
        throw NoSuchElementException_init_$Create$();
      // Inline function 'ai.hypergraph.kaliningraph.tensor.FreeMatrix.toString.<anonymous>.<anonymous>' call
      var maxValue = ('' + iterator.next_20eer_k$()).length;
      while (iterator.hasNext_bitz1p_k$()) {
        // Inline function 'ai.hypergraph.kaliningraph.tensor.FreeMatrix.toString.<anonymous>.<anonymous>' call
        var v = ('' + iterator.next_20eer_k$()).length;
        if (compareTo(maxValue, v) < 0) {
          maxValue = v;
        }
      }
      var tmp$ret$3 = maxValue;
      destination.add_utx5q5_k$(tmp$ret$3);
    }
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.tensor.FreeMatrix.toString.<anonymous>' call
    var tmp = get_rows(this);
    return '\n' + joinToString(tmp, '\n', VOID, VOID, VOID, VOID, FreeMatrix$toString$lambda(destination));
  };
  function AbstractMatrix$values$delegate$lambda(this$0) {
    return function () {
      return toSet_1(this$0.get_data_wokkxf_k$());
    };
  }
  function AbstractMatrix$map$delegate$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.collections.fold' call
      var this_0 = get_idxs(this$0);
      // Inline function 'kotlin.collections.mutableMapOf' call
      var accumulator = LinkedHashMap_init_$Create$();
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.AbstractMatrix.map$delegate.<anonymous>.<anonymous>' call
        var map = accumulator;
        // Inline function 'kotlin.collections.component1' call
        var r = element.get_c1px32_k$(0);
        // Inline function 'kotlin.collections.component2' call
        var c = element.get_c1px32_k$(1);
        var element_0 = this$0.get_bzg6vq_k$(r, c);
        if (!equals(element_0, this$0.get_algebra_dvz2yp_k$().get_nil_18izx4_k$())) {
          // Inline function 'kotlin.collections.set' call
          var key = Π_0(r, c, element_0);
          map.put_4fpzoq_k$(key, 1);
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
      var tmp0_iterator = it.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.AbstractMatrix.toString.<anonymous>.<anonymous>.<anonymous>' call
        var tmp1 = index;
        index = tmp1 + 1 | 0;
        var i = checkIndexOverflow(tmp1);
        var tmp$ret$0 = padEnd('' + item, $colWidth.get_c1px32_k$(i));
        destination.add_utx5q5_k$(tmp$ret$0);
      }
      return joinToString(destination, '  ');
    };
  }
  function AbstractMatrix$hash$delegate$lambda(this$0) {
    return function () {
      var result = getObjectHashCode(this$0);
      result = imul(31, result) + this$0.get_numRows_vts1uy_k$() | 0;
      result = imul(31, result) + this$0.get_numCols_vu1mxc_k$() | 0;
      result = imul(31, result) + hashCode(this$0.get_data_wokkxf_k$()) | 0;
      result = imul(31, result) + hashCode(this$0.get_algebra_dvz2yp_k$()) | 0;
      return result;
    };
  }
  function AbstractMatrix(algebra, numRows, numCols) {
    numCols = numCols === VOID ? numRows : numCols;
    this.algebra_1 = algebra;
    this.numRows_1 = numRows;
    this.numCols_1 = numCols;
    var tmp = this;
    tmp.values$delegate_1 = lazy(AbstractMatrix$values$delegate$lambda(this));
    var tmp_0 = this;
    tmp_0.map$delegate_1 = lazy(AbstractMatrix$map$delegate$lambda(this));
    var tmp_1 = this;
    tmp_1.hash$delegate_1 = lazy(AbstractMatrix$hash$delegate$lambda(this));
  }
  protoOf(AbstractMatrix).get_algebra_dvz2yp_k$ = function () {
    return this.algebra_1;
  };
  protoOf(AbstractMatrix).get_numRows_vts1uy_k$ = function () {
    return this.numRows_1;
  };
  protoOf(AbstractMatrix).get_numCols_vu1mxc_k$ = function () {
    return this.numCols_1;
  };
  protoOf(AbstractMatrix).get_values_ksazhn_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.values$delegate_1;
    values$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(AbstractMatrix).get_map_18j0ul_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.map$delegate_1;
    map$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(AbstractMatrix).toString = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_cols(this);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.tensor.AbstractMatrix.toString.<anonymous>' call
      // Inline function 'kotlin.collections.maxOf' call
      var iterator = item.iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$())
        throw NoSuchElementException_init_$Create$();
      // Inline function 'ai.hypergraph.kaliningraph.tensor.AbstractMatrix.toString.<anonymous>.<anonymous>' call
      var maxValue = ('' + iterator.next_20eer_k$()).length;
      while (iterator.hasNext_bitz1p_k$()) {
        // Inline function 'ai.hypergraph.kaliningraph.tensor.AbstractMatrix.toString.<anonymous>.<anonymous>' call
        var v = ('' + iterator.next_20eer_k$()).length;
        if (compareTo(maxValue, v) < 0) {
          maxValue = v;
        }
      }
      var tmp$ret$3 = maxValue;
      destination.add_utx5q5_k$(tmp$ret$3);
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
    if (!(this.get_numRows_vts1uy_k$() === other.get_numRows_vts1uy_k$()))
      return false;
    if (!(this.get_numCols_vu1mxc_k$() === other.get_numCols_vu1mxc_k$()))
      return false;
    if (!equals(this.get_data_wokkxf_k$(), other.get_data_wokkxf_k$()))
      return false;
    return true;
  };
  protoOf(AbstractMatrix).get_hash_won4uv_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.hash$delegate_1;
    hash$factory_0();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(AbstractMatrix).hashCode = function () {
    return this.get_hash_won4uv_k$();
  };
  function times_1(_this__u8e3s4, value) {
    _init_properties_Tensor_kt__gweomx();
    return times_2(value, _this__u8e3s4);
  }
  function SparseTensor() {
  }
  function toUTMatrix(_this__u8e3s4) {
    _init_properties_Tensor_kt__gweomx();
    return UTMatrix_init_$Create$_0(_this__u8e3s4.get_numRows_vts1uy_k$(), _this__u8e3s4.get_numCols_vu1mxc_k$(), _this__u8e3s4.get_data_wokkxf_k$(), _this__u8e3s4.get_algebra_dvz2yp_k$());
  }
  function TODO_ALGEBRA(t) {
    _init_properties_Tensor_kt__gweomx();
    var tmp = TODO_ALGEBRA$lambda;
    return new of_1(t, VOID, tmp, TODO_ALGEBRA$lambda_0);
  }
  function times_2(_this__u8e3s4, value) {
    _init_properties_Tensor_kt__gweomx();
    var tmp = _this__u8e3s4.get_numRows_vts1uy_k$();
    var tmp_0 = _this__u8e3s4.get_numCols_vu1mxc_k$();
    // Inline function 'kotlin.collections.map' call
    var this_0 = _this__u8e3s4.get_data_wokkxf_k$();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.tensor.times.<anonymous>' call
      var tmp$ret$0 = item * value;
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return new DoubleMatrix(tmp, tmp_0, destination);
  }
  function BooleanMatrix$Companion$zeroes$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return false;
  }
  function BooleanMatrix$Companion$ones$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return true;
  }
  function BooleanMatrix$Companion$one$lambda(i, j) {
    return i === j;
  }
  function BooleanMatrix$Companion$random$lambda(_anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    return Default_getInstance().nextBoolean_nfdk1h_k$();
  }
  function BooleanMatrix_init_$Init$(elements, $this) {
    // Inline function 'kotlin.math.sqrt' call
    var x = elements.get_size_woubt6_k$();
    var tmp$ret$0 = Math.sqrt(x);
    BooleanMatrix.call($this, numberToInt(tmp$ret$0), VOID, elements);
    return $this;
  }
  function BooleanMatrix_init_$Create$(elements) {
    return BooleanMatrix_init_$Init$(elements, objectCreate(protoOf(BooleanMatrix)));
  }
  function BooleanMatrix_init_$Init$_0(algebra, elements, $this) {
    // Inline function 'kotlin.math.sqrt' call
    var x = elements.get_size_woubt6_k$();
    var tmp$ret$0 = Math.sqrt(x);
    var tmp0_numRows = numberToInt(tmp$ret$0);
    BooleanMatrix.call($this, tmp0_numRows, VOID, elements, algebra);
    return $this;
  }
  function BooleanMatrix_init_$Create$_0(algebra, elements) {
    return BooleanMatrix_init_$Init$_0(algebra, elements, objectCreate(protoOf(BooleanMatrix)));
  }
  function BooleanMatrix_init_$Init$_1(numRows, numCols, f, $this) {
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
        list.add_utx5q5_k$(tmp$ret$0);
      }
       while (inductionVariable < size);
    BooleanMatrix.call($this, numRows, numCols, list);
    return $this;
  }
  function BooleanMatrix_init_$Create$_1(numRows, numCols, f) {
    return BooleanMatrix_init_$Init$_1(numRows, numCols, f, objectCreate(protoOf(BooleanMatrix)));
  }
  function BooleanMatrix_init_$Init$_2(rows, $this) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = '';
    var inductionVariable = 0;
    var last = rows.length;
    while (inductionVariable < last) {
      var element = rows[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'ai.hypergraph.kaliningraph.tensor.BooleanMatrix.<init>.<anonymous>' call
      accumulator = accumulator + element;
    }
    var tmp$ret$1 = accumulator;
    BooleanMatrix_init_$Init$_3(tmp$ret$1, $this);
    return $this;
  }
  function BooleanMatrix_init_$Create$_2(rows) {
    return BooleanMatrix_init_$Init$_2(rows, objectCreate(protoOf(BooleanMatrix)));
  }
  function BooleanMatrix_init_$Init$_3(rows, $this) {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.text.filter' call
    // Inline function 'kotlin.text.filterTo' call
    var destination = StringBuilder_init_$Create$();
    var inductionVariable = 0;
    var last = charSequenceLength(rows);
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = charSequenceGet(rows, index);
        // Inline function 'ai.hypergraph.kaliningraph.tensor.BooleanMatrix.<init>.<anonymous>' call
        if (!isWhitespace(element)) {
          destination.append_am5a4z_k$(element);
        }
      }
       while (inductionVariable < last);
    var tmp$ret$2 = destination.toString();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.tensor.BooleanMatrix.<init>.<anonymous>' call
    var chars = toCharArray(tmp$ret$2);
    var values = distinct_1(chars);
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(values.get_size_woubt6_k$() <= 2)) {
      // Inline function 'ai.hypergraph.kaliningraph.tensor.BooleanMatrix.<init>.<anonymous>.<anonymous>' call
      var message = 'Expected two values or less';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.tensor.BooleanMatrix.<init>.<anonymous>.<anonymous>' call
    var hi = ensureNotNull(maxOrNull(values)).value_1;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination_0 = ArrayList_init_$Create$(chars.length);
    var inductionVariable_0 = 0;
    var last_0 = chars.length;
    while (inductionVariable_0 < last_0) {
      var item = chars[inductionVariable_0];
      inductionVariable_0 = inductionVariable_0 + 1 | 0;
      // Inline function 'ai.hypergraph.kaliningraph.tensor.BooleanMatrix.<init>.<anonymous>.<anonymous>.<anonymous>' call
      var tmp$ret$4 = item === hi;
      destination_0.add_utx5q5_k$(tmp$ret$4);
    }
    BooleanMatrix_init_$Init$(destination_0, $this);
    return $this;
  }
  function BooleanMatrix_init_$Create$_3(rows) {
    return BooleanMatrix_init_$Init$_3(rows, objectCreate(protoOf(BooleanMatrix)));
  }
  function BooleanMatrix_init_$Init$_4(numRows, numCols, values, $this) {
    numCols = numCols === VOID ? numRows : numCols;
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.tensor.BooleanMatrix.<init>.<anonymous>' call
    var map = toMap(values);
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
        // Inline function 'ai.hypergraph.kaliningraph.tensor.BooleanMatrix.<init>.<anonymous>.<anonymous>' call
        var tmp0_elvis_lhs = map.get_wei43m_k$(to(index / numCols | 0, index % numCols | 0));
        var tmp$ret$0 = tmp0_elvis_lhs == null ? false : tmp0_elvis_lhs;
        list.add_utx5q5_k$(tmp$ret$0);
      }
       while (inductionVariable < size);
    BooleanMatrix.call($this, numRows, numCols, list);
    return $this;
  }
  function BooleanMatrix_init_$Create$_4(numRows, numCols, values) {
    return BooleanMatrix_init_$Init$_4(numRows, numCols, values, objectCreate(protoOf(BooleanMatrix)));
  }
  function Companion_3() {
    Companion_instance_3 = this;
  }
  protoOf(Companion_3).grayCode_7kiv14_k$ = function (size) {
    throw new NotImplementedError();
  };
  protoOf(Companion_3).zeroes_6uujzy_k$ = function (size) {
    return BooleanMatrix_init_$Create$_1(size, VOID, BooleanMatrix$Companion$zeroes$lambda);
  };
  protoOf(Companion_3).ones_5d0f85_k$ = function (size) {
    return BooleanMatrix_init_$Create$_1(size, VOID, BooleanMatrix$Companion$ones$lambda);
  };
  protoOf(Companion_3).one_yep1ki_k$ = function (size) {
    return BooleanMatrix_init_$Create$_1(size, VOID, BooleanMatrix$Companion$one$lambda);
  };
  protoOf(Companion_3).random_wnev7n_k$ = function (rows, cols) {
    return BooleanMatrix_init_$Create$_1(rows, cols, BooleanMatrix$Companion$random$lambda);
  };
  protoOf(Companion_3).random$default_64ihqo_k$ = function (rows, cols, $super) {
    cols = cols === VOID ? rows : cols;
    return $super === VOID ? this.random_wnev7n_k$(rows, cols) : $super.random_wnev7n_k$.call(this, rows, cols);
  };
  var Companion_instance_3;
  function Companion_getInstance_4() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function BooleanMatrix$isFull$delegate$lambda(this$0) {
    return function () {
      var tmp$ret$0;
      $l$block_0: {
        // Inline function 'kotlin.collections.all' call
        var this_0 = this$0.get_data_wokkxf_k$();
        var tmp;
        if (isInterface(this_0, Collection)) {
          tmp = this_0.isEmpty_y1axqb_k$();
        } else {
          tmp = false;
        }
        if (tmp) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
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
    Companion_getInstance_4();
    numCols = numCols === VOID ? numRows : numCols;
    algebra = algebra === VOID ? get_BOOLEAN_ALGEBRA() : algebra;
    AbstractMatrix.call(this, algebra, numRows, numCols);
    this.numRows_2 = numRows;
    this.numCols_2 = numCols;
    this.data_1 = data;
    this.algebra_2 = algebra;
    var tmp = this;
    tmp.isFull$delegate_1 = lazy(BooleanMatrix$isFull$delegate$lambda(this));
  }
  protoOf(BooleanMatrix).get_numRows_vts1uy_k$ = function () {
    return this.numRows_2;
  };
  protoOf(BooleanMatrix).get_numCols_vu1mxc_k$ = function () {
    return this.numCols_2;
  };
  protoOf(BooleanMatrix).get_data_wokkxf_k$ = function () {
    return this.data_1;
  };
  protoOf(BooleanMatrix).get_algebra_dvz2yp_k$ = function () {
    return this.algebra_2;
  };
  protoOf(BooleanMatrix).get_isFull_evxxpe_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.isFull$delegate_1;
    isFull$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(BooleanMatrix).toString = function () {
    var tmp = chunked(this.get_data_wokkxf_k$(), this.get_numCols_vu1mxc_k$());
    return joinToString(tmp, '\n', '\n', VOID, VOID, VOID, BooleanMatrix$toString$lambda);
  };
  protoOf(BooleanMatrix).new_e9exfi_k$ = function (rows, cols, data, alg) {
    return new BooleanMatrix(rows, cols, data, alg);
  };
  protoOf(BooleanMatrix).new_h99czx_k$ = function (rows, cols, data, alg) {
    return this.new_e9exfi_k$(rows, cols, data, isInterface(alg, Ring) ? alg : THROW_CCE());
  };
  function minus_4(_this__u8e3s4, mat) {
    _init_properties_Tensor_kt__gweomx();
    return _this__u8e3s4.minus_x055qs_k$(toDoubleMatrix_0(mat));
  }
  function toDoubleMatrix_0(_this__u8e3s4) {
    _init_properties_Tensor_kt__gweomx();
    var tmp = _this__u8e3s4.get_numRows_vts1uy_k$();
    var tmp_0 = _this__u8e3s4.get_numCols_vu1mxc_k$();
    return DoubleMatrix_init_$Create$_0(tmp, tmp_0, toDoubleMatrix$lambda_0(_this__u8e3s4));
  }
  function idxs$delegate$lambda($this$cache) {
    _init_properties_Tensor_kt__gweomx();
    return allPairs($this$cache.get_numRows_vts1uy_k$(), $this$cache.get_numCols_vu1mxc_k$());
  }
  function rows$delegate$lambda($this$cache) {
    _init_properties_Tensor_kt__gweomx();
    return chunked($this$cache.get_data_wokkxf_k$(), $this$cache.get_numCols_vu1mxc_k$());
  }
  function cols$delegate$lambda($this$cache) {
    _init_properties_Tensor_kt__gweomx();
    // Inline function 'kotlin.collections.map' call
    var this_0 = until(0, $this$cache.get_numCols_vu1mxc_k$());
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.tensor.cols$delegate.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_1 = get_rows($this$cache);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.tensor.cols$delegate.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$0 = item_0.get_c1px32_k$(item);
        destination_0.add_utx5q5_k$(tmp$ret$0);
      }
      destination.add_utx5q5_k$(destination_0);
    }
    return destination;
  }
  function transpose$delegate$lambda($this$cache) {
    _init_properties_Tensor_kt__gweomx();
    return $this$cache.new$default_81ros5_k$($this$cache.get_numCols_vu1mxc_k$(), $this$cache.get_numRows_vts1uy_k$(), flatten(get_cols($this$cache)));
  }
  function BOOLEAN_ALGEBRA$lambda($this$$receiver, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return a ? true : b;
  }
  function BOOLEAN_ALGEBRA$lambda_0($this$$receiver, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return a ? b : false;
  }
  function XOR_ALGEBRA$lambda($this$$receiver, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return !!(a ^ b);
  }
  function XOR_ALGEBRA$lambda_0($this$$receiver, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return !!(a & b);
  }
  function INTEGER_FIELD$lambda($this$$receiver, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return a + b | 0;
  }
  function INTEGER_FIELD$lambda_0($this$$receiver, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return imul(a, b);
  }
  function INTEGER_FIELD$lambda_1($this$$receiver, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return a - b | 0;
  }
  function INTEGER_FIELD$lambda_2($this$$receiver, _anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    _init_properties_Tensor_kt__gweomx();
    throw new NotImplementedError('Division not defined on integer field.');
  }
  function DOUBLE_FIELD$lambda($this$$receiver, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return a + b;
  }
  function DOUBLE_FIELD$lambda_0($this$$receiver, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return a * b;
  }
  function DOUBLE_FIELD$lambda_1($this$$receiver, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return a - b;
  }
  function DOUBLE_FIELD$lambda_2($this$$receiver, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return a / b;
  }
  function MINPLUS_ALGEBRA$lambda($this$$receiver, a, b) {
    _init_properties_Tensor_kt__gweomx();
    // Inline function 'kotlin.math.min' call
    return Math.min(a, b);
  }
  function MINPLUS_ALGEBRA$lambda_0($this$$receiver, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return a + b | 0;
  }
  function MAXPLUS_ALGEBRA$lambda($this$$receiver, a, b) {
    _init_properties_Tensor_kt__gweomx();
    // Inline function 'kotlin.math.max' call
    return Math.max(a, b);
  }
  function MAXPLUS_ALGEBRA$lambda_0($this$$receiver, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return a + b | 0;
  }
  function GF2_ALGEBRA$lambda($this$$receiver, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return (a + b | 0) % 2 | 0;
  }
  function GF2_ALGEBRA$lambda_0($this$$receiver, a, b) {
    _init_properties_Tensor_kt__gweomx();
    return imul(a, b) % 2 | 0;
  }
  function TODO_ALGEBRA$lambda($this$$receiver, _anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    _init_properties_Tensor_kt__gweomx();
    throw new NotImplementedError();
  }
  function TODO_ALGEBRA$lambda_0($this$$receiver, _anonymous_parameter_0__qggqh8, _anonymous_parameter_1__qggqgd) {
    _init_properties_Tensor_kt__gweomx();
    throw new NotImplementedError();
  }
  function toDoubleMatrix$lambda_0($this_toDoubleMatrix) {
    return function (i, j) {
      return $this_toDoubleMatrix.get_bzg6vq_k$(i, j) ? 1.0 : 0.0;
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
      return receiver.get_data_wokkxf_k$();
    }, null);
  }
  function values$factory() {
    return getPropertyCallableRef('values', 1, KProperty1, function (receiver) {
      return receiver.get_values_ksazhn_k$();
    }, null);
  }
  function map$factory() {
    return getPropertyCallableRef('map', 1, KProperty1, function (receiver) {
      return receiver.get_map_18j0ul_k$();
    }, null);
  }
  function hash$factory_0() {
    return getPropertyCallableRef('hash', 1, KProperty1, function (receiver) {
      return receiver.get_hash_won4uv_k$();
    }, null);
  }
  function isFull$factory() {
    return getPropertyCallableRef('isFull', 1, KProperty1, function (receiver) {
      return receiver.get_isFull_evxxpe_k$();
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
      var tmp_7 = IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$();
      var tmp_8 = MINPLUS_ALGEBRA$lambda;
      MINPLUS_ALGEBRA = new of_1(tmp_7, 0, tmp_8, MINPLUS_ALGEBRA$lambda_0);
      var tmp_9 = IntCompanionObject_getInstance().get_MIN_VALUE_7nmmor_k$();
      var tmp_10 = MAXPLUS_ALGEBRA$lambda;
      MAXPLUS_ALGEBRA = new of_1(tmp_9, 0, tmp_10, MAXPLUS_ALGEBRA$lambda_0);
      var tmp_11 = GF2_ALGEBRA$lambda;
      GF2_ALGEBRA = new of_1(0, 1, tmp_11, GF2_ALGEBRA$lambda_0);
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
        var tmp0_iterator = this_0.iterator_jk1svi_k$();
        while (tmp0_iterator.hasNext_bitz1p_k$()) {
          var element = tmp0_iterator.next_20eer_k$();
          // Inline function 'ai.hypergraph.kaliningraph.theory.wl.<anonymous>' call
          // Inline function 'kotlin.collections.map' call
          var this_1 = get_neighbors(element);
          // Inline function 'kotlin.collections.mapTo' call
          var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
          var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
          while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
            var item = tmp0_iterator_0.next_20eer_k$();
            destination.add_utx5q5_k$(label_0(item));
          }
          var tmp$ret$2 = hashCode(sorted(destination));
          result.put_4fpzoq_k$(element, tmp$ret$2);
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
              tmp_2 = this_2.isEmpty_y1axqb_k$();
            } else {
              tmp_2 = false;
            }
            if (tmp_2) {
              tmp$ret$5 = true;
              break $l$block_0;
            }
            var tmp0_iterator_1 = this_2.iterator_jk1svi_k$();
            while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
              var element_0 = tmp0_iterator_1.next_20eer_k$();
              // Inline function 'ai.hypergraph.kaliningraph.theory.wl.<anonymous>' call
              if (!(label_0(element_0) === updates.get_wei43m_k$(element_0))) {
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
      return ensureNotNull(get_histogram($this_wl).get_wei43m_k$(it));
    };
  }
  function wl$lambda_0($updates) {
    return function (it) {
      return ensureNotNull($updates.get_wei43m_k$(it));
    };
  }
  function of_init_$Init$(l, es, $this) {
    of.call($this, l, toList_3(es));
    return $this;
  }
  function of_init_$Create$(l, es) {
    return of_init_$Init$(l, es, objectCreate(protoOf(of)));
  }
  function of(len, l) {
    this.len_1 = len;
    this.l_1 = l;
  }
  protoOf(of).get_len_18j1hw_k$ = function () {
    return this.len_1;
  };
  protoOf(of).get_l_1mhr5v_k$ = function () {
    return this.l_1;
  };
  protoOf(of).get_size_woubt6_k$ = function () {
    return this.l_1.get_size_woubt6_k$();
  };
  protoOf(of).contains_aljjnj_k$ = function (element) {
    return this.l_1.contains_aljjnj_k$(element);
  };
  protoOf(of).containsAll_xk45sd_k$ = function (elements) {
    return this.l_1.containsAll_xk45sd_k$(elements);
  };
  protoOf(of).get_c1px32_k$ = function (index) {
    return this.l_1.get_c1px32_k$(index);
  };
  protoOf(of).indexOf_si1fv9_k$ = function (element) {
    return this.l_1.indexOf_si1fv9_k$(element);
  };
  protoOf(of).isEmpty_y1axqb_k$ = function () {
    return this.l_1.isEmpty_y1axqb_k$();
  };
  protoOf(of).iterator_jk1svi_k$ = function () {
    return this.l_1.iterator_jk1svi_k$();
  };
  protoOf(of).lastIndexOf_v2p1fv_k$ = function (element) {
    return this.l_1.lastIndexOf_v2p1fv_k$(element);
  };
  protoOf(of).listIterator_xjshxw_k$ = function () {
    return this.l_1.listIterator_xjshxw_k$();
  };
  protoOf(of).listIterator_70e65o_k$ = function (index) {
    return this.l_1.listIterator_70e65o_k$(index);
  };
  protoOf(of).subList_xle3r2_k$ = function (fromIndex, toIndex) {
    return this.l_1.subList_xle3r2_k$(fromIndex, toIndex);
  };
  protoOf(of).equals = function (other) {
    var tmp0_safe_receiver = (!(other == null) ? isInterface(other, VT) : false) ? other : null;
    return equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_l_1mhr5v_k$(), this.l_1);
  };
  protoOf(of).toString = function () {
    return toString(this.l_1);
  };
  function VT() {
  }
  function VT_0(v1, v2, v3) {
    return of_init_$Create$(get_S3(), [v1, v2, v3]);
  }
  function Π4(π1, π2, π3, π4) {
    this.π1__1 = π1;
    this.π2__1 = π2;
    this.π3__1 = π3;
    this.π4__1 = π4;
  }
  protoOf(Π4).get_π1_knt3ie_k$ = function () {
    return this.π1__1;
  };
  protoOf(Π4).get_π2_knt3id_k$ = function () {
    return this.π2__1;
  };
  protoOf(Π4).get_π3_knt3ic_k$ = function () {
    return this.π3__1;
  };
  protoOf(Π4).get_π4_knt3ib_k$ = function () {
    return this.π4__1;
  };
  protoOf(Π4).component1_7eebsc_k$ = function () {
    return this.π1__1;
  };
  protoOf(Π4).component2_7eebsb_k$ = function () {
    return this.π2__1;
  };
  protoOf(Π4).component3_7eebsa_k$ = function () {
    return this.π3__1;
  };
  protoOf(Π4).component4_7eebs9_k$ = function () {
    return this.π4__1;
  };
  protoOf(Π4).copy_hxkmbx_k$ = function (π1, π2, π3, π4) {
    return new Π4(π1, π2, π3, π4);
  };
  protoOf(Π4).copy$default_z94e14_k$ = function (π1, π2, π3, π4, $super) {
    π1 = π1 === VOID ? this.π1__1 : π1;
    π2 = π2 === VOID ? this.π2__1 : π2;
    π3 = π3 === VOID ? this.π3__1 : π3;
    π4 = π4 === VOID ? this.π4__1 : π4;
    return $super === VOID ? this.copy_hxkmbx_k$(π1, π2, π3, π4) : $super.copy_hxkmbx_k$.call(this, π1, π2, π3, π4);
  };
  protoOf(Π4).toString = function () {
    return '\u03A04(\u03C01=' + this.π1__1 + ', \u03C02=' + this.π2__1 + ', \u03C03=' + this.π3__1 + ', \u03C04=' + this.π4__1 + ')';
  };
  protoOf(Π4).hashCode = function () {
    var result = this.π1__1 == null ? 0 : hashCode(this.π1__1);
    result = imul(result, 31) + (this.π2__1 == null ? 0 : hashCode(this.π2__1)) | 0;
    result = imul(result, 31) + (this.π3__1 == null ? 0 : hashCode(this.π3__1)) | 0;
    result = imul(result, 31) + (this.π4__1 == null ? 0 : hashCode(this.π4__1)) | 0;
    return result;
  };
  protoOf(Π4).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Π4))
      return false;
    var tmp0_other_with_cast = other instanceof Π4 ? other : THROW_CCE();
    if (!equals(this.π1__1, tmp0_other_with_cast.π1__1))
      return false;
    if (!equals(this.π2__1, tmp0_other_with_cast.π2__1))
      return false;
    if (!equals(this.π3__1, tmp0_other_with_cast.π3__1))
      return false;
    if (!equals(this.π4__1, tmp0_other_with_cast.π4__1))
      return false;
    return true;
  };
  function to_0(_this__u8e3s4, that) {
    return Π_1(get_π1(_this__u8e3s4), get_π2(_this__u8e3s4), get_π3(_this__u8e3s4), that);
  }
  function to_1(_this__u8e3s4, that) {
    return Π_0(get_π1_0(_this__u8e3s4), get_π2_0(_this__u8e3s4), that);
  }
  function get_π2(_this__u8e3s4) {
    return _this__u8e3s4.get_second_jf7fjx_k$();
  }
  function get_π1(_this__u8e3s4) {
    return _this__u8e3s4.get_first_irdx8n_k$();
  }
  function get_π3(_this__u8e3s4) {
    return _this__u8e3s4.get_third_iz27um_k$();
  }
  function filter_0(_this__u8e3s4, predicate) {
    // Inline function 'kotlin.apply' call
    var this_0 = toMutableSet(_this__u8e3s4);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
    retainAll(this_0, predicate);
    return this_0;
  }
  function times_3(_this__u8e3s4, other) {
    return flatMap(_this__u8e3s4, times$lambda(other));
  }
  function times_4(_this__u8e3s4, s) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.times.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(s, 10));
      var tmp0_iterator_0 = s.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_0.next_20eer_k$();
        var tmp$ret$0 = to(element, item);
        destination_0.add_utx5q5_k$(tmp$ret$0);
      }
      var list = toSet_1(destination_0);
      addAll(destination, list);
    }
    return toSet_1(destination);
  }
  function intersect_1(_this__u8e3s4) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = toMutableSet(first(_this__u8e3s4));
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.intersect.<anonymous>' call
      // Inline function 'kotlin.apply' call
      var this_0 = accumulator;
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.types.intersect.<anonymous>.<anonymous>' call
      this_0.retainAll_9fhiib_k$(element);
      accumulator = this_0;
    }
    return accumulator;
  }
  function powerset(_this__u8e3s4) {
    return sequence(powerset$slambda_0(_this__u8e3s4, null));
  }
  function allPairs(numRows, numCols) {
    return times_5(until(0, numRows), until(0, numCols));
  }
  function cc(_this__u8e3s4, that) {
    return VT_1(_this__u8e3s4, that);
  }
  function Π_0(π1, π2, π3) {
    return new Triple(π1, π2, π3);
  }
  function Π_1(π1, π2, π3, π4) {
    return new Π4(π1, π2, π3, π4);
  }
  function get_π1_0(_this__u8e3s4) {
    return _this__u8e3s4.get_first_irdx8n_k$();
  }
  function get_π2_0(_this__u8e3s4) {
    return _this__u8e3s4.get_second_jf7fjx_k$();
  }
  function times_5(_this__u8e3s4, s) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.times.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(s, 10));
      var tmp0_iterator_0 = s.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_0.next_20eer_k$();
        var tmp$ret$0 = cc(element, item);
        destination_0.add_utx5q5_k$(tmp$ret$0);
      }
      var list = toSet_1(destination_0);
      addAll(destination, list);
    }
    return toSet_1(destination);
  }
  function VT_1(v1, v2) {
    return of_init_$Create$(get_S2(), [v1, v2]);
  }
  function get_first(_this__u8e3s4) {
    // Inline function 'kotlin.collections.component1' call
    return _this__u8e3s4.get_c1px32_k$(0);
  }
  function get_second(_this__u8e3s4) {
    // Inline function 'kotlin.collections.component2' call
    return _this__u8e3s4.get_c1px32_k$(1);
  }
  function isStrictSubsetOf(_this__u8e3s4, ir) {
    return (ir.get_first_irdx8n_k$() <= _this__u8e3s4.get_first_irdx8n_k$() ? _this__u8e3s4.get_last_wopotb_k$() <= ir.get_last_wopotb_k$() : false) ? !_this__u8e3s4.equals(ir) : false;
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
    this.$this_powerset_1 = $this_powerset;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(powerset$slambda).invoke_zfzkbx_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_axi2up_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(powerset$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_zfzkbx_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(powerset$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(7);
            this.tmp0_subject0__1 = this.$this_powerset_1.get_size_woubt6_k$();
            if (this.tmp0_subject0__1 === 0) {
              this.set_state_rjd8d0_k$(5);
              suspendResult = this.$this$sequence_1.yield_3xhcex_k$(emptySet(), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.head1__1 = first(this.$this_powerset_1);
              this.tail2__1 = minus_1(this.$this_powerset_1, this.head1__1);
              this.set_state_rjd8d0_k$(1);
              suspendResult = this.$this$sequence_1.yieldAll_h63j2x_k$(powerset(this.tail2__1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var tmp_0 = this;
            tmp_0.this3__1 = powerset(this.tail2__1);
            this.tmp0_iterator4__1 = this.this3__1.iterator_jk1svi_k$();
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 2:
            if (!this.tmp0_iterator4__1.hasNext_bitz1p_k$()) {
              this.set_state_rjd8d0_k$(4);
              continue $sm;
            }

            this.element5__1 = this.tmp0_iterator4__1.next_20eer_k$();
            var tmp_1 = this;
            tmp_1.it6__1 = this.element5__1;
            this.set_state_rjd8d0_k$(3);
            suspendResult = this.$this$sequence_1.yield_3xhcex_k$(plus_1(setOf(this.head1__1), this.it6__1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.set_state_rjd8d0_k$(2);
            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 5:
            this.set_state_rjd8d0_k$(6);
            continue $sm;
          case 6:
            return Unit_getInstance();
          case 7:
            throw this.get_exception_x0n6w6_k$();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 7) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(powerset$slambda).create_axi2up_k$ = function ($this$sequence, completion) {
    var i = new powerset$slambda(this.$this_powerset_1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(powerset$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_axi2up_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function powerset$slambda_0($this_powerset, resultContinuation) {
    var i = new powerset$slambda($this_powerset, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_zfzkbx_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function get_b0() {
    _init_properties_Binary_kt__mprh27();
    return b0;
  }
  var b0;
  function get_b1() {
    _init_properties_Binary_kt__mprh27();
    return b1;
  }
  var b1;
  function get_b2() {
    _init_properties_Binary_kt__mprh27();
    return b2;
  }
  var b2;
  function get_b3() {
    _init_properties_Binary_kt__mprh27();
    return b3;
  }
  var b3;
  function get_b4() {
    _init_properties_Binary_kt__mprh27();
    return b4;
  }
  var b4;
  function get_b5() {
    _init_properties_Binary_kt__mprh27();
    return b5;
  }
  var b5;
  function get_b6() {
    _init_properties_Binary_kt__mprh27();
    return b6;
  }
  var b6;
  function get_b7() {
    _init_properties_Binary_kt__mprh27();
    return b7;
  }
  var b7;
  function Companion_4() {
    Companion_instance_4 = this;
    F.call(this, Ø_getInstance());
  }
  var Companion_instance_4;
  function Companion_getInstance_5() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function F(x) {
    Companion_getInstance_5();
    var tmp;
    if (x === VOID) {
      var tmp_0 = Ø_getInstance();
      tmp = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
    } else {
      tmp = x;
    }
    x = tmp;
    B.call(this, x);
    this.x_2 = x;
  }
  protoOf(F).get_x_1mhr67_k$ = function () {
    return this.x_2;
  };
  protoOf(F).flip_1vfcd_k$ = function () {
    return new T(this.get_x_1mhr67_k$());
  };
  function Ø() {
    Ø_instance = this;
    B.call(this, null);
  }
  protoOf(Ø).flip_1vfcd_k$ = function () {
    return Ø_getInstance();
  };
  var Ø_instance;
  function Ø_getInstance() {
    if (Ø_instance == null)
      new Ø();
    return Ø_instance;
  }
  function Companion_5() {
    Companion_instance_5 = this;
    T.call(this, Ø_getInstance());
  }
  var Companion_instance_5;
  function Companion_getInstance_6() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function T(x) {
    Companion_getInstance_6();
    var tmp;
    if (x === VOID) {
      var tmp_0 = Ø_getInstance();
      tmp = !(tmp_0 == null) ? tmp_0 : THROW_CCE();
    } else {
      tmp = x;
    }
    x = tmp;
    B.call(this, x);
    this.x_2 = x;
  }
  protoOf(T).get_x_1mhr67_k$ = function () {
    return this.x_2;
  };
  protoOf(T).flip_1vfcd_k$ = function () {
    return new F(this.get_x_1mhr67_k$());
  };
  function B(x) {
    x = x === VOID ? null : x;
    this.x_1 = x;
  }
  protoOf(B).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(B).get_T_1mhr57_k$ = function () {
    return new T(this instanceof B ? this : THROW_CCE());
  };
  protoOf(B).get_F_1mhr4t_k$ = function () {
    return new F(this instanceof B ? this : THROW_CCE());
  };
  protoOf(B).equals = function (other) {
    return this.toString() === toString_2(other);
  };
  protoOf(B).hashCode = function () {
    var tmp = getKClassFromExpression(this).hashCode();
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.get_x_1mhr67_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  protoOf(B).toString = function () {
    var tmp0_elvis_lhs = this.get_x_1mhr67_k$();
    var tmp = '' + toString(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs);
    var tmp_0;
    if (this instanceof T) {
      tmp_0 = '1';
    } else {
      tmp_0 = '0';
    }
    return tmp + tmp_0;
  };
  protoOf(B).toInt_1tsl84_k$ = function () {
    return this.toInt$default_61j4ro_k$(this.toString());
  };
  protoOf(B).toInt_2l54oe_k$ = function (s, sum) {
    var $this = this;
    var s_0 = s;
    var sum_0 = sum;
    $l$1: do {
      $l$0: do {
        var tmp;
        // Inline function 'kotlin.text.isEmpty' call
        var this_0 = s_0;
        if (charSequenceLength(this_0) === 0) {
          tmp = sum_0;
        } else {
          var tmp0 = $this;
          // Inline function 'kotlin.text.substring' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp1 = s_0.substring(1);
          var tmp2 = (sum_0 << 1) + digitToInt(charSequenceGet(s_0, 0)) | 0;
          $this = tmp0;
          s_0 = tmp1;
          sum_0 = tmp2;
          continue $l$0;
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  };
  protoOf(B).toInt$default_61j4ro_k$ = function (s, sum, $super) {
    sum = sum === VOID ? 0 : sum;
    return $super === VOID ? this.toInt_2l54oe_k$(s, sum) : $super.toInt_2l54oe_k$.call(this, s, sum);
  };
  var properties_initialized_Binary_kt_jn1jod;
  function _init_properties_Binary_kt__mprh27() {
    if (!properties_initialized_Binary_kt_jn1jod) {
      properties_initialized_Binary_kt_jn1jod = true;
      b0 = Companion_getInstance_5();
      b1 = Companion_getInstance_6();
      b2 = Companion_getInstance_6().get_F_1mhr4t_k$();
      b3 = Companion_getInstance_6().get_T_1mhr57_k$();
      b4 = Companion_getInstance_6().get_F_1mhr4t_k$().get_F_1mhr4t_k$();
      b5 = Companion_getInstance_6().get_F_1mhr4t_k$().get_T_1mhr57_k$();
      b6 = Companion_getInstance_6().get_T_1mhr57_k$().get_F_1mhr4t_k$();
      b7 = Companion_getInstance_6().get_T_1mhr57_k$().get_T_1mhr57_k$();
    }
  }
  function get_S0() {
    _init_properties_Church_kt__lnrkav();
    return S0;
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
  function get_S9() {
    _init_properties_Church_kt__lnrkav();
    return S9;
  }
  var S9;
  function S(x) {
    this.x_1 = x;
  }
  protoOf(S).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(S).equals = function (other) {
    var tmp;
    if (other instanceof S) {
      tmp = (this.x_1 == null ? other.x_1 == null : false) ? true : equals(this.x_1, other.x_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(S).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.x_1;
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
  function toInt_0(_this__u8e3s4, i) {
    i = i === VOID ? 0 : i;
    _init_properties_Church_kt__lnrkav();
    var tmp = _this__u8e3s4.x_1;
    var tmp0_safe_receiver = tmp instanceof S ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : toInt_0(tmp0_safe_receiver, i + 1 | 0);
    return tmp1_elvis_lhs == null ? i : tmp1_elvis_lhs;
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
  function get_i10() {
    _init_properties_Decimal_kt__928exr();
    return i10;
  }
  var i10;
  function get_i12() {
    _init_properties_Decimal_kt__928exr();
    return i12;
  }
  var i12;
  function get_i13() {
    _init_properties_Decimal_kt__928exr();
    return i13;
  }
  var i13;
  function get_i14() {
    _init_properties_Decimal_kt__928exr();
    return i14;
  }
  var i14;
  function get_i15() {
    _init_properties_Decimal_kt__928exr();
    return i15;
  }
  var i15;
  function get_i16() {
    _init_properties_Decimal_kt__928exr();
    return i16;
  }
  var i16;
  function get_i17() {
    _init_properties_Decimal_kt__928exr();
    return i17;
  }
  var i17;
  function get_i18() {
    _init_properties_Decimal_kt__928exr();
    return i18;
  }
  var i18;
  function get_i19() {
    _init_properties_Decimal_kt__928exr();
    return i19;
  }
  var i19;
  function Companion_6() {
    Companion_instance_6 = this;
    _0_.call(this);
  }
  var Companion_instance_6;
  function Companion_getInstance_7() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function _0_(x) {
    Companion_getInstance_7();
    x = x === VOID ? null : x;
    D.call(this, x);
    this.x_2 = x;
  }
  protoOf(_0_).get_x_1mhr67_k$ = function () {
    return this.x_2;
  };
  function Companion_7() {
    Companion_instance_7 = this;
    _1_.call(this);
  }
  var Companion_instance_7;
  function Companion_getInstance_8() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function _1_(x) {
    Companion_getInstance_8();
    x = x === VOID ? null : x;
    D.call(this, x);
    this.x_2 = x;
  }
  protoOf(_1_).get_x_1mhr67_k$ = function () {
    return this.x_2;
  };
  function Companion_8() {
    Companion_instance_8 = this;
    _2_.call(this);
  }
  var Companion_instance_8;
  function Companion_getInstance_9() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function _2_(x) {
    Companion_getInstance_9();
    x = x === VOID ? null : x;
    D.call(this, x);
    this.x_2 = x;
  }
  protoOf(_2_).get_x_1mhr67_k$ = function () {
    return this.x_2;
  };
  function Companion_9() {
    Companion_instance_9 = this;
    _3_.call(this);
  }
  var Companion_instance_9;
  function Companion_getInstance_10() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function _3_(x) {
    Companion_getInstance_10();
    x = x === VOID ? null : x;
    D.call(this, x);
    this.x_2 = x;
  }
  protoOf(_3_).get_x_1mhr67_k$ = function () {
    return this.x_2;
  };
  function Companion_10() {
    Companion_instance_10 = this;
    _4_.call(this);
  }
  var Companion_instance_10;
  function Companion_getInstance_11() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function _4_(x) {
    Companion_getInstance_11();
    x = x === VOID ? null : x;
    D.call(this, x);
    this.x_2 = x;
  }
  protoOf(_4_).get_x_1mhr67_k$ = function () {
    return this.x_2;
  };
  function Companion_11() {
    Companion_instance_11 = this;
    _5_.call(this);
  }
  var Companion_instance_11;
  function Companion_getInstance_12() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function _5_(x) {
    Companion_getInstance_12();
    x = x === VOID ? null : x;
    D.call(this, x);
    this.x_2 = x;
  }
  protoOf(_5_).get_x_1mhr67_k$ = function () {
    return this.x_2;
  };
  function Companion_12() {
    Companion_instance_12 = this;
    _6_.call(this);
  }
  var Companion_instance_12;
  function Companion_getInstance_13() {
    if (Companion_instance_12 == null)
      new Companion_12();
    return Companion_instance_12;
  }
  function _6_(x) {
    Companion_getInstance_13();
    x = x === VOID ? null : x;
    D.call(this, x);
    this.x_2 = x;
  }
  protoOf(_6_).get_x_1mhr67_k$ = function () {
    return this.x_2;
  };
  function Companion_13() {
    Companion_instance_13 = this;
    _7_.call(this);
  }
  var Companion_instance_13;
  function Companion_getInstance_14() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function _7_(x) {
    Companion_getInstance_14();
    x = x === VOID ? null : x;
    D.call(this, x);
    this.x_2 = x;
  }
  protoOf(_7_).get_x_1mhr67_k$ = function () {
    return this.x_2;
  };
  function Companion_14() {
    Companion_instance_14 = this;
    _8_.call(this);
  }
  var Companion_instance_14;
  function Companion_getInstance_15() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  function _8_(x) {
    Companion_getInstance_15();
    x = x === VOID ? null : x;
    D.call(this, x);
    this.x_2 = x;
  }
  protoOf(_8_).get_x_1mhr67_k$ = function () {
    return this.x_2;
  };
  function Companion_15() {
    Companion_instance_15 = this;
    _9_.call(this);
  }
  var Companion_instance_15;
  function Companion_getInstance_16() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function _9_(x) {
    Companion_getInstance_16();
    x = x === VOID ? null : x;
    D.call(this, x);
    this.x_2 = x;
  }
  protoOf(_9_).get_x_1mhr67_k$ = function () {
    return this.x_2;
  };
  function D(x) {
    x = x === VOID ? null : x;
    this.x_1 = x;
  }
  protoOf(D).get_x_1mhr67_k$ = function () {
    return this.x_1;
  };
  protoOf(D).get__0__18jcez_k$ = function () {
    return new _0_(this instanceof D ? this : THROW_CCE());
  };
  protoOf(D).get__1__18jce4_k$ = function () {
    return new _1_(this instanceof D ? this : THROW_CCE());
  };
  protoOf(D).get__2__18jcd9_k$ = function () {
    return new _2_(this instanceof D ? this : THROW_CCE());
  };
  protoOf(D).get__3__18jcce_k$ = function () {
    return new _3_(this instanceof D ? this : THROW_CCE());
  };
  protoOf(D).get__4__18jcbj_k$ = function () {
    return new _4_(this instanceof D ? this : THROW_CCE());
  };
  protoOf(D).get__5__18jcao_k$ = function () {
    return new _5_(this instanceof D ? this : THROW_CCE());
  };
  protoOf(D).get__6__18jc9t_k$ = function () {
    return new _6_(this instanceof D ? this : THROW_CCE());
  };
  protoOf(D).get__7__18jc8y_k$ = function () {
    return new _7_(this instanceof D ? this : THROW_CCE());
  };
  protoOf(D).get__8__18jc83_k$ = function () {
    return new _8_(this instanceof D ? this : THROW_CCE());
  };
  protoOf(D).get__9__18jc78_k$ = function () {
    return new _9_(this instanceof D ? this : THROW_CCE());
  };
  var properties_initialized_Decimal_kt_mcxxgf;
  function _init_properties_Decimal_kt__928exr() {
    if (!properties_initialized_Decimal_kt_mcxxgf) {
      properties_initialized_Decimal_kt_mcxxgf = true;
      i10 = Companion_getInstance_8().get__0__18jcez_k$();
      i12 = Companion_getInstance_8().get__2__18jcd9_k$();
      i13 = Companion_getInstance_8().get__3__18jcce_k$();
      i14 = Companion_getInstance_8().get__4__18jcbj_k$();
      i15 = Companion_getInstance_8().get__5__18jcao_k$();
      i16 = Companion_getInstance_8().get__6__18jc9t_k$();
      i17 = Companion_getInstance_8().get__7__18jc8y_k$();
      i18 = Companion_getInstance_8().get__8__18jc83_k$();
      i19 = Companion_getInstance_8().get__9__18jc78_k$();
    }
  }
  function get_D(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return D$delegate.getValue_4u4kqi_k$(_this__u8e3s4, D$factory());
  }
  var D$delegate;
  function get_A(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return A$delegate.getValue_4u4kqi_k$(_this__u8e3s4, A$factory());
  }
  var A$delegate;
  function get_A_AUG(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return A_AUG$delegate.getValue_4u4kqi_k$(_this__u8e3s4, A_AUG$factory());
  }
  var A_AUG$delegate;
  function get_ASYMNORM(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return ASYMNORM$delegate.getValue_4u4kqi_k$(_this__u8e3s4, ASYMNORM$factory());
  }
  var ASYMNORM$delegate;
  function get_L(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return L$delegate.getValue_4u4kqi_k$(_this__u8e3s4, L$factory());
  }
  var L$delegate;
  function get_I(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return I$delegate.getValue_4u4kqi_k$(_this__u8e3s4, I$factory());
  }
  var I$delegate;
  function get_LSYMNORM(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return LSYMNORM$delegate.getValue_4u4kqi_k$(_this__u8e3s4, LSYMNORM$factory());
  }
  var LSYMNORM$delegate;
  function get_ENCODED(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return ENCODED$delegate.getValue_4u4kqi_k$(_this__u8e3s4, ENCODED$factory());
  }
  var ENCODED$delegate;
  function get_APSP(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return APSP$delegate.getValue_4u4kqi_k$(_this__u8e3s4, APSP$factory());
  }
  var APSP$delegate;
  function get_degMap(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return degMap$delegate.getValue_4u4kqi_k$(_this__u8e3s4, degMap$factory());
  }
  var degMap$delegate;
  function get_edges(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return edges$delegate.getValue_4u4kqi_k$(_this__u8e3s4, edges$factory());
  }
  var edges$delegate;
  function get_edgList(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return edgList$delegate.getValue_4u4kqi_k$(_this__u8e3s4, edgList$factory());
  }
  var edgList$delegate;
  function get_adjList(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return adjList$delegate.getValue_4u4kqi_k$(_this__u8e3s4, adjList$factory());
  }
  var adjList$delegate;
  function get_edgMap(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return edgMap$delegate.getValue_4u4kqi_k$(_this__u8e3s4, edgMap$factory());
  }
  var edgMap$delegate;
  function get_histogram(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return histogram$delegate.getValue_4u4kqi_k$(_this__u8e3s4, histogram$factory());
  }
  var histogram$delegate;
  function get_cache() {
    _init_properties_Graph_kt__cdxgws();
    return cache;
  }
  var cache;
  function get_graph(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return graph$delegate.getValue_4u4kqi_k$(_this__u8e3s4, graph$factory());
  }
  var graph$delegate;
  function get_graph_0(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return graph$delegate_0.getValue_4u4kqi_k$(_this__u8e3s4, graph$factory_0());
  }
  var graph$delegate_0;
  function get_incoming(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return incoming$delegate.getValue_4u4kqi_k$(_this__u8e3s4, incoming$factory());
  }
  var incoming$delegate;
  function get_outgoing(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return outgoing$delegate.getValue_4u4kqi_k$(_this__u8e3s4, outgoing$factory());
  }
  var outgoing$delegate;
  function get_neighbors(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return neighbors$delegate.getValue_4u4kqi_k$(_this__u8e3s4, neighbors$factory());
  }
  var neighbors$delegate;
  function Vertex$hash$delegate$lambda(this$0) {
    return function () {
      return getStringHashCode(this$0.get_id_kntnx8_k$());
    };
  }
  function Vertex(id) {
    AGF.call(this);
    this.id_1 = id;
    var tmp = this;
    tmp.hash$delegate_1 = lazy(Vertex$hash$delegate$lambda(this));
  }
  protoOf(Vertex).get_id_kntnx8_k$ = function () {
    return this.id_1;
  };
  protoOf(Vertex).get_hash_won4uv_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.hash$delegate_1;
    hash$factory_1();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(Vertex).equals = function (other) {
    var tmp0_safe_receiver = other instanceof Vertex ? other : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.types.Vertex.equals.<anonymous>' call
      tmp = this.get_id_kntnx8_k$() === tmp0_safe_receiver.get_id_kntnx8_k$();
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(Vertex).encode_lh9aei_k$ = function () {
    return vectorize(this.get_id_kntnx8_k$());
  };
  protoOf(Vertex).hashCode = function () {
    return this.get_hash_won4uv_k$();
  };
  protoOf(Vertex).toString = function () {
    return this.get_id_kntnx8_k$();
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
    this.vertices_1 = vertices;
  }
  protoOf(Graph).get_vertices_6eva2q_k$ = function () {
    return this.vertices_1;
  };
  protoOf(Graph).get_size_woubt6_k$ = function () {
    return this.vertices_1.get_size_woubt6_k$();
  };
  protoOf(Graph).contains_27ni2x_k$ = function (element) {
    return this.vertices_1.contains_aljjnj_k$(element);
  };
  protoOf(Graph).contains_aljjnj_k$ = function (element) {
    if (!(element instanceof Vertex))
      return false;
    return this.contains_27ni2x_k$(element instanceof Vertex ? element : THROW_CCE());
  };
  protoOf(Graph).containsAll_87vubg_k$ = function (elements) {
    return this.vertices_1.containsAll_xk45sd_k$(elements);
  };
  protoOf(Graph).containsAll_xk45sd_k$ = function (elements) {
    return this.containsAll_87vubg_k$(elements);
  };
  protoOf(Graph).isEmpty_y1axqb_k$ = function () {
    return this.vertices_1.isEmpty_y1axqb_k$();
  };
  protoOf(Graph).iterator_jk1svi_k$ = function () {
    return this.vertices_1.iterator_jk1svi_k$();
  };
  protoOf(Graph).equals = function (other) {
    var tmp;
    if (this === other) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = other instanceof Graph ? other : null;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        tmp_0 = tmp0_safe_receiver.isomorphicTo_rduam6_k$(this instanceof Graph ? this : THROW_CCE());
      }
      var tmp1_elvis_lhs = tmp_0;
      tmp = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Graph).encode_lh9aei_k$ = function () {
    var tmp;
    if (this.isEmpty_y1axqb_k$()) {
      var tmp_0 = 0;
      var tmp_1 = new Float64Array(10);
      while (tmp_0 < 10) {
        tmp_1[tmp_0] = 0.0;
        tmp_0 = tmp_0 + 1 | 0;
      }
      tmp = tmp_1;
    } else {
      // Inline function 'kotlin.collections.map' call
      var this_0 = sorted(wl(this).get_values_ksazhn_k$());
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.types.Graph.encode.<anonymous>' call
        destination.add_utx5q5_k$(item);
      }
      tmp = toDoubleArray_0(destination);
    }
    return tmp;
  };
  protoOf(Graph).toString = function () {
    return this.asString_l3f38d_k$();
  };
  function Edge(source, target) {
    AGF.call(this);
    this.source_1 = source;
    this.target_1 = target;
  }
  protoOf(Edge).get_source_jl0x7o_k$ = function () {
    return this.source_1;
  };
  protoOf(Edge).get_target_juba8q_k$ = function () {
    return this.target_1;
  };
  protoOf(Edge).equals = function (other) {
    var tmp;
    if ((other instanceof Edge ? other : null) == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.types.Edge.equals.<anonymous>' call
      tmp = this.hashCode() === hashCode(other);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(Edge).hashCode = function () {
    return this.get_source_jl0x7o_k$().hashCode() + this.get_target_juba8q_k$().hashCode() | 0;
  };
  protoOf(Edge).toString = function () {
    return '' + this.get_source_jl0x7o_k$() + '\u2192' + this.get_target_juba8q_k$();
  };
  function IGF$G$lambda(it) {
    return ensureNotNull(getKClassFromExpression(it).get_simpleName_r6f8py_k$());
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
    this.set_1 = set;
    this.array_1 = toList(this.set_1);
    var tmp = this;
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_0 = this.array_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.VIndex.map.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      var tmp$ret$0 = to(item, index_0);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    tmp.map_1 = toMap(destination);
  }
  protoOf(VIndex).get_set_18iwav_k$ = function () {
    return this.set_1;
  };
  protoOf(VIndex).get_array_iosoq8_k$ = function () {
    return this.array_1;
  };
  protoOf(VIndex).get_map_18j0ul_k$ = function () {
    return this.map_1;
  };
  protoOf(VIndex).get_c1px32_k$ = function (it) {
    return this.array_1.get_c1px32_k$(it);
  };
  protoOf(VIndex).get_9ytt31_k$ = function (v) {
    var tmp0_elvis_lhs = this.map_1.get_wei43m_k$(v);
    return tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
  };
  function sam$kotlin_Comparator$0_2(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_2).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_2).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  function toDot$htmlify(_this__u8e3s4) {
    return replace(replace(_this__u8e3s4, '<', '&lt;'), '>', '&gt;');
  }
  function IGraph$join$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.join.<anonymous>' call
    var tmp = a.get_id_kntnx8_k$();
    // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.join.<anonymous>' call
    var tmp$ret$1 = b.get_id_kntnx8_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function IGraph$join$lambda_0(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.join.<anonymous>' call
    var tmp = a.get_id_kntnx8_k$();
    // Inline function 'ai.hypergraph.kaliningraph.types.IGraph.join.<anonymous>' call
    var tmp$ret$1 = b.get_id_kntnx8_k$();
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
      var name_for_destructuring_parameter_0_fjsvno = cc(this$0.get_c1px32_k$(i), this$0.get_c1px32_k$(j));
      // Inline function 'kotlin.collections.component1' call
      var v = name_for_destructuring_parameter_0_fjsvno.get_c1px32_k$(0);
      // Inline function 'kotlin.collections.component2' call
      var n = name_for_destructuring_parameter_0_fjsvno.get_c1px32_k$(1);
      return get_neighbors(v).contains_aljjnj_k$(n) ? $lf(this$0, v, n) : 0.0;
    };
  }
  function IGraph$reachSequence$slambda(this$0, $from, $ADJ, $terminateOnFixpoint, resultContinuation) {
    this.this$0__1 = this$0;
    this.$from_1 = $from;
    this.$ADJ_1 = $ADJ;
    this.$terminateOnFixpoint_1 = $terminateOnFixpoint;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(IGraph$reachSequence$slambda).invoke_rftsut_k$ = function ($this$sequence, $completion) {
    var tmp = this.create_1noc4v_k$($this$sequence, $completion);
    tmp.set_result_xj64lm_k$(Unit_getInstance());
    tmp.set_exception_px07aa_k$(null);
    return tmp.doResume_5yljmg_k$();
  };
  protoOf(IGraph$reachSequence$slambda).invoke_qns8j1_k$ = function (p1, $completion) {
    return this.invoke_rftsut_k$(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(IGraph$reachSequence$slambda).doResume_5yljmg_k$ = function () {
    var suspendResult = this.get_result_iyg5d2_k$();
    $sm: do
      try {
        var tmp = this.get_state_iypx7s_k$();
        switch (tmp) {
          case 0:
            this.set_exceptionState_fex74n_k$(5);
            var tmp_0 = this;
            var tmp_1 = this.this$0__1.get_vertices_6eva2q_k$().get_size_woubt6_k$();
            var this_0 = this.this$0__1.get_vertices_6eva2q_k$();
            var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
            var tmp0_iterator = this_0.iterator_jk1svi_k$();
            while (tmp0_iterator.hasNext_bitz1p_k$()) {
              var item = tmp0_iterator.next_20eer_k$();
              destination.add_utx5q5_k$(this.$from_1.contains_aljjnj_k$(item));
            }

            tmp_0.B0__1 = new BooleanMatrix(tmp_1, 1, destination);
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 1:
            if (!true) {
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            }

            this.OLD_B1__1 = this.B0__1;
            this.B0__1 = this.$ADJ_1.times_opju7w_k$(this.B0__1);
            var tmp_2 = this;
            var this_1 = this.B0__1.get_data_wokkxf_k$();
            var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
            var index = 0;
            var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
            while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
              var item_0 = tmp0_iterator_0.next_20eer_k$();
              var tmp1 = index;
              index = tmp1 + 1 | 0;
              var i = checkIndexOverflow(tmp1);
              destination_0.add_utx5q5_k$(item_0 ? this.this$0__1.get_index_it478p_k$().get_c1px32_k$(i) : null);
            }

            tmp_2.toYield2__1 = toSet_1(filterNotNull(destination_0));
            this.same3__1 = this.B0__1.equals(this.OLD_B1__1);
            if (this.same3__1 ? this.$terminateOnFixpoint_1 : false) {
              this.set_state_rjd8d0_k$(8);
              continue $sm;
            } else {
              if (this.same3__1) {
                this.set_state_rjd8d0_k$(3);
                continue $sm;
              } else {
                this.set_state_rjd8d0_k$(2);
                suspendResult = this.$this$sequence_1.yield_3xhcex_k$(this.toYield2__1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            }

          case 2:
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 3:
            if (!true) {
              this.set_state_rjd8d0_k$(6);
              continue $sm;
            }

            this.set_state_rjd8d0_k$(4);
            suspendResult = this.$this$sequence_1.yield_3xhcex_k$(this.toYield2__1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.set_state_rjd8d0_k$(3);
            continue $sm;
          case 5:
            throw this.get_exception_x0n6w6_k$();
          case 6:
            this.set_state_rjd8d0_k$(7);
            continue $sm;
          case 7:
            this.set_state_rjd8d0_k$(1);
            continue $sm;
          case 8:
            return Unit_getInstance();
        }
      } catch ($p) {
        var e = $p;
        if (this.get_exceptionState_wflpxn_k$() === 5) {
          throw e;
        } else {
          this.set_state_rjd8d0_k$(this.get_exceptionState_wflpxn_k$());
          this.set_exception_px07aa_k$(e);
        }
      }
     while (true);
  };
  protoOf(IGraph$reachSequence$slambda).create_1noc4v_k$ = function ($this$sequence, completion) {
    var i = new IGraph$reachSequence$slambda(this.this$0__1, this.$from_1, this.$ADJ_1, this.$terminateOnFixpoint_1, completion);
    i.$this$sequence_1 = $this$sequence;
    return i;
  };
  protoOf(IGraph$reachSequence$slambda).create_wyq9v6_k$ = function (value, completion) {
    return this.create_1noc4v_k$(value instanceof SequenceScope ? value : THROW_CCE(), completion);
  };
  function IGraph$reachSequence$slambda_0(this$0, $from, $ADJ, $terminateOnFixpoint, resultContinuation) {
    var i = new IGraph$reachSequence$slambda(this$0, $from, $ADJ, $terminateOnFixpoint, resultContinuation);
    var l = function ($this$sequence, $completion) {
      return i.invoke_rftsut_k$($this$sequence, $completion);
    };
    l.$arity = 1;
    return l;
  }
  function IGraph$toDot$lambda(it) {
    return '"' + toDot$htmlify(it.get_id_kntnx8_k$()) + '" ["color"="black","fontcolor"="black","fontname"="JetBrains Mono","fontsize"="15","penwidth"="2.0","shape"="Mrecord"]';
  }
  function IGraph$toDot$lambda_0(_name_for_destructuring_parameter_0__wldtmu) {
    var v = _name_for_destructuring_parameter_0__wldtmu.component1_7eebsc_k$();
    var e = _name_for_destructuring_parameter_0__wldtmu.component2_7eebsb_k$();
    var tmp = toDot$htmlify(v.get_id_kntnx8_k$());
    var tmp_0 = toDot$htmlify(e.get_target_juba8q_k$().get_id_kntnx8_k$());
    var tmp_1;
    var tmp_2;
    if (v instanceof LGVertex) {
      tmp_2 = v.get_occupied_ioyduh_k$();
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = 'red';
    } else {
      tmp_1 = 'black';
    }
    var tmp_3 = tmp_1;
    var tmp0_safe_receiver = e instanceof LabeledEdge ? e : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_label_iuj8p7_k$();
    return '"' + tmp + '" -> "' + tmp_0 + '" ["color"="' + tmp_3 + '","arrowhead"="normal","penwidth"="2.0","label"="' + (tmp1_elvis_lhs == null ? '' : tmp1_elvis_lhs) + '"]';
  }
  function IGraph() {
  }
  function IEdge() {
  }
  function closure(_this__u8e3s4, $this) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.IVertex.closure.<anonymous>' call
      var tmp = $this.get_V0_kntof1_k$();
      var tmp_0 = isInterface($this, IVertex) ? $this : THROW_CCE();
      var tmp$ret$0 = tmp(tmp_0, IVertex$closure$lambda(item, _this__u8e3s4));
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return toSet_1(destination);
  }
  function neighbors_0(_this__u8e3s4, $this) {
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.IVertex.neighbors.<anonymous>' call
      var list = element.neighbors$default_1qz5l5_k$();
      addAll(destination, list);
    }
    return toSet_1(destination);
  }
  function IVertex$closure$lambda$lambda($this_closure) {
    return function (it) {
      return $this_closure.contains_aljjnj_k$(it.get_target_juba8q_k$());
    };
  }
  function IVertex$closure$lambda($v, $this_closure) {
    return function (it) {
      // Inline function 'ai.hypergraph.kaliningraph.types.filter' call
      var this_0 = get_outgoing($v);
      var predicate = IVertex$closure$lambda$lambda($this_closure);
      // Inline function 'kotlin.apply' call
      var this_1 = toMutableSet(this_0);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.kaliningraph.types.filter.<anonymous>' call
      retainAll(this_1, predicate);
      return toSet_1(this_1);
    };
  }
  function IVertex() {
  }
  function get_outdegree(_this__u8e3s4) {
    _init_properties_Graph_kt__cdxgws();
    return get_neighbors(_this__u8e3s4).get_size_woubt6_k$();
  }
  function AGF() {
    this.deepHashCode_1 = Default_getInstance().nextInt_ujorgc_k$();
  }
  protoOf(AGF).get_deepHashCode_7nd6y8_k$ = function () {
    return this.deepHashCode_1;
  };
  protoOf(AGF).hashCode = function () {
    return this.get_deepHashCode_7nd6y8_k$();
  };
  function getCaller() {
    _init_properties_Graph_kt__cdxgws();
    return getStringHashCode(lines(stackTraceToString(newThrowable())).get_c1px32_k$(3));
  }
  function Encodable() {
  }
  function RandomWalk$tail$delegate$lambda(this$0) {
    return function () {
      var tmp0_graph = this$0.graph_1;
      var tmp1_head = random(ensureNotNull(get_edgMap(this$0.graph_1).get_wei43m_k$(this$0.head_1)), this$0.rand_1).get_target_juba8q_k$();
      var tmp2_rand = this$0.rand_1;
      return new RandomWalk(tmp2_rand, tmp0_graph, tmp1_head);
    };
  }
  function RandomWalk$iterator$lambda(it) {
    return it.get_tail_wousgp_k$();
  }
  function RandomWalk(rand, graph, head) {
    rand = rand === VOID ? Default_getInstance() : rand;
    var tmp;
    if (head === VOID) {
      // Inline function 'kotlin.collections.random' call
      tmp = random(graph, Default_getInstance());
    } else {
      tmp = head;
    }
    head = tmp;
    this.rand_1 = rand;
    this.graph_1 = graph;
    this.head_1 = head;
    var tmp_0 = this;
    tmp_0.tail$delegate_1 = lazy(RandomWalk$tail$delegate$lambda(this));
  }
  protoOf(RandomWalk).get_rand_wotilq_k$ = function () {
    return this.rand_1;
  };
  protoOf(RandomWalk).get_graph_is3411_k$ = function () {
    return this.graph_1;
  };
  protoOf(RandomWalk).get_head_won7e1_k$ = function () {
    return this.head_1;
  };
  protoOf(RandomWalk).get_tail_wousgp_k$ = function () {
    // Inline function 'kotlin.getValue' call
    var this_0 = this.tail$delegate_1;
    tail$factory();
    return this_0.get_value_j01efc_k$();
  };
  protoOf(RandomWalk).toString = function () {
    return toString(this.head_1);
  };
  protoOf(RandomWalk).iterator_jk1svi_k$ = function () {
    return generateSequence_0(this, RandomWalk$iterator$lambda).iterator_jk1svi_k$();
  };
  function sam$kotlin_properties_ReadOnlyProperty$0(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_properties_ReadOnlyProperty$0).getValue_4u4kqi_k$ = function (thisRef, property) {
    return this.function_1(thisRef, property);
  };
  function D$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    var tmp = $this$cache.get_size_woubt6_k$();
    return DoubleMatrix_init_$Create$_0(tmp, VOID, D$delegate$lambda$lambda($this$cache));
  }
  function D$delegate$lambda$lambda($this_cache) {
    return function (i, j) {
      return i === j ? get_neighbors($this_cache.get_c1px32_k$(i)).get_size_woubt6_k$() : 0.0;
    };
  }
  function A$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    var tmp = $this$cache.get_size_woubt6_k$();
    return BooleanMatrix_init_$Create$_1(tmp, VOID, A$delegate$lambda$lambda($this$cache));
  }
  function A$delegate$lambda$lambda($this_cache) {
    return function (i, j) {
      return get_neighbors($this_cache.get_c1px32_k$(i)).contains_aljjnj_k$($this_cache.get_c1px32_k$(j));
    };
  }
  function A_AUG$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    return get_A($this$cache).plus_3dy6p4_k$(get_transpose(get_A($this$cache))).plus_3dy6p4_k$(Companion_getInstance_4().one_yep1ki_k$($this$cache.get_size_woubt6_k$()));
  }
  function ASYMNORM$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    return $this$cache.vwise_lap0pf_k$(ASYMNORM$delegate$lambda$lambda);
  }
  function ASYMNORM$delegate$lambda$lambda($this$vwise, v, n) {
    _init_properties_Graph_kt__cdxgws();
    // Inline function 'kotlin.math.sqrt' call
    var x = get_outdegree(v) * get_outdegree(n);
    return 1.0 / Math.sqrt(x);
  }
  function L$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    return minus_4(get_D($this$cache), get_A($this$cache));
  }
  function I$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    var tmp = $this$cache.get_size_woubt6_k$();
    var tmp_0 = $this$cache.get_size_woubt6_k$();
    return DoubleMatrix_init_$Create$_0(tmp, tmp_0, kroneckerDelta$ref());
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
    return get_I($this$cache).minus_x055qs_k$(get_ASYMNORM($this$cache));
  }
  function ENCODED$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    // Inline function 'kotlin.collections.toTypedArray' call
    // Inline function 'kotlin.collections.map' call
    var this_0 = $this$cache.get_vertices_6eva2q_k$();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.ENCODED$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = item.encode_lh9aei_k$();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var tmp$ret$3 = copyToArray(destination);
    return toDoubleMatrix(tmp$ret$3);
  }
  function APSP$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    // Inline function 'kotlin.collections.mutableMapOf' call
    var dist = LinkedHashMap_init_$Create$();
    var tmp0_iterator = $this$cache.get_vertices_6eva2q_k$().iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var v = tmp0_iterator.next_20eer_k$();
      var tmp1_iterator = $this$cache.get_vertices_6eva2q_k$().iterator_jk1svi_k$();
      while (tmp1_iterator.hasNext_bitz1p_k$()) {
        var w = tmp1_iterator.next_20eer_k$();
        // Inline function 'kotlin.collections.set' call
        var key = to(v, w);
        var value = equals(v, w) ? 0 : IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$();
        dist.put_4fpzoq_k$(key, value);
      }
    }
    var tmp2_iterator = get_edges($this$cache).iterator_jk1svi_k$();
    while (tmp2_iterator.hasNext_bitz1p_k$()) {
      var e = tmp2_iterator.next_20eer_k$();
      // Inline function 'kotlin.collections.set' call
      var key_0 = to(e.get_source_jl0x7o_k$(), e.get_target_juba8q_k$());
      dist.put_4fpzoq_k$(key_0, 1);
    }
    var tmp3_iterator = $this$cache.get_vertices_6eva2q_k$().iterator_jk1svi_k$();
    while (tmp3_iterator.hasNext_bitz1p_k$()) {
      var k = tmp3_iterator.next_20eer_k$();
      var tmp4_iterator = $this$cache.get_vertices_6eva2q_k$().iterator_jk1svi_k$();
      while (tmp4_iterator.hasNext_bitz1p_k$()) {
        var i = tmp4_iterator.next_20eer_k$();
        var tmp5_iterator = $this$cache.get_vertices_6eva2q_k$().iterator_jk1svi_k$();
        while (tmp5_iterator.hasNext_bitz1p_k$()) {
          var j = tmp5_iterator.next_20eer_k$();
          var ik = ensureNotNull(dist.get_wei43m_k$(to(i, k)));
          var kj = ensureNotNull(dist.get_wei43m_k$(to(k, j)));
          var ij = ensureNotNull(dist.get_wei43m_k$(to(i, j)));
          if ((!(ik === IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$()) ? !(kj === IntCompanionObject_getInstance().get_MAX_VALUE_54a9lf_k$()) : false) ? (ik + kj | 0) < ij : false) {
            // Inline function 'kotlin.collections.set' call
            var key_1 = to(i, j);
            var value_0 = ik + kj | 0;
            dist.put_4fpzoq_k$(key_1, value_0);
          }
        }
      }
    }
    return dist;
  }
  function degMap$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    // Inline function 'kotlin.collections.associateWith' call
    var this_0 = $this$cache.get_vertices_6eva2q_k$();
    var result = LinkedHashMap_init_$Create$_1(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
    // Inline function 'kotlin.collections.associateWithTo' call
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.degMap$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = get_neighbors(element).get_size_woubt6_k$();
      result.put_4fpzoq_k$(element, tmp$ret$0);
    }
    return result;
  }
  function edges$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    return toSet_1(flatten(get_edgMap($this$cache).get_values_ksazhn_k$()));
  }
  function edgList$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    // Inline function 'kotlin.collections.flatMap' call
    // Inline function 'kotlin.collections.flatMapTo' call
    var this_0 = $this$cache.get_vertices_6eva2q_k$();
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.edgList$delegate.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      var this_1 = get_outgoing(element);
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(this_1, 10));
      var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'ai.hypergraph.kaliningraph.types.edgList$delegate.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$0 = to(element, item);
        destination_0.add_utx5q5_k$(tmp$ret$0);
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
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.adjList$delegate.<anonymous>.<anonymous>' call
      var v = item.component1_7eebsc_k$();
      var e = item.component2_7eebsb_k$();
      var tmp$ret$0 = cc(v, e.get_target_juba8q_k$());
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return destination;
  }
  function edgMap$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    // Inline function 'kotlin.collections.associateWith' call
    var this_0 = $this$cache.get_vertices_6eva2q_k$();
    var result = LinkedHashMap_init_$Create$_1(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16));
    // Inline function 'kotlin.collections.associateWithTo' call
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.edgMap$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = get_outgoing(element);
      result.put_4fpzoq_k$(element, tmp$ret$0);
    }
    return result;
  }
  function histogram$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    // Inline function 'kotlin.collections.associateWith' call
    var result = LinkedHashMap_init_$Create$_1(coerceAtLeast(mapCapacity(collectionSizeOrDefault($this$cache, 10)), 16));
    // Inline function 'kotlin.collections.associateWithTo' call
    var tmp0_iterator = $this$cache.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.histogram$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = get_neighbors(element).get_size_woubt6_k$();
      result.put_4fpzoq_k$(element, tmp$ret$0);
    }
    return result;
  }
  function graph$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    return get_graph_0($this$cache.get_target_juba8q_k$());
  }
  function graph$delegate$lambda_0($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    return $this$cache.get_G0_kntory_k$()($this$cache.neighbors$default_1qz5l5_k$(-1));
  }
  function incoming$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    // Inline function 'kotlin.collections.get' call
    var this_0 = get_edgMap(get_graph_0($this$cache).reversed_4dh64e_k$());
    var tmp0_elvis_lhs = (isInterface(this_0, Map) ? this_0 : THROW_CCE()).get_wei43m_k$($this$cache);
    return tmp0_elvis_lhs == null ? emptySet() : tmp0_elvis_lhs;
  }
  function outgoing$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    var tmp = $this$cache.get_edgeMap_tzvf62_k$();
    return toSet_1(tmp(isInterface($this$cache, IVertex) ? $this$cache : THROW_CCE()));
  }
  function neighbors$delegate$lambda($this$cache) {
    _init_properties_Graph_kt__cdxgws();
    // Inline function 'kotlin.collections.map' call
    var this_0 = get_outgoing($this$cache);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.kaliningraph.types.neighbors$delegate.<anonymous>.<anonymous>' call
      var tmp$ret$0 = item.get_target_juba8q_k$();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return toSet_1(destination);
  }
  function cache$lambda$lambda($fn, $y) {
    return function () {
      var tmp = $fn($y);
      return !(tmp == null) ? tmp : THROW_CCE();
    };
  }
  function cache$lambda($caller, $fn) {
    return function (y, _anonymous_parameter_1__qggqgd) {
      var tmp;
      if (!(y == null) ? isInterface(y, IGF) : false) {
        tmp = y.get_deepHashCode_7nd6y8_k$();
      } else {
        // Inline function 'kotlin.hashCode' call
        var tmp1_elvis_lhs = y == null ? null : hashCode(y);
        tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      }
      var id = tmp;
      var csg = '' + id + $caller;
      var tmp_0 = get_cache();
      var tmp_1 = tmp_0.getOrPut_ppgj9u_k$(csg, cache$lambda$lambda($fn, y));
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
  function A_AUG$factory() {
    return getPropertyCallableRef('A_AUG', 1, KProperty1, function (receiver) {
      return get_A_AUG(receiver);
    }, null);
  }
  function ASYMNORM$factory() {
    return getPropertyCallableRef('ASYMNORM', 1, KProperty1, function (receiver) {
      return get_ASYMNORM(receiver);
    }, null);
  }
  function L$factory() {
    return getPropertyCallableRef('L', 1, KProperty1, function (receiver) {
      return get_L(receiver);
    }, null);
  }
  function I$factory() {
    return getPropertyCallableRef('I', 1, KProperty1, function (receiver) {
      return get_I(receiver);
    }, null);
  }
  function LSYMNORM$factory() {
    return getPropertyCallableRef('LSYMNORM', 1, KProperty1, function (receiver) {
      return get_LSYMNORM(receiver);
    }, null);
  }
  function ENCODED$factory() {
    return getPropertyCallableRef('ENCODED', 1, KProperty1, function (receiver) {
      return get_ENCODED(receiver);
    }, null);
  }
  function APSP$factory() {
    return getPropertyCallableRef('APSP', 1, KProperty1, function (receiver) {
      return get_APSP(receiver);
    }, null);
  }
  function degMap$factory() {
    return getPropertyCallableRef('degMap', 1, KProperty1, function (receiver) {
      return get_degMap(receiver);
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
  function graph$factory_0() {
    return getPropertyCallableRef('graph', 1, KProperty1, function (receiver) {
      return get_graph_0(receiver);
    }, null);
  }
  function incoming$factory() {
    return getPropertyCallableRef('incoming', 1, KProperty1, function (receiver) {
      return get_incoming(receiver);
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
      return receiver.get_hash_won4uv_k$();
    }, null);
  }
  function tail$factory() {
    return getPropertyCallableRef('tail', 1, KProperty1, function (receiver) {
      return receiver.get_tail_wousgp_k$();
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
    this.nil_1 = nil;
    this.one_1 = one;
    this.plus_1 = plus;
    this.times_1 = times;
    this.minus_1 = minus;
    this.div_1 = div;
  }
  protoOf(of_0).get_nil_18izx4_k$ = function () {
    return this.nil_1;
  };
  protoOf(of_0).get_one_18iz2b_k$ = function () {
    return this.one_1;
  };
  protoOf(of_0).get_plus_wosgyr_k$ = function () {
    return this.plus_1;
  };
  protoOf(of_0).get_times_iz2xi5_k$ = function () {
    return this.times_1;
  };
  protoOf(of_0).get_minus_iv8eh3_k$ = function () {
    return this.minus_1;
  };
  protoOf(of_0).get_div_18j7bs_k$ = function () {
    return this.div_1;
  };
  protoOf(of_0).plus_oqaz3q_k$ = function (_this__u8e3s4, t) {
    return this.plus_1(_this__u8e3s4, _this__u8e3s4, t);
  };
  protoOf(of_0).times_v2bgcq_k$ = function (_this__u8e3s4, t) {
    return this.times_1(_this__u8e3s4, _this__u8e3s4, t);
  };
  protoOf(of_0).minus_hhjye8_k$ = function (_this__u8e3s4, t) {
    return this.minus_1(_this__u8e3s4, _this__u8e3s4, t);
  };
  protoOf(of_0).div_bgkq67_k$ = function (_this__u8e3s4, t) {
    return this.div_1(_this__u8e3s4, _this__u8e3s4, t);
  };
  function Field() {
  }
  function of_1(nil, one, plus, times) {
    one = one === VOID ? nil : one;
    this.nil_1 = nil;
    this.one_1 = one;
    this.plus_1 = plus;
    this.times_1 = times;
  }
  protoOf(of_1).get_nil_18izx4_k$ = function () {
    return this.nil_1;
  };
  protoOf(of_1).get_one_18iz2b_k$ = function () {
    return this.one_1;
  };
  protoOf(of_1).get_plus_wosgyr_k$ = function () {
    return this.plus_1;
  };
  protoOf(of_1).get_times_iz2xi5_k$ = function () {
    return this.times_1;
  };
  protoOf(of_1).plus_oqaz3q_k$ = function (_this__u8e3s4, t) {
    return this.plus_1(_this__u8e3s4, _this__u8e3s4, t);
  };
  protoOf(of_1).times_v2bgcq_k$ = function (_this__u8e3s4, t) {
    return this.times_1(_this__u8e3s4, _this__u8e3s4, t);
  };
  function Ring() {
  }
  function minus_5(_this__u8e3s4, l, r, acc, i) {
    acc = acc === VOID ? _this__u8e3s4.get_nil_18izx4_k$() : acc;
    i = i === VOID ? _this__u8e3s4.get_nil_18izx4_k$() : i;
    throw new NotImplementedError();
  }
  function div_0(_this__u8e3s4, l, r, acc, i) {
    acc = acc === VOID ? l : acc;
    i = i === VOID ? _this__u8e3s4.get_nil_18izx4_k$() : i;
    throw new NotImplementedError();
  }
  function of_2(nil, one, plus) {
    this.nil_1 = nil;
    this.one_1 = one;
    this.plus_1 = plus;
  }
  protoOf(of_2).get_nil_18izx4_k$ = function () {
    return this.nil_1;
  };
  protoOf(of_2).get_one_18iz2b_k$ = function () {
    return this.one_1;
  };
  protoOf(of_2).get_plus_wosgyr_k$ = function () {
    return this.plus_1;
  };
  protoOf(of_2).plus_oqaz3q_k$ = function (_this__u8e3s4, t) {
    return this.plus_1(_this__u8e3s4, _this__u8e3s4, t);
  };
  function Group() {
  }
  function of_3(nil, vnext) {
    this.nil_1 = nil;
    this.vnext_1 = vnext;
  }
  protoOf(of_3).get_nil_18izx4_k$ = function () {
    return this.nil_1;
  };
  protoOf(of_3).get_vnext_j09k5c_k$ = function () {
    return this.vnext_1;
  };
  protoOf(of_3).next_ely74e_k$ = function (_this__u8e3s4) {
    return this.vnext_1(_this__u8e3s4);
  };
  function Nat() {
  }
  function plus_10(_this__u8e3s4, l, r, acc, i) {
    acc = acc === VOID ? l : acc;
    i = i === VOID ? _this__u8e3s4.get_nil_18izx4_k$() : i;
    var $this = _this__u8e3s4;
    var l_0 = l;
    var r_0 = r;
    var acc_0 = acc;
    var i_0 = i;
    $l$1: do {
      $l$0: do {
        var tmp;
        if (equals(i_0, r_0)) {
          tmp = acc_0;
        } else {
          var tmp0 = $this;
          var tmp3 = $this.next_ely74e_k$(acc_0);
          var tmp4 = $this.next_ely74e_k$(i_0);
          $this = tmp0;
          l_0 = l_0;
          r_0 = r_0;
          acc_0 = tmp3;
          i_0 = tmp4;
          continue $l$0;
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function times_6(_this__u8e3s4, l, r, acc, i) {
    acc = acc === VOID ? _this__u8e3s4.get_nil_18izx4_k$() : acc;
    i = i === VOID ? _this__u8e3s4.get_nil_18izx4_k$() : i;
    var $this = _this__u8e3s4;
    var l_0 = l;
    var r_0 = r;
    var acc_0 = acc;
    var i_0 = i;
    $l$1: do {
      $l$0: do {
        var tmp;
        if (equals(i_0, r_0)) {
          tmp = acc_0;
        } else {
          var tmp0 = $this;
          var tmp3 = $this.plus_oqaz3q_k$(acc_0, l_0);
          var tmp4 = $this.next_ely74e_k$(i_0);
          $this = tmp0;
          l_0 = l_0;
          r_0 = r_0;
          acc_0 = tmp3;
          i_0 = tmp4;
          continue $l$0;
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function pow_2(_this__u8e3s4, base, exp, acc, i) {
    acc = acc === VOID ? _this__u8e3s4.get_one_18iz2b_k$() : acc;
    i = i === VOID ? _this__u8e3s4.get_one_18iz2b_k$() : i;
    var $this = _this__u8e3s4;
    var base_0 = base;
    var exp_0 = exp;
    var acc_0 = acc;
    var i_0 = i;
    $l$1: do {
      $l$0: do {
        var tmp;
        if (equals(i_0, exp_0)) {
          tmp = acc_0;
        } else {
          var tmp0 = $this;
          var tmp3 = $this.times_v2bgcq_k$(acc_0, base_0);
          var tmp4 = $this.next_ely74e_k$(i_0);
          $this = tmp0;
          base_0 = base_0;
          exp_0 = exp_0;
          acc_0 = tmp3;
          i_0 = tmp4;
          continue $l$0;
        }
        return tmp;
      }
       while (false);
    }
     while (true);
  }
  function get_十() {
    _init_properties_算盘_kt__npz15r();
    return 十;
  }
  var 十;
  function get_十一() {
    _init_properties_算盘_kt__npz15r();
    return 十一;
  }
  var 十一;
  function get_十二() {
    _init_properties_算盘_kt__npz15r();
    return 十二;
  }
  var 十二;
  function get_十三() {
    _init_properties_算盘_kt__npz15r();
    return 十三;
  }
  var 十三;
  function get_十四() {
    _init_properties_算盘_kt__npz15r();
    return 十四;
  }
  var 十四;
  function get_十五() {
    _init_properties_算盘_kt__npz15r();
    return 十五;
  }
  var 十五;
  function get_十六() {
    _init_properties_算盘_kt__npz15r();
    return 十六;
  }
  var 十六;
  function get_十七() {
    _init_properties_算盘_kt__npz15r();
    return 十七;
  }
  var 十七;
  function get_十八() {
    _init_properties_算盘_kt__npz15r();
    return 十八;
  }
  var 十八;
  function get_十九() {
    _init_properties_算盘_kt__npz15r();
    return 十九;
  }
  var 十九;
  function get_二十() {
    _init_properties_算盘_kt__npz15r();
    return 二十;
  }
  var 二十;
  function get_二十一() {
    _init_properties_算盘_kt__npz15r();
    return 二十一;
  }
  var 二十一;
  function get_z2a() {
    _init_properties_算盘_kt__npz15r();
    return z2a;
  }
  var z2a;
  function get_a2z() {
    _init_properties_算盘_kt__npz15r();
    return a2z;
  }
  var a2z;
  function Companion_16() {
    Companion_instance_16 = this;
    零.call(this);
  }
  var Companion_instance_16;
  function Companion_getInstance_17() {
    if (Companion_instance_16 == null)
      new Companion_16();
    return Companion_instance_16;
  }
  function 零(中, 码) {
    Companion_getInstance_17();
    中 = 中 === VOID ? null : 中;
    码 = 码 === VOID ? '\u96F6' : 码;
    数.call(this, 中);
    this.中_2 = 中;
    this.码_2 = 码;
  }
  protoOf(零).get_中_1mi6is_k$ = function () {
    return this.中_2;
  };
  protoOf(零).get_码_1mies8_k$ = function () {
    return this.码_2;
  };
  function Companion_17() {
    Companion_instance_17 = this;
    一.call(this);
  }
  var Companion_instance_17;
  function Companion_getInstance_18() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function 一(中, 码) {
    Companion_getInstance_18();
    中 = 中 === VOID ? null : 中;
    码 = 码 === VOID ? '\u4E00' : 码;
    数.call(this, 中);
    this.中_2 = 中;
    this.码_2 = 码;
  }
  protoOf(一).get_中_1mi6is_k$ = function () {
    return this.中_2;
  };
  protoOf(一).get_码_1mies8_k$ = function () {
    return this.码_2;
  };
  function 无() {
    无_instance = this;
    数.call(this, null);
  }
  var 无_instance;
  function 无_getInstance() {
    if (无_instance == null)
      new 无();
    return 无_instance;
  }
  function Companion_18() {
    Companion_instance_18 = this;
    二.call(this);
  }
  var Companion_instance_18;
  function Companion_getInstance_19() {
    if (Companion_instance_18 == null)
      new Companion_18();
    return Companion_instance_18;
  }
  function 二(中, 码) {
    Companion_getInstance_19();
    中 = 中 === VOID ? null : 中;
    码 = 码 === VOID ? '\u4E8C' : 码;
    数.call(this, 中);
    this.中_2 = 中;
    this.码_2 = 码;
  }
  protoOf(二).get_中_1mi6is_k$ = function () {
    return this.中_2;
  };
  protoOf(二).get_码_1mies8_k$ = function () {
    return this.码_2;
  };
  function Companion_19() {
    Companion_instance_19 = this;
    三.call(this);
  }
  var Companion_instance_19;
  function Companion_getInstance_20() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function 三(中, 码) {
    Companion_getInstance_20();
    中 = 中 === VOID ? null : 中;
    码 = 码 === VOID ? '\u4E09' : 码;
    数.call(this, 中);
    this.中_2 = 中;
    this.码_2 = 码;
  }
  protoOf(三).get_中_1mi6is_k$ = function () {
    return this.中_2;
  };
  protoOf(三).get_码_1mies8_k$ = function () {
    return this.码_2;
  };
  function Companion_20() {
    Companion_instance_20 = this;
    四.call(this);
  }
  var Companion_instance_20;
  function Companion_getInstance_21() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function 四(中, 码) {
    Companion_getInstance_21();
    中 = 中 === VOID ? null : 中;
    码 = 码 === VOID ? '\u56DB' : 码;
    数.call(this, 中);
    this.中_2 = 中;
    this.码_2 = 码;
  }
  protoOf(四).get_中_1mi6is_k$ = function () {
    return this.中_2;
  };
  protoOf(四).get_码_1mies8_k$ = function () {
    return this.码_2;
  };
  function Companion_21() {
    Companion_instance_21 = this;
    五.call(this);
  }
  var Companion_instance_21;
  function Companion_getInstance_22() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function 五(中, 码) {
    Companion_getInstance_22();
    中 = 中 === VOID ? null : 中;
    码 = 码 === VOID ? '\u4E94' : 码;
    数.call(this, 中);
    this.中_2 = 中;
    this.码_2 = 码;
  }
  protoOf(五).get_中_1mi6is_k$ = function () {
    return this.中_2;
  };
  protoOf(五).get_码_1mies8_k$ = function () {
    return this.码_2;
  };
  function Companion_22() {
    Companion_instance_22 = this;
    六.call(this);
  }
  var Companion_instance_22;
  function Companion_getInstance_23() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function 六(中, 码) {
    Companion_getInstance_23();
    中 = 中 === VOID ? null : 中;
    码 = 码 === VOID ? '\u516D' : 码;
    数.call(this, 中);
    this.中_2 = 中;
    this.码_2 = 码;
  }
  protoOf(六).get_中_1mi6is_k$ = function () {
    return this.中_2;
  };
  protoOf(六).get_码_1mies8_k$ = function () {
    return this.码_2;
  };
  function Companion_23() {
    Companion_instance_23 = this;
    七.call(this);
  }
  var Companion_instance_23;
  function Companion_getInstance_24() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function 七(中, 码) {
    Companion_getInstance_24();
    中 = 中 === VOID ? null : 中;
    码 = 码 === VOID ? '\u4E03' : 码;
    数.call(this, 中);
    this.中_2 = 中;
    this.码_2 = 码;
  }
  protoOf(七).get_中_1mi6is_k$ = function () {
    return this.中_2;
  };
  protoOf(七).get_码_1mies8_k$ = function () {
    return this.码_2;
  };
  function Companion_24() {
    Companion_instance_24 = this;
    八.call(this);
  }
  var Companion_instance_24;
  function Companion_getInstance_25() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function 八(中, 码) {
    Companion_getInstance_25();
    中 = 中 === VOID ? null : 中;
    码 = 码 === VOID ? '\u516B' : 码;
    数.call(this, 中);
    this.中_2 = 中;
    this.码_2 = 码;
  }
  protoOf(八).get_中_1mi6is_k$ = function () {
    return this.中_2;
  };
  protoOf(八).get_码_1mies8_k$ = function () {
    return this.码_2;
  };
  function Companion_25() {
    Companion_instance_25 = this;
    九.call(this);
  }
  var Companion_instance_25;
  function Companion_getInstance_26() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function 九(中, 码) {
    Companion_getInstance_26();
    中 = 中 === VOID ? null : 中;
    码 = 码 === VOID ? '\u4E5D' : 码;
    数.call(this, 中);
    this.中_2 = 中;
    this.码_2 = 码;
  }
  protoOf(九).get_中_1mi6is_k$ = function () {
    return this.中_2;
  };
  protoOf(九).get_码_1mies8_k$ = function () {
    return this.码_2;
  };
  function 数(中, 码) {
    中 = 中 === VOID ? null : 中;
    码 = 码 === VOID ? '' : 码;
    this.中_1 = 中;
    this.码_1 = 码;
  }
  protoOf(数).get_中_1mi6is_k$ = function () {
    return this.中_1;
  };
  protoOf(数).get_码_1mies8_k$ = function () {
    return this.码_1;
  };
  protoOf(数).get_零_1mikwd_k$ = function () {
    return new 零(this instanceof 数 ? this : THROW_CCE());
  };
  protoOf(数).get_一_1mi6hj_k$ = function () {
    return new 一(this instanceof 数 ? this : THROW_CCE());
  };
  protoOf(数).get_二_1mi6lf_k$ = function () {
    return new 二(this instanceof 数 ? this : THROW_CCE());
  };
  protoOf(数).get_三_1mi6hs_k$ = function () {
    return new 三(this instanceof 数 ? this : THROW_CCE());
  };
  protoOf(数).get_四_1mi88i_k$ = function () {
    return new 四(this instanceof 数 ? this : THROW_CCE());
  };
  protoOf(数).get_五_1mi6ln_k$ = function () {
    return new 五(this instanceof 数 ? this : THROW_CCE());
  };
  protoOf(数).get_六_1mi75w_k$ = function () {
    return new 六(this instanceof 数 ? this : THROW_CCE());
  };
  protoOf(数).get_七_1mi6hm_k$ = function () {
    return new 七(this instanceof 数 ? this : THROW_CCE());
  };
  protoOf(数).get_八_1mi75u_k$ = function () {
    return new 八(this instanceof 数 ? this : THROW_CCE());
  };
  protoOf(数).get_九_1mi6k4_k$ = function () {
    return new 九(this instanceof 数 ? this : THROW_CCE());
  };
  protoOf(数).equals = function (other) {
    return this.toString() === toString_2(other);
  };
  protoOf(数).hashCode = function () {
    var tmp = getKClassFromExpression(this).hashCode();
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.get_中_1mi6is_k$();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  protoOf(数).toString = function () {
    var tmp0_elvis_lhs = this.get_中_1mi6is_k$();
    return toString(tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs) + this.get_码_1mies8_k$();
  };
  protoOf(数).toInt_1tsl84_k$ = function () {
    return toInt(toArabic(this.toString()));
  };
  function toArabic(_this__u8e3s4) {
    _init_properties_算盘_kt__npz15r();
    // Inline function 'kotlin.text.map' call
    // Inline function 'kotlin.text.mapTo' call
    var destination = ArrayList_init_$Create$(charSequenceLength(_this__u8e3s4));
    var inductionVariable = 0;
    while (inductionVariable < charSequenceLength(_this__u8e3s4)) {
      var item = charSequenceGet(_this__u8e3s4, inductionVariable);
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'ai.hypergraph.kaliningraph.types.toArabic.<anonymous>' call
      var tmp$ret$0 = toString_0(item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    var tmp = destination;
    return joinToString(tmp, '', VOID, VOID, VOID, VOID, toArabic$lambda);
  }
  function toArabic$lambda(it) {
    _init_properties_算盘_kt__npz15r();
    var tmp;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = get_z2a();
    if ((isInterface(this_0, Map) ? this_0 : THROW_CCE()).containsKey_aw81wo_k$(it)) {
      tmp = ensureNotNull(get_z2a().get_wei43m_k$(it));
    } else {
      tmp = it;
    }
    return tmp;
  }
  var properties_initialized_算盘_kt_3yxg2r;
  function _init_properties_算盘_kt__npz15r() {
    if (!properties_initialized_算盘_kt_3yxg2r) {
      properties_initialized_算盘_kt_3yxg2r = true;
      十 = Companion_getInstance_18().get_零_1mikwd_k$();
      十一 = Companion_getInstance_18().get_一_1mi6hj_k$();
      十二 = Companion_getInstance_18().get_二_1mi6lf_k$();
      十三 = Companion_getInstance_18().get_三_1mi6hs_k$();
      十四 = Companion_getInstance_18().get_四_1mi88i_k$();
      十五 = Companion_getInstance_18().get_五_1mi6ln_k$();
      十六 = Companion_getInstance_18().get_六_1mi75w_k$();
      十七 = Companion_getInstance_18().get_七_1mi6hm_k$();
      十八 = Companion_getInstance_18().get_八_1mi75u_k$();
      十九 = Companion_getInstance_18().get_九_1mi6k4_k$();
      二十 = Companion_getInstance_19().get_零_1mikwd_k$();
      二十一 = Companion_getInstance_19().get_一_1mi6hj_k$();
      z2a = mapOf_0([to('\u96F6', '0'), to('\u4E00', '1'), to('\u4E8C', '2'), to('\u4E09', '3'), to('\u56DB', '4'), to('\u4E94', '5'), to('\u516D', '6'), to('\u4E03', '7'), to('\u516B', '8'), to('\u4E5D', '9'), to('\u5341', ''), to('\u767E', '')]);
      // Inline function 'kotlin.collections.associate' call
      var this_0 = get_z2a().get_entries_p20ztl_k$();
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_0, 10)), 16);
      // Inline function 'kotlin.collections.associateTo' call
      var destination = LinkedHashMap_init_$Create$_1(capacity);
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'kotlin.collections.plusAssign' call
        // Inline function 'ai.hypergraph.kaliningraph.types.a2z.<anonymous>' call
        // Inline function 'kotlin.collections.component1' call
        var k = element.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var v = element.get_value_j01efc_k$();
        var pair = to(v, k);
        destination.put_4fpzoq_k$(pair.get_first_irdx8n_k$(), pair.get_second_jf7fjx_k$());
      }
      a2z = destination;
    }
  }
  function get_asInt(_this__u8e3s4) {
    _init_properties_Formula_kt__9dkw5o();
    return asInt$delegate.getValue_4u4kqi_k$(_this__u8e3s4, asInt$factory());
  }
  var asInt$delegate;
  function get_variables(_this__u8e3s4) {
    _init_properties_Formula_kt__9dkw5o();
    return variables$delegate.getValue_4u4kqi_k$(_this__u8e3s4, variables$factory());
  }
  var variables$delegate;
  function get_hashToIdx(_this__u8e3s4) {
    _init_properties_Formula_kt__9dkw5o();
    return hashToIdx$delegate.getValue_4u4kqi_k$(_this__u8e3s4, hashToIdx$factory());
  }
  var hashToIdx$delegate;
  function get_solver(_this__u8e3s4) {
    _init_properties_Formula_kt__9dkw5o();
    return solver$delegate.getValue_4u4kqi_k$(_this__u8e3s4, solver$factory());
  }
  var solver$delegate;
  function get_model(_this__u8e3s4) {
    _init_properties_Formula_kt__9dkw5o();
    return model$delegate.getValue_4u4kqi_k$(_this__u8e3s4, model$factory());
  }
  var model$delegate;
  function get_models(_this__u8e3s4) {
    _init_properties_Formula_kt__9dkw5o();
    return models$delegate.getValue_4u4kqi_k$(_this__u8e3s4, models$factory());
  }
  var models$delegate;
  function Model(varMap) {
    this.varMap_1 = varMap;
  }
  protoOf(Model).get_varMap_ksdzni_k$ = function () {
    return this.varMap_1;
  };
  protoOf(Model).get_entries_p20ztl_k$ = function () {
    return this.varMap_1.get_entries_p20ztl_k$();
  };
  protoOf(Model).get_keys_wop4xp_k$ = function () {
    return this.varMap_1.get_keys_wop4xp_k$();
  };
  protoOf(Model).get_size_woubt6_k$ = function () {
    return this.varMap_1.get_size_woubt6_k$();
  };
  protoOf(Model).get_values_ksazhn_k$ = function () {
    return this.varMap_1.get_values_ksazhn_k$();
  };
  protoOf(Model).containsKey_qwmoa0_k$ = function (key) {
    return this.varMap_1.containsKey_aw81wo_k$(key);
  };
  protoOf(Model).containsKey_aw81wo_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'number' : false))
      return false;
    return this.containsKey_qwmoa0_k$((!(key == null) ? typeof key === 'number' : false) ? key : THROW_CCE());
  };
  protoOf(Model).containsValue_wqtjkj_k$ = function (value) {
    return this.varMap_1.containsValue_yf2ykl_k$(value);
  };
  protoOf(Model).containsValue_yf2ykl_k$ = function (value) {
    if (!(!(value == null) ? typeof value === 'boolean' : false))
      return false;
    return this.containsValue_wqtjkj_k$((!(value == null) ? typeof value === 'boolean' : false) ? value : THROW_CCE());
  };
  protoOf(Model).isEmpty_y1axqb_k$ = function () {
    return this.varMap_1.isEmpty_y1axqb_k$();
  };
  protoOf(Model).get_o5bnfs_k$ = function (cnf) {
    return this.varMap_1.get_wei43m_k$(first_1(flatten(cnf)));
  };
  protoOf(Model).get_c1px32_k$ = function (key) {
    return this.varMap_1.get_wei43m_k$(key);
  };
  protoOf(Model).get_wei43m_k$ = function (key) {
    if (!(!(key == null) ? typeof key === 'number' : false))
      return null;
    return this.get_c1px32_k$((!(key == null) ? typeof key === 'number' : false) ? key : THROW_CCE());
  };
  protoOf(Model).toString = function () {
    return toString(this.varMap_1);
  };
  function asInt$delegate$lambda($this$cache) {
    _init_properties_Formula_kt__9dkw5o();
    return first_1(flatten($this$cache));
  }
  function variables$delegate$lambda($this$cache) {
    _init_properties_Formula_kt__9dkw5o();
    // Inline function 'kotlin.collections.map' call
    var this_0 = flatten($this$cache);
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.reasoning.variables$delegate.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.math.absoluteValue' call
      var tmp$ret$1 = abs(item);
      destination.add_utx5q5_k$(tmp$ret$1);
    }
    return toSet_1(destination);
  }
  function hashToIdx$delegate$lambda($this$cache) {
    _init_properties_Formula_kt__9dkw5o();
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_0 = get_variables($this$cache);
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.reasoning.hashToIdx$delegate.<anonymous>.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var idx = checkIndexOverflow(tmp1);
      var tmp$ret$0 = to(item, idx + 1 | 0);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return toMap(destination);
  }
  function solver$delegate$lambda($this$cache) {
    _init_properties_Formula_kt__9dkw5o();
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault($this$cache, 10));
    var tmp0_iterator = $this$cache.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'ai.hypergraph.reasoning.solver$delegate.<anonymous>.<anonymous>' call
      // Inline function 'kotlin.collections.map' call
      // Inline function 'kotlin.collections.mapTo' call
      var destination_0 = ArrayList_init_$Create$(collectionSizeOrDefault(item, 10));
      var tmp0_iterator_0 = item.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'ai.hypergraph.reasoning.solver$delegate.<anonymous>.<anonymous>.<anonymous>' call
        var tmp = get_hashToIdx($this$cache);
        // Inline function 'kotlin.math.absoluteValue' call
        var tmp$ret$0 = abs(item_0);
        var tmp$ret$1 = imul(ensureNotNull(tmp.get_wei43m_k$(tmp$ret$0)), item_0 < 0 ? -1 : 1);
        destination_0.add_utx5q5_k$(tmp$ret$1);
      }
      var tmp$ret$4 = toMutableList(destination_0);
      destination.add_utx5q5_k$(tmp$ret$4);
    }
    var t = toMutableList(destination);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'ai.hypergraph.reasoning.solver$delegate.<anonymous>.<anonymous>' call
    var it = joinToString(t, '\n', VOID, VOID, VOID, VOID, solver$delegate$lambda$lambda);
    var tmp$ret$8 = it + '\nLength: ' + it.length;
    println('Formula: ' + tmp$ret$8);
    return new Kosat(t, get_variables($this$cache).get_size_woubt6_k$());
  }
  function solver$delegate$lambda$lambda(it) {
    _init_properties_Formula_kt__9dkw5o();
    return joinToString(it, ',');
  }
  function model$delegate$lambda($this$cache) {
    _init_properties_Formula_kt__9dkw5o();
    return first_2(get_models($this$cache));
  }
  function models$delegate$lambda($this$cache) {
    _init_properties_Formula_kt__9dkw5o();
    var prev = {_v: null};
    return generateSequence(models$delegate$lambda$lambda($this$cache, prev));
  }
  function models$delegate$lambda$lambda($this_cache, $prev) {
    return function () {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.also' call
      // Inline function 'kotlin.apply' call
      var this_0 = get_solver($this_cache);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.reasoning.models$delegate.<anonymous>.<anonymous>.<anonymous>' call
      if (!this_0.solve_1t9irj_k$())
        return null;
      var this_1 = this_0.getModel_wevcz7_k$();
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.reasoning.models$delegate.<anonymous>.<anonymous>.<anonymous>' call
      $prev._v = toSet_1(this_1);
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'ai.hypergraph.reasoning.models$delegate.<anonymous>.<anonymous>.<anonymous>' call
      var positiveLiterals = toSet_1(this_1);
      // Inline function 'kotlin.collections.associateWith' call
      var this_2 = get_variables($this_cache);
      var result = LinkedHashMap_init_$Create$_1(coerceAtLeast(mapCapacity(collectionSizeOrDefault(this_2, 10)), 16));
      // Inline function 'kotlin.collections.associateWithTo' call
      var tmp0_iterator = this_2.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'ai.hypergraph.reasoning.models$delegate.<anonymous>.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$2 = contains_0(positiveLiterals, get_hashToIdx($this_cache).get_wei43m_k$(element));
        result.put_4fpzoq_k$(element, tmp$ret$2);
      }
      var t = new Model(result);
      var tmp = get_solver($this_cache);
      // Inline function 'kotlin.collections.map' call
      var this_3 = $prev._v;
      // Inline function 'kotlin.collections.mapTo' call
      var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_3, 10));
      var tmp0_iterator_0 = this_3.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'ai.hypergraph.reasoning.models$delegate.<anonymous>.<anonymous>.<anonymous>' call
        var tmp$ret$7 = -item | 0;
        destination.add_utx5q5_k$(tmp$ret$7);
      }
      tmp.addClause_puskoc_k$(destination);
      return t;
    };
  }
  function asInt$factory() {
    return getPropertyCallableRef('asInt', 1, KProperty1, function (receiver) {
      return get_asInt(receiver);
    }, null);
  }
  function variables$factory() {
    return getPropertyCallableRef('variables', 1, KProperty1, function (receiver) {
      return get_variables(receiver);
    }, null);
  }
  function hashToIdx$factory() {
    return getPropertyCallableRef('hashToIdx', 1, KProperty1, function (receiver) {
      return get_hashToIdx(receiver);
    }, null);
  }
  function solver$factory() {
    return getPropertyCallableRef('solver', 1, KProperty1, function (receiver) {
      return get_solver(receiver);
    }, null);
  }
  function model$factory() {
    return getPropertyCallableRef('model', 1, KProperty1, function (receiver) {
      return get_model(receiver);
    }, null);
  }
  function models$factory() {
    return getPropertyCallableRef('models', 1, KProperty1, function (receiver) {
      return get_models(receiver);
    }, null);
  }
  var properties_initialized_Formula_kt_15cgba;
  function _init_properties_Formula_kt__9dkw5o() {
    if (!properties_initialized_Formula_kt_15cgba) {
      properties_initialized_Formula_kt_15cgba = true;
      asInt$delegate = cache_0(VOID, asInt$delegate$lambda);
      variables$delegate = cache_0(VOID, variables$delegate$lambda);
      hashToIdx$delegate = cache_0(VOID, hashToIdx$delegate$lambda);
      solver$delegate = cache_0(VOID, solver$delegate$lambda);
      model$delegate = cache_0(VOID, model$delegate$lambda);
      models$delegate = cache_0(VOID, models$delegate$lambda);
    }
  }
  function _get_solverType__vwwx8e($this) {
    return $this.solverType_1;
  }
  function _get_trail__at1jed($this) {
    return $this.trail_1;
  }
  function _set_qhead__jnihsk($this, _set____db54di) {
    $this.qhead_1 = _set____db54di;
  }
  function _get_qhead__cdlyow($this) {
    return $this.qhead_1;
  }
  function _get_watchers__jvgho4($this) {
    return $this.watchers_1;
  }
  function _set_reduceNumber__1ep2i0($this, _set____db54di) {
    $this.reduceNumber_1 = _set____db54di;
  }
  function _get_reduceNumber__gyft24($this) {
    return $this.reduceNumber_1;
  }
  function _set_reduceIncrement__3drcho($this, _set____db54di) {
    $this.reduceIncrement_1 = _set____db54di;
  }
  function _get_reduceIncrement__dhhk08($this) {
    return $this.reduceIncrement_1;
  }
  function _set_level__h8xxz5($this, _set____db54di) {
    $this.level_1 = _set____db54di;
  }
  function _get_level__es6iib($this) {
    return $this.level_1;
  }
  function _get_minimizeMarks__gds96x($this) {
    return $this.minimizeMarks_1;
  }
  function _set_mark__9qggfe($this, _set____db54di) {
    $this.mark_1 = _set____db54di;
  }
  function _get_mark__da8g0u($this) {
    return $this.mark_1;
  }
  function _get_variableSelector__rfv9e8($this) {
    return $this.variableSelector_1;
  }
  function _get_restarter__k1lrdh($this) {
    return $this.restarter_1;
  }
  function uncheckedEnqueue($this, lit, reason) {
    setValue($this, lit, VarValue_TRUE_getInstance());
    var v = variable(lit);
    $this.vars_1.get_c1px32_k$(v).set_reason_53xo2e_k$(reason);
    $this.vars_1.get_c1px32_k$(v).set_level_qwoiin_k$($this.level_1);
    $this.trail_1.add_utx5q5_k$(lit);
  }
  function uncheckedEnqueue$default($this, lit, reason, $super) {
    reason = reason === VOID ? null : reason;
    return uncheckedEnqueue($this, lit, reason);
  }
  function setValue($this, lit, value) {
    if ((lit % 2 | 0) === 1) {
      $this.vars_1.get_c1px32_k$(variable(lit)).set_value_yrqvw8_k$(value.not_2cb7_k$());
    } else {
      $this.vars_1.get_c1px32_k$(variable(lit)).set_value_yrqvw8_k$(value);
    }
  }
  function CDCL_init_$Init$($this) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var tmp$ret$0 = ArrayList_init_$Create$_0();
    CDCL_init_$Init$_0(tmp$ret$0, VOID, VOID, $this);
    return $this;
  }
  function CDCL_init_$Create$() {
    return CDCL_init_$Init$(objectCreate(protoOf(CDCL)));
  }
  function renumber(_this__u8e3s4, $this) {
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(_this__u8e3s4, 10));
    var tmp0_iterator = _this__u8e3s4.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.kosat.CDCL.renumber.<anonymous>' call
      var tmp$ret$0 = item.renumber_7x4zb8_k$();
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return destination;
  }
  function CDCL_init_$Init$_0(initialClauses, initialVarsNumber, solverType, $this) {
    initialVarsNumber = initialVarsNumber === VOID ? 0 : initialVarsNumber;
    solverType = solverType === VOID ? SolverType_INCREMENTAL_getInstance() : solverType;
    CDCL.call($this, solverType);
    reserveVars($this, initialVarsNumber);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = renumber(initialClauses, $this).iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.kosat.CDCL.<init>.<anonymous>' call
      $this.newClause_uot4hz_k$(element);
    }
    var tmp = $this;
    // Inline function 'kotlin.collections.MutableList' call
    var size = $this.numberOfVariables_1 + 1 | 0;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'org.kosat.CDCL.<init>.<anonymous>' call
        var tmp$ret$0 = VarValue_UNDEFINED_getInstance();
        list.add_utx5q5_k$(tmp$ret$0);
      }
       while (inductionVariable < size);
    tmp.polarity_1 = list;
    return $this;
  }
  function CDCL_init_$Create$_0(initialClauses, initialVarsNumber, solverType) {
    return CDCL_init_$Init$_0(initialClauses, initialVarsNumber, solverType, objectCreate(protoOf(CDCL)));
  }
  function reserveVars($this, max) {
    while ($this.numberOfVariables_1 < max) {
      $this.addVariable_y92vr1_k$();
    }
  }
  function trailRemoveLast($this) {
    var lit = removeLast($this.trail_1);
    var v = variable(lit);
    $this.polarity_1.set_82063s_k$(v, $this.getValue_d2m14t_k$(positive(v)));
    setValue($this, positive(v), VarValue_UNDEFINED_getInstance());
    $this.vars_1.get_c1px32_k$(v).set_reason_53xo2e_k$(null);
    $this.vars_1.get_c1px32_k$(v).set_level_qwoiin_k$(-1);
    $this.variableSelector_1.backTrack_odbskk_k$(v);
  }
  function _set_polarity__u0e8mf($this, _set____db54di) {
    $this.polarity_1 = _set____db54di;
  }
  function _get_polarity__h7hx5n($this) {
    return $this.polarity_1;
  }
  function _set_assumptions__uljvy5($this, _set____db54di) {
    $this.assumptions_1 = _set____db54di;
  }
  function _get_assumptions__a55zp3($this) {
    return $this.assumptions_1;
  }
  function getModel($this) {
    // Inline function 'kotlin.collections.mapIndexed' call
    var this_0 = $this.vars_1;
    // Inline function 'kotlin.collections.mapIndexedTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var index = 0;
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.kosat.CDCL.getModel.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var index_0 = checkIndexOverflow(tmp1);
      var tmp;
      switch (item.get_value_j01efc_k$().get_ordinal_ip24qg_k$()) {
        case 0:
          tmp = index_0 + 1 | 0;
          break;
        case 1:
          tmp = (-index_0 | 0) - 1 | 0;
          break;
        case 2:
          println($this.vars_1);
          println($this.trail_1);
          throw Exception_init_$Create$('Unexpected unassigned variable');
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp$ret$0 = tmp;
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return destination;
  }
  function addWatchers($this, clause) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(clause.get_size_woubt6_k$() > 1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.watchers_1.get_c1px32_k$(clause.get_c1px32_k$(0)).add_utx5q5_k$(clause);
    $this.watchers_1.get_c1px32_k$(clause.get_c1px32_k$(1)).add_utx5q5_k$(clause);
  }
  function addConstraint($this, clause) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(clause.get_size_woubt6_k$() === 1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.constraints_1.add_utx5q5_k$(clause);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!clause.isEmpty_y1axqb_k$()) {
      addWatchers($this, clause);
    }
  }
  function addLearnt($this, clause) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(clause.get_size_woubt6_k$() === 1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    $this.learnts_1.add_utx5q5_k$(clause);
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!clause.isEmpty_y1axqb_k$()) {
      addWatchers($this, clause);
    }
  }
  function propagate($this) {
    var conflict = null;
    $l$loop_0: while ($this.qhead_1 < $this.trail_1.get_size_woubt6_k$()) {
      var tmp1 = $this.qhead_1;
      $this.qhead_1 = tmp1 + 1 | 0;
      var lit = $this.trail_1.get_c1px32_k$(tmp1);
      if ($this.getValue_d2m14t_k$(lit).equals(VarValue_FALSE_getInstance())) {
        return $this.vars_1.get_c1px32_k$(variable(lit)).get_reason_iy4m6l_k$();
      }
      // Inline function 'kotlin.collections.mutableListOf' call
      var clausesToKeep = ArrayList_init_$Create$_0();
      var tmp2_iterator = $this.watchers_1.get_c1px32_k$(lit ^ 1).iterator_jk1svi_k$();
      while (tmp2_iterator.hasNext_bitz1p_k$()) {
        var brokenClause = tmp2_iterator.next_20eer_k$();
        if (!brokenClause.get_deleted_qwnqy8_k$()) {
          clausesToKeep.add_utx5q5_k$(brokenClause);
          if (conflict == null) {
            if (variable(brokenClause.get_c1px32_k$(0)) === variable(lit)) {
              swap_0(brokenClause, 0, 1);
            }
            if (!$this.getValue_d2m14t_k$(brokenClause.get_c1px32_k$(0)).equals(VarValue_TRUE_getInstance())) {
              var firstNotFalse = -1;
              var inductionVariable = 2;
              var last = brokenClause.get_size_woubt6_k$();
              if (inductionVariable < last)
                $l$loop: do {
                  var ind = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  if (!$this.getValue_d2m14t_k$(brokenClause.get_c1px32_k$(ind)).equals(VarValue_FALSE_getInstance())) {
                    firstNotFalse = ind;
                    break $l$loop;
                  }
                }
                 while (inductionVariable < last);
              if (firstNotFalse === -1 ? $this.getValue_d2m14t_k$(brokenClause.get_c1px32_k$(0)).equals(VarValue_FALSE_getInstance()) : false) {
                conflict = brokenClause;
              } else if (firstNotFalse === -1) {
                uncheckedEnqueue($this, brokenClause.get_c1px32_k$(0), brokenClause);
              } else {
                $this.watchers_1.get_c1px32_k$(brokenClause.get_c1px32_k$(firstNotFalse)).add_utx5q5_k$(brokenClause);
                swap_0(brokenClause, firstNotFalse, 1);
                removeLast(clausesToKeep);
              }
            }
          }
        }
      }
      $this.watchers_1.set_82063s_k$(lit ^ 1, clausesToKeep);
      if (!(conflict == null))
        break $l$loop_0;
    }
    return conflict;
  }
  function backjump($this, clause) {
    $this.level_1 = clause.get_size_woubt6_k$() > 1 ? $this.vars_1.get_c1px32_k$(variable(clause.get_c1px32_k$(1))).get_level_ium7h7_k$() : 0;
    $this.clearTrail_4oq8nl_k$($this.level_1);
  }
  function minimize($this, clause) {
    $this.mark_1 = $this.mark_1 + 1 | 0;
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = clause.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.kosat.CDCL.minimize.<anonymous>' call
      $this.minimizeMarks_1.set_82063s_k$(element, $this.mark_1);
    }
    // Inline function 'kotlin.collections.filterNot' call
    // Inline function 'kotlin.collections.filterNotTo' call
    var destination = ArrayList_init_$Create$_0();
    var tmp0_iterator_0 = clause.iterator_jk1svi_k$();
    while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
      var element_0 = tmp0_iterator_0.next_20eer_k$();
      // Inline function 'org.kosat.CDCL.minimize.<anonymous>' call
      var tmp0_safe_receiver = $this.vars_1.get_c1px32_k$(variable(element_0)).get_reason_iy4m6l_k$();
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp$ret$0;
        $l$block_0: {
          // Inline function 'kotlin.collections.all' call
          var tmp_0;
          if (isInterface(tmp0_safe_receiver, Collection)) {
            tmp_0 = tmp0_safe_receiver.isEmpty_y1axqb_k$();
          } else {
            tmp_0 = false;
          }
          if (tmp_0) {
            tmp$ret$0 = true;
            break $l$block_0;
          }
          var tmp0_iterator_1 = tmp0_safe_receiver.iterator_jk1svi_k$();
          while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
            var element_1 = tmp0_iterator_1.next_20eer_k$();
            // Inline function 'org.kosat.CDCL.minimize.<anonymous>.<anonymous>' call
            if (!($this.minimizeMarks_1.get_c1px32_k$(element_1) === $this.mark_1)) {
              tmp$ret$0 = false;
              break $l$block_0;
            }
          }
          tmp$ret$0 = true;
        }
        tmp = tmp$ret$0;
      }
      var tmp1_elvis_lhs = tmp;
      if (!(tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs)) {
        destination.add_utx5q5_k$(element_0);
      }
    }
    return new Clause(toMutableList(destination));
  }
  function _get_seen__ddlhyo($this) {
    return $this.seen_1;
  }
  function analyzeConflict($this, conflict) {
    var numberOfActiveVariables = 0;
    // Inline function 'kotlin.collections.mutableSetOf' call
    var lemma = LinkedHashSet_init_$Create$();
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = conflict.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.kosat.CDCL.analyzeConflict.<anonymous>' call
      if ($this.vars_1.get_c1px32_k$(variable(element)).get_level_ium7h7_k$() === $this.level_1) {
        $this.seen_1.set_82063s_k$(variable(element), true);
        numberOfActiveVariables = numberOfActiveVariables + 1 | 0;
      } else {
        analyzeConflict$updateLemma(lemma, element);
      }
    }
    var ind = get_lastIndex($this.trail_1);
    $l$loop: while (numberOfActiveVariables > 1) {
      var tmp0 = ind;
      ind = tmp0 - 1 | 0;
      var v = variable($this.trail_1.get_c1px32_k$(tmp0));
      if (!$this.seen_1.get_c1px32_k$(v))
        continue $l$loop;
      var tmp1_safe_receiver = $this.vars_1.get_c1px32_k$(v).get_reason_iy4m6l_k$();
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var tmp0_iterator_0 = tmp1_safe_receiver.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'org.kosat.CDCL.analyzeConflict.<anonymous>' call
          var current = variable(element_0);
          if (!($this.vars_1.get_c1px32_k$(current).get_level_ium7h7_k$() === $this.level_1)) {
            analyzeConflict$updateLemma(lemma, element_0);
          } else if (!(current === v) ? !$this.seen_1.get_c1px32_k$(current) : false) {
            $this.seen_1.set_82063s_k$(current, true);
            numberOfActiveVariables = numberOfActiveVariables + 1 | 0;
          }
        }
      }
      $this.seen_1.set_82063s_k$(v, false);
      numberOfActiveVariables = numberOfActiveVariables - 1 | 0;
    }
    var newClause;
    // Inline function 'kotlin.let' call
    var tmp$ret$2;
    $l$block: {
      // Inline function 'kotlin.collections.last' call
      var this_0 = $this.trail_1;
      var iterator = this_0.listIterator_70e65o_k$(this_0.get_size_woubt6_k$());
      while (iterator.hasPrevious_qh0629_k$()) {
        var element_1 = iterator.previous_l2dfd5_k$();
        // Inline function 'org.kosat.CDCL.analyzeConflict.<anonymous>' call
        if ($this.seen_1.get_c1px32_k$(variable(element_1))) {
          tmp$ret$2 = element_1;
          break $l$block;
        }
      }
      throw NoSuchElementException_init_$Create$_0('List contains no element matching the predicate.');
    }
    // Inline function 'kotlin.contracts.contract' call
    var lit = tmp$ret$2;
    var v_0 = variable(lit);
    analyzeConflict$updateLemma(lemma, $this.getValue_d2m14t_k$(positive(v_0)).equals(VarValue_TRUE_getInstance()) ? negative(v_0) : positive(v_0));
    newClause = minimize($this, new Clause(toMutableList(lemma)));
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'kotlin.collections.indexOfFirst' call
      var index = 0;
      var tmp0_iterator_1 = newClause.iterator_jk1svi_k$();
      while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
        var item = tmp0_iterator_1.next_20eer_k$();
        // Inline function 'org.kosat.CDCL.analyzeConflict.<anonymous>.<anonymous>' call
        if (variable(item) === v_0) {
          tmp$ret$4 = index;
          break $l$block_0;
        }
        index = index + 1 | 0;
      }
      tmp$ret$4 = -1;
    }
    var uipIndex = tmp$ret$4;
    swap_0(newClause, uipIndex, 0);
    $this.seen_1.set_82063s_k$(v_0, false);
    if (newClause.get_size_woubt6_k$() > 1) {
      var tmp$ret$6;
      $l$block_2: {
        // Inline function 'kotlin.collections.maxByOrNull' call
        var iterator_0 = get_indices(drop_0(newClause, 1)).iterator_jk1svi_k$();
        if (!iterator_0.hasNext_bitz1p_k$()) {
          tmp$ret$6 = null;
          break $l$block_2;
        }
        var maxElem = iterator_0.next_20eer_k$();
        if (!iterator_0.hasNext_bitz1p_k$()) {
          tmp$ret$6 = maxElem;
          break $l$block_2;
        }
        // Inline function 'org.kosat.CDCL.analyzeConflict.<anonymous>' call
        var it = maxElem;
        var maxValue = $this.vars_1.get_c1px32_k$(variable(newClause.get_c1px32_k$(it + 1 | 0))).get_level_ium7h7_k$();
        do {
          var e = iterator_0.next_20eer_k$();
          // Inline function 'org.kosat.CDCL.analyzeConflict.<anonymous>' call
          var v_1 = $this.vars_1.get_c1px32_k$(variable(newClause.get_c1px32_k$(e + 1 | 0))).get_level_ium7h7_k$();
          if (compareTo(maxValue, v_1) < 0) {
            maxElem = e;
            maxValue = v_1;
          }
        }
         while (iterator_0.hasNext_bitz1p_k$());
        tmp$ret$6 = maxElem;
      }
      var tmp3_elvis_lhs = tmp$ret$6;
      var secondMax = tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs;
      swap_0(newClause, 1, secondMax + 1 | 0);
    }
    return newClause;
  }
  function sam$kotlin_Comparator$0_3(function_0) {
    this.function_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_3).compare_bczr_k$ = function (a, b) {
    return this.function_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_3).compare = function (a, b) {
    return this.compare_bczr_k$(a, b);
  };
  function analyzeConflict$updateLemma(lemma, lit) {
    lemma.add_utx5q5_k$(lit);
  }
  function CDCL$newClause$lambda(this$0) {
    return function (it) {
      return this$0.getValue_d2m14t_k$(it).equals(VarValue_FALSE_getInstance());
    };
  }
  function CDCL$reduceDB$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    // Inline function 'org.kosat.CDCL.reduceDB.<anonymous>' call
    var tmp = b.get_lbd_18j1kr_k$();
    // Inline function 'org.kosat.CDCL.reduceDB.<anonymous>' call
    var tmp$ret$1 = a.get_lbd_18j1kr_k$();
    return compareValues(tmp, tmp$ret$1);
  }
  function CDCL$reduceDB$lambda_0(it) {
    return it.get_deleted_qwnqy8_k$();
  }
  function CDCL(solverType) {
    solverType = solverType === VOID ? SolverType_INCREMENTAL_getInstance() : solverType;
    this.solverType_1 = solverType;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.constraints_1 = ArrayList_init_$Create$_0();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.learnts_1 = ArrayList_init_$Create$_0();
    this.numberOfVariables_1 = 0;
    var tmp_1 = this;
    // Inline function 'kotlin.collections.MutableList' call
    var size = this.numberOfVariables_1;
    var list = ArrayList_init_$Create$(size);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable = 0;
    if (inductionVariable < size)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'org.kosat.CDCL.vars.<anonymous>' call
        var tmp$ret$2 = new VarState(VarValue_UNDEFINED_getInstance(), null, -1);
        list.add_utx5q5_k$(tmp$ret$2);
      }
       while (inductionVariable < size);
    tmp_1.vars_1 = list;
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_2.trail_1 = ArrayList_init_$Create$_0();
    this.qhead_1 = 0;
    var tmp_3 = this;
    // Inline function 'kotlin.collections.MutableList' call
    var size_0 = imul(this.numberOfVariables_1, 2);
    var list_0 = ArrayList_init_$Create$(size_0);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_0 = 0;
    if (inductionVariable_0 < size_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'org.kosat.CDCL.watchers.<anonymous>' call
        // Inline function 'kotlin.collections.mutableListOf' call
        var tmp$ret$6 = ArrayList_init_$Create$_0();
        list_0.add_utx5q5_k$(tmp$ret$6);
      }
       while (inductionVariable_0 < size_0);
    tmp_3.watchers_1 = list_0;
    this.reduceNumber_1 = 6000.0;
    this.reduceIncrement_1 = 500.0;
    this.level_1 = 0;
    var tmp_4 = this;
    // Inline function 'kotlin.collections.MutableList' call
    var size_1 = imul(this.numberOfVariables_1, 2);
    var list_1 = ArrayList_init_$Create$(size_1);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_1 = 0;
    if (inductionVariable_1 < size_1)
      do {
        var index_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'org.kosat.CDCL.minimizeMarks.<anonymous>' call
        list_1.add_utx5q5_k$(0);
      }
       while (inductionVariable_1 < size_1);
    tmp_4.minimizeMarks_1 = list_1;
    this.mark_1 = 0;
    this.variableSelector_1 = new VSIDS(this.numberOfVariables_1, this);
    this.restarter_1 = new Restarter(this);
    var tmp_5 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_5.polarity_1 = ArrayList_init_$Create$_0();
    this.assumptions_1 = emptyList();
    var tmp_6 = this;
    // Inline function 'kotlin.collections.MutableList' call
    var size_2 = this.numberOfVariables_1;
    var list_2 = ArrayList_init_$Create$(size_2);
    // Inline function 'kotlin.repeat' call
    // Inline function 'kotlin.contracts.contract' call
    var inductionVariable_2 = 0;
    if (inductionVariable_2 < size_2)
      do {
        var index_2 = inductionVariable_2;
        inductionVariable_2 = inductionVariable_2 + 1 | 0;
        // Inline function 'kotlin.collections.MutableList.<anonymous>' call
        // Inline function 'org.kosat.CDCL.seen.<anonymous>' call
        list_2.add_utx5q5_k$(false);
      }
       while (inductionVariable_2 < size_2);
    tmp_6.seen_1 = list_2;
  }
  protoOf(CDCL).get_constraints_codzjn_k$ = function () {
    return this.constraints_1;
  };
  protoOf(CDCL).get_learnts_23sd0a_k$ = function () {
    return this.learnts_1;
  };
  protoOf(CDCL).set_numberOfVariables_tsl6r6_k$ = function (_set____db54di) {
    this.numberOfVariables_1 = _set____db54di;
  };
  protoOf(CDCL).get_numberOfVariables_mzvxda_k$ = function () {
    return this.numberOfVariables_1;
  };
  protoOf(CDCL).get_vars_wow2np_k$ = function () {
    return this.vars_1;
  };
  protoOf(CDCL).getValue_d2m14t_k$ = function (lit) {
    if (this.vars_1.get_c1px32_k$(variable(lit)).get_value_j01efc_k$().equals(VarValue_UNDEFINED_getInstance()))
      return VarValue_UNDEFINED_getInstance();
    return (lit % 2 | 0) === 1 ? this.vars_1.get_c1px32_k$(variable(lit)).get_value_j01efc_k$().not_2cb7_k$() : this.vars_1.get_c1px32_k$(variable(lit)).get_value_j01efc_k$();
  };
  protoOf(CDCL).addVariable_y92vr1_k$ = function () {
    this.numberOfVariables_1 = this.numberOfVariables_1 + 1 | 0;
    this.variableSelector_1.addVariable_gvahsj_k$();
    this.vars_1.add_utx5q5_k$(new VarState(VarValue_UNDEFINED_getInstance(), null, -1));
    this.polarity_1.add_utx5q5_k$(VarValue_UNDEFINED_getInstance());
    // Inline function 'kotlin.collections.mutableListOf' call
    var tmp$ret$0 = ArrayList_init_$Create$_0();
    this.watchers_1.add_utx5q5_k$(tmp$ret$0);
    // Inline function 'kotlin.collections.mutableListOf' call
    var tmp$ret$1 = ArrayList_init_$Create$_0();
    this.watchers_1.add_utx5q5_k$(tmp$ret$1);
    this.minimizeMarks_1.add_utx5q5_k$(0);
    this.minimizeMarks_1.add_utx5q5_k$(0);
    this.seen_1.add_utx5q5_k$(false);
    return this.numberOfVariables_1;
  };
  protoOf(CDCL).newClause_uot4hz_k$ = function (clause) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.level_1 === 0)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.maxOfOrNull' call
      var iterator = clause.iterator_jk1svi_k$();
      if (!iterator.hasNext_bitz1p_k$()) {
        tmp$ret$1 = null;
        break $l$block;
      }
      // Inline function 'org.kosat.CDCL.newClause.<anonymous>' call
      var it = iterator.next_20eer_k$();
      var maxValue = variable(it);
      while (iterator.hasNext_bitz1p_k$()) {
        // Inline function 'org.kosat.CDCL.newClause.<anonymous>' call
        var it_0 = iterator.next_20eer_k$();
        var v = variable(it_0);
        if (compareTo(maxValue, v) < 0) {
          maxValue = v;
        }
      }
      tmp$ret$1 = maxValue;
    }
    var tmp0_elvis_lhs = tmp$ret$1;
    var maxVar = tmp0_elvis_lhs == null ? 0 : tmp0_elvis_lhs;
    while (this.numberOfVariables_1 < maxVar) {
      this.addVariable_y92vr1_k$();
    }
    var tmp$ret$4;
    $l$block_1: {
      // Inline function 'kotlin.collections.any' call
      var tmp;
      if (isInterface(clause, Collection)) {
        tmp = clause.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$4 = false;
        break $l$block_1;
      }
      var tmp0_iterator = clause.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.kosat.CDCL.newClause.<anonymous>' call
        if (this.getValue_d2m14t_k$(element).equals(VarValue_TRUE_getInstance())) {
          tmp$ret$4 = true;
          break $l$block_1;
        }
      }
      tmp$ret$4 = false;
    }
    if (tmp$ret$4) {
      return Unit_getInstance();
    }
    var tmp_0 = clause.get_lits_wopurp_k$();
    removeAll_0(tmp_0, CDCL$newClause$lambda(this));
    var tmp$ret$6;
    $l$block_3: {
      // Inline function 'kotlin.collections.any' call
      var tmp_1;
      if (isInterface(clause, Collection)) {
        tmp_1 = clause.isEmpty_y1axqb_k$();
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp$ret$6 = false;
        break $l$block_3;
      }
      var tmp0_iterator_0 = clause.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'org.kosat.CDCL.newClause.<anonymous>' call
        if (clause.contains_7q95ev_k$(element_0 ^ 1)) {
          tmp$ret$6 = true;
          break $l$block_3;
        }
      }
      tmp$ret$6 = false;
    }
    if (tmp$ret$6) {
      return Unit_getInstance();
    }
    if (clause.get_size_woubt6_k$() === 1) {
      uncheckedEnqueue$default(this, clause.get_c1px32_k$(0));
    } else {
      addConstraint(this, clause);
    }
  };
  protoOf(CDCL).clearTrail_4oq8nl_k$ = function (until) {
    $l$loop: while (true) {
      var tmp;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.trail_1.isEmpty_y1axqb_k$()) {
        tmp = this.vars_1.get_c1px32_k$(variable(last(this.trail_1))).get_level_ium7h7_k$() > until;
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      trailRemoveLast(this);
    }
  };
  protoOf(CDCL).clearTrail$default_lqdn14_k$ = function (until, $super) {
    until = until === VOID ? -1 : until;
    var tmp;
    if ($super === VOID) {
      this.clearTrail_4oq8nl_k$(until);
      tmp = Unit_getInstance();
    } else {
      tmp = $super.clearTrail_4oq8nl_k$.call(this, until);
    }
    return tmp;
  };
  protoOf(CDCL).solve_aj18gd_k$ = function (currentAssumptions) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.solverType_1.equals(SolverType_INCREMENTAL_getInstance())) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.assumptions_1 = (new Clause(toMutableList(currentAssumptions))).renumber_7x4zb8_k$();
    this.variableSelector_1.initAssumptions_kf7xh8_k$(this.assumptions_1);
    var result = this.solve_1t9irj_k$();
    if (result == null) {
      this.assumptions_1 = emptyList();
      return null;
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = currentAssumptions.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.kosat.CDCL.solve.<anonymous>' call
      // Inline function 'kotlin.collections.find' call
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var tmp0_iterator_0 = result.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var element_0 = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'org.kosat.CDCL.solve.<anonymous>.<anonymous>' call
          if (element_0 === (-element | 0)) {
            tmp$ret$2 = element_0;
            break $l$block;
          }
        }
        tmp$ret$2 = null;
      }
      if (!(tmp$ret$2 == null)) {
        this.assumptions_1 = emptyList();
        return null;
      }
    }
    this.assumptions_1 = emptyList();
    return result;
  };
  protoOf(CDCL).reduceDB_8jd0us_k$ = function () {
    // Inline function 'kotlin.collections.sortByDescending' call
    var this_0 = this.learnts_1;
    if (this_0.get_size_woubt6_k$() > 1) {
      // Inline function 'kotlin.comparisons.compareByDescending' call
      var tmp = CDCL$reduceDB$lambda;
      var tmp$ret$0 = new sam$kotlin_Comparator$0_3(tmp);
      sortWith(this_0, tmp$ret$0);
    }
    var deletionLimit = this.learnts_1.get_size_woubt6_k$() / 2 | 0;
    var cnt = 0;
    var tmp0_iterator = this.learnts_1.iterator_jk1svi_k$();
    $l$loop: while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var clause = tmp0_iterator.next_20eer_k$();
      if (cnt === deletionLimit) {
        break $l$loop;
      }
      if (!clause.get_deleted_qwnqy8_k$()) {
        cnt = cnt + 1 | 0;
        clause.set_deleted_5zxdsp_k$(true);
      }
    }
    removeAll_0(this.learnts_1, CDCL$reduceDB$lambda_0);
  };
  protoOf(CDCL).solve_1t9irj_k$ = function () {
    var numberOfConflicts = 0;
    var numberOfDecisions = 0;
    if (this.constraints_1.isEmpty_y1axqb_k$())
      return getModel(this);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var this_0 = this.constraints_1;
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.kosat.CDCL.solve.<anonymous>' call
        if (element.isEmpty_y1axqb_k$()) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    if (tmp$ret$0)
      return null;
    var tmp$ret$2;
    $l$block_4: {
      // Inline function 'kotlin.collections.any' call
      var this_1 = this.constraints_1;
      var tmp_0;
      if (isInterface(this_1, Collection)) {
        tmp_0 = this_1.isEmpty_y1axqb_k$();
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$2 = false;
        break $l$block_4;
      }
      var tmp0_iterator_0 = this_1.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'org.kosat.CDCL.solve.<anonymous>' call
        var tmp$ret$3;
        $l$block_3: {
          // Inline function 'kotlin.collections.all' call
          var tmp_1;
          if (isInterface(element_0, Collection)) {
            tmp_1 = element_0.isEmpty_y1axqb_k$();
          } else {
            tmp_1 = false;
          }
          if (tmp_1) {
            tmp$ret$3 = true;
            break $l$block_3;
          }
          var tmp0_iterator_1 = element_0.iterator_jk1svi_k$();
          while (tmp0_iterator_1.hasNext_bitz1p_k$()) {
            var element_1 = tmp0_iterator_1.next_20eer_k$();
            // Inline function 'org.kosat.CDCL.solve.<anonymous>.<anonymous>' call
            if (!this.getValue_d2m14t_k$(element_1).equals(VarValue_FALSE_getInstance())) {
              tmp$ret$3 = false;
              break $l$block_3;
            }
          }
          tmp$ret$3 = true;
        }
        if (tmp$ret$3) {
          tmp$ret$2 = true;
          break $l$block_4;
        }
      }
      tmp$ret$2 = false;
    }
    if (tmp$ret$2)
      return null;
    this.variableSelector_1.build_9gy771_k$(this.constraints_1);
    while (true) {
      var conflictClause = propagate(this);
      if (!(conflictClause == null)) {
        numberOfConflicts = numberOfConflicts + 1 | 0;
        if (this.level_1 === 0) {
          return null;
        }
        var lemma = analyzeConflict(this, conflictClause);
        // Inline function 'kotlin.collections.distinctBy' call
        var set = HashSet_init_$Create$();
        var list = ArrayList_init_$Create$_0();
        var tmp0_iterator_2 = lemma.iterator_jk1svi_k$();
        while (tmp0_iterator_2.hasNext_bitz1p_k$()) {
          var e = tmp0_iterator_2.next_20eer_k$();
          // Inline function 'org.kosat.CDCL.solve.<anonymous>' call
          var key = this.vars_1.get_c1px32_k$(variable(e)).get_level_ium7h7_k$();
          if (set.add_utx5q5_k$(key)) {
            list.add_utx5q5_k$(e);
          }
        }
        lemma.set_lbd_uk6wif_k$(list.get_size_woubt6_k$());
        backjump(this, lemma);
        this.qhead_1 = this.trail_1.get_size_woubt6_k$();
        if (lemma.get_size_woubt6_k$() === 1) {
          uncheckedEnqueue$default(this, lemma.get_c1px32_k$(0));
        } else {
          uncheckedEnqueue(this, lemma.get_c1px32_k$(0), lemma);
          addLearnt(this, lemma);
        }
        if (this.learnts_1.get_size_woubt6_k$() > this.reduceNumber_1) {
          this.reduceNumber_1 = this.reduceNumber_1 + this.reduceIncrement_1;
          this.restarter_1.restart_nz0dof_k$();
          this.reduceDB_8jd0us_k$();
        }
        this.variableSelector_1.update_38snmb_k$(lemma);
        this.restarter_1.update_7s7093_k$();
      } else {
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        // Inline function 'kotlin.require' call
        // Inline function 'kotlin.contracts.contract' call
        if (!(this.qhead_1 === this.trail_1.get_size_woubt6_k$())) {
          // Inline function 'kotlin.require.<anonymous>' call
          var message = 'Failed requirement.';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }
        if (this.trail_1.get_size_woubt6_k$() === this.numberOfVariables_1) {
          var model = getModel(this);
          this.reset_5u6xz3_k$();
          return model;
        }
        this.level_1 = this.level_1 + 1 | 0;
        var nextDecisionLiteral = this.variableSelector_1.nextDecision_x95x4r_k$(this.vars_1, this.level_1);
        numberOfDecisions = numberOfDecisions + 1 | 0;
        if (nextDecisionLiteral === -1) {
          this.reset_5u6xz3_k$();
          return null;
        }
        if (this.level_1 > this.assumptions_1.get_size_woubt6_k$() ? this.polarity_1.get_c1px32_k$(variable(nextDecisionLiteral)).equals(VarValue_FALSE_getInstance()) : false) {
          nextDecisionLiteral = negative(variable(nextDecisionLiteral));
        }
        uncheckedEnqueue$default(this, nextDecisionLiteral);
      }
    }
  };
  protoOf(CDCL).reset_5u6xz3_k$ = function () {
    this.level_1 = 0;
    this.clearTrail_4oq8nl_k$(0);
    this.qhead_1 = this.trail_1.get_size_woubt6_k$();
  };
  var SolverType_INCREMENTAL_instance;
  var SolverType_NON_INCREMENTAL_instance;
  function values() {
    return [SolverType_INCREMENTAL_getInstance(), SolverType_NON_INCREMENTAL_getInstance()];
  }
  function valueOf(value) {
    switch (value) {
      case 'INCREMENTAL':
        return SolverType_INCREMENTAL_getInstance();
      case 'NON_INCREMENTAL':
        return SolverType_NON_INCREMENTAL_getInstance();
      default:
        SolverType_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var SolverType_entriesInitialized;
  function SolverType_initEntries() {
    if (SolverType_entriesInitialized)
      return Unit_getInstance();
    SolverType_entriesInitialized = true;
    SolverType_INCREMENTAL_instance = new SolverType('INCREMENTAL', 0);
    SolverType_NON_INCREMENTAL_instance = new SolverType('NON_INCREMENTAL', 1);
  }
  var $ENTRIES;
  function SolverType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function variable(lit) {
    return lit / 2 | 0;
  }
  function SolverType_INCREMENTAL_getInstance() {
    SolverType_initEntries();
    return SolverType_INCREMENTAL_instance;
  }
  function SolverType_NON_INCREMENTAL_getInstance() {
    SolverType_initEntries();
    return SolverType_NON_INCREMENTAL_instance;
  }
  function Clause(lits) {
    this.lits_1 = lits;
    this.deleted_1 = false;
    this.lbd_1 = 0;
  }
  protoOf(Clause).get_lits_wopurp_k$ = function () {
    return this.lits_1;
  };
  protoOf(Clause).get_size_woubt6_k$ = function () {
    return this.lits_1.get_size_woubt6_k$();
  };
  protoOf(Clause).add_6jazo1_k$ = function (index, element) {
    this.lits_1.add_dl6gt3_k$(index, element);
  };
  protoOf(Clause).add_dl6gt3_k$ = function (index, element) {
    return this.add_6jazo1_k$(index, (!(element == null) ? typeof element === 'number' : false) ? element : THROW_CCE());
  };
  protoOf(Clause).add_lnluon_k$ = function (element) {
    return this.lits_1.add_utx5q5_k$(element);
  };
  protoOf(Clause).add_utx5q5_k$ = function (element) {
    return this.add_lnluon_k$((!(element == null) ? typeof element === 'number' : false) ? element : THROW_CCE());
  };
  protoOf(Clause).addAll_115vuo_k$ = function (index, elements) {
    return this.lits_1.addAll_lxodh3_k$(index, elements);
  };
  protoOf(Clause).addAll_lxodh3_k$ = function (index, elements) {
    return this.addAll_115vuo_k$(index, elements);
  };
  protoOf(Clause).addAll_c9pvhk_k$ = function (elements) {
    return this.lits_1.addAll_4lagoh_k$(elements);
  };
  protoOf(Clause).addAll_4lagoh_k$ = function (elements) {
    return this.addAll_c9pvhk_k$(elements);
  };
  protoOf(Clause).clear_j9egeb_k$ = function () {
    this.lits_1.clear_j9egeb_k$();
  };
  protoOf(Clause).contains_7q95ev_k$ = function (element) {
    return this.lits_1.contains_aljjnj_k$(element);
  };
  protoOf(Clause).contains_aljjnj_k$ = function (element) {
    if (!(!(element == null) ? typeof element === 'number' : false))
      return false;
    return this.contains_7q95ev_k$((!(element == null) ? typeof element === 'number' : false) ? element : THROW_CCE());
  };
  protoOf(Clause).containsAll_tftgie_k$ = function (elements) {
    return this.lits_1.containsAll_xk45sd_k$(elements);
  };
  protoOf(Clause).containsAll_xk45sd_k$ = function (elements) {
    return this.containsAll_tftgie_k$(elements);
  };
  protoOf(Clause).get_c1px32_k$ = function (index) {
    return this.lits_1.get_c1px32_k$(index);
  };
  protoOf(Clause).indexOf_h7efip_k$ = function (element) {
    return this.lits_1.indexOf_si1fv9_k$(element);
  };
  protoOf(Clause).indexOf_si1fv9_k$ = function (element) {
    if (!(!(element == null) ? typeof element === 'number' : false))
      return -1;
    return this.indexOf_h7efip_k$((!(element == null) ? typeof element === 'number' : false) ? element : THROW_CCE());
  };
  protoOf(Clause).isEmpty_y1axqb_k$ = function () {
    return this.lits_1.isEmpty_y1axqb_k$();
  };
  protoOf(Clause).iterator_jk1svi_k$ = function () {
    return this.lits_1.iterator_jk1svi_k$();
  };
  protoOf(Clause).lastIndexOf_r2wvdn_k$ = function (element) {
    return this.lits_1.lastIndexOf_v2p1fv_k$(element);
  };
  protoOf(Clause).lastIndexOf_v2p1fv_k$ = function (element) {
    if (!(!(element == null) ? typeof element === 'number' : false))
      return -1;
    return this.lastIndexOf_r2wvdn_k$((!(element == null) ? typeof element === 'number' : false) ? element : THROW_CCE());
  };
  protoOf(Clause).listIterator_xjshxw_k$ = function () {
    return this.lits_1.listIterator_xjshxw_k$();
  };
  protoOf(Clause).listIterator_70e65o_k$ = function (index) {
    return this.lits_1.listIterator_70e65o_k$(index);
  };
  protoOf(Clause).remove_cqondg_k$ = function (element) {
    return this.lits_1.remove_cedx0m_k$(element);
  };
  protoOf(Clause).remove_cedx0m_k$ = function (element) {
    if (!(!(element == null) ? typeof element === 'number' : false))
      return false;
    return this.remove_cqondg_k$((!(element == null) ? typeof element === 'number' : false) ? element : THROW_CCE());
  };
  protoOf(Clause).removeAll_bjaog5_k$ = function (elements) {
    return this.lits_1.removeAll_y0z8pe_k$(elements);
  };
  protoOf(Clause).removeAll_y0z8pe_k$ = function (elements) {
    return this.removeAll_bjaog5_k$(elements);
  };
  protoOf(Clause).removeAt_6niowx_k$ = function (index) {
    return this.lits_1.removeAt_6niowx_k$(index);
  };
  protoOf(Clause).retainAll_jfkdrw_k$ = function (elements) {
    return this.lits_1.retainAll_9fhiib_k$(elements);
  };
  protoOf(Clause).retainAll_9fhiib_k$ = function (elements) {
    return this.retainAll_jfkdrw_k$(elements);
  };
  protoOf(Clause).set_tq3pjy_k$ = function (index, element) {
    return this.lits_1.set_82063s_k$(index, element);
  };
  protoOf(Clause).set_82063s_k$ = function (index, element) {
    return this.set_tq3pjy_k$(index, (!(element == null) ? typeof element === 'number' : false) ? element : THROW_CCE());
  };
  protoOf(Clause).subList_xle3r2_k$ = function (fromIndex, toIndex) {
    return this.lits_1.subList_xle3r2_k$(fromIndex, toIndex);
  };
  protoOf(Clause).set_deleted_5zxdsp_k$ = function (_set____db54di) {
    this.deleted_1 = _set____db54di;
  };
  protoOf(Clause).get_deleted_qwnqy8_k$ = function () {
    return this.deleted_1;
  };
  protoOf(Clause).set_lbd_uk6wif_k$ = function (_set____db54di) {
    this.lbd_1 = _set____db54di;
  };
  protoOf(Clause).get_lbd_18j1kr_k$ = function () {
    return this.lbd_1;
  };
  protoOf(Clause).renumber_7x4zb8_k$ = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.lits_1;
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
    var tmp0_iterator = this_0.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.kosat.Clause.renumber.<anonymous>' call
      var tmp$ret$0 = item < 0 ? negative((-item | 0) - 1 | 0) : positive(item - 1 | 0);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    return new Clause(toMutableList(destination));
  };
  function negative(v) {
    return imul(v, 2) + 1 | 0;
  }
  function positive(v) {
    return imul(v, 2);
  }
  function _set_model__hv60jg($this, _set____db54di) {
    $this.model_1 = _set____db54di;
  }
  function _get_model__e5yfy0($this) {
    return $this.model_1;
  }
  function _get_solver__47zck8($this) {
    return $this.solver_1;
  }
  function Kosat(clauses, vars) {
    vars = vars === VOID ? 0 : vars;
    this.model_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.map' call
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$(collectionSizeOrDefault(clauses, 10));
    var tmp0_iterator = clauses.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.kosat.Kosat.solver.<anonymous>' call
      var tmp$ret$0 = new Clause(item);
      destination.add_utx5q5_k$(tmp$ret$0);
    }
    tmp.solver_1 = CDCL_init_$Create$_0(toMutableList(destination), vars);
  }
  protoOf(Kosat).get_numberOfVariables_mzvxda_k$ = function () {
    return this.solver_1.get_numberOfVariables_mzvxda_k$();
  };
  protoOf(Kosat).get_numberOfClauses_ayr4rf_k$ = function () {
    return this.solver_1.get_constraints_codzjn_k$().get_size_woubt6_k$() + this.solver_1.get_learnts_23sd0a_k$().get_size_woubt6_k$() | 0;
  };
  protoOf(Kosat).addVariable_y92vr1_k$ = function () {
    this.solver_1.addVariable_y92vr1_k$();
    return this.solver_1.get_numberOfVariables_mzvxda_k$();
  };
  protoOf(Kosat).addClause_puskoc_k$ = function (literals) {
    this.solver_1.newClause_uot4hz_k$((new Clause(toMutableList(literals))).renumber_7x4zb8_k$());
  };
  protoOf(Kosat).addClause_hw07vs_k$ = function (lit) {
    return this.addClause_puskoc_k$(listOf_0(lit));
  };
  protoOf(Kosat).addClause_wseue8_k$ = function (lit1, lit2) {
    return this.addClause_puskoc_k$(listOf([lit1, lit2]));
  };
  protoOf(Kosat).addClause_ybd7o8_k$ = function (lit1, lit2, lit3) {
    return this.addClause_puskoc_k$(listOf([lit1, lit2, lit3]));
  };
  protoOf(Kosat).addClause_uy87qg_k$ = function (literals) {
    return this.addClause_puskoc_k$(toList(literals));
  };
  protoOf(Kosat).solve_1t9irj_k$ = function () {
    this.model_1 = this.solver_1.solve_1t9irj_k$();
    return !(this.model_1 == null);
  };
  protoOf(Kosat).solve_aj18gd_k$ = function (assumptions) {
    this.model_1 = this.solver_1.solve_aj18gd_k$(assumptions);
    return !(this.model_1 == null);
  };
  protoOf(Kosat).solve_wth1rr_k$ = function (assumptions) {
    return this.solve_aj18gd_k$(toList(assumptions));
  };
  protoOf(Kosat).getModel_wevcz7_k$ = function () {
    var tmp0_elvis_lhs = this.model_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(Kosat).getValue_d2m14t_k$ = function (lit) {
    var tmp0_safe_receiver = this.model_1;
    return (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.get_c1px32_k$(abs(lit) - 1 | 0)) === lit;
  };
  function Solver() {
  }
  function VarState(value, reason, level) {
    this.value_1 = value;
    this.reason_1 = reason;
    this.level_1 = level;
  }
  protoOf(VarState).set_value_yrqvw8_k$ = function (_set____db54di) {
    this.value_1 = _set____db54di;
  };
  protoOf(VarState).get_value_j01efc_k$ = function () {
    return this.value_1;
  };
  protoOf(VarState).set_reason_53xo2e_k$ = function (_set____db54di) {
    this.reason_1 = _set____db54di;
  };
  protoOf(VarState).get_reason_iy4m6l_k$ = function () {
    return this.reason_1;
  };
  protoOf(VarState).set_level_qwoiin_k$ = function (_set____db54di) {
    this.level_1 = _set____db54di;
  };
  protoOf(VarState).get_level_ium7h7_k$ = function () {
    return this.level_1;
  };
  protoOf(VarState).component1_7eebsc_k$ = function () {
    return this.value_1;
  };
  protoOf(VarState).component2_7eebsb_k$ = function () {
    return this.reason_1;
  };
  protoOf(VarState).component3_7eebsa_k$ = function () {
    return this.level_1;
  };
  protoOf(VarState).copy_wqdvyg_k$ = function (value, reason, level) {
    return new VarState(value, reason, level);
  };
  protoOf(VarState).copy$default_j7zgm9_k$ = function (value, reason, level, $super) {
    value = value === VOID ? this.value_1 : value;
    reason = reason === VOID ? this.reason_1 : reason;
    level = level === VOID ? this.level_1 : level;
    return $super === VOID ? this.copy_wqdvyg_k$(value, reason, level) : $super.copy_wqdvyg_k$.call(this, value, reason, level);
  };
  protoOf(VarState).toString = function () {
    return 'VarState(value=' + this.value_1 + ', reason=' + this.reason_1 + ', level=' + this.level_1 + ')';
  };
  protoOf(VarState).hashCode = function () {
    var result = this.value_1.hashCode();
    result = imul(result, 31) + (this.reason_1 == null ? 0 : hashCode(this.reason_1)) | 0;
    result = imul(result, 31) + this.level_1 | 0;
    return result;
  };
  protoOf(VarState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VarState))
      return false;
    var tmp0_other_with_cast = other instanceof VarState ? other : THROW_CCE();
    if (!this.value_1.equals(tmp0_other_with_cast.value_1))
      return false;
    if (!equals(this.reason_1, tmp0_other_with_cast.reason_1))
      return false;
    if (!(this.level_1 === tmp0_other_with_cast.level_1))
      return false;
    return true;
  };
  var VarValue_TRUE_instance;
  var VarValue_FALSE_instance;
  var VarValue_UNDEFINED_instance;
  function values_0() {
    return [VarValue_TRUE_getInstance(), VarValue_FALSE_getInstance(), VarValue_UNDEFINED_getInstance()];
  }
  function valueOf_0(value) {
    switch (value) {
      case 'TRUE':
        return VarValue_TRUE_getInstance();
      case 'FALSE':
        return VarValue_FALSE_getInstance();
      case 'UNDEFINED':
        return VarValue_UNDEFINED_getInstance();
      default:
        VarValue_initEntries();
        THROW_IAE('No enum constant value.');
        break;
    }
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var VarValue_entriesInitialized;
  function VarValue_initEntries() {
    if (VarValue_entriesInitialized)
      return Unit_getInstance();
    VarValue_entriesInitialized = true;
    VarValue_TRUE_instance = new VarValue('TRUE', 0);
    VarValue_FALSE_instance = new VarValue('FALSE', 1);
    VarValue_UNDEFINED_instance = new VarValue('UNDEFINED', 2);
  }
  var $ENTRIES_0;
  function VarValue(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(VarValue).not_2cb7_k$ = function () {
    var tmp;
    switch (this.get_ordinal_ip24qg_k$()) {
      case 0:
        tmp = VarValue_FALSE_getInstance();
        break;
      case 1:
        tmp = VarValue_TRUE_getInstance();
        break;
      case 2:
        tmp = VarValue_UNDEFINED_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  function VarValue_TRUE_getInstance() {
    VarValue_initEntries();
    return VarValue_TRUE_instance;
  }
  function VarValue_FALSE_getInstance() {
    VarValue_initEntries();
    return VarValue_FALSE_instance;
  }
  function VarValue_UNDEFINED_getInstance() {
    VarValue_initEntries();
    return VarValue_UNDEFINED_instance;
  }
  function _set_capacity__2jc21p($this, _set____db54di) {
    $this.capacity_1 = _set____db54di;
  }
  function _get_capacity__a9k9f3($this) {
    return $this.capacity_1;
  }
  function cmp($this, u, v) {
    if ($this.activity_1.get_c1px32_k$(u) > $this.activity_1.get_c1px32_k$(v)) {
      return true;
    }
    if ($this.activity_1.get_c1px32_k$(u) < $this.activity_1.get_c1px32_k$(v)) {
      return false;
    }
    return u < v;
  }
  function leftChild($this, u) {
    return imul(2, u) + 1 | 0;
  }
  function rightChild($this, u) {
    return imul(2, u) + 2 | 0;
  }
  function parent($this, u) {
    return (u - 1 | 0) / 2 | 0;
  }
  function swap($this, u, v) {
    swap_0($this.heap_1, u, v);
    $this.index_1.set_82063s_k$($this.heap_1.get_c1px32_k$(u), u);
    $this.index_1.set_82063s_k$($this.heap_1.get_c1px32_k$(v), v);
  }
  function siftDown($this, u) {
    var vertex = $this.heap_1.get_c1px32_k$(u);
    var curInd = u;
    var ls;
    var rs;
    var leftVertex;
    var rightVertex;
    $l$loop_1: while (leftChild($this, curInd) < $this.size_1) {
      ls = leftChild($this, curInd);
      rs = rightChild($this, curInd);
      leftVertex = ls > ($this.size_1 - 1 | 0) ? -1 : $this.heap_1.get_c1px32_k$(ls);
      rightVertex = rs > ($this.size_1 - 1 | 0) ? -1 : $this.heap_1.get_c1px32_k$(rs);
      if (rs > ($this.size_1 - 1 | 0)) {
        if (cmp($this, leftVertex, vertex)) {
          $this.heap_1.set_82063s_k$(curInd, leftVertex);
          $this.index_1.set_82063s_k$(leftVertex, curInd);
          curInd = ls;
        } else {
          break $l$loop_1;
        }
      } else if (cmp($this, leftVertex, rightVertex)) {
        if (cmp($this, leftVertex, vertex)) {
          $this.heap_1.set_82063s_k$(curInd, leftVertex);
          $this.index_1.set_82063s_k$(leftVertex, curInd);
          curInd = ls;
        } else {
          break $l$loop_1;
        }
      } else if (cmp($this, rightVertex, vertex)) {
        $this.heap_1.set_82063s_k$(curInd, rightVertex);
        $this.index_1.set_82063s_k$(rightVertex, curInd);
        curInd = rs;
      } else {
        break $l$loop_1;
      }
    }
    $this.heap_1.set_82063s_k$(curInd, vertex);
    $this.index_1.set_82063s_k$(vertex, curInd);
  }
  function PriorityQueue(activity) {
    this.activity_1 = activity;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.heap_1 = ArrayList_init_$Create$_0();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_0.index_1 = ArrayList_init_$Create$_0();
    this.capacity_1 = -1;
    this.size_1 = 0;
  }
  protoOf(PriorityQueue).get_activity_bu9714_k$ = function () {
    return this.activity_1;
  };
  protoOf(PriorityQueue).get_heap_won7ed_k$ = function () {
    return this.heap_1;
  };
  protoOf(PriorityQueue).get_index_it478p_k$ = function () {
    return this.index_1;
  };
  protoOf(PriorityQueue).set_size_e2677a_k$ = function (_set____db54di) {
    this.size_1 = _set____db54di;
  };
  protoOf(PriorityQueue).get_size_woubt6_k$ = function () {
    return this.size_1;
  };
  protoOf(PriorityQueue).siftUp_pikzw7_k$ = function (u) {
    var vertex = this.heap_1.get_c1px32_k$(u);
    var curInd = u;
    var parent_0 = parent(this, curInd);
    while (curInd > 0 ? cmp(this, vertex, this.heap_1.get_c1px32_k$(parent_0)) : false) {
      this.heap_1.set_82063s_k$(curInd, this.heap_1.get_c1px32_k$(parent_0));
      this.index_1.set_82063s_k$(this.heap_1.get_c1px32_k$(curInd), curInd);
      curInd = parent_0;
      parent_0 = parent(this, curInd);
    }
    this.heap_1.set_82063s_k$(curInd, vertex);
    this.index_1.set_82063s_k$(vertex, curInd);
  };
  protoOf(PriorityQueue).top_2gr9_k$ = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.size_1 === 0)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return this.heap_1.get_c1px32_k$(0);
  };
  protoOf(PriorityQueue).pop_2dsh_k$ = function () {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.size_1 === 0)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var max = this.top_2gr9_k$();
    swap(this, 0, this.size_1 - 1 | 0);
    this.index_1.set_82063s_k$(this.heap_1.get_c1px32_k$(this.size_1 - 1 | 0), -1);
    this.size_1 = this.size_1 - 1 | 0;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!this.heap_1.isEmpty_y1axqb_k$()) {
      siftDown(this, 0);
    }
    return max;
  };
  protoOf(PriorityQueue).insert_vb2ssx_k$ = function (value) {
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'kotlin.require' call
    // Inline function 'kotlin.contracts.contract' call
    if (!!(this.size_1 === this.capacity_1)) {
      // Inline function 'kotlin.require.<anonymous>' call
      var message = 'Failed requirement.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.heap_1.set_82063s_k$(this.size_1, value);
    this.index_1.set_82063s_k$(value, this.size_1);
    this.size_1 = this.size_1 + 1 | 0;
    this.siftUp_pikzw7_k$(this.size_1 - 1 | 0);
  };
  protoOf(PriorityQueue).buildHeap_o44qpp_k$ = function (activity) {
    var inductionVariable = 0;
    var last = get_lastIndex(activity);
    if (inductionVariable <= last)
      do {
        var ind = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        this.heap_1.add_utx5q5_k$(ind);
      }
       while (!(ind === last));
    this.size_1 = this.heap_1.get_size_woubt6_k$();
    while (this.index_1.get_size_woubt6_k$() < this.size_1) {
      this.index_1.add_utx5q5_k$(0);
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index = 0;
    var tmp0_iterator = this.heap_1.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var item = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.kosat.heuristics.PriorityQueue.buildHeap.<anonymous>' call
      var tmp1 = index;
      index = tmp1 + 1 | 0;
      var ind_0 = checkIndexOverflow(tmp1);
      this.index_1.set_82063s_k$(item, ind_0);
    }
    var inductionVariable_0 = this.heap_1.get_size_woubt6_k$() / 2 | 0;
    if (0 <= inductionVariable_0)
      do {
        var ind_1 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + -1 | 0;
        siftDown(this, ind_1);
      }
       while (0 <= inductionVariable_0);
    this.capacity_1 = this.size_1;
  };
  function _get_solver__47zck8_0($this) {
    return $this.solver_1;
  }
  function _get_lubyMultiplierConstant__e8vq8q($this) {
    return $this.lubyMultiplierConstant_1;
  }
  function _set_restartNumber__y12nlf($this, _set____db54di) {
    $this.restartNumber_1 = _set____db54di;
  }
  function _get_restartNumber__ls9vvd($this) {
    return $this.restartNumber_1;
  }
  function _set_numberOfConflictsAfterRestart__c2p1w1($this, _set____db54di) {
    $this.numberOfConflictsAfterRestart_1 = _set____db54di;
  }
  function _get_numberOfConflictsAfterRestart__lnezj1($this) {
    return $this.numberOfConflictsAfterRestart_1;
  }
  function luby($this, i, initialDeg) {
    if (i === 2)
      return 1;
    var deg = initialDeg;
    while (deg <= i) {
      deg = imul(deg, 2);
    }
    while ((deg / 2 | 0) > i) {
      deg = deg / 2 | 0;
    }
    if ((deg - 1 | 0) === i) {
      return deg / 2 | 0;
    }
    return luby($this, (i - (deg / 2 | 0) | 0) + 1 | 0, deg / 2 | 0);
  }
  function luby$default($this, i, initialDeg, $super) {
    initialDeg = initialDeg === VOID ? 1 : initialDeg;
    return luby($this, i, initialDeg);
  }
  function _set_lubyPosition__d5a7im($this, _set____db54di) {
    $this.lubyPosition_1 = _set____db54di;
  }
  function _get_lubyPosition__sp0y2q($this) {
    return $this.lubyPosition_1;
  }
  function Restarter(solver) {
    this.solver_1 = solver;
    this.lubyMultiplierConstant_1 = 50.0;
    this.restartNumber_1 = this.lubyMultiplierConstant_1;
    this.numberOfConflictsAfterRestart_1 = 0;
    this.lubyPosition_1 = 1;
  }
  protoOf(Restarter).restart_nz0dof_k$ = function () {
    var tmp = this;
    var tmp1 = this.lubyPosition_1;
    this.lubyPosition_1 = tmp1 + 1 | 0;
    tmp.restartNumber_1 = this.lubyMultiplierConstant_1 * luby$default(this, tmp1);
    this.solver_1.reset_5u6xz3_k$();
  };
  protoOf(Restarter).update_7s7093_k$ = function () {
    this.numberOfConflictsAfterRestart_1 = this.numberOfConflictsAfterRestart_1 + 1 | 0;
    if (this.numberOfConflictsAfterRestart_1 >= this.restartNumber_1) {
      this.numberOfConflictsAfterRestart_1 = 0;
      this.restart_nz0dof_k$();
    }
  };
  function VariableSelector() {
    this.assumptions_1 = emptyList();
  }
  protoOf(VariableSelector).set_assumptions_w0ywj3_k$ = function (_set____db54di) {
    this.assumptions_1 = _set____db54di;
  };
  protoOf(VariableSelector).get_assumptions_je67z5_k$ = function () {
    return this.assumptions_1;
  };
  protoOf(VariableSelector).initAssumptions_kf7xh8_k$ = function (assumptions) {
    this.assumptions_1 = assumptions;
  };
  function _set_numberOfVariables__v33xrm($this, _set____db54di) {
    $this.numberOfVariables_1 = _set____db54di;
  }
  function _get_numberOfVariables__i877x6($this) {
    return $this.numberOfVariables_1;
  }
  function _get_solver__47zck8_1($this) {
    return $this.solver_1;
  }
  function _get_multiplier__lw41li($this) {
    return $this.multiplier_1;
  }
  function _set_numberOfConflicts__qeprtw($this, _set____db54di) {
    $this.numberOfConflicts_1 = _set____db54di;
  }
  function _get_numberOfConflicts__4owvjk($this) {
    return $this.numberOfConflicts_1;
  }
  function _set_activityInc__o00l92($this, _set____db54di) {
    $this.activityInc_1 = _set____db54di;
  }
  function _get_activityInc__gqpae6($this) {
    return $this.activityInc_1;
  }
  function _set_activityLimit__j99ag7($this, _set____db54di) {
    $this.activityLimit_1 = _set____db54di;
  }
  function _get_activityLimit__yh0syj($this) {
    return $this.activityLimit_1;
  }
  function _get_activity__rw2tng($this) {
    return $this.activity_1;
  }
  function _set_activityPQ__vay7cp($this, _set____db54di) {
    $this.activityPQ_1 = _set____db54di;
  }
  function _get_activityPQ__onx9h7($this) {
    return $this.activityPQ_1;
  }
  function getMaxActivityVariable($this, vars) {
    var v;
    $l$loop: while (true) {
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'kotlin.require' call
      // Inline function 'kotlin.contracts.contract' call
      if (!($this.activityPQ_1.get_size_woubt6_k$() > 0)) {
        // Inline function 'kotlin.require.<anonymous>' call
        var message = 'Failed requirement.';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      v = $this.activityPQ_1.pop_2dsh_k$();
      if (vars.get_c1px32_k$(v).get_value_j01efc_k$().equals(VarValue_UNDEFINED_getInstance())) {
        break $l$loop;
      }
    }
    return v;
  }
  function VSIDS(numberOfVariables, solver) {
    numberOfVariables = numberOfVariables === VOID ? 0 : numberOfVariables;
    VariableSelector.call(this);
    this.numberOfVariables_1 = numberOfVariables;
    this.solver_1 = solver;
    this.multiplier_1 = 1.1;
    this.numberOfConflicts_1 = 0;
    this.activityInc_1 = 1.0;
    this.activityLimit_1 = 1.0E100;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.activity_1 = ArrayList_init_$Create$_0();
    this.activityPQ_1 = new PriorityQueue(this.activity_1);
  }
  protoOf(VSIDS).update_38snmb_k$ = function (lemma) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = lemma.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.kosat.heuristics.VSIDS.update.<anonymous>' call
      var v = variable(element);
      var tmp0_array = this.activity_1;
      tmp0_array.set_82063s_k$(v, tmp0_array.get_c1px32_k$(v) + this.activityInc_1);
      if (!(this.activityPQ_1.get_index_it478p_k$().get_c1px32_k$(v) === -1)) {
        this.activityPQ_1.siftUp_pikzw7_k$(this.activityPQ_1.get_index_it478p_k$().get_c1px32_k$(v));
      }
      if (this.activity_1.get_c1px32_k$(v) > this.activityLimit_1) {
        // Inline function 'kotlin.collections.forEachIndexed' call
        var index = 0;
        var tmp0_iterator_0 = this.activity_1.iterator_jk1svi_k$();
        while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
          var item = tmp0_iterator_0.next_20eer_k$();
          // Inline function 'org.kosat.heuristics.VSIDS.update.<anonymous>.<anonymous>' call
          var tmp1 = index;
          index = tmp1 + 1 | 0;
          var ind = checkIndexOverflow(tmp1);
          this.activity_1.set_82063s_k$(ind, item / this.activityLimit_1);
        }
        this.activityInc_1 = this.activityInc_1 / this.activityLimit_1;
      }
    }
    this.activityInc_1 = this.activityInc_1 * this.multiplier_1;
    this.numberOfConflicts_1 = this.numberOfConflicts_1 + 1 | 0;
  };
  protoOf(VSIDS).addVariable_gvahsj_k$ = function () {
    this.activity_1.add_utx5q5_k$(0.0);
    this.numberOfVariables_1 = this.numberOfVariables_1 + 1 | 0;
  };
  protoOf(VSIDS).build_9gy771_k$ = function (clauses) {
    while (this.activity_1.get_size_woubt6_k$() < this.numberOfVariables_1) {
      this.activity_1.add_utx5q5_k$(0.0);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = clauses.iterator_jk1svi_k$();
    while (tmp0_iterator.hasNext_bitz1p_k$()) {
      var element = tmp0_iterator.next_20eer_k$();
      // Inline function 'org.kosat.heuristics.VSIDS.build.<anonymous>' call
      // Inline function 'kotlin.collections.forEach' call
      var tmp0_iterator_0 = element.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'org.kosat.heuristics.VSIDS.build.<anonymous>.<anonymous>' call
        var tmp0_array = this.activity_1;
        var tmp1_index0 = variable(element_0);
        tmp0_array.set_82063s_k$(tmp1_index0, tmp0_array.get_c1px32_k$(tmp1_index0) + this.activityInc_1);
      }
    }
    this.activityPQ_1.buildHeap_o44qpp_k$(this.activity_1);
  };
  protoOf(VSIDS).nextDecision_x95x4r_k$ = function (vars, level) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.any' call
      var this_0 = this.assumptions_1;
      var tmp;
      if (isInterface(this_0, Collection)) {
        tmp = this_0.isEmpty_y1axqb_k$();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = false;
        break $l$block_0;
      }
      var tmp0_iterator = this_0.iterator_jk1svi_k$();
      while (tmp0_iterator.hasNext_bitz1p_k$()) {
        var element = tmp0_iterator.next_20eer_k$();
        // Inline function 'org.kosat.heuristics.VSIDS.nextDecision.<anonymous>' call
        if (this.solver_1.getValue_d2m14t_k$(element).equals(VarValue_FALSE_getInstance())) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
      tmp$ret$0 = false;
    }
    if (tmp$ret$0) {
      return -1;
    }
    var tmp$ret$3;
    $l$block_1: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var tmp0_iterator_0 = this.assumptions_1.iterator_jk1svi_k$();
      while (tmp0_iterator_0.hasNext_bitz1p_k$()) {
        var element_0 = tmp0_iterator_0.next_20eer_k$();
        // Inline function 'org.kosat.heuristics.VSIDS.nextDecision.<anonymous>' call
        if (this.solver_1.getValue_d2m14t_k$(element_0).equals(VarValue_UNDEFINED_getInstance())) {
          tmp$ret$3 = element_0;
          break $l$block_1;
        }
      }
      tmp$ret$3 = null;
    }
    var tmp0_elvis_lhs = tmp$ret$3;
    return tmp0_elvis_lhs == null ? imul(getMaxActivityVariable(this, vars), 2) : tmp0_elvis_lhs;
  };
  protoOf(VSIDS).backTrack_odbskk_k$ = function (variable) {
    if (this.activityPQ_1.get_index_it478p_k$().get_c1px32_k$(variable) === -1) {
      this.activityPQ_1.insert_vb2ssx_k$(variable);
    }
  };
  function swap_0(_this__u8e3s4, i, j) {
    // Inline function 'kotlin.also' call
    var this_0 = _this__u8e3s4.get_c1px32_k$(j);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'org.kosat.swap.<anonymous>' call
    _this__u8e3s4.set_82063s_k$(j, _this__u8e3s4.get_c1px32_k$(i));
    _this__u8e3s4.set_82063s_k$(i, this_0);
  }
  function set_viz(_set____db54di) {
    _init_properties_Animate_kt__k9vufl();
    viz = _set____db54di;
  }
  function get_viz() {
    _init_properties_Animate_kt__k9vufl();
    return viz;
  }
  var viz;
  var properties_initialized_Animate_kt_any8dt;
  function _init_properties_Animate_kt__k9vufl() {
    if (!properties_initialized_Animate_kt_any8dt) {
      properties_initialized_Animate_kt_any8dt = true;
      viz = new Viz();
    }
  }
  function get_canonical() {
    _init_properties_Valiant_kt__scjfw3();
    return canonical;
  }
  var canonical;
  function set_i(_set____db54di) {
    _init_properties_Valiant_kt__scjfw3();
    i = _set____db54di;
  }
  function get_i_0() {
    _init_properties_Valiant_kt__scjfw3();
    return i;
  }
  var i;
  function canonical$lambda($this$$receiver) {
    _init_properties_Valiant_kt__scjfw3();
    $this$$receiver.minus_ej5072_k$('0:A', '01:AA');
    $this$$receiver.minus_ej5072_k$('1:A', '01:AA');
    $this$$receiver.minus_ej5072_k$('2:A', '2:XA,2:AA');
    $this$$receiver.minus_ej5072_k$('3:B', '3:YB,3:BB');
    $this$$receiver.minus_ej5072_k$('4:B', '45:BB');
    $this$$receiver.minus_ej5072_k$('5:B', '45:BB');
    return Unit_getInstance();
  }
  function canonical$lambda_0($this$$receiver) {
    _init_properties_Valiant_kt__scjfw3();
    $this$$receiver.minus_ej5072_k$('2:XA,2:AA', '2:XA,2:X');
    $this$$receiver.minus_ej5072_k$('3:YB,3:BB', '3:YB,3:Y');
    $this$$receiver.minus_ej5072_k$('01:AA', '01:X');
    $this$$receiver.minus_ej5072_k$('45:BB', '45:Y');
    return Unit_getInstance();
  }
  function canonical$lambda_1($this$$receiver) {
    _init_properties_Valiant_kt__scjfw3();
    $this$$receiver.minus_ej5072_k$('01:X', '02:X');
    $this$$receiver.minus_ej5072_k$('2:XA,2:X', '02:X');
    $this$$receiver.minus_ej5072_k$('3:YB,3:Y', '35:Y');
    $this$$receiver.minus_ej5072_k$('45:Y', '35:Y');
    return Unit_getInstance();
  }
  function canonical$lambda_2($this$$receiver) {
    _init_properties_Valiant_kt__scjfw3();
    $this$$receiver.minus_ej5072_k$('02:X', '05:XY');
    $this$$receiver.minus_ej5072_k$('35:Y', '05:XY');
    return Unit_getInstance();
  }
  function canonical$lambda_3($this$$receiver) {
    _init_properties_Valiant_kt__scjfw3();
    $this$$receiver.minus_ej5072_k$('05:XY', '05:S');
    return Unit_getInstance();
  }
  var properties_initialized_Valiant_kt_hssf2n;
  function _init_properties_Valiant_kt__scjfw3() {
    if (!properties_initialized_Valiant_kt_hssf2n) {
      properties_initialized_Valiant_kt_hssf2n = true;
      var tmp = LabeledGraph_init_$Create$_0(canonical$lambda);
      var tmp_0 = LabeledGraph_init_$Create$_0(canonical$lambda_0);
      var tmp_1 = LabeledGraph_init_$Create$_0(canonical$lambda_1);
      var tmp_2 = LabeledGraph_init_$Create$_0(canonical$lambda_2);
      canonical = mutableListOf([tmp, tmp_0, tmp_1, tmp_2, LabeledGraph_init_$Create$_0(canonical$lambda_3)]);
      i = 0;
    }
  }
  //region block: post-declaration
  protoOf(AGF).G_1z_k$ = G;
  protoOf(AGF).G_in7rge_k$ = G_0;
  protoOf(AGF).G_keddm7_k$ = G_1;
  protoOf(AGF).G_14nq2q_k$ = G_2;
  protoOf(AGF).V_77re3y_k$ = V;
  protoOf(Vertex).neighbors_2gwtm7_k$ = neighbors;
  protoOf(Vertex).neighbors$default_1qz5l5_k$ = neighbors$default;
  protoOf(Vertex).neighborhood_88rqj2_k$ = neighborhood;
  protoOf(Gate).get_G0_kntory_k$ = get_G0;
  protoOf(Gate).get_E0_kntoto_k$ = get_E0;
  protoOf(Gate).get_V0_kntof1_k$ = get_V0;
  protoOf(Graph).get_an47xe_k$ = get;
  protoOf(Graph).get_c1px32_k$ = get_0;
  protoOf(Graph).get_index_it478p_k$ = get_index;
  protoOf(Graph).plus_ru5xrw_k$ = plus_7;
  protoOf(Graph).minus_b827a_k$ = minus_2;
  protoOf(Graph).join_iynfpw_k$ = join;
  protoOf(Graph).reversed_4dh64e_k$ = reversed;
  protoOf(Graph).isomorphicTo_rduam6_k$ = isomorphicTo;
  protoOf(Graph).vwise_lap0pf_k$ = vwise;
  protoOf(Graph).reachSequence_7ylrtp_k$ = reachSequence;
  protoOf(Graph).reachSequence$default_j5uo79_k$ = reachSequence$default;
  protoOf(Graph).reachability_8woovt_k$ = reachability;
  protoOf(Graph).transitiveClosure_s5t4xa_k$ = transitiveClosure;
  protoOf(Graph).randomWalk_b6vhw1_k$ = randomWalk;
  protoOf(Graph).randomWalk$default_vd4xeu_k$ = randomWalk$default;
  protoOf(Graph).asString_l3f38d_k$ = asString;
  protoOf(Graph).toDot_1tshji_k$ = toDot;
  protoOf(ComputationGraph).get_G0_kntory_k$ = get_G0;
  protoOf(ComputationGraph).get_E0_kntoto_k$ = get_E0;
  protoOf(ComputationGraph).get_V0_kntof1_k$ = get_V0;
  protoOf(Edge).component1_7eebsc_k$ = component1;
  protoOf(Edge).component2_7eebsb_k$ = component2;
  protoOf(UnlabeledEdge).get_G0_kntory_k$ = get_G0;
  protoOf(UnlabeledEdge).get_E0_kntoto_k$ = get_E0;
  protoOf(UnlabeledEdge).get_V0_kntof1_k$ = get_V0;
  protoOf(LabeledGraph).get_G0_kntory_k$ = get_G0_0;
  protoOf(LabeledGraph).get_E0_kntoto_k$ = get_E0_0;
  protoOf(LabeledGraph).V_5ojmx0_k$ = V_0;
  protoOf(LabeledGraph).get_V0_kntof1_k$ = get_V0_0;
  protoOf(LGVertex).get_G0_kntory_k$ = get_G0_0;
  protoOf(LGVertex).get_E0_kntoto_k$ = get_E0_0;
  protoOf(LGVertex).V_5ojmx0_k$ = V_0;
  protoOf(LGVertex).get_V0_kntof1_k$ = get_V0_0;
  protoOf(LabeledEdge).get_G0_kntory_k$ = get_G0_0;
  protoOf(LabeledEdge).get_E0_kntoto_k$ = get_E0_0;
  protoOf(LabeledEdge).V_5ojmx0_k$ = V_0;
  protoOf(LabeledEdge).get_V0_kntof1_k$ = get_V0_0;
  protoOf(AbstractMatrix).map_3hdx3j_k$ = map_0;
  protoOf(AbstractMatrix).shape_1t4tk1_k$ = shape;
  protoOf(AbstractMatrix).get_ozokd2_k$ = get_2;
  protoOf(AbstractMatrix).get_bzg6vq_k$ = get_3;
  protoOf(AbstractMatrix).get_c1px32_k$ = get_4;
  protoOf(AbstractMatrix).get_51jv09_k$ = get_1;
  protoOf(AbstractMatrix).plus_3dy6p4_k$ = plus_8;
  protoOf(AbstractMatrix).times_opju7w_k$ = times;
  protoOf(AbstractMatrix).squareUpperTriangular_fx5y64_k$ = squareUpperTriangular;
  protoOf(AbstractMatrix).getElements_j6jc1q_k$ = getElements;
  protoOf(AbstractMatrix).dot_dhgddr_k$ = dot;
  protoOf(AbstractMatrix).new$default_81ros5_k$ = new$default;
  protoOf(AbstractMatrix).safeJoin_3w60tv_k$ = safeJoin;
  protoOf(AbstractMatrix).safeJoin$default_1uhuxp_k$ = safeJoin$default;
  protoOf(AbstractMatrix).set_comz3f_k$ = set;
  protoOf(AbstractMatrix).count_6o00pv_k$ = count;
  protoOf(of).fetch_1hpshe_k$ = fetch;
  protoOf(of_0).next_ely74e_k$ = next;
  protoOf(of_0).pow_sgbgo_k$ = pow;
  protoOf(of_1).next_ely74e_k$ = next;
  protoOf(of_1).pow_sgbgo_k$ = pow;
  protoOf(of_2).next_ely74e_k$ = next;
  protoOf(of_2).times_v2bgcq_k$ = times_0;
  protoOf(of_2).pow_sgbgo_k$ = pow;
  protoOf(of_3).get_one_18iz2b_k$ = get_one;
  protoOf(of_3).plus_oqaz3q_k$ = plus_9;
  protoOf(of_3).times_v2bgcq_k$ = times_0;
  protoOf(of_3).pow_sgbgo_k$ = pow;
  //endregion
  //region block: init
  DEFAULT_FEATURE_LEN = 20;
  MAX_SORT_CAPACITY = 50;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = LRUCache;
  _.$_$.b = escapeHTML;
  _.$_$.c = get_blocked;
  _.$_$.d = enumSeq;
  _.$_$.e = parseCFG;
  _.$_$.f = parse;
  _.$_$.g = prettyPrint;
  _.$_$.h = repair;
  _.$_$.i = get_terminals;
  _.$_$.j = cache_0;
  _.$_$.k = carveSeams;
  //endregion
  return _;
}));

//# sourceMappingURL=galoisenne.js.map
