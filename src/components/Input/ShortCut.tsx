import { UrlDomain } from "../../constants/constants";


export default function Shortcut({ name, url, Onclick }: { name: string, url: string, Onclick: () => any }) {
    const domain = new URL(url).origin;
    const iconUrl = `${UrlDomain}${domain}`;
    return (
        <div className="subtext-1 surface-0 dark:hover:bg-overlay-mocha-0 hover:bg-overlay-latte-0 h-28 w-24 rounded-lg relative dark:text-[#cdd6f4] text-[#4c4f69] hover:dark:text-blue-mocha-0 hover:text-blue-latte-0">
                <button className="absolute top-0 right-0  hover:outline-0 hover:outline-white text-white font-bold py-1 px-2 rounded cursor-pointer"
                onClick={Onclick} title="Delete Shortcut">
                    <i className='bx bx-x'></i>
                </button>
            <a className="h-full flex flex-col items-center justify-center" href={url} target="_blank" rel="noopener noreferrer" title={name}>
                <img src={iconUrl} alt={name} width={36} height={36} className="m-2 mt-0 rounded-lg" />
                <span className="mt-1 font-bold">{name}</span>
            </a>
        </div>
    );
};
