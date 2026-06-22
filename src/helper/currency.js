import { get } from "lodash"

const symbols = {
    USD: "$",
}

export const getCurrencySymbol = (code = "USD") => get(symbols, code, code);

export const formatNumber = ({ number = 0, decimals = 0 }) => number.toFixed(decimals);

export const formatCurrent = ({ price = 0, code = 'USD', decimals = 0 }) => getCurrencySymbol(code) + formatNumber({ number: price, decimals });