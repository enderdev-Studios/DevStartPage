import { UrlDomain } from "../../constants/constants";
import { useMobile } from "../../Hooks/useMobile";


export default function Shortcut({ name, url, Onclick }: { name: string, url: string, Onclick: () => any }) {
    const domain = new URL(url).origin;
    const iconUrl = `${UrlDomain}${domain}`;
    const isMobile = useMobile()
    return (
        <div className="subtext-1 surface-0 shortcut">
                <button className="absolute top-0 right-0  hover:outline-0 hover:outline-white text-white font-bold py-1 px-2 rounded cursor-pointer"
                onClick={Onclick} title="Delete Shortcut">
                    <i className='bx bx-x'></i>
                </button>
            <a className="h-full flex flex-col items-center justify-center" href={url} target="_blank" rel="noopener noreferrer" title={name}>
                <img src={iconUrl} alt={name} width={isMobile ? 24 : 36} height={isMobile ? 24 : 36} className="m-2 mt-0 rounded-lg" />
                <span className="mt-1 font-bold max-md:text-xs">{name}</span>
            </a>
        </div>
    );
};
