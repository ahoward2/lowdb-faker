const { faker } = require("@faker-js/faker");

interface Contract {
  id: number;
  name: string;
  address: string;
}

const makeDataObject = () => {
  const generatedFakeData = {} as Contract;
  generatedFakeData.id = faker.datatype.number();
  generatedFakeData.name = faker.name.firstName();
  generatedFakeData.address = faker.address.streetAddress();
  return generatedFakeData;
};

console.log(makeDataObject());

export { makeDataObject };
