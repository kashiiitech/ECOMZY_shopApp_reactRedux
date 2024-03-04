import "../components/Spinner.css"

const Spinner = () => {
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="spinner">
                
            </div>
            <div>Loading ...</div>
        </div>
    )
}

export default Spinner;