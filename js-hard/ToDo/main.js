const addTask = document.getElementById('add-area');
const addBtn = document.querySelector('.add-btn');
const toDoList = document.getElementById('todo');
const editBtn = document.querySelector('.edit-btn');
const editCompBtn = document.querySelector('.edit-comp-btn');
let taskNum = 0;
let editCount = 0;


addBtn.addEventListener('click', e => {
    if (addTask.value === '') {
        alert('空です')
    } else {
        console.log(addTask.value);
        let newTask = document.createElement('li');
        newTask.classList.add(`task${taskNum}`);
        newTask.textContent = addTask.value;
        toDoList.appendChild(newTask);
    
        let completeBtn = document.createElement('button');
        completeBtn.classList.add(`compBtn`);
        completeBtn.classList.add(`btn${taskNum}`);
        completeBtn.textContent = '完了';
        newTask.appendChild(completeBtn);
        taskNum++;
        // console.log(document.querySelectorAll('.compBtn'))
        let compBtns = document.querySelectorAll('.compBtn');
        // console.log(newTask)
        // console.log(Array.from(compBtns).slice(-1)[0])
        let compBtn = Array.from(compBtns).slice(-1)[0];
        compBtn.addEventListener('click', e =>{
                console.log(compBtn.parentNode);
                // compBtn.parentNode.remove();
                compBtn.parentNode.classList.add('invisible');
                compBtn.classList.add('btn-invisible');
        });
        addTask.value = '';
    }
});

editBtn.addEventListener('click', e => {
    // if (editCount === 0) {

        editBtn.classList.add('btn-invisible');
        editCompBtn.classList.remove('btn-invisible');

        let completedTasks = document.querySelectorAll('.invisible');

        completedTasks.forEach(function(completedTask) {

            completedTask.classList.add('temporaryVisible');
            let restoreBtn = document.createElement('button');
            restoreBtn.classList.add('restore');
            restoreBtn.textContent = 'タスクに戻す';
            completedTask.appendChild(restoreBtn);
    
            completedTask.querySelector('.restore').addEventListener('click', e => {
                completedTask.querySelector('.restore').remove();
                completedTask.classList.remove('invisible');
                completedTask.classList.remove('temporaryVisible');
                completedTask.querySelector('.btn-invisible').classList.remove('btn-invisible');
            });
        });

    // } else {

        // alert('ボタンを連続で押さないでください');

    // }
    // editCount ++;

    editCompBtn.addEventListener('click', e => {

        editBtn.classList.remove('btn-invisible');
        editCompBtn.classList.add('btn-invisible');
        let compTasks = document.querySelectorAll('.temporaryVisible');

        compTasks.forEach(function(compTask) {

            compTask.removeChild(document.querySelector('.restore'));
            compTask.classList.remove('temporaryVisible');

        });
        editCount = 0;
    });
});




