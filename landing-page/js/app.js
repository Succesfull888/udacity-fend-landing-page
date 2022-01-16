/**
 * Define Global Variables
 * 
*/
const sections=document.querySelectorAll('section');
const navbar=document.querySelector('#navbar__list');
let NavTag = document.getElementById("navbar_header");
let sectionslength = sections.length;
let sectionspositions = [];
let prePosition = 0;
let position = 0;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions  
 * 
*/

// build the nav
function newElement(){
    for(let i=1;i<=sections.length;i++){
        const li=document.createElement('li');
        navbar.appendChild(li);
        const anchor=document.createElement('a');
        li.appendChild(anchor);
        anchor.setAttribute('class','menu__link');
        anchor.setAttribute('href','#section'+i);
        anchor.textContent='section '+i;

        
    };
};  
newElement();



// Add class 'active' to section when near top of viewport
const actives = navbar.querySelectorAll(".menu__link");

for (let i = 0; i < actives.length; i++) {
    actives[i].addEventListener("click", function() {
      let hozirgi = document.getElementsByClassName("active");
  
      if (hozirgi.length > 0) {
        hozirgi[0].className = hozirgi[0].className.replace(" active", "");
        
      }
  
      this.className += " active";
    });
  }
// Set sections as active



 

/**
 * End Main Functions
 * Begin Events
 * 
*/


// Scroll to section on link click
document.addEventListener("scroll", () => {
	currentPosition = this.scrollY;
	// Section Positions
	sectionspositions = [];
	sections.forEach((element) => sectionspositions.push(element.getBoundingClientRect().top + 50));

	// Adding and removing active sections
	let addIndex = sectionspositions.findIndex((element) => element > 0);
	for (let i = 0; i < sectionslength; i++) {
		if (addIndex === i) {
			document.querySelector(`#section${addIndex + 1}`).classList.add("your-active-class");
		} else {
			document.querySelector(`#section${i + 1}`).removeAttribute("class");
		}
	}
});

// Scroll to section on link click
const links = document.querySelectorAll(".navbar__menu ul li a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}






