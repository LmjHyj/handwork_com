export default async function (ctx, next) {
    await ctx.render('index', {
        title: '达人手工网-手工创作分享社区',
    })
}

