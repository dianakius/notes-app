import { useState } from "react";

const NoteForm = ({notes, setNotes}) => {
 const [formData, setFormData] = useState({
  title: '',
  category: 'Work',
  priority:'Medium',
  description: ''
 })

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  })
};

const handleSubmit = (e) => {
  e.preventDefault();
if (!formData.title || !formData.description) return;

//Create note object
const newNote = {id: Date.now(), ...formData };

//Add notes to state
setNotes([newNote, ...notes]);

//Reset form Data
setFormData({
  title: '',
  category: 'Work',
  priority:'Medium',
  description: ''
})
};

  return (
    <form onSubmit={handleSubmit}
    className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block font-semibold">
          Title
        </label>
        <input
        name='title'
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="priority" className="block font-semibold">
          Priority
        </label>
        <select
        name='priority'
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.priority}
          onChange={handleChange}
        >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="category" className="block font-semibold">
          Category
        </label>
        <select
        name='category'
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.category}
          onChange={handleChange}
        >
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Ideas">Ideas</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block font-semibold">
          Description
        </label>
        <textarea
        name='description'
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.description}
          onChange={handleChange}>
            </textarea>
      </div>
      <button className="w-full bg-yellow-500 text-white py-2 rounded-lg cursor-pointer hover:bg-yellow-700">Add Note</button> 
    </form>
  );
};

export default NoteForm;
