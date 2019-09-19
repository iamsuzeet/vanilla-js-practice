const search = document.getElementById("search");
const matchList = document.getElementById("match-list");

//Seach states.json and filter it
const searchState = async searchText => {
  const res = await fetch("state.json");
  const states = await res.json();

  //get matches to current search input
  let matches = states.filter(state => {
    const regex = new RegExp(`^${searchText}`, "gi");
    return state.name.match(regex) || state.abbr.match(regex);
  });

  if (searchText.length === 0) {
    matches = [];
    matchList.innerHTML = "";
  }

  //render result
  outputHtml(matches);
};

//show results in html
const outputHtml = matches => {
  if (matches.length > 0) {
    const html = matches
      .map(
        match => `
      <div class="card card-body mb-4 bg-secpndary text-dark">
        <h4>${match.name} (${match.abbr}) <span class="text-primary">${
          match.capital
        }</span></h4>
        <small>Lat: ${match.lat} / Long: ${match.long}</small>
      </div>
    `
      )
      .join(" ");
    matchList.innerHTML = html;
  }
};

search.addEventListener("input", () => searchState(search.value));
