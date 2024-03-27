import { MarkerType, type EdgeMarker } from '../../../system';
import React from 'react';
type SymbolProps = Omit<EdgeMarker, 'type'>;
export declare const MarkerSymbols: {
    arrow: ({ color, strokeWidth }: SymbolProps) => React.JSX.Element;
    arrowclosed: ({ color, strokeWidth }: SymbolProps) => React.JSX.Element;
};
export declare function useMarkerSymbol(type: MarkerType): ({ color, strokeWidth }: SymbolProps) => React.JSX.Element;
export {};
