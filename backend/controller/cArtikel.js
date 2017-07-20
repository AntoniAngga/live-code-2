const Artikel = require('../model/Artikel');

let artikel_get = (req,res) =>{
  Artikel.find({}, (err, artikels) => {
    if (err) {
      res.status(501).send('Something Error with Artikel_get',err)
    } else {
      res.status(200).send(artikels)
    }
  });
}

let artikel_getbyid = (req,res) =>{
  let _id = req.params.id
  Artikel.findById(_id, (err,artikel)=>{
    if (err) {
      res.status(501).send('Something Error with artikel_getbyid', err);
    } else {
      res.status(200).send(artikel);
    }
  })
}

let artikel_post = (req,res) => {
  let data = req.body
  
  let newArtikelpost = Artikel({
    title: data.title,
    content: data.content,
    category: data.category,
    author: data.author
  })
  
  newArtikelpost.save((err,result)=>{
    if (err) {
      res.status(501).send('Something Error with artikel_post', err);
    } else {
      res.status(200).send(result)
    }
  })
}

let artikel_put = (req,res) =>{
  let data = req.body
  let _id = req.params.id
  
  Artikel.findById(_id, (err,artikel) => {
    if (err) {
      res.status(501).send('Something Wrong with your Artikel_put', err);
    } else {
      artikel.title   = data.title,
      artikel.content = data.content,
      artikel.category= data.category,
      artikel.author  = data.author
      
      artikel.save( (err,result) => {
        if (err) {
          res.status(501).send('Something Wrong with your Artikel_put', err);
        } else {
          res.status(200).send(result)
        }
      })
    }
  })
}

let artikel_getauthor = (req,res) =>{
  let author_find = req.params.author;
  
  Artikel.find({author:author_find},(err,result) => {
    if (err) {
      res.status(501).send('Something Wrong with your artikel_getauthor', err)
    } else {
      res.status(200).send(result);
    }
  })
}

let artikel_getcategory = (req,res) => {
  let category_find = req.params.category;
  
  Artikel.find({category:category_find}, (err,result) => {
    if (err) {
      res.status(501).send('Something Wrong with your artikel_getcategory', err)
    } else {
      res.status(200).send(result)
    }
  })
}

let artikel_delete = (req,res) => {
  let _id = req.params.id;
  
  Artikel.findById(_id, (err,artikel) => {
    if(err){
      res.status(501).send('Something wrong with your Delete',err);
    } else {
      artikel.remove((err)=> {
        if(err){
          res.status(501).send('Something Wrong with your Delete', err);
        } else {
          res.send('1 Document Deleted');
        }
      })
    }
  })
}

module.exports = {
  artikel_get,
  artikel_getbyid,
  artikel_post,
  artikel_put,
  artikel_getauthor,
  artikel_getcategory,
  artikel_delete
};