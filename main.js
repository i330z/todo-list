var itemForm = document.getElementById('itemForm');
var inputItem = document.getElementById('input-item');
var itemList = document.querySelector('.item-list');
var feedback = document.querySelector('.feedback');
var clearList = document.getElementById('clear-list');

var itemData = []

itemForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    var inputValue = inputItem.value;
    console.log(inputValue);
    if(inputValue == ""){
        showFeedback('Please Enter a Value','danger')
    }else{
        addValue(inputValue);
        inputItem.value = "";
        itemData.push(inputValue);
        console.log(itemData);
    }
})

function showFeedback(text,alert){
    feedback.classList.add('showItem',`alert-${alert}`)
    feedback.innerHTML = `<p>${text}</p>`
    setTimeout(() => {
        feedback.classList.remove('showItem',`alert-${alert}`)
    }, 3000);
}

function addValue(data){
    const div = document.createElement('div');
    div.classList.add('item','my-3');
    div.innerHTML = `<h5 class="item-name tetx-capitalize">${data}</h5>
                    <div class="item-icons">
                    
                    
                    
                    </div>`;
    itemList.appendChild(div)
}