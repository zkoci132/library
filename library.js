let myLibrary = []
const display = document.querySelector('.showOutput');






function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = String(myLibrary.length);
   
       
}


Book.prototype.changeRead = function(){
    console.log(this.read)
    if(this.read === true){
        this.read = false;
    }
    else{
        this.read = true;
    }
    console.log(this.read)

    return this;
}


function Remove(){

}


function main(){
    buildButtons();

}


function buildButtons(){
    const submission = document.querySelector('.inputButton');
    const dialog = document.querySelector('dialog');
    const show = document.querySelector('.showModal');
    
    
    submission.addEventListener('click',()=>{
        let title = document.getElementById('title').value;
        let author = document.getElementById('author').value;
        let pages = document.getElementById('pages').value;
        let read = document.getElementById('read').checked;
        
        let newBook = new Book(title,author,pages,read);
        
        myLibrary.push(newBook);
        console.log(myLibrary);

        showOutput(newBook);

    })
    

    show.addEventListener('click', () => {
        dialog.showModal();
      });
}

function styleHolders(holder,head,cont,text,hc,newBook){

    cont.style.display = 'flex';
    cont.style.flexDirection = 'column';
    cont.style.fontFamily = "Gothic";
    head.style.fontFamily = "Gothic";
    head.style.padding = '5px';
    head.style.borderBottom = '2px solid white'

    
    head.style.display = 'flex';

    cont.style.width = '100%'

    cont.style.justifyContent = 'center'
    cont.style.alignItems= 'center'

    holder.style.gap = '5px';
    

    

    if(hc === "Have you read?..."){
       
        let check = document.createElement('input');
        check.type = 'checkbox';
        if(newBook.read === true){
            check.checked = true
        }
        else{
            check.checked = false;
        }
        check.addEventListener('click',()=>{
            newBook.changeRead();
        })
        cont.appendChild(check);
        head.appendChild(document.createTextNode(hc));
    }
    else{
        cont.appendChild(document.createTextNode(text));
        head.appendChild(document.createTextNode(hc));

    }

    holder.appendChild(head);
    holder.appendChild(cont);

    holder.style.display = 'flex';
    holder.style.flexDirection = 'column';

    holder.style.width = '100%'

    return holder;
}


function makeRemoveButton(idStr){
    bttn = document.createElement('button');
    bttn.setAttribute('type','button');
    bttn.textContent = 'Remove'
    
    
    bttn.style.padding = '5px'
    bttn.style.backgroundColor = 'white';
    bttn.style.color = 'black';
    bttn.style.borderRadius = '50%';
    bttn.style.height = '40px';
    bttn.style.width = '80px';
    bttn.style.fontFamily = 'skyrim';
    bttn.style.fontWeight = 'bold';
    

    bttn.addEventListener('click',function(){
    
        if(document.getElementById(idStr) !== null){
            display.removeChild(document.getElementById(idStr));
            console.log(myLibrary);
            myLibrary = myLibrary.filter(Book => Book.id !== idStr)
            console.log(myLibrary);
        }   
    })

    return bttn;

}

function showOutput(newBook){
    
    let newTile = document.createElement('div');
    
    
    let titleHolder = document.createElement('div');
    let pagesHolder = document.createElement('div');
    let authorHolder = document.createElement('div');
    let readHolder = document.createElement('div');
    
    let titleHeader = document.createElement('div');
    let titleContent = document.createElement('div');

    let pagesHeader = document.createElement('div');
    let pagesContent = document.createElement('div');

    let authorHeader = document.createElement('div');
    let authorContent = document.createElement('div');

    let readHeader = document.createElement('div');
    let readContent = document.createElement('div');

    styleHolders(titleHolder,titleHeader,titleContent,newBook.title,"Title...",newBook);
    styleHolders(pagesHolder,pagesHeader,pagesContent,newBook.pages,"Pages...",newBook);
    styleHolders(authorHolder,authorHeader,authorContent,newBook.author,"Author...",newBook);
    styleHolders(readHolder,readHeader,readContent,newBook.read,"Have you read?...",newBook);

    
    
    newTile.style.display = 'flex';    
    newTile.style.border = '3px solid black';
    newTile.classList.add('bookTiles')
    newTile.style.flex = '0 0 auto';
    newTile.style.height = '250px';
    newTile.style.width = '250px';
    newTile.style.backgroundColor = 'black';
    newTile.style.color = 'white';
    newTile.style.fontFamily = 'skyrim'
    newTile.style.flexDirection = 'column'
    newTile.style.border = '3px ridge white'

    newTile.id = newBook.id


    
    let idStr = newBook.id;

    const removeButton = makeRemoveButton(idStr);

    const buttonHolder = document.createElement('div');
    buttonHolder.style.display = 'flex';
    buttonHolder.style.flexDirection = 'column';
    buttonHolder.style.justifyContent = 'center';
    buttonHolder.style.alignItems = 'center';
 
    buttonHolder.style.padding = '10px';

    buttonHolder.appendChild(removeButton);
    

    newTile.appendChild(titleHolder);
    newTile.appendChild(authorHolder);
    newTile.appendChild(pagesHolder);
    newTile.appendChild(readHolder);

    
    newTile.appendChild(buttonHolder);

    
    display.appendChild(newTile);
        
        
    
}

main();