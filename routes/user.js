const {Router} = require('express');
const { userGet, userPost, userPut, userDelete, userPatch } = require('../controllers/userControllers');

const router = Router();

router.get('/:id',userGet);

router.post('/',userPost);

router.put('/:id',userPut);

router.delete('/',userDelete);

router.patch('/',userPatch);






module.exports = router;