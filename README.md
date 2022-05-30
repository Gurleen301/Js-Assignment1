# Js-Assignment1
My Topic is Library Manaagement System
A library managemnet system enhances the efficiency of both the librarians and the library users. 
It is easy to use, highly secure and scalable. This system enables librarians to catalog books 
and keep proper records of books issued or returned and also books that are added to the library using a database.
I have made this node application in Visual studio and created table schemas using Mongo Database. There are 5 tables in the data base Library - Books, Users, Authors, IssueBooks
and ReturnBooks - each with 5 fields.
Hence, I chose this topic for creating node application as it aims to develop a system to maintain the daily work of a library.
# Books table schema 
![1-Books](https://user-images.githubusercontent.com/78660994/170885647-d0bf75f7-2576-4651-9dca-5134b77f9f8a.PNG)

# Users table schema 
![2-UsersTable](https://user-images.githubusercontent.com/78660994/170885724-7afd0bd4-4eb3-4aaf-aba4-c0bf1fc51207.PNG)

# Authors table schema
![3-Authors](https://user-images.githubusercontent.com/78660994/170885761-40a3fe42-f7e6-4f40-af65-8368b989e84a.PNG)

# IssueBooks table schema 
![4-IssueBooks](https://user-images.githubusercontent.com/78660994/170885789-a568edb5-ffd9-4cb4-8d9c-3558987a8e5b.PNG)

# ReturnBooks table schema 
![5-ReturnBooks](https://user-images.githubusercontent.com/78660994/170885796-3f144e5a-94d2-43ad-9037-08298989569b.PNG)

# Create multiple data entry in a collection
![adding multiple data result](https://user-images.githubusercontent.com/78660994/171063199-16e1b9f7-8b36-4fcc-9ee2-6e8f058bdd3f.PNG)

# data in the database on mongo after added mutliple data in a collection using createMultipleListings() function
![mutliple data entry 1](https://user-images.githubusercontent.com/78660994/171063689-4a6b81a5-1b28-4ecc-ac5a-00d742044c20.PNG)

![mutliple data entry 2](https://user-images.githubusercontent.com/78660994/171063696-ae7dd5aa-df54-4c53-85be-7fae0eef0c4a.PNG)

# Read a record by passing field's value
![find record by passing field value](https://user-images.githubusercontent.com/78660994/171063236-9e579450-0ac6-4a37-90d7-bf3fe76a0891.PNG)

# Update record using upsert
![Update record using upsert output](https://user-images.githubusercontent.com/78660994/171063254-8a275a5c-8b74-45f9-8753-3076d4561c56.PNG)

# Delete records by date
here deleted documents are 0 as there are no books craeted in the database before the date passed in the function deleteBooksScrapedBeforeDate()
![delete record output](https://user-images.githubusercontent.com/78660994/171063285-6bae27cd-05e6-4dca-9900-123c531da6f2.PNG)
