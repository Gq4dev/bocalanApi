
const router = require('express-promise-router')()

const { index, newUser, getUser, replaceUser, deleteUser, getUserDogs, newUserDog } = require('../controllers/userController')


router.get('/', index)
router.post('/', newUser)

router.get('/:userId', getUser)
router.put('/:userId', replaceUser)
router.delete('/:userId', deleteUser)

router.get('/:userId/dogs', getUserDogs)
router.post('/:userId/dogs', newUserDog)
module.exports = router