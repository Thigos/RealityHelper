const linesContainers = document.getElementsByClassName('lines-container');
const navList = document.getElementById('nav_list');
const itemNavList = navList.getElementsByTagName('li');
const body = document['body'];

const MOVE_LINES = ()=>{
    const height = window.innerHeight;

    Array.prototype.forEach.call(linesContainers, (lineContainer, pos)=>{
        const top_element = lineContainer.getBoundingClientRect().top;

        if(height >= top_element && top_element > 0){
            let secondaryColor = lineContainer.getAttribute('data-secondary-color');
            document.documentElement.style.setProperty('--secondary-color', secondaryColor)

            itemNavList[pos].classList.add('active');

            lineContainer.style.left = '0px';
        }else{
            lineContainer.style.left = '-100%';
            itemNavList[pos].classList.remove('active');

        }
    })
    
} 

MOVE_LINES();

body.onscroll = ()=>{
    MOVE_LINES();
}