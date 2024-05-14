import { Services, useCreateRealm, useGetDocument, useGetMe, useGetOrganization, useGetRealm, useUpdateMagicURLSession } from "@realmocean/sdk";
import { is } from "@tuval/core";
import { ReactView, Text, UIController, UINavigate, UIView, useEffect, useNavigate, useParams, useState, Fragment as TuvalFragment } from "@tuval/forms";
import React, { Fragment } from "react";
import { UserContextClass } from "./UserContextClass";
import { UserContextProvider } from "./context";
import { RealmContextProvider, useRealm } from "../realm";
import { useRealmNavigate } from "../../hooks/useWorkspaceNavigation";

export const useGetProtocol = () => {
    return window.location.protocol;
};

export const useGetHost = () => {
    return window.location.host;
}


export const useGetHostName = () => {
    return window.location.hostname;
}

export const useGetHDomainName = () => {
    const name = window.location.hostname.split('.');
    if (name.length > 1) {
        return name[1];
    } else {
        return window.location.hostname;
    }
}


export const useGetOrigin = () => {
    return window.location.origin;
}

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
    if ((url.indexOf('localhost') > -1 && names.length === 2) || names.length === 3) {
        return names[0];
    } else {
        return null;
    }
};


export function NewUserContextRenderer({ control }: { control: UserContextClass }) {

    const [account, setAccount] = useState(null);


    const urlParams = new URLSearchParams(window.location.search);
    const secret = urlParams.get('secret');
    const userId = urlParams.get('userId');

    const subdomain = useGetSubdomain();
    const { navigate } = useRealmNavigate();
    // alert(secret)
    // const { me: account, isLoading, isError } = useGetMe(subdomain);

    useEffect(() => {
        Services.Client.setProject(subdomain);
        Services.Accounts.updateMagicURLSession(userId, secret).then((account) => {

            navigate('');
        })
    }, [])
    return (
        TuvalFragment().render()
    )

}


export function UserContextRenderer({ control }: { control: UserContextClass }) {

    const subdomain = useGetSubdomain();
    // alert(secret)
    const { me: account, isLoading, isError, error } = useGetMe(subdomain);

    const protocol = useGetProtocol();
    const domainName = useGetHDomainName();

    

    useEffect(() => {
        if (isError) {
            window.location.href = window.location.href.indexOf('localhost') > -1 ? `${protocol}//${domainName}/login` : 'https://celmino.io/login';
        }
    }, [error])

    return (
        isLoading ? TuvalFragment().render() :
            account?.prefs?.isAnonymous === true ? UINavigate('/@/login').render() :
                is.function(control.vp_ChildFunc) && account != null ?
                    (
                        <UserContextProvider.Provider value={{ user: account }}>
                            <Proxy control={control}></Proxy>
                        </UserContextProvider.Provider>
                    ) : <Fragment />
    )

}
