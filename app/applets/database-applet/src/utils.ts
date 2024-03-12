import { urlFriendly } from "@tuval/forms";

export function isSelected(item: any) {

    if (item.type === 'collection') {
        var url = window.location.href;

        const indexOf = url.indexOf(`${urlFriendly(item.name)}-${item.$id}`);
        return indexOf > -1;
    } else {
        return false;
    }
}


export function getListId() {
    var url = window.location.href;

    // Regex deseni
    var regexPattern = /\/list\/([^]+)/;

    // Regex eşleşmesi
    var matches = url.match(regexPattern);

    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1];

    } else {
        return;
    }

}

export function getViewId() {
    var url = window.location.href;

    // Regex deseni
    var regexPattern = /\/view\/([^]+)/;

    // Regex eşleşmesi
    var matches = url.match(regexPattern);

    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1];

    } else {
        return;
    }

}

export function getDocumentId() {
    var url = window.location.href;

    // Regex deseni
    var regexPattern = /\/document\/([^\/]+)/;

    // Regex eşleşmesi
    var matches = url.match(regexPattern);

    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1];

    } else {
        return;
    }

}

export function getWhiteboardId() {
    var url = window.location.href;

    // Regex deseni
    var regexPattern = /\/whiteboard\/([^\/]+)/;

    // Regex eşleşmesi
    var matches = url.match(regexPattern);

    // Eğer eşleşme varsa, list parametresini al
    if (matches && matches.length > 1) {
        return matches[1];

    } else {
        return;
    }

}