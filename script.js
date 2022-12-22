const list = document.querySelector('#todo-list')
const itemCountSpan = document.querySelector('#item-count')
const checkedCountSpan = document.querySelector('#checked-count')
let totalCount = 0
let checkedCount = 0

function newTodo() {
  var task = prompt("Enter New TODO", '');
  if(task === '') return
  createDeleteElements(task)
  task = ''
}

function createDeleteElements(value){
  totalCount++
  const li = document.createElement('li')
  const text = document.createElement('p')
  const delbtn = document.createElement('button')
  const dnbtn = document.createElement('button')

  li.className = 'li'
  list.appendChild(li)

  text.className = 'text'
  text.textContent = value
  li.appendChild(text)

  delbtn.className = 'delbtn'
  delbtn.textContent = 'delete'
  li.appendChild(delbtn)

  dnbtn.className = 'donebtn'
  dnbtn.textContent = 'done'
  li.appendChild(dnbtn)

  delbtn.addEventListener(`click`, (e) => {
    totalCount--
    itemCountSpan.textContent = totalCount
    list.removeChild(li)
  })

  dnbtn.addEventListener(`click`, (e) => {
    li.classList.toggle('li-active')
    checkedCount++
    checkedCountSpan.textContent = checkedCount
    li.removeChild(dnbtn)
  })

  itemCountSpan.textContent = totalCount


}
