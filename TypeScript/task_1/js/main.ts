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
