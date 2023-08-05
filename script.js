const login = document.getElementById("LogIn")
const Register = document.getElementById("register");
const Know = document.getElementById("Know-more")
const View = document.querySelector("#View-Details")
const
    console.log(View)
console.log(login)


const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');
console.log(hamburger)

hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
    console.log('button is clicked')
});




//login.onclick = function () {
//    location.href = "https://internshala.com/registration/student"
//    console.log("functio is runing");
//}
Register.onclick = function () {
    location.href = "https://internshala.com/registration/student"
    console.log("functio is runing");
}

View.onclick = function () {
    location.href = "https://internshala.com/job/detail/corporate-sales-executive-fresher-jobs-in-bangalore-at-nobroker-technologies-solutions-private-limited1688031289?referral=homepage"
    console.log("functio is runing");
}

Know.onclick = function () {
    location.href = "https://trainings.internshala.com/?utm_source=is_web_hp_banner_STC_fh_July23&payment_source=hp_banner_STC_fh_July23"
}

const bfun = () => {
    var url = "https://trainings.internshala.com/?utm_source=is_web_homepage_banner/#placement-and-job-guarantee-courses"
    location.href = (url);
    console.log("function is working")

}



const countdownDate = new Date("10 jully 2023").getTime();
console.log(countdownDate);

var second;

const x = setInterval(() => {

    const newDate = new Date().getTime();
    const diff = countdownDate - newDate;


    var day = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    var second = Math.floor((diff % (1000 * 60)) / 1000);
    console.log(day);
    console.log(hours);
    console.log(minute);
    console.log(second);


    let din = document.getElementById("day").innerHTML = day
    let ganta = document.getElementById("hours").innerHTML = hours
    let minutes = document.getElementById("minutes").innerHTML = minute
    let seconds = document.getElementById("second").innerHTML = second

    if (diff <= 0) {
        clearInterval(x);

        let din = document.getElementById("day").innerHTML = "00"
        let ganta = document.getElementById("hours").innerHTML = "00"
        let minutes = document.getElementById("minutes").innerHTML = "00"
        let seconds = document.getElementById("second").innerHTML = "00"

    }

}, 1000);









{
    /* <script type="text/javascript">
        document.getElementById("myButton").onclick = function () {
            location.href = "www.yoursite.com";
        };
    </script> */
}
