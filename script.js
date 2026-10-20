
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    const prices = document.querySelectorAll(".price");
    let total = 0;

    prices.forEach(function (price) {
        total += Number(price.textContent.trim());
    });

    const table = document.querySelector("table");

    // Remove previous total row if it exists
    const oldRow = document.getElementById("total-row");
    if (oldRow) {
        oldRow.remove();
    }

    // Create a new row to display total
    const row = document.createElement("tr");
    row.id = "total-row";

    const cell = document.createElement("td");
    cell.colSpan = 2;
    cell.textContent = "Total Price: Rs " + total;

    row.appendChild(cell);
    table.appendChild(row);
};

getSumBtn.addEventListener("click", getSum);
