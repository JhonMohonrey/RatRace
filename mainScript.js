/*
Developer: Jhon Mohonrey :)
*/
let workPick;
function saveWork() {
    localStorage.setItem('workPick', JSON.stringify(workPick));
}
let saveWorkPick = JSON.parse(localStorage.getItem('workPick'));

if (!saveWorkPick) {
    workPick = 'under';
} else {
    workPick = saveWorkPick;
}
saveWork();

let FindJobBtn;
function saveFind() {
    localStorage.setItem('findJob', JSON.stringify(FindJobBtn));
}

let saveFindJob = JSON.parse(localStorage.getItem('findJob'));

if (!saveFindJob) {
    FindJobBtn = 'false';
} else {
    FindJobBtn = saveFindJob;
}

let degreeWork = [
    {
        Salary: 0,
    },
    {
        Salary: 19500,
    },
    {
        Salary: 23400,
    },
    {
        Salary: 28080,
    },
    {
        Salary: 33696,
    },
];

let degreeSystem;
function DegreeSystem() {
    localStorage.setItem('degreeSystem', JSON.stringify(degreeSystem))
}
let saveDegreeSystem = JSON.parse(localStorage.getItem('degreeSystem'));
if (!saveDegreeSystem) {
    degreeSystem = 0;
} else {
    degreeSystem = saveDegreeSystem;
}

let degreeProgress;
function saveDegreeProgress() {
    localStorage.setItem('degreeProgress', JSON.stringify(degreeProgress));
}
let degreeProgSave = JSON.parse(localStorage.getItem('degreeProgress'));
if (!degreeProgSave) {
    degreeProgress = 0;
} else {
    degreeProgress = degreeProgSave;
}

let underSalary = [
    {
        Salary: 0,
    },
    {
        Salary: 15000,
    },
    {
        Salary: 18000,
    },
    {
        Salary: 21600,
    },
    {
        Salary: 25920,
    },
];

let JobSystem;
function UnderSystem() {
    localStorage.setItem('underSystem', JSON.stringify(JobSystem));
}
let saveUnderSystem = JSON.parse(localStorage.getItem('underSystem'));
if (!saveUnderSystem) {
    JobSystem = 0;
} else {
    JobSystem = saveUnderSystem;
}

let underProgress;
function saveUnderProgress() {
    localStorage.setItem('underProgress', JSON.stringify(underProgress));
}
let UnderProgSave = JSON.parse(localStorage.getItem('underProgress'));
if (!UnderProgSave) {
    underProgress = 0;
} else {
    underProgress = UnderProgSave
}

let deposited;
function saveDeposited() {
    localStorage.setItem('saveDeposited', JSON.stringify(deposited));
}
let depositedSave = JSON.parse(localStorage.getItem('saveDeposited'));

if (!depositedSave) {
    deposited = 0;
} else {
    deposited = depositedSave;
}

let totalDebt;
function debtData() {
    localStorage.setItem('totalDebt', JSON.stringify(totalDebt));
}
let SaveDebt = JSON.parse(localStorage.getItem('totalDebt'));
if (!SaveDebt) {
    totalDebt = 0;
} else {
    totalDebt = SaveDebt;
}

let debtPay;
function debtPaySave() {
    localStorage.setItem('payDebtSave', JSON.stringify(debtPay));
}
let saveDataDebt = JSON.parse(localStorage.getItem('payDebtSave'));
if (!saveDataDebt) {
    debtPay = 0;
} else {
    debtPay = saveDataDebt;
}

let EnrollData;
function saveEnroll() {
    localStorage.setItem('Enroll', JSON.stringify(EnrollData));
}
let currentEnroll = JSON.parse(localStorage.getItem('Enroll'));
if (!currentEnroll) {
    EnrollData = 'NotEnroll';
} else {
    EnrollData = currentEnroll;
}

let collegeYearLevel;
let collegeProgress;
function SaveYearLevel() {
    localStorage.setItem('YearLevel', JSON.stringify(collegeYearLevel));
    localStorage.setItem('progressColl', JSON.stringify(collegeProgress));
}
let currentYear = JSON.parse(localStorage.getItem('YearLevel'));
let CollegeProgSave = JSON.parse(localStorage.getItem('progressColl'));

if (!currentYear) {
    collegeYearLevel = 1;
} else {
    collegeYearLevel = currentYear;
}

if (!CollegeProgSave) {
    collegeProgress = 0;
} else {
    collegeProgress = CollegeProgSave;
}

SaveYearLevel();

let marketHouse = [
    {
        name: "1 Bed Room Apartment",
        price: 1500000,
        rent: 3500,

    },
    {
        name: "2 Bed Room Apartment",
        price: 2500000,
        rent: 7000,

    },
    {
        name: "3 Bed Room Apartment",
        price: 3500000,
        rent: 10500,

    },
    {
        name: "8 Bed Room Apartment",
        price: 12000000,
        rent: 28000,

    },
    {
        name: "12 Bed Room Apartment",
        price: 15000000,
        rent: 42000,

    },
    {
        name: "18 unit Apartment",
        price: 20000000,
        rent: 63000,

    },
];

let BothProperty;
function saveBothProperty() {
    localStorage.setItem('lookForBotProperty', JSON.stringify(BothProperty));
}

let saveBothChecker = JSON.parse(localStorage.getItem('lookForBotProperty'));
if (!saveBothChecker) {
    BothProperty = 'False';
} else {
    BothProperty = saveBothChecker;
}
saveBothProperty();

let nameOwnProperty;
function saveOwnProperty() {
    localStorage.setItem('saveOwnProperty', JSON.stringify(nameOwnProperty));
}

let getSaveOwnProperty = JSON.parse(localStorage.getItem('saveOwnProperty'));
if (!getSaveOwnProperty) {
    nameOwnProperty = [
        {
            name: 'empty',
            price: 'empty',
            id: 'empty'
        }
    ]
} else {
    nameOwnProperty = getSaveOwnProperty;
}
saveOwnProperty();

let currentAge;
let months;
let year;
function saveCurrentAge() {
    localStorage.setItem('saveAge', JSON.stringify(currentAge));
    localStorage.setItem('saveMonth', JSON.stringify(months));
    localStorage.setItem('saveYear', JSON.stringify(year));
}
let saveAgeData = JSON.parse(localStorage.getItem('saveAge'));
let saveMonthData = JSON.parse(localStorage.getItem('saveMonth'));
let saveYearData = JSON.parse(localStorage.getItem('saveYear'));

if (!saveAgeData) {
    currentAge = 15;
} else {
    currentAge = saveAgeData;
}

if (!saveMonthData) {
    months = 1;
} else {
    months = saveMonthData;
}

if (!saveYearData) {
    year = 2015;
} else {
    year = saveYearData;
}
saveCurrentAge();

let cashTotal;

function saveCashTotal() {
    localStorage.setItem('cash', JSON.stringify(cashTotal));
}
let saveCash = JSON.parse(localStorage.getItem('cash'));

if (!saveCash) {
    cashTotal = 0;
} else {
    cashTotal = saveCash;
}

saveCashTotal();

function updateCash() {
    const totalCash = document.getElementById('totalCash');
    cashTotal = Math.round(cashTotal * 100) / 100
    totalCash.textContent = cashTotal;
}
updateCash();

function degreeBtn() {
    if (collegeYearLevel === 'Graduate') {
        if (FindJobBtn === 'false' || FindJobBtn === 'degreeIsActive') {
            //this one decide if player have a degree or not
            const opacity = () => {
                const degree = document.querySelector('.degree');
                const under = document.querySelector('.under');
    
                //this is to hide Under graduate
                const hideAndUnhide = () => {
                    //div for degree
                    const degreeDiv = document.querySelector('.degreeHolder');
                    degreeDiv.classList.remove('hideDegree');
    
                    //for under Graduate
                    const underGrad = document.querySelector('.underGraduate');
                    underGrad.classList.add('hideDegree');
                }
                hideAndUnhide();
                
                degree.classList.remove('notActive');
                under.classList.add('notActive');
                
                //this is to save pick type of job
                workPick = 'Degree';
                saveWork();
            }
            opacity();
            degreeJobSystem();
        }
    }
   
}

//this is for degree loading
function DegreeFindJob() {
    //unhide loading div
    const loadingDiv = document.querySelector('.degreeLoading');
    loadingDiv.classList.remove('HideLoading');
    
    //control for top btn
    FindJobBtn = 'degreeIsActive';
    saveFind();

    //JobSystem
    degreeSystem = 1;
    DegreeSystem();

    //this is for load animation
    const load = document.querySelector('.loadDegree')
    let loadAnimation = 0;
    let timerId;

    function loadAnima() {
        loadAnimation++;
        console.log(loadAnimation)
        load.style.width = `${loadAnimation}%`;

        if (loadAnimation > 99) {
            clearInterval(timerId);
            loadAnimation = 0;

            //this is main div for loading
            const loadingMainDiv = document.querySelector('.degree-find-job');
            loadingMainDiv.classList.add('findJobHide');

            degreeJobSystem();
        }
    }
    timerId = setInterval(loadAnima, 15);
}

//this is job system
function degreeJobSystem() {
    //Salary
    const salary = document.getElementById('degree-salary');
    salary.textContent = degreeWork[degreeSystem].Salary;

    //this is for current level
    const level = document.getElementById('degree-level');
    level.textContent = degreeSystem;

    //this is for progress
    const progress = document.getElementById('degree-progress');
    progress.textContent = `${degreeProgress}%`;
}

//this is to quit job
function DegreeQuit() {
    //unhide loading div
    const loadingDiv = document.querySelector('.degreeLoading');
    loadingDiv.classList.add('HideLoading');

    FindJobBtn = 'false';
    saveFind();

    degreeProgress = 0;
    saveDegreeProgress();

    //loading main div 
    const degreeMain = document.querySelector('.degree-find-job');
    degreeMain.classList.remove('findJobHide')
}

//for exit btn
function backToHome() {
    const HideMain = document.querySelector('.work-container');
    HideMain.classList.add('hideDiv');
}

function underBtn() {
    if (FindJobBtn === 'false' || FindJobBtn === 'UnderIsActive') {
        //this one decide if player have a degree or not
        const opacity = () => {
            const degree = document.querySelector('.degree');
            const under = document.querySelector('.under');

            //this is hide degree holder
            const hideAndUnhide = () => {
                //div for degree
                const degreeDiv = document.querySelector('.degreeHolder');
                degreeDiv.classList.add('hideDegree');

                //for under Graduate
                const underGrad = document.querySelector('.underGraduate');
                underGrad.classList.remove('hideDegree');
            }
            hideAndUnhide();
            
            degree.classList.add('notActive');
            under.classList.remove('notActive');
            
            //this is to save pick type of job
            workPick = 'under';
            saveWork();
        }
        opacity();
        UnderJobSystem();
    }
}

//this is for loading under grad
function underGradFindJob() {
    //unhide loading div
    const loadingDiv = document.querySelector('.underLoading');
    loadingDiv.classList.remove('HideLoading');

    //control for top btn
    FindJobBtn = 'UnderIsActive';
    saveFind();

    //JobSystem
    JobSystem = 1;
    UnderSystem();

    //this is for load animation
    const load = document.querySelector('.load');
    let loadAnimation = 0;
    let timerId;

    function loadAnima() {
        loadAnimation++;
        console.log(loadAnimation)
        load.style.width = `${loadAnimation}%`;

        if (loadAnimation > 99) {
            clearInterval(timerId);
            loadAnimation = 0;

            //this is main div for loading
            const loadingMainDiv = document.querySelector('.under-find-job');
            loadingMainDiv.classList.add('findJobHide');

            UnderJobSystem();
        }
    }

    timerId = setInterval(loadAnima, 15);
}

//this is job system
function UnderJobSystem() {
    //under salary
    const salary = document.getElementById('under-salary');
    salary.textContent = underSalary[JobSystem].Salary;

    //this is for Current level
    const level = document.getElementById('under-level');
    level.textContent = JobSystem;

    //this is for progress
    const progress = document.getElementById('under-progress');
    progress.textContent = `${underProgress}%`;
}

//this is for quit a job button
function UnderQuit() {
    //unhide loading div
    const loadingDiv = document.querySelector('.underLoading');
    loadingDiv.classList.add('HideLoading');

    //control for top btn
    FindJobBtn = 'false';
    saveFind();

    JobSystem = 0;
    UnderSystem();

    underProgress = 0;
    saveUnderProgress();

    //this is main div for loading
    const loadingMainDiv = document.querySelector('.under-find-job');
    loadingMainDiv.classList.remove('findJobHide');
}

//to open main div for back
function bank() {
    const mainBankDiv = document.querySelector('.bank-container');
    mainBankDiv.classList.remove('hide-main-bank-container');
}

//For Back Button inside deposited Container
const DepositedBackBtn = document.querySelector('.back-btn-deposited-div');
DepositedBackBtn.addEventListener('click', () => {
    //to hide withdraw Div Container
    const withdrawDiv = document.querySelector('.deposited-Container');
    withdrawDiv.classList.add('hide-deposited-div');
})

//To oped deposited container
function openDepositedDiv() {
    const withdrawDiv = document.querySelector('.deposited-Container');
    withdrawDiv.classList.remove('hide-deposited-div');
}

//For Percentage Buttons
const buttons = document.querySelectorAll('.perBtn');
buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        let targetData = e.target.classList;
        const amountDeposited = document.getElementById('amount-deposited')

        if (targetData.contains('1')) {
            let cashTotalData = cashTotal;
            let tenPercent = .1;
            result = cashTotalData * tenPercent
            result = Math.round(result * 100) / 100;
            amountDeposited.value = result;
        }

        if (targetData.contains('2')) {
            let cashTotalData = cashTotal;
            let tenPercent = .2;
            result = cashTotalData * tenPercent
            result = Math.round(result * 100) / 100;
            amountDeposited.value = result;
        }

        if (targetData.contains('3')) {
            let cashTotalData = cashTotal;
            let tenPercent = .3;
            result = cashTotalData * tenPercent
            result = Math.round(result * 100) / 100;
            amountDeposited.value = result;
        }

        if (targetData.contains('4')) {
            let cashTotalData = cashTotal;
            let tenPercent = .4;
            result = cashTotalData * tenPercent
            result = Math.round(result * 100) / 100;
            amountDeposited.value = result;
        }

        if (targetData.contains('5')) {
            let cashTotalData = cashTotal;
            let tenPercent = .5;
            result = cashTotalData * tenPercent
            result = Math.round(result * 100) / 100;
            amountDeposited.value = result;
        }

        if (targetData.contains('6')) {
            let cashTotalData = cashTotal;
            let tenPercent = .6;
            result = cashTotalData * tenPercent
            result = Math.round(result * 100) / 100;
            amountDeposited.value = result;
        }

        if (targetData.contains('7')) {
            let cashTotalData = cashTotal;
            let tenPercent = .7;
            result = cashTotalData * tenPercent
            result = Math.round(result * 100) / 100;
            amountDeposited.value = result;
        }

        if (targetData.contains('8')) {
            let cashTotalData = cashTotal;
            let tenPercent = .8;
            result = cashTotalData * tenPercent
            result = Math.round(result * 100) / 100;
            amountDeposited.value = result;
        }

        if (targetData.contains('9')) {
            let cashTotalData = cashTotal;
            let tenPercent = .9;
            result = cashTotalData * tenPercent
            result = Math.round(result * 100) / 100;
            amountDeposited.value = result;
        }

        if (targetData.contains('10')) {
            let cashTotalData = cashTotal;
            let tenPercent = 1;
            result = cashTotalData * tenPercent
            result = Math.round(result * 100) / 100;
            amountDeposited.value = result;
        }
    })
});

const depositedButton = document.querySelector('.withdraw-btn-deposited-div');
depositedButton.addEventListener('click', () => {
    const depositedAmountData = parseFloat(document.getElementById('amount-deposited').value);

    if (depositedAmountData <= cashTotal) {
        let depositedTrans = depositedAmountData - cashTotal;
        cashTotal = Math.abs(depositedTrans);
        deposited += depositedAmountData;

        const depositedMoney = document.getElementById('Deposited');
        depositedMoney.textContent = deposited;
        saveDeposited();
    
        //to save new Cash hand
        updateCash();
        saveCashTotal();

        //to hide withdraw Div Container
        const withdrawDiv = document.querySelector('.deposited-Container');
        withdrawDiv.classList.add('hide-deposited-div');
    }
  
});

//Back to main Home
const backToHomeBank = document.querySelector('.BackToHomeBank');
backToHomeBank.addEventListener('click', () => {
    const mainBankDiv = document.querySelector('.bank-container');
    mainBankDiv.classList.add('hide-main-bank-container');
});

function openWithdrawDiv() {
    const withdrawDiv = document.querySelector('.withdraw-container');
    withdrawDiv.classList.remove('hide-deposited-div');
}

const withdrawBackBtn = document.querySelector('.back-btn-withdraw-div');
withdrawBackBtn.addEventListener('click', () => {
    const withdrawDiv = document.querySelector('.withdraw-container');
    withdrawDiv.classList.add('hide-deposited-div');
});

const withdrawPercent = document.querySelectorAll('.withdrawBtn');
withdrawPercent.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let select = e.target.classList;
        const depositedAmount = document.getElementById('amount-withdraw');

        if (select.contains('1')) {
            let depositedDataSave = deposited;
            let percentData = .1;
            let calculatedWithdraw = depositedDataSave * percentData;
            calculatedWithdraw = Math.round(calculatedWithdraw * 100) / 100;
            depositedAmount.value = calculatedWithdraw;
        }

        if (select.contains('2')) {
            let depositedDataSave = deposited;
            let percentData = .2;
            let calculatedWithdraw = depositedDataSave * percentData;
            calculatedWithdraw = Math.round(calculatedWithdraw * 100) / 100;
            depositedAmount.value = calculatedWithdraw;
        }

        if (select.contains('3')) {
            let depositedDataSave = deposited;
            let percentData = .3;
            let calculatedWithdraw = depositedDataSave * percentData;
            calculatedWithdraw = Math.round(calculatedWithdraw * 100) / 100;
            depositedAmount.value = calculatedWithdraw;
        }

        if (select.contains('4')) {
            let depositedDataSave = deposited;
            let percentData = .4;
            let calculatedWithdraw = depositedDataSave * percentData;
            calculatedWithdraw = Math.round(calculatedWithdraw * 100) / 100;
            depositedAmount.value = calculatedWithdraw;
        }

        if (select.contains('5')) {
            let depositedDataSave = deposited;
            let percentData = .5;
            let calculatedWithdraw = depositedDataSave * percentData;
            calculatedWithdraw = Math.round(calculatedWithdraw * 100) / 100;
            depositedAmount.value = calculatedWithdraw;
        }

        if (select.contains('6')) {
            let depositedDataSave = deposited;
            let percentData = .6;
            let calculatedWithdraw = depositedDataSave * percentData;
            calculatedWithdraw = Math.round(calculatedWithdraw * 100) / 100;
            depositedAmount.value = calculatedWithdraw;
        }

        if (select.contains('7')) {
            let depositedDataSave = deposited;
            let percentData = .7;
            let calculatedWithdraw = depositedDataSave * percentData;
            calculatedWithdraw = Math.round(calculatedWithdraw * 100) / 100;
            depositedAmount.value = calculatedWithdraw;
        }

        if (select.contains('8')) {
            let depositedDataSave = deposited;
            let percentData = .8;
            let calculatedWithdraw = depositedDataSave * percentData;
            calculatedWithdraw = Math.round(calculatedWithdraw * 100) / 100;
            depositedAmount.value = calculatedWithdraw;
        }

        if (select.contains('9')) {
            let depositedDataSave = deposited;
            let percentData = .9;
            let calculatedWithdraw = depositedDataSave * percentData;
            calculatedWithdraw = Math.round(calculatedWithdraw * 100) / 100;
            depositedAmount.value = calculatedWithdraw;
        }

        if (select.contains('10')) {
            let depositedDataSave = deposited;
            let percentData = 1;
            let calculatedWithdraw = depositedDataSave * percentData;
            calculatedWithdraw = Math.round(calculatedWithdraw * 100) / 100;
            depositedAmount.value = calculatedWithdraw;
        }
    });
});

const withdrawFunction = document.querySelector('.withdraw-btn-withdraw-div');
withdrawFunction.addEventListener('click', () => {
    const balance = deposited

    let amountWithdraw = parseFloat(document.getElementById('amount-withdraw').value);

    if (amountWithdraw <= deposited) {

        const withdrawDiv = document.querySelector('.withdraw-container');
        withdrawDiv.classList.add('hide-deposited-div');

        let totalDeposited = document.getElementById('Deposited');
        let withdrawAmount = Math.abs(deposited - amountWithdraw);
        deposited = withdrawAmount;
       
        totalDeposited.textContent = deposited;
        saveDeposited();

        cashTotal += amountWithdraw;
        updateCash();
        saveCashTotal();
    } else {
        console.log('false')
    }
})

function getLoan() {
    const loanDiv = document.querySelector('.loan-container');
    loanDiv.classList.remove('hide-deposited-div');
}

//Loan Back Btn
function takeLoanBack() {
    const loanDiv = document.querySelector('.loan-container');
    loanDiv.classList.add('hide-deposited-div');
}

//take loan btn
function takeLoan() {
    let yearTermData = document.getElementById('years-term').value;
    let loanAmount = parseFloat(document.getElementById('total-loan-amount').value);
    const loanDiv = document.querySelector('.loan-container');
    let termInterest;

    let getCashTotal = cashTotal;
    let multiple = 20;
    let MaxLoan = getCashTotal * multiple;
    console.log('MaxLoan', MaxLoan)

    function realTimeUpdate() {
        const totalLoan = document.getElementById('total-loan');
        totalDebt = Math.round(totalDebt * 100) / 100;
        totalLoan.textContent = totalDebt;

        const monthlyPay = document.getElementById('monthly-pay');
        debtPay = Math.round(debtPay * 100) / 100;
        monthlyPay.textContent = debtPay;
    }

    if (loanAmount <= MaxLoan) {
        if (yearTermData > 0 && yearTermData <= 30) {
            let interestYears = [
                {term: 0.05}
            ];
    
            for (let i = 2; i < 31; i++) {
                interestYears.push({term: `${0.05 * i}`})
            }
    
            if (yearTermData === '1') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[0].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '2') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[1].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '3') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[2].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '4') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[3].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '5') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[4].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '6') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[5].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '7') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[6].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '8') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[7].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '9') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[8].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '10') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[9].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '11') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[10].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '12') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[11].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '13') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[12].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '14') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[13].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '15') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[14].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '16') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[15].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '17') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[16].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '18') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[17].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '19') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[18].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '20') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[19].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '21') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[20].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '22') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[21].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '23') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[22].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '24') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[23].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '25') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[24].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '26') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[25].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '27') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[26].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '28') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[27].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '29') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[28].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
    
            if (yearTermData === '30') {
                if (loanAmount >= 1) {
                    let interestData = Math.round(interestYears[29].term * 100) / 100;
                    termInterest = interestData;
                    let totalInterest = loanAmount * termInterest;
                    let totalVal = loanAmount += totalInterest;
        
                    //Save Function
                    totalDebt += totalVal;
                    debtData();
        
                    // totalVal / yearTermData 
                    let computeYears = totalVal / yearTermData;
                    let computerMonths = computeYears / 12;
                    computerMonths = Math.round(computerMonths * 100) / 100;
        
                    //Save For Monthly pay
                    debtPay += computerMonths;
                    debtPaySave();
                    realTimeUpdate();
        
                    //Cash Hand
                    cashTotal += loanAmount -= totalInterest;
                    saveCashTotal();
                    updateCash()
        
                    loanDiv.classList.add('hide-deposited-div');
                } else {
                    console.log('not Working')
                }
            }
        } else {
            console.log('Your Term Limit is only 30 years')
        }
    } else {
        const maxLoadFeed = document.querySelector('.max-loan');
        maxLoadFeed.classList.remove('hideMax')
        maxLoadFeed.textContent = `Max loan amount is Php ${MaxLoan}`;

        setTimeout(() => {
            maxLoadFeed.classList.add('hideMax')

        }, 2000)
    }
  
}

//Open Main Div
function PayLoan() {
    const payLoanMainContainer = document.querySelector('.payLoan-container');
    payLoanMainContainer.classList.remove('hide-deposited-div');
}

//Back Main Div
function BackPayLoanCon() {
    const payLoanMain = document.querySelector('.payLoan-container');
    payLoanMain.classList.add('hide-deposited-div');
}

//Percentage buttons
const percentageButtonPay = document.querySelectorAll('.payPercentage');
percentageButtonPay.forEach(payPercentage => {
    payPercentage.addEventListener('click', e => {
        let percentTarget = e.currentTarget.classList;
        let totalLoan = totalDebt;
       
        if (totalLoan > 0) {
            if (percentTarget.contains('1')) {
                let percentResult = totalLoan * .1;
                let amountPay = document.getElementById('payAmount');
                amountPay.value = percentResult;
            }
            if (percentTarget.contains('2')) {
                let percentResult = totalLoan * .2;
                let amountPay = document.getElementById('payAmount');
                amountPay.value = percentResult;
            }
            if (percentTarget.contains('3')) {
                let percentResult = totalLoan * .3;
                let amountPay = document.getElementById('payAmount');
                amountPay.value = percentResult;
            }
            if (percentTarget.contains('4')) {
                let percentResult = totalLoan * .4;
                let amountPay = document.getElementById('payAmount');
                amountPay.value = percentResult;
            }
            if (percentTarget.contains('5')) {
                let percentResult = totalLoan * .5;
                let amountPay = document.getElementById('payAmount');
                amountPay.value = percentResult;
            }
            if (percentTarget.contains('6')) {
                let percentResult = totalLoan * .6;
                let amountPay = document.getElementById('payAmount');
                amountPay.value = percentResult;
            }
            if (percentTarget.contains('7')) {
                let percentResult = totalLoan * .7;
                let amountPay = document.getElementById('payAmount');
                amountPay.value = percentResult;
            }
            if (percentTarget.contains('8')) {
                let percentResult = totalLoan * .8;
                let amountPay = document.getElementById('payAmount');
                amountPay.value = percentResult;
            }
            if (percentTarget.contains('9')) {
                let percentResult = totalLoan * .9;
                let amountPay = document.getElementById('payAmount');
                amountPay.value = percentResult;
            }
            if (percentTarget.contains('10')) {
                let percentResult = totalLoan * 1;
                let amountPay = document.getElementById('payAmount');
                amountPay.value = percentResult;
            }
        }
    });
});

function payOff() {
    let LoanBalance = totalDebt;
    if (LoanBalance > 0) {
        let textAmountPay = Math.abs(document.getElementById('payAmount').value);
        if (textAmountPay <= cashTotal) {
            let paidLoan = cashTotal -= textAmountPay;
            
            let debtRemain = totalDebt -= textAmountPay;
            totalDebt = debtRemain;
            debtData()
            let updateTotalLoan = document.getElementById('total-loan');
            updateTotalLoan.textContent = totalDebt;

            cashTotal = paidLoan;
            saveCashTotal();
            updateCash();
        } else {
            let currentBalance = textAmountPay - cashTotal;
            let Balance = textAmountPay;
            let newPayment = Balance - currentBalance;

            let debtRemain = totalDebt -= newPayment;
            totalDebt = debtRemain;
            debtData()
            let updateTotalLoan = document.getElementById('total-loan');
            updateTotalLoan.textContent = totalDebt;

            let paidLoan = cashTotal -= newPayment;
            cashTotal = paidLoan;
            saveCashTotal();
            updateCash();
        }
    }

    //automatic Back
    const payLoanMain = document.querySelector('.payLoan-container');
    payLoanMain.classList.add('hide-deposited-div');
}

//Open main school container
function school() {
    const schoolMainContainer = document.querySelector('.school-container');
    schoolMainContainer.classList.remove('hide-main-school-container');
}

//Back to Home button for College
const backToHomePage = document.getElementById('collegeBackToHome');
backToHomePage.addEventListener('click', () => {
    const schoolMainContainer = document.querySelector('.school-container');
    schoolMainContainer.classList.add('hide-main-school-container');
});

//For enroll Button
function enrollBtn() {
    let coursePrice = document.getElementById('enroll-price').textContent;
    let priceCourse = parseFloat(coursePrice);

    if (cashTotal >= priceCourse) {
        let paidTuition = cashTotal -= priceCourse;
        cashTotal = paidTuition;
        saveCashTotal();
        updateCash();

        const enrollDiv = document.querySelector('.enroll-div');
        enrollDiv.classList.add('hideEnroll');

        EnrollData = 'Enroll';
        saveEnroll();
    } else {
        const feedBack = document.querySelector('.feedBack');
        feedBack.classList.remove('hideFeed');

        setTimeout(() => {
            feedBack.classList.add('hideFeed');
        }, 1200);
    }
}

function RealEstate() {
    //Hide Main Div Real Estate container
    const mainRealEstateDiv = document.querySelector('.realEstate');
    mainRealEstateDiv.classList.remove('HideMainRealEstate');
}

const backButtonRealEstateMain = document.getElementById('RealEstateBackToHome');
backButtonRealEstateMain.addEventListener('click', () => {
       //Hide Main Div Real Estate container
       const mainRealEstateDiv = document.querySelector('.realEstate');
       mainRealEstateDiv.classList.add('HideMainRealEstate');
})

let currentPropertyIndex = 0;

//buy property
function BuyProperty() {
    //For Property Name
    const PropertyName = document.getElementById('marketPropertyName');
    PropertyName.textContent = marketHouse[currentPropertyIndex].name;

    //For Property Price
    const PropertyPrice = document.getElementById('MarketPropertyPrice');
    PropertyPrice.textContent = marketHouse[currentPropertyIndex].price;

    //for rent
    const rentProperty = document.getElementById('marketRent');
    rentProperty.textContent = marketHouse[currentPropertyIndex].rent;
}

//For prev Button
function buyPrevButton() {
    if (currentPropertyIndex > 0) {
        currentPropertyIndex--;
        BuyProperty();
    }
}

//For Next Button
function buyNextButton() {
    if (currentPropertyIndex <= marketHouse.length -2) {
        currentPropertyIndex++;
        BuyProperty();
    }
}

//For Buy Property Button
function buyProperty() {
    let checkPrice = parseFloat(
        document.getElementById('MarketPropertyPrice').textContent
    );

    //Get Property Name
    const BothPropertyName = document.getElementById('marketPropertyName').textContent;

    //Get property Price
    const BothPropertyPrice = parseFloat(
        document.getElementById('MarketPropertyPrice').textContent
    );

    //Get Property rent 
    const propertyRentData = parseFloat(
        document.getElementById('marketRent').textContent
    );

    if (checkPrice <= cashTotal) {
        if (BothProperty === 'False') {nameOwnProperty.pop();}

        //For Both Property cheeking
        BothProperty = 'True';
        saveBothProperty();
        renderDefaultOwn();

        let deductPriceProperty = cashTotal - checkPrice;
        cashTotal = deductPriceProperty;
        saveCashTotal();
        updateCash();

        function randomId() {
            // let randomId = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];
            let randomId = [ '1',  '2', '3', '4', '5',];

            
            let idGenerator1 = Math.floor(Math.random() * randomId.length);
            let idGenerator2 = Math.floor(Math.random() * randomId.length);
            let idGenerator3 = Math.floor(Math.random() * randomId.length);
            let idGenerator4 = Math.floor(Math.random() * randomId.length);
            let idGenerator5 = Math.floor(Math.random() * randomId.length);
            let idGenerator6 = Math.floor(Math.random() * randomId.length);
            let idGenerator7 = Math.floor(Math.random() * randomId.length);
            let idGenerator8 = Math.floor(Math.random() * randomId.length);
            let idGenerator9 = Math.floor(Math.random() * randomId.length);
            let idGenerator10 = Math.floor(Math.random() * randomId.length);
            let idGenerator11 = Math.floor(Math.random() * randomId.length);
            let idGenerator12 = Math.floor(Math.random() * randomId.length);
            let idGenerator13 = Math.floor(Math.random() * randomId.length);
            let idGenerator14 = Math.floor(Math.random() * randomId.length);
            let idGenerator15 = Math.floor(Math.random() * randomId.length);
            let idGenerator16 = Math.floor(Math.random() * randomId.length);
            let idGenerator17 = Math.floor(Math.random() * randomId.length);
            let idGenerator18 = Math.floor(Math.random() * randomId.length);
            let idGenerator19 = Math.floor(Math.random() * randomId.length);
            let idGenerator20 = Math.floor(Math.random() * randomId.length);
            
            // let pushId = `${randomId[idGenerator1]}${randomId[idGenerator2]}${randomId[idGenerator3]}${randomId[idGenerator4]}${randomId[idGenerator5]}${randomId[idGenerator6]}${randomId[idGenerator7]}${randomId[idGenerator8]}${randomId[idGenerator9]}${randomId[idGenerator10]}${randomId[idGenerator11]}${randomId[idGenerator12]}${randomId[idGenerator13]}${randomId[idGenerator14]}${randomId[idGenerator15]}${randomId[idGenerator16]}${randomId[idGenerator17]}${randomId[idGenerator18]}${randomId[idGenerator19]}${randomId[idGenerator20]}`;
            let pushId = `${randomId[idGenerator1]}${randomId[idGenerator2]}${randomId[idGenerator3]}${randomId[idGenerator4]}${randomId[idGenerator5]}`;
        
            return pushId;
        }

        nameOwnProperty.push(
            {
                name: `${BothPropertyName}`,
                price: `${BothPropertyPrice}`,
                id: `${randomId()}`,
                rent: `${propertyRentData}`,
            },
        );
        saveOwnProperty();
        ownDataRender();

        //Success feed back
        const Success = document.querySelector('.successFeed');
        Success.classList.remove('hideSuccessFeed');

        setTimeout(() => {
            Success.classList.add('hideSuccessFeed');

        }, 800)
    } else {
        const feedBackResult = document.querySelector('.feedBackResult');
        feedBackResult.classList.remove('feedHide');

        setTimeout(() => {
            feedBackResult.classList.add('feedHide');
        }, 1200)
    }
}

//Buy button
const buyMarket = document.querySelector('.buyProperty');
buyMarket.addEventListener('click', () => {
       //Hide Buy Side
       const buyHouse = document.querySelector('.BuyProperty');
       buyHouse.classList.remove('hideContainerData');
   
       //Unhide own property side
       const ownPropertySide = document.querySelector('.ownProperty');
       ownPropertySide.classList.add('hideContainerData');

       const ownButton = document.querySelector('.OwnProperty');
       ownButton.classList.add('opacity')

       buyMarket.classList.remove('opacity')
})

function renderDefaultOwn() {
    if (BothProperty === 'False') {
        const noProperty = document.querySelector('.noProperty');
        noProperty.classList.remove('hideNoProperty');

        //Hide main
        const ownInside = document.querySelector('.ownInsideData');
        ownInside.classList.add('hideNoProperty');
    }
    
    if (BothProperty === 'True') {
        const noProperty = document.querySelector('.noProperty');
        noProperty.classList.add('hideNoProperty');

        //Hide main
        const ownInside = document.querySelector('.ownInsideData');
        ownInside.classList.remove('hideNoProperty');
    }
}

let OwnCurrentIndex = 0;
let countProperty = 1;
//Prev button
function ownPrev() {
    if (OwnCurrentIndex > 0) {
        OwnCurrentIndex--;
        countProperty--;
        ownDataRender();
    }
}

//Next Button
function ownNext() {
    if (OwnCurrentIndex <= nameOwnProperty.length -2) {
        OwnCurrentIndex++;
        countProperty++;
        ownDataRender();
    }
}

//Inside own Data
function ownDataRender() {
    const ownPropertyName = document.getElementById('ownPropertyName');
    ownPropertyName.textContent = nameOwnProperty[OwnCurrentIndex].name;

    //Own Property Price
    const ownPropertyPrice = document.getElementById('ownPropertyPrice');
    ownPropertyPrice.textContent = nameOwnProperty[OwnCurrentIndex].price;

    //own property id
    const propertyId = document.getElementById('propertyID');
    propertyId.textContent = nameOwnProperty[OwnCurrentIndex].id;

    //For own rend 
    const rendIncome = document.getElementById('rendOWnProperty');
    rendIncome.textContent = nameOwnProperty[OwnCurrentIndex].rent;

    //For count property
    const counting = document.getElementById('countProperty');
    counting.textContent = countProperty;

    //for Option
    const optionButton = document.querySelector('.option');
    optionButton.addEventListener('click', () => {
        const ownSellBtn = document.querySelector('.OwnSell');
        ownSellBtn.classList.remove('hideOwnButton');

        optionButton.classList.add('hideOwnButton');
    });
}

//For Sell Button
const ownSell = document.querySelector('.OwnSell');
ownSell.addEventListener('click', () => {
    function updateMyCash() {
      
        const optionButton = document.querySelector('.option');
        optionButton.classList.remove('hideOwnButton');

        //Hide sell Button
        const ownSellBtn = document.querySelector('.OwnSell');
        ownSellBtn.classList.add('hideOwnButton');

        let addPrice = nameOwnProperty[OwnCurrentIndex].price;
        addPrice = parseFloat(addPrice);
        let propertySellTax = addPrice * .2;
        let deductedTax = addPrice -= propertySellTax;
        cashTotal += deductedTax;
        saveCashTotal();
        updateCash();
    }
    updateMyCash();

    let currentDisplay = document.getElementById('propertyID').textContent;

    nameOwnProperty = nameOwnProperty.filter(test => {
        if (test.id === currentDisplay) {
            return false;
        } else {
            return true;
        }
    });
    saveOwnProperty();
    ownDataRender();
   
});
let checkerIndex;

function noneUpdate() {
    if (nameOwnProperty.length === 0) {
        //For Both Property cheeking
        BothProperty = 'False';
        saveBothProperty();
        renderDefaultOwn();
        renderDefaultOwn();
    
        nameOwnProperty.push(
            {
                name: 'empty',
                price: 'empty',
                id: 'empty'
            }
        );
        saveOwnProperty()
    }
}
checkerIndex = setInterval(noneUpdate, 300);

const ownPropertyButton = document.querySelector('.OwnProperty');
ownPropertyButton.addEventListener('click', () => {
    //Hide Buy Side
    const buyHouse = document.querySelector('.BuyProperty');
    buyHouse.classList.add('hideContainerData');

    //Unhide own property side
    const ownPropertySide = document.querySelector('.ownProperty');
    ownPropertySide.classList.remove('hideContainerData');

    const buyButton = document.querySelector('.buyProperty');
    buyButton.classList.add('opacity')

    ownPropertyButton.classList.remove('opacity');
})

document.addEventListener('DOMContentLoaded', () => {
    //this is for Opacity Btn
    const opacityBtn = () => {
        if (workPick === 'under') {
            underBtn();
        }
        
        if (workPick === 'Degree') {
            degreeBtn()
        }
    }
    opacityBtn();

    //this is to hide main loading div
    const mainLoadingHide = () => {
        if (FindJobBtn === 'degreeIsActive') {
            //this is main div for loading
            const loadingMainDiv = document.querySelector('.degree-find-job');
            loadingMainDiv.classList.add('findJobHide');
        }
    
        if (FindJobBtn === 'UnderIsActive') {
            //this is main div for loading
            const loadingMainDiv = document.querySelector('.under-find-job');
            loadingMainDiv.classList.add('findJobHide');
        }
    }
    mainLoadingHide();

    //For Bank system
    function depositedData() {
        const depositedMoney = document.getElementById('Deposited');
        deposited = Math.round(deposited * 100) / 100;
        depositedMoney.textContent = deposited;
        saveDeposited();
    }
    depositedData();

    //Bank Debt
    function bankDebt() {
        const totalLoan = document.getElementById('total-loan');
        totalDebt = Math.round(totalDebt * 100) / 100;
        totalLoan.textContent = totalDebt;

        const monthlyPay = document.getElementById('monthly-pay');
        debtPay = Math.round(debtPay * 100) / 100;
        monthlyPay.textContent = debtPay;
    }
    bankDebt();

    //School System
    function schoolSystem() {
        if (EnrollData === 'NotEnroll') {
            const enrollContainer = document.querySelector('.enroll-div');
            enrollContainer.classList.remove('hideEnroll');
        } 
        if (EnrollData === 'Enroll') {
            const enrollContainer = document.querySelector('.enroll-div');
            enrollContainer.classList.add('hideEnroll');
        }

        if (collegeYearLevel === 'Graduate') {
            const diplomaContainer = document.querySelector('.diploma');
            diplomaContainer.classList.remove('hideDiploma');
        } else {
             //For Year Level
            const currentYearLevel = document.getElementById('collegeCurrent');
            currentYearLevel.textContent = collegeYearLevel;

            //For Progress College
            const progressCollage = document.getElementById('progressCollege');
            collegeProgress = Math.round(collegeProgress * 100) / 100;
            progressCollage.textContent = collegeProgress + '%';
        }
    }
    schoolSystem();

    //Function for Real Estate Section
    function renderRealEstate() {
        //for Buy Property Function
        BuyProperty();

        //for default own property
        renderDefaultOwn();

        ownDataRender();
    }
    renderRealEstate();
});

function work() {
    const workContainer = document.querySelector('.work-container');
    workContainer.classList.remove('hideDiv');
}

//This is next btn and really powerful
function next() {
    function JobProgress() {
        function underProg() {
            if (JobSystem < 4) {
                underProgress += 2;
                underProgress = Math.round(underProgress * 100) / 100;
                saveUnderProgress();
                UnderJobSystem();
        
                if (underProgress > 99) {
                    JobSystem++;
                    UnderSystem();
                   
                    underProgress = 0;
                    saveUnderProgress();
        
                    UnderJobSystem();
                }
            }
        }
    
        function degreeProg() {
            if (degreeSystem < 4) {
                degreeProgress += 2;
                degreeProgress = Math.round(degreeProgress * 100) / 100;
                degreeJobSystem();
                saveDegreeProgress();
        
                if (degreeProgress > 99) {
                    degreeSystem++;
                    DegreeSystem();
        
                    degreeProgress = 0;
                    degreeJobSystem();
        
                    saveDegreeProgress();
                }
            }
        }
        
        if (FindJobBtn === 'UnderIsActive') {
            underProg();
        }
    
        if (FindJobBtn === 'degreeIsActive') {
            degreeProg();
        }
    }
    JobProgress();
    
    function moneyCalculation() {
        if (FindJobBtn === 'UnderIsActive') {
            const currentJobIncome = underSalary[JobSystem].Salary;
            let IncomeTax = .40;
    
            let calculateIncomeTax = currentJobIncome * IncomeTax;
            let totalIncome = currentJobIncome - calculateIncomeTax;
            cashTotal += totalIncome;
            updateCash()
            saveCashTotal()
        }

        if (FindJobBtn === 'degreeIsActive') {
            const currentJobIncome = degreeWork[degreeSystem].Salary;
            let IncomeTax = .40;

            let calculateIncomeTax = currentJobIncome * IncomeTax;
            let totalIncome = currentJobIncome - calculateIncomeTax;

            cashTotal += totalIncome;
            updateCash()
            saveCashTotal()
        }
    }
    moneyCalculation();

    function DebtRepaymentSystem() {
        function realTimeDeduction() {
            const totalLoan = document.getElementById('total-loan');
            totalDebt = Math.round(totalDebt * 100) / 100;
            totalLoan.textContent = totalDebt;
    
            const monthlyPay = document.getElementById('monthly-pay');
            debtPay = Math.round(debtPay * 100) / 100;
            monthlyPay.textContent = debtPay;
        }

        let DebtDeduction = totalDebt;
        let Deduction = debtPay;
        let HandCash = cashTotal;

        let CashData = HandCash -= Deduction;
        let Deduct = DebtDeduction -= Deduction
        debtData();
        realTimeDeduction();

        cashTotal = CashData;
        saveCashTotal();
        updateCash();
           
        totalDebt = Deduct;
        debtData();
        realTimeDeduction();

        if (totalDebt === 0 || totalDebt < 0) {
            debtPay = 0;
            totalDebt = 0;
            debtPaySave();
            debtData() 
            realTimeDeduction();
        }
    }
    DebtRepaymentSystem();

    //For School progress
    function SchoolProgress() {
        if (EnrollData === 'Enroll') {
            collegeProgress += 8.33;
            collegeProgress = Math.round(collegeProgress * 100) / 100;
            SaveYearLevel();
    
            //For Progress College
            const progressCollNextBtn = document.getElementById('progressCollege');
            progressCollNextBtn.textContent = collegeProgress + '%';
    
            if (collegeProgress > 100) {
                collegeProgress = 0;
                collegeYearLevel++;
                SaveYearLevel();
    
                //For Year Level
                const levelYearCol = document.getElementById('collegeCurrent');
                levelYearCol.textContent = collegeYearLevel;
    
                //For Progress College
                const progressCollNextBtn = document.getElementById('progressCollege');
                progressCollNextBtn.textContent = collegeProgress + '%';
    
                if (collegeYearLevel > 4) {
                    collegeYearLevel = 'Graduate';
                    SaveYearLevel();
    
                     //For Year Level
                    const levelYearCol = document.getElementById('collegeCurrent');
                    levelYearCol.textContent = collegeYearLevel;
    
                    //Update Diploma
                    const diplomaContainer = document.querySelector('.diploma');
                    diplomaContainer.classList.remove('hideDiploma');

                    EnrollData = 'Finish';
                    saveEnroll();
                }
            }
        }
    }
    SchoolProgress();

    //For real estate
    function realEstateFunc() {
        if (!nameOwnProperty[0].rent) {
            
        } else {
            let money = 0;
            nameOwnProperty.forEach(propertyBoth => {
                let cashFlow = parseFloat(propertyBoth.rent);
                money += cashFlow;
            });
    
            cashTotal += money;
            saveCashTotal();
            updateCash();
        }
    }
    realEstateFunc();

    //Date function
    months++
    saveCurrentAge();
    dateSystem();

    if (months > 12) {
        months = 1;
        year++;
        currentAge++;
        saveCurrentAge();
        dateSystem();
    }

}

function dateSystem() {
    const ageRender = document.getElementById('age');
    ageRender.textContent = currentAge;

    const monthRender = document.getElementById('month');
    monthRender.textContent = months;

    const yearRender = document.getElementById('year');
    yearRender.textContent = year;
}
dateSystem();

//Reset
function checkAgeReset() {
    if (currentAge > 99) {
        const hideDiploma = document.querySelector('.diploma');
        hideDiploma.classList.add('hideDiploma');
    
        const degree = document.querySelector('.degree');
        const under = document.querySelector('.under');
        degree.classList.add('notActive');
        under.classList.remove('notActive');
    
        const popUp = document.querySelector('.popUp');
        popUp.classList.add('hide');
        
        workPick = 'under';
        FindJobBtn = 'false';
        degreeSystem = 0;
        degreeProgress = 0;
        JobSystem = 0;
        underProgress = 0;
        deposited = 0;
        totalDebt = 0;
        debtPay = 0;
        EnrollData = 'NotEnroll';
        collegeYearLevel = 1;
        collegeProgress = 0;
        BothProperty = 'False';
        currentAge = 15;
        months = 1;
        year = 2015;
        cashTotal = 0;
        saveCashTotal();
        updateCash();
        saveWork()
        saveFind()
        DegreeSystem()
        saveDegreeProgress()
        UnderSystem()
        saveUnderProgress()
        saveDeposited()
        debtData()
        debtPaySave()
        saveEnroll()
        SaveYearLevel()
        saveBothProperty();
        saveCurrentAge();
        
        nameOwnProperty.push(
            {
                name: 'empty',
                price: 'empty',
                id: 'empty'
            }
        );
        saveOwnProperty();
        UnderQuit();
        DegreeQuit();

        const enrollDiv = document.querySelector('.enroll-div');
        enrollDiv.classList.remove('hideEnroll');

        let currentDisplay = document.getElementById('propertyID').textContent;

        nameOwnProperty = nameOwnProperty.filter(test => {
            if (test.id === currentDisplay) {
                return false;
            } else {
                return false;
            }
        });
        saveOwnProperty();
        ownDataRender();
    
        renderDefaultOwn()
        ownDataRender()
        noneUpdate()

        const loadRef = document.getElementById('total-loan');
        loadRef.textContent = 0;
    
        const monthlyPayLoadref = document.getElementById('monthly-pay');
        monthlyPayLoadref.textContent = 0;
    
    }
}

setInterval(checkAgeReset, 300);

const reset = document.querySelector('.resetButton11');
reset.addEventListener('click', () => {
    const popUp = document.querySelector('.popUp');
    popUp.classList.remove('hide');


})

function yesReset() {
    const loadRef = document.getElementById('total-loan');
    loadRef.textContent = 0;

    const monthlyPayLoadRef = document.getElementById('monthly-pay');
    monthlyPayLoadRef.textContent = 0;

    const hideDiploma = document.querySelector('.diploma');
    hideDiploma.classList.add('hideDiploma');

    const degree = document.querySelector('.degree');
    const under = document.querySelector('.under');
    degree.classList.add('notActive');
    under.classList.remove('notActive');

    const popUp = document.querySelector('.popUp');
    popUp.classList.add('hide');

    workPick = 'under';
    FindJobBtn = 'false';
    degreeSystem = 0;
    degreeProgress = 0;
    JobSystem = 0;
    underProgress = 0;
    deposited = 0;
    totalDebt = 0;
    debtPay = 0;
    EnrollData = 'NotEnroll';
    collegeYearLevel = 1;
    collegeProgress = 0;
    BothProperty = 'False';
    currentAge = 15;
    months = 1;
    year = 2015;
    cashTotal = 0;
    saveCashTotal();
    updateCash();
    saveWork()
    saveFind()
    DegreeSystem()
    saveDegreeProgress()
    UnderSystem()
    saveUnderProgress()
    saveDeposited()
    debtData()
    debtPaySave()
    saveEnroll()
    SaveYearLevel()
    saveBothProperty();
    saveCurrentAge();
        
    nameOwnProperty.push(
        {
            name: 'empty',
            price: 'empty',
            id: 'empty'
        }
    );
    saveOwnProperty();
    UnderQuit();
    DegreeQuit();

    const enrollDiv = document.querySelector('.enroll-div');
    enrollDiv.classList.remove('hideEnroll');

    const ageRender = document.getElementById('age');
    ageRender.textContent = currentAge;

    const monthRender = document.getElementById('month');
    monthRender.textContent = months;

    const yearRender = document.getElementById('year');
    yearRender.textContent = year;

    let currentDisplay = document.getElementById('propertyID').textContent;

    nameOwnProperty = nameOwnProperty.filter(test => {
        if (test.id === currentDisplay) {
            return false;
        } else {
            return false;
        }
    });
    saveOwnProperty();
    ownDataRender();

    renderDefaultOwn();
    ownDataRender();
    noneUpdate();
    DegreeQuit();
}

function noReset() {
    const popUp = document.querySelector('.popUp');
    popUp.classList.add('hide');
}