// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({18:[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	search: function search(searchTerm, searchLimit, sortBy) {
		// console.log('hahu');
		return fetch("http://www.reddit.com/search.json?q=" + searchTerm + "&sort=" + sortBy + "&limit=" + searchLimit).then(function (res) {
			return res.json();
		}).then(function (data) {
			return data.data.children.map(function (data) {
				return data.data;
			});
		}).catch(function (err) {
			return console.log(err);
		});
	}

};
},{}],4:[function(require,module,exports) {
'use strict';

var _redditapi = require('./redditapi');

var _redditapi2 = _interopRequireDefault(_redditapi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var searchForm = document.getElementById('search-form');
var searchInput = document.getElementById('search-input');

// formEvent addEventListener
searchForm.addEventListener('submit', function (e) {
	//get Search term

	var searchTerm = searchInput.value;
	// console.log(searchTerm);

	// Get sort
	var sortBy = document.querySelector('input[name="sortby"]:checked').value;
	// console.log(sortBy);

	// Get limit 
	var searchLimit = document.getElementById('limit').value;
	// console.log(searchLimit);

	// check input
	if (searchTerm === '') {
		//show message

		showMessage('Please add a search term', 'alert-danger');
	}

	//clear input 

	searchInput.value = '';

	// search reddit
	_redditapi2.default.search(searchTerm, searchLimit, sortBy).then(function (results) {
		// console.log(results);

		var output = '<div class="card-columns">';
		// Loop through Posts
		results.forEach(function (post) {
			var image = post.preview ? post.preview.images[0].source.url : 'https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg';

			output += '\n\t\t\t\t\t<div class="card">\n\t\t\t\t\t  <img class="card-img-top" src="' + image + '" alt="Card image cap">\n\t\t\t\t\t  <div class="card-body">\n\t\t\t\t\t    <h5 class="card-title">' + post.title + '</h5>\n\t\t\t\t\t    <p class="card-text">' + truncateText(post.selftext, 100) + '</p>\n\t\t\t\t\t    <a href="' + post.url + '" target="_blank" class="btn btn-primary">Read More</a>\n\t\t\t\t\t  \t<hr>\n\t\t\t\t\t  \t<span class="badge badge-secondary">Subreddit: ' + post.subreddit + '</span>\n\t\t\t\t\t  \t<span class="badge badge-dark">Score: ' + post.score + '</span>\n\t\t\t\t\t  </div>\n\t\t\t\t\t</div>\n\t\t\t\t';
		});
		output += '</div';

		document.getElementById('results').innerHTML = output;
	});

	e.preventDefault();
	// console.log(1223);

});

// show message

function showMessage(message, className) {
	//Create div
	var div = document.createElement('div');
	// add classes
	div.className = 'alert ' + className;
	//Add text 
	div.appendChild(document.createTextNode(message));

	//get parent
	var searchContainer = document.getElementById('search-container');

	//get search 
	var search = document.getElementById('search');

	//insert message 
	searchContainer.insertBefore(div, search);

	//timeout alert

	setTimeout(function () {
		return document.querySelector('.alert').remove();
	}, 3000);
}

// truncate text

function truncateText(text, limit) {
	var shortened = text.indexOf(' ', limit);
	if (shortened == -1) return text;
	return text.substring(0, shortened);
}
},{"./redditapi":18}],35:[function(require,module,exports) {

var global = (1, eval)('this');
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    accept: function (fn) {
      this._acceptCallback = fn || function () {};
    },
    dispose: function (fn) {
      this._disposeCallback = fn;
    }
  };
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '50901' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.require, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.require, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + 'data.error.stack');
    }
  };
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  if (cached && cached.hot._disposeCallback) {
    cached.hot._disposeCallback();
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallback) {
    cached.hot._acceptCallback();
    return true;
  }

  return getParents(global.require, id).some(function (id) {
    return hmrAccept(global.require, id);
  });
}
},{}]},{},[35,4])
//# sourceMappingURL=/dist/redditsearch_with_fetch_parcel.map