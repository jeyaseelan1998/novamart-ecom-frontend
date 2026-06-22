import { get } from "lodash"

const symbols = {
    USD: "$",
}

export const getCurrencySymbol = (code = "USD") => get(symbols, code, code);

export const formatCurrent = ({ price = 0, code = 'USD' }) => getCurrencySymbol(code) + price.toFixed(2);