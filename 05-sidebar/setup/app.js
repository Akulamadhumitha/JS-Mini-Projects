const sidebarTog = document.querySelector('.sidebar-toggle');

const sidebar = document.querySelector('.sidebar');
sidebarTog.addEventListener('click',function(){
   sidebar.classList.toggle('show-sidebar');
});

const closeTog = document.querySelector('.close-btn');
closeTog.addEventListener('click',function(){
   sidebar.classList.remove('show-sidebar');
});