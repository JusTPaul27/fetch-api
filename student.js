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
        const today = new Date();
        const todayInMillisecond = today.getTime();
        const dobInMillisecond = this.dateOfBirth.getTime();
        const toBirthday = todayInMillisecond - dobInMillisecond;
        const toBirthdayInDate = toBirthday / 1000 / 60 / 60 / 24;
        const roundedBirthday = Math.floor(toBirthdayInDate);
        return roundedBirthday;

    }

    static fromObj(obj) {
        return new Student(obj.id, obj.name, obj.surname, obj.dob, obj.avatar);
    }


}

