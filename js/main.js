function checkMunicipios() {
    const municipioTitles = document.querySelectorAll('.municipio__item__title');
    const munDescription = document.querySelectorAll('.municipio__description');
    municipioTitles.forEach((element, index) => {
        element.addEventListener('click', event => {
            event.stopPropagation();
            munDescription.forEach((content, ind) => {
                if (index!==ind) {
                    content.classList.remove('active');
                    municipioTitles[ind].classList.remove('active'); // Remover la clase active de los títulos no seleccionados
                }
            });
            munDescription[index].classList.toggle('active'); //Alterna la clase active de la descripción seleccionada 
            municipioTitles[index].classList.toggle('active'); // Alternar la clase active del título seleccionado
        });
    });
};
checkMunicipios();