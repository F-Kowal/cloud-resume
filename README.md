# My Azure Cloud Resume

This project was created as part of Cloud Resume Challenge, it is a simple website that tracks and displays the number of visits to the page and shows my career achievements. It is deployed using **Azure Storage**, **Azure Functions**, and **Azure Cosmos DB**.

## Live Demo
[Azure Cloud Resume](https://cloudresumeacgstorage.z5.web.core.windows.net/)

## Technologies
- **Azure Blob Storage**
- **Azure Functions**
- **Azure Cosmos DB**
- **HTML, CSS, JavaScript**

## How It Works

<img src="https://i.imgur.com/fGxMOTT.png" width="700">

1. The static website is hosted on **Azure Blob Storage** and is accessible via a public URL.
2. When a user visits the page, the frontend makes a request to an **Azure Function** API.
3. The Azure Function written in C# retrieves the current visit count from **Cosmos DB**, increments it, and updates the database.
4. The new count is then displayed on the website.

## Future Improvements
- **Implement CI/CD** using **GitHub Actions** *(currently not possible due to Azure subscription limitations)*
- Add **unit tests** and **integration tests** for Azure Functions
- Add proper CDN and domain name
- Improve frontend design and content


