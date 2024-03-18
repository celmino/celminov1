import { Services, useGetDocument, useGetMe, useGetOrganization, useGetRealm, useUpdateMagicURLSession } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { ReactView, UIController, UIView, useEffect, useParams, useState } from "@tuval/forms";
import React, { Fragment } from "react";
import { UserContextClass } from "./UserContextClass";
import { UserContextProvider } from "./context";
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

export const useGetSubdomain = (url = window.location.hostname) => {
    const names = url.split('.');
    if (names.length === 2) {
        return names[0];
    } else {
        return null;
    }
};


export function UserContextRenderer({ control }: { control: UserContextClass }) {

   // const [account, setAccount] = useState(null);

    const urlParams = new URLSearchParams(window.location.search);
    const secret = urlParams.get('secret');
    const userId = urlParams.get('userId');

    const subdomain = useGetSubdomain();
   // alert(secret)
    const { me: account, isLoading, isError } = useGetMe(subdomain);

/*      useEffect(() => {
        Services.Client.setProject(subdomain);
        Services.Accounts.updateMagicURLSession(userId, secret).then((account) => {
            setAccount(account)
        })
    }, [])  */


    return (

        is.function(control.vp_ChildFunc) && !isLoading?
            (
                <UserContextProvider.Provider value={{ user: account }}>
                    <Proxy control={control}></Proxy>
                </UserContextProvider.Provider>
            ) : <Fragment />
    )

}


