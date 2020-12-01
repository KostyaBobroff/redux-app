const express = require('express');
const  cors = require("cors");
const app = express();
const products = require('./products')

app.use(cors());

app.get('/user', (req, res) => {
//     res.headers[ 'Content-Type'] = 'application/json'
    res.json({
        name: 'Редис',
        email: 'fake@fake.com',
        img: 'https://sun1-20.userapi.com/impg/s5AVAvBEO2oG_faKX6-Rva_Uw56qp6Oi3iY0lw/MFbdZU4XqTI.jpg?size=100x0&quality=96&crop=1,161,957,957&sign=8ac1a094e0c3e765e9a91300bd196c15&ava=1'
    })
});

// const products = [
//    {
//          id: 1,
//         title: 'Нож',
//         description: 'Это нож',
//         price: 34.5,
//         img: 'https://sun1-20.userapi.com/impg/s5AVAvBEO2oG_faKX6-Rva_Uw56qp6Oi3iY0lw/MFbdZU4XqTI.jpg?size=100x0&quality=96&crop=1,161,957,957&sign=8ac1a094e0c3e765e9a91300bd196c15&ava=1'
//    },
//    {
//             id: 2,
//            title: 'Мош',
//            description: 'Это нож',
//            price: 34.5,
//            img: 'https://sun1-20.userapi.com/impg/s5AVAvBEO2oG_faKX6-Rva_Uw56qp6Oi3iY0lw/MFbdZU4XqTI.jpg?size=100x0&quality=96&crop=1,161,957,957&sign=8ac1a094e0c3e765e9a91300bd196c15&ava=1'
//       }
// ]

app.get('/products', (req, res) => {

//     res.headers[ 'Content-Type'] = 'application/json'
    res.json(products)
})

app.listen(3001, () => {
    console.log('server is starting...');
})