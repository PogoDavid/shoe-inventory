// Define the constructor function for creating shoe objects
function Shoes(name, productCode, quantity, valuePerItem) {
    this.name = name; //Name of the shoe
    this.productCode = productCode; //Unique product code for identification 
    this.quantity = quantity; //Number of shoes available
    this.valuePerItem = valuePerItem; //Price per individual shoe
}

//Create instances of Shoes representing different shoe models
let shoes1 = new Shoes("Nike Air Zoom", "NIK123", 10, 100);
let shoes2 = new Shoes("Adidas Ultraboost", "ADI456", 8, 120);
let shoes3 = new Shoes("Puma RS-X", "PUM789", 15, 90);
let shoes4 = new Shoes("New Balance Fresh Foam", "NEW012", 12, 110);
let shoes5 = new Shoes("Reebok Nano X", "REE345", 20, 95);

//Create an array to store the shoe instances
let shoesArray = [];

// Add the shoe instances to the array
shoesArray.push(shoes1, shoes2, shoes3, shoes4, shoes5);

// Function to search for a shoe within the array by a specified property
const searchShoeByProperty = (array, property, value) => {
    //Iterate through the array
    for (let i = 0; i < array.length; i++) {
        // Check if the current shoe's property matches the specified value
        if (array[i][property] === value)
            return array[i]; //Return the shoe if found
    }
    return null; //Return null if the shoe is not found
}

//Function to find the shoe with the lowest value per item
const findShoeWithLowestValuePerItem = array => {
    //Sort the array by valuePerItem in ascending order
    array.sort((a, b) => a.valuePerItem - b.valuePerItem);
    console.log("The updated table:");
    //Display the sorted array
    console.table(array);
    return array[0]; //Return the shoe with the lowest value per item
}

//Function to find the shoe with the highest value per item 
const findShoeWithHighestValuePerItem = array => {
    //Sort the array by valuePerItem in descending order
    array.sort((a, b) => b.valuePerItem - a.valuePerItem);
    console.log("The updated table:");
    //Display the sorted array
    console.table(array);
    return array[0]; //Return the shoe with the highest value per item
}

//function to edit all four properties for each shoe instance
const editShoes = (array, newName, newProductCode, newQuantity, newValuePerItem) => {
    //Iterate through the array
    for (let i = 0; i < array.length; i++) {
        //Update properties of each shoe instance
        array[i].name = newName;
        array[i].productCode = newProductCode;
        array[i].quantity = newQuantity;
        array[i].valuePerItem = newValuePerItem;
    }
    console.log("The updated table:");
    //Display the updated shoe instances
    console.table(array);
}

//Function to order all the objects in ascending order based on the value per item property
const orderShoesByValuePerItemAscending = array => {
    //sort the array by valuePerItem in ascending order
    array.sort((a, b) => a.valuePerItem - b.valuePerItem);
    console.log("The updated table:");
    console.table(array);
}

