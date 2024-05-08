
export function replaceNonMatchingCharacters(originalText: string) {
    const replacementTable = {
        'ı': 'i',
        'ç': 'c',
        ' ':'_'
    };

    originalText = originalText.toLocaleLowerCase();
    // Replacement table'ı kullanarak metindeki kriterlere uymayan karakterleri değiştir
    var replacedText = originalText.replace(/[^a-zA-Z0-9._-]/g, function (match) {
        return replacementTable[match] || match; // Eğer replacement table'da varsa değiştir, yoksa aynı karakteri koru
    });

    return replacedText;
}