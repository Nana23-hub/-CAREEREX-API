import express from 'express'
import mongoose from 'mongoose';
import School from  './newItems.js';

const app = express()

app.use(express.json());

const PORT = process.env.PORT || 6000





async function main() {
  await mongoose.connect('mongodb+srv://aishatcareerexproject:ayooladele1234@cluster0.rodflx0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('Step 2: Connected to MongoDB')

}

app.listen(PORT, async()=> {
 await main().catch(err => console.log(err));
  console.log(`Step 1: Server is running on port ${PORT}`)

  
})

app.post('/create-items', async (req,res)=>{
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
})
 
app.get('/get-items', async (req,res)=>{
    const items = await School.find({claimed: false});
    if (items.length === 0) {
      return res.status(404).json({ message: 'No items found' });
    }
    res.status(200).json({
      message: 'Items viewed successfully',
      items
    });
})

  
app.get('/getting-item/:id', async (req,res)=>{
  const { id } = req.params;
  const item = await School.findById(id);
  if (!item) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.status(200).json({
    message: 'Item viewed successfully',
    item
  });
})

app.put('/update-item/:id',async (req,res)=>{
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
})

app.delete('/delete-item/:id', async (req,res)=>{
  const { id } = req.params;
  const deletedItem = await School.findByIdAndDelete(id);
  if (!deletedItem) {
    return res.status(404).json({ message: 'Item not found' });
  }
  res.status(200).json({
    message: 'Item deleted successfully',
    deletedItem
  });
})

//ayooladele1234
//aishatcareerexproject