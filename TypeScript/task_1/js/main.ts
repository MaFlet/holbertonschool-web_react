interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher1: Teacher = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: true,
    location: "New York",
    contract: true, // Posibility attribute
    yearsOfExperience: 5 // Optional property
};

const teacher2: Teacher = {
    firstName: "Jane",
    lastName: "Smith",
    fullTimeEmployee: false,
    location: "Los Angeles",
    specialization: "Mathematics", // Aditional different property
    certifications: ["Math", "Physics"] // Optional different property
};

// Extending to Director inheriting Teacher attributes
interface Directors extends Teacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: "John",
    lastName: "Smith",
    location: "New York",
    fullTimeEmployee: true,
    numberOfReports: 17,
    contract: true
};

interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// Type checking examples
function printTeacherInfo(teacher: Teacher): void {
    console.log(`
        Name: ${teacher.firstName} ${teacher.lastName}
        Location: ${teacher.location}
        Full Time: ${teacher.fullTimeEmployee}
        Years of Experience: ${teacher.yearsOfExperience || 'Not specified'}
    `);
}

// Test the interface
printTeacherInfo(teacher1);
printTeacherInfo(teacher2);
