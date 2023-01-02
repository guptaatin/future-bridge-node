module.exports = (sequelize, Sequelize) => {
    const demo = sequelize.define("demo", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        published: {
            type: Sequelize.BOOLEAN
        },
    })
    return demo
}