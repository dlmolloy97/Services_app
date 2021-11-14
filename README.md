## Project outline
This project converts earlier work done to learn PostgreSQL into ReactJS, visualised with CanvasJS.

### 311 requests 
The first dataset compiles information for requests sent to the city of Boston's 311 hotline, used to request public services such as repair of potholes or sanitary inspections. To carry this out, Python handler functions were created, capable of transforming the CSV generated from SQL into JS objects, which were exported to the app script. 

#### Mean response time by neighbourhood
For the first exercise carried out, the mean time taken to respond to requests was compiled by neighbourhood with a SQL query, and then graphed. 

#### Percentage of requests marked as overdue
Many of the service requests were marked as overdue, as they missed their target completion date or were still open. The proportion of requests marked as overdue was compiled by neighbourhood, and is shown beneath.