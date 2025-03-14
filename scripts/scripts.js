function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
        tab.style.animation = 'none';
    });

    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.classList.remove('active');
    });

    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
    selectedTab.style.animation = '';

    const selectedLink = document.querySelector(`nav a[onclick="openTab('${tabId}')"]`);
    selectedLink.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    openTab('about-me');
});
