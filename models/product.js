/* auction products */

var Mongoose = require('mongoose');

var productSchema = new Mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    minBid: {
        type: Number
    },
    created: {
        type: Date,
        default: Date.now
    },
    currentBidLeader: {
        name: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        bid: {
            type: Number
        }
    },
    previousBids: [{
        name: {
            type: String,
            trim: true
        },
        email: {
            type: String,
            trim: true
        },
        bid: {
            type: Number
        }
    }],
    images: [{
        type: String,
        trim: true
    }]
});
