// pages/api/items.js

// Import necessary modules
import itemsData from '@/Data/init_data.json';

export default function handler(req, res) {
  res.status(200).json(itemsData.data);
}
