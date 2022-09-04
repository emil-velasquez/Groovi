## Groovi

<div align="center">
	<img src="https://icons.getbootstrap.com/icons/disc-fill/" alt="Groovi Logo" width=80 height=80 />
</div>

Note: I do not own any of the dance videos shown here. I am just using them to test the application. You can find the videos displayed here at: 

Built with: Electron, React, MongoDB (hosted at MongoAtlas), Express, Node.JS, Mediapipe, Typescript, Auth0

## Completed
- User Features
	- Authenticate and authorize through Auth0
- Playlists
	- Display a collection of videos through a playlist page
- Video Info Page
	- View a dance and its information through a video info page
- Dance Features
	- Learn a dance by dancing side-by-side with the video
	- Use Mediapipe’s pose models to compare how well you are following along with the video (like Just Dance)
	- Mirror the video and follow along
	- If the scoring seems off, define a focus zone of the main instructor you want to follow to guide the pose model
	- Define and activate chapters to partition, practice, and repeat certain segments of the dance
	- Additional Video Controls: speed control, volume control, and progress bar

## Todo
- General
	- Loading screen/icon between page switches to smoothen user experience/prevent components popping up sporadically instead of all at once
- User Features
	- Create a user page where a user can see and change their information
	- Create a video upload page
- Playlists
	- Allow the user to create new playlists
	- Allow the user to favorite/unfavorite playlists
- Video Info Page
	- Allow the user to favorite/unfavorite videos
	- Allow users to submit videos to the “stage” where people can see them following the tutorial
- Dance Features
	- Chapters
		- Clean up the new/edit chapter page with a double-sided slider to allow the user to easily select a range of times for the chapter
		- Allow the user to delete chapters
		- Save a user’s chapters for a song
	- Allow users to record and save their dancing
	- Be able to change the video from taking half the screen to taking the whole screen and vice-versa
	- Figure out how to make it clear to the user what person the pose model is following in the video so that the user knows if they need to set a focus area
	- Create a scoring system based on the difference in the poses (which is currently just a number in the top right corner), such as Perfect, Great, Ok, etc. (make it game-like)
	- Create a Perform page without the learning-specific features available that plays like a Just Dance session (should remember the focus area and mirror decisions during Learn if they exist or have default values from when the video was first uploaded)
