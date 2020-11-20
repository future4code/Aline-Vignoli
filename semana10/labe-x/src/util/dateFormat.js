export const dateToString = (date) => {
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const dateString = (`${year}-${month+1}-${day}`)
    return dateString
}

export const dateFormat = (stringDate) => {
    const date = Date.parse(stringDate)
    const newDate = new Date(date)
    const day = newDate.getDate()
    const month = newDate.getMonth()
    const year = newDate.getFullYear()
    const formatedDate = (`${day}/${month+1}/${year}`)
    return formatedDate
}