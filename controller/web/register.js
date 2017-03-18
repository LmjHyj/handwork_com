export default async function (ctx, next) {
  await ctx.render('register', {
    title : '注册'
  })
}

