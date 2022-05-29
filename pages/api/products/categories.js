import nc from "next-connect";

const handler = nc();

handler.get(async (req, res) => {
  const categories = ["Coffee", "Cake"];
  res.send(categories);
});

export default handler;
