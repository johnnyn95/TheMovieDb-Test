$(function(){

    var authKey = "e5c29049ee97d4ff4783f528930be86e";
    var $searchValue=  $('#searchValue');
    var $movies = $('#movies');
    var $pages = $('#pages');
    var $numberOfPages;
    var $pageNumber = $('#pageNumber');
    var $title = $('#title');
    var $poster_path = $('#poster_path');
    var $id = $('#id');
    var $overview = $('#overview');

    var movieTemplate = "<li id='{{id}}' class='list-group-item>"+
    "<div class='col-md-6'>"+
        "<h3>{{title}}</h3>" +
        "<img src='https://image.tmdb.org/t/p/w300/{{poster_path}}' alt'Movie logo'/>" +
        "<p>{{overview}}</p>" +
    "</div>"+
"</li>" +
"</br>";


    var pagesTemplate = "<li class='list-group-item'><a href='https://api.themoviedb.org/3/search/movie?api_key={{authKey}}&page={{i}}&query={{searchValue}}'>{{i}}</a></li>";  

    $('#searchbar').submit(function() {
        searchValue = $('#searchbar input').val();

        $.ajax({
            type:'GET',
            url:'https://api.themoviedb.org/3/search/movie?api_key='+authKey+'&page=1&query='+ searchValue ,
            success: function(data){
                $.each(data.results,function(i,movie){              
                    //$movies.append(Mustache.render(movieTemplate,movie));
                    fillMovieList(movieTemplate,$movies,movie);
                });
                for(i = 1 ;i <  data.total_pages;i++)
                {
                    var url = "https://api.themoviedb.org/3/search/movie?api_key="+authKey+"&page="+i+"&query="+searchValue;
                    $pages.append("<li id='"+ i +" 'class='list-group-item'><a href='"+url+"'>"+ i +"</a></li>");
                }
            }
        });
    });


});