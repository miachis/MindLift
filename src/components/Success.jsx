export default function Success({ message }) {
	if (!message) return null;
	return (
		<div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] sm:w-auto max-w-md px-4">
			<div className="bg-green-100 text-green-700 border border-green-200 rounded-lg px-4 py-3 shadow-md text-center font-medium break-words">
				{message}
			</div>
		</div>
	);
}
