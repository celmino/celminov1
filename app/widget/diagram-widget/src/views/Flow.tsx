import { useState, useCallback } from 'react';
import { ConnectionLineType, Panel, ReactFlow, ReactFlowProvider, applyEdgeChanges, applyNodeChanges, useReactFlow } from '../diagram/react';
import React from 'react';
import { HStack, Text, useEffect } from '@tuval/forms';
import { useRealm } from '@celmino/ui';
import { Services, useListDocuments } from '@realmocean/sdk';
import { stratify, tree } from 'd3-hierarchy';

/* const g = new Dagre.graphlib.Graph().setDefaultEdgeLabel(() => ({}));

const getLayoutedElements = (nodes, edges, options) => {
    g.setGraph({ rankdir: options.direction });

    edges.forEach((edge) => g.setEdge(edge.source, edge.target));
    nodes.forEach((node) => g.setNode(node.id, node));

    Dagre.layout(g);

    return {
        nodes: nodes.map((node) => {
            const { x, y } = g.node(node.id);

            return { ...node, position: { x, y } };
        }),
        edges,
    };
}; */

const g = tree();

const getLayoutedElements = (nodes, edges, options) => {
    if (nodes.length === 0) return { nodes, edges };

    const { width, height } = document
        .querySelector(`[data-id="${nodes[0].id}"]`)
        .getBoundingClientRect();
    const hierarchy = stratify()
        .id((node) => node.id)
        .parentId((node) => edges.find((edge) => edge.target === node.id)?.source);
    const root = hierarchy(nodes);
    const layout = g.nodeSize([width * 2, height * 2])(root);

    return {
        nodes: layout
            .descendants()
            .map((node) => ({ ...node.data, position: { x: node.x, y: node.y } })),
        edges,
    };
};


const initialEdges = [
    { id: 'e1-2', source: '1', target: '2' },
    { id: 'e2-3', source: '2', target: '3', animated: true },
];

const appletOffsets = {};
const appletIndexs = {};
export function Flow({ applets }: { applets: any[] }) {
    const { realm } = useRealm();
    const [loaded, setLoaded] = useState(false);
    const { fitView } = useReactFlow();




    useEffect(() => {
        if (!loaded) {
            setLoaded(true);
            const initialNodes = [];

            Promise.all(applets.map((applet) => Services.Databases.listCollections(realm.$id, applet.$id)))
                .then(cols => {
                    const collections = [];
                    cols.forEach((col) => {
                        collections.push(...col.collections)
                    })
                    console.log(collections)

                    setNodes([
                        {
                            id: 'realm',
                            type: 'input',
                            data: { label: 'realm' },
                            position: { x: 250, y: 25 },

                        }, ...applets.map((applet, index) => {
                            appletOffsets[applet.$id] = 250 + (index * 180);
                            appletIndexs[applet.$id] = 0;
                            return ({
                                id: applet.$id,
                                type: '',
                                data: { label: applet.name },
                                position: { x: 250 + (index * 180), y: 100 },
                            })
                        }

                        ), ...collections.map((col: any, index) => ({
                            id: col.databaseId + '_' + col.$id,
                            type: '',
                            data: { label: col.name  },
                            position: { x:  appletOffsets[col.databaseId], y: 180 + (appletIndexs[col.databaseId]++ * 50) },
                        }))])

                   /*  setEdges([
                        ...applets.map(applet => (
                            {
                                id: `${realm}_${applet.$id}`, source: 'realm', target: applet.$id, type: 'smoothstep',
                            }
                        )),
                        ...collections.map(col => ({
                            id: `${col.databaseId}_${col.$id}`, source: col.databaseId, target: col.databaseId + '_' + col.$id, type: 'smoothstep',
                        }))
                    ]) */
                })
        }
    })



    const initialNodes = applets.map((applet, index) => ({
        id: applet.$id,
        type: 'input',
        data: { label: applet.name },
        position: { x: 250, y: 25 * index },
    })
    )


    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

    const onLayout = useCallback(
        (direction) => {
            const layouted = getLayoutedElements(nodes, edges, { direction });

            setNodes([...layouted.nodes]);
            setEdges([...layouted.edges]);

            window.requestAnimationFrame(() => {
                fitView();
            });
        },
        [nodes, edges]
    );

    const onNodesChange = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        [setNodes]
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges]
    );

    return (

        <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            connectionLineType={ConnectionLineType.SmoothStep}
            fitView
        >
            <Panel position="top-right">
                <button onClick={() => onLayout('TB')}>vertical layout</button>
                <button onClick={() => onLayout('LR')}>horizontal layout</button>
            </Panel>

        </ReactFlow>
    )
}
