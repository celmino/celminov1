import { EventBus, is } from "@tuval/core";
import { Button, HStack, Icon, Icons, Text, TextField, UIViewBuilder, UIWidget, cHorizontal, useEffect, useFormController, useOptions, useState } from "@tuval/forms";
import { useCallback } from 'react';
import { StatusMarker } from "./StatusMarker";



function useKeyPress(targetKey) {
    // State for keeping track of whether key is pressed
    const [keyPressed, setKeyPressed] = useState<boolean>(false);
    // If pressed key is our target key then set to true
    function downHandler({ key, keyCode }) {
        if (is.string(targetKey)) {
            if (key === targetKey) {
                setKeyPressed(true);
            }
        } else {
            if (keyCode === targetKey) {
                setKeyPressed(true);
            }
        }

    }
    // If released key is our target key then set to false
    const upHandler = ({ key, keyCode }) => {
        if (is.string(targetKey)) {
            if (key === targetKey) {
                setKeyPressed(false);
            }
        } else {
            if (keyCode === targetKey) {
                setKeyPressed(false);
            }
        }
    };
    // Add event listeners
    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        window.addEventListener("keyup", upHandler);
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener("keydown", downHandler);
            window.removeEventListener("keyup", upHandler);
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return keyPressed;
}

function useKeyPressEvent(targetKey, func: Function) {
    const eventFunc = useCallback(() => func(), [])

    function downHandler({ key, keyCode }) {
        if (is.string(targetKey)) {
            if (key === targetKey) {
                eventFunc();
            }
        } else {
            if (keyCode === targetKey) {
                eventFunc();
            }
        }

    }
    ;
    // Add event listeners
    useEffect(() => {
        window.addEventListener("keydown", downHandler);
        ;
        // Remove event listeners on cleanup
        return () => {
            window.removeEventListener("keydown", downHandler);
            ;
        };
    }, []); // Empty array ensures that effect is only run on mount and unmount
    return eventFunc;
}


export const AssigneeView = () => {

    return (
        UIWidget('com.tuvalsoft.widget.userselect')
            .config({
                onChange: (account) => alert(JSON.stringify(account))
            })
    )
}

export const DuedateView = () => {

    return (
        UIWidget('com.tuvalsoft.widget.duedate')
    )
}

export const EditTagsView = () => {

    return (
        UIWidget('com.tuvalsoft.widget.tags')
    )
}

export const PriorityView = () => {

    return (
        UIWidget('com.tuvalsoft.widget.priority')
    )
}

export function EditTaskItem(status: any) {
    return (
        UIViewBuilder(() => {

          
            const { onItemSave } = useOptions();

             let createSource = 'B';

            const controller = useFormController();
            const [value, setValue] = useState('');

            useKeyPressEvent(13, (e) => {
                //   console.log(e)
                /* createDocument({
                    documentId: nanoid(),
                    data: {
                        name: value,
                        status: status.$id
                    }
                }, (task) => {
                   // setValue('');
                    EventBus.Default.fire('tasks.changed', { task })
                    EventBus.Default.fire('task.opa.hideedit', null);
                    EventBus.Default.fire('task.opa.showedit', { stage_id: status.$id });
                }
                ); */


            })

            useKeyPressEvent(27, () => {
                EventBus.Default.fire('task.opa.hideedit', {})
            })

            return (
                HStack({ spacing: 10 })(
                    StatusMarker(status),
                    TextField()
                        .border('none')
                        .value(value)
                        //.placeholder('Task Name')
                        //.formField('title', [new RequiredRule('Name must be exist.')])
                      //  .autoFocus(true)
                        .padding(cHorizontal, 0)
                        .border('none')
                        .shadow({ focus: 'none' })
                        .onKeyDown((e) => {
                            if (e.code === 'Enter') {
                                onItemSave({
                                    name: e.target.value,
                                    status: status.$id
                                }).then((task)=> {
                                    setValue('');
                                    EventBus.Default.fire('tasks.changed', { task })
                                    EventBus.Default.fire('task.opa.hideedit', null);
                                    EventBus.Default.fire('task.opa.showedit', { stage_id: status.$id });
                             
                                });
                              
                            }
                        })
                        .onChange((e) => {

                            setValue(e)
                        }),
                    HStack(
                        AssigneeView(),

                    ).width(),
                    Button(
                        Text('SAVE').fontSize(11).fontWeight('500')
                    ).width(52).height(22)
                        .onClick(() => {

                          /*   createDocument({
                                documentId: nanoid(),
                                data: {
                                    name: value,
                                    status: status.$id
                                }
                            }, (task) => {
                                EventBus.Default.fire('tasks.changed', { task })
                                EventBus.Default.fire('task.opa.hideedit', null);
                            }) */


                        }),
                    HStack(
                        Icon(Icons.Close).fontSize(20)
                    ).width().padding(cHorizontal, 10)
                        .onClick(() => EventBus.Default.fire('task.opa.hideedit', {})),
                    HStack(

                    ).width(32)
                )
                    .background('white')
                    .border('solid 1px #7B68EE').height(40)

            )
        })
    )
} 