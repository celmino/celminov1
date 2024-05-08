export const MeetingsApplet = {
    name: 'Meetings',
    type: 'Applet',
    tree_type: 'com.celmino.applet.meetings',
    applet_type: 'com.celmino.applet.meetings',
    description: 'Monitor your process details in timeframe chart.',
    // image: '/static/opa/images/com.tuvalsoft.opa.task/icon.png',
    iconCategory: 'Icons',
    iconName: 'calender',
    icon: '\\d25f',
    iconBackColor: '#66B47C',
    enabled: true,
    databases: [
        {
            "name": "Meetings",
            "id": "meetings",
            "category": "app",
            "collections": [
                {
                    "name": "Meeting",
                    "id": "meeting",
                    "attributes": [
                        {
                            "key": "name",
                            "type": "string"
                        },
                        {
                            "key": "start_at",
                            "type": "datetime"
                        },
                        {
                            "key": "end_at",
                            "type": "datetime"
                        },
                        {
                            "key": "is_template",
                            "type": "boolean",
                            "defaultValue": false
                        },
                        {
                            "key": "sections",
                            "type": "string",
                            "size": 100000
                        }
                    ]
                }

            ]
        }
    ]
}