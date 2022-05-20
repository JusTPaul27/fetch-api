const responseCallBack = (response)=> response.json(); 

// function responseCallBack(response){
// console.log('Response',  response);
// return response.json();
// }

const createAvatarImage = (src) => {
    const image = document.createElement('img');
    image.classList.add('avatar-image')
    image.src = src;
    return image;
}


const catchError = (error) => console.error(error);

// function manageError(error) {
//     console.error(error)
// }


const convertResultInArrayOfStudents = (result) => result.map(obj => Student.fromObj(obj));

// function convertResultInArrayOfStudents(result) {
//         arrayOFStudents = result.map(obj=> Student.fromObj(obj));
//         return arrayOFStudents;
//     }


const createTextSpan = (text) => {
    const span = document.createElement('span');
    span.appendChild(document.createTextNode(text));
    return span
}

// function createTextSpan(text) {
//     const span = document.createElement('span');
//     span.appendChild(document.createTextNode(text));
//     return span
// }


createStudentCard = (student) => {
    const studentCard = document.createElement('div');
    studentCard.classList.add('student-card')
    studentCard.appendChild(createAvatarImage(student.avatar))
    studentCard.appendChild(createTextSpan(student.name + ' ' + student.surname));
    studentCard.appendChild(createTextSpan('  Giorni al compleanno: ' + student.getDaysToBirthday()))
    return studentCard;
}


const createArrayOfStudentCard = (arrayOFStudents) => arrayOFStudents.map(student => createStudentCard(student));

const resultCallBack = (result) => displayStudents(convertResultInArrayOfStudents(result));

// function resultCallBack(result){
// console.log('Result', result);
// const array = convertResultInArrayOfStudents(result);
// console.log('array', result)
// displayStudents(array)
// }

const displayStudents = (arrayOFStudents) =>{
    const arrayContainer = document.createElement('div');

    arrayContainer.append(...createArrayOfStudentCard(arrayOFStudents));


    document.body.appendChild(arrayContainer); 
}

// function displayStudents(arrayOFStudents) {
//     const arrayContainer = document.createElement('div');

//     arrayContainer.append(...createArrayOfStudentCard(arrayOFStudents));


//     document.body.appendChild(arrayContainer);
// }


const initApp = () => fetch('https://62860d1f96bccbf32d6e2c06.mockapi.io/students')
                        .then(responseCallBack)
                        .then(resultCallBack)
                        .catch(catchError);

initApp();


