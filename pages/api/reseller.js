import { mongooseConnect } from "@/lib/mongoose";
import { Vendor } from "@/models/Vendor";
export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "POST") {
    const { title, email, description, number, images, idnum, kra } = req.body;
    const vendor = new Vendor({
      title,
      email,
      description,
      number,
      images,
      idnum,
      kra,
    });
    try {
      await vendor.save();
      res.json(vendor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  if (method === "PUT") {
    const session = await getServerSession(req, res, authOptions);
    const userId = session?.userId;
    const product = await Product.findById(req.body._id);

    const { title, description, price, images, category, properties, _id } =
      req.body;
    await Product.updateOne(
      { _id },
      { title, description, price, images, category, properties }
    );
    await user.findByIdAndUpdate(userId, { $push: { products: product._id } });
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      const session = await getServerSession(req, res, authOptions);
      const userId = session?.userId;
      const product = await Product.findById(req.query.id);
      await Product.deleteOne({ _id: req.query?.id });
      await user.findByIdAndUpdate(userId, {
        $pull: { products: product._id },
      });
      res.json(true);
    }
  }
}
