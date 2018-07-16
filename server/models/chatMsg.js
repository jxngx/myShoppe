// models/chatMsg.js
var myDatabase = require('../controllers/database');
var sequelize = myDatabase.sequelize;
var Sequelize = myDatabase.Sequelize;

const ChatMsg = sequelize.define('ChatMsg', {
    msg_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    cu_id: {
        type: Sequelize.INTEGER,
        references: {
            model: 'ConvUsers',
            key: 'cu_id'
        }
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '',
        trim: true
    },
    timestamp: {
        type: Sequelize.STRING,
        allowNull: true,
    }
});



// force: true will drop the table if it already exists
ChatMsg.sync({ force: false, logging: console.log}).then(() => {
    // Table created
    console.log("ChatMsg table synced");
    ChatMsg.upsert({
        msg_id: '1',
        cu_id: '1',
        message: 'Hello Aaron',
        timestamp: '00:00 AM'
    })
    ChatMsg.upsert({
        msg_id: '2',
        cu_id: '2',
        message: 'Hello Albert',
        timestamp: '00:01 AM'
    })
    ChatMsg.upsert({
        msg_id: '3',
        cu_id: '3',
        message: 'Waddup Aaron',
        timestamp: '01:00 AM'
    })
    ChatMsg.upsert({
        msg_id: '4',
        cu_id: '4',
        message: 'Waddup Albert',
        timestamp: '01:01 AM'
    })
});

module.exports = sequelize.model('ChatMsg', ChatMsg);
