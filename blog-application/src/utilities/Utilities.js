export function getTitle(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export function getFormattedDate(string) {
    const date = new Date(string);

    return date.toLocaleString('default', {month: 'short', year: 'numeric'})
}