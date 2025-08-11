function PageLabel({ label }: { label: string }) {
    return (
        <div className="my-5 text-lg font-bold text-accent lg:hidden">
            {label}
        </div>
    );
}

export default PageLabel;

