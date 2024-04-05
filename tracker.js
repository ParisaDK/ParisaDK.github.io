// tracker.js
(function() {
    var data = {
        pageTitle: document.title,
        pageUrl: window.location.href,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
    };

    fetch('https://my-project-inGcloud-id.region-id.r.appspot.com/track', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(text => console.log('Track data sent successfully:', text))
    .catch(error => console.error('Error sending track data:', error));
})();
