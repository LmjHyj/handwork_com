const User = require('../../model/index').User

export default async function (ctx, next) {
  const qs = ctx.query  

  User.find({ name: qs.name },(err,docs) => {
    console.log('docs:',docs)
  });
}

