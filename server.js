const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // For CSS, JS, images

// Session configuration
app.use(session({
    secret: 'your-secret-key-change-this-in-production',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false, // Set to true in production with HTTPS
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Mock data - Replace with your actual data source
const mockStudents = {
    'STU001': { id: 'STU001', name: 'John Doe', email: 'john@university.edu' },
    'STU002': { id: 'STU002', name: 'Jane Smith', email: 'jane@university.edu' },
    'STU003': { id: 'STU003', name: 'Mike Johnson', email: 'mike@university.edu' }
};

const mockProjects = {
    'PROJ001': {
        id: 'PROJ001',
        title: 'AI in Healthcare',
        description: 'Research on machine learning applications in medical diagnosis',
        studentId: 'STU001',
        status: 'In Progress',
        createdDate: '2024-01-15'
    },
    'PROJ002': {
        id: 'PROJ002',
        title: 'Climate Change Analysis',
        description: 'Statistical analysis of climate data over the past decade',
        studentId: 'STU002',
        status: 'Completed',
        createdDate: '2024-02-01'
    },
    'PROJ003': {
        id: 'PROJ003',
        title: 'Quantum Computing Research',
        description: 'Exploring quantum algorithms for optimization problems',
        studentId: 'STU001',
        status: 'Planning',
        createdDate: '2024-03-10'
    }
};

// Authentication middleware
const requireAuth = (req, res, next) => {
    if (req.session.studentId) {
        next();
    } else {
        res.redirect('/');
    }
};

// Routes

// Login page (index.html)
app.get('/', (req, res) => {
    if (req.session.studentId) {
        return res.redirect('/main');
    }
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Login POST endpoint
app.post('/login', (req, res) => {
    const { studentId } = req.body;

    // TODO: Replace this with your actual student verification logic
    // This is where you'll integrate with your data source
    if (mockStudents[studentId]) {
        req.session.studentId = studentId;
        req.session.student = mockStudents[studentId];
        res.json({ success: true, redirect: '/main' });
    } else {
        res.status(401).json({ success: false, message: 'Invalid student ID' });
    }
});

// Main page (main.html)
app.get('/main', requireAuth, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'main.html'));
});

// API endpoint to get student info for main page
app.get('/api/student', requireAuth, (req, res) => {
    res.json(req.session.student);
});

// API endpoint to get student's projects
app.get('/api/projects', requireAuth, (req, res) => {
    const studentProjects = Object.values(mockProjects)
        .filter(project => project.studentId === req.session.studentId);
    res.json(studentProjects);
});

// Individual project page (projects.html)
app.get('/project/:projectId', requireAuth, (req, res) => {
    const projectId = req.params.projectId;
    const project = mockProjects[projectId];

    if (!project) {
        return res.status(404).send('Project not found');
    }

    // Check if the project belongs to the logged-in student
    if (project.studentId !== req.session.studentId) {
        return res.status(403).send('Access denied');
    }

    res.sendFile(path.join(__dirname, 'views', 'projects.html'));
});

// API endpoint to get specific project data
app.get('/api/project/:projectId', requireAuth, (req, res) => {
    const projectId = req.params.projectId;
    const project = mockProjects[projectId];

    if (!project) {
        return res.status(404).json({ error: 'Project not found' });
    }

    if (project.studentId !== req.session.studentId) {
        return res.status(403).json({ error: 'Access denied' });
    }

    res.json(project);
});

// Create new project
app.post('/api/projects', requireAuth, (req, res) => {
    const { title, description } = req.body;
    const projectId = 'PROJ' + String(Date.now()).slice(-6); // Simple ID generation

    const newProject = {
        id: projectId,
        title,
        description,
        studentId: req.session.studentId,
        status: 'Planning',
        createdDate: new Date().toISOString().split('T')[0]
    };

    mockProjects[projectId] = newProject;
    res.json(newProject);
});

// Update project
app.put('/api/project/:projectId', requireAuth, (req, res) => {
    const projectId = req.params.projectId;
    const project = mockProjects[projectId];

    if (!project || project.studentId !== req.session.studentId) {
        return res.status(404).json({ error: 'Project not found or access denied' });
    }

    const { title, description, status } = req.body;

    if (title) project.title = title;
    if (description) project.description = description;
    if (status) project.status = status;

    res.json(project);
});

// Delete project
app.delete('/api/project/:projectId', requireAuth, (req, res) => {
    const projectId = req.params.projectId;
    const project = mockProjects[projectId];

    if (!project || project.studentId !== req.session.studentId) {
        return res.status(404).json({ error: 'Project not found or access denied' });
    }

    delete mockProjects[projectId];
    res.json({ message: 'Project deleted successfully' });
});

// Logout
app.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ error: 'Could not log out' });
        }
        res.json({ success: true, redirect: '/' });
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start server
app.listen(PORT, () => {
    console.log('\x1b[31m%s\x1b[0m', `NEU Project Hub running on port ${PORT}`);
    console.log('\x1b[31m%s\x1b[0m', 'URL: http://localhost:' + PORT);
});

module.exports = app;