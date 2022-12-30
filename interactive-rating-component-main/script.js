const rateContainer = document.getElementById('rate-container');
const rateNumbers = document.getElementsByClassName('rate-number');

const mouseoverItem = document.getElementsByClassName('mouseover');

// /\ GLOBAL ELEMENTS /\ \\

// const changeColorRatingNumbers = () => {
//     for (let index = 0; index < rateNumbers.length; index += 1) {
//         rateNumbers[index].addEventListener('mouseover', () => {
//             if (mouseoverItem.length > 0) {
//                 mouseoverItem[0].classList.remove('mouseover');
//                 rateNumbers[index].classList.add('mouseover');
//             } else {
//                 rateNumbers[index].classList.add('mouseover');
//             }
//         })
//     }
// }

const changeColorRatingNumbers = () => {
    for (let index = 0; index < rateNumbers.length; index += 1) {
        rateNumbers[index].addEventListener('mouseover', () => {
            rateNumbers[index].classList.add('mouseover');
            rateNumbers[index].addEventListener('mouseout', () => {
                rateNumbers[index].classList.remove('mouseover')
            });
        });
    }
};

window.onload = () => {
    changeColorRatingNumbers();
};
