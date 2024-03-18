
export const useGetSubdomain = (url =window.location.hostname) => {  
    const names = url.split('.');
    if (names.length === 2) {
        return names[0];
    } else {
        return null;
    }
};