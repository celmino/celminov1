import { useGetDocument, useGetMe, useGetOrganization, useGetRealm } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { ReactView, UIController, UIView, useParams } from "@tuval/forms";
import React, { Fragment } from "react";
import { AccountContextClass } from "./AnonymousContextClass";
import { AccountContextProvider } from "./context";
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



function AccountContextRenderer({ control }: { control: AccountContextClass }) {

    const { me, isLoading, isError } = useGetMe('console');

    return (

        is.function(control.vp_ChildFunc) && !isLoading ?
            (
                <AccountContextProvider.Provider value={{ account: me }}>
                    <Proxy control={control}></Proxy>
                </AccountContextProvider.Provider>
            ) : <Fragment />
    )

}


export default AccountContextRenderer;