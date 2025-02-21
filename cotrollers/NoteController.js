import Notes from "../models/NoteModel.js";

const getNotes = async(req, res) => {
  try {
    const response = await Notes.findAll(); // finAll() nanti auto SELECT * FROM users
    res.status(200).json(response);
  } catch(error) {
    console.log(error);
  };
};

const getByOwner = async(req, res) => {
  try {
    const owner = req.params.owner;
    if(!owner) {
      return res.status(400).json({ msg: "User cant be empty!" });
    } 

    const response = await Notes.findAll({
      where: {
        owner: owner,
      }
    });

    // error message kalau owner tidak ditemukan
    if(response.length === 0) {
      return res.status(404).json({ msg: "User not found!" });
    } else{
      res.status(200).json(response);
    };
    
  } catch(error) {
    res.status(400).json({ msg: "Error getOwner func" })
    console.log(error);
  };
};

const createNote = async(req, res) => {
  try {
    await Notes.create(req.body);
    res.status(200).json({ msg: "Successfully added!" });
  } catch(error) {
    console.log(error);
  }
}

const updateNote = async(req, res) => {
  try {
    const { owner, id } = req.params;
    const { title, contain } = req.body;

    if(!owner || !id) {
      return res.status(400).json({ msg: "Owner or ID is empty!" })
    };

    const existingData = await Notes.findOne({
      where: {
        owner: owner,
        id: id
      }
    });

    if(!existingData) {
      return res.status(400).json({ msg: "Data not found!" });
    };

    const newData = {
      title: title || existingData.title,
      contain: contain || existingData.contain
    };

    await Notes.update(newData, {
      where: {
        owner: owner,
        id: id
      }
    });
    res.status(200).json({ msg: "Successfully updated!" });
    
  } catch(error) {
    res.status(400).json({ msg: "Error update" });
  };
}

const deleteNote = async(req, res) => {
  try {
    const { owner, id } = req.params ?? res.status(400).json({ msg: "Owner or ID is empty!" });

    const del = await Notes.destroy({
      where: {
        owner: owner,
        id: id
      }
    });
    
    if(!del) {
      return res.status(400).json({ msg: "Owner or ID not found!" }) 
    };
    res.status(200).json({ msg: "Successfully deleted!" });
  } catch(error) {
    res.status(400).json({ msg: "Error delete!" });
  }
}

export { getNotes, getByOwner, createNote, updateNote, deleteNote };