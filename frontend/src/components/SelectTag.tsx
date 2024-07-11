import { blogInputtype } from "src/routes/createBlog";

interface SelectTagProps {
    SetBlogInput: React.Dispatch<React.SetStateAction<blogInputtype>>;
    handleTagSelection: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  
 export  function SelectTag({
    SetBlogInput, // This might not be needed anymore if you're directly using handleTagSelection
    handleTagSelection,
  }: SelectTagProps) {
    return (
      <>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select a Tag
          </label>
          <select
            id="tags"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleTagSelection} // Use the passed function here
          >
            <option value="React">React</option>
            <option value="Ai">Ai</option>
            <option value="Coding">Coding</option>
            <option value="Tech">Tech</option>
          </select>
        </div>
      </>
    );
  }