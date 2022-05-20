class Student {
    constructor(id, name, surname, dob, avatar) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.dob = dob;
        this.avatar = avatar;
    }

    get dateOfBirth() {
        return new Date(this.dob);
    }

    set dateOfBirth(value) {
        this.dob = value.toISOString;
    }

    getDaysToBirthday() {
        // const today = new Date();
        // const todayInMillisecond = today.getTime();
        // const dobInMillisecond = this.dateOfBirth.getTime();
        // const toBirthday = todayInMillisecond - dobInMillisecond;
        // const daysToBirth = toBirthday / 1000 / 60 / 60 / 24;
        // const flooredDateToBirth = Math.floor(daysToBirth);
        // return flooredDateToBirth;
        const today = new Date();
        const todayInMills = today.getTime();
        const birthdayClone = new Date(this.dateOfBirth.getTime());
        birthdayClone.setFullYear(new Date().getFullYear());
        const birthDayInMills = birthdayClone.getTime();

        if (todayInMills > birthDayInMills) {
            birthdayClone.setFullYear(new Date().getFullYear() + 1)

            const newYearBirthdayInMills = birthdayClone.getTime();
            const diff = newYearBirthdayInMills - todayInMills;
            const daysToBirth = diff / 1000 / 60 / 60 / 24;
            const flooredDateToBirth = Math.floor(daysToBirth);
            return flooredDateToBirth;

        } else {
            const diff = birthDayInMills - todayInMills;
            const daysToBirth = diff / 1000 / 60 / 60 / 24;
            const flooredDateToBirth = Math.floor(daysToBirth);
            return flooredDateToBirth;
        }


    }

    static fromObj(obj) {
        return new Student(obj.id, obj.name, obj.surname, obj.dob, obj.avatar);
    }


}

