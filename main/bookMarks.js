// Define a function to create a bookmark card
function createBookmarkCard(bookmark) {
    const bookmarkCard = document.createElement('div');
    bookmarkCard.classList.add('relative', 'backdrop-blur-sm', 'group', 'bg-[#4e4e4e58]', 'transition-all', 'ease-in-out', 'duration-300', 'hover:bg-[#69686858]', 'text-white', 'min-w-[100px]', 'w-[110px]', 'h-[auto]', 'p-4', 'shadow-md', 'rounded-lg', 'mb-4');

    let logo = document.createElement('img');
    logo.src = bookmark.logo; // Assuming bookmark object has a logo property
    logo.alt = "Website logo";
    logo.classList.add('w-8', 'sm:w-12', 'h-auto', 'rounded-md', 'mx-auto', 'mt-2');
    bookmarkCard.appendChild(logo);

    let title = document.createElement('p');
    title.textContent = bookmark.title; // Assuming bookmark object has a title property
    title.classList.add('text-center', 'text-gray-800', 'text-white', 'text-xs', 'font-normal', 'mt-2');
    bookmarkCard.appendChild(title);

    let options = document.createElement('div');
    options.classList.add('absolute', 'top-0', 'right-0', 'p-4');

    let optionsIcon = document.createElement('button');
    optionsIcon.innerHTML = '<i class="fas fa-ellipsis-v hidden group-hover:block transition-all duration-500 ease-in-out "></i>';
    optionsIcon.classList.add('focus:outline-none');
    optionsIcon.addEventListener('click', function(event) {
        event.stopPropagation(); // Prevent card click event from firing
        toggleOptions(event.currentTarget);
    });
    options.appendChild(optionsIcon);

    let dropdownMenu = document.createElement('div');
    dropdownMenu.classList.add('absolute', 'right-0', 'top-10', 'hidden', 'bg-white', 'border', 'border-gray-200', 'shadow-md', 'rounded');
    dropdownMenu.innerHTML = `
        <button class="block w-full text-left px-4 py-2 text-black hover:bg-gray-100" onclick="editBookmark()">Edit</button>
        <button class="block w-full text-left px-4 py-2 text-black hover:bg-gray-100" onclick="deleteBookmark()">Delete</button>
    `;
    options.appendChild(dropdownMenu);

    bookmarkCard.appendChild(options);

    bookmarkCard.addEventListener('mouseleave',()=>{
        dropdownMenu.classList.add('hidden');
    })

    return bookmarkCard;

   
}

// Function to toggle the visibility of the options dropdown menu
function toggleOptions(target) {
    let dropdownMenu = target.nextElementSibling;
    dropdownMenu.classList.toggle('hidden');
}


// Example function to fetch bookmarks and populate the list
function fetchBookmarks() {
    // Assuming bookmarks is an array of bookmark objects
    let bookmarks = [
        { title: 'Bookmark 1', logo: './assets/icons (3).png' },
        { title: 'Bookmark 2', logo: './assets/icons (1).png' },
        { title: 'Bookmark 3', logo: './assets/icons (2).png' },
        { title: 'Bookmark 4', logo: './assets/icons (4).png' },
        { title: 'Bookmark 5', logo: './assets/icons (5).png' },
        // Add more bookmark objects as needed
    ];

    let bookmarkList = document.getElementById('bookmarkList');
    bookmarkList.innerHTML += ''; // add existing list

    bookmarks.forEach(function(bookmark) {
        let bookmarkCard = createBookmarkCard(bookmark);
        bookmarkList.appendChild(bookmarkCard);
    });
}

// Call fetchBookmarks function to populate the list on page load
fetchBookmarks();

//modal function
function addBookMark(){
    document.querySelector('#book-modal').showModal()
    document.querySelector('#book-modal').classList.add('flex')
    document.body.style.overflow='hidden'
}
function CloseModal(){
    document.querySelector('#book-modal').close()
    document.querySelector('#book-modal').classList.remove('flex')
    document.body.style.overflow='auto'
}


// On page load or when changing themes
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Toggle theme when the button is clicked
  let light = document.getElementById('theme-toggle-light');
  let dark = document.getElementById('theme-toggle-dark');
  light.addEventListener('click', () => {
    if (document.documentElement.classList.contains('light')) {
      localStorage.theme = 'light'; // Explicitly set light mode
    } else{
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light'; // Explicitly set dark mode
    }
  });

  dark.addEventListener('click', () => {
    if (!document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark'; // Explicitly set light mode
    }
  });


  let themeOptions = document.querySelector('#theme-slide'); // Assuming the theme options are the next sibling element
  let searchContainer = document.getElementById('fixed-search-bar')
  let searchinput = document.getElementById('search-input')
  let Nav = document.getElementById('nav-bar')

  
    function showProfile() {
 
      if (themeOptions.classList.contains('theme-optionsOut')) {
        themeOptions.classList.replace('theme-optionsOut', 'theme-options');
        
      } else {
        themeOptions.classList.replace('theme-options', 'theme-optionsOut');
      }

    

    };
    


