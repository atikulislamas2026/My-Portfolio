// বাটন এবং ড্রয়ার সিলেক্ট করা
const openBtn = document.getElementById('open-drawer');
const closeBtn = document.getElementById('close-drawer');
const drawer = document.getElementById('drawer');

// '☰' বাটনে ক্লিক করলে 'active' ক্লাস যোগ হবে (মেনু খুলবে)
openBtn.onclick = function() {
    drawer.classList.add('active');
}

// '✕' বাটনে ক্লিক করলে 'active' ক্লাস চলে যাবে (মেনু বন্ধ হবে)
closeBtn.onclick = function() {
    drawer.classList.remove('active');
}

// মেনুর কোনো লিংকে ক্লিক করলে যেন মেনু বন্ধ হয়ে যায়
function closeMenu() {
    drawer.classList.remove('active');
}