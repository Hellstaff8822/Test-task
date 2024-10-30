function toggleMenu() {
    const navList = document.getElementById('navList');
    const iconMenu = document.querySelector('.icon-menu');
    const body = document.body;
  
    navList.classList.toggle('active');
  
    if (navList.classList.contains('active')) {
      iconMenu.textContent = 'close';
      body.classList.add("no-scroll");
      document.addEventListener('click', closeOnClickOutside);
    } else {
      iconMenu.textContent = 'menu';
      body.classList.remove("no-scroll");
      document.removeEventListener('click', closeOnClickOutside);
    }
  
    function closeOnClickOutside(event) {
      if (!navList.contains(event.target) && !iconMenu.contains(event.target)) {
        navList.classList.remove('active');
        iconMenu.textContent = 'menu';
        body.classList.remove("no-scroll");
        document.removeEventListener('click', closeOnClickOutside);
      }
    }
  }