import type { KeyCode } from '../../system';
/**
 * Hook for handling global key events.
 *
 * @internal
 */
export declare function useGlobalKeyHandler({ deleteKeyCode, multiSelectionKeyCode, }: {
    deleteKeyCode: KeyCode | null;
    multiSelectionKeyCode: KeyCode | null;
}): void;
