import { jsx as jsx$1, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { useState, useEffect, useContext, useMemo, memo, useRef, useCallback } from 'react';
import { Editor, Operation, Path, Transforms, Element, Text, Range, Node, createEditor as createEditor$1 } from 'slate';
import { ReactEditor, useSlate, useSelected, Editable, withReact, Slate } from 'slate-react';
import { randomFillSync } from 'crypto-browserify';
import {Buffer} from 'buffer'
import { createPortal } from 'react-dom';

window.process = {}
window.process.browser = true;
const NoSSR = ({ children, fallback = null }) => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);
    if (!mounted) {
        return fallback;
    }
    return children;
};

/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject$1(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObject$1(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject$1(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}

var History = {
  /**
   * Check if a value is a `History` object.
   */
  isHistory(value) {
    return isPlainObject(value) && Array.isArray(value.redos) && Array.isArray(value.undos) && (value.redos.length === 0 || Operation.isOperationList(value.redos[0])) && (value.undos.length === 0 || Operation.isOperationList(value.undos[0]));
  }

};
var SAVING = new WeakMap();
var MERGING = new WeakMap();
var HistoryEditor = {
  /**
   * Check if a value is a `HistoryEditor` object.
   */
  isHistoryEditor(value) {
    return History.isHistory(value.history) && Editor.isEditor(value);
  },

  /**
   * Get the merge flag's current value.
   */
  isMerging(editor) {
    return MERGING.get(editor);
  },

  /**
   * Get the saving flag's current value.
   */
  isSaving(editor) {
    return SAVING.get(editor);
  },

  /**
   * Redo to the previous saved state.
   */
  redo(editor) {
    editor.redo();
  },

  /**
   * Undo to the previous saved state.
   */
  undo(editor) {
    editor.undo();
  },

  /**
   * Apply a series of changes inside a synchronous `fn`, without merging any of
   * the new operations into previous save point in the history.
   */
  withoutMerging(editor, fn) {
    var prev = HistoryEditor.isMerging(editor);
    MERGING.set(editor, false);
    fn();
    MERGING.set(editor, prev);
  },

  /**
   * Apply a series of changes inside a synchronous `fn`, without saving any of
   * their operations into the history.
   */
  withoutSaving(editor, fn) {
    var prev = HistoryEditor.isSaving(editor);
    SAVING.set(editor, false);
    fn();
    SAVING.set(editor, prev);
  }

};

/**
 * The `withHistory` plugin keeps track of the operation history of a Slate
 * editor as operations are applied to it, using undo and redo stacks.
 *
 * If you are using TypeScript, you must extend Slate's CustomTypes to use
 * this plugin.
 *
 * See https://docs.slatejs.org/concepts/11-typescript to learn how.
 */

var withHistory = editor => {
  var e = editor;
  var {
    apply
  } = e;
  e.history = {
    undos: [],
    redos: []
  };

  e.redo = () => {
    var {
      history
    } = e;
    var {
      redos
    } = history;

    if (redos.length > 0) {
      var batch = redos[redos.length - 1];
      HistoryEditor.withoutSaving(e, () => {
        Editor.withoutNormalizing(e, () => {
          for (var op of batch) {
            e.apply(op);
          }
        });
      });
      history.redos.pop();
      history.undos.push(batch);
    }
  };

  e.undo = () => {
    var {
      history
    } = e;
    var {
      undos
    } = history;

    if (undos.length > 0) {
      var batch = undos[undos.length - 1];
      HistoryEditor.withoutSaving(e, () => {
        Editor.withoutNormalizing(e, () => {
          var inverseOps = batch.map(Operation.inverse).reverse();

          for (var op of inverseOps) {
            e.apply(op);
          }
        });
      });
      history.redos.push(batch);
      history.undos.pop();
    }
  };

  e.apply = op => {
    var {
      operations,
      history
    } = e;
    var {
      undos
    } = history;
    var lastBatch = undos[undos.length - 1];
    var lastOp = lastBatch && lastBatch[lastBatch.length - 1];
    var overwrite = shouldOverwrite(op, lastOp);
    var save = HistoryEditor.isSaving(e);
    var merge = HistoryEditor.isMerging(e);

    if (save == null) {
      save = shouldSave(op);
    }

    if (save) {
      if (merge == null) {
        if (lastBatch == null) {
          merge = false;
        } else if (operations.length !== 0) {
          merge = true;
        } else {
          merge = shouldMerge(op, lastOp) || overwrite;
        }
      }

      if (lastBatch && merge) {
        if (overwrite) {
          lastBatch.pop();
        }

        lastBatch.push(op);
      } else {
        var batch = [op];
        undos.push(batch);
      }

      while (undos.length > 100) {
        undos.shift();
      }

      if (shouldClear(op)) {
        history.redos = [];
      }
    }

    apply(op);
  };

  return e;
};
/**
 * Check whether to merge an operation into the previous operation.
 */

var shouldMerge = (op, prev) => {
  if (op.type === 'set_selection') {
    return true;
  }

  if (prev && op.type === 'insert_text' && prev.type === 'insert_text' && op.offset === prev.offset + prev.text.length && Path.equals(op.path, prev.path)) {
    return true;
  }

  if (prev && op.type === 'remove_text' && prev.type === 'remove_text' && op.offset + op.text.length === prev.offset && Path.equals(op.path, prev.path)) {
    return true;
  }

  return false;
};
/**
 * Check whether an operation needs to be saved to the history.
 */


var shouldSave = (op, prev) => {
  if (op.type === 'set_selection' && (op.properties == null || op.newProperties == null)) {
    return false;
  }

  return true;
};
/**
 * Check whether an operation should overwrite the previous one.
 */


var shouldOverwrite = (op, prev) => {
  if (prev && op.type === 'set_selection' && prev.type === 'set_selection') {
    return true;
  }

  return false;
};
/**
 * Check whether an operation should clear the redos stack.
 */


var shouldClear = op => {
  if (op.type === 'set_selection') {
    return false;
  }

  return true;
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array ? array.length : 0;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array ? array.length : 0;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  if (value !== value) {
    return baseFindIndex(array, baseIsNaN, fromIndex);
  }
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/**
 * Checks if a cache value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Checks if `value` is a host object in IE < 9.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
 */
function isHostObject(value) {
  // Many host objects are `Object` objects that can coerce to strings
  // despite having improperly defined `toString` methods.
  var result = false;
  if (value != null && typeof value.toString != 'function') {
    try {
      result = !!(value + '');
    } catch (e) {}
  }
  return result;
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var splice = arrayProto.splice;

/* Built-in method references that are verified to be native. */
var Map$1 = getNative(root, 'Map'),
    Set = getNative(root, 'Set'),
    nativeCreate = getNative(Object, 'create');

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  return this.has(key) && delete this.__data__[key];
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries ? entries.length : 0;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$1 || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  return getMapData(this, key)['delete'](key);
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  getMapData(this, key).set(key, value);
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values ? values.length : 0;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * This method is like `_.uniq` except that it accepts `comparator` which
 * is invoked to compare elements of `array`. The comparator is invoked with
 * two arguments: (arrVal, othVal).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
 *
 * _.uniqWith(objects, _.isEqual);
 * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
 */
function uniqWith(array, comparator) {
  return (array && array.length)
    ? baseUniq(array, undefined, comparator)
    : [];
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

var lodash_uniqwith = uniqWith;

var _YooptaPlugin_props;
class YooptaPlugin {
    constructor(inputPlugin) {
        _YooptaPlugin_props.set(this, void 0);
        __classPrivateFieldSet(this, _YooptaPlugin_props, Object.freeze(Object.assign({}, inputPlugin)), "f");
    }
    extend(overrides) {
        const { type = __classPrivateFieldGet(this, _YooptaPlugin_props, "f").type, renderer = __classPrivateFieldGet(this, _YooptaPlugin_props, "f").renderer, placeholder = __classPrivateFieldGet(this, _YooptaPlugin_props, "f").placeholder, shortcut = __classPrivateFieldGet(this, _YooptaPlugin_props, "f").shortcut, exports = __classPrivateFieldGet(this, _YooptaPlugin_props, "f").exports, events = __classPrivateFieldGet(this, _YooptaPlugin_props, "f").events, options, } = overrides;
        const updatedProps = Object.freeze(Object.assign(Object.assign({}, __classPrivateFieldGet(this, _YooptaPlugin_props, "f")), { type,
            renderer,
            placeholder,
            shortcut,
            exports,
            events, options: Object.assign(Object.assign({}, __classPrivateFieldGet(this, _YooptaPlugin_props, "f").options), options) }));
        return new YooptaPlugin(updatedProps);
    }
    get getPlugin() {
        return __classPrivateFieldGet(this, _YooptaPlugin_props, "f");
    }
}
_YooptaPlugin_props = new WeakMap();
function createYooptaPlugin(input) {
    return new YooptaPlugin(input);
}
function mergePlugins(plugins) {
    const items = plugins
        .map((instance) => {
        const _a = instance.getPlugin, { childPlugin } = _a, componentProps = __rest(_a, ["childPlugin"]);
        return childPlugin ? [componentProps, Object.assign(Object.assign({}, childPlugin.getPlugin), { hasParent: true })] : componentProps;
    })
        .flat();
    const uniquePlugins = lodash_uniqwith(items, (a, b) => a.type === b.type);
    return uniquePlugins;
}
function mergePluginTypesToMap(plugins) {
    const PLUGINS_MAP = {};
    plugins.forEach((plugin) => (PLUGINS_MAP[plugin.type] = plugin));
    return PLUGINS_MAP;
}
// const YooptaPlugin: YooptaPlugin = (props) => {
//   const frozenProps = Object.freeze({ ...props });
//   const extend = (overrides: Partial<YooptaPluginType>) => YooptaPlugin(Object.freeze({ ...frozenProps, ...overrides }));
//   const getPlugin = () => frozenProps;
//   return {
//     extend,
//     getPlugin,
//   };
// };

const urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';

const POOL_SIZE_MULTIPLIER = 128;
let pool, poolOffset;
let fillPool = bytes => {
  if (!pool || pool.length < bytes) {
    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER);
    randomFillSync(pool);
    poolOffset = 0;
  } else if (poolOffset + bytes > pool.length) {
    randomFillSync(pool);
    poolOffset = 0;
  }
  poolOffset += bytes;
};
let nanoid = (size = 21) => {
  fillPool((size -= 0));
  let id = '';
  for (let i = poolOffset - size; i < poolOffset; i++) {
    id += urlAlphabet[pool[i] & 63];
  }
  return id
};

function getFallbackUUID() {
    let S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
}
const generateId = () => {
    var _a;
    if (typeof window === 'undefined')
        return nanoid();
    if (typeof ((_a = window.crypto) === null || _a === void 0 ? void 0 : _a.randomUUID) !== 'function')
        return getFallbackUUID();
    return nanoid();
};

// WORK IN PROGRESS
function isValidYooptaNodes(nodes) {
    if (!Array.isArray(nodes))
        return false;
    if (nodes.length === 0)
        return false;
    return true;
}

const DEFAULT_YOPTA_LS_NAME = 'yoopta-content';
function getStorageName(offline) {
    if (typeof offline === 'string') {
        return offline;
    }
    return DEFAULT_YOPTA_LS_NAME;
}
function getInitialState$1(storageName, offline, value) {
    const DEFAULT_STATE = [{ id: generateId(), type: 'paragraph', children: [{ text: '' }] }];
    const defaultValue = isValidYooptaNodes(value) ? value : DEFAULT_STATE;
    if (!offline) {
        localStorage.removeItem(storageName);
        return defaultValue;
    }
    try {
        const storedData = JSON.parse(localStorage.getItem(storageName) || '[]');
        return isValidYooptaNodes(storedData) ? storedData : defaultValue;
    }
    catch (error) {
        localStorage.removeItem(storageName);
        return DEFAULT_STATE;
    }
}

var lodash_clonedeepExports = {};
var lodash_clonedeep = {
  get exports(){ return lodash_clonedeepExports; },
  set exports(v){ lodash_clonedeepExports = v; },
};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

(function (module, exports) {
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

	/** Detect free variable `self`. */
	var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || Function('return this')();

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `map.set` because it's not chainable in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  // Don't return `set.add` because it's not chainable in IE 11.
	  set.add(value);
	  return set;
	}

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array ? array.length : 0;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	/**
	 * Creates a unary function that invokes `func` with its argument transformed.
	 *
	 * @private
	 * @param {Function} func The function to wrap.
	 * @param {Function} transform The argument transform.
	 * @returns {Function} Returns the new function.
	 */
	function overArg(func, transform) {
	  return function(arg) {
	    return func(transform(arg));
	  };
	}

	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	/** Used for built-in method references. */
	var arrayProto = Array.prototype,
	    funcProto = Function.prototype,
	    objectProto = Object.prototype;

	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];

	/** Used to detect methods masquerading as native. */
	var maskSrcKey = (function() {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? ('Symbol(src)_1.' + uid) : '';
	}());

	/** Used to resolve the decompiled source of functions. */
	var funcToString = funcProto.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    Symbol = root.Symbol,
	    Uint8Array = root.Uint8Array,
	    getPrototype = overArg(Object.getPrototypeOf, Object),
	    objectCreate = Object.create,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetSymbols = Object.getOwnPropertySymbols,
	    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
	    nativeKeys = overArg(Object.keys, Object);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView'),
	    Map = getNative(root, 'Map'),
	    Promise = getNative(root, 'Promise'),
	    Set = getNative(root, 'Set'),
	    WeakMap = getNative(root, 'WeakMap'),
	    nativeCreate = getNative(Object, 'create');

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	  return this;
	}

	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;

	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}

	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}

	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  return index < 0 ? undefined : data[index][1];
	}

	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}

	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);

	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}

	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	  var index = -1,
	      length = entries ? entries.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = entries[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': new (Map || ListCache),
	    'string': new Hash
	  };
	}

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache;
	}

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache) {
	    var pairs = cache.__data__;
	    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
	      pairs.push([key, value]);
	      return this;
	    }
	    cache = this.__data__ = new MapCache(pairs);
	  }
	  cache.set(key, value);
	  return this;
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	/**
	 * Creates an array of the enumerable property names of the array-like `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @param {boolean} inherited Specify returning inherited property names.
	 * @returns {Array} Returns the array of property names.
	 */
	function arrayLikeKeys(value, inherited) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  // Safari 9 makes `arguments.length` enumerable in strict mode.
	  var result = (isArray(value) || isArguments(value))
	    ? baseTimes(value.length, String)
	    : [];

	  var length = result.length,
	      skipIndexes = !!length;

	  for (var key in value) {
	    if ((inherited || hasOwnProperty.call(value, key)) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    // Recursively populate clone (susceptible to call stack limits).
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
	}

	/**
	 * The base implementation of `getTag`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function baseGetTag(value) {
	  return objectToString.call(value);
	}

	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	/**
	 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  if (!isPrototype(object)) {
	    return nativeKeys(object);
	  }
	  var result = [];
	  for (var key in Object(object)) {
	    if (hasOwnProperty.call(object, key) && key != 'constructor') {
	      result.push(key);
	    }
	  }
	  return result;
	}

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : undefined;

	    assignValue(object, key, newValue === undefined ? source[key] : newValue);
	  }
	  return object;
	}

	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key)
	    ? data[typeof key == 'string' ? 'string' : 'hash']
	    : data.map;
	}

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}

	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = nativeGetSymbols ? overArg(nativeGetSymbols, Object) : stubArray;

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	var getTag = baseGetTag;

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge < 14, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && (maskSrcKey in func);
	}

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	/**
	 * This method is like `_.clone` except that it recursively clones `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.0.0
	 * @category Lang
	 * @param {*} value The value to recursively clone.
	 * @returns {*} Returns the deep cloned value.
	 * @see _.clone
	 * @example
	 *
	 * var objects = [{ 'a': 1 }, { 'b': 2 }];
	 *
	 * var deep = _.cloneDeep(objects);
	 * console.log(deep[0] === objects[0]);
	 * // => false
	 */
	function cloneDeep(value) {
	  return baseClone(value, true, true);
	}

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'a': 1 };
	 * var other = { 'a': 1 };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(value.length) && !isFunction(value);
	}

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8-9 which returns 'object' for typed array and other constructors.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
	}

	/**
	 * This method returns a new empty array.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {Array} Returns the new empty array.
	 * @example
	 *
	 * var arrays = _.times(2, _.stubArray);
	 *
	 * console.log(arrays);
	 * // => [[], []]
	 *
	 * console.log(arrays[0] === arrays[1]);
	 * // => false
	 */
	function stubArray() {
	  return [];
	}

	/**
	 * This method returns `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.13.0
	 * @category Util
	 * @returns {boolean} Returns `false`.
	 * @example
	 *
	 * _.times(2, _.stubFalse);
	 * // => [false, false]
	 */
	function stubFalse() {
	  return false;
	}

	module.exports = cloneDeep;
} (lodash_clonedeep, lodash_clonedeepExports));

var cloneDeep = lodash_clonedeepExports;

function deepClone(object) {
    if (typeof window.structuredClone === 'function')
        return window.structuredClone(object);
    return cloneDeep(object);
}

const DEFAULT_DRAG_STATE = {
    from: { path: null, element: null, parent: null },
    to: { path: null, element: null, parent: null },
};
const useDragDrop = (editor) => {
    const [disableWhileDrag, setIsDisableByDrag] = useState(false);
    const [dndState, setDndState] = useState(DEFAULT_DRAG_STATE);
    const [DRAG_MAP] = useState(() => new Map());
    const onDragEnter = (e) => {
        var _a;
        e.preventDefault();
        e.stopPropagation();
        const target = e.target.closest('[data-element-id]');
        if (target) {
            const { elementId, elementType } = target.dataset;
            if (!elementId || !elementType)
                return;
            const toNodeElement = DRAG_MAP.get(elementId);
            if ((_a = toNodeElement.data) === null || _a === void 0 ? void 0 : _a.skipDrag)
                return;
            const toNodePath = ReactEditor.findPath(editor, toNodeElement);
            setDndState((prevDragState) => ({
                from: prevDragState.from,
                to: { path: toNodePath, element: { id: elementId, type: elementType }, parent: null },
            }));
        }
    };
    const onDragEnd = (e) => {
        e.stopPropagation();
        e.target.removeAttribute('draggable');
        e.target.ondragstart = null;
        e.target.ondragend = null;
        e.target.ondragenter = null;
        e.target.ondragover = null;
        setIsDisableByDrag(false);
        setDndState(DEFAULT_DRAG_STATE);
    };
    const onDrop = (e) => {
        try {
            Editor.withoutNormalizing(editor, () => {
                var _a, _b;
                e.preventDefault();
                e.stopPropagation();
                if (((_a = dndState.from.element) === null || _a === void 0 ? void 0 : _a.id) === ((_b = dndState.to.element) === null || _b === void 0 ? void 0 : _b.id))
                    return;
                const fromPath = dndState.from.path;
                const toNodeElement = DRAG_MAP.get(dndState.to.element.id);
                let toPath = ReactEditor.findPath(editor, toNodeElement);
                if (!fromPath || !toPath)
                    return;
                const [fromElementNode, fromElementPath] = Editor.node(editor, fromPath);
                const [parentElementNode, parentElementPath] = Editor.parent(editor, fromElementPath);
                console.log('fromPath', fromPath);
                console.log('fromElementPath', fromElementPath);
                console.log('toPath', toPath);
                console.log('toPath next', Path.next(toPath));
                console.log('fromElementNode', fromElementNode);
                console.log('parentElementNode', parentElementNode);
                if (toPath.length > 1) {
                    const draggedElement = deepClone(fromElementNode);
                    const deeper = toPath.length > fromPath.length;
                    // [TODO] - strange behaviour of slate or of me
                    if (deeper) {
                        Transforms.insertNodes(editor, draggedElement, {
                            at: toPath.length === fromPath.length ? toPath : Path.next(toPath),
                            match: (n) => Element.isElement(n),
                            mode: 'lowest',
                        });
                        Transforms.removeNodes(editor, {
                            at: fromPath,
                            match: (n) => Element.isElement(n) && n.id === (draggedElement === null || draggedElement === void 0 ? void 0 : draggedElement.id),
                            mode: 'lowest',
                        });
                    }
                    else {
                        Transforms.removeNodes(editor, {
                            at: fromPath,
                            match: (n) => Element.isElement(n) && n.id === (draggedElement === null || draggedElement === void 0 ? void 0 : draggedElement.id),
                            mode: 'lowest',
                        });
                        Transforms.insertNodes(editor, draggedElement, {
                            at: toPath.length === fromPath.length ? toPath : Path.next(toPath),
                            match: (n) => Element.isElement(n),
                            mode: 'lowest',
                        });
                    }
                    if (parentElementNode.children.length === 1 && Element.isElement(parentElementNode.children[0])) {
                        Transforms.removeNodes(editor, {
                            at: parentElementPath,
                            match: (n) => Element.isElement(n) && parentElementNode.id === n.id,
                            mode: 'lowest',
                        });
                    }
                }
                else {
                    Transforms.moveNodes(editor, {
                        at: fromPath,
                        to: toPath,
                        match: (node) => Element.isElement(node) && Element.isElement(fromElementNode) && fromElementNode.type === node.type,
                        mode: 'lowest',
                    });
                }
                e.dataTransfer.clearData();
                DRAG_MAP.clear();
            });
        }
        catch (error) {
            console.error(error);
        }
    };
    const onDragStart = (e, from) => {
        setIsDisableByDrag(true);
        e.dataTransfer.setData('Text', '');
        e.dataTransfer.effectAllowed = 'move';
        const editorEl = document.getElementById('yoopta-contenteditable');
        if (editorEl) {
            editorEl.ondragenter = (e) => onDragEnter(e);
            editorEl.ondragover = (event) => {
                event.stopPropagation();
                event.preventDefault();
                return false;
            };
            setDndState((prevDragState) => ({ to: prevDragState.to, from }));
        }
    };
    const values = { dndState, disableWhileDrag, DRAG_MAP };
    const events = {
        onDrop,
        onDragEnd,
        onDragEnter,
        onDragStart,
    };
    return [values, events];
};

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Older browsers don't support event options, feature detect it.

// Adopted and modified solution from Bohdan Didukh (2017)
// https://stackoverflow.com/questions/41594997/ios-10-safari-prevent-scrolling-behind-a-fixed-overlay-and-maintain-scroll-posi

var hasPassiveEvents = false;
if (typeof window !== 'undefined') {
  var passiveTestOptions = {
    get passive() {
      hasPassiveEvents = true;
      return undefined;
    }
  };
  window.addEventListener('testPassive', null, passiveTestOptions);
  window.removeEventListener('testPassive', null, passiveTestOptions);
}

var isIosDevice = typeof window !== 'undefined' && window.navigator && window.navigator.platform && (/iP(ad|hone|od)/.test(window.navigator.platform) || window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1);


var locks = [];
var documentListenerAdded = false;
var initialClientY = -1;
var previousBodyOverflowSetting = void 0;
var previousBodyPosition = void 0;
var previousBodyPaddingRight = void 0;

// returns true if `el` should be allowed to receive touchmove events.
var allowTouchMove = function allowTouchMove(el) {
  return locks.some(function (lock) {
    if (lock.options.allowTouchMove && lock.options.allowTouchMove(el)) {
      return true;
    }

    return false;
  });
};

var preventDefault = function preventDefault(rawEvent) {
  var e = rawEvent || window.event;

  // For the case whereby consumers adds a touchmove event listener to document.
  // Recall that we do document.addEventListener('touchmove', preventDefault, { passive: false })
  // in disableBodyScroll - so if we provide this opportunity to allowTouchMove, then
  // the touchmove event on document will break.
  if (allowTouchMove(e.target)) {
    return true;
  }

  // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
  if (e.touches.length > 1) return true;

  if (e.preventDefault) e.preventDefault();

  return false;
};

var setOverflowHidden = function setOverflowHidden(options) {
  // If previousBodyPaddingRight is already set, don't set it again.
  if (previousBodyPaddingRight === undefined) {
    var _reserveScrollBarGap = !!options && options.reserveScrollBarGap === true;
    var scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

    if (_reserveScrollBarGap && scrollBarGap > 0) {
      var computedBodyPaddingRight = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'), 10);
      previousBodyPaddingRight = document.body.style.paddingRight;
      document.body.style.paddingRight = computedBodyPaddingRight + scrollBarGap + 'px';
    }
  }

  // If previousBodyOverflowSetting is already set, don't set it again.
  if (previousBodyOverflowSetting === undefined) {
    previousBodyOverflowSetting = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
  }
};

var restoreOverflowSetting = function restoreOverflowSetting() {
  if (previousBodyPaddingRight !== undefined) {
    document.body.style.paddingRight = previousBodyPaddingRight;

    // Restore previousBodyPaddingRight to undefined so setOverflowHidden knows it
    // can be set again.
    previousBodyPaddingRight = undefined;
  }

  if (previousBodyOverflowSetting !== undefined) {
    document.body.style.overflow = previousBodyOverflowSetting;

    // Restore previousBodyOverflowSetting to undefined
    // so setOverflowHidden knows it can be set again.
    previousBodyOverflowSetting = undefined;
  }
};

var setPositionFixed = function setPositionFixed() {
  return window.requestAnimationFrame(function () {
    // If previousBodyPosition is already set, don't set it again.
    if (previousBodyPosition === undefined) {
      previousBodyPosition = {
        position: document.body.style.position,
        top: document.body.style.top,
        left: document.body.style.left
      };

      // Update the dom inside an animation frame 
      var _window = window,
          scrollY = _window.scrollY,
          scrollX = _window.scrollX,
          innerHeight = _window.innerHeight;

      document.body.style.position = 'fixed';
      document.body.style.top = -scrollY;
      document.body.style.left = -scrollX;

      setTimeout(function () {
        return window.requestAnimationFrame(function () {
          // Attempt to check if the bottom bar appeared due to the position change
          var bottomBarHeight = innerHeight - window.innerHeight;
          if (bottomBarHeight && scrollY >= innerHeight) {
            // Move the content further up so that the bottom bar doesn't hide it
            document.body.style.top = -(scrollY + bottomBarHeight);
          }
        });
      }, 300);
    }
  });
};

var restorePositionSetting = function restorePositionSetting() {
  if (previousBodyPosition !== undefined) {
    // Convert the position from "px" to Int
    var y = -parseInt(document.body.style.top, 10);
    var x = -parseInt(document.body.style.left, 10);

    // Restore styles
    document.body.style.position = previousBodyPosition.position;
    document.body.style.top = previousBodyPosition.top;
    document.body.style.left = previousBodyPosition.left;

    // Restore scroll
    window.scrollTo(x, y);

    previousBodyPosition = undefined;
  }
};

// https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight#Problems_and_solutions
var isTargetElementTotallyScrolled = function isTargetElementTotallyScrolled(targetElement) {
  return targetElement ? targetElement.scrollHeight - targetElement.scrollTop <= targetElement.clientHeight : false;
};

var handleScroll = function handleScroll(event, targetElement) {
  var clientY = event.targetTouches[0].clientY - initialClientY;

  if (allowTouchMove(event.target)) {
    return false;
  }

  if (targetElement && targetElement.scrollTop === 0 && clientY > 0) {
    // element is at the top of its scroll.
    return preventDefault(event);
  }

  if (isTargetElementTotallyScrolled(targetElement) && clientY < 0) {
    // element is at the bottom of its scroll.
    return preventDefault(event);
  }

  event.stopPropagation();
  return true;
};

var disableBodyScroll = function disableBodyScroll(targetElement, options) {
  // targetElement must be provided
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.');
    return;
  }

  // disableBodyScroll must not have been called on this targetElement before
  if (locks.some(function (lock) {
    return lock.targetElement === targetElement;
  })) {
    return;
  }

  var lock = {
    targetElement: targetElement,
    options: options || {}
  };

  locks = [].concat(_toConsumableArray(locks), [lock]);

  if (isIosDevice) {
    setPositionFixed();
  } else {
    setOverflowHidden(options);
  }

  if (isIosDevice) {
    targetElement.ontouchstart = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        initialClientY = event.targetTouches[0].clientY;
      }
    };
    targetElement.ontouchmove = function (event) {
      if (event.targetTouches.length === 1) {
        // detect single touch.
        handleScroll(event, targetElement);
      }
    };

    if (!documentListenerAdded) {
      document.addEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = true;
    }
  }
};

var enableBodyScroll = function enableBodyScroll(targetElement) {
  if (!targetElement) {
    // eslint-disable-next-line no-console
    console.error('enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.');
    return;
  }

  locks = locks.filter(function (lock) {
    return lock.targetElement !== targetElement;
  });

  if (isIosDevice) {
    targetElement.ontouchstart = null;
    targetElement.ontouchmove = null;

    if (documentListenerAdded && locks.length === 0) {
      document.removeEventListener('touchmove', preventDefault, hasPassiveEvents ? { passive: false } : undefined);
      documentListenerAdded = false;
    }
  }

  if (isIosDevice) {
    restorePositionSetting();
  } else {
    restoreOverflowSetting();
  }
};

var toggleSelection = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};

var deselectCurrent = toggleSelection;

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
};

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // avoid screen readers from reading out loud the text
    mark.ariaHidden = "true";
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

var copyToClipboard = copy;

const getDefaultParagraphLine = (id) => ({
    id,
    type: 'paragraph',
    nodeType: 'block',
    children: [{ text: '' }],
});
function getRenderFunctionFactory(plugin) {
    if (typeof plugin.renderer === 'function') {
        return plugin.renderer;
    }
    return plugin.renderer.editor;
}
function isElementHasText(element) {
    var _a, _b;
    if (((_a = element === null || element === void 0 ? void 0 : element.children) === null || _a === void 0 ? void 0 : _a.length) === 1 && ((_b = element === null || element === void 0 ? void 0 : element.children[0]) === null || _b === void 0 ? void 0 : _b.text.length) === 0)
        return false;
    return true;
}
function checkIsMarkActive(editor, mark) {
    const marks = Editor.marks(editor);
    const checkIsMarkActive = !!(marks === null || marks === void 0 ? void 0 : marks[mark]);
    return checkIsMarkActive;
}
function toggleMark(editor, mark, only = false) {
    if (only) {
        Object.keys(Editor.marks(editor) || {}).forEach((activeMark) => {
            Editor.removeMark(editor, activeMark);
        });
    }
    if (!checkIsMarkActive(editor, mark))
        Editor.addMark(editor, mark, true);
    else
        Editor.removeMark(editor, mark);
}

const defaultValues$1 = {
    hoveredElement: null,
    isElementOptionsOpen: false,
    nodeSettingsPos: null,
    dndState: DEFAULT_DRAG_STATE,
    disableWhileDrag: false,
    DRAG_MAP: new Map(),
    selectedNodeElement: null,
};
const NodeSettingsContext = React__default.createContext([
    defaultValues$1,
    {
        openNodeSettings: (_dragRef, _node) => { },
        closeNodeSettings: () => { },
        hoverIn: (_e, _node) => { },
        triggerPlusButton: (_node) => { },
        deleteNode: () => { },
        duplicateNode: () => { },
        copyLinkNode: () => { },
        onDrop: (_e) => { },
        onDragEnd: (_e) => { },
        onDragEnter: (_e) => { },
        onDragStart: (_e) => { },
        changeHoveredNode: (_hoveredProps) => { },
        changeSelectedNodeElement: (_node) => { },
    },
]);
const getInitialState = ({ children }) => {
    if (children.length === 1) {
        const node = children[0];
        return node;
    }
    return null;
};
const NodeSettingsProvider = ({ children }) => {
    const editor = useSlate();
    const [dragValues, dragHandlers] = useDragDrop(editor);
    const [nodeSettingsPos, setNodeSettingsPos] = useState(null);
    const [hoveredElement, setHoveredElement] = useState(() => getInitialState(editor));
    const [selectedNodeElement, setSelectedNodeElement] = useState(null);
    const [isElementOptionsOpen, setNodeSettingsOpen] = useState(false);
    const values = Object.assign({ hoveredElement,
        isElementOptionsOpen,
        nodeSettingsPos,
        selectedNodeElement }, dragValues);
    const events = useMemo(() => (Object.assign({ hoverIn: (e, node) => {
            var _a;
            if (isElementOptionsOpen)
                return e.preventDefault();
            if (!!((_a = node === null || node === void 0 ? void 0 : node.data) === null || _a === void 0 ? void 0 : _a.skipSettings))
                return;
            setHoveredElement(node);
        }, changeSelectedNodeElement: (node) => {
            console.log('changeSelectedNodeElement node ', node);
            setSelectedNodeElement(node);
        }, changeHoveredNode: (hoverElement) => setHoveredElement(hoverElement), 
        // [TODO] - research UX and make it sexy
        triggerPlusButton: (elementNode) => {
            Editor.withoutNormalizing(editor, () => {
                if (!editor.selection || !elementNode)
                    return;
                const elementPath = ReactEditor.findPath(editor, elementNode);
                const nextTopLevelPath = Path.next([elementPath[0]]);
                const defaultNode = getDefaultParagraphLine(generateId());
                Transforms.insertNodes(editor, defaultNode, {
                    at: nextTopLevelPath,
                    select: true,
                });
                setHoveredElement(defaultNode);
            });
        }, openNodeSettings: (dragRef, element) => {
            disableBodyScroll(document.body, { reserveScrollBarGap: true });
            setNodeSettingsOpen(true);
            setSelectedNodeElement(element);
            const elementPath = ReactEditor.findPath(editor, element);
            let selectionPath = elementPath.concat(0);
            if (Element.isElement(element === null || element === void 0 ? void 0 : element.children[0])) {
                selectionPath = selectionPath.concat(0);
            }
            Transforms.select(editor, { path: selectionPath, offset: 0 });
            setHoveredElement(element);
            if (dragRef.current) {
                const dragRect = dragRef.current.getBoundingClientRect();
                setNodeSettingsPos({ left: dragRect.left + dragRect.width + 10, top: dragRect.top });
            }
        }, closeNodeSettings: () => {
            enableBodyScroll(document.body);
            setNodeSettingsOpen(false);
            setNodeSettingsPos(null);
            setSelectedNodeElement(null);
        }, deleteNode: () => {
            if (!hoveredElement)
                return;
            try {
                Editor.withoutNormalizing(editor, () => {
                    var _a;
                    const path = ReactEditor.findPath(editor, hoveredElement);
                    const [parentNode, parentNodePath] = Editor.parent(editor, path);
                    if (!path)
                        return;
                    let mode = 'highest';
                    if (Element.isElement(parentNode)) {
                        if (parentNode.children.length === 1 && Element.isElement(parentNode.children[0])) {
                            Transforms.removeNodes(editor, {
                                at: parentNodePath,
                                match: (node) => Element.isElement(node) && node.id === parentNode.id,
                                mode: 'highest',
                            });
                            setHoveredElement(null);
                            events.closeNodeSettings();
                            return;
                        }
                        if (((_a = parentNode.data) === null || _a === void 0 ? void 0 : _a.depth) > 0) {
                            mode = 'lowest';
                        }
                    }
                    Transforms.removeNodes(editor, {
                        at: path,
                        match: (node) => Element.isElement(node),
                        mode: mode,
                    });
                    setHoveredElement(null);
                    events.closeNodeSettings();
                });
            }
            catch (error) {
                console.log({ error });
            }
        }, duplicateNode: () => {
            Editor.withoutNormalizing(editor, () => {
                if (!hoveredElement)
                    return;
                const path = ReactEditor.findPath(editor, hoveredElement);
                const afterPath = Path.next(path);
                const duplicatedNode = deepClone(hoveredElement);
                duplicatedNode.id = generateId();
                Transforms.insertNodes(editor, duplicatedNode, {
                    at: afterPath,
                    match: (n) => Element.isElement(n),
                    mode: 'highest',
                    select: true,
                });
                ReactEditor.focus(editor);
                setHoveredElement(null);
                events.closeNodeSettings();
            });
        }, copyLinkNode: () => {
            if (window.location.hash.length === 0) {
                copyToClipboard(`${window.location.href}#${hoveredElement === null || hoveredElement === void 0 ? void 0 : hoveredElement.id}`);
            }
            else {
                copyToClipboard(`${window.location.href.split('#')[0]}#${hoveredElement === null || hoveredElement === void 0 ? void 0 : hoveredElement.id}`);
            }
            events.closeNodeSettings();
        } }, dragHandlers)), [hoveredElement, isElementOptionsOpen, dragValues, editor.children]);
    const contextValue = useMemo(() => [values, events], [hoveredElement, isElementOptionsOpen, dragValues, editor.selection, editor.children]);
    return jsx$1(NodeSettingsContext.Provider, Object.assign({ value: contextValue }, { children: children }));
};
const useNodeElementSettings = () => useContext(NodeSettingsContext);

var classnamesExports = {};
var classnames = {
  get exports(){ return classnamesExports; },
  set exports(v){ classnamesExports = v; },
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
} (classnames));

var cx = classnamesExports;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$3 = ".TextLeaf-module_placeholder:after{color:#aaa;content:attr(data-placeholder);font-size:75%;font-style:inherit;font-weight:inherit;padding-left:5px;position:absolute;text-indent:2px;top:50%;transform:translateY(-50%);user-select:none}.TextLeaf-module_selection{background-color:#accef7}";
var s$3 = {"placeholder":"TextLeaf-module_placeholder","selection":"TextLeaf-module_selection"};
styleInject(css_248z$3);

const leafStyle = {
    margin: '1px 0',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    color: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    fontWeight: 'inherit',
};
const TextLeaf = memo(({ attributes, children, placeholder, leaf }) => {
    const selected = useSelected();
    return (jsx$1("span", Object.assign({}, attributes, { "data-placeholder": placeholder, style: leafStyle, className: cx({
            [s$3.placeholder]: leaf.withPlaceholder && placeholder && selected,
            [s$3.selection]: leaf.selection,
        }) }, { children: children })));
});
TextLeaf.displayName = 'TextLeaf';

const useScrollToElement = () => {
    useEffect(() => {
        const elementId = window.location.hash.length > 0 ? window.location.hash.replace('#', '') : null;
        if (elementId) {
            const element = document.getElementById(elementId) || document.querySelector(`[data-element-id="${elementId}"]`);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'smooth',
                });
            }
        }
    }, []);
    return null;
};

var _path$5;
function _extends$5() { _extends$5 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }
var SvgDrag = function SvgDrag(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$5({
    viewBox: "0 0 10 10",
    fill: "currentColor",
    style: {
      width: 14,
      height: 14,
      display: "block",
      flexShrink: 0,
      backfaceVisibility: "hidden"
    }
  }, props), _path$5 || (_path$5 = /*#__PURE__*/React.createElement("path", {
    d: "M3 2a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4-8a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
  })));
};

var _path$4;
function _extends$4() { _extends$4 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }
var SvgPlus = function SvgPlus(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$4({
    viewBox: "0 0 16 16",
    fill: "currentColor",
    style: {
      width: 16,
      height: 16,
      display: "block",
      flexShrink: 0,
      backfaceVisibility: "hidden"
    }
  }, props), _path$4 || (_path$4 = /*#__PURE__*/React.createElement("path", {
    d: "M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 0 0-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 0 0-.739.722v5.529h-5.37a.746.746 0 0 0-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z"
  })));
};

var css_248z$2 = ".Overlay-module_overlay{inset:0;overflow:hidden;pointer-events:none;position:fixed;z-index:999}.Overlay-module_content,.Overlay-module_fakeOverlay{position:relative;z-index:0}.Overlay-module_content{pointer-events:auto}.Overlay-module_fakeContent{height:100vh;left:0;position:fixed;top:0;width:100vw}.Overlay-module_body{pointer-events:auto;position:relative;top:100%}";
var s$2 = {"overlay":"Overlay-module_overlay","fakeOverlay":"Overlay-module_fakeOverlay","content":"Overlay-module_content","fakeContent":"Overlay-module_fakeContent","body":"Overlay-module_body"};
styleInject(css_248z$2);

const Overlay = ({ children, onClose }) => {
    const [container] = useState(() => document.createElement('div'));
    useEffect(() => {
        container.className = 'yoopta-overlay';
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        };
    }, [container]);
    return createPortal(jsxs("div", Object.assign({ className: s$2.overlay }, { children: [jsx$1("div", { className: s$2.fakeOverlay }), jsxs("div", Object.assign({ className: s$2.content }, { children: [jsx$1("div", { className: s$2.fakeContent, onClick: onClose }), jsx$1("div", Object.assign({ className: s$2.body, onClick: (e) => e.stopPropagation() }, { children: children }))] }))] })), container);
};

var _path$3;
function _extends$3() { _extends$3 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var SvgTrash = function SvgTrash(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$3({
    viewBox: "0 0 16 16",
    className: "trash_svg__trash",
    style: {
      width: 16,
      height: 16,
      display: "block",
      fill: "currentColor",
      flexShrink: 0,
      backfaceVisibility: "hidden"
    }
  }, props), _path$3 || (_path$3 = /*#__PURE__*/React.createElement("path", {
    d: "M4.862 15.429h6.283c1.045 0 1.722-.636 1.77-1.689l.465-9.85h.752c.342 0 .608-.26.608-.602a.594.594 0 0 0-.608-.595H11.09V1.668C11.09.622 10.427 0 9.292 0H6.694C5.566 0 4.896.622 4.896 1.668v1.025H1.861a.598.598 0 1 0 0 1.196h.76l.464 9.858c.048 1.053.718 1.682 1.777 1.682Zm1.292-13.7c0-.355.246-.58.63-.58h2.42c.382 0 .628.225.628.58v.964H6.154V1.73ZM4.992 14.22c-.376 0-.65-.274-.67-.677L3.864 3.89h8.251l-.444 9.652c-.014.403-.287.677-.677.677H4.992Zm.991-1.1c.288 0 .472-.185.465-.452l-.205-7.164c-.007-.274-.198-.451-.472-.451-.287 0-.471.184-.464.45l.205 7.165c.007.273.198.451.471.451Zm2.017 0c.287 0 .479-.185.479-.452V5.503c0-.267-.192-.451-.479-.451s-.479.184-.479.45v7.165c0 .267.192.451.479.451Zm2.017 0c.273 0 .458-.179.464-.452l.212-7.164c.007-.267-.184-.451-.464-.451-.274 0-.465.177-.472.45l-.212 7.165c-.007.267.184.451.472.451Z"
  })));
};

var _path$2;
function _extends$2() { _extends$2 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
var SvgDuplicate = function SvgDuplicate(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$2({
    viewBox: "0 0 16 16",
    className: "duplicate_svg__duplicate",
    style: {
      width: 16,
      height: 16,
      display: "block",
      fill: "currentColor",
      flexShrink: 0,
      backfaceVisibility: "hidden"
    }
  }, props), _path$2 || (_path$2 = /*#__PURE__*/React.createElement("path", {
    d: "M2.839 12.152H4v1.033c0 1.456.759 2.214 2.242 2.214h6.918c1.477 0 2.242-.758 2.242-2.214V6.212c0-1.456-.765-2.215-2.242-2.215H12V2.965c0-1.456-.766-2.215-2.242-2.215H2.839C1.362.75.597 1.502.597 2.965V9.93c0 1.463.765 2.221 2.242 2.221Zm.082-1.34c-.636 0-.984-.328-.984-.99v-6.74c0-.664.348-.999.984-.999h6.76c.63 0 .985.335.985.998v.916H6.243c-1.483 0-2.242.759-2.242 2.215v4.6h-1.08Zm3.397 3.248c-.635 0-.977-.329-.977-.992v-6.74c0-.663.342-.991.977-.991h6.761c.629 0 .984.328.984.991v6.74c0 .663-.355.992-.984.992H6.32Z"
  })));
};

var _path$1;
function _extends$1() { _extends$1 = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var SvgTurn = function SvgTurn(props) {
  return /*#__PURE__*/React.createElement("svg", _extends$1({
    viewBox: "0 0 16 16",
    className: "turn_svg__loop",
    style: {
      width: 16,
      height: 16,
      display: "block",
      fill: "currentColor",
      flexShrink: 0,
      backfaceVisibility: "hidden"
    }
  }, props), _path$1 || (_path$1 = /*#__PURE__*/React.createElement("path", {
    d: "M5.804 3.123c.006.38.254.622.673.622h4.887c.59 0 .914.305.914.92v6.628l-.901-.978-.514-.514c-.267-.254-.629-.273-.895-.013-.254.26-.248.635.012.895l2.165 2.158c.476.47 1.022.47 1.498 0l2.165-2.158c.26-.26.266-.635.012-.895-.266-.26-.628-.241-.895.013l-.514.514-.895.971V4.564c0-1.358-.71-2.063-2.082-2.063H6.477c-.42 0-.68.241-.673.622ZM.186 7.06c.26.266.622.247.889-.013l.52-.508.889-.971v6.722c0 1.359.71 2.063 2.082 2.063h4.957c.42 0 .68-.241.673-.622-.006-.387-.254-.622-.673-.622h-4.88c-.591 0-.915-.311-.915-.927V5.554l.895.984.52.508c.26.26.629.28.89.013.26-.26.253-.629-.013-.89L3.855 4.013c-.476-.476-1.016-.476-1.492 0L.2 6.17c-.267.26-.273.628-.013.889Z"
  })));
};

var _path;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SvgCopy = function SvgCopy(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 16 16",
    className: "copy_svg__link",
    style: {
      width: 16,
      height: 16,
      display: "block",
      fill: "currentColor",
      flexShrink: 0,
      backfaceVisibility: "hidden"
    }
  }, props), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "m7.7 10.895 1.038-1.046c-.82-.076-1.394-.335-1.818-.76-1.155-1.154-1.155-2.795-.007-3.943l2.27-2.27c1.155-1.155 2.789-1.155 3.944 0 1.162 1.169 1.155 2.796.007 3.944l-1.176 1.176a2.74 2.74 0 0 1 .17 1.634l1.963-1.955c1.682-1.675 1.688-4.054-.007-5.75C12.389.225 10.01.238 8.335 1.913L5.956 4.298c-1.675 1.675-1.688 4.054.007 5.749.403.396.943.697 1.736.848Zm.6-5.763L7.27 6.178c.813.075 1.394.342 1.811.759 1.162 1.162 1.162 2.795.007 3.944l-2.27 2.27c-1.155 1.155-2.782 1.155-3.944 0-1.162-1.163-1.155-2.796 0-3.945L4.042 8.03a2.788 2.788 0 0 1-.17-1.634L1.915 8.352c-1.682 1.674-1.688 4.06.007 5.755 1.695 1.696 4.074 1.682 5.749.007l2.372-2.379c1.682-1.681 1.688-4.06-.007-5.749-.396-.403-.936-.704-1.736-.854Z"
  })));
};

const defaultValues = { marks: {}, elements: {} };
const YooptaContext = React__default.createContext(defaultValues);
const YooptaContextProvider = ({ children, plugins: pluginList, marks: markList, tools }) => {
    const editor = useSlate();
    const contextValue = useRef();
    const toggleNodeElement = (plugin, options) => {
        Editor.withoutNormalizing(editor, () => {
            var _a;
            if (!editor.selection)
                return;
            const { offset, path } = editor.selection.anchor;
            const { shouldDeleteText } = options || {};
            if (shouldDeleteText) {
                Transforms.delete(editor, {
                    at: {
                        anchor: { path, offset: 0 },
                        focus: { path, offset },
                    },
                });
            }
            const currentNodeEntry = Editor.above(editor, {
                at: editor.selection,
                mode: 'highest',
                match: (n) => !Editor.isEditor(n) && Element.isElement(n),
            });
            const [parentNode, parentPath] = Editor.parent(editor, Path.parent(editor.selection.anchor.path));
            const [currentNode] = currentNodeEntry || [];
            if ((currentNode === null || currentNode === void 0 ? void 0 : currentNode.type) === plugin.type) {
                Transforms.setNodes(editor, getDefaultParagraphLine(generateId()), {
                    mode: 'highest',
                    match: (n) => !Editor.isEditor(n) && Element.isElement(n),
                });
                return;
            }
            if (Element.isElement(parentNode) && !Editor.isEditor(parentNode)) {
                Transforms.unwrapNodes(editor, {
                    at: parentPath,
                    match: (n) => !Editor.isEditor(n) && !Text.isText(n) && Element.isElement(parentNode) && n.type === parentNode.type,
                });
            }
            (_a = plugin.createElement) === null || _a === void 0 ? void 0 : _a.call(plugin, editor, { id: currentNode.id });
        });
    };
    const isElementActive = (type) => {
        if (!editor.selection)
            return false;
        const [element] = Editor.nodes(editor, {
            at: Editor.unhangRange(editor, editor.selection),
            match: (n) => !Editor.isEditor(n) && Element.isElement(n) && !Editor.isInline(editor, n) && n.type === type,
            mode: 'highest',
        });
        return !!element;
    };
    // [TODO] Should be optimized
    const getElements = () => {
        const ELEMENTS_MAP = {};
        pluginList.forEach((plugin) => {
            const { createElement, defineElement, type, options, hasParent } = plugin;
            ELEMENTS_MAP[plugin.type] = {
                create: createElement,
                define: defineElement,
                toggle: (options) => toggleNodeElement(plugin, options),
                type,
                isActive: !hasParent && isElementActive(type),
                options: { displayLabel: options === null || options === void 0 ? void 0 : options.displayLabel },
            };
        });
        return ELEMENTS_MAP;
    };
    const elements = useMemo(() => getElements(), [pluginList, editor.selection]);
    const checkIsMarkActive = (mark) => {
        const marks = Editor.marks(editor);
        const isActive = !!(marks === null || marks === void 0 ? void 0 : marks[mark]);
        return isActive;
    };
    const toggleMark = (mark, only = false) => {
        if (only) {
            Object.keys(Editor.marks(editor) || {}).forEach((activeMark) => {
                Editor.removeMark(editor, activeMark);
            });
        }
        if (!checkIsMarkActive(mark))
            Editor.addMark(editor, mark, true);
        else
            Editor.removeMark(editor, mark);
    };
    const marks = useMemo(() => {
        const mapper = {};
        markList === null || markList === void 0 ? void 0 : markList.forEach((mark) => {
            mapper[mark.type] = {
                toggle: (options) => toggleMark(mark.type, options === null || options === void 0 ? void 0 : options.only),
                isActive: checkIsMarkActive(mark.type),
            };
        });
        return mapper;
    }, [markList, editor.selection]);
    const yooptaTools = useMemo(() => {
        const toolKeys = Object.keys(tools || {});
        if (toolKeys.length === 0)
            return undefined;
        const TOOLS = {};
        toolKeys.forEach((toolKey) => {
            const ToolComponent = tools === null || tools === void 0 ? void 0 : tools[toolKey];
            if (ToolComponent) {
                if (React__default.isValidElement(ToolComponent)) {
                    TOOLS[toolKey] = (_a) => {
                        var { style, className } = _a, rest = __rest(_a, ["style", "className"]);
                        return React__default.cloneElement(ToolComponent, Object.assign(Object.assign({ style,
                            className, plugins: pluginList, fromHook: true }, ToolComponent === null || ToolComponent === void 0 ? void 0 : ToolComponent.props), rest));
                    };
                }
            }
        });
        return TOOLS;
    }, [tools]);
    contextValue.current = {
        elements,
        marks,
        tools: yooptaTools,
    };
    return jsx$1(YooptaContext.Provider, Object.assign({ value: contextValue.current }, { children: children }));
};
const useYoopta = () => useContext(YooptaContext);
const useMarks = () => useContext(YooptaContext).marks;
const useElements = () => useContext(YooptaContext).elements;
const useTools = () => useContext(YooptaContext).tools;

var css_248z$1 = ".ElementOptions-module_root{align-items:center;background:#fff;border-radius:4px;box-shadow:0 0 0 1px hsla(0,0%,6%,.05),0 3px 6px hsla(0,0%,6%,.1),0 9px 24px hsla(0,0%,6%,.2);display:flex;flex-direction:column;height:auto;max-height:70vh;max-width:calc(100vw - 24px);min-width:200px;opacity:1;overflow:hidden;position:fixed;transform-origin:0 top;width:auto}.ElementOptions-module_content{flex-grow:1;margin-bottom:0;margin-right:0;min-height:0;overflow:hidden auto;position:relative;transform:translateZ(0);width:100%;z-index:1}.ElementOptions-module_group{box-shadow:0 -1px 0 rgba(55,53,47,.09);padding-bottom:6px;padding-top:6px}.ElementOptions-module_item{align-items:center;background:inherit;border:none;border-radius:3px;color:#000;cursor:pointer;display:flex;font-size:14px;line-height:120%;margin-left:4px;margin-right:4px;min-height:28px;transition:background 20ms ease-in 0s;user-select:none;width:calc(100% - 8px)}.ElementOptions-module_item:hover{background-color:rgba(55,53,47,.08);color:#000}.ElementOptions-module_icon{align-items:center;color:#000;display:flex;justify-content:center;margin-left:10px;margin-right:4px}.ElementOptions-module_text{flex:1 1 auto;margin-left:6px;margin-right:6px;min-width:0;overflow:hidden;text-align:left;text-overflow:ellipsis;white-space:nowrap}.ElementOptions-module_hotkey{color:rgba(55,53,47,.5);flex-shrink:0;font-size:12px;margin-left:auto;margin-right:12px;min-width:0;white-space:nowrap}";
var s$1 = {"root":"ElementOptions-module_root","content":"ElementOptions-module_content","group":"ElementOptions-module_group","item":"ElementOptions-module_item","icon":"ElementOptions-module_icon","text":"ElementOptions-module_text","hotkey":"ElementOptions-module_hotkey"};
styleInject(css_248z$1);

const DEFAULT_TURN_INTO_STYLES = {
    position: 'fixed',
    opacity: 1,
    bottom: 'auto',
    right: 'auto',
};
const ElementOptions = (_a) => {
    var { onClose, style, element, render } = _a, props = __rest(_a, ["onClose", "style", "element", "render"]);
    const [turnIntoElementsProps, setTurnIntoElementsProps] = useState({
        style: DEFAULT_TURN_INTO_STYLES,
        open: false,
    });
    const containerRef = useRef(null);
    const editor = useSlate();
    const tools = useTools();
    const [, handlers] = useNodeElementSettings();
    const { ActionMenu } = tools || {};
    const hasActionMenuAsTool = !!ActionMenu;
    // [WIP]
    const handleTurnInto = (event) => {
        var _a;
        const containerRect = containerRef.current.getBoundingClientRect();
        const actionMenuRect = (_a = document.querySelector('.yoopta-action-menu-list')) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        const position = {
            left: containerRect.left + containerRect.width + 10,
            top: containerRect.top + containerRect.height,
        };
        if (actionMenuRect && position.left + actionMenuRect.width > window.innerWidth) {
            position.left = containerRect.left - actionMenuRect.width - 10;
        }
        if (actionMenuRect && position.top < actionMenuRect.height) {
            position.top = actionMenuRect.height + 20;
        }
        setTurnIntoElementsProps((prevProps) => ({
            open: !prevProps.open,
            style: Object.assign(Object.assign({}, prevProps.style), position),
        }));
    };
    const isVoid = Editor.isVoid(editor, element);
    const onDelete = () => {
        var _a;
        handlers.deleteNode();
        (_a = props.onDelete) === null || _a === void 0 ? void 0 : _a.call(props);
    };
    const onDuplicate = () => {
        var _a;
        handlers.duplicateNode();
        (_a = props.onDuplicate) === null || _a === void 0 ? void 0 : _a.call(props);
    };
    const onCopy = () => {
        var _a;
        handlers.copyLinkNode();
        (_a = props.onCopy) === null || _a === void 0 ? void 0 : _a.call(props);
    };
    const onCloseActionMenu = () => setTurnIntoElementsProps({ style: DEFAULT_TURN_INTO_STYLES, open: false });
    const onToggleActionMenu = () => {
        onCloseActionMenu();
        handlers.closeNodeSettings();
    };
    /* Work in progress */
    // if (render) {
    //   return (
    //     <Overlay onClose={onClose}>
    //       <div style={style} className={s.root}>
    //         {render({ handleDelete: onDelete, handleDuplicate: onDuplicate, handleCopy: onCopy })}
    //       </div>
    //     </Overlay>
    //   );
    // }
    return (jsx$1(Overlay, Object.assign({ onClose: onClose }, { children: jsx$1("div", Object.assign({ style: style, className: cx(s$1.root, 'yoopta-element-options'), ref: containerRef }, { children: jsxs("div", Object.assign({ className: s$1.content }, { children: [turnIntoElementsProps.open && ActionMenu && (jsx$1(Overlay, Object.assign({ onClose: onCloseActionMenu }, { children: ActionMenu && (jsx$1(ActionMenu, { style: turnIntoElementsProps.style, options: { shouldDeleteText: false }, on: { toggle: onToggleActionMenu } })) }))), jsxs("div", Object.assign({ className: s$1.group }, { children: [jsxs("button", Object.assign({ type: "button", className: s$1.item, onClick: onDelete }, { children: [jsx$1("div", Object.assign({ className: s$1.icon }, { children: jsx$1(SvgTrash, {}) })), jsx$1("div", Object.assign({ className: s$1.text }, { children: "Delete" }))] })), jsxs("button", Object.assign({ type: "button", className: s$1.item, onClick: onDuplicate }, { children: [jsx$1("div", Object.assign({ className: s$1.icon }, { children: jsx$1(SvgDuplicate, {}) })), jsx$1("div", Object.assign({ className: s$1.text }, { children: "Duplicate" }))] })), !isVoid && hasActionMenuAsTool && (jsxs("button", Object.assign({ type: "button", className: s$1.item, onClick: handleTurnInto }, { children: [jsx$1("div", Object.assign({ className: s$1.icon }, { children: jsx$1(SvgTurn, {}) })), jsx$1("div", Object.assign({ className: s$1.text }, { children: "Turn into" }))] }))), jsxs("button", Object.assign({ type: "button", className: s$1.item, onClick: onCopy }, { children: [jsx$1("div", Object.assign({ className: s$1.icon }, { children: jsx$1(SvgCopy, {}) })), jsx$1("div", Object.assign({ className: s$1.text }, { children: "Copy link to block" }))] }))] }))] })) })) })));
};

var css_248z = ".ElementWrapper-module_actions{display:flex;left:-50px;opacity:0;position:absolute;top:2px;transition:opacity .18s ease-in}.ElementWrapper-module_hovered{opacity:1}.ElementWrapper-module_actionButton{all:unset;align-items:center;background-color:inherit;background-color:transparent;border-radius:6px;color:rgba(55,53,47,.35);cursor:pointer;display:flex;height:24px;justify-content:center;margin:0 1px;padding:0;position:relative;transition:background-color .18s cubic-bezier(.4,0,.2,1);width:auto;width:18px}.ElementWrapper-module_actionButton:active,.ElementWrapper-module_actionButton:focus,.ElementWrapper-module_actionButton:hover{background-color:rgba(55,54,47,.08)}.ElementWrapper-module_plusButton{width:24px}.ElementWrapper-module_elementWrapper{position:relative;transition:opacity .18s cubic-bezier(.4,0,.2,1)}.ElementWrapper-module_isDragOver:after{background-color:#007aff;bottom:-7px;content:\"\";height:3px;left:50%;position:absolute;transform:translateX(-50%);width:100%}.ElementWrapper-module_isDragSelf:before{top:-5px}.ElementWrapper-module_isDragSelf:after,.ElementWrapper-module_isDragSelf:before{background-color:inherit;content:\"\";height:3px;left:50%;position:absolute;transform:translateX(-50%);width:100%}.ElementWrapper-module_isDragSelf:after{bottom:-7px}.ElementWrapper-module_isSelected{background:rgba(35,131,226,.14);border-radius:3px;inset:0;opacity:1;pointer-events:none;position:absolute;transition:background-color .18s cubic-bezier(.4,0,.2,1);z-index:81}";
var s = {"actions":"ElementWrapper-module_actions","hovered":"ElementWrapper-module_hovered","actionButton":"ElementWrapper-module_actionButton","plusButton":"ElementWrapper-module_plusButton","elementWrapper":"ElementWrapper-module_elementWrapper","isDragOver":"ElementWrapper-module_isDragOver","isDragSelf":"ElementWrapper-module_isDragSelf","isSelected":"ElementWrapper-module_isSelected"};
styleInject(css_248z);

const ElementActions = ({ element, editor, values, handlers }) => {
    const dragRef = useRef(null);
    const { hoveredElement, isElementOptionsOpen, nodeSettingsPos } = values;
    const { onDragEnd, onDragStart, openNodeSettings, closeNodeSettings, triggerPlusButton } = handlers;
    const onMouseDown = (e) => {
        e.stopPropagation();
        const handler = dragRef.current;
        const targetNode = document.querySelector(`[data-element-id="${element === null || element === void 0 ? void 0 : element.id}"]`);
        const pathNode = ReactEditor.findPath(editor, element);
        const parentNode = Editor.parent(editor, pathNode);
        if (!Element.isElement(element))
            return;
        handler === null || handler === void 0 ? void 0 : handler.setAttribute('draggable', 'false');
        if (targetNode) {
            targetNode.setAttribute('draggable', 'true');
            targetNode.ondragstart = (event) => {
                const from = {
                    path: pathNode,
                    element: { id: element.id, type: element.type },
                    parent: parentNode,
                };
                onDragStart(event, from);
            };
            targetNode.ondragend = onDragEnd;
        }
    };
    const isElementHovered = (hoveredElement === null || hoveredElement === void 0 ? void 0 : hoveredElement.id) === element.id;
    return (jsxs("div", Object.assign({ contentEditable: false, className: cx(s.actions, { [s.hovered]: isElementHovered }, 'yoopta-element-actions') }, { children: [isElementHovered && isElementOptionsOpen && (jsx$1(ElementOptions, { element: element, style: nodeSettingsPos || undefined, onClose: closeNodeSettings })), jsx$1("button", Object.assign({ type: "button", onMouseDown: onMouseDown, className: cx(s.actionButton, s.plusButton, 'yoopta-element-actions-plus'), onClick: () => triggerPlusButton(element) }, { children: jsx$1(SvgPlus, {}) })), jsx$1("button", Object.assign({ type: "button", onMouseDown: onMouseDown, className: cx(s.actionButton, 'yoopta-element-actions-drag'), onClick: () => openNodeSettings(dragRef, element), ref: dragRef }, { children: jsx$1(SvgDrag, {}) }))] })));
};

const ElementWrapper = ({ children, element, attributes, nodeType, render, HTMLAttributes }) => {
    var _a, _b;
    const editor = useSlate();
    const [values, handlers] = useNodeElementSettings();
    const isInline = nodeType === 'inline';
    const { hoverIn, onDrop } = handlers;
    const { dndState, DRAG_MAP } = values;
    const dragState = useMemo(() => {
        var _a, _b;
        if (dndState.from.element === null || dndState.to.element === null) {
            return {
                isDragging: false,
                isDragOver: false,
                isDragSelf: false,
            };
        }
        const isDragging = ((_a = values.dndState.from.element) === null || _a === void 0 ? void 0 : _a.id) === element.id;
        const isDragOver = ((_b = values.dndState.to.element) === null || _b === void 0 ? void 0 : _b.id) === element.id;
        const isDragSelf = isDragging && isDragOver;
        return {
            isDragging,
            isDragOver,
            isDragSelf,
        };
    }, [values.dndState.from, values.dndState.to]);
    const skipSettings = (_a = element.data) === null || _a === void 0 ? void 0 : _a.skipSettings;
    const onMouseEnter = (e) => {
        // [TODO] - here is bug when use turn into
        if (skipSettings)
            return;
        hoverIn(e, element);
    };
    const { isDragging, isDragOver, isDragSelf } = dragState;
    const styles = { opacity: isDragging ? 0.7 : 1 };
    DRAG_MAP.set(element.id, element);
    if (isInline)
        return render({ attributes, element, children, HTMLAttributes });
    return (jsxs("div", Object.assign({ "data-element-id": element.id, "data-element-type": element.type, onMouseEnter: onMouseEnter, onDrop: onDrop, className: cx(s.elementWrapper, { [s.isDragOver]: isDragOver, [s.isDragSelf]: isDragSelf }), style: styles }, attributes, { children: [skipSettings ? null : jsx$1(ElementActions, { editor: editor, element: element, handlers: handlers, values: values }), render({ attributes, element, children, HTMLAttributes }), ((_b = values.selectedNodeElement) === null || _b === void 0 ? void 0 : _b.id) === element.id && (jsx$1("div", { className: cx(s.isSelected, 'yoopta-selected-node-element') }))] })));
};
ElementWrapper.displayName = 'ElementWrapper';

var lib = {};

Object.defineProperty(lib, "__esModule", {
  value: true
});

/**
 * Constants.
 */

var IS_MAC = typeof window != 'undefined' && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform);

var MODIFIERS = {
  alt: 'altKey',
  control: 'ctrlKey',
  meta: 'metaKey',
  shift: 'shiftKey'
};

var ALIASES = {
  add: '+',
  break: 'pause',
  cmd: 'meta',
  command: 'meta',
  ctl: 'control',
  ctrl: 'control',
  del: 'delete',
  down: 'arrowdown',
  esc: 'escape',
  ins: 'insert',
  left: 'arrowleft',
  mod: IS_MAC ? 'meta' : 'control',
  opt: 'alt',
  option: 'alt',
  return: 'enter',
  right: 'arrowright',
  space: ' ',
  spacebar: ' ',
  up: 'arrowup',
  win: 'meta',
  windows: 'meta'
};

var CODES = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  control: 17,
  alt: 18,
  pause: 19,
  capslock: 20,
  escape: 27,
  ' ': 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  arrowleft: 37,
  arrowup: 38,
  arrowright: 39,
  arrowdown: 40,
  insert: 45,
  delete: 46,
  meta: 91,
  numlock: 144,
  scrolllock: 145,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  '\'': 222
};

for (var f = 1; f < 20; f++) {
  CODES['f' + f] = 111 + f;
}

/**
 * Is hotkey?
 */

function isHotkey(hotkey, options, event) {
  if (options && !('byKey' in options)) {
    event = options;
    options = null;
  }

  if (!Array.isArray(hotkey)) {
    hotkey = [hotkey];
  }

  var array = hotkey.map(function (string) {
    return parseHotkey(string, options);
  });
  var check = function check(e) {
    return array.some(function (object) {
      return compareHotkey(object, e);
    });
  };
  var ret = event == null ? check : check(event);
  return ret;
}

function isCodeHotkey(hotkey, event) {
  return isHotkey(hotkey, event);
}

function isKeyHotkey(hotkey, event) {
  return isHotkey(hotkey, { byKey: true }, event);
}

/**
 * Parse.
 */

function parseHotkey(hotkey, options) {
  var byKey = options && options.byKey;
  var ret = {};

  // Special case to handle the `+` key since we use it as a separator.
  hotkey = hotkey.replace('++', '+add');
  var values = hotkey.split('+');
  var length = values.length;

  // Ensure that all the modifiers are set to false unless the hotkey has them.

  for (var k in MODIFIERS) {
    ret[MODIFIERS[k]] = false;
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = values[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;

      var optional = value.endsWith('?') && value.length > 1;

      if (optional) {
        value = value.slice(0, -1);
      }

      var name = toKeyName(value);
      var modifier = MODIFIERS[name];

      if (value.length > 1 && !modifier && !ALIASES[value] && !CODES[name]) {
        throw new TypeError('Unknown modifier: "' + value + '"');
      }

      if (length === 1 || !modifier) {
        if (byKey) {
          ret.key = name;
        } else {
          ret.which = toKeyCode(value);
        }
      }

      if (modifier) {
        ret[modifier] = optional ? null : true;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return ret;
}

/**
 * Compare.
 */

function compareHotkey(object, event) {
  for (var key in object) {
    var expected = object[key];
    var actual = void 0;

    if (expected == null) {
      continue;
    }

    if (key === 'key' && event.key != null) {
      actual = event.key.toLowerCase();
    } else if (key === 'which') {
      actual = expected === 91 && event.which === 93 ? 91 : event.which;
    } else {
      actual = event[key];
    }

    if (actual == null && expected === false) {
      continue;
    }

    if (actual !== expected) {
      return false;
    }
  }

  return true;
}

/**
 * Utils.
 */

function toKeyCode(name) {
  name = toKeyName(name);
  var code = CODES[name] || name.toUpperCase().charCodeAt(0);
  return code;
}

function toKeyName(name) {
  name = name.toLowerCase();
  name = ALIASES[name] || name;
  return name;
}

/**
 * Export.
 */

lib.default = isHotkey;
var isHotkey_1 = lib.isHotkey = isHotkey;
var isCodeHotkey_1 = lib.isCodeHotkey = isCodeHotkey;
var isKeyHotkey_1 = lib.isKeyHotkey = isKeyHotkey;
lib.parseHotkey = parseHotkey;
lib.compareHotkey = compareHotkey;
lib.toKeyCode = toKeyCode;
lib.toKeyName = toKeyName;

const HOTKEYS_MAP = {
    bold: 'mod+b',
    italic: 'mod+i',
    compose: ['down', 'left', 'right', 'up', 'backspace', 'enter'],
    arrowLeft: 'left',
    arrowUp: 'up',
    arrowDown: 'down',
    arrowRight: 'right',
    ctrlLeft: 'ctrl+left',
    escape: 'esc',
    ctrlRight: 'ctrl+right',
    deleteBackward: 'shift?+backspace',
    backspace: 'backspace',
    deleteForward: 'shift?+delete',
    extendBackward: 'shift+left',
    extendForward: 'shift+right',
    shiftEnter: 'shift+enter',
    enter: 'enter',
    space: 'space',
    undo: 'mod+z',
    select: 'mod+a',
    shiftTab: 'shift+tab',
    tab: 'tab',
    cmd: 'mod',
    cmdEnter: 'mod+enter',
    kekCeburek: 'mod+enter',
};
const APPLE_HOTKEYS = {
    moveLineBackward: 'opt+up',
    moveLineForward: 'opt+down',
    ctrlLeft: 'opt+left',
    ctrlRight: 'opt+right',
    deleteBackward: ['ctrl+backspace', 'ctrl+h'],
    deleteForward: ['ctrl+delete', 'ctrl+d'],
    deleteLineBackward: 'cmd+shift?+backspace',
    deleteLineForward: ['cmd+shift?+delete', 'ctrl+k'],
    deleteWordBackward: 'opt+shift?+backspace',
    deleteWordForward: 'opt+shift?+delete',
    extendLineBackward: 'opt+shift+up',
    extendLineForward: 'opt+shift+down',
    redo: 'cmd+shift+z',
    transposeCharacter: 'ctrl+t',
};
const WINDOWS_HOTKEYS = {
    deleteWordBackward: 'ctrl+shift?+backspace',
    deleteWordForward: 'ctrl+shift?+delete',
    redo: ['ctrl+y', 'ctrl+shift+z'],
};
const create = (key) => {
    const generic = HOTKEYS_MAP[key];
    const apple = APPLE_HOTKEYS[key];
    const windows = WINDOWS_HOTKEYS[key];
    const isGeneric = generic && isKeyHotkey_1(generic);
    const isApple = apple && isKeyHotkey_1(apple);
    const isWindows = windows && isKeyHotkey_1(windows);
    return (event) => {
        if (isGeneric && isGeneric(event))
            return true;
        if (isApple && isApple(event))
            return true;
        if (isWindows && isWindows(event))
            return true;
        return false;
    };
};
const HOTKEYS = {
    isBold: create('bold'),
    isCompose: create('compose'),
    isArrowLeft: create('arrowLeft'),
    isArrowRight: create('arrowRight'),
    isArrowUp: create('arrowUp'),
    isArrowDown: create('arrowDown'),
    isDeleteBackward: create('deleteBackward'),
    isDeleteForward: create('deleteForward'),
    isDeleteLineBackward: create('deleteLineBackward'),
    isDeleteLineForward: create('deleteLineForward'),
    isDeleteWordBackward: create('deleteWordBackward'),
    isDeleteWordForward: create('deleteWordForward'),
    isExtendBackward: create('extendBackward'),
    isExtendForward: create('extendForward'),
    isExtendLineBackward: create('extendLineBackward'),
    isExtendLineForward: create('extendLineForward'),
    isItalic: create('italic'),
    isMoveLineBackward: create('moveLineBackward'),
    isMoveLineForward: create('moveLineForward'),
    isCtrlLeft: create('ctrlLeft'),
    isCtrlRight: create('ctrlRight'),
    isRedo: create('redo'),
    isShiftEnter: create('shiftEnter'),
    isEnter: create('enter'),
    isTransposeCharacter: create('transposeCharacter'),
    isUndo: create('undo'),
    isSpace: create('space'),
    isSelect: create('select'),
    isTab: create('tab'),
    isShiftTab: create('shiftTab'),
    isBackspace: create('backspace'),
    isCmdEnter: create('cmdEnter'),
    isCmd: create('cmd'),
    isEscape: create('escape'),
    isKekceburek: create('kekCeburek'),
};

const getMatchedNode = (editor, type) => {
    const { selection } = editor;
    if (!selection)
        return false;
    const [match] = Array.from(Editor.nodes(editor, {
        at: Editor.unhangRange(editor, selection),
        match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === type,
    }));
    return match;
};
const isElementActive = (editor, type) => !!getMatchedNode(editor, type);
const getElementByPath = (editor, path, mode = 'lowest') => {
    var _a;
    const nodeEntry = Array.from(Editor.nodes(editor, {
        match: (node) => Editor.isEditor(editor) && Element.isElement(node),
        at: path || ((_a = editor.selection) === null || _a === void 0 ? void 0 : _a.anchor.path),
        mode,
    }))[0];
    if (nodeEntry)
        return nodeEntry[0];
    return editor.children[0];
};

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}
function serializeNode(node, plugins) {
    var _a, _b;
    if (Text.isText(node)) {
        return escapeHtml(node.text);
    }
    const children = node.children.map((node) => serializeNode(node, plugins)).join('');
    const plugin = plugins[node.type];
    if (typeof ((_b = (_a = plugin.exports) === null || _a === void 0 ? void 0 : _a.html) === null || _b === void 0 ? void 0 : _b.serialize) === 'function') {
        return plugin.exports.html.serialize(node, children);
    }
    return children;
}
function serializeHtml(data, pluginsMap) {
    const html = data.map((node) => serializeNode(node, pluginsMap)).join('');
    return html;
}

const EDITOR_STYLES = {
    outline: 'none',
};
// [TODO] - defaultNode move to common event handler to avoid repeated id's
const eventHandlersOptions = { hotkeys: HOTKEYS, defaultNode: getDefaultParagraphLine(generateId()) };
const EditorYoopta = ({ editor, placeholder, marks, readOnly, plugins, className, PLUGINS_MAP, // tools,
 }) => {
    useScrollToElement();
    const editorRef = useRef(null);
    const [{ disableWhileDrag }, { changeHoveredNode }] = useNodeElementSettings();
    const tools = useTools();
    const { ActionMenu, Toolbar } = tools || {};
    const isReadOnly = disableWhileDrag || readOnly;
    const renderElement = useMemo(() => {
        return (props) => {
            var _a;
            const plugin = PLUGINS_MAP[props.element.type];
            if (!plugin)
                return null;
            const renderFn = getRenderFunctionFactory(plugin)(editor, plugin);
            return (jsx$1(ElementWrapper, Object.assign({ element: props.element, attributes: props.attributes, nodeType: props.element.nodeType, render: renderFn, HTMLAttributes: (_a = plugin.options) === null || _a === void 0 ? void 0 : _a.HTMLAttributes }, { children: props.children })));
        };
    }, [plugins, editor]);
    const decorate = useMemo(() => {
        return (nodeEntry) => {
            // [TODO] - fix types
            const ranges = [];
            const [node, path] = nodeEntry;
            plugins.forEach((plugin) => {
                const decoratorFn = plugin.decorator;
                if (typeof decoratorFn === 'function' && Element.isElement(node) && node.type === plugin.type) {
                    ranges.push(...decoratorFn(editor)(nodeEntry));
                }
            });
            if (editor.selection) {
                if (!Editor.isEditor(node) &&
                    Editor.string(editor, [path[0]]) === '' &&
                    Range.includes(editor.selection, path) &&
                    Range.isCollapsed(editor.selection)) {
                    ranges.push(Object.assign(Object.assign({}, editor.selection), { withPlaceholder: true }));
                }
            }
            return ranges;
        };
    }, [plugins, editor]);
    const renderLeaf = useMemo(() => {
        return (leafProps) => {
            var _a;
            const props = Object.assign({}, leafProps);
            plugins.forEach((plugin) => {
                if (plugin.leaf) {
                    const leafChildren = plugin.leaf(editor)(props);
                    if (leafChildren)
                        props.children = leafChildren;
                }
            });
            marks === null || marks === void 0 ? void 0 : marks.forEach((mark) => {
                if (props.leaf[mark.type]) {
                    props.children = mark.render(props);
                }
            });
            let textPlaceholder;
            const parentElement = (_a = props.children.props) === null || _a === void 0 ? void 0 : _a.parent;
            if (!isElementHasText(parentElement)) {
                const parentPlugin = PLUGINS_MAP[parentElement === null || parentElement === void 0 ? void 0 : parentElement.type];
                textPlaceholder = (parentPlugin === null || parentPlugin === void 0 ? void 0 : parentPlugin.placeholder) === null ? null : (parentPlugin === null || parentPlugin === void 0 ? void 0 : parentPlugin.placeholder) || placeholder;
            }
            return jsx$1(TextLeaf, Object.assign({}, props, { placeholder: textPlaceholder }));
        };
    }, [plugins, editor]);
    const eventHandlers = useMemo(() => {
        const events = plugins
            .map((plugin) => Object.keys(plugin.events || {}))
            .flat()
            .filter((event, i, self) => self.indexOf(event) === i);
        const eventHandlersMap = {};
        events.forEach((eventType) => {
            eventHandlersMap[eventType] = function handler(event) {
                plugins.forEach((plugin) => {
                    var _a;
                    if ((_a = plugin.events) === null || _a === void 0 ? void 0 : _a[eventType]) {
                        const eventHandler = plugin.events[eventType](editor, eventHandlersOptions);
                        eventHandler(event);
                    }
                });
            };
        });
        return eventHandlersMap;
    }, [plugins, editor]);
    const onKeyDown = useCallback((event) => {
        Editor.withoutNormalizing(editor, () => {
            var _a;
            if (!editor.selection)
                return;
            const defaultNode = getDefaultParagraphLine(generateId());
            // // Check if all selected nodes should be deleted
            // if (HOTKEYS.isBackspace(event)) {
            //   const [, firstElementPath] = Editor.first(editor, [0]);
            //   const [, lastElementPath] = Editor.last(editor, [editor.children.length - 1]);
            //   const fullRange = Editor.range(editor, firstElementPath, lastElementPath);
            //   const isAllNodesSelected = Range.equals(editor.selection, fullRange);
            //   if (isAllNodesSelected) {
            //     event.preventDefault();
            //     // Editor.deleteFragment(editor);
            //     return;
            //   }
            // }
            marks === null || marks === void 0 ? void 0 : marks.forEach((mark) => {
                if (mark.hotkey && isKeyHotkey_1(mark.hotkey)(event)) {
                    event.preventDefault();
                    toggleMark(editor, mark.type, false);
                }
            });
            (_a = eventHandlers.onKeyDown) === null || _a === void 0 ? void 0 : _a.call(eventHandlers, event);
            const nodeEntry = Editor.above(editor, {
                match: (n) => !Editor.isEditor(n),
                mode: 'lowest',
            });
            if (HOTKEYS.isEnter(event)) {
                if (event.isDefaultPrevented())
                    return;
                event.preventDefault();
                const marks = Object.keys(Editor.marks(editor) || {});
                if (marks.length > 0)
                    marks.forEach((mark) => Editor.removeMark(editor, mark));
                const parentPath = Path.parent(editor.selection.anchor.path);
                const text = Editor.string(editor, parentPath);
                const isDefaultNode = nodeEntry && nodeEntry[0].type !== defaultNode.type;
                if (isDefaultNode && text.length === 0) {
                    Transforms.setNodes(editor, defaultNode, {
                        at: parentPath,
                    });
                    return;
                }
                const isStart = Editor.isStart(editor, editor.selection.anchor, editor.selection.anchor.path);
                if (isStart && isDefaultNode) {
                    const [currentNode] = nodeEntry;
                    Transforms.setNodes(editor, defaultNode, { at: parentPath });
                    Transforms.delete(editor, { unit: 'block' });
                    Transforms.insertNodes(editor, deepClone(currentNode), { at: Path.next(parentPath) });
                    Transforms.select(editor, { path: [Path.next(editor.selection.anchor.path)[0] + 1, 0], offset: 0 });
                    return;
                }
                Transforms.splitNodes(editor, { always: true });
                Transforms.setNodes(editor, defaultNode);
                changeHoveredNode(defaultNode);
                return;
            }
            if (HOTKEYS.isShiftEnter(event)) {
                if (event.isDefaultPrevented())
                    return;
                event.preventDefault();
                editor.insertText('\n');
            }
            if (HOTKEYS.isSelect(event)) {
                if (event.isDefaultPrevented())
                    return;
                event.preventDefault();
                const nodeEntry = Editor.above(editor, {
                    at: editor.selection.anchor.path,
                    match: (n) => !Editor.isEditor(n) && Element.isElement(n),
                });
                if (!nodeEntry)
                    return;
                const text = Editor.string(editor, nodeEntry[1]);
                if (Range.isExpanded(editor.selection) || text.length === 0) {
                    Transforms.select(editor, []);
                    return;
                }
                // [TODO] - check if is inline node
                Transforms.select(editor, nodeEntry[1]);
                return;
            }
        });
    }, []);
    const handleEmptyZoneClick = (e) => {
        if (readOnly)
            return;
        e.preventDefault();
        if (e.currentTarget !== e.target || !editor.selection)
            return;
        Editor.withoutNormalizing(editor, () => {
            const lastPath = [editor.children.length - 1, 0];
            const lastNode = getElementByPath(editor, lastPath, 'highest');
            const lastNodeText = Editor.string(editor, lastPath);
            const location = {
                anchor: { path: lastPath, offset: 0 },
                focus: { path: lastPath, offset: 0 },
            };
            if (lastNode.type === 'paragraph' && lastNodeText.length === 0) {
                Transforms.select(editor, {
                    path: location.anchor.path,
                    offset: 0,
                });
                changeHoveredNode(lastNode);
                return ReactEditor.focus(editor);
            }
            const lineParagraph = getDefaultParagraphLine(generateId());
            changeHoveredNode(lineParagraph);
            Transforms.insertNodes(editor, lineParagraph, {
                at: [editor.children.length],
                select: true,
            });
            ReactEditor.focus(editor);
        });
    };
    const stopPropagation = (e) => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
    };
    const onMouseDown = (e) => {
        var _a;
        (_a = eventHandlers.onMouseDown) === null || _a === void 0 ? void 0 : _a.call(eventHandlers, e);
        stopPropagation(e);
    };
    const onCopy = (event) => {
        if (!editor.selection)
            return;
        const selectedFragment = Editor.fragment(editor, editor.selection);
        const parsedHTML = serializeHtml(selectedFragment, editor.plugins);
        event.clipboardData.setData('text/html', parsedHTML);
        return event.clipboardData;
    };
    return (jsxs("div", Object.assign({ id: "yoopta-editor", className: className, ref: editorRef, onMouseDown: handleEmptyZoneClick }, { children: [!!ActionMenu && jsx$1(ActionMenu, {}), !!Toolbar && jsx$1(Toolbar, {}), jsx$1(Editable, Object.assign({ id: "yoopta-contenteditable", renderLeaf: renderLeaf, renderElement: renderElement, readOnly: isReadOnly, decorate: decorate, onCopy: onCopy, spellCheck: true }, eventHandlers, { onKeyDown: onKeyDown, onMouseDown: onMouseDown, style: EDITOR_STYLES }))] })));
};

const withVoidNodes = (editor) => {
    const { insertBreak, deleteBackward } = editor;
    editor.insertBreak = () => {
        if (!editor.selection || !Range.isCollapsed(editor.selection)) {
            return insertBreak();
        }
        const selectedNodePath = Path.parent(editor.selection.anchor.path);
        const selectedNode = Node.get(editor, selectedNodePath);
        if (Element.isElement(selectedNode) && Editor.isVoid(editor, selectedNode)) {
            Editor.insertNode(editor, {
                id: generateId(),
                type: 'paragraph',
                children: [{ text: '' }],
                nodeType: 'block',
            });
            return;
        }
        insertBreak();
    };
    // if prev node is a void node, remove the current node and select the void node
    editor.deleteBackward = (unit) => {
        if (!editor.selection || !Range.isCollapsed(editor.selection) || editor.selection.anchor.offset !== 0) {
            return deleteBackward(unit);
        }
        const parentPath = Path.parent(editor.selection.anchor.path);
        const parentNode = Node.get(editor, parentPath);
        const parentIsEmpty = Node.string(parentNode).length === 0;
        if (parentIsEmpty && Path.hasPrevious(parentPath)) {
            const prevNodePath = Path.previous(parentPath);
            const prevNode = Node.get(editor, prevNodePath);
            if (Element.isElement(prevNode) && Editor.isVoid(editor, prevNode)) {
                Transforms.removeNodes(editor);
                return Transforms.select(editor, prevNodePath);
            }
        }
        deleteBackward(unit);
    };
    return editor;
};

const withShortcuts = (editor) => {
    const { insertText } = editor;
    editor.insertText = (text) => {
        var _a, _b;
        const { selection } = editor;
        if (text === ' ' && selection && Range.isCollapsed(selection)) {
            const { anchor } = selection;
            const blockEntry = Editor.above(editor, {
                match: (n) => Element.isElement(n) && Editor.isBlock(editor, n),
                mode: 'lowest',
            });
            if (!blockEntry)
                return;
            const [, currentNodePath] = blockEntry;
            const parentEntry = Editor.parent(editor, currentNodePath);
            const [parentNodeElement] = parentEntry;
            if (Element.isElement(parentNodeElement) && !Text.isText(parentNodeElement.children[0]))
                return insertText(text);
            const path = blockEntry ? currentNodePath : [];
            const start = Editor.start(editor, path);
            const range = { anchor, focus: start };
            const beforeText = Editor.string(editor, range);
            const mathchedPlugin = (_a = editor.shortcuts) === null || _a === void 0 ? void 0 : _a[beforeText];
            if (!!mathchedPlugin) {
                Transforms.select(editor, range);
                Transforms.delete(editor);
                (_b = mathchedPlugin.createElement) === null || _b === void 0 ? void 0 : _b.call(mathchedPlugin, editor);
                return;
            }
        }
        insertText(text);
    };
    return editor;
};

const withNonEmptyEditor = (editor) => {
    const { normalizeNode } = editor;
    editor.normalizeNode = (entry) => {
        const [node] = entry;
        if (Editor.isEditor(node) && editor.children.length === 0) {
            const defaultNode = getDefaultParagraphLine(generateId());
            Transforms.insertNodes(editor, defaultNode, {
                at: [0],
            });
            return;
        }
        normalizeNode(entry);
    };
    return editor;
};

const withDeleteFragment = (editor) => {
    const { deleteFragment } = editor;
    // Fixes https://github.com/ianstormtaylor/slate/issues/3605
    editor.deleteFragment = () => {
        const { selection } = editor;
        if (!selection)
            return;
        const [, firstElementPath] = Editor.first(editor, [0]);
        const [, lastElementPath] = Editor.last(editor, [editor.children.length - 1]);
        const fullRange = Editor.range(editor, firstElementPath, lastElementPath);
        const isAllNodesSelected = Range.equals(selection, fullRange);
        if (isAllNodesSelected) {
            Transforms.removeNodes(editor, { mode: 'highest', hanging: true });
            Transforms.select(editor, [0]);
            return;
        }
        deleteFragment();
    };
    return editor;
};

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/**
 * A weak map to hold anchor tokens.
 */
var ANCHOR = new WeakMap();
/**
 * A weak map to hold focus tokens.
 */

var FOCUS = new WeakMap();
/**
 * All tokens inherit from a single constructor for `instanceof` checking.
 */

class Token {}
/**
 * Anchor tokens represent the selection's anchor point.
 */

class AnchorToken extends Token {
  constructor() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super();
    var {
      offset,
      path
    } = props;
    this.offset = offset;
    this.path = path;
  }

}
/**
 * Focus tokens represent the selection's focus point.
 */

class FocusToken extends Token {
  constructor() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super();
    var {
      offset,
      path
    } = props;
    this.offset = offset;
    this.path = path;
  }

}
/**
 * Add an anchor token to the end of a text node.
 */

var addAnchorToken = (text, token) => {
  var offset = text.text.length;
  ANCHOR.set(text, [offset, token]);
};
/**
 * Get the offset if a text node has an associated anchor token.
 */

var getAnchorOffset = text => {
  return ANCHOR.get(text);
};
/**
 * Add a focus token to the end of a text node.
 */

var addFocusToken = (text, token) => {
  var offset = text.text.length;
  FOCUS.set(text, [offset, token]);
};
/**
 * Get the offset if a text node has an associated focus token.
 */

var getFocusOffset = text => {
  return FOCUS.get(text);
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/**
 * Resolve the descedants of a node by normalizing the children that can be
 * passed into a hyperscript creator function.
 */

var STRINGS = new WeakSet();

var resolveDescendants = children => {
  var nodes = [];

  var addChild = child => {
    if (child == null) {
      return;
    }

    var prev = nodes[nodes.length - 1];

    if (typeof child === 'string') {
      var text = {
        text: child
      };
      STRINGS.add(text);
      child = text;
    }

    if (Text.isText(child)) {
      var c = child; // HACK: fix typescript complaining

      if (Text.isText(prev) && STRINGS.has(prev) && STRINGS.has(c) && Text.equals(prev, c, {
        loose: true
      })) {
        prev.text += c.text;
      } else {
        nodes.push(c);
      }
    } else if (Element.isElement(child)) {
      nodes.push(child);
    } else if (child instanceof Token) {
      var n = nodes[nodes.length - 1];

      if (!Text.isText(n)) {
        addChild('');
        n = nodes[nodes.length - 1];
      }

      if (child instanceof AnchorToken) {
        addAnchorToken(n, child);
      } else if (child instanceof FocusToken) {
        addFocusToken(n, child);
      }
    } else {
      throw new Error("Unexpected hyperscript child object: ".concat(child));
    }
  };

  for (var child of children.flat(Infinity)) {
    addChild(child);
  }

  return nodes;
};
/**
 * Create an anchor token.
 */


function createAnchor(tagName, attributes, children) {
  return new AnchorToken(attributes);
}
/**
 * Create an anchor and a focus token.
 */

function createCursor(tagName, attributes, children) {
  return [new AnchorToken(attributes), new FocusToken(attributes)];
}
/**
 * Create an `Element` object.
 */

function createElement(tagName, attributes, children) {
  return _objectSpread$1(_objectSpread$1({}, attributes), {}, {
    children: resolveDescendants(children)
  });
}
/**
 * Create a focus token.
 */

function createFocus(tagName, attributes, children) {
  return new FocusToken(attributes);
}
/**
 * Create a fragment.
 */

function createFragment(tagName, attributes, children) {
  return resolveDescendants(children);
}
/**
 * Create a `Selection` object.
 */

function createSelection(tagName, attributes, children) {
  var anchor = children.find(c => c instanceof AnchorToken);
  var focus = children.find(c => c instanceof FocusToken);

  if (!anchor || anchor.offset == null || anchor.path == null) {
    throw new Error("The <selection> hyperscript tag must have an <anchor> tag as a child with `path` and `offset` attributes defined.");
  }

  if (!focus || focus.offset == null || focus.path == null) {
    throw new Error("The <selection> hyperscript tag must have a <focus> tag as a child with `path` and `offset` attributes defined.");
  }

  return _objectSpread$1({
    anchor: {
      offset: anchor.offset,
      path: anchor.path
    },
    focus: {
      offset: focus.offset,
      path: focus.path
    }
  }, attributes);
}
/**
 * Create a `Text` object.
 */

function createText(tagName, attributes, children) {
  var nodes = resolveDescendants(children);

  if (nodes.length > 1) {
    throw new Error("The <text> hyperscript tag must only contain a single node's worth of children.");
  }

  var [node] = nodes;

  if (node == null) {
    node = {
      text: ''
    };
  }

  if (!Text.isText(node)) {
    throw new Error("\n    The <text> hyperscript tag can only contain text content as children.");
  } // COMPAT: If they used the <text> tag we want to guarantee that it won't be
  // merge with other string children.


  STRINGS.delete(node);
  Object.assign(node, attributes);
  return node;
}
/**
 * Create a top-level `Editor` object.
 */

var createEditor = makeEditor => (tagName, attributes, children) => {
  var otherChildren = [];
  var selectionChild;

  for (var child of children) {
    if (Range.isRange(child)) {
      selectionChild = child;
    } else {
      otherChildren.push(child);
    }
  }

  var descendants = resolveDescendants(otherChildren);
  var selection = {};
  var editor = makeEditor();
  Object.assign(editor, attributes);
  editor.children = descendants; // Search the document's texts to see if any of them have tokens associated
  // that need incorporated into the selection.

  for (var [node, path] of Node.texts(editor)) {
    var anchor = getAnchorOffset(node);
    var focus = getFocusOffset(node);

    if (anchor != null) {
      var [offset] = anchor;
      selection.anchor = {
        path,
        offset
      };
    }

    if (focus != null) {
      var [_offset] = focus;
      selection.focus = {
        path,
        offset: _offset
      };
    }
  }

  if (selection.anchor && !selection.focus) {
    throw new Error("Slate hyperscript ranges must have both `<anchor />` and `<focus />` defined if one is defined, but you only defined `<anchor />`. For collapsed selections, use `<cursor />` instead.");
  }

  if (!selection.anchor && selection.focus) {
    throw new Error("Slate hyperscript ranges must have both `<anchor />` and `<focus />` defined if one is defined, but you only defined `<focus />`. For collapsed selections, use `<cursor />` instead.");
  }

  if (selectionChild != null) {
    editor.selection = selectionChild;
  } else if (Range.isRange(selection)) {
    editor.selection = selection;
  }

  return editor;
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
/**
 * The default creators for Slate objects.
 */

var DEFAULT_CREATORS = {
  anchor: createAnchor,
  cursor: createCursor,
  editor: createEditor(createEditor$1),
  element: createElement,
  focus: createFocus,
  fragment: createFragment,
  selection: createSelection,
  text: createText
};
/**
 * Create a Slate hyperscript function with `options`.
 */

var createHyperscript = function createHyperscript() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var {
    elements = {}
  } = options;
  var elementCreators = normalizeElements(elements);

  var creators = _objectSpread(_objectSpread(_objectSpread({}, DEFAULT_CREATORS), elementCreators), options.creators);

  var jsx = createFactory(creators);
  return jsx;
};
/**
 * Create a Slate hyperscript function with `options`.
 */


var createFactory = creators => {
  var jsx = function jsx(tagName, attributes) {
    for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      children[_key - 2] = arguments[_key];
    }

    var creator = creators[tagName];

    if (!creator) {
      throw new Error("No hyperscript creator found for tag: <".concat(tagName, ">"));
    }

    if (attributes == null) {
      attributes = {};
    }

    if (!isPlainObject(attributes)) {
      children = [attributes].concat(children);
      attributes = {};
    }

    children = children.filter(child => Boolean(child)).flat();
    var ret = creator(tagName, attributes, children);
    return ret;
  };

  return jsx;
};
/**
 * Normalize a dictionary of element shorthands into creator functions.
 */


var normalizeElements = elements => {
  var creators = {};

  var _loop = function _loop(tagName) {
    var props = elements[tagName];

    if (typeof props !== 'object') {
      throw new Error("Properties specified for a hyperscript shorthand should be an object, but for the custom element <".concat(tagName, ">  tag you passed: ").concat(props));
    }

    creators[tagName] = (tagName, attributes, children) => {
      return createElement('element', _objectSpread(_objectSpread({}, props), attributes), children);
    };
  };

  for (var tagName in elements) {
    _loop(tagName);
  }

  return creators;
};

/**
 * The default hyperscript factory that ships with Slate, without custom tags.
 */

var jsx = createHyperscript();

const TEXT_FORMAT_TAGS = {
    // CODE: () => ({ code: true }),
    DEL: () => ({ strikethrough: true }),
    EM: () => ({ italic: true }),
    I: () => ({ italic: true }),
    S: () => ({ strikethrough: true }),
    STRONG: () => ({ bold: true }),
    U: () => ({ underline: true }),
};
// Sometimes when you copy/paste from external resources, the HTML is not well formatted and deserialize function will return a list of Text nodes.
// This function will check if all nodes are Text nodes or Inline nodes.
const isAllInlineOrTextNodes = (nodes) => {
    return nodes.every((item) => (Text.isText(item) && item.text.length > 0) || (Element.isElement(item) && item.nodeType === 'inline'));
};
const deserialize = (el, pluginsMap) => {
    var _a, _b, _c, _d, _e;
    if (el.nodeType === 3) {
        return (_a = el.textContent) === null || _a === void 0 ? void 0 : _a.replace(/[\t\n\r\f\v]+/g, ' ');
    }
    else if (el.nodeType !== 1) {
        return null;
    }
    else if (el.nodeName === 'BR') {
        return '\n';
    }
    const { nodeName } = el;
    let parent = el;
    let children = Array.from(parent.childNodes)
        .map((node) => deserialize(node, pluginsMap))
        .flat();
    if (children.length === 0) {
        children = [{ text: '' }];
    }
    if (el.nodeName === 'BODY') {
        return jsx('fragment', {}, children);
    }
    if (pluginsMap[nodeName]) {
        const plugin = pluginsMap[nodeName];
        if (plugin) {
            let node = plugin.defineElement();
            if (typeof ((_c = (_b = plugin.exports) === null || _b === void 0 ? void 0 : _b.html.deserialize) === null || _c === void 0 ? void 0 : _c.parse) === 'function') {
                const data = (_e = (_d = plugin.exports) === null || _d === void 0 ? void 0 : _d.html.deserialize) === null || _e === void 0 ? void 0 : _e.parse(el);
                node = Object.assign(Object.assign({}, node), { data });
            }
            return jsx('element', node, children);
        }
    }
    if (Text.isTextList(children)) {
        children = children.filter((child) => child.text !== '');
        if (children.length > 0)
            return jsx('element', pluginsMap.P.defineElement(), children);
    }
    if (TEXT_FORMAT_TAGS[nodeName]) {
        const attrs = TEXT_FORMAT_TAGS[nodeName](el);
        const textNodes = children.map((child) => (Text.isText(child) ? jsx('text', attrs, child) : child));
        return textNodes;
    }
    return children;
};
function mergePluginTypesToMapHMTLNodeName(plugins) {
    const PLUGINS_MAP_HTML_NODE_NAMES = {};
    Object.keys(plugins).forEach((pluginKey) => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        const plugin = plugins[pluginKey];
        if ((_b = (_a = plugin.exports) === null || _a === void 0 ? void 0 : _a.html.deserialize) === null || _b === void 0 ? void 0 : _b.nodeName) {
            if (Array.isArray((_d = (_c = plugin.exports) === null || _c === void 0 ? void 0 : _c.html.deserialize) === null || _d === void 0 ? void 0 : _d.nodeName)) {
                (_f = (_e = plugin.exports) === null || _e === void 0 ? void 0 : _e.html.deserialize) === null || _f === void 0 ? void 0 : _f.nodeName.forEach((nodeName) => {
                    PLUGINS_MAP_HTML_NODE_NAMES[nodeName] = plugin;
                });
                return;
            }
            PLUGINS_MAP_HTML_NODE_NAMES[(_h = (_g = plugin.exports) === null || _g === void 0 ? void 0 : _g.html.deserialize) === null || _h === void 0 ? void 0 : _h.nodeName] = plugin;
        }
    });
    return PLUGINS_MAP_HTML_NODE_NAMES;
}
function deserializeHtml(htmlString, plugins) {
    try {
        const pluginsMap = mergePluginTypesToMapHMTLNodeName(plugins);
        const parsedHtml = new DOMParser().parseFromString(htmlString, 'text/html');
        const deserialized = deserialize(parsedHtml.body, pluginsMap);
        if (isAllInlineOrTextNodes(deserialized)) {
            return [jsx('element', pluginsMap.P.defineElement(), deserialized)];
        }
        return deserialized.filter((node) => !Text.isText(node));
    }
    catch (error) {
        console.error(error);
        return null;
    }
}

const withHtml = (editor) => {
    const { insertData } = editor;
    editor.insertData = (data) => {
        if (!editor.selection)
            return;
        const html = data.getData('text/html');
        if (html) {
            const fragment = deserializeHtml(html, editor.plugins);
            Transforms.insertFragment(editor, fragment);
            return;
        }
        insertData(data);
    };
    return editor;
};

const YooptaEditor$1 = ({ key, value, plugins, marks, readOnly, onChange, placeholder, autoFocus = true, offline, className, tools, }) => {
    const storageName = getStorageName(offline);
    const [val, setVal] = useState(() => getInitialState$1(storageName, offline, value));
    const onChangeValue = useCallback((data) => {
        onChange(data);
        setVal(data);
        if (!offline)
            return;
        const hasChanges = editor.operations.some((op) => op.type !== 'set_selection');
        if (hasChanges) {
            try {
                const content = JSON.stringify(data);
                localStorage.setItem(storageName, content);
                // eslint-disable-next-line no-empty
            }
            catch (error) { }
        }
    }, [offline]);
    const yooptaEditorPlugins = useMemo(() => {
        if (!Array.isArray(plugins)) {
            throw new Error('Props `plugins` should be array of plugins');
        }
        if (Array.isArray(plugins) && plugins.length === 0) {
            throw new Error('Props `plugins` cannot be empty. Pass an array of plugins');
        }
        const yooptaPlugins = mergePlugins(plugins);
        const PLUGINS_MAP = mergePluginTypesToMap(yooptaPlugins);
        return { yooptaPlugins, PLUGINS_MAP };
    }, [plugins]);
    const { yooptaPlugins, PLUGINS_MAP } = yooptaEditorPlugins;
    const editor = useMemo(() => {
        let yooptaEditor = withHtml(withDeleteFragment(withNonEmptyEditor(withVoidNodes(withHistory(withShortcuts(withReact(createEditor$1())))))));
        yooptaEditor.plugins = PLUGINS_MAP;
        const shortcutMap = {};
        yooptaPlugins.forEach((plugin) => {
            var _a;
            if (plugin.shortcut) {
                if (Array.isArray(plugin.shortcut)) {
                    plugin.shortcut.forEach((shortcut) => (shortcutMap[shortcut] = plugin));
                }
                else
                    shortcutMap[plugin.shortcut] = plugin;
            }
            yooptaEditor = ((_a = plugin.extendEditor) === null || _a === void 0 ? void 0 : _a.call(plugin, yooptaEditor)) || yooptaEditor;
        });
        yooptaEditor.shortcuts = shortcutMap;
        return yooptaEditor;
    }, [yooptaPlugins]);
    useEffect(() => {
        if (!autoFocus)
            return;
        try {
            const [, path] = Editor.first(editor, [0]);
            Transforms.select(editor, {
                anchor: { path, offset: 0 },
                focus: { path, offset: 0 },
            });
            ReactEditor.focus(editor);
        }
        catch (error) { }
    }, [autoFocus, editor]);
    return (jsx$1(Slate, Object.assign({ editor: editor, initialValue: val, onChange: onChangeValue }, { children: jsx$1(NodeSettingsProvider, { children: jsx$1(YooptaContextProvider, Object.assign({ plugins: yooptaPlugins, marks: marks, tools: tools }, { children: jsx$1(EditorYoopta, { editor: editor, readOnly: readOnly, placeholder: placeholder, plugins: yooptaPlugins, marks: marks, PLUGINS_MAP: PLUGINS_MAP, className: className }) })) }) }), key));
};

const YooptaEditor = (props) => {
    return (jsx$1(NoSSR, { children: jsx$1(YooptaEditor$1, Object.assign({}, props, { value: props.value, onChange: props.onChange })) }));
};

function createYooptaMark({ type, hotkey, className, as }) {
    const freezed = Object.freeze({
        type,
        hotkey,
        render: (props) => {
            const Node = as || 'span';
            return (jsx$1(Node, Object.assign({}, props.attributes, { className: cx(className, `yoopta-leaf-${type}`) }, { children: props.children })));
        },
    });
    return freezed;
}

function getElementClassname(params) {
    const { element, HTMLAttributes, className } = params;
    return `yoopta-${element.type} ${(HTMLAttributes === null || HTMLAttributes === void 0 ? void 0 : HTMLAttributes.className) || ''} ${className}`;
}

const UI_HELPERS = { ElementOptions, Overlay };

export { HOTKEYS, UI_HELPERS, YooptaPlugin, createYooptaMark, createYooptaPlugin, cx, deepClone, YooptaEditor as default, disableBodyScroll, enableBodyScroll, generateId, getElementByPath, getElementClassname, isCodeHotkey_1 as isCodeHotkey, isElementActive, isHotkey_1 as isHotkey, isKeyHotkey_1 as isKeyHotkey, isValidYooptaNodes, mergePlugins, useElements, useMarks, useNodeElementSettings, useTools, useYoopta };
