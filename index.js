// local storage;

//getting items

function get() {
    let gett = localStorage.getItem("books2");
    if (gett == null) {
        gett = [];
        return gett;

    } else {
        return JSON.parse(gett);
    }
};

// add books

function add(book) {
    let books2 = get();
    books2.push(book);
    localStorage.setItem("books2", JSON.stringify(books2));

};

// remve book
function remove(book) {
    let books2 = get();
    let index = books2.indexOf(book);
    books2.splice(index, 1);
    localStorage.setItem("books2", JSON.stringify(books2));


};



// add books
$("form#addbooks").submit(function(e) {
    e.preventDefault();

    if ($("input#add").val() == "") {
        alert("the field is empty");
    } else {
        const li = $("<li>");
        const h4 = $("<h4>");
        const span = $("<span>");
        const button = $("<button>");
        h4.text($("input#add").val());
        span.addClass("delete");
        button.text("x");
        span.append(button);
        li.append(h4);
        li.append(span);
        $("ul").append(li);
        add($("input#add").val());
        $("input#add").val("");




    }

});

// delete books
$("ul").click(function(e) {
    if ($(e.target).parent().hasClass("delete")) {

        $(e.target).parent().parent().remove();
        remove($(e.target).parent().prev().text());
    }

});

//search for books

$("input#srch").keyup(function(e) {

    $("li h4").each(function(index, element) {

        if ($(element).text().toUpperCase().indexOf($(e.target).val().toUpperCase()) == -1) {

            $(element).parent().css({ "display": "none" });

        } else {

            $(element).parent().css({ "display": "" });

        }
    })
});

//display books 
function displaybooks() {
    let books = get();
    if (books != []) {
        books.forEach(function(book) {
            const li = $("<li>");
            const h4 = $("<h4>");
            const span = $("<span>");
            const button = $("<button>");
            h4.text(book);
            span.addClass("delete");
            button.text("x");
            span.append(button);
            li.append(h4);
            li.append(span);
            $("ul").append(li);

        })

    }
};
displaybooks();