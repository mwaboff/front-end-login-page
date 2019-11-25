# Front-End Login Page

## Usage Note
**Default Username:** admin
**Default Password:** password

## Assignment Information
Week 3 & 4 Programming Lab  
Michael Aboff  
Wilmington University  
Professor Brian Jorgage  

## The Prompt
> The lab assignments will be exercises in which you write programs to solve problems.  Write a Login Page javascript program that include the following fields:
> 
> 1. Input field for username
> 
> 2. Input field for password
> 
> 3. Background and picture
> 
> 4. Title or heading
> 
> 5. Validation code that will check that the user enter the correct username and password. 
> 
> 6. Instruction to the user
> 
> Please read the programming challenges to fully understand the concepts before writing, compiling and executing the program. All assignment should be created in HTML and JavaScript. The program must execute free of errors, full of comments, and is readable.
> 
> Upload your a screenshot of the run program and the coding before the end of the week for grading. Upload your a screen of the run program and the coding before the end of the week for grading.  For grading expectations, view the programming rubricPreview the document.


## The Challenges

### User Storage
Due to the nature of our project needing to be entirely front-end based, the hope for a secure method of storing usernames and passwords was nil. I originally played around with the idea of storing usernames and passwords in cookies on the user's browser. This would allow for the ability to change passwords and even create multiple user accounts.

Unfortunately, Chrome (and I believe Firefox) do not allow for local files to store cookies in the browser. It will work if the file is hosted on a web server locally or remotely, but not if the HTML file is accessed directly. I would not be able to ask the professor to change his browser's internal settings so this was a non starter. I was able to create a working prototype but removed it for this final version.

My next thought was to store the data in a flat file on the user's computer. This seems like it may be possible with the [File](https://developer.mozilla.org/en-US/docs/Web/API/File/File) or [FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader) APIs, however due to time constraints I was unable to explore this further.

I ended up simply "hard-coding" the username and password as variables stored in login-project.js. This ended up being the simplest method of meeting the professor's requirements and best for my schedule.

### Coding Style
I recently picked up "Clean Code" by Robert Cecil Martin and have tried to emulate the lessons taught in his book. Focusing on small functions, evocative names, and most code that reads like a story, I feel like I have made the code considerably cleaner than previous projects I have written. Sometimes I feel like I am writing extra functions just for the sake of cutting down on a line or two, which may be worth it in the long run.

### Design
I designed the front end originally during week 2's [Book Recommender](https://github.com/mwaboff/book-recommender) project. I had scrapped it from the original design then, but was able to reuse the CSS from then.

