const array = [
    {
        "name": "demo movie 1",
        "rating": 4,
        "release": "26-12-2022"
    },
    {
        "name": "demo movie 2",
        "rating": 5,
        "release": "2-10-2022"
    },
    {
        "name": "demo movie 3",
        "rating": 3,
        "release": "26-12-2022"
    },
    {
        "name": "demo movie 4",
        "rating": 5,
        "release": "2-10-2022"
    },
    {
        "name": "demo movie 5",
        "rating": 3,
        "release": "12-10-2022"
    },
    {
        "name": "demo movie 6",
        "rating": 4,
        "release": "26-2-2022"
    },
    {
        "name": "demo movie 7",
        "rating": 1,
        "release": "2-10-2021"
    },
    {
        "name": "demo movie 8",
        "rating": 2,
        "release": "26-12-2020"
    },
    {
        "name": "demo movie 9",
        "rating": 5,
        "release": "2-1-2021"
    },
    {
        "name": "demo movie 10",
        "rating": 3,
        "release": "12-10-2020"
    },
    {
        "name": "demo movie 11",
        "rating": 3,
        "release": "16-12-2022"
    },
    {
        "name": "demo movie 12",
        "rating": 5,
        "release": "21-11-2022"
    },
    {
        "name": "demo movie 13",
        "rating": 2,
        "release": "26-8-2022"
    },
    {
        "name": "demo movie 14",
        "rating": 2,
        "release": "2-11-2022"
    },
    {
        "name": "demo movie 15",
        "rating": 3,
        "release": "23-9-2022"
    },
    {
        "name": "demo movie 16",
        "rating": 4,
        "release": "9-2-2022"
    },
    {
        "name": "demo movie 17",
        "rating": 1,
        "release": "2-10-2018"
    },
    {
        "name": "demo movie 18",
        "rating": 2,
        "release": "19-12-2020"
    },
    {
        "name": "demo movie 19",
        "rating": 4,
        "release": "2-1-2019"
    },
    {
        "name": "demo movie 20",
        "rating": 5,
        "release": "2-1-2023"
    }
]

exports.getMovies = (req, res) => {
    res.status(200).send(array)
}