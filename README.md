
## Final group project from Dev Academy

Completed this app within seven days, in a team of six bootcamp students. We worked day and night to create a functioning, stylish app that solidified our learning from the 15 week bootcamp. Our main focus was on learning, and working as an agile team. At the end of the seven days we presented our final result. 

My role was as the Product Owner, as the concept came from an idea I originally had to create a habit formation app to help people improve themselves by kicking bad habits or creating new good ones.  

Mostly I worked on setting up the Redux store with reducers and actions using Redux thunk, along with creating React components and api calls for the app. Other team members did more work on the backend, however I understand the work that went into that and as such made some adjustments to backend code at times to improve and add functionality. 


### Browser compatibility warning:

The image for the UserDetails component uses the css aspect-ratio property in order to keep the image properly circular regardless of the image's inherent aspect ratio. This css property is still quite new and not widely supported, but will work fine on chrome. Worst case scenario will be the user uploads a non-square image and it renders as an oval on browsers that don't support the feature yet.


### Data object shapes

GET 'api/v1/user/:id' will return the following object:

```
[
    {
        "id": 2,
        "firstName": "Allyson",
        "lastName": "Wonderland",
        "userImage": "Image goes here",
        "totalXp": 0,
        "pw": "abc123",
        "habits": [
            {
                "id": 2,
                "title": "smoking",
                "description": "I know it's bad for me but I enjoy it.",
                "habitIcon": "some icon",
                "totalGoalCount": 0,
                "priority": 1,
                "goalCount": 0
            },
            {
                "id": 3,
                "title": "picking my nose",
                "description": "I also enjoy picking my nose",
                "habitIcon": "some icon",
                "totalGoalCount": 0,
                "priority": 1,
                "goalCount": 0
            }
        ]
    }
]
```

POST 'api/v1/habit' accepts a json

```
{
    "userId": "2",
    "title": "running",
    "description": "30min a day",
    "habitIcon": "some icon",
    "totalGoalCount": 0,
    "priority": 2,
    "goalCount": 0
}
```

