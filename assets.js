const revOne = document.querySelector('.revOne');
const revTwo = document.querySelector('.revTwo');
const revThree = document.querySelector('.revThree');
const review = document.querySelector('.review');
const reviewNoOne = document.getElementById('one');
const reviewNoTwo = document.getElementById('two');
const reviewNoThree = document.getElementById('three');
const testimonial = document.querySelector('.testimonial');


revOne.addEventListener('click', event =>{
  
    if(event.target = revOne){
        reviewNoOne.style.display = 'block';
        reviewNoTwo.style.display = 'none';
        reviewNoThree.style.display = 'none';
        revOne.style.boxShadow = '0px 0px 50px -11px rgba(0,0,0,0.1)';
        revTwo.style.boxShadow = 'none';
        revThree.style.boxShadow = 'none';
        
    }



 });

 revTwo.addEventListener('click', event =>{
    if(event.target = revTwo){
        reviewNoTwo.style.display = 'block';
        reviewNoThree.style.display = 'none';
        reviewNoOne.style.display = 'none';
        revTwo.style.boxShadow = '0px 0px 50px -11px rgba(0,0,0,0.1)';
        revOne.style.boxShadow = 'none';
        revThree.style.boxShadow = 'none';


    }
   

 });

 revThree.addEventListener('click', event =>{
  
    if(event.target = revThree){
        reviewNoThree.style.display = 'block';
        reviewNoTwo.style.display = 'none';
        reviewNoOne.style.display = 'none';
        revThree.style.boxShadow = '0px 0px 50px -11px rgba(0,0,0,0.1)';
        revTwo.style.boxShadow = 'none';
        revOne.style.boxShadow = 'none';

    }
  

 });

