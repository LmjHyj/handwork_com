export default async function (ctx, next) {
  await ctx.render('ucenter', {
    title : '用户中心',
  })
}

