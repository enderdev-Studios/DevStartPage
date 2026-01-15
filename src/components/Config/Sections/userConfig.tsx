import ConfigButton from "../ButtonConfig";

export default function UserConfig({ onSubmit }: { onSubmit: (e: any) => void }) {
 

  const handleClick = (e: any) => {
    e.stopPropagation();
  };

  return (
    <li className="w-full text-left p-1 rounded mt-1">
      <form className="m-3" onSubmit={(e) => onSubmit(e)}>
        <input
          type="text"
          name="username"
          placeholder="enderdev, marcrock22"
          className="mb-2 p-2 rounded focus:border-b-2 focus:border-[#7c7f93] outline-0" 
          required
          onClick={handleClick}
        />
        <ConfigButton props={{ onClick:handleClick, "itemType": "submit" }}>
          Save Username
        </ConfigButton>
      </form>
    </li>
    );
}