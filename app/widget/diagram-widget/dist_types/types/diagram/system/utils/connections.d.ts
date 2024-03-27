import { HandleConnection } from '../types';
/**
 * @internal
 */
export declare function areConnectionMapsEqual(a?: Map<string, HandleConnection>, b?: Map<string, HandleConnection>): boolean;
/**
 * We call the callback for all connections in a that are not in b
 *
 * @internal
 */
export declare function handleConnectionChange(a: Map<string, HandleConnection>, b: Map<string, HandleConnection>, cb?: (diff: HandleConnection[]) => void): void;
