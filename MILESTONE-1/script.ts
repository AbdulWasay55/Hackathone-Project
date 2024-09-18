const toggleButton = document.getElementById('toggle-skill') as HTMLButtonElement;
const skill =document.getElementById('skill') as HTMLElement;

toggleButton.addEventListener('click',()=>{
    if(skill.style.display==='none'){
        skill.style.display = 'block'
        toggleButton.textContent = 'Hide skill'
    }
    else{skill.style.display = 'none'
        toggleButton.textContent = 'Show skill'
    }
})