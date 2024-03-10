import { Services, useGetDocument, useGetMe, useGetOrganization, useGetRealm, useProjectServices } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { ReactView, UIController, UIView, useParams, useState, Text } from "@tuval/forms";
import React, { Fragment, useEffect } from "react";
import { AnonymousContextClass } from "./AnonymousContextClass";
import { AnonymousContextProvider } from "./context";
import { RealmContextProvider, useRealm } from "../realm";


class Controller extends UIController {
    public override LoadView(): UIView {
        const { control } = this.props;
        return control.vp_ChildFunc();
    }
}


const Proxy = ({ control }) => (
    control.vp_ChildFunc().render()
)



export function AnonymousContextRenderer({ control }: { control: AnonymousContextClass }) {

    const {workspaceId} = useParams();

    const [isError, setIsError] = useState(false);
    const [account, setAccount] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    //const { Services } = useProjectServices();
    Services.Client.setProject(workspaceId);

    useEffect(()=> {
        Services.Accounts.get()
        .then((account) => {
            setAccount(account);
            setIsLoading(false);
        })
        .catch(() => {
            Services.Accounts.createAnonymousSession().then((account) => {
                setAccount(account);
                setIsLoading(false);
            })
        })
    },[])
    

    return (
        isError ? Text('Account Error').render() :
            is.function(control.vp_ChildFunc) && !isLoading ?
                (
                    <AnonymousContextProvider.Provider value={{ account: account }}>
                        <Proxy control={control}></Proxy>
                    </AnonymousContextProvider.Provider>
                ) : <Fragment />
    )

}

