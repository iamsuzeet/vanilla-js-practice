document.addEventListener("DOMContentLoaded", handleClientLoad);

//Options
const CLIENT_ID =
  "299796761595-8ov8r2phi9ng7rfos271lm4u37rj7bq0.apps.googleusercontent.com";

const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
];

const SCOPES = "https://www.googleapis.com/auth/youtube.readonly";

const authorizeButton = document.getElementById("authorize-button");
const signoutButton = document.getElementById("signout-button");
const content = document.getElementById("content");
const channelForm = document.getElementById("channel-form");
const channelInput = document.getElementById("channel-input");
const videoContainer = document.getElementById("video-container");

const defaultChannel = "Miracle";

//load auth2 library
function handleClientLoad() {
  gapi.load("client:auth2", initClient);
}

//Init API client library and set up sign in listeners
function initClient() {
  gapi.client
    .init({
      discoveyDocs: DISCOVERY_DOCS,
      clientId: CLIENT_ID,
      scope: SCOPES
    })
    .then(() => {
      //listen for sign in state changes
      gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
      //handle initial sign in state
      updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

      authorizeButton.onclick = handleAuthClick;
      signoutButton.onclick = handleSignoutClick;
    });
}

// update ui sign in state changes
function updateSigninStatus(isSignedIn) {
  // console.log(isSignedIn);
  if (isSignedIn) {
    authorizeButton.style.display = "none";
    signoutButton.style.display = "block";
    content.style.display = "block";
    videoContainer.style.display = "block";
    getChannel(defaultChannel);
  } else {
    authorizeButton.style.display = "block";
    signoutButton.style.display = "none";
    content.style.display = "none";
    videoContainer.style.display = "none";
  }
}

// Handle login
function handleAuthClick() {
  gapi.auth2.getAuthInstance().signIn();
}

// Handle logout
function handleSignoutClick() {
  gapi.auth2.getAuthInstance().signOut();
}

//Get channel detail from api
function getChannel(channel) {
  console.log(gapi.client.youtube);
  gapi.client.youtube.channels
    .list({
      part: "snippet,contentDetails,statistics",
      forUsername: channel
    })
    .then(res => console.log(res))
    .catch(err => console.log(err));
}
