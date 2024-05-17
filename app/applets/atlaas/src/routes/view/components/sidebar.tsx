import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useListComponents } from '@realmocean/sdk';
import { is } from "@tuval/core";
import { ForEach, HStack, ReactView, Text, TextAlignment, UIImage, UIViewBuilder, VStack, cLeading, cTopLeading, css } from "@tuval/forms";
import classNames from "classnames";
import React, { Fragment, useState } from "react";

import * as Popover from '@radix-ui/react-popover';

const className = css`
 & {
  width:100%;
 }



.IconButton {
  font-family: inherit;
  height: 35px;
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--violet-11);
  box-shadow: 0 2px 10px var(--black-a7);
}
.IconButton:hover {
  background-color: var(--violet-3);
}


.Fieldset {
  display: flex;
  gap: 20px;
  align-items: center;
}

.Label {
  font-size: 13px;
  color: var(--violet-11);
  width: 75px;
}

.Input {
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 13px;
  line-height: 1;
  color: var(--violet-11);
  box-shadow: 0 0 0 1px var(--violet-7);
  height: 25px;
}
.Input:focus {
  box-shadow: 0 0 0 2px var(--violet-8);
}

.Text {
  margin: 0;
  color: var(--mauve-12);
  font-size: 15px;
  line-height: 19px;
  font-weight: 500;
}

@keyframes slideUpAndFade {
  from {
    opacity: 0;
    transform: translateY(2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideRightAndFade {
  from {
    opacity: 0;
    transform: translateX(-2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideDownAndFade {
  from {
    opacity: 0;
    transform: translateY(-2px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideLeftAndFade {
  from {
    opacity: 0;
    transform: translateX(2px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
`

const contentClass = css`

  border-radius: 4px;
  padding: 20px;
  width: 460px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 60px 0px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;

&[data-state='open'][data-side='top'] {
  animation-name: slideDownAndFade;
}
&[data-state='open'][data-side='right'] {
  animation-name: slideLeftAndFade;
}
&[data-state='open'][data-side='bottom'] {
  animation-name: slideUpAndFade;
}
&[data-state='open'][data-side='left'] {
  animation-name: slideRight
`

const PopoverArrowClass = css`
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: transparent;
  border-width: 10px;
  top: 100%;
  border-top-color: white;
  margin-left: -10px;

`

const popoverCloseClass = css`

  font-family: inherit;
  border-radius: 100%;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--violet-11);
  position: absolute;
  top: 5px;
  right: 5px;

&:hover {
  background-color: var(--violet-4);
}
&:focus {
  box-shadow: 0 0 0 2px var(--violet-7);
}

`

const AccordionDemo = ({ onDragStart }) => {
  const [dragging, setDragging] = useState(false);
  const { components, isLoading } = useListComponents();
  const services = {};
  components?.forEach((component: any) => {
    if (!is.array(services[component.serviceName])) {
      services[component.serviceName] = [];
    }
    services[component.serviceName].push(component);
  })



  return (
    isLoading ? <div>Loading...</div> :
      VStack({ alignment: cTopLeading, spacing: 15 })(
        ...ForEach(Object.getOwnPropertyNames(services))(service =>
          ReactView(
            <div className={className}>
              <Popover.Root>
                <Popover.Trigger asChild>
                  <button className="IconButton" aria-label="Update dimensions">
                    {
                      HStack({ alignment: cLeading, spacing: 10 })(
                        HStack(
                          UIImage(services[service][0]?.service.icon ?? '')
                            .allWidth(20).allHeight(20)
                        )
                          .cornerRadius('50%')
                          .width(32).height(32)
                          .background(services[service][0]?.service.theme ?? ''),
                        Text(service)
                      )
                        .padding(6)

                        .background('white')
                        .cornerRadius(6)
                        .height(40)
                        .shadow('rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px')
                        .render()
                    }
                  </button>
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Content className={contentClass} sideOffset={5} side="right" align="start">
                    <Popover.Close className={popoverCloseClass} aria-label="Close">
                      <Cross2Icon />
                    </Popover.Close>
                    {
                      UIViewBuilder(() => {
                        const groups = {};

                        services[service]?.forEach((component: any) => {

                          if (!is.array(groups[component.groupName])) {
                            groups[component.groupName] = [];
                          }
                          groups[component.groupName].push(component);
                        })

                        return (

                          VStack(
                            ...ForEach(Object.getOwnPropertyNames(groups))(group =>
                              VStack({ alignment: cLeading })(
                                Text(group).textTransform('uppercase').fontSize(12).foregroundColor('#525252').fontWeight('700'),
                                ...ForEach(groups[group])((component: any) =>
                                  HStack(
                                    
                                    HStack(
                                      UIImage(component.service.icon ?? '')
                                        .allWidth(20).allHeight(20)
                                    )
                                      .cornerRadius('50%')
                                      .allWidth(32).allHeight(32)
                                      .background(component.service.theme ?? ''),


                                    VStack({ alignment: cLeading })(
                                      Text(component.name).fontSize(14).lineHeight(24),
                                      Text('Receives data passed to the function MAKE_FUNCTION or INTEGROMAT used in a sheet. Sheets Add-On required.')
                                        .multilineTextAlignment(TextAlignment.leading)
                                        .foregroundColor('rgb(134, 134, 134)').fontSize('11.8px').lineHeight(19)
                                    ).minHeight(50)
                                      .cornerRadius(6)
                                      .background('white')
                                      .draggable(true)
                                      .onDragStart((event) => {
                                        setDragging(true);
                                        onDragStart(event, JSON.stringify(component));
                                      })
                                      .onDragEnd(() => {
                                        setDragging(false);
                                      })
                                      .onDragOver((event) => {
                                        event.preventDefault();
                                      })
                                      .shadow('rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px')
                                      .cursor('grab')
                                      .margin(6)
                                      .padding(5)
                                  )
                                )
                              ).height()

                            )


                          )
                            .allWidth(420)

                        )

                      }).render()
                    }

                    <Popover.Arrow className={PopoverArrowClass} />
                  </Popover.Content>
                </Popover.Portal>
              </Popover.Root>
            </div>
          )

        )
      )
        .padding()
        .width(250)
        .render()

  )

}

const AccordionTrigger = (React as any).forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="AccordionHeader">
    <Accordion.Trigger
      className={classNames('AccordionTrigger', className)}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <ChevronDownIcon className="AccordionChevron" aria-hidden />
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = (React as any).forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames('AccordionContent', className)}
    {...props}
    ref={forwardedRef}
  >
    <div className="AccordionContentText">{children}</div>
  </Accordion.Content>
));


export default function Sidebar({
  nodeName,
  setNodeName,
  selectedNode,
  setSelectedElements,
}) {
  const handleInputChange = (event) => {
    setNodeName(event.target.value);
  };
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const { components, isLoading } = useListComponents();
  const services = {};
  components?.forEach((component: any) => {
    if (!is.array(services[component.serviceName])) {
      services[component.serviceName] = [];
    }
    services[component.serviceName].push(component);
  })

  return (
    <div style={{ background: '#F3F4F6' }}>
      {selectedNode ? (
        //settings panel
        <div >

          <h3 className="text-xl mb-2 text-blue-900">Update Node</h3>
          <label className="block mb-2 text-sm font-medium text-blue-900">
            Node Name:
          </label>
          <input
            type="text"
            className="block w-full pt-2 px-3 pb-3 text-gray-700 border border-blue-300 rounded-lg bg-white focus:outline-none focus:border-blue-500"
            value={nodeName}
            onChange={handleInputChange}
          />
          <button
            className="mt-4 bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
            onClick={() => setSelectedElements([])}
          >
            Go Back
          </button>
        </div>
      ) : (
        //node panel
        <Fragment>
          <AccordionDemo onDragStart={onDragStart}></AccordionDemo>
        </Fragment>
      )}
    </div>
  );
}






