const { Post } = require('../models');

const postData = [
    {
        title: "Tech Blog is alive!",
        post_content: "Woohoo",
        user_id: 3
    },
    {
        title: "More news about coding",
        post_content: "News",
        user_id: 1
    },
    {
        title: "I like to code",
        post_content: "coding is cool",
        user_id: 2

    },
    {
        title: "Coding things",
        post_content: "Coding news",
        user_id: 5
    },
    {
        title: "News",
        post_content: "Content content",
        user_id: 4
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;