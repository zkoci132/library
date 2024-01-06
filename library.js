let myLibrary = []
const display = document.querySelector('.showOutput');






function Book(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = String(myLibrary.length);
   
       
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
    const closeButton = document.querySelector('dialog button');
    
    
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
      /*
    closeButton.addEventListener('click',()=>{
        dialog.close();
    })
    */
}


function showOutput(newBook){
    
    let newTile = document.createElement('div');
     
    
    
   
   
    
    
    let newTitle = document.createTextNode(newBook.title);
    let newPages = document.createTextNode(newBook.pages);
    let newAuthor = document.createTextNode(newBook.author);
    let newRead = document.createTextNode(newBook.read);
    
    newTile.style.display = 'flex';    
    newTile.style.border = '3px solid black';
    newTile.classList.add('bookTiles')
    newTile.style.flex = '0 0 auto';
    newTile.style.height = '225px';
    newTile.style.width = '225px';

    newTile.id = newBook.id
    
    let idStr = newBook.id;

    const removeButton = document.createElement('button');
    removeButton.setAttribute('type','button');
    removeButton.textContent = 'Remove'
    removeButton.addEventListener('click',function(){
        let found = false;
        let i = 0;
        let currElt = document.getElementById(idStr);
        if(document.getElementById(idStr) !== null){
            display.removeChild(document.getElementById(idStr));
            console.log(myLibrary);
            myLibrary = myLibrary.filter(Book => Book.id !== idStr)
            console.log(myLibrary);
        }
        
     
        
    })


        /*
        for(let i = 0;i < display.childNodes.length;i++){
            if(idStr == i){
                const index = myLibrary.indexOf(idStr);
                
                console.log(myLibrary); 
                if (index > -1) { // only splice array when item is found
                    myLibrary.splice(index, 1); // 2nd parameter means remove one item only
                }
                console.log(myLibrary); 
                
                
                
                display.removeChild(document.getElementById(idStr))
                //let str = toString(i);
                
            }
        }
    })
    */


    
    
    //let doomed = getElementById(myLibrary[newTile.id].id);
   // display.removeChild(doomed);
    //display.removeChild(textNode(newTile.id)
    
    
    newTile.appendChild(newTitle);
    newTile.appendChild(newAuthor);
    newTile.appendChild(newPages);
    newTile.appendChild(newRead);

    
    
    newTile.appendChild(removeButton);

    
    display.appendChild(newTile);
        
        
    
}

main();