import { AppletContext, useApplet } from '@celmino/platform';
import { ModuleLoader } from '@tuval/core';
import { HStack, LoadingWidgets, ReactView, Spinner, UIFormController, UIView, VStack, WidgetCache, cTopLeading, useEffect, useLocation, useParams, useState } from '@tuval/forms';
import React, { Fragment } from 'react';
import usePromise from "react-promise-suspense";
//import { useGetApplet } from '@celmino/sdk';

export interface IOPA {
    name: string;
    content: string;
    onSave: Function
    controller: Function;
}
export class OPA extends React.Component<any, any> {
    public get Name(): string {
        return this.props.name;
    }
    constructor(props) {
        super(props);
        this.state = {};
    }
    public render(): React.ReactNode {
        return (
            <this.props.controller content={this.props.content} onSave={this.props.onSave}></this.props.controller>
        )
    }
}

export function getAppName() {
    try {
        let regex = /\/app\/com\.([A-Za-z]+)\.([A-Za-z]+)\.([A-Za-z]+)/i;

        // Alternative syntax using RegExp constructor
        // const regex = new RegExp('(?:^\\/app\\/+|\\G(?!^)\\.)\\K\\w+', 'g')

        const str = window.location.href;

        let m;
        console.log(m = regex.exec(str))
        return m[3];
    }
    catch {
        return '';
    }
}


export const Paths = {}

export const OpaLoader = ({ widget, type = 'applet' }) => {
    var controllerPromise = function (widget, type) {
        return new Promise(function (resolve, reject) {

            if (WidgetCache[widget]) {

                if (type == null) {
                    resolve(WidgetCache[widget]);
                } else {
                    resolve(WidgetCache[widget][type]);
                }

            } else if (LoadingWidgets[widget]) {
                LoadingWidgets[widget].push(resolve);
            }
            else {

                const app_path = `/realmocean/store/widget/open-testing/${widget}`;
                // alert(app_path)
                const app_path_local = `/system/${widget}`;

                LoadingWidgets[widget] = [];
                // const app_path_local = `/static/applications/${widget}`;
                ModuleLoader.LoadBundledModule(/* is.localhost() ? */ app_path_local /* : app_path */, widget).then((_app: any) => {
                    if (_app != null) {
                        const app = new _app();
                        const controller = app.GetMainController();
                        WidgetCache[widget] = controller;
                        LoadingWidgets[widget].forEach(resolve => resolve(controller));
                        delete LoadingWidgets[widget];
                        if (type == null) {
                            resolve(controller);
                        } else {
                            resolve(controller[type]);
                        }
                    } else {

                    }
                });
            }

            /*   setTimeout(() => {
                  const app = AppStore.find(app => app.name === app_name)
                  resolve(app.controller)
              }, 2000
              ) */
        });
    };



    const fetchController = (widget, type) => controllerPromise(widget, type);

    const contoller: any = usePromise(fetchController, [widget, type]);

    return (<OPA name={widget} controller={contoller} ></OPA>)
};

export class AppletController extends UIFormController {

    public override LoadView(): UIView {

        const { appletId } = useParams();



        return (
            AppletContext(() => {
                const { applet } = useApplet();
                return (
                    VStack(
                        HStack({ alignment: cTopLeading })(
                            // LeftSideMenuView(''),
                            HStack(
                                //  NotesLeftMenu(note_id),
                                VStack(
                                    VStack({ alignment: cTopLeading })(
                                        HStack({ alignment: cTopLeading })(
                                            ReactView(
                                                <React.Suspense fallback={
                                                    <Fragment>
                                                        {
                                                            VStack(
                                                                Spinner()
                                                            ).render()
                                                        }
                                                    </Fragment>
                                                } >
                                                    <ErrorBoundary>
                                                        <OpaLoader widget={applet.type}></OpaLoader>
                                                    </ErrorBoundary>
                                                </React.Suspense>
                                            ).frame(true).width('100%').height('100%')
                                        )
                                    ).overflow('hidden')



                                ).background('white')
                            )
                        ).background('#FAFBFC')

                    )
                )
            }).appletId(appletId)




        )




    }

}


/**
 * NEW: The error boundary has a function component wrapper.
 */
function ErrorBoundary({ children }) {
    const [hasError, setHasError] = useState(false);
    const location = useLocation();
    useEffect(() => {
        if (hasError) {
            setHasError(false);
        }
    }, [location.key]);
    return (
        /**
         * NEW: The class component error boundary is now
         *      a child of the functional component.
         */
        <ErrorBoundaryInner
            hasError={hasError}
            setHasError={setHasError}
        >
            {children}
        </ErrorBoundaryInner>
    );
}



/**
 * NEW: The class component accepts getters and setters for
 *      the parent functional component's error state.
 */
class ErrorBoundaryInner extends React.Component<any, any> {
    private ref;
    constructor(props) {
        super(props);
        this.state = { hasError: false };
        this.ref = React.createRef();
    }

    static getDerivedStateFromError(_error) {
        return { hasError: true };
    }

    componentDidUpdate(prevProps, _previousState) {
        if (!this.props.hasError && prevProps.hasError) {
            this.setState({ hasError: false });
        }
    }

    componentDidCatch(_error, _errorInfo) {

        if (_errorInfo && _errorInfo.componentStack) {
            // The component stack is sometimes useful in development mode
            // In production it can be somewhat obfuscated, so feel free to omit this line.
            //console.log(_errorInfo.componentStack);
        }


        _error['Hey'] = 'sdfsdf'
        _error['Mert'] = 'sdfsdf'


        //Tracker.track(_error);


        this.props.setHasError(true);
        this.setState({ errorText: JSON.stringify(_error) });
    }

    render() {
        return this.state.hasError
            ? <p>{this.state.errorText}</p>


            : this.props.children;
    }
}