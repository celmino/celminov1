export declare function getDescendantCount({ node, ignoreCollapsed }: {
    node: any;
    ignoreCollapsed?: boolean;
}): number;
/**
 * Count all the visible (expanded) descendants in the tree data.
 *
 * @param {!Object[]} treeData - Tree data
 *
 * @return {number} count
 */
export declare function getVisibleNodeCount({ treeData }: {
    treeData: any;
}): any;
/**
 * Get the <targetIndex>th visible node in the tree data.
 *
 * @param {!Object[]} treeData - Tree data
 * @param {!number} targetIndex - The index of the node to search for
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 *
 * @return {{
 *      node: Object,
 *      path: []string|[]number,
 *      lowerSiblingCounts: []number
 *  }|null} node - The node at targetIndex, or null if not found
 */
export declare function getVisibleNodeInfoAtIndex({ treeData, index: targetIndex, getNodeKey, }: {
    treeData: any;
    index: any;
    getNodeKey: any;
}): any;
/**
 * Walk descendants depth-first and call a callback on each
 *
 * @param {!Object[]} treeData - Tree data
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {function} callback - Function to call on each node
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return void
 */
export declare function walk({ treeData, getNodeKey, callback, ignoreCollapsed, }: {
    treeData: any;
    getNodeKey: any;
    callback: any;
    ignoreCollapsed?: boolean;
}): void;
/**
 * Perform a depth-first transversal of the descendants and
 *  make a change to every node in the tree
 *
 * @param {!Object[]} treeData - Tree data
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {function} callback - Function to call on each node
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return {Object[]} changedTreeData - The changed tree data
 */
export declare function map({ treeData, getNodeKey, callback, ignoreCollapsed, }: {
    treeData: any;
    getNodeKey: any;
    callback: any;
    ignoreCollapsed?: boolean;
}): any;
/**
 * Expand or close every node in the tree
 *
 * @param {!Object[]} treeData - Tree data
 * @param {?boolean} expanded - Whether the node is expanded or not
 *
 * @return {Object[]} changedTreeData - The changed tree data
 */
export declare function toggleExpandedForAll({ treeData, expanded }: {
    treeData: any;
    expanded?: boolean;
}): any;
/**
 * Replaces node at path with object, or callback-defined object
 *
 * @param {!Object[]} treeData
 * @param {number[]|string[]} path - Array of keys leading up to node to be changed
 * @param {function|any} newNode - Node to replace the node at the path with, or a function producing the new node
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return {Object[]} changedTreeData - The changed tree data
 */
export declare function changeNodeAtPath({ treeData, path, newNode, getNodeKey, ignoreCollapsed, }: {
    treeData: any;
    path: any;
    newNode: any;
    getNodeKey: any;
    ignoreCollapsed?: boolean;
}): any;
/**
 * Removes the node at the specified path and returns the resulting treeData.
 *
 * @param {!Object[]} treeData
 * @param {number[]|string[]} path - Array of keys leading up to node to be deleted
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return {Object[]} changedTreeData - The tree data with the node removed
 */
export declare function removeNodeAtPath({ treeData, path, getNodeKey, ignoreCollapsed, }: {
    treeData: any;
    path: any;
    getNodeKey: any;
    ignoreCollapsed?: boolean;
}): any;
/**
 * Removes the node at the specified path and returns the resulting treeData.
 *
 * @param {!Object[]} treeData
 * @param {number[]|string[]} path - Array of keys leading up to node to be deleted
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return {Object} result
 * @return {Object[]} result.treeData - The tree data with the node removed
 * @return {Object} result.node - The node that was removed
 * @return {number} result.treeIndex - The previous treeIndex of the removed node
 */
export declare function removeNode({ treeData, path, getNodeKey, ignoreCollapsed, }: {
    treeData: any;
    path: any;
    getNodeKey: any;
    ignoreCollapsed?: boolean;
}): {
    treeData: any;
    node: any;
    treeIndex: any;
};
/**
 * Gets the node at the specified path
 *
 * @param {!Object[]} treeData
 * @param {number[]|string[]} path - Array of keys leading up to node to be deleted
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return {Object|null} nodeInfo - The node info at the given path, or null if not found
 */
export declare function getNodeAtPath({ treeData, path, getNodeKey, ignoreCollapsed, }: {
    treeData: any;
    path: any;
    getNodeKey: any;
    ignoreCollapsed?: boolean;
}): any;
/**
 * Adds the node to the specified parent and returns the resulting treeData.
 *
 * @param {!Object[]} treeData
 * @param {!Object} newNode - The node to insert
 * @param {number|string} parentKey - The key of the to-be parentNode of the node
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 * @param {boolean=} expandParent - If true, expands the parentNode specified by parentPath
 * @param {boolean=} addAsFirstChild - If true, adds new node as first child of tree
 *
 * @return {Object} result
 * @return {Object[]} result.treeData - The updated tree data
 * @return {number} result.treeIndex - The tree index at which the node was inserted
 */
export declare function addNodeUnderParent({ treeData, newNode, parentKey, getNodeKey, ignoreCollapsed, expandParent, addAsFirstChild, }: {
    treeData: any;
    newNode: any;
    parentKey?: any;
    getNodeKey: any;
    ignoreCollapsed?: boolean;
    expandParent?: boolean;
    addAsFirstChild?: boolean;
}): {
    treeData: any;
    treeIndex: any;
};
/**
 * Insert a node into the tree at the given depth, after the minimum index
 *
 * @param {!Object[]} treeData - Tree data
 * @param {!number} depth - The depth to insert the node at (the first level of the array being depth 0)
 * @param {!number} minimumTreeIndex - The lowest possible treeIndex to insert the node at
 * @param {!Object} newNode - The node to insert into the tree
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 * @param {boolean=} expandParent - If true, expands the parent of the inserted node
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 *
 * @return {Object} result
 * @return {Object[]} result.treeData - The tree data with the node added
 * @return {number} result.treeIndex - The tree index at which the node was inserted
 * @return {number[]|string[]} result.path - Array of keys leading to the node location after insertion
 * @return {Object} result.parentNode - The parent node of the inserted node
 */
export declare function insertNode({ treeData, depth: targetDepth, minimumTreeIndex, newNode, getNodeKey, ignoreCollapsed, expandParent, }: {
    treeData: any;
    depth: any;
    minimumTreeIndex: any;
    newNode: any;
    getNodeKey?: () => void;
    ignoreCollapsed?: boolean;
    expandParent?: boolean;
}): {
    treeData: any;
    treeIndex: any;
    path: any[];
    parentNode: any;
};
/**
 * Get tree data flattened.
 *
 * @param {!Object[]} treeData - Tree data
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {boolean=} ignoreCollapsed - Ignore children of nodes without `expanded` set to `true`
 *
 * @return {{
 *      node: Object,
 *      path: []string|[]number,
 *      lowerSiblingCounts: []number
 *  }}[] nodes - The node array
 */
export declare function getFlatDataFromTree({ treeData, getNodeKey, ignoreCollapsed, }: {
    treeData: any;
    getNodeKey: any;
    ignoreCollapsed?: boolean;
}): any[];
/**
 * Generate a tree structure from flat data.
 *
 * @param {!Object[]} flatData
 * @param {!function=} getKey - Function to get the key from the nodeData
 * @param {!function=} getParentKey - Function to get the parent key from the nodeData
 * @param {string|number=} rootKey - The value returned by `getParentKey` that corresponds to the root node.
 *                                  For example, if your nodes have id 1-99, you might use rootKey = 0
 *
 * @return {Object[]} treeData - The flat data represented as a tree
 */
export declare function getTreeFromFlatData({ flatData, getKey, getParentKey, rootKey, }: {
    flatData: any;
    getKey?: (node: any) => any;
    getParentKey?: (node: any) => any;
    rootKey?: string;
}): any;
/**
 * Check if a node is a descendant of another node.
 *
 * @param {!Object} older - Potential ancestor of younger node
 * @param {!Object} younger - Potential descendant of older node
 *
 * @return {boolean}
 */
export declare function isDescendant(older: any, younger: any): any;
/**
 * Get the maximum depth of the children (the depth of the root node is 0).
 *
 * @param {!Object} node - Node in the tree
 * @param {?number} depth - The current depth
 *
 * @return {number} maxDepth - The deepest depth in the tree
 */
export declare function getDepth(node: any, depth?: number): any;
/**
 * Find nodes matching a search query in the tree,
 *
 * @param {!function} getNodeKey - Function to get the key from the nodeData and tree index
 * @param {!Object[]} treeData - Tree data
 * @param {?string|number} searchQuery - Function returning a boolean to indicate whether the node is a match or not
 * @param {!function} searchMethod - Function returning a boolean to indicate whether the node is a match or not
 * @param {?number} searchFocusOffset - The offset of the match to focus on
 *                                      (e.g., 0 focuses on the first match, 1 on the second)
 * @param {boolean=} expandAllMatchPaths - If true, expands the paths to any matched node
 * @param {boolean=} expandFocusMatchPaths - If true, expands the path to the focused node
 *
 * @return {Object[]} matches - An array of objects containing the matching `node`s, their `path`s and `treeIndex`s
 * @return {Object[]} treeData - The original tree data with all relevant nodes expanded.
 *                               If expandAllMatchPaths and expandFocusMatchPaths are both false,
 *                               it will be the same as the original tree data.
 */
export declare function find({ getNodeKey, treeData, searchQuery, searchMethod, searchFocusOffset, expandAllMatchPaths, expandFocusMatchPaths, }: {
    getNodeKey: any;
    treeData: any;
    searchQuery: any;
    searchMethod: any;
    searchFocusOffset: any;
    expandAllMatchPaths?: boolean;
    expandFocusMatchPaths?: boolean;
}): {
    matches: any[];
    treeData: any;
};
