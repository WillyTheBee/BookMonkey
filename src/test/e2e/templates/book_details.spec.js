describe("E2E: book details view", function () {

    beforeEach(function () {
       browser().navigateTo('/');
    });

    it("should show the correct book details", function () {
        browser(). navigateTo('#!/books/978-3-89864-728-1');

        expect(element('.bm-book-title').html()).toBe(
            "Java Script für Enterprise Entwickler"
        );
        expect(element('.bm-book-subtitle').html()).toBe(
            "Professioneller Subtitle"
        );
        expect(element('.bm-book-isbn').html()).toBe(
            "ISBN: 978-3-89864-728-1"
        );
        expect(element('.bm-book-num-pages').html()).toBe(
            "Seiten: 302"
        );

    });
});