// in ekigen klammern geben wir an von welchen anderen Modulen unser eigenes Modul abhängt
// wir binden also das Modul ngRoute in unser eigenes Modul ein
const bmApp = angular.module('bmApp', ['ngRoute']);


// der Route service wird per Dependencie injection an die Methode übergeben
// der route-Service arbeitet mit der ng-view directive zusammen, das html template wird also in das div mit dem ngview attr. geladen
bmApp.config(function ($routeProvider) {
    // wenn also die URL localhost:/#/books/123 requestet wird, wird book_details.html zurück gegebn
    // und direkt ein Controller mit scope auf dieses template gebunden
    // angular js erstellt bei jedem Aufruf der Route einen neuen Scope für den Controller
    $routeProvider.when('/books/:isbn', {
       templateUrl: 'templates/book_details.html',
       controller: 'BookDetailsCtrl'
    });

});