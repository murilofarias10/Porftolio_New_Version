let currentProject = 1;

const projects = [
    {
        title: "Exploratory Data Analysis",
        description: "This project, submitted to DIO, analyzes two years of sales data for Company X using Python.<br>" +
            "It provides insights through various charts, including pie, bar, line, box plot, and histogram.<br>" +
            "Key findings include the <strong>top-selling product</strong>, annual and monthly profits, best-selling brands,<br>" +
            "and shipping time statistics. The full code and dataset are available on GitHub:<br>" +
            "<a href='https://github.com/murilofarias10/R_SQL_OUTROS/blob/main/AnaliseExploratoriaPython/AnaliseExploratoriaDIO.ipynb' target='_blank'>GitHub Repo</a><br><br>" +
            "Libraries used:<br>" +
            "- pandas – for data manipulation and analysis<br>" +
            "- numpy – for numerical operations<br>" +
            "- matplotlib – for static, animated, and interactive visualizations<br>" +
            "- seaborn – for statistical data visualization<br>" +
            "- plotly (optional) – for interactive visualizations<br>" +
            "- scipy – for statistical analysis (e.g., detecting outliers)",
        image: "/Projects/P1/FP1.jpg",
        iframe: "",
        pdf: "/Projects/P1/Results1.pdf"
        
    },
    {
        title: "STONE Data Challenge 2022",
        description: "This project focuses on data analysis and predictive modeling for the STONE Data Challenge 2022.<br>" +
            "The dataset was cleaned, analyzed, and visualized to extract key insights.<br>" +
            "Statistical methods were applied to detect trends and outliers,<br>" +
            "and machine learning models were implemented to predict future behaviors.<br><br>" +
            "The full code and dataset are available on GitHub:<br>" +
            "<a href='https://github.com/murilofarias10/STONE_DATA_CHALLENGE_2022-MURILO-FARIAS/tree/main' target='_blank'>GitHub Repo</a><br><br>" +
            "SQL Database:<br>" +
            "- MySQL (SGBD) for data storage and querying<br><br>" +
            "Python Libraries:<br>" +
            "- pandas – for data manipulation and analysis<br>" +
            "- numpy – for numerical operations<br>" +
            "- matplotlib – for creating static visualizations<br>" +
            "- seaborn – for statistical data visualization<br>" +
            "- scikit-learn – for machine learning and predictive modeling",
        image: "/Projects/P2/P2.jpg",
        iframe: "",
        pdf: ""
    },
    {
        title: "Serper API Integration with Python",
        description: "This project demonstrates how to interact with the Serper API to retrieve structured JSON responses using Python.<br>" +
            "The API allows up to 2,500 free queries, making it a great option for testing without initial costs.<br><br>" +
            "API Features:<br>" +
            "- Structured JSON responses for easy data handling<br>" +
            "- Free tier with 2,500 queries<br>" +
            "- A user-friendly dashboard to track queries<br>" +
            "- A playground for testing code<br>" +
            "- Support for multiple programming languages (Python, JavaScript, C, etc.)<br><br>" +
            "Python Libraries Used:<br>" +
            "- requests – for handling API calls<br>" +
            "- json – for processing structured API responses<br><br>" +
            "The full code and implementation details are available on GitHub:<br>" +
            "<a href='https://github.com/murilofarias10/Python/blob/main/AI/API_Serper.py' target='_blank'>GitHub Repo</a>",
        image: "/Projects/P3/P3.jpg",
        iframe: "",
        pdf: ""
    }
    ,
    {
        title: "XHospital: Insights and Indicators – Murilo Farias",
        description: "This project was developed for the Xperiun Challenge (Leonardo Karpinski – Learn Power BI), showcasing a commitment to transforming data into actionable insights.<br><br>" +
            "Data Source:<br>" +
            "- Data World<br><br>" +
            "Project Workflow:<br>" +
            "- SQL Analysis: Conducted a detailed SQL analysis to ensure data integrity and accuracy.<br>" +
            "- Power Query Data Preparation: Cleaned and transformed the data for advanced analysis.<br>" +
            "- Data Modeling: Created and optimized relationships between tables for a solid analytical foundation.<br>" +
            "- Interactive Dashboards: Developed essential measures and intuitive visuals to highlight insights clearly and effectively.<br><br>" +
            "Key Outcome:<br>" +
            "The dashboard supports daily hospital management and helps identify improvement opportunities through a user-friendly interface designed for efficient decision-making.<br><br>" +
            "Tools Used:<br>" +
            "- SQL: For data integrity checks and initial analysis.<br>" +
            "- Power BI (Power Query): For data cleaning, transformation, modeling, and visualization.<br><br>" +
            "Execution Time: 20 hours<br><br>" +
            "The interactive dashboard can be viewed below:<br><br>" +
            "<iframe title='XHospital_Murilo_Farias' width='600' height='373.5' src='https://app.powerbi.com/view?r=eyJrIjoiYjI5OWM1MmMtZDlkMS00MzMwLWFjNzktYmI3NGQxNDViNTcwIiwidCI6IjNlMWMxODA4LTZlNzItNDY2Yi1iZDU0LTU0ZWUwYWVkNjYyMSJ9' frameborder='0' allowFullScreen='true'></iframe>",
        image: "/Projects/P4/P4.jpg",
        iframe: "",
        pdf: ""
    },
    {
        title: "SQL Optimization Project",
        description: "This project, submitted to DIO, analyzes two years of sales data for Company X using Python.<br>" +
            "It provides insights through various charts, including pie, bar, line, box plot, and histogram.<br>" +
            "Key findings include the <strong>top-selling product</strong>, annual and monthly profits, best-selling brands,<br>" +
            "and shipping time statistics. The full code and dataset are available on GitHub:<br>" +
            "<a href='https://github.com/murilofarias10/R_SQL_OUTROS/blob/main/AnaliseExploratoriaPython/AnaliseExploratoriaDIO.ipynb' target='_blank'>GitHub Repo</a><br><br>" +
            "Libraries used:<br>" +
            "- pandas – for data manipulation and analysis<br>" +
            "- numpy – for numerical operations<br>" +
            "- matplotlib – for static, animated, and interactive visualizations<br>" +
            "- seaborn – for statistical data visualization<br>" +
            "- plotly (optional) – for interactive visualizations<br>" +
            "- scipy – for statistical analysis (e.g., detecting outliers)",
        image: "/Projects/P5/P5.jpg",
        iframe: "https://app.powerbi.com/view?r=eyJrIjoiZmNmOTBmNTgtMGE5ZS00NWQ0LTk2OGMtODM2MDI5NjBjNTA3IiwidCI6IjNlMWMxODA4LTZlNzItNDY2Yi1iZDU0LTU0ZWUwYWVkNjYyMSJ9",
        pdf: ""
    },
    {
        title: "Python Automation Project",
        description: "This project, submitted to DIO, analyzes two years of sales data for Company X using Python.<br>" +
            "It provides insights through various charts, including pie, bar, line, box plot, and histogram.<br>" +
            "Key findings include the <strong>top-selling product</strong>, annual and monthly profits, best-selling brands,<br>" +
            "and shipping time statistics. The full code and dataset are available on GitHub:<br>" +
            "<a href='https://github.com/murilofarias10/R_SQL_OUTROS/blob/main/AnaliseExploratoriaPython/AnaliseExploratoriaDIO.ipynb' target='_blank'>GitHub Repo</a><br><br>" +
            "Libraries used:<br>" +
            "- pandas – for data manipulation and analysis<br>" +
            "- numpy – for numerical operations<br>" +
            "- matplotlib – for static, animated, and interactive visualizations<br>" +
            "- seaborn – for statistical data visualization<br>" +
            "- plotly (optional) – for interactive visualizations<br>" +
            "- scipy – for statistical analysis (e.g., detecting outliers)",
        image: "/Projects/P6/P6.jpg",
        iframe: "",
        pdf: ""
    },
    {
        title: "Data Visualization with Power BI",
        description: "This project, submitted to DIO, analyzes two years of sales data for Company X using Python.<br>" +
            "It provides insights through various charts, including pie, bar, line, box plot, and histogram.<br>" +
            "Key findings include the <strong>top-selling product</strong>, annual and monthly profits, best-selling brands,<br>" +
            "and shipping time statistics. The full code and dataset are available on GitHub:<br>" +
            "<a href='https://github.com/murilofarias10/R_SQL_OUTROS/blob/main/AnaliseExploratoriaPython/AnaliseExploratoriaDIO.ipynb' target='_blank'>GitHub Repo</a><br><br>" +
            "Libraries used:<br>" +
            "- pandas – for data manipulation and analysis<br>" +
            "- numpy – for numerical operations<br>" +
            "- matplotlib – for static, animated, and interactive visualizations<br>" +
            "- seaborn – for statistical data visualization<br>" +
            "- plotly (optional) – for interactive visualizations<br>" +
            "- scipy – for statistical analysis (e.g., detecting outliers)",
        image: "/Projects/P7/P7.jpg",
        iframe: "",
        pdf: ""
    },
    {
        title: "Building 8 ",
        description: "This project, submitted to DIO, analyzes two years of sales data for Company X using Python.<br>" +
            "It provides insights through various charts, including pie, bar, line, box plot, and histogram.<br>" +
            "Key findings include the <strong>top-selling product</strong>, annual and monthly profits, best-selling brands,<br>" +
            "and shipping time statistics. The full code and dataset are available on GitHub:<br>" +
            "<a href='https://github.com/murilofarias10/R_SQL_OUTROS/blob/main/AnaliseExploratoriaPython/AnaliseExploratoriaDIO.ipynb' target='_blank'>GitHub Repo</a><br><br>" +
            "Libraries used:<br>" +
            "- pandas – for data manipulation and analysis<br>" +
            "- numpy – for numerical operations<br>" +
            "- matplotlib – for static, animated, and interactive visualizations<br>" +
            "- seaborn – for statistical data visualization<br>" +
            "- plotly (optional) – for interactive visualizations<br>" +
            "- scipy – for statistical analysis (e.g., detecting outliers)",
        image: "/Projects/CMS.jpg",
        iframe: "",
        pdf: ""
    },
    {
        title: "Building 9",
        description: "This project, submitted to DIO, analyzes two years of sales data for Company X using Python.<br>" +
            "It provides insights through various charts, including pie, bar, line, box plot, and histogram.<br>" +
            "Key findings include the <strong>top-selling product</strong>, annual and monthly profits, best-selling brands,<br>" +
            "and shipping time statistics. The full code and dataset are available on GitHub:<br>" +
            "<a href='https://github.com/murilofarias10/R_SQL_OUTROS/blob/main/AnaliseExploratoriaPython/AnaliseExploratoriaDIO.ipynb' target='_blank'>GitHub Repo</a><br><br>" +
            "Libraries used:<br>" +
            "- pandas – for data manipulation and analysis<br>" +
            "- numpy – for numerical operations<br>" +
            "- matplotlib – for static, animated, and interactive visualizations<br>" +
            "- seaborn – for statistical data visualization<br>" +
            "- plotly (optional) – for interactive visualizations<br>" +
            "- scipy – for statistical analysis (e.g., detecting outliers)",
        image: "/Projects/CMS.jpg",
        iframe: "",
        pdf: ""
    },
    {
        title: "Building 10",
        description: "This project, submitted to DIO, analyzes two years of sales data for Company X using Python.<br>" +
            "It provides insights through various charts, including pie, bar, line, box plot, and histogram.<br>" +
            "Key findings include the <strong>top-selling product</strong>, annual and monthly profits, best-selling brands,<br>" +
            "and shipping time statistics. The full code and dataset are available on GitHub:<br>" +
            "<a href='https://github.com/murilofarias10/R_SQL_OUTROS/blob/main/AnaliseExploratoriaPython/AnaliseExploratoriaDIO.ipynb' target='_blank'>GitHub Repo</a><br><br>" +
            "Libraries used:<br>" +
            "- pandas – for data manipulation and analysis<br>" +
            "- numpy – for numerical operations<br>" +
            "- matplotlib – for static, animated, and interactive visualizations<br>" +
            "- seaborn – for statistical data visualization<br>" +
            "- plotly (optional) – for interactive visualizations<br>" +
            "- scipy – for statistical analysis (e.g., detecting outliers)",
        image: "/Projects/CMS.jpg",
        iframe: ""
    }
];

function showProject(index) {
    currentProject = index;

    // Esconde todos os cards de projeto
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => card.style.display = 'none');

    // Mostra o card de projeto correto
    const projectCard = document.getElementById(`project-card-${index}`);
    projectCard.style.display = 'block';

    const iframe = projectCard.querySelector('iframe');
    const projectTitle = projectCard.querySelector('h3');
    const projectDescription = projectCard.querySelector('p');
    const projectImage = projectCard.querySelector('img');
    const viewDetailsBtn = projectCard.querySelector('.view-details-btn');

    iframe.style.display = 'none';

    const project = projects[index - 1];

    projectTitle.textContent = project.title;
    projectDescription.innerHTML = project.description;
    projectImage.src = project.image;


    viewDetailsBtn.onclick = () => {
        if (project.iframe) {
            if (iframe.style.display === 'block') {
                iframe.style.display = 'none';
            } else {
                iframe.style.display = 'block';
                iframe.src = project.iframe;
            }
        } else if (project.pdf) {
            if (iframe.style.display === 'block') {
                iframe.style.display = 'none';
            } else {
                iframe.style.display = 'block';
                iframe.src = project.pdf;
            }
        } else {
            alert("Details for this project are not available yet.");
        }
    };

    const buttons = document.querySelectorAll('.project-menu .btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[index - 1].classList.add('active');
}

function previousProject() {
    if (currentProject > 1) {
        showProject(currentProject - 1);
    }
}

function nextProject() {
    if (currentProject < projects.length) {
        showProject(currentProject + 1);
    }
}

window.onload = function () {
    showProject(currentProject);
};