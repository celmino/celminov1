import { ReactView, Spinner, UIController, UIView, UIViewBuilder, VStack, useEffect, useState } from '@tuval/forms';


import { IConfig } from './IConfig';
import { Mermaid, MermaidProps } from './Mermaid';
import React from 'react';
import { LoadingButton } from '@realmocean/atlaskit';
import { useRealm } from '@celmino/ui';
import { Services, useListDocuments } from '@realmocean/sdk';


const mermaidTextList = [
    `graph TD
        Start --> Stop
      `,
    `sequenceDiagram
      participant A as Alice
      participant J as John
      A->>J: Hello John, how are you?
      J->>A: Great!`,
    `gantt
      title A Gantt Diagram
      dateFormat  YYYY-MM-DD
      section Section
      A task           :a1, 2014-01-01, 30d
      Another task     :after a1  , 20d
      section Another
      Task in sec      :2014-01-12  , 12d
      another task      : 24d
    `,
    `sequenceDiagram
      Alice->John: Hello John, how are you?
      Note over Alice,John: A typical interaction`,
    `classDiagram
      Customer "1" --> "*" Ticket
      Student "1" --> "1..*" Course
      Galaxy --> "many" Star : Contains`,
    `stateDiagram-v2
      [*] --> Still
      Still --> [*]
  %% this is a comment
      Still --> Moving
      Moving --> Still %% another comment
      Moving --> Crash
      Crash --> [*]`,
    `erDiagram
      CUSTOMER ||--o{ ORDER : places
      ORDER ||--|{ LINE-ITEM : contains
      CUSTOMER }|..|{ DELIVERY-ADDRESS : uses`,
    `journey
      title My working day
      section Go to work
        Make tea: 5: Me
        Go upstairs: 3: Me
        Do work: 1: Me, Cat
      section Go home
        Go downstairs: 5: Me
        Sit down: 5: Me`,
    `pie
      title Key elements in Product X
      "Calcium" : 42.96
      "Potassium" : 50.05
      "Magnesium" : 10.01
      "Iron" :  5`
];

export class MyTestController extends UIController {
    public override LoadView(): UIView {

        const { realm } = useRealm();
        const { documents: applets, isLoading } = useListDocuments(realm.$id, 'workspace', 'applets');

       

        const { objectId, fields, views = [], powerUps = [], selectedViewIndex = 0, objectViews = [],
            description = null, onDescriptionChange = void 0 }: IConfig = this.props.config || {};




       

        return ( isLoading ? Spinner() :
            UIViewBuilder(() => {
                const [mermaidText, setMermaidText] = useState('');
                const handleUpdate = () => {
                    setMermaidText(
                        mermaidTextList[Math.floor(Math.random() * mermaidTextList.length)]
                    );
                };
        
                const mermaidProps: MermaidProps = {
                    text: mermaidText
                };
        
                const [loaded, setLoaded] = useState(false);
        
                useEffect(() => {
                    if (!loaded) {
                        setLoaded(true);
                        const initialNodes = [];
        
                        let appletsText= '';
                        applets.forEach((applet) => {
                            appletsText += ` 
                            class ${applet.$id}_${applet.name} {
                                +int age
                            }`
                        })
                        Promise.all(applets.map((applet) => Services.Databases.listCollections(realm.$id, applet.$id)))
                            .then(cols => {
                                const collections = [];
                                cols.forEach((col) => {
                                    collections.push(...col.collections)
                                })
                                console.log(collections)
                                setMermaidText(
                                    `classDiagram
                        
                                title Animal example
                                note "From Duck till Zebra"
                                Animal <|-- Duck
                                note for Duck "can fly\ncan swim\ncan dive\ncan help in debugging"
                                Animal <|-- Fish
                                Animal <|-- Zebra
                                Animal : +int age
                                Animal : +String gender
                                Animal: +isMammal()
                                Animal: +mate()
                                class Duck{
                                    +String beakColor
                                    +swim()
                                    +quack()
                                }
                                class Fish{
                                    -int sizeInFeet
                                    -canEat()
                                }
                                class Zebra{
                                    +bool is_wild
                                    +run()
                                }
                                ${appletsText}
                            `)
        
                            })
                    }
                })

                return (
                    VStack(
                        LoadingButton().label('update')
                            .onClick(() => handleUpdate()),
                        ReactView(

                            <Mermaid {...mermaidProps} />
                        )
                    )

                )
            })

        )
    }

}

