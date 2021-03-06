const {selectArticles , selectArticleByID , updateArticle} = require('../models/articlesmod');

exports.getArticles = (req, res, next) => {
    const query = req.query
    return selectArticles(query).then(({articles, total_count}) => {
        res.status(200).send({ articles, total_count })
    }).catch(next)
}


exports.getArticleByID = (req, res, next) => {
    const {article_id} = req.params;
    return selectArticleByID(article_id).then(article => {
        res.status(200).send({article})
    }).catch(next)
}

exports.patchArticle = (req, res, next) => {
    const {article_id} = req.params;
    const {inc_votes} = req.body;
    return updateArticle(article_id , inc_votes).then(article => {
        res.status(200).send({article})
    }).catch(next)
}