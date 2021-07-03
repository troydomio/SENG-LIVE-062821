// step 1: initial render: create container that will run our other functions.
//step 2: renderAside(an object): this function will take in info from our data and overwrite the html elements.
//step 3: renderBook(singlebook): this function will create elements for my card (li to make containers for our books, h4 title and author, img, )


  // I need to make a renderAside function. 
  // My render aside function will take in a parameter that can be named anything but the purpose is that it will take in the name of an Object. I have an object already created in the data.js file called bookStore when I will reference in my initialRender. :)

  function renderAside(storeObject){
      //test and make sure it worked!
      //console.log(storeObject);
      document.querySelector('body aside h1').textContent = storeObject.name
      document.querySelector('body aside #hours').textContent = storeObject.hours
      document.querySelectorAll('aside ul li')[0].textContent = storeObject.number
      document.querySelectorAll('aside ul li')[1].textContent = storeObject.address
  }

  function renderCard(book){
      let li = document.createElement('li');
        let h4Title = document.createElement('h4');
        let h4Author = document.createElement('h4');
        let img = document.createElement('img');

        li.className='card'

        h4Title.textContent = book.title;
        h4Author.textContent = book.author
        img.src = book.image_url

        li.append(img, h4Title, h4Author)
         document.querySelector('#book-list').append(li);

  }




//initial render: my container function that will run all my other functions later! :)
function initialRender(){
    renderAside(bookStore);
   bookStore.inventory.forEach(renderCard); // book => (renderCard(book))
   console.log(document.querySelector('#book-list li').remove())
    
}
initialRender(); //I will need you to be called for later :)
































// console.log(bookStore);
//console.log(document.querySelector('header'));

//Iniital Render. How can I grab the bookStore cont from data.js and bring it here?

//container function... purpose of this function is to call every single function on load...

//I am storing this render for my 'aside' element in this container function. 




