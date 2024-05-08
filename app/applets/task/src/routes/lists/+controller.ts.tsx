import {
    Fragment,
    Text,
    UIFormController,
    UINavigate,
    UIView,
    urlFriendly
} from "@tuval/forms";


import { useListViews } from "../../hooks/useListViews";

function replaceNonMatchingCharacters(originalText) {
    const replacementTable = {
        'ı': 'i',
        ' ': '_'
    };
    // Replacement table'ı kullanarak metindeki kriterlere uymayan karakterleri değiştir
    var replacedText = originalText.replace(/[^a-zA-Z0-9._-]/g, function (match) {
        return replacementTable[match] || match; // Eğer replacement table'da varsa değiştir, yoksa aynı karakteri koru
    });

    return replacedText;
}

export class _ListController extends UIFormController {
    LoadView(): UIView {
        return (
            Text('sdf')
        )
    }
}

export class ListController extends UIFormController {
    public LoadView() {
        const { views, isLoading } = useListViews();
        return (
            isLoading ? Fragment() :
                UINavigate(`${urlFriendly(views[0].name)}-${views[0].$id}`)
        )
    }

}
