const { default: mongoose } = require("mongoose");
const { db_url } = require("../../../../configs/db_config");
const productModel = require("../product.model");
const brandModel = require("../brand.model");
const categoryModel = require("../category.model");
const userModel = require("../user.model");

const get_user_id = async () => {
    let user = await userModel.findOne();
    return user._id;
}
const get_brand_id = async () => {
    let brand = await brandModel.find();
    return brand.map(i => i._id.toString());
}
const get_category_id = async () => {
    let category = await categoryModel.find();
    return category.map(i => i._id.toString());
}

const html = `<p>" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse cum ullam quasi </p> 
<br/>
<p>quaerat sed commodi quia, expedita itaque facere saepe natus illum quam accusamus ipsam. Voluptatem nostrum beatae vitae sed?</p>`

const products = async () => {
    return {
        title: "one of the best color combinition chopa.",
        product_number: "cb123#b34",
        categories: await get_category_id(),
        brand: await get_brand_id(),
        creator: await get_user_id(),
        discount: 15,
        stokes: 60,

        varient: "", //i don't undestrand this function

        date: "2023-11-3 ",
        price: "5999",
        short_discription: "Esse cum ullam quasi quaerat sed commodi quia, expedita itaque facere saepe natus illum quam accusamus ipsam.",
        discription: html,
        image: "assets/dashboard/images/products/04.png",
    }
};

    module.exports = () => mongoose.connect(db_url)
        .then(async () => {
            await productModel.deleteMany({})
            await productModel.insertMany( await products())

            console.log("product sedder complite")
        })