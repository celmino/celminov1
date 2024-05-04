export type AIStateType = {
    isAiLoading: boolean;
    aiError?: string | null;
    setIsAiLoading: (isAiLoading: boolean) => void;
    setAiError: (aiError: string | null) => void;
};
export declare const useAIState: () => AIStateType;
