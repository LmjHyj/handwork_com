export default async function (ctx, next) {
  console.log('register')

  await ctx.render('register', {
    title : '注册'
  })
}

