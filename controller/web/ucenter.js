export default async function (ctx, next) {
  await ctx.render('index', {
    title : '用户中心'
  })
}

