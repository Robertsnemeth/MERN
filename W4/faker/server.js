
const faker = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 8000;

const createUser = () => {
    const newUser = {
        password: faker.data.password,
        email: faker.data.email,
        phoneNumber: faker.data.phoneNumber,
        lastName: faker.person.lastName,
        firstName: faker.person.firstName,
        id: faker.data.id
    };
    return newUser;
};

const user = createUser();

const createCompany = () => {

}

app.get("/api/users/new", (req, res) => {
    console.log(user)
    res.json(user);
});

app.get("/api/company/new", (req, res) => {
    res.json(companies);
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );