
## Final group project from Dev Academy

Completed this app within 7 days, in a team of 6 people, all of us students from the bootcamp. 
My role was as the Product Owner, as the concept came from an idea I had. 
Mostly I worked on setting up the Redux store, reducers and actions, along with creating React components and api calls for the app. 

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

