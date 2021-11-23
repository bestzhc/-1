const list = [{
    nick: 'allen',
    phone: 32543678765,
    name: '孙悟空',
    subject: '语文',
    job: 'hero',
    year: 23,
    updateTime: '2021-11-7'
}, {
    nick: 'afadawd',
    phone: 34553423,
    name: '哪吒',
    subject: '数学',
    job: '哎呦喂',
    year: 232,
    updateTime: '2020-11-10'
}, {
    nick: '阿迪王',
    phone: 134845343,
    name: '故人归',
    subject: '科学',
    job: '安慰奖',
    year: 1,
    updateTime: '2077-11-8'
}, {
    nick: '安东卫',
    phone: 5434543,
    name: '爱搭我的车吧 ',
    subject: '音乐',
    job: '儿科',
    year: 66,
    updateTime: '2021-1-7'
}]

module.exports = [{
    url: '/vue-admin-template/test/list',
    type: 'get',
    response: config => {
        return {
            code: 20000,
            data: {
                total: list.length,
                items: list
            }
        }
    }
}]
console.log();