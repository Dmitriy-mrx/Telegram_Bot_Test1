const { Telegraf } = require('telegraf')
require('dotenv').config()
const Markup = require('telegraf/markup')
const AnimationUrl1 = 'https://i2.wp.com/athleticbody.ru/wp-content/uploads/2017/12/prisedaniya-s-gantelyami.gif'
const AnimationUrl2 = 'https://thumbs.gfycat.com/ExcitableOblongFluke-small.gif'
const AnimationUrl3 = 'https://lh3.googleusercontent.com/proxy/0TrvR5oPtZoszURBHIsxehYJo75iq3SgIiMsoVziCy7A_q8VvDVqzJ0Kj3UclGHg6Sj-ncBIh-uCGl5KRBbdssYBwL4JDbn93NQK'
const AnimationUrl4 = 'https://i0.wp.com/vashsport.com/wp-content/uploads/tyaga-ganteley-v-naklone-arni.gif'
const AnimationUrl5 = 'https://yourfitnesslife.ru/wp-content/uploads/2017/03/1lezpl.gif'
const AnimationUrl6 = 'https://goodlooker.ru/wp-content/uploads/2020/03/Sgibanie_ruk.gif'


const bot = new Telegraf(process.env.BOT_TOKEN)

bot.start((ctx) => ctx.reply(` 
Привет ${ctx.message.from.first_name}!
Я Gym_bot который в любой момент подскажет тебе -
что полезного и вкусного тебе покушать на завтрак,обед или ужин.
Покажу тебе прокачку самых важных групп мышц,
при помощи команды "/help" ты сможешь посмотреть как правильно выполнять некоторые упражнения
`,
  Markup.keyboard([
    ['Завтрак', 'Обед', 'Ужин'],

    ['Тренировки'],
    ['/help']])
    .resize()
    .extra()
)
)

bot.help((ctx) => ctx.reply(`${ctx.message.from.first_name},
Вот все мои  доступные команды:

Вернуться в главное меню - /start

Упражнение для спины - /back
Упражнение для груди - /chest
Упражнение для ног - /legs
Упражнение для плечь - /shoulders
Упражнение для рук - /hands
Упражнение для пресса - /press

`))

bot.command('legs', (ctx) => ctx.replyWithAnimation(AnimationUrl1))
bot.command('shoulders', (ctx) => ctx.replyWithAnimation(AnimationUrl2))
bot.command('chest', (ctx) => ctx.replyWithAnimation(AnimationUrl3))
bot.command('back', (ctx) => ctx.replyWithAnimation(AnimationUrl4))
bot.command('press', (ctx) => ctx.replyWithAnimation(AnimationUrl5))
bot.command('hands', (ctx) => ctx.replyWithAnimation(AnimationUrl6))


bot.hears('Завтрак', async (ctx) => {
  await ctx.replyWithPhoto('https://images.immediate.co.uk/production/volatile/sites/2/2018/08/Peanut-butter-pancakes-78d1366.jpg?quality=90&resize=768%2C574')
  const breakfast = [`
  Вот примеры завтраков:
  овсянка с малиной, тост с сыром и маслом, черный кофе,
  лаваш с курицей и помидором, коктейль из ягод со злаками и йогуртом,
  творожная запеканка с яблоком, зеленый чай,
  паровой омлет с укропом и фетой, кофе с корицей,
  гречка с овощами и тефтелей, черный чай с лимоном.
  `]
  ctx.reply(breakfast[0])

})



bot.hears('Обед', async (ctx) => {
  await ctx.replyWithPhoto('https://images.immediate.co.uk/production/volatile/sites/30/2020/08/quick-chicken-and-hummus-bowl-220e449.jpg?quality=90&resize=960,872')
  const lunch = [`
    Вот примеры обедов:
    Небольшая порция супа, борща, щей, ухи или любого бульона;
    Салат из свежих овощей. Добавляйте побольше листовой зелени.
    Можно добавлять немного сыра (адыгейского, моцареллы и другие ферментированные разновидности);
    Хлеб (цельнозерновой с отрубями), макаронные изделия из твердых сортов пшеницы;
    Белок на выбор: бобовые, мясо или рыба. 
    Для вегетарианского меню рекомендованы сочетания риса с бобовыми, либо бобовые со свежими овощами.
   `]
  ctx.reply(lunch[0])
})
bot.hears('Ужин', async (ctx) => {
  await ctx.replyWithPhoto('https://images.immediate.co.uk/production/volatile/sites/30/2020/08/healthy-dinner-collection-main-image-d11eaf7.jpg?quality=90&resize=960,872')
  const dinner = [`
Вот примеры ужина:
Нежирная рыба или морепродукты. Рыба и морепродукты – это идеальный вариант ужина для похудения. 
Нежирная курица или индейка. 
Творог. 
Овощной салат с нежирным сыром. 
Тушеные или отварные овощи. 
Вареные яйца или омлет. 
Кисломолочные продукты с несладким фруктом.
  `]
  ctx.reply(dinner[0])
})
bot.hears('Тренировки', (ctx) => {
  ctx.reply(`Какую тренировку вы хотите?
 
  `, Markup.keyboard([
    ['Плечи', 'Грудь', 'Спина'],
    ['Руки', 'Пресс', 'Ноги'],
    ['/help']
  ])
    .resize()
    .extra())

})

bot.hears('Плечи', (ctx) => {
  ctx.replyWithPhoto('https://i2.wp.com/ferrum-body.ru/wp-content/uploads/2017/03/3joKl56.jpg')
})
bot.hears('Грудь', (ctx) => {
  ctx.replyWithPhoto('https://i.pinimg.com/originals/f3/9a/3b/f39a3ba370308b00281c5d4932f3418b.jpg')
})
bot.hears('Спина', (ctx) => {
  ctx.replyWithPhoto('https://fitomaniya.ru/wp-content/uploads/2018/09/90e54cc9f8d8adeb1fdd1b3281e4d02d-shoulder-workout-bodybuilding-bodybuilding-training-300x241.jpg')
})


bot.hears('Руки', (ctx) => {
  ctx.reply(`Что именно?
 
  `, Markup.keyboard([
    ['Бицепс', 'Трицепс', 'Предплечье'],
    ['/help']
  ])
    .resize()
    .extra())

})



bot.hears('Бицепс', (ctx) => {
  ctx.replyWithPhoto('https://sun9-45.userapi.com/c852032/v852032765/1b2c6/G5wVa0tJflA.jpg')
})
bot.hears('Трицепс', (ctx) => {
  ctx.replyWithPhoto('https://avatars.mds.yandex.net/get-zen_doc/1538903/pub_5e10b63fddfef600b093897d_5e10b9ca6d29c100af7907a2/scale_1200')
})
bot.hears('Предплечье', (ctx) => {
  ctx.replyWithPhoto('https://builderbody.ru/wp-content/uploads/2018/01/3-5.jpg')
})


bot.hears('Пресс', (ctx) => {
  ctx.replyWithPhoto('https://cross.expert/wp-content/uploads/2017/09/programma-trenirovok-na-press-v-trenazhernom-zale-komplex.jpg')
})
bot.hears('Ноги', (ctx) => {
  ctx.replyWithPhoto('https://ferrum-body.ru/wp-content/uploads/2017/03/3oPuBYC.jpg')
})
bot.launch()
console.log('start');


