const apiRouter = require("express").Router();
const topicsRouter = require('./topicsrouter');
const articlesRouter = require('./articlesrouter');
const usersRouter = require('./usersrouter');
const commentsRouter = require('./commentsrouter');
const {getEndpoints} = require('../controllers/apicon')

apiRouter.use("/topics", topicsRouter);

apiRouter.use("/articles", articlesRouter);

apiRouter.use("/users" , usersRouter);

apiRouter.use('/comments', commentsRouter);

apiRouter.route('/').get(getEndpoints)


module.exports = apiRouter;