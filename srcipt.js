const mobileMenu = document.getElementById('mobile-menu');
mobileMenu.addEventListener('click',()=>{
    const navBar = document.getElementById('nav-bar');
    navBar.classList.toggle('active');
});



const list = [1,2,3,4,5,6,-1,-3,-19,-100,-67,-54,76, -12,87,-65,-90];



const random = () =>{
    const n1 = (Math.floor(Math.random()*9)+""+
Math.floor(Math.random()*9)+""+Math.floor(Math.random()*9)+""+Math.floor(Math.random()*9));


console.log(n1);
    
};

random();


list.map((num)=>{
    if(num<0){
        let yo = num*-1
        console.log('neg', yo)
    }else{
        let yoo = num-5;
        console.log('sub', yoo)
    }
})
console.log(list);




