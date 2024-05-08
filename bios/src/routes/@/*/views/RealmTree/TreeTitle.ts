import { SelectAppletDialog, useAccount, useRealm } from "@celmino/platform";
import { HStack, cLeading, Spacer, Fragment, Icon, Icons, cHorizontal, cVertical, Text, UIViewBuilder } from "@tuval/forms";
import { UpIcon } from "../../../../../assets/Icons";


export const TreeTitle = (title: string,spaceId: string, appletsOpen: boolean, setAppletsOpen: Function) => UIViewBuilder(() => {

    const { isAnonymous } = useAccount();
    const { realm } = useRealm();
    const workspaceId = realm.$id;

    return (
        HStack({ alignment: cLeading })(
            Text(title)
                .fontSize(12)
                .fontWeight('600')
                .foregroundColor('rgb(80, 90, 100)'),
            Spacer(),
            isAnonymous ? Fragment() :
                HStack(
                    Icon(Icons.Add)
                ).width(20)
                    .onClick(() => SelectAppletDialog.Show(workspaceId,'-1', spaceId)),
            HStack(
                Icon(UpIcon)
            ).width(20)
                .onClick(() => setAppletsOpen(!appletsOpen))
        )
            .position('sticky')
            .top('0px')
            .zIndex(10)
            .background({default:'#F7F8F9', hover: 'rgba(22, 102, 223, 0.09999999999999998)' })
            .height(30)
            .padding(cHorizontal, 5)
            .padding(cVertical, 5)
            .zIndex(11)
    )

})