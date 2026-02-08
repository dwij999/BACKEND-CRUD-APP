const Product = require("../models/product.model")

const getProducts = async (req, res) => {
     try {
          const product = await Product.find({});
          res.status(200).json(product);

     } catch (error) {
          res.status(500).json({ message: err.message })

     }

}


const getProductById = async (req, res) => {
     try {
          const { id } = req.params;
          const product = await Product.findById(id);
          res.status(200).json(product);

     } catch (error) {
          res.status(500).json({ message: err.message })

     }
}


const getProductByName = async (req, res) => {
     try {
          const { name } = req.params;
          const product = await Product.find({ name });
          res.status(200).json(product);

     } catch (error) {
          res.status(500).json({ message: err.message })

     }
}


const addData = async (req, res) => {
     // res.send("hello from Node api server Updated");
     // res.send(req.body);
     try {
          const product = await Product.create(req.body);
          res.status(200).json(product);
     } catch (err) {
          res.status(500).json({ message: err.message });
     }

}


const updateDataById = async (req, res) => {
     try {
          const { id } = req.params;
          const product = await Product.findByIdAndUpdate(id, req.body);

          if (!product) {
               res.status(401).json({ message: "Product not found" })
          }
          const updatedProduct = await Product.findById(id);

          res.status(200).json(updatedProduct);

     } catch (error) {
          res.status(500).json({ message: err.message })

     }
}


const deleteRecordById = async (req, res) => {
     try {
          const { id } = req.params;
          const product = await Product.findByIdAndDelete(id);

          if (!product) {
               res.status(401).json({ message: "Product not found" })
          }
          res.status(200).json({ message: "record deleted successfully" });

     } catch (error) {
          res.status(500).json({ message: err.message })

     }
}


module.exports = {
     getProducts, getProductById, getProductByName, addData, updateDataById, deleteRecordById
}