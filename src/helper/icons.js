import { get } from "lodash"

export const ICONS = {
    imageSlash: 'fa-regular fa-image-slash',
    circleExclamation: "fa-solid fa-file-circle-exclamation fa-fade",
    circleCheck: "fa-solid fa-circle-check",
    xMark: "fa-solid fa-xmark",
}

export const getIcon = (icon) => {
    return get(ICONS, icon, ICONS.circleExclamation);
}