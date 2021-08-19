
export default function Info() {
    return (
        <div>
            <div className="grid gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">

                <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-xl shadow-sm dark:bg-gray-800">
                    <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                    </div>
                    <div>
                        <p className="mb-2 text-lg font-semibold text-gray-700">Kuota</p>
                        <p className="text-lg font-normal text-gray-600">89,281</p>
                    </div>
                </div>

                <div className="flex items-center p-4 bg-white border-2  border-gray-200 rounded-xl shadow-sm dark:bg-gray-800">
                    <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg>
                    </div>
                    <div>
                        <p className="mb-2 text-lg font-semibold text-gray-700">Pendaftar</p>
                        <p className="text-lg font-normal text-gray-600">77,064</p>
                        <p className="text-sm font-normal text-gray-500"></p>
                    </div>
                </div>

                <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-xl shadow-sm dark:bg-gray-800">
                    <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                    </div>
                    <div>
                        <p className="mb-2 text-lg font-semibold text-gray-700">Lulus Tahap 1</p>
                        <p className="text-lg font-medium text-gray-600">53,914</p>
                    </div>
                </div>

                <div className="flex items-center p-4 bg-white border-2 border-gray-200 rounded-xl shadow-sm dark:bg-gray-800">
                    <div className="p-3 mr-4 bg-blue-500 text-white rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                    </div>
                    <div>
                        <p className="mb-2 text-lg font-semibold text-gray-700">Lulus Tahap 2</p>
                        <p className="text-lg font-normal text-gray-600">11,673</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
