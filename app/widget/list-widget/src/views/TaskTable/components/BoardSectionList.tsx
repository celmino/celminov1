import {
    DndContext,
    DragEndEvent,
    DragOverEvent,
    DragOverlay,
    DragStartEvent,
    DropAnimation,
    MouseSensor,
    closestCorners,
    defaultDropAnimation,
    useSensor,
    useSensors
} from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';
import { EventBus } from '@tuval/core';
import { ForEach, HStack, ReactView, Text, VStack, cLeading, cTopLeading, useOptions } from '@tuval/forms';
import React, { Fragment, useCallback, useEffect, useState } from 'react';
import BoardSection from './BoardSection';
import { BoardSections, BoardSections as BoardSectionsType } from './types';

import { unstable_batchedUpdates } from 'react-dom';


export function getItemsByStatus(items: any[], status: any, groupBy: string) {
    return items.filter((task) => task[groupBy] === status.$id);
}

export function getItemById(tasks: any[], id: string) {
    return tasks.find((task) => task.$id === id);
};

export function getStatusById(statuses: any[], id: string) {

    return statuses.find((status) => status.$id === id);
};

export function initializeBoard(status: any[], items: any[], groupBy: string) {
    const boardSections: BoardSections = {};

    status.forEach((boardSectionKey) => {
        boardSections[boardSectionKey.$id] = getItemsByStatus(
            items,
            boardSectionKey,
            groupBy
        );
    });

    return boardSections;
};

export const findBoardSectionContainer = (
    boardSections: any/* BoardSections */,
    id: string
) => {
    if (id in boardSections) {
        return id;
    }

    const container = Object.keys(boardSections).find((key) =>
        boardSections[key].find((item) => item.id === id)
    );
    return container;
};



const BoardSectionList = ({ items, status }) => {

    const { groupBy, onStageChange = () => void 0 } = useOptions();
    const tasks = items;
    const initialBoardSections = initializeBoard(status, items, groupBy);

    console.log(initialBoardSections);

    //const { moveTaskToStage, isLoading, invalidateCache } = useMoveTaskToStage();

    const [boardSections, setBoardSections] =
        useState<BoardSectionsType>(initialBoardSections);

    const updateBoardSections = useCallback(({ task }: { task: any }) => {
        // alert(JSON.stringify(task))

        boardSections[task[groupBy]].push(task);

        const _index = boardSections[task[groupBy]].length - 1;


        unstable_batchedUpdates(() => {
            setBoardSections((items) => {
                const a = {
                    ...items,
                    [task[groupBy]]: arrayMove(
                        boardSections[task[groupBy]],
                        _index,
                        _index
                    ),
                }
                //console.log(JSON.stringify(a))
                return a;

            }

            );

        });



        // setBoardSections({ ...boardSections });
    }, [])

    const updateFromCache = useCallback(({ task }) => {

        unstable_batchedUpdates(() => {
            setBoardSections((items) => {
                const a = {
                    ...items
                }
                for (let key in a) {

                    const tasks = a[key];
                    const index = tasks.findIndex((t) => t.$id === task.$id);
                    if (index > -1) {
                        tasks[index].title = task.title;
                    }
                }
                return a;
            });

        });


        // setBoardSections({ ...boardSections });
    }, [])


    useEffect(() => {
        EventBus.Default.on('tasks.changed', updateBoardSections);
        EventBus.Default.on('tasks.cache.changed', updateFromCache);
        return () => {
            EventBus.Default.off('tasks.changed', updateBoardSections);
            EventBus.Default.off('tasks.cache.changed', updateFromCache);
        }
    })



    const [activeTaskId, setActiveTaskId] = useState<null | string>(null);

    const sensors = useSensors(
        //  useSensor(PointerSensor),
        useSensor(MouseSensor, {
            activationConstraint: {
                delay: 0,
                tolerance: 5,
            }
        })
        /*  useSensor(KeyboardSensor, {
             coordinateGetter: sortableKeyboardCoordinates,
         }) */
    );



    const handleDragStart = ({ active }: DragStartEvent) => {
        setActiveTaskId(active.id as string);
    };

    const handleDragOver = ({ active, over }: DragOverEvent) => {
        // Find the containers
        const activeContainer = findBoardSectionContainer(
            boardSections,
            active.id as string
        );
        const overContainer = findBoardSectionContainer(
            boardSections,
            over?.id as string
        );

        if (
            !activeContainer ||
            !overContainer ||
            activeContainer === overContainer
        ) {
            return;
        }

        setBoardSections((boardSection) => {
            const activeItems = boardSection[activeContainer];
            const overItems = boardSection[overContainer];

            // Find the indexes for the items
            const activeIndex = activeItems.findIndex(
                (item) => item.$id === active.id
            );
            const overIndex = overItems.findIndex((item) => item.$id !== over?.id);

            return {
                ...boardSection,
                [activeContainer]: [
                    ...boardSection[activeContainer].filter(
                        (item) => item.$id !== active.id
                    ),
                ],
                [overContainer]: [
                    ...boardSection[overContainer].slice(0, overIndex),
                    boardSections[activeContainer][activeIndex],
                    ...boardSection[overContainer].slice(
                        overIndex,
                        boardSection[overContainer].length
                    ),
                ],
            };
        });
    };

    const handleDragEnd = ({ active, over }: DragEndEvent) => {


        const activeContainer = findBoardSectionContainer(
            boardSections,
            active.id as string
        );
        const overContainer = findBoardSectionContainer(
            boardSections,
            over?.id as string
        );

        if (
            !activeContainer ||
            !overContainer ||
            activeContainer !== overContainer
        ) {
            return;
        }



        const activeIndex = boardSections[activeContainer].findIndex(
            (task) => task.$id === active.id
        );
        const overIndex = boardSections[overContainer].findIndex(
            (task) => task.$id === over?.id
        );




        onStageChange(active.id, overContainer);

        setBoardSections((boardSection) => ({
            ...boardSection,
            [overContainer]: arrayMove(
                boardSection[overContainer],
                activeIndex,
                overIndex
            ),
        }));
        //}

        setActiveTaskId(null);
    };

    const dropAnimation: DropAnimation = {
        ...defaultDropAnimation,
    };

    const task = activeTaskId ? getItemById(tasks, activeTaskId) : null;

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <DndContext
                sensors={sensors}
                collisionDetection={closestCorners}
                onDragStart={handleDragStart}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEnd}
            >
                <Fragment>
                    {
                        VStack({ alignment: cTopLeading })(
                            ...ForEach(Object.keys(boardSections))((boardSectionKey, index) => {

                                return (
                                    ReactView(
                                        <BoardSection
                                            id={boardSectionKey}
                                            title={boardSectionKey}
                                            items={boardSections[boardSectionKey]}
                                            status={getStatusById(status, boardSectionKey)}
                                        />
                                    ).frame(true)
                                        .marginBottom(Object.keys(boardSections).length - 1 === index ? '0px' : '50px')
                                        .width('100%').height('100%')
                                )
                            }

                            )
                        ).render()
                    }


                    <DragOverlay dropAnimation={dropAnimation}>
                        {task ?

                            HStack({ alignment: cLeading, spacing: 10 })(
                                HStack()
                                    .background('gray')
                                    .width(8).height(8).marginLeft('10px').cornerRadius(2),
                                Text(task.title)

                            )
                                .background('rgba(255,255,255,1)')
                                .borderBottom('solid 1px rgb(240, 241, 243)')
                                .shadow('rgba(0, 0, 0, 0.35) 0px 5px 15px')
                                //.border('solid 1px gray')
                                .allHeight(36)
                                .shadow('rgba(0, 0, 0, 0.35) 0px 5px 15px')
                                .render()
                            : null}
                    </DragOverlay>
                </Fragment>
            </DndContext>
        </div>
    );
};

export default BoardSectionList;
