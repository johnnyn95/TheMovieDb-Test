function fillMovieList(fillTemplate, fillList, fillWith) {   
    var list = fillList;
    var template = fillTemplate;
    list.append(Mustache.render(template, fillWith));
}

