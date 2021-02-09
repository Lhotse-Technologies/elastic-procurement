var faker = require("faker");
const fs = require("fs");
const { convertArrayToCSV } = require("convert-array-to-csv");

const DATA_COUNT = 20000;
const SUPPLIER_COUNT = 60;

let suppliers = [];
for (let i = 0; i < SUPPLIER_COUNT; i++) {
  suppliers.push(
    faker.company.companyName() + " " + faker.company.companySuffix()
  );
}

let arr = [];
for (let i = 0; i < DATA_COUNT; i++) {
  arr.push({
    id: "PO0000" + (i + 1),
    date: faker.date.past(),
    purchase_department: faker.commerce.department(),
    supplier: suppliers[Math.floor(Math.random() * suppliers.length)],
    purchase: faker.commerce.productName(),
    purchase_description: faker.commerce.productDescription(),
    quantity: faker.random.number(16),
    category: faker.commerce.productAdjective(),
    price: faker.random.number(15000),
  });
}

fs.writeFileSync("./fake-data.csv", convertArrayToCSV(arr));
console.log(DATA_COUNT + " fake orders generated.");
