// const book = {
//     contacts: [
//         {
//             name: "Serhii",
//             phone: "+380999999999",
//             email: "example@email.com",
//         },
//     ],
//     find: function(name) {

//         for (let i = 0; i < this.contacts.length; i++) {
//             if (this.contacts[i].name === name) {
//                 return this.contacts[i];
//             }
//         }

//         return "Контакт не знайдено";
//     },
//     add: function(contact) {

//         const existContact = this.find(contact.name);
//         if (existContact !== "Контакт не знайдено") {
//             return "Контакт з таким ім'ям вже існує";
//         }

//         this.contacts.push(contact);
//         console.log('contacts array after add new contact =>', this.contacts);
//         return "Контакт додано";
//     },
// };

// const result = book.find("Serhii");
// console.log('method find =>', result);


// const result2 = book.add({ name: "Taras", phone: "+380501899784", email: "kravchenkotaras@email.com" });
// console.log('method add =>', result2);


// const result3 = book.add({ name: "Olena", phone: "+380601667542", email: "olenavolovez@email.com" });
// console.log('method add-Not-the-same =>', result3); 

// const result4 = book.add({ name: "Olena", phone: "+380601667542", email: "olenavolovez@email.com" });
// console.log('method add-The-Same =>', result4); 


const contacts = [
    {
        name: "Serhii",
        phone: "+380999999999",
        email: "example@email.com",
    },
    {
        name: "Taras",
        phone: "+380888888888",
        email: "taras@email.com",
    },
];


function Contact({ name, phone, email }) {
    this.name = name;
    this.phone = phone;
    this.email = email;
}

function Book(contacts) {

    if ((contacts instanceof Contact)) {
        throw new Error('Параметр "contacts" має бути екземпляром класу Contact');
    }
    this.contacts = contacts;
}

Book.prototype.find = function(name) {
    for (let i = 0; i < this.contacts.length; i++) {
        if (this.contacts[i].name === name) {
            return this.contacts[i];
        }
        
    }
    return "Контакт не знайдено";
};

Book.prototype.add = function(contact) {
    const existContact = this.find(contact.name);
    if (existContact !== "Контакт не знайдено") {
        console.log('Контакт з таким імям існує');
        return "Контакт з таким ім'ям вже існує";
    }
    this.contacts.push(contact);
    console.log('Add-New-Contact =>', contact);
    return "Контакт додано";
};

const mappedContacts = contacts.map((el) => {
    return new Contact(el);
});

const newContactEl = new Contact({name: 'Vitaly', phone: +3806666666, email: 'vitaly@gmail.com'});

console.log('newContactEl => ', newContactEl);

const book = new Book(mappedContacts);
console.log('user-contact-book =>', book);


book.add({name: 'Alina', email: 'user@mail.com', phone: +38056783421});

const result = book.find('Serhii');
console.log('Find-Contact-By-Name', result);

book.add({name: 'Alina', email: 'user@mail.com', phone: +38056783421}); // the same contact //



