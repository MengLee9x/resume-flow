export const getCommonInfo = async () => {
    try {
        const response = await fetch('http://localhost:4000/api/common-info', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Error fetching common info");
    }
}