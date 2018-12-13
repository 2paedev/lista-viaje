export function isUndefinedOrNullOrEmpty(variable: any) {
    if (Array.isArray(variable)) {
        return variable.length === 0;
    }
    return variable === undefined || variable === null || variable === '';
}