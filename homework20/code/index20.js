let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function totalSales(company) {
    let totalCount = 0;
    for (let key in company) {
        if (Array.isArray(company[key])) { 
            for (let i = 0; i < company[key].length; i++) {
                if (company[key][i].salary) {
                    totalCount += company[key][i].salary;
                }
            }
        } else if (typeof company[key] === 'object') {
            totalCount += totalSales(company[key]);
        }
    }
    return totalCount;
}

const result = totalSales(company);
console.log(result);

