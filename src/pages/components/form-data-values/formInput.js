/* To make the inputs in the AddPage less repetitive and bulky, I created these arrays.
each array contains objects and when mapped through creates it's respective input and label */

// The array below is for the sku, name and price input.
const formInput = 
[
    {
        id: 1,
        label: "SKU ",
        elemId: "sku",
        name: "sku",
        class: "text-input"
    },
    {
        id: 2,
        label: "Name ",
        name: "name",
        elemId: "name",
        class: "text-input"
    },
    {
        id: 3,
        label: "Price($) ",
        name: "price",
        elemId: "price",
        class: "num-input"
    }
]

// The arrays below are for the different select element options; dvd, book and furniture.

const dvd = 
[
    {
        id: 1,
        name: 'size[]',
        elemId: "size",
        label: 'Size(MB) ',
    }
];

const book = 
[
    {
        id: 1,
        name: 'size[]',
        elemId: "weight",
        label: 'Weight(KG) ',
    }
];

const furniture = 
[
    {
        id: 1,
        name: 'size[]',
        elemId: "length",
        label: 'Length(CM) '
    },
    {
        id:2,
        name: 'size[]',
        elemId: "width",
        label: 'Width(CM) '
    },
    {
        id: 3,
        name: 'size[]',
        elemId: "height",
        label: 'Height(CM) '
    }
];

export default formInput;
export { dvd, book, furniture };