const urlPageTitle = "201CreAcademy - Học Viện Lập Trình";

// create document click that watches the nav links only
document.addEventListener("click", (e) => {
	const { target } = e;
	if (!target.matches("nav a")) {
		return;
	}
	e.preventDefault();
	urlRoute();
});

// create an object that maps the url to the template, title, and description
const urlRoutes = {
	//router for error
	404: {
		template: "/templates/common/404.html",
		title: "Không Tìm Thấy Trang | " + urlPageTitle,
		description: "Page not found",
		js: null
	},
	//router for home and default
	"/": {
		template: "/templates/home.html",
		title: "Trang Chủ | " + urlPageTitle,
		description: "This is the home page",
		js: null
	},
	"/home": {
		template: "/templates/home.html",
		title: "Trang Chủ | " + urlPageTitle,
		description: "This is the home page",
		js: '/js/templates/home.js'
	},
	//router for courses
	"/courses-it-fundamentals": {
		template: "/templates/courses/it-fundamentals.html",
		title: "Khóa Học IT Fundamentals | " + urlPageTitle,
		description: "This is the IT Fundamentals courses page",
		js: null
	}
};

// create a function that watches the url and calls the urlLocationHandler
const urlRoute = (event) => {
	event = event || window.event; // get window.event if event argument not provided
	event.preventDefault();
	// window.history.pushState(state, unused, target link);
	window.history.pushState({}, "", event.target.href);
	urlLocationHandler();
};

// create a function that handles the url location
const urlLocationHandler = async () => {
	const location = window.location.pathname; // get the url path
	// if the path length is 0, set it to primary page route
	if (location.length == 0) {
		location = "/";
	}
	// get the route object from the urlRoutes object
	const route = urlRoutes[location] || urlRoutes["404"];
	// get the html from the template
	const html = await fetch(route.template).then((response) => response.text());
	// set the content of the content div to the html
	document.getElementById("content").innerHTML = html;
	// set the title of the document to the title of the route
	document.title = route.title;
	// set the description of the document to the description of the route
	document
		.querySelector('meta[name="description"]')
		.setAttribute("content", route.description);

	if(route.js){
		scriptNode = document.createElement('script');
		scriptNode.setAttribute( 'src', route.js);
		document.body.appendChild(scriptNode);
	}
};

// add an event listener to the window that watches for url changes
window.onpopstate = urlLocationHandler;
// call the urlLocationHandler function to handle the initial url
window.route = urlRoute;
// call the urlLocationHandler function to handle the initial url
urlLocationHandler();
