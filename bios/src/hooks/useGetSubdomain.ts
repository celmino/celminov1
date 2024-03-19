import { is } from "@tuval/core";

export const useGetSubdomain = (url = window.location.hostname) => {
    const names = url.split('.');
    if ((url.indexOf('localhost') > -1 && names.length === 2) || names.length === 3) {
        return names[0];
    } else {
        return null;
    }
};