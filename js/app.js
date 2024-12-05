/**
 * WHAT DO WE WANT TO DO??
 * 
 * input tasks ++
 * mark as completed
 * list the task
 * award
 * count the completed task
 */

// grad each element
const taskInput = document.getElementById('taskInput')
const addTaskBtn = document.getElementById('addTaskBtn')
const completedBtn = document.getElementById('completedBtn')
const completedList= document.getElementById('completedList')
const completedTasks = document.getElementById('completedTasks')

//array of task
let taskArray=[]


/**
 * let task ={
 *      id:1,
 *      task:'clean bathroom',
 *      dateCreated:'12-03',
 *      dateComplete:'12-03',
 *      isComplete:true
 * }
 */

let task ={
    id:taskArray.length,
    task:'',
    dateCreated:'',
    dataeCompleted:"",
    isComplete:false
}

//addTaskBtn
addTaskBtn.addEventListener('click',(e)=> {
    e.preventDefault()
    // cosole.log('click')
    validateInput
})

// take input 
const validateInput=() =>{
// testing...
    if (taskInput.vale === ''){
        alert('please eneter a task before submitting')
    }else{

        for(let i =0; i< taskArray.lenght; i++) {
            if ( taskInput.value == taskArray[i].task){
                alert('Task has already been added')
                taskInput.value=''
                return
            }
        }
        makeTask(taskInput.value)
    }
    }


// make task

const makeTask =(chore)=>{

    const timeStamp= new Date()

    task ={
        id: taskArray.length+ 1,
        task: chore,
        iscompleted:false,
        dateAdded:timeStamp.toTimeString(),
        dateCompleted:''
    }

    addTask(task,taskArray)
}

const addTask =(obj)=> {

    taskArray=[...taskArray,obj]

    console.log(taskArray)
}

// make li for each task 
const makeTaskItem =(el,item)=> {

    const li = document.createElement('li')
    li.classList.add('list-group-item')

    const checkbox =document.createElement('input')
    checkbox.setAttribute('type','checkbox')
    checkbox.setAttribute('id', `taskId-${item.id}`)
    checkbox.setAttribute('data-id',`${item.id}`)
    checkbox.classList.add('form-check-input','checkbox')

    const label =document.createElement('label')
    label.setAttribute('for',`taskId-${item.id}`)
    label.classList.add('form-check-label','text-capitalize','mx-2','task-label')
    label.innerText=`${ item.task} - ${item.dateAdded}`

    li.appendChild(checkbox)
    li.appendChild(label)

    el.appendChild(li)
}

completedBtn,addEventListener('click',(e)=>{
    e.preventDefault()
    console.log('clicked')
})

// validate checked tasks
const validateCompletedTasks =()=> {

    let completedArray = []
    const checkboxes = Document.querySelectorAll('.checkbox')

    // testing...
    for( let i = 0; i< checkboxes.length; i++){
        if (checkboxes[i].checked && (checkboxes[i]. getAttribute('data-id')==taskArray[i].id)){
            taskArray[i]={
                ...taskArray[i],
                isCompleted:true,
                dateCompleted:new Date().toString()
            }
        }
    }

    for(let i =0; i < taskArray.lenght;i++){
        if(taskArray[i].isCompleted){
            completedArray=[...completedArray,taskArray[i]]
        }
    }
    // end testing... SUCCESS!!

    completedTasks.innerText=completedArray.length
    makeCompleteItem(completedArray)
}


// make li for completedList
completedTasks.innerText = completedArray.length
// console.log(completedArray)
makeCompleteItem(completedArray)


// make li for completedList
const makeCompleteItem =(arr)=> {

arr.forEach(item => {
    const task = item.task
    const dataCompleted =item.dataCompleted

    const completedItem = document.createElement('li')
    completedItem.classList.add('list-group-item', 'text-success', 'text-capitalize', 'completed-item')
    completedItem.innerText = `${task} | completed:$ {dataCompleted}` completedList.appendChild(completedItem)
})
}

