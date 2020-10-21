db.mycol.insert({
    "city": {
        "name": "wollongong",
        "population": "80k",
        "country": "australia",
        "state": "New South Whales"
    }
});

db.mycol.insert({
    "Employee": {
        "enum": 1234567,
        "full-name": "John Doe",
        "salary": "200k",
        "hobbies": ["cooking", "panting", "gardening"]
    }
});

// loading the file

/**
 * show dbs;
 * use database-system;
 * show collections;
 * load("dbload.js");
 * db.mycol.find().pretty();
 * 
 *          **DML**
 * > db.mycol.find().pretty();
    {
            "_id" : ObjectId("5f8f7e3e5b3a3c48c8eab2cc"),
            "city" : {
                    "name" : "wollongong",
                    "population" : "80k",
                    "country" : "australia",
                    "state" : "New South Whales"
            }
    }
    {
            "_id" : ObjectId("5f8f7e3e5b3a3c48c8eab2cd"),
            "Employee" : {
                    "enum" : 1234567,
                    "full-name" : "John Doe",
                    "salary" : "200k",
                    "hobbies" : [
                            "cooking",
                            "panting",
                            "gardening"
                    ]
            }
    }
 */


db.department.insert({
    "name": "School of Computing and Information Technology",
    "code": "SCIT",
    "total_staff_no": 30,
    "budget": 10000000,
    "address": {
        "street": "Northfields Ave",
        "bldg": 3,
        "city": "wollongong",
        "country": "Australia"
    },
    "courses": [{
        "code": "CSCI835",
        "title": "Database Systems",
        "credits": 6
    },
    {
        "code": "CSIT115",
        "title": "Data Management and Security",
        "credits": 6
    },
    {
        "code": "CSCI317",
        "title": "Database Performance Tuning",
        "credits": 6
    },
    {
        "code": "CSIT321",
        "title": "Software Project",
        "credits": 12
    }
    ]
});



db.department.insert(
    {
        "name": "School of Astronomy",
        "code": "SOA",
        "total_staff_number": 5,
        "budget": 10000,
        "address": {
            "street": "Franz Josef Str",
            "bldg": 4,
            "city": "Vienna",
            "country": "Austria"
        },
        "courses": [{
            "code": "SOA101",
            "title": "Astronomy for Kids",
            "credits": 3
        },
        {
            "code": "SOA201",
            "title": "Black Holes",
            "credits": 6
        },
        {
            "code": "SOA301",
            "title": "Dark Matter",
            "credits": 12
        }
        ]
    }
);

db.department.insert(
    {
        "name": "School of Physics",
        "code": "SOPH",
        "total_staff_number": 25,
        "budget": 100000,
        "address": {
            "street": "Victoria St",
            "bldg": 25,
            "city": "Cambridge",
            "country": "UK"
        },
        "courses": [{
            "code": "SOPH101",
            "title": "Special Relativity",
            "credits": 6
        },
        {
            "code": "SOPH102",
            "title": "General Relativity",
            "credits": 12
        },
        {
            "code": "SOPH103",
            "title": "Quantum Mechanics",
            "credits": 18
        }
        ]
    }
);