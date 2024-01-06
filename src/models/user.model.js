module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        id: {
            type: Sequelize.BIGINT,
            autoIncrement: true,
            primaryKey: true
        },
        email: {
            type: Sequelize.STRING(255),
            unique: true,
            allowNull: false
        },
        is_email_verified: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        first_name: {
            type: Sequelize.STRING(255)
        },
        last_name: {
            type: Sequelize.STRING(255)
        },
        signup_method: {
            type: Sequelize.STRING(100)
        },
        subscription: {
            type: Sequelize.STRING(100)
        },
        password: {
            type: Sequelize.STRING(255),
            allowNull: false
        },
        role: {
            type: Sequelize.STRING(100)
        },
        status: {
            type: Sequelize.STRING(100)
        },
        createdAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        },
        updatedAt: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW
        }
    });

    return User;
};