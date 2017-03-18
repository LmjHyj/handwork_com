export default async function (ctx, next) {
  console.log('index')

  await ctx.render('index', {
    title : '达人手工网-手工创作分享社区'
  })
}

