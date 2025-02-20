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
        title: "Power BI Bootcamp Final Project – \"NEWSPAPER\" by Murilo Farias",
        description: "This project was created as the final assignment for the Power BI Bootcamp, which was conducted entirely in English from April to June.<br><br>" +
            "Acknowledgments:<br>" +
            "- Special thanks to Nikola Ilic for the opportunity to participate.<br>" +
            "- Gratitude to Augustin Dokoza Bukvic for all the classes and guidance throughout the bootcamp.<br><br>" +
            "Project Overview:<br>" +
            "- Project Name: NEWSPAPER<br>" +
            "- Tool Used: Power BI<br>" +
            "- Focus: Creating interactive and insightful dashboards using Power BI, applying all the concepts learned during the bootcamp.<br>" +
            "- Outcome: Improved data visualization skills and enhanced English proficiency.<br><br>" +
            "Database Management System (DBMS):<br>" +
            "For this project, I used a Relational Database Management System (RDBMS) to store and query the dataset before importing it into Power BI.<br>" +
            "SQL queries were applied to clean, join, and aggregate the data, ensuring it was well-structured and ready for visualization.<br><br>" +
            "Tools Used:<br>" +
            "- SGBD (RDBMS): For data storage, querying, and preprocessing (SQL)<br>" +
            "- Power BI: For data modeling and interactive visualizations<br><br>" +
            "The interactive dashboard can be viewed below:<br><br>" +
            "<iframe title='Project' width='600' height='373.5' src='https://app.powerbi.com/view?r=eyJrIjoiZmNmOTBmNTgtMGE5ZS00NWQ0LTk2OGMtODM2MDI5NjBjNTA3IiwidCI6IjNlMWMxODA4LTZlNzItNDY2Yi1iZDU0LTU0ZWUwYWVkNjYyMSJ9' frameborder='0' allowFullScreen='true'></iframe>",
        image: "/Projects/P5/P5.jpg",
        iframe: "",
        pdf: ""
    },
    {
        title: "Kubik Engineering General Report – Power BI Dashboard by Murilo Farias",
        description: "This project presents a comprehensive Power BI dashboard created for Kubik Engenharia, designed to provide key insights and support decision-making processes.<br><br>" +
            "Project Overview:<br>" +
            "- Client: Kubik Engenharia<br>" +
            "- Tool Used: Power BI<br>" +
            "- Objective: To offer an interactive and detailed view of company operations through insightful visualizations and essential KPIs.<br><br>" +
            "Workflow and Development Process:<br>" +
            "- Data Connection (SharePoint): Integrated the dataset directly from SharePoint for real-time access.<br>" +
            "- Data Transformation (Power Query): Cleaned and prepared the data for analysis.<br>" +
            "- Data Modeling: Established relationships between tables for efficient data visualization.<br>" +
            "- Dashboard Development: Created interactive visuals, including performance indicators and trends.<br><br>" +
            "Data Source and Connection:<br>" +
            "- SharePoint: Used as the primary data source to connect and import data into Power BI, ensuring seamless updates and collaboration.<br><br>" +
            "Tools Used:<br>" +
            "- SharePoint: For data storage and direct integration with Power BI<br>" +
            "- Power BI (Power Query): For data transformation and visualization<br><br>" +
            "The interactive dashboard can be viewed below:<br><br>" +
            "<iframe title='Relatorio_Geral_Kubik' width='600' height='373.5' src='https://app.powerbi.com/view?r=eyJrIjoiN2UwMDk5NzQtN2ZmYi00MjVmLWFmYWEtNzFlN2U0ZWZhZDkyIiwidCI6IjNlMWMxODA4LTZlNzItNDY2Yi1iZDU0LTU0ZWUwYWVkNjYyMSJ9' frameborder='0' allowFullScreen='true'></iframe>",
        image: "/Projects/P6/P6.jpg",
        iframe: "",
        pdf: ""
    },
    {
        title: "Power BI Dashboard Overview – UFV (Usinas Fotovoltaicas)",
        description: "This Power BI dashboard provides a comprehensive analysis of solar power plants (UFVs) across different regions of Brazil, highlighting their distribution, capacity, and regional contributions.<br><br>" +
            "📊 Key Metrics:<br>" +
            "- Total Number of Solar Plants: 54<br>" +
            "- Total Installed Capacity: 173,657 kWp<br><br>" +
            "🗺️ Geographical Distribution:<br>" +
            "The map displays the locations of solar plants by region, color-coded as:<br>" +
            "🟣 Centro-Oeste<br>" +
            "🧡 Nordeste<br>" +
            "🔵 Norte<br>" +
            "🟡 Sudeste<br>" +
            "🔵 Sul<br><br>" +
            "📈 Installed Capacity by Region:<br>" +
            "The Treemap on the bottom right shows the contribution of each region:<br><br>" +
            "- Sudeste: 104.15 thousand kWp (largest contributor)<br>" +
            "- Sul: 30.33 thousand kWp<br>" +
            "- Nordeste: 27.63 thousand kWp<br>" +
            "- Centro-Oeste: 6.2 thousand kWp<br>" +
            "- Norte: 5.3 thousand kWp<br><br>" +
            "📊 Top States by Number of Plants (Bar Chart):<br>" +
            "- SP (São Paulo): 17 plants<br>" +
            "- MG (Minas Gerais): 12 plants<br>" +
            "- RS (Rio Grande do Sul): 9 plants<br><br>" +
            "📃 Detailed Plant List (Table):<br>" +
            "The table lists the solar plants in São Paulo (SP), highlighting their installed capacities (in kWp). Examples include:<br><br>" +
            "- Barretos (Colombia): 6,560.96 kWp<br>" +
            "- Cachoeira Paulista: 1,311.96 kWp<br>" +
            "- Estância (Fernandópolis): 5,524.20 kWp<br><br>" +
            "💡 Insights:<br>" +
            "- The Southeast (Sudeste) region leads both in the number of plants and total capacity.<br>" +
            "- São Paulo (SP) is the most significant contributor within the Southeast.<br>" +
            "- The South (Sul) and Northeast (Nordeste) also have notable contributions.<br><br>" +
            "This dashboard is a clear, data-driven tool for analyzing the distribution and performance of solar energy production across Brazil. 🚀☀️📊<br><br>" +
            "The interactive dashboard can be viewed below:<br><br>" +
            "<iframe title='Dashboard_GDSUN' width='600' height='373.5' src='https://app.powerbi.com/view?r=eyJrIjoiOWIwYTg1ZmUtMzlmZi00NmQ2LWJkMGMtNDg5YWU2ODU0OTY4IiwidCI6IjNlMWMxODA4LTZlNzItNDY2Yi1iZDU0LTU0ZWUwYWVkNjYyMSJ9' frameborder='0' allowFullScreen='true'></iframe>",
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