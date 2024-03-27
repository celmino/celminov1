import { type XYPosition } from '../../system';
/**
 * Hook for updating node positions by passing a direction and factor
 *
 * @internal
 * @returns function for updating node positions
 */
export declare function useMoveSelectedNodes(): (params: {
    direction: XYPosition;
    factor: number;
}) => void;
