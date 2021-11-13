let maleAkaNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']

let femaleAkanNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yea', 'Afua', 'Ama']


let daysofweek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']



function Akangen(event) {
    event.preventDefault()
    let date = document.getElementById('date').value;
    let gender = document.getElementById('gender').value;

    let dayNumber = new Date(date).getDay()



    if (gender == '' || date == '') {
        alert('Error! You have to provide both your gender and date of birth')

    }
    else if (gender == 'Male') {
        alert(`You were born on ${daysofweek[dayNumber]}
            and your Akan name is ${maleAkaNames[dayNumber]}`)

    }
    else {
        alert(`You were born on ${daysofweek[dayNumber]}
            and your Akan name is ${femaleAkanNames[dayNumber]}`)
    }
}
