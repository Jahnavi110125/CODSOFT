let currentIndex = 0;
const allMembers = document.querySelector('.all');
const membersSection = allMembers.querySelectorAll('.members');
nextButtons = document.querySelectorAll('.next');

nextButtons.forEach(button => {
    button.addEventListener('click', function(){
        currentIndex += 1;
        updateDisplay();
    });
});

nextLeftButtons = document.querySelectorAll('.nextl');
nextLeftButtons.forEach(button => {
    button.addEventListener('click', function(){
        currentIndex -= 1;
        console.log(currentIndex);

        updateDisplay();
    });
});

function updateDisplay() {
    membersSection.forEach((member, index) => {
        member.style.display = (index === currentIndex) ? 'flex' : 'none';
    });
}
    