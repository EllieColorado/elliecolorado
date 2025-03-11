function openTab(tabId) {
    // Ocultar todas las pestañas
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Quitar la clase active de todos los enlaces
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.classList.remove('active');
    });

    // Mostrar la pestaña seleccionada
    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');

    // Añadir la clase active al enlace seleccionado
    const selectedLink = document.querySelector(`nav a[onclick="openTab('${tabId}')"]`);
    selectedLink.classList.add('active');
}

// Mostrar la primera pestaña por defecto
document.addEventListener('DOMContentLoaded', () => {
    openTab('experience');
});
