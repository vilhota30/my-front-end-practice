// const btnSubmit = document.getElementById('btnSubmit');

// btnSubmit.addEventListener('click', (e) => {
//     e.preventDefault(); 

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const telNumber = document.getElementById('telNumber').value;
//     const userText = document.getElementById('userText').value;

//     let errors = [];

//     if (name.length < 5) {
//         errors.push("Name should be at least 5 characters long.");
//     }

//     if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
//         errors.push("Invalid email address.");
//     }

//     if (!telNumber.startsWith('+380')) {
//         errors.push("Phone number should start with +380.");
//     }

//     if (userText.length < 5) {
//         errors.push("Comment should be at least 5 characters long.");
//     }

//     if (errors.length > 0) {
//         errors.forEach(error => {
//             console.error(error);
//         });
//     } else {
//         console.log("Name:", name);
//         console.log("Email:", email);
//         console.log("Phone number:", telNumber);
//         console.log("Comment:", userText);
//         document.forms["form"].submit();
//     }
// });

const btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telNumber = document.getElementById('telNumber').value;
    const userText = document.getElementById('userText').value;

    let errors = [];

    if (!name.match(/.{5,}/)) {
        errors.push("Name should be at least 5 characters long.");
        document.getElementById('nameError').innerText = "Name should be at least 5 characters long.";
    } else {
        document.getElementById('nameError').innerText = "";
    }

    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        errors.push("Invalid email address.");
        document.getElementById('emailError').innerText = "Invalid email address.";
    } else {
        document.getElementById('emailError').innerText = "";
    }

    if (!telNumber.match(/^\+380\d{9}$/)) {
        errors.push("Phone number should be in the format +380XXXXXXXXX.");
        document.getElementById('telNumberError').innerText = "Phone number should be in the format +380XXXXXXXXX.";
    } else {
        document.getElementById('telNumberError').innerText = "";
    }

    if (!userText.match(/.{5,}/)) {
        errors.push("Comment should be at least 5 characters long.");
        document.getElementById('userTextError').innerText = "Comment should be at least 5 characters long.";
    } else {
        document.getElementById('userTextError').innerText = "";
    }

    if (errors.length > 0) {
        errors.forEach(error => {
            console.error(error);
        });
    } else {
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone number:", telNumber);
        console.log("Comment:", userText);
        // document.forms["form"].submit(); 

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('telNumber').value = '';
        document.getElementById('userText').value = '';
    }
});

