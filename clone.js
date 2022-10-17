burger= document.querySelector('.burger')
navbar=document.querySelector('.navbar')
// navigation h-nav-resp =document.getElementById('')
navigation=document.querySelector('.navigation')
nav=document.querySelector('.nav')
home=document.getElementById('home')
about=document.getElementById('about')
collection=document.getElementById('collection')
vent=document.getElementById('vent')
support=document.getElementById('support')
contact=document.getElementById('contact')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('v-class-resp');
    // nav.classList.toggle('v-class-resp');
    
    home.classList.toggle('v-class-resp');
    about.classList.toggle('v-class-resp');
    collection.classList.toggle('v-class-resp');
    vent.classList.toggle('v-class-resp');
    support.classList.toggle('v-class-resp');
    contact.classList.toggle('v-class-resp');
    navigation.classList.toggle('h-nav-resp');
})