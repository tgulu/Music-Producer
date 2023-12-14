const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))



window.addEventListener('scroll', () => {
    const navbar = document.querySelector('header');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});




const form = document.querySelector("form");
const fullName = document.getElementById("name")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const subject = document.getElementById("subject")
const message = document.getElementById("message")


function sendEmail(){

    const bodyMessage = `Full Name ${fullName.value} <br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jerome.r.power@gmail.com",
        Password : "EBC8E013126EE7D1BEFBAFA364BC6488B423",
        To : 'jerome.r.power@gmail.com',
        From : "jerome.r.power@gmail.com",
        Subject : subject.value,
        Body : "And this is the body"
    }).then(
      message => {
        if(message == "OK"){
            Swal.fire({
                title: "Sent Successfully!",
                text: "Thank You For Reaching Out",
                icon: "Success"
              });

        }
      }
    );
    
}


function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items){
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add('error');

        }
    }
}


form.addEventListener("submit", (e) => {
    e.preventDefault();

    // sendEmail();
    checkInputs();
});

