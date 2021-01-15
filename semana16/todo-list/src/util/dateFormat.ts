const addZero = (number: number) => {
    if (number <= 9) {
        return `0${number}`;
    }else {
        return number; 
    };     
};

export const dateFormat = (stringDate: string) : string => {
    const date = new Date(stringDate);
    const day = addZero(date.getDate());
    const month = addZero(date.getMonth() + 1);
    const year = date.getFullYear();
    const formatedDate = (`${day}/${month}/${year}`);
    return formatedDate;
};

export const dateToDBFormat = (ptDate: string): string => {
    const splitedDate = ptDate.split("/");
    const formatedDate = `${splitedDate[2]}-${splitedDate[1]}-${splitedDate[0]}`
    return formatedDate;
}