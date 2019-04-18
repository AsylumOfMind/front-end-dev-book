I have no idea what I am doing when it comes to using a repository, it's only by happenstance that I even figured out how through trial and error to update with the most recent file -_-

I am stuck and it isn't even something I added to make my life 10x more difficult this time.

While trying to add the callback I ran into an issue that I can't really understand or explain. As the existing server data doesn't plug into my edited version I made my own JSON file which is in the api folder. 

When running this set of commands in the console:
----------------------------------------------------------
        var remoteDS = new App.RemoteDataStore
            ("api/movieratings");
------------------------------------------------------------            
        remoteDS.add('godzilla2864@nippon.com', {"date": "2010","director": "Christopher Nolan","emailAddress":         "godzilla2864@nippon.com","genre": "action","movieTitle": "Inception","rating": "8.8",
            "stars": " Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
            "storyline": "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable. Cobb's rare ability has made him a coveted player in this treacherous new world of corporate espionage, but it has also made him an international fugitive and cost him everything he has ever loved. Now Cobb is being offered a chance at redemption. One last job could give him his life back but only if he can accomplish the impossible, inception. Instead of the perfect heist, Cobb and his team of specialists have to pull off the reverse: their task is not to steal an idea, but to plant one. If they succeed, it could be the perfect crime. But no amount of careful planning or expertise can prepare the team for the dangerous enemy that seems to predict their every move. An enemy that only Cobb could have seen coming.",
            "writers": "Christopher Nolan"});
-------------------------------------------------------------
Instead of receiving back the new Object, I get a printout of my entire index.html file.
