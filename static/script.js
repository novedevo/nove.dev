if (localStorage.getItem('data-theme')) {
    document.documentElement.setAttribute('data-theme', localStorage.getItem('data-theme'));
}

function changeTheme() {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('data-theme', 'light');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('data-theme', 'dark');
    }
}
