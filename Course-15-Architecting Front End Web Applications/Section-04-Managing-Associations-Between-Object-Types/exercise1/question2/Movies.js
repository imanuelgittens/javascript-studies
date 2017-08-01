/*
@ file overview - contains definition of model class Movie
@Author - Imanuel Gittens
*/

/*
@Class
*/

mv.m.Movie = class{
	constructor(slots){
		//assign default properties to mandatory values
		this._movieId = slots.movieId;
		this._title = slots.title;
		this.releaseDate = slots.releaseDate;

	}

	get movieId(){
		return this._movieId;
	}
}