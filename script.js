document.addEventListener('DOMContentLoaded', () => {
    const userDataForm = document.getElementById('user-data-form');

    if (userDataForm) {
        userDataForm.addEventListener('submit', (event) => {
            event.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');

            if (nameInput && emailInput) {
                const formData = {
                    name: nameInput.value,
                    email: emailInput.value
                };

                console.log('Form Data:', formData);

                // Placeholder for database interaction
                // Example: sendDataToDatabase(formData);
            }
        });
    }
});
