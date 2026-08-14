function calculateAge() {
    const dob = document.getElementById("dob").value;

    if (!dob) {
        document.getElementById("result").innerHTML = "Please select your date of birth.";
        return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    document.getElementById("result").innerHTML =
        `Your Age is <b>${years}</b> Years, <b>${months}</b> Months, and <b>${days}</b> Days.`;
}