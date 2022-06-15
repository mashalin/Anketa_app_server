const Router = require('express');
const router = new Router;
const userRouter = require('./userRouter');
const itemRouter = require('./itemRouter');
const reportRouter = require('./reportRouter');
const resultRouter = require('./resultRouter');
const select_nameRouter = require('./select_nameRouter');
const cathedraRouter = require('./cathedraRouter');
const massivRouter = require('./massivRouter');
const massivLocalRouter = require('./massivLocalRouter');
const reportLocalRouter = require('./reportLocalRouter');
const facultyRouter = require('./facultyRouter');
const cath_typeRouter = require('./cath_typeRouter');
const cathResultRouter = require('./cathResultRouter');
const cathReportRouter = require('./cathReportRouter');
const colvoSelectsRouter = require('./colvoSelectsRouter');
const ratingRouter = require('./ratingRouter');
const ratingTablesRouter = require('./ratingTablesRouter');
const datesRouter = require('./datesRouter');
const bookRouter = require('./bookRouter');
const authorsRouter = require('./authorsRouter');
const bookReportRouter = require('./bookReportRouter');

router.use('/user', userRouter);
router.use('/item', itemRouter);
router.use('/report', reportRouter);
router.use('/result', resultRouter);
router.use('/select_name', select_nameRouter);
router.use('/cathedra', cathedraRouter);
router.use('/massiv', massivRouter);
router.use('/massivLocal', massivLocalRouter);
router.use('/reportLocal', reportLocalRouter);
router.use('/faculty', facultyRouter);
router.use('/cath_type', cath_typeRouter);
router.use('/cathResult', cathResultRouter);
router.use('/cathReport', cathReportRouter);
router.use('/colvo', colvoSelectsRouter);
router.use('/rating', ratingRouter);
router.use('/ratingTables', ratingTablesRouter);
router.use('/dates', datesRouter);
router.use('/books', bookRouter);
router.use('/authors', authorsRouter);
router.use('/book_report', bookReportRouter);

module.exports = router;