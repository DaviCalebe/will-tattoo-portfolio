const GalleryPagination = ({
    currentPage,
    totalPages,
    onChange,
}) => {
    return (
        <div className="flex gap-2 h-full">
            {Array.from({ length: totalPages }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => onChange(index)}
                    className={
                        currentPage === index
                            ? "w-10 h-10 rounded-lg filter brightness-50 invert bg-primary text-white hover:cursor-pointer"
                            : "w-10 h-10 rounded-lg bg-primary text-white hover:cursor-pointer"
                    }
                >
                    {index + 1}
                </button>
            ))}
        </div>
    );
};

export default GalleryPagination;