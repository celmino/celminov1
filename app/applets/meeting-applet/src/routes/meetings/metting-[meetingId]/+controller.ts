import { cLeading, cTopLeading, Fragment, HStack, Spacer, Spinner, Text, TextAlignment, UIController, UIRouteOutlet, UIView, UIWidget, urlFriendly, useParams, useState, VStack } from "@tuval/forms";

import { useApplet, useAppletNavigate } from "@celmino/ui";
import { useGetDocument } from "@realmocean/sdk";
import { moment } from "@tuval/core";


const findFirstTopic = (items: any[]) => {
    if (items == null) return null;
    for (let i = 0; i < items.length; i++) {
        if (items[i].type == 'topic') {
            return items[i]
        } else if (items[i].subItems) {
            const found = findFirstTopic(items[i].subItems)
            if (found) {
                return found
            }
        }
    }

    return null;

}

const findDuration = (items: any[], item): [number, boolean] => {

    let sumDuration = 0;
    if (items == null) return null;
    for (let i = 0; i < items.length; i++) {
        if (items[i].type == 'topic' && items[i].id !== item.id && items[i].duration != null) {
            sumDuration += items[i].duration;
        } else if (items[i].id === item.id) {
            return [sumDuration, true];
        } else if (items[i].subItems) {
            const [duration, found] = findDuration(items[i].subItems, item)
            sumDuration += duration;
            if (found) {
                return [sumDuration, true];
            }

        }
    }
    return [sumDuration, false];

}


export class MeetingController extends UIController {

    public LoadView(): UIView {
        const [api, setApi] = useState<any>();
        const { navigate } = useAppletNavigate();
        const [selectedItem, setSelectedItem] = useState<any>();
        const {realm} = useRealm();
        const {applet} = useApplet();
        const workspaceId = realm.$id;
        const appletId = applet.$id;

        const {  meetingId, topicId } = useParams();
        const { document: meeting, isLoading } = useGetDocument({
            projectId: workspaceId,
            databaseId: appletId,
            collectionId: 'meeting',
            documentId: meetingId

        })

        // const { updateMeeting } = useUpdateMeeting();

        const firtsTopic = findFirstTopic(meeting?.sections);

        let sumDuration = 0;
        let durationSetted = false;


        if (firtsTopic && topicId == null) {
            return (
                Text('aaa')
                /*  team_id ?
                     UINavigate(`/@/${getAppFullName()}/team/${team_id}/workspace/${workspace_id}/folder/${folder_id}/applet/${applet_id}/scope/${scope_id}/view/${view_id}/meeting/${meeting_id}/topic/${firtsTopic.id}`)
                     : */
              //  UINavigate(`/meeting-${meetingId}/topic-${firtsTopic.id}`)
            )
        } else

            return (
                isLoading ? Spinner() :
                    VStack({ alignment: cTopLeading })(

                        HStack(
                            VStack({ alignment: cLeading })(
                                Text(`${meeting?.name} on ${moment.utc(meeting?.start_at).local().format('MMM DD, YYYY')}`)
                                    .fontSize(22).fontWeight('700').lineHeight(30)
                                    .fontFamily('Poppins, sans-serif, Helvetica, Arial'),
                                //Monday, August 21, 2023 • 14:30 - 15:30 Bu workspace yeni
                                HStack({ alignment: cLeading, spacing: 5 })(
                                    Text(`${moment.utc(meeting?.start_at).local().format('dddd, MMMM DD, YYYY • HH:mm')}`).fontSize(13).fontWeight('700').lineHeight(26)
                                        .fontFamily('Poppins, sans-serif, Helvetica, Arial'),
                                    Text(`${moment.utc(meeting?.end_at).local().format('- HH:mm')}`).fontSize(13).fontWeight('700').lineHeight(26)
                                        .fontFamily('Poppins, sans-serif, Helvetica, Arial')
                                ).height(),

                            ).maxWidth('95%')
                        )
                            .height(80)
                            //.background('linear-gradient(73deg, rgb(0, 114, 206), rgb(47, 148, 231))'),
                            .background('rgb(240,242,245)')
                            .foregroundColor('#637985'),

                        /* Button(
                            Text('efr')
                        ).onClick(() => {
                            console.log(api)
                            api?.blocks?.insert('checklist')
                            //api.blocks.insert('checklist')
                        }), */
                        HStack({ alignment: cTopLeading })(
                            HStack({ alignment: cTopLeading })(
                                UIWidget("com.tuvalsoft.widget.topictree")
                                    .data({
                                        items: meeting?.sections || []
                                    })
                                    .config({
                                        selectedTopicId: topicId,
                                        topicTemplate: (item) => (
                                            HStack({ alignment: cLeading, spacing: 10 })(
                                                Text(item.name).foregroundColor('#00263A')
                                                    .multilineTextAlignment(TextAlignment.leading)
                                                    .lineHeight('25px')
                                                    .fontSize(15)
                                                    .fontFamily('Poppins, sans-serif, Helvetica, Arial'),
                                                Spacer(),
                                                //item.account_id ?
                                                //AssignUser({ account_id: item.account_id, readonly: true, width: 24, height: 24 }) : HStack().width(24).height(24),

                                                (findDuration(meeting?.sections, item)?.[0] || (item.duration != null && item.duration != 0)) ? meeting.is_template === 1 ?
                                                    item.duration ? Text(`${item.duration}'`).foregroundColor('#00263A') : Fragment() :
                                                    Text(`${moment.utc(meeting.start_at).add(findDuration(meeting?.sections, item)?.[0], 'm').local().format('HH:mm')}`).fontSize(14).fontWeight('700').foregroundColor('rgb(136, 149, 167)') : Fragment()
                                            )
                                        ),
                                        onSelected: (item) => {

                                            /* team_id ?
                                                navigate(`/@/${getAppFullName()}/team/${team_id}/workspace/${workspace_id}/folder/${folder_id}/applet/${applet_id}/scope/${scope_id}/view/${view_id}/meeting/${meeting_id}/topic/${item.id}`)
                                                : */
                                            navigate(`${urlFriendly(meeting.name)}-${meetingId}/${item.name}-${item.id}`);

                                        },
                                        onChange: (items) => {
                                            /* updateMeeting(meeting_id, {
                                                sections: items
                                            }) */

                                        }
                                    }
                                    )
                            )
                                .allWidth(420),
                            UIRouteOutlet().width('100%').height('100%')

                        )

                    ).background('#F8F9FA')




            )
    }
}

function useRealm(): { realm: any; } {
    throw new Error("Function not implemented.");
}
