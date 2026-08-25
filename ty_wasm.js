/* @ts-self-types="./ty_wasm.d.ts" */

/**
 * A code action that can be applied to fix a diagnostic.
 */
export class CodeAction {
    static __wrap(ptr) {
        const obj = Object.create(CodeAction.prototype);
        obj.__wbg_ptr = ptr;
        CodeActionFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        CodeActionFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_codeaction_free(ptr, 0);
    }
    /**
     * @returns {TextEdit[]}
     */
    get edits() {
        const ret = wasm.__wbg_get_codeaction_edits(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {boolean}
     */
    get preferred() {
        const ret = wasm.__wbg_get_codeaction_preferred(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @returns {string}
     */
    get title() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_codeaction_title(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @param {TextEdit[]} arg0
     */
    set edits(arg0) {
        const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_codeaction_edits(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {boolean} arg0
     */
    set preferred(arg0) {
        wasm.__wbg_set_codeaction_preferred(this.__wbg_ptr, arg0);
    }
    /**
     * @param {string} arg0
     */
    set title(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_codeaction_title(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) CodeAction.prototype[Symbol.dispose] = CodeAction.prototype.free;

export class Completion {
    static __wrap(ptr) {
        const obj = Object.create(Completion.prototype);
        obj.__wbg_ptr = ptr;
        CompletionFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        CompletionFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_completion_free(ptr, 0);
    }
    /**
     * @returns {TextEdit[] | undefined}
     */
    get additional_text_edits() {
        const ret = wasm.__wbg_get_completion_additional_text_edits(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        }
        return v1;
    }
    /**
     * @returns {string | undefined}
     */
    get detail() {
        const ret = wasm.__wbg_get_completion_detail(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * @returns {string | undefined}
     */
    get documentation() {
        const ret = wasm.__wbg_get_completion_documentation(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * @returns {string | undefined}
     */
    get insert_text() {
        const ret = wasm.__wbg_get_completion_insert_text(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * @returns {CompletionKind | undefined}
     */
    get kind() {
        const ret = wasm.__wbg_get_completion_kind(this.__wbg_ptr);
        return ret === 25 ? undefined : ret;
    }
    /**
     * @returns {string | undefined}
     */
    get module_name() {
        const ret = wasm.__wbg_get_completion_module_name(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * @returns {string}
     */
    get name() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_completion_name(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @param {TextEdit[] | null} [arg0]
     */
    set additional_text_edits(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_completion_additional_text_edits(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string | null} [arg0]
     */
    set detail(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_completion_detail(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string | null} [arg0]
     */
    set documentation(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_completion_documentation(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string | null} [arg0]
     */
    set insert_text(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_completion_insert_text(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {CompletionKind | null} [arg0]
     */
    set kind(arg0) {
        wasm.__wbg_set_completion_kind(this.__wbg_ptr, isLikeNone(arg0) ? 25 : arg0);
    }
    /**
     * @param {string | null} [arg0]
     */
    set module_name(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_completion_module_name(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string} arg0
     */
    set name(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_completion_name(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) Completion.prototype[Symbol.dispose] = Completion.prototype.free;

/**
 * @enum {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24}
 */
export const CompletionKind = Object.freeze({
    Text: 0, "0": "Text",
    Method: 1, "1": "Method",
    Function: 2, "2": "Function",
    Constructor: 3, "3": "Constructor",
    Field: 4, "4": "Field",
    Variable: 5, "5": "Variable",
    Class: 6, "6": "Class",
    Interface: 7, "7": "Interface",
    Module: 8, "8": "Module",
    Property: 9, "9": "Property",
    Unit: 10, "10": "Unit",
    Value: 11, "11": "Value",
    Enum: 12, "12": "Enum",
    Keyword: 13, "13": "Keyword",
    Snippet: 14, "14": "Snippet",
    Color: 15, "15": "Color",
    File: 16, "16": "File",
    Reference: 17, "17": "Reference",
    Folder: 18, "18": "Folder",
    EnumMember: 19, "19": "EnumMember",
    Constant: 20, "20": "Constant",
    Struct: 21, "21": "Struct",
    Event: 22, "22": "Event",
    Operator: 23, "23": "Operator",
    TypeParameter: 24, "24": "TypeParameter",
});

export class Diagnostic {
    static __wrap(ptr) {
        const obj = Object.create(Diagnostic.prototype);
        obj.__wbg_ptr = ptr;
        DiagnosticFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        DiagnosticFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_diagnostic_free(ptr, 0);
    }
    /**
     * @param {Workspace} workspace
     * @returns {DiagnosticAnnotation[]}
     */
    annotations(workspace) {
        _assertClass(workspace, Workspace);
        const ret = wasm.diagnostic_annotations(this.__wbg_ptr, workspace.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Returns the code action for this diagnostic, if it has a fix.
     * @param {Workspace} workspace
     * @returns {CodeAction | undefined}
     */
    codeAction(workspace) {
        _assertClass(workspace, Workspace);
        const ret = wasm.diagnostic_codeAction(this.__wbg_ptr, workspace.__wbg_ptr);
        return ret === 0 ? undefined : CodeAction.__wrap(ret);
    }
    /**
     * @param {Workspace} workspace
     * @returns {string}
     */
    display(workspace) {
        _assertClass(workspace, Workspace);
        const ret = wasm.diagnostic_display(this.__wbg_ptr, workspace.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {string}
     */
    id() {
        const ret = wasm.diagnostic_id(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {string}
     */
    message() {
        const ret = wasm.diagnostic_message(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {Severity}
     */
    severity() {
        const ret = wasm.diagnostic_severity(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {Workspace} workspace
     * @returns {SubDiagnostic[]}
     */
    subDiagnostics(workspace) {
        _assertClass(workspace, Workspace);
        const ret = wasm.diagnostic_subDiagnostics(this.__wbg_ptr, workspace.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {any[]}
     */
    tags() {
        const ret = wasm.diagnostic_tags(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {TextRange | undefined}
     */
    textRange() {
        const ret = wasm.diagnostic_textRange(this.__wbg_ptr);
        return ret === 0 ? undefined : TextRange.__wrap(ret);
    }
    /**
     * @param {Workspace} workspace
     * @returns {Range | undefined}
     */
    toRange(workspace) {
        _assertClass(workspace, Workspace);
        const ret = wasm.diagnostic_toRange(this.__wbg_ptr, workspace.__wbg_ptr);
        return ret === 0 ? undefined : Range.__wrap(ret);
    }
}
if (Symbol.dispose) Diagnostic.prototype[Symbol.dispose] = Diagnostic.prototype.free;

export class DiagnosticAnnotation {
    static __wrap(ptr) {
        const obj = Object.create(DiagnosticAnnotation.prototype);
        obj.__wbg_ptr = ptr;
        DiagnosticAnnotationFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    static __unwrap(jsValue) {
        if (!(jsValue instanceof DiagnosticAnnotation)) {
            return 0;
        }
        return jsValue.__destroy_into_raw();
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        DiagnosticAnnotationFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_diagnosticannotation_free(ptr, 0);
    }
    /**
     * @returns {Location | undefined}
     */
    get location() {
        const ret = wasm.__wbg_get_diagnosticannotation_location(this.__wbg_ptr);
        return ret === 0 ? undefined : Location.__wrap(ret);
    }
    /**
     * @returns {string | undefined}
     */
    get message() {
        const ret = wasm.__wbg_get_diagnosticannotation_message(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * @returns {boolean}
     */
    get primary() {
        const ret = wasm.__wbg_get_diagnosticannotation_primary(this.__wbg_ptr);
        return ret !== 0;
    }
    /**
     * @param {Location | null} [arg0]
     */
    set location(arg0) {
        let ptr0 = 0;
        if (!isLikeNone(arg0)) {
            _assertClass(arg0, Location);
            ptr0 = arg0.__destroy_into_raw();
        }
        wasm.__wbg_set_diagnosticannotation_location(this.__wbg_ptr, ptr0);
    }
    /**
     * @param {string | null} [arg0]
     */
    set message(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_diagnosticannotation_message(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {boolean} arg0
     */
    set primary(arg0) {
        wasm.__wbg_set_diagnosticannotation_primary(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) DiagnosticAnnotation.prototype[Symbol.dispose] = DiagnosticAnnotation.prototype.free;

/**
 * @enum {0 | 1}
 */
export const DiagnosticTag = Object.freeze({
    Unnecessary: 0, "0": "Unnecessary",
    Deprecated: 1, "1": "Deprecated",
});

export class DocumentHighlight {
    static __wrap(ptr) {
        const obj = Object.create(DocumentHighlight.prototype);
        obj.__wbg_ptr = ptr;
        DocumentHighlightFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        DocumentHighlightFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_documenthighlight_free(ptr, 0);
    }
    /**
     * @returns {DocumentHighlightKind}
     */
    get kind() {
        const ret = wasm.__wbg_get_documenthighlight_kind(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {Range}
     */
    get range() {
        const ret = wasm.__wbg_get_documenthighlight_range(this.__wbg_ptr);
        return Range.__wrap(ret);
    }
}
if (Symbol.dispose) DocumentHighlight.prototype[Symbol.dispose] = DocumentHighlight.prototype.free;

/**
 * @enum {1 | 2 | 3}
 */
export const DocumentHighlightKind = Object.freeze({
    Text: 1, "1": "Text",
    Read: 2, "2": "Read",
    Write: 3, "3": "Write",
});

export class FileHandle {
    static __wrap(ptr) {
        const obj = Object.create(FileHandle.prototype);
        obj.__wbg_ptr = ptr;
        FileHandleFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    toJSON() {
        return {
        };
    }
    toString() {
        return JSON.stringify(this);
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        FileHandleFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_filehandle_free(ptr, 0);
    }
    /**
     * @returns {string}
     */
    path() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.filehandle_path(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string}
     */
    toString() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.filehandle_toString(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
}
if (Symbol.dispose) FileHandle.prototype[Symbol.dispose] = FileHandle.prototype.free;

export class Hint {
    static __wrap(ptr) {
        const obj = Object.create(Hint.prototype);
        obj.__wbg_ptr = ptr;
        HintFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        HintFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_hint_free(ptr, 0);
    }
    /**
     * @returns {string}
     */
    get message() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_hint_message(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {Range}
     */
    get range() {
        const ret = wasm.__wbg_get_hint_range(this.__wbg_ptr);
        return Range.__wrap(ret);
    }
    /**
     * @param {string} arg0
     */
    set message(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_hint_message(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {Range} arg0
     */
    set range(arg0) {
        _assertClass(arg0, Range);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_hint_range(this.__wbg_ptr, ptr0);
    }
}
if (Symbol.dispose) Hint.prototype[Symbol.dispose] = Hint.prototype.free;

export class Hover {
    static __wrap(ptr) {
        const obj = Object.create(Hover.prototype);
        obj.__wbg_ptr = ptr;
        HoverFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        HoverFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_hover_free(ptr, 0);
    }
    /**
     * @returns {string}
     */
    get markdown() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_hover_markdown(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {Range}
     */
    get range() {
        const ret = wasm.__wbg_get_hover_range(this.__wbg_ptr);
        return Range.__wrap(ret);
    }
    /**
     * @param {string} arg0
     */
    set markdown(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_hover_markdown(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {Range} arg0
     */
    set range(arg0) {
        _assertClass(arg0, Range);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_hover_range(this.__wbg_ptr, ptr0);
    }
}
if (Symbol.dispose) Hover.prototype[Symbol.dispose] = Hover.prototype.free;

export class InlayHint {
    static __wrap(ptr) {
        const obj = Object.create(InlayHint.prototype);
        obj.__wbg_ptr = ptr;
        InlayHintFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        InlayHintFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_inlayhint_free(ptr, 0);
    }
    /**
     * @returns {InlayHintKind}
     */
    get kind() {
        const ret = wasm.__wbg_get_inlayhint_kind(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {InlayHintLabelPart[]}
     */
    get label() {
        const ret = wasm.__wbg_get_inlayhint_label(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {Position}
     */
    get position() {
        const ret = wasm.__wbg_get_inlayhint_position(this.__wbg_ptr);
        return Position.__wrap(ret);
    }
    /**
     * @returns {TextEdit[]}
     */
    get text_edits() {
        const ret = wasm.__wbg_get_inlayhint_text_edits(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @param {InlayHintKind} arg0
     */
    set kind(arg0) {
        wasm.__wbg_set_inlayhint_kind(this.__wbg_ptr, arg0);
    }
    /**
     * @param {InlayHintLabelPart[]} arg0
     */
    set label(arg0) {
        const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_inlayhint_label(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {Position} arg0
     */
    set position(arg0) {
        _assertClass(arg0, Position);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_inlayhint_position(this.__wbg_ptr, ptr0);
    }
    /**
     * @param {TextEdit[]} arg0
     */
    set text_edits(arg0) {
        const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_inlayhint_text_edits(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) InlayHint.prototype[Symbol.dispose] = InlayHint.prototype.free;

/**
 * @enum {0 | 1}
 */
export const InlayHintKind = Object.freeze({
    Type: 0, "0": "Type",
    Parameter: 1, "1": "Parameter",
});

export class InlayHintLabelPart {
    static __wrap(ptr) {
        const obj = Object.create(InlayHintLabelPart.prototype);
        obj.__wbg_ptr = ptr;
        InlayHintLabelPartFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    static __unwrap(jsValue) {
        if (!(jsValue instanceof InlayHintLabelPart)) {
            return 0;
        }
        return jsValue.__destroy_into_raw();
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        InlayHintLabelPartFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_inlayhintlabelpart_free(ptr, 0);
    }
    /**
     * @returns {string}
     */
    get label() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_inlayhintlabelpart_label(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {LocationLink | undefined}
     */
    get location() {
        const ret = wasm.__wbg_get_inlayhintlabelpart_location(this.__wbg_ptr);
        return ret === 0 ? undefined : LocationLink.__wrap(ret);
    }
    /**
     * @param {string} arg0
     */
    set label(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_inlayhintlabelpart_label(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {LocationLink | null} [arg0]
     */
    set location(arg0) {
        let ptr0 = 0;
        if (!isLikeNone(arg0)) {
            _assertClass(arg0, LocationLink);
            ptr0 = arg0.__destroy_into_raw();
        }
        wasm.__wbg_set_inlayhintlabelpart_location(this.__wbg_ptr, ptr0);
    }
}
if (Symbol.dispose) InlayHintLabelPart.prototype[Symbol.dispose] = InlayHintLabelPart.prototype.free;

export class Location {
    static __wrap(ptr) {
        const obj = Object.create(Location.prototype);
        obj.__wbg_ptr = ptr;
        LocationFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        LocationFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_location_free(ptr, 0);
    }
    /**
     * @returns {string}
     */
    get path() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_location_path(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {Range}
     */
    get range() {
        const ret = wasm.__wbg_get_location_range(this.__wbg_ptr);
        return Range.__wrap(ret);
    }
    /**
     * @param {string} arg0
     */
    set path(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_location_path(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {Range} arg0
     */
    set range(arg0) {
        _assertClass(arg0, Range);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_location_range(this.__wbg_ptr, ptr0);
    }
}
if (Symbol.dispose) Location.prototype[Symbol.dispose] = Location.prototype.free;

export class LocationLink {
    static __wrap(ptr) {
        const obj = Object.create(LocationLink.prototype);
        obj.__wbg_ptr = ptr;
        LocationLinkFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        LocationLinkFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_locationlink_free(ptr, 0);
    }
    /**
     * The full range of the target
     * @returns {Range}
     */
    get full_range() {
        const ret = wasm.__wbg_get_locationlink_full_range(this.__wbg_ptr);
        return Range.__wrap(ret);
    }
    /**
     * The range of the origin.
     * @returns {Range | undefined}
     */
    get origin_selection_range() {
        const ret = wasm.__wbg_get_locationlink_origin_selection_range(this.__wbg_ptr);
        return ret === 0 ? undefined : Range.__wrap(ret);
    }
    /**
     * The target file path
     * @returns {string}
     */
    get path() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_locationlink_path(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * The target's range that should be selected/highlighted
     * @returns {Range | undefined}
     */
    get selection_range() {
        const ret = wasm.__wbg_get_locationlink_selection_range(this.__wbg_ptr);
        return ret === 0 ? undefined : Range.__wrap(ret);
    }
    /**
     * The full range of the target
     * @param {Range} arg0
     */
    set full_range(arg0) {
        _assertClass(arg0, Range);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_locationlink_full_range(this.__wbg_ptr, ptr0);
    }
    /**
     * The range of the origin.
     * @param {Range | null} [arg0]
     */
    set origin_selection_range(arg0) {
        let ptr0 = 0;
        if (!isLikeNone(arg0)) {
            _assertClass(arg0, Range);
            ptr0 = arg0.__destroy_into_raw();
        }
        wasm.__wbg_set_locationlink_origin_selection_range(this.__wbg_ptr, ptr0);
    }
    /**
     * The target file path
     * @param {string} arg0
     */
    set path(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_locationlink_path(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * The target's range that should be selected/highlighted
     * @param {Range | null} [arg0]
     */
    set selection_range(arg0) {
        let ptr0 = 0;
        if (!isLikeNone(arg0)) {
            _assertClass(arg0, Range);
            ptr0 = arg0.__destroy_into_raw();
        }
        wasm.__wbg_set_locationlink_selection_range(this.__wbg_ptr, ptr0);
    }
}
if (Symbol.dispose) LocationLink.prototype[Symbol.dispose] = LocationLink.prototype.free;

/**
 * @enum {0 | 1 | 2 | 3 | 4}
 */
export const LogLevel = Object.freeze({
    Trace: 0, "0": "Trace",
    Debug: 1, "1": "Debug",
    Info: 2, "2": "Info",
    Warn: 3, "3": "Warn",
    Error: 4, "4": "Error",
});

export class ParameterInformation {
    static __wrap(ptr) {
        const obj = Object.create(ParameterInformation.prototype);
        obj.__wbg_ptr = ptr;
        ParameterInformationFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    static __unwrap(jsValue) {
        if (!(jsValue instanceof ParameterInformation)) {
            return 0;
        }
        return jsValue.__destroy_into_raw();
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        ParameterInformationFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_parameterinformation_free(ptr, 0);
    }
    /**
     * @returns {string | undefined}
     */
    get documentation() {
        const ret = wasm.__wbg_get_parameterinformation_documentation(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * @returns {string}
     */
    get label() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_parameterinformation_label(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @param {string | null} [arg0]
     */
    set documentation(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_parameterinformation_documentation(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string} arg0
     */
    set label(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_parameterinformation_label(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) ParameterInformation.prototype[Symbol.dispose] = ParameterInformation.prototype.free;

export class Position {
    static __wrap(ptr) {
        const obj = Object.create(Position.prototype);
        obj.__wbg_ptr = ptr;
        PositionFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        PositionFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_position_free(ptr, 0);
    }
    /**
     * One indexed column number (the nth character on the line)
     * @returns {number}
     */
    get column() {
        const ret = wasm.__wbg_get_position_column(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * One indexed line number
     * @returns {number}
     */
    get line() {
        const ret = wasm.__wbg_get_position_line(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {number} line
     * @param {number} column
     */
    constructor(line, column) {
        const ret = wasm.position_new(line, column);
        this.__wbg_ptr = ret;
        PositionFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * One indexed column number (the nth character on the line)
     * @param {number} arg0
     */
    set column(arg0) {
        wasm.__wbg_set_position_column(this.__wbg_ptr, arg0);
    }
    /**
     * One indexed line number
     * @param {number} arg0
     */
    set line(arg0) {
        wasm.__wbg_set_position_line(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) Position.prototype[Symbol.dispose] = Position.prototype.free;

/**
 * @enum {0 | 1 | 2}
 */
export const PositionEncoding = Object.freeze({
    Utf8: 0, "0": "Utf8",
    Utf16: 1, "1": "Utf16",
    Utf32: 2, "2": "Utf32",
});

export class Range {
    static __wrap(ptr) {
        const obj = Object.create(Range.prototype);
        obj.__wbg_ptr = ptr;
        RangeFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RangeFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_range_free(ptr, 0);
    }
    /**
     * @returns {Position}
     */
    get end() {
        const ret = wasm.__wbg_get_range_end(this.__wbg_ptr);
        return Position.__wrap(ret);
    }
    /**
     * @returns {Position}
     */
    get start() {
        const ret = wasm.__wbg_get_range_start(this.__wbg_ptr);
        return Position.__wrap(ret);
    }
    /**
     * @param {Position} start
     * @param {Position} end
     */
    constructor(start, end) {
        _assertClass(start, Position);
        var ptr0 = start.__destroy_into_raw();
        _assertClass(end, Position);
        var ptr1 = end.__destroy_into_raw();
        const ret = wasm.range_new(ptr0, ptr1);
        this.__wbg_ptr = ret;
        RangeFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {Position} arg0
     */
    set end(arg0) {
        _assertClass(arg0, Position);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_range_end(this.__wbg_ptr, ptr0);
    }
    /**
     * @param {Position} arg0
     */
    set start(arg0) {
        _assertClass(arg0, Position);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_range_start(this.__wbg_ptr, ptr0);
    }
}
if (Symbol.dispose) Range.prototype[Symbol.dispose] = Range.prototype.free;

export class RenameEdit {
    static __wrap(ptr) {
        const obj = Object.create(RenameEdit.prototype);
        obj.__wbg_ptr = ptr;
        RenameEditFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        RenameEditFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_renameedit_free(ptr, 0);
    }
    /**
     * @returns {string}
     */
    get new_text() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_renameedit_new_text(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {string}
     */
    get path() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_renameedit_path(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {Range}
     */
    get range() {
        const ret = wasm.__wbg_get_renameedit_range(this.__wbg_ptr);
        return Range.__wrap(ret);
    }
    /**
     * @param {string} arg0
     */
    set new_text(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_renameedit_new_text(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string} arg0
     */
    set path(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_renameedit_path(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {Range} arg0
     */
    set range(arg0) {
        _assertClass(arg0, Range);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_renameedit_range(this.__wbg_ptr, ptr0);
    }
}
if (Symbol.dispose) RenameEdit.prototype[Symbol.dispose] = RenameEdit.prototype.free;

export class SemanticToken {
    static __wrap(ptr) {
        const obj = Object.create(SemanticToken.prototype);
        obj.__wbg_ptr = ptr;
        SemanticTokenFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        SemanticTokenFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_semantictoken_free(ptr, 0);
    }
    /**
     * @returns {SemanticTokenKind}
     */
    get kind() {
        const ret = wasm.__wbg_get_semantictoken_kind(this.__wbg_ptr);
        return ret;
    }
    /**
     * @returns {number}
     */
    get modifiers() {
        const ret = wasm.__wbg_get_semantictoken_modifiers(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {Range}
     */
    get range() {
        const ret = wasm.__wbg_get_semantictoken_range(this.__wbg_ptr);
        return Range.__wrap(ret);
    }
    /**
     * @returns {string[]}
     */
    static kinds() {
        const ret = wasm.semantictoken_kinds();
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {string[]}
     */
    static modifiers() {
        const ret = wasm.semantictoken_modifiers();
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @param {SemanticTokenKind} arg0
     */
    set kind(arg0) {
        wasm.__wbg_set_semantictoken_kind(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set modifiers(arg0) {
        wasm.__wbg_set_semantictoken_modifiers(this.__wbg_ptr, arg0);
    }
    /**
     * @param {Range} arg0
     */
    set range(arg0) {
        _assertClass(arg0, Range);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_semantictoken_range(this.__wbg_ptr, ptr0);
    }
}
if (Symbol.dispose) SemanticToken.prototype[Symbol.dispose] = SemanticToken.prototype.free;

/**
 * @enum {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14}
 */
export const SemanticTokenKind = Object.freeze({
    Namespace: 0, "0": "Namespace",
    Class: 1, "1": "Class",
    Parameter: 2, "2": "Parameter",
    SelfParameter: 3, "3": "SelfParameter",
    ClsParameter: 4, "4": "ClsParameter",
    Variable: 5, "5": "Variable",
    Property: 6, "6": "Property",
    Function: 7, "7": "Function",
    Method: 8, "8": "Method",
    Keyword: 9, "9": "Keyword",
    String: 10, "10": "String",
    Number: 11, "11": "Number",
    Decorator: 12, "12": "Decorator",
    BuiltinConstant: 13, "13": "BuiltinConstant",
    TypeParameter: 14, "14": "TypeParameter",
});

/**
 * @enum {0 | 1 | 2 | 3}
 */
export const Severity = Object.freeze({
    Info: 0, "0": "Info",
    Warning: 1, "1": "Warning",
    Error: 2, "2": "Error",
    Fatal: 3, "3": "Fatal",
});

export class SignatureHelp {
    static __wrap(ptr) {
        const obj = Object.create(SignatureHelp.prototype);
        obj.__wbg_ptr = ptr;
        SignatureHelpFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        SignatureHelpFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_signaturehelp_free(ptr, 0);
    }
    /**
     * @returns {number | undefined}
     */
    get active_signature() {
        const ret = wasm.__wbg_get_signaturehelp_active_signature(this.__wbg_ptr);
        return ret === Number.MAX_SAFE_INTEGER ? undefined : ret;
    }
    /**
     * @returns {SignatureInformation[]}
     */
    get signatures() {
        const ret = wasm.__wbg_get_signaturehelp_signatures(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @param {number | null} [arg0]
     */
    set active_signature(arg0) {
        wasm.__wbg_set_signaturehelp_active_signature(this.__wbg_ptr, isLikeNone(arg0) ? Number.MAX_SAFE_INTEGER : (arg0) >>> 0);
    }
    /**
     * @param {SignatureInformation[]} arg0
     */
    set signatures(arg0) {
        const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_signaturehelp_signatures(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) SignatureHelp.prototype[Symbol.dispose] = SignatureHelp.prototype.free;

export class SignatureInformation {
    static __wrap(ptr) {
        const obj = Object.create(SignatureInformation.prototype);
        obj.__wbg_ptr = ptr;
        SignatureInformationFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    static __unwrap(jsValue) {
        if (!(jsValue instanceof SignatureInformation)) {
            return 0;
        }
        return jsValue.__destroy_into_raw();
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        SignatureInformationFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_signatureinformation_free(ptr, 0);
    }
    /**
     * @returns {number | undefined}
     */
    get active_parameter() {
        const ret = wasm.__wbg_get_signatureinformation_active_parameter(this.__wbg_ptr);
        return ret === Number.MAX_SAFE_INTEGER ? undefined : ret;
    }
    /**
     * @returns {string | undefined}
     */
    get documentation() {
        const ret = wasm.__wbg_get_signatureinformation_documentation(this.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * @returns {string}
     */
    get label() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_signatureinformation_label(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {ParameterInformation[]}
     */
    get parameters() {
        const ret = wasm.__wbg_get_signatureinformation_parameters(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @param {number | null} [arg0]
     */
    set active_parameter(arg0) {
        wasm.__wbg_set_signatureinformation_active_parameter(this.__wbg_ptr, isLikeNone(arg0) ? Number.MAX_SAFE_INTEGER : (arg0) >>> 0);
    }
    /**
     * @param {string | null} [arg0]
     */
    set documentation(arg0) {
        var ptr0 = isLikeNone(arg0) ? 0 : passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_signatureinformation_documentation(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string} arg0
     */
    set label(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_signatureinformation_label(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {ParameterInformation[]} arg0
     */
    set parameters(arg0) {
        const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_signatureinformation_parameters(this.__wbg_ptr, ptr0, len0);
    }
}
if (Symbol.dispose) SignatureInformation.prototype[Symbol.dispose] = SignatureInformation.prototype.free;

export class SubDiagnostic {
    static __wrap(ptr) {
        const obj = Object.create(SubDiagnostic.prototype);
        obj.__wbg_ptr = ptr;
        SubDiagnosticFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        SubDiagnosticFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_subdiagnostic_free(ptr, 0);
    }
    /**
     * @returns {DiagnosticAnnotation[]}
     */
    get annotations() {
        const ret = wasm.__wbg_get_subdiagnostic_annotations(this.__wbg_ptr);
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @returns {string}
     */
    get message() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_subdiagnostic_message(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {SubDiagnosticSeverity}
     */
    get severity() {
        const ret = wasm.__wbg_get_subdiagnostic_severity(this.__wbg_ptr);
        return ret;
    }
    /**
     * @param {DiagnosticAnnotation[]} arg0
     */
    set annotations(arg0) {
        const ptr0 = passArrayJsValueToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_subdiagnostic_annotations(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {string} arg0
     */
    set message(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_subdiagnostic_message(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {SubDiagnosticSeverity} arg0
     */
    set severity(arg0) {
        wasm.__wbg_set_subdiagnostic_severity(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) SubDiagnostic.prototype[Symbol.dispose] = SubDiagnostic.prototype.free;

/**
 * @enum {0 | 1 | 2 | 3 | 4}
 */
export const SubDiagnosticSeverity = Object.freeze({
    Help: 0, "0": "Help",
    Info: 1, "1": "Info",
    Warning: 2, "2": "Warning",
    Error: 3, "3": "Error",
    Fatal: 4, "4": "Fatal",
});

export class TextEdit {
    static __wrap(ptr) {
        const obj = Object.create(TextEdit.prototype);
        obj.__wbg_ptr = ptr;
        TextEditFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    static __unwrap(jsValue) {
        if (!(jsValue instanceof TextEdit)) {
            return 0;
        }
        return jsValue.__destroy_into_raw();
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        TextEditFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_textedit_free(ptr, 0);
    }
    /**
     * @returns {string}
     */
    get new_text() {
        let deferred1_0;
        let deferred1_1;
        try {
            const ret = wasm.__wbg_get_textedit_new_text(this.__wbg_ptr);
            deferred1_0 = ret[0];
            deferred1_1 = ret[1];
            return getStringFromWasm0(ret[0], ret[1]);
        } finally {
            wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
        }
    }
    /**
     * @returns {Range}
     */
    get range() {
        const ret = wasm.__wbg_get_textedit_range(this.__wbg_ptr);
        return Range.__wrap(ret);
    }
    /**
     * @param {string} arg0
     */
    set new_text(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_textedit_new_text(this.__wbg_ptr, ptr0, len0);
    }
    /**
     * @param {Range} arg0
     */
    set range(arg0) {
        _assertClass(arg0, Range);
        var ptr0 = arg0.__destroy_into_raw();
        wasm.__wbg_set_textedit_range(this.__wbg_ptr, ptr0);
    }
}
if (Symbol.dispose) TextEdit.prototype[Symbol.dispose] = TextEdit.prototype.free;

export class TextRange {
    static __wrap(ptr) {
        const obj = Object.create(TextRange.prototype);
        obj.__wbg_ptr = ptr;
        TextRangeFinalization.register(obj, obj.__wbg_ptr, obj);
        return obj;
    }
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        TextRangeFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_textrange_free(ptr, 0);
    }
    /**
     * @returns {number}
     */
    get end() {
        const ret = wasm.__wbg_get_textrange_end(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    get start() {
        const ret = wasm.__wbg_get_textrange_start(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @param {number} arg0
     */
    set end(arg0) {
        wasm.__wbg_set_textrange_end(this.__wbg_ptr, arg0);
    }
    /**
     * @param {number} arg0
     */
    set start(arg0) {
        wasm.__wbg_set_textrange_start(this.__wbg_ptr, arg0);
    }
}
if (Symbol.dispose) TextRange.prototype[Symbol.dispose] = TextRange.prototype.free;

export class Workspace {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        WorkspaceFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_workspace_free(ptr, 0);
    }
    /**
     * Checks all open files
     * @returns {Diagnostic[]}
     */
    check() {
        const ret = wasm.workspace_check(this.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * Checks a single file.
     * @param {FileHandle} file_id
     * @returns {Diagnostic[]}
     */
    checkFile(file_id) {
        _assertClass(file_id, FileHandle);
        const ret = wasm.workspace_checkFile(this.__wbg_ptr, file_id.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @param {FileHandle} file_id
     */
    closeFile(file_id) {
        _assertClass(file_id, FileHandle);
        var ptr0 = file_id.__destroy_into_raw();
        const ret = wasm.workspace_closeFile(this.__wbg_ptr, ptr0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {FileHandle} file_id
     * @param {Diagnostic} diagnostic
     * @returns {CodeAction[] | undefined}
     */
    codeActions(file_id, diagnostic) {
        _assertClass(file_id, FileHandle);
        _assertClass(diagnostic, Diagnostic);
        const ret = wasm.workspace_codeActions(this.__wbg_ptr, file_id.__wbg_ptr, diagnostic.__wbg_ptr);
        let v1;
        if (ret[0] !== 0) {
            v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        }
        return v1;
    }
    /**
     * @param {FileHandle} file_id
     * @param {Position} position
     * @returns {Completion[]}
     */
    completions(file_id, position) {
        _assertClass(file_id, FileHandle);
        _assertClass(position, Position);
        var ptr0 = position.__destroy_into_raw();
        const ret = wasm.workspace_completions(this.__wbg_ptr, file_id.__wbg_ptr, ptr0);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v2 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v2;
    }
    /**
     * @param {FileHandle} file_id
     * @param {Position} position
     * @returns {DocumentHighlight[]}
     */
    documentHighlights(file_id, position) {
        _assertClass(file_id, FileHandle);
        _assertClass(position, Position);
        var ptr0 = position.__destroy_into_raw();
        const ret = wasm.workspace_documentHighlights(this.__wbg_ptr, file_id.__wbg_ptr, ptr0);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v2 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v2;
    }
    /**
     * @param {FileHandle} file_id
     * @returns {string | undefined}
     */
    format(file_id) {
        _assertClass(file_id, FileHandle);
        const ret = wasm.workspace_format(this.__wbg_ptr, file_id.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        let v1;
        if (ret[0] !== 0) {
            v1 = getStringFromWasm0(ret[0], ret[1]).slice();
            wasm.__wbindgen_free(ret[0], ret[1] * 1, 1);
        }
        return v1;
    }
    /**
     * Gets a file handle for a vendored file by its path.
     * This allows vendored files to participate in LSP features like hover, completions, etc.
     * @param {string} path
     * @returns {FileHandle}
     */
    getVendoredFile(path) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.workspace_getVendoredFile(this.__wbg_ptr, ptr0, len0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FileHandle.__wrap(ret[0]);
    }
    /**
     * @param {FileHandle} file_id
     * @param {Position} position
     * @returns {LocationLink[]}
     */
    gotoDeclaration(file_id, position) {
        _assertClass(file_id, FileHandle);
        _assertClass(position, Position);
        var ptr0 = position.__destroy_into_raw();
        const ret = wasm.workspace_gotoDeclaration(this.__wbg_ptr, file_id.__wbg_ptr, ptr0);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v2 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v2;
    }
    /**
     * @param {FileHandle} file_id
     * @param {Position} position
     * @returns {LocationLink[]}
     */
    gotoDefinition(file_id, position) {
        _assertClass(file_id, FileHandle);
        _assertClass(position, Position);
        var ptr0 = position.__destroy_into_raw();
        const ret = wasm.workspace_gotoDefinition(this.__wbg_ptr, file_id.__wbg_ptr, ptr0);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v2 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v2;
    }
    /**
     * @param {FileHandle} file_id
     * @param {Position} position
     * @returns {LocationLink[]}
     */
    gotoReferences(file_id, position) {
        _assertClass(file_id, FileHandle);
        _assertClass(position, Position);
        var ptr0 = position.__destroy_into_raw();
        const ret = wasm.workspace_gotoReferences(this.__wbg_ptr, file_id.__wbg_ptr, ptr0);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v2 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v2;
    }
    /**
     * @param {FileHandle} file_id
     * @param {Position} position
     * @returns {LocationLink[]}
     */
    gotoTypeDefinition(file_id, position) {
        _assertClass(file_id, FileHandle);
        _assertClass(position, Position);
        var ptr0 = position.__destroy_into_raw();
        const ret = wasm.workspace_gotoTypeDefinition(this.__wbg_ptr, file_id.__wbg_ptr, ptr0);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v2 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v2;
    }
    /**
     * @param {FileHandle} file_id
     * @returns {Hint[]}
     */
    hints(file_id) {
        _assertClass(file_id, FileHandle);
        const ret = wasm.workspace_hints(this.__wbg_ptr, file_id.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @param {FileHandle} file_id
     * @param {Position} position
     * @returns {Hover | undefined}
     */
    hover(file_id, position) {
        _assertClass(file_id, FileHandle);
        _assertClass(position, Position);
        var ptr0 = position.__destroy_into_raw();
        const ret = wasm.workspace_hover(this.__wbg_ptr, file_id.__wbg_ptr, ptr0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ret[0] === 0 ? undefined : Hover.__wrap(ret[0]);
    }
    /**
     * @param {FileHandle} file_id
     * @param {Range} range
     * @returns {InlayHint[]}
     */
    inlayHints(file_id, range) {
        _assertClass(file_id, FileHandle);
        _assertClass(range, Range);
        var ptr0 = range.__destroy_into_raw();
        const ret = wasm.workspace_inlayHints(this.__wbg_ptr, file_id.__wbg_ptr, ptr0);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v2 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v2;
    }
    /**
     * @param {string} root
     * @param {PositionEncoding} position_encoding
     * @param {any} options
     */
    constructor(root, position_encoding, options) {
        const ptr0 = passStringToWasm0(root, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.workspace_new(ptr0, len0, position_encoding, options);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        this.__wbg_ptr = ret[0];
        WorkspaceFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * @param {string} path
     * @param {string} contents
     * @returns {FileHandle}
     */
    openFile(path, contents) {
        const ptr0 = passStringToWasm0(path, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ptr1 = passStringToWasm0(contents, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.workspace_openFile(this.__wbg_ptr, ptr0, len0, ptr1, len1);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return FileHandle.__wrap(ret[0]);
    }
    /**
     * Returns the parsed AST for `path`
     * @param {FileHandle} file_id
     * @returns {string}
     */
    parsed(file_id) {
        let deferred2_0;
        let deferred2_1;
        try {
            _assertClass(file_id, FileHandle);
            const ret = wasm.workspace_parsed(this.__wbg_ptr, file_id.__wbg_ptr);
            var ptr1 = ret[0];
            var len1 = ret[1];
            if (ret[3]) {
                ptr1 = 0; len1 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred2_0 = ptr1;
            deferred2_1 = len1;
            return getStringFromWasm0(ptr1, len1);
        } finally {
            wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
    }
    /**
     * @param {FileHandle} file_id
     * @param {Position} position
     * @returns {Range | undefined}
     */
    prepareRename(file_id, position) {
        _assertClass(file_id, FileHandle);
        _assertClass(position, Position);
        var ptr0 = position.__destroy_into_raw();
        const ret = wasm.workspace_prepareRename(this.__wbg_ptr, file_id.__wbg_ptr, ptr0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ret[0] === 0 ? undefined : Range.__wrap(ret[0]);
    }
    /**
     * @param {FileHandle} file_id
     * @param {Position} position
     * @param {string} new_name
     * @returns {RenameEdit[]}
     */
    rename(file_id, position, new_name) {
        _assertClass(file_id, FileHandle);
        _assertClass(position, Position);
        var ptr0 = position.__destroy_into_raw();
        const ptr1 = passStringToWasm0(new_name, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        const ret = wasm.workspace_rename(this.__wbg_ptr, file_id.__wbg_ptr, ptr0, ptr1, len1);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v3 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v3;
    }
    /**
     * @param {FileHandle} file_id
     * @returns {SemanticToken[]}
     */
    semanticTokens(file_id) {
        _assertClass(file_id, FileHandle);
        const ret = wasm.workspace_semanticTokens(this.__wbg_ptr, file_id.__wbg_ptr);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v1 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v1;
    }
    /**
     * @param {FileHandle} file_id
     * @param {Range} range
     * @returns {SemanticToken[]}
     */
    semanticTokensInRange(file_id, range) {
        _assertClass(file_id, FileHandle);
        _assertClass(range, Range);
        var ptr0 = range.__destroy_into_raw();
        const ret = wasm.workspace_semanticTokensInRange(this.__wbg_ptr, file_id.__wbg_ptr, ptr0);
        if (ret[3]) {
            throw takeFromExternrefTable0(ret[2]);
        }
        var v2 = getArrayJsValueFromWasm0(ret[0], ret[1]).slice();
        wasm.__wbindgen_free(ret[0], ret[1] * 4, 4);
        return v2;
    }
    /**
     * @param {FileHandle} file_id
     * @param {Position} position
     * @returns {SignatureHelp | undefined}
     */
    signatureHelp(file_id, position) {
        _assertClass(file_id, FileHandle);
        _assertClass(position, Position);
        var ptr0 = position.__destroy_into_raw();
        const ret = wasm.workspace_signatureHelp(this.__wbg_ptr, file_id.__wbg_ptr, ptr0);
        if (ret[2]) {
            throw takeFromExternrefTable0(ret[1]);
        }
        return ret[0] === 0 ? undefined : SignatureHelp.__wrap(ret[0]);
    }
    /**
     * @param {FileHandle} file_id
     * @returns {string}
     */
    sourceText(file_id) {
        let deferred2_0;
        let deferred2_1;
        try {
            _assertClass(file_id, FileHandle);
            const ret = wasm.workspace_sourceText(this.__wbg_ptr, file_id.__wbg_ptr);
            var ptr1 = ret[0];
            var len1 = ret[1];
            if (ret[3]) {
                ptr1 = 0; len1 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred2_0 = ptr1;
            deferred2_1 = len1;
            return getStringFromWasm0(ptr1, len1);
        } finally {
            wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
    }
    /**
     * Returns the token stream for `path` serialized as a string.
     * @param {FileHandle} file_id
     * @returns {string}
     */
    tokens(file_id) {
        let deferred2_0;
        let deferred2_1;
        try {
            _assertClass(file_id, FileHandle);
            const ret = wasm.workspace_tokens(this.__wbg_ptr, file_id.__wbg_ptr);
            var ptr1 = ret[0];
            var len1 = ret[1];
            if (ret[3]) {
                ptr1 = 0; len1 = 0;
                throw takeFromExternrefTable0(ret[2]);
            }
            deferred2_0 = ptr1;
            deferred2_1 = len1;
            return getStringFromWasm0(ptr1, len1);
        } finally {
            wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
        }
    }
    /**
     * @param {FileHandle} file_id
     * @param {string} contents
     */
    updateFile(file_id, contents) {
        _assertClass(file_id, FileHandle);
        const ptr0 = passStringToWasm0(contents, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.workspace_updateFile(this.__wbg_ptr, file_id.__wbg_ptr, ptr0, len0);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
    /**
     * @param {any} options
     */
    updateOptions(options) {
        const ret = wasm.workspace_updateOptions(this.__wbg_ptr, options);
        if (ret[1]) {
            throw takeFromExternrefTable0(ret[0]);
        }
    }
}
if (Symbol.dispose) Workspace.prototype[Symbol.dispose] = Workspace.prototype.free;

/**
 * Initializes the logger with the given log level.
 *
 * ## Panics
 * If this function is called more than once.
 * @param {LogLevel} level
 */
export function initLogging(level) {
    wasm.initLogging(level);
}

export function run() {
    wasm.run();
}

/**
 * @returns {string}
 */
export function version() {
    let deferred1_0;
    let deferred1_1;
    try {
        const ret = wasm.version();
        deferred1_0 = ret[0];
        deferred1_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
}
function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg_Error_9dc85fe1bc224456: function(arg0, arg1) {
            const ret = Error(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_Number_4779d427bae39753: function(arg0) {
            const ret = Number(arg0);
            return ret;
        },
        __wbg_String_8564e559799eccda: function(arg0, arg1) {
            const ret = String(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_bigint_get_as_i64_8ea6736501f396b6: function(arg0, arg1) {
            const v = arg1;
            const ret = typeof(v) === 'bigint' ? v : undefined;
            getDataViewMemory0().setBigInt64(arg0 + 8 * 1, isLikeNone(ret) ? BigInt(0) : ret, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
        },
        __wbg___wbindgen_boolean_get_b131b2f36d6b2f55: function(arg0) {
            const v = arg0;
            const ret = typeof(v) === 'boolean' ? v : undefined;
            return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
        },
        __wbg___wbindgen_debug_string_56c147eb1a51f0c4: function(arg0, arg1) {
            const ret = debugString(arg1);
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_in_ce8569b2fc6f5088: function(arg0, arg1) {
            const ret = arg0 in arg1;
            return ret;
        },
        __wbg___wbindgen_is_bigint_df272c65456269c2: function(arg0) {
            const ret = typeof(arg0) === 'bigint';
            return ret;
        },
        __wbg___wbindgen_is_function_147961669f068cd4: function(arg0) {
            const ret = typeof(arg0) === 'function';
            return ret;
        },
        __wbg___wbindgen_is_object_3a2c414391dbf751: function(arg0) {
            const val = arg0;
            const ret = typeof(val) === 'object' && val !== null;
            return ret;
        },
        __wbg___wbindgen_is_string_6541b0f6ecd4e8e5: function(arg0) {
            const ret = typeof(arg0) === 'string';
            return ret;
        },
        __wbg___wbindgen_is_undefined_4410e3c20a99fa97: function(arg0) {
            const ret = arg0 === undefined;
            return ret;
        },
        __wbg___wbindgen_jsval_eq_174c93ec61bab0c5: function(arg0, arg1) {
            const ret = arg0 === arg1;
            return ret;
        },
        __wbg___wbindgen_jsval_loose_eq_e07e3b1f5db6da6c: function(arg0, arg1) {
            const ret = arg0 == arg1;
            return ret;
        },
        __wbg___wbindgen_number_get_588ed6b97f0d7e14: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'number' ? obj : undefined;
            getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
        },
        __wbg___wbindgen_string_get_fa2687d531ed17a5: function(arg0, arg1) {
            const obj = arg1;
            const ret = typeof(obj) === 'string' ? obj : undefined;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_throw_bbadd78c1bac3a77: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg_call_91f00ddc43e01490: function() { return handleError(function (arg0, arg1) {
            const ret = arg0.call(arg1);
            return ret;
        }, arguments); },
        __wbg_codeaction_new: function(arg0) {
            const ret = CodeAction.__wrap(arg0);
            return ret;
        },
        __wbg_completion_new: function(arg0) {
            const ret = Completion.__wrap(arg0);
            return ret;
        },
        __wbg_debug_de823612d4d12f74: function(arg0) {
            console.debug(arg0);
        },
        __wbg_diagnostic_new: function(arg0) {
            const ret = Diagnostic.__wrap(arg0);
            return ret;
        },
        __wbg_diagnosticannotation_new: function(arg0) {
            const ret = DiagnosticAnnotation.__wrap(arg0);
            return ret;
        },
        __wbg_diagnosticannotation_unwrap: function(arg0) {
            const ret = DiagnosticAnnotation.__unwrap(arg0);
            return ret;
        },
        __wbg_documenthighlight_new: function(arg0) {
            const ret = DocumentHighlight.__wrap(arg0);
            return ret;
        },
        __wbg_done_6a8439e544ec6206: function(arg0) {
            const ret = arg0.done;
            return ret;
        },
        __wbg_entries_5a6a7e7e0df09fe5: function(arg0) {
            const ret = Object.entries(arg0);
            return ret;
        },
        __wbg_error_6651fee1c71e5da9: function(arg0) {
            console.error(arg0);
        },
        __wbg_error_a6fa202b58aa1cd3: function(arg0, arg1) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.error(getStringFromWasm0(arg0, arg1));
            } finally {
                wasm.__wbindgen_free(deferred0_0, deferred0_1, 1);
            }
        },
        __wbg_get_44e98e27bda25b5b: function() { return handleError(function (arg0, arg1) {
            const ret = Reflect.get(arg0, arg1);
            return ret;
        }, arguments); },
        __wbg_get_4b90d6d8c5deb5d5: function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return ret;
        },
        __wbg_get_unchecked_46e778e3cec74b5e: function(arg0, arg1) {
            const ret = arg0[arg1 >>> 0];
            return ret;
        },
        __wbg_get_with_ref_key_6412cf3094599694: function(arg0, arg1) {
            const ret = arg0[arg1];
            return ret;
        },
        __wbg_hint_new: function(arg0) {
            const ret = Hint.__wrap(arg0);
            return ret;
        },
        __wbg_info_a2b5f8a5dae8b26c: function(arg0) {
            console.info(arg0);
        },
        __wbg_inlayhint_new: function(arg0) {
            const ret = InlayHint.__wrap(arg0);
            return ret;
        },
        __wbg_inlayhintlabelpart_new: function(arg0) {
            const ret = InlayHintLabelPart.__wrap(arg0);
            return ret;
        },
        __wbg_inlayhintlabelpart_unwrap: function(arg0) {
            const ret = InlayHintLabelPart.__unwrap(arg0);
            return ret;
        },
        __wbg_instanceof_ArrayBuffer_a581da923203f29f: function(arg0) {
            let result;
            try {
                result = arg0 instanceof ArrayBuffer;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Map_7f94c740225003e2: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Map;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Uint8Array_b6fe1ac89eba107e: function(arg0) {
            let result;
            try {
                result = arg0 instanceof Uint8Array;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_isArray_139f48e3c057ede8: function(arg0) {
            const ret = Array.isArray(arg0);
            return ret;
        },
        __wbg_isSafeInteger_c22ccb4af2201fe9: function(arg0) {
            const ret = Number.isSafeInteger(arg0);
            return ret;
        },
        __wbg_iterator_9b36cebf3be7b7cd: function() {
            const ret = Symbol.iterator;
            return ret;
        },
        __wbg_length_68a9d5278d084f4f: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_length_fb04d16d7bdf6d4c: function(arg0) {
            const ret = arg0.length;
            return ret;
        },
        __wbg_locationlink_new: function(arg0) {
            const ret = LocationLink.__wrap(arg0);
            return ret;
        },
        __wbg_log_6614a4effdb4e983: function(arg0) {
            console.log(arg0);
        },
        __wbg_new_227d7c05414eb861: function() {
            const ret = new Error();
            return ret;
        },
        __wbg_new_5fae30e6b23db8df: function(arg0, arg1) {
            const ret = new Error(getStringFromWasm0(arg0, arg1));
            return ret;
        },
        __wbg_new_b06772b280cc6e52: function(arg0) {
            const ret = new Uint8Array(arg0);
            return ret;
        },
        __wbg_next_8cb028b6ba50743f: function() { return handleError(function (arg0) {
            const ret = arg0.next();
            return ret;
        }, arguments); },
        __wbg_next_cfd0b146c9538df8: function(arg0) {
            const ret = arg0.next;
            return ret;
        },
        __wbg_now_bce4dc999095ea77: function() {
            const ret = Date.now();
            return ret;
        },
        __wbg_now_e7c6795a7f81e10f: function(arg0) {
            const ret = arg0.now();
            return ret;
        },
        __wbg_parameterinformation_new: function(arg0) {
            const ret = ParameterInformation.__wrap(arg0);
            return ret;
        },
        __wbg_parameterinformation_unwrap: function(arg0) {
            const ret = ParameterInformation.__unwrap(arg0);
            return ret;
        },
        __wbg_performance_3fcf6e32a7e1ed0a: function(arg0) {
            const ret = arg0.performance;
            return ret;
        },
        __wbg_prototypesetcall_956c7493c68e29b4: function(arg0, arg1, arg2) {
            Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
        },
        __wbg_renameedit_new: function(arg0) {
            const ret = RenameEdit.__wrap(arg0);
            return ret;
        },
        __wbg_semantictoken_new: function(arg0) {
            const ret = SemanticToken.__wrap(arg0);
            return ret;
        },
        __wbg_signatureinformation_new: function(arg0) {
            const ret = SignatureInformation.__wrap(arg0);
            return ret;
        },
        __wbg_signatureinformation_unwrap: function(arg0) {
            const ret = SignatureInformation.__unwrap(arg0);
            return ret;
        },
        __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
            const ret = arg1.stack;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_static_accessor_GLOBAL_60a4124bab7dcc9a: function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_GLOBAL_THIS_95ca6460658b5d13: function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_SELF_4c95f759a91e9aae: function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_static_accessor_WINDOW_44b435597f9e9ee7: function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addToExternrefTable0(ret);
        },
        __wbg_subdiagnostic_new: function(arg0) {
            const ret = SubDiagnostic.__wrap(arg0);
            return ret;
        },
        __wbg_textedit_new: function(arg0) {
            const ret = TextEdit.__wrap(arg0);
            return ret;
        },
        __wbg_textedit_unwrap: function(arg0) {
            const ret = TextEdit.__unwrap(arg0);
            return ret;
        },
        __wbg_value_3d3defe09fb1ffca: function(arg0) {
            const ret = arg0.value;
            return ret;
        },
        __wbg_warn_633bacc13ba7e6c3: function(arg0) {
            console.warn(arg0);
        },
        __wbindgen_cast_0000000000000001: function(arg0) {
            // Cast intrinsic for `F64 -> Externref`.
            const ret = arg0;
            return ret;
        },
        __wbindgen_cast_0000000000000002: function(arg0) {
            // Cast intrinsic for `I64 -> Externref`.
            const ret = arg0;
            return ret;
        },
        __wbindgen_cast_0000000000000003: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return ret;
        },
        __wbindgen_cast_0000000000000004: function(arg0) {
            // Cast intrinsic for `U64 -> Externref`.
            const ret = BigInt.asUintN(64, arg0);
            return ret;
        },
        __wbindgen_init_externref_table: function() {
            const table = wasm.__wbindgen_externrefs;
            const offset = table.grow(4);
            table.set(0, undefined);
            table.set(offset + 0, undefined);
            table.set(offset + 1, null);
            table.set(offset + 2, true);
            table.set(offset + 3, false);
        },
    };
    return {
        __proto__: null,
        "./ty_wasm_bg.js": import0,
    };
}

const CodeActionFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_codeaction_free(ptr, 1));
const CompletionFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_completion_free(ptr, 1));
const DiagnosticFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_diagnostic_free(ptr, 1));
const DiagnosticAnnotationFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_diagnosticannotation_free(ptr, 1));
const DocumentHighlightFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_documenthighlight_free(ptr, 1));
const FileHandleFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_filehandle_free(ptr, 1));
const HintFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_hint_free(ptr, 1));
const HoverFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_hover_free(ptr, 1));
const InlayHintFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_inlayhint_free(ptr, 1));
const InlayHintLabelPartFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_inlayhintlabelpart_free(ptr, 1));
const LocationFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_location_free(ptr, 1));
const LocationLinkFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_locationlink_free(ptr, 1));
const ParameterInformationFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_parameterinformation_free(ptr, 1));
const PositionFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_position_free(ptr, 1));
const RangeFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_range_free(ptr, 1));
const RenameEditFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_renameedit_free(ptr, 1));
const SemanticTokenFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_semantictoken_free(ptr, 1));
const SignatureHelpFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_signaturehelp_free(ptr, 1));
const SignatureInformationFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_signatureinformation_free(ptr, 1));
const SubDiagnosticFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_subdiagnostic_free(ptr, 1));
const TextEditFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_textedit_free(ptr, 1));
const TextRangeFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_textrange_free(ptr, 1));
const WorkspaceFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_workspace_free(ptr, 1));

function addToExternrefTable0(obj) {
    const idx = wasm.__externref_table_alloc();
    wasm.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function getArrayJsValueFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    const mem = getDataViewMemory0();
    const result = [];
    for (let i = ptr; i < ptr + 4 * len; i += 4) {
        result.push(wasm.__wbindgen_externrefs.get(mem.getUint32(i, true)));
    }
    wasm.__externref_drop_slice(ptr, len);
    return result;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function passArrayJsValueToWasm0(array, malloc) {
    const ptr = malloc(array.length * 4, 4) >>> 0;
    for (let i = 0; i < array.length; i++) {
        const add = addToExternrefTable0(array[i]);
        getDataViewMemory0().setUint32(ptr + 4 * i, add, true);
    }
    WASM_VECTOR_LEN = array.length;
    return ptr;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeFromExternrefTable0(idx) {
    const value = wasm.__wbindgen_externrefs.get(idx);
    wasm.__externref_table_dealloc(idx);
    return value;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasmInstance, wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('ty_wasm_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
