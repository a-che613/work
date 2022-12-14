let input = document.querySelector('.disp');
let send = document.querySelector('.btn');
let section = document.querySelector('.sec1');
let btns;


function addTask() {
  send.addEventListener('click', () => {
    // const check = document.createElement('button');
    const l_i = document.createElement('li');
    const para = document.createElement('input');
    para.setAttribute('type', 'text');
    const check = document.createElement('input');
    check.setAttribute('type', 'checkbox');
    const btn = document.createElement('button');
  
    //add content
  
    btn.innerHTML = 'X';
    para.value = input.value;
  
    //add classes
    btn.classList.add('but');
    para.classList.add('checks');
    check.classList.add('delput');
    // btn.setAttribute('onClick', 'deleteT()');
  
    //append to dom
    // l_i.appendChild(check);
    l_i.appendChild(check);
    l_i.appendChild(para);
    l_i.appendChild(btn);
    section.appendChild(l_i);

    if (input.value != ""){
      input.value = "";
    }


    console.log(btns);
    deleteT();
    done();
  })

  
}

addTask();


//using querySelector all, we can use array methods on the output, but 
//transforming the output to an actual array poses no problem.

function deleteT() {
  let btns = document.querySelectorAll('.but');

  btns.forEach(function(btn){

    btn.addEventListener('click', function(e){
  
      const li = e.target.parentElement;
      console.log(btns);
      li.parentNode.removeChild(li);
  
    })
  })
}

// function done() {
//   let chbx = document.querySelector('.checks');
//   let inbx = document.querySelector('.delput');

  

//   inbx.addEventListener('change', () => {
//     // console.log(inbx);
//     // console.log('yay!!')
//     inbx.setAttribute('checked', 'checked');
//     if (inbx.checked == true) {
//       console.log(true)
//       chbx.style.backgroundColor = 'green';
//     } else {
//       chbx.style.backgroundColor = 'white';
//     }
//   })
// }

// done();


