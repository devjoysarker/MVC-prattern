

const  express = require('express');
const {  getAllstudents, showStudentForm, CreateStudent, gellSingleStudents, deleteStudent, showEditform, updateStudents } = require('../controller/studentController');
const path = require('path');
const multer = require('multer');
const router = express.Router();

// Multer config
const stroage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null,path.join(__dirname,'../assets/uploads/'))
    },
    filename : (req,file,cb) =>{
        cb(null, Date.now()+'-'+file.originalname)
    }
})
// Load Multer
const Studentmalter = multer({
    storage : stroage
}).single('photo');

//Studensts Routes
router.get('/', getAllstudents )
router.get('/create', showStudentForm);
router.post('/',Studentmalter,CreateStudent)
router.get('/:id', gellSingleStudents);
router.get('/delete/:id', deleteStudent)
router.get('/edit/:id', showEditform)
router.post('/edit/:id',Studentmalter , updateStudents)



// export route
module.exports = router