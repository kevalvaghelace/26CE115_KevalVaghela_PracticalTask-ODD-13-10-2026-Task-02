function calculateFineBill() {
    const lateDays = Number(document.getElementById("lateDays").value);
    const bookCount = Number(document.getElementById("bookCount").value);
    const memberType = document.getElementById("memberType").value;
    const rate = chooseRate(memberType);
    const basicFine = calculateFine(lateDays, bookCount, rate);
    const processingCharge = 10;
    const total = calculateTotal(basicFine, processingCharge);
    document.getElementById("result").textContent = "Rate: ₹" + rate + " | Basic fine: ₹" + basicFine + " | Total including applicable processing charge: ₹" + total;
    document.getElementById("breakdown").textContent = buildBreakdown(lateDays, bookCount, rate);
}

function calculateFine(days, books, rate) {

    return days * books * rate;
}

function chooseRate(type) {
    if (type === "Student") {
        return 5;
    } else if (type === "Staff") {
        return 3;
    } else if (type === "Visitor") {
        return 10;
    } else {
        return 0;
    }
}

function calculateTotal(fine, processingCharge) {
    if (fine <= 0) {
        return 0;
    } else {
        return fine + processingCharge;
    }
}

function buildBreakdown(days, books, rate) {
    let summary = "";

    for (let day = 1; day <= days; day++) {
        let fine = day * books * rate;
        summary += "Day " + day + ": ₹" + fine + "\n";
    }

    return summary;
}
