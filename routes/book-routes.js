const express = require("express");
const getAllBooks = require("../controllers/books-controller");
const addBook = require("../controllers/books-controller");
const getById=require("../controllers/books-controller");
const updateBook=require("../controllers/books-controller");
const deleteBook=require("../controllers/books-controller");
const router = express.Router();
const Book = require("../model/Book");
 
router.get("/",getAllBooks);
router.post("/",addBook);
 router.get("/:id",getById);
 router.put("/:id",updateBook);
router.delete("/:id",deleteBook);
module.exports = router;