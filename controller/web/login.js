export default async function (ctx, next) {
  
  await ctx.render('login', {
    title : '登陆'
  })
}

