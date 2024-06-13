const  transactions = [
    {
        id: 1,
        name: "salario",
        amount: 1000,
        date: new Date(),
        type: "rendimento"
    },
    {
        id: 2,
        name: "parcela da moto",
        amount: 43.82,
        date: new Date(),
        type: "despesas"
    },
    {
        id: 3,
        name: "internet",
        amount: 20,
        date: new Date(),
        type: "despesas"
    }
];

const formatter = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
    signDisplay: "always",
});
const list = document.getElementById("transactionList");
const status = document.getElementById("status")

function renderList() {
    list.innerHTML = "";

    if(transactions.length === 0) {
        status.textContent = 'Sem transações.';
        return;
    }

    transactions.forEach(({ name, date, amount })=>{
        const li = document.createElement("li");

        li.innerHTML = `
            <div class="name">
                <h4>${name}</h4>
                <p>${new Date(date).toLocaleDateString()}</p>
            </div>

            <div class="amount">
                <span>${formatter.format(amount)}</span>
            </div>
        `;

        list.appendChild(li);

    })
}

renderList();