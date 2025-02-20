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
        title: "Machine Learning Project",
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
        image: "/Projects/P2/P2.jpg",
        iframe: "",
        pdf: ""
    },
    {
        title: "Data Warehouse Design",
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
        image: "/Projects/P3/P3.jpg",
        iframe: "",
        pdf: ""
    },
    {
        title: "ETL Process Automation",
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