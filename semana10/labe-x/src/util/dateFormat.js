export const dateToString = (date) => {
    const day = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    const dateString = (`${year}-${month+1}-${day}`)
    return dateString
}

const addZero = (number) => {
    if (number <= 9) {
        return `0${number}`;
    }else {
        return number; 
    }     
}

export const dateFormat = (stringDate) => {
    const date = new Date(`${stringDate}T10:30:00-03:00`)
    const day = addZero(date.getDate())
    const month = addZero(date.getMonth() + 1)
    const year = date.getFullYear()
    const formatedDate = (`${day}/${month}/${year}`)
    return formatedDate
}