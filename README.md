# Hotel-Recommendation-System-
One of the first things to do while planning a trip is to book a good place to stay. Booking a hotel online can be a tedious task with hundreds of hotels to choose from, for every location. Motivated by the importance of these situations, we decided to work on the task of recommending hotels to users. We used Make My Trip&amp;#39;s dataset, which has a variety of features that helped us achieve an in depth understanding of the process that makes a user choose certain hotels over others. The objective of this hotel recommendation task is to predict and recommend five hotel clusters to a user that he/she is more likely to book given hundred distinct clusters. The selection of the hotel would be on geographical basis that is: state wise, city-wise, rating-wise etc.

FEATURES AND IMPLEMENTATION:
1. Searching by the Name: To implement this feature we have compared two algorithms. One is the edit distance algorithm and the other is the inbuilt library function “levenshtein_distance”. We compared the time complexity of both of the
algorithms.
2. Searching the Nearby Hotels according to the current position (latitude and longitude) of the user. We used geolocation to get the current latitude and longitude of the user. Then we applied K- Nearest Neighbour (One of the ML Algorithm) to find out the nearest hotels. In this algorithm we used two methods to calculate the distance. One is Euclidean Distance and another is Manhattan Distance. On comparing we found that Euclidean distance provided more accurate results. For better results we used Weighted K- Nearest neighbour. In this while searching for the nearest neighbour we have given 40% weight to the rating of the hotel and 60% weight to the distance.
3. Searching the Top Most Searched Hotels. This feature is implemented using the mongodb aggregation query which gives the top 5 searched
hotels.
4. Customized Search Based on preferences of state, city and rating. We used mongo db compound queries to implement this feature.
5. Top rated hotels in a state. We have used Map-Reduce Function to find the maximum rating of a hotel in a particular city.
6. Replication is done on data stored on the Mongo Db database . We have one primary node and three secondary nodes. In case of failure of Primary node one of the Secondary Node is chosen as Primary Node based on voting.
