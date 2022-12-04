const Student = require("../models/studentModel")
/**
 * 
 * @desc {*} GET all Student data
 * @name {*} GET/student/ create
 * @access public
 */
 const  getAllstudents = async (req,res) => {
    let Students = await Student.find();
    res.render('index',{ Students })
}

/**
 * 
 * @desc {*} Create all Student data
 * @name {*} GET/student/ create
 * @access public
 */
 const  showStudentForm = (req,res) => {
    res.render('create')
}
/**
 * 
 * @desc {*} Create all Student data
 * @name {*} GET/student/ create
 * @access public
 */
 const  CreateStudent = async (req,res) => {
    await Student.create({
        ...req.body,
        photo : req.file.filename
    });

    res.redirect('/studentes')
}
/**
 * 
 * @desc {*} Get Single Students
 * @name {*} GET/student/ create
 * @access public
 */
 const  gellSingleStudents = async (req,res) => {
    let id = req.params.id
   let students =  await Student.findById(id);

    res.render('show',{ students })
}
/**
 * 
 * @desc {*} Get show Edit Students
 * @name {*} GET/student/ create
 * @access public
 */
 const showEditform = async (req,res) => {
    let id = req.params.id
    let Studentes = await Student.findById(id)
    res.render('edit', { Studentes })
}
/**
 * 
 * @desc {*} Get show Edit Students
 * @name {*} GET/student/ create
 * @access public
 */
 const updateStudents = async (req,res) => {
    let id = req.params.id
    let filename = req.body.old_photo
    if (req.file.filename) {
        filename = req.file.filename
    }
     await Student.findByIdAndUpdate(id,{
        ...req.body,
        photo : filename
     },{
        new: true
     })
    res.redirect('/studentes')
}

/**
 * 
 * @desc {*} Get Delete Students
 * @name {*} GET/student/ create
 * @access public
 */
 const deleteStudent = async (req,res) => {
    let id = req.params.id
  await  Student.findByIdAndDelete(id)

    res.redirect('/studentes')
}




// Export moduel
module.exports = {
    getAllstudents,
    showStudentForm,
    CreateStudent,
    gellSingleStudents,
    deleteStudent,
    showEditform,
    updateStudents
}