const {faker} = require('@faker-js/faker');

const express = require("express");
const app = express();
const port = 8000;

const createUser = () => {
    const newUser = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        id: faker.datatype.uuid()
    };
    return newUser;
};

const user = createUser();

const createCompany = () => {
    const newCompany = {
        id: faker.datatype.uuid(),
        name: faker.company.name(),
        address: {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
    return newCompany;
}

const company = createCompany();

app.get("/api/users/new", (req, res) => {
    console.log(user)
    res.json(user);
});

app.get("/api/company/new", (req, res) => {
    console.log(company)
    res.json(company);
});

app.get("/api/company/user/new", (req, res) => {
    const joinedObject = {user, company}
    console.log(joinedObject)
    res.json(joinedObject);
})

app.listen( port, () => console.log(`Listening on port: ${port}`) );