const User = require('../../model/index').User

export default async function (ctx, next) {
  const qs = ctx.query  
  User.create({name:qs.name,password:qs.password},(err,rs)=>{
    console.log(err,rs)
    // ctx.response.redirect('/ucenter')
  })
}

