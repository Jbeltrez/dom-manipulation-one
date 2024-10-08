var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];

const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = "#4a4e4d";
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";
mainEl.classList.add('flex-ctr');

// Part 2 Creating a menu bar 
const topMenuEl = document.querySelector('#top-menu');
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = '#0e9aa7'
topMenuEl.classList.add('flex-around');

// Part 3 adding menu buttons

menuLinks.forEach((link) => {
    const newLink = document.createElement('a');
    newLink.href = link.href;
    newLink.textContent = link.text; 
    topMenuEl.appendChild(newLink);
})

