export const dateFormat = (date) => {
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const dateString = (`${year}-${month+1}-${day}`)
    return dateString
}