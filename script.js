const app = (() => {
    const _dollarInput = document.querySelector('.container__form__dollar');
    const _centOutput = document.querySelector('.container__form__cent');
    const _quarterTotal = document.querySelector('.container__table__row__quarters');
    const _dimeTotal = document.querySelector('.container__table__row__dimes');
    const _nickelTotal = document.querySelector('.container__table__row__nickels');
    const _pennyTotal = document.querySelector('.container__table__row__pennies');

    _dollarInput.addEventListener('input', (event) => {
        let _dollar = event.target.value;

        if ( validDollarInput(_dollar) ) {
            let _cent = convertDollarToCent(_dollar);
            renderCentOutput(_cent);
        } else {
            renderCentOutput(0);
        }
    })

    function validDollarInput(dollar) {
        return validDollarDot(dollar) && 
            validDollarValue(dollar) &&
            validDollarChar(dollar);
    }

    function validDollarDot(dollar) {
        let _re = /\./g;
        return !dollar.match(_re) || dollar.match(_re).length <= 1;
    }

    function validDollarChar(dollar) {
        let _re = /[a-z]/g;
        return !dollar.match(_re);
    }

    function validDollarValue(dollar) {
        return !isNaN(Number.parseFloat(dollar));
    }

    function convertDollarToCent(dollar) {
        return Math.round(dollar * 100);
    }

    function renderCentOutput(cent) {
        _centOutput.value = cent;
    }
})();