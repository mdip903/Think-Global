const PROGRAMS = [
	{
		id: "program-1",
		program_title: "Volunteer at Spain!",
		program_subtitle: "Five Week Program",
		program_description: "A five week program where you can immerse yourself in Spanish culture and have an experience of a lifetime.",
		image: "images/spain.jpg",
		image_title: "Estimate cost : $15,000"
	},
	{
		id: "program-2",
		program_title: "Intern at England!",
		program_subtitle: "6 Month Program",
		program_description: "Work alongside professionals in England and learn valuable skills while immersing yourself with their culture.",
		image: "images/girl-at-microscope-1431936.jpg",
		image_title: "Estimate cost : $15,000"
	},
	{
		id: "program-3",
		program_title: "Volunteer at Africa!",
		program_subtitle: "Five week program",
		program_description: "A five week program where you can immerse yourself in African culture and have an experience of a lifetime.",
		image: "images/africa.jpg",
		image_title: "Estimate cost : $15,000"
	},
	{
		id: "program-4",
		program_title: "Intern at Brazil!",
		program_subtitle: "6 Month Program",
		program_description: "Work alongside professionals in Brazil and learn valuable skills while immersing yourself with their culture.",
		image: "images/brazil.jpg",
		image_title: "Estimate cost : $15,000"
	},
	{
		id: "program-5",
		program_title: "Volunteer at India!",
		program_subtitle: "Five week program",
		program_description: "A five week program where you can immerse yourself in Indian culture and have an experience of a lifetime.",
		image: "images/india.jpg",
		image_title: "Estimate cost : $15,000"
	},
 ];

function createprogramHTML(program) {
	let programHTML = $("<article>");

	let figure = $("<figure>");
	let image = $("<img>", {src: program.image, alt: program.image_title, width: "250"});
	let caption = $("<figcaption>" + program.image_title + "</figcaption>");
	figure.append(image);
	figure.append(caption);
	programHTML.append(figure);

	let title = $("<h2>" + program.program_title + "</h2>");
	programHTML.append(title);

	let subtitle = $("<h3>" + program.program_subtitle + "</h3>");
	programHTML.append(subtitle);

	let description = $("<p>" + program.program_description + "</p>");
	programHTML.append(description);

	return programHTML;
}

function displayPrograms(programs) {
	let programsList = $("#programsList");

	programsList.empty();
	for(let program of programs) {
		let programHTML = createprogramHTML(program);
		programsList.append(programHTML);
	}
}

$(document).ready(function(){
	let mainPrograms = [PROGRAMS[0], PROGRAMS[1]];

	displayPrograms(mainPrograms);

	$("#searchText").on("keyup", search)
});

function search() {
		let query = $("#searchText").val();
		query = query.toLowerCase().trim();

		let matches = [];
		for(let program of PROGRAMS) {
			let programTitle = program.program_title.toLowerCase();
			if(programTitle.includes(query)) {
				matches.push(program);
			}
		}

		displayPrograms(matches);
}
