import ConfigButton from "../ButtonConfig";

export default function BackgroundImg({ onSubmit }: { onSubmit: (e: any) => void }) {
  const handleClick = (e: any) => {
    e.stopPropagation();
  };
  return (
    <li className="w-full text-left p-1 rounded mt-1">
      <form className="m-3" onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          name="imageUrl"
          placeholder="https:.../"
          className="mb-2 p-2 rounded focus:border-b-2 focus:border-[#7c7f93] outline-0" 
          required
          onClick={handleClick}
        />
        <ConfigButton props={{ onClick:handleClick, "itemType": "submit" }}>
          Save Image
        </ConfigButton>
      </form>
    </li>
    );
}