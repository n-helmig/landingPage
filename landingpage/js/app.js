/*jslint es6:true*/

/*Global variables*/
const nav = document.getElementById("navbar__list")
const sections = document.getElementsByClassName("landing__container");


/*Creates link for each section on the page*/
function createNavbar() {
	let count = 1;
	for (const section of sections) {
		const newLink = document.createElement("li");
		newLink.appendChild(document.createTextNode("Section " + count));
		newLink.classList.add("navSection");
		const link = document.createElement("a");
		link.href = "#" + "section" + count;
		newLink.setAttribute("id", "navSection" + count)
		link.textContent = newLink.textContent;
		newLink.textContent = "";
		newLink.appendChild(link);
		nav.appendChild(newLink);
		count = count + 1;
	}
}

createNavbar();

/*Targets all anchors and replaces the HTML fast scroll to be a smooth scroll*/
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (stopFastScroll) {
		stopFastScroll.preventDefault();

		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

/*Makes sections active when clicked*/
const navLinks = document.querySelectorAll("navSection");

for (const navLink of navLinks) {
	navLink.addEventListener("click", function () {
		const current = document.getElementsByClassName("active");
		if (current.length > 0) {
			current[0].className = current[0].className.replace("active", "");
		}
		this.className += " active";
	})
}

const sec1 = document.getElementById("section1");
const sec2 = document.getElementById("section2");
const sec3 = document.getElementById("section3");
const sec4 = document.getElementById("section4");
const nav1 = document.getElementById("navSection1");
const nav2 = document.getElementById("navSection2");
const nav3 = document.getElementById("navSection3");
const nav4 = document.getElementById("navSection4");

/*Function to know when an object is in viewport*/
function isInViewport(el) {
	const rect = el.getBoundingClientRect();
    console.log(el + " is in view");
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)

	);
}

/*Activates nav when section is in viewport*/
window.addEventListener('scroll', function () {
    console.log("scroll");
	if (isInViewport(sec1) == true && !nav1.classList.contains("active")) {
        console.log("true");
		nav1.classList.add("active");
        if(nav2.classList.contains("active")){
            nav2.classList.remove("active");
        }
        else if(nav3.classList.contains("active")){
            nav3.classList.remove("active");
        }
        else if(nav4.classList.contains("active")){
            nav4.classList.remove("active");
        }
	}

	if (isInViewport(sec2) == true && !nav2.classList.contains("active")) {
		nav2.classList.add("active");
        if(nav1.classList.contains("active")){
            nav1.classList.remove("active");
        }
        else if(nav3.classList.contains("active")){
            nav3.classList.remove("active");
        }
        else if(nav4.classList.contains("active")){
            nav4.classList.remove("active");
        }
    }

	if (isInViewport(sec3) == true && !nav3.classList.contains("active")) {
		nav3.classList.add("active");
        
        if(nav1.classList.contains("active")){
            nav1.classList.remove("active");
        }
        else if(nav2.classList.contains("active")){
            nav2.classList.remove("active");
        }
        else if(nav4.classList.contains("active")){
            nav4.classList.remove("active");
        }
	} 

	if (isInViewport(sec4) == true && !nav4.classList.contains("active")) {
		nav4.classList.add("active");
        
        if(nav1.classList.contains("active")){
            nav1.classList.remove("active");
        }
        else if(nav2.classList.contains("active")){
            nav2.classList.remove("active");
        }
        else if(nav3.classList.contains("active")){
            nav3.classList.remove("active");
        }
	} 

});
window.addEventListener('touch', function () {
	console.log("touch");
    if (isInViewport(sec1) == true && !nav1.classList.contains("active")) {
		nav1.classList.add("active");
        if(nav2.classList.contains("active")){
            nav2.classList.remove("active");
        }
        else if(nav3.classList.contains("active")){
            nav3.classList.remove("active");
        }
        else if(nav4.classList.contains("active")){
            nav4.classList.remove("active");
        }
	}

	if (isInViewport(sec2) == true && !nav2.classList.contains("active")) {
		nav2.classList.add("active");
        if(nav1.classList.contains("active")){
            nav1.classList.remove("active");
        }
        else if(nav3.classList.contains("active")){
            nav3.classList.remove("active");
        }
        else if(nav4.classList.contains("active")){
            nav4.classList.remove("active");
        }
    }

	if (isInViewport(sec3) == true && !nav3.classList.contains("active")) {
		nav3.classList.add("active");
        
        if(nav1.classList.contains("active")){
            nav1.classList.remove("active");
        }
        else if(nav2.classList.contains("active")){
            nav2.classList.remove("active");
        }
        else if(nav4.classList.contains("active")){
            nav4.classList.remove("active");
        }
	} 

	if (isInViewport(sec4) == true && !nav4.classList.contains("active")) {
		nav4.classList.add("active");
        
        if(nav1.classList.contains("active")){
            nav1.classList.remove("active");
        }
        else if(nav2.classList.contains("active")){
            nav2.classList.remove("active");
        }
        else if(nav3.classList.contains("active")){
            nav3.classList.remove("active");
        }
	} 

});