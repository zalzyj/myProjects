$(document).ready(() => {
    $('#searchForm').on('submit', (e) => {
        let searchText = $('#searchText').val();
        getMovies(searchText);
        e.preventDefault();
    });
});

function getMovies(searchText){
    axios.get('http://www.omdbapi.com/?apikey=2bb2b5dc&s='+ searchText).then((response)=>{
        console.log(response);
        let movies = response.data.Search;
        let output = '';
        $.each(movies, (index,movie) => {
            output += ` 
            <div class="col-md-3">
            <div class="well text-center">
                <img src="${movie.Poster}">
                <h5>${movie.Title}</h5>
                <a href="#" onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary"> Movie Details</a>
            </div>
            </div>
            
            `;
        });
        $('#movies').html(output);

    }).catch((err)=>{
        console.log(err);
    });
}

function movieSelected(id){
    sessionStorage.setItem('movieId',id);
    window.location = 'movie.html';
    return false;
}

function getMovie(){
    let movieId = sessionStorage.getItem('movieId');
    axios.get('http://www.omdbapi.com/?apikey=2bb2b5dc&i='+ movieId).then((response)=>{
        console.log(response);
        let movie = response.data;
        let output = `
            <div class="row">
            <div class="col-md-4">
                <img src="${movie.Poster}" class="thumbnail">
            </div>
            <div class="col-md-8">
                <h2>${movie.Title}</h2>
                <ul class="list-group">
                    <li class="list-group-item"><strong>${movie.Genre }</strong></li>
                    <li class="list-group-item"><strong>${movie.Released }</strong></li>
                    <li class="list-group-item"><strong>${movie.Rated }</strong></li>
                    <li class="list-group-item"><strong>${movie.imdbRating }</strong></li>
                    <li class="list-group-item"><strong>${movie.Director }</strong></li>
                    <li class="list-group-item"><strong>${movie.Writer }</strong></li>
                    <li class="list-group-item"><strong>${movie.Actors }</strong></li>
                </ul>
            </div>
            </div>
            <div class="row">
                <div class="well">
                    <h3>Plot</h3>
                    ${movie.Plot}
                    <hr>
                    <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
                    <a href="index.html" class="btn btn-default"> Go Back To Search</a>
                </div>
            </div>
        `;
        $('#movie').html(output);
    }).catch((err)=>{
        console.log(err);
    });

}