const jwt = require('jsonwebtoken');
const productModel = require('../../models/product_models/product.model');

var fs = require('fs-extra');
const { dirname } = require('path');
const appDir = dirname(require.main.filename);


const upload_files = (file, id) => {
    let file_name = parseInt(Math.random() * 1000) + id + file.name;
    // console.log(file_name);
    const path = appDir + "/public/uploads/posts/" + file_name;
    fs.move(file.path, path, function (err) {
        if (err) return console.error(err)
        // console.log("success!")
    })
    thumb_image_path = "uploads/posts/" + file_name;
    return thumb_image_path;
}

const controller = {
    all: async (req, res) => {
        // console.log('res from controler', res.cookie);
        const data = await productModel.find().populate([{ path: 'categories' }, { path: 'brand' }, { path: 'creator' }]);
        // console.log("from product model",data);
        return res.json(data)
    },
    singleData: async (req, res) => {
        // const id = req.params.id;
        // console.log('res from controler', req.params);
        const data = await productModel.findOne({ _id: req.params.id }).populate([{ path: 'categories' }, { path: 'brand' }, { path: 'creator' }, { path: 'supplier' }]);
        // console.log("from product model", data);
        return res.json(data)
    },
    create: async (req, res) => {
        const { atoken } = req.cookies
        const decoded = jwt.decode(atoken, '6fd286f7-708a-429b-b53a-2bc5272e0db6', algorithms = ['HS256']);
        var status = "";
        if ("status" in req.body) {
            status = true;
            // console.log(status);
        } else {
            status = false;
            // console.log(status);
        }
        // console.log("product creator body data", req.body);

        const { title, code, seo_title, price, discount, supplier, stock, category, brand, varient, crt_price, short_discription, discription } = req.body;

        let data = {
            title: title,
            product_number: code,
            categories: category,
            brand: brand,
            creator: decoded,
            discount: discount,
            stokes: stock,
            varient: varient,
            supplier: supplier,
            price: price,
            short_discription: short_discription,
            discription: discription,
            seo_title: seo_title,
            status: status,
            current_price: crt_price,
        };
        let product = {};
        try {
            product = await productModel.create(data);

            var image_path = "";
            var related_image = [];

            // console.log(req.files);

            if (req.files?.image && req.files?.image.size) {
                image_path = upload_files(req.files.image, product._id)
            }
            if (req.files?.rtd_image) {
                related_image = req.files.rtd_image.map((file) => upload_files(file, product._id));
            }

            product.image = image_path;
            product.related_images = related_image;
            product.save();

        } catch (error) {

            return res.status(500).json({ msg: "data uploading failed.", error: error })
        }
        return res.json(product);
    },
    update: async (req, res) => {
        // console.log(req.body);
        // return;
        const id = req.body.id;
        var status = "";
        if ("status" in req.body) {
            status = true;
        } else {
            status = false;
        }
        const { title, code, seo_title, price, discount, suppliers, stock, category, brands, varient, crt_price, short_discription, discription } = req.body;
        // return;
        let data = {
            title: title,
            product_number: code,
            categories: category,
            brand: brands,
            discount: discount,
            stokes: stock,
            varient: varient,
            supplier: suppliers,
            price: price,
            short_discription: short_discription,
            discription: discription,
            seo_title: seo_title,
            status: status,
            current_price: crt_price,
        };
        let product = {};
        
        try {
            
            console.log("product");
            // return;

            product = await productModel.findOneAndUpdate({ _id: id }, data);

            // console.log("product", product);
            // return;

            var image_path = product.image || "";
            var related_image = product.related_images || [];

            if (req.files?.image && req.files.image?.size) {
                image_path = upload_files(req.files.image, product._id)
            }
            if (req.files?.rtd_image && req.files?.rtd_image[0].size) {
                related_image = req.files.rtd_image.map((file) => upload_files(file, product._id));
            }

            product.image = image_path;
            product.related_images = related_image;
            product.save();

        } catch (error) {

            return res.status(500).json({ msg: "data uploading failed.", error: error })
        }
        return res.json(product);

    },
    delete: async (req, res) => {
        // console.log(  " from delete product","hello");
        const id = req.params.id;
        // console.log(id);
        const user = await productModel.findByIdAndDelete({ _id: id });
        // // console.log(user);
        return res.json(user);
    }

}
module.exports = controller;