import express from "express";

const app = express();
app.use(express.json());

let userPinjam = [{ id: 1, namaBuku: "", peminjam: "" }];

// GET
app.get("/user", function (req, res) {
  res.status(200).json({ msg: "Succses", data: userPinjam });
});

// POST
app.post("/user", (req, res) => {
  const { namaBuku } = req.body;
  const { peminjam } = req.body;

  userPinjam.push({
    id: userPinjam.length + 1,
    namaBuku: namaBuku,
    peminjam: peminjam,
  });
  res.status(200).json({ msg: "Berhail" });
});


//  PUT

app.put("/user/:id", (req, res) => {
  const { id } = req.params;
  const { namaBuku, peminjam } = req.body;

  let index = userPinjam.findIndex((item) => item.id == id);

  if (index === -1) {
    return res.status(404).json({ msg: "ID tidak ditemukan" });
  }
 
  userPinjam[index] = {
   
    id: userPinjam[index].id,
    namaBuku: namaBuku,
    peminjam: peminjam,
  };

  res
    .status(200)
    .json({ msg: `ID: ${id} updated successfully`, data: userPinjam[index] });
});

// DELETE
app.delete("/user/:id", (req, res) => {
  const { id } = req.params;
  let index = id - 1;
  userPinjam.splice(index, 1);

  res.status(200).json({ msg: "data sudah dihapus" });
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
