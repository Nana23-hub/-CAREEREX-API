const School = require ("../Model/newItems");

const handleCreateItems = async (req,res)=>{
  const { itemName, description, location, dateFounded,claimed } = req.body;
  if (!itemName || !description) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  const newSchool = new School({
    itemName,
    description,
    location,
    dateFounded,
    claimed
  })
  await newSchool.save();
  res.status(201).json({
     message: 'Item created successfully',
      newSchool 
    });
}

const handleGetItems = async (req,res)=>{
    const items = await School.find({claimed: false});
    if (items.length === 0) {
      return res.status(404).json({ message: 'No items found' });
    }
    res.status(200).json({
      message: 'Items viewed successfully',
      items
    });
}

const handleGetItemsById = async (req,res)=>{
  const { id } = req.params;
  const item = await School.findById(id);
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.status(200).json({
    message: 'Item viewed successfully',
    item
  });
}
const handleUpdateItems = async (req,res)=>{
  const { id} = req.params;
  const { itemName, description, location, dateFounded, claimed } = req.body;
  const updatedItem = await School.findByIdAndUpdate(id,
    { itemName, description, location, dateFounded, claimed },
    { new: true }
  )

  res.status(200).json({
    message: 'Item updated successfully',
    updatedItem
  });
}

const handleDeleteItems = async (req,res)=>{
  const { id } = req.params;
  const deletedItem = await School.findByIdAndDelete(id);
  if (!deletedItem) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.status(200).json({
    message: 'Item deleted successfully',
    deletedItem
  });
}

module.exports = {
    handleCreateItems,
    handleGetItems,
    handleGetItemsById,
    handleUpdateItems,
    handleDeleteItems
}
