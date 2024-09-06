export async function authenticate(username, password) {
    try {
        const response = await fetch(`http://localhost:3000/users?username=${username}&password=${password}`)
        const users = response.json()

        if (users.length > 0) {
            const user = users[0];
            // Save user to localStorage to persist session
            localStorage.setItem('user', JSON.stringify(user));
            return user;
        } else {
            throw new Error("Invalid credentials");
        }
    } catch (error) {
         throw new Error("Error during authentication");
    }
  }