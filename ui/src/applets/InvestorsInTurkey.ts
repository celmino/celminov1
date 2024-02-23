

export const InvestorsInTurkey = {
    name: 'Investors In Turkey',
    type: 'Data',
    tree_type: 'com.celmino.widget.custom-applet-tree',
    applet_type: 'com.celmino.applet.custom',
    description: 'Documents applet is effortless document management, offering seamless organization and collaboration capabilities. Access, edit, and share documents with ease, enhancing productivity across workspaces.',
    // image: '/images/applets/documents.png',
    iconCategory: 'Icons',
    iconName: 'bell',
    icon: '\\d320',
    iconBackColor: '#66B47C',
    enabled: true,
    databases: [
        {
            "name": "Investors In Turkey",
            "id": "world",
            "category": "app",
            "collections": [
                {
                    "name": "Investers",
                    "id": "investers",
                    "attributes": [
                        {
                            "key": "name",
                            "type": "string"
                        },
                        {
                            "key": "investerType",
                            "type": "string"
                        },
                        {
                            "key": "location",
                            "type": "string"
                        },
                        {
                            "key": "link",
                            "type": "string"
                        }
                    ],
                    "documents": [
                        {
                            "name": "BUBA Campus",
                            "investerType": 'Accelerator Fund',
                            "location": "Istanbul / Turkey",
                            "link": "https://www.bubacampus.com"
                        },
                        {
                            "name": "Firewalk",
                            "investerType": 'Accelerator Fund',
                            "location": "Ankara / Turkey",
                            "link": "https://firewalk.vc"
                        },
                        {
                            "name": "Games United",
                            "investerType": 'Accelerator Fund',
                            "location": "Istanbul / Turkey",
                            "link": "https://www.gamesunited.co"
                        },
                        {
                            "name": "Growth Circuit Ventures",
                            "investerType": 'Accelerator Fund',
                            "location": "Ankara / Turkey",
                            "link": "http://www.growthcircuit.co"
                        }
                    ]
                },
            ]
        }
    ]
}