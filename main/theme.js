// Theme variants 
const themeVariant = [
  {
    name: 'All',
    link: './search-page.html',
  },
  {
    name: 'Images',
    link: './img.html',
  },
  {
    name: 'Video',
    link: './video.html',
  },
  {
    name: 'News',
    link: './video.html',
  },
  {
    name: 'Sport',
    link: './video.html',
  },
];

function displayTab() {
  const tabs = themeVariant.map((theme) => {
    return `
      <a href="${theme.link}" class="px-6 py-2 hover:bg-custom-bg2 text-base dark:hover:text-gray-200 dark:hover:bg-gray-700 dark:text-[#fcfcfc]
       bg-[#fdf7ff] dark:bg-[#2f2f2b] dark:border border border-[#c773ff4e] rounded-full">${theme.name}</a>
    `;
  }).join(''); // Join the array elements into a string
  
  document.getElementById('suggestion-tab').innerHTML = tabs; // Set the innerHTML of the element
}

displayTab();





// On page load or when changing themes
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Toggle theme when the button is clicked
  const light = document.getElementById('theme-toggle-light');
  const dark = document.getElementById('theme-toggle-dark');
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
    
    
  window.addEventListener('scroll', function(e) {
    var scrollTop = this.window.scrollY;
    
  
    if (scrollTop > 150) {
        scrollTop = this.window.scrollY;
       
        Nav.classList.remove('hidden')

    } else {
      Nav.classList.add('hidden')

    }
  });

  


 themeOptions.addEventListener('mouseleave', ()=>{
  themeOptions.classList.replace('theme-options', 'theme-optionsOut');
 
 })


 // Assuming you have a container with an ID of 'container'

 


