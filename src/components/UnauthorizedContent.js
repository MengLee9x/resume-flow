const UnauthorizedContent = () => {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
            <div className="text-center p-8 bg-white shadow-md rounded-lg">
                <h2 className="text-2xl font-semibold text-red-600 mb-4">Access denied</h2>
                <p className="text-gray-600">You do not have permission to view this page</p>
            </div>
        </div>
    )
}

export default UnauthorizedContent;