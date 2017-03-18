export default async function (ctx, next) {
  console.log('index')

  await ctx.render('index', {
    title : '用户中心'
  })
}

