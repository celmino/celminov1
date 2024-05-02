import { ForEach, HStack, ReactView, Spacer, Spinner, Text, UIController, UIImage, UIRouteOutlet, UIView, UIViewBuilder, VStack, cLeading, cTop, cTopLeading, cVertical } from "@tuval/forms";
import { SettingsMenu } from "../views/SettingsMenu";
import { Heading, Button, Table } from "@realmocean/atlaskit";
import { useListDocuments } from "@realmocean/sdk";
import { useRealm } from "@celmino/ui";
import { SelectConnectionTypeDialog } from "./dialogs/SelectConnectionDialog";
import React from "react";
import { Connectors } from "./dialogs/Connectors";


export const createHead = (withWidth: boolean) => {
  return {
    cells: [

      {
        key: 'name',
        content: 'Name',
        isSortable: true,
        width: withWidth ? 25 : undefined,
      },
      {
        key: 'status',
        content: 'Status',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 15 : undefined,
      },
      {
        key: 'type',
        content: 'Type',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 15 : undefined,
      },
      {
        key: 'term',
        content: 'Term',
        shouldTruncate: true,
        isSortable: true,
        width: withWidth ? 10 : undefined,
      },
      {
        key: 'content',
        content: 'Comment',
        shouldTruncate: true,
      },
      {
        key: 'more',
        content: 'Actions',
        shouldTruncate: true,
      },
    ],
  };
};

export class ConnectionsController extends UIController {
  public override LoadView(): UIView {
    const { realm } = useRealm();
    const { documents, isLoading } = useListDocuments(realm.$id, 'workspace', 'connections');


    return (
      isLoading ? Spinner() :
        UIViewBuilder(() => {
          const rows = documents?.map((document: any, index: number) => ({
            key: document.$id,
            isHighlighted: false,
            cells: [

              {
                key: 'name',
                content: () =>
                  HStack({ alignment: cLeading, spacing: 5 })
                    (
                      HStack(
                        UIImage(Connectors[document.type].image)
                        .imageWidth(32).imageHeight(32)
                      )
                        .width().height(),
                      ReactView(
                        <a href="https://atlassian.design" style={{ fontSize: '14px', color: '#0C66E4' }}>{document.name}</a>
                      )
                    ).padding(cVertical, 10)
              },
              {
                key: 'status',
                content: () =>
                  HStack({ alignment: cLeading, spacing: 10 })
                    (
                      HStack().width(12).height(12).cornerRadius('50%').background('rgb(76, 187, 2)'),
                      Text('Online')
                    )
              },


              {
                key: 'type',
                content: () =>
                  Text(document.type)
              },
              /* {
                key: createKey(president.party),
                content: president.party,
              },
              {
                key: president.id,
                content: president.term,
              },
              {
                key: 'Lorem',
                content: iterateThroughLorem(index),
              },
              {
                key: 'MoreDropdown',
                content: (
                  <DropdownMenu trigger="More" label={`More about ${president.name}`}>
                    <DropdownItemGroup>
                      <DropdownItem>{president.name}</DropdownItem>
                    </DropdownItemGroup>
                  </DropdownMenu>
                ),
              }, */
            ]
          }));

          console.log(rows)
          return (

            HStack({ alignment: cTopLeading })(
              SettingsMenu('connections'),
              HStack({ alignment: cTop })(
                VStack({ alignment: cTopLeading, spacing: 20 })(
                  HStack({ alignment: cLeading })(
                    Heading('Connections').size("large"),
                    Spacer(),
                    Button().label('Create Connection')
                      .appearance('primary')
                      .onClick(() => {
                        SelectConnectionTypeDialog.Show(realm.$id);
                      })
                  ).height(),
                  VStack({ alignment: cTopLeading })(
                    Table().rows(rows)
                      .head(createHead(true) as any)
                    ,
                    /*   ...ForEach(documents)(con => 
                          HStack({alignment:cLeading})(
                              HStack({alignment:cLeading})(
                              Text(con.name)
                              ).height(32).maxWidth(200),
                              HStack({alignment:cLeading})(
                                  Text(con.type)
                                  ).height(32).maxWidth(200)
                          ).height()
                      ) */

                  ).padding()

                )
                .padding(20)
                .maxWidth('1200px')
              )
                
            )


          )
        })


    )
  }
}