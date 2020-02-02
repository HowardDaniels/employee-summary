# employee-summary

Memorizing names can be difficult, so this command line application allows employees to enter in their team's info, and access it on a webpage, listing their team members' names, roles, and IDs.

The employees' specific roles are accounted for as well, as managers' office numbers, engineers' GitHub profiles, and interns' current schools will be listed.

Upon installing Inquirer from NPM by entering "npm install inquirer", the user may enter info into the command line for as many team members as he or she would like (the only requirement is that there be a manager profile), which are all displayed on an HTML document once all team members' info is gathered. The manager's info is written to index.html, and as each team member's info is entered, it is appended to that HTML file.