

export default function Section({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <div className="dark:bg-mantle-mocha/50 bg-mantle-latte/50 w-full text-left p-1 rounded-sm mt-2 mb-3">
            <h1 className="dark:text-[#bac2de] text-[#5c5f77] font-bold ml-3 mt-3 text-lg">{title}</h1>
            {children}
        </div>
    );
};
