export default async function (ctx, next) {
  console.log(ctx.query,ctx,querystring)
  await ctx.render('ucenter', {
    title : '用户中心',
  })
}

