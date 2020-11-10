/**
 * db.<collection>.find({<filter>},{<projection>}).<aggregation>()
 *  Returns only one or more documents based on the filter expression.
 *  The projection expression includes or excludes document fields.
 *  Aggregation is used to manipulate the final result set 
 *  (for example, sort(), limit(), and so on). 
 * 
 */


// Find total number of documents in a collection
db.department.count();

// Find all departments whose code is SCIT
db.department.find({ "code": "SCIT" });

// Find total number of departments whose code is SOPH
db.department.find({ "code": "SOPH" }).count();
db.department.count({ "code": "SOPH" });

// Find all departments whose name is School of Physics and whose code is SOPH
db.department.find({ "name": "School of Physics", "code": "SOPH" });

// Comparison "key"="value"

{ "key": "value" }
{ "key": { $eq: "value" } }

// Comparison "key" > "value"
{ "key": { $gt: "value" } }

// Disjunction ("key1"="value1") or ("key2"="value2")
{ $or: [{ "key1": "value1" }, { "key2": "value2" }] }

// Conjunction ("key1"="value1") and ("key2"="value2")
{ $and: [{ "key1": "value1" }, { "key2": "value2" }] }

// Boolean expression (("key1"="value1") or ("key2"="value2")) and ("key3"="value3")
{ $and: [{ $or: [{ "key1": "value1" }, { "key2": "value2" }] }, { "key3": "value3" }] }

// Negation of a comparison "key" not ="value"
{ "key": { $not: { $eq: "value" } } }

// Negation of an expression not (("key1"="value1") or  ("key2"="value2"))
{ $nor: [{ "key1": "value1" }, { "key2": "value2" }] }

// Negation not ("key1"="value1")
{ $nor: [{ "key1": "value1" }] }

// Find all departments located in Wollongong
db.department.find({ "address.city": "wollongong" });

// Find all departments such that any offered course is worth less than 6 credits
db.department.find({ "courses.credits": { $lt: 6 } });
db.department.find({ "courses.credits": { "$lt": 6 } });

// Find all departments that offer courses worth more than 12 and less than 18 credits
db.department.find({ "courses.credits": { $gt: 12, $lt: 18 } });
db.department.find({ "courses.credits": { "$gt": 12, "$lt": 18 } });

// Find all departments such that offer Quantum Mechanics course worth 6 credits
db.department.find({ "courses.credits": 6, "courses.title": "Quantum Mechanics" });

// Find all departments whose name is School of Physics or whosecode is SCIT
db.department.find({ $or: [{ "name": "School of Physics" }, { "code": "SCIT" }] });

// Find all departments whose name is School of Physics and whosecode is SOPH
db.department.find({ $and: [{ "name": "School of Physics" }, { "code": "SOPH" }] });

// Find all departments whose code is either SCIT or SOPH
db.department.find({ "code": { $in: ["SCIT", "SOPH"] } });

// Finding the first n documents in a collection
db.department.find({}).limit(1);

// Find all departments that offer a course that has a code SOA101, title 
// Astronomy for Kids and it is worth 3 credits
db.department.find({
    "courses": {
        "code": "SOA101",
        "title": "Astronomy for Kids",
        "credits": 3
    }
});

// Find all departments that offer the courses SOA101, SOA201, SOA301,
// with titles Astronomy for Kids, Black Holes, Dark Matter, and
// credits 3, 6, and 12 respectively
db.department.find({
    "courses": [
        { "code": "SOA101", "title": "Astronomy for Kids", "credits": 3 },
        { "code": "SOA201", "title": "Black Holes", "credits": 6 },
        { "code": "SOA301", "title": "Dark Matter", "credits": 12 }
    ]
});

// Find all departments such that the second offered course has code
// SOA201, title Black Holes and it is worth 6 credits
db.department.find({
    "courses.1": {
        "code": "SOA201",
        "title": "Black Holes",
        "credits": 6
    }
});

// Find all departments such that the first offered course is worth less than 6 credits
db.department.find({ "courses.0.credits": { $lt: 6 } });

// Array equal to [1,2,3,4,5]
{ "array": { $all: [1, 2, 3, 4, 5] } };

// Array includes an element that satisfies a condition Size of an array
{ "array": { "$elemMatch": { $eq: 2 } } };
{ "array": { "$elemMatch": { $gt: 2, $lt: 4 } } };

// Size of an array
{ "array": { $size: 5 } };


//      **PROJECTIONS**

// Find name and code of each department
db.department.find({}, { "name": 1, "code": 1 });

// find() name and code of each department and do not include document identifier _id into an answer
db.department.find({}, { "name": 1, "code": 1, "_id": 0 });

// Find all key:value pairs describing each department except course credits, course code, and _id
db.department.find({}, { "courses.credits": 0, "courses.code": 0, "_id": 0 });

// Find all departments that have no budget
db.department.find({ "budget": null });

// Find all departments that have a budget
db.department.find({ "budget": { $not: { $eq: null } } });

// Find all departments that have no key name in their description
db.department.find({ "name": { $exists: false } });

// Find all departments that have key "name" in their description
db.department.find({ "name": { $exists: true } });

// Find all departments that have no code of a course
db.department.find({ "courses.code": { $exists: false } });
db.department.find({ "courses.code": { $not: { $exists: false } } });

// Create a cursor and display all documents in a cursor
var cursor = db.department.find({});
cursor;

var cursor = db.department.find({});
while (cursor.hasNext()) {
    print(tojson(cursor.next()));
}

var cursor = db.department.find({});
cursor.forEach(printjson);


// Use a cursor to list names and budgets of all departments whose budget is greater than 1000

var cdept = db.department.find({})

cdept.forEach(function (x) {
    if (x.budget > 1000) {
        print(x.name, x.budget)
    }
});

// Saving the results in an array

var cursor = db.department.find({});
var CursorArray = cursor.toArray();
// printjson(CursorArray);
var documents = CursorArray[2];
printjson(CursorArray);

//          ~Data Manipulation(DML)~
// Remove all documents from a collection
db.department.remove({});

// Remove all departments whose code is SCIT
db.department.remove({ "code": "SCIT" });
// Remove all departments whose name is School of Physics and whose code is SOPH
db.department.remove({ "name:": "School of Physics", "code": "SOPH" });
// Drop a collection
db.department.drop();

// Replace SCIT department with a new document
db.department.update({ "code": "SCIT" }, { "code": "SCSE", "budget": "30000" });

// Increment budget of SOPH department by 100000
db.department.update({ "code": "SOPH" }, { $inc: { "budget": 500 } });

// Change a budget of SOPH department to 5000000
db.department.update({ "code": "SOPH" }, { $set: { "budget": 500000 } });

// Multiply a budget of SCIT department by 2
db.department.update({ "code": "SOPH" }, { $mul: { "budget": 500000 } });

// Rename a key budget into large budget
db.department.update({ "code": "SOPH" }, { $rename: { "budget": "large budget" } });

// Remove a large budget pair
db.department.update({ "code": "SOPH" }, { $unset: { "large budget": null } });

// Add a medium budget pair
db.department.update({ "code": "SCIT" }, { $set: { "medium budget": 1000000 } });

// Create a last update pair with the current date
db.department.update({ "code": "SOPH" }, { $set: { "current_date": null } });
db.department.update({ "code": "SOPH" }, { $currentDate: { "current_date": true } });

// Change credits of a course with a code CSCI835 to 12
db.department.update({ "courses.code": "CSCI835" }, { $set: { "courses.0.credits": 12 } });

// Delete a course with a code CSIT321
db.department.update({ "courses.code": "CSIT321" }, { $pull: { "courses": { "code": "CSIT321" } } });

// Delete the second course from an array of courses
db.department.update({ "courses.1.code": { $exists: true } }, { $unset: { "courses.1.code": null } });
db.department.update({ "courses.code": null }, { $pull: { "courses": { "code": null } } });

// Insert a new course into an array courses
db.department.update({ "code": "SCIT" },
    {
        $push: {
            "courses": {
                "code": "MAG101", "title": "Magnetism",
                "credits": 6
            }
        }
    });

// Update the first selected element in an array courses

db.department.update({ "courses.code": "MAG101" }, { $set: { "courses.$.code": "MAG103" } });



//      **Aggregations**

/**
 * $project: Extracts the components of a documents to be placed in an output document (similar to SELECT clause)
 * $match: Filters the documents to be processed, similar to find() (and similar to WHERE clause)
 * $unwind: Expands (unnest) an array, generating one output document for each array entry
 * $group: Groups documents by a specified key (GROUP BY clause)
 * $sort: Sorts documents (ORDER BY clause)
 * $out: Saves the results from a pipeline to a collection
 * $count: Counts the total number of documents in a pipeline
-
 */
// $project extracts components of subdocuments, rename components, and performs operations on components
// "$keyname" syntax is used to refer to a value associated with a key "keyname" in the aggregation framework

// Select a name of each department and concatenate it with its code
db.department.aggregate([
  { $project: { "Name and code": { $concat: ["$name", "-", "$code"] } } },
]);


// Select name of each department, skip document identifier
db.department.aggregate([{ $project: { "name": 1, "_id": 0 } }]);
// db.department.aggregate([{ $project: { "name": 1, "_id": 0 }},{$limit:2}]);

// Select name of each department and rename name component
db.department.aggregate([{ $project: { "Department Name": "$name" } }]);

// Find the departments with budget > 10000

db.department.aggregate([{ $match: { "budget": { $gt: 10000 } } }]);

// Find the names and codes of departments with budget > 10000
db.department.aggregate([{ $match: { "budget": { $gt: 10000 } } }, { $project: { "name": 1, "code": 1, "_id": 0 } }]);

// Find the first 2 documents
db.department.aggregate([{ $limit: 2 }]);

// Find the first document with budget > 1000
db.department.aggregate([{ $match: { "budget": { "$gt": 10000 } } }, { $limit: 1 }]);

// List all documents in a collection except the first two
db.department.aggregate([{ $skip: 2 }]);

// List all documents with a budget greater than 10000 except the first one
db.department.aggregate([{ $match: { "budget": { "$gt": 10000 } } }, { $skip: 1 }]);

// For each department and for each course offered by a department create a separate document
db.department.aggregate([{ $unwind: "$courses" }]);


db.department.aggregate([{ $match: { "name": "School of Astronomy" } }, { $unwind: "$courses" }]);

//      ~~EXAMPLE~~

// {
//     "_id" : ObjectId("5f8f812cbe85d748c2b8b6be"),
//     "name" : "School of Astronomy",
//     "courses" : [
//             {
//                     "code" : "SOA101",
//                     "title" : "Astronomy for Kids",
//                     "credits" : 3
//             },
//             {
//                     "code" : "SOA201",
//                     "title" : "Black Holes",
//                     "credits" : 6
//             },
//             {
//                     "code" : "SOA301",
//                     "title" : "Dark Matter",
//                     "credits" : 12
//             }
//     ]
// }


// > db.department.aggregate([{$match:{"name":"School of Astronomy"}}, {$unwind:"$courses"} ]).pretty();
// {
//         "_id" : ObjectId("5f8f812cbe85d748c2b8b6be"),
//         "name" : "School of Astronomy",
//         "code" : "SOA",
//         "total_staff_number" : 5,
//         "budget" : 10000,
//         "address" : {
//                 "street" : "Franz Josef Str",
//                 "bldg" : 4,
//                 "city" : "Vienna",
//                 "country" : "Austria"
//         },
//         "courses" : {
//                 "code" : "SOA101",
//                 "title" : "Astronomy for Kids",
//                 "credits" : 3
//         }
// }
// {
//         "_id" : ObjectId("5f8f812cbe85d748c2b8b6be"),
//         "name" : "School of Astronomy",
//         "code" : "SOA",
//         "total_staff_number" : 5,
//         "budget" : 10000,
//         "address" : {
//                 "street" : "Franz Josef Str",
//                 "bldg" : 4,
//                 "city" : "Vienna",
//                 "country" : "Austria"
//         },
//         "courses" : {
//                 "code" : "SOA201",
//                 "title" : "Black Holes",
//                 "credits" : 6
//         }
// }
// {
//         "_id" : ObjectId("5f8f812cbe85d748c2b8b6be"),
//         "name" : "School of Astronomy",
//         "code" : "SOA",
//         "total_staff_number" : 5,
//         "budget" : 10000,
//         "address" : {
//                 "street" : "Franz Josef Str",
//                 "bldg" : 4,
//                 "city" : "Vienna",
//                 "country" : "Austria"
//         },
//         "courses" : {
//                 "code" : "SOA301",
//                 "title" : "Dark Matter",
//                 "credits" : 12
//         }
// }


// For each department and for each course offered by a department create a separate document, list only the courses


db.department.aggregate([{ $unwind: "$courses" }, { $project: { "courses": 1, "_id": 0 } }]);


// Use aggregation framework and $unwind operation to list the codes of all courses
db.department.aggregate([{ $unwind: "$courses" }, { $project: { "code": "$courses.code", "_id": 0 } }]);

// Use aggregation framework and $unwind operation to find all courses with 12 credits
db.department.aggregate([{ $unwind: "$courses" }, { $project: { "courses": 1, "_id": 0 } }, { $match: { "courses.credits": 12 } }]);

// List non-distinct values of total_staff_number
db.department.aggregate([{ $project: { "total_staff_number": 1, "_id": 0 } }]);

// Group the documents by total_staff_number and list the distinct values of total_staff_number
db.department.aggregate([{ $group: { "_id": "$total_staff_number" } }]);


// Perform groupings as above and rename _id to total_staff_number
db.department.aggregate([{ $group: { "_id": "$total_staff_number" } },
{ $project: { "total_staff_number": "$_id", "_id": 0 } }]);

// Find the total number of distinct values of total_staff_number
db.department.aggregate([{ $group: { "_id": "$total_staff_number" } }, { $count: "Total distinct values" }]);

// Find the total number of distinct values of total_staff_number
db.department.distinct("total_staff_number").length;

// Group the documents by total_staff_number and by budget
db.department.aggregate([{ $group: { "_id": { "total_staff_number": "$total_staff_number", "budget": "$budget" } } }]);

// Group the documents by total_staff_number and count the total number of departments in each group
db.department.aggregate([{ $group: { "_id": "$total_staff_number", "total_departments": { $sum: 1 } } }])

// Group the documents by total_staff_number and by budget and perform summation of budgets in each group
db.department.aggregate([{ $group: { "_id": { "total_staff_number": "$total_staff_number", "budget": "$budget" } } }])

// Group the documents by total_staff_number and find the largest budget in each group
db.department.aggregate([{
    $group: {
        "_id": "$total_staff_number",
        "largest budget": { $max: "$budget" }
    }
}]);

// Group the documents by total_staff_number and find the smallest budget in each group
db.department.aggregate([{
    $group: {
        "_id": "$total_staff_number",
        "smallest budget": { $min: "$budget" }
    }
}]);

// Group the documents by total_staff_number and find an average budget in each group
db.department.aggregate([{
    $group: {
        "_id": "$total_staff_number",
        "largest budget": { $avg: "$budget" }
    }
}]);


// Other operators like $first, $last are useful when sorting is applied
// What about application of aggregation operation on entire collection of
// documents ?
// Then, (like in SQL) we assume that a collection is a single group
// Count the total number of departments in a collection

db.department.aggregate([{
    $group: {
        "_id": null,
        "total departments": { $sum: 1 }
    }
}]);


// Find the total and average budget in a collection
db.department.aggregate([{
    $group: {
        "_id": null,
        "total budget": { $sum: "$budget" },
        "average budget": { $avg: "$budget" }
    }
}]);

// Display the names and budgets of departments sorted in ascending order by budget
db.department.aggregate([{ $project: { "name": 1, "budget": 1, "_id": 0 } }, { $sort: { "budget": 1 } }]);

// Display a name of a department with the largest budget, display a name of department and its budget
db.department.aggregate([{
    $project: { "name": 1, "budget": 1, "_id": 0 }
},
{ $sort: { "budget": -1 } },
{ $limit: 1 }]);


// Group the documents by total_staff_number, count the total
// number of departments in each group display the results sorted in the
// descending order of the total number of departments

db.department.aggregate([{
    $group: {
        "_id": "$total_staff_number",
        "total departments": { $sum: 1 }
    }
},
{ $sort: { "total departments": -1 } }]);

// Group the documents by total_staff_number, count the total
// number of departments in each group display the results sorted in the
// descending order of the total number of departments and display only
// groups where total number of departments is greater than 1

db.department.aggregate([{
    $group: {
        "_id": "$total_staff_number",
        "total departments": { $sum: 1 }
    }
},
{ $sort: { "total departments": -1 } },
{ $match: { "total departments": { $gt: 1 } } }]);



// $out
// Operation $out saves the results of processing in a collection
// Find the total number of distinct values of total_staff_number


db.department.aggregate([{
    $group: { "_id": "$total_staff_number" }
},
{ $out: "total_distinct" }]);
db.total_distinct.count()
db.total_distinct.drop()


// Operation $count counts the total number of documents in a pipeline
// List the codes of all courses

db.department.aggregate([{ $unwind: "$courses" },
{ $project: { "code": "$courses.code", "_id": 0 } },
{ $count: "Total number of courses" }]);

// Find the total number of distinct values of total_staff_number
db.department.aggregate([{ $group: { "_id": "$total_staff_number" } },
{ $count: "Total distinct values" }])
