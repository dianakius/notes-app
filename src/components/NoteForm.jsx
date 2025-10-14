import { useState } from "react";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Work",
    priority: "Medium",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.description) return;

    //Create note object
    const newNote = { id: Date.now(), ...formData };

    //Add notes to state
    setNotes([newNote, ...notes]);

    //Reset form Data
    setFormData({
      title: "",
      category: "Work",
      priority: "Medium",
      description: "",
    });
  };

  return (
    <>
      {/*Toggle Button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border border-gray-00 text-black py-2 rounded-lg cursor-pointer hover:bg-yellow-200 hover:border-yellow-300 transition mb-4"
      >
        {isFormVisible ? "Hide Form x" : "Add New Note +"}
      </button>
      {/*Form*/}
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="title" className="block font-semibold">
              Title
            </label>
            <input
              name="title"
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
              name="priority"
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
              name="category"
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
              name="description"
              type="text"
              className="w-full p-2 border rounded-lg"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="w-full bg-yellow-400 text-white py-2 rounded-lg cursor-pointer hover:bg-yellow-500">
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
