export default async function useRefreshToken(navigate, setError) {
	const refreshTokenResponse = await fetch("http://localhost:8080/refresh", {
		method: "POST",
		credentials: "include",
	});

	if (!refreshTokenResponse.ok) {
		if (
			refreshTokenResponse.status === 401 ||
			refreshTokenResponse.status === 404 ||
			refreshTokenResponse.status === 403
		) {
			navigate("/login");
		}

		if (refreshTokenResponse.status === 500) {
			navigate("/");
			setError("An error occured");
			setTimeout(() => {
				setError("");
			}, 3000);
		}
		return false;
	}

	return true;
}
