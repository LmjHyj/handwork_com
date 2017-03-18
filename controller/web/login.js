export default async function (ctx, next) {
  await ctx.render('index', {
    title : '登陆'
  })
}

