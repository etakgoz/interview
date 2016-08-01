let musicPlayer = {
	songName: "Bird of Paradise",
	artistName: "Charlie Parker",
	play: function () {
		console.log(`Playing ${this.songName} by ${this.artistName}`);
	}
};

let playerButton = document.getElementById("button-1");

// Bind changes the context
playerButton.addEventListener("click", musicPlayer.play.bind(musicPlayer), false);

// adding the function like would elimienate the possibility removeEventListener
// See https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener