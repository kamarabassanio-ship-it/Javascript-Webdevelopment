const student = {
    firstName: "Mohamed",
    lastName: "Babatunde",
    age: 29,
    walk: true,
    girlFriend: false,
    university: "Limkokwing",
    program: "BSEM",
    occupation: "Web Designer",
    photo: "https://www.pixbay.com/mohamed-pic-002",
    website: "https://mohamed-Babatunde.netlify.app/",

}

//  printing the object 
console.log(student);
// Accessing a property of an object
console.log(student.photo);

console.log("***********");

// UPDATING AN ATTRIBUTEIN AN OBJECT.
student. occupation = "Website Designer"
console.log(student);

// Adding a new property to the object
student.gender = "Male"
console.log(student);

console.log("*********")


const citizen = {
firstName: "John",
lastName: "Conteh",
nationality: "Sierra Leonean",
religion: "Musilm",
dateofBirth: "2002-05-15"
}

// PRINTING THE OBJECT OF THE JS TEMPLATE LITERRAL
console.log(`*********** SIERRA LEONE NATIONAL ID CARD********`);

console.log(`firstname: ${citizen.firstName}`);
console.log(`lastname: ${citizen.lastName}`);
console.log(`nationality: ${citizen.nationality}`);
console.log(`religion: ${citizen.religion}`);
console.log(`dateofbirth: ${citizen.dateofBirth}`);


const house= {
    location: "Lumley",
    numberOfRoom: 4,
    parlour: 2,
    bathRoom:5,
    owner:"Angela Yankuba",
    pricePerNight: 100,
    facilities:["Intrnet", "One Mobile", "Wifi", "Kitchen", "Tv",
    "Car Park", "Dryer", "Pool", "Beach Access", "No Smoking", "No Pet"],

    appartment: {
        name :"Block D appartment",
        numberOfRoom: 2,
        gamingTV: 1
    }
}

console.log(house);
console.log(house.appartment);
console.log(house.facilities);