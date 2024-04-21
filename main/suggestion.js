
let suggestions = [
    "Love is life",
    "Innovation",
    "Hudeen",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];



const inputBox = document.querySelector(".input");
const navInput = document.querySelector("#nav-input");
const suggBox = document.querySelectorAll(".autocom-box");
const icon = document.querySelector(".icon");
let linkTag = document.querySelector("a");
let webLink;

// Function to handle selecting an option from suggestions and displaying it in the input field
function select(element) {
    let selectData = element.textContent;
    inputBox.value = selectData;
    navInput.value = selectData; // Mirror the value to navInput
    icon.onclick = () => {
        webLink = `https://www.google.com/search?q=${selectData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click(this);
    }
    suggBox.forEach(element => {
        element.classList.add('hidden'); // Hide autocomplete box after selection
    });
}

// Function to remove the clicked item from suggestions
function removeItem(element) {
    element.parentElement.remove();
}

// Function to handle showing suggestions
function showSuggestions(list) {
    let listData;
    if (!list.length) {
        userValue = inputBox.value;
        listData = `<li class="p-3 hover:bg-purple-300 dark:hover:bg-slate-600 transition-all z-10 dark:text-gray-200 hover:text-purple-700 text-gray-700 flex justify-between items-center list-none">${userValue}</li>`;
    } else {
        listData = list.map(data => `<li class="p-3 hover:bg-purple-300 dark:hover:bg-[#1b1b1b] transition-all z-10 dark:text-gray-200 hover:text-purple-700 text-gray-700 flex justify-between items-center list-none" onclick="select(this)">${data} <i class="fas fa-close px-2 py-1.5 rounded-full" onclick="removeItem(this)"></i></li>`).join('');
    }
    suggBox.forEach(element => {
        element.innerHTML = listData;
        element.classList.remove('hidden'); // Show autocomplete box
        element.addEventListener('mouseleave', () => {
            element.classList.add('hidden'); // Hide autocomplete box when mouse leaves
        })
    });
}

window.addEventListener('scroll', function(e) {
  var scrollTop = this.window.scrollY;
  

  if (scrollTop > 0) {
      scrollTop = this.window.scrollY;
      suggBox.forEach(element => {
        element.classList.add('hidden'); // Show autocomplete box
       
    });

  } 
});


// Event listener for inputBox
inputBox.addEventListener('input', (e) => {
    let userData = e.target.value; // User entered data
    navInput.value = userData; // Mirror the value to navInput
    let emptyArray = [];
    if (userData) {
        emptyArray = suggestions.filter((data) => {
            // Filtering array value and user characters to lowercase and return only those words which start with user entered chars
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        showSuggestions(emptyArray);
    } else {
        suggBox.forEach(element => {
            element.classList.add('hidden'); // Hide autocomplete box when input is empty
        });
    }

    
});

// Event listener for navInput
navInput.addEventListener('input', (e) => {
    let userData = e.target.value; // User entered data
    inputBox.value = userData; // Mirror the value to inputBox
    // Additional code to update suggestions based on navInput if needed
});



/////////////////////////////////////second input functions/////////////////////////////////////////////////////



// Function to handle showing suggestions
function showSuggestions2(list) {
  let listData;
  if (!list.length) {
      userValue = navInput.value;
      document.querySelector('#second-auto').classList.add('hidden')
      listData = `<li class="p-3 hover:bg-purple-300 dark:hover:bg-slate-600 transition-all z-10 dark:text-gray-200 hover:text-purple-700 text-gray-700 flex justify-between items-center list-none">${userValue}</li>`;
  } else {
      listData = list.map(data => `<li class="p-3 hover:bg-purple-300 dark:hover:bg-[#1b1b1b] transition-all z-10 dark:text-gray-200 hover:text-purple-700 text-gray-700 flex justify-between items-center list-none" onclick="select(this)">${data} <i class="fas fa-close px-2 py-1.5 rounded-full" onclick="removeItem(this)"></i></li>`).join('');
  }
  suggBox.forEach(element => {
      element.innerHTML = listData;
      element.classList.remove('hidden'); // Show autocomplete box
      element.addEventListener('mouseleave', () => {
          element.classList.add('hidden'); // Hide autocomplete box when mouse leaves
      })
  });
}

// Event listener for navInput
navInput.addEventListener('input', (e) => {
  let userData = e.target.value; // User entered data
  navInput.value = userData; // Mirror the value to navInput
  let emptyArray = [];
  if (userData) {
      emptyArray = suggestions.filter((data) => {
          // Filtering array value and user characters to lowercase and return only those words which start with user entered chars
          return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
      });
      showSuggestions2(emptyArray);
  } else {
      suggBox.forEach(element => {
          element.classList.add('hidden'); // Hide autocomplete box when input is empty
      });
  }
});






let btnGuess =[
  {content:"Tesla Ev's performed well on test"},
  {content:"Top 5 Innovative to pump"},
  {content:"Naira crashes against dollar"},
  {content:"EFCC arrest fraud master"},
  {content:"Bitcoin now $125k"},
  {content:"Upwork now enable crypto payments"},
  {content:"CBN blames Binance for dollar surges"},
]


function showGuess() {

  const guess =   btnGuess.map((data) => {
    data = (data.content)
    
    return `

    <button class="dark:hover:bg-yellow-400 dark:border-none flex flex-row gap-3 items-center truncate hover:bg-yellow-400 dark:bg-[#2f2f2b] bg-[#f3e7ff] border border-[#d089ff3d]  text-sm  px-4 py-3 group  hover:text-gray-900  dark:text-[#aeaeae] dark:hover:text-[#2d2d2d] text-gray-600 rounded-full ">
      <i class="fas fa-search block text-yellow-400 group-hover:text-gray-800"></i>
      <span class="block mr-2 truncate sm:text-base">${data}</span>
    </button>

    ` 
    console.log(data)
  
   }).join(' ');
  
  document.querySelector('#suggestion-btn').innerHTML = guess;
}
showGuess()


