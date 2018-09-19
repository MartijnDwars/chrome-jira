chrome.webNavigation.onBeforeNavigate.addListener(function (event) {
  console.log('On before navigate', event);

  var url = event.url;
  var re = /^https:\/\/www\.google\.co\.uk\/search\?q=GM-(\d+)/
  var matches = url.match(re)

  if (matches && matches.length >= 1) {
    console.log('URL ' + url + ' matches, issue ID = GM-' + matches[1]);

    chrome.tabs.update(event.tabId, {
      url: 'http://ol-jira.us.oracle.com/browse/GM-' + matches[1]
    });
  }
});