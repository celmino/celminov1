import { ForEach, HStack, ReactView, Spinner, Text, UIController, UIRouteOutlet, UIView, UIViewBuilder, VStack, cLeading, cTopLeading } from "@tuval/forms";
import { SettingsMenu } from "../views/SettingsMenu";
import { Heading, Button, Table } from "@realmocean/atlaskit";
import { useListDocuments } from "@realmocean/sdk";
import { useRealm } from "@celmino/ui";
import { SelectConnectionTypeDialog } from "./dialogs/SelectConnectionDialog";
import React from "react";



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
                  HStack({ alignment: cLeading })
                    (
                      ReactView(
                        <a href="https://atlassian.design" style={{ fontSize: '14px', color: '#0C66E4' }}>{document.name}</a>
                      )
                    ).padding()
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
              VStack({ alignment: cTopLeading })(
                Heading('Connections'),
                Button().label('Create Connection')
                  .appearance('primary')
                  .onClick(() => {
                    SelectConnectionTypeDialog.Show(realm.$id);
                  }),
                VStack({ alignment: cTopLeading })(
                  Table().rows(rows),
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

                )

              )
            )
          )
        })


    )
  }
}