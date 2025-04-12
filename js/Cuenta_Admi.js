function openModal(id) {
    document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}

function updateData() {
    const newName = document.getElementById('newName').value;
    const newEmail = document.getElementById('newEmail').value;

    if (newName && newEmail) {
        document.getElementById('user-name').innerText = newName;
        document.getElementById('user-email').innerText = newEmail;
        closeModal('updateModal');
        alert('Datos actualizados correctamente.');
    } else {
        alert('Por favor completa ambos campos.');
    }
}

function changePassword() {
    const newPass = document.getElementById('newPassword').value;
    const confirmPass = document.getElementById('confirmPassword').value;

    if (newPass && confirmPass && newPass === confirmPass) {
        closeModal('passwordModal');
        alert('Contraseña actualizada correctamente.');
    } else {
        alert('Las contraseñas no coinciden o están vacías.');
    }
}

function deleteAccount() {
    closeModal('deleteModal');
    alert('Cuenta eliminada (simulado). Aquí iría una llamada al backend.');
    // Redirigir o eliminar sesión, etc.
}

function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const profilePic = document.getElementById('profilePic');
            profilePic.src = e.target.result;

            // Ocultar icono de cámara
            const cameraIcon = document.querySelector('.camera-icon');
            if (cameraIcon) {
                cameraIcon.style.display = 'none';
            }
        };
        reader.readAsDataURL(file);
    }
}

