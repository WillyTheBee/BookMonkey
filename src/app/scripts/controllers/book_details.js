bmApp.controller('BookDetailsCtrl', function ($scope) {
    console.log('its me Motherfucker')
    // initalisieren eines book objektes für die Detailsansicht
    $scope.book = {
        title   : 'Java Script für Enterprise Entwickler',
        subtitle: 'Professioneller Subtitle',
        isbn    : '978-3-89864-728-1',
        abstract: 'JavaScript ist laengt nicht mehr nur abstract',
        numPages: 302,
        author  : 'Oliver Ochs',
        publisher: {
            name : 'dpunkt.verlag',
            url  : 'http://dpunkt.de/'
        }
    };
});