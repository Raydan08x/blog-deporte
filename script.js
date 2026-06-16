const formulario = document.getElementById('formContacto');
 
formulario.addEventListener('submit',function(event){
    event.preventDefault();
 
    const usuario = {
        nombre: document.getElementById('name').value,
        correo: document.getElementById('email').value,
        mensaje: document.getElementById('message').value,
        newsletter: document.getElementById('newsletter').checked,
    };
 
    localStorage.setItem('formContacto', JSON.stringify(usuario));
 
    console.log("Datos guardados en localStorage", usuario);
    alert("Usuario guardado correctamente");
});
