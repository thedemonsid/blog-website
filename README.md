## Blog Website
- [ ] Proper MongoDB integration.
- [x] Nextjs & shadcn setup
- [x] github Setup
- [x] Deploying the website
- [x] Adding PR Template
- [ ] Creating Home page 
- [ ] Creating Blogs page
- [ ] Creating Blog Component
- [ ] Adding Loaders and sonner
- [x] Database Connection
- [x] Backend routes(Basics)
- [x] Helper functions(fetch,delete,update)
- [ ] Backend routes(Advanced)
- [ ] Input Validation
- [x] Authentication
- [ ] Aesthetics


## Contributing to the Project
1. **Fork the Repository**: Start by forking the repository to your own GitHub account.

2. **Clone the Repository**: Next, clone the forked repository to your local machine:

    ```bash
    git clone https://github.com/<your-username>/<repository-name>.git
    ```

3. **Create a New Branch**: Navigate into the cloned repository and create a new branch for your changes:

    ```bash
    cd <repository-name>
    git checkout -b <branch-name>
    ```

    Replace `<branch-name>` with a descriptive name for your branch (e.g., `add-new-feature`).

4. **Make Your Changes**: Make the changes you want to contribute. Be sure to follow the project's coding standards and conventions.

5. **Commit Your Changes**: Once you've made your changes, stage and commit them:

    ```bash
    git add .
    git commit -m "Your descriptive commit message"
    ```

6. **Push Your Changes**: Push your changes to your forked repository on GitHub:

    ```bash
    git push origin <branch-name>
    ```

7. **Create a Pull Request**: Finally, navigate to your forked repository on GitHub and click the "New pull request" button. Select your branch from the dropdown menu and click "Create pull request".

Thank you for your contributions!

## Environment variables Setup 
| Environment Variable | Description |
| -------------------- | ----------- |
| `MONGO_URL`          | Your MongoDB connection string |
| `GITHUB_ID`          | Your GitHub App ID |
| `GITHUB_SECRET`      | Your GitHub App Secret |
| `GOOGLE_ID`          | Your Google Client ID |
| `GOOGLE_SECRET`      | Your Google Client Secret |
| `NEXTAUTH_SECRET`    | Your NextAuth Secret |

### Learn More About NextAuth and How to aquire github and google id/secret
[![NextAuth Tutorial](http://img.youtube.com/vi/MNm1XhDjX1s/0.jpg)](http://www.youtube.com/watch?v=MNm1XhDjX1s "NextAuth Tutorial")

### Learn More About MongoDB Integration
[![Integration Tutorial](http://img.youtube.com/vi/JIlYroSsInU/0.jpg)](https://youtu.be/JIlYroSsInU?si=MwQgEGMnMWrrrp6K "Integration Tutorial")

## Testing the Code

Before running the tests, make sure all the dependencies are installed. You can install them by running:

```bash
npm install
```
Check The Linting of your Local Code
```bash
npm run lint
```
Run The App In Developement Environment
```bash
npm run dev
```
