const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="mx-auto text-center my-8 p-4 bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-xl max-w-xl">
            <p className="text-indigo-600 mb-2 font-semibold tracking-widest">{subHeading.toUpperCase()}</p>
            <h3 className="text-4xl font-bold uppercase text-gray-800 border-b-4 border-t-4 border-indigo-600 py-2">
                {heading}
            </h3>
        </div>
    );
};

export default SectionTitle;
