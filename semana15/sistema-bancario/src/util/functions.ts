export const stringToDate = (dateString: string) : Date => {
    const splitedDate = dateString.split("-");
    const date = new Date(Number(splitedDate[2]), Number(splitedDate[1])-1, Number(splitedDate[0]));

    return date;
};

export const checkIfIsOver18 = (currentDate: Date, dateOfBirth: Date) : boolean => {
    const currentDay: number = currentDate.getDate();
    const currentMonth: number = currentDate.getMonth() + 1;
    const currentYear: number = currentDate.getFullYear();

    const dayOfBirth: number = dateOfBirth.getDate();
    const monthOfBirth: number = dateOfBirth.getMonth() + 1;
    const yearOfBirth: number = dateOfBirth.getFullYear();

    const age: number = currentYear - yearOfBirth;

    if ( age < 18 ) {
        return false;
    };

    if ( age === 18 ) {
        if ( monthOfBirth > currentMonth ) {
            return false;
        } else if ( monthOfBirth === currentMonth ) {
            if ( dayOfBirth >= currentDay ) {
                return false;
            };
        };
    };

    return true;
};

export const validateDate = (date: Date) : boolean => {
    const currentDate = new Date();
    const currentTime = currentDate.getTime();

    if ( date.getTime() < currentTime ) {
        return false;
    };
    
    return true;
};