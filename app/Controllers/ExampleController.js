var Example = require('../Models/Example');

class ExampleController {
    // List Semua Data
    static async getAll(req, res) {
        try {
            const example = await Example.find();
            res.status(200).json(example);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // Store Data
    static async store(req, res) {
        const example = new Example(req.body);
        try {
            const newExample = await Example.create(example);
            res.status(201).json(newExample);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    // Detail Data / Show one data
    static async show(req, res) {
        try {
            const example = await Example.findById(req.params.id);
            res.status(200).json(example);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    // Update Data
    static async update(req, res) {
        const oldExample = await Example.findById(req.params.id);
        // res.status(200).json(oldExample);
        if (!oldExample) {
            res.status(404).json({ message: 'Data Not Found' });
        }
        const example = new Example(req.body);
        try {
            const updateExample = await Example.updateOne({ _id: req.params.id },
                {
                    $set: {
                        field1: example.field1 ? example.field1 : oldExample.field1,
                        field2: example.field2 ? example.field2 : oldExample.field2,
                        field3: example.field3 ? example.field3 : oldExample.field3,
                    }
                });
            res.status(200).json(updateExample);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    // Hapus Data
    static async delete(req, res) {
        const example = await Example.findById(req.params.id);
        if (!example) {
            res.status(404).json({ message: 'Data Not Found' });
        }
        try {
            const deleteExample = await Example.deleteOne({ _id: req.params.id });
            res.status(200).json(deleteExample);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

module.exports = ExampleController;