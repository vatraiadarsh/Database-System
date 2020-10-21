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
{ $and: [{ $or: [{ "key1": "value1" }, { "key2": "value2" }] }, { "key3"= "value3" }] }

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
db.department.find({"courses.credits":6,"courses.title":"Quantum Mechanics"});