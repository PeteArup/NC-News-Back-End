const connection = require("../db/connection");

exports.selectArticles = () => {
  return connection('articles')
    .leftJoin('comments', 'comments.article_id', 'articles.article_id')
    .count({comment_count : 'comments.comment_id'})
    .groupBy('articles.article_id')
    .select('articles.*')
}


exports.selectArticleByID = article_id => {
  const id = +article_id  

  return connection('articles')
    .leftJoin('comments', 'comments.article_id', 'articles.article_id')
    .count({comment_count : 'comments.comment_id'})
    .groupBy('articles.article_id')
    .select('articles.*')
    .where('articles.article_id','=',id)
    .then(article => {
      if(!article.length){
        
        return Promise.reject({
          status : 404,
          msg : `Article with ID '${article_id}' does not exist!`
        })
      } else {
        return article[0]
      }
    })
  }

exports.updateArticle = (inputID, votesUpdate) => {
  const id = inputID
  console.log("ID",id)
  console.log("votes",votesUpdate)



  return connection('articles')
    .update({vote : vote+votesUpdate})
    .where('articles.article_id', '=', id)
    .leftJoin('comments', 'comments.article_id', 'articles.article_id')
    .count({comment_count : 'comments.comment_id'})
    .groupBy('articles.article_id')
    .then(article => {
      console.log(article)
    })
    

  
}