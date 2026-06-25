import { get } from "lodash"

export const ICONS = {
    imageSlash: 'fa-regular fa-image-slash',
    circleExclamation: "fa-solid fa-file-circle-exclamation fa-fade",
    circleCheck: "fa-solid fa-circle-check",
    xMark: "fa-solid fa-xmark",
    arrowLeft: "fa-solid fa-arrow-left",
    arrowRight: "fa-solid fa-arrow-right",
    envelope: "fa-regular fa-envelope",
}

export const getIcon = (icon) => {
    return get(ICONS, icon, ICONS.circleExclamation);
}