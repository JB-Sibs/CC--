console.log('JavaScript file is loaded and executed!');

const modalBtns = [...document.getElementsByClassName('modal-button')];
const modalBody = document.getElementById('modal-body-confirm');

modalBtns.forEach(modalBtn =>
    modalBtn.addEventListener('click', () => {
        console.log(modalBtn);
        const pk = modalBtn.getAttribute('data-pk');
        const name = modalBtn.getAttribute('data-quiz');
        const numQuestions = modalBtn.getAttribute('data-questions');
        const score_to_pass = modalBtn.getAttribute('data-pass');
        const time = modalBtn.getAttribute('data-time');

        // Use backticks for string interpolation
        modalBody.innerHTML = `
            <div class="h5 mb-3">Are you sure you want to begin <b>${name}</b>?</div>
            <div class="text-muted">
                <ul>
                    <li>No of questions: <b>${numQuestions}</b></li>
                    <li>Score to pass: <b>${score_to_pass}</b></li>
                    <li>Time in mins: <b>${time}</b></li>
                </ul>
            </div>
        `;
    })
);
