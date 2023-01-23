export const roundToDecimal = (number: number, decimal: number): number => {
    if (!Number.isInteger(decimal) || decimal < 0) {
        throw new Error("The number of decimal places must be a positive integer.");
    }
    return parseFloat(number.toFixed(decimal));
}

