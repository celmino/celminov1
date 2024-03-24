import {
    Fragment,
    HStack,
    Icon, SvgIcon,
    Text,
    UIFormController,
    UINavigate,
    UIView,
    UIViewBuilder,
    UIWidget,
    VStack,
    cTop,
    cTopLeading,
    urlFriendly,
    useDialogStack
} from "@tuval/forms";


import { SelectSiderDialog, useAccount, useApplet, useRealm } from '@celmino/ui';
import { Query, useCreateDocument, useCreateRelationshipAttribute, useCreateStringAttribute, useListDocuments, useUpdateDocument } from "@realmocean/sdk";
import { AppletTabMenu } from "../../views/AppletTabMenu";
import { ViewsTab } from "./views/ViewsTabMenu";
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
